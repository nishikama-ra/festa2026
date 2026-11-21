(()=>{var tu=0,cc=1,eu=2;var ms=1,nu=2,er=3,es=0,kn=1,Qn=2,wi=0,nr=1,hc=2,uc=3,dc=4,iu=5;var gs=100,su=101,ru=102,au=103,ou=104,lu=200,cu=201,hu=202,uu=203,fc=204,pc=205,du=206,fu=207,pu=208,mu=209,gu=210,xu=211,_u=212,yu=213,vu=214,Va=0,Ga=1,Ha=2,Hs=3,Wa=4,Xa=5,qa=6,Ya=7,mc=0,Mu=1,bu=2,di=0,gc=1,xc=2,_c=3,jr=4,yc=5,vc=6,Mc=7;var bc=300,ns=301,xs=302,xo=303,_o=304,Qr=306,Ws=1e3,yi=1001,Za=1002,wn=1003,Su=1004;var ta=1005;var yn=1006,yo=1007;var Ti=1008;var Xn=1009,Sc=1010,wc=1011,ir=1012,vo=1013,fi=1014,ni=1015,pi=1016,Mo=1017,bo=1018,sr=1020,Tc=35902,Ec=35899,Ac=1021,Cc=1022,ii=1023,vi=1026,is=1027,So=1028,wo=1029,ss=1030,To=1031;var Eo=1033,ea=33776,na=33777,ia=33778,sa=33779,Ao=35840,Co=35841,Ro=35842,Io=35843,Po=36196,Lo=37492,Do=37496,No=37488,Uo=37489,ra=37490,Fo=37491,Oo=37808,Bo=37809,ko=37810,zo=37811,Vo=37812,Go=37813,Ho=37814,Wo=37815,Xo=37816,qo=37817,Yo=37818,Zo=37819,Jo=37820,$o=37821,Ko=36492,jo=36494,Qo=36495,tl=36283,el=36284,aa=36285,nl=36286;var Ar=2300,Ja=2301,ka=2302,ec=2303,nc=2400,ic=2401,sc=2402;var wu=3200,Rc=3201;var il=0,Tu=1,ki="",Cn="srgb",Cr="srgb-linear",Rr="linear",rn="srgb";var za=7680;var Eu=519,Au=512,Cu=513,Ru=514,sl=515,Iu=516,Pu=517,rl=518,Lu=519,Ic=35044,al=35048;var oa="300 es",ui=2e3,Xs=2001;function nf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function sf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ir(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Du(){let i=Ir("canvas");return i.style.display="block",i}var Rh={},qs=null;function Pr(...i){let t="THREE."+i.shift();qs?qs("log",t,...i):console.log(t,...i)}function Nu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Se(...i){i=Nu(i);let t="THREE."+i.shift();if(qs)qs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function be(...i){i=Nu(i);let t="THREE."+i.shift();if(qs)qs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ds(...i){let t=i.join(" ");t in Rh||(Rh[t]=!0,Se(...i))}function Uu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Fu={[Va]:Ga,[Ha]:qa,[Wa]:Ya,[Hs]:Xa,[Ga]:Va,[qa]:Ha,[Ya]:Wa,[Xa]:Hs},Mi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,l=s.length;r<l;r++)s[r].call(this,t);t.target=null}}},Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ll=Math.PI/180,$a=180/Math.PI;function Zi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pn[i&255]+Pn[i>>8&255]+Pn[i>>16&255]+Pn[i>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[e&63|128]+Pn[e>>8&255]+"-"+Pn[e>>16&255]+Pn[e>>24&255]+Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]).toLowerCase()}function We(i,t,e){return Math.max(t,Math.min(e,i))}function rf(i,t){return(i%t+t)%t}function Dl(i,t,e){return(1-e)*i+e*t}function _i(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ln(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Uc=class Uc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=We(this.x,t.x,e.x),this.y=We(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=We(this.x,t,e),this.y=We(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,l=this.y-t.y;return this.x=r*n-l*s+t.x,this.y=r*s+l*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Uc.prototype.isVector2=!0;var ke=Uc,bi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,l,o){let u=n[s+0],h=n[s+1],p=n[s+2],v=n[s+3],m=r[l+0],T=r[l+1],M=r[l+2],P=r[l+3];if(v!==P||u!==m||h!==T||p!==M){let A=u*m+h*T+p*M+v*P;A<0&&(m=-m,T=-T,M=-M,P=-P,A=-A);let d=1-o;if(A<.9995){let C=Math.acos(A),I=Math.sin(C);d=Math.sin(d*C)/I,o=Math.sin(o*C)/I,u=u*d+m*o,h=h*d+T*o,p=p*d+M*o,v=v*d+P*o}else{u=u*d+m*o,h=h*d+T*o,p=p*d+M*o,v=v*d+P*o;let C=1/Math.sqrt(u*u+h*h+p*p+v*v);u*=C,h*=C,p*=C,v*=C}}t[e]=u,t[e+1]=h,t[e+2]=p,t[e+3]=v}static multiplyQuaternionsFlat(t,e,n,s,r,l){let o=n[s],u=n[s+1],h=n[s+2],p=n[s+3],v=r[l],m=r[l+1],T=r[l+2],M=r[l+3];return t[e]=o*M+p*v+u*T-h*m,t[e+1]=u*M+p*m+h*v-o*T,t[e+2]=h*M+p*T+o*m-u*v,t[e+3]=p*M-o*v-u*m-h*T,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,l=t._order,o=Math.cos,u=Math.sin,h=o(n/2),p=o(s/2),v=o(r/2),m=u(n/2),T=u(s/2),M=u(r/2);switch(l){case"XYZ":this._x=m*p*v+h*T*M,this._y=h*T*v-m*p*M,this._z=h*p*M+m*T*v,this._w=h*p*v-m*T*M;break;case"YXZ":this._x=m*p*v+h*T*M,this._y=h*T*v-m*p*M,this._z=h*p*M-m*T*v,this._w=h*p*v+m*T*M;break;case"ZXY":this._x=m*p*v-h*T*M,this._y=h*T*v+m*p*M,this._z=h*p*M+m*T*v,this._w=h*p*v-m*T*M;break;case"ZYX":this._x=m*p*v-h*T*M,this._y=h*T*v+m*p*M,this._z=h*p*M-m*T*v,this._w=h*p*v+m*T*M;break;case"YZX":this._x=m*p*v+h*T*M,this._y=h*T*v+m*p*M,this._z=h*p*M-m*T*v,this._w=h*p*v-m*T*M;break;case"XZY":this._x=m*p*v-h*T*M,this._y=h*T*v-m*p*M,this._z=h*p*M+m*T*v,this._w=h*p*v+m*T*M;break;default:Se("Quaternion: .setFromEuler() encountered an unknown order: "+l)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],l=e[1],o=e[5],u=e[9],h=e[2],p=e[6],v=e[10],m=n+o+v;if(m>0){let T=.5/Math.sqrt(m+1);this._w=.25/T,this._x=(p-u)*T,this._y=(r-h)*T,this._z=(l-s)*T}else if(n>o&&n>v){let T=2*Math.sqrt(1+n-o-v);this._w=(p-u)/T,this._x=.25*T,this._y=(s+l)/T,this._z=(r+h)/T}else if(o>v){let T=2*Math.sqrt(1+o-n-v);this._w=(r-h)/T,this._x=(s+l)/T,this._y=.25*T,this._z=(u+p)/T}else{let T=2*Math.sqrt(1+v-n-o);this._w=(l-s)/T,this._x=(r+h)/T,this._y=(u+p)/T,this._z=.25*T}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,l=t._w,o=e._x,u=e._y,h=e._z,p=e._w;return this._x=n*p+l*o+s*h-r*u,this._y=s*p+l*u+r*o-n*h,this._z=r*p+l*h+n*u-s*o,this._w=l*p-n*o-s*u-r*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,l=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,l=-l,o=-o);let u=1-e;if(o<.9995){let h=Math.acos(o),p=Math.sin(h);u=Math.sin(u*h)/p,e=Math.sin(e*h)/p,this._x=this._x*u+n*e,this._y=this._y*u+s*e,this._z=this._z*u+r*e,this._w=this._w*u+l*e,this._onChangeCallback()}else this._x=this._x*u+n*e,this._y=this._y*u+s*e,this._z=this._z*u+r*e,this._w=this._w*u+l*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Fc=class Fc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ih.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ih.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,l=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*l,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*l,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*l,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,l=t.y,o=t.z,u=t.w,h=2*(l*s-o*n),p=2*(o*e-r*s),v=2*(r*n-l*e);return this.x=e+u*h+l*v-o*p,this.y=n+u*p+o*h-r*v,this.z=s+u*v+r*p-l*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=We(this.x,t.x,e.x),this.y=We(this.y,t.y,e.y),this.z=We(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=We(this.x,t,e),this.y=We(this.y,t,e),this.z=We(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,l=e.x,o=e.y,u=e.z;return this.x=s*u-r*o,this.y=r*l-n*u,this.z=n*o-s*l,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Nl.copy(this).projectOnVector(t),this.sub(Nl)}reflect(t){return this.sub(Nl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Fc.prototype.isVector3=!0;var at=Fc,Nl=new at,Ih=new bi,Oc=class Oc{constructor(t,e,n,s,r,l,o,u,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,l,o,u,h)}set(t,e,n,s,r,l,o,u,h){let p=this.elements;return p[0]=t,p[1]=s,p[2]=o,p[3]=e,p[4]=r,p[5]=u,p[6]=n,p[7]=l,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,l=n[0],o=n[3],u=n[6],h=n[1],p=n[4],v=n[7],m=n[2],T=n[5],M=n[8],P=s[0],A=s[3],d=s[6],C=s[1],I=s[4],x=s[7],R=s[2],E=s[5],U=s[8];return r[0]=l*P+o*C+u*R,r[3]=l*A+o*I+u*E,r[6]=l*d+o*x+u*U,r[1]=h*P+p*C+v*R,r[4]=h*A+p*I+v*E,r[7]=h*d+p*x+v*U,r[2]=m*P+T*C+M*R,r[5]=m*A+T*I+M*E,r[8]=m*d+T*x+M*U,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],l=t[4],o=t[5],u=t[6],h=t[7],p=t[8];return e*l*p-e*o*h-n*r*p+n*o*u+s*r*h-s*l*u}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],l=t[4],o=t[5],u=t[6],h=t[7],p=t[8],v=p*l-o*h,m=o*u-p*r,T=h*r-l*u,M=e*v+n*m+s*T;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);let P=1/M;return t[0]=v*P,t[1]=(s*h-p*n)*P,t[2]=(o*n-s*l)*P,t[3]=m*P,t[4]=(p*e-s*u)*P,t[5]=(s*r-o*e)*P,t[6]=T*P,t[7]=(n*u-h*e)*P,t[8]=(l*e-n*r)*P,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,l,o){let u=Math.cos(r),h=Math.sin(r);return this.set(n*u,n*h,-n*(u*l+h*o)+l+t,-s*h,s*u,-s*(-h*l+u*o)+o+e,0,0,1),this}scale(t,e){return ds("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ul.makeScale(t,e)),this}rotate(t){return ds("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ul.makeRotation(-t)),this}translate(t,e){return ds("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ul.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Oc.prototype.isMatrix3=!0;var Re=Oc,Ul=new Re,Ph=new Re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lh=new Re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function af(){let i={enabled:!0,workingColorSpace:Cr,spaces:{},convert:function(s,r,l){return this.enabled===!1||r===l||!r||!l||(this.spaces[r].transfer===rn&&(s.r=Oi(s.r),s.g=Oi(s.g),s.b=Oi(s.b)),this.spaces[r].primaries!==this.spaces[l].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===rn&&(s.r=Gs(s.r),s.g=Gs(s.g),s.b=Gs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ki?Rr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,l){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ds("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ds("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Cr]:{primaries:t,whitePoint:n,transfer:Rr,toXYZ:Ph,fromXYZ:Lh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:t,whitePoint:n,transfer:rn,toXYZ:Ph,fromXYZ:Lh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}}),i}var He=af();function Oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Cs,Ka=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Cs===void 0&&(Cs=Ir("canvas")),Cs.width=t.width,Cs.height=t.height;let s=Cs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Cs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ir("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let l=0;l<r.length;l++)r[l]=Oi(r[l]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Oi(e[n]/255)*255):e[n]=Oi(e[n]);return{data:e,width:t.width,height:t.height}}else return Se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},of=0,Ys=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=Zi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let l=0,o=s.length;l<o;l++)s[l].isDataTexture?r.push(Fl(s[l].image)):r.push(Fl(s[l]))}else r=Fl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Fl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ka.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Se("Texture: Unable to serialize Texture."),{})}var lf=0,Ol=new at,Hn=class i extends Mi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=yi,s=yi,r=yn,l=Ti,o=ii,u=Xn,h=i.DEFAULT_ANISOTROPY,p=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=Zi(),this.name="",this.source=new Ys(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=l,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=u,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ol).x}get height(){return this.source.getSize(Ol).y}get depth(){return this.source.getSize(Ol).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Se(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Se(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ws:t.x=t.x-Math.floor(t.x);break;case yi:t.x=t.x<0?0:1;break;case Za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ws:t.y=t.y-Math.floor(t.y);break;case yi:t.y=t.y<0?0:1;break;case Za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=bc;Hn.DEFAULT_ANISOTROPY=1;var Bc=class Bc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,l=t.elements;return this.x=l[0]*e+l[4]*n+l[8]*s+l[12]*r,this.y=l[1]*e+l[5]*n+l[9]*s+l[13]*r,this.z=l[2]*e+l[6]*n+l[10]*s+l[14]*r,this.w=l[3]*e+l[7]*n+l[11]*s+l[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,u=t.elements,h=u[0],p=u[4],v=u[8],m=u[1],T=u[5],M=u[9],P=u[2],A=u[6],d=u[10];if(Math.abs(p-m)<.01&&Math.abs(v-P)<.01&&Math.abs(M-A)<.01){if(Math.abs(p+m)<.1&&Math.abs(v+P)<.1&&Math.abs(M+A)<.1&&Math.abs(h+T+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let I=(h+1)/2,x=(T+1)/2,R=(d+1)/2,E=(p+m)/4,U=(v+P)/4,_=(M+A)/4;return I>x&&I>R?I<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(I),s=E/n,r=U/n):x>R?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=E/s,r=_/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=U/r,s=_/r),this.set(n,s,r,e),this}let C=Math.sqrt((A-M)*(A-M)+(v-P)*(v-P)+(m-p)*(m-p));return Math.abs(C)<.001&&(C=1),this.x=(A-M)/C,this.y=(v-P)/C,this.z=(m-p)/C,this.w=Math.acos((h+T+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=We(this.x,t.x,e.x),this.y=We(this.y,t.y,e.y),this.z=We(this.z,t.z,e.z),this.w=We(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=We(this.x,t,e),this.y=We(this.y,t,e),this.z=We(this.z,t,e),this.w=We(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Bc.prototype.isVector4=!0;var un=Bc,ja=class extends Mi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new un(0,0,t,e),this.scissorTest=!1,this.viewport=new un(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Hn(s),l=n.count;for(let o=0;o<l;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ys(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wn=class extends ja{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},fs=class extends Hn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qa=class extends Hn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var go=class go{constructor(t,e,n,s,r,l,o,u,h,p,v,m,T,M,P,A){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,l,o,u,h,p,v,m,T,M,P,A)}set(t,e,n,s,r,l,o,u,h,p,v,m,T,M,P,A){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=l,d[9]=o,d[13]=u,d[2]=h,d[6]=p,d[10]=v,d[14]=m,d[3]=T,d[7]=M,d[11]=P,d[15]=A,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new go().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Rs.setFromMatrixColumn(t,0).length(),r=1/Rs.setFromMatrixColumn(t,1).length(),l=1/Rs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*l,e[9]=n[9]*l,e[10]=n[10]*l,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,l=Math.cos(n),o=Math.sin(n),u=Math.cos(s),h=Math.sin(s),p=Math.cos(r),v=Math.sin(r);if(t.order==="XYZ"){let m=l*p,T=l*v,M=o*p,P=o*v;e[0]=u*p,e[4]=-u*v,e[8]=h,e[1]=T+M*h,e[5]=m-P*h,e[9]=-o*u,e[2]=P-m*h,e[6]=M+T*h,e[10]=l*u}else if(t.order==="YXZ"){let m=u*p,T=u*v,M=h*p,P=h*v;e[0]=m+P*o,e[4]=M*o-T,e[8]=l*h,e[1]=l*v,e[5]=l*p,e[9]=-o,e[2]=T*o-M,e[6]=P+m*o,e[10]=l*u}else if(t.order==="ZXY"){let m=u*p,T=u*v,M=h*p,P=h*v;e[0]=m-P*o,e[4]=-l*v,e[8]=M+T*o,e[1]=T+M*o,e[5]=l*p,e[9]=P-m*o,e[2]=-l*h,e[6]=o,e[10]=l*u}else if(t.order==="ZYX"){let m=l*p,T=l*v,M=o*p,P=o*v;e[0]=u*p,e[4]=M*h-T,e[8]=m*h+P,e[1]=u*v,e[5]=P*h+m,e[9]=T*h-M,e[2]=-h,e[6]=o*u,e[10]=l*u}else if(t.order==="YZX"){let m=l*u,T=l*h,M=o*u,P=o*h;e[0]=u*p,e[4]=P-m*v,e[8]=M*v+T,e[1]=v,e[5]=l*p,e[9]=-o*p,e[2]=-h*p,e[6]=T*v+M,e[10]=m-P*v}else if(t.order==="XZY"){let m=l*u,T=l*h,M=o*u,P=o*h;e[0]=u*p,e[4]=-v,e[8]=h*p,e[1]=m*v+P,e[5]=l*p,e[9]=T*v-M,e[2]=M*v-T,e[6]=o*p,e[10]=P*v+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cf,t,hf)}lookAt(t,e,n){let s=this.elements;return Yn.subVectors(t,e),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),Gi.crossVectors(n,Yn),Gi.lengthSq()===0&&(Math.abs(n.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),Gi.crossVectors(n,Yn)),Gi.normalize(),ya.crossVectors(Yn,Gi),s[0]=Gi.x,s[4]=ya.x,s[8]=Yn.x,s[1]=Gi.y,s[5]=ya.y,s[9]=Yn.y,s[2]=Gi.z,s[6]=ya.z,s[10]=Yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,l=n[0],o=n[4],u=n[8],h=n[12],p=n[1],v=n[5],m=n[9],T=n[13],M=n[2],P=n[6],A=n[10],d=n[14],C=n[3],I=n[7],x=n[11],R=n[15],E=s[0],U=s[4],_=s[8],N=s[12],H=s[1],Y=s[5],b=s[9],J=s[13],X=s[2],Z=s[6],lt=s[10],ht=s[14],Mt=s[3],$=s[7],y=s[11],bt=s[15];return r[0]=l*E+o*H+u*X+h*Mt,r[4]=l*U+o*Y+u*Z+h*$,r[8]=l*_+o*b+u*lt+h*y,r[12]=l*N+o*J+u*ht+h*bt,r[1]=p*E+v*H+m*X+T*Mt,r[5]=p*U+v*Y+m*Z+T*$,r[9]=p*_+v*b+m*lt+T*y,r[13]=p*N+v*J+m*ht+T*bt,r[2]=M*E+P*H+A*X+d*Mt,r[6]=M*U+P*Y+A*Z+d*$,r[10]=M*_+P*b+A*lt+d*y,r[14]=M*N+P*J+A*ht+d*bt,r[3]=C*E+I*H+x*X+R*Mt,r[7]=C*U+I*Y+x*Z+R*$,r[11]=C*_+I*b+x*lt+R*y,r[15]=C*N+I*J+x*ht+R*bt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],l=t[1],o=t[5],u=t[9],h=t[13],p=t[2],v=t[6],m=t[10],T=t[14],M=t[3],P=t[7],A=t[11],d=t[15],C=u*T-h*m,I=o*T-h*v,x=o*m-u*v,R=l*T-h*p,E=l*m-u*p,U=l*v-o*p;return e*(P*C-A*I+d*x)-n*(M*C-A*R+d*E)+s*(M*I-P*R+d*U)-r*(M*x-P*E+A*U)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],l=t[5],o=t[9],u=t[2],h=t[6],p=t[10];return e*(l*p-o*h)-n*(r*p-o*u)+s*(r*h-l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],l=t[4],o=t[5],u=t[6],h=t[7],p=t[8],v=t[9],m=t[10],T=t[11],M=t[12],P=t[13],A=t[14],d=t[15],C=e*o-n*l,I=e*u-s*l,x=e*h-r*l,R=n*u-s*o,E=n*h-r*o,U=s*h-r*u,_=p*P-v*M,N=p*A-m*M,H=p*d-T*M,Y=v*A-m*P,b=v*d-T*P,J=m*d-T*A,X=C*J-I*b+x*Y+R*H-E*N+U*_;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Z=1/X;return t[0]=(o*J-u*b+h*Y)*Z,t[1]=(s*b-n*J-r*Y)*Z,t[2]=(P*U-A*E+d*R)*Z,t[3]=(m*E-v*U-T*R)*Z,t[4]=(u*H-l*J-h*N)*Z,t[5]=(e*J-s*H+r*N)*Z,t[6]=(A*x-M*U-d*I)*Z,t[7]=(p*U-m*x+T*I)*Z,t[8]=(l*b-o*H+h*_)*Z,t[9]=(n*H-e*b-r*_)*Z,t[10]=(M*E-P*x+d*C)*Z,t[11]=(v*x-p*E-T*C)*Z,t[12]=(o*N-l*Y-u*_)*Z,t[13]=(e*Y-n*N+s*_)*Z,t[14]=(P*I-M*R-A*C)*Z,t[15]=(p*R-v*I+m*C)*Z,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,l=t.x,o=t.y,u=t.z,h=r*l,p=r*o;return this.set(h*l+n,h*o-s*u,h*u+s*o,0,h*o+s*u,p*o+n,p*u-s*l,0,h*u-s*o,p*u+s*l,r*u*u+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,l){return this.set(1,n,r,0,t,1,l,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,l=e._y,o=e._z,u=e._w,h=r+r,p=l+l,v=o+o,m=r*h,T=r*p,M=r*v,P=l*p,A=l*v,d=o*v,C=u*h,I=u*p,x=u*v,R=n.x,E=n.y,U=n.z;return s[0]=(1-(P+d))*R,s[1]=(T+x)*R,s[2]=(M-I)*R,s[3]=0,s[4]=(T-x)*E,s[5]=(1-(m+d))*E,s[6]=(A+C)*E,s[7]=0,s[8]=(M+I)*U,s[9]=(A-C)*U,s[10]=(1-(m+P))*U,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let l=Rs.set(s[0],s[1],s[2]).length(),o=Rs.set(s[4],s[5],s[6]).length(),u=Rs.set(s[8],s[9],s[10]).length();r<0&&(l=-l),li.copy(this);let h=1/l,p=1/o,v=1/u;return li.elements[0]*=h,li.elements[1]*=h,li.elements[2]*=h,li.elements[4]*=p,li.elements[5]*=p,li.elements[6]*=p,li.elements[8]*=v,li.elements[9]*=v,li.elements[10]*=v,e.setFromRotationMatrix(li),n.x=l,n.y=o,n.z=u,this}makePerspective(t,e,n,s,r,l,o=ui,u=!1){let h=this.elements,p=2*r/(e-t),v=2*r/(n-s),m=(e+t)/(e-t),T=(n+s)/(n-s),M,P;if(u)M=r/(l-r),P=l*r/(l-r);else if(o===ui)M=-(l+r)/(l-r),P=-2*l*r/(l-r);else if(o===Xs)M=-l/(l-r),P=-l*r/(l-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=p,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=v,h[9]=T,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=P,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,l,o=ui,u=!1){let h=this.elements,p=2/(e-t),v=2/(n-s),m=-(e+t)/(e-t),T=-(n+s)/(n-s),M,P;if(u)M=1/(l-r),P=l/(l-r);else if(o===ui)M=-2/(l-r),P=-(l+r)/(l-r);else if(o===Xs)M=-1/(l-r),P=-r/(l-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=p,h[4]=0,h[8]=0,h[12]=m,h[1]=0,h[5]=v,h[9]=0,h[13]=T,h[2]=0,h[6]=0,h[10]=M,h[14]=P,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};go.prototype.isMatrix4=!0;var Je=go,Rs=new at,li=new Je,cf=new at(0,0,0),hf=new at(1,1,1),Gi=new at,ya=new at,Yn=new at,Dh=new Je,Nh=new bi,Bi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],l=s[4],o=s[8],u=s[1],h=s[5],p=s[9],v=s[2],m=s[6],T=s[10];switch(e){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-p,T),this._z=Math.atan2(-l,r)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-We(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(o,T),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-v,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-v,T),this._z=Math.atan2(-l,h)):(this._y=0,this._z=Math.atan2(u,r));break;case"ZYX":this._y=Math.asin(-We(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(m,T),this._z=Math.atan2(u,r)):(this._x=0,this._z=Math.atan2(-l,h));break;case"YZX":this._z=Math.asin(We(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-v,r)):(this._x=0,this._y=Math.atan2(o,T));break;case"XZY":this._z=Math.asin(-We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-p,T),this._y=0);break;default:Se("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Dh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Dh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nh.setFromEuler(this),this.setFromQuaternion(Nh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bi.DEFAULT_ORDER="XYZ";var Zs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},uf=0,Uh=new at,Is=new bi,Li=new Je,va=new at,Mr=new at,df=new at,ff=new bi,Fh=new at(1,0,0),Oh=new at(0,1,0),Bh=new at(0,0,1),kh={type:"added"},pf={type:"removed"},Ps={type:"childadded",child:null},Bl={type:"childremoved",child:null},Nn=class i extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new at,e=new Bi,n=new bi,s=new at(1,1,1);function r(){n.setFromEuler(e,!1)}function l(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Je},normalMatrix:{value:new Re}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Is.setFromAxisAngle(t,e),this.quaternion.multiply(Is),this}rotateOnWorldAxis(t,e){return Is.setFromAxisAngle(t,e),this.quaternion.premultiply(Is),this}rotateX(t){return this.rotateOnAxis(Fh,t)}rotateY(t){return this.rotateOnAxis(Oh,t)}rotateZ(t){return this.rotateOnAxis(Bh,t)}translateOnAxis(t,e){return Uh.copy(t).applyQuaternion(this.quaternion),this.position.add(Uh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fh,t)}translateY(t){return this.translateOnAxis(Oh,t)}translateZ(t){return this.translateOnAxis(Bh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?va.copy(t):va.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Mr,va,this.up):Li.lookAt(va,Mr,this.up),this.quaternion.setFromRotationMatrix(Li),s&&(Li.extractRotation(s.matrixWorld),Is.setFromRotationMatrix(Li),this.quaternion.premultiply(Is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(be("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(kh),Ps.child=t,this.dispatchEvent(Ps),Ps.child=null):be("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pf),Bl.child=t,this.dispatchEvent(Bl),Bl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Li.multiply(t.parent.matrixWorld)),t.applyMatrix4(Li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(kh),Ps.child=t,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let l=this.children[n].getObjectByProperty(t,e);if(l!==void 0)return l}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,l=s.length;r<l;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,t,df),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,ff,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let l=0,o=r.length;l<o;l++)r[l].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,u){return o[u.uuid]===void 0&&(o[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let u=o.shapes;if(Array.isArray(u))for(let h=0,p=u.length;h<p;h++){let v=u[h];r(t.shapes,v)}else r(t.shapes,u)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let u=0,h=this.material.length;u<h;u++)o.push(r(t.materials,this.material[u]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let u=this.animations[o];s.animations.push(r(t.animations,u))}}if(e){let o=l(t.geometries),u=l(t.materials),h=l(t.textures),p=l(t.images),v=l(t.shapes),m=l(t.skeletons),T=l(t.animations),M=l(t.nodes);o.length>0&&(n.geometries=o),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),p.length>0&&(n.images=p),v.length>0&&(n.shapes=v),m.length>0&&(n.skeletons=m),T.length>0&&(n.animations=T),M.length>0&&(n.nodes=M)}return n.object=s,n;function l(o){let u=[];for(let h in o){let p=o[h];delete p.metadata,u.push(p)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Nn.DEFAULT_UP=new at(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var us=class extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}},mf={type:"move"},Js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new at,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new at),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new at,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new at,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,l=null,o=this._targetRay,u=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){l=!0;for(let P of t.hand.values()){let A=e.getJointPose(P,n),d=this._getHandJoint(h,P);A!==null&&(d.matrix.fromArray(A.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=A.radius),d.visible=A!==null}let p=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],m=p.position.distanceTo(v.position),T=.02,M=.005;h.inputState.pinching&&m>T+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&m<=T-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1,u.eventsEnabled&&u.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mf)))}return o!==null&&(o.visible=s!==null),u!==null&&(u.visible=r!==null),h!==null&&(h.visible=l!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new us;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},Ma={h:0,s:0,l:0};function kl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Le=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,He.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=He.workingColorSpace){return this.r=t,this.g=e,this.b=n,He.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=He.workingColorSpace){if(t=rf(t,1),e=We(e,0,1),n=We(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,l=2*n-r;this.r=kl(l,r,t+1/3),this.g=kl(l,r,t),this.b=kl(l,r,t-1/3)}return He.colorSpaceToWorking(this,s),this}setStyle(t,e=Cn){function n(r){r!==void 0&&parseFloat(r)<1&&Se("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,l=s[1],o=s[2];switch(l){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Se("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],l=r.length;if(l===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(l===6)return this.setHex(parseInt(r,16),e);Se("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Cn){let n=Ou[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Se("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Oi(t.r),this.g=Oi(t.g),this.b=Oi(t.b),this}copyLinearToSRGB(t){return this.r=Gs(t.r),this.g=Gs(t.g),this.b=Gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Cn){return He.workingToColorSpace(Ln.copy(this),t),Math.round(We(Ln.r*255,0,255))*65536+Math.round(We(Ln.g*255,0,255))*256+Math.round(We(Ln.b*255,0,255))}getHexString(t=Cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=He.workingColorSpace){He.workingToColorSpace(Ln.copy(this),e);let n=Ln.r,s=Ln.g,r=Ln.b,l=Math.max(n,s,r),o=Math.min(n,s,r),u,h,p=(o+l)/2;if(o===l)u=0,h=0;else{let v=l-o;switch(h=p<=.5?v/(l+o):v/(2-l-o),l){case n:u=(s-r)/v+(s<r?6:0);break;case s:u=(r-n)/v+2;break;case r:u=(n-s)/v+4;break}u/=6}return t.h=u,t.s=h,t.l=p,t}getRGB(t,e=He.workingColorSpace){return He.workingToColorSpace(Ln.copy(this),e),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=Cn){He.workingToColorSpace(Ln.copy(this),t);let e=Ln.r,n=Ln.g,s=Ln.b;return t!==Cn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Hi),this.setHSL(Hi.h+t,Hi.s+e,Hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hi),t.getHSL(Ma);let n=Dl(Hi.h,Ma.h,e),s=Dl(Hi.s,Ma.s,e),r=Dl(Hi.l,Ma.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ln=new Le;Le.NAMES=Ou;var Lr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Le(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Dr=class extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ci=new at,Di=new at,zl=new at,Ni=new at,Ls=new at,Ds=new at,zh=new at,Vl=new at,Gl=new at,Hl=new at,Wl=new un,Xl=new un,ql=new un,Yi=class i{constructor(t=new at,e=new at,n=new at){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ci.subVectors(t,e),s.cross(ci);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ci.subVectors(s,e),Di.subVectors(n,e),zl.subVectors(t,e);let l=ci.dot(ci),o=ci.dot(Di),u=ci.dot(zl),h=Di.dot(Di),p=Di.dot(zl),v=l*h-o*o;if(v===0)return r.set(0,0,0),null;let m=1/v,T=(h*u-o*p)*m,M=(l*p-o*u)*m;return r.set(1-T-M,M,T)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(t,e,n,s,r,l,o,u){return this.getBarycoord(t,e,n,s,Ni)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(r,Ni.x),u.addScaledVector(l,Ni.y),u.addScaledVector(o,Ni.z),u)}static getInterpolatedAttribute(t,e,n,s,r,l){return Wl.setScalar(0),Xl.setScalar(0),ql.setScalar(0),Wl.fromBufferAttribute(t,e),Xl.fromBufferAttribute(t,n),ql.fromBufferAttribute(t,s),l.setScalar(0),l.addScaledVector(Wl,r.x),l.addScaledVector(Xl,r.y),l.addScaledVector(ql,r.z),l}static isFrontFacing(t,e,n,s){return ci.subVectors(n,e),Di.subVectors(t,e),ci.cross(Di).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ci.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),ci.cross(Di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,l,o;Ls.subVectors(s,n),Ds.subVectors(r,n),Vl.subVectors(t,n);let u=Ls.dot(Vl),h=Ds.dot(Vl);if(u<=0&&h<=0)return e.copy(n);Gl.subVectors(t,s);let p=Ls.dot(Gl),v=Ds.dot(Gl);if(p>=0&&v<=p)return e.copy(s);let m=u*v-p*h;if(m<=0&&u>=0&&p<=0)return l=u/(u-p),e.copy(n).addScaledVector(Ls,l);Hl.subVectors(t,r);let T=Ls.dot(Hl),M=Ds.dot(Hl);if(M>=0&&T<=M)return e.copy(r);let P=T*h-u*M;if(P<=0&&h>=0&&M<=0)return o=h/(h-M),e.copy(n).addScaledVector(Ds,o);let A=p*M-T*v;if(A<=0&&v-p>=0&&T-M>=0)return zh.subVectors(r,s),o=(v-p)/(v-p+(T-M)),e.copy(s).addScaledVector(zh,o);let d=1/(A+P+m);return l=P*d,o=m*d,e.copy(n).addScaledVector(Ls,l).addScaledVector(Ds,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Si=class{constructor(t=new at(1/0,1/0,1/0),e=new at(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=hi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let l=0,o=r.count;l<o;l++)t.isMesh===!0?t.getVertexPosition(l,hi):hi.fromBufferAttribute(r,l),hi.applyMatrix4(t.matrixWorld),this.expandByPoint(hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ba.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ba.copy(n.boundingBox)),ba.applyMatrix4(t.matrixWorld),this.union(ba)}let s=t.children;for(let r=0,l=s.length;r<l;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hi),hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(br),Sa.subVectors(this.max,br),Ns.subVectors(t.a,br),Us.subVectors(t.b,br),Fs.subVectors(t.c,br),Wi.subVectors(Us,Ns),Xi.subVectors(Fs,Us),os.subVectors(Ns,Fs);let e=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-os.z,os.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,os.z,0,-os.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-os.y,os.x,0];return!Yl(e,Ns,Us,Fs,Sa)||(e=[1,0,0,0,1,0,0,0,1],!Yl(e,Ns,Us,Fs,Sa))?!1:(wa.crossVectors(Wi,Xi),e=[wa.x,wa.y,wa.z],Yl(e,Ns,Us,Fs,Sa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ui=[new at,new at,new at,new at,new at,new at,new at,new at],hi=new at,ba=new Si,Ns=new at,Us=new at,Fs=new at,Wi=new at,Xi=new at,os=new at,br=new at,Sa=new at,wa=new at,ls=new at;function Yl(i,t,e,n,s){for(let r=0,l=i.length-3;r<=l;r+=3){ls.fromArray(i,r);let o=s.x*Math.abs(ls.x)+s.y*Math.abs(ls.y)+s.z*Math.abs(ls.z),u=t.dot(ls),h=e.dot(ls),p=n.dot(ls);if(Math.max(-Math.max(u,h,p),Math.min(u,h,p))>o)return!1}return!0}var xn=new at,Ta=new ke,gf=0,Vn=class extends Mi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ic,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ta.fromBufferAttribute(this,e),Ta.applyMatrix3(t),this.setXY(e,Ta.x,Ta.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.applyMatrix3(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.applyMatrix4(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.applyNormalMatrix(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.transformDirection(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_i(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ln(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_i(e,this.array)),e}setX(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_i(e,this.array)),e}setY(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_i(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_i(e,this.array)),e}setW(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),s=ln(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),s=ln(s,this.array),r=ln(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Nr=class extends Vn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ur=class extends Vn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Gn=class extends Vn{constructor(t,e,n){super(new Float32Array(t),e,n)}},xf=new Si,Sr=new at,Zl=new at,Ji=class{constructor(t=new at,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):xf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,l=t.length;r<l;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Sr.subVectors(t,this.center);let e=Sr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Sr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Zl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Sr.copy(t.center).add(Zl)),this.expandByPoint(Sr.copy(t.center).sub(Zl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},_f=0,ei=new Je,Jl=new Nn,Os=new at,Zn=new Si,wr=new Si,Sn=new at,$n=class i extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nf(t)?Ur:Nr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Re().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ei.makeRotationFromQuaternion(t),this.applyMatrix4(ei),this}rotateX(t){return ei.makeRotationX(t),this.applyMatrix4(ei),this}rotateY(t){return ei.makeRotationY(t),this.applyMatrix4(ei),this}rotateZ(t){return ei.makeRotationZ(t),this.applyMatrix4(ei),this}translate(t,e,n){return ei.makeTranslation(t,e,n),this.applyMatrix4(ei),this}scale(t,e,n){return ei.makeScale(t,e,n),this.applyMatrix4(ei),this}lookAt(t){return Jl.lookAt(t),Jl.updateMatrix(),this.applyMatrix4(Jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let l=t[s];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new Gn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new at(-1/0,-1/0,-1/0),new at(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Zn.setFromBufferAttribute(r),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ji);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new at,1/0);return}if(t){let n=this.boundingSphere.center;if(Zn.setFromBufferAttribute(t),e)for(let r=0,l=e.length;r<l;r++){let o=e[r];wr.setFromBufferAttribute(o),this.morphTargetsRelative?(Sn.addVectors(Zn.min,wr.min),Zn.expandByPoint(Sn),Sn.addVectors(Zn.max,wr.max),Zn.expandByPoint(Sn)):(Zn.expandByPoint(wr.min),Zn.expandByPoint(wr.max))}Zn.getCenter(n);let s=0;for(let r=0,l=t.count;r<l;r++)Sn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Sn));if(e)for(let r=0,l=e.length;r<l;r++){let o=e[r],u=this.morphTargetsRelative;for(let h=0,p=o.count;h<p;h++)Sn.fromBufferAttribute(o,h),u&&(Os.fromBufferAttribute(t,h),Sn.add(Os)),s=Math.max(s,n.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,l=this.getAttribute("tangent");(l===void 0||l.count!==n.count)&&(l=new Vn(new Float32Array(4*n.count),4),this.setAttribute("tangent",l));let o=[],u=[];for(let _=0;_<n.count;_++)o[_]=new at,u[_]=new at;let h=new at,p=new at,v=new at,m=new ke,T=new ke,M=new ke,P=new at,A=new at;function d(_,N,H){h.fromBufferAttribute(n,_),p.fromBufferAttribute(n,N),v.fromBufferAttribute(n,H),m.fromBufferAttribute(r,_),T.fromBufferAttribute(r,N),M.fromBufferAttribute(r,H),p.sub(h),v.sub(h),T.sub(m),M.sub(m);let Y=1/(T.x*M.y-M.x*T.y);isFinite(Y)&&(P.copy(p).multiplyScalar(M.y).addScaledVector(v,-T.y).multiplyScalar(Y),A.copy(v).multiplyScalar(T.x).addScaledVector(p,-M.x).multiplyScalar(Y),o[_].add(P),o[N].add(P),o[H].add(P),u[_].add(A),u[N].add(A),u[H].add(A))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let _=0,N=C.length;_<N;++_){let H=C[_],Y=H.start,b=H.count;for(let J=Y,X=Y+b;J<X;J+=3)d(t.getX(J+0),t.getX(J+1),t.getX(J+2))}let I=new at,x=new at,R=new at,E=new at;function U(_){R.fromBufferAttribute(s,_),E.copy(R);let N=o[_];I.copy(N),I.sub(R.multiplyScalar(R.dot(N))).normalize(),x.crossVectors(E,N);let Y=x.dot(u[_])<0?-1:1;l.setXYZW(_,I.x,I.y,I.z,Y)}for(let _=0,N=C.length;_<N;++_){let H=C[_],Y=H.start,b=H.count;for(let J=Y,X=Y+b;J<X;J+=3)U(t.getX(J+0)),U(t.getX(J+1)),U(t.getX(J+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Vn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,T=n.count;m<T;m++)n.setXYZ(m,0,0,0);let s=new at,r=new at,l=new at,o=new at,u=new at,h=new at,p=new at,v=new at;if(t)for(let m=0,T=t.count;m<T;m+=3){let M=t.getX(m+0),P=t.getX(m+1),A=t.getX(m+2);s.fromBufferAttribute(e,M),r.fromBufferAttribute(e,P),l.fromBufferAttribute(e,A),p.subVectors(l,r),v.subVectors(s,r),p.cross(v),o.fromBufferAttribute(n,M),u.fromBufferAttribute(n,P),h.fromBufferAttribute(n,A),o.add(p),u.add(p),h.add(p),n.setXYZ(M,o.x,o.y,o.z),n.setXYZ(P,u.x,u.y,u.z),n.setXYZ(A,h.x,h.y,h.z)}else for(let m=0,T=e.count;m<T;m+=3)s.fromBufferAttribute(e,m+0),r.fromBufferAttribute(e,m+1),l.fromBufferAttribute(e,m+2),p.subVectors(l,r),v.subVectors(s,r),p.cross(v),n.setXYZ(m+0,p.x,p.y,p.z),n.setXYZ(m+1,p.x,p.y,p.z),n.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Sn.fromBufferAttribute(t,e),Sn.normalize(),t.setXYZ(e,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(o,u){let h=o.array,p=o.itemSize,v=o.normalized,m=new h.constructor(u.length*p),T=0,M=0;for(let P=0,A=u.length;P<A;P++){o.isInterleavedBufferAttribute?T=u[P]*o.data.stride+o.offset:T=u[P]*p;for(let d=0;d<p;d++)m[M++]=h[T++]}return new Vn(m,p,v)}if(this.index===null)return Se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let u=s[o],h=t(u,n);e.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let u=[],h=r[o];for(let p=0,v=h.length;p<v;p++){let m=h[p],T=t(m,n);u.push(T)}e.morphAttributes[o]=u}e.morphTargetsRelative=this.morphTargetsRelative;let l=this.groups;for(let o=0,u=l.length;o<u;o++){let h=l[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let u=this.parameters;for(let h in u)u[h]!==void 0&&(t[h]=u[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let u in n){let h=n[u];t.data.attributes[u]=h.toJSON(t.data)}let s={},r=!1;for(let u in this.morphAttributes){let h=this.morphAttributes[u],p=[];for(let v=0,m=h.length;v<m;v++){let T=h[v];p.push(T.toJSON(t.data))}p.length>0&&(s[u]=p,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let l=this.groups;l.length>0&&(t.data.groups=JSON.parse(JSON.stringify(l)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let h in s){let p=s[h];this.setAttribute(h,p.clone(e))}let r=t.morphAttributes;for(let h in r){let p=[],v=r[h];for(let m=0,T=v.length;m<T;m++)p.push(v[m].clone(e));this.morphAttributes[h]=p}this.morphTargetsRelative=t.morphTargetsRelative;let l=t.groups;for(let h=0,p=l.length;h<p;h++){let v=l[h];this.addGroup(v.start,v.count,v.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ic,this.updateRanges=[],this.version=0,this.uuid=Zi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Bn=new at,Or=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Bn.fromBufferAttribute(this,e),Bn.applyMatrix4(t),this.setXYZ(e,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Bn.fromBufferAttribute(this,e),Bn.applyNormalMatrix(t),this.setXYZ(e,Bn.x,Bn.y,Bn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Bn.fromBufferAttribute(this,e),Bn.transformDirection(t),this.setXYZ(e,Bn.x,Bn.y,Bn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=_i(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ln(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ln(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ln(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ln(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ln(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=_i(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=_i(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=_i(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=_i(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),s=ln(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),s=ln(s,this.array),r=ln(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Pr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Vn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Pr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},$l=new at,yf=new at,vf=new Re,Jn=class{constructor(t=new at(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=$l.subVectors(n,e).cross(yf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta($l),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let l=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(l<0||l>1)?null:e.copy(t.start).addScaledVector(s,l)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||vf.getNormalMatrix(t),s=this.coplanarPoint($l).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Mf=0,$i=class extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=nr,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fc,this.blendDst=pc,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=za,this.stencilZFail=za,this.stencilZPass=za,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Se(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Se(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let l=[];for(let o in r){let u=r[o];delete u.metadata,l.push(u)}return l}if(e){let r=s(t.textures),l=s(t.images);r.length>0&&(n.textures=r),l.length>0&&(n.images=l)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Le().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Jn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ke().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ke().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Fi=new at,Kl=new at,Ea=new at,Aa=new at,Br=class{constructor(t=new at,e=new at(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Fi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fi.copy(this.origin).addScaledVector(this.direction,e),Fi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Kl.copy(t).add(e).multiplyScalar(.5),Ea.copy(e).sub(t).normalize(),Aa.copy(this.origin).sub(Kl);let r=t.distanceTo(e)*.5,l=-this.direction.dot(Ea),o=Aa.dot(this.direction),u=-Aa.dot(Ea),h=Aa.lengthSq(),p=Math.abs(1-l*l),v,m,T,M;if(p>0)if(v=l*u-o,m=l*o-u,M=r*p,v>=0)if(m>=-M)if(m<=M){let P=1/p;v*=P,m*=P,T=v*(v+l*m+2*o)+m*(l*v+m+2*u)+h}else m=r,v=Math.max(0,-(l*m+o)),T=-v*v+m*(m+2*u)+h;else m=-r,v=Math.max(0,-(l*m+o)),T=-v*v+m*(m+2*u)+h;else m<=-M?(v=Math.max(0,-(-l*r+o)),m=v>0?-r:Math.min(Math.max(-r,-u),r),T=-v*v+m*(m+2*u)+h):m<=M?(v=0,m=Math.min(Math.max(-r,-u),r),T=m*(m+2*u)+h):(v=Math.max(0,-(l*r+o)),m=v>0?r:Math.min(Math.max(-r,-u),r),T=-v*v+m*(m+2*u)+h);else m=l>0?-r:r,v=Math.max(0,-(l*m+o)),T=-v*v+m*(m+2*u)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,v),s&&s.copy(Kl).addScaledVector(Ea,m),T}intersectSphere(t,e){if(t.radius<0)return null;Fi.subVectors(t.center,this.origin);let n=Fi.dot(this.direction),s=Fi.dot(Fi)-n*n,r=t.radius*t.radius;if(s>r)return null;let l=Math.sqrt(r-s),o=n-l,u=n+l;return u<0?null:o<0?this.at(u,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,l,o,u,h=1/this.direction.x,p=1/this.direction.y,v=1/this.direction.z,m=this.origin;return h>=0?(n=(t.min.x-m.x)*h,s=(t.max.x-m.x)*h):(n=(t.max.x-m.x)*h,s=(t.min.x-m.x)*h),p>=0?(r=(t.min.y-m.y)*p,l=(t.max.y-m.y)*p):(r=(t.max.y-m.y)*p,l=(t.min.y-m.y)*p),n>l||r>s||((r>n||isNaN(n))&&(n=r),(l<s||isNaN(s))&&(s=l),v>=0?(o=(t.min.z-m.z)*v,u=(t.max.z-m.z)*v):(o=(t.max.z-m.z)*v,u=(t.min.z-m.z)*v),n>u||o>s)||((o>n||n!==n)&&(n=o),(u<s||s!==s)&&(s=u),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Fi)!==null}intersectTriangle(t,e,n,s,r){let l=this.origin,o=this.direction,u=o.x,h=o.y,p=o.z,v=t.x-l.x,m=t.y-l.y,T=t.z-l.z,M=e.x-l.x,P=e.y-l.y,A=e.z-l.z,d=n.x-l.x,C=n.y-l.y,I=n.z-l.z,x=Math.abs(u),R=Math.abs(h),E=Math.abs(p),U,_,N,H,Y,b,J,X,Z,lt,ht,Mt;if(x>=R&&x>=E?(N=u,b=v,Z=M,Mt=d,u>=0?(U=h,_=p,H=m,Y=T,J=P,X=A,lt=C,ht=I):(U=p,_=h,H=T,Y=m,J=A,X=P,lt=I,ht=C)):R>=E?(N=h,b=m,Z=P,Mt=C,h>=0?(U=p,_=u,H=T,Y=v,J=A,X=M,lt=I,ht=d):(U=u,_=p,H=v,Y=T,J=M,X=A,lt=d,ht=I)):(N=p,b=T,Z=A,Mt=I,p>=0?(U=u,_=h,H=v,Y=m,J=M,X=P,lt=d,ht=C):(U=h,_=u,H=m,Y=v,J=P,X=M,lt=C,ht=d)),N===0)return null;let $=U/N,y=_/N,bt=1/N,Yt=H-$*b,At=Y-y*b,K=J-$*Z,ge=X-y*Z,Ne=lt-$*Mt,gt=ht-y*Mt,pt=Ne*ge-gt*K,Kt=Yt*gt-At*Ne,ae=K*At-ge*Yt;if(s){if(pt<0||Kt<0||ae<0)return null}else if((pt<0||Kt<0||ae<0)&&(pt>0||Kt>0||ae>0))return null;let Zt=pt+Kt+ae;if(Zt===0)return null;let Ee=bt*(pt*b+Kt*Z+ae*Mt);return(Zt>0?Ee<0:Ee>0)?null:this.at(Ee/Zt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},kr=class extends $i{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Vh=new Je,cs=new Br,Ca=new Ji,Gh=new at,Ra=new at,Ia=new at,Pa=new at,jl=new at,La=new at,Hh=new at,Da=new at,Un=class extends Nn{constructor(t=new $n,e=new kr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,l=s.length;r<l;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,l=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){La.set(0,0,0);for(let u=0,h=r.length;u<h;u++){let p=o[u],v=r[u];p!==0&&(jl.fromBufferAttribute(v,t),l?La.addScaledVector(jl,p):La.addScaledVector(jl.sub(e),p))}e.add(La)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ca.copy(n.boundingSphere),Ca.applyMatrix4(r),cs.copy(t.ray).recast(t.near),!(Ca.containsPoint(cs.origin)===!1&&(cs.intersectSphere(Ca,Gh)===null||cs.origin.distanceToSquared(Gh)>(t.far-t.near)**2))&&(Vh.copy(r).invert(),cs.copy(t.ray).applyMatrix4(Vh),!(n.boundingBox!==null&&cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,cs)))}_computeIntersections(t,e,n){let s,r=this.geometry,l=this.material,o=r.index,u=r.attributes.position,h=r.attributes.uv,p=r.attributes.uv1,v=r.attributes.normal,m=r.groups,T=r.drawRange;if(o!==null)if(Array.isArray(l))for(let M=0,P=m.length;M<P;M++){let A=m[M],d=l[A.materialIndex],C=Math.max(A.start,T.start),I=Math.min(o.count,Math.min(A.start+A.count,T.start+T.count));for(let x=C,R=I;x<R;x+=3){let E=o.getX(x),U=o.getX(x+1),_=o.getX(x+2);s=Na(this,d,t,n,h,p,v,E,U,_),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=A.materialIndex,e.push(s))}}else{let M=Math.max(0,T.start),P=Math.min(o.count,T.start+T.count);for(let A=M,d=P;A<d;A+=3){let C=o.getX(A),I=o.getX(A+1),x=o.getX(A+2);s=Na(this,l,t,n,h,p,v,C,I,x),s&&(s.faceIndex=Math.floor(A/3),e.push(s))}}else if(u!==void 0)if(Array.isArray(l))for(let M=0,P=m.length;M<P;M++){let A=m[M],d=l[A.materialIndex],C=Math.max(A.start,T.start),I=Math.min(u.count,Math.min(A.start+A.count,T.start+T.count));for(let x=C,R=I;x<R;x+=3){let E=x,U=x+1,_=x+2;s=Na(this,d,t,n,h,p,v,E,U,_),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=A.materialIndex,e.push(s))}}else{let M=Math.max(0,T.start),P=Math.min(u.count,T.start+T.count);for(let A=M,d=P;A<d;A+=3){let C=A,I=A+1,x=A+2;s=Na(this,l,t,n,h,p,v,C,I,x),s&&(s.faceIndex=Math.floor(A/3),e.push(s))}}}};function bf(i,t,e,n,s,r,l,o){let u;if(t.side===kn?u=n.intersectTriangle(l,r,s,!0,o):u=n.intersectTriangle(s,r,l,t.side===es,o),u===null)return null;Da.copy(o),Da.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(Da);return h<e.near||h>e.far?null:{distance:h,point:Da.clone(),object:i}}function Na(i,t,e,n,s,r,l,o,u,h){i.getVertexPosition(o,Ra),i.getVertexPosition(u,Ia),i.getVertexPosition(h,Pa);let p=bf(i,t,e,n,Ra,Ia,Pa,Hh);if(p){let v=new at;Yi.getBarycoord(Hh,Ra,Ia,Pa,v),s&&(p.uv=Yi.getInterpolatedAttribute(s,o,u,h,v,new ke)),r&&(p.uv1=Yi.getInterpolatedAttribute(r,o,u,h,v,new ke)),l&&(p.normal=Yi.getInterpolatedAttribute(l,o,u,h,v,new at),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));let m={a:o,b:u,c:h,normal:new at,materialIndex:0};Yi.getNormal(Ra,Ia,Pa,m.normal),p.face=m,p.barycoord=v}return p}var zr=class extends Hn{constructor(t=null,e=1,n=1,s,r,l,o,u,h=wn,p=wn,v,m){super(null,l,o,u,h,p,s,r,v,m),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ps=class extends Vn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Bs=new Je,Wh=new Je,Ua=[],Xh=new Si,Sf=new Je,Tr=new Un,Er=new Ji,Vr=class extends Un{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ps(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Sf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Si),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Bs),Xh.copy(t.boundingBox).applyMatrix4(Bs),this.boundingBox.union(Xh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ji),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Bs),Er.copy(t.boundingSphere).applyMatrix4(Bs),this.boundingSphere.union(Er)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,l=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[l+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Tr.geometry=this.geometry,Tr.material=this.material,Tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Er.copy(this.boundingSphere),Er.applyMatrix4(n),t.ray.intersectsSphere(Er)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Bs),Wh.multiplyMatrices(n,Bs),Tr.matrixWorld=Wh,Tr.raycast(t,Ua);for(let l=0,o=Ua.length;l<o;l++){let u=Ua[l];u.instanceId=r,u.object=this,e.push(u)}Ua.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ps(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new zr(new Float32Array(s*this.count),s,this.count,So,ni));let r=this.morphTexture.source.data.data,l=0;for(let h=0;h<n.length;h++)l+=n[h];let o=this.geometry.morphTargetsRelative?1:1-l,u=s*t;return r[u]=o,r.set(n,u+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},hs=new Ji,wf=new ke(.5,.5),Fa=new at,$s=class{constructor(t=new Jn,e=new Jn,n=new Jn,s=new Jn,r=new Jn,l=new Jn){this.planes=[t,e,n,s,r,l]}set(t,e,n,s,r,l){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(l),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ui,n=!1){let s=this.planes,r=t.elements,l=r[0],o=r[1],u=r[2],h=r[3],p=r[4],v=r[5],m=r[6],T=r[7],M=r[8],P=r[9],A=r[10],d=r[11],C=r[12],I=r[13],x=r[14],R=r[15];if(s[0].setComponents(h-l,T-p,d-M,R-C).normalize(),s[1].setComponents(h+l,T+p,d+M,R+C).normalize(),s[2].setComponents(h+o,T+v,d+P,R+I).normalize(),s[3].setComponents(h-o,T-v,d-P,R-I).normalize(),n)s[4].setComponents(u,m,A,x).normalize(),s[5].setComponents(h-u,T-m,d-A,R-x).normalize();else if(s[4].setComponents(h-u,T-m,d-A,R-x).normalize(),e===ui)s[5].setComponents(h+u,T+m,d+A,R+x).normalize();else if(e===Xs)s[5].setComponents(u,m,A,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(t){hs.center.set(0,0,0);let e=wf.distanceTo(t.center);return hs.radius=.7071067811865476+e,hs.applyMatrix4(t.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Fa.x=s.normal.x>0?t.max.x:t.min.x,Fa.y=s.normal.y>0?t.max.y:t.min.y,Fa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Fa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Gr=class extends Hn{constructor(t=[],e=ns,n,s,r,l,o,u,h,p){super(t,e,n,s,r,l,o,u,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Ki=class extends Hn{constructor(t,e,n=fi,s,r,l,o=wn,u=wn,h,p=vi,v=1){if(p!==vi&&p!==is)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let m={width:t,height:e,depth:v};super(m,s,r,l,o,u,p,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ys(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},to=class extends Ki{constructor(t,e=fi,n=ns,s,r,l=wn,o=wn,u,h=vi){let p={width:t,height:t,depth:1},v=[p,p,p,p,p,p];super(t,t,e,n,s,r,l,o,u,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Hr=class extends Hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ks=class i extends $n{constructor(t=1,e=1,n=1,s=1,r=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:l};let o=this;s=Math.floor(s),r=Math.floor(r),l=Math.floor(l);let u=[],h=[],p=[],v=[],m=0,T=0;M("z","y","x",-1,-1,n,e,t,l,r,0),M("z","y","x",1,-1,n,e,-t,l,r,1),M("x","z","y",1,1,t,n,e,s,l,2),M("x","z","y",1,-1,t,n,-e,s,l,3),M("x","y","z",1,-1,t,e,n,s,r,4),M("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(u),this.setAttribute("position",new Gn(h,3)),this.setAttribute("normal",new Gn(p,3)),this.setAttribute("uv",new Gn(v,2));function M(P,A,d,C,I,x,R,E,U,_,N){let H=x/U,Y=R/_,b=x/2,J=R/2,X=E/2,Z=U+1,lt=_+1,ht=0,Mt=0,$=new at;for(let y=0;y<lt;y++){let bt=y*Y-J;for(let Yt=0;Yt<Z;Yt++){let At=Yt*H-b;$[P]=At*C,$[A]=bt*I,$[d]=X,h.push($.x,$.y,$.z),$[P]=0,$[A]=0,$[d]=E>0?1:-1,p.push($.x,$.y,$.z),v.push(Yt/U),v.push(1-y/_),ht+=1}}for(let y=0;y<_;y++)for(let bt=0;bt<U;bt++){let Yt=m+bt+Z*y,At=m+bt+Z*(y+1),K=m+(bt+1)+Z*(y+1),ge=m+(bt+1)+Z*y;u.push(Yt,At,ge),u.push(At,K,ge),Mt+=6}o.addGroup(T,Mt,N),T+=Mt,m+=ht}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Wr=class i extends $n{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,l=e/2,o=Math.floor(n),u=Math.floor(s),h=o+1,p=u+1,v=t/o,m=e/u,T=[],M=[],P=[],A=[];for(let d=0;d<p;d++){let C=d*m-l;for(let I=0;I<h;I++){let x=I*v-r;M.push(x,-C,0),P.push(0,0,1),A.push(I/o),A.push(1-d/u)}}for(let d=0;d<u;d++)for(let C=0;C<o;C++){let I=C+h*d,x=C+h*(d+1),R=C+1+h*(d+1),E=C+1+h*d;T.push(I,x,E),T.push(x,R,E)}this.setIndex(T),this.setAttribute("position",new Gn(M,3)),this.setAttribute("normal",new Gn(P,3)),this.setAttribute("uv",new Gn(A,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};function _s(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(qh(s))s.isRenderTargetTexture?(Se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(qh(s[0])){let r=[];for(let l=0,o=s.length;l<o;l++)r[l]=s[l].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Fn(i){let t={};for(let e=0;e<i.length;e++){let n=_s(i[e]);for(let s in n)t[s]=n[s]}return t}function qh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Tf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Pc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:He.workingColorSpace}var Bu={clone:_s,merge:Fn},Ef=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Af=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Kn=class extends $i{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ef,this.fragmentShader=Af,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_s(t.uniforms),this.uniformsGroups=Tf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let l=this.uniforms[s].value;l&&l.isTexture?e.uniforms[s]={type:"t",value:l.toJSON(t).uuid}:l&&l.isColor?e.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?e.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?e.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?e.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?e.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?e.uniforms[s]={type:"m4",value:l.toArray()}:e.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Le().setHex(s.value);break;case"v2":this.uniforms[n].value=new ke().fromArray(s.value);break;case"v3":this.uniforms[n].value=new at().fromArray(s.value);break;case"v4":this.uniforms[n].value=new un().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Re().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Je().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},js=class extends Kn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Xr=class extends $i{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=il,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Qs=class extends $i{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},eo=class extends $i{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ks(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ql(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ji=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let l;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}l=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let u=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(s=r,r=e[--n-1],t>=r)break t}l=n,n=0;break e}break n}for(;n<l;){let o=n+l>>>1;t<e[o]?l=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let l=0;l!==s;++l)e[l]=n[r+l];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},no=class extends ji{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nc,endingEnd:nc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,l=t+1,o=s[r],u=s[l];if(o===void 0)switch(this.getSettings_().endingStart){case ic:r=t,o=2*e-n;break;case sc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(u===void 0)switch(this.getSettings_().endingEnd){case ic:l=t,u=2*n-e;break;case sc:l=1,u=n+s[1]-s[0];break;default:l=t-1,u=e}let h=(n-e)*.5,p=this.valueSize;this._weightPrev=h/(e-o),this._weightNext=h/(u-n),this._offsetPrev=r*p,this._offsetNext=l*p}interpolate_(t,e,n,s){let r=this.resultBuffer,l=this.sampleValues,o=this.valueSize,u=t*o,h=u-o,p=this._offsetPrev,v=this._offsetNext,m=this._weightPrev,T=this._weightNext,M=(n-e)/(s-e),P=M*M,A=P*M,d=-m*A+2*m*P-m*M,C=(1+m)*A+(-1.5-2*m)*P+(-.5+m)*M+1,I=(-1-T)*A+(1.5+T)*P+.5*M,x=T*A-T*P;for(let R=0;R!==o;++R)r[R]=d*l[p+R]+C*l[h+R]+I*l[u+R]+x*l[v+R];return r}},io=class extends ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,l=this.sampleValues,o=this.valueSize,u=t*o,h=u-o,p=(n-e)/(s-e),v=1-p;for(let m=0;m!==o;++m)r[m]=l[h+m]*v+l[u+m]*p;return r}},so=class extends ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ro=class extends ji{interpolate_(t,e,n,s){let r=this.resultBuffer,l=this.sampleValues,o=this.valueSize,u=t*o,h=u-o,p=this.inTangents,v=this.outTangents;if(!p||!v){let M=(n-e)/(s-e),P=1-M;for(let A=0;A!==o;++A)r[A]=l[h+A]*P+l[u+A]*M;return r}let m=o*2,T=t-1;for(let M=0;M!==o;++M){let P=l[h+M],A=l[u+M],d=T*m+M*2,C=v[d],I=v[d+1],x=t*m+M*2,R=p[x],E=p[x+1],U=Rf(n,e,C,R,s);r[M]=ku(U,P,I,E,A)}return r}};function ku(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Cf(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Rf(i,t,e,n,s){let r=(i-t)/(s-t);for(let l=0;l<8;l++){let o=ku(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let u=Cf(r,t,e,n,s);if(Math.abs(u)<1e-10)break;r=Math.max(0,Math.min(1,r-o/u))}return r}var jn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ks(e,this.TimeBufferType),this.values=ks(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ks(t.times,Array),values:ks(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Ql(t.settings)&&(n.settings={inTangents:ks(t.settings.inTangents,Array),outTangents:ks(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new so(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new io(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new no(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ro(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ar:e=this.InterpolantFactoryMethodDiscrete;break;case Ja:e=this.InterpolantFactoryMethodLinear;break;case ka:e=this.InterpolantFactoryMethodSmooth;break;case ec:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Se("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ar;case this.InterpolantFactoryMethodLinear:return Ja;case this.InterpolantFactoryMethodSmooth:return ka;case this.InterpolantFactoryMethodBezier:return ec}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Ql(this.settings)&&(Yh(this.settings.inTangents,t),Yh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,l=s-1;for(;r!==s&&n[r]<t;)++r;for(;l!==-1&&n[l]>e;)--l;if(++l,r!==0||l!==s){r>=l&&(l=Math.max(l,1),r=l-1);let o=this.getValueSize();this.times=n.slice(r,l),this.values=this.values.slice(r*o,l*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(be("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(be("KeyframeTrack: Track is empty.",this),t=!1);let l=null;for(let o=0;o!==r;o++){let u=n[o];if(typeof u=="number"&&isNaN(u)){be("KeyframeTrack: Time is not a valid number.",this,o,u),t=!1;break}if(l!==null&&l>u){be("KeyframeTrack: Out of order keys.",this,o,u,l),t=!1;break}l=u}if(s!==void 0&&sf(s))for(let o=0,u=s.length;o!==u;++o){let h=s[o];if(isNaN(h)){be("KeyframeTrack: Value is not a valid number.",this,o,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ka,r=t.length-1,l=1;for(let o=1;o<r;++o){let u=!1,h=t[o],p=t[o+1];if(h!==p&&(o!==1||h!==t[0]))if(s)u=!0;else{let v=o*n,m=v-n,T=v+n;for(let M=0;M!==n;++M){let P=e[v+M];if(P!==e[m+M]||P!==e[T+M]){u=!0;break}}}if(u){if(o!==l){t[l]=t[o];let v=o*n,m=l*n;for(let T=0;T!==n;++T)e[m+T]=e[v+T]}++l}}if(r>0){t[l]=t[r];for(let o=r*n,u=l*n,h=0;h!==n;++h)e[u+h]=e[o+h];++l}return l!==t.length?(this.times=t.slice(0,l),this.values=e.slice(0,l*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ql(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Yh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}jn.prototype.ValueTypeName="";jn.prototype.TimeBufferType=Float32Array;jn.prototype.ValueBufferType=Float32Array;jn.prototype.DefaultInterpolation=Ja;var Qi=class extends jn{constructor(t,e,n){super(t,e,n)}};Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Ar;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var ao=class extends jn{constructor(t,e,n,s){super(t,e,n,s)}};ao.prototype.ValueTypeName="color";var oo=class extends jn{constructor(t,e,n,s){super(t,e,n,s)}};oo.prototype.ValueTypeName="number";var lo=class extends ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,l=this.sampleValues,o=this.valueSize,u=(n-e)/(s-e),h=t*o;for(let p=h+o;h!==p;h+=4)bi.slerpFlat(r,0,l,h-o,l,h,u);return r}},qr=class extends jn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new lo(this.times,this.values,this.getValueSize(),t)}};qr.prototype.ValueTypeName="quaternion";qr.prototype.InterpolantFactoryMethodSmooth=void 0;var ts=class extends jn{constructor(t,e,n){super(t,e,n)}};ts.prototype.ValueTypeName="string";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Ar;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var co=class extends jn{constructor(t,e,n,s){super(t,e,n,s)}};co.prototype.ValueTypeName="vector";var ho=class{constructor(t,e,n){let s=this,r=!1,l=0,o=0,u,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(p){o++,r===!1&&s.onStart!==void 0&&s.onStart(p,l,o),r=!0},this.itemEnd=function(p){l++,s.onProgress!==void 0&&s.onProgress(p,l,o),l===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return p=p.normalize("NFC"),u?u(p):p},this.setURLModifier=function(p){return u=p,this},this.addHandler=function(p,v){return h.push(p,v),this},this.removeHandler=function(p){let v=h.indexOf(p);return v!==-1&&h.splice(v,2),this},this.getHandler=function(p){for(let v=0,m=h.length;v<m;v+=2){let T=h[v],M=h[v+1];if(T.global&&(T.lastIndex=0),T.test(p))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},zu=new ho,uo=class{constructor(t){this.manager=t!==void 0?t:zu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};uo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Yr=class extends Nn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Zr=class extends Yr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},tc=new Je,Zh=new at,Jh=new at,fo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.mapType=Xn,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $s,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new un(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Zh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zh),Jh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){tc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(tc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,l=s?s.z/r.x:1,o=s?s.w/r.y:1,u=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===Xs||t.reversedDepth?e.set(.5*l,0,0,.5*l+u,0,.5*o,0,.5*o+h,0,0,1,0,0,0,0,1):e.set(.5*l,0,0,.5*l+u,0,.5*o,0,.5*o+h,0,0,.5,.5,0,0,0,1),e.multiply(tc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Oa=new at,Ba=new bi,xi=new at,Jr=class extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Oa,Ba,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oa,Ba,xi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Oa,Ba,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oa,Ba,xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},qi=new at,$h=new ke,Kh=new ke,Dn=class extends Jr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=$a*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ll*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $a*2*Math.atan(Math.tan(Ll*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qi.x,qi.y).multiplyScalar(-t/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-t/qi.z)}getViewSize(t,e){return this.getViewBounds(t,$h,Kh),e.subVectors(Kh,$h)}setViewOffset(t,e,n,s,r,l){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ll*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,l=this.view;if(this.view!==null&&this.view.enabled){let u=l.fullWidth,h=l.fullHeight;r+=l.offsetX*s/u,e-=l.offsetY*n/h,s*=l.width/u,n*=l.height/h}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var tr=class extends Jr{constructor(t=-1,e=1,n=1,s=-1,r=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=l,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,l=n+t,o=s+e,u=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,l=r+h*this.view.width,o-=p*this.view.offsetY,u=o-p*this.view.height}this.projectionMatrix.makeOrthographic(r,l,o,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},rc=class extends fo{constructor(){super(new tr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$r=class extends Yr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.target=new Nn,this.shadow=new rc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var zs=-90,Vs=1,po=class extends Nn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Dn(zs,Vs,t,e);s.layers=this.layers,this.add(s);let r=new Dn(zs,Vs,t,e);r.layers=this.layers,this.add(r);let l=new Dn(zs,Vs,t,e);l.layers=this.layers,this.add(l);let o=new Dn(zs,Vs,t,e);o.layers=this.layers,this.add(o);let u=new Dn(zs,Vs,t,e);u.layers=this.layers,this.add(u);let h=new Dn(zs,Vs,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,l,o,u]=e;for(let h of e)this.remove(h);if(t===ui)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===Xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,l,o,u,h,p]=this.children,v=t.getRenderTarget(),m=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;let P=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let A=!1;t.isWebGLRenderer===!0?A=t.state.buffers.depth.getReversed():A=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),A&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),A&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,2,s),A&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),A&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(n,4,s),A&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.generateMipmaps=P,t.setRenderTarget(n,5,s),A&&t.autoClear===!1&&t.clearDepth(),t.render(e,p),t.setRenderTarget(v,m,T),t.xr.enabled=M,n.texture.needsPMREMUpdate=!0}},mo=class extends Dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Lc="\\[\\]\\.:\\/",If=new RegExp("["+Lc+"]","g"),Dc="[^"+Lc+"]",Pf="[^"+Lc.replace("\\.","")+"]",Lf=/((?:WC+[\/:])*)/.source.replace("WC",Dc),Df=/(WCOD+)?/.source.replace("WCOD",Pf),Nf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dc),Uf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dc),Ff=new RegExp("^"+Lf+Df+Nf+Uf+"$"),Of=["material","materials","bones","map"],ac=class{constructor(t,e,n){let s=n||hn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},hn=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(If,"")}static parseTrackName(t){let e=Ff.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Of.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let l=0;l<r.length;l++){let o=r[l];if(o.name===e||o.uuid===e)return o;let u=n(o.children);if(u)return u}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Se("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){be("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){be("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let p=0;p<t.length;p++)if(t[p].name===h){h=p;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){be("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){be("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){be("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let l=t[s];if(l===void 0){let h=e.nodeName;be("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}u=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=r}else l.fromArray!==void 0&&l.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(u=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=s;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};hn.Composite=ac;hn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};hn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};hn.prototype.GetterByBindingType=[hn.prototype._getValue_direct,hn.prototype._getValue_array,hn.prototype._getValue_arrayElement,hn.prototype._getValue_toArray];hn.prototype.SetterByBindingTypeAndVersioning=[[hn.prototype._setValue_direct,hn.prototype._setValue_direct_setNeedsUpdate,hn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[hn.prototype._setValue_array,hn.prototype._setValue_array_setNeedsUpdate,hn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[hn.prototype._setValue_arrayElement,hn.prototype._setValue_arrayElement_setNeedsUpdate,hn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[hn.prototype._setValue_fromArray,hn.prototype._setValue_fromArray_setNeedsUpdate,hn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var P1=new Float32Array(1);var jh=new Je,Kr=class{constructor(t,e,n=0,s=1/0){this.ray=new Br(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Zs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):be("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return jh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jh),this}intersectObject(t,e=!0,n=[]){return oc(t,this,n,e),n.sort(Qh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)oc(t[s],this,n,e);return n.sort(Qh),n}};function Qh(i,t){return i.distance-t.distance}function oc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let l=0,o=r.length;l<o;l++)oc(r[l],t,e,!0)}}var kc=class kc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};kc.prototype.isMatrix2=!0;var lc=kc;function Nc(i,t,e,n){let s=Bf(n);switch(e){case Ac:return i*t;case So:return i*t/s.components*s.byteLength;case wo:return i*t/s.components*s.byteLength;case ss:return i*t*2/s.components*s.byteLength;case To:return i*t*2/s.components*s.byteLength;case Cc:return i*t*3/s.components*s.byteLength;case ii:return i*t*4/s.components*s.byteLength;case Eo:return i*t*4/s.components*s.byteLength;case ea:case na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ia:case sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Co:case Io:return Math.max(i,16)*Math.max(t,8)/4;case Ao:case Ro:return Math.max(i,8)*Math.max(t,8)/2;case Po:case Lo:case No:case Uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Do:case ra:case Fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ko:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case zo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Vo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Go:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Wo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case qo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Zo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Jo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case $o:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ko:case jo:case Qo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case tl:case el:return Math.ceil(i/4)*Math.ceil(t/4)*8;case aa:case nl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Bf(i){switch(i){case Xn:case Sc:return{byteLength:1,components:1};case ir:case wc:case pi:return{byteLength:2,components:1};case Mo:case bo:return{byteLength:2,components:4};case fi:case vo:case ni:return{byteLength:4,components:1};case Tc:case Ec:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function ld(){let i=null,t=!1,e=null,n=null;function s(r,l){n=i.requestAnimationFrame(s),e(r,l)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function zf(i){let t=new WeakMap;function e(o,u){let h=o.array,p=o.usage,v=h.byteLength,m=i.createBuffer();i.bindBuffer(u,m),i.bufferData(u,h,p),o.onUploadCallback();let T;if(h instanceof Float32Array)T=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)T=i.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?T=i.HALF_FLOAT:T=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)T=i.SHORT;else if(h instanceof Uint32Array)T=i.UNSIGNED_INT;else if(h instanceof Int32Array)T=i.INT;else if(h instanceof Int8Array)T=i.BYTE;else if(h instanceof Uint8Array)T=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)T=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:T,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:v}}function n(o,u,h){let p=u.array,v=u.updateRanges;if(i.bindBuffer(h,o),v.length===0)i.bufferSubData(h,0,p);else{v.sort((T,M)=>T.start-M.start);let m=0;for(let T=1;T<v.length;T++){let M=v[m],P=v[T];P.start<=M.start+M.count+1?M.count=Math.max(M.count,P.start+P.count-M.start):(++m,v[m]=P)}v.length=m+1;for(let T=0,M=v.length;T<M;T++){let P=v[T];i.bufferSubData(h,P.start*p.BYTES_PER_ELEMENT,p,P.start,P.count)}u.clearUpdateRanges()}u.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let u=t.get(o);u&&(i.deleteBuffer(u.buffer),t.delete(o))}function l(o,u){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let p=t.get(o);(!p||p.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,e(o,u));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,u),h.version=o.version}}return{get:s,remove:r,update:l}}var Vf=`#ifdef USE_ALPHAHASH
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
}`,De={alphahash_fragment:Vf,alphahash_pars_fragment:Gf,alphamap_fragment:Hf,alphamap_pars_fragment:Wf,alphatest_fragment:Xf,alphatest_pars_fragment:qf,aomap_fragment:Yf,aomap_pars_fragment:Zf,batching_pars_vertex:Jf,batching_vertex:$f,begin_vertex:Kf,beginnormal_vertex:jf,bsdfs:Qf,iridescence_fragment:tp,bumpmap_pars_fragment:ep,clipping_planes_fragment:np,clipping_planes_pars_fragment:ip,clipping_planes_pars_vertex:sp,clipping_planes_vertex:rp,color_fragment:ap,color_pars_fragment:op,color_pars_vertex:lp,color_vertex:cp,common:hp,cube_uv_reflection_fragment:up,defaultnormal_vertex:dp,displacementmap_pars_vertex:fp,displacementmap_vertex:pp,emissivemap_fragment:mp,emissivemap_pars_fragment:gp,colorspace_fragment:xp,colorspace_pars_fragment:_p,envmap_fragment:yp,envmap_common_pars_fragment:vp,envmap_pars_fragment:Mp,envmap_pars_vertex:bp,envmap_physical_pars_fragment:Dp,envmap_vertex:Sp,fog_vertex:wp,fog_pars_vertex:Tp,fog_fragment:Ep,fog_pars_fragment:Ap,gradientmap_pars_fragment:Cp,lightmap_pars_fragment:Rp,lights_lambert_fragment:Ip,lights_lambert_pars_fragment:Pp,lights_pars_begin:Lp,lights_toon_fragment:Np,lights_toon_pars_fragment:Up,lights_phong_fragment:Fp,lights_phong_pars_fragment:Op,lights_physical_fragment:Bp,lights_physical_pars_fragment:kp,lights_fragment_begin:zp,lights_fragment_maps:Vp,lights_fragment_end:Gp,lightprobes_pars_fragment:Hp,logdepthbuf_fragment:Wp,logdepthbuf_pars_fragment:Xp,logdepthbuf_pars_vertex:qp,logdepthbuf_vertex:Yp,map_fragment:Zp,map_pars_fragment:Jp,map_particle_fragment:$p,map_particle_pars_fragment:Kp,metalnessmap_fragment:jp,metalnessmap_pars_fragment:Qp,morphinstance_vertex:t0,morphcolor_vertex:e0,morphnormal_vertex:n0,morphtarget_pars_vertex:i0,morphtarget_vertex:s0,normal_fragment_begin:r0,normal_fragment_maps:a0,normal_pars_fragment:o0,normal_pars_vertex:l0,normal_vertex:c0,normalmap_pars_fragment:h0,clearcoat_normal_fragment_begin:u0,clearcoat_normal_fragment_maps:d0,clearcoat_pars_fragment:f0,iridescence_pars_fragment:p0,opaque_fragment:m0,packing:g0,premultiplied_alpha_fragment:x0,project_vertex:_0,dithering_fragment:y0,dithering_pars_fragment:v0,roughnessmap_fragment:M0,roughnessmap_pars_fragment:b0,shadowmap_pars_fragment:S0,shadowmap_pars_vertex:w0,shadowmap_vertex:T0,shadowmask_pars_fragment:E0,skinbase_vertex:A0,skinning_pars_vertex:C0,skinning_vertex:R0,skinnormal_vertex:I0,specularmap_fragment:P0,specularmap_pars_fragment:L0,tonemapping_fragment:D0,tonemapping_pars_fragment:N0,transmission_fragment:U0,transmission_pars_fragment:F0,uv_pars_fragment:O0,uv_pars_vertex:B0,uv_vertex:k0,worldpos_vertex:z0,background_vert:V0,background_frag:G0,backgroundCube_vert:H0,backgroundCube_frag:W0,cube_vert:X0,cube_frag:q0,depth_vert:Y0,depth_frag:Z0,distance_vert:J0,distance_frag:$0,equirect_vert:K0,equirect_frag:j0,linedashed_vert:Q0,linedashed_frag:tm,meshbasic_vert:em,meshbasic_frag:nm,meshlambert_vert:im,meshlambert_frag:sm,meshmatcap_vert:rm,meshmatcap_frag:am,meshnormal_vert:om,meshnormal_frag:lm,meshphong_vert:cm,meshphong_frag:hm,meshphysical_vert:um,meshphysical_frag:dm,meshtoon_vert:fm,meshtoon_frag:pm,points_vert:mm,points_frag:gm,shadow_vert:xm,shadow_frag:_m,sprite_vert:ym,sprite_frag:vm},ne={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Re}},envmap:{envMap:{value:null},envMapRotation:{value:new Re},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Re},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new at},probesMax:{value:new at},probesResolution:{value:new at}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0},uvTransform:{value:new Re}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}}},Ai={basic:{uniforms:Fn([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:Fn([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Le(0)},envMapIntensity:{value:1}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:Fn([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:Fn([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:Fn([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Le(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:Fn([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:Fn([ne.points,ne.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:Fn([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:Fn([ne.common,ne.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:Fn([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:Fn([ne.sprite,ne.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Re}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distance:{uniforms:Fn([ne.common,ne.displacementmap,{referencePosition:{value:new at},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distance_vert,fragmentShader:De.distance_frag},shadow:{uniforms:Fn([ne.lights,ne.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Ai.physical={uniforms:Fn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Re},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Re},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Re},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Re},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Re},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Re},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Re}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};var ol={r:0,b:0,g:0},Mm=new Je,cd=new Re;cd.set(-1,0,0,0,1,0,0,0,1);function bm(i,t,e,n,s,r){let l=new Le(0),o=s===!0?0:1,u,h,p=null,v=0,m=null;function T(C){let I=C.isScene===!0?C.background:null;if(I&&I.isTexture){let x=C.backgroundBlurriness>0;I=t.get(I,x)}return I}function M(C){let I=!1,x=T(C);x===null?A(l,o):x&&x.isColor&&(A(x,1),I=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||I)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function P(C,I){let x=T(I);x&&(x.isCubeTexture||x.mapping===Qr)?(h===void 0&&(h=new Un(new Ks(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:_s(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,E,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Mm.makeRotationFromEuler(I.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(cd),h.material.toneMapped=He.getTransfer(x.colorSpace)!==rn,(p!==x||v!==x.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,p=x,v=x.version,m=i.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new Un(new Wr(2,2),new Kn({name:"BackgroundMaterial",uniforms:_s(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,u.material.toneMapped=He.getTransfer(x.colorSpace)!==rn,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(p!==x||v!==x.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,p=x,v=x.version,m=i.toneMapping),u.layers.enableAll(),C.unshift(u,u.geometry,u.material,0,0,null))}function A(C,I){C.getRGB(ol,Pc(i)),e.buffers.color.setClear(ol.r,ol.g,ol.b,I,r)}function d(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return l},setClearColor:function(C,I=1){l.set(C),o=I,A(l,o)},getClearAlpha:function(){return o},setClearAlpha:function(C){o=C,A(l,o)},render:M,addToRenderList:P,dispose:d}}function Sm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=m(null),r=s,l=!1;function o(Y,b,J,X,Z){let lt=!1,ht=v(Y,X,J,b);r!==ht&&(r=ht,h(r.object)),lt=T(Y,X,J,Z),lt&&M(Y,X,J,Z),Z!==null&&t.update(Z,i.ELEMENT_ARRAY_BUFFER),(lt||l)&&(l=!1,x(Y,b,J,X),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function u(){return i.createVertexArray()}function h(Y){return i.bindVertexArray(Y)}function p(Y){return i.deleteVertexArray(Y)}function v(Y,b,J,X){let Z=X.wireframe===!0,lt=n[b.id];lt===void 0&&(lt={},n[b.id]=lt);let ht=Y.isInstancedMesh===!0?Y.id:0,Mt=lt[ht];Mt===void 0&&(Mt={},lt[ht]=Mt);let $=Mt[J.id];$===void 0&&($={},Mt[J.id]=$);let y=$[Z];return y===void 0&&(y=m(u()),$[Z]=y),y}function m(Y){let b=[],J=[],X=[];for(let Z=0;Z<e;Z++)b[Z]=0,J[Z]=0,X[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:J,attributeDivisors:X,object:Y,attributes:{},index:null}}function T(Y,b,J,X){let Z=r.attributes,lt=b.attributes,ht=0,Mt=J.getAttributes();for(let $ in Mt)if(Mt[$].location>=0){let bt=Z[$],Yt=lt[$];if(Yt===void 0&&($==="instanceMatrix"&&Y.instanceMatrix&&(Yt=Y.instanceMatrix),$==="instanceColor"&&Y.instanceColor&&(Yt=Y.instanceColor)),bt===void 0||bt.attribute!==Yt||Yt&&bt.data!==Yt.data)return!0;ht++}return r.attributesNum!==ht||r.index!==X}function M(Y,b,J,X){let Z={},lt=b.attributes,ht=0,Mt=J.getAttributes();for(let $ in Mt)if(Mt[$].location>=0){let bt=lt[$];bt===void 0&&($==="instanceMatrix"&&Y.instanceMatrix&&(bt=Y.instanceMatrix),$==="instanceColor"&&Y.instanceColor&&(bt=Y.instanceColor));let Yt={};Yt.attribute=bt,bt&&bt.data&&(Yt.data=bt.data),Z[$]=Yt,ht++}r.attributes=Z,r.attributesNum=ht,r.index=X}function P(){let Y=r.newAttributes;for(let b=0,J=Y.length;b<J;b++)Y[b]=0}function A(Y){d(Y,0)}function d(Y,b){let J=r.newAttributes,X=r.enabledAttributes,Z=r.attributeDivisors;J[Y]=1,X[Y]===0&&(i.enableVertexAttribArray(Y),X[Y]=1),Z[Y]!==b&&(i.vertexAttribDivisor(Y,b),Z[Y]=b)}function C(){let Y=r.newAttributes,b=r.enabledAttributes;for(let J=0,X=b.length;J<X;J++)b[J]!==Y[J]&&(i.disableVertexAttribArray(J),b[J]=0)}function I(Y,b,J,X,Z,lt,ht){ht===!0?i.vertexAttribIPointer(Y,b,J,Z,lt):i.vertexAttribPointer(Y,b,J,X,Z,lt)}function x(Y,b,J,X){P();let Z=X.attributes,lt=J.getAttributes(),ht=b.defaultAttributeValues;for(let Mt in lt){let $=lt[Mt];if($.location>=0){let y=Z[Mt];if(y===void 0&&(Mt==="instanceMatrix"&&Y.instanceMatrix&&(y=Y.instanceMatrix),Mt==="instanceColor"&&Y.instanceColor&&(y=Y.instanceColor)),y!==void 0){let bt=y.normalized,Yt=y.itemSize,At=t.get(y);if(At===void 0)continue;let K=At.buffer,ge=At.type,Ne=At.bytesPerElement,gt=ge===i.INT||ge===i.UNSIGNED_INT||y.gpuType===vo;if(y.isInterleavedBufferAttribute){let pt=y.data,Kt=pt.stride,ae=y.offset;if(pt.isInstancedInterleavedBuffer){for(let Zt=0;Zt<$.locationSize;Zt++)d($.location+Zt,pt.meshPerAttribute);Y.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Zt=0;Zt<$.locationSize;Zt++)A($.location+Zt);i.bindBuffer(i.ARRAY_BUFFER,K);for(let Zt=0;Zt<$.locationSize;Zt++)I($.location+Zt,Yt/$.locationSize,ge,bt,Kt*Ne,(ae+Yt/$.locationSize*Zt)*Ne,gt)}else{if(y.isInstancedBufferAttribute){for(let pt=0;pt<$.locationSize;pt++)d($.location+pt,y.meshPerAttribute);Y.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=y.meshPerAttribute*y.count)}else for(let pt=0;pt<$.locationSize;pt++)A($.location+pt);i.bindBuffer(i.ARRAY_BUFFER,K);for(let pt=0;pt<$.locationSize;pt++)I($.location+pt,Yt/$.locationSize,ge,bt,Yt*Ne,Yt/$.locationSize*pt*Ne,gt)}}else if(ht!==void 0){let bt=ht[Mt];if(bt!==void 0)switch(bt.length){case 2:i.vertexAttrib2fv($.location,bt);break;case 3:i.vertexAttrib3fv($.location,bt);break;case 4:i.vertexAttrib4fv($.location,bt);break;default:i.vertexAttrib1fv($.location,bt)}}}}C()}function R(){N();for(let Y in n){let b=n[Y];for(let J in b){let X=b[J];for(let Z in X){let lt=X[Z];for(let ht in lt)p(lt[ht].object),delete lt[ht];delete X[Z]}}delete n[Y]}}function E(Y){if(n[Y.id]===void 0)return;let b=n[Y.id];for(let J in b){let X=b[J];for(let Z in X){let lt=X[Z];for(let ht in lt)p(lt[ht].object),delete lt[ht];delete X[Z]}}delete n[Y.id]}function U(Y){for(let b in n){let J=n[b];for(let X in J){let Z=J[X];if(Z[Y.id]===void 0)continue;let lt=Z[Y.id];for(let ht in lt)p(lt[ht].object),delete lt[ht];delete Z[Y.id]}}}function _(Y){for(let b in n){let J=n[b],X=Y.isInstancedMesh===!0?Y.id:0,Z=J[X];if(Z!==void 0){for(let lt in Z){let ht=Z[lt];for(let Mt in ht)p(ht[Mt].object),delete ht[Mt];delete Z[lt]}delete J[X],Object.keys(J).length===0&&delete n[b]}}}function N(){H(),l=!0,r!==s&&(r=s,h(r.object))}function H(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:H,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:U,initAttributes:P,enableAttribute:A,disableUnusedAttributes:C}}function wm(i,t,e){let n;function s(u){n=u}function r(u,h){i.drawArrays(n,u,h),e.update(h,n,1)}function l(u,h,p){p!==0&&(i.drawArraysInstanced(n,u,h,p),e.update(h,n,p))}function o(u,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,p);let m=0;for(let T=0;T<p;T++)m+=h[T];e.update(m,n,1)}this.setMode=s,this.render=r,this.renderInstances=l,this.renderMultiDraw=o}function Tm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let U=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(U){return!(U!==ii&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(U){let _=U===pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==Xn&&U!==ni&&!_&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function u(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",p=u(h);p!==h&&(Se("WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);let v=e.logarithmicDepthBuffer===!0,m=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&m===!1&&Se("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let T=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=i.getParameter(i.MAX_TEXTURE_SIZE),A=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:u,textureFormatReadable:l,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:m,maxTextures:T,maxVertexTextures:M,maxTextureSize:P,maxCubemapSize:A,maxAttributes:d,maxVertexUniforms:C,maxVaryings:I,maxFragmentUniforms:x,maxSamples:R,samples:E}}function Em(i){let t=this,e=null,n=0,s=!1,r=!1,l=new Jn,o=new Re,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(v,m){let T=v.length!==0||m||n!==0||s;return s=m,n=v.length,T},this.beginShadows=function(){r=!0,p(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(v,m){e=p(v,m,0)},this.setState=function(v,m,T){let M=v.clippingPlanes,P=v.clipIntersection,A=v.clipShadows,d=i.get(v);if(!s||M===null||M.length===0||r&&!A)r?p(null):h();else{let C=r?0:n,I=C*4,x=d.clippingState||null;u.value=x,x=p(M,m,I,T);for(let R=0;R!==I;++R)x[R]=e[R];d.clippingState=x,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=C}};function h(){u.value!==e&&(u.value=e,u.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function p(v,m,T,M){let P=v!==null?v.length:0,A=null;if(P!==0){if(A=u.value,M!==!0||A===null){let d=T+P*4,C=m.matrixWorldInverse;o.getNormalMatrix(C),(A===null||A.length<d)&&(A=new Float32Array(d));for(let I=0,x=T;I!==P;++I,x+=4)l.copy(v[I]).applyMatrix4(C,o),l.normal.toArray(A,x),A[x+3]=l.constant}u.value=A,u.needsUpdate=!0}return t.numPlanes=P,t.numIntersection=0,A}}var ar=4,Am=6,Cm=20,Rm=256,la=new tr,Vu=new Le,zc=null,Vc=0,Gc=0,Hc=!1,Im=new at,ys=new at,cl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:l=256,position:o=Im}=r;zc=this._renderer.getRenderTarget(),Vc=this._renderer.getActiveCubeFace(),Gc=this._renderer.getActiveMipmapLevel(),Hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);let u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,n,s,u,o),e>0&&this._blur(u,0,0,e),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(zc,Vc,Gc),this._renderer.xr.enabled=Hc,t.scissorTest=!1,rr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ns||t.mapping===xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zc=this._renderer.getRenderTarget(),Vc=this._renderer.getActiveCubeFace(),Gc=this._renderer.getActiveMipmapLevel(),Hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:pi,format:ii,colorSpace:Cr,depthBuffer:!1},s=Gu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gu(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Pm(r)),this._blurMaterial=Dm(r,t,e),this._ggxMaterial=Lm(r,t,e)}return s}_compileMaterial(t){let e=new Un(new $n,t);this._renderer.compile(e,la)}_sceneToCubeUV(t,e,n,s,r){let u=new Dn(90,1,e,n),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],v=this._renderer,m=v.autoClear,T=v.toneMapping;v.getClearColor(Vu),v.toneMapping=di,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(s),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Un(new Ks,new kr({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1})));let P=this._backgroundBox,A=P.material,d=!1,C=t.background;C?C.isColor&&(A.color.copy(C),t.background=null,d=!0):(A.color.copy(Vu),d=!0);for(let I=0;I<6;I++){let x=I%3;x===0?(u.up.set(0,h[I],0),u.position.set(r.x,r.y,r.z),u.lookAt(r.x+p[I],r.y,r.z)):x===1?(u.up.set(0,0,h[I]),u.position.set(r.x,r.y,r.z),u.lookAt(r.x,r.y+p[I],r.z)):(u.up.set(0,h[I],0),u.position.set(r.x,r.y,r.z),u.lookAt(r.x,r.y,r.z+p[I]));let R=this._cubeSize;rr(s,x*R,I>2?R:0,R,R),v.setRenderTarget(s),d&&v.render(P,u),v.render(t,u)}v.toneMapping=T,v.autoClear=m,t.background=C}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ns||t.mapping===xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hu());let r=s?this._cubemapMaterial:this._equirectMaterial,l=this._lodMeshes[0];l.material=r;let o=r.uniforms;o.envMap.value=t;let u=this._cubeSize;rr(e,0,0,3*u,2*u),n.setRenderTarget(e),n.render(l,la)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,l=this._ggxMaterial,o=this._lodMeshes[n];o.material=l;let u=l.uniforms,h=n/(this._lodMeshes.length-1),p=e/(this._lodMeshes.length-1),v=Math.sqrt(h*h-p*p),m=h*1.25,T=v*m,{_lodMax:M}=this,P=this._sizeLods[n],A=3*P*(n>M-ar?n-M+ar:0),d=4*(this._cubeSize-P);u.envMap.value=t.texture,u.roughness.value=T,u.mipInt.value=M-e,rr(r,A,d,3*P,2*P),s.setRenderTarget(r),s.render(o,la),u.envMap.value=r.texture,u.roughness.value=0,u.mipInt.value=M-n,rr(t,A,d,3*P,2*P),s.setRenderTarget(t),s.render(o,la)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,l=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,l),this._blurPass(r,t,n,n,l)}_blurPass(t,e,n,s,r){let l=this._renderer,o=this._blurMaterial,u=this._lodMeshes[s];u.material=o;let h=o.uniforms;h.envMap.value=t.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-n;let p=this._sizeLods[s],v=3*p*(s>this._lodMax-ar?s-this._lodMax+ar:0),m=4*(this._cubeSize-p);rr(e,v,m,3*p,2*p),l.setRenderTarget(e),l.render(u,la)}};function Pm(i){let t=[],e=[],n=i,s=i-ar+1+Am;for(let r=0;r<s;r++){let l=Math.pow(2,n);t.push(l);let o=1/(l-2),u=-o,h=1+o,p=[u,u,h,u,h,h,u,u,h,h,u,h],v=6,m=6,T=3,M=new Float32Array(T*m*v),P=new Float32Array(T*m*v);for(let d=0;d<v;d++){let C=d%3*2/3-1,I=d>2?0:-1,x=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];M.set(x,T*m*d);for(let R=0;R<m;R++){let E=p[R*2]*2-1,U=p[R*2+1]*2-1;d===0?ys.set(1,U,E):d===1?ys.set(-E,1,-U):d===2?ys.set(-E,U,1):d===3?ys.set(-1,U,-E):d===4?ys.set(-E,-1,U):ys.set(E,U,-1),ys.toArray(P,(d*m+R)*T)}}let A=new $n;A.setAttribute("position",new Vn(M,T)),A.setAttribute("outputDirection",new Vn(P,T)),e.push(new Un(A,null)),n>ar&&n--}return{lodMeshes:e,sizeLods:t}}function Gu(i,t,e){let n=new Wn(i,t,e);return n.texture.mapping=Qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Lm(i,t,e){return new Kn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Rm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:dl(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Dm(i,t,e){return new Kn({name:"SphericalGaussianBlur",defines:{SAMPLES:Cm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:dl(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Hu(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dl(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Wu(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dl(),fragmentShader:`

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
			`},s=new Ks(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:_s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kn,blending:wi});r.uniforms.tEquirect.value=e;let l=new Un(s,r),o=e.minFilter;return e.minFilter===Ti&&(e.minFilter=yn),new po(1,10,this).update(t,l),e.minFilter=o,l.geometry.dispose(),l.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let l=0;l<6;l++)t.setRenderTarget(this,l),t.clear(e,n,s);t.setRenderTarget(r)}};function Nm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(m,T=!1){return m==null?null:T?l(m):r(m)}function r(m){if(m&&m.isTexture){let T=m.mapping;if(T===xo||T===_o)if(t.has(m)){let M=t.get(m).texture;return o(M,m.mapping)}else{let M=m.image;if(M&&M.height>0){let P=new hl(M.height);return P.fromEquirectangularTexture(i,m),t.set(m,P),m.addEventListener("dispose",h),o(P.texture,m.mapping)}else return null}}return m}function l(m){if(m&&m.isTexture){let T=m.mapping,M=T===xo||T===_o,P=T===ns||T===xs;if(M||P){let A=e.get(m),d=A!==void 0?A.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==d)return n===null&&(n=new cl(i)),A=M?n.fromEquirectangular(m,A):n.fromCubemap(m,A),A.texture.pmremVersion=m.pmremVersion,e.set(m,A),A.texture;if(A!==void 0)return A.texture;{let C=m.image;return M&&C&&C.height>0||P&&C&&u(C)?(n===null&&(n=new cl(i)),A=M?n.fromEquirectangular(m):n.fromCubemap(m),A.texture.pmremVersion=m.pmremVersion,e.set(m,A),m.addEventListener("dispose",p),A.texture):null}}}return m}function o(m,T){return T===xo?m.mapping=ns:T===_o&&(m.mapping=xs),m}function u(m){let T=0,M=6;for(let P=0;P<M;P++)m[P]!==void 0&&T++;return T===M}function h(m){let T=m.target;T.removeEventListener("dispose",h);let M=t.get(T);M!==void 0&&(t.delete(T),M.dispose())}function p(m){let T=m.target;T.removeEventListener("dispose",p);let M=e.get(T);M!==void 0&&(e.delete(T),M.dispose())}function v(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:v}}function Um(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ds("WebGLRenderer: "+n+" extension not supported."),s}}}function Fm(i,t,e,n){let s={},r=new WeakMap;function l(v){let m=v.target;m.index!==null&&t.remove(m.index);for(let M in m.attributes)t.remove(m.attributes[M]);m.removeEventListener("dispose",l),delete s[m.id];let T=r.get(m);T&&(t.remove(T),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function o(v,m){return s[m.id]===!0||(m.addEventListener("dispose",l),s[m.id]=!0,e.memory.geometries++),m}function u(v){let m=v.attributes;for(let T in m)t.update(m[T],i.ARRAY_BUFFER)}function h(v){let m=[],T=v.index,M=v.attributes.position,P=0;if(M===void 0)return;if(T!==null){let C=T.array;P=T.version;for(let I=0,x=C.length;I<x;I+=3){let R=C[I+0],E=C[I+1],U=C[I+2];m.push(R,E,E,U,U,R)}}else{let C=M.array;P=M.version;for(let I=0,x=C.length/3-1;I<x;I+=3){let R=I+0,E=I+1,U=I+2;m.push(R,E,E,U,U,R)}}let A=new(M.count>=65535?Ur:Nr)(m,1);A.version=P;let d=r.get(v);d&&t.remove(d),r.set(v,A)}function p(v){let m=r.get(v);if(m){let T=v.index;T!==null&&m.version<T.version&&h(v)}else h(v);return r.get(v)}return{get:o,update:u,getWireframeAttribute:p}}function Om(i,t,e){let n;function s(v){n=v}let r,l;function o(v){r=v.type,l=v.bytesPerElement}function u(v,m){i.drawElements(n,m,r,v*l),e.update(m,n,1)}function h(v,m,T){T!==0&&(i.drawElementsInstanced(n,m,r,v*l,T),e.update(m,n,T))}function p(v,m,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,v,0,T);let P=0;for(let A=0;A<T;A++)P+=m[A];e.update(P,n,1)}this.setMode=s,this.setIndex=o,this.render=u,this.renderInstances=h,this.renderMultiDraw=p}function Bm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,l,o){switch(e.calls++,l){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:be("WebGLInfo: Unknown draw mode:",l);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function km(i,t,e){let n=new WeakMap,s=new un;function r(l,o,u){let h=l.morphTargetInfluences,p=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,v=p!==void 0?p.length:0,m=n.get(o);if(m===void 0||m.count!==v){let N=function(){U.dispose(),n.delete(o),o.removeEventListener("dispose",N)};m!==void 0&&m.texture.dispose();let T=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,P=o.morphAttributes.color!==void 0,A=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],C=o.morphAttributes.color||[],I=0;T===!0&&(I=1),M===!0&&(I=2),P===!0&&(I=3);let x=o.attributes.position.count*I,R=1;x>t.maxTextureSize&&(R=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let E=new Float32Array(x*R*4*v),U=new fs(E,x,R,v);U.type=ni,U.needsUpdate=!0;let _=I*4;for(let H=0;H<v;H++){let Y=A[H],b=d[H],J=C[H],X=x*R*4*H;for(let Z=0;Z<Y.count;Z++){let lt=Z*_;T===!0&&(s.fromBufferAttribute(Y,Z),E[X+lt+0]=s.x,E[X+lt+1]=s.y,E[X+lt+2]=s.z,E[X+lt+3]=0),M===!0&&(s.fromBufferAttribute(b,Z),E[X+lt+4]=s.x,E[X+lt+5]=s.y,E[X+lt+6]=s.z,E[X+lt+7]=0),P===!0&&(s.fromBufferAttribute(J,Z),E[X+lt+8]=s.x,E[X+lt+9]=s.y,E[X+lt+10]=s.z,E[X+lt+11]=J.itemSize===4?s.w:1)}}m={count:v,texture:U,size:new ke(x,R)},n.set(o,m),o.addEventListener("dispose",N)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",l.morphTexture,e);else{let T=0;for(let P=0;P<h.length;P++)T+=h[P];let M=o.morphTargetsRelative?1:1-T;u.getUniforms().setValue(i,"morphTargetBaseInfluence",M),u.getUniforms().setValue(i,"morphTargetInfluences",h)}u.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:r}}function zm(i,t,e,n,s){let r=new WeakMap;function l(h){let p=s.render.frame,v=h.geometry,m=t.get(h,v);if(r.get(m)!==p&&(t.update(m),r.set(m,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),r.get(h)!==p&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,p))),h.isSkinnedMesh){let T=h.skeleton;r.get(T)!==p&&(T.update(),r.set(T,p))}return m}function o(){r=new WeakMap}function u(h){let p=h.target;p.removeEventListener("dispose",u),n.releaseStatesOfObject(p),e.remove(p.instanceMatrix),p.instanceColor!==null&&e.remove(p.instanceColor)}return{update:l,dispose:o}}var Vm={[gc]:"LINEAR_TONE_MAPPING",[xc]:"REINHARD_TONE_MAPPING",[_c]:"CINEON_TONE_MAPPING",[jr]:"ACES_FILMIC_TONE_MAPPING",[vc]:"AGX_TONE_MAPPING",[Mc]:"NEUTRAL_TONE_MAPPING",[yc]:"CUSTOM_TONE_MAPPING"};function Gm(i,t,e,n,s,r){let l=new Wn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,u=null,h=new $n;h.setAttribute("position",new Gn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Gn([0,2,0,0,2,0],2));let p=new js({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new Un(h,p),m=new tr(-1,1,1,-1,0,1),T=null,M=null,P=!1,A,d=null,C=[],I=!1;this.setSize=function(x,R){l.setSize(x,R),o!==null&&o.setSize(x,R),u!==null&&u.setSize(x,R);for(let E=0;E<C.length;E++){let U=C[E];U.setSize&&U.setSize(x,R)}},this.setEffects=function(x){C=x,I=C.length>0&&C[0].isRenderPass===!0;let R=l.width,E=l.height;C.length>0&&o===null&&(o=new Wn(R,E,{type:pi,depthBuffer:!1,stencilBuffer:!1}),u=new Wn(R,E,{type:pi,depthBuffer:!1,stencilBuffer:!1}));for(let U=0;U<C.length;U++){let _=C[U];_.setSize&&_.setSize(R,E)}},this.begin=function(x,R){if(P||x.toneMapping===di&&C.length===0)return!1;if(d=R,R!==null){let E=R.width,U=R.height;(l.width!==E||l.height!==U)&&this.setSize(E,U)}return I===!1&&x.setRenderTarget(l),A=x.toneMapping,x.toneMapping=di,!0},this.hasRenderPass=function(){return I},this.end=function(x,R){x.toneMapping=A,P=!0;let E=l,U=o;for(let _=0;_<C.length;_++){let N=C[_];N.enabled!==!1&&(N.render(x,U,E,R),N.needsSwap!==!1&&(E=U,U=U===o?u:o))}if(T!==x.outputColorSpace||M!==x.toneMapping){T=x.outputColorSpace,M=x.toneMapping,p.defines={},He.getTransfer(T)===rn&&(p.defines.SRGB_TRANSFER="");let _=Vm[M];_&&(p.defines[_]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=E.texture,x.setRenderTarget(d),x.render(v,m),d=null,P=!1},this.isCompositing=function(){return P},this.dispose=function(){l.dispose(),o!==null&&o.dispose(),u!==null&&u.dispose(),h.dispose(),p.dispose()}}var hd=new Hn,qc=new Ki(1,1),ud=new fs,dd=new Qa,fd=new Gr,Xu=[],qu=[],Yu=new Float32Array(16),Zu=new Float32Array(9),Ju=new Float32Array(4);function lr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Xu[s];if(r===void 0&&(r=new Float32Array(s),Xu[s]=r),t!==0){n.toArray(r,0);for(let l=1,o=0;l!==t;++l)o+=e,i[l].toArray(r,o)}return r}function vn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Mn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function fl(i,t){let e=qu[t];e===void 0&&(e=new Int32Array(t),qu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Hm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Wm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(vn(e,t))return;i.uniform2fv(this.addr,t),Mn(e,t)}}function Xm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(vn(e,t))return;i.uniform3fv(this.addr,t),Mn(e,t)}}function qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(vn(e,t))return;i.uniform4fv(this.addr,t),Mn(e,t)}}function Ym(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(vn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Mn(e,t)}else{if(vn(e,n))return;Ju.set(n),i.uniformMatrix2fv(this.addr,!1,Ju),Mn(e,n)}}function Zm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(vn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Mn(e,t)}else{if(vn(e,n))return;Zu.set(n),i.uniformMatrix3fv(this.addr,!1,Zu),Mn(e,n)}}function Jm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(vn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Mn(e,t)}else{if(vn(e,n))return;Yu.set(n),i.uniformMatrix4fv(this.addr,!1,Yu),Mn(e,n)}}function $m(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Km(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(vn(e,t))return;i.uniform2iv(this.addr,t),Mn(e,t)}}function jm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(vn(e,t))return;i.uniform3iv(this.addr,t),Mn(e,t)}}function Qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(vn(e,t))return;i.uniform4iv(this.addr,t),Mn(e,t)}}function tg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(vn(e,t))return;i.uniform2uiv(this.addr,t),Mn(e,t)}}function ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(vn(e,t))return;i.uniform3uiv(this.addr,t),Mn(e,t)}}function ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(vn(e,t))return;i.uniform4uiv(this.addr,t),Mn(e,t)}}function sg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(qc.compareFunction=e.isReversedDepthBuffer()?rl:sl,r=qc):r=hd,e.setTexture2D(t||r,s)}function rg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||dd,s)}function ag(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||fd,s)}function og(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ud,s)}function lg(i){switch(i){case 5126:return Hm;case 35664:return Wm;case 35665:return Xm;case 35666:return qm;case 35674:return Ym;case 35675:return Zm;case 35676:return Jm;case 5124:case 35670:return $m;case 35667:case 35671:return Km;case 35668:case 35672:return jm;case 35669:case 35673:return Qm;case 5125:return tg;case 36294:return eg;case 36295:return ng;case 36296:return ig;case 35678:case 36198:case 36298:case 36306:case 35682:return sg;case 35679:case 36299:case 36307:return rg;case 35680:case 36300:case 36308:case 36293:return ag;case 36289:case 36303:case 36311:case 36292:return og}}function cg(i,t){i.uniform1fv(this.addr,t)}function hg(i,t){let e=lr(t,this.size,2);i.uniform2fv(this.addr,e)}function ug(i,t){let e=lr(t,this.size,3);i.uniform3fv(this.addr,e)}function dg(i,t){let e=lr(t,this.size,4);i.uniform4fv(this.addr,e)}function fg(i,t){let e=lr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function pg(i,t){let e=lr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function mg(i,t){let e=lr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function gg(i,t){i.uniform1iv(this.addr,t)}function xg(i,t){i.uniform2iv(this.addr,t)}function _g(i,t){i.uniform3iv(this.addr,t)}function yg(i,t){i.uniform4iv(this.addr,t)}function vg(i,t){i.uniform1uiv(this.addr,t)}function Mg(i,t){i.uniform2uiv(this.addr,t)}function bg(i,t){i.uniform3uiv(this.addr,t)}function Sg(i,t){i.uniform4uiv(this.addr,t)}function wg(i,t,e){let n=this.cache,s=t.length,r=fl(e,s);vn(n,r)||(i.uniform1iv(this.addr,r),Mn(n,r));let l;this.type===i.SAMPLER_2D_SHADOW?l=qc:l=hd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||l,r[o])}function Tg(i,t,e){let n=this.cache,s=t.length,r=fl(e,s);vn(n,r)||(i.uniform1iv(this.addr,r),Mn(n,r));for(let l=0;l!==s;++l)e.setTexture3D(t[l]||dd,r[l])}function Eg(i,t,e){let n=this.cache,s=t.length,r=fl(e,s);vn(n,r)||(i.uniform1iv(this.addr,r),Mn(n,r));for(let l=0;l!==s;++l)e.setTextureCube(t[l]||fd,r[l])}function Ag(i,t,e){let n=this.cache,s=t.length,r=fl(e,s);vn(n,r)||(i.uniform1iv(this.addr,r),Mn(n,r));for(let l=0;l!==s;++l)e.setTexture2DArray(t[l]||ud,r[l])}function Cg(i){switch(i){case 5126:return cg;case 35664:return hg;case 35665:return ug;case 35666:return dg;case 35674:return fg;case 35675:return pg;case 35676:return mg;case 5124:case 35670:return gg;case 35667:case 35671:return xg;case 35668:case 35672:return _g;case 35669:case 35673:return yg;case 5125:return vg;case 36294:return Mg;case 36295:return bg;case 36296:return Sg;case 35678:case 36198:case 36298:case 36306:case 35682:return wg;case 35679:case 36299:case 36307:return Tg;case 35680:case 36300:case 36308:case 36293:return Eg;case 36289:case 36303:case 36311:case 36292:return Ag}}var Yc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=lg(e.type)}},Zc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Cg(e.type)}},Jc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,l=s.length;r!==l;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Wc=/(\w+)(\])?(\[|\.)?/g;function $u(i,t){i.seq.push(t),i.map[t.id]=t}function Rg(i,t,e){let n=i.name,s=n.length;for(Wc.lastIndex=0;;){let r=Wc.exec(n),l=Wc.lastIndex,o=r[1],u=r[2]==="]",h=r[3];if(u&&(o=o|0),h===void 0||h==="["&&l+2===s){$u(e,h===void 0?new Yc(o,i,t):new Zc(o,i,t));break}else{let v=e.map[o];v===void 0&&(v=new Jc(o),$u(e,v)),e=v}}}var or=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let l=0;l<n;++l){let o=t.getActiveUniform(e,l),u=t.getUniformLocation(e,o.name);Rg(o,u,this)}let s=[],r=[];for(let l of this.seq)l.type===t.SAMPLER_2D_SHADOW||l.type===t.SAMPLER_CUBE_SHADOW||l.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(l):r.push(l);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,l=e.length;r!==l;++r){let o=e[r],u=n[o.id];u.needsUpdate!==!1&&o.setValue(t,u.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let l=t[s];l.id in e&&n.push(l)}return n}};function Ku(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Ig=37297,Pg=0;function Lg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let l=s;l<r;l++){let o=l+1;n.push(`${o===t?">":" "} ${o}: ${e[l]}`)}return n.join(`
`)}var ju=new Re;function Dg(i){He._getMatrix(ju,He.workingColorSpace,i);let t=`mat3( ${ju.elements.map(e=>e.toFixed(4))} )`;switch(He.getTransfer(i)){case Rr:return[t,"LinearTransferOETF"];case rn:return[t,"sRGBTransferOETF"];default:return Se("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Qu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let l=/ERROR: 0:(\d+)/.exec(r);if(l){let o=parseInt(l[1]);return e.toUpperCase()+`

`+r+`

`+Lg(i.getShaderSource(t),o)}else return r}function Ng(i,t){let e=Dg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Ug={[gc]:"Linear",[xc]:"Reinhard",[_c]:"Cineon",[jr]:"ACESFilmic",[vc]:"AgX",[Mc]:"Neutral",[yc]:"Custom"};function Fg(i,t){let e=Ug[t];return e===void 0?(Se("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ll=new at;function Og(){He.getLuminanceCoefficients(ll);let i=ll.x.toFixed(4),t=ll.y.toFixed(4),e=ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ha).join(`
`)}function kg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function zg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),l=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[l]={type:r.type,location:i.getAttribLocation(t,l),locationSize:o}}return e}function ha(i){return i!==""}function td(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ed(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Vg=/^[ \t]*#include +<([\w\d./]+)>/gm;function $c(i){return i.replace(Vg,Hg)}var Gg=new Map;function Hg(i,t){let e=De[t];if(e===void 0){let n=Gg.get(t);if(n!==void 0)e=De[n],Se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return $c(e)}var Wg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nd(i){return i.replace(Wg,Xg)}function Xg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function id(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var qg={[ms]:"SHADOWMAP_TYPE_PCF",[er]:"SHADOWMAP_TYPE_VSM"};function Yg(i){return qg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Zg={[ns]:"ENVMAP_TYPE_CUBE",[xs]:"ENVMAP_TYPE_CUBE",[Qr]:"ENVMAP_TYPE_CUBE_UV"};function Jg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Zg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var $g={[xs]:"ENVMAP_MODE_REFRACTION"};function Kg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":$g[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var jg={[mc]:"ENVMAP_BLENDING_MULTIPLY",[Mu]:"ENVMAP_BLENDING_MIX",[bu]:"ENVMAP_BLENDING_ADD"};function Qg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":jg[i.combine]||"ENVMAP_BLENDING_NONE"}function t1(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function e1(i,t,e,n){let s=i.getContext(),r=e.defines,l=e.vertexShader,o=e.fragmentShader,u=Yg(e),h=Jg(e),p=Kg(e),v=Qg(e),m=t1(e),T=Bg(e),M=kg(r),P=s.createProgram(),A,d,C=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(A=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(ha).join(`
`),A.length>0&&(A+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(ha).join(`
`),d.length>0&&(d+=`
`)):(A=[id(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ha).join(`
`),d=[id(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",e.envMap?"#define "+v:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?De.tonemapping_pars_fragment:"",e.toneMapping!==di?Fg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,Ng("linearToOutputTexel",e.outputColorSpace),Og(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ha).join(`
`)),l=$c(l),l=td(l,e),l=ed(l,e),o=$c(o),o=td(o,e),o=ed(o,e),l=nd(l),o=nd(o),e.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,A=[T,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+A,d=["#define varying in",e.glslVersion===oa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===oa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let I=C+A+l,x=C+d+o,R=Ku(s,s.VERTEX_SHADER,I),E=Ku(s,s.FRAGMENT_SHADER,x);s.attachShader(P,R),s.attachShader(P,E),e.index0AttributeName!==void 0?s.bindAttribLocation(P,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(P,0,"position"),s.linkProgram(P);function U(Y){if(i.debug.checkShaderErrors){let b=s.getProgramInfoLog(P)||"",J=s.getShaderInfoLog(R)||"",X=s.getShaderInfoLog(E)||"",Z=b.trim(),lt=J.trim(),ht=X.trim(),Mt=!0,$=!0;if(s.getProgramParameter(P,s.LINK_STATUS)===!1)if(Mt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,P,R,E);else{let y=Qu(s,R,"vertex"),bt=Qu(s,E,"fragment");be("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(P,s.VALIDATE_STATUS)+`

Material Name: `+Y.name+`
Material Type: `+Y.type+`

Program Info Log: `+Z+`
`+y+`
`+bt)}else Z!==""?Se("WebGLProgram: Program Info Log:",Z):(lt===""||ht==="")&&($=!1);$&&(Y.diagnostics={runnable:Mt,programLog:Z,vertexShader:{log:lt,prefix:A},fragmentShader:{log:ht,prefix:d}})}s.deleteShader(R),s.deleteShader(E),_=new or(s,P),N=zg(s,P)}let _;this.getUniforms=function(){return _===void 0&&U(this),_};let N;this.getAttributes=function(){return N===void 0&&U(this),N};let H=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=s.getProgramParameter(P,Ig)),H},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(P),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Pg++,this.cacheKey=t,this.usedTimes=1,this.program=P,this.vertexShader=R,this.fragmentShader=E,this}var n1=0,Kc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new jc(t),e.set(t,n)),n}},jc=class{constructor(t){this.id=n1++,this.code=t,this.usedTimes=0}};function i1(i){return i===ss||i===ra||i===aa}function s1(i,t,e,n,s,r){let l=new Zs,o=new Kc,u=new Set,h=[],p=new Map,v=n.logarithmicDepthBuffer,m=n.precision,T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(_){return u.add(_),_===0?"uv":`uv${_}`}function P(_,N,H,Y,b,J){let X=Y.fog,Z=b.geometry,lt=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?Y.environment:null,ht=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,Mt=t.get(_.envMap||lt,ht),$=Mt&&Mt.mapping===Qr?Mt.image.height:null,y=T[_.type];_.precision!==null&&(m=n.getMaxPrecision(_.precision),m!==_.precision&&Se("WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));let bt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Yt=bt!==void 0?bt.length:0,At=0;Z.morphAttributes.position!==void 0&&(At=1),Z.morphAttributes.normal!==void 0&&(At=2),Z.morphAttributes.color!==void 0&&(At=3);let K,ge,Ne,gt;if(y){let pe=Ai[y];K=pe.vertexShader,ge=pe.fragmentShader}else{K=_.vertexShader,ge=_.fragmentShader;let pe=o.getVertexShaderStage(_),Me=o.getFragmentShaderStage(_);o.update(_,pe,Me),Ne=pe.id,gt=Me.id}let pt=i.getRenderTarget(),Kt=i.state.buffers.depth.getReversed(),ae=b.isInstancedMesh===!0,Zt=b.isBatchedMesh===!0,Ee=!!_.map,Ue=!!_.matcap,qt=!!Mt,Be=!!_.aoMap,we=!!_.lightMap,_e=!!_.bumpMap&&_.wireframe===!1,xe=!!_.normalMap,Ie=!!_.displacementMap,Qe=!!_.emissiveMap,Ae=!!_.metalnessMap,tn=!!_.roughnessMap,tt=_.anisotropy>0,Xe=_.clearcoat>0,Pe=_.dispersion>0,k=_.retroreflectivity>0,w=_.iridescence>0,st=_.sheen>0,rt=_.transmission>0,ct=tt&&!!_.anisotropyMap,zt=Xe&&!!_.clearcoatMap,It=Xe&&!!_.clearcoatNormalMap,ft=Xe&&!!_.clearcoatRoughnessMap,vt=w&&!!_.iridescenceMap,Gt=w&&!!_.iridescenceThicknessMap,jt=st&&!!_.sheenColorMap,Rt=st&&!!_.sheenRoughnessMap,kt=!!_.specularMap,Qt=!!_.specularColorMap,xt=!!_.specularIntensityMap,Lt=rt&&!!_.transmissionMap,G=rt&&!!_.thicknessMap,Et=!!_.gradientMap,mt=!!_.alphaMap,Tt=_.alphaTest>0,Dt=!!_.alphaHash,wt=!!_.extensions,ie=di;_.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(ie=i.toneMapping);let te={shaderID:y,shaderType:_.type,shaderName:_.name,vertexShader:K,fragmentShader:ge,defines:_.defines,customVertexShaderID:Ne,customFragmentShaderID:gt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,batching:Zt,batchingColor:Zt&&b._colorsTexture!==null,instancing:ae,instancingColor:ae&&b.instanceColor!==null,instancingMorph:ae&&b.morphTexture!==null,outputColorSpace:pt===null?i.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:He.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ee,matcap:Ue,envMap:qt,envMapMode:qt&&Mt.mapping,envMapCubeUVHeight:$,aoMap:Be,lightMap:we,bumpMap:_e,normalMap:xe,displacementMap:Ie,emissiveMap:Qe,normalMapObjectSpace:xe&&_.normalMapType===Tu,normalMapTangentSpace:xe&&_.normalMapType===il,packedNormalMap:xe&&_.normalMapType===il&&i1(_.normalMap.format),metalnessMap:Ae,roughnessMap:tn,anisotropy:tt,anisotropyMap:ct,clearcoat:Xe,clearcoatMap:zt,clearcoatNormalMap:It,clearcoatRoughnessMap:ft,dispersion:Pe,retroreflection:k,iridescence:w,iridescenceMap:vt,iridescenceThicknessMap:Gt,sheen:st,sheenColorMap:jt,sheenRoughnessMap:Rt,specularMap:kt,specularColorMap:Qt,specularIntensityMap:xt,transmission:rt,transmissionMap:Lt,thicknessMap:G,gradientMap:Et,opaque:_.transparent===!1&&_.blending===nr&&_.alphaToCoverage===!1,alphaMap:mt,alphaTest:Tt,alphaHash:Dt,combine:_.combine,mapUv:Ee&&M(_.map.channel),aoMapUv:Be&&M(_.aoMap.channel),lightMapUv:we&&M(_.lightMap.channel),bumpMapUv:_e&&M(_.bumpMap.channel),normalMapUv:xe&&M(_.normalMap.channel),displacementMapUv:Ie&&M(_.displacementMap.channel),emissiveMapUv:Qe&&M(_.emissiveMap.channel),metalnessMapUv:Ae&&M(_.metalnessMap.channel),roughnessMapUv:tn&&M(_.roughnessMap.channel),anisotropyMapUv:ct&&M(_.anisotropyMap.channel),clearcoatMapUv:zt&&M(_.clearcoatMap.channel),clearcoatNormalMapUv:It&&M(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&M(_.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&M(_.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&M(_.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&M(_.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&M(_.sheenRoughnessMap.channel),specularMapUv:kt&&M(_.specularMap.channel),specularColorMapUv:Qt&&M(_.specularColorMap.channel),specularIntensityMapUv:xt&&M(_.specularIntensityMap.channel),transmissionMapUv:Lt&&M(_.transmissionMap.channel),thicknessMapUv:G&&M(_.thicknessMap.channel),alphaMapUv:mt&&M(_.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(xe||tt),vertexNormals:!!Z.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:b.isPoints===!0&&!!Z.attributes.uv&&(Ee||mt),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||Z.attributes.normal===void 0&&xe===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Kt,skinning:b.isSkinnedMesh===!0,hasPositionAttribute:Z.attributes.position!==void 0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Yt,morphTextureStride:At,numSunLights:N.sun.length,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numSunLightShadows:N.sunShadowMap.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:J.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:ie,decodeVideoTexture:Ee&&_.map.isVideoTexture===!0&&He.getTransfer(_.map.colorSpace)===rn,decodeVideoTextureEmissive:Qe&&_.emissiveMap.isVideoTexture===!0&&He.getTransfer(_.emissiveMap.colorSpace)===rn,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Qn,flipSided:_.side===kn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:wt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&_.extensions.multiDraw===!0||Zt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return te.vertexUv1s=u.has(1),te.vertexUv2s=u.has(2),te.vertexUv3s=u.has(3),u.clear(),te}function A(_){let N=[];if(_.shaderID?N.push(_.shaderID):(N.push(_.customVertexShaderID),N.push(_.customFragmentShaderID)),_.defines!==void 0)for(let H in _.defines)N.push(H),N.push(_.defines[H]);return _.isRawShaderMaterial===!1&&(d(N,_),C(N,_),N.push(i.outputColorSpace)),N.push(_.customProgramCacheKey),N.join()}function d(_,N){_.push(N.precision),_.push(N.outputColorSpace),_.push(N.envMapMode),_.push(N.envMapCubeUVHeight),_.push(N.mapUv),_.push(N.alphaMapUv),_.push(N.lightMapUv),_.push(N.aoMapUv),_.push(N.bumpMapUv),_.push(N.normalMapUv),_.push(N.displacementMapUv),_.push(N.emissiveMapUv),_.push(N.metalnessMapUv),_.push(N.roughnessMapUv),_.push(N.anisotropyMapUv),_.push(N.clearcoatMapUv),_.push(N.clearcoatNormalMapUv),_.push(N.clearcoatRoughnessMapUv),_.push(N.iridescenceMapUv),_.push(N.iridescenceThicknessMapUv),_.push(N.sheenColorMapUv),_.push(N.sheenRoughnessMapUv),_.push(N.specularMapUv),_.push(N.specularColorMapUv),_.push(N.specularIntensityMapUv),_.push(N.transmissionMapUv),_.push(N.thicknessMapUv),_.push(N.combine),_.push(N.fogExp2),_.push(N.sizeAttenuation),_.push(N.morphTargetsCount),_.push(N.morphAttributeCount),_.push(N.numSunLights),_.push(N.numDirLights),_.push(N.numPointLights),_.push(N.numSpotLights),_.push(N.numSpotLightMaps),_.push(N.numHemiLights),_.push(N.numRectAreaLights),_.push(N.numSunLightShadows),_.push(N.numDirLightShadows),_.push(N.numPointLightShadows),_.push(N.numSpotLightShadows),_.push(N.numSpotLightShadowsWithMaps),_.push(N.numLightProbes),_.push(N.shadowMapType),_.push(N.toneMapping),_.push(N.numClippingPlanes),_.push(N.numClipIntersection),_.push(N.depthPacking)}function C(_,N){l.disableAll(),N.instancing&&l.enable(0),N.instancingColor&&l.enable(1),N.instancingMorph&&l.enable(2),N.matcap&&l.enable(3),N.envMap&&l.enable(4),N.normalMapObjectSpace&&l.enable(5),N.normalMapTangentSpace&&l.enable(6),N.clearcoat&&l.enable(7),N.iridescence&&l.enable(8),N.alphaTest&&l.enable(9),N.vertexColors&&l.enable(10),N.vertexAlphas&&l.enable(11),N.vertexUv1s&&l.enable(12),N.vertexUv2s&&l.enable(13),N.vertexUv3s&&l.enable(14),N.vertexTangents&&l.enable(15),N.anisotropy&&l.enable(16),N.alphaHash&&l.enable(17),N.batching&&l.enable(18),N.dispersion&&l.enable(19),N.retroreflection&&l.enable(24),N.batchingColor&&l.enable(20),N.gradientMap&&l.enable(21),N.packedNormalMap&&l.enable(22),N.vertexNormals&&l.enable(23),_.push(l.mask),l.disableAll(),N.fog&&l.enable(0),N.useFog&&l.enable(1),N.flatShading&&l.enable(2),N.logarithmicDepthBuffer&&l.enable(3),N.reversedDepthBuffer&&l.enable(4),N.skinning&&l.enable(5),N.morphTargets&&l.enable(6),N.morphNormals&&l.enable(7),N.morphColors&&l.enable(8),N.premultipliedAlpha&&l.enable(9),N.shadowMapEnabled&&l.enable(10),N.doubleSided&&l.enable(11),N.flipSided&&l.enable(12),N.useDepthPacking&&l.enable(13),N.dithering&&l.enable(14),N.transmission&&l.enable(15),N.sheen&&l.enable(16),N.opaque&&l.enable(17),N.pointsUvs&&l.enable(18),N.decodeVideoTexture&&l.enable(19),N.decodeVideoTextureEmissive&&l.enable(20),N.alphaToCoverage&&l.enable(21),N.numLightProbeGrids>0&&l.enable(22),N.hasPositionAttribute&&l.enable(23),_.push(l.mask)}function I(_){let N=T[_.type],H;if(N){let Y=Ai[N];H=Bu.clone(Y.uniforms)}else H=_.uniforms;return H}function x(_,N){let H=p.get(N);return H!==void 0?++H.usedTimes:(H=new e1(i,N,_,s),h.push(H),p.set(N,H)),H}function R(_){if(--_.usedTimes===0){let N=h.indexOf(_);h[N]=h[h.length-1],h.pop(),p.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function U(){o.dispose()}return{getParameters:P,getProgramCacheKey:A,getUniforms:I,acquireProgram:x,releaseProgram:R,releaseShaderCache:E,programs:h,dispose:U}}function r1(){let i=new WeakMap;function t(l){return i.has(l)}function e(l){let o=i.get(l);return o===void 0&&(o={},i.set(l,o)),o}function n(l){i.delete(l)}function s(l,o,u){i.get(l)[o]=u}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function a1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function sd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function rd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function l(m){let T=0;return m.isInstancedMesh&&(T+=2),m.isSkinnedMesh&&(T+=1),T}function o(m,T,M,P,A,d){let C=i[t];return C===void 0?(C={id:m.id,object:m,geometry:T,material:M,materialVariant:l(m),groupOrder:P,renderOrder:m.renderOrder,z:A,group:d},i[t]=C):(C.id=m.id,C.object=m,C.geometry=T,C.material=M,C.materialVariant=l(m),C.groupOrder=P,C.renderOrder=m.renderOrder,C.z=A,C.group=d),t++,C}function u(m,T,M,P,A,d,C){C.reversedDepth===!0&&(A=-A);let I=o(m,T,M,P,A,d);M.transmission>0?n.push(I):M.transparent===!0?s.push(I):e.push(I)}function h(m,T,M,P,A,d){let C=o(m,T,M,P,A,d);M.transmission>0?n.unshift(C):M.transparent===!0?s.unshift(C):e.unshift(C)}function p(m,T){e.length>1&&e.sort(m||a1),n.length>1&&n.sort(T||sd),s.length>1&&s.sort(T||sd)}function v(){for(let m=t,T=i.length;m<T;m++){let M=i[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:u,unshift:h,finish:v,sort:p}}function o1(){let i=new WeakMap;function t(n,s){let r=i.get(n),l;return r===void 0?(l=new rd,i.set(n,[l])):s>=r.length?(l=new rd,r.push(l)):l=r[s],l}function e(){i=new WeakMap}return{get:t,dispose:e}}function l1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new at,color:new Le};break;case"SpotLight":e={position:new at,direction:new at,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new at,color:new Le,distance:0,decay:0};break;case"HemisphereLight":e={direction:new at,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":e={color:new Le,position:new at,halfWidth:new at,halfHeight:new at};break}return i[t.id]=e,e}}}function c1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var h1=0;function u1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function d1(i){let t=new l1,e=c1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new at);let s=new at,r=new Je,l=new Je;function o(h){let p=0,v=0,m=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let T=0,M=0,P=0,A=0,d=0,C=0,I=0,x=0,R=0,E=0,U=0,_=0,N=0,H=0;h.sort(u1);for(let b=0,J=h.length;b<J;b++){let X=h[b],Z=X.color,lt=X.intensity,ht=X.distance,Mt=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===ss?Mt=X.shadow.map.texture:Mt=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)p+=Z.r*lt,v+=Z.g*lt,m+=Z.b*lt;else if(X.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(X.sh.coefficients[$],lt);H++}else if(X.isSunLight){let $=t.get(X);if($.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){let y=X.shadow,bt=e.get(X);bt.shadowIntensity=y.intensity,bt.shadowBias=y.bias,bt.shadowNormalBias=y.normalBias,bt.shadowRadius=y.radius,bt.shadowMapSize.copy(y.mapSize).multiply(y.getFrameExtents()),n.sunShadow[M]=bt,n.sunShadowMap[M]=Mt;let Yt=y.getViewportCount();for(let At=0;At<Yt;At++)n.sunShadowMatrix[P+At]=y.getMatrix(At),n.sunShadowCascade[P+At]=y._cascadeData[At];P+=Yt,M++}n.sun[T]=$,T++}else if(X.isDirectionalLight){let $=t.get(X);if($.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){let y=X.shadow,bt=e.get(X);bt.shadowIntensity=y.intensity,bt.shadowBias=y.bias,bt.shadowNormalBias=y.normalBias,bt.shadowRadius=y.radius,bt.shadowMapSize=y.mapSize,n.directionalShadow[A]=bt,n.directionalShadowMap[A]=Mt,n.directionalShadowMatrix[A]=X.shadow.matrix,R++}n.directional[A]=$,A++}else if(X.isSpotLight){let $=t.get(X);$.position.setFromMatrixPosition(X.matrixWorld),$.color.copy(Z).multiplyScalar(lt),$.distance=ht,$.coneCos=Math.cos(X.angle),$.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),$.decay=X.decay,n.spot[C]=$;let y=X.shadow;if(X.map&&(n.spotLightMap[_]=X.map,_++,y.updateMatrices(X),X.castShadow&&N++),n.spotLightMatrix[C]=y.matrix,X.castShadow){let bt=e.get(X);bt.shadowIntensity=y.intensity,bt.shadowBias=y.bias,bt.shadowNormalBias=y.normalBias,bt.shadowRadius=y.radius,bt.shadowMapSize=y.mapSize,n.spotShadow[C]=bt,n.spotShadowMap[C]=Mt,U++}C++}else if(X.isRectAreaLight){let $=t.get(X);$.color.copy(Z).multiplyScalar(lt),$.halfWidth.set(X.width*.5,0,0),$.halfHeight.set(0,X.height*.5,0),n.rectArea[I]=$,I++}else if(X.isPointLight){let $=t.get(X);if($.color.copy(X.color).multiplyScalar(X.intensity),$.distance=X.distance,$.decay=X.decay,X.castShadow){let y=X.shadow,bt=e.get(X);bt.shadowIntensity=y.intensity,bt.shadowBias=y.bias,bt.shadowNormalBias=y.normalBias,bt.shadowRadius=y.radius,bt.shadowMapSize=y.mapSize,bt.shadowCameraNear=y.camera.near,bt.shadowCameraFar=y.camera.far,n.pointShadow[d]=bt,n.pointShadowMap[d]=Mt,n.pointShadowMatrix[d]=X.shadow.matrix,E++}n.point[d]=$,d++}else if(X.isHemisphereLight){let $=t.get(X);$.skyColor.copy(X.color).multiplyScalar(lt),$.groundColor.copy(X.groundColor).multiplyScalar(lt),n.hemi[x]=$,x++}}I>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ne.LTC_FLOAT_1,n.rectAreaLTC2=ne.LTC_FLOAT_2):(n.rectAreaLTC1=ne.LTC_HALF_1,n.rectAreaLTC2=ne.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=v,n.ambient[2]=m;let Y=n.hash;(Y.sunLength!==T||Y.directionalLength!==A||Y.pointLength!==d||Y.spotLength!==C||Y.rectAreaLength!==I||Y.hemiLength!==x||Y.numSunShadows!==M||Y.numDirectionalShadows!==R||Y.numPointShadows!==E||Y.numSpotShadows!==U||Y.numSpotMaps!==_||Y.numLightProbes!==H)&&(n.sun.length=T,n.directional.length=A,n.spot.length=C,n.rectArea.length=I,n.point.length=d,n.hemi.length=x,n.sunShadow.length=M,n.sunShadowMap.length=M,n.sunShadowMatrix.length=P,n.sunShadowCascade.length=P,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=U,n.spotShadowMap.length=U,n.spotLightMatrix.length=U+_-N,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=H,Y.sunLength=T,Y.directionalLength=A,Y.pointLength=d,Y.spotLength=C,Y.rectAreaLength=I,Y.hemiLength=x,Y.numSunShadows=M,Y.numDirectionalShadows=R,Y.numPointShadows=E,Y.numSpotShadows=U,Y.numSpotMaps=_,Y.numLightProbes=H,n.version=h1++)}function u(h,p){let v=0,m=0,T=0,M=0,P=0,A=0,d=p.matrixWorldInverse;for(let C=0,I=h.length;C<I;C++){let x=h[C];if(x.isSunLight){let R=n.sun[v];R.direction.setFromMatrixPosition(x.matrixWorld),R.direction.transformDirection(d),v++}else if(x.isDirectionalLight){let R=n.directional[m];R.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(d),m++}else if(x.isSpotLight){let R=n.spot[M];R.position.setFromMatrixPosition(x.matrixWorld),R.position.applyMatrix4(d),R.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(d),M++}else if(x.isRectAreaLight){let R=n.rectArea[P];R.position.setFromMatrixPosition(x.matrixWorld),R.position.applyMatrix4(d),l.identity(),r.copy(x.matrixWorld),r.premultiply(d),l.extractRotation(r),R.halfWidth.set(x.width*.5,0,0),R.halfHeight.set(0,x.height*.5,0),R.halfWidth.applyMatrix4(l),R.halfHeight.applyMatrix4(l),P++}else if(x.isPointLight){let R=n.point[T];R.position.setFromMatrixPosition(x.matrixWorld),R.position.applyMatrix4(d),T++}else if(x.isHemisphereLight){let R=n.hemi[A];R.direction.setFromMatrixPosition(x.matrixWorld),R.direction.transformDirection(d),A++}}}return{setup:o,setupView:u,state:n}}function ad(i){let t=new d1(i),e=[],n=[],s=[];function r(m){v.camera=m,e.length=0,n.length=0,s.length=0}function l(m){e.push(m)}function o(m){n.push(m)}function u(m){s.push(m)}function h(){t.setup(e)}function p(m){t.setupView(e,m)}let v={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:v,setupLights:h,setupLightsView:p,pushLight:l,pushShadow:o,pushLightProbeGrid:u}}function f1(i){let t=new WeakMap;function e(s,r=0){let l=t.get(s),o;return l===void 0?(o=new ad(i),t.set(s,[o])):r>=l.length?(o=new ad(i),l.push(o)):o=l[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var p1=`void main() {
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
}`,g1=[new at(1,0,0),new at(-1,0,0),new at(0,1,0),new at(0,-1,0),new at(0,0,1),new at(0,0,-1)],x1=[new at(0,-1,0),new at(0,-1,0),new at(0,0,1),new at(0,0,-1),new at(0,-1,0),new at(0,-1,0)],od=new Je,ca=new at,Xc=new at;function _1(i,t,e){let n=new $s,s=new ke,r=new ke,l=new un,o=new Qs,u=new eo,h={},p=e.maxTextureSize,v={[es]:kn,[kn]:es,[Qn]:Qn},m=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:p1,fragmentShader:m1}),T=m.clone();T.defines.HORIZONTAL_PASS=1;let M=new $n;M.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let P=new Un(M,m),A=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ms;let d=this.type;this.render=function(E,U,_){if(A.enabled===!1||A.autoUpdate===!1&&A.needsUpdate===!1||E.length===0)return;this.type===nu&&(Se("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ms);let N=i.getRenderTarget(),H=i.getActiveCubeFace(),Y=i.getActiveMipmapLevel(),b=i.state;b.setBlending(wi),b.buffers.depth.getReversed()===!0?b.buffers.color.setClear(0,0,0,0):b.buffers.color.setClear(1,1,1,1),b.buffers.depth.setTest(!0),b.setScissorTest(!1);let J=d!==this.type;J&&U.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(Z=>Z.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,Z=E.length;X<Z;X++){let lt=E[X],ht=lt.shadow;if(ht===void 0){Se("WebGLShadowMap:",lt,"has no shadow.");continue}if(ht.autoUpdate===!1&&ht.needsUpdate===!1)continue;s.copy(ht.mapSize);let Mt=ht.getFrameExtents();s.multiply(Mt),r.copy(ht.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(r.x=Math.floor(p/Mt.x),s.x=r.x*Mt.x,ht.mapSize.x=r.x),s.y>p&&(r.y=Math.floor(p/Mt.y),s.y=r.y*Mt.y,ht.mapSize.y=r.y));let $=i.state.buffers.depth.getReversed();if(ht.camera._reversedDepth=$,ht.map===null||J===!0){if(ht.map!==null&&(ht.map.depthTexture!==null&&(ht.map.depthTexture.dispose(),ht.map.depthTexture=null),ht.map.dispose()),this.type===er){if(lt.isPointLight){Se("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ht.map=new Wn(s.x,s.y,{format:ss,type:pi,minFilter:yn,magFilter:yn,generateMipmaps:!1}),ht.map.texture.name=lt.name+".shadowMap",ht.map.depthTexture=new Ki(s.x,s.y,ni),ht.map.depthTexture.name=lt.name+".shadowMapDepth",ht.map.depthTexture.format=vi,ht.map.depthTexture.compareFunction=null,ht.map.depthTexture.minFilter=wn,ht.map.depthTexture.magFilter=wn}else lt.isPointLight?(ht.map=new hl(s.x),ht.map.depthTexture=new to(s.x,fi)):(ht.map=new Wn(s.x,s.y),ht.map.depthTexture=new Ki(s.x,s.y,fi)),ht.map.depthTexture.name=lt.name+".shadowMap",ht.map.depthTexture.format=vi,this.type===ms?(ht.map.depthTexture.compareFunction=$?rl:sl,ht.map.depthTexture.minFilter=yn,ht.map.depthTexture.magFilter=yn):(ht.map.depthTexture.compareFunction=null,ht.map.depthTexture.minFilter=wn,ht.map.depthTexture.magFilter=wn);ht.camera.updateProjectionMatrix()}ht.map.isWebGLCubeRenderTarget!==!0&&(ht.map.width!==s.x||ht.map.height!==s.y)&&ht.map.setSize(s.x,s.y);let y=ht.map.isWebGLCubeRenderTarget?6:ht.getViewportCount();lt.isPointLight!==!0&&ht.updateMatrices(lt,_);for(let bt=0;bt<y;bt++){let Yt=ht.getCamera(bt);if(lt.isPointLight){let At=ht.camera,K=ht.matrix,ge=lt.distance||At.far;ge!==At.far&&(At.far=ge,At.updateProjectionMatrix()),ca.setFromMatrixPosition(lt.matrixWorld),At.position.copy(ca),Xc.copy(At.position),Xc.add(g1[bt]),At.up.copy(x1[bt]),At.lookAt(Xc),At.updateMatrixWorld(),K.makeTranslation(-ca.x,-ca.y,-ca.z),od.multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse),ht._frustum.setFromProjectionMatrix(od,At.coordinateSystem,At.reversedDepth)}if(ht.map.isWebGLCubeRenderTarget)i.setRenderTarget(ht.map,bt),i.clear();else{bt===0&&(i.setRenderTarget(ht.map),i.clear());let At=ht.getViewport(bt);l.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),b.viewport(l)}n=ht.getFrustum(bt),x(U,_,Yt,lt,this.type)}ht.isPointLightShadow!==!0&&this.type===er&&C(ht,_),ht.needsUpdate=!1}d=this.type,A.needsUpdate=!1,i.setRenderTarget(N,H,Y)};function C(E,U){let _=t.update(P);m.defines.VSM_SAMPLES!==E.blurSamples&&(m.defines.VSM_SAMPLES=E.blurSamples,T.defines.VSM_SAMPLES=E.blurSamples,m.needsUpdate=!0,T.needsUpdate=!0),E.mapPass===null?E.mapPass=new Wn(s.x,s.y,{format:ss,type:pi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),m.uniforms.shadow_pass.value=E.map.depthTexture,m.uniforms.resolution.value.set(E.map.width,E.map.height),m.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(U,null,_,m,P,null),T.uniforms.shadow_pass.value=E.mapPass.texture,T.uniforms.resolution.value.set(E.map.width,E.map.height),T.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(U,null,_,T,P,null)}function I(E,U,_,N){let H=null,Y=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(Y!==void 0)H=Y;else if(H=_.isPointLight===!0?u:o,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){let b=H.uuid,J=U.uuid,X=h[b];X===void 0&&(X={},h[b]=X);let Z=X[J];Z===void 0&&(Z=H.clone(),X[J]=Z,U.addEventListener("dispose",R)),H=Z}if(H.visible=U.visible,H.wireframe=U.wireframe,N===er?H.side=U.shadowSide!==null?U.shadowSide:U.side:H.side=U.shadowSide!==null?U.shadowSide:v[U.side],H.alphaMap=U.alphaMap,H.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,H.map=U.map,H.clipShadows=U.clipShadows,H.clippingPlanes=U.clippingPlanes,H.clipIntersection=U.clipIntersection,H.displacementMap=U.displacementMap,H.displacementScale=U.displacementScale,H.displacementBias=U.displacementBias,H.wireframeLinewidth=U.wireframeLinewidth,H.linewidth=U.linewidth,_.isPointLight===!0&&H.isMeshDistanceMaterial===!0){let b=i.properties.get(H);b.light=_}return H}function x(E,U,_,N,H){if(E.visible===!1)return;if(E.layers.test(U.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&H===er)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);let J=t.update(E),X=E.material;if(Array.isArray(X)){let Z=J.groups;for(let lt=0,ht=Z.length;lt<ht;lt++){let Mt=Z[lt],$=X[Mt.materialIndex];if($&&$.visible){let y=I(E,$,N,H);E.onBeforeShadow(i,E,U,_,J,y,Mt),i.renderBufferDirect(_,null,J,y,E,Mt),E.onAfterShadow(i,E,U,_,J,y,Mt)}}}else if(X.visible){let Z=I(E,X,N,H);E.onBeforeShadow(i,E,U,_,J,Z,null),i.renderBufferDirect(_,null,J,Z,E,null),E.onAfterShadow(i,E,U,_,J,Z,null)}}let b=E.children;for(let J=0,X=b.length;J<X;J++)x(b[J],U,_,N,H)}function R(E){E.target.removeEventListener("dispose",R);for(let _ in h){let N=h[_],H=E.target.uuid;H in N&&(N[H].dispose(),delete N[H])}}}function y1(i,t){function e(){let G=!1,Et=new un,mt=null,Tt=new un(0,0,0,0);return{setMask:function(Dt){mt!==Dt&&!G&&(i.colorMask(Dt,Dt,Dt,Dt),mt=Dt)},setLocked:function(Dt){G=Dt},setClear:function(Dt,wt,ie,te,pe){pe===!0&&(Dt*=te,wt*=te,ie*=te),Et.set(Dt,wt,ie,te),Tt.equals(Et)===!1&&(i.clearColor(Dt,wt,ie,te),Tt.copy(Et))},reset:function(){G=!1,mt=null,Tt.set(-1,0,0,0)}}}function n(){let G=!1,Et=!1,mt=null,Tt=null,Dt=null;return{setReversed:function(wt){if(Et!==wt){let ie=t.get("EXT_clip_control");wt?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT),Et=wt;let te=Dt;Dt=null,this.setClear(te)}},getReversed:function(){return Et},setTest:function(wt){wt?pt(i.DEPTH_TEST):Kt(i.DEPTH_TEST)},setMask:function(wt){mt!==wt&&!G&&(i.depthMask(wt),mt=wt)},setFunc:function(wt){if(Et&&(wt=Fu[wt]),Tt!==wt){switch(wt){case Va:i.depthFunc(i.NEVER);break;case Ga:i.depthFunc(i.ALWAYS);break;case Ha:i.depthFunc(i.LESS);break;case Hs:i.depthFunc(i.LEQUAL);break;case Wa:i.depthFunc(i.EQUAL);break;case Xa:i.depthFunc(i.GEQUAL);break;case qa:i.depthFunc(i.GREATER);break;case Ya:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Tt=wt}},setLocked:function(wt){G=wt},setClear:function(wt){Dt!==wt&&(Dt=wt,Et&&(wt=1-wt),i.clearDepth(wt))},reset:function(){G=!1,mt=null,Tt=null,Dt=null,Et=!1}}}function s(){let G=!1,Et=null,mt=null,Tt=null,Dt=null,wt=null,ie=null,te=null,pe=null;return{setTest:function(Me){G||(Me?pt(i.STENCIL_TEST):Kt(i.STENCIL_TEST))},setMask:function(Me){Et!==Me&&!G&&(i.stencilMask(Me),Et=Me)},setFunc:function(Me,_n,W){(mt!==Me||Tt!==_n||Dt!==W)&&(i.stencilFunc(Me,_n,W),mt=Me,Tt=_n,Dt=W)},setOp:function(Me,_n,W){(wt!==Me||ie!==_n||te!==W)&&(i.stencilOp(Me,_n,W),wt=Me,ie=_n,te=W)},setLocked:function(Me){G=Me},setClear:function(Me){pe!==Me&&(i.clearStencil(Me),pe=Me)},reset:function(){G=!1,Et=null,mt=null,Tt=null,Dt=null,wt=null,ie=null,te=null,pe=null}}}let r=new e,l=new n,o=new s,u=new WeakMap,h=new WeakMap,p={},v={},m={},T=new WeakMap,M=[],P=null,A=!1,d=null,C=null,I=null,x=null,R=null,E=null,U=null,_=new Le(0,0,0),N=0,H=!1,Y=null,b=null,J=null,X=null,Z=null,lt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ht=!1,Mt=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(Mt=parseFloat(/^WebGL (\d)/.exec($)[1]),ht=Mt>=1):$.indexOf("OpenGL ES")!==-1&&(Mt=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),ht=Mt>=2);let y=null,bt={},Yt=i.getParameter(i.SCISSOR_BOX),At=i.getParameter(i.VIEWPORT),K=new un().fromArray(Yt),ge=new un().fromArray(At);function Ne(G,Et,mt,Tt){let Dt=new Uint8Array(4),wt=i.createTexture();i.bindTexture(G,wt),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ie=0;ie<mt;ie++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(Et,0,i.RGBA,1,1,Tt,0,i.RGBA,i.UNSIGNED_BYTE,Dt):i.texImage2D(Et+ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Dt);return wt}let gt={};gt[i.TEXTURE_2D]=Ne(i.TEXTURE_2D,i.TEXTURE_2D,1),gt[i.TEXTURE_CUBE_MAP]=Ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[i.TEXTURE_2D_ARRAY]=Ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),gt[i.TEXTURE_3D]=Ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),l.setClear(1),o.setClear(0),pt(i.DEPTH_TEST),l.setFunc(Hs),_e(!1),xe(cc),pt(i.CULL_FACE),Be(wi);function pt(G){p[G]!==!0&&(i.enable(G),p[G]=!0)}function Kt(G){p[G]!==!1&&(i.disable(G),p[G]=!1)}function ae(G,Et){return m[G]!==Et?(i.bindFramebuffer(G,Et),m[G]=Et,G===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=Et),G===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=Et),!0):!1}function Zt(G,Et){let mt=M,Tt=!1;if(G){mt=T.get(Et),mt===void 0&&(mt=[],T.set(Et,mt));let Dt=G.textures;if(mt.length!==Dt.length||mt[0]!==i.COLOR_ATTACHMENT0){for(let wt=0,ie=Dt.length;wt<ie;wt++)mt[wt]=i.COLOR_ATTACHMENT0+wt;mt.length=Dt.length,Tt=!0}}else mt[0]!==i.BACK&&(mt[0]=i.BACK,Tt=!0);Tt&&i.drawBuffers(mt)}function Ee(G){return P!==G?(i.useProgram(G),P=G,!0):!1}let Ue={[gs]:i.FUNC_ADD,[su]:i.FUNC_SUBTRACT,[ru]:i.FUNC_REVERSE_SUBTRACT};Ue[au]=i.MIN,Ue[ou]=i.MAX;let qt={[lu]:i.ZERO,[cu]:i.ONE,[hu]:i.SRC_COLOR,[fc]:i.SRC_ALPHA,[gu]:i.SRC_ALPHA_SATURATE,[pu]:i.DST_COLOR,[du]:i.DST_ALPHA,[uu]:i.ONE_MINUS_SRC_COLOR,[pc]:i.ONE_MINUS_SRC_ALPHA,[mu]:i.ONE_MINUS_DST_COLOR,[fu]:i.ONE_MINUS_DST_ALPHA,[xu]:i.CONSTANT_COLOR,[_u]:i.ONE_MINUS_CONSTANT_COLOR,[yu]:i.CONSTANT_ALPHA,[vu]:i.ONE_MINUS_CONSTANT_ALPHA};function Be(G,Et,mt,Tt,Dt,wt,ie,te,pe,Me){if(G===wi){A===!0&&(Kt(i.BLEND),A=!1);return}if(A===!1&&(pt(i.BLEND),A=!0),G!==iu){if(G!==d||Me!==H){if((C!==gs||R!==gs)&&(i.blendEquation(i.FUNC_ADD),C=gs,R=gs),Me)switch(G){case nr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hc:i.blendFunc(i.ONE,i.ONE);break;case uc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case dc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:be("WebGLState: Invalid blending: ",G);break}else switch(G){case nr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case uc:be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dc:be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:be("WebGLState: Invalid blending: ",G);break}I=null,x=null,E=null,U=null,_.set(0,0,0),N=0,d=G,H=Me}return}Dt=Dt||Et,wt=wt||mt,ie=ie||Tt,(Et!==C||Dt!==R)&&(i.blendEquationSeparate(Ue[Et],Ue[Dt]),C=Et,R=Dt),(mt!==I||Tt!==x||wt!==E||ie!==U)&&(i.blendFuncSeparate(qt[mt],qt[Tt],qt[wt],qt[ie]),I=mt,x=Tt,E=wt,U=ie),(te.equals(_)===!1||pe!==N)&&(i.blendColor(te.r,te.g,te.b,pe),_.copy(te),N=pe),d=G,H=!1}function we(G,Et){G.side===Qn?Kt(i.CULL_FACE):pt(i.CULL_FACE);let mt=G.side===kn;Et&&(mt=!mt),_e(mt),G.blending===nr&&G.transparent===!1?Be(wi):Be(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),l.setFunc(G.depthFunc),l.setTest(G.depthTest),l.setMask(G.depthWrite),r.setMask(G.colorWrite);let Tt=G.stencilWrite;o.setTest(Tt),Tt&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Qe(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?pt(i.SAMPLE_ALPHA_TO_COVERAGE):Kt(i.SAMPLE_ALPHA_TO_COVERAGE)}function _e(G){Y!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),Y=G)}function xe(G){G!==tu?(pt(i.CULL_FACE),G!==b&&(G===cc?i.cullFace(i.BACK):G===eu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Kt(i.CULL_FACE),b=G}function Ie(G){G!==J&&(ht&&i.lineWidth(G),J=G)}function Qe(G,Et,mt){G?(pt(i.POLYGON_OFFSET_FILL),(X!==Et||Z!==mt)&&(X=Et,Z=mt,l.getReversed()&&(Et=-Et),i.polygonOffset(Et,mt))):Kt(i.POLYGON_OFFSET_FILL)}function Ae(G){G?pt(i.SCISSOR_TEST):Kt(i.SCISSOR_TEST)}function tn(G){G===void 0&&(G=i.TEXTURE0+lt-1),y!==G&&(i.activeTexture(G),y=G)}function tt(G,Et,mt){mt===void 0&&(y===null?mt=i.TEXTURE0+lt-1:mt=y);let Tt=bt[mt];Tt===void 0&&(Tt={type:void 0,texture:void 0},bt[mt]=Tt),(Tt.type!==G||Tt.texture!==Et)&&(y!==mt&&(i.activeTexture(mt),y=mt),i.bindTexture(G,Et||gt[G]),Tt.type=G,Tt.texture=Et)}function Xe(){let G=bt[y];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Pe(){try{i.compressedTexImage2D(...arguments)}catch(G){be("WebGLState:",G)}}function k(){try{i.compressedTexImage3D(...arguments)}catch(G){be("WebGLState:",G)}}function w(){try{i.texSubImage2D(...arguments)}catch(G){be("WebGLState:",G)}}function st(){try{i.texSubImage3D(...arguments)}catch(G){be("WebGLState:",G)}}function rt(){try{i.compressedTexSubImage2D(...arguments)}catch(G){be("WebGLState:",G)}}function ct(){try{i.compressedTexSubImage3D(...arguments)}catch(G){be("WebGLState:",G)}}function zt(){try{i.texStorage2D(...arguments)}catch(G){be("WebGLState:",G)}}function It(){try{i.texStorage3D(...arguments)}catch(G){be("WebGLState:",G)}}function ft(){try{i.texImage2D(...arguments)}catch(G){be("WebGLState:",G)}}function vt(){try{i.texImage3D(...arguments)}catch(G){be("WebGLState:",G)}}function Gt(G){return v[G]!==void 0?v[G]:i.getParameter(G)}function jt(G,Et){v[G]!==Et&&(i.pixelStorei(G,Et),v[G]=Et)}function Rt(G){K.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),K.copy(G))}function kt(G){ge.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),ge.copy(G))}function Qt(G,Et){let mt=h.get(Et);mt===void 0&&(mt=new WeakMap,h.set(Et,mt));let Tt=mt.get(G);Tt===void 0&&(Tt=i.getUniformBlockIndex(Et,G.name),mt.set(G,Tt))}function xt(G,Et){let Tt=h.get(Et).get(G);u.get(Et)!==Tt&&(i.uniformBlockBinding(Et,Tt,G.__bindingPointIndex),u.set(Et,Tt))}function Lt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),l.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),p={},v={},y=null,bt={},m={},T=new WeakMap,M=[],P=null,A=!1,d=null,C=null,I=null,x=null,R=null,E=null,U=null,_=new Le(0,0,0),N=0,H=!1,Y=null,b=null,J=null,X=null,Z=null,K.set(0,0,i.canvas.width,i.canvas.height),ge.set(0,0,i.canvas.width,i.canvas.height),r.reset(),l.reset(),o.reset()}return{buffers:{color:r,depth:l,stencil:o},enable:pt,disable:Kt,bindFramebuffer:ae,drawBuffers:Zt,useProgram:Ee,setBlending:Be,setMaterial:we,setFlipSided:_e,setCullFace:xe,setLineWidth:Ie,setPolygonOffset:Qe,setScissorTest:Ae,activeTexture:tn,bindTexture:tt,unbindTexture:Xe,compressedTexImage2D:Pe,compressedTexImage3D:k,texImage2D:ft,texImage3D:vt,pixelStorei:jt,getParameter:Gt,updateUBOMapping:Qt,uniformBlockBinding:xt,texStorage2D:zt,texStorage3D:It,texSubImage2D:w,texSubImage3D:st,compressedTexSubImage2D:rt,compressedTexSubImage3D:ct,scissor:Rt,viewport:kt,reset:Lt}}function v1(i,t,e,n,s,r,l){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ke,p=new WeakMap,v=new Set,m,T=new WeakMap,M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(k,w){return M?new OffscreenCanvas(k,w):Ir("canvas")}function A(k,w,st){let rt=1,ct=Pe(k);if((ct.width>st||ct.height>st)&&(rt=st/Math.max(ct.width,ct.height)),rt<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){let zt=Math.floor(rt*ct.width),It=Math.floor(rt*ct.height);m===void 0&&(m=P(zt,It));let ft=w?P(zt,It):m;return ft.width=zt,ft.height=It,ft.getContext("2d").drawImage(k,0,0,zt,It),Se("WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+zt+"x"+It+")."),ft}else return"data"in k&&Se("WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),k;return k}function d(k){return k.generateMipmaps}function C(k){i.generateMipmap(k)}function I(k){return k.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?i.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(k,w,st,rt,ct,zt=!1){if(k!==null){if(i[k]!==void 0)return i[k];Se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let It;rt&&(It=t.get("EXT_texture_norm16"),It||Se("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ft=w;if(w===i.RED&&(st===i.FLOAT&&(ft=i.R32F),st===i.HALF_FLOAT&&(ft=i.R16F),st===i.UNSIGNED_BYTE&&(ft=i.R8),st===i.UNSIGNED_SHORT&&It&&(ft=It.R16_EXT),st===i.SHORT&&It&&(ft=It.R16_SNORM_EXT)),w===i.RED_INTEGER&&(st===i.UNSIGNED_BYTE&&(ft=i.R8UI),st===i.UNSIGNED_SHORT&&(ft=i.R16UI),st===i.UNSIGNED_INT&&(ft=i.R32UI),st===i.BYTE&&(ft=i.R8I),st===i.SHORT&&(ft=i.R16I),st===i.INT&&(ft=i.R32I)),w===i.RG&&(st===i.FLOAT&&(ft=i.RG32F),st===i.HALF_FLOAT&&(ft=i.RG16F),st===i.UNSIGNED_BYTE&&(ft=i.RG8),st===i.UNSIGNED_SHORT&&It&&(ft=It.RG16_EXT),st===i.SHORT&&It&&(ft=It.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(st===i.UNSIGNED_BYTE&&(ft=i.RG8UI),st===i.UNSIGNED_SHORT&&(ft=i.RG16UI),st===i.UNSIGNED_INT&&(ft=i.RG32UI),st===i.BYTE&&(ft=i.RG8I),st===i.SHORT&&(ft=i.RG16I),st===i.INT&&(ft=i.RG32I)),w===i.RGB_INTEGER&&(st===i.UNSIGNED_BYTE&&(ft=i.RGB8UI),st===i.UNSIGNED_SHORT&&(ft=i.RGB16UI),st===i.UNSIGNED_INT&&(ft=i.RGB32UI),st===i.BYTE&&(ft=i.RGB8I),st===i.SHORT&&(ft=i.RGB16I),st===i.INT&&(ft=i.RGB32I)),w===i.RGBA_INTEGER&&(st===i.UNSIGNED_BYTE&&(ft=i.RGBA8UI),st===i.UNSIGNED_SHORT&&(ft=i.RGBA16UI),st===i.UNSIGNED_INT&&(ft=i.RGBA32UI),st===i.BYTE&&(ft=i.RGBA8I),st===i.SHORT&&(ft=i.RGBA16I),st===i.INT&&(ft=i.RGBA32I)),w===i.RGB&&(st===i.UNSIGNED_SHORT&&It&&(ft=It.RGB16_EXT),st===i.SHORT&&It&&(ft=It.RGB16_SNORM_EXT),st===i.UNSIGNED_INT_5_9_9_9_REV&&(ft=i.RGB9_E5),st===i.UNSIGNED_INT_10F_11F_11F_REV&&(ft=i.R11F_G11F_B10F)),w===i.RGBA){let vt=zt?Rr:He.getTransfer(ct);st===i.FLOAT&&(ft=i.RGBA32F),st===i.HALF_FLOAT&&(ft=i.RGBA16F),st===i.UNSIGNED_BYTE&&(ft=vt===rn?i.SRGB8_ALPHA8:i.RGBA8),st===i.UNSIGNED_SHORT&&It&&(ft=It.RGBA16_EXT),st===i.SHORT&&It&&(ft=It.RGBA16_SNORM_EXT),st===i.UNSIGNED_SHORT_4_4_4_4&&(ft=i.RGBA4),st===i.UNSIGNED_SHORT_5_5_5_1&&(ft=i.RGB5_A1)}return(ft===i.R16F||ft===i.R32F||ft===i.RG16F||ft===i.RG32F||ft===i.RGBA16F||ft===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function R(k,w){let st;return k?w===null||w===fi||w===sr?st=i.DEPTH24_STENCIL8:w===ni?st=i.DEPTH32F_STENCIL8:w===ir&&(st=i.DEPTH24_STENCIL8,Se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===fi||w===sr?st=i.DEPTH_COMPONENT24:w===ni?st=i.DEPTH_COMPONENT32F:w===ir&&(st=i.DEPTH_COMPONENT16),st}function E(k,w){return d(k)===!0||k.isFramebufferTexture&&k.minFilter!==wn&&k.minFilter!==yn?Math.log2(Math.max(w.width,w.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?w.mipmaps.length:1}function U(k){let w=k.target;w.removeEventListener("dispose",U),N(w),w.isVideoTexture&&p.delete(w),w.isHTMLTexture&&v.delete(w)}function _(k){let w=k.target;w.removeEventListener("dispose",_),Y(w)}function N(k){let w=n.get(k);if(w.__webglInit===void 0)return;let st=k.source,rt=T.get(st);if(rt){let ct=rt[w.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&H(k),Object.keys(rt).length===0&&T.delete(st)}n.remove(k)}function H(k){let w=n.get(k);i.deleteTexture(w.__webglTexture);let st=k.source,rt=T.get(st);delete rt[w.__cacheKey],l.memory.textures--}function Y(k){let w=n.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),n.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(w.__webglFramebuffer[rt]))for(let ct=0;ct<w.__webglFramebuffer[rt].length;ct++)i.deleteFramebuffer(w.__webglFramebuffer[rt][ct]);else i.deleteFramebuffer(w.__webglFramebuffer[rt]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[rt])}else{if(Array.isArray(w.__webglFramebuffer))for(let rt=0;rt<w.__webglFramebuffer.length;rt++)i.deleteFramebuffer(w.__webglFramebuffer[rt]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let rt=0;rt<w.__webglColorRenderbuffer.length;rt++)w.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[rt]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let st=k.textures;for(let rt=0,ct=st.length;rt<ct;rt++){let zt=n.get(st[rt]);zt.__webglTexture&&(i.deleteTexture(zt.__webglTexture),l.memory.textures--),n.remove(st[rt])}n.remove(k)}let b=0;function J(){b=0}function X(){return b}function Z(k){b=k}function lt(){let k=b;return k>=s.maxTextures&&Se("WebGLTextures: Trying to use "+(k+1)+" texture units while this GPU supports only "+s.maxTextures),b+=1,k}function ht(k){let w=[];return w.push(k.wrapS),w.push(k.wrapT),w.push(k.wrapR||0),w.push(k.magFilter),w.push(k.minFilter),w.push(k.anisotropy),w.push(k.internalFormat),w.push(k.format),w.push(k.type),w.push(k.generateMipmaps),w.push(k.premultiplyAlpha),w.push(k.flipY),w.push(k.unpackAlignment),w.push(k.colorSpace),w.join()}function Mt(k,w){let st=n.get(k);if(k.isVideoTexture&&tt(k),k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&st.__version!==k.version){let rt=k.image;if(rt===null)Se("WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)Se("WebGLRenderer: Texture marked for update but image is incomplete");else{Kt(st,k,w);return}}else k.isExternalTexture&&(st.__webglTexture=k.sourceTexture?k.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,st.__webglTexture,i.TEXTURE0+w)}function $(k,w){let st=n.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&st.__version!==k.version){Kt(st,k,w);return}else k.isExternalTexture&&(st.__webglTexture=k.sourceTexture?k.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,st.__webglTexture,i.TEXTURE0+w)}function y(k,w){let st=n.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&st.__version!==k.version){Kt(st,k,w);return}e.bindTexture(i.TEXTURE_3D,st.__webglTexture,i.TEXTURE0+w)}function bt(k,w){let st=n.get(k);if(k.isCubeDepthTexture!==!0&&k.version>0&&st.__version!==k.version){ae(st,k,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture,i.TEXTURE0+w)}let Yt={[Ws]:i.REPEAT,[yi]:i.CLAMP_TO_EDGE,[Za]:i.MIRRORED_REPEAT},At={[wn]:i.NEAREST,[Su]:i.NEAREST_MIPMAP_NEAREST,[ta]:i.NEAREST_MIPMAP_LINEAR,[yn]:i.LINEAR,[yo]:i.LINEAR_MIPMAP_NEAREST,[Ti]:i.LINEAR_MIPMAP_LINEAR},K={[Au]:i.NEVER,[Lu]:i.ALWAYS,[Cu]:i.LESS,[sl]:i.LEQUAL,[Ru]:i.EQUAL,[rl]:i.GEQUAL,[Iu]:i.GREATER,[Pu]:i.NOTEQUAL};function ge(k,w){if(w.type===ni&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===yn||w.magFilter===yo||w.magFilter===ta||w.magFilter===Ti||w.minFilter===yn||w.minFilter===yo||w.minFilter===ta||w.minFilter===Ti)&&Se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(k,i.TEXTURE_WRAP_S,Yt[w.wrapS]),i.texParameteri(k,i.TEXTURE_WRAP_T,Yt[w.wrapT]),(k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY)&&i.texParameteri(k,i.TEXTURE_WRAP_R,Yt[w.wrapR]),i.texParameteri(k,i.TEXTURE_MAG_FILTER,At[w.magFilter]),i.texParameteri(k,i.TEXTURE_MIN_FILTER,At[w.minFilter]),w.compareFunction&&(i.texParameteri(k,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(k,i.TEXTURE_COMPARE_FUNC,K[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===wn||w.minFilter!==ta&&w.minFilter!==Ti||w.type===ni&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let st=t.get("EXT_texture_filter_anisotropic");i.texParameterf(k,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Ne(k,w){let st=!1;k.__webglInit===void 0&&(k.__webglInit=!0,w.addEventListener("dispose",U));let rt=w.source,ct=T.get(rt);ct===void 0&&(ct={},T.set(rt,ct));let zt=ht(w);if(zt!==k.__cacheKey){ct[zt]===void 0&&(ct[zt]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,st=!0),ct[zt].usedTimes++;let It=ct[k.__cacheKey];It!==void 0&&(ct[k.__cacheKey].usedTimes--,It.usedTimes===0&&H(w)),k.__cacheKey=zt,k.__webglTexture=ct[zt].texture}return st}function gt(k,w,st){return Math.floor(Math.floor(k/st)/w)}function pt(k,w,st,rt){let zt=k.updateRanges;if(zt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,st,rt,w.data);else{zt.sort((jt,Rt)=>jt.start-Rt.start);let It=0;for(let jt=1;jt<zt.length;jt++){let Rt=zt[It],kt=zt[jt],Qt=Rt.start+Rt.count,xt=gt(kt.start,w.width,4),Lt=gt(Rt.start,w.width,4);kt.start<=Qt+1&&xt===Lt&&gt(kt.start+kt.count-1,w.width,4)===xt?Rt.count=Math.max(Rt.count,kt.start+kt.count-Rt.start):(++It,zt[It]=kt)}zt.length=It+1;let ft=e.getParameter(i.UNPACK_ROW_LENGTH),vt=e.getParameter(i.UNPACK_SKIP_PIXELS),Gt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let jt=0,Rt=zt.length;jt<Rt;jt++){let kt=zt[jt],Qt=Math.floor(kt.start/4),xt=Math.ceil(kt.count/4),Lt=Qt%w.width,G=Math.floor(Qt/w.width),Et=xt,mt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Lt),e.pixelStorei(i.UNPACK_SKIP_ROWS,G),e.texSubImage2D(i.TEXTURE_2D,0,Lt,G,Et,mt,st,rt,w.data)}k.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ft),e.pixelStorei(i.UNPACK_SKIP_PIXELS,vt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Gt)}}function Kt(k,w,st){let rt=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(rt=i.TEXTURE_3D);let ct=Ne(k,w),zt=w.source;e.bindTexture(rt,k.__webglTexture,i.TEXTURE0+st);let It=n.get(zt);if(zt.version!==It.__version||ct===!0){if(e.activeTexture(i.TEXTURE0+st),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let mt=He.getPrimaries(He.workingColorSpace),Tt=w.colorSpace===ki?null:He.getPrimaries(w.colorSpace),Dt=w.colorSpace===ki||mt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt)}e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let vt=A(w.image,!1,s.maxTextureSize);vt=Xe(w,vt);let Gt=r.convert(w.format,w.colorSpace),jt=r.convert(w.type),Rt=x(w.internalFormat,Gt,jt,w.normalized,w.colorSpace,w.isVideoTexture);ge(rt,w);let kt,Qt=w.mipmaps,xt=w.isVideoTexture!==!0,Lt=It.__version===void 0||ct===!0,G=zt.dataReady,Et=E(w,vt);if(w.isDepthTexture)Rt=R(w.format===is,w.type),Lt&&(xt?e.texStorage2D(i.TEXTURE_2D,1,Rt,vt.width,vt.height):e.texImage2D(i.TEXTURE_2D,0,Rt,vt.width,vt.height,0,Gt,jt,null));else if(w.isDataTexture)if(Qt.length>0){xt&&Lt&&e.texStorage2D(i.TEXTURE_2D,Et,Rt,Qt[0].width,Qt[0].height);for(let mt=0,Tt=Qt.length;mt<Tt;mt++)kt=Qt[mt],xt?G&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,kt.width,kt.height,Gt,jt,kt.data):e.texImage2D(i.TEXTURE_2D,mt,Rt,kt.width,kt.height,0,Gt,jt,kt.data);w.generateMipmaps=!1}else xt?(Lt&&e.texStorage2D(i.TEXTURE_2D,Et,Rt,vt.width,vt.height),G&&pt(w,vt,Gt,jt)):e.texImage2D(i.TEXTURE_2D,0,Rt,vt.width,vt.height,0,Gt,jt,vt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){xt&&Lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Rt,Qt[0].width,Qt[0].height,vt.depth);for(let mt=0,Tt=Qt.length;mt<Tt;mt++)if(kt=Qt[mt],w.format!==ii)if(Gt!==null)if(xt){if(G)if(w.layerUpdates.size>0){let Dt=Nc(kt.width,kt.height,w.format,w.type);for(let wt of w.layerUpdates){let ie=kt.data.subarray(wt*Dt/kt.data.BYTES_PER_ELEMENT,(wt+1)*Dt/kt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,wt,kt.width,kt.height,1,Gt,ie)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,kt.width,kt.height,vt.depth,Gt,kt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,mt,Rt,kt.width,kt.height,vt.depth,0,kt.data,0,0);else Se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xt?G&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,kt.width,kt.height,vt.depth,Gt,jt,kt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,mt,Rt,kt.width,kt.height,vt.depth,0,Gt,jt,kt.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{xt&&Lt&&e.texStorage2D(i.TEXTURE_2D,Et,Rt,Qt[0].width,Qt[0].height);for(let mt=0,Tt=Qt.length;mt<Tt;mt++)kt=Qt[mt],w.format!==ii?Gt!==null?xt?G&&e.compressedTexSubImage2D(i.TEXTURE_2D,mt,0,0,kt.width,kt.height,Gt,kt.data):e.compressedTexImage2D(i.TEXTURE_2D,mt,Rt,kt.width,kt.height,0,kt.data):Se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?G&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,kt.width,kt.height,Gt,jt,kt.data):e.texImage2D(i.TEXTURE_2D,mt,Rt,kt.width,kt.height,0,Gt,jt,kt.data)}else if(w.isDataArrayTexture)if(xt){if(Lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Rt,vt.width,vt.height,vt.depth),G)if(w.layerUpdates.size>0){let mt=Nc(vt.width,vt.height,w.format,w.type);for(let Tt of w.layerUpdates){let Dt=vt.data.subarray(Tt*mt/vt.data.BYTES_PER_ELEMENT,(Tt+1)*mt/vt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Tt,vt.width,vt.height,1,Gt,jt,Dt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,Gt,jt,vt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,vt.width,vt.height,vt.depth,0,Gt,jt,vt.data);else if(w.isData3DTexture)xt?(Lt&&e.texStorage3D(i.TEXTURE_3D,Et,Rt,vt.width,vt.height,vt.depth),G&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,Gt,jt,vt.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,vt.width,vt.height,vt.depth,0,Gt,jt,vt.data);else if(w.isFramebufferTexture){if(Lt)if(xt)e.texStorage2D(i.TEXTURE_2D,Et,Rt,vt.width,vt.height);else{let mt=vt.width,Tt=vt.height;for(let Dt=0;Dt<Et;Dt++)e.texImage2D(i.TEXTURE_2D,Dt,Rt,mt,Tt,0,Gt,jt,null),mt>>=1,Tt>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let mt=i.canvas;if(mt.hasAttribute("layoutsubtree")||mt.setAttribute("layoutsubtree","true"),vt.parentNode!==mt){mt.appendChild(vt),v.add(w),mt.onpaint=Tt=>{let Dt=Tt.changedElements;for(let wt of v)Dt.includes(wt.image)&&(wt.needsUpdate=!0)},mt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,vt);else{let Dt=i.RGBA,wt=i.RGBA,ie=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Dt,wt,ie,vt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Qt.length>0){if(xt&&Lt){let mt=Pe(Qt[0]);e.texStorage2D(i.TEXTURE_2D,Et,Rt,mt.width,mt.height)}for(let mt=0,Tt=Qt.length;mt<Tt;mt++)kt=Qt[mt],xt?G&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,Gt,jt,kt):e.texImage2D(i.TEXTURE_2D,mt,Rt,Gt,jt,kt);w.generateMipmaps=!1}else if(xt){if(Lt){let mt=Pe(vt);e.texStorage2D(i.TEXTURE_2D,Et,Rt,mt.width,mt.height)}G&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Gt,jt,vt)}else e.texImage2D(i.TEXTURE_2D,0,Rt,Gt,jt,vt);d(w)&&C(rt),It.__version=zt.version,w.onUpdate&&w.onUpdate(w)}k.__version=w.version}function ae(k,w,st){if(w.image.length!==6)return;let rt=Ne(k,w),ct=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+st);let zt=n.get(ct);if(ct.version!==zt.__version||rt===!0){e.activeTexture(i.TEXTURE0+st);let It=He.getPrimaries(He.workingColorSpace),ft=w.colorSpace===ki?null:He.getPrimaries(w.colorSpace),vt=w.colorSpace===ki||It===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let Gt=w.isCompressedTexture||w.image[0].isCompressedTexture,jt=w.image[0]&&w.image[0].isDataTexture,Rt=[];for(let wt=0;wt<6;wt++)!Gt&&!jt?Rt[wt]=A(w.image[wt],!0,s.maxCubemapSize):Rt[wt]=jt?w.image[wt].image:w.image[wt],Rt[wt]=Xe(w,Rt[wt]);let kt=Rt[0],Qt=r.convert(w.format,w.colorSpace),xt=r.convert(w.type),Lt=x(w.internalFormat,Qt,xt,w.normalized,w.colorSpace),G=w.isVideoTexture!==!0,Et=zt.__version===void 0||rt===!0,mt=ct.dataReady,Tt=E(w,kt);ge(i.TEXTURE_CUBE_MAP,w);let Dt;if(Gt){G&&Et&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,Lt,kt.width,kt.height);for(let wt=0;wt<6;wt++){Dt=Rt[wt].mipmaps;for(let ie=0;ie<Dt.length;ie++){let te=Dt[ie];w.format!==ii?Qt!==null?G?mt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ie,0,0,te.width,te.height,Qt,te.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ie,Lt,te.width,te.height,0,te.data):Se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ie,0,0,te.width,te.height,Qt,xt,te.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ie,Lt,te.width,te.height,0,Qt,xt,te.data)}}}else{if(Dt=w.mipmaps,G&&Et){Dt.length>0&&Tt++;let wt=Pe(Rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,Lt,wt.width,wt.height)}for(let wt=0;wt<6;wt++)if(jt){G?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,Rt[wt].width,Rt[wt].height,Qt,xt,Rt[wt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Lt,Rt[wt].width,Rt[wt].height,0,Qt,xt,Rt[wt].data);for(let ie=0;ie<Dt.length;ie++){let pe=Dt[ie].image[wt].image;G?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ie+1,0,0,pe.width,pe.height,Qt,xt,pe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ie+1,Lt,pe.width,pe.height,0,Qt,xt,pe.data)}}else{G?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,Qt,xt,Rt[wt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Lt,Qt,xt,Rt[wt]);for(let ie=0;ie<Dt.length;ie++){let te=Dt[ie];G?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ie+1,0,0,Qt,xt,te.image[wt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ie+1,Lt,Qt,xt,te.image[wt])}}}d(w)&&C(i.TEXTURE_CUBE_MAP),zt.__version=ct.version,w.onUpdate&&w.onUpdate(w)}k.__version=w.version}function Zt(k,w,st,rt,ct,zt){let It=r.convert(st.format,st.colorSpace),ft=r.convert(st.type),vt=x(st.internalFormat,It,ft,st.normalized,st.colorSpace),Gt=n.get(w),jt=n.get(st);if(jt.__renderTarget=w,!Gt.__hasExternalTextures){let Rt=Math.max(1,w.width>>zt),kt=Math.max(1,w.height>>zt);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,zt,vt,Rt,kt,w.depth,0,It,ft,null):e.texImage2D(ct,zt,vt,Rt,kt,0,It,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,k),tn(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,ct,jt.__webglTexture,0,Ae(w)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,ct,jt.__webglTexture,zt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ee(k,w,st){if(i.bindRenderbuffer(i.RENDERBUFFER,k),w.depthBuffer){let rt=w.depthTexture,ct=rt&&rt.isDepthTexture?rt.type:null,zt=R(w.stencilBuffer,ct),It=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;tn(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae(w),zt,w.width,w.height):st?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae(w),zt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,zt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,k)}else{let rt=w.textures;for(let ct=0;ct<rt.length;ct++){let zt=rt[ct],It=r.convert(zt.format,zt.colorSpace),ft=r.convert(zt.type),vt=x(zt.internalFormat,It,ft,zt.normalized,zt.colorSpace);tn(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae(w),vt,w.width,w.height):st?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae(w),vt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,vt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ue(k,w,st){let rt=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,k),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ct=n.get(w.depthTexture);if(ct.__renderTarget=w,(!ct.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),rt){if(ct.__webglInit===void 0&&(ct.__webglInit=!0,w.depthTexture.addEventListener("dispose",U)),ct.__webglTexture===void 0){ct.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),ge(i.TEXTURE_CUBE_MAP,w.depthTexture);let Gt=r.convert(w.depthTexture.format),jt=r.convert(w.depthTexture.type),Rt;w.depthTexture.format===vi?Rt=i.DEPTH_COMPONENT24:w.depthTexture.format===is&&(Rt=i.DEPTH24_STENCIL8);for(let kt=0;kt<6;kt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,0,Rt,w.width,w.height,0,Gt,jt,null)}}else Mt(w.depthTexture,0);let zt=ct.__webglTexture,It=Ae(w),ft=rt?i.TEXTURE_CUBE_MAP_POSITIVE_X+st:i.TEXTURE_2D,vt=w.depthTexture.format===is?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===vi)tn(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,vt,ft,zt,0,It):i.framebufferTexture2D(i.FRAMEBUFFER,vt,ft,zt,0);else if(w.depthTexture.format===is)tn(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,vt,ft,zt,0,It):i.framebufferTexture2D(i.FRAMEBUFFER,vt,ft,zt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function qt(k){let w=n.get(k),st=k.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==k.depthTexture){let rt=k.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),rt){let ct=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,rt.removeEventListener("dispose",ct)};rt.addEventListener("dispose",ct),w.__depthDisposeCallback=ct}w.__boundDepthTexture=rt}if(k.depthTexture&&!w.__autoAllocateDepthBuffer)if(st)for(let rt=0;rt<6;rt++)Ue(w.__webglFramebuffer[rt],k,rt);else{let rt=k.texture.mipmaps;rt&&rt.length>0?Ue(w.__webglFramebuffer[0],k,0):Ue(w.__webglFramebuffer,k,0)}else if(st){w.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[rt]),w.__webglDepthbuffer[rt]===void 0)w.__webglDepthbuffer[rt]=i.createRenderbuffer(),Ee(w.__webglDepthbuffer[rt],k,!1);else{let ct=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,zt=w.__webglDepthbuffer[rt];i.bindRenderbuffer(i.RENDERBUFFER,zt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,zt)}}else{let rt=k.texture.mipmaps;if(rt&&rt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Ee(w.__webglDepthbuffer,k,!1);else{let ct=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,zt=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,zt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,zt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(k,w,st){let rt=n.get(k);w!==void 0&&Zt(rt.__webglFramebuffer,k,k.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),st!==void 0&&qt(k)}function we(k){let w=k.texture,st=n.get(k),rt=n.get(w);k.addEventListener("dispose",_);let ct=k.textures,zt=k.isWebGLCubeRenderTarget===!0,It=ct.length>1;if(It||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=w.version,l.memory.textures++),zt){st.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(w.mipmaps&&w.mipmaps.length>0){st.__webglFramebuffer[ft]=[];for(let vt=0;vt<w.mipmaps.length;vt++)st.__webglFramebuffer[ft][vt]=i.createFramebuffer()}else st.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){st.__webglFramebuffer=[];for(let ft=0;ft<w.mipmaps.length;ft++)st.__webglFramebuffer[ft]=i.createFramebuffer()}else st.__webglFramebuffer=i.createFramebuffer();if(It)for(let ft=0,vt=ct.length;ft<vt;ft++){let Gt=n.get(ct[ft]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),l.memory.textures++)}if(k.samples>0&&tn(k)===!1){st.__webglMultisampledFramebuffer=i.createFramebuffer(),st.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer);for(let ft=0;ft<ct.length;ft++){let vt=ct[ft];st.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,st.__webglColorRenderbuffer[ft]);let Gt=r.convert(vt.format,vt.colorSpace),jt=r.convert(vt.type),Rt=x(vt.internalFormat,Gt,jt,vt.normalized,vt.colorSpace,k.isXRRenderTarget===!0),kt=Ae(k);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,Rt,k.width,k.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,st.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),k.depthBuffer&&(st.__webglDepthRenderbuffer=i.createRenderbuffer(),Ee(st.__webglDepthRenderbuffer,k,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(zt){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),ge(i.TEXTURE_CUBE_MAP,w);for(let ft=0;ft<6;ft++)if(w.mipmaps&&w.mipmaps.length>0)for(let vt=0;vt<w.mipmaps.length;vt++)Zt(st.__webglFramebuffer[ft][vt],k,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,vt);else Zt(st.__webglFramebuffer[ft],k,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);d(w)&&C(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let ft=0,vt=ct.length;ft<vt;ft++){let Gt=ct[ft],jt=n.get(Gt),Rt=i.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(Rt=k.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Rt,jt.__webglTexture),ge(Rt,Gt),Zt(st.__webglFramebuffer,k,Gt,i.COLOR_ATTACHMENT0+ft,Rt,0),d(Gt)&&C(Rt)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(ft=k.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,rt.__webglTexture),ge(ft,w),w.mipmaps&&w.mipmaps.length>0)for(let vt=0;vt<w.mipmaps.length;vt++)Zt(st.__webglFramebuffer[vt],k,w,i.COLOR_ATTACHMENT0,ft,vt);else Zt(st.__webglFramebuffer,k,w,i.COLOR_ATTACHMENT0,ft,0);d(w)&&C(ft),e.unbindTexture()}k.depthBuffer&&qt(k)}function _e(k){let w=k.textures;for(let st=0,rt=w.length;st<rt;st++){let ct=w[st];if(d(ct)){let zt=I(k),It=n.get(ct).__webglTexture;e.bindTexture(zt,It),C(zt),e.unbindTexture()}}}let xe=[],Ie=[];function Qe(k){if(k.samples>0){if(tn(k)===!1){let w=k.textures,st=k.width,rt=k.height,ct=i.COLOR_BUFFER_BIT,zt=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=n.get(k),ft=w.length>1;if(ft)for(let Gt=0;Gt<w.length;Gt++)e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer);let vt=k.texture.mipmaps;vt&&vt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Gt=0;Gt<w.length;Gt++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,It.__webglColorRenderbuffer[Gt]);let jt=n.get(w[Gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,jt,0)}i.blitFramebuffer(0,0,st,rt,0,0,st,rt,ct,i.NEAREST),u===!0&&(xe.length=0,Ie.length=0,xe.push(i.COLOR_ATTACHMENT0+Gt),k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&(xe.push(zt),Ie.push(zt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ie)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let Gt=0;Gt<w.length;Gt++){e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.RENDERBUFFER,It.__webglColorRenderbuffer[Gt]);let jt=n.get(w[Gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.TEXTURE_2D,jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&u){let w=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Ae(k){return Math.min(s.maxSamples,k.samples)}function tn(k){let w=n.get(k);return k.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function tt(k){let w=l.render.frame;p.get(k)!==w&&(p.set(k,w),k.update())}function Xe(k,w){let st=k.colorSpace,rt=k.format,ct=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||st!==Cr&&st!==ki&&(He.getTransfer(st)===rn?(rt!==ii||ct!==Xn)&&Se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):be("WebGLTextures: Unsupported texture color space:",st)),w}function Pe(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(h.width=k.naturalWidth||k.width,h.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(h.width=k.displayWidth,h.height=k.displayHeight):(h.width=k.width,h.height=k.height),h}this.allocateTextureUnit=lt,this.resetTextureUnits=J,this.getTextureUnits=X,this.setTextureUnits=Z,this.setTexture2D=Mt,this.setTexture2DArray=$,this.setTexture3D=y,this.setTextureCube=bt,this.rebindTextures=Be,this.setupRenderTarget=we,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=Zt,this.useMultisampledRTT=tn,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function M1(i,t){function e(n,s=ki){let r,l=He.getTransfer(s);if(n===Xn)return i.UNSIGNED_BYTE;if(n===Mo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===bo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Tc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ec)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Sc)return i.BYTE;if(n===wc)return i.SHORT;if(n===ir)return i.UNSIGNED_SHORT;if(n===vo)return i.INT;if(n===fi)return i.UNSIGNED_INT;if(n===ni)return i.FLOAT;if(n===pi)return i.HALF_FLOAT;if(n===Ac)return i.ALPHA;if(n===Cc)return i.RGB;if(n===ii)return i.RGBA;if(n===vi)return i.DEPTH_COMPONENT;if(n===is)return i.DEPTH_STENCIL;if(n===So)return i.RED;if(n===wo)return i.RED_INTEGER;if(n===ss)return i.RG;if(n===To)return i.RG_INTEGER;if(n===Eo)return i.RGBA_INTEGER;if(n===ea||n===na||n===ia||n===sa)if(l===rn)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ao||n===Co||n===Ro||n===Io)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ao)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Co)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ro)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Io)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Po||n===Lo||n===Do||n===No||n===Uo||n===ra||n===Fo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Po||n===Lo)return l===rn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Do)return l===rn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===No)return r.COMPRESSED_R11_EAC;if(n===Uo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ra)return r.COMPRESSED_RG11_EAC;if(n===Fo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Oo||n===Bo||n===ko||n===zo||n===Vo||n===Go||n===Ho||n===Wo||n===Xo||n===qo||n===Yo||n===Zo||n===Jo||n===$o)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Oo)return l===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bo)return l===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ko)return l===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zo)return l===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vo)return l===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Go)return l===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ho)return l===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wo)return l===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xo)return l===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qo)return l===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yo)return l===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zo)return l===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jo)return l===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$o)return l===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ko||n===jo||n===Qo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ko)return l===rn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tl||n===el||n===aa||n===nl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===tl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===el)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===sr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var b1=`
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

}`,Qc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Hr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Kn({vertexShader:b1,fragmentShader:S1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Un(new Wr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},th=class extends Mi{constructor(t,e){super();let n=this,s=null,r=1,l=null,o="local-floor",u=1,h=null,p=null,v=null,m=null,T=null,M=null,P=typeof XRWebGLBinding<"u",A=new Qc,d={},C=e.getContextAttributes(),I=null,x=null,R=[],E=[],U=new ke,_=null,N=null,H=new Dn;H.viewport=new un;let Y=new Dn;Y.viewport=new un;let b=[H,Y],J=new mo,X=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(gt){let pt=R[gt];return pt===void 0&&(pt=new Js,R[gt]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(gt){let pt=R[gt];return pt===void 0&&(pt=new Js,R[gt]=pt),pt.getGripSpace()},this.getHand=function(gt){let pt=R[gt];return pt===void 0&&(pt=new Js,R[gt]=pt),pt.getHandSpace()};function lt(gt){let pt=E.indexOf(gt.inputSource);if(pt===-1)return;let Kt=R[pt];Kt!==void 0&&(Kt.update(gt.inputSource,gt.frame,h||l),Kt.dispatchEvent({type:gt.type,data:gt.inputSource}))}function ht(){s.removeEventListener("select",lt),s.removeEventListener("selectstart",lt),s.removeEventListener("selectend",lt),s.removeEventListener("squeeze",lt),s.removeEventListener("squeezestart",lt),s.removeEventListener("squeezeend",lt),s.removeEventListener("end",ht),s.removeEventListener("inputsourceschange",Mt);for(let gt=0;gt<R.length;gt++){let pt=E[gt];pt!==null&&(E[gt]=null,R[gt].disconnect(pt))}X=null,Z=null,A.reset();for(let gt in d)delete d[gt];if(t.setRenderTarget(I),T=null,m=null,v=null,s=null,x=null,Ne.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(U.width,U.height,!1),N!==null){let gt=N.camera;gt.fov=N.fov,gt.zoom=N.zoom,gt.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(gt){r=gt,n.isPresenting===!0&&Se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(gt){o=gt,n.isPresenting===!0&&Se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||l},this.setReferenceSpace=function(gt){h=gt},this.getBaseLayer=function(){return m!==null?m:T},this.getBinding=function(){return v===null&&P&&(v=new XRWebGLBinding(s,e)),v},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(gt){if(s=gt,s!==null){if(I=t.getRenderTarget(),s.addEventListener("select",lt),s.addEventListener("selectstart",lt),s.addEventListener("selectend",lt),s.addEventListener("squeeze",lt),s.addEventListener("squeezestart",lt),s.addEventListener("squeezeend",lt),s.addEventListener("end",ht),s.addEventListener("inputsourceschange",Mt),C.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(U),P&&"createProjectionLayer"in XRWebGLBinding.prototype){let Kt=null,ae=null,Zt=null;C.depth&&(Zt=C.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Kt=C.stencil?is:vi,ae=C.stencil?sr:fi);let Ee={colorFormat:e.RGBA8,depthFormat:Zt,scaleFactor:r};v=this.getBinding(),m=v.createProjectionLayer(Ee),s.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),x=new Wn(m.textureWidth,m.textureHeight,{format:ii,type:Xn,depthTexture:new Ki(m.textureWidth,m.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,Kt),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{let Kt={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:r};T=new XRWebGLLayer(s,e,Kt),s.updateRenderState({baseLayer:T}),t.setPixelRatio(1),t.setSize(T.framebufferWidth,T.framebufferHeight,!1),x=new Wn(T.framebufferWidth,T.framebufferHeight,{format:ii,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:T.ignoreDepthValues===!1,resolveStencilBuffer:T.ignoreDepthValues===!1,storeMultisampledDepthBuffer:T.ignoreDepthValues===!1,storeMultisampledStencilBuffer:T.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(u),h=null,l=await s.requestReferenceSpace(o),Ne.setContext(s),Ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function Mt(gt){for(let pt=0;pt<gt.removed.length;pt++){let Kt=gt.removed[pt],ae=E.indexOf(Kt);ae>=0&&(E[ae]=null,R[ae].disconnect(Kt))}for(let pt=0;pt<gt.added.length;pt++){let Kt=gt.added[pt],ae=E.indexOf(Kt);if(ae===-1){for(let Ee=0;Ee<R.length;Ee++)if(Ee>=E.length){E.push(Kt),ae=Ee;break}else if(E[Ee]===null){E[Ee]=Kt,ae=Ee;break}if(ae===-1)break}let Zt=R[ae];Zt&&Zt.connect(Kt)}}let $=new at,y=new at;function bt(gt,pt,Kt){$.setFromMatrixPosition(pt.matrixWorld),y.setFromMatrixPosition(Kt.matrixWorld);let ae=$.distanceTo(y),Zt=pt.projectionMatrix.elements,Ee=Kt.projectionMatrix.elements,Ue=Zt[14]/(Zt[10]-1),qt=Zt[14]/(Zt[10]+1),Be=(Zt[9]+1)/Zt[5],we=(Zt[9]-1)/Zt[5],_e=(Zt[8]-1)/Zt[0],xe=(Ee[8]+1)/Ee[0],Ie=Ue*_e,Qe=Ue*xe,Ae=ae/(-_e+xe),tn=Ae*-_e;if(pt.matrixWorld.decompose(gt.position,gt.quaternion,gt.scale),gt.translateX(tn),gt.translateZ(Ae),gt.matrixWorld.compose(gt.position,gt.quaternion,gt.scale),gt.matrixWorldInverse.copy(gt.matrixWorld).invert(),Zt[10]===-1)gt.projectionMatrix.copy(pt.projectionMatrix),gt.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{let tt=Ue+Ae,Xe=qt+Ae,Pe=Ie-tn,k=Qe+(ae-tn),w=Be*qt/Xe*tt,st=we*qt/Xe*tt;gt.projectionMatrix.makePerspective(Pe,k,w,st,tt,Xe),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert()}}function Yt(gt,pt){pt===null?gt.matrixWorld.copy(gt.matrix):gt.matrixWorld.multiplyMatrices(pt.matrixWorld,gt.matrix),gt.matrixWorldInverse.copy(gt.matrixWorld).invert()}this.updateCamera=function(gt){if(s===null)return;let pt=gt.near,Kt=gt.far;A.texture!==null&&(A.depthNear>0&&(pt=A.depthNear),A.depthFar>0&&(Kt=A.depthFar)),J.near=Y.near=H.near=pt,J.far=Y.far=H.far=Kt,(X!==J.near||Z!==J.far)&&(s.updateRenderState({depthNear:J.near,depthFar:J.far}),X=J.near,Z=J.far),J.layers.mask=gt.layers.mask|6,H.layers.mask=J.layers.mask&-5,Y.layers.mask=J.layers.mask&-3;let ae=gt.parent,Zt=J.cameras;Yt(J,ae);for(let Ee=0;Ee<Zt.length;Ee++)Yt(Zt[Ee],ae);Zt.length===2?bt(J,H,Y):J.projectionMatrix.copy(H.projectionMatrix),N===null&&gt.isPerspectiveCamera&&(N={camera:gt,fov:gt.fov,zoom:gt.zoom}),At(gt,J,ae)};function At(gt,pt,Kt){Kt===null?gt.matrix.copy(pt.matrixWorld):(gt.matrix.copy(Kt.matrixWorld),gt.matrix.invert(),gt.matrix.multiply(pt.matrixWorld)),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.updateMatrixWorld(!0),gt.projectionMatrix.copy(pt.projectionMatrix),gt.projectionMatrixInverse.copy(pt.projectionMatrixInverse),gt.isPerspectiveCamera&&(gt.fov=$a*2*Math.atan(1/gt.projectionMatrix.elements[5]),gt.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(m===null&&T===null))return u},this.setFoveation=function(gt){u=gt,m!==null&&(m.fixedFoveation=gt),T!==null&&T.fixedFoveation!==void 0&&(T.fixedFoveation=gt)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(J)},this.getCameraTexture=function(gt){return d[gt]};let K=null;function ge(gt,pt){if(p=pt.getViewerPose(h||l),M=pt,p!==null){let Kt=p.views;T!==null&&(t.setRenderTargetFramebuffer(x,T.framebuffer),t.setRenderTarget(x));let ae=!1;Kt.length!==J.cameras.length&&(J.cameras.length=0,ae=!0);for(let qt=0;qt<Kt.length;qt++){let Be=Kt[qt],we=null;if(T!==null)we=T.getViewport(Be);else{let xe=v.getViewSubImage(m,Be);we=xe.viewport,qt===0&&(t.setRenderTargetTextures(x,xe.colorTexture,xe.depthStencilTexture),t.setRenderTarget(x))}let _e=b[qt];_e===void 0&&(_e=new Dn,_e.layers.enable(qt),_e.viewport=new un,b[qt]=_e),_e.matrix.fromArray(Be.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(Be.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(we.x,we.y,we.width,we.height),qt===0&&(J.matrix.copy(_e.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),ae===!0&&J.cameras.push(_e)}let Zt=s.enabledFeatures;if(Zt&&Zt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&P){v=n.getBinding();let qt=v.getDepthInformation(Kt[0]);qt&&qt.isValid&&qt.texture&&A.init(qt,s.renderState)}if(Zt&&Zt.includes("camera-access")&&P){t.state.unbindTexture(),v=n.getBinding();for(let qt=0;qt<Kt.length;qt++){let Be=Kt[qt].camera;if(Be){let we=d[Be];we||(we=new Hr,d[Be]=we);let _e=v.getCameraImage(Be);we.sourceTexture=_e}}}}for(let Kt=0;Kt<R.length;Kt++){let ae=E[Kt],Zt=R[Kt];ae!==null&&Zt!==void 0&&Zt.update(ae,pt,h||l)}K&&K(gt,pt),pt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pt}),M=null}let Ne=new ld;Ne.setAnimationLoop(ge),this.setAnimationLoop=function(gt){K=gt},this.dispose=function(){}}},w1=new Je,pd=new Re;pd.set(-1,0,0,0,1,0,0,0,1);function T1(i,t){function e(A,d){A.matrixAutoUpdate===!0&&A.updateMatrix(),d.value.copy(A.matrix)}function n(A,d){d.color.getRGB(A.fogColor.value,Pc(i)),d.isFog?(A.fogNear.value=d.near,A.fogFar.value=d.far):d.isFogExp2&&(A.fogDensity.value=d.density)}function s(A,d,C,I,x){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(A,d):d.isMeshLambertMaterial?(r(A,d),d.envMap&&(A.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(A,d),v(A,d)):d.isMeshPhongMaterial?(r(A,d),p(A,d),d.envMap&&(A.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(A,d),m(A,d),d.isMeshPhysicalMaterial&&T(A,d,x)):d.isMeshMatcapMaterial?(r(A,d),M(A,d)):d.isMeshDepthMaterial?r(A,d):d.isMeshDistanceMaterial?(r(A,d),P(A,d)):d.isMeshNormalMaterial?r(A,d):d.isLineBasicMaterial?(l(A,d),d.isLineDashedMaterial&&o(A,d)):d.isPointsMaterial?u(A,d,C,I):d.isSpriteMaterial?h(A,d):d.isShadowMaterial?(A.color.value.copy(d.color),A.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(A,d){A.opacity.value=d.opacity,d.color&&A.diffuse.value.copy(d.color),d.emissive&&A.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(A.map.value=d.map,e(d.map,A.mapTransform)),d.alphaMap&&(A.alphaMap.value=d.alphaMap,e(d.alphaMap,A.alphaMapTransform)),d.bumpMap&&(A.bumpMap.value=d.bumpMap,e(d.bumpMap,A.bumpMapTransform),A.bumpScale.value=d.bumpScale,d.side===kn&&(A.bumpScale.value*=-1)),d.normalMap&&(A.normalMap.value=d.normalMap,e(d.normalMap,A.normalMapTransform),A.normalScale.value.copy(d.normalScale),d.side===kn&&A.normalScale.value.negate()),d.displacementMap&&(A.displacementMap.value=d.displacementMap,e(d.displacementMap,A.displacementMapTransform),A.displacementScale.value=d.displacementScale,A.displacementBias.value=d.displacementBias),d.emissiveMap&&(A.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,A.emissiveMapTransform)),d.specularMap&&(A.specularMap.value=d.specularMap,e(d.specularMap,A.specularMapTransform)),d.alphaTest>0&&(A.alphaTest.value=d.alphaTest);let C=t.get(d),I=C.envMap,x=C.envMapRotation;I&&(A.envMap.value=I,A.envMapRotation.value.setFromMatrix4(w1.makeRotationFromEuler(x)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&A.envMapRotation.value.premultiply(pd),A.reflectivity.value=d.reflectivity,A.ior.value=d.ior,A.refractionRatio.value=d.refractionRatio),d.lightMap&&(A.lightMap.value=d.lightMap,A.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,A.lightMapTransform)),d.aoMap&&(A.aoMap.value=d.aoMap,A.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,A.aoMapTransform))}function l(A,d){A.diffuse.value.copy(d.color),A.opacity.value=d.opacity,d.map&&(A.map.value=d.map,e(d.map,A.mapTransform))}function o(A,d){A.dashSize.value=d.dashSize,A.totalSize.value=d.dashSize+d.gapSize,A.scale.value=d.scale}function u(A,d,C,I){A.diffuse.value.copy(d.color),A.opacity.value=d.opacity,A.size.value=d.size*C,A.scale.value=I*.5,d.map&&(A.map.value=d.map,e(d.map,A.uvTransform)),d.alphaMap&&(A.alphaMap.value=d.alphaMap,e(d.alphaMap,A.alphaMapTransform)),d.alphaTest>0&&(A.alphaTest.value=d.alphaTest)}function h(A,d){A.diffuse.value.copy(d.color),A.opacity.value=d.opacity,A.rotation.value=d.rotation,d.map&&(A.map.value=d.map,e(d.map,A.mapTransform)),d.alphaMap&&(A.alphaMap.value=d.alphaMap,e(d.alphaMap,A.alphaMapTransform)),d.alphaTest>0&&(A.alphaTest.value=d.alphaTest)}function p(A,d){A.specular.value.copy(d.specular),A.shininess.value=Math.max(d.shininess,1e-4)}function v(A,d){d.gradientMap&&(A.gradientMap.value=d.gradientMap)}function m(A,d){A.metalness.value=d.metalness,d.metalnessMap&&(A.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,A.metalnessMapTransform)),A.roughness.value=d.roughness,d.roughnessMap&&(A.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,A.roughnessMapTransform)),d.envMap&&(A.envMapIntensity.value=d.envMapIntensity)}function T(A,d,C){A.ior.value=d.ior,d.sheen>0&&(A.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),A.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(A.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,A.sheenColorMapTransform)),d.sheenRoughnessMap&&(A.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,A.sheenRoughnessMapTransform))),d.clearcoat>0&&(A.clearcoat.value=d.clearcoat,A.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(A.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,A.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(A.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,A.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(A.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,A.clearcoatNormalMapTransform),A.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===kn&&A.clearcoatNormalScale.value.negate())),d.dispersion>0&&(A.dispersion.value=d.dispersion),d.retroreflectivity>0&&(A.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(A.iridescence.value=d.iridescence,A.iridescenceIOR.value=d.iridescenceIOR,A.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],A.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(A.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,A.iridescenceMapTransform)),d.iridescenceThicknessMap&&(A.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,A.iridescenceThicknessMapTransform))),d.transmission>0&&(A.transmission.value=d.transmission,A.transmissionSamplerMap.value=C.texture,A.transmissionSamplerSize.value.set(C.width,C.height),d.transmissionMap&&(A.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,A.transmissionMapTransform)),A.thickness.value=d.thickness,d.thicknessMap&&(A.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,A.thicknessMapTransform)),A.attenuationDistance.value=d.attenuationDistance,A.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(A.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(A.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,A.anisotropyMapTransform))),A.specularIntensity.value=d.specularIntensity,A.specularColor.value.copy(d.specularColor),d.specularColorMap&&(A.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,A.specularColorMapTransform)),d.specularIntensityMap&&(A.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,A.specularIntensityMapTransform))}function M(A,d){d.matcap&&(A.matcap.value=d.matcap)}function P(A,d){let C=t.get(d).light;A.referencePosition.value.setFromMatrixPosition(C.matrixWorld),A.nearDistance.value=C.shadow.camera.near,A.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function E1(i,t,e,n){let s={},r={},l=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function u(x,R){let E=R.program;n.uniformBlockBinding(x,E)}function h(x,R){let E=s[x.id];E===void 0&&(A(x),E=p(x),s[x.id]=E,x.addEventListener("dispose",C));let U=R.program;n.updateUBOMapping(x,U);let _=t.render.frame;r[x.id]!==_&&(m(x),r[x.id]=_)}function p(x){let R=v();x.__bindingPointIndex=R;let E=i.createBuffer(),U=x.__size,_=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,U,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,E),E}function v(){for(let x=0;x<o;x++)if(l.indexOf(x)===-1)return l.push(x),x;return be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(x){let R=s[x.id],E=x.uniforms,U=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let _=0,N=E.length;_<N;_++){let H=E[_];if(Array.isArray(H))for(let Y=0,b=H.length;Y<b;Y++)T(H[Y],_,Y,U);else T(H,_,0,U)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function T(x,R,E,U){if(P(x,R,E,U)===!0){let _=x.__offset,N=x.value;if(Array.isArray(N)){let H=0;for(let Y=0;Y<N.length;Y++){let b=N[Y],J=d(b);M(b,x.__data,H),typeof b!="number"&&typeof b!="boolean"&&!b.isMatrix3&&!ArrayBuffer.isView(b)&&(H+=J.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(N,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,x.__data)}}function M(x,R,E){typeof x=="number"||typeof x=="boolean"?R[0]=x:x.isMatrix3?(R[0]=x.elements[0],R[1]=x.elements[1],R[2]=x.elements[2],R[3]=0,R[4]=x.elements[3],R[5]=x.elements[4],R[6]=x.elements[5],R[7]=0,R[8]=x.elements[6],R[9]=x.elements[7],R[10]=x.elements[8],R[11]=0):ArrayBuffer.isView(x)?R.set(new x.constructor(x.buffer,x.byteOffset,R.length)):x.toArray(R,E)}function P(x,R,E,U){let _=x.value,N=R+"_"+E;if(U[N]===void 0)return typeof _=="number"||typeof _=="boolean"?U[N]=_:ArrayBuffer.isView(_)?U[N]=_.slice():U[N]=_.clone(),!0;{let H=U[N];if(typeof _=="number"||typeof _=="boolean"){if(H!==_)return U[N]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(H.equals(_)===!1)return H.copy(_),!0}}return!1}function A(x){let R=x.uniforms,E=0,U=16;for(let N=0,H=R.length;N<H;N++){let Y=Array.isArray(R[N])?R[N]:[R[N]];for(let b=0,J=Y.length;b<J;b++){let X=Y[b],Z=Array.isArray(X.value)?X.value:[X.value];for(let lt=0,ht=Z.length;lt<ht;lt++){let Mt=Z[lt],$=d(Mt),y=E%U,bt=y%$.boundary,Yt=y+bt;E+=bt,Yt!==0&&U-Yt<$.storage&&(E+=U-Yt),X.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=E,E+=$.storage}}}let _=E%U;return _>0&&(E+=U-_),x.__size=E,x.__cache={},this}function d(x){let R={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(R.boundary=4,R.storage=4):x.isVector2?(R.boundary=8,R.storage=8):x.isVector3||x.isColor?(R.boundary=16,R.storage=12):x.isVector4?(R.boundary=16,R.storage=16):x.isMatrix3?(R.boundary=48,R.storage=48):x.isMatrix4?(R.boundary=64,R.storage=64):x.isTexture?Se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(R.boundary=16,R.storage=x.byteLength):Se("WebGLRenderer: Unsupported uniform value type.",x),R}function C(x){let R=x.target;R.removeEventListener("dispose",C);let E=l.indexOf(R.__bindingPointIndex);l.splice(E,1),i.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function I(){for(let x in s)i.deleteBuffer(s[x]);l=[],s={},r={}}return{bind:u,update:h,dispose:I}}var A1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ei=null;function C1(){return Ei===null&&(Ei=new zr(A1,16,16,ss,pi),Ei.name="DFG_LUT",Ei.minFilter=yn,Ei.magFilter=yn,Ei.wrapS=yi,Ei.wrapT=yi,Ei.generateMipmaps=!1,Ei.needsUpdate=!0),Ei}var ul=class{constructor(t={}){let{canvas:e=Du(),context:n=null,depth:s=!0,stencil:r=!1,alpha:l=!1,antialias:o=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:m=!1,outputBufferType:T=Xn}=t;this.isWebGLRenderer=!0;let M;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=n.getContextAttributes().alpha}else M=l;let P=T,A=new Set([Eo,To,wo]),d=new Set([Xn,fi,ir,sr,Mo,bo]),C=new Uint32Array(4),I=new Int32Array(4),x=new at,R=null,E=null,U=[],_=[],N=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let H=this,Y=!1,b=null,J=null,X=null,Z=null;this._outputColorSpace=Cn;let lt=0,ht=0,Mt=null,$=-1,y=null,bt=new un,Yt=new un,At=null,K=new Le(0),ge=0,Ne=e.width,gt=e.height,pt=1,Kt=null,ae=null,Zt=new un(0,0,Ne,gt),Ee=new un(0,0,Ne,gt),Ue=!1,qt=new $s,Be=!1,we=!1,_e=new Je,xe=new at,Ie=new un,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ae=!1;function tn(){return Mt===null?pt:1}let tt=n;function Xe(g,V){return e.getContext(g,V)}let Pe,k,w,st,rt,ct,zt,It,ft,vt,Gt,jt,Rt,kt,Qt,xt,Lt,G,Et,mt,Tt,Dt,wt;try{let g={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:v};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",pe,!1),e.addEventListener("webglcontextrestored",Me,!1),e.addEventListener("webglcontextcreationerror",_n,!1),tt===null){let V="webgl2";if(tt=Xe(V,g),tt===null)throw Xe(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ie()}catch(g){throw e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",_n,!1),be("WebGLRenderer: "+g.message),g}function ie(){Pe=new Um(tt),Pe.init(),Tt=new M1(tt,Pe),k=new Tm(tt,Pe,t,Tt),w=new y1(tt,Pe),k.reversedDepthBuffer&&m&&w.buffers.depth.setReversed(!0),J=tt.createFramebuffer(),X=tt.createFramebuffer(),Z=tt.createFramebuffer(),st=new Bm(tt),rt=new r1,ct=new v1(tt,Pe,w,rt,k,Tt,st),zt=new Nm(H),It=new zf(tt),Dt=new Sm(tt,It),ft=new Fm(tt,It,st,Dt),vt=new zm(tt,ft,It,Dt,st),G=new km(tt,k,ct),Qt=new Em(rt),Gt=new s1(H,zt,Pe,k,Dt,Qt),jt=new T1(H,rt),Rt=new o1,kt=new f1(Pe),Lt=new bm(H,zt,w,vt,M,u),xt=new _1(H,vt,k),wt=new E1(tt,st,k,w),Et=new wm(tt,Pe,st),mt=new Om(tt,Pe,st),st.programs=Gt.programs,H.capabilities=k,H.extensions=Pe,H.properties=rt,H.renderLists=Rt,H.shadowMap=xt,H.state=w,H.info=st}P!==Xn&&(N=new Gm(P,e.width,e.height,o,s,r));let te=new th(H,tt);this.xr=te,this.getContext=function(){return tt},this.getContextAttributes=function(){return tt.getContextAttributes()},this.forceContextLoss=function(){let g=Pe.get("WEBGL_lose_context");g&&g.loseContext()},this.forceContextRestore=function(){let g=Pe.get("WEBGL_lose_context");g&&g.restoreContext()},this.getPixelRatio=function(){return pt},this.setPixelRatio=function(g){g!==void 0&&(pt=g,this.setSize(Ne,gt,!1))},this.getSize=function(g){return g.set(Ne,gt)},this.setSize=function(g,V,F=!0){if(te.isPresenting){Se("WebGLRenderer: Can't change size while VR device is presenting.");return}Ne=g,gt=V,e.width=Math.floor(g*pt),e.height=Math.floor(V*pt),F===!0&&(e.style.width=g+"px",e.style.height=V+"px"),N!==null&&N.setSize(e.width,e.height),this.setViewport(0,0,g,V)},this.getDrawingBufferSize=function(g){return g.set(Ne*pt,gt*pt).floor()},this.setDrawingBufferSize=function(g,V,F){Ne=g,gt=V,pt=F,e.width=Math.floor(g*F),e.height=Math.floor(V*F),this.setViewport(0,0,g,V)},this.setEffects=function(g){if(P===Xn){be("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(g){for(let V=0;V<g.length;V++)if(g[V].isOutputPass===!0){Se("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(g||[])},this.getCurrentViewport=function(g){return g.copy(bt)},this.getViewport=function(g){return g.copy(Zt)},this.setViewport=function(g,V,F,q){g.isVector4?Zt.set(g.x,g.y,g.z,g.w):Zt.set(g,V,F,q),w.viewport(bt.copy(Zt).multiplyScalar(pt).round())},this.getScissor=function(g){return g.copy(Ee)},this.setScissor=function(g,V,F,q){g.isVector4?Ee.set(g.x,g.y,g.z,g.w):Ee.set(g,V,F,q),w.scissor(Yt.copy(Ee).multiplyScalar(pt).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(g){w.setScissorTest(Ue=g)},this.setOpaqueSort=function(g){Kt=g},this.setTransparentSort=function(g){ae=g},this.getClearColor=function(g){return g.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(g=!0,V=!0,F=!0){let q=0;if(g){let j=!1;if(Mt!==null){let Ct=Mt.texture.format;j=A.has(Ct)}if(j){let Ct=Mt.texture.type,ot=d.has(Ct),_t=Lt.getClearColor(),Pt=Lt.getClearAlpha(),Xt=_t.r,de=_t.g,ye=_t.b;ot?(C[0]=Xt,C[1]=de,C[2]=ye,C[3]=Pt,tt.clearBufferuiv(tt.COLOR,0,C)):(I[0]=Xt,I[1]=de,I[2]=ye,I[3]=Pt,tt.clearBufferiv(tt.COLOR,0,I))}else q|=tt.COLOR_BUFFER_BIT}V&&(q|=tt.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),F&&(q|=tt.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&tt.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(g){g.setRenderer(this),b=g},this.dispose=function(){e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",_n,!1),Lt.dispose(),Rt.dispose(),kt.dispose(),rt.dispose(),zt.dispose(),vt.dispose(),Dt.dispose(),wt.dispose(),Gt.dispose(),te.dispose(),te.removeEventListener("sessionstart",Jt),te.removeEventListener("sessionend",Wt),ue.stop()};function pe(g){g.preventDefault(),Pr("WebGLRenderer: Context Lost."),Y=!0}function Me(){Pr("WebGLRenderer: Context Restored."),Y=!1;let g=st.autoReset,V=xt.enabled,F=xt.autoUpdate,q=xt.needsUpdate,j=xt.type;ie(),st.autoReset=g,xt.enabled=V,xt.autoUpdate=F,xt.needsUpdate=q,xt.type=j}function _n(g){be("WebGLRenderer: A WebGL context could not be created. Reason: ",g.statusMessage)}function W(g){let V=g.target;V.removeEventListener("dispose",W),ut(V)}function ut(g){Ut(g),rt.remove(g)}function Ut(g){let V=rt.get(g).programs;V!==void 0&&(V.forEach(function(F){Gt.releaseProgram(F)}),g.isShaderMaterial&&Gt.releaseShaderCache(g))}this.renderBufferDirect=function(g,V,F,q,j,Ct){V===null&&(V=Qe);let ot=j.isMesh&&j.matrixWorld.determinantAffine()<0,_t=D(g,V,F,q,j);w.setMaterial(q,ot);let Pt=F.index,Xt=1;if(q.wireframe===!0){if(Pt=ft.getWireframeAttribute(F),Pt===void 0)return;Xt=2}let de=F.drawRange,ye=F.attributes.position,ee=de.start*Xt,Ye=(de.start+de.count)*Xt;Ct!==null&&(ee=Math.max(ee,Ct.start*Xt),Ye=Math.min(Ye,(Ct.start+Ct.count)*Xt)),Pt!==null?(ee=Math.max(ee,0),Ye=Math.min(Ye,Pt.count)):ye!=null&&(ee=Math.max(ee,0),Ye=Math.min(Ye,ye.count));let fn=Ye-ee;if(fn<0||fn===1/0)return;Dt.setup(j,q,_t,F,Pt);let cn,an=Et;if(Pt!==null&&(cn=It.get(Pt),an=mt,an.setIndex(cn)),j.isMesh)q.wireframe===!0?(w.setLineWidth(q.wireframeLinewidth*tn()),an.setMode(tt.LINES)):an.setMode(tt.TRIANGLES);else if(j.isLine){let bn=q.linewidth;bn===void 0&&(bn=1),w.setLineWidth(bn*tn()),j.isLineSegments?an.setMode(tt.LINES):j.isLineLoop?an.setMode(tt.LINE_LOOP):an.setMode(tt.LINE_STRIP)}else j.isPoints?an.setMode(tt.POINTS):j.isSprite&&an.setMode(tt.TRIANGLES);if(j.isBatchedMesh)if(Pe.get("WEBGL_multi_draw"))an.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let bn=j._multiDrawStarts,re=j._multiDrawCounts,En=j._multiDrawCount,ze=Pt?It.get(Pt).bytesPerElement:1,en=rt.get(q).currentProgram.getUniforms();for(let An=0;An<En;An++)en.setValue(tt,"_gl_DrawID",An),an.render(bn[An]/ze,re[An])}else if(j.isInstancedMesh)an.renderInstances(ee,fn,j.count);else if(F.isInstancedBufferGeometry){let bn=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,re=Math.min(F.instanceCount,bn);an.renderInstances(ee,fn,re)}else an.render(ee,fn)};function Ft(g,V,F,q){b!==null&&g.isNodeMaterial&&b.setObject(q,g),Be===!0&&Qt.setState(g,F,!1),g.transparent===!0&&g.side===Qn&&g.forceSinglePass===!1?(g.side=kn,g.needsUpdate=!0,Ze(g,V,q),g.side=es,g.needsUpdate=!0,Ze(g,V,q),g.side=Qn):Ze(g,V,q)}this.compile=function(g,V,F=null){F===null&&(F=g),b!==null&&b.renderStart(g,V,F),E=kt.get(F),E.init(V),_.push(E),F.traverseVisible(function(j){j.isLight&&j.layers.test(V.layers)&&(E.pushLight(j),j.castShadow&&E.pushShadow(j))}),g!==F&&g.traverseVisible(function(j){j.isLight&&j.layers.test(V.layers)&&(E.pushLight(j),j.castShadow&&E.pushShadow(j))}),E.setupLights(),b!==null&&b.updateLights(E.state.lightsArray),we=this.localClippingEnabled,Be=Qt.init(this.clippingPlanes,we),Be===!0&&Qt.setGlobalState(this.clippingPlanes,V),b!==null&&xt.render(E.state.shadowsArray,F,V);let q=new Set;return g.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let Ct=j.material;if(Ct)if(Array.isArray(Ct))for(let ot=0;ot<Ct.length;ot++){let _t=Ct[ot];Ft(_t,F,V,j),q.add(_t)}else Ft(Ct,F,V,j),q.add(Ct)}),E=_.pop(),b!==null&&b.renderEnd(),q},this.compileAsync=function(g,V,F=null){let q=this.compile(g,V,F);return new Promise(j=>{function Ct(){if(q.forEach(function(ot){let Pt=rt.get(ot).currentProgram;(Pt===void 0||Pt.isReady())&&q.delete(ot)}),q.size===0){j(g);return}setTimeout(Ct,10)}Pe.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let Ot=null;function Bt(g){Ot&&Ot(g)}function Jt(){ue.stop()}function Wt(){ue.start()}let ue=new ld;ue.setAnimationLoop(Bt),typeof self<"u"&&ue.setContext(self),this.setAnimationLoop=function(g){Ot=g,te.setAnimationLoop(g),g===null?ue.stop():ue.start()},te.addEventListener("sessionstart",Jt),te.addEventListener("sessionend",Wt),this.render=function(g,V){if(V!==void 0&&V.isCamera!==!0){be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;b!==null&&b.renderStart(g,V);let F=te.enabled===!0&&te.isPresenting===!0,q=N!==null&&(Mt===null||F)&&N.begin(H,Mt);if(g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(te.cameraAutoUpdate===!0&&te.updateCamera(V),V=te.getCamera()),g.isScene===!0&&g.onBeforeRender(H,g,V,Mt),E=kt.get(g,_.length),E.init(V),E.state.textureUnits=ct.getTextureUnits(),_.push(E),_e.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),qt.setFromProjectionMatrix(_e,ui,V.reversedDepth),we=this.localClippingEnabled,Be=Qt.init(this.clippingPlanes,we),R=Rt.get(g,U.length),R.init(),U.push(R),te.enabled===!0&&te.isPresenting===!0){let ot=H.xr.getDepthSensingMesh();ot!==null&&se(ot,V,-1/0,H.sortObjects)}se(g,V,0,H.sortObjects),R.finish(),b!==null&&b.updateLights(E.state.lightsArray),H.sortObjects===!0&&R.sort(Kt,ae),Ae=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Ae&&Lt.addToRenderList(R,g),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Be===!0&&Qt.beginShadows();let j=E.state.shadowsArray;if(xt.render(j,g,V),Be===!0&&Qt.endShadows(),(q&&N.hasRenderPass())===!1){let ot=R.opaque,_t=R.transmissive;if(E.setupLights(),V.isArrayCamera){let Pt=V.cameras;if(_t.length>0)for(let Xt=0,de=Pt.length;Xt<de;Xt++){let ye=Pt[Xt];qe(ot,_t,g,ye)}Ae&&Lt.render(g);for(let Xt=0,de=Pt.length;Xt<de;Xt++){let ye=Pt[Xt];Ce(R,g,ye,ye.viewport)}}else _t.length>0&&qe(ot,_t,g,V),Ae&&Lt.render(g),Ce(R,g,V)}Mt!==null&&ht===0&&(ct.updateMultisampleRenderTarget(Mt),ct.updateRenderTargetMipmap(Mt)),q&&N.end(H),g.isScene===!0&&g.onAfterRender(H,g,V),Dt.resetDefaultState(),$=-1,y=null,_.pop(),_.length>0?(E=_[_.length-1],ct.setTextureUnits(E.state.textureUnits),Be===!0&&Qt.setGlobalState(H.clippingPlanes,E.state.camera)):E=null,U.pop(),U.length>0?R=U[U.length-1]:R=null,b!==null&&b.renderEnd()};function se(g,V,F,q){if(g.visible===!1)return;if(g.layers.test(V.layers)){if(g.isGroup)F=g.renderOrder;else if(g.isLOD)g.autoUpdate===!0&&g.update(V);else if(g.isLightProbeGrid)E.pushLightProbeGrid(g);else if(g.isLight)E.pushLight(g),g.castShadow&&E.pushShadow(g);else if(g.isSprite){if(!g.frustumCulled||g.intersectsFrustum(qt)){q&&Ie.setFromMatrixPosition(g.matrixWorld).applyMatrix4(_e);let ot=vt.update(g),_t=g.material;_t.visible&&R.push(g,ot,_t,F,Ie.z,null,V)}}else if((g.isMesh||g.isLine||g.isPoints)&&(!g.frustumCulled||g.intersectsFrustum(qt))){let ot=vt.update(g),_t=g.material;if(q&&(g.boundingSphere!==void 0?(g.boundingSphere===null&&g.computeBoundingSphere(),Ie.copy(g.boundingSphere.center)):(ot.boundingSphere===null&&ot.computeBoundingSphere(),Ie.copy(ot.boundingSphere.center)),Ie.applyMatrix4(g.matrixWorld).applyMatrix4(_e)),Array.isArray(_t)){let Pt=ot.groups;for(let Xt=0,de=Pt.length;Xt<de;Xt++){let ye=Pt[Xt],ee=_t[ye.materialIndex];ee&&ee.visible&&R.push(g,ot,ee,F,Ie.z,ye,V)}}else _t.visible&&R.push(g,ot,_t,F,Ie.z,null,V)}}let Ct=g.children;for(let ot=0,_t=Ct.length;ot<_t;ot++)se(Ct[ot],V,F,q)}function Ce(g,V,F,q){let{opaque:j,transmissive:Ct,transparent:ot}=g;E.setupLightsView(F),Be===!0&&Qt.setGlobalState(H.clippingPlanes,F),q&&w.viewport(bt.copy(q)),j.length>0&&dn(j,V,F),Ct.length>0&&dn(Ct,V,F),ot.length>0&&dn(ot,V,F),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function qe(g,V,F,q){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[q.id]===void 0){let ee=Pe.has("EXT_color_buffer_half_float")||Pe.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[q.id]=new Wn(1,1,{generateMipmaps:!0,type:ee?pi:Xn,minFilter:Ti,samples:Math.max(4,k.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:He.workingColorSpace})}let Ct=E.state.transmissionRenderTarget[q.id],ot=q.viewport||bt;Ct.setSize(ot.z*H.transmissionResolutionScale,ot.w*H.transmissionResolutionScale);let _t=H.getRenderTarget(),Pt=H.getActiveCubeFace(),Xt=H.getActiveMipmapLevel();H.setRenderTarget(Ct),H.getClearColor(K),ge=H.getClearAlpha(),ge<1&&H.setClearColor(16777215,.5),H.clear(),Ae&&Lt.render(F);let de=H.toneMapping;H.toneMapping=di;let ye=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),E.setupLightsView(q),Be===!0&&Qt.setGlobalState(H.clippingPlanes,q),dn(g,F,q),ct.updateMultisampleRenderTarget(Ct),ct.updateRenderTargetMipmap(Ct),Pe.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Ye=0,fn=V.length;Ye<fn;Ye++){let cn=V[Ye],{object:an,geometry:bn,material:re,group:En}=cn;if(re.side===Qn&&an.layers.test(q.layers)){let ze=re.side;re.side=kn,re.needsUpdate=!0,Te(an,F,q,bn,re,En),re.side=ze,re.needsUpdate=!0,ee=!0}}ee===!0&&(ct.updateMultisampleRenderTarget(Ct),ct.updateRenderTargetMipmap(Ct))}H.setRenderTarget(_t,Pt,Xt),H.setClearColor(K,ge),ye!==void 0&&(q.viewport=ye),H.toneMapping=de}function dn(g,V,F){let q=V.isScene===!0?V.overrideMaterial:null;for(let j=0,Ct=g.length;j<Ct;j++){let ot=g[j],{object:_t,geometry:Pt,group:Xt}=ot,de=ot.material;de.allowOverride===!0&&q!==null&&(de=q),_t.layers.test(F.layers)&&Te(_t,V,F,Pt,de,Xt)}}function Te(g,V,F,q,j,Ct){b!==null&&j.isNodeMaterial&&b.setObject(g,j),g.onBeforeRender(H,V,F,q,j,Ct),g.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,g.matrixWorld),g.normalMatrix.getNormalMatrix(g.modelViewMatrix),j.onBeforeRender(H,V,F,q,g,Ct),j.transparent===!0&&j.side===Qn&&j.forceSinglePass===!1?(j.side=kn,j.needsUpdate=!0,H.renderBufferDirect(F,V,q,j,g,Ct),j.side=es,j.needsUpdate=!0,H.renderBufferDirect(F,V,q,j,g,Ct),j.side=Qn):H.renderBufferDirect(F,V,q,j,g,Ct),g.onAfterRender(H,V,F,q,j,Ct)}function Ze(g,V,F){V.isScene!==!0&&(V=Qe);let q=rt.get(g),j=E.state.lights,Ct=E.state.shadowsArray,ot=j.state.version,_t=Gt.getParameters(g,j.state,Ct,V,F,E.state.lightProbeGridArray),Pt=Gt.getProgramCacheKey(_t),Xt=q.programs;q.environment=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?V.environment:null,q.fog=V.fog;let de=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap;q.envMap=zt.get(g.envMap||q.environment,de),q.envMapRotation=q.environment!==null&&g.envMap===null?V.environmentRotation:g.envMapRotation,Xt===void 0&&(g.addEventListener("dispose",W),Xt=new Map,q.programs=Xt);let ye=Xt.get(Pt);if(ye!==void 0){if(q.currentProgram===ye&&q.lightsStateVersion===ot)return ti(g,_t),ye}else _t.uniforms=Gt.getUniforms(g),b!==null&&g.isNodeMaterial&&b.build(g,F,_t),g.onBeforeCompile(_t,H),ye=Gt.acquireProgram(_t,Pt),Xt.set(Pt,ye),q.uniforms=_t.uniforms;let ee=q.uniforms;return(!g.isShaderMaterial&&!g.isRawShaderMaterial||g.clipping===!0)&&(ee.clippingPlanes=Qt.uniform),ti(g,_t),q.needsLights=it(g),q.lightsStateVersion=ot,q.needsLights&&(ee.ambientLightColor.value=j.state.ambient,ee.lightProbe.value=j.state.probe,ee.sunLights.value=j.state.sun,ee.sunLightShadows.value=j.state.sunShadow,ee.directionalLights.value=j.state.directional,ee.directionalLightShadows.value=j.state.directionalShadow,ee.spotLights.value=j.state.spot,ee.spotLightShadows.value=j.state.spotShadow,ee.rectAreaLights.value=j.state.rectArea,ee.ltc_1.value=j.state.rectAreaLTC1,ee.ltc_2.value=j.state.rectAreaLTC2,ee.pointLights.value=j.state.point,ee.pointLightShadows.value=j.state.pointShadow,ee.hemisphereLights.value=j.state.hemi,ee.sunShadowMatrix.value=j.state.sunShadowMatrix,ee.sunShadowCascade.value=j.state.sunShadowCascade,ee.directionalShadowMatrix.value=j.state.directionalShadowMatrix,ee.spotLightMatrix.value=j.state.spotLightMatrix,ee.spotLightMap.value=j.state.spotLightMap,ee.pointShadowMatrix.value=j.state.pointShadowMatrix),q.lightProbeGrid=E.state.lightProbeGridArray.length>0,q.currentProgram=ye,q.uniformsList=null,ye}function $e(g){if(g.uniformsList===null){let V=g.currentProgram.getUniforms();g.uniformsList=or.seqWithValue(V.seq,g.uniforms)}return g.uniformsList}function ti(g,V){let F=rt.get(g);F.outputColorSpace=V.outputColorSpace,F.batching=V.batching,F.batchingColor=V.batchingColor,F.instancing=V.instancing,F.instancingColor=V.instancingColor,F.instancingMorph=V.instancingMorph,F.skinning=V.skinning,F.morphTargets=V.morphTargets,F.morphNormals=V.morphNormals,F.morphColors=V.morphColors,F.morphTargetsCount=V.morphTargetsCount,F.numClippingPlanes=V.numClippingPlanes,F.numIntersection=V.numClipIntersection,F.vertexAlphas=V.vertexAlphas,F.vertexTangents=V.vertexTangents,F.toneMapping=V.toneMapping}function Tn(g,V){if(g.length===0)return null;if(g.length===1)return g[0].texture!==null?g[0]:null;x.setFromMatrixPosition(V.matrixWorld);for(let F=0,q=g.length;F<q;F++){let j=g[F];if(j.texture!==null&&j.boundingBox.containsPoint(x))return j}return null}function D(g,V,F,q,j){V.isScene!==!0&&(V=Qe),ct.resetTextureUnits();let Ct=V.fog,ot=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?V.environment:null,_t=Mt===null?H.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:He.workingColorSpace,Pt=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Xt=zt.get(q.envMap||ot,Pt),de=q.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,ye=!!F.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),ee=!!F.morphAttributes.position,Ye=!!F.morphAttributes.normal,fn=!!F.morphAttributes.color,cn=di;q.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(cn=H.toneMapping);let an=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,bn=an!==void 0?an.length:0,re=rt.get(q),En=E.state.lights;if(Be===!0&&(we===!0||g!==y)){let Ke=g===y&&q.id===$;Qt.setState(q,g,Ke)}let ze=!1;q.version===re.__version?(re.needsLights&&re.lightsStateVersion!==En.state.version||re.outputColorSpace!==_t||j.isBatchedMesh&&re.batching===!1||!j.isBatchedMesh&&re.batching===!0||j.isBatchedMesh&&re.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&re.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&re.instancing===!1||!j.isInstancedMesh&&re.instancing===!0||j.isSkinnedMesh&&re.skinning===!1||!j.isSkinnedMesh&&re.skinning===!0||j.isInstancedMesh&&re.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&re.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&re.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&re.instancingMorph===!1&&j.morphTexture!==null||re.envMap!==Xt||q.fog===!0&&re.fog!==Ct||re.numClippingPlanes!==void 0&&(re.numClippingPlanes!==Qt.numPlanes||re.numIntersection!==Qt.numIntersection)||re.vertexAlphas!==de||re.vertexTangents!==ye||re.morphTargets!==ee||re.morphNormals!==Ye||re.morphColors!==fn||re.toneMapping!==cn||re.morphTargetsCount!==bn||!!re.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(ze=!0):(ze=!0,re.__version=q.version);let en=re.currentProgram;ze===!0&&(en=Ze(q,V,j),b&&q.isNodeMaterial&&b.onUpdateProgram(q,en,re));let An=!1,Rn=!1,Ci=!1,Fe=en.getUniforms(),nn=re.uniforms;if(w.useProgram(en.program)&&(An=!0,Rn=!0,Ci=!0),q.id!==$&&($=q.id,Rn=!0),re.needsLights){let Ke=Tn(E.state.lightProbeGridArray,j);re.lightProbeGrid!==Ke&&(re.lightProbeGrid=Ke,Rn=!0)}if(An||y!==g){w.buffers.depth.getReversed()&&g.reversedDepth!==!0&&(g._reversedDepth=!0,g.updateProjectionMatrix()),Fe.setValue(tt,"projectionMatrix",g.projectionMatrix),Fe.setValue(tt,"viewMatrix",g.matrixWorldInverse);let On=Fe.map.cameraPosition;On!==void 0&&On.setValue(tt,xe.setFromMatrixPosition(g.matrixWorld)),k.logarithmicDepthBuffer&&Fe.setValue(tt,"logDepthBufFC",2/(Math.log(g.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Fe.setValue(tt,"isOrthographic",g.isOrthographicCamera===!0),y!==g&&(y=g,Rn=!0,Ci=!0)}if(re.needsLights&&(En.state.sunShadowMap.length>0&&Fe.setValue(tt,"sunShadowMap",En.state.sunShadowMap,ct),En.state.directionalShadowMap.length>0&&Fe.setValue(tt,"directionalShadowMap",En.state.directionalShadowMap,ct),En.state.spotShadowMap.length>0&&Fe.setValue(tt,"spotShadowMap",En.state.spotShadowMap,ct),En.state.pointShadowMap.length>0&&Fe.setValue(tt,"pointShadowMap",En.state.pointShadowMap,ct)),j.isSkinnedMesh){Fe.setOptional(tt,j,"bindMatrix"),Fe.setOptional(tt,j,"bindMatrixInverse");let Ke=j.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),Fe.setValue(tt,"boneTexture",Ke.boneTexture,ct))}j.isBatchedMesh&&(Fe.setOptional(tt,j,"batchingTexture"),Fe.setValue(tt,"batchingTexture",j._matricesTexture,ct),Fe.setOptional(tt,j,"batchingIdTexture"),Fe.setValue(tt,"batchingIdTexture",j._indirectTexture,ct),Fe.setOptional(tt,j,"batchingColorTexture"),j._colorsTexture!==null&&Fe.setValue(tt,"batchingColorTexture",j._colorsTexture,ct));let si=F.morphAttributes;if((si.position!==void 0||si.normal!==void 0||si.color!==void 0)&&G.update(j,F,en),(Rn||re.receiveShadow!==j.receiveShadow)&&(re.receiveShadow=j.receiveShadow,Fe.setValue(tt,"receiveShadow",j.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&V.environment!==null&&(nn.envMapIntensity.value=V.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=C1()),Rn){if(Fe.setValue(tt,"toneMappingExposure",H.toneMappingExposure),re.needsLights&&nt(nn,Ci),Ct&&q.fog===!0&&jt.refreshFogUniforms(nn,Ct),jt.refreshMaterialUniforms(nn,q,pt,gt,E.state.transmissionRenderTarget[g.id]),re.needsLights&&re.lightProbeGrid){let Ke=re.lightProbeGrid;nn.probesSH.value=Ke.texture,nn.probesMin.value.copy(Ke.boundingBox.min),nn.probesMax.value.copy(Ke.boundingBox.max),nn.probesResolution.value.copy(Ke.resolution)}or.upload(tt,$e(re),nn,ct)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(or.upload(tt,$e(re),nn,ct),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Fe.setValue(tt,"center",j.center),Fe.setValue(tt,"modelViewMatrix",j.modelViewMatrix),Fe.setValue(tt,"normalMatrix",j.normalMatrix),Fe.setValue(tt,"modelMatrix",j.matrixWorld),q.uniformsGroups!==void 0){let Ke=q.uniformsGroups;for(let On=0,ri=Ke.length;On<ri;On++){let vs=Ke[On];wt.update(vs,en),wt.bind(vs,en)}}return en}function nt(g,V){g.ambientLightColor.needsUpdate=V,g.lightProbe.needsUpdate=V,g.sunLights.needsUpdate=V,g.sunLightShadows.needsUpdate=V,g.directionalLights.needsUpdate=V,g.directionalLightShadows.needsUpdate=V,g.pointLights.needsUpdate=V,g.pointLightShadows.needsUpdate=V,g.spotLights.needsUpdate=V,g.spotLightShadows.needsUpdate=V,g.rectAreaLights.needsUpdate=V,g.hemisphereLights.needsUpdate=V}function it(g){return g.isMeshLambertMaterial||g.isMeshToonMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isShadowMaterial||g.isShaderMaterial&&g.lights===!0}this.getActiveCubeFace=function(){return lt},this.getActiveMipmapLevel=function(){return ht},this.getRenderTarget=function(){return Mt},this.setRenderTargetTextures=function(g,V,F){let q=rt.get(g);q.__autoAllocateDepthBuffer=g.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),rt.get(g.texture).__webglTexture=V,rt.get(g.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:F,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(g,V){let F=rt.get(g);F.__webglFramebuffer=V,F.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(g,V=0,F=0){Mt=g,lt=V,ht=F;let q=null,j=!1,Ct=!1;if(g){let _t=rt.get(g);if(_t.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(tt.FRAMEBUFFER,_t.__webglFramebuffer),bt.copy(g.viewport),Yt.copy(g.scissor),At=g.scissorTest,w.viewport(bt),w.scissor(Yt),w.setScissorTest(At),$=-1;return}else if(_t.__webglFramebuffer===void 0)ct.setupRenderTarget(g);else if(_t.__hasExternalTextures)ct.rebindTextures(g,rt.get(g.texture).__webglTexture,rt.get(g.depthTexture).__webglTexture);else if(g.depthBuffer){let de=g.depthTexture;if(_t.__boundDepthTexture!==de){if(de!==null&&rt.has(de)&&(g.width!==de.image.width||g.height!==de.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(g)}}let Pt=g.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(Ct=!0);let Xt=rt.get(g).__webglFramebuffer;g.isWebGLCubeRenderTarget?(Array.isArray(Xt[V])?q=Xt[V][F]:q=Xt[V],j=!0):g.samples>0&&ct.useMultisampledRTT(g)===!1?q=rt.get(g).__webglMultisampledFramebuffer:Array.isArray(Xt)?q=Xt[F]:q=Xt,bt.copy(g.viewport),Yt.copy(g.scissor),At=g.scissorTest}else bt.copy(Zt).multiplyScalar(pt).floor(),Yt.copy(Ee).multiplyScalar(pt).floor(),At=Ue;if(F!==0&&(q=J),w.bindFramebuffer(tt.FRAMEBUFFER,q)&&w.drawBuffers(g,q),w.viewport(bt),w.scissor(Yt),w.setScissorTest(At),j){let _t=rt.get(g.texture);tt.framebufferTexture2D(tt.FRAMEBUFFER,tt.COLOR_ATTACHMENT0,tt.TEXTURE_CUBE_MAP_POSITIVE_X+V,_t.__webglTexture,F)}else if(Ct){let _t=V;for(let Pt=0;Pt<g.textures.length;Pt++){let Xt=rt.get(g.textures[Pt]);tt.framebufferTextureLayer(tt.FRAMEBUFFER,tt.COLOR_ATTACHMENT0+Pt,Xt.__webglTexture,F,_t)}}else if(g!==null&&F!==0){let _t=rt.get(g.texture);tt.framebufferTexture2D(tt.FRAMEBUFFER,tt.COLOR_ATTACHMENT0,tt.TEXTURE_2D,_t.__webglTexture,F)}$=-1};function dt(g){let V=rt.get(g);return(V.__readFormat!==g.format||V.__readType!==g.type)&&(V.__readFormat=g.format,V.__readType=g.type,V.__formatReadable=k.textureFormatReadable(g.format),V.__typeReadable=k.textureTypeReadable(g.type)),V}this.readRenderTargetPixels=function(g,V,F,q,j,Ct,ot,_t=0){if(!(g&&g.isWebGLRenderTarget)){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=rt.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&ot!==void 0&&(Pt=Pt[ot]),Pt){w.bindFramebuffer(tt.FRAMEBUFFER,Pt);try{let Xt=g.textures[_t],de=Xt.format,ye=Xt.type;g.textures.length>1&&tt.readBuffer(tt.COLOR_ATTACHMENT0+_t);let ee=dt(Xt);if(ee.__formatReadable===!1){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ee.__typeReadable===!1){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=g.width-q&&F>=0&&F<=g.height-j&&tt.readPixels(V,F,q,j,Tt.convert(de),Tt.convert(ye),Ct)}finally{let Xt=Mt!==null?rt.get(Mt).__webglFramebuffer:null;w.bindFramebuffer(tt.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(g,V,F,q,j,Ct,ot,_t=0){if(!(g&&g.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=rt.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&ot!==void 0&&(Pt=Pt[ot]),Pt)if(V>=0&&V<=g.width-q&&F>=0&&F<=g.height-j){w.bindFramebuffer(tt.FRAMEBUFFER,Pt);let Xt=g.textures[_t],de=Xt.format,ye=Xt.type;g.textures.length>1&&tt.readBuffer(tt.COLOR_ATTACHMENT0+_t);let ee=dt(Xt);if(ee.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ee.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ye=tt.createBuffer();tt.bindBuffer(tt.PIXEL_PACK_BUFFER,Ye),tt.bufferData(tt.PIXEL_PACK_BUFFER,Ct.byteLength,tt.STREAM_READ),tt.readPixels(V,F,q,j,Tt.convert(de),Tt.convert(ye),0),tt.bindBuffer(tt.PIXEL_PACK_BUFFER,null);let fn=Mt!==null?rt.get(Mt).__webglFramebuffer:null;w.bindFramebuffer(tt.FRAMEBUFFER,fn);let cn=tt.fenceSync(tt.SYNC_GPU_COMMANDS_COMPLETE,0);return tt.flush(),await Uu(tt,cn,4),tt.bindBuffer(tt.PIXEL_PACK_BUFFER,Ye),tt.getBufferSubData(tt.PIXEL_PACK_BUFFER,0,Ct),tt.bindBuffer(tt.PIXEL_PACK_BUFFER,null),tt.deleteBuffer(Ye),tt.deleteSync(cn),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(g,V=null,F=0){let q=Math.pow(2,-F),j=Math.floor(g.image.width*q),Ct=Math.floor(g.image.height*q),ot=V!==null?V.x:0,_t=V!==null?V.y:0;ct.setTexture2D(g,0),tt.copyTexSubImage2D(tt.TEXTURE_2D,F,0,0,ot,_t,j,Ct),w.unbindTexture()},this.copyTextureToTexture=function(g,V,F=null,q=null,j=0,Ct=0){let ot,_t,Pt,Xt,de,ye,ee,Ye,fn,cn=g.isCompressedTexture?g.mipmaps[Ct]:g.image;if(F!==null)ot=F.max.x-F.min.x,_t=F.max.y-F.min.y,Pt=F.isBox3?F.max.z-F.min.z:1,Xt=F.min.x,de=F.min.y,ye=F.isBox3?F.min.z:0;else{let nn=Math.pow(2,-j);ot=Math.floor(cn.width*nn),_t=Math.floor(cn.height*nn),g.isDataArrayTexture?Pt=cn.depth:g.isData3DTexture?Pt=Math.floor(cn.depth*nn):Pt=1,Xt=0,de=0,ye=0}q!==null?(ee=q.x,Ye=q.y,fn=q.z):(ee=0,Ye=0,fn=0);let an=Tt.convert(V.format),bn=Tt.convert(V.type),re;V.isData3DTexture?(ct.setTexture3D(V,0),re=tt.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(ct.setTexture2DArray(V,0),re=tt.TEXTURE_2D_ARRAY):(ct.setTexture2D(V,0),re=tt.TEXTURE_2D),w.activeTexture(tt.TEXTURE0),w.pixelStorei(tt.UNPACK_FLIP_Y_WEBGL,V.flipY),w.pixelStorei(tt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),w.pixelStorei(tt.UNPACK_ALIGNMENT,V.unpackAlignment);let En=w.getParameter(tt.UNPACK_ROW_LENGTH),ze=w.getParameter(tt.UNPACK_IMAGE_HEIGHT),en=w.getParameter(tt.UNPACK_SKIP_PIXELS),An=w.getParameter(tt.UNPACK_SKIP_ROWS),Rn=w.getParameter(tt.UNPACK_SKIP_IMAGES);w.pixelStorei(tt.UNPACK_ROW_LENGTH,cn.width),w.pixelStorei(tt.UNPACK_IMAGE_HEIGHT,cn.height),w.pixelStorei(tt.UNPACK_SKIP_PIXELS,Xt),w.pixelStorei(tt.UNPACK_SKIP_ROWS,de),w.pixelStorei(tt.UNPACK_SKIP_IMAGES,ye);let Ci=g.isDataArrayTexture||g.isData3DTexture,Fe=V.isDataArrayTexture||V.isData3DTexture;if(g.isDepthTexture){let nn=rt.get(g),si=rt.get(V),Ke=rt.get(nn.__renderTarget),On=rt.get(si.__renderTarget);w.bindFramebuffer(tt.READ_FRAMEBUFFER,Ke.__webglFramebuffer),w.bindFramebuffer(tt.DRAW_FRAMEBUFFER,On.__webglFramebuffer);for(let ri=0;ri<Pt;ri++)Ci&&(tt.framebufferTextureLayer(tt.READ_FRAMEBUFFER,tt.COLOR_ATTACHMENT0,rt.get(g).__webglTexture,j,ye+ri),tt.framebufferTextureLayer(tt.DRAW_FRAMEBUFFER,tt.COLOR_ATTACHMENT0,rt.get(V).__webglTexture,Ct,fn+ri)),tt.blitFramebuffer(Xt,de,ot,_t,ee,Ye,ot,_t,tt.DEPTH_BUFFER_BIT,tt.NEAREST);w.bindFramebuffer(tt.READ_FRAMEBUFFER,null),w.bindFramebuffer(tt.DRAW_FRAMEBUFFER,null)}else if(j!==0||g.isRenderTargetTexture||rt.has(g)){let nn=rt.get(g),si=rt.get(V);w.bindFramebuffer(tt.READ_FRAMEBUFFER,X),w.bindFramebuffer(tt.DRAW_FRAMEBUFFER,Z);for(let Ke=0;Ke<Pt;Ke++)Ci?tt.framebufferTextureLayer(tt.READ_FRAMEBUFFER,tt.COLOR_ATTACHMENT0,nn.__webglTexture,j,ye+Ke):tt.framebufferTexture2D(tt.READ_FRAMEBUFFER,tt.COLOR_ATTACHMENT0,tt.TEXTURE_2D,nn.__webglTexture,j),Fe?tt.framebufferTextureLayer(tt.DRAW_FRAMEBUFFER,tt.COLOR_ATTACHMENT0,si.__webglTexture,Ct,fn+Ke):tt.framebufferTexture2D(tt.DRAW_FRAMEBUFFER,tt.COLOR_ATTACHMENT0,tt.TEXTURE_2D,si.__webglTexture,Ct),j!==0?tt.blitFramebuffer(Xt,de,ot,_t,ee,Ye,ot,_t,tt.COLOR_BUFFER_BIT,tt.NEAREST):Fe?tt.copyTexSubImage3D(re,Ct,ee,Ye,fn+Ke,Xt,de,ot,_t):tt.copyTexSubImage2D(re,Ct,ee,Ye,Xt,de,ot,_t);w.bindFramebuffer(tt.READ_FRAMEBUFFER,null),w.bindFramebuffer(tt.DRAW_FRAMEBUFFER,null)}else Fe?g.isDataTexture||g.isData3DTexture?tt.texSubImage3D(re,Ct,ee,Ye,fn,ot,_t,Pt,an,bn,cn.data):V.isCompressedArrayTexture?tt.compressedTexSubImage3D(re,Ct,ee,Ye,fn,ot,_t,Pt,an,cn.data):tt.texSubImage3D(re,Ct,ee,Ye,fn,ot,_t,Pt,an,bn,cn):g.isDataTexture?tt.texSubImage2D(tt.TEXTURE_2D,Ct,ee,Ye,ot,_t,an,bn,cn.data):g.isCompressedTexture?tt.compressedTexSubImage2D(tt.TEXTURE_2D,Ct,ee,Ye,cn.width,cn.height,an,cn.data):tt.texSubImage2D(tt.TEXTURE_2D,Ct,ee,Ye,ot,_t,an,bn,cn);w.pixelStorei(tt.UNPACK_ROW_LENGTH,En),w.pixelStorei(tt.UNPACK_IMAGE_HEIGHT,ze),w.pixelStorei(tt.UNPACK_SKIP_PIXELS,en),w.pixelStorei(tt.UNPACK_SKIP_ROWS,An),w.pixelStorei(tt.UNPACK_SKIP_IMAGES,Rn),Ct===0&&V.generateMipmaps&&tt.generateMipmap(re),w.unbindTexture()},this.initRenderTarget=function(g){rt.get(g).__webglFramebuffer===void 0&&ct.setupRenderTarget(g)},this.initTexture=function(g){g.isCubeTexture?ct.setTextureCube(g,0):g.isData3DTexture?ct.setTexture3D(g,0):g.isDataArrayTexture||g.isCompressedArrayTexture?ct.setTexture2DArray(g,0):ct.setTexture2D(g,0),w.unbindTexture()},this.resetState=function(){lt=0,ht=0,Mt=null,w.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=He._getDrawingBufferColorSpace(t),e.unpackColorSpace=He._getUnpackColorSpace()}};window.FestaGL=(()=>{let i=Math.PI*2,t=(d,C,I)=>Math.min(I,Math.max(C,d)),e={add:(d,C)=>[d[0]+C[0],d[1]+C[1],d[2]+C[2]],sub:(d,C)=>[d[0]-C[0],d[1]-C[1],d[2]-C[2]],mul:(d,C)=>[d[0]*C,d[1]*C,d[2]*C],dot:(d,C)=>d[0]*C[0]+d[1]*C[1]+d[2]*C[2],cross:(d,C)=>[d[1]*C[2]-d[2]*C[1],d[2]*C[0]-d[0]*C[2],d[0]*C[1]-d[1]*C[0]],len:d=>Math.hypot(...d),norm:d=>{let C=Math.hypot(...d)||1;return d.map(I=>I/C)}},n={identity:()=>new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),multiply:(d,C)=>{let I=new Float32Array(16);for(let x=0;x<4;x++)for(let R=0;R<4;R++)I[x*4+R]=d[R]*C[x*4]+d[4+R]*C[x*4+1]+d[8+R]*C[x*4+2]+d[12+R]*C[x*4+3];return I},perspective:(d,C,I,x)=>{let R=1/Math.tan(d/2),E=new Float32Array(16);return E[0]=R/C,E[5]=R,E[10]=(x+I)/(I-x),E[11]=-1,E[14]=2*x*I/(I-x),E},ortho:(d,C,I,x,R,E)=>new Float32Array([2/(C-d),0,0,0,0,2/(x-I),0,0,0,0,-2/(E-R),0,-(C+d)/(C-d),-(x+I)/(x-I),-(E+R)/(E-R),1]),lookAt:(d,C,I=[0,1,0])=>{let x=e.norm(e.sub(d,C)),R=e.norm(e.cross(I,x)),E=e.cross(x,R);return new Float32Array([R[0],E[0],x[0],0,R[1],E[1],x[1],0,R[2],E[2],x[2],0,-e.dot(R,d),-e.dot(E,d),-e.dot(x,d),1])},compose:(d=0,C=0,I=0,x=0,R=1,E=R,U=R)=>{let _=Math.cos(x),N=Math.sin(x);return new Float32Array([_*R,0,-N*R,0,0,E,0,0,N*U,0,_*U,0,d,C,I,1])},transform:(d,C,I=1)=>[d[0]*C[0]+d[4]*C[1]+d[8]*C[2]+d[12]*I,d[1]*C[0]+d[5]*C[1]+d[9]*C[2]+d[13]*I,d[2]*C[0]+d[6]*C[1]+d[10]*C[2]+d[14]*I],inverse:d=>{let C=new Float32Array(16),I=Array.from(d),x=Array.from({length:4},(R,E)=>[I[E],I[E+4],I[E+8],I[E+12],...Array.from({length:4},(U,_)=>E===_?1:0)]);for(let R=0;R<4;R++){let E=R;for(let _=R+1;_<4;_++)Math.abs(x[_][R])>Math.abs(x[E][R])&&(E=_);[x[R],x[E]]=[x[E],x[R]];let U=x[R][R];if(Math.abs(U)<1e-12)return n.identity();for(let _=0;_<8;_++)x[R][_]/=U;for(let _=0;_<4;_++)if(_!==R){let N=x[_][R];for(let H=0;H<8;H++)x[_][H]-=N*x[R][H]}}for(let R=0;R<4;R++)for(let E=0;E<4;E++)C[E*4+R]=x[R][E+4];return C}};function s(d){return Array.isArray(d)?d:typeof d=="number"?[(d>>16&255)/255,(d>>8&255)/255,(d&255)/255]:(d=d.replace("#",""),d.length===3&&(d=d.split("").map(C=>C+C).join("")),s(parseInt(d,16)))}function r(d=91371){let C=d>>>0;return()=>{C+=1831565813;let I=C;return I=Math.imul(I^I>>>15,I|1),I^=I+Math.imul(I^I>>>7,I|61),((I^I>>>14)>>>0)/4294967296}}let l=(d="#ffffff",C=0,I=.7,x=0,R=0,E=1)=>({color:s(d),p:[C,I,x,R],ao:E});class o{constructor(){this.data=new Float32Array(262144),this.used=0,this.count=0,this.transform=n.identity(),this.animation=[0,0,0,0]}reserve(C){if(this.used+C>this.data.length){let I=new Float32Array(Math.max(this.data.length*2,this.used+C));I.set(this.data),this.data=I}}vertex(C,I,x,R){this.reserve(20),C=n.transform(this.transform,C),I=e.norm(n.transform(this.transform,I,0));let E=this.data,U=this.used,_=R.color;for(let N=0;N<3;N++)E[U+N]=C[N];for(let N=0;N<3;N++)E[U+3+N]=I[N];E[U+6]=x[0],E[U+7]=x[1],E[U+8]=_[0],E[U+9]=_[1],E[U+10]=_[2],E[U+11]=R.ao??1;for(let N=0;N<4;N++)E[U+12+N]=R.p[N];for(let N=0;N<4;N++)E[U+16+N]=this.animation[N];this.used+=20,this.count++}tri(C,I,x,R,E=[[0,0],[0,1],[1,1]],U=null){let _=e.norm(e.cross(e.sub(I,C),e.sub(x,C)));this.vertex(C,U?U[0]:_,E[0],R),this.vertex(I,U?U[1]:_,E[1],R),this.vertex(x,U?U[2]:_,E[2],R)}quad(C,I,x,R,E,U=1,_=1){this.tri(C,I,x,E,[[0,0],[0,_],[U,_]]),this.tri(C,x,R,E,[[0,0],[U,_],[U,0]])}box(C,I,x,R,E,U,_){let N=C-R/2,H=C+R/2,Y=I-E/2,b=I+E/2,J=x-U/2,X=x+U/2;this.quad([N,b,X],[N,Y,X],[H,Y,X],[H,b,X],_,_.fit?1:R,_.fit?1:E),this.quad([H,b,J],[H,Y,J],[N,Y,J],[N,b,J],_,_.fit?1:R,_.fit?1:E),this.quad([H,b,X],[H,Y,X],[H,Y,J],[H,b,J],_,_.fit?1:U,_.fit?1:E),this.quad([N,b,J],[N,Y,J],[N,Y,X],[N,b,X],_,_.fit?1:U,_.fit?1:E),this.quad([N,b,J],[N,b,X],[H,b,X],[H,b,J],_,_.fit?1:R,_.fit?1:U),this.quad([N,Y,X],[N,Y,J],[H,Y,J],[H,Y,X],_,_.fit?1:R,_.fit?1:U)}plane(C,I,x,R,E,U,_=R,N=E){this.quad([C-R/2,I,x-E/2],[C-R/2,I,x+E/2],[C+R/2,I,x+E/2],[C+R/2,I,x-E/2],U,_,N)}sphere(C,I,x,R,E,U,_,N=16,H=10,Y=0,b=Math.PI){let J=(X,Z)=>{let lt=X/N*i,ht=Y+Z/H*(b-Y),Mt=[Math.sin(ht)*Math.cos(lt),Math.cos(ht),Math.sin(ht)*Math.sin(lt)];return{p:[C+Mt[0]*R,I+Mt[1]*E,x+Mt[2]*U],n:e.norm([Mt[0]/R,Mt[1]/E,Mt[2]/U]),uv:[X/N,Z/H]}};for(let X=0;X<H;X++)for(let Z=0;Z<N;Z++){let lt=J(Z,X),ht=J(Z,X+1),Mt=J(Z+1,X+1),$=J(Z+1,X);for(let y of[[lt,ht,Mt],[lt,Mt,$]]){let bt=e.cross(e.sub(y[1].p,y[0].p),e.sub(y[2].p,y[0].p));e.dot(bt,y[0].n)<0&&([y[1],y[2]]=[y[2],y[1]]),this.tri(...y.map(Yt=>Yt.p),_,y.map(Yt=>Yt.uv),y.map(Yt=>Yt.n))}}}cylinder(C,I,x,R,E,U=12,_=!0){let N=e.norm(e.sub(I,C)),H=e.norm(e.cross(N,Math.abs(N[1])>.95?[1,0,0]:[0,1,0])),Y=e.cross(N,H),b=e.len(e.sub(I,C)),J=(Z,lt,ht)=>e.add(Z,e.add(e.mul(H,Math.cos(ht)*lt),e.mul(Y,Math.sin(ht)*lt))),X=Z=>e.norm(e.add(e.add(e.mul(H,Math.cos(Z)),e.mul(Y,Math.sin(Z))),e.mul(N,(x-R)/b)));for(let Z=0;Z<U;Z++){let lt=Z/U*i,ht=(Z+1)/U*i,Mt=J(C,x,lt),$=J(I,R,lt),y=J(I,R,ht),bt=J(C,x,ht),Yt=X(lt),At=X(ht);this.tri(Mt,y,$,E,[[Z/U,0],[(Z+1)/U,b],[Z/U,b]],[Yt,At,Yt]),this.tri(Mt,bt,y,E,[[Z/U,0],[(Z+1)/U,0],[(Z+1)/U,b]],[Yt,At,At]),_&&(this.tri(C,bt,Mt,E),this.tri(I,$,y,E))}}disk(C,I,x,R,E,U=32){for(let _=0;_<U;_++){let N=_/U*i,H=(_+1)/U*i;this.tri([C,I,x],[C+Math.cos(H)*R,I,x+Math.sin(H)*R],[C+Math.cos(N)*R,I,x+Math.sin(N)*R],E,[[.5,.5],[.5+Math.cos(H)*.5,.5+Math.sin(H)*.5],[.5+Math.cos(N)*.5,.5+Math.sin(N)*.5]])}}tube(C,I,x,R=8){for(let E=1;E<C.length;E++)this.cylinder(C[E-1],C[E],I,I,x,R)}sign(C,I,x,R,E,U,_=!1){let N=l("#ffffff",U,.8,0,.15);this.quad([C-R/2,I+E/2,x],[C-R/2,I-E/2,x],[C+R/2,I-E/2,x],[C+R/2,I+E/2,x],N),_&&this.box(C,I,x-.022,R+.05,E+.05,.04,l("#574333",3))}scope(C,I){let x=this.transform;this.transform=n.multiply(x,C),I(),this.transform=x}animate(C,I,x){let R=this.animation;this.animation=[...C,I],x(),this.animation=R}}class u{constructor(C=512){this.size=C,this.layers=[],this.names={}}add(C,I){let x=document.createElement("canvas");x.width=x.height=this.size;let R=x.getContext("2d",{willReadFrequently:!0});I&&I(R,this.size);let E=this.layers.length;return this.layers.push(x),this.names[C]=E,E}sign(C,I,x="",R="#304c55",E=""){return this.add(C,(U,_)=>{U.fillStyle="#f9f7f0",U.fillRect(0,0,_,_),U.fillStyle=R,U.fillRect(0,0,_,62),U.fillStyle="#ffffff",U.font='700 24px "Noto Sans CJK JP", "Yu Gothic", sans-serif',U.fillText(E||C,22,41),U.fillStyle="#273b3c";let N=h(U,I,_-52,37),H=N.length>3?30:37;N=h(U,I,_-52,H),U.font=`700 ${H}px "Noto Sans CJK JP", "Yu Gothic", sans-serif`;let Y=154-Math.min(N.length,4)*4;N.slice(0,4).forEach((X,Z)=>U.fillText(X,26,Y+Z*(H+10))),U.fillStyle="#53605b",U.font='500 25px "Noto Sans CJK JP", "Yu Gothic", sans-serif';let b=h(U,x,_-52,25),J=Math.max(300,Y+N.length*(H+10)+25);b.slice(0,4).forEach((X,Z)=>U.fillText(X,26,J+Z*34)),U.fillStyle=R,U.fillRect(26,_-53,_-52,3),U.fillStyle="#6b7770",U.font='19px "Noto Sans CJK JP", "Yu Gothic", sans-serif',U.fillText("つながりフェスタ 2026",26,_-23)})}banner(C,I,x="",R="#174f54"){return this.add(C,(E,U)=>{E.scale(1,U/112),E.fillStyle="#f9f7f0",E.fillRect(0,0,U,112),E.fillStyle=R,E.fillRect(0,0,76,112),E.fillStyle="#fff",E.font='700 23px "Noto Sans CJK JP", "Yu Gothic", sans-serif',E.textAlign="center",E.fillText(C,38,64);let _=29;for(;_>17&&(E.font=`700 ${_}px "Noto Sans CJK JP", "Yu Gothic", sans-serif`,!(E.measureText(I).width<U-104));)_--;E.textAlign="left",E.fillStyle="#263d3c",E.fillText(I,92,52),E.font='500 17px "Noto Sans CJK JP", "Yu Gothic", sans-serif',E.fillStyle="#5b675d";let N=x;for(;E.measureText(N).width>U-109&&N.length;)N=N.slice(0,-1);E.fillText(N,92,84),E.fillStyle=R,E.fillRect(76,106,U-76,6)})}upload(C,I=this.size){let x=new Uint8Array(I*I*4*this.layers.length),R=document.createElement("canvas");R.width=R.height=I;let E=R.getContext("2d");this.layers.forEach((U,_)=>{E.clearRect(0,0,I,I),E.drawImage(U,0,0,I,I),x.set(E.getImageData(0,0,I,I).data,_*I*I*4)}),this.texture=new fs(x,I,I,this.layers.length),this.texture.colorSpace=Cn,this.texture.wrapS=this.texture.wrapT=Ws,this.texture.minFilter=Ti,this.texture.magFilter=yn,this.texture.generateMipmaps=!0,this.texture.anisotropy=4,this.texture.needsUpdate=!0}}function h(d,C,I,x){d.font=`700 ${x}px "Noto Sans CJK JP", "Yu Gothic", sans-serif`;let R=[],E="";for(let U of C){if(U===`
`){R.push(E),E="";continue}d.measureText(E+U).width>I&&E?(R.push(E),E=U):E+=U}return E&&R.push(E),R}let p=`#version 300 es
 precision highp float;out vec2 vUV;void main(){vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));vUV=p;gl_Position=vec4(p*2.-1.,0.,1.);}`,v=`#version 300 es
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
 `;function M(d,C,I=!1){return d.onBeforeCompile=x=>{x.uniforms.festaTime=C.timeUniform,x.uniforms.festaAtlas=C.atlasUniform,x.vertexShader=m+x.vertexShader,x.vertexShader=x.vertexShader.replace("#include <begin_vertex>",T).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
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
reflectedLight.indirectDiffuse*=festaShade;`))},d.customProgramCacheKey=()=>I?"festa-depth-2":"festa-standard-2",d}class P{constructor(C,I,{name:x="",shadow:R=!0,instances:E=null,dynamic:U=!1}={}){this.name=x,this.renderer=C,this.count=I.count,this.shadow=R,this.dynamic=U,this.instances=E||[{matrix:n.identity(),info:[0,0,0,0]}];let _=I.data.slice(0,I.used),N=new Le;for(let b=0;b<_.length;b+=20)N.setRGB(_[b+8],_[b+9],_[b+10],Cn),_[b+8]=N.r,_[b+9]=N.g,_[b+10]=N.b;let H=new $n,Y=new Fr(_,20);for(let[b,J,X]of[["position",3,0],["normal",3,3],["uv",2,6],["color",3,8],["festaAO",1,11],["festaSurface",4,12],["festaAnimation",4,16]])H.setAttribute(b,new Or(Y,J,X));this.info=new ps(new Float32Array(this.instances.length*4),4),this.info.setUsage(al),H.setAttribute("festaInfo",this.info),this.object=new Vr(H,C.surfaceMaterial,this.instances.length),this.object.name=x,this.object.castShadow=R,this.object.receiveShadow=!0,this.object.frustumCulled=!1,this.object.customDepthMaterial=C.depthMaterial,this.object.instanceMatrix.setUsage(al),this.matrix=new Je,this.updateInstances(),C.scene.add(this.object),C.meshes.push(this),I.data=null}get visible(){return this.object.visible}set visible(C){this.object.visible=C}updateInstances(){this.instances.forEach((C,I)=>{this.object.setMatrixAt(I,this.matrix.fromArray(C.matrix)),this.info.set(C.info||[0,0,0,0],I*4)}),this.object.instanceMatrix.needsUpdate=!0,this.info.needsUpdate=!0}dispose(){this.renderer.scene.remove(this.object),this.object.geometry.dispose(),this.object.dispose(),this.renderer.meshes=this.renderer.meshes.filter(C=>C!==this)}}class A{constructor(C,I="standard"){this.canvas=C,this.engine=new ul({canvas:C,alpha:!1,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0}),this.gl=this.engine.getContext(),this.engine.outputColorSpace=Cn,this.engine.toneMapping=jr,this.engine.shadowMap.enabled=!0,this.engine.shadowMap.type=ms,this.engine.shadowMap.autoUpdate=!1,this.scene=new Dr,this.scene.fog=new Lr("#c5d3d8",110,420),this.camera={eye:[0,1.68,20],target:[0,1.68,0],fov:66*Math.PI/180,near:.065,far:700},this.threeCamera=new Dn,this.meshes=[],this.quality=I,this.time=0,this.exposure=1.12,this.sun=e.norm([-.38,.79,.48]),this.sunColor=[1,.94,.81],this.sunPower=3.7,this.timeUniform={value:0},this.atlasUniform={value:null},this.surfaceMaterial=M(new Xr({color:16777215,vertexColors:!0,roughness:1,metalness:1,side:Qn,alphaTest:.4}),this),this.depthMaterial=M(new Qs({depthPacking:Rc,side:Qn,alphaTest:.4}),this,!0),this.hemisphere=new Zr("#c7e0f5","#817562",1.8),this.scene.add(this.hemisphere),this.sunLight=new $r(16777215,this.sunPower),this.sunLight.castShadow=!0,this.scene.add(this.sunLight,this.sunLight.target),this.stats={draws:0,triangles:0,fps:0},this.frameCount=0,this.fpsStamp=performance.now(),this.shadowAge=-1,this.shadowDirty=!0,this.targetSize=[0,0];let x=new $n;x.setAttribute("position",new Gn([-1,-1,0,3,-1,0,-1,3,0],3)),this.skyUniforms={uInvVP:{value:new Je},uEye:{value:new at},uSun:{value:new at},uTime:this.timeUniform};let R=new js({glslVersion:oa,vertexShader:p.replace("#version 300 es","").replace("0.,1.);","1.,1.);"),fragmentShader:v.replace("#version 300 es","").replace("frag=vec4(sky,1.);","sky=sky*1.12; sky=clamp((sky*(2.51*sky+.03))/(sky*(2.43*sky+.59)+.14),0.,1.);frag=vec4(pow(sky,vec3(1./2.2)),1.);"),uniforms:this.skyUniforms,depthWrite:!1,depthTest:!1});this.sky=new Un(x,R),this.sky.frustumCulled=!1,this.sky.renderOrder=-1e3,this.scene.add(this.sky),this.setQuality(I)}set atlas(C){this._atlas=C,this.atlasUniform.value=C.texture}get atlas(){return this._atlas}setQuality(C){this.quality=C,this.pixelRatio=C==="high"?Math.min(devicePixelRatio,1.75):C==="low"?.8:Math.min(devicePixelRatio,1.15),this.shadowSize=C==="high"?4096:C==="low"?1024:2048,this.engine.setPixelRatio(this.pixelRatio),this.createShadow(),this.resize()}createShadow(){let C=this.sunLight,I=C.shadow;C.position.set(-3+this.sun[0]*230,this.sun[1]*230,26+this.sun[2]*230),C.target.position.set(-3,0,26),C.color.setRGB(...this.sunColor),C.intensity=this.sunPower,Object.assign(I.camera,{left:-108,right:108,top:108,bottom:-108,near:1,far:500}),I.camera.updateProjectionMatrix(),I.bias=-15e-5,I.normalBias=216/this.shadowSize*1.35,I.mapSize.x!==this.shadowSize&&(I.map?.dispose(),I.map=null,I.mapSize.set(this.shadowSize,this.shadowSize)),this.shadowDirty=!0}resize(){let C=Math.max(1,this.canvas.clientWidth),I=Math.max(1,this.canvas.clientHeight);C===this.targetSize[0]&&I===this.targetSize[1]&&this.engine.getPixelRatio()===this.pixelRatio||(this.targetSize=[C,I],this.engine.setSize(C,I,!1))}render(C=0){if(!this.atlas)return;this.time=C,this.timeUniform.value=C,this.resize();let I=this.camera,x=this.threeCamera;x.position.fromArray(I.eye),x.up.set(0,1,0),x.lookAt(new at(...I.target)),x.fov=I.fov*180/Math.PI,x.aspect=this.canvas.clientWidth/this.canvas.clientHeight,x.near=I.near,x.far=I.far,x.updateProjectionMatrix(),x.updateMatrixWorld(),this.vp=new Je().multiplyMatrices(x.projectionMatrix,x.matrixWorldInverse).elements,this.invVp=new Je().fromArray(this.vp).invert().elements,this.skyUniforms.uInvVP.value.fromArray(this.invVp),this.skyUniforms.uEye.value.fromArray(I.eye),this.skyUniforms.uSun.value.fromArray(this.sun),this.engine.toneMappingExposure=this.exposure,(this.shadowDirty||C-this.shadowAge>.45)&&(this.engine.shadowMap.needsUpdate=!0,this.shadowDirty=!1,this.shadowAge=C),this.engine.render(this.scene,x),this.stats.draws=this.engine.info.render.calls,this.stats.triangles=this.engine.info.render.triangles,this.frameCount++;let R=performance.now();R-this.fpsStamp>1500&&(this.stats.fps=Math.round(this.frameCount*1e3/(R-this.fpsStamp)),this.frameCount=0,this.fpsStamp=R)}project(C){if(!this.vp)return null;let I=this.vp,x=n.transform(I,C),R=I[3]*C[0]+I[7]*C[1]+I[11]*C[2]+I[15];return R<=0?null:{x:(x[0]/R*.5+.5)*this.canvas.clientWidth,y:(-x[1]/R*.5+.5)*this.canvas.clientHeight,z:x[2]/R}}screenRay(C,I){if(!this.invVp)return null;let x=new Kr;return x.setFromCamera(new ke(C/this.canvas.clientWidth*2-1,1-I/this.canvas.clientHeight*2),this.threeCamera),x}groundPoint(C,I){return this.screenRay(C,I)?.ray.intersectPlane(new Jn(new at(0,1,0),0),new at)?.toArray()||null}signFace(C,I,x,R){let E=this.screenRay(C,I),U=E?.intersectObject(x.object,!1)[0];return U?(E.far=U.distance-.001,E.intersectObjects(R.filter(N=>N.visible).map(N=>N.object),!1).length?null:U.faceIndex):null}}return{V:e,M:n,Geometry:o,Mesh:P,Renderer:A,Atlas:u,material:l,color:s,rng:r,clamp:t,TAU:i,wrap:h}})();window.FestaScenery={height(i,t){let e=(u,h,p,v,m)=>{let T=Math.hypot((i-u)/p,(t-h)/v);return T<1?m*Math.pow(Math.cos(T*Math.PI/2),2):0},n=Math.max(e(112,-4,49,100,25),e(130,82,65,84,22),e(-113,7,41,40,20),e(-39,-103,63,47,15),e(8,-107,45,48,20),e(53,-105,49,46,16));if(i<60.8||i>=103.2||t<=15.08||t>=96.08)return n;let s=u=>(u=Math.max(0,Math.min(1,u)),u*u*(3-2*u)),r=s((t-15.08)/12)*(1-s((t-80.08)/16)),l=s((i-75.2)/28),o=3.7+(Math.max(n,3.7)-3.7)*l;return n+(o-n)*r},textures(i,t){let e=i.layers[3],n=e.getContext("2d"),s=e.width,r=t(8401),l=n.createImageData(s,s);for(let o=0;o<s;o++)for(let u=0;u<s;u++){let h=Math.sin(u/s*Math.PI*4+.5)*Math.cos(o/s*Math.PI*6)*1.7,p=(r()-.5)*9+h,v=(o*s+u)*4;l.data[v]=241+p,l.data[v+1]=239+p,l.data[v+2]=229+p,l.data[v+3]=255}n.putImageData(l,0,0);for(let o of[7,8]){let u=i.layers[o].getContext("2d"),h=t(301+o);u.clearRect(0,0,s,s);for(let p=0;p<1700;p++){let v=h()*Math.PI*2,m=Math.sqrt(h()),T=.5+Math.cos(v)*m*.45,M=.5+Math.sin(v)*m*.42;if(m>.84&&h()>.52)continue;let P=(1-M)*12+h()*17,A=o===7?76+h()*30:18+h()*24;u.fillStyle=`hsl(${A},${o===7?24+h()*22:38+h()*20}%,${16+P}%)`,u.beginPath(),u.ellipse(T*s,M*s,3+h()*7,2+h()*4,h()*6.28,0,6.28),u.fill()}}return i.add("Window reflection",(o,u)=>{let h=o.createLinearGradient(0,0,0,u);h.addColorStop(0,"#9baeb3"),h.addColorStop(.46,"#667d81"),h.addColorStop(.49,"#536562"),h.addColorStop(1,"#364743"),o.fillStyle=h,o.fillRect(0,0,u,u);let p=t(721);for(let v=0;v<150;v++){let m=p()*u,T=u*(.48+p()*.5);o.fillStyle=`rgba(31,48,35,${.025+p()*.1})`,o.beginPath(),o.ellipse(m,T,5+p()*29,3+p()*16,0,0,6.28),o.fill()}o.fillStyle="rgba(218,228,226,.10)",o.fillRect(u*.23,0,u*.03,u),o.fillRect(u*.75,0,u*.018,u)})},build({details:i,green:t,distant:e,signGeo:n,childSign:s,p:r,planPoint:l,onRoad:o,gateOpen:u,m:h,mat:p,M:v,rng:m,TAU:T,ga:M,gb:P,gc:A,gw:d,gd:C,gymRise:I=.45}){let x=m(70031),R=(W,ut)=>W+(ut-W)*x(),E=p("#dcdccf",3,.88),U=p("#c7cbc3",3,.87),_=r(425.28,478),N=r(470,478),H=5.25,Y=3.25,b=M[0]-1.2,J=2.4,X=N[1]+1.2,Z=P[1]+1.6,lt=(W,ut,Ut=1.05)=>{i.cylinder([W[0],W[1]+Ut,W[2]],[ut[0],ut[1]+Ut,ut[2]],.028,.028,E,7);let Ft=Math.max(1,Math.ceil(Math.hypot(ut[0]-W[0],ut[2]-W[2])/.19));for(let Ot=0;Ot<=Ft;Ot++){let Bt=Ot/Ft,Jt=W[0]+(ut[0]-W[0])*Bt,Wt=W[1]+(ut[1]-W[1])*Bt,ue=W[2]+(ut[2]-W[2])*Bt;i.cylinder([Jt,Wt,ue],[Jt,Wt+Ut,ue],.016,.016,E,6)}},ht=(W,ut,Ut,Ft,Ot)=>i.box((W+ut)/2,Ot-.14,(Ut+Ft)/2,ut-W,.28,Ft-Ut,E);ht(_[0],M[0],N[1]-1.2,X,H),lt([_[0],H,N[1]-1.2],[M[0],H,N[1]-1.2]),lt([_[0],H,X],[M[0]-J,H,X]);for(let W of[_[0]+.22,M[0]-2.65])i.box(W,H/2-.14,N[1],.38,H-.28,.42,E);let Mt=12,$=(Z-X)/Mt,y=(H-Y)/Mt;for(let W=0;W<Mt;W++){let ut=X+W*$,Ut=ut+$,Ft=H-W*y;i.box(b,Ft-y/2-.08,(ut+Ut)/2,J,y+.16,$+.015,E)}for(let W of[M[0]-J,M[0]])i.quad([W,H-.28,X],[W,Y-.28,Z],[W,Y-.48,Z],[W,H-.48,X],E),lt([W,H,X],[W,Y,Z]);ht(M[0]-J,P[0],P[1],Z+1.3,Y),lt([M[0]-J,Y,Z+1.3],[A[0]+4.3,Y,Z+1.3]),lt([M[0]-J,Y,Z],[M[0]-J,Y,Z+1.3]);for(let W of[M[0]-J+.25,M[0]+2.2,A[0]+4.4,P[0]-.25])i.box(W,(Y-.28)/2,Z+.99,.42,Y-.28,.45,E);i.box((A[0]+4.3+P[0])/2,Y+.46,Z+1.17,P[0]-A[0]-4.3,.92,.22,E);let bt=p("#778885",0,.48,.08),Yt=p("#c3c5b9",0,.63,.18),At=p("#414c4e",0,.48,.62);for(let W of[-6.8,-2.3,2.3,6.8])i.box(A[0]+W,6,P[1]+.2,1.35,2.4,.09,Yt),i.box(A[0]+W,5.96,P[1]+.26,1.21,2.22,.03,bt),i.box(A[0]+W,6.75,P[1]+.29,1.22,.67,.05,E),i.box(A[0]+W,5.52,P[1]+.3,1.22,.045,.04,Yt);let K=M[0]+d*77/309,ge=M[0]+d*156/309,Ne=M[0]+d*202/309,gt=M[0]+d*233/309;for(let[W,ut]of[[M[0]+2.75,1.5],[ge+1.3,1],[Ne+1.075,.95],[gt+2.45,1.5]])i.box(W,1.93,P[1]+.24,ut+.12,1.62,.065,At),i.box(W,1.93,P[1]+.28,ut-.08,1.45,.025,bt),i.box(W,1.93,P[1]+.31,.045,1.51,.045,At),i.box(W,1.93,P[1]+.32,ut+.15,.045,.045,At);let pt=M[0]+d*.38,Kt=P[1]+.27;for(let W of[-1,1]){let ut=pt+W*1.65;i.box(ut,1.45,Kt+.055,1.04,2.35,.035,bt),i.box(ut,1.06,Kt+.09,1.1,.045,.06,At),i.box(ut,2.49,Kt+.09,1.1,.045,.06,At),i.box(pt+W*2.2,1.54,Kt+.09,.055,2.76,.055,At),i.box(pt+W*1.1,1.54,Kt+.09,.055,2.76,.055,At),i.box(pt+W*1.1,1.45,Kt-.5,.035,2.35,1.04,bt),i.box(pt+W*1.1,1.06,Kt-.5,.05,.045,1.08,At)}i.box(pt,2.91,Kt+.09,4.5,.06,.06,At),i.box(pt,.15,P[1]+1.75,5.6,.3,3,E);for(let W=0;W<3;W++)i.box(pt,.025+W*.05,P[1]+4.06-W*.38,5.6,.05+W*.1,.4,E);let ae=p("#83b4c2",0,.54,.12);for(let[W,ut]of[[335,344],[421,433]]){let Ut=r(470,W)[1],Ft=r(470,ut)[1],Ot=(Ut+Ft)/2,Bt=Ft-Ut;for(let Jt=0;Jt<3;Jt++){let Wt=(Jt+1)*I/3;i.box(M[0]-1.38+Jt*.46,Wt/2,Ot,.48,Wt,Bt+.24,E)}i.box(M[0]-.11,I-.04,Ot,.54,.08,Bt+.24,E);for(let Jt of[Ut+.12,Ft-.12])i.box(M[0]-.76,I+1.12,Jt,1.32,2.24,.075,ae),i.box(M[0]-.76,I+2.25,Jt,1.36,.045,.09,Yt)}let Zt=[[303,334],[345,420],[434,503]];for(let W of[-1,1])for(let[ut,Ut]of Zt){let Ft=r(470,ut)[1]+.15,Ot=r(470,Ut)[1]-.15,Bt=Math.max(1,Math.ceil((Ot-Ft)/5.4));for(let Jt=0;Jt<Bt;Jt++){let Wt=Ft+(Ot-Ft)*Jt/Bt+.18,ue=Ft+(Ot-Ft)*(Jt+1)/Bt-.18,se=A[0]+W*(d/2+.26),Ce=.56,qe=4.04;for(let dn of[!1,!0]){let Te=dn?qe:Ce,Ze=dn?Ce:qe,$e=Ze-Te,ti=ue-Wt,Tn=Math.hypot($e,ti),D=-ti/Tn*.065,nt=$e/Tn*.065;i.quad([se,Te+D,Wt+nt],[se,Te-D,Wt-nt],[se,Ze-D,ue-nt],[se,Ze+D,ue+nt],E,Tn,.13);for(let[it,dt]of[[Te,Wt],[Ze,ue]]){i.box(se,it,dt,.045,.25,.25,E);for(let g of[-.065,.065])i.cylinder([se+W*.022,it,dt+g],[se+W*.04,it,dt+g],.017,.017,p("#abae9e",0,.65,.1),6)}}}}for(let W of[-1,1])for(let[ut,Ut]of Zt){let Ft=A[0]+W*(d/2+.185),Ot=r(470,ut)[1],Bt=r(470,Ut)[1];for(let Jt=Ot+.8;Jt<Bt;Jt+=2.65)i.box(Ft,2.12,Jt,.012,3.78,.014,p("#b9baae",0,.96))}for(let W of[-1,1]){let ut=A[0]+W*(d/2+.31);i.cylinder([ut,8.66,M[1]],[ut,8.66,P[1]],.075,.075,E,10);for(let Ut of[M[1]+.32,M[1]+16.5,P[1]-.35])i.cylinder([ut,.25,Ut],[ut,8.66,Ut],.045,.045,E,8);for(let[Ut,Ft]of Zt){let Ot=r(470,Ut)[1],Bt=r(470,Ft)[1];i.box(ut-W*.14,.19,(Ot+Bt)/2,.08,.38,Bt-Ot,p("#94958b",3,.96))}}let Ee=(W,ut,Ut)=>W+Ut>M[0]&&W-Ut<P[0]&&ut+Ut>M[1]&&ut-Ut<P[1];function Ue(W,ut,Ut,Ft,Ot=1,Bt=82,Jt=!1){if(u(W,ut)||o(W,ut,.6)||W>55&&W<80&&ut>26&&ut<82)return;let Wt=window.FestaScenery.height(W,ut);if(W<-52&&W>-88&&ut<-12&&ut>-70&&(Ut=Math.min(Ut,6.2)),W>-74&&W<-58&&ut>-11&&ut<10)return;let ue=m(Ft);for(let se=0;se<Bt;se++){let Ce=ue()*T,qe=Math.sqrt(ue())*Ut*.46*Ot,dn=Ut*(.13+ue()*.77)-qe*.09,Te=W+Math.cos(Ce)*qe,Ze=ut+Math.sin(Ce)*qe,$e=Ut*(.21+ue()*.14),ti=ue()*T;if(Ee(Te,Ze,$e*.71))continue;let Tn=Jt?p(se%4?"#a0704d":"#855841",8,.98,0,0,.92):p(se%7===0?"#879c75":se%3?"#526b48":"#344f39",7,.98,0,0,.92);t.scope(v.compose(Te,Wt+dn,Ze,ti),()=>{t.quad([-$e/2,-$e/2,0],[-$e/2,$e/2,0],[$e/2,$e/2,0],[$e/2,-$e/2,0],Tn),t.quad([-$e/2,0,-$e/2],[-$e/2,0,$e/2],[$e/2,0,$e/2],[$e/2,0,-$e/2],Tn)})}for(let se=0;se<12;se++){let Ce=se*T/12,qe=W+Math.cos(Ce)*Ut*.25*Ot,dn=ut+Math.sin(Ce)*Ut*.25*Ot,Te=Ut*(.25+ue()*.08),Ze=Jt?p("#75523b",8,.98):p(se%3?"#3c5a40":"#60734b",7,.98);Ee(qe,dn,Te*.71)||t.scope(v.compose(qe,Wt+Ut*.21,dn,Ce),()=>t.quad([-Te/2,-Te/2,0],[-Te/2,Te/2,0],[Te/2,Te/2,0],[Te/2,-Te/2,0],Ze))}}let qt=P[1]+3.2,Be=p("#94705a",3,.98),we=p("#4c4835",1,1),_e=m(2701);for(let[W,ut,Ut]of[[M[0]+3,4.6,2.9],[P[0]-4.7,8.4,3.6]]){i.box(W,.24,qt,ut,.48,2.1,Be),i.plane(W,.486,qt,ut-.35,1.7,we);for(let Ft=W-ut/2+.2;Ft<W+ut/2;Ft+=.42)for(let Ot of[.12,.35])i.box(Ft+(Ot>.2?.2:0),Ot,qt+1.055,.012,.2,.015,p("#c3ac8a"));for(let Ft=0;Ft<Math.round(ut*36);Ft++){let Ot=W+(_e()-.5)*(ut-.6),Bt=.5+_e()*Ut,Jt=qt+(_e()-.5)*1.4,Wt=.52+_e()*.4,ue=p(Ft%5?"#6b835a":"#879669",7,1);t.scope(v.compose(Ot,Bt,Jt,_e()*T),()=>{t.quad([-Wt/2,-Wt/2,0],[-Wt/2,Wt/2,0],[Wt/2,Wt/2,0],[Wt/2,-Wt/2,0],ue),t.quad([-Wt/2,0,-Wt/2],[-Wt/2,0,Wt/2],[Wt/2,0,Wt/2],[Wt/2,0,-Wt/2],ue)})}for(let Ft=W-ut/2+.3;Ft<W+ut/2;Ft+=.61){let Ot=qt+1.4;i.box(Ft,.13,Ot,.43,.26,.33,p("#a88767",3,.94));for(let Bt=0;Bt<3;Bt++)i.sphere(Ft+(Bt-1)*.11,.3,Ot,.095,.11,.11,p(Bt%2?"#989b62":"#557549"),8,5)}}let xe=Number((P[0]+3.6).toFixed(2)),Ie=Number((P[1]-20).toFixed(2)),Qe=Number((P[1]+33).toFixed(2)),Ae=3.6,tn=p("#92968a",3,.99),tt=p("#b0b3a6",3,.94);i.quad([xe-.35,0,Ie],[xe-.35,0,Qe],[xe,Ae,Qe],[xe,Ae,Ie],tn,18,3),i.box(xe+.08,Ae+.08,(Ie+Qe)/2,.64,.16,Qe-Ie,tt);for(let W=Ie+.3;W<Qe;W+=2.2)i.cylinder([xe+.1,Ae+.12,W],[xe+.1,Ae+1.16,W],.022,.022,Yt,6),i.box(xe-.28,.65,W,.025,.1,.1,p("#454d43"));for(let W of[Ae+.3,Ae+1.12])i.cylinder([xe+.1,W,Ie],[xe+.1,W,Qe],.022,.022,Yt,6);for(let W=Ie;W<Qe;W+=5.4)i.cylinder([xe-.34,.05,W],[xe-.01,Ae-.02,W],.012,.012,p("#777e72"),5);{let W=xe+6.3,ut=P[1]+1.4,Ut=8.8,Ft=11,Ot=6.6;e.box(W,Ae+Ot/2,ut,Ut,Ot,Ft,p("#d8d2be",3,.96));let Bt=p("#6f6860",10,.9),Jt=Ae+Ot;for(let Wt of[-1,1])e.quad([W,Jt+1.7,ut-Ft/2-.4],[W,Jt+1.7,ut+Ft/2+.4],[W+Wt*(Ut/2+.4),Jt,ut+Ft/2+.4],[W+Wt*(Ut/2+.4),Jt,ut-Ft/2-.4],Bt,3,4);for(let Wt of[ut-Ft/2,ut+Ft/2])e.tri([W-Ut/2,Jt,Wt],[W,Jt+1.7,Wt],[W+Ut/2,Jt,Wt],E);for(let Wt of[Ae+1.65,Ae+4.8])for(let ue of[-3.6,0,3.6])i.box(W-Ut/2-.025,Wt,ut+ue,.05,1.28,1.4,p("#5d625a")),i.box(W-Ut/2-.06,Wt,ut+ue,.035,1.1,1.22,bt),i.box(W-Ut/2-.087,Wt,ut+ue,.04,1.12,.035,Yt)}let Xe=(W,ut)=>o(W,ut,3)||u(W,ut)?0:window.FestaScenery.height(W,ut),Pe=[...new Set([...Array.from({length:89},(W,ut)=>-156+ut*4),60.8,75.2,103.2])].sort((W,ut)=>W-ut),k=[...new Set([...Array.from({length:72},(W,ut)=>-112+ut*4),15.08,Ie,Qe,96.08])].sort((W,ut)=>W-ut);for(let W=0;W<Pe.length-1;W++)for(let ut=0;ut<k.length-1;ut++){let Ut=Pe[W],Ft=k[ut],Ot=Pe[W+1],Bt=k[ut+1];if(Ut<xe&&Ot===xe&&Ft>=Ie&&Bt<=Qe)continue;let Jt=[[Ut,Ft],[Ut,Bt],[Ot,Bt],[Ot,Ft]].map(([se,Ce])=>[se,Xe(se,Ce)-.1,Ce]);if(Jt.every(se=>se[1]<0))continue;let Wt=p("#ffffff",2,.98),ue=([se,Ce,qe])=>{let dn=se===xe&&qe>=Ie&&qe<=Qe?2*(Xe(se,qe)-Xe(se+.1,qe)):Xe(se-.1,qe)-Xe(se+.1,qe),Te=Xe(se,qe-.1)-Xe(se,qe+.1),Ze=Math.hypot(dn,.2,Te);return[dn/Ze,.2/Ze,Te/Ze]};for(let se of[[0,1,2],[0,2,3]])e.tri(...se.map(Ce=>Jt[Ce]),Wt,se.map(Ce=>[(Jt[Ce][0]+550)*460/1100,(Jt[Ce][2]+550)*460/1100]),se.map(Ce=>ue(Jt[Ce])))}for(let W=-149;W<188;W+=6)for(let ut=-99;ut<162;ut+=6){if(Xe(W,ut)<2.3)continue;let Ut=m(Math.round((W+200)*800+ut+200));Ue(W+(Ut()-.5)*2,ut+(Ut()-.5)*2,4.8+Ut()*2.1,Math.round((W+200)*801+ut+201),1.5,30)}let w=p("#7a895a",7,.98),st=p("#9ca469",7,.98),rt=p("#625c46",1,1);function ct(W,ut,Ut,Ft,Ot,Bt){let Jt=m(Bt);for(let Wt=0;Wt<Math.ceil(Ut*Ot*24);Wt++){let ue=Jt()*T,se=Math.sqrt(Jt()),Ce=W+Math.cos(ue)*Ut*.48*se,qe=ut+Math.sin(ue)*Ot*.48*se,dn=.12+Ft*(.2+.8*Math.sqrt(1-se*se))*(.72+Jt()*.28),Te=.24+Jt()*.22;t.scope(v.compose(Ce,dn,qe,Jt()*T),()=>{t.quad([-Te/2,-Te/2,0],[-Te/2,Te/2,0],[Te/2,Te/2,0],[Te/2,-Te/2,0],Wt%5?w:st),t.quad([-Te/2,0,-Te/2],[-Te/2,0,Te/2],[Te/2,0,Te/2],[Te/2,0,-Te/2],w)})}}for(let[W,ut,Ut,Ft,Ot]of[[135,429,5.4,.8,1.15],[158,429,3.6,.65,1.1],[177,429,2.3,.46,1],[279,430,4.1,.58,.85]]){let Bt=r(W,ut);i.plane(Bt[0],.035,Bt[1],Ut,Ot,rt);for(let Jt of[-1,1])i.box(Bt[0],.09,Bt[1]+Jt*Ot/2,Ut,.18,.1,p("#a3a295",3,.97));for(let Jt of[-1,1])i.box(Bt[0]+Jt*Ut/2,.09,Bt[1],.1,.18,Ot,p("#a3a295",3,.97));ct(Bt[0],Bt[1],Ut-.15,Ft,Ot-.12,W*101)}for(let[W,ut]of[[257,11],[287,7]])for(let Ut=0;Ut<ut;Ut++){let Ft=r(W+Ut*2.2,434),Ot=.39,Bt=.26,Jt=p(Ut%3?"#d1c6ac":"#987554",3,.95);i.box(Ft[0],Bt/2,Ft[1],Ot,Bt,.28,Jt),i.plane(Ft[0],Bt+.008,Ft[1],Ot-.045,.23,rt);for(let Wt of[-1,1])i.box(Ft[0],Bt-.01,Ft[1]+Wt*.14,Ot+.035,.055,.035,Jt);for(let Wt=0;Wt<3;Wt++){let ue=Ft[0]+(Wt-1)*.1;i.cylinder([ue,Bt,Ft[1]],[ue,Bt+.16+Ut%3*.025,Ft[1]],.007,.004,p("#657352"),5),t.scope(v.compose(ue,Bt+.14,Ft[1],Ut+Wt),()=>{t.quad([-.09,-.03,0],[-.06,.11,0],[.06,.11,0],[.09,-.03,0],w),t.quad([0,-.03,-.09],[0,.11,-.06],[0,.11,.06],[0,-.03,.09],st)})}}for(let[W,ut,Ut,Ft]of[[54,375,3.1,1.8],[69,375,2.8,1.8]]){let Ot=r(W,ut),Bt=2.05,Jt=p("#b7b9af",3,.95),Wt=p("#8f978e",0,.8,.15);i.box(Ot[0],Bt/2,Ot[1],Ut,Bt,Ft,Jt),i.box(Ot[0],Bt+.055,Ot[1],Ut+.18,.11,Ft+.16,Wt);for(let ue of[-1,1])i.box(Ot[0]+ue*Ut*.23,Bt*.48,Ot[1]-Ft/2-.025,Ut*.43,Bt*.9,.035,p("#9da79e",3,.92)),i.box(Ot[0]+ue*.075,1.04,Ot[1]-Ft/2-.06,.025,.19,.045,Wt)}ct(r(60,367)[0],r(60,367)[1],3.2,1.15,1.3,92160);let zt=-66,It=-1,ft=11.2,vt=15.6,Gt=6.3,jt=p("#d8d8c9",3,.96);e.box(zt,Gt/2,It,ft,Gt,vt,jt);let Rt=zt+ft/2;e.quad([zt-ft/2-.35,Gt+.25,It-vt/2-.35],[zt-ft/2-.35,Gt+.25,It+vt/2+.35],[Rt+.35,Gt+.05,It+vt/2+.35],[Rt+.35,Gt+.05,It-vt/2-.35],p("#747d7a",10,.85),4,4),e.box(Rt+.2,Gt,It,.12,.19,vt+.7,jt);for(let W of[-5.7,-2.7,0,3,5.7]){let ut=W===0?.65:1.45;i.box(Rt+.03,4.63,It+W,.055,1.38,ut,Yt),i.box(Rt+.064,4.63,It+W,.02,1.24,ut-.13,bt),i.box(Rt+.086,4.63,It+W,.03,1.26,.035,Yt)}for(let W of[-4.5,4.5])i.box(Rt+.08,1.28,It+W,.12,2.5,1.37,p("#adb5ac",3,.85)),i.box(Rt+.15,1.78,It+W,.035,.77,.92,bt),i.box(Rt+.53,2.65,It+W,1.1,.12,2.05,p("#8e9994",10,.9)),i.box(Rt+.85,.1,It+W,1.5,.2,2.1,E),i.sphere(Rt+.14,2.77,It+W-1.3,.055,.11,.11,p("#eeeadd"),10,6);i.quad([Rt,.03,It-7.5],[Rt+.95,.03,It-7.5],[Rt+.95,.2,It+6],[Rt,.2,It+6],E,1,6),lt([Rt+1.02,.03,It-7.5],[Rt+1.02,.2,It+6],.83),n&&s!==void 0&&n.scope(v.compose(Rt+.18,0,It,Math.PI/2),()=>n.sign(0,2.65,0,5.1,.95,s));let kt=-83,Qt=-22,xt=Xe(kt,Qt),Lt=29,G=p("#a7aca5",0,.68,.25);for(let W=0;W<8;W++){let ut=xt+W*Lt/8,Ut=xt+(W+1)*Lt/8,Ft=2.65-W*.235,Ot=Ft-.235;for(let Bt of[-1,1])for(let Jt of[-1,1])e.cylinder([kt+Bt*Ft,ut,Qt+Jt*Ft],[kt+Bt*Ot,Ut,Qt+Jt*Ot],.07,.05,G,6),e.cylinder([kt+Bt*Ft,ut,Qt+Jt*Ft],[kt-Bt*Ot,Ut,Qt+Jt*Ot],.026,.026,G,5),e.cylinder([kt+Bt*Ft,ut,Qt+Jt*Ft],[kt+Bt*Ot,Ut,Qt-Jt*Ot],.026,.026,G,5)}for(let W of[xt+20.5,xt+24.8,xt+29]){e.cylinder([kt-5,W,Qt],[kt+5,W,Qt],.075,.075,G,6);for(let ut of[-4.7,4.7]){e.cylinder([kt+ut,W,Qt],[kt+ut,W-.9,Qt],.1,.1,p("#a6ada0"),8);let Ut=r(322,56),Ft=[];for(let Ot=0;Ot<=28;Ot++){let Bt=Ot/28;Ft.push([kt+ut+(Ut[0]-kt)*Bt,W-.9+(26-(xt+29))*Bt-3.1*Math.sin(Bt*Math.PI),Qt+(Ut[1]-Qt)*Bt])}e.tube(Ft,.028,p("#626963"),5)}}let Et=[[103,69],[131,47],[202,40],[331,44],[479,94],[574,146],[583,632],[592,679],[470,739],[101,780],[71,735],[21,525],[30,339],[57,250],[63,145]],mt=0;for(let W=0;W<Et.length-1;W++){if(W===7||W===8||W===9)continue;let ut=r(...Et[W]),Ut=r(...Et[W+1]),Ft=Ut[0]-ut[0],Ot=Ut[1]-ut[1],Bt=Math.hypot(Ft,Ot),Jt=Ot/Bt,Wt=-Ft/Bt;for(let ue=2;ue<Bt;ue+=5.7){let se=ue/Bt,Ce=ut[0]+Ft*se,qe=ut[1]+Ot*se;Ue(Ce+Jt*7.6,qe+Wt*7.6,R(7,11.3),1e4+mt++),(W<5||W>10)&&Ue(Ce+Jt*14.6+Ft/Bt*2.4,qe+Wt*14.6+Ot/Bt*2.4,R(8.2,13),1e4+mt++,1.13),(W<6||W>10)&&Ue(Ce+Jt*2,qe+Wt*2,R(2.2,3.2),1e4+mt++,1.8)}}e.scope(v.compose(-106,5,-41,Math.PI/2),()=>{let W=p("#c6c8bf",3,.92),ut=p("#b4c2be",0,.76,.05),Ut=p("#46545a",0,.88),Ft=p("#53696d",0,.37,.08),Ot=69,Bt=12,Jt=5,Wt=2.85;e.box(0,-2.5,0,Ot+1,5,Bt+2,p("#8a8c7b",3,.98)),e.box(0,Jt*Wt/2,0,Ot,Jt*Wt,Bt,W);for(let ue=0;ue<Jt;ue++){let se=ue*Wt;e.box(0,se+1.4,Bt/2+.07,Ot-.6,2.42,.12,Ut),e.box(0,se+.1,Bt/2+1.02,Ot+.7,.2,2.15,W),e.box(0,se+.79,Bt/2+1.98,Ot,.98,.1,ut),e.box(0,se+1.33,Bt/2+1.99,Ot,.06,.13,p("#d3d9d5",0,.45,.28));for(let Ce=-Ot/2+1.6;Ce<Ot/2;Ce+=3.45)e.box(Ce,se+1.4,Bt/2+.16,2.1,2.25,.03,Ft),e.box(Ce+.99,se+1.4,Bt/2+.18,.035,2.25,.03,h.metal),e.box(Ce+1.52,se+1.4,Bt/2+1.06,.1,2.58,1.85,W)}for(let ue of[-Ot/2,-Ot*.18,Ot*.18,Ot/2])e.box(ue,Jt*Wt/2,Bt/2+1.08,.33,Jt*Wt,2.3,W);e.box(0,Jt*Wt+.13,0,Ot+1.2,.26,Bt+4.2,W)});for(let W=0;W<13;W++){let ut=-74+W*5.6,Ut=-84+W%3*2.7;Ue(Ut,ut,7.5+W%4*.9,32140+W,1.1,58,W===2||W===5||W===9)}let Tt=p("#338db0",0,.63,.08),Dt=p("#ac4c39",0,.68),wt=p("#dbb548",0,.6),ie=l(666,235);i.scope(v.compose(ie[0],0,ie[1],.18),()=>{for(let W of[-.55,.55])for(let ut of[-.55,.55])i.cylinder([W,.02,ut],[W,3.15,ut],.045,.045,Tt,8);i.box(0,1.94,0,1.22,.09,1.2,p("#899892",0,.7));for(let W of[-.61,.61])i.cylinder([W,2,-.55],[W,3.03,-.55],.035,.035,Dt,8),i.cylinder([W,3.03,-.55],[W,3.03,.55],.035,.035,Dt,8),i.quad([W*.72,1.96,.55],[W*.72,.16,3.45],[W*.72,.34,3.47],[W*.72,2.16,.55],wt,3,1);i.quad([-.44,1.97,.55],[.44,1.97,.55],[.44,.16,3.45],[-.44,.16,3.45],wt,1,3);for(let W=.28;W<1.97;W+=.27)i.cylinder([-.47,W,-.69],[.47,W,-.69],.026,.026,h.metal,7)});for(let[W,ut,Ut]of[[1171,230,-.54],[1267,303,-.57],[1368,371,-.55]]){let[Ft,Ot]=l(W,ut);i.scope(v.compose(Ft,0,Ot,Ut),()=>{for(let Bt=0;Bt<=5;Bt++){let Jt=(Bt-2.5)*1.05,Wt=1+Bt*.216;i.cylinder([Jt,0,0],[Jt,Wt,0],.032,.032,Tt,8),Bt<5&&i.cylinder([Jt,Wt,0],[Jt+1.05,Wt,0],.028,.028,h.metal,8)}})}let[te,pe]=l(480,324);for(let W=0;W<3;W++){let ut=te+(W-1)*.65;i.cylinder([ut,0,pe],[ut,2.45,pe],.038,.038,Tt,8)}i.cylinder([te-.72,2.45,pe],[te+.72,2.45,pe],.032,.032,h.metal,8);let Me=r(365,75);i.cylinder([Me[0],0,Me[1]],[Me[0],3.5,Me[1]],.075,.075,p("#aab4ad",0,.65,.2),10),i.box(Me[0],3.45,Me[1]+.18,1.8,1.05,.07,p("#e7e7da",3,.9)),i.box(Me[0],3.32,Me[1]+.23,.65,.49,.012,Dt),i.box(Me[0],3.32,Me[1]+.24,.58,.42,.012,p("#e7e7da"));let _n=[];for(let W=0;W<=24;W++){let ut=W/24*T;_n.push([Me[0]+Math.sin(ut)*.23,3.02,Me[1]+.56+Math.cos(ut)*.23])}i.tube(_n,.016,Dt,6)}};window.buildFestaWorld=async function(i,t=()=>{}){let{V:e,M:n,Geometry:s,Mesh:r,Atlas:l,material:o,color:u,rng:h,clamp:p,TAU:v}=FestaGL,m=FESTA_DATA,T=h(9212026),M=(a,c)=>a+(c-a)*T(),P=(a,c)=>[(a-320)*.22,(c-290)*.22],A=(a,c,f=0)=>{let S=P(a,c);return[S[0],f,S[1]]},d=new l(512),C=a=>new Promise((c,f)=>{let S=new Image;S.onload=()=>c(S),S.onerror=()=>f(new Error("内蔵テクスチャを読み込めません。")),S.src=a}),I=await C(FESTA_ASSETS.gravel),x=await C(FESTA_ASSETS.grass);t(.08,"地面と建物の素材を準備しています"),d.add("white",(a,c)=>{a.fillStyle="#fff",a.fillRect(0,0,c,c)});function R(a,c,f,S=.25){return d.add(a,(L,O)=>{L.drawImage(c,0,0,O,O);let B=L.getImageData(0,0,O,O),Q=u(f);for(let z=0;z<B.data.length;z+=4){let et=B.data[z]/255,St=.82+et*S;for(let yt=0;yt<3;yt++)B.data[z+yt]=p(Q[yt]*255*St,0,255);B.data[z+3]=255}L.putImageData(B,0,0)})}R("soil",I,"#a19580",.32),R("grass",x,"#727b4d",.55),d.add("concrete",(a,c)=>{a.fillStyle="#efeee6",a.fillRect(0,0,c,c);let f=a.getImageData(0,0,c,c);for(let S=0;S<f.data.length;S+=4){let L=M(-12,6);for(let O=0;O<3;O++)f.data[S+O]+=L}a.putImageData(f,0,0),a.strokeStyle="rgba(119,119,107,.13)",a.lineWidth=1,a.beginPath(),a.moveTo(0,120),a.lineTo(c,120),a.stroke()}),R("asphalt",I,"#555754",.6),d.add("wood",(a,c)=>{a.fillStyle="#b78a57",a.fillRect(0,0,c,c);for(let f=0;f<8;f++){let S=f*64;a.fillStyle=`hsl(${31+M(-3,3)},${34+M(-5,5)}%,${55+M(-6,6)}%)`,a.fillRect(S,0,63,c);for(let O=0;O<35;O++){let B=S+M(1,62);a.strokeStyle=`rgba(73,44,18,${M(.04,.17)})`,a.lineWidth=M(.3,1.3),a.beginPath();for(let Q=0;Q<=c;Q+=16)a.lineTo(B+Math.sin(Q/72+O)*M(.2,1.4),Q);a.stroke()}a.fillStyle="rgba(43,32,24,.20)",a.fillRect(S,0,1,c);let L=f%3*163;a.fillRect(S,L,64,1)}}),d.add("fabric",(a,c)=>{a.fillStyle="#f7f6f0",a.fillRect(0,0,c,c);for(let f=0;f<c;f+=3)a.strokeStyle=f%6?"rgba(98,99,84,.05)":"rgba(255,255,255,.3)",a.beginPath(),a.moveTo(f,0),a.lineTo(f,c),a.stroke(),a.beginPath(),a.moveTo(0,f),a.lineTo(c,f),a.stroke();a.strokeStyle="rgba(154,155,144,.2)",a.lineWidth=2,a.strokeRect(8,8,c-16,c-16)});function E(a=!1){d.add(a?"autumn":"leaf",(c,f)=>{c.clearRect(0,0,f,f);for(let S=0;S<220;S++){let L=M(0,v),O=Math.sqrt(T())*228,B=f/2+Math.cos(L)*O,Q=f/2+Math.sin(L)*O;c.strokeStyle=a?"#6f6541":"#526445",c.lineWidth=1.8,c.beginPath(),c.moveTo(f/2,f*.7),c.quadraticCurveTo(f/2+(B-f/2)*.65,Q+40,B,Q),c.stroke();let z=a?M(12,59):M(72,110);c.fillStyle=`hsl(${z},${M(27,45)}%,${M(27,48)}%)`,c.beginPath(),c.ellipse(B,Q,M(6,11),M(12,23),L+.5,0,v),c.fill(),c.strokeStyle="rgba(208,214,130,.3)",c.lineWidth=.7,c.beginPath(),c.moveTo(B-4,Q-10),c.lineTo(B+4,Q+10),c.stroke()}})}E(!1),E(!0),d.add("bark",(a,c)=>{a.fillStyle="#807565",a.fillRect(0,0,c,c);for(let f=0;f<650;f++){a.strokeStyle=`rgba(${Math.floor(M(30,70))},${Math.floor(M(25,60))},${Math.floor(M(20,50))},${M(.1,.6)})`,a.lineWidth=M(.5,5),a.beginPath();let S=M(0,c),L=M(0,c);a.moveTo(S,L),a.lineTo(S+M(-9,9),L+M(14,120)),a.stroke()}}),d.add("roof",(a,c)=>{a.fillStyle="#a6b2b3",a.fillRect(0,0,c,c);for(let f=0;f<c;f+=32)a.fillStyle="#7c8d91",a.fillRect(f,0,3,c),a.fillStyle="#c7cecd",a.fillRect(f+3,0,2,c)}),d.add("net",(a,c)=>{a.clearRect(0,0,c,c),a.strokeStyle="#b1b4a7",a.lineWidth=3;for(let f=-c;f<c*2;f+=64)a.beginPath(),a.moveTo(f,0),a.lineTo(f+c,c),a.stroke(),a.beginPath(),a.moveTo(f,c),a.lineTo(f+c,0),a.stroke()}),d.add("tire",(a,c)=>{a.fillStyle="#2b2b2a",a.fillRect(0,0,c,c),a.strokeStyle="#484948",a.lineWidth=5;for(let f=0;f<c;f+=27)a.beginPath(),a.moveTo(0,f),a.lineTo(c*.5,f+15),a.lineTo(c,f),a.stroke()}),d.add("cloth",(a,c)=>{a.fillStyle="#eeeadf",a.fillRect(0,0,c,c),a.fillStyle="rgba(83,117,120,.12)";for(let f=0;f<c;f+=40)a.fillRect(f,0,18,c),a.fillRect(0,f,c,18)});let U={F:"#a64c35",S:"#385e76",T:"#4e6c43",P:"#83503e",M:"#c39343",I:"#27595c"},_={};for(let a of[...m.records.filter(c=>!["unplaced","performer","unconfirmed","workshop"].includes(c.kind)),...m.locations])_[a.id]={banner:d.banner(a.id.startsWith("F-")||a.id.startsWith("S-")||a.id.startsWith("T-")?a.id:{HQ:"INFO",GYM:"STAGE",MOBILITY:"RIDE",MEET:"REST",OUTSTAGE:"STAGE",GATE_MAIN:"WELCOME",GATE_WEST:"WELCOME",WC:"WC",WC_ART:"WC",OUTDOOR_GAMES:"T-14",EAT2:"REST"}[a.id]||"FESTA",a.id==="MOBILITY"?"モビリティー":a.short,a.id==="S-13"?"子どもくじ抽選会":a.caption,U[a.category]),menu:d.sign(a.id+"-menu",a.short,a.detail,U[a.category],a.id+"   "+(a.status||"予定"))};let N=d.banner("西鎌倉","鎌倉市立西鎌倉小学校","つながりフェスタ＠にしかま2026","#415d60"),H=d.banner("2026","つながりフェスタ＠にしかま","つながる、みつかる、すきになる","#356064"),Y=d.sign("走行エリア","モビリティー",`実走路の中へは入れません。
見学はトラロープの外側から。`,"#a74d38","車両実走路"),b=d.banner("P","みんなの舞台","体育館内・開始予定","#83533c"),J=d.add("schedule",(a,c)=>{a.fillStyle="#fff9ec",a.fillRect(0,0,c,c),a.fillStyle="#5b3e32",a.font="700 29px sans-serif",a.fillText("体育館内 開始予定",24,42),a.font="17px sans-serif",a.fillText("終了時刻は未確認　／　当日変更の可能性あり",24,70),m.schedule.forEach((f,S)=>{let L=112+S*36;a.fillStyle=S%2?"#ffffff":"#f2ebde",a.fillRect(14,L-24,484,34),a.fillStyle="#83533c",a.font="700 20px sans-serif",a.fillText(f.time,23,L),a.fillStyle="#263b38";let O=18;a.font=`${O}px sans-serif`;let B=f.name;for(;a.measureText(B).width>370&&O>10;)a.font=`${--O}px sans-serif`;a.fillText(B,100,L)})}),X=d.add("Entrance panels",(a,c)=>{let f=h(451);a.fillStyle="#33363b",a.fillRect(0,0,c,c);for(let S=0;S<c;S+=5)for(let L=0;L<c;L+=12){let O=40+f()*25;a.fillStyle=`rgb(${O},${O+1},${O+5})`,a.fillRect(L+(S%10?6:0),S,10,3)}}),Z=FestaScenery.textures(d,h),lt=d.add("gym-floor",(a,c)=>{a.fillStyle="#aa7549",a.fillRect(0,0,c,c);for(let f=0;f<c;f+=32){a.fillStyle=`hsl(${27+M(-2,2)},${40+M(-5,5)}%,${48+M(-4,4)}%)`,a.fillRect(f+1,0,30,c),a.fillStyle="rgba(71,43,25,.24)",a.fillRect(f,0,1,c);let S=Math.floor(f/32)%4*128+32;a.fillRect(f+1,S,30,1);for(let L=0;L<9;L++)a.fillStyle=`rgba(84,51,27,${M(.025,.075)})`,a.fillRect(f+M(2,29),0,M(.35,1),c)}}),ht=d.add("gym-wall-wood",(a,c)=>{a.fillStyle="#a77b60",a.fillRect(0,0,c,c);for(let f=0;f<c;f+=26)a.fillStyle=`hsl(${24+M(-2,2)},${31+M(-4,4)}%,${47+M(-3,3)}%)`,a.fillRect(f+1,0,24,c),a.fillStyle="rgba(44,27,21,.27)",a.fillRect(f,0,1,c),a.fillStyle="rgba(227,180,128,.15)",a.fillRect(f+3,0,1,c)}),Mt=a=>Object.assign(o(a,Z,.39,.06),{fit:!0}),$=new s,y=new s,bt=new s,Yt=new s,At=new s,K={dirt:o("#fff",1,.97),grass:o("#fff",2,.98),wall:o("#dedccf",3,.93),base:o("#a3aaa5",3,.9),asphalt:o("#fff",4,.95),wood:o("#fff",5,.64),metal:o("#a6b0ac",0,.3,.65),whiteMetal:o("#f1f1e8",0,.42,.24),dark:o("#273036",0,.72),glass:Mt("#c1cece"),black:o("#252928",0,.6),fabric:o("#f9f9f4",6,.85),bark:o("#fff",9,.94),leaf:o("#fff",7,.88),autumn:o("#fff",8,.9),tire:o("#fff",12,.93)},ge=(a,c)=>[33+(a-1334)*.08079070799073343,2.64+(c-886)*.08079070799073343],Ne=[],gt=[],pt=[],Kt=[],ae=[],Zt=[],Ee=[];function Ue(a,c){let f=At.count/3;c(),Ee.push({id:a,first:f,last:At.count/3})}function qt(a,c,f,S,L="",O=0){Ne.push({x:a,z:c,w:f,d:S,id:L,r:O})}function Be(a,c,f,S,L){let O=P(a,c),B=P(f,S);qt((O[0]+B[0])/2,(O[1]+B[1])/2,B[0]-O[0],B[1]-O[1],L)}let{layout:we}=m,_e=m.locations.find(a=>a.id==="WC_ART"),xe=we.campus;function Ie(a,c,f){let S=!1;for(let L=0,O=f.length-1;L<f.length;O=L++){let B=f[L],Q=f[O];B[1]>c!=Q[1]>c&&a<(Q[0]-B[0])*(c-B[1])/(Q[1]-B[1])+B[0]&&(S=!S)}return S}let Qe=0;function Ae(a,c,f,S=3){let L=a.map(yt=>[...yt]);L.reduce((yt,Nt,Ht)=>{let he=L[(Ht+1)%L.length];return yt+Nt[0]*he[1]-he[0]*Nt[1]},0)<0&&L.reverse();let B=L.map((yt,Nt)=>Nt),Q=.007+Qe++*.011,z=(yt,Nt,Ht)=>(Nt[0]-yt[0])*(Ht[1]-yt[1])-(Nt[1]-yt[1])*(Ht[0]-yt[0]),et=0;function St(yt,Nt,Ht){c.tri([yt[0],Q,yt[1]],[Ht[0],Q,Ht[1]],[Nt[0],Q,Nt[1]],f,[[yt[0]/S,yt[1]/S],[Ht[0]/S,Ht[1]/S],[Nt[0]/S,Nt[1]/S]])}for(;B.length>3&&et++<600;){let yt=!1;for(let Nt=0;Nt<B.length;Nt++){let Ht=B[(Nt-1+B.length)%B.length],he=B[Nt],me=B[(Nt+1)%B.length],fe=L[Ht],Vt=L[he],oe=L[me];if(!(z(fe,Vt,oe)<1e-4)&&!B.some(le=>le!==Ht&&le!==he&&le!==me&&z(fe,Vt,L[le])>=0&&z(Vt,oe,L[le])>=0&&z(oe,fe,L[le])>=0)){St(fe,Vt,oe),B.splice(Nt,1),yt=!0;break}}if(!yt)break}B.length===3&&St(...B.map(yt=>L[yt]))}$.plane(0,-.1,0,1100,1100,K.grass,460,460),Ae(xe,$,K.asphalt,.7);let tn=[[[1257,2090],[1354,2058],[1451,2011],[1544,1960],[1620,1919],[1690,1848],[1671,1876],[1656,1949],[1586,1998],[1487,2045],[1388,2088],[1270,2124]],[[1567,1835],[1641,1781],[1690,1848],[1620,1919],[1592,1930],[1579,1884],[1585,1864]]].map(a=>a.map(c=>ge(...c)));for(let a of tn)Ae(a,$,K.asphalt,.8);function tt(a,c,f,S){let L=S[0]-f[0],O=S[1]-f[1],B=p(((a-f[0])*L+(c-f[1])*O)/(L*L+O*O),0,1);return Math.hypot(a-f[0]-L*B,c-f[1]-O*B)}let Xe=(a,c,f=0)=>tn.some(S=>Ie(a,c,S)||S.some((L,O)=>tt(a,c,L,S[(O+1)%S.length])<f)),Pe=m.locations.find(a=>a.id==="GATE_MAIN").pos,k=we.mainGateApproach,w=(a,c)=>tt(a,c,k,[2*Pe[0]-k[0],2*Pe[1]-k[1]])<2.8,st=[P(64,146),P(147,146),P(175,83),P(286,78),P(382,92),P(491,128),P(575,167),P(575,300),P(470,302),P(469,412),P(430,431),P(425,407),P(260,408),P(223,418),P(170,413),P(99,420),P(98,388),P(66,388),P(64,350)];Ae(st,$,K.dirt,1.35);let rt=[[1328,1903],[1361,1894],[1407,1870],[1457,1850],[1510,1835],[1564,1837],[1571,1852],[1514,1858],[1465,1873],[1416,1892],[1370,1914],[1328,1922]].map(a=>ge(...a)),ct=[[1390,1910],[1416,1892],[1465,1873],[1514,1858],[1571,1852],[1579,1867],[1573,1885],[1585,1926],[1535,1952],[1480,1974],[1440,1960]].map(a=>ge(...a));Ae(rt,$,o("#d6ccaf",3,.98),2),Ae(ct,$,o("#8a936e",2,.98),2);let zt=o("#a8a497",3,.92);for(let a=0;a<ct.length;a++){let c=ct[a],f=ct[(a+1)%ct.length],S=f[0]-c[0],L=f[1]-c[1];y.scope(n.compose((c[0]+f[0])/2,0,(c[1]+f[1])/2,-Math.atan2(L,S)),()=>{y.box(0,.1,0,Math.hypot(S,L),.18,.12,zt)})}let It=[["#5d7140",.42],["#738551",.32],["#506542",.45]];for(let a=0;a<ct.length-1;a++){let[c,f]=ct[a],S=ge(1502,1910),[L,O]=It[a%It.length],B=[c+(S[0]-c)*.23,f+(S[1]-f)*.23];Ie(...B,ct)&&y.sphere(B[0],O,B[1],.68,O,.52,o(L,0,.95),10,7)}t(.18,"配置図から校舎と会場を組み立てています");function ft(a,c,f,S,L=10.65,O="校舎",B=!0,Q=null){let z=P(a,c),et=P(f,S),St=(z[0]+et[0])/2,yt=(z[1]+et[1])/2,Nt=et[0]-z[0],Ht=et[1]-z[1];if(Kt.push({x:St,z:yt,w:Nt,d:Ht,h:L,label:O}),qt(St,yt,Nt+.18,Ht+.18,O),$.box(St,L/2,yt,Nt,L,Ht,K.wall),$.box(St,.24,yt,Nt+.15,.48,Ht+.15,K.base),$.box(St,L+.12,yt,Nt+.55,.24,Ht+.55,o("#c6c3b6",0,.86)),!B)return;let he=L>12?4:L>9?3:2,me=(L-.35)/he;for(let fe=0;fe<4;fe++){let Vt=fe%2?Ht:Nt,oe=fe%2?Nt:Ht;y.scope(n.compose(St,0,yt,fe*Math.PI/2),()=>{let le=Math.max(1,Math.floor((Vt-.9)/4.3)),Oe=(Vt-.9)/le;for(let $t=0;$t<he;$t++){let ve=1.62+$t*me,je=$t===0?1.8:1.16;y.box(0,$t*me+.45,oe/2+.015,Vt,.035,.026,o("#b4b3a7",0,.95));for(let Ge=0;Ge<le;Ge++){let mn=-Vt/2+.45+(Ge+.5)*Oe,gi=Oe*.84;if(!(Q&&fe===1&&$t===0&&Math.abs(yt-mn-Q.pos[1])<gi/2)){y.box(mn,ve,oe/2+.024,gi+.12,je+.12,.06,o("#aaa99f",0,.6,.25)),y.box(mn,ve,oe/2+.06,gi,je,.025,Mt((Ge+$t)%4===0?"#a9b8b8":"#c5cecb"));for(let Pl=1;Pl<4;Pl++)y.box(mn-gi/2+Pl*gi/4,ve,oe/2+.085,.038,je,.032,K.metal);y.box(mn,ve-je/2-.035,oe/2+.11,gi+.17,.075,.17,o("#bdbdb3",0,.85)),$t===0&&y.box(mn,ve+.2,oe/2+.087,gi,.037,.03,K.metal)}}}for(let $t=0;$t<=le;$t+=2){let ve=-Vt/2+.45+$t*Oe;y.box(ve,L/2,oe/2+.085,.22,L,.17,K.wall)}for(let $t of[-1,1])y.cylinder([$t*(Vt/2-.2),.35,oe/2+.19],[$t*(Vt/2-.2),L-.2,oe/2+.19],.045,.045,o("#a9aaa0",0,.75),8)})}}ft(95.4,436.56,329.52,489.72,13.5),ft(30.48,411.36,82.56,541.56,10.65),ft(67.32,389.4,95.4,436.56,10.65,"校舎",!0,_e),ft(329.52,430.32,425.28,516.36,13.5),ft(307.92,489.72,329.52,516.36,7.2),ft(311.52,535.08,390.72,603.6,7.9,"昇降口",!1),ft(103.44,608.28,401.04,666.1,10.7);{let a=P(111,436.56);y.box(a[0],6.75,a[1]-.16,6.1,13.5,.32,K.wall);for(let c of[3.2,6.5,9.8,13.4])y.box(a[0],c,a[1]-.36,6.55,.19,.47,K.wall);y.box(a[0],1.3,a[1]-.34,4.7,2.4,.05,K.glass),y.box(a[0],2.88,a[1]-1,6.4,.2,2,K.wall)}{let a=P(238,436.56),c=o("#693f30",0,.78),f=o("#9e9f94",0,.72,.18);y.box(a[0],1.25,a[1]-.035,6.3,2.5,.08,c),y.box(a[0],2.8,a[1]-.7,8.8,.18,1.5,o("#724b3e",0,.8));for(let S of[-4.1,4.1])y.box(a[0]+S,1.4,a[1]-1.2,.23,2.8,.23,K.wall);for(let S of[-2.75,-1.38,0,1.38,2.75])y.box(a[0]+S,1.32,a[1]-.095,.045,2.24,.07,f),y.box(a[0]+S,2.22,a[1]-.13,1.3,.055,.05,f);for(let S of[-1.1,1.1])y.box(a[0]+S,1.12,a[1]-.15,.05,.32,.06,f);y.box(a[0],.055,a[1]-1.45,9,.11,2.55,o("#aeada1",3,.95))}function vt(a,c,f,S=0){y.scope(n.compose(a,c,f,S),()=>{y.cylinder([0,0,-.03],[0,0,.06],.48,.48,K.whiteMetal,36),y.cylinder([0,0,.062],[0,0,.07],.43,.43,o("#efefdf"),36);for(let L=0;L<12;L++){let O=L/12*v;y.cylinder([Math.sin(O)*.34,Math.cos(O)*.34,.085],[Math.sin(O)*.38,Math.cos(O)*.38,.085],.01,.01,K.dark,5)}y.cylinder([0,0,.095],[.07,.27,.095],.017,.017,K.dark,6),y.cylinder([0,0,.1],[.27,-.1,.1],.013,.013,K.dark,6)})}{let a=P(365,430.2);vt(a[0],6.8,a[1]-.06,Math.PI)}{let a=P(391,566);y.scope(n.compose(a[0]+.06,0,a[1],Math.PI/2),()=>{let c=o("#e1e0d4",3,.92),f=o("#ffffff",X,.95),S=2.1,L=.22,O=-.85;y.box(0,5.5,.93,14.4,4.5,2.34,c),y.box(-3.92,5.59,S+.045,5.35,3.05,.06,f),y.box(3.14,5.59,S+.045,6.91,3.05,.06,f),y.box(0,7.84,.96,14.7,.2,2.52,c),y.box(0,3.28,.94,14.4,.3,2.32,c),y.box(0,.16,1.18,14.5,.2,2.88,o("#aaa99e",3,.9)),y.box(0,1.65,L-.08,13.65,2.92,.06,o("#252e2c",0,.93));let B=o("#b4b9b4",0,.42,.38),Q=o("#56665f",0,.3,.15);for(let z=0;z<10;z++){let et=-6.08+z*1.35;y.box(et,1.5,L,1.28,2.25,.035,Q),y.box(et,2.85,L,1.28,.37,.035,o("#777e70",0,.36)),y.box(et-.66,1.65,L+.045,.045,2.9,.055,B);for(let St of[.38,1.18,2.64,3.06])y.box(et,St,L+.045,1.34,.045,.055,B);z%2===0&&(y.box(et+.46,1.2,L+.105,.025,.32,.035,B),y.box(et+.46,1.02,L+.075,.12,.025,.08,B))}y.box(6.74,1.65,L+.045,.045,2.9,.055,B);for(let z of[-6.91,O,6.91])y.box(z,1.71,S-.29,.58,3.08,.58,c),y.box(z,.23,S-.29,.67,.15,.67,o("#b7b7aa",3,.94));for(let z of[-6.9,6.9])y.box(z,1.74,1.08,.28,3.04,1.88,c);for(let z of[-5.25,-2.65,1.55,4.85])y.box(z,3.115,1.16,.38,.045,.26,o("#50534b")),y.box(z,3.086,1.16,.29,.017,.17,o("#e7e3c5",0,.6,0,.25));for(let z=0;z<3;z++)y.box(0,.03+z*.05,3.25-z*.38,14.7,.06+z*.1,.4,o("#a9a79b",3,.9));vt(O,3.6,S+.08,0)})}{let a=P(204,420),c=o("#919b94",0,.58,.21),f=o("#a9aea5",0,.82);$.box(a[0],1.8,a[1],8.9,3.6,5.3,K.wall),$.box(a[0],3.66,a[1],9.15,.18,5.55,o("#919b94",10)),qt(a[0],a[1],9,5.4,"用具庫");for(let S of[-1,1]){y.box(a[0]+S*2.12,1.58,a[1]-2.69,4.08,2.95,.07,f),y.box(a[0]+S*2.12,1.59,a[1]-2.75,4,.035,.055,c);for(let L=-1;L<=1;L++)y.box(a[0]+S*2.12+L*1.17,1.58,a[1]-2.75,.025,2.88,.045,c);y.box(a[0]+S*3.5,1.34,a[1]-2.79,.045,.26,.045,c)}y.box(a[0],3.16,a[1]-2.81,8.75,.22,.12,c);for(let S of[-3.9,0,3.9])y.cylinder([a[0]+S,3.58,a[1]-2.64],[a[0]+S,.08,a[1]-2.64],.045,.045,c,8);y.box(a[0],1.3,a[1]+2.68,3,2.6,.08,o("#79857f",0,.46,.35))}function Gt(a,c,f=0){let S=P(a,c);y.scope(n.compose(S[0],0,S[1],f),()=>{y.box(0,.63,0,2.9,.33,.52,K.base),y.box(0,.83,0,2.96,.08,.6,o("#c3cdca",0,.23,.7));for(let L=0;L<6;L++){let O=-1.22+L*.49;y.box(O,.84,0,.35,.015,.33,o("#697e81",0,.18,.65)),y.cylinder([O,.81,-.19],[O,1.15,-.19],.018,.018,K.metal,7),y.cylinder([O,1.15,-.19],[O,1.15,.02],.017,.017,K.metal,7)}for(let L of[-1.1,1.1])y.box(L,.35,0,.13,.7,.34,K.base)})}Gt(251,414),Gt(42,400);{let a=P(401,538),c=o("#ac7049",0,.94);y.cylinder([a[0],.12,a[1]],[a[0],.75,a[1]],1.25,1.25,c,36),y.cylinder([a[0],.75,a[1]],[a[0],.82,a[1]],1.29,1.29,o("#ada99a"),36),y.cylinder([a[0],.825,a[1]],[a[0],.84,a[1]],1.1,1.1,K.base,36);for(let f=0;f<24;f++){let S=f/24*v;y.cylinder([a[0]+1.252*Math.sin(S),.12,a[1]+1.252*Math.cos(S)],[a[0]+1.252*Math.sin(S),.74,a[1]+1.252*Math.cos(S)],.009,.009,o("#d4b99a"),5)}for(let f of[-.48,.48])y.cylinder([a[0]+f,.84,a[1]],[a[0]+f,1.18,a[1]],.025,.025,K.metal,7),y.cylinder([a[0]+f,1.18,a[1]],[a[0]+f+.16,1.18,a[1]],.025,.025,K.metal,7)}let jt=470,Rt=580,kt=302,Qt=504,xt=P(jt,kt),Lt=P(Rt,Qt),G=[(xt[0]+Lt[0])/2,(xt[1]+Lt[1])/2],Et=Lt[0]-xt[0],mt=Lt[1]-xt[1],Tt=P(500,468)[1],Dt=.45,wt=Tt-xt[1],ie=(xt[1]+Tt)/2;$.box(G[0],Dt/2,G[1],Et,Dt,mt,o("#b7b9b3",3,.94)),$.plane(G[0],Dt+.045,ie,Et,wt,o("#ffffff",lt,.4),Et/4,wt/4),$.plane(G[0],Dt+.044,(Tt+Lt[1])/2,Et,Lt[1]-Tt,o("#c9c5b9",0,.88),Et/4,2),Kt.push({x:G[0],z:G[1],w:Et,d:mt,h:10,label:"体育館",gym:!0}),$.box(Lt[0],2.1,G[1],.35,4.2,mt,K.wall),$.box(Lt[0],8.38,G[1],.35,.64,mt,K.wall),qt(Lt[0],G[1],.4,mt,"体育館東壁"),$.box(G[0],4.35,xt[1],Et,8.7,.35,K.wall),qt(G[0],xt[1],Et,.4,"体育館壁");let te=xt[0]+Et*.38,pe=2.25,Me=Dt,_n=o("#e1dfd5",3,.92),W=xt[0]+Et*77/309,ut=xt[0]+Et*156/309,Ut=xt[0]+Et*202/309,Ft=xt[0]+Et*233/309,Ot=Tt+(Lt[1]-Tt)*27/66,Bt=(xt[0]+W)/2,Jt=(Ft+Lt[0])/2,Wt=1.1,ue=[[Bt-Wt,Bt+Wt],[te-pe,te+pe],[Jt-Wt,Jt+Wt]],se=[],Ce=xt[0];for(let[a,c]of ue)a>Ce&&se.push([Ce,a]),Ce=c;Ce<Lt[0]&&se.push([Ce,Lt[0]]);let qe=[[xt[0]+2,xt[0]+3.5],[ut+.8,ut+1.8],[Ut+.6,Ut+1.55],[Ft+1.7,Ft+3.2]],dn=[qe[0],[te-pe,te+pe],...qe.slice(1)],Te=[],Ze=xt[0];for(let[a,c]of dn)a>Ze&&Te.push([Ze,a]),Ze=c;Ze<Lt[0]&&Te.push([Ze,Lt[0]]);for(let[a,c]of Te)$.box((a+c)/2,2.1,Lt[1],c-a,4.2,.35,K.wall),qt((a+c)/2,Lt[1],c-a,.4,"体育館南壁");for(let[a,c]of qe){let f=(a+c)/2,S=c-a;$.box(f,.58,Lt[1],S,1.16,.35,K.wall),$.box(f,3.45,Lt[1],S,1.5,.35,K.wall),y.box(f,1.93,Lt[1]+.045,S-.12,1.52,.055,Mt("#aab9b7")),qt(f,Lt[1],S,.4,"体育館南壁の窓")}$.box(te,3.6,Lt[1],pe*2,1.2,.35,K.wall),$.box(G[0],6.45,Lt[1],Et,4.5,.35,K.wall);for(let[a,c]of se)$.box((a+c)/2,2.1,Tt,c-a,4.2,.35,K.wall),qt((a+c)/2,Tt,c-a,.4,"体育館床の出口側の壁");let $e=o("#f4f3ed",0,.62,.08),ti=o("#e2e2da",0,.54,.24);for(let a of[Bt,Jt])$.box(a,3.6,Tt,Wt*2,1.2,.35,K.wall),$.box(a,1.51,Tt-.095,Wt*2-.12,3.02,.11,$e),y.box(a,1.52,Tt-.17,Wt*2+.06,3.1,.045,ti),y.box(a,1.52,Tt-.205,Wt*2-.12,2.98,.025,$e),y.box(a+(a<G[0]?.78:-.78),1.4,Tt-.24,.025,.23,.05,K.metal),qt(a,Tt,Wt*2,.4,"出演者控室の閉じた扉");$.box(te,3.6,Tt,pe*2,1.2,.35,K.wall),$.box(G[0],6.37,Tt,Et,4.34,.35,K.wall),$.tri([xt[0],8.54,Tt],[G[0],9.97,Tt],[Lt[0],8.54,Tt],K.wall);function Tn(a,c,f){$.box(a,Me+1.6,(c+f)/2,.16,3.2,f-c,_n),qt(a,(c+f)/2,.18,f-c,"体育館前室の壁")}function D(a,c,f){$.box((a+c)/2,Me+1.6,f,c-a,3.2,.16,_n),qt((a+c)/2,f,c-a,.18,"体育館前室の壁")}Tn(W,Tt+.22,Lt[1]),Tn(ut,Ot,Lt[1]),Tn(Ut,Tt+.22,Lt[1]),Tn(Ft,Tt+.22,Lt[1]),D(ut,Ut,Ot);let nt=o("#a69b86",0,.82),it=(Ot+Lt[1])/2,dt=Lt[1]-Ot-.55;for(let a of[W+.36,ut-.48]){for(let c of[.28,.7,1.12])y.box(a,Dt+c,it,.56,.07,dt,nt);for(let c of[-1,1])y.box(a+c*.27,Dt+.7,it,.045,1.1,dt,nt);qt(a,it,.56,dt,"下駄箱")}[["出演者控室（小）",(xt[0]+W)/2],["WC（M）",(ut+Ut)/2],["WC（W）",(Ut+Ft)/2],["出演者控室（大）",(Ft+Lt[0])/2]].forEach(([a,c],f)=>{let S=d.add("gym-room-"+f,(L,O)=>{L.fillStyle="#f5f3eb",L.fillRect(0,0,O,O),L.fillStyle="#273b39",L.textAlign="center",f===0||f===3?(L.font="700 78px sans-serif",L.fillText("出演者控室",O/2,218),L.font="700 100px sans-serif",L.fillText(f===0?"（小）":"（大）",O/2,350)):(L.font="700 112px sans-serif",L.fillText(a,O/2,296))});At.scope(n.compose(c,0,Lt[1]-.24,Math.PI),()=>{At.sign(0,3.35,0,f===0||f===3?2.2:1.35,.36,S,!0)})});let V=[[335,344],[421,433]],F=[[302,335],[344,421],[433,504]];for(let[a,c]of F){let f=P(jt,a),S=P(jt,c);$.box(xt[0],2.1,(f[1]+S[1])/2,.36,4.2,S[1]-f[1],K.wall),qt(xt[0],(f[1]+S[1])/2,.4,S[1]-f[1],"体育館西壁")}$.box(xt[0],8.38,G[1],.36,.64,mt,K.wall);for(let[a,c]of V){let f=P(jt,a),S=P(jt,c);$.box(xt[0],3.49,(f[1]+S[1])/2,.36,1.42,S[1]-f[1],K.wall)}let q=Mt("#aab9b7"),j=o("#b7b9ae",0,.53,.3);for(let a of[-1,1]){let c=G[0]+a*Et/2;y.box(c,6.13,G[1],.03,3.86,mt-.75,q);for(let f of[4.2,5.05,6.1,7.12,8.05])y.box(c,f,G[1],.16,.065,mt,j);for(let f=xt[1]+.45;f<Lt[1];f+=1.35)y.box(c,6.13,f,.17,3.9,.055,j);for(let f=xt[1]+.5;f<Lt[1];f+=5.4)a<0&&V.some(([S,L])=>f>P(jt,S)[1]-.2&&f<P(jt,L)[1]+.2)||y.box(c,4.3,f,.45,8.6,.33,K.wall);for(let f=xt[1]+.5;f<Lt[1]-.4;f+=.55)y.box(c-a*.3,4.9,f,.035,1.2,.03,K.whiteMetal);y.box(c-a*.3,5.5,G[1],.05,.05,mt,K.whiteMetal)}let Ct=o("#ffffff",ht,.78),ot=o("#966d50",0,.76);for(let a of[-1,1])for(let[c,f]of a<0?F:[[302,504]]){let S=P(jt,c)[1],L=P(jt,f)[1],O=G[0]+a*(Et/2-.205);y.box(O,2.14,(S+L)/2,.028,4.03,L-S,Ct),y.box(O-a*.04,4.14,(S+L)/2,.045,.11,L-S,ot);for(let B=S+.36;B<L;B+=.75)y.box(O-a*.03,2.1,B,.035,3.94,.026,ot);y.cylinder([O-a*.35,5.2,S],[O-a*.35,5.2,L],.025,.025,K.whiteMetal,8)}let _t=["#777a4f","#8da6ab","#938270","#596f4c","#be9f7b","#765b4b"];for(let a=0;a<30;a++){let c=we.exhibitsZ+(a%15-7)*.597,f=Dt+1.55+(.5-Math.floor(a/15))*(.21+.15);y.box(Lt[0]-.369,f,c,.012,.21,.297,K.fabric),y.box(Lt[0]-.378,f+.028,c,.008,.117,.261,o(_t[a%6])),y.box(Lt[0]-.383,f-.045,c,.008,.061,.261,o(_t[(a*3+1)%6])),y.sphere(Lt[0]-.389,f-.009,c+.038,.007,.043,.049,o(_t[(a+3)%6]),8,6)}for(let a=0;a<4;a++){let c=we.exhibitsZ+(a-1.5)*2.49,f=Dt+1.55;y.box(xt[0]+.265,f,c,.012,1.17,2.37,K.fabric);for(let S=0;S<6;S++){let L=o(["#739369","#7b9a9a","#ba8461"][S%3]);y.box(xt[0]+.274,f+(.27-S*.09)*1.5,c+.36,.01,.027,1.14,L),y.sphere(xt[0]+.274,f+(.19-S*.076)*1.5,c-.63,.008,.0525,.219,L,8,6)}}let Pt=Lt[0]-1.3,Xt=Tt-1.3,de=o("#798c92",6,.95);y.scope(n.compose(Pt,Dt,Xt,0),()=>{ri(y,1.75,1.75,de,2,2.23);for(let a of[-1,1])y.box(a*.875,1.02,0,.022,1.95,1.75,de),y.box(0,1.02,a*.875,1.75,1.95,.022,de)}),qt(Pt,Xt,1.75,1.75,"授乳スペース");let ye=m.locations.find(a=>a.id==="NURSING");ye.pos=[Pt,Xt],ye.approach=[Pt-2,Xt],ye.marker=[Pt,Dt+2.45,Xt],pt.push(ye);for(let[a,c]of V){let f=P(jt,a)[1],S=P(jt,c)[1];y.box(xt[0]+.205,3.49,(f+S)/2,.035,1.42,S-f,Ct)}let ee=Tt-.205;for(let[a,c]of se)y.box((a+c)/2,1.55,ee,c-a,2.94,.035,Ct);y.box(G[0],3.57,ee,Et,1.1,.035,Ct);for(let a=xt[0]+.38;a<Lt[0]-.2;a+=.53){let c=ue.some(([f,S])=>a>=f&&a<=S);y.box(a,c?3.57:2.1,ee-.028,.022,c?1.02:3.96,.02,ot)}let Ye=o("#e6e2d8",0,.76),fn=o("#24775f",0,.74,.04);for(let a of[-1,1])y.box(te+a*2.25,1.52,ee-.04,.11,3.04,.09,Ye);y.box(te,3.02,ee-.04,4.6,.12,.09,Ye);let cn=o("#f4f3ed",0,.64,.08);for(let a of[-1,1])y.box(te+a*(pe-.11),1.51,Tt+.67,.08,2.98,1.28,cn),y.box(te+a*(pe-.17),1.44,Tt+.25,.035,.27,.05,K.metal);for(let a of[-4.8,0,4.8]){let c=G[0]+a;y.box(c,6,ee-.02,1.35,2.4,.05,Ye),y.box(c,6,ee-.055,1.21,2.25,.025,fn),y.box(c-.35,6,ee-.073,.08,2.19,.015,o("#6eb49a",0,.79,.02))}let an=o("#8f9693",10,.78,.12),bn=o("#e8e6dc",0,.96);for(let a of[-1,1]){let c=G[0]+a*(Et/2+.4);Yt.quad([G[0],10.15,xt[1]-.4],[G[0],10.15,Lt[1]+.4],[c,8.72,Lt[1]+.4],[c,8.72,xt[1]-.4],an,mt/3,4),Yt.quad([G[0],9.97,xt[1]],[c,8.54,xt[1]],[c,8.54,Lt[1]],[G[0],9.97,Lt[1]],bn,1,1)}for(let a of[xt[1],Lt[1]])$.tri([xt[0],8.7,a],[G[0],10.15,a],[Lt[0],8.7,a],K.wall);for(let a=xt[1]+3;a<Lt[1]-1;a+=5.4)for(let c of[-7,-2.3,2.3,7]){let f=9.93-Math.abs(c)/(Et/2)*1.43;Yt.cylinder([G[0]+c,f-.07,a],[G[0]+c,f-.01,a],.25,.25,K.whiteMetal,20),Yt.disk(G[0]+c,f-.085,a,.215,o("#fff9e4",0,.9,0,.8),20)}let re=o("#a8784f",0,.58),En=o("#391722",6,.94),ze=o("#c39736",0,.47,.17),en=xt[1]+4.03,An=xt[1]+2.14;for(let a of[-1,1]){let c=Et/2-6.12,f=G[0]+a*(6.12+c/2);$.box(f,4.35,en,c,8.7,.35,K.wall),qt(f,en,c,.4,"体育館壁"),y.box(f,2.1,en+.21,c,4.16,.05,Ct);for(let S=f-c/2+.36;S<f+c/2;S+=.5)y.box(S,2.1,en+.25,.023,4.08,.026,ot)}$.box(G[0],8.2,en,12.24,1,.35,K.wall),$.box(G[0],Dt+.55,xt[1]+2.1,11,1.1,4,o("#aa7649",lt,.52)),qt(G[0],xt[1]+2.1,11,4.2,"常設舞台・使用せず"),y.box(G[0],3.81,An,11.2,5.46,.11,En);for(let a=0;a<32;a++){let c=G[0]-5.42+a*.35;y.cylinder([c,1.1,An+.08],[c,6.49,An+.08],.075,.075,o(a%3?"#421925":"#572331",6,.96),7)}for(let a of[1.1,6.48])y.box(G[0],a,An+.17,11.18,.085,.1,ze);for(let a of[-1,1])y.box(G[0]+a*5.86,4.05,en,.73,6.89,.45,re),y.box(G[0]+a*5.49,3.79,(An+en)/2,.22,5.95,en-An,re);y.box(G[0],7.46,en,12.45,.66,.45,re),y.box(G[0],6.89,en+.23,11.12,.55,.07,o("#4a1a28",0,.94)),y.quad([G[0],7.24,en+.28],[G[0]-.25,6.97,en+.28],[G[0],6.7,en+.28],[G[0]+.25,6.97,en+.28],ze),y.box(G[0],1,en+.11,11.1,1.1,.15,Ct);for(let a of[-1,1])y.box(G[0]+a*8.25,2.55,en+.29,3.2,.92,.06,Ct);At.sign(G[0]+8.25,2.55,en+.34,3,.62,b);for(let a of[-1,1])for(let c of[xt[1]+20,xt[1]+33,xt[1]+46])y.box(G[0]+a*(Et/2-.245),6.03,c,.035,2.9,2.4,o("#27443b",6,.9));for(let a of[-1,1])y.cylinder([G[0]+a*6,.05,xt[1]+5],[G[0]+a*6,5.3,xt[1]+5],.045,.045,K.metal,8);function Rn(a,c,f,S,L,O=.066+Dt){let B=f[0]-c[0],Q=f[1]-c[1],z=Math.hypot(B,Q),et=-Q/z*S/2,St=B/z*S/2;a.quad([c[0]-et,O,c[1]-St],[c[0]+et,O,c[1]+St],[f[0]+et,O,f[1]+St],[f[0]-et,O,f[1]-St],L,z,1)}for(let a of[G[0]-8.2,G[0]+8.2])Rn(y,[a,xt[1]+6],[a,Tt-2],.047,o("#f5ede3"));for(let a of[xt[1]+6,ie,Tt-2])Rn(y,[G[0]-8.2,a],[G[0]+8.2,a],.047,o("#f5ede3"));for(let a of[G[0]-6.8,G[0]+6.8])Rn(y,[a,xt[1]+13],[a,Tt-3],.036,o("#293239"),.068+Dt);for(let a of[xt[1]+13,Tt-3])Rn(y,[G[0]-6.8,a],[G[0]+6.8,a],.036,o("#293239"),.068+Dt);for(let a of[G[0]-9.2,G[0]+9.2])Rn(y,[a,xt[1]+16],[a,Tt-4],.038,o("#2f7795"),.07+Dt);let Ci=P(469.65,427);At.scope(n.compose(Ci[0]-.12,0,Ci[1],-Math.PI/2),()=>{Ue("GYM",()=>{At.sign(0,2.94,0,3.5,.75,_.GYM.banner),At.sign(3.7,1.55,.1,1.08,1.65,J)})}),t(.3,"テント・キッチンカー・ブースの内容を配置しています");function Fe(a,c,f,S=0,L="#66746c",O=0){a.scope(n.compose(c,O,f,S),()=>{let B=o("#a5aca8",0,.32,.5),Q=o(L,6,.82);a.box(0,.43,0,.42,.055,.39,Q),a.box(0,.7,-.18,.43,.3,.045,Q);for(let z of[-.17,.17])a.cylinder([z,.04,-.15],[z,.86,-.18],.016,.016,B,6),a.cylinder([z,.04,.21],[z,.44,.1],.016,.016,B,6),a.cylinder([z,.05,-.16],[z,.47,.15],.014,.014,B,6);a.cylinder([-.19,.18,-.14],[.19,.18,-.14],.012,.012,B,6)})}function nn(a,c,f,S=1.8,L=.72,O=0,B=!0,Q=!1){a.scope(n.compose(c,0,f,O),()=>{a.box(0,.73,0,S,.07,L,B?o("#f2ede1",13,.9):o("#d5c8af",5,.7));for(let z of[-S*.36,S*.36])a.cylinder([z,.06,-L*.34],[z,.71,L*.32],.022,.022,K.metal,7),a.cylinder([z,.06,L*.34],[z,.71,-L*.32],.022,.022,K.metal,7);if(a.cylinder([-S*.38,.35,0],[S*.38,.35,0],.021,.021,K.metal,7),B)for(let z of[-1,1])a.box(0,.6,z*L/2,S,.25,.016,o("#eeeadf",6,.94))}),Q&&qt(c,f,Math.abs(Math.cos(O))*S+Math.abs(Math.sin(O))*L,Math.abs(Math.sin(O))*S+Math.abs(Math.cos(O))*L,"table")}let si=ge(1050.5,871.5);for(let a=0;a<4;a++)for(let c=0;c<4;c++){let f=si[0]+(c-1.5)*2.62,S=si[1]+(a-1.5)*2.42;nn(y,f,S,1.65,.7,0,!0,!0);for(let L of[-1,1])for(let O=0;O<3;O++){let B=f+(O-1)*.53,Q=S+L*.71;Fe(y,B,Q,L===-1?0:Math.PI,"#6f7970"),Zt.push({x:B,z:Q,yaw:L===-1?0:Math.PI})}}let Ke=ge(1185.5,1577.5);for(let a=0;a<3;a++){nn(y,Ke[0],Ke[1]+(a-1)*2.2,1.8,.65,0,!0,!0);for(let c of[-1,1])for(let f=0;f<3;f++){let S=Ke[0]+(f-1)*.57,L=Ke[1]+(a-1)*2.2+c*.68,O=c<0?0:Math.PI;Fe(y,S,L,O),Zt.push({x:S,z:L,yaw:O,eat2:!0})}}for(let a=0;a<6;a++)for(let c=0;c<12;c++){let f=G[0]+(c-5.5)*.64+(c<6?-.7:.7),S=xt[1]+18.5+a*.92;Fe(y,f,S,Math.PI,"#566a68",Dt+.05),Zt.push({x:f,z:S,yaw:Math.PI,gym:!0})}for(let a=0;a<6;a++)for(let c of[-2,-1,12,13]){let f=G[0]+(c-5.5)*.64+(c<6?-.7:.7),S=xt[1]+18.5+a*.92;Fe(y,f,S,Math.PI,"#566a68",Dt+.05),Zt.push({x:f,z:S,yaw:Math.PI,gym:!0,addedGymSeat:!0})}for(let a=6;a<8;a++)for(let c=0;c<16;c++){let f=G[0]+(c-7.5)*.64+(c<8?-.7:.7),S=xt[1]+18.5+a*.92;Fe(y,f,S,Math.PI,"#566a68",Dt+.05),Zt.push({x:f,z:S,yaw:Math.PI,gym:!0,addedGymSeat:!0})}function On(a,c,f,S,L=0){let Nt=Math.atan(-.132),Ht=Math.cos(Nt),he=Math.sin(Nt),me=n.compose(0,.85,-.15+(.85-.04)*-.132);me[5]=Ht,me[6]=he,me[9]=-he,me[10]=Ht,a.scope(n.compose(c,0,f,L),()=>{for(let fe of[-.15,-.48])for(let Vt of[-1,1])a.cylinder([Vt*.4,.04,fe],[Vt*.35,1.29,-.315],.023,.023,K.wood,6);a.scope(me,()=>a.sign(0,0,.025,.7,.94,S,!0))})}function ri(a,c,f,S,L=2.18,O=3.16){let B=[[-c/2,L,-f/2],[-c/2,L,f/2],[c/2,L,f/2],[c/2,L,-f/2]],Q=[0,O,0];for(let z=0;z<4;z++){let et=B[z],St=B[(z+1)%4],yt=(Nt,Ht)=>{let he=e.add(e.mul(et,1-Nt),e.mul(St,Nt)),me=e.add(e.mul(he,1-Ht),e.mul(Q,Ht));return me[1]-=.052*Math.sin(Nt*Math.PI)*Math.sin(Ht*Math.PI),me};for(let Nt=0;Nt<10;Nt++)for(let Ht=0;Ht<8;Ht++){let he=Nt/10,me=Ht/8,fe=yt(he,me),Vt=yt((Nt+1)/10,me),oe=yt((Nt+1)/10,(Ht+1)/8),le=yt(he,(Ht+1)/8);a.quad(fe,Vt,oe,le,S,1,1)}a.quad(et,[et[0],L-.2,et[2]],[St[0],L-.2,St[2]],St,S,1,1)}}function vs(a,c){let f=c.id,S=c.category,L=f==="F-1"||f==="F-9",O=f==="F-6"||f==="F-8",B=f==="T-12",Q=f==="T-2";if(L){for(let z=0;z<9;z++){let et=-.8+z%5*.23,St=.3+Math.floor(z/5)*.22;a.cylinder([et,.79,St],[et,.94,St],.044,.052,o("#faf3dd"),12),a.cylinder([et,.94,St],[et,.958,St],.055,.055,o("#635442"),12)}a.box(.54,1.02,-.14,.45,.53,.32,o("#3f4443",0,.25,.45)),a.box(.53,1.09,.03,.22,.13,.017,o("#91aaa1",0,.25,.2));for(let z=0;z<3;z++)a.cylinder([.36+z*.11,.79,.16],[.36+z*.11,.98,.16],.028,.028,K.metal,8)}else if(O)for(let z=0;z<3;z++){let et=-.65+z*.65;a.box(et,.79,.28,.56,.11,.4,o("#a98350",5));for(let St=0;St<7;St++)a.sphere(et+M(-.2,.2),.89,.28+M(-.14,.14),M(.065,.09),.045,M(.06,.1),o(["#bd863d","#d2a05d","#a87139"][St%3]),12,7)}else if(B)for(let z=0;z<3;z++){let et=-.62+z*.6;a.box(et,.85,.17,.52,.2,.5,o("#b7915d",5));for(let St=0;St<8;St++){let yt=et+M(-.2,.2),Nt=.17+M(-.17,.17);a.cylinder([yt,.88,Nt],[yt+.11,1.06,Nt+.04],.017,.04,o("#d07731"),8),a.cylinder([yt+.1,1.04,Nt+.04],[yt+.17,1.17,Nt+.02],.008,.01,o("#58703a"),6)}}else if(Q){a.box(-.35,.94,.15,.7,.28,.34,o("#2b363c",0,.45,.25)),a.box(-.42,1.01,.33,.29,.1,.007,o("#a9be92",0,.5,0,.2));for(let z=0;z<3;z++)a.cylinder([-.06+z*.05,.94,.34],[-.06+z*.05,.94,.37],.024,.024,K.metal,10);a.box(.5,.84,.23,.35,.05,.28,o("#373a3c")),a.cylinder([.75,.8,-.13],[.75,2.65,-.13],.012,.012,K.metal,7),a.cylinder([.33,2.4,-.13],[1.14,2.4,-.13],.015,.015,K.metal,7)}else if(S==="F"){for(let z=0;z<3;z++){let et=-.7+z*.65;a.box(et,.8,.22,.54,.09,.36,o("#d1d5c8",0,.25,.45));for(let St=0;St<8;St++){let yt=et+M(-.2,.2),Nt=.22+M(-.12,.12);a.sphere(yt,.855,Nt,.047,.025,.045,o(["#c99352","#dfb476","#724b30"][St%3]),9,5)}}if(f==="F-11"){a.box(.12,.8,-.26,1,.1,.3,K.black);for(let z=0;z<9;z++)a.cylinder([-.3+z*.1,.88,-.49],[-.3+z*.1,.88,.02],.006,.006,o("#d5b878"),5)}}else if(S==="S"){for(let z=0;z<14;z++){let et=-.8+z%7*.25,St=.13+Math.floor(z/7)*.25;a.box(et,.794,St,.17,.015,.16,o("#f8f4e6")),a.sphere(et,.83,St,.055,.032,.055,o(["#aa5c61","#b5aa6c","#558489","#9a804c"][z%4],0,.28,.32),12,7)}if(f==="S-8")for(let z=0;z<9;z++)a.cylinder([-.75+z*.17,.83,-.2],[-.7+z*.17,1.01,-.08],.021,.024,o("#c8af70",5),7)}else for(let z=0;z<3;z++)a.box(-.65+z*.6,.795,.22,.43,.015,.28,o("#faf8ec")),a.box(-.65+z*.6,.82,.2,.35,.012,.21,o(["#bbbaa0","#a6b4bb","#b7ba8d"][z],0,.8))}function nh(a,c=null){let f=c||a.pos,S=a.width||3.02,L=a.depth||2.75,O=a.yaw||0,B=a.id==="S-3"||a.id==="S-9"?"#8393a0":a.id==="F-11"?"#859690":"#f8f7ef",Q=o(U[a.category],6,.92);$.scope(n.compose(f[0],0,f[1],O),()=>{ri($,S,L,o(B,6,.92));for(let Nt of a.id==="F-10"?[-S/2+.035,0,S/2-.035]:[-S/2+.035,S/2-.035])for(let Ht of[-L/2+.035,L/2-.035])$.cylinder([Nt,.03,Ht],[Nt,2.2,Ht],.029,.026,K.metal,8);$.box(0,2.1,L/2,S,.29,.026,Q),$.box(0,2.1,-L/2,S,.29,.025,o(B,6));for(let Nt of[-S/2,S/2])$.box(Nt,2.1,0,.025,.29,L,o(B,6));$.cylinder([-S/2,2.17,-L/2],[S/2,2.17,L/2],.021,.021,K.metal,8),$.cylinder([S/2,2.17,-L/2],[-S/2,2.17,L/2],.021,.021,K.metal,8),(a.category==="F"||a.id==="HQ")&&$.box(0,1.15,-L/2,S,1.87,.015,o("#eeeee5",6,.94))}),y.scope(n.compose(f[0],0,f[1],O),()=>{a.id==="F-10"?(nn(y,-1.5,.4,2.28,.73),nn(y,1.5,.4,2.28,.73),y.scope(n.compose(-1.5,0,0),()=>vs(y,a)),Fe(y,-2.15,-.53,0,"#65746c"),y.box(-.75,.23,-.46,.54,.42,.4,o("#af9270",5))):(nn(y,0,.4,Math.min(S-.45,2.28),.73),vs(y,a),Fe(y,-.65,-.53,0,"#65746c"),y.box(.75,.23,-.46,.54,.42,.4,o("#af9270",5))),a.category==="T"&&y.sign(.56,1.5,-1.25,.95,.98,_[a.id].menu,!0)}),At.scope(n.compose(f[0],0,f[1],O),()=>{Ue(a.id,()=>At.sign(0,2.15,L/2+.03,Math.min(S-.09,2.87),.62,_[a.id].banner)),Ue(a.id,()=>On(At,-S/2+.2,L/2+.4,_[a.id].menu,-.14))});let z=[Math.sin(O),Math.cos(O)],et=[Math.cos(O),-Math.sin(O)],St=f[0]+z[0]*.4,yt=f[1]+z[1]*.4;qt(St,yt,Math.abs(et[0])*(S-.4)+Math.abs(z[0])*.8,Math.abs(et[1])*(S-.4)+Math.abs(z[1])*.8,a.id),a.approach=[f[0]+z[0]*(L/2+3.1),f[1]+z[1]*(L/2+3.1)],a.marker=[f[0]+z[0]*1.4,3.22,f[1]+z[1]*1.4],pt.push(a)}function pl(a,c,f,S,L=1,O=.37){a.cylinder([c,f,S-.09],[c,f,S+.09],O,O,K.tire,22),a.cylinder([c,f,S+L*.094],[c,f,S+L*.114],O*.55,O*.55,K.metal,20);for(let B=0;B<6;B++){let Q=B/6*v;a.cylinder([c+Math.cos(Q)*O*.34,f+Math.sin(Q)*O*.34,S+L*.115],[c+Math.cos(Q)*O*.34,f+Math.sin(Q)*O*.34,S+L*.12],O*.12,O*.12,K.dark,7)}}function gd(a,c){let f=a.pos,S=a.yaw,O=o(["#ede6d3","#c3a875","#eef0df","#657f79","#aa7761","#e2d8c3","#e0cf9e","#6c7a75"][c%8],0,.38,.23),B=$;B.scope(n.compose(f[0],0,f[1],S),()=>{B.box(0,.46,0,3.85,.22,1.7,K.dark),B.box(.42,1.63,0,2.85,2.03,1.82,O),B.box(-1.41,1.2,0,1.06,1.37,1.8,O),B.box(-1.65,.9,0,.88,.38,1.9,O),B.box(-1.44,1.58,0,1.04,.74,1.8,O),B.box(-1.96,1.58,0,.035,.66,1.57,K.glass),B.box(-1.42,1.65,.91,.76,.54,.018,K.glass),B.box(-1.42,1.65,-.91,.76,.54,.018,K.glass),B.box(.46,2.76,0,2.98,.14,1.92,O);for(let $t of[-1.35,1.2])for(let ve of[-.89,.89])pl(B,$t,.4,ve,ve<0?-1:1,.36);B.box(-1.98,.61,0,.1,.19,1.7,o("#b3b8b3",0,.35,.55));for(let $t of[-.61,.61])B.box(-2.04,.93,$t,.034,.2,.37,o("#eee8cf",0,.14,.3,.15));B.box(-2.05,.58,0,.034,.16,.28,o("#decb71")),B.box(.26,2.91,-.17,.53,.17,.44,K.whiteMetal),B.cylinder([1.3,2.8,-.48],[1.3,3,-.48],.11,.11,K.metal,12);for(let $t of[-1.06,1.06])B.cylinder([-1.65,1.61,$t*.83],[-1.65,1.62,$t],.02,.02,K.dark,6),B.box(-1.64,1.64,$t,.1,.19,.05,K.dark)});let Q=a.servingSide==="rear",z=Q?Math.PI/2:a.servingSide==="opposite"?Math.PI:0,et=Q?1.42:2.4,St=Q?1.87:.92,yt=Q?[0,St]:[.46,St],Nt=S+z,Ht=[Math.cos(Nt),-Math.sin(Nt)],he=[Math.sin(Nt),Math.cos(Nt)],me=f[0]+Ht[0]*yt[0]+he[0]*yt[1],fe=f[1]+Ht[1]*yt[0]+he[1]*yt[1];B.scope(n.compose(me,0,fe,Nt),()=>{let $t=et/2;B.box(0,1.79,.006,et,1,.016,K.dark),B.box(0,1.72,.016,et-.13,.81,.009,o("#555e54",0,.7)),B.box(0,1.16,.19,et+.15,.07,.54,K.metal),B.quad([-$t,2.56,.02],[-$t,2.3,1.11],[$t,2.3,1.11],[$t,2.56,.02],o("#f6efdf",6),2,1),B.box(0,2.22,1.1,et+.1,.18,.02,o(U.F,6));for(let ve of[-$t+.08,$t-.08])B.cylinder([ve,1.71,.04],[ve,2.3,1.03],.017,.017,K.metal,6)}),y.scope(n.compose(me,0,fe,Nt),()=>{y.scope(n.compose(-.46,.38,-.92,0),()=>vs(y,a));let $t=o("#78a9b3",0,.86),ve=o("#557780",0,.9);y.box(0,.17,.34,1.03,.34,.5,$t),y.box(0,.085,.68,1.03,.17,.3,$t);for(let[je,Ge]of[[.343,.34],[.173,.68]])y.box(0,je,Ge,.95,.012,.24,ve)}),At.scope(n.compose(me,0,fe,Nt),()=>{Ue(a.id,()=>At.sign(0,2.67,.025,Q?1.57:2.54,.48,_[a.id].banner)),Ue(a.id,()=>On(At,-.86,1.36,_[a.id].menu,.1))});let Vt=[Math.cos(S),-Math.sin(S)],oe=[Math.sin(S),Math.cos(S)];qt(f[0],f[1],Math.abs(Vt[0])*4.03+Math.abs(oe[0])*1.93,Math.abs(Vt[1])*4.03+Math.abs(oe[1])*1.93,a.id);let le=Math.abs(Ht[0])*1.03+Math.abs(he[0])*.74,Oe=Math.abs(Ht[1])*1.03+Math.abs(he[1])*.74;qt(me+he[0]*.46,fe+he[1]*.46,le,Oe,"踏み台 "+a.id),a.approach=[me+he[0]*2.38,fe+he[1]*2.38],a.marker=[me+he[0]*.53,3.42,fe+he[1]*.53],pt.push(a)}let xd=0;for(let a of m.records)a.kind==="tent"?nh(a):a.kind==="truck"&&gd(a,xd++);let _d=m.locations.find(a=>a.id==="HQ");nh(_d);let cr=m.locations.find(a=>a.id==="OUTSTAGE"),ce=cr.pos;$.box(ce[0],.28,ce[1],7.2,.56,1.8,K.wood),qt(ce[0],ce[1],7.2,1.8,"屋外ステージ");for(let a of[-1.8,0,1.8])y.box(ce[0]+a,.563,ce[1],.012,.009,1.8,K.dark);y.box(ce[0],.563,ce[1],7.2,.009,.012,K.dark);for(let a of[-1,1])y.box(ce[0]+a*4.05,.14,ce[1]+.5,.72,.28,.72,K.base),y.cylinder([ce[0]+a*3.9,.04,ce[1]-.4],[ce[0]+a*3.9,3.2,ce[1]-.4],.033,.033,K.metal,7),y.box(ce[0]+a*3.9,2.5,ce[1]-.4,.48,.85,.35,K.black);let qn=ce[1]-1.65,hr=ce[1]-3.75;for(let a of[-1,1])y.cylinder([ce[0]+a*4,.1,qn],[ce[0]+a*4,.12,hr],.035,.035,K.metal,8);y.cylinder([ce[0]-4,.1,qn],[ce[0]+4,.1,qn],.035,.035,K.metal,8);for(let a of[-1,1])y.cylinder([ce[0]+a*4,.1,qn],[ce[0]+a*4,2.1,qn],.035,.035,K.metal,8);y.cylinder([ce[0]-4,2.1,qn],[ce[0]+4,2.1,qn],.035,.035,K.metal,8),y.cylinder([ce[0]-4,.12,hr],[ce[0]+4,.12,hr],.035,.035,K.metal,8),y.quad([ce[0]-4,.12,hr],[ce[0]-4,.1,qn],[ce[0]+4,.1,qn],[ce[0]+4,.12,hr],o("#a7b0a6",11,.75),6,2);let yd=d.add("stage-k-estate",(a,c)=>{a.fillStyle="#f7f7f2",a.fillRect(0,0,c,c),a.fillStyle="#9e3235",a.fillRect(0,0,c,92),a.fillStyle="#fff",a.textAlign="center",a.font="700 24px sans-serif",a.fillText("SHONAN REAL ESTATE",c/2,55),a.fillStyle="#24516b",a.font="700 69px sans-serif",a.fillText("K ESTATE",c/2,255),a.fillStyle="#5c7989",a.font="600 24px sans-serif",a.fillText("K エステート",c/2,315)});for(let a=-1;a<=1;a++){let c=ce[0]+a*2.52,f=2.42;At.quad([c-f/2,2.02,qn+.06],[c-f/2,.13,qn+.06],[c+f/2,.13,qn+.06],[c+f/2,2.02,qn+.06],o("#ffffff",yd,.9,0,.06))}let Ms=ce[0]+5.15,bs=ce[1]+2.6;y.box(Ms,1.5,bs,1.26,.73,.12,K.black),y.box(Ms,1.5,bs+.07,1.22,.69,.025,o("#303c3d",0,.32,.08)),y.cylinder([Ms,.08,bs],[Ms,1.13,bs],.055,.055,K.metal,8),y.box(Ms,.06,bs,.62,.12,.47,K.dark);for(let a of[.2,1.2])nn(y,ce[0]+5.5,ce[1]+a,1.32,.63,0);y.box(ce[0]+5.5,.85,ce[1]+1.2,.56,.18,.39,K.dark);for(let a of[.2,1.2])Fe(y,ce[0]+5.5,ce[1]+a+1,0,"#4a5558");y.cylinder([ce[0]+6.45,.37,ce[1]-1.5],[ce[0]+6.82,.37,ce[1]-1.5],.23,.23,K.dark,12),qt(Ms,bs,1.3,.5,"大型モニター");let zn=[ce[0]-5.8,ce[1]+.4];y.scope(n.compose(zn[0],0,zn[1],0),()=>{ri(y,3,2.8,K.fabric);for(let a of[-1.45,1.45])for(let c of[-1.3,1.3])y.cylinder([a,.04,c],[a,2.15,c],.025,.025,K.metal,7)}),nn(y,zn[0]+.35,zn[1]+.45,1.55,.7,0);for(let a=0;a<15;a++)y.box(zn[0]-1+a%5*.45,.2+Math.floor(a/5)*.4,zn[1]-.7,.41,.38,.48,K.wood);qt(zn[0],zn[1],3,2.8,"屋外ステージのポップアップテント"),y.cylinder([ce[0],.6,ce[1]+.1],[ce[0],1.9,ce[1]+.1],.018,.018,K.black,7),y.cylinder([ce[0],1.9,ce[1]+.1],[ce[0]+.36,2.08,ce[1]+.22],.018,.018,K.black,7),Ue(cr.id,()=>At.sign(ce[0],.34,ce[1]+.914,6.75,.5,_.OUTSTAGE.banner)),cr.approach=[ce[0],ce[1]+3.2],cr.marker=[ce[0],2.1,ce[1]],pt.push(cr);for(let a of m.locations.filter(c=>["MEET","EAT2","WC"].includes(c.id)))a.approach=a.pos,a.marker=[a.pos[0],2.5,a.pos[1]],pt.push(a),a.id==="WC"&&At.scope(n.compose(a.pos[0],0,a.pos[1],0),()=>{At.sign(0,2.4,0,2.2,.53,d.banner("WC","体育館南側・トイレ","当日のトイレ",U.I))});t(.45,"木々・遊具・モビリティ走路を作っています");let In=we.track,Ss=0,ur=[0],ua=In.map((a,c)=>{let f=In[(c-1+In.length)%In.length],S=In[(c+1)%In.length],L=S[0]-f[0],O=S[1]-f[1],B=Math.hypot(L,O);return[-O/B,L/B]});for(let a=0;a<In.length;a++){let c=(a+1)%In.length,f=In[a],S=In[c],L=ua[a],O=ua[c],B=Math.hypot(S[0]-f[0],S[1]-f[1]);if(Ss+=B,ur.push(Ss),$.quad([f[0]-L[0],.055,f[1]-L[1]],[f[0]+L[0],.055,f[1]+L[1]],[S[0]+O[0],.055,S[1]+O[1]],[S[0]-O[0],.055,S[1]-O[1]],o("#bba990",1,.98),2,B),a%8<4)for(let Q of[-1,1])Rn(y,[f[0]+L[0]*.95*Q,f[1]+L[1]*.95*Q],[S[0]+O[0]*.95*Q,S[1]+O[1]*.95*Q],.085,o("#f3e8d0"),.063)}let ih=In.map(([a,c],f)=>[a-ua[f][0]*1.28,c-ua[f][1]*1.28]);function sh(a,c,f=.65,S=!1,L=!1){let O=Math.hypot(c[0]-a[0],c[1]-a[1]),B=Math.max(1,Math.ceil(O/2.2)),Q=S?o("#a48d66",5):o("#dedfd4",0,.45,.35);for(let z=0;z<=B;z++){let et=a[0]+(c[0]-a[0])*z/B,St=a[1]+(c[1]-a[1])*z/B;y.cylinder([et,.05,St],[et,f+.05,St],S?.045:.025,S?.042:.025,Q,7),S||y.box(et,.035,St,.28,.07,.34,K.base)}for(let z of[f*.4,f])y.cylinder([a[0],z,a[1]],[c[0],z,c[1]],S?.036:.021,S?.036:.021,Q,7);L&&y.quad([a[0],.15,a[1]],[a[0],f,a[1]],[c[0],f,c[1]],[c[0],.15,c[1]],o("#a2aa9a",11,.82),O/1.1,f/1.1)}let vd=o("#e1ba22",6,.9),Md=o("#252525",6,.9);function bd(a,c){let f=Math.hypot(c[0]-a[0],c[1]-a[1]),S=Math.max(1,Math.ceil(f/2.2)),L=O=>[a[0]+(c[0]-a[0])*O,a[1]+(c[1]-a[1])*O];for(let O=0;O<=S;O++){let[B,Q]=L(O/S);y.cylinder([B,.02,Q],[B,.72,Q],.008,.008,K.metal,7),y.cylinder([B,.68,Q],[B,.71,Q],.016,.016,K.metal,8)}for(let O=0;O<S;O++)for(let B=0;B<8;B++){let Q=(O+B/8)/S,z=(O+(B+1)/8)/S,et=L(Q),St=L(z),yt=.7-.05*Math.sin(Math.PI*B/8),Nt=.7-.05*Math.sin(Math.PI*(B+1)/8);y.cylinder([et[0],yt,et[1]],[St[0],Nt,St[1]],.012,.012,B%2?Md:vd,6)}}let ml=we.ropeSections.flatMap(a=>a.slice(1).map((c,f)=>[a[f],c]));for(let[a,c]of ml)bd(a,c);let dr=we.boarding.map(({pos:a,distance:c},f)=>{let S=m.locations.find(L=>L.id==="BOARDING_"+(f+1));return S.approach=[a[0]+(f===0?-1.25:.3),a[1]+(f===0?0:2)],S.marker=[a[0],1.75,a[1]],pt.push(S),{position:a,distance:c,rec:S}}),da=m.locations.find(a=>a.id==="MOBILITY");da.approach=[zn[0],zn[1]+2.1],da.marker=[zn[0],2.8,zn[1]],pt.push(da),Ue(da.id,()=>At.sign(zn[0],2.1,zn[1]+1.42,2.85,.65,_.MOBILITY.banner)),On(At,dr[0].position[0]-1.5,dr[0].position[1]+1.6,Y,-.3);let[rh,ah]=we.boardingTent;y.scope(n.compose(rh,0,ah,0),()=>{ri(y,3,3,K.fabric);for(let a of[-1.46,1.46])for(let c of[-1.46,1.46])y.cylinder([a,.03,c],[a,2.2,c],.029,.026,K.metal,8)}),qt(rh,ah,3,3,"乗降場②");function oh(a){let c=(a%Ss+Ss)%Ss,f=0;for(;f<In.length-1&&ur[f+1]<c;)f++;let S=In[f],L=In[(f+1)%In.length],O=(c-ur[f])/(ur[f+1]-ur[f]);return{distance:c,x:S[0]+(L[0]-S[0])*O,z:S[1]+(L[1]-S[1])*O,yaw:Math.atan2(L[0]-S[0],L[1]-S[1])}}let on=new s,gl=new s,fr=o("#d5d8d1",0,.39,.18),lh=o("#91a7a6",0,.21,.55);on.box(0,.46,-.2,1.22,.2,2.3,K.dark),on.box(0,.84,-.94,1.24,.65,.72,fr),on.box(0,1.02,-.74,1.12,.25,.7,o("#465052",0,.75)),on.box(0,.82,.22,1.23,.16,1.18,fr),on.sphere(0,.87,.95,.68,.61,.25,fr,18,10);let Ri=Array.from({length:17},(a,c)=>(c-8)*.07),ws=Array.from({length:9},(a,c)=>c/8),zi=(a,c)=>{let f=Math.abs(a)/.56;return[a,1.22+c*(.69-.1*f*f),1.17-.56*c-.13*f*f]},fa=(a,c)=>{let f=-.2*c*a/.31360000000000005,S=-.26*a/(.56*.56),L=.69-.1*(a/.56)**2,O=[f*-.56-S*L,.56,L],B=Math.hypot(...O);return O.map(Q=>Q/B)};for(let a=0;a<ws.length-1;a++)for(let c=0;c<Ri.length-1;c++){let f=Ri[c],S=Ri[c+1],L=ws[a],O=ws[a+1],B=zi(f,L),Q=zi(f,O),z=zi(S,O),et=zi(S,L),St=fa(f,L),yt=fa(f,O),Nt=fa(S,O),Ht=fa(S,L);gl.tri(Q,B,et,lh,[[0,1],[0,0],[1,0]],[yt,St,Ht]),gl.tri(Q,et,z,lh,[[0,1],[1,0],[1,1]],[yt,Ht,Nt])}let pa=o("#252c2d",0,.68,.12);for(let a of[0,1])for(let c=0;c<Ri.length-1;c++)on.cylinder(zi(Ri[c],a),zi(Ri[c+1],a),.021,.021,pa,7);for(let a of[-.56,.56])for(let c=0;c<ws.length-1;c++)on.cylinder(zi(a,ws[c]),zi(a,ws[c+1]),.024,.024,pa,7);let Ii=(a,c)=>{let f=Math.abs(a)/.56;return[a,1.91-.1*f*f-.03*Math.max(0,-c),c-.13*f*f]};for(let a=0;a<Ri.length-1;a++){let c=Ri[a],f=Ri[a+1];on.quad(Ii(c,.61),Ii(c,-1.12),Ii(f,-1.12),Ii(f,.61),fr),on.cylinder(Ii(c,-1.12),Ii(f,-1.12),.018,.018,pa,7)}for(let a of[-.56,.56])on.cylinder(Ii(a,.61),Ii(a,-1.12),.027,.027,pa,8),on.cylinder([a,.58,-1.07],Ii(a,-1.12),.026,.026,K.metal,8);for(let a of[-.65,.65])on.box(a,.55,-.05,.14,.12,1.65,fr),on.box(a,1.14,-1,.07,.48,.07,K.dark),on.box(a,1.08,.8,.08,.54,.08,K.dark);on.box(0,1.15,-.59,.96,.2,.48,o("#333b3c",0,.75)),on.box(0,1.03,.44,.77,.09,.36,K.dark),on.sphere(0,.99,1.19,.15,.15,.065,K.dark,12,8);for(let a of[-.42,.42])on.box(a,1.02,1.17,.29,.07,.035,o("#f0ebd9",0,.35,.1,.2));for(let a of[-.55,.55])on.scope(n.compose(a,.34,-1.02,Math.PI/2),()=>pl(on,0,0,0,a>0?1:-1,.34));on.scope(n.compose(0,.34,1.2,Math.PI/2),()=>pl(on,0,0,0,1,.34)),on.cylinder([-.4,1.23,.72],[.4,1.23,.72],.025,.025,K.dark,9);for(let a of[-.69,.69])on.cylinder([a,1.33,.8],[a*1.13,1.37,1],.02,.02,K.dark,7),on.box(a*1.13,1.39,1.02,.19,.11,.055,K.dark);let Sd=d.banner("DEMO","電動トライク","車体色は仮表示","#53605b");on.scope(n.compose(.69,0,-.65,Math.PI/2),()=>on.sign(0,.92,0,1.3,.3,Sd));let Ts=m.records.find(a=>a.kind==="goat"),sn=Ts.pos,pr=6.5,mi=6.3,xl=[[sn[0]-pr/2,sn[1]-mi/2],[sn[0]+pr/2,sn[1]-mi/2],[sn[0]+pr/2,sn[1]+mi/2],[sn[0]-pr/2,sn[1]+mi/2]];Ae(xl,$,o("#c7bb89",2,.97),2);for(let a=0;a<4;a++)sh(xl[a],xl[(a+1)%4],1.1,!0);qt(sn[0],sn[1],pr,mi,"ヤギ牧場"),Ts.approach=[sn[0],sn[1]+mi/2+3.1],Ts.marker=[sn[0],2.5,sn[1]+mi/2],pt.push(Ts),Ue(Ts.id,()=>At.sign(sn[0],2.72,sn[1]+mi/2+.06,3.4,.68,_[Ts.id].banner));for(let a of[-1,1])y.cylinder([sn[0]+a*1.6,.05,sn[1]+mi/2],[sn[0]+a*1.6,3.09,sn[1]+mi/2],.05,.05,K.wood,7);y.box(sn[0]-2,.26,sn[1]-1.7,.9,.48,1.4,o("#b6a166",2)),y.cylinder([sn[0]+2,.05,sn[1]-2],[sn[0]+2,.28,sn[1]-2],.35,.38,o("#6b8990",0,.3,.4),18);function wd(){let a=new s,c=o("#e9e4d5",0,.95),f=o("#776654",0,.92);a.sphere(0,.73,0,.3,.29,.54,c,18,10),a.cylinder([0,.85,.3],[0,1.13,.52],.18,.14,c,14),a.sphere(0,1.19,.61,.15,.18,.24,c,16,10),a.sphere(0,1.1,.78,.12,.1,.1,f,12,7);for(let S of[-1,1]){a.sphere(S*.22,1.26,.48,.19,.055,.085,c,12,7),a.sphere(S*.137,1.22,.67,.015,.024,.025,K.black,8,6),a.cylinder([S*.09,1.31,.51],[S*.11,1.48,.38],.039,.021,f,9),a.cylinder([S*.11,1.48,.38],[S*.1,1.55,.27],.021,.009,f,8);for(let L of[-.32,.33])a.cylinder([S*.19,.6,L],[S*.18,.12,L+.03],.046,.03,c,9),a.box(S*.18,.07,L+.05,.09,.1,.14,f)}return a.cylinder([0,.92,-.46],[0,1.06,-.62],.035,.016,c,9),a.cylinder([0,1.08,.77],[0,.92,.72],.045,.01,c,9),a}let rs=m.records.find(a=>a.kind==="baseball");rs.locationSource="配置ゾーニング 9月30日 Ver.7案（1ページ）";let gn=rs.pos;rs.approach=[gn[0]+9,gn[1]+2],rs.marker=[gn[0]+8,2.8,gn[1]+1],pt.push(rs),At.sign(gn[0]+8,1.8,gn[1]+1,4,.82,_[rs.id].banner);for(let a of[-1,1])y.cylinder([gn[0]+8+a*1.9,.08,gn[1]+1],[gn[0]+8+a*1.9,2.3,gn[1]+1],.035,.035,K.metal,7);for(let a of[[-3,-2],[0,-5],[3,-2],[0,1]])y.box(gn[0]+a[0],.052,gn[1]+a[1],.34,.045,.34,o("#e8e2c8"));y.cylinder([gn[0]+4,.08,gn[1]+2],[gn[0]+4.4,.1,gn[1]+3.05],.022,.045,o("#b49566",5),9),y.sphere(gn[0]+4.25,.095,gn[1]+2.2,.074,.074,.074,o("#e9e6dc"),12,8);let Td=d.add("baseball-net",(a,c)=>{a.clearRect(0,0,c,c),a.strokeStyle="#becab2",a.lineWidth=4,a.beginPath();for(let f=0;f<=c;f+=64)a.moveTo(f,0),a.lineTo(f,c),a.moveTo(0,f),a.lineTo(c,f);a.stroke()}),Ed=d.add("baseball-flag",(a,c)=>{a.fillStyle="#672d3d",a.fillRect(0,0,c,c);for(let f=0;f<c;f+=3)a.fillStyle=f%6?"rgba(233,208,172,.035)":"rgba(0,0,0,.055)",a.fillRect(f,0,1,c);a.strokeStyle="#d0b792",a.lineWidth=3,a.strokeRect(9,9,c-18,c-18),a.textAlign="center",a.fillStyle="#f4d990",a.font='700 27px "Yu Gothic",sans-serif',a.fillText("オール西鎌倉少年野球クラブ",c/2,64,475),a.fillStyle="#f5ead8",a.font="bold 170px Georgia,serif",a.fillText("N",c/2,305),a.fillStyle="#df6358",a.font='700 93px "Yu Mincho",serif',a.fillText("必",90,293),a.fillText("勝",424,293),a.strokeStyle="#d1d0ac",a.lineWidth=6;for(let f of[-1,1]){a.beginPath(),a.moveTo(c/2,396),a.quadraticCurveTo(c/2+f*120,357,c/2+f*103,186),a.stroke();for(let S=0;S<10;S++){let L=S/9,O=c/2+f*(22+81*Math.sin(L*Math.PI/2)),B=380-L*181;a.save(),a.translate(O,B),a.rotate(f*(.8+L*.4)),a.fillStyle="#d4d4b5",a.beginPath(),a.ellipse(0,0,5,16,0,0,Math.PI*2),a.fill(),a.restore()}}}),Ad=d.sign("baseball-board",rs.name,"野球体験","#672d3d","T-5");y.scope(n.compose(gn[0],0,gn[1]),()=>{let a=o("#38674d",0,.65,.15),c=o("#476e48",Td,.95),f=o("#eeeadd",0,.97);function S(O,B,Q,z,et=0){y.scope(n.compose(O,0,B,et),()=>{for(let St of[-1,1]){let yt=St*Q/2;y.cylinder([yt,.04,0],[yt,z,0],.029,.029,a,8),y.cylinder([yt,.04,-.65],[yt,.04,.65],.025,.025,a,8),y.cylinder([yt,.05,.6],[yt,1,0],.023,.023,a,8)}y.cylinder([-Q/2,z,0],[Q/2,z,0],.025,.025,a,8),y.quad([-Q/2,.09,0],[-Q/2,z-.02,0],[Q/2,z-.02,0],[Q/2,.09,0],c,Q/.8,z/.8),y.cylinder([-Q/2,.1,0],[Q/2,.1,0],.045,.045,a,8)})}S(3.4,-1.3,4.8,3.3),S(-4,-5.5,2.4,2.5,.35),S(-9,-2,2.4,2.5,-.2),y.sign(2.4,2.22,-1.25,2,1.48,Ed);for(let O of[1.46,3.34])y.cylinder([O,2.98,-1.24],[O,3.28,-1.3],.009,.009,o("#d9d4b4"),6);nn(y,.1,1,1.8,.72,0,!1,!1),Fe(y,-1.15,1.05,.18,"#3e4647"),Fe(y,7.1,-.4,-.35,"#42484d"),y.scope(n.compose(.15,.72,1.05,-.08),()=>y.sign(0,.48,0,.78,.83,Ad,!0)),y.box(-.55,.89,.98,.38,.24,.3,o("#778c87",0,.8));for(let O=0;O<5;O++)y.cylinder([-.7+O*.068,.99,.99],[-.7+O*.068,1.16,.99],.014,.014,o(O%2?"#c6a264":"#edddb0"),6);function L(O,B,Q){for(let z=0;z<48;z++){let et=z/48*v,St=(z+1)/48*v,yt=(Nt,Ht)=>[O+Math.cos(Nt)*Ht,.043,B+Math.sin(Nt)*Ht];y.quad(yt(et,Q-.025),yt(St,Q-.025),yt(St,Q+.025),yt(et,Q+.025),f)}}for(let[O,B,Q]of[[2,5.2,!1],[7.8,5.5,!1],[-3,2.5,!0]]){L(O,B,.66);let z=o(Q?"#388faf":"#e5cc57",0,.9);y.box(O,.035,B,.34,.06,.34,z),y.cylinder([O,.06,B],[O,.62,B],.145,.022,z,12)}for(let O of[3.9,4.65,5.4]){let B=o("#78b3ce",0,.78);y.cylinder([O,.04,3.8],[O,.4,3.8],.21,.16,B,16),y.cylinder([O,.037,3.8],[O,.071,3.8],.225,.222,B,16)}for(let O of[-1.9,6])y.box(O,.044,-3.7,.06,.015,7.2,f);y.box(2.05,.044,-7.3,7.9,.015,.06,f),y.box(2.05,.044,-.1,7.9,.015,.06,f),y.box(3.5,.044,7.1,11.5,.015,.06,f)});let _l=(a,c,f)=>a+f>xt[0]&&a-f<Lt[0]&&c+f>xt[1]&&c-f<Lt[1];function Cd(a,c,f=7,S=!1){let L=P(a,c),O=L[0],B=L[1];if(w(O,B)||Xe(O,B))return;let Q=h(Math.round(a*721+c*91)),z=c>=410&&c<=420?{132:[6.8,.53,!1],152:[6.3,.56,!1],175:[7.6,.26,!0],252:[7.8,.28,!0]}[a]:null;z&&(f=z[0]);let et=y;et.cylinder([O,0,B],[O+.12,f*.57,B-.1],.19,.08,K.bark,11);for(let St=0;St<6;St++){let yt=St*v/6+Q(),Nt=[O,f*.34+Q()*.6,B],Ht=[O+Math.cos(yt)*f*.27,f*(.62+Q()*.17),B+Math.sin(yt)*f*.27];if(!_l((Nt[0]+Ht[0])/2,(Nt[2]+Ht[2])/2,Math.max(Math.abs(Nt[0]-Ht[0]),Math.abs(Nt[2]-Ht[2]))/2+.08)){et.cylinder(Nt,Ht,.073,.026,K.bark,8);for(let he=0;he<3;he++){let me=[Ht[0]+(Q()-.5)*1.4,Ht[1]+Q()*1.05,Ht[2]+(Q()-.5)*1.4];_l((Ht[0]+me[0])/2,(Ht[2]+me[2])/2,Math.max(Math.abs(Ht[0]-me[0]),Math.abs(Ht[2]-me[2]))/2+.03)||et.cylinder(Ht,me,.029,.01,K.bark,7)}}}for(let St=0;St<(z?180:52);St++){let yt=Q()*v,Nt=Math.sqrt(Q())*f*(z?z[1]:.38),Ht=O+Math.cos(yt)*Nt,he=B+Math.sin(yt)*Nt,me=f*(z?.57:.7)+Q()*f*(z?.38:.25)-Nt/f*.8,fe=f*(z?.12+Q()*.09:.19+Q()*.13),Vt=Q()*v,oe=(z?z[2]:S)?K.autumn:K.leaf;_l(Ht,he,fe*.71)||bt.scope(n.compose(Ht,me,he,Vt),()=>{bt.quad([-fe/2,-fe/2,0],[-fe/2,fe/2,0],[fe/2,fe/2,0],[fe/2,-fe/2,0],oe),bt.quad([-fe/2,0,-fe/2],[-fe/2,0,fe/2],[fe/2,0,fe/2],[fe/2,0,-fe/2],oe)})}gt.push({x:O,z:B,r:.26})}[[143,54],[176,48],[207,47],[234,46],[270,45],[301,48],[366,63],[399,73],[431,85],[464,98],[496,116],[532,131],[561,151],[566,206],[566,240],[568,275],[581,361],[582,414],[581,521],[579,566],[568,627],[547,692],[509,719],[480,730],[432,738],[404,742],[371,748],[323,757],[282,759],[243,764],[205,769],[168,773],[130,775],[92,750],[83,712],[75,671],[53,584],[32,527],[38,382],[62,335],[68,159],[132,418],[152,418],[175,413],[252,412],[283,414],[321,415],[348,419],[381,417],[417,418],[420,396]].forEach((a,c)=>Cd(a[0],a[1],M(5.8,8.7),c%3!==0));let ai=ge(1e3,219);for(let a=0;a<6;a++){let c=ai[0]+a*1.5;y.cylinder([c,.03,ai[1]],[c,2.45,ai[1]],.033,.033,o("#287b9c",0,.5,.35),8),y.cylinder([c,2.45,ai[1]],[c,2.45,ai[1]+1.1],.025,.025,K.metal,8),y.cylinder([c,.03,ai[1]+1.1],[c,2.45,ai[1]+1.1],.033,.033,o("#287b9c"),8)}for(let a of[ai[1],ai[1]+1.1])y.cylinder([ai[0],2.45,a],[ai[0]+7.5,2.45,a],.03,.03,K.metal,8);let ma=ge(735,207);for(let a=0;a<4;a++)for(let c=0;c<4;c++){let f=ma[0]+a*.7,S=ma[1]+c*.7;y.cylinder([f,.02,S],[f,2.1,S],.022,.022,o("#287b9c"),7);for(let L=.7;L<2.2;L+=.7)a<3&&y.cylinder([f,L,S],[f+.7,L,S],.02,.02,o("#287b9c"),7),c<3&&y.cylinder([f,L,S],[f,L,S+.7],.02,.02,o("#287b9c"),7)}qt(ma[0]+1.05,ma[1]+1.05,2.3,2.3,"遊具");for(let a=0;a<xe.length;a++){let c=xe[a],f=xe[(a+1)%xe.length];a===15||a===xe.length-1||sh(c,f,1.55,!1,!0)}for(let a of["GATE_MAIN","GATE_WEST"]){let c=m.locations.find(L=>L.id===a),f=c.pos,S=a==="GATE_MAIN"?c.yaw:.7;y.scope(n.compose(f[0],0,f[1],S),()=>{for(let L of[-1,1])y.box(L*2.6,1,0,.52,2,.58,K.wall),y.box(L*2.6,2.03,0,.6,.08,.64,K.base),y.cylinder([L*2.75,.05,.25],[L*2.75,3.35,.25],.036,.036,K.metal,9);if(a==="GATE_MAIN"){let L=o("#586567",0,.54,.35),O=o("#aeb0a7",3,.96);for(let B of[-1,1]){y.box(B*4.4,.47,0,3.05,.94,.58,O),y.box(B*4.4,.96,0,3.13,.08,.68,K.base);for(let Q=.24;Q<=2.64;Q+=.24)y.cylinder([B*2.45,.22,Q],[B*2.45,1.52,Q],.019,.019,L,6);for(let Q of[.23,1.51])y.cylinder([B*2.45,Q,.18],[B*2.45,Q,2.72],.026,.026,L,6)}}y.sign(0,3.12,.25,5.7,.96,H)}),c.approach=a==="GATE_MAIN"?we.mainGateApproach:[-43,-38],c.marker=[f[0],3.75,f[1]],pt.push(c)}{let a=m.locations.find(c=>c.id==="GATE_WEST");y.scope(n.compose(a.pos[0],0,a.pos[1],.7),()=>{y.box(0,.045,1.15,5.05,.09,3.75,o("#b7b5a8",3,.96));for(let c of[-1,1]){y.box(c*3.24,.33,1.25,.52,.66,4.1,o("#a3a59a",3,.98)),y.box(c*3.24,.7,1.25,.61,.085,4.25,o("#c7c9ba",3,.93));for(let f of[-.52,.55,1.62,2.69])y.box(c*3.24,.34,f,.54,.42,.023,o("#898e83",3,.96))}})}let yl=new s,Rd=d.sign("flag",`つながり
フェスタ`,`＠にしかま
2026`,"#366568","");yl.animate([0,0,0],9,()=>yl.quad([.05,2.8,0],[.05,1,0],[.62,1,0],[.62,2.8,0],o("#fff",Rd,.8)));let ch=[];for(let a of[[448,520],[440,611],[543,622],[468,407],[282,378],[130,128],[461,296]]){let c=P(...a);y.cylinder([c[0],.03,c[1]],[c[0],3,c[1]],.016,.014,K.whiteMetal,8),y.box(c[0],.055,c[1],.48,.1,.4,o("#dedfd6")),ch.push({matrix:n.compose(c[0],0,c[1],-.3),info:[M(0,6),0,0,0]})}for(let a of[[465,441],[459,446],[456,452],[458,463],[445,472],[178,166]]){let c=P(...a);y.box(c[0],.035,c[1],.32,.07,.32,o("#b1543e")),y.cylinder([c[0],.06,c[1]],[c[0],.63,c[1]],.125,.022,o("#c7793c"),10),y.cylinder([c[0],.32,c[1]],[c[0],.4,c[1]],.072,.061,o("#e6ddc7"),10)}let Id=o("#efd342",6,.93);for(let[a,c]of we.tapes){let f=c[0]-a[0],S=c[1]-a[1],L=Math.hypot(f,S);y.scope(n.compose((a[0]+c[0])/2,0,(a[1]+c[1])/2,-Math.atan2(S,f)),()=>{for(let O of[-1,1])y.cylinder([O*L/2,.02,0],[O*L/2,.92,0],.016,.016,K.metal,7);y.box(0,.82,0,L,.068,.008,Id)})}let hh=we.coneBars,Pd=o("#d87834",6,.9),vl=o("#f8eee1",6,.93),Ml=o("#c33c2d",6,.92);function Ld(a,c){y.box(a,.045,c,.35,.09,.35,K.dark),y.cylinder([a,.09,c],[a,.67,c],.14,.018,Pd,10),y.cylinder([a,.32,c],[a,.41,c],.095,.075,vl,10)}for(let[a,c]of hh){for(let[f,S]of[a,c])Ld(f,S);for(let f=0;f<8;f++){let S=f/8,L=(f+1)/8;y.cylinder([a[0]+(c[0]-a[0])*S,.78,a[1]+(c[1]-a[1])*S],[a[0]+(c[0]-a[0])*L,.78,a[1]+(c[1]-a[1])*L],.035,.035,f%2?vl:Ml,7)}}for(let a of[[108,62],[452,744]]){let[c,f]=P(...a);y.cylinder([c-.38,.04,f-.38],[c+.38,.04,f+.38],.055,.055,Ml,8),y.cylinder([c-.38,.04,f+.38],[c+.38,.04,f-.38],.055,.055,Ml,8)}Rn(y,P(255,720),P(451,720),.065,vl,.05);let Dd=d.sign("立入禁止","立入禁止","","#b73527",""),Nd=d.sign("駐輪禁止","駐輪禁止","","#b73527","");for(let a of[[56,419],[466,451]]){let[c,f]=P(...a);On(At,c,f,Dd)}for(let a of[[108,62],[452,744]]){let[c,f]=P(...a);On(At,c,f,Nd)}function uh(a,c,f=25){let S=P(a,c),L=7;for(let O=0;O<L;O++){let B=O/L*f,Q=(O+1)/L*f,z=2.4-O/L*1.6,et=2.4-(O+1)/L*1.6;for(let St of[-1,1])for(let yt of[-1,1])y.cylinder([S[0]+St*z,B,S[1]+yt*z],[S[0]+St*et,Q,S[1]+yt*et],.06,.045,K.metal,6),y.cylinder([S[0]+St*z,B,S[1]+yt*z],[S[0]-St*et,Q,S[1]+yt*et],.026,.026,K.metal,6),y.cylinder([S[0]+St*z,B,S[1]+yt*z],[S[0]+St*et,Q,S[1]-yt*et],.026,.026,K.metal,6)}for(let O of[f*.71,f*.87,f]){y.cylinder([S[0]-5,O,S[1]],[S[0]+5,O,S[1]],.065,.065,K.metal,7);for(let B of[-1,1])y.cylinder([S[0]+B*.9,O-1.8,S[1]],[S[0]+B*5,O,S[1]],.04,.04,K.metal,6),y.cylinder([S[0]+B*4.7,O,S[1]],[S[0]+B*4.7,O-1,S[1]],.09,.09,o("#9b9d84"),10)}return qt(S[0],S[1],5,5,"鉄塔"),S}let ga=uh(322,56,26),dh=uh(548,194,26);for(let a of[-4.7,4.7])for(let c of[18.46,22.62,26]){let f=[];for(let S=0;S<=36;S++){let L=S/36;f.push([ga[0]+(dh[0]-ga[0])*L+a,c-1-3.4*Math.sin(L*Math.PI),ga[1]+(dh[1]-ga[1])*L])}y.tube(f,.035,K.dark,5)}let Pi=new s;for(let a=0;a<27;a++){let c=a/27*v,f=125+M(0,35),S=a<9?a<4?-151:-83:a<18?84:-66+(a-18)*16.5,L=a<9?-42+a*17:a<18?-21+(a-9)*17:132,O=M(6,10),B=M(6,11),Q=M(5.2,7.3);Pi.scope(n.compose(0,FestaScenery.height(S,L),0),()=>{Pi.box(S,Q/2,L,O,Q,B,o(["#ddd8c9","#c4ccca","#e6e0d4","#b8b9ac"][a%4],3,.9));let z=o(["#676f70","#8a7163","#5d6966"][a%3],10,.7);Pi.tri([S-O/2-.35,Q,L-B/2-.35],[S+O/2+.35,Q,L-B/2-.35],[S,Q+2,L-B/2-.35],z),Pi.tri([S+O/2+.35,Q,L+B/2+.35],[S-O/2-.35,Q,L+B/2+.35],[S,Q+2,L+B/2+.35],z),Pi.quad([S-O/2-.35,Q,L-B/2-.35],[S-O/2-.35,Q,L+B/2+.35],[S,Q+2,L+B/2+.35],[S,Q+2,L-B/2-.35],z,3,3),Pi.quad([S,Q+2,L-B/2-.35],[S,Q+2,L+B/2+.35],[S+O/2+.35,Q,L+B/2+.35],[S+O/2+.35,Q,L-B/2-.35],z,3,3);for(let et=0;et<3;et++)Pi.box(S+(et-1)*2.1,Q*.62,L+B/2+.02,1.15,1.35,.03,K.glass)})}let Ud=d.banner("WC","にしかまくら子どもの家・トイレ","当日のトイレ","#426861");FestaScenery.build({details:y,green:bt,distant:Pi,signGeo:At,childSign:Ud,p:P,planPoint:ge,onRoad:Xe,gateOpen:w,m:K,mat:o,M:n,rng:h,TAU:v,ga:xt,gb:Lt,gc:G,gw:Et,gd:mt,gymRise:Dt});function Fd(a,c){let f=o("#fafaf8",0,.42,.22),S=o("#25292b",0,.53,.16),L=Mt("#657177");y.scope(n.compose(a,0,c,0),()=>{let O=[[-2.69,.83,.48,1.49],[-2.59,.93,.43,1.52],[-2.35,.94,.43,1.53],[-1.9,.94,.43,1.53],[-1.53,.94,.43,1.53],[-1.16,.94,.43,1.53],[-.7,.94,.43,1.53],[.1,.94,.43,1.53],[.88,.94,.43,1.53],[1.15,.94,.43,1.53],[1.52,.94,.43,1.5],[1.89,.94,.43,1.45],[2.18,.93,.43,1.35],[2.51,.9,.43,1.26],[2.69,.82,.48,1.07]];for(let Q=0;Q<O.length-1;Q++){let[z,et,St,yt]=O[Q],[Nt,Ht,he,me]=O[Q+1];y.quad([-et,yt,z],[et,yt,z],[Ht,me,Nt],[-Ht,me,Nt],f);for(let fe of[-1,1]){let Vt=(oe,le)=>Math.max(oe,.32+Math.sqrt(Math.max(0,.2025-Math.min((le+1.53)**2,(le-1.52)**2))));for(let oe=0;oe<6;oe++){let le=oe/6,Oe=(oe+1)/6,$t=Ge=>[fe*(et+(Ht-et)*Ge),z+(Nt-z)*Ge],ve=$t(le),je=$t(Oe);y.quad([ve[0],yt+(me-yt)*le,ve[1]],[je[0],yt+(me-yt)*Oe,je[1]],[je[0],Vt(St+(he-St)*Oe,je[1]),je[1]],[ve[0],Vt(St+(he-St)*le,ve[1]),ve[1]],f)}}}let B=[[-2.62,.89,1.49],[-2.46,.84,2.17],[-2.27,.79,2.28],[1.23,.79,2.28],[1.53,.8,2.16],[2.48,.87,1.26]];for(let Q=1;Q<5;Q++){let[z,et,St]=B[Q-1],[yt,Nt,Ht]=B[Q];y.quad([-et,St,z],[et,St,z],[Nt,Ht,yt],[-Nt,Ht,yt],f)}y.quad([-.87,1.26,2.48],[.87,1.26,2.48],[.8,2.16,1.53],[-.8,2.16,1.53],f),y.quad([-.78,1.45,2.327],[.78,1.45,2.327],[.735,2.075,1.662],[-.735,2.075,1.662],L),y.quad([-.82,.48,2.69],[.82,.48,2.69],[.82,1.07,2.69],[-.82,1.07,2.69],f),y.quad([-.83,.48,-2.69],[.83,.48,-2.69],[.83,1.49,-2.69],[-.83,1.49,-2.69],f),y.quad([-.89,1.49,-2.62],[.89,1.49,-2.62],[.84,2.17,-2.46],[-.84,2.17,-2.46],f),y.quad([-.7,1.61,-2.6],[.7,1.61,-2.6],[.7,2.03,-2.51],[-.7,2.03,-2.51],L);for(let Q of[-1,1]){let z=(et,St,yt)=>[Q*et,St,yt];y.quad(z(.91,1.49,-2.62),z(.91,1.51,2.37),z(.8,2.16,1.53),z(.84,2.17,-2.46),f),y.quad(z(.901,1.62,-2.37),z(.901,1.62,.42),z(.831,2.06,.39),z(.854,2.06,-2.31),L),y.quad(z(.907,1.6,.58),z(.915,1.54,2.09),z(.82,2.05,1.49),z(.833,2.05,.64),L);for(let et of[-1.4,-.38])y.box(Q*.884,1.84,et,.018,.41,.045,S);for(let et of[-1.3,.69])y.box(Q*.948,1.38,et,.022,.059,.19,S);y.box(Q*.947,1.22,-1.1,.018,.021,1.8,o("#abb1b0")),y.cylinder(z(.9,1.57,1.77),z(1.02,1.57,1.77),.024,.024,S,8),y.box(Q*1.06,1.6,1.75,.14,.16,.23,S),y.box(Q*.71,.92,2.704,.27,.24,.029,K.whiteMetal),y.box(Q*.81,1.32,-2.655,.105,.43,.028,o("#a9372c"));for(let et of[-1.53,1.52]){y.cylinder(z(.7,.35,et),z(.935,.35,et),.35,.35,K.tire,24),y.cylinder(z(.937,.35,et),z(.951,.35,et),.19,.19,K.metal,20);for(let St=0;St<6;St++){let yt=St*v/6;y.cylinder(z(.953,.35,et),z(.953,.35+.16*Math.sin(yt),et+.16*Math.cos(yt)),.024,.024,K.whiteMetal,6)}}}y.box(0,.76,2.707,.95,.15,.025,S),y.box(0,.58,2.71,1.45,.1,.025,S),y.box(0,1.11,2.62,.96,.035,.035,K.metal),y.box(0,.5,-2.685,1.65,.14,.027,f),y.box(0,1.14,-2.663,.49,.19,.028,K.whiteMetal)}),qt(a,c,1.88,5.38,"駐車車両")}function Od(a,c,f,S){let L=S%3,O=1.72,B=4.35,Q=L===0?1.42:1.94,z=o(["#e8e6e1","#7a8994","#c1c4c6","#4a5155","#a49182"][S%5],0,.4,.22);y.scope(n.compose(a,0,c,f),()=>{y.box(0,.6,0,O,.66,B,z),y.box(0,(.9+Q)/2,L===0?-.28:0,O*.92,Q-.9,L===0?B*.55:B*.92,z);for(let et of[-1,1]){for(let St of[-1,1]){let yt=St*B*.31,Nt=et*O*.42;y.cylinder([Nt-.1,.31,yt],[Nt+.1,.31,yt],.31,.31,K.tire,16),y.box(et*O*.36,.69,St*(B/2+.006),.22,.14,.018,St>0?K.whiteMetal:o("#a6463a"))}y.box(et*O*.464,Q-.27,.46,.022,.35,B*.28,K.dark),L!==1&&y.box(et*O*.464,Q-.27,-.64,.022,.35,B*.25,K.dark)}y.box(0,Q-.28,L===0?B*.21:B*.465,O*.77,.39,.026,K.dark)}),qt(a,c,Math.abs(Math.cos(f))*O+Math.abs(Math.sin(f))*B,Math.abs(Math.sin(f))*O+Math.abs(Math.cos(f))*B,"駐車車両")}we.parking.forEach((a,c)=>a.forEach(([f,S],L)=>Od(f,S,c<2?0:Math.PI/2,L+c)));for(let[a,c,f]of[[360,850,1921],[309,680,1972],[310,703,2022]])for(let S=a+8,L=0;S<c-8;S+=20,L++){let[O,B]=ge(S,f);y.scope(n.compose(O,0,B,(L%3-1)*.1),()=>{let Q=o(["#454c53","#708e81","#a76855","#b4b9bb"][L%4]);for(let z of[-.56,.56])for(let et=0;et<12;et++){let St=et*v/12,yt=(et+1)*v/12;y.cylinder([0,.31+.3*Math.cos(St),z+.3*Math.sin(St)],[0,.31+.3*Math.cos(yt),z+.3*Math.sin(yt)],.019,.019,K.tire,6)}for(let[z,et]of[[[0,.31,-.56],[0,.81,-.24]],[[0,.81,-.24],[0,.68,.38]],[[0,.68,.38],[0,.38,-.05]],[[0,.38,-.05],[0,.31,-.56]],[[0,.38,-.05],[0,.81,-.24]],[[0,.31,.56],[0,.97,.37]]])y.cylinder(z,et,.023,.023,Q,6);y.box(0,.84,-.26,.16,.045,.25,K.dark),y.cylinder([-.24,.98,.37],[.24,.98,.37],.019,.019,K.metal,6)})}for(let a of["TERESA","TRACTOR","EXCAVATOR","PLAYGROUND"]){let c=m.locations.find(L=>L.id===a),[f,S]=c.pos;c.approach=[f,S+2.6],c.marker=[f,a==="TERESA"?2.7:2.3,S],pt.push(c),a==="TERESA"&&Fd(f,S),(a==="TRACTOR"||a==="EXCAVATOR")&&y.scope(n.compose(f,0,S,.3),()=>{let L=a==="TRACTOR",O=o(L?"#427346":"#d6aa35");y.box(0,.67,0,1.4,.56,2.42,O),y.box(0,1.52,-.38,1.22,1.06,1.16,K.dark),y.box(0,2.12,-.38,1.38,.16,1.31,O);for(let B of[-1,1])if(L)for(let[Q,z]of[[-.73,.61],[.83,.37]])y.cylinder([B*.64,z,Q],[B*.97,z,Q],z,z,K.tire,18);else y.box(B*.66,.32,0,.43,.6,2.52,K.tire);L?y.box(0,1.02,.66,1.03,.65,1.35,O):(y.cylinder([0,1.02,.42],[0,2.38,1.15],.12,.12,O,8),y.cylinder([0,2.38,1.15],[0,.45,2.08],.11,.1,O,8),y.box(0,.31,2.18,.77,.44,.52,O)),qt(f,S,2.1,L?3.3:4,"車両")})}let Es=m.locations.find(a=>a.id==="OUTDOOR_GAMES"),[mr,gr]=Es.pos,xr=new s,bl=new s,fh=new s,Sl=[];{let[a,c]=Es.pos,f=o("#c1ab88",1,.94),S=o("#f2ebd8"),L=o("#d9ac30",0,.92),O=o("#b9cbd0",0,.33,.22),B=o("#3a6c79"),Q=o("#a94e38",0,.62);y.scope(n.compose(a,0,c,0),()=>{y.box(-1.55,.064,0,1.72,.036,5,f),y.box(-1.55,.086,2.2,1.62,.01,.06,S),xr.cylinder([0,0,0],[0,.198,0],.064,.062,O,12),xr.cylinder([0,.198,0],[0,.245,0],.062,.026,O,12),xr.cylinder([0,.245,0],[0,.273,0],.029,.029,B,12),xr.cylinder([0,.06,0],[0,.127,0],.066,.066,B,12);for(let le=0;le<3;le++)for(let Oe=0;Oe<=le;Oe++)Sl.push({x:-1.55+(Oe-le/2)*.24,z:-1.65-le*.23,row:le});bl.sphere(0,0,0,.133,.133,.133,Q,18,10),bl.cylinder([-.006,0,0],[.006,0,0],.134,.134,S,18,!1);let Ht=1.45,he=-2.6,me=.4,fe=14,Vt=6;for(let le=0;le<fe;le++){let Oe=he+le*me;oe(Ht,Oe,le===0||le===fe-1?"dots":"north-south")}for(let le=1;le<Vt;le++)oe(Ht+le*me,he,le===Vt-1?"dots":"east-west");function oe(le,Oe,$t){if(y.box(le,.066,Oe,.392,.026,.392,L),$t==="dots"){for(let je of[-.12,0,.12])for(let Ge of[-.12,0,.12])y.sphere(le+je,.082,Oe+Ge,.027,.012,.027,L,8,5);return}let ve=$t==="east-west";for(let je of[-.115,0,.115])y.box(le+(ve?0:je),.083,Oe+(ve?je:0),ve?.33:.035,.015,ve?.035:.33,L)}});let z=fh,et=o("#4c6670",6,.93),St=o("#4a5356",6,.92),yt=o("#cba584"),Nt=o("#383733");z.sphere(0,1.24,0,.211,.267,.107,et,16,12),z.sphere(0,1.62,.02,.108,.131,.095,yt,16,12),z.sphere(0,1.677,-.02,.112,.09,.104,Nt,16,10);for(let Ht of[-1,1]){let he=Ht*.105;z.animate([he,1.03,0],Ht*2,()=>{z.cylinder([he,1.03,0],[he,.5,0],.08,.065,St,10),z.cylinder([he,.5,0],[he,.13,.015],.065,.048,St,10),z.box(he,.076,.055,.119,.075,.222,K.dark)})}z.cylinder([.16,1.4,0],[.23,1.13,.03],.051,.042,et,10),z.cylinder([.23,1.13,.03],[.19,1.055,.33],.042,.03,yt,10),z.animate([-.15,1.39,-.01],-1,()=>z.cylinder([-.15,1.39,-.01],[-.21,1.01,-.08],.049,.03,et,10)),z.sphere(.19,1.055,.33,.039,.041,.038,yt,10,7),z.cylinder([.19,1.08,.33],[-.14,.056,1.12],.016,.012,K.whiteMetal,10),z.cylinder([-.08,.25,.98],[-.14,.056,1.12],.014,.014,Q,10),Ue(Es.id,()=>On(At,a,c+2.94,_.OUTDOOR_GAMES.menu,0)),Es.approach=[a,c+4.15],Es.marker=[a,2.15,c+2.8],pt.push(Es)}{let[a,c]=_e.pos;y.scope(n.compose(a,0,c,Math.PI/2),()=>{let f=o("#a8afac",0,.66);y.box(0,1.06,.01,1.44,2.11,.13,f),y.box(0,1.05,.09,1.27,2.02,.06,o("#c0c9c4",0,.75)),y.box(.4,1,.145,.037,.16,.06,K.dark),y.box(0,.047,.24,1.56,.09,.47,K.base)}),At.scope(n.compose(a,0,c,Math.PI/2),()=>{Ue(_e.id,()=>At.sign(0,2.4,.16,1.91,.52,_.WC_ART.banner))}),_e.approach=[a+3.5,c],_e.marker=[a+.22,2.98,c],pt.push(_e)}let ph=o("#b73428",0,.64),Bd=o("#eae6d7");for(let[a,c]of we.fireExtinguishers)y.box(a,.038,c,.28,.075,.27,o("#824436",0,.9)),y.cylinder([a,.071,c],[a,.43,c],.088,.088,ph,14),y.cylinder([a,.43,c],[a,.485,c],.088,.042,ph,14),y.box(a,.51,c,.13,.031,.053,K.dark),y.box(a,.27,c+.086,.108,.106,.009,Bd),y.cylinder([a+.025,.486,c],[a+.12,.39,c],.012,.012,K.dark,9),y.cylinder([a+.12,.39,c],[a+.1,.2,c+.034],.012,.012,K.dark,9),qt(a,c,.28,.27,"消火器");function oi(a,c,f=.26){if(!Ie(a,c,xe)||Ie(a,c,ct)||Ie(a,c,ih)||ml.some(([S,L])=>tt(a,c,S,L)<f))return!1;for(let S of Ne){let L=Math.max(Math.abs(a-S.x)-S.w/2,0),O=Math.max(Math.abs(c-S.z)-S.d/2,0);if(L*L+O*O<f*f)return!1}for(let S of gt)if(Math.hypot(a-S.x,c-S.z)<f+S.r)return!1;return!0}function xa(a,c){return a>=xt[0]+.05&&a<=Lt[0]-.15&&c>=xt[1]+.05&&c<=Lt[1]-.05?Dt:a>=xt[0]-1.65&&a<xt[0]+.05&&V.some(([f,S])=>c>=P(jt,f)[1]+.15&&c<=P(jt,S)[1]-.15)?Dt*p((a-xt[0]+1.65)/1.7,0,1):0}function As(a,c=10){if(oi(a[0],a[1],.31))return[...a];for(let f=.4;f<=c;f+=.35)for(let S=0;S<32;S++){let L=S*v/32,O=a[0]+Math.sin(L)*f,B=a[1]+Math.cos(L)*f;if(oi(O,B,.31))return[O,B]}return null}let wl=m.locations.find(a=>a.id==="GYM");wl.approach=[G[0],xt[1]+18.8],wl.marker=[G[0],3.1+Dt,xt[1]+18.8],pt.push(wl);for(let a of pt)a.id==="WC"&&(a.approach=[(ut+Ft)/2,Lt[1]+5.5]),a.approach=As(a.approach)||As(a.pos);t(.62,"来場者・ヤギ・走行車両の動きを準備しています");function Tl(a=0,c=!1){let f=new s,S=o(c?"#233750":["#7f9c9a","#d8c5ad","#a76250","#4c6670","#787c58","#b7b4a9","#655c73","#e3d1b1"][a%8],6,.93),L=o(c?"#233750":["#41494e","#746854","#4a575a","#485669"][a%4],6,.91),O=o(["#cba584","#d8b69a","#bc9879","#d0ad8c"][a%4],0,.78),B=o(["#383733","#4b4137","#77756e"][a%3],0,.96),Q=[[.88,.19,.126],[.98,.19,.13],[1.16,.218,.148],[1.32,.243,.144],[1.385,.222,.127],[1.445,.075,.064]];for(let z=0;z<Q.length-1;z++)for(let et=0;et<20;et++){let St=et/20*v,yt=(et+1)/20*v,Nt=Q[z],Ht=Q[z+1],he=(me,fe)=>[Math.cos(fe)*me[1],me[0],Math.sin(fe)*me[2]];f.quad(he(Nt,St),he(Ht,St),he(Ht,yt),he(Nt,yt),S,1,1)}f.cylinder([0,1.4,0],[0,1.49,0],.061,.062,O,10),f.sphere(0,1.57,.012,.114,.142,.107,O,16,11),f.sphere(0,1.575,-.009,.116,.145,.11,B,20,10,0,1.26),f.sphere(0,1.58,.127,.017,.032,.024,O,10,7);for(let z of[-1,1])f.sphere(z*.111,1.57,.008,.024,.042,.026,O,9,7),f.sphere(z*.039,1.601,.111,.009,.004,.005,K.black,8,5),f.cylinder([z*.026,1.621,.104],[z*.053,1.621,.098],.004,.004,B,5),f.animate([z*.23,1.37,0],z,()=>{f.sphere(z*.235,1.335,0,.082,.105,.085,S,12,9),f.sphere(z*.295,1.08,.035,.064,.073,.064,S,12,8),f.cylinder([z*.23,1.37,0],[z*.295,1.08,.035],.079,.064,S,12),f.cylinder([z*.295,1.08,.035],[z*.29,.9,.06],.063,.045,S,11),f.sphere(z*.287,.859,.065,.043,.067,.038,O,11,7)}),f.animate([z*.108,.88,0],z*2,()=>{f.cylinder([z*.105,.9,0],[z*.12,.49,.015],.098,.077,L,12),f.cylinder([z*.12,.49,.015],[z*.12,.1,0],.077,.06,L,11),f.sphere(z*.12,.077,.052,.075,.068,.146,o("#383d3c",0,.75),12,7),f.box(z*.12,.034,.054,.142,.035,.25,o("#c1beb1"))});if(!c&&a%3===0&&(f.sphere(0,1.7,-.006,.126,.045,.126,o("#b4a481",6),14,8),f.box(0,1.676,.125,.18,.018,.14,o("#b4a481",6))),!c&&a%4===1){f.sphere(0,1.17,-.16,.16,.23,.1,o("#73664e",6),13,9);for(let z of[-1,1])f.cylinder([z*.16,1.36,.04],[z*.12,1.03,.09],.017,.017,o("#756b58"),7)}return!c&&a%4===2&&(f.cylinder([.29,.91,.06],[.32,.66,.06],.01,.01,o("#aa9675"),7),f.box(.32,.57,.06,.19,.24,.22,o("#d3c2a1",6))),f}let mh=[],kd=d.add("鎌倉ガーディアンズ",(a,c)=>{a.clearRect(0,0,c,c),a.fillStyle="#e8c843",a.font="bold 54px sans-serif",a.textAlign="center",a.fillText("鎌倉ガーディアンズ",c/2,c*.58)});for(let a=0;a<dr.length;a++){let[c,f]=dr[a].position,S=a===0?Math.PI/2:-Math.PI/2,L=Tl(1,!0);L.scope(n.compose(0,0,0,Math.PI),()=>L.sign(0,1.25,.15,.35,.12,kd,!0)),mh.push({staff:L,instances:[{matrix:n.compose(c+(a===0?-1:-.1),0,f+1.35,S),info:[0,0,0,0]}]})}function zd(a){let c=Tl(a),f=new s;for(let L=0;L<c.used;L+=60)if(!(Math.abs(c.data[L+19])>1.5&&Math.abs(c.data[L+19])<3))for(let O=0;O<3;O++){let B=L+O*20,Q={color:Array.from(c.data.slice(B+8,B+11)),p:Array.from(c.data.slice(B+12,B+16)),ao:c.data[B+11]};f.vertex([c.data[B],c.data[B+1]-.4,c.data[B+2]],Array.from(c.data.slice(B+3,B+6)),Array.from(c.data.slice(B+6,B+8)),Q)}let S=o(["#41494e","#746854","#4a575a","#485669"][a%4],6,.9);for(let L of[-1,1])f.cylinder([L*.105,.49,0],[L*.12,.46,.35],.1,.08,S,12),f.sphere(L*.12,.46,.35,.078,.084,.085,S,12,8),f.cylinder([L*.12,.46,.35],[L*.12,.105,.39],.078,.058,S,12),f.sphere(L*.12,.078,.45,.073,.06,.145,o("#383d3c"),12,8),f.box(L*.12,.035,.45,.14,.035,.25,o("#b8b9ad"));return f}function Vd(a){let c=new s,f=o(["#dfb357","#72a0a2","#aa6357","#8c9a66"][a%4],6,.92),S=o("#506277",6,.91),L=o("#d4ad8b",0,.77),O=o("#3d342e",0,.94);c.sphere(0,.83,0,.2,.3,.145,f,14,10),c.cylinder([0,1.04,0],[0,1.17,0],.065,.06,L,10),c.sphere(0,1.34,0,.165,.19,.15,L,16,11),c.sphere(0,1.4,-.015,.17,.145,.153,O,16,9,0,1.35);for(let B of[-1,1])c.sphere(B*.06,1.36,.141,.01,.008,.008,K.dark,8,5),c.animate([B*.19,1.04,0],B,()=>{c.cylinder([B*.19,1.02,0],[B*.27,.65,.025],.067,.045,f,10),c.sphere(B*.27,.62,.03,.048,.06,.044,L,10,7)}),c.animate([B*.09,.58,0],B*2,()=>{c.cylinder([B*.09,.58,0],[B*.11,.25,0],.079,.062,S,10),c.cylinder([B*.11,.25,0],[B*.11,.09,.025],.06,.05,S,10),c.sphere(B*.11,.055,.085,.072,.052,.115,K.dark,10,7)});return c}function Gd(){let a=new s,c=o("#f7f6f1",6,.96),f=o("#eeb5bf",0,.84),S=o("#252629",0,.74),L=o("#d3343f",6,.82),O=o("#a4cfe2",6,.88),B=o("#80acc0",6,.88),Q=o("#83b8a5",6,.82),z=o("#e3c538",6,.82);a.sphere(0,.75,-.02,.54,.63,.41,c,32,22),a.sphere(0,1.18,-.01,.44,.3,.36,c,28,16);for(let Vt of[-1,1]){a.animate([Vt*.27,.22,.13],Vt,()=>{a.sphere(Vt*.27,.145,.13,.205,.145,.27,c,22,13);for(let ve=-1;ve<=1;ve++)a.sphere(Vt*.27+ve*.1,.095,.34,.06,.045,.085,c,11,8)});let oe=Vt===-1,le=[Vt*.43,1.12,-.04],Oe=[Vt*.54,oe?1.1:.96,.075],$t=[Vt*.64,oe?1.1:.83,oe?.25:.18];if(a.sphere(...le,.19,.21,.18,c,18,12),a.cylinder(le,Oe,.145,.13,c,16),a.cylinder(Oe,$t,.13,.12,c,16),a.sphere(...$t,.15,.15,.14,c,18,12),oe){a.sphere($t[0],$t[1]-.015,$t[2]+.134,.052,.06,.014,f,12,9);for(let ve=-1;ve<=1;ve++)a.sphere($t[0]+ve*.047,$t[1]+.074,$t[2]+.115,.02,.027,.009,f,9,7)}}let et=[[-.36,.48,-.3],[-.53,.41,-.43],[-.7,.44,-.49],[-.83,.55,-.5],[-.9,.71,-.47],[-.86,.79,-.43]];for(let Vt=1;Vt<et.length;Vt++){let oe=.091-Vt*.005;a.cylinder(et[Vt-1],et[Vt],oe+.006,oe,c,14),a.sphere(...et[Vt],oe,oe,oe,c,14,10)}a.sphere(0,1.67,.055,.7,.55,.51,c,36,24);let St=(Vt,oe)=>[(Vt[0]-550)*.00445,2.2+(667-Vt[1])*.00445,oe],yt=(Vt,oe,le,Oe)=>Array.from({length:8},($t,ve)=>{let je=(ve+1)/8,Ge=1-je;return[0,1].map(mn=>Ge*Ge*Ge*Vt[mn]+3*Ge*Ge*je*oe[mn]+3*Ge*je*je*le[mn]+je*je*je*Oe[mn])}),Nt=(Vt,oe,le)=>Array.from({length:5},(Oe,$t)=>{let ve=($t+1)/5,je=1-ve;return[0,1].map(Ge=>je*je*Vt[Ge]+2*je*ve*oe[Ge]+ve*ve*le[Ge])}),Ht=[[[508,674],...yt([508,674],[481,643],[444,624],[408,633]),[390,640],...Nt([390,640],[385,645],[387,653]),...yt([387,653],[389,675],[402,702],[416,721])],[[594,674],...yt([594,674],[619,656],[660,645],[690,659]),[712,672],...Nt([712,672],[718,678],[714,685]),...yt([714,685],[708,701],[683,734],[671,743])]],he=[[[444,661],...yt([444,661],[456,661],[467,670],[469,680]),...yt([469,680],[472,691],[469,701],[463,708]),[430,706],...Nt([430,706],[419,696],[421,684]),...yt([421,684],[423,673],[433,663],[444,661])],[[650,677],...yt([650,677],[663,678],[672,690],[672,702]),...yt([672,702],[672,712],[665,722],[658,727]),[629,705],...Nt([629,705],[623,694],[631,685]),...yt([631,685],[638,679],[643,677],[650,677])]];function me(Vt,oe,le,Oe=!1){let $t=Vt.map(Ge=>St(Ge,oe)),ve=[$t.reduce((Ge,mn)=>Ge+mn[0],0)/$t.length,$t.reduce((Ge,mn)=>Ge+mn[1],0)/$t.length,oe],je=$t.reduce((Ge,mn,gi)=>Ge+mn[0]*$t[(gi+1)%$t.length][1]-$t[(gi+1)%$t.length][0]*mn[1],0);for(let Ge=0;Ge<$t.length;Ge++){let mn=(Ge+1)%$t.length;je>0!==Oe?a.tri(ve,$t[Ge],$t[mn],le):a.tri(ve,$t[mn],$t[Ge],le)}return $t}for(let Vt of[-1,1]){let oe=Ht[Vt<0?0:1],le=me(oe,.135,c),Oe=me(oe,.065,c,!0);for(let $t=0;$t<oe.length;$t++){let ve=($t+1)%oe.length;a.quad(le[$t],Oe[$t],Oe[ve],le[ve],c)}me(he[Vt<0?0:1],.142,f),a.sphere(Vt*.245,1.78,.526,.096,.099,.027,S,20,14),a.sphere(Vt*.225,1.815,.553,.027,.034,.01,c,10,8),a.sphere(Vt*.274,1.747,.552,.012,.014,.008,c,8,6),a.tube([[Vt*.15,1.967,.477],[Vt*.22,2.005,.471],[Vt*.3,1.979,.458]],.011,S,8),a.tube([[Vt*.16,2.055,.455],[Vt*.21,2.069,.448]],.009,S,7);for(let $t=-1;$t<=1;$t++){let ve=1.57+$t*.08;a.tube([[Vt*.49,ve,.432],[Vt*.64,ve+$t*.018,.393],[Vt*.8,ve+$t*.033,.338]],.008,S,7)}}a.sphere(0,1.585,.567,.053,.033,.023,f,14,10);for(let Vt of[-1,1]){let oe=[];for(let le=0;le<=10;le++){let Oe=le/10;oe.push([Vt*.19*Oe,1.515-.068*Math.sin(Math.PI*Oe),.57-.044*Oe])}a.tube(oe,.011,S,8)}let fe=[];for(let Vt=0;Vt<=28;Vt++){let oe=Vt/28*Math.PI*2;fe.push([Math.sin(oe)*.445,1.205,Math.cos(oe)*.351-.01])}a.tube(fe,.029,L,9),a.sphere(0,1.17,.367,.056,.044,.025,o("#d9d4ce",0,.9),13,8),a.sphere(-.01,1.125,.413,.21,.055,.064,c,20,12),a.sphere(-.165,1.135,.458,.026,.026,.021,c,12,8),a.tri([.18,1.12,.437],[.3,1.18,.423],[.26,1.08,.424],c),a.sphere(-.17,1.143,.48,.01,.01,.008,S,8,6);for(let Vt=0;Vt<5;Vt++)a.sphere(-.1+Vt*.05,1.104,.476,.007,.007,.006,S,7,5);a.tube([[-.37,1.14,.288],[-.33,1,.366],[-.23,.84,.396],[-.1,.68,.42],[.08,.55,.445],[.24,.51,.457]],.024,z,9),a.sphere(.28,.555,.415,.285,.297,.15,B,24,16),a.sphere(.28,.565,.532,.251,.259,.047,O,24,16);for(let Vt=0;Vt<3;Vt++)for(let oe=0;oe<6-Vt;oe++){let le=.083+oe*.078+Vt*.04,Oe=.828+Vt*.058,$t=.51-Vt*.02;a.sphere(le,Oe,$t,.046,.046,.044,Q,11,8)}for(let Vt of[-1,1])a.sphere(.28+Vt*.078,.603,.582,.015,.019,.01,S,9,7),a.sphere(.28+Vt*.078,.475,.575,.01,.013,.008,S,8,6);return a.tube([[.21,.53,.577],[.25,.504,.581],[.28,.5,.582],[.32,.515,.58],[.35,.538,.575]],.009,S,8),a}let gh=Array.from({length:8},()=>[]),xh=Array.from({length:4},()=>[]),as=[],Hd=0;function Vi(a,c,f=0,S=!1,L=1,O=null,B="visitor"){let Q=Hd++,z=B==="child"||B==="game-child",et=Q%(z?4:8),St={matrix:n.compose(a,0,c,f,L),info:[M(0,6.28),S?1:0,0,0]},yt={x:a,z:c,yaw:f,scale:L,instance:St,walk:S,path:O,pathIndex:0,speed:M(.4,.64),group:et,type:B,index:Q};return(z?xh:gh)[et].push(St),as.push(yt),yt}let Wd=["T-15","TRACTOR","EXCAVATOR","BOARDING_1","BOARDING_2"];for(let a of Wd){let c=m.records.find(B=>B.id===a)||m.locations.find(B=>B.id===a),[f,S]=c.pos,[L,O]=c.approach;for(let[B,Q]of[[-.85,0],[.85,0],[-.5,.95],[.55,1.15]]){let z=As([L+B,O+Q],1.8);z&&Vi(z[0],z[1],Math.atan2(f-z[0],S-z[1]),!1,1,null,"gathering")}}for(let a of[-1,1])for(let c of[-1.05,0,1.05]){let f=a===-1?xt[0]+1.95:Lt[0]-1.95,S=we.exhibitsZ+c;oi(f,S)&&Vi(f,S,a*Math.PI/2,!1,1,null,"gathering")}for(let[a,c]of pt.filter(f=>["F","S","T"].includes(f.category)&&f.approach).entries()){let f=c.yaw||0,S=a%3?-1:1,L=c.approach,O=L[0]-Math.sin(f)*1.05+Math.cos(f)*.95*S,B=L[1]-Math.cos(f)*1.05-Math.sin(f)*.95*S;oi(O,B,.2)&&Vi(O,B,Math.atan2(c.pos[0]-O,c.pos[1]-B),!1,M(.88,1.04))}for(let a of m.records.filter(c=>c.kind==="tent")){let c=a.yaw||0,f=a.id==="F-10"?-1.5:0;Vi(a.pos[0]+Math.cos(c)*f-Math.sin(c)*.52,a.pos[1]-Math.sin(c)*f-Math.cos(c)*.52,c,!1,.93,null,"vendor")}let El=[[[0,10],[2,9],[2,-11],[20,-12],[26,-12],[26,-2],[26,12],[16,12],[0,10]],[[27,47],[29,54],[29,63],[31,68],[31,75],[28,77],[28,70],[29,60],[27,47]],[[-41,13],[-13,13],[-12,-4],[-15,-17],[-33,-19],[-41,13]],[[19,18],[26,21],[28,32],[29,44],[27,47],[28,32],[26,21],[19,18]]],Xd=[[-2.4,-2,-1.6],[-.8,0,.8,1.6,2.4,3.2],[-4,-3.2,-2.4,-2,-1.6,-.8,0,.8],[-3.2,-2.4,-1.6,-.8,0,.8,1.6,2.4,3.2,4]];function qd(a,c){let f=a.length-1;return Array.from({length:f},(S,L)=>{let O=a[(L+f-1)%f],B=a[(L+1)%f],Q=B[0]-O[0],z=B[1]-O[1],et=Math.hypot(Q,z)||1;return[a[L][0]-z/et*c,a[L][1]+Q/et*c]})}function Yd(a){for(let c=0;c<a.length;c++){let f=a[c],S=a[(c+1)%a.length],L=Math.ceil(Math.hypot(S[0]-f[0],S[1]-f[1])/.7);for(let O=0;O<=L;O++){let B=O/L;if(!oi(f[0]+(S[0]-f[0])*B,f[1]+(S[1]-f[1])*B,.19))return!1}}return!0}let Zd=El.map((a,c)=>Xd[c].map(f=>qd(a,f)).filter(Yd)),_h=[0,2,3,2,3,1,2,3,0,3],Jd=[0,0,0,0];for(let a=0;a<120;a++){let c=_h[a%_h.length],f=Jd[c]++,S=Zd[c],L=S.length?S[(f+Math.floor(f/(El[c].length-1)))%S.length]:El[c].slice(0,-1),O=f%L.length,B=L[O],Q=L[(O+1)%L.length],z=M(0,1),et=[B[0]+(Q[0]-B[0])*z,B[1]+(Q[1]-B[1])*z];if(oi(et[0],et[1],.19)||(et=As(et,2)),!et)continue;let St=a%3===0;Vi(et[0],et[1],Math.atan2(Q[0]-B[0],Q[1]-B[1]),!0,St?1:M(.88,1.05),L,St?"child":"visitor"),as[as.length-1].pathIndex=(O+1)%L.length}for(let a=0;a<7;a++)Vi(G[0]+(a-3)*1.6,xt[1]+9.5+a%2*.6,0,!0,.8,null,"performer");for(let a of[[7,11],[8,11.5],[24,-9],[25,-8.7],[-12,-23],[-13,-23.4],[-39,-44],[49,32],[50,33],[10,12],[11,12.4],[21,-10],[22,-10.4],[-10,-22],[-11,-22.4],[-37,-42],[47,34],[48,35]])oi(...a,.23)&&Vi(a[0],a[1],M(0,v),!1,M(.85,1));let $d=[{target:[-1.55,.2],children:[[-2.96,1.44],[-2.92,.5],[-2.94,-.44],[-1.55,2.98],[-.4,-.7],[-.05,1.53]]},{target:[1.45,-.5],children:[[.57,2.21],[2.24,2.46],[2.36,1.6],[2.35,.63],[.56,-1.52],[2.38,-1.61]]}];for(let{target:a,children:c}of $d)for(let[f,S]of c)if(oi(mr+f,gr+S,.19)){let L=Vi(mr+f,gr+S,Math.atan2(a[0]-f,a[1]-S),!1,M(.88,1.1),null,"game-child");L.bowler=f===-1.55&&S===2.98}let Ve={};Ve.base=new r(i,$,{name:"Architecture, ground and booths"}),Ve.details=new r(i,y,{name:"Furniture, windows and equipment"}),Ve.foliage=new r(i,bt,{name:"Foliage",instances:[{matrix:n.identity(),info:[0,0,1,0]}]}),Ve.roof=new r(i,Yt,{name:"Gym roof"}),Ve.signs=new r(i,At,{name:"Readable booth signs"}),Ve.distant=new r(i,Pi,{name:"Approximate neighbourhood",shadow:!1}),Ve.flags=new r(i,yl,{name:"Fabric banners",instances:ch});let yh=Array.from({length:4},()=>[]),Kd=0;for(let a=0;a<Zt.length;a++){if(Zt[a].addedGymSeat||a%2!==1&&!(Zt[a].gym&&a%5===2))continue;let c=Zt[a];yh[Kd++%4].push({matrix:n.compose(c.x,c.gym?Dt:0,c.z,c.yaw,.94),info:[0,0,0,0]})}Ve.boardingStaff=mh.map(({staff:a,instances:c})=>new r(i,a,{name:"乗降場の誘導員",instances:c})),Ve.seated=yh.map((a,c)=>new r(i,zd(c),{name:"Seated visitors "+c,instances:a}));let _a=oh(0),vh=n.compose(_a.x,0,_a.z,_a.yaw);Ve.vehicle=new r(i,on,{name:"Generic mobility vehicle",instances:[{matrix:vh,info:[0,0,0,0]}],dynamic:!0}),Ve.vehicleGlass=new r(i,gl,{name:"Mobility vehicle windshield",instances:[{matrix:vh,info:[0,0,0,0]}],dynamic:!0,shadow:!1});let Mh=Array.from({length:4},(a,c)=>({matrix:n.compose(sn[0]+(c%2-.5)*2,0,sn[1]+(Math.floor(c/2)-.5)*2.2,c*1.8,c===3?.64:1),info:[c,0,0,0]}));Ve.goats=new r(i,wd(),{name:"Goats",instances:Mh,dynamic:!0});let _r=[[29,58],[29,65],[28,72],[30,74],[31,69],[31,61],[29,58]],bh=As(_r[0],2)||_r[0],pn={x:bh[0],z:bh[1],yaw:0,index:1,speed:.56};Ve.kamanyan=new r(i,Gd(),{name:"かまくらいふ かまにゃん",instances:[{matrix:n.compose(pn.x,0,pn.z,0,.82),info:[0,.65,0,0]}],dynamic:!0}),Ve.actors=gh.map((a,c)=>new r(i,Tl(c),{name:"Visitors "+c,instances:a,dynamic:!0})),Ve.children=xh.map((a,c)=>new r(i,Vd(c),{name:"Children "+c,instances:a,dynamic:!0})),Ve.tactilePlayer=new r(i,fh,{name:"白杖を持つ参加者",dynamic:!0}),Ve.bowlingBall=new r(i,bl,{name:"ペットボトルボウリングのボール",dynamic:!0}),Ve.bowlingPins=new r(i,xr,{name:"ペットボトルボウリングのピン",instances:Sl.map(()=>({matrix:n.identity(),info:[0,0,0,0]})),dynamic:!0}),t(.81,"看板と案内データを仕上げています"),d.upload(i.gl,matchMedia("(pointer:coarse)").matches||innerWidth<650?256:512),i.atlas=d;let Al=70,Cl=0,yr=_a,Sh=0,wh=new Set(["vendor","performer","gathering","game-child"]),Th=as.filter(a=>!wh.has(a.type));function Eh(a){Al=p(a,0,100);let c=Math.round(Th.length*Al/100);Th.forEach((f,S)=>f.hidden=S>=c),as.filter(f=>wh.has(f.type)).forEach(f=>f.hidden=a===0),Ve.seated.forEach(f=>f.visible=a>10),i.shadowDirty=!0}let Rl=[[0,1.45,2.16,Math.PI],[7,1.45,-2.6,Math.PI],[8,1.45,-2.6,Math.PI/2],[11,3.45,-2.6,Math.PI/2],[12.7,3.45,-2.6,-Math.PI/2],[15.7,1.45,-2.6,-Math.PI/2],[16.7,1.45,-2.6,0],[23.7,1.45,2.16,0],[25.4,1.45,2.16,Math.PI]],Il=(a,c,f)=>a+(c-a)*f,vr=(a,c,f)=>p((a-c)/(f-c),0,1),Ah=a=>{let c=Math.cos(a),f=Math.sin(a);return new Float32Array([1,0,0,0,0,c,f,0,0,-f,c,0,0,0,0,1])};function jd(a){let c=a%25.4,f=Rl.findIndex(([Vt])=>Vt>c),[S,L,O,B]=Rl[f-1],[Q,z,et,St]=Rl[f],yt=vr(c,S,Q),Nt=Ve.tactilePlayer.instances[0];Nt.matrix=n.compose(mr+Il(L,z,yt),0,gr+Il(O,et,yt),Il(B,St,yt)),Nt.info[1]=L!==z||O!==et?.74:0,Ve.tactilePlayer.updateInstances();let Ht=Al>0?a%9.5:0,he=vr(Ht,1.9,4.25),me=Ve.bowlingBall.instances[0],fe=4.48*he;me.matrix=n.multiply(n.compose(mr-1.55,he<1?.22:-100,gr+2.3-fe),Ah(-fe/.133)),Ve.bowlingBall.updateInstances(),Sl.forEach(({x:Vt,z:oe,row:le},Oe)=>{let $t=vr(Ht,3.92+le*.12,4.37+le*.12);Ve.bowlingPins.instances[Oe].matrix=n.multiply(n.compose(mr+Vt,.087,gr+oe-.13*$t),Ah(-$t*1.48))}),Ve.bowlingPins.updateInstances()}function Qd(a,c){let f=c*1.7+a.index*.67,S=a.x,L=a.z,O=a.yaw,B=.27+.11*Math.sin(f);if(a.bowler){let Q=c%9.5,z=vr(Q,.55,1.9),et=vr(Q,5.1,6.7);L-=.83*(z-et),B=Q>.55&&Q<1.9||Q>5.1&&Q<6.7?.83:.18}else S+=.095*Math.sin(f),L+=.065*Math.cos(f),O+=.16*Math.sin(f*.64);a.instance.matrix=n.compose(S,xa(S,L),L,O,a.scale),a.instance.info[1]=B}Eh(70);function tf(a,c,f){jd(a);let S=_r[pn.index],L=S[0]-pn.x,O=S[1]-pn.z,B=Math.hypot(L,O),Q=B<.3;if(B<.3)pn.index=(pn.index+1)%_r.length;else{let z=Math.min(B,pn.speed*c),et=pn.x+L/B*z,St=pn.z+O/B*z;oi(et,St,.24)?(pn.x=et,pn.z=St,pn.yaw=Math.atan2(L,O),Q=z>0):pn.index=(pn.index+1)%_r.length}if(Ve.kamanyan.instances[0].matrix=n.compose(pn.x,xa(pn.x,pn.z)+Math.max(0,Math.sin(a*7))*.025,pn.z,pn.yaw,.82),Ve.kamanyan.instances[0].info[1]=Q?.65:0,Ve.kamanyan.updateInstances(),Ch(f??a*.88+Sh),a-Cl>.055){let z=Math.min(.18,a-Cl);Cl=a;for(let et of as){if(et.type==="game-child"&&!et.hidden){Qd(et,a);continue}if(et.walk&&et.path&&!et.hidden){let Nt=et.path[et.pathIndex],Ht=Nt[0]-et.x,he=Nt[1]-et.z,me=Math.hypot(Ht,he);if(me<.35)et.pathIndex=(et.pathIndex+1)%et.path.length;else{let fe=et.x+Ht/me*et.speed*z,Vt=et.z+he/me*et.speed*z;oi(fe,Vt,.19)?(et.x=fe,et.z=Vt,et.yaw=Math.atan2(Ht,he)):et.pathIndex=(et.pathIndex+1)%et.path.length}}let St=xa(et.x,et.z),yt=et.yaw;et.type==="performer"&&(yt=Math.sin(a*.5+et.index*.3)*.12,St+=.04+Math.max(0,Math.sin(a*2.4+et.index*.4))*.07),et.instance.matrix=n.compose(et.x,et.hidden?-100:St,et.z,yt,et.scale),et.instance.info[1]=et.hidden?0:et.walk?et.type==="performer"?.8:1:0}Ve.actors.forEach(et=>et.updateInstances()),Ve.children.forEach(et=>et.updateInstances()),Mh.forEach((et,St)=>{let yt=St*1.8+Math.sin(a*.1+St)*.3;et.matrix=n.compose(sn[0]+(St%2-.5)*2+Math.sin(a*.1+St)*.2,0,sn[1]+(Math.floor(St/2)-.5)*2.2,yt,St===3?.64:1)}),Ve.goats.updateInstances()}}t(.9,"歩行できる経路を確認しています");function Ch(a){yr=oh(a);let c=n.compose(yr.x,0,yr.z,yr.yaw);for(let f of[Ve.vehicle,Ve.vehicleGlass])f.instances[0].matrix=c,f.updateInstances()}function ef(a){let c=!a;Ve.vehicleGlass.visible!==c&&(Ve.vehicleGlass.visible=c,i.shadowDirty=!0)}return{data:m,markers:pt,selectableSigns:Ee,colliders:Ne,buildings:Kt,campus:xe,field:st,restricted:ih,track:In,trackLength:Ss,ropeSegments:ml,boardingGaps:dr,coneBars:hh,meshes:Ve,trunks:gt,seats:Zt,atlas:d,categoryColors:U,isWalkable:oi,walkHeight:xa,nearestWalkable:As,update:tf,setCrowd:Eh,setRideView:ef,setCarStart:(a,c)=>{Sh=a-c*.88,Ch(a)},p:P,getCar:()=>yr,getKamanyan:()=>[pn.x,2.18,pn.z],polyInside:Ie,actorCount:as.length}};window.FestaNavigation=class{constructor(i){this.world=i,this.step=.7;let t=i.campus.map(([n])=>n),e=i.campus.map(([,n])=>n);this.x0=Math.floor(Math.min(...t))-1,this.z0=Math.floor(Math.min(...e))-1,this.nx=Math.ceil((Math.max(...t)+1-this.x0)/this.step)+1,this.nz=Math.ceil((Math.max(...e)+1-this.z0)/this.step)+1,this.size=this.nx*this.nz,this.open=new Uint8Array(this.size);for(let n=0;n<this.nz;n++)for(let s=0;s<this.nx;s++){let r=this.point(n*this.nx+s);this.open[n*this.nx+s]=i.isWalkable(r[0],r[1],.34)?1:0}}point(i){return[this.x0+i%this.nx*this.step,this.z0+Math.floor(i/this.nx)*this.step]}index(i){return Math.round((i[1]-this.z0)/this.step)*this.nx+Math.round((i[0]-this.x0)/this.step)}nearest(i){let t=Math.round((i[0]-this.x0)/this.step),e=Math.round((i[1]-this.z0)/this.step),n=-1,s=1/0;for(let r=0;r<18;r++){for(let l=-r;l<=r;l++)for(let o=-r;o<=r;o++){if(r&&Math.abs(o)!==r&&Math.abs(l)!==r)continue;let u=t+o,h=e+l;if(u<0||u>=this.nx||h<0||h>=this.nz)continue;let p=h*this.nx+u;if(!this.open[p])continue;let v=this.point(p),m=Math.hypot(v[0]-i[0],v[1]-i[1]);m<s&&(s=m,n=p)}if(n>=0)return n}return-1}lineFree(i,t,e=.3){let n=Math.hypot(t[0]-i[0],t[1]-i[1]),s=Math.ceil(n/.16);for(let r=0;r<=s;r++)if(!this.world.isWalkable(i[0]+(t[0]-i[0])*r/Math.max(1,s),i[1]+(t[1]-i[1])*r/Math.max(1,s),e))return!1;return!0}find(i,t){let e=this.nearest(i),n=this.nearest(t);if(e<0||n<0)return null;let s=new Float32Array(this.size);s.fill(1/0);let r=new Int32Array(this.size);r.fill(-1);let l=new Uint8Array(this.size),o=[],u=(C,I)=>{let x={i:C,f:I},R=o.length;for(o.push(x);R;){let E=R-1>>1;if(o[E].f<=x.f)break;o[R]=o[E],R=E}o[R]=x},h=()=>{let C=o[0],I=o.pop();if(o.length){let x=0;for(;2*x+1<o.length;){let R=2*x+1;if(R+1<o.length&&o[R+1].f<o[R].f&&R++,o[R].f>=I.f)break;o[x]=o[R],x=R}o[x]=I}return C.i},p=n%this.nx,v=Math.floor(n/this.nx),m=C=>{let I=Math.abs(C%this.nx-p),x=Math.abs(Math.floor(C/this.nx)-v);return Math.max(I,x)+.41421356*Math.min(I,x)};s[e]=0,u(e,m(e));let T=!1;for(;o.length;){let C=h();if(l[C])continue;if(l[C]=1,C===n){T=!0;break}let I=C%this.nx,x=Math.floor(C/this.nx);for(let R=-1;R<=1;R++)for(let E=-1;E<=1;E++){if(!E&&!R)continue;let U=I+E,_=x+R;if(U<0||U>=this.nx||_<0||_>=this.nz)continue;let N=_*this.nx+U;if(!this.open[N]||l[N]||E&&R&&(!this.open[x*this.nx+U]||!this.open[_*this.nx+I]))continue;let H=s[C]+(E&&R?1.41421356:1);H<s[N]&&(s[N]=H,r[N]=C,u(N,H+m(N)))}}if(!T)return null;let M=[],P=n;for(;P>=0&&(M.push(this.point(P)),P!==e);)P=r[P];M.reverse(),this.lineFree(i,M[0])&&M.unshift([...i]),this.lineFree(M[M.length-1],t)&&M.push([...t]);let A=[M[0]],d=0;for(;d<M.length-1;){let C=M.length-1;for(;C>d+1&&!this.lineFree(M[d],M[C]);)C--;A.push(M[C]),d=C}return A}};var eh=[25.1,16.3];function md(i,t){let[e,n]=i.boardingGaps,s=e.rec.approach,r=n.rec.approach,l=t["T-15"],o=i.p(470,339.5)[1],u=i.p(470+110*.38,504)[0],h=0,p=Math.PI/2,v=Math.PI,m=-Math.PI/2,T=(P,A)=>({kind:"walk",label:P,points:A.map(([d,C,I])=>({position:[d,C],yaw:I}))}),M=(P,A,d)=>({kind:"ride",label:P,from:A,to:d});return[T("イートイン1のブース",[[19.4,11.6],[11.8,10.1,v],[4,10.1,v],[-4.8,10,v],[-5.1,6.1,m],[-5.1,1.2,m],[-5.1,-6,m],[-5.1,-13.9,m],[1.2,-14,h],[8.8,-14,h],[16.2,-14,h],[24.6,-14,h],[31.3,-17.6,h],[31.3,-25.3],r]),M("乗降場②から①へ",n,e),T("ヤギ牧場",[[-36.2,-38.6,h],[...l.approach,h]]),{kind:"look",label:"ヤギ牧場",look:l.pos,duration:3},T("乗降場①へ戻る",[[-36.2,-38.6],s]),M("乗降場①から②へ",e,n),T("スズキヤ横から体育館へ",[[31.6,-25.3,p],[31.9,-9.2,p],[29.7,-3.4,p],[27.8,2.5,p],[27.8,8.9,p],[29.5,o,p],[35.3,o,p]]),T("体育館の客席へ",[[35.3,17.6],[37.3,19.4],[52.3,19.4],[54.4,21.4],[54.4,30.7],[50.7,32.2],[46.6,32.2,h]]),{kind:"turn",label:"体育館を見渡す",duration:9},T("体育館の南側玄関から屋台へ",[[u,36.2],[u,41.2],[u,53],[36.4,53],[29.4,53],[30.5,56.6]]),T("キッチンカーの間を往復",[[31.9,61.5,p],[32,65.8,p],[32.2,70.8,p],[32.6,76.5,p],[30.6,74.4,m],[28.6,70.5,m],[28.5,65.7,m],[28.5,57.1,m]]),T("通路から賑わいゾーンへ",[[27.6,52.1],[27.4,45],[27.4,33.5],[27.8,25],[27.2,19.7],eh])]}(async function(){let i=D=>document.getElementById(D),t=D=>String(D??"").replace(/[&<>"']/g,nt=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[nt]),e={search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',overview:'<path d="m3 8 9-5 9 5-9 5-9-5Z M3 12l9 5 9-5M3 16l9 5 9-5"/>',route:'<circle cx="5" cy="5" r="2"/><circle cx="19" cy="19" r="2"/><path d="M7 5h8a4 4 0 0 1 0 8H9a4 4 0 0 0 0 8h5"/>',settings:'<path d="M4 6h16M4 12h16M4 18h16"/><circle cx="9" cy="6" r="2" fill="currentColor"/><circle cx="16" cy="12" r="2" fill="currentColor"/><circle cx="8" cy="18" r="2" fill="currentColor"/>',help:'<circle cx="12" cy="12" r="9"/><path d="M9.3 9a2.8 2.8 0 0 1 5.4 1c0 2-2.7 2-2.7 4M12 17h.01"/>',arrow:'<path d="M4 12h15m-5-5 5 5-5 5"/>',back:'<path d="M20 12H5m5-5-5 5 5 5"/>',close:'<path d="m6 6 12 12M6 18 18 6"/>',expand:'<path d="M9 3H3v6M15 3h6v6M3 15v6h6M21 15v6h-6"/>',walk:'<circle cx="13" cy="4" r="2"/><path d="m11 9 3 2 4 1M11 8l-3 5-4 1M11 9l-1 7-4 5m4-5 5 1 2 5"/>',pin:'<path d="M19 10c0 6-7 12-7 12S5 16 5 10a7 7 0 0 1 14 0Z"/><circle cx="12" cy="10" r="2.5"/>',eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>'};function n(D){return'<svg viewBox="0 0 24 24" aria-hidden="true">'+(e[D]||e.pin)+"</svg>"}function s(D=document){D.querySelectorAll("[data-icon]").forEach(nt=>nt.innerHTML=n(nt.dataset.icon))}s();let r=FESTA_DATA,l=[...r.records,...r.locations],o=Object.fromEntries(l.map(D=>[D.id,D])),u={F:"#a64c35",S:"#385e76",T:"#4e6c43",P:"#83503e",M:"#ab8450",I:"#28595c"},h=[["F-truck","[F] 飲食（キッチンカー）"],["F-tent","[F] 飲食（テント）"],["S-goods","[S] 物販"],["S-paid","[S] 有料ワークショップ・スポーツ・体験"],["T","[T] 無料・情報・スポーツ・体験"],["P","[P] ステージ出演"]],p=Object.fromEntries(h),v={M:"交流・モビリティー",I:"会場案内",P:"体育館の出演団体"},m=new Set(["S-1","S-2","S-3","S-4","S-5","S-6","S-7","S-13"]),T=new Set(["S-8","S-9","S-10","S-11","S-12"]),M=new Set(r.locations.map(D=>D.id));function P(D){return M.has(D.id)?D.category:D.category==="F"?D.kind==="truck"?"F-truck":"F-tent":D.category==="S"?m.has(D.id)?"S-goods":T.has(D.id)?"S-paid":null:D.category==="T"||D.category==="P"?D.category:null}function A(D){return M.has(D.id)?v[D.category]:p[P(D)]}let d=matchMedia("(pointer:coarse)").matches||innerWidth<650,C=matchMedia("(prefers-reduced-motion: reduce)").matches,I,x,R,E=!1,U=0,_=0,N=0,H,Y=null,b={mode:"welcome",pos:[0,11],yaw:.1,pitch:0,orbitYaw:-.48,orbitPitch:.79,orbitDist:115,orbitTarget:[0,0,22],returnPos:null,selected:null,nearest:null,path:null,pathIndex:1,auto:!1,targetId:null,labels:!0,showRoof:!0,paused:!1,sheet:null,crowd:70,light:"day",distanceWalked:0,rideYaw:0,boardingStop:null,tour:null,runMode:!1,quality:d?"standard":"high"},J={},X={x:0,y:0,active:!1,pid:null},Z={active:!1,pid:null,x:0,y:0,moved:0},lt=null,ht=new Set,Mt=new Map;function $(D,nt=4e3){i("toast").textContent=D,i("toast").classList.remove("hidden"),clearTimeout(H),H=setTimeout(()=>i("toast").classList.add("hidden"),nt)}function y(D,nt){i("loadBar").style.width=Math.round(D*100)+"%",i("loadText").textContent=nt}let bt=()=>new Promise(D=>setTimeout(D,0));function Yt(){b.mode="walk",i("welcome").classList.add("hidden"),i("hud").classList.remove("hidden"),i("minimapWrap").classList.remove("hidden"),i("bottomHint").classList.remove("hidden"),i("joystick").classList.remove("hidden"),d&&i("lookHint").classList.remove("hidden"),i("scene").focus({preventScroll:!0})}function At(D){b.yaw=Math.atan2(D[0]-b.pos[0],-(D[1]-b.pos[1])),b.pitch=-.02}function K(D){x&&(b.pos=x.nearestWalkable(D)||[0,11])}function ge(D="field"){if(E){if(k(),Rt(),pe(),qt(),Yt(),D==="field")K([2.8,11]),At([14,-14]);else{let nt=o[D];K(nt.approach),At(D==="GATE_MAIN"?r.layout.mainGateLook:[-27,-24])}b.mode="walk",ae(),$(d?"左の丸で移動。画面の右側をドラッグすると見回せます。":"左の丸、キーボードのWASD または矢印キーで移動。画面をドラッグして見回します。",4500)}}function Ne(){E&&(k(),Rt(),pe(),qt(),b.mode="welcome",i("welcome").classList.remove("hidden"),i("minimapWrap").classList.add("hidden"),i("bottomHint").classList.add("hidden"),i("nearby").classList.add("hidden"),i("joystick").classList.add("hidden"),i("lookHint").classList.add("hidden"),ae())}function gt(){if(E){if(k(),Rt(),pe(),b.mode==="overview"){b.mode="walk",b.returnPos&&(b.pos=[...b.returnPos]),b.pitch=0,ae();return}b.mode==="welcome"&&Yt(),qt(),b.returnPos=[...b.pos],b.mode="overview",b.orbitTarget=[0,0,23],b.orbitDist=158,b.orbitYaw=-.27,b.orbitPitch=.9,ae(),$("ドラッグで回転、ホイールで拡大。地面を押すとその場所へ移動します。ブースの札や看板を押すと詳細を表示します。")}}function pt(){return b.tour?.paused?.holdRide&&b.mode==="ride"}function Kt(){let D=b.tour;return D&&(!D.paused||b.mode==="walk"&&!b.path||pt())}function ae(){let D=b.mode,nt=b.tour,it=Kt(),dt=!!nt&&!nt.paused;if(i("tourBtn").classList.toggle("active",dt),i("tourBtn").setAttribute("aria-pressed",String(dt)),i("tourBtn").setAttribute("aria-label",nt?dt?"自動ツアーを一時停止":"自動ツアーを再開":"自動ツアーを開始"),i("welcomeTour").firstChild.nodeValue=nt?"自動ツアーを再開 ":"自動ツアー ",i("modeExit").setAttribute("aria-label",it?"自動ツアーを終了":"現在の移動を終了"),x&&x.setRideView(D==="ride"),i("modeBar").classList.toggle("ride-active",D==="ride"),i("speedToggle").classList.toggle("hidden",d||D!=="walk"||!!it),i("speedToggle").textContent=b.runMode?"速度：走る":"速度：歩く",i("speedToggle").setAttribute("aria-pressed",String(b.runMode)),i("speedToggle").setAttribute("aria-label",b.runMode?"走るを選択中。歩くに切り替える":"歩くを選択中。走るに切り替える"),i("overviewBtn").classList.toggle("active",D==="overview"),i("joystick").classList.toggle("hidden",D!=="walk"||!!b.sheet),i("lookHint").classList.toggle("hidden",!d||D!=="walk"||!!b.sheet),i("modeBar").classList.toggle("hidden",D==="welcome"||D==="walk"&&!b.path&&!it),it)i("modeText").textContent=dt?"自動ツアー中":"自動ツアーを一時停止中",i("modeAction").textContent=dt?"一時停止":"再開";else if(D==="overview")i("modeText").textContent="上空から会場を見る",i("modeAction").textContent="歩行に戻る";else if(D==="ride")i("modeText").textContent="トゥクトゥクに乗車中",i("modeAction").textContent="トゥクトゥクから降りる";else if(b.path){let g=o[b.targetId];i("modeText").textContent=(b.auto?"歩いて案内中：":"経路表示：")+(g?g.short:"選択した場所"),i("modeAction").textContent=b.auto?"一時停止":"自動で歩く"}}function Zt(D){return D.kind==="performer"||D.id==="T-SCI"?o.GYM:D}function Ee(D,nt=!0){if(!E)return;let it=typeof D=="string"?Zt(o[D]):null,dt=it?.approach||(!it&&Array.isArray(D)?D:null);if(!dt)return $("この団体のブース位置は資料で特定できていません。"),!1;k(),b.mode==="welcome"&&ge("field"),b.mode==="ride"&&(b.mode="walk",K(o.MOBILITY.approach)),b.mode="walk";let g=R.find(b.pos,dt);return g?(b.path=g,b.pathIndex=1,b.auto=nt,b.targetId=it?.id||null,Be(g),Rt(),pe(),ae(),!0):($("ここから歩ける経路を見つけられませんでした。「この場所へ移動」で見学できます。",6e3),!1)}function Ue(D){let nt=Zt(o[D]);return nt?.approach?(k(),b.mode==="welcome"&&Yt(),qt(),b.mode="walk",K(nt.approach),At(nt.pos),nt.id==="GATE_MAIN"&&At(r.layout.mainGateLook),nt.id==="GATE_WEST"&&At([-27,-24]),nt.id==="GYM"&&At([nt.pos[0],x.p(525,345)[1]]),nt.id==="WC"&&At([45,45]),Rt(),pe(),ae(),$(nt.short+" に移動しました"),!0):!1}function qt(){b.path=null,b.auto=!1,b.targetId=null,lt&&(lt.dispose(),lt=null),ae()}function Be(D){lt&&lt.dispose();let{Geometry:nt,Mesh:it,material:dt}=FestaGL,g=new nt;for(let F=0;F<D.length-1;F++){let q=D[F],j=D[F+1],Ct=j[0]-q[0],ot=j[1]-q[1],_t=Math.hypot(Ct,ot);if(_t<.01)continue;let Pt=-ot/_t*.055,Xt=Ct/_t*.055;g.quad([q[0]-Pt,.088,q[1]-Xt],[q[0]+Pt,.088,q[1]+Xt],[j[0]+Pt,.088,j[1]+Xt],[j[0]-Pt,.088,j[1]-Xt],dt("#b78134",0,.75,0,.13));for(let de=1;de<_t;de+=2){let ye=q[0]+Ct*de/_t,ee=q[1]+ot*de/_t;g.disk(ye,.092,ee,.12,dt("#dfbc77",0,.7,0,.2),10)}}let V=D[D.length-1];g.cylinder([V[0],.08,V[1]],[V[0],.15,V[1]],.26,.26,dt("#d2a558",0,.65,0,.2),30),lt=new it(I,g,{name:"Navigation guide",shadow:!1})}function we(D,nt){let it=Math.max(1,Math.ceil(Math.hypot(D,nt)/.15)),dt=0;for(let g=0;g<it;g++){let V=[...b.pos],F=b.pos[0]+D/it,q=b.pos[1]+nt/it;x.isWalkable(F,q,.28)?b.pos=[F,q]:(x.isWalkable(F,b.pos[1],.28)&&(b.pos[0]=F),x.isWalkable(b.pos[0],q,.28)&&(b.pos[1]=q)),dt+=Math.hypot(b.pos[0]-V[0],b.pos[1]-V[1])}return b.distanceWalked+=dt,dt}function _e(D){if(!b.path||!b.auto)return;let nt=b.path[b.pathIndex];if(!nt){xe();return}let it=nt[0]-b.pos[0],dt=nt[1]-b.pos[1],g=Math.hypot(it,dt);if(g<.16){b.pathIndex++,b.pathIndex>=b.path.length&&xe();return}let V=Math.min(g,D*2.35),F=we(it/g*V,dt/g*V),q=Math.atan2(it,-dt);b.yaw+=Ie(q-b.yaw)*Math.min(1,D*3.3),b.pitch+=(0-b.pitch)*Math.min(1,D*3),F<2e-4&&V>.001&&(b.auto=!1,$("障害物の手前で停止しました。移動キーで位置を調整できます。"),ae())}function xe(){let D=b.targetId,nt=o[D];qt(),nt&&(At(nt.pos),nt.id==="GATE_MAIN"&&At(r.layout.mainGateLook),nt.id==="GATE_WEST"&&At([-27,-24]),ht.add(D),$(nt.short+" に到着しました",2600))}function Ie(D){return Math.atan2(Math.sin(D),Math.cos(D))}let Qe=[i("rideBubble"),i("rideBubble2")];function Ae(D){b.boardingStop=D,x.setCarStart(D.distance,_),b.mode="ride",b.rideYaw=0,b.pitch=-.06}function tn(D=b.boardingStop){b.mode="walk",K(D.rec.approach),At(D.position),b.boardingStop=null}function tt(D){!E||b.mode!=="walk"||!D?.rec.approach||(k(),b.tour&&(b.tour.paused.holdRide=!1),Rt(),qt(),Ae(D),ae(),$("トゥクトゥクに乗っています。ドラッグして周囲を見回せます。車種・速度は演出です。",5500))}function Xe(){if(Kt()){st();return}b.mode==="overview"?(b.mode="walk",b.returnPos&&K(b.returnPos),b.pitch=0):b.mode==="ride"?tn():qt(),ae()}function Pe(){if(!E)return;if(b.tour){b.tour.paused?w():k();return}Rt(),pe(),qt(),Ze(),b.mode==="ride"&&tn(),b.mode==="welcome"&&Yt(),b.mode="walk",K(eh),b.tour={steps:md(x,o),index:-1},ct();let D=b.tour;if(ft(D,D.step.points[0])){let nt=D.path.find(([it,dt])=>Math.hypot(it-b.pos[0],dt-b.pos[1])>=.1);nt&&(At(nt),b.pitch=0)}clearTimeout(H),i("toast").classList.add("hidden")}function k(){let D=b.tour;if(!D||D.paused)return;let{mode:nt,pos:it,yaw:dt,pitch:g,boardingStop:V,rideYaw:F}=b;D.paused={view:{mode:nt,pos:[...it],yaw:dt,pitch:g,boardingStop:V,rideYaw:F},holdRide:nt==="ride",carDistance:x.getCar().distance},Ze(),ae()}function w(){let D=b.tour,{view:nt,carDistance:it}=D.paused;Rt(),pe(),qt(),Ze(),b.mode==="welcome"&&Yt(),Object.assign(b,nt),nt.mode==="ride"&&(x.setCarStart(it,_),D.lastCarDistance=it),D.paused=null,clearTimeout(H),i("toast").classList.add("hidden"),ae()}function st(){b.tour&&(b.tour=null,b.mode==="ride"&&tn(),ae())}function rt(D,nt){let it=nt-D;return Math.abs(it)<1e-6?0:it<0?it+x.trackLength:it}function ct(){let D=b.tour;D.index=(D.index+1)%D.steps.length,D.step=D.steps[D.index],D.pointIndex=0,D.path=null,D.elapsed=0,D.startYaw=b.yaw;let nt=D.step;nt.kind==="ride"&&(Ae(nt.from),D.lastCarDistance=x.getCar().distance,D.remainingRide=rt(nt.from.distance,nt.to.distance)),ae()}function zt(D,nt){let it=Ie(D-b.yaw),dt=nt*1.05;b.yaw+=Math.max(-dt,Math.min(dt,it)),b.pitch=0}function It(){st(),$("歩ける経路を見つけられなかったため、自動ツアーを停止しました。",6e3)}function ft(D,nt){let it=R.find(b.pos,nt.position),dt=it?.[it.length-1];return!dt||Math.hypot(dt[0]-nt.position[0],dt[1]-nt.position[1])>.2?!1:(D.path=it,D.pathIndex=0,D.walkYaw=null,!0)}function vt(D,nt){let it=D.step.points[D.pointIndex];if(!it){ct();return}if(!D.path&&!ft(D,it)){It();return}let dt=D.path[D.pathIndex];if(!dt){D.pointIndex++,D.path=null;return}let g=dt[0]-b.pos[0],V=dt[1]-b.pos[1],F=Math.hypot(g,V);if(F<.1){D.pathIndex++,D.walkYaw=null;return}let q=Math.atan2(g,-V);if(D.walkYaw===null){let Ct=Ie((it.yaw??q)-q),ot=Math.PI/7;D.walkYaw=q+FestaGL.clamp(Ct,-ot,ot)}if(zt(D.walkYaw,nt),Math.abs(Ie(q-b.yaw))>Math.PI/4)return;let j=Math.min(F,nt*2.1);we(g/F*j,V/F*j)<2e-4&&j>.001&&It()}function Gt(D){let nt=b.tour,it=nt.step;if(it.kind==="walk"){vt(nt,D);return}if(it.kind==="ride"){let dt=x.getCar().distance;nt.remainingRide-=rt(nt.lastCarDistance,dt),nt.lastCarDistance=dt,nt.remainingRide<.001&&(tn(it.to),ct());return}if(nt.elapsed=Math.min(nt.elapsed+D,it.duration),it.kind==="turn"){let dt=nt.elapsed/it.duration;b.yaw=nt.startYaw+Math.PI*2*(dt*dt*(3-2*dt))}else zt(Math.atan2(it.look[0]-b.pos[0],b.pos[1]-it.look[1]),D);nt.elapsed>=it.duration&&ct()}function jt(D,nt){k(),Y=document.activeElement,b.sheet=nt,i("sheetTitle").textContent=D,i("sheet").classList.remove("hidden"),i("sheetScrim").classList.remove("hidden"),i("sheetBack").classList.add("hidden"),i("sheetBody").scrollTop=0,Ze(),ae(),setTimeout(()=>i("sheetClose").focus({preventScroll:!0}),0)}function Rt(){b.sheet=null,i("sheet").classList.add("hidden"),i("sheetScrim").classList.add("hidden"),ae(),Y&&Y.isConnected&&Y.focus({preventScroll:!0})}let kt="",Qt="all";function xt(){jt("ブースを見つける","search"),i("sheetBody").innerHTML='<div class="search-field">'+n("search")+'<input id="searchInput" aria-label="団体名や内容から検索" placeholder="団体名・食べもの・体験から検索" value="'+t(kt)+'"></div><div class="filter-row">'+[["all","すべて"],...h,["I","会場案内"]].map(([D,nt])=>'<button class="filter '+(D===Qt?"active":"")+'" data-filter="'+D+'">'+nt+"</button>").join("")+'</div><p class="result-count" id="resultCount"></p><p class="source-text">'+t(r.notice)+'</p><div id="results"></div>',i("searchInput").addEventListener("input",D=>{kt=D.target.value,Lt()}),i("sheetBody").querySelectorAll("[data-filter]").forEach(D=>D.onclick=()=>{Qt=D.dataset.filter,i("sheetBody").querySelectorAll("[data-filter]").forEach(nt=>nt.classList.toggle("active",nt===D)),Lt()}),Lt(),setTimeout(()=>i("searchInput").focus(),30)}function Lt(){let D=kt.normalize("NFKC").toLowerCase().trim(),nt=D.split(/\s+/).filter(Boolean),it=l.filter(dt=>(Qt==="all"||(Qt==="I"?M.has(dt.id)&&["M","I"].includes(dt.category):P(dt)===Qt))&&nt.every(g=>(dt.id+" "+dt.name+" "+dt.detail).normalize("NFKC").toLowerCase().includes(g)));i("resultCount").textContent=it.length+" 項目 ／ 団体"+r.records.length+"・会場案内"+r.locations.length+"（9月時点の予定）",i("results").innerHTML=it.length?it.map(dt=>'<button class="result" data-id="'+t(dt.id)+'"><span class="badge" style="background:'+u[dt.category]+'">'+t(dt.id.startsWith("P-")?"P":dt.id.includes("-")?dt.id:dt.id==="WC"?"WC":"案内")+'</span><span class="result-info"><strong>'+t(dt.name)+'</strong><small class="'+(dt.kind==="unplaced"?"unplaced":"")+'">'+t(dt.kind==="unplaced"?"位置未特定 · "+dt.caption:dt.caption)+"</small></span>"+n("arrow")+"</button>").join(""):'<p class="empty">該当する項目がありません。<br>短い言葉でも検索できます。</p>',i("results").querySelectorAll("[data-id]").forEach(dt=>dt.onclick=()=>Et(dt.dataset.id,!0))}function G(D){let nt=r.exhibitorUrls?.[D];if(!nt||!/^https?:\/\//i.test(nt))return"";let it=t(nt);return'<a class="detail-link" href="'+it+'" target="_blank" rel="noopener noreferrer">'+it+"</a>"}function Et(D,nt=!1){let it=o[D];if(!it)return;b.selected=D,ht.add(D),jt("ブース・会場の詳細","detail"),i("sheetBack").classList.toggle("hidden",!nt);let dt=Zt(it),g=E&&!!dt.approach,V=A(it),F='<div class="detail-id"><span class="badge" style="background:'+u[it.category]+'">'+t(it.id.startsWith("P-")?"P":it.id.includes("-")?it.id:"案内")+"</span>"+t(V)+'<span>／ 予定</span></div><h3 class="detail-title">'+t(it.name)+'</h3><p class="detail-caption">'+t(it.caption)+"</p>";g?F+='<div class="detail-actions"><button class="primary" id="navigateHere">'+n("route")+' 歩いて案内</button><button class="secondary" id="jumpHere">この場所へ移動</button></div>':F+=it.kind==="unconfirmed"?'<div class="note-box warn">今回の体育館の開始予定9件に記載がなく、出演予定は未確認です。</div>':it.kind==="unplaced"?'<div class="note-box warn">参加予定団体一覧には記載がありますが、配置図からワークショップの位置を特定できません。推測でブースを追加していません。</div>':'<div class="note-box">3D表示が起動していないため、ここでは移動機能を利用できません。団体の予定内容は読めます。</div>',it.id==="MOBILITY"&&(F+='<p class="source-text">電動トライク1台。車体色、走行速度は実際と異なる場合があります。</p>');let q=r.exhibitorDescriptions?.[D];it.id!=="GYM"&&(F+='<div class="section-label">'+(it.category==="P"?"参加予定内容":"内容")+'</div><div class="detail-content">'+t(q?it.detail+`

`+q:it.detail)+"</div>"),F+=G(D),(it.category==="F"||it.category==="S")&&(F+='<div class="note-box">3Dで置かれている商品は実物や販売数量を示すものではありません。</div>'),(it.id==="GYM"||it.category==="P"||it.id==="T-SCI")&&(F+='<div class="section-label">体育館内 開始予定</div>'+r.schedule.map(j=>'<div class="schedule-row"><b>'+t(j.time)+"</b><span>"+t(j.name)+"</span></div>").join(""),F+='<p class="source-text">進行上の都合で開始・終了時刻は変更になることがあります。</p>'),F+='<p class="source-text">'+t(r.notice)+"</p>",i("sheetBody").innerHTML=F,g&&(i("navigateHere").onclick=()=>{Ee(D,!0)},i("jumpHere").onclick=()=>{Ue(D)})}function mt(){jt("表示と操作の設定","settings"),i("sheetBody").innerHTML='<div class="setting-row"><label for="quality">描画品質</label><select id="quality"><option value="high">高画質 — PC向け</option><option value="standard">標準 — 軽さと品質のバランス</option><option value="low">軽量 — 小さな端末向け</option></select><small>影の解像度と描画解像度を変更します。重い場合は「標準」「軽量」を選択。</small></div><div class="setting-row"><label for="crowd">来場者の表示量 <span id="crowdValue"></span></label><input id="crowd" type="range" min="0" max="100" step="10" value="'+b.crowd+'"><small>人数は演出です。実際の来場者数や混雑予測ではありません。</small></div><div class="setting-row"><label for="light">光の雰囲気</label><select id="light"><option value="day">昼の光</option><option value="afternoon">午後の光</option></select><small>当日の天気・太陽位置を再現したものではありません。</small></div><label class="toggle-row" for="labelsToggle">近くのブース名を表示<input type="checkbox" id="labelsToggle" '+(b.labels?"checked":"")+'></label><label class="toggle-row" for="roofToggle">体育館の屋根を表示<input type="checkbox" id="roofToggle" '+(b.showRoof?"checked":"")+'></label><div class="note-box">屋根を外すと、上空から体育館の中を確認できます。歩行時には屋根の表示に関係なく出入口から入ります。</div><button class="secondary" id="fullscreenBtn">全画面表示を切り替える</button><button class="text-btn" id="captureBtn">いまの3D画面を画像として保存 '+n("arrow")+'</button><div class="section-label">動作情報</div><p class="source-text" id="performanceInfo"></p><button id="settingsHelp" class="text-btn">操作方法・資料と再現範囲 '+n("help")+"</button>",i("quality").value=b.quality,i("quality").onchange=D=>{b.quality=D.target.value,I.setQuality(b.quality),$("描画品質を変更しました")},i("crowdValue").textContent=b.crowd+"%",i("crowd").oninput=D=>{b.crowd=Number(D.target.value),x.setCrowd(b.crowd),i("crowdValue").textContent=b.crowd+"%"},i("light").value=b.light,i("light").onchange=D=>{b.light=D.target.value,I.sun=FestaGL.V.norm(b.light==="day"?[-.38,.79,.48]:[-.75,.38,.46]),I.sunColor=b.light==="day"?[1,.94,.81]:[1,.84,.65],I.sunPower=b.light==="day"?3.7:3.4,I.exposure=b.light==="day"?1.12:1.18,I.createShadow()},i("labelsToggle").onchange=D=>b.labels=D.target.checked,i("roofToggle").onchange=D=>{b.showRoof=D.target.checked,x.meshes.roof.visible=b.showRoof,I.shadowDirty=!0},i("fullscreenBtn").onclick=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{$("この表示環境では全画面表示を利用できません。")}},i("captureBtn").onclick=()=>{try{I.render(_);let D=document.createElement("a");D.href=i("scene").toDataURL("image/png"),D.download="festa2026_3d_view.png",D.click()}catch{$("画像の保存に対応していない表示環境です。")}},i("settingsHelp").onclick=()=>Tt(),i("performanceInfo").textContent="WebGL 2 ／ 外部通信なし ／ "+I.stats.triangles.toLocaleString()+" triangles ／ "+I.stats.draws+" draw calls（現在の場面）"}function Tt(){jt("操作と、資料について","help"),i("sheetBody").innerHTML='<div class="help-section"><h3>PCで歩く</h3>'+[["左下の丸いパッド","前後・左右に移動"],["W / A / S / D・矢印キー","前後・左右に移動"],["画面をドラッグ","見回す"],["画面下の「歩く」「走る」","速度を切り替える"],["Shift ＋移動","押している間だけ走る"],["E","近くのブースの内容"],["V","上空／歩行を切り替え"],["M","会場マップ"],["Esc","閉じる・移動を止める"]].map(D=>'<div class="control-row"><span>'+t(D[0])+"</span><span>"+t(D[1])+"</span></div>").join("")+"<h3>スマートフォン・タブレット</h3><p>左下の丸いパッドで移動します。中心付近では細かく、外側では速く移動できます。画面の右側をドラッグして見回します。ブースの札、テントやキッチンカーの看板、店頭の立て看板や「内容を見る」を押すと、詳細を表示します。端末を横向きにすると広く見渡せます。</p><h3>ブースを探す・案内を使う</h3><p>「ブース」から団体名や食べもの、体験などで検索できます。「歩いて案内」は経路を表示して自動で歩きます。移動キーやジョイスティックを使うと手動操作に戻ります。「この場所へ移動」は、そのブースの前へ直接移動します。</p><p>「自動ツアー」は賑わいゾーンから出発し、徒歩とトゥクトゥクで会場を繰り返し回ります。「ツアーを停止」または Esc で終了できます。</p><p>上空表示ではドラッグで回転、ホイール／2本指で拡大・縮小。会場マップでは点を選ぶとブース情報、歩ける場所を選ぶと直接移動します。ブース番号入り配置図と上空表示でも歩ける場所へ直接移動できます。</p><h3>読み取り方</h3>"+r.caveats.map(D=>"<p>"+t(D)+"</p>").join("")+'<div class="note-box">校舎は外観のみ。体育館には出入口から入れます。壇上舞台は使用しません。</div><h3>参照資料</h3>'+r.sources.map(D=>'<div class="source-entry"><strong>'+t(D.type)+" · "+(D.url?'<a href="'+t(D.url)+'" target="_blank" rel="noopener noreferrer">'+t(D.name)+"</a>":t(D.name))+"</strong><p>"+t(D.description)+"</p></div>").join("")+'<h3>このアプリについて</h3><p>すべての描画・検索・経路計算は、このHTMLを開いた端末内で行います。外部通信、位置情報の取得、アクセス解析、アカウント登録はありません。「かまにゃん」の紹介ページを開く場合だけ外部に移動します。</p><p>描画にはThree.jsを使用し、形状、人物、看板は本アプリ向けに実装。地表テクスチャはCC0画像を使用しています。写真測量や現地撮影による3Dモデルではありません。</p><p class="source-text">テクスチャ：Gravel04 / CC0Textures、Grass 01 / linolafett（CC0、scikit-image同梱）。提供資料の権利は元の権利者に帰属します。</p></div>'}function Dt(D){let nt=D.clientWidth,it=D.clientHeight,dt=x.campus.map(([Pt])=>Pt),g=x.campus.map(([,Pt])=>Pt),V=Math.min(...dt),F=Math.max(...dt),q=Math.min(...g),j=Math.max(...g),Ct=(V+F)/2,ot=(q+j)/2,_t=Math.min((nt-18)/(F-V),(it-18)/(j-q));return{w:nt,h:it,scale:_t,to:Pt=>[nt/2+(Pt[0]-Ct)*_t,it/2+(Pt[1]-ot)*_t],from:(Pt,Xt)=>[(Pt-nt/2)/_t+Ct,(Xt-it/2)/_t+ot]}}function wt(D,nt=!1){if(!x||!D.clientWidth)return;let it=Dt(D),dt=Math.min(devicePixelRatio,2),g=Math.round(it.w*dt),V=Math.round(it.h*dt);(D.width!==g||D.height!==V)&&(D.width=g,D.height=V);let F=D.getContext("2d");F.setTransform(dt,0,0,dt,0,0),F.clearRect(0,0,it.w,it.h),F.fillStyle="#eeeee3",F.fillRect(0,0,it.w,it.h);let q=(ot,_t,Pt)=>{F.beginPath(),ot.forEach((Xt,de)=>{let[ye,ee]=it.to(Xt);de?F.lineTo(ye,ee):F.moveTo(ye,ee)}),F.closePath(),_t&&(F.fillStyle=_t,F.fill()),Pt&&(F.strokeStyle=Pt,F.lineWidth=1,F.stroke())};q(x.campus,"#d4d8cd","#b4c3b5"),q(x.field,"#e6d8ba"),q(x.restricted,"#ded5c1","#b5a68a"),F.beginPath(),x.track.forEach((ot,_t)=>{let[Pt,Xt]=it.to(ot);_t?F.lineTo(Pt,Xt):F.moveTo(Pt,Xt)}),F.closePath(),F.strokeStyle="#c09164",F.lineWidth=Math.max(1,it.scale*2),F.stroke(),F.beginPath();for(let[ot,_t]of x.ropeSegments)F.moveTo(...it.to(ot)),F.lineTo(...it.to(_t));F.strokeStyle="#d6ad23",F.lineWidth=nt?2:1.3,F.stroke(),F.setLineDash(nt?[3,3]:[2,2]),F.strokeStyle="#33312b",F.stroke(),F.setLineDash([]);for(let[ot,_t]of x.coneBars){let Pt=it.to(ot),Xt=it.to(_t);F.beginPath(),F.moveTo(...Pt),F.lineTo(...Xt),F.strokeStyle="#bb3b2c",F.lineWidth=nt?2.5:1.5,F.stroke()}for(let ot of x.buildings){let _t=it.to([ot.x-ot.w/2,ot.z-ot.d/2]);F.fillStyle=ot.gym?"#bfccb9":"#a6b5ad",F.fillRect(_t[0],_t[1],ot.w*it.scale,ot.d*it.scale),F.strokeStyle="#8fa397",F.lineWidth=.6,F.strokeRect(_t[0],_t[1],ot.w*it.scale,ot.d*it.scale),nt&&ot.w*it.scale>40&&(F.fillStyle="#4c6858",F.font="10px sans-serif",F.textAlign="center",F.fillText(ot.gym?"体育館":"校舎",_t[0]+ot.w*it.scale/2,_t[1]+ot.d*it.scale/2+3))}for(let ot of x.markers){let[_t,Pt]=it.to(ot.pos),Xt=nt?3.7:2.1;if(F.beginPath(),F.arc(_t,Pt,Xt,0,Math.PI*2),F.fillStyle=u[ot.category],F.fill(),nt&&(F.strokeStyle="#fcf9ee",F.lineWidth=.7,F.stroke(),ot.id.includes("-")&&ot.kind!=="performer")){F.font="9px sans-serif",F.textAlign="left",F.fillStyle="#3e584b";let de=_t+6,ye=Pt+3;ot.pos[1]<-16&&ot.pos[0]>-10?(de=_t,ye=Pt-10,F.save(),F.translate(de,ye),F.rotate(-Math.PI/2.8),F.fillText(ot.id,0,0),F.restore()):ot.pos[0]<1&&ot.pos[1]>-16&&ot.pos[1]<10?(F.textAlign="right",F.fillText(ot.id,_t-6,Pt+3)):F.fillText(ot.id,de,ye)}}b.path&&(F.beginPath(),b.path.forEach((ot,_t)=>{let[Pt,Xt]=it.to(ot);_t?F.lineTo(Pt,Xt):F.moveTo(Pt,Xt)}),F.strokeStyle="#af7b29",F.lineWidth=nt?2:1.5,F.setLineDash([4,2]),F.stroke(),F.setLineDash([]));let[j,Ct]=it.to(b.pos);if(F.save(),F.translate(j,Ct),F.rotate(b.yaw),F.fillStyle="#fff",F.beginPath(),F.arc(0,0,nt?7:5,0,Math.PI*2),F.fill(),F.fillStyle="#174f58",F.beginPath(),F.moveTo(0,nt?-10:-7),F.lineTo(nt?5:4,nt?6:4),F.lineTo(0,nt?3:1),F.lineTo(nt?-5:-4,nt?6:4),F.closePath(),F.fill(),F.restore(),F.fillStyle="#526b5d",F.textAlign="right",F.font=(nt?"10":"8")+"px sans-serif",nt){let[ot,_t]=it.to(o.GATE_MAIN.pos);F.textAlign="right",F.fillText("正門",ot-9,_t-9);let[Pt,Xt]=it.to(o.GATE_WEST.pos);F.textAlign="left",F.fillText("西ヶ谷門",Pt-10,Xt+15)}}let ie=!1;function te(){E&&(k(),Ze(),Rt(),Y=document.activeElement,i("mapModal").classList.remove("hidden"),ie=!1,i("bigmap").classList.remove("hidden"),i("originalWrap").classList.add("hidden"),i("mapToggle").textContent="ブース番号入り配置図を見る",i("mapExplain").textContent="ブースの点を押すと内容を表示。歩ける場所を押すと、その場所へ直接移動します。",requestAnimationFrame(()=>wt(i("bigmap"),!0)),i("mapClose").focus())}function pe(){i("mapModal").classList.add("hidden")}function Me(D){return!D||!x.isWalkable(D[0],D[1],.32)?($("建物・走行路の中は選べません。歩ける場所を選択してください。"),!1):(k(),qt(),b.mode==="welcome"&&Yt(),b.mode="walk",b.returnPos=null,b.pitch=0,K(D),pe(),ae(),$("選んだ場所へ移動しました"),!0)}function _n(D){let nt=i("bigmap").getBoundingClientRect(),it=D.clientX-nt.left,dt=D.clientY-nt.top,g=Dt(i("bigmap")),V=null,F=16;for(let j of x.markers){let Ct=g.to(j.pos),ot=Math.hypot(Ct[0]-it,Ct[1]-dt);ot<F&&(F=ot,V=j)}if(V){pe(),Et(V.id);return}let q=g.from(it,dt);if(!x.isWalkable(...q,.32)){$("建物・走行路の中は選べません。歩ける場所を選択してください。");return}Me(q)}function W(D){let nt=i("originalPlan"),it=nt.getBoundingClientRect();if(!nt.naturalWidth||!it.width||!it.height)return;let dt=(D.clientX-it.left)/it.width*660-35,g=(D.clientY-it.top)/it.height*870-35,V=x.p(dt,g),F=null,q=16;for(let j of x.markers){let Ct=it.left+(j.pos[0]/.22+320+35)/660*it.width,ot=it.top+(j.pos[1]/.22+290+35)/870*it.height,_t=Math.hypot(Ct-D.clientX,ot-D.clientY);_t<q&&(q=_t,F=j)}if(F){pe(),Et(F.id);return}Me(V)}function ut(D,nt){let it=new Map,dt=!1;D.addEventListener("pointerdown",g=>{it.size?dt=!0:dt=!1,it.set(g.pointerId,[g.clientX,g.clientY])}),D.addEventListener("pointermove",g=>{let V=it.get(g.pointerId);V&&Math.hypot(g.clientX-V[0],g.clientY-V[1])>8&&(dt=!0)}),D.addEventListener("pointerup",g=>it.delete(g.pointerId)),D.addEventListener("pointercancel",g=>{it.delete(g.pointerId),dt=!0}),D.addEventListener("click",g=>{dt||nt(g)})}function Ut(){for(let D of x.markers){let nt=document.createElement("button");nt.className="world-label hidden",nt.style.setProperty("--accent",u[D.category]),nt.setAttribute("aria-label",D.name+" の内容を見る"),nt.innerHTML="<b>"+t(D.id.includes("-")?D.id:D.id==="WC"?"WC":"")+"</b><span>"+t(D.short)+"</span>",nt.onclick=it=>{it.stopPropagation(),Et(D.id)},i("labels").appendChild(nt),Mt.set(D.id,nt)}}function Ft(){let D=b.mode==="walk"&&!b.sheet&&i("mapModal").classList.contains("hidden");Qe.forEach((nt,it)=>{if(nt.classList.add("hidden"),!D)return;let{position:dt}=x.boardingGaps[it],g=I.camera.eye;if(Math.hypot(g[0]-dt[0],g[2]-dt[1])>18)return;let V=I.project([dt[0],1.88,dt[1]]);if(!V||V.z>1||V.x<0||V.x>innerWidth||V.y<0||V.y>innerHeight)return;let F=Math.hypot(g[0]-dt[0],g[2]-dt[1]),q=Math.max(.52,Math.min(1,5/Math.max(F,1))),j=(d?146:176)*q/2+8;nt.style.setProperty("--ride-scale",q),nt.style.left=Math.max(j,Math.min(innerWidth-j,V.x))+"px",nt.style.top=V.y+"px",nt.classList.remove("hidden")})}function Ot(){if(!E)return;let D=b.mode==="overview",nt=b.labels&&b.mode!=="welcome"&&!b.sheet&&i("mapModal").classList.contains("hidden"),it=[];for(let g of x.markers){let V=Mt.get(g.id);if(V.classList.add("hidden"),!nt)continue;let F=Math.hypot(I.camera.eye[0]-g.marker[0],I.camera.eye[2]-g.marker[2]);if(!D&&F>24)continue;let q=I.project(g.marker);if(!(!q||q.z>1||q.x<35||q.x>innerWidth-35||q.y<112||q.y>innerHeight-90)){if(!D){let j=!1,Ct=I.camera.eye;for(let ot of x.buildings){if(ot.gym){let _t=Ct[0]>ot.x-ot.w/2&&Ct[0]<ot.x+ot.w/2&&Ct[2]>ot.z-ot.d/2&&Ct[2]<ot.z+ot.d/2,Pt=g.marker[0]>ot.x-ot.w/2&&g.marker[0]<ot.x+ot.w/2&&g.marker[2]>ot.z-ot.d/2&&g.marker[2]<ot.z+ot.d/2;_t!==Pt&&F>6&&(j=!0);continue}for(let _t=.1;_t<.96;_t+=.09){let Pt=Ct[0]+(g.marker[0]-Ct[0])*_t,Xt=Ct[2]+(g.marker[2]-Ct[2])*_t,de=Ct[1]+(g.marker[1]-Ct[1])*_t;if(Math.abs(Pt-ot.x)<ot.w/2&&Math.abs(Xt-ot.z)<ot.d/2&&de<ot.h){j=!0;break}}if(j)break}if(j)continue}it.push({r:g,el:V,pr:q,d:F})}}it.sort((g,V)=>g.d-V.d);let dt=[];for(let g of it){if(dt.length>=(D?20:d?4:7))break;let V=Math.min(d?160:220,45+g.r.short.length*10);dt.some(F=>Math.abs(F.pr.x-g.pr.x)<(F.width+V)/2+7&&Math.abs(F.pr.y-g.pr.y)<34)||(g.width=V,g.el.style.left=g.pr.x+"px",g.el.style.top=g.pr.y+"px",g.el.classList.remove("hidden"),dt.push(g))}}function Bt(){let D=r.exhibitorDescriptions?.かまにゃん;jt("かまにゃん","mascot"),i("sheetBody").innerHTML='<h3 class="detail-title">かまにゃん</h3><p class="detail-caption">鎌倉地域メディア「かまくらいふ」のキャラクターです。</p><div class="note-box">しらすの首輪に大仏のポシェットをつけています</div>'+(D?'<div class="detail-content">'+t(D)+"</div>":"")+G("かまにゃん")+'<p class="source-text">'+t(r.notice)+'</p><p class="source-text"><a href="https://kamakura-life.net/mascot/" target="_blank" rel="noopener noreferrer">かまくらいふの紹介ページ</a></p>'}function Jt(){let D=document.createElement("button");D.id="kamanyanLabel",D.className="world-label hidden",D.style.setProperty("--accent","#a97887"),D.setAttribute("aria-label","かまくらいふ かまにゃんの内容を見る"),D.innerHTML="<span>かまくらいふ　かまにゃん</span>",D.onclick=nt=>{nt.stopPropagation(),Bt()},i("labels").appendChild(D)}function Wt(){let D=i("kamanyanLabel");if(!D||(D.classList.add("hidden"),!b.labels||b.mode==="welcome"||b.mode==="ride"||b.sheet||!i("mapModal").classList.contains("hidden")))return;let nt=x.getKamanyan(),it=Math.hypot(I.camera.eye[0]-nt[0],I.camera.eye[2]-nt[2]);if(b.mode!=="overview"&&it>28)return;let dt=I.project(nt);!dt||dt.z>1||dt.x<80||dt.x>innerWidth-80||dt.y<110||dt.y>innerHeight-80||(D.style.left=dt.x+"px",D.style.top=dt.y+"px",D.classList.remove("hidden"))}function ue(){if(!E)return;let D=null,nt=4.8;if(b.mode==="walk")for(let F of x.markers){if(!F.approach)continue;let q=Math.hypot(b.pos[0]-F.approach[0],b.pos[1]-F.approach[1]);q<nt&&(nt=q,D=F)}b.nearest=D?.id||null;let it=D&&!b.sheet&&b.mode==="walk";i("nearby").classList.toggle("hidden",!it),it&&(i("nearCategory").textContent=D.id.includes("-")?D.id:D.id==="WC"?"WC":"案内",i("nearCategory").style.background=u[D.category],i("nearCaption").textContent=A(D),i("nearName").textContent=D.short);let[dt,g]=b.pos,V=dt>33&&dt<57.5&&g>2.6&&g<47?"体育館":g>48?"正門・キッチンカーエリア":g<-25?"モビリティー・であいの広場":dt<-13?"アウトドアーエリア":"校庭・にぎわいゾーン";i("locationText").textContent=b.mode==="overview"?"会場全体":b.mode==="ride"?"トゥクトゥクに乗車中":V}let se=new Map,Ce=0;i("scene").addEventListener("pointerdown",D=>{if(!(!E||b.sheet||b.mode==="welcome")){if(se.set(D.pointerId,[D.clientX,D.clientY]),se.size===2){Z.multi=!0;let nt=[...se.values()];Ce=Math.hypot(nt[0][0]-nt[1][0],nt[0][1]-nt[1][1])}Z.active=!0,Z.pid=D.pointerId,Z.x=D.clientX,Z.y=D.clientY,Z.moved=0,Z.multi=se.size>1,i("scene").setPointerCapture(D.pointerId)}}),i("scene").addEventListener("pointermove",D=>{if(!se.has(D.pointerId))return;if(se.set(D.pointerId,[D.clientX,D.clientY]),se.size===2&&b.mode==="overview"){let dt=[...se.values()],g=Math.hypot(dt[0][0]-dt[1][0],dt[0][1]-dt[1][1]);b.orbitDist=FestaGL.clamp(b.orbitDist*Ce/Math.max(1,g),25,190),Ce=g;return}if(!Z.active||Z.pid!==D.pointerId)return;let nt=D.clientX-Z.x,it=D.clientY-Z.y;if(Z.x=D.clientX,Z.y=D.clientY,Z.moved+=Math.abs(nt)+Math.abs(it),b.tour&&!b.tour.paused){if(Z.moved<=8)return;k()}b.mode==="overview"?(b.orbitYaw-=nt*.004,b.orbitPitch=FestaGL.clamp(b.orbitPitch+it*.003,.18,1.48)):(b.mode==="ride"?b.rideYaw+=nt*.004:b.yaw-=nt*.004,b.pitch=FestaGL.clamp(b.pitch+it*.0035,-1.15,1.15))});function qe(D){let nt=D.type==="pointerup"&&Z.pid===D.pointerId&&se.size===1&&!Z.multi&&Z.moved<=8;if(se.delete(D.pointerId),Z.pid===D.pointerId&&(Z.active=!1),!nt||b.mode==="welcome")return;let it=i("scene").getBoundingClientRect(),dt=D.clientX-it.left,g=D.clientY-it.top,{signs:V,base:F,details:q,roof:j}=x.meshes,Ct=I.signFace(dt,g,V,[F,q,j]),ot=Ct==null?null:x.selectableSigns.find(({first:_t,last:Pt})=>Ct>=_t&&Ct<Pt);if(ot){Et(ot.id);return}if(b.mode==="overview"){let _t=I.groundPoint(dt,g);_t&&Me([_t[0],_t[2]])}}i("scene").addEventListener("pointerup",qe),i("scene").addEventListener("pointercancel",qe),i("scene").addEventListener("contextmenu",D=>D.preventDefault()),i("scene").addEventListener("wheel",D=>{b.mode==="overview"&&(D.preventDefault(),b.orbitDist=FestaGL.clamp(b.orbitDist*Math.exp(D.deltaY*.001),25,190))},{passive:!1}),i("joystick").addEventListener("pointerdown",D=>{D.preventDefault(),k(),X.pid=D.pointerId,X.active=!0,i("joystick").setPointerCapture(D.pointerId),dn(D),b.auto&&(b.auto=!1,ae())}),i("joystick").addEventListener("pointermove",D=>{X.pid===D.pointerId&&dn(D)});function dn(D){let nt=i("joystick").getBoundingClientRect(),it=D.clientX-(nt.left+nt.width/2),dt=D.clientY-(nt.top+nt.height/2),g=Math.hypot(it,dt),V=37;g>V&&(it*=V/g,dt*=V/g),X.x=it/V,X.y=-dt/V,i("joyKnob").style.transform="translate("+it+"px,"+dt+"px)"}function Te(){X.x=X.y=0,X.active=!1,X.pid=null,i("joyKnob").style.transform=""}i("joystick").addEventListener("pointerup",Te),i("joystick").addEventListener("pointercancel",Te);function Ze(){for(let D in J)J[D]=!1;Te()}window.addEventListener("blur",Ze),document.addEventListener("visibilitychange",()=>{Ze(),U=0}),document.addEventListener("keydown",D=>{if(!E)return;let nt=/INPUT|SELECT|TEXTAREA/.test(document.activeElement?.tagName);if(D.code==="Escape"){D.preventDefault(),i("mapModal").classList.contains("hidden")?b.sheet?Rt():b.tour&&!b.tour.paused?k():Kt()||Xe():pe();return}if(D.code==="Tab"&&(b.sheet||!i("mapModal").classList.contains("hidden"))){let it=b.sheet?i("sheet"):i("mapModal"),dt=[...it.querySelectorAll("button,a,input,select")].filter(g=>!g.closest(".hidden")&&!g.disabled);if(dt.length){let g=dt[0],V=dt[dt.length-1];D.shiftKey&&document.activeElement===g?(V.focus(),D.preventDefault()):!D.shiftKey&&document.activeElement===V&&(g.focus(),D.preventDefault())}return}nt||b.sheet||!i("mapModal").classList.contains("hidden")||(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight"].includes(D.code)&&(D.preventDefault(),k(),J[D.code]=!0,b.auto&&(b.auto=!1,ae())),!D.repeat&&(D.code==="KeyE"&&b.nearest&&Et(b.nearest),D.code==="KeyV"&&gt(),D.code==="KeyM"&&te(),D.code==="KeyF"&&xt()))}),document.addEventListener("keyup",D=>J[D.code]=!1);function $e(D){if(!E||b.paused)return;let nt=b.tour;if(x.update(_,D,pt()?nt.paused.carDistance:void 0),nt&&!nt.paused)Gt(D);else if(b.mode==="walk"&&!b.sheet&&i("mapModal").classList.contains("hidden")){let g=(J.KeyW||J.ArrowUp?1:0)-(J.KeyS||J.ArrowDown?1:0)+X.y,V=(J.KeyD||J.ArrowRight?1:0)-(J.KeyA||J.ArrowLeft?1:0)+X.x,F=Math.hypot(g,V);if(F>.03){F>1&&(g/=F,V/=F);let j=J.KeyW||J.ArrowUp||J.KeyS||J.ArrowDown||J.KeyD||J.ArrowRight||J.KeyA||J.ArrowLeft?b.runMode||J.ShiftLeft||J.ShiftRight?4.6:3:2.3+2.3*Math.min(F,1);we((Math.sin(b.yaw)*g+Math.cos(b.yaw)*V)*j*D,(-Math.cos(b.yaw)*g+Math.sin(b.yaw)*V)*j*D)}else _e(D)}let it,dt;if(b.mode==="overview"){let g=b.orbitTarget,V=b.orbitDist,F=Math.cos(b.orbitPitch);it=[g[0]+Math.sin(b.orbitYaw)*V*F,Math.sin(b.orbitPitch)*V,g[2]+Math.cos(b.orbitYaw)*V*F],dt=[...g]}else if(b.mode==="welcome"){let g=C?0:Math.sin(_*.085)*.8;it=[2.2+g,2.2,11.5],dt=[15+g,2,-13]}else if(b.mode==="ride"){let g=x.getCar(),V=-.23;it=[g.x+Math.sin(g.yaw)*V,1.68,g.z+Math.cos(g.yaw)*V];let F=g.yaw+b.rideYaw;dt=[it[0]+Math.sin(F)*Math.cos(b.pitch),it[1]+Math.sin(b.pitch),it[2]+Math.cos(F)*Math.cos(b.pitch)],b.pos=[g.x,g.z]}else{let V=(Math.abs(X.x)+Math.abs(X.y)||J.KeyW||J.KeyA||J.KeyS||J.KeyD||b.auto||nt&&!nt.paused&&nt.step.kind==="walk")&&!C?Math.sin(b.distanceWalked*8)*.017:0;it=[b.pos[0],1.68+x.walkHeight(b.pos[0],b.pos[1])+V,b.pos[1]],dt=[it[0]+Math.sin(b.yaw)*Math.cos(b.pitch),it[1]+Math.sin(b.pitch),it[2]-Math.cos(b.yaw)*Math.cos(b.pitch)]}I.camera.near=b.mode==="overview"?1:.09,I.camera.eye=it,I.camera.target=dt}function ti(D){b.paused||(_+=D),$e(D)}function Tn(D){if(!E)return;if(b.testFreeze){requestAnimationFrame(Tn);return}let nt=U?Math.min(.12,(D-U)/1e3):.016;U=D,document.hidden||(ti(nt),I.render(_),Ft(),N+=nt,N>.13&&(N=0,Ot(),Wt(),ue(),wt(i("minimap")),!i("mapModal").classList.contains("hidden")&&!ie&&wt(i("bigmap"),!0))),requestAnimationFrame(Tn)}Qe.forEach((D,nt)=>D.onclick=it=>{it.stopPropagation(),tt(x.boardingGaps[nt])}),i("homeBtn").onclick=Ne,i("startBtn").onclick=()=>ge("field"),i("welcomeTour").onclick=Pe,i("tourBtn").onclick=Pe,i("startMain").onclick=()=>ge("GATE_MAIN"),i("startWest").onclick=()=>ge("GATE_WEST"),i("welcomeOverview").onclick=gt,i("searchBtn").onclick=xt,i("overviewBtn").onclick=gt,i("settingsBtn").onclick=mt,i("helpBtn").onclick=Tt,i("sheetClose").onclick=Rt,i("sheetScrim").onclick=Rt,i("sheetBack").onclick=xt,i("nearOpen").onclick=()=>b.nearest&&Et(b.nearest),i("mapBtn").onclick=te,i("mapClose").onclick=pe,ut(i("bigmap"),_n),ut(i("originalPlan"),W),i("speedToggle").onclick=()=>{b.runMode=!b.runMode,ae()},i("modeExit").onclick=Xe,i("modeAction").onclick=()=>{Kt()?Pe():b.mode==="overview"||b.mode==="ride"?Xe():b.path&&(b.auto=!b.auto,ae())},i("mapToggle").onclick=()=>{ie=!ie,i("bigmap").classList.toggle("hidden",ie),i("originalWrap").classList.toggle("hidden",!ie),i("mapToggle").textContent=ie?"会場マップに戻る":"ブース番号入り配置図を見る",i("mapExplain").textContent=ie?"ブース番号を押すと内容を表示。歩ける場所を押すと、その場所へ直接移動します。":"ブースの点を押すと内容を表示。歩ける場所を押すと、その場所へ直接移動します。",ie||wt(i("bigmap"),!0)},i("mapModal").onclick=D=>{D.target===i("mapModal")&&pe()},i("originalPlan").src="./assets/venue-map.svg?v=20261121.1",window.addEventListener("resize",()=>{I&&I.resize(),x&&(wt(i("minimap")),i("mapModal").classList.contains("hidden")||wt(i("bigmap"),!0))});try{await bt(),I=new FestaGL.Renderer(i("scene"),b.quality),x=await buildFestaWorld(I,y),await bt(),R=new FestaNavigation(x),Ut(),Jt(),y(1,"会場の準備ができました"),E=!0,window.__FESTA_TEST__={ready:!0,renderer:I,world:x,nav:R,state:b,byId:o,start:ge,teleport:Ue,routeTo:Ee,showDetail:Et,showSearch:xt,showSettings:mt,showHelp:Tt,showMap:te,toOverview:gt,ride:tt,exitMode:Xe,tick:$e,advance:ti,move:we,stopRoute:qt,closeSheet:Rt,get animTime(){return _},render:()=>{$e(.016),I.render(_),Ft(),Ot(),Wt(),ue(),wt(i("minimap"))}},$e(.016),I.render(0),i("loading").classList.add("hidden"),i("hud").classList.remove("hidden"),i("welcome").classList.remove("hidden"),requestAnimationFrame(Tn),i("scene").addEventListener("webglcontextlost",D=>{D.preventDefault(),b.paused=!0,$("描画が停止しました。ページを再読み込みすると再開できます。",3e4)})}catch(D){console.error(D),i("loading").innerHTML='<div class="loading-inner"><span class="eyebrow">3D表示を開始できませんでした</span><h1 style="font-size:26px">ブース情報は読めます。</h1><p>'+t(D.message)+'</p><p>WebGL 2対応のChrome・Edge・Safariで、このHTMLをブラウザとして開くと3D表示を利用できます。端末のグラフィックアクセラレーション設定も影響します。</p><button id="fallbackList" class="primary">参加団体一覧を読む</button><button id="fallbackPlan" class="secondary" style="margin-top:10px">配置図を見る</button></div>',i("fallbackList").onclick=()=>{xt(),i("sheet").style.zIndex=110,i("sheetScrim").style.zIndex=109},i("fallbackPlan").onclick=()=>{let nt=window.open();if(nt){nt.document.title="会場配置図";let it=nt.document.createElement("img");it.src="./assets/venue-map.svg",it.style.maxWidth="100%",nt.document.body.appendChild(it)}},window.__FESTA_TEST__={ready:!1,error:D.message}}})();})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
