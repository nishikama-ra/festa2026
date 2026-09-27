import * as THREE from '../vendor/three/three.module.js';
window.FestaGL = (() => {
 const TAU=Math.PI*2, clamp=(x,a,b)=>Math.min(b,Math.max(a,x));
 const V={add:(a,b)=>[a[0]+b[0],a[1]+b[1],a[2]+b[2]],sub:(a,b)=>[a[0]-b[0],a[1]-b[1],a[2]-b[2]],mul:(a,s)=>[a[0]*s,a[1]*s,a[2]*s],dot:(a,b)=>a[0]*b[0]+a[1]*b[1]+a[2]*b[2],cross:(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]],len:a=>Math.hypot(...a),norm:a=>{let l=Math.hypot(...a)||1;return a.map(v=>v/l);}};
 const M={
  identity:()=>new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),
  multiply:(a,b)=>{let o=new Float32Array(16);for(let c=0;c<4;c++)for(let r=0;r<4;r++)o[c*4+r]=a[r]*b[c*4]+a[4+r]*b[c*4+1]+a[8+r]*b[c*4+2]+a[12+r]*b[c*4+3];return o;},
  perspective:(fov,aspect,n,f)=>{let t=1/Math.tan(fov/2),o=new Float32Array(16);o[0]=t/aspect;o[5]=t;o[10]=(f+n)/(n-f);o[11]=-1;o[14]=2*f*n/(n-f);return o;},
  ortho:(l,r,b,t,n,f)=>new Float32Array([2/(r-l),0,0,0,0,2/(t-b),0,0,0,0,-2/(f-n),0,-(r+l)/(r-l),-(t+b)/(t-b),-(f+n)/(f-n),1]),
  lookAt:(eye,target,up=[0,1,0])=>{let z=V.norm(V.sub(eye,target)),x=V.norm(V.cross(up,z)),y=V.cross(z,x);return new Float32Array([x[0],y[0],z[0],0,x[1],y[1],z[1],0,x[2],y[2],z[2],0,-V.dot(x,eye),-V.dot(y,eye),-V.dot(z,eye),1]);},
  compose:(x=0,y=0,z=0,yaw=0,sx=1,sy=sx,sz=sx)=>{let c=Math.cos(yaw),s=Math.sin(yaw);return new Float32Array([c*sx,0,-s*sx,0,0,sy,0,0,s*sz,0,c*sz,0,x,y,z,1]);},
  transform:(m,p,w=1)=>[m[0]*p[0]+m[4]*p[1]+m[8]*p[2]+m[12]*w,m[1]*p[0]+m[5]*p[1]+m[9]*p[2]+m[13]*w,m[2]*p[0]+m[6]*p[1]+m[10]*p[2]+m[14]*w],
  inverse:(a)=>{let out=new Float32Array(16),m=Array.from(a); // Gauss-Jordan, used once per frame only.
   let rows=Array.from({length:4},(_,r)=>[m[r],m[r+4],m[r+8],m[r+12],...Array.from({length:4},(_,c)=>r===c?1:0)]);
   for(let c=0;c<4;c++){let pivot=c;for(let r=c+1;r<4;r++)if(Math.abs(rows[r][c])>Math.abs(rows[pivot][c]))pivot=r;[rows[c],rows[pivot]]=[rows[pivot],rows[c]];let d=rows[c][c];if(Math.abs(d)<1e-12)return M.identity();for(let k=0;k<8;k++)rows[c][k]/=d;for(let r=0;r<4;r++)if(r!==c){let q=rows[r][c];for(let k=0;k<8;k++)rows[r][k]-=q*rows[c][k];}}
   for(let r=0;r<4;r++)for(let c=0;c<4;c++)out[c*4+r]=rows[r][c+4];return out;
  }
 };
 function color(c){if(Array.isArray(c))return c;if(typeof c==='number')return[(c>>16&255)/255,(c>>8&255)/255,(c&255)/255];c=c.replace('#','');if(c.length===3)c=c.split('').map(x=>x+x).join('');return color(parseInt(c,16));}
 function rng(seed=91371){let a=seed>>>0;return()=>{a+=0x6D2B79F5;let t=a;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return((t^(t>>>14))>>>0)/4294967296;};}
 const material=(hex='#ffffff',layer=0,rough=.7,metal=0,emiss=0,ao=1)=>({color:color(hex),p:[layer,rough,metal,emiss],ao});
 class Geometry {
  constructor(){this.data=new Float32Array(262144);this.used=0;this.count=0;this.transform=M.identity();this.animation=[0,0,0,0];}
  reserve(n){if(this.used+n>this.data.length){let d=new Float32Array(Math.max(this.data.length*2,this.used+n));d.set(this.data);this.data=d;}}
  vertex(p,n,uv,mat){this.reserve(20);p=M.transform(this.transform,p);n=V.norm(M.transform(this.transform,n,0));let a=this.data,i=this.used,c=mat.color;for(let j=0;j<3;j++)a[i+j]=p[j];for(let j=0;j<3;j++)a[i+3+j]=n[j];a[i+6]=uv[0];a[i+7]=uv[1];a[i+8]=c[0];a[i+9]=c[1];a[i+10]=c[2];a[i+11]=mat.ao??1;for(let j=0;j<4;j++)a[i+12+j]=mat.p[j];for(let j=0;j<4;j++)a[i+16+j]=this.animation[j];this.used+=20;this.count++;}
  tri(a,b,c,mat,uvs=[[0,0],[0,1],[1,1]],ns=null){let n=V.norm(V.cross(V.sub(b,a),V.sub(c,a)));this.vertex(a,ns?ns[0]:n,uvs[0],mat);this.vertex(b,ns?ns[1]:n,uvs[1],mat);this.vertex(c,ns?ns[2]:n,uvs[2],mat);}
  quad(a,b,c,d,mat,u=1,v=1){this.tri(a,b,c,mat,[[0,0],[0,v],[u,v]]);this.tri(a,c,d,mat,[[0,0],[u,v],[u,0]]);}
  box(x,y,z,w,h,d,mat){let l=x-w/2,r=x+w/2,b=y-h/2,t=y+h/2,n=z-d/2,s=z+d/2;
   this.quad([l,t,s],[l,b,s],[r,b,s],[r,t,s],mat,mat.fit?1:w,mat.fit?1:h);this.quad([r,t,n],[r,b,n],[l,b,n],[l,t,n],mat,mat.fit?1:w,mat.fit?1:h);
   this.quad([r,t,s],[r,b,s],[r,b,n],[r,t,n],mat,mat.fit?1:d,mat.fit?1:h);this.quad([l,t,n],[l,b,n],[l,b,s],[l,t,s],mat,mat.fit?1:d,mat.fit?1:h);
   this.quad([l,t,n],[l,t,s],[r,t,s],[r,t,n],mat,mat.fit?1:w,mat.fit?1:d);this.quad([l,b,s],[l,b,n],[r,b,n],[r,b,s],mat,mat.fit?1:w,mat.fit?1:d);
  }
  plane(x,y,z,w,d,mat,u=w,v=d){this.quad([x-w/2,y,z-d/2],[x-w/2,y,z+d/2],[x+w/2,y,z+d/2],[x+w/2,y,z-d/2],mat,u,v);}
  sphere(x,y,z,rx,ry,rz,mat,seg=16,rings=10,phiStart=0,phiEnd=Math.PI){
   const get=(i,j)=>{let a=i/seg*TAU,b=phiStart+j/rings*(phiEnd-phiStart),v=[Math.sin(b)*Math.cos(a),Math.cos(b),Math.sin(b)*Math.sin(a)];return{p:[x+v[0]*rx,y+v[1]*ry,z+v[2]*rz],n:V.norm([v[0]/rx,v[1]/ry,v[2]/rz]),uv:[i/seg,j/rings]};};
   for(let j=0;j<rings;j++)for(let i=0;i<seg;i++){let a=get(i,j),b=get(i,j+1),c=get(i+1,j+1),d=get(i+1,j);for(let vs of [[a,b,c],[a,c,d]]){let cross=V.cross(V.sub(vs[1].p,vs[0].p),V.sub(vs[2].p,vs[0].p));if(V.dot(cross,vs[0].n)<0)[vs[1],vs[2]]=[vs[2],vs[1]];this.tri(...vs.map(k=>k.p),mat,vs.map(k=>k.uv),vs.map(k=>k.n));}}
  }
  cylinder(a,b,r1,r2,mat,seg=12,caps=true){let up=V.norm(V.sub(b,a)),right=V.norm(V.cross(up,Math.abs(up[1])>.95?[1,0,0]:[0,1,0])),back=V.cross(up,right),len=V.len(V.sub(b,a));let pt=(base,r,t)=>V.add(base,V.add(V.mul(right,Math.cos(t)*r),V.mul(back,Math.sin(t)*r))),nr=t=>V.norm(V.add(V.add(V.mul(right,Math.cos(t)),V.mul(back,Math.sin(t))),V.mul(up,(r1-r2)/len)));
   for(let i=0;i<seg;i++){let t=i/seg*TAU,q=(i+1)/seg*TAU,p0=pt(a,r1,t),p1=pt(b,r2,t),p2=pt(b,r2,q),p3=pt(a,r1,q),n0=nr(t),n1=nr(q);this.tri(p0,p2,p1,mat,[[i/seg,0],[(i+1)/seg,len],[i/seg,len]],[n0,n1,n0]);this.tri(p0,p3,p2,mat,[[i/seg,0],[(i+1)/seg,0],[(i+1)/seg,len]],[n0,n1,n1]);if(caps){this.tri(a,p3,p0,mat);this.tri(b,p1,p2,mat);}}
  }
  disk(x,y,z,r,mat,seg=32){for(let i=0;i<seg;i++){let a=i/seg*TAU,b=(i+1)/seg*TAU;this.tri([x,y,z],[x+Math.cos(b)*r,y,z+Math.sin(b)*r],[x+Math.cos(a)*r,y,z+Math.sin(a)*r],mat,[[.5,.5],[.5+Math.cos(b)*.5,.5+Math.sin(b)*.5],[.5+Math.cos(a)*.5,.5+Math.sin(a)*.5]]);}}
  tube(points,r,mat,seg=8){for(let i=1;i<points.length;i++)this.cylinder(points[i-1],points[i],r,r,mat,seg);}
  sign(x,y,z,w,h,layer,frame=false){let m=material('#ffffff',layer,.8,0,.15);this.quad([x-w/2,y+h/2,z],[x-w/2,y-h/2,z],[x+w/2,y-h/2,z],[x+w/2,y+h/2,z],m);if(frame)this.box(x,y,z-.022,w+.05,h+.05,.04,material('#574333',3));}
  scope(matrix,fn){let old=this.transform;this.transform=M.multiply(old,matrix);fn();this.transform=old;}
  animate(pivot,weight,fn){let old=this.animation;this.animation=[...pivot,weight];fn();this.animation=old;}
 }
 class Atlas {
  constructor(size=512){this.size=size;this.layers=[];this.names={};}
  add(name,draw){let c=document.createElement('canvas');c.width=c.height=this.size;let ctx=c.getContext('2d',{willReadFrequently:true});if(draw)draw(ctx,this.size);let id=this.layers.length;this.layers.push(c);this.names[name]=id;return id;}
  sign(name,title,sub='',accent='#304c55',small=''){return this.add(name,(c,s)=>{c.fillStyle='#f9f7f0';c.fillRect(0,0,s,s);c.fillStyle=accent;c.fillRect(0,0,s,62);c.fillStyle='#ffffff';c.font='700 24px "Noto Sans CJK JP", "Yu Gothic", sans-serif';c.fillText(small||name,22,41);
   c.fillStyle='#273b3c';let arr=wrap(c,title, s-52,37);let fs=arr.length>3?30:37;arr=wrap(c,title,s-52,fs);c.font=`700 ${fs}px "Noto Sans CJK JP", "Yu Gothic", sans-serif`;let start=154-Math.min(arr.length,4)*4;arr.slice(0,4).forEach((t,i)=>c.fillText(t,26,start+i*(fs+10)));
   c.fillStyle='#53605b';c.font='500 25px "Noto Sans CJK JP", "Yu Gothic", sans-serif';let lines=wrap(c,sub,s-52,25);let sy=Math.max(300,start+arr.length*(fs+10)+25);lines.slice(0,4).forEach((t,i)=>c.fillText(t,26,sy+i*34));c.fillStyle=accent;c.fillRect(26,s-53,s-52,3);c.fillStyle='#6b7770';c.font='19px "Noto Sans CJK JP", "Yu Gothic", sans-serif';c.fillText('つながりフェスタ 2026',26,s-23);});}
  banner(name,title,sub='',accent='#174f54'){return this.add(name,(c,s)=>{c.scale(1,s/112);c.fillStyle='#f9f7f0';c.fillRect(0,0,s,112);c.fillStyle=accent;c.fillRect(0,0,76,112);c.fillStyle='#fff';c.font='700 23px "Noto Sans CJK JP", "Yu Gothic", sans-serif';c.textAlign='center';c.fillText(name,38,64);let fs=29;while(fs>17){c.font=`700 ${fs}px "Noto Sans CJK JP", "Yu Gothic", sans-serif`;if(c.measureText(title).width< s-104)break;fs--;}c.textAlign='left';c.fillStyle='#263d3c';c.fillText(title,92,52);c.font='500 17px "Noto Sans CJK JP", "Yu Gothic", sans-serif';c.fillStyle='#5b675d';let txt=sub;while(c.measureText(txt).width>s-109&&txt.length)txt=txt.slice(0,-1);c.fillText(txt,92,84);c.fillStyle=accent;c.fillRect(76,106,s-76,6);});}
  upload(gl,gpuSize=this.size){
   const bytes=new Uint8Array(gpuSize*gpuSize*4*this.layers.length),small=document.createElement('canvas');small.width=small.height=gpuSize;const ctx=small.getContext('2d');
   this.layers.forEach((layer,i)=>{ctx.clearRect(0,0,gpuSize,gpuSize);ctx.drawImage(layer,0,0,gpuSize,gpuSize);bytes.set(ctx.getImageData(0,0,gpuSize,gpuSize).data,i*gpuSize*gpuSize*4);});
   this.texture=new THREE.DataArrayTexture(bytes,gpuSize,gpuSize,this.layers.length);this.texture.colorSpace=THREE.SRGBColorSpace;this.texture.wrapS=this.texture.wrapT=THREE.RepeatWrapping;this.texture.minFilter=THREE.LinearMipmapLinearFilter;this.texture.magFilter=THREE.LinearFilter;this.texture.generateMipmaps=true;this.texture.anisotropy=4;this.texture.needsUpdate=true;
  }
 }
 function wrap(ctx,text,width,fs){ctx.font=`700 ${fs}px "Noto Sans CJK JP", "Yu Gothic", sans-serif`;let lines=[],line='';for(let ch of text){if(ch==='\n'){lines.push(line);line='';continue;}if(ctx.measureText(line+ch).width>width&&line){lines.push(line);line=ch;}else line+=ch;}if(line)lines.push(line);return lines;}
 const FULLVS=`#version 300 es
 precision highp float;out vec2 vUV;void main(){vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));vUV=p;gl_Position=vec4(p*2.-1.,0.,1.);}`;
 const SKYFS=`#version 300 es
 precision highp float;in vec2 vUV;out vec4 frag;uniform mat4 uInvVP;uniform vec3 uEye;uniform vec3 uSun;uniform float uTime;
 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+1.),f.x),f.y);}float fbm(vec2 p){float n=0.,a=.5;for(int i=0;i<5;i++){n+=noise(p)*a;p=p*2.03+vec2(17.3,9.2);a*=.51;}return n;}
 void main(){vec4 q=uInvVP*vec4(vUV*2.-1.,1.,1.);vec3 ray=normalize(q.xyz/q.w-uEye);float up=max(ray.y,0.);vec3 sky=mix(vec3(.71,.83,.90),vec3(.22,.48,.78),pow(up,.44));float sun=max(dot(ray,uSun),0.);sky+=vec3(1.,.81,.57)*pow(sun,100.)*.22;sky+=vec3(3.,2.8,2.5)*smoothstep(.99988,.99998,sun);
 if(ray.y>.018){vec2 cp=ray.xz/(ray.y+.07)*2.7+vec2(uTime*.0014,0.);float n=fbm(cp);float cloud=smoothstep(.52,.76,n)*smoothstep(.01,.20,ray.y);float shade=fbm(cp+vec2(.18,.08));sky=mix(sky,mix(vec3(.79,.83,.86),vec3(1.15,1.14,1.10),shade),cloud*.75);}if(ray.y<0.)sky=mix(sky,vec3(.65,.71,.69),min(-ray.y*4.,1.));frag=vec4(sky,1.);}
 `;
