/* Drawing-registered scene model. Facts are in data.json; all mesh styling is illustrative. */
'use strict';
window.buildFestaWorld = async function(renderer,progress=()=>{}) {
 const {V,M,Geometry,Mesh,Atlas,material:mat,color,rng,clamp,TAU}=FestaGL;
 const data=FESTA_DATA,rand=rng(9212026),R=(a,b)=>a+(b-a)*rand();
 const p=(x,z)=>[(x-320)*.22,(z-290)*.22];
 const c3=(x,z,y=0)=>{let q=p(x,z);return[q[0],y,q[1]];};
 const atlas=new Atlas(512);const loadImage=url=>new Promise((res,rej)=>{let i=new Image();i.onload=()=>res(i);i.onerror=()=>rej(new Error('内蔵テクスチャを読み込めません。'));i.src=url;});
 const gravel=await loadImage(FESTA_ASSETS.gravel),grass=await loadImage(FESTA_ASSETS.grass);
 progress(.08,'地面と建物の素材を準備しています');
 atlas.add('white',(c,s)=>{c.fillStyle='#fff';c.fillRect(0,0,s,s);});
 function photoTexture(name,img,base,noise=.25){return atlas.add(name,(c,s)=>{c.drawImage(img,0,0,s,s);let im=c.getImageData(0,0,s,s),bc=color(base);for(let i=0;i<im.data.length;i+=4){let g=im.data[i]/255,f=.82+g*noise;for(let j=0;j<3;j++)im.data[i+j]=clamp(bc[j]*255*f,0,255);im.data[i+3]=255;}c.putImageData(im,0,0);});}
 photoTexture('soil',gravel,'#a19580',.32);photoTexture('grass',grass,'#727b4d',.55);
 atlas.add('concrete',(c,s)=>{c.fillStyle='#efeee6';c.fillRect(0,0,s,s);let im=c.getImageData(0,0,s,s);for(let i=0;i<im.data.length;i+=4){let n=R(-12,6);for(let j=0;j<3;j++)im.data[i+j]+=n;}c.putImageData(im,0,0);c.strokeStyle='rgba(119,119,107,.13)';c.lineWidth=1;c.beginPath();c.moveTo(0,120);c.lineTo(s,120);c.stroke();});
 photoTexture('asphalt',gravel,'#555754',.60);
 atlas.add('wood',(c,s)=>{c.fillStyle='#b78a57';c.fillRect(0,0,s,s);for(let row=0;row<8;row++){let x=row*64;c.fillStyle=`hsl(${31+R(-3,3)},${34+R(-5,5)}%,${55+R(-6,6)}%)`;c.fillRect(x,0,63,s);for(let j=0;j<35;j++){let xx=x+R(1,62);c.strokeStyle=`rgba(73,44,18,${R(.04,.17)})`;c.lineWidth=R(.3,1.3);c.beginPath();for(let y=0;y<=s;y+=16)c.lineTo(xx+Math.sin(y/72+j)*R(.2,1.4),y);c.stroke();}c.fillStyle='rgba(43,32,24,.20)';c.fillRect(x,0,1,s);let yy=(row%3)*163;c.fillRect(x,yy,64,1);}});
 atlas.add('fabric',(c,s)=>{c.fillStyle='#f7f6f0';c.fillRect(0,0,s,s);for(let i=0;i<s;i+=3){c.strokeStyle=i%6?'rgba(98,99,84,.05)':'rgba(255,255,255,.3)';c.beginPath();c.moveTo(i,0);c.lineTo(i,s);c.stroke();c.beginPath();c.moveTo(0,i);c.lineTo(s,i);c.stroke();}c.strokeStyle='rgba(154,155,144,.2)';c.lineWidth=2;c.strokeRect(8,8,s-16,s-16);});
 function leafTexture(autumn=false){atlas.add(autumn?'autumn':'leaf',(c,s)=>{c.clearRect(0,0,s,s);for(let i=0;i<220;i++){let a=R(0,TAU),r=Math.sqrt(rand())*228,x=s/2+Math.cos(a)*r,y=s/2+Math.sin(a)*r;c.strokeStyle=autumn?'#6f6541':'#526445';c.lineWidth=1.8;c.beginPath();c.moveTo(s/2,s*.7);c.quadraticCurveTo(s/2+(x-s/2)*.65,y+40,x,y);c.stroke();let hue=autumn?R(12,59):R(72,110);c.fillStyle=`hsl(${hue},${R(27,45)}%,${R(27,48)}%)`;c.beginPath();c.ellipse(x,y,R(6,11),R(12,23),a+.5,0,TAU);c.fill();c.strokeStyle='rgba(208,214,130,.3)';c.lineWidth=.7;c.beginPath();c.moveTo(x-4,y-10);c.lineTo(x+4,y+10);c.stroke();}});}
 leafTexture(false);leafTexture(true);
 atlas.add('bark',(c,s)=>{c.fillStyle='#807565';c.fillRect(0,0,s,s);for(let i=0;i<650;i++){c.strokeStyle=`rgba(${Math.floor(R(30,70))},${Math.floor(R(25,60))},${Math.floor(R(20,50))},${R(.1,.6)})`;c.lineWidth=R(.5,5);c.beginPath();let x=R(0,s),y=R(0,s);c.moveTo(x,y);c.lineTo(x+R(-9,9),y+R(14,120));c.stroke();}});
 atlas.add('roof',(c,s)=>{c.fillStyle='#a6b2b3';c.fillRect(0,0,s,s);for(let i=0;i<s;i+=32){c.fillStyle='#7c8d91';c.fillRect(i,0,3,s);c.fillStyle='#c7cecd';c.fillRect(i+3,0,2,s);}});
 atlas.add('net',(c,s)=>{c.clearRect(0,0,s,s);c.strokeStyle='#b1b4a7';c.lineWidth=3;for(let i=-s;i<s*2;i+=64){c.beginPath();c.moveTo(i,0);c.lineTo(i+s,s);c.stroke();c.beginPath();c.moveTo(i,s);c.lineTo(i+s,0);c.stroke();}});
 atlas.add('tire',(c,s)=>{c.fillStyle='#2b2b2a';c.fillRect(0,0,s,s);c.strokeStyle='#484948';c.lineWidth=5;for(let y=0;y<s;y+=27){c.beginPath();c.moveTo(0,y);c.lineTo(s*.5,y+15);c.lineTo(s,y);c.stroke();}});
 atlas.add('cloth',(c,s)=>{c.fillStyle='#eeeadf';c.fillRect(0,0,s,s);c.fillStyle='rgba(83,117,120,.12)';for(let i=0;i<s;i+=40){c.fillRect(i,0,18,s);c.fillRect(0,i,s,18);}});
 const categoryColors={F:'#a64c35',S:'#385e76',T:'#4e6c43',P:'#83503e',M:'#c39343',I:'#27595c'};
  const signFor={};for(let rec of [...data.records.filter(r=>!['unplaced','performer','unconfirmed','workshop'].includes(r.kind)),...data.locations]){signFor[rec.id]={banner:atlas.banner(rec.id.startsWith('F-')||rec.id.startsWith('S-')||rec.id.startsWith('T-')?rec.id:({HQ:'INFO',GYM:'STAGE',MOBILITY:'RIDE',MEET:'REST',OUTSTAGE:'STAGE',GATE_MAIN:'WELCOME',GATE_WEST:'WELCOME',WC:'WC',EAT2:'REST'}[rec.id]||'FESTA'),rec.short,rec.caption,categoryColors[rec.category]),menu:atlas.sign(rec.id+'-menu',rec.short,rec.detail,categoryColors[rec.category],rec.id+'   '+(rec.status||'予定'))};}
 const schoolSign=atlas.banner('西鎌倉','鎌倉市立西鎌倉小学校','つながりフェスタ＠にしかま2026','#415d60');
 const mainWelcome=atlas.banner('2026','つながりフェスタ＠にしかま','つながる、みつかる、すきになる','#356064');
 const warningSign=atlas.sign('走行エリア','モビリティー','実走路の中へは入れません。\n見学は柵の外側から。','#a74d38','車両実走路');
 const closedStage=atlas.banner('常設舞台','壇上舞台　使用せず','配置図に基づく表示','#695a51');
  const gymTitle=atlas.banner('P','みんなの舞台','体育館内・開始予定','#83533c');
 const scheduleTex=atlas.add('schedule',(c,s)=>{c.fillStyle='#fff9ec';c.fillRect(0,0,s,s);c.fillStyle='#5b3e32';c.font='700 29px sans-serif';c.fillText('体育館内 開始予定',24,42);c.font='17px sans-serif';c.fillText('終了時刻は未確認　／　当日変更の可能性あり',24,70);data.schedule.forEach((a,i)=>{let y=112+i*36;c.fillStyle=i%2?'#ffffff':'#f2ebde';c.fillRect(14,y-24,484,34);c.fillStyle='#83533c';c.font='700 20px sans-serif';c.fillText(a.time,23,y);c.fillStyle='#263b38';let fs=18;c.font=`${fs}px sans-serif`;let tx=a.name;while(c.measureText(tx).width>370&&fs>10)c.font=`${--fs}px sans-serif`;c.fillText(tx,100,y);});});
 const entryPanel=atlas.add('Entrance panels',(c,s)=>{const rand=rng(451);c.fillStyle='#33363b';c.fillRect(0,0,s,s);for(let y=0;y<s;y+=5)for(let x=0;x<s;x+=12){let n=40+rand()*25;c.fillStyle=`rgb(${n},${n+1},${n+5})`;c.fillRect(x+(y%10?6:0),y,10,3);}});
  const windowTexture=FestaScenery.textures(atlas,rng);
  const gymFloor=atlas.add('gym-floor',(c,s)=>{c.fillStyle='#aa7549';c.fillRect(0,0,s,s);for(let x=0;x<s;x+=32){c.fillStyle=`hsl(${27+R(-2,2)},${40+R(-5,5)}%,${48+R(-4,4)}%)`;c.fillRect(x+1,0,30,s);c.fillStyle='rgba(71,43,25,.24)';c.fillRect(x,0,1,s);let join=(Math.floor(x/32)%4)*128+32;c.fillRect(x+1,join,30,1);for(let j=0;j<9;j++){c.fillStyle=`rgba(84,51,27,${R(.025,.075)})`;c.fillRect(x+R(2,29),0,R(.35,1),s);}}});
  const gymWallWood=atlas.add('gym-wall-wood',(c,s)=>{c.fillStyle='#a77b60';c.fillRect(0,0,s,s);for(let x=0;x<s;x+=26){c.fillStyle=`hsl(${24+R(-2,2)},${31+R(-4,4)}%,${47+R(-3,3)}%)`;c.fillRect(x+1,0,24,s);c.fillStyle='rgba(44,27,21,.27)';c.fillRect(x,0,1,s);c.fillStyle='rgba(227,180,128,.15)';c.fillRect(x+3,0,1,s);}});
  const gymDisplayBoard=atlas.add('gym-display-board',(c,s)=>{c.fillStyle='#ecebe5';c.fillRect(0,0,s,s);c.fillStyle='#aaa9a2';for(let y=12;y<s;y+=16)for(let x=12;x<s;x+=16){c.beginPath();c.arc(x,y,1.4,0,TAU);c.fill();}});
 const windowMat=hex=>Object.assign(mat(hex,windowTexture,.39,.06),{fit:true});
 const one = new Geometry(),details=new Geometry(),green=new Geometry(),roofGeo=new Geometry(),signGeo=new Geometry();
 const m={dirt:mat('#fff',1,.97),grass:mat('#fff',2,.98),wall:mat('#dedccf',3,.93),base:mat('#a3aaa5',3,.9),asphalt:mat('#fff',4,.95),wood:mat('#fff',5,.64),metal:mat('#a6b0ac',0,.3,.65),whiteMetal:mat('#f1f1e8',0,.42,.24),dark:mat('#273036',0,.72),glass:windowMat('#c1cece'),black:mat('#252928',0,.6),fabric:mat('#f9f9f4',6,.85),bark:mat('#fff',9,.94),leaf:mat('#fff',7,.88),autumn:mat('#fff',8,.9),tire:mat('#fff',12,.93)};
 const colliders=[],trunks=[],markers=[],buildings=[],paths=[],seats=[];
 function addBoxCollider(x,z,w,d,id='',r=0){colliders.push({x,z,w,d,id,r});}
 function rectColliderPx(x1,z1,x2,z2,id){let a=p(x1,z1),b=p(x2,z2);addBoxCollider((a[0]+b[0])/2,(a[1]+b[1])/2,b[0]-a[0],b[1]-a[1],id);}
 const campusPx=[[103,69],[131,47],[202,40],[331,44],[479,94],[574,146],[583,632],[592,679],[470,739],[101,780],[71,735],[21,525],[30,339],[57,250],[63,145],[116,123],[95,101]];
 const campus=campusPx.map(q=>p(...q));
 function polyInside(x,z,poly){let c=false;for(let i=0,j=poly.length-1;i<poly.length;j=i++){let a=poly[i],b=poly[j];if((a[1]>z)!==(b[1]>z)&&x<(b[0]-a[0])*(z-a[1])/(b[1]-a[1])+a[0])c=!c;}return c;}
 let groundLevel=0;
 function groundPolygon(points,geo,material,tile=3){
  // Ear clipping preserves concave playground/campus boundaries and avoids overlapping asphalt.
  let pts=points.map(q=>[...q]),area=pts.reduce((a,p,i)=>{let n=pts[(i+1)%pts.length];return a+p[0]*n[1]-n[0]*p[1];},0);if(area<0)pts.reverse();let indices=pts.map((_,i)=>i),level=.007+groundLevel++*.011;
  const cross=(a,b,c)=>(b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0]);let guard=0;
  function tri(a,b,c){geo.tri([a[0],level,a[1]],[c[0],level,c[1]],[b[0],level,b[1]],material,[[a[0]/tile,a[1]/tile],[c[0]/tile,c[1]/tile],[b[0]/tile,b[1]/tile]]);}
  while(indices.length>3&&guard++<600){let found=false;for(let k=0;k<indices.length;k++){let ia=indices[(k-1+indices.length)%indices.length],ib=indices[k],ic=indices[(k+1)%indices.length],a=pts[ia],b=pts[ib],c=pts[ic];if(cross(a,b,c)<.0001)continue;if(indices.some(i=>i!==ia&&i!==ib&&i!==ic&&cross(a,b,pts[i])>=0&&cross(b,c,pts[i])>=0&&cross(c,a,pts[i])>=0))continue;tri(a,b,c);indices.splice(k,1);found=true;break;}if(!found)break;}
  if(indices.length===3)tri(...indices.map(i=>pts[i]));
 }
 one.plane(0,-.10,0,1100,1100,m.grass,460,460);groundPolygon(campus,one,m.asphalt,.7);
 const field=[p(64,146),p(147,146),p(175,83),p(286,78),p(382,92),p(491,128),p(575,167),p(575,300),p(470,302),p(469,412),p(430,431),p(425,407),p(260,408),p(223,418),p(170,413),p(99,420),p(98,388),p(66,388),p(64,350)];groundPolygon(field,one,m.dirt,1.35);
 // Dirt weathering patches are subtle, not flat category-colored blocks.
 // The full site is flat in this model: real-world accessibility must not be inferred.
 progress(.18,'配置図から校舎と会場を組み立てています');
 function building(x1,z1,x2,z2,h=10.65,label='校舎',facades=true){
  const a=p(x1,z1),b=p(x2,z2),x=(a[0]+b[0])/2,z=(a[1]+b[1])/2,w=b[0]-a[0],d=b[1]-a[1];
  buildings.push({x,z,w,d,h,label});addBoxCollider(x,z,w+.18,d+.18,label);
  one.box(x,h/2,z,w,h,d,m.wall);one.box(x,.24,z,w+.15,.48,d+.15,m.base);
  one.box(x,h+.12,z,w+.55,.24,d+.55,mat('#c6c3b6',0,.86));
  if(!facades)return;
  const floors=h>12?4:h>9?3:2,step=(h-.35)/floors;
  for(let dir=0;dir<4;dir++){
   const faceW=dir%2?d:w,faceD=dir%2?w:d;
   details.scope(M.compose(x,0,z,dir*Math.PI/2),()=>{
    const columns=Math.max(1,Math.floor((faceW-.9)/4.3)),bay=(faceW-.9)/columns;
    for(let f=0;f<floors;f++){
     const y=1.62+f*step,winH=f===0?1.8:1.16;
     details.box(0,f*step+.45,faceD/2+.015,faceW,.035,.026,mat('#b4b3a7',0,.95));
     for(let j=0;j<columns;j++){
      const xx=-faceW/2+.45+(j+.5)*bay,ww=bay*.84;
      details.box(xx,y,faceD/2+.024,ww+.12,winH+.12,.06,mat('#aaa99f',0,.6,.25));
      details.box(xx,y,faceD/2+.06,ww,winH,.025,windowMat((j+f)%4===0?'#a9b8b8':'#c5cecb'));
      for(let k=1;k<4;k++)details.box(xx-ww/2+k*ww/4,y,faceD/2+.085,.038,winH,.032,m.metal);
      details.box(xx,y-winH/2-.035,faceD/2+.11,ww+.17,.075,.17,mat('#bdbdb3',0,.85));
      if(f===0)details.box(xx,y+.2,faceD/2+.087,ww,.037,.03,m.metal);
     }
    }
    for(let j=0;j<=columns;j+=2){let xx=-faceW/2+.45+j*bay;details.box(xx,h/2,faceD/2+.085,.22,h,.17,m.wall);}
    for(let side of [-1,1])details.cylinder([side*(faceW/2-.2),.35,faceD/2+.19],[side*(faceW/2-.2),h-.2,faceD/2+.19],.045,.045,mat('#a9aaa0',0,.75),8);
   });
  }
 }
 building(95.4,436.56,329.52,489.72,13.5);building(30.48,411.36,82.56,541.56,10.65);building(67.32,389.4,95.4,436.56,10.65);building(329.52,430.32,425.28,516.36,13.5);building(307.92,489.72,329.52,516.36,7.2);building(311.52,535.08,390.72,603.6,7.9,'昇降口',false);building(103.44,608.28,401.04,666.1,10.7);
 // The stairwell at the western end of the field-facing school has a mostly blank facade.
 {let q=p(111,436.56);details.box(q[0],6.75,q[1]-.16,6.1,13.5,.32,m.wall);for(let y of [3.2,6.5,9.8,13.4])details.box(q[0],y,q[1]-.36,6.55,.19,.47,m.wall);details.box(q[0],1.3,q[1]-.34,4.7,2.4,.05,m.glass);details.box(q[0],2.88,q[1]-1,6.4,.2,2,m.wall);}
 // Low entrance canopy visible from the field, with brown doors.
  {let q=p(238,436.56),door=mat('#693f30',0,.78),trim=mat('#9e9f94',0,.72,.18);details.box(q[0],1.25,q[1]-.035,6.3,2.5,.08,door);details.box(q[0],2.8,q[1]-.7,8.8,.18,1.5,mat('#724b3e',0,.8));for(let x of [-4.1,4.1])details.box(q[0]+x,1.4,q[1]-1.2,.23,2.8,.23,m.wall);for(let x of [-2.75,-1.38,0,1.38,2.75]){details.box(q[0]+x,1.32,q[1]-.095,.045,2.24,.07,trim);details.box(q[0]+x,2.22,q[1]-.13,1.30,.055,.05,trim);}for(let x of [-1.1,1.1])details.box(q[0]+x,1.12,q[1]-.15,.05,.32,.06,trim);details.box(q[0],.055,q[1]-1.45,9.0,.11,2.55,mat('#aeada1',3,.95));}
 function clock(x,y,z,yaw=0){details.scope(M.compose(x,y,z,yaw),()=>{details.cylinder([0,0,-.03],[0,0,.06],.48,.48,m.whiteMetal,36);details.cylinder([0,0,.062],[0,0,.07],.43,.43,mat('#efefdf'),36);for(let i=0;i<12;i++){let a=i/12*TAU;details.cylinder([Math.sin(a)*.34,Math.cos(a)*.34,.085],[Math.sin(a)*.38,Math.cos(a)*.38,.085],.01,.01,m.dark,5);}details.cylinder([0,0,.095],[.07,.27,.095],.017,.017,m.dark,6);details.cylinder([0,0,.10],[.27,-.1,.10],.013,.013,m.dark,6);});}
 {let q=p(365,430.2);clock(q[0],6.8,q[1]-.06,Math.PI);}
 // Main entrance: the columns and the two upper panels share the front plane.
 {let q=p(391,566);details.scope(M.compose(q[0]+.06,0,q[1],Math.PI/2),()=>{
  const wall=mat('#e1e0d4',3,.92),darkPanel=mat('#ffffff',entryPanel,.95);
  const front=2.10,door=.22,center=-.85;
  // Upper storey covers the porch; its underside reaches the recessed doors.
  details.box(0,5.50,.93,14.4,4.5,2.34,wall);
  details.box(-3.92,5.59,front+.045,5.35,3.05,.06,darkPanel);
  details.box(3.14,5.59,front+.045,6.91,3.05,.06,darkPanel);
  details.box(0,7.84,.96,14.7,.20,2.52,wall);
  details.box(0,3.28,.94,14.4,.30,2.32,wall);
  details.box(0,.16,1.18,14.5,.20,2.88,mat('#aaa99e',3,.9));
  details.box(0,1.65,door-.08,13.65,2.92,.06,mat('#252e2c',0,.93));
  const metal=mat('#b4b9b4',0,.42,.38),glass=mat('#56665f',0,.30,.15);
  // Continuous entrance glazing, transoms, door rails and handles.
  for(let i=0;i<10;i++){
   const x=-6.08+i*1.35;
   details.box(x,1.50,door,1.28,2.25,.035,glass);
   details.box(x,2.85,door,1.28,.37,.035,mat('#777e70',0,.36));
   details.box(x-.66,1.65,door+.045,.045,2.90,.055,metal);
   for(const y of [.38,1.18,2.64,3.06])details.box(x,y,door+.045,1.34,.045,.055,metal);
   if(i%2===0){details.box(x+.46,1.20,door+.105,.025,.32,.035,metal);details.box(x+.46,1.02,door+.075,.12,.025,.08,metal);}
  }
  details.box(6.74,1.65,door+.045,.045,2.90,.055,metal);
  for(const x of [-6.91,center,6.91]){
   details.box(x,1.71,front-.29,.58,3.08,.58,wall);
   details.box(x,.23,front-.29,.67,.15,.67,mat('#b7b7aa',3,.94));
  }
  for(const x of [-6.9,6.9])details.box(x,1.74,1.08,.28,3.04,1.88,wall);
  for(const x of [-5.25,-2.65,1.55,4.85]){
   details.box(x,3.115,1.16,.38,.045,.26,mat('#50534b'));
   details.box(x,3.086,1.16,.29,.017,.17,mat('#e7e3c5',0,.6,0,.25));
  }
  for(let i=0;i<3;i++)details.box(0,.03+i*.05,3.25-i*.38,14.7,.06+i*.10,.40,mat('#a9a79b',3,.9));
  clock(center,3.60,front+.08,0);
 });}
 // Small store rooms and wash basins indicated on the plan.
  {let q=p(204,420),metal=mat('#919b94',0,.58,.21),panel=mat('#a9aea5',0,.82);one.box(q[0],1.8,q[1],8.9,3.6,5.3,m.wall);one.box(q[0],3.66,q[1],9.15,.18,5.55,mat('#919b94',10));addBoxCollider(q[0],q[1],9,5.4,'用具庫');for(let side of [-1,1]){details.box(q[0]+side*2.12,1.58,q[1]-2.69,4.08,2.95,.07,panel);details.box(q[0]+side*2.12,1.59,q[1]-2.75,4.0,.035,.055,metal);for(let i=-1;i<=1;i++)details.box(q[0]+side*2.12+i*1.17,1.58,q[1]-2.75,.025,2.88,.045,metal);details.box(q[0]+side*3.50,1.34,q[1]-2.79,.045,.26,.045,metal);}details.box(q[0],3.16,q[1]-2.81,8.75,.22,.12,metal);for(let x of [-3.9,0,3.9])details.cylinder([q[0]+x,3.58,q[1]-2.64],[q[0]+x,.08,q[1]-2.64],.045,.045,metal,8);details.box(q[0],1.3,q[1]+2.68,3,2.6,.08,mat('#79857f',0,.46,.35));}
 function basin(px,pz,yaw=0){let q=p(px,pz);details.scope(M.compose(q[0],0,q[1],yaw),()=>{details.box(0,.63,0,2.9,.33,.52,m.base);details.box(0,.83,0,2.96,.08,.60,mat('#c3cdca',0,.23,.7));for(let j=0;j<6;j++){let x=-1.22+j*.49;details.box(x,.84,0,.35,.015,.33,mat('#697e81',0,.18,.65));details.cylinder([x,.81,-.19],[x,1.15,-.19],.018,.018,m.metal,7);details.cylinder([x,1.15,-.19],[x,1.15,.02],.017,.017,m.metal,7);}for(let x of [-1.1,1.1])details.box(x,.35,0,.13,.7,.34,m.base);});}
 basin(251,414);basin(42,400);
 {let q=p(401,538),brick=mat('#ac7049',0,.94);details.cylinder([q[0],.12,q[1]],[q[0],.75,q[1]],1.25,1.25,brick,36);details.cylinder([q[0],.75,q[1]],[q[0],.82,q[1]],1.29,1.29,mat('#ada99a'),36);details.cylinder([q[0],.825,q[1]],[q[0],.84,q[1]],1.10,1.10,m.base,36);for(let i=0;i<24;i++){let a=i/24*TAU;details.cylinder([q[0]+1.252*Math.sin(a),.12,q[1]+1.252*Math.cos(a)],[q[0]+1.252*Math.sin(a),.74,q[1]+1.252*Math.cos(a)],.009,.009,mat('#d4b99a'),5);}for(let dx of [-.48,.48]){details.cylinder([q[0]+dx,.84,q[1]],[q[0]+dx,1.18,q[1]],.025,.025,m.metal,7);details.cylinder([q[0]+dx,1.18,q[1]],[q[0]+dx+.16,1.18,q[1]],.025,.025,m.metal,7);}}

 // Gym: open western entrances, no traversal through the walls or the closed permanent stage.
 const gx1=470,gx2=580,gz1=302,gz2=504;let ga=p(gx1,gz1),gb=p(gx2,gz2),gc=[(ga[0]+gb[0])/2,(ga[1]+gb[1])/2],gw=gb[0]-ga[0],gd=gb[1]-ga[1],hallEndZ=p(500,468)[1],gymRise=.45;
  const hallDepth=hallEndZ-ga[1],hallCenterZ=(ga[1]+hallEndZ)/2;
  one.box(gc[0],gymRise/2,gc[1],gw,gymRise,gd,mat('#b7b9b3',3,.94));
  one.plane(gc[0],gymRise+.045,hallCenterZ,gw,hallDepth,mat('#ffffff',gymFloor,.4),gw/4,hallDepth/4);
  one.plane(gc[0],gymRise+.044,(hallEndZ+gb[1])/2,gw,gb[1]-hallEndZ,mat('#c9c5b9',0,.88),gw/4,2);
  buildings.push({x:gc[0],z:gc[1],w:gw,d:gd,h:10,label:'体育館',gym:true});
 // Gym walls: lower concrete and upper glazing with a continuous metal frame.
 one.box(gb[0],2.1,gc[1],.35,4.2,gd,m.wall);one.box(gb[0],8.38,gc[1],.35,.64,gd,m.wall);addBoxCollider(gb[0],gc[1],.4,gd,'体育館東壁');
  one.box(gc[0],4.35,ga[1],gw,8.7,.35,m.wall);addBoxCollider(gc[0],ga[1],gw,.4,'体育館壁');
  const southEntryX=ga[0]+gw*.38,southEntryHalf=2.25;
  const southWallSegments=[[ga[0],southEntryX-southEntryHalf],[southEntryX+southEntryHalf,gb[0]]];
  for(const [a,b] of southWallSegments)one.box((a+b)/2,2.1,gb[1],b-a,4.2,.35,m.wall);
  one.box(southEntryX,3.6,gb[1],southEntryHalf*2,1.2,.35,m.wall);
  one.box(gc[0],6.45,gb[1],gw,4.5,.35,m.wall);addBoxCollider(gc[0],gb[1],gw,.4,'体育館壁');
  for(const [a,b] of southWallSegments){
   one.box((a+b)/2,2.1,hallEndZ,b-a,4.2,.35,m.wall);
   addBoxCollider((a+b)/2,hallEndZ,b-a,.4,'体育館床の出口側の壁');
  }
  one.box(southEntryX,3.6,hallEndZ,southEntryHalf*2,1.2,.35,m.wall);
  one.box(gc[0],6.45,hallEndZ,gw,4.5,.35,m.wall);
  addBoxCollider(southEntryX,hallEndZ,southEntryHalf*2,.4,'体育館の閉じた扉');
 const westOpenings=[[335,344],[421,433],[468,484]];
 let westSegments=[[302,335],[344,421],[433,468],[484,504]];
 for(let [a,b] of westSegments){let qa=p(gx1,a),qb=p(gx1,b);one.box(ga[0],2.1,(qa[1]+qb[1])/2,.36,4.2,qb[1]-qa[1],m.wall);addBoxCollider(ga[0],(qa[1]+qb[1])/2,.4,qb[1]-qa[1],'体育館西壁');}
 one.box(ga[0],8.38,gc[1],.36,.64,gd,m.wall);
 for(let [a,b] of westOpenings){let qa=p(gx1,a),qb=p(gx1,b);one.box(ga[0],3.49,(qa[1]+qb[1])/2,.36,1.42,qb[1]-qa[1],m.wall);}
 const glass=windowMat('#aab9b7'),frame=mat('#b7b9ae',0,.53,.3);
  for(let side of [-1,1]){
   let x=gc[0]+side*gw/2;
  details.box(x,6.13,gc[1],.03,3.86,gd-.75,glass);
  for(let y of [4.2,5.05,6.1,7.12,8.05])details.box(x, y,gc[1],.16,.065,gd,frame);
  for(let z=ga[1]+.45;z<gb[1];z+=1.35)details.box(x,6.13,z,.17,3.9,.055,frame);
  for(let z=ga[1]+.5;z<gb[1];z+=5.4){
   if(side<0&&westOpenings.some(([a,b])=>z>p(gx1,a)[1]-.2&&z<p(gx1,b)[1]+.2))continue;
   details.box(x,4.3,z,.45,8.6,.33,m.wall);
  }
  // Interior railing and wood panels, restricted to solid walls so entrances remain open.
  for(let z=ga[1]+.5;z<gb[1]-.4;z+=.55)details.box(x-side*.3,4.9,z,.035,1.2,.03,m.whiteMetal);
   details.box(x-side*.3,5.5,gc[1],.05,.05,gd,m.whiteMetal);
  }
  // Interior wood panelling and the upper gallery follow the gym photographs.
   const insideWood=mat('#ffffff',gymWallWood,.78),insideTrim=mat('#966d50',0,.76);
   for(const side of [-1,1])for(const [a,b] of (side<0?westSegments:[[302,504]])){
   const za=p(gx1,a)[1],zb=p(gx1,b)[1],x=gc[0]+side*(gw/2-.205);
   details.box(x,2.14,(za+zb)/2,.028,4.03,zb-za,insideWood);
   details.box(x-side*.04,4.14,(za+zb)/2,.045,.11,zb-za,insideTrim);
   for(let z=za+.36;z<zb;z+=.75)details.box(x-side*.03,2.1,z,.035,3.94,.026,insideTrim);
    details.cylinder([x-side*.35,5.2,za],[x-side*.35,5.2,zb],.025,.025,m.whiteMetal,8);
   }
   // The three west door heads and the entrance-facing wall share the same wood finish.
   for(const [a,b] of westOpenings){
    const za=p(gx1,a)[1],zb=p(gx1,b)[1];
    details.box(ga[0]+.205,3.49,(za+zb)/2,.035,1.42,zb-za,insideWood);
   }
   const southInsideZ=hallEndZ-.205;
   for(const [a,b] of southWallSegments){
    details.box((a+b)/2,2.1,southInsideZ,b-a-.06,4.04,.035,insideWood);
    for(let x=a+.38;x<b-.2;x+=.53)details.box(x,2.1,southInsideZ-.028,.022,3.96,.02,insideTrim);
   }
   details.box(southEntryX,3.59,southInsideZ,4.46,1.14,.035,insideWood);
   const southFrame=mat('#e6e2d8',0,.76),southGlass=mat('#24775f',0,.74,.04);
   for(const side of [-1,1])details.box(southEntryX+side*2.25,1.52,southInsideZ-.04,.11,3.04,.09,southFrame);
   details.box(southEntryX,3.02,southInsideZ-.04,4.6,.12,.09,southFrame);
   one.box(southEntryX,1.5,hallEndZ-.08,4.32,2.94,.16,mat('#aa8769',0,.82));
   details.box(southEntryX,1.5,southInsideZ-.09,.045,2.9,.04,insideTrim);
   for(const side of [-1,1])details.box(southEntryX+side*.16,1.34,southInsideZ-.12,.035,.28,.07,m.metal);
   for(const dx of [-4.8,0,4.8]){
    const x=gc[0]+dx;
    details.box(x,6.0,southInsideZ-.02,1.35,2.4,.05,southFrame);
    details.box(x,6.0,southInsideZ-.055,1.21,2.25,.025,southGlass);
    details.box(x-.35,6.0,southInsideZ-.073,.08,2.19,.015,mat('#6eb49a',0,.79,.02));
   }
 // Shallow gable and a white ceiling, as shown in the reference photos.
 const roofMat=mat('#8f9693',10,.78,.12),ceiling=mat('#e8e6dc',0,.96);
 for(let side of [-1,1]){
  let xx=gc[0]+side*(gw/2+.4);
  roofGeo.quad([gc[0],10.15,ga[1]-.4],[gc[0],10.15,gb[1]+.4],[xx,8.72,gb[1]+.4],[xx,8.72,ga[1]-.4],roofMat,gd/3,4);
  roofGeo.quad([gc[0],9.97,ga[1]],[xx,8.54,ga[1]],[xx,8.54,gb[1]],[gc[0],9.97,gb[1]],ceiling,1,1);
 }
 for(let z of [ga[1],gb[1]])one.tri([ga[0],8.7,z],[gc[0],10.15,z],[gb[0],8.7,z],m.wall);
 for(let z=ga[1]+3;z<gb[1]-1;z+=5.4)for(let dx of [-7,-2.3,2.3,7]){let y=9.93-Math.abs(dx)/(gw/2)*1.43;roofGeo.cylinder([gc[0]+dx,y-.07,z],[gc[0]+dx,y-.01,z],.25,.25,m.whiteMetal,20);roofGeo.disk(gc[0]+dx,y-.085,z,.215,mat('#fff9e4',0,.9,0,.8),20);}
 // Southern facade, entrance terrace and stair/bridge connection are built by FestaScenery.
  // The permanent stage is recessed behind a tall timber opening and remains closed.
  const stageFrame=mat('#a8784f',0,.58),curtain=mat('#391722',6,.94),gold=mat('#c39736',0,.47,.17);
  const portalZ=ga[1]+4.03,curtainZ=ga[1]+2.14;
  for(const side of [-1,1]){
   const width=gw/2-6.12,x=gc[0]+side*(6.12+width/2);
   details.box(x,2.1,ga[1]+.21,width,4.16,.05,insideWood);
   for(let px=x-width/2+.36;px<x+width/2;px+=.50)details.box(px,2.1,ga[1]+.25,.023,4.08,.026,insideTrim);
  }
  one.box(gc[0],gymRise+.55,ga[1]+2.1,11,1.1,4.0,mat('#aa7649',gymFloor,.52));addBoxCollider(gc[0],ga[1]+2.1,11,4.2,'常設舞台・使用せず');
  details.box(gc[0],3.81,curtainZ,11.2,5.46,.11,curtain);
  for(let i=0;i<32;i++){let x=gc[0]-5.42+i*.35;details.cylinder([x,1.10,curtainZ+.08],[x,6.49,curtainZ+.08],.075,.075,mat(i%3?'#421925':'#572331',6,.96),7);}
  for(const y of [1.10,6.48])details.box(gc[0],y,curtainZ+.17,11.18,.085,.10,gold);
  for(const side of [-1,1]){
   details.box(gc[0]+side*5.86,4.05,portalZ,.73,6.89,.69,stageFrame);
   details.box(gc[0]+side*5.49,3.79,(curtainZ+portalZ)/2,.22,5.95,portalZ-curtainZ,stageFrame);
  }
  details.box(gc[0],7.46,portalZ,12.45,.66,.72,stageFrame);
  details.box(gc[0],6.89,portalZ+.39,11.12,.55,.07,mat('#4a1a28',0,.94));
  details.quad([gc[0],7.24,portalZ+.44],[gc[0]-.25,6.97,portalZ+.44],[gc[0],6.70,portalZ+.44],[gc[0]+.25,6.97,portalZ+.44],gold);
  details.box(gc[0],1.01,portalZ+.45,11.1,.73,.33,insideWood);
  for(const side of [-1,1])details.box(gc[0]+side*8.25,2.55,ga[1]+.29,3.2,.92,.06,insideWood);
  signGeo.sign(gc[0]-8.25,2.55,ga[1]+.34,3.0,.62,closedStage);
  signGeo.sign(gc[0]+8.25,2.55,ga[1]+.34,3.0,.62,gymTitle);
   // The long white perforated boards follow the photographs; no original exhibits are reproduced.
   {const wallX=gb[0]-.25,board=mat('#ffffff',gymDisplayBoard,.91);for(let panel=0;panel<5;panel++){
    const wallZ=ga[1]+8.3+panel*5.45;
    details.box(wallX,2.53,wallZ,.09,2.45,5.24,insideTrim);
    details.box(wallX-.06,2.53,wallZ,.025,2.31,5.10,board);
    for(let row=0;row<2;row++)for(let col=0;col<5;col++){
     const z=wallZ+(col-2)*.92,y=2.99-row*.91;
     details.box(wallX-.084,y,z,.014,.66,.54,mat(['#edece6','#e2e5df','#e7e0d7'][col%3],0,.94));
    }
   }}
  for(const side of [-1,1])for(const z of [ga[1]+20,ga[1]+33,ga[1]+46])details.box(gc[0]+side*(gw/2-.245),6.03,z,.035,2.9,2.4,mat('#27443b',6,.9));
  for(let side of [-1,1]){details.cylinder([gc[0]+side*6.0,.05,ga[1]+5.0],[gc[0]+side*6.0,5.3,ga[1]+5.0],.045,.045,m.metal,8);}
 // Faint court lines are drawn on top of the wooden floor, not used as navigation obstacles.
 function line(geo,a,b,width,material,y=.066+gymRise){let dx=b[0]-a[0],dz=b[1]-a[1],l=Math.hypot(dx,dz),nx=-dz/l*width/2,nz=dx/l*width/2;geo.quad([a[0]-nx,y,a[1]-nz],[a[0]+nx,y,a[1]+nz],[b[0]+nx,y,b[1]+nz],[b[0]-nx,y,b[1]-nz],material,l,1);}
  for(let x of [gc[0]-8.2,gc[0]+8.2])line(details,[x,ga[1]+6],[x,hallEndZ-2],.047,mat('#f5ede3'));
  for(let z of [ga[1]+6,hallCenterZ,hallEndZ-2])line(details,[gc[0]-8.2,z],[gc[0]+8.2,z],.047,mat('#f5ede3'));
  for(let x of [gc[0]-6.8,gc[0]+6.8])line(details,[x,ga[1]+13],[x,hallEndZ-3],.036,mat('#293239'),.068+gymRise);
  for(let z of [ga[1]+13,hallEndZ-3])line(details,[gc[0]-6.8,z],[gc[0]+6.8,z],.036,mat('#293239'),.068+gymRise);
  for(let x of [gc[0]-9.2,gc[0]+9.2])line(details,[x,ga[1]+16],[x,hallEndZ-4],.038,mat('#2f7795'),.070+gymRise);
 let doorSign=p(469.65,427);signGeo.scope(M.compose(doorSign[0]-.12,0,doorSign[1],-Math.PI/2),()=>{signGeo.sign(0,2.94,0,3.5,.75,signFor.GYM.banner);signGeo.sign(3.7,1.55,.1,1.08,1.65,scheduleTex);});
 progress(.30,'テント・キッチンカー・ブースの内容を配置しています');
 function chair(geo,x,z,yaw=0,seatColor='#66746c',y0=0){geo.scope(M.compose(x,y0,z,yaw),()=>{let metal=mat('#a5aca8',0,.32,.5),cloth=mat(seatColor,6,.82);geo.box(0,.43,0,.42,.055,.39,cloth);geo.box(0,.70,-.18,.43,.30,.045,cloth);for(let a of [-.17,.17]){geo.cylinder([a,.04,-.15],[a,.86,-.18],.016,.016,metal,6);geo.cylinder([a,.04,.21],[a,.44,.1],.016,.016,metal,6);geo.cylinder([a,.05,-.16],[a,.47,.15],.014,.014,metal,6);}geo.cylinder([-.19,.18,-.14],[.19,.18,-.14],.012,.012,metal,6);});}
 function table(geo,x,z,w=1.8,d=.72,yaw=0,cloth=true,collide=false){geo.scope(M.compose(x,0,z,yaw),()=>{geo.box(0,.73,0,w,.07,d,cloth?mat('#f2ede1',13,.9):mat('#d5c8af',5,.7));for(let xx of [-w*.36,w*.36]){geo.cylinder([xx,.06,-d*.34],[xx,.71,d*.32],.022,.022,m.metal,7);geo.cylinder([xx,.06,d*.34],[xx,.71,-d*.32],.022,.022,m.metal,7);}geo.cylinder([-w*.38,.35,0],[w*.38,.35,0],.021,.021,m.metal,7);if(cloth)for(let side of [-1,1])geo.box(0,.60,side*d/2,w,.25,.016,mat('#eeeadf',6,.94));});if(collide)addBoxCollider(x,z,Math.abs(Math.cos(yaw))*w+Math.abs(Math.sin(yaw))*d,Math.abs(Math.sin(yaw))*w+Math.abs(Math.cos(yaw))*d,'table');}
 // 16 tables and 96 chairs in the central eating area, as written on the drawing.
 let eat=p(368,283);for(let r=0;r<4;r++)for(let c=0;c<4;c++){let x=eat[0]+(c-1.5)*2.62,z=eat[1]+(r-1.5)*2.42;table(details,x,z,1.65,.70,0,true,true);for(let side of [-1,1])for(let i=0;i<3;i++){let sx=x+(i-1)*.53,sz=z+side*.71;chair(details,sx,sz,side===-1?0:Math.PI,'#6f7970');seats.push({x:sx,z:sz,yaw:side===-1?0:Math.PI});}}
 let eat2=p(431,548);for(let r=0;r<3;r++){table(details,eat2[0],eat2[1]+(r-1)*2.2,1.8,.65,0,true,true);for(let s of [-1,1])for(let i=0;i<3;i++)chair(details,eat2[0]+(i-1)*.57,eat2[1]+(r-1)*2.2+s*.68,s<0?0:Math.PI);}
 // Gym audience chairs: an explicitly illustrative arrangement, leaving aisles open.
 for(let r=0;r<6;r++)for(let c=0;c<12;c++){let x=gc[0]+(c-5.5)*.64+(c<6?-.7:.7),z=ga[1]+21+r*.92;chair(details,x,z,Math.PI,'#566a68',gymRise+.05);seats.push({x,z,yaw:Math.PI,gym:true});}
 function aframe(geo,x,z,layer,yaw=0){geo.scope(M.compose(x,0,z,yaw),()=>{geo.cylinder([-.40,.04,-.15],[-.35,1.29,0],.023,.023,m.wood,6);geo.cylinder([.40,.04,-.15],[.35,1.29,0],.023,.023,m.wood,6);geo.cylinder([-.4,.04,-.48],[-.35,1.29,0],.023,.023,m.wood,6);geo.cylinder([.4,.04,-.48],[.35,1.29,0],.023,.023,m.wood,6);geo.sign(0,.85,.03,.70,.94,layer,true);});}
  function tentRoof(geo,w,d,canvasMat,y=2.18,peak=3.16){let corner=[[-w/2,y,-d/2],[-w/2,y,d/2],[w/2,y,d/2],[w/2,y,-d/2]],top=[0,peak,0];for(let k=0;k<4;k++){let a=corner[k],b=corner[(k+1)%4];const f=(u,v)=>{let edge=V.add(V.mul(a,1-u),V.mul(b,u));let point=V.add(V.mul(edge,1-v),V.mul(top,v));point[1]-=.052*Math.sin(u*Math.PI)*Math.sin(v*Math.PI);return point;};for(let i=0;i<10;i++)for(let j=0;j<8;j++){let u=i/10,v=j/8,aa=f(u,v),bb=f((i+1)/10,v),cc=f((i+1)/10,(j+1)/8),dd=f(u,(j+1)/8);geo.quad(aa,bb,cc,dd,canvasMat,1,1);}geo.quad(a,[a[0],y-.20,a[2]],[b[0],y-.20,b[2]],b,canvasMat,1,1);}}
 function goods(geo,rec){let id=rec.id,kind=rec.category,coffee=id==='F-1'||id==='F-9',bread=id==='F-6'||id==='F-8',vegetable=id==='T-12',radio=id==='T-2';
   if(coffee){for(let i=0;i<9;i++){let x=-.8+(i%5)*.23,z=.3+Math.floor(i/5)*.22;geo.cylinder([x,.79,z],[x,.94,z],.044,.052,mat('#faf3dd'),12);geo.cylinder([x,.94,z],[x,.958,z],.055,.055,mat('#635442'),12);}geo.box(.54,1.02,-.14,.45,.53,.32,mat('#3f4443',0,.25,.45));geo.box(.53,1.09,.03,.22,.13,.017,mat('#91aaa1',0,.25,.2));for(let i=0;i<3;i++)geo.cylinder([.36+i*.11,.79,.16],[.36+i*.11,.98,.16],.028,.028,m.metal,8);}
   else if(bread){for(let b=0;b<3;b++){let x=-.65+b*.65;geo.box(x,.79,.28,.56,.11,.40,mat('#a98350',5));for(let j=0;j<7;j++){geo.sphere(x+R(-.20,.20),.89,.28+R(-.14,.14),R(.065,.09),.045,R(.06,.10),mat(['#bd863d','#d2a05d','#a87139'][j%3]),12,7);}}}
   else if(vegetable){for(let b=0;b<3;b++){let x=-.62+b*.60;geo.box(x,.85,.17,.52,.20,.50,mat('#b7915d',5));for(let j=0;j<8;j++){let xx=x+R(-.2,.2),zz=.17+R(-.17,.17);geo.cylinder([xx,.88,zz],[xx+.11,1.06,zz+.04],.017,.04,mat('#d07731'),8);geo.cylinder([xx+.1,1.04,zz+.04],[xx+.17,1.17,zz+.02],.008,.01,mat('#58703a'),6);}}}
   else if(radio){geo.box(-.35,.94,.15,.70,.28,.34,mat('#2b363c',0,.45,.25));geo.box(-.42,1.01,.33,.29,.10,.007,mat('#a9be92',0,.5,0,.2));for(let i=0;i<3;i++)geo.cylinder([-.06+i*.05,.94,.34],[-.06+i*.05,.94,.37],.024,.024,m.metal,10);geo.box(.5,.84,.23,.35,.05,.28,mat('#373a3c'));geo.cylinder([.75,.80,-.13],[.75,2.65,-.13],.012,.012,m.metal,7);geo.cylinder([.33,2.4,-.13],[1.14,2.4,-.13],.015,.015,m.metal,7);}
   else if(kind==='F'){for(let b=0;b<3;b++){let x=-.70+b*.65;geo.box(x,.80,.22,.54,.09,.36,mat('#d1d5c8',0,.25,.45));for(let j=0;j<8;j++){let xx=x+R(-.2,.2),zz=.22+R(-.12,.12);geo.sphere(xx,.855,zz,.047,.025,.045,mat(['#c99352','#dfb476','#724b30'][j%3]),9,5);}}if(id==='F-11'){geo.box(.12,.80,-.26,1.0,.1,.3,m.black);for(let i=0;i<9;i++)geo.cylinder([-.3+i*.1,.88,-.49],[-.3+i*.1,.88,.02],.006,.006,mat('#d5b878'),5);}}
   else if(kind==='S'){for(let i=0;i<14;i++){let x=-.8+(i%7)*.25,z=.13+Math.floor(i/7)*.25;geo.box(x,.794,z,.17,.015,.16,mat('#f8f4e6'));geo.sphere(x,.83,z,.055,.032,.055,mat(['#aa5c61','#b5aa6c','#558489','#9a804c'][i%4],0,.28,.32),12,7);}if(id==='S-8'){for(let i=0;i<9;i++)geo.cylinder([-.75+i*.17,.83,-.2],[-.70+i*.17,1.01,-.08],.021,.024,mat('#c8af70',5),7);}}
   else{for(let i=0;i<3;i++){geo.box(-.65+i*.6,.795,.22,.43,.015,.28,mat('#faf8ec'));geo.box(-.65+i*.6,.82,.20,.35,.012,.21,mat(['#bbbaa0','#a6b4bb','#b7ba8d'][i],0,.8));}}
 }
 function tent(rec,override=null){let pos=override||rec.pos,w=rec.width||3.02,d=2.75,yaw=rec.yaw||0;let roofTint=rec.id==='S-3'||rec.id==='S-9'?'#8393a0':rec.id==='F-11'?'#859690':'#f8f7ef';let band=mat(categoryColors[rec.category],6,.92);one.scope(M.compose(pos[0],0,pos[1],yaw),()=>{tentRoof(one,w,d,mat(roofTint,6,.92));for(let x of rec.id==='F-10'?[-w/2+.035,0,w/2-.035]:[-w/2+.035,w/2-.035])for(let z of [-d/2+.035,d/2-.035])one.cylinder([x,.03,z],[x,2.2,z],.029,.026,m.metal,8);one.box(0,2.10,d/2,w,.29,.026,band);one.box(0,2.1,-d/2,w,.29,.025,mat(roofTint,6));for(let x of [-w/2,w/2])one.box(x,2.1,0,.025,.29,d,mat(roofTint,6));one.cylinder([-w/2,2.17,-d/2],[w/2,2.17,d/2],.021,.021,m.metal,8);one.cylinder([w/2,2.17,-d/2],[-w/2,2.17,d/2],.021,.021,m.metal,8);
    // Back sheet for alternate stalls, not a solid interior box.
    if(rec.category==='F'||rec.id==='HQ')one.box(0,1.15,-d/2,w,1.87,.015,mat('#eeeee5',6,.94));});
   details.scope(M.compose(pos[0],0,pos[1],yaw),()=>{if(rec.id==='F-10'){table(details,-1.5,.40,2.28,.73);table(details,1.5,.40,2.28,.73);details.scope(M.compose(-1.5,0,0),()=>goods(details,rec));chair(details,-2.15,-.53,0,'#65746c');details.box(-.75,.23,-.46,.54,.42,.40,mat('#af9270',5));}
    else{table(details,0,.40,Math.min(w-.45,2.28),.73);goods(details,rec);chair(details,-.65,-.53,0,'#65746c');details.box(.75,.23,-.46,.54,.42,.40,mat('#af9270',5));}if(rec.category==='T')details.sign(.56,1.5,-1.25,.95,.98,signFor[rec.id].menu,true);
   });
   signGeo.scope(M.compose(pos[0],0,pos[1],yaw),()=>{signGeo.sign(0,2.15,d/2+.03,Math.min(w-.09,2.87),.62,signFor[rec.id].banner);aframe(signGeo,-w/2+.20,d/2+.40,signFor[rec.id].menu,-.14);});
   // Counters and canopy uprights block walking; the front of the stall remains approachable.
   let front=[Math.sin(yaw),Math.cos(yaw)],side=[Math.cos(yaw),-Math.sin(yaw)];let tx=pos[0]+front[0]*.40,tz=pos[1]+front[1]*.40;addBoxCollider(tx,tz,Math.abs(side[0])*(w-.4)+Math.abs(front[0])*.8,Math.abs(side[1])*(w-.4)+Math.abs(front[1])*.8,rec.id);
   rec.approach=[pos[0]+front[0]*(d/2+3.1),pos[1]+front[1]*(d/2+3.1)];rec.marker=[pos[0]+front[0]*1.4,3.22,pos[1]+front[1]*1.4];markers.push(rec);
  }
 function wheel(geo,x,y,z,side=1,r=.37){geo.cylinder([x,y,z-.09],[x,y,z+.09],r,r,m.tire,22);geo.cylinder([x,y,z+side*.094],[x,y,z+side*.114],r*.55,r*.55,m.metal,20);for(let i=0;i<6;i++){let a=i/6*TAU;geo.cylinder([x+Math.cos(a)*r*.34,y+Math.sin(a)*r*.34,z+side*.115],[x+Math.cos(a)*r*.34,y+Math.sin(a)*r*.34,z+side*.12],r*.12,r*.12,m.dark,7);}}
 function truck(rec,index){let pos=rec.pos,yaw=rec.yaw,bodyColors=['#ede6d3','#c3a875','#eef0df','#657f79','#aa7761','#e2d8c3','#e0cf9e','#6c7a75'];let body=mat(bodyColors[index%8],0,.38,.23);let truckG=one;
   truckG.scope(M.compose(pos[0],0,pos[1],yaw),()=>{truckG.box(0,.46,0,3.85,.22,1.70,m.dark);truckG.box(.42,1.63,0,2.85,2.03,1.82,body);truckG.box(-1.41,1.20,0,1.06,1.37,1.80,body);truckG.box(-1.65,.90,0,.88,.38,1.90,body);truckG.box(-1.44,1.58,0,1.04,.74,1.80,body);truckG.box(-1.96,1.58,0,.035,.66,1.57,m.glass);truckG.box(-1.42,1.65,.91,.76,.54,.018,m.glass);truckG.box(-1.42,1.65,-.91,.76,.54,.018,m.glass);truckG.box(.46,1.79,.918,2.4,1.0,.012,m.dark);truckG.box(.46,1.72,.923,2.27,.81,.009,mat('#555e54',0,.7));truckG.box(.46,1.16,1.11,2.55,.07,.54,m.metal);truckG.box(.46,2.76,0,2.98,.14,1.92,body);
    for(let x of [-1.35,1.20])for(let z of [-.89,.89])wheel(truckG,x,.40,z,z<0?-1:1,.36);truckG.box(-1.98,.61,0,.10,.19,1.70,mat('#b3b8b3',0,.35,.55));for(let z of [-.61,.61])truckG.box(-2.04,.93,z,.034,.20,.37,mat('#eee8cf',0,.14,.3,.15));truckG.box(-2.05,.58,0,.034,.16,.28,mat('#decb71'));
    truckG.box(.26,2.91,-.17,.53,.17,.44,m.whiteMetal);truckG.cylinder([1.3,2.8,-.48],[1.3,3.0,-.48],.11,.11,m.metal,12);for(let z of [-1.06,1.06]){truckG.cylinder([-1.65,1.61,z*.83],[-1.65,1.62,z],.02,.02,m.dark,6);truckG.box(-1.64,1.64,z,.10,.19,.05,m.dark);}
    // Raised serving awning and supports.
    truckG.quad([-.9,2.56,.94],[-.9,2.30,2.03],[1.76,2.30,2.03],[1.76,2.56,.94],mat('#f6efdf',6),2,1);truckG.box(.43,2.22,2.02,2.7,.18,.02,mat(categoryColors.F,6));for(let x of [-.82,1.69])truckG.cylinder([x,1.71,.96],[x,2.3,1.95],.017,.017,m.metal,6);
   });details.scope(M.compose(pos[0],.38,pos[1],yaw),()=>goods(details,rec));signGeo.scope(M.compose(pos[0],0,pos[1],yaw),()=>{signGeo.sign(.42,2.67,.945,2.54,.48,signFor[rec.id].banner);aframe(signGeo,-.4,2.28,signFor[rec.id].menu,.1);});
   let f=[Math.sin(yaw),Math.cos(yaw)],s=[Math.cos(yaw),-Math.sin(yaw)];addBoxCollider(pos[0],pos[1],Math.abs(s[0])*4.03+Math.abs(f[0])*1.93,Math.abs(s[1])*4.03+Math.abs(f[1])*1.93,rec.id);rec.approach=[pos[0]+f[0]*3.3,pos[1]+f[1]*3.3];rec.marker=[pos[0]+f[0]*1.45,3.42,pos[1]+f[1]*1.45];markers.push(rec);
  }
 let ti=0;for(let rec of data.records){if(rec.kind==='tent')tent(rec);else if(rec.kind==='truck')truck(rec,ti++);}
 let hq=data.locations.find(r=>r.id==='HQ');hq.width=6.9;tent(hq);
 // Outdoor stage: the user's left/right correction takes precedence over the plan image.
 let os=data.locations.find(r=>r.id==='OUTSTAGE'),st=os.pos;
 one.box(st[0],.28,st[1],7.2,.56,1.8,m.wood);
 addBoxCollider(st[0],st[1],7.2,1.8,'屋外ステージ');
 // Four platforms across and two deep; seams keep all eight units visible.
 for(let x of [-1.8,0,1.8])details.box(st[0]+x,.563,st[1],.012,.009,1.8,m.dark);
 details.box(st[0],.563,st[1],7.2,.009,.012,m.dark);
 for(let s of [-1,1]){
  details.box(st[0]+s*4.05,.14,st[1]+.50,.72,.28,.72,m.base);
  details.cylinder([st[0]+s*3.9,.04,st[1]-.40],[st[0]+s*3.9,3.2,st[1]-.4],.033,.033,m.metal,7);
  details.box(st[0]+s*3.9,2.5,st[1]-.4,.48,.85,.35,m.black);
 }
 // The goal's advertising face stands toward the stage; its rear frame rests on the ground.
 const goalFront=st[1]-1.65,goalBack=st[1]-3.75;
 for(let s of [-1,1])details.cylinder([st[0]+s*4,.10,goalFront],[st[0]+s*4,.12,goalBack],.035,.035,m.metal,8);
 details.cylinder([st[0]-4,.10,goalFront],[st[0]+4,.10,goalFront],.035,.035,m.metal,8);
 for(let s of [-1,1])details.cylinder([st[0]+s*4,.10,goalFront],[st[0]+s*4,2.1,goalFront],.035,.035,m.metal,8);
 details.cylinder([st[0]-4,2.1,goalFront],[st[0]+4,2.1,goalFront],.035,.035,m.metal,8);
 details.cylinder([st[0]-4,.12,goalBack],[st[0]+4,.12,goalBack],.035,.035,m.metal,8);
 details.quad([st[0]-4,.12,goalBack],[st[0]-4,.10,goalFront],[st[0]+4,.10,goalFront],[st[0]+4,.12,goalBack],mat('#a7b0a6',11,.75),6,2);
 const stageAd=atlas.add('stage-k-estate',(c,s)=>{c.fillStyle='#f7f7f2';c.fillRect(0,0,s,s);c.fillStyle='#9e3235';c.fillRect(0,0,s,92);c.fillStyle='#fff';c.textAlign='center';c.font='700 24px sans-serif';c.fillText('SHONAN REAL ESTATE',s/2,55);c.fillStyle='#24516b';c.font='700 69px sans-serif';c.fillText('K ESTATE',s/2,255);c.fillStyle='#5c7989';c.font='600 24px sans-serif';c.fillText('K エステート',s/2,315);});
 for(let i=-1;i<=1;i++){let x=st[0]+i*2.52,w=2.42;signGeo.quad([x-w/2,2.02,goalFront+.06],[x-w/2,.13,goalFront+.06],[x+w/2,.13,goalFront+.06],[x+w/2,2.02,goalFront+.06],mat('#ffffff',stageAd,.9,0,.06));}
 // The 55-inch monitor and its desks are to the audience's right.
 const monitorX=st[0]+5.15,monitorZ=st[1]+2.6;
 details.box(monitorX,1.5,monitorZ,1.26,.73,.12,m.black);
 details.box(monitorX,1.5,monitorZ+.07,1.22,.69,.025,mat('#303c3d',0,.32,.08));
 details.cylinder([monitorX,.08,monitorZ],[monitorX,1.13,monitorZ],.055,.055,m.metal,8);
 details.box(monitorX,.06,monitorZ,.62,.12,.47,m.dark);
 for(let z of [.20,1.20])table(details,st[0]+5.5,st[1]+z,1.32,.63,0);
 details.box(st[0]+5.5,.85,st[1]+1.2,.56,.18,.39,m.dark);
 for(let z of [.20,1.20])chair(details,st[0]+5.5,st[1]+z+1.0,0,'#4a5558');
 details.cylinder([st[0]+6.45,.37,st[1]-1.5],[st[0]+6.82,.37,st[1]-1.5],.23,.23,m.dark,12);
 addBoxCollider(monitorX,monitorZ,1.3,.5,'大型モニター');
 // The pop-up tent and equipment are to the audience's left.
 const sideTent=[st[0]-5.8,st[1]+.4];
 details.scope(M.compose(sideTent[0],0,sideTent[1],0),()=>{
  tentRoof(details,3,2.8,m.fabric);
  for(let x of [-1.45,1.45])for(let z of [-1.3,1.3])details.cylinder([x,.04,z],[x,2.15,z],.025,.025,m.metal,7);
 });
 table(details,sideTent[0]+.35,sideTent[1]+.45,1.55,.7,0);
 for(let i=0;i<15;i++)details.box(sideTent[0]-1+(i%5)*.45,.20+Math.floor(i/5)*.40,sideTent[1]-.7,.41,.38,.48,m.wood);
 addBoxCollider(sideTent[0],sideTent[1],3,2.8,'屋外ステージのポップアップテント');
 details.cylinder([st[0],.6,st[1]+.1],[st[0],1.9,st[1]+.1],.018,.018,m.black,7);
 details.cylinder([st[0],1.9,st[1]+.1],[st[0]+.36,2.08,st[1]+.22],.018,.018,m.black,7);
 signGeo.sign(st[0],.34,st[1]+.914,6.75,.5,signFor.OUTSTAGE.banner);
 os.approach=[st[0],st[1]+3.2];os.marker=[st[0],2.1,st[1]];markers.push(os);
 // Direction / information board at the south end of the field.
 for(let rec of data.locations.filter(r=>['MEET','EAT2','WC'].includes(r.id))){rec.approach=rec.pos;rec.marker=[rec.pos[0],2.5,rec.pos[1]];markers.push(rec);if(rec.id==='WC'){signGeo.scope(M.compose(rec.pos[0],0,rec.pos[1],0),()=>{signGeo.sign(0,2.4,0,2.2,.53,signFor.WC.banner);});}}
 progress(.45,'木々・遊具・モビリティ走路を作っています');
 // Mobility trial loop is registered to the northern drawing, rather than laid over booth space.
 const controlPx=[[192,116],[225,94],[306,91],[391,108],[436,132],[443,164],[423,178],[350,179],[294,162],[252,141],[209,143]];
 function catmull(points,steps=12){const out=[];for(let k=0;k<points.length;k++){let a=points[(k-1+points.length)%points.length],b=points[k],c=points[(k+1)%points.length],d=points[(k+2)%points.length];for(let j=0;j<steps;j++){let t=j/steps,t2=t*t,t3=t2*t;out.push([0,1].map(i=>.5*((2*b[i])+(-a[i]+c[i])*t+(2*a[i]-5*b[i]+4*c[i]-d[i])*t2+(-a[i]+3*b[i]-3*c[i]+d[i])*t3)));}}return out;}
 const track=catmull(controlPx.map(q=>p(...q)),16);let trackLength=0,trackDistances=[0];
 // A continuous two-metre ribbon uses shared joins so corners have no triangular gaps.
 const trackNormals=track.map((q,i)=>{let a=track[(i-1+track.length)%track.length],b=track[(i+1)%track.length],dx=b[0]-a[0],dz=b[1]-a[1],l=Math.hypot(dx,dz);return[-dz/l,dx/l];});
 for(let i=0;i<track.length;i++){let j=(i+1)%track.length,a=track[i],b=track[j],na=trackNormals[i],nb=trackNormals[j],l=Math.hypot(b[0]-a[0],b[1]-a[1]);trackLength+=l;trackDistances.push(trackLength);
 one.quad([a[0]-na[0],.035,a[1]-na[1]],[a[0]+na[0],.035,a[1]+na[1]],[b[0]+nb[0],.035,b[1]+nb[1]],[b[0]-nb[0],.035,b[1]-nb[1]],mat('#bba990',1,.98),2,l);
 if(i%8<4)for(let side of [-1,1])line(details,[a[0]+na[0]*.95*side,a[1]+na[1]*.95*side],[b[0]+nb[0]*.95*side,b[1]+nb[1]*.95*side],.085,mat('#f3e8d0'),.043);
 }
 const restricted=catmull([[171,90],[281,77],[395,95],[452,128],[458,179],[436,190],[330,190],[281,174],[245,151],[176,150]].map(q=>p(...q)),5);
 function rail(a,b,height=.65,wood=false,net=false){let len=Math.hypot(b[0]-a[0],b[1]-a[1]),n=Math.max(1,Math.ceil(len/2.2));let material=wood?mat('#a48d66',5):mat('#dedfd4',0,.45,.35);for(let i=0;i<=n;i++){let x=a[0]+(b[0]-a[0])*i/n,z=a[1]+(b[1]-a[1])*i/n;details.cylinder([x,.05,z],[x,height+.05,z],wood?.045:.025,wood?.042:.025,material,7);if(!wood)details.box(x,.035,z,.28,.07,.34,m.base);}for(let h of [height*.40,height])details.cylinder([a[0],h,a[1]],[b[0],h,b[1]],wood?.036:.021,wood?.036:.021,material,7);if(net)details.quad([a[0],.15,a[1]],[a[0],height,a[1]],[b[0],height,b[1]],[b[0],.15,b[1]],mat('#a2aa9a',11,.82),len/1.1,height/1.1);}
 for(let i=0;i<restricted.length;i++)rail(restricted[i],restricted[(i+1)%restricted.length],.65);
 const mob=data.locations.find(r=>r.id==='MOBILITY');mob.approach=[mob.pos[0]-2,mob.pos[1]+2.1];mob.marker=[mob.pos[0],2.8,mob.pos[1]];markers.push(mob);details.scope(M.compose(mob.pos[0],0,mob.pos[1],0),()=>{tentRoof(details,3,2.7,mat('#f1e5cc',6));for(let x of [-1.45,1.45])for(let z of [-1.30,1.30])details.cylinder([x,.05,z],[x,2.2,z],.026,.026,m.metal,7);});signGeo.sign(mob.pos[0],2.1,mob.pos[1]+1.37,2.85,.65,signFor.MOBILITY.banner);aframe(signGeo,mob.pos[0]-.2,mob.pos[1]+.3,warningSign,-.3);
 function sampleTrack(distance){let d=((distance%trackLength)+trackLength)%trackLength,idx=0;while(idx<track.length-1&&trackDistances[idx+1]<d)idx++;let a=track[idx],b=track[(idx+1)%track.length],f=(d-trackDistances[idx])/(trackDistances[idx+1]-trackDistances[idx]);return{x:a[0]+(b[0]-a[0])*f,z:a[1]+(b[1]-a[1])*f,yaw:Math.atan2(b[0]-a[0],b[1]-a[1])};}
  // Emobi reference: one front wheel, shaped front shield, open sides and a rear bench.
  // The body colour is a single provisional colour, as confirmed by the user.
  const carGeo=new Geometry(),trikeBody=mat('#d5d8d1',0,.39,.18),trikeGlass=mat('#91a7a6',0,.21,.55);
  carGeo.box(0,.46,-.20,1.22,.20,2.30,m.dark);
  carGeo.box(0,.84,-.94,1.24,.65,.72,trikeBody);
  carGeo.box(0,1.02,-.74,1.12,.25,.70,mat('#465052',0,.75));
  carGeo.box(0,.82,.22,1.23,.16,1.18,trikeBody);
  carGeo.sphere(0,.87,.95,.68,.61,.25,trikeBody,18,10);
  // The front glass turns toward the cabin at both sides and leans back at the top.
  const glassXs=Array.from({length:17},(_,i)=>(i-8)*.07),glassRows=Array.from({length:9},(_,i)=>i/8);
  const glassPoint=(x,t)=>{let side=Math.abs(x)/.56;return[x,1.22+t*(.69-.10*side*side),1.17-.56*t-.13*side*side];};
  const glassNormal=(x,t)=>{let dy=-.20*t*x/(.56*.56),dz=-.26*x/(.56*.56),rise=.69-.10*(x/.56)**2;
   let n=[dy*(-.56)-dz*rise,.56,rise],length=Math.hypot(...n);return n.map(v=>v/length);};
  for(let row=0;row<glassRows.length-1;row++)for(let col=0;col<glassXs.length-1;col++){
   let x0=glassXs[col],x1=glassXs[col+1],t0=glassRows[row],t1=glassRows[row+1];
   let a=glassPoint(x0,t0),b=glassPoint(x0,t1),c=glassPoint(x1,t1),d=glassPoint(x1,t0);
   let na=glassNormal(x0,t0),nb=glassNormal(x0,t1),nc=glassNormal(x1,t1),nd=glassNormal(x1,t0);
   carGeo.tri(b,a,d,trikeGlass,[[0,1],[0,0],[1,0]],[nb,na,nd]);
   carGeo.tri(b,d,c,trikeGlass,[[0,1],[1,0],[1,1]],[nb,nd,nc]);
  }
  const trikeFrame=mat('#252c2d',0,.68,.12);
  for(const t of [0,1])for(let col=0;col<glassXs.length-1;col++)
   carGeo.cylinder(glassPoint(glassXs[col],t),glassPoint(glassXs[col+1],t),.021,.021,trikeFrame,7);
  for(const x of [-.56,.56])for(let row=0;row<glassRows.length-1;row++)
   carGeo.cylinder(glassPoint(x,glassRows[row]),glassPoint(x,glassRows[row+1]),.024,.024,trikeFrame,7);
  // A shallow arch follows the top of the glass and leaves the cabin sides open.
  const roofPoint=(x,z)=>{let side=Math.abs(x)/.56;return[x,1.91-.10*side*side-.03*Math.max(0,-z),z-.13*side*side];};
  for(let col=0;col<glassXs.length-1;col++){
   let x0=glassXs[col],x1=glassXs[col+1];
   carGeo.quad(roofPoint(x0,.61),roofPoint(x0,-1.12),roofPoint(x1,-1.12),roofPoint(x1,.61),trikeBody);
   carGeo.cylinder(roofPoint(x0,-1.12),roofPoint(x1,-1.12),.018,.018,trikeFrame,7);
  }
  for(const x of [-.56,.56]){
   carGeo.cylinder(roofPoint(x,.61),roofPoint(x,-1.12),.027,.027,trikeFrame,8);
   carGeo.cylinder([x,.58,-1.07],roofPoint(x,-1.12),.026,.026,m.metal,8);
  }
  // Exposed cabin sides and low running boards retain the doorless outline.
  for(const x of [-.65,.65]){
   carGeo.box(x,.55,-.05,.14,.12,1.65,trikeBody);
   carGeo.box(x,1.14,-1.00,.07,.48,.07,m.dark);
   carGeo.box(x,1.08,.80,.08,.54,.08,m.dark);
  }
  carGeo.box(0,1.15,-.59,.96,.20,.48,mat('#333b3c',0,.75));
  carGeo.box(0,1.03,.44,.77,.09,.36,m.dark);
  carGeo.sphere(0,.99,1.19,.15,.15,.065,m.dark,12,8);
  for(const x of [-.42,.42])carGeo.box(x,1.02,1.17,.29,.07,.035,mat('#f0ebd9',0,.35,.1,.2));
  for(const x of [-.55,.55])carGeo.scope(M.compose(x,.34,-1.02,Math.PI/2),()=>wheel(carGeo,0,0,0,x>0?1:-1,.34));
  carGeo.scope(M.compose(0,.34,1.20,Math.PI/2),()=>wheel(carGeo,0,0,0,1,.34));
  carGeo.cylinder([-.40,1.23,.72],[.40,1.23,.72],.025,.025,m.dark,9);
  for(const x of [-.69,.69]){
   carGeo.cylinder([x,1.33,.8],[x*1.13,1.37,1.00],.02,.02,m.dark,7);
   carGeo.box(x*1.13,1.39,1.02,.19,.11,.055,m.dark);
  }
  const vehicleSign=atlas.banner('DEMO','電動トライク','車体色は仮表示','#53605b');
  carGeo.scope(M.compose(.69,0,-.65,Math.PI/2),()=>carGeo.sign(0,.92,0,1.30,.30,vehicleSign));
 // Goat enclosure, kept in the north-west source zone.
 const goatRec=data.records.find(r=>r.kind==='goat'),gp=goatRec.pos,penW=6.5,penD=6.3;
 const pen=[[gp[0]-penW/2,gp[1]-penD/2],[gp[0]+penW/2,gp[1]-penD/2],[gp[0]+penW/2,gp[1]+penD/2],[gp[0]-penW/2,gp[1]+penD/2]];groundPolygon(pen,one,mat('#c7bb89',2,.97),2);for(let i=0;i<4;i++)rail(pen[i],pen[(i+1)%4],1.1,true);addBoxCollider(gp[0],gp[1],penW,penD,'ヤギ牧場');goatRec.approach=[gp[0],gp[1]+penD/2+3.1];goatRec.marker=[gp[0],2.5,gp[1]+penD/2];markers.push(goatRec);signGeo.sign(gp[0],2.72,gp[1]+penD/2+.06,3.4,.68,signFor[goatRec.id].banner);for(let s of [-1,1])details.cylinder([gp[0]+s*1.6,.05,gp[1]+penD/2],[gp[0]+s*1.6,3.09,gp[1]+penD/2],.05,.05,m.wood,7);details.box(gp[0]-2,.26,gp[1]-1.7,.90,.48,1.4,mat('#b6a166',2));details.cylinder([gp[0]+2,.05,gp[1]-2],[gp[0]+2,.28,gp[1]-2],.35,.38,mat('#6b8990',0,.3,.4),18);
 function goatGeometry(){let g=new Geometry(),fur=mat('#e9e4d5',0,.95),dark=mat('#776654',0,.92);g.sphere(0,.73,0,.30,.29,.54,fur,18,10);g.cylinder([0,.85,.30],[0,1.13,.52],.18,.14,fur,14);g.sphere(0,1.19,.61,.15,.18,.24,fur,16,10);g.sphere(0,1.10,.78,.12,.1,.10,dark,12,7);for(let s of [-1,1]){g.sphere(s*.22,1.26,.48,.19,.055,.085,fur,12,7);g.sphere(s*.137,1.22,.67,.015,.024,.025,m.black,8,6);g.cylinder([s*.09,1.31,.51],[s*.11,1.48,.38],.039,.021,dark,9);g.cylinder([s*.11,1.48,.38],[s*.10,1.55,.27],.021,.009,dark,8);for(let z of [-.32,.33]){g.cylinder([s*.19,.60,z],[s*.18,.12,z+.03],.046,.03,fur,9);g.box(s*.18,.07,z+.05,.09,.10,.14,dark);}}g.cylinder([0,.92,-.46],[0,1.06,-.62],.035,.016,fur,9);g.cylinder([0,1.08,.77],[0,.92,.72],.045,.01,fur,9);return g;}
 // Baseball experience area, without adding a fictitious vendor or major permanent stage.
 const baseball=data.records.find(r=>r.kind==='baseball');baseball.locationSource='配置ゾーニング 9月21日 Ver.6案（1ページ）';let bp=baseball.pos;baseball.approach=[bp[0]+9,bp[1]+2];baseball.marker=[bp[0]+8,2.8,bp[1]+1];markers.push(baseball);signGeo.sign(bp[0]+8,1.8,bp[1]+1,4.0,.82,signFor[baseball.id].banner);for(let s of [-1,1])details.cylinder([bp[0]+8+s*1.9,.08,bp[1]+1],[bp[0]+8+s*1.9,2.3,bp[1]+1],.035,.035,m.metal,7);
 for(let corner of [[-3,-2],[0,-5],[3,-2],[0,1]])details.box(bp[0]+corner[0],.052,bp[1]+corner[1],.34,.045,.34,mat('#e8e2c8'));details.cylinder([bp[0]+4,.08,bp[1]+2],[bp[0]+4.4,.10,bp[1]+3.05],.022,.045,mat('#b49566',5),9);details.sphere(bp[0]+4.25,.095,bp[1]+2.2,.074,.074,.074,mat('#e9e6dc'),12,8);

 // V6's western outdoor area. Equipment proportions refer to XB230733/734, not last year's location.
 const baseballNet=atlas.add('baseball-net',(c,s)=>{c.clearRect(0,0,s,s);c.strokeStyle='#becab2';c.lineWidth=4;c.beginPath();for(let i=0;i<=s;i+=64){c.moveTo(i,0);c.lineTo(i,s);c.moveTo(0,i);c.lineTo(s,i);}c.stroke();});
 const baseballFlag=atlas.add('baseball-flag',(c,s)=>{
  c.fillStyle='#672d3d';c.fillRect(0,0,s,s);
  for(let i=0;i<s;i+=3){c.fillStyle=i%6?'rgba(233,208,172,.035)':'rgba(0,0,0,.055)';c.fillRect(i,0,1,s);}
  c.strokeStyle='#d0b792';c.lineWidth=3;c.strokeRect(9,9,s-18,s-18);
  c.textAlign='center';c.fillStyle='#f4d990';c.font='700 27px "Yu Gothic",sans-serif';c.fillText('オール西鎌倉少年野球クラブ',s/2,64,475);
  c.fillStyle='#f5ead8';c.font='bold 170px Georgia,serif';c.fillText('N',s/2,305);
  c.fillStyle='#df6358';c.font='700 93px "Yu Mincho",serif';c.fillText('必',90,293);c.fillText('勝',424,293);
  c.strokeStyle='#d1d0ac';c.lineWidth=6;
  for(let side of [-1,1]){c.beginPath();c.moveTo(s/2,396);c.quadraticCurveTo(s/2+side*120,357,s/2+side*103,186);c.stroke();for(let i=0;i<10;i++){let t=i/9,x=s/2+side*(22+81*Math.sin(t*Math.PI/2)),y=380-t*181;c.save();c.translate(x,y);c.rotate(side*(.8+t*.4));c.fillStyle='#d4d4b5';c.beginPath();c.ellipse(0,0,5,16,0,0,Math.PI*2);c.fill();c.restore();}}
 });
 const baseballBoard=atlas.sign('baseball-board',baseball.name,'野球体験','#672d3d','T-5');
 // Keep all equipment in the approved area without changing navigation or shared random sequences.
 details.scope(M.compose(bp[0],0,bp[1]),()=>{
  const frame=mat('#38674d',0,.65,.15),net=mat('#476e48',baseballNet,.95),chalk=mat('#eeeadd',0,.97);
  function screen(x,z,w,h,yaw=0){details.scope(M.compose(x,0,z,yaw),()=>{
   for(let side of [-1,1]){let xx=side*w/2;details.cylinder([xx,.04,0],[xx,h,0],.029,.029,frame,8);details.cylinder([xx,.04,-.65],[xx,.04,.65],.025,.025,frame,8);details.cylinder([xx,.05,.60],[xx,1.0,0],.023,.023,frame,8);}
   details.cylinder([-w/2,h,0],[w/2,h,0],.025,.025,frame,8);
   details.quad([-w/2,.09,0],[-w/2,h-.02,0],[w/2,h-.02,0],[w/2,.09,0],net,w/.8,h/.8);
   details.cylinder([-w/2,.10,0],[w/2,.10,0],.045,.045,frame,8);
  });}
  screen(3.4,-1.3,4.8,3.3);screen(-4,-5.5,2.4,2.5,.35);screen(-9,-2,2.4,2.5,-.20);
  // The cloth carries a simplified drawing of the photographed flag, with no photo pixels.
  details.sign(2.4,2.22,-1.25,2.0,1.48,baseballFlag);
  for(let x of [1.46,3.34])details.cylinder([x,2.98,-1.24],[x,3.28,-1.30],.009,.009,mat('#d9d4b4'),6);
  table(details,.1,1.0,1.8,.72,0,false,false);chair(details,-1.15,1.05,.18,'#3e4647');chair(details,7.1,-.4,-.35,'#42484d');
  details.scope(M.compose(.15,.72,1.05,-.08),()=>details.sign(0,.48,0,.78,.83,baseballBoard,true));
  details.box(-.55,.89,.98,.38,.24,.3,mat('#778c87',0,.8));
  for(let i=0;i<5;i++)details.cylinder([-.70+i*.068,.99,.99],[-.70+i*.068,1.16,.99],.014,.014,mat(i%2?'#c6a264':'#edddb0'),6);
  function circle(x,z,r){for(let i=0;i<48;i++){let a=i/48*TAU,b=(i+1)/48*TAU,pt=(t,rad)=>[x+Math.cos(t)*rad,.043,z+Math.sin(t)*rad];details.quad(pt(a,r-.025),pt(b,r-.025),pt(b,r+.025),pt(a,r+.025),chalk);}}
  for(let [x,z,blue] of [[2,5.2,false],[7.8,5.5,false],[-3,2.5,true]]){circle(x,z,.66);let cm=mat(blue?'#388faf':'#e5cc57',0,.9);details.box(x,.035,z,.34,.06,.34,cm);details.cylinder([x,.06,z],[x,.62,z],.145,.022,cm,12);}
  for(let x of [3.9,4.65,5.4]){let bm=mat('#78b3ce',0,.78);details.cylinder([x,.04,3.8],[x,.40,3.8],.21,.16,bm,16);details.cylinder([x,.037,3.8],[x,.071,3.8],.225,.222,bm,16);}
  for(let x of [-1.9,6.0])details.box(x,.044,-3.7,.06,.015,7.2,chalk);
  details.box(2.05,.044,-7.3,7.9,.015,.06,chalk);details.box(2.05,.044,-.1,7.9,.015,.06,chalk);
  details.box(3.5,.044,7.1,11.5,.015,.06,chalk);
 });

 // Trees: branching trunks and alpha-tested leaf clusters, all locally generated.
  const overlapsGym=(x,z,r)=>x+r>ga[0]&&x-r<gb[0]&&z+r>ga[1]&&z-r<gb[1];
  function tree(px,pz,height=7,autumn=false){let q=p(px,pz),x=q[0],z=q[1],rr=rng(Math.round(px*721+pz*91));const profile=pz>=410&&pz<=420?({132:[6.8,.53,false],152:[6.3,.56,false],175:[7.6,.26,true],252:[7.8,.28,true]})[px]:null;if(profile)height=profile[0];let g=details;g.cylinder([x,0,z],[x+.12,height*.57,z-.10],.19,.08,m.bark,11);for(let j=0;j<6;j++){let a=j*TAU/6+rr(),start=[x,height*.34+rr()*.6,z],end=[x+Math.cos(a)*height*.27,height*(.62+rr()*.17),z+Math.sin(a)*height*.27];if(overlapsGym((start[0]+end[0])/2,(start[2]+end[2])/2,Math.max(Math.abs(start[0]-end[0]),Math.abs(start[2]-end[2]))/2+.08))continue;g.cylinder(start,end,.073,.026,m.bark,8);for(let k=0;k<3;k++){let e=[end[0]+(rr()-.5)*1.4,end[1]+rr()*1.05,end[2]+(rr()-.5)*1.4];if(!overlapsGym((end[0]+e[0])/2,(end[2]+e[2])/2,Math.max(Math.abs(end[0]-e[0]),Math.abs(end[2]-e[2]))/2+.03))g.cylinder(end,e,.029,.010,m.bark,7);}}
    for(let j=0;j<(profile?180:52);j++){let a=rr()*TAU,r=Math.sqrt(rr())*height*(profile?profile[1]:.38),cx=x+Math.cos(a)*r,cz=z+Math.sin(a)*r,cy=height*(profile?.57:.70)+rr()*height*(profile?.38:.25)-(r/height)*.8,s=height*(profile?.12+rr()*.09:.19+rr()*.13),yaw=rr()*TAU,mm=(profile?profile[2]:autumn)?m.autumn:m.leaf;if(overlapsGym(cx,cz,s*.71))continue;green.scope(M.compose(cx,cy,cz,yaw),()=>{green.quad([-s/2,-s/2,0],[-s/2,s/2,0],[s/2,s/2,0],[s/2,-s/2,0],mm);green.quad([-s/2,0,-s/2],[-s/2,0,s/2],[s/2,0,s/2],[s/2,0,-s/2],mm);});}trunks.push({x,z,r:.26});}
 const treesPx=[[143,54],[176,48],[207,47],[234,46],[270,45],[301,48],[366,63],[399,73],[431,85],[464,98],[496,116],[532,131],[561,151],[566,206],[566,240],[568,275],[581,361],[582,414],[581,521],[579,566],[568,627],[547,692],[509,719],[480,730],[432,738],[404,742],[371,748],[323,757],[282,759],[243,764],[205,769],[168,773],[130,775],[92,750],[83,712],[75,671],[53,584],[32,527],[38,382],[62,335],[68,159],[132,418],[152,418],[175,413],[252,412],[283,414],[321,415],[348,419],[381,417],[417,418],[420,396]];
 treesPx.forEach((q,i)=>tree(q[0],q[1],R(5.8,8.7),i%3!==0));
 // School playground apparatus along the northern edge, not in public circulation lanes.
 let pg=p(525,171);for(let k=0;k<6;k++){let x=pg[0]+k*1.5;details.cylinder([x,.03,pg[1]],[x,2.45,pg[1]],.033,.033,mat('#287b9c',0,.5,.35),8);details.cylinder([x,2.45,pg[1]],[x,2.45,pg[1]+1.1],.025,.025,m.metal,8);details.cylinder([x,.03,pg[1]+1.1],[x,2.45,pg[1]+1.1],.033,.033,mat('#287b9c'),8);}for(let z of [pg[1],pg[1]+1.1])details.cylinder([pg[0],2.45,z],[pg[0]+7.5,2.45,z],.03,.03,m.metal,8);
 let jg=p(514,238);for(let i=0;i<4;i++)for(let j=0;j<4;j++){let x=jg[0]+i*.7,z=jg[1]+j*.7;details.cylinder([x,.02,z],[x,2.1,z],.022,.022,mat('#287b9c'),7);for(let y=.7;y<2.2;y+=.7){if(i<3)details.cylinder([x,y,z],[x+.7,y,z],.02,.02,mat('#287b9c'),7);if(j<3)details.cylinder([x,y,z],[x,y,z+.7],.02,.02,mat('#287b9c'),7);}}addBoxCollider(jg[0]+1.05,jg[1]+1.05,2.3,2.3,'遊具');
 // Boundary fencing follows the drawing. Open spans remain at both approved gates.
 for(let i=0;i<campus.length;i++){let a=campus[i],b=campus[(i+1)%campus.length];if(i===6||i===15||i===16)continue;rail(a,b,1.55,false,true);}
  for(let id of ['GATE_MAIN','GATE_WEST']){
   let r=data.locations.find(a=>a.id===id),q=r.pos,yaw=id==='GATE_MAIN'?-Math.PI/4:.7;
   details.scope(M.compose(q[0],0,q[1],yaw),()=>{
    for(let s of [-1,1]){
     details.box(s*2.6,1,0,.52,2.0,.58,m.wall);
     details.box(s*2.6,2.03,0,.6,.08,.64,m.base);
     details.cylinder([s*2.75,.05,.25],[s*2.75,3.35,.25],.036,.036,m.metal,9);
    }
    if(id==='GATE_MAIN'){
     const gateMetal=mat('#586567',0,.54,.35),wall=mat('#aeb0a7',3,.96);
     for(const side of [-1,1]){
      details.box(side*4.4,.47,0,3.05,.94,.58,wall);
      details.box(side*4.4,.96,0,3.13,.08,.68,m.base);
      // Both leaves remain beside the posts so visitors can pass through the gate.
      for(let z=.24;z<=2.64;z+=.24)details.cylinder([side*2.45,.22,z],[side*2.45,1.52,z],.019,.019,gateMetal,6);
      for(const y of [.23,1.51])details.cylinder([side*2.45,y,.18],[side*2.45,y,2.72],.026,.026,gateMetal,6);
     }
    }
    details.sign(0,3.12,.25,5.7,.96,mainWelcome);
   });
   r.approach=id==='GATE_MAIN'?[49.0,75.0]:[-43,-38];r.marker=[q[0],3.75,q[1]];markers.push(r);
  }
  {let gate=data.locations.find(r=>r.id==='GATE_WEST');details.scope(M.compose(gate.pos[0],0,gate.pos[1],.7),()=>{details.box(0,.045,1.15,5.05,.09,3.75,mat('#b7b5a8',3,.96));for(const side of [-1,1]){details.box(side*3.24,.33,1.25,.52,.66,4.1,mat('#a3a59a',3,.98));details.box(side*3.24,.70,1.25,.61,.085,4.25,mat('#c7c9ba',3,.93));for(const z of [-.52,.55,1.62,2.69])details.box(side*3.24,.34,z,.54,.42,.023,mat('#898e83',3,.96));}});}
 // Banners and safety cones add scale without encoding unpublished operational rules.
  const bannerGeo=new Geometry();const flagTex=atlas.sign('flag','つながり\nフェスタ','＠にしかま\n2026','#366568','');bannerGeo.animate([0,0,0],9,()=>bannerGeo.quad([.05,2.8,0],[.05,1,0],[.62,1,0],[.62,2.8,0],mat('#fff',flagTex,.8)));
 const bannerInstances=[];for(let q of [[448,520],[440,611],[543,622],[468,407],[282,378],[130,128],[461,296]]){let pp=p(...q);details.cylinder([pp[0],.03,pp[1]],[pp[0],3.0,pp[1]],.016,.014,m.whiteMetal,8);details.box(pp[0],.055,pp[1],.48,.10,.40,mat('#dedfd6'));bannerInstances.push({matrix:M.compose(pp[0],0,pp[1],-.3),info:[R(0,6),0,0,0]});}
 for(let q of [[465,441],[459,446],[456,452],[458,463],[445,472],[552,651],[542,651],[178,166]]){let a=p(...q);details.box(a[0],.035,a[1],.32,.07,.32,mat('#b1543e'));details.cylinder([a[0],.06,a[1]],[a[0],.63,a[1]],.125,.022,mat('#c7793c'),10);details.cylinder([a[0],.32,a[1]],[a[0],.40,a[1]],.072,.061,mat('#e6ddc7'),10);}
 // Lattice transmission towers and suspended wires, identified on the plan.
 function tower(px,pz,h=25){let q=p(px,pz),sections=7;for(let i=0;i<sections;i++){let y0=i/sections*h,y1=(i+1)/sections*h,w0=2.4-(i/sections)*1.6,w1=2.4-((i+1)/sections)*1.6;for(let sx of [-1,1])for(let sz of [-1,1]){details.cylinder([q[0]+sx*w0,y0,q[1]+sz*w0],[q[0]+sx*w1,y1,q[1]+sz*w1],.06,.045,m.metal,6);details.cylinder([q[0]+sx*w0,y0,q[1]+sz*w0],[q[0]-sx*w1,y1,q[1]+sz*w1],.026,.026,m.metal,6);details.cylinder([q[0]+sx*w0,y0,q[1]+sz*w0],[q[0]+sx*w1,y1,q[1]-sz*w1],.026,.026,m.metal,6);}}for(let y of [h*.71,h*.87,h]){details.cylinder([q[0]-5.0,y,q[1]],[q[0]+5.0,y,q[1]],.065,.065,m.metal,7);for(let s of [-1,1]){details.cylinder([q[0]+s*.9,y-1.8,q[1]],[q[0]+s*5,y,q[1]],.04,.04,m.metal,6);details.cylinder([q[0]+s*4.7,y,q[1]],[q[0]+s*4.7,y-1.0,q[1]],.09,.09,mat('#9b9d84'),10);}}addBoxCollider(q[0],q[1],5,5,'鉄塔');return q;}
 let tw1=tower(322,56,26),tw2=tower(548,194,26);for(let dx of [-4.7,4.7])for(let h of [18.46,22.62,26]){let pts=[];for(let i=0;i<=36;i++){let t=i/36;pts.push([tw1[0]+(tw2[0]-tw1[0])*t+dx,h-1-3.4*Math.sin(t*Math.PI),tw1[1]+(tw2[1]-tw1[1])*t]);}details.tube(pts,.035,m.dark,5);}
 // Neighbourhood backdrop is approximate scenery, not mapped housing or street-level imagery.
 const distant=new Geometry();for(let i=0;i<27;i++){let a=i/27*TAU,rr=125+R(0,35),x=i<9?(i<4?-151:-83):i<18?84:-66+(i-18)*16.5,z=i<9?-42+i*17:i<18?-21+(i-9)*17:132,w=R(6,10),d=R(6,11),h=R(5.2,7.3);distant.scope(M.compose(0,FestaScenery.height(x,z),0),()=>{distant.box(x,h/2,z,w,h,d,mat(['#ddd8c9','#c4ccca','#e6e0d4','#b8b9ac'][i%4],3,.9));let roof=mat(['#676f70','#8a7163','#5d6966'][i%3],10,.7);distant.tri([x-w/2-.35,h,z-d/2-.35],[x+w/2+.35,h,z-d/2-.35],[x,h+2,z-d/2-.35],roof);distant.tri([x+w/2+.35,h,z+d/2+.35],[x-w/2-.35,h,z+d/2+.35],[x,h+2,z+d/2+.35],roof);distant.quad([x-w/2-.35,h,z-d/2-.35],[x-w/2-.35,h,z+d/2+.35],[x,h+2,z+d/2+.35],[x,h+2,z-d/2-.35],roof,3,3);distant.quad([x,h+2,z-d/2-.35],[x,h+2,z+d/2+.35],[x+w/2+.35,h,z+d/2+.35],[x+w/2+.35,h,z-d/2-.35],roof,3,3);for(let j=0;j<3;j++)distant.box(x+(j-1)*2.1,h*.62,z+d/2+.02,1.15,1.35,.03,m.glass);});}
 const childSign=atlas.banner('WC','にしかまくら子どもの家','当日のトイレ','#426861');
 FestaScenery.build({details,green,distant,signGeo,childSign,p,m,mat,M,rng,TAU,ga,gb,gc,gw,gd,gymRise});
 // No collisions against visitors: they are visual atmosphere, not event crowd predictions.
 function isWalkable(x,z,rad=.26){if(!polyInside(x,z,campus)||polyInside(x,z,restricted))return false;for(let c of colliders){let dx=Math.max(Math.abs(x-c.x)-c.w/2,0),dz=Math.max(Math.abs(z-c.z)-c.d/2,0);if(dx*dx+dz*dz<rad*rad)return false;}for(let t of trunks)if(Math.hypot(x-t.x,z-t.z)<rad+t.r)return false;return true;}
 function walkHeight(x,z){
  if(x>=ga[0]+.05&&x<=gb[0]-.15&&z>=ga[1]+.05&&z<=gb[1]-.05)return gymRise;
  if(x>=ga[0]-1.65&&x<ga[0]+.05&&westOpenings.some(([a,b])=>z>=p(gx1,a)[1]+.15&&z<=p(gx1,b)[1]-.15))return gymRise*clamp((x-ga[0]+1.65)/1.70,0,1);
  return 0;
 }
 function nearestWalkable(q,max=10){if(isWalkable(q[0],q[1],.31))return [...q];for(let r=.4;r<=max;r+=.35)for(let i=0;i<32;i++){let a=i*TAU/32,x=q[0]+Math.sin(a)*r,z=q[1]+Math.cos(a)*r;if(isWalkable(x,z,.31))return[x,z];}return null;}
 const gym=data.locations.find(r=>r.id==='GYM');gym.approach=[gc[0],ga[1]+18.8];gym.marker=[gc[0],3.1+gymRise,ga[1]+18.8];markers.push(gym);
 for(let r of markers){if(r.id==='WC')r.approach=[gc[0],gb[1]-5.0];r.approach=nearestWalkable(r.approach)||nearestWalkable(r.pos);}
 progress(.62,'来場者・ヤギ・試乗車の動きを準備しています');
 function human(variant=0){let g=new Geometry(),shirt=mat(['#7f9c9a','#d8c5ad','#a76250','#4c6670','#787c58','#b7b4a9','#655c73','#e3d1b1'][variant%8],6,.93),pants=mat(['#41494e','#746854','#4a575a','#485669'][variant%4],6,.91),skin=mat(['#cba584','#d8b69a','#bc9879','#d0ad8c'][variant%4],0,.78),hair=mat(['#383733','#4b4137','#77756e'][variant%3],0,.96);
  // Contoured torso plus separate collar, cuffs and shoes avoid faceless capsule bodies.
  let rings=[[.88,.19,.126],[.98,.19,.13],[1.16,.218,.148],[1.32,.243,.144],[1.385,.222,.127],[1.445,.075,.064]];for(let k=0;k<rings.length-1;k++)for(let j=0;j<20;j++){let a=j/20*TAU,b=(j+1)/20*TAU,lo=rings[k],hi=rings[k+1],pt=(r,t)=>[Math.cos(t)*r[1],r[0],Math.sin(t)*r[2]];g.quad(pt(lo,a),pt(hi,a),pt(hi,b),pt(lo,b),shirt,1,1);}g.cylinder([0,1.40,0],[0,1.49,0],.061,.062,skin,10);g.sphere(0,1.57,.012,.114,.142,.107,skin,16,11);g.sphere(0,1.575,-.009,.116,.145,.11,hair,20,10,0,1.26); // hair cap leaves the face forward (+Z)
  g.sphere(0,1.58,.127,.017,.032,.024,skin,10,7);for(let s of [-1,1]){g.sphere(s*.111,1.57,.008,.024,.042,.026,skin,9,7);g.sphere(s*.039,1.601,.111,.009,.004,.005,m.black,8,5);g.cylinder([s*.026,1.621,.104],[s*.053,1.621,.098],.004,.004,hair,5);g.animate([s*.23,1.37,0],s,()=>{g.sphere(s*.235,1.335,0,.082,.105,.085,shirt,12,9);g.sphere(s*.295,1.08,.035,.064,.073,.064,shirt,12,8);g.cylinder([s*.23,1.37,0],[s*.295,1.08,.035],.079,.064,shirt,12);g.cylinder([s*.295,1.08,.035],[s*.29,.90,.06],.063,.045,shirt,11);g.sphere(s*.287,.859,.065,.043,.067,.038,skin,11,7);});g.animate([s*.108,.88,0],s*2,()=>{g.cylinder([s*.105,.90,0],[s*.12,.49,.015],.098,.077,pants,12);g.cylinder([s*.12,.49,.015],[s*.12,.10,0],.077,.06,pants,11);g.sphere(s*.12,.077,.052,.075,.068,.146,mat('#383d3c',0,.75),12,7);g.box(s*.12,.034,.054,.142,.035,.25,mat('#c1beb1'));});}
  if(variant%3===0){g.sphere(0,1.70,-.006,.126,.045,.126,mat('#b4a481',6),14,8);g.box(0,1.676,.125,.18,.018,.14,mat('#b4a481',6));}if(variant%4===1){g.sphere(0,1.17,-.16,.16,.23,.10,mat('#73664e',6),13,9);for(let s of [-1,1])g.cylinder([s*.16,1.36,.04],[s*.12,1.03,.09],.017,.017,mat('#756b58'),7);}if(variant%4===2){g.cylinder([.29,.91,.06],[.32,.66,.06],.010,.010,mat('#aa9675'),7);g.box(.32,.57,.06,.19,.24,.22,mat('#d3c2a1',6));}return g;}

  function seatedHuman(variant){let g=human(variant),out=new Geometry();
  for(let i=0;i<g.used;i+=60){if(Math.abs(g.data[i+19])>1.5&&Math.abs(g.data[i+19])<3)continue;for(let j=0;j<3;j++){let k=i+j*20;let mm={color:Array.from(g.data.slice(k+8,k+11)),p:Array.from(g.data.slice(k+12,k+16)),ao:g.data[k+11]};out.vertex([g.data[k],g.data[k+1]-.40,g.data[k+2]],Array.from(g.data.slice(k+3,k+6)),Array.from(g.data.slice(k+6,k+8)),mm);}}
   let pants=mat(['#41494e','#746854','#4a575a','#485669'][variant%4],6,.9);for(let sign of [-1,1]){out.cylinder([sign*.105,.49,0],[sign*.12,.46,.35],.10,.080,pants,12);out.sphere(sign*.12,.46,.35,.078,.084,.085,pants,12,8);out.cylinder([sign*.12,.46,.35],[sign*.12,.105,.39],.078,.058,pants,12);out.sphere(sign*.12,.078,.45,.073,.06,.145,mat('#383d3c'),12,8);out.box(sign*.12,.035,.45,.14,.035,.25,mat('#b8b9ad'));}return out;
  }
  function childGeometry(variant){let g=new Geometry(),shirt=mat(['#dfb357','#72a0a2','#aa6357','#8c9a66'][variant%4],6,.92),pants=mat('#506277',6,.91),skin=mat('#d4ad8b',0,.77),hair=mat('#3d342e',0,.94);
   g.sphere(0,.83,0,.20,.30,.145,shirt,14,10);g.cylinder([0,1.04,0],[0,1.17,0],.065,.06,skin,10);g.sphere(0,1.34,0,.165,.19,.15,skin,16,11);g.sphere(0,1.40,-.015,.17,.145,.153,hair,16,9,0,1.35);
   for(const s of [-1,1]){g.sphere(s*.06,1.36,.141,.010,.008,.008,m.dark,8,5);g.animate([s*.19,1.04,0],s,()=>{g.cylinder([s*.19,1.02,0],[s*.27,.65,.025],.067,.045,shirt,10);g.sphere(s*.27,.62,.03,.048,.06,.044,skin,10,7);});g.animate([s*.09,.58,0],s*2,()=>{g.cylinder([s*.09,.58,0],[s*.11,.25,0],.079,.062,pants,10);g.cylinder([s*.11,.25,0],[s*.11,.09,.025],.060,.05,pants,10);g.sphere(s*.11,.055,.085,.072,.052,.115,m.dark,10,7);});}return g;
  }
  const actorGroups=Array.from({length:8},()=>[]),childGroups=Array.from({length:4},()=>[]),actorPlans=[];let count=0;
  function actor(x,z,yaw=0,walk=false,scale=1,path=null,type='visitor'){let idx=count++,child=type==='child',group=idx%(child?4:8),instance={matrix:M.compose(x,0,z,yaw,scale),info:[R(0,6.28),walk?1:0,0,0]},obj={x,z,yaw,scale,instance,walk,path,pathIndex:0,speed:R(.40,.64),group,type,index:idx};(child?childGroups:actorGroups)[group].push(instance);actorPlans.push(obj);}
 // Visitors waiting at known booths are behind the approach point so titles stay readable.
 for(let [ri,r] of markers.filter(r=>['F','S','T'].includes(r.category)&&r.approach).entries()){if(ri%2===0){let yaw=r.yaw||0,side=ri%3?-1:1,q=r.approach,x=q[0]-Math.sin(yaw)*1.05+Math.cos(yaw)*.95*side,z=q[1]-Math.cos(yaw)*1.05-Math.sin(yaw)*.95*side;if(isWalkable(x,z,.2))actor(x,z,Math.atan2(r.pos[0]-x,r.pos[1]-z),false,R(.88,1.04));}}
 // Clerks are static: avoid requiring route space behind every counter.
 for(let r of data.records.filter(r=>r.kind==='tent')){let yaw=r.yaw||0;let side=r.id==='F-10'?-1.5:0;actor(r.pos[0]+Math.cos(yaw)*side-Math.sin(yaw)*.52,r.pos[1]-Math.sin(yaw)*side-Math.cos(yaw)*.52,yaw,false,.93,null,'vendor');}
 const strollRoutes=[[[0,10],[2,9],[2,-11],[20,-12],[26,-12],[26,-2],[26,12],[16,12],[0,10]],[[27,47],[29,54],[29,63],[31,68],[31,75],[28,77],[28,70],[29,60],[27,47]],[[-41,13],[-13,13],[-12,-4],[-15,-17],[-33,-19],[-41,13]],[[19,18],[26,21],[28,32],[29,44],[27,47],[28,32],[26,21],[19,18]]];
  for(let k=0;k<36;k++){let route=strollRoutes[k%strollRoutes.length],segment=k%route.length,a=route[segment],b=route[(segment+1)%route.length],t=R(0,1),q=nearestWalkable([a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t],2);if(!q)continue;let child=k%3===0;actor(q[0],q[1],Math.atan2(b[0]-a[0],b[1]-a[1]),true,child?1:R(.88,1.05),route,child?'child':'visitor');actorPlans[actorPlans.length-1].pathIndex=(segment+1)%route.length;}
 for(let j=0;j<7;j++)actor(gc[0]+(j-3)*1.6,ga[1]+11.4+(j%2)*.6,0,true,.8,null,'performer');
 // A few stationary conversations give human scale without forcing hundreds of people.
 for(let q of [[7,11],[8,11.5],[24,-9],[25,-8.7],[-12,-23],[-13,-23.4],[-39,-44],[49,32],[50,33]])if(isWalkable(...q,.23))actor(q[0],q[1],R(0,TAU),false,R(.85,1.0));
 const meshes={};meshes.base=new Mesh(renderer,one,{name:'Architecture, ground and booths'});meshes.details=new Mesh(renderer,details,{name:'Furniture, windows and equipment'});meshes.foliage=new Mesh(renderer,green,{name:'Foliage',instances:[{matrix:M.identity(),info:[0,0,1,0]}]});meshes.roof=new Mesh(renderer,roofGeo,{name:'Gym roof'});meshes.signs=new Mesh(renderer,signGeo,{name:'Readable booth signs'});meshes.distant=new Mesh(renderer,distant,{name:'Approximate neighbourhood',shadow:false});meshes.flags=new Mesh(renderer,bannerGeo,{name:'Fabric banners',instances:bannerInstances});
 const seatedGroups=Array.from({length:4},()=>[]);let seatN=0;for(let i=0;i<seats.length;i++){if(i%4!==1&&!(seats[i].gym&&i%5===2))continue;let a=seats[i];seatedGroups[seatN++%4].push({matrix:M.compose(a.x,a.gym?gymRise:0,a.z,a.yaw,.94),info:[0,0,0,0]});}
 meshes.seated=seatedGroups.map((instances,i)=>new Mesh(renderer,seatedHuman(i),{name:'Seated visitors '+i,instances}));
 const carPose=sampleTrack(0);meshes.vehicle=new Mesh(renderer,carGeo,{name:'Generic mobility vehicle',instances:[{matrix:M.compose(carPose.x,0,carPose.z,carPose.yaw),info:[0,0,0,0]}],dynamic:true});
 const goatInstances=Array.from({length:4},(_,i)=>({matrix:M.compose(gp[0]+(i%2-.5)*2.0,0,gp[1]+(Math.floor(i/2)-.5)*2.2,i*1.8,i===3?.64:1),info:[i,0,0,0]}));meshes.goats=new Mesh(renderer,goatGeometry(),{name:'Goats',instances:goatInstances,dynamic:true});
  meshes.actors=actorGroups.map((instances,i)=>new Mesh(renderer,human(i),{name:'Visitors '+i,instances,dynamic:true}));
  meshes.children=childGroups.map((instances,i)=>new Mesh(renderer,childGeometry(i),{name:'Children '+i,instances,dynamic:true}));
 progress(.81,'看板と案内データを仕上げています');atlas.upload(renderer.gl,(matchMedia('(pointer:coarse)').matches||innerWidth<650)?256:512);renderer.atlas=atlas;
 let crowdAmount=70,lastActorUpdate=0,carState=carPose;const crowdOrder=actorPlans.filter(a=>a.type!=='vendor'&&a.type!=='performer');
 function setCrowd(n){crowdAmount=clamp(n,0,100);const allowed=Math.round(crowdOrder.length*crowdAmount/100);crowdOrder.forEach((a,i)=>a.hidden=i>=allowed);actorPlans.filter(a=>a.type==='vendor'||a.type==='performer').forEach(a=>a.hidden=n===0);meshes.seated.forEach(m=>m.visible=n>10);renderer.shadowDirty=true;}
 setCrowd(70);
  function update(time,dt){carState=sampleTrack(time*.88);meshes.vehicle.instances[0].matrix=M.compose(carState.x,0,carState.z,carState.yaw);meshes.vehicle.updateInstances();if(time-lastActorUpdate>.055){let elapsed=Math.min(.18,time-lastActorUpdate);lastActorUpdate=time;for(let a of actorPlans){if(a.walk&&a.path&&!a.hidden){let dest=a.path[a.pathIndex],dx=dest[0]-a.x,dz=dest[1]-a.z,dist=Math.hypot(dx,dz);if(dist<.35)a.pathIndex=(a.pathIndex+1)%a.path.length;else{let nx=a.x+dx/dist*a.speed*elapsed,nz=a.z+dz/dist*a.speed*elapsed;if(isWalkable(nx,nz,.19)){a.x=nx;a.z=nz;a.yaw=Math.atan2(dx,dz);}else a.pathIndex=(a.pathIndex+1)%a.path.length;}}let y=walkHeight(a.x,a.z),yaw=a.yaw;if(a.type==='performer'){yaw=Math.sin(time*.5+a.index*.3)*.12;y+=.04+Math.max(0,Math.sin(time*2.4+a.index*.4))*.07;}a.instance.matrix=M.compose(a.x,a.hidden?-100:y,a.z,yaw,a.scale);a.instance.info[1]=a.hidden?0:a.walk?(a.type==='performer'?.8:1):0;}meshes.actors.forEach(m=>m.updateInstances());meshes.children.forEach(m=>m.updateInstances());goatInstances.forEach((v,i)=>{let a=i*1.8+Math.sin(time*.1+i)*.3;v.matrix=M.compose(gp[0]+(i%2-.5)*2.0+Math.sin(time*.1+i)*.2,0,gp[1]+(Math.floor(i/2)-.5)*2.2,a,i===3?.64:1);});meshes.goats.updateInstances();}}
 progress(.90,'歩行できる経路を確認しています');
 return {data,markers,colliders,buildings,campus,field,restricted,track,trackLength,meshes,trunks,seats,atlas,categoryColors,isWalkable,walkHeight,nearestWalkable,update,setCrowd,p,getCar:()=>carState,polyInside,actorCount:actorPlans.length};
};
