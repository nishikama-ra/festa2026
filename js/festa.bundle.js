(()=>{var eu=0,hc=1,nu=2;var gs=1,iu=2,er=3,es=0,Bn=1,si=2,Ti=0,nr=1,uc=2,dc=3,fc=4,su=5;var xs=100,ru=101,au=102,ou=103,lu=104,cu=200,hu=201,uu=202,du=203,pc=204,mc=205,fu=206,pu=207,mu=208,gu=209,xu=210,_u=211,yu=212,vu=213,Mu=214,Va=0,Ga=1,Ha=2,Hs=3,Wa=4,Xa=5,qa=6,Ya=7,gc=0,bu=1,Su=2,pi=0,xc=1,_c=2,yc=3,jr=4,vc=5,Mc=6,bc=7;var Sc=300,ns=301,_s=302,xo=303,_o=304,Qr=306,Ws=1e3,vi=1001,Za=1002,Tn=1003,wu=1004;var ta=1005;var vn=1006,yo=1007;var Ei=1008;var qn=1009,wc=1010,Tc=1011,ir=1012,vo=1013,mi=1014,ai=1015,gi=1016,Mo=1017,bo=1018,sr=1020,Ec=35902,Ac=35899,Cc=1021,Rc=1022,oi=1023,Mi=1026,is=1027,So=1028,wo=1029,ss=1030,To=1031;var Eo=1033,ea=33776,na=33777,ia=33778,sa=33779,Ao=35840,Co=35841,Ro=35842,Io=35843,Po=36196,Lo=37492,Do=37496,No=37488,Uo=37489,ra=37490,Fo=37491,Oo=37808,Bo=37809,ko=37810,zo=37811,Vo=37812,Go=37813,Ho=37814,Wo=37815,Xo=37816,qo=37817,Yo=37818,Zo=37819,Jo=37820,$o=37821,Ko=36492,jo=36494,Qo=36495,tl=36283,el=36284,aa=36285,nl=36286;var Ar=2300,Ja=2301,ka=2302,nc=2303,ic=2400,sc=2401,rc=2402;var Tu=3200,Ic=3201;var il=0,Eu=1,ki="",An="srgb",Cr="srgb-linear",Rr="linear",en="srgb";var za=7680;var Au=519,Cu=512,Ru=513,Iu=514,sl=515,Pu=516,Lu=517,rl=518,Du=519,Pc=35044,al=35048;var oa="300 es",fi=2e3,Xs=2001;function sf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function rf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ir(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Nu(){let i=Ir("canvas");return i.style.display="block",i}var Ih={},qs=null;function Pr(...i){let t="THREE."+i.shift();qs?qs("log",t,...i):console.log(t,...i)}function Uu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Te(...i){i=Uu(i);let t="THREE."+i.shift();if(qs)qs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function we(...i){i=Uu(i);let t="THREE."+i.shift();if(qs)qs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function fs(...i){let t=i.join(" ");t in Ih||(Ih[t]=!0,Te(...i))}function Fu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Ou={[Va]:Ga,[Ha]:qa,[Wa]:Ya,[Hs]:Xa,[Ga]:Va,[qa]:Ha,[Ya]:Wa,[Xa]:Hs},bi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,l=s.length;r<l;r++)s[r].call(this,t);t.target=null}}},Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Dl=Math.PI/180,$a=180/Math.PI;function Zi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rn[i&255]+Rn[i>>8&255]+Rn[i>>16&255]+Rn[i>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[e&63|128]+Rn[e>>8&255]+"-"+Rn[e>>16&255]+Rn[e>>24&255]+Rn[n&255]+Rn[n>>8&255]+Rn[n>>16&255]+Rn[n>>24&255]).toLowerCase()}function Xe(i,t,e){return Math.max(t,Math.min(e,i))}function af(i,t){return(i%t+t)%t}function Nl(i,t,e){return(1-e)*i+e*t}function yi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ln(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Fc=class Fc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Xe(this.x,t.x,e.x),this.y=Xe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Xe(this.x,t,e),this.y=Xe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,l=this.y-t.y;return this.x=r*n-l*s+t.x,this.y=r*s+l*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Fc.prototype.isVector2=!0;var Be=Fc,Si=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,l,o){let u=n[s+0],h=n[s+1],p=n[s+2],_=n[s+3],m=r[l+0],E=r[l+1],M=r[l+2],P=r[l+3];if(_!==P||u!==m||h!==E||p!==M){let A=u*m+h*E+p*M+_*P;A<0&&(m=-m,E=-E,M=-M,P=-P,A=-A);let d=1-o;if(A<.9995){let C=Math.acos(A),I=Math.sin(C);d=Math.sin(d*C)/I,o=Math.sin(o*C)/I,u=u*d+m*o,h=h*d+E*o,p=p*d+M*o,_=_*d+P*o}else{u=u*d+m*o,h=h*d+E*o,p=p*d+M*o,_=_*d+P*o;let C=1/Math.sqrt(u*u+h*h+p*p+_*_);u*=C,h*=C,p*=C,_*=C}}t[e]=u,t[e+1]=h,t[e+2]=p,t[e+3]=_}static multiplyQuaternionsFlat(t,e,n,s,r,l){let o=n[s],u=n[s+1],h=n[s+2],p=n[s+3],_=r[l],m=r[l+1],E=r[l+2],M=r[l+3];return t[e]=o*M+p*_+u*E-h*m,t[e+1]=u*M+p*m+h*_-o*E,t[e+2]=h*M+p*E+o*m-u*_,t[e+3]=p*M-o*_-u*m-h*E,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,l=t._order,o=Math.cos,u=Math.sin,h=o(n/2),p=o(s/2),_=o(r/2),m=u(n/2),E=u(s/2),M=u(r/2);switch(l){case"XYZ":this._x=m*p*_+h*E*M,this._y=h*E*_-m*p*M,this._z=h*p*M+m*E*_,this._w=h*p*_-m*E*M;break;case"YXZ":this._x=m*p*_+h*E*M,this._y=h*E*_-m*p*M,this._z=h*p*M-m*E*_,this._w=h*p*_+m*E*M;break;case"ZXY":this._x=m*p*_-h*E*M,this._y=h*E*_+m*p*M,this._z=h*p*M+m*E*_,this._w=h*p*_-m*E*M;break;case"ZYX":this._x=m*p*_-h*E*M,this._y=h*E*_+m*p*M,this._z=h*p*M-m*E*_,this._w=h*p*_+m*E*M;break;case"YZX":this._x=m*p*_+h*E*M,this._y=h*E*_+m*p*M,this._z=h*p*M-m*E*_,this._w=h*p*_-m*E*M;break;case"XZY":this._x=m*p*_-h*E*M,this._y=h*E*_-m*p*M,this._z=h*p*M+m*E*_,this._w=h*p*_+m*E*M;break;default:Te("Quaternion: .setFromEuler() encountered an unknown order: "+l)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],l=e[1],o=e[5],u=e[9],h=e[2],p=e[6],_=e[10],m=n+o+_;if(m>0){let E=.5/Math.sqrt(m+1);this._w=.25/E,this._x=(p-u)*E,this._y=(r-h)*E,this._z=(l-s)*E}else if(n>o&&n>_){let E=2*Math.sqrt(1+n-o-_);this._w=(p-u)/E,this._x=.25*E,this._y=(s+l)/E,this._z=(r+h)/E}else if(o>_){let E=2*Math.sqrt(1+o-n-_);this._w=(r-h)/E,this._x=(s+l)/E,this._y=.25*E,this._z=(u+p)/E}else{let E=2*Math.sqrt(1+_-n-o);this._w=(l-s)/E,this._x=(r+h)/E,this._y=(u+p)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,l=t._w,o=e._x,u=e._y,h=e._z,p=e._w;return this._x=n*p+l*o+s*h-r*u,this._y=s*p+l*u+r*o-n*h,this._z=r*p+l*h+n*u-s*o,this._w=l*p-n*o-s*u-r*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,l=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,l=-l,o=-o);let u=1-e;if(o<.9995){let h=Math.acos(o),p=Math.sin(h);u=Math.sin(u*h)/p,e=Math.sin(e*h)/p,this._x=this._x*u+n*e,this._y=this._y*u+s*e,this._z=this._z*u+r*e,this._w=this._w*u+l*e,this._onChangeCallback()}else this._x=this._x*u+n*e,this._y=this._y*u+s*e,this._z=this._z*u+r*e,this._w=this._w*u+l*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Oc=class Oc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ph.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ph.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,l=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*l,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*l,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*l,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,l=t.y,o=t.z,u=t.w,h=2*(l*s-o*n),p=2*(o*e-r*s),_=2*(r*n-l*e);return this.x=e+u*h+l*_-o*p,this.y=n+u*p+o*h-r*_,this.z=s+u*_+r*p-l*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Xe(this.x,t.x,e.x),this.y=Xe(this.y,t.y,e.y),this.z=Xe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Xe(this.x,t,e),this.y=Xe(this.y,t,e),this.z=Xe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,l=e.x,o=e.y,u=e.z;return this.x=s*u-r*o,this.y=r*l-n*u,this.z=n*o-s*l,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ul.copy(this).projectOnVector(t),this.sub(Ul)}reflect(t){return this.sub(Ul.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Oc.prototype.isVector3=!0;var lt=Oc,Ul=new lt,Ph=new Si,Bc=class Bc{constructor(t,e,n,s,r,l,o,u,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,l,o,u,h)}set(t,e,n,s,r,l,o,u,h){let p=this.elements;return p[0]=t,p[1]=s,p[2]=o,p[3]=e,p[4]=r,p[5]=u,p[6]=n,p[7]=l,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,l=n[0],o=n[3],u=n[6],h=n[1],p=n[4],_=n[7],m=n[2],E=n[5],M=n[8],P=s[0],A=s[3],d=s[6],C=s[1],I=s[4],x=s[7],R=s[2],T=s[5],F=s[8];return r[0]=l*P+o*C+u*R,r[3]=l*A+o*I+u*T,r[6]=l*d+o*x+u*F,r[1]=h*P+p*C+_*R,r[4]=h*A+p*I+_*T,r[7]=h*d+p*x+_*F,r[2]=m*P+E*C+M*R,r[5]=m*A+E*I+M*T,r[8]=m*d+E*x+M*F,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],l=t[4],o=t[5],u=t[6],h=t[7],p=t[8];return e*l*p-e*o*h-n*r*p+n*o*u+s*r*h-s*l*u}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],l=t[4],o=t[5],u=t[6],h=t[7],p=t[8],_=p*l-o*h,m=o*u-p*r,E=h*r-l*u,M=e*_+n*m+s*E;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);let P=1/M;return t[0]=_*P,t[1]=(s*h-p*n)*P,t[2]=(o*n-s*l)*P,t[3]=m*P,t[4]=(p*e-s*u)*P,t[5]=(s*r-o*e)*P,t[6]=E*P,t[7]=(n*u-h*e)*P,t[8]=(l*e-n*r)*P,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,l,o){let u=Math.cos(r),h=Math.sin(r);return this.set(n*u,n*h,-n*(u*l+h*o)+l+t,-s*h,s*u,-s*(-h*l+u*o)+o+e,0,0,1),this}scale(t,e){return fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Fl.makeScale(t,e)),this}rotate(t){return fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Fl.makeRotation(-t)),this}translate(t,e){return fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Fl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Bc.prototype.isMatrix3=!0;var Ce=Bc,Fl=new Ce,Lh=new Ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dh=new Ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function of(){let i={enabled:!0,workingColorSpace:Cr,spaces:{},convert:function(s,r,l){return this.enabled===!1||r===l||!r||!l||(this.spaces[r].transfer===en&&(s.r=Oi(s.r),s.g=Oi(s.g),s.b=Oi(s.b)),this.spaces[r].primaries!==this.spaces[l].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===en&&(s.r=Gs(s.r),s.g=Gs(s.g),s.b=Gs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ki?Rr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,l){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return fs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return fs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Cr]:{primaries:t,whitePoint:n,transfer:Rr,toXYZ:Lh,fromXYZ:Dh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:t,whitePoint:n,transfer:en,toXYZ:Lh,fromXYZ:Dh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),i}var Ve=of();function Oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Cs,Ka=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Cs===void 0&&(Cs=Ir("canvas")),Cs.width=t.width,Cs.height=t.height;let s=Cs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Cs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ir("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let l=0;l<r.length;l++)r[l]=Oi(r[l]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Oi(e[n]/255)*255):e[n]=Oi(e[n]);return{data:e,width:t.width,height:t.height}}else return Te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},lf=0,Ys=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=Zi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let l=0,o=s.length;l<o;l++)s[l].isDataTexture?r.push(Ol(s[l].image)):r.push(Ol(s[l]))}else r=Ol(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ol(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ka.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Te("Texture: Unable to serialize Texture."),{})}var cf=0,Bl=new lt,Wn=class i extends bi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=vi,s=vi,r=vn,l=Ei,o=oi,u=qn,h=i.DEFAULT_ANISOTROPY,p=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=Zi(),this.name="",this.source=new Ys(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=l,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=u,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Bl).x}get height(){return this.source.getSize(Bl).y}get depth(){return this.source.getSize(Bl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Te(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Te(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ws:t.x=t.x-Math.floor(t.x);break;case vi:t.x=t.x<0?0:1;break;case Za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ws:t.y=t.y-Math.floor(t.y);break;case vi:t.y=t.y<0?0:1;break;case Za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=Sc;Wn.DEFAULT_ANISOTROPY=1;var kc=class kc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,l=t.elements;return this.x=l[0]*e+l[4]*n+l[8]*s+l[12]*r,this.y=l[1]*e+l[5]*n+l[9]*s+l[13]*r,this.z=l[2]*e+l[6]*n+l[10]*s+l[14]*r,this.w=l[3]*e+l[7]*n+l[11]*s+l[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,u=t.elements,h=u[0],p=u[4],_=u[8],m=u[1],E=u[5],M=u[9],P=u[2],A=u[6],d=u[10];if(Math.abs(p-m)<.01&&Math.abs(_-P)<.01&&Math.abs(M-A)<.01){if(Math.abs(p+m)<.1&&Math.abs(_+P)<.1&&Math.abs(M+A)<.1&&Math.abs(h+E+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let I=(h+1)/2,x=(E+1)/2,R=(d+1)/2,T=(p+m)/4,F=(_+P)/4,y=(M+A)/4;return I>x&&I>R?I<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(I),s=T/n,r=F/n):x>R?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=T/s,r=y/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=F/r,s=y/r),this.set(n,s,r,e),this}let C=Math.sqrt((A-M)*(A-M)+(_-P)*(_-P)+(m-p)*(m-p));return Math.abs(C)<.001&&(C=1),this.x=(A-M)/C,this.y=(_-P)/C,this.z=(m-p)/C,this.w=Math.acos((h+E+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Xe(this.x,t.x,e.x),this.y=Xe(this.y,t.y,e.y),this.z=Xe(this.z,t.z,e.z),this.w=Xe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Xe(this.x,t,e),this.y=Xe(this.y,t,e),this.z=Xe(this.z,t,e),this.w=Xe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};kc.prototype.isVector4=!0;var pn=kc,ja=class extends bi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new pn(0,0,t,e),this.scissorTest=!1,this.viewport=new pn(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Wn(s),l=n.count;for(let o=0;o<l;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:vn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ys(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xn=class extends ja{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ps=class extends Wn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qa=class extends Wn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var go=class go{constructor(t,e,n,s,r,l,o,u,h,p,_,m,E,M,P,A){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,l,o,u,h,p,_,m,E,M,P,A)}set(t,e,n,s,r,l,o,u,h,p,_,m,E,M,P,A){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=l,d[9]=o,d[13]=u,d[2]=h,d[6]=p,d[10]=_,d[14]=m,d[3]=E,d[7]=M,d[11]=P,d[15]=A,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new go().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Rs.setFromMatrixColumn(t,0).length(),r=1/Rs.setFromMatrixColumn(t,1).length(),l=1/Rs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*l,e[9]=n[9]*l,e[10]=n[10]*l,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,l=Math.cos(n),o=Math.sin(n),u=Math.cos(s),h=Math.sin(s),p=Math.cos(r),_=Math.sin(r);if(t.order==="XYZ"){let m=l*p,E=l*_,M=o*p,P=o*_;e[0]=u*p,e[4]=-u*_,e[8]=h,e[1]=E+M*h,e[5]=m-P*h,e[9]=-o*u,e[2]=P-m*h,e[6]=M+E*h,e[10]=l*u}else if(t.order==="YXZ"){let m=u*p,E=u*_,M=h*p,P=h*_;e[0]=m+P*o,e[4]=M*o-E,e[8]=l*h,e[1]=l*_,e[5]=l*p,e[9]=-o,e[2]=E*o-M,e[6]=P+m*o,e[10]=l*u}else if(t.order==="ZXY"){let m=u*p,E=u*_,M=h*p,P=h*_;e[0]=m-P*o,e[4]=-l*_,e[8]=M+E*o,e[1]=E+M*o,e[5]=l*p,e[9]=P-m*o,e[2]=-l*h,e[6]=o,e[10]=l*u}else if(t.order==="ZYX"){let m=l*p,E=l*_,M=o*p,P=o*_;e[0]=u*p,e[4]=M*h-E,e[8]=m*h+P,e[1]=u*_,e[5]=P*h+m,e[9]=E*h-M,e[2]=-h,e[6]=o*u,e[10]=l*u}else if(t.order==="YZX"){let m=l*u,E=l*h,M=o*u,P=o*h;e[0]=u*p,e[4]=P-m*_,e[8]=M*_+E,e[1]=_,e[5]=l*p,e[9]=-o*p,e[2]=-h*p,e[6]=E*_+M,e[10]=m-P*_}else if(t.order==="XZY"){let m=l*u,E=l*h,M=o*u,P=o*h;e[0]=u*p,e[4]=-_,e[8]=h*p,e[1]=m*_+P,e[5]=l*p,e[9]=E*_-M,e[2]=M*_-E,e[6]=o*p,e[10]=P*_+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hf,t,uf)}lookAt(t,e,n){let s=this.elements;return jn.subVectors(t,e),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),Gi.crossVectors(n,jn),Gi.lengthSq()===0&&(Math.abs(n.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),Gi.crossVectors(n,jn)),Gi.normalize(),ya.crossVectors(jn,Gi),s[0]=Gi.x,s[4]=ya.x,s[8]=jn.x,s[1]=Gi.y,s[5]=ya.y,s[9]=jn.y,s[2]=Gi.z,s[6]=ya.z,s[10]=jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,l=n[0],o=n[4],u=n[8],h=n[12],p=n[1],_=n[5],m=n[9],E=n[13],M=n[2],P=n[6],A=n[10],d=n[14],C=n[3],I=n[7],x=n[11],R=n[15],T=s[0],F=s[4],y=s[8],N=s[12],H=s[1],Y=s[5],b=s[9],$=s[13],X=s[2],J=s[6],ut=s[10],dt=s[14],wt=s[3],ot=s[7],nt=s[11],v=s[15];return r[0]=l*T+o*H+u*X+h*wt,r[4]=l*F+o*Y+u*J+h*ot,r[8]=l*y+o*b+u*ut+h*nt,r[12]=l*N+o*$+u*dt+h*v,r[1]=p*T+_*H+m*X+E*wt,r[5]=p*F+_*Y+m*J+E*ot,r[9]=p*y+_*b+m*ut+E*nt,r[13]=p*N+_*$+m*dt+E*v,r[2]=M*T+P*H+A*X+d*wt,r[6]=M*F+P*Y+A*J+d*ot,r[10]=M*y+P*b+A*ut+d*nt,r[14]=M*N+P*$+A*dt+d*v,r[3]=C*T+I*H+x*X+R*wt,r[7]=C*F+I*Y+x*J+R*ot,r[11]=C*y+I*b+x*ut+R*nt,r[15]=C*N+I*$+x*dt+R*v,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],l=t[1],o=t[5],u=t[9],h=t[13],p=t[2],_=t[6],m=t[10],E=t[14],M=t[3],P=t[7],A=t[11],d=t[15],C=u*E-h*m,I=o*E-h*_,x=o*m-u*_,R=l*E-h*p,T=l*m-u*p,F=l*_-o*p;return e*(P*C-A*I+d*x)-n*(M*C-A*R+d*T)+s*(M*I-P*R+d*F)-r*(M*x-P*T+A*F)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],l=t[5],o=t[9],u=t[2],h=t[6],p=t[10];return e*(l*p-o*h)-n*(r*p-o*u)+s*(r*h-l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],l=t[4],o=t[5],u=t[6],h=t[7],p=t[8],_=t[9],m=t[10],E=t[11],M=t[12],P=t[13],A=t[14],d=t[15],C=e*o-n*l,I=e*u-s*l,x=e*h-r*l,R=n*u-s*o,T=n*h-r*o,F=s*h-r*u,y=p*P-_*M,N=p*A-m*M,H=p*d-E*M,Y=_*A-m*P,b=_*d-E*P,$=m*d-E*A,X=C*$-I*b+x*Y+R*H-T*N+F*y;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let J=1/X;return t[0]=(o*$-u*b+h*Y)*J,t[1]=(s*b-n*$-r*Y)*J,t[2]=(P*F-A*T+d*R)*J,t[3]=(m*T-_*F-E*R)*J,t[4]=(u*H-l*$-h*N)*J,t[5]=(e*$-s*H+r*N)*J,t[6]=(A*x-M*F-d*I)*J,t[7]=(p*F-m*x+E*I)*J,t[8]=(l*b-o*H+h*y)*J,t[9]=(n*H-e*b-r*y)*J,t[10]=(M*T-P*x+d*C)*J,t[11]=(_*x-p*T-E*C)*J,t[12]=(o*N-l*Y-u*y)*J,t[13]=(e*Y-n*N+s*y)*J,t[14]=(P*I-M*R-A*C)*J,t[15]=(p*R-_*I+m*C)*J,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,l=t.x,o=t.y,u=t.z,h=r*l,p=r*o;return this.set(h*l+n,h*o-s*u,h*u+s*o,0,h*o+s*u,p*o+n,p*u-s*l,0,h*u-s*o,p*u+s*l,r*u*u+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,l){return this.set(1,n,r,0,t,1,l,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,l=e._y,o=e._z,u=e._w,h=r+r,p=l+l,_=o+o,m=r*h,E=r*p,M=r*_,P=l*p,A=l*_,d=o*_,C=u*h,I=u*p,x=u*_,R=n.x,T=n.y,F=n.z;return s[0]=(1-(P+d))*R,s[1]=(E+x)*R,s[2]=(M-I)*R,s[3]=0,s[4]=(E-x)*T,s[5]=(1-(m+d))*T,s[6]=(A+C)*T,s[7]=0,s[8]=(M+I)*F,s[9]=(A-C)*F,s[10]=(1-(m+P))*F,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let l=Rs.set(s[0],s[1],s[2]).length(),o=Rs.set(s[4],s[5],s[6]).length(),u=Rs.set(s[8],s[9],s[10]).length();r<0&&(l=-l),hi.copy(this);let h=1/l,p=1/o,_=1/u;return hi.elements[0]*=h,hi.elements[1]*=h,hi.elements[2]*=h,hi.elements[4]*=p,hi.elements[5]*=p,hi.elements[6]*=p,hi.elements[8]*=_,hi.elements[9]*=_,hi.elements[10]*=_,e.setFromRotationMatrix(hi),n.x=l,n.y=o,n.z=u,this}makePerspective(t,e,n,s,r,l,o=fi,u=!1){let h=this.elements,p=2*r/(e-t),_=2*r/(n-s),m=(e+t)/(e-t),E=(n+s)/(n-s),M,P;if(u)M=r/(l-r),P=l*r/(l-r);else if(o===fi)M=-(l+r)/(l-r),P=-2*l*r/(l-r);else if(o===Xs)M=-l/(l-r),P=-l*r/(l-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=p,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=_,h[9]=E,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=P,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,l,o=fi,u=!1){let h=this.elements,p=2/(e-t),_=2/(n-s),m=-(e+t)/(e-t),E=-(n+s)/(n-s),M,P;if(u)M=1/(l-r),P=l/(l-r);else if(o===fi)M=-2/(l-r),P=-(l+r)/(l-r);else if(o===Xs)M=-1/(l-r),P=-r/(l-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=p,h[4]=0,h[8]=0,h[12]=m,h[1]=0,h[5]=_,h[9]=0,h[13]=E,h[2]=0,h[6]=0,h[10]=M,h[14]=P,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};go.prototype.isMatrix4=!0;var $e=go,Rs=new lt,hi=new $e,hf=new lt(0,0,0),uf=new lt(1,1,1),Gi=new lt,ya=new lt,jn=new lt,Nh=new $e,Uh=new Si,Bi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],l=s[4],o=s[8],u=s[1],h=s[5],p=s[9],_=s[2],m=s[6],E=s[10];switch(e){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-p,E),this._z=Math.atan2(-l,r)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(o,E),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-_,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-_,E),this._z=Math.atan2(-l,h)):(this._y=0,this._z=Math.atan2(u,r));break;case"ZYX":this._y=Math.asin(-Xe(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(m,E),this._z=Math.atan2(u,r)):(this._x=0,this._z=Math.atan2(-l,h));break;case"YZX":this._z=Math.asin(Xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-_,r)):(this._x=0,this._y=Math.atan2(o,E));break;case"XZY":this._z=Math.asin(-Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-p,E),this._y=0);break;default:Te("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Nh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Uh.setFromEuler(this),this.setFromQuaternion(Uh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bi.DEFAULT_ORDER="XYZ";var Zs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},df=0,Fh=new lt,Is=new Si,Li=new $e,va=new lt,Mr=new lt,ff=new lt,pf=new Si,Oh=new lt(1,0,0),Bh=new lt(0,1,0),kh=new lt(0,0,1),zh={type:"added"},mf={type:"removed"},Ps={type:"childadded",child:null},kl={type:"childremoved",child:null},Ln=class i extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new lt,e=new Bi,n=new Si,s=new lt(1,1,1);function r(){n.setFromEuler(e,!1)}function l(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $e},normalMatrix:{value:new Ce}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Is.setFromAxisAngle(t,e),this.quaternion.multiply(Is),this}rotateOnWorldAxis(t,e){return Is.setFromAxisAngle(t,e),this.quaternion.premultiply(Is),this}rotateX(t){return this.rotateOnAxis(Oh,t)}rotateY(t){return this.rotateOnAxis(Bh,t)}rotateZ(t){return this.rotateOnAxis(kh,t)}translateOnAxis(t,e){return Fh.copy(t).applyQuaternion(this.quaternion),this.position.add(Fh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Oh,t)}translateY(t){return this.translateOnAxis(Bh,t)}translateZ(t){return this.translateOnAxis(kh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?va.copy(t):va.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Mr,va,this.up):Li.lookAt(va,Mr,this.up),this.quaternion.setFromRotationMatrix(Li),s&&(Li.extractRotation(s.matrixWorld),Is.setFromRotationMatrix(Li),this.quaternion.premultiply(Is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(we("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zh),Ps.child=t,this.dispatchEvent(Ps),Ps.child=null):we("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(mf),kl.child=t,this.dispatchEvent(kl),kl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Li.multiply(t.parent.matrixWorld)),t.applyMatrix4(Li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zh),Ps.child=t,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let l=this.children[n].getObjectByProperty(t,e);if(l!==void 0)return l}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,l=s.length;r<l;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,t,ff),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,pf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let l=0,o=r.length;l<o;l++)r[l].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,u){return o[u.uuid]===void 0&&(o[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let u=o.shapes;if(Array.isArray(u))for(let h=0,p=u.length;h<p;h++){let _=u[h];r(t.shapes,_)}else r(t.shapes,u)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let u=0,h=this.material.length;u<h;u++)o.push(r(t.materials,this.material[u]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let u=this.animations[o];s.animations.push(r(t.animations,u))}}if(e){let o=l(t.geometries),u=l(t.materials),h=l(t.textures),p=l(t.images),_=l(t.shapes),m=l(t.skeletons),E=l(t.animations),M=l(t.nodes);o.length>0&&(n.geometries=o),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),p.length>0&&(n.images=p),_.length>0&&(n.shapes=_),m.length>0&&(n.skeletons=m),E.length>0&&(n.animations=E),M.length>0&&(n.nodes=M)}return n.object=s,n;function l(o){let u=[];for(let h in o){let p=o[h];delete p.metadata,u.push(p)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ln.DEFAULT_UP=new lt(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ds=class extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}},gf={type:"move"},Js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ds,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ds,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new lt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new lt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ds,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new lt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new lt,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,l=null,o=this._targetRay,u=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){l=!0;for(let P of t.hand.values()){let A=e.getJointPose(P,n),d=this._getHandJoint(h,P);A!==null&&(d.matrix.fromArray(A.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=A.radius),d.visible=A!==null}let p=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],m=p.position.distanceTo(_.position),E=.02,M=.005;h.inputState.pinching&&m>E+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&m<=E-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1,u.eventsEnabled&&u.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gf)))}return o!==null&&(o.visible=s!==null),u!==null&&(u.visible=r!==null),h!==null&&(h.visible=l!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ds;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Bu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},Ma={h:0,s:0,l:0};function zl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ne=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=An){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ve.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Ve.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ve.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Ve.workingColorSpace){if(t=af(t,1),e=Xe(e,0,1),n=Xe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,l=2*n-r;this.r=zl(l,r,t+1/3),this.g=zl(l,r,t),this.b=zl(l,r,t-1/3)}return Ve.colorSpaceToWorking(this,s),this}setStyle(t,e=An){function n(r){r!==void 0&&parseFloat(r)<1&&Te("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,l=s[1],o=s[2];switch(l){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Te("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],l=r.length;if(l===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(l===6)return this.setHex(parseInt(r,16),e);Te("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=An){let n=Bu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Te("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Oi(t.r),this.g=Oi(t.g),this.b=Oi(t.b),this}copyLinearToSRGB(t){return this.r=Gs(t.r),this.g=Gs(t.g),this.b=Gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=An){return Ve.workingToColorSpace(In.copy(this),t),Math.round(Xe(In.r*255,0,255))*65536+Math.round(Xe(In.g*255,0,255))*256+Math.round(Xe(In.b*255,0,255))}getHexString(t=An){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ve.workingColorSpace){Ve.workingToColorSpace(In.copy(this),e);let n=In.r,s=In.g,r=In.b,l=Math.max(n,s,r),o=Math.min(n,s,r),u,h,p=(o+l)/2;if(o===l)u=0,h=0;else{let _=l-o;switch(h=p<=.5?_/(l+o):_/(2-l-o),l){case n:u=(s-r)/_+(s<r?6:0);break;case s:u=(r-n)/_+2;break;case r:u=(n-s)/_+4;break}u/=6}return t.h=u,t.s=h,t.l=p,t}getRGB(t,e=Ve.workingColorSpace){return Ve.workingToColorSpace(In.copy(this),e),t.r=In.r,t.g=In.g,t.b=In.b,t}getStyle(t=An){Ve.workingToColorSpace(In.copy(this),t);let e=In.r,n=In.g,s=In.b;return t!==An?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Hi),this.setHSL(Hi.h+t,Hi.s+e,Hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hi),t.getHSL(Ma);let n=Nl(Hi.h,Ma.h,e),s=Nl(Hi.s,Ma.s,e),r=Nl(Hi.l,Ma.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},In=new Ne;Ne.NAMES=Bu;var Lr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ne(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Dr=class extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ui=new lt,Di=new lt,Vl=new lt,Ni=new lt,Ls=new lt,Ds=new lt,Vh=new lt,Gl=new lt,Hl=new lt,Wl=new lt,Xl=new pn,ql=new pn,Yl=new pn,Yi=class i{constructor(t=new lt,e=new lt,n=new lt){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ui.subVectors(t,e),s.cross(ui);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ui.subVectors(s,e),Di.subVectors(n,e),Vl.subVectors(t,e);let l=ui.dot(ui),o=ui.dot(Di),u=ui.dot(Vl),h=Di.dot(Di),p=Di.dot(Vl),_=l*h-o*o;if(_===0)return r.set(0,0,0),null;let m=1/_,E=(h*u-o*p)*m,M=(l*p-o*u)*m;return r.set(1-E-M,M,E)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(t,e,n,s,r,l,o,u){return this.getBarycoord(t,e,n,s,Ni)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(r,Ni.x),u.addScaledVector(l,Ni.y),u.addScaledVector(o,Ni.z),u)}static getInterpolatedAttribute(t,e,n,s,r,l){return Xl.setScalar(0),ql.setScalar(0),Yl.setScalar(0),Xl.fromBufferAttribute(t,e),ql.fromBufferAttribute(t,n),Yl.fromBufferAttribute(t,s),l.setScalar(0),l.addScaledVector(Xl,r.x),l.addScaledVector(ql,r.y),l.addScaledVector(Yl,r.z),l}static isFrontFacing(t,e,n,s){return ui.subVectors(n,e),Di.subVectors(t,e),ui.cross(Di).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ui.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),ui.cross(Di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,l,o;Ls.subVectors(s,n),Ds.subVectors(r,n),Gl.subVectors(t,n);let u=Ls.dot(Gl),h=Ds.dot(Gl);if(u<=0&&h<=0)return e.copy(n);Hl.subVectors(t,s);let p=Ls.dot(Hl),_=Ds.dot(Hl);if(p>=0&&_<=p)return e.copy(s);let m=u*_-p*h;if(m<=0&&u>=0&&p<=0)return l=u/(u-p),e.copy(n).addScaledVector(Ls,l);Wl.subVectors(t,r);let E=Ls.dot(Wl),M=Ds.dot(Wl);if(M>=0&&E<=M)return e.copy(r);let P=E*h-u*M;if(P<=0&&h>=0&&M<=0)return o=h/(h-M),e.copy(n).addScaledVector(Ds,o);let A=p*M-E*_;if(A<=0&&_-p>=0&&E-M>=0)return Vh.subVectors(r,s),o=(_-p)/(_-p+(E-M)),e.copy(s).addScaledVector(Vh,o);let d=1/(A+P+m);return l=P*d,o=m*d,e.copy(n).addScaledVector(Ls,l).addScaledVector(Ds,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},wi=class{constructor(t=new lt(1/0,1/0,1/0),e=new lt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(di.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(di.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=di.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let l=0,o=r.count;l<o;l++)t.isMesh===!0?t.getVertexPosition(l,di):di.fromBufferAttribute(r,l),di.applyMatrix4(t.matrixWorld),this.expandByPoint(di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ba.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ba.copy(n.boundingBox)),ba.applyMatrix4(t.matrixWorld),this.union(ba)}let s=t.children;for(let r=0,l=s.length;r<l;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,di),di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(br),Sa.subVectors(this.max,br),Ns.subVectors(t.a,br),Us.subVectors(t.b,br),Fs.subVectors(t.c,br),Wi.subVectors(Us,Ns),Xi.subVectors(Fs,Us),ls.subVectors(Ns,Fs);let e=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-ls.z,ls.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,ls.z,0,-ls.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-ls.y,ls.x,0];return!Zl(e,Ns,Us,Fs,Sa)||(e=[1,0,0,0,1,0,0,0,1],!Zl(e,Ns,Us,Fs,Sa))?!1:(wa.crossVectors(Wi,Xi),e=[wa.x,wa.y,wa.z],Zl(e,Ns,Us,Fs,Sa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ui=[new lt,new lt,new lt,new lt,new lt,new lt,new lt,new lt],di=new lt,ba=new wi,Ns=new lt,Us=new lt,Fs=new lt,Wi=new lt,Xi=new lt,ls=new lt,br=new lt,Sa=new lt,wa=new lt,cs=new lt;function Zl(i,t,e,n,s){for(let r=0,l=i.length-3;r<=l;r+=3){cs.fromArray(i,r);let o=s.x*Math.abs(cs.x)+s.y*Math.abs(cs.y)+s.z*Math.abs(cs.z),u=t.dot(cs),h=e.dot(cs),p=n.dot(cs);if(Math.max(-Math.max(u,h,p),Math.min(u,h,p))>o)return!1}return!0}var xn=new lt,Ta=new Be,xf=0,Gn=class extends bi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Pc,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ta.fromBufferAttribute(this,e),Ta.applyMatrix3(t),this.setXY(e,Ta.x,Ta.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.applyMatrix3(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.applyMatrix4(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.applyNormalMatrix(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.transformDirection(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=yi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ln(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),s=ln(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),s=ln(s,this.array),r=ln(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Nr=class extends Gn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ur=class extends Gn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Hn=class extends Gn{constructor(t,e,n){super(new Float32Array(t),e,n)}},_f=new wi,Sr=new lt,Jl=new lt,Ji=class{constructor(t=new lt,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):_f.setFromPoints(t).getCenter(n);let s=0;for(let r=0,l=t.length;r<l;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Sr.subVectors(t,this.center);let e=Sr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Sr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Jl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Sr.copy(t.center).add(Jl)),this.expandByPoint(Sr.copy(t.center).sub(Jl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},yf=0,ri=new $e,$l=new Ln,Os=new lt,Qn=new wi,wr=new wi,wn=new lt,ei=class i extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sf(t)?Ur:Nr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ce().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ri.makeRotationFromQuaternion(t),this.applyMatrix4(ri),this}rotateX(t){return ri.makeRotationX(t),this.applyMatrix4(ri),this}rotateY(t){return ri.makeRotationY(t),this.applyMatrix4(ri),this}rotateZ(t){return ri.makeRotationZ(t),this.applyMatrix4(ri),this}translate(t,e,n){return ri.makeTranslation(t,e,n),this.applyMatrix4(ri),this}scale(t,e,n){return ri.makeScale(t,e,n),this.applyMatrix4(ri),this}lookAt(t){return $l.lookAt(t),$l.updateMatrix(),this.applyMatrix4($l.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let l=t[s];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new Hn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){we("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new lt(-1/0,-1/0,-1/0),new lt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Qn.setFromBufferAttribute(r),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&we('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ji);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){we("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new lt,1/0);return}if(t){let n=this.boundingSphere.center;if(Qn.setFromBufferAttribute(t),e)for(let r=0,l=e.length;r<l;r++){let o=e[r];wr.setFromBufferAttribute(o),this.morphTargetsRelative?(wn.addVectors(Qn.min,wr.min),Qn.expandByPoint(wn),wn.addVectors(Qn.max,wr.max),Qn.expandByPoint(wn)):(Qn.expandByPoint(wr.min),Qn.expandByPoint(wr.max))}Qn.getCenter(n);let s=0;for(let r=0,l=t.count;r<l;r++)wn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(wn));if(e)for(let r=0,l=e.length;r<l;r++){let o=e[r],u=this.morphTargetsRelative;for(let h=0,p=o.count;h<p;h++)wn.fromBufferAttribute(o,h),u&&(Os.fromBufferAttribute(t,h),wn.add(Os)),s=Math.max(s,n.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&we('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){we("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,l=this.getAttribute("tangent");(l===void 0||l.count!==n.count)&&(l=new Gn(new Float32Array(4*n.count),4),this.setAttribute("tangent",l));let o=[],u=[];for(let y=0;y<n.count;y++)o[y]=new lt,u[y]=new lt;let h=new lt,p=new lt,_=new lt,m=new Be,E=new Be,M=new Be,P=new lt,A=new lt;function d(y,N,H){h.fromBufferAttribute(n,y),p.fromBufferAttribute(n,N),_.fromBufferAttribute(n,H),m.fromBufferAttribute(r,y),E.fromBufferAttribute(r,N),M.fromBufferAttribute(r,H),p.sub(h),_.sub(h),E.sub(m),M.sub(m);let Y=1/(E.x*M.y-M.x*E.y);isFinite(Y)&&(P.copy(p).multiplyScalar(M.y).addScaledVector(_,-E.y).multiplyScalar(Y),A.copy(_).multiplyScalar(E.x).addScaledVector(p,-M.x).multiplyScalar(Y),o[y].add(P),o[N].add(P),o[H].add(P),u[y].add(A),u[N].add(A),u[H].add(A))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let y=0,N=C.length;y<N;++y){let H=C[y],Y=H.start,b=H.count;for(let $=Y,X=Y+b;$<X;$+=3)d(t.getX($+0),t.getX($+1),t.getX($+2))}let I=new lt,x=new lt,R=new lt,T=new lt;function F(y){R.fromBufferAttribute(s,y),T.copy(R);let N=o[y];I.copy(N),I.sub(R.multiplyScalar(R.dot(N))).normalize(),x.crossVectors(T,N);let Y=x.dot(u[y])<0?-1:1;l.setXYZW(y,I.x,I.y,I.z,Y)}for(let y=0,N=C.length;y<N;++y){let H=C[y],Y=H.start,b=H.count;for(let $=Y,X=Y+b;$<X;$+=3)F(t.getX($+0)),F(t.getX($+1)),F(t.getX($+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Gn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,E=n.count;m<E;m++)n.setXYZ(m,0,0,0);let s=new lt,r=new lt,l=new lt,o=new lt,u=new lt,h=new lt,p=new lt,_=new lt;if(t)for(let m=0,E=t.count;m<E;m+=3){let M=t.getX(m+0),P=t.getX(m+1),A=t.getX(m+2);s.fromBufferAttribute(e,M),r.fromBufferAttribute(e,P),l.fromBufferAttribute(e,A),p.subVectors(l,r),_.subVectors(s,r),p.cross(_),o.fromBufferAttribute(n,M),u.fromBufferAttribute(n,P),h.fromBufferAttribute(n,A),o.add(p),u.add(p),h.add(p),n.setXYZ(M,o.x,o.y,o.z),n.setXYZ(P,u.x,u.y,u.z),n.setXYZ(A,h.x,h.y,h.z)}else for(let m=0,E=e.count;m<E;m+=3)s.fromBufferAttribute(e,m+0),r.fromBufferAttribute(e,m+1),l.fromBufferAttribute(e,m+2),p.subVectors(l,r),_.subVectors(s,r),p.cross(_),n.setXYZ(m+0,p.x,p.y,p.z),n.setXYZ(m+1,p.x,p.y,p.z),n.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)wn.fromBufferAttribute(t,e),wn.normalize(),t.setXYZ(e,wn.x,wn.y,wn.z)}toNonIndexed(){function t(o,u){let h=o.array,p=o.itemSize,_=o.normalized,m=new h.constructor(u.length*p),E=0,M=0;for(let P=0,A=u.length;P<A;P++){o.isInterleavedBufferAttribute?E=u[P]*o.data.stride+o.offset:E=u[P]*p;for(let d=0;d<p;d++)m[M++]=h[E++]}return new Gn(m,p,_)}if(this.index===null)return Te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let u=s[o],h=t(u,n);e.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let u=[],h=r[o];for(let p=0,_=h.length;p<_;p++){let m=h[p],E=t(m,n);u.push(E)}e.morphAttributes[o]=u}e.morphTargetsRelative=this.morphTargetsRelative;let l=this.groups;for(let o=0,u=l.length;o<u;o++){let h=l[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let u=this.parameters;for(let h in u)u[h]!==void 0&&(t[h]=u[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let u in n){let h=n[u];t.data.attributes[u]=h.toJSON(t.data)}let s={},r=!1;for(let u in this.morphAttributes){let h=this.morphAttributes[u],p=[];for(let _=0,m=h.length;_<m;_++){let E=h[_];p.push(E.toJSON(t.data))}p.length>0&&(s[u]=p,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let l=this.groups;l.length>0&&(t.data.groups=JSON.parse(JSON.stringify(l)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let h in s){let p=s[h];this.setAttribute(h,p.clone(e))}let r=t.morphAttributes;for(let h in r){let p=[],_=r[h];for(let m=0,E=_.length;m<E;m++)p.push(_[m].clone(e));this.morphAttributes[h]=p}this.morphTargetsRelative=t.morphTargetsRelative;let l=t.groups;for(let h=0,p=l.length;h<p;h++){let _=l[h];this.addGroup(_.start,_.count,_.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Pc,this.updateRanges=[],this.version=0,this.uuid=Zi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},On=new lt,Or=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)On.fromBufferAttribute(this,e),On.applyMatrix4(t),this.setXYZ(e,On.x,On.y,On.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)On.fromBufferAttribute(this,e),On.applyNormalMatrix(t),this.setXYZ(e,On.x,On.y,On.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)On.fromBufferAttribute(this,e),On.transformDirection(t),this.setXYZ(e,On.x,On.y,On.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=yi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ln(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ln(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ln(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ln(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ln(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=yi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=yi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=yi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=yi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),s=ln(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),s=ln(s,this.array),r=ln(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Pr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Gn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Pr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Kl=new lt,vf=new lt,Mf=new Ce,ti=class{constructor(t=new lt(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Kl.subVectors(n,e).cross(vf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Kl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let l=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(l<0||l>1)?null:e.copy(t.start).addScaledVector(s,l)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Mf.getNormalMatrix(t),s=this.coplanarPoint(Kl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},bf=0,$i=class extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=nr,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pc,this.blendDst=mc,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=za,this.stencilZFail=za,this.stencilZPass=za,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Te(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Te(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let l=[];for(let o in r){let u=r[o];delete u.metadata,l.push(u)}return l}if(e){let r=s(t.textures),l=s(t.images);r.length>0&&(n.textures=r),l.length>0&&(n.images=l)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ne().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ti().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Be().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Be().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Fi=new lt,jl=new lt,Ea=new lt,Aa=new lt,Br=class{constructor(t=new lt,e=new lt(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Fi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fi.copy(this.origin).addScaledVector(this.direction,e),Fi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){jl.copy(t).add(e).multiplyScalar(.5),Ea.copy(e).sub(t).normalize(),Aa.copy(this.origin).sub(jl);let r=t.distanceTo(e)*.5,l=-this.direction.dot(Ea),o=Aa.dot(this.direction),u=-Aa.dot(Ea),h=Aa.lengthSq(),p=Math.abs(1-l*l),_,m,E,M;if(p>0)if(_=l*u-o,m=l*o-u,M=r*p,_>=0)if(m>=-M)if(m<=M){let P=1/p;_*=P,m*=P,E=_*(_+l*m+2*o)+m*(l*_+m+2*u)+h}else m=r,_=Math.max(0,-(l*m+o)),E=-_*_+m*(m+2*u)+h;else m=-r,_=Math.max(0,-(l*m+o)),E=-_*_+m*(m+2*u)+h;else m<=-M?(_=Math.max(0,-(-l*r+o)),m=_>0?-r:Math.min(Math.max(-r,-u),r),E=-_*_+m*(m+2*u)+h):m<=M?(_=0,m=Math.min(Math.max(-r,-u),r),E=m*(m+2*u)+h):(_=Math.max(0,-(l*r+o)),m=_>0?r:Math.min(Math.max(-r,-u),r),E=-_*_+m*(m+2*u)+h);else m=l>0?-r:r,_=Math.max(0,-(l*m+o)),E=-_*_+m*(m+2*u)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,_),s&&s.copy(jl).addScaledVector(Ea,m),E}intersectSphere(t,e){if(t.radius<0)return null;Fi.subVectors(t.center,this.origin);let n=Fi.dot(this.direction),s=Fi.dot(Fi)-n*n,r=t.radius*t.radius;if(s>r)return null;let l=Math.sqrt(r-s),o=n-l,u=n+l;return u<0?null:o<0?this.at(u,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,l,o,u,h=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,m=this.origin;return h>=0?(n=(t.min.x-m.x)*h,s=(t.max.x-m.x)*h):(n=(t.max.x-m.x)*h,s=(t.min.x-m.x)*h),p>=0?(r=(t.min.y-m.y)*p,l=(t.max.y-m.y)*p):(r=(t.max.y-m.y)*p,l=(t.min.y-m.y)*p),n>l||r>s||((r>n||isNaN(n))&&(n=r),(l<s||isNaN(s))&&(s=l),_>=0?(o=(t.min.z-m.z)*_,u=(t.max.z-m.z)*_):(o=(t.max.z-m.z)*_,u=(t.min.z-m.z)*_),n>u||o>s)||((o>n||n!==n)&&(n=o),(u<s||s!==s)&&(s=u),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Fi)!==null}intersectTriangle(t,e,n,s,r){let l=this.origin,o=this.direction,u=o.x,h=o.y,p=o.z,_=t.x-l.x,m=t.y-l.y,E=t.z-l.z,M=e.x-l.x,P=e.y-l.y,A=e.z-l.z,d=n.x-l.x,C=n.y-l.y,I=n.z-l.z,x=Math.abs(u),R=Math.abs(h),T=Math.abs(p),F,y,N,H,Y,b,$,X,J,ut,dt,wt;if(x>=R&&x>=T?(N=u,b=_,J=M,wt=d,u>=0?(F=h,y=p,H=m,Y=E,$=P,X=A,ut=C,dt=I):(F=p,y=h,H=E,Y=m,$=A,X=P,ut=I,dt=C)):R>=T?(N=h,b=m,J=P,wt=C,h>=0?(F=p,y=u,H=E,Y=_,$=A,X=M,ut=I,dt=d):(F=u,y=p,H=_,Y=E,$=M,X=A,ut=d,dt=I)):(N=p,b=E,J=A,wt=I,p>=0?(F=u,y=h,H=_,Y=m,$=M,X=P,ut=d,dt=C):(F=h,y=u,H=m,Y=_,$=P,X=M,ut=C,dt=d)),N===0)return null;let ot=F/N,nt=y/N,v=1/N,qt=H-ot*b,Ht=Y-nt*b,ae=$-ot*J,Z=X-nt*J,Ee=ut-ot*wt,yt=dt-nt*wt,St=Ee*Z-yt*ae,zt=qt*yt-Ht*Ee,jt=ae*Ht-Z*qt;if(s){if(St<0||zt<0||jt<0)return null}else if((St<0||zt<0||jt<0)&&(St>0||zt>0||jt>0))return null;let $t=St+zt+jt;if($t===0)return null;let ve=v*(St*b+zt*J+jt*wt);return($t>0?ve<0:ve>0)?null:this.at(ve/$t,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},kr=class extends $i{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Gh=new $e,hs=new Br,Ca=new Ji,Hh=new lt,Ra=new lt,Ia=new lt,Pa=new lt,Ql=new lt,La=new lt,Wh=new lt,Da=new lt,Dn=class extends Ln{constructor(t=new ei,e=new kr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,l=s.length;r<l;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,l=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){La.set(0,0,0);for(let u=0,h=r.length;u<h;u++){let p=o[u],_=r[u];p!==0&&(Ql.fromBufferAttribute(_,t),l?La.addScaledVector(Ql,p):La.addScaledVector(Ql.sub(e),p))}e.add(La)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ca.copy(n.boundingSphere),Ca.applyMatrix4(r),hs.copy(t.ray).recast(t.near),!(Ca.containsPoint(hs.origin)===!1&&(hs.intersectSphere(Ca,Hh)===null||hs.origin.distanceToSquared(Hh)>(t.far-t.near)**2))&&(Gh.copy(r).invert(),hs.copy(t.ray).applyMatrix4(Gh),!(n.boundingBox!==null&&hs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,hs)))}_computeIntersections(t,e,n){let s,r=this.geometry,l=this.material,o=r.index,u=r.attributes.position,h=r.attributes.uv,p=r.attributes.uv1,_=r.attributes.normal,m=r.groups,E=r.drawRange;if(o!==null)if(Array.isArray(l))for(let M=0,P=m.length;M<P;M++){let A=m[M],d=l[A.materialIndex],C=Math.max(A.start,E.start),I=Math.min(o.count,Math.min(A.start+A.count,E.start+E.count));for(let x=C,R=I;x<R;x+=3){let T=o.getX(x),F=o.getX(x+1),y=o.getX(x+2);s=Na(this,d,t,n,h,p,_,T,F,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=A.materialIndex,e.push(s))}}else{let M=Math.max(0,E.start),P=Math.min(o.count,E.start+E.count);for(let A=M,d=P;A<d;A+=3){let C=o.getX(A),I=o.getX(A+1),x=o.getX(A+2);s=Na(this,l,t,n,h,p,_,C,I,x),s&&(s.faceIndex=Math.floor(A/3),e.push(s))}}else if(u!==void 0)if(Array.isArray(l))for(let M=0,P=m.length;M<P;M++){let A=m[M],d=l[A.materialIndex],C=Math.max(A.start,E.start),I=Math.min(u.count,Math.min(A.start+A.count,E.start+E.count));for(let x=C,R=I;x<R;x+=3){let T=x,F=x+1,y=x+2;s=Na(this,d,t,n,h,p,_,T,F,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=A.materialIndex,e.push(s))}}else{let M=Math.max(0,E.start),P=Math.min(u.count,E.start+E.count);for(let A=M,d=P;A<d;A+=3){let C=A,I=A+1,x=A+2;s=Na(this,l,t,n,h,p,_,C,I,x),s&&(s.faceIndex=Math.floor(A/3),e.push(s))}}}};function Sf(i,t,e,n,s,r,l,o){let u;if(t.side===Bn?u=n.intersectTriangle(l,r,s,!0,o):u=n.intersectTriangle(s,r,l,t.side===es,o),u===null)return null;Da.copy(o),Da.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(Da);return h<e.near||h>e.far?null:{distance:h,point:Da.clone(),object:i}}function Na(i,t,e,n,s,r,l,o,u,h){i.getVertexPosition(o,Ra),i.getVertexPosition(u,Ia),i.getVertexPosition(h,Pa);let p=Sf(i,t,e,n,Ra,Ia,Pa,Wh);if(p){let _=new lt;Yi.getBarycoord(Wh,Ra,Ia,Pa,_),s&&(p.uv=Yi.getInterpolatedAttribute(s,o,u,h,_,new Be)),r&&(p.uv1=Yi.getInterpolatedAttribute(r,o,u,h,_,new Be)),l&&(p.normal=Yi.getInterpolatedAttribute(l,o,u,h,_,new lt),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));let m={a:o,b:u,c:h,normal:new lt,materialIndex:0};Yi.getNormal(Ra,Ia,Pa,m.normal),p.face=m,p.barycoord=_}return p}var zr=class extends Wn{constructor(t=null,e=1,n=1,s,r,l,o,u,h=Tn,p=Tn,_,m){super(null,l,o,u,h,p,s,r,_,m),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ms=class extends Gn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Bs=new $e,Xh=new $e,Ua=[],qh=new wi,wf=new $e,Tr=new Dn,Er=new Ji,Vr=class extends Dn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ms(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,wf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new wi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Bs),qh.copy(t.boundingBox).applyMatrix4(Bs),this.boundingBox.union(qh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ji),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Bs),Er.copy(t.boundingSphere).applyMatrix4(Bs),this.boundingSphere.union(Er)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,l=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[l+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Tr.geometry=this.geometry,Tr.material=this.material,Tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Er.copy(this.boundingSphere),Er.applyMatrix4(n),t.ray.intersectsSphere(Er)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Bs),Xh.multiplyMatrices(n,Bs),Tr.matrixWorld=Xh,Tr.raycast(t,Ua);for(let l=0,o=Ua.length;l<o;l++){let u=Ua[l];u.instanceId=r,u.object=this,e.push(u)}Ua.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ms(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new zr(new Float32Array(s*this.count),s,this.count,So,ai));let r=this.morphTexture.source.data.data,l=0;for(let h=0;h<n.length;h++)l+=n[h];let o=this.geometry.morphTargetsRelative?1:1-l,u=s*t;return r[u]=o,r.set(n,u+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},us=new Ji,Tf=new Be(.5,.5),Fa=new lt,$s=class{constructor(t=new ti,e=new ti,n=new ti,s=new ti,r=new ti,l=new ti){this.planes=[t,e,n,s,r,l]}set(t,e,n,s,r,l){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(l),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fi,n=!1){let s=this.planes,r=t.elements,l=r[0],o=r[1],u=r[2],h=r[3],p=r[4],_=r[5],m=r[6],E=r[7],M=r[8],P=r[9],A=r[10],d=r[11],C=r[12],I=r[13],x=r[14],R=r[15];if(s[0].setComponents(h-l,E-p,d-M,R-C).normalize(),s[1].setComponents(h+l,E+p,d+M,R+C).normalize(),s[2].setComponents(h+o,E+_,d+P,R+I).normalize(),s[3].setComponents(h-o,E-_,d-P,R-I).normalize(),n)s[4].setComponents(u,m,A,x).normalize(),s[5].setComponents(h-u,E-m,d-A,R-x).normalize();else if(s[4].setComponents(h-u,E-m,d-A,R-x).normalize(),e===fi)s[5].setComponents(h+u,E+m,d+A,R+x).normalize();else if(e===Xs)s[5].setComponents(u,m,A,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(t){us.center.set(0,0,0);let e=Tf.distanceTo(t.center);return us.radius=.7071067811865476+e,us.applyMatrix4(t.matrixWorld),this.intersectsSphere(us)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Fa.x=s.normal.x>0?t.max.x:t.min.x,Fa.y=s.normal.y>0?t.max.y:t.min.y,Fa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Fa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Gr=class extends Wn{constructor(t=[],e=ns,n,s,r,l,o,u,h,p){super(t,e,n,s,r,l,o,u,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Ki=class extends Wn{constructor(t,e,n=mi,s,r,l,o=Tn,u=Tn,h,p=Mi,_=1){if(p!==Mi&&p!==is)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let m={width:t,height:e,depth:_};super(m,s,r,l,o,u,p,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ys(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},to=class extends Ki{constructor(t,e=mi,n=ns,s,r,l=Tn,o=Tn,u,h=Mi){let p={width:t,height:t,depth:1},_=[p,p,p,p,p,p];super(t,t,e,n,s,r,l,o,u,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Hr=class extends Wn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ks=class i extends ei{constructor(t=1,e=1,n=1,s=1,r=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:l};let o=this;s=Math.floor(s),r=Math.floor(r),l=Math.floor(l);let u=[],h=[],p=[],_=[],m=0,E=0;M("z","y","x",-1,-1,n,e,t,l,r,0),M("z","y","x",1,-1,n,e,-t,l,r,1),M("x","z","y",1,1,t,n,e,s,l,2),M("x","z","y",1,-1,t,n,-e,s,l,3),M("x","y","z",1,-1,t,e,n,s,r,4),M("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(u),this.setAttribute("position",new Hn(h,3)),this.setAttribute("normal",new Hn(p,3)),this.setAttribute("uv",new Hn(_,2));function M(P,A,d,C,I,x,R,T,F,y,N){let H=x/F,Y=R/y,b=x/2,$=R/2,X=T/2,J=F+1,ut=y+1,dt=0,wt=0,ot=new lt;for(let nt=0;nt<ut;nt++){let v=nt*Y-$;for(let qt=0;qt<J;qt++){let Ht=qt*H-b;ot[P]=Ht*C,ot[A]=v*I,ot[d]=X,h.push(ot.x,ot.y,ot.z),ot[P]=0,ot[A]=0,ot[d]=T>0?1:-1,p.push(ot.x,ot.y,ot.z),_.push(qt/F),_.push(1-nt/y),dt+=1}}for(let nt=0;nt<y;nt++)for(let v=0;v<F;v++){let qt=m+v+J*nt,Ht=m+v+J*(nt+1),ae=m+(v+1)+J*(nt+1),Z=m+(v+1)+J*nt;u.push(qt,Ht,Z),u.push(Ht,ae,Z),wt+=6}o.addGroup(E,wt,N),E+=wt,m+=dt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Wr=class i extends ei{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,l=e/2,o=Math.floor(n),u=Math.floor(s),h=o+1,p=u+1,_=t/o,m=e/u,E=[],M=[],P=[],A=[];for(let d=0;d<p;d++){let C=d*m-l;for(let I=0;I<h;I++){let x=I*_-r;M.push(x,-C,0),P.push(0,0,1),A.push(I/o),A.push(1-d/u)}}for(let d=0;d<u;d++)for(let C=0;C<o;C++){let I=C+h*d,x=C+h*(d+1),R=C+1+h*(d+1),T=C+1+h*d;E.push(I,x,T),E.push(x,R,T)}this.setIndex(E),this.setAttribute("position",new Hn(M,3)),this.setAttribute("normal",new Hn(P,3)),this.setAttribute("uv",new Hn(A,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};function ys(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Yh(s))s.isRenderTargetTexture?(Te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Yh(s[0])){let r=[];for(let l=0,o=s.length;l<o;l++)r[l]=s[l].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Nn(i){let t={};for(let e=0;e<i.length;e++){let n=ys(i[e]);for(let s in n)t[s]=n[s]}return t}function Yh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ef(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Lc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ve.workingColorSpace}var ku={clone:ys,merge:Nn},Af=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ni=class extends $i{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Af,this.fragmentShader=Cf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ys(t.uniforms),this.uniformsGroups=Ef(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let l=this.uniforms[s].value;l&&l.isTexture?e.uniforms[s]={type:"t",value:l.toJSON(t).uuid}:l&&l.isColor?e.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?e.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?e.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?e.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?e.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?e.uniforms[s]={type:"m4",value:l.toArray()}:e.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ne().setHex(s.value);break;case"v2":this.uniforms[n].value=new Be().fromArray(s.value);break;case"v3":this.uniforms[n].value=new lt().fromArray(s.value);break;case"v4":this.uniforms[n].value=new pn().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ce().fromArray(s.value);break;case"m4":this.uniforms[n].value=new $e().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},js=class extends ni{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Xr=class extends $i{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=il,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Qs=class extends $i{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},eo=class extends $i{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ks(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function tc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ji=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let l;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}l=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let u=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(s=r,r=e[--n-1],t>=r)break t}l=n,n=0;break e}break n}for(;n<l;){let o=n+l>>>1;t<e[o]?l=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let l=0;l!==s;++l)e[l]=n[r+l];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},no=class extends ji{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ic,endingEnd:ic}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,l=t+1,o=s[r],u=s[l];if(o===void 0)switch(this.getSettings_().endingStart){case sc:r=t,o=2*e-n;break;case rc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(u===void 0)switch(this.getSettings_().endingEnd){case sc:l=t,u=2*n-e;break;case rc:l=1,u=n+s[1]-s[0];break;default:l=t-1,u=e}let h=(n-e)*.5,p=this.valueSize;this._weightPrev=h/(e-o),this._weightNext=h/(u-n),this._offsetPrev=r*p,this._offsetNext=l*p}interpolate_(t,e,n,s){let r=this.resultBuffer,l=this.sampleValues,o=this.valueSize,u=t*o,h=u-o,p=this._offsetPrev,_=this._offsetNext,m=this._weightPrev,E=this._weightNext,M=(n-e)/(s-e),P=M*M,A=P*M,d=-m*A+2*m*P-m*M,C=(1+m)*A+(-1.5-2*m)*P+(-.5+m)*M+1,I=(-1-E)*A+(1.5+E)*P+.5*M,x=E*A-E*P;for(let R=0;R!==o;++R)r[R]=d*l[p+R]+C*l[h+R]+I*l[u+R]+x*l[_+R];return r}},io=class extends ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,l=this.sampleValues,o=this.valueSize,u=t*o,h=u-o,p=(n-e)/(s-e),_=1-p;for(let m=0;m!==o;++m)r[m]=l[h+m]*_+l[u+m]*p;return r}},so=class extends ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ro=class extends ji{interpolate_(t,e,n,s){let r=this.resultBuffer,l=this.sampleValues,o=this.valueSize,u=t*o,h=u-o,p=this.inTangents,_=this.outTangents;if(!p||!_){let M=(n-e)/(s-e),P=1-M;for(let A=0;A!==o;++A)r[A]=l[h+A]*P+l[u+A]*M;return r}let m=o*2,E=t-1;for(let M=0;M!==o;++M){let P=l[h+M],A=l[u+M],d=E*m+M*2,C=_[d],I=_[d+1],x=t*m+M*2,R=p[x],T=p[x+1],F=If(n,e,C,R,s);r[M]=zu(F,P,I,T,A)}return r}};function zu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Rf(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function If(i,t,e,n,s){let r=(i-t)/(s-t);for(let l=0;l<8;l++){let o=zu(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let u=Rf(r,t,e,n,s);if(Math.abs(u)<1e-10)break;r=Math.max(0,Math.min(1,r-o/u))}return r}var ii=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ks(e,this.TimeBufferType),this.values=ks(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ks(t.times,Array),values:ks(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),tc(t.settings)&&(n.settings={inTangents:ks(t.settings.inTangents,Array),outTangents:ks(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new so(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new io(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new no(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ro(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ar:e=this.InterpolantFactoryMethodDiscrete;break;case Ja:e=this.InterpolantFactoryMethodLinear;break;case ka:e=this.InterpolantFactoryMethodSmooth;break;case nc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Te("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ar;case this.InterpolantFactoryMethodLinear:return Ja;case this.InterpolantFactoryMethodSmooth:return ka;case this.InterpolantFactoryMethodBezier:return nc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;tc(this.settings)&&(Zh(this.settings.inTangents,t),Zh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,l=s-1;for(;r!==s&&n[r]<t;)++r;for(;l!==-1&&n[l]>e;)--l;if(++l,r!==0||l!==s){r>=l&&(l=Math.max(l,1),r=l-1);let o=this.getValueSize();this.times=n.slice(r,l),this.values=this.values.slice(r*o,l*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(we("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(we("KeyframeTrack: Track is empty.",this),t=!1);let l=null;for(let o=0;o!==r;o++){let u=n[o];if(typeof u=="number"&&isNaN(u)){we("KeyframeTrack: Time is not a valid number.",this,o,u),t=!1;break}if(l!==null&&l>u){we("KeyframeTrack: Out of order keys.",this,o,u,l),t=!1;break}l=u}if(s!==void 0&&rf(s))for(let o=0,u=s.length;o!==u;++o){let h=s[o];if(isNaN(h)){we("KeyframeTrack: Value is not a valid number.",this,o,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ka,r=t.length-1,l=1;for(let o=1;o<r;++o){let u=!1,h=t[o],p=t[o+1];if(h!==p&&(o!==1||h!==t[0]))if(s)u=!0;else{let _=o*n,m=_-n,E=_+n;for(let M=0;M!==n;++M){let P=e[_+M];if(P!==e[m+M]||P!==e[E+M]){u=!0;break}}}if(u){if(o!==l){t[l]=t[o];let _=o*n,m=l*n;for(let E=0;E!==n;++E)e[m+E]=e[_+E]}++l}}if(r>0){t[l]=t[r];for(let o=r*n,u=l*n,h=0;h!==n;++h)e[u+h]=e[o+h];++l}return l!==t.length?(this.times=t.slice(0,l),this.values=e.slice(0,l*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,tc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Zh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}ii.prototype.ValueTypeName="";ii.prototype.TimeBufferType=Float32Array;ii.prototype.ValueBufferType=Float32Array;ii.prototype.DefaultInterpolation=Ja;var Qi=class extends ii{constructor(t,e,n){super(t,e,n)}};Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Ar;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var ao=class extends ii{constructor(t,e,n,s){super(t,e,n,s)}};ao.prototype.ValueTypeName="color";var oo=class extends ii{constructor(t,e,n,s){super(t,e,n,s)}};oo.prototype.ValueTypeName="number";var lo=class extends ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,l=this.sampleValues,o=this.valueSize,u=(n-e)/(s-e),h=t*o;for(let p=h+o;h!==p;h+=4)Si.slerpFlat(r,0,l,h-o,l,h,u);return r}},qr=class extends ii{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new lo(this.times,this.values,this.getValueSize(),t)}};qr.prototype.ValueTypeName="quaternion";qr.prototype.InterpolantFactoryMethodSmooth=void 0;var ts=class extends ii{constructor(t,e,n){super(t,e,n)}};ts.prototype.ValueTypeName="string";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Ar;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var co=class extends ii{constructor(t,e,n,s){super(t,e,n,s)}};co.prototype.ValueTypeName="vector";var ho=class{constructor(t,e,n){let s=this,r=!1,l=0,o=0,u,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(p){o++,r===!1&&s.onStart!==void 0&&s.onStart(p,l,o),r=!0},this.itemEnd=function(p){l++,s.onProgress!==void 0&&s.onProgress(p,l,o),l===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return p=p.normalize("NFC"),u?u(p):p},this.setURLModifier=function(p){return u=p,this},this.addHandler=function(p,_){return h.push(p,_),this},this.removeHandler=function(p){let _=h.indexOf(p);return _!==-1&&h.splice(_,2),this},this.getHandler=function(p){for(let _=0,m=h.length;_<m;_+=2){let E=h[_],M=h[_+1];if(E.global&&(E.lastIndex=0),E.test(p))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Vu=new ho,uo=class{constructor(t){this.manager=t!==void 0?t:Vu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};uo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Yr=class extends Ln{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Zr=class extends Yr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},ec=new $e,Jh=new lt,$h=new lt,fo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=qn,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $s,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new pn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Jh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jh),$h.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($h),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){ec.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ec,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,l=s?s.z/r.x:1,o=s?s.w/r.y:1,u=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===Xs||t.reversedDepth?e.set(.5*l,0,0,.5*l+u,0,.5*o,0,.5*o+h,0,0,1,0,0,0,0,1):e.set(.5*l,0,0,.5*l+u,0,.5*o,0,.5*o+h,0,0,.5,.5,0,0,0,1),e.multiply(ec)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Oa=new lt,Ba=new Si,_i=new lt,Jr=class extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Oa,Ba,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oa,Ba,_i.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Oa,Ba,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oa,Ba,_i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},qi=new lt,Kh=new Be,jh=new Be,Pn=class extends Jr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=$a*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Dl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $a*2*Math.atan(Math.tan(Dl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qi.x,qi.y).multiplyScalar(-t/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-t/qi.z)}getViewSize(t,e){return this.getViewBounds(t,Kh,jh),e.subVectors(jh,Kh)}setViewOffset(t,e,n,s,r,l){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Dl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,l=this.view;if(this.view!==null&&this.view.enabled){let u=l.fullWidth,h=l.fullHeight;r+=l.offsetX*s/u,e-=l.offsetY*n/h,s*=l.width/u,n*=l.height/h}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var tr=class extends Jr{constructor(t=-1,e=1,n=1,s=-1,r=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=l,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,l=n+t,o=s+e,u=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,l=r+h*this.view.width,o-=p*this.view.offsetY,u=o-p*this.view.height}this.projectionMatrix.makeOrthographic(r,l,o,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ac=class extends fo{constructor(){super(new tr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$r=class extends Yr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new ac}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var zs=-90,Vs=1,po=class extends Ln{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Pn(zs,Vs,t,e);s.layers=this.layers,this.add(s);let r=new Pn(zs,Vs,t,e);r.layers=this.layers,this.add(r);let l=new Pn(zs,Vs,t,e);l.layers=this.layers,this.add(l);let o=new Pn(zs,Vs,t,e);o.layers=this.layers,this.add(o);let u=new Pn(zs,Vs,t,e);u.layers=this.layers,this.add(u);let h=new Pn(zs,Vs,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,l,o,u]=e;for(let h of e)this.remove(h);if(t===fi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===Xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,l,o,u,h,p]=this.children,_=t.getRenderTarget(),m=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;let P=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let A=!1;t.isWebGLRenderer===!0?A=t.state.buffers.depth.getReversed():A=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),A&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),A&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,2,s),A&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),A&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(n,4,s),A&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.generateMipmaps=P,t.setRenderTarget(n,5,s),A&&t.autoClear===!1&&t.clearDepth(),t.render(e,p),t.setRenderTarget(_,m,E),t.xr.enabled=M,n.texture.needsPMREMUpdate=!0}},mo=class extends Pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Dc="\\[\\]\\.:\\/",Pf=new RegExp("["+Dc+"]","g"),Nc="[^"+Dc+"]",Lf="[^"+Dc.replace("\\.","")+"]",Df=/((?:WC+[\/:])*)/.source.replace("WC",Nc),Nf=/(WCOD+)?/.source.replace("WCOD",Lf),Uf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nc),Ff=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nc),Of=new RegExp("^"+Df+Nf+Uf+Ff+"$"),Bf=["material","materials","bones","map"],oc=class{constructor(t,e,n){let s=n||un.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},un=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Pf,"")}static parseTrackName(t){let e=Of.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Bf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let l=0;l<r.length;l++){let o=r[l];if(o.name===e||o.uuid===e)return o;let u=n(o.children);if(u)return u}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Te("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){we("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){we("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){we("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let p=0;p<t.length;p++)if(t[p].name===h){h=p;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){we("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){we("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){we("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){we("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let l=t[s];if(l===void 0){let h=e.nodeName;we("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){we("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){we("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}u=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=r}else l.fromArray!==void 0&&l.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(u=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=s;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};un.Composite=oc;un.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};un.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};un.prototype.GetterByBindingType=[un.prototype._getValue_direct,un.prototype._getValue_array,un.prototype._getValue_arrayElement,un.prototype._getValue_toArray];un.prototype.SetterByBindingTypeAndVersioning=[[un.prototype._setValue_direct,un.prototype._setValue_direct_setNeedsUpdate,un.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[un.prototype._setValue_array,un.prototype._setValue_array_setNeedsUpdate,un.prototype._setValue_array_setMatrixWorldNeedsUpdate],[un.prototype._setValue_arrayElement,un.prototype._setValue_arrayElement_setNeedsUpdate,un.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[un.prototype._setValue_fromArray,un.prototype._setValue_fromArray_setNeedsUpdate,un.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var L1=new Float32Array(1);var Qh=new $e,Kr=class{constructor(t,e,n=0,s=1/0){this.ray=new Br(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Zs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):we("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Qh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qh),this}intersectObject(t,e=!0,n=[]){return lc(t,this,n,e),n.sort(tu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)lc(t[s],this,n,e);return n.sort(tu),n}};function tu(i,t){return i.distance-t.distance}function lc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let l=0,o=r.length;l<o;l++)lc(r[l],t,e,!0)}}var zc=class zc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};zc.prototype.isMatrix2=!0;var cc=zc;function Uc(i,t,e,n){let s=kf(n);switch(e){case Cc:return i*t;case So:return i*t/s.components*s.byteLength;case wo:return i*t/s.components*s.byteLength;case ss:return i*t*2/s.components*s.byteLength;case To:return i*t*2/s.components*s.byteLength;case Rc:return i*t*3/s.components*s.byteLength;case oi:return i*t*4/s.components*s.byteLength;case Eo:return i*t*4/s.components*s.byteLength;case ea:case na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ia:case sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Co:case Io:return Math.max(i,16)*Math.max(t,8)/4;case Ao:case Ro:return Math.max(i,8)*Math.max(t,8)/2;case Po:case Lo:case No:case Uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Do:case ra:case Fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ko:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case zo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Vo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Go:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Wo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case qo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Zo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Jo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case $o:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ko:case jo:case Qo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case tl:case el:return Math.ceil(i/4)*Math.ceil(t/4)*8;case aa:case nl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function kf(i){switch(i){case qn:case wc:return{byteLength:1,components:1};case ir:case Tc:case gi:return{byteLength:2,components:1};case Mo:case bo:return{byteLength:2,components:4};case mi:case vo:case ai:return{byteLength:4,components:1};case Ec:case Ac:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function cd(){let i=null,t=!1,e=null,n=null;function s(r,l){n=i.requestAnimationFrame(s),e(r,l)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Vf(i){let t=new WeakMap;function e(o,u){let h=o.array,p=o.usage,_=h.byteLength,m=i.createBuffer();i.bindBuffer(u,m),i.bufferData(u,h,p),o.onUploadCallback();let E;if(h instanceof Float32Array)E=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)E=i.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?E=i.HALF_FLOAT:E=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)E=i.SHORT;else if(h instanceof Uint32Array)E=i.UNSIGNED_INT;else if(h instanceof Int32Array)E=i.INT;else if(h instanceof Int8Array)E=i.BYTE;else if(h instanceof Uint8Array)E=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)E=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:E,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:_}}function n(o,u,h){let p=u.array,_=u.updateRanges;if(i.bindBuffer(h,o),_.length===0)i.bufferSubData(h,0,p);else{_.sort((E,M)=>E.start-M.start);let m=0;for(let E=1;E<_.length;E++){let M=_[m],P=_[E];P.start<=M.start+M.count+1?M.count=Math.max(M.count,P.start+P.count-M.start):(++m,_[m]=P)}_.length=m+1;for(let E=0,M=_.length;E<M;E++){let P=_[E];i.bufferSubData(h,P.start*p.BYTES_PER_ELEMENT,p,P.start,P.count)}u.clearUpdateRanges()}u.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let u=t.get(o);u&&(i.deleteBuffer(u.buffer),t.delete(o))}function l(o,u){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let p=t.get(o);(!p||p.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,e(o,u));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,u),h.version=o.version}}return{get:s,remove:r,update:l}}var Gf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hf=`#ifdef USE_ALPHAHASH
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
#endif`,Wf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zf=`#ifdef USE_AOMAP
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
#endif`,Jf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$f=`#ifdef USE_BATCHING
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
#endif`,Kf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ep=`#ifdef USE_IRIDESCENCE
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
#endif`,np=`#ifdef USE_BUMPMAP
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
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,op=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,cp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,up=`#define PI 3.141592653589793
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
} // validated`,dp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fp=`vec3 transformedNormal = objectNormal;
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
#endif`,pp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_p="gl_FragColor = linearToOutputTexel( gl_FragColor );",yp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vp=`#ifdef USE_ENVMAP
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
#endif`,Mp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,bp=`#ifdef USE_ENVMAP
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
#endif`,Sp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wp=`#ifdef USE_ENVMAP
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
#endif`,Tp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ep=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ap=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rp=`#ifdef USE_GRADIENTMAP
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
}`,Ip=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Np=`#ifdef USE_ENVMAP
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
#endif`,Up=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Op=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kp=`PhysicalMaterial material;
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
#endif`,zp=`uniform sampler2D dfgLUT;
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
}`,Vp=`
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
#endif`,Gp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Xp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$p=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jp=`#if defined( USE_POINTS_UV )
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
#endif`,Qp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,t0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,e0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,n0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,i0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s0=`#ifdef USE_MORPHTARGETS
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
#endif`,r0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,o0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,l0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,u0=`#ifdef USE_NORMALMAP
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
#endif`,d0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,f0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,p0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,m0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,x0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,v0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,b0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,w0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,T0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,A0=`float getShadowMask() {
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
}`,C0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,R0=`#ifdef USE_SKINNING
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
#endif`,I0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,P0=`#ifdef USE_SKINNING
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
#endif`,L0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,D0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,N0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,U0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,F0=`#ifdef USE_TRANSMISSION
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
#endif`,O0=`#ifdef USE_TRANSMISSION
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
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,G0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,H0=`uniform sampler2D t2D;
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
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z0=`#include <common>
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
}`,J0=`#if DEPTH_PACKING == 3200
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
}`,$0=`#define DISTANCE
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
}`,K0=`#define DISTANCE
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
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Q0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tm=`uniform float scale;
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
}`,em=`uniform vec3 diffuse;
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
}`,nm=`#include <common>
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
}`,im=`uniform vec3 diffuse;
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
}`,sm=`#define LAMBERT
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
}`,rm=`#define LAMBERT
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
}`,am=`#define MATCAP
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
}`,om=`#define MATCAP
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
}`,lm=`#define NORMAL
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
}`,cm=`#define NORMAL
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
}`,hm=`#define PHONG
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
}`,um=`#define PHONG
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
}`,dm=`#define STANDARD
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
}`,fm=`#define STANDARD
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
}`,pm=`#define TOON
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
}`,mm=`#define TOON
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
}`,gm=`uniform float size;
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
}`,xm=`uniform vec3 diffuse;
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
}`,_m=`#include <common>
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
}`,ym=`uniform vec3 color;
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
}`,vm=`uniform float rotation;
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
}`,Mm=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:Gf,alphahash_pars_fragment:Hf,alphamap_fragment:Wf,alphamap_pars_fragment:Xf,alphatest_fragment:qf,alphatest_pars_fragment:Yf,aomap_fragment:Zf,aomap_pars_fragment:Jf,batching_pars_vertex:$f,batching_vertex:Kf,begin_vertex:jf,beginnormal_vertex:Qf,bsdfs:tp,iridescence_fragment:ep,bumpmap_pars_fragment:np,clipping_planes_fragment:ip,clipping_planes_pars_fragment:sp,clipping_planes_pars_vertex:rp,clipping_planes_vertex:ap,color_fragment:op,color_pars_fragment:lp,color_pars_vertex:cp,color_vertex:hp,common:up,cube_uv_reflection_fragment:dp,defaultnormal_vertex:fp,displacementmap_pars_vertex:pp,displacementmap_vertex:mp,emissivemap_fragment:gp,emissivemap_pars_fragment:xp,colorspace_fragment:_p,colorspace_pars_fragment:yp,envmap_fragment:vp,envmap_common_pars_fragment:Mp,envmap_pars_fragment:bp,envmap_pars_vertex:Sp,envmap_physical_pars_fragment:Np,envmap_vertex:wp,fog_vertex:Tp,fog_pars_vertex:Ep,fog_fragment:Ap,fog_pars_fragment:Cp,gradientmap_pars_fragment:Rp,lightmap_pars_fragment:Ip,lights_lambert_fragment:Pp,lights_lambert_pars_fragment:Lp,lights_pars_begin:Dp,lights_toon_fragment:Up,lights_toon_pars_fragment:Fp,lights_phong_fragment:Op,lights_phong_pars_fragment:Bp,lights_physical_fragment:kp,lights_physical_pars_fragment:zp,lights_fragment_begin:Vp,lights_fragment_maps:Gp,lights_fragment_end:Hp,lightprobes_pars_fragment:Wp,logdepthbuf_fragment:Xp,logdepthbuf_pars_fragment:qp,logdepthbuf_pars_vertex:Yp,logdepthbuf_vertex:Zp,map_fragment:Jp,map_pars_fragment:$p,map_particle_fragment:Kp,map_particle_pars_fragment:jp,metalnessmap_fragment:Qp,metalnessmap_pars_fragment:t0,morphinstance_vertex:e0,morphcolor_vertex:n0,morphnormal_vertex:i0,morphtarget_pars_vertex:s0,morphtarget_vertex:r0,normal_fragment_begin:a0,normal_fragment_maps:o0,normal_pars_fragment:l0,normal_pars_vertex:c0,normal_vertex:h0,normalmap_pars_fragment:u0,clearcoat_normal_fragment_begin:d0,clearcoat_normal_fragment_maps:f0,clearcoat_pars_fragment:p0,iridescence_pars_fragment:m0,opaque_fragment:g0,packing:x0,premultiplied_alpha_fragment:_0,project_vertex:y0,dithering_fragment:v0,dithering_pars_fragment:M0,roughnessmap_fragment:b0,roughnessmap_pars_fragment:S0,shadowmap_pars_fragment:w0,shadowmap_pars_vertex:T0,shadowmap_vertex:E0,shadowmask_pars_fragment:A0,skinbase_vertex:C0,skinning_pars_vertex:R0,skinning_vertex:I0,skinnormal_vertex:P0,specularmap_fragment:L0,specularmap_pars_fragment:D0,tonemapping_fragment:N0,tonemapping_pars_fragment:U0,transmission_fragment:F0,transmission_pars_fragment:O0,uv_pars_fragment:B0,uv_pars_vertex:k0,uv_vertex:z0,worldpos_vertex:V0,background_vert:G0,background_frag:H0,backgroundCube_vert:W0,backgroundCube_frag:X0,cube_vert:q0,cube_frag:Y0,depth_vert:Z0,depth_frag:J0,distance_vert:$0,distance_frag:K0,equirect_vert:j0,equirect_frag:Q0,linedashed_vert:tm,linedashed_frag:em,meshbasic_vert:nm,meshbasic_frag:im,meshlambert_vert:sm,meshlambert_frag:rm,meshmatcap_vert:am,meshmatcap_frag:om,meshnormal_vert:lm,meshnormal_frag:cm,meshphong_vert:hm,meshphong_frag:um,meshphysical_vert:dm,meshphysical_frag:fm,meshtoon_vert:pm,meshtoon_frag:mm,points_vert:gm,points_frag:xm,shadow_vert:_m,shadow_frag:ym,sprite_vert:vm,sprite_frag:Mm},Kt={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ce}},envmap:{envMap:{value:null},envMapRotation:{value:new Ce},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ce},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new lt},probesMax:{value:new lt},probesResolution:{value:new lt}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0},uvTransform:{value:new Ce}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}}},Ci={basic:{uniforms:Nn([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Nn([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,Kt.lights,{emissive:{value:new Ne(0)},envMapIntensity:{value:1}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Nn([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,Kt.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Nn([Kt.common,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.roughnessmap,Kt.metalnessmap,Kt.fog,Kt.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Nn([Kt.common,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.gradientmap,Kt.fog,Kt.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Nn([Kt.common,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Nn([Kt.points,Kt.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Nn([Kt.common,Kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Nn([Kt.common,Kt.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Nn([Kt.common,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Nn([Kt.sprite,Kt.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ce}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distance:{uniforms:Nn([Kt.common,Kt.displacementmap,{referencePosition:{value:new lt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distance_vert,fragmentShader:Ue.distance_frag},shadow:{uniforms:Nn([Kt.lights,Kt.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Ci.physical={uniforms:Nn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ce},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ce},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ce},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ce},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ce},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ce},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ce}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};var ol={r:0,b:0,g:0},bm=new $e,hd=new Ce;hd.set(-1,0,0,0,1,0,0,0,1);function Sm(i,t,e,n,s,r){let l=new Ne(0),o=s===!0?0:1,u,h,p=null,_=0,m=null;function E(C){let I=C.isScene===!0?C.background:null;if(I&&I.isTexture){let x=C.backgroundBlurriness>0;I=t.get(I,x)}return I}function M(C){let I=!1,x=E(C);x===null?A(l,o):x&&x.isColor&&(A(x,1),I=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||I)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function P(C,I){let x=E(I);x&&(x.isCubeTexture||x.mapping===Qr)?(h===void 0&&(h=new Dn(new Ks(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:ys(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(bm.makeRotationFromEuler(I.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(hd),h.material.toneMapped=Ve.getTransfer(x.colorSpace)!==en,(p!==x||_!==x.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,p=x,_=x.version,m=i.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new Dn(new Wr(2,2),new ni({name:"BackgroundMaterial",uniforms:ys(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,u.material.toneMapped=Ve.getTransfer(x.colorSpace)!==en,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(p!==x||_!==x.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,p=x,_=x.version,m=i.toneMapping),u.layers.enableAll(),C.unshift(u,u.geometry,u.material,0,0,null))}function A(C,I){C.getRGB(ol,Lc(i)),e.buffers.color.setClear(ol.r,ol.g,ol.b,I,r)}function d(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return l},setClearColor:function(C,I=1){l.set(C),o=I,A(l,o)},getClearAlpha:function(){return o},setClearAlpha:function(C){o=C,A(l,o)},render:M,addToRenderList:P,dispose:d}}function wm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=m(null),r=s,l=!1;function o(Y,b,$,X,J){let ut=!1,dt=_(Y,X,$,b);r!==dt&&(r=dt,h(r.object)),ut=E(Y,X,$,J),ut&&M(Y,X,$,J),J!==null&&t.update(J,i.ELEMENT_ARRAY_BUFFER),(ut||l)&&(l=!1,x(Y,b,$,X),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function u(){return i.createVertexArray()}function h(Y){return i.bindVertexArray(Y)}function p(Y){return i.deleteVertexArray(Y)}function _(Y,b,$,X){let J=X.wireframe===!0,ut=n[b.id];ut===void 0&&(ut={},n[b.id]=ut);let dt=Y.isInstancedMesh===!0?Y.id:0,wt=ut[dt];wt===void 0&&(wt={},ut[dt]=wt);let ot=wt[$.id];ot===void 0&&(ot={},wt[$.id]=ot);let nt=ot[J];return nt===void 0&&(nt=m(u()),ot[J]=nt),nt}function m(Y){let b=[],$=[],X=[];for(let J=0;J<e;J++)b[J]=0,$[J]=0,X[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:$,attributeDivisors:X,object:Y,attributes:{},index:null}}function E(Y,b,$,X){let J=r.attributes,ut=b.attributes,dt=0,wt=$.getAttributes();for(let ot in wt)if(wt[ot].location>=0){let v=J[ot],qt=ut[ot];if(qt===void 0&&(ot==="instanceMatrix"&&Y.instanceMatrix&&(qt=Y.instanceMatrix),ot==="instanceColor"&&Y.instanceColor&&(qt=Y.instanceColor)),v===void 0||v.attribute!==qt||qt&&v.data!==qt.data)return!0;dt++}return r.attributesNum!==dt||r.index!==X}function M(Y,b,$,X){let J={},ut=b.attributes,dt=0,wt=$.getAttributes();for(let ot in wt)if(wt[ot].location>=0){let v=ut[ot];v===void 0&&(ot==="instanceMatrix"&&Y.instanceMatrix&&(v=Y.instanceMatrix),ot==="instanceColor"&&Y.instanceColor&&(v=Y.instanceColor));let qt={};qt.attribute=v,v&&v.data&&(qt.data=v.data),J[ot]=qt,dt++}r.attributes=J,r.attributesNum=dt,r.index=X}function P(){let Y=r.newAttributes;for(let b=0,$=Y.length;b<$;b++)Y[b]=0}function A(Y){d(Y,0)}function d(Y,b){let $=r.newAttributes,X=r.enabledAttributes,J=r.attributeDivisors;$[Y]=1,X[Y]===0&&(i.enableVertexAttribArray(Y),X[Y]=1),J[Y]!==b&&(i.vertexAttribDivisor(Y,b),J[Y]=b)}function C(){let Y=r.newAttributes,b=r.enabledAttributes;for(let $=0,X=b.length;$<X;$++)b[$]!==Y[$]&&(i.disableVertexAttribArray($),b[$]=0)}function I(Y,b,$,X,J,ut,dt){dt===!0?i.vertexAttribIPointer(Y,b,$,J,ut):i.vertexAttribPointer(Y,b,$,X,J,ut)}function x(Y,b,$,X){P();let J=X.attributes,ut=$.getAttributes(),dt=b.defaultAttributeValues;for(let wt in ut){let ot=ut[wt];if(ot.location>=0){let nt=J[wt];if(nt===void 0&&(wt==="instanceMatrix"&&Y.instanceMatrix&&(nt=Y.instanceMatrix),wt==="instanceColor"&&Y.instanceColor&&(nt=Y.instanceColor)),nt!==void 0){let v=nt.normalized,qt=nt.itemSize,Ht=t.get(nt);if(Ht===void 0)continue;let ae=Ht.buffer,Z=Ht.type,Ee=Ht.bytesPerElement,yt=Z===i.INT||Z===i.UNSIGNED_INT||nt.gpuType===vo;if(nt.isInterleavedBufferAttribute){let St=nt.data,zt=St.stride,jt=nt.offset;if(St.isInstancedInterleavedBuffer){for(let $t=0;$t<ot.locationSize;$t++)d(ot.location+$t,St.meshPerAttribute);Y.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let $t=0;$t<ot.locationSize;$t++)A(ot.location+$t);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let $t=0;$t<ot.locationSize;$t++)I(ot.location+$t,qt/ot.locationSize,Z,v,zt*Ee,(jt+qt/ot.locationSize*$t)*Ee,yt)}else{if(nt.isInstancedBufferAttribute){for(let St=0;St<ot.locationSize;St++)d(ot.location+St,nt.meshPerAttribute);Y.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let St=0;St<ot.locationSize;St++)A(ot.location+St);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let St=0;St<ot.locationSize;St++)I(ot.location+St,qt/ot.locationSize,Z,v,qt*Ee,qt/ot.locationSize*St*Ee,yt)}}else if(dt!==void 0){let v=dt[wt];if(v!==void 0)switch(v.length){case 2:i.vertexAttrib2fv(ot.location,v);break;case 3:i.vertexAttrib3fv(ot.location,v);break;case 4:i.vertexAttrib4fv(ot.location,v);break;default:i.vertexAttrib1fv(ot.location,v)}}}}C()}function R(){N();for(let Y in n){let b=n[Y];for(let $ in b){let X=b[$];for(let J in X){let ut=X[J];for(let dt in ut)p(ut[dt].object),delete ut[dt];delete X[J]}}delete n[Y]}}function T(Y){if(n[Y.id]===void 0)return;let b=n[Y.id];for(let $ in b){let X=b[$];for(let J in X){let ut=X[J];for(let dt in ut)p(ut[dt].object),delete ut[dt];delete X[J]}}delete n[Y.id]}function F(Y){for(let b in n){let $=n[b];for(let X in $){let J=$[X];if(J[Y.id]===void 0)continue;let ut=J[Y.id];for(let dt in ut)p(ut[dt].object),delete ut[dt];delete J[Y.id]}}}function y(Y){for(let b in n){let $=n[b],X=Y.isInstancedMesh===!0?Y.id:0,J=$[X];if(J!==void 0){for(let ut in J){let dt=J[ut];for(let wt in dt)p(dt[wt].object),delete dt[wt];delete J[ut]}delete $[X],Object.keys($).length===0&&delete n[b]}}}function N(){H(),l=!0,r!==s&&(r=s,h(r.object))}function H(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:H,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:F,initAttributes:P,enableAttribute:A,disableUnusedAttributes:C}}function Tm(i,t,e){let n;function s(u){n=u}function r(u,h){i.drawArrays(n,u,h),e.update(h,n,1)}function l(u,h,p){p!==0&&(i.drawArraysInstanced(n,u,h,p),e.update(h,n,p))}function o(u,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,p);let m=0;for(let E=0;E<p;E++)m+=h[E];e.update(m,n,1)}this.setMode=s,this.render=r,this.renderInstances=l,this.renderMultiDraw=o}function Em(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let F=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(F){return!(F!==oi&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(F){let y=F===gi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==qn&&F!==ai&&!y&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function u(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",p=u(h);p!==h&&(Te("WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);let _=e.logarithmicDepthBuffer===!0,m=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&m===!1&&Te("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let E=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=i.getParameter(i.MAX_TEXTURE_SIZE),A=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:u,textureFormatReadable:l,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:m,maxTextures:E,maxVertexTextures:M,maxTextureSize:P,maxCubemapSize:A,maxAttributes:d,maxVertexUniforms:C,maxVaryings:I,maxFragmentUniforms:x,maxSamples:R,samples:T}}function Am(i){let t=this,e=null,n=0,s=!1,r=!1,l=new ti,o=new Ce,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(_,m){let E=_.length!==0||m||n!==0||s;return s=m,n=_.length,E},this.beginShadows=function(){r=!0,p(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(_,m){e=p(_,m,0)},this.setState=function(_,m,E){let M=_.clippingPlanes,P=_.clipIntersection,A=_.clipShadows,d=i.get(_);if(!s||M===null||M.length===0||r&&!A)r?p(null):h();else{let C=r?0:n,I=C*4,x=d.clippingState||null;u.value=x,x=p(M,m,I,E);for(let R=0;R!==I;++R)x[R]=e[R];d.clippingState=x,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=C}};function h(){u.value!==e&&(u.value=e,u.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function p(_,m,E,M){let P=_!==null?_.length:0,A=null;if(P!==0){if(A=u.value,M!==!0||A===null){let d=E+P*4,C=m.matrixWorldInverse;o.getNormalMatrix(C),(A===null||A.length<d)&&(A=new Float32Array(d));for(let I=0,x=E;I!==P;++I,x+=4)l.copy(_[I]).applyMatrix4(C,o),l.normal.toArray(A,x),A[x+3]=l.constant}u.value=A,u.needsUpdate=!0}return t.numPlanes=P,t.numIntersection=0,A}}var ar=4,Cm=6,Rm=20,Im=256,la=new tr,Gu=new Ne,Vc=null,Gc=0,Hc=0,Wc=!1,Pm=new lt,vs=new lt,cl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:l=256,position:o=Pm}=r;Vc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Hc=this._renderer.getActiveMipmapLevel(),Wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);let u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,n,s,u,o),e>0&&this._blur(u,0,0,e),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Vc,Gc,Hc),this._renderer.xr.enabled=Wc,t.scissorTest=!1,rr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ns||t.mapping===_s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Hc=this._renderer.getActiveMipmapLevel(),Wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:gi,format:oi,colorSpace:Cr,depthBuffer:!1},s=Hu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hu(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Lm(r)),this._blurMaterial=Nm(r,t,e),this._ggxMaterial=Dm(r,t,e)}return s}_compileMaterial(t){let e=new Dn(new ei,t);this._renderer.compile(e,la)}_sceneToCubeUV(t,e,n,s,r){let u=new Pn(90,1,e,n),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,m=_.autoClear,E=_.toneMapping;_.getClearColor(Gu),_.toneMapping=pi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(s),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Dn(new Ks,new kr({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1})));let P=this._backgroundBox,A=P.material,d=!1,C=t.background;C?C.isColor&&(A.color.copy(C),t.background=null,d=!0):(A.color.copy(Gu),d=!0);for(let I=0;I<6;I++){let x=I%3;x===0?(u.up.set(0,h[I],0),u.position.set(r.x,r.y,r.z),u.lookAt(r.x+p[I],r.y,r.z)):x===1?(u.up.set(0,0,h[I]),u.position.set(r.x,r.y,r.z),u.lookAt(r.x,r.y+p[I],r.z)):(u.up.set(0,h[I],0),u.position.set(r.x,r.y,r.z),u.lookAt(r.x,r.y,r.z+p[I]));let R=this._cubeSize;rr(s,x*R,I>2?R:0,R,R),_.setRenderTarget(s),d&&_.render(P,u),_.render(t,u)}_.toneMapping=E,_.autoClear=m,t.background=C}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ns||t.mapping===_s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wu());let r=s?this._cubemapMaterial:this._equirectMaterial,l=this._lodMeshes[0];l.material=r;let o=r.uniforms;o.envMap.value=t;let u=this._cubeSize;rr(e,0,0,3*u,2*u),n.setRenderTarget(e),n.render(l,la)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,l=this._ggxMaterial,o=this._lodMeshes[n];o.material=l;let u=l.uniforms,h=n/(this._lodMeshes.length-1),p=e/(this._lodMeshes.length-1),_=Math.sqrt(h*h-p*p),m=h*1.25,E=_*m,{_lodMax:M}=this,P=this._sizeLods[n],A=3*P*(n>M-ar?n-M+ar:0),d=4*(this._cubeSize-P);u.envMap.value=t.texture,u.roughness.value=E,u.mipInt.value=M-e,rr(r,A,d,3*P,2*P),s.setRenderTarget(r),s.render(o,la),u.envMap.value=r.texture,u.roughness.value=0,u.mipInt.value=M-n,rr(t,A,d,3*P,2*P),s.setRenderTarget(t),s.render(o,la)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,l=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,l),this._blurPass(r,t,n,n,l)}_blurPass(t,e,n,s,r){let l=this._renderer,o=this._blurMaterial,u=this._lodMeshes[s];u.material=o;let h=o.uniforms;h.envMap.value=t.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-n;let p=this._sizeLods[s],_=3*p*(s>this._lodMax-ar?s-this._lodMax+ar:0),m=4*(this._cubeSize-p);rr(e,_,m,3*p,2*p),l.setRenderTarget(e),l.render(u,la)}};function Lm(i){let t=[],e=[],n=i,s=i-ar+1+Cm;for(let r=0;r<s;r++){let l=Math.pow(2,n);t.push(l);let o=1/(l-2),u=-o,h=1+o,p=[u,u,h,u,h,h,u,u,h,h,u,h],_=6,m=6,E=3,M=new Float32Array(E*m*_),P=new Float32Array(E*m*_);for(let d=0;d<_;d++){let C=d%3*2/3-1,I=d>2?0:-1,x=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];M.set(x,E*m*d);for(let R=0;R<m;R++){let T=p[R*2]*2-1,F=p[R*2+1]*2-1;d===0?vs.set(1,F,T):d===1?vs.set(-T,1,-F):d===2?vs.set(-T,F,1):d===3?vs.set(-1,F,-T):d===4?vs.set(-T,-1,F):vs.set(T,F,-1),vs.toArray(P,(d*m+R)*E)}}let A=new ei;A.setAttribute("position",new Gn(M,E)),A.setAttribute("outputDirection",new Gn(P,E)),e.push(new Dn(A,null)),n>ar&&n--}return{lodMeshes:e,sizeLods:t}}function Hu(i,t,e){let n=new Xn(i,t,e);return n.texture.mapping=Qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Dm(i,t,e){return new ni({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Im,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:dl(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Nm(i,t,e){return new ni({name:"SphericalGaussianBlur",defines:{SAMPLES:Rm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:dl(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Wu(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dl(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Xu(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function dl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var hl=class extends Xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Gr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ks(5,5,5),r=new ni({name:"CubemapFromEquirect",uniforms:ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bn,blending:Ti});r.uniforms.tEquirect.value=e;let l=new Dn(s,r),o=e.minFilter;return e.minFilter===Ei&&(e.minFilter=vn),new po(1,10,this).update(t,l),e.minFilter=o,l.geometry.dispose(),l.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let l=0;l<6;l++)t.setRenderTarget(this,l),t.clear(e,n,s);t.setRenderTarget(r)}};function Um(i){let t=new WeakMap,e=new WeakMap,n=null;function s(m,E=!1){return m==null?null:E?l(m):r(m)}function r(m){if(m&&m.isTexture){let E=m.mapping;if(E===xo||E===_o)if(t.has(m)){let M=t.get(m).texture;return o(M,m.mapping)}else{let M=m.image;if(M&&M.height>0){let P=new hl(M.height);return P.fromEquirectangularTexture(i,m),t.set(m,P),m.addEventListener("dispose",h),o(P.texture,m.mapping)}else return null}}return m}function l(m){if(m&&m.isTexture){let E=m.mapping,M=E===xo||E===_o,P=E===ns||E===_s;if(M||P){let A=e.get(m),d=A!==void 0?A.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==d)return n===null&&(n=new cl(i)),A=M?n.fromEquirectangular(m,A):n.fromCubemap(m,A),A.texture.pmremVersion=m.pmremVersion,e.set(m,A),A.texture;if(A!==void 0)return A.texture;{let C=m.image;return M&&C&&C.height>0||P&&C&&u(C)?(n===null&&(n=new cl(i)),A=M?n.fromEquirectangular(m):n.fromCubemap(m),A.texture.pmremVersion=m.pmremVersion,e.set(m,A),m.addEventListener("dispose",p),A.texture):null}}}return m}function o(m,E){return E===xo?m.mapping=ns:E===_o&&(m.mapping=_s),m}function u(m){let E=0,M=6;for(let P=0;P<M;P++)m[P]!==void 0&&E++;return E===M}function h(m){let E=m.target;E.removeEventListener("dispose",h);let M=t.get(E);M!==void 0&&(t.delete(E),M.dispose())}function p(m){let E=m.target;E.removeEventListener("dispose",p);let M=e.get(E);M!==void 0&&(e.delete(E),M.dispose())}function _(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:_}}function Fm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&fs("WebGLRenderer: "+n+" extension not supported."),s}}}function Om(i,t,e,n){let s={},r=new WeakMap;function l(_){let m=_.target;m.index!==null&&t.remove(m.index);for(let M in m.attributes)t.remove(m.attributes[M]);m.removeEventListener("dispose",l),delete s[m.id];let E=r.get(m);E&&(t.remove(E),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function o(_,m){return s[m.id]===!0||(m.addEventListener("dispose",l),s[m.id]=!0,e.memory.geometries++),m}function u(_){let m=_.attributes;for(let E in m)t.update(m[E],i.ARRAY_BUFFER)}function h(_){let m=[],E=_.index,M=_.attributes.position,P=0;if(M===void 0)return;if(E!==null){let C=E.array;P=E.version;for(let I=0,x=C.length;I<x;I+=3){let R=C[I+0],T=C[I+1],F=C[I+2];m.push(R,T,T,F,F,R)}}else{let C=M.array;P=M.version;for(let I=0,x=C.length/3-1;I<x;I+=3){let R=I+0,T=I+1,F=I+2;m.push(R,T,T,F,F,R)}}let A=new(M.count>=65535?Ur:Nr)(m,1);A.version=P;let d=r.get(_);d&&t.remove(d),r.set(_,A)}function p(_){let m=r.get(_);if(m){let E=_.index;E!==null&&m.version<E.version&&h(_)}else h(_);return r.get(_)}return{get:o,update:u,getWireframeAttribute:p}}function Bm(i,t,e){let n;function s(_){n=_}let r,l;function o(_){r=_.type,l=_.bytesPerElement}function u(_,m){i.drawElements(n,m,r,_*l),e.update(m,n,1)}function h(_,m,E){E!==0&&(i.drawElementsInstanced(n,m,r,_*l,E),e.update(m,n,E))}function p(_,m,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,_,0,E);let P=0;for(let A=0;A<E;A++)P+=m[A];e.update(P,n,1)}this.setMode=s,this.setIndex=o,this.render=u,this.renderInstances=h,this.renderMultiDraw=p}function km(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,l,o){switch(e.calls++,l){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:we("WebGLInfo: Unknown draw mode:",l);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function zm(i,t,e){let n=new WeakMap,s=new pn;function r(l,o,u){let h=l.morphTargetInfluences,p=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,_=p!==void 0?p.length:0,m=n.get(o);if(m===void 0||m.count!==_){let N=function(){F.dispose(),n.delete(o),o.removeEventListener("dispose",N)};m!==void 0&&m.texture.dispose();let E=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,P=o.morphAttributes.color!==void 0,A=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],C=o.morphAttributes.color||[],I=0;E===!0&&(I=1),M===!0&&(I=2),P===!0&&(I=3);let x=o.attributes.position.count*I,R=1;x>t.maxTextureSize&&(R=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let T=new Float32Array(x*R*4*_),F=new ps(T,x,R,_);F.type=ai,F.needsUpdate=!0;let y=I*4;for(let H=0;H<_;H++){let Y=A[H],b=d[H],$=C[H],X=x*R*4*H;for(let J=0;J<Y.count;J++){let ut=J*y;E===!0&&(s.fromBufferAttribute(Y,J),T[X+ut+0]=s.x,T[X+ut+1]=s.y,T[X+ut+2]=s.z,T[X+ut+3]=0),M===!0&&(s.fromBufferAttribute(b,J),T[X+ut+4]=s.x,T[X+ut+5]=s.y,T[X+ut+6]=s.z,T[X+ut+7]=0),P===!0&&(s.fromBufferAttribute($,J),T[X+ut+8]=s.x,T[X+ut+9]=s.y,T[X+ut+10]=s.z,T[X+ut+11]=$.itemSize===4?s.w:1)}}m={count:_,texture:F,size:new Be(x,R)},n.set(o,m),o.addEventListener("dispose",N)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",l.morphTexture,e);else{let E=0;for(let P=0;P<h.length;P++)E+=h[P];let M=o.morphTargetsRelative?1:1-E;u.getUniforms().setValue(i,"morphTargetBaseInfluence",M),u.getUniforms().setValue(i,"morphTargetInfluences",h)}u.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:r}}function Vm(i,t,e,n,s){let r=new WeakMap;function l(h){let p=s.render.frame,_=h.geometry,m=t.get(h,_);if(r.get(m)!==p&&(t.update(m),r.set(m,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),r.get(h)!==p&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,p))),h.isSkinnedMesh){let E=h.skeleton;r.get(E)!==p&&(E.update(),r.set(E,p))}return m}function o(){r=new WeakMap}function u(h){let p=h.target;p.removeEventListener("dispose",u),n.releaseStatesOfObject(p),e.remove(p.instanceMatrix),p.instanceColor!==null&&e.remove(p.instanceColor)}return{update:l,dispose:o}}var Gm={[xc]:"LINEAR_TONE_MAPPING",[_c]:"REINHARD_TONE_MAPPING",[yc]:"CINEON_TONE_MAPPING",[jr]:"ACES_FILMIC_TONE_MAPPING",[Mc]:"AGX_TONE_MAPPING",[bc]:"NEUTRAL_TONE_MAPPING",[vc]:"CUSTOM_TONE_MAPPING"};function Hm(i,t,e,n,s,r){let l=new Xn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,u=null,h=new ei;h.setAttribute("position",new Hn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Hn([0,2,0,0,2,0],2));let p=new js({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new Dn(h,p),m=new tr(-1,1,1,-1,0,1),E=null,M=null,P=!1,A,d=null,C=[],I=!1;this.setSize=function(x,R){l.setSize(x,R),o!==null&&o.setSize(x,R),u!==null&&u.setSize(x,R);for(let T=0;T<C.length;T++){let F=C[T];F.setSize&&F.setSize(x,R)}},this.setEffects=function(x){C=x,I=C.length>0&&C[0].isRenderPass===!0;let R=l.width,T=l.height;C.length>0&&o===null&&(o=new Xn(R,T,{type:gi,depthBuffer:!1,stencilBuffer:!1}),u=new Xn(R,T,{type:gi,depthBuffer:!1,stencilBuffer:!1}));for(let F=0;F<C.length;F++){let y=C[F];y.setSize&&y.setSize(R,T)}},this.begin=function(x,R){if(P||x.toneMapping===pi&&C.length===0)return!1;if(d=R,R!==null){let T=R.width,F=R.height;(l.width!==T||l.height!==F)&&this.setSize(T,F)}return I===!1&&x.setRenderTarget(l),A=x.toneMapping,x.toneMapping=pi,!0},this.hasRenderPass=function(){return I},this.end=function(x,R){x.toneMapping=A,P=!0;let T=l,F=o;for(let y=0;y<C.length;y++){let N=C[y];N.enabled!==!1&&(N.render(x,F,T,R),N.needsSwap!==!1&&(T=F,F=F===o?u:o))}if(E!==x.outputColorSpace||M!==x.toneMapping){E=x.outputColorSpace,M=x.toneMapping,p.defines={},Ve.getTransfer(E)===en&&(p.defines.SRGB_TRANSFER="");let y=Gm[M];y&&(p.defines[y]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=T.texture,x.setRenderTarget(d),x.render(_,m),d=null,P=!1},this.isCompositing=function(){return P},this.dispose=function(){l.dispose(),o!==null&&o.dispose(),u!==null&&u.dispose(),h.dispose(),p.dispose()}}var ud=new Wn,Yc=new Ki(1,1),dd=new ps,fd=new Qa,pd=new Gr,qu=[],Yu=[],Zu=new Float32Array(16),Ju=new Float32Array(9),$u=new Float32Array(4);function lr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=qu[s];if(r===void 0&&(r=new Float32Array(s),qu[s]=r),t!==0){n.toArray(r,0);for(let l=1,o=0;l!==t;++l)o+=e,i[l].toArray(r,o)}return r}function Mn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function bn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function fl(i,t){let e=Yu[t];e===void 0&&(e=new Int32Array(t),Yu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Wm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Xm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Mn(e,t))return;i.uniform2fv(this.addr,t),bn(e,t)}}function qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Mn(e,t))return;i.uniform3fv(this.addr,t),bn(e,t)}}function Ym(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Mn(e,t))return;i.uniform4fv(this.addr,t),bn(e,t)}}function Zm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Mn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),bn(e,t)}else{if(Mn(e,n))return;$u.set(n),i.uniformMatrix2fv(this.addr,!1,$u),bn(e,n)}}function Jm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Mn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),bn(e,t)}else{if(Mn(e,n))return;Ju.set(n),i.uniformMatrix3fv(this.addr,!1,Ju),bn(e,n)}}function $m(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Mn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),bn(e,t)}else{if(Mn(e,n))return;Zu.set(n),i.uniformMatrix4fv(this.addr,!1,Zu),bn(e,n)}}function Km(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function jm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Mn(e,t))return;i.uniform2iv(this.addr,t),bn(e,t)}}function Qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Mn(e,t))return;i.uniform3iv(this.addr,t),bn(e,t)}}function tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Mn(e,t))return;i.uniform4iv(this.addr,t),bn(e,t)}}function eg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Mn(e,t))return;i.uniform2uiv(this.addr,t),bn(e,t)}}function ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Mn(e,t))return;i.uniform3uiv(this.addr,t),bn(e,t)}}function sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Mn(e,t))return;i.uniform4uiv(this.addr,t),bn(e,t)}}function rg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Yc.compareFunction=e.isReversedDepthBuffer()?rl:sl,r=Yc):r=ud,e.setTexture2D(t||r,s)}function ag(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||fd,s)}function og(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||pd,s)}function lg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||dd,s)}function cg(i){switch(i){case 5126:return Wm;case 35664:return Xm;case 35665:return qm;case 35666:return Ym;case 35674:return Zm;case 35675:return Jm;case 35676:return $m;case 5124:case 35670:return Km;case 35667:case 35671:return jm;case 35668:case 35672:return Qm;case 35669:case 35673:return tg;case 5125:return eg;case 36294:return ng;case 36295:return ig;case 36296:return sg;case 35678:case 36198:case 36298:case 36306:case 35682:return rg;case 35679:case 36299:case 36307:return ag;case 35680:case 36300:case 36308:case 36293:return og;case 36289:case 36303:case 36311:case 36292:return lg}}function hg(i,t){i.uniform1fv(this.addr,t)}function ug(i,t){let e=lr(t,this.size,2);i.uniform2fv(this.addr,e)}function dg(i,t){let e=lr(t,this.size,3);i.uniform3fv(this.addr,e)}function fg(i,t){let e=lr(t,this.size,4);i.uniform4fv(this.addr,e)}function pg(i,t){let e=lr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function mg(i,t){let e=lr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function gg(i,t){let e=lr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function xg(i,t){i.uniform1iv(this.addr,t)}function _g(i,t){i.uniform2iv(this.addr,t)}function yg(i,t){i.uniform3iv(this.addr,t)}function vg(i,t){i.uniform4iv(this.addr,t)}function Mg(i,t){i.uniform1uiv(this.addr,t)}function bg(i,t){i.uniform2uiv(this.addr,t)}function Sg(i,t){i.uniform3uiv(this.addr,t)}function wg(i,t){i.uniform4uiv(this.addr,t)}function Tg(i,t,e){let n=this.cache,s=t.length,r=fl(e,s);Mn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));let l;this.type===i.SAMPLER_2D_SHADOW?l=Yc:l=ud;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||l,r[o])}function Eg(i,t,e){let n=this.cache,s=t.length,r=fl(e,s);Mn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));for(let l=0;l!==s;++l)e.setTexture3D(t[l]||fd,r[l])}function Ag(i,t,e){let n=this.cache,s=t.length,r=fl(e,s);Mn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));for(let l=0;l!==s;++l)e.setTextureCube(t[l]||pd,r[l])}function Cg(i,t,e){let n=this.cache,s=t.length,r=fl(e,s);Mn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));for(let l=0;l!==s;++l)e.setTexture2DArray(t[l]||dd,r[l])}function Rg(i){switch(i){case 5126:return hg;case 35664:return ug;case 35665:return dg;case 35666:return fg;case 35674:return pg;case 35675:return mg;case 35676:return gg;case 5124:case 35670:return xg;case 35667:case 35671:return _g;case 35668:case 35672:return yg;case 35669:case 35673:return vg;case 5125:return Mg;case 36294:return bg;case 36295:return Sg;case 36296:return wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Tg;case 35679:case 36299:case 36307:return Eg;case 35680:case 36300:case 36308:case 36293:return Ag;case 36289:case 36303:case 36311:case 36292:return Cg}}var Zc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=cg(e.type)}},Jc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Rg(e.type)}},$c=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,l=s.length;r!==l;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Xc=/(\w+)(\])?(\[|\.)?/g;function Ku(i,t){i.seq.push(t),i.map[t.id]=t}function Ig(i,t,e){let n=i.name,s=n.length;for(Xc.lastIndex=0;;){let r=Xc.exec(n),l=Xc.lastIndex,o=r[1],u=r[2]==="]",h=r[3];if(u&&(o=o|0),h===void 0||h==="["&&l+2===s){Ku(e,h===void 0?new Zc(o,i,t):new Jc(o,i,t));break}else{let _=e.map[o];_===void 0&&(_=new $c(o),Ku(e,_)),e=_}}}var or=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let l=0;l<n;++l){let o=t.getActiveUniform(e,l),u=t.getUniformLocation(e,o.name);Ig(o,u,this)}let s=[],r=[];for(let l of this.seq)l.type===t.SAMPLER_2D_SHADOW||l.type===t.SAMPLER_CUBE_SHADOW||l.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(l):r.push(l);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,l=e.length;r!==l;++r){let o=e[r],u=n[o.id];u.needsUpdate!==!1&&o.setValue(t,u.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let l=t[s];l.id in e&&n.push(l)}return n}};function ju(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Pg=37297,Lg=0;function Dg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let l=s;l<r;l++){let o=l+1;n.push(`${o===t?">":" "} ${o}: ${e[l]}`)}return n.join(`
`)}var Qu=new Ce;function Ng(i){Ve._getMatrix(Qu,Ve.workingColorSpace,i);let t=`mat3( ${Qu.elements.map(e=>e.toFixed(4))} )`;switch(Ve.getTransfer(i)){case Rr:return[t,"LinearTransferOETF"];case en:return[t,"sRGBTransferOETF"];default:return Te("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function td(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let l=/ERROR: 0:(\d+)/.exec(r);if(l){let o=parseInt(l[1]);return e.toUpperCase()+`

`+r+`

`+Dg(i.getShaderSource(t),o)}else return r}function Ug(i,t){let e=Ng(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Fg={[xc]:"Linear",[_c]:"Reinhard",[yc]:"Cineon",[jr]:"ACESFilmic",[Mc]:"AgX",[bc]:"Neutral",[vc]:"Custom"};function Og(i,t){let e=Fg[t];return e===void 0?(Te("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ll=new lt;function Bg(){Ve.getLuminanceCoefficients(ll);let i=ll.x.toFixed(4),t=ll.y.toFixed(4),e=ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ha).join(`
`)}function zg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Vg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),l=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[l]={type:r.type,location:i.getAttribLocation(t,l),locationSize:o}}return e}function ha(i){return i!==""}function ed(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Gg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kc(i){return i.replace(Gg,Wg)}var Hg=new Map;function Wg(i,t){let e=Ue[t];if(e===void 0){let n=Hg.get(t);if(n!==void 0)e=Ue[n],Te('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Kc(e)}var Xg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function id(i){return i.replace(Xg,qg)}function qg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Yg={[gs]:"SHADOWMAP_TYPE_PCF",[er]:"SHADOWMAP_TYPE_VSM"};function Zg(i){return Yg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Jg={[ns]:"ENVMAP_TYPE_CUBE",[_s]:"ENVMAP_TYPE_CUBE",[Qr]:"ENVMAP_TYPE_CUBE_UV"};function $g(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Jg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Kg={[_s]:"ENVMAP_MODE_REFRACTION"};function jg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Kg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Qg={[gc]:"ENVMAP_BLENDING_MULTIPLY",[bu]:"ENVMAP_BLENDING_MIX",[Su]:"ENVMAP_BLENDING_ADD"};function t1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Qg[i.combine]||"ENVMAP_BLENDING_NONE"}function e1(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function n1(i,t,e,n){let s=i.getContext(),r=e.defines,l=e.vertexShader,o=e.fragmentShader,u=Zg(e),h=$g(e),p=jg(e),_=t1(e),m=e1(e),E=kg(e),M=zg(r),P=s.createProgram(),A,d,C=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(A=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(ha).join(`
`),A.length>0&&(A+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(ha).join(`
`),d.length>0&&(d+=`
`)):(A=[sd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ha).join(`
`),d=[sd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",e.envMap?"#define "+_:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pi?"#define TONE_MAPPING":"",e.toneMapping!==pi?Ue.tonemapping_pars_fragment:"",e.toneMapping!==pi?Og("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,Ug("linearToOutputTexel",e.outputColorSpace),Bg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ha).join(`
`)),l=Kc(l),l=ed(l,e),l=nd(l,e),o=Kc(o),o=ed(o,e),o=nd(o,e),l=id(l),o=id(o),e.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,A=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+A,d=["#define varying in",e.glslVersion===oa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===oa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let I=C+A+l,x=C+d+o,R=ju(s,s.VERTEX_SHADER,I),T=ju(s,s.FRAGMENT_SHADER,x);s.attachShader(P,R),s.attachShader(P,T),e.index0AttributeName!==void 0?s.bindAttribLocation(P,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(P,0,"position"),s.linkProgram(P);function F(Y){if(i.debug.checkShaderErrors){let b=s.getProgramInfoLog(P)||"",$=s.getShaderInfoLog(R)||"",X=s.getShaderInfoLog(T)||"",J=b.trim(),ut=$.trim(),dt=X.trim(),wt=!0,ot=!0;if(s.getProgramParameter(P,s.LINK_STATUS)===!1)if(wt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,P,R,T);else{let nt=td(s,R,"vertex"),v=td(s,T,"fragment");we("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(P,s.VALIDATE_STATUS)+`

Material Name: `+Y.name+`
Material Type: `+Y.type+`

Program Info Log: `+J+`
`+nt+`
`+v)}else J!==""?Te("WebGLProgram: Program Info Log:",J):(ut===""||dt==="")&&(ot=!1);ot&&(Y.diagnostics={runnable:wt,programLog:J,vertexShader:{log:ut,prefix:A},fragmentShader:{log:dt,prefix:d}})}s.deleteShader(R),s.deleteShader(T),y=new or(s,P),N=Vg(s,P)}let y;this.getUniforms=function(){return y===void 0&&F(this),y};let N;this.getAttributes=function(){return N===void 0&&F(this),N};let H=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=s.getProgramParameter(P,Pg)),H},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(P),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Lg++,this.cacheKey=t,this.usedTimes=1,this.program=P,this.vertexShader=R,this.fragmentShader=T,this}var i1=0,jc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Qc(t),e.set(t,n)),n}},Qc=class{constructor(t){this.id=i1++,this.code=t,this.usedTimes=0}};function s1(i){return i===ss||i===ra||i===aa}function r1(i,t,e,n,s,r){let l=new Zs,o=new jc,u=new Set,h=[],p=new Map,_=n.logarithmicDepthBuffer,m=n.precision,E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(y){return u.add(y),y===0?"uv":`uv${y}`}function P(y,N,H,Y,b,$){let X=Y.fog,J=b.geometry,ut=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?Y.environment:null,dt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,wt=t.get(y.envMap||ut,dt),ot=wt&&wt.mapping===Qr?wt.image.height:null,nt=E[y.type];y.precision!==null&&(m=n.getMaxPrecision(y.precision),m!==y.precision&&Te("WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));let v=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,qt=v!==void 0?v.length:0,Ht=0;J.morphAttributes.position!==void 0&&(Ht=1),J.morphAttributes.normal!==void 0&&(Ht=2),J.morphAttributes.color!==void 0&&(Ht=3);let ae,Z,Ee,yt;if(nt){let xe=Ci[nt];ae=xe.vertexShader,Z=xe.fragmentShader}else{ae=y.vertexShader,Z=y.fragmentShader;let xe=o.getVertexShaderStage(y),_e=o.getFragmentShaderStage(y);o.update(y,xe,_e),Ee=xe.id,yt=_e.id}let St=i.getRenderTarget(),zt=i.state.buffers.depth.getReversed(),jt=b.isInstancedMesh===!0,$t=b.isBatchedMesh===!0,ve=!!y.map,Ke=!!y.matcap,oe=!!wt,re=!!y.aoMap,qe=!!y.lightMap,pe=!!y.bumpMap&&y.wireframe===!1,Me=!!y.normalMap,Ie=!!y.displacementMap,Ge=!!y.emissiveMap,Pe=!!y.metalnessMap,Ye=!!y.roughnessMap,j=y.anisotropy>0,He=y.clearcoat>0,De=y.dispersion>0,k=y.retroreflectivity>0,S=y.iridescence>0,st=y.sheen>0,rt=y.transmission>0,gt=j&&!!y.anisotropyMap,Dt=He&&!!y.clearcoatMap,It=He&&!!y.clearcoatNormalMap,vt=He&&!!y.clearcoatRoughnessMap,Mt=S&&!!y.iridescenceMap,Gt=S&&!!y.iridescenceThicknessMap,ne=st&&!!y.sheenColorMap,Tt=st&&!!y.sheenRoughnessMap,Ot=!!y.specularMap,Jt=!!y.specularColorMap,le=!!y.specularIntensityMap,Et=rt&&!!y.transmissionMap,G=rt&&!!y.thicknessMap,at=!!y.gradientMap,ht=!!y.alphaMap,Bt=y.alphaTest>0,Ct=!!y.alphaHash,mt=!!y.extensions,Qt=pi;y.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(Qt=i.toneMapping);let ee={shaderID:nt,shaderType:y.type,shaderName:y.name,vertexShader:ae,fragmentShader:Z,defines:y.defines,customVertexShaderID:Ee,customFragmentShaderID:yt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:$t,batchingColor:$t&&b._colorsTexture!==null,instancing:jt,instancingColor:jt&&b.instanceColor!==null,instancingMorph:jt&&b.morphTexture!==null,outputColorSpace:St===null?i.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:Ve.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:ve,matcap:Ke,envMap:oe,envMapMode:oe&&wt.mapping,envMapCubeUVHeight:ot,aoMap:re,lightMap:qe,bumpMap:pe,normalMap:Me,displacementMap:Ie,emissiveMap:Ge,normalMapObjectSpace:Me&&y.normalMapType===Eu,normalMapTangentSpace:Me&&y.normalMapType===il,packedNormalMap:Me&&y.normalMapType===il&&s1(y.normalMap.format),metalnessMap:Pe,roughnessMap:Ye,anisotropy:j,anisotropyMap:gt,clearcoat:He,clearcoatMap:Dt,clearcoatNormalMap:It,clearcoatRoughnessMap:vt,dispersion:De,retroreflection:k,iridescence:S,iridescenceMap:Mt,iridescenceThicknessMap:Gt,sheen:st,sheenColorMap:ne,sheenRoughnessMap:Tt,specularMap:Ot,specularColorMap:Jt,specularIntensityMap:le,transmission:rt,transmissionMap:Et,thicknessMap:G,gradientMap:at,opaque:y.transparent===!1&&y.blending===nr&&y.alphaToCoverage===!1,alphaMap:ht,alphaTest:Bt,alphaHash:Ct,combine:y.combine,mapUv:ve&&M(y.map.channel),aoMapUv:re&&M(y.aoMap.channel),lightMapUv:qe&&M(y.lightMap.channel),bumpMapUv:pe&&M(y.bumpMap.channel),normalMapUv:Me&&M(y.normalMap.channel),displacementMapUv:Ie&&M(y.displacementMap.channel),emissiveMapUv:Ge&&M(y.emissiveMap.channel),metalnessMapUv:Pe&&M(y.metalnessMap.channel),roughnessMapUv:Ye&&M(y.roughnessMap.channel),anisotropyMapUv:gt&&M(y.anisotropyMap.channel),clearcoatMapUv:Dt&&M(y.clearcoatMap.channel),clearcoatNormalMapUv:It&&M(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&M(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&M(y.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&M(y.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&M(y.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&M(y.sheenRoughnessMap.channel),specularMapUv:Ot&&M(y.specularMap.channel),specularColorMapUv:Jt&&M(y.specularColorMap.channel),specularIntensityMapUv:le&&M(y.specularIntensityMap.channel),transmissionMapUv:Et&&M(y.transmissionMap.channel),thicknessMapUv:G&&M(y.thicknessMap.channel),alphaMapUv:ht&&M(y.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Me||j),vertexNormals:!!J.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:b.isPoints===!0&&!!J.attributes.uv&&(ve||ht),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||J.attributes.normal===void 0&&Me===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:zt,skinning:b.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:qt,morphTextureStride:Ht,numSunLights:N.sun.length,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numSunLightShadows:N.sunShadowMap.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:$.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qt,decodeVideoTexture:ve&&y.map.isVideoTexture===!0&&Ve.getTransfer(y.map.colorSpace)===en,decodeVideoTextureEmissive:Ge&&y.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(y.emissiveMap.colorSpace)===en,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===si,flipSided:y.side===Bn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:mt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&y.extensions.multiDraw===!0||$t)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ee.vertexUv1s=u.has(1),ee.vertexUv2s=u.has(2),ee.vertexUv3s=u.has(3),u.clear(),ee}function A(y){let N=[];if(y.shaderID?N.push(y.shaderID):(N.push(y.customVertexShaderID),N.push(y.customFragmentShaderID)),y.defines!==void 0)for(let H in y.defines)N.push(H),N.push(y.defines[H]);return y.isRawShaderMaterial===!1&&(d(N,y),C(N,y),N.push(i.outputColorSpace)),N.push(y.customProgramCacheKey),N.join()}function d(y,N){y.push(N.precision),y.push(N.outputColorSpace),y.push(N.envMapMode),y.push(N.envMapCubeUVHeight),y.push(N.mapUv),y.push(N.alphaMapUv),y.push(N.lightMapUv),y.push(N.aoMapUv),y.push(N.bumpMapUv),y.push(N.normalMapUv),y.push(N.displacementMapUv),y.push(N.emissiveMapUv),y.push(N.metalnessMapUv),y.push(N.roughnessMapUv),y.push(N.anisotropyMapUv),y.push(N.clearcoatMapUv),y.push(N.clearcoatNormalMapUv),y.push(N.clearcoatRoughnessMapUv),y.push(N.iridescenceMapUv),y.push(N.iridescenceThicknessMapUv),y.push(N.sheenColorMapUv),y.push(N.sheenRoughnessMapUv),y.push(N.specularMapUv),y.push(N.specularColorMapUv),y.push(N.specularIntensityMapUv),y.push(N.transmissionMapUv),y.push(N.thicknessMapUv),y.push(N.combine),y.push(N.fogExp2),y.push(N.sizeAttenuation),y.push(N.morphTargetsCount),y.push(N.morphAttributeCount),y.push(N.numSunLights),y.push(N.numDirLights),y.push(N.numPointLights),y.push(N.numSpotLights),y.push(N.numSpotLightMaps),y.push(N.numHemiLights),y.push(N.numRectAreaLights),y.push(N.numSunLightShadows),y.push(N.numDirLightShadows),y.push(N.numPointLightShadows),y.push(N.numSpotLightShadows),y.push(N.numSpotLightShadowsWithMaps),y.push(N.numLightProbes),y.push(N.shadowMapType),y.push(N.toneMapping),y.push(N.numClippingPlanes),y.push(N.numClipIntersection),y.push(N.depthPacking)}function C(y,N){l.disableAll(),N.instancing&&l.enable(0),N.instancingColor&&l.enable(1),N.instancingMorph&&l.enable(2),N.matcap&&l.enable(3),N.envMap&&l.enable(4),N.normalMapObjectSpace&&l.enable(5),N.normalMapTangentSpace&&l.enable(6),N.clearcoat&&l.enable(7),N.iridescence&&l.enable(8),N.alphaTest&&l.enable(9),N.vertexColors&&l.enable(10),N.vertexAlphas&&l.enable(11),N.vertexUv1s&&l.enable(12),N.vertexUv2s&&l.enable(13),N.vertexUv3s&&l.enable(14),N.vertexTangents&&l.enable(15),N.anisotropy&&l.enable(16),N.alphaHash&&l.enable(17),N.batching&&l.enable(18),N.dispersion&&l.enable(19),N.retroreflection&&l.enable(24),N.batchingColor&&l.enable(20),N.gradientMap&&l.enable(21),N.packedNormalMap&&l.enable(22),N.vertexNormals&&l.enable(23),y.push(l.mask),l.disableAll(),N.fog&&l.enable(0),N.useFog&&l.enable(1),N.flatShading&&l.enable(2),N.logarithmicDepthBuffer&&l.enable(3),N.reversedDepthBuffer&&l.enable(4),N.skinning&&l.enable(5),N.morphTargets&&l.enable(6),N.morphNormals&&l.enable(7),N.morphColors&&l.enable(8),N.premultipliedAlpha&&l.enable(9),N.shadowMapEnabled&&l.enable(10),N.doubleSided&&l.enable(11),N.flipSided&&l.enable(12),N.useDepthPacking&&l.enable(13),N.dithering&&l.enable(14),N.transmission&&l.enable(15),N.sheen&&l.enable(16),N.opaque&&l.enable(17),N.pointsUvs&&l.enable(18),N.decodeVideoTexture&&l.enable(19),N.decodeVideoTextureEmissive&&l.enable(20),N.alphaToCoverage&&l.enable(21),N.numLightProbeGrids>0&&l.enable(22),N.hasPositionAttribute&&l.enable(23),y.push(l.mask)}function I(y){let N=E[y.type],H;if(N){let Y=Ci[N];H=ku.clone(Y.uniforms)}else H=y.uniforms;return H}function x(y,N){let H=p.get(N);return H!==void 0?++H.usedTimes:(H=new n1(i,N,y,s),h.push(H),p.set(N,H)),H}function R(y){if(--y.usedTimes===0){let N=h.indexOf(y);h[N]=h[h.length-1],h.pop(),p.delete(y.cacheKey),y.destroy()}}function T(y){o.remove(y)}function F(){o.dispose()}return{getParameters:P,getProgramCacheKey:A,getUniforms:I,acquireProgram:x,releaseProgram:R,releaseShaderCache:T,programs:h,dispose:F}}function a1(){let i=new WeakMap;function t(l){return i.has(l)}function e(l){let o=i.get(l);return o===void 0&&(o={},i.set(l,o)),o}function n(l){i.delete(l)}function s(l,o,u){i.get(l)[o]=u}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function o1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function rd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ad(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function l(m){let E=0;return m.isInstancedMesh&&(E+=2),m.isSkinnedMesh&&(E+=1),E}function o(m,E,M,P,A,d){let C=i[t];return C===void 0?(C={id:m.id,object:m,geometry:E,material:M,materialVariant:l(m),groupOrder:P,renderOrder:m.renderOrder,z:A,group:d},i[t]=C):(C.id=m.id,C.object=m,C.geometry=E,C.material=M,C.materialVariant=l(m),C.groupOrder=P,C.renderOrder=m.renderOrder,C.z=A,C.group=d),t++,C}function u(m,E,M,P,A,d,C){C.reversedDepth===!0&&(A=-A);let I=o(m,E,M,P,A,d);M.transmission>0?n.push(I):M.transparent===!0?s.push(I):e.push(I)}function h(m,E,M,P,A,d){let C=o(m,E,M,P,A,d);M.transmission>0?n.unshift(C):M.transparent===!0?s.unshift(C):e.unshift(C)}function p(m,E){e.length>1&&e.sort(m||o1),n.length>1&&n.sort(E||rd),s.length>1&&s.sort(E||rd)}function _(){for(let m=t,E=i.length;m<E;m++){let M=i[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:u,unshift:h,finish:_,sort:p}}function l1(){let i=new WeakMap;function t(n,s){let r=i.get(n),l;return r===void 0?(l=new ad,i.set(n,[l])):s>=r.length?(l=new ad,r.push(l)):l=r[s],l}function e(){i=new WeakMap}return{get:t,dispose:e}}function c1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new lt,color:new Ne};break;case"SpotLight":e={position:new lt,direction:new lt,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new lt,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":e={direction:new lt,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":e={color:new Ne,position:new lt,halfWidth:new lt,halfHeight:new lt};break}return i[t.id]=e,e}}}function h1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var u1=0;function d1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function f1(i){let t=new c1,e=h1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new lt);let s=new lt,r=new $e,l=new $e;function o(h){let p=0,_=0,m=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let E=0,M=0,P=0,A=0,d=0,C=0,I=0,x=0,R=0,T=0,F=0,y=0,N=0,H=0;h.sort(d1);for(let b=0,$=h.length;b<$;b++){let X=h[b],J=X.color,ut=X.intensity,dt=X.distance,wt=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===ss?wt=X.shadow.map.texture:wt=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)p+=J.r*ut,_+=J.g*ut,m+=J.b*ut;else if(X.isLightProbe){for(let ot=0;ot<9;ot++)n.probe[ot].addScaledVector(X.sh.coefficients[ot],ut);H++}else if(X.isSunLight){let ot=t.get(X);if(ot.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){let nt=X.shadow,v=e.get(X);v.shadowIntensity=nt.intensity,v.shadowBias=nt.bias,v.shadowNormalBias=nt.normalBias,v.shadowRadius=nt.radius,v.shadowMapSize.copy(nt.mapSize).multiply(nt.getFrameExtents()),n.sunShadow[M]=v,n.sunShadowMap[M]=wt;let qt=nt.getViewportCount();for(let Ht=0;Ht<qt;Ht++)n.sunShadowMatrix[P+Ht]=nt.getMatrix(Ht),n.sunShadowCascade[P+Ht]=nt._cascadeData[Ht];P+=qt,M++}n.sun[E]=ot,E++}else if(X.isDirectionalLight){let ot=t.get(X);if(ot.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){let nt=X.shadow,v=e.get(X);v.shadowIntensity=nt.intensity,v.shadowBias=nt.bias,v.shadowNormalBias=nt.normalBias,v.shadowRadius=nt.radius,v.shadowMapSize=nt.mapSize,n.directionalShadow[A]=v,n.directionalShadowMap[A]=wt,n.directionalShadowMatrix[A]=X.shadow.matrix,R++}n.directional[A]=ot,A++}else if(X.isSpotLight){let ot=t.get(X);ot.position.setFromMatrixPosition(X.matrixWorld),ot.color.copy(J).multiplyScalar(ut),ot.distance=dt,ot.coneCos=Math.cos(X.angle),ot.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),ot.decay=X.decay,n.spot[C]=ot;let nt=X.shadow;if(X.map&&(n.spotLightMap[y]=X.map,y++,nt.updateMatrices(X),X.castShadow&&N++),n.spotLightMatrix[C]=nt.matrix,X.castShadow){let v=e.get(X);v.shadowIntensity=nt.intensity,v.shadowBias=nt.bias,v.shadowNormalBias=nt.normalBias,v.shadowRadius=nt.radius,v.shadowMapSize=nt.mapSize,n.spotShadow[C]=v,n.spotShadowMap[C]=wt,F++}C++}else if(X.isRectAreaLight){let ot=t.get(X);ot.color.copy(J).multiplyScalar(ut),ot.halfWidth.set(X.width*.5,0,0),ot.halfHeight.set(0,X.height*.5,0),n.rectArea[I]=ot,I++}else if(X.isPointLight){let ot=t.get(X);if(ot.color.copy(X.color).multiplyScalar(X.intensity),ot.distance=X.distance,ot.decay=X.decay,X.castShadow){let nt=X.shadow,v=e.get(X);v.shadowIntensity=nt.intensity,v.shadowBias=nt.bias,v.shadowNormalBias=nt.normalBias,v.shadowRadius=nt.radius,v.shadowMapSize=nt.mapSize,v.shadowCameraNear=nt.camera.near,v.shadowCameraFar=nt.camera.far,n.pointShadow[d]=v,n.pointShadowMap[d]=wt,n.pointShadowMatrix[d]=X.shadow.matrix,T++}n.point[d]=ot,d++}else if(X.isHemisphereLight){let ot=t.get(X);ot.skyColor.copy(X.color).multiplyScalar(ut),ot.groundColor.copy(X.groundColor).multiplyScalar(ut),n.hemi[x]=ot,x++}}I>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Kt.LTC_FLOAT_1,n.rectAreaLTC2=Kt.LTC_FLOAT_2):(n.rectAreaLTC1=Kt.LTC_HALF_1,n.rectAreaLTC2=Kt.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=_,n.ambient[2]=m;let Y=n.hash;(Y.sunLength!==E||Y.directionalLength!==A||Y.pointLength!==d||Y.spotLength!==C||Y.rectAreaLength!==I||Y.hemiLength!==x||Y.numSunShadows!==M||Y.numDirectionalShadows!==R||Y.numPointShadows!==T||Y.numSpotShadows!==F||Y.numSpotMaps!==y||Y.numLightProbes!==H)&&(n.sun.length=E,n.directional.length=A,n.spot.length=C,n.rectArea.length=I,n.point.length=d,n.hemi.length=x,n.sunShadow.length=M,n.sunShadowMap.length=M,n.sunShadowMatrix.length=P,n.sunShadowCascade.length=P,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=F,n.spotShadowMap.length=F,n.spotLightMatrix.length=F+y-N,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=H,Y.sunLength=E,Y.directionalLength=A,Y.pointLength=d,Y.spotLength=C,Y.rectAreaLength=I,Y.hemiLength=x,Y.numSunShadows=M,Y.numDirectionalShadows=R,Y.numPointShadows=T,Y.numSpotShadows=F,Y.numSpotMaps=y,Y.numLightProbes=H,n.version=u1++)}function u(h,p){let _=0,m=0,E=0,M=0,P=0,A=0,d=p.matrixWorldInverse;for(let C=0,I=h.length;C<I;C++){let x=h[C];if(x.isSunLight){let R=n.sun[_];R.direction.setFromMatrixPosition(x.matrixWorld),R.direction.transformDirection(d),_++}else if(x.isDirectionalLight){let R=n.directional[m];R.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(d),m++}else if(x.isSpotLight){let R=n.spot[M];R.position.setFromMatrixPosition(x.matrixWorld),R.position.applyMatrix4(d),R.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(d),M++}else if(x.isRectAreaLight){let R=n.rectArea[P];R.position.setFromMatrixPosition(x.matrixWorld),R.position.applyMatrix4(d),l.identity(),r.copy(x.matrixWorld),r.premultiply(d),l.extractRotation(r),R.halfWidth.set(x.width*.5,0,0),R.halfHeight.set(0,x.height*.5,0),R.halfWidth.applyMatrix4(l),R.halfHeight.applyMatrix4(l),P++}else if(x.isPointLight){let R=n.point[E];R.position.setFromMatrixPosition(x.matrixWorld),R.position.applyMatrix4(d),E++}else if(x.isHemisphereLight){let R=n.hemi[A];R.direction.setFromMatrixPosition(x.matrixWorld),R.direction.transformDirection(d),A++}}}return{setup:o,setupView:u,state:n}}function od(i){let t=new f1(i),e=[],n=[],s=[];function r(m){_.camera=m,e.length=0,n.length=0,s.length=0}function l(m){e.push(m)}function o(m){n.push(m)}function u(m){s.push(m)}function h(){t.setup(e)}function p(m){t.setupView(e,m)}let _={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:_,setupLights:h,setupLightsView:p,pushLight:l,pushShadow:o,pushLightProbeGrid:u}}function p1(i){let t=new WeakMap;function e(s,r=0){let l=t.get(s),o;return l===void 0?(o=new od(i),t.set(s,[o])):r>=l.length?(o=new od(i),l.push(o)):o=l[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var m1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g1=`uniform sampler2D shadow_pass;
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
}`,x1=[new lt(1,0,0),new lt(-1,0,0),new lt(0,1,0),new lt(0,-1,0),new lt(0,0,1),new lt(0,0,-1)],_1=[new lt(0,-1,0),new lt(0,-1,0),new lt(0,0,1),new lt(0,0,-1),new lt(0,-1,0),new lt(0,-1,0)],ld=new $e,ca=new lt,qc=new lt;function y1(i,t,e){let n=new $s,s=new Be,r=new Be,l=new pn,o=new Qs,u=new eo,h={},p=e.maxTextureSize,_={[es]:Bn,[Bn]:es,[si]:si},m=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:m1,fragmentShader:g1}),E=m.clone();E.defines.HORIZONTAL_PASS=1;let M=new ei;M.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let P=new Dn(M,m),A=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gs;let d=this.type;this.render=function(T,F,y){if(A.enabled===!1||A.autoUpdate===!1&&A.needsUpdate===!1||T.length===0)return;this.type===iu&&(Te("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=gs);let N=i.getRenderTarget(),H=i.getActiveCubeFace(),Y=i.getActiveMipmapLevel(),b=i.state;b.setBlending(Ti),b.buffers.depth.getReversed()===!0?b.buffers.color.setClear(0,0,0,0):b.buffers.color.setClear(1,1,1,1),b.buffers.depth.setTest(!0),b.setScissorTest(!1);let $=d!==this.type;$&&F.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(J=>J.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,J=T.length;X<J;X++){let ut=T[X],dt=ut.shadow;if(dt===void 0){Te("WebGLShadowMap:",ut,"has no shadow.");continue}if(dt.autoUpdate===!1&&dt.needsUpdate===!1)continue;s.copy(dt.mapSize);let wt=dt.getFrameExtents();s.multiply(wt),r.copy(dt.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(r.x=Math.floor(p/wt.x),s.x=r.x*wt.x,dt.mapSize.x=r.x),s.y>p&&(r.y=Math.floor(p/wt.y),s.y=r.y*wt.y,dt.mapSize.y=r.y));let ot=i.state.buffers.depth.getReversed();if(dt.camera._reversedDepth=ot,dt.map===null||$===!0){if(dt.map!==null&&(dt.map.depthTexture!==null&&(dt.map.depthTexture.dispose(),dt.map.depthTexture=null),dt.map.dispose()),this.type===er){if(ut.isPointLight){Te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}dt.map=new Xn(s.x,s.y,{format:ss,type:gi,minFilter:vn,magFilter:vn,generateMipmaps:!1}),dt.map.texture.name=ut.name+".shadowMap",dt.map.depthTexture=new Ki(s.x,s.y,ai),dt.map.depthTexture.name=ut.name+".shadowMapDepth",dt.map.depthTexture.format=Mi,dt.map.depthTexture.compareFunction=null,dt.map.depthTexture.minFilter=Tn,dt.map.depthTexture.magFilter=Tn}else ut.isPointLight?(dt.map=new hl(s.x),dt.map.depthTexture=new to(s.x,mi)):(dt.map=new Xn(s.x,s.y),dt.map.depthTexture=new Ki(s.x,s.y,mi)),dt.map.depthTexture.name=ut.name+".shadowMap",dt.map.depthTexture.format=Mi,this.type===gs?(dt.map.depthTexture.compareFunction=ot?rl:sl,dt.map.depthTexture.minFilter=vn,dt.map.depthTexture.magFilter=vn):(dt.map.depthTexture.compareFunction=null,dt.map.depthTexture.minFilter=Tn,dt.map.depthTexture.magFilter=Tn);dt.camera.updateProjectionMatrix()}dt.map.isWebGLCubeRenderTarget!==!0&&(dt.map.width!==s.x||dt.map.height!==s.y)&&dt.map.setSize(s.x,s.y);let nt=dt.map.isWebGLCubeRenderTarget?6:dt.getViewportCount();ut.isPointLight!==!0&&dt.updateMatrices(ut,y);for(let v=0;v<nt;v++){let qt=dt.getCamera(v);if(ut.isPointLight){let Ht=dt.camera,ae=dt.matrix,Z=ut.distance||Ht.far;Z!==Ht.far&&(Ht.far=Z,Ht.updateProjectionMatrix()),ca.setFromMatrixPosition(ut.matrixWorld),Ht.position.copy(ca),qc.copy(Ht.position),qc.add(x1[v]),Ht.up.copy(_1[v]),Ht.lookAt(qc),Ht.updateMatrixWorld(),ae.makeTranslation(-ca.x,-ca.y,-ca.z),ld.multiplyMatrices(Ht.projectionMatrix,Ht.matrixWorldInverse),dt._frustum.setFromProjectionMatrix(ld,Ht.coordinateSystem,Ht.reversedDepth)}if(dt.map.isWebGLCubeRenderTarget)i.setRenderTarget(dt.map,v),i.clear();else{v===0&&(i.setRenderTarget(dt.map),i.clear());let Ht=dt.getViewport(v);l.set(r.x*Ht.x,r.y*Ht.y,r.x*Ht.z,r.y*Ht.w),b.viewport(l)}n=dt.getFrustum(v),x(F,y,qt,ut,this.type)}dt.isPointLightShadow!==!0&&this.type===er&&C(dt,y),dt.needsUpdate=!1}d=this.type,A.needsUpdate=!1,i.setRenderTarget(N,H,Y)};function C(T,F){let y=t.update(P);m.defines.VSM_SAMPLES!==T.blurSamples&&(m.defines.VSM_SAMPLES=T.blurSamples,E.defines.VSM_SAMPLES=T.blurSamples,m.needsUpdate=!0,E.needsUpdate=!0),T.mapPass===null?T.mapPass=new Xn(s.x,s.y,{format:ss,type:gi}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),m.uniforms.shadow_pass.value=T.map.depthTexture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(F,null,y,m,P,null),E.uniforms.shadow_pass.value=T.mapPass.texture,E.uniforms.resolution.value.set(T.map.width,T.map.height),E.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(F,null,y,E,P,null)}function I(T,F,y,N){let H=null,Y=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(Y!==void 0)H=Y;else if(H=y.isPointLight===!0?u:o,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){let b=H.uuid,$=F.uuid,X=h[b];X===void 0&&(X={},h[b]=X);let J=X[$];J===void 0&&(J=H.clone(),X[$]=J,F.addEventListener("dispose",R)),H=J}if(H.visible=F.visible,H.wireframe=F.wireframe,N===er?H.side=F.shadowSide!==null?F.shadowSide:F.side:H.side=F.shadowSide!==null?F.shadowSide:_[F.side],H.alphaMap=F.alphaMap,H.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,H.map=F.map,H.clipShadows=F.clipShadows,H.clippingPlanes=F.clippingPlanes,H.clipIntersection=F.clipIntersection,H.displacementMap=F.displacementMap,H.displacementScale=F.displacementScale,H.displacementBias=F.displacementBias,H.wireframeLinewidth=F.wireframeLinewidth,H.linewidth=F.linewidth,y.isPointLight===!0&&H.isMeshDistanceMaterial===!0){let b=i.properties.get(H);b.light=y}return H}function x(T,F,y,N,H){if(T.visible===!1)return;if(T.layers.test(F.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&H===er)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);let $=t.update(T),X=T.material;if(Array.isArray(X)){let J=$.groups;for(let ut=0,dt=J.length;ut<dt;ut++){let wt=J[ut],ot=X[wt.materialIndex];if(ot&&ot.visible){let nt=I(T,ot,N,H);T.onBeforeShadow(i,T,F,y,$,nt,wt),i.renderBufferDirect(y,null,$,nt,T,wt),T.onAfterShadow(i,T,F,y,$,nt,wt)}}}else if(X.visible){let J=I(T,X,N,H);T.onBeforeShadow(i,T,F,y,$,J,null),i.renderBufferDirect(y,null,$,J,T,null),T.onAfterShadow(i,T,F,y,$,J,null)}}let b=T.children;for(let $=0,X=b.length;$<X;$++)x(b[$],F,y,N,H)}function R(T){T.target.removeEventListener("dispose",R);for(let y in h){let N=h[y],H=T.target.uuid;H in N&&(N[H].dispose(),delete N[H])}}}function v1(i,t){function e(){let G=!1,at=new pn,ht=null,Bt=new pn(0,0,0,0);return{setMask:function(Ct){ht!==Ct&&!G&&(i.colorMask(Ct,Ct,Ct,Ct),ht=Ct)},setLocked:function(Ct){G=Ct},setClear:function(Ct,mt,Qt,ee,xe){xe===!0&&(Ct*=ee,mt*=ee,Qt*=ee),at.set(Ct,mt,Qt,ee),Bt.equals(at)===!1&&(i.clearColor(Ct,mt,Qt,ee),Bt.copy(at))},reset:function(){G=!1,ht=null,Bt.set(-1,0,0,0)}}}function n(){let G=!1,at=!1,ht=null,Bt=null,Ct=null;return{setReversed:function(mt){if(at!==mt){let Qt=t.get("EXT_clip_control");mt?Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.ZERO_TO_ONE_EXT):Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.NEGATIVE_ONE_TO_ONE_EXT),at=mt;let ee=Ct;Ct=null,this.setClear(ee)}},getReversed:function(){return at},setTest:function(mt){mt?St(i.DEPTH_TEST):zt(i.DEPTH_TEST)},setMask:function(mt){ht!==mt&&!G&&(i.depthMask(mt),ht=mt)},setFunc:function(mt){if(at&&(mt=Ou[mt]),Bt!==mt){switch(mt){case Va:i.depthFunc(i.NEVER);break;case Ga:i.depthFunc(i.ALWAYS);break;case Ha:i.depthFunc(i.LESS);break;case Hs:i.depthFunc(i.LEQUAL);break;case Wa:i.depthFunc(i.EQUAL);break;case Xa:i.depthFunc(i.GEQUAL);break;case qa:i.depthFunc(i.GREATER);break;case Ya:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Bt=mt}},setLocked:function(mt){G=mt},setClear:function(mt){Ct!==mt&&(Ct=mt,at&&(mt=1-mt),i.clearDepth(mt))},reset:function(){G=!1,ht=null,Bt=null,Ct=null,at=!1}}}function s(){let G=!1,at=null,ht=null,Bt=null,Ct=null,mt=null,Qt=null,ee=null,xe=null;return{setTest:function(_e){G||(_e?St(i.STENCIL_TEST):zt(i.STENCIL_TEST))},setMask:function(_e){at!==_e&&!G&&(i.stencilMask(_e),at=_e)},setFunc:function(_e,_n,W){(ht!==_e||Bt!==_n||Ct!==W)&&(i.stencilFunc(_e,_n,W),ht=_e,Bt=_n,Ct=W)},setOp:function(_e,_n,W){(mt!==_e||Qt!==_n||ee!==W)&&(i.stencilOp(_e,_n,W),mt=_e,Qt=_n,ee=W)},setLocked:function(_e){G=_e},setClear:function(_e){xe!==_e&&(i.clearStencil(_e),xe=_e)},reset:function(){G=!1,at=null,ht=null,Bt=null,Ct=null,mt=null,Qt=null,ee=null,xe=null}}}let r=new e,l=new n,o=new s,u=new WeakMap,h=new WeakMap,p={},_={},m={},E=new WeakMap,M=[],P=null,A=!1,d=null,C=null,I=null,x=null,R=null,T=null,F=null,y=new Ne(0,0,0),N=0,H=!1,Y=null,b=null,$=null,X=null,J=null,ut=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),dt=!1,wt=0,ot=i.getParameter(i.VERSION);ot.indexOf("WebGL")!==-1?(wt=parseFloat(/^WebGL (\d)/.exec(ot)[1]),dt=wt>=1):ot.indexOf("OpenGL ES")!==-1&&(wt=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),dt=wt>=2);let nt=null,v={},qt=i.getParameter(i.SCISSOR_BOX),Ht=i.getParameter(i.VIEWPORT),ae=new pn().fromArray(qt),Z=new pn().fromArray(Ht);function Ee(G,at,ht,Bt){let Ct=new Uint8Array(4),mt=i.createTexture();i.bindTexture(G,mt),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qt=0;Qt<ht;Qt++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(at,0,i.RGBA,1,1,Bt,0,i.RGBA,i.UNSIGNED_BYTE,Ct):i.texImage2D(at+Qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ct);return mt}let yt={};yt[i.TEXTURE_2D]=Ee(i.TEXTURE_2D,i.TEXTURE_2D,1),yt[i.TEXTURE_CUBE_MAP]=Ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[i.TEXTURE_2D_ARRAY]=Ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),yt[i.TEXTURE_3D]=Ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),l.setClear(1),o.setClear(0),St(i.DEPTH_TEST),l.setFunc(Hs),pe(!1),Me(hc),St(i.CULL_FACE),re(Ti);function St(G){p[G]!==!0&&(i.enable(G),p[G]=!0)}function zt(G){p[G]!==!1&&(i.disable(G),p[G]=!1)}function jt(G,at){return m[G]!==at?(i.bindFramebuffer(G,at),m[G]=at,G===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=at),G===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=at),!0):!1}function $t(G,at){let ht=M,Bt=!1;if(G){ht=E.get(at),ht===void 0&&(ht=[],E.set(at,ht));let Ct=G.textures;if(ht.length!==Ct.length||ht[0]!==i.COLOR_ATTACHMENT0){for(let mt=0,Qt=Ct.length;mt<Qt;mt++)ht[mt]=i.COLOR_ATTACHMENT0+mt;ht.length=Ct.length,Bt=!0}}else ht[0]!==i.BACK&&(ht[0]=i.BACK,Bt=!0);Bt&&i.drawBuffers(ht)}function ve(G){return P!==G?(i.useProgram(G),P=G,!0):!1}let Ke={[xs]:i.FUNC_ADD,[ru]:i.FUNC_SUBTRACT,[au]:i.FUNC_REVERSE_SUBTRACT};Ke[ou]=i.MIN,Ke[lu]=i.MAX;let oe={[cu]:i.ZERO,[hu]:i.ONE,[uu]:i.SRC_COLOR,[pc]:i.SRC_ALPHA,[xu]:i.SRC_ALPHA_SATURATE,[mu]:i.DST_COLOR,[fu]:i.DST_ALPHA,[du]:i.ONE_MINUS_SRC_COLOR,[mc]:i.ONE_MINUS_SRC_ALPHA,[gu]:i.ONE_MINUS_DST_COLOR,[pu]:i.ONE_MINUS_DST_ALPHA,[_u]:i.CONSTANT_COLOR,[yu]:i.ONE_MINUS_CONSTANT_COLOR,[vu]:i.CONSTANT_ALPHA,[Mu]:i.ONE_MINUS_CONSTANT_ALPHA};function re(G,at,ht,Bt,Ct,mt,Qt,ee,xe,_e){if(G===Ti){A===!0&&(zt(i.BLEND),A=!1);return}if(A===!1&&(St(i.BLEND),A=!0),G!==su){if(G!==d||_e!==H){if((C!==xs||R!==xs)&&(i.blendEquation(i.FUNC_ADD),C=xs,R=xs),_e)switch(G){case nr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uc:i.blendFunc(i.ONE,i.ONE);break;case dc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:we("WebGLState: Invalid blending: ",G);break}else switch(G){case nr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case dc:we("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fc:we("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:we("WebGLState: Invalid blending: ",G);break}I=null,x=null,T=null,F=null,y.set(0,0,0),N=0,d=G,H=_e}return}Ct=Ct||at,mt=mt||ht,Qt=Qt||Bt,(at!==C||Ct!==R)&&(i.blendEquationSeparate(Ke[at],Ke[Ct]),C=at,R=Ct),(ht!==I||Bt!==x||mt!==T||Qt!==F)&&(i.blendFuncSeparate(oe[ht],oe[Bt],oe[mt],oe[Qt]),I=ht,x=Bt,T=mt,F=Qt),(ee.equals(y)===!1||xe!==N)&&(i.blendColor(ee.r,ee.g,ee.b,xe),y.copy(ee),N=xe),d=G,H=!1}function qe(G,at){G.side===si?zt(i.CULL_FACE):St(i.CULL_FACE);let ht=G.side===Bn;at&&(ht=!ht),pe(ht),G.blending===nr&&G.transparent===!1?re(Ti):re(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),l.setFunc(G.depthFunc),l.setTest(G.depthTest),l.setMask(G.depthWrite),r.setMask(G.colorWrite);let Bt=G.stencilWrite;o.setTest(Bt),Bt&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ge(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?St(i.SAMPLE_ALPHA_TO_COVERAGE):zt(i.SAMPLE_ALPHA_TO_COVERAGE)}function pe(G){Y!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),Y=G)}function Me(G){G!==eu?(St(i.CULL_FACE),G!==b&&(G===hc?i.cullFace(i.BACK):G===nu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):zt(i.CULL_FACE),b=G}function Ie(G){G!==$&&(dt&&i.lineWidth(G),$=G)}function Ge(G,at,ht){G?(St(i.POLYGON_OFFSET_FILL),(X!==at||J!==ht)&&(X=at,J=ht,l.getReversed()&&(at=-at),i.polygonOffset(at,ht))):zt(i.POLYGON_OFFSET_FILL)}function Pe(G){G?St(i.SCISSOR_TEST):zt(i.SCISSOR_TEST)}function Ye(G){G===void 0&&(G=i.TEXTURE0+ut-1),nt!==G&&(i.activeTexture(G),nt=G)}function j(G,at,ht){ht===void 0&&(nt===null?ht=i.TEXTURE0+ut-1:ht=nt);let Bt=v[ht];Bt===void 0&&(Bt={type:void 0,texture:void 0},v[ht]=Bt),(Bt.type!==G||Bt.texture!==at)&&(nt!==ht&&(i.activeTexture(ht),nt=ht),i.bindTexture(G,at||yt[G]),Bt.type=G,Bt.texture=at)}function He(){let G=v[nt];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function De(){try{i.compressedTexImage2D(...arguments)}catch(G){we("WebGLState:",G)}}function k(){try{i.compressedTexImage3D(...arguments)}catch(G){we("WebGLState:",G)}}function S(){try{i.texSubImage2D(...arguments)}catch(G){we("WebGLState:",G)}}function st(){try{i.texSubImage3D(...arguments)}catch(G){we("WebGLState:",G)}}function rt(){try{i.compressedTexSubImage2D(...arguments)}catch(G){we("WebGLState:",G)}}function gt(){try{i.compressedTexSubImage3D(...arguments)}catch(G){we("WebGLState:",G)}}function Dt(){try{i.texStorage2D(...arguments)}catch(G){we("WebGLState:",G)}}function It(){try{i.texStorage3D(...arguments)}catch(G){we("WebGLState:",G)}}function vt(){try{i.texImage2D(...arguments)}catch(G){we("WebGLState:",G)}}function Mt(){try{i.texImage3D(...arguments)}catch(G){we("WebGLState:",G)}}function Gt(G){return _[G]!==void 0?_[G]:i.getParameter(G)}function ne(G,at){_[G]!==at&&(i.pixelStorei(G,at),_[G]=at)}function Tt(G){ae.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),ae.copy(G))}function Ot(G){Z.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),Z.copy(G))}function Jt(G,at){let ht=h.get(at);ht===void 0&&(ht=new WeakMap,h.set(at,ht));let Bt=ht.get(G);Bt===void 0&&(Bt=i.getUniformBlockIndex(at,G.name),ht.set(G,Bt))}function le(G,at){let Bt=h.get(at).get(G);u.get(at)!==Bt&&(i.uniformBlockBinding(at,Bt,G.__bindingPointIndex),u.set(at,Bt))}function Et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),l.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),p={},_={},nt=null,v={},m={},E=new WeakMap,M=[],P=null,A=!1,d=null,C=null,I=null,x=null,R=null,T=null,F=null,y=new Ne(0,0,0),N=0,H=!1,Y=null,b=null,$=null,X=null,J=null,ae.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),l.reset(),o.reset()}return{buffers:{color:r,depth:l,stencil:o},enable:St,disable:zt,bindFramebuffer:jt,drawBuffers:$t,useProgram:ve,setBlending:re,setMaterial:qe,setFlipSided:pe,setCullFace:Me,setLineWidth:Ie,setPolygonOffset:Ge,setScissorTest:Pe,activeTexture:Ye,bindTexture:j,unbindTexture:He,compressedTexImage2D:De,compressedTexImage3D:k,texImage2D:vt,texImage3D:Mt,pixelStorei:ne,getParameter:Gt,updateUBOMapping:Jt,uniformBlockBinding:le,texStorage2D:Dt,texStorage3D:It,texSubImage2D:S,texSubImage3D:st,compressedTexSubImage2D:rt,compressedTexSubImage3D:gt,scissor:Tt,viewport:Ot,reset:Et}}function M1(i,t,e,n,s,r,l){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Be,p=new WeakMap,_=new Set,m,E=new WeakMap,M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(k,S){return M?new OffscreenCanvas(k,S):Ir("canvas")}function A(k,S,st){let rt=1,gt=De(k);if((gt.width>st||gt.height>st)&&(rt=st/Math.max(gt.width,gt.height)),rt<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){let Dt=Math.floor(rt*gt.width),It=Math.floor(rt*gt.height);m===void 0&&(m=P(Dt,It));let vt=S?P(Dt,It):m;return vt.width=Dt,vt.height=It,vt.getContext("2d").drawImage(k,0,0,Dt,It),Te("WebGLRenderer: Texture has been resized from ("+gt.width+"x"+gt.height+") to ("+Dt+"x"+It+")."),vt}else return"data"in k&&Te("WebGLRenderer: Image in DataTexture is too big ("+gt.width+"x"+gt.height+")."),k;return k}function d(k){return k.generateMipmaps}function C(k){i.generateMipmap(k)}function I(k){return k.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?i.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(k,S,st,rt,gt,Dt=!1){if(k!==null){if(i[k]!==void 0)return i[k];Te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let It;rt&&(It=t.get("EXT_texture_norm16"),It||Te("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let vt=S;if(S===i.RED&&(st===i.FLOAT&&(vt=i.R32F),st===i.HALF_FLOAT&&(vt=i.R16F),st===i.UNSIGNED_BYTE&&(vt=i.R8),st===i.UNSIGNED_SHORT&&It&&(vt=It.R16_EXT),st===i.SHORT&&It&&(vt=It.R16_SNORM_EXT)),S===i.RED_INTEGER&&(st===i.UNSIGNED_BYTE&&(vt=i.R8UI),st===i.UNSIGNED_SHORT&&(vt=i.R16UI),st===i.UNSIGNED_INT&&(vt=i.R32UI),st===i.BYTE&&(vt=i.R8I),st===i.SHORT&&(vt=i.R16I),st===i.INT&&(vt=i.R32I)),S===i.RG&&(st===i.FLOAT&&(vt=i.RG32F),st===i.HALF_FLOAT&&(vt=i.RG16F),st===i.UNSIGNED_BYTE&&(vt=i.RG8),st===i.UNSIGNED_SHORT&&It&&(vt=It.RG16_EXT),st===i.SHORT&&It&&(vt=It.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(st===i.UNSIGNED_BYTE&&(vt=i.RG8UI),st===i.UNSIGNED_SHORT&&(vt=i.RG16UI),st===i.UNSIGNED_INT&&(vt=i.RG32UI),st===i.BYTE&&(vt=i.RG8I),st===i.SHORT&&(vt=i.RG16I),st===i.INT&&(vt=i.RG32I)),S===i.RGB_INTEGER&&(st===i.UNSIGNED_BYTE&&(vt=i.RGB8UI),st===i.UNSIGNED_SHORT&&(vt=i.RGB16UI),st===i.UNSIGNED_INT&&(vt=i.RGB32UI),st===i.BYTE&&(vt=i.RGB8I),st===i.SHORT&&(vt=i.RGB16I),st===i.INT&&(vt=i.RGB32I)),S===i.RGBA_INTEGER&&(st===i.UNSIGNED_BYTE&&(vt=i.RGBA8UI),st===i.UNSIGNED_SHORT&&(vt=i.RGBA16UI),st===i.UNSIGNED_INT&&(vt=i.RGBA32UI),st===i.BYTE&&(vt=i.RGBA8I),st===i.SHORT&&(vt=i.RGBA16I),st===i.INT&&(vt=i.RGBA32I)),S===i.RGB&&(st===i.UNSIGNED_SHORT&&It&&(vt=It.RGB16_EXT),st===i.SHORT&&It&&(vt=It.RGB16_SNORM_EXT),st===i.UNSIGNED_INT_5_9_9_9_REV&&(vt=i.RGB9_E5),st===i.UNSIGNED_INT_10F_11F_11F_REV&&(vt=i.R11F_G11F_B10F)),S===i.RGBA){let Mt=Dt?Rr:Ve.getTransfer(gt);st===i.FLOAT&&(vt=i.RGBA32F),st===i.HALF_FLOAT&&(vt=i.RGBA16F),st===i.UNSIGNED_BYTE&&(vt=Mt===en?i.SRGB8_ALPHA8:i.RGBA8),st===i.UNSIGNED_SHORT&&It&&(vt=It.RGBA16_EXT),st===i.SHORT&&It&&(vt=It.RGBA16_SNORM_EXT),st===i.UNSIGNED_SHORT_4_4_4_4&&(vt=i.RGBA4),st===i.UNSIGNED_SHORT_5_5_5_1&&(vt=i.RGB5_A1)}return(vt===i.R16F||vt===i.R32F||vt===i.RG16F||vt===i.RG32F||vt===i.RGBA16F||vt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),vt}function R(k,S){let st;return k?S===null||S===mi||S===sr?st=i.DEPTH24_STENCIL8:S===ai?st=i.DEPTH32F_STENCIL8:S===ir&&(st=i.DEPTH24_STENCIL8,Te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===mi||S===sr?st=i.DEPTH_COMPONENT24:S===ai?st=i.DEPTH_COMPONENT32F:S===ir&&(st=i.DEPTH_COMPONENT16),st}function T(k,S){return d(k)===!0||k.isFramebufferTexture&&k.minFilter!==Tn&&k.minFilter!==vn?Math.log2(Math.max(S.width,S.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?S.mipmaps.length:1}function F(k){let S=k.target;S.removeEventListener("dispose",F),N(S),S.isVideoTexture&&p.delete(S),S.isHTMLTexture&&_.delete(S)}function y(k){let S=k.target;S.removeEventListener("dispose",y),Y(S)}function N(k){let S=n.get(k);if(S.__webglInit===void 0)return;let st=k.source,rt=E.get(st);if(rt){let gt=rt[S.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&H(k),Object.keys(rt).length===0&&E.delete(st)}n.remove(k)}function H(k){let S=n.get(k);i.deleteTexture(S.__webglTexture);let st=k.source,rt=E.get(st);delete rt[S.__cacheKey],l.memory.textures--}function Y(k){let S=n.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),n.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(S.__webglFramebuffer[rt]))for(let gt=0;gt<S.__webglFramebuffer[rt].length;gt++)i.deleteFramebuffer(S.__webglFramebuffer[rt][gt]);else i.deleteFramebuffer(S.__webglFramebuffer[rt]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[rt])}else{if(Array.isArray(S.__webglFramebuffer))for(let rt=0;rt<S.__webglFramebuffer.length;rt++)i.deleteFramebuffer(S.__webglFramebuffer[rt]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let rt=0;rt<S.__webglColorRenderbuffer.length;rt++)S.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[rt]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let st=k.textures;for(let rt=0,gt=st.length;rt<gt;rt++){let Dt=n.get(st[rt]);Dt.__webglTexture&&(i.deleteTexture(Dt.__webglTexture),l.memory.textures--),n.remove(st[rt])}n.remove(k)}let b=0;function $(){b=0}function X(){return b}function J(k){b=k}function ut(){let k=b;return k>=s.maxTextures&&Te("WebGLTextures: Trying to use "+(k+1)+" texture units while this GPU supports only "+s.maxTextures),b+=1,k}function dt(k){let S=[];return S.push(k.wrapS),S.push(k.wrapT),S.push(k.wrapR||0),S.push(k.magFilter),S.push(k.minFilter),S.push(k.anisotropy),S.push(k.internalFormat),S.push(k.format),S.push(k.type),S.push(k.generateMipmaps),S.push(k.premultiplyAlpha),S.push(k.flipY),S.push(k.unpackAlignment),S.push(k.colorSpace),S.join()}function wt(k,S){let st=n.get(k);if(k.isVideoTexture&&j(k),k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&st.__version!==k.version){let rt=k.image;if(rt===null)Te("WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)Te("WebGLRenderer: Texture marked for update but image is incomplete");else{zt(st,k,S);return}}else k.isExternalTexture&&(st.__webglTexture=k.sourceTexture?k.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,st.__webglTexture,i.TEXTURE0+S)}function ot(k,S){let st=n.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&st.__version!==k.version){zt(st,k,S);return}else k.isExternalTexture&&(st.__webglTexture=k.sourceTexture?k.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,st.__webglTexture,i.TEXTURE0+S)}function nt(k,S){let st=n.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&st.__version!==k.version){zt(st,k,S);return}e.bindTexture(i.TEXTURE_3D,st.__webglTexture,i.TEXTURE0+S)}function v(k,S){let st=n.get(k);if(k.isCubeDepthTexture!==!0&&k.version>0&&st.__version!==k.version){jt(st,k,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture,i.TEXTURE0+S)}let qt={[Ws]:i.REPEAT,[vi]:i.CLAMP_TO_EDGE,[Za]:i.MIRRORED_REPEAT},Ht={[Tn]:i.NEAREST,[wu]:i.NEAREST_MIPMAP_NEAREST,[ta]:i.NEAREST_MIPMAP_LINEAR,[vn]:i.LINEAR,[yo]:i.LINEAR_MIPMAP_NEAREST,[Ei]:i.LINEAR_MIPMAP_LINEAR},ae={[Cu]:i.NEVER,[Du]:i.ALWAYS,[Ru]:i.LESS,[sl]:i.LEQUAL,[Iu]:i.EQUAL,[rl]:i.GEQUAL,[Pu]:i.GREATER,[Lu]:i.NOTEQUAL};function Z(k,S){if(S.type===ai&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===vn||S.magFilter===yo||S.magFilter===ta||S.magFilter===Ei||S.minFilter===vn||S.minFilter===yo||S.minFilter===ta||S.minFilter===Ei)&&Te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(k,i.TEXTURE_WRAP_S,qt[S.wrapS]),i.texParameteri(k,i.TEXTURE_WRAP_T,qt[S.wrapT]),(k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY)&&i.texParameteri(k,i.TEXTURE_WRAP_R,qt[S.wrapR]),i.texParameteri(k,i.TEXTURE_MAG_FILTER,Ht[S.magFilter]),i.texParameteri(k,i.TEXTURE_MIN_FILTER,Ht[S.minFilter]),S.compareFunction&&(i.texParameteri(k,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(k,i.TEXTURE_COMPARE_FUNC,ae[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Tn||S.minFilter!==ta&&S.minFilter!==Ei||S.type===ai&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let st=t.get("EXT_texture_filter_anisotropic");i.texParameterf(k,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ee(k,S){let st=!1;k.__webglInit===void 0&&(k.__webglInit=!0,S.addEventListener("dispose",F));let rt=S.source,gt=E.get(rt);gt===void 0&&(gt={},E.set(rt,gt));let Dt=dt(S);if(Dt!==k.__cacheKey){gt[Dt]===void 0&&(gt[Dt]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,st=!0),gt[Dt].usedTimes++;let It=gt[k.__cacheKey];It!==void 0&&(gt[k.__cacheKey].usedTimes--,It.usedTimes===0&&H(S)),k.__cacheKey=Dt,k.__webglTexture=gt[Dt].texture}return st}function yt(k,S,st){return Math.floor(Math.floor(k/st)/S)}function St(k,S,st,rt){let Dt=k.updateRanges;if(Dt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,st,rt,S.data);else{Dt.sort((ne,Tt)=>ne.start-Tt.start);let It=0;for(let ne=1;ne<Dt.length;ne++){let Tt=Dt[It],Ot=Dt[ne],Jt=Tt.start+Tt.count,le=yt(Ot.start,S.width,4),Et=yt(Tt.start,S.width,4);Ot.start<=Jt+1&&le===Et&&yt(Ot.start+Ot.count-1,S.width,4)===le?Tt.count=Math.max(Tt.count,Ot.start+Ot.count-Tt.start):(++It,Dt[It]=Ot)}Dt.length=It+1;let vt=e.getParameter(i.UNPACK_ROW_LENGTH),Mt=e.getParameter(i.UNPACK_SKIP_PIXELS),Gt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let ne=0,Tt=Dt.length;ne<Tt;ne++){let Ot=Dt[ne],Jt=Math.floor(Ot.start/4),le=Math.ceil(Ot.count/4),Et=Jt%S.width,G=Math.floor(Jt/S.width),at=le,ht=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Et),e.pixelStorei(i.UNPACK_SKIP_ROWS,G),e.texSubImage2D(i.TEXTURE_2D,0,Et,G,at,ht,st,rt,S.data)}k.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,vt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Mt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Gt)}}function zt(k,S,st){let rt=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(rt=i.TEXTURE_3D);let gt=Ee(k,S),Dt=S.source;e.bindTexture(rt,k.__webglTexture,i.TEXTURE0+st);let It=n.get(Dt);if(Dt.version!==It.__version||gt===!0){if(e.activeTexture(i.TEXTURE0+st),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let ht=Ve.getPrimaries(Ve.workingColorSpace),Bt=S.colorSpace===ki?null:Ve.getPrimaries(S.colorSpace),Ct=S.colorSpace===ki||ht===Bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct)}e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let Mt=A(S.image,!1,s.maxTextureSize);Mt=He(S,Mt);let Gt=r.convert(S.format,S.colorSpace),ne=r.convert(S.type),Tt=x(S.internalFormat,Gt,ne,S.normalized,S.colorSpace,S.isVideoTexture);Z(rt,S);let Ot,Jt=S.mipmaps,le=S.isVideoTexture!==!0,Et=It.__version===void 0||gt===!0,G=Dt.dataReady,at=T(S,Mt);if(S.isDepthTexture)Tt=R(S.format===is,S.type),Et&&(le?e.texStorage2D(i.TEXTURE_2D,1,Tt,Mt.width,Mt.height):e.texImage2D(i.TEXTURE_2D,0,Tt,Mt.width,Mt.height,0,Gt,ne,null));else if(S.isDataTexture)if(Jt.length>0){le&&Et&&e.texStorage2D(i.TEXTURE_2D,at,Tt,Jt[0].width,Jt[0].height);for(let ht=0,Bt=Jt.length;ht<Bt;ht++)Ot=Jt[ht],le?G&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,Ot.width,Ot.height,Gt,ne,Ot.data):e.texImage2D(i.TEXTURE_2D,ht,Tt,Ot.width,Ot.height,0,Gt,ne,Ot.data);S.generateMipmaps=!1}else le?(Et&&e.texStorage2D(i.TEXTURE_2D,at,Tt,Mt.width,Mt.height),G&&St(S,Mt,Gt,ne)):e.texImage2D(i.TEXTURE_2D,0,Tt,Mt.width,Mt.height,0,Gt,ne,Mt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){le&&Et&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,Tt,Jt[0].width,Jt[0].height,Mt.depth);for(let ht=0,Bt=Jt.length;ht<Bt;ht++)if(Ot=Jt[ht],S.format!==oi)if(Gt!==null)if(le){if(G)if(S.layerUpdates.size>0){let Ct=Uc(Ot.width,Ot.height,S.format,S.type);for(let mt of S.layerUpdates){let Qt=Ot.data.subarray(mt*Ct/Ot.data.BYTES_PER_ELEMENT,(mt+1)*Ct/Ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,mt,Ot.width,Ot.height,1,Gt,Qt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,Ot.width,Ot.height,Mt.depth,Gt,Ot.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ht,Tt,Ot.width,Ot.height,Mt.depth,0,Ot.data,0,0);else Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?G&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,Ot.width,Ot.height,Mt.depth,Gt,ne,Ot.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ht,Tt,Ot.width,Ot.height,Mt.depth,0,Gt,ne,Ot.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{le&&Et&&e.texStorage2D(i.TEXTURE_2D,at,Tt,Jt[0].width,Jt[0].height);for(let ht=0,Bt=Jt.length;ht<Bt;ht++)Ot=Jt[ht],S.format!==oi?Gt!==null?le?G&&e.compressedTexSubImage2D(i.TEXTURE_2D,ht,0,0,Ot.width,Ot.height,Gt,Ot.data):e.compressedTexImage2D(i.TEXTURE_2D,ht,Tt,Ot.width,Ot.height,0,Ot.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?G&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,Ot.width,Ot.height,Gt,ne,Ot.data):e.texImage2D(i.TEXTURE_2D,ht,Tt,Ot.width,Ot.height,0,Gt,ne,Ot.data)}else if(S.isDataArrayTexture)if(le){if(Et&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,Tt,Mt.width,Mt.height,Mt.depth),G)if(S.layerUpdates.size>0){let ht=Uc(Mt.width,Mt.height,S.format,S.type);for(let Bt of S.layerUpdates){let Ct=Mt.data.subarray(Bt*ht/Mt.data.BYTES_PER_ELEMENT,(Bt+1)*ht/Mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Bt,Mt.width,Mt.height,1,Gt,ne,Ct)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Gt,ne,Mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Tt,Mt.width,Mt.height,Mt.depth,0,Gt,ne,Mt.data);else if(S.isData3DTexture)le?(Et&&e.texStorage3D(i.TEXTURE_3D,at,Tt,Mt.width,Mt.height,Mt.depth),G&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Gt,ne,Mt.data)):e.texImage3D(i.TEXTURE_3D,0,Tt,Mt.width,Mt.height,Mt.depth,0,Gt,ne,Mt.data);else if(S.isFramebufferTexture){if(Et)if(le)e.texStorage2D(i.TEXTURE_2D,at,Tt,Mt.width,Mt.height);else{let ht=Mt.width,Bt=Mt.height;for(let Ct=0;Ct<at;Ct++)e.texImage2D(i.TEXTURE_2D,Ct,Tt,ht,Bt,0,Gt,ne,null),ht>>=1,Bt>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let ht=i.canvas;if(ht.hasAttribute("layoutsubtree")||ht.setAttribute("layoutsubtree","true"),Mt.parentNode!==ht){ht.appendChild(Mt),_.add(S),ht.onpaint=Bt=>{let Ct=Bt.changedElements;for(let mt of _)Ct.includes(mt.image)&&(mt.needsUpdate=!0)},ht.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Mt);else{let Ct=i.RGBA,mt=i.RGBA,Qt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ct,mt,Qt,Mt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Jt.length>0){if(le&&Et){let ht=De(Jt[0]);e.texStorage2D(i.TEXTURE_2D,at,Tt,ht.width,ht.height)}for(let ht=0,Bt=Jt.length;ht<Bt;ht++)Ot=Jt[ht],le?G&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,Gt,ne,Ot):e.texImage2D(i.TEXTURE_2D,ht,Tt,Gt,ne,Ot);S.generateMipmaps=!1}else if(le){if(Et){let ht=De(Mt);e.texStorage2D(i.TEXTURE_2D,at,Tt,ht.width,ht.height)}G&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Gt,ne,Mt)}else e.texImage2D(i.TEXTURE_2D,0,Tt,Gt,ne,Mt);d(S)&&C(rt),It.__version=Dt.version,S.onUpdate&&S.onUpdate(S)}k.__version=S.version}function jt(k,S,st){if(S.image.length!==6)return;let rt=Ee(k,S),gt=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+st);let Dt=n.get(gt);if(gt.version!==Dt.__version||rt===!0){e.activeTexture(i.TEXTURE0+st);let It=Ve.getPrimaries(Ve.workingColorSpace),vt=S.colorSpace===ki?null:Ve.getPrimaries(S.colorSpace),Mt=S.colorSpace===ki||It===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let Gt=S.isCompressedTexture||S.image[0].isCompressedTexture,ne=S.image[0]&&S.image[0].isDataTexture,Tt=[];for(let mt=0;mt<6;mt++)!Gt&&!ne?Tt[mt]=A(S.image[mt],!0,s.maxCubemapSize):Tt[mt]=ne?S.image[mt].image:S.image[mt],Tt[mt]=He(S,Tt[mt]);let Ot=Tt[0],Jt=r.convert(S.format,S.colorSpace),le=r.convert(S.type),Et=x(S.internalFormat,Jt,le,S.normalized,S.colorSpace),G=S.isVideoTexture!==!0,at=Dt.__version===void 0||rt===!0,ht=gt.dataReady,Bt=T(S,Ot);Z(i.TEXTURE_CUBE_MAP,S);let Ct;if(Gt){G&&at&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Bt,Et,Ot.width,Ot.height);for(let mt=0;mt<6;mt++){Ct=Tt[mt].mipmaps;for(let Qt=0;Qt<Ct.length;Qt++){let ee=Ct[Qt];S.format!==oi?Jt!==null?G?ht&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Qt,0,0,ee.width,ee.height,Jt,ee.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Qt,Et,ee.width,ee.height,0,ee.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Qt,0,0,ee.width,ee.height,Jt,le,ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Qt,Et,ee.width,ee.height,0,Jt,le,ee.data)}}}else{if(Ct=S.mipmaps,G&&at){Ct.length>0&&Bt++;let mt=De(Tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Bt,Et,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(ne){G?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Tt[mt].width,Tt[mt].height,Jt,le,Tt[mt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Et,Tt[mt].width,Tt[mt].height,0,Jt,le,Tt[mt].data);for(let Qt=0;Qt<Ct.length;Qt++){let xe=Ct[Qt].image[mt].image;G?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Qt+1,0,0,xe.width,xe.height,Jt,le,xe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Qt+1,Et,xe.width,xe.height,0,Jt,le,xe.data)}}else{G?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Jt,le,Tt[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Et,Jt,le,Tt[mt]);for(let Qt=0;Qt<Ct.length;Qt++){let ee=Ct[Qt];G?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Qt+1,0,0,Jt,le,ee.image[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Qt+1,Et,Jt,le,ee.image[mt])}}}d(S)&&C(i.TEXTURE_CUBE_MAP),Dt.__version=gt.version,S.onUpdate&&S.onUpdate(S)}k.__version=S.version}function $t(k,S,st,rt,gt,Dt){let It=r.convert(st.format,st.colorSpace),vt=r.convert(st.type),Mt=x(st.internalFormat,It,vt,st.normalized,st.colorSpace),Gt=n.get(S),ne=n.get(st);if(ne.__renderTarget=S,!Gt.__hasExternalTextures){let Tt=Math.max(1,S.width>>Dt),Ot=Math.max(1,S.height>>Dt);gt===i.TEXTURE_3D||gt===i.TEXTURE_2D_ARRAY?e.texImage3D(gt,Dt,Mt,Tt,Ot,S.depth,0,It,vt,null):e.texImage2D(gt,Dt,Mt,Tt,Ot,0,It,vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,k),Ye(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,gt,ne.__webglTexture,0,Pe(S)):(gt===i.TEXTURE_2D||gt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,gt,ne.__webglTexture,Dt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ve(k,S,st){if(i.bindRenderbuffer(i.RENDERBUFFER,k),S.depthBuffer){let rt=S.depthTexture,gt=rt&&rt.isDepthTexture?rt.type:null,Dt=R(S.stencilBuffer,gt),It=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ye(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe(S),Dt,S.width,S.height):st?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe(S),Dt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Dt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,k)}else{let rt=S.textures;for(let gt=0;gt<rt.length;gt++){let Dt=rt[gt],It=r.convert(Dt.format,Dt.colorSpace),vt=r.convert(Dt.type),Mt=x(Dt.internalFormat,It,vt,Dt.normalized,Dt.colorSpace);Ye(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe(S),Mt,S.width,S.height):st?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe(S),Mt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ke(k,S,st){let rt=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,k),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let gt=n.get(S.depthTexture);if(gt.__renderTarget=S,(!gt.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),rt){if(gt.__webglInit===void 0&&(gt.__webglInit=!0,S.depthTexture.addEventListener("dispose",F)),gt.__webglTexture===void 0){gt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,gt.__webglTexture),Z(i.TEXTURE_CUBE_MAP,S.depthTexture);let Gt=r.convert(S.depthTexture.format),ne=r.convert(S.depthTexture.type),Tt;S.depthTexture.format===Mi?Tt=i.DEPTH_COMPONENT24:S.depthTexture.format===is&&(Tt=i.DEPTH24_STENCIL8);for(let Ot=0;Ot<6;Ot++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0,Tt,S.width,S.height,0,Gt,ne,null)}}else wt(S.depthTexture,0);let Dt=gt.__webglTexture,It=Pe(S),vt=rt?i.TEXTURE_CUBE_MAP_POSITIVE_X+st:i.TEXTURE_2D,Mt=S.depthTexture.format===is?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===Mi)Ye(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Mt,vt,Dt,0,It):i.framebufferTexture2D(i.FRAMEBUFFER,Mt,vt,Dt,0);else if(S.depthTexture.format===is)Ye(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Mt,vt,Dt,0,It):i.framebufferTexture2D(i.FRAMEBUFFER,Mt,vt,Dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function oe(k){let S=n.get(k),st=k.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==k.depthTexture){let rt=k.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),rt){let gt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,rt.removeEventListener("dispose",gt)};rt.addEventListener("dispose",gt),S.__depthDisposeCallback=gt}S.__boundDepthTexture=rt}if(k.depthTexture&&!S.__autoAllocateDepthBuffer)if(st)for(let rt=0;rt<6;rt++)Ke(S.__webglFramebuffer[rt],k,rt);else{let rt=k.texture.mipmaps;rt&&rt.length>0?Ke(S.__webglFramebuffer[0],k,0):Ke(S.__webglFramebuffer,k,0)}else if(st){S.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[rt]),S.__webglDepthbuffer[rt]===void 0)S.__webglDepthbuffer[rt]=i.createRenderbuffer(),ve(S.__webglDepthbuffer[rt],k,!1);else{let gt=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=S.__webglDepthbuffer[rt];i.bindRenderbuffer(i.RENDERBUFFER,Dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,Dt)}}else{let rt=k.texture.mipmaps;if(rt&&rt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ve(S.__webglDepthbuffer,k,!1);else{let gt=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,Dt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function re(k,S,st){let rt=n.get(k);S!==void 0&&$t(rt.__webglFramebuffer,k,k.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),st!==void 0&&oe(k)}function qe(k){let S=k.texture,st=n.get(k),rt=n.get(S);k.addEventListener("dispose",y);let gt=k.textures,Dt=k.isWebGLCubeRenderTarget===!0,It=gt.length>1;if(It||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=S.version,l.memory.textures++),Dt){st.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(S.mipmaps&&S.mipmaps.length>0){st.__webglFramebuffer[vt]=[];for(let Mt=0;Mt<S.mipmaps.length;Mt++)st.__webglFramebuffer[vt][Mt]=i.createFramebuffer()}else st.__webglFramebuffer[vt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){st.__webglFramebuffer=[];for(let vt=0;vt<S.mipmaps.length;vt++)st.__webglFramebuffer[vt]=i.createFramebuffer()}else st.__webglFramebuffer=i.createFramebuffer();if(It)for(let vt=0,Mt=gt.length;vt<Mt;vt++){let Gt=n.get(gt[vt]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),l.memory.textures++)}if(k.samples>0&&Ye(k)===!1){st.__webglMultisampledFramebuffer=i.createFramebuffer(),st.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer);for(let vt=0;vt<gt.length;vt++){let Mt=gt[vt];st.__webglColorRenderbuffer[vt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,st.__webglColorRenderbuffer[vt]);let Gt=r.convert(Mt.format,Mt.colorSpace),ne=r.convert(Mt.type),Tt=x(Mt.internalFormat,Gt,ne,Mt.normalized,Mt.colorSpace,k.isXRRenderTarget===!0),Ot=Pe(k);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,Tt,k.width,k.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,st.__webglColorRenderbuffer[vt])}i.bindRenderbuffer(i.RENDERBUFFER,null),k.depthBuffer&&(st.__webglDepthRenderbuffer=i.createRenderbuffer(),ve(st.__webglDepthRenderbuffer,k,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Dt){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),Z(i.TEXTURE_CUBE_MAP,S);for(let vt=0;vt<6;vt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Mt=0;Mt<S.mipmaps.length;Mt++)$t(st.__webglFramebuffer[vt][Mt],k,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Mt);else $t(st.__webglFramebuffer[vt],k,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);d(S)&&C(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let vt=0,Mt=gt.length;vt<Mt;vt++){let Gt=gt[vt],ne=n.get(Gt),Tt=i.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(Tt=k.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Tt,ne.__webglTexture),Z(Tt,Gt),$t(st.__webglFramebuffer,k,Gt,i.COLOR_ATTACHMENT0+vt,Tt,0),d(Gt)&&C(Tt)}e.unbindTexture()}else{let vt=i.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(vt=k.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,rt.__webglTexture),Z(vt,S),S.mipmaps&&S.mipmaps.length>0)for(let Mt=0;Mt<S.mipmaps.length;Mt++)$t(st.__webglFramebuffer[Mt],k,S,i.COLOR_ATTACHMENT0,vt,Mt);else $t(st.__webglFramebuffer,k,S,i.COLOR_ATTACHMENT0,vt,0);d(S)&&C(vt),e.unbindTexture()}k.depthBuffer&&oe(k)}function pe(k){let S=k.textures;for(let st=0,rt=S.length;st<rt;st++){let gt=S[st];if(d(gt)){let Dt=I(k),It=n.get(gt).__webglTexture;e.bindTexture(Dt,It),C(Dt),e.unbindTexture()}}}let Me=[],Ie=[];function Ge(k){if(k.samples>0){if(Ye(k)===!1){let S=k.textures,st=k.width,rt=k.height,gt=i.COLOR_BUFFER_BIT,Dt=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=n.get(k),vt=S.length>1;if(vt)for(let Gt=0;Gt<S.length;Gt++)e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer);let Mt=k.texture.mipmaps;Mt&&Mt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Gt=0;Gt<S.length;Gt++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(gt|=i.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(gt|=i.STENCIL_BUFFER_BIT)),vt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,It.__webglColorRenderbuffer[Gt]);let ne=n.get(S[Gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ne,0)}i.blitFramebuffer(0,0,st,rt,0,0,st,rt,gt,i.NEAREST),u===!0&&(Me.length=0,Ie.length=0,Me.push(i.COLOR_ATTACHMENT0+Gt),k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&(Me.push(Dt),Ie.push(Dt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ie)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Me))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),vt)for(let Gt=0;Gt<S.length;Gt++){e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.RENDERBUFFER,It.__webglColorRenderbuffer[Gt]);let ne=n.get(S[Gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.TEXTURE_2D,ne,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&u){let S=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Pe(k){return Math.min(s.maxSamples,k.samples)}function Ye(k){let S=n.get(k);return k.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function j(k){let S=l.render.frame;p.get(k)!==S&&(p.set(k,S),k.update())}function He(k,S){let st=k.colorSpace,rt=k.format,gt=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||st!==Cr&&st!==ki&&(Ve.getTransfer(st)===en?(rt!==oi||gt!==qn)&&Te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):we("WebGLTextures: Unsupported texture color space:",st)),S}function De(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(h.width=k.naturalWidth||k.width,h.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(h.width=k.displayWidth,h.height=k.displayHeight):(h.width=k.width,h.height=k.height),h}this.allocateTextureUnit=ut,this.resetTextureUnits=$,this.getTextureUnits=X,this.setTextureUnits=J,this.setTexture2D=wt,this.setTexture2DArray=ot,this.setTexture3D=nt,this.setTextureCube=v,this.rebindTextures=re,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=$t,this.useMultisampledRTT=Ye,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function b1(i,t){function e(n,s=ki){let r,l=Ve.getTransfer(s);if(n===qn)return i.UNSIGNED_BYTE;if(n===Mo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===bo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ec)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ac)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===wc)return i.BYTE;if(n===Tc)return i.SHORT;if(n===ir)return i.UNSIGNED_SHORT;if(n===vo)return i.INT;if(n===mi)return i.UNSIGNED_INT;if(n===ai)return i.FLOAT;if(n===gi)return i.HALF_FLOAT;if(n===Cc)return i.ALPHA;if(n===Rc)return i.RGB;if(n===oi)return i.RGBA;if(n===Mi)return i.DEPTH_COMPONENT;if(n===is)return i.DEPTH_STENCIL;if(n===So)return i.RED;if(n===wo)return i.RED_INTEGER;if(n===ss)return i.RG;if(n===To)return i.RG_INTEGER;if(n===Eo)return i.RGBA_INTEGER;if(n===ea||n===na||n===ia||n===sa)if(l===en)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ao||n===Co||n===Ro||n===Io)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ao)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Co)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ro)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Io)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Po||n===Lo||n===Do||n===No||n===Uo||n===ra||n===Fo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Po||n===Lo)return l===en?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Do)return l===en?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===No)return r.COMPRESSED_R11_EAC;if(n===Uo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ra)return r.COMPRESSED_RG11_EAC;if(n===Fo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Oo||n===Bo||n===ko||n===zo||n===Vo||n===Go||n===Ho||n===Wo||n===Xo||n===qo||n===Yo||n===Zo||n===Jo||n===$o)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Oo)return l===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bo)return l===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ko)return l===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zo)return l===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vo)return l===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Go)return l===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ho)return l===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wo)return l===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xo)return l===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qo)return l===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yo)return l===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zo)return l===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jo)return l===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$o)return l===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ko||n===jo||n===Qo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ko)return l===en?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tl||n===el||n===aa||n===nl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===tl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===el)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===sr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var S1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,w1=`
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

}`,th=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Hr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ni({vertexShader:S1,fragmentShader:w1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Dn(new Wr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},eh=class extends bi{constructor(t,e){super();let n=this,s=null,r=1,l=null,o="local-floor",u=1,h=null,p=null,_=null,m=null,E=null,M=null,P=typeof XRWebGLBinding<"u",A=new th,d={},C=e.getContextAttributes(),I=null,x=null,R=[],T=[],F=new Be,y=null,N=null,H=new Pn;H.viewport=new pn;let Y=new Pn;Y.viewport=new pn;let b=[H,Y],$=new mo,X=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(yt){let St=R[yt];return St===void 0&&(St=new Js,R[yt]=St),St.getTargetRaySpace()},this.getControllerGrip=function(yt){let St=R[yt];return St===void 0&&(St=new Js,R[yt]=St),St.getGripSpace()},this.getHand=function(yt){let St=R[yt];return St===void 0&&(St=new Js,R[yt]=St),St.getHandSpace()};function ut(yt){let St=T.indexOf(yt.inputSource);if(St===-1)return;let zt=R[St];zt!==void 0&&(zt.update(yt.inputSource,yt.frame,h||l),zt.dispatchEvent({type:yt.type,data:yt.inputSource}))}function dt(){s.removeEventListener("select",ut),s.removeEventListener("selectstart",ut),s.removeEventListener("selectend",ut),s.removeEventListener("squeeze",ut),s.removeEventListener("squeezestart",ut),s.removeEventListener("squeezeend",ut),s.removeEventListener("end",dt),s.removeEventListener("inputsourceschange",wt);for(let yt=0;yt<R.length;yt++){let St=T[yt];St!==null&&(T[yt]=null,R[yt].disconnect(St))}X=null,J=null,A.reset();for(let yt in d)delete d[yt];if(t.setRenderTarget(I),E=null,m=null,_=null,s=null,x=null,Ee.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(F.width,F.height,!1),N!==null){let yt=N.camera;yt.fov=N.fov,yt.zoom=N.zoom,yt.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(yt){r=yt,n.isPresenting===!0&&Te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(yt){o=yt,n.isPresenting===!0&&Te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||l},this.setReferenceSpace=function(yt){h=yt},this.getBaseLayer=function(){return m!==null?m:E},this.getBinding=function(){return _===null&&P&&(_=new XRWebGLBinding(s,e)),_},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(yt){if(s=yt,s!==null){if(I=t.getRenderTarget(),s.addEventListener("select",ut),s.addEventListener("selectstart",ut),s.addEventListener("selectend",ut),s.addEventListener("squeeze",ut),s.addEventListener("squeezestart",ut),s.addEventListener("squeezeend",ut),s.addEventListener("end",dt),s.addEventListener("inputsourceschange",wt),C.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(F),P&&"createProjectionLayer"in XRWebGLBinding.prototype){let zt=null,jt=null,$t=null;C.depth&&($t=C.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,zt=C.stencil?is:Mi,jt=C.stencil?sr:mi);let ve={colorFormat:e.RGBA8,depthFormat:$t,scaleFactor:r};_=this.getBinding(),m=_.createProjectionLayer(ve),s.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),x=new Xn(m.textureWidth,m.textureHeight,{format:oi,type:qn,depthTexture:new Ki(m.textureWidth,m.textureHeight,jt,void 0,void 0,void 0,void 0,void 0,void 0,zt),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{let zt={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:r};E=new XRWebGLLayer(s,e,zt),s.updateRenderState({baseLayer:E}),t.setPixelRatio(1),t.setSize(E.framebufferWidth,E.framebufferHeight,!1),x=new Xn(E.framebufferWidth,E.framebufferHeight,{format:oi,type:qn,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1,storeMultisampledDepthBuffer:E.ignoreDepthValues===!1,storeMultisampledStencilBuffer:E.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(u),h=null,l=await s.requestReferenceSpace(o),Ee.setContext(s),Ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function wt(yt){for(let St=0;St<yt.removed.length;St++){let zt=yt.removed[St],jt=T.indexOf(zt);jt>=0&&(T[jt]=null,R[jt].disconnect(zt))}for(let St=0;St<yt.added.length;St++){let zt=yt.added[St],jt=T.indexOf(zt);if(jt===-1){for(let ve=0;ve<R.length;ve++)if(ve>=T.length){T.push(zt),jt=ve;break}else if(T[ve]===null){T[ve]=zt,jt=ve;break}if(jt===-1)break}let $t=R[jt];$t&&$t.connect(zt)}}let ot=new lt,nt=new lt;function v(yt,St,zt){ot.setFromMatrixPosition(St.matrixWorld),nt.setFromMatrixPosition(zt.matrixWorld);let jt=ot.distanceTo(nt),$t=St.projectionMatrix.elements,ve=zt.projectionMatrix.elements,Ke=$t[14]/($t[10]-1),oe=$t[14]/($t[10]+1),re=($t[9]+1)/$t[5],qe=($t[9]-1)/$t[5],pe=($t[8]-1)/$t[0],Me=(ve[8]+1)/ve[0],Ie=Ke*pe,Ge=Ke*Me,Pe=jt/(-pe+Me),Ye=Pe*-pe;if(St.matrixWorld.decompose(yt.position,yt.quaternion,yt.scale),yt.translateX(Ye),yt.translateZ(Pe),yt.matrixWorld.compose(yt.position,yt.quaternion,yt.scale),yt.matrixWorldInverse.copy(yt.matrixWorld).invert(),$t[10]===-1)yt.projectionMatrix.copy(St.projectionMatrix),yt.projectionMatrixInverse.copy(St.projectionMatrixInverse);else{let j=Ke+Pe,He=oe+Pe,De=Ie-Ye,k=Ge+(jt-Ye),S=re*oe/He*j,st=qe*oe/He*j;yt.projectionMatrix.makePerspective(De,k,S,st,j,He),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert()}}function qt(yt,St){St===null?yt.matrixWorld.copy(yt.matrix):yt.matrixWorld.multiplyMatrices(St.matrixWorld,yt.matrix),yt.matrixWorldInverse.copy(yt.matrixWorld).invert()}this.updateCamera=function(yt){if(s===null)return;let St=yt.near,zt=yt.far;A.texture!==null&&(A.depthNear>0&&(St=A.depthNear),A.depthFar>0&&(zt=A.depthFar)),$.near=Y.near=H.near=St,$.far=Y.far=H.far=zt,(X!==$.near||J!==$.far)&&(s.updateRenderState({depthNear:$.near,depthFar:$.far}),X=$.near,J=$.far),$.layers.mask=yt.layers.mask|6,H.layers.mask=$.layers.mask&-5,Y.layers.mask=$.layers.mask&-3;let jt=yt.parent,$t=$.cameras;qt($,jt);for(let ve=0;ve<$t.length;ve++)qt($t[ve],jt);$t.length===2?v($,H,Y):$.projectionMatrix.copy(H.projectionMatrix),N===null&&yt.isPerspectiveCamera&&(N={camera:yt,fov:yt.fov,zoom:yt.zoom}),Ht(yt,$,jt)};function Ht(yt,St,zt){zt===null?yt.matrix.copy(St.matrixWorld):(yt.matrix.copy(zt.matrixWorld),yt.matrix.invert(),yt.matrix.multiply(St.matrixWorld)),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.updateMatrixWorld(!0),yt.projectionMatrix.copy(St.projectionMatrix),yt.projectionMatrixInverse.copy(St.projectionMatrixInverse),yt.isPerspectiveCamera&&(yt.fov=$a*2*Math.atan(1/yt.projectionMatrix.elements[5]),yt.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(m===null&&E===null))return u},this.setFoveation=function(yt){u=yt,m!==null&&(m.fixedFoveation=yt),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=yt)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh($)},this.getCameraTexture=function(yt){return d[yt]};let ae=null;function Z(yt,St){if(p=St.getViewerPose(h||l),M=St,p!==null){let zt=p.views;E!==null&&(t.setRenderTargetFramebuffer(x,E.framebuffer),t.setRenderTarget(x));let jt=!1;zt.length!==$.cameras.length&&($.cameras.length=0,jt=!0);for(let oe=0;oe<zt.length;oe++){let re=zt[oe],qe=null;if(E!==null)qe=E.getViewport(re);else{let Me=_.getViewSubImage(m,re);qe=Me.viewport,oe===0&&(t.setRenderTargetTextures(x,Me.colorTexture,Me.depthStencilTexture),t.setRenderTarget(x))}let pe=b[oe];pe===void 0&&(pe=new Pn,pe.layers.enable(oe),pe.viewport=new pn,b[oe]=pe),pe.matrix.fromArray(re.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(re.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(qe.x,qe.y,qe.width,qe.height),oe===0&&($.matrix.copy(pe.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),jt===!0&&$.cameras.push(pe)}let $t=s.enabledFeatures;if($t&&$t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&P){_=n.getBinding();let oe=_.getDepthInformation(zt[0]);oe&&oe.isValid&&oe.texture&&A.init(oe,s.renderState)}if($t&&$t.includes("camera-access")&&P){t.state.unbindTexture(),_=n.getBinding();for(let oe=0;oe<zt.length;oe++){let re=zt[oe].camera;if(re){let qe=d[re];qe||(qe=new Hr,d[re]=qe);let pe=_.getCameraImage(re);qe.sourceTexture=pe}}}}for(let zt=0;zt<R.length;zt++){let jt=T[zt],$t=R[zt];jt!==null&&$t!==void 0&&$t.update(jt,St,h||l)}ae&&ae(yt,St),St.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:St}),M=null}let Ee=new cd;Ee.setAnimationLoop(Z),this.setAnimationLoop=function(yt){ae=yt},this.dispose=function(){}}},T1=new $e,md=new Ce;md.set(-1,0,0,0,1,0,0,0,1);function E1(i,t){function e(A,d){A.matrixAutoUpdate===!0&&A.updateMatrix(),d.value.copy(A.matrix)}function n(A,d){d.color.getRGB(A.fogColor.value,Lc(i)),d.isFog?(A.fogNear.value=d.near,A.fogFar.value=d.far):d.isFogExp2&&(A.fogDensity.value=d.density)}function s(A,d,C,I,x){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(A,d):d.isMeshLambertMaterial?(r(A,d),d.envMap&&(A.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(A,d),_(A,d)):d.isMeshPhongMaterial?(r(A,d),p(A,d),d.envMap&&(A.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(A,d),m(A,d),d.isMeshPhysicalMaterial&&E(A,d,x)):d.isMeshMatcapMaterial?(r(A,d),M(A,d)):d.isMeshDepthMaterial?r(A,d):d.isMeshDistanceMaterial?(r(A,d),P(A,d)):d.isMeshNormalMaterial?r(A,d):d.isLineBasicMaterial?(l(A,d),d.isLineDashedMaterial&&o(A,d)):d.isPointsMaterial?u(A,d,C,I):d.isSpriteMaterial?h(A,d):d.isShadowMaterial?(A.color.value.copy(d.color),A.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(A,d){A.opacity.value=d.opacity,d.color&&A.diffuse.value.copy(d.color),d.emissive&&A.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(A.map.value=d.map,e(d.map,A.mapTransform)),d.alphaMap&&(A.alphaMap.value=d.alphaMap,e(d.alphaMap,A.alphaMapTransform)),d.bumpMap&&(A.bumpMap.value=d.bumpMap,e(d.bumpMap,A.bumpMapTransform),A.bumpScale.value=d.bumpScale,d.side===Bn&&(A.bumpScale.value*=-1)),d.normalMap&&(A.normalMap.value=d.normalMap,e(d.normalMap,A.normalMapTransform),A.normalScale.value.copy(d.normalScale),d.side===Bn&&A.normalScale.value.negate()),d.displacementMap&&(A.displacementMap.value=d.displacementMap,e(d.displacementMap,A.displacementMapTransform),A.displacementScale.value=d.displacementScale,A.displacementBias.value=d.displacementBias),d.emissiveMap&&(A.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,A.emissiveMapTransform)),d.specularMap&&(A.specularMap.value=d.specularMap,e(d.specularMap,A.specularMapTransform)),d.alphaTest>0&&(A.alphaTest.value=d.alphaTest);let C=t.get(d),I=C.envMap,x=C.envMapRotation;I&&(A.envMap.value=I,A.envMapRotation.value.setFromMatrix4(T1.makeRotationFromEuler(x)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&A.envMapRotation.value.premultiply(md),A.reflectivity.value=d.reflectivity,A.ior.value=d.ior,A.refractionRatio.value=d.refractionRatio),d.lightMap&&(A.lightMap.value=d.lightMap,A.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,A.lightMapTransform)),d.aoMap&&(A.aoMap.value=d.aoMap,A.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,A.aoMapTransform))}function l(A,d){A.diffuse.value.copy(d.color),A.opacity.value=d.opacity,d.map&&(A.map.value=d.map,e(d.map,A.mapTransform))}function o(A,d){A.dashSize.value=d.dashSize,A.totalSize.value=d.dashSize+d.gapSize,A.scale.value=d.scale}function u(A,d,C,I){A.diffuse.value.copy(d.color),A.opacity.value=d.opacity,A.size.value=d.size*C,A.scale.value=I*.5,d.map&&(A.map.value=d.map,e(d.map,A.uvTransform)),d.alphaMap&&(A.alphaMap.value=d.alphaMap,e(d.alphaMap,A.alphaMapTransform)),d.alphaTest>0&&(A.alphaTest.value=d.alphaTest)}function h(A,d){A.diffuse.value.copy(d.color),A.opacity.value=d.opacity,A.rotation.value=d.rotation,d.map&&(A.map.value=d.map,e(d.map,A.mapTransform)),d.alphaMap&&(A.alphaMap.value=d.alphaMap,e(d.alphaMap,A.alphaMapTransform)),d.alphaTest>0&&(A.alphaTest.value=d.alphaTest)}function p(A,d){A.specular.value.copy(d.specular),A.shininess.value=Math.max(d.shininess,1e-4)}function _(A,d){d.gradientMap&&(A.gradientMap.value=d.gradientMap)}function m(A,d){A.metalness.value=d.metalness,d.metalnessMap&&(A.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,A.metalnessMapTransform)),A.roughness.value=d.roughness,d.roughnessMap&&(A.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,A.roughnessMapTransform)),d.envMap&&(A.envMapIntensity.value=d.envMapIntensity)}function E(A,d,C){A.ior.value=d.ior,d.sheen>0&&(A.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),A.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(A.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,A.sheenColorMapTransform)),d.sheenRoughnessMap&&(A.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,A.sheenRoughnessMapTransform))),d.clearcoat>0&&(A.clearcoat.value=d.clearcoat,A.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(A.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,A.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(A.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,A.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(A.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,A.clearcoatNormalMapTransform),A.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Bn&&A.clearcoatNormalScale.value.negate())),d.dispersion>0&&(A.dispersion.value=d.dispersion),d.retroreflectivity>0&&(A.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(A.iridescence.value=d.iridescence,A.iridescenceIOR.value=d.iridescenceIOR,A.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],A.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(A.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,A.iridescenceMapTransform)),d.iridescenceThicknessMap&&(A.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,A.iridescenceThicknessMapTransform))),d.transmission>0&&(A.transmission.value=d.transmission,A.transmissionSamplerMap.value=C.texture,A.transmissionSamplerSize.value.set(C.width,C.height),d.transmissionMap&&(A.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,A.transmissionMapTransform)),A.thickness.value=d.thickness,d.thicknessMap&&(A.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,A.thicknessMapTransform)),A.attenuationDistance.value=d.attenuationDistance,A.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(A.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(A.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,A.anisotropyMapTransform))),A.specularIntensity.value=d.specularIntensity,A.specularColor.value.copy(d.specularColor),d.specularColorMap&&(A.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,A.specularColorMapTransform)),d.specularIntensityMap&&(A.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,A.specularIntensityMapTransform))}function M(A,d){d.matcap&&(A.matcap.value=d.matcap)}function P(A,d){let C=t.get(d).light;A.referencePosition.value.setFromMatrixPosition(C.matrixWorld),A.nearDistance.value=C.shadow.camera.near,A.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function A1(i,t,e,n){let s={},r={},l=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function u(x,R){let T=R.program;n.uniformBlockBinding(x,T)}function h(x,R){let T=s[x.id];T===void 0&&(A(x),T=p(x),s[x.id]=T,x.addEventListener("dispose",C));let F=R.program;n.updateUBOMapping(x,F);let y=t.render.frame;r[x.id]!==y&&(m(x),r[x.id]=y)}function p(x){let R=_();x.__bindingPointIndex=R;let T=i.createBuffer(),F=x.__size,y=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,F,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,T),T}function _(){for(let x=0;x<o;x++)if(l.indexOf(x)===-1)return l.push(x),x;return we("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(x){let R=s[x.id],T=x.uniforms,F=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let y=0,N=T.length;y<N;y++){let H=T[y];if(Array.isArray(H))for(let Y=0,b=H.length;Y<b;Y++)E(H[Y],y,Y,F);else E(H,y,0,F)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function E(x,R,T,F){if(P(x,R,T,F)===!0){let y=x.__offset,N=x.value;if(Array.isArray(N)){let H=0;for(let Y=0;Y<N.length;Y++){let b=N[Y],$=d(b);M(b,x.__data,H),typeof b!="number"&&typeof b!="boolean"&&!b.isMatrix3&&!ArrayBuffer.isView(b)&&(H+=$.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(N,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,x.__data)}}function M(x,R,T){typeof x=="number"||typeof x=="boolean"?R[0]=x:x.isMatrix3?(R[0]=x.elements[0],R[1]=x.elements[1],R[2]=x.elements[2],R[3]=0,R[4]=x.elements[3],R[5]=x.elements[4],R[6]=x.elements[5],R[7]=0,R[8]=x.elements[6],R[9]=x.elements[7],R[10]=x.elements[8],R[11]=0):ArrayBuffer.isView(x)?R.set(new x.constructor(x.buffer,x.byteOffset,R.length)):x.toArray(R,T)}function P(x,R,T,F){let y=x.value,N=R+"_"+T;if(F[N]===void 0)return typeof y=="number"||typeof y=="boolean"?F[N]=y:ArrayBuffer.isView(y)?F[N]=y.slice():F[N]=y.clone(),!0;{let H=F[N];if(typeof y=="number"||typeof y=="boolean"){if(H!==y)return F[N]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(H.equals(y)===!1)return H.copy(y),!0}}return!1}function A(x){let R=x.uniforms,T=0,F=16;for(let N=0,H=R.length;N<H;N++){let Y=Array.isArray(R[N])?R[N]:[R[N]];for(let b=0,$=Y.length;b<$;b++){let X=Y[b],J=Array.isArray(X.value)?X.value:[X.value];for(let ut=0,dt=J.length;ut<dt;ut++){let wt=J[ut],ot=d(wt),nt=T%F,v=nt%ot.boundary,qt=nt+v;T+=v,qt!==0&&F-qt<ot.storage&&(T+=F-qt),X.__data=new Float32Array(ot.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=T,T+=ot.storage}}}let y=T%F;return y>0&&(T+=F-y),x.__size=T,x.__cache={},this}function d(x){let R={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(R.boundary=4,R.storage=4):x.isVector2?(R.boundary=8,R.storage=8):x.isVector3||x.isColor?(R.boundary=16,R.storage=12):x.isVector4?(R.boundary=16,R.storage=16):x.isMatrix3?(R.boundary=48,R.storage=48):x.isMatrix4?(R.boundary=64,R.storage=64):x.isTexture?Te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(R.boundary=16,R.storage=x.byteLength):Te("WebGLRenderer: Unsupported uniform value type.",x),R}function C(x){let R=x.target;R.removeEventListener("dispose",C);let T=l.indexOf(R.__bindingPointIndex);l.splice(T,1),i.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function I(){for(let x in s)i.deleteBuffer(s[x]);l=[],s={},r={}}return{bind:u,update:h,dispose:I}}var C1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ai=null;function R1(){return Ai===null&&(Ai=new zr(C1,16,16,ss,gi),Ai.name="DFG_LUT",Ai.minFilter=vn,Ai.magFilter=vn,Ai.wrapS=vi,Ai.wrapT=vi,Ai.generateMipmaps=!1,Ai.needsUpdate=!0),Ai}var ul=class{constructor(t={}){let{canvas:e=Nu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:l=!1,antialias:o=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:m=!1,outputBufferType:E=qn}=t;this.isWebGLRenderer=!0;let M;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=n.getContextAttributes().alpha}else M=l;let P=E,A=new Set([Eo,To,wo]),d=new Set([qn,mi,ir,sr,Mo,bo]),C=new Uint32Array(4),I=new Int32Array(4),x=new lt,R=null,T=null,F=[],y=[],N=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let H=this,Y=!1,b=null,$=null,X=null,J=null;this._outputColorSpace=An;let ut=0,dt=0,wt=null,ot=-1,nt=null,v=new pn,qt=new pn,Ht=null,ae=new Ne(0),Z=0,Ee=e.width,yt=e.height,St=1,zt=null,jt=null,$t=new pn(0,0,Ee,yt),ve=new pn(0,0,Ee,yt),Ke=!1,oe=new $s,re=!1,qe=!1,pe=new $e,Me=new lt,Ie=new pn,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function Ye(){return wt===null?St:1}let j=n;function He(g,z){return e.getContext(g,z)}let De,k,S,st,rt,gt,Dt,It,vt,Mt,Gt,ne,Tt,Ot,Jt,le,Et,G,at,ht,Bt,Ct,mt;try{let g={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",xe,!1),e.addEventListener("webglcontextrestored",_e,!1),e.addEventListener("webglcontextcreationerror",_n,!1),j===null){let z="webgl2";if(j=He(z,g),j===null)throw He(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qt()}catch(g){throw e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",_n,!1),we("WebGLRenderer: "+g.message),g}function Qt(){De=new Fm(j),De.init(),Bt=new b1(j,De),k=new Em(j,De,t,Bt),S=new v1(j,De),k.reversedDepthBuffer&&m&&S.buffers.depth.setReversed(!0),$=j.createFramebuffer(),X=j.createFramebuffer(),J=j.createFramebuffer(),st=new km(j),rt=new a1,gt=new M1(j,De,S,rt,k,Bt,st),Dt=new Um(H),It=new Vf(j),Ct=new wm(j,It),vt=new Om(j,It,st,Ct),Mt=new Vm(j,vt,It,Ct,st),G=new zm(j,k,gt),Jt=new Am(rt),Gt=new r1(H,Dt,De,k,Ct,Jt),ne=new E1(H,rt),Tt=new l1,Ot=new p1(De),Et=new Sm(H,Dt,S,Mt,M,u),le=new y1(H,Mt,k),mt=new A1(j,st,k,S),at=new Tm(j,De,st),ht=new Bm(j,De,st),st.programs=Gt.programs,H.capabilities=k,H.extensions=De,H.properties=rt,H.renderLists=Tt,H.shadowMap=le,H.state=S,H.info=st}P!==qn&&(N=new Hm(P,e.width,e.height,o,s,r));let ee=new eh(H,j);this.xr=ee,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){let g=De.get("WEBGL_lose_context");g&&g.loseContext()},this.forceContextRestore=function(){let g=De.get("WEBGL_lose_context");g&&g.restoreContext()},this.getPixelRatio=function(){return St},this.setPixelRatio=function(g){g!==void 0&&(St=g,this.setSize(Ee,yt,!1))},this.getSize=function(g){return g.set(Ee,yt)},this.setSize=function(g,z,U=!0){if(ee.isPresenting){Te("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=g,yt=z,e.width=Math.floor(g*St),e.height=Math.floor(z*St),U===!0&&(e.style.width=g+"px",e.style.height=z+"px"),N!==null&&N.setSize(e.width,e.height),this.setViewport(0,0,g,z)},this.getDrawingBufferSize=function(g){return g.set(Ee*St,yt*St).floor()},this.setDrawingBufferSize=function(g,z,U){Ee=g,yt=z,St=U,e.width=Math.floor(g*U),e.height=Math.floor(z*U),this.setViewport(0,0,g,z)},this.setEffects=function(g){if(P===qn){we("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(g){for(let z=0;z<g.length;z++)if(g[z].isOutputPass===!0){Te("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(g||[])},this.getCurrentViewport=function(g){return g.copy(v)},this.getViewport=function(g){return g.copy($t)},this.setViewport=function(g,z,U,q){g.isVector4?$t.set(g.x,g.y,g.z,g.w):$t.set(g,z,U,q),S.viewport(v.copy($t).multiplyScalar(St).round())},this.getScissor=function(g){return g.copy(ve)},this.setScissor=function(g,z,U,q){g.isVector4?ve.set(g.x,g.y,g.z,g.w):ve.set(g,z,U,q),S.scissor(qt.copy(ve).multiplyScalar(St).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(g){S.setScissorTest(Ke=g)},this.setOpaqueSort=function(g){zt=g},this.setTransparentSort=function(g){jt=g},this.getClearColor=function(g){return g.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor(...arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha(...arguments)},this.clear=function(g=!0,z=!0,U=!0){let q=0;if(g){let K=!1;if(wt!==null){let Rt=wt.texture.format;K=A.has(Rt)}if(K){let Rt=wt.texture.type,ct=d.has(Rt),bt=Et.getClearColor(),Lt=Et.getClearAlpha(),Xt=bt.r,me=bt.g,be=bt.b;ct?(C[0]=Xt,C[1]=me,C[2]=be,C[3]=Lt,j.clearBufferuiv(j.COLOR,0,C)):(I[0]=Xt,I[1]=me,I[2]=be,I[3]=Lt,j.clearBufferiv(j.COLOR,0,I))}else q|=j.COLOR_BUFFER_BIT}z&&(q|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),U&&(q|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&j.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(g){g.setRenderer(this),b=g},this.dispose=function(){e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",_n,!1),Et.dispose(),Tt.dispose(),Ot.dispose(),rt.dispose(),Dt.dispose(),Mt.dispose(),Ct.dispose(),mt.dispose(),Gt.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",Yt),ee.removeEventListener("sessionend",Zt),ce.stop()};function xe(g){g.preventDefault(),Pr("WebGLRenderer: Context Lost."),Y=!0}function _e(){Pr("WebGLRenderer: Context Restored."),Y=!1;let g=st.autoReset,z=le.enabled,U=le.autoUpdate,q=le.needsUpdate,K=le.type;Qt(),st.autoReset=g,le.enabled=z,le.autoUpdate=U,le.needsUpdate=q,le.type=K}function _n(g){we("WebGLRenderer: A WebGL context could not be created. Reason: ",g.statusMessage)}function W(g){let z=g.target;z.removeEventListener("dispose",W),ft(z)}function ft(g){Nt(g),rt.remove(g)}function Nt(g){let z=rt.get(g).programs;z!==void 0&&(z.forEach(function(U){Gt.releaseProgram(U)}),g.isShaderMaterial&&Gt.releaseShaderCache(g))}this.renderBufferDirect=function(g,z,U,q,K,Rt){z===null&&(z=Ge);let ct=K.isMesh&&K.matrixWorld.determinantAffine()<0,bt=L(g,z,U,q,K);S.setMaterial(q,ct);let Lt=U.index,Xt=1;if(q.wireframe===!0){if(Lt=vt.getWireframeAttribute(U),Lt===void 0)return;Xt=2}let me=U.drawRange,be=U.attributes.position,te=me.start*Xt,Fe=(me.start+me.count)*Xt;Rt!==null&&(te=Math.max(te,Rt.start*Xt),Fe=Math.min(Fe,(Rt.start+Rt.count)*Xt)),Lt!==null?(te=Math.max(te,0),Fe=Math.min(Fe,Lt.count)):be!=null&&(te=Math.max(te,0),Fe=Math.min(Fe,be.count));let fn=Fe-te;if(fn<0||fn===1/0)return;Ct.setup(K,q,bt,U,Lt);let cn,nn=at;if(Lt!==null&&(cn=It.get(Lt),nn=ht,nn.setIndex(cn)),K.isMesh)q.wireframe===!0?(S.setLineWidth(q.wireframeLinewidth*Ye()),nn.setMode(j.LINES)):nn.setMode(j.TRIANGLES);else if(K.isLine){let Sn=q.linewidth;Sn===void 0&&(Sn=1),S.setLineWidth(Sn*Ye()),K.isLineSegments?nn.setMode(j.LINES):K.isLineLoop?nn.setMode(j.LINE_LOOP):nn.setMode(j.LINE_STRIP)}else K.isPoints?nn.setMode(j.POINTS):K.isSprite&&nn.setMode(j.TRIANGLES);if(K.isBatchedMesh)if(De.get("WEBGL_multi_draw"))nn.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let Sn=K._multiDrawStarts,se=K._multiDrawCounts,yn=K._multiDrawCount,We=Lt?It.get(Lt).bytesPerElement:1,Un=rt.get(q).currentProgram.getUniforms();for(let rn=0;rn<yn;rn++)Un.setValue(j,"_gl_DrawID",rn),nn.render(Sn[rn]/We,se[rn])}else if(K.isInstancedMesh)nn.renderInstances(te,fn,K.count);else if(U.isInstancedBufferGeometry){let Sn=U._maxInstanceCount!==void 0?U._maxInstanceCount:1/0,se=Math.min(U.instanceCount,Sn);nn.renderInstances(te,fn,se)}else nn.render(te,fn)};function Ut(g,z,U,q){b!==null&&g.isNodeMaterial&&b.setObject(q,g),re===!0&&Jt.setState(g,U,!1),g.transparent===!0&&g.side===si&&g.forceSinglePass===!1?(g.side=Bn,g.needsUpdate=!0,Qe(g,z,q),g.side=es,g.needsUpdate=!0,Qe(g,z,q),g.side=si):Qe(g,z,q)}this.compile=function(g,z,U=null){U===null&&(U=g),b!==null&&b.renderStart(g,z,U),T=Ot.get(U),T.init(z),y.push(T),U.traverseVisible(function(K){K.isLight&&K.layers.test(z.layers)&&(T.pushLight(K),K.castShadow&&T.pushShadow(K))}),g!==U&&g.traverseVisible(function(K){K.isLight&&K.layers.test(z.layers)&&(T.pushLight(K),K.castShadow&&T.pushShadow(K))}),T.setupLights(),b!==null&&b.updateLights(T.state.lightsArray),qe=this.localClippingEnabled,re=Jt.init(this.clippingPlanes,qe),re===!0&&Jt.setGlobalState(this.clippingPlanes,z),b!==null&&le.render(T.state.shadowsArray,U,z);let q=new Set;return g.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Rt=K.material;if(Rt)if(Array.isArray(Rt))for(let ct=0;ct<Rt.length;ct++){let bt=Rt[ct];Ut(bt,U,z,K),q.add(bt)}else Ut(Rt,U,z,K),q.add(Rt)}),T=y.pop(),b!==null&&b.renderEnd(),q},this.compileAsync=function(g,z,U=null){let q=this.compile(g,z,U);return new Promise(K=>{function Rt(){if(q.forEach(function(ct){let Lt=rt.get(ct).currentProgram;(Lt===void 0||Lt.isReady())&&q.delete(ct)}),q.size===0){K(g);return}setTimeout(Rt,10)}De.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let Pt=null;function Ft(g){Pt&&Pt(g)}function Yt(){ce.stop()}function Zt(){ce.start()}let ce=new cd;ce.setAnimationLoop(Ft),typeof self<"u"&&ce.setContext(self),this.setAnimationLoop=function(g){Pt=g,ee.setAnimationLoop(g),g===null?ce.stop():ce.start()},ee.addEventListener("sessionstart",Yt),ee.addEventListener("sessionend",Zt),this.render=function(g,z){if(z!==void 0&&z.isCamera!==!0){we("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;b!==null&&b.renderStart(g,z);let U=ee.enabled===!0&&ee.isPresenting===!0,q=N!==null&&(wt===null||U)&&N.begin(H,wt);if(g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(z),z=ee.getCamera()),g.isScene===!0&&g.onBeforeRender(H,g,z,wt),T=Ot.get(g,y.length),T.init(z),T.state.textureUnits=gt.getTextureUnits(),y.push(T),pe.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),oe.setFromProjectionMatrix(pe,fi,z.reversedDepth),qe=this.localClippingEnabled,re=Jt.init(this.clippingPlanes,qe),R=Tt.get(g,F.length),R.init(),F.push(R),ee.enabled===!0&&ee.isPresenting===!0){let ct=H.xr.getDepthSensingMesh();ct!==null&&ie(ct,z,-1/0,H.sortObjects)}ie(g,z,0,H.sortObjects),R.finish(),b!==null&&b.updateLights(T.state.lightsArray),H.sortObjects===!0&&R.sort(zt,jt),Pe=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,Pe&&Et.addToRenderList(R,g),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),re===!0&&Jt.beginShadows();let K=T.state.shadowsArray;if(le.render(K,g,z),re===!0&&Jt.endShadows(),(q&&N.hasRenderPass())===!1){let ct=R.opaque,bt=R.transmissive;if(T.setupLights(),z.isArrayCamera){let Lt=z.cameras;if(bt.length>0)for(let Xt=0,me=Lt.length;Xt<me;Xt++){let be=Lt[Xt];ke(ct,bt,g,be)}Pe&&Et.render(g);for(let Xt=0,me=Lt.length;Xt<me;Xt++){let be=Lt[Xt];Re(R,g,be,be.viewport)}}else bt.length>0&&ke(ct,bt,g,z),Pe&&Et.render(g),Re(R,g,z)}wt!==null&&dt===0&&(gt.updateMultisampleRenderTarget(wt),gt.updateRenderTargetMipmap(wt)),q&&N.end(H),g.isScene===!0&&g.onAfterRender(H,g,z),Ct.resetDefaultState(),ot=-1,nt=null,y.pop(),y.length>0?(T=y[y.length-1],gt.setTextureUnits(T.state.textureUnits),re===!0&&Jt.setGlobalState(H.clippingPlanes,T.state.camera)):T=null,F.pop(),F.length>0?R=F[F.length-1]:R=null,b!==null&&b.renderEnd()};function ie(g,z,U,q){if(g.visible===!1)return;if(g.layers.test(z.layers)){if(g.isGroup)U=g.renderOrder;else if(g.isLOD)g.autoUpdate===!0&&g.update(z);else if(g.isLightProbeGrid)T.pushLightProbeGrid(g);else if(g.isLight)T.pushLight(g),g.castShadow&&T.pushShadow(g);else if(g.isSprite){if(!g.frustumCulled||g.intersectsFrustum(oe)){q&&Ie.setFromMatrixPosition(g.matrixWorld).applyMatrix4(pe);let ct=Mt.update(g),bt=g.material;bt.visible&&R.push(g,ct,bt,U,Ie.z,null,z)}}else if((g.isMesh||g.isLine||g.isPoints)&&(!g.frustumCulled||g.intersectsFrustum(oe))){let ct=Mt.update(g),bt=g.material;if(q&&(g.boundingSphere!==void 0?(g.boundingSphere===null&&g.computeBoundingSphere(),Ie.copy(g.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Ie.copy(ct.boundingSphere.center)),Ie.applyMatrix4(g.matrixWorld).applyMatrix4(pe)),Array.isArray(bt)){let Lt=ct.groups;for(let Xt=0,me=Lt.length;Xt<me;Xt++){let be=Lt[Xt],te=bt[be.materialIndex];te&&te.visible&&R.push(g,ct,te,U,Ie.z,be,z)}}else bt.visible&&R.push(g,ct,bt,U,Ie.z,null,z)}}let Rt=g.children;for(let ct=0,bt=Rt.length;ct<bt;ct++)ie(Rt[ct],z,U,q)}function Re(g,z,U,q){let{opaque:K,transmissive:Rt,transparent:ct}=g;T.setupLightsView(U),re===!0&&Jt.setGlobalState(H.clippingPlanes,U),q&&S.viewport(v.copy(q)),K.length>0&&dn(K,z,U),Rt.length>0&&dn(Rt,z,U),ct.length>0&&dn(ct,z,U),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function ke(g,z,U,q){if((U.isScene===!0?U.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[q.id]===void 0){let te=De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[q.id]=new Xn(1,1,{generateMipmaps:!0,type:te?gi:qn,minFilter:Ei,samples:Math.max(4,k.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ve.workingColorSpace})}let Rt=T.state.transmissionRenderTarget[q.id],ct=q.viewport||v;Rt.setSize(ct.z*H.transmissionResolutionScale,ct.w*H.transmissionResolutionScale);let bt=H.getRenderTarget(),Lt=H.getActiveCubeFace(),Xt=H.getActiveMipmapLevel();H.setRenderTarget(Rt),H.getClearColor(ae),Z=H.getClearAlpha(),Z<1&&H.setClearColor(16777215,.5),H.clear(),Pe&&Et.render(U);let me=H.toneMapping;H.toneMapping=pi;let be=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),T.setupLightsView(q),re===!0&&Jt.setGlobalState(H.clippingPlanes,q),dn(g,U,q),gt.updateMultisampleRenderTarget(Rt),gt.updateRenderTargetMipmap(Rt),De.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let Fe=0,fn=z.length;Fe<fn;Fe++){let cn=z[Fe],{object:nn,geometry:Sn,material:se,group:yn}=cn;if(se.side===si&&nn.layers.test(q.layers)){let We=se.side;se.side=Bn,se.needsUpdate=!0,Ae(nn,U,q,Sn,se,yn),se.side=We,se.needsUpdate=!0,te=!0}}te===!0&&(gt.updateMultisampleRenderTarget(Rt),gt.updateRenderTargetMipmap(Rt))}H.setRenderTarget(bt,Lt,Xt),H.setClearColor(ae,Z),be!==void 0&&(q.viewport=be),H.toneMapping=me}function dn(g,z,U){let q=z.isScene===!0?z.overrideMaterial:null;for(let K=0,Rt=g.length;K<Rt;K++){let ct=g[K],{object:bt,geometry:Lt,group:Xt}=ct,me=ct.material;me.allowOverride===!0&&q!==null&&(me=q),bt.layers.test(U.layers)&&Ae(bt,z,U,Lt,me,Xt)}}function Ae(g,z,U,q,K,Rt){b!==null&&K.isNodeMaterial&&b.setObject(g,K),g.onBeforeRender(H,z,U,q,K,Rt),g.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,g.matrixWorld),g.normalMatrix.getNormalMatrix(g.modelViewMatrix),K.onBeforeRender(H,z,U,q,g,Rt),K.transparent===!0&&K.side===si&&K.forceSinglePass===!1?(K.side=Bn,K.needsUpdate=!0,H.renderBufferDirect(U,z,q,K,g,Rt),K.side=es,K.needsUpdate=!0,H.renderBufferDirect(U,z,q,K,g,Rt),K.side=si):H.renderBufferDirect(U,z,q,K,g,Rt),g.onAfterRender(H,z,U,q,K,Rt)}function Qe(g,z,U){z.isScene!==!0&&(z=Ge);let q=rt.get(g),K=T.state.lights,Rt=T.state.shadowsArray,ct=K.state.version,bt=Gt.getParameters(g,K.state,Rt,z,U,T.state.lightProbeGridArray),Lt=Gt.getProgramCacheKey(bt),Xt=q.programs;q.environment=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?z.environment:null,q.fog=z.fog;let me=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap;q.envMap=Dt.get(g.envMap||q.environment,me),q.envMapRotation=q.environment!==null&&g.envMap===null?z.environmentRotation:g.envMapRotation,Xt===void 0&&(g.addEventListener("dispose",W),Xt=new Map,q.programs=Xt);let be=Xt.get(Lt);if(be!==void 0){if(q.currentProgram===be&&q.lightsStateVersion===ct)return Yn(g,bt),be}else bt.uniforms=Gt.getUniforms(g),b!==null&&g.isNodeMaterial&&b.build(g,U,bt),g.onBeforeCompile(bt,H),be=Gt.acquireProgram(bt,Lt),Xt.set(Lt,be),q.uniforms=bt.uniforms;let te=q.uniforms;return(!g.isShaderMaterial&&!g.isRawShaderMaterial||g.clipping===!0)&&(te.clippingPlanes=Jt.uniform),Yn(g,bt),q.needsLights=it(g),q.lightsStateVersion=ct,q.needsLights&&(te.ambientLightColor.value=K.state.ambient,te.lightProbe.value=K.state.probe,te.sunLights.value=K.state.sun,te.sunLightShadows.value=K.state.sunShadow,te.directionalLights.value=K.state.directional,te.directionalLightShadows.value=K.state.directionalShadow,te.spotLights.value=K.state.spot,te.spotLightShadows.value=K.state.spotShadow,te.rectAreaLights.value=K.state.rectArea,te.ltc_1.value=K.state.rectAreaLTC1,te.ltc_2.value=K.state.rectAreaLTC2,te.pointLights.value=K.state.point,te.pointLightShadows.value=K.state.pointShadow,te.hemisphereLights.value=K.state.hemi,te.sunShadowMatrix.value=K.state.sunShadowMatrix,te.sunShadowCascade.value=K.state.sunShadowCascade,te.directionalShadowMatrix.value=K.state.directionalShadowMatrix,te.spotLightMatrix.value=K.state.spotLightMatrix,te.spotLightMap.value=K.state.spotLightMap,te.pointShadowMatrix.value=K.state.pointShadowMatrix),q.lightProbeGrid=T.state.lightProbeGridArray.length>0,q.currentProgram=be,q.uniformsList=null,be}function Ze(g){if(g.uniformsList===null){let z=g.currentProgram.getUniforms();g.uniformsList=or.seqWithValue(z.seq,g.uniforms)}return g.uniformsList}function Yn(g,z){let U=rt.get(g);U.outputColorSpace=z.outputColorSpace,U.batching=z.batching,U.batchingColor=z.batchingColor,U.instancing=z.instancing,U.instancingColor=z.instancingColor,U.instancingMorph=z.instancingMorph,U.skinning=z.skinning,U.morphTargets=z.morphTargets,U.morphNormals=z.morphNormals,U.morphColors=z.morphColors,U.morphTargetsCount=z.morphTargetsCount,U.numClippingPlanes=z.numClippingPlanes,U.numIntersection=z.numClipIntersection,U.vertexAlphas=z.vertexAlphas,U.vertexTangents=z.vertexTangents,U.toneMapping=z.toneMapping}function kn(g,z){if(g.length===0)return null;if(g.length===1)return g[0].texture!==null?g[0]:null;x.setFromMatrixPosition(z.matrixWorld);for(let U=0,q=g.length;U<q;U++){let K=g[U];if(K.texture!==null&&K.boundingBox.containsPoint(x))return K}return null}function L(g,z,U,q,K){z.isScene!==!0&&(z=Ge),gt.resetTextureUnits();let Rt=z.fog,ct=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?z.environment:null,bt=wt===null?H.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:Ve.workingColorSpace,Lt=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Xt=Dt.get(q.envMap||ct,Lt),me=q.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,be=!!U.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),te=!!U.morphAttributes.position,Fe=!!U.morphAttributes.normal,fn=!!U.morphAttributes.color,cn=pi;q.toneMapped&&(wt===null||wt.isXRRenderTarget===!0)&&(cn=H.toneMapping);let nn=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Sn=nn!==void 0?nn.length:0,se=rt.get(q),yn=T.state.lights;if(re===!0&&(qe===!0||g!==nt)){let sn=g===nt&&q.id===ot;Jt.setState(q,g,sn)}let We=!1;q.version===se.__version?(se.needsLights&&se.lightsStateVersion!==yn.state.version||se.outputColorSpace!==bt||K.isBatchedMesh&&se.batching===!1||!K.isBatchedMesh&&se.batching===!0||K.isBatchedMesh&&se.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&se.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&se.instancing===!1||!K.isInstancedMesh&&se.instancing===!0||K.isSkinnedMesh&&se.skinning===!1||!K.isSkinnedMesh&&se.skinning===!0||K.isInstancedMesh&&se.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&se.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&se.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&se.instancingMorph===!1&&K.morphTexture!==null||se.envMap!==Xt||q.fog===!0&&se.fog!==Rt||se.numClippingPlanes!==void 0&&(se.numClippingPlanes!==Jt.numPlanes||se.numIntersection!==Jt.numIntersection)||se.vertexAlphas!==me||se.vertexTangents!==be||se.morphTargets!==te||se.morphNormals!==Fe||se.morphColors!==fn||se.toneMapping!==cn||se.morphTargetsCount!==Sn||!!se.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(We=!0):(We=!0,se.__version=q.version);let Un=se.currentProgram;We===!0&&(Un=Qe(q,z,K),b&&q.isNodeMaterial&&b.onUpdateProgram(q,Un,se));let rn=!1,Fn=!1,zn=!1,je=Un.getUniforms(),Je=se.uniforms;if(S.useProgram(Un.program)&&(rn=!0,Fn=!0,zn=!0),q.id!==ot&&(ot=q.id,Fn=!0),se.needsLights){let sn=kn(T.state.lightProbeGridArray,K);se.lightProbeGrid!==sn&&(se.lightProbeGrid=sn,Fn=!0)}if(rn||nt!==g){S.buffers.depth.getReversed()&&g.reversedDepth!==!0&&(g._reversedDepth=!0,g.updateProjectionMatrix()),je.setValue(j,"projectionMatrix",g.projectionMatrix),je.setValue(j,"viewMatrix",g.matrixWorldInverse);let Zn=je.map.cameraPosition;Zn!==void 0&&Zn.setValue(j,Me.setFromMatrixPosition(g.matrixWorld)),k.logarithmicDepthBuffer&&je.setValue(j,"logDepthBufFC",2/(Math.log(g.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&je.setValue(j,"isOrthographic",g.isOrthographicCamera===!0),nt!==g&&(nt=g,Fn=!0,zn=!0)}if(se.needsLights&&(yn.state.sunShadowMap.length>0&&je.setValue(j,"sunShadowMap",yn.state.sunShadowMap,gt),yn.state.directionalShadowMap.length>0&&je.setValue(j,"directionalShadowMap",yn.state.directionalShadowMap,gt),yn.state.spotShadowMap.length>0&&je.setValue(j,"spotShadowMap",yn.state.spotShadowMap,gt),yn.state.pointShadowMap.length>0&&je.setValue(j,"pointShadowMap",yn.state.pointShadowMap,gt)),K.isSkinnedMesh){je.setOptional(j,K,"bindMatrix"),je.setOptional(j,K,"bindMatrixInverse");let sn=K.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),je.setValue(j,"boneTexture",sn.boneTexture,gt))}K.isBatchedMesh&&(je.setOptional(j,K,"batchingTexture"),je.setValue(j,"batchingTexture",K._matricesTexture,gt),je.setOptional(j,K,"batchingIdTexture"),je.setValue(j,"batchingIdTexture",K._indirectTexture,gt),je.setOptional(j,K,"batchingColorTexture"),K._colorsTexture!==null&&je.setValue(j,"batchingColorTexture",K._colorsTexture,gt));let En=U.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&G.update(K,U,Un),(Fn||se.receiveShadow!==K.receiveShadow)&&(se.receiveShadow=K.receiveShadow,je.setValue(j,"receiveShadow",K.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&z.environment!==null&&(Je.envMapIntensity.value=z.environmentIntensity),Je.dfgLUT!==void 0&&(Je.dfgLUT.value=R1()),Fn){if(je.setValue(j,"toneMappingExposure",H.toneMappingExposure),se.needsLights&&tt(Je,zn),Rt&&q.fog===!0&&ne.refreshFogUniforms(Je,Rt),ne.refreshMaterialUniforms(Je,q,St,yt,T.state.transmissionRenderTarget[g.id]),se.needsLights&&se.lightProbeGrid){let sn=se.lightProbeGrid;Je.probesSH.value=sn.texture,Je.probesMin.value.copy(sn.boundingBox.min),Je.probesMax.value.copy(sn.boundingBox.max),Je.probesResolution.value.copy(sn.resolution)}or.upload(j,Ze(se),Je,gt)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(or.upload(j,Ze(se),Je,gt),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&je.setValue(j,"center",K.center),je.setValue(j,"modelViewMatrix",K.modelViewMatrix),je.setValue(j,"normalMatrix",K.normalMatrix),je.setValue(j,"modelMatrix",K.matrixWorld),q.uniformsGroups!==void 0){let sn=q.uniformsGroups;for(let Zn=0,Jn=sn.length;Zn<Jn;Zn++){let rs=sn[Zn];mt.update(rs,Un),mt.bind(rs,Un)}}return Un}function tt(g,z){g.ambientLightColor.needsUpdate=z,g.lightProbe.needsUpdate=z,g.sunLights.needsUpdate=z,g.sunLightShadows.needsUpdate=z,g.directionalLights.needsUpdate=z,g.directionalLightShadows.needsUpdate=z,g.pointLights.needsUpdate=z,g.pointLightShadows.needsUpdate=z,g.spotLights.needsUpdate=z,g.spotLightShadows.needsUpdate=z,g.rectAreaLights.needsUpdate=z,g.hemisphereLights.needsUpdate=z}function it(g){return g.isMeshLambertMaterial||g.isMeshToonMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isShadowMaterial||g.isShaderMaterial&&g.lights===!0}this.getActiveCubeFace=function(){return ut},this.getActiveMipmapLevel=function(){return dt},this.getRenderTarget=function(){return wt},this.setRenderTargetTextures=function(g,z,U){let q=rt.get(g);q.__autoAllocateDepthBuffer=g.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),rt.get(g.texture).__webglTexture=z,rt.get(g.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:U,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(g,z){let U=rt.get(g);U.__webglFramebuffer=z,U.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(g,z=0,U=0){wt=g,ut=z,dt=U;let q=null,K=!1,Rt=!1;if(g){let bt=rt.get(g);if(bt.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(j.FRAMEBUFFER,bt.__webglFramebuffer),v.copy(g.viewport),qt.copy(g.scissor),Ht=g.scissorTest,S.viewport(v),S.scissor(qt),S.setScissorTest(Ht),ot=-1;return}else if(bt.__webglFramebuffer===void 0)gt.setupRenderTarget(g);else if(bt.__hasExternalTextures)gt.rebindTextures(g,rt.get(g.texture).__webglTexture,rt.get(g.depthTexture).__webglTexture);else if(g.depthBuffer){let me=g.depthTexture;if(bt.__boundDepthTexture!==me){if(me!==null&&rt.has(me)&&(g.width!==me.image.width||g.height!==me.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");gt.setupDepthRenderbuffer(g)}}let Lt=g.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(Rt=!0);let Xt=rt.get(g).__webglFramebuffer;g.isWebGLCubeRenderTarget?(Array.isArray(Xt[z])?q=Xt[z][U]:q=Xt[z],K=!0):g.samples>0&&gt.useMultisampledRTT(g)===!1?q=rt.get(g).__webglMultisampledFramebuffer:Array.isArray(Xt)?q=Xt[U]:q=Xt,v.copy(g.viewport),qt.copy(g.scissor),Ht=g.scissorTest}else v.copy($t).multiplyScalar(St).floor(),qt.copy(ve).multiplyScalar(St).floor(),Ht=Ke;if(U!==0&&(q=$),S.bindFramebuffer(j.FRAMEBUFFER,q)&&S.drawBuffers(g,q),S.viewport(v),S.scissor(qt),S.setScissorTest(Ht),K){let bt=rt.get(g.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+z,bt.__webglTexture,U)}else if(Rt){let bt=z;for(let Lt=0;Lt<g.textures.length;Lt++){let Xt=rt.get(g.textures[Lt]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+Lt,Xt.__webglTexture,U,bt)}}else if(g!==null&&U!==0){let bt=rt.get(g.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,bt.__webglTexture,U)}ot=-1};function pt(g){let z=rt.get(g);return(z.__readFormat!==g.format||z.__readType!==g.type)&&(z.__readFormat=g.format,z.__readType=g.type,z.__formatReadable=k.textureFormatReadable(g.format),z.__typeReadable=k.textureTypeReadable(g.type)),z}this.readRenderTargetPixels=function(g,z,U,q,K,Rt,ct,bt=0){if(!(g&&g.isWebGLRenderTarget)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=rt.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&ct!==void 0&&(Lt=Lt[ct]),Lt){S.bindFramebuffer(j.FRAMEBUFFER,Lt);try{let Xt=g.textures[bt],me=Xt.format,be=Xt.type;g.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+bt);let te=pt(Xt);if(te.__formatReadable===!1){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(te.__typeReadable===!1){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=g.width-q&&U>=0&&U<=g.height-K&&j.readPixels(z,U,q,K,Bt.convert(me),Bt.convert(be),Rt)}finally{let Xt=wt!==null?rt.get(wt).__webglFramebuffer:null;S.bindFramebuffer(j.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(g,z,U,q,K,Rt,ct,bt=0){if(!(g&&g.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=rt.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&ct!==void 0&&(Lt=Lt[ct]),Lt)if(z>=0&&z<=g.width-q&&U>=0&&U<=g.height-K){S.bindFramebuffer(j.FRAMEBUFFER,Lt);let Xt=g.textures[bt],me=Xt.format,be=Xt.type;g.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+bt);let te=pt(Xt);if(te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Fe=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Fe),j.bufferData(j.PIXEL_PACK_BUFFER,Rt.byteLength,j.STREAM_READ),j.readPixels(z,U,q,K,Bt.convert(me),Bt.convert(be),0),j.bindBuffer(j.PIXEL_PACK_BUFFER,null);let fn=wt!==null?rt.get(wt).__webglFramebuffer:null;S.bindFramebuffer(j.FRAMEBUFFER,fn);let cn=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await Fu(j,cn,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Fe),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Rt),j.bindBuffer(j.PIXEL_PACK_BUFFER,null),j.deleteBuffer(Fe),j.deleteSync(cn),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(g,z=null,U=0){let q=Math.pow(2,-U),K=Math.floor(g.image.width*q),Rt=Math.floor(g.image.height*q),ct=z!==null?z.x:0,bt=z!==null?z.y:0;gt.setTexture2D(g,0),j.copyTexSubImage2D(j.TEXTURE_2D,U,0,0,ct,bt,K,Rt),S.unbindTexture()},this.copyTextureToTexture=function(g,z,U=null,q=null,K=0,Rt=0){let ct,bt,Lt,Xt,me,be,te,Fe,fn,cn=g.isCompressedTexture?g.mipmaps[Rt]:g.image;if(U!==null)ct=U.max.x-U.min.x,bt=U.max.y-U.min.y,Lt=U.isBox3?U.max.z-U.min.z:1,Xt=U.min.x,me=U.min.y,be=U.isBox3?U.min.z:0;else{let Je=Math.pow(2,-K);ct=Math.floor(cn.width*Je),bt=Math.floor(cn.height*Je),g.isDataArrayTexture?Lt=cn.depth:g.isData3DTexture?Lt=Math.floor(cn.depth*Je):Lt=1,Xt=0,me=0,be=0}q!==null?(te=q.x,Fe=q.y,fn=q.z):(te=0,Fe=0,fn=0);let nn=Bt.convert(z.format),Sn=Bt.convert(z.type),se;z.isData3DTexture?(gt.setTexture3D(z,0),se=j.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(gt.setTexture2DArray(z,0),se=j.TEXTURE_2D_ARRAY):(gt.setTexture2D(z,0),se=j.TEXTURE_2D),S.activeTexture(j.TEXTURE0),S.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,z.flipY),S.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),S.pixelStorei(j.UNPACK_ALIGNMENT,z.unpackAlignment);let yn=S.getParameter(j.UNPACK_ROW_LENGTH),We=S.getParameter(j.UNPACK_IMAGE_HEIGHT),Un=S.getParameter(j.UNPACK_SKIP_PIXELS),rn=S.getParameter(j.UNPACK_SKIP_ROWS),Fn=S.getParameter(j.UNPACK_SKIP_IMAGES);S.pixelStorei(j.UNPACK_ROW_LENGTH,cn.width),S.pixelStorei(j.UNPACK_IMAGE_HEIGHT,cn.height),S.pixelStorei(j.UNPACK_SKIP_PIXELS,Xt),S.pixelStorei(j.UNPACK_SKIP_ROWS,me),S.pixelStorei(j.UNPACK_SKIP_IMAGES,be);let zn=g.isDataArrayTexture||g.isData3DTexture,je=z.isDataArrayTexture||z.isData3DTexture;if(g.isDepthTexture){let Je=rt.get(g),En=rt.get(z),sn=rt.get(Je.__renderTarget),Zn=rt.get(En.__renderTarget);S.bindFramebuffer(j.READ_FRAMEBUFFER,sn.__webglFramebuffer),S.bindFramebuffer(j.DRAW_FRAMEBUFFER,Zn.__webglFramebuffer);for(let Jn=0;Jn<Lt;Jn++)zn&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,rt.get(g).__webglTexture,K,be+Jn),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,rt.get(z).__webglTexture,Rt,fn+Jn)),j.blitFramebuffer(Xt,me,ct,bt,te,Fe,ct,bt,j.DEPTH_BUFFER_BIT,j.NEAREST);S.bindFramebuffer(j.READ_FRAMEBUFFER,null),S.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(K!==0||g.isRenderTargetTexture||rt.has(g)){let Je=rt.get(g),En=rt.get(z);S.bindFramebuffer(j.READ_FRAMEBUFFER,X),S.bindFramebuffer(j.DRAW_FRAMEBUFFER,J);for(let sn=0;sn<Lt;sn++)zn?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Je.__webglTexture,K,be+sn):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Je.__webglTexture,K),je?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,En.__webglTexture,Rt,fn+sn):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,En.__webglTexture,Rt),K!==0?j.blitFramebuffer(Xt,me,ct,bt,te,Fe,ct,bt,j.COLOR_BUFFER_BIT,j.NEAREST):je?j.copyTexSubImage3D(se,Rt,te,Fe,fn+sn,Xt,me,ct,bt):j.copyTexSubImage2D(se,Rt,te,Fe,Xt,me,ct,bt);S.bindFramebuffer(j.READ_FRAMEBUFFER,null),S.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else je?g.isDataTexture||g.isData3DTexture?j.texSubImage3D(se,Rt,te,Fe,fn,ct,bt,Lt,nn,Sn,cn.data):z.isCompressedArrayTexture?j.compressedTexSubImage3D(se,Rt,te,Fe,fn,ct,bt,Lt,nn,cn.data):j.texSubImage3D(se,Rt,te,Fe,fn,ct,bt,Lt,nn,Sn,cn):g.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Rt,te,Fe,ct,bt,nn,Sn,cn.data):g.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Rt,te,Fe,cn.width,cn.height,nn,cn.data):j.texSubImage2D(j.TEXTURE_2D,Rt,te,Fe,ct,bt,nn,Sn,cn);S.pixelStorei(j.UNPACK_ROW_LENGTH,yn),S.pixelStorei(j.UNPACK_IMAGE_HEIGHT,We),S.pixelStorei(j.UNPACK_SKIP_PIXELS,Un),S.pixelStorei(j.UNPACK_SKIP_ROWS,rn),S.pixelStorei(j.UNPACK_SKIP_IMAGES,Fn),Rt===0&&z.generateMipmaps&&j.generateMipmap(se),S.unbindTexture()},this.initRenderTarget=function(g){rt.get(g).__webglFramebuffer===void 0&&gt.setupRenderTarget(g)},this.initTexture=function(g){g.isCubeTexture?gt.setTextureCube(g,0):g.isData3DTexture?gt.setTexture3D(g,0):g.isDataArrayTexture||g.isCompressedArrayTexture?gt.setTexture2DArray(g,0):gt.setTexture2D(g,0),S.unbindTexture()},this.resetState=function(){ut=0,dt=0,wt=null,S.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ve._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ve._getUnpackColorSpace()}};window.FestaGL=(()=>{let i=Math.PI*2,t=(d,C,I)=>Math.min(I,Math.max(C,d)),e={add:(d,C)=>[d[0]+C[0],d[1]+C[1],d[2]+C[2]],sub:(d,C)=>[d[0]-C[0],d[1]-C[1],d[2]-C[2]],mul:(d,C)=>[d[0]*C,d[1]*C,d[2]*C],dot:(d,C)=>d[0]*C[0]+d[1]*C[1]+d[2]*C[2],cross:(d,C)=>[d[1]*C[2]-d[2]*C[1],d[2]*C[0]-d[0]*C[2],d[0]*C[1]-d[1]*C[0]],len:d=>Math.hypot(...d),norm:d=>{let C=Math.hypot(...d)||1;return d.map(I=>I/C)}},n={identity:()=>new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),multiply:(d,C)=>{let I=new Float32Array(16);for(let x=0;x<4;x++)for(let R=0;R<4;R++)I[x*4+R]=d[R]*C[x*4]+d[4+R]*C[x*4+1]+d[8+R]*C[x*4+2]+d[12+R]*C[x*4+3];return I},perspective:(d,C,I,x)=>{let R=1/Math.tan(d/2),T=new Float32Array(16);return T[0]=R/C,T[5]=R,T[10]=(x+I)/(I-x),T[11]=-1,T[14]=2*x*I/(I-x),T},ortho:(d,C,I,x,R,T)=>new Float32Array([2/(C-d),0,0,0,0,2/(x-I),0,0,0,0,-2/(T-R),0,-(C+d)/(C-d),-(x+I)/(x-I),-(T+R)/(T-R),1]),lookAt:(d,C,I=[0,1,0])=>{let x=e.norm(e.sub(d,C)),R=e.norm(e.cross(I,x)),T=e.cross(x,R);return new Float32Array([R[0],T[0],x[0],0,R[1],T[1],x[1],0,R[2],T[2],x[2],0,-e.dot(R,d),-e.dot(T,d),-e.dot(x,d),1])},compose:(d=0,C=0,I=0,x=0,R=1,T=R,F=R)=>{let y=Math.cos(x),N=Math.sin(x);return new Float32Array([y*R,0,-N*R,0,0,T,0,0,N*F,0,y*F,0,d,C,I,1])},transform:(d,C,I=1)=>[d[0]*C[0]+d[4]*C[1]+d[8]*C[2]+d[12]*I,d[1]*C[0]+d[5]*C[1]+d[9]*C[2]+d[13]*I,d[2]*C[0]+d[6]*C[1]+d[10]*C[2]+d[14]*I],inverse:d=>{let C=new Float32Array(16),I=Array.from(d),x=Array.from({length:4},(R,T)=>[I[T],I[T+4],I[T+8],I[T+12],...Array.from({length:4},(F,y)=>T===y?1:0)]);for(let R=0;R<4;R++){let T=R;for(let y=R+1;y<4;y++)Math.abs(x[y][R])>Math.abs(x[T][R])&&(T=y);[x[R],x[T]]=[x[T],x[R]];let F=x[R][R];if(Math.abs(F)<1e-12)return n.identity();for(let y=0;y<8;y++)x[R][y]/=F;for(let y=0;y<4;y++)if(y!==R){let N=x[y][R];for(let H=0;H<8;H++)x[y][H]-=N*x[R][H]}}for(let R=0;R<4;R++)for(let T=0;T<4;T++)C[T*4+R]=x[R][T+4];return C}};function s(d){return Array.isArray(d)?d:typeof d=="number"?[(d>>16&255)/255,(d>>8&255)/255,(d&255)/255]:(d=d.replace("#",""),d.length===3&&(d=d.split("").map(C=>C+C).join("")),s(parseInt(d,16)))}function r(d=91371){let C=d>>>0;return()=>{C+=1831565813;let I=C;return I=Math.imul(I^I>>>15,I|1),I^=I+Math.imul(I^I>>>7,I|61),((I^I>>>14)>>>0)/4294967296}}let l=(d="#ffffff",C=0,I=.7,x=0,R=0,T=1)=>({color:s(d),p:[C,I,x,R],ao:T});class o{constructor(){this.data=new Float32Array(262144),this.used=0,this.count=0,this.transform=n.identity(),this.animation=[0,0,0,0]}reserve(C){if(this.used+C>this.data.length){let I=new Float32Array(Math.max(this.data.length*2,this.used+C));I.set(this.data),this.data=I}}vertex(C,I,x,R){this.reserve(20),C=n.transform(this.transform,C),I=e.norm(n.transform(this.transform,I,0));let T=this.data,F=this.used,y=R.color;for(let N=0;N<3;N++)T[F+N]=C[N];for(let N=0;N<3;N++)T[F+3+N]=I[N];T[F+6]=x[0],T[F+7]=x[1],T[F+8]=y[0],T[F+9]=y[1],T[F+10]=y[2],T[F+11]=R.ao??1;for(let N=0;N<4;N++)T[F+12+N]=R.p[N];for(let N=0;N<4;N++)T[F+16+N]=this.animation[N];this.used+=20,this.count++}tri(C,I,x,R,T=[[0,0],[0,1],[1,1]],F=null){let y=e.norm(e.cross(e.sub(I,C),e.sub(x,C)));this.vertex(C,F?F[0]:y,T[0],R),this.vertex(I,F?F[1]:y,T[1],R),this.vertex(x,F?F[2]:y,T[2],R)}quad(C,I,x,R,T,F=1,y=1){this.tri(C,I,x,T,[[0,0],[0,y],[F,y]]),this.tri(C,x,R,T,[[0,0],[F,y],[F,0]])}box(C,I,x,R,T,F,y){let N=C-R/2,H=C+R/2,Y=I-T/2,b=I+T/2,$=x-F/2,X=x+F/2;this.quad([N,b,X],[N,Y,X],[H,Y,X],[H,b,X],y,y.fit?1:R,y.fit?1:T),this.quad([H,b,$],[H,Y,$],[N,Y,$],[N,b,$],y,y.fit?1:R,y.fit?1:T),this.quad([H,b,X],[H,Y,X],[H,Y,$],[H,b,$],y,y.fit?1:F,y.fit?1:T),this.quad([N,b,$],[N,Y,$],[N,Y,X],[N,b,X],y,y.fit?1:F,y.fit?1:T),this.quad([N,b,$],[N,b,X],[H,b,X],[H,b,$],y,y.fit?1:R,y.fit?1:F),this.quad([N,Y,X],[N,Y,$],[H,Y,$],[H,Y,X],y,y.fit?1:R,y.fit?1:F)}plane(C,I,x,R,T,F,y=R,N=T){this.quad([C-R/2,I,x-T/2],[C-R/2,I,x+T/2],[C+R/2,I,x+T/2],[C+R/2,I,x-T/2],F,y,N)}sphere(C,I,x,R,T,F,y,N=16,H=10,Y=0,b=Math.PI){let $=(X,J)=>{let ut=X/N*i,dt=Y+J/H*(b-Y),wt=[Math.sin(dt)*Math.cos(ut),Math.cos(dt),Math.sin(dt)*Math.sin(ut)];return{p:[C+wt[0]*R,I+wt[1]*T,x+wt[2]*F],n:e.norm([wt[0]/R,wt[1]/T,wt[2]/F]),uv:[X/N,J/H]}};for(let X=0;X<H;X++)for(let J=0;J<N;J++){let ut=$(J,X),dt=$(J,X+1),wt=$(J+1,X+1),ot=$(J+1,X);for(let nt of[[ut,dt,wt],[ut,wt,ot]]){let v=e.cross(e.sub(nt[1].p,nt[0].p),e.sub(nt[2].p,nt[0].p));e.dot(v,nt[0].n)<0&&([nt[1],nt[2]]=[nt[2],nt[1]]),this.tri(...nt.map(qt=>qt.p),y,nt.map(qt=>qt.uv),nt.map(qt=>qt.n))}}}cylinder(C,I,x,R,T,F=12,y=!0){let N=e.norm(e.sub(I,C)),H=e.norm(e.cross(N,Math.abs(N[1])>.95?[1,0,0]:[0,1,0])),Y=e.cross(N,H),b=e.len(e.sub(I,C)),$=(J,ut,dt)=>e.add(J,e.add(e.mul(H,Math.cos(dt)*ut),e.mul(Y,Math.sin(dt)*ut))),X=J=>e.norm(e.add(e.add(e.mul(H,Math.cos(J)),e.mul(Y,Math.sin(J))),e.mul(N,(x-R)/b)));for(let J=0;J<F;J++){let ut=J/F*i,dt=(J+1)/F*i,wt=$(C,x,ut),ot=$(I,R,ut),nt=$(I,R,dt),v=$(C,x,dt),qt=X(ut),Ht=X(dt);this.tri(wt,nt,ot,T,[[J/F,0],[(J+1)/F,b],[J/F,b]],[qt,Ht,qt]),this.tri(wt,v,nt,T,[[J/F,0],[(J+1)/F,0],[(J+1)/F,b]],[qt,Ht,Ht]),y&&(this.tri(C,v,wt,T),this.tri(I,ot,nt,T))}}disk(C,I,x,R,T,F=32){for(let y=0;y<F;y++){let N=y/F*i,H=(y+1)/F*i;this.tri([C,I,x],[C+Math.cos(H)*R,I,x+Math.sin(H)*R],[C+Math.cos(N)*R,I,x+Math.sin(N)*R],T,[[.5,.5],[.5+Math.cos(H)*.5,.5+Math.sin(H)*.5],[.5+Math.cos(N)*.5,.5+Math.sin(N)*.5]])}}tube(C,I,x,R=8){for(let T=1;T<C.length;T++)this.cylinder(C[T-1],C[T],I,I,x,R)}sign(C,I,x,R,T,F,y=!1){let N=l("#ffffff",F,.8,0,.15);this.quad([C-R/2,I+T/2,x],[C-R/2,I-T/2,x],[C+R/2,I-T/2,x],[C+R/2,I+T/2,x],N),y&&this.box(C,I,x-.022,R+.05,T+.05,.04,l("#574333",3))}scope(C,I){let x=this.transform;this.transform=n.multiply(x,C),I(),this.transform=x}animate(C,I,x){let R=this.animation;this.animation=[...C,I],x(),this.animation=R}}class u{constructor(C=512){this.size=C,this.layers=[],this.names={}}add(C,I){let x=document.createElement("canvas");x.width=x.height=this.size;let R=x.getContext("2d",{willReadFrequently:!0});I&&I(R,this.size);let T=this.layers.length;return this.layers.push(x),this.names[C]=T,T}sign(C,I,x="",R="#304c55",T=""){return this.add(C,(F,y)=>{F.fillStyle="#f9f7f0",F.fillRect(0,0,y,y),F.fillStyle=R,F.fillRect(0,0,y,62),F.fillStyle="#ffffff",F.font='700 24px "Noto Sans CJK JP", "Yu Gothic", sans-serif',F.fillText(T||C,22,41),F.fillStyle="#273b3c";let N=h(F,I,y-52,37),H=N.length>3?30:37;N=h(F,I,y-52,H),F.font=`700 ${H}px "Noto Sans CJK JP", "Yu Gothic", sans-serif`;let Y=154-Math.min(N.length,4)*4;N.slice(0,4).forEach((X,J)=>F.fillText(X,26,Y+J*(H+10))),F.fillStyle="#53605b",F.font='500 25px "Noto Sans CJK JP", "Yu Gothic", sans-serif';let b=h(F,x,y-52,25),$=Math.max(300,Y+N.length*(H+10)+25);b.slice(0,4).forEach((X,J)=>F.fillText(X,26,$+J*34)),F.fillStyle=R,F.fillRect(26,y-53,y-52,3),F.fillStyle="#6b7770",F.font='19px "Noto Sans CJK JP", "Yu Gothic", sans-serif',F.fillText("つながりフェスタ 2026",26,y-23)})}banner(C,I,x="",R="#174f54"){return this.add(C,(T,F)=>{T.scale(1,F/112),T.fillStyle="#f9f7f0",T.fillRect(0,0,F,112),T.fillStyle=R,T.fillRect(0,0,76,112),T.fillStyle="#fff",T.font='700 23px "Noto Sans CJK JP", "Yu Gothic", sans-serif',T.textAlign="center",T.fillText(C,38,64);let y=29;for(;y>17&&(T.font=`700 ${y}px "Noto Sans CJK JP", "Yu Gothic", sans-serif`,!(T.measureText(I).width<F-104));)y--;T.textAlign="left",T.fillStyle="#263d3c",T.fillText(I,92,52),T.font='500 17px "Noto Sans CJK JP", "Yu Gothic", sans-serif',T.fillStyle="#5b675d";let N=x;for(;T.measureText(N).width>F-109&&N.length;)N=N.slice(0,-1);T.fillText(N,92,84),T.fillStyle=R,T.fillRect(76,106,F-76,6)})}upload(C,I=this.size){let x=new Uint8Array(I*I*4*this.layers.length),R=document.createElement("canvas");R.width=R.height=I;let T=R.getContext("2d");this.layers.forEach((F,y)=>{T.clearRect(0,0,I,I),T.drawImage(F,0,0,I,I),x.set(T.getImageData(0,0,I,I).data,y*I*I*4)}),this.texture=new ps(x,I,I,this.layers.length),this.texture.colorSpace=An,this.texture.wrapS=this.texture.wrapT=Ws,this.texture.minFilter=Ei,this.texture.magFilter=vn,this.texture.generateMipmaps=!0,this.texture.anisotropy=4,this.texture.needsUpdate=!0}}function h(d,C,I,x){d.font=`700 ${x}px "Noto Sans CJK JP", "Yu Gothic", sans-serif`;let R=[],T="";for(let F of C){if(F===`
`){R.push(T),T="";continue}d.measureText(T+F).width>I&&T?(R.push(T),T=F):T+=F}return T&&R.push(T),R}let p=`#version 300 es
 precision highp float;out vec2 vUV;void main(){vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));vUV=p;gl_Position=vec4(p*2.-1.,0.,1.);}`,_=`#version 300 es
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
 `,E=`
 vec3 transformed = festaAnimation.xyz+festaRotation()*(position-festaAnimation.xyz);
 if(festaAnimation.w>8.) transformed.z+=sin(festaTime*1.9+transformed.x*4.+transformed.y*1.3)*.08*max(0.,transformed.x-festaAnimation.x);
 if(festaInfo.z>0.) transformed.xz+=festaInfo.z*.045*sin(festaTime*.7+transformed.xz*.23)*clamp(transformed.y*.15,0.,1.);
 festaUV=uv; festaMat=festaSurface; festaShade=festaAO; festaWorld=(instanceMatrix*vec4(transformed,1.)).xyz;
 `;function M(d,C,I=!1){return d.onBeforeCompile=x=>{x.uniforms.festaTime=C.timeUniform,x.uniforms.festaAtlas=C.atlasUniform,x.vertexShader=m+x.vertexShader,x.vertexShader=x.vertexShader.replace("#include <begin_vertex>",E).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
objectNormal=festaRotation()*objectNormal;`),x.fragmentShader=`precision highp sampler2DArray;
uniform sampler2DArray festaAtlas;
varying vec2 festaUV;
varying vec4 festaMat;
varying float festaShade;
varying vec3 festaWorld;
float festaNoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(fract(sin(dot(i,vec2(127.1,311.7)))*43758.5453),fract(sin(dot(i+vec2(1.,0.),vec2(127.1,311.7)))*43758.5453),f.x),mix(fract(sin(dot(i+vec2(0.,1.),vec2(127.1,311.7)))*43758.5453),fract(sin(dot(i+1.,vec2(127.1,311.7)))*43758.5453),f.x),f.y); }
`+x.fragmentShader,x.fragmentShader=x.fragmentShader.replace("#include <map_fragment>",`vec4 festaTexel=texture(festaAtlas,vec3(festaUV,festaMat.x));
if(festaTexel.a<.4) discard;
diffuseColor*=festaTexel;
if(festaMat.x>.5 && festaMat.x<1.5){float variation=festaNoise(festaWorld.xz*.28)*.65+festaNoise(festaWorld.xz*2.1)*.35;diffuseColor.rgb*=mix(.72,1.14,variation);}
if(festaMat.x>3.5 && festaMat.x<4.5)diffuseColor.rgb*=mix(.84,1.09,festaNoise(festaWorld.xz*.6));`),x.fragmentShader=x.fragmentShader.replace("diffuseColor*=festaTexel;",`diffuseColor*=festaTexel;
if(festaMat.x>2.5 && festaMat.x<3.5){
 float weather=festaNoise(festaWorld.xz*.31+vec2(0.,festaWorld.y*.18));
 float baseDamp=(1.-smoothstep(.15,1.6,festaWorld.y))*festaNoise(festaWorld.xz*1.8);
 diffuseColor.rgb*=mix(.93,1.02,weather)*(1.-baseDamp*.13);
}`),I||(x.fragmentShader=x.fragmentShader.replace("#include <roughnessmap_fragment>","float roughnessFactor=clamp(festaMat.y,.06,1.);").replace("#include <metalnessmap_fragment>","float metalnessFactor=clamp(festaMat.z,0.,1.);").replace("#include <emissivemap_fragment>","totalEmissiveRadiance=diffuseColor.rgb*festaMat.w;").replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
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
reflectedLight.indirectDiffuse*=festaShade;`))},d.customProgramCacheKey=()=>I?"festa-depth-2":"festa-standard-2",d}class P{constructor(C,I,{name:x="",shadow:R=!0,instances:T=null,dynamic:F=!1}={}){this.name=x,this.renderer=C,this.count=I.count,this.shadow=R,this.dynamic=F,this.instances=T||[{matrix:n.identity(),info:[0,0,0,0]}];let y=I.data.slice(0,I.used),N=new Ne;for(let b=0;b<y.length;b+=20)N.setRGB(y[b+8],y[b+9],y[b+10],An),y[b+8]=N.r,y[b+9]=N.g,y[b+10]=N.b;let H=new ei,Y=new Fr(y,20);for(let[b,$,X]of[["position",3,0],["normal",3,3],["uv",2,6],["color",3,8],["festaAO",1,11],["festaSurface",4,12],["festaAnimation",4,16]])H.setAttribute(b,new Or(Y,$,X));this.info=new ms(new Float32Array(this.instances.length*4),4),this.info.setUsage(al),H.setAttribute("festaInfo",this.info),this.object=new Vr(H,C.surfaceMaterial,this.instances.length),this.object.name=x,this.object.castShadow=R,this.object.receiveShadow=!0,this.object.frustumCulled=!1,this.object.customDepthMaterial=C.depthMaterial,this.object.instanceMatrix.setUsage(al),this.matrix=new $e,this.updateInstances(),C.scene.add(this.object),C.meshes.push(this),I.data=null}get visible(){return this.object.visible}set visible(C){this.object.visible=C}updateInstances(){this.instances.forEach((C,I)=>{this.object.setMatrixAt(I,this.matrix.fromArray(C.matrix)),this.info.set(C.info||[0,0,0,0],I*4)}),this.object.instanceMatrix.needsUpdate=!0,this.info.needsUpdate=!0}dispose(){this.renderer.scene.remove(this.object),this.object.geometry.dispose(),this.object.dispose(),this.renderer.meshes=this.renderer.meshes.filter(C=>C!==this)}}class A{constructor(C,I="standard"){this.canvas=C,this.engine=new ul({canvas:C,alpha:!1,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0}),this.gl=this.engine.getContext(),this.engine.outputColorSpace=An,this.engine.toneMapping=jr,this.engine.shadowMap.enabled=!0,this.engine.shadowMap.type=gs,this.engine.shadowMap.autoUpdate=!1,this.scene=new Dr,this.scene.fog=new Lr("#c5d3d8",110,420),this.camera={eye:[0,1.68,20],target:[0,1.68,0],fov:66*Math.PI/180,near:.065,far:700},this.threeCamera=new Pn,this.meshes=[],this.quality=I,this.time=0,this.exposure=1.12,this.sun=e.norm([-.38,.79,.48]),this.sunColor=[1,.94,.81],this.sunPower=3.7,this.timeUniform={value:0},this.atlasUniform={value:null},this.surfaceMaterial=M(new Xr({color:16777215,vertexColors:!0,roughness:1,metalness:1,side:si,alphaTest:.4}),this),this.depthMaterial=M(new Qs({depthPacking:Ic,side:si,alphaTest:.4}),this,!0),this.hemisphere=new Zr("#c7e0f5","#817562",1.8),this.scene.add(this.hemisphere),this.sunLight=new $r(16777215,this.sunPower),this.sunLight.castShadow=!0,this.scene.add(this.sunLight,this.sunLight.target),this.stats={draws:0,triangles:0,fps:0},this.frameCount=0,this.fpsStamp=performance.now(),this.shadowAge=-1,this.shadowDirty=!0,this.targetSize=[0,0];let x=new ei;x.setAttribute("position",new Hn([-1,-1,0,3,-1,0,-1,3,0],3)),this.skyUniforms={uInvVP:{value:new $e},uEye:{value:new lt},uSun:{value:new lt},uTime:this.timeUniform};let R=new js({glslVersion:oa,vertexShader:p.replace("#version 300 es","").replace("0.,1.);","1.,1.);"),fragmentShader:_.replace("#version 300 es","").replace("frag=vec4(sky,1.);","sky=sky*1.12; sky=clamp((sky*(2.51*sky+.03))/(sky*(2.43*sky+.59)+.14),0.,1.);frag=vec4(pow(sky,vec3(1./2.2)),1.);"),uniforms:this.skyUniforms,depthWrite:!1,depthTest:!1});this.sky=new Dn(x,R),this.sky.frustumCulled=!1,this.sky.renderOrder=-1e3,this.scene.add(this.sky),this.setQuality(I)}set atlas(C){this._atlas=C,this.atlasUniform.value=C.texture}get atlas(){return this._atlas}setQuality(C){this.quality=C,this.pixelRatio=C==="high"?Math.min(devicePixelRatio,1.75):C==="low"?.8:Math.min(devicePixelRatio,1.15),this.shadowSize=C==="high"?4096:C==="low"?1024:2048,this.engine.setPixelRatio(this.pixelRatio),this.createShadow(),this.resize()}createShadow(){let C=this.sunLight,I=C.shadow;C.position.set(-3+this.sun[0]*230,this.sun[1]*230,26+this.sun[2]*230),C.target.position.set(-3,0,26),C.color.setRGB(...this.sunColor),C.intensity=this.sunPower,Object.assign(I.camera,{left:-108,right:108,top:108,bottom:-108,near:1,far:500}),I.camera.updateProjectionMatrix(),I.bias=-15e-5,I.normalBias=216/this.shadowSize*1.35,I.mapSize.x!==this.shadowSize&&(I.map?.dispose(),I.map=null,I.mapSize.set(this.shadowSize,this.shadowSize)),this.shadowDirty=!0}resize(){let C=Math.max(1,this.canvas.clientWidth),I=Math.max(1,this.canvas.clientHeight);C===this.targetSize[0]&&I===this.targetSize[1]&&this.engine.getPixelRatio()===this.pixelRatio||(this.targetSize=[C,I],this.engine.setSize(C,I,!1))}render(C=0){if(!this.atlas)return;this.time=C,this.timeUniform.value=C,this.resize();let I=this.camera,x=this.threeCamera;x.position.fromArray(I.eye),x.up.set(0,1,0),x.lookAt(new lt(...I.target)),x.fov=I.fov*180/Math.PI,x.aspect=this.canvas.clientWidth/this.canvas.clientHeight,x.near=I.near,x.far=I.far,x.updateProjectionMatrix(),x.updateMatrixWorld(),this.vp=new $e().multiplyMatrices(x.projectionMatrix,x.matrixWorldInverse).elements,this.invVp=new $e().fromArray(this.vp).invert().elements,this.skyUniforms.uInvVP.value.fromArray(this.invVp),this.skyUniforms.uEye.value.fromArray(I.eye),this.skyUniforms.uSun.value.fromArray(this.sun),this.engine.toneMappingExposure=this.exposure,(this.shadowDirty||C-this.shadowAge>.45)&&(this.engine.shadowMap.needsUpdate=!0,this.shadowDirty=!1,this.shadowAge=C),this.engine.render(this.scene,x),this.stats.draws=this.engine.info.render.calls,this.stats.triangles=this.engine.info.render.triangles,this.frameCount++;let R=performance.now();R-this.fpsStamp>1500&&(this.stats.fps=Math.round(this.frameCount*1e3/(R-this.fpsStamp)),this.frameCount=0,this.fpsStamp=R)}project(C){if(!this.vp)return null;let I=this.vp,x=n.transform(I,C),R=I[3]*C[0]+I[7]*C[1]+I[11]*C[2]+I[15];return R<=0?null:{x:(x[0]/R*.5+.5)*this.canvas.clientWidth,y:(-x[1]/R*.5+.5)*this.canvas.clientHeight,z:x[2]/R}}screenRay(C,I){if(!this.invVp)return null;let x=new Kr;return x.setFromCamera(new Be(C/this.canvas.clientWidth*2-1,1-I/this.canvas.clientHeight*2),this.threeCamera),x}groundPoint(C,I){return this.screenRay(C,I)?.ray.intersectPlane(new ti(new lt(0,1,0),0),new lt)?.toArray()||null}signFace(C,I,x,R){let T=this.screenRay(C,I),F=T?.intersectObject(x.object,!1)[0];return F?(T.far=F.distance-.001,T.intersectObjects(R.filter(N=>N.visible).map(N=>N.object),!1).length?null:F.faceIndex):null}}return{V:e,M:n,Geometry:o,Mesh:P,Renderer:A,Atlas:u,material:l,color:s,rng:r,clamp:t,TAU:i,wrap:h}})();window.FestaScenery={height(i,t){let e=(u,h,p,_,m)=>{let E=Math.hypot((i-u)/p,(t-h)/_);return E<1?m*Math.pow(Math.cos(E*Math.PI/2),2):0},n=Math.max(e(112,-4,49,100,25),e(130,82,65,84,22),e(-113,7,41,40,20),e(-39,-103,63,47,15),e(8,-107,45,48,20),e(53,-105,49,46,16));if(i<60.8||i>=103.2||t<=15.08||t>=96.08)return n;let s=u=>(u=Math.max(0,Math.min(1,u)),u*u*(3-2*u)),r=s((t-15.08)/12)*(1-s((t-80.08)/16)),l=s((i-75.2)/28),o=3.7+(Math.max(n,3.7)-3.7)*l;return n+(o-n)*r},textures(i,t){let e=i.layers[3],n=e.getContext("2d"),s=e.width,r=t(8401),l=n.createImageData(s,s);for(let o=0;o<s;o++)for(let u=0;u<s;u++){let h=Math.sin(u/s*Math.PI*4+.5)*Math.cos(o/s*Math.PI*6)*1.7,p=(r()-.5)*9+h,_=(o*s+u)*4;l.data[_]=241+p,l.data[_+1]=239+p,l.data[_+2]=229+p,l.data[_+3]=255}n.putImageData(l,0,0);for(let o of[7,8]){let u=i.layers[o].getContext("2d"),h=t(301+o);u.clearRect(0,0,s,s);for(let p=0;p<1700;p++){let _=h()*Math.PI*2,m=Math.sqrt(h()),E=.5+Math.cos(_)*m*.45,M=.5+Math.sin(_)*m*.42;if(m>.84&&h()>.52)continue;let P=(1-M)*12+h()*17,A=o===7?76+h()*30:18+h()*24;u.fillStyle=`hsl(${A},${o===7?24+h()*22:38+h()*20}%,${16+P}%)`,u.beginPath(),u.ellipse(E*s,M*s,3+h()*7,2+h()*4,h()*6.28,0,6.28),u.fill()}}return i.add("Window reflection",(o,u)=>{let h=o.createLinearGradient(0,0,0,u);h.addColorStop(0,"#9baeb3"),h.addColorStop(.46,"#667d81"),h.addColorStop(.49,"#536562"),h.addColorStop(1,"#364743"),o.fillStyle=h,o.fillRect(0,0,u,u);let p=t(721);for(let _=0;_<150;_++){let m=p()*u,E=u*(.48+p()*.5);o.fillStyle=`rgba(31,48,35,${.025+p()*.1})`,o.beginPath(),o.ellipse(m,E,5+p()*29,3+p()*16,0,0,6.28),o.fill()}o.fillStyle="rgba(218,228,226,.10)",o.fillRect(u*.23,0,u*.03,u),o.fillRect(u*.75,0,u*.018,u)})},build({details:i,green:t,distant:e,signGeo:n,childSign:s,p:r,planPoint:l,onRoad:o,gateOpen:u,m:h,mat:p,M:_,rng:m,TAU:E,ga:M,gb:P,gc:A,gw:d,gd:C,gymRise:I=.45}){let x=m(70031),R=(W,ft)=>W+(ft-W)*x(),T=p("#dcdccf",3,.88),F=p("#c7cbc3",3,.87),y=r(425.28,478),N=r(470,478),H=5.25,Y=3.25,b=M[0]-1.2,$=2.4,X=N[1]+1.2,J=P[1]+1.6,ut=(W,ft,Nt=1.05)=>{i.cylinder([W[0],W[1]+Nt,W[2]],[ft[0],ft[1]+Nt,ft[2]],.028,.028,T,7);let Ut=Math.max(1,Math.ceil(Math.hypot(ft[0]-W[0],ft[2]-W[2])/.19));for(let Pt=0;Pt<=Ut;Pt++){let Ft=Pt/Ut,Yt=W[0]+(ft[0]-W[0])*Ft,Zt=W[1]+(ft[1]-W[1])*Ft,ce=W[2]+(ft[2]-W[2])*Ft;i.cylinder([Yt,Zt,ce],[Yt,Zt+Nt,ce],.016,.016,T,6)}},dt=(W,ft,Nt,Ut,Pt)=>i.box((W+ft)/2,Pt-.14,(Nt+Ut)/2,ft-W,.28,Ut-Nt,T);dt(y[0],M[0],N[1]-1.2,X,H),ut([y[0],H,N[1]-1.2],[M[0],H,N[1]-1.2]),ut([y[0],H,X],[M[0]-$,H,X]);for(let W of[y[0]+.22,M[0]-2.65])i.box(W,H/2-.14,N[1],.38,H-.28,.42,T);let wt=12,ot=(J-X)/wt,nt=(H-Y)/wt;for(let W=0;W<wt;W++){let ft=X+W*ot,Nt=ft+ot,Ut=H-W*nt;i.box(b,Ut-nt/2-.08,(ft+Nt)/2,$,nt+.16,ot+.015,T)}for(let W of[M[0]-$,M[0]])i.quad([W,H-.28,X],[W,Y-.28,J],[W,Y-.48,J],[W,H-.48,X],T),ut([W,H,X],[W,Y,J]);dt(M[0]-$,P[0],P[1],J+1.3,Y),ut([M[0]-$,Y,J+1.3],[A[0]+4.3,Y,J+1.3]),ut([M[0]-$,Y,J],[M[0]-$,Y,J+1.3]);for(let W of[M[0]-$+.25,M[0]+2.2,A[0]+4.4,P[0]-.25])i.box(W,(Y-.28)/2,J+.99,.42,Y-.28,.45,T);i.box((A[0]+4.3+P[0])/2,Y+.46,J+1.17,P[0]-A[0]-4.3,.92,.22,T);let v=p("#778885",0,.48,.08),qt=p("#c3c5b9",0,.63,.18),Ht=p("#414c4e",0,.48,.62);for(let W of[-6.8,-2.3,2.3,6.8])i.box(A[0]+W,6,P[1]+.2,1.35,2.4,.09,qt),i.box(A[0]+W,5.96,P[1]+.26,1.21,2.22,.03,v),i.box(A[0]+W,6.75,P[1]+.29,1.22,.67,.05,T),i.box(A[0]+W,5.52,P[1]+.3,1.22,.045,.04,qt);let ae=M[0]+d*77/309,Z=M[0]+d*156/309,Ee=M[0]+d*202/309,yt=M[0]+d*233/309;for(let[W,ft]of[[M[0]+2.75,1.5],[Z+1.3,1],[Ee+1.075,.95],[yt+2.45,1.5]])i.box(W,1.93,P[1]+.24,ft+.12,1.62,.065,Ht),i.box(W,1.93,P[1]+.28,ft-.08,1.45,.025,v),i.box(W,1.93,P[1]+.31,.045,1.51,.045,Ht),i.box(W,1.93,P[1]+.32,ft+.15,.045,.045,Ht);let St=M[0]+d*.38,zt=P[1]+.27;for(let W of[-1,1]){let ft=St+W*1.65;i.box(ft,1.45,zt+.055,1.04,2.35,.035,v),i.box(ft,1.06,zt+.09,1.1,.045,.06,Ht),i.box(ft,2.49,zt+.09,1.1,.045,.06,Ht),i.box(St+W*2.2,1.54,zt+.09,.055,2.76,.055,Ht),i.box(St+W*1.1,1.54,zt+.09,.055,2.76,.055,Ht),i.box(St+W*1.1,1.45,zt-.5,.035,2.35,1.04,v),i.box(St+W*1.1,1.06,zt-.5,.05,.045,1.08,Ht)}i.box(St,2.91,zt+.09,4.5,.06,.06,Ht),i.box(St,.15,P[1]+1.75,5.6,.3,3,T);for(let W=0;W<3;W++)i.box(St,.025+W*.05,P[1]+4.06-W*.38,5.6,.05+W*.1,.4,T);let jt=p("#83b4c2",0,.54,.12);for(let[W,ft]of[[335,344],[421,433]]){let Nt=r(470,W)[1],Ut=r(470,ft)[1],Pt=(Nt+Ut)/2,Ft=Ut-Nt;for(let Yt=0;Yt<3;Yt++){let Zt=(Yt+1)*I/3;i.box(M[0]-1.38+Yt*.46,Zt/2,Pt,.48,Zt,Ft+.24,T)}i.box(M[0]-.11,I-.04,Pt,.54,.08,Ft+.24,T);for(let Yt of[Nt+.12,Ut-.12])i.box(M[0]-.76,I+1.12,Yt,1.32,2.24,.075,jt),i.box(M[0]-.76,I+2.25,Yt,1.36,.045,.09,qt)}let $t=[[303,334],[345,420],[434,503]];for(let W of[-1,1])for(let[ft,Nt]of $t){let Ut=r(470,ft)[1]+.15,Pt=r(470,Nt)[1]-.15,Ft=Math.max(1,Math.ceil((Pt-Ut)/5.4));for(let Yt=0;Yt<Ft;Yt++){let Zt=Ut+(Pt-Ut)*Yt/Ft+.18,ce=Ut+(Pt-Ut)*(Yt+1)/Ft-.18,ie=A[0]+W*(d/2+.26),Re=.56,ke=4.04;for(let dn of[!1,!0]){let Ae=dn?ke:Re,Qe=dn?Re:ke,Ze=Qe-Ae,Yn=ce-Zt,kn=Math.hypot(Ze,Yn),L=-Yn/kn*.065,tt=Ze/kn*.065;i.quad([ie,Ae+L,Zt+tt],[ie,Ae-L,Zt-tt],[ie,Qe-L,ce-tt],[ie,Qe+L,ce+tt],T,kn,.13);for(let[it,pt]of[[Ae,Zt],[Qe,ce]]){i.box(ie,it,pt,.045,.25,.25,T);for(let g of[-.065,.065])i.cylinder([ie+W*.022,it,pt+g],[ie+W*.04,it,pt+g],.017,.017,p("#abae9e",0,.65,.1),6)}}}}for(let W of[-1,1])for(let[ft,Nt]of $t){let Ut=A[0]+W*(d/2+.185),Pt=r(470,ft)[1],Ft=r(470,Nt)[1];for(let Yt=Pt+.8;Yt<Ft;Yt+=2.65)i.box(Ut,2.12,Yt,.012,3.78,.014,p("#b9baae",0,.96))}for(let W of[-1,1]){let ft=A[0]+W*(d/2+.31);i.cylinder([ft,8.66,M[1]],[ft,8.66,P[1]],.075,.075,T,10);for(let Nt of[M[1]+.32,M[1]+16.5,P[1]-.35])i.cylinder([ft,.25,Nt],[ft,8.66,Nt],.045,.045,T,8);for(let[Nt,Ut]of $t){let Pt=r(470,Nt)[1],Ft=r(470,Ut)[1];i.box(ft-W*.14,.19,(Pt+Ft)/2,.08,.38,Ft-Pt,p("#94958b",3,.96))}}let ve=(W,ft,Nt)=>W+Nt>M[0]&&W-Nt<P[0]&&ft+Nt>M[1]&&ft-Nt<P[1];function Ke(W,ft,Nt,Ut,Pt=1,Ft=82,Yt=!1){if(u(W,ft)||o(W,ft,.6)||W>55&&W<80&&ft>26&&ft<82)return;let Zt=window.FestaScenery.height(W,ft);if(W<-52&&W>-88&&ft<-12&&ft>-70&&(Nt=Math.min(Nt,6.2)),W>-74&&W<-58&&ft>-11&&ft<10)return;let ce=m(Ut);for(let ie=0;ie<Ft;ie++){let Re=ce()*E,ke=Math.sqrt(ce())*Nt*.46*Pt,dn=Nt*(.13+ce()*.77)-ke*.09,Ae=W+Math.cos(Re)*ke,Qe=ft+Math.sin(Re)*ke,Ze=Nt*(.21+ce()*.14),Yn=ce()*E;if(ve(Ae,Qe,Ze*.71))continue;let kn=Yt?p(ie%4?"#a0704d":"#855841",8,.98,0,0,.92):p(ie%7===0?"#879c75":ie%3?"#526b48":"#344f39",7,.98,0,0,.92);t.scope(_.compose(Ae,Zt+dn,Qe,Yn),()=>{t.quad([-Ze/2,-Ze/2,0],[-Ze/2,Ze/2,0],[Ze/2,Ze/2,0],[Ze/2,-Ze/2,0],kn),t.quad([-Ze/2,0,-Ze/2],[-Ze/2,0,Ze/2],[Ze/2,0,Ze/2],[Ze/2,0,-Ze/2],kn)})}for(let ie=0;ie<12;ie++){let Re=ie*E/12,ke=W+Math.cos(Re)*Nt*.25*Pt,dn=ft+Math.sin(Re)*Nt*.25*Pt,Ae=Nt*(.25+ce()*.08),Qe=Yt?p("#75523b",8,.98):p(ie%3?"#3c5a40":"#60734b",7,.98);ve(ke,dn,Ae*.71)||t.scope(_.compose(ke,Zt+Nt*.21,dn,Re),()=>t.quad([-Ae/2,-Ae/2,0],[-Ae/2,Ae/2,0],[Ae/2,Ae/2,0],[Ae/2,-Ae/2,0],Qe))}}let oe=P[1]+3.2,re=p("#94705a",3,.98),qe=p("#4c4835",1,1),pe=m(2701);for(let[W,ft,Nt]of[[M[0]+3,4.6,2.9],[P[0]-4.7,8.4,3.6]]){i.box(W,.24,oe,ft,.48,2.1,re),i.plane(W,.486,oe,ft-.35,1.7,qe);for(let Ut=W-ft/2+.2;Ut<W+ft/2;Ut+=.42)for(let Pt of[.12,.35])i.box(Ut+(Pt>.2?.2:0),Pt,oe+1.055,.012,.2,.015,p("#c3ac8a"));for(let Ut=0;Ut<Math.round(ft*36);Ut++){let Pt=W+(pe()-.5)*(ft-.6),Ft=.5+pe()*Nt,Yt=oe+(pe()-.5)*1.4,Zt=.52+pe()*.4,ce=p(Ut%5?"#6b835a":"#879669",7,1);t.scope(_.compose(Pt,Ft,Yt,pe()*E),()=>{t.quad([-Zt/2,-Zt/2,0],[-Zt/2,Zt/2,0],[Zt/2,Zt/2,0],[Zt/2,-Zt/2,0],ce),t.quad([-Zt/2,0,-Zt/2],[-Zt/2,0,Zt/2],[Zt/2,0,Zt/2],[Zt/2,0,-Zt/2],ce)})}for(let Ut=W-ft/2+.3;Ut<W+ft/2;Ut+=.61){let Pt=oe+1.4;i.box(Ut,.13,Pt,.43,.26,.33,p("#a88767",3,.94));for(let Ft=0;Ft<3;Ft++)i.sphere(Ut+(Ft-1)*.11,.3,Pt,.095,.11,.11,p(Ft%2?"#989b62":"#557549"),8,5)}}let Me=Number((P[0]+3.6).toFixed(2)),Ie=Number((P[1]-20).toFixed(2)),Ge=Number((P[1]+33).toFixed(2)),Pe=3.6,Ye=p("#92968a",3,.99),j=p("#b0b3a6",3,.94);i.quad([Me-.35,0,Ie],[Me-.35,0,Ge],[Me,Pe,Ge],[Me,Pe,Ie],Ye,18,3),i.box(Me+.08,Pe+.08,(Ie+Ge)/2,.64,.16,Ge-Ie,j);for(let W=Ie+.3;W<Ge;W+=2.2)i.cylinder([Me+.1,Pe+.12,W],[Me+.1,Pe+1.16,W],.022,.022,qt,6),i.box(Me-.28,.65,W,.025,.1,.1,p("#454d43"));for(let W of[Pe+.3,Pe+1.12])i.cylinder([Me+.1,W,Ie],[Me+.1,W,Ge],.022,.022,qt,6);for(let W=Ie;W<Ge;W+=5.4)i.cylinder([Me-.34,.05,W],[Me-.01,Pe-.02,W],.012,.012,p("#777e72"),5);{let W=Me+6.3,ft=P[1]+1.4,Nt=8.8,Ut=11,Pt=6.6;e.box(W,Pe+Pt/2,ft,Nt,Pt,Ut,p("#d8d2be",3,.96));let Ft=p("#6f6860",10,.9),Yt=Pe+Pt;for(let Zt of[-1,1])e.quad([W,Yt+1.7,ft-Ut/2-.4],[W,Yt+1.7,ft+Ut/2+.4],[W+Zt*(Nt/2+.4),Yt,ft+Ut/2+.4],[W+Zt*(Nt/2+.4),Yt,ft-Ut/2-.4],Ft,3,4);for(let Zt of[ft-Ut/2,ft+Ut/2])e.tri([W-Nt/2,Yt,Zt],[W,Yt+1.7,Zt],[W+Nt/2,Yt,Zt],T);for(let Zt of[Pe+1.65,Pe+4.8])for(let ce of[-3.6,0,3.6])i.box(W-Nt/2-.025,Zt,ft+ce,.05,1.28,1.4,p("#5d625a")),i.box(W-Nt/2-.06,Zt,ft+ce,.035,1.1,1.22,v),i.box(W-Nt/2-.087,Zt,ft+ce,.04,1.12,.035,qt)}let He=(W,ft)=>o(W,ft,3)||u(W,ft)?0:window.FestaScenery.height(W,ft),De=[...new Set([...Array.from({length:89},(W,ft)=>-156+ft*4),60.8,75.2,103.2])].sort((W,ft)=>W-ft),k=[...new Set([...Array.from({length:72},(W,ft)=>-112+ft*4),15.08,Ie,Ge,96.08])].sort((W,ft)=>W-ft);for(let W=0;W<De.length-1;W++)for(let ft=0;ft<k.length-1;ft++){let Nt=De[W],Ut=k[ft],Pt=De[W+1],Ft=k[ft+1];if(Nt<Me&&Pt===Me&&Ut>=Ie&&Ft<=Ge)continue;let Yt=[[Nt,Ut],[Nt,Ft],[Pt,Ft],[Pt,Ut]].map(([ie,Re])=>[ie,He(ie,Re)-.1,Re]);if(Yt.every(ie=>ie[1]<0))continue;let Zt=p("#ffffff",2,.98),ce=([ie,Re,ke])=>{let dn=ie===Me&&ke>=Ie&&ke<=Ge?2*(He(ie,ke)-He(ie+.1,ke)):He(ie-.1,ke)-He(ie+.1,ke),Ae=He(ie,ke-.1)-He(ie,ke+.1),Qe=Math.hypot(dn,.2,Ae);return[dn/Qe,.2/Qe,Ae/Qe]};for(let ie of[[0,1,2],[0,2,3]])e.tri(...ie.map(Re=>Yt[Re]),Zt,ie.map(Re=>[(Yt[Re][0]+550)*460/1100,(Yt[Re][2]+550)*460/1100]),ie.map(Re=>ce(Yt[Re])))}for(let W=-149;W<188;W+=6)for(let ft=-99;ft<162;ft+=6){if(He(W,ft)<2.3)continue;let Nt=m(Math.round((W+200)*800+ft+200));Ke(W+(Nt()-.5)*2,ft+(Nt()-.5)*2,4.8+Nt()*2.1,Math.round((W+200)*801+ft+201),1.5,30)}let S=p("#7a895a",7,.98),st=p("#9ca469",7,.98),rt=p("#625c46",1,1);function gt(W,ft,Nt,Ut,Pt,Ft){let Yt=m(Ft);for(let Zt=0;Zt<Math.ceil(Nt*Pt*24);Zt++){let ce=Yt()*E,ie=Math.sqrt(Yt()),Re=W+Math.cos(ce)*Nt*.48*ie,ke=ft+Math.sin(ce)*Pt*.48*ie,dn=.12+Ut*(.2+.8*Math.sqrt(1-ie*ie))*(.72+Yt()*.28),Ae=.24+Yt()*.22;t.scope(_.compose(Re,dn,ke,Yt()*E),()=>{t.quad([-Ae/2,-Ae/2,0],[-Ae/2,Ae/2,0],[Ae/2,Ae/2,0],[Ae/2,-Ae/2,0],Zt%5?S:st),t.quad([-Ae/2,0,-Ae/2],[-Ae/2,0,Ae/2],[Ae/2,0,Ae/2],[Ae/2,0,-Ae/2],S)})}}for(let[W,ft,Nt,Ut,Pt]of[[135,429,5.4,.8,1.15],[158,429,3.6,.65,1.1],[177,429,2.3,.46,1],[279,430,4.1,.58,.85]]){let Ft=r(W,ft);i.plane(Ft[0],.035,Ft[1],Nt,Pt,rt);for(let Yt of[-1,1])i.box(Ft[0],.09,Ft[1]+Yt*Pt/2,Nt,.18,.1,p("#a3a295",3,.97));for(let Yt of[-1,1])i.box(Ft[0]+Yt*Nt/2,.09,Ft[1],.1,.18,Pt,p("#a3a295",3,.97));gt(Ft[0],Ft[1],Nt-.15,Ut,Pt-.12,W*101)}for(let[W,ft]of[[257,11],[287,7]])for(let Nt=0;Nt<ft;Nt++){let Ut=r(W+Nt*2.2,434),Pt=.39,Ft=.26,Yt=p(Nt%3?"#d1c6ac":"#987554",3,.95);i.box(Ut[0],Ft/2,Ut[1],Pt,Ft,.28,Yt),i.plane(Ut[0],Ft+.008,Ut[1],Pt-.045,.23,rt);for(let Zt of[-1,1])i.box(Ut[0],Ft-.01,Ut[1]+Zt*.14,Pt+.035,.055,.035,Yt);for(let Zt=0;Zt<3;Zt++){let ce=Ut[0]+(Zt-1)*.1;i.cylinder([ce,Ft,Ut[1]],[ce,Ft+.16+Nt%3*.025,Ut[1]],.007,.004,p("#657352"),5),t.scope(_.compose(ce,Ft+.14,Ut[1],Nt+Zt),()=>{t.quad([-.09,-.03,0],[-.06,.11,0],[.06,.11,0],[.09,-.03,0],S),t.quad([0,-.03,-.09],[0,.11,-.06],[0,.11,.06],[0,-.03,.09],st)})}}for(let[W,ft,Nt,Ut]of[[54,375,3.1,1.8],[69,375,2.8,1.8]]){let Pt=r(W,ft),Ft=2.05,Yt=p("#b7b9af",3,.95),Zt=p("#8f978e",0,.8,.15);i.box(Pt[0],Ft/2,Pt[1],Nt,Ft,Ut,Yt),i.box(Pt[0],Ft+.055,Pt[1],Nt+.18,.11,Ut+.16,Zt);for(let ce of[-1,1])i.box(Pt[0]+ce*Nt*.23,Ft*.48,Pt[1]-Ut/2-.025,Nt*.43,Ft*.9,.035,p("#9da79e",3,.92)),i.box(Pt[0]+ce*.075,1.04,Pt[1]-Ut/2-.06,.025,.19,.045,Zt)}gt(r(60,367)[0],r(60,367)[1],3.2,1.15,1.3,92160);let Dt=-66,It=-1,vt=11.2,Mt=15.6,Gt=6.3,ne=p("#d8d8c9",3,.96);e.box(Dt,Gt/2,It,vt,Gt,Mt,ne);let Tt=Dt+vt/2;e.quad([Dt-vt/2-.35,Gt+.25,It-Mt/2-.35],[Dt-vt/2-.35,Gt+.25,It+Mt/2+.35],[Tt+.35,Gt+.05,It+Mt/2+.35],[Tt+.35,Gt+.05,It-Mt/2-.35],p("#747d7a",10,.85),4,4),e.box(Tt+.2,Gt,It,.12,.19,Mt+.7,ne);for(let W of[-5.7,-2.7,0,3,5.7]){let ft=W===0?.65:1.45;i.box(Tt+.03,4.63,It+W,.055,1.38,ft,qt),i.box(Tt+.064,4.63,It+W,.02,1.24,ft-.13,v),i.box(Tt+.086,4.63,It+W,.03,1.26,.035,qt)}for(let W of[-4.5,4.5])i.box(Tt+.08,1.28,It+W,.12,2.5,1.37,p("#adb5ac",3,.85)),i.box(Tt+.15,1.78,It+W,.035,.77,.92,v),i.box(Tt+.53,2.65,It+W,1.1,.12,2.05,p("#8e9994",10,.9)),i.box(Tt+.85,.1,It+W,1.5,.2,2.1,T),i.sphere(Tt+.14,2.77,It+W-1.3,.055,.11,.11,p("#eeeadd"),10,6);i.quad([Tt,.03,It-7.5],[Tt+.95,.03,It-7.5],[Tt+.95,.2,It+6],[Tt,.2,It+6],T,1,6),ut([Tt+1.02,.03,It-7.5],[Tt+1.02,.2,It+6],.83),n&&s!==void 0&&n.scope(_.compose(Tt+.18,0,It,Math.PI/2),()=>n.sign(0,2.65,0,5.1,.95,s));let Ot=-83,Jt=-22,le=He(Ot,Jt),Et=29,G=p("#a7aca5",0,.68,.25);for(let W=0;W<8;W++){let ft=le+W*Et/8,Nt=le+(W+1)*Et/8,Ut=2.65-W*.235,Pt=Ut-.235;for(let Ft of[-1,1])for(let Yt of[-1,1])e.cylinder([Ot+Ft*Ut,ft,Jt+Yt*Ut],[Ot+Ft*Pt,Nt,Jt+Yt*Pt],.07,.05,G,6),e.cylinder([Ot+Ft*Ut,ft,Jt+Yt*Ut],[Ot-Ft*Pt,Nt,Jt+Yt*Pt],.026,.026,G,5),e.cylinder([Ot+Ft*Ut,ft,Jt+Yt*Ut],[Ot+Ft*Pt,Nt,Jt-Yt*Pt],.026,.026,G,5)}for(let W of[le+20.5,le+24.8,le+29]){e.cylinder([Ot-5,W,Jt],[Ot+5,W,Jt],.075,.075,G,6);for(let ft of[-4.7,4.7]){e.cylinder([Ot+ft,W,Jt],[Ot+ft,W-.9,Jt],.1,.1,p("#a6ada0"),8);let Nt=r(322,56),Ut=[];for(let Pt=0;Pt<=28;Pt++){let Ft=Pt/28;Ut.push([Ot+ft+(Nt[0]-Ot)*Ft,W-.9+(26-(le+29))*Ft-3.1*Math.sin(Ft*Math.PI),Jt+(Nt[1]-Jt)*Ft])}e.tube(Ut,.028,p("#626963"),5)}}let at=[[103,69],[131,47],[202,40],[331,44],[479,94],[574,146],[583,632],[592,679],[470,739],[101,780],[71,735],[21,525],[30,339],[57,250],[63,145]],ht=0;for(let W=0;W<at.length-1;W++){if(W===7||W===8||W===9)continue;let ft=r(...at[W]),Nt=r(...at[W+1]),Ut=Nt[0]-ft[0],Pt=Nt[1]-ft[1],Ft=Math.hypot(Ut,Pt),Yt=Pt/Ft,Zt=-Ut/Ft;for(let ce=2;ce<Ft;ce+=5.7){let ie=ce/Ft,Re=ft[0]+Ut*ie,ke=ft[1]+Pt*ie;Ke(Re+Yt*7.6,ke+Zt*7.6,R(7,11.3),1e4+ht++),(W<5||W>10)&&Ke(Re+Yt*14.6+Ut/Ft*2.4,ke+Zt*14.6+Pt/Ft*2.4,R(8.2,13),1e4+ht++,1.13),(W<6||W>10)&&Ke(Re+Yt*2,ke+Zt*2,R(2.2,3.2),1e4+ht++,1.8)}}e.scope(_.compose(-106,5,-41,Math.PI/2),()=>{let W=p("#c6c8bf",3,.92),ft=p("#b4c2be",0,.76,.05),Nt=p("#46545a",0,.88),Ut=p("#53696d",0,.37,.08),Pt=69,Ft=12,Yt=5,Zt=2.85;e.box(0,-2.5,0,Pt+1,5,Ft+2,p("#8a8c7b",3,.98)),e.box(0,Yt*Zt/2,0,Pt,Yt*Zt,Ft,W);for(let ce=0;ce<Yt;ce++){let ie=ce*Zt;e.box(0,ie+1.4,Ft/2+.07,Pt-.6,2.42,.12,Nt),e.box(0,ie+.1,Ft/2+1.02,Pt+.7,.2,2.15,W),e.box(0,ie+.79,Ft/2+1.98,Pt,.98,.1,ft),e.box(0,ie+1.33,Ft/2+1.99,Pt,.06,.13,p("#d3d9d5",0,.45,.28));for(let Re=-Pt/2+1.6;Re<Pt/2;Re+=3.45)e.box(Re,ie+1.4,Ft/2+.16,2.1,2.25,.03,Ut),e.box(Re+.99,ie+1.4,Ft/2+.18,.035,2.25,.03,h.metal),e.box(Re+1.52,ie+1.4,Ft/2+1.06,.1,2.58,1.85,W)}for(let ce of[-Pt/2,-Pt*.18,Pt*.18,Pt/2])e.box(ce,Yt*Zt/2,Ft/2+1.08,.33,Yt*Zt,2.3,W);e.box(0,Yt*Zt+.13,0,Pt+1.2,.26,Ft+4.2,W)});for(let W=0;W<13;W++){let ft=-74+W*5.6,Nt=-84+W%3*2.7;Ke(Nt,ft,7.5+W%4*.9,32140+W,1.1,58,W===2||W===5||W===9)}let Bt=p("#338db0",0,.63,.08),Ct=p("#ac4c39",0,.68),mt=p("#dbb548",0,.6),Qt=l(666,235);i.scope(_.compose(Qt[0],0,Qt[1],.18),()=>{for(let W of[-.55,.55])for(let ft of[-.55,.55])i.cylinder([W,.02,ft],[W,3.15,ft],.045,.045,Bt,8);i.box(0,1.94,0,1.22,.09,1.2,p("#899892",0,.7));for(let W of[-.61,.61])i.cylinder([W,2,-.55],[W,3.03,-.55],.035,.035,Ct,8),i.cylinder([W,3.03,-.55],[W,3.03,.55],.035,.035,Ct,8),i.quad([W*.72,1.96,.55],[W*.72,.16,3.45],[W*.72,.34,3.47],[W*.72,2.16,.55],mt,3,1);i.quad([-.44,1.97,.55],[.44,1.97,.55],[.44,.16,3.45],[-.44,.16,3.45],mt,1,3);for(let W=.28;W<1.97;W+=.27)i.cylinder([-.47,W,-.69],[.47,W,-.69],.026,.026,h.metal,7)});for(let[W,ft,Nt]of[[1171,230,-.54],[1267,303,-.57],[1368,371,-.55]]){let[Ut,Pt]=l(W,ft);i.scope(_.compose(Ut,0,Pt,Nt),()=>{for(let Ft=0;Ft<=5;Ft++){let Yt=(Ft-2.5)*1.05,Zt=1+Ft*.216;i.cylinder([Yt,0,0],[Yt,Zt,0],.032,.032,Bt,8),Ft<5&&i.cylinder([Yt,Zt,0],[Yt+1.05,Zt,0],.028,.028,h.metal,8)}})}let[ee,xe]=l(480,324);for(let W=0;W<3;W++){let ft=ee+(W-1)*.65;i.cylinder([ft,0,xe],[ft,2.45,xe],.038,.038,Bt,8)}i.cylinder([ee-.72,2.45,xe],[ee+.72,2.45,xe],.032,.032,h.metal,8);let _e=r(365,75);i.cylinder([_e[0],0,_e[1]],[_e[0],3.5,_e[1]],.075,.075,p("#aab4ad",0,.65,.2),10),i.box(_e[0],3.45,_e[1]+.18,1.8,1.05,.07,p("#e7e7da",3,.9)),i.box(_e[0],3.32,_e[1]+.23,.65,.49,.012,Ct),i.box(_e[0],3.32,_e[1]+.24,.58,.42,.012,p("#e7e7da"));let _n=[];for(let W=0;W<=24;W++){let ft=W/24*E;_n.push([_e[0]+Math.sin(ft)*.23,3.02,_e[1]+.56+Math.cos(ft)*.23])}i.tube(_n,.016,Ct,6)}};window.buildFestaWorld=async function(i,t=()=>{}){let{V:e,M:n,Geometry:s,Mesh:r,Atlas:l,material:o,color:u,rng:h,clamp:p,TAU:_}=FestaGL,m=FESTA_DATA,E=h(9212026),M=(a,c)=>a+(c-a)*E(),P=(a,c)=>[(a-320)*.22,(c-290)*.22],A=(a,c,f=0)=>{let w=P(a,c);return[w[0],f,w[1]]},d=new l(512),C=a=>new Promise((c,f)=>{let w=new Image;w.onload=()=>c(w),w.onerror=()=>f(new Error("内蔵テクスチャを読み込めません。")),w.src=a}),[I,x,R]=await Promise.all([C(FESTA_ASSETS.gravel),C(FESTA_ASSETS.grass),C(FESTA_ASSETS.teresaLogo)]);t(.08,"地面と建物の素材を準備しています"),d.add("white",(a,c)=>{a.fillStyle="#fff",a.fillRect(0,0,c,c)});function T(a,c,f,w=.25){return d.add(a,(D,O)=>{D.drawImage(c,0,0,O,O);let B=D.getImageData(0,0,O,O),et=u(f);for(let V=0;V<B.data.length;V+=4){let Q=B.data[V]/255,xt=.82+Q*w;for(let _t=0;_t<3;_t++)B.data[V+_t]=p(et[_t]*255*xt,0,255);B.data[V+3]=255}D.putImageData(B,0,0)})}T("soil",I,"#a19580",.32),T("grass",x,"#727b4d",.55),d.add("concrete",(a,c)=>{a.fillStyle="#efeee6",a.fillRect(0,0,c,c);let f=a.getImageData(0,0,c,c);for(let w=0;w<f.data.length;w+=4){let D=M(-12,6);for(let O=0;O<3;O++)f.data[w+O]+=D}a.putImageData(f,0,0),a.strokeStyle="rgba(119,119,107,.13)",a.lineWidth=1,a.beginPath(),a.moveTo(0,120),a.lineTo(c,120),a.stroke()}),T("asphalt",I,"#555754",.6),d.add("wood",(a,c)=>{a.fillStyle="#b78a57",a.fillRect(0,0,c,c);for(let f=0;f<8;f++){let w=f*64;a.fillStyle=`hsl(${31+M(-3,3)},${34+M(-5,5)}%,${55+M(-6,6)}%)`,a.fillRect(w,0,63,c);for(let O=0;O<35;O++){let B=w+M(1,62);a.strokeStyle=`rgba(73,44,18,${M(.04,.17)})`,a.lineWidth=M(.3,1.3),a.beginPath();for(let et=0;et<=c;et+=16)a.lineTo(B+Math.sin(et/72+O)*M(.2,1.4),et);a.stroke()}a.fillStyle="rgba(43,32,24,.20)",a.fillRect(w,0,1,c);let D=f%3*163;a.fillRect(w,D,64,1)}}),d.add("fabric",(a,c)=>{a.fillStyle="#f7f6f0",a.fillRect(0,0,c,c);for(let f=0;f<c;f+=3)a.strokeStyle=f%6?"rgba(98,99,84,.05)":"rgba(255,255,255,.3)",a.beginPath(),a.moveTo(f,0),a.lineTo(f,c),a.stroke(),a.beginPath(),a.moveTo(0,f),a.lineTo(c,f),a.stroke();a.strokeStyle="rgba(154,155,144,.2)",a.lineWidth=2,a.strokeRect(8,8,c-16,c-16)});function F(a=!1){d.add(a?"autumn":"leaf",(c,f)=>{c.clearRect(0,0,f,f);for(let w=0;w<220;w++){let D=M(0,_),O=Math.sqrt(E())*228,B=f/2+Math.cos(D)*O,et=f/2+Math.sin(D)*O;c.strokeStyle=a?"#6f6541":"#526445",c.lineWidth=1.8,c.beginPath(),c.moveTo(f/2,f*.7),c.quadraticCurveTo(f/2+(B-f/2)*.65,et+40,B,et),c.stroke();let V=a?M(12,59):M(72,110);c.fillStyle=`hsl(${V},${M(27,45)}%,${M(27,48)}%)`,c.beginPath(),c.ellipse(B,et,M(6,11),M(12,23),D+.5,0,_),c.fill(),c.strokeStyle="rgba(208,214,130,.3)",c.lineWidth=.7,c.beginPath(),c.moveTo(B-4,et-10),c.lineTo(B+4,et+10),c.stroke()}})}F(!1),F(!0),d.add("bark",(a,c)=>{a.fillStyle="#807565",a.fillRect(0,0,c,c);for(let f=0;f<650;f++){a.strokeStyle=`rgba(${Math.floor(M(30,70))},${Math.floor(M(25,60))},${Math.floor(M(20,50))},${M(.1,.6)})`,a.lineWidth=M(.5,5),a.beginPath();let w=M(0,c),D=M(0,c);a.moveTo(w,D),a.lineTo(w+M(-9,9),D+M(14,120)),a.stroke()}}),d.add("roof",(a,c)=>{a.fillStyle="#a6b2b3",a.fillRect(0,0,c,c);for(let f=0;f<c;f+=32)a.fillStyle="#7c8d91",a.fillRect(f,0,3,c),a.fillStyle="#c7cecd",a.fillRect(f+3,0,2,c)}),d.add("net",(a,c)=>{a.clearRect(0,0,c,c),a.strokeStyle="#b1b4a7",a.lineWidth=3;for(let f=-c;f<c*2;f+=64)a.beginPath(),a.moveTo(f,0),a.lineTo(f+c,c),a.stroke(),a.beginPath(),a.moveTo(f,c),a.lineTo(f+c,0),a.stroke()}),d.add("tire",(a,c)=>{a.fillStyle="#2b2b2a",a.fillRect(0,0,c,c),a.strokeStyle="#484948",a.lineWidth=5;for(let f=0;f<c;f+=27)a.beginPath(),a.moveTo(0,f),a.lineTo(c*.5,f+15),a.lineTo(c,f),a.stroke()}),d.add("cloth",(a,c)=>{a.fillStyle="#eeeadf",a.fillRect(0,0,c,c),a.fillStyle="rgba(83,117,120,.12)";for(let f=0;f<c;f+=40)a.fillRect(f,0,18,c),a.fillRect(0,f,c,18)});let y={F:"#a64c35",S:"#385e76",T:"#4e6c43",P:"#83503e",M:"#c39343",I:"#27595c"},N={};for(let a of[...m.records.filter(c=>!["unplaced","performer","unconfirmed","workshop"].includes(c.kind)),...m.locations])N[a.id]={banner:d.banner(a.id.startsWith("F-")||a.id.startsWith("S-")||a.id.startsWith("T-")?a.id:{HQ:"INFO",GYM:"STAGE",MOBILITY:"RIDE",MEET:"REST",OUTSTAGE:"STAGE",GATE_MAIN:"WELCOME",GATE_WEST:"WELCOME",WC:"WC",WC_ART:"WC",OUTDOOR_GAMES:"T-14",EAT2:"REST"}[a.id]||"FESTA",a.id==="MOBILITY"?"モビリティー":a.short,a.id==="S-13"?"子どもくじ抽選会":a.caption,y[a.category]),menu:d.sign(a.id+"-menu",a.short,a.detail,y[a.category],a.id+"   "+(a.status||"予定"))};let H=d.banner("西鎌倉","鎌倉市立西鎌倉小学校","つながりフェスタ＠にしかま2026","#415d60"),Y=d.banner("2026","つながりフェスタ＠にしかま","つながる、みつかる、すきになる","#356064"),b=d.sign("走行エリア","モビリティー",`実走路の中へは入れません。
見学はトラロープの外側から。`,"#a74d38","車両実走路"),$=d.banner("P","みんなの舞台","体育館内・開始予定","#83533c"),X=d.add("schedule",(a,c)=>{a.fillStyle="#fff9ec",a.fillRect(0,0,c,c),a.fillStyle="#5b3e32",a.font="700 29px sans-serif",a.fillText("体育館内 開始予定",24,42),a.font="17px sans-serif",a.fillText("終了時刻は未確認　／　当日変更の可能性あり",24,70),m.schedule.forEach((f,w)=>{let D=112+w*36;a.fillStyle=w%2?"#ffffff":"#f2ebde",a.fillRect(14,D-24,484,34),a.fillStyle="#83533c",a.font="700 20px sans-serif",a.fillText(f.time,23,D),a.fillStyle="#263b38";let O=18;a.font=`${O}px sans-serif`;let B=f.name;for(;a.measureText(B).width>370&&O>10;)a.font=`${--O}px sans-serif`;a.fillText(B,100,D)})}),J=d.add("Entrance panels",(a,c)=>{let f=h(451);a.fillStyle="#33363b",a.fillRect(0,0,c,c);for(let w=0;w<c;w+=5)for(let D=0;D<c;D+=12){let O=40+f()*25;a.fillStyle=`rgb(${O},${O+1},${O+5})`,a.fillRect(D+(w%10?6:0),w,10,3)}}),ut=FestaScenery.textures(d,h),dt=d.add("gym-floor",(a,c)=>{a.fillStyle="#aa7549",a.fillRect(0,0,c,c);for(let f=0;f<c;f+=32){a.fillStyle=`hsl(${27+M(-2,2)},${40+M(-5,5)}%,${48+M(-4,4)}%)`,a.fillRect(f+1,0,30,c),a.fillStyle="rgba(71,43,25,.24)",a.fillRect(f,0,1,c);let w=Math.floor(f/32)%4*128+32;a.fillRect(f+1,w,30,1);for(let D=0;D<9;D++)a.fillStyle=`rgba(84,51,27,${M(.025,.075)})`,a.fillRect(f+M(2,29),0,M(.35,1),c)}}),wt=d.add("gym-wall-wood",(a,c)=>{a.fillStyle="#a77b60",a.fillRect(0,0,c,c);for(let f=0;f<c;f+=26)a.fillStyle=`hsl(${24+M(-2,2)},${31+M(-4,4)}%,${47+M(-3,3)}%)`,a.fillRect(f+1,0,24,c),a.fillStyle="rgba(44,27,21,.27)",a.fillRect(f,0,1,c),a.fillStyle="rgba(227,180,128,.15)",a.fillRect(f+3,0,1,c)}),ot=a=>Object.assign(o(a,ut,.39,.06),{fit:!0}),nt=new s,v=new s,qt=new s,Ht=new s,ae=new s,Z={dirt:o("#fff",1,.97),grass:o("#fff",2,.98),wall:o("#dedccf",3,.93),base:o("#a3aaa5",3,.9),asphalt:o("#fff",4,.95),wood:o("#fff",5,.64),metal:o("#a6b0ac",0,.3,.65),whiteMetal:o("#f1f1e8",0,.42,.24),dark:o("#273036",0,.72),glass:ot("#c1cece"),black:o("#252928",0,.6),fabric:o("#f9f9f4",6,.85),bark:o("#fff",9,.94),leaf:o("#fff",7,.88),autumn:o("#fff",8,.9),tire:o("#fff",12,.93)},Ee=(a,c)=>[33+(a-1334)*.08079070799073343,2.64+(c-886)*.08079070799073343],yt=[],St=[],zt=[],jt=[],$t=[],ve=[],Ke=[];function oe(a,c){let f=ae.count/3;c(),Ke.push({id:a,first:f,last:ae.count/3})}function re(a,c,f,w,D="",O=0){yt.push({x:a,z:c,w:f,d:w,id:D,r:O})}function qe(a,c,f,w,D){let O=P(a,c),B=P(f,w);re((O[0]+B[0])/2,(O[1]+B[1])/2,B[0]-O[0],B[1]-O[1],D)}let{layout:pe}=m,Me=m.locations.find(a=>a.id==="WC_ART"),Ie=pe.campus;function Ge(a,c,f){let w=!1;for(let D=0,O=f.length-1;D<f.length;O=D++){let B=f[D],et=f[O];B[1]>c!=et[1]>c&&a<(et[0]-B[0])*(c-B[1])/(et[1]-B[1])+B[0]&&(w=!w)}return w}let Pe=0;function Ye(a,c,f,w=3){let D=a.map(_t=>[..._t]);D.reduce((_t,At,kt)=>{let he=D[(kt+1)%D.length];return _t+At[0]*he[1]-he[0]*At[1]},0)<0&&D.reverse();let B=D.map((_t,At)=>At),et=.007+Pe++*.011,V=(_t,At,kt)=>(At[0]-_t[0])*(kt[1]-_t[1])-(At[1]-_t[1])*(kt[0]-_t[0]),Q=0;function xt(_t,At,kt){c.tri([_t[0],et,_t[1]],[kt[0],et,kt[1]],[At[0],et,At[1]],f,[[_t[0]/w,_t[1]/w],[kt[0]/w,kt[1]/w],[At[0]/w,At[1]/w]])}for(;B.length>3&&Q++<600;){let _t=!1;for(let At=0;At<B.length;At++){let kt=B[(At-1+B.length)%B.length],he=B[At],ye=B[(At+1)%B.length],ge=D[kt],Vt=D[he],ue=D[ye];if(!(V(ge,Vt,ue)<1e-4)&&!B.some(fe=>fe!==kt&&fe!==he&&fe!==ye&&V(ge,Vt,D[fe])>=0&&V(Vt,ue,D[fe])>=0&&V(ue,ge,D[fe])>=0)){xt(ge,Vt,ue),B.splice(At,1),_t=!0;break}}if(!_t)break}B.length===3&&xt(...B.map(_t=>D[_t]))}nt.plane(0,-.1,0,1100,1100,Z.grass,460,460),Ye(Ie,nt,Z.asphalt,.7);let j=[[[1257,2090],[1354,2058],[1451,2011],[1544,1960],[1620,1919],[1690,1848],[1671,1876],[1656,1949],[1586,1998],[1487,2045],[1388,2088],[1270,2124]],[[1567,1835],[1641,1781],[1690,1848],[1620,1919],[1592,1930],[1579,1884],[1585,1864]]].map(a=>a.map(c=>Ee(...c)));for(let a of j)Ye(a,nt,Z.asphalt,.8);function He(a,c,f,w){let D=w[0]-f[0],O=w[1]-f[1],B=p(((a-f[0])*D+(c-f[1])*O)/(D*D+O*O),0,1);return Math.hypot(a-f[0]-D*B,c-f[1]-O*B)}let De=(a,c,f=0)=>j.some(w=>Ge(a,c,w)||w.some((D,O)=>He(a,c,D,w[(O+1)%w.length])<f)),k=m.locations.find(a=>a.id==="GATE_MAIN").pos,S=pe.mainGateApproach,st=(a,c)=>He(a,c,S,[2*k[0]-S[0],2*k[1]-S[1]])<2.8,rt=[P(64,146),P(147,146),P(175,83),P(286,78),P(382,92),P(491,128),P(575,167),P(575,300),P(470,302),P(469,412),P(430,431),P(425,407),P(260,408),P(223,418),P(170,413),P(99,420),P(98,388),P(66,388),P(64,350)];Ye(rt,nt,Z.dirt,1.35);let gt=[[1328,1903],[1361,1894],[1407,1870],[1457,1850],[1510,1835],[1564,1837],[1571,1852],[1514,1858],[1465,1873],[1416,1892],[1370,1914],[1328,1922]].map(a=>Ee(...a)),Dt=[[1390,1910],[1416,1892],[1465,1873],[1514,1858],[1571,1852],[1579,1867],[1573,1885],[1585,1926],[1535,1952],[1480,1974],[1440,1960]].map(a=>Ee(...a));Ye(gt,nt,o("#d6ccaf",3,.98),2),Ye(Dt,nt,o("#8a936e",2,.98),2);let It=o("#a8a497",3,.92);for(let a=0;a<Dt.length;a++){let c=Dt[a],f=Dt[(a+1)%Dt.length],w=f[0]-c[0],D=f[1]-c[1];v.scope(n.compose((c[0]+f[0])/2,0,(c[1]+f[1])/2,-Math.atan2(D,w)),()=>{v.box(0,.1,0,Math.hypot(w,D),.18,.12,It)})}let vt=[["#5d7140",.42],["#738551",.32],["#506542",.45]];for(let a=0;a<Dt.length-1;a++){let[c,f]=Dt[a],w=Ee(1502,1910),[D,O]=vt[a%vt.length],B=[c+(w[0]-c)*.23,f+(w[1]-f)*.23];Ge(...B,Dt)&&v.sphere(B[0],O,B[1],.68,O,.52,o(D,0,.95),10,7)}t(.18,"配置図から校舎と会場を組み立てています");function Mt(a,c,f,w,D=10.65,O="校舎",B=!0,et=null){let V=P(a,c),Q=P(f,w),xt=(V[0]+Q[0])/2,_t=(V[1]+Q[1])/2,At=Q[0]-V[0],kt=Q[1]-V[1];if(jt.push({x:xt,z:_t,w:At,d:kt,h:D,label:O}),re(xt,_t,At+.18,kt+.18,O),nt.box(xt,D/2,_t,At,D,kt,Z.wall),nt.box(xt,.24,_t,At+.15,.48,kt+.15,Z.base),nt.box(xt,D+.12,_t,At+.55,.24,kt+.55,o("#c6c3b6",0,.86)),!B)return;let he=D>12?4:D>9?3:2,ye=(D-.35)/he;for(let ge=0;ge<4;ge++){let Vt=ge%2?kt:At,ue=ge%2?At:kt;v.scope(n.compose(xt,0,_t,ge*Math.PI/2),()=>{let fe=Math.max(1,Math.floor((Vt-.9)/4.3)),Le=(Vt-.9)/fe;for(let Wt=0;Wt<he;Wt++){let Se=1.62+Wt*ye,on=Wt===0?1.8:1.16;v.box(0,Wt*ye+.45,ue/2+.015,Vt,.035,.026,o("#b4b3a7",0,.95));for(let Oe=0;Oe<fe;Oe++){let hn=-Vt/2+.45+(Oe+.5)*Le,Kn=Le*.84;if(!(et&&ge===1&&Wt===0&&Math.abs(_t-hn-et.pos[1])<Kn/2)){v.box(hn,Se,ue/2+.024,Kn+.12,on+.12,.06,o("#aaa99f",0,.6,.25)),v.box(hn,Se,ue/2+.06,Kn,on,.025,ot((Oe+Wt)%4===0?"#a9b8b8":"#c5cecb"));for(let Ll=1;Ll<4;Ll++)v.box(hn-Kn/2+Ll*Kn/4,Se,ue/2+.085,.038,on,.032,Z.metal);v.box(hn,Se-on/2-.035,ue/2+.11,Kn+.17,.075,.17,o("#bdbdb3",0,.85)),Wt===0&&v.box(hn,Se+.2,ue/2+.087,Kn,.037,.03,Z.metal)}}}for(let Wt=0;Wt<=fe;Wt+=2){let Se=-Vt/2+.45+Wt*Le;v.box(Se,D/2,ue/2+.085,.22,D,.17,Z.wall)}for(let Wt of[-1,1])v.cylinder([Wt*(Vt/2-.2),.35,ue/2+.19],[Wt*(Vt/2-.2),D-.2,ue/2+.19],.045,.045,o("#a9aaa0",0,.75),8)})}}Mt(95.4,436.56,329.52,489.72,13.5),Mt(30.48,411.36,82.56,541.56,10.65),Mt(67.32,389.4,95.4,436.56,10.65,"校舎",!0,Me),Mt(329.52,430.32,425.28,516.36,13.5),Mt(307.92,489.72,329.52,516.36,7.2),Mt(311.52,535.08,390.72,603.6,7.9,"昇降口",!1),Mt(103.44,608.28,401.04,666.1,10.7);{let a=P(111,436.56);v.box(a[0],6.75,a[1]-.16,6.1,13.5,.32,Z.wall);for(let c of[3.2,6.5,9.8,13.4])v.box(a[0],c,a[1]-.36,6.55,.19,.47,Z.wall);v.box(a[0],1.3,a[1]-.34,4.7,2.4,.05,Z.glass),v.box(a[0],2.88,a[1]-1,6.4,.2,2,Z.wall)}{let a=P(238,436.56),c=o("#693f30",0,.78),f=o("#9e9f94",0,.72,.18);v.box(a[0],1.25,a[1]-.035,6.3,2.5,.08,c),v.box(a[0],2.8,a[1]-.7,8.8,.18,1.5,o("#724b3e",0,.8));for(let w of[-4.1,4.1])v.box(a[0]+w,1.4,a[1]-1.2,.23,2.8,.23,Z.wall);for(let w of[-2.75,-1.38,0,1.38,2.75])v.box(a[0]+w,1.32,a[1]-.095,.045,2.24,.07,f),v.box(a[0]+w,2.22,a[1]-.13,1.3,.055,.05,f);for(let w of[-1.1,1.1])v.box(a[0]+w,1.12,a[1]-.15,.05,.32,.06,f);v.box(a[0],.055,a[1]-1.45,9,.11,2.55,o("#aeada1",3,.95))}function Gt(a,c,f,w=0){v.scope(n.compose(a,c,f,w),()=>{v.cylinder([0,0,-.03],[0,0,.06],.48,.48,Z.whiteMetal,36),v.cylinder([0,0,.062],[0,0,.07],.43,.43,o("#efefdf"),36);for(let D=0;D<12;D++){let O=D/12*_;v.cylinder([Math.sin(O)*.34,Math.cos(O)*.34,.085],[Math.sin(O)*.38,Math.cos(O)*.38,.085],.01,.01,Z.dark,5)}v.cylinder([0,0,.095],[.07,.27,.095],.017,.017,Z.dark,6),v.cylinder([0,0,.1],[.27,-.1,.1],.013,.013,Z.dark,6)})}{let a=P(365,430.2);Gt(a[0],6.8,a[1]-.06,Math.PI)}{let a=P(391,566);v.scope(n.compose(a[0]+.06,0,a[1],Math.PI/2),()=>{let c=o("#e1e0d4",3,.92),f=o("#ffffff",J,.95),w=2.1,D=.22,O=-.85;v.box(0,5.5,.93,14.4,4.5,2.34,c),v.box(-3.92,5.59,w+.045,5.35,3.05,.06,f),v.box(3.14,5.59,w+.045,6.91,3.05,.06,f),v.box(0,7.84,.96,14.7,.2,2.52,c),v.box(0,3.28,.94,14.4,.3,2.32,c),v.box(0,.16,1.18,14.5,.2,2.88,o("#aaa99e",3,.9)),v.box(0,1.65,D-.08,13.65,2.92,.06,o("#252e2c",0,.93));let B=o("#b4b9b4",0,.42,.38),et=o("#56665f",0,.3,.15);for(let V=0;V<10;V++){let Q=-6.08+V*1.35;v.box(Q,1.5,D,1.28,2.25,.035,et),v.box(Q,2.85,D,1.28,.37,.035,o("#777e70",0,.36)),v.box(Q-.66,1.65,D+.045,.045,2.9,.055,B);for(let xt of[.38,1.18,2.64,3.06])v.box(Q,xt,D+.045,1.34,.045,.055,B);V%2===0&&(v.box(Q+.46,1.2,D+.105,.025,.32,.035,B),v.box(Q+.46,1.02,D+.075,.12,.025,.08,B))}v.box(6.74,1.65,D+.045,.045,2.9,.055,B);for(let V of[-6.91,O,6.91])v.box(V,1.71,w-.29,.58,3.08,.58,c),v.box(V,.23,w-.29,.67,.15,.67,o("#b7b7aa",3,.94));for(let V of[-6.9,6.9])v.box(V,1.74,1.08,.28,3.04,1.88,c);for(let V of[-5.25,-2.65,1.55,4.85])v.box(V,3.115,1.16,.38,.045,.26,o("#50534b")),v.box(V,3.086,1.16,.29,.017,.17,o("#e7e3c5",0,.6,0,.25));for(let V=0;V<3;V++)v.box(0,.03+V*.05,3.25-V*.38,14.7,.06+V*.1,.4,o("#a9a79b",3,.9));Gt(O,3.6,w+.08,0)})}{let a=P(204,420),c=o("#919b94",0,.58,.21),f=o("#a9aea5",0,.82);nt.box(a[0],1.8,a[1],8.9,3.6,5.3,Z.wall),nt.box(a[0],3.66,a[1],9.15,.18,5.55,o("#919b94",10)),re(a[0],a[1],9,5.4,"用具庫");for(let w of[-1,1]){v.box(a[0]+w*2.12,1.58,a[1]-2.69,4.08,2.95,.07,f),v.box(a[0]+w*2.12,1.59,a[1]-2.75,4,.035,.055,c);for(let D=-1;D<=1;D++)v.box(a[0]+w*2.12+D*1.17,1.58,a[1]-2.75,.025,2.88,.045,c);v.box(a[0]+w*3.5,1.34,a[1]-2.79,.045,.26,.045,c)}v.box(a[0],3.16,a[1]-2.81,8.75,.22,.12,c);for(let w of[-3.9,0,3.9])v.cylinder([a[0]+w,3.58,a[1]-2.64],[a[0]+w,.08,a[1]-2.64],.045,.045,c,8);v.box(a[0],1.3,a[1]+2.68,3,2.6,.08,o("#79857f",0,.46,.35))}function ne(a,c,f=0){let w=P(a,c);v.scope(n.compose(w[0],0,w[1],f),()=>{v.box(0,.63,0,2.9,.33,.52,Z.base),v.box(0,.83,0,2.96,.08,.6,o("#c3cdca",0,.23,.7));for(let D=0;D<6;D++){let O=-1.22+D*.49;v.box(O,.84,0,.35,.015,.33,o("#697e81",0,.18,.65)),v.cylinder([O,.81,-.19],[O,1.15,-.19],.018,.018,Z.metal,7),v.cylinder([O,1.15,-.19],[O,1.15,.02],.017,.017,Z.metal,7)}for(let D of[-1.1,1.1])v.box(D,.35,0,.13,.7,.34,Z.base)})}ne(251,414),ne(42,400);{let a=P(401,538),c=o("#ac7049",0,.94);v.cylinder([a[0],.12,a[1]],[a[0],.75,a[1]],1.25,1.25,c,36),v.cylinder([a[0],.75,a[1]],[a[0],.82,a[1]],1.29,1.29,o("#ada99a"),36),v.cylinder([a[0],.825,a[1]],[a[0],.84,a[1]],1.1,1.1,Z.base,36);for(let f=0;f<24;f++){let w=f/24*_;v.cylinder([a[0]+1.252*Math.sin(w),.12,a[1]+1.252*Math.cos(w)],[a[0]+1.252*Math.sin(w),.74,a[1]+1.252*Math.cos(w)],.009,.009,o("#d4b99a"),5)}for(let f of[-.48,.48])v.cylinder([a[0]+f,.84,a[1]],[a[0]+f,1.18,a[1]],.025,.025,Z.metal,7),v.cylinder([a[0]+f,1.18,a[1]],[a[0]+f+.16,1.18,a[1]],.025,.025,Z.metal,7)}let Tt=470,Ot=580,Jt=302,le=504,Et=P(Tt,Jt),G=P(Ot,le),at=[(Et[0]+G[0])/2,(Et[1]+G[1])/2],ht=G[0]-Et[0],Bt=G[1]-Et[1],Ct=P(500,468)[1],mt=.45,Qt=Ct-Et[1],ee=(Et[1]+Ct)/2;nt.box(at[0],mt/2,at[1],ht,mt,Bt,o("#b7b9b3",3,.94)),nt.plane(at[0],mt+.045,ee,ht,Qt,o("#ffffff",dt,.4),ht/4,Qt/4),nt.plane(at[0],mt+.044,(Ct+G[1])/2,ht,G[1]-Ct,o("#c9c5b9",0,.88),ht/4,2),jt.push({x:at[0],z:at[1],w:ht,d:Bt,h:10,label:"体育館",gym:!0}),nt.box(G[0],2.1,at[1],.35,4.2,Bt,Z.wall),nt.box(G[0],8.38,at[1],.35,.64,Bt,Z.wall),re(G[0],at[1],.4,Bt,"体育館東壁"),nt.box(at[0],4.35,Et[1],ht,8.7,.35,Z.wall),re(at[0],Et[1],ht,.4,"体育館壁");let xe=Et[0]+ht*.38,_e=2.25,_n=mt,W=o("#e1dfd5",3,.92),ft=Et[0]+ht*77/309,Nt=Et[0]+ht*156/309,Ut=Et[0]+ht*202/309,Pt=Et[0]+ht*233/309,Ft=Ct+(G[1]-Ct)*27/66,Yt=(Et[0]+ft)/2,Zt=(Pt+G[0])/2,ce=1.1,ie=[[Yt-ce,Yt+ce],[xe-_e,xe+_e],[Zt-ce,Zt+ce]],Re=[],ke=Et[0];for(let[a,c]of ie)a>ke&&Re.push([ke,a]),ke=c;ke<G[0]&&Re.push([ke,G[0]]);let dn=[[Et[0]+2,Et[0]+3.5],[Nt+.8,Nt+1.8],[Ut+.6,Ut+1.55],[Pt+1.7,Pt+3.2]],Ae=[dn[0],[xe-_e,xe+_e],...dn.slice(1)],Qe=[],Ze=Et[0];for(let[a,c]of Ae)a>Ze&&Qe.push([Ze,a]),Ze=c;Ze<G[0]&&Qe.push([Ze,G[0]]);for(let[a,c]of Qe)nt.box((a+c)/2,2.1,G[1],c-a,4.2,.35,Z.wall),re((a+c)/2,G[1],c-a,.4,"体育館南壁");for(let[a,c]of dn){let f=(a+c)/2,w=c-a;nt.box(f,.58,G[1],w,1.16,.35,Z.wall),nt.box(f,3.45,G[1],w,1.5,.35,Z.wall),v.box(f,1.93,G[1]+.045,w-.12,1.52,.055,ot("#aab9b7")),re(f,G[1],w,.4,"体育館南壁の窓")}nt.box(xe,3.6,G[1],_e*2,1.2,.35,Z.wall),nt.box(at[0],6.45,G[1],ht,4.5,.35,Z.wall);for(let[a,c]of Re)nt.box((a+c)/2,2.1,Ct,c-a,4.2,.35,Z.wall),re((a+c)/2,Ct,c-a,.4,"体育館床の出口側の壁");let Yn=o("#f4f3ed",0,.62,.08),kn=o("#e2e2da",0,.54,.24);for(let a of[Yt,Zt])nt.box(a,3.6,Ct,ce*2,1.2,.35,Z.wall),nt.box(a,1.51,Ct-.095,ce*2-.12,3.02,.11,Yn),v.box(a,1.52,Ct-.17,ce*2+.06,3.1,.045,kn),v.box(a,1.52,Ct-.205,ce*2-.12,2.98,.025,Yn),v.box(a+(a<at[0]?.78:-.78),1.4,Ct-.24,.025,.23,.05,Z.metal),re(a,Ct,ce*2,.4,"出演者控室の閉じた扉");nt.box(xe,3.6,Ct,_e*2,1.2,.35,Z.wall),nt.box(at[0],6.37,Ct,ht,4.34,.35,Z.wall),nt.tri([Et[0],8.54,Ct],[at[0],9.97,Ct],[G[0],8.54,Ct],Z.wall);function L(a,c,f){nt.box(a,_n+1.6,(c+f)/2,.16,3.2,f-c,W),re(a,(c+f)/2,.18,f-c,"体育館前室の壁")}function tt(a,c,f){nt.box((a+c)/2,_n+1.6,f,c-a,3.2,.16,W),re((a+c)/2,f,c-a,.18,"体育館前室の壁")}L(ft,Ct+.22,G[1]),L(Nt,Ft,G[1]),L(Ut,Ct+.22,G[1]),L(Pt,Ct+.22,G[1]),tt(Nt,Ut,Ft);let it=o("#a69b86",0,.82),pt=(Ft+G[1])/2,g=G[1]-Ft-.55;for(let a of[ft+.36,Nt-.48]){for(let c of[.28,.7,1.12])v.box(a,mt+c,pt,.56,.07,g,it);for(let c of[-1,1])v.box(a+c*.27,mt+.7,pt,.045,1.1,g,it);re(a,pt,.56,g,"下駄箱")}[["出演者控室（小）",(Et[0]+ft)/2],["WC（M）",(Nt+Ut)/2],["WC（W）",(Ut+Pt)/2],["出演者控室（大）",(Pt+G[0])/2]].forEach(([a,c],f)=>{let w=d.add("gym-room-"+f,(D,O)=>{D.fillStyle="#f5f3eb",D.fillRect(0,0,O,O),D.fillStyle="#273b39",D.textAlign="center",f===0||f===3?(D.font="700 78px sans-serif",D.fillText("出演者控室",O/2,218),D.font="700 100px sans-serif",D.fillText(f===0?"（小）":"（大）",O/2,350)):(D.font="700 112px sans-serif",D.fillText(a,O/2,296))});ae.scope(n.compose(c,0,G[1]-.24,Math.PI),()=>{ae.sign(0,3.35,0,f===0||f===3?2.2:1.35,.36,w,!0)})});let U=[[335,344],[421,433]],q=[[302,335],[344,421],[433,504]];for(let[a,c]of q){let f=P(Tt,a),w=P(Tt,c);nt.box(Et[0],2.1,(f[1]+w[1])/2,.36,4.2,w[1]-f[1],Z.wall),re(Et[0],(f[1]+w[1])/2,.4,w[1]-f[1],"体育館西壁")}nt.box(Et[0],8.38,at[1],.36,.64,Bt,Z.wall);for(let[a,c]of U){let f=P(Tt,a),w=P(Tt,c);nt.box(Et[0],3.49,(f[1]+w[1])/2,.36,1.42,w[1]-f[1],Z.wall)}let K=ot("#aab9b7"),Rt=o("#b7b9ae",0,.53,.3);for(let a of[-1,1]){let c=at[0]+a*ht/2;v.box(c,6.13,at[1],.03,3.86,Bt-.75,K);for(let f of[4.2,5.05,6.1,7.12,8.05])v.box(c,f,at[1],.16,.065,Bt,Rt);for(let f=Et[1]+.45;f<G[1];f+=1.35)v.box(c,6.13,f,.17,3.9,.055,Rt);for(let f=Et[1]+.5;f<G[1];f+=5.4)a<0&&U.some(([w,D])=>f>P(Tt,w)[1]-.2&&f<P(Tt,D)[1]+.2)||v.box(c,4.3,f,.45,8.6,.33,Z.wall);for(let f=Et[1]+.5;f<G[1]-.4;f+=.55)v.box(c-a*.3,4.9,f,.035,1.2,.03,Z.whiteMetal);v.box(c-a*.3,5.5,at[1],.05,.05,Bt,Z.whiteMetal)}let ct=o("#ffffff",wt,.78),bt=o("#966d50",0,.76);for(let a of[-1,1])for(let[c,f]of a<0?q:[[302,504]]){let w=P(Tt,c)[1],D=P(Tt,f)[1],O=at[0]+a*(ht/2-.205);v.box(O,2.14,(w+D)/2,.028,4.03,D-w,ct),v.box(O-a*.04,4.14,(w+D)/2,.045,.11,D-w,bt);for(let B=w+.36;B<D;B+=.75)v.box(O-a*.03,2.1,B,.035,3.94,.026,bt);v.cylinder([O-a*.35,5.2,w],[O-a*.35,5.2,D],.025,.025,Z.whiteMetal,8)}let Lt=["#777a4f","#8da6ab","#938270","#596f4c","#be9f7b","#765b4b"];for(let a=0;a<30;a++){let c=pe.exhibitsZ+(a%15-7)*.597,f=mt+1.55+(.5-Math.floor(a/15))*(.21+.15);v.box(G[0]-.369,f,c,.012,.21,.297,Z.fabric),v.box(G[0]-.378,f+.028,c,.008,.117,.261,o(Lt[a%6])),v.box(G[0]-.383,f-.045,c,.008,.061,.261,o(Lt[(a*3+1)%6])),v.sphere(G[0]-.389,f-.009,c+.038,.007,.043,.049,o(Lt[(a+3)%6]),8,6)}for(let a=0;a<4;a++){let c=pe.exhibitsZ+(a-1.5)*2.49,f=mt+1.55;v.box(Et[0]+.265,f,c,.012,1.17,2.37,Z.fabric);for(let w=0;w<6;w++){let D=o(["#739369","#7b9a9a","#ba8461"][w%3]);v.box(Et[0]+.274,f+(.27-w*.09)*1.5,c+.36,.01,.027,1.14,D),v.sphere(Et[0]+.274,f+(.19-w*.076)*1.5,c-.63,.008,.0525,.219,D,8,6)}}let Xt=G[0]-1.3,me=Ct-1.3,be=o("#798c92",6,.95);v.scope(n.compose(Xt,mt,me,0),()=>{rs(v,1.75,1.75,be,2,2.23);for(let a of[-1,1])v.box(a*.875,1.02,0,.022,1.95,1.75,be),v.box(0,1.02,a*.875,1.75,1.95,.022,be)}),re(Xt,me,1.75,1.75,"授乳スペース");let te=m.locations.find(a=>a.id==="NURSING");te.pos=[Xt,me],te.approach=[Xt-2,me],te.marker=[Xt,mt+2.45,me],zt.push(te);for(let[a,c]of U){let f=P(Tt,a)[1],w=P(Tt,c)[1];v.box(Et[0]+.205,3.49,(f+w)/2,.035,1.42,w-f,ct)}let Fe=Ct-.205;for(let[a,c]of Re)v.box((a+c)/2,1.55,Fe,c-a,2.94,.035,ct);v.box(at[0],3.57,Fe,ht,1.1,.035,ct);for(let a=Et[0]+.38;a<G[0]-.2;a+=.53){let c=ie.some(([f,w])=>a>=f&&a<=w);v.box(a,c?3.57:2.1,Fe-.028,.022,c?1.02:3.96,.02,bt)}let fn=o("#e6e2d8",0,.76),cn=o("#24775f",0,.74,.04);for(let a of[-1,1])v.box(xe+a*2.25,1.52,Fe-.04,.11,3.04,.09,fn);v.box(xe,3.02,Fe-.04,4.6,.12,.09,fn);let nn=o("#f4f3ed",0,.64,.08);for(let a of[-1,1])v.box(xe+a*(_e-.11),1.51,Ct+.67,.08,2.98,1.28,nn),v.box(xe+a*(_e-.17),1.44,Ct+.25,.035,.27,.05,Z.metal);for(let a of[-4.8,0,4.8]){let c=at[0]+a;v.box(c,6,Fe-.02,1.35,2.4,.05,fn),v.box(c,6,Fe-.055,1.21,2.25,.025,cn),v.box(c-.35,6,Fe-.073,.08,2.19,.015,o("#6eb49a",0,.79,.02))}let Sn=o("#8f9693",10,.78,.12),se=o("#e8e6dc",0,.96);for(let a of[-1,1]){let c=at[0]+a*(ht/2+.4);Ht.quad([at[0],10.15,Et[1]-.4],[at[0],10.15,G[1]+.4],[c,8.72,G[1]+.4],[c,8.72,Et[1]-.4],Sn,Bt/3,4),Ht.quad([at[0],9.97,Et[1]],[c,8.54,Et[1]],[c,8.54,G[1]],[at[0],9.97,G[1]],se,1,1)}for(let a of[Et[1],G[1]])nt.tri([Et[0],8.7,a],[at[0],10.15,a],[G[0],8.7,a],Z.wall);for(let a=Et[1]+3;a<G[1]-1;a+=5.4)for(let c of[-7,-2.3,2.3,7]){let f=9.93-Math.abs(c)/(ht/2)*1.43;Ht.cylinder([at[0]+c,f-.07,a],[at[0]+c,f-.01,a],.25,.25,Z.whiteMetal,20),Ht.disk(at[0]+c,f-.085,a,.215,o("#fff9e4",0,.9,0,.8),20)}let yn=o("#a8784f",0,.58),We=o("#391722",6,.94),Un=o("#c39736",0,.47,.17),rn=Et[1]+4.03,Fn=Et[1]+2.14;for(let a of[-1,1]){let c=ht/2-6.12,f=at[0]+a*(6.12+c/2);nt.box(f,4.35,rn,c,8.7,.35,Z.wall),re(f,rn,c,.4,"体育館壁"),v.box(f,2.1,rn+.21,c,4.16,.05,ct);for(let w=f-c/2+.36;w<f+c/2;w+=.5)v.box(w,2.1,rn+.25,.023,4.08,.026,bt)}nt.box(at[0],8.2,rn,12.24,1,.35,Z.wall),nt.box(at[0],mt+.55,Et[1]+2.1,11,1.1,4,o("#aa7649",dt,.52)),re(at[0],Et[1]+2.1,11,4.2,"常設舞台・使用せず"),v.box(at[0],3.81,Fn,11.2,5.46,.11,We);for(let a=0;a<32;a++){let c=at[0]-5.42+a*.35;v.cylinder([c,1.1,Fn+.08],[c,6.49,Fn+.08],.075,.075,o(a%3?"#421925":"#572331",6,.96),7)}for(let a of[1.1,6.48])v.box(at[0],a,Fn+.17,11.18,.085,.1,Un);for(let a of[-1,1])v.box(at[0]+a*5.86,4.05,rn,.73,6.89,.45,yn),v.box(at[0]+a*5.49,3.79,(Fn+rn)/2,.22,5.95,rn-Fn,yn);v.box(at[0],7.46,rn,12.45,.66,.45,yn),v.box(at[0],6.89,rn+.23,11.12,.55,.07,o("#4a1a28",0,.94)),v.quad([at[0],7.24,rn+.28],[at[0]-.25,6.97,rn+.28],[at[0],6.7,rn+.28],[at[0]+.25,6.97,rn+.28],Un),v.box(at[0],1,rn+.11,11.1,1.1,.15,ct);for(let a of[-1,1])v.box(at[0]+a*8.25,2.55,rn+.29,3.2,.92,.06,ct);ae.sign(at[0]+8.25,2.55,rn+.34,3,.62,$);for(let a of[-1,1])for(let c of[Et[1]+20,Et[1]+33,Et[1]+46])v.box(at[0]+a*(ht/2-.245),6.03,c,.035,2.9,2.4,o("#27443b",6,.9));for(let a of[-1,1])v.cylinder([at[0]+a*6,.05,Et[1]+5],[at[0]+a*6,5.3,Et[1]+5],.045,.045,Z.metal,8);function zn(a,c,f,w,D,O=.066+mt){let B=f[0]-c[0],et=f[1]-c[1],V=Math.hypot(B,et),Q=-et/V*w/2,xt=B/V*w/2;a.quad([c[0]-Q,O,c[1]-xt],[c[0]+Q,O,c[1]+xt],[f[0]+Q,O,f[1]+xt],[f[0]-Q,O,f[1]-xt],D,V,1)}for(let a of[at[0]-8.2,at[0]+8.2])zn(v,[a,Et[1]+6],[a,Ct-2],.047,o("#f5ede3"));for(let a of[Et[1]+6,ee,Ct-2])zn(v,[at[0]-8.2,a],[at[0]+8.2,a],.047,o("#f5ede3"));for(let a of[at[0]-6.8,at[0]+6.8])zn(v,[a,Et[1]+13],[a,Ct-3],.036,o("#293239"),.068+mt);for(let a of[Et[1]+13,Ct-3])zn(v,[at[0]-6.8,a],[at[0]+6.8,a],.036,o("#293239"),.068+mt);for(let a of[at[0]-9.2,at[0]+9.2])zn(v,[a,Et[1]+16],[a,Ct-4],.038,o("#2f7795"),.07+mt);let je=P(469.65,427);ae.scope(n.compose(je[0]-.12,0,je[1],-Math.PI/2),()=>{oe("GYM",()=>{ae.sign(0,2.94,0,3.5,.75,N.GYM.banner),ae.sign(3.7,1.55,.1,1.08,1.65,X)})}),t(.3,"テント・キッチンカー・ブースの内容を配置しています");function Je(a,c,f,w=0,D="#66746c",O=0){a.scope(n.compose(c,O,f,w),()=>{let B=o("#a5aca8",0,.32,.5),et=o(D,6,.82);a.box(0,.43,0,.42,.055,.39,et),a.box(0,.7,-.18,.43,.3,.045,et);for(let V of[-.17,.17])a.cylinder([V,.04,-.15],[V,.86,-.18],.016,.016,B,6),a.cylinder([V,.04,.21],[V,.44,.1],.016,.016,B,6),a.cylinder([V,.05,-.16],[V,.47,.15],.014,.014,B,6);a.cylinder([-.19,.18,-.14],[.19,.18,-.14],.012,.012,B,6)})}function En(a,c,f,w=1.8,D=.72,O=0,B=!0,et=!1){a.scope(n.compose(c,0,f,O),()=>{a.box(0,.73,0,w,.07,D,B?o("#f2ede1",13,.9):o("#d5c8af",5,.7));for(let V of[-w*.36,w*.36])a.cylinder([V,.06,-D*.34],[V,.71,D*.32],.022,.022,Z.metal,7),a.cylinder([V,.06,D*.34],[V,.71,-D*.32],.022,.022,Z.metal,7);if(a.cylinder([-w*.38,.35,0],[w*.38,.35,0],.021,.021,Z.metal,7),B)for(let V of[-1,1])a.box(0,.6,V*D/2,w,.25,.016,o("#eeeadf",6,.94))}),et&&re(c,f,Math.abs(Math.cos(O))*w+Math.abs(Math.sin(O))*D,Math.abs(Math.sin(O))*w+Math.abs(Math.cos(O))*D,"table")}let sn=Ee(1050.5,871.5);for(let a=0;a<4;a++)for(let c=0;c<4;c++){let f=sn[0]+(c-1.5)*2.62,w=sn[1]+(a-1.5)*2.42;En(v,f,w,1.65,.7,0,!0,!0);for(let D of[-1,1])for(let O=0;O<3;O++){let B=f+(O-1)*.53,et=w+D*.71;Je(v,B,et,D===-1?0:Math.PI,"#6f7970"),ve.push({x:B,z:et,yaw:D===-1?0:Math.PI})}}let Zn=Ee(1185.5,1577.5);for(let a=0;a<3;a++){En(v,Zn[0],Zn[1]+(a-1)*2.2,1.8,.65,0,!0,!0);for(let c of[-1,1])for(let f=0;f<3;f++){let w=Zn[0]+(f-1)*.57,D=Zn[1]+(a-1)*2.2+c*.68,O=c<0?0:Math.PI;Je(v,w,D,O),ve.push({x:w,z:D,yaw:O,eat2:!0})}}for(let a=0;a<6;a++)for(let c=0;c<12;c++){let f=at[0]+(c-5.5)*.64+(c<6?-.7:.7),w=Et[1]+18.5+a*.92;Je(v,f,w,Math.PI,"#566a68",mt+.05),ve.push({x:f,z:w,yaw:Math.PI,gym:!0})}for(let a=0;a<6;a++)for(let c of[-2,-1,12,13]){let f=at[0]+(c-5.5)*.64+(c<6?-.7:.7),w=Et[1]+18.5+a*.92;Je(v,f,w,Math.PI,"#566a68",mt+.05),ve.push({x:f,z:w,yaw:Math.PI,gym:!0,addedGymSeat:!0})}for(let a=6;a<8;a++)for(let c=0;c<16;c++){let f=at[0]+(c-7.5)*.64+(c<8?-.7:.7),w=Et[1]+18.5+a*.92;Je(v,f,w,Math.PI,"#566a68",mt+.05),ve.push({x:f,z:w,yaw:Math.PI,gym:!0,addedGymSeat:!0})}function Jn(a,c,f,w,D=0){let At=Math.atan(-.132),kt=Math.cos(At),he=Math.sin(At),ye=n.compose(0,.85,-.15+(.85-.04)*-.132);ye[5]=kt,ye[6]=he,ye[9]=-he,ye[10]=kt,a.scope(n.compose(c,0,f,D),()=>{for(let ge of[-.15,-.48])for(let Vt of[-1,1])a.cylinder([Vt*.4,.04,ge],[Vt*.35,1.29,-.315],.023,.023,Z.wood,6);a.scope(ye,()=>a.sign(0,0,.025,.7,.94,w,!0))})}function rs(a,c,f,w,D=2.18,O=3.16){let B=[[-c/2,D,-f/2],[-c/2,D,f/2],[c/2,D,f/2],[c/2,D,-f/2]],et=[0,O,0];for(let V=0;V<4;V++){let Q=B[V],xt=B[(V+1)%4],_t=(At,kt)=>{let he=e.add(e.mul(Q,1-At),e.mul(xt,At)),ye=e.add(e.mul(he,1-kt),e.mul(et,kt));return ye[1]-=.052*Math.sin(At*Math.PI)*Math.sin(kt*Math.PI),ye};for(let At=0;At<10;At++)for(let kt=0;kt<8;kt++){let he=At/10,ye=kt/8,ge=_t(he,ye),Vt=_t((At+1)/10,ye),ue=_t((At+1)/10,(kt+1)/8),fe=_t(he,(kt+1)/8);a.quad(ge,Vt,ue,fe,w,1,1)}a.quad(Q,[Q[0],D-.2,Q[2]],[xt[0],D-.2,xt[2]],xt,w,1,1)}}function pl(a,c){let f=c.id,w=c.category,D=f==="F-1"||f==="F-9",O=f==="F-6"||f==="F-8",B=f==="T-12",et=f==="T-2";if(D){for(let V=0;V<9;V++){let Q=-.8+V%5*.23,xt=.3+Math.floor(V/5)*.22;a.cylinder([Q,.79,xt],[Q,.94,xt],.044,.052,o("#faf3dd"),12),a.cylinder([Q,.94,xt],[Q,.958,xt],.055,.055,o("#635442"),12)}a.box(.54,1.02,-.14,.45,.53,.32,o("#3f4443",0,.25,.45)),a.box(.53,1.09,.03,.22,.13,.017,o("#91aaa1",0,.25,.2));for(let V=0;V<3;V++)a.cylinder([.36+V*.11,.79,.16],[.36+V*.11,.98,.16],.028,.028,Z.metal,8)}else if(O)for(let V=0;V<3;V++){let Q=-.65+V*.65;a.box(Q,.79,.28,.56,.11,.4,o("#a98350",5));for(let xt=0;xt<7;xt++)a.sphere(Q+M(-.2,.2),.89,.28+M(-.14,.14),M(.065,.09),.045,M(.06,.1),o(["#bd863d","#d2a05d","#a87139"][xt%3]),12,7)}else if(B)for(let V=0;V<3;V++){let Q=-.62+V*.6;a.box(Q,.85,.17,.52,.2,.5,o("#b7915d",5));for(let xt=0;xt<8;xt++){let _t=Q+M(-.2,.2),At=.17+M(-.17,.17);a.cylinder([_t,.88,At],[_t+.11,1.06,At+.04],.017,.04,o("#d07731"),8),a.cylinder([_t+.1,1.04,At+.04],[_t+.17,1.17,At+.02],.008,.01,o("#58703a"),6)}}else if(et){a.box(-.35,.94,.15,.7,.28,.34,o("#2b363c",0,.45,.25)),a.box(-.42,1.01,.33,.29,.1,.007,o("#a9be92",0,.5,0,.2));for(let V=0;V<3;V++)a.cylinder([-.06+V*.05,.94,.34],[-.06+V*.05,.94,.37],.024,.024,Z.metal,10);a.box(.5,.84,.23,.35,.05,.28,o("#373a3c")),a.cylinder([.75,.8,-.13],[.75,2.65,-.13],.012,.012,Z.metal,7),a.cylinder([.33,2.4,-.13],[1.14,2.4,-.13],.015,.015,Z.metal,7)}else if(w==="F"){for(let V=0;V<3;V++){let Q=-.7+V*.65;a.box(Q,.8,.22,.54,.09,.36,o("#d1d5c8",0,.25,.45));for(let xt=0;xt<8;xt++){let _t=Q+M(-.2,.2),At=.22+M(-.12,.12);a.sphere(_t,.855,At,.047,.025,.045,o(["#c99352","#dfb476","#724b30"][xt%3]),9,5)}}if(f==="F-11"){a.box(.12,.8,-.26,1,.1,.3,Z.black);for(let V=0;V<9;V++)a.cylinder([-.3+V*.1,.88,-.49],[-.3+V*.1,.88,.02],.006,.006,o("#d5b878"),5)}}else if(w==="S"){for(let V=0;V<14;V++){let Q=-.8+V%7*.25,xt=.13+Math.floor(V/7)*.25;a.box(Q,.794,xt,.17,.015,.16,o("#f8f4e6")),a.sphere(Q,.83,xt,.055,.032,.055,o(["#aa5c61","#b5aa6c","#558489","#9a804c"][V%4],0,.28,.32),12,7)}if(f==="S-8")for(let V=0;V<9;V++)a.cylinder([-.75+V*.17,.83,-.2],[-.7+V*.17,1.01,-.08],.021,.024,o("#c8af70",5),7)}else for(let V=0;V<3;V++)a.box(-.65+V*.6,.795,.22,.43,.015,.28,o("#faf8ec")),a.box(-.65+V*.6,.82,.2,.35,.012,.21,o(["#bbbaa0","#a6b4bb","#b7ba8d"][V],0,.8))}function ih(a,c=null){let f=c||a.pos,w=a.width||3.02,D=a.depth||2.75,O=a.yaw||0,B=a.id==="S-3"||a.id==="S-9"?"#8393a0":a.id==="F-11"?"#859690":"#f8f7ef",et=o(y[a.category],6,.92);nt.scope(n.compose(f[0],0,f[1],O),()=>{rs(nt,w,D,o(B,6,.92));for(let At of a.id==="F-10"?[-w/2+.035,0,w/2-.035]:[-w/2+.035,w/2-.035])for(let kt of[-D/2+.035,D/2-.035])nt.cylinder([At,.03,kt],[At,2.2,kt],.029,.026,Z.metal,8);nt.box(0,2.1,D/2,w,.29,.026,et),nt.box(0,2.1,-D/2,w,.29,.025,o(B,6));for(let At of[-w/2,w/2])nt.box(At,2.1,0,.025,.29,D,o(B,6));nt.cylinder([-w/2,2.17,-D/2],[w/2,2.17,D/2],.021,.021,Z.metal,8),nt.cylinder([w/2,2.17,-D/2],[-w/2,2.17,D/2],.021,.021,Z.metal,8),(a.category==="F"||a.id==="HQ")&&nt.box(0,1.15,-D/2,w,1.87,.015,o("#eeeee5",6,.94))}),v.scope(n.compose(f[0],0,f[1],O),()=>{if(a.id==="F-10"){En(v,-1.5,.4,2.28,.73),En(v,1.5,.4,2.28,.73),v.scope(n.compose(-1.5,0,0),()=>pl(v,a)),Je(v,-2.15,-.53,0,"#65746c"),v.box(-.75,.23,-.46,.54,.42,.4,o("#af9270",5));for(let At of[.9,1.5,2.1])v.box(At,.792,.13,.24,.012,.32,o("#fbf8ee")),v.cylinder([At+.15,.805,.22],[At+.15,.805,.04],.012,.012,o("#647d9a"),6)}else En(v,0,.4,Math.min(w-.45,2.28),.73),pl(v,a),Je(v,-.65,-.53,0,"#65746c"),v.box(.75,.23,-.46,.54,.42,.4,o("#af9270",5));a.category==="T"&&v.sign(.56,1.5,-1.25,.95,.98,N[a.id].menu,!0)}),ae.scope(n.compose(f[0],0,f[1],O),()=>{oe(a.id,()=>ae.sign(0,2.15,D/2+.03,Math.min(w-.09,2.87),.62,N[a.id].banner)),oe(a.id,()=>Jn(ae,-w/2+.2,D/2+.4,N[a.id].menu,-.14))});let V=[Math.sin(O),Math.cos(O)],Q=[Math.cos(O),-Math.sin(O)],xt=f[0]+V[0]*.4,_t=f[1]+V[1]*.4;re(xt,_t,Math.abs(Q[0])*(w-.4)+Math.abs(V[0])*.8,Math.abs(Q[1])*(w-.4)+Math.abs(V[1])*.8,a.id),a.approach=[f[0]+V[0]*(D/2+3.1),f[1]+V[1]*(D/2+3.1)],a.marker=[f[0]+V[0]*1.4,3.22,f[1]+V[1]*1.4],zt.push(a)}function ml(a,c,f,w,D=1,O=.37){a.cylinder([c,f,w-.09],[c,f,w+.09],O,O,Z.tire,22),a.cylinder([c,f,w+D*.094],[c,f,w+D*.114],O*.55,O*.55,Z.metal,20);for(let B=0;B<6;B++){let et=B/6*_;a.cylinder([c+Math.cos(et)*O*.34,f+Math.sin(et)*O*.34,w+D*.115],[c+Math.cos(et)*O*.34,f+Math.sin(et)*O*.34,w+D*.12],O*.12,O*.12,Z.dark,7)}}function xd(a,c){let f=a.pos,w=a.yaw,O=o(["#ede6d3","#c3a875","#eef0df","#657f79","#aa7761","#e2d8c3","#e0cf9e","#6c7a75"][c%8],0,.38,.23),B=nt;B.scope(n.compose(f[0],0,f[1],w),()=>{B.box(0,.46,0,3.85,.22,1.7,Z.dark),B.box(.42,1.63,0,2.85,2.03,1.82,O),B.box(-1.41,1.2,0,1.06,1.37,1.8,O),B.box(-1.65,.9,0,.88,.38,1.9,O),B.box(-1.44,1.58,0,1.04,.74,1.8,O),B.box(-1.96,1.58,0,.035,.66,1.57,Z.glass),B.box(-1.42,1.65,.91,.76,.54,.018,Z.glass),B.box(-1.42,1.65,-.91,.76,.54,.018,Z.glass),B.box(.46,2.76,0,2.98,.14,1.92,O);for(let Wt of[-1.35,1.2])for(let Se of[-.89,.89])ml(B,Wt,.4,Se,Se<0?-1:1,.36);B.box(-1.98,.61,0,.1,.19,1.7,o("#b3b8b3",0,.35,.55));for(let Wt of[-.61,.61])B.box(-2.04,.93,Wt,.034,.2,.37,o("#eee8cf",0,.14,.3,.15));B.box(-2.05,.58,0,.034,.16,.28,o("#decb71")),B.box(.26,2.91,-.17,.53,.17,.44,Z.whiteMetal),B.cylinder([1.3,2.8,-.48],[1.3,3,-.48],.11,.11,Z.metal,12);for(let Wt of[-1.06,1.06])B.cylinder([-1.65,1.61,Wt*.83],[-1.65,1.62,Wt],.02,.02,Z.dark,6),B.box(-1.64,1.64,Wt,.1,.19,.05,Z.dark)});let et=a.servingSide==="rear",V=et?Math.PI/2:a.servingSide==="opposite"?Math.PI:0,Q=et?1.42:2.4,xt=et?1.87:.92,_t=et?[0,xt]:[.46,xt],At=w+V,kt=[Math.cos(At),-Math.sin(At)],he=[Math.sin(At),Math.cos(At)],ye=f[0]+kt[0]*_t[0]+he[0]*_t[1],ge=f[1]+kt[1]*_t[0]+he[1]*_t[1];B.scope(n.compose(ye,0,ge,At),()=>{let Wt=Q/2;B.box(0,1.79,.006,Q,1,.016,Z.dark),B.box(0,1.72,.016,Q-.13,.81,.009,o("#555e54",0,.7)),B.box(0,1.16,.19,Q+.15,.07,.54,Z.metal),B.quad([-Wt,2.56,.02],[-Wt,2.3,1.11],[Wt,2.3,1.11],[Wt,2.56,.02],o("#f6efdf",6),2,1),B.box(0,2.22,1.1,Q+.1,.18,.02,o(y.F,6));for(let Se of[-Wt+.08,Wt-.08])B.cylinder([Se,1.71,.04],[Se,2.3,1.03],.017,.017,Z.metal,6)}),v.scope(n.compose(ye,0,ge,At),()=>{v.scope(n.compose(-.46,.38,-.92,0),()=>pl(v,a));let Wt=o("#78a9b3",0,.86),Se=o("#557780",0,.9);v.box(0,.17,.34,1.03,.34,.5,Wt),v.box(0,.085,.68,1.03,.17,.3,Wt);for(let[on,Oe]of[[.343,.34],[.173,.68]])v.box(0,on,Oe,.95,.012,.24,Se)}),ae.scope(n.compose(ye,0,ge,At),()=>{oe(a.id,()=>ae.sign(0,2.67,.025,et?1.57:2.54,.48,N[a.id].banner)),oe(a.id,()=>Jn(ae,-.86,1.36,N[a.id].menu,.1))});let Vt=[Math.cos(w),-Math.sin(w)],ue=[Math.sin(w),Math.cos(w)];re(f[0],f[1],Math.abs(Vt[0])*4.03+Math.abs(ue[0])*1.93,Math.abs(Vt[1])*4.03+Math.abs(ue[1])*1.93,a.id);let fe=Math.abs(kt[0])*1.03+Math.abs(he[0])*.74,Le=Math.abs(kt[1])*1.03+Math.abs(he[1])*.74;re(ye+he[0]*.46,ge+he[1]*.46,fe,Le,"踏み台 "+a.id),a.approach=[ye+he[0]*2.38,ge+he[1]*2.38],a.marker=[ye+he[0]*.53,3.42,ge+he[1]*.53],zt.push(a)}let _d=0;for(let a of m.records)a.kind==="tent"?ih(a):a.kind==="truck"&&xd(a,_d++);let yd=m.locations.find(a=>a.id==="HQ");ih(yd);let cr=m.locations.find(a=>a.id==="OUTSTAGE"),de=cr.pos;nt.box(de[0],.28,de[1],7.2,.56,1.8,Z.wood),re(de[0],de[1],7.2,1.8,"屋外ステージ");for(let a of[-1.8,0,1.8])v.box(de[0]+a,.563,de[1],.012,.009,1.8,Z.dark);v.box(de[0],.563,de[1],7.2,.009,.012,Z.dark);for(let a of[-1,1])v.box(de[0]+a*4.05,.14,de[1]+.5,.72,.28,.72,Z.base),v.cylinder([de[0]+a*3.9,.04,de[1]-.4],[de[0]+a*3.9,3.2,de[1]-.4],.033,.033,Z.metal,7),v.box(de[0]+a*3.9,2.5,de[1]-.4,.48,.85,.35,Z.black);let $n=de[1]-1.65,hr=de[1]-3.75;for(let a of[-1,1])v.cylinder([de[0]+a*4,.1,$n],[de[0]+a*4,.12,hr],.035,.035,Z.metal,8);v.cylinder([de[0]-4,.1,$n],[de[0]+4,.1,$n],.035,.035,Z.metal,8);for(let a of[-1,1])v.cylinder([de[0]+a*4,.1,$n],[de[0]+a*4,2.1,$n],.035,.035,Z.metal,8);v.cylinder([de[0]-4,2.1,$n],[de[0]+4,2.1,$n],.035,.035,Z.metal,8),v.cylinder([de[0]-4,.12,hr],[de[0]+4,.12,hr],.035,.035,Z.metal,8),v.quad([de[0]-4,.12,hr],[de[0]-4,.1,$n],[de[0]+4,.1,$n],[de[0]+4,.12,hr],o("#a7b0a6",11,.75),6,2);let vd=d.add("stage-k-estate",(a,c)=>{a.fillStyle="#f7f7f2",a.fillRect(0,0,c,c),a.fillStyle="#9e3235",a.fillRect(0,0,c,92),a.fillStyle="#fff",a.textAlign="center",a.font="700 24px sans-serif",a.fillText("SHONAN REAL ESTATE",c/2,55),a.fillStyle="#24516b",a.font="700 69px sans-serif",a.fillText("K ESTATE",c/2,255),a.fillStyle="#5c7989",a.font="600 24px sans-serif",a.fillText("K エステート",c/2,315)});for(let a=-1;a<=1;a++){let c=de[0]+a*2.52,f=2.42;ae.quad([c-f/2,2.02,$n+.06],[c-f/2,.13,$n+.06],[c+f/2,.13,$n+.06],[c+f/2,2.02,$n+.06],o("#ffffff",vd,.9,0,.06))}let Ms=de[0]+5.15,bs=de[1]+2.6;v.box(Ms,1.5,bs,1.26,.73,.12,Z.black),v.box(Ms,1.5,bs+.07,1.22,.69,.025,o("#303c3d",0,.32,.08)),v.cylinder([Ms,.08,bs],[Ms,1.13,bs],.055,.055,Z.metal,8),v.box(Ms,.06,bs,.62,.12,.47,Z.dark);for(let a of[.2,1.2])En(v,de[0]+5.5,de[1]+a,1.32,.63,0);v.box(de[0]+5.5,.85,de[1]+1.2,.56,.18,.39,Z.dark);for(let a of[.2,1.2])Je(v,de[0]+5.5,de[1]+a+1,0,"#4a5558");v.cylinder([de[0]+6.45,.37,de[1]-1.5],[de[0]+6.82,.37,de[1]-1.5],.23,.23,Z.dark,12),re(Ms,bs,1.3,.5,"大型モニター");let Vn=[de[0]-5.8,de[1]+.4];v.scope(n.compose(Vn[0],0,Vn[1],0),()=>{rs(v,3,2.8,Z.fabric);for(let a of[-1.45,1.45])for(let c of[-1.3,1.3])v.cylinder([a,.04,c],[a,2.15,c],.025,.025,Z.metal,7)}),En(v,Vn[0]+.35,Vn[1]+.45,1.55,.7,0);for(let a=0;a<15;a++)v.box(Vn[0]-1+a%5*.45,.2+Math.floor(a/5)*.4,Vn[1]-.7,.41,.38,.48,Z.wood);re(Vn[0],Vn[1],3,2.8,"屋外ステージのポップアップテント"),v.cylinder([de[0],.6,de[1]+.1],[de[0],1.9,de[1]+.1],.018,.018,Z.black,7),v.cylinder([de[0],1.9,de[1]+.1],[de[0]+.36,2.08,de[1]+.22],.018,.018,Z.black,7),oe(cr.id,()=>ae.sign(de[0],.34,de[1]+.914,6.75,.5,N.OUTSTAGE.banner)),cr.approach=[de[0],de[1]+3.2],cr.marker=[de[0],2.1,de[1]],zt.push(cr);for(let a of m.locations.filter(c=>["MEET","EAT2","WC"].includes(c.id)))a.approach=a.pos,a.marker=[a.pos[0],2.5,a.pos[1]],zt.push(a),a.id==="WC"&&ae.scope(n.compose(a.pos[0],0,a.pos[1],0),()=>{ae.sign(0,2.4,0,2.2,.53,d.banner("WC","体育館南側・トイレ","当日のトイレ",y.I))});t(.45,"木々・遊具・モビリティ走路を作っています");let Cn=pe.track,Ss=0,ur=[0],ua=Cn.map((a,c)=>{let f=Cn[(c-1+Cn.length)%Cn.length],w=Cn[(c+1)%Cn.length],D=w[0]-f[0],O=w[1]-f[1],B=Math.hypot(D,O);return[-O/B,D/B]});for(let a=0;a<Cn.length;a++){let c=(a+1)%Cn.length,f=Cn[a],w=Cn[c],D=ua[a],O=ua[c],B=Math.hypot(w[0]-f[0],w[1]-f[1]);if(Ss+=B,ur.push(Ss),nt.quad([f[0]-D[0],.055,f[1]-D[1]],[f[0]+D[0],.055,f[1]+D[1]],[w[0]+O[0],.055,w[1]+O[1]],[w[0]-O[0],.055,w[1]-O[1]],o("#bba990",1,.98),2,B),a%8<4)for(let et of[-1,1])zn(v,[f[0]+D[0]*.95*et,f[1]+D[1]*.95*et],[w[0]+O[0]*.95*et,w[1]+O[1]*.95*et],.085,o("#f3e8d0"),.063)}let sh=Cn.map(([a,c],f)=>[a-ua[f][0]*1.28,c-ua[f][1]*1.28]);function rh(a,c,f=.65,w=!1,D=!1){let O=Math.hypot(c[0]-a[0],c[1]-a[1]),B=Math.max(1,Math.ceil(O/2.2)),et=w?o("#a48d66",5):o("#dedfd4",0,.45,.35);for(let V=0;V<=B;V++){let Q=a[0]+(c[0]-a[0])*V/B,xt=a[1]+(c[1]-a[1])*V/B;v.cylinder([Q,.05,xt],[Q,f+.05,xt],w?.045:.025,w?.042:.025,et,7),w||v.box(Q,.035,xt,.28,.07,.34,Z.base)}for(let V of[f*.4,f])v.cylinder([a[0],V,a[1]],[c[0],V,c[1]],w?.036:.021,w?.036:.021,et,7);D&&v.quad([a[0],.15,a[1]],[a[0],f,a[1]],[c[0],f,c[1]],[c[0],.15,c[1]],o("#a2aa9a",11,.82),O/1.1,f/1.1)}let Md=o("#e1ba22",6,.9),bd=o("#252525",6,.9);function Sd(a,c){let f=Math.hypot(c[0]-a[0],c[1]-a[1]),w=Math.max(1,Math.ceil(f/2.2)),D=O=>[a[0]+(c[0]-a[0])*O,a[1]+(c[1]-a[1])*O];for(let O=0;O<=w;O++){let[B,et]=D(O/w);v.cylinder([B,.02,et],[B,.72,et],.008,.008,Z.metal,7),v.cylinder([B,.68,et],[B,.71,et],.016,.016,Z.metal,8)}for(let O=0;O<w;O++)for(let B=0;B<8;B++){let et=(O+B/8)/w,V=(O+(B+1)/8)/w,Q=D(et),xt=D(V),_t=.7-.05*Math.sin(Math.PI*B/8),At=.7-.05*Math.sin(Math.PI*(B+1)/8);v.cylinder([Q[0],_t,Q[1]],[xt[0],At,xt[1]],.012,.012,B%2?bd:Md,6)}}let gl=pe.ropeSections.flatMap(a=>a.slice(1).map((c,f)=>[a[f],c]));for(let[a,c]of gl)Sd(a,c);let dr=pe.boarding.map(({pos:a,distance:c},f)=>{let w=m.locations.find(D=>D.id==="BOARDING_"+(f+1));return w.approach=[a[0]+(f===0?-1.25:.3),a[1]+(f===0?0:2)],w.marker=[a[0],1.75,a[1]],zt.push(w),{position:a,distance:c,rec:w}}),da=m.locations.find(a=>a.id==="MOBILITY");da.approach=[Vn[0],Vn[1]+2.1],da.marker=[Vn[0],2.8,Vn[1]],zt.push(da),oe(da.id,()=>ae.sign(Vn[0],2.1,Vn[1]+1.42,2.85,.65,N.MOBILITY.banner)),Jn(ae,dr[0].position[0]-1.5,dr[0].position[1]+1.6,b,-.3);let[ah,oh]=pe.boardingTent;v.scope(n.compose(ah,0,oh,0),()=>{rs(v,3,3,Z.fabric);for(let a of[-1.46,1.46])for(let c of[-1.46,1.46])v.cylinder([a,.03,c],[a,2.2,c],.029,.026,Z.metal,8)}),re(ah,oh,3,3,"乗降場②");function lh(a){let c=(a%Ss+Ss)%Ss,f=0;for(;f<Cn.length-1&&ur[f+1]<c;)f++;let w=Cn[f],D=Cn[(f+1)%Cn.length],O=(c-ur[f])/(ur[f+1]-ur[f]);return{distance:c,x:w[0]+(D[0]-w[0])*O,z:w[1]+(D[1]-w[1])*O,yaw:Math.atan2(D[0]-w[0],D[1]-w[1])}}let an=new s,xl=new s,fr=o("#d5d8d1",0,.39,.18),ch=o("#91a7a6",0,.21,.55);an.box(0,.46,-.2,1.22,.2,2.3,Z.dark),an.box(0,.84,-.94,1.24,.65,.72,fr),an.box(0,1.02,-.74,1.12,.25,.7,o("#465052",0,.75)),an.box(0,.82,.22,1.23,.16,1.18,fr),an.sphere(0,.87,.95,.68,.61,.25,fr,18,10);let Ri=Array.from({length:17},(a,c)=>(c-8)*.07),ws=Array.from({length:9},(a,c)=>c/8),zi=(a,c)=>{let f=Math.abs(a)/.56;return[a,1.22+c*(.69-.1*f*f),1.17-.56*c-.13*f*f]},fa=(a,c)=>{let f=-.2*c*a/.31360000000000005,w=-.26*a/(.56*.56),D=.69-.1*(a/.56)**2,O=[f*-.56-w*D,.56,D],B=Math.hypot(...O);return O.map(et=>et/B)};for(let a=0;a<ws.length-1;a++)for(let c=0;c<Ri.length-1;c++){let f=Ri[c],w=Ri[c+1],D=ws[a],O=ws[a+1],B=zi(f,D),et=zi(f,O),V=zi(w,O),Q=zi(w,D),xt=fa(f,D),_t=fa(f,O),At=fa(w,O),kt=fa(w,D);xl.tri(et,B,Q,ch,[[0,1],[0,0],[1,0]],[_t,xt,kt]),xl.tri(et,Q,V,ch,[[0,1],[1,0],[1,1]],[_t,kt,At])}let pa=o("#252c2d",0,.68,.12);for(let a of[0,1])for(let c=0;c<Ri.length-1;c++)an.cylinder(zi(Ri[c],a),zi(Ri[c+1],a),.021,.021,pa,7);for(let a of[-.56,.56])for(let c=0;c<ws.length-1;c++)an.cylinder(zi(a,ws[c]),zi(a,ws[c+1]),.024,.024,pa,7);let Ii=(a,c)=>{let f=Math.abs(a)/.56;return[a,1.91-.1*f*f-.03*Math.max(0,-c),c-.13*f*f]};for(let a=0;a<Ri.length-1;a++){let c=Ri[a],f=Ri[a+1];an.quad(Ii(c,.61),Ii(c,-1.12),Ii(f,-1.12),Ii(f,.61),fr),an.cylinder(Ii(c,-1.12),Ii(f,-1.12),.018,.018,pa,7)}for(let a of[-.56,.56])an.cylinder(Ii(a,.61),Ii(a,-1.12),.027,.027,pa,8),an.cylinder([a,.58,-1.07],Ii(a,-1.12),.026,.026,Z.metal,8);for(let a of[-.65,.65])an.box(a,.55,-.05,.14,.12,1.65,fr),an.box(a,1.14,-1,.07,.48,.07,Z.dark),an.box(a,1.08,.8,.08,.54,.08,Z.dark);an.box(0,1.15,-.59,.96,.2,.48,o("#333b3c",0,.75)),an.box(0,1.03,.44,.77,.09,.36,Z.dark),an.sphere(0,.99,1.19,.15,.15,.065,Z.dark,12,8);for(let a of[-.42,.42])an.box(a,1.02,1.17,.29,.07,.035,o("#f0ebd9",0,.35,.1,.2));for(let a of[-.55,.55])an.scope(n.compose(a,.34,-1.02,Math.PI/2),()=>ml(an,0,0,0,a>0?1:-1,.34));an.scope(n.compose(0,.34,1.2,Math.PI/2),()=>ml(an,0,0,0,1,.34)),an.cylinder([-.4,1.23,.72],[.4,1.23,.72],.025,.025,Z.dark,9);for(let a of[-.69,.69])an.cylinder([a,1.33,.8],[a*1.13,1.37,1],.02,.02,Z.dark,7),an.box(a*1.13,1.39,1.02,.19,.11,.055,Z.dark);let wd=d.banner("DEMO","電動トライク","車体色は仮表示","#53605b");an.scope(n.compose(.69,0,-.65,Math.PI/2),()=>an.sign(0,.92,0,1.3,.3,wd));let Ts=m.records.find(a=>a.kind==="goat"),tn=Ts.pos,pr=6.5,xi=6.3,_l=[[tn[0]-pr/2,tn[1]-xi/2],[tn[0]+pr/2,tn[1]-xi/2],[tn[0]+pr/2,tn[1]+xi/2],[tn[0]-pr/2,tn[1]+xi/2]];Ye(_l,nt,o("#c7bb89",2,.97),2);for(let a=0;a<4;a++)rh(_l[a],_l[(a+1)%4],1.1,!0);re(tn[0],tn[1],pr,xi,"ヤギ牧場"),Ts.approach=[tn[0],tn[1]+xi/2+3.1],Ts.marker=[tn[0],2.5,tn[1]+xi/2],zt.push(Ts),oe(Ts.id,()=>ae.sign(tn[0],2.72,tn[1]+xi/2+.06,3.4,.68,N[Ts.id].banner));for(let a of[-1,1])v.cylinder([tn[0]+a*1.6,.05,tn[1]+xi/2],[tn[0]+a*1.6,3.09,tn[1]+xi/2],.05,.05,Z.wood,7);v.box(tn[0]-2,.26,tn[1]-1.7,.9,.48,1.4,o("#b6a166",2)),v.cylinder([tn[0]+2,.05,tn[1]-2],[tn[0]+2,.28,tn[1]-2],.35,.38,o("#6b8990",0,.3,.4),18);function Td(){let a=new s,c=o("#e9e4d5",0,.95),f=o("#776654",0,.92);a.sphere(0,.73,0,.3,.29,.54,c,18,10),a.cylinder([0,.85,.3],[0,1.13,.52],.18,.14,c,14),a.sphere(0,1.19,.61,.15,.18,.24,c,16,10),a.sphere(0,1.1,.78,.12,.1,.1,f,12,7);for(let w of[-1,1]){a.sphere(w*.22,1.26,.48,.19,.055,.085,c,12,7),a.sphere(w*.137,1.22,.67,.015,.024,.025,Z.black,8,6),a.cylinder([w*.09,1.31,.51],[w*.11,1.48,.38],.039,.021,f,9),a.cylinder([w*.11,1.48,.38],[w*.1,1.55,.27],.021,.009,f,8);for(let D of[-.32,.33])a.cylinder([w*.19,.6,D],[w*.18,.12,D+.03],.046,.03,c,9),a.box(w*.18,.07,D+.05,.09,.1,.14,f)}return a.cylinder([0,.92,-.46],[0,1.06,-.62],.035,.016,c,9),a.cylinder([0,1.08,.77],[0,.92,.72],.045,.01,c,9),a}let as=m.records.find(a=>a.kind==="baseball");as.locationSource="配置ゾーニング 9月30日 Ver.7案（1ページ）";let gn=as.pos;as.approach=[gn[0]+9,gn[1]+2],as.marker=[gn[0]+8,2.8,gn[1]+1],zt.push(as),ae.sign(gn[0]+8,1.8,gn[1]+1,4,.82,N[as.id].banner);for(let a of[-1,1])v.cylinder([gn[0]+8+a*1.9,.08,gn[1]+1],[gn[0]+8+a*1.9,2.3,gn[1]+1],.035,.035,Z.metal,7);for(let a of[[-3,-2],[0,-5],[3,-2],[0,1]])v.box(gn[0]+a[0],.052,gn[1]+a[1],.34,.045,.34,o("#e8e2c8"));v.cylinder([gn[0]+4,.08,gn[1]+2],[gn[0]+4.4,.1,gn[1]+3.05],.022,.045,o("#b49566",5),9),v.sphere(gn[0]+4.25,.095,gn[1]+2.2,.074,.074,.074,o("#e9e6dc"),12,8);let Ed=d.add("baseball-net",(a,c)=>{a.clearRect(0,0,c,c),a.strokeStyle="#becab2",a.lineWidth=4,a.beginPath();for(let f=0;f<=c;f+=64)a.moveTo(f,0),a.lineTo(f,c),a.moveTo(0,f),a.lineTo(c,f);a.stroke()}),Ad=d.add("baseball-flag",(a,c)=>{a.fillStyle="#672d3d",a.fillRect(0,0,c,c);for(let f=0;f<c;f+=3)a.fillStyle=f%6?"rgba(233,208,172,.035)":"rgba(0,0,0,.055)",a.fillRect(f,0,1,c);a.strokeStyle="#d0b792",a.lineWidth=3,a.strokeRect(9,9,c-18,c-18),a.textAlign="center",a.fillStyle="#f4d990",a.font='700 27px "Yu Gothic",sans-serif',a.fillText("オール西鎌倉少年野球クラブ",c/2,64,475),a.fillStyle="#f5ead8",a.font="bold 170px Georgia,serif",a.fillText("N",c/2,305),a.fillStyle="#df6358",a.font='700 93px "Yu Mincho",serif',a.fillText("必",90,293),a.fillText("勝",424,293),a.strokeStyle="#d1d0ac",a.lineWidth=6;for(let f of[-1,1]){a.beginPath(),a.moveTo(c/2,396),a.quadraticCurveTo(c/2+f*120,357,c/2+f*103,186),a.stroke();for(let w=0;w<10;w++){let D=w/9,O=c/2+f*(22+81*Math.sin(D*Math.PI/2)),B=380-D*181;a.save(),a.translate(O,B),a.rotate(f*(.8+D*.4)),a.fillStyle="#d4d4b5",a.beginPath(),a.ellipse(0,0,5,16,0,0,Math.PI*2),a.fill(),a.restore()}}}),Cd=d.sign("baseball-board",as.name,"野球体験","#672d3d","T-5");v.scope(n.compose(gn[0],0,gn[1]),()=>{let a=o("#38674d",0,.65,.15),c=o("#476e48",Ed,.95),f=o("#eeeadd",0,.97);function w(O,B,et,V,Q=0){v.scope(n.compose(O,0,B,Q),()=>{for(let xt of[-1,1]){let _t=xt*et/2;v.cylinder([_t,.04,0],[_t,V,0],.029,.029,a,8),v.cylinder([_t,.04,-.65],[_t,.04,.65],.025,.025,a,8),v.cylinder([_t,.05,.6],[_t,1,0],.023,.023,a,8)}v.cylinder([-et/2,V,0],[et/2,V,0],.025,.025,a,8),v.quad([-et/2,.09,0],[-et/2,V-.02,0],[et/2,V-.02,0],[et/2,.09,0],c,et/.8,V/.8),v.cylinder([-et/2,.1,0],[et/2,.1,0],.045,.045,a,8)})}w(3.4,-1.3,4.8,3.3),w(-4,-5.5,2.4,2.5,.35),w(-9,-2,2.4,2.5,-.2),v.sign(2.4,2.22,-1.25,2,1.48,Ad);for(let O of[1.46,3.34])v.cylinder([O,2.98,-1.24],[O,3.28,-1.3],.009,.009,o("#d9d4b4"),6);En(v,.1,1,1.8,.72,0,!1,!1),Je(v,-1.15,1.05,.18,"#3e4647"),Je(v,7.1,-.4,-.35,"#42484d"),v.scope(n.compose(.15,.72,1.05,-.08),()=>v.sign(0,.48,0,.78,.83,Cd,!0)),v.box(-.55,.89,.98,.38,.24,.3,o("#778c87",0,.8));for(let O=0;O<5;O++)v.cylinder([-.7+O*.068,.99,.99],[-.7+O*.068,1.16,.99],.014,.014,o(O%2?"#c6a264":"#edddb0"),6);function D(O,B,et){for(let V=0;V<48;V++){let Q=V/48*_,xt=(V+1)/48*_,_t=(At,kt)=>[O+Math.cos(At)*kt,.043,B+Math.sin(At)*kt];v.quad(_t(Q,et-.025),_t(xt,et-.025),_t(xt,et+.025),_t(Q,et+.025),f)}}for(let[O,B,et]of[[2,5.2,!1],[7.8,5.5,!1],[-3,2.5,!0]]){D(O,B,.66);let V=o(et?"#388faf":"#e5cc57",0,.9);v.box(O,.035,B,.34,.06,.34,V),v.cylinder([O,.06,B],[O,.62,B],.145,.022,V,12)}for(let O of[3.9,4.65,5.4]){let B=o("#78b3ce",0,.78);v.cylinder([O,.04,3.8],[O,.4,3.8],.21,.16,B,16),v.cylinder([O,.037,3.8],[O,.071,3.8],.225,.222,B,16)}for(let O of[-1.9,6])v.box(O,.044,-3.7,.06,.015,7.2,f);v.box(2.05,.044,-7.3,7.9,.015,.06,f),v.box(2.05,.044,-.1,7.9,.015,.06,f),v.box(3.5,.044,7.1,11.5,.015,.06,f)});let yl=(a,c,f)=>a+f>Et[0]&&a-f<G[0]&&c+f>Et[1]&&c-f<G[1];function Rd(a,c,f=7,w=!1){let D=P(a,c),O=D[0],B=D[1];if(st(O,B)||De(O,B))return;let et=h(Math.round(a*721+c*91)),V=c>=410&&c<=420?{132:[6.8,.53,!1],152:[6.3,.56,!1],175:[7.6,.26,!0],252:[7.8,.28,!0]}[a]:null;V&&(f=V[0]);let Q=v;Q.cylinder([O,0,B],[O+.12,f*.57,B-.1],.19,.08,Z.bark,11);for(let xt=0;xt<6;xt++){let _t=xt*_/6+et(),At=[O,f*.34+et()*.6,B],kt=[O+Math.cos(_t)*f*.27,f*(.62+et()*.17),B+Math.sin(_t)*f*.27];if(!yl((At[0]+kt[0])/2,(At[2]+kt[2])/2,Math.max(Math.abs(At[0]-kt[0]),Math.abs(At[2]-kt[2]))/2+.08)){Q.cylinder(At,kt,.073,.026,Z.bark,8);for(let he=0;he<3;he++){let ye=[kt[0]+(et()-.5)*1.4,kt[1]+et()*1.05,kt[2]+(et()-.5)*1.4];yl((kt[0]+ye[0])/2,(kt[2]+ye[2])/2,Math.max(Math.abs(kt[0]-ye[0]),Math.abs(kt[2]-ye[2]))/2+.03)||Q.cylinder(kt,ye,.029,.01,Z.bark,7)}}}for(let xt=0;xt<(V?180:52);xt++){let _t=et()*_,At=Math.sqrt(et())*f*(V?V[1]:.38),kt=O+Math.cos(_t)*At,he=B+Math.sin(_t)*At,ye=f*(V?.57:.7)+et()*f*(V?.38:.25)-At/f*.8,ge=f*(V?.12+et()*.09:.19+et()*.13),Vt=et()*_,ue=(V?V[2]:w)?Z.autumn:Z.leaf;yl(kt,he,ge*.71)||qt.scope(n.compose(kt,ye,he,Vt),()=>{qt.quad([-ge/2,-ge/2,0],[-ge/2,ge/2,0],[ge/2,ge/2,0],[ge/2,-ge/2,0],ue),qt.quad([-ge/2,0,-ge/2],[-ge/2,0,ge/2],[ge/2,0,ge/2],[ge/2,0,-ge/2],ue)})}St.push({x:O,z:B,r:.26})}[[143,54],[176,48],[207,47],[234,46],[270,45],[301,48],[366,63],[399,73],[431,85],[464,98],[496,116],[532,131],[561,151],[566,206],[566,240],[568,275],[581,361],[582,414],[581,521],[579,566],[568,627],[547,692],[509,719],[480,730],[432,738],[404,742],[371,748],[323,757],[282,759],[243,764],[205,769],[168,773],[130,775],[92,750],[83,712],[75,671],[53,584],[32,527],[38,382],[62,335],[68,159],[132,418],[152,418],[175,413],[252,412],[283,414],[321,415],[348,419],[381,417],[417,418],[420,396]].forEach((a,c)=>Rd(a[0],a[1],M(5.8,8.7),c%3!==0));let li=Ee(1e3,219);for(let a=0;a<6;a++){let c=li[0]+a*1.5;v.cylinder([c,.03,li[1]],[c,2.45,li[1]],.033,.033,o("#287b9c",0,.5,.35),8),v.cylinder([c,2.45,li[1]],[c,2.45,li[1]+1.1],.025,.025,Z.metal,8),v.cylinder([c,.03,li[1]+1.1],[c,2.45,li[1]+1.1],.033,.033,o("#287b9c"),8)}for(let a of[li[1],li[1]+1.1])v.cylinder([li[0],2.45,a],[li[0]+7.5,2.45,a],.03,.03,Z.metal,8);let ma=Ee(735,207);for(let a=0;a<4;a++)for(let c=0;c<4;c++){let f=ma[0]+a*.7,w=ma[1]+c*.7;v.cylinder([f,.02,w],[f,2.1,w],.022,.022,o("#287b9c"),7);for(let D=.7;D<2.2;D+=.7)a<3&&v.cylinder([f,D,w],[f+.7,D,w],.02,.02,o("#287b9c"),7),c<3&&v.cylinder([f,D,w],[f,D,w+.7],.02,.02,o("#287b9c"),7)}re(ma[0]+1.05,ma[1]+1.05,2.3,2.3,"遊具");for(let a=0;a<Ie.length;a++){let c=Ie[a],f=Ie[(a+1)%Ie.length];a===15||a===Ie.length-1||rh(c,f,1.55,!1,!0)}for(let a of["GATE_MAIN","GATE_WEST"]){let c=m.locations.find(D=>D.id===a),f=c.pos,w=a==="GATE_MAIN"?c.yaw:.7;v.scope(n.compose(f[0],0,f[1],w),()=>{for(let D of[-1,1])v.box(D*2.6,1,0,.52,2,.58,Z.wall),v.box(D*2.6,2.03,0,.6,.08,.64,Z.base),v.cylinder([D*2.75,.05,.25],[D*2.75,3.35,.25],.036,.036,Z.metal,9);if(a==="GATE_MAIN"){let D=o("#586567",0,.54,.35),O=o("#aeb0a7",3,.96);for(let B of[-1,1]){v.box(B*4.4,.47,0,3.05,.94,.58,O),v.box(B*4.4,.96,0,3.13,.08,.68,Z.base);for(let et=.24;et<=2.64;et+=.24)v.cylinder([B*2.45,.22,et],[B*2.45,1.52,et],.019,.019,D,6);for(let et of[.23,1.51])v.cylinder([B*2.45,et,.18],[B*2.45,et,2.72],.026,.026,D,6)}}v.sign(0,3.12,.25,5.7,.96,Y)}),c.approach=a==="GATE_MAIN"?pe.mainGateApproach:[-43,-38],c.marker=[f[0],3.75,f[1]],zt.push(c)}{let a=m.locations.find(c=>c.id==="GATE_WEST");v.scope(n.compose(a.pos[0],0,a.pos[1],.7),()=>{v.box(0,.045,1.15,5.05,.09,3.75,o("#b7b5a8",3,.96));for(let c of[-1,1]){v.box(c*3.24,.33,1.25,.52,.66,4.1,o("#a3a59a",3,.98)),v.box(c*3.24,.7,1.25,.61,.085,4.25,o("#c7c9ba",3,.93));for(let f of[-.52,.55,1.62,2.69])v.box(c*3.24,.34,f,.54,.42,.023,o("#898e83",3,.96))}})}let vl=new s,Id=d.sign("flag",`つながり
フェスタ`,`＠にしかま
2026`,"#366568","");vl.animate([0,0,0],9,()=>vl.quad([.05,2.8,0],[.05,1,0],[.62,1,0],[.62,2.8,0],o("#fff",Id,.8)));let hh=[];for(let a of[[448,520],[440,611],[543,622],[468,407],[282,378],[130,128],[461,296]]){let c=P(...a);v.cylinder([c[0],.03,c[1]],[c[0],3,c[1]],.016,.014,Z.whiteMetal,8),v.box(c[0],.055,c[1],.48,.1,.4,o("#dedfd6")),hh.push({matrix:n.compose(c[0],0,c[1],-.3),info:[M(0,6),0,0,0]})}for(let a of[[465,441],[459,446],[456,452],[458,463],[445,472],[178,166]]){let c=P(...a);v.box(c[0],.035,c[1],.32,.07,.32,o("#b1543e")),v.cylinder([c[0],.06,c[1]],[c[0],.63,c[1]],.125,.022,o("#c7793c"),10),v.cylinder([c[0],.32,c[1]],[c[0],.4,c[1]],.072,.061,o("#e6ddc7"),10)}let Pd=o("#efd342",6,.93);for(let[a,c]of pe.tapes){let f=c[0]-a[0],w=c[1]-a[1],D=Math.hypot(f,w);v.scope(n.compose((a[0]+c[0])/2,0,(a[1]+c[1])/2,-Math.atan2(w,f)),()=>{for(let O of[-1,1])v.cylinder([O*D/2,.02,0],[O*D/2,.92,0],.016,.016,Z.metal,7);v.box(0,.82,0,D,.068,.008,Pd)})}let uh=pe.coneBars,Ld=o("#d87834",6,.9),Ml=o("#f8eee1",6,.93),bl=o("#c33c2d",6,.92);function Dd(a,c){v.box(a,.045,c,.35,.09,.35,Z.dark),v.cylinder([a,.09,c],[a,.67,c],.14,.018,Ld,10),v.cylinder([a,.32,c],[a,.41,c],.095,.075,Ml,10)}for(let[a,c]of uh){for(let[f,w]of[a,c])Dd(f,w);for(let f=0;f<8;f++){let w=f/8,D=(f+1)/8;v.cylinder([a[0]+(c[0]-a[0])*w,.78,a[1]+(c[1]-a[1])*w],[a[0]+(c[0]-a[0])*D,.78,a[1]+(c[1]-a[1])*D],.035,.035,f%2?Ml:bl,7)}}for(let a of[[108,62],[452,744]]){let[c,f]=P(...a);v.cylinder([c-.38,.04,f-.38],[c+.38,.04,f+.38],.055,.055,bl,8),v.cylinder([c-.38,.04,f+.38],[c+.38,.04,f-.38],.055,.055,bl,8)}zn(v,P(255,720),P(451,720),.065,Ml,.05);let Nd=d.sign("立入禁止","立入禁止","","#b73527",""),Ud=d.sign("駐輪禁止","駐輪禁止","","#b73527","");for(let a of[[56,419],[466,451]]){let[c,f]=P(...a);Jn(ae,c,f,Nd)}for(let a of[[108,62],[452,744]]){let[c,f]=P(...a);Jn(ae,c,f,Ud)}function dh(a,c,f=25){let w=P(a,c),D=7;for(let O=0;O<D;O++){let B=O/D*f,et=(O+1)/D*f,V=2.4-O/D*1.6,Q=2.4-(O+1)/D*1.6;for(let xt of[-1,1])for(let _t of[-1,1])v.cylinder([w[0]+xt*V,B,w[1]+_t*V],[w[0]+xt*Q,et,w[1]+_t*Q],.06,.045,Z.metal,6),v.cylinder([w[0]+xt*V,B,w[1]+_t*V],[w[0]-xt*Q,et,w[1]+_t*Q],.026,.026,Z.metal,6),v.cylinder([w[0]+xt*V,B,w[1]+_t*V],[w[0]+xt*Q,et,w[1]-_t*Q],.026,.026,Z.metal,6)}for(let O of[f*.71,f*.87,f]){v.cylinder([w[0]-5,O,w[1]],[w[0]+5,O,w[1]],.065,.065,Z.metal,7);for(let B of[-1,1])v.cylinder([w[0]+B*.9,O-1.8,w[1]],[w[0]+B*5,O,w[1]],.04,.04,Z.metal,6),v.cylinder([w[0]+B*4.7,O,w[1]],[w[0]+B*4.7,O-1,w[1]],.09,.09,o("#9b9d84"),10)}return re(w[0],w[1],5,5,"鉄塔"),w}let ga=dh(322,56,26),fh=dh(548,194,26);for(let a of[-4.7,4.7])for(let c of[18.46,22.62,26]){let f=[];for(let w=0;w<=36;w++){let D=w/36;f.push([ga[0]+(fh[0]-ga[0])*D+a,c-1-3.4*Math.sin(D*Math.PI),ga[1]+(fh[1]-ga[1])*D])}v.tube(f,.035,Z.dark,5)}let Pi=new s;for(let a=0;a<27;a++){let c=a/27*_,f=125+M(0,35),w=a<9?a<4?-151:-83:a<18?84:-66+(a-18)*16.5,D=a<9?-42+a*17:a<18?-21+(a-9)*17:132,O=M(6,10),B=M(6,11),et=M(5.2,7.3);Pi.scope(n.compose(0,FestaScenery.height(w,D),0),()=>{Pi.box(w,et/2,D,O,et,B,o(["#ddd8c9","#c4ccca","#e6e0d4","#b8b9ac"][a%4],3,.9));let V=o(["#676f70","#8a7163","#5d6966"][a%3],10,.7);Pi.tri([w-O/2-.35,et,D-B/2-.35],[w+O/2+.35,et,D-B/2-.35],[w,et+2,D-B/2-.35],V),Pi.tri([w+O/2+.35,et,D+B/2+.35],[w-O/2-.35,et,D+B/2+.35],[w,et+2,D+B/2+.35],V),Pi.quad([w-O/2-.35,et,D-B/2-.35],[w-O/2-.35,et,D+B/2+.35],[w,et+2,D+B/2+.35],[w,et+2,D-B/2-.35],V,3,3),Pi.quad([w,et+2,D-B/2-.35],[w,et+2,D+B/2+.35],[w+O/2+.35,et,D+B/2+.35],[w+O/2+.35,et,D-B/2-.35],V,3,3);for(let Q=0;Q<3;Q++)Pi.box(w+(Q-1)*2.1,et*.62,D+B/2+.02,1.15,1.35,.03,Z.glass)})}let Fd=d.banner("WC","にしかまくら子どもの家・トイレ","当日のトイレ","#426861");FestaScenery.build({details:v,green:qt,distant:Pi,signGeo:ae,childSign:Fd,p:P,planPoint:Ee,onRoad:De,gateOpen:st,m:Z,mat:o,M:n,rng:h,TAU:_,ga:Et,gb:G,gc:at,gw:ht,gd:Bt,gymRise:mt});function Od(a,c){let f=o("#fafaf8",0,.42,.22),w=o("#25292b",0,.53,.16),D=ot("#657177"),O=d.add("teresa-logo",(et,V)=>et.drawImage(R,0,0,V,V)),B=R.naturalHeight/R.naturalWidth;v.scope(n.compose(a,0,c,0),()=>{let et=[[-2.69,.83,.48,1.49],[-2.59,.93,.43,1.52],[-2.35,.94,.43,1.53],[-1.9,.94,.43,1.53],[-1.53,.94,.43,1.53],[-1.16,.94,.43,1.53],[-.7,.94,.43,1.53],[.1,.94,.43,1.53],[.88,.94,.43,1.53],[1.15,.94,.43,1.53],[1.52,.94,.43,1.5],[1.89,.94,.43,1.45],[2.18,.93,.43,1.35],[2.51,.9,.43,1.26],[2.69,.82,.48,1.07]];for(let Q=0;Q<et.length-1;Q++){let[xt,_t,At,kt]=et[Q],[he,ye,ge,Vt]=et[Q+1];v.quad([-_t,kt,xt],[_t,kt,xt],[ye,Vt,he],[-ye,Vt,he],f);for(let ue of[-1,1]){let fe=(Le,Wt)=>Math.max(Le,.32+Math.sqrt(Math.max(0,.2025-Math.min((Wt+1.53)**2,(Wt-1.52)**2))));for(let Le=0;Le<6;Le++){let Wt=Le/6,Se=(Le+1)/6,on=Kn=>[ue*(_t+(ye-_t)*Kn),xt+(he-xt)*Kn],Oe=on(Wt),hn=on(Se);v.quad([Oe[0],kt+(Vt-kt)*Wt,Oe[1]],[hn[0],kt+(Vt-kt)*Se,hn[1]],[hn[0],fe(At+(ge-At)*Se,hn[1]),hn[1]],[Oe[0],fe(At+(ge-At)*Wt,Oe[1]),Oe[1]],f)}}}let V=[[-2.62,.89,1.49],[-2.46,.84,2.17],[-2.27,.79,2.28],[1.23,.79,2.28],[1.53,.8,2.16],[2.48,.87,1.26]];for(let Q=1;Q<5;Q++){let[xt,_t,At]=V[Q-1],[kt,he,ye]=V[Q];v.quad([-_t,At,xt],[_t,At,xt],[he,ye,kt],[-he,ye,kt],f)}v.quad([-.87,1.26,2.48],[.87,1.26,2.48],[.8,2.16,1.53],[-.8,2.16,1.53],f),v.quad([-.78,1.45,2.327],[.78,1.45,2.327],[.735,2.075,1.662],[-.735,2.075,1.662],D),v.quad([-.82,.48,2.69],[.82,.48,2.69],[.82,1.07,2.69],[-.82,1.07,2.69],f),v.quad([-.83,.48,-2.69],[.83,.48,-2.69],[.83,1.49,-2.69],[-.83,1.49,-2.69],f),v.quad([-.89,1.49,-2.62],[.89,1.49,-2.62],[.84,2.17,-2.46],[-.84,2.17,-2.46],f),v.quad([-.7,1.61,-2.6],[.7,1.61,-2.6],[.7,2.03,-2.51],[-.7,2.03,-2.51],D);for(let Q of[-1,1]){let xt=(_t,At,kt)=>[Q*_t,At,kt];v.quad(xt(.91,1.49,-2.62),xt(.91,1.51,2.37),xt(.8,2.16,1.53),xt(.84,2.17,-2.46),f),v.quad(xt(.901,1.62,-2.37),xt(.901,1.62,.42),xt(.831,2.06,.39),xt(.854,2.06,-2.31),D),v.quad(xt(.907,1.6,.58),xt(.915,1.54,2.09),xt(.82,2.05,1.49),xt(.833,2.05,.64),D);for(let _t of[-1.4,-.38])v.box(Q*.884,1.84,_t,.018,.41,.045,w);for(let _t of[-1.3,.69])v.box(Q*.948,1.38,_t,.022,.059,.19,w);v.box(Q*.947,1.22,-1.1,.018,.021,1.8,o("#abb1b0")),v.cylinder(xt(.9,1.57,1.77),xt(1.02,1.57,1.77),.024,.024,w,8),v.box(Q*1.06,1.6,1.75,.14,.16,.23,w),v.box(Q*.71,.92,2.704,.27,.24,.029,Z.whiteMetal),v.box(Q*.81,1.32,-2.655,.105,.43,.028,o("#a9372c"));for(let _t of[-1.53,1.52]){v.cylinder(xt(.7,.35,_t),xt(.935,.35,_t),.35,.35,Z.tire,24),v.cylinder(xt(.937,.35,_t),xt(.951,.35,_t),.19,.19,Z.metal,20);for(let At=0;At<6;At++){let kt=At*_/6;v.cylinder(xt(.953,.35,_t),xt(.953,.35+.16*Math.sin(kt),_t+.16*Math.cos(kt)),.024,.024,Z.whiteMetal,6)}}}v.box(0,.76,2.707,.95,.15,.025,w),v.box(0,.58,2.71,1.45,.1,.025,w),v.box(0,1.11,2.62,.96,.035,.035,Z.metal),v.box(0,.5,-2.685,1.65,.14,.027,f),v.box(0,1.14,-2.663,.49,.19,.028,Z.whiteMetal),v.sign(0,.954,2.696,.56,.56*B,O),v.scope(n.compose(0,0,-2.696,Math.PI),()=>v.sign(0,.88,0,.84,.84*B,O));for(let Q of[-1,1])v.scope(n.compose(Q*.946,0,0,Q*Math.PI/2),()=>v.sign(0,.86,0,1.62,1.62*B,O))}),re(a,c,1.88,5.38,"駐車車両")}function Bd(a,c,f,w){let D=w%3,O=1.72,B=4.35,et=D===0?1.42:1.94,V=o(["#e8e6e1","#7a8994","#c1c4c6","#4a5155","#a49182"][w%5],0,.4,.22);v.scope(n.compose(a,0,c,f),()=>{v.box(0,.6,0,O,.66,B,V),v.box(0,(.9+et)/2,D===0?-.28:0,O*.92,et-.9,D===0?B*.55:B*.92,V);for(let Q of[-1,1]){for(let xt of[-1,1]){let _t=xt*B*.31,At=Q*O*.42;v.cylinder([At-.1,.31,_t],[At+.1,.31,_t],.31,.31,Z.tire,16),v.box(Q*O*.36,.69,xt*(B/2+.006),.22,.14,.018,xt>0?Z.whiteMetal:o("#a6463a"))}v.box(Q*O*.464,et-.27,.46,.022,.35,B*.28,Z.dark),D!==1&&v.box(Q*O*.464,et-.27,-.64,.022,.35,B*.25,Z.dark)}v.box(0,et-.28,D===0?B*.21:B*.465,O*.77,.39,.026,Z.dark)}),re(a,c,Math.abs(Math.cos(f))*O+Math.abs(Math.sin(f))*B,Math.abs(Math.sin(f))*O+Math.abs(Math.cos(f))*B,"駐車車両")}pe.parking.forEach((a,c)=>a.forEach(([f,w],D)=>Bd(f,w,c<2?0:Math.PI/2,D+c)));for(let[a,c,f]of[[360,850,1921],[309,680,1972],[310,703,2022]])for(let w=a+8,D=0;w<c-8;w+=20,D++){let[O,B]=Ee(w,f);v.scope(n.compose(O,0,B,(D%3-1)*.1),()=>{let et=o(["#454c53","#708e81","#a76855","#b4b9bb"][D%4]);for(let V of[-.56,.56])for(let Q=0;Q<12;Q++){let xt=Q*_/12,_t=(Q+1)*_/12;v.cylinder([0,.31+.3*Math.cos(xt),V+.3*Math.sin(xt)],[0,.31+.3*Math.cos(_t),V+.3*Math.sin(_t)],.019,.019,Z.tire,6)}for(let[V,Q]of[[[0,.31,-.56],[0,.81,-.24]],[[0,.81,-.24],[0,.68,.38]],[[0,.68,.38],[0,.38,-.05]],[[0,.38,-.05],[0,.31,-.56]],[[0,.38,-.05],[0,.81,-.24]],[[0,.31,.56],[0,.97,.37]]])v.cylinder(V,Q,.023,.023,et,6);v.box(0,.84,-.26,.16,.045,.25,Z.dark),v.cylinder([-.24,.98,.37],[.24,.98,.37],.019,.019,Z.metal,6)})}for(let a of["TERESA","TRACTOR","EXCAVATOR","PLAYGROUND"]){let c=m.locations.find(D=>D.id===a),[f,w]=c.pos;c.approach=[f,w+2.6],c.marker=[f,a==="TERESA"?2.7:2.3,w],zt.push(c),a==="TERESA"&&Od(f,w),(a==="TRACTOR"||a==="EXCAVATOR")&&v.scope(n.compose(f,0,w,.3),()=>{let D=a==="TRACTOR",O=o(D?"#427346":"#d6aa35");v.box(0,.67,0,1.4,.56,2.42,O),v.box(0,1.52,-.38,1.22,1.06,1.16,Z.dark),v.box(0,2.12,-.38,1.38,.16,1.31,O);for(let B of[-1,1])if(D)for(let[et,V]of[[-.73,.61],[.83,.37]])v.cylinder([B*.64,V,et],[B*.97,V,et],V,V,Z.tire,18);else v.box(B*.66,.32,0,.43,.6,2.52,Z.tire);D?v.box(0,1.02,.66,1.03,.65,1.35,O):(v.cylinder([0,1.02,.42],[0,2.38,1.15],.12,.12,O,8),v.cylinder([0,2.38,1.15],[0,.45,2.08],.11,.1,O,8),v.box(0,.31,2.18,.77,.44,.52,O)),re(f,w,2.1,D?3.3:4,"車両")})}let Es=m.locations.find(a=>a.id==="OUTDOOR_GAMES"),[mr,gr]=Es.pos,xr=new s,Sl=new s,ph=new s,wl=[];{let[a,c]=Es.pos,f=o("#c1ab88",1,.94),w=o("#f2ebd8"),D=o("#d9ac30",0,.92),O=o("#b9cbd0",0,.33,.22),B=o("#3a6c79"),et=o("#a94e38",0,.62);v.scope(n.compose(a,0,c,0),()=>{v.box(-1.55,.064,0,1.72,.036,5,f),v.box(-1.55,.086,2.2,1.62,.01,.06,w),xr.cylinder([0,0,0],[0,.198,0],.064,.062,O,12),xr.cylinder([0,.198,0],[0,.245,0],.062,.026,O,12),xr.cylinder([0,.245,0],[0,.273,0],.029,.029,B,12),xr.cylinder([0,.06,0],[0,.127,0],.066,.066,B,12);for(let fe=0;fe<3;fe++)for(let Le=0;Le<=fe;Le++)wl.push({x:-1.55+(Le-fe/2)*.24,z:-1.65-fe*.23,row:fe});Sl.sphere(0,0,0,.133,.133,.133,et,18,10),Sl.cylinder([-.006,0,0],[.006,0,0],.134,.134,w,18,!1);let kt=1.45,he=-2.6,ye=.4,ge=14,Vt=6;for(let fe=0;fe<ge;fe++){let Le=he+fe*ye;ue(kt,Le,fe===0||fe===ge-1?"dots":"north-south")}for(let fe=1;fe<Vt;fe++)ue(kt+fe*ye,he,fe===Vt-1?"dots":"east-west");function ue(fe,Le,Wt){if(v.box(fe,.066,Le,.392,.026,.392,D),Wt==="dots"){for(let on of[-.12,0,.12])for(let Oe of[-.12,0,.12])v.sphere(fe+on,.082,Le+Oe,.027,.012,.027,D,8,5);return}let Se=Wt==="east-west";for(let on of[-.115,0,.115])v.box(fe+(Se?0:on),.083,Le+(Se?on:0),Se?.33:.035,.015,Se?.035:.33,D)}});let V=ph,Q=o("#4c6670",6,.93),xt=o("#4a5356",6,.92),_t=o("#cba584"),At=o("#383733");V.sphere(0,1.24,0,.211,.267,.107,Q,16,12),V.sphere(0,1.62,.02,.108,.131,.095,_t,16,12),V.sphere(0,1.677,-.02,.112,.09,.104,At,16,10);for(let kt of[-1,1]){let he=kt*.105;V.animate([he,1.03,0],kt*2,()=>{V.cylinder([he,1.03,0],[he,.5,0],.08,.065,xt,10),V.cylinder([he,.5,0],[he,.13,.015],.065,.048,xt,10),V.box(he,.076,.055,.119,.075,.222,Z.dark)})}V.cylinder([.16,1.4,0],[.23,1.13,.03],.051,.042,Q,10),V.cylinder([.23,1.13,.03],[.19,1.055,.33],.042,.03,_t,10),V.animate([-.15,1.39,-.01],-1,()=>V.cylinder([-.15,1.39,-.01],[-.21,1.01,-.08],.049,.03,Q,10)),V.sphere(.19,1.055,.33,.039,.041,.038,_t,10,7),V.cylinder([.19,1.08,.33],[-.14,.056,1.12],.016,.012,Z.whiteMetal,10),V.cylinder([-.08,.25,.98],[-.14,.056,1.12],.014,.014,et,10),oe(Es.id,()=>Jn(ae,a,c+2.94,N.OUTDOOR_GAMES.menu,0)),Es.approach=[a,c+4.15],Es.marker=[a,2.15,c+2.8],zt.push(Es)}{let[a,c]=Me.pos;v.scope(n.compose(a,0,c,Math.PI/2),()=>{let f=o("#a8afac",0,.66);v.box(0,1.06,.01,1.44,2.11,.13,f),v.box(0,1.05,.09,1.27,2.02,.06,o("#c0c9c4",0,.75)),v.box(.4,1,.145,.037,.16,.06,Z.dark),v.box(0,.047,.24,1.56,.09,.47,Z.base)}),ae.scope(n.compose(a,0,c,Math.PI/2),()=>{oe(Me.id,()=>ae.sign(0,2.4,.16,1.91,.52,N.WC_ART.banner))}),Me.approach=[a+3.5,c],Me.marker=[a+.22,2.98,c],zt.push(Me)}let mh=o("#b73428",0,.64),kd=o("#eae6d7");for(let[a,c]of pe.fireExtinguishers)v.box(a,.038,c,.28,.075,.27,o("#824436",0,.9)),v.cylinder([a,.071,c],[a,.43,c],.088,.088,mh,14),v.cylinder([a,.43,c],[a,.485,c],.088,.042,mh,14),v.box(a,.51,c,.13,.031,.053,Z.dark),v.box(a,.27,c+.086,.108,.106,.009,kd),v.cylinder([a+.025,.486,c],[a+.12,.39,c],.012,.012,Z.dark,9),v.cylinder([a+.12,.39,c],[a+.1,.2,c+.034],.012,.012,Z.dark,9),re(a,c,.28,.27,"消火器");function ci(a,c,f=.26){if(!Ge(a,c,Ie)||Ge(a,c,Dt)||Ge(a,c,sh)||gl.some(([w,D])=>He(a,c,w,D)<f))return!1;for(let w of yt){let D=Math.max(Math.abs(a-w.x)-w.w/2,0),O=Math.max(Math.abs(c-w.z)-w.d/2,0);if(D*D+O*O<f*f)return!1}for(let w of St)if(Math.hypot(a-w.x,c-w.z)<f+w.r)return!1;return!0}function xa(a,c){return a>=Et[0]+.05&&a<=G[0]-.15&&c>=Et[1]+.05&&c<=G[1]-.05?mt:a>=Et[0]-1.65&&a<Et[0]+.05&&U.some(([f,w])=>c>=P(Tt,f)[1]+.15&&c<=P(Tt,w)[1]-.15)?mt*p((a-Et[0]+1.65)/1.7,0,1):0}function As(a,c=10){if(ci(a[0],a[1],.31))return[...a];for(let f=.4;f<=c;f+=.35)for(let w=0;w<32;w++){let D=w*_/32,O=a[0]+Math.sin(D)*f,B=a[1]+Math.cos(D)*f;if(ci(O,B,.31))return[O,B]}return null}let Tl=m.locations.find(a=>a.id==="GYM");Tl.approach=[at[0],Et[1]+18.8],Tl.marker=[at[0],3.1+mt,Et[1]+18.8],zt.push(Tl);for(let a of zt)a.id==="WC"&&(a.approach=[(Nt+Pt)/2,G[1]+5.5]),a.approach=As(a.approach)||As(a.pos);t(.62,"来場者・ヤギ・走行車両の動きを準備しています");function El(a=0,c=!1){let f=new s,w=o(c?"#233750":["#7f9c9a","#d8c5ad","#a76250","#4c6670","#787c58","#b7b4a9","#655c73","#e3d1b1"][a%8],6,.93),D=o(c?"#233750":["#41494e","#746854","#4a575a","#485669"][a%4],6,.91),O=o(["#cba584","#d8b69a","#bc9879","#d0ad8c"][a%4],0,.78),B=o(["#383733","#4b4137","#77756e"][a%3],0,.96),et=[[.88,.19,.126],[.98,.19,.13],[1.16,.218,.148],[1.32,.243,.144],[1.385,.222,.127],[1.445,.075,.064]];for(let V=0;V<et.length-1;V++)for(let Q=0;Q<20;Q++){let xt=Q/20*_,_t=(Q+1)/20*_,At=et[V],kt=et[V+1],he=(ye,ge)=>[Math.cos(ge)*ye[1],ye[0],Math.sin(ge)*ye[2]];f.quad(he(At,xt),he(kt,xt),he(kt,_t),he(At,_t),w,1,1)}f.cylinder([0,1.4,0],[0,1.49,0],.061,.062,O,10),f.sphere(0,1.57,.012,.114,.142,.107,O,16,11),f.sphere(0,1.575,-.009,.116,.145,.11,B,20,10,0,1.26),f.sphere(0,1.58,.127,.017,.032,.024,O,10,7);for(let V of[-1,1])f.sphere(V*.111,1.57,.008,.024,.042,.026,O,9,7),f.sphere(V*.039,1.601,.111,.009,.004,.005,Z.black,8,5),f.cylinder([V*.026,1.621,.104],[V*.053,1.621,.098],.004,.004,B,5),f.animate([V*.23,1.37,0],V,()=>{f.sphere(V*.235,1.335,0,.082,.105,.085,w,12,9),f.sphere(V*.295,1.08,.035,.064,.073,.064,w,12,8),f.cylinder([V*.23,1.37,0],[V*.295,1.08,.035],.079,.064,w,12),f.cylinder([V*.295,1.08,.035],[V*.29,.9,.06],.063,.045,w,11),f.sphere(V*.287,.859,.065,.043,.067,.038,O,11,7)}),f.animate([V*.108,.88,0],V*2,()=>{f.cylinder([V*.105,.9,0],[V*.12,.49,.015],.098,.077,D,12),f.cylinder([V*.12,.49,.015],[V*.12,.1,0],.077,.06,D,11),f.sphere(V*.12,.077,.052,.075,.068,.146,o("#383d3c",0,.75),12,7),f.box(V*.12,.034,.054,.142,.035,.25,o("#c1beb1"))});if(!c&&a%3===0&&(f.sphere(0,1.7,-.006,.126,.045,.126,o("#b4a481",6),14,8),f.box(0,1.676,.125,.18,.018,.14,o("#b4a481",6))),!c&&a%4===1){f.sphere(0,1.17,-.16,.16,.23,.1,o("#73664e",6),13,9);for(let V of[-1,1])f.cylinder([V*.16,1.36,.04],[V*.12,1.03,.09],.017,.017,o("#756b58"),7)}return!c&&a%4===2&&(f.cylinder([.29,.91,.06],[.32,.66,.06],.01,.01,o("#aa9675"),7),f.box(.32,.57,.06,.19,.24,.22,o("#d3c2a1",6))),f}let gh=[],zd=d.add("鎌倉ガーディアンズ",(a,c)=>{a.clearRect(0,0,c,c),a.fillStyle="#e8c843",a.font="bold 54px sans-serif",a.textAlign="center",a.fillText("鎌倉ガーディアンズ",c/2,c*.58)});for(let a=0;a<dr.length;a++){let[c,f]=dr[a].position,w=a===0?Math.PI/2:-Math.PI/2,D=El(1,!0);D.scope(n.compose(0,0,0,Math.PI),()=>D.sign(0,1.25,.15,.35,.12,zd,!0)),gh.push({staff:D,instances:[{matrix:n.compose(c+(a===0?-1:-.1),0,f+1.35,w),info:[0,0,0,0]}]})}function Vd(a){let c=El(a),f=new s;for(let D=0;D<c.used;D+=60)if(!(Math.abs(c.data[D+19])>1.5&&Math.abs(c.data[D+19])<3))for(let O=0;O<3;O++){let B=D+O*20,et={color:Array.from(c.data.slice(B+8,B+11)),p:Array.from(c.data.slice(B+12,B+16)),ao:c.data[B+11]};f.vertex([c.data[B],c.data[B+1]-.4,c.data[B+2]],Array.from(c.data.slice(B+3,B+6)),Array.from(c.data.slice(B+6,B+8)),et)}let w=o(["#41494e","#746854","#4a575a","#485669"][a%4],6,.9);for(let D of[-1,1])f.cylinder([D*.105,.49,0],[D*.12,.46,.35],.1,.08,w,12),f.sphere(D*.12,.46,.35,.078,.084,.085,w,12,8),f.cylinder([D*.12,.46,.35],[D*.12,.105,.39],.078,.058,w,12),f.sphere(D*.12,.078,.45,.073,.06,.145,o("#383d3c"),12,8),f.box(D*.12,.035,.45,.14,.035,.25,o("#b8b9ad"));return f}function Gd(a){let c=new s,f=o(["#dfb357","#72a0a2","#aa6357","#8c9a66"][a%4],6,.92),w=o("#506277",6,.91),D=o("#d4ad8b",0,.77),O=o("#3d342e",0,.94);c.sphere(0,.83,0,.2,.3,.145,f,14,10),c.cylinder([0,1.04,0],[0,1.17,0],.065,.06,D,10),c.sphere(0,1.34,0,.165,.19,.15,D,16,11),c.sphere(0,1.4,-.015,.17,.145,.153,O,16,9,0,1.35);for(let B of[-1,1])c.sphere(B*.06,1.36,.141,.01,.008,.008,Z.dark,8,5),c.animate([B*.19,1.04,0],B,()=>{c.cylinder([B*.19,1.02,0],[B*.27,.65,.025],.067,.045,f,10),c.sphere(B*.27,.62,.03,.048,.06,.044,D,10,7)}),c.animate([B*.09,.58,0],B*2,()=>{c.cylinder([B*.09,.58,0],[B*.11,.25,0],.079,.062,w,10),c.cylinder([B*.11,.25,0],[B*.11,.09,.025],.06,.05,w,10),c.sphere(B*.11,.055,.085,.072,.052,.115,Z.dark,10,7)});return c}function Hd(){let a=new s,c=o("#f7f6f1",6,.96),f=o("#eeb5bf",0,.84),w=o("#252629",0,.74),D=o("#d3343f",6,.82),O=o("#a4cfe2",6,.88),B=o("#80acc0",6,.88),et=o("#83b8a5",6,.82),V=o("#e3c538",6,.82);a.sphere(0,.75,-.02,.54,.63,.41,c,32,22),a.sphere(0,1.18,-.01,.44,.3,.36,c,28,16);for(let Vt of[-1,1]){a.animate([Vt*.27,.22,.13],Vt,()=>{a.sphere(Vt*.27,.145,.13,.205,.145,.27,c,22,13);for(let Se=-1;Se<=1;Se++)a.sphere(Vt*.27+Se*.1,.095,.34,.06,.045,.085,c,11,8)});let ue=Vt===-1,fe=[Vt*.43,1.12,-.04],Le=[Vt*.54,ue?1.1:.96,.075],Wt=[Vt*.64,ue?1.1:.83,ue?.25:.18];if(a.sphere(...fe,.19,.21,.18,c,18,12),a.cylinder(fe,Le,.145,.13,c,16),a.cylinder(Le,Wt,.13,.12,c,16),a.sphere(...Wt,.15,.15,.14,c,18,12),ue){a.sphere(Wt[0],Wt[1]-.015,Wt[2]+.134,.052,.06,.014,f,12,9);for(let Se=-1;Se<=1;Se++)a.sphere(Wt[0]+Se*.047,Wt[1]+.074,Wt[2]+.115,.02,.027,.009,f,9,7)}}let Q=[[-.36,.48,-.3],[-.53,.41,-.43],[-.7,.44,-.49],[-.83,.55,-.5],[-.9,.71,-.47],[-.86,.79,-.43]];for(let Vt=1;Vt<Q.length;Vt++){let ue=.091-Vt*.005;a.cylinder(Q[Vt-1],Q[Vt],ue+.006,ue,c,14),a.sphere(...Q[Vt],ue,ue,ue,c,14,10)}a.sphere(0,1.67,.055,.7,.55,.51,c,36,24);let xt=(Vt,ue)=>[(Vt[0]-550)*.00445,2.2+(667-Vt[1])*.00445,ue],_t=(Vt,ue,fe,Le)=>Array.from({length:8},(Wt,Se)=>{let on=(Se+1)/8,Oe=1-on;return[0,1].map(hn=>Oe*Oe*Oe*Vt[hn]+3*Oe*Oe*on*ue[hn]+3*Oe*on*on*fe[hn]+on*on*on*Le[hn])}),At=(Vt,ue,fe)=>Array.from({length:5},(Le,Wt)=>{let Se=(Wt+1)/5,on=1-Se;return[0,1].map(Oe=>on*on*Vt[Oe]+2*on*Se*ue[Oe]+Se*Se*fe[Oe])}),kt=[[[508,674],..._t([508,674],[481,643],[444,624],[408,633]),[390,640],...At([390,640],[385,645],[387,653]),..._t([387,653],[389,675],[402,702],[416,721])],[[594,674],..._t([594,674],[619,656],[660,645],[690,659]),[712,672],...At([712,672],[718,678],[714,685]),..._t([714,685],[708,701],[683,734],[671,743])]],he=[[[444,661],..._t([444,661],[456,661],[467,670],[469,680]),..._t([469,680],[472,691],[469,701],[463,708]),[430,706],...At([430,706],[419,696],[421,684]),..._t([421,684],[423,673],[433,663],[444,661])],[[650,677],..._t([650,677],[663,678],[672,690],[672,702]),..._t([672,702],[672,712],[665,722],[658,727]),[629,705],...At([629,705],[623,694],[631,685]),..._t([631,685],[638,679],[643,677],[650,677])]];function ye(Vt,ue,fe,Le=!1){let Wt=Vt.map(Oe=>xt(Oe,ue)),Se=[Wt.reduce((Oe,hn)=>Oe+hn[0],0)/Wt.length,Wt.reduce((Oe,hn)=>Oe+hn[1],0)/Wt.length,ue],on=Wt.reduce((Oe,hn,Kn)=>Oe+hn[0]*Wt[(Kn+1)%Wt.length][1]-Wt[(Kn+1)%Wt.length][0]*hn[1],0);for(let Oe=0;Oe<Wt.length;Oe++){let hn=(Oe+1)%Wt.length;on>0!==Le?a.tri(Se,Wt[Oe],Wt[hn],fe):a.tri(Se,Wt[hn],Wt[Oe],fe)}return Wt}for(let Vt of[-1,1]){let ue=kt[Vt<0?0:1],fe=ye(ue,.135,c),Le=ye(ue,.065,c,!0);for(let Wt=0;Wt<ue.length;Wt++){let Se=(Wt+1)%ue.length;a.quad(fe[Wt],Le[Wt],Le[Se],fe[Se],c)}ye(he[Vt<0?0:1],.142,f),a.sphere(Vt*.245,1.78,.526,.096,.099,.027,w,20,14),a.sphere(Vt*.225,1.815,.553,.027,.034,.01,c,10,8),a.sphere(Vt*.274,1.747,.552,.012,.014,.008,c,8,6),a.tube([[Vt*.15,1.967,.477],[Vt*.22,2.005,.471],[Vt*.3,1.979,.458]],.011,w,8),a.tube([[Vt*.16,2.055,.455],[Vt*.21,2.069,.448]],.009,w,7);for(let Wt=-1;Wt<=1;Wt++){let Se=1.57+Wt*.08;a.tube([[Vt*.49,Se,.432],[Vt*.64,Se+Wt*.018,.393],[Vt*.8,Se+Wt*.033,.338]],.008,w,7)}}a.sphere(0,1.585,.567,.053,.033,.023,f,14,10);for(let Vt of[-1,1]){let ue=[];for(let fe=0;fe<=10;fe++){let Le=fe/10;ue.push([Vt*.19*Le,1.515-.068*Math.sin(Math.PI*Le),.57-.044*Le])}a.tube(ue,.011,w,8)}let ge=[];for(let Vt=0;Vt<=28;Vt++){let ue=Vt/28*Math.PI*2;ge.push([Math.sin(ue)*.445,1.205,Math.cos(ue)*.351-.01])}a.tube(ge,.029,D,9),a.sphere(0,1.17,.367,.056,.044,.025,o("#d9d4ce",0,.9),13,8),a.sphere(-.01,1.125,.413,.21,.055,.064,c,20,12),a.sphere(-.165,1.135,.458,.026,.026,.021,c,12,8),a.tri([.18,1.12,.437],[.3,1.18,.423],[.26,1.08,.424],c),a.sphere(-.17,1.143,.48,.01,.01,.008,w,8,6);for(let Vt=0;Vt<5;Vt++)a.sphere(-.1+Vt*.05,1.104,.476,.007,.007,.006,w,7,5);a.tube([[-.37,1.14,.288],[-.33,1,.366],[-.23,.84,.396],[-.1,.68,.42],[.08,.55,.445],[.24,.51,.457]],.024,V,9),a.sphere(.28,.555,.415,.285,.297,.15,B,24,16),a.sphere(.28,.565,.532,.251,.259,.047,O,24,16);for(let Vt=0;Vt<3;Vt++)for(let ue=0;ue<6-Vt;ue++){let fe=.083+ue*.078+Vt*.04,Le=.828+Vt*.058,Wt=.51-Vt*.02;a.sphere(fe,Le,Wt,.046,.046,.044,et,11,8)}for(let Vt of[-1,1])a.sphere(.28+Vt*.078,.603,.582,.015,.019,.01,w,9,7),a.sphere(.28+Vt*.078,.475,.575,.01,.013,.008,w,8,6);return a.tube([[.21,.53,.577],[.25,.504,.581],[.28,.5,.582],[.32,.515,.58],[.35,.538,.575]],.009,w,8),a}let xh=Array.from({length:8},()=>[]),_h=Array.from({length:4},()=>[]),os=[],Wd=0;function Vi(a,c,f=0,w=!1,D=1,O=null,B="visitor"){let et=Wd++,V=B==="child"||B==="game-child",Q=et%(V?4:8),xt={matrix:n.compose(a,0,c,f,D),info:[M(0,6.28),w?1:0,0,0]},_t={x:a,z:c,yaw:f,scale:D,instance:xt,walk:w,path:O,pathIndex:0,speed:M(.4,.64),group:Q,type:B,index:et};return(V?_h:xh)[Q].push(xt),os.push(_t),_t}let Xd=["T-15","TRACTOR","EXCAVATOR","BOARDING_1","BOARDING_2"];for(let a of Xd){let c=m.records.find(B=>B.id===a)||m.locations.find(B=>B.id===a),[f,w]=c.pos,[D,O]=c.approach;for(let[B,et]of[[-.85,0],[.85,0],[-.5,.95],[.55,1.15]]){let V=As([D+B,O+et],1.8);V&&Vi(V[0],V[1],Math.atan2(f-V[0],w-V[1]),!1,1,null,"gathering")}}for(let a of[-1,1])for(let c of[-1.05,0,1.05]){let f=a===-1?Et[0]+1.95:G[0]-1.95,w=pe.exhibitsZ+c;ci(f,w)&&Vi(f,w,a*Math.PI/2,!1,1,null,"gathering")}for(let[a,c]of zt.filter(f=>["F","S","T"].includes(f.category)&&f.approach).entries()){let f=c.yaw||0,w=a%3?-1:1,D=c.approach,O=D[0]-Math.sin(f)*1.05+Math.cos(f)*.95*w,B=D[1]-Math.cos(f)*1.05-Math.sin(f)*.95*w;ci(O,B,.2)&&Vi(O,B,Math.atan2(c.pos[0]-O,c.pos[1]-B),!1,M(.88,1.04))}for(let a of m.records.filter(c=>c.kind==="tent")){let c=a.yaw||0,f=a.id==="F-10"?-1.5:0;Vi(a.pos[0]+Math.cos(c)*f-Math.sin(c)*.52,a.pos[1]-Math.sin(c)*f-Math.cos(c)*.52,c,!1,.93,null,"vendor")}let Al=[[[0,10],[2,9],[2,-11],[20,-12],[26,-12],[26,-2],[26,12],[16,12],[0,10]],[[27,47],[29,54],[29,63],[31,68],[31,75],[28,77],[28,70],[29,60],[27,47]],[[-41,13],[-13,13],[-12,-4],[-15,-17],[-33,-19],[-41,13]],[[19,18],[26,21],[28,32],[29,44],[27,47],[28,32],[26,21],[19,18]]],qd=[[-2.4,-2,-1.6],[-.8,0,.8,1.6,2.4,3.2],[-4,-3.2,-2.4,-2,-1.6,-.8,0,.8],[-3.2,-2.4,-1.6,-.8,0,.8,1.6,2.4,3.2,4]];function Yd(a,c){let f=a.length-1;return Array.from({length:f},(w,D)=>{let O=a[(D+f-1)%f],B=a[(D+1)%f],et=B[0]-O[0],V=B[1]-O[1],Q=Math.hypot(et,V)||1;return[a[D][0]-V/Q*c,a[D][1]+et/Q*c]})}function Zd(a){for(let c=0;c<a.length;c++){let f=a[c],w=a[(c+1)%a.length],D=Math.ceil(Math.hypot(w[0]-f[0],w[1]-f[1])/.7);for(let O=0;O<=D;O++){let B=O/D;if(!ci(f[0]+(w[0]-f[0])*B,f[1]+(w[1]-f[1])*B,.19))return!1}}return!0}let Jd=Al.map((a,c)=>qd[c].map(f=>Yd(a,f)).filter(Zd)),yh=[0,2,3,2,3,1,2,3,0,3],$d=[0,0,0,0];for(let a=0;a<120;a++){let c=yh[a%yh.length],f=$d[c]++,w=Jd[c],D=w.length?w[(f+Math.floor(f/(Al[c].length-1)))%w.length]:Al[c].slice(0,-1),O=f%D.length,B=D[O],et=D[(O+1)%D.length],V=M(0,1),Q=[B[0]+(et[0]-B[0])*V,B[1]+(et[1]-B[1])*V];if(ci(Q[0],Q[1],.19)||(Q=As(Q,2)),!Q)continue;let xt=a%3===0;Vi(Q[0],Q[1],Math.atan2(et[0]-B[0],et[1]-B[1]),!0,xt?1:M(.88,1.05),D,xt?"child":"visitor"),os[os.length-1].pathIndex=(O+1)%D.length}for(let a=0;a<7;a++)Vi(at[0]+(a-3)*1.6,Et[1]+9.5+a%2*.6,0,!0,.8,null,"performer");for(let a of[[7,11],[8,11.5],[24,-9],[25,-8.7],[-12,-23],[-13,-23.4],[-39,-44],[49,32],[50,33],[10,12],[11,12.4],[21,-10],[22,-10.4],[-10,-22],[-11,-22.4],[-37,-42],[47,34],[48,35]])ci(...a,.23)&&Vi(a[0],a[1],M(0,_),!1,M(.85,1));let Kd=[{target:[-1.55,.2],children:[[-2.96,1.44],[-2.92,.5],[-2.94,-.44],[-1.55,2.98],[-.4,-.7],[-.05,1.53]]},{target:[1.45,-.5],children:[[.57,2.21],[2.24,2.46],[2.36,1.6],[2.35,.63],[.56,-1.52],[2.38,-1.61]]}];for(let{target:a,children:c}of Kd)for(let[f,w]of c)if(ci(mr+f,gr+w,.19)){let D=Vi(mr+f,gr+w,Math.atan2(a[0]-f,a[1]-w),!1,M(.88,1.1),null,"game-child");D.bowler=f===-1.55&&w===2.98}let ze={};ze.base=new r(i,nt,{name:"Architecture, ground and booths"}),ze.details=new r(i,v,{name:"Furniture, windows and equipment"}),ze.foliage=new r(i,qt,{name:"Foliage",instances:[{matrix:n.identity(),info:[0,0,1,0]}]}),ze.roof=new r(i,Ht,{name:"Gym roof"}),ze.signs=new r(i,ae,{name:"Readable booth signs"}),ze.distant=new r(i,Pi,{name:"Approximate neighbourhood",shadow:!1}),ze.flags=new r(i,vl,{name:"Fabric banners",instances:hh});let vh=Array.from({length:4},()=>[]),jd=0;for(let a=0;a<ve.length;a++){if(ve[a].addedGymSeat||a%2!==1&&!(ve[a].gym&&a%5===2))continue;let c=ve[a];vh[jd++%4].push({matrix:n.compose(c.x,c.gym?mt:0,c.z,c.yaw,.94),info:[0,0,0,0]})}ze.boardingStaff=gh.map(({staff:a,instances:c})=>new r(i,a,{name:"乗降場の誘導員",instances:c})),ze.seated=vh.map((a,c)=>new r(i,Vd(c),{name:"Seated visitors "+c,instances:a}));let _a=lh(0),Mh=n.compose(_a.x,0,_a.z,_a.yaw);ze.vehicle=new r(i,an,{name:"Generic mobility vehicle",instances:[{matrix:Mh,info:[0,0,0,0]}],dynamic:!0}),ze.vehicleGlass=new r(i,xl,{name:"Mobility vehicle windshield",instances:[{matrix:Mh,info:[0,0,0,0]}],dynamic:!0,shadow:!1});let bh=Array.from({length:3},(a,c)=>({matrix:n.compose(tn[0]+(c%2-.5)*2,0,tn[1]+(Math.floor(c/2)-.5)*2.2,c*1.8),info:[c,0,0,0]}));ze.goats=new r(i,Td(),{name:"Goats",instances:bh,dynamic:!0});let _r=[[29,58],[29,65],[28,72],[30,74],[31,69],[31,61],[29,58]],Sh=As(_r[0],2)||_r[0],mn={x:Sh[0],z:Sh[1],yaw:0,index:1,speed:.56};ze.kamanyan=new r(i,Hd(),{name:"かまくらいふ かまにゃん",instances:[{matrix:n.compose(mn.x,0,mn.z,0,.82),info:[0,.65,0,0]}],dynamic:!0}),ze.actors=xh.map((a,c)=>new r(i,El(c),{name:"Visitors "+c,instances:a,dynamic:!0})),ze.children=_h.map((a,c)=>new r(i,Gd(c),{name:"Children "+c,instances:a,dynamic:!0})),ze.tactilePlayer=new r(i,ph,{name:"白杖を持つ参加者",dynamic:!0}),ze.bowlingBall=new r(i,Sl,{name:"ペットボトルボウリングのボール",dynamic:!0}),ze.bowlingPins=new r(i,xr,{name:"ペットボトルボウリングのピン",instances:wl.map(()=>({matrix:n.identity(),info:[0,0,0,0]})),dynamic:!0}),t(.81,"看板と案内データを仕上げています"),d.upload(i.gl,matchMedia("(pointer:coarse)").matches||innerWidth<650?256:512),i.atlas=d;let Cl=70,Rl=0,yr=_a,wh=0,Th=new Set(["vendor","performer","gathering","game-child"]),Eh=os.filter(a=>!Th.has(a.type));function Ah(a){Cl=p(a,0,100);let c=Math.round(Eh.length*Cl/100);Eh.forEach((f,w)=>f.hidden=w>=c),os.filter(f=>Th.has(f.type)).forEach(f=>f.hidden=a===0),ze.seated.forEach(f=>f.visible=a>10),i.shadowDirty=!0}let Il=[[0,1.45,2.16,Math.PI],[7,1.45,-2.6,Math.PI],[8,1.45,-2.6,Math.PI/2],[11,3.45,-2.6,Math.PI/2],[12.7,3.45,-2.6,-Math.PI/2],[15.7,1.45,-2.6,-Math.PI/2],[16.7,1.45,-2.6,0],[23.7,1.45,2.16,0],[25.4,1.45,2.16,Math.PI]],Pl=(a,c,f)=>a+(c-a)*f,vr=(a,c,f)=>p((a-c)/(f-c),0,1),Ch=a=>{let c=Math.cos(a),f=Math.sin(a);return new Float32Array([1,0,0,0,0,c,f,0,0,-f,c,0,0,0,0,1])};function Qd(a){let c=a%25.4,f=Il.findIndex(([Vt])=>Vt>c),[w,D,O,B]=Il[f-1],[et,V,Q,xt]=Il[f],_t=vr(c,w,et),At=ze.tactilePlayer.instances[0];At.matrix=n.compose(mr+Pl(D,V,_t),0,gr+Pl(O,Q,_t),Pl(B,xt,_t)),At.info[1]=D!==V||O!==Q?.74:0,ze.tactilePlayer.updateInstances();let kt=Cl>0?a%9.5:0,he=vr(kt,1.9,4.25),ye=ze.bowlingBall.instances[0],ge=4.48*he;ye.matrix=n.multiply(n.compose(mr-1.55,he<1?.22:-100,gr+2.3-ge),Ch(-ge/.133)),ze.bowlingBall.updateInstances(),wl.forEach(({x:Vt,z:ue,row:fe},Le)=>{let Wt=vr(kt,3.92+fe*.12,4.37+fe*.12);ze.bowlingPins.instances[Le].matrix=n.multiply(n.compose(mr+Vt,.087,gr+ue-.13*Wt),Ch(-Wt*1.48))}),ze.bowlingPins.updateInstances()}function tf(a,c){let f=c*1.7+a.index*.67,w=a.x,D=a.z,O=a.yaw,B=.27+.11*Math.sin(f);if(a.bowler){let et=c%9.5,V=vr(et,.55,1.9),Q=vr(et,5.1,6.7);D-=.83*(V-Q),B=et>.55&&et<1.9||et>5.1&&et<6.7?.83:.18}else w+=.095*Math.sin(f),D+=.065*Math.cos(f),O+=.16*Math.sin(f*.64);a.instance.matrix=n.compose(w,xa(w,D),D,O,a.scale),a.instance.info[1]=B}Ah(70);function ef(a,c,f){Qd(a);let w=_r[mn.index],D=w[0]-mn.x,O=w[1]-mn.z,B=Math.hypot(D,O),et=B<.3;if(B<.3)mn.index=(mn.index+1)%_r.length;else{let V=Math.min(B,mn.speed*c),Q=mn.x+D/B*V,xt=mn.z+O/B*V;ci(Q,xt,.24)?(mn.x=Q,mn.z=xt,mn.yaw=Math.atan2(D,O),et=V>0):mn.index=(mn.index+1)%_r.length}if(ze.kamanyan.instances[0].matrix=n.compose(mn.x,xa(mn.x,mn.z)+Math.max(0,Math.sin(a*7))*.025,mn.z,mn.yaw,.82),ze.kamanyan.instances[0].info[1]=et?.65:0,ze.kamanyan.updateInstances(),Rh(f??a*.88+wh),a-Rl>.055){let V=Math.min(.18,a-Rl);Rl=a;for(let Q of os){if(Q.type==="game-child"&&!Q.hidden){tf(Q,a);continue}if(Q.walk&&Q.path&&!Q.hidden){let At=Q.path[Q.pathIndex],kt=At[0]-Q.x,he=At[1]-Q.z,ye=Math.hypot(kt,he);if(ye<.35)Q.pathIndex=(Q.pathIndex+1)%Q.path.length;else{let ge=Q.x+kt/ye*Q.speed*V,Vt=Q.z+he/ye*Q.speed*V;ci(ge,Vt,.19)?(Q.x=ge,Q.z=Vt,Q.yaw=Math.atan2(kt,he)):Q.pathIndex=(Q.pathIndex+1)%Q.path.length}}let xt=xa(Q.x,Q.z),_t=Q.yaw;Q.type==="performer"&&(_t=Math.sin(a*.5+Q.index*.3)*.12,xt+=.04+Math.max(0,Math.sin(a*2.4+Q.index*.4))*.07),Q.instance.matrix=n.compose(Q.x,Q.hidden?-100:xt,Q.z,_t,Q.scale),Q.instance.info[1]=Q.hidden?0:Q.walk?Q.type==="performer"?.8:1:0}ze.actors.forEach(Q=>Q.updateInstances()),ze.children.forEach(Q=>Q.updateInstances()),bh.forEach((Q,xt)=>{let _t=xt*1.8+Math.sin(a*.1+xt)*.3;Q.matrix=n.compose(tn[0]+(xt%2-.5)*2+Math.sin(a*.1+xt)*.2,0,tn[1]+(Math.floor(xt/2)-.5)*2.2,_t)}),ze.goats.updateInstances()}}t(.9,"歩行できる経路を確認しています");function Rh(a){yr=lh(a);let c=n.compose(yr.x,0,yr.z,yr.yaw);for(let f of[ze.vehicle,ze.vehicleGlass])f.instances[0].matrix=c,f.updateInstances()}function nf(a){let c=!a;ze.vehicleGlass.visible!==c&&(ze.vehicleGlass.visible=c,i.shadowDirty=!0)}return{data:m,markers:zt,selectableSigns:Ke,colliders:yt,buildings:jt,campus:Ie,field:rt,restricted:sh,track:Cn,trackLength:Ss,ropeSegments:gl,boardingGaps:dr,coneBars:uh,meshes:ze,trunks:St,seats:ve,atlas:d,categoryColors:y,isWalkable:ci,walkHeight:xa,nearestWalkable:As,update:ef,setCrowd:Ah,setRideView:nf,setCarStart:(a,c)=>{wh=a-c*.88,Rh(a)},p:P,getCar:()=>yr,getKamanyan:()=>[mn.x,2.18,mn.z],polyInside:Ge,actorCount:os.length}};window.FestaNavigation=class{constructor(i){this.world=i,this.step=.7;let t=i.campus.map(([n])=>n),e=i.campus.map(([,n])=>n);this.x0=Math.floor(Math.min(...t))-1,this.z0=Math.floor(Math.min(...e))-1,this.nx=Math.ceil((Math.max(...t)+1-this.x0)/this.step)+1,this.nz=Math.ceil((Math.max(...e)+1-this.z0)/this.step)+1,this.size=this.nx*this.nz,this.open=new Uint8Array(this.size);for(let n=0;n<this.nz;n++)for(let s=0;s<this.nx;s++){let r=this.point(n*this.nx+s);this.open[n*this.nx+s]=i.isWalkable(r[0],r[1],.34)?1:0}}point(i){return[this.x0+i%this.nx*this.step,this.z0+Math.floor(i/this.nx)*this.step]}index(i){return Math.round((i[1]-this.z0)/this.step)*this.nx+Math.round((i[0]-this.x0)/this.step)}nearest(i){let t=Math.round((i[0]-this.x0)/this.step),e=Math.round((i[1]-this.z0)/this.step),n=-1,s=1/0;for(let r=0;r<18;r++){for(let l=-r;l<=r;l++)for(let o=-r;o<=r;o++){if(r&&Math.abs(o)!==r&&Math.abs(l)!==r)continue;let u=t+o,h=e+l;if(u<0||u>=this.nx||h<0||h>=this.nz)continue;let p=h*this.nx+u;if(!this.open[p])continue;let _=this.point(p),m=Math.hypot(_[0]-i[0],_[1]-i[1]);m<s&&(s=m,n=p)}if(n>=0)return n}return-1}lineFree(i,t,e=.3){let n=Math.hypot(t[0]-i[0],t[1]-i[1]),s=Math.ceil(n/.16);for(let r=0;r<=s;r++)if(!this.world.isWalkable(i[0]+(t[0]-i[0])*r/Math.max(1,s),i[1]+(t[1]-i[1])*r/Math.max(1,s),e))return!1;return!0}find(i,t){let e=this.nearest(i),n=this.nearest(t);if(e<0||n<0)return null;let s=new Float32Array(this.size);s.fill(1/0);let r=new Int32Array(this.size);r.fill(-1);let l=new Uint8Array(this.size),o=[],u=(C,I)=>{let x={i:C,f:I},R=o.length;for(o.push(x);R;){let T=R-1>>1;if(o[T].f<=x.f)break;o[R]=o[T],R=T}o[R]=x},h=()=>{let C=o[0],I=o.pop();if(o.length){let x=0;for(;2*x+1<o.length;){let R=2*x+1;if(R+1<o.length&&o[R+1].f<o[R].f&&R++,o[R].f>=I.f)break;o[x]=o[R],x=R}o[x]=I}return C.i},p=n%this.nx,_=Math.floor(n/this.nx),m=C=>{let I=Math.abs(C%this.nx-p),x=Math.abs(Math.floor(C/this.nx)-_);return Math.max(I,x)+.41421356*Math.min(I,x)};s[e]=0,u(e,m(e));let E=!1;for(;o.length;){let C=h();if(l[C])continue;if(l[C]=1,C===n){E=!0;break}let I=C%this.nx,x=Math.floor(C/this.nx);for(let R=-1;R<=1;R++)for(let T=-1;T<=1;T++){if(!T&&!R)continue;let F=I+T,y=x+R;if(F<0||F>=this.nx||y<0||y>=this.nz)continue;let N=y*this.nx+F;if(!this.open[N]||l[N]||T&&R&&(!this.open[x*this.nx+F]||!this.open[y*this.nx+I]))continue;let H=s[C]+(T&&R?1.41421356:1);H<s[N]&&(s[N]=H,r[N]=C,u(N,H+m(N)))}}if(!E)return null;let M=[],P=n;for(;P>=0&&(M.push(this.point(P)),P!==e);)P=r[P];M.reverse(),this.lineFree(i,M[0])&&M.unshift([...i]),this.lineFree(M[M.length-1],t)&&M.push([...t]);let A=[M[0]],d=0;for(;d<M.length-1;){let C=M.length-1;for(;C>d+1&&!this.lineFree(M[d],M[C]);)C--;A.push(M[C]),d=C}return A}};var nh=[25.1,16.3];function gd(i,t){let[e,n]=i.boardingGaps,s=e.rec.approach,r=n.rec.approach,l=t["T-15"],o=i.p(470,339.5)[1],u=i.p(470+110*.38,504)[0],h=0,p=Math.PI/2,_=Math.PI,m=-Math.PI/2,E=(P,A)=>({kind:"walk",label:P,points:A.map(([d,C,I])=>({position:[d,C],yaw:I}))}),M=(P,A,d)=>({kind:"ride",label:P,from:A,to:d});return[E("イートイン1のブース",[[19.4,11.6],[11.8,10.1,_],[4,10.1,_],[-4.8,10,_],[-5.1,6.1,m],[-5.1,1.2,m],[-5.1,-6,m],[-5.1,-13.9,m],[1.2,-14,h],[8.8,-14,h],[16.2,-14,h],[24.6,-14,h],[31.3,-17.6,h],[31.3,-25.3],r]),M("乗降場②から①へ",n,e),E("ヤギ牧場",[[-36.2,-38.6,h],[...l.approach,h]]),{kind:"look",label:"ヤギ牧場",look:l.pos,duration:3},E("乗降場①へ戻る",[[-36.2,-38.6],s]),M("乗降場①から②へ",e,n),E("スズキヤ横から体育館へ",[[31.6,-25.3,p],[31.9,-9.2,p],[29.7,-3.4,p],[27.8,2.5,p],[27.8,8.9,p],[29.5,o,p],[35.3,o,p]]),E("体育館の客席へ",[[35.3,17.6],[37.3,19.4],[52.3,19.4],[54.4,21.4],[54.4,30.7],[50.7,32.2],[46.6,32.2,h]]),{kind:"turn",label:"体育館を見渡す",duration:9},E("体育館の南側玄関から屋台へ",[[u,36.2],[u,41.2],[u,53],[36.4,53],[29.4,53],[30.5,56.6]]),E("キッチンカーの間を往復",[[31.9,61.5,p],[32,65.8,p],[32.2,70.8,p],[32.6,76.5,p],[30.6,74.4,m],[28.6,70.5,m],[28.5,65.7,m],[28.5,57.1,m]]),E("通路から賑わいゾーンへ",[[27.6,52.1],[27.4,45],[27.4,33.5],[27.8,25],[27.2,19.7],nh])]}(async function(){let i=L=>document.getElementById(L),t=L=>String(L??"").replace(/[&<>"']/g,tt=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[tt]),e={search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',overview:'<path d="m3 8 9-5 9 5-9 5-9-5Z M3 12l9 5 9-5M3 16l9 5 9-5"/>',route:'<circle cx="5" cy="5" r="2"/><circle cx="19" cy="19" r="2"/><path d="M7 5h8a4 4 0 0 1 0 8H9a4 4 0 0 0 0 8h5"/>',settings:'<path d="M4 6h16M4 12h16M4 18h16"/><circle cx="9" cy="6" r="2" fill="currentColor"/><circle cx="16" cy="12" r="2" fill="currentColor"/><circle cx="8" cy="18" r="2" fill="currentColor"/>',help:'<circle cx="12" cy="12" r="9"/><path d="M9.3 9a2.8 2.8 0 0 1 5.4 1c0 2-2.7 2-2.7 4M12 17h.01"/>',arrow:'<path d="M4 12h15m-5-5 5 5-5 5"/>',back:'<path d="M20 12H5m5-5-5 5 5 5"/>',close:'<path d="m6 6 12 12M6 18 18 6"/>',expand:'<path d="M9 3H3v6M15 3h6v6M3 15v6h6M21 15v6h-6"/>',walk:'<circle cx="13" cy="4" r="2"/><path d="m11 9 3 2 4 1M11 8l-3 5-4 1M11 9l-1 7-4 5m4-5 5 1 2 5"/>',pin:'<path d="M19 10c0 6-7 12-7 12S5 16 5 10a7 7 0 0 1 14 0Z"/><circle cx="12" cy="10" r="2.5"/>',eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>'};function n(L){return'<svg viewBox="0 0 24 24" aria-hidden="true">'+(e[L]||e.pin)+"</svg>"}function s(L=document){L.querySelectorAll("[data-icon]").forEach(tt=>tt.innerHTML=n(tt.dataset.icon))}s();let r=FESTA_DATA,l=[...r.records,...r.locations],o=Object.fromEntries(l.map(L=>[L.id,L])),u={F:"#a64c35",S:"#385e76",T:"#4e6c43",P:"#83503e",M:"#ab8450",I:"#28595c"},h=[["F-truck","[F] 飲食（キッチンカー）"],["F-tent","[F] 飲食（テント）"],["S-goods","[S] 物販"],["S-paid","[S] 有料ワークショップ・スポーツ・体験"],["T","[T] 無料・情報・スポーツ・体験"],["P","[P] ステージ出演"]],p=Object.fromEntries(h),_={M:"交流・モビリティー",I:"会場案内",P:"体育館の出演団体"},m=new Set(["S-1","S-2","S-3","S-4","S-5","S-6","S-7","S-13"]),E=new Set(["S-8","S-9","S-10","S-11","S-12"]),M=new Set(r.locations.map(L=>L.id));function P(L){return M.has(L.id)?L.category:L.category==="F"?L.kind==="truck"?"F-truck":"F-tent":L.category==="S"?m.has(L.id)?"S-goods":E.has(L.id)?"S-paid":null:L.category==="T"||L.category==="P"?L.category:null}function A(L){return M.has(L.id)?_[L.category]:p[P(L)]}let d=matchMedia("(pointer:coarse)").matches||innerWidth<650,C=matchMedia("(prefers-reduced-motion: reduce)").matches,I,x,R,T=!1,F=0,y=0,N=0,H,Y=null,b={mode:"welcome",pos:[0,11],yaw:.1,pitch:0,orbitYaw:-.48,orbitPitch:.79,orbitDist:115,orbitTarget:[0,0,22],returnPos:null,selected:null,nearest:null,path:null,pathIndex:1,auto:!1,targetId:null,labels:!0,showRoof:!0,paused:!1,sheet:null,crowd:70,light:"day",distanceWalked:0,rideYaw:0,boardingStop:null,tour:null,runMode:!1,quality:d?"standard":"high"},$={},X={x:0,y:0,active:!1,pid:null},J={active:!1,pid:null,x:0,y:0,moved:0},ut=null,dt=new Set,wt=new Map;function ot(L,tt=4e3){i("toast").textContent=L,i("toast").classList.remove("hidden"),clearTimeout(H),H=setTimeout(()=>i("toast").classList.add("hidden"),tt)}function nt(L,tt){i("loadBar").style.width=Math.round(L*100)+"%",i("loadText").textContent=tt}let v=()=>new Promise(L=>setTimeout(L,0));function qt(){b.mode="walk",i("welcome").classList.add("hidden"),i("hud").classList.remove("hidden"),i("minimapWrap").classList.remove("hidden"),i("bottomHint").classList.remove("hidden"),i("joystick").classList.remove("hidden"),d&&i("lookHint").classList.remove("hidden"),i("scene").focus({preventScroll:!0})}function Ht(L){b.yaw=Math.atan2(L[0]-b.pos[0],-(L[1]-b.pos[1])),b.pitch=-.02}function ae(L){x&&(b.pos=x.nearestWalkable(L)||[0,11])}function Z(L="field"){if(T){if(k(),Tt(),xe(),oe(),qt(),L==="field")ae([2.8,11]),Ht([14,-14]);else{let tt=o[L];ae(tt.approach),Ht(L==="GATE_MAIN"?r.layout.mainGateLook:[-27,-24])}b.mode="walk",jt(),ot(d?"左の丸で移動。画面の右側をドラッグすると見回せます。":"左の丸、キーボードのWASD または矢印キーで移動。画面をドラッグして見回します。",4500)}}function Ee(){T&&(k(),Tt(),xe(),oe(),b.mode="welcome",i("welcome").classList.remove("hidden"),i("minimapWrap").classList.add("hidden"),i("bottomHint").classList.add("hidden"),i("nearby").classList.add("hidden"),i("joystick").classList.add("hidden"),i("lookHint").classList.add("hidden"),jt())}function yt(){if(T){if(k(),Tt(),xe(),b.mode==="overview"){b.mode="walk",b.returnPos&&(b.pos=[...b.returnPos]),b.pitch=0,jt();return}b.mode==="welcome"&&qt(),oe(),b.returnPos=[...b.pos],b.mode="overview",b.orbitTarget=[0,0,23],b.orbitDist=158,b.orbitYaw=-.27,b.orbitPitch=.9,jt(),ot("ドラッグで回転、ホイールで拡大。地面を押すとその場所へ移動します。ブースの札や看板を押すと詳細を表示します。")}}function St(){return b.tour?.paused?.holdRide&&b.mode==="ride"}function zt(){let L=b.tour;return L&&(!L.paused||b.mode==="walk"&&!b.path||St())}function jt(){let L=b.mode,tt=b.tour,it=zt(),pt=!!tt&&!tt.paused;if(i("tourBtn").classList.toggle("active",pt),i("tourBtn").setAttribute("aria-pressed",String(pt)),i("tourBtn").setAttribute("aria-label",tt?pt?"自動ツアーを一時停止":"自動ツアーを再開":"自動ツアーを開始"),i("welcomeTour").firstChild.nodeValue=tt?"自動ツアーを再開 ":"自動ツアー ",i("modeExit").setAttribute("aria-label",it?"自動ツアーを終了":"現在の移動を終了"),x&&x.setRideView(L==="ride"),i("modeBar").classList.toggle("ride-active",L==="ride"),i("speedToggle").classList.toggle("hidden",d||L!=="walk"||!!it),i("speedToggle").textContent=b.runMode?"速度：走る":"速度：歩く",i("speedToggle").setAttribute("aria-pressed",String(b.runMode)),i("speedToggle").setAttribute("aria-label",b.runMode?"走るを選択中。歩くに切り替える":"歩くを選択中。走るに切り替える"),i("overviewBtn").classList.toggle("active",L==="overview"),i("joystick").classList.toggle("hidden",L!=="walk"||!!b.sheet),i("lookHint").classList.toggle("hidden",!d||L!=="walk"||!!b.sheet),i("modeBar").classList.toggle("hidden",L==="welcome"||L==="walk"&&!b.path&&!it),it)i("modeText").textContent=pt?"自動ツアー中":"自動ツアーを一時停止中",i("modeAction").textContent=pt?"一時停止":"再開";else if(L==="overview")i("modeText").textContent="上空から会場を見る",i("modeAction").textContent="歩行に戻る";else if(L==="ride")i("modeText").textContent="トゥクトゥクに乗車中",i("modeAction").textContent="トゥクトゥクから降りる";else if(b.path){let g=o[b.targetId];i("modeText").textContent=(b.auto?"歩いて案内中：":"経路表示：")+(g?g.short:"選択した場所"),i("modeAction").textContent=b.auto?"一時停止":"自動で歩く"}}function $t(L){return L.kind==="performer"||L.id==="T-SCI"?o.GYM:L}function ve(L,tt=!0){if(!T)return;let it=typeof L=="string"?$t(o[L]):null,pt=it?.approach||(!it&&Array.isArray(L)?L:null);if(!pt)return ot("この団体のブース位置は資料で特定できていません。"),!1;k(),b.mode==="welcome"&&Z("field"),b.mode==="ride"&&(b.mode="walk",ae(o.MOBILITY.approach)),b.mode="walk";let g=R.find(b.pos,pt);return g?(b.path=g,b.pathIndex=1,b.auto=tt,b.targetId=it?.id||null,re(g),Tt(),xe(),jt(),!0):(ot("ここから歩ける経路を見つけられませんでした。「この場所へ移動」で見学できます。",6e3),!1)}function Ke(L){let tt=$t(o[L]);return tt?.approach?(k(),b.mode==="welcome"&&qt(),oe(),b.mode="walk",ae(tt.approach),Ht(tt.pos),tt.id==="GATE_MAIN"&&Ht(r.layout.mainGateLook),tt.id==="GATE_WEST"&&Ht([-27,-24]),tt.id==="GYM"&&Ht([tt.pos[0],x.p(525,345)[1]]),tt.id==="WC"&&Ht([45,45]),Tt(),xe(),jt(),ot(tt.short+" に移動しました"),!0):!1}function oe(){b.path=null,b.auto=!1,b.targetId=null,ut&&(ut.dispose(),ut=null),jt()}function re(L){ut&&ut.dispose();let{Geometry:tt,Mesh:it,material:pt}=FestaGL,g=new tt;for(let U=0;U<L.length-1;U++){let q=L[U],K=L[U+1],Rt=K[0]-q[0],ct=K[1]-q[1],bt=Math.hypot(Rt,ct);if(bt<.01)continue;let Lt=-ct/bt*.055,Xt=Rt/bt*.055;g.quad([q[0]-Lt,.088,q[1]-Xt],[q[0]+Lt,.088,q[1]+Xt],[K[0]+Lt,.088,K[1]+Xt],[K[0]-Lt,.088,K[1]-Xt],pt("#b78134",0,.75,0,.13));for(let me=1;me<bt;me+=2){let be=q[0]+Rt*me/bt,te=q[1]+ct*me/bt;g.disk(be,.092,te,.12,pt("#dfbc77",0,.7,0,.2),10)}}let z=L[L.length-1];g.cylinder([z[0],.08,z[1]],[z[0],.15,z[1]],.26,.26,pt("#d2a558",0,.65,0,.2),30),ut=new it(I,g,{name:"Navigation guide",shadow:!1})}function qe(L,tt){let it=Math.max(1,Math.ceil(Math.hypot(L,tt)/.15)),pt=0;for(let g=0;g<it;g++){let z=[...b.pos],U=b.pos[0]+L/it,q=b.pos[1]+tt/it;x.isWalkable(U,q,.28)?b.pos=[U,q]:(x.isWalkable(U,b.pos[1],.28)&&(b.pos[0]=U),x.isWalkable(b.pos[0],q,.28)&&(b.pos[1]=q)),pt+=Math.hypot(b.pos[0]-z[0],b.pos[1]-z[1])}return b.distanceWalked+=pt,pt}function pe(L){if(!b.path||!b.auto)return;let tt=b.path[b.pathIndex];if(!tt){Me();return}let it=tt[0]-b.pos[0],pt=tt[1]-b.pos[1],g=Math.hypot(it,pt);if(g<.16){b.pathIndex++,b.pathIndex>=b.path.length&&Me();return}let z=Math.min(g,L*2.35),U=qe(it/g*z,pt/g*z),q=Math.atan2(it,-pt);b.yaw+=Ie(q-b.yaw)*Math.min(1,L*3.3),b.pitch+=(0-b.pitch)*Math.min(1,L*3),U<2e-4&&z>.001&&(b.auto=!1,ot("障害物の手前で停止しました。移動キーで位置を調整できます。"),jt())}function Me(){let L=b.targetId,tt=o[L];oe(),tt&&(Ht(tt.pos),tt.id==="GATE_MAIN"&&Ht(r.layout.mainGateLook),tt.id==="GATE_WEST"&&Ht([-27,-24]),dt.add(L),ot(tt.short+" に到着しました",2600))}function Ie(L){return Math.atan2(Math.sin(L),Math.cos(L))}let Ge=[i("rideBubble"),i("rideBubble2")];function Pe(L){b.boardingStop=L,x.setCarStart(L.distance,y),b.mode="ride",b.rideYaw=0,b.pitch=-.06}function Ye(L=b.boardingStop){b.mode="walk",ae(L.rec.approach),Ht(L.position),b.boardingStop=null}function j(L){!T||b.mode!=="walk"||!L?.rec.approach||(k(),b.tour&&(b.tour.paused.holdRide=!1),Tt(),oe(),Pe(L),jt(),ot("トゥクトゥクに乗っています。ドラッグして周囲を見回せます。車種・速度は演出です。",5500))}function He(){if(zt()){st();return}b.mode==="overview"?(b.mode="walk",b.returnPos&&ae(b.returnPos),b.pitch=0):b.mode==="ride"?Ye():oe(),jt()}function De(){if(!T)return;if(b.tour){b.tour.paused?S():k();return}Tt(),xe(),oe(),Qe(),b.mode==="ride"&&Ye(),b.mode==="welcome"&&qt(),b.mode="walk",ae(nh),b.tour={steps:gd(x,o),index:-1},gt();let L=b.tour;if(vt(L,L.step.points[0])){let tt=L.path.find(([it,pt])=>Math.hypot(it-b.pos[0],pt-b.pos[1])>=.1);tt&&(Ht(tt),b.pitch=0)}clearTimeout(H),i("toast").classList.add("hidden")}function k(){let L=b.tour;if(!L||L.paused)return;let{mode:tt,pos:it,yaw:pt,pitch:g,boardingStop:z,rideYaw:U}=b;L.paused={view:{mode:tt,pos:[...it],yaw:pt,pitch:g,boardingStop:z,rideYaw:U},holdRide:tt==="ride",carDistance:x.getCar().distance},Qe(),jt()}function S(){let L=b.tour,{view:tt,carDistance:it}=L.paused;Tt(),xe(),oe(),Qe(),b.mode==="welcome"&&qt(),Object.assign(b,tt),tt.mode==="ride"&&(x.setCarStart(it,y),L.lastCarDistance=it),L.paused=null,clearTimeout(H),i("toast").classList.add("hidden"),jt()}function st(){b.tour&&(b.tour=null,b.mode==="ride"&&Ye(),jt())}function rt(L,tt){let it=tt-L;return Math.abs(it)<1e-6?0:it<0?it+x.trackLength:it}function gt(){let L=b.tour;L.index=(L.index+1)%L.steps.length,L.step=L.steps[L.index],L.pointIndex=0,L.path=null,L.elapsed=0,L.startYaw=b.yaw;let tt=L.step;tt.kind==="ride"&&(Pe(tt.from),L.lastCarDistance=x.getCar().distance,L.remainingRide=rt(tt.from.distance,tt.to.distance)),jt()}function Dt(L,tt){let it=Ie(L-b.yaw),pt=tt*1.05;b.yaw+=Math.max(-pt,Math.min(pt,it)),b.pitch=0}function It(){st(),ot("歩ける経路を見つけられなかったため、自動ツアーを停止しました。",6e3)}function vt(L,tt){let it=R.find(b.pos,tt.position),pt=it?.[it.length-1];return!pt||Math.hypot(pt[0]-tt.position[0],pt[1]-tt.position[1])>.2?!1:(L.path=it,L.pathIndex=0,L.walkYaw=null,!0)}function Mt(L,tt){let it=L.step.points[L.pointIndex];if(!it){gt();return}if(!L.path&&!vt(L,it)){It();return}let pt=L.path[L.pathIndex];if(!pt){L.pointIndex++,L.path=null;return}let g=pt[0]-b.pos[0],z=pt[1]-b.pos[1],U=Math.hypot(g,z);if(U<.1){L.pathIndex++,L.walkYaw=null;return}let q=Math.atan2(g,-z);if(L.walkYaw===null){let Rt=Ie((it.yaw??q)-q),ct=Math.PI/7;L.walkYaw=q+FestaGL.clamp(Rt,-ct,ct)}if(Dt(L.walkYaw,tt),Math.abs(Ie(q-b.yaw))>Math.PI/4)return;let K=Math.min(U,tt*2.1);qe(g/U*K,z/U*K)<2e-4&&K>.001&&It()}function Gt(L){let tt=b.tour,it=tt.step;if(it.kind==="walk"){Mt(tt,L);return}if(it.kind==="ride"){let pt=x.getCar().distance;tt.remainingRide-=rt(tt.lastCarDistance,pt),tt.lastCarDistance=pt,tt.remainingRide<.001&&(Ye(it.to),gt());return}if(tt.elapsed=Math.min(tt.elapsed+L,it.duration),it.kind==="turn"){let pt=tt.elapsed/it.duration;b.yaw=tt.startYaw+Math.PI*2*(pt*pt*(3-2*pt))}else Dt(Math.atan2(it.look[0]-b.pos[0],b.pos[1]-it.look[1]),L);tt.elapsed>=it.duration&&gt()}function ne(L,tt){k(),Y=document.activeElement,b.sheet=tt,i("sheetTitle").textContent=L,i("sheet").classList.remove("hidden"),i("sheetScrim").classList.remove("hidden"),i("sheetBack").classList.add("hidden"),i("sheetBody").scrollTop=0,Qe(),jt(),setTimeout(()=>i("sheetClose").focus({preventScroll:!0}),0)}function Tt(){b.sheet=null,i("sheet").classList.add("hidden"),i("sheetScrim").classList.add("hidden"),jt(),Y&&Y.isConnected&&Y.focus({preventScroll:!0})}let Ot="",Jt="all";function le(){ne("ブースを見つける","search"),i("sheetBody").innerHTML='<div class="search-field">'+n("search")+'<input id="searchInput" aria-label="団体名や内容から検索" placeholder="団体名・食べもの・体験から検索" value="'+t(Ot)+'"></div><div class="filter-row">'+[["all","すべて"],...h,["I","会場案内"]].map(([L,tt])=>'<button class="filter '+(L===Jt?"active":"")+'" data-filter="'+L+'">'+tt+"</button>").join("")+'</div><p class="result-count" id="resultCount"></p><p class="source-text">'+t(r.notice)+'</p><div id="results"></div>',i("searchInput").addEventListener("input",L=>{Ot=L.target.value,Et()}),i("sheetBody").querySelectorAll("[data-filter]").forEach(L=>L.onclick=()=>{Jt=L.dataset.filter,i("sheetBody").querySelectorAll("[data-filter]").forEach(tt=>tt.classList.toggle("active",tt===L)),Et()}),Et(),setTimeout(()=>i("searchInput").focus(),30)}function Et(){let L=Ot.normalize("NFKC").toLowerCase().trim(),tt=L.split(/\s+/).filter(Boolean),it=l.filter(pt=>(Jt==="all"||(Jt==="I"?M.has(pt.id)&&["M","I"].includes(pt.category):P(pt)===Jt))&&tt.every(g=>(pt.id+" "+pt.name+" "+pt.detail).normalize("NFKC").toLowerCase().includes(g)));i("resultCount").textContent=it.length+" 項目 ／ 団体"+r.records.length+"・会場案内"+r.locations.length+"（9月時点の予定）",i("results").innerHTML=it.length?it.map(pt=>'<button class="result" data-id="'+t(pt.id)+'"><span class="badge" style="background:'+u[pt.category]+'">'+t(pt.id.startsWith("P-")?"P":pt.id.includes("-")?pt.id:pt.id==="WC"?"WC":"案内")+'</span><span class="result-info"><strong>'+t(pt.name)+'</strong><small class="'+(pt.kind==="unplaced"?"unplaced":"")+'">'+t(pt.kind==="unplaced"?"位置未特定 · "+pt.caption:pt.caption)+"</small></span>"+n("arrow")+"</button>").join(""):'<p class="empty">該当する項目がありません。<br>短い言葉でも検索できます。</p>',i("results").querySelectorAll("[data-id]").forEach(pt=>pt.onclick=()=>at(pt.dataset.id,!0))}function G(L){let tt=r.exhibitorUrls?.[L];if(!tt||!/^https?:\/\//i.test(tt))return"";let it=t(tt);return'<a class="detail-link" href="'+it+'" target="_blank" rel="noopener noreferrer">'+it+"</a>"}function at(L,tt=!1){let it=o[L];if(!it)return;b.selected=L,dt.add(L),ne("ブース・会場の詳細","detail"),i("sheetBack").classList.toggle("hidden",!tt);let pt=$t(it),g=T&&!!pt.approach,z=A(it),U='<div class="detail-id"><span class="badge" style="background:'+u[it.category]+'">'+t(it.id.startsWith("P-")?"P":it.id.includes("-")?it.id:"案内")+"</span>"+t(z)+'<span>／ 予定</span></div><h3 class="detail-title">'+t(it.name)+'</h3><p class="detail-caption">'+t(it.caption)+"</p>";g?U+='<div class="detail-actions"><button class="primary" id="navigateHere">'+n("route")+' 歩いて案内</button><button class="secondary" id="jumpHere">この場所へ移動</button></div>':U+=it.kind==="unconfirmed"?'<div class="note-box warn">今回の体育館の開始予定9件に記載がなく、出演予定は未確認です。</div>':it.kind==="unplaced"?'<div class="note-box warn">参加予定団体一覧には記載がありますが、配置図からワークショップの位置を特定できません。推測でブースを追加していません。</div>':'<div class="note-box">3D表示が起動していないため、ここでは移動機能を利用できません。団体の予定内容は読めます。</div>',it.id==="MOBILITY"&&(U+='<p class="source-text">電動トライク1台。車体色、走行速度は実際と異なる場合があります。</p>');let q=r.exhibitorDescriptions?.[L],K=q&&L==="T-4"?q:[it.detail,q].filter(Boolean).join(`

`);it.id!=="GYM"&&(U+='<div class="section-label">'+(it.category==="P"?"参加予定内容":"内容")+'</div><div class="detail-content">'+t(K)+"</div>"),U+=G(L),(it.category==="F"||it.category==="S")&&(U+='<div class="note-box">3Dで置かれている商品は実物や販売数量を示すものではありません。</div>'),(it.id==="GYM"||it.category==="P"||it.id==="T-SCI")&&(U+='<div class="section-label">体育館内 開始予定</div>'+r.schedule.map(Rt=>'<div class="schedule-row"><b>'+t(Rt.time)+"</b><span>"+t(Rt.name)+"</span></div>").join(""),U+='<p class="source-text">進行上の都合で開始・終了時刻は変更になることがあります。</p>'),U+='<p class="source-text">'+t(r.notice)+"</p>",i("sheetBody").innerHTML=U,g&&(i("navigateHere").onclick=()=>{ve(L,!0)},i("jumpHere").onclick=()=>{Ke(L)})}function ht(){ne("表示と操作の設定","settings"),i("sheetBody").innerHTML='<div class="setting-row"><label for="quality">描画品質</label><select id="quality"><option value="high">高画質 — PC向け</option><option value="standard">標準 — 軽さと品質のバランス</option><option value="low">軽量 — 小さな端末向け</option></select><small>影の解像度と描画解像度を変更します。重い場合は「標準」「軽量」を選択。</small></div><div class="setting-row"><label for="crowd">来場者の表示量 <span id="crowdValue"></span></label><input id="crowd" type="range" min="0" max="100" step="10" value="'+b.crowd+'"><small>人数は演出です。実際の来場者数や混雑予測ではありません。</small></div><div class="setting-row"><label for="light">光の雰囲気</label><select id="light"><option value="day">昼の光</option><option value="afternoon">午後の光</option></select><small>当日の天気・太陽位置を再現したものではありません。</small></div><label class="toggle-row" for="labelsToggle">近くのブース名を表示<input type="checkbox" id="labelsToggle" '+(b.labels?"checked":"")+'></label><label class="toggle-row" for="roofToggle">体育館の屋根を表示<input type="checkbox" id="roofToggle" '+(b.showRoof?"checked":"")+'></label><div class="note-box">屋根を外すと、上空から体育館の中を確認できます。歩行時には屋根の表示に関係なく出入口から入ります。</div><button class="secondary" id="fullscreenBtn">全画面表示を切り替える</button><button class="text-btn" id="captureBtn">いまの3D画面を画像として保存 '+n("arrow")+'</button><div class="section-label">動作情報</div><p class="source-text" id="performanceInfo"></p><button id="settingsHelp" class="text-btn">操作方法・資料と再現範囲 '+n("help")+"</button>",i("quality").value=b.quality,i("quality").onchange=L=>{b.quality=L.target.value,I.setQuality(b.quality),ot("描画品質を変更しました")},i("crowdValue").textContent=b.crowd+"%",i("crowd").oninput=L=>{b.crowd=Number(L.target.value),x.setCrowd(b.crowd),i("crowdValue").textContent=b.crowd+"%"},i("light").value=b.light,i("light").onchange=L=>{b.light=L.target.value,I.sun=FestaGL.V.norm(b.light==="day"?[-.38,.79,.48]:[-.75,.38,.46]),I.sunColor=b.light==="day"?[1,.94,.81]:[1,.84,.65],I.sunPower=b.light==="day"?3.7:3.4,I.exposure=b.light==="day"?1.12:1.18,I.createShadow()},i("labelsToggle").onchange=L=>b.labels=L.target.checked,i("roofToggle").onchange=L=>{b.showRoof=L.target.checked,x.meshes.roof.visible=b.showRoof,I.shadowDirty=!0},i("fullscreenBtn").onclick=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{ot("この表示環境では全画面表示を利用できません。")}},i("captureBtn").onclick=()=>{try{I.render(y);let L=document.createElement("a");L.href=i("scene").toDataURL("image/png"),L.download="festa2026_3d_view.png",L.click()}catch{ot("画像の保存に対応していない表示環境です。")}},i("settingsHelp").onclick=()=>Bt(),i("performanceInfo").textContent="WebGL 2 ／ 外部通信なし ／ "+I.stats.triangles.toLocaleString()+" triangles ／ "+I.stats.draws+" draw calls（現在の場面）"}function Bt(){ne("操作と、資料について","help"),i("sheetBody").innerHTML='<div class="help-section"><h3>PCで歩く</h3>'+[["左下の丸いパッド","前後・左右に移動"],["W / A / S / D・矢印キー","前後・左右に移動"],["画面をドラッグ","見回す"],["画面下の「歩く」「走る」","速度を切り替える"],["Shift ＋移動","押している間だけ走る"],["E","近くのブースの内容"],["V","上空／歩行を切り替え"],["M","会場マップ"],["Esc","閉じる・移動を止める"]].map(L=>'<div class="control-row"><span>'+t(L[0])+"</span><span>"+t(L[1])+"</span></div>").join("")+"<h3>スマートフォン・タブレット</h3><p>左下の丸いパッドで移動します。中心付近では細かく、外側では速く移動できます。画面の右側をドラッグして見回します。ブースの札、テントやキッチンカーの看板、店頭の立て看板や「内容を見る」を押すと、詳細を表示します。端末を横向きにすると広く見渡せます。</p><h3>ブースを探す・案内を使う</h3><p>「ブース」から団体名や食べもの、体験などで検索できます。「歩いて案内」は経路を表示して自動で歩きます。移動キーやジョイスティックを使うと手動操作に戻ります。「この場所へ移動」は、そのブースの前へ直接移動します。</p><p>「自動ツアー」は賑わいゾーンから出発し、徒歩とトゥクトゥクで会場を繰り返し回ります。「ツアーを停止」または Esc で終了できます。</p><p>上空表示ではドラッグで回転、ホイール／2本指で拡大・縮小。会場マップでは点を選ぶとブース情報、歩ける場所を選ぶと直接移動します。ブース番号入り配置図と上空表示でも歩ける場所へ直接移動できます。</p><h3>読み取り方</h3>"+r.caveats.map(L=>"<p>"+t(L)+"</p>").join("")+'<div class="note-box">校舎は外観のみ。体育館には出入口から入れます。壇上舞台は使用しません。</div><h3>参照資料</h3>'+r.sources.map(L=>'<div class="source-entry"><strong>'+t(L.type)+" · "+(L.url?'<a href="'+t(L.url)+'" target="_blank" rel="noopener noreferrer">'+t(L.name)+"</a>":t(L.name))+"</strong><p>"+t(L.description)+"</p></div>").join("")+'<h3>このアプリについて</h3><p>すべての描画・検索・経路計算は、このHTMLを開いた端末内で行います。外部通信、位置情報の取得、アクセス解析、アカウント登録はありません。「かまにゃん」の紹介ページを開く場合だけ外部に移動します。</p><p>描画にはThree.jsを使用し、形状、人物、看板は本アプリ向けに実装。地表テクスチャはCC0画像を使用しています。写真測量や現地撮影による3Dモデルではありません。</p><p class="source-text">テクスチャ：Gravel04 / CC0Textures、Grass 01 / linolafett（CC0、scikit-image同梱）。提供資料の権利は元の権利者に帰属します。</p></div>'}function Ct(L){let tt=L.clientWidth,it=L.clientHeight,pt=x.campus.map(([Lt])=>Lt),g=x.campus.map(([,Lt])=>Lt),z=Math.min(...pt),U=Math.max(...pt),q=Math.min(...g),K=Math.max(...g),Rt=(z+U)/2,ct=(q+K)/2,bt=Math.min((tt-18)/(U-z),(it-18)/(K-q));return{w:tt,h:it,scale:bt,to:Lt=>[tt/2+(Lt[0]-Rt)*bt,it/2+(Lt[1]-ct)*bt],from:(Lt,Xt)=>[(Lt-tt/2)/bt+Rt,(Xt-it/2)/bt+ct]}}function mt(L,tt=!1){if(!x||!L.clientWidth)return;let it=Ct(L),pt=Math.min(devicePixelRatio,2),g=Math.round(it.w*pt),z=Math.round(it.h*pt);(L.width!==g||L.height!==z)&&(L.width=g,L.height=z);let U=L.getContext("2d");U.setTransform(pt,0,0,pt,0,0),U.clearRect(0,0,it.w,it.h),U.fillStyle="#eeeee3",U.fillRect(0,0,it.w,it.h);let q=(ct,bt,Lt)=>{U.beginPath(),ct.forEach((Xt,me)=>{let[be,te]=it.to(Xt);me?U.lineTo(be,te):U.moveTo(be,te)}),U.closePath(),bt&&(U.fillStyle=bt,U.fill()),Lt&&(U.strokeStyle=Lt,U.lineWidth=1,U.stroke())};q(x.campus,"#d4d8cd","#b4c3b5"),q(x.field,"#e6d8ba"),q(x.restricted,"#ded5c1","#b5a68a"),U.beginPath(),x.track.forEach((ct,bt)=>{let[Lt,Xt]=it.to(ct);bt?U.lineTo(Lt,Xt):U.moveTo(Lt,Xt)}),U.closePath(),U.strokeStyle="#c09164",U.lineWidth=Math.max(1,it.scale*2),U.stroke(),U.beginPath();for(let[ct,bt]of x.ropeSegments)U.moveTo(...it.to(ct)),U.lineTo(...it.to(bt));U.strokeStyle="#d6ad23",U.lineWidth=tt?2:1.3,U.stroke(),U.setLineDash(tt?[3,3]:[2,2]),U.strokeStyle="#33312b",U.stroke(),U.setLineDash([]);for(let[ct,bt]of x.coneBars){let Lt=it.to(ct),Xt=it.to(bt);U.beginPath(),U.moveTo(...Lt),U.lineTo(...Xt),U.strokeStyle="#bb3b2c",U.lineWidth=tt?2.5:1.5,U.stroke()}for(let ct of x.buildings){let bt=it.to([ct.x-ct.w/2,ct.z-ct.d/2]);U.fillStyle=ct.gym?"#bfccb9":"#a6b5ad",U.fillRect(bt[0],bt[1],ct.w*it.scale,ct.d*it.scale),U.strokeStyle="#8fa397",U.lineWidth=.6,U.strokeRect(bt[0],bt[1],ct.w*it.scale,ct.d*it.scale),tt&&ct.w*it.scale>40&&(U.fillStyle="#4c6858",U.font="10px sans-serif",U.textAlign="center",U.fillText(ct.gym?"体育館":"校舎",bt[0]+ct.w*it.scale/2,bt[1]+ct.d*it.scale/2+3))}for(let ct of x.markers){let[bt,Lt]=it.to(ct.pos),Xt=tt?3.7:2.1;if(U.beginPath(),U.arc(bt,Lt,Xt,0,Math.PI*2),U.fillStyle=u[ct.category],U.fill(),tt&&(U.strokeStyle="#fcf9ee",U.lineWidth=.7,U.stroke(),ct.id.includes("-")&&ct.kind!=="performer")){U.font="9px sans-serif",U.textAlign="left",U.fillStyle="#3e584b";let me=bt+6,be=Lt+3;ct.pos[1]<-16&&ct.pos[0]>-10?(me=bt,be=Lt-10,U.save(),U.translate(me,be),U.rotate(-Math.PI/2.8),U.fillText(ct.id,0,0),U.restore()):ct.pos[0]<1&&ct.pos[1]>-16&&ct.pos[1]<10?(U.textAlign="right",U.fillText(ct.id,bt-6,Lt+3)):U.fillText(ct.id,me,be)}}b.path&&(U.beginPath(),b.path.forEach((ct,bt)=>{let[Lt,Xt]=it.to(ct);bt?U.lineTo(Lt,Xt):U.moveTo(Lt,Xt)}),U.strokeStyle="#af7b29",U.lineWidth=tt?2:1.5,U.setLineDash([4,2]),U.stroke(),U.setLineDash([]));let[K,Rt]=it.to(b.pos);if(U.save(),U.translate(K,Rt),U.rotate(b.yaw),U.fillStyle="#fff",U.beginPath(),U.arc(0,0,tt?7:5,0,Math.PI*2),U.fill(),U.fillStyle="#174f58",U.beginPath(),U.moveTo(0,tt?-10:-7),U.lineTo(tt?5:4,tt?6:4),U.lineTo(0,tt?3:1),U.lineTo(tt?-5:-4,tt?6:4),U.closePath(),U.fill(),U.restore(),U.fillStyle="#526b5d",U.textAlign="right",U.font=(tt?"10":"8")+"px sans-serif",tt){let[ct,bt]=it.to(o.GATE_MAIN.pos);U.textAlign="right",U.fillText("正門",ct-9,bt-9);let[Lt,Xt]=it.to(o.GATE_WEST.pos);U.textAlign="left",U.fillText("西ヶ谷門",Lt-10,Xt+15)}}let Qt=!1;function ee(){T&&(k(),Qe(),Tt(),Y=document.activeElement,i("mapModal").classList.remove("hidden"),Qt=!1,i("bigmap").classList.remove("hidden"),i("originalWrap").classList.add("hidden"),i("mapToggle").textContent="ブース番号入り配置図を見る",i("mapExplain").textContent="ブースの点を押すと内容を表示。歩ける場所を押すと、その場所へ直接移動します。",requestAnimationFrame(()=>mt(i("bigmap"),!0)),i("mapClose").focus())}function xe(){i("mapModal").classList.add("hidden")}function _e(L){return!L||!x.isWalkable(L[0],L[1],.32)?(ot("建物・走行路の中は選べません。歩ける場所を選択してください。"),!1):(k(),oe(),b.mode==="welcome"&&qt(),b.mode="walk",b.returnPos=null,b.pitch=0,ae(L),xe(),jt(),ot("選んだ場所へ移動しました"),!0)}function _n(L){let tt=i("bigmap").getBoundingClientRect(),it=L.clientX-tt.left,pt=L.clientY-tt.top,g=Ct(i("bigmap")),z=null,U=16;for(let K of x.markers){let Rt=g.to(K.pos),ct=Math.hypot(Rt[0]-it,Rt[1]-pt);ct<U&&(U=ct,z=K)}if(z){xe(),at(z.id);return}let q=g.from(it,pt);if(!x.isWalkable(...q,.32)){ot("建物・走行路の中は選べません。歩ける場所を選択してください。");return}_e(q)}function W(L){let tt=i("originalPlan"),it=tt.getBoundingClientRect();if(!tt.naturalWidth||!it.width||!it.height)return;let pt=(L.clientX-it.left)/it.width*660-35,g=(L.clientY-it.top)/it.height*870-35,z=x.p(pt,g),U=null,q=16;for(let K of x.markers){let Rt=it.left+(K.pos[0]/.22+320+35)/660*it.width,ct=it.top+(K.pos[1]/.22+290+35)/870*it.height,bt=Math.hypot(Rt-L.clientX,ct-L.clientY);bt<q&&(q=bt,U=K)}if(U){xe(),at(U.id);return}_e(z)}function ft(L,tt){let it=new Map,pt=!1;L.addEventListener("pointerdown",g=>{it.size?pt=!0:pt=!1,it.set(g.pointerId,[g.clientX,g.clientY])}),L.addEventListener("pointermove",g=>{let z=it.get(g.pointerId);z&&Math.hypot(g.clientX-z[0],g.clientY-z[1])>8&&(pt=!0)}),L.addEventListener("pointerup",g=>it.delete(g.pointerId)),L.addEventListener("pointercancel",g=>{it.delete(g.pointerId),pt=!0}),L.addEventListener("click",g=>{pt||tt(g)})}function Nt(){for(let L of x.markers){let tt=document.createElement("button");tt.className="world-label hidden",tt.style.setProperty("--accent",u[L.category]),tt.setAttribute("aria-label",L.name+" の内容を見る"),tt.innerHTML="<b>"+t(L.id.includes("-")?L.id:L.id==="WC"?"WC":"")+"</b><span>"+t(L.short)+"</span>",tt.onclick=it=>{it.stopPropagation(),at(L.id)},i("labels").appendChild(tt),wt.set(L.id,tt)}}function Ut(){let L=b.mode==="walk"&&!b.sheet&&i("mapModal").classList.contains("hidden");Ge.forEach((tt,it)=>{if(tt.classList.add("hidden"),!L)return;let{position:pt}=x.boardingGaps[it],g=I.camera.eye;if(Math.hypot(g[0]-pt[0],g[2]-pt[1])>18)return;let z=I.project([pt[0],1.88,pt[1]]);if(!z||z.z>1||z.x<0||z.x>innerWidth||z.y<0||z.y>innerHeight)return;let U=Math.hypot(g[0]-pt[0],g[2]-pt[1]),q=Math.max(.52,Math.min(1,5/Math.max(U,1))),K=(d?146:176)*q/2+8;tt.style.setProperty("--ride-scale",q),tt.style.left=Math.max(K,Math.min(innerWidth-K,z.x))+"px",tt.style.top=z.y+"px",tt.classList.remove("hidden")})}function Pt(){if(!T)return;let L=b.mode==="overview",tt=b.labels&&b.mode!=="welcome"&&!b.sheet&&i("mapModal").classList.contains("hidden"),it=[];for(let g of x.markers){let z=wt.get(g.id);if(z.classList.add("hidden"),!tt)continue;let U=Math.hypot(I.camera.eye[0]-g.marker[0],I.camera.eye[2]-g.marker[2]);if(!L&&U>24)continue;let q=I.project(g.marker);if(!(!q||q.z>1||q.x<35||q.x>innerWidth-35||q.y<112||q.y>innerHeight-90)){if(!L){let K=!1,Rt=I.camera.eye;for(let ct of x.buildings){if(ct.gym){let bt=Rt[0]>ct.x-ct.w/2&&Rt[0]<ct.x+ct.w/2&&Rt[2]>ct.z-ct.d/2&&Rt[2]<ct.z+ct.d/2,Lt=g.marker[0]>ct.x-ct.w/2&&g.marker[0]<ct.x+ct.w/2&&g.marker[2]>ct.z-ct.d/2&&g.marker[2]<ct.z+ct.d/2;bt!==Lt&&U>6&&(K=!0);continue}for(let bt=.1;bt<.96;bt+=.09){let Lt=Rt[0]+(g.marker[0]-Rt[0])*bt,Xt=Rt[2]+(g.marker[2]-Rt[2])*bt,me=Rt[1]+(g.marker[1]-Rt[1])*bt;if(Math.abs(Lt-ct.x)<ct.w/2&&Math.abs(Xt-ct.z)<ct.d/2&&me<ct.h){K=!0;break}}if(K)break}if(K)continue}it.push({r:g,el:z,pr:q,d:U})}}it.sort((g,z)=>g.d-z.d);let pt=[];for(let g of it){if(pt.length>=(L?20:d?4:7))break;let z=Math.min(d?160:220,45+g.r.short.length*10);pt.some(U=>Math.abs(U.pr.x-g.pr.x)<(U.width+z)/2+7&&Math.abs(U.pr.y-g.pr.y)<34)||(g.width=z,g.el.style.left=g.pr.x+"px",g.el.style.top=g.pr.y+"px",g.el.classList.remove("hidden"),pt.push(g))}}function Ft(){let L=r.exhibitorDescriptions?.かまにゃん;ne("かまにゃん","mascot"),i("sheetBody").innerHTML='<h3 class="detail-title">かまにゃん</h3><p class="detail-caption">鎌倉地域メディア「かまくらいふ」のキャラクターです。</p><div class="note-box">しらすの首輪に大仏のポシェットをつけています</div>'+(L?'<div class="detail-content">'+t(L)+"</div>":"")+G("かまにゃん")+'<p class="source-text">'+t(r.notice)+'</p><p class="source-text"><a href="https://kamakura-life.net/mascot/" target="_blank" rel="noopener noreferrer">かまくらいふの紹介ページ</a></p>'}function Yt(){let L=document.createElement("button");L.id="kamanyanLabel",L.className="world-label hidden",L.style.setProperty("--accent","#a97887"),L.setAttribute("aria-label","かまくらいふ かまにゃんの内容を見る"),L.innerHTML="<span>かまくらいふ　かまにゃん</span>",L.onclick=tt=>{tt.stopPropagation(),Ft()},i("labels").appendChild(L)}function Zt(){let L=i("kamanyanLabel");if(!L||(L.classList.add("hidden"),!b.labels||b.mode==="welcome"||b.mode==="ride"||b.sheet||!i("mapModal").classList.contains("hidden")))return;let tt=x.getKamanyan(),it=Math.hypot(I.camera.eye[0]-tt[0],I.camera.eye[2]-tt[2]);if(b.mode!=="overview"&&it>28)return;let pt=I.project(tt);!pt||pt.z>1||pt.x<80||pt.x>innerWidth-80||pt.y<110||pt.y>innerHeight-80||(L.style.left=pt.x+"px",L.style.top=pt.y+"px",L.classList.remove("hidden"))}function ce(){if(!T)return;let L=null,tt=4.8;if(b.mode==="walk")for(let U of x.markers){if(!U.approach)continue;let q=Math.hypot(b.pos[0]-U.approach[0],b.pos[1]-U.approach[1]);q<tt&&(tt=q,L=U)}b.nearest=L?.id||null;let it=L&&!b.sheet&&b.mode==="walk";i("nearby").classList.toggle("hidden",!it),it&&(i("nearCategory").textContent=L.id.includes("-")?L.id:L.id==="WC"?"WC":"案内",i("nearCategory").style.background=u[L.category],i("nearCaption").textContent=A(L),i("nearName").textContent=L.short);let[pt,g]=b.pos,z=pt>33&&pt<57.5&&g>2.6&&g<47?"体育館":g>48?"正門・キッチンカーエリア":g<-25?"モビリティー・であいの広場":pt<-13?"アウトドアーエリア":"校庭・にぎわいゾーン";i("locationText").textContent=b.mode==="overview"?"会場全体":b.mode==="ride"?"トゥクトゥクに乗車中":z}let ie=new Map,Re=0;i("scene").addEventListener("pointerdown",L=>{if(!(!T||b.sheet||b.mode==="welcome")){if(ie.set(L.pointerId,[L.clientX,L.clientY]),ie.size===2){J.multi=!0;let tt=[...ie.values()];Re=Math.hypot(tt[0][0]-tt[1][0],tt[0][1]-tt[1][1])}J.active=!0,J.pid=L.pointerId,J.x=L.clientX,J.y=L.clientY,J.moved=0,J.multi=ie.size>1,i("scene").setPointerCapture(L.pointerId)}}),i("scene").addEventListener("pointermove",L=>{if(!ie.has(L.pointerId))return;if(ie.set(L.pointerId,[L.clientX,L.clientY]),ie.size===2&&b.mode==="overview"){let pt=[...ie.values()],g=Math.hypot(pt[0][0]-pt[1][0],pt[0][1]-pt[1][1]);b.orbitDist=FestaGL.clamp(b.orbitDist*Re/Math.max(1,g),25,190),Re=g;return}if(!J.active||J.pid!==L.pointerId)return;let tt=L.clientX-J.x,it=L.clientY-J.y;if(J.x=L.clientX,J.y=L.clientY,J.moved+=Math.abs(tt)+Math.abs(it),b.tour&&!b.tour.paused){if(J.moved<=8)return;k()}b.mode==="overview"?(b.orbitYaw-=tt*.004,b.orbitPitch=FestaGL.clamp(b.orbitPitch+it*.003,.18,1.48)):(b.mode==="ride"?b.rideYaw+=tt*.004:b.yaw-=tt*.004,b.pitch=FestaGL.clamp(b.pitch+it*.0035,-1.15,1.15))});function ke(L){let tt=L.type==="pointerup"&&J.pid===L.pointerId&&ie.size===1&&!J.multi&&J.moved<=8;if(ie.delete(L.pointerId),J.pid===L.pointerId&&(J.active=!1),!tt||b.mode==="welcome")return;let it=i("scene").getBoundingClientRect(),pt=L.clientX-it.left,g=L.clientY-it.top,{signs:z,base:U,details:q,roof:K}=x.meshes,Rt=I.signFace(pt,g,z,[U,q,K]),ct=Rt==null?null:x.selectableSigns.find(({first:bt,last:Lt})=>Rt>=bt&&Rt<Lt);if(ct){at(ct.id);return}if(b.mode==="overview"){let bt=I.groundPoint(pt,g);bt&&_e([bt[0],bt[2]])}}i("scene").addEventListener("pointerup",ke),i("scene").addEventListener("pointercancel",ke),i("scene").addEventListener("contextmenu",L=>L.preventDefault()),i("scene").addEventListener("wheel",L=>{b.mode==="overview"&&(L.preventDefault(),b.orbitDist=FestaGL.clamp(b.orbitDist*Math.exp(L.deltaY*.001),25,190))},{passive:!1}),i("joystick").addEventListener("pointerdown",L=>{L.preventDefault(),k(),X.pid=L.pointerId,X.active=!0,i("joystick").setPointerCapture(L.pointerId),dn(L),b.auto&&(b.auto=!1,jt())}),i("joystick").addEventListener("pointermove",L=>{X.pid===L.pointerId&&dn(L)});function dn(L){let tt=i("joystick").getBoundingClientRect(),it=L.clientX-(tt.left+tt.width/2),pt=L.clientY-(tt.top+tt.height/2),g=Math.hypot(it,pt),z=37;g>z&&(it*=z/g,pt*=z/g),X.x=it/z,X.y=-pt/z,i("joyKnob").style.transform="translate("+it+"px,"+pt+"px)"}function Ae(){X.x=X.y=0,X.active=!1,X.pid=null,i("joyKnob").style.transform=""}i("joystick").addEventListener("pointerup",Ae),i("joystick").addEventListener("pointercancel",Ae);function Qe(){for(let L in $)$[L]=!1;Ae()}window.addEventListener("blur",Qe),document.addEventListener("visibilitychange",()=>{Qe(),F=0}),document.addEventListener("keydown",L=>{if(!T)return;let tt=/INPUT|SELECT|TEXTAREA/.test(document.activeElement?.tagName);if(L.code==="Escape"){L.preventDefault(),i("mapModal").classList.contains("hidden")?b.sheet?Tt():b.tour&&!b.tour.paused?k():zt()||He():xe();return}if(L.code==="Tab"&&(b.sheet||!i("mapModal").classList.contains("hidden"))){let it=b.sheet?i("sheet"):i("mapModal"),pt=[...it.querySelectorAll("button,a,input,select")].filter(g=>!g.closest(".hidden")&&!g.disabled);if(pt.length){let g=pt[0],z=pt[pt.length-1];L.shiftKey&&document.activeElement===g?(z.focus(),L.preventDefault()):!L.shiftKey&&document.activeElement===z&&(g.focus(),L.preventDefault())}return}tt||b.sheet||!i("mapModal").classList.contains("hidden")||(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight"].includes(L.code)&&(L.preventDefault(),k(),$[L.code]=!0,b.auto&&(b.auto=!1,jt())),!L.repeat&&(L.code==="KeyE"&&b.nearest&&at(b.nearest),L.code==="KeyV"&&yt(),L.code==="KeyM"&&ee(),L.code==="KeyF"&&le()))}),document.addEventListener("keyup",L=>$[L.code]=!1);function Ze(L){if(!T||b.paused)return;let tt=b.tour;if(x.update(y,L,St()?tt.paused.carDistance:void 0),tt&&!tt.paused)Gt(L);else if(b.mode==="walk"&&!b.sheet&&i("mapModal").classList.contains("hidden")){let g=($.KeyW||$.ArrowUp?1:0)-($.KeyS||$.ArrowDown?1:0)+X.y,z=($.KeyD||$.ArrowRight?1:0)-($.KeyA||$.ArrowLeft?1:0)+X.x,U=Math.hypot(g,z);if(U>.03){U>1&&(g/=U,z/=U);let K=$.KeyW||$.ArrowUp||$.KeyS||$.ArrowDown||$.KeyD||$.ArrowRight||$.KeyA||$.ArrowLeft?b.runMode||$.ShiftLeft||$.ShiftRight?4.6:3:2.3+2.3*Math.min(U,1);qe((Math.sin(b.yaw)*g+Math.cos(b.yaw)*z)*K*L,(-Math.cos(b.yaw)*g+Math.sin(b.yaw)*z)*K*L)}else pe(L)}let it,pt;if(b.mode==="overview"){let g=b.orbitTarget,z=b.orbitDist,U=Math.cos(b.orbitPitch);it=[g[0]+Math.sin(b.orbitYaw)*z*U,Math.sin(b.orbitPitch)*z,g[2]+Math.cos(b.orbitYaw)*z*U],pt=[...g]}else if(b.mode==="welcome"){let g=C?0:Math.sin(y*.085)*.8;it=[2.2+g,2.2,11.5],pt=[15+g,2,-13]}else if(b.mode==="ride"){let g=x.getCar(),z=-.23;it=[g.x+Math.sin(g.yaw)*z,1.68,g.z+Math.cos(g.yaw)*z];let U=g.yaw+b.rideYaw;pt=[it[0]+Math.sin(U)*Math.cos(b.pitch),it[1]+Math.sin(b.pitch),it[2]+Math.cos(U)*Math.cos(b.pitch)],b.pos=[g.x,g.z]}else{let z=(Math.abs(X.x)+Math.abs(X.y)||$.KeyW||$.KeyA||$.KeyS||$.KeyD||b.auto||tt&&!tt.paused&&tt.step.kind==="walk")&&!C?Math.sin(b.distanceWalked*8)*.017:0;it=[b.pos[0],1.68+x.walkHeight(b.pos[0],b.pos[1])+z,b.pos[1]],pt=[it[0]+Math.sin(b.yaw)*Math.cos(b.pitch),it[1]+Math.sin(b.pitch),it[2]-Math.cos(b.yaw)*Math.cos(b.pitch)]}I.camera.near=b.mode==="overview"?1:.09,I.camera.eye=it,I.camera.target=pt}function Yn(L){b.paused||(y+=L),Ze(L)}function kn(L){if(!T)return;if(b.testFreeze){requestAnimationFrame(kn);return}let tt=F?Math.min(.12,(L-F)/1e3):.016;F=L,document.hidden||(Yn(tt),I.render(y),Ut(),N+=tt,N>.13&&(N=0,Pt(),Zt(),ce(),mt(i("minimap")),!i("mapModal").classList.contains("hidden")&&!Qt&&mt(i("bigmap"),!0))),requestAnimationFrame(kn)}Ge.forEach((L,tt)=>L.onclick=it=>{it.stopPropagation(),j(x.boardingGaps[tt])}),i("homeBtn").onclick=Ee,i("startBtn").onclick=()=>Z("field"),i("welcomeTour").onclick=De,i("tourBtn").onclick=De,i("startMain").onclick=()=>Z("GATE_MAIN"),i("startWest").onclick=()=>Z("GATE_WEST"),i("welcomeOverview").onclick=yt,i("searchBtn").onclick=le,i("overviewBtn").onclick=yt,i("settingsBtn").onclick=ht,i("helpBtn").onclick=Bt,i("sheetClose").onclick=Tt,i("sheetScrim").onclick=Tt,i("sheetBack").onclick=le,i("nearOpen").onclick=()=>b.nearest&&at(b.nearest),i("mapBtn").onclick=ee,i("mapClose").onclick=xe,ft(i("bigmap"),_n),ft(i("originalPlan"),W),i("speedToggle").onclick=()=>{b.runMode=!b.runMode,jt()},i("modeExit").onclick=He,i("modeAction").onclick=()=>{zt()?De():b.mode==="overview"||b.mode==="ride"?He():b.path&&(b.auto=!b.auto,jt())},i("mapToggle").onclick=()=>{Qt=!Qt,i("bigmap").classList.toggle("hidden",Qt),i("originalWrap").classList.toggle("hidden",!Qt),i("mapToggle").textContent=Qt?"会場マップに戻る":"ブース番号入り配置図を見る",i("mapExplain").textContent=Qt?"ブース番号を押すと内容を表示。歩ける場所を押すと、その場所へ直接移動します。":"ブースの点を押すと内容を表示。歩ける場所を押すと、その場所へ直接移動します。",Qt||mt(i("bigmap"),!0)},i("mapModal").onclick=L=>{L.target===i("mapModal")&&xe()},i("originalPlan").src="./assets/venue-map.svg?v=20261121.2",window.addEventListener("resize",()=>{I&&I.resize(),x&&(mt(i("minimap")),i("mapModal").classList.contains("hidden")||mt(i("bigmap"),!0))});try{await v(),I=new FestaGL.Renderer(i("scene"),b.quality),x=await buildFestaWorld(I,nt),await v(),R=new FestaNavigation(x),Nt(),Yt(),nt(1,"会場の準備ができました"),T=!0,window.__FESTA_TEST__={ready:!0,renderer:I,world:x,nav:R,state:b,byId:o,start:Z,teleport:Ke,routeTo:ve,showDetail:at,showSearch:le,showSettings:ht,showHelp:Bt,showMap:ee,toOverview:yt,ride:j,exitMode:He,tick:Ze,advance:Yn,move:qe,stopRoute:oe,closeSheet:Tt,get animTime(){return y},render:()=>{Ze(.016),I.render(y),Ut(),Pt(),Zt(),ce(),mt(i("minimap"))}},Ze(.016),I.render(0),i("loading").classList.add("hidden"),i("hud").classList.remove("hidden"),i("welcome").classList.remove("hidden"),requestAnimationFrame(kn),i("scene").addEventListener("webglcontextlost",L=>{L.preventDefault(),b.paused=!0,ot("描画が停止しました。ページを再読み込みすると再開できます。",3e4)})}catch(L){console.error(L),i("loading").innerHTML='<div class="loading-inner"><span class="eyebrow">3D表示を開始できませんでした</span><h1 style="font-size:26px">ブース情報は読めます。</h1><p>'+t(L.message)+'</p><p>WebGL 2対応のChrome・Edge・Safariで、このHTMLをブラウザとして開くと3D表示を利用できます。端末のグラフィックアクセラレーション設定も影響します。</p><button id="fallbackList" class="primary">参加団体一覧を読む</button><button id="fallbackPlan" class="secondary" style="margin-top:10px">配置図を見る</button></div>',i("fallbackList").onclick=()=>{le(),i("sheet").style.zIndex=110,i("sheetScrim").style.zIndex=109},i("fallbackPlan").onclick=()=>{let tt=window.open();if(tt){tt.document.title="会場配置図";let it=tt.document.createElement("img");it.src="./assets/venue-map.svg",it.style.maxWidth="100%",tt.document.body.appendChild(it)}},window.__FESTA_TEST__={ready:!1,error:L.message}}})();})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
