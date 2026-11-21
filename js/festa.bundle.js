(()=>{var tu=0,cc=1,eu=2;var ms=1,nu=2,er=3,es=0,kn=1,ti=2,wi=0,nr=1,hc=2,uc=3,dc=4,iu=5;var gs=100,su=101,ru=102,au=103,ou=104,lu=200,cu=201,hu=202,uu=203,fc=204,pc=205,du=206,fu=207,pu=208,mu=209,gu=210,xu=211,_u=212,yu=213,vu=214,Va=0,Ga=1,Ha=2,Hs=3,Wa=4,Xa=5,qa=6,Ya=7,mc=0,Mu=1,bu=2,di=0,gc=1,xc=2,_c=3,jr=4,yc=5,vc=6,Mc=7;var bc=300,ns=301,xs=302,xo=303,_o=304,Qr=306,Ws=1e3,yi=1001,Za=1002,Tn=1003,Su=1004;var ta=1005;var vn=1006,yo=1007;var Ti=1008;var Xn=1009,Sc=1010,wc=1011,ir=1012,vo=1013,fi=1014,ni=1015,pi=1016,Mo=1017,bo=1018,sr=1020,Tc=35902,Ec=35899,Ac=1021,Cc=1022,ii=1023,vi=1026,is=1027,So=1028,wo=1029,ss=1030,To=1031;var Eo=1033,ea=33776,na=33777,ia=33778,sa=33779,Ao=35840,Co=35841,Ro=35842,Io=35843,Po=36196,Lo=37492,Do=37496,No=37488,Uo=37489,ra=37490,Fo=37491,Oo=37808,Bo=37809,ko=37810,zo=37811,Vo=37812,Go=37813,Ho=37814,Wo=37815,Xo=37816,qo=37817,Yo=37818,Zo=37819,Jo=37820,$o=37821,Ko=36492,jo=36494,Qo=36495,tl=36283,el=36284,aa=36285,nl=36286;var Ar=2300,Ja=2301,ka=2302,ec=2303,nc=2400,ic=2401,sc=2402;var wu=3200,Rc=3201;var il=0,Tu=1,ki="",Cn="srgb",Cr="srgb-linear",Rr="linear",sn="srgb";var za=7680;var Eu=519,Au=512,Cu=513,Ru=514,sl=515,Iu=516,Pu=517,rl=518,Lu=519,Ic=35044,al=35048;var oa="300 es",ui=2e3,Xs=2001;function nf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function sf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ir(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Du(){let i=Ir("canvas");return i.style.display="block",i}var Rh={},qs=null;function Pr(...i){let t="THREE."+i.shift();qs?qs("log",t,...i):console.log(t,...i)}function Nu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function be(...i){i=Nu(i);let t="THREE."+i.shift();if(qs)qs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Me(...i){i=Nu(i);let t="THREE."+i.shift();if(qs)qs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ds(...i){let t=i.join(" ");t in Rh||(Rh[t]=!0,be(...i))}function Uu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Fu={[Va]:Ga,[Ha]:qa,[Wa]:Ya,[Hs]:Xa,[Ga]:Va,[qa]:Ha,[Ya]:Wa,[Xa]:Hs},Mi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,l=s.length;r<l;r++)s[r].call(this,t);t.target=null}}},Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ll=Math.PI/180,$a=180/Math.PI;function Zi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pn[i&255]+Pn[i>>8&255]+Pn[i>>16&255]+Pn[i>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[e&63|128]+Pn[e>>8&255]+"-"+Pn[e>>16&255]+Pn[e>>24&255]+Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]).toLowerCase()}function Xe(i,t,e){return Math.max(t,Math.min(e,i))}function rf(i,t){return(i%t+t)%t}function Dl(i,t,e){return(1-e)*i+e*t}function _i(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function cn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Uc=class Uc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Xe(this.x,t.x,e.x),this.y=Xe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Xe(this.x,t,e),this.y=Xe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,l=this.y-t.y;return this.x=r*n-l*s+t.x,this.y=r*s+l*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Uc.prototype.isVector2=!0;var ze=Uc,bi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,l,o){let u=n[s+0],h=n[s+1],p=n[s+2],y=n[s+3],m=r[l+0],T=r[l+1],v=r[l+2],P=r[l+3];if(y!==P||u!==m||h!==T||p!==v){let A=u*m+h*T+p*v+y*P;A<0&&(m=-m,T=-T,v=-v,P=-P,A=-A);let d=1-o;if(A<.9995){let C=Math.acos(A),I=Math.sin(C);d=Math.sin(d*C)/I,o=Math.sin(o*C)/I,u=u*d+m*o,h=h*d+T*o,p=p*d+v*o,y=y*d+P*o}else{u=u*d+m*o,h=h*d+T*o,p=p*d+v*o,y=y*d+P*o;let C=1/Math.sqrt(u*u+h*h+p*p+y*y);u*=C,h*=C,p*=C,y*=C}}t[e]=u,t[e+1]=h,t[e+2]=p,t[e+3]=y}static multiplyQuaternionsFlat(t,e,n,s,r,l){let o=n[s],u=n[s+1],h=n[s+2],p=n[s+3],y=r[l],m=r[l+1],T=r[l+2],v=r[l+3];return t[e]=o*v+p*y+u*T-h*m,t[e+1]=u*v+p*m+h*y-o*T,t[e+2]=h*v+p*T+o*m-u*y,t[e+3]=p*v-o*y-u*m-h*T,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,l=t._order,o=Math.cos,u=Math.sin,h=o(n/2),p=o(s/2),y=o(r/2),m=u(n/2),T=u(s/2),v=u(r/2);switch(l){case"XYZ":this._x=m*p*y+h*T*v,this._y=h*T*y-m*p*v,this._z=h*p*v+m*T*y,this._w=h*p*y-m*T*v;break;case"YXZ":this._x=m*p*y+h*T*v,this._y=h*T*y-m*p*v,this._z=h*p*v-m*T*y,this._w=h*p*y+m*T*v;break;case"ZXY":this._x=m*p*y-h*T*v,this._y=h*T*y+m*p*v,this._z=h*p*v+m*T*y,this._w=h*p*y-m*T*v;break;case"ZYX":this._x=m*p*y-h*T*v,this._y=h*T*y+m*p*v,this._z=h*p*v-m*T*y,this._w=h*p*y+m*T*v;break;case"YZX":this._x=m*p*y+h*T*v,this._y=h*T*y+m*p*v,this._z=h*p*v-m*T*y,this._w=h*p*y-m*T*v;break;case"XZY":this._x=m*p*y-h*T*v,this._y=h*T*y-m*p*v,this._z=h*p*v+m*T*y,this._w=h*p*y+m*T*v;break;default:be("Quaternion: .setFromEuler() encountered an unknown order: "+l)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],l=e[1],o=e[5],u=e[9],h=e[2],p=e[6],y=e[10],m=n+o+y;if(m>0){let T=.5/Math.sqrt(m+1);this._w=.25/T,this._x=(p-u)*T,this._y=(r-h)*T,this._z=(l-s)*T}else if(n>o&&n>y){let T=2*Math.sqrt(1+n-o-y);this._w=(p-u)/T,this._x=.25*T,this._y=(s+l)/T,this._z=(r+h)/T}else if(o>y){let T=2*Math.sqrt(1+o-n-y);this._w=(r-h)/T,this._x=(s+l)/T,this._y=.25*T,this._z=(u+p)/T}else{let T=2*Math.sqrt(1+y-n-o);this._w=(l-s)/T,this._x=(r+h)/T,this._y=(u+p)/T,this._z=.25*T}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,l=t._w,o=e._x,u=e._y,h=e._z,p=e._w;return this._x=n*p+l*o+s*h-r*u,this._y=s*p+l*u+r*o-n*h,this._z=r*p+l*h+n*u-s*o,this._w=l*p-n*o-s*u-r*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,l=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,l=-l,o=-o);let u=1-e;if(o<.9995){let h=Math.acos(o),p=Math.sin(h);u=Math.sin(u*h)/p,e=Math.sin(e*h)/p,this._x=this._x*u+n*e,this._y=this._y*u+s*e,this._z=this._z*u+r*e,this._w=this._w*u+l*e,this._onChangeCallback()}else this._x=this._x*u+n*e,this._y=this._y*u+s*e,this._z=this._z*u+r*e,this._w=this._w*u+l*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Fc=class Fc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ih.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ih.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,l=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*l,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*l,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*l,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,l=t.y,o=t.z,u=t.w,h=2*(l*s-o*n),p=2*(o*e-r*s),y=2*(r*n-l*e);return this.x=e+u*h+l*y-o*p,this.y=n+u*p+o*h-r*y,this.z=s+u*y+r*p-l*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Xe(this.x,t.x,e.x),this.y=Xe(this.y,t.y,e.y),this.z=Xe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Xe(this.x,t,e),this.y=Xe(this.y,t,e),this.z=Xe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,l=e.x,o=e.y,u=e.z;return this.x=s*u-r*o,this.y=r*l-n*u,this.z=n*o-s*l,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Nl.copy(this).projectOnVector(t),this.sub(Nl)}reflect(t){return this.sub(Nl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Fc.prototype.isVector3=!0;var ot=Fc,Nl=new ot,Ih=new bi,Oc=class Oc{constructor(t,e,n,s,r,l,o,u,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,l,o,u,h)}set(t,e,n,s,r,l,o,u,h){let p=this.elements;return p[0]=t,p[1]=s,p[2]=o,p[3]=e,p[4]=r,p[5]=u,p[6]=n,p[7]=l,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,l=n[0],o=n[3],u=n[6],h=n[1],p=n[4],y=n[7],m=n[2],T=n[5],v=n[8],P=s[0],A=s[3],d=s[6],C=s[1],I=s[4],g=s[7],R=s[2],E=s[5],F=s[8];return r[0]=l*P+o*C+u*R,r[3]=l*A+o*I+u*E,r[6]=l*d+o*g+u*F,r[1]=h*P+p*C+y*R,r[4]=h*A+p*I+y*E,r[7]=h*d+p*g+y*F,r[2]=m*P+T*C+v*R,r[5]=m*A+T*I+v*E,r[8]=m*d+T*g+v*F,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],l=t[4],o=t[5],u=t[6],h=t[7],p=t[8];return e*l*p-e*o*h-n*r*p+n*o*u+s*r*h-s*l*u}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],l=t[4],o=t[5],u=t[6],h=t[7],p=t[8],y=p*l-o*h,m=o*u-p*r,T=h*r-l*u,v=e*y+n*m+s*T;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let P=1/v;return t[0]=y*P,t[1]=(s*h-p*n)*P,t[2]=(o*n-s*l)*P,t[3]=m*P,t[4]=(p*e-s*u)*P,t[5]=(s*r-o*e)*P,t[6]=T*P,t[7]=(n*u-h*e)*P,t[8]=(l*e-n*r)*P,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,l,o){let u=Math.cos(r),h=Math.sin(r);return this.set(n*u,n*h,-n*(u*l+h*o)+l+t,-s*h,s*u,-s*(-h*l+u*o)+o+e,0,0,1),this}scale(t,e){return ds("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ul.makeScale(t,e)),this}rotate(t){return ds("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ul.makeRotation(-t)),this}translate(t,e){return ds("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ul.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Oc.prototype.isMatrix3=!0;var Ce=Oc,Ul=new Ce,Ph=new Ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lh=new Ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function af(){let i={enabled:!0,workingColorSpace:Cr,spaces:{},convert:function(s,r,l){return this.enabled===!1||r===l||!r||!l||(this.spaces[r].transfer===sn&&(s.r=Oi(s.r),s.g=Oi(s.g),s.b=Oi(s.b)),this.spaces[r].primaries!==this.spaces[l].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===sn&&(s.r=Gs(s.r),s.g=Gs(s.g),s.b=Gs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ki?Rr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,l){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ds("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ds("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Cr]:{primaries:t,whitePoint:n,transfer:Rr,toXYZ:Ph,fromXYZ:Lh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:t,whitePoint:n,transfer:sn,toXYZ:Ph,fromXYZ:Lh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}}),i}var We=af();function Oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Cs,Ka=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Cs===void 0&&(Cs=Ir("canvas")),Cs.width=t.width,Cs.height=t.height;let s=Cs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Cs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ir("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let l=0;l<r.length;l++)r[l]=Oi(r[l]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Oi(e[n]/255)*255):e[n]=Oi(e[n]);return{data:e,width:t.width,height:t.height}}else return be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},of=0,Ys=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=Zi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let l=0,o=s.length;l<o;l++)s[l].isDataTexture?r.push(Fl(s[l].image)):r.push(Fl(s[l]))}else r=Fl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Fl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ka.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(be("Texture: Unable to serialize Texture."),{})}var lf=0,Ol=new ot,Hn=class i extends Mi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=yi,s=yi,r=vn,l=Ti,o=ii,u=Xn,h=i.DEFAULT_ANISOTROPY,p=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=Zi(),this.name="",this.source=new Ys(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=l,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=u,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ol).x}get height(){return this.source.getSize(Ol).y}get depth(){return this.source.getSize(Ol).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){be(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){be(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ws:t.x=t.x-Math.floor(t.x);break;case yi:t.x=t.x<0?0:1;break;case Za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ws:t.y=t.y-Math.floor(t.y);break;case yi:t.y=t.y<0?0:1;break;case Za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=bc;Hn.DEFAULT_ANISOTROPY=1;var Bc=class Bc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,l=t.elements;return this.x=l[0]*e+l[4]*n+l[8]*s+l[12]*r,this.y=l[1]*e+l[5]*n+l[9]*s+l[13]*r,this.z=l[2]*e+l[6]*n+l[10]*s+l[14]*r,this.w=l[3]*e+l[7]*n+l[11]*s+l[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,u=t.elements,h=u[0],p=u[4],y=u[8],m=u[1],T=u[5],v=u[9],P=u[2],A=u[6],d=u[10];if(Math.abs(p-m)<.01&&Math.abs(y-P)<.01&&Math.abs(v-A)<.01){if(Math.abs(p+m)<.1&&Math.abs(y+P)<.1&&Math.abs(v+A)<.1&&Math.abs(h+T+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let I=(h+1)/2,g=(T+1)/2,R=(d+1)/2,E=(p+m)/4,F=(y+P)/4,x=(v+A)/4;return I>g&&I>R?I<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(I),s=E/n,r=F/n):g>R?g<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(g),n=E/s,r=x/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=F/r,s=x/r),this.set(n,s,r,e),this}let C=Math.sqrt((A-v)*(A-v)+(y-P)*(y-P)+(m-p)*(m-p));return Math.abs(C)<.001&&(C=1),this.x=(A-v)/C,this.y=(y-P)/C,this.z=(m-p)/C,this.w=Math.acos((h+T+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Xe(this.x,t.x,e.x),this.y=Xe(this.y,t.y,e.y),this.z=Xe(this.z,t.z,e.z),this.w=Xe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Xe(this.x,t,e),this.y=Xe(this.y,t,e),this.z=Xe(this.z,t,e),this.w=Xe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Bc.prototype.isVector4=!0;var dn=Bc,ja=class extends Mi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new dn(0,0,t,e),this.scissorTest=!1,this.viewport=new dn(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Hn(s),l=n.count;for(let o=0;o<l;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:vn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ys(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wn=class extends ja{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},fs=class extends Hn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qa=class extends Hn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var go=class go{constructor(t,e,n,s,r,l,o,u,h,p,y,m,T,v,P,A){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,l,o,u,h,p,y,m,T,v,P,A)}set(t,e,n,s,r,l,o,u,h,p,y,m,T,v,P,A){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=l,d[9]=o,d[13]=u,d[2]=h,d[6]=p,d[10]=y,d[14]=m,d[3]=T,d[7]=v,d[11]=P,d[15]=A,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new go().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Rs.setFromMatrixColumn(t,0).length(),r=1/Rs.setFromMatrixColumn(t,1).length(),l=1/Rs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*l,e[9]=n[9]*l,e[10]=n[10]*l,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,l=Math.cos(n),o=Math.sin(n),u=Math.cos(s),h=Math.sin(s),p=Math.cos(r),y=Math.sin(r);if(t.order==="XYZ"){let m=l*p,T=l*y,v=o*p,P=o*y;e[0]=u*p,e[4]=-u*y,e[8]=h,e[1]=T+v*h,e[5]=m-P*h,e[9]=-o*u,e[2]=P-m*h,e[6]=v+T*h,e[10]=l*u}else if(t.order==="YXZ"){let m=u*p,T=u*y,v=h*p,P=h*y;e[0]=m+P*o,e[4]=v*o-T,e[8]=l*h,e[1]=l*y,e[5]=l*p,e[9]=-o,e[2]=T*o-v,e[6]=P+m*o,e[10]=l*u}else if(t.order==="ZXY"){let m=u*p,T=u*y,v=h*p,P=h*y;e[0]=m-P*o,e[4]=-l*y,e[8]=v+T*o,e[1]=T+v*o,e[5]=l*p,e[9]=P-m*o,e[2]=-l*h,e[6]=o,e[10]=l*u}else if(t.order==="ZYX"){let m=l*p,T=l*y,v=o*p,P=o*y;e[0]=u*p,e[4]=v*h-T,e[8]=m*h+P,e[1]=u*y,e[5]=P*h+m,e[9]=T*h-v,e[2]=-h,e[6]=o*u,e[10]=l*u}else if(t.order==="YZX"){let m=l*u,T=l*h,v=o*u,P=o*h;e[0]=u*p,e[4]=P-m*y,e[8]=v*y+T,e[1]=y,e[5]=l*p,e[9]=-o*p,e[2]=-h*p,e[6]=T*y+v,e[10]=m-P*y}else if(t.order==="XZY"){let m=l*u,T=l*h,v=o*u,P=o*h;e[0]=u*p,e[4]=-y,e[8]=h*p,e[1]=m*y+P,e[5]=l*p,e[9]=T*y-v,e[2]=v*y-T,e[6]=o*p,e[10]=P*y+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cf,t,hf)}lookAt(t,e,n){let s=this.elements;return Zn.subVectors(t,e),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Gi.crossVectors(n,Zn),Gi.lengthSq()===0&&(Math.abs(n.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Gi.crossVectors(n,Zn)),Gi.normalize(),ya.crossVectors(Zn,Gi),s[0]=Gi.x,s[4]=ya.x,s[8]=Zn.x,s[1]=Gi.y,s[5]=ya.y,s[9]=Zn.y,s[2]=Gi.z,s[6]=ya.z,s[10]=Zn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,l=n[0],o=n[4],u=n[8],h=n[12],p=n[1],y=n[5],m=n[9],T=n[13],v=n[2],P=n[6],A=n[10],d=n[14],C=n[3],I=n[7],g=n[11],R=n[15],E=s[0],F=s[4],x=s[8],U=s[12],G=s[1],X=s[5],b=s[9],Y=s[13],W=s[2],q=s[6],lt=s[10],ht=s[14],Mt=s[3],Z=s[7],_=s[11],bt=s[15];return r[0]=l*E+o*G+u*W+h*Mt,r[4]=l*F+o*X+u*q+h*Z,r[8]=l*x+o*b+u*lt+h*_,r[12]=l*U+o*Y+u*ht+h*bt,r[1]=p*E+y*G+m*W+T*Mt,r[5]=p*F+y*X+m*q+T*Z,r[9]=p*x+y*b+m*lt+T*_,r[13]=p*U+y*Y+m*ht+T*bt,r[2]=v*E+P*G+A*W+d*Mt,r[6]=v*F+P*X+A*q+d*Z,r[10]=v*x+P*b+A*lt+d*_,r[14]=v*U+P*Y+A*ht+d*bt,r[3]=C*E+I*G+g*W+R*Mt,r[7]=C*F+I*X+g*q+R*Z,r[11]=C*x+I*b+g*lt+R*_,r[15]=C*U+I*Y+g*ht+R*bt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],l=t[1],o=t[5],u=t[9],h=t[13],p=t[2],y=t[6],m=t[10],T=t[14],v=t[3],P=t[7],A=t[11],d=t[15],C=u*T-h*m,I=o*T-h*y,g=o*m-u*y,R=l*T-h*p,E=l*m-u*p,F=l*y-o*p;return e*(P*C-A*I+d*g)-n*(v*C-A*R+d*E)+s*(v*I-P*R+d*F)-r*(v*g-P*E+A*F)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],l=t[5],o=t[9],u=t[2],h=t[6],p=t[10];return e*(l*p-o*h)-n*(r*p-o*u)+s*(r*h-l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],l=t[4],o=t[5],u=t[6],h=t[7],p=t[8],y=t[9],m=t[10],T=t[11],v=t[12],P=t[13],A=t[14],d=t[15],C=e*o-n*l,I=e*u-s*l,g=e*h-r*l,R=n*u-s*o,E=n*h-r*o,F=s*h-r*u,x=p*P-y*v,U=p*A-m*v,G=p*d-T*v,X=y*A-m*P,b=y*d-T*P,Y=m*d-T*A,W=C*Y-I*b+g*X+R*G-E*U+F*x;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/W;return t[0]=(o*Y-u*b+h*X)*q,t[1]=(s*b-n*Y-r*X)*q,t[2]=(P*F-A*E+d*R)*q,t[3]=(m*E-y*F-T*R)*q,t[4]=(u*G-l*Y-h*U)*q,t[5]=(e*Y-s*G+r*U)*q,t[6]=(A*g-v*F-d*I)*q,t[7]=(p*F-m*g+T*I)*q,t[8]=(l*b-o*G+h*x)*q,t[9]=(n*G-e*b-r*x)*q,t[10]=(v*E-P*g+d*C)*q,t[11]=(y*g-p*E-T*C)*q,t[12]=(o*U-l*X-u*x)*q,t[13]=(e*X-n*U+s*x)*q,t[14]=(P*I-v*R-A*C)*q,t[15]=(p*R-y*I+m*C)*q,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,l=t.x,o=t.y,u=t.z,h=r*l,p=r*o;return this.set(h*l+n,h*o-s*u,h*u+s*o,0,h*o+s*u,p*o+n,p*u-s*l,0,h*u-s*o,p*u+s*l,r*u*u+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,l){return this.set(1,n,r,0,t,1,l,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,l=e._y,o=e._z,u=e._w,h=r+r,p=l+l,y=o+o,m=r*h,T=r*p,v=r*y,P=l*p,A=l*y,d=o*y,C=u*h,I=u*p,g=u*y,R=n.x,E=n.y,F=n.z;return s[0]=(1-(P+d))*R,s[1]=(T+g)*R,s[2]=(v-I)*R,s[3]=0,s[4]=(T-g)*E,s[5]=(1-(m+d))*E,s[6]=(A+C)*E,s[7]=0,s[8]=(v+I)*F,s[9]=(A-C)*F,s[10]=(1-(m+P))*F,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let l=Rs.set(s[0],s[1],s[2]).length(),o=Rs.set(s[4],s[5],s[6]).length(),u=Rs.set(s[8],s[9],s[10]).length();r<0&&(l=-l),li.copy(this);let h=1/l,p=1/o,y=1/u;return li.elements[0]*=h,li.elements[1]*=h,li.elements[2]*=h,li.elements[4]*=p,li.elements[5]*=p,li.elements[6]*=p,li.elements[8]*=y,li.elements[9]*=y,li.elements[10]*=y,e.setFromRotationMatrix(li),n.x=l,n.y=o,n.z=u,this}makePerspective(t,e,n,s,r,l,o=ui,u=!1){let h=this.elements,p=2*r/(e-t),y=2*r/(n-s),m=(e+t)/(e-t),T=(n+s)/(n-s),v,P;if(u)v=r/(l-r),P=l*r/(l-r);else if(o===ui)v=-(l+r)/(l-r),P=-2*l*r/(l-r);else if(o===Xs)v=-l/(l-r),P=-l*r/(l-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=p,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=y,h[9]=T,h[13]=0,h[2]=0,h[6]=0,h[10]=v,h[14]=P,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,l,o=ui,u=!1){let h=this.elements,p=2/(e-t),y=2/(n-s),m=-(e+t)/(e-t),T=-(n+s)/(n-s),v,P;if(u)v=1/(l-r),P=l/(l-r);else if(o===ui)v=-2/(l-r),P=-(l+r)/(l-r);else if(o===Xs)v=-1/(l-r),P=-r/(l-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=p,h[4]=0,h[8]=0,h[12]=m,h[1]=0,h[5]=y,h[9]=0,h[13]=T,h[2]=0,h[6]=0,h[10]=v,h[14]=P,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};go.prototype.isMatrix4=!0;var Je=go,Rs=new ot,li=new Je,cf=new ot(0,0,0),hf=new ot(1,1,1),Gi=new ot,ya=new ot,Zn=new ot,Dh=new Je,Nh=new bi,Bi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],l=s[4],o=s[8],u=s[1],h=s[5],p=s[9],y=s[2],m=s[6],T=s[10];switch(e){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-p,T),this._z=Math.atan2(-l,r)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(o,T),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-y,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-y,T),this._z=Math.atan2(-l,h)):(this._y=0,this._z=Math.atan2(u,r));break;case"ZYX":this._y=Math.asin(-Xe(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(m,T),this._z=Math.atan2(u,r)):(this._x=0,this._z=Math.atan2(-l,h));break;case"YZX":this._z=Math.asin(Xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-y,r)):(this._x=0,this._y=Math.atan2(o,T));break;case"XZY":this._z=Math.asin(-Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-p,T),this._y=0);break;default:be("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Dh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Dh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nh.setFromEuler(this),this.setFromQuaternion(Nh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bi.DEFAULT_ORDER="XYZ";var Zs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},uf=0,Uh=new ot,Is=new bi,Li=new Je,va=new ot,Mr=new ot,df=new ot,ff=new bi,Fh=new ot(1,0,0),Oh=new ot(0,1,0),Bh=new ot(0,0,1),kh={type:"added"},pf={type:"removed"},Ps={type:"childadded",child:null},Bl={type:"childremoved",child:null},Nn=class i extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new ot,e=new Bi,n=new bi,s=new ot(1,1,1);function r(){n.setFromEuler(e,!1)}function l(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Je},normalMatrix:{value:new Ce}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Is.setFromAxisAngle(t,e),this.quaternion.multiply(Is),this}rotateOnWorldAxis(t,e){return Is.setFromAxisAngle(t,e),this.quaternion.premultiply(Is),this}rotateX(t){return this.rotateOnAxis(Fh,t)}rotateY(t){return this.rotateOnAxis(Oh,t)}rotateZ(t){return this.rotateOnAxis(Bh,t)}translateOnAxis(t,e){return Uh.copy(t).applyQuaternion(this.quaternion),this.position.add(Uh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fh,t)}translateY(t){return this.translateOnAxis(Oh,t)}translateZ(t){return this.translateOnAxis(Bh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?va.copy(t):va.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Mr,va,this.up):Li.lookAt(va,Mr,this.up),this.quaternion.setFromRotationMatrix(Li),s&&(Li.extractRotation(s.matrixWorld),Is.setFromRotationMatrix(Li),this.quaternion.premultiply(Is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Me("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(kh),Ps.child=t,this.dispatchEvent(Ps),Ps.child=null):Me("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pf),Bl.child=t,this.dispatchEvent(Bl),Bl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Li.multiply(t.parent.matrixWorld)),t.applyMatrix4(Li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(kh),Ps.child=t,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let l=this.children[n].getObjectByProperty(t,e);if(l!==void 0)return l}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,l=s.length;r<l;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,t,df),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,ff,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let l=0,o=r.length;l<o;l++)r[l].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,u){return o[u.uuid]===void 0&&(o[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let u=o.shapes;if(Array.isArray(u))for(let h=0,p=u.length;h<p;h++){let y=u[h];r(t.shapes,y)}else r(t.shapes,u)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let u=0,h=this.material.length;u<h;u++)o.push(r(t.materials,this.material[u]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let u=this.animations[o];s.animations.push(r(t.animations,u))}}if(e){let o=l(t.geometries),u=l(t.materials),h=l(t.textures),p=l(t.images),y=l(t.shapes),m=l(t.skeletons),T=l(t.animations),v=l(t.nodes);o.length>0&&(n.geometries=o),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),p.length>0&&(n.images=p),y.length>0&&(n.shapes=y),m.length>0&&(n.skeletons=m),T.length>0&&(n.animations=T),v.length>0&&(n.nodes=v)}return n.object=s,n;function l(o){let u=[];for(let h in o){let p=o[h];delete p.metadata,u.push(p)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Nn.DEFAULT_UP=new ot(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var us=class extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}},mf={type:"move"},Js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ot,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ot),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ot,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ot,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,l=null,o=this._targetRay,u=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){l=!0;for(let P of t.hand.values()){let A=e.getJointPose(P,n),d=this._getHandJoint(h,P);A!==null&&(d.matrix.fromArray(A.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=A.radius),d.visible=A!==null}let p=h.joints["index-finger-tip"],y=h.joints["thumb-tip"],m=p.position.distanceTo(y.position),T=.02,v=.005;h.inputState.pinching&&m>T+v?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&m<=T-v&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1,u.eventsEnabled&&u.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mf)))}return o!==null&&(o.visible=s!==null),u!==null&&(u.visible=r!==null),h!==null&&(h.visible=l!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new us;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},Ma={h:0,s:0,l:0};function kl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var De=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,We.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=We.workingColorSpace){return this.r=t,this.g=e,this.b=n,We.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=We.workingColorSpace){if(t=rf(t,1),e=Xe(e,0,1),n=Xe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,l=2*n-r;this.r=kl(l,r,t+1/3),this.g=kl(l,r,t),this.b=kl(l,r,t-1/3)}return We.colorSpaceToWorking(this,s),this}setStyle(t,e=Cn){function n(r){r!==void 0&&parseFloat(r)<1&&be("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,l=s[1],o=s[2];switch(l){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:be("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],l=r.length;if(l===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(l===6)return this.setHex(parseInt(r,16),e);be("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Cn){let n=Ou[t.toLowerCase()];return n!==void 0?this.setHex(n,e):be("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Oi(t.r),this.g=Oi(t.g),this.b=Oi(t.b),this}copyLinearToSRGB(t){return this.r=Gs(t.r),this.g=Gs(t.g),this.b=Gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Cn){return We.workingToColorSpace(Ln.copy(this),t),Math.round(Xe(Ln.r*255,0,255))*65536+Math.round(Xe(Ln.g*255,0,255))*256+Math.round(Xe(Ln.b*255,0,255))}getHexString(t=Cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=We.workingColorSpace){We.workingToColorSpace(Ln.copy(this),e);let n=Ln.r,s=Ln.g,r=Ln.b,l=Math.max(n,s,r),o=Math.min(n,s,r),u,h,p=(o+l)/2;if(o===l)u=0,h=0;else{let y=l-o;switch(h=p<=.5?y/(l+o):y/(2-l-o),l){case n:u=(s-r)/y+(s<r?6:0);break;case s:u=(r-n)/y+2;break;case r:u=(n-s)/y+4;break}u/=6}return t.h=u,t.s=h,t.l=p,t}getRGB(t,e=We.workingColorSpace){return We.workingToColorSpace(Ln.copy(this),e),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=Cn){We.workingToColorSpace(Ln.copy(this),t);let e=Ln.r,n=Ln.g,s=Ln.b;return t!==Cn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Hi),this.setHSL(Hi.h+t,Hi.s+e,Hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hi),t.getHSL(Ma);let n=Dl(Hi.h,Ma.h,e),s=Dl(Hi.s,Ma.s,e),r=Dl(Hi.l,Ma.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ln=new De;De.NAMES=Ou;var Lr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new De(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Dr=class extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ci=new ot,Di=new ot,zl=new ot,Ni=new ot,Ls=new ot,Ds=new ot,zh=new ot,Vl=new ot,Gl=new ot,Hl=new ot,Wl=new dn,Xl=new dn,ql=new dn,Yi=class i{constructor(t=new ot,e=new ot,n=new ot){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ci.subVectors(t,e),s.cross(ci);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ci.subVectors(s,e),Di.subVectors(n,e),zl.subVectors(t,e);let l=ci.dot(ci),o=ci.dot(Di),u=ci.dot(zl),h=Di.dot(Di),p=Di.dot(zl),y=l*h-o*o;if(y===0)return r.set(0,0,0),null;let m=1/y,T=(h*u-o*p)*m,v=(l*p-o*u)*m;return r.set(1-T-v,v,T)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(t,e,n,s,r,l,o,u){return this.getBarycoord(t,e,n,s,Ni)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(r,Ni.x),u.addScaledVector(l,Ni.y),u.addScaledVector(o,Ni.z),u)}static getInterpolatedAttribute(t,e,n,s,r,l){return Wl.setScalar(0),Xl.setScalar(0),ql.setScalar(0),Wl.fromBufferAttribute(t,e),Xl.fromBufferAttribute(t,n),ql.fromBufferAttribute(t,s),l.setScalar(0),l.addScaledVector(Wl,r.x),l.addScaledVector(Xl,r.y),l.addScaledVector(ql,r.z),l}static isFrontFacing(t,e,n,s){return ci.subVectors(n,e),Di.subVectors(t,e),ci.cross(Di).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ci.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),ci.cross(Di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,l,o;Ls.subVectors(s,n),Ds.subVectors(r,n),Vl.subVectors(t,n);let u=Ls.dot(Vl),h=Ds.dot(Vl);if(u<=0&&h<=0)return e.copy(n);Gl.subVectors(t,s);let p=Ls.dot(Gl),y=Ds.dot(Gl);if(p>=0&&y<=p)return e.copy(s);let m=u*y-p*h;if(m<=0&&u>=0&&p<=0)return l=u/(u-p),e.copy(n).addScaledVector(Ls,l);Hl.subVectors(t,r);let T=Ls.dot(Hl),v=Ds.dot(Hl);if(v>=0&&T<=v)return e.copy(r);let P=T*h-u*v;if(P<=0&&h>=0&&v<=0)return o=h/(h-v),e.copy(n).addScaledVector(Ds,o);let A=p*v-T*y;if(A<=0&&y-p>=0&&T-v>=0)return zh.subVectors(r,s),o=(y-p)/(y-p+(T-v)),e.copy(s).addScaledVector(zh,o);let d=1/(A+P+m);return l=P*d,o=m*d,e.copy(n).addScaledVector(Ls,l).addScaledVector(Ds,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Si=class{constructor(t=new ot(1/0,1/0,1/0),e=new ot(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=hi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let l=0,o=r.count;l<o;l++)t.isMesh===!0?t.getVertexPosition(l,hi):hi.fromBufferAttribute(r,l),hi.applyMatrix4(t.matrixWorld),this.expandByPoint(hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ba.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ba.copy(n.boundingBox)),ba.applyMatrix4(t.matrixWorld),this.union(ba)}let s=t.children;for(let r=0,l=s.length;r<l;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hi),hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(br),Sa.subVectors(this.max,br),Ns.subVectors(t.a,br),Us.subVectors(t.b,br),Fs.subVectors(t.c,br),Wi.subVectors(Us,Ns),Xi.subVectors(Fs,Us),os.subVectors(Ns,Fs);let e=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-os.z,os.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,os.z,0,-os.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-os.y,os.x,0];return!Yl(e,Ns,Us,Fs,Sa)||(e=[1,0,0,0,1,0,0,0,1],!Yl(e,Ns,Us,Fs,Sa))?!1:(wa.crossVectors(Wi,Xi),e=[wa.x,wa.y,wa.z],Yl(e,Ns,Us,Fs,Sa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ui=[new ot,new ot,new ot,new ot,new ot,new ot,new ot,new ot],hi=new ot,ba=new Si,Ns=new ot,Us=new ot,Fs=new ot,Wi=new ot,Xi=new ot,os=new ot,br=new ot,Sa=new ot,wa=new ot,ls=new ot;function Yl(i,t,e,n,s){for(let r=0,l=i.length-3;r<=l;r+=3){ls.fromArray(i,r);let o=s.x*Math.abs(ls.x)+s.y*Math.abs(ls.y)+s.z*Math.abs(ls.z),u=t.dot(ls),h=e.dot(ls),p=n.dot(ls);if(Math.max(-Math.max(u,h,p),Math.min(u,h,p))>o)return!1}return!0}var _n=new ot,Ta=new ze,gf=0,Vn=class extends Mi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ic,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ta.fromBufferAttribute(this,e),Ta.applyMatrix3(t),this.setXY(e,Ta.x,Ta.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_n.fromBufferAttribute(this,e),_n.applyMatrix3(t),this.setXYZ(e,_n.x,_n.y,_n.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_n.fromBufferAttribute(this,e),_n.applyMatrix4(t),this.setXYZ(e,_n.x,_n.y,_n.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_n.fromBufferAttribute(this,e),_n.applyNormalMatrix(t),this.setXYZ(e,_n.x,_n.y,_n.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_n.fromBufferAttribute(this,e),_n.transformDirection(t),this.setXYZ(e,_n.x,_n.y,_n.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_i(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=cn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_i(e,this.array)),e}setX(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_i(e,this.array)),e}setY(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_i(e,this.array)),e}setZ(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_i(e,this.array)),e}setW(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array),r=cn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Nr=class extends Vn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ur=class extends Vn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Gn=class extends Vn{constructor(t,e,n){super(new Float32Array(t),e,n)}},xf=new Si,Sr=new ot,Zl=new ot,Ji=class{constructor(t=new ot,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):xf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,l=t.length;r<l;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Sr.subVectors(t,this.center);let e=Sr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Sr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Zl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Sr.copy(t.center).add(Zl)),this.expandByPoint(Sr.copy(t.center).sub(Zl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},_f=0,ei=new Je,Jl=new Nn,Os=new ot,Jn=new Si,wr=new Si,wn=new ot,Kn=class i extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nf(t)?Ur:Nr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ce().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ei.makeRotationFromQuaternion(t),this.applyMatrix4(ei),this}rotateX(t){return ei.makeRotationX(t),this.applyMatrix4(ei),this}rotateY(t){return ei.makeRotationY(t),this.applyMatrix4(ei),this}rotateZ(t){return ei.makeRotationZ(t),this.applyMatrix4(ei),this}translate(t,e,n){return ei.makeTranslation(t,e,n),this.applyMatrix4(ei),this}scale(t,e,n){return ei.makeScale(t,e,n),this.applyMatrix4(ei),this}lookAt(t){return Jl.lookAt(t),Jl.updateMatrix(),this.applyMatrix4(Jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let l=t[s];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new Gn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Me("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ot(-1/0,-1/0,-1/0),new ot(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Jn.setFromBufferAttribute(r),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Me('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ji);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Me("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ot,1/0);return}if(t){let n=this.boundingSphere.center;if(Jn.setFromBufferAttribute(t),e)for(let r=0,l=e.length;r<l;r++){let o=e[r];wr.setFromBufferAttribute(o),this.morphTargetsRelative?(wn.addVectors(Jn.min,wr.min),Jn.expandByPoint(wn),wn.addVectors(Jn.max,wr.max),Jn.expandByPoint(wn)):(Jn.expandByPoint(wr.min),Jn.expandByPoint(wr.max))}Jn.getCenter(n);let s=0;for(let r=0,l=t.count;r<l;r++)wn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(wn));if(e)for(let r=0,l=e.length;r<l;r++){let o=e[r],u=this.morphTargetsRelative;for(let h=0,p=o.count;h<p;h++)wn.fromBufferAttribute(o,h),u&&(Os.fromBufferAttribute(t,h),wn.add(Os)),s=Math.max(s,n.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Me('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Me("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,l=this.getAttribute("tangent");(l===void 0||l.count!==n.count)&&(l=new Vn(new Float32Array(4*n.count),4),this.setAttribute("tangent",l));let o=[],u=[];for(let x=0;x<n.count;x++)o[x]=new ot,u[x]=new ot;let h=new ot,p=new ot,y=new ot,m=new ze,T=new ze,v=new ze,P=new ot,A=new ot;function d(x,U,G){h.fromBufferAttribute(n,x),p.fromBufferAttribute(n,U),y.fromBufferAttribute(n,G),m.fromBufferAttribute(r,x),T.fromBufferAttribute(r,U),v.fromBufferAttribute(r,G),p.sub(h),y.sub(h),T.sub(m),v.sub(m);let X=1/(T.x*v.y-v.x*T.y);isFinite(X)&&(P.copy(p).multiplyScalar(v.y).addScaledVector(y,-T.y).multiplyScalar(X),A.copy(y).multiplyScalar(T.x).addScaledVector(p,-v.x).multiplyScalar(X),o[x].add(P),o[U].add(P),o[G].add(P),u[x].add(A),u[U].add(A),u[G].add(A))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let x=0,U=C.length;x<U;++x){let G=C[x],X=G.start,b=G.count;for(let Y=X,W=X+b;Y<W;Y+=3)d(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}let I=new ot,g=new ot,R=new ot,E=new ot;function F(x){R.fromBufferAttribute(s,x),E.copy(R);let U=o[x];I.copy(U),I.sub(R.multiplyScalar(R.dot(U))).normalize(),g.crossVectors(E,U);let X=g.dot(u[x])<0?-1:1;l.setXYZW(x,I.x,I.y,I.z,X)}for(let x=0,U=C.length;x<U;++x){let G=C[x],X=G.start,b=G.count;for(let Y=X,W=X+b;Y<W;Y+=3)F(t.getX(Y+0)),F(t.getX(Y+1)),F(t.getX(Y+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Vn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,T=n.count;m<T;m++)n.setXYZ(m,0,0,0);let s=new ot,r=new ot,l=new ot,o=new ot,u=new ot,h=new ot,p=new ot,y=new ot;if(t)for(let m=0,T=t.count;m<T;m+=3){let v=t.getX(m+0),P=t.getX(m+1),A=t.getX(m+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,P),l.fromBufferAttribute(e,A),p.subVectors(l,r),y.subVectors(s,r),p.cross(y),o.fromBufferAttribute(n,v),u.fromBufferAttribute(n,P),h.fromBufferAttribute(n,A),o.add(p),u.add(p),h.add(p),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(P,u.x,u.y,u.z),n.setXYZ(A,h.x,h.y,h.z)}else for(let m=0,T=e.count;m<T;m+=3)s.fromBufferAttribute(e,m+0),r.fromBufferAttribute(e,m+1),l.fromBufferAttribute(e,m+2),p.subVectors(l,r),y.subVectors(s,r),p.cross(y),n.setXYZ(m+0,p.x,p.y,p.z),n.setXYZ(m+1,p.x,p.y,p.z),n.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)wn.fromBufferAttribute(t,e),wn.normalize(),t.setXYZ(e,wn.x,wn.y,wn.z)}toNonIndexed(){function t(o,u){let h=o.array,p=o.itemSize,y=o.normalized,m=new h.constructor(u.length*p),T=0,v=0;for(let P=0,A=u.length;P<A;P++){o.isInterleavedBufferAttribute?T=u[P]*o.data.stride+o.offset:T=u[P]*p;for(let d=0;d<p;d++)m[v++]=h[T++]}return new Vn(m,p,y)}if(this.index===null)return be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let u=s[o],h=t(u,n);e.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let u=[],h=r[o];for(let p=0,y=h.length;p<y;p++){let m=h[p],T=t(m,n);u.push(T)}e.morphAttributes[o]=u}e.morphTargetsRelative=this.morphTargetsRelative;let l=this.groups;for(let o=0,u=l.length;o<u;o++){let h=l[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let u=this.parameters;for(let h in u)u[h]!==void 0&&(t[h]=u[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let u in n){let h=n[u];t.data.attributes[u]=h.toJSON(t.data)}let s={},r=!1;for(let u in this.morphAttributes){let h=this.morphAttributes[u],p=[];for(let y=0,m=h.length;y<m;y++){let T=h[y];p.push(T.toJSON(t.data))}p.length>0&&(s[u]=p,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let l=this.groups;l.length>0&&(t.data.groups=JSON.parse(JSON.stringify(l)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let h in s){let p=s[h];this.setAttribute(h,p.clone(e))}let r=t.morphAttributes;for(let h in r){let p=[],y=r[h];for(let m=0,T=y.length;m<T;m++)p.push(y[m].clone(e));this.morphAttributes[h]=p}this.morphTargetsRelative=t.morphTargetsRelative;let l=t.groups;for(let h=0,p=l.length;h<p;h++){let y=l[h];this.addGroup(y.start,y.count,y.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ic,this.updateRanges=[],this.version=0,this.uuid=Zi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Bn=new ot,Or=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Bn.fromBufferAttribute(this,e),Bn.applyMatrix4(t),this.setXYZ(e,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Bn.fromBufferAttribute(this,e),Bn.applyNormalMatrix(t),this.setXYZ(e,Bn.x,Bn.y,Bn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Bn.fromBufferAttribute(this,e),Bn.transformDirection(t),this.setXYZ(e,Bn.x,Bn.y,Bn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=_i(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=cn(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=cn(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=cn(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=cn(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=cn(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=_i(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=_i(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=_i(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=_i(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array),r=cn(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Pr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Vn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Pr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},$l=new ot,yf=new ot,vf=new Ce,$n=class{constructor(t=new ot(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=$l.subVectors(n,e).cross(yf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta($l),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let l=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(l<0||l>1)?null:e.copy(t.start).addScaledVector(s,l)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||vf.getNormalMatrix(t),s=this.coplanarPoint($l).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Mf=0,$i=class extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=nr,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fc,this.blendDst=pc,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=za,this.stencilZFail=za,this.stencilZPass=za,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){be(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){be(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let l=[];for(let o in r){let u=r[o];delete u.metadata,l.push(u)}return l}if(e){let r=s(t.textures),l=s(t.images);r.length>0&&(n.textures=r),l.length>0&&(n.images=l)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new De().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new $n().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ze().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ze().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Fi=new ot,Kl=new ot,Ea=new ot,Aa=new ot,Br=class{constructor(t=new ot,e=new ot(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Fi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fi.copy(this.origin).addScaledVector(this.direction,e),Fi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Kl.copy(t).add(e).multiplyScalar(.5),Ea.copy(e).sub(t).normalize(),Aa.copy(this.origin).sub(Kl);let r=t.distanceTo(e)*.5,l=-this.direction.dot(Ea),o=Aa.dot(this.direction),u=-Aa.dot(Ea),h=Aa.lengthSq(),p=Math.abs(1-l*l),y,m,T,v;if(p>0)if(y=l*u-o,m=l*o-u,v=r*p,y>=0)if(m>=-v)if(m<=v){let P=1/p;y*=P,m*=P,T=y*(y+l*m+2*o)+m*(l*y+m+2*u)+h}else m=r,y=Math.max(0,-(l*m+o)),T=-y*y+m*(m+2*u)+h;else m=-r,y=Math.max(0,-(l*m+o)),T=-y*y+m*(m+2*u)+h;else m<=-v?(y=Math.max(0,-(-l*r+o)),m=y>0?-r:Math.min(Math.max(-r,-u),r),T=-y*y+m*(m+2*u)+h):m<=v?(y=0,m=Math.min(Math.max(-r,-u),r),T=m*(m+2*u)+h):(y=Math.max(0,-(l*r+o)),m=y>0?r:Math.min(Math.max(-r,-u),r),T=-y*y+m*(m+2*u)+h);else m=l>0?-r:r,y=Math.max(0,-(l*m+o)),T=-y*y+m*(m+2*u)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,y),s&&s.copy(Kl).addScaledVector(Ea,m),T}intersectSphere(t,e){if(t.radius<0)return null;Fi.subVectors(t.center,this.origin);let n=Fi.dot(this.direction),s=Fi.dot(Fi)-n*n,r=t.radius*t.radius;if(s>r)return null;let l=Math.sqrt(r-s),o=n-l,u=n+l;return u<0?null:o<0?this.at(u,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,l,o,u,h=1/this.direction.x,p=1/this.direction.y,y=1/this.direction.z,m=this.origin;return h>=0?(n=(t.min.x-m.x)*h,s=(t.max.x-m.x)*h):(n=(t.max.x-m.x)*h,s=(t.min.x-m.x)*h),p>=0?(r=(t.min.y-m.y)*p,l=(t.max.y-m.y)*p):(r=(t.max.y-m.y)*p,l=(t.min.y-m.y)*p),n>l||r>s||((r>n||isNaN(n))&&(n=r),(l<s||isNaN(s))&&(s=l),y>=0?(o=(t.min.z-m.z)*y,u=(t.max.z-m.z)*y):(o=(t.max.z-m.z)*y,u=(t.min.z-m.z)*y),n>u||o>s)||((o>n||n!==n)&&(n=o),(u<s||s!==s)&&(s=u),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Fi)!==null}intersectTriangle(t,e,n,s,r){let l=this.origin,o=this.direction,u=o.x,h=o.y,p=o.z,y=t.x-l.x,m=t.y-l.y,T=t.z-l.z,v=e.x-l.x,P=e.y-l.y,A=e.z-l.z,d=n.x-l.x,C=n.y-l.y,I=n.z-l.z,g=Math.abs(u),R=Math.abs(h),E=Math.abs(p),F,x,U,G,X,b,Y,W,q,lt,ht,Mt;if(g>=R&&g>=E?(U=u,b=y,q=v,Mt=d,u>=0?(F=h,x=p,G=m,X=T,Y=P,W=A,lt=C,ht=I):(F=p,x=h,G=T,X=m,Y=A,W=P,lt=I,ht=C)):R>=E?(U=h,b=m,q=P,Mt=C,h>=0?(F=p,x=u,G=T,X=y,Y=A,W=v,lt=I,ht=d):(F=u,x=p,G=y,X=T,Y=v,W=A,lt=d,ht=I)):(U=p,b=T,q=A,Mt=I,p>=0?(F=u,x=h,G=y,X=m,Y=v,W=P,lt=d,ht=C):(F=h,x=u,G=m,X=y,Y=P,W=v,lt=C,ht=d)),U===0)return null;let Z=F/U,_=x/U,bt=1/U,Jt=G-Z*b,Ct=X-_*b,J=Y-Z*q,me=W-_*q,Ue=lt-Z*Mt,xt=ht-_*Mt,pt=Ue*me-xt*J,jt=Jt*xt-Ct*Ue,re=J*Ct-me*Jt;if(s){if(pt<0||jt<0||re<0)return null}else if((pt<0||jt<0||re<0)&&(pt>0||jt>0||re>0))return null;let $t=pt+jt+re;if($t===0)return null;let Te=bt*(pt*b+jt*q+re*Mt);return($t>0?Te<0:Te>0)?null:this.at(Te/$t,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},kr=class extends $i{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Vh=new Je,cs=new Br,Ca=new Ji,Gh=new ot,Ra=new ot,Ia=new ot,Pa=new ot,jl=new ot,La=new ot,Hh=new ot,Da=new ot,Un=class extends Nn{constructor(t=new Kn,e=new kr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,l=s.length;r<l;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,l=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){La.set(0,0,0);for(let u=0,h=r.length;u<h;u++){let p=o[u],y=r[u];p!==0&&(jl.fromBufferAttribute(y,t),l?La.addScaledVector(jl,p):La.addScaledVector(jl.sub(e),p))}e.add(La)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ca.copy(n.boundingSphere),Ca.applyMatrix4(r),cs.copy(t.ray).recast(t.near),!(Ca.containsPoint(cs.origin)===!1&&(cs.intersectSphere(Ca,Gh)===null||cs.origin.distanceToSquared(Gh)>(t.far-t.near)**2))&&(Vh.copy(r).invert(),cs.copy(t.ray).applyMatrix4(Vh),!(n.boundingBox!==null&&cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,cs)))}_computeIntersections(t,e,n){let s,r=this.geometry,l=this.material,o=r.index,u=r.attributes.position,h=r.attributes.uv,p=r.attributes.uv1,y=r.attributes.normal,m=r.groups,T=r.drawRange;if(o!==null)if(Array.isArray(l))for(let v=0,P=m.length;v<P;v++){let A=m[v],d=l[A.materialIndex],C=Math.max(A.start,T.start),I=Math.min(o.count,Math.min(A.start+A.count,T.start+T.count));for(let g=C,R=I;g<R;g+=3){let E=o.getX(g),F=o.getX(g+1),x=o.getX(g+2);s=Na(this,d,t,n,h,p,y,E,F,x),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=A.materialIndex,e.push(s))}}else{let v=Math.max(0,T.start),P=Math.min(o.count,T.start+T.count);for(let A=v,d=P;A<d;A+=3){let C=o.getX(A),I=o.getX(A+1),g=o.getX(A+2);s=Na(this,l,t,n,h,p,y,C,I,g),s&&(s.faceIndex=Math.floor(A/3),e.push(s))}}else if(u!==void 0)if(Array.isArray(l))for(let v=0,P=m.length;v<P;v++){let A=m[v],d=l[A.materialIndex],C=Math.max(A.start,T.start),I=Math.min(u.count,Math.min(A.start+A.count,T.start+T.count));for(let g=C,R=I;g<R;g+=3){let E=g,F=g+1,x=g+2;s=Na(this,d,t,n,h,p,y,E,F,x),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=A.materialIndex,e.push(s))}}else{let v=Math.max(0,T.start),P=Math.min(u.count,T.start+T.count);for(let A=v,d=P;A<d;A+=3){let C=A,I=A+1,g=A+2;s=Na(this,l,t,n,h,p,y,C,I,g),s&&(s.faceIndex=Math.floor(A/3),e.push(s))}}}};function bf(i,t,e,n,s,r,l,o){let u;if(t.side===kn?u=n.intersectTriangle(l,r,s,!0,o):u=n.intersectTriangle(s,r,l,t.side===es,o),u===null)return null;Da.copy(o),Da.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(Da);return h<e.near||h>e.far?null:{distance:h,point:Da.clone(),object:i}}function Na(i,t,e,n,s,r,l,o,u,h){i.getVertexPosition(o,Ra),i.getVertexPosition(u,Ia),i.getVertexPosition(h,Pa);let p=bf(i,t,e,n,Ra,Ia,Pa,Hh);if(p){let y=new ot;Yi.getBarycoord(Hh,Ra,Ia,Pa,y),s&&(p.uv=Yi.getInterpolatedAttribute(s,o,u,h,y,new ze)),r&&(p.uv1=Yi.getInterpolatedAttribute(r,o,u,h,y,new ze)),l&&(p.normal=Yi.getInterpolatedAttribute(l,o,u,h,y,new ot),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));let m={a:o,b:u,c:h,normal:new ot,materialIndex:0};Yi.getNormal(Ra,Ia,Pa,m.normal),p.face=m,p.barycoord=y}return p}var zr=class extends Hn{constructor(t=null,e=1,n=1,s,r,l,o,u,h=Tn,p=Tn,y,m){super(null,l,o,u,h,p,s,r,y,m),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ps=class extends Vn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Bs=new Je,Wh=new Je,Ua=[],Xh=new Si,Sf=new Je,Tr=new Un,Er=new Ji,Vr=class extends Un{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ps(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Sf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Si),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Bs),Xh.copy(t.boundingBox).applyMatrix4(Bs),this.boundingBox.union(Xh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ji),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Bs),Er.copy(t.boundingSphere).applyMatrix4(Bs),this.boundingSphere.union(Er)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,l=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[l+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Tr.geometry=this.geometry,Tr.material=this.material,Tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Er.copy(this.boundingSphere),Er.applyMatrix4(n),t.ray.intersectsSphere(Er)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Bs),Wh.multiplyMatrices(n,Bs),Tr.matrixWorld=Wh,Tr.raycast(t,Ua);for(let l=0,o=Ua.length;l<o;l++){let u=Ua[l];u.instanceId=r,u.object=this,e.push(u)}Ua.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ps(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new zr(new Float32Array(s*this.count),s,this.count,So,ni));let r=this.morphTexture.source.data.data,l=0;for(let h=0;h<n.length;h++)l+=n[h];let o=this.geometry.morphTargetsRelative?1:1-l,u=s*t;return r[u]=o,r.set(n,u+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},hs=new Ji,wf=new ze(.5,.5),Fa=new ot,$s=class{constructor(t=new $n,e=new $n,n=new $n,s=new $n,r=new $n,l=new $n){this.planes=[t,e,n,s,r,l]}set(t,e,n,s,r,l){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(l),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ui,n=!1){let s=this.planes,r=t.elements,l=r[0],o=r[1],u=r[2],h=r[3],p=r[4],y=r[5],m=r[6],T=r[7],v=r[8],P=r[9],A=r[10],d=r[11],C=r[12],I=r[13],g=r[14],R=r[15];if(s[0].setComponents(h-l,T-p,d-v,R-C).normalize(),s[1].setComponents(h+l,T+p,d+v,R+C).normalize(),s[2].setComponents(h+o,T+y,d+P,R+I).normalize(),s[3].setComponents(h-o,T-y,d-P,R-I).normalize(),n)s[4].setComponents(u,m,A,g).normalize(),s[5].setComponents(h-u,T-m,d-A,R-g).normalize();else if(s[4].setComponents(h-u,T-m,d-A,R-g).normalize(),e===ui)s[5].setComponents(h+u,T+m,d+A,R+g).normalize();else if(e===Xs)s[5].setComponents(u,m,A,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(t){hs.center.set(0,0,0);let e=wf.distanceTo(t.center);return hs.radius=.7071067811865476+e,hs.applyMatrix4(t.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Fa.x=s.normal.x>0?t.max.x:t.min.x,Fa.y=s.normal.y>0?t.max.y:t.min.y,Fa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Fa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Gr=class extends Hn{constructor(t=[],e=ns,n,s,r,l,o,u,h,p){super(t,e,n,s,r,l,o,u,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Ki=class extends Hn{constructor(t,e,n=fi,s,r,l,o=Tn,u=Tn,h,p=vi,y=1){if(p!==vi&&p!==is)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let m={width:t,height:e,depth:y};super(m,s,r,l,o,u,p,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ys(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},to=class extends Ki{constructor(t,e=fi,n=ns,s,r,l=Tn,o=Tn,u,h=vi){let p={width:t,height:t,depth:1},y=[p,p,p,p,p,p];super(t,t,e,n,s,r,l,o,u,h),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Hr=class extends Hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ks=class i extends Kn{constructor(t=1,e=1,n=1,s=1,r=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:l};let o=this;s=Math.floor(s),r=Math.floor(r),l=Math.floor(l);let u=[],h=[],p=[],y=[],m=0,T=0;v("z","y","x",-1,-1,n,e,t,l,r,0),v("z","y","x",1,-1,n,e,-t,l,r,1),v("x","z","y",1,1,t,n,e,s,l,2),v("x","z","y",1,-1,t,n,-e,s,l,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(u),this.setAttribute("position",new Gn(h,3)),this.setAttribute("normal",new Gn(p,3)),this.setAttribute("uv",new Gn(y,2));function v(P,A,d,C,I,g,R,E,F,x,U){let G=g/F,X=R/x,b=g/2,Y=R/2,W=E/2,q=F+1,lt=x+1,ht=0,Mt=0,Z=new ot;for(let _=0;_<lt;_++){let bt=_*X-Y;for(let Jt=0;Jt<q;Jt++){let Ct=Jt*G-b;Z[P]=Ct*C,Z[A]=bt*I,Z[d]=W,h.push(Z.x,Z.y,Z.z),Z[P]=0,Z[A]=0,Z[d]=E>0?1:-1,p.push(Z.x,Z.y,Z.z),y.push(Jt/F),y.push(1-_/x),ht+=1}}for(let _=0;_<x;_++)for(let bt=0;bt<F;bt++){let Jt=m+bt+q*_,Ct=m+bt+q*(_+1),J=m+(bt+1)+q*(_+1),me=m+(bt+1)+q*_;u.push(Jt,Ct,me),u.push(Ct,J,me),Mt+=6}o.addGroup(T,Mt,U),T+=Mt,m+=ht}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Wr=class i extends Kn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,l=e/2,o=Math.floor(n),u=Math.floor(s),h=o+1,p=u+1,y=t/o,m=e/u,T=[],v=[],P=[],A=[];for(let d=0;d<p;d++){let C=d*m-l;for(let I=0;I<h;I++){let g=I*y-r;v.push(g,-C,0),P.push(0,0,1),A.push(I/o),A.push(1-d/u)}}for(let d=0;d<u;d++)for(let C=0;C<o;C++){let I=C+h*d,g=C+h*(d+1),R=C+1+h*(d+1),E=C+1+h*d;T.push(I,g,E),T.push(g,R,E)}this.setIndex(T),this.setAttribute("position",new Gn(v,3)),this.setAttribute("normal",new Gn(P,3)),this.setAttribute("uv",new Gn(A,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};function _s(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(qh(s))s.isRenderTargetTexture?(be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(qh(s[0])){let r=[];for(let l=0,o=s.length;l<o;l++)r[l]=s[l].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Fn(i){let t={};for(let e=0;e<i.length;e++){let n=_s(i[e]);for(let s in n)t[s]=n[s]}return t}function qh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Tf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Pc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:We.workingColorSpace}var Bu={clone:_s,merge:Fn},Ef=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Af=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,jn=class extends $i{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ef,this.fragmentShader=Af,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_s(t.uniforms),this.uniformsGroups=Tf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let l=this.uniforms[s].value;l&&l.isTexture?e.uniforms[s]={type:"t",value:l.toJSON(t).uuid}:l&&l.isColor?e.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?e.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?e.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?e.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?e.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?e.uniforms[s]={type:"m4",value:l.toArray()}:e.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new De().setHex(s.value);break;case"v2":this.uniforms[n].value=new ze().fromArray(s.value);break;case"v3":this.uniforms[n].value=new ot().fromArray(s.value);break;case"v4":this.uniforms[n].value=new dn().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ce().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Je().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},js=class extends jn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Xr=class extends $i{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=il,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Qs=class extends $i{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},eo=class extends $i{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ks(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ql(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ji=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let l;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}l=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let u=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(s=r,r=e[--n-1],t>=r)break t}l=n,n=0;break e}break n}for(;n<l;){let o=n+l>>>1;t<e[o]?l=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let l=0;l!==s;++l)e[l]=n[r+l];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},no=class extends ji{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nc,endingEnd:nc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,l=t+1,o=s[r],u=s[l];if(o===void 0)switch(this.getSettings_().endingStart){case ic:r=t,o=2*e-n;break;case sc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(u===void 0)switch(this.getSettings_().endingEnd){case ic:l=t,u=2*n-e;break;case sc:l=1,u=n+s[1]-s[0];break;default:l=t-1,u=e}let h=(n-e)*.5,p=this.valueSize;this._weightPrev=h/(e-o),this._weightNext=h/(u-n),this._offsetPrev=r*p,this._offsetNext=l*p}interpolate_(t,e,n,s){let r=this.resultBuffer,l=this.sampleValues,o=this.valueSize,u=t*o,h=u-o,p=this._offsetPrev,y=this._offsetNext,m=this._weightPrev,T=this._weightNext,v=(n-e)/(s-e),P=v*v,A=P*v,d=-m*A+2*m*P-m*v,C=(1+m)*A+(-1.5-2*m)*P+(-.5+m)*v+1,I=(-1-T)*A+(1.5+T)*P+.5*v,g=T*A-T*P;for(let R=0;R!==o;++R)r[R]=d*l[p+R]+C*l[h+R]+I*l[u+R]+g*l[y+R];return r}},io=class extends ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,l=this.sampleValues,o=this.valueSize,u=t*o,h=u-o,p=(n-e)/(s-e),y=1-p;for(let m=0;m!==o;++m)r[m]=l[h+m]*y+l[u+m]*p;return r}},so=class extends ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ro=class extends ji{interpolate_(t,e,n,s){let r=this.resultBuffer,l=this.sampleValues,o=this.valueSize,u=t*o,h=u-o,p=this.inTangents,y=this.outTangents;if(!p||!y){let v=(n-e)/(s-e),P=1-v;for(let A=0;A!==o;++A)r[A]=l[h+A]*P+l[u+A]*v;return r}let m=o*2,T=t-1;for(let v=0;v!==o;++v){let P=l[h+v],A=l[u+v],d=T*m+v*2,C=y[d],I=y[d+1],g=t*m+v*2,R=p[g],E=p[g+1],F=Rf(n,e,C,R,s);r[v]=ku(F,P,I,E,A)}return r}};function ku(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Cf(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Rf(i,t,e,n,s){let r=(i-t)/(s-t);for(let l=0;l<8;l++){let o=ku(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let u=Cf(r,t,e,n,s);if(Math.abs(u)<1e-10)break;r=Math.max(0,Math.min(1,r-o/u))}return r}var Qn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ks(e,this.TimeBufferType),this.values=ks(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ks(t.times,Array),values:ks(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Ql(t.settings)&&(n.settings={inTangents:ks(t.settings.inTangents,Array),outTangents:ks(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new so(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new io(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new no(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ro(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ar:e=this.InterpolantFactoryMethodDiscrete;break;case Ja:e=this.InterpolantFactoryMethodLinear;break;case ka:e=this.InterpolantFactoryMethodSmooth;break;case ec:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return be("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ar;case this.InterpolantFactoryMethodLinear:return Ja;case this.InterpolantFactoryMethodSmooth:return ka;case this.InterpolantFactoryMethodBezier:return ec}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Ql(this.settings)&&(Yh(this.settings.inTangents,t),Yh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,l=s-1;for(;r!==s&&n[r]<t;)++r;for(;l!==-1&&n[l]>e;)--l;if(++l,r!==0||l!==s){r>=l&&(l=Math.max(l,1),r=l-1);let o=this.getValueSize();this.times=n.slice(r,l),this.values=this.values.slice(r*o,l*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Me("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Me("KeyframeTrack: Track is empty.",this),t=!1);let l=null;for(let o=0;o!==r;o++){let u=n[o];if(typeof u=="number"&&isNaN(u)){Me("KeyframeTrack: Time is not a valid number.",this,o,u),t=!1;break}if(l!==null&&l>u){Me("KeyframeTrack: Out of order keys.",this,o,u,l),t=!1;break}l=u}if(s!==void 0&&sf(s))for(let o=0,u=s.length;o!==u;++o){let h=s[o];if(isNaN(h)){Me("KeyframeTrack: Value is not a valid number.",this,o,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ka,r=t.length-1,l=1;for(let o=1;o<r;++o){let u=!1,h=t[o],p=t[o+1];if(h!==p&&(o!==1||h!==t[0]))if(s)u=!0;else{let y=o*n,m=y-n,T=y+n;for(let v=0;v!==n;++v){let P=e[y+v];if(P!==e[m+v]||P!==e[T+v]){u=!0;break}}}if(u){if(o!==l){t[l]=t[o];let y=o*n,m=l*n;for(let T=0;T!==n;++T)e[m+T]=e[y+T]}++l}}if(r>0){t[l]=t[r];for(let o=r*n,u=l*n,h=0;h!==n;++h)e[u+h]=e[o+h];++l}return l!==t.length?(this.times=t.slice(0,l),this.values=e.slice(0,l*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ql(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Yh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Qn.prototype.ValueTypeName="";Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=Ja;var Qi=class extends Qn{constructor(t,e,n){super(t,e,n)}};Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Ar;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var ao=class extends Qn{constructor(t,e,n,s){super(t,e,n,s)}};ao.prototype.ValueTypeName="color";var oo=class extends Qn{constructor(t,e,n,s){super(t,e,n,s)}};oo.prototype.ValueTypeName="number";var lo=class extends ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,l=this.sampleValues,o=this.valueSize,u=(n-e)/(s-e),h=t*o;for(let p=h+o;h!==p;h+=4)bi.slerpFlat(r,0,l,h-o,l,h,u);return r}},qr=class extends Qn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new lo(this.times,this.values,this.getValueSize(),t)}};qr.prototype.ValueTypeName="quaternion";qr.prototype.InterpolantFactoryMethodSmooth=void 0;var ts=class extends Qn{constructor(t,e,n){super(t,e,n)}};ts.prototype.ValueTypeName="string";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Ar;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var co=class extends Qn{constructor(t,e,n,s){super(t,e,n,s)}};co.prototype.ValueTypeName="vector";var ho=class{constructor(t,e,n){let s=this,r=!1,l=0,o=0,u,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(p){o++,r===!1&&s.onStart!==void 0&&s.onStart(p,l,o),r=!0},this.itemEnd=function(p){l++,s.onProgress!==void 0&&s.onProgress(p,l,o),l===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return p=p.normalize("NFC"),u?u(p):p},this.setURLModifier=function(p){return u=p,this},this.addHandler=function(p,y){return h.push(p,y),this},this.removeHandler=function(p){let y=h.indexOf(p);return y!==-1&&h.splice(y,2),this},this.getHandler=function(p){for(let y=0,m=h.length;y<m;y+=2){let T=h[y],v=h[y+1];if(T.global&&(T.lastIndex=0),T.test(p))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},zu=new ho,uo=class{constructor(t){this.manager=t!==void 0?t:zu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};uo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Yr=class extends Nn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new De(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Zr=class extends Yr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},tc=new Je,Zh=new ot,Jh=new ot,fo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=Xn,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $s,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new dn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Zh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zh),Jh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){tc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(tc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,l=s?s.z/r.x:1,o=s?s.w/r.y:1,u=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===Xs||t.reversedDepth?e.set(.5*l,0,0,.5*l+u,0,.5*o,0,.5*o+h,0,0,1,0,0,0,0,1):e.set(.5*l,0,0,.5*l+u,0,.5*o,0,.5*o+h,0,0,.5,.5,0,0,0,1),e.multiply(tc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Oa=new ot,Ba=new bi,xi=new ot,Jr=class extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Oa,Ba,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oa,Ba,xi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Oa,Ba,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oa,Ba,xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},qi=new ot,$h=new ze,Kh=new ze,Dn=class extends Jr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=$a*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ll*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $a*2*Math.atan(Math.tan(Ll*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qi.x,qi.y).multiplyScalar(-t/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-t/qi.z)}getViewSize(t,e){return this.getViewBounds(t,$h,Kh),e.subVectors(Kh,$h)}setViewOffset(t,e,n,s,r,l){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ll*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,l=this.view;if(this.view!==null&&this.view.enabled){let u=l.fullWidth,h=l.fullHeight;r+=l.offsetX*s/u,e-=l.offsetY*n/h,s*=l.width/u,n*=l.height/h}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var tr=class extends Jr{constructor(t=-1,e=1,n=1,s=-1,r=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=l,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,l=n+t,o=s+e,u=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,l=r+h*this.view.width,o-=p*this.view.offsetY,u=o-p*this.view.height}this.projectionMatrix.makeOrthographic(r,l,o,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},rc=class extends fo{constructor(){super(new tr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$r=class extends Yr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.target=new Nn,this.shadow=new rc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var zs=-90,Vs=1,po=class extends Nn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Dn(zs,Vs,t,e);s.layers=this.layers,this.add(s);let r=new Dn(zs,Vs,t,e);r.layers=this.layers,this.add(r);let l=new Dn(zs,Vs,t,e);l.layers=this.layers,this.add(l);let o=new Dn(zs,Vs,t,e);o.layers=this.layers,this.add(o);let u=new Dn(zs,Vs,t,e);u.layers=this.layers,this.add(u);let h=new Dn(zs,Vs,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,l,o,u]=e;for(let h of e)this.remove(h);if(t===ui)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===Xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,l,o,u,h,p]=this.children,y=t.getRenderTarget(),m=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let P=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let A=!1;t.isWebGLRenderer===!0?A=t.state.buffers.depth.getReversed():A=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),A&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),A&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,2,s),A&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),A&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(n,4,s),A&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.generateMipmaps=P,t.setRenderTarget(n,5,s),A&&t.autoClear===!1&&t.clearDepth(),t.render(e,p),t.setRenderTarget(y,m,T),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},mo=class extends Dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Lc="\\[\\]\\.:\\/",If=new RegExp("["+Lc+"]","g"),Dc="[^"+Lc+"]",Pf="[^"+Lc.replace("\\.","")+"]",Lf=/((?:WC+[\/:])*)/.source.replace("WC",Dc),Df=/(WCOD+)?/.source.replace("WCOD",Pf),Nf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dc),Uf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dc),Ff=new RegExp("^"+Lf+Df+Nf+Uf+"$"),Of=["material","materials","bones","map"],ac=class{constructor(t,e,n){let s=n||un.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},un=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(If,"")}static parseTrackName(t){let e=Ff.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Of.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let l=0;l<r.length;l++){let o=r[l];if(o.name===e||o.uuid===e)return o;let u=n(o.children);if(u)return u}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){be("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){Me("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Me("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Me("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let p=0;p<t.length;p++)if(t[p].name===h){h=p;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Me("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Me("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Me("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){Me("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let l=t[s];if(l===void 0){let h=e.nodeName;Me("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Me("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Me("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}u=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=r}else l.fromArray!==void 0&&l.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(u=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=s;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};un.Composite=ac;un.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};un.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};un.prototype.GetterByBindingType=[un.prototype._getValue_direct,un.prototype._getValue_array,un.prototype._getValue_arrayElement,un.prototype._getValue_toArray];un.prototype.SetterByBindingTypeAndVersioning=[[un.prototype._setValue_direct,un.prototype._setValue_direct_setNeedsUpdate,un.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[un.prototype._setValue_array,un.prototype._setValue_array_setNeedsUpdate,un.prototype._setValue_array_setMatrixWorldNeedsUpdate],[un.prototype._setValue_arrayElement,un.prototype._setValue_arrayElement_setNeedsUpdate,un.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[un.prototype._setValue_fromArray,un.prototype._setValue_fromArray_setNeedsUpdate,un.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var P1=new Float32Array(1);var jh=new Je,Kr=class{constructor(t,e,n=0,s=1/0){this.ray=new Br(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Zs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Me("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return jh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jh),this}intersectObject(t,e=!0,n=[]){return oc(t,this,n,e),n.sort(Qh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)oc(t[s],this,n,e);return n.sort(Qh),n}};function Qh(i,t){return i.distance-t.distance}function oc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let l=0,o=r.length;l<o;l++)oc(r[l],t,e,!0)}}var kc=class kc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};kc.prototype.isMatrix2=!0;var lc=kc;function Nc(i,t,e,n){let s=Bf(n);switch(e){case Ac:return i*t;case So:return i*t/s.components*s.byteLength;case wo:return i*t/s.components*s.byteLength;case ss:return i*t*2/s.components*s.byteLength;case To:return i*t*2/s.components*s.byteLength;case Cc:return i*t*3/s.components*s.byteLength;case ii:return i*t*4/s.components*s.byteLength;case Eo:return i*t*4/s.components*s.byteLength;case ea:case na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ia:case sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Co:case Io:return Math.max(i,16)*Math.max(t,8)/4;case Ao:case Ro:return Math.max(i,8)*Math.max(t,8)/2;case Po:case Lo:case No:case Uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Do:case ra:case Fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ko:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case zo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Vo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Go:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Wo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case qo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Zo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Jo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case $o:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ko:case jo:case Qo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case tl:case el:return Math.ceil(i/4)*Math.ceil(t/4)*8;case aa:case nl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Bf(i){switch(i){case Xn:case Sc:return{byteLength:1,components:1};case ir:case wc:case pi:return{byteLength:2,components:1};case Mo:case bo:return{byteLength:2,components:4};case fi:case vo:case ni:return{byteLength:4,components:1};case Tc:case Ec:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function ld(){let i=null,t=!1,e=null,n=null;function s(r,l){n=i.requestAnimationFrame(s),e(r,l)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function zf(i){let t=new WeakMap;function e(o,u){let h=o.array,p=o.usage,y=h.byteLength,m=i.createBuffer();i.bindBuffer(u,m),i.bufferData(u,h,p),o.onUploadCallback();let T;if(h instanceof Float32Array)T=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)T=i.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?T=i.HALF_FLOAT:T=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)T=i.SHORT;else if(h instanceof Uint32Array)T=i.UNSIGNED_INT;else if(h instanceof Int32Array)T=i.INT;else if(h instanceof Int8Array)T=i.BYTE;else if(h instanceof Uint8Array)T=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)T=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:T,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:y}}function n(o,u,h){let p=u.array,y=u.updateRanges;if(i.bindBuffer(h,o),y.length===0)i.bufferSubData(h,0,p);else{y.sort((T,v)=>T.start-v.start);let m=0;for(let T=1;T<y.length;T++){let v=y[m],P=y[T];P.start<=v.start+v.count+1?v.count=Math.max(v.count,P.start+P.count-v.start):(++m,y[m]=P)}y.length=m+1;for(let T=0,v=y.length;T<v;T++){let P=y[T];i.bufferSubData(h,P.start*p.BYTES_PER_ELEMENT,p,P.start,P.count)}u.clearUpdateRanges()}u.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let u=t.get(o);u&&(i.deleteBuffer(u.buffer),t.delete(o))}function l(o,u){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let p=t.get(o);(!p||p.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,e(o,u));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,u),h.version=o.version}}return{get:s,remove:r,update:l}}var Vf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,$f=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ep=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,op=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,lp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,hp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,up=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,fp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xp="gl_FragColor = linearToOutputTexel( gl_FragColor );",_p=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,vp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Mp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ep=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ap=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Rp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ip=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Dp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Np=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Up=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Op=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hp=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Wp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$p=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Kp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,t0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,e0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,n0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,s0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,a0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,o0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,h0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,u0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,d0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,f0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,p0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,m0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,g0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,x0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,y0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,M0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,b0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,S0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,w0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,T0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,E0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,A0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,C0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,R0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,P0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,L0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,U0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,F0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,O0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,z0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,V0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,G0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Z0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,J0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,em=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,im=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,am=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,om=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,um=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_m=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ym=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ne={alphahash_fragment:Vf,alphahash_pars_fragment:Gf,alphamap_fragment:Hf,alphamap_pars_fragment:Wf,alphatest_fragment:Xf,alphatest_pars_fragment:qf,aomap_fragment:Yf,aomap_pars_fragment:Zf,batching_pars_vertex:Jf,batching_vertex:$f,begin_vertex:Kf,beginnormal_vertex:jf,bsdfs:Qf,iridescence_fragment:tp,bumpmap_pars_fragment:ep,clipping_planes_fragment:np,clipping_planes_pars_fragment:ip,clipping_planes_pars_vertex:sp,clipping_planes_vertex:rp,color_fragment:ap,color_pars_fragment:op,color_pars_vertex:lp,color_vertex:cp,common:hp,cube_uv_reflection_fragment:up,defaultnormal_vertex:dp,displacementmap_pars_vertex:fp,displacementmap_vertex:pp,emissivemap_fragment:mp,emissivemap_pars_fragment:gp,colorspace_fragment:xp,colorspace_pars_fragment:_p,envmap_fragment:yp,envmap_common_pars_fragment:vp,envmap_pars_fragment:Mp,envmap_pars_vertex:bp,envmap_physical_pars_fragment:Dp,envmap_vertex:Sp,fog_vertex:wp,fog_pars_vertex:Tp,fog_fragment:Ep,fog_pars_fragment:Ap,gradientmap_pars_fragment:Cp,lightmap_pars_fragment:Rp,lights_lambert_fragment:Ip,lights_lambert_pars_fragment:Pp,lights_pars_begin:Lp,lights_toon_fragment:Np,lights_toon_pars_fragment:Up,lights_phong_fragment:Fp,lights_phong_pars_fragment:Op,lights_physical_fragment:Bp,lights_physical_pars_fragment:kp,lights_fragment_begin:zp,lights_fragment_maps:Vp,lights_fragment_end:Gp,lightprobes_pars_fragment:Hp,logdepthbuf_fragment:Wp,logdepthbuf_pars_fragment:Xp,logdepthbuf_pars_vertex:qp,logdepthbuf_vertex:Yp,map_fragment:Zp,map_pars_fragment:Jp,map_particle_fragment:$p,map_particle_pars_fragment:Kp,metalnessmap_fragment:jp,metalnessmap_pars_fragment:Qp,morphinstance_vertex:t0,morphcolor_vertex:e0,morphnormal_vertex:n0,morphtarget_pars_vertex:i0,morphtarget_vertex:s0,normal_fragment_begin:r0,normal_fragment_maps:a0,normal_pars_fragment:o0,normal_pars_vertex:l0,normal_vertex:c0,normalmap_pars_fragment:h0,clearcoat_normal_fragment_begin:u0,clearcoat_normal_fragment_maps:d0,clearcoat_pars_fragment:f0,iridescence_pars_fragment:p0,opaque_fragment:m0,packing:g0,premultiplied_alpha_fragment:x0,project_vertex:_0,dithering_fragment:y0,dithering_pars_fragment:v0,roughnessmap_fragment:M0,roughnessmap_pars_fragment:b0,shadowmap_pars_fragment:S0,shadowmap_pars_vertex:w0,shadowmap_vertex:T0,shadowmask_pars_fragment:E0,skinbase_vertex:A0,skinning_pars_vertex:C0,skinning_vertex:R0,skinnormal_vertex:I0,specularmap_fragment:P0,specularmap_pars_fragment:L0,tonemapping_fragment:D0,tonemapping_pars_fragment:N0,transmission_fragment:U0,transmission_pars_fragment:F0,uv_pars_fragment:O0,uv_pars_vertex:B0,uv_vertex:k0,worldpos_vertex:z0,background_vert:V0,background_frag:G0,backgroundCube_vert:H0,backgroundCube_frag:W0,cube_vert:X0,cube_frag:q0,depth_vert:Y0,depth_frag:Z0,distance_vert:J0,distance_frag:$0,equirect_vert:K0,equirect_frag:j0,linedashed_vert:Q0,linedashed_frag:tm,meshbasic_vert:em,meshbasic_frag:nm,meshlambert_vert:im,meshlambert_frag:sm,meshmatcap_vert:rm,meshmatcap_frag:am,meshnormal_vert:om,meshnormal_frag:lm,meshphong_vert:cm,meshphong_frag:hm,meshphysical_vert:um,meshphysical_frag:dm,meshtoon_vert:fm,meshtoon_frag:pm,points_vert:mm,points_frag:gm,shadow_vert:xm,shadow_frag:_m,sprite_vert:ym,sprite_frag:vm},ne={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ce}},envmap:{envMap:{value:null},envMapRotation:{value:new Ce},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ce},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ot},probesMax:{value:new ot},probesResolution:{value:new ot}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0},uvTransform:{value:new Ce}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}}},Ai={basic:{uniforms:Fn([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Fn([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new De(0)},envMapIntensity:{value:1}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Fn([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Fn([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Fn([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new De(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Fn([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Fn([ne.points,ne.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Fn([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Fn([ne.common,ne.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Fn([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Fn([ne.sprite,ne.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ce}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distance:{uniforms:Fn([ne.common,ne.displacementmap,{referencePosition:{value:new ot},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distance_vert,fragmentShader:Ne.distance_frag},shadow:{uniforms:Fn([ne.lights,ne.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Ai.physical={uniforms:Fn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ce},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ce},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ce},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ce},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ce},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ce},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ce}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};var ol={r:0,b:0,g:0},Mm=new Je,cd=new Ce;cd.set(-1,0,0,0,1,0,0,0,1);function bm(i,t,e,n,s,r){let l=new De(0),o=s===!0?0:1,u,h,p=null,y=0,m=null;function T(C){let I=C.isScene===!0?C.background:null;if(I&&I.isTexture){let g=C.backgroundBlurriness>0;I=t.get(I,g)}return I}function v(C){let I=!1,g=T(C);g===null?A(l,o):g&&g.isColor&&(A(g,1),I=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||I)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function P(C,I){let g=T(I);g&&(g.isCubeTexture||g.mapping===Qr)?(h===void 0&&(h=new Un(new Ks(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:_s(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,E,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=g,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Mm.makeRotationFromEuler(I.backgroundRotation)).transpose(),g.isCubeTexture&&g.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(cd),h.material.toneMapped=We.getTransfer(g.colorSpace)!==sn,(p!==g||y!==g.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,p=g,y=g.version,m=i.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new Un(new Wr(2,2),new jn({name:"BackgroundMaterial",uniforms:_s(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,u.material.toneMapped=We.getTransfer(g.colorSpace)!==sn,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(p!==g||y!==g.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,p=g,y=g.version,m=i.toneMapping),u.layers.enableAll(),C.unshift(u,u.geometry,u.material,0,0,null))}function A(C,I){C.getRGB(ol,Pc(i)),e.buffers.color.setClear(ol.r,ol.g,ol.b,I,r)}function d(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return l},setClearColor:function(C,I=1){l.set(C),o=I,A(l,o)},getClearAlpha:function(){return o},setClearAlpha:function(C){o=C,A(l,o)},render:v,addToRenderList:P,dispose:d}}function Sm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=m(null),r=s,l=!1;function o(X,b,Y,W,q){let lt=!1,ht=y(X,W,Y,b);r!==ht&&(r=ht,h(r.object)),lt=T(X,W,Y,q),lt&&v(X,W,Y,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(lt||l)&&(l=!1,g(X,b,Y,W),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function u(){return i.createVertexArray()}function h(X){return i.bindVertexArray(X)}function p(X){return i.deleteVertexArray(X)}function y(X,b,Y,W){let q=W.wireframe===!0,lt=n[b.id];lt===void 0&&(lt={},n[b.id]=lt);let ht=X.isInstancedMesh===!0?X.id:0,Mt=lt[ht];Mt===void 0&&(Mt={},lt[ht]=Mt);let Z=Mt[Y.id];Z===void 0&&(Z={},Mt[Y.id]=Z);let _=Z[q];return _===void 0&&(_=m(u()),Z[q]=_),_}function m(X){let b=[],Y=[],W=[];for(let q=0;q<e;q++)b[q]=0,Y[q]=0,W[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:Y,attributeDivisors:W,object:X,attributes:{},index:null}}function T(X,b,Y,W){let q=r.attributes,lt=b.attributes,ht=0,Mt=Y.getAttributes();for(let Z in Mt)if(Mt[Z].location>=0){let bt=q[Z],Jt=lt[Z];if(Jt===void 0&&(Z==="instanceMatrix"&&X.instanceMatrix&&(Jt=X.instanceMatrix),Z==="instanceColor"&&X.instanceColor&&(Jt=X.instanceColor)),bt===void 0||bt.attribute!==Jt||Jt&&bt.data!==Jt.data)return!0;ht++}return r.attributesNum!==ht||r.index!==W}function v(X,b,Y,W){let q={},lt=b.attributes,ht=0,Mt=Y.getAttributes();for(let Z in Mt)if(Mt[Z].location>=0){let bt=lt[Z];bt===void 0&&(Z==="instanceMatrix"&&X.instanceMatrix&&(bt=X.instanceMatrix),Z==="instanceColor"&&X.instanceColor&&(bt=X.instanceColor));let Jt={};Jt.attribute=bt,bt&&bt.data&&(Jt.data=bt.data),q[Z]=Jt,ht++}r.attributes=q,r.attributesNum=ht,r.index=W}function P(){let X=r.newAttributes;for(let b=0,Y=X.length;b<Y;b++)X[b]=0}function A(X){d(X,0)}function d(X,b){let Y=r.newAttributes,W=r.enabledAttributes,q=r.attributeDivisors;Y[X]=1,W[X]===0&&(i.enableVertexAttribArray(X),W[X]=1),q[X]!==b&&(i.vertexAttribDivisor(X,b),q[X]=b)}function C(){let X=r.newAttributes,b=r.enabledAttributes;for(let Y=0,W=b.length;Y<W;Y++)b[Y]!==X[Y]&&(i.disableVertexAttribArray(Y),b[Y]=0)}function I(X,b,Y,W,q,lt,ht){ht===!0?i.vertexAttribIPointer(X,b,Y,q,lt):i.vertexAttribPointer(X,b,Y,W,q,lt)}function g(X,b,Y,W){P();let q=W.attributes,lt=Y.getAttributes(),ht=b.defaultAttributeValues;for(let Mt in lt){let Z=lt[Mt];if(Z.location>=0){let _=q[Mt];if(_===void 0&&(Mt==="instanceMatrix"&&X.instanceMatrix&&(_=X.instanceMatrix),Mt==="instanceColor"&&X.instanceColor&&(_=X.instanceColor)),_!==void 0){let bt=_.normalized,Jt=_.itemSize,Ct=t.get(_);if(Ct===void 0)continue;let J=Ct.buffer,me=Ct.type,Ue=Ct.bytesPerElement,xt=me===i.INT||me===i.UNSIGNED_INT||_.gpuType===vo;if(_.isInterleavedBufferAttribute){let pt=_.data,jt=pt.stride,re=_.offset;if(pt.isInstancedInterleavedBuffer){for(let $t=0;$t<Z.locationSize;$t++)d(Z.location+$t,pt.meshPerAttribute);X.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let $t=0;$t<Z.locationSize;$t++)A(Z.location+$t);i.bindBuffer(i.ARRAY_BUFFER,J);for(let $t=0;$t<Z.locationSize;$t++)I(Z.location+$t,Jt/Z.locationSize,me,bt,jt*Ue,(re+Jt/Z.locationSize*$t)*Ue,xt)}else{if(_.isInstancedBufferAttribute){for(let pt=0;pt<Z.locationSize;pt++)d(Z.location+pt,_.meshPerAttribute);X.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=_.meshPerAttribute*_.count)}else for(let pt=0;pt<Z.locationSize;pt++)A(Z.location+pt);i.bindBuffer(i.ARRAY_BUFFER,J);for(let pt=0;pt<Z.locationSize;pt++)I(Z.location+pt,Jt/Z.locationSize,me,bt,Jt*Ue,Jt/Z.locationSize*pt*Ue,xt)}}else if(ht!==void 0){let bt=ht[Mt];if(bt!==void 0)switch(bt.length){case 2:i.vertexAttrib2fv(Z.location,bt);break;case 3:i.vertexAttrib3fv(Z.location,bt);break;case 4:i.vertexAttrib4fv(Z.location,bt);break;default:i.vertexAttrib1fv(Z.location,bt)}}}}C()}function R(){U();for(let X in n){let b=n[X];for(let Y in b){let W=b[Y];for(let q in W){let lt=W[q];for(let ht in lt)p(lt[ht].object),delete lt[ht];delete W[q]}}delete n[X]}}function E(X){if(n[X.id]===void 0)return;let b=n[X.id];for(let Y in b){let W=b[Y];for(let q in W){let lt=W[q];for(let ht in lt)p(lt[ht].object),delete lt[ht];delete W[q]}}delete n[X.id]}function F(X){for(let b in n){let Y=n[b];for(let W in Y){let q=Y[W];if(q[X.id]===void 0)continue;let lt=q[X.id];for(let ht in lt)p(lt[ht].object),delete lt[ht];delete q[X.id]}}}function x(X){for(let b in n){let Y=n[b],W=X.isInstancedMesh===!0?X.id:0,q=Y[W];if(q!==void 0){for(let lt in q){let ht=q[lt];for(let Mt in ht)p(ht[Mt].object),delete ht[Mt];delete q[lt]}delete Y[W],Object.keys(Y).length===0&&delete n[b]}}}function U(){G(),l=!0,r!==s&&(r=s,h(r.object))}function G(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:G,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:F,initAttributes:P,enableAttribute:A,disableUnusedAttributes:C}}function wm(i,t,e){let n;function s(u){n=u}function r(u,h){i.drawArrays(n,u,h),e.update(h,n,1)}function l(u,h,p){p!==0&&(i.drawArraysInstanced(n,u,h,p),e.update(h,n,p))}function o(u,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,p);let m=0;for(let T=0;T<p;T++)m+=h[T];e.update(m,n,1)}this.setMode=s,this.render=r,this.renderInstances=l,this.renderMultiDraw=o}function Tm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let F=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(F){return!(F!==ii&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(F){let x=F===pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==Xn&&F!==ni&&!x&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function u(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",p=u(h);p!==h&&(be("WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);let y=e.logarithmicDepthBuffer===!0,m=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&m===!1&&be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let T=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=i.getParameter(i.MAX_TEXTURE_SIZE),A=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),g=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:u,textureFormatReadable:l,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:y,reversedDepthBuffer:m,maxTextures:T,maxVertexTextures:v,maxTextureSize:P,maxCubemapSize:A,maxAttributes:d,maxVertexUniforms:C,maxVaryings:I,maxFragmentUniforms:g,maxSamples:R,samples:E}}function Em(i){let t=this,e=null,n=0,s=!1,r=!1,l=new $n,o=new Ce,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(y,m){let T=y.length!==0||m||n!==0||s;return s=m,n=y.length,T},this.beginShadows=function(){r=!0,p(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(y,m){e=p(y,m,0)},this.setState=function(y,m,T){let v=y.clippingPlanes,P=y.clipIntersection,A=y.clipShadows,d=i.get(y);if(!s||v===null||v.length===0||r&&!A)r?p(null):h();else{let C=r?0:n,I=C*4,g=d.clippingState||null;u.value=g,g=p(v,m,I,T);for(let R=0;R!==I;++R)g[R]=e[R];d.clippingState=g,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=C}};function h(){u.value!==e&&(u.value=e,u.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function p(y,m,T,v){let P=y!==null?y.length:0,A=null;if(P!==0){if(A=u.value,v!==!0||A===null){let d=T+P*4,C=m.matrixWorldInverse;o.getNormalMatrix(C),(A===null||A.length<d)&&(A=new Float32Array(d));for(let I=0,g=T;I!==P;++I,g+=4)l.copy(y[I]).applyMatrix4(C,o),l.normal.toArray(A,g),A[g+3]=l.constant}u.value=A,u.needsUpdate=!0}return t.numPlanes=P,t.numIntersection=0,A}}var ar=4,Am=6,Cm=20,Rm=256,la=new tr,Vu=new De,zc=null,Vc=0,Gc=0,Hc=!1,Im=new ot,ys=new ot,cl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:l=256,position:o=Im}=r;zc=this._renderer.getRenderTarget(),Vc=this._renderer.getActiveCubeFace(),Gc=this._renderer.getActiveMipmapLevel(),Hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);let u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,n,s,u,o),e>0&&this._blur(u,0,0,e),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(zc,Vc,Gc),this._renderer.xr.enabled=Hc,t.scissorTest=!1,rr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ns||t.mapping===xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zc=this._renderer.getRenderTarget(),Vc=this._renderer.getActiveCubeFace(),Gc=this._renderer.getActiveMipmapLevel(),Hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:pi,format:ii,colorSpace:Cr,depthBuffer:!1},s=Gu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gu(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Pm(r)),this._blurMaterial=Dm(r,t,e),this._ggxMaterial=Lm(r,t,e)}return s}_compileMaterial(t){let e=new Un(new Kn,t);this._renderer.compile(e,la)}_sceneToCubeUV(t,e,n,s,r){let u=new Dn(90,1,e,n),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],y=this._renderer,m=y.autoClear,T=y.toneMapping;y.getClearColor(Vu),y.toneMapping=di,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(s),y.clearDepth(),y.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Un(new Ks,new kr({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1})));let P=this._backgroundBox,A=P.material,d=!1,C=t.background;C?C.isColor&&(A.color.copy(C),t.background=null,d=!0):(A.color.copy(Vu),d=!0);for(let I=0;I<6;I++){let g=I%3;g===0?(u.up.set(0,h[I],0),u.position.set(r.x,r.y,r.z),u.lookAt(r.x+p[I],r.y,r.z)):g===1?(u.up.set(0,0,h[I]),u.position.set(r.x,r.y,r.z),u.lookAt(r.x,r.y+p[I],r.z)):(u.up.set(0,h[I],0),u.position.set(r.x,r.y,r.z),u.lookAt(r.x,r.y,r.z+p[I]));let R=this._cubeSize;rr(s,g*R,I>2?R:0,R,R),y.setRenderTarget(s),d&&y.render(P,u),y.render(t,u)}y.toneMapping=T,y.autoClear=m,t.background=C}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ns||t.mapping===xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hu());let r=s?this._cubemapMaterial:this._equirectMaterial,l=this._lodMeshes[0];l.material=r;let o=r.uniforms;o.envMap.value=t;let u=this._cubeSize;rr(e,0,0,3*u,2*u),n.setRenderTarget(e),n.render(l,la)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,l=this._ggxMaterial,o=this._lodMeshes[n];o.material=l;let u=l.uniforms,h=n/(this._lodMeshes.length-1),p=e/(this._lodMeshes.length-1),y=Math.sqrt(h*h-p*p),m=h*1.25,T=y*m,{_lodMax:v}=this,P=this._sizeLods[n],A=3*P*(n>v-ar?n-v+ar:0),d=4*(this._cubeSize-P);u.envMap.value=t.texture,u.roughness.value=T,u.mipInt.value=v-e,rr(r,A,d,3*P,2*P),s.setRenderTarget(r),s.render(o,la),u.envMap.value=r.texture,u.roughness.value=0,u.mipInt.value=v-n,rr(t,A,d,3*P,2*P),s.setRenderTarget(t),s.render(o,la)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,l=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,l),this._blurPass(r,t,n,n,l)}_blurPass(t,e,n,s,r){let l=this._renderer,o=this._blurMaterial,u=this._lodMeshes[s];u.material=o;let h=o.uniforms;h.envMap.value=t.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-n;let p=this._sizeLods[s],y=3*p*(s>this._lodMax-ar?s-this._lodMax+ar:0),m=4*(this._cubeSize-p);rr(e,y,m,3*p,2*p),l.setRenderTarget(e),l.render(u,la)}};function Pm(i){let t=[],e=[],n=i,s=i-ar+1+Am;for(let r=0;r<s;r++){let l=Math.pow(2,n);t.push(l);let o=1/(l-2),u=-o,h=1+o,p=[u,u,h,u,h,h,u,u,h,h,u,h],y=6,m=6,T=3,v=new Float32Array(T*m*y),P=new Float32Array(T*m*y);for(let d=0;d<y;d++){let C=d%3*2/3-1,I=d>2?0:-1,g=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];v.set(g,T*m*d);for(let R=0;R<m;R++){let E=p[R*2]*2-1,F=p[R*2+1]*2-1;d===0?ys.set(1,F,E):d===1?ys.set(-E,1,-F):d===2?ys.set(-E,F,1):d===3?ys.set(-1,F,-E):d===4?ys.set(-E,-1,F):ys.set(E,F,-1),ys.toArray(P,(d*m+R)*T)}}let A=new Kn;A.setAttribute("position",new Vn(v,T)),A.setAttribute("outputDirection",new Vn(P,T)),e.push(new Un(A,null)),n>ar&&n--}return{lodMeshes:e,sizeLods:t}}function Gu(i,t,e){let n=new Wn(i,t,e);return n.texture.mapping=Qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Lm(i,t,e){return new jn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Rm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:dl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Dm(i,t,e){return new jn({name:"SphericalGaussianBlur",defines:{SAMPLES:Cm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:dl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Hu(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Wu(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function dl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var hl=class extends Wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Gr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ks(5,5,5),r=new jn({name:"CubemapFromEquirect",uniforms:_s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kn,blending:wi});r.uniforms.tEquirect.value=e;let l=new Un(s,r),o=e.minFilter;return e.minFilter===Ti&&(e.minFilter=vn),new po(1,10,this).update(t,l),e.minFilter=o,l.geometry.dispose(),l.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let l=0;l<6;l++)t.setRenderTarget(this,l),t.clear(e,n,s);t.setRenderTarget(r)}};function Nm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(m,T=!1){return m==null?null:T?l(m):r(m)}function r(m){if(m&&m.isTexture){let T=m.mapping;if(T===xo||T===_o)if(t.has(m)){let v=t.get(m).texture;return o(v,m.mapping)}else{let v=m.image;if(v&&v.height>0){let P=new hl(v.height);return P.fromEquirectangularTexture(i,m),t.set(m,P),m.addEventListener("dispose",h),o(P.texture,m.mapping)}else return null}}return m}function l(m){if(m&&m.isTexture){let T=m.mapping,v=T===xo||T===_o,P=T===ns||T===xs;if(v||P){let A=e.get(m),d=A!==void 0?A.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==d)return n===null&&(n=new cl(i)),A=v?n.fromEquirectangular(m,A):n.fromCubemap(m,A),A.texture.pmremVersion=m.pmremVersion,e.set(m,A),A.texture;if(A!==void 0)return A.texture;{let C=m.image;return v&&C&&C.height>0||P&&C&&u(C)?(n===null&&(n=new cl(i)),A=v?n.fromEquirectangular(m):n.fromCubemap(m),A.texture.pmremVersion=m.pmremVersion,e.set(m,A),m.addEventListener("dispose",p),A.texture):null}}}return m}function o(m,T){return T===xo?m.mapping=ns:T===_o&&(m.mapping=xs),m}function u(m){let T=0,v=6;for(let P=0;P<v;P++)m[P]!==void 0&&T++;return T===v}function h(m){let T=m.target;T.removeEventListener("dispose",h);let v=t.get(T);v!==void 0&&(t.delete(T),v.dispose())}function p(m){let T=m.target;T.removeEventListener("dispose",p);let v=e.get(T);v!==void 0&&(e.delete(T),v.dispose())}function y(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:y}}function Um(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ds("WebGLRenderer: "+n+" extension not supported."),s}}}function Fm(i,t,e,n){let s={},r=new WeakMap;function l(y){let m=y.target;m.index!==null&&t.remove(m.index);for(let v in m.attributes)t.remove(m.attributes[v]);m.removeEventListener("dispose",l),delete s[m.id];let T=r.get(m);T&&(t.remove(T),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function o(y,m){return s[m.id]===!0||(m.addEventListener("dispose",l),s[m.id]=!0,e.memory.geometries++),m}function u(y){let m=y.attributes;for(let T in m)t.update(m[T],i.ARRAY_BUFFER)}function h(y){let m=[],T=y.index,v=y.attributes.position,P=0;if(v===void 0)return;if(T!==null){let C=T.array;P=T.version;for(let I=0,g=C.length;I<g;I+=3){let R=C[I+0],E=C[I+1],F=C[I+2];m.push(R,E,E,F,F,R)}}else{let C=v.array;P=v.version;for(let I=0,g=C.length/3-1;I<g;I+=3){let R=I+0,E=I+1,F=I+2;m.push(R,E,E,F,F,R)}}let A=new(v.count>=65535?Ur:Nr)(m,1);A.version=P;let d=r.get(y);d&&t.remove(d),r.set(y,A)}function p(y){let m=r.get(y);if(m){let T=y.index;T!==null&&m.version<T.version&&h(y)}else h(y);return r.get(y)}return{get:o,update:u,getWireframeAttribute:p}}function Om(i,t,e){let n;function s(y){n=y}let r,l;function o(y){r=y.type,l=y.bytesPerElement}function u(y,m){i.drawElements(n,m,r,y*l),e.update(m,n,1)}function h(y,m,T){T!==0&&(i.drawElementsInstanced(n,m,r,y*l,T),e.update(m,n,T))}function p(y,m,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,y,0,T);let P=0;for(let A=0;A<T;A++)P+=m[A];e.update(P,n,1)}this.setMode=s,this.setIndex=o,this.render=u,this.renderInstances=h,this.renderMultiDraw=p}function Bm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,l,o){switch(e.calls++,l){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Me("WebGLInfo: Unknown draw mode:",l);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function km(i,t,e){let n=new WeakMap,s=new dn;function r(l,o,u){let h=l.morphTargetInfluences,p=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,y=p!==void 0?p.length:0,m=n.get(o);if(m===void 0||m.count!==y){let U=function(){F.dispose(),n.delete(o),o.removeEventListener("dispose",U)};m!==void 0&&m.texture.dispose();let T=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,P=o.morphAttributes.color!==void 0,A=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],C=o.morphAttributes.color||[],I=0;T===!0&&(I=1),v===!0&&(I=2),P===!0&&(I=3);let g=o.attributes.position.count*I,R=1;g>t.maxTextureSize&&(R=Math.ceil(g/t.maxTextureSize),g=t.maxTextureSize);let E=new Float32Array(g*R*4*y),F=new fs(E,g,R,y);F.type=ni,F.needsUpdate=!0;let x=I*4;for(let G=0;G<y;G++){let X=A[G],b=d[G],Y=C[G],W=g*R*4*G;for(let q=0;q<X.count;q++){let lt=q*x;T===!0&&(s.fromBufferAttribute(X,q),E[W+lt+0]=s.x,E[W+lt+1]=s.y,E[W+lt+2]=s.z,E[W+lt+3]=0),v===!0&&(s.fromBufferAttribute(b,q),E[W+lt+4]=s.x,E[W+lt+5]=s.y,E[W+lt+6]=s.z,E[W+lt+7]=0),P===!0&&(s.fromBufferAttribute(Y,q),E[W+lt+8]=s.x,E[W+lt+9]=s.y,E[W+lt+10]=s.z,E[W+lt+11]=Y.itemSize===4?s.w:1)}}m={count:y,texture:F,size:new ze(g,R)},n.set(o,m),o.addEventListener("dispose",U)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",l.morphTexture,e);else{let T=0;for(let P=0;P<h.length;P++)T+=h[P];let v=o.morphTargetsRelative?1:1-T;u.getUniforms().setValue(i,"morphTargetBaseInfluence",v),u.getUniforms().setValue(i,"morphTargetInfluences",h)}u.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:r}}function zm(i,t,e,n,s){let r=new WeakMap;function l(h){let p=s.render.frame,y=h.geometry,m=t.get(h,y);if(r.get(m)!==p&&(t.update(m),r.set(m,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),r.get(h)!==p&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,p))),h.isSkinnedMesh){let T=h.skeleton;r.get(T)!==p&&(T.update(),r.set(T,p))}return m}function o(){r=new WeakMap}function u(h){let p=h.target;p.removeEventListener("dispose",u),n.releaseStatesOfObject(p),e.remove(p.instanceMatrix),p.instanceColor!==null&&e.remove(p.instanceColor)}return{update:l,dispose:o}}var Vm={[gc]:"LINEAR_TONE_MAPPING",[xc]:"REINHARD_TONE_MAPPING",[_c]:"CINEON_TONE_MAPPING",[jr]:"ACES_FILMIC_TONE_MAPPING",[vc]:"AGX_TONE_MAPPING",[Mc]:"NEUTRAL_TONE_MAPPING",[yc]:"CUSTOM_TONE_MAPPING"};function Gm(i,t,e,n,s,r){let l=new Wn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,u=null,h=new Kn;h.setAttribute("position",new Gn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Gn([0,2,0,0,2,0],2));let p=new js({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),y=new Un(h,p),m=new tr(-1,1,1,-1,0,1),T=null,v=null,P=!1,A,d=null,C=[],I=!1;this.setSize=function(g,R){l.setSize(g,R),o!==null&&o.setSize(g,R),u!==null&&u.setSize(g,R);for(let E=0;E<C.length;E++){let F=C[E];F.setSize&&F.setSize(g,R)}},this.setEffects=function(g){C=g,I=C.length>0&&C[0].isRenderPass===!0;let R=l.width,E=l.height;C.length>0&&o===null&&(o=new Wn(R,E,{type:pi,depthBuffer:!1,stencilBuffer:!1}),u=new Wn(R,E,{type:pi,depthBuffer:!1,stencilBuffer:!1}));for(let F=0;F<C.length;F++){let x=C[F];x.setSize&&x.setSize(R,E)}},this.begin=function(g,R){if(P||g.toneMapping===di&&C.length===0)return!1;if(d=R,R!==null){let E=R.width,F=R.height;(l.width!==E||l.height!==F)&&this.setSize(E,F)}return I===!1&&g.setRenderTarget(l),A=g.toneMapping,g.toneMapping=di,!0},this.hasRenderPass=function(){return I},this.end=function(g,R){g.toneMapping=A,P=!0;let E=l,F=o;for(let x=0;x<C.length;x++){let U=C[x];U.enabled!==!1&&(U.render(g,F,E,R),U.needsSwap!==!1&&(E=F,F=F===o?u:o))}if(T!==g.outputColorSpace||v!==g.toneMapping){T=g.outputColorSpace,v=g.toneMapping,p.defines={},We.getTransfer(T)===sn&&(p.defines.SRGB_TRANSFER="");let x=Vm[v];x&&(p.defines[x]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=E.texture,g.setRenderTarget(d),g.render(y,m),d=null,P=!1},this.isCompositing=function(){return P},this.dispose=function(){l.dispose(),o!==null&&o.dispose(),u!==null&&u.dispose(),h.dispose(),p.dispose()}}var hd=new Hn,qc=new Ki(1,1),ud=new fs,dd=new Qa,fd=new Gr,Xu=[],qu=[],Yu=new Float32Array(16),Zu=new Float32Array(9),Ju=new Float32Array(4);function lr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Xu[s];if(r===void 0&&(r=new Float32Array(s),Xu[s]=r),t!==0){n.toArray(r,0);for(let l=1,o=0;l!==t;++l)o+=e,i[l].toArray(r,o)}return r}function Mn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function bn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function fl(i,t){let e=qu[t];e===void 0&&(e=new Int32Array(t),qu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Hm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Wm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Mn(e,t))return;i.uniform2fv(this.addr,t),bn(e,t)}}function Xm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Mn(e,t))return;i.uniform3fv(this.addr,t),bn(e,t)}}function qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Mn(e,t))return;i.uniform4fv(this.addr,t),bn(e,t)}}function Ym(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Mn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),bn(e,t)}else{if(Mn(e,n))return;Ju.set(n),i.uniformMatrix2fv(this.addr,!1,Ju),bn(e,n)}}function Zm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Mn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),bn(e,t)}else{if(Mn(e,n))return;Zu.set(n),i.uniformMatrix3fv(this.addr,!1,Zu),bn(e,n)}}function Jm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Mn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),bn(e,t)}else{if(Mn(e,n))return;Yu.set(n),i.uniformMatrix4fv(this.addr,!1,Yu),bn(e,n)}}function $m(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Km(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Mn(e,t))return;i.uniform2iv(this.addr,t),bn(e,t)}}function jm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Mn(e,t))return;i.uniform3iv(this.addr,t),bn(e,t)}}function Qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Mn(e,t))return;i.uniform4iv(this.addr,t),bn(e,t)}}function tg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Mn(e,t))return;i.uniform2uiv(this.addr,t),bn(e,t)}}function ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Mn(e,t))return;i.uniform3uiv(this.addr,t),bn(e,t)}}function ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Mn(e,t))return;i.uniform4uiv(this.addr,t),bn(e,t)}}function sg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(qc.compareFunction=e.isReversedDepthBuffer()?rl:sl,r=qc):r=hd,e.setTexture2D(t||r,s)}function rg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||dd,s)}function ag(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||fd,s)}function og(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ud,s)}function lg(i){switch(i){case 5126:return Hm;case 35664:return Wm;case 35665:return Xm;case 35666:return qm;case 35674:return Ym;case 35675:return Zm;case 35676:return Jm;case 5124:case 35670:return $m;case 35667:case 35671:return Km;case 35668:case 35672:return jm;case 35669:case 35673:return Qm;case 5125:return tg;case 36294:return eg;case 36295:return ng;case 36296:return ig;case 35678:case 36198:case 36298:case 36306:case 35682:return sg;case 35679:case 36299:case 36307:return rg;case 35680:case 36300:case 36308:case 36293:return ag;case 36289:case 36303:case 36311:case 36292:return og}}function cg(i,t){i.uniform1fv(this.addr,t)}function hg(i,t){let e=lr(t,this.size,2);i.uniform2fv(this.addr,e)}function ug(i,t){let e=lr(t,this.size,3);i.uniform3fv(this.addr,e)}function dg(i,t){let e=lr(t,this.size,4);i.uniform4fv(this.addr,e)}function fg(i,t){let e=lr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function pg(i,t){let e=lr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function mg(i,t){let e=lr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function gg(i,t){i.uniform1iv(this.addr,t)}function xg(i,t){i.uniform2iv(this.addr,t)}function _g(i,t){i.uniform3iv(this.addr,t)}function yg(i,t){i.uniform4iv(this.addr,t)}function vg(i,t){i.uniform1uiv(this.addr,t)}function Mg(i,t){i.uniform2uiv(this.addr,t)}function bg(i,t){i.uniform3uiv(this.addr,t)}function Sg(i,t){i.uniform4uiv(this.addr,t)}function wg(i,t,e){let n=this.cache,s=t.length,r=fl(e,s);Mn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));let l;this.type===i.SAMPLER_2D_SHADOW?l=qc:l=hd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||l,r[o])}function Tg(i,t,e){let n=this.cache,s=t.length,r=fl(e,s);Mn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));for(let l=0;l!==s;++l)e.setTexture3D(t[l]||dd,r[l])}function Eg(i,t,e){let n=this.cache,s=t.length,r=fl(e,s);Mn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));for(let l=0;l!==s;++l)e.setTextureCube(t[l]||fd,r[l])}function Ag(i,t,e){let n=this.cache,s=t.length,r=fl(e,s);Mn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));for(let l=0;l!==s;++l)e.setTexture2DArray(t[l]||ud,r[l])}function Cg(i){switch(i){case 5126:return cg;case 35664:return hg;case 35665:return ug;case 35666:return dg;case 35674:return fg;case 35675:return pg;case 35676:return mg;case 5124:case 35670:return gg;case 35667:case 35671:return xg;case 35668:case 35672:return _g;case 35669:case 35673:return yg;case 5125:return vg;case 36294:return Mg;case 36295:return bg;case 36296:return Sg;case 35678:case 36198:case 36298:case 36306:case 35682:return wg;case 35679:case 36299:case 36307:return Tg;case 35680:case 36300:case 36308:case 36293:return Eg;case 36289:case 36303:case 36311:case 36292:return Ag}}var Yc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=lg(e.type)}},Zc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Cg(e.type)}},Jc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,l=s.length;r!==l;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Wc=/(\w+)(\])?(\[|\.)?/g;function $u(i,t){i.seq.push(t),i.map[t.id]=t}function Rg(i,t,e){let n=i.name,s=n.length;for(Wc.lastIndex=0;;){let r=Wc.exec(n),l=Wc.lastIndex,o=r[1],u=r[2]==="]",h=r[3];if(u&&(o=o|0),h===void 0||h==="["&&l+2===s){$u(e,h===void 0?new Yc(o,i,t):new Zc(o,i,t));break}else{let y=e.map[o];y===void 0&&(y=new Jc(o),$u(e,y)),e=y}}}var or=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let l=0;l<n;++l){let o=t.getActiveUniform(e,l),u=t.getUniformLocation(e,o.name);Rg(o,u,this)}let s=[],r=[];for(let l of this.seq)l.type===t.SAMPLER_2D_SHADOW||l.type===t.SAMPLER_CUBE_SHADOW||l.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(l):r.push(l);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,l=e.length;r!==l;++r){let o=e[r],u=n[o.id];u.needsUpdate!==!1&&o.setValue(t,u.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let l=t[s];l.id in e&&n.push(l)}return n}};function Ku(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Ig=37297,Pg=0;function Lg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let l=s;l<r;l++){let o=l+1;n.push(`${o===t?">":" "} ${o}: ${e[l]}`)}return n.join(`
`)}var ju=new Ce;function Dg(i){We._getMatrix(ju,We.workingColorSpace,i);let t=`mat3( ${ju.elements.map(e=>e.toFixed(4))} )`;switch(We.getTransfer(i)){case Rr:return[t,"LinearTransferOETF"];case sn:return[t,"sRGBTransferOETF"];default:return be("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Qu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let l=/ERROR: 0:(\d+)/.exec(r);if(l){let o=parseInt(l[1]);return e.toUpperCase()+`

`+r+`

`+Lg(i.getShaderSource(t),o)}else return r}function Ng(i,t){let e=Dg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Ug={[gc]:"Linear",[xc]:"Reinhard",[_c]:"Cineon",[jr]:"ACESFilmic",[vc]:"AgX",[Mc]:"Neutral",[yc]:"Custom"};function Fg(i,t){let e=Ug[t];return e===void 0?(be("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ll=new ot;function Og(){We.getLuminanceCoefficients(ll);let i=ll.x.toFixed(4),t=ll.y.toFixed(4),e=ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ha).join(`
`)}function kg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function zg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),l=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[l]={type:r.type,location:i.getAttribLocation(t,l),locationSize:o}}return e}function ha(i){return i!==""}function td(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ed(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Vg=/^[ \t]*#include +<([\w\d./]+)>/gm;function $c(i){return i.replace(Vg,Hg)}var Gg=new Map;function Hg(i,t){let e=Ne[t];if(e===void 0){let n=Gg.get(t);if(n!==void 0)e=Ne[n],be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return $c(e)}var Wg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nd(i){return i.replace(Wg,Xg)}function Xg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function id(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var qg={[ms]:"SHADOWMAP_TYPE_PCF",[er]:"SHADOWMAP_TYPE_VSM"};function Yg(i){return qg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Zg={[ns]:"ENVMAP_TYPE_CUBE",[xs]:"ENVMAP_TYPE_CUBE",[Qr]:"ENVMAP_TYPE_CUBE_UV"};function Jg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Zg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var $g={[xs]:"ENVMAP_MODE_REFRACTION"};function Kg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":$g[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var jg={[mc]:"ENVMAP_BLENDING_MULTIPLY",[Mu]:"ENVMAP_BLENDING_MIX",[bu]:"ENVMAP_BLENDING_ADD"};function Qg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":jg[i.combine]||"ENVMAP_BLENDING_NONE"}function t1(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function e1(i,t,e,n){let s=i.getContext(),r=e.defines,l=e.vertexShader,o=e.fragmentShader,u=Yg(e),h=Jg(e),p=Kg(e),y=Qg(e),m=t1(e),T=Bg(e),v=kg(r),P=s.createProgram(),A,d,C=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(A=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ha).join(`
`),A.length>0&&(A+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ha).join(`
`),d.length>0&&(d+=`
`)):(A=[id(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ha).join(`
`),d=[id(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",e.envMap?"#define "+y:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?Ne.tonemapping_pars_fragment:"",e.toneMapping!==di?Fg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,Ng("linearToOutputTexel",e.outputColorSpace),Og(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ha).join(`
`)),l=$c(l),l=td(l,e),l=ed(l,e),o=$c(o),o=td(o,e),o=ed(o,e),l=nd(l),o=nd(o),e.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,A=[T,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+A,d=["#define varying in",e.glslVersion===oa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===oa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let I=C+A+l,g=C+d+o,R=Ku(s,s.VERTEX_SHADER,I),E=Ku(s,s.FRAGMENT_SHADER,g);s.attachShader(P,R),s.attachShader(P,E),e.index0AttributeName!==void 0?s.bindAttribLocation(P,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(P,0,"position"),s.linkProgram(P);function F(X){if(i.debug.checkShaderErrors){let b=s.getProgramInfoLog(P)||"",Y=s.getShaderInfoLog(R)||"",W=s.getShaderInfoLog(E)||"",q=b.trim(),lt=Y.trim(),ht=W.trim(),Mt=!0,Z=!0;if(s.getProgramParameter(P,s.LINK_STATUS)===!1)if(Mt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,P,R,E);else{let _=Qu(s,R,"vertex"),bt=Qu(s,E,"fragment");Me("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(P,s.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+q+`
`+_+`
`+bt)}else q!==""?be("WebGLProgram: Program Info Log:",q):(lt===""||ht==="")&&(Z=!1);Z&&(X.diagnostics={runnable:Mt,programLog:q,vertexShader:{log:lt,prefix:A},fragmentShader:{log:ht,prefix:d}})}s.deleteShader(R),s.deleteShader(E),x=new or(s,P),U=zg(s,P)}let x;this.getUniforms=function(){return x===void 0&&F(this),x};let U;this.getAttributes=function(){return U===void 0&&F(this),U};let G=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=s.getProgramParameter(P,Ig)),G},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(P),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Pg++,this.cacheKey=t,this.usedTimes=1,this.program=P,this.vertexShader=R,this.fragmentShader=E,this}var n1=0,Kc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new jc(t),e.set(t,n)),n}},jc=class{constructor(t){this.id=n1++,this.code=t,this.usedTimes=0}};function i1(i){return i===ss||i===ra||i===aa}function s1(i,t,e,n,s,r){let l=new Zs,o=new Kc,u=new Set,h=[],p=new Map,y=n.logarithmicDepthBuffer,m=n.precision,T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return u.add(x),x===0?"uv":`uv${x}`}function P(x,U,G,X,b,Y){let W=X.fog,q=b.geometry,lt=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?X.environment:null,ht=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Mt=t.get(x.envMap||lt,ht),Z=Mt&&Mt.mapping===Qr?Mt.image.height:null,_=T[x.type];x.precision!==null&&(m=n.getMaxPrecision(x.precision),m!==x.precision&&be("WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));let bt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Jt=bt!==void 0?bt.length:0,Ct=0;q.morphAttributes.position!==void 0&&(Ct=1),q.morphAttributes.normal!==void 0&&(Ct=2),q.morphAttributes.color!==void 0&&(Ct=3);let J,me,Ue,xt;if(_){let Re=Ai[_];J=Re.vertexShader,me=Re.fragmentShader}else{J=x.vertexShader,me=x.fragmentShader;let Re=o.getVertexShaderStage(x),we=o.getFragmentShaderStage(x);o.update(x,Re,we),Ue=Re.id,xt=we.id}let pt=i.getRenderTarget(),jt=i.state.buffers.depth.getReversed(),re=b.isInstancedMesh===!0,$t=b.isBatchedMesh===!0,Te=!!x.map,Fe=!!x.matcap,Yt=!!Mt,ke=!!x.aoMap,Se=!!x.lightMap,ye=!!x.bumpMap&&x.wireframe===!1,ge=!!x.normalMap,Pe=!!x.displacementMap,je=!!x.emissiveMap,Ae=!!x.metalnessMap,Qe=!!x.roughnessMap,Q=x.anisotropy>0,qe=x.clearcoat>0,Le=x.dispersion>0,k=x.retroreflectivity>0,w=x.iridescence>0,st=x.sheen>0,at=x.transmission>0,ct=Q&&!!x.anisotropyMap,zt=qe&&!!x.clearcoatMap,Lt=qe&&!!x.clearcoatNormalMap,dt=qe&&!!x.clearcoatRoughnessMap,vt=w&&!!x.iridescenceMap,Ht=w&&!!x.iridescenceThicknessMap,Qt=st&&!!x.sheenColorMap,Rt=st&&!!x.sheenRoughnessMap,kt=!!x.specularMap,te=!!x.specularColorMap,_t=!!x.specularIntensityMap,Dt=at&&!!x.transmissionMap,V=at&&!!x.thicknessMap,Pt=!!x.gradientMap,mt=!!x.alphaMap,Et=x.alphaTest>0,It=!!x.alphaHash,Tt=!!x.extensions,oe=di;x.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(oe=i.toneMapping);let Wt={shaderID:_,shaderType:x.type,shaderName:x.name,vertexShader:J,fragmentShader:me,defines:x.defines,customVertexShaderID:Ue,customFragmentShaderID:xt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:$t,batchingColor:$t&&b._colorsTexture!==null,instancing:re,instancingColor:re&&b.instanceColor!==null,instancingMorph:re&&b.morphTexture!==null,outputColorSpace:pt===null?i.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:We.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Te,matcap:Fe,envMap:Yt,envMapMode:Yt&&Mt.mapping,envMapCubeUVHeight:Z,aoMap:ke,lightMap:Se,bumpMap:ye,normalMap:ge,displacementMap:Pe,emissiveMap:je,normalMapObjectSpace:ge&&x.normalMapType===Tu,normalMapTangentSpace:ge&&x.normalMapType===il,packedNormalMap:ge&&x.normalMapType===il&&i1(x.normalMap.format),metalnessMap:Ae,roughnessMap:Qe,anisotropy:Q,anisotropyMap:ct,clearcoat:qe,clearcoatMap:zt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:dt,dispersion:Le,retroreflection:k,iridescence:w,iridescenceMap:vt,iridescenceThicknessMap:Ht,sheen:st,sheenColorMap:Qt,sheenRoughnessMap:Rt,specularMap:kt,specularColorMap:te,specularIntensityMap:_t,transmission:at,transmissionMap:Dt,thicknessMap:V,gradientMap:Pt,opaque:x.transparent===!1&&x.blending===nr&&x.alphaToCoverage===!1,alphaMap:mt,alphaTest:Et,alphaHash:It,combine:x.combine,mapUv:Te&&v(x.map.channel),aoMapUv:ke&&v(x.aoMap.channel),lightMapUv:Se&&v(x.lightMap.channel),bumpMapUv:ye&&v(x.bumpMap.channel),normalMapUv:ge&&v(x.normalMap.channel),displacementMapUv:Pe&&v(x.displacementMap.channel),emissiveMapUv:je&&v(x.emissiveMap.channel),metalnessMapUv:Ae&&v(x.metalnessMap.channel),roughnessMapUv:Qe&&v(x.roughnessMap.channel),anisotropyMapUv:ct&&v(x.anisotropyMap.channel),clearcoatMapUv:zt&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ht&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:Qt&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&v(x.sheenRoughnessMap.channel),specularMapUv:kt&&v(x.specularMap.channel),specularColorMapUv:te&&v(x.specularColorMap.channel),specularIntensityMapUv:_t&&v(x.specularIntensityMap.channel),transmissionMapUv:Dt&&v(x.transmissionMap.channel),thicknessMapUv:V&&v(x.thicknessMap.channel),alphaMapUv:mt&&v(x.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(ge||Q),vertexNormals:!!q.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:b.isPoints===!0&&!!q.attributes.uv&&(Te||mt),fog:!!W,useFog:x.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||q.attributes.normal===void 0&&ge===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:jt,skinning:b.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Jt,morphTextureStride:Ct,numSunLights:U.sun.length,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numSunLightShadows:U.sunShadowMap.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:oe,decodeVideoTexture:Te&&x.map.isVideoTexture===!0&&We.getTransfer(x.map.colorSpace)===sn,decodeVideoTextureEmissive:je&&x.emissiveMap.isVideoTexture===!0&&We.getTransfer(x.emissiveMap.colorSpace)===sn,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ti,flipSided:x.side===kn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Tt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&x.extensions.multiDraw===!0||$t)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Wt.vertexUv1s=u.has(1),Wt.vertexUv2s=u.has(2),Wt.vertexUv3s=u.has(3),u.clear(),Wt}function A(x){let U=[];if(x.shaderID?U.push(x.shaderID):(U.push(x.customVertexShaderID),U.push(x.customFragmentShaderID)),x.defines!==void 0)for(let G in x.defines)U.push(G),U.push(x.defines[G]);return x.isRawShaderMaterial===!1&&(d(U,x),C(U,x),U.push(i.outputColorSpace)),U.push(x.customProgramCacheKey),U.join()}function d(x,U){x.push(U.precision),x.push(U.outputColorSpace),x.push(U.envMapMode),x.push(U.envMapCubeUVHeight),x.push(U.mapUv),x.push(U.alphaMapUv),x.push(U.lightMapUv),x.push(U.aoMapUv),x.push(U.bumpMapUv),x.push(U.normalMapUv),x.push(U.displacementMapUv),x.push(U.emissiveMapUv),x.push(U.metalnessMapUv),x.push(U.roughnessMapUv),x.push(U.anisotropyMapUv),x.push(U.clearcoatMapUv),x.push(U.clearcoatNormalMapUv),x.push(U.clearcoatRoughnessMapUv),x.push(U.iridescenceMapUv),x.push(U.iridescenceThicknessMapUv),x.push(U.sheenColorMapUv),x.push(U.sheenRoughnessMapUv),x.push(U.specularMapUv),x.push(U.specularColorMapUv),x.push(U.specularIntensityMapUv),x.push(U.transmissionMapUv),x.push(U.thicknessMapUv),x.push(U.combine),x.push(U.fogExp2),x.push(U.sizeAttenuation),x.push(U.morphTargetsCount),x.push(U.morphAttributeCount),x.push(U.numSunLights),x.push(U.numDirLights),x.push(U.numPointLights),x.push(U.numSpotLights),x.push(U.numSpotLightMaps),x.push(U.numHemiLights),x.push(U.numRectAreaLights),x.push(U.numSunLightShadows),x.push(U.numDirLightShadows),x.push(U.numPointLightShadows),x.push(U.numSpotLightShadows),x.push(U.numSpotLightShadowsWithMaps),x.push(U.numLightProbes),x.push(U.shadowMapType),x.push(U.toneMapping),x.push(U.numClippingPlanes),x.push(U.numClipIntersection),x.push(U.depthPacking)}function C(x,U){l.disableAll(),U.instancing&&l.enable(0),U.instancingColor&&l.enable(1),U.instancingMorph&&l.enable(2),U.matcap&&l.enable(3),U.envMap&&l.enable(4),U.normalMapObjectSpace&&l.enable(5),U.normalMapTangentSpace&&l.enable(6),U.clearcoat&&l.enable(7),U.iridescence&&l.enable(8),U.alphaTest&&l.enable(9),U.vertexColors&&l.enable(10),U.vertexAlphas&&l.enable(11),U.vertexUv1s&&l.enable(12),U.vertexUv2s&&l.enable(13),U.vertexUv3s&&l.enable(14),U.vertexTangents&&l.enable(15),U.anisotropy&&l.enable(16),U.alphaHash&&l.enable(17),U.batching&&l.enable(18),U.dispersion&&l.enable(19),U.retroreflection&&l.enable(24),U.batchingColor&&l.enable(20),U.gradientMap&&l.enable(21),U.packedNormalMap&&l.enable(22),U.vertexNormals&&l.enable(23),x.push(l.mask),l.disableAll(),U.fog&&l.enable(0),U.useFog&&l.enable(1),U.flatShading&&l.enable(2),U.logarithmicDepthBuffer&&l.enable(3),U.reversedDepthBuffer&&l.enable(4),U.skinning&&l.enable(5),U.morphTargets&&l.enable(6),U.morphNormals&&l.enable(7),U.morphColors&&l.enable(8),U.premultipliedAlpha&&l.enable(9),U.shadowMapEnabled&&l.enable(10),U.doubleSided&&l.enable(11),U.flipSided&&l.enable(12),U.useDepthPacking&&l.enable(13),U.dithering&&l.enable(14),U.transmission&&l.enable(15),U.sheen&&l.enable(16),U.opaque&&l.enable(17),U.pointsUvs&&l.enable(18),U.decodeVideoTexture&&l.enable(19),U.decodeVideoTextureEmissive&&l.enable(20),U.alphaToCoverage&&l.enable(21),U.numLightProbeGrids>0&&l.enable(22),U.hasPositionAttribute&&l.enable(23),x.push(l.mask)}function I(x){let U=T[x.type],G;if(U){let X=Ai[U];G=Bu.clone(X.uniforms)}else G=x.uniforms;return G}function g(x,U){let G=p.get(U);return G!==void 0?++G.usedTimes:(G=new e1(i,U,x,s),h.push(G),p.set(U,G)),G}function R(x){if(--x.usedTimes===0){let U=h.indexOf(x);h[U]=h[h.length-1],h.pop(),p.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function F(){o.dispose()}return{getParameters:P,getProgramCacheKey:A,getUniforms:I,acquireProgram:g,releaseProgram:R,releaseShaderCache:E,programs:h,dispose:F}}function r1(){let i=new WeakMap;function t(l){return i.has(l)}function e(l){let o=i.get(l);return o===void 0&&(o={},i.set(l,o)),o}function n(l){i.delete(l)}function s(l,o,u){i.get(l)[o]=u}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function a1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function sd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function rd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function l(m){let T=0;return m.isInstancedMesh&&(T+=2),m.isSkinnedMesh&&(T+=1),T}function o(m,T,v,P,A,d){let C=i[t];return C===void 0?(C={id:m.id,object:m,geometry:T,material:v,materialVariant:l(m),groupOrder:P,renderOrder:m.renderOrder,z:A,group:d},i[t]=C):(C.id=m.id,C.object=m,C.geometry=T,C.material=v,C.materialVariant=l(m),C.groupOrder=P,C.renderOrder=m.renderOrder,C.z=A,C.group=d),t++,C}function u(m,T,v,P,A,d,C){C.reversedDepth===!0&&(A=-A);let I=o(m,T,v,P,A,d);v.transmission>0?n.push(I):v.transparent===!0?s.push(I):e.push(I)}function h(m,T,v,P,A,d){let C=o(m,T,v,P,A,d);v.transmission>0?n.unshift(C):v.transparent===!0?s.unshift(C):e.unshift(C)}function p(m,T){e.length>1&&e.sort(m||a1),n.length>1&&n.sort(T||sd),s.length>1&&s.sort(T||sd)}function y(){for(let m=t,T=i.length;m<T;m++){let v=i[m];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:u,unshift:h,finish:y,sort:p}}function o1(){let i=new WeakMap;function t(n,s){let r=i.get(n),l;return r===void 0?(l=new rd,i.set(n,[l])):s>=r.length?(l=new rd,r.push(l)):l=r[s],l}function e(){i=new WeakMap}return{get:t,dispose:e}}function l1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new ot,color:new De};break;case"SpotLight":e={position:new ot,direction:new ot,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new ot,color:new De,distance:0,decay:0};break;case"HemisphereLight":e={direction:new ot,skyColor:new De,groundColor:new De};break;case"RectAreaLight":e={color:new De,position:new ot,halfWidth:new ot,halfHeight:new ot};break}return i[t.id]=e,e}}}function c1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var h1=0;function u1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function d1(i){let t=new l1,e=c1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new ot);let s=new ot,r=new Je,l=new Je;function o(h){let p=0,y=0,m=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let T=0,v=0,P=0,A=0,d=0,C=0,I=0,g=0,R=0,E=0,F=0,x=0,U=0,G=0;h.sort(u1);for(let b=0,Y=h.length;b<Y;b++){let W=h[b],q=W.color,lt=W.intensity,ht=W.distance,Mt=null;if(W.shadow&&W.shadow.map&&(W.shadow.map.texture.format===ss?Mt=W.shadow.map.texture:Mt=W.shadow.map.depthTexture||W.shadow.map.texture),W.isAmbientLight)p+=q.r*lt,y+=q.g*lt,m+=q.b*lt;else if(W.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(W.sh.coefficients[Z],lt);G++}else if(W.isSunLight){let Z=t.get(W);if(Z.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){let _=W.shadow,bt=e.get(W);bt.shadowIntensity=_.intensity,bt.shadowBias=_.bias,bt.shadowNormalBias=_.normalBias,bt.shadowRadius=_.radius,bt.shadowMapSize.copy(_.mapSize).multiply(_.getFrameExtents()),n.sunShadow[v]=bt,n.sunShadowMap[v]=Mt;let Jt=_.getViewportCount();for(let Ct=0;Ct<Jt;Ct++)n.sunShadowMatrix[P+Ct]=_.getMatrix(Ct),n.sunShadowCascade[P+Ct]=_._cascadeData[Ct];P+=Jt,v++}n.sun[T]=Z,T++}else if(W.isDirectionalLight){let Z=t.get(W);if(Z.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){let _=W.shadow,bt=e.get(W);bt.shadowIntensity=_.intensity,bt.shadowBias=_.bias,bt.shadowNormalBias=_.normalBias,bt.shadowRadius=_.radius,bt.shadowMapSize=_.mapSize,n.directionalShadow[A]=bt,n.directionalShadowMap[A]=Mt,n.directionalShadowMatrix[A]=W.shadow.matrix,R++}n.directional[A]=Z,A++}else if(W.isSpotLight){let Z=t.get(W);Z.position.setFromMatrixPosition(W.matrixWorld),Z.color.copy(q).multiplyScalar(lt),Z.distance=ht,Z.coneCos=Math.cos(W.angle),Z.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),Z.decay=W.decay,n.spot[C]=Z;let _=W.shadow;if(W.map&&(n.spotLightMap[x]=W.map,x++,_.updateMatrices(W),W.castShadow&&U++),n.spotLightMatrix[C]=_.matrix,W.castShadow){let bt=e.get(W);bt.shadowIntensity=_.intensity,bt.shadowBias=_.bias,bt.shadowNormalBias=_.normalBias,bt.shadowRadius=_.radius,bt.shadowMapSize=_.mapSize,n.spotShadow[C]=bt,n.spotShadowMap[C]=Mt,F++}C++}else if(W.isRectAreaLight){let Z=t.get(W);Z.color.copy(q).multiplyScalar(lt),Z.halfWidth.set(W.width*.5,0,0),Z.halfHeight.set(0,W.height*.5,0),n.rectArea[I]=Z,I++}else if(W.isPointLight){let Z=t.get(W);if(Z.color.copy(W.color).multiplyScalar(W.intensity),Z.distance=W.distance,Z.decay=W.decay,W.castShadow){let _=W.shadow,bt=e.get(W);bt.shadowIntensity=_.intensity,bt.shadowBias=_.bias,bt.shadowNormalBias=_.normalBias,bt.shadowRadius=_.radius,bt.shadowMapSize=_.mapSize,bt.shadowCameraNear=_.camera.near,bt.shadowCameraFar=_.camera.far,n.pointShadow[d]=bt,n.pointShadowMap[d]=Mt,n.pointShadowMatrix[d]=W.shadow.matrix,E++}n.point[d]=Z,d++}else if(W.isHemisphereLight){let Z=t.get(W);Z.skyColor.copy(W.color).multiplyScalar(lt),Z.groundColor.copy(W.groundColor).multiplyScalar(lt),n.hemi[g]=Z,g++}}I>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ne.LTC_FLOAT_1,n.rectAreaLTC2=ne.LTC_FLOAT_2):(n.rectAreaLTC1=ne.LTC_HALF_1,n.rectAreaLTC2=ne.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=y,n.ambient[2]=m;let X=n.hash;(X.sunLength!==T||X.directionalLength!==A||X.pointLength!==d||X.spotLength!==C||X.rectAreaLength!==I||X.hemiLength!==g||X.numSunShadows!==v||X.numDirectionalShadows!==R||X.numPointShadows!==E||X.numSpotShadows!==F||X.numSpotMaps!==x||X.numLightProbes!==G)&&(n.sun.length=T,n.directional.length=A,n.spot.length=C,n.rectArea.length=I,n.point.length=d,n.hemi.length=g,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=P,n.sunShadowCascade.length=P,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=F,n.spotShadowMap.length=F,n.spotLightMatrix.length=F+x-U,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=G,X.sunLength=T,X.directionalLength=A,X.pointLength=d,X.spotLength=C,X.rectAreaLength=I,X.hemiLength=g,X.numSunShadows=v,X.numDirectionalShadows=R,X.numPointShadows=E,X.numSpotShadows=F,X.numSpotMaps=x,X.numLightProbes=G,n.version=h1++)}function u(h,p){let y=0,m=0,T=0,v=0,P=0,A=0,d=p.matrixWorldInverse;for(let C=0,I=h.length;C<I;C++){let g=h[C];if(g.isSunLight){let R=n.sun[y];R.direction.setFromMatrixPosition(g.matrixWorld),R.direction.transformDirection(d),y++}else if(g.isDirectionalLight){let R=n.directional[m];R.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(d),m++}else if(g.isSpotLight){let R=n.spot[v];R.position.setFromMatrixPosition(g.matrixWorld),R.position.applyMatrix4(d),R.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(d),v++}else if(g.isRectAreaLight){let R=n.rectArea[P];R.position.setFromMatrixPosition(g.matrixWorld),R.position.applyMatrix4(d),l.identity(),r.copy(g.matrixWorld),r.premultiply(d),l.extractRotation(r),R.halfWidth.set(g.width*.5,0,0),R.halfHeight.set(0,g.height*.5,0),R.halfWidth.applyMatrix4(l),R.halfHeight.applyMatrix4(l),P++}else if(g.isPointLight){let R=n.point[T];R.position.setFromMatrixPosition(g.matrixWorld),R.position.applyMatrix4(d),T++}else if(g.isHemisphereLight){let R=n.hemi[A];R.direction.setFromMatrixPosition(g.matrixWorld),R.direction.transformDirection(d),A++}}}return{setup:o,setupView:u,state:n}}function ad(i){let t=new d1(i),e=[],n=[],s=[];function r(m){y.camera=m,e.length=0,n.length=0,s.length=0}function l(m){e.push(m)}function o(m){n.push(m)}function u(m){s.push(m)}function h(){t.setup(e)}function p(m){t.setupView(e,m)}let y={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:y,setupLights:h,setupLightsView:p,pushLight:l,pushShadow:o,pushLightProbeGrid:u}}function f1(i){let t=new WeakMap;function e(s,r=0){let l=t.get(s),o;return l===void 0?(o=new ad(i),t.set(s,[o])):r>=l.length?(o=new ad(i),l.push(o)):o=l[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var p1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,g1=[new ot(1,0,0),new ot(-1,0,0),new ot(0,1,0),new ot(0,-1,0),new ot(0,0,1),new ot(0,0,-1)],x1=[new ot(0,-1,0),new ot(0,-1,0),new ot(0,0,1),new ot(0,0,-1),new ot(0,-1,0),new ot(0,-1,0)],od=new Je,ca=new ot,Xc=new ot;function _1(i,t,e){let n=new $s,s=new ze,r=new ze,l=new dn,o=new Qs,u=new eo,h={},p=e.maxTextureSize,y={[es]:kn,[kn]:es,[ti]:ti},m=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:p1,fragmentShader:m1}),T=m.clone();T.defines.HORIZONTAL_PASS=1;let v=new Kn;v.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let P=new Un(v,m),A=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ms;let d=this.type;this.render=function(E,F,x){if(A.enabled===!1||A.autoUpdate===!1&&A.needsUpdate===!1||E.length===0)return;this.type===nu&&(be("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ms);let U=i.getRenderTarget(),G=i.getActiveCubeFace(),X=i.getActiveMipmapLevel(),b=i.state;b.setBlending(wi),b.buffers.depth.getReversed()===!0?b.buffers.color.setClear(0,0,0,0):b.buffers.color.setClear(1,1,1,1),b.buffers.depth.setTest(!0),b.setScissorTest(!1);let Y=d!==this.type;Y&&F.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(q=>q.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,q=E.length;W<q;W++){let lt=E[W],ht=lt.shadow;if(ht===void 0){be("WebGLShadowMap:",lt,"has no shadow.");continue}if(ht.autoUpdate===!1&&ht.needsUpdate===!1)continue;s.copy(ht.mapSize);let Mt=ht.getFrameExtents();s.multiply(Mt),r.copy(ht.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(r.x=Math.floor(p/Mt.x),s.x=r.x*Mt.x,ht.mapSize.x=r.x),s.y>p&&(r.y=Math.floor(p/Mt.y),s.y=r.y*Mt.y,ht.mapSize.y=r.y));let Z=i.state.buffers.depth.getReversed();if(ht.camera._reversedDepth=Z,ht.map===null||Y===!0){if(ht.map!==null&&(ht.map.depthTexture!==null&&(ht.map.depthTexture.dispose(),ht.map.depthTexture=null),ht.map.dispose()),this.type===er){if(lt.isPointLight){be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ht.map=new Wn(s.x,s.y,{format:ss,type:pi,minFilter:vn,magFilter:vn,generateMipmaps:!1}),ht.map.texture.name=lt.name+".shadowMap",ht.map.depthTexture=new Ki(s.x,s.y,ni),ht.map.depthTexture.name=lt.name+".shadowMapDepth",ht.map.depthTexture.format=vi,ht.map.depthTexture.compareFunction=null,ht.map.depthTexture.minFilter=Tn,ht.map.depthTexture.magFilter=Tn}else lt.isPointLight?(ht.map=new hl(s.x),ht.map.depthTexture=new to(s.x,fi)):(ht.map=new Wn(s.x,s.y),ht.map.depthTexture=new Ki(s.x,s.y,fi)),ht.map.depthTexture.name=lt.name+".shadowMap",ht.map.depthTexture.format=vi,this.type===ms?(ht.map.depthTexture.compareFunction=Z?rl:sl,ht.map.depthTexture.minFilter=vn,ht.map.depthTexture.magFilter=vn):(ht.map.depthTexture.compareFunction=null,ht.map.depthTexture.minFilter=Tn,ht.map.depthTexture.magFilter=Tn);ht.camera.updateProjectionMatrix()}ht.map.isWebGLCubeRenderTarget!==!0&&(ht.map.width!==s.x||ht.map.height!==s.y)&&ht.map.setSize(s.x,s.y);let _=ht.map.isWebGLCubeRenderTarget?6:ht.getViewportCount();lt.isPointLight!==!0&&ht.updateMatrices(lt,x);for(let bt=0;bt<_;bt++){let Jt=ht.getCamera(bt);if(lt.isPointLight){let Ct=ht.camera,J=ht.matrix,me=lt.distance||Ct.far;me!==Ct.far&&(Ct.far=me,Ct.updateProjectionMatrix()),ca.setFromMatrixPosition(lt.matrixWorld),Ct.position.copy(ca),Xc.copy(Ct.position),Xc.add(g1[bt]),Ct.up.copy(x1[bt]),Ct.lookAt(Xc),Ct.updateMatrixWorld(),J.makeTranslation(-ca.x,-ca.y,-ca.z),od.multiplyMatrices(Ct.projectionMatrix,Ct.matrixWorldInverse),ht._frustum.setFromProjectionMatrix(od,Ct.coordinateSystem,Ct.reversedDepth)}if(ht.map.isWebGLCubeRenderTarget)i.setRenderTarget(ht.map,bt),i.clear();else{bt===0&&(i.setRenderTarget(ht.map),i.clear());let Ct=ht.getViewport(bt);l.set(r.x*Ct.x,r.y*Ct.y,r.x*Ct.z,r.y*Ct.w),b.viewport(l)}n=ht.getFrustum(bt),g(F,x,Jt,lt,this.type)}ht.isPointLightShadow!==!0&&this.type===er&&C(ht,x),ht.needsUpdate=!1}d=this.type,A.needsUpdate=!1,i.setRenderTarget(U,G,X)};function C(E,F){let x=t.update(P);m.defines.VSM_SAMPLES!==E.blurSamples&&(m.defines.VSM_SAMPLES=E.blurSamples,T.defines.VSM_SAMPLES=E.blurSamples,m.needsUpdate=!0,T.needsUpdate=!0),E.mapPass===null?E.mapPass=new Wn(s.x,s.y,{format:ss,type:pi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),m.uniforms.shadow_pass.value=E.map.depthTexture,m.uniforms.resolution.value.set(E.map.width,E.map.height),m.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(F,null,x,m,P,null),T.uniforms.shadow_pass.value=E.mapPass.texture,T.uniforms.resolution.value.set(E.map.width,E.map.height),T.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(F,null,x,T,P,null)}function I(E,F,x,U){let G=null,X=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(X!==void 0)G=X;else if(G=x.isPointLight===!0?u:o,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){let b=G.uuid,Y=F.uuid,W=h[b];W===void 0&&(W={},h[b]=W);let q=W[Y];q===void 0&&(q=G.clone(),W[Y]=q,F.addEventListener("dispose",R)),G=q}if(G.visible=F.visible,G.wireframe=F.wireframe,U===er?G.side=F.shadowSide!==null?F.shadowSide:F.side:G.side=F.shadowSide!==null?F.shadowSide:y[F.side],G.alphaMap=F.alphaMap,G.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,G.map=F.map,G.clipShadows=F.clipShadows,G.clippingPlanes=F.clippingPlanes,G.clipIntersection=F.clipIntersection,G.displacementMap=F.displacementMap,G.displacementScale=F.displacementScale,G.displacementBias=F.displacementBias,G.wireframeLinewidth=F.wireframeLinewidth,G.linewidth=F.linewidth,x.isPointLight===!0&&G.isMeshDistanceMaterial===!0){let b=i.properties.get(G);b.light=x}return G}function g(E,F,x,U,G){if(E.visible===!1)return;if(E.layers.test(F.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&G===er)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);let Y=t.update(E),W=E.material;if(Array.isArray(W)){let q=Y.groups;for(let lt=0,ht=q.length;lt<ht;lt++){let Mt=q[lt],Z=W[Mt.materialIndex];if(Z&&Z.visible){let _=I(E,Z,U,G);E.onBeforeShadow(i,E,F,x,Y,_,Mt),i.renderBufferDirect(x,null,Y,_,E,Mt),E.onAfterShadow(i,E,F,x,Y,_,Mt)}}}else if(W.visible){let q=I(E,W,U,G);E.onBeforeShadow(i,E,F,x,Y,q,null),i.renderBufferDirect(x,null,Y,q,E,null),E.onAfterShadow(i,E,F,x,Y,q,null)}}let b=E.children;for(let Y=0,W=b.length;Y<W;Y++)g(b[Y],F,x,U,G)}function R(E){E.target.removeEventListener("dispose",R);for(let x in h){let U=h[x],G=E.target.uuid;G in U&&(U[G].dispose(),delete U[G])}}}function y1(i,t){function e(){let V=!1,Pt=new dn,mt=null,Et=new dn(0,0,0,0);return{setMask:function(It){mt!==It&&!V&&(i.colorMask(It,It,It,It),mt=It)},setLocked:function(It){V=It},setClear:function(It,Tt,oe,Wt,Re){Re===!0&&(It*=Wt,Tt*=Wt,oe*=Wt),Pt.set(It,Tt,oe,Wt),Et.equals(Pt)===!1&&(i.clearColor(It,Tt,oe,Wt),Et.copy(Pt))},reset:function(){V=!1,mt=null,Et.set(-1,0,0,0)}}}function n(){let V=!1,Pt=!1,mt=null,Et=null,It=null;return{setReversed:function(Tt){if(Pt!==Tt){let oe=t.get("EXT_clip_control");Tt?oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT):oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT),Pt=Tt;let Wt=It;It=null,this.setClear(Wt)}},getReversed:function(){return Pt},setTest:function(Tt){Tt?pt(i.DEPTH_TEST):jt(i.DEPTH_TEST)},setMask:function(Tt){mt!==Tt&&!V&&(i.depthMask(Tt),mt=Tt)},setFunc:function(Tt){if(Pt&&(Tt=Fu[Tt]),Et!==Tt){switch(Tt){case Va:i.depthFunc(i.NEVER);break;case Ga:i.depthFunc(i.ALWAYS);break;case Ha:i.depthFunc(i.LESS);break;case Hs:i.depthFunc(i.LEQUAL);break;case Wa:i.depthFunc(i.EQUAL);break;case Xa:i.depthFunc(i.GEQUAL);break;case qa:i.depthFunc(i.GREATER);break;case Ya:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Et=Tt}},setLocked:function(Tt){V=Tt},setClear:function(Tt){It!==Tt&&(It=Tt,Pt&&(Tt=1-Tt),i.clearDepth(Tt))},reset:function(){V=!1,mt=null,Et=null,It=null,Pt=!1}}}function s(){let V=!1,Pt=null,mt=null,Et=null,It=null,Tt=null,oe=null,Wt=null,Re=null;return{setTest:function(we){V||(we?pt(i.STENCIL_TEST):jt(i.STENCIL_TEST))},setMask:function(we){Pt!==we&&!V&&(i.stencilMask(we),Pt=we)},setFunc:function(we,yn,H){(mt!==we||Et!==yn||It!==H)&&(i.stencilFunc(we,yn,H),mt=we,Et=yn,It=H)},setOp:function(we,yn,H){(Tt!==we||oe!==yn||Wt!==H)&&(i.stencilOp(we,yn,H),Tt=we,oe=yn,Wt=H)},setLocked:function(we){V=we},setClear:function(we){Re!==we&&(i.clearStencil(we),Re=we)},reset:function(){V=!1,Pt=null,mt=null,Et=null,It=null,Tt=null,oe=null,Wt=null,Re=null}}}let r=new e,l=new n,o=new s,u=new WeakMap,h=new WeakMap,p={},y={},m={},T=new WeakMap,v=[],P=null,A=!1,d=null,C=null,I=null,g=null,R=null,E=null,F=null,x=new De(0,0,0),U=0,G=!1,X=null,b=null,Y=null,W=null,q=null,lt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ht=!1,Mt=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(Mt=parseFloat(/^WebGL (\d)/.exec(Z)[1]),ht=Mt>=1):Z.indexOf("OpenGL ES")!==-1&&(Mt=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),ht=Mt>=2);let _=null,bt={},Jt=i.getParameter(i.SCISSOR_BOX),Ct=i.getParameter(i.VIEWPORT),J=new dn().fromArray(Jt),me=new dn().fromArray(Ct);function Ue(V,Pt,mt,Et){let It=new Uint8Array(4),Tt=i.createTexture();i.bindTexture(V,Tt),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let oe=0;oe<mt;oe++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(Pt,0,i.RGBA,1,1,Et,0,i.RGBA,i.UNSIGNED_BYTE,It):i.texImage2D(Pt+oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,It);return Tt}let xt={};xt[i.TEXTURE_2D]=Ue(i.TEXTURE_2D,i.TEXTURE_2D,1),xt[i.TEXTURE_CUBE_MAP]=Ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[i.TEXTURE_2D_ARRAY]=Ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xt[i.TEXTURE_3D]=Ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),l.setClear(1),o.setClear(0),pt(i.DEPTH_TEST),l.setFunc(Hs),ye(!1),ge(cc),pt(i.CULL_FACE),ke(wi);function pt(V){p[V]!==!0&&(i.enable(V),p[V]=!0)}function jt(V){p[V]!==!1&&(i.disable(V),p[V]=!1)}function re(V,Pt){return m[V]!==Pt?(i.bindFramebuffer(V,Pt),m[V]=Pt,V===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=Pt),V===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=Pt),!0):!1}function $t(V,Pt){let mt=v,Et=!1;if(V){mt=T.get(Pt),mt===void 0&&(mt=[],T.set(Pt,mt));let It=V.textures;if(mt.length!==It.length||mt[0]!==i.COLOR_ATTACHMENT0){for(let Tt=0,oe=It.length;Tt<oe;Tt++)mt[Tt]=i.COLOR_ATTACHMENT0+Tt;mt.length=It.length,Et=!0}}else mt[0]!==i.BACK&&(mt[0]=i.BACK,Et=!0);Et&&i.drawBuffers(mt)}function Te(V){return P!==V?(i.useProgram(V),P=V,!0):!1}let Fe={[gs]:i.FUNC_ADD,[su]:i.FUNC_SUBTRACT,[ru]:i.FUNC_REVERSE_SUBTRACT};Fe[au]=i.MIN,Fe[ou]=i.MAX;let Yt={[lu]:i.ZERO,[cu]:i.ONE,[hu]:i.SRC_COLOR,[fc]:i.SRC_ALPHA,[gu]:i.SRC_ALPHA_SATURATE,[pu]:i.DST_COLOR,[du]:i.DST_ALPHA,[uu]:i.ONE_MINUS_SRC_COLOR,[pc]:i.ONE_MINUS_SRC_ALPHA,[mu]:i.ONE_MINUS_DST_COLOR,[fu]:i.ONE_MINUS_DST_ALPHA,[xu]:i.CONSTANT_COLOR,[_u]:i.ONE_MINUS_CONSTANT_COLOR,[yu]:i.CONSTANT_ALPHA,[vu]:i.ONE_MINUS_CONSTANT_ALPHA};function ke(V,Pt,mt,Et,It,Tt,oe,Wt,Re,we){if(V===wi){A===!0&&(jt(i.BLEND),A=!1);return}if(A===!1&&(pt(i.BLEND),A=!0),V!==iu){if(V!==d||we!==G){if((C!==gs||R!==gs)&&(i.blendEquation(i.FUNC_ADD),C=gs,R=gs),we)switch(V){case nr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hc:i.blendFunc(i.ONE,i.ONE);break;case uc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case dc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Me("WebGLState: Invalid blending: ",V);break}else switch(V){case nr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case uc:Me("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dc:Me("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Me("WebGLState: Invalid blending: ",V);break}I=null,g=null,E=null,F=null,x.set(0,0,0),U=0,d=V,G=we}return}It=It||Pt,Tt=Tt||mt,oe=oe||Et,(Pt!==C||It!==R)&&(i.blendEquationSeparate(Fe[Pt],Fe[It]),C=Pt,R=It),(mt!==I||Et!==g||Tt!==E||oe!==F)&&(i.blendFuncSeparate(Yt[mt],Yt[Et],Yt[Tt],Yt[oe]),I=mt,g=Et,E=Tt,F=oe),(Wt.equals(x)===!1||Re!==U)&&(i.blendColor(Wt.r,Wt.g,Wt.b,Re),x.copy(Wt),U=Re),d=V,G=!1}function Se(V,Pt){V.side===ti?jt(i.CULL_FACE):pt(i.CULL_FACE);let mt=V.side===kn;Pt&&(mt=!mt),ye(mt),V.blending===nr&&V.transparent===!1?ke(wi):ke(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),l.setFunc(V.depthFunc),l.setTest(V.depthTest),l.setMask(V.depthWrite),r.setMask(V.colorWrite);let Et=V.stencilWrite;o.setTest(Et),Et&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),je(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?pt(i.SAMPLE_ALPHA_TO_COVERAGE):jt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ye(V){X!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),X=V)}function ge(V){V!==tu?(pt(i.CULL_FACE),V!==b&&(V===cc?i.cullFace(i.BACK):V===eu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):jt(i.CULL_FACE),b=V}function Pe(V){V!==Y&&(ht&&i.lineWidth(V),Y=V)}function je(V,Pt,mt){V?(pt(i.POLYGON_OFFSET_FILL),(W!==Pt||q!==mt)&&(W=Pt,q=mt,l.getReversed()&&(Pt=-Pt),i.polygonOffset(Pt,mt))):jt(i.POLYGON_OFFSET_FILL)}function Ae(V){V?pt(i.SCISSOR_TEST):jt(i.SCISSOR_TEST)}function Qe(V){V===void 0&&(V=i.TEXTURE0+lt-1),_!==V&&(i.activeTexture(V),_=V)}function Q(V,Pt,mt){mt===void 0&&(_===null?mt=i.TEXTURE0+lt-1:mt=_);let Et=bt[mt];Et===void 0&&(Et={type:void 0,texture:void 0},bt[mt]=Et),(Et.type!==V||Et.texture!==Pt)&&(_!==mt&&(i.activeTexture(mt),_=mt),i.bindTexture(V,Pt||xt[V]),Et.type=V,Et.texture=Pt)}function qe(){let V=bt[_];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Le(){try{i.compressedTexImage2D(...arguments)}catch(V){Me("WebGLState:",V)}}function k(){try{i.compressedTexImage3D(...arguments)}catch(V){Me("WebGLState:",V)}}function w(){try{i.texSubImage2D(...arguments)}catch(V){Me("WebGLState:",V)}}function st(){try{i.texSubImage3D(...arguments)}catch(V){Me("WebGLState:",V)}}function at(){try{i.compressedTexSubImage2D(...arguments)}catch(V){Me("WebGLState:",V)}}function ct(){try{i.compressedTexSubImage3D(...arguments)}catch(V){Me("WebGLState:",V)}}function zt(){try{i.texStorage2D(...arguments)}catch(V){Me("WebGLState:",V)}}function Lt(){try{i.texStorage3D(...arguments)}catch(V){Me("WebGLState:",V)}}function dt(){try{i.texImage2D(...arguments)}catch(V){Me("WebGLState:",V)}}function vt(){try{i.texImage3D(...arguments)}catch(V){Me("WebGLState:",V)}}function Ht(V){return y[V]!==void 0?y[V]:i.getParameter(V)}function Qt(V,Pt){y[V]!==Pt&&(i.pixelStorei(V,Pt),y[V]=Pt)}function Rt(V){J.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),J.copy(V))}function kt(V){me.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),me.copy(V))}function te(V,Pt){let mt=h.get(Pt);mt===void 0&&(mt=new WeakMap,h.set(Pt,mt));let Et=mt.get(V);Et===void 0&&(Et=i.getUniformBlockIndex(Pt,V.name),mt.set(V,Et))}function _t(V,Pt){let Et=h.get(Pt).get(V);u.get(Pt)!==Et&&(i.uniformBlockBinding(Pt,Et,V.__bindingPointIndex),u.set(Pt,Et))}function Dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),l.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),p={},y={},_=null,bt={},m={},T=new WeakMap,v=[],P=null,A=!1,d=null,C=null,I=null,g=null,R=null,E=null,F=null,x=new De(0,0,0),U=0,G=!1,X=null,b=null,Y=null,W=null,q=null,J.set(0,0,i.canvas.width,i.canvas.height),me.set(0,0,i.canvas.width,i.canvas.height),r.reset(),l.reset(),o.reset()}return{buffers:{color:r,depth:l,stencil:o},enable:pt,disable:jt,bindFramebuffer:re,drawBuffers:$t,useProgram:Te,setBlending:ke,setMaterial:Se,setFlipSided:ye,setCullFace:ge,setLineWidth:Pe,setPolygonOffset:je,setScissorTest:Ae,activeTexture:Qe,bindTexture:Q,unbindTexture:qe,compressedTexImage2D:Le,compressedTexImage3D:k,texImage2D:dt,texImage3D:vt,pixelStorei:Qt,getParameter:Ht,updateUBOMapping:te,uniformBlockBinding:_t,texStorage2D:zt,texStorage3D:Lt,texSubImage2D:w,texSubImage3D:st,compressedTexSubImage2D:at,compressedTexSubImage3D:ct,scissor:Rt,viewport:kt,reset:Dt}}function v1(i,t,e,n,s,r,l){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ze,p=new WeakMap,y=new Set,m,T=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(k,w){return v?new OffscreenCanvas(k,w):Ir("canvas")}function A(k,w,st){let at=1,ct=Le(k);if((ct.width>st||ct.height>st)&&(at=st/Math.max(ct.width,ct.height)),at<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){let zt=Math.floor(at*ct.width),Lt=Math.floor(at*ct.height);m===void 0&&(m=P(zt,Lt));let dt=w?P(zt,Lt):m;return dt.width=zt,dt.height=Lt,dt.getContext("2d").drawImage(k,0,0,zt,Lt),be("WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+zt+"x"+Lt+")."),dt}else return"data"in k&&be("WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),k;return k}function d(k){return k.generateMipmaps}function C(k){i.generateMipmap(k)}function I(k){return k.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?i.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function g(k,w,st,at,ct,zt=!1){if(k!==null){if(i[k]!==void 0)return i[k];be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let Lt;at&&(Lt=t.get("EXT_texture_norm16"),Lt||be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let dt=w;if(w===i.RED&&(st===i.FLOAT&&(dt=i.R32F),st===i.HALF_FLOAT&&(dt=i.R16F),st===i.UNSIGNED_BYTE&&(dt=i.R8),st===i.UNSIGNED_SHORT&&Lt&&(dt=Lt.R16_EXT),st===i.SHORT&&Lt&&(dt=Lt.R16_SNORM_EXT)),w===i.RED_INTEGER&&(st===i.UNSIGNED_BYTE&&(dt=i.R8UI),st===i.UNSIGNED_SHORT&&(dt=i.R16UI),st===i.UNSIGNED_INT&&(dt=i.R32UI),st===i.BYTE&&(dt=i.R8I),st===i.SHORT&&(dt=i.R16I),st===i.INT&&(dt=i.R32I)),w===i.RG&&(st===i.FLOAT&&(dt=i.RG32F),st===i.HALF_FLOAT&&(dt=i.RG16F),st===i.UNSIGNED_BYTE&&(dt=i.RG8),st===i.UNSIGNED_SHORT&&Lt&&(dt=Lt.RG16_EXT),st===i.SHORT&&Lt&&(dt=Lt.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(st===i.UNSIGNED_BYTE&&(dt=i.RG8UI),st===i.UNSIGNED_SHORT&&(dt=i.RG16UI),st===i.UNSIGNED_INT&&(dt=i.RG32UI),st===i.BYTE&&(dt=i.RG8I),st===i.SHORT&&(dt=i.RG16I),st===i.INT&&(dt=i.RG32I)),w===i.RGB_INTEGER&&(st===i.UNSIGNED_BYTE&&(dt=i.RGB8UI),st===i.UNSIGNED_SHORT&&(dt=i.RGB16UI),st===i.UNSIGNED_INT&&(dt=i.RGB32UI),st===i.BYTE&&(dt=i.RGB8I),st===i.SHORT&&(dt=i.RGB16I),st===i.INT&&(dt=i.RGB32I)),w===i.RGBA_INTEGER&&(st===i.UNSIGNED_BYTE&&(dt=i.RGBA8UI),st===i.UNSIGNED_SHORT&&(dt=i.RGBA16UI),st===i.UNSIGNED_INT&&(dt=i.RGBA32UI),st===i.BYTE&&(dt=i.RGBA8I),st===i.SHORT&&(dt=i.RGBA16I),st===i.INT&&(dt=i.RGBA32I)),w===i.RGB&&(st===i.UNSIGNED_SHORT&&Lt&&(dt=Lt.RGB16_EXT),st===i.SHORT&&Lt&&(dt=Lt.RGB16_SNORM_EXT),st===i.UNSIGNED_INT_5_9_9_9_REV&&(dt=i.RGB9_E5),st===i.UNSIGNED_INT_10F_11F_11F_REV&&(dt=i.R11F_G11F_B10F)),w===i.RGBA){let vt=zt?Rr:We.getTransfer(ct);st===i.FLOAT&&(dt=i.RGBA32F),st===i.HALF_FLOAT&&(dt=i.RGBA16F),st===i.UNSIGNED_BYTE&&(dt=vt===sn?i.SRGB8_ALPHA8:i.RGBA8),st===i.UNSIGNED_SHORT&&Lt&&(dt=Lt.RGBA16_EXT),st===i.SHORT&&Lt&&(dt=Lt.RGBA16_SNORM_EXT),st===i.UNSIGNED_SHORT_4_4_4_4&&(dt=i.RGBA4),st===i.UNSIGNED_SHORT_5_5_5_1&&(dt=i.RGB5_A1)}return(dt===i.R16F||dt===i.R32F||dt===i.RG16F||dt===i.RG32F||dt===i.RGBA16F||dt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function R(k,w){let st;return k?w===null||w===fi||w===sr?st=i.DEPTH24_STENCIL8:w===ni?st=i.DEPTH32F_STENCIL8:w===ir&&(st=i.DEPTH24_STENCIL8,be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===fi||w===sr?st=i.DEPTH_COMPONENT24:w===ni?st=i.DEPTH_COMPONENT32F:w===ir&&(st=i.DEPTH_COMPONENT16),st}function E(k,w){return d(k)===!0||k.isFramebufferTexture&&k.minFilter!==Tn&&k.minFilter!==vn?Math.log2(Math.max(w.width,w.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?w.mipmaps.length:1}function F(k){let w=k.target;w.removeEventListener("dispose",F),U(w),w.isVideoTexture&&p.delete(w),w.isHTMLTexture&&y.delete(w)}function x(k){let w=k.target;w.removeEventListener("dispose",x),X(w)}function U(k){let w=n.get(k);if(w.__webglInit===void 0)return;let st=k.source,at=T.get(st);if(at){let ct=at[w.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&G(k),Object.keys(at).length===0&&T.delete(st)}n.remove(k)}function G(k){let w=n.get(k);i.deleteTexture(w.__webglTexture);let st=k.source,at=T.get(st);delete at[w.__cacheKey],l.memory.textures--}function X(k){let w=n.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),n.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(w.__webglFramebuffer[at]))for(let ct=0;ct<w.__webglFramebuffer[at].length;ct++)i.deleteFramebuffer(w.__webglFramebuffer[at][ct]);else i.deleteFramebuffer(w.__webglFramebuffer[at]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[at])}else{if(Array.isArray(w.__webglFramebuffer))for(let at=0;at<w.__webglFramebuffer.length;at++)i.deleteFramebuffer(w.__webglFramebuffer[at]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let at=0;at<w.__webglColorRenderbuffer.length;at++)w.__webglColorRenderbuffer[at]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[at]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let st=k.textures;for(let at=0,ct=st.length;at<ct;at++){let zt=n.get(st[at]);zt.__webglTexture&&(i.deleteTexture(zt.__webglTexture),l.memory.textures--),n.remove(st[at])}n.remove(k)}let b=0;function Y(){b=0}function W(){return b}function q(k){b=k}function lt(){let k=b;return k>=s.maxTextures&&be("WebGLTextures: Trying to use "+(k+1)+" texture units while this GPU supports only "+s.maxTextures),b+=1,k}function ht(k){let w=[];return w.push(k.wrapS),w.push(k.wrapT),w.push(k.wrapR||0),w.push(k.magFilter),w.push(k.minFilter),w.push(k.anisotropy),w.push(k.internalFormat),w.push(k.format),w.push(k.type),w.push(k.generateMipmaps),w.push(k.premultiplyAlpha),w.push(k.flipY),w.push(k.unpackAlignment),w.push(k.colorSpace),w.join()}function Mt(k,w){let st=n.get(k);if(k.isVideoTexture&&Q(k),k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&st.__version!==k.version){let at=k.image;if(at===null)be("WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)be("WebGLRenderer: Texture marked for update but image is incomplete");else{jt(st,k,w);return}}else k.isExternalTexture&&(st.__webglTexture=k.sourceTexture?k.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,st.__webglTexture,i.TEXTURE0+w)}function Z(k,w){let st=n.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&st.__version!==k.version){jt(st,k,w);return}else k.isExternalTexture&&(st.__webglTexture=k.sourceTexture?k.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,st.__webglTexture,i.TEXTURE0+w)}function _(k,w){let st=n.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&st.__version!==k.version){jt(st,k,w);return}e.bindTexture(i.TEXTURE_3D,st.__webglTexture,i.TEXTURE0+w)}function bt(k,w){let st=n.get(k);if(k.isCubeDepthTexture!==!0&&k.version>0&&st.__version!==k.version){re(st,k,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture,i.TEXTURE0+w)}let Jt={[Ws]:i.REPEAT,[yi]:i.CLAMP_TO_EDGE,[Za]:i.MIRRORED_REPEAT},Ct={[Tn]:i.NEAREST,[Su]:i.NEAREST_MIPMAP_NEAREST,[ta]:i.NEAREST_MIPMAP_LINEAR,[vn]:i.LINEAR,[yo]:i.LINEAR_MIPMAP_NEAREST,[Ti]:i.LINEAR_MIPMAP_LINEAR},J={[Au]:i.NEVER,[Lu]:i.ALWAYS,[Cu]:i.LESS,[sl]:i.LEQUAL,[Ru]:i.EQUAL,[rl]:i.GEQUAL,[Iu]:i.GREATER,[Pu]:i.NOTEQUAL};function me(k,w){if(w.type===ni&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===vn||w.magFilter===yo||w.magFilter===ta||w.magFilter===Ti||w.minFilter===vn||w.minFilter===yo||w.minFilter===ta||w.minFilter===Ti)&&be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(k,i.TEXTURE_WRAP_S,Jt[w.wrapS]),i.texParameteri(k,i.TEXTURE_WRAP_T,Jt[w.wrapT]),(k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY)&&i.texParameteri(k,i.TEXTURE_WRAP_R,Jt[w.wrapR]),i.texParameteri(k,i.TEXTURE_MAG_FILTER,Ct[w.magFilter]),i.texParameteri(k,i.TEXTURE_MIN_FILTER,Ct[w.minFilter]),w.compareFunction&&(i.texParameteri(k,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(k,i.TEXTURE_COMPARE_FUNC,J[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Tn||w.minFilter!==ta&&w.minFilter!==Ti||w.type===ni&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let st=t.get("EXT_texture_filter_anisotropic");i.texParameterf(k,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Ue(k,w){let st=!1;k.__webglInit===void 0&&(k.__webglInit=!0,w.addEventListener("dispose",F));let at=w.source,ct=T.get(at);ct===void 0&&(ct={},T.set(at,ct));let zt=ht(w);if(zt!==k.__cacheKey){ct[zt]===void 0&&(ct[zt]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,st=!0),ct[zt].usedTimes++;let Lt=ct[k.__cacheKey];Lt!==void 0&&(ct[k.__cacheKey].usedTimes--,Lt.usedTimes===0&&G(w)),k.__cacheKey=zt,k.__webglTexture=ct[zt].texture}return st}function xt(k,w,st){return Math.floor(Math.floor(k/st)/w)}function pt(k,w,st,at){let zt=k.updateRanges;if(zt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,st,at,w.data);else{zt.sort((Qt,Rt)=>Qt.start-Rt.start);let Lt=0;for(let Qt=1;Qt<zt.length;Qt++){let Rt=zt[Lt],kt=zt[Qt],te=Rt.start+Rt.count,_t=xt(kt.start,w.width,4),Dt=xt(Rt.start,w.width,4);kt.start<=te+1&&_t===Dt&&xt(kt.start+kt.count-1,w.width,4)===_t?Rt.count=Math.max(Rt.count,kt.start+kt.count-Rt.start):(++Lt,zt[Lt]=kt)}zt.length=Lt+1;let dt=e.getParameter(i.UNPACK_ROW_LENGTH),vt=e.getParameter(i.UNPACK_SKIP_PIXELS),Ht=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let Qt=0,Rt=zt.length;Qt<Rt;Qt++){let kt=zt[Qt],te=Math.floor(kt.start/4),_t=Math.ceil(kt.count/4),Dt=te%w.width,V=Math.floor(te/w.width),Pt=_t,mt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Dt),e.pixelStorei(i.UNPACK_SKIP_ROWS,V),e.texSubImage2D(i.TEXTURE_2D,0,Dt,V,Pt,mt,st,at,w.data)}k.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,dt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,vt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Ht)}}function jt(k,w,st){let at=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(at=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(at=i.TEXTURE_3D);let ct=Ue(k,w),zt=w.source;e.bindTexture(at,k.__webglTexture,i.TEXTURE0+st);let Lt=n.get(zt);if(zt.version!==Lt.__version||ct===!0){if(e.activeTexture(i.TEXTURE0+st),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let mt=We.getPrimaries(We.workingColorSpace),Et=w.colorSpace===ki?null:We.getPrimaries(w.colorSpace),It=w.colorSpace===ki||mt===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It)}e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let vt=A(w.image,!1,s.maxTextureSize);vt=qe(w,vt);let Ht=r.convert(w.format,w.colorSpace),Qt=r.convert(w.type),Rt=g(w.internalFormat,Ht,Qt,w.normalized,w.colorSpace,w.isVideoTexture);me(at,w);let kt,te=w.mipmaps,_t=w.isVideoTexture!==!0,Dt=Lt.__version===void 0||ct===!0,V=zt.dataReady,Pt=E(w,vt);if(w.isDepthTexture)Rt=R(w.format===is,w.type),Dt&&(_t?e.texStorage2D(i.TEXTURE_2D,1,Rt,vt.width,vt.height):e.texImage2D(i.TEXTURE_2D,0,Rt,vt.width,vt.height,0,Ht,Qt,null));else if(w.isDataTexture)if(te.length>0){_t&&Dt&&e.texStorage2D(i.TEXTURE_2D,Pt,Rt,te[0].width,te[0].height);for(let mt=0,Et=te.length;mt<Et;mt++)kt=te[mt],_t?V&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,kt.width,kt.height,Ht,Qt,kt.data):e.texImage2D(i.TEXTURE_2D,mt,Rt,kt.width,kt.height,0,Ht,Qt,kt.data);w.generateMipmaps=!1}else _t?(Dt&&e.texStorage2D(i.TEXTURE_2D,Pt,Rt,vt.width,vt.height),V&&pt(w,vt,Ht,Qt)):e.texImage2D(i.TEXTURE_2D,0,Rt,vt.width,vt.height,0,Ht,Qt,vt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){_t&&Dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,Rt,te[0].width,te[0].height,vt.depth);for(let mt=0,Et=te.length;mt<Et;mt++)if(kt=te[mt],w.format!==ii)if(Ht!==null)if(_t){if(V)if(w.layerUpdates.size>0){let It=Nc(kt.width,kt.height,w.format,w.type);for(let Tt of w.layerUpdates){let oe=kt.data.subarray(Tt*It/kt.data.BYTES_PER_ELEMENT,(Tt+1)*It/kt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,Tt,kt.width,kt.height,1,Ht,oe)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,kt.width,kt.height,vt.depth,Ht,kt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,mt,Rt,kt.width,kt.height,vt.depth,0,kt.data,0,0);else be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else _t?V&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,kt.width,kt.height,vt.depth,Ht,Qt,kt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,mt,Rt,kt.width,kt.height,vt.depth,0,Ht,Qt,kt.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{_t&&Dt&&e.texStorage2D(i.TEXTURE_2D,Pt,Rt,te[0].width,te[0].height);for(let mt=0,Et=te.length;mt<Et;mt++)kt=te[mt],w.format!==ii?Ht!==null?_t?V&&e.compressedTexSubImage2D(i.TEXTURE_2D,mt,0,0,kt.width,kt.height,Ht,kt.data):e.compressedTexImage2D(i.TEXTURE_2D,mt,Rt,kt.width,kt.height,0,kt.data):be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?V&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,kt.width,kt.height,Ht,Qt,kt.data):e.texImage2D(i.TEXTURE_2D,mt,Rt,kt.width,kt.height,0,Ht,Qt,kt.data)}else if(w.isDataArrayTexture)if(_t){if(Dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,Rt,vt.width,vt.height,vt.depth),V)if(w.layerUpdates.size>0){let mt=Nc(vt.width,vt.height,w.format,w.type);for(let Et of w.layerUpdates){let It=vt.data.subarray(Et*mt/vt.data.BYTES_PER_ELEMENT,(Et+1)*mt/vt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Et,vt.width,vt.height,1,Ht,Qt,It)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,Ht,Qt,vt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,vt.width,vt.height,vt.depth,0,Ht,Qt,vt.data);else if(w.isData3DTexture)_t?(Dt&&e.texStorage3D(i.TEXTURE_3D,Pt,Rt,vt.width,vt.height,vt.depth),V&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,Ht,Qt,vt.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,vt.width,vt.height,vt.depth,0,Ht,Qt,vt.data);else if(w.isFramebufferTexture){if(Dt)if(_t)e.texStorage2D(i.TEXTURE_2D,Pt,Rt,vt.width,vt.height);else{let mt=vt.width,Et=vt.height;for(let It=0;It<Pt;It++)e.texImage2D(i.TEXTURE_2D,It,Rt,mt,Et,0,Ht,Qt,null),mt>>=1,Et>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let mt=i.canvas;if(mt.hasAttribute("layoutsubtree")||mt.setAttribute("layoutsubtree","true"),vt.parentNode!==mt){mt.appendChild(vt),y.add(w),mt.onpaint=Et=>{let It=Et.changedElements;for(let Tt of y)It.includes(Tt.image)&&(Tt.needsUpdate=!0)},mt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,vt);else{let It=i.RGBA,Tt=i.RGBA,oe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,It,Tt,oe,vt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(te.length>0){if(_t&&Dt){let mt=Le(te[0]);e.texStorage2D(i.TEXTURE_2D,Pt,Rt,mt.width,mt.height)}for(let mt=0,Et=te.length;mt<Et;mt++)kt=te[mt],_t?V&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,Ht,Qt,kt):e.texImage2D(i.TEXTURE_2D,mt,Rt,Ht,Qt,kt);w.generateMipmaps=!1}else if(_t){if(Dt){let mt=Le(vt);e.texStorage2D(i.TEXTURE_2D,Pt,Rt,mt.width,mt.height)}V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ht,Qt,vt)}else e.texImage2D(i.TEXTURE_2D,0,Rt,Ht,Qt,vt);d(w)&&C(at),Lt.__version=zt.version,w.onUpdate&&w.onUpdate(w)}k.__version=w.version}function re(k,w,st){if(w.image.length!==6)return;let at=Ue(k,w),ct=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+st);let zt=n.get(ct);if(ct.version!==zt.__version||at===!0){e.activeTexture(i.TEXTURE0+st);let Lt=We.getPrimaries(We.workingColorSpace),dt=w.colorSpace===ki?null:We.getPrimaries(w.colorSpace),vt=w.colorSpace===ki||Lt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let Ht=w.isCompressedTexture||w.image[0].isCompressedTexture,Qt=w.image[0]&&w.image[0].isDataTexture,Rt=[];for(let Tt=0;Tt<6;Tt++)!Ht&&!Qt?Rt[Tt]=A(w.image[Tt],!0,s.maxCubemapSize):Rt[Tt]=Qt?w.image[Tt].image:w.image[Tt],Rt[Tt]=qe(w,Rt[Tt]);let kt=Rt[0],te=r.convert(w.format,w.colorSpace),_t=r.convert(w.type),Dt=g(w.internalFormat,te,_t,w.normalized,w.colorSpace),V=w.isVideoTexture!==!0,Pt=zt.__version===void 0||at===!0,mt=ct.dataReady,Et=E(w,kt);me(i.TEXTURE_CUBE_MAP,w);let It;if(Ht){V&&Pt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,Dt,kt.width,kt.height);for(let Tt=0;Tt<6;Tt++){It=Rt[Tt].mipmaps;for(let oe=0;oe<It.length;oe++){let Wt=It[oe];w.format!==ii?te!==null?V?mt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,oe,0,0,Wt.width,Wt.height,te,Wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,oe,Dt,Wt.width,Wt.height,0,Wt.data):be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,oe,0,0,Wt.width,Wt.height,te,_t,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,oe,Dt,Wt.width,Wt.height,0,te,_t,Wt.data)}}}else{if(It=w.mipmaps,V&&Pt){It.length>0&&Et++;let Tt=Le(Rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,Dt,Tt.width,Tt.height)}for(let Tt=0;Tt<6;Tt++)if(Qt){V?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,Rt[Tt].width,Rt[Tt].height,te,_t,Rt[Tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Dt,Rt[Tt].width,Rt[Tt].height,0,te,_t,Rt[Tt].data);for(let oe=0;oe<It.length;oe++){let Re=It[oe].image[Tt].image;V?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,oe+1,0,0,Re.width,Re.height,te,_t,Re.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,oe+1,Dt,Re.width,Re.height,0,te,_t,Re.data)}}else{V?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,te,_t,Rt[Tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Dt,te,_t,Rt[Tt]);for(let oe=0;oe<It.length;oe++){let Wt=It[oe];V?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,oe+1,0,0,te,_t,Wt.image[Tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,oe+1,Dt,te,_t,Wt.image[Tt])}}}d(w)&&C(i.TEXTURE_CUBE_MAP),zt.__version=ct.version,w.onUpdate&&w.onUpdate(w)}k.__version=w.version}function $t(k,w,st,at,ct,zt){let Lt=r.convert(st.format,st.colorSpace),dt=r.convert(st.type),vt=g(st.internalFormat,Lt,dt,st.normalized,st.colorSpace),Ht=n.get(w),Qt=n.get(st);if(Qt.__renderTarget=w,!Ht.__hasExternalTextures){let Rt=Math.max(1,w.width>>zt),kt=Math.max(1,w.height>>zt);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,zt,vt,Rt,kt,w.depth,0,Lt,dt,null):e.texImage2D(ct,zt,vt,Rt,kt,0,Lt,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,k),Qe(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,ct,Qt.__webglTexture,0,Ae(w)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,at,ct,Qt.__webglTexture,zt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Te(k,w,st){if(i.bindRenderbuffer(i.RENDERBUFFER,k),w.depthBuffer){let at=w.depthTexture,ct=at&&at.isDepthTexture?at.type:null,zt=R(w.stencilBuffer,ct),Lt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Qe(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae(w),zt,w.width,w.height):st?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae(w),zt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,zt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Lt,i.RENDERBUFFER,k)}else{let at=w.textures;for(let ct=0;ct<at.length;ct++){let zt=at[ct],Lt=r.convert(zt.format,zt.colorSpace),dt=r.convert(zt.type),vt=g(zt.internalFormat,Lt,dt,zt.normalized,zt.colorSpace);Qe(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae(w),vt,w.width,w.height):st?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae(w),vt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,vt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Fe(k,w,st){let at=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,k),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ct=n.get(w.depthTexture);if(ct.__renderTarget=w,(!ct.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),at){if(ct.__webglInit===void 0&&(ct.__webglInit=!0,w.depthTexture.addEventListener("dispose",F)),ct.__webglTexture===void 0){ct.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),me(i.TEXTURE_CUBE_MAP,w.depthTexture);let Ht=r.convert(w.depthTexture.format),Qt=r.convert(w.depthTexture.type),Rt;w.depthTexture.format===vi?Rt=i.DEPTH_COMPONENT24:w.depthTexture.format===is&&(Rt=i.DEPTH24_STENCIL8);for(let kt=0;kt<6;kt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,0,Rt,w.width,w.height,0,Ht,Qt,null)}}else Mt(w.depthTexture,0);let zt=ct.__webglTexture,Lt=Ae(w),dt=at?i.TEXTURE_CUBE_MAP_POSITIVE_X+st:i.TEXTURE_2D,vt=w.depthTexture.format===is?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===vi)Qe(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,vt,dt,zt,0,Lt):i.framebufferTexture2D(i.FRAMEBUFFER,vt,dt,zt,0);else if(w.depthTexture.format===is)Qe(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,vt,dt,zt,0,Lt):i.framebufferTexture2D(i.FRAMEBUFFER,vt,dt,zt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Yt(k){let w=n.get(k),st=k.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==k.depthTexture){let at=k.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),at){let ct=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,at.removeEventListener("dispose",ct)};at.addEventListener("dispose",ct),w.__depthDisposeCallback=ct}w.__boundDepthTexture=at}if(k.depthTexture&&!w.__autoAllocateDepthBuffer)if(st)for(let at=0;at<6;at++)Fe(w.__webglFramebuffer[at],k,at);else{let at=k.texture.mipmaps;at&&at.length>0?Fe(w.__webglFramebuffer[0],k,0):Fe(w.__webglFramebuffer,k,0)}else if(st){w.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[at]),w.__webglDepthbuffer[at]===void 0)w.__webglDepthbuffer[at]=i.createRenderbuffer(),Te(w.__webglDepthbuffer[at],k,!1);else{let ct=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,zt=w.__webglDepthbuffer[at];i.bindRenderbuffer(i.RENDERBUFFER,zt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,zt)}}else{let at=k.texture.mipmaps;if(at&&at.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Te(w.__webglDepthbuffer,k,!1);else{let ct=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,zt=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,zt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,zt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(k,w,st){let at=n.get(k);w!==void 0&&$t(at.__webglFramebuffer,k,k.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),st!==void 0&&Yt(k)}function Se(k){let w=k.texture,st=n.get(k),at=n.get(w);k.addEventListener("dispose",x);let ct=k.textures,zt=k.isWebGLCubeRenderTarget===!0,Lt=ct.length>1;if(Lt||(at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture()),at.__version=w.version,l.memory.textures++),zt){st.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(w.mipmaps&&w.mipmaps.length>0){st.__webglFramebuffer[dt]=[];for(let vt=0;vt<w.mipmaps.length;vt++)st.__webglFramebuffer[dt][vt]=i.createFramebuffer()}else st.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){st.__webglFramebuffer=[];for(let dt=0;dt<w.mipmaps.length;dt++)st.__webglFramebuffer[dt]=i.createFramebuffer()}else st.__webglFramebuffer=i.createFramebuffer();if(Lt)for(let dt=0,vt=ct.length;dt<vt;dt++){let Ht=n.get(ct[dt]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=i.createTexture(),l.memory.textures++)}if(k.samples>0&&Qe(k)===!1){st.__webglMultisampledFramebuffer=i.createFramebuffer(),st.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer);for(let dt=0;dt<ct.length;dt++){let vt=ct[dt];st.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,st.__webglColorRenderbuffer[dt]);let Ht=r.convert(vt.format,vt.colorSpace),Qt=r.convert(vt.type),Rt=g(vt.internalFormat,Ht,Qt,vt.normalized,vt.colorSpace,k.isXRRenderTarget===!0),kt=Ae(k);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,Rt,k.width,k.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,st.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),k.depthBuffer&&(st.__webglDepthRenderbuffer=i.createRenderbuffer(),Te(st.__webglDepthRenderbuffer,k,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(zt){e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),me(i.TEXTURE_CUBE_MAP,w);for(let dt=0;dt<6;dt++)if(w.mipmaps&&w.mipmaps.length>0)for(let vt=0;vt<w.mipmaps.length;vt++)$t(st.__webglFramebuffer[dt][vt],k,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,vt);else $t(st.__webglFramebuffer[dt],k,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);d(w)&&C(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let dt=0,vt=ct.length;dt<vt;dt++){let Ht=ct[dt],Qt=n.get(Ht),Rt=i.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(Rt=k.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Rt,Qt.__webglTexture),me(Rt,Ht),$t(st.__webglFramebuffer,k,Ht,i.COLOR_ATTACHMENT0+dt,Rt,0),d(Ht)&&C(Rt)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(dt=k.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,at.__webglTexture),me(dt,w),w.mipmaps&&w.mipmaps.length>0)for(let vt=0;vt<w.mipmaps.length;vt++)$t(st.__webglFramebuffer[vt],k,w,i.COLOR_ATTACHMENT0,dt,vt);else $t(st.__webglFramebuffer,k,w,i.COLOR_ATTACHMENT0,dt,0);d(w)&&C(dt),e.unbindTexture()}k.depthBuffer&&Yt(k)}function ye(k){let w=k.textures;for(let st=0,at=w.length;st<at;st++){let ct=w[st];if(d(ct)){let zt=I(k),Lt=n.get(ct).__webglTexture;e.bindTexture(zt,Lt),C(zt),e.unbindTexture()}}}let ge=[],Pe=[];function je(k){if(k.samples>0){if(Qe(k)===!1){let w=k.textures,st=k.width,at=k.height,ct=i.COLOR_BUFFER_BIT,zt=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=n.get(k),dt=w.length>1;if(dt)for(let Ht=0;Ht<w.length;Ht++)e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer);let vt=k.texture.mipmaps;vt&&vt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Ht=0;Ht<w.length;Ht++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Ht]);let Qt=n.get(w[Ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Qt,0)}i.blitFramebuffer(0,0,st,at,0,0,st,at,ct,i.NEAREST),u===!0&&(ge.length=0,Pe.length=0,ge.push(i.COLOR_ATTACHMENT0+Ht),k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&(ge.push(zt),Pe.push(zt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Pe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ge))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let Ht=0;Ht<w.length;Ht++){e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ht,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Ht]);let Qt=n.get(w[Ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ht,i.TEXTURE_2D,Qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&u){let w=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Ae(k){return Math.min(s.maxSamples,k.samples)}function Qe(k){let w=n.get(k);return k.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Q(k){let w=l.render.frame;p.get(k)!==w&&(p.set(k,w),k.update())}function qe(k,w){let st=k.colorSpace,at=k.format,ct=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||st!==Cr&&st!==ki&&(We.getTransfer(st)===sn?(at!==ii||ct!==Xn)&&be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Me("WebGLTextures: Unsupported texture color space:",st)),w}function Le(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(h.width=k.naturalWidth||k.width,h.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(h.width=k.displayWidth,h.height=k.displayHeight):(h.width=k.width,h.height=k.height),h}this.allocateTextureUnit=lt,this.resetTextureUnits=Y,this.getTextureUnits=W,this.setTextureUnits=q,this.setTexture2D=Mt,this.setTexture2DArray=Z,this.setTexture3D=_,this.setTextureCube=bt,this.rebindTextures=ke,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=$t,this.useMultisampledRTT=Qe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function M1(i,t){function e(n,s=ki){let r,l=We.getTransfer(s);if(n===Xn)return i.UNSIGNED_BYTE;if(n===Mo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===bo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Tc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ec)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Sc)return i.BYTE;if(n===wc)return i.SHORT;if(n===ir)return i.UNSIGNED_SHORT;if(n===vo)return i.INT;if(n===fi)return i.UNSIGNED_INT;if(n===ni)return i.FLOAT;if(n===pi)return i.HALF_FLOAT;if(n===Ac)return i.ALPHA;if(n===Cc)return i.RGB;if(n===ii)return i.RGBA;if(n===vi)return i.DEPTH_COMPONENT;if(n===is)return i.DEPTH_STENCIL;if(n===So)return i.RED;if(n===wo)return i.RED_INTEGER;if(n===ss)return i.RG;if(n===To)return i.RG_INTEGER;if(n===Eo)return i.RGBA_INTEGER;if(n===ea||n===na||n===ia||n===sa)if(l===sn)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ao||n===Co||n===Ro||n===Io)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ao)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Co)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ro)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Io)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Po||n===Lo||n===Do||n===No||n===Uo||n===ra||n===Fo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Po||n===Lo)return l===sn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Do)return l===sn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===No)return r.COMPRESSED_R11_EAC;if(n===Uo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ra)return r.COMPRESSED_RG11_EAC;if(n===Fo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Oo||n===Bo||n===ko||n===zo||n===Vo||n===Go||n===Ho||n===Wo||n===Xo||n===qo||n===Yo||n===Zo||n===Jo||n===$o)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Oo)return l===sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bo)return l===sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ko)return l===sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zo)return l===sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vo)return l===sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Go)return l===sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ho)return l===sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wo)return l===sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xo)return l===sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qo)return l===sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yo)return l===sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zo)return l===sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jo)return l===sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$o)return l===sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ko||n===jo||n===Qo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ko)return l===sn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tl||n===el||n===aa||n===nl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===tl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===el)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===sr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var b1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,S1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Qc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Hr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new jn({vertexShader:b1,fragmentShader:S1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Un(new Wr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},th=class extends Mi{constructor(t,e){super();let n=this,s=null,r=1,l=null,o="local-floor",u=1,h=null,p=null,y=null,m=null,T=null,v=null,P=typeof XRWebGLBinding<"u",A=new Qc,d={},C=e.getContextAttributes(),I=null,g=null,R=[],E=[],F=new ze,x=null,U=null,G=new Dn;G.viewport=new dn;let X=new Dn;X.viewport=new dn;let b=[G,X],Y=new mo,W=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(xt){let pt=R[xt];return pt===void 0&&(pt=new Js,R[xt]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(xt){let pt=R[xt];return pt===void 0&&(pt=new Js,R[xt]=pt),pt.getGripSpace()},this.getHand=function(xt){let pt=R[xt];return pt===void 0&&(pt=new Js,R[xt]=pt),pt.getHandSpace()};function lt(xt){let pt=E.indexOf(xt.inputSource);if(pt===-1)return;let jt=R[pt];jt!==void 0&&(jt.update(xt.inputSource,xt.frame,h||l),jt.dispatchEvent({type:xt.type,data:xt.inputSource}))}function ht(){s.removeEventListener("select",lt),s.removeEventListener("selectstart",lt),s.removeEventListener("selectend",lt),s.removeEventListener("squeeze",lt),s.removeEventListener("squeezestart",lt),s.removeEventListener("squeezeend",lt),s.removeEventListener("end",ht),s.removeEventListener("inputsourceschange",Mt);for(let xt=0;xt<R.length;xt++){let pt=E[xt];pt!==null&&(E[xt]=null,R[xt].disconnect(pt))}W=null,q=null,A.reset();for(let xt in d)delete d[xt];if(t.setRenderTarget(I),T=null,m=null,y=null,s=null,g=null,Ue.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(F.width,F.height,!1),U!==null){let xt=U.camera;xt.fov=U.fov,xt.zoom=U.zoom,xt.updateProjectionMatrix(),U=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(xt){r=xt,n.isPresenting===!0&&be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(xt){o=xt,n.isPresenting===!0&&be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||l},this.setReferenceSpace=function(xt){h=xt},this.getBaseLayer=function(){return m!==null?m:T},this.getBinding=function(){return y===null&&P&&(y=new XRWebGLBinding(s,e)),y},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(xt){if(s=xt,s!==null){if(I=t.getRenderTarget(),s.addEventListener("select",lt),s.addEventListener("selectstart",lt),s.addEventListener("selectend",lt),s.addEventListener("squeeze",lt),s.addEventListener("squeezestart",lt),s.addEventListener("squeezeend",lt),s.addEventListener("end",ht),s.addEventListener("inputsourceschange",Mt),C.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(F),P&&"createProjectionLayer"in XRWebGLBinding.prototype){let jt=null,re=null,$t=null;C.depth&&($t=C.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,jt=C.stencil?is:vi,re=C.stencil?sr:fi);let Te={colorFormat:e.RGBA8,depthFormat:$t,scaleFactor:r};y=this.getBinding(),m=y.createProjectionLayer(Te),s.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),g=new Wn(m.textureWidth,m.textureHeight,{format:ii,type:Xn,depthTexture:new Ki(m.textureWidth,m.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,jt),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{let jt={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:r};T=new XRWebGLLayer(s,e,jt),s.updateRenderState({baseLayer:T}),t.setPixelRatio(1),t.setSize(T.framebufferWidth,T.framebufferHeight,!1),g=new Wn(T.framebufferWidth,T.framebufferHeight,{format:ii,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:T.ignoreDepthValues===!1,resolveStencilBuffer:T.ignoreDepthValues===!1,storeMultisampledDepthBuffer:T.ignoreDepthValues===!1,storeMultisampledStencilBuffer:T.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(u),h=null,l=await s.requestReferenceSpace(o),Ue.setContext(s),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function Mt(xt){for(let pt=0;pt<xt.removed.length;pt++){let jt=xt.removed[pt],re=E.indexOf(jt);re>=0&&(E[re]=null,R[re].disconnect(jt))}for(let pt=0;pt<xt.added.length;pt++){let jt=xt.added[pt],re=E.indexOf(jt);if(re===-1){for(let Te=0;Te<R.length;Te++)if(Te>=E.length){E.push(jt),re=Te;break}else if(E[Te]===null){E[Te]=jt,re=Te;break}if(re===-1)break}let $t=R[re];$t&&$t.connect(jt)}}let Z=new ot,_=new ot;function bt(xt,pt,jt){Z.setFromMatrixPosition(pt.matrixWorld),_.setFromMatrixPosition(jt.matrixWorld);let re=Z.distanceTo(_),$t=pt.projectionMatrix.elements,Te=jt.projectionMatrix.elements,Fe=$t[14]/($t[10]-1),Yt=$t[14]/($t[10]+1),ke=($t[9]+1)/$t[5],Se=($t[9]-1)/$t[5],ye=($t[8]-1)/$t[0],ge=(Te[8]+1)/Te[0],Pe=Fe*ye,je=Fe*ge,Ae=re/(-ye+ge),Qe=Ae*-ye;if(pt.matrixWorld.decompose(xt.position,xt.quaternion,xt.scale),xt.translateX(Qe),xt.translateZ(Ae),xt.matrixWorld.compose(xt.position,xt.quaternion,xt.scale),xt.matrixWorldInverse.copy(xt.matrixWorld).invert(),$t[10]===-1)xt.projectionMatrix.copy(pt.projectionMatrix),xt.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{let Q=Fe+Ae,qe=Yt+Ae,Le=Pe-Qe,k=je+(re-Qe),w=ke*Yt/qe*Q,st=Se*Yt/qe*Q;xt.projectionMatrix.makePerspective(Le,k,w,st,Q,qe),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert()}}function Jt(xt,pt){pt===null?xt.matrixWorld.copy(xt.matrix):xt.matrixWorld.multiplyMatrices(pt.matrixWorld,xt.matrix),xt.matrixWorldInverse.copy(xt.matrixWorld).invert()}this.updateCamera=function(xt){if(s===null)return;let pt=xt.near,jt=xt.far;A.texture!==null&&(A.depthNear>0&&(pt=A.depthNear),A.depthFar>0&&(jt=A.depthFar)),Y.near=X.near=G.near=pt,Y.far=X.far=G.far=jt,(W!==Y.near||q!==Y.far)&&(s.updateRenderState({depthNear:Y.near,depthFar:Y.far}),W=Y.near,q=Y.far),Y.layers.mask=xt.layers.mask|6,G.layers.mask=Y.layers.mask&-5,X.layers.mask=Y.layers.mask&-3;let re=xt.parent,$t=Y.cameras;Jt(Y,re);for(let Te=0;Te<$t.length;Te++)Jt($t[Te],re);$t.length===2?bt(Y,G,X):Y.projectionMatrix.copy(G.projectionMatrix),U===null&&xt.isPerspectiveCamera&&(U={camera:xt,fov:xt.fov,zoom:xt.zoom}),Ct(xt,Y,re)};function Ct(xt,pt,jt){jt===null?xt.matrix.copy(pt.matrixWorld):(xt.matrix.copy(jt.matrixWorld),xt.matrix.invert(),xt.matrix.multiply(pt.matrixWorld)),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.updateMatrixWorld(!0),xt.projectionMatrix.copy(pt.projectionMatrix),xt.projectionMatrixInverse.copy(pt.projectionMatrixInverse),xt.isPerspectiveCamera&&(xt.fov=$a*2*Math.atan(1/xt.projectionMatrix.elements[5]),xt.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(m===null&&T===null))return u},this.setFoveation=function(xt){u=xt,m!==null&&(m.fixedFoveation=xt),T!==null&&T.fixedFoveation!==void 0&&(T.fixedFoveation=xt)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(Y)},this.getCameraTexture=function(xt){return d[xt]};let J=null;function me(xt,pt){if(p=pt.getViewerPose(h||l),v=pt,p!==null){let jt=p.views;T!==null&&(t.setRenderTargetFramebuffer(g,T.framebuffer),t.setRenderTarget(g));let re=!1;jt.length!==Y.cameras.length&&(Y.cameras.length=0,re=!0);for(let Yt=0;Yt<jt.length;Yt++){let ke=jt[Yt],Se=null;if(T!==null)Se=T.getViewport(ke);else{let ge=y.getViewSubImage(m,ke);Se=ge.viewport,Yt===0&&(t.setRenderTargetTextures(g,ge.colorTexture,ge.depthStencilTexture),t.setRenderTarget(g))}let ye=b[Yt];ye===void 0&&(ye=new Dn,ye.layers.enable(Yt),ye.viewport=new dn,b[Yt]=ye),ye.matrix.fromArray(ke.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(ke.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Se.x,Se.y,Se.width,Se.height),Yt===0&&(Y.matrix.copy(ye.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),re===!0&&Y.cameras.push(ye)}let $t=s.enabledFeatures;if($t&&$t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&P){y=n.getBinding();let Yt=y.getDepthInformation(jt[0]);Yt&&Yt.isValid&&Yt.texture&&A.init(Yt,s.renderState)}if($t&&$t.includes("camera-access")&&P){t.state.unbindTexture(),y=n.getBinding();for(let Yt=0;Yt<jt.length;Yt++){let ke=jt[Yt].camera;if(ke){let Se=d[ke];Se||(Se=new Hr,d[ke]=Se);let ye=y.getCameraImage(ke);Se.sourceTexture=ye}}}}for(let jt=0;jt<R.length;jt++){let re=E[jt],$t=R[jt];re!==null&&$t!==void 0&&$t.update(re,pt,h||l)}J&&J(xt,pt),pt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pt}),v=null}let Ue=new ld;Ue.setAnimationLoop(me),this.setAnimationLoop=function(xt){J=xt},this.dispose=function(){}}},w1=new Je,pd=new Ce;pd.set(-1,0,0,0,1,0,0,0,1);function T1(i,t){function e(A,d){A.matrixAutoUpdate===!0&&A.updateMatrix(),d.value.copy(A.matrix)}function n(A,d){d.color.getRGB(A.fogColor.value,Pc(i)),d.isFog?(A.fogNear.value=d.near,A.fogFar.value=d.far):d.isFogExp2&&(A.fogDensity.value=d.density)}function s(A,d,C,I,g){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(A,d):d.isMeshLambertMaterial?(r(A,d),d.envMap&&(A.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(A,d),y(A,d)):d.isMeshPhongMaterial?(r(A,d),p(A,d),d.envMap&&(A.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(A,d),m(A,d),d.isMeshPhysicalMaterial&&T(A,d,g)):d.isMeshMatcapMaterial?(r(A,d),v(A,d)):d.isMeshDepthMaterial?r(A,d):d.isMeshDistanceMaterial?(r(A,d),P(A,d)):d.isMeshNormalMaterial?r(A,d):d.isLineBasicMaterial?(l(A,d),d.isLineDashedMaterial&&o(A,d)):d.isPointsMaterial?u(A,d,C,I):d.isSpriteMaterial?h(A,d):d.isShadowMaterial?(A.color.value.copy(d.color),A.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(A,d){A.opacity.value=d.opacity,d.color&&A.diffuse.value.copy(d.color),d.emissive&&A.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(A.map.value=d.map,e(d.map,A.mapTransform)),d.alphaMap&&(A.alphaMap.value=d.alphaMap,e(d.alphaMap,A.alphaMapTransform)),d.bumpMap&&(A.bumpMap.value=d.bumpMap,e(d.bumpMap,A.bumpMapTransform),A.bumpScale.value=d.bumpScale,d.side===kn&&(A.bumpScale.value*=-1)),d.normalMap&&(A.normalMap.value=d.normalMap,e(d.normalMap,A.normalMapTransform),A.normalScale.value.copy(d.normalScale),d.side===kn&&A.normalScale.value.negate()),d.displacementMap&&(A.displacementMap.value=d.displacementMap,e(d.displacementMap,A.displacementMapTransform),A.displacementScale.value=d.displacementScale,A.displacementBias.value=d.displacementBias),d.emissiveMap&&(A.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,A.emissiveMapTransform)),d.specularMap&&(A.specularMap.value=d.specularMap,e(d.specularMap,A.specularMapTransform)),d.alphaTest>0&&(A.alphaTest.value=d.alphaTest);let C=t.get(d),I=C.envMap,g=C.envMapRotation;I&&(A.envMap.value=I,A.envMapRotation.value.setFromMatrix4(w1.makeRotationFromEuler(g)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&A.envMapRotation.value.premultiply(pd),A.reflectivity.value=d.reflectivity,A.ior.value=d.ior,A.refractionRatio.value=d.refractionRatio),d.lightMap&&(A.lightMap.value=d.lightMap,A.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,A.lightMapTransform)),d.aoMap&&(A.aoMap.value=d.aoMap,A.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,A.aoMapTransform))}function l(A,d){A.diffuse.value.copy(d.color),A.opacity.value=d.opacity,d.map&&(A.map.value=d.map,e(d.map,A.mapTransform))}function o(A,d){A.dashSize.value=d.dashSize,A.totalSize.value=d.dashSize+d.gapSize,A.scale.value=d.scale}function u(A,d,C,I){A.diffuse.value.copy(d.color),A.opacity.value=d.opacity,A.size.value=d.size*C,A.scale.value=I*.5,d.map&&(A.map.value=d.map,e(d.map,A.uvTransform)),d.alphaMap&&(A.alphaMap.value=d.alphaMap,e(d.alphaMap,A.alphaMapTransform)),d.alphaTest>0&&(A.alphaTest.value=d.alphaTest)}function h(A,d){A.diffuse.value.copy(d.color),A.opacity.value=d.opacity,A.rotation.value=d.rotation,d.map&&(A.map.value=d.map,e(d.map,A.mapTransform)),d.alphaMap&&(A.alphaMap.value=d.alphaMap,e(d.alphaMap,A.alphaMapTransform)),d.alphaTest>0&&(A.alphaTest.value=d.alphaTest)}function p(A,d){A.specular.value.copy(d.specular),A.shininess.value=Math.max(d.shininess,1e-4)}function y(A,d){d.gradientMap&&(A.gradientMap.value=d.gradientMap)}function m(A,d){A.metalness.value=d.metalness,d.metalnessMap&&(A.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,A.metalnessMapTransform)),A.roughness.value=d.roughness,d.roughnessMap&&(A.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,A.roughnessMapTransform)),d.envMap&&(A.envMapIntensity.value=d.envMapIntensity)}function T(A,d,C){A.ior.value=d.ior,d.sheen>0&&(A.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),A.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(A.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,A.sheenColorMapTransform)),d.sheenRoughnessMap&&(A.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,A.sheenRoughnessMapTransform))),d.clearcoat>0&&(A.clearcoat.value=d.clearcoat,A.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(A.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,A.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(A.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,A.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(A.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,A.clearcoatNormalMapTransform),A.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===kn&&A.clearcoatNormalScale.value.negate())),d.dispersion>0&&(A.dispersion.value=d.dispersion),d.retroreflectivity>0&&(A.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(A.iridescence.value=d.iridescence,A.iridescenceIOR.value=d.iridescenceIOR,A.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],A.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(A.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,A.iridescenceMapTransform)),d.iridescenceThicknessMap&&(A.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,A.iridescenceThicknessMapTransform))),d.transmission>0&&(A.transmission.value=d.transmission,A.transmissionSamplerMap.value=C.texture,A.transmissionSamplerSize.value.set(C.width,C.height),d.transmissionMap&&(A.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,A.transmissionMapTransform)),A.thickness.value=d.thickness,d.thicknessMap&&(A.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,A.thicknessMapTransform)),A.attenuationDistance.value=d.attenuationDistance,A.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(A.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(A.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,A.anisotropyMapTransform))),A.specularIntensity.value=d.specularIntensity,A.specularColor.value.copy(d.specularColor),d.specularColorMap&&(A.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,A.specularColorMapTransform)),d.specularIntensityMap&&(A.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,A.specularIntensityMapTransform))}function v(A,d){d.matcap&&(A.matcap.value=d.matcap)}function P(A,d){let C=t.get(d).light;A.referencePosition.value.setFromMatrixPosition(C.matrixWorld),A.nearDistance.value=C.shadow.camera.near,A.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function E1(i,t,e,n){let s={},r={},l=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function u(g,R){let E=R.program;n.uniformBlockBinding(g,E)}function h(g,R){let E=s[g.id];E===void 0&&(A(g),E=p(g),s[g.id]=E,g.addEventListener("dispose",C));let F=R.program;n.updateUBOMapping(g,F);let x=t.render.frame;r[g.id]!==x&&(m(g),r[g.id]=x)}function p(g){let R=y();g.__bindingPointIndex=R;let E=i.createBuffer(),F=g.__size,x=g.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,F,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,E),E}function y(){for(let g=0;g<o;g++)if(l.indexOf(g)===-1)return l.push(g),g;return Me("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(g){let R=s[g.id],E=g.uniforms,F=g.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let x=0,U=E.length;x<U;x++){let G=E[x];if(Array.isArray(G))for(let X=0,b=G.length;X<b;X++)T(G[X],x,X,F);else T(G,x,0,F)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function T(g,R,E,F){if(P(g,R,E,F)===!0){let x=g.__offset,U=g.value;if(Array.isArray(U)){let G=0;for(let X=0;X<U.length;X++){let b=U[X],Y=d(b);v(b,g.__data,G),typeof b!="number"&&typeof b!="boolean"&&!b.isMatrix3&&!ArrayBuffer.isView(b)&&(G+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(U,g.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,g.__data)}}function v(g,R,E){typeof g=="number"||typeof g=="boolean"?R[0]=g:g.isMatrix3?(R[0]=g.elements[0],R[1]=g.elements[1],R[2]=g.elements[2],R[3]=0,R[4]=g.elements[3],R[5]=g.elements[4],R[6]=g.elements[5],R[7]=0,R[8]=g.elements[6],R[9]=g.elements[7],R[10]=g.elements[8],R[11]=0):ArrayBuffer.isView(g)?R.set(new g.constructor(g.buffer,g.byteOffset,R.length)):g.toArray(R,E)}function P(g,R,E,F){let x=g.value,U=R+"_"+E;if(F[U]===void 0)return typeof x=="number"||typeof x=="boolean"?F[U]=x:ArrayBuffer.isView(x)?F[U]=x.slice():F[U]=x.clone(),!0;{let G=F[U];if(typeof x=="number"||typeof x=="boolean"){if(G!==x)return F[U]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(G.equals(x)===!1)return G.copy(x),!0}}return!1}function A(g){let R=g.uniforms,E=0,F=16;for(let U=0,G=R.length;U<G;U++){let X=Array.isArray(R[U])?R[U]:[R[U]];for(let b=0,Y=X.length;b<Y;b++){let W=X[b],q=Array.isArray(W.value)?W.value:[W.value];for(let lt=0,ht=q.length;lt<ht;lt++){let Mt=q[lt],Z=d(Mt),_=E%F,bt=_%Z.boundary,Jt=_+bt;E+=bt,Jt!==0&&F-Jt<Z.storage&&(E+=F-Jt),W.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=E,E+=Z.storage}}}let x=E%F;return x>0&&(E+=F-x),g.__size=E,g.__cache={},this}function d(g){let R={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(R.boundary=4,R.storage=4):g.isVector2?(R.boundary=8,R.storage=8):g.isVector3||g.isColor?(R.boundary=16,R.storage=12):g.isVector4?(R.boundary=16,R.storage=16):g.isMatrix3?(R.boundary=48,R.storage=48):g.isMatrix4?(R.boundary=64,R.storage=64):g.isTexture?be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(R.boundary=16,R.storage=g.byteLength):be("WebGLRenderer: Unsupported uniform value type.",g),R}function C(g){let R=g.target;R.removeEventListener("dispose",C);let E=l.indexOf(R.__bindingPointIndex);l.splice(E,1),i.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function I(){for(let g in s)i.deleteBuffer(s[g]);l=[],s={},r={}}return{bind:u,update:h,dispose:I}}var A1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ei=null;function C1(){return Ei===null&&(Ei=new zr(A1,16,16,ss,pi),Ei.name="DFG_LUT",Ei.minFilter=vn,Ei.magFilter=vn,Ei.wrapS=yi,Ei.wrapT=yi,Ei.generateMipmaps=!1,Ei.needsUpdate=!0),Ei}var ul=class{constructor(t={}){let{canvas:e=Du(),context:n=null,depth:s=!0,stencil:r=!1,alpha:l=!1,antialias:o=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:m=!1,outputBufferType:T=Xn}=t;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=l;let P=T,A=new Set([Eo,To,wo]),d=new Set([Xn,fi,ir,sr,Mo,bo]),C=new Uint32Array(4),I=new Int32Array(4),g=new ot,R=null,E=null,F=[],x=[],U=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let G=this,X=!1,b=null,Y=null,W=null,q=null;this._outputColorSpace=Cn;let lt=0,ht=0,Mt=null,Z=-1,_=null,bt=new dn,Jt=new dn,Ct=null,J=new De(0),me=0,Ue=e.width,xt=e.height,pt=1,jt=null,re=null,$t=new dn(0,0,Ue,xt),Te=new dn(0,0,Ue,xt),Fe=!1,Yt=new $s,ke=!1,Se=!1,ye=new Je,ge=new ot,Pe=new dn,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ae=!1;function Qe(){return Mt===null?pt:1}let Q=n;function qe(M,L){return e.getContext(M,L)}let Le,k,w,st,at,ct,zt,Lt,dt,vt,Ht,Qt,Rt,kt,te,_t,Dt,V,Pt,mt,Et,It,Tt;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:y};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Re,!1),e.addEventListener("webglcontextrestored",we,!1),e.addEventListener("webglcontextcreationerror",yn,!1),Q===null){let L="webgl2";if(Q=qe(L,M),Q===null)throw qe(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}oe()}catch(M){throw e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",yn,!1),Me("WebGLRenderer: "+M.message),M}function oe(){Le=new Um(Q),Le.init(),Et=new M1(Q,Le),k=new Tm(Q,Le,t,Et),w=new y1(Q,Le),k.reversedDepthBuffer&&m&&w.buffers.depth.setReversed(!0),Y=Q.createFramebuffer(),W=Q.createFramebuffer(),q=Q.createFramebuffer(),st=new Bm(Q),at=new r1,ct=new v1(Q,Le,w,at,k,Et,st),zt=new Nm(G),Lt=new zf(Q),It=new Sm(Q,Lt),dt=new Fm(Q,Lt,st,It),vt=new zm(Q,dt,Lt,It,st),V=new km(Q,k,ct),te=new Em(at),Ht=new s1(G,zt,Le,k,It,te),Qt=new T1(G,at),Rt=new o1,kt=new f1(Le),Dt=new bm(G,zt,w,vt,v,u),_t=new _1(G,vt,k),Tt=new E1(Q,st,k,w),Pt=new wm(Q,Le,st),mt=new Om(Q,Le,st),st.programs=Ht.programs,G.capabilities=k,G.extensions=Le,G.properties=at,G.renderLists=Rt,G.shadowMap=_t,G.state=w,G.info=st}P!==Xn&&(U=new Gm(P,e.width,e.height,o,s,r));let Wt=new th(G,Q);this.xr=Wt,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){let M=Le.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Le.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return pt},this.setPixelRatio=function(M){M!==void 0&&(pt=M,this.setSize(Ue,xt,!1))},this.getSize=function(M){return M.set(Ue,xt)},this.setSize=function(M,L,$=!0){if(Wt.isPresenting){be("WebGLRenderer: Can't change size while VR device is presenting.");return}Ue=M,xt=L,e.width=Math.floor(M*pt),e.height=Math.floor(L*pt),$===!0&&(e.style.width=M+"px",e.style.height=L+"px"),U!==null&&U.setSize(e.width,e.height),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(Ue*pt,xt*pt).floor()},this.setDrawingBufferSize=function(M,L,$){Ue=M,xt=L,pt=$,e.width=Math.floor(M*$),e.height=Math.floor(L*$),this.setViewport(0,0,M,L)},this.setEffects=function(M){if(P===Xn){Me("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let L=0;L<M.length;L++)if(M[L].isOutputPass===!0){be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(bt)},this.getViewport=function(M){return M.copy($t)},this.setViewport=function(M,L,$,K){M.isVector4?$t.set(M.x,M.y,M.z,M.w):$t.set(M,L,$,K),w.viewport(bt.copy($t).multiplyScalar(pt).round())},this.getScissor=function(M){return M.copy(Te)},this.setScissor=function(M,L,$,K){M.isVector4?Te.set(M.x,M.y,M.z,M.w):Te.set(M,L,$,K),w.scissor(Jt.copy(Te).multiplyScalar(pt).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(M){w.setScissorTest(Fe=M)},this.setOpaqueSort=function(M){jt=M},this.setTransparentSort=function(M){re=M},this.getClearColor=function(M){return M.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(M=!0,L=!0,$=!0){let K=0;if(M){let et=!1;if(Mt!==null){let rt=Mt.texture.format;et=A.has(rt)}if(et){let rt=Mt.texture.type,St=d.has(rt),At=Dt.getClearColor(),Gt=Dt.getClearAlpha(),ee=At.r,xe=At.g,Ee=At.b;St?(C[0]=ee,C[1]=xe,C[2]=Ee,C[3]=Gt,Q.clearBufferuiv(Q.COLOR,0,C)):(I[0]=ee,I[1]=xe,I[2]=Ee,I[3]=Gt,Q.clearBufferiv(Q.COLOR,0,I))}else K|=Q.COLOR_BUFFER_BIT}L&&(K|=Q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(K|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&Q.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),b=M},this.dispose=function(){e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",yn,!1),Dt.dispose(),Rt.dispose(),kt.dispose(),at.dispose(),zt.dispose(),vt.dispose(),It.dispose(),Tt.dispose(),Ht.dispose(),Wt.dispose(),Wt.removeEventListener("sessionstart",Zt),Wt.removeEventListener("sessionend",qt),le.stop()};function Re(M){M.preventDefault(),Pr("WebGLRenderer: Context Lost."),X=!0}function we(){Pr("WebGLRenderer: Context Restored."),X=!1;let M=st.autoReset,L=_t.enabled,$=_t.autoUpdate,K=_t.needsUpdate,et=_t.type;oe(),st.autoReset=M,_t.enabled=L,_t.autoUpdate=$,_t.needsUpdate=K,_t.type=et}function yn(M){Me("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function H(M){let L=M.target;L.removeEventListener("dispose",H),ut(L)}function ut(M){Nt(M),at.remove(M)}function Nt(M){let L=at.get(M).programs;L!==void 0&&(L.forEach(function($){Ht.releaseProgram($)}),M.isShaderMaterial&&Ht.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,$,K,et,rt){L===null&&(L=je);let St=et.isMesh&&et.matrixWorld.determinantAffine()<0,At=nt(M,L,$,K,et);w.setMaterial(K,St);let Gt=$.index,ee=1;if(K.wireframe===!0){if(Gt=dt.getWireframeAttribute($),Gt===void 0)return;ee=2}let xe=$.drawRange,Ee=$.attributes.position,ie=xe.start*ee,Ze=(xe.start+xe.count)*ee;rt!==null&&(ie=Math.max(ie,rt.start*ee),Ze=Math.min(Ze,(rt.start+rt.count)*ee)),Gt!==null?(ie=Math.max(ie,0),Ze=Math.min(Ze,Gt.count)):Ee!=null&&(ie=Math.max(ie,0),Ze=Math.min(Ze,Ee.count));let pn=Ze-ie;if(pn<0||pn===1/0)return;It.setup(et,K,At,$,Gt);let hn,on=Pt;if(Gt!==null&&(hn=Lt.get(Gt),on=mt,on.setIndex(hn)),et.isMesh)K.wireframe===!0?(w.setLineWidth(K.wireframeLinewidth*Qe()),on.setMode(Q.LINES)):on.setMode(Q.TRIANGLES);else if(et.isLine){let Sn=K.linewidth;Sn===void 0&&(Sn=1),w.setLineWidth(Sn*Qe()),et.isLineSegments?on.setMode(Q.LINES):et.isLineLoop?on.setMode(Q.LINE_LOOP):on.setMode(Q.LINE_STRIP)}else et.isPoints?on.setMode(Q.POINTS):et.isSprite&&on.setMode(Q.TRIANGLES);if(et.isBatchedMesh)if(Le.get("WEBGL_multi_draw"))on.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{let Sn=et._multiDrawStarts,se=et._multiDrawCounts,En=et._multiDrawCount,Ve=Gt?Lt.get(Gt).bytesPerElement:1,tn=at.get(K).currentProgram.getUniforms();for(let An=0;An<En;An++)tn.setValue(Q,"_gl_DrawID",An),on.render(Sn[An]/Ve,se[An])}else if(et.isInstancedMesh)on.renderInstances(ie,pn,et.count);else if($.isInstancedBufferGeometry){let Sn=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,se=Math.min($.instanceCount,Sn);on.renderInstances(ie,pn,se)}else on.render(ie,pn)};function Ft(M,L,$,K){b!==null&&M.isNodeMaterial&&b.setObject(K,M),ke===!0&&te.setState(M,$,!1),M.transparent===!0&&M.side===ti&&M.forceSinglePass===!1?(M.side=kn,M.needsUpdate=!0,rn(M,L,K),M.side=es,M.needsUpdate=!0,rn(M,L,K),M.side=ti):rn(M,L,K)}this.compile=function(M,L,$=null){$===null&&($=M),b!==null&&b.renderStart(M,L,$),E=kt.get($),E.init(L),x.push(E),$.traverseVisible(function(et){et.isLight&&et.layers.test(L.layers)&&(E.pushLight(et),et.castShadow&&E.pushShadow(et))}),M!==$&&M.traverseVisible(function(et){et.isLight&&et.layers.test(L.layers)&&(E.pushLight(et),et.castShadow&&E.pushShadow(et))}),E.setupLights(),b!==null&&b.updateLights(E.state.lightsArray),Se=this.localClippingEnabled,ke=te.init(this.clippingPlanes,Se),ke===!0&&te.setGlobalState(this.clippingPlanes,L),b!==null&&_t.render(E.state.shadowsArray,$,L);let K=new Set;return M.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;let rt=et.material;if(rt)if(Array.isArray(rt))for(let St=0;St<rt.length;St++){let At=rt[St];Ft(At,$,L,et),K.add(At)}else Ft(rt,$,L,et),K.add(rt)}),E=x.pop(),b!==null&&b.renderEnd(),K},this.compileAsync=function(M,L,$=null){let K=this.compile(M,L,$);return new Promise(et=>{function rt(){if(K.forEach(function(St){let Gt=at.get(St).currentProgram;(Gt===void 0||Gt.isReady())&&K.delete(St)}),K.size===0){et(M);return}setTimeout(rt,10)}Le.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let Ot=null;function Bt(M){Ot&&Ot(M)}function Zt(){le.stop()}function qt(){le.start()}let le=new ld;le.setAnimationLoop(Bt),typeof self<"u"&&le.setContext(self),this.setAnimationLoop=function(M){Ot=M,Wt.setAnimationLoop(M),M===null?le.stop():le.start()},Wt.addEventListener("sessionstart",Zt),Wt.addEventListener("sessionend",qt),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){Me("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;b!==null&&b.renderStart(M,L);let $=Wt.enabled===!0&&Wt.isPresenting===!0,K=U!==null&&(Mt===null||$)&&U.begin(G,Mt);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Wt.enabled===!0&&Wt.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(Wt.cameraAutoUpdate===!0&&Wt.updateCamera(L),L=Wt.getCamera()),M.isScene===!0&&M.onBeforeRender(G,M,L,Mt),E=kt.get(M,x.length),E.init(L),E.state.textureUnits=ct.getTextureUnits(),x.push(E),ye.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Yt.setFromProjectionMatrix(ye,ui,L.reversedDepth),Se=this.localClippingEnabled,ke=te.init(this.clippingPlanes,Se),R=Rt.get(M,F.length),R.init(),F.push(R),Wt.enabled===!0&&Wt.isPresenting===!0){let St=G.xr.getDepthSensingMesh();St!==null&&he(St,L,-1/0,G.sortObjects)}he(M,L,0,G.sortObjects),R.finish(),b!==null&&b.updateLights(E.state.lightsArray),G.sortObjects===!0&&R.sort(jt,re),Ae=Wt.enabled===!1||Wt.isPresenting===!1||Wt.hasDepthSensing()===!1,Ae&&Dt.addToRenderList(R,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ke===!0&&te.beginShadows();let et=E.state.shadowsArray;if(_t.render(et,M,L),ke===!0&&te.endShadows(),(K&&U.hasRenderPass())===!1){let St=R.opaque,At=R.transmissive;if(E.setupLights(),L.isArrayCamera){let Gt=L.cameras;if(At.length>0)for(let ee=0,xe=Gt.length;ee<xe;ee++){let Ee=Gt[ee];Ye(St,At,M,Ee)}Ae&&Dt.render(M);for(let ee=0,xe=Gt.length;ee<xe;ee++){let Ee=Gt[ee];Ie(R,M,Ee,Ee.viewport)}}else At.length>0&&Ye(St,At,M,L),Ae&&Dt.render(M),Ie(R,M,L)}Mt!==null&&ht===0&&(ct.updateMultisampleRenderTarget(Mt),ct.updateRenderTargetMipmap(Mt)),K&&U.end(G),M.isScene===!0&&M.onAfterRender(G,M,L),It.resetDefaultState(),Z=-1,_=null,x.pop(),x.length>0?(E=x[x.length-1],ct.setTextureUnits(E.state.textureUnits),ke===!0&&te.setGlobalState(G.clippingPlanes,E.state.camera)):E=null,F.pop(),F.length>0?R=F[F.length-1]:R=null,b!==null&&b.renderEnd()};function he(M,L,$,K){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)$=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLightProbeGrid)E.pushLightProbeGrid(M);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(Yt)){K&&Pe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ye);let St=vt.update(M),At=M.material;At.visible&&R.push(M,St,At,$,Pe.z,null,L)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(Yt))){let St=vt.update(M),At=M.material;if(K&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Pe.copy(M.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Pe.copy(St.boundingSphere.center)),Pe.applyMatrix4(M.matrixWorld).applyMatrix4(ye)),Array.isArray(At)){let Gt=St.groups;for(let ee=0,xe=Gt.length;ee<xe;ee++){let Ee=Gt[ee],ie=At[Ee.materialIndex];ie&&ie.visible&&R.push(M,St,ie,$,Pe.z,Ee,L)}}else At.visible&&R.push(M,St,At,$,Pe.z,null,L)}}let rt=M.children;for(let St=0,At=rt.length;St<At;St++)he(rt[St],L,$,K)}function Ie(M,L,$,K){let{opaque:et,transmissive:rt,transparent:St}=M;E.setupLightsView($),ke===!0&&te.setGlobalState(G.clippingPlanes,$),K&&w.viewport(bt.copy(K)),et.length>0&&fn(et,L,$),rt.length>0&&fn(rt,L,$),St.length>0&&fn(St,L,$),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function Ye(M,L,$,K){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[K.id]===void 0){let ie=Le.has("EXT_color_buffer_half_float")||Le.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[K.id]=new Wn(1,1,{generateMipmaps:!0,type:ie?pi:Xn,minFilter:Ti,samples:Math.max(4,k.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:We.workingColorSpace})}let rt=E.state.transmissionRenderTarget[K.id],St=K.viewport||bt;rt.setSize(St.z*G.transmissionResolutionScale,St.w*G.transmissionResolutionScale);let At=G.getRenderTarget(),Gt=G.getActiveCubeFace(),ee=G.getActiveMipmapLevel();G.setRenderTarget(rt),G.getClearColor(J),me=G.getClearAlpha(),me<1&&G.setClearColor(16777215,.5),G.clear(),Ae&&Dt.render($);let xe=G.toneMapping;G.toneMapping=di;let Ee=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),E.setupLightsView(K),ke===!0&&te.setGlobalState(G.clippingPlanes,K),fn(M,$,K),ct.updateMultisampleRenderTarget(rt),ct.updateRenderTargetMipmap(rt),Le.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let Ze=0,pn=L.length;Ze<pn;Ze++){let hn=L[Ze],{object:on,geometry:Sn,material:se,group:En}=hn;if(se.side===ti&&on.layers.test(K.layers)){let Ve=se.side;se.side=kn,se.needsUpdate=!0,_e(on,$,K,Sn,se,En),se.side=Ve,se.needsUpdate=!0,ie=!0}}ie===!0&&(ct.updateMultisampleRenderTarget(rt),ct.updateRenderTargetMipmap(rt))}G.setRenderTarget(At,Gt,ee),G.setClearColor(J,me),Ee!==void 0&&(K.viewport=Ee),G.toneMapping=xe}function fn(M,L,$){let K=L.isScene===!0?L.overrideMaterial:null;for(let et=0,rt=M.length;et<rt;et++){let St=M[et],{object:At,geometry:Gt,group:ee}=St,xe=St.material;xe.allowOverride===!0&&K!==null&&(xe=K),At.layers.test($.layers)&&_e(At,L,$,Gt,xe,ee)}}function _e(M,L,$,K,et,rt){b!==null&&et.isNodeMaterial&&b.setObject(M,et),M.onBeforeRender(G,L,$,K,et,rt),M.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),et.onBeforeRender(G,L,$,K,M,rt),et.transparent===!0&&et.side===ti&&et.forceSinglePass===!1?(et.side=kn,et.needsUpdate=!0,G.renderBufferDirect($,L,K,et,M,rt),et.side=es,et.needsUpdate=!0,G.renderBufferDirect($,L,K,et,M,rt),et.side=ti):G.renderBufferDirect($,L,K,et,M,rt),M.onAfterRender(G,L,$,K,et,rt)}function rn(M,L,$){L.isScene!==!0&&(L=je);let K=at.get(M),et=E.state.lights,rt=E.state.shadowsArray,St=et.state.version,At=Ht.getParameters(M,et.state,rt,L,$,E.state.lightProbeGridArray),Gt=Ht.getProgramCacheKey(At),ee=K.programs;K.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?L.environment:null,K.fog=L.fog;let xe=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;K.envMap=zt.get(M.envMap||K.environment,xe),K.envMapRotation=K.environment!==null&&M.envMap===null?L.environmentRotation:M.envMapRotation,ee===void 0&&(M.addEventListener("dispose",H),ee=new Map,K.programs=ee);let Ee=ee.get(Gt);if(Ee!==void 0){if(K.currentProgram===Ee&&K.lightsStateVersion===St)return qn(M,At),Ee}else At.uniforms=Ht.getUniforms(M),b!==null&&M.isNodeMaterial&&b.build(M,$,At),M.onBeforeCompile(At,G),Ee=Ht.acquireProgram(At,Gt),ee.set(Gt,Ee),K.uniforms=At.uniforms;let ie=K.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(ie.clippingPlanes=te.uniform),qn(M,At),K.needsLights=ft(M),K.lightsStateVersion=St,K.needsLights&&(ie.ambientLightColor.value=et.state.ambient,ie.lightProbe.value=et.state.probe,ie.sunLights.value=et.state.sun,ie.sunLightShadows.value=et.state.sunShadow,ie.directionalLights.value=et.state.directional,ie.directionalLightShadows.value=et.state.directionalShadow,ie.spotLights.value=et.state.spot,ie.spotLightShadows.value=et.state.spotShadow,ie.rectAreaLights.value=et.state.rectArea,ie.ltc_1.value=et.state.rectAreaLTC1,ie.ltc_2.value=et.state.rectAreaLTC2,ie.pointLights.value=et.state.point,ie.pointLightShadows.value=et.state.pointShadow,ie.hemisphereLights.value=et.state.hemi,ie.sunShadowMatrix.value=et.state.sunShadowMatrix,ie.sunShadowCascade.value=et.state.sunShadowCascade,ie.directionalShadowMatrix.value=et.state.directionalShadowMatrix,ie.spotLightMatrix.value=et.state.spotLightMatrix,ie.spotLightMap.value=et.state.spotLightMap,ie.pointShadowMatrix.value=et.state.pointShadowMatrix),K.lightProbeGrid=E.state.lightProbeGridArray.length>0,K.currentProgram=Ee,K.uniformsList=null,Ee}function an(M){if(M.uniformsList===null){let L=M.currentProgram.getUniforms();M.uniformsList=or.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function qn(M,L){let $=at.get(M);$.outputColorSpace=L.outputColorSpace,$.batching=L.batching,$.batchingColor=L.batchingColor,$.instancing=L.instancing,$.instancingColor=L.instancingColor,$.instancingMorph=L.instancingMorph,$.skinning=L.skinning,$.morphTargets=L.morphTargets,$.morphNormals=L.morphNormals,$.morphColors=L.morphColors,$.morphTargetsCount=L.morphTargetsCount,$.numClippingPlanes=L.numClippingPlanes,$.numIntersection=L.numClipIntersection,$.vertexAlphas=L.vertexAlphas,$.vertexTangents=L.vertexTangents,$.toneMapping=L.toneMapping}function D(M,L){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;g.setFromMatrixPosition(L.matrixWorld);for(let $=0,K=M.length;$<K;$++){let et=M[$];if(et.texture!==null&&et.boundingBox.containsPoint(g))return et}return null}function nt(M,L,$,K,et){L.isScene!==!0&&(L=je),ct.resetTextureUnits();let rt=L.fog,St=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?L.environment:null,At=Mt===null?G.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:We.workingColorSpace,Gt=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,ee=zt.get(K.envMap||St,Gt),xe=K.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ee=!!$.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),ie=!!$.morphAttributes.position,Ze=!!$.morphAttributes.normal,pn=!!$.morphAttributes.color,hn=di;K.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(hn=G.toneMapping);let on=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Sn=on!==void 0?on.length:0,se=at.get(K),En=E.state.lights;if(ke===!0&&(Se===!0||M!==_)){let $e=M===_&&K.id===Z;te.setState(K,M,$e)}let Ve=!1;K.version===se.__version?(se.needsLights&&se.lightsStateVersion!==En.state.version||se.outputColorSpace!==At||et.isBatchedMesh&&se.batching===!1||!et.isBatchedMesh&&se.batching===!0||et.isBatchedMesh&&se.batchingColor===!0&&et._colorsTexture===null||et.isBatchedMesh&&se.batchingColor===!1&&et._colorsTexture!==null||et.isInstancedMesh&&se.instancing===!1||!et.isInstancedMesh&&se.instancing===!0||et.isSkinnedMesh&&se.skinning===!1||!et.isSkinnedMesh&&se.skinning===!0||et.isInstancedMesh&&se.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&se.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&se.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&se.instancingMorph===!1&&et.morphTexture!==null||se.envMap!==ee||K.fog===!0&&se.fog!==rt||se.numClippingPlanes!==void 0&&(se.numClippingPlanes!==te.numPlanes||se.numIntersection!==te.numIntersection)||se.vertexAlphas!==xe||se.vertexTangents!==Ee||se.morphTargets!==ie||se.morphNormals!==Ze||se.morphColors!==pn||se.toneMapping!==hn||se.morphTargetsCount!==Sn||!!se.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Ve=!0):(Ve=!0,se.__version=K.version);let tn=se.currentProgram;Ve===!0&&(tn=rn(K,L,et),b&&K.isNodeMaterial&&b.onUpdateProgram(K,tn,se));let An=!1,Rn=!1,Ci=!1,Oe=tn.getUniforms(),en=se.uniforms;if(w.useProgram(tn.program)&&(An=!0,Rn=!0,Ci=!0),K.id!==Z&&(Z=K.id,Rn=!0),se.needsLights){let $e=D(E.state.lightProbeGridArray,et);se.lightProbeGrid!==$e&&(se.lightProbeGrid=$e,Rn=!0)}if(An||_!==M){w.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Oe.setValue(Q,"projectionMatrix",M.projectionMatrix),Oe.setValue(Q,"viewMatrix",M.matrixWorldInverse);let On=Oe.map.cameraPosition;On!==void 0&&On.setValue(Q,ge.setFromMatrixPosition(M.matrixWorld)),k.logarithmicDepthBuffer&&Oe.setValue(Q,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Oe.setValue(Q,"isOrthographic",M.isOrthographicCamera===!0),_!==M&&(_=M,Rn=!0,Ci=!0)}if(se.needsLights&&(En.state.sunShadowMap.length>0&&Oe.setValue(Q,"sunShadowMap",En.state.sunShadowMap,ct),En.state.directionalShadowMap.length>0&&Oe.setValue(Q,"directionalShadowMap",En.state.directionalShadowMap,ct),En.state.spotShadowMap.length>0&&Oe.setValue(Q,"spotShadowMap",En.state.spotShadowMap,ct),En.state.pointShadowMap.length>0&&Oe.setValue(Q,"pointShadowMap",En.state.pointShadowMap,ct)),et.isSkinnedMesh){Oe.setOptional(Q,et,"bindMatrix"),Oe.setOptional(Q,et,"bindMatrixInverse");let $e=et.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),Oe.setValue(Q,"boneTexture",$e.boneTexture,ct))}et.isBatchedMesh&&(Oe.setOptional(Q,et,"batchingTexture"),Oe.setValue(Q,"batchingTexture",et._matricesTexture,ct),Oe.setOptional(Q,et,"batchingIdTexture"),Oe.setValue(Q,"batchingIdTexture",et._indirectTexture,ct),Oe.setOptional(Q,et,"batchingColorTexture"),et._colorsTexture!==null&&Oe.setValue(Q,"batchingColorTexture",et._colorsTexture,ct));let si=$.morphAttributes;if((si.position!==void 0||si.normal!==void 0||si.color!==void 0)&&V.update(et,$,tn),(Rn||se.receiveShadow!==et.receiveShadow)&&(se.receiveShadow=et.receiveShadow,Oe.setValue(Q,"receiveShadow",et.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&L.environment!==null&&(en.envMapIntensity.value=L.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=C1()),Rn){if(Oe.setValue(Q,"toneMappingExposure",G.toneMappingExposure),se.needsLights&&it(en,Ci),rt&&K.fog===!0&&Qt.refreshFogUniforms(en,rt),Qt.refreshMaterialUniforms(en,K,pt,xt,E.state.transmissionRenderTarget[M.id]),se.needsLights&&se.lightProbeGrid){let $e=se.lightProbeGrid;en.probesSH.value=$e.texture,en.probesMin.value.copy($e.boundingBox.min),en.probesMax.value.copy($e.boundingBox.max),en.probesResolution.value.copy($e.resolution)}or.upload(Q,an(se),en,ct)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(or.upload(Q,an(se),en,ct),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Oe.setValue(Q,"center",et.center),Oe.setValue(Q,"modelViewMatrix",et.modelViewMatrix),Oe.setValue(Q,"normalMatrix",et.normalMatrix),Oe.setValue(Q,"modelMatrix",et.matrixWorld),K.uniformsGroups!==void 0){let $e=K.uniformsGroups;for(let On=0,ri=$e.length;On<ri;On++){let vs=$e[On];Tt.update(vs,tn),Tt.bind(vs,tn)}}return tn}function it(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.sunLights.needsUpdate=L,M.sunLightShadows.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function ft(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return lt},this.getActiveMipmapLevel=function(){return ht},this.getRenderTarget=function(){return Mt},this.setRenderTargetTextures=function(M,L,$){let K=at.get(M);K.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),at.get(M.texture).__webglTexture=L,at.get(M.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:$,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,L){let $=at.get(M);$.__webglFramebuffer=L,$.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(M,L=0,$=0){Mt=M,lt=L,ht=$;let K=null,et=!1,rt=!1;if(M){let At=at.get(M);if(At.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(Q.FRAMEBUFFER,At.__webglFramebuffer),bt.copy(M.viewport),Jt.copy(M.scissor),Ct=M.scissorTest,w.viewport(bt),w.scissor(Jt),w.setScissorTest(Ct),Z=-1;return}else if(At.__webglFramebuffer===void 0)ct.setupRenderTarget(M);else if(At.__hasExternalTextures)ct.rebindTextures(M,at.get(M.texture).__webglTexture,at.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let xe=M.depthTexture;if(At.__boundDepthTexture!==xe){if(xe!==null&&at.has(xe)&&(M.width!==xe.image.width||M.height!==xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(M)}}let Gt=M.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(rt=!0);let ee=at.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(ee[L])?K=ee[L][$]:K=ee[L],et=!0):M.samples>0&&ct.useMultisampledRTT(M)===!1?K=at.get(M).__webglMultisampledFramebuffer:Array.isArray(ee)?K=ee[$]:K=ee,bt.copy(M.viewport),Jt.copy(M.scissor),Ct=M.scissorTest}else bt.copy($t).multiplyScalar(pt).floor(),Jt.copy(Te).multiplyScalar(pt).floor(),Ct=Fe;if($!==0&&(K=Y),w.bindFramebuffer(Q.FRAMEBUFFER,K)&&w.drawBuffers(M,K),w.viewport(bt),w.scissor(Jt),w.setScissorTest(Ct),et){let At=at.get(M.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+L,At.__webglTexture,$)}else if(rt){let At=L;for(let Gt=0;Gt<M.textures.length;Gt++){let ee=at.get(M.textures[Gt]);Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+Gt,ee.__webglTexture,$,At)}}else if(M!==null&&$!==0){let At=at.get(M.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,At.__webglTexture,$)}Z=-1};function gt(M){let L=at.get(M);return(L.__readFormat!==M.format||L.__readType!==M.type)&&(L.__readFormat=M.format,L.__readType=M.type,L.__formatReadable=k.textureFormatReadable(M.format),L.__typeReadable=k.textureTypeReadable(M.type)),L}this.readRenderTargetPixels=function(M,L,$,K,et,rt,St,At=0){if(!(M&&M.isWebGLRenderTarget)){Me("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=at.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&St!==void 0&&(Gt=Gt[St]),Gt){w.bindFramebuffer(Q.FRAMEBUFFER,Gt);try{let ee=M.textures[At],xe=ee.format,Ee=ee.type;M.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+At);let ie=gt(ee);if(ie.__formatReadable===!1){Me("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ie.__typeReadable===!1){Me("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-K&&$>=0&&$<=M.height-et&&Q.readPixels(L,$,K,et,Et.convert(xe),Et.convert(Ee),rt)}finally{let ee=Mt!==null?at.get(Mt).__webglFramebuffer:null;w.bindFramebuffer(Q.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(M,L,$,K,et,rt,St,At=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=at.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&St!==void 0&&(Gt=Gt[St]),Gt)if(L>=0&&L<=M.width-K&&$>=0&&$<=M.height-et){w.bindFramebuffer(Q.FRAMEBUFFER,Gt);let ee=M.textures[At],xe=ee.format,Ee=ee.type;M.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+At);let ie=gt(ee);if(ie.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ie.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ze=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,Ze),Q.bufferData(Q.PIXEL_PACK_BUFFER,rt.byteLength,Q.STREAM_READ),Q.readPixels(L,$,K,et,Et.convert(xe),Et.convert(Ee),0),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null);let pn=Mt!==null?at.get(Mt).__webglFramebuffer:null;w.bindFramebuffer(Q.FRAMEBUFFER,pn);let hn=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await Uu(Q,hn,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,Ze),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,rt),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null),Q.deleteBuffer(Ze),Q.deleteSync(hn),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,L=null,$=0){let K=Math.pow(2,-$),et=Math.floor(M.image.width*K),rt=Math.floor(M.image.height*K),St=L!==null?L.x:0,At=L!==null?L.y:0;ct.setTexture2D(M,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,$,0,0,St,At,et,rt),w.unbindTexture()},this.copyTextureToTexture=function(M,L,$=null,K=null,et=0,rt=0){let St,At,Gt,ee,xe,Ee,ie,Ze,pn,hn=M.isCompressedTexture?M.mipmaps[rt]:M.image;if($!==null)St=$.max.x-$.min.x,At=$.max.y-$.min.y,Gt=$.isBox3?$.max.z-$.min.z:1,ee=$.min.x,xe=$.min.y,Ee=$.isBox3?$.min.z:0;else{let en=Math.pow(2,-et);St=Math.floor(hn.width*en),At=Math.floor(hn.height*en),M.isDataArrayTexture?Gt=hn.depth:M.isData3DTexture?Gt=Math.floor(hn.depth*en):Gt=1,ee=0,xe=0,Ee=0}K!==null?(ie=K.x,Ze=K.y,pn=K.z):(ie=0,Ze=0,pn=0);let on=Et.convert(L.format),Sn=Et.convert(L.type),se;L.isData3DTexture?(ct.setTexture3D(L,0),se=Q.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(ct.setTexture2DArray(L,0),se=Q.TEXTURE_2D_ARRAY):(ct.setTexture2D(L,0),se=Q.TEXTURE_2D),w.activeTexture(Q.TEXTURE0),w.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,L.flipY),w.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),w.pixelStorei(Q.UNPACK_ALIGNMENT,L.unpackAlignment);let En=w.getParameter(Q.UNPACK_ROW_LENGTH),Ve=w.getParameter(Q.UNPACK_IMAGE_HEIGHT),tn=w.getParameter(Q.UNPACK_SKIP_PIXELS),An=w.getParameter(Q.UNPACK_SKIP_ROWS),Rn=w.getParameter(Q.UNPACK_SKIP_IMAGES);w.pixelStorei(Q.UNPACK_ROW_LENGTH,hn.width),w.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,hn.height),w.pixelStorei(Q.UNPACK_SKIP_PIXELS,ee),w.pixelStorei(Q.UNPACK_SKIP_ROWS,xe),w.pixelStorei(Q.UNPACK_SKIP_IMAGES,Ee);let Ci=M.isDataArrayTexture||M.isData3DTexture,Oe=L.isDataArrayTexture||L.isData3DTexture;if(M.isDepthTexture){let en=at.get(M),si=at.get(L),$e=at.get(en.__renderTarget),On=at.get(si.__renderTarget);w.bindFramebuffer(Q.READ_FRAMEBUFFER,$e.__webglFramebuffer),w.bindFramebuffer(Q.DRAW_FRAMEBUFFER,On.__webglFramebuffer);for(let ri=0;ri<Gt;ri++)Ci&&(Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,at.get(M).__webglTexture,et,Ee+ri),Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,at.get(L).__webglTexture,rt,pn+ri)),Q.blitFramebuffer(ee,xe,St,At,ie,Ze,St,At,Q.DEPTH_BUFFER_BIT,Q.NEAREST);w.bindFramebuffer(Q.READ_FRAMEBUFFER,null),w.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else if(et!==0||M.isRenderTargetTexture||at.has(M)){let en=at.get(M),si=at.get(L);w.bindFramebuffer(Q.READ_FRAMEBUFFER,W),w.bindFramebuffer(Q.DRAW_FRAMEBUFFER,q);for(let $e=0;$e<Gt;$e++)Ci?Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,en.__webglTexture,et,Ee+$e):Q.framebufferTexture2D(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,en.__webglTexture,et),Oe?Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,si.__webglTexture,rt,pn+$e):Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,si.__webglTexture,rt),et!==0?Q.blitFramebuffer(ee,xe,St,At,ie,Ze,St,At,Q.COLOR_BUFFER_BIT,Q.NEAREST):Oe?Q.copyTexSubImage3D(se,rt,ie,Ze,pn+$e,ee,xe,St,At):Q.copyTexSubImage2D(se,rt,ie,Ze,ee,xe,St,At);w.bindFramebuffer(Q.READ_FRAMEBUFFER,null),w.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else Oe?M.isDataTexture||M.isData3DTexture?Q.texSubImage3D(se,rt,ie,Ze,pn,St,At,Gt,on,Sn,hn.data):L.isCompressedArrayTexture?Q.compressedTexSubImage3D(se,rt,ie,Ze,pn,St,At,Gt,on,hn.data):Q.texSubImage3D(se,rt,ie,Ze,pn,St,At,Gt,on,Sn,hn):M.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,rt,ie,Ze,St,At,on,Sn,hn.data):M.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,rt,ie,Ze,hn.width,hn.height,on,hn.data):Q.texSubImage2D(Q.TEXTURE_2D,rt,ie,Ze,St,At,on,Sn,hn);w.pixelStorei(Q.UNPACK_ROW_LENGTH,En),w.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Ve),w.pixelStorei(Q.UNPACK_SKIP_PIXELS,tn),w.pixelStorei(Q.UNPACK_SKIP_ROWS,An),w.pixelStorei(Q.UNPACK_SKIP_IMAGES,Rn),rt===0&&L.generateMipmaps&&Q.generateMipmap(se),w.unbindTexture()},this.initRenderTarget=function(M){at.get(M).__webglFramebuffer===void 0&&ct.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?ct.setTextureCube(M,0):M.isData3DTexture?ct.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ct.setTexture2DArray(M,0):ct.setTexture2D(M,0),w.unbindTexture()},this.resetState=function(){lt=0,ht=0,Mt=null,w.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=We._getDrawingBufferColorSpace(t),e.unpackColorSpace=We._getUnpackColorSpace()}};window.FestaGL=(()=>{let i=Math.PI*2,t=(d,C,I)=>Math.min(I,Math.max(C,d)),e={add:(d,C)=>[d[0]+C[0],d[1]+C[1],d[2]+C[2]],sub:(d,C)=>[d[0]-C[0],d[1]-C[1],d[2]-C[2]],mul:(d,C)=>[d[0]*C,d[1]*C,d[2]*C],dot:(d,C)=>d[0]*C[0]+d[1]*C[1]+d[2]*C[2],cross:(d,C)=>[d[1]*C[2]-d[2]*C[1],d[2]*C[0]-d[0]*C[2],d[0]*C[1]-d[1]*C[0]],len:d=>Math.hypot(...d),norm:d=>{let C=Math.hypot(...d)||1;return d.map(I=>I/C)}},n={identity:()=>new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),multiply:(d,C)=>{let I=new Float32Array(16);for(let g=0;g<4;g++)for(let R=0;R<4;R++)I[g*4+R]=d[R]*C[g*4]+d[4+R]*C[g*4+1]+d[8+R]*C[g*4+2]+d[12+R]*C[g*4+3];return I},perspective:(d,C,I,g)=>{let R=1/Math.tan(d/2),E=new Float32Array(16);return E[0]=R/C,E[5]=R,E[10]=(g+I)/(I-g),E[11]=-1,E[14]=2*g*I/(I-g),E},ortho:(d,C,I,g,R,E)=>new Float32Array([2/(C-d),0,0,0,0,2/(g-I),0,0,0,0,-2/(E-R),0,-(C+d)/(C-d),-(g+I)/(g-I),-(E+R)/(E-R),1]),lookAt:(d,C,I=[0,1,0])=>{let g=e.norm(e.sub(d,C)),R=e.norm(e.cross(I,g)),E=e.cross(g,R);return new Float32Array([R[0],E[0],g[0],0,R[1],E[1],g[1],0,R[2],E[2],g[2],0,-e.dot(R,d),-e.dot(E,d),-e.dot(g,d),1])},compose:(d=0,C=0,I=0,g=0,R=1,E=R,F=R)=>{let x=Math.cos(g),U=Math.sin(g);return new Float32Array([x*R,0,-U*R,0,0,E,0,0,U*F,0,x*F,0,d,C,I,1])},transform:(d,C,I=1)=>[d[0]*C[0]+d[4]*C[1]+d[8]*C[2]+d[12]*I,d[1]*C[0]+d[5]*C[1]+d[9]*C[2]+d[13]*I,d[2]*C[0]+d[6]*C[1]+d[10]*C[2]+d[14]*I],inverse:d=>{let C=new Float32Array(16),I=Array.from(d),g=Array.from({length:4},(R,E)=>[I[E],I[E+4],I[E+8],I[E+12],...Array.from({length:4},(F,x)=>E===x?1:0)]);for(let R=0;R<4;R++){let E=R;for(let x=R+1;x<4;x++)Math.abs(g[x][R])>Math.abs(g[E][R])&&(E=x);[g[R],g[E]]=[g[E],g[R]];let F=g[R][R];if(Math.abs(F)<1e-12)return n.identity();for(let x=0;x<8;x++)g[R][x]/=F;for(let x=0;x<4;x++)if(x!==R){let U=g[x][R];for(let G=0;G<8;G++)g[x][G]-=U*g[R][G]}}for(let R=0;R<4;R++)for(let E=0;E<4;E++)C[E*4+R]=g[R][E+4];return C}};function s(d){return Array.isArray(d)?d:typeof d=="number"?[(d>>16&255)/255,(d>>8&255)/255,(d&255)/255]:(d=d.replace("#",""),d.length===3&&(d=d.split("").map(C=>C+C).join("")),s(parseInt(d,16)))}function r(d=91371){let C=d>>>0;return()=>{C+=1831565813;let I=C;return I=Math.imul(I^I>>>15,I|1),I^=I+Math.imul(I^I>>>7,I|61),((I^I>>>14)>>>0)/4294967296}}let l=(d="#ffffff",C=0,I=.7,g=0,R=0,E=1)=>({color:s(d),p:[C,I,g,R],ao:E});class o{constructor(){this.data=new Float32Array(262144),this.used=0,this.count=0,this.transform=n.identity(),this.animation=[0,0,0,0]}reserve(C){if(this.used+C>this.data.length){let I=new Float32Array(Math.max(this.data.length*2,this.used+C));I.set(this.data),this.data=I}}vertex(C,I,g,R){this.reserve(20),C=n.transform(this.transform,C),I=e.norm(n.transform(this.transform,I,0));let E=this.data,F=this.used,x=R.color;for(let U=0;U<3;U++)E[F+U]=C[U];for(let U=0;U<3;U++)E[F+3+U]=I[U];E[F+6]=g[0],E[F+7]=g[1],E[F+8]=x[0],E[F+9]=x[1],E[F+10]=x[2],E[F+11]=R.ao??1;for(let U=0;U<4;U++)E[F+12+U]=R.p[U];for(let U=0;U<4;U++)E[F+16+U]=this.animation[U];this.used+=20,this.count++}tri(C,I,g,R,E=[[0,0],[0,1],[1,1]],F=null){let x=e.norm(e.cross(e.sub(I,C),e.sub(g,C)));this.vertex(C,F?F[0]:x,E[0],R),this.vertex(I,F?F[1]:x,E[1],R),this.vertex(g,F?F[2]:x,E[2],R)}quad(C,I,g,R,E,F=1,x=1){this.tri(C,I,g,E,[[0,0],[0,x],[F,x]]),this.tri(C,g,R,E,[[0,0],[F,x],[F,0]])}box(C,I,g,R,E,F,x){let U=C-R/2,G=C+R/2,X=I-E/2,b=I+E/2,Y=g-F/2,W=g+F/2;this.quad([U,b,W],[U,X,W],[G,X,W],[G,b,W],x,x.fit?1:R,x.fit?1:E),this.quad([G,b,Y],[G,X,Y],[U,X,Y],[U,b,Y],x,x.fit?1:R,x.fit?1:E),this.quad([G,b,W],[G,X,W],[G,X,Y],[G,b,Y],x,x.fit?1:F,x.fit?1:E),this.quad([U,b,Y],[U,X,Y],[U,X,W],[U,b,W],x,x.fit?1:F,x.fit?1:E),this.quad([U,b,Y],[U,b,W],[G,b,W],[G,b,Y],x,x.fit?1:R,x.fit?1:F),this.quad([U,X,W],[U,X,Y],[G,X,Y],[G,X,W],x,x.fit?1:R,x.fit?1:F)}plane(C,I,g,R,E,F,x=R,U=E){this.quad([C-R/2,I,g-E/2],[C-R/2,I,g+E/2],[C+R/2,I,g+E/2],[C+R/2,I,g-E/2],F,x,U)}sphere(C,I,g,R,E,F,x,U=16,G=10,X=0,b=Math.PI){let Y=(W,q)=>{let lt=W/U*i,ht=X+q/G*(b-X),Mt=[Math.sin(ht)*Math.cos(lt),Math.cos(ht),Math.sin(ht)*Math.sin(lt)];return{p:[C+Mt[0]*R,I+Mt[1]*E,g+Mt[2]*F],n:e.norm([Mt[0]/R,Mt[1]/E,Mt[2]/F]),uv:[W/U,q/G]}};for(let W=0;W<G;W++)for(let q=0;q<U;q++){let lt=Y(q,W),ht=Y(q,W+1),Mt=Y(q+1,W+1),Z=Y(q+1,W);for(let _ of[[lt,ht,Mt],[lt,Mt,Z]]){let bt=e.cross(e.sub(_[1].p,_[0].p),e.sub(_[2].p,_[0].p));e.dot(bt,_[0].n)<0&&([_[1],_[2]]=[_[2],_[1]]),this.tri(..._.map(Jt=>Jt.p),x,_.map(Jt=>Jt.uv),_.map(Jt=>Jt.n))}}}cylinder(C,I,g,R,E,F=12,x=!0){let U=e.norm(e.sub(I,C)),G=e.norm(e.cross(U,Math.abs(U[1])>.95?[1,0,0]:[0,1,0])),X=e.cross(U,G),b=e.len(e.sub(I,C)),Y=(q,lt,ht)=>e.add(q,e.add(e.mul(G,Math.cos(ht)*lt),e.mul(X,Math.sin(ht)*lt))),W=q=>e.norm(e.add(e.add(e.mul(G,Math.cos(q)),e.mul(X,Math.sin(q))),e.mul(U,(g-R)/b)));for(let q=0;q<F;q++){let lt=q/F*i,ht=(q+1)/F*i,Mt=Y(C,g,lt),Z=Y(I,R,lt),_=Y(I,R,ht),bt=Y(C,g,ht),Jt=W(lt),Ct=W(ht);this.tri(Mt,_,Z,E,[[q/F,0],[(q+1)/F,b],[q/F,b]],[Jt,Ct,Jt]),this.tri(Mt,bt,_,E,[[q/F,0],[(q+1)/F,0],[(q+1)/F,b]],[Jt,Ct,Ct]),x&&(this.tri(C,bt,Mt,E),this.tri(I,Z,_,E))}}disk(C,I,g,R,E,F=32){for(let x=0;x<F;x++){let U=x/F*i,G=(x+1)/F*i;this.tri([C,I,g],[C+Math.cos(G)*R,I,g+Math.sin(G)*R],[C+Math.cos(U)*R,I,g+Math.sin(U)*R],E,[[.5,.5],[.5+Math.cos(G)*.5,.5+Math.sin(G)*.5],[.5+Math.cos(U)*.5,.5+Math.sin(U)*.5]])}}tube(C,I,g,R=8){for(let E=1;E<C.length;E++)this.cylinder(C[E-1],C[E],I,I,g,R)}sign(C,I,g,R,E,F,x=!1){let U=l("#ffffff",F,.8,0,.15);this.quad([C-R/2,I+E/2,g],[C-R/2,I-E/2,g],[C+R/2,I-E/2,g],[C+R/2,I+E/2,g],U),x&&this.box(C,I,g-.022,R+.05,E+.05,.04,l("#574333",3))}scope(C,I){let g=this.transform;this.transform=n.multiply(g,C),I(),this.transform=g}animate(C,I,g){let R=this.animation;this.animation=[...C,I],g(),this.animation=R}}class u{constructor(C=512){this.size=C,this.layers=[],this.names={}}add(C,I){let g=document.createElement("canvas");g.width=g.height=this.size;let R=g.getContext("2d",{willReadFrequently:!0});I&&I(R,this.size);let E=this.layers.length;return this.layers.push(g),this.names[C]=E,E}sign(C,I,g="",R="#304c55",E=""){return this.add(C,(F,x)=>{F.fillStyle="#f9f7f0",F.fillRect(0,0,x,x),F.fillStyle=R,F.fillRect(0,0,x,62),F.fillStyle="#ffffff",F.font='700 24px "Noto Sans CJK JP", "Yu Gothic", sans-serif',F.fillText(E||C,22,41),F.fillStyle="#273b3c";let U=h(F,I,x-52,37),G=U.length>3?30:37;U=h(F,I,x-52,G),F.font=`700 ${G}px "Noto Sans CJK JP", "Yu Gothic", sans-serif`;let X=154-Math.min(U.length,4)*4;U.slice(0,4).forEach((W,q)=>F.fillText(W,26,X+q*(G+10))),F.fillStyle="#53605b",F.font='500 25px "Noto Sans CJK JP", "Yu Gothic", sans-serif';let b=h(F,g,x-52,25),Y=Math.max(300,X+U.length*(G+10)+25);b.slice(0,4).forEach((W,q)=>F.fillText(W,26,Y+q*34)),F.fillStyle=R,F.fillRect(26,x-53,x-52,3),F.fillStyle="#6b7770",F.font='19px "Noto Sans CJK JP", "Yu Gothic", sans-serif',F.fillText("つながりフェスタ 2026",26,x-23)})}banner(C,I,g="",R="#174f54"){return this.add(C,(E,F)=>{E.scale(1,F/112),E.fillStyle="#f9f7f0",E.fillRect(0,0,F,112),E.fillStyle=R,E.fillRect(0,0,76,112),E.fillStyle="#fff",E.font='700 23px "Noto Sans CJK JP", "Yu Gothic", sans-serif',E.textAlign="center",E.fillText(C,38,64);let x=29;for(;x>17&&(E.font=`700 ${x}px "Noto Sans CJK JP", "Yu Gothic", sans-serif`,!(E.measureText(I).width<F-104));)x--;E.textAlign="left",E.fillStyle="#263d3c",E.fillText(I,92,52),E.font='500 17px "Noto Sans CJK JP", "Yu Gothic", sans-serif',E.fillStyle="#5b675d";let U=g;for(;E.measureText(U).width>F-109&&U.length;)U=U.slice(0,-1);E.fillText(U,92,84),E.fillStyle=R,E.fillRect(76,106,F-76,6)})}upload(C,I=this.size){let g=new Uint8Array(I*I*4*this.layers.length),R=document.createElement("canvas");R.width=R.height=I;let E=R.getContext("2d");this.layers.forEach((F,x)=>{E.clearRect(0,0,I,I),E.drawImage(F,0,0,I,I),g.set(E.getImageData(0,0,I,I).data,x*I*I*4)}),this.texture=new fs(g,I,I,this.layers.length),this.texture.colorSpace=Cn,this.texture.wrapS=this.texture.wrapT=Ws,this.texture.minFilter=Ti,this.texture.magFilter=vn,this.texture.generateMipmaps=!0,this.texture.anisotropy=4,this.texture.needsUpdate=!0}}function h(d,C,I,g){d.font=`700 ${g}px "Noto Sans CJK JP", "Yu Gothic", sans-serif`;let R=[],E="";for(let F of C){if(F===`
`){R.push(E),E="";continue}d.measureText(E+F).width>I&&E?(R.push(E),E=F):E+=F}return E&&R.push(E),R}let p=`#version 300 es
 precision highp float;out vec2 vUV;void main(){vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));vUV=p;gl_Position=vec4(p*2.-1.,0.,1.);}`,y=`#version 300 es
 precision highp float;in vec2 vUV;out vec4 frag;uniform mat4 uInvVP;uniform vec3 uEye;uniform vec3 uSun;uniform float uTime;
 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+1.),f.x),f.y);}float fbm(vec2 p){float n=0.,a=.5;for(int i=0;i<5;i++){n+=noise(p)*a;p=p*2.03+vec2(17.3,9.2);a*=.51;}return n;}
 void main(){vec4 q=uInvVP*vec4(vUV*2.-1.,1.,1.);vec3 ray=normalize(q.xyz/q.w-uEye);float up=max(ray.y,0.);vec3 sky=mix(vec3(.71,.83,.90),vec3(.22,.48,.78),pow(up,.44));float sun=max(dot(ray,uSun),0.);sky+=vec3(1.,.81,.57)*pow(sun,100.)*.22;sky+=vec3(3.,2.8,2.5)*smoothstep(.99988,.99998,sun);
 if(ray.y>.018){vec2 cp=ray.xz/(ray.y+.07)*2.7+vec2(uTime*.0014,0.);float n=fbm(cp);float cloud=smoothstep(.52,.76,n)*smoothstep(.01,.20,ray.y);float shade=fbm(cp+vec2(.18,.08));sky=mix(sky,mix(vec3(.79,.83,.86),vec3(1.15,1.14,1.10),shade),cloud*.75);}if(ray.y<0.)sky=mix(sky,vec3(.65,.71,.69),min(-ray.y*4.,1.));frag=vec4(sky,1.);}
 `,m=`
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
 `,T=`
 vec3 transformed = festaAnimation.xyz+festaRotation()*(position-festaAnimation.xyz);
 if(festaAnimation.w>8.) transformed.z+=sin(festaTime*1.9+transformed.x*4.+transformed.y*1.3)*.08*max(0.,transformed.x-festaAnimation.x);
 if(festaInfo.z>0.) transformed.xz+=festaInfo.z*.045*sin(festaTime*.7+transformed.xz*.23)*clamp(transformed.y*.15,0.,1.);
 festaUV=uv; festaMat=festaSurface; festaShade=festaAO; festaWorld=(instanceMatrix*vec4(transformed,1.)).xyz;
 `;function v(d,C,I=!1){return d.onBeforeCompile=g=>{g.uniforms.festaTime=C.timeUniform,g.uniforms.festaAtlas=C.atlasUniform,g.vertexShader=m+g.vertexShader,g.vertexShader=g.vertexShader.replace("#include <begin_vertex>",T).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
objectNormal=festaRotation()*objectNormal;`),g.fragmentShader=`precision highp sampler2DArray;
uniform sampler2DArray festaAtlas;
varying vec2 festaUV;
varying vec4 festaMat;
varying float festaShade;
varying vec3 festaWorld;
float festaNoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(fract(sin(dot(i,vec2(127.1,311.7)))*43758.5453),fract(sin(dot(i+vec2(1.,0.),vec2(127.1,311.7)))*43758.5453),f.x),mix(fract(sin(dot(i+vec2(0.,1.),vec2(127.1,311.7)))*43758.5453),fract(sin(dot(i+1.,vec2(127.1,311.7)))*43758.5453),f.x),f.y); }
`+g.fragmentShader,g.fragmentShader=g.fragmentShader.replace("#include <map_fragment>",`vec4 festaTexel=texture(festaAtlas,vec3(festaUV,festaMat.x));
if(festaTexel.a<.4) discard;
diffuseColor*=festaTexel;
if(festaMat.x>.5 && festaMat.x<1.5){float variation=festaNoise(festaWorld.xz*.28)*.65+festaNoise(festaWorld.xz*2.1)*.35;diffuseColor.rgb*=mix(.72,1.14,variation);}
if(festaMat.x>3.5 && festaMat.x<4.5)diffuseColor.rgb*=mix(.84,1.09,festaNoise(festaWorld.xz*.6));`),g.fragmentShader=g.fragmentShader.replace("diffuseColor*=festaTexel;",`diffuseColor*=festaTexel;
if(festaMat.x>2.5 && festaMat.x<3.5){
 float weather=festaNoise(festaWorld.xz*.31+vec2(0.,festaWorld.y*.18));
 float baseDamp=(1.-smoothstep(.15,1.6,festaWorld.y))*festaNoise(festaWorld.xz*1.8);
 diffuseColor.rgb*=mix(.93,1.02,weather)*(1.-baseDamp*.13);
}`),I||(g.fragmentShader=g.fragmentShader.replace("#include <roughnessmap_fragment>","float roughnessFactor=clamp(festaMat.y,.06,1.);").replace("#include <metalnessmap_fragment>","float metalnessFactor=clamp(festaMat.z,0.,1.);").replace("#include <emissivemap_fragment>","totalEmissiveRadiance=diffuseColor.rgb*festaMat.w;").replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
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
}`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
reflectedLight.indirectDiffuse*=festaShade;`))},d.customProgramCacheKey=()=>I?"festa-depth-2":"festa-standard-2",d}class P{constructor(C,I,{name:g="",shadow:R=!0,instances:E=null,dynamic:F=!1}={}){this.name=g,this.renderer=C,this.count=I.count,this.shadow=R,this.dynamic=F,this.instances=E||[{matrix:n.identity(),info:[0,0,0,0]}];let x=I.data.slice(0,I.used),U=new De;for(let b=0;b<x.length;b+=20)U.setRGB(x[b+8],x[b+9],x[b+10],Cn),x[b+8]=U.r,x[b+9]=U.g,x[b+10]=U.b;let G=new Kn,X=new Fr(x,20);for(let[b,Y,W]of[["position",3,0],["normal",3,3],["uv",2,6],["color",3,8],["festaAO",1,11],["festaSurface",4,12],["festaAnimation",4,16]])G.setAttribute(b,new Or(X,Y,W));this.info=new ps(new Float32Array(this.instances.length*4),4),this.info.setUsage(al),G.setAttribute("festaInfo",this.info),this.object=new Vr(G,C.surfaceMaterial,this.instances.length),this.object.name=g,this.object.castShadow=R,this.object.receiveShadow=!0,this.object.frustumCulled=!1,this.object.customDepthMaterial=C.depthMaterial,this.object.instanceMatrix.setUsage(al),this.matrix=new Je,this.updateInstances(),C.scene.add(this.object),C.meshes.push(this),I.data=null}get visible(){return this.object.visible}set visible(C){this.object.visible=C}updateInstances(){this.instances.forEach((C,I)=>{this.object.setMatrixAt(I,this.matrix.fromArray(C.matrix)),this.info.set(C.info||[0,0,0,0],I*4)}),this.object.instanceMatrix.needsUpdate=!0,this.info.needsUpdate=!0}dispose(){this.renderer.scene.remove(this.object),this.object.geometry.dispose(),this.object.dispose(),this.renderer.meshes=this.renderer.meshes.filter(C=>C!==this)}}class A{constructor(C,I="standard"){this.canvas=C,this.engine=new ul({canvas:C,alpha:!1,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0}),this.gl=this.engine.getContext(),this.engine.outputColorSpace=Cn,this.engine.toneMapping=jr,this.engine.shadowMap.enabled=!0,this.engine.shadowMap.type=ms,this.engine.shadowMap.autoUpdate=!1,this.scene=new Dr,this.scene.fog=new Lr("#c5d3d8",110,420),this.camera={eye:[0,1.68,20],target:[0,1.68,0],fov:66*Math.PI/180,near:.065,far:700},this.threeCamera=new Dn,this.meshes=[],this.quality=I,this.time=0,this.exposure=1.12,this.sun=e.norm([-.38,.79,.48]),this.sunColor=[1,.94,.81],this.sunPower=3.7,this.timeUniform={value:0},this.atlasUniform={value:null},this.surfaceMaterial=v(new Xr({color:16777215,vertexColors:!0,roughness:1,metalness:1,side:ti,alphaTest:.4}),this),this.depthMaterial=v(new Qs({depthPacking:Rc,side:ti,alphaTest:.4}),this,!0),this.hemisphere=new Zr("#c7e0f5","#817562",1.8),this.scene.add(this.hemisphere),this.sunLight=new $r(16777215,this.sunPower),this.sunLight.castShadow=!0,this.scene.add(this.sunLight,this.sunLight.target),this.stats={draws:0,triangles:0,fps:0},this.frameCount=0,this.fpsStamp=performance.now(),this.shadowAge=-1,this.shadowDirty=!0,this.targetSize=[0,0];let g=new Kn;g.setAttribute("position",new Gn([-1,-1,0,3,-1,0,-1,3,0],3)),this.skyUniforms={uInvVP:{value:new Je},uEye:{value:new ot},uSun:{value:new ot},uTime:this.timeUniform};let R=new js({glslVersion:oa,vertexShader:p.replace("#version 300 es","").replace("0.,1.);","1.,1.);"),fragmentShader:y.replace("#version 300 es","").replace("frag=vec4(sky,1.);","sky=sky*1.12; sky=clamp((sky*(2.51*sky+.03))/(sky*(2.43*sky+.59)+.14),0.,1.);frag=vec4(pow(sky,vec3(1./2.2)),1.);"),uniforms:this.skyUniforms,depthWrite:!1,depthTest:!1});this.sky=new Un(g,R),this.sky.frustumCulled=!1,this.sky.renderOrder=-1e3,this.scene.add(this.sky),this.setQuality(I)}set atlas(C){this._atlas=C,this.atlasUniform.value=C.texture}get atlas(){return this._atlas}setQuality(C){this.quality=C,this.pixelRatio=C==="high"?Math.min(devicePixelRatio,1.75):C==="low"?.8:Math.min(devicePixelRatio,1.15),this.shadowSize=C==="high"?4096:C==="low"?1024:2048,this.engine.setPixelRatio(this.pixelRatio),this.createShadow(),this.resize()}createShadow(){let C=this.sunLight,I=C.shadow;C.position.set(-3+this.sun[0]*230,this.sun[1]*230,26+this.sun[2]*230),C.target.position.set(-3,0,26),C.color.setRGB(...this.sunColor),C.intensity=this.sunPower,Object.assign(I.camera,{left:-108,right:108,top:108,bottom:-108,near:1,far:500}),I.camera.updateProjectionMatrix(),I.bias=-15e-5,I.normalBias=216/this.shadowSize*1.35,I.mapSize.x!==this.shadowSize&&(I.map?.dispose(),I.map=null,I.mapSize.set(this.shadowSize,this.shadowSize)),this.shadowDirty=!0}resize(){let C=Math.max(1,this.canvas.clientWidth),I=Math.max(1,this.canvas.clientHeight);C===this.targetSize[0]&&I===this.targetSize[1]&&this.engine.getPixelRatio()===this.pixelRatio||(this.targetSize=[C,I],this.engine.setSize(C,I,!1))}render(C=0){if(!this.atlas)return;this.time=C,this.timeUniform.value=C,this.resize();let I=this.camera,g=this.threeCamera;g.position.fromArray(I.eye),g.up.set(0,1,0),g.lookAt(new ot(...I.target)),g.fov=I.fov*180/Math.PI,g.aspect=this.canvas.clientWidth/this.canvas.clientHeight,g.near=I.near,g.far=I.far,g.updateProjectionMatrix(),g.updateMatrixWorld(),this.vp=new Je().multiplyMatrices(g.projectionMatrix,g.matrixWorldInverse).elements,this.invVp=new Je().fromArray(this.vp).invert().elements,this.skyUniforms.uInvVP.value.fromArray(this.invVp),this.skyUniforms.uEye.value.fromArray(I.eye),this.skyUniforms.uSun.value.fromArray(this.sun),this.engine.toneMappingExposure=this.exposure,(this.shadowDirty||C-this.shadowAge>.45)&&(this.engine.shadowMap.needsUpdate=!0,this.shadowDirty=!1,this.shadowAge=C),this.engine.render(this.scene,g),this.stats.draws=this.engine.info.render.calls,this.stats.triangles=this.engine.info.render.triangles,this.frameCount++;let R=performance.now();R-this.fpsStamp>1500&&(this.stats.fps=Math.round(this.frameCount*1e3/(R-this.fpsStamp)),this.frameCount=0,this.fpsStamp=R)}project(C){if(!this.vp)return null;let I=this.vp,g=n.transform(I,C),R=I[3]*C[0]+I[7]*C[1]+I[11]*C[2]+I[15];return R<=0?null:{x:(g[0]/R*.5+.5)*this.canvas.clientWidth,y:(-g[1]/R*.5+.5)*this.canvas.clientHeight,z:g[2]/R}}screenRay(C,I){if(!this.invVp)return null;let g=new Kr;return g.setFromCamera(new ze(C/this.canvas.clientWidth*2-1,1-I/this.canvas.clientHeight*2),this.threeCamera),g}groundPoint(C,I){return this.screenRay(C,I)?.ray.intersectPlane(new $n(new ot(0,1,0),0),new ot)?.toArray()||null}signFace(C,I,g,R){let E=this.screenRay(C,I),F=E?.intersectObject(g.object,!1)[0];return F?(E.far=F.distance-.001,E.intersectObjects(R.filter(U=>U.visible).map(U=>U.object),!1).length?null:F.faceIndex):null}}return{V:e,M:n,Geometry:o,Mesh:P,Renderer:A,Atlas:u,material:l,color:s,rng:r,clamp:t,TAU:i,wrap:h}})();window.FestaScenery={height(i,t){let e=(u,h,p,y,m)=>{let T=Math.hypot((i-u)/p,(t-h)/y);return T<1?m*Math.pow(Math.cos(T*Math.PI/2),2):0},n=Math.max(e(112,-4,49,100,25),e(130,82,65,84,22),e(-113,7,41,40,20),e(-39,-103,63,47,15),e(8,-107,45,48,20),e(53,-105,49,46,16));if(i<60.8||i>=103.2||t<=15.08||t>=96.08)return n;let s=u=>(u=Math.max(0,Math.min(1,u)),u*u*(3-2*u)),r=s((t-15.08)/12)*(1-s((t-80.08)/16)),l=s((i-75.2)/28),o=3.7+(Math.max(n,3.7)-3.7)*l;return n+(o-n)*r},textures(i,t){let e=i.layers[3],n=e.getContext("2d"),s=e.width,r=t(8401),l=n.createImageData(s,s);for(let o=0;o<s;o++)for(let u=0;u<s;u++){let h=Math.sin(u/s*Math.PI*4+.5)*Math.cos(o/s*Math.PI*6)*1.7,p=(r()-.5)*9+h,y=(o*s+u)*4;l.data[y]=241+p,l.data[y+1]=239+p,l.data[y+2]=229+p,l.data[y+3]=255}n.putImageData(l,0,0);for(let o of[7,8]){let u=i.layers[o].getContext("2d"),h=t(301+o);u.clearRect(0,0,s,s);for(let p=0;p<1700;p++){let y=h()*Math.PI*2,m=Math.sqrt(h()),T=.5+Math.cos(y)*m*.45,v=.5+Math.sin(y)*m*.42;if(m>.84&&h()>.52)continue;let P=(1-v)*12+h()*17,A=o===7?76+h()*30:18+h()*24;u.fillStyle=`hsl(${A},${o===7?24+h()*22:38+h()*20}%,${16+P}%)`,u.beginPath(),u.ellipse(T*s,v*s,3+h()*7,2+h()*4,h()*6.28,0,6.28),u.fill()}}return i.add("Window reflection",(o,u)=>{let h=o.createLinearGradient(0,0,0,u);h.addColorStop(0,"#9baeb3"),h.addColorStop(.46,"#667d81"),h.addColorStop(.49,"#536562"),h.addColorStop(1,"#364743"),o.fillStyle=h,o.fillRect(0,0,u,u);let p=t(721);for(let y=0;y<150;y++){let m=p()*u,T=u*(.48+p()*.5);o.fillStyle=`rgba(31,48,35,${.025+p()*.1})`,o.beginPath(),o.ellipse(m,T,5+p()*29,3+p()*16,0,0,6.28),o.fill()}o.fillStyle="rgba(218,228,226,.10)",o.fillRect(u*.23,0,u*.03,u),o.fillRect(u*.75,0,u*.018,u)})},build({details:i,green:t,distant:e,signGeo:n,childSign:s,p:r,planPoint:l,onRoad:o,gateOpen:u,m:h,mat:p,M:y,rng:m,TAU:T,ga:v,gb:P,gc:A,gw:d,gd:C,gymRise:I=.45}){let g=m(70031),R=(H,ut)=>H+(ut-H)*g(),E=p("#dcdccf",3,.88),F=p("#c7cbc3",3,.87),x=r(425.28,478),U=r(470,478),G=5.25,X=3.25,b=v[0]-1.2,Y=2.4,W=U[1]+1.2,q=P[1]+1.6,lt=(H,ut,Nt=1.05)=>{i.cylinder([H[0],H[1]+Nt,H[2]],[ut[0],ut[1]+Nt,ut[2]],.028,.028,E,7);let Ft=Math.max(1,Math.ceil(Math.hypot(ut[0]-H[0],ut[2]-H[2])/.19));for(let Ot=0;Ot<=Ft;Ot++){let Bt=Ot/Ft,Zt=H[0]+(ut[0]-H[0])*Bt,qt=H[1]+(ut[1]-H[1])*Bt,le=H[2]+(ut[2]-H[2])*Bt;i.cylinder([Zt,qt,le],[Zt,qt+Nt,le],.016,.016,E,6)}},ht=(H,ut,Nt,Ft,Ot)=>i.box((H+ut)/2,Ot-.14,(Nt+Ft)/2,ut-H,.28,Ft-Nt,E);ht(x[0],v[0],U[1]-1.2,W,G),lt([x[0],G,U[1]-1.2],[v[0],G,U[1]-1.2]),lt([x[0],G,W],[v[0]-Y,G,W]);for(let H of[x[0]+.22,v[0]-2.65])i.box(H,G/2-.14,U[1],.38,G-.28,.42,E);let Mt=12,Z=(q-W)/Mt,_=(G-X)/Mt;for(let H=0;H<Mt;H++){let ut=W+H*Z,Nt=ut+Z,Ft=G-H*_;i.box(b,Ft-_/2-.08,(ut+Nt)/2,Y,_+.16,Z+.015,E)}for(let H of[v[0]-Y,v[0]])i.quad([H,G-.28,W],[H,X-.28,q],[H,X-.48,q],[H,G-.48,W],E),lt([H,G,W],[H,X,q]);ht(v[0]-Y,P[0],P[1],q+1.3,X),lt([v[0]-Y,X,q+1.3],[A[0]+4.3,X,q+1.3]),lt([v[0]-Y,X,q],[v[0]-Y,X,q+1.3]);for(let H of[v[0]-Y+.25,v[0]+2.2,A[0]+4.4,P[0]-.25])i.box(H,(X-.28)/2,q+.99,.42,X-.28,.45,E);i.box((A[0]+4.3+P[0])/2,X+.46,q+1.17,P[0]-A[0]-4.3,.92,.22,E);let bt=p("#778885",0,.48,.08),Jt=p("#c3c5b9",0,.63,.18),Ct=p("#414c4e",0,.48,.62);for(let H of[-6.8,-2.3,2.3,6.8])i.box(A[0]+H,6,P[1]+.2,1.35,2.4,.09,Jt),i.box(A[0]+H,5.96,P[1]+.26,1.21,2.22,.03,bt),i.box(A[0]+H,6.75,P[1]+.29,1.22,.67,.05,E),i.box(A[0]+H,5.52,P[1]+.3,1.22,.045,.04,Jt);let J=v[0]+d*77/309,me=v[0]+d*156/309,Ue=v[0]+d*202/309,xt=v[0]+d*233/309;for(let[H,ut]of[[v[0]+2.75,1.5],[me+1.3,1],[Ue+1.075,.95],[xt+2.45,1.5]])i.box(H,1.93,P[1]+.24,ut+.12,1.62,.065,Ct),i.box(H,1.93,P[1]+.28,ut-.08,1.45,.025,bt),i.box(H,1.93,P[1]+.31,.045,1.51,.045,Ct),i.box(H,1.93,P[1]+.32,ut+.15,.045,.045,Ct);let pt=v[0]+d*.38,jt=P[1]+.27;for(let H of[-1,1]){let ut=pt+H*1.65;i.box(ut,1.45,jt+.055,1.04,2.35,.035,bt),i.box(ut,1.06,jt+.09,1.1,.045,.06,Ct),i.box(ut,2.49,jt+.09,1.1,.045,.06,Ct),i.box(pt+H*2.2,1.54,jt+.09,.055,2.76,.055,Ct),i.box(pt+H*1.1,1.54,jt+.09,.055,2.76,.055,Ct),i.box(pt+H*1.1,1.45,jt-.5,.035,2.35,1.04,bt),i.box(pt+H*1.1,1.06,jt-.5,.05,.045,1.08,Ct)}i.box(pt,2.91,jt+.09,4.5,.06,.06,Ct),i.box(pt,.15,P[1]+1.75,5.6,.3,3,E);for(let H=0;H<3;H++)i.box(pt,.025+H*.05,P[1]+4.06-H*.38,5.6,.05+H*.1,.4,E);let re=p("#83b4c2",0,.54,.12);for(let[H,ut]of[[335,344],[421,433]]){let Nt=r(470,H)[1],Ft=r(470,ut)[1],Ot=(Nt+Ft)/2,Bt=Ft-Nt;for(let Zt=0;Zt<3;Zt++){let qt=(Zt+1)*I/3;i.box(v[0]-1.38+Zt*.46,qt/2,Ot,.48,qt,Bt+.24,E)}i.box(v[0]-.11,I-.04,Ot,.54,.08,Bt+.24,E);for(let Zt of[Nt+.12,Ft-.12])i.box(v[0]-.76,I+1.12,Zt,1.32,2.24,.075,re),i.box(v[0]-.76,I+2.25,Zt,1.36,.045,.09,Jt)}let $t=[[303,334],[345,420],[434,503]];for(let H of[-1,1])for(let[ut,Nt]of $t){let Ft=r(470,ut)[1]+.15,Ot=r(470,Nt)[1]-.15,Bt=Math.max(1,Math.ceil((Ot-Ft)/5.4));for(let Zt=0;Zt<Bt;Zt++){let qt=Ft+(Ot-Ft)*Zt/Bt+.18,le=Ft+(Ot-Ft)*(Zt+1)/Bt-.18,he=A[0]+H*(d/2+.26),Ie=.56,Ye=4.04;for(let fn of[!1,!0]){let _e=fn?Ye:Ie,rn=fn?Ie:Ye,an=rn-_e,qn=le-qt,D=Math.hypot(an,qn),nt=-qn/D*.065,it=an/D*.065;i.quad([he,_e+nt,qt+it],[he,_e-nt,qt-it],[he,rn-nt,le-it],[he,rn+nt,le+it],E,D,.13);for(let[ft,gt]of[[_e,qt],[rn,le]]){i.box(he,ft,gt,.045,.25,.25,E);for(let M of[-.065,.065])i.cylinder([he+H*.022,ft,gt+M],[he+H*.04,ft,gt+M],.017,.017,p("#abae9e",0,.65,.1),6)}}}}for(let H of[-1,1])for(let[ut,Nt]of $t){let Ft=A[0]+H*(d/2+.185),Ot=r(470,ut)[1],Bt=r(470,Nt)[1];for(let Zt=Ot+.8;Zt<Bt;Zt+=2.65)i.box(Ft,2.12,Zt,.012,3.78,.014,p("#b9baae",0,.96))}for(let H of[-1,1]){let ut=A[0]+H*(d/2+.31);i.cylinder([ut,8.66,v[1]],[ut,8.66,P[1]],.075,.075,E,10);for(let Nt of[v[1]+.32,v[1]+16.5,P[1]-.35])i.cylinder([ut,.25,Nt],[ut,8.66,Nt],.045,.045,E,8);for(let[Nt,Ft]of $t){let Ot=r(470,Nt)[1],Bt=r(470,Ft)[1];i.box(ut-H*.14,.19,(Ot+Bt)/2,.08,.38,Bt-Ot,p("#94958b",3,.96))}}let Te=(H,ut,Nt)=>H+Nt>v[0]&&H-Nt<P[0]&&ut+Nt>v[1]&&ut-Nt<P[1];function Fe(H,ut,Nt,Ft,Ot=1,Bt=82,Zt=!1){if(u(H,ut)||o(H,ut,.6)||H>55&&H<80&&ut>26&&ut<82)return;let qt=window.FestaScenery.height(H,ut);if(H<-52&&H>-88&&ut<-12&&ut>-70&&(Nt=Math.min(Nt,6.2)),H>-74&&H<-58&&ut>-11&&ut<10)return;let le=m(Ft);for(let he=0;he<Bt;he++){let Ie=le()*T,Ye=Math.sqrt(le())*Nt*.46*Ot,fn=Nt*(.13+le()*.77)-Ye*.09,_e=H+Math.cos(Ie)*Ye,rn=ut+Math.sin(Ie)*Ye,an=Nt*(.21+le()*.14),qn=le()*T;if(Te(_e,rn,an*.71))continue;let D=Zt?p(he%4?"#a0704d":"#855841",8,.98,0,0,.92):p(he%7===0?"#879c75":he%3?"#526b48":"#344f39",7,.98,0,0,.92);t.scope(y.compose(_e,qt+fn,rn,qn),()=>{t.quad([-an/2,-an/2,0],[-an/2,an/2,0],[an/2,an/2,0],[an/2,-an/2,0],D),t.quad([-an/2,0,-an/2],[-an/2,0,an/2],[an/2,0,an/2],[an/2,0,-an/2],D)})}for(let he=0;he<12;he++){let Ie=he*T/12,Ye=H+Math.cos(Ie)*Nt*.25*Ot,fn=ut+Math.sin(Ie)*Nt*.25*Ot,_e=Nt*(.25+le()*.08),rn=Zt?p("#75523b",8,.98):p(he%3?"#3c5a40":"#60734b",7,.98);Te(Ye,fn,_e*.71)||t.scope(y.compose(Ye,qt+Nt*.21,fn,Ie),()=>t.quad([-_e/2,-_e/2,0],[-_e/2,_e/2,0],[_e/2,_e/2,0],[_e/2,-_e/2,0],rn))}}let Yt=P[1]+3.2,ke=p("#94705a",3,.98),Se=p("#4c4835",1,1),ye=m(2701);for(let[H,ut,Nt]of[[v[0]+3,4.6,2.9],[P[0]-4.7,8.4,3.6]]){i.box(H,.24,Yt,ut,.48,2.1,ke),i.plane(H,.486,Yt,ut-.35,1.7,Se);for(let Ft=H-ut/2+.2;Ft<H+ut/2;Ft+=.42)for(let Ot of[.12,.35])i.box(Ft+(Ot>.2?.2:0),Ot,Yt+1.055,.012,.2,.015,p("#c3ac8a"));for(let Ft=0;Ft<Math.round(ut*36);Ft++){let Ot=H+(ye()-.5)*(ut-.6),Bt=.5+ye()*Nt,Zt=Yt+(ye()-.5)*1.4,qt=.52+ye()*.4,le=p(Ft%5?"#6b835a":"#879669",7,1);t.scope(y.compose(Ot,Bt,Zt,ye()*T),()=>{t.quad([-qt/2,-qt/2,0],[-qt/2,qt/2,0],[qt/2,qt/2,0],[qt/2,-qt/2,0],le),t.quad([-qt/2,0,-qt/2],[-qt/2,0,qt/2],[qt/2,0,qt/2],[qt/2,0,-qt/2],le)})}for(let Ft=H-ut/2+.3;Ft<H+ut/2;Ft+=.61){let Ot=Yt+1.4;i.box(Ft,.13,Ot,.43,.26,.33,p("#a88767",3,.94));for(let Bt=0;Bt<3;Bt++)i.sphere(Ft+(Bt-1)*.11,.3,Ot,.095,.11,.11,p(Bt%2?"#989b62":"#557549"),8,5)}}let ge=Number((P[0]+3.6).toFixed(2)),Pe=Number((P[1]-20).toFixed(2)),je=Number((P[1]+33).toFixed(2)),Ae=3.6,Qe=p("#92968a",3,.99),Q=p("#b0b3a6",3,.94);i.quad([ge-.35,0,Pe],[ge-.35,0,je],[ge,Ae,je],[ge,Ae,Pe],Qe,18,3),i.box(ge+.08,Ae+.08,(Pe+je)/2,.64,.16,je-Pe,Q);for(let H=Pe+.3;H<je;H+=2.2)i.cylinder([ge+.1,Ae+.12,H],[ge+.1,Ae+1.16,H],.022,.022,Jt,6),i.box(ge-.28,.65,H,.025,.1,.1,p("#454d43"));for(let H of[Ae+.3,Ae+1.12])i.cylinder([ge+.1,H,Pe],[ge+.1,H,je],.022,.022,Jt,6);for(let H=Pe;H<je;H+=5.4)i.cylinder([ge-.34,.05,H],[ge-.01,Ae-.02,H],.012,.012,p("#777e72"),5);{let H=ge+6.3,ut=P[1]+1.4,Nt=8.8,Ft=11,Ot=6.6;e.box(H,Ae+Ot/2,ut,Nt,Ot,Ft,p("#d8d2be",3,.96));let Bt=p("#6f6860",10,.9),Zt=Ae+Ot;for(let qt of[-1,1])e.quad([H,Zt+1.7,ut-Ft/2-.4],[H,Zt+1.7,ut+Ft/2+.4],[H+qt*(Nt/2+.4),Zt,ut+Ft/2+.4],[H+qt*(Nt/2+.4),Zt,ut-Ft/2-.4],Bt,3,4);for(let qt of[ut-Ft/2,ut+Ft/2])e.tri([H-Nt/2,Zt,qt],[H,Zt+1.7,qt],[H+Nt/2,Zt,qt],E);for(let qt of[Ae+1.65,Ae+4.8])for(let le of[-3.6,0,3.6])i.box(H-Nt/2-.025,qt,ut+le,.05,1.28,1.4,p("#5d625a")),i.box(H-Nt/2-.06,qt,ut+le,.035,1.1,1.22,bt),i.box(H-Nt/2-.087,qt,ut+le,.04,1.12,.035,Jt)}let qe=(H,ut)=>o(H,ut,3)||u(H,ut)?0:window.FestaScenery.height(H,ut),Le=[...new Set([...Array.from({length:89},(H,ut)=>-156+ut*4),60.8,75.2,103.2])].sort((H,ut)=>H-ut),k=[...new Set([...Array.from({length:72},(H,ut)=>-112+ut*4),15.08,Pe,je,96.08])].sort((H,ut)=>H-ut);for(let H=0;H<Le.length-1;H++)for(let ut=0;ut<k.length-1;ut++){let Nt=Le[H],Ft=k[ut],Ot=Le[H+1],Bt=k[ut+1];if(Nt<ge&&Ot===ge&&Ft>=Pe&&Bt<=je)continue;let Zt=[[Nt,Ft],[Nt,Bt],[Ot,Bt],[Ot,Ft]].map(([he,Ie])=>[he,qe(he,Ie)-.1,Ie]);if(Zt.every(he=>he[1]<0))continue;let qt=p("#ffffff",2,.98),le=([he,Ie,Ye])=>{let fn=he===ge&&Ye>=Pe&&Ye<=je?2*(qe(he,Ye)-qe(he+.1,Ye)):qe(he-.1,Ye)-qe(he+.1,Ye),_e=qe(he,Ye-.1)-qe(he,Ye+.1),rn=Math.hypot(fn,.2,_e);return[fn/rn,.2/rn,_e/rn]};for(let he of[[0,1,2],[0,2,3]])e.tri(...he.map(Ie=>Zt[Ie]),qt,he.map(Ie=>[(Zt[Ie][0]+550)*460/1100,(Zt[Ie][2]+550)*460/1100]),he.map(Ie=>le(Zt[Ie])))}for(let H=-149;H<188;H+=6)for(let ut=-99;ut<162;ut+=6){if(qe(H,ut)<2.3)continue;let Nt=m(Math.round((H+200)*800+ut+200));Fe(H+(Nt()-.5)*2,ut+(Nt()-.5)*2,4.8+Nt()*2.1,Math.round((H+200)*801+ut+201),1.5,30)}let w=p("#7a895a",7,.98),st=p("#9ca469",7,.98),at=p("#625c46",1,1);function ct(H,ut,Nt,Ft,Ot,Bt){let Zt=m(Bt);for(let qt=0;qt<Math.ceil(Nt*Ot*24);qt++){let le=Zt()*T,he=Math.sqrt(Zt()),Ie=H+Math.cos(le)*Nt*.48*he,Ye=ut+Math.sin(le)*Ot*.48*he,fn=.12+Ft*(.2+.8*Math.sqrt(1-he*he))*(.72+Zt()*.28),_e=.24+Zt()*.22;t.scope(y.compose(Ie,fn,Ye,Zt()*T),()=>{t.quad([-_e/2,-_e/2,0],[-_e/2,_e/2,0],[_e/2,_e/2,0],[_e/2,-_e/2,0],qt%5?w:st),t.quad([-_e/2,0,-_e/2],[-_e/2,0,_e/2],[_e/2,0,_e/2],[_e/2,0,-_e/2],w)})}}for(let[H,ut,Nt,Ft,Ot]of[[135,429,5.4,.8,1.15],[158,429,3.6,.65,1.1],[177,429,2.3,.46,1],[279,430,4.1,.58,.85]]){let Bt=r(H,ut);i.plane(Bt[0],.035,Bt[1],Nt,Ot,at);for(let Zt of[-1,1])i.box(Bt[0],.09,Bt[1]+Zt*Ot/2,Nt,.18,.1,p("#a3a295",3,.97));for(let Zt of[-1,1])i.box(Bt[0]+Zt*Nt/2,.09,Bt[1],.1,.18,Ot,p("#a3a295",3,.97));ct(Bt[0],Bt[1],Nt-.15,Ft,Ot-.12,H*101)}for(let[H,ut]of[[257,11],[287,7]])for(let Nt=0;Nt<ut;Nt++){let Ft=r(H+Nt*2.2,434),Ot=.39,Bt=.26,Zt=p(Nt%3?"#d1c6ac":"#987554",3,.95);i.box(Ft[0],Bt/2,Ft[1],Ot,Bt,.28,Zt),i.plane(Ft[0],Bt+.008,Ft[1],Ot-.045,.23,at);for(let qt of[-1,1])i.box(Ft[0],Bt-.01,Ft[1]+qt*.14,Ot+.035,.055,.035,Zt);for(let qt=0;qt<3;qt++){let le=Ft[0]+(qt-1)*.1;i.cylinder([le,Bt,Ft[1]],[le,Bt+.16+Nt%3*.025,Ft[1]],.007,.004,p("#657352"),5),t.scope(y.compose(le,Bt+.14,Ft[1],Nt+qt),()=>{t.quad([-.09,-.03,0],[-.06,.11,0],[.06,.11,0],[.09,-.03,0],w),t.quad([0,-.03,-.09],[0,.11,-.06],[0,.11,.06],[0,-.03,.09],st)})}}for(let[H,ut,Nt,Ft]of[[54,375,3.1,1.8],[69,375,2.8,1.8]]){let Ot=r(H,ut),Bt=2.05,Zt=p("#b7b9af",3,.95),qt=p("#8f978e",0,.8,.15);i.box(Ot[0],Bt/2,Ot[1],Nt,Bt,Ft,Zt),i.box(Ot[0],Bt+.055,Ot[1],Nt+.18,.11,Ft+.16,qt);for(let le of[-1,1])i.box(Ot[0]+le*Nt*.23,Bt*.48,Ot[1]-Ft/2-.025,Nt*.43,Bt*.9,.035,p("#9da79e",3,.92)),i.box(Ot[0]+le*.075,1.04,Ot[1]-Ft/2-.06,.025,.19,.045,qt)}ct(r(60,367)[0],r(60,367)[1],3.2,1.15,1.3,92160);let zt=-66,Lt=-1,dt=11.2,vt=15.6,Ht=6.3,Qt=p("#d8d8c9",3,.96);e.box(zt,Ht/2,Lt,dt,Ht,vt,Qt);let Rt=zt+dt/2;e.quad([zt-dt/2-.35,Ht+.25,Lt-vt/2-.35],[zt-dt/2-.35,Ht+.25,Lt+vt/2+.35],[Rt+.35,Ht+.05,Lt+vt/2+.35],[Rt+.35,Ht+.05,Lt-vt/2-.35],p("#747d7a",10,.85),4,4),e.box(Rt+.2,Ht,Lt,.12,.19,vt+.7,Qt);for(let H of[-5.7,-2.7,0,3,5.7]){let ut=H===0?.65:1.45;i.box(Rt+.03,4.63,Lt+H,.055,1.38,ut,Jt),i.box(Rt+.064,4.63,Lt+H,.02,1.24,ut-.13,bt),i.box(Rt+.086,4.63,Lt+H,.03,1.26,.035,Jt)}for(let H of[-4.5,4.5])i.box(Rt+.08,1.28,Lt+H,.12,2.5,1.37,p("#adb5ac",3,.85)),i.box(Rt+.15,1.78,Lt+H,.035,.77,.92,bt),i.box(Rt+.53,2.65,Lt+H,1.1,.12,2.05,p("#8e9994",10,.9)),i.box(Rt+.85,.1,Lt+H,1.5,.2,2.1,E),i.sphere(Rt+.14,2.77,Lt+H-1.3,.055,.11,.11,p("#eeeadd"),10,6);i.quad([Rt,.03,Lt-7.5],[Rt+.95,.03,Lt-7.5],[Rt+.95,.2,Lt+6],[Rt,.2,Lt+6],E,1,6),lt([Rt+1.02,.03,Lt-7.5],[Rt+1.02,.2,Lt+6],.83),n&&s!==void 0&&n.scope(y.compose(Rt+.18,0,Lt,Math.PI/2),()=>n.sign(0,2.65,0,5.1,.95,s));let kt=-83,te=-22,_t=qe(kt,te),Dt=29,V=p("#a7aca5",0,.68,.25);for(let H=0;H<8;H++){let ut=_t+H*Dt/8,Nt=_t+(H+1)*Dt/8,Ft=2.65-H*.235,Ot=Ft-.235;for(let Bt of[-1,1])for(let Zt of[-1,1])e.cylinder([kt+Bt*Ft,ut,te+Zt*Ft],[kt+Bt*Ot,Nt,te+Zt*Ot],.07,.05,V,6),e.cylinder([kt+Bt*Ft,ut,te+Zt*Ft],[kt-Bt*Ot,Nt,te+Zt*Ot],.026,.026,V,5),e.cylinder([kt+Bt*Ft,ut,te+Zt*Ft],[kt+Bt*Ot,Nt,te-Zt*Ot],.026,.026,V,5)}for(let H of[_t+20.5,_t+24.8,_t+29]){e.cylinder([kt-5,H,te],[kt+5,H,te],.075,.075,V,6);for(let ut of[-4.7,4.7]){e.cylinder([kt+ut,H,te],[kt+ut,H-.9,te],.1,.1,p("#a6ada0"),8);let Nt=r(322,56),Ft=[];for(let Ot=0;Ot<=28;Ot++){let Bt=Ot/28;Ft.push([kt+ut+(Nt[0]-kt)*Bt,H-.9+(26-(_t+29))*Bt-3.1*Math.sin(Bt*Math.PI),te+(Nt[1]-te)*Bt])}e.tube(Ft,.028,p("#626963"),5)}}let Pt=[[103,69],[131,47],[202,40],[331,44],[479,94],[574,146],[583,632],[592,679],[470,739],[101,780],[71,735],[21,525],[30,339],[57,250],[63,145]],mt=0;for(let H=0;H<Pt.length-1;H++){if(H===7||H===8||H===9)continue;let ut=r(...Pt[H]),Nt=r(...Pt[H+1]),Ft=Nt[0]-ut[0],Ot=Nt[1]-ut[1],Bt=Math.hypot(Ft,Ot),Zt=Ot/Bt,qt=-Ft/Bt;for(let le=2;le<Bt;le+=5.7){let he=le/Bt,Ie=ut[0]+Ft*he,Ye=ut[1]+Ot*he;Fe(Ie+Zt*7.6,Ye+qt*7.6,R(7,11.3),1e4+mt++),(H<5||H>10)&&Fe(Ie+Zt*14.6+Ft/Bt*2.4,Ye+qt*14.6+Ot/Bt*2.4,R(8.2,13),1e4+mt++,1.13),(H<6||H>10)&&Fe(Ie+Zt*2,Ye+qt*2,R(2.2,3.2),1e4+mt++,1.8)}}e.scope(y.compose(-106,5,-41,Math.PI/2),()=>{let H=p("#c6c8bf",3,.92),ut=p("#b4c2be",0,.76,.05),Nt=p("#46545a",0,.88),Ft=p("#53696d",0,.37,.08),Ot=69,Bt=12,Zt=5,qt=2.85;e.box(0,-2.5,0,Ot+1,5,Bt+2,p("#8a8c7b",3,.98)),e.box(0,Zt*qt/2,0,Ot,Zt*qt,Bt,H);for(let le=0;le<Zt;le++){let he=le*qt;e.box(0,he+1.4,Bt/2+.07,Ot-.6,2.42,.12,Nt),e.box(0,he+.1,Bt/2+1.02,Ot+.7,.2,2.15,H),e.box(0,he+.79,Bt/2+1.98,Ot,.98,.1,ut),e.box(0,he+1.33,Bt/2+1.99,Ot,.06,.13,p("#d3d9d5",0,.45,.28));for(let Ie=-Ot/2+1.6;Ie<Ot/2;Ie+=3.45)e.box(Ie,he+1.4,Bt/2+.16,2.1,2.25,.03,Ft),e.box(Ie+.99,he+1.4,Bt/2+.18,.035,2.25,.03,h.metal),e.box(Ie+1.52,he+1.4,Bt/2+1.06,.1,2.58,1.85,H)}for(let le of[-Ot/2,-Ot*.18,Ot*.18,Ot/2])e.box(le,Zt*qt/2,Bt/2+1.08,.33,Zt*qt,2.3,H);e.box(0,Zt*qt+.13,0,Ot+1.2,.26,Bt+4.2,H)});for(let H=0;H<13;H++){let ut=-74+H*5.6,Nt=-84+H%3*2.7;Fe(Nt,ut,7.5+H%4*.9,32140+H,1.1,58,H===2||H===5||H===9)}let Et=p("#338db0",0,.63,.08),It=p("#ac4c39",0,.68),Tt=p("#dbb548",0,.6),oe=l(666,235);i.scope(y.compose(oe[0],0,oe[1],.18),()=>{for(let H of[-.55,.55])for(let ut of[-.55,.55])i.cylinder([H,.02,ut],[H,3.15,ut],.045,.045,Et,8);i.box(0,1.94,0,1.22,.09,1.2,p("#899892",0,.7));for(let H of[-.61,.61])i.cylinder([H,2,-.55],[H,3.03,-.55],.035,.035,It,8),i.cylinder([H,3.03,-.55],[H,3.03,.55],.035,.035,It,8),i.quad([H*.72,1.96,.55],[H*.72,.16,3.45],[H*.72,.34,3.47],[H*.72,2.16,.55],Tt,3,1);i.quad([-.44,1.97,.55],[.44,1.97,.55],[.44,.16,3.45],[-.44,.16,3.45],Tt,1,3);for(let H=.28;H<1.97;H+=.27)i.cylinder([-.47,H,-.69],[.47,H,-.69],.026,.026,h.metal,7)});for(let[H,ut,Nt]of[[1171,230,-.54],[1267,303,-.57],[1368,371,-.55]]){let[Ft,Ot]=l(H,ut);i.scope(y.compose(Ft,0,Ot,Nt),()=>{for(let Bt=0;Bt<=5;Bt++){let Zt=(Bt-2.5)*1.05,qt=1+Bt*.216;i.cylinder([Zt,0,0],[Zt,qt,0],.032,.032,Et,8),Bt<5&&i.cylinder([Zt,qt,0],[Zt+1.05,qt,0],.028,.028,h.metal,8)}})}let[Wt,Re]=l(480,324);for(let H=0;H<3;H++){let ut=Wt+(H-1)*.65;i.cylinder([ut,0,Re],[ut,2.45,Re],.038,.038,Et,8)}i.cylinder([Wt-.72,2.45,Re],[Wt+.72,2.45,Re],.032,.032,h.metal,8);let we=r(365,75);i.cylinder([we[0],0,we[1]],[we[0],3.5,we[1]],.075,.075,p("#aab4ad",0,.65,.2),10),i.box(we[0],3.45,we[1]+.18,1.8,1.05,.07,p("#e7e7da",3,.9)),i.box(we[0],3.32,we[1]+.23,.65,.49,.012,It),i.box(we[0],3.32,we[1]+.24,.58,.42,.012,p("#e7e7da"));let yn=[];for(let H=0;H<=24;H++){let ut=H/24*T;yn.push([we[0]+Math.sin(ut)*.23,3.02,we[1]+.56+Math.cos(ut)*.23])}i.tube(yn,.016,It,6)}};window.buildFestaWorld=async function(i,t=()=>{}){let{V:e,M:n,Geometry:s,Mesh:r,Atlas:l,material:o,color:u,rng:h,clamp:p,TAU:y}=FestaGL,m=FESTA_DATA,T=h(9212026),v=(a,c)=>a+(c-a)*T(),P=(a,c)=>[(a-320)*.22,(c-290)*.22],A=(a,c,f=0)=>{let S=P(a,c);return[S[0],f,S[1]]},d=new l(512),C=a=>new Promise((c,f)=>{let S=new Image;S.onload=()=>c(S),S.onerror=()=>f(new Error("内蔵テクスチャを読み込めません。")),S.src=a}),I=await C(FESTA_ASSETS.gravel),g=await C(FESTA_ASSETS.grass);t(.08,"地面と建物の素材を準備しています"),d.add("white",(a,c)=>{a.fillStyle="#fff",a.fillRect(0,0,c,c)});function R(a,c,f,S=.25){return d.add(a,(N,O)=>{N.drawImage(c,0,0,O,O);let B=N.getImageData(0,0,O,O),j=u(f);for(let z=0;z<B.data.length;z+=4){let tt=B.data[z]/255,wt=.82+tt*S;for(let yt=0;yt<3;yt++)B.data[z+yt]=p(j[yt]*255*wt,0,255);B.data[z+3]=255}N.putImageData(B,0,0)})}R("soil",I,"#a19580",.32),R("grass",g,"#727b4d",.55),d.add("concrete",(a,c)=>{a.fillStyle="#efeee6",a.fillRect(0,0,c,c);let f=a.getImageData(0,0,c,c);for(let S=0;S<f.data.length;S+=4){let N=v(-12,6);for(let O=0;O<3;O++)f.data[S+O]+=N}a.putImageData(f,0,0),a.strokeStyle="rgba(119,119,107,.13)",a.lineWidth=1,a.beginPath(),a.moveTo(0,120),a.lineTo(c,120),a.stroke()}),R("asphalt",I,"#555754",.6),d.add("wood",(a,c)=>{a.fillStyle="#b78a57",a.fillRect(0,0,c,c);for(let f=0;f<8;f++){let S=f*64;a.fillStyle=`hsl(${31+v(-3,3)},${34+v(-5,5)}%,${55+v(-6,6)}%)`,a.fillRect(S,0,63,c);for(let O=0;O<35;O++){let B=S+v(1,62);a.strokeStyle=`rgba(73,44,18,${v(.04,.17)})`,a.lineWidth=v(.3,1.3),a.beginPath();for(let j=0;j<=c;j+=16)a.lineTo(B+Math.sin(j/72+O)*v(.2,1.4),j);a.stroke()}a.fillStyle="rgba(43,32,24,.20)",a.fillRect(S,0,1,c);let N=f%3*163;a.fillRect(S,N,64,1)}}),d.add("fabric",(a,c)=>{a.fillStyle="#f7f6f0",a.fillRect(0,0,c,c);for(let f=0;f<c;f+=3)a.strokeStyle=f%6?"rgba(98,99,84,.05)":"rgba(255,255,255,.3)",a.beginPath(),a.moveTo(f,0),a.lineTo(f,c),a.stroke(),a.beginPath(),a.moveTo(0,f),a.lineTo(c,f),a.stroke();a.strokeStyle="rgba(154,155,144,.2)",a.lineWidth=2,a.strokeRect(8,8,c-16,c-16)});function E(a=!1){d.add(a?"autumn":"leaf",(c,f)=>{c.clearRect(0,0,f,f);for(let S=0;S<220;S++){let N=v(0,y),O=Math.sqrt(T())*228,B=f/2+Math.cos(N)*O,j=f/2+Math.sin(N)*O;c.strokeStyle=a?"#6f6541":"#526445",c.lineWidth=1.8,c.beginPath(),c.moveTo(f/2,f*.7),c.quadraticCurveTo(f/2+(B-f/2)*.65,j+40,B,j),c.stroke();let z=a?v(12,59):v(72,110);c.fillStyle=`hsl(${z},${v(27,45)}%,${v(27,48)}%)`,c.beginPath(),c.ellipse(B,j,v(6,11),v(12,23),N+.5,0,y),c.fill(),c.strokeStyle="rgba(208,214,130,.3)",c.lineWidth=.7,c.beginPath(),c.moveTo(B-4,j-10),c.lineTo(B+4,j+10),c.stroke()}})}E(!1),E(!0),d.add("bark",(a,c)=>{a.fillStyle="#807565",a.fillRect(0,0,c,c);for(let f=0;f<650;f++){a.strokeStyle=`rgba(${Math.floor(v(30,70))},${Math.floor(v(25,60))},${Math.floor(v(20,50))},${v(.1,.6)})`,a.lineWidth=v(.5,5),a.beginPath();let S=v(0,c),N=v(0,c);a.moveTo(S,N),a.lineTo(S+v(-9,9),N+v(14,120)),a.stroke()}}),d.add("roof",(a,c)=>{a.fillStyle="#a6b2b3",a.fillRect(0,0,c,c);for(let f=0;f<c;f+=32)a.fillStyle="#7c8d91",a.fillRect(f,0,3,c),a.fillStyle="#c7cecd",a.fillRect(f+3,0,2,c)}),d.add("net",(a,c)=>{a.clearRect(0,0,c,c),a.strokeStyle="#b1b4a7",a.lineWidth=3;for(let f=-c;f<c*2;f+=64)a.beginPath(),a.moveTo(f,0),a.lineTo(f+c,c),a.stroke(),a.beginPath(),a.moveTo(f,c),a.lineTo(f+c,0),a.stroke()}),d.add("tire",(a,c)=>{a.fillStyle="#2b2b2a",a.fillRect(0,0,c,c),a.strokeStyle="#484948",a.lineWidth=5;for(let f=0;f<c;f+=27)a.beginPath(),a.moveTo(0,f),a.lineTo(c*.5,f+15),a.lineTo(c,f),a.stroke()}),d.add("cloth",(a,c)=>{a.fillStyle="#eeeadf",a.fillRect(0,0,c,c),a.fillStyle="rgba(83,117,120,.12)";for(let f=0;f<c;f+=40)a.fillRect(f,0,18,c),a.fillRect(0,f,c,18)});let F={F:"#a64c35",S:"#385e76",T:"#4e6c43",P:"#83503e",M:"#c39343",I:"#27595c"},x={};for(let a of[...m.records.filter(c=>!["unplaced","performer","unconfirmed","workshop"].includes(c.kind)),...m.locations])x[a.id]={banner:d.banner(a.id.startsWith("F-")||a.id.startsWith("S-")||a.id.startsWith("T-")?a.id:{HQ:"INFO",GYM:"STAGE",MOBILITY:"RIDE",MEET:"REST",OUTSTAGE:"STAGE",GATE_MAIN:"WELCOME",GATE_WEST:"WELCOME",WC:"WC",WC_ART:"WC",OUTDOOR_GAMES:"T-14",EAT2:"REST"}[a.id]||"FESTA",a.id==="MOBILITY"?"モビリティー":a.short,a.id==="S-13"?"子どもくじ抽選会":a.caption,F[a.category]),menu:d.sign(a.id+"-menu",a.short,a.detail,F[a.category],a.id+"   "+(a.status||"予定"))};let U=d.banner("西鎌倉","鎌倉市立西鎌倉小学校","つながりフェスタ＠にしかま2026","#415d60"),G=d.banner("2026","つながりフェスタ＠にしかま","つながる、みつかる、すきになる","#356064"),X=d.sign("走行エリア","モビリティー",`実走路の中へは入れません。
見学はトラロープの外側から。`,"#a74d38","車両実走路"),b=d.banner("P","みんなの舞台","体育館内・開始予定","#83533c"),Y=d.add("schedule",(a,c)=>{a.fillStyle="#fff9ec",a.fillRect(0,0,c,c),a.fillStyle="#5b3e32",a.font="700 29px sans-serif",a.fillText("体育館内 開始予定",24,42),a.font="17px sans-serif",a.fillText("終了時刻は未確認　／　当日変更の可能性あり",24,70),m.schedule.forEach((f,S)=>{let N=112+S*36;a.fillStyle=S%2?"#ffffff":"#f2ebde",a.fillRect(14,N-24,484,34),a.fillStyle="#83533c",a.font="700 20px sans-serif",a.fillText(f.time,23,N),a.fillStyle="#263b38";let O=18;a.font=`${O}px sans-serif`;let B=f.name;for(;a.measureText(B).width>370&&O>10;)a.font=`${--O}px sans-serif`;a.fillText(B,100,N)})}),W=d.add("Entrance panels",(a,c)=>{let f=h(451);a.fillStyle="#33363b",a.fillRect(0,0,c,c);for(let S=0;S<c;S+=5)for(let N=0;N<c;N+=12){let O=40+f()*25;a.fillStyle=`rgb(${O},${O+1},${O+5})`,a.fillRect(N+(S%10?6:0),S,10,3)}}),q=FestaScenery.textures(d,h),lt=d.add("gym-floor",(a,c)=>{a.fillStyle="#aa7549",a.fillRect(0,0,c,c);for(let f=0;f<c;f+=32){a.fillStyle=`hsl(${27+v(-2,2)},${40+v(-5,5)}%,${48+v(-4,4)}%)`,a.fillRect(f+1,0,30,c),a.fillStyle="rgba(71,43,25,.24)",a.fillRect(f,0,1,c);let S=Math.floor(f/32)%4*128+32;a.fillRect(f+1,S,30,1);for(let N=0;N<9;N++)a.fillStyle=`rgba(84,51,27,${v(.025,.075)})`,a.fillRect(f+v(2,29),0,v(.35,1),c)}}),ht=d.add("gym-wall-wood",(a,c)=>{a.fillStyle="#a77b60",a.fillRect(0,0,c,c);for(let f=0;f<c;f+=26)a.fillStyle=`hsl(${24+v(-2,2)},${31+v(-4,4)}%,${47+v(-3,3)}%)`,a.fillRect(f+1,0,24,c),a.fillStyle="rgba(44,27,21,.27)",a.fillRect(f,0,1,c),a.fillStyle="rgba(227,180,128,.15)",a.fillRect(f+3,0,1,c)}),Mt=a=>Object.assign(o(a,q,.39,.06),{fit:!0}),Z=new s,_=new s,bt=new s,Jt=new s,Ct=new s,J={dirt:o("#fff",1,.97),grass:o("#fff",2,.98),wall:o("#dedccf",3,.93),base:o("#a3aaa5",3,.9),asphalt:o("#fff",4,.95),wood:o("#fff",5,.64),metal:o("#a6b0ac",0,.3,.65),whiteMetal:o("#f1f1e8",0,.42,.24),dark:o("#273036",0,.72),glass:Mt("#c1cece"),black:o("#252928",0,.6),fabric:o("#f9f9f4",6,.85),bark:o("#fff",9,.94),leaf:o("#fff",7,.88),autumn:o("#fff",8,.9),tire:o("#fff",12,.93)},me=(a,c)=>[33+(a-1334)*.08079070799073343,2.64+(c-886)*.08079070799073343],Ue=[],xt=[],pt=[],jt=[],re=[],$t=[],Te=[];function Fe(a,c){let f=Ct.count/3;c(),Te.push({id:a,first:f,last:Ct.count/3})}function Yt(a,c,f,S,N="",O=0){Ue.push({x:a,z:c,w:f,d:S,id:N,r:O})}function ke(a,c,f,S,N){let O=P(a,c),B=P(f,S);Yt((O[0]+B[0])/2,(O[1]+B[1])/2,B[0]-O[0],B[1]-O[1],N)}let{layout:Se}=m,ye=m.locations.find(a=>a.id==="WC_ART"),ge=Se.campus;function Pe(a,c,f){let S=!1;for(let N=0,O=f.length-1;N<f.length;O=N++){let B=f[N],j=f[O];B[1]>c!=j[1]>c&&a<(j[0]-B[0])*(c-B[1])/(j[1]-B[1])+B[0]&&(S=!S)}return S}let je=0;function Ae(a,c,f,S=3){let N=a.map(yt=>[...yt]);N.reduce((yt,Ut,Xt)=>{let de=N[(Xt+1)%N.length];return yt+Ut[0]*de[1]-de[0]*Ut[1]},0)<0&&N.reverse();let B=N.map((yt,Ut)=>Ut),j=.007+je++*.011,z=(yt,Ut,Xt)=>(Ut[0]-yt[0])*(Xt[1]-yt[1])-(Ut[1]-yt[1])*(Xt[0]-yt[0]),tt=0;function wt(yt,Ut,Xt){c.tri([yt[0],j,yt[1]],[Xt[0],j,Xt[1]],[Ut[0],j,Ut[1]],f,[[yt[0]/S,yt[1]/S],[Xt[0]/S,Xt[1]/S],[Ut[0]/S,Ut[1]/S]])}for(;B.length>3&&tt++<600;){let yt=!1;for(let Ut=0;Ut<B.length;Ut++){let Xt=B[(Ut-1+B.length)%B.length],de=B[Ut],pe=B[(Ut+1)%B.length],fe=N[Xt],Vt=N[de],ae=N[pe];if(!(z(fe,Vt,ae)<1e-4)&&!B.some(ce=>ce!==Xt&&ce!==de&&ce!==pe&&z(fe,Vt,N[ce])>=0&&z(Vt,ae,N[ce])>=0&&z(ae,fe,N[ce])>=0)){wt(fe,Vt,ae),B.splice(Ut,1),yt=!0;break}}if(!yt)break}B.length===3&&wt(...B.map(yt=>N[yt]))}Z.plane(0,-.1,0,1100,1100,J.grass,460,460),Ae(ge,Z,J.asphalt,.7);let Qe=[[[1257,2090],[1354,2058],[1451,2011],[1544,1960],[1620,1919],[1690,1848],[1671,1876],[1656,1949],[1586,1998],[1487,2045],[1388,2088],[1270,2124]],[[1567,1835],[1641,1781],[1690,1848],[1620,1919],[1592,1930],[1579,1884],[1585,1864]]].map(a=>a.map(c=>me(...c)));for(let a of Qe)Ae(a,Z,J.asphalt,.8);function Q(a,c,f,S){let N=S[0]-f[0],O=S[1]-f[1],B=p(((a-f[0])*N+(c-f[1])*O)/(N*N+O*O),0,1);return Math.hypot(a-f[0]-N*B,c-f[1]-O*B)}let qe=(a,c,f=0)=>Qe.some(S=>Pe(a,c,S)||S.some((N,O)=>Q(a,c,N,S[(O+1)%S.length])<f)),Le=m.locations.find(a=>a.id==="GATE_MAIN").pos,k=Se.mainGateApproach,w=(a,c)=>Q(a,c,k,[2*Le[0]-k[0],2*Le[1]-k[1]])<2.8,st=[P(64,146),P(147,146),P(175,83),P(286,78),P(382,92),P(491,128),P(575,167),P(575,300),P(470,302),P(469,412),P(430,431),P(425,407),P(260,408),P(223,418),P(170,413),P(99,420),P(98,388),P(66,388),P(64,350)];Ae(st,Z,J.dirt,1.35);let at=[[1328,1903],[1361,1894],[1407,1870],[1457,1850],[1510,1835],[1564,1837],[1571,1852],[1514,1858],[1465,1873],[1416,1892],[1370,1914],[1328,1922]].map(a=>me(...a)),ct=[[1390,1910],[1416,1892],[1465,1873],[1514,1858],[1571,1852],[1579,1867],[1573,1885],[1585,1926],[1535,1952],[1480,1974],[1440,1960]].map(a=>me(...a));Ae(at,Z,o("#d6ccaf",3,.98),2),Ae(ct,Z,o("#8a936e",2,.98),2);let zt=o("#a8a497",3,.92);for(let a=0;a<ct.length;a++){let c=ct[a],f=ct[(a+1)%ct.length],S=f[0]-c[0],N=f[1]-c[1];_.scope(n.compose((c[0]+f[0])/2,0,(c[1]+f[1])/2,-Math.atan2(N,S)),()=>{_.box(0,.1,0,Math.hypot(S,N),.18,.12,zt)})}let Lt=[["#5d7140",.42],["#738551",.32],["#506542",.45]];for(let a=0;a<ct.length-1;a++){let[c,f]=ct[a],S=me(1502,1910),[N,O]=Lt[a%Lt.length],B=[c+(S[0]-c)*.23,f+(S[1]-f)*.23];Pe(...B,ct)&&_.sphere(B[0],O,B[1],.68,O,.52,o(N,0,.95),10,7)}t(.18,"配置図から校舎と会場を組み立てています");function dt(a,c,f,S,N=10.65,O="校舎",B=!0,j=null){let z=P(a,c),tt=P(f,S),wt=(z[0]+tt[0])/2,yt=(z[1]+tt[1])/2,Ut=tt[0]-z[0],Xt=tt[1]-z[1];if(jt.push({x:wt,z:yt,w:Ut,d:Xt,h:N,label:O}),Yt(wt,yt,Ut+.18,Xt+.18,O),Z.box(wt,N/2,yt,Ut,N,Xt,J.wall),Z.box(wt,.24,yt,Ut+.15,.48,Xt+.15,J.base),Z.box(wt,N+.12,yt,Ut+.55,.24,Xt+.55,o("#c6c3b6",0,.86)),!B)return;let de=N>12?4:N>9?3:2,pe=(N-.35)/de;for(let fe=0;fe<4;fe++){let Vt=fe%2?Xt:Ut,ae=fe%2?Ut:Xt;_.scope(n.compose(wt,0,yt,fe*Math.PI/2),()=>{let ce=Math.max(1,Math.floor((Vt-.9)/4.3)),Be=(Vt-.9)/ce;for(let Kt=0;Kt<de;Kt++){let ve=1.62+Kt*pe,Ke=Kt===0?1.8:1.16;_.box(0,Kt*pe+.45,ae/2+.015,Vt,.035,.026,o("#b4b3a7",0,.95));for(let He=0;He<ce;He++){let gn=-Vt/2+.45+(He+.5)*Be,gi=Be*.84;if(!(j&&fe===1&&Kt===0&&Math.abs(yt-gn-j.pos[1])<gi/2)){_.box(gn,ve,ae/2+.024,gi+.12,Ke+.12,.06,o("#aaa99f",0,.6,.25)),_.box(gn,ve,ae/2+.06,gi,Ke,.025,Mt((He+Kt)%4===0?"#a9b8b8":"#c5cecb"));for(let Pl=1;Pl<4;Pl++)_.box(gn-gi/2+Pl*gi/4,ve,ae/2+.085,.038,Ke,.032,J.metal);_.box(gn,ve-Ke/2-.035,ae/2+.11,gi+.17,.075,.17,o("#bdbdb3",0,.85)),Kt===0&&_.box(gn,ve+.2,ae/2+.087,gi,.037,.03,J.metal)}}}for(let Kt=0;Kt<=ce;Kt+=2){let ve=-Vt/2+.45+Kt*Be;_.box(ve,N/2,ae/2+.085,.22,N,.17,J.wall)}for(let Kt of[-1,1])_.cylinder([Kt*(Vt/2-.2),.35,ae/2+.19],[Kt*(Vt/2-.2),N-.2,ae/2+.19],.045,.045,o("#a9aaa0",0,.75),8)})}}dt(95.4,436.56,329.52,489.72,13.5),dt(30.48,411.36,82.56,541.56,10.65),dt(67.32,389.4,95.4,436.56,10.65,"校舎",!0,ye),dt(329.52,430.32,425.28,516.36,13.5),dt(307.92,489.72,329.52,516.36,7.2),dt(311.52,535.08,390.72,603.6,7.9,"昇降口",!1),dt(103.44,608.28,401.04,666.1,10.7);{let a=P(111,436.56);_.box(a[0],6.75,a[1]-.16,6.1,13.5,.32,J.wall);for(let c of[3.2,6.5,9.8,13.4])_.box(a[0],c,a[1]-.36,6.55,.19,.47,J.wall);_.box(a[0],1.3,a[1]-.34,4.7,2.4,.05,J.glass),_.box(a[0],2.88,a[1]-1,6.4,.2,2,J.wall)}{let a=P(238,436.56),c=o("#693f30",0,.78),f=o("#9e9f94",0,.72,.18);_.box(a[0],1.25,a[1]-.035,6.3,2.5,.08,c),_.box(a[0],2.8,a[1]-.7,8.8,.18,1.5,o("#724b3e",0,.8));for(let S of[-4.1,4.1])_.box(a[0]+S,1.4,a[1]-1.2,.23,2.8,.23,J.wall);for(let S of[-2.75,-1.38,0,1.38,2.75])_.box(a[0]+S,1.32,a[1]-.095,.045,2.24,.07,f),_.box(a[0]+S,2.22,a[1]-.13,1.3,.055,.05,f);for(let S of[-1.1,1.1])_.box(a[0]+S,1.12,a[1]-.15,.05,.32,.06,f);_.box(a[0],.055,a[1]-1.45,9,.11,2.55,o("#aeada1",3,.95))}function vt(a,c,f,S=0){_.scope(n.compose(a,c,f,S),()=>{_.cylinder([0,0,-.03],[0,0,.06],.48,.48,J.whiteMetal,36),_.cylinder([0,0,.062],[0,0,.07],.43,.43,o("#efefdf"),36);for(let N=0;N<12;N++){let O=N/12*y;_.cylinder([Math.sin(O)*.34,Math.cos(O)*.34,.085],[Math.sin(O)*.38,Math.cos(O)*.38,.085],.01,.01,J.dark,5)}_.cylinder([0,0,.095],[.07,.27,.095],.017,.017,J.dark,6),_.cylinder([0,0,.1],[.27,-.1,.1],.013,.013,J.dark,6)})}{let a=P(365,430.2);vt(a[0],6.8,a[1]-.06,Math.PI)}{let a=P(391,566);_.scope(n.compose(a[0]+.06,0,a[1],Math.PI/2),()=>{let c=o("#e1e0d4",3,.92),f=o("#ffffff",W,.95),S=2.1,N=.22,O=-.85;_.box(0,5.5,.93,14.4,4.5,2.34,c),_.box(-3.92,5.59,S+.045,5.35,3.05,.06,f),_.box(3.14,5.59,S+.045,6.91,3.05,.06,f),_.box(0,7.84,.96,14.7,.2,2.52,c),_.box(0,3.28,.94,14.4,.3,2.32,c),_.box(0,.16,1.18,14.5,.2,2.88,o("#aaa99e",3,.9)),_.box(0,1.65,N-.08,13.65,2.92,.06,o("#252e2c",0,.93));let B=o("#b4b9b4",0,.42,.38),j=o("#56665f",0,.3,.15);for(let z=0;z<10;z++){let tt=-6.08+z*1.35;_.box(tt,1.5,N,1.28,2.25,.035,j),_.box(tt,2.85,N,1.28,.37,.035,o("#777e70",0,.36)),_.box(tt-.66,1.65,N+.045,.045,2.9,.055,B);for(let wt of[.38,1.18,2.64,3.06])_.box(tt,wt,N+.045,1.34,.045,.055,B);z%2===0&&(_.box(tt+.46,1.2,N+.105,.025,.32,.035,B),_.box(tt+.46,1.02,N+.075,.12,.025,.08,B))}_.box(6.74,1.65,N+.045,.045,2.9,.055,B);for(let z of[-6.91,O,6.91])_.box(z,1.71,S-.29,.58,3.08,.58,c),_.box(z,.23,S-.29,.67,.15,.67,o("#b7b7aa",3,.94));for(let z of[-6.9,6.9])_.box(z,1.74,1.08,.28,3.04,1.88,c);for(let z of[-5.25,-2.65,1.55,4.85])_.box(z,3.115,1.16,.38,.045,.26,o("#50534b")),_.box(z,3.086,1.16,.29,.017,.17,o("#e7e3c5",0,.6,0,.25));for(let z=0;z<3;z++)_.box(0,.03+z*.05,3.25-z*.38,14.7,.06+z*.1,.4,o("#a9a79b",3,.9));vt(O,3.6,S+.08,0)})}{let a=P(204,420),c=o("#919b94",0,.58,.21),f=o("#a9aea5",0,.82);Z.box(a[0],1.8,a[1],8.9,3.6,5.3,J.wall),Z.box(a[0],3.66,a[1],9.15,.18,5.55,o("#919b94",10)),Yt(a[0],a[1],9,5.4,"用具庫");for(let S of[-1,1]){_.box(a[0]+S*2.12,1.58,a[1]-2.69,4.08,2.95,.07,f),_.box(a[0]+S*2.12,1.59,a[1]-2.75,4,.035,.055,c);for(let N=-1;N<=1;N++)_.box(a[0]+S*2.12+N*1.17,1.58,a[1]-2.75,.025,2.88,.045,c);_.box(a[0]+S*3.5,1.34,a[1]-2.79,.045,.26,.045,c)}_.box(a[0],3.16,a[1]-2.81,8.75,.22,.12,c);for(let S of[-3.9,0,3.9])_.cylinder([a[0]+S,3.58,a[1]-2.64],[a[0]+S,.08,a[1]-2.64],.045,.045,c,8);_.box(a[0],1.3,a[1]+2.68,3,2.6,.08,o("#79857f",0,.46,.35))}function Ht(a,c,f=0){let S=P(a,c);_.scope(n.compose(S[0],0,S[1],f),()=>{_.box(0,.63,0,2.9,.33,.52,J.base),_.box(0,.83,0,2.96,.08,.6,o("#c3cdca",0,.23,.7));for(let N=0;N<6;N++){let O=-1.22+N*.49;_.box(O,.84,0,.35,.015,.33,o("#697e81",0,.18,.65)),_.cylinder([O,.81,-.19],[O,1.15,-.19],.018,.018,J.metal,7),_.cylinder([O,1.15,-.19],[O,1.15,.02],.017,.017,J.metal,7)}for(let N of[-1.1,1.1])_.box(N,.35,0,.13,.7,.34,J.base)})}Ht(251,414),Ht(42,400);{let a=P(401,538),c=o("#ac7049",0,.94);_.cylinder([a[0],.12,a[1]],[a[0],.75,a[1]],1.25,1.25,c,36),_.cylinder([a[0],.75,a[1]],[a[0],.82,a[1]],1.29,1.29,o("#ada99a"),36),_.cylinder([a[0],.825,a[1]],[a[0],.84,a[1]],1.1,1.1,J.base,36);for(let f=0;f<24;f++){let S=f/24*y;_.cylinder([a[0]+1.252*Math.sin(S),.12,a[1]+1.252*Math.cos(S)],[a[0]+1.252*Math.sin(S),.74,a[1]+1.252*Math.cos(S)],.009,.009,o("#d4b99a"),5)}for(let f of[-.48,.48])_.cylinder([a[0]+f,.84,a[1]],[a[0]+f,1.18,a[1]],.025,.025,J.metal,7),_.cylinder([a[0]+f,1.18,a[1]],[a[0]+f+.16,1.18,a[1]],.025,.025,J.metal,7)}let Qt=470,Rt=580,kt=302,te=504,_t=P(Qt,kt),Dt=P(Rt,te),V=[(_t[0]+Dt[0])/2,(_t[1]+Dt[1])/2],Pt=Dt[0]-_t[0],mt=Dt[1]-_t[1],Et=P(500,468)[1],It=.45,Tt=Et-_t[1],oe=(_t[1]+Et)/2;Z.box(V[0],It/2,V[1],Pt,It,mt,o("#b7b9b3",3,.94)),Z.plane(V[0],It+.045,oe,Pt,Tt,o("#ffffff",lt,.4),Pt/4,Tt/4),Z.plane(V[0],It+.044,(Et+Dt[1])/2,Pt,Dt[1]-Et,o("#c9c5b9",0,.88),Pt/4,2),jt.push({x:V[0],z:V[1],w:Pt,d:mt,h:10,label:"体育館",gym:!0}),Z.box(Dt[0],2.1,V[1],.35,4.2,mt,J.wall),Z.box(Dt[0],8.38,V[1],.35,.64,mt,J.wall),Yt(Dt[0],V[1],.4,mt,"体育館東壁"),Z.box(V[0],4.35,_t[1],Pt,8.7,.35,J.wall),Yt(V[0],_t[1],Pt,.4,"体育館壁");let Wt=_t[0]+Pt*.38,Re=2.25,we=It,yn=o("#e1dfd5",3,.92),H=_t[0]+Pt*77/309,ut=_t[0]+Pt*156/309,Nt=_t[0]+Pt*202/309,Ft=_t[0]+Pt*233/309,Ot=Et+(Dt[1]-Et)*27/66,Bt=(_t[0]+H)/2,Zt=(Ft+Dt[0])/2,qt=1.1,le=[[Bt-qt,Bt+qt],[Wt-Re,Wt+Re],[Zt-qt,Zt+qt]],he=[],Ie=_t[0];for(let[a,c]of le)a>Ie&&he.push([Ie,a]),Ie=c;Ie<Dt[0]&&he.push([Ie,Dt[0]]);let Ye=[[_t[0]+2,_t[0]+3.5],[ut+.8,ut+1.8],[Nt+.6,Nt+1.55],[Ft+1.7,Ft+3.2]],fn=[Ye[0],[Wt-Re,Wt+Re],...Ye.slice(1)],_e=[],rn=_t[0];for(let[a,c]of fn)a>rn&&_e.push([rn,a]),rn=c;rn<Dt[0]&&_e.push([rn,Dt[0]]);for(let[a,c]of _e)Z.box((a+c)/2,2.1,Dt[1],c-a,4.2,.35,J.wall),Yt((a+c)/2,Dt[1],c-a,.4,"体育館南壁");for(let[a,c]of Ye){let f=(a+c)/2,S=c-a;Z.box(f,.58,Dt[1],S,1.16,.35,J.wall),Z.box(f,3.45,Dt[1],S,1.5,.35,J.wall),_.box(f,1.93,Dt[1]+.045,S-.12,1.52,.055,Mt("#aab9b7")),Yt(f,Dt[1],S,.4,"体育館南壁の窓")}Z.box(Wt,3.6,Dt[1],Re*2,1.2,.35,J.wall),Z.box(V[0],6.45,Dt[1],Pt,4.5,.35,J.wall);for(let[a,c]of he)Z.box((a+c)/2,2.1,Et,c-a,4.2,.35,J.wall),Yt((a+c)/2,Et,c-a,.4,"体育館床の出口側の壁");let an=o("#f4f3ed",0,.62,.08),qn=o("#e2e2da",0,.54,.24);for(let a of[Bt,Zt])Z.box(a,3.6,Et,qt*2,1.2,.35,J.wall),Z.box(a,1.51,Et-.095,qt*2-.12,3.02,.11,an),_.box(a,1.52,Et-.17,qt*2+.06,3.1,.045,qn),_.box(a,1.52,Et-.205,qt*2-.12,2.98,.025,an),_.box(a+(a<V[0]?.78:-.78),1.4,Et-.24,.025,.23,.05,J.metal),Yt(a,Et,qt*2,.4,"出演者控室の閉じた扉");Z.box(Wt,3.6,Et,Re*2,1.2,.35,J.wall),Z.box(V[0],6.37,Et,Pt,4.34,.35,J.wall),Z.tri([_t[0],8.54,Et],[V[0],9.97,Et],[Dt[0],8.54,Et],J.wall);function D(a,c,f){Z.box(a,we+1.6,(c+f)/2,.16,3.2,f-c,yn),Yt(a,(c+f)/2,.18,f-c,"体育館前室の壁")}function nt(a,c,f){Z.box((a+c)/2,we+1.6,f,c-a,3.2,.16,yn),Yt((a+c)/2,f,c-a,.18,"体育館前室の壁")}D(H,Et+.22,Dt[1]),D(ut,Ot,Dt[1]),D(Nt,Et+.22,Dt[1]),D(Ft,Et+.22,Dt[1]),nt(ut,Nt,Ot);let it=o("#a69b86",0,.82),ft=(Ot+Dt[1])/2,gt=Dt[1]-Ot-.55;for(let a of[H+.36,ut-.48]){for(let c of[.28,.7,1.12])_.box(a,It+c,ft,.56,.07,gt,it);for(let c of[-1,1])_.box(a+c*.27,It+.7,ft,.045,1.1,gt,it);Yt(a,ft,.56,gt,"下駄箱")}[["出演者控室（小）",(_t[0]+H)/2],["WC（M）",(ut+Nt)/2],["WC（W）",(Nt+Ft)/2],["出演者控室（大）",(Ft+Dt[0])/2]].forEach(([a,c],f)=>{let S=d.add("gym-room-"+f,(N,O)=>{N.fillStyle="#f5f3eb",N.fillRect(0,0,O,O),N.fillStyle="#273b39",N.textAlign="center",f===0||f===3?(N.font="700 78px sans-serif",N.fillText("出演者控室",O/2,218),N.font="700 100px sans-serif",N.fillText(f===0?"（小）":"（大）",O/2,350)):(N.font="700 112px sans-serif",N.fillText(a,O/2,296))});Ct.scope(n.compose(c,0,Dt[1]-.24,Math.PI),()=>{Ct.sign(0,3.35,0,f===0||f===3?2.2:1.35,.36,S,!0)})});let L=[[335,344],[421,433]],$=[[302,335],[344,421],[433,504]];for(let[a,c]of $){let f=P(Qt,a),S=P(Qt,c);Z.box(_t[0],2.1,(f[1]+S[1])/2,.36,4.2,S[1]-f[1],J.wall),Yt(_t[0],(f[1]+S[1])/2,.4,S[1]-f[1],"体育館西壁")}Z.box(_t[0],8.38,V[1],.36,.64,mt,J.wall);for(let[a,c]of L){let f=P(Qt,a),S=P(Qt,c);Z.box(_t[0],3.49,(f[1]+S[1])/2,.36,1.42,S[1]-f[1],J.wall)}let K=Mt("#aab9b7"),et=o("#b7b9ae",0,.53,.3);for(let a of[-1,1]){let c=V[0]+a*Pt/2;_.box(c,6.13,V[1],.03,3.86,mt-.75,K);for(let f of[4.2,5.05,6.1,7.12,8.05])_.box(c,f,V[1],.16,.065,mt,et);for(let f=_t[1]+.45;f<Dt[1];f+=1.35)_.box(c,6.13,f,.17,3.9,.055,et);for(let f=_t[1]+.5;f<Dt[1];f+=5.4)a<0&&L.some(([S,N])=>f>P(Qt,S)[1]-.2&&f<P(Qt,N)[1]+.2)||_.box(c,4.3,f,.45,8.6,.33,J.wall);for(let f=_t[1]+.5;f<Dt[1]-.4;f+=.55)_.box(c-a*.3,4.9,f,.035,1.2,.03,J.whiteMetal);_.box(c-a*.3,5.5,V[1],.05,.05,mt,J.whiteMetal)}let rt=o("#ffffff",ht,.78),St=o("#966d50",0,.76);for(let a of[-1,1])for(let[c,f]of a<0?$:[[302,504]]){let S=P(Qt,c)[1],N=P(Qt,f)[1],O=V[0]+a*(Pt/2-.205);_.box(O,2.14,(S+N)/2,.028,4.03,N-S,rt),_.box(O-a*.04,4.14,(S+N)/2,.045,.11,N-S,St);for(let B=S+.36;B<N;B+=.75)_.box(O-a*.03,2.1,B,.035,3.94,.026,St);_.cylinder([O-a*.35,5.2,S],[O-a*.35,5.2,N],.025,.025,J.whiteMetal,8)}let At=["#777a4f","#8da6ab","#938270","#596f4c","#be9f7b","#765b4b"];for(let a=0;a<30;a++){let c=Se.exhibitsZ+(a%15-7)*.597,f=It+1.55+(.5-Math.floor(a/15))*(.21+.15);_.box(Dt[0]-.369,f,c,.012,.21,.297,J.fabric),_.box(Dt[0]-.378,f+.028,c,.008,.117,.261,o(At[a%6])),_.box(Dt[0]-.383,f-.045,c,.008,.061,.261,o(At[(a*3+1)%6])),_.sphere(Dt[0]-.389,f-.009,c+.038,.007,.043,.049,o(At[(a+3)%6]),8,6)}for(let a=0;a<4;a++){let c=Se.exhibitsZ+(a-1.5)*2.49,f=It+1.55;_.box(_t[0]+.265,f,c,.012,1.17,2.37,J.fabric);for(let S=0;S<6;S++){let N=o(["#739369","#7b9a9a","#ba8461"][S%3]);_.box(_t[0]+.274,f+(.27-S*.09)*1.5,c+.36,.01,.027,1.14,N),_.sphere(_t[0]+.274,f+(.19-S*.076)*1.5,c-.63,.008,.0525,.219,N,8,6)}}let Gt=Dt[0]-1.3,ee=Et-1.3,xe=o("#798c92",6,.95);_.scope(n.compose(Gt,It,ee,0),()=>{ri(_,1.75,1.75,xe,2,2.23);for(let a of[-1,1])_.box(a*.875,1.02,0,.022,1.95,1.75,xe),_.box(0,1.02,a*.875,1.75,1.95,.022,xe)}),Yt(Gt,ee,1.75,1.75,"授乳スペース");let Ee=m.locations.find(a=>a.id==="NURSING");Ee.pos=[Gt,ee],Ee.approach=[Gt-2,ee],Ee.marker=[Gt,It+2.45,ee],pt.push(Ee);for(let[a,c]of L){let f=P(Qt,a)[1],S=P(Qt,c)[1];_.box(_t[0]+.205,3.49,(f+S)/2,.035,1.42,S-f,rt)}let ie=Et-.205;for(let[a,c]of he)_.box((a+c)/2,1.55,ie,c-a,2.94,.035,rt);_.box(V[0],3.57,ie,Pt,1.1,.035,rt);for(let a=_t[0]+.38;a<Dt[0]-.2;a+=.53){let c=le.some(([f,S])=>a>=f&&a<=S);_.box(a,c?3.57:2.1,ie-.028,.022,c?1.02:3.96,.02,St)}let Ze=o("#e6e2d8",0,.76),pn=o("#24775f",0,.74,.04);for(let a of[-1,1])_.box(Wt+a*2.25,1.52,ie-.04,.11,3.04,.09,Ze);_.box(Wt,3.02,ie-.04,4.6,.12,.09,Ze);let hn=o("#f4f3ed",0,.64,.08);for(let a of[-1,1])_.box(Wt+a*(Re-.11),1.51,Et+.67,.08,2.98,1.28,hn),_.box(Wt+a*(Re-.17),1.44,Et+.25,.035,.27,.05,J.metal);for(let a of[-4.8,0,4.8]){let c=V[0]+a;_.box(c,6,ie-.02,1.35,2.4,.05,Ze),_.box(c,6,ie-.055,1.21,2.25,.025,pn),_.box(c-.35,6,ie-.073,.08,2.19,.015,o("#6eb49a",0,.79,.02))}let on=o("#8f9693",10,.78,.12),Sn=o("#e8e6dc",0,.96);for(let a of[-1,1]){let c=V[0]+a*(Pt/2+.4);Jt.quad([V[0],10.15,_t[1]-.4],[V[0],10.15,Dt[1]+.4],[c,8.72,Dt[1]+.4],[c,8.72,_t[1]-.4],on,mt/3,4),Jt.quad([V[0],9.97,_t[1]],[c,8.54,_t[1]],[c,8.54,Dt[1]],[V[0],9.97,Dt[1]],Sn,1,1)}for(let a of[_t[1],Dt[1]])Z.tri([_t[0],8.7,a],[V[0],10.15,a],[Dt[0],8.7,a],J.wall);for(let a=_t[1]+3;a<Dt[1]-1;a+=5.4)for(let c of[-7,-2.3,2.3,7]){let f=9.93-Math.abs(c)/(Pt/2)*1.43;Jt.cylinder([V[0]+c,f-.07,a],[V[0]+c,f-.01,a],.25,.25,J.whiteMetal,20),Jt.disk(V[0]+c,f-.085,a,.215,o("#fff9e4",0,.9,0,.8),20)}let se=o("#a8784f",0,.58),En=o("#391722",6,.94),Ve=o("#c39736",0,.47,.17),tn=_t[1]+4.03,An=_t[1]+2.14;for(let a of[-1,1]){let c=Pt/2-6.12,f=V[0]+a*(6.12+c/2);Z.box(f,4.35,tn,c,8.7,.35,J.wall),Yt(f,tn,c,.4,"体育館壁"),_.box(f,2.1,tn+.21,c,4.16,.05,rt);for(let S=f-c/2+.36;S<f+c/2;S+=.5)_.box(S,2.1,tn+.25,.023,4.08,.026,St)}Z.box(V[0],8.2,tn,12.24,1,.35,J.wall),Z.box(V[0],It+.55,_t[1]+2.1,11,1.1,4,o("#aa7649",lt,.52)),Yt(V[0],_t[1]+2.1,11,4.2,"常設舞台・使用せず"),_.box(V[0],3.81,An,11.2,5.46,.11,En);for(let a=0;a<32;a++){let c=V[0]-5.42+a*.35;_.cylinder([c,1.1,An+.08],[c,6.49,An+.08],.075,.075,o(a%3?"#421925":"#572331",6,.96),7)}for(let a of[1.1,6.48])_.box(V[0],a,An+.17,11.18,.085,.1,Ve);for(let a of[-1,1])_.box(V[0]+a*5.86,4.05,tn,.73,6.89,.45,se),_.box(V[0]+a*5.49,3.79,(An+tn)/2,.22,5.95,tn-An,se);_.box(V[0],7.46,tn,12.45,.66,.45,se),_.box(V[0],6.89,tn+.23,11.12,.55,.07,o("#4a1a28",0,.94)),_.quad([V[0],7.24,tn+.28],[V[0]-.25,6.97,tn+.28],[V[0],6.7,tn+.28],[V[0]+.25,6.97,tn+.28],Ve),_.box(V[0],1,tn+.11,11.1,1.1,.15,rt);for(let a of[-1,1])_.box(V[0]+a*8.25,2.55,tn+.29,3.2,.92,.06,rt);Ct.sign(V[0]+8.25,2.55,tn+.34,3,.62,b);for(let a of[-1,1])for(let c of[_t[1]+20,_t[1]+33,_t[1]+46])_.box(V[0]+a*(Pt/2-.245),6.03,c,.035,2.9,2.4,o("#27443b",6,.9));for(let a of[-1,1])_.cylinder([V[0]+a*6,.05,_t[1]+5],[V[0]+a*6,5.3,_t[1]+5],.045,.045,J.metal,8);function Rn(a,c,f,S,N,O=.066+It){let B=f[0]-c[0],j=f[1]-c[1],z=Math.hypot(B,j),tt=-j/z*S/2,wt=B/z*S/2;a.quad([c[0]-tt,O,c[1]-wt],[c[0]+tt,O,c[1]+wt],[f[0]+tt,O,f[1]+wt],[f[0]-tt,O,f[1]-wt],N,z,1)}for(let a of[V[0]-8.2,V[0]+8.2])Rn(_,[a,_t[1]+6],[a,Et-2],.047,o("#f5ede3"));for(let a of[_t[1]+6,oe,Et-2])Rn(_,[V[0]-8.2,a],[V[0]+8.2,a],.047,o("#f5ede3"));for(let a of[V[0]-6.8,V[0]+6.8])Rn(_,[a,_t[1]+13],[a,Et-3],.036,o("#293239"),.068+It);for(let a of[_t[1]+13,Et-3])Rn(_,[V[0]-6.8,a],[V[0]+6.8,a],.036,o("#293239"),.068+It);for(let a of[V[0]-9.2,V[0]+9.2])Rn(_,[a,_t[1]+16],[a,Et-4],.038,o("#2f7795"),.07+It);let Ci=P(469.65,427);Ct.scope(n.compose(Ci[0]-.12,0,Ci[1],-Math.PI/2),()=>{Fe("GYM",()=>{Ct.sign(0,2.94,0,3.5,.75,x.GYM.banner),Ct.sign(3.7,1.55,.1,1.08,1.65,Y)})}),t(.3,"テント・キッチンカー・ブースの内容を配置しています");function Oe(a,c,f,S=0,N="#66746c",O=0){a.scope(n.compose(c,O,f,S),()=>{let B=o("#a5aca8",0,.32,.5),j=o(N,6,.82);a.box(0,.43,0,.42,.055,.39,j),a.box(0,.7,-.18,.43,.3,.045,j);for(let z of[-.17,.17])a.cylinder([z,.04,-.15],[z,.86,-.18],.016,.016,B,6),a.cylinder([z,.04,.21],[z,.44,.1],.016,.016,B,6),a.cylinder([z,.05,-.16],[z,.47,.15],.014,.014,B,6);a.cylinder([-.19,.18,-.14],[.19,.18,-.14],.012,.012,B,6)})}function en(a,c,f,S=1.8,N=.72,O=0,B=!0,j=!1){a.scope(n.compose(c,0,f,O),()=>{a.box(0,.73,0,S,.07,N,B?o("#f2ede1",13,.9):o("#d5c8af",5,.7));for(let z of[-S*.36,S*.36])a.cylinder([z,.06,-N*.34],[z,.71,N*.32],.022,.022,J.metal,7),a.cylinder([z,.06,N*.34],[z,.71,-N*.32],.022,.022,J.metal,7);if(a.cylinder([-S*.38,.35,0],[S*.38,.35,0],.021,.021,J.metal,7),B)for(let z of[-1,1])a.box(0,.6,z*N/2,S,.25,.016,o("#eeeadf",6,.94))}),j&&Yt(c,f,Math.abs(Math.cos(O))*S+Math.abs(Math.sin(O))*N,Math.abs(Math.sin(O))*S+Math.abs(Math.cos(O))*N,"table")}let si=me(1050.5,871.5);for(let a=0;a<4;a++)for(let c=0;c<4;c++){let f=si[0]+(c-1.5)*2.62,S=si[1]+(a-1.5)*2.42;en(_,f,S,1.65,.7,0,!0,!0);for(let N of[-1,1])for(let O=0;O<3;O++){let B=f+(O-1)*.53,j=S+N*.71;Oe(_,B,j,N===-1?0:Math.PI,"#6f7970"),$t.push({x:B,z:j,yaw:N===-1?0:Math.PI})}}let $e=me(1185.5,1577.5);for(let a=0;a<3;a++){en(_,$e[0],$e[1]+(a-1)*2.2,1.8,.65,0,!0,!0);for(let c of[-1,1])for(let f=0;f<3;f++){let S=$e[0]+(f-1)*.57,N=$e[1]+(a-1)*2.2+c*.68,O=c<0?0:Math.PI;Oe(_,S,N,O),$t.push({x:S,z:N,yaw:O,eat2:!0})}}for(let a=0;a<6;a++)for(let c=0;c<12;c++){let f=V[0]+(c-5.5)*.64+(c<6?-.7:.7),S=_t[1]+18.5+a*.92;Oe(_,f,S,Math.PI,"#566a68",It+.05),$t.push({x:f,z:S,yaw:Math.PI,gym:!0})}for(let a=0;a<6;a++)for(let c of[-2,-1,12,13]){let f=V[0]+(c-5.5)*.64+(c<6?-.7:.7),S=_t[1]+18.5+a*.92;Oe(_,f,S,Math.PI,"#566a68",It+.05),$t.push({x:f,z:S,yaw:Math.PI,gym:!0,addedGymSeat:!0})}for(let a=6;a<8;a++)for(let c=0;c<16;c++){let f=V[0]+(c-7.5)*.64+(c<8?-.7:.7),S=_t[1]+18.5+a*.92;Oe(_,f,S,Math.PI,"#566a68",It+.05),$t.push({x:f,z:S,yaw:Math.PI,gym:!0,addedGymSeat:!0})}function On(a,c,f,S,N=0){let Ut=Math.atan(-.132),Xt=Math.cos(Ut),de=Math.sin(Ut),pe=n.compose(0,.85,-.15+(.85-.04)*-.132);pe[5]=Xt,pe[6]=de,pe[9]=-de,pe[10]=Xt,a.scope(n.compose(c,0,f,N),()=>{for(let fe of[-.15,-.48])for(let Vt of[-1,1])a.cylinder([Vt*.4,.04,fe],[Vt*.35,1.29,-.315],.023,.023,J.wood,6);a.scope(pe,()=>a.sign(0,0,.025,.7,.94,S,!0))})}function ri(a,c,f,S,N=2.18,O=3.16){let B=[[-c/2,N,-f/2],[-c/2,N,f/2],[c/2,N,f/2],[c/2,N,-f/2]],j=[0,O,0];for(let z=0;z<4;z++){let tt=B[z],wt=B[(z+1)%4],yt=(Ut,Xt)=>{let de=e.add(e.mul(tt,1-Ut),e.mul(wt,Ut)),pe=e.add(e.mul(de,1-Xt),e.mul(j,Xt));return pe[1]-=.052*Math.sin(Ut*Math.PI)*Math.sin(Xt*Math.PI),pe};for(let Ut=0;Ut<10;Ut++)for(let Xt=0;Xt<8;Xt++){let de=Ut/10,pe=Xt/8,fe=yt(de,pe),Vt=yt((Ut+1)/10,pe),ae=yt((Ut+1)/10,(Xt+1)/8),ce=yt(de,(Xt+1)/8);a.quad(fe,Vt,ae,ce,S,1,1)}a.quad(tt,[tt[0],N-.2,tt[2]],[wt[0],N-.2,wt[2]],wt,S,1,1)}}function vs(a,c){let f=c.id,S=c.category,N=f==="F-1"||f==="F-9",O=f==="F-6"||f==="F-8",B=f==="T-12",j=f==="T-2";if(N){for(let z=0;z<9;z++){let tt=-.8+z%5*.23,wt=.3+Math.floor(z/5)*.22;a.cylinder([tt,.79,wt],[tt,.94,wt],.044,.052,o("#faf3dd"),12),a.cylinder([tt,.94,wt],[tt,.958,wt],.055,.055,o("#635442"),12)}a.box(.54,1.02,-.14,.45,.53,.32,o("#3f4443",0,.25,.45)),a.box(.53,1.09,.03,.22,.13,.017,o("#91aaa1",0,.25,.2));for(let z=0;z<3;z++)a.cylinder([.36+z*.11,.79,.16],[.36+z*.11,.98,.16],.028,.028,J.metal,8)}else if(O)for(let z=0;z<3;z++){let tt=-.65+z*.65;a.box(tt,.79,.28,.56,.11,.4,o("#a98350",5));for(let wt=0;wt<7;wt++)a.sphere(tt+v(-.2,.2),.89,.28+v(-.14,.14),v(.065,.09),.045,v(.06,.1),o(["#bd863d","#d2a05d","#a87139"][wt%3]),12,7)}else if(B)for(let z=0;z<3;z++){let tt=-.62+z*.6;a.box(tt,.85,.17,.52,.2,.5,o("#b7915d",5));for(let wt=0;wt<8;wt++){let yt=tt+v(-.2,.2),Ut=.17+v(-.17,.17);a.cylinder([yt,.88,Ut],[yt+.11,1.06,Ut+.04],.017,.04,o("#d07731"),8),a.cylinder([yt+.1,1.04,Ut+.04],[yt+.17,1.17,Ut+.02],.008,.01,o("#58703a"),6)}}else if(j){a.box(-.35,.94,.15,.7,.28,.34,o("#2b363c",0,.45,.25)),a.box(-.42,1.01,.33,.29,.1,.007,o("#a9be92",0,.5,0,.2));for(let z=0;z<3;z++)a.cylinder([-.06+z*.05,.94,.34],[-.06+z*.05,.94,.37],.024,.024,J.metal,10);a.box(.5,.84,.23,.35,.05,.28,o("#373a3c")),a.cylinder([.75,.8,-.13],[.75,2.65,-.13],.012,.012,J.metal,7),a.cylinder([.33,2.4,-.13],[1.14,2.4,-.13],.015,.015,J.metal,7)}else if(S==="F"){for(let z=0;z<3;z++){let tt=-.7+z*.65;a.box(tt,.8,.22,.54,.09,.36,o("#d1d5c8",0,.25,.45));for(let wt=0;wt<8;wt++){let yt=tt+v(-.2,.2),Ut=.22+v(-.12,.12);a.sphere(yt,.855,Ut,.047,.025,.045,o(["#c99352","#dfb476","#724b30"][wt%3]),9,5)}}if(f==="F-11"){a.box(.12,.8,-.26,1,.1,.3,J.black);for(let z=0;z<9;z++)a.cylinder([-.3+z*.1,.88,-.49],[-.3+z*.1,.88,.02],.006,.006,o("#d5b878"),5)}}else if(S==="S"){for(let z=0;z<14;z++){let tt=-.8+z%7*.25,wt=.13+Math.floor(z/7)*.25;a.box(tt,.794,wt,.17,.015,.16,o("#f8f4e6")),a.sphere(tt,.83,wt,.055,.032,.055,o(["#aa5c61","#b5aa6c","#558489","#9a804c"][z%4],0,.28,.32),12,7)}if(f==="S-8")for(let z=0;z<9;z++)a.cylinder([-.75+z*.17,.83,-.2],[-.7+z*.17,1.01,-.08],.021,.024,o("#c8af70",5),7)}else for(let z=0;z<3;z++)a.box(-.65+z*.6,.795,.22,.43,.015,.28,o("#faf8ec")),a.box(-.65+z*.6,.82,.2,.35,.012,.21,o(["#bbbaa0","#a6b4bb","#b7ba8d"][z],0,.8))}function nh(a,c=null){let f=c||a.pos,S=a.width||3.02,N=a.depth||2.75,O=a.yaw||0,B=a.id==="S-3"||a.id==="S-9"?"#8393a0":a.id==="F-11"?"#859690":"#f8f7ef",j=o(F[a.category],6,.92);Z.scope(n.compose(f[0],0,f[1],O),()=>{ri(Z,S,N,o(B,6,.92));for(let Ut of a.id==="F-10"?[-S/2+.035,0,S/2-.035]:[-S/2+.035,S/2-.035])for(let Xt of[-N/2+.035,N/2-.035])Z.cylinder([Ut,.03,Xt],[Ut,2.2,Xt],.029,.026,J.metal,8);Z.box(0,2.1,N/2,S,.29,.026,j),Z.box(0,2.1,-N/2,S,.29,.025,o(B,6));for(let Ut of[-S/2,S/2])Z.box(Ut,2.1,0,.025,.29,N,o(B,6));Z.cylinder([-S/2,2.17,-N/2],[S/2,2.17,N/2],.021,.021,J.metal,8),Z.cylinder([S/2,2.17,-N/2],[-S/2,2.17,N/2],.021,.021,J.metal,8),(a.category==="F"||a.id==="HQ")&&Z.box(0,1.15,-N/2,S,1.87,.015,o("#eeeee5",6,.94))}),_.scope(n.compose(f[0],0,f[1],O),()=>{a.id==="F-10"?(en(_,-1.5,.4,2.28,.73),en(_,1.5,.4,2.28,.73),_.scope(n.compose(-1.5,0,0),()=>vs(_,a)),Oe(_,-2.15,-.53,0,"#65746c"),_.box(-.75,.23,-.46,.54,.42,.4,o("#af9270",5))):(en(_,0,.4,Math.min(S-.45,2.28),.73),vs(_,a),Oe(_,-.65,-.53,0,"#65746c"),_.box(.75,.23,-.46,.54,.42,.4,o("#af9270",5))),a.category==="T"&&_.sign(.56,1.5,-1.25,.95,.98,x[a.id].menu,!0)}),Ct.scope(n.compose(f[0],0,f[1],O),()=>{Fe(a.id,()=>Ct.sign(0,2.15,N/2+.03,Math.min(S-.09,2.87),.62,x[a.id].banner)),Fe(a.id,()=>On(Ct,-S/2+.2,N/2+.4,x[a.id].menu,-.14))});let z=[Math.sin(O),Math.cos(O)],tt=[Math.cos(O),-Math.sin(O)],wt=f[0]+z[0]*.4,yt=f[1]+z[1]*.4;Yt(wt,yt,Math.abs(tt[0])*(S-.4)+Math.abs(z[0])*.8,Math.abs(tt[1])*(S-.4)+Math.abs(z[1])*.8,a.id),a.approach=[f[0]+z[0]*(N/2+3.1),f[1]+z[1]*(N/2+3.1)],a.marker=[f[0]+z[0]*1.4,3.22,f[1]+z[1]*1.4],pt.push(a)}function pl(a,c,f,S,N=1,O=.37){a.cylinder([c,f,S-.09],[c,f,S+.09],O,O,J.tire,22),a.cylinder([c,f,S+N*.094],[c,f,S+N*.114],O*.55,O*.55,J.metal,20);for(let B=0;B<6;B++){let j=B/6*y;a.cylinder([c+Math.cos(j)*O*.34,f+Math.sin(j)*O*.34,S+N*.115],[c+Math.cos(j)*O*.34,f+Math.sin(j)*O*.34,S+N*.12],O*.12,O*.12,J.dark,7)}}function gd(a,c){let f=a.pos,S=a.yaw,O=o(["#ede6d3","#c3a875","#eef0df","#657f79","#aa7761","#e2d8c3","#e0cf9e","#6c7a75"][c%8],0,.38,.23),B=Z;B.scope(n.compose(f[0],0,f[1],S),()=>{B.box(0,.46,0,3.85,.22,1.7,J.dark),B.box(.42,1.63,0,2.85,2.03,1.82,O),B.box(-1.41,1.2,0,1.06,1.37,1.8,O),B.box(-1.65,.9,0,.88,.38,1.9,O),B.box(-1.44,1.58,0,1.04,.74,1.8,O),B.box(-1.96,1.58,0,.035,.66,1.57,J.glass),B.box(-1.42,1.65,.91,.76,.54,.018,J.glass),B.box(-1.42,1.65,-.91,.76,.54,.018,J.glass),B.box(.46,2.76,0,2.98,.14,1.92,O);for(let Kt of[-1.35,1.2])for(let ve of[-.89,.89])pl(B,Kt,.4,ve,ve<0?-1:1,.36);B.box(-1.98,.61,0,.1,.19,1.7,o("#b3b8b3",0,.35,.55));for(let Kt of[-.61,.61])B.box(-2.04,.93,Kt,.034,.2,.37,o("#eee8cf",0,.14,.3,.15));B.box(-2.05,.58,0,.034,.16,.28,o("#decb71")),B.box(.26,2.91,-.17,.53,.17,.44,J.whiteMetal),B.cylinder([1.3,2.8,-.48],[1.3,3,-.48],.11,.11,J.metal,12);for(let Kt of[-1.06,1.06])B.cylinder([-1.65,1.61,Kt*.83],[-1.65,1.62,Kt],.02,.02,J.dark,6),B.box(-1.64,1.64,Kt,.1,.19,.05,J.dark)});let j=a.servingSide==="rear",z=j?Math.PI/2:a.servingSide==="opposite"?Math.PI:0,tt=j?1.42:2.4,wt=j?1.87:.92,yt=j?[0,wt]:[.46,wt],Ut=S+z,Xt=[Math.cos(Ut),-Math.sin(Ut)],de=[Math.sin(Ut),Math.cos(Ut)],pe=f[0]+Xt[0]*yt[0]+de[0]*yt[1],fe=f[1]+Xt[1]*yt[0]+de[1]*yt[1];B.scope(n.compose(pe,0,fe,Ut),()=>{let Kt=tt/2;B.box(0,1.79,.006,tt,1,.016,J.dark),B.box(0,1.72,.016,tt-.13,.81,.009,o("#555e54",0,.7)),B.box(0,1.16,.19,tt+.15,.07,.54,J.metal),B.quad([-Kt,2.56,.02],[-Kt,2.3,1.11],[Kt,2.3,1.11],[Kt,2.56,.02],o("#f6efdf",6),2,1),B.box(0,2.22,1.1,tt+.1,.18,.02,o(F.F,6));for(let ve of[-Kt+.08,Kt-.08])B.cylinder([ve,1.71,.04],[ve,2.3,1.03],.017,.017,J.metal,6)}),_.scope(n.compose(pe,0,fe,Ut),()=>{_.scope(n.compose(-.46,.38,-.92,0),()=>vs(_,a));let Kt=o("#78a9b3",0,.86),ve=o("#557780",0,.9);_.box(0,.17,.34,1.03,.34,.5,Kt),_.box(0,.085,.68,1.03,.17,.3,Kt);for(let[Ke,He]of[[.343,.34],[.173,.68]])_.box(0,Ke,He,.95,.012,.24,ve)}),Ct.scope(n.compose(pe,0,fe,Ut),()=>{Fe(a.id,()=>Ct.sign(0,2.67,.025,j?1.57:2.54,.48,x[a.id].banner)),Fe(a.id,()=>On(Ct,-.86,1.36,x[a.id].menu,.1))});let Vt=[Math.cos(S),-Math.sin(S)],ae=[Math.sin(S),Math.cos(S)];Yt(f[0],f[1],Math.abs(Vt[0])*4.03+Math.abs(ae[0])*1.93,Math.abs(Vt[1])*4.03+Math.abs(ae[1])*1.93,a.id);let ce=Math.abs(Xt[0])*1.03+Math.abs(de[0])*.74,Be=Math.abs(Xt[1])*1.03+Math.abs(de[1])*.74;Yt(pe+de[0]*.46,fe+de[1]*.46,ce,Be,"踏み台 "+a.id),a.approach=[pe+de[0]*2.38,fe+de[1]*2.38],a.marker=[pe+de[0]*.53,3.42,fe+de[1]*.53],pt.push(a)}let xd=0;for(let a of m.records)a.kind==="tent"?nh(a):a.kind==="truck"&&gd(a,xd++);let _d=m.locations.find(a=>a.id==="HQ");nh(_d);let cr=m.locations.find(a=>a.id==="OUTSTAGE"),ue=cr.pos;Z.box(ue[0],.28,ue[1],7.2,.56,1.8,J.wood),Yt(ue[0],ue[1],7.2,1.8,"屋外ステージ");for(let a of[-1.8,0,1.8])_.box(ue[0]+a,.563,ue[1],.012,.009,1.8,J.dark);_.box(ue[0],.563,ue[1],7.2,.009,.012,J.dark);for(let a of[-1,1])_.box(ue[0]+a*4.05,.14,ue[1]+.5,.72,.28,.72,J.base),_.cylinder([ue[0]+a*3.9,.04,ue[1]-.4],[ue[0]+a*3.9,3.2,ue[1]-.4],.033,.033,J.metal,7),_.box(ue[0]+a*3.9,2.5,ue[1]-.4,.48,.85,.35,J.black);let Yn=ue[1]-1.65,hr=ue[1]-3.75;for(let a of[-1,1])_.cylinder([ue[0]+a*4,.1,Yn],[ue[0]+a*4,.12,hr],.035,.035,J.metal,8);_.cylinder([ue[0]-4,.1,Yn],[ue[0]+4,.1,Yn],.035,.035,J.metal,8);for(let a of[-1,1])_.cylinder([ue[0]+a*4,.1,Yn],[ue[0]+a*4,2.1,Yn],.035,.035,J.metal,8);_.cylinder([ue[0]-4,2.1,Yn],[ue[0]+4,2.1,Yn],.035,.035,J.metal,8),_.cylinder([ue[0]-4,.12,hr],[ue[0]+4,.12,hr],.035,.035,J.metal,8),_.quad([ue[0]-4,.12,hr],[ue[0]-4,.1,Yn],[ue[0]+4,.1,Yn],[ue[0]+4,.12,hr],o("#a7b0a6",11,.75),6,2);let yd=d.add("stage-k-estate",(a,c)=>{a.fillStyle="#f7f7f2",a.fillRect(0,0,c,c),a.fillStyle="#9e3235",a.fillRect(0,0,c,92),a.fillStyle="#fff",a.textAlign="center",a.font="700 24px sans-serif",a.fillText("SHONAN REAL ESTATE",c/2,55),a.fillStyle="#24516b",a.font="700 69px sans-serif",a.fillText("K ESTATE",c/2,255),a.fillStyle="#5c7989",a.font="600 24px sans-serif",a.fillText("K エステート",c/2,315)});for(let a=-1;a<=1;a++){let c=ue[0]+a*2.52,f=2.42;Ct.quad([c-f/2,2.02,Yn+.06],[c-f/2,.13,Yn+.06],[c+f/2,.13,Yn+.06],[c+f/2,2.02,Yn+.06],o("#ffffff",yd,.9,0,.06))}let Ms=ue[0]+5.15,bs=ue[1]+2.6;_.box(Ms,1.5,bs,1.26,.73,.12,J.black),_.box(Ms,1.5,bs+.07,1.22,.69,.025,o("#303c3d",0,.32,.08)),_.cylinder([Ms,.08,bs],[Ms,1.13,bs],.055,.055,J.metal,8),_.box(Ms,.06,bs,.62,.12,.47,J.dark);for(let a of[.2,1.2])en(_,ue[0]+5.5,ue[1]+a,1.32,.63,0);_.box(ue[0]+5.5,.85,ue[1]+1.2,.56,.18,.39,J.dark);for(let a of[.2,1.2])Oe(_,ue[0]+5.5,ue[1]+a+1,0,"#4a5558");_.cylinder([ue[0]+6.45,.37,ue[1]-1.5],[ue[0]+6.82,.37,ue[1]-1.5],.23,.23,J.dark,12),Yt(Ms,bs,1.3,.5,"大型モニター");let zn=[ue[0]-5.8,ue[1]+.4];_.scope(n.compose(zn[0],0,zn[1],0),()=>{ri(_,3,2.8,J.fabric);for(let a of[-1.45,1.45])for(let c of[-1.3,1.3])_.cylinder([a,.04,c],[a,2.15,c],.025,.025,J.metal,7)}),en(_,zn[0]+.35,zn[1]+.45,1.55,.7,0);for(let a=0;a<15;a++)_.box(zn[0]-1+a%5*.45,.2+Math.floor(a/5)*.4,zn[1]-.7,.41,.38,.48,J.wood);Yt(zn[0],zn[1],3,2.8,"屋外ステージのポップアップテント"),_.cylinder([ue[0],.6,ue[1]+.1],[ue[0],1.9,ue[1]+.1],.018,.018,J.black,7),_.cylinder([ue[0],1.9,ue[1]+.1],[ue[0]+.36,2.08,ue[1]+.22],.018,.018,J.black,7),Fe(cr.id,()=>Ct.sign(ue[0],.34,ue[1]+.914,6.75,.5,x.OUTSTAGE.banner)),cr.approach=[ue[0],ue[1]+3.2],cr.marker=[ue[0],2.1,ue[1]],pt.push(cr);for(let a of m.locations.filter(c=>["MEET","EAT2","WC"].includes(c.id)))a.approach=a.pos,a.marker=[a.pos[0],2.5,a.pos[1]],pt.push(a),a.id==="WC"&&Ct.scope(n.compose(a.pos[0],0,a.pos[1],0),()=>{Ct.sign(0,2.4,0,2.2,.53,d.banner("WC","体育館南側・トイレ","当日のトイレ",F.I))});t(.45,"木々・遊具・モビリティ走路を作っています");let In=Se.track,Ss=0,ur=[0],ua=In.map((a,c)=>{let f=In[(c-1+In.length)%In.length],S=In[(c+1)%In.length],N=S[0]-f[0],O=S[1]-f[1],B=Math.hypot(N,O);return[-O/B,N/B]});for(let a=0;a<In.length;a++){let c=(a+1)%In.length,f=In[a],S=In[c],N=ua[a],O=ua[c],B=Math.hypot(S[0]-f[0],S[1]-f[1]);if(Ss+=B,ur.push(Ss),Z.quad([f[0]-N[0],.055,f[1]-N[1]],[f[0]+N[0],.055,f[1]+N[1]],[S[0]+O[0],.055,S[1]+O[1]],[S[0]-O[0],.055,S[1]-O[1]],o("#bba990",1,.98),2,B),a%8<4)for(let j of[-1,1])Rn(_,[f[0]+N[0]*.95*j,f[1]+N[1]*.95*j],[S[0]+O[0]*.95*j,S[1]+O[1]*.95*j],.085,o("#f3e8d0"),.063)}let ih=In.map(([a,c],f)=>[a-ua[f][0]*1.28,c-ua[f][1]*1.28]);function sh(a,c,f=.65,S=!1,N=!1){let O=Math.hypot(c[0]-a[0],c[1]-a[1]),B=Math.max(1,Math.ceil(O/2.2)),j=S?o("#a48d66",5):o("#dedfd4",0,.45,.35);for(let z=0;z<=B;z++){let tt=a[0]+(c[0]-a[0])*z/B,wt=a[1]+(c[1]-a[1])*z/B;_.cylinder([tt,.05,wt],[tt,f+.05,wt],S?.045:.025,S?.042:.025,j,7),S||_.box(tt,.035,wt,.28,.07,.34,J.base)}for(let z of[f*.4,f])_.cylinder([a[0],z,a[1]],[c[0],z,c[1]],S?.036:.021,S?.036:.021,j,7);N&&_.quad([a[0],.15,a[1]],[a[0],f,a[1]],[c[0],f,c[1]],[c[0],.15,c[1]],o("#a2aa9a",11,.82),O/1.1,f/1.1)}let vd=o("#e1ba22",6,.9),Md=o("#252525",6,.9);function bd(a,c){let f=Math.hypot(c[0]-a[0],c[1]-a[1]),S=Math.max(1,Math.ceil(f/2.2)),N=O=>[a[0]+(c[0]-a[0])*O,a[1]+(c[1]-a[1])*O];for(let O=0;O<=S;O++){let[B,j]=N(O/S);_.cylinder([B,.02,j],[B,.72,j],.008,.008,J.metal,7),_.cylinder([B,.68,j],[B,.71,j],.016,.016,J.metal,8)}for(let O=0;O<S;O++)for(let B=0;B<8;B++){let j=(O+B/8)/S,z=(O+(B+1)/8)/S,tt=N(j),wt=N(z),yt=.7-.05*Math.sin(Math.PI*B/8),Ut=.7-.05*Math.sin(Math.PI*(B+1)/8);_.cylinder([tt[0],yt,tt[1]],[wt[0],Ut,wt[1]],.012,.012,B%2?Md:vd,6)}}let ml=Se.ropeSections.flatMap(a=>a.slice(1).map((c,f)=>[a[f],c]));for(let[a,c]of ml)bd(a,c);let dr=Se.boarding.map(({pos:a,distance:c},f)=>{let S=m.locations.find(N=>N.id==="BOARDING_"+(f+1));return S.approach=[a[0]+(f===0?-1.25:.3),a[1]+(f===0?0:2)],S.marker=[a[0],1.75,a[1]],pt.push(S),{position:a,distance:c,rec:S}}),da=m.locations.find(a=>a.id==="MOBILITY");da.approach=[zn[0],zn[1]+2.1],da.marker=[zn[0],2.8,zn[1]],pt.push(da),Fe(da.id,()=>Ct.sign(zn[0],2.1,zn[1]+1.42,2.85,.65,x.MOBILITY.banner)),On(Ct,dr[0].position[0]-1.5,dr[0].position[1]+1.6,X,-.3);let[rh,ah]=Se.boardingTent;_.scope(n.compose(rh,0,ah,0),()=>{ri(_,3,3,J.fabric);for(let a of[-1.46,1.46])for(let c of[-1.46,1.46])_.cylinder([a,.03,c],[a,2.2,c],.029,.026,J.metal,8)}),Yt(rh,ah,3,3,"乗降場②");function oh(a){let c=(a%Ss+Ss)%Ss,f=0;for(;f<In.length-1&&ur[f+1]<c;)f++;let S=In[f],N=In[(f+1)%In.length],O=(c-ur[f])/(ur[f+1]-ur[f]);return{distance:c,x:S[0]+(N[0]-S[0])*O,z:S[1]+(N[1]-S[1])*O,yaw:Math.atan2(N[0]-S[0],N[1]-S[1])}}let ln=new s,gl=new s,fr=o("#d5d8d1",0,.39,.18),lh=o("#91a7a6",0,.21,.55);ln.box(0,.46,-.2,1.22,.2,2.3,J.dark),ln.box(0,.84,-.94,1.24,.65,.72,fr),ln.box(0,1.02,-.74,1.12,.25,.7,o("#465052",0,.75)),ln.box(0,.82,.22,1.23,.16,1.18,fr),ln.sphere(0,.87,.95,.68,.61,.25,fr,18,10);let Ri=Array.from({length:17},(a,c)=>(c-8)*.07),ws=Array.from({length:9},(a,c)=>c/8),zi=(a,c)=>{let f=Math.abs(a)/.56;return[a,1.22+c*(.69-.1*f*f),1.17-.56*c-.13*f*f]},fa=(a,c)=>{let f=-.2*c*a/.31360000000000005,S=-.26*a/(.56*.56),N=.69-.1*(a/.56)**2,O=[f*-.56-S*N,.56,N],B=Math.hypot(...O);return O.map(j=>j/B)};for(let a=0;a<ws.length-1;a++)for(let c=0;c<Ri.length-1;c++){let f=Ri[c],S=Ri[c+1],N=ws[a],O=ws[a+1],B=zi(f,N),j=zi(f,O),z=zi(S,O),tt=zi(S,N),wt=fa(f,N),yt=fa(f,O),Ut=fa(S,O),Xt=fa(S,N);gl.tri(j,B,tt,lh,[[0,1],[0,0],[1,0]],[yt,wt,Xt]),gl.tri(j,tt,z,lh,[[0,1],[1,0],[1,1]],[yt,Xt,Ut])}let pa=o("#252c2d",0,.68,.12);for(let a of[0,1])for(let c=0;c<Ri.length-1;c++)ln.cylinder(zi(Ri[c],a),zi(Ri[c+1],a),.021,.021,pa,7);for(let a of[-.56,.56])for(let c=0;c<ws.length-1;c++)ln.cylinder(zi(a,ws[c]),zi(a,ws[c+1]),.024,.024,pa,7);let Ii=(a,c)=>{let f=Math.abs(a)/.56;return[a,1.91-.1*f*f-.03*Math.max(0,-c),c-.13*f*f]};for(let a=0;a<Ri.length-1;a++){let c=Ri[a],f=Ri[a+1];ln.quad(Ii(c,.61),Ii(c,-1.12),Ii(f,-1.12),Ii(f,.61),fr),ln.cylinder(Ii(c,-1.12),Ii(f,-1.12),.018,.018,pa,7)}for(let a of[-.56,.56])ln.cylinder(Ii(a,.61),Ii(a,-1.12),.027,.027,pa,8),ln.cylinder([a,.58,-1.07],Ii(a,-1.12),.026,.026,J.metal,8);for(let a of[-.65,.65])ln.box(a,.55,-.05,.14,.12,1.65,fr),ln.box(a,1.14,-1,.07,.48,.07,J.dark),ln.box(a,1.08,.8,.08,.54,.08,J.dark);ln.box(0,1.15,-.59,.96,.2,.48,o("#333b3c",0,.75)),ln.box(0,1.03,.44,.77,.09,.36,J.dark),ln.sphere(0,.99,1.19,.15,.15,.065,J.dark,12,8);for(let a of[-.42,.42])ln.box(a,1.02,1.17,.29,.07,.035,o("#f0ebd9",0,.35,.1,.2));for(let a of[-.55,.55])ln.scope(n.compose(a,.34,-1.02,Math.PI/2),()=>pl(ln,0,0,0,a>0?1:-1,.34));ln.scope(n.compose(0,.34,1.2,Math.PI/2),()=>pl(ln,0,0,0,1,.34)),ln.cylinder([-.4,1.23,.72],[.4,1.23,.72],.025,.025,J.dark,9);for(let a of[-.69,.69])ln.cylinder([a,1.33,.8],[a*1.13,1.37,1],.02,.02,J.dark,7),ln.box(a*1.13,1.39,1.02,.19,.11,.055,J.dark);let Sd=d.banner("DEMO","電動トライク","車体色は仮表示","#53605b");ln.scope(n.compose(.69,0,-.65,Math.PI/2),()=>ln.sign(0,.92,0,1.3,.3,Sd));let Ts=m.records.find(a=>a.kind==="goat"),nn=Ts.pos,pr=6.5,mi=6.3,xl=[[nn[0]-pr/2,nn[1]-mi/2],[nn[0]+pr/2,nn[1]-mi/2],[nn[0]+pr/2,nn[1]+mi/2],[nn[0]-pr/2,nn[1]+mi/2]];Ae(xl,Z,o("#c7bb89",2,.97),2);for(let a=0;a<4;a++)sh(xl[a],xl[(a+1)%4],1.1,!0);Yt(nn[0],nn[1],pr,mi,"ヤギ牧場"),Ts.approach=[nn[0],nn[1]+mi/2+3.1],Ts.marker=[nn[0],2.5,nn[1]+mi/2],pt.push(Ts),Fe(Ts.id,()=>Ct.sign(nn[0],2.72,nn[1]+mi/2+.06,3.4,.68,x[Ts.id].banner));for(let a of[-1,1])_.cylinder([nn[0]+a*1.6,.05,nn[1]+mi/2],[nn[0]+a*1.6,3.09,nn[1]+mi/2],.05,.05,J.wood,7);_.box(nn[0]-2,.26,nn[1]-1.7,.9,.48,1.4,o("#b6a166",2)),_.cylinder([nn[0]+2,.05,nn[1]-2],[nn[0]+2,.28,nn[1]-2],.35,.38,o("#6b8990",0,.3,.4),18);function wd(){let a=new s,c=o("#e9e4d5",0,.95),f=o("#776654",0,.92);a.sphere(0,.73,0,.3,.29,.54,c,18,10),a.cylinder([0,.85,.3],[0,1.13,.52],.18,.14,c,14),a.sphere(0,1.19,.61,.15,.18,.24,c,16,10),a.sphere(0,1.1,.78,.12,.1,.1,f,12,7);for(let S of[-1,1]){a.sphere(S*.22,1.26,.48,.19,.055,.085,c,12,7),a.sphere(S*.137,1.22,.67,.015,.024,.025,J.black,8,6),a.cylinder([S*.09,1.31,.51],[S*.11,1.48,.38],.039,.021,f,9),a.cylinder([S*.11,1.48,.38],[S*.1,1.55,.27],.021,.009,f,8);for(let N of[-.32,.33])a.cylinder([S*.19,.6,N],[S*.18,.12,N+.03],.046,.03,c,9),a.box(S*.18,.07,N+.05,.09,.1,.14,f)}return a.cylinder([0,.92,-.46],[0,1.06,-.62],.035,.016,c,9),a.cylinder([0,1.08,.77],[0,.92,.72],.045,.01,c,9),a}let rs=m.records.find(a=>a.kind==="baseball");rs.locationSource="配置ゾーニング 9月30日 Ver.7案（1ページ）";let xn=rs.pos;rs.approach=[xn[0]+9,xn[1]+2],rs.marker=[xn[0]+8,2.8,xn[1]+1],pt.push(rs),Ct.sign(xn[0]+8,1.8,xn[1]+1,4,.82,x[rs.id].banner);for(let a of[-1,1])_.cylinder([xn[0]+8+a*1.9,.08,xn[1]+1],[xn[0]+8+a*1.9,2.3,xn[1]+1],.035,.035,J.metal,7);for(let a of[[-3,-2],[0,-5],[3,-2],[0,1]])_.box(xn[0]+a[0],.052,xn[1]+a[1],.34,.045,.34,o("#e8e2c8"));_.cylinder([xn[0]+4,.08,xn[1]+2],[xn[0]+4.4,.1,xn[1]+3.05],.022,.045,o("#b49566",5),9),_.sphere(xn[0]+4.25,.095,xn[1]+2.2,.074,.074,.074,o("#e9e6dc"),12,8);let Td=d.add("baseball-net",(a,c)=>{a.clearRect(0,0,c,c),a.strokeStyle="#becab2",a.lineWidth=4,a.beginPath();for(let f=0;f<=c;f+=64)a.moveTo(f,0),a.lineTo(f,c),a.moveTo(0,f),a.lineTo(c,f);a.stroke()}),Ed=d.add("baseball-flag",(a,c)=>{a.fillStyle="#672d3d",a.fillRect(0,0,c,c);for(let f=0;f<c;f+=3)a.fillStyle=f%6?"rgba(233,208,172,.035)":"rgba(0,0,0,.055)",a.fillRect(f,0,1,c);a.strokeStyle="#d0b792",a.lineWidth=3,a.strokeRect(9,9,c-18,c-18),a.textAlign="center",a.fillStyle="#f4d990",a.font='700 27px "Yu Gothic",sans-serif',a.fillText("オール西鎌倉少年野球クラブ",c/2,64,475),a.fillStyle="#f5ead8",a.font="bold 170px Georgia,serif",a.fillText("N",c/2,305),a.fillStyle="#df6358",a.font='700 93px "Yu Mincho",serif',a.fillText("必",90,293),a.fillText("勝",424,293),a.strokeStyle="#d1d0ac",a.lineWidth=6;for(let f of[-1,1]){a.beginPath(),a.moveTo(c/2,396),a.quadraticCurveTo(c/2+f*120,357,c/2+f*103,186),a.stroke();for(let S=0;S<10;S++){let N=S/9,O=c/2+f*(22+81*Math.sin(N*Math.PI/2)),B=380-N*181;a.save(),a.translate(O,B),a.rotate(f*(.8+N*.4)),a.fillStyle="#d4d4b5",a.beginPath(),a.ellipse(0,0,5,16,0,0,Math.PI*2),a.fill(),a.restore()}}}),Ad=d.sign("baseball-board",rs.name,"野球体験","#672d3d","T-5");_.scope(n.compose(xn[0],0,xn[1]),()=>{let a=o("#38674d",0,.65,.15),c=o("#476e48",Td,.95),f=o("#eeeadd",0,.97);function S(O,B,j,z,tt=0){_.scope(n.compose(O,0,B,tt),()=>{for(let wt of[-1,1]){let yt=wt*j/2;_.cylinder([yt,.04,0],[yt,z,0],.029,.029,a,8),_.cylinder([yt,.04,-.65],[yt,.04,.65],.025,.025,a,8),_.cylinder([yt,.05,.6],[yt,1,0],.023,.023,a,8)}_.cylinder([-j/2,z,0],[j/2,z,0],.025,.025,a,8),_.quad([-j/2,.09,0],[-j/2,z-.02,0],[j/2,z-.02,0],[j/2,.09,0],c,j/.8,z/.8),_.cylinder([-j/2,.1,0],[j/2,.1,0],.045,.045,a,8)})}S(3.4,-1.3,4.8,3.3),S(-4,-5.5,2.4,2.5,.35),S(-9,-2,2.4,2.5,-.2),_.sign(2.4,2.22,-1.25,2,1.48,Ed);for(let O of[1.46,3.34])_.cylinder([O,2.98,-1.24],[O,3.28,-1.3],.009,.009,o("#d9d4b4"),6);en(_,.1,1,1.8,.72,0,!1,!1),Oe(_,-1.15,1.05,.18,"#3e4647"),Oe(_,7.1,-.4,-.35,"#42484d"),_.scope(n.compose(.15,.72,1.05,-.08),()=>_.sign(0,.48,0,.78,.83,Ad,!0)),_.box(-.55,.89,.98,.38,.24,.3,o("#778c87",0,.8));for(let O=0;O<5;O++)_.cylinder([-.7+O*.068,.99,.99],[-.7+O*.068,1.16,.99],.014,.014,o(O%2?"#c6a264":"#edddb0"),6);function N(O,B,j){for(let z=0;z<48;z++){let tt=z/48*y,wt=(z+1)/48*y,yt=(Ut,Xt)=>[O+Math.cos(Ut)*Xt,.043,B+Math.sin(Ut)*Xt];_.quad(yt(tt,j-.025),yt(wt,j-.025),yt(wt,j+.025),yt(tt,j+.025),f)}}for(let[O,B,j]of[[2,5.2,!1],[7.8,5.5,!1],[-3,2.5,!0]]){N(O,B,.66);let z=o(j?"#388faf":"#e5cc57",0,.9);_.box(O,.035,B,.34,.06,.34,z),_.cylinder([O,.06,B],[O,.62,B],.145,.022,z,12)}for(let O of[3.9,4.65,5.4]){let B=o("#78b3ce",0,.78);_.cylinder([O,.04,3.8],[O,.4,3.8],.21,.16,B,16),_.cylinder([O,.037,3.8],[O,.071,3.8],.225,.222,B,16)}for(let O of[-1.9,6])_.box(O,.044,-3.7,.06,.015,7.2,f);_.box(2.05,.044,-7.3,7.9,.015,.06,f),_.box(2.05,.044,-.1,7.9,.015,.06,f),_.box(3.5,.044,7.1,11.5,.015,.06,f)});let _l=(a,c,f)=>a+f>_t[0]&&a-f<Dt[0]&&c+f>_t[1]&&c-f<Dt[1];function Cd(a,c,f=7,S=!1){let N=P(a,c),O=N[0],B=N[1];if(w(O,B)||qe(O,B))return;let j=h(Math.round(a*721+c*91)),z=c>=410&&c<=420?{132:[6.8,.53,!1],152:[6.3,.56,!1],175:[7.6,.26,!0],252:[7.8,.28,!0]}[a]:null;z&&(f=z[0]);let tt=_;tt.cylinder([O,0,B],[O+.12,f*.57,B-.1],.19,.08,J.bark,11);for(let wt=0;wt<6;wt++){let yt=wt*y/6+j(),Ut=[O,f*.34+j()*.6,B],Xt=[O+Math.cos(yt)*f*.27,f*(.62+j()*.17),B+Math.sin(yt)*f*.27];if(!_l((Ut[0]+Xt[0])/2,(Ut[2]+Xt[2])/2,Math.max(Math.abs(Ut[0]-Xt[0]),Math.abs(Ut[2]-Xt[2]))/2+.08)){tt.cylinder(Ut,Xt,.073,.026,J.bark,8);for(let de=0;de<3;de++){let pe=[Xt[0]+(j()-.5)*1.4,Xt[1]+j()*1.05,Xt[2]+(j()-.5)*1.4];_l((Xt[0]+pe[0])/2,(Xt[2]+pe[2])/2,Math.max(Math.abs(Xt[0]-pe[0]),Math.abs(Xt[2]-pe[2]))/2+.03)||tt.cylinder(Xt,pe,.029,.01,J.bark,7)}}}for(let wt=0;wt<(z?180:52);wt++){let yt=j()*y,Ut=Math.sqrt(j())*f*(z?z[1]:.38),Xt=O+Math.cos(yt)*Ut,de=B+Math.sin(yt)*Ut,pe=f*(z?.57:.7)+j()*f*(z?.38:.25)-Ut/f*.8,fe=f*(z?.12+j()*.09:.19+j()*.13),Vt=j()*y,ae=(z?z[2]:S)?J.autumn:J.leaf;_l(Xt,de,fe*.71)||bt.scope(n.compose(Xt,pe,de,Vt),()=>{bt.quad([-fe/2,-fe/2,0],[-fe/2,fe/2,0],[fe/2,fe/2,0],[fe/2,-fe/2,0],ae),bt.quad([-fe/2,0,-fe/2],[-fe/2,0,fe/2],[fe/2,0,fe/2],[fe/2,0,-fe/2],ae)})}xt.push({x:O,z:B,r:.26})}[[143,54],[176,48],[207,47],[234,46],[270,45],[301,48],[366,63],[399,73],[431,85],[464,98],[496,116],[532,131],[561,151],[566,206],[566,240],[568,275],[581,361],[582,414],[581,521],[579,566],[568,627],[547,692],[509,719],[480,730],[432,738],[404,742],[371,748],[323,757],[282,759],[243,764],[205,769],[168,773],[130,775],[92,750],[83,712],[75,671],[53,584],[32,527],[38,382],[62,335],[68,159],[132,418],[152,418],[175,413],[252,412],[283,414],[321,415],[348,419],[381,417],[417,418],[420,396]].forEach((a,c)=>Cd(a[0],a[1],v(5.8,8.7),c%3!==0));let ai=me(1e3,219);for(let a=0;a<6;a++){let c=ai[0]+a*1.5;_.cylinder([c,.03,ai[1]],[c,2.45,ai[1]],.033,.033,o("#287b9c",0,.5,.35),8),_.cylinder([c,2.45,ai[1]],[c,2.45,ai[1]+1.1],.025,.025,J.metal,8),_.cylinder([c,.03,ai[1]+1.1],[c,2.45,ai[1]+1.1],.033,.033,o("#287b9c"),8)}for(let a of[ai[1],ai[1]+1.1])_.cylinder([ai[0],2.45,a],[ai[0]+7.5,2.45,a],.03,.03,J.metal,8);let ma=me(735,207);for(let a=0;a<4;a++)for(let c=0;c<4;c++){let f=ma[0]+a*.7,S=ma[1]+c*.7;_.cylinder([f,.02,S],[f,2.1,S],.022,.022,o("#287b9c"),7);for(let N=.7;N<2.2;N+=.7)a<3&&_.cylinder([f,N,S],[f+.7,N,S],.02,.02,o("#287b9c"),7),c<3&&_.cylinder([f,N,S],[f,N,S+.7],.02,.02,o("#287b9c"),7)}Yt(ma[0]+1.05,ma[1]+1.05,2.3,2.3,"遊具");for(let a=0;a<ge.length;a++){let c=ge[a],f=ge[(a+1)%ge.length];a===15||a===ge.length-1||sh(c,f,1.55,!1,!0)}for(let a of["GATE_MAIN","GATE_WEST"]){let c=m.locations.find(N=>N.id===a),f=c.pos,S=a==="GATE_MAIN"?c.yaw:.7;_.scope(n.compose(f[0],0,f[1],S),()=>{for(let N of[-1,1])_.box(N*2.6,1,0,.52,2,.58,J.wall),_.box(N*2.6,2.03,0,.6,.08,.64,J.base),_.cylinder([N*2.75,.05,.25],[N*2.75,3.35,.25],.036,.036,J.metal,9);if(a==="GATE_MAIN"){let N=o("#586567",0,.54,.35),O=o("#aeb0a7",3,.96);for(let B of[-1,1]){_.box(B*4.4,.47,0,3.05,.94,.58,O),_.box(B*4.4,.96,0,3.13,.08,.68,J.base);for(let j=.24;j<=2.64;j+=.24)_.cylinder([B*2.45,.22,j],[B*2.45,1.52,j],.019,.019,N,6);for(let j of[.23,1.51])_.cylinder([B*2.45,j,.18],[B*2.45,j,2.72],.026,.026,N,6)}}_.sign(0,3.12,.25,5.7,.96,G)}),c.approach=a==="GATE_MAIN"?Se.mainGateApproach:[-43,-38],c.marker=[f[0],3.75,f[1]],pt.push(c)}{let a=m.locations.find(c=>c.id==="GATE_WEST");_.scope(n.compose(a.pos[0],0,a.pos[1],.7),()=>{_.box(0,.045,1.15,5.05,.09,3.75,o("#b7b5a8",3,.96));for(let c of[-1,1]){_.box(c*3.24,.33,1.25,.52,.66,4.1,o("#a3a59a",3,.98)),_.box(c*3.24,.7,1.25,.61,.085,4.25,o("#c7c9ba",3,.93));for(let f of[-.52,.55,1.62,2.69])_.box(c*3.24,.34,f,.54,.42,.023,o("#898e83",3,.96))}})}let yl=new s,Rd=d.sign("flag",`つながり
フェスタ`,`＠にしかま
2026`,"#366568","");yl.animate([0,0,0],9,()=>yl.quad([.05,2.8,0],[.05,1,0],[.62,1,0],[.62,2.8,0],o("#fff",Rd,.8)));let ch=[];for(let a of[[448,520],[440,611],[543,622],[468,407],[282,378],[130,128],[461,296]]){let c=P(...a);_.cylinder([c[0],.03,c[1]],[c[0],3,c[1]],.016,.014,J.whiteMetal,8),_.box(c[0],.055,c[1],.48,.1,.4,o("#dedfd6")),ch.push({matrix:n.compose(c[0],0,c[1],-.3),info:[v(0,6),0,0,0]})}for(let a of[[465,441],[459,446],[456,452],[458,463],[445,472],[178,166]]){let c=P(...a);_.box(c[0],.035,c[1],.32,.07,.32,o("#b1543e")),_.cylinder([c[0],.06,c[1]],[c[0],.63,c[1]],.125,.022,o("#c7793c"),10),_.cylinder([c[0],.32,c[1]],[c[0],.4,c[1]],.072,.061,o("#e6ddc7"),10)}let Id=o("#efd342",6,.93);for(let[a,c]of Se.tapes){let f=c[0]-a[0],S=c[1]-a[1],N=Math.hypot(f,S);_.scope(n.compose((a[0]+c[0])/2,0,(a[1]+c[1])/2,-Math.atan2(S,f)),()=>{for(let O of[-1,1])_.cylinder([O*N/2,.02,0],[O*N/2,.92,0],.016,.016,J.metal,7);_.box(0,.82,0,N,.068,.008,Id)})}let hh=Se.coneBars,Pd=o("#d87834",6,.9),vl=o("#f8eee1",6,.93),Ml=o("#c33c2d",6,.92);function Ld(a,c){_.box(a,.045,c,.35,.09,.35,J.dark),_.cylinder([a,.09,c],[a,.67,c],.14,.018,Pd,10),_.cylinder([a,.32,c],[a,.41,c],.095,.075,vl,10)}for(let[a,c]of hh){for(let[f,S]of[a,c])Ld(f,S);for(let f=0;f<8;f++){let S=f/8,N=(f+1)/8;_.cylinder([a[0]+(c[0]-a[0])*S,.78,a[1]+(c[1]-a[1])*S],[a[0]+(c[0]-a[0])*N,.78,a[1]+(c[1]-a[1])*N],.035,.035,f%2?vl:Ml,7)}}for(let a of[[108,62],[452,744]]){let[c,f]=P(...a);_.cylinder([c-.38,.04,f-.38],[c+.38,.04,f+.38],.055,.055,Ml,8),_.cylinder([c-.38,.04,f+.38],[c+.38,.04,f-.38],.055,.055,Ml,8)}Rn(_,P(255,720),P(451,720),.065,vl,.05);let Dd=d.sign("立入禁止","立入禁止","","#b73527",""),Nd=d.sign("駐輪禁止","駐輪禁止","","#b73527","");for(let a of[[56,419],[466,451]]){let[c,f]=P(...a);On(Ct,c,f,Dd)}for(let a of[[108,62],[452,744]]){let[c,f]=P(...a);On(Ct,c,f,Nd)}function uh(a,c,f=25){let S=P(a,c),N=7;for(let O=0;O<N;O++){let B=O/N*f,j=(O+1)/N*f,z=2.4-O/N*1.6,tt=2.4-(O+1)/N*1.6;for(let wt of[-1,1])for(let yt of[-1,1])_.cylinder([S[0]+wt*z,B,S[1]+yt*z],[S[0]+wt*tt,j,S[1]+yt*tt],.06,.045,J.metal,6),_.cylinder([S[0]+wt*z,B,S[1]+yt*z],[S[0]-wt*tt,j,S[1]+yt*tt],.026,.026,J.metal,6),_.cylinder([S[0]+wt*z,B,S[1]+yt*z],[S[0]+wt*tt,j,S[1]-yt*tt],.026,.026,J.metal,6)}for(let O of[f*.71,f*.87,f]){_.cylinder([S[0]-5,O,S[1]],[S[0]+5,O,S[1]],.065,.065,J.metal,7);for(let B of[-1,1])_.cylinder([S[0]+B*.9,O-1.8,S[1]],[S[0]+B*5,O,S[1]],.04,.04,J.metal,6),_.cylinder([S[0]+B*4.7,O,S[1]],[S[0]+B*4.7,O-1,S[1]],.09,.09,o("#9b9d84"),10)}return Yt(S[0],S[1],5,5,"鉄塔"),S}let ga=uh(322,56,26),dh=uh(548,194,26);for(let a of[-4.7,4.7])for(let c of[18.46,22.62,26]){let f=[];for(let S=0;S<=36;S++){let N=S/36;f.push([ga[0]+(dh[0]-ga[0])*N+a,c-1-3.4*Math.sin(N*Math.PI),ga[1]+(dh[1]-ga[1])*N])}_.tube(f,.035,J.dark,5)}let Pi=new s;for(let a=0;a<27;a++){let c=a/27*y,f=125+v(0,35),S=a<9?a<4?-151:-83:a<18?84:-66+(a-18)*16.5,N=a<9?-42+a*17:a<18?-21+(a-9)*17:132,O=v(6,10),B=v(6,11),j=v(5.2,7.3);Pi.scope(n.compose(0,FestaScenery.height(S,N),0),()=>{Pi.box(S,j/2,N,O,j,B,o(["#ddd8c9","#c4ccca","#e6e0d4","#b8b9ac"][a%4],3,.9));let z=o(["#676f70","#8a7163","#5d6966"][a%3],10,.7);Pi.tri([S-O/2-.35,j,N-B/2-.35],[S+O/2+.35,j,N-B/2-.35],[S,j+2,N-B/2-.35],z),Pi.tri([S+O/2+.35,j,N+B/2+.35],[S-O/2-.35,j,N+B/2+.35],[S,j+2,N+B/2+.35],z),Pi.quad([S-O/2-.35,j,N-B/2-.35],[S-O/2-.35,j,N+B/2+.35],[S,j+2,N+B/2+.35],[S,j+2,N-B/2-.35],z,3,3),Pi.quad([S,j+2,N-B/2-.35],[S,j+2,N+B/2+.35],[S+O/2+.35,j,N+B/2+.35],[S+O/2+.35,j,N-B/2-.35],z,3,3);for(let tt=0;tt<3;tt++)Pi.box(S+(tt-1)*2.1,j*.62,N+B/2+.02,1.15,1.35,.03,J.glass)})}let Ud=d.banner("WC","にしかまくら子どもの家・トイレ","当日のトイレ","#426861");FestaScenery.build({details:_,green:bt,distant:Pi,signGeo:Ct,childSign:Ud,p:P,planPoint:me,onRoad:qe,gateOpen:w,m:J,mat:o,M:n,rng:h,TAU:y,ga:_t,gb:Dt,gc:V,gw:Pt,gd:mt,gymRise:It});function Fd(a,c){let f=o("#fafaf8",0,.42,.22),S=o("#25292b",0,.53,.16),N=Mt("#657177");_.scope(n.compose(a,0,c,0),()=>{let O=[[-2.69,.83,.48,1.49],[-2.59,.93,.43,1.52],[-2.35,.94,.43,1.53],[-1.9,.94,.43,1.53],[-1.53,.94,.43,1.53],[-1.16,.94,.43,1.53],[-.7,.94,.43,1.53],[.1,.94,.43,1.53],[.88,.94,.43,1.53],[1.15,.94,.43,1.53],[1.52,.94,.43,1.5],[1.89,.94,.43,1.45],[2.18,.93,.43,1.35],[2.51,.9,.43,1.26],[2.69,.82,.48,1.07]];for(let j=0;j<O.length-1;j++){let[z,tt,wt,yt]=O[j],[Ut,Xt,de,pe]=O[j+1];_.quad([-tt,yt,z],[tt,yt,z],[Xt,pe,Ut],[-Xt,pe,Ut],f);for(let fe of[-1,1]){let Vt=(ae,ce)=>Math.max(ae,.32+Math.sqrt(Math.max(0,.2025-Math.min((ce+1.53)**2,(ce-1.52)**2))));for(let ae=0;ae<6;ae++){let ce=ae/6,Be=(ae+1)/6,Kt=He=>[fe*(tt+(Xt-tt)*He),z+(Ut-z)*He],ve=Kt(ce),Ke=Kt(Be);_.quad([ve[0],yt+(pe-yt)*ce,ve[1]],[Ke[0],yt+(pe-yt)*Be,Ke[1]],[Ke[0],Vt(wt+(de-wt)*Be,Ke[1]),Ke[1]],[ve[0],Vt(wt+(de-wt)*ce,ve[1]),ve[1]],f)}}}let B=[[-2.62,.89,1.49],[-2.46,.84,2.17],[-2.27,.79,2.28],[1.23,.79,2.28],[1.53,.8,2.16],[2.48,.87,1.26]];for(let j=1;j<5;j++){let[z,tt,wt]=B[j-1],[yt,Ut,Xt]=B[j];_.quad([-tt,wt,z],[tt,wt,z],[Ut,Xt,yt],[-Ut,Xt,yt],f)}_.quad([-.87,1.26,2.48],[.87,1.26,2.48],[.8,2.16,1.53],[-.8,2.16,1.53],f),_.quad([-.78,1.45,2.327],[.78,1.45,2.327],[.735,2.075,1.662],[-.735,2.075,1.662],N),_.quad([-.82,.48,2.69],[.82,.48,2.69],[.82,1.07,2.69],[-.82,1.07,2.69],f),_.quad([-.83,.48,-2.69],[.83,.48,-2.69],[.83,1.49,-2.69],[-.83,1.49,-2.69],f),_.quad([-.89,1.49,-2.62],[.89,1.49,-2.62],[.84,2.17,-2.46],[-.84,2.17,-2.46],f),_.quad([-.7,1.61,-2.6],[.7,1.61,-2.6],[.7,2.03,-2.51],[-.7,2.03,-2.51],N);for(let j of[-1,1]){let z=(tt,wt,yt)=>[j*tt,wt,yt];_.quad(z(.91,1.49,-2.62),z(.91,1.51,2.37),z(.8,2.16,1.53),z(.84,2.17,-2.46),f),_.quad(z(.901,1.62,-2.37),z(.901,1.62,.42),z(.831,2.06,.39),z(.854,2.06,-2.31),N),_.quad(z(.907,1.6,.58),z(.915,1.54,2.09),z(.82,2.05,1.49),z(.833,2.05,.64),N);for(let tt of[-1.4,-.38])_.box(j*.884,1.84,tt,.018,.41,.045,S);for(let tt of[-1.3,.69])_.box(j*.948,1.38,tt,.022,.059,.19,S);_.box(j*.947,1.22,-1.1,.018,.021,1.8,o("#abb1b0")),_.cylinder(z(.9,1.57,1.77),z(1.02,1.57,1.77),.024,.024,S,8),_.box(j*1.06,1.6,1.75,.14,.16,.23,S),_.box(j*.71,.92,2.704,.27,.24,.029,J.whiteMetal),_.box(j*.81,1.32,-2.655,.105,.43,.028,o("#a9372c"));for(let tt of[-1.53,1.52]){_.cylinder(z(.7,.35,tt),z(.935,.35,tt),.35,.35,J.tire,24),_.cylinder(z(.937,.35,tt),z(.951,.35,tt),.19,.19,J.metal,20);for(let wt=0;wt<6;wt++){let yt=wt*y/6;_.cylinder(z(.953,.35,tt),z(.953,.35+.16*Math.sin(yt),tt+.16*Math.cos(yt)),.024,.024,J.whiteMetal,6)}}}_.box(0,.76,2.707,.95,.15,.025,S),_.box(0,.58,2.71,1.45,.1,.025,S),_.box(0,1.11,2.62,.96,.035,.035,J.metal),_.box(0,.5,-2.685,1.65,.14,.027,f),_.box(0,1.14,-2.663,.49,.19,.028,J.whiteMetal)}),Yt(a,c,1.88,5.38,"駐車車両")}function Od(a,c,f,S){let N=S%3,O=1.72,B=4.35,j=N===0?1.42:1.94,z=o(["#e8e6e1","#7a8994","#c1c4c6","#4a5155","#a49182"][S%5],0,.4,.22);_.scope(n.compose(a,0,c,f),()=>{_.box(0,.6,0,O,.66,B,z),_.box(0,(.9+j)/2,N===0?-.28:0,O*.92,j-.9,N===0?B*.55:B*.92,z);for(let tt of[-1,1]){for(let wt of[-1,1]){let yt=wt*B*.31,Ut=tt*O*.42;_.cylinder([Ut-.1,.31,yt],[Ut+.1,.31,yt],.31,.31,J.tire,16),_.box(tt*O*.36,.69,wt*(B/2+.006),.22,.14,.018,wt>0?J.whiteMetal:o("#a6463a"))}_.box(tt*O*.464,j-.27,.46,.022,.35,B*.28,J.dark),N!==1&&_.box(tt*O*.464,j-.27,-.64,.022,.35,B*.25,J.dark)}_.box(0,j-.28,N===0?B*.21:B*.465,O*.77,.39,.026,J.dark)}),Yt(a,c,Math.abs(Math.cos(f))*O+Math.abs(Math.sin(f))*B,Math.abs(Math.sin(f))*O+Math.abs(Math.cos(f))*B,"駐車車両")}Se.parking.forEach((a,c)=>a.forEach(([f,S],N)=>Od(f,S,c<2?0:Math.PI/2,N+c)));for(let[a,c,f]of[[360,850,1921],[309,680,1972],[310,703,2022]])for(let S=a+8,N=0;S<c-8;S+=20,N++){let[O,B]=me(S,f);_.scope(n.compose(O,0,B,(N%3-1)*.1),()=>{let j=o(["#454c53","#708e81","#a76855","#b4b9bb"][N%4]);for(let z of[-.56,.56])for(let tt=0;tt<12;tt++){let wt=tt*y/12,yt=(tt+1)*y/12;_.cylinder([0,.31+.3*Math.cos(wt),z+.3*Math.sin(wt)],[0,.31+.3*Math.cos(yt),z+.3*Math.sin(yt)],.019,.019,J.tire,6)}for(let[z,tt]of[[[0,.31,-.56],[0,.81,-.24]],[[0,.81,-.24],[0,.68,.38]],[[0,.68,.38],[0,.38,-.05]],[[0,.38,-.05],[0,.31,-.56]],[[0,.38,-.05],[0,.81,-.24]],[[0,.31,.56],[0,.97,.37]]])_.cylinder(z,tt,.023,.023,j,6);_.box(0,.84,-.26,.16,.045,.25,J.dark),_.cylinder([-.24,.98,.37],[.24,.98,.37],.019,.019,J.metal,6)})}for(let a of["TERESA","TRACTOR","EXCAVATOR","PLAYGROUND"]){let c=m.locations.find(N=>N.id===a),[f,S]=c.pos;c.approach=[f,S+2.6],c.marker=[f,a==="TERESA"?2.7:2.3,S],pt.push(c),a==="TERESA"&&Fd(f,S),(a==="TRACTOR"||a==="EXCAVATOR")&&_.scope(n.compose(f,0,S,.3),()=>{let N=a==="TRACTOR",O=o(N?"#427346":"#d6aa35");_.box(0,.67,0,1.4,.56,2.42,O),_.box(0,1.52,-.38,1.22,1.06,1.16,J.dark),_.box(0,2.12,-.38,1.38,.16,1.31,O);for(let B of[-1,1])if(N)for(let[j,z]of[[-.73,.61],[.83,.37]])_.cylinder([B*.64,z,j],[B*.97,z,j],z,z,J.tire,18);else _.box(B*.66,.32,0,.43,.6,2.52,J.tire);N?_.box(0,1.02,.66,1.03,.65,1.35,O):(_.cylinder([0,1.02,.42],[0,2.38,1.15],.12,.12,O,8),_.cylinder([0,2.38,1.15],[0,.45,2.08],.11,.1,O,8),_.box(0,.31,2.18,.77,.44,.52,O)),Yt(f,S,2.1,N?3.3:4,"車両")})}let Es=m.locations.find(a=>a.id==="OUTDOOR_GAMES"),[mr,gr]=Es.pos,xr=new s,bl=new s,fh=new s,Sl=[];{let[a,c]=Es.pos,f=o("#c1ab88",1,.94),S=o("#f2ebd8"),N=o("#d9ac30",0,.92),O=o("#b9cbd0",0,.33,.22),B=o("#3a6c79"),j=o("#a94e38",0,.62);_.scope(n.compose(a,0,c,0),()=>{_.box(-1.55,.064,0,1.72,.036,5,f),_.box(-1.55,.086,2.2,1.62,.01,.06,S),xr.cylinder([0,0,0],[0,.198,0],.064,.062,O,12),xr.cylinder([0,.198,0],[0,.245,0],.062,.026,O,12),xr.cylinder([0,.245,0],[0,.273,0],.029,.029,B,12),xr.cylinder([0,.06,0],[0,.127,0],.066,.066,B,12);for(let ce=0;ce<3;ce++)for(let Be=0;Be<=ce;Be++)Sl.push({x:-1.55+(Be-ce/2)*.24,z:-1.65-ce*.23,row:ce});bl.sphere(0,0,0,.133,.133,.133,j,18,10),bl.cylinder([-.006,0,0],[.006,0,0],.134,.134,S,18,!1);let Xt=1.45,de=-2.6,pe=.4,fe=14,Vt=6;for(let ce=0;ce<fe;ce++){let Be=de+ce*pe;ae(Xt,Be,ce===0||ce===fe-1?"dots":"north-south")}for(let ce=1;ce<Vt;ce++)ae(Xt+ce*pe,de,ce===Vt-1?"dots":"east-west");function ae(ce,Be,Kt){if(_.box(ce,.066,Be,.392,.026,.392,N),Kt==="dots"){for(let Ke of[-.12,0,.12])for(let He of[-.12,0,.12])_.sphere(ce+Ke,.082,Be+He,.027,.012,.027,N,8,5);return}let ve=Kt==="east-west";for(let Ke of[-.115,0,.115])_.box(ce+(ve?0:Ke),.083,Be+(ve?Ke:0),ve?.33:.035,.015,ve?.035:.33,N)}});let z=fh,tt=o("#4c6670",6,.93),wt=o("#4a5356",6,.92),yt=o("#cba584"),Ut=o("#383733");z.sphere(0,1.24,0,.211,.267,.107,tt,16,12),z.sphere(0,1.62,.02,.108,.131,.095,yt,16,12),z.sphere(0,1.677,-.02,.112,.09,.104,Ut,16,10);for(let Xt of[-1,1]){let de=Xt*.105;z.animate([de,1.03,0],Xt*2,()=>{z.cylinder([de,1.03,0],[de,.5,0],.08,.065,wt,10),z.cylinder([de,.5,0],[de,.13,.015],.065,.048,wt,10),z.box(de,.076,.055,.119,.075,.222,J.dark)})}z.cylinder([.16,1.4,0],[.23,1.13,.03],.051,.042,tt,10),z.cylinder([.23,1.13,.03],[.19,1.055,.33],.042,.03,yt,10),z.animate([-.15,1.39,-.01],-1,()=>z.cylinder([-.15,1.39,-.01],[-.21,1.01,-.08],.049,.03,tt,10)),z.sphere(.19,1.055,.33,.039,.041,.038,yt,10,7),z.cylinder([.19,1.08,.33],[-.14,.056,1.12],.016,.012,J.whiteMetal,10),z.cylinder([-.08,.25,.98],[-.14,.056,1.12],.014,.014,j,10),Fe(Es.id,()=>On(Ct,a,c+2.94,x.OUTDOOR_GAMES.menu,0)),Es.approach=[a,c+4.15],Es.marker=[a,2.15,c+2.8],pt.push(Es)}{let[a,c]=ye.pos;_.scope(n.compose(a,0,c,Math.PI/2),()=>{let f=o("#a8afac",0,.66);_.box(0,1.06,.01,1.44,2.11,.13,f),_.box(0,1.05,.09,1.27,2.02,.06,o("#c0c9c4",0,.75)),_.box(.4,1,.145,.037,.16,.06,J.dark),_.box(0,.047,.24,1.56,.09,.47,J.base)}),Ct.scope(n.compose(a,0,c,Math.PI/2),()=>{Fe(ye.id,()=>Ct.sign(0,2.4,.16,1.91,.52,x.WC_ART.banner))}),ye.approach=[a+3.5,c],ye.marker=[a+.22,2.98,c],pt.push(ye)}let ph=o("#b73428",0,.64),Bd=o("#eae6d7");for(let[a,c]of Se.fireExtinguishers)_.box(a,.038,c,.28,.075,.27,o("#824436",0,.9)),_.cylinder([a,.071,c],[a,.43,c],.088,.088,ph,14),_.cylinder([a,.43,c],[a,.485,c],.088,.042,ph,14),_.box(a,.51,c,.13,.031,.053,J.dark),_.box(a,.27,c+.086,.108,.106,.009,Bd),_.cylinder([a+.025,.486,c],[a+.12,.39,c],.012,.012,J.dark,9),_.cylinder([a+.12,.39,c],[a+.1,.2,c+.034],.012,.012,J.dark,9),Yt(a,c,.28,.27,"消火器");function oi(a,c,f=.26){if(!Pe(a,c,ge)||Pe(a,c,ct)||Pe(a,c,ih)||ml.some(([S,N])=>Q(a,c,S,N)<f))return!1;for(let S of Ue){let N=Math.max(Math.abs(a-S.x)-S.w/2,0),O=Math.max(Math.abs(c-S.z)-S.d/2,0);if(N*N+O*O<f*f)return!1}for(let S of xt)if(Math.hypot(a-S.x,c-S.z)<f+S.r)return!1;return!0}function xa(a,c){return a>=_t[0]+.05&&a<=Dt[0]-.15&&c>=_t[1]+.05&&c<=Dt[1]-.05?It:a>=_t[0]-1.65&&a<_t[0]+.05&&L.some(([f,S])=>c>=P(Qt,f)[1]+.15&&c<=P(Qt,S)[1]-.15)?It*p((a-_t[0]+1.65)/1.7,0,1):0}function As(a,c=10){if(oi(a[0],a[1],.31))return[...a];for(let f=.4;f<=c;f+=.35)for(let S=0;S<32;S++){let N=S*y/32,O=a[0]+Math.sin(N)*f,B=a[1]+Math.cos(N)*f;if(oi(O,B,.31))return[O,B]}return null}let wl=m.locations.find(a=>a.id==="GYM");wl.approach=[V[0],_t[1]+18.8],wl.marker=[V[0],3.1+It,_t[1]+18.8],pt.push(wl);for(let a of pt)a.id==="WC"&&(a.approach=[(ut+Ft)/2,Dt[1]+5.5]),a.approach=As(a.approach)||As(a.pos);t(.62,"来場者・ヤギ・走行車両の動きを準備しています");function Tl(a=0,c=!1){let f=new s,S=o(c?"#233750":["#7f9c9a","#d8c5ad","#a76250","#4c6670","#787c58","#b7b4a9","#655c73","#e3d1b1"][a%8],6,.93),N=o(c?"#233750":["#41494e","#746854","#4a575a","#485669"][a%4],6,.91),O=o(["#cba584","#d8b69a","#bc9879","#d0ad8c"][a%4],0,.78),B=o(["#383733","#4b4137","#77756e"][a%3],0,.96),j=[[.88,.19,.126],[.98,.19,.13],[1.16,.218,.148],[1.32,.243,.144],[1.385,.222,.127],[1.445,.075,.064]];for(let z=0;z<j.length-1;z++)for(let tt=0;tt<20;tt++){let wt=tt/20*y,yt=(tt+1)/20*y,Ut=j[z],Xt=j[z+1],de=(pe,fe)=>[Math.cos(fe)*pe[1],pe[0],Math.sin(fe)*pe[2]];f.quad(de(Ut,wt),de(Xt,wt),de(Xt,yt),de(Ut,yt),S,1,1)}f.cylinder([0,1.4,0],[0,1.49,0],.061,.062,O,10),f.sphere(0,1.57,.012,.114,.142,.107,O,16,11),f.sphere(0,1.575,-.009,.116,.145,.11,B,20,10,0,1.26),f.sphere(0,1.58,.127,.017,.032,.024,O,10,7);for(let z of[-1,1])f.sphere(z*.111,1.57,.008,.024,.042,.026,O,9,7),f.sphere(z*.039,1.601,.111,.009,.004,.005,J.black,8,5),f.cylinder([z*.026,1.621,.104],[z*.053,1.621,.098],.004,.004,B,5),f.animate([z*.23,1.37,0],z,()=>{f.sphere(z*.235,1.335,0,.082,.105,.085,S,12,9),f.sphere(z*.295,1.08,.035,.064,.073,.064,S,12,8),f.cylinder([z*.23,1.37,0],[z*.295,1.08,.035],.079,.064,S,12),f.cylinder([z*.295,1.08,.035],[z*.29,.9,.06],.063,.045,S,11),f.sphere(z*.287,.859,.065,.043,.067,.038,O,11,7)}),f.animate([z*.108,.88,0],z*2,()=>{f.cylinder([z*.105,.9,0],[z*.12,.49,.015],.098,.077,N,12),f.cylinder([z*.12,.49,.015],[z*.12,.1,0],.077,.06,N,11),f.sphere(z*.12,.077,.052,.075,.068,.146,o("#383d3c",0,.75),12,7),f.box(z*.12,.034,.054,.142,.035,.25,o("#c1beb1"))});if(!c&&a%3===0&&(f.sphere(0,1.7,-.006,.126,.045,.126,o("#b4a481",6),14,8),f.box(0,1.676,.125,.18,.018,.14,o("#b4a481",6))),!c&&a%4===1){f.sphere(0,1.17,-.16,.16,.23,.1,o("#73664e",6),13,9);for(let z of[-1,1])f.cylinder([z*.16,1.36,.04],[z*.12,1.03,.09],.017,.017,o("#756b58"),7)}return!c&&a%4===2&&(f.cylinder([.29,.91,.06],[.32,.66,.06],.01,.01,o("#aa9675"),7),f.box(.32,.57,.06,.19,.24,.22,o("#d3c2a1",6))),f}let mh=[],kd=d.add("鎌倉ガーディアンズ",(a,c)=>{a.clearRect(0,0,c,c),a.fillStyle="#e8c843",a.font="bold 54px sans-serif",a.textAlign="center",a.fillText("鎌倉ガーディアンズ",c/2,c*.58)});for(let a=0;a<dr.length;a++){let[c,f]=dr[a].position,S=a===0?Math.PI/2:-Math.PI/2,N=Tl(1,!0);N.scope(n.compose(0,0,0,Math.PI),()=>N.sign(0,1.25,.15,.35,.12,kd,!0)),mh.push({staff:N,instances:[{matrix:n.compose(c+(a===0?-1:-.1),0,f+1.35,S),info:[0,0,0,0]}]})}function zd(a){let c=Tl(a),f=new s;for(let N=0;N<c.used;N+=60)if(!(Math.abs(c.data[N+19])>1.5&&Math.abs(c.data[N+19])<3))for(let O=0;O<3;O++){let B=N+O*20,j={color:Array.from(c.data.slice(B+8,B+11)),p:Array.from(c.data.slice(B+12,B+16)),ao:c.data[B+11]};f.vertex([c.data[B],c.data[B+1]-.4,c.data[B+2]],Array.from(c.data.slice(B+3,B+6)),Array.from(c.data.slice(B+6,B+8)),j)}let S=o(["#41494e","#746854","#4a575a","#485669"][a%4],6,.9);for(let N of[-1,1])f.cylinder([N*.105,.49,0],[N*.12,.46,.35],.1,.08,S,12),f.sphere(N*.12,.46,.35,.078,.084,.085,S,12,8),f.cylinder([N*.12,.46,.35],[N*.12,.105,.39],.078,.058,S,12),f.sphere(N*.12,.078,.45,.073,.06,.145,o("#383d3c"),12,8),f.box(N*.12,.035,.45,.14,.035,.25,o("#b8b9ad"));return f}function Vd(a){let c=new s,f=o(["#dfb357","#72a0a2","#aa6357","#8c9a66"][a%4],6,.92),S=o("#506277",6,.91),N=o("#d4ad8b",0,.77),O=o("#3d342e",0,.94);c.sphere(0,.83,0,.2,.3,.145,f,14,10),c.cylinder([0,1.04,0],[0,1.17,0],.065,.06,N,10),c.sphere(0,1.34,0,.165,.19,.15,N,16,11),c.sphere(0,1.4,-.015,.17,.145,.153,O,16,9,0,1.35);for(let B of[-1,1])c.sphere(B*.06,1.36,.141,.01,.008,.008,J.dark,8,5),c.animate([B*.19,1.04,0],B,()=>{c.cylinder([B*.19,1.02,0],[B*.27,.65,.025],.067,.045,f,10),c.sphere(B*.27,.62,.03,.048,.06,.044,N,10,7)}),c.animate([B*.09,.58,0],B*2,()=>{c.cylinder([B*.09,.58,0],[B*.11,.25,0],.079,.062,S,10),c.cylinder([B*.11,.25,0],[B*.11,.09,.025],.06,.05,S,10),c.sphere(B*.11,.055,.085,.072,.052,.115,J.dark,10,7)});return c}function Gd(){let a=new s,c=o("#f7f6f1",6,.96),f=o("#eeb5bf",0,.84),S=o("#252629",0,.74),N=o("#d3343f",6,.82),O=o("#a4cfe2",6,.88),B=o("#80acc0",6,.88),j=o("#83b8a5",6,.82),z=o("#e3c538",6,.82);a.sphere(0,.75,-.02,.54,.63,.41,c,32,22),a.sphere(0,1.18,-.01,.44,.3,.36,c,28,16);for(let Vt of[-1,1]){a.animate([Vt*.27,.22,.13],Vt,()=>{a.sphere(Vt*.27,.145,.13,.205,.145,.27,c,22,13);for(let ve=-1;ve<=1;ve++)a.sphere(Vt*.27+ve*.1,.095,.34,.06,.045,.085,c,11,8)});let ae=Vt===-1,ce=[Vt*.43,1.12,-.04],Be=[Vt*.54,ae?1.1:.96,.075],Kt=[Vt*.64,ae?1.1:.83,ae?.25:.18];if(a.sphere(...ce,.19,.21,.18,c,18,12),a.cylinder(ce,Be,.145,.13,c,16),a.cylinder(Be,Kt,.13,.12,c,16),a.sphere(...Kt,.15,.15,.14,c,18,12),ae){a.sphere(Kt[0],Kt[1]-.015,Kt[2]+.134,.052,.06,.014,f,12,9);for(let ve=-1;ve<=1;ve++)a.sphere(Kt[0]+ve*.047,Kt[1]+.074,Kt[2]+.115,.02,.027,.009,f,9,7)}}let tt=[[-.36,.48,-.3],[-.53,.41,-.43],[-.7,.44,-.49],[-.83,.55,-.5],[-.9,.71,-.47],[-.86,.79,-.43]];for(let Vt=1;Vt<tt.length;Vt++){let ae=.091-Vt*.005;a.cylinder(tt[Vt-1],tt[Vt],ae+.006,ae,c,14),a.sphere(...tt[Vt],ae,ae,ae,c,14,10)}a.sphere(0,1.67,.055,.7,.55,.51,c,36,24);let wt=(Vt,ae)=>[(Vt[0]-550)*.00445,2.2+(667-Vt[1])*.00445,ae],yt=(Vt,ae,ce,Be)=>Array.from({length:8},(Kt,ve)=>{let Ke=(ve+1)/8,He=1-Ke;return[0,1].map(gn=>He*He*He*Vt[gn]+3*He*He*Ke*ae[gn]+3*He*Ke*Ke*ce[gn]+Ke*Ke*Ke*Be[gn])}),Ut=(Vt,ae,ce)=>Array.from({length:5},(Be,Kt)=>{let ve=(Kt+1)/5,Ke=1-ve;return[0,1].map(He=>Ke*Ke*Vt[He]+2*Ke*ve*ae[He]+ve*ve*ce[He])}),Xt=[[[508,674],...yt([508,674],[481,643],[444,624],[408,633]),[390,640],...Ut([390,640],[385,645],[387,653]),...yt([387,653],[389,675],[402,702],[416,721])],[[594,674],...yt([594,674],[619,656],[660,645],[690,659]),[712,672],...Ut([712,672],[718,678],[714,685]),...yt([714,685],[708,701],[683,734],[671,743])]],de=[[[444,661],...yt([444,661],[456,661],[467,670],[469,680]),...yt([469,680],[472,691],[469,701],[463,708]),[430,706],...Ut([430,706],[419,696],[421,684]),...yt([421,684],[423,673],[433,663],[444,661])],[[650,677],...yt([650,677],[663,678],[672,690],[672,702]),...yt([672,702],[672,712],[665,722],[658,727]),[629,705],...Ut([629,705],[623,694],[631,685]),...yt([631,685],[638,679],[643,677],[650,677])]];function pe(Vt,ae,ce,Be=!1){let Kt=Vt.map(He=>wt(He,ae)),ve=[Kt.reduce((He,gn)=>He+gn[0],0)/Kt.length,Kt.reduce((He,gn)=>He+gn[1],0)/Kt.length,ae],Ke=Kt.reduce((He,gn,gi)=>He+gn[0]*Kt[(gi+1)%Kt.length][1]-Kt[(gi+1)%Kt.length][0]*gn[1],0);for(let He=0;He<Kt.length;He++){let gn=(He+1)%Kt.length;Ke>0!==Be?a.tri(ve,Kt[He],Kt[gn],ce):a.tri(ve,Kt[gn],Kt[He],ce)}return Kt}for(let Vt of[-1,1]){let ae=Xt[Vt<0?0:1],ce=pe(ae,.135,c),Be=pe(ae,.065,c,!0);for(let Kt=0;Kt<ae.length;Kt++){let ve=(Kt+1)%ae.length;a.quad(ce[Kt],Be[Kt],Be[ve],ce[ve],c)}pe(de[Vt<0?0:1],.142,f),a.sphere(Vt*.245,1.78,.526,.096,.099,.027,S,20,14),a.sphere(Vt*.225,1.815,.553,.027,.034,.01,c,10,8),a.sphere(Vt*.274,1.747,.552,.012,.014,.008,c,8,6),a.tube([[Vt*.15,1.967,.477],[Vt*.22,2.005,.471],[Vt*.3,1.979,.458]],.011,S,8),a.tube([[Vt*.16,2.055,.455],[Vt*.21,2.069,.448]],.009,S,7);for(let Kt=-1;Kt<=1;Kt++){let ve=1.57+Kt*.08;a.tube([[Vt*.49,ve,.432],[Vt*.64,ve+Kt*.018,.393],[Vt*.8,ve+Kt*.033,.338]],.008,S,7)}}a.sphere(0,1.585,.567,.053,.033,.023,f,14,10);for(let Vt of[-1,1]){let ae=[];for(let ce=0;ce<=10;ce++){let Be=ce/10;ae.push([Vt*.19*Be,1.515-.068*Math.sin(Math.PI*Be),.57-.044*Be])}a.tube(ae,.011,S,8)}let fe=[];for(let Vt=0;Vt<=28;Vt++){let ae=Vt/28*Math.PI*2;fe.push([Math.sin(ae)*.445,1.205,Math.cos(ae)*.351-.01])}a.tube(fe,.029,N,9),a.sphere(0,1.17,.367,.056,.044,.025,o("#d9d4ce",0,.9),13,8),a.sphere(-.01,1.125,.413,.21,.055,.064,c,20,12),a.sphere(-.165,1.135,.458,.026,.026,.021,c,12,8),a.tri([.18,1.12,.437],[.3,1.18,.423],[.26,1.08,.424],c),a.sphere(-.17,1.143,.48,.01,.01,.008,S,8,6);for(let Vt=0;Vt<5;Vt++)a.sphere(-.1+Vt*.05,1.104,.476,.007,.007,.006,S,7,5);a.tube([[-.37,1.14,.288],[-.33,1,.366],[-.23,.84,.396],[-.1,.68,.42],[.08,.55,.445],[.24,.51,.457]],.024,z,9),a.sphere(.28,.555,.415,.285,.297,.15,B,24,16),a.sphere(.28,.565,.532,.251,.259,.047,O,24,16);for(let Vt=0;Vt<3;Vt++)for(let ae=0;ae<6-Vt;ae++){let ce=.083+ae*.078+Vt*.04,Be=.828+Vt*.058,Kt=.51-Vt*.02;a.sphere(ce,Be,Kt,.046,.046,.044,j,11,8)}for(let Vt of[-1,1])a.sphere(.28+Vt*.078,.603,.582,.015,.019,.01,S,9,7),a.sphere(.28+Vt*.078,.475,.575,.01,.013,.008,S,8,6);return a.tube([[.21,.53,.577],[.25,.504,.581],[.28,.5,.582],[.32,.515,.58],[.35,.538,.575]],.009,S,8),a}let gh=Array.from({length:8},()=>[]),xh=Array.from({length:4},()=>[]),as=[],Hd=0;function Vi(a,c,f=0,S=!1,N=1,O=null,B="visitor"){let j=Hd++,z=B==="child"||B==="game-child",tt=j%(z?4:8),wt={matrix:n.compose(a,0,c,f,N),info:[v(0,6.28),S?1:0,0,0]},yt={x:a,z:c,yaw:f,scale:N,instance:wt,walk:S,path:O,pathIndex:0,speed:v(.4,.64),group:tt,type:B,index:j};return(z?xh:gh)[tt].push(wt),as.push(yt),yt}let Wd=["T-15","TRACTOR","EXCAVATOR","BOARDING_1","BOARDING_2"];for(let a of Wd){let c=m.records.find(B=>B.id===a)||m.locations.find(B=>B.id===a),[f,S]=c.pos,[N,O]=c.approach;for(let[B,j]of[[-.85,0],[.85,0],[-.5,.95],[.55,1.15]]){let z=As([N+B,O+j],1.8);z&&Vi(z[0],z[1],Math.atan2(f-z[0],S-z[1]),!1,1,null,"gathering")}}for(let a of[-1,1])for(let c of[-1.05,0,1.05]){let f=a===-1?_t[0]+1.95:Dt[0]-1.95,S=Se.exhibitsZ+c;oi(f,S)&&Vi(f,S,a*Math.PI/2,!1,1,null,"gathering")}for(let[a,c]of pt.filter(f=>["F","S","T"].includes(f.category)&&f.approach).entries()){let f=c.yaw||0,S=a%3?-1:1,N=c.approach,O=N[0]-Math.sin(f)*1.05+Math.cos(f)*.95*S,B=N[1]-Math.cos(f)*1.05-Math.sin(f)*.95*S;oi(O,B,.2)&&Vi(O,B,Math.atan2(c.pos[0]-O,c.pos[1]-B),!1,v(.88,1.04))}for(let a of m.records.filter(c=>c.kind==="tent")){let c=a.yaw||0,f=a.id==="F-10"?-1.5:0;Vi(a.pos[0]+Math.cos(c)*f-Math.sin(c)*.52,a.pos[1]-Math.sin(c)*f-Math.cos(c)*.52,c,!1,.93,null,"vendor")}let El=[[[0,10],[2,9],[2,-11],[20,-12],[26,-12],[26,-2],[26,12],[16,12],[0,10]],[[27,47],[29,54],[29,63],[31,68],[31,75],[28,77],[28,70],[29,60],[27,47]],[[-41,13],[-13,13],[-12,-4],[-15,-17],[-33,-19],[-41,13]],[[19,18],[26,21],[28,32],[29,44],[27,47],[28,32],[26,21],[19,18]]],Xd=[[-2.4,-2,-1.6],[-.8,0,.8,1.6,2.4,3.2],[-4,-3.2,-2.4,-2,-1.6,-.8,0,.8],[-3.2,-2.4,-1.6,-.8,0,.8,1.6,2.4,3.2,4]];function qd(a,c){let f=a.length-1;return Array.from({length:f},(S,N)=>{let O=a[(N+f-1)%f],B=a[(N+1)%f],j=B[0]-O[0],z=B[1]-O[1],tt=Math.hypot(j,z)||1;return[a[N][0]-z/tt*c,a[N][1]+j/tt*c]})}function Yd(a){for(let c=0;c<a.length;c++){let f=a[c],S=a[(c+1)%a.length],N=Math.ceil(Math.hypot(S[0]-f[0],S[1]-f[1])/.7);for(let O=0;O<=N;O++){let B=O/N;if(!oi(f[0]+(S[0]-f[0])*B,f[1]+(S[1]-f[1])*B,.19))return!1}}return!0}let Zd=El.map((a,c)=>Xd[c].map(f=>qd(a,f)).filter(Yd)),_h=[0,2,3,2,3,1,2,3,0,3],Jd=[0,0,0,0];for(let a=0;a<120;a++){let c=_h[a%_h.length],f=Jd[c]++,S=Zd[c],N=S.length?S[(f+Math.floor(f/(El[c].length-1)))%S.length]:El[c].slice(0,-1),O=f%N.length,B=N[O],j=N[(O+1)%N.length],z=v(0,1),tt=[B[0]+(j[0]-B[0])*z,B[1]+(j[1]-B[1])*z];if(oi(tt[0],tt[1],.19)||(tt=As(tt,2)),!tt)continue;let wt=a%3===0;Vi(tt[0],tt[1],Math.atan2(j[0]-B[0],j[1]-B[1]),!0,wt?1:v(.88,1.05),N,wt?"child":"visitor"),as[as.length-1].pathIndex=(O+1)%N.length}for(let a=0;a<7;a++)Vi(V[0]+(a-3)*1.6,_t[1]+9.5+a%2*.6,0,!0,.8,null,"performer");for(let a of[[7,11],[8,11.5],[24,-9],[25,-8.7],[-12,-23],[-13,-23.4],[-39,-44],[49,32],[50,33],[10,12],[11,12.4],[21,-10],[22,-10.4],[-10,-22],[-11,-22.4],[-37,-42],[47,34],[48,35]])oi(...a,.23)&&Vi(a[0],a[1],v(0,y),!1,v(.85,1));let $d=[{target:[-1.55,.2],children:[[-2.96,1.44],[-2.92,.5],[-2.94,-.44],[-1.55,2.98],[-.4,-.7],[-.05,1.53]]},{target:[1.45,-.5],children:[[.57,2.21],[2.24,2.46],[2.36,1.6],[2.35,.63],[.56,-1.52],[2.38,-1.61]]}];for(let{target:a,children:c}of $d)for(let[f,S]of c)if(oi(mr+f,gr+S,.19)){let N=Vi(mr+f,gr+S,Math.atan2(a[0]-f,a[1]-S),!1,v(.88,1.1),null,"game-child");N.bowler=f===-1.55&&S===2.98}let Ge={};Ge.base=new r(i,Z,{name:"Architecture, ground and booths"}),Ge.details=new r(i,_,{name:"Furniture, windows and equipment"}),Ge.foliage=new r(i,bt,{name:"Foliage",instances:[{matrix:n.identity(),info:[0,0,1,0]}]}),Ge.roof=new r(i,Jt,{name:"Gym roof"}),Ge.signs=new r(i,Ct,{name:"Readable booth signs"}),Ge.distant=new r(i,Pi,{name:"Approximate neighbourhood",shadow:!1}),Ge.flags=new r(i,yl,{name:"Fabric banners",instances:ch});let yh=Array.from({length:4},()=>[]),Kd=0;for(let a=0;a<$t.length;a++){if($t[a].addedGymSeat||a%2!==1&&!($t[a].gym&&a%5===2))continue;let c=$t[a];yh[Kd++%4].push({matrix:n.compose(c.x,c.gym?It:0,c.z,c.yaw,.94),info:[0,0,0,0]})}Ge.boardingStaff=mh.map(({staff:a,instances:c})=>new r(i,a,{name:"乗降場の誘導員",instances:c})),Ge.seated=yh.map((a,c)=>new r(i,zd(c),{name:"Seated visitors "+c,instances:a}));let _a=oh(0),vh=n.compose(_a.x,0,_a.z,_a.yaw);Ge.vehicle=new r(i,ln,{name:"Generic mobility vehicle",instances:[{matrix:vh,info:[0,0,0,0]}],dynamic:!0}),Ge.vehicleGlass=new r(i,gl,{name:"Mobility vehicle windshield",instances:[{matrix:vh,info:[0,0,0,0]}],dynamic:!0,shadow:!1});let Mh=Array.from({length:4},(a,c)=>({matrix:n.compose(nn[0]+(c%2-.5)*2,0,nn[1]+(Math.floor(c/2)-.5)*2.2,c*1.8,c===3?.64:1),info:[c,0,0,0]}));Ge.goats=new r(i,wd(),{name:"Goats",instances:Mh,dynamic:!0});let _r=[[29,58],[29,65],[28,72],[30,74],[31,69],[31,61],[29,58]],bh=As(_r[0],2)||_r[0],mn={x:bh[0],z:bh[1],yaw:0,index:1,speed:.56};Ge.kamanyan=new r(i,Gd(),{name:"かまくらいふ かまにゃん",instances:[{matrix:n.compose(mn.x,0,mn.z,0,.82),info:[0,.65,0,0]}],dynamic:!0}),Ge.actors=gh.map((a,c)=>new r(i,Tl(c),{name:"Visitors "+c,instances:a,dynamic:!0})),Ge.children=xh.map((a,c)=>new r(i,Vd(c),{name:"Children "+c,instances:a,dynamic:!0})),Ge.tactilePlayer=new r(i,fh,{name:"白杖を持つ参加者",dynamic:!0}),Ge.bowlingBall=new r(i,bl,{name:"ペットボトルボウリングのボール",dynamic:!0}),Ge.bowlingPins=new r(i,xr,{name:"ペットボトルボウリングのピン",instances:Sl.map(()=>({matrix:n.identity(),info:[0,0,0,0]})),dynamic:!0}),t(.81,"看板と案内データを仕上げています"),d.upload(i.gl,matchMedia("(pointer:coarse)").matches||innerWidth<650?256:512),i.atlas=d;let Al=70,Cl=0,yr=_a,Sh=0,wh=new Set(["vendor","performer","gathering","game-child"]),Th=as.filter(a=>!wh.has(a.type));function Eh(a){Al=p(a,0,100);let c=Math.round(Th.length*Al/100);Th.forEach((f,S)=>f.hidden=S>=c),as.filter(f=>wh.has(f.type)).forEach(f=>f.hidden=a===0),Ge.seated.forEach(f=>f.visible=a>10),i.shadowDirty=!0}let Rl=[[0,1.45,2.16,Math.PI],[7,1.45,-2.6,Math.PI],[8,1.45,-2.6,Math.PI/2],[11,3.45,-2.6,Math.PI/2],[12.7,3.45,-2.6,-Math.PI/2],[15.7,1.45,-2.6,-Math.PI/2],[16.7,1.45,-2.6,0],[23.7,1.45,2.16,0],[25.4,1.45,2.16,Math.PI]],Il=(a,c,f)=>a+(c-a)*f,vr=(a,c,f)=>p((a-c)/(f-c),0,1),Ah=a=>{let c=Math.cos(a),f=Math.sin(a);return new Float32Array([1,0,0,0,0,c,f,0,0,-f,c,0,0,0,0,1])};function jd(a){let c=a%25.4,f=Rl.findIndex(([Vt])=>Vt>c),[S,N,O,B]=Rl[f-1],[j,z,tt,wt]=Rl[f],yt=vr(c,S,j),Ut=Ge.tactilePlayer.instances[0];Ut.matrix=n.compose(mr+Il(N,z,yt),0,gr+Il(O,tt,yt),Il(B,wt,yt)),Ut.info[1]=N!==z||O!==tt?.74:0,Ge.tactilePlayer.updateInstances();let Xt=Al>0?a%9.5:0,de=vr(Xt,1.9,4.25),pe=Ge.bowlingBall.instances[0],fe=4.48*de;pe.matrix=n.multiply(n.compose(mr-1.55,de<1?.22:-100,gr+2.3-fe),Ah(-fe/.133)),Ge.bowlingBall.updateInstances(),Sl.forEach(({x:Vt,z:ae,row:ce},Be)=>{let Kt=vr(Xt,3.92+ce*.12,4.37+ce*.12);Ge.bowlingPins.instances[Be].matrix=n.multiply(n.compose(mr+Vt,.087,gr+ae-.13*Kt),Ah(-Kt*1.48))}),Ge.bowlingPins.updateInstances()}function Qd(a,c){let f=c*1.7+a.index*.67,S=a.x,N=a.z,O=a.yaw,B=.27+.11*Math.sin(f);if(a.bowler){let j=c%9.5,z=vr(j,.55,1.9),tt=vr(j,5.1,6.7);N-=.83*(z-tt),B=j>.55&&j<1.9||j>5.1&&j<6.7?.83:.18}else S+=.095*Math.sin(f),N+=.065*Math.cos(f),O+=.16*Math.sin(f*.64);a.instance.matrix=n.compose(S,xa(S,N),N,O,a.scale),a.instance.info[1]=B}Eh(70);function tf(a,c,f){jd(a);let S=_r[mn.index],N=S[0]-mn.x,O=S[1]-mn.z,B=Math.hypot(N,O),j=B<.3;if(B<.3)mn.index=(mn.index+1)%_r.length;else{let z=Math.min(B,mn.speed*c),tt=mn.x+N/B*z,wt=mn.z+O/B*z;oi(tt,wt,.24)?(mn.x=tt,mn.z=wt,mn.yaw=Math.atan2(N,O),j=z>0):mn.index=(mn.index+1)%_r.length}if(Ge.kamanyan.instances[0].matrix=n.compose(mn.x,xa(mn.x,mn.z)+Math.max(0,Math.sin(a*7))*.025,mn.z,mn.yaw,.82),Ge.kamanyan.instances[0].info[1]=j?.65:0,Ge.kamanyan.updateInstances(),Ch(f??a*.88+Sh),a-Cl>.055){let z=Math.min(.18,a-Cl);Cl=a;for(let tt of as){if(tt.type==="game-child"&&!tt.hidden){Qd(tt,a);continue}if(tt.walk&&tt.path&&!tt.hidden){let Ut=tt.path[tt.pathIndex],Xt=Ut[0]-tt.x,de=Ut[1]-tt.z,pe=Math.hypot(Xt,de);if(pe<.35)tt.pathIndex=(tt.pathIndex+1)%tt.path.length;else{let fe=tt.x+Xt/pe*tt.speed*z,Vt=tt.z+de/pe*tt.speed*z;oi(fe,Vt,.19)?(tt.x=fe,tt.z=Vt,tt.yaw=Math.atan2(Xt,de)):tt.pathIndex=(tt.pathIndex+1)%tt.path.length}}let wt=xa(tt.x,tt.z),yt=tt.yaw;tt.type==="performer"&&(yt=Math.sin(a*.5+tt.index*.3)*.12,wt+=.04+Math.max(0,Math.sin(a*2.4+tt.index*.4))*.07),tt.instance.matrix=n.compose(tt.x,tt.hidden?-100:wt,tt.z,yt,tt.scale),tt.instance.info[1]=tt.hidden?0:tt.walk?tt.type==="performer"?.8:1:0}Ge.actors.forEach(tt=>tt.updateInstances()),Ge.children.forEach(tt=>tt.updateInstances()),Mh.forEach((tt,wt)=>{let yt=wt*1.8+Math.sin(a*.1+wt)*.3;tt.matrix=n.compose(nn[0]+(wt%2-.5)*2+Math.sin(a*.1+wt)*.2,0,nn[1]+(Math.floor(wt/2)-.5)*2.2,yt,wt===3?.64:1)}),Ge.goats.updateInstances()}}t(.9,"歩行できる経路を確認しています");function Ch(a){yr=oh(a);let c=n.compose(yr.x,0,yr.z,yr.yaw);for(let f of[Ge.vehicle,Ge.vehicleGlass])f.instances[0].matrix=c,f.updateInstances()}function ef(a){let c=!a;Ge.vehicleGlass.visible!==c&&(Ge.vehicleGlass.visible=c,i.shadowDirty=!0)}return{data:m,markers:pt,selectableSigns:Te,colliders:Ue,buildings:jt,campus:ge,field:st,restricted:ih,track:In,trackLength:Ss,ropeSegments:ml,boardingGaps:dr,coneBars:hh,meshes:Ge,trunks:xt,seats:$t,atlas:d,categoryColors:F,isWalkable:oi,walkHeight:xa,nearestWalkable:As,update:tf,setCrowd:Eh,setRideView:ef,setCarStart:(a,c)=>{Sh=a-c*.88,Ch(a)},p:P,getCar:()=>yr,getKamanyan:()=>[mn.x,2.18,mn.z],polyInside:Pe,actorCount:as.length}};window.FestaNavigation=class{constructor(i){this.world=i,this.step=.7;let t=i.campus.map(([n])=>n),e=i.campus.map(([,n])=>n);this.x0=Math.floor(Math.min(...t))-1,this.z0=Math.floor(Math.min(...e))-1,this.nx=Math.ceil((Math.max(...t)+1-this.x0)/this.step)+1,this.nz=Math.ceil((Math.max(...e)+1-this.z0)/this.step)+1,this.size=this.nx*this.nz,this.open=new Uint8Array(this.size);for(let n=0;n<this.nz;n++)for(let s=0;s<this.nx;s++){let r=this.point(n*this.nx+s);this.open[n*this.nx+s]=i.isWalkable(r[0],r[1],.34)?1:0}}point(i){return[this.x0+i%this.nx*this.step,this.z0+Math.floor(i/this.nx)*this.step]}index(i){return Math.round((i[1]-this.z0)/this.step)*this.nx+Math.round((i[0]-this.x0)/this.step)}nearest(i){let t=Math.round((i[0]-this.x0)/this.step),e=Math.round((i[1]-this.z0)/this.step),n=-1,s=1/0;for(let r=0;r<18;r++){for(let l=-r;l<=r;l++)for(let o=-r;o<=r;o++){if(r&&Math.abs(o)!==r&&Math.abs(l)!==r)continue;let u=t+o,h=e+l;if(u<0||u>=this.nx||h<0||h>=this.nz)continue;let p=h*this.nx+u;if(!this.open[p])continue;let y=this.point(p),m=Math.hypot(y[0]-i[0],y[1]-i[1]);m<s&&(s=m,n=p)}if(n>=0)return n}return-1}lineFree(i,t,e=.3){let n=Math.hypot(t[0]-i[0],t[1]-i[1]),s=Math.ceil(n/.16);for(let r=0;r<=s;r++)if(!this.world.isWalkable(i[0]+(t[0]-i[0])*r/Math.max(1,s),i[1]+(t[1]-i[1])*r/Math.max(1,s),e))return!1;return!0}find(i,t){let e=this.nearest(i),n=this.nearest(t);if(e<0||n<0)return null;let s=new Float32Array(this.size);s.fill(1/0);let r=new Int32Array(this.size);r.fill(-1);let l=new Uint8Array(this.size),o=[],u=(C,I)=>{let g={i:C,f:I},R=o.length;for(o.push(g);R;){let E=R-1>>1;if(o[E].f<=g.f)break;o[R]=o[E],R=E}o[R]=g},h=()=>{let C=o[0],I=o.pop();if(o.length){let g=0;for(;2*g+1<o.length;){let R=2*g+1;if(R+1<o.length&&o[R+1].f<o[R].f&&R++,o[R].f>=I.f)break;o[g]=o[R],g=R}o[g]=I}return C.i},p=n%this.nx,y=Math.floor(n/this.nx),m=C=>{let I=Math.abs(C%this.nx-p),g=Math.abs(Math.floor(C/this.nx)-y);return Math.max(I,g)+.41421356*Math.min(I,g)};s[e]=0,u(e,m(e));let T=!1;for(;o.length;){let C=h();if(l[C])continue;if(l[C]=1,C===n){T=!0;break}let I=C%this.nx,g=Math.floor(C/this.nx);for(let R=-1;R<=1;R++)for(let E=-1;E<=1;E++){if(!E&&!R)continue;let F=I+E,x=g+R;if(F<0||F>=this.nx||x<0||x>=this.nz)continue;let U=x*this.nx+F;if(!this.open[U]||l[U]||E&&R&&(!this.open[g*this.nx+F]||!this.open[x*this.nx+I]))continue;let G=s[C]+(E&&R?1.41421356:1);G<s[U]&&(s[U]=G,r[U]=C,u(U,G+m(U)))}}if(!T)return null;let v=[],P=n;for(;P>=0&&(v.push(this.point(P)),P!==e);)P=r[P];v.reverse(),this.lineFree(i,v[0])&&v.unshift([...i]),this.lineFree(v[v.length-1],t)&&v.push([...t]);let A=[v[0]],d=0;for(;d<v.length-1;){let C=v.length-1;for(;C>d+1&&!this.lineFree(v[d],v[C]);)C--;A.push(v[C]),d=C}return A}};var eh=[25.1,16.3];function md(i,t){let[e,n]=i.boardingGaps,s=e.rec.approach,r=n.rec.approach,l=t["T-15"],o=i.p(470,339.5)[1],u=i.p(470+110*.38,504)[0],h=0,p=Math.PI/2,y=Math.PI,m=-Math.PI/2,T=(P,A)=>({kind:"walk",label:P,points:A.map(([d,C,I])=>({position:[d,C],yaw:I}))}),v=(P,A,d)=>({kind:"ride",label:P,from:A,to:d});return[T("イートイン1のブース",[[19.4,11.6],[11.8,10.1,y],[4,10.1,y],[-4.8,10,y],[-5.1,6.1,m],[-5.1,1.2,m],[-5.1,-6,m],[-5.1,-13.9,m],[1.2,-14,h],[8.8,-14,h],[16.2,-14,h],[24.6,-14,h],[31.3,-17.6,h],[31.3,-25.3],r]),v("乗降場②から①へ",n,e),T("ヤギ牧場",[[-36.2,-38.6,h],[...l.approach,h]]),{kind:"look",label:"ヤギ牧場",look:l.pos,duration:3},T("乗降場①へ戻る",[[-36.2,-38.6],s]),v("乗降場①から②へ",e,n),T("スズキヤ横から体育館へ",[[31.6,-25.3,p],[31.9,-9.2,p],[29.7,-3.4,p],[27.8,2.5,p],[27.8,8.9,p],[29.5,o,p],[35.3,o,p]]),T("体育館の客席へ",[[35.3,17.6],[37.3,19.4],[52.3,19.4],[54.4,21.4],[54.4,30.7],[50.7,32.2],[46.6,32.2,h]]),{kind:"turn",label:"体育館を見渡す",duration:9},T("体育館の南側玄関から屋台へ",[[u,36.2],[u,41.2],[u,53],[36.4,53],[29.4,53],[30.5,56.6]]),T("キッチンカーの間を往復",[[31.9,61.5,p],[32,65.8,p],[32.2,70.8,p],[32.6,76.5,p],[30.6,74.4,m],[28.6,70.5,m],[28.5,65.7,m],[28.5,57.1,m]]),T("通路から賑わいゾーンへ",[[27.6,52.1],[27.4,45],[27.4,33.5],[27.8,25],[27.2,19.7],eh])]}(async function(){let i=D=>document.getElementById(D),t=D=>String(D??"").replace(/[&<>"']/g,nt=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[nt]),e={search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',overview:'<path d="m3 8 9-5 9 5-9 5-9-5Z M3 12l9 5 9-5M3 16l9 5 9-5"/>',route:'<circle cx="5" cy="5" r="2"/><circle cx="19" cy="19" r="2"/><path d="M7 5h8a4 4 0 0 1 0 8H9a4 4 0 0 0 0 8h5"/>',settings:'<path d="M4 6h16M4 12h16M4 18h16"/><circle cx="9" cy="6" r="2" fill="currentColor"/><circle cx="16" cy="12" r="2" fill="currentColor"/><circle cx="8" cy="18" r="2" fill="currentColor"/>',help:'<circle cx="12" cy="12" r="9"/><path d="M9.3 9a2.8 2.8 0 0 1 5.4 1c0 2-2.7 2-2.7 4M12 17h.01"/>',arrow:'<path d="M4 12h15m-5-5 5 5-5 5"/>',back:'<path d="M20 12H5m5-5-5 5 5 5"/>',close:'<path d="m6 6 12 12M6 18 18 6"/>',expand:'<path d="M9 3H3v6M15 3h6v6M3 15v6h6M21 15v6h-6"/>',walk:'<circle cx="13" cy="4" r="2"/><path d="m11 9 3 2 4 1M11 8l-3 5-4 1M11 9l-1 7-4 5m4-5 5 1 2 5"/>',pin:'<path d="M19 10c0 6-7 12-7 12S5 16 5 10a7 7 0 0 1 14 0Z"/><circle cx="12" cy="10" r="2.5"/>',eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>'};function n(D){return'<svg viewBox="0 0 24 24" aria-hidden="true">'+(e[D]||e.pin)+"</svg>"}function s(D=document){D.querySelectorAll("[data-icon]").forEach(nt=>nt.innerHTML=n(nt.dataset.icon))}s();let r=FESTA_DATA,l=[...r.records,...r.locations],o=Object.fromEntries(l.map(D=>[D.id,D])),u={F:"#a64c35",S:"#385e76",T:"#4e6c43",P:"#83503e",M:"#ab8450",I:"#28595c"},h=[["F-truck","[F] 飲食（キッチンカー）"],["F-tent","[F] 飲食（テント）"],["S-goods","[S] 物販"],["S-paid","[S] 有料ワークショップ・スポーツ・体験"],["T","[T] 無料・情報・スポーツ・体験"],["P","[P] ステージ出演"]],p=Object.fromEntries(h),y={M:"交流・モビリティー",I:"会場案内",P:"体育館の出演団体"},m=new Set(["S-1","S-2","S-3","S-4","S-5","S-6","S-7","S-13"]),T=new Set(["S-8","S-9","S-10","S-11","S-12"]),v=new Set(r.locations.map(D=>D.id));function P(D){return v.has(D.id)?D.category:D.category==="F"?D.kind==="truck"?"F-truck":"F-tent":D.category==="S"?m.has(D.id)?"S-goods":T.has(D.id)?"S-paid":null:D.category==="T"||D.category==="P"?D.category:null}function A(D){return v.has(D.id)?y[D.category]:p[P(D)]}let d=matchMedia("(pointer:coarse)").matches||innerWidth<650,C=matchMedia("(prefers-reduced-motion: reduce)").matches,I,g,R,E=!1,F=0,x=0,U=0,G,X=null,b={mode:"welcome",pos:[0,11],yaw:.1,pitch:0,orbitYaw:-.48,orbitPitch:.79,orbitDist:115,orbitTarget:[0,0,22],returnPos:null,selected:null,nearest:null,path:null,pathIndex:1,auto:!1,targetId:null,labels:!0,showRoof:!0,paused:!1,sheet:null,crowd:70,light:"day",distanceWalked:0,rideYaw:0,boardingStop:null,tour:null,runMode:!1,quality:d?"standard":"high"},Y={},W={x:0,y:0,active:!1,pid:null},q={active:!1,pid:null,x:0,y:0,moved:0},lt=null,ht=new Set,Mt=new Map;function Z(D,nt=4e3){i("toast").textContent=D,i("toast").classList.remove("hidden"),clearTimeout(G),G=setTimeout(()=>i("toast").classList.add("hidden"),nt)}function _(D,nt){i("loadBar").style.width=Math.round(D*100)+"%",i("loadText").textContent=nt}let bt=()=>new Promise(D=>setTimeout(D,0));function Jt(){b.mode="walk",i("welcome").classList.add("hidden"),i("hud").classList.remove("hidden"),i("minimapWrap").classList.remove("hidden"),i("bottomHint").classList.remove("hidden"),i("joystick").classList.remove("hidden"),d&&i("lookHint").classList.remove("hidden"),i("scene").focus({preventScroll:!0})}function Ct(D){b.yaw=Math.atan2(D[0]-b.pos[0],-(D[1]-b.pos[1])),b.pitch=-.02}function J(D){g&&(b.pos=g.nearestWalkable(D)||[0,11])}function me(D="field"){if(E){if(k(),Rt(),Wt(),Yt(),Jt(),D==="field")J([2.8,11]),Ct([14,-14]);else{let nt=o[D];J(nt.approach),Ct(D==="GATE_MAIN"?r.layout.mainGateLook:[-27,-24])}b.mode="walk",re(),Z(d?"左の丸で移動。画面の右側をドラッグすると見回せます。":"左の丸、キーボードのWASD または矢印キーで移動。画面をドラッグして見回します。",4500)}}function Ue(){E&&(k(),Rt(),Wt(),Yt(),b.mode="welcome",i("welcome").classList.remove("hidden"),i("minimapWrap").classList.add("hidden"),i("bottomHint").classList.add("hidden"),i("nearby").classList.add("hidden"),i("joystick").classList.add("hidden"),i("lookHint").classList.add("hidden"),re())}function xt(){if(E){if(k(),Rt(),Wt(),b.mode==="overview"){b.mode="walk",b.returnPos&&(b.pos=[...b.returnPos]),b.pitch=0,re();return}b.mode==="welcome"&&Jt(),Yt(),b.returnPos=[...b.pos],b.mode="overview",b.orbitTarget=[0,0,23],b.orbitDist=158,b.orbitYaw=-.27,b.orbitPitch=.9,re(),Z("ドラッグで回転、ホイールで拡大。地面を押すとその場所へ移動します。ブースの札や看板を押すと詳細を表示します。")}}function pt(){return b.tour?.paused?.holdRide&&b.mode==="ride"}function jt(){let D=b.tour;return D&&(!D.paused||b.mode==="walk"&&!b.path||pt())}function re(){let D=b.mode,nt=b.tour,it=jt(),ft=!!nt&&!nt.paused;if(i("tourBtn").classList.toggle("active",ft),i("tourBtn").setAttribute("aria-pressed",String(ft)),i("tourBtn").setAttribute("aria-label",nt?ft?"自動ツアーを一時停止":"自動ツアーを再開":"自動ツアーを開始"),i("welcomeTour").firstChild.nodeValue=nt?"自動ツアーを再開 ":"自動ツアー ",i("modeExit").setAttribute("aria-label",it?"自動ツアーを終了":"現在の移動を終了"),g&&g.setRideView(D==="ride"),i("modeBar").classList.toggle("ride-active",D==="ride"),i("speedToggle").classList.toggle("hidden",d||D!=="walk"||!!it),i("speedToggle").textContent=b.runMode?"速度：走る":"速度：歩く",i("speedToggle").setAttribute("aria-pressed",String(b.runMode)),i("speedToggle").setAttribute("aria-label",b.runMode?"走るを選択中。歩くに切り替える":"歩くを選択中。走るに切り替える"),i("overviewBtn").classList.toggle("active",D==="overview"),i("joystick").classList.toggle("hidden",D!=="walk"||!!b.sheet),i("lookHint").classList.toggle("hidden",!d||D!=="walk"||!!b.sheet),i("modeBar").classList.toggle("hidden",D==="welcome"||D==="walk"&&!b.path&&!it),it)i("modeText").textContent=ft?"自動ツアー中":"自動ツアーを一時停止中",i("modeAction").textContent=ft?"一時停止":"再開";else if(D==="overview")i("modeText").textContent="上空から会場を見る",i("modeAction").textContent="歩行に戻る";else if(D==="ride")i("modeText").textContent="トゥクトゥクに乗車中",i("modeAction").textContent="トゥクトゥクから降りる";else if(b.path){let gt=o[b.targetId];i("modeText").textContent=(b.auto?"歩いて案内中：":"経路表示：")+(gt?gt.short:"選択した場所"),i("modeAction").textContent=b.auto?"一時停止":"自動で歩く"}}function $t(D){return D.kind==="performer"||D.id==="T-SCI"?o.GYM:D}function Te(D,nt=!0){if(!E)return;let it=typeof D=="string"?$t(o[D]):null,ft=it?.approach||(!it&&Array.isArray(D)?D:null);if(!ft)return Z("この団体のブース位置は資料で特定できていません。"),!1;k(),b.mode==="welcome"&&me("field"),b.mode==="ride"&&(b.mode="walk",J(o.MOBILITY.approach)),b.mode="walk";let gt=R.find(b.pos,ft);return gt?(b.path=gt,b.pathIndex=1,b.auto=nt,b.targetId=it?.id||null,ke(gt),Rt(),Wt(),re(),!0):(Z("ここから歩ける経路を見つけられませんでした。「この場所へ移動」で見学できます。",6e3),!1)}function Fe(D){let nt=$t(o[D]);return nt?.approach?(k(),b.mode==="welcome"&&Jt(),Yt(),b.mode="walk",J(nt.approach),Ct(nt.pos),nt.id==="GATE_MAIN"&&Ct(r.layout.mainGateLook),nt.id==="GATE_WEST"&&Ct([-27,-24]),nt.id==="GYM"&&Ct([nt.pos[0],g.p(525,345)[1]]),nt.id==="WC"&&Ct([45,45]),Rt(),Wt(),re(),Z(nt.short+" に移動しました"),!0):!1}function Yt(){b.path=null,b.auto=!1,b.targetId=null,lt&&(lt.dispose(),lt=null),re()}function ke(D){lt&&lt.dispose();let{Geometry:nt,Mesh:it,material:ft}=FestaGL,gt=new nt;for(let L=0;L<D.length-1;L++){let $=D[L],K=D[L+1],et=K[0]-$[0],rt=K[1]-$[1],St=Math.hypot(et,rt);if(St<.01)continue;let At=-rt/St*.055,Gt=et/St*.055;gt.quad([$[0]-At,.088,$[1]-Gt],[$[0]+At,.088,$[1]+Gt],[K[0]+At,.088,K[1]+Gt],[K[0]-At,.088,K[1]-Gt],ft("#b78134",0,.75,0,.13));for(let ee=1;ee<St;ee+=2){let xe=$[0]+et*ee/St,Ee=$[1]+rt*ee/St;gt.disk(xe,.092,Ee,.12,ft("#dfbc77",0,.7,0,.2),10)}}let M=D[D.length-1];gt.cylinder([M[0],.08,M[1]],[M[0],.15,M[1]],.26,.26,ft("#d2a558",0,.65,0,.2),30),lt=new it(I,gt,{name:"Navigation guide",shadow:!1})}function Se(D,nt){let it=Math.max(1,Math.ceil(Math.hypot(D,nt)/.15)),ft=0;for(let gt=0;gt<it;gt++){let M=[...b.pos],L=b.pos[0]+D/it,$=b.pos[1]+nt/it;g.isWalkable(L,$,.28)?b.pos=[L,$]:(g.isWalkable(L,b.pos[1],.28)&&(b.pos[0]=L),g.isWalkable(b.pos[0],$,.28)&&(b.pos[1]=$)),ft+=Math.hypot(b.pos[0]-M[0],b.pos[1]-M[1])}return b.distanceWalked+=ft,ft}function ye(D){if(!b.path||!b.auto)return;let nt=b.path[b.pathIndex];if(!nt){ge();return}let it=nt[0]-b.pos[0],ft=nt[1]-b.pos[1],gt=Math.hypot(it,ft);if(gt<.16){b.pathIndex++,b.pathIndex>=b.path.length&&ge();return}let M=Math.min(gt,D*2.35),L=Se(it/gt*M,ft/gt*M),$=Math.atan2(it,-ft);b.yaw+=Pe($-b.yaw)*Math.min(1,D*3.3),b.pitch+=(0-b.pitch)*Math.min(1,D*3),L<2e-4&&M>.001&&(b.auto=!1,Z("障害物の手前で停止しました。移動キーで位置を調整できます。"),re())}function ge(){let D=b.targetId,nt=o[D];Yt(),nt&&(Ct(nt.pos),nt.id==="GATE_MAIN"&&Ct(r.layout.mainGateLook),nt.id==="GATE_WEST"&&Ct([-27,-24]),ht.add(D),Z(nt.short+" に到着しました",2600))}function Pe(D){return Math.atan2(Math.sin(D),Math.cos(D))}let je=[i("rideBubble"),i("rideBubble2")];function Ae(D){b.boardingStop=D,g.setCarStart(D.distance,x),b.mode="ride",b.rideYaw=0,b.pitch=-.06}function Qe(D=b.boardingStop){b.mode="walk",J(D.rec.approach),Ct(D.position),b.boardingStop=null}function Q(D){!E||b.mode!=="walk"||!D?.rec.approach||(k(),b.tour&&(b.tour.paused.holdRide=!1),Rt(),Yt(),Ae(D),re(),Z("トゥクトゥクに乗っています。ドラッグして周囲を見回せます。車種・速度は演出です。",5500))}function qe(){if(jt()){st();return}b.mode==="overview"?(b.mode="walk",b.returnPos&&J(b.returnPos),b.pitch=0):b.mode==="ride"?Qe():Yt(),re()}function Le(){if(!E)return;if(b.tour){b.tour.paused?w():k();return}Rt(),Wt(),Yt(),_e(),b.mode==="ride"&&Qe(),b.mode==="welcome"&&Jt(),b.mode="walk",J(eh),b.tour={steps:md(g,o),index:-1},ct();let D=b.tour;if(dt(D,D.step.points[0])){let nt=D.path.find(([it,ft])=>Math.hypot(it-b.pos[0],ft-b.pos[1])>=.1);nt&&(Ct(nt),b.pitch=0)}clearTimeout(G),i("toast").classList.add("hidden")}function k(){let D=b.tour;if(!D||D.paused)return;let{mode:nt,pos:it,yaw:ft,pitch:gt,boardingStop:M,rideYaw:L}=b;D.paused={view:{mode:nt,pos:[...it],yaw:ft,pitch:gt,boardingStop:M,rideYaw:L},holdRide:nt==="ride",carDistance:g.getCar().distance},_e(),re()}function w(){let D=b.tour,{view:nt,carDistance:it}=D.paused;Rt(),Wt(),Yt(),_e(),b.mode==="welcome"&&Jt(),Object.assign(b,nt),nt.mode==="ride"&&(g.setCarStart(it,x),D.lastCarDistance=it),D.paused=null,clearTimeout(G),i("toast").classList.add("hidden"),re()}function st(){b.tour&&(b.tour=null,b.mode==="ride"&&Qe(),re())}function at(D,nt){let it=nt-D;return Math.abs(it)<1e-6?0:it<0?it+g.trackLength:it}function ct(){let D=b.tour;D.index=(D.index+1)%D.steps.length,D.step=D.steps[D.index],D.pointIndex=0,D.path=null,D.elapsed=0,D.startYaw=b.yaw;let nt=D.step;nt.kind==="ride"&&(Ae(nt.from),D.lastCarDistance=g.getCar().distance,D.remainingRide=at(nt.from.distance,nt.to.distance)),re()}function zt(D,nt){let it=Pe(D-b.yaw),ft=nt*1.05;b.yaw+=Math.max(-ft,Math.min(ft,it)),b.pitch=0}function Lt(){st(),Z("歩ける経路を見つけられなかったため、自動ツアーを停止しました。",6e3)}function dt(D,nt){let it=R.find(b.pos,nt.position),ft=it?.[it.length-1];return!ft||Math.hypot(ft[0]-nt.position[0],ft[1]-nt.position[1])>.2?!1:(D.path=it,D.pathIndex=0,D.walkYaw=null,!0)}function vt(D,nt){let it=D.step.points[D.pointIndex];if(!it){ct();return}if(!D.path&&!dt(D,it)){Lt();return}let ft=D.path[D.pathIndex];if(!ft){D.pointIndex++,D.path=null;return}let gt=ft[0]-b.pos[0],M=ft[1]-b.pos[1],L=Math.hypot(gt,M);if(L<.1){D.pathIndex++,D.walkYaw=null;return}let $=Math.atan2(gt,-M);if(D.walkYaw===null){let et=Pe((it.yaw??$)-$),rt=Math.PI/7;D.walkYaw=$+FestaGL.clamp(et,-rt,rt)}if(zt(D.walkYaw,nt),Math.abs(Pe($-b.yaw))>Math.PI/4)return;let K=Math.min(L,nt*2.1);Se(gt/L*K,M/L*K)<2e-4&&K>.001&&Lt()}function Ht(D){let nt=b.tour,it=nt.step;if(it.kind==="walk"){vt(nt,D);return}if(it.kind==="ride"){let ft=g.getCar().distance;nt.remainingRide-=at(nt.lastCarDistance,ft),nt.lastCarDistance=ft,nt.remainingRide<.001&&(Qe(it.to),ct());return}if(nt.elapsed=Math.min(nt.elapsed+D,it.duration),it.kind==="turn"){let ft=nt.elapsed/it.duration;b.yaw=nt.startYaw+Math.PI*2*(ft*ft*(3-2*ft))}else zt(Math.atan2(it.look[0]-b.pos[0],b.pos[1]-it.look[1]),D);nt.elapsed>=it.duration&&ct()}function Qt(D,nt){k(),X=document.activeElement,b.sheet=nt,i("sheetTitle").textContent=D,i("sheet").classList.remove("hidden"),i("sheetScrim").classList.remove("hidden"),i("sheetBack").classList.add("hidden"),i("sheetBody").scrollTop=0,_e(),re(),setTimeout(()=>i("sheetClose").focus({preventScroll:!0}),0)}function Rt(){b.sheet=null,i("sheet").classList.add("hidden"),i("sheetScrim").classList.add("hidden"),re(),X&&X.isConnected&&X.focus({preventScroll:!0})}let kt="",te="all";function _t(){Qt("ブースを見つける","search"),i("sheetBody").innerHTML='<div class="search-field">'+n("search")+'<input id="searchInput" aria-label="団体名や内容から検索" placeholder="団体名・食べもの・体験から検索" value="'+t(kt)+'"></div><div class="filter-row">'+[["all","すべて"],...h,["I","会場案内"]].map(([D,nt])=>'<button class="filter '+(D===te?"active":"")+'" data-filter="'+D+'">'+nt+"</button>").join("")+'</div><p class="result-count" id="resultCount"></p><p class="source-text">'+t(r.notice)+'</p><div id="results"></div>',i("searchInput").addEventListener("input",D=>{kt=D.target.value,Dt()}),i("sheetBody").querySelectorAll("[data-filter]").forEach(D=>D.onclick=()=>{te=D.dataset.filter,i("sheetBody").querySelectorAll("[data-filter]").forEach(nt=>nt.classList.toggle("active",nt===D)),Dt()}),Dt(),setTimeout(()=>i("searchInput").focus(),30)}function Dt(){let D=kt.normalize("NFKC").toLowerCase().trim(),nt=D.split(/\s+/).filter(Boolean),it=l.filter(ft=>(te==="all"||(te==="I"?v.has(ft.id)&&["M","I"].includes(ft.category):P(ft)===te))&&nt.every(gt=>(ft.id+" "+ft.name+" "+ft.detail).normalize("NFKC").toLowerCase().includes(gt)));i("resultCount").textContent=it.length+" 項目 ／ 団体"+r.records.length+"・会場案内"+r.locations.length+"（9月時点の予定）",i("results").innerHTML=it.length?it.map(ft=>'<button class="result" data-id="'+t(ft.id)+'"><span class="badge" style="background:'+u[ft.category]+'">'+t(ft.id.startsWith("P-")?"P":ft.id.includes("-")?ft.id:ft.id==="WC"?"WC":"案内")+'</span><span class="result-info"><strong>'+t(ft.name)+'</strong><small class="'+(ft.kind==="unplaced"?"unplaced":"")+'">'+t(ft.kind==="unplaced"?"位置未特定 · "+ft.caption:ft.caption)+"</small></span>"+n("arrow")+"</button>").join(""):'<p class="empty">該当する項目がありません。<br>短い言葉でも検索できます。</p>',i("results").querySelectorAll("[data-id]").forEach(ft=>ft.onclick=()=>V(ft.dataset.id,!0))}function V(D,nt=!1){let it=o[D];if(!it)return;b.selected=D,ht.add(D),Qt("ブース・会場の詳細","detail"),i("sheetBack").classList.toggle("hidden",!nt);let ft=$t(it),gt=E&&!!ft.approach,M=A(it),L='<div class="detail-id"><span class="badge" style="background:'+u[it.category]+'">'+t(it.id.startsWith("P-")?"P":it.id.includes("-")?it.id:"案内")+"</span>"+t(M)+'<span>／ 予定</span></div><h3 class="detail-title">'+t(it.name)+'</h3><p class="detail-caption">'+t(it.caption)+"</p>";gt?L+='<div class="detail-actions"><button class="primary" id="navigateHere">'+n("route")+' 歩いて案内</button><button class="secondary" id="jumpHere">この場所へ移動</button></div>':L+=it.kind==="unconfirmed"?'<div class="note-box warn">今回の体育館の開始予定9件に記載がなく、出演予定は未確認です。</div>':it.kind==="unplaced"?'<div class="note-box warn">参加予定団体一覧には記載がありますが、配置図からワークショップの位置を特定できません。推測でブースを追加していません。</div>':'<div class="note-box">3D表示が起動していないため、ここでは移動機能を利用できません。団体の予定内容は読めます。</div>',it.id==="MOBILITY"&&(L+='<p class="source-text">電動トライク1台。車体色、走行速度は実際と異なる場合があります。</p>');let $=r.exhibitorDescriptions?.[D];it.id!=="GYM"&&(L+='<div class="section-label">'+(it.category==="P"?"参加予定内容":"内容")+'</div><div class="detail-content">'+t($?it.detail+`

`+$:it.detail)+"</div>"),(it.category==="F"||it.category==="S")&&(L+='<div class="note-box">3Dで置かれている商品は実物や販売数量を示すものではありません。</div>'),(it.id==="GYM"||it.category==="P"||it.id==="T-SCI")&&(L+='<div class="section-label">体育館内 開始予定</div>'+r.schedule.map(K=>'<div class="schedule-row"><b>'+t(K.time)+"</b><span>"+t(K.name)+"</span></div>").join(""),L+='<p class="source-text">進行上の都合で開始・終了時刻は変更になることがあります。</p>'),L+='<p class="source-text">'+t(r.notice)+"</p>",i("sheetBody").innerHTML=L,gt&&(i("navigateHere").onclick=()=>{Te(D,!0)},i("jumpHere").onclick=()=>{Fe(D)})}function Pt(){Qt("表示と操作の設定","settings"),i("sheetBody").innerHTML='<div class="setting-row"><label for="quality">描画品質</label><select id="quality"><option value="high">高画質 — PC向け</option><option value="standard">標準 — 軽さと品質のバランス</option><option value="low">軽量 — 小さな端末向け</option></select><small>影の解像度と描画解像度を変更します。重い場合は「標準」「軽量」を選択。</small></div><div class="setting-row"><label for="crowd">来場者の表示量 <span id="crowdValue"></span></label><input id="crowd" type="range" min="0" max="100" step="10" value="'+b.crowd+'"><small>人数は演出です。実際の来場者数や混雑予測ではありません。</small></div><div class="setting-row"><label for="light">光の雰囲気</label><select id="light"><option value="day">昼の光</option><option value="afternoon">午後の光</option></select><small>当日の天気・太陽位置を再現したものではありません。</small></div><label class="toggle-row" for="labelsToggle">近くのブース名を表示<input type="checkbox" id="labelsToggle" '+(b.labels?"checked":"")+'></label><label class="toggle-row" for="roofToggle">体育館の屋根を表示<input type="checkbox" id="roofToggle" '+(b.showRoof?"checked":"")+'></label><div class="note-box">屋根を外すと、上空から体育館の中を確認できます。歩行時には屋根の表示に関係なく出入口から入ります。</div><button class="secondary" id="fullscreenBtn">全画面表示を切り替える</button><button class="text-btn" id="captureBtn">いまの3D画面を画像として保存 '+n("arrow")+'</button><div class="section-label">動作情報</div><p class="source-text" id="performanceInfo"></p><button id="settingsHelp" class="text-btn">操作方法・資料と再現範囲 '+n("help")+"</button>",i("quality").value=b.quality,i("quality").onchange=D=>{b.quality=D.target.value,I.setQuality(b.quality),Z("描画品質を変更しました")},i("crowdValue").textContent=b.crowd+"%",i("crowd").oninput=D=>{b.crowd=Number(D.target.value),g.setCrowd(b.crowd),i("crowdValue").textContent=b.crowd+"%"},i("light").value=b.light,i("light").onchange=D=>{b.light=D.target.value,I.sun=FestaGL.V.norm(b.light==="day"?[-.38,.79,.48]:[-.75,.38,.46]),I.sunColor=b.light==="day"?[1,.94,.81]:[1,.84,.65],I.sunPower=b.light==="day"?3.7:3.4,I.exposure=b.light==="day"?1.12:1.18,I.createShadow()},i("labelsToggle").onchange=D=>b.labels=D.target.checked,i("roofToggle").onchange=D=>{b.showRoof=D.target.checked,g.meshes.roof.visible=b.showRoof,I.shadowDirty=!0},i("fullscreenBtn").onclick=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{Z("この表示環境では全画面表示を利用できません。")}},i("captureBtn").onclick=()=>{try{I.render(x);let D=document.createElement("a");D.href=i("scene").toDataURL("image/png"),D.download="festa2026_3d_view.png",D.click()}catch{Z("画像の保存に対応していない表示環境です。")}},i("settingsHelp").onclick=()=>mt(),i("performanceInfo").textContent="WebGL 2 ／ 外部通信なし ／ "+I.stats.triangles.toLocaleString()+" triangles ／ "+I.stats.draws+" draw calls（現在の場面）"}function mt(){Qt("操作と、資料について","help"),i("sheetBody").innerHTML='<div class="help-section"><h3>PCで歩く</h3>'+[["左下の丸いパッド","前後・左右に移動"],["W / A / S / D・矢印キー","前後・左右に移動"],["画面をドラッグ","見回す"],["画面下の「歩く」「走る」","速度を切り替える"],["Shift ＋移動","押している間だけ走る"],["E","近くのブースの内容"],["V","上空／歩行を切り替え"],["M","会場マップ"],["Esc","閉じる・移動を止める"]].map(D=>'<div class="control-row"><span>'+t(D[0])+"</span><span>"+t(D[1])+"</span></div>").join("")+"<h3>スマートフォン・タブレット</h3><p>左下の丸いパッドで移動します。中心付近では細かく、外側では速く移動できます。画面の右側をドラッグして見回します。ブースの札、テントやキッチンカーの看板、店頭の立て看板や「内容を見る」を押すと、詳細を表示します。端末を横向きにすると広く見渡せます。</p><h3>ブースを探す・案内を使う</h3><p>「ブース」から団体名や食べもの、体験などで検索できます。「歩いて案内」は経路を表示して自動で歩きます。移動キーやジョイスティックを使うと手動操作に戻ります。「この場所へ移動」は、そのブースの前へ直接移動します。</p><p>「自動ツアー」は賑わいゾーンから出発し、徒歩とトゥクトゥクで会場を繰り返し回ります。「ツアーを停止」または Esc で終了できます。</p><p>上空表示ではドラッグで回転、ホイール／2本指で拡大・縮小。会場マップでは点を選ぶとブース情報、歩ける場所を選ぶと直接移動します。ブース番号入り配置図と上空表示でも歩ける場所へ直接移動できます。</p><h3>読み取り方</h3>"+r.caveats.map(D=>"<p>"+t(D)+"</p>").join("")+'<div class="note-box">校舎は外観のみ。体育館には出入口から入れます。壇上舞台は使用しません。</div><h3>参照資料</h3>'+r.sources.map(D=>'<div class="source-entry"><strong>'+t(D.type)+" · "+(D.url?'<a href="'+t(D.url)+'" target="_blank" rel="noopener noreferrer">'+t(D.name)+"</a>":t(D.name))+"</strong><p>"+t(D.description)+"</p></div>").join("")+'<h3>このアプリについて</h3><p>すべての描画・検索・経路計算は、このHTMLを開いた端末内で行います。外部通信、位置情報の取得、アクセス解析、アカウント登録はありません。「かまにゃん」の紹介ページを開く場合だけ外部に移動します。</p><p>描画にはThree.jsを使用し、形状、人物、看板は本アプリ向けに実装。地表テクスチャはCC0画像を使用しています。写真測量や現地撮影による3Dモデルではありません。</p><p class="source-text">テクスチャ：Gravel04 / CC0Textures、Grass 01 / linolafett（CC0、scikit-image同梱）。提供資料の権利は元の権利者に帰属します。</p></div>'}function Et(D){let nt=D.clientWidth,it=D.clientHeight,ft=g.campus.map(([At])=>At),gt=g.campus.map(([,At])=>At),M=Math.min(...ft),L=Math.max(...ft),$=Math.min(...gt),K=Math.max(...gt),et=(M+L)/2,rt=($+K)/2,St=Math.min((nt-18)/(L-M),(it-18)/(K-$));return{w:nt,h:it,scale:St,to:At=>[nt/2+(At[0]-et)*St,it/2+(At[1]-rt)*St],from:(At,Gt)=>[(At-nt/2)/St+et,(Gt-it/2)/St+rt]}}function It(D,nt=!1){if(!g||!D.clientWidth)return;let it=Et(D),ft=Math.min(devicePixelRatio,2),gt=Math.round(it.w*ft),M=Math.round(it.h*ft);(D.width!==gt||D.height!==M)&&(D.width=gt,D.height=M);let L=D.getContext("2d");L.setTransform(ft,0,0,ft,0,0),L.clearRect(0,0,it.w,it.h),L.fillStyle="#eeeee3",L.fillRect(0,0,it.w,it.h);let $=(rt,St,At)=>{L.beginPath(),rt.forEach((Gt,ee)=>{let[xe,Ee]=it.to(Gt);ee?L.lineTo(xe,Ee):L.moveTo(xe,Ee)}),L.closePath(),St&&(L.fillStyle=St,L.fill()),At&&(L.strokeStyle=At,L.lineWidth=1,L.stroke())};$(g.campus,"#d4d8cd","#b4c3b5"),$(g.field,"#e6d8ba"),$(g.restricted,"#ded5c1","#b5a68a"),L.beginPath(),g.track.forEach((rt,St)=>{let[At,Gt]=it.to(rt);St?L.lineTo(At,Gt):L.moveTo(At,Gt)}),L.closePath(),L.strokeStyle="#c09164",L.lineWidth=Math.max(1,it.scale*2),L.stroke(),L.beginPath();for(let[rt,St]of g.ropeSegments)L.moveTo(...it.to(rt)),L.lineTo(...it.to(St));L.strokeStyle="#d6ad23",L.lineWidth=nt?2:1.3,L.stroke(),L.setLineDash(nt?[3,3]:[2,2]),L.strokeStyle="#33312b",L.stroke(),L.setLineDash([]);for(let[rt,St]of g.coneBars){let At=it.to(rt),Gt=it.to(St);L.beginPath(),L.moveTo(...At),L.lineTo(...Gt),L.strokeStyle="#bb3b2c",L.lineWidth=nt?2.5:1.5,L.stroke()}for(let rt of g.buildings){let St=it.to([rt.x-rt.w/2,rt.z-rt.d/2]);L.fillStyle=rt.gym?"#bfccb9":"#a6b5ad",L.fillRect(St[0],St[1],rt.w*it.scale,rt.d*it.scale),L.strokeStyle="#8fa397",L.lineWidth=.6,L.strokeRect(St[0],St[1],rt.w*it.scale,rt.d*it.scale),nt&&rt.w*it.scale>40&&(L.fillStyle="#4c6858",L.font="10px sans-serif",L.textAlign="center",L.fillText(rt.gym?"体育館":"校舎",St[0]+rt.w*it.scale/2,St[1]+rt.d*it.scale/2+3))}for(let rt of g.markers){let[St,At]=it.to(rt.pos),Gt=nt?3.7:2.1;if(L.beginPath(),L.arc(St,At,Gt,0,Math.PI*2),L.fillStyle=u[rt.category],L.fill(),nt&&(L.strokeStyle="#fcf9ee",L.lineWidth=.7,L.stroke(),rt.id.includes("-")&&rt.kind!=="performer")){L.font="9px sans-serif",L.textAlign="left",L.fillStyle="#3e584b";let ee=St+6,xe=At+3;rt.pos[1]<-16&&rt.pos[0]>-10?(ee=St,xe=At-10,L.save(),L.translate(ee,xe),L.rotate(-Math.PI/2.8),L.fillText(rt.id,0,0),L.restore()):rt.pos[0]<1&&rt.pos[1]>-16&&rt.pos[1]<10?(L.textAlign="right",L.fillText(rt.id,St-6,At+3)):L.fillText(rt.id,ee,xe)}}b.path&&(L.beginPath(),b.path.forEach((rt,St)=>{let[At,Gt]=it.to(rt);St?L.lineTo(At,Gt):L.moveTo(At,Gt)}),L.strokeStyle="#af7b29",L.lineWidth=nt?2:1.5,L.setLineDash([4,2]),L.stroke(),L.setLineDash([]));let[K,et]=it.to(b.pos);if(L.save(),L.translate(K,et),L.rotate(b.yaw),L.fillStyle="#fff",L.beginPath(),L.arc(0,0,nt?7:5,0,Math.PI*2),L.fill(),L.fillStyle="#174f58",L.beginPath(),L.moveTo(0,nt?-10:-7),L.lineTo(nt?5:4,nt?6:4),L.lineTo(0,nt?3:1),L.lineTo(nt?-5:-4,nt?6:4),L.closePath(),L.fill(),L.restore(),L.fillStyle="#526b5d",L.textAlign="right",L.font=(nt?"10":"8")+"px sans-serif",nt){let[rt,St]=it.to(o.GATE_MAIN.pos);L.textAlign="right",L.fillText("正門",rt-9,St-9);let[At,Gt]=it.to(o.GATE_WEST.pos);L.textAlign="left",L.fillText("西ヶ谷門",At-10,Gt+15)}}let Tt=!1;function oe(){E&&(k(),_e(),Rt(),X=document.activeElement,i("mapModal").classList.remove("hidden"),Tt=!1,i("bigmap").classList.remove("hidden"),i("originalWrap").classList.add("hidden"),i("mapToggle").textContent="ブース番号入り配置図を見る",i("mapExplain").textContent="ブースの点を押すと内容を表示。歩ける場所を押すと、その場所へ直接移動します。",requestAnimationFrame(()=>It(i("bigmap"),!0)),i("mapClose").focus())}function Wt(){i("mapModal").classList.add("hidden")}function Re(D){return!D||!g.isWalkable(D[0],D[1],.32)?(Z("建物・走行路の中は選べません。歩ける場所を選択してください。"),!1):(k(),Yt(),b.mode==="welcome"&&Jt(),b.mode="walk",b.returnPos=null,b.pitch=0,J(D),Wt(),re(),Z("選んだ場所へ移動しました"),!0)}function we(D){let nt=i("bigmap").getBoundingClientRect(),it=D.clientX-nt.left,ft=D.clientY-nt.top,gt=Et(i("bigmap")),M=null,L=16;for(let K of g.markers){let et=gt.to(K.pos),rt=Math.hypot(et[0]-it,et[1]-ft);rt<L&&(L=rt,M=K)}if(M){Wt(),V(M.id);return}let $=gt.from(it,ft);if(!g.isWalkable(...$,.32)){Z("建物・走行路の中は選べません。歩ける場所を選択してください。");return}Re($)}function yn(D){let nt=i("originalPlan"),it=nt.getBoundingClientRect();if(!nt.naturalWidth||!it.width||!it.height)return;let ft=(D.clientX-it.left)/it.width*660-35,gt=(D.clientY-it.top)/it.height*870-35,M=g.p(ft,gt),L=null,$=16;for(let K of g.markers){let et=it.left+(K.pos[0]/.22+320+35)/660*it.width,rt=it.top+(K.pos[1]/.22+290+35)/870*it.height,St=Math.hypot(et-D.clientX,rt-D.clientY);St<$&&($=St,L=K)}if(L){Wt(),V(L.id);return}Re(M)}function H(D,nt){let it=new Map,ft=!1;D.addEventListener("pointerdown",gt=>{it.size?ft=!0:ft=!1,it.set(gt.pointerId,[gt.clientX,gt.clientY])}),D.addEventListener("pointermove",gt=>{let M=it.get(gt.pointerId);M&&Math.hypot(gt.clientX-M[0],gt.clientY-M[1])>8&&(ft=!0)}),D.addEventListener("pointerup",gt=>it.delete(gt.pointerId)),D.addEventListener("pointercancel",gt=>{it.delete(gt.pointerId),ft=!0}),D.addEventListener("click",gt=>{ft||nt(gt)})}function ut(){for(let D of g.markers){let nt=document.createElement("button");nt.className="world-label hidden",nt.style.setProperty("--accent",u[D.category]),nt.setAttribute("aria-label",D.name+" の内容を見る"),nt.innerHTML="<b>"+t(D.id.includes("-")?D.id:D.id==="WC"?"WC":"")+"</b><span>"+t(D.short)+"</span>",nt.onclick=it=>{it.stopPropagation(),V(D.id)},i("labels").appendChild(nt),Mt.set(D.id,nt)}}function Nt(){let D=b.mode==="walk"&&!b.sheet&&i("mapModal").classList.contains("hidden");je.forEach((nt,it)=>{if(nt.classList.add("hidden"),!D)return;let{position:ft}=g.boardingGaps[it],gt=I.camera.eye;if(Math.hypot(gt[0]-ft[0],gt[2]-ft[1])>18)return;let M=I.project([ft[0],1.88,ft[1]]);if(!M||M.z>1||M.x<0||M.x>innerWidth||M.y<0||M.y>innerHeight)return;let L=Math.hypot(gt[0]-ft[0],gt[2]-ft[1]),$=Math.max(.52,Math.min(1,5/Math.max(L,1))),K=(d?146:176)*$/2+8;nt.style.setProperty("--ride-scale",$),nt.style.left=Math.max(K,Math.min(innerWidth-K,M.x))+"px",nt.style.top=M.y+"px",nt.classList.remove("hidden")})}function Ft(){if(!E)return;let D=b.mode==="overview",nt=b.labels&&b.mode!=="welcome"&&!b.sheet&&i("mapModal").classList.contains("hidden"),it=[];for(let gt of g.markers){let M=Mt.get(gt.id);if(M.classList.add("hidden"),!nt)continue;let L=Math.hypot(I.camera.eye[0]-gt.marker[0],I.camera.eye[2]-gt.marker[2]);if(!D&&L>24)continue;let $=I.project(gt.marker);if(!(!$||$.z>1||$.x<35||$.x>innerWidth-35||$.y<112||$.y>innerHeight-90)){if(!D){let K=!1,et=I.camera.eye;for(let rt of g.buildings){if(rt.gym){let St=et[0]>rt.x-rt.w/2&&et[0]<rt.x+rt.w/2&&et[2]>rt.z-rt.d/2&&et[2]<rt.z+rt.d/2,At=gt.marker[0]>rt.x-rt.w/2&&gt.marker[0]<rt.x+rt.w/2&&gt.marker[2]>rt.z-rt.d/2&&gt.marker[2]<rt.z+rt.d/2;St!==At&&L>6&&(K=!0);continue}for(let St=.1;St<.96;St+=.09){let At=et[0]+(gt.marker[0]-et[0])*St,Gt=et[2]+(gt.marker[2]-et[2])*St,ee=et[1]+(gt.marker[1]-et[1])*St;if(Math.abs(At-rt.x)<rt.w/2&&Math.abs(Gt-rt.z)<rt.d/2&&ee<rt.h){K=!0;break}}if(K)break}if(K)continue}it.push({r:gt,el:M,pr:$,d:L})}}it.sort((gt,M)=>gt.d-M.d);let ft=[];for(let gt of it){if(ft.length>=(D?20:d?4:7))break;let M=Math.min(d?160:220,45+gt.r.short.length*10);ft.some(L=>Math.abs(L.pr.x-gt.pr.x)<(L.width+M)/2+7&&Math.abs(L.pr.y-gt.pr.y)<34)||(gt.width=M,gt.el.style.left=gt.pr.x+"px",gt.el.style.top=gt.pr.y+"px",gt.el.classList.remove("hidden"),ft.push(gt))}}function Ot(){let D=r.exhibitorDescriptions?.かまにゃん;Qt("かまにゃん","mascot"),i("sheetBody").innerHTML='<h3 class="detail-title">かまにゃん</h3><p class="detail-caption">鎌倉地域メディア「かまくらいふ」のキャラクターです。</p><div class="note-box">しらすの首輪に大仏のポシェットをつけています</div>'+(D?'<div class="detail-content">'+t(D)+"</div>":"")+'<p class="source-text">'+t(r.notice)+'</p><p class="source-text"><a href="https://kamakura-life.net/mascot/" target="_blank" rel="noopener noreferrer">かまくらいふの紹介ページ</a></p>'}function Bt(){let D=document.createElement("button");D.id="kamanyanLabel",D.className="world-label hidden",D.style.setProperty("--accent","#a97887"),D.setAttribute("aria-label","かまくらいふ かまにゃんの内容を見る"),D.innerHTML="<span>かまくらいふ　かまにゃん</span>",D.onclick=nt=>{nt.stopPropagation(),Ot()},i("labels").appendChild(D)}function Zt(){let D=i("kamanyanLabel");if(!D||(D.classList.add("hidden"),!b.labels||b.mode==="welcome"||b.mode==="ride"||b.sheet||!i("mapModal").classList.contains("hidden")))return;let nt=g.getKamanyan(),it=Math.hypot(I.camera.eye[0]-nt[0],I.camera.eye[2]-nt[2]);if(b.mode!=="overview"&&it>28)return;let ft=I.project(nt);!ft||ft.z>1||ft.x<80||ft.x>innerWidth-80||ft.y<110||ft.y>innerHeight-80||(D.style.left=ft.x+"px",D.style.top=ft.y+"px",D.classList.remove("hidden"))}function qt(){if(!E)return;let D=null,nt=4.8;if(b.mode==="walk")for(let L of g.markers){if(!L.approach)continue;let $=Math.hypot(b.pos[0]-L.approach[0],b.pos[1]-L.approach[1]);$<nt&&(nt=$,D=L)}b.nearest=D?.id||null;let it=D&&!b.sheet&&b.mode==="walk";i("nearby").classList.toggle("hidden",!it),it&&(i("nearCategory").textContent=D.id.includes("-")?D.id:D.id==="WC"?"WC":"案内",i("nearCategory").style.background=u[D.category],i("nearCaption").textContent=A(D),i("nearName").textContent=D.short);let[ft,gt]=b.pos,M=ft>33&&ft<57.5&&gt>2.6&&gt<47?"体育館":gt>48?"正門・キッチンカーエリア":gt<-25?"モビリティー・であいの広場":ft<-13?"アウトドアーエリア":"校庭・にぎわいゾーン";i("locationText").textContent=b.mode==="overview"?"会場全体":b.mode==="ride"?"トゥクトゥクに乗車中":M}let le=new Map,he=0;i("scene").addEventListener("pointerdown",D=>{if(!(!E||b.sheet||b.mode==="welcome")){if(le.set(D.pointerId,[D.clientX,D.clientY]),le.size===2){q.multi=!0;let nt=[...le.values()];he=Math.hypot(nt[0][0]-nt[1][0],nt[0][1]-nt[1][1])}q.active=!0,q.pid=D.pointerId,q.x=D.clientX,q.y=D.clientY,q.moved=0,q.multi=le.size>1,i("scene").setPointerCapture(D.pointerId)}}),i("scene").addEventListener("pointermove",D=>{if(!le.has(D.pointerId))return;if(le.set(D.pointerId,[D.clientX,D.clientY]),le.size===2&&b.mode==="overview"){let ft=[...le.values()],gt=Math.hypot(ft[0][0]-ft[1][0],ft[0][1]-ft[1][1]);b.orbitDist=FestaGL.clamp(b.orbitDist*he/Math.max(1,gt),25,190),he=gt;return}if(!q.active||q.pid!==D.pointerId)return;let nt=D.clientX-q.x,it=D.clientY-q.y;if(q.x=D.clientX,q.y=D.clientY,q.moved+=Math.abs(nt)+Math.abs(it),b.tour&&!b.tour.paused){if(q.moved<=8)return;k()}b.mode==="overview"?(b.orbitYaw-=nt*.004,b.orbitPitch=FestaGL.clamp(b.orbitPitch+it*.003,.18,1.48)):(b.mode==="ride"?b.rideYaw+=nt*.004:b.yaw-=nt*.004,b.pitch=FestaGL.clamp(b.pitch+it*.0035,-1.15,1.15))});function Ie(D){let nt=D.type==="pointerup"&&q.pid===D.pointerId&&le.size===1&&!q.multi&&q.moved<=8;if(le.delete(D.pointerId),q.pid===D.pointerId&&(q.active=!1),!nt||b.mode==="welcome")return;let it=i("scene").getBoundingClientRect(),ft=D.clientX-it.left,gt=D.clientY-it.top,{signs:M,base:L,details:$,roof:K}=g.meshes,et=I.signFace(ft,gt,M,[L,$,K]),rt=et==null?null:g.selectableSigns.find(({first:St,last:At})=>et>=St&&et<At);if(rt){V(rt.id);return}if(b.mode==="overview"){let St=I.groundPoint(ft,gt);St&&Re([St[0],St[2]])}}i("scene").addEventListener("pointerup",Ie),i("scene").addEventListener("pointercancel",Ie),i("scene").addEventListener("contextmenu",D=>D.preventDefault()),i("scene").addEventListener("wheel",D=>{b.mode==="overview"&&(D.preventDefault(),b.orbitDist=FestaGL.clamp(b.orbitDist*Math.exp(D.deltaY*.001),25,190))},{passive:!1}),i("joystick").addEventListener("pointerdown",D=>{D.preventDefault(),k(),W.pid=D.pointerId,W.active=!0,i("joystick").setPointerCapture(D.pointerId),Ye(D),b.auto&&(b.auto=!1,re())}),i("joystick").addEventListener("pointermove",D=>{W.pid===D.pointerId&&Ye(D)});function Ye(D){let nt=i("joystick").getBoundingClientRect(),it=D.clientX-(nt.left+nt.width/2),ft=D.clientY-(nt.top+nt.height/2),gt=Math.hypot(it,ft),M=37;gt>M&&(it*=M/gt,ft*=M/gt),W.x=it/M,W.y=-ft/M,i("joyKnob").style.transform="translate("+it+"px,"+ft+"px)"}function fn(){W.x=W.y=0,W.active=!1,W.pid=null,i("joyKnob").style.transform=""}i("joystick").addEventListener("pointerup",fn),i("joystick").addEventListener("pointercancel",fn);function _e(){for(let D in Y)Y[D]=!1;fn()}window.addEventListener("blur",_e),document.addEventListener("visibilitychange",()=>{_e(),F=0}),document.addEventListener("keydown",D=>{if(!E)return;let nt=/INPUT|SELECT|TEXTAREA/.test(document.activeElement?.tagName);if(D.code==="Escape"){D.preventDefault(),i("mapModal").classList.contains("hidden")?b.sheet?Rt():b.tour&&!b.tour.paused?k():jt()||qe():Wt();return}if(D.code==="Tab"&&(b.sheet||!i("mapModal").classList.contains("hidden"))){let it=b.sheet?i("sheet"):i("mapModal"),ft=[...it.querySelectorAll("button,a,input,select")].filter(gt=>!gt.closest(".hidden")&&!gt.disabled);if(ft.length){let gt=ft[0],M=ft[ft.length-1];D.shiftKey&&document.activeElement===gt?(M.focus(),D.preventDefault()):!D.shiftKey&&document.activeElement===M&&(gt.focus(),D.preventDefault())}return}nt||b.sheet||!i("mapModal").classList.contains("hidden")||(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight"].includes(D.code)&&(D.preventDefault(),k(),Y[D.code]=!0,b.auto&&(b.auto=!1,re())),!D.repeat&&(D.code==="KeyE"&&b.nearest&&V(b.nearest),D.code==="KeyV"&&xt(),D.code==="KeyM"&&oe(),D.code==="KeyF"&&_t()))}),document.addEventListener("keyup",D=>Y[D.code]=!1);function rn(D){if(!E||b.paused)return;let nt=b.tour;if(g.update(x,D,pt()?nt.paused.carDistance:void 0),nt&&!nt.paused)Ht(D);else if(b.mode==="walk"&&!b.sheet&&i("mapModal").classList.contains("hidden")){let gt=(Y.KeyW||Y.ArrowUp?1:0)-(Y.KeyS||Y.ArrowDown?1:0)+W.y,M=(Y.KeyD||Y.ArrowRight?1:0)-(Y.KeyA||Y.ArrowLeft?1:0)+W.x,L=Math.hypot(gt,M);if(L>.03){L>1&&(gt/=L,M/=L);let K=Y.KeyW||Y.ArrowUp||Y.KeyS||Y.ArrowDown||Y.KeyD||Y.ArrowRight||Y.KeyA||Y.ArrowLeft?b.runMode||Y.ShiftLeft||Y.ShiftRight?4.6:3:2.3+2.3*Math.min(L,1);Se((Math.sin(b.yaw)*gt+Math.cos(b.yaw)*M)*K*D,(-Math.cos(b.yaw)*gt+Math.sin(b.yaw)*M)*K*D)}else ye(D)}let it,ft;if(b.mode==="overview"){let gt=b.orbitTarget,M=b.orbitDist,L=Math.cos(b.orbitPitch);it=[gt[0]+Math.sin(b.orbitYaw)*M*L,Math.sin(b.orbitPitch)*M,gt[2]+Math.cos(b.orbitYaw)*M*L],ft=[...gt]}else if(b.mode==="welcome"){let gt=C?0:Math.sin(x*.085)*.8;it=[2.2+gt,2.2,11.5],ft=[15+gt,2,-13]}else if(b.mode==="ride"){let gt=g.getCar(),M=-.23;it=[gt.x+Math.sin(gt.yaw)*M,1.68,gt.z+Math.cos(gt.yaw)*M];let L=gt.yaw+b.rideYaw;ft=[it[0]+Math.sin(L)*Math.cos(b.pitch),it[1]+Math.sin(b.pitch),it[2]+Math.cos(L)*Math.cos(b.pitch)],b.pos=[gt.x,gt.z]}else{let M=(Math.abs(W.x)+Math.abs(W.y)||Y.KeyW||Y.KeyA||Y.KeyS||Y.KeyD||b.auto||nt&&!nt.paused&&nt.step.kind==="walk")&&!C?Math.sin(b.distanceWalked*8)*.017:0;it=[b.pos[0],1.68+g.walkHeight(b.pos[0],b.pos[1])+M,b.pos[1]],ft=[it[0]+Math.sin(b.yaw)*Math.cos(b.pitch),it[1]+Math.sin(b.pitch),it[2]-Math.cos(b.yaw)*Math.cos(b.pitch)]}I.camera.near=b.mode==="overview"?1:.09,I.camera.eye=it,I.camera.target=ft}function an(D){b.paused||(x+=D),rn(D)}function qn(D){if(!E)return;if(b.testFreeze){requestAnimationFrame(qn);return}let nt=F?Math.min(.12,(D-F)/1e3):.016;F=D,document.hidden||(an(nt),I.render(x),Nt(),U+=nt,U>.13&&(U=0,Ft(),Zt(),qt(),It(i("minimap")),!i("mapModal").classList.contains("hidden")&&!Tt&&It(i("bigmap"),!0))),requestAnimationFrame(qn)}je.forEach((D,nt)=>D.onclick=it=>{it.stopPropagation(),Q(g.boardingGaps[nt])}),i("homeBtn").onclick=Ue,i("startBtn").onclick=()=>me("field"),i("welcomeTour").onclick=Le,i("tourBtn").onclick=Le,i("startMain").onclick=()=>me("GATE_MAIN"),i("startWest").onclick=()=>me("GATE_WEST"),i("welcomeOverview").onclick=xt,i("searchBtn").onclick=_t,i("overviewBtn").onclick=xt,i("settingsBtn").onclick=Pt,i("helpBtn").onclick=mt,i("sheetClose").onclick=Rt,i("sheetScrim").onclick=Rt,i("sheetBack").onclick=_t,i("nearOpen").onclick=()=>b.nearest&&V(b.nearest),i("mapBtn").onclick=oe,i("mapClose").onclick=Wt,H(i("bigmap"),we),H(i("originalPlan"),yn),i("speedToggle").onclick=()=>{b.runMode=!b.runMode,re()},i("modeExit").onclick=qe,i("modeAction").onclick=()=>{jt()?Le():b.mode==="overview"||b.mode==="ride"?qe():b.path&&(b.auto=!b.auto,re())},i("mapToggle").onclick=()=>{Tt=!Tt,i("bigmap").classList.toggle("hidden",Tt),i("originalWrap").classList.toggle("hidden",!Tt),i("mapToggle").textContent=Tt?"会場マップに戻る":"ブース番号入り配置図を見る",i("mapExplain").textContent=Tt?"ブース番号を押すと内容を表示。歩ける場所を押すと、その場所へ直接移動します。":"ブースの点を押すと内容を表示。歩ける場所を押すと、その場所へ直接移動します。",Tt||It(i("bigmap"),!0)},i("mapModal").onclick=D=>{D.target===i("mapModal")&&Wt()},i("originalPlan").src="./assets/venue-map.svg?v=20261121.1",window.addEventListener("resize",()=>{I&&I.resize(),g&&(It(i("minimap")),i("mapModal").classList.contains("hidden")||It(i("bigmap"),!0))});try{await bt(),I=new FestaGL.Renderer(i("scene"),b.quality),g=await buildFestaWorld(I,_),await bt(),R=new FestaNavigation(g),ut(),Bt(),_(1,"会場の準備ができました"),E=!0,window.__FESTA_TEST__={ready:!0,renderer:I,world:g,nav:R,state:b,byId:o,start:me,teleport:Fe,routeTo:Te,showDetail:V,showSearch:_t,showSettings:Pt,showHelp:mt,showMap:oe,toOverview:xt,ride:Q,exitMode:qe,tick:rn,advance:an,move:Se,stopRoute:Yt,closeSheet:Rt,get animTime(){return x},render:()=>{rn(.016),I.render(x),Nt(),Ft(),Zt(),qt(),It(i("minimap"))}},rn(.016),I.render(0),i("loading").classList.add("hidden"),i("hud").classList.remove("hidden"),i("welcome").classList.remove("hidden"),requestAnimationFrame(qn),i("scene").addEventListener("webglcontextlost",D=>{D.preventDefault(),b.paused=!0,Z("描画が停止しました。ページを再読み込みすると再開できます。",3e4)})}catch(D){console.error(D),i("loading").innerHTML='<div class="loading-inner"><span class="eyebrow">3D表示を開始できませんでした</span><h1 style="font-size:26px">ブース情報は読めます。</h1><p>'+t(D.message)+'</p><p>WebGL 2対応のChrome・Edge・Safariで、このHTMLをブラウザとして開くと3D表示を利用できます。端末のグラフィックアクセラレーション設定も影響します。</p><button id="fallbackList" class="primary">参加団体一覧を読む</button><button id="fallbackPlan" class="secondary" style="margin-top:10px">配置図を見る</button></div>',i("fallbackList").onclick=()=>{_t(),i("sheet").style.zIndex=110,i("sheetScrim").style.zIndex=109},i("fallbackPlan").onclick=()=>{let nt=window.open();if(nt){nt.document.title="会場配置図";let it=nt.document.createElement("img");it.src="./assets/venue-map.svg",it.style.maxWidth="100%",nt.document.body.appendChild(it)}},window.__FESTA_TEST__={ready:!1,error:D.message}}})();})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
