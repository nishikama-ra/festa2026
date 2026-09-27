/* Permanent surroundings observed in the supplied photographs.
   Measurements and vegetation positions are approximate. No source photographs are embedded. */
'use strict';
window.FestaScenery = {
 // The field stays level. These compact hills are outside its boundary.
 height(x,z){
  const mound=(cx,cz,rx,rz,h)=>{const r=Math.hypot((x-cx)/rx,(z-cz)/rz);return r<1?h*Math.pow(Math.cos(r*Math.PI/2),2):0;};
  const hills=Math.max(mound(112,-4,49,100,25),mound(130,82,65,84,22),mound(-113,7,41,40,20),mound(-39,-103,63,47,15),mound(8,-107,45,48,20),mound(53,-105,49,46,16));
  // Terrain vertices are 0.10 m below this height. The 3.70 value meets the 3.60 m wall.
  if(x<60.8||x>=103.2||z<=15.08||z>=96.08)return hills;
  const smooth=t=>{t=Math.max(0,Math.min(1,t));return t*t*(3-2*t);};
  const along=smooth((z-15.08)/12)*(1-smooth((z-80.08)/16));
  const across=smooth((x-75.2)/28);
  const shelf=3.7+(Math.max(hills,3.7)-3.7)*across;
  return hills+(shelf-hills)*along;

 },
 textures(atlas,rng){
  const concrete=atlas.layers[3],c=concrete.getContext('2d'),s=concrete.width,rr=rng(8401);
  const pixels=c.createImageData(s,s);
  for(let y=0;y<s;y++)for(let x=0;x<s;x++){
   const broad=Math.sin(x/s*Math.PI*4+.5)*Math.cos(y/s*Math.PI*6)*1.7;
   const n=(rr()-.5)*9+broad,i=(y*s+x)*4;
   pixels.data[i]=241+n;pixels.data[i+1]=239+n;pixels.data[i+2]=229+n;pixels.data[i+3]=255;
  }
  c.putImageData(pixels,0,0);
  // Fine, overlapping leaf clusters. The transparent silhouette is irregular, not a square card.
  for(const layer of [7,8]){
   const ctx=atlas.layers[layer].getContext('2d'),random=rng(301+layer);
   ctx.clearRect(0,0,s,s);
   for(let i=0;i<1700;i++){
    const a=random()*Math.PI*2,r=Math.sqrt(random()),cx=.5+Math.cos(a)*r*.45,cy=.5+Math.sin(a)*r*.42;
    if(r>.84&&random()>.52)continue;
    const lit=(1-cy)*12+random()*17;
    const hue=layer===7?76+random()*30:18+random()*24;
    ctx.fillStyle=`hsl(${hue},${layer===7?24+random()*22:38+random()*20}%,${16+lit}%)`;
    ctx.beginPath();ctx.ellipse(cx*s,cy*s,3+random()*7,2+random()*4,random()*6.28,0,6.28);ctx.fill();
   }
  }
  return atlas.add('Window reflection',(ctx,s)=>{
   const grad=ctx.createLinearGradient(0,0,0,s);grad.addColorStop(0,'#9baeb3');grad.addColorStop(.46,'#667d81');grad.addColorStop(.49,'#536562');grad.addColorStop(1,'#364743');ctx.fillStyle=grad;ctx.fillRect(0,0,s,s);
   const random=rng(721);
   for(let i=0;i<150;i++){let x=random()*s,y=s*(.48+random()*.5);ctx.fillStyle=`rgba(31,48,35,${.025+random()*.10})`;ctx.beginPath();ctx.ellipse(x,y,5+random()*29,3+random()*16,0,0,6.28);ctx.fill();}
   ctx.fillStyle='rgba(218,228,226,.10)';ctx.fillRect(s*.23,0,s*.03,s);ctx.fillRect(s*.75,0,s*.018,s);
  });
 },
 build({details,green,distant,signGeo,childSign,p,m,mat,M,rng,TAU,ga,gb,gc,gw,gd,gymRise=.45}){
  const rr=rng(70031),pick=(a,b)=>a+(b-a)*rr();
  // XB230729: a lower entrance terrace, a rising stair, then the school bridge.
  // All three share their connection vertices; no independent canopy covers the bridge.
  const paint=mat('#dcdccf',3,.88),edge=mat('#c7cbc3',3,.87);
  const left=p(425.28,478),right=p(470,478),bridgeY=5.25,terraceY=3.25;
  const stairX=ga[0]-1.20,stairWidth=2.4,upperZ=right[1]+1.2,lowerZ=gb[1]+1.6;
  const rail=(a,b,h=1.05)=>{
   details.cylinder([a[0],a[1]+h,a[2]],[b[0],b[1]+h,b[2]],.028,.028,paint,7);
   const n=Math.max(1,Math.ceil(Math.hypot(b[0]-a[0],b[2]-a[2])/.19));
   for(let i=0;i<=n;i++){let t=i/n,x=a[0]+(b[0]-a[0])*t,y=a[1]+(b[1]-a[1])*t,z=a[2]+(b[2]-a[2])*t;details.cylinder([x,y,z],[x,y+h,z],.016,.016,paint,6);}
  };
  const slab=(x0,x1,z0,z1,y)=>details.box((x0+x1)/2,y-.14,(z0+z1)/2,x1-x0,.28,z1-z0,paint);
  slab(left[0],ga[0],right[1]-1.2,upperZ,bridgeY);
  rail([left[0],bridgeY,right[1]-1.2],[ga[0],bridgeY,right[1]-1.2]);
  rail([left[0],bridgeY,upperZ],[ga[0]-stairWidth,bridgeY,upperZ]);
  for(const x of [left[0]+.22,ga[0]-2.65])details.box(x,bridgeY/2-.14,right[1],.38,bridgeY-.28,.42,paint);
  const steps=12,run=(lowerZ-upperZ)/steps,rise=(bridgeY-terraceY)/steps;
  for(let i=0;i<steps;i++){
   const z0=upperZ+i*run,z1=z0+run,y=bridgeY-i*rise;
   details.box(stairX,y-rise/2-.08,(z0+z1)/2,stairWidth,rise+.16,run+.015,paint);
  }
  for(const x of [ga[0]-stairWidth,ga[0]]){
   details.quad([x,bridgeY-.28,upperZ],[x,terraceY-.28,lowerZ],[x,terraceY-.48,lowerZ],[x,bridgeY-.48,upperZ],paint);
   rail([x,bridgeY,upperZ],[x,terraceY,lowerZ]);
  }
  // Terrace wraps around the front. The V6 entrance is slightly west of the centre.
  slab(ga[0]-stairWidth,gb[0],gb[1],lowerZ+1.3,terraceY);
  rail([ga[0]-stairWidth,terraceY,lowerZ+1.3],[gc[0]+4.3,terraceY,lowerZ+1.3]);
  rail([ga[0]-stairWidth,terraceY,lowerZ],[ga[0]-stairWidth,terraceY,lowerZ+1.3]);
  for(const x of [ga[0]-stairWidth+.25,ga[0]+2.2,gc[0]+4.4,gb[0]-.25])details.box(x,(terraceY-.28)/2,lowerZ+.99,.42,terraceY-.28,.45,paint);
  details.box((gc[0]+4.3+gb[0])/2,terraceY+.46,lowerZ+1.17,gb[0]-gc[0]-4.3,.92,.22,paint);
  const glazing=mat('#778885',0,.48,.08),frame=mat('#c3c5b9',0,.63,.18);
  for(const dx of [-6.8,-2.3,2.3,6.8]){
   details.box(gc[0]+dx,6.0,gb[1]+.20,1.35,2.4,.09,frame);
   details.box(gc[0]+dx,5.96,gb[1]+.26,1.21,2.22,.03,glazing);
   details.box(gc[0]+dx,6.75,gb[1]+.29,1.22,.67,.05,paint);
   details.box(gc[0]+dx,5.52,gb[1]+.30,1.22,.045,.04,frame);
  }
  // V6 places the southern entrance about 38% of the way from west to east.
  // The two end openings in the photo are windows, not the main doors.
  for(const x of [ga[0]+2.7,gb[0]-3.4]){
   details.box(x,1.75,gb[1]+.21,1.42,1.45,.08,frame);
   details.box(x,1.75,gb[1]+.26,1.28,1.31,.035,glazing);
   details.box(x,1.75,gb[1]+.30,.045,1.31,.05,frame);
   details.box(x,1.01,gb[1]+.33,1.55,.08,.22,paint);
  }
  const entryX=ga[0]+gw*.38,entryZ=gb[1]+.27;
  details.box(entryX,1.54,entryZ,4.5,2.76,.08,mat('#27332f',0,.91));
  for(let i=0;i<4;i++){
   const x=entryX+(i-1.5)*1.10;
   details.box(x,1.45,entryZ+.055,1.04,2.35,.035,glazing);
   details.box(x-.55,1.54,entryZ+.09,.055,2.76,.055,frame);
   details.box(x,1.06,entryZ+.09,1.10,.045,.06,frame);
   details.box(x,2.49,entryZ+.09,1.10,.045,.06,frame);
   details.box(x+(i%2?-.42:.42),1.30,entryZ+.14,.03,.30,.05,frame);
  }
  details.box(entryX+2.2,1.54,entryZ+.09,.055,2.76,.055,frame);
  details.box(entryX,2.91,entryZ+.09,4.5,.06,.06,frame);
  details.box(entryX,.15,gb[1]+1.75,5.6,.30,3.0,paint);
  for(let i=0;i<3;i++)details.box(entryX,.025+i*.05,gb[1]+4.06-i*.38,5.6,.05+i*.10,.40,paint);
  // The field-facing blue doors stand open beside their concrete steps.
  const blueDoor=mat('#83b4c2',0,.54,.12);
  for(const [a,b] of [[335,344],[421,433],[468,484]]){
   const za=p(470,a)[1],zb=p(470,b)[1],middle=(za+zb)/2,openingWidth=zb-za;
   for(let i=0;i<3;i++){
    const rise=(i+1)*gymRise/3;
    details.box(ga[0]-1.38+i*.46,rise/2,middle,.48,rise,openingWidth+.24,paint);
   }
   details.box(ga[0]-.11,gymRise-.04,middle,.54,.08,openingWidth+.24,paint);
   for(const z of [za+.12,zb-.12]){
    details.box(ga[0]-.76,gymRise+1.12,z,1.32,2.24,.075,blueDoor);
    details.box(ga[0]-.76,gymRise+2.25,z,1.36,.045,.09,frame);
   }
  }
  // White-painted flat steel braces, with plates and bolts only on solid wall spans.
  const spans=[[303,334],[345,420],[434,467],[485,503]];
  for(const side of [-1,1])for(const [a,b] of spans){
   const start=p(470,a)[1]+.15,end=p(470,b)[1]-.15,n=Math.max(1,Math.ceil((end-start)/5.4));
   for(let k=0;k<n;k++){
    const z0=start+(end-start)*k/n+.18,z1=start+(end-start)*(k+1)/n-.18;
    const x=gc[0]+side*(gw/2+.26),lo=.56,hi=4.04;
    for(const reverse of [false,true]){
     const y0=reverse?hi:lo,y1=reverse?lo:hi,dy=y1-y0,dz=z1-z0,len=Math.hypot(dy,dz),oy=-dz/len*.065,oz=dy/len*.065;
     details.quad([x,y0+oy,z0+oz],[x,y0-oy,z0-oz],[x,y1-oy,z1-oz],[x,y1+oy,z1+oz],paint,len,.13);
     for(const [y,z] of [[y0,z0],[y1,z1]]){
      details.box(x,y,z,.045,.25,.25,paint);
      for(const dz of [-.065,.065])details.cylinder([x+side*.022,y,z+dz],[x+side*.04,y,z+dz],.017,.017,mat('#abae9e',0,.65,.1),6);
     }
    }
   }
  }
  // Hairline panel joints on the gym's solid lower wall; door gaps stay clear.
  for(const side of [-1,1])for(const [a,b] of spans){
   const x=gc[0]+side*(gw/2+.185),za=p(470,a)[1],zb=p(470,b)[1];
   for(let z=za+.8;z<zb;z+=2.65)details.box(x,2.12,z,.012,3.78,.014,mat('#b9baae',0,.96));
  }
  // Gutters, bases and joints give the building a scale without painting the entire steelwork rust-brown.
  for(const side of [-1,1]){
   const x=gc[0]+side*(gw/2+.31);
   details.cylinder([x,8.66,ga[1]],[x,8.66,gb[1]],.075,.075,paint,10);
   for(const z of [ga[1]+.32,ga[1]+16.5,gb[1]-.35])details.cylinder([x,.25,z],[x,8.66,z],.045,.045,paint,8);
   for(const [a,b] of spans){const za=p(470,a)[1],zb=p(470,b)[1];details.box(x-side*.14,.19,(za+zb)/2,.08,.38,zb-za,mat('#94958b',3,.96));}
  }
  // Low shrubs and trees outside the boundary. They never change the public walking area.
   const overlapsGym=(x,z,r)=>x+r>ga[0]&&x-r<gb[0]&&z+r>ga[1]&&z-r<gb[1];
   function foliage(x,z,h,seed,width=1,cards=82,autumn=false){
   if(x>55&&x<80&&z>26&&z<82)return;
   const base=window.FestaScenery.height(x,z);
   if(x<-52&&x>-88&&z<-12&&z>-70)h=Math.min(h,6.2);
   if(x>-74&&x<-58&&z>-11&&z<10)return;
   const random=rng(seed);
   for(let j=0;j<cards;j++){
    const a=random()*TAU,r=Math.sqrt(random())*h*.46*width,y=h*(.13+random()*.77)-r*.09;
     const px=x+Math.cos(a)*r,pz=z+Math.sin(a)*r,size=h*(.21+random()*.14),yaw=random()*TAU;
     if(overlapsGym(px,pz,size*.71))continue;
    const leaf=autumn?mat(j%4?'#a0704d':'#855841',8,.98,0,0,.92):mat(j%7===0?'#879c75':j%3?'#526b48':'#344f39',7,.98,0,0,.92);
    green.scope(M.compose(px,base+y,pz,yaw),()=>{
     green.quad([-size/2,-size/2,0],[-size/2,size/2,0],[size/2,size/2,0],[size/2,-size/2,0],leaf);
     green.quad([-size/2,0,-size/2],[-size/2,0,size/2],[size/2,0,size/2],[size/2,0,-size/2],leaf);
    });
   }
   // The perimeter reads as a continuous wooded edge at eye height, including the base.
   for(let j=0;j<12;j++){
     const a=j*TAU/12,px=x+Math.cos(a)*h*.25*width,pz=z+Math.sin(a)*h*.25*width;
     const size=h*(.25+random()*.08),leaf=autumn?mat('#75523b',8,.98):mat(j%3?'#3c5a40':'#60734b',7,.98);
     if(overlapsGym(px,pz,size*.71))continue;
    green.scope(M.compose(px,base+h*.21,pz,a),()=>green.quad([-size/2,-size/2,0],[-size/2,size/2,0],[size/2,size/2,0],[size/2,-size/2,0],leaf));
   }
  }
  // V6 shows planting on both sides of the entrance, with the central steps clear.
  const bedZ=gb[1]+3.2,brick=mat('#94705a',3,.98),soil=mat('#4c4835',1,1);
  const hedgeRandom=rng(2701);
  for(const [bedX,bedW,bedH] of [[ga[0]+3.0,4.6,2.9],[gb[0]-4.7,8.4,3.6]]){
   details.box(bedX,.24,bedZ,bedW,.48,2.1,brick);
   details.plane(bedX,.486,bedZ,bedW-.35,1.7,soil);
   for(let x=bedX-bedW/2+.2;x<bedX+bedW/2;x+=.42)for(const y of [.12,.35])details.box(x+(y>.2?.2:0),y,bedZ+1.055,.012,.20,.015,mat('#c3ac8a'));
   for(let i=0;i<Math.round(bedW*36);i++){
    const x=bedX+(hedgeRandom()-.5)*(bedW-.6),y=.5+hedgeRandom()*bedH,z=bedZ+(hedgeRandom()-.5)*1.4;
    const size=.52+hedgeRandom()*.40,leaf=mat(i%5?'#6b835a':'#879669',7,1);
    green.scope(M.compose(x,y,z,hedgeRandom()*TAU),()=>{
     green.quad([-size/2,-size/2,0],[-size/2,size/2,0],[size/2,size/2,0],[size/2,-size/2,0],leaf);
     green.quad([-size/2,0,-size/2],[-size/2,0,size/2],[size/2,0,size/2],[size/2,0,-size/2],leaf);
    });
   }
   for(let x=bedX-bedW/2+.3;x<bedX+bedW/2;x+=.61){
    const z=bedZ+1.4;details.box(x,.13,z,.43,.26,.33,mat('#a88767',3,.94));
    for(let j=0;j<3;j++)details.sphere(x+(j-1)*.11,.30,z,.095,.11,.11,mat(j%2?'#989b62':'#557549'),8,5);
   }
  }
  // The neighbouring lot is above a retaining wall, not a row of trees at yard level.
  const wallX=Number((gb[0]+3.6).toFixed(2)),wallZ0=Number((gb[1]-20).toFixed(2)),wallZ1=Number((gb[1]+33).toFixed(2)),lotY=3.6;
  const retaining=mat('#92968a',3,.99),cap=mat('#b0b3a6',3,.94);
  details.quad([wallX-.35,0,wallZ0],[wallX-.35,0,wallZ1],[wallX,lotY,wallZ1],[wallX,lotY,wallZ0],retaining,18,3);
  details.box(wallX+.08,lotY+.08,(wallZ0+wallZ1)/2,.64,.16,wallZ1-wallZ0,cap);
  for(let z=wallZ0+.3;z<wallZ1;z+=2.2){
   details.cylinder([wallX+.1,lotY+.12,z],[wallX+.1,lotY+1.16,z],.022,.022,frame,6);
   details.box(wallX-.28,.65,z,.025,.10,.10,mat('#454d43'));
  }
  for(const y of [lotY+.30,lotY+1.12])details.cylinder([wallX+.1,y,wallZ0],[wallX+.1,y,wallZ1],.022,.022,frame,6);
  for(let z=wallZ0;z<wallZ1;z+=5.4)details.cylinder([wallX-.34,.05,z],[wallX-.01,lotY-.02,z],.012,.012,mat('#777e72'),5);
  // A detached two-storey neighbour visible immediately east of the gym facade.
  {const hx=wallX+6.3,hz=gb[1]+1.4,hw=8.8,hd=11.0,hh=6.6;
  distant.box(hx,lotY+hh/2,hz,hw,hh,hd,mat('#d8d2be',3,.96));
  const hr=mat('#6f6860',10,.9),roofY=lotY+hh;
  for(const side of [-1,1]){
   distant.quad([hx,roofY+1.7,hz-hd/2-.4],[hx,roofY+1.7,hz+hd/2+.4],[hx+side*(hw/2+.4),roofY,hz+hd/2+.4],[hx+side*(hw/2+.4),roofY,hz-hd/2-.4],hr,3,4);
  }
  for(const z of [hz-hd/2,hz+hd/2])distant.tri([hx-hw/2,roofY,z],[hx,roofY+1.7,z],[hx+hw/2,roofY,z],paint);
  for(const y of [lotY+1.65,lotY+4.8])for(const dz of [-3.6,0,3.6]){
   details.box(hx-hw/2-.025,y,hz+dz,.05,1.28,1.40,mat('#5d625a'));
   details.box(hx-hw/2-.06,y,hz+dz,.035,1.10,1.22,glazing);
   details.box(hx-hw/2-.087,y,hz+dz,.04,1.12,.035,frame);
  }
  }
  // A real height surface under the trees; the tops of trees alone are not hills.
  const height=window.FestaScenery.height;
  const xs=[...new Set([...Array.from({length:89},(_,i)=>-156+i*4),60.8,75.2,103.2])].sort((a,b)=>a-b);
  const zs=[...new Set([...Array.from({length:72},(_,i)=>-112+i*4),15.08,wallZ0,wallZ1,96.08])].sort((a,b)=>a-b);
  for(let ix=0;ix<xs.length-1;ix++)for(let iz=0;iz<zs.length-1;iz++){
   const x=xs[ix],z=zs[iz],x1=xs[ix+1],z1=zs[iz+1];
   // The retaining wall closes this edge; do not stretch terrain across its vertical face.
   if(x<wallX&&x1===wallX&&z>=wallZ0&&z1<=wallZ1)continue;
   const pts=[[x,z],[x,z1],[x1,z1],[x1,z]].map(([xx,zz])=>[xx,height(xx,zz)-.10,zz]);
   if(pts.every(v=>v[1]<0))continue;
   const earth=mat('#ffffff',2,.98),normal=([xx,yy,zz])=>{let nx=xx===wallX&&zz>=wallZ0&&zz<=wallZ1?2*(height(xx,zz)-height(xx+.1,zz)):height(xx-.1,zz)-height(xx+.1,zz),nz=height(xx,zz-.1)-height(xx,zz+.1),l=Math.hypot(nx,.2,nz);return[nx/l,.2/l,nz/l];};
   for(const ids of [[0,1,2],[0,2,3]])distant.tri(...ids.map(i=>pts[i]),earth,ids.map(i=>[(pts[i][0]+550)*460/1100,(pts[i][2]+550)*460/1100]),ids.map(i=>normal(pts[i])));
  }
  for(let x=-149;x<188;x+=6)for(let z=-99;z<162;z+=6){
   if(height(x,z)<2.3)continue;
   const random=rng(Math.round((x+200)*800+z+200));
   foliage(x+(random()-.5)*2,z+(random()-.5)*2,4.8+random()*2.1,Math.round((x+200)*801+z+201),1.5,30);
  }
  // School-facing photograph: low planting, pots along the wall, and two small stores at the west end.
  const leafGreen=mat('#7a895a',7,.98),leafLight=mat('#9ca469',7,.98),bedEarth=mat('#625c46',1,1);
  function shrub(x,z,w,h,depth,seed){
   const random=rng(seed);
   for(let j=0;j<Math.ceil(w*depth*24);j++){
    const a=random()*TAU,r=Math.sqrt(random()),xx=x+Math.cos(a)*w*.48*r,zz=z+Math.sin(a)*depth*.48*r;
    const yy=.12+h*(.2+.8*Math.sqrt(1-r*r))*(.72+random()*.28),size=.24+random()*.22;
    green.scope(M.compose(xx,yy,zz,random()*TAU),()=>{
     green.quad([-size/2,-size/2,0],[-size/2,size/2,0],[size/2,size/2,0],[size/2,-size/2,0],j%5?leafGreen:leafLight);
     green.quad([-size/2,0,-size/2],[-size/2,0,size/2],[size/2,0,size/2],[size/2,0,-size/2],leafGreen);
    });
   }
  }
  // Keep low beds behind the existing line of trees and clear of the brown entrance doors.
  for(const [px,pz,w,h,d] of [[135,429,5.4,.80,1.15],[158,429,3.6,.65,1.10],[177,429,2.3,.46,1.0],[279,430,4.1,.58,.85]]){
   const q=p(px,pz);
   details.plane(q[0],.035,q[1],w,d,bedEarth);
   for(const side of [-1,1])details.box(q[0],.09,q[1]+side*d/2,w,.18,.10,mat('#a3a295',3,.97));
   for(const side of [-1,1])details.box(q[0]+side*w/2,.09,q[1],.10,.18,d,mat('#a3a295',3,.97));
   shrub(q[0],q[1],w-.15,h,d-.12,px*101);
  }
  for(const [start,count] of [[257,11],[287,7]])for(let i=0;i<count;i++){
   const q=p(start+i*2.2,434),w=.39,h=.26;
   const pot=mat(i%3?'#d1c6ac':'#987554',3,.95);
   details.box(q[0],h/2,q[1],w,h,.28,pot);
   details.plane(q[0],h+.008,q[1],w-.045,.23,bedEarth);
   for(const side of [-1,1])details.box(q[0],h-.01,q[1]+side*.14,w+.035,.055,.035,pot);
   for(let j=0;j<3;j++){
    const xx=q[0]+(j-1)*.10;
    details.cylinder([xx,h,q[1]],[xx,h+.16+(i%3)*.025,q[1]],.007,.004,mat('#657352'),5);
    green.scope(M.compose(xx,h+.14,q[1],i+j),()=>{
     green.quad([-.09,-.03,0],[-.06,.11,0],[.06,.11,0],[.09,-.03,0],leafGreen);
     green.quad([0,-.03,-.09],[0,.11,-.06],[0,.11,.06],[0,-.03,.09],leafLight);
    });
   }
  }
  // Small grey stores in the gap behind the west end of the school. No added signs or contents.
  for(const [px,pz,w,d] of [[54,375,3.1,1.8],[69,375,2.8,1.8]]){
   const q=p(px,pz),h=2.05,body=mat('#b7b9af',3,.95),trim=mat('#8f978e',0,.8,.15);
   details.box(q[0],h/2,q[1],w,h,d,body);
   details.box(q[0],h+.055,q[1],w+.18,.11,d+.16,trim);
   for(const side of [-1,1]){
    details.box(q[0]+side*w*.23,h*.48,q[1]-d/2-.025,w*.43,h*.90,.035,mat('#9da79e',3,.92));
    details.box(q[0]+side*.075,1.04,q[1]-d/2-.06,.025,.19,.045,trim);
   }
  }
  shrub(...[p(60,367)[0],p(60,367)[1],3.2,1.15,1.3,92160]);
  // West-side child facility: two storeys, a shallow roof and field-facing doors.
  const houseX=-66,houseZ=-1,hw=11.2,hd=15.6,hh=6.3,houseWall=mat('#d8d8c9',3,.96);
  distant.box(houseX,hh/2,houseZ,hw,hh,hd,houseWall);
  const east=houseX+hw/2;
  distant.quad([houseX-hw/2-.35,hh+.25,houseZ-hd/2-.35],[houseX-hw/2-.35,hh+.25,houseZ+hd/2+.35],[east+.35,hh+.05,houseZ+hd/2+.35],[east+.35,hh+.05,houseZ-hd/2-.35],mat('#747d7a',10,.85),4,4);
  distant.box(east+.2,hh,houseZ,.12,.19,hd+.7,houseWall);
  for(const dz of [-5.7,-2.7,0,3.0,5.7]){
   const width=dz===0?.65:1.45;
   details.box(east+.03,4.63,houseZ+dz,.055,1.38,width,frame);
   details.box(east+.064,4.63,houseZ+dz,.02,1.24,width-.13,glazing);
   details.box(east+.086,4.63,houseZ+dz,.03,1.26,.035,frame);
  }
  for(const dz of [-4.5,4.5]){
   details.box(east+.08,1.28,houseZ+dz,.12,2.5,1.37,mat('#adb5ac',3,.85));
   details.box(east+.15,1.78,houseZ+dz,.035,.77,.92,glazing);
   details.box(east+.53,2.65,houseZ+dz,1.1,.12,2.05,mat('#8e9994',10,.9));
   details.box(east+.85,.10,houseZ+dz,1.5,.20,2.1,paint);
   details.sphere(east+.14,2.77,houseZ+dz-1.3,.055,.11,.11,mat('#eeeadd'),10,6);
  }
  // Ramp and handrail lie between the east doors and the schoolyard.
  details.quad([east,.03,houseZ-7.5],[east+.95,.03,houseZ-7.5],[east+.95,.20,houseZ+6],[east,.20,houseZ+6],paint,1,6);
  rail([east+1.02,.03,houseZ-7.5],[east+1.02,.20,houseZ+6],.83);
  if(signGeo&&childSign!==undefined)signGeo.scope(M.compose(east+.18,0,houseZ,Math.PI/2),()=>signGeo.sign(0,2.65,0,5.1,.95,childSign));
  // Additional west pylon visible between the low hill and the apartment in XB231051.
  const tx=-83,tz=-22,ty=height(tx,tz),th=29,steel=mat('#a7aca5',0,.68,.25);
  for(let i=0;i<8;i++){
   const y0=ty+i*th/8,y1=ty+(i+1)*th/8,w0=2.65-i*.235,w1=w0-.235;
   for(const sx of [-1,1])for(const sz of [-1,1]){
    distant.cylinder([tx+sx*w0,y0,tz+sz*w0],[tx+sx*w1,y1,tz+sz*w1],.07,.05,steel,6);
    distant.cylinder([tx+sx*w0,y0,tz+sz*w0],[tx-sx*w1,y1,tz+sz*w1],.026,.026,steel,5);
    distant.cylinder([tx+sx*w0,y0,tz+sz*w0],[tx+sx*w1,y1,tz-sz*w1],.026,.026,steel,5);
   }
  }
  for(const y of [ty+20.5,ty+24.8,ty+29]){
   distant.cylinder([tx-5,y,tz],[tx+5,y,tz],.075,.075,steel,6);
   for(const dx of [-4.7,4.7]){
    distant.cylinder([tx+dx,y,tz],[tx+dx,y-.9,tz],.10,.1,mat('#a6ada0'),8);
    const end=p(322,56),pts=[];
    for(let j=0;j<=28;j++){let t=j/28;pts.push([tx+dx+(end[0]-tx)*t,y-.9+(26-(ty+29))*t-3.1*Math.sin(t*Math.PI),tz+(end[1]-tz)*t]);}
    distant.tube(pts,.028,mat('#626963'),5);
   }
  }
  const boundary=[[103,69],[131,47],[202,40],[331,44],[479,94],[574,146],[583,632],[592,679],[470,739],[101,780],[71,735],[21,525],[30,339],[57,250],[63,145]];
  let treeIndex=0;
  for(let i=0;i<boundary.length-1;i++){
   // Leave the gate approach and the southern road open; plant the photographed perimeter.
   if(i===7||i===8||i===9)continue;
   const a=p(...boundary[i]),b=p(...boundary[i+1]),dx=b[0]-a[0],dz=b[1]-a[1],len=Math.hypot(dx,dz),ox=dz/len,oz=-dx/len;
   for(let d=2;d<len;d+=5.7){
    const t=d/len,x=a[0]+dx*t,z=a[1]+dz*t;
    foliage(x+ox*7.6,z+oz*7.6,pick(7.0,11.3),10000+treeIndex++);
    if(i<5||i>10)foliage(x+ox*14.6+dx/len*2.4,z+oz*14.6+dz/len*2.4,pick(8.2,13),10000+treeIndex++,1.13);
    if(i<6||i>10)foliage(x+ox*2,z+oz*2,pick(2.2,3.2),10000+treeIndex++,1.8);
   }
  }
  // Exactly one apartment building on the Nishigaya gate side, confirmed by the user.
  // The long balconies and five levels are observable; distance, depth and width are approximations.
  distant.scope(M.compose(-106,5,-41,Math.PI/2),()=>{
   const wall=mat('#c6c8bf',3,.92),balcony=mat('#b4c2be',0,.76,.05),shade=mat('#46545a',0,.88),glass=mat('#53696d',0,.37,.08);
   const w=69,depth=12,levels=5,step=2.85;
   distant.box(0,-2.5,0,w+1,5,depth+2,mat('#8a8c7b',3,.98));
   distant.box(0,levels*step/2,0,w,levels*step,depth,wall);
   for(let f=0;f<levels;f++){
    const y=f*step;
    distant.box(0,y+1.40,depth/2+.07,w-.6,2.42,.12,shade);
    distant.box(0,y+.10,depth/2+1.02,w+.7,.20,2.15,wall);
    distant.box(0,y+.79,depth/2+1.98,w,.98,.10,balcony);
    distant.box(0,y+1.33,depth/2+1.99,w,.06,.13,mat('#d3d9d5',0,.45,.28));
    for(let x=-w/2+1.6;x<w/2;x+=3.45){
     distant.box(x,y+1.40,depth/2+.16,2.1,2.25,.03,glass);
     distant.box(x+.99,y+1.4,depth/2+.18,.035,2.25,.03,m.metal);
     distant.box(x+1.52,y+1.4,depth/2+1.06,.10,2.58,1.85,wall);
    }
   }
   for(let x of [-w/2,-w*.18,w*.18,w/2])distant.box(x,levels*step/2,depth/2+1.08,.33,levels*step,2.3,wall);
   distant.box(0,levels*step+.13,0,w+1.2,.26,depth+4.2,wall);
  });
   // The apartment remains visible above mixed woodland; its right-hand end has no open gap.
   for(let i=0;i<13;i++){
    const z=-74+i*5.6,x=-84+(i%3)*2.7;
    foliage(x,z,7.5+(i%4)*.9,32140+i,1.1,58,i===2||i===5||i===9);
   }
  // Photograph-visible playground details along the northern boundary.
  const blue=mat('#338db0',0,.63,.08),red=mat('#ac4c39',0,.68),yellow=mat('#dbb548',0,.60);
  const slide=p(411,88);
  details.scope(M.compose(slide[0],0,slide[1],.18),()=>{
   for(const x of [-.55,.55])for(const z of [-.55,.55])details.cylinder([x,.02,z],[x,3.15,z],.045,.045,blue,8);
   details.box(0,1.94,0,1.22,.09,1.2,mat('#899892',0,.7));
   for(const x of [-.61,.61]){
    details.cylinder([x,2.0,-.55],[x,3.03,-.55],.035,.035,red,8);
    details.cylinder([x,3.03,-.55],[x,3.03,.55],.035,.035,red,8);
    details.quad([x*.72,1.96,.55],[x*.72,.16,3.45],[x*.72,.34,3.47],[x*.72,2.16,.55],yellow,3,1);
   }
   details.quad([-.44,1.97,.55],[.44,1.97,.55],[.44,.16,3.45],[-.44,.16,3.45],yellow,1,3);
   for(let y=.28;y<1.97;y+=.27)details.cylinder([-.47,y,-.69],[.47,y,-.69],.026,.026,m.metal,7);
  });
  const bars=p(483,126);
  for(let k=0;k<5;k++){
   const x=bars[0]+k*1.5,h=1.0+k*.27;
   for(const dx of [-.65,.65])details.cylinder([x+dx,0,bars[1]],[x+dx,h,bars[1]],.032,.032,blue,8);
   details.cylinder([x-.65,h,bars[1]],[x+.65,h,bars[1]],.028,.028,m.metal,8);
  }
  // Basketball hoop in the northern playground photos; simple pole and backboard.
  const hoop=p(365,75);
  details.cylinder([hoop[0],0,hoop[1]],[hoop[0],3.5,hoop[1]],.075,.075,mat('#aab4ad',0,.65,.2),10);
  details.box(hoop[0],3.45,hoop[1]+.18,1.8,1.05,.07,mat('#e7e7da',3,.9));
  details.box(hoop[0],3.32,hoop[1]+.23,.65,.49,.012,red);
  details.box(hoop[0],3.32,hoop[1]+.24,.58,.42,.012,mat('#e7e7da'));
  const ring=[];for(let i=0;i<=24;i++){let a=i/24*TAU;ring.push([hoop[0]+Math.sin(a)*.23,3.02,hoop[1]+.56+Math.cos(a)*.23]);}details.tube(ring,.016,red,6);
 }
};