// Three.js renderer for the existing geometry, camera and animation interfaces.
// Geometry positions and navigation remain in the original metre coordinates.
 const animationHeader = `
 attribute vec4 festaAnimation;
 attribute vec4 festaInfo;
 attribute vec4 festaSurface;
 attribute float festaAO;
 uniform float festaTime;
 varying vec2 festaUV;
 varying vec4 festaMat;
 varying float festaShade;
 varying vec3 festaWorld;
 mat3 festaRotation(){
  float w=festaAnimation.w;
  float angle=(abs(w)>.1 && abs(w)<3.) ? sin(festaTime*6.2*festaInfo.y+festaInfo.x)*(abs(w)>1.5?.52:.37)*sign(w)*min(1.,festaInfo.y) : 0.;
  float c=cos(angle),s=sin(angle);
  return mat3(1.,0.,0.,0.,c,s,0.,-s,c);
 }
 `;
 const animationVertex = `
 vec3 transformed = festaAnimation.xyz+festaRotation()*(position-festaAnimation.xyz);
 if(festaAnimation.w>8.) transformed.z+=sin(festaTime*1.9+transformed.x*4.+transformed.y*1.3)*.08*max(0.,transformed.x-festaAnimation.x);
 if(festaInfo.z>0.) transformed.xz+=festaInfo.z*.045*sin(festaTime*.7+transformed.xz*.23)*clamp(transformed.y*.15,0.,1.);
 festaUV=uv; festaMat=festaSurface; festaShade=festaAO; festaWorld=(instanceMatrix*vec4(transformed,1.)).xyz;
 `;
 function patchMaterial(material,renderer,depth=false){
  material.onBeforeCompile=shader=>{
   shader.uniforms.festaTime=renderer.timeUniform;
   shader.uniforms.festaAtlas=renderer.atlasUniform;
   shader.vertexShader=animationHeader+shader.vertexShader;
   shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',animationVertex)
    .replace('#include <beginnormal_vertex>','#include <beginnormal_vertex>\nobjectNormal=festaRotation()*objectNormal;');
   shader.fragmentShader=`precision highp sampler2DArray;\nuniform sampler2DArray festaAtlas;\nvarying vec2 festaUV;\nvarying vec4 festaMat;\nvarying float festaShade;\nvarying vec3 festaWorld;\nfloat festaNoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(fract(sin(dot(i,vec2(127.1,311.7)))*43758.5453),fract(sin(dot(i+vec2(1.,0.),vec2(127.1,311.7)))*43758.5453),f.x),mix(fract(sin(dot(i+vec2(0.,1.),vec2(127.1,311.7)))*43758.5453),fract(sin(dot(i+1.,vec2(127.1,311.7)))*43758.5453),f.x),f.y); }\n`+shader.fragmentShader;
   shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>',`vec4 festaTexel=texture(festaAtlas,vec3(festaUV,festaMat.x));\nif(festaTexel.a<.4) discard;\ndiffuseColor*=festaTexel;\nif(festaMat.x>.5 && festaMat.x<1.5){float variation=festaNoise(festaWorld.xz*.28)*.65+festaNoise(festaWorld.xz*2.1)*.35;diffuseColor.rgb*=mix(.72,1.14,variation);}\nif(festaMat.x>3.5 && festaMat.x<4.5)diffuseColor.rgb*=mix(.84,1.09,festaNoise(festaWorld.xz*.6));`);
   shader.fragmentShader=shader.fragmentShader.replace('diffuseColor*=festaTexel;',`diffuseColor*=festaTexel;
if(festaMat.x>2.5 && festaMat.x<3.5){
 float weather=festaNoise(festaWorld.xz*.31+vec2(0.,festaWorld.y*.18));
 float baseDamp=(1.-smoothstep(.15,1.6,festaWorld.y))*festaNoise(festaWorld.xz*1.8);
 diffuseColor.rgb*=mix(.93,1.02,weather)*(1.-baseDamp*.13);
}`);
   if(!depth) shader.fragmentShader=shader.fragmentShader
    .replace('#include <roughnessmap_fragment>','float roughnessFactor=clamp(festaMat.y,.06,1.);')
    .replace('#include <metalnessmap_fragment>','float metalnessFactor=clamp(festaMat.z,0.,1.);')
    .replace('#include <emissivemap_fragment>','totalEmissiveRadiance=diffuseColor.rgb*festaMat.w;')
    .replace('#include <normal_fragment_maps>',`#include <normal_fragment_maps>
if((festaMat.x>.5 && festaMat.x<1.5)||(festaMat.x>2.5 && festaMat.x<4.5)){
 vec2 texDx=dFdx(festaUV),texDy=dFdy(festaUV);
 float footprint=max(length(texDx),length(texDy));
 float heightScale=(festaMat.x<1.5?.012:festaMat.x<3.5?.0018:.004)* (1.-smoothstep(.008,.05,footprint));
 float centerHeight=dot(festaTexel.rgb,vec3(.333333));
 vec2 dh=vec2(dot(texture(festaAtlas,vec3(festaUV+texDx,festaMat.x)).rgb,vec3(.333333))-centerHeight,
              dot(texture(festaAtlas,vec3(festaUV+texDy,festaMat.x)).rgb,vec3(.333333))-centerHeight)*heightScale;
 vec3 sx=dFdx(-vViewPosition),sy=dFdy(-vViewPosition);
 vec3 rx=cross(sy,normal),ry=cross(normal,sx);
 float determinant=dot(sx,rx)*faceDirection;
 normal=normalize(abs(determinant)*normal-sign(determinant)*(dh.x*rx+dh.y*ry));
}`)
    .replace('#include <aomap_fragment>','#include <aomap_fragment>\nreflectedLight.indirectDiffuse*=festaShade;');
  };
  material.customProgramCacheKey=()=>depth?'festa-depth-2':'festa-standard-2';
  return material;
 }
 class Mesh {
  constructor(renderer,geo,{name='',shadow=true,instances=null,dynamic=false}={}){
   this.name=name;this.renderer=renderer;this.count=geo.count;this.shadow=shadow;this.dynamic=dynamic;
   this.instances=instances||[{matrix:M.identity(),info:[0,0,0,0]}];
   const packed=geo.data.slice(0,geo.used),linear=new THREE.Color();
   // Canvas images are sRGB; Three.js vertex colours are linear.
   for(let i=0;i<packed.length;i+=20){linear.setRGB(packed[i+8],packed[i+9],packed[i+10],THREE.SRGBColorSpace);packed[i+8]=linear.r;packed[i+9]=linear.g;packed[i+10]=linear.b;}
   const geometry=new THREE.BufferGeometry(),buffer=new THREE.InterleavedBuffer(packed,20);
   for(const [name,size,offset] of [['position',3,0],['normal',3,3],['uv',2,6],['color',3,8],['festaAO',1,11],['festaSurface',4,12],['festaAnimation',4,16]]) geometry.setAttribute(name,new THREE.InterleavedBufferAttribute(buffer,size,offset));
   this.info=new THREE.InstancedBufferAttribute(new Float32Array(this.instances.length*4),4);this.info.setUsage(THREE.DynamicDrawUsage);geometry.setAttribute('festaInfo',this.info);
   this.object=new THREE.InstancedMesh(geometry,renderer.surfaceMaterial,this.instances.length);this.object.name=name;this.object.castShadow=shadow;this.object.receiveShadow=true;this.object.frustumCulled=false;
   this.object.customDepthMaterial=renderer.depthMaterial;this.object.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
   this.matrix=new THREE.Matrix4();this.updateInstances();renderer.scene.add(this.object);renderer.meshes.push(this);geo.data=null;
  }
  get visible(){return this.object.visible;}
  set visible(value){this.object.visible=value;}
  updateInstances(){this.instances.forEach((v,i)=>{this.object.setMatrixAt(i,this.matrix.fromArray(v.matrix));this.info.set(v.info||[0,0,0,0],i*4);});this.object.instanceMatrix.needsUpdate=true;this.info.needsUpdate=true;}
  dispose(){this.renderer.scene.remove(this.object);this.object.geometry.dispose();this.object.dispose();this.renderer.meshes=this.renderer.meshes.filter(m=>m!==this);}
 }
 class Renderer {
  constructor(canvas,quality='standard'){
   this.canvas=canvas;this.engine=new THREE.WebGLRenderer({canvas,alpha:false,antialias:true,powerPreference:'high-performance',preserveDrawingBuffer:true});this.gl=this.engine.getContext();
   this.engine.outputColorSpace=THREE.SRGBColorSpace;this.engine.toneMapping=THREE.ACESFilmicToneMapping;this.engine.shadowMap.enabled=true;this.engine.shadowMap.type=THREE.PCFShadowMap;this.engine.shadowMap.autoUpdate=false;
   this.scene=new THREE.Scene();this.scene.fog=new THREE.Fog('#c5d3d8',110,420);
   this.camera={eye:[0,1.68,20],target:[0,1.68,0],fov:66*Math.PI/180,near:.065,far:700};this.threeCamera=new THREE.PerspectiveCamera();this.meshes=[];this.quality=quality;this.time=0;this.exposure=1.12;
   this.sun=V.norm([-.38,.79,.48]);this.sunColor=[1,.94,.81];this.sunPower=3.7;this.timeUniform={value:0};this.atlasUniform={value:null};
   this.surfaceMaterial=patchMaterial(new THREE.MeshStandardMaterial({color:0xffffff,vertexColors:true,roughness:1,metalness:1,side:THREE.DoubleSide,alphaTest:.4}),this);
   this.depthMaterial=patchMaterial(new THREE.MeshDepthMaterial({depthPacking:THREE.RGBADepthPacking,side:THREE.DoubleSide,alphaTest:.4}),this,true);
   this.hemisphere=new THREE.HemisphereLight('#c7e0f5','#817562',1.8);this.scene.add(this.hemisphere);
   this.sunLight=new THREE.DirectionalLight(0xffffff,this.sunPower);this.sunLight.castShadow=true;this.scene.add(this.sunLight,this.sunLight.target);
   this.stats={draws:0,triangles:0,fps:0};this.frameCount=0;this.fpsStamp=performance.now();this.shadowAge=-1;this.shadowDirty=true;this.targetSize=[0,0];
   const skyGeometry=new THREE.BufferGeometry();skyGeometry.setAttribute('position',new THREE.Float32BufferAttribute([-1,-1,0,3,-1,0,-1,3,0],3));
   this.skyUniforms={uInvVP:{value:new THREE.Matrix4()},uEye:{value:new THREE.Vector3()},uSun:{value:new THREE.Vector3()},uTime:this.timeUniform};
   const skyMaterial=new THREE.RawShaderMaterial({glslVersion:THREE.GLSL3,vertexShader:FULLVS.replace('#version 300 es','').replace('0.,1.);','1.,1.);'),fragmentShader:SKYFS.replace('#version 300 es','').replace('frag=vec4(sky,1.);','sky=sky*1.12; sky=clamp((sky*(2.51*sky+.03))/(sky*(2.43*sky+.59)+.14),0.,1.);frag=vec4(pow(sky,vec3(1./2.2)),1.);'),uniforms:this.skyUniforms,depthWrite:false,depthTest:false});
   this.sky=new THREE.Mesh(skyGeometry,skyMaterial);this.sky.frustumCulled=false;this.sky.renderOrder=-1000;this.scene.add(this.sky);this.setQuality(quality);
  }
  set atlas(value){this._atlas=value;this.atlasUniform.value=value.texture;}
  get atlas(){return this._atlas;}
  setQuality(q){this.quality=q;this.pixelRatio=q==='high'?Math.min(devicePixelRatio,1.75):q==='low'?.8:Math.min(devicePixelRatio,1.15);this.shadowSize=q==='high'?4096:q==='low'?1024:2048;this.engine.setPixelRatio(this.pixelRatio);this.createShadow();this.resize();}
  createShadow(){const light=this.sunLight,shadow=light.shadow;light.position.set(-3+this.sun[0]*230,this.sun[1]*230,26+this.sun[2]*230);light.target.position.set(-3,0,26);light.color.setRGB(...this.sunColor);light.intensity=this.sunPower;
   Object.assign(shadow.camera,{left:-108,right:108,top:108,bottom:-108,near:1,far:500});shadow.camera.updateProjectionMatrix();shadow.bias=-.00015;shadow.normalBias=216/this.shadowSize*1.35;
   if(shadow.mapSize.x!==this.shadowSize){shadow.map?.dispose();shadow.map=null;shadow.mapSize.set(this.shadowSize,this.shadowSize);}this.shadowDirty=true;
  }
  resize(){const w=Math.max(1,this.canvas.clientWidth),h=Math.max(1,this.canvas.clientHeight);if(w===this.targetSize[0]&&h===this.targetSize[1]&&this.engine.getPixelRatio()===this.pixelRatio)return;this.targetSize=[w,h];this.engine.setSize(w,h,false);}
  render(time=0){if(!this.atlas)return;this.time=time;this.timeUniform.value=time;this.resize();const c=this.camera,camera=this.threeCamera;camera.position.fromArray(c.eye);camera.up.set(0,1,0);camera.lookAt(new THREE.Vector3(...c.target));camera.fov=c.fov*180/Math.PI;camera.aspect=this.canvas.clientWidth/this.canvas.clientHeight;camera.near=c.near;camera.far=c.far;camera.updateProjectionMatrix();camera.updateMatrixWorld();
   this.vp=new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse).elements;this.invVp=new THREE.Matrix4().fromArray(this.vp).invert().elements;
   this.skyUniforms.uInvVP.value.fromArray(this.invVp);this.skyUniforms.uEye.value.fromArray(c.eye);this.skyUniforms.uSun.value.fromArray(this.sun);this.engine.toneMappingExposure=this.exposure;
   if(this.shadowDirty||time-this.shadowAge>.45){this.engine.shadowMap.needsUpdate=true;this.shadowDirty=false;this.shadowAge=time;}
   this.engine.render(this.scene,camera);this.stats.draws=this.engine.info.render.calls;this.stats.triangles=this.engine.info.render.triangles;
   this.frameCount++;const now=performance.now();if(now-this.fpsStamp>1500){this.stats.fps=Math.round(this.frameCount*1000/(now-this.fpsStamp));this.frameCount=0;this.fpsStamp=now;}
  }
  project(pos){if(!this.vp)return null;const m=this.vp,p=M.transform(m,pos),w=m[3]*pos[0]+m[7]*pos[1]+m[11]*pos[2]+m[15];if(w<=0)return null;return{x:(p[0]/w*.5+.5)*this.canvas.clientWidth,y:(-p[1]/w*.5+.5)*this.canvas.clientHeight,z:p[2]/w};}
  groundPoint(x,y){if(!this.invVp)return null;const ray=new THREE.Raycaster();ray.setFromCamera(new THREE.Vector2(x/this.canvas.clientWidth*2-1,1-y/this.canvas.clientHeight*2),this.threeCamera);const point=ray.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0,1,0),0),new THREE.Vector3());return point?.toArray()||null;}
 }

 return {V,M,Geometry,Mesh,Renderer,Atlas,material,color,rng,clamp,TAU,wrap};
})();
