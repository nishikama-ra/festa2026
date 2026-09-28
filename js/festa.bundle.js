(()=>{var Wc=0,pl=1,Xc=2;var Wi=1,qc=2,Es=3,Ri=0,xn=1,Ln=2,ni=0,As=1,ml=2,gl=3,xl=4,Yc=5;var Xi=100,Zc=101,Jc=102,$c=103,Kc=104,jc=200,Qc=201,th=202,eh=203,_l=204,yl=205,nh=206,ih=207,sh=208,rh=209,ah=210,oh=211,lh=212,ch=213,hh=214,ra=0,aa=1,oa=2,ps=3,la=4,ca=5,ha=6,ua=7,vl=0,uh=1,dh=2,Xn=0,Ml=1,bl=2,Sl=3,mr=4,wl=5,Tl=6,El=7;var Al=300,Ii=301,qi=302,Na=303,Ua=304,gr=306,ms=1e3,Kn=1001,da=1002,rn=1003,fh=1004;var xr=1005;var Qe=1006,Fa=1007;var ii=1008;var wn=1009,Cl=1010,Rl=1011,Cs=1012,Oa=1013,qn=1014,On=1015,Yn=1016,Ba=1017,za=1018,Rs=1020,Il=35902,Pl=35899,Ll=1021,Dl=1022,Bn=1023,jn=1026,Pi=1027,ka=1028,Va=1029,Li=1030,Ga=1031;var Ha=1033,_r=33776,yr=33777,vr=33778,Mr=33779,Wa=35840,Xa=35841,qa=35842,Ya=35843,Za=36196,Ja=37492,$a=37496,Ka=37488,ja=37489,br=37490,Qa=37491,to=37808,eo=37809,no=37810,io=37811,so=37812,ro=37813,ao=37814,oo=37815,lo=37816,co=37817,ho=37818,uo=37819,fo=37820,po=37821,mo=36492,go=36494,xo=36495,_o=36283,yo=36284,Sr=36285,vo=36286;var Ws=2300,fa=2301,ia=2302,al=2303,ol=2400,ll=2401,cl=2402;var ph=3200,Nl=3201;var Mo=0,mh=1,mi="",an="srgb",Xs="srgb-linear",qs="linear",Ue="srgb";var sa=7680;var gh=519,xh=512,_h=513,yh=514,bo=515,vh=516,Mh=517,So=518,bh=519,Ul=35044,wo=35048;var wr="300 es",Wn=2e3,gs=2001;function mu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function gu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ys(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sh(){let i=Ys("canvas");return i.style.display="block",i}var yc={},xs=null;function Zs(...i){let t="THREE."+i.shift();xs?xs("log",t,...i):console.log(t,...i)}function wh(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function he(...i){i=wh(i);let t="THREE."+i.shift();if(xs)xs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ce(...i){i=wh(i);let t="THREE."+i.shift();if(xs)xs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Vi(...i){let t=i.join(" ");t in yc||(yc[t]=!0,he(...i))}function Th(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Eh={[ra]:aa,[oa]:ha,[la]:ua,[ps]:ca,[aa]:ra,[ha]:oa,[ua]:la,[ca]:ps},Qn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,l=s.length;r<l;r++)s[r].call(this,t);t.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Oo=Math.PI/180,pa=180/Math.PI;function bi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[t&255]+cn[t>>8&255]+"-"+cn[t>>16&15|64]+cn[t>>24&255]+"-"+cn[e&63|128]+cn[e>>8&255]+"-"+cn[e>>16&255]+cn[e>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function Ce(i,t,e){return Math.max(t,Math.min(e,i))}function xu(i,t){return(i%t+t)%t}function Bo(i,t,e){return(1-e)*i+e*t}function $n(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ze(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var kl=class kl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ce(this.x,t.x,e.x),this.y=Ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ce(this.x,t,e),this.y=Ce(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,l=this.y-t.y;return this.x=r*n-l*s+t.x,this.y=r*s+l*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};kl.prototype.isVector2=!0;var Te=kl,ti=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,l,a){let h=n[s+0],u=n[s+1],m=n[s+2],x=n[s+3],f=r[l+0],_=r[l+1],w=r[l+2],I=r[l+3];if(x!==I||h!==f||u!==_||m!==w){let T=h*f+u*_+m*w+x*I;T<0&&(f=-f,_=-_,w=-w,I=-I,T=-T);let d=1-a;if(T<.9995){let b=Math.acos(T),C=Math.sin(b);d=Math.sin(d*b)/C,a=Math.sin(a*b)/C,h=h*d+f*a,u=u*d+_*a,m=m*d+w*a,x=x*d+I*a}else{h=h*d+f*a,u=u*d+_*a,m=m*d+w*a,x=x*d+I*a;let b=1/Math.sqrt(h*h+u*u+m*m+x*x);h*=b,u*=b,m*=b,x*=b}}t[e]=h,t[e+1]=u,t[e+2]=m,t[e+3]=x}static multiplyQuaternionsFlat(t,e,n,s,r,l){let a=n[s],h=n[s+1],u=n[s+2],m=n[s+3],x=r[l],f=r[l+1],_=r[l+2],w=r[l+3];return t[e]=a*w+m*x+h*_-u*f,t[e+1]=h*w+m*f+u*x-a*_,t[e+2]=u*w+m*_+a*f-h*x,t[e+3]=m*w-a*x-h*f-u*_,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,l=t._order,a=Math.cos,h=Math.sin,u=a(n/2),m=a(s/2),x=a(r/2),f=h(n/2),_=h(s/2),w=h(r/2);switch(l){case"XYZ":this._x=f*m*x+u*_*w,this._y=u*_*x-f*m*w,this._z=u*m*w+f*_*x,this._w=u*m*x-f*_*w;break;case"YXZ":this._x=f*m*x+u*_*w,this._y=u*_*x-f*m*w,this._z=u*m*w-f*_*x,this._w=u*m*x+f*_*w;break;case"ZXY":this._x=f*m*x-u*_*w,this._y=u*_*x+f*m*w,this._z=u*m*w+f*_*x,this._w=u*m*x-f*_*w;break;case"ZYX":this._x=f*m*x-u*_*w,this._y=u*_*x+f*m*w,this._z=u*m*w-f*_*x,this._w=u*m*x+f*_*w;break;case"YZX":this._x=f*m*x+u*_*w,this._y=u*_*x+f*m*w,this._z=u*m*w-f*_*x,this._w=u*m*x-f*_*w;break;case"XZY":this._x=f*m*x-u*_*w,this._y=u*_*x-f*m*w,this._z=u*m*w+f*_*x,this._w=u*m*x+f*_*w;break;default:he("Quaternion: .setFromEuler() encountered an unknown order: "+l)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],l=e[1],a=e[5],h=e[9],u=e[2],m=e[6],x=e[10],f=n+a+x;if(f>0){let _=.5/Math.sqrt(f+1);this._w=.25/_,this._x=(m-h)*_,this._y=(r-u)*_,this._z=(l-s)*_}else if(n>a&&n>x){let _=2*Math.sqrt(1+n-a-x);this._w=(m-h)/_,this._x=.25*_,this._y=(s+l)/_,this._z=(r+u)/_}else if(a>x){let _=2*Math.sqrt(1+a-n-x);this._w=(r-u)/_,this._x=(s+l)/_,this._y=.25*_,this._z=(h+m)/_}else{let _=2*Math.sqrt(1+x-n-a);this._w=(l-s)/_,this._x=(r+u)/_,this._y=(h+m)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,l=t._w,a=e._x,h=e._y,u=e._z,m=e._w;return this._x=n*m+l*a+s*u-r*h,this._y=s*m+l*h+r*a-n*u,this._z=r*m+l*u+n*h-s*a,this._w=l*m-n*a-s*h-r*u,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,l=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,l=-l,a=-a);let h=1-e;if(a<.9995){let u=Math.acos(a),m=Math.sin(u);h=Math.sin(h*u)/m,e=Math.sin(e*u)/m,this._x=this._x*h+n*e,this._y=this._y*h+s*e,this._z=this._z*h+r*e,this._w=this._w*h+l*e,this._onChangeCallback()}else this._x=this._x*h+n*e,this._y=this._y*h+s*e,this._z=this._z*h+r*e,this._w=this._w*h+l*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Vl=class Vl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,l=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*l,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*l,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*l,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,l=t.y,a=t.z,h=t.w,u=2*(l*s-a*n),m=2*(a*e-r*s),x=2*(r*n-l*e);return this.x=e+h*u+l*x-a*m,this.y=n+h*m+a*u-r*x,this.z=s+h*x+r*m-l*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ce(this.x,t.x,e.x),this.y=Ce(this.y,t.y,e.y),this.z=Ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ce(this.x,t,e),this.y=Ce(this.y,t,e),this.z=Ce(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,l=e.x,a=e.y,h=e.z;return this.x=s*h-r*a,this.y=r*l-n*h,this.z=n*a-s*l,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return zo.copy(this).projectOnVector(t),this.sub(zo)}reflect(t){return this.sub(zo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Vl.prototype.isVector3=!0;var ht=Vl,zo=new ht,vc=new ti,Gl=class Gl{constructor(t,e,n,s,r,l,a,h,u){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,l,a,h,u)}set(t,e,n,s,r,l,a,h,u){let m=this.elements;return m[0]=t,m[1]=s,m[2]=a,m[3]=e,m[4]=r,m[5]=h,m[6]=n,m[7]=l,m[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,l=n[0],a=n[3],h=n[6],u=n[1],m=n[4],x=n[7],f=n[2],_=n[5],w=n[8],I=s[0],T=s[3],d=s[6],b=s[1],C=s[4],v=s[7],c=s[2],S=s[5],D=s[8];return r[0]=l*I+a*b+h*c,r[3]=l*T+a*C+h*S,r[6]=l*d+a*v+h*D,r[1]=u*I+m*b+x*c,r[4]=u*T+m*C+x*S,r[7]=u*d+m*v+x*D,r[2]=f*I+_*b+w*c,r[5]=f*T+_*C+w*S,r[8]=f*d+_*v+w*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],l=t[4],a=t[5],h=t[6],u=t[7],m=t[8];return e*l*m-e*a*u-n*r*m+n*a*h+s*r*u-s*l*h}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],l=t[4],a=t[5],h=t[6],u=t[7],m=t[8],x=m*l-a*u,f=a*h-m*r,_=u*r-l*h,w=e*x+n*f+s*_;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);let I=1/w;return t[0]=x*I,t[1]=(s*u-m*n)*I,t[2]=(a*n-s*l)*I,t[3]=f*I,t[4]=(m*e-s*h)*I,t[5]=(s*r-a*e)*I,t[6]=_*I,t[7]=(n*h-u*e)*I,t[8]=(l*e-n*r)*I,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,l,a){let h=Math.cos(r),u=Math.sin(r);return this.set(n*h,n*u,-n*(h*l+u*a)+l+t,-s*u,s*h,-s*(-u*l+h*a)+a+e,0,0,1),this}scale(t,e){return Vi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ko.makeScale(t,e)),this}rotate(t){return Vi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ko.makeRotation(-t)),this}translate(t,e){return Vi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ko.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Gl.prototype.isMatrix3=!0;var de=Gl,ko=new de,Mc=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bc=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _u(){let i={enabled:!0,workingColorSpace:Xs,spaces:{},convert:function(s,r,l){return this.enabled===!1||r===l||!r||!l||(this.spaces[r].transfer===Ue&&(s.r=fi(s.r),s.g=fi(s.g),s.b=fi(s.b)),this.spaces[r].primaries!==this.spaces[l].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Ue&&(s.r=fs(s.r),s.g=fs(s.g),s.b=fs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===mi?qs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,l){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Vi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Vi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Xs]:{primaries:t,whitePoint:n,transfer:qs,toXYZ:Mc,fromXYZ:bc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:t,whitePoint:n,transfer:Ue,toXYZ:Mc,fromXYZ:bc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:an}}}),i}var Ee=_u();function fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Qi,ma=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Qi===void 0&&(Qi=Ys("canvas")),Qi.width=t.width,Qi.height=t.height;let s=Qi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Qi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ys("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let l=0;l<r.length;l++)r[l]=fi(r[l]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(fi(e[n]/255)*255):e[n]=fi(e[n]);return{data:e,width:t.width,height:t.height}}else return he("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},yu=0,_s=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=bi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let l=0,a=s.length;l<a;l++)s[l].isDataTexture?r.push(Vo(s[l].image)):r.push(Vo(s[l]))}else r=Vo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Vo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ma.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(he("Texture: Unable to serialize Texture."),{})}var vu=0,Go=new ht,bn=class i extends Qn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Kn,s=Kn,r=Qe,l=ii,a=Bn,h=wn,u=i.DEFAULT_ANISOTROPY,m=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=bi(),this.name="",this.source=new _s(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=l,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=h,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Go).x}get height(){return this.source.getSize(Go).y}get depth(){return this.source.getSize(Go).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){he(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){he(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Al)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ms:t.x=t.x-Math.floor(t.x);break;case Kn:t.x=t.x<0?0:1;break;case da:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ms:t.y=t.y-Math.floor(t.y);break;case Kn:t.y=t.y<0?0:1;break;case da:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=Al;bn.DEFAULT_ANISOTROPY=1;var Hl=class Hl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,l=t.elements;return this.x=l[0]*e+l[4]*n+l[8]*s+l[12]*r,this.y=l[1]*e+l[5]*n+l[9]*s+l[13]*r,this.z=l[2]*e+l[6]*n+l[10]*s+l[14]*r,this.w=l[3]*e+l[7]*n+l[11]*s+l[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,h=t.elements,u=h[0],m=h[4],x=h[8],f=h[1],_=h[5],w=h[9],I=h[2],T=h[6],d=h[10];if(Math.abs(m-f)<.01&&Math.abs(x-I)<.01&&Math.abs(w-T)<.01){if(Math.abs(m+f)<.1&&Math.abs(x+I)<.1&&Math.abs(w+T)<.1&&Math.abs(u+_+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(u+1)/2,v=(_+1)/2,c=(d+1)/2,S=(m+f)/4,D=(x+I)/4,g=(w+T)/4;return C>v&&C>c?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=S/n,r=D/n):v>c?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=S/s,r=g/s):c<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(c),n=D/r,s=g/r),this.set(n,s,r,e),this}let b=Math.sqrt((T-w)*(T-w)+(x-I)*(x-I)+(f-m)*(f-m));return Math.abs(b)<.001&&(b=1),this.x=(T-w)/b,this.y=(x-I)/b,this.z=(f-m)/b,this.w=Math.acos((u+_+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ce(this.x,t.x,e.x),this.y=Ce(this.y,t.y,e.y),this.z=Ce(this.z,t.z,e.z),this.w=Ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ce(this.x,t,e),this.y=Ce(this.y,t,e),this.z=Ce(this.z,t,e),this.w=Ce(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Hl.prototype.isVector4=!0;var Xe=Hl,ga=class extends Qn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Xe(0,0,t,e),this.scissorTest=!1,this.viewport=new Xe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new bn(s),l=n.count;for(let a=0;a<l;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new _s(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sn=class extends ga{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Gi=class extends bn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var xa=class extends bn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Da=class Da{constructor(t,e,n,s,r,l,a,h,u,m,x,f,_,w,I,T){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,l,a,h,u,m,x,f,_,w,I,T)}set(t,e,n,s,r,l,a,h,u,m,x,f,_,w,I,T){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=l,d[9]=a,d[13]=h,d[2]=u,d[6]=m,d[10]=x,d[14]=f,d[3]=_,d[7]=w,d[11]=I,d[15]=T,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Da().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ts.setFromMatrixColumn(t,0).length(),r=1/ts.setFromMatrixColumn(t,1).length(),l=1/ts.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*l,e[9]=n[9]*l,e[10]=n[10]*l,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,l=Math.cos(n),a=Math.sin(n),h=Math.cos(s),u=Math.sin(s),m=Math.cos(r),x=Math.sin(r);if(t.order==="XYZ"){let f=l*m,_=l*x,w=a*m,I=a*x;e[0]=h*m,e[4]=-h*x,e[8]=u,e[1]=_+w*u,e[5]=f-I*u,e[9]=-a*h,e[2]=I-f*u,e[6]=w+_*u,e[10]=l*h}else if(t.order==="YXZ"){let f=h*m,_=h*x,w=u*m,I=u*x;e[0]=f+I*a,e[4]=w*a-_,e[8]=l*u,e[1]=l*x,e[5]=l*m,e[9]=-a,e[2]=_*a-w,e[6]=I+f*a,e[10]=l*h}else if(t.order==="ZXY"){let f=h*m,_=h*x,w=u*m,I=u*x;e[0]=f-I*a,e[4]=-l*x,e[8]=w+_*a,e[1]=_+w*a,e[5]=l*m,e[9]=I-f*a,e[2]=-l*u,e[6]=a,e[10]=l*h}else if(t.order==="ZYX"){let f=l*m,_=l*x,w=a*m,I=a*x;e[0]=h*m,e[4]=w*u-_,e[8]=f*u+I,e[1]=h*x,e[5]=I*u+f,e[9]=_*u-w,e[2]=-u,e[6]=a*h,e[10]=l*h}else if(t.order==="YZX"){let f=l*h,_=l*u,w=a*h,I=a*u;e[0]=h*m,e[4]=I-f*x,e[8]=w*x+_,e[1]=x,e[5]=l*m,e[9]=-a*m,e[2]=-u*m,e[6]=_*x+w,e[10]=f-I*x}else if(t.order==="XZY"){let f=l*h,_=l*u,w=a*h,I=a*u;e[0]=h*m,e[4]=-x,e[8]=u*m,e[1]=f*x+I,e[5]=l*m,e[9]=_*x-w,e[2]=w*x-_,e[6]=a*m,e[10]=I*x+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mu,t,bu)}lookAt(t,e,n){let s=this.elements;return En.subVectors(t,e),En.lengthSq()===0&&(En.z=1),En.normalize(),gi.crossVectors(n,En),gi.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),gi.crossVectors(n,En)),gi.normalize(),Or.crossVectors(En,gi),s[0]=gi.x,s[4]=Or.x,s[8]=En.x,s[1]=gi.y,s[5]=Or.y,s[9]=En.y,s[2]=gi.z,s[6]=Or.z,s[10]=En.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,l=n[0],a=n[4],h=n[8],u=n[12],m=n[1],x=n[5],f=n[9],_=n[13],w=n[2],I=n[6],T=n[10],d=n[14],b=n[3],C=n[7],v=n[11],c=n[15],S=s[0],D=s[4],g=s[8],L=s[12],k=s[1],K=s[5],q=s[9],nt=s[13],H=s[2],tt=s[6],pt=s[10],ut=s[14],vt=s[3],dt=s[7],gt=s[11],st=s[15];return r[0]=l*S+a*k+h*H+u*vt,r[4]=l*D+a*K+h*tt+u*dt,r[8]=l*g+a*q+h*pt+u*gt,r[12]=l*L+a*nt+h*ut+u*st,r[1]=m*S+x*k+f*H+_*vt,r[5]=m*D+x*K+f*tt+_*dt,r[9]=m*g+x*q+f*pt+_*gt,r[13]=m*L+x*nt+f*ut+_*st,r[2]=w*S+I*k+T*H+d*vt,r[6]=w*D+I*K+T*tt+d*dt,r[10]=w*g+I*q+T*pt+d*gt,r[14]=w*L+I*nt+T*ut+d*st,r[3]=b*S+C*k+v*H+c*vt,r[7]=b*D+C*K+v*tt+c*dt,r[11]=b*g+C*q+v*pt+c*gt,r[15]=b*L+C*nt+v*ut+c*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],l=t[1],a=t[5],h=t[9],u=t[13],m=t[2],x=t[6],f=t[10],_=t[14],w=t[3],I=t[7],T=t[11],d=t[15],b=h*_-u*f,C=a*_-u*x,v=a*f-h*x,c=l*_-u*m,S=l*f-h*m,D=l*x-a*m;return e*(I*b-T*C+d*v)-n*(w*b-T*c+d*S)+s*(w*C-I*c+d*D)-r*(w*v-I*S+T*D)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],l=t[5],a=t[9],h=t[2],u=t[6],m=t[10];return e*(l*m-a*u)-n*(r*m-a*h)+s*(r*u-l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],l=t[4],a=t[5],h=t[6],u=t[7],m=t[8],x=t[9],f=t[10],_=t[11],w=t[12],I=t[13],T=t[14],d=t[15],b=e*a-n*l,C=e*h-s*l,v=e*u-r*l,c=n*h-s*a,S=n*u-r*a,D=s*u-r*h,g=m*I-x*w,L=m*T-f*w,k=m*d-_*w,K=x*T-f*I,q=x*d-_*I,nt=f*d-_*T,H=b*nt-C*q+v*K+c*k-S*L+D*g;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let tt=1/H;return t[0]=(a*nt-h*q+u*K)*tt,t[1]=(s*q-n*nt-r*K)*tt,t[2]=(I*D-T*S+d*c)*tt,t[3]=(f*S-x*D-_*c)*tt,t[4]=(h*k-l*nt-u*L)*tt,t[5]=(e*nt-s*k+r*L)*tt,t[6]=(T*v-w*D-d*C)*tt,t[7]=(m*D-f*v+_*C)*tt,t[8]=(l*q-a*k+u*g)*tt,t[9]=(n*k-e*q-r*g)*tt,t[10]=(w*S-I*v+d*b)*tt,t[11]=(x*v-m*S-_*b)*tt,t[12]=(a*L-l*K-h*g)*tt,t[13]=(e*K-n*L+s*g)*tt,t[14]=(I*C-w*c-T*b)*tt,t[15]=(m*c-x*C+f*b)*tt,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,l=t.x,a=t.y,h=t.z,u=r*l,m=r*a;return this.set(u*l+n,u*a-s*h,u*h+s*a,0,u*a+s*h,m*a+n,m*h-s*l,0,u*h-s*a,m*h+s*l,r*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,l){return this.set(1,n,r,0,t,1,l,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,l=e._y,a=e._z,h=e._w,u=r+r,m=l+l,x=a+a,f=r*u,_=r*m,w=r*x,I=l*m,T=l*x,d=a*x,b=h*u,C=h*m,v=h*x,c=n.x,S=n.y,D=n.z;return s[0]=(1-(I+d))*c,s[1]=(_+v)*c,s[2]=(w-C)*c,s[3]=0,s[4]=(_-v)*S,s[5]=(1-(f+d))*S,s[6]=(T+b)*S,s[7]=0,s[8]=(w+C)*D,s[9]=(T-b)*D,s[10]=(1-(f+I))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let l=ts.set(s[0],s[1],s[2]).length(),a=ts.set(s[4],s[5],s[6]).length(),h=ts.set(s[8],s[9],s[10]).length();r<0&&(l=-l),Vn.copy(this);let u=1/l,m=1/a,x=1/h;return Vn.elements[0]*=u,Vn.elements[1]*=u,Vn.elements[2]*=u,Vn.elements[4]*=m,Vn.elements[5]*=m,Vn.elements[6]*=m,Vn.elements[8]*=x,Vn.elements[9]*=x,Vn.elements[10]*=x,e.setFromRotationMatrix(Vn),n.x=l,n.y=a,n.z=h,this}makePerspective(t,e,n,s,r,l,a=Wn,h=!1){let u=this.elements,m=2*r/(e-t),x=2*r/(n-s),f=(e+t)/(e-t),_=(n+s)/(n-s),w,I;if(h)w=r/(l-r),I=l*r/(l-r);else if(a===Wn)w=-(l+r)/(l-r),I=-2*l*r/(l-r);else if(a===gs)w=-l/(l-r),I=-l*r/(l-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=m,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=x,u[9]=_,u[13]=0,u[2]=0,u[6]=0,u[10]=w,u[14]=I,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,n,s,r,l,a=Wn,h=!1){let u=this.elements,m=2/(e-t),x=2/(n-s),f=-(e+t)/(e-t),_=-(n+s)/(n-s),w,I;if(h)w=1/(l-r),I=l/(l-r);else if(a===Wn)w=-2/(l-r),I=-(l+r)/(l-r);else if(a===gs)w=-1/(l-r),I=-r/(l-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=m,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=x,u[9]=0,u[13]=_,u[2]=0,u[6]=0,u[10]=w,u[14]=I,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Da.prototype.isMatrix4=!0;var Ne=Da,ts=new ht,Vn=new Ne,Mu=new ht(0,0,0),bu=new ht(1,1,1),gi=new ht,Or=new ht,En=new ht,Sc=new Ne,wc=new ti,pi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],l=s[4],a=s[8],h=s[1],u=s[5],m=s[9],x=s[2],f=s[6],_=s[10];switch(e){case"XYZ":this._y=Math.asin(Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-m,_),this._z=Math.atan2(-l,r)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(a,_),this._z=Math.atan2(h,u)):(this._y=Math.atan2(-x,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-x,_),this._z=Math.atan2(-l,u)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-Ce(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(f,_),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-l,u));break;case"YZX":this._z=Math.asin(Ce(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,u),this._y=Math.atan2(-x,r)):(this._x=0,this._y=Math.atan2(a,_));break;case"XZY":this._z=Math.asin(-Ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-m,_),this._y=0);break;default:he("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Sc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Sc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wc.setFromEuler(this),this.setFromQuaternion(wc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pi.DEFAULT_ORDER="XYZ";var ys=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Su=0,Tc=new ht,es=new ti,li=new Ne,Br=new ht,Bs=new ht,wu=new ht,Tu=new ti,Ec=new ht(1,0,0),Ac=new ht(0,1,0),Cc=new ht(0,0,1),Rc={type:"added"},Eu={type:"removed"},ns={type:"childadded",child:null},Ho={type:"childremoved",child:null},dn=class i extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new ht,e=new pi,n=new ti,s=new ht(1,1,1);function r(){n.setFromEuler(e,!1)}function l(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ne},normalMatrix:{value:new de}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ys,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.multiply(es),this}rotateOnWorldAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.premultiply(es),this}rotateX(t){return this.rotateOnAxis(Ec,t)}rotateY(t){return this.rotateOnAxis(Ac,t)}rotateZ(t){return this.rotateOnAxis(Cc,t)}translateOnAxis(t,e){return Tc.copy(t).applyQuaternion(this.quaternion),this.position.add(Tc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ec,t)}translateY(t){return this.translateOnAxis(Ac,t)}translateZ(t){return this.translateOnAxis(Cc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Br.copy(t):Br.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(Bs,Br,this.up):li.lookAt(Br,Bs,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),es.setFromRotationMatrix(li),this.quaternion.premultiply(es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rc),ns.child=t,this.dispatchEvent(ns),ns.child=null):ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Eu),Ho.child=t,this.dispatchEvent(Ho),Ho.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),li.multiply(t.parent.matrixWorld)),t.applyMatrix4(li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rc),ns.child=t,this.dispatchEvent(ns),ns.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let l=this.children[n].getObjectByProperty(t,e);if(l!==void 0)return l}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,l=s.length;r<l;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,t,wu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,Tu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let l=0,a=r.length;l<a;l++)r[l].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,h){return a[h.uuid]===void 0&&(a[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let h=a.shapes;if(Array.isArray(h))for(let u=0,m=h.length;u<m;u++){let x=h[u];r(t.shapes,x)}else r(t.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let h=0,u=this.material.length;h<u;h++)a.push(r(t.materials,this.material[h]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let h=this.animations[a];s.animations.push(r(t.animations,h))}}if(e){let a=l(t.geometries),h=l(t.materials),u=l(t.textures),m=l(t.images),x=l(t.shapes),f=l(t.skeletons),_=l(t.animations),w=l(t.nodes);a.length>0&&(n.geometries=a),h.length>0&&(n.materials=h),u.length>0&&(n.textures=u),m.length>0&&(n.images=m),x.length>0&&(n.shapes=x),f.length>0&&(n.skeletons=f),_.length>0&&(n.animations=_),w.length>0&&(n.nodes=w)}return n.object=s,n;function l(a){let h=[];for(let u in a){let m=a[u];delete m.metadata,h.push(m)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};dn.DEFAULT_UP=new ht(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ki=class extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Au={type:"move"},vs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ki,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ki,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ht,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ht),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ki,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ht,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ht,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,l=null,a=this._targetRay,h=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){l=!0;for(let I of t.hand.values()){let T=e.getJointPose(I,n),d=this._getHandJoint(u,I);T!==null&&(d.matrix.fromArray(T.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=T.radius),d.visible=T!==null}let m=u.joints["index-finger-tip"],x=u.joints["thumb-tip"],f=m.position.distanceTo(x.position),_=.02,w=.005;u.inputState.pinching&&f>_+w?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&f<=_-w&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Au)))}return a!==null&&(a.visible=s!==null),h!==null&&(h.visible=r!==null),u!==null&&(u.visible=l!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ki;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ah={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},zr={h:0,s:0,l:0};function Wo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var _e=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=an){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ee.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Ee.workingColorSpace){if(t=xu(t,1),e=Ce(e,0,1),n=Ce(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,l=2*n-r;this.r=Wo(l,r,t+1/3),this.g=Wo(l,r,t),this.b=Wo(l,r,t-1/3)}return Ee.colorSpaceToWorking(this,s),this}setStyle(t,e=an){function n(r){r!==void 0&&parseFloat(r)<1&&he("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,l=s[1],a=s[2];switch(l){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:he("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],l=r.length;if(l===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(l===6)return this.setHex(parseInt(r,16),e);he("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=an){let n=Ah[t.toLowerCase()];return n!==void 0?this.setHex(n,e):he("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fi(t.r),this.g=fi(t.g),this.b=fi(t.b),this}copyLinearToSRGB(t){return this.r=fs(t.r),this.g=fs(t.g),this.b=fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=an){return Ee.workingToColorSpace(hn.copy(this),t),Math.round(Ce(hn.r*255,0,255))*65536+Math.round(Ce(hn.g*255,0,255))*256+Math.round(Ce(hn.b*255,0,255))}getHexString(t=an){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ee.workingColorSpace){Ee.workingToColorSpace(hn.copy(this),e);let n=hn.r,s=hn.g,r=hn.b,l=Math.max(n,s,r),a=Math.min(n,s,r),h,u,m=(a+l)/2;if(a===l)h=0,u=0;else{let x=l-a;switch(u=m<=.5?x/(l+a):x/(2-l-a),l){case n:h=(s-r)/x+(s<r?6:0);break;case s:h=(r-n)/x+2;break;case r:h=(n-s)/x+4;break}h/=6}return t.h=h,t.s=u,t.l=m,t}getRGB(t,e=Ee.workingColorSpace){return Ee.workingToColorSpace(hn.copy(this),e),t.r=hn.r,t.g=hn.g,t.b=hn.b,t}getStyle(t=an){Ee.workingToColorSpace(hn.copy(this),t);let e=hn.r,n=hn.g,s=hn.b;return t!==an?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(xi),this.setHSL(xi.h+t,xi.s+e,xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xi),t.getHSL(zr);let n=Bo(xi.h,zr.h,e),s=Bo(xi.s,zr.s,e),r=Bo(xi.l,zr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new _e;_e.NAMES=Ah;var Js=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new _e(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},$s=class extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pi,this.environmentIntensity=1,this.environmentRotation=new pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Gn=new ht,ci=new ht,Xo=new ht,hi=new ht,is=new ht,ss=new ht,Ic=new ht,qo=new ht,Yo=new ht,Zo=new ht,Jo=new Xe,$o=new Xe,Ko=new Xe,Mi=class i{constructor(t=new ht,e=new ht,n=new ht){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Gn.subVectors(t,e),s.cross(Gn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Gn.subVectors(s,e),ci.subVectors(n,e),Xo.subVectors(t,e);let l=Gn.dot(Gn),a=Gn.dot(ci),h=Gn.dot(Xo),u=ci.dot(ci),m=ci.dot(Xo),x=l*u-a*a;if(x===0)return r.set(0,0,0),null;let f=1/x,_=(u*h-a*m)*f,w=(l*m-a*h)*f;return r.set(1-_-w,w,_)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(t,e,n,s,r,l,a,h){return this.getBarycoord(t,e,n,s,hi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,hi.x),h.addScaledVector(l,hi.y),h.addScaledVector(a,hi.z),h)}static getInterpolatedAttribute(t,e,n,s,r,l){return Jo.setScalar(0),$o.setScalar(0),Ko.setScalar(0),Jo.fromBufferAttribute(t,e),$o.fromBufferAttribute(t,n),Ko.fromBufferAttribute(t,s),l.setScalar(0),l.addScaledVector(Jo,r.x),l.addScaledVector($o,r.y),l.addScaledVector(Ko,r.z),l}static isFrontFacing(t,e,n,s){return Gn.subVectors(n,e),ci.subVectors(t,e),Gn.cross(ci).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Gn.cross(ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,l,a;is.subVectors(s,n),ss.subVectors(r,n),qo.subVectors(t,n);let h=is.dot(qo),u=ss.dot(qo);if(h<=0&&u<=0)return e.copy(n);Yo.subVectors(t,s);let m=is.dot(Yo),x=ss.dot(Yo);if(m>=0&&x<=m)return e.copy(s);let f=h*x-m*u;if(f<=0&&h>=0&&m<=0)return l=h/(h-m),e.copy(n).addScaledVector(is,l);Zo.subVectors(t,r);let _=is.dot(Zo),w=ss.dot(Zo);if(w>=0&&_<=w)return e.copy(r);let I=_*u-h*w;if(I<=0&&u>=0&&w<=0)return a=u/(u-w),e.copy(n).addScaledVector(ss,a);let T=m*w-_*x;if(T<=0&&x-m>=0&&_-w>=0)return Ic.subVectors(r,s),a=(x-m)/(x-m+(_-w)),e.copy(s).addScaledVector(Ic,a);let d=1/(T+I+f);return l=I*d,a=f*d,e.copy(n).addScaledVector(is,l).addScaledVector(ss,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ei=class{constructor(t=new ht(1/0,1/0,1/0),e=new ht(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let l=0,a=r.count;l<a;l++)t.isMesh===!0?t.getVertexPosition(l,Hn):Hn.fromBufferAttribute(r,l),Hn.applyMatrix4(t.matrixWorld),this.expandByPoint(Hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),kr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),kr.copy(n.boundingBox)),kr.applyMatrix4(t.matrixWorld),this.union(kr)}let s=t.children;for(let r=0,l=s.length;r<l;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hn),Hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zs),Vr.subVectors(this.max,zs),rs.subVectors(t.a,zs),as.subVectors(t.b,zs),os.subVectors(t.c,zs),_i.subVectors(as,rs),yi.subVectors(os,as),Fi.subVectors(rs,os);let e=[0,-_i.z,_i.y,0,-yi.z,yi.y,0,-Fi.z,Fi.y,_i.z,0,-_i.x,yi.z,0,-yi.x,Fi.z,0,-Fi.x,-_i.y,_i.x,0,-yi.y,yi.x,0,-Fi.y,Fi.x,0];return!jo(e,rs,as,os,Vr)||(e=[1,0,0,0,1,0,0,0,1],!jo(e,rs,as,os,Vr))?!1:(Gr.crossVectors(_i,yi),e=[Gr.x,Gr.y,Gr.z],jo(e,rs,as,os,Vr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ui=[new ht,new ht,new ht,new ht,new ht,new ht,new ht,new ht],Hn=new ht,kr=new ei,rs=new ht,as=new ht,os=new ht,_i=new ht,yi=new ht,Fi=new ht,zs=new ht,Vr=new ht,Gr=new ht,Oi=new ht;function jo(i,t,e,n,s){for(let r=0,l=i.length-3;r<=l;r+=3){Oi.fromArray(i,r);let a=s.x*Math.abs(Oi.x)+s.y*Math.abs(Oi.y)+s.z*Math.abs(Oi.z),h=t.dot(Oi),u=e.dot(Oi),m=n.dot(Oi);if(Math.max(-Math.max(h,u,m),Math.min(h,u,m))>a)return!1}return!0}var Ke=new ht,Hr=new Te,Cu=0,vn=class extends Qn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ul,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Hr.fromBufferAttribute(this,e),Hr.applyMatrix3(t),this.setXY(e,Hr.x,Hr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix3(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=$n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$n(e,this.array)),e}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$n(e,this.array)),e}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$n(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$n(e,this.array)),e}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),s=ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),s=ze(s,this.array),r=ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ks=class extends vn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var js=class extends vn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Mn=class extends vn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ru=new ei,ks=new ht,Qo=new ht,Si=class{constructor(t=new ht,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ru.setFromPoints(t).getCenter(n);let s=0;for(let r=0,l=t.length;r<l;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ks.subVectors(t,this.center);let e=ks.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ks,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ks.copy(t.center).add(Qo)),this.expandByPoint(ks.copy(t.center).sub(Qo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Iu=0,Fn=new Ne,tl=new dn,ls=new ht,An=new ei,Vs=new ei,sn=new ht,Rn=class i extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mu(t)?js:Ks)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new de().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Fn.makeRotationFromQuaternion(t),this.applyMatrix4(Fn),this}rotateX(t){return Fn.makeRotationX(t),this.applyMatrix4(Fn),this}rotateY(t){return Fn.makeRotationY(t),this.applyMatrix4(Fn),this}rotateZ(t){return Fn.makeRotationZ(t),this.applyMatrix4(Fn),this}translate(t,e,n){return Fn.makeTranslation(t,e,n),this.applyMatrix4(Fn),this}scale(t,e,n){return Fn.makeScale(t,e,n),this.applyMatrix4(Fn),this}lookAt(t){return tl.lookAt(t),tl.updateMatrix(),this.applyMatrix4(tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let l=t[s];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new Mn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&he("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ht(-1/0,-1/0,-1/0),new ht(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];An.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ht,1/0);return}if(t){let n=this.boundingSphere.center;if(An.setFromBufferAttribute(t),e)for(let r=0,l=e.length;r<l;r++){let a=e[r];Vs.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(An.min,Vs.min),An.expandByPoint(sn),sn.addVectors(An.max,Vs.max),An.expandByPoint(sn)):(An.expandByPoint(Vs.min),An.expandByPoint(Vs.max))}An.getCenter(n);let s=0;for(let r=0,l=t.count;r<l;r++)sn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(sn));if(e)for(let r=0,l=e.length;r<l;r++){let a=e[r],h=this.morphTargetsRelative;for(let u=0,m=a.count;u<m;u++)sn.fromBufferAttribute(a,u),h&&(ls.fromBufferAttribute(t,u),sn.add(ls)),s=Math.max(s,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,l=this.getAttribute("tangent");(l===void 0||l.count!==n.count)&&(l=new vn(new Float32Array(4*n.count),4),this.setAttribute("tangent",l));let a=[],h=[];for(let g=0;g<n.count;g++)a[g]=new ht,h[g]=new ht;let u=new ht,m=new ht,x=new ht,f=new Te,_=new Te,w=new Te,I=new ht,T=new ht;function d(g,L,k){u.fromBufferAttribute(n,g),m.fromBufferAttribute(n,L),x.fromBufferAttribute(n,k),f.fromBufferAttribute(r,g),_.fromBufferAttribute(r,L),w.fromBufferAttribute(r,k),m.sub(u),x.sub(u),_.sub(f),w.sub(f);let K=1/(_.x*w.y-w.x*_.y);isFinite(K)&&(I.copy(m).multiplyScalar(w.y).addScaledVector(x,-_.y).multiplyScalar(K),T.copy(x).multiplyScalar(_.x).addScaledVector(m,-w.x).multiplyScalar(K),a[g].add(I),a[L].add(I),a[k].add(I),h[g].add(T),h[L].add(T),h[k].add(T))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let g=0,L=b.length;g<L;++g){let k=b[g],K=k.start,q=k.count;for(let nt=K,H=K+q;nt<H;nt+=3)d(t.getX(nt+0),t.getX(nt+1),t.getX(nt+2))}let C=new ht,v=new ht,c=new ht,S=new ht;function D(g){c.fromBufferAttribute(s,g),S.copy(c);let L=a[g];C.copy(L),C.sub(c.multiplyScalar(c.dot(L))).normalize(),v.crossVectors(S,L);let K=v.dot(h[g])<0?-1:1;l.setXYZW(g,C.x,C.y,C.z,K)}for(let g=0,L=b.length;g<L;++g){let k=b[g],K=k.start,q=k.count;for(let nt=K,H=K+q;nt<H;nt+=3)D(t.getX(nt+0)),D(t.getX(nt+1)),D(t.getX(nt+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new vn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,_=n.count;f<_;f++)n.setXYZ(f,0,0,0);let s=new ht,r=new ht,l=new ht,a=new ht,h=new ht,u=new ht,m=new ht,x=new ht;if(t)for(let f=0,_=t.count;f<_;f+=3){let w=t.getX(f+0),I=t.getX(f+1),T=t.getX(f+2);s.fromBufferAttribute(e,w),r.fromBufferAttribute(e,I),l.fromBufferAttribute(e,T),m.subVectors(l,r),x.subVectors(s,r),m.cross(x),a.fromBufferAttribute(n,w),h.fromBufferAttribute(n,I),u.fromBufferAttribute(n,T),a.add(m),h.add(m),u.add(m),n.setXYZ(w,a.x,a.y,a.z),n.setXYZ(I,h.x,h.y,h.z),n.setXYZ(T,u.x,u.y,u.z)}else for(let f=0,_=e.count;f<_;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),l.fromBufferAttribute(e,f+2),m.subVectors(l,r),x.subVectors(s,r),m.cross(x),n.setXYZ(f+0,m.x,m.y,m.z),n.setXYZ(f+1,m.x,m.y,m.z),n.setXYZ(f+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)sn.fromBufferAttribute(t,e),sn.normalize(),t.setXYZ(e,sn.x,sn.y,sn.z)}toNonIndexed(){function t(a,h){let u=a.array,m=a.itemSize,x=a.normalized,f=new u.constructor(h.length*m),_=0,w=0;for(let I=0,T=h.length;I<T;I++){a.isInterleavedBufferAttribute?_=h[I]*a.data.stride+a.offset:_=h[I]*m;for(let d=0;d<m;d++)f[w++]=u[_++]}return new vn(f,m,x)}if(this.index===null)return he("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let h=s[a],u=t(h,n);e.setAttribute(a,u)}let r=this.morphAttributes;for(let a in r){let h=[],u=r[a];for(let m=0,x=u.length;m<x;m++){let f=u[m],_=t(f,n);h.push(_)}e.morphAttributes[a]=h}e.morphTargetsRelative=this.morphTargetsRelative;let l=this.groups;for(let a=0,h=l.length;a<h;a++){let u=l[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let h=this.parameters;for(let u in h)h[u]!==void 0&&(t[u]=h[u]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let h in n){let u=n[h];t.data.attributes[h]=u.toJSON(t.data)}let s={},r=!1;for(let h in this.morphAttributes){let u=this.morphAttributes[h],m=[];for(let x=0,f=u.length;x<f;x++){let _=u[x];m.push(_.toJSON(t.data))}m.length>0&&(s[h]=m,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let l=this.groups;l.length>0&&(t.data.groups=JSON.parse(JSON.stringify(l)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let u in s){let m=s[u];this.setAttribute(u,m.clone(e))}let r=t.morphAttributes;for(let u in r){let m=[],x=r[u];for(let f=0,_=x.length;f<_;f++)m.push(x[f].clone(e));this.morphAttributes[u]=m}this.morphTargetsRelative=t.morphTargetsRelative;let l=t.groups;for(let u=0,m=l.length;u<m;u++){let x=l[u];this.addGroup(x.start,x.count,x.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qs=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ul,this.updateRanges=[],this.version=0,this.uuid=bi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},gn=new ht,tr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.applyMatrix4(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.applyNormalMatrix(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.transformDirection(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=$n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ze(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=$n(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=$n(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=$n(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=$n(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),s=ze(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),s=ze(s,this.array),r=ze(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Zs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new vn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Zs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},el=new ht,Pu=new ht,Lu=new de,Cn=class{constructor(t=new ht(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=el.subVectors(n,e).cross(Pu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(el),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let l=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(l<0||l>1)?null:e.copy(t.start).addScaledVector(s,l)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Lu.getNormalMatrix(t),s=this.coplanarPoint(el).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Du=0,wi=class extends Qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=As,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_l,this.blendDst=yl,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sa,this.stencilZFail=sa,this.stencilZPass=sa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){he(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){he(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let l=[];for(let a in r){let h=r[a];delete h.metadata,l.push(h)}return l}if(e){let r=s(t.textures),l=s(t.images);r.length>0&&(n.textures=r),l.length>0&&(n.images=l)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new _e().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Cn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Te().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Te().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var di=new ht,nl=new ht,Wr=new ht,Xr=new ht,er=class{constructor(t=new ht,e=new ht(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(di.copy(this.origin).addScaledVector(this.direction,e),di.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){nl.copy(t).add(e).multiplyScalar(.5),Wr.copy(e).sub(t).normalize(),Xr.copy(this.origin).sub(nl);let r=t.distanceTo(e)*.5,l=-this.direction.dot(Wr),a=Xr.dot(this.direction),h=-Xr.dot(Wr),u=Xr.lengthSq(),m=Math.abs(1-l*l),x,f,_,w;if(m>0)if(x=l*h-a,f=l*a-h,w=r*m,x>=0)if(f>=-w)if(f<=w){let I=1/m;x*=I,f*=I,_=x*(x+l*f+2*a)+f*(l*x+f+2*h)+u}else f=r,x=Math.max(0,-(l*f+a)),_=-x*x+f*(f+2*h)+u;else f=-r,x=Math.max(0,-(l*f+a)),_=-x*x+f*(f+2*h)+u;else f<=-w?(x=Math.max(0,-(-l*r+a)),f=x>0?-r:Math.min(Math.max(-r,-h),r),_=-x*x+f*(f+2*h)+u):f<=w?(x=0,f=Math.min(Math.max(-r,-h),r),_=f*(f+2*h)+u):(x=Math.max(0,-(l*r+a)),f=x>0?r:Math.min(Math.max(-r,-h),r),_=-x*x+f*(f+2*h)+u);else f=l>0?-r:r,x=Math.max(0,-(l*f+a)),_=-x*x+f*(f+2*h)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,x),s&&s.copy(nl).addScaledVector(Wr,f),_}intersectSphere(t,e){if(t.radius<0)return null;di.subVectors(t.center,this.origin);let n=di.dot(this.direction),s=di.dot(di)-n*n,r=t.radius*t.radius;if(s>r)return null;let l=Math.sqrt(r-s),a=n-l,h=n+l;return h<0?null:a<0?this.at(h,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,l,a,h,u=1/this.direction.x,m=1/this.direction.y,x=1/this.direction.z,f=this.origin;return u>=0?(n=(t.min.x-f.x)*u,s=(t.max.x-f.x)*u):(n=(t.max.x-f.x)*u,s=(t.min.x-f.x)*u),m>=0?(r=(t.min.y-f.y)*m,l=(t.max.y-f.y)*m):(r=(t.max.y-f.y)*m,l=(t.min.y-f.y)*m),n>l||r>s||((r>n||isNaN(n))&&(n=r),(l<s||isNaN(s))&&(s=l),x>=0?(a=(t.min.z-f.z)*x,h=(t.max.z-f.z)*x):(a=(t.max.z-f.z)*x,h=(t.min.z-f.z)*x),n>h||a>s)||((a>n||n!==n)&&(n=a),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,di)!==null}intersectTriangle(t,e,n,s,r){let l=this.origin,a=this.direction,h=a.x,u=a.y,m=a.z,x=t.x-l.x,f=t.y-l.y,_=t.z-l.z,w=e.x-l.x,I=e.y-l.y,T=e.z-l.z,d=n.x-l.x,b=n.y-l.y,C=n.z-l.z,v=Math.abs(h),c=Math.abs(u),S=Math.abs(m),D,g,L,k,K,q,nt,H,tt,pt,ut,vt;if(v>=c&&v>=S?(L=h,q=x,tt=w,vt=d,h>=0?(D=u,g=m,k=f,K=_,nt=I,H=T,pt=b,ut=C):(D=m,g=u,k=_,K=f,nt=T,H=I,pt=C,ut=b)):c>=S?(L=u,q=f,tt=I,vt=b,u>=0?(D=m,g=h,k=_,K=x,nt=T,H=w,pt=C,ut=d):(D=h,g=m,k=x,K=_,nt=w,H=T,pt=d,ut=C)):(L=m,q=_,tt=T,vt=C,m>=0?(D=h,g=u,k=x,K=f,nt=w,H=I,pt=d,ut=b):(D=u,g=h,k=f,K=x,nt=I,H=w,pt=b,ut=d)),L===0)return null;let dt=D/L,gt=g/L,st=1/L,N=k-dt*q,Vt=K-gt*q,ge=nt-dt*tt,Gt=H-gt*tt,ot=pt-dt*vt,_t=ut-gt*vt,Mt=ot*Gt-_t*ge,Lt=N*_t-Vt*ot,Wt=ge*Vt-Gt*N;if(s){if(Mt<0||Lt<0||Wt<0)return null}else if((Mt<0||Lt<0||Wt<0)&&(Mt>0||Lt>0||Wt>0))return null;let Dt=Mt+Lt+Wt;if(Dt===0)return null;let $t=st*(Mt*q+Lt*tt+Wt*vt);return(Dt>0?$t<0:$t>0)?null:this.at($t/Dt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},nr=class extends wi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Pc=new Ne,Bi=new er,qr=new Si,Lc=new ht,Yr=new ht,Zr=new ht,Jr=new ht,il=new ht,$r=new ht,Dc=new ht,Kr=new ht,fn=class extends dn{constructor(t=new Rn,e=new nr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,l=s.length;r<l;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,l=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){$r.set(0,0,0);for(let h=0,u=r.length;h<u;h++){let m=a[h],x=r[h];m!==0&&(il.fromBufferAttribute(x,t),l?$r.addScaledVector(il,m):$r.addScaledVector(il.sub(e),m))}e.add($r)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(r),Bi.copy(t.ray).recast(t.near),!(qr.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(qr,Lc)===null||Bi.origin.distanceToSquared(Lc)>(t.far-t.near)**2))&&(Pc.copy(r).invert(),Bi.copy(t.ray).applyMatrix4(Pc),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bi)))}_computeIntersections(t,e,n){let s,r=this.geometry,l=this.material,a=r.index,h=r.attributes.position,u=r.attributes.uv,m=r.attributes.uv1,x=r.attributes.normal,f=r.groups,_=r.drawRange;if(a!==null)if(Array.isArray(l))for(let w=0,I=f.length;w<I;w++){let T=f[w],d=l[T.materialIndex],b=Math.max(T.start,_.start),C=Math.min(a.count,Math.min(T.start+T.count,_.start+_.count));for(let v=b,c=C;v<c;v+=3){let S=a.getX(v),D=a.getX(v+1),g=a.getX(v+2);s=jr(this,d,t,n,u,m,x,S,D,g),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=T.materialIndex,e.push(s))}}else{let w=Math.max(0,_.start),I=Math.min(a.count,_.start+_.count);for(let T=w,d=I;T<d;T+=3){let b=a.getX(T),C=a.getX(T+1),v=a.getX(T+2);s=jr(this,l,t,n,u,m,x,b,C,v),s&&(s.faceIndex=Math.floor(T/3),e.push(s))}}else if(h!==void 0)if(Array.isArray(l))for(let w=0,I=f.length;w<I;w++){let T=f[w],d=l[T.materialIndex],b=Math.max(T.start,_.start),C=Math.min(h.count,Math.min(T.start+T.count,_.start+_.count));for(let v=b,c=C;v<c;v+=3){let S=v,D=v+1,g=v+2;s=jr(this,d,t,n,u,m,x,S,D,g),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=T.materialIndex,e.push(s))}}else{let w=Math.max(0,_.start),I=Math.min(h.count,_.start+_.count);for(let T=w,d=I;T<d;T+=3){let b=T,C=T+1,v=T+2;s=jr(this,l,t,n,u,m,x,b,C,v),s&&(s.faceIndex=Math.floor(T/3),e.push(s))}}}};function Nu(i,t,e,n,s,r,l,a){let h;if(t.side===xn?h=n.intersectTriangle(l,r,s,!0,a):h=n.intersectTriangle(s,r,l,t.side===Ri,a),h===null)return null;Kr.copy(a),Kr.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(Kr);return u<e.near||u>e.far?null:{distance:u,point:Kr.clone(),object:i}}function jr(i,t,e,n,s,r,l,a,h,u){i.getVertexPosition(a,Yr),i.getVertexPosition(h,Zr),i.getVertexPosition(u,Jr);let m=Nu(i,t,e,n,Yr,Zr,Jr,Dc);if(m){let x=new ht;Mi.getBarycoord(Dc,Yr,Zr,Jr,x),s&&(m.uv=Mi.getInterpolatedAttribute(s,a,h,u,x,new Te)),r&&(m.uv1=Mi.getInterpolatedAttribute(r,a,h,u,x,new Te)),l&&(m.normal=Mi.getInterpolatedAttribute(l,a,h,u,x,new ht),m.normal.dot(n.direction)>0&&m.normal.multiplyScalar(-1));let f={a,b:h,c:u,normal:new ht,materialIndex:0};Mi.getNormal(Yr,Zr,Jr,f.normal),m.face=f,m.barycoord=x}return m}var ir=class extends bn{constructor(t=null,e=1,n=1,s,r,l,a,h,u=rn,m=rn,x,f){super(null,l,a,h,u,m,s,r,x,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hi=class extends vn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},cs=new Ne,Nc=new Ne,Qr=[],Uc=new ei,Uu=new Ne,Gs=new fn,Hs=new Si,sr=class extends fn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Hi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Uu)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ei),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,cs),Uc.copy(t.boundingBox).applyMatrix4(cs),this.boundingBox.union(Uc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Si),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,cs),Hs.copy(t.boundingSphere).applyMatrix4(cs),this.boundingSphere.union(Hs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,l=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[l+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Gs.geometry=this.geometry,Gs.material=this.material,Gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hs.copy(this.boundingSphere),Hs.applyMatrix4(n),t.ray.intersectsSphere(Hs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,cs),Nc.multiplyMatrices(n,cs),Gs.matrixWorld=Nc,Gs.raycast(t,Qr);for(let l=0,a=Qr.length;l<a;l++){let h=Qr[l];h.instanceId=r,h.object=this,e.push(h)}Qr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Hi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ir(new Float32Array(s*this.count),s,this.count,ka,On));let r=this.morphTexture.source.data.data,l=0;for(let u=0;u<n.length;u++)l+=n[u];let a=this.geometry.morphTargetsRelative?1:1-l,h=s*t;return r[h]=a,r.set(n,h+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},zi=new Si,Fu=new Te(.5,.5),ta=new ht,Ms=class{constructor(t=new Cn,e=new Cn,n=new Cn,s=new Cn,r=new Cn,l=new Cn){this.planes=[t,e,n,s,r,l]}set(t,e,n,s,r,l){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(l),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Wn,n=!1){let s=this.planes,r=t.elements,l=r[0],a=r[1],h=r[2],u=r[3],m=r[4],x=r[5],f=r[6],_=r[7],w=r[8],I=r[9],T=r[10],d=r[11],b=r[12],C=r[13],v=r[14],c=r[15];if(s[0].setComponents(u-l,_-m,d-w,c-b).normalize(),s[1].setComponents(u+l,_+m,d+w,c+b).normalize(),s[2].setComponents(u+a,_+x,d+I,c+C).normalize(),s[3].setComponents(u-a,_-x,d-I,c-C).normalize(),n)s[4].setComponents(h,f,T,v).normalize(),s[5].setComponents(u-h,_-f,d-T,c-v).normalize();else if(s[4].setComponents(u-h,_-f,d-T,c-v).normalize(),e===Wn)s[5].setComponents(u+h,_+f,d+T,c+v).normalize();else if(e===gs)s[5].setComponents(h,f,T,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(t){zi.center.set(0,0,0);let e=Fu.distanceTo(t.center);return zi.radius=.7071067811865476+e,zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ta.x=s.normal.x>0?t.max.x:t.min.x,ta.y=s.normal.y>0?t.max.y:t.min.y,ta.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ta)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var rr=class extends bn{constructor(t=[],e=Ii,n,s,r,l,a,h,u,m){super(t,e,n,s,r,l,a,h,u,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Ti=class extends bn{constructor(t,e,n=qn,s,r,l,a=rn,h=rn,u,m=jn,x=1){if(m!==jn&&m!==Pi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:x};super(f,s,r,l,a,h,m,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new _s(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},_a=class extends Ti{constructor(t,e=qn,n=Ii,s,r,l=rn,a=rn,h,u=jn){let m={width:t,height:t,depth:1},x=[m,m,m,m,m,m];super(t,t,e,n,s,r,l,a,h,u),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ar=class extends bn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},bs=class i extends Rn{constructor(t=1,e=1,n=1,s=1,r=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:l};let a=this;s=Math.floor(s),r=Math.floor(r),l=Math.floor(l);let h=[],u=[],m=[],x=[],f=0,_=0;w("z","y","x",-1,-1,n,e,t,l,r,0),w("z","y","x",1,-1,n,e,-t,l,r,1),w("x","z","y",1,1,t,n,e,s,l,2),w("x","z","y",1,-1,t,n,-e,s,l,3),w("x","y","z",1,-1,t,e,n,s,r,4),w("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(h),this.setAttribute("position",new Mn(u,3)),this.setAttribute("normal",new Mn(m,3)),this.setAttribute("uv",new Mn(x,2));function w(I,T,d,b,C,v,c,S,D,g,L){let k=v/D,K=c/g,q=v/2,nt=c/2,H=S/2,tt=D+1,pt=g+1,ut=0,vt=0,dt=new ht;for(let gt=0;gt<pt;gt++){let st=gt*K-nt;for(let N=0;N<tt;N++){let Vt=N*k-q;dt[I]=Vt*b,dt[T]=st*C,dt[d]=H,u.push(dt.x,dt.y,dt.z),dt[I]=0,dt[T]=0,dt[d]=S>0?1:-1,m.push(dt.x,dt.y,dt.z),x.push(N/D),x.push(1-gt/g),ut+=1}}for(let gt=0;gt<g;gt++)for(let st=0;st<D;st++){let N=f+st+tt*gt,Vt=f+st+tt*(gt+1),ge=f+(st+1)+tt*(gt+1),Gt=f+(st+1)+tt*gt;h.push(N,Vt,Gt),h.push(Vt,ge,Gt),vt+=6}a.addGroup(_,vt,L),_+=vt,f+=ut}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var or=class i extends Rn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,l=e/2,a=Math.floor(n),h=Math.floor(s),u=a+1,m=h+1,x=t/a,f=e/h,_=[],w=[],I=[],T=[];for(let d=0;d<m;d++){let b=d*f-l;for(let C=0;C<u;C++){let v=C*x-r;w.push(v,-b,0),I.push(0,0,1),T.push(C/a),T.push(1-d/h)}}for(let d=0;d<h;d++)for(let b=0;b<a;b++){let C=b+u*d,v=b+u*(d+1),c=b+1+u*(d+1),S=b+1+u*d;_.push(C,v,S),_.push(v,c,S)}this.setIndex(_),this.setAttribute("position",new Mn(w,3)),this.setAttribute("normal",new Mn(I,3)),this.setAttribute("uv",new Mn(T,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};function Yi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Fc(s))s.isRenderTargetTexture?(he("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Fc(s[0])){let r=[];for(let l=0,a=s.length;l<a;l++)r[l]=s[l].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function pn(i){let t={};for(let e=0;e<i.length;e++){let n=Yi(i[e]);for(let s in n)t[s]=n[s]}return t}function Fc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ou(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Fl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ee.workingColorSpace}var Ch={clone:Yi,merge:pn},Bu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,In=class extends wi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bu,this.fragmentShader=zu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Yi(t.uniforms),this.uniformsGroups=Ou(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let l=this.uniforms[s].value;l&&l.isTexture?e.uniforms[s]={type:"t",value:l.toJSON(t).uuid}:l&&l.isColor?e.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?e.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?e.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?e.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?e.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?e.uniforms[s]={type:"m4",value:l.toArray()}:e.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new _e().setHex(s.value);break;case"v2":this.uniforms[n].value=new Te().fromArray(s.value);break;case"v3":this.uniforms[n].value=new ht().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Xe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new de().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ne().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ss=class extends In{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},lr=class extends wi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mo,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ws=class extends wi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ph,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ya=class extends wi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function hs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function sl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ei=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let l;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}l=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let h=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===h)break;if(s=r,r=e[--n-1],t>=r)break t}l=n,n=0;break e}break n}for(;n<l;){let a=n+l>>>1;t<e[a]?l=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let l=0;l!==s;++l)e[l]=n[r+l];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},va=class extends Ei{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ol,endingEnd:ol}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,l=t+1,a=s[r],h=s[l];if(a===void 0)switch(this.getSettings_().endingStart){case ll:r=t,a=2*e-n;break;case cl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(h===void 0)switch(this.getSettings_().endingEnd){case ll:l=t,h=2*n-e;break;case cl:l=1,h=n+s[1]-s[0];break;default:l=t-1,h=e}let u=(n-e)*.5,m=this.valueSize;this._weightPrev=u/(e-a),this._weightNext=u/(h-n),this._offsetPrev=r*m,this._offsetNext=l*m}interpolate_(t,e,n,s){let r=this.resultBuffer,l=this.sampleValues,a=this.valueSize,h=t*a,u=h-a,m=this._offsetPrev,x=this._offsetNext,f=this._weightPrev,_=this._weightNext,w=(n-e)/(s-e),I=w*w,T=I*w,d=-f*T+2*f*I-f*w,b=(1+f)*T+(-1.5-2*f)*I+(-.5+f)*w+1,C=(-1-_)*T+(1.5+_)*I+.5*w,v=_*T-_*I;for(let c=0;c!==a;++c)r[c]=d*l[m+c]+b*l[u+c]+C*l[h+c]+v*l[x+c];return r}},Ma=class extends Ei{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,l=this.sampleValues,a=this.valueSize,h=t*a,u=h-a,m=(n-e)/(s-e),x=1-m;for(let f=0;f!==a;++f)r[f]=l[u+f]*x+l[h+f]*m;return r}},ba=class extends Ei{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Sa=class extends Ei{interpolate_(t,e,n,s){let r=this.resultBuffer,l=this.sampleValues,a=this.valueSize,h=t*a,u=h-a,m=this.inTangents,x=this.outTangents;if(!m||!x){let w=(n-e)/(s-e),I=1-w;for(let T=0;T!==a;++T)r[T]=l[u+T]*I+l[h+T]*w;return r}let f=a*2,_=t-1;for(let w=0;w!==a;++w){let I=l[u+w],T=l[h+w],d=_*f+w*2,b=x[d],C=x[d+1],v=t*f+w*2,c=m[v],S=m[v+1],D=Vu(n,e,b,c,s);r[w]=Rh(D,I,C,S,T)}return r}};function Rh(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function ku(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Vu(i,t,e,n,s){let r=(i-t)/(s-t);for(let l=0;l<8;l++){let a=Rh(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let h=ku(r,t,e,n,s);if(Math.abs(h)<1e-10)break;r=Math.max(0,Math.min(1,r-a/h))}return r}var Pn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=hs(e,this.TimeBufferType),this.values=hs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:hs(t.times,Array),values:hs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),sl(t.settings)&&(n.settings={inTangents:hs(t.settings.inTangents,Array),outTangents:hs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ba(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ma(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new va(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Sa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ws:e=this.InterpolantFactoryMethodDiscrete;break;case fa:e=this.InterpolantFactoryMethodLinear;break;case ia:e=this.InterpolantFactoryMethodSmooth;break;case al:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return he("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ws;case this.InterpolantFactoryMethodLinear:return fa;case this.InterpolantFactoryMethodSmooth:return ia;case this.InterpolantFactoryMethodBezier:return al}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;sl(this.settings)&&(Oc(this.settings.inTangents,t),Oc(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,l=s-1;for(;r!==s&&n[r]<t;)++r;for(;l!==-1&&n[l]>e;)--l;if(++l,r!==0||l!==s){r>=l&&(l=Math.max(l,1),r=l-1);let a=this.getValueSize();this.times=n.slice(r,l),this.values=this.values.slice(r*a,l*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ce("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ce("KeyframeTrack: Track is empty.",this),t=!1);let l=null;for(let a=0;a!==r;a++){let h=n[a];if(typeof h=="number"&&isNaN(h)){ce("KeyframeTrack: Time is not a valid number.",this,a,h),t=!1;break}if(l!==null&&l>h){ce("KeyframeTrack: Out of order keys.",this,a,h,l),t=!1;break}l=h}if(s!==void 0&&gu(s))for(let a=0,h=s.length;a!==h;++a){let u=s[a];if(isNaN(u)){ce("KeyframeTrack: Value is not a valid number.",this,a,u),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ia,r=t.length-1,l=1;for(let a=1;a<r;++a){let h=!1,u=t[a],m=t[a+1];if(u!==m&&(a!==1||u!==t[0]))if(s)h=!0;else{let x=a*n,f=x-n,_=x+n;for(let w=0;w!==n;++w){let I=e[x+w];if(I!==e[f+w]||I!==e[_+w]){h=!0;break}}}if(h){if(a!==l){t[l]=t[a];let x=a*n,f=l*n;for(let _=0;_!==n;++_)e[f+_]=e[x+_]}++l}}if(r>0){t[l]=t[r];for(let a=r*n,h=l*n,u=0;u!==n;++u)e[h+u]=e[a+u];++l}return l!==t.length?(this.times=t.slice(0,l),this.values=e.slice(0,l*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,sl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Oc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Pn.prototype.ValueTypeName="";Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=fa;var Ai=class extends Pn{constructor(t,e,n){super(t,e,n)}};Ai.prototype.ValueTypeName="bool";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=Ws;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var wa=class extends Pn{constructor(t,e,n,s){super(t,e,n,s)}};wa.prototype.ValueTypeName="color";var Ta=class extends Pn{constructor(t,e,n,s){super(t,e,n,s)}};Ta.prototype.ValueTypeName="number";var Ea=class extends Ei{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,l=this.sampleValues,a=this.valueSize,h=(n-e)/(s-e),u=t*a;for(let m=u+a;u!==m;u+=4)ti.slerpFlat(r,0,l,u-a,l,u,h);return r}},cr=class extends Pn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ea(this.times,this.values,this.getValueSize(),t)}};cr.prototype.ValueTypeName="quaternion";cr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends Pn{constructor(t,e,n){super(t,e,n)}};Ci.prototype.ValueTypeName="string";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=Ws;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Aa=class extends Pn{constructor(t,e,n,s){super(t,e,n,s)}};Aa.prototype.ValueTypeName="vector";var Ca=class{constructor(t,e,n){let s=this,r=!1,l=0,a=0,h,u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(m){a++,r===!1&&s.onStart!==void 0&&s.onStart(m,l,a),r=!0},this.itemEnd=function(m){l++,s.onProgress!==void 0&&s.onProgress(m,l,a),l===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return m=m.normalize("NFC"),h?h(m):m},this.setURLModifier=function(m){return h=m,this},this.addHandler=function(m,x){return u.push(m,x),this},this.removeHandler=function(m){let x=u.indexOf(m);return x!==-1&&u.splice(x,2),this},this.getHandler=function(m){for(let x=0,f=u.length;x<f;x+=2){let _=u[x],w=u[x+1];if(_.global&&(_.lastIndex=0),_.test(m))return w}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ih=new Ca,Ra=class{constructor(t){this.manager=t!==void 0?t:Ih,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ra.DEFAULT_MATERIAL_NAME="__DEFAULT";var hr=class extends dn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ur=class extends hr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},rl=new Ne,Bc=new ht,zc=new ht,Ia=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ms,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new Xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Bc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bc),zc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){rl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(rl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,l=s?s.z/r.x:1,a=s?s.w/r.y:1,h=s?s.x/r.x:0,u=s?s.y/r.y:0;t.coordinateSystem===gs||t.reversedDepth?e.set(.5*l,0,0,.5*l+h,0,.5*a,0,.5*a+u,0,0,1,0,0,0,0,1):e.set(.5*l,0,0,.5*l+h,0,.5*a,0,.5*a+u,0,0,.5,.5,0,0,0,1),e.multiply(rl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ea=new ht,na=new ti,Jn=new ht,dr=class extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ea,na,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ea,na,Jn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ea,na,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ea,na,Jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},vi=new ht,kc=new Te,Vc=new Te,un=class extends dr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=pa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Oo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pa*2*Math.atan(Math.tan(Oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vi.x,vi.y).multiplyScalar(-t/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-t/vi.z)}getViewSize(t,e){return this.getViewBounds(t,kc,Vc),e.subVectors(Vc,kc)}setViewOffset(t,e,n,s,r,l){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Oo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,l=this.view;if(this.view!==null&&this.view.enabled){let h=l.fullWidth,u=l.fullHeight;r+=l.offsetX*s/h,e-=l.offsetY*n/u,s*=l.width/h,n*=l.height/u}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ts=class extends dr{constructor(t=-1,e=1,n=1,s=-1,r=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=l,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,l=n+t,a=s+e,h=s-e;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,l=r+u*this.view.width,a-=m*this.view.offsetY,h=a-m*this.view.height}this.projectionMatrix.makeOrthographic(r,l,a,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},hl=class extends Ia{constructor(){super(new Ts(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fr=class extends hr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new hl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var us=-90,ds=1,Pa=class extends dn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new un(us,ds,t,e);s.layers=this.layers,this.add(s);let r=new un(us,ds,t,e);r.layers=this.layers,this.add(r);let l=new un(us,ds,t,e);l.layers=this.layers,this.add(l);let a=new un(us,ds,t,e);a.layers=this.layers,this.add(a);let h=new un(us,ds,t,e);h.layers=this.layers,this.add(h);let u=new un(us,ds,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,l,a,h]=e;for(let u of e)this.remove(u);if(t===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===gs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,l,a,h,u,m]=this.children,x=t.getRenderTarget(),f=t.getActiveCubeFace(),_=t.getActiveMipmapLevel(),w=t.xr.enabled;t.xr.enabled=!1;let I=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let T=!1;t.isWebGLRenderer===!0?T=t.state.buffers.depth.getReversed():T=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),T&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),T&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,2,s),T&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),T&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(n,4,s),T&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),n.texture.generateMipmaps=I,t.setRenderTarget(n,5,s),T&&t.autoClear===!1&&t.clearDepth(),t.render(e,m),t.setRenderTarget(x,f,_),t.xr.enabled=w,n.texture.needsPMREMUpdate=!0}},La=class extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Ol="\\[\\]\\.:\\/",Gu=new RegExp("["+Ol+"]","g"),Bl="[^"+Ol+"]",Hu="[^"+Ol.replace("\\.","")+"]",Wu=/((?:WC+[\/:])*)/.source.replace("WC",Bl),Xu=/(WCOD+)?/.source.replace("WCOD",Hu),qu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bl),Yu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bl),Zu=new RegExp("^"+Wu+Xu+qu+Yu+"$"),Ju=["material","materials","bones","map"],ul=class{constructor(t,e,n){let s=n||He.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},He=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Gu,"")}static parseTrackName(t){let e=Zu.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ju.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let l=0;l<r.length;l++){let a=r[l];if(a.name===e||a.uuid===e)return a;let h=n(a.children);if(h)return h}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){he("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=e.objectIndex;switch(n){case"materials":if(!t.material){ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ce("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ce("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let m=0;m<t.length;m++)if(t[m].name===u){u=m;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ce("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ce("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(u!==void 0){if(t[u]===void 0){ce("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let l=t[s];if(l===void 0){let u=e.nodeName;ce("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}h=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=r}else l.fromArray!==void 0&&l.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(h=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};He.Composite=ul;He.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};He.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};He.prototype.GetterByBindingType=[He.prototype._getValue_direct,He.prototype._getValue_array,He.prototype._getValue_arrayElement,He.prototype._getValue_toArray];He.prototype.SetterByBindingTypeAndVersioning=[[He.prototype._setValue_direct,He.prototype._setValue_direct_setNeedsUpdate,He.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[He.prototype._setValue_array,He.prototype._setValue_array_setNeedsUpdate,He.prototype._setValue_array_setMatrixWorldNeedsUpdate],[He.prototype._setValue_arrayElement,He.prototype._setValue_arrayElement_setNeedsUpdate,He.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[He.prototype._setValue_fromArray,He.prototype._setValue_fromArray_setNeedsUpdate,He.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var W0=new Float32Array(1);var Gc=new Ne,pr=class{constructor(t,e,n=0,s=1/0){this.ray=new er(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ys,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ce("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Gc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gc),this}intersectObject(t,e=!0,n=[]){return dl(t,this,n,e),n.sort(Hc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)dl(t[s],this,n,e);return n.sort(Hc),n}};function Hc(i,t){return i.distance-t.distance}function dl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let l=0,a=r.length;l<a;l++)dl(r[l],t,e,!0)}}var Wl=class Wl{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Wl.prototype.isMatrix2=!0;var fl=Wl;function zl(i,t,e,n){let s=$u(n);switch(e){case Ll:return i*t;case ka:return i*t/s.components*s.byteLength;case Va:return i*t/s.components*s.byteLength;case Li:return i*t*2/s.components*s.byteLength;case Ga:return i*t*2/s.components*s.byteLength;case Dl:return i*t*3/s.components*s.byteLength;case Bn:return i*t*4/s.components*s.byteLength;case Ha:return i*t*4/s.components*s.byteLength;case _r:case yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case vr:case Mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xa:case Ya:return Math.max(i,16)*Math.max(t,8)/4;case Wa:case qa:return Math.max(i,8)*Math.max(t,8)/2;case Za:case Ja:case Ka:case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $a:case br:case Qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case to:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case eo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case no:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case io:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case so:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ro:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ao:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case oo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case lo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case co:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ho:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case uo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case fo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case po:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case mo:case go:case xo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case _o:case yo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Sr:case vo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function $u(i){switch(i){case wn:case Cl:return{byteLength:1,components:1};case Cs:case Rl:case Yn:return{byteLength:2,components:1};case Ba:case za:return{byteLength:2,components:4};case qn:case Oa:case On:return{byteLength:4,components:1};case Il:case Pl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?he("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function jh(){let i=null,t=!1,e=null,n=null;function s(r,l){n=i.requestAnimationFrame(s),e(r,l)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ju(i){let t=new WeakMap;function e(a,h){let u=a.array,m=a.usage,x=u.byteLength,f=i.createBuffer();i.bindBuffer(h,f),i.bufferData(h,u,m),a.onUploadCallback();let _;if(u instanceof Float32Array)_=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)_=i.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=i.SHORT;else if(u instanceof Uint32Array)_=i.UNSIGNED_INT;else if(u instanceof Int32Array)_=i.INT;else if(u instanceof Int8Array)_=i.BYTE;else if(u instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:x}}function n(a,h,u){let m=h.array,x=h.updateRanges;if(i.bindBuffer(u,a),x.length===0)i.bufferSubData(u,0,m);else{x.sort((_,w)=>_.start-w.start);let f=0;for(let _=1;_<x.length;_++){let w=x[f],I=x[_];I.start<=w.start+w.count+1?w.count=Math.max(w.count,I.start+I.count-w.start):(++f,x[f]=I)}x.length=f+1;for(let _=0,w=x.length;_<w;_++){let I=x[_];i.bufferSubData(u,I.start*m.BYTES_PER_ELEMENT,m,I.start,I.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let h=t.get(a);h&&(i.deleteBuffer(h.buffer),t.delete(a))}function l(a,h){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let m=t.get(a);(!m||m.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let u=t.get(a);if(u===void 0)t.set(a,e(a,h));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,h),u.version=a.version}}return{get:s,remove:r,update:l}}var Qu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,td=`#ifdef USE_ALPHAHASH
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
#endif`,ed=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,id=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rd=`#ifdef USE_AOMAP
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
#endif`,ad=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,od=`#ifdef USE_BATCHING
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
#endif`,ld=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ud=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dd=`#ifdef USE_IRIDESCENCE
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
#endif`,fd=`#ifdef USE_BUMPMAP
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
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_d=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,yd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Md=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,bd=`#define PI 3.141592653589793
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
} // validated`,Sd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wd=`vec3 transformedNormal = objectNormal;
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
#endif`,Td=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ed=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ad=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Id=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pd=`#ifdef USE_ENVMAP
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
#endif`,Ld=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Dd=`#ifdef USE_ENVMAP
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
#endif`,Nd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ud=`#ifdef USE_ENVMAP
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
#endif`,Fd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Od=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kd=`#ifdef USE_GRADIENTMAP
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
}`,Vd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wd=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Xd=`#ifdef USE_ENVMAP
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
#endif`,qd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$d=`PhysicalMaterial material;
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
#endif`,Kd=`uniform sampler2D dfgLUT;
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
}`,jd=`
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
#endif`,Qd=`#if defined( RE_IndirectDiffuse )
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
#endif`,tf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ef=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,nf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,af=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,of=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hf=`#if defined( USE_POINTS_UV )
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
#endif`,uf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,df=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ff=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gf=`#ifdef USE_MORPHTARGETS
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
#endif`,xf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_f=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Sf=`#ifdef USE_NORMALMAP
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
#endif`,wf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ef=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Af=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,If=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Df=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ff=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Of=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zf=`float getShadowMask() {
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
}`,kf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vf=`#ifdef USE_SKINNING
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
#endif`,Gf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hf=`#ifdef USE_SKINNING
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
#endif`,Wf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zf=`#ifdef USE_TRANSMISSION
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
#endif`,Jf=`#ifdef USE_TRANSMISSION
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
#endif`,$f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,tp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ep=`uniform sampler2D t2D;
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
}`,np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ip=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ap=`#include <common>
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
}`,op=`#if DEPTH_PACKING == 3200
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
}`,lp=`#define DISTANCE
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
}`,cp=`#define DISTANCE
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
}`,hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,up=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dp=`uniform float scale;
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
}`,fp=`uniform vec3 diffuse;
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
}`,pp=`#include <common>
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
}`,mp=`uniform vec3 diffuse;
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
}`,gp=`#define LAMBERT
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
}`,xp=`#define LAMBERT
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
}`,_p=`#define MATCAP
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
}`,yp=`#define MATCAP
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
}`,vp=`#define NORMAL
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
}`,Mp=`#define NORMAL
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
}`,bp=`#define PHONG
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
}`,Sp=`#define PHONG
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
}`,wp=`#define STANDARD
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
}`,Tp=`#define STANDARD
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
}`,Ep=`#define TOON
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
}`,Ap=`#define TOON
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
}`,Cp=`uniform float size;
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
}`,Rp=`uniform vec3 diffuse;
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
}`,Ip=`#include <common>
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
}`,Pp=`uniform vec3 color;
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
}`,Lp=`uniform float rotation;
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
}`,Dp=`uniform vec3 diffuse;
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
}`,ye={alphahash_fragment:Qu,alphahash_pars_fragment:td,alphamap_fragment:ed,alphamap_pars_fragment:nd,alphatest_fragment:id,alphatest_pars_fragment:sd,aomap_fragment:rd,aomap_pars_fragment:ad,batching_pars_vertex:od,batching_vertex:ld,begin_vertex:cd,beginnormal_vertex:hd,bsdfs:ud,iridescence_fragment:dd,bumpmap_pars_fragment:fd,clipping_planes_fragment:pd,clipping_planes_pars_fragment:md,clipping_planes_pars_vertex:gd,clipping_planes_vertex:xd,color_fragment:_d,color_pars_fragment:yd,color_pars_vertex:vd,color_vertex:Md,common:bd,cube_uv_reflection_fragment:Sd,defaultnormal_vertex:wd,displacementmap_pars_vertex:Td,displacementmap_vertex:Ed,emissivemap_fragment:Ad,emissivemap_pars_fragment:Cd,colorspace_fragment:Rd,colorspace_pars_fragment:Id,envmap_fragment:Pd,envmap_common_pars_fragment:Ld,envmap_pars_fragment:Dd,envmap_pars_vertex:Nd,envmap_physical_pars_fragment:Xd,envmap_vertex:Ud,fog_vertex:Fd,fog_pars_vertex:Od,fog_fragment:Bd,fog_pars_fragment:zd,gradientmap_pars_fragment:kd,lightmap_pars_fragment:Vd,lights_lambert_fragment:Gd,lights_lambert_pars_fragment:Hd,lights_pars_begin:Wd,lights_toon_fragment:qd,lights_toon_pars_fragment:Yd,lights_phong_fragment:Zd,lights_phong_pars_fragment:Jd,lights_physical_fragment:$d,lights_physical_pars_fragment:Kd,lights_fragment_begin:jd,lights_fragment_maps:Qd,lights_fragment_end:tf,lightprobes_pars_fragment:ef,logdepthbuf_fragment:nf,logdepthbuf_pars_fragment:sf,logdepthbuf_pars_vertex:rf,logdepthbuf_vertex:af,map_fragment:of,map_pars_fragment:lf,map_particle_fragment:cf,map_particle_pars_fragment:hf,metalnessmap_fragment:uf,metalnessmap_pars_fragment:df,morphinstance_vertex:ff,morphcolor_vertex:pf,morphnormal_vertex:mf,morphtarget_pars_vertex:gf,morphtarget_vertex:xf,normal_fragment_begin:_f,normal_fragment_maps:yf,normal_pars_fragment:vf,normal_pars_vertex:Mf,normal_vertex:bf,normalmap_pars_fragment:Sf,clearcoat_normal_fragment_begin:wf,clearcoat_normal_fragment_maps:Tf,clearcoat_pars_fragment:Ef,iridescence_pars_fragment:Af,opaque_fragment:Cf,packing:Rf,premultiplied_alpha_fragment:If,project_vertex:Pf,dithering_fragment:Lf,dithering_pars_fragment:Df,roughnessmap_fragment:Nf,roughnessmap_pars_fragment:Uf,shadowmap_pars_fragment:Ff,shadowmap_pars_vertex:Of,shadowmap_vertex:Bf,shadowmask_pars_fragment:zf,skinbase_vertex:kf,skinning_pars_vertex:Vf,skinning_vertex:Gf,skinnormal_vertex:Hf,specularmap_fragment:Wf,specularmap_pars_fragment:Xf,tonemapping_fragment:qf,tonemapping_pars_fragment:Yf,transmission_fragment:Zf,transmission_pars_fragment:Jf,uv_pars_fragment:$f,uv_pars_vertex:Kf,uv_vertex:jf,worldpos_vertex:Qf,background_vert:tp,background_frag:ep,backgroundCube_vert:np,backgroundCube_frag:ip,cube_vert:sp,cube_frag:rp,depth_vert:ap,depth_frag:op,distance_vert:lp,distance_frag:cp,equirect_vert:hp,equirect_frag:up,linedashed_vert:dp,linedashed_frag:fp,meshbasic_vert:pp,meshbasic_frag:mp,meshlambert_vert:gp,meshlambert_frag:xp,meshmatcap_vert:_p,meshmatcap_frag:yp,meshnormal_vert:vp,meshnormal_frag:Mp,meshphong_vert:bp,meshphong_frag:Sp,meshphysical_vert:wp,meshphysical_frag:Tp,meshtoon_vert:Ep,meshtoon_frag:Ap,points_vert:Cp,points_frag:Rp,shadow_vert:Ip,shadow_frag:Pp,sprite_vert:Lp,sprite_frag:Dp},kt={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ht},probesMax:{value:new ht},probesResolution:{value:new ht}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},ri={basic:{uniforms:pn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:pn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new _e(0)},envMapIntensity:{value:1}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:pn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:pn([kt.common,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.roughnessmap,kt.metalnessmap,kt.fog,kt.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:pn([kt.common,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.gradientmap,kt.fog,kt.lights,{emissive:{value:new _e(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:pn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:pn([kt.points,kt.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:pn([kt.common,kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:pn([kt.common,kt.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:pn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:pn([kt.sprite,kt.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distance:{uniforms:pn([kt.common,kt.displacementmap,{referencePosition:{value:new ht},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distance_vert,fragmentShader:ye.distance_frag},shadow:{uniforms:pn([kt.lights,kt.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};ri.physical={uniforms:pn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};var To={r:0,b:0,g:0},Np=new Ne,Qh=new de;Qh.set(-1,0,0,0,1,0,0,0,1);function Up(i,t,e,n,s,r){let l=new _e(0),a=s===!0?0:1,h,u,m=null,x=0,f=null;function _(b){let C=b.isScene===!0?b.background:null;if(C&&C.isTexture){let v=b.backgroundBlurriness>0;C=t.get(C,v)}return C}function w(b){let C=!1,v=_(b);v===null?T(l,a):v&&v.isColor&&(T(v,1),C=!0);let c=i.xr.getEnvironmentBlendMode();c==="additive"?e.buffers.color.setClear(0,0,0,1,r):c==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||C)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function I(b,C){let v=_(C);v&&(v.isCubeTexture||v.mapping===gr)?(u===void 0&&(u=new fn(new bs(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:Yi(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(c,S,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Np.makeRotationFromEuler(C.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Qh),u.material.toneMapped=Ee.getTransfer(v.colorSpace)!==Ue,(m!==v||x!==v.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,m=v,x=v.version,f=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(h===void 0&&(h=new fn(new or(2,2),new In({name:"BackgroundMaterial",uniforms:Yi(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=v,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.toneMapped=Ee.getTransfer(v.colorSpace)!==Ue,v.matrixAutoUpdate===!0&&v.updateMatrix(),h.material.uniforms.uvTransform.value.copy(v.matrix),(m!==v||x!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,m=v,x=v.version,f=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function T(b,C){b.getRGB(To,Fl(i)),e.buffers.color.setClear(To.r,To.g,To.b,C,r)}function d(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return l},setClearColor:function(b,C=1){l.set(b),a=C,T(l,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,T(l,a)},render:w,addToRenderList:I,dispose:d}}function Fp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,l=!1;function a(K,q,nt,H,tt){let pt=!1,ut=x(K,H,nt,q);r!==ut&&(r=ut,u(r.object)),pt=_(K,H,nt,tt),pt&&w(K,H,nt,tt),tt!==null&&t.update(tt,i.ELEMENT_ARRAY_BUFFER),(pt||l)&&(l=!1,v(K,q,nt,H),tt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function h(){return i.createVertexArray()}function u(K){return i.bindVertexArray(K)}function m(K){return i.deleteVertexArray(K)}function x(K,q,nt,H){let tt=H.wireframe===!0,pt=n[q.id];pt===void 0&&(pt={},n[q.id]=pt);let ut=K.isInstancedMesh===!0?K.id:0,vt=pt[ut];vt===void 0&&(vt={},pt[ut]=vt);let dt=vt[nt.id];dt===void 0&&(dt={},vt[nt.id]=dt);let gt=dt[tt];return gt===void 0&&(gt=f(h()),dt[tt]=gt),gt}function f(K){let q=[],nt=[],H=[];for(let tt=0;tt<e;tt++)q[tt]=0,nt[tt]=0,H[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:nt,attributeDivisors:H,object:K,attributes:{},index:null}}function _(K,q,nt,H){let tt=r.attributes,pt=q.attributes,ut=0,vt=nt.getAttributes();for(let dt in vt)if(vt[dt].location>=0){let st=tt[dt],N=pt[dt];if(N===void 0&&(dt==="instanceMatrix"&&K.instanceMatrix&&(N=K.instanceMatrix),dt==="instanceColor"&&K.instanceColor&&(N=K.instanceColor)),st===void 0||st.attribute!==N||N&&st.data!==N.data)return!0;ut++}return r.attributesNum!==ut||r.index!==H}function w(K,q,nt,H){let tt={},pt=q.attributes,ut=0,vt=nt.getAttributes();for(let dt in vt)if(vt[dt].location>=0){let st=pt[dt];st===void 0&&(dt==="instanceMatrix"&&K.instanceMatrix&&(st=K.instanceMatrix),dt==="instanceColor"&&K.instanceColor&&(st=K.instanceColor));let N={};N.attribute=st,st&&st.data&&(N.data=st.data),tt[dt]=N,ut++}r.attributes=tt,r.attributesNum=ut,r.index=H}function I(){let K=r.newAttributes;for(let q=0,nt=K.length;q<nt;q++)K[q]=0}function T(K){d(K,0)}function d(K,q){let nt=r.newAttributes,H=r.enabledAttributes,tt=r.attributeDivisors;nt[K]=1,H[K]===0&&(i.enableVertexAttribArray(K),H[K]=1),tt[K]!==q&&(i.vertexAttribDivisor(K,q),tt[K]=q)}function b(){let K=r.newAttributes,q=r.enabledAttributes;for(let nt=0,H=q.length;nt<H;nt++)q[nt]!==K[nt]&&(i.disableVertexAttribArray(nt),q[nt]=0)}function C(K,q,nt,H,tt,pt,ut){ut===!0?i.vertexAttribIPointer(K,q,nt,tt,pt):i.vertexAttribPointer(K,q,nt,H,tt,pt)}function v(K,q,nt,H){I();let tt=H.attributes,pt=nt.getAttributes(),ut=q.defaultAttributeValues;for(let vt in pt){let dt=pt[vt];if(dt.location>=0){let gt=tt[vt];if(gt===void 0&&(vt==="instanceMatrix"&&K.instanceMatrix&&(gt=K.instanceMatrix),vt==="instanceColor"&&K.instanceColor&&(gt=K.instanceColor)),gt!==void 0){let st=gt.normalized,N=gt.itemSize,Vt=t.get(gt);if(Vt===void 0)continue;let ge=Vt.buffer,Gt=Vt.type,ot=Vt.bytesPerElement,_t=Gt===i.INT||Gt===i.UNSIGNED_INT||gt.gpuType===Oa;if(gt.isInterleavedBufferAttribute){let Mt=gt.data,Lt=Mt.stride,Wt=gt.offset;if(Mt.isInstancedInterleavedBuffer){for(let Dt=0;Dt<dt.locationSize;Dt++)d(dt.location+Dt,Mt.meshPerAttribute);K.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Dt=0;Dt<dt.locationSize;Dt++)T(dt.location+Dt);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let Dt=0;Dt<dt.locationSize;Dt++)C(dt.location+Dt,N/dt.locationSize,Gt,st,Lt*ot,(Wt+N/dt.locationSize*Dt)*ot,_t)}else{if(gt.isInstancedBufferAttribute){for(let Mt=0;Mt<dt.locationSize;Mt++)d(dt.location+Mt,gt.meshPerAttribute);K.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Mt=0;Mt<dt.locationSize;Mt++)T(dt.location+Mt);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let Mt=0;Mt<dt.locationSize;Mt++)C(dt.location+Mt,N/dt.locationSize,Gt,st,N*ot,N/dt.locationSize*Mt*ot,_t)}}else if(ut!==void 0){let st=ut[vt];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv(dt.location,st);break;case 3:i.vertexAttrib3fv(dt.location,st);break;case 4:i.vertexAttrib4fv(dt.location,st);break;default:i.vertexAttrib1fv(dt.location,st)}}}}b()}function c(){L();for(let K in n){let q=n[K];for(let nt in q){let H=q[nt];for(let tt in H){let pt=H[tt];for(let ut in pt)m(pt[ut].object),delete pt[ut];delete H[tt]}}delete n[K]}}function S(K){if(n[K.id]===void 0)return;let q=n[K.id];for(let nt in q){let H=q[nt];for(let tt in H){let pt=H[tt];for(let ut in pt)m(pt[ut].object),delete pt[ut];delete H[tt]}}delete n[K.id]}function D(K){for(let q in n){let nt=n[q];for(let H in nt){let tt=nt[H];if(tt[K.id]===void 0)continue;let pt=tt[K.id];for(let ut in pt)m(pt[ut].object),delete pt[ut];delete tt[K.id]}}}function g(K){for(let q in n){let nt=n[q],H=K.isInstancedMesh===!0?K.id:0,tt=nt[H];if(tt!==void 0){for(let pt in tt){let ut=tt[pt];for(let vt in ut)m(ut[vt].object),delete ut[vt];delete tt[pt]}delete nt[H],Object.keys(nt).length===0&&delete n[q]}}}function L(){k(),l=!0,r!==s&&(r=s,u(r.object))}function k(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:k,dispose:c,releaseStatesOfGeometry:S,releaseStatesOfObject:g,releaseStatesOfProgram:D,initAttributes:I,enableAttribute:T,disableUnusedAttributes:b}}function Op(i,t,e){let n;function s(h){n=h}function r(h,u){i.drawArrays(n,h,u),e.update(u,n,1)}function l(h,u,m){m!==0&&(i.drawArraysInstanced(n,h,u,m),e.update(u,n,m))}function a(h,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,u,0,m);let f=0;for(let _=0;_<m;_++)f+=u[_];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=l,this.renderMultiDraw=a}function Bp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(D){return!(D!==Bn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let g=D===Yn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==wn&&D!==On&&!g&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function h(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp",m=h(u);m!==u&&(he("WebGLRenderer:",u,"not supported, using",m,"instead."),u=m);let x=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&he("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let _=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),I=i.getParameter(i.MAX_TEXTURE_SIZE),T=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),c=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:l,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:x,reversedDepthBuffer:f,maxTextures:_,maxVertexTextures:w,maxTextureSize:I,maxCubemapSize:T,maxAttributes:d,maxVertexUniforms:b,maxVaryings:C,maxFragmentUniforms:v,maxSamples:c,samples:S}}function zp(i){let t=this,e=null,n=0,s=!1,r=!1,l=new Cn,a=new de,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(x,f){let _=x.length!==0||f||n!==0||s;return s=f,n=x.length,_},this.beginShadows=function(){r=!0,m(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(x,f){e=m(x,f,0)},this.setState=function(x,f,_){let w=x.clippingPlanes,I=x.clipIntersection,T=x.clipShadows,d=i.get(x);if(!s||w===null||w.length===0||r&&!T)r?m(null):u();else{let b=r?0:n,C=b*4,v=d.clippingState||null;h.value=v,v=m(w,f,C,_);for(let c=0;c!==C;++c)v[c]=e[c];d.clippingState=v,this.numIntersection=I?this.numPlanes:0,this.numPlanes+=b}};function u(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function m(x,f,_,w){let I=x!==null?x.length:0,T=null;if(I!==0){if(T=h.value,w!==!0||T===null){let d=_+I*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(T===null||T.length<d)&&(T=new Float32Array(d));for(let C=0,v=_;C!==I;++C,v+=4)l.copy(x[C]).applyMatrix4(b,a),l.normal.toArray(T,v),T[v+3]=l.constant}h.value=T,h.needsUpdate=!0}return t.numPlanes=I,t.numIntersection=0,T}}var Ps=4,kp=6,Vp=20,Gp=256,Tr=new Ts,Ph=new _e,Xl=null,ql=0,Yl=0,Zl=!1,Hp=new ht,Zi=new ht,Ao=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:l=256,position:a=Hp}=r;Xl=this._renderer.getRenderTarget(),ql=this._renderer.getActiveCubeFace(),Yl=this._renderer.getActiveMipmapLevel(),Zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);let h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,n,s,h,a),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Xl,ql,Yl),this._renderer.xr.enabled=Zl,t.scissorTest=!1,Is(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ii||t.mapping===qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xl=this._renderer.getRenderTarget(),ql=this._renderer.getActiveCubeFace(),Yl=this._renderer.getActiveMipmapLevel(),Zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:Yn,format:Bn,colorSpace:Xs,depthBuffer:!1},s=Lh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lh(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Wp(r)),this._blurMaterial=qp(r,t,e),this._ggxMaterial=Xp(r,t,e)}return s}_compileMaterial(t){let e=new fn(new Rn,t);this._renderer.compile(e,Tr)}_sceneToCubeUV(t,e,n,s,r){let h=new un(90,1,e,n),u=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],x=this._renderer,f=x.autoClear,_=x.toneMapping;x.getClearColor(Ph),x.toneMapping=Xn,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(s),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new fn(new bs,new nr({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));let I=this._backgroundBox,T=I.material,d=!1,b=t.background;b?b.isColor&&(T.color.copy(b),t.background=null,d=!0):(T.color.copy(Ph),d=!0);for(let C=0;C<6;C++){let v=C%3;v===0?(h.up.set(0,u[C],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+m[C],r.y,r.z)):v===1?(h.up.set(0,0,u[C]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+m[C],r.z)):(h.up.set(0,u[C],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+m[C]));let c=this._cubeSize;Is(s,v*c,C>2?c:0,c,c),x.setRenderTarget(s),d&&x.render(I,h),x.render(t,h)}x.toneMapping=_,x.autoClear=f,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ii||t.mapping===qi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dh());let r=s?this._cubemapMaterial:this._equirectMaterial,l=this._lodMeshes[0];l.material=r;let a=r.uniforms;a.envMap.value=t;let h=this._cubeSize;Is(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(l,Tr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,l=this._ggxMaterial,a=this._lodMeshes[n];a.material=l;let h=l.uniforms,u=n/(this._lodMeshes.length-1),m=e/(this._lodMeshes.length-1),x=Math.sqrt(u*u-m*m),f=u*1.25,_=x*f,{_lodMax:w}=this,I=this._sizeLods[n],T=3*I*(n>w-Ps?n-w+Ps:0),d=4*(this._cubeSize-I);h.envMap.value=t.texture,h.roughness.value=_,h.mipInt.value=w-e,Is(r,T,d,3*I,2*I),s.setRenderTarget(r),s.render(a,Tr),h.envMap.value=r.texture,h.roughness.value=0,h.mipInt.value=w-n,Is(t,T,d,3*I,2*I),s.setRenderTarget(t),s.render(a,Tr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,l=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,l),this._blurPass(r,t,n,n,l)}_blurPass(t,e,n,s,r){let l=this._renderer,a=this._blurMaterial,h=this._lodMeshes[s];h.material=a;let u=a.uniforms;u.envMap.value=t.texture,u.sigma.value=r,u.mipInt.value=this._lodMax-n;let m=this._sizeLods[s],x=3*m*(s>this._lodMax-Ps?s-this._lodMax+Ps:0),f=4*(this._cubeSize-m);Is(e,x,f,3*m,2*m),l.setRenderTarget(e),l.render(h,Tr)}};function Wp(i){let t=[],e=[],n=i,s=i-Ps+1+kp;for(let r=0;r<s;r++){let l=Math.pow(2,n);t.push(l);let a=1/(l-2),h=-a,u=1+a,m=[h,h,u,h,u,u,h,h,u,u,h,u],x=6,f=6,_=3,w=new Float32Array(_*f*x),I=new Float32Array(_*f*x);for(let d=0;d<x;d++){let b=d%3*2/3-1,C=d>2?0:-1,v=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];w.set(v,_*f*d);for(let c=0;c<f;c++){let S=m[c*2]*2-1,D=m[c*2+1]*2-1;d===0?Zi.set(1,D,S):d===1?Zi.set(-S,1,-D):d===2?Zi.set(-S,D,1):d===3?Zi.set(-1,D,-S):d===4?Zi.set(-S,-1,D):Zi.set(S,D,-1),Zi.toArray(I,(d*f+c)*_)}}let T=new Rn;T.setAttribute("position",new vn(w,_)),T.setAttribute("outputDirection",new vn(I,_)),e.push(new fn(T,null)),n>Ps&&n--}return{lodMeshes:e,sizeLods:t}}function Lh(i,t,e){let n=new Sn(i,t,e);return n.texture.mapping=gr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Is(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Xp(i,t,e){return new In({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Gp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Io(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function qp(i,t,e){return new In({name:"SphericalGaussianBlur",defines:{SAMPLES:Vp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Io(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Dh(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Io(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Nh(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Io(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Co=class extends Sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new rr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new bs(5,5,5),r=new In({name:"CubemapFromEquirect",uniforms:Yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:ni});r.uniforms.tEquirect.value=e;let l=new fn(s,r),a=e.minFilter;return e.minFilter===ii&&(e.minFilter=Qe),new Pa(1,10,this).update(t,l),e.minFilter=a,l.geometry.dispose(),l.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let l=0;l<6;l++)t.setRenderTarget(this,l),t.clear(e,n,s);t.setRenderTarget(r)}};function Yp(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,_=!1){return f==null?null:_?l(f):r(f)}function r(f){if(f&&f.isTexture){let _=f.mapping;if(_===Na||_===Ua)if(t.has(f)){let w=t.get(f).texture;return a(w,f.mapping)}else{let w=f.image;if(w&&w.height>0){let I=new Co(w.height);return I.fromEquirectangularTexture(i,f),t.set(f,I),f.addEventListener("dispose",u),a(I.texture,f.mapping)}else return null}}return f}function l(f){if(f&&f.isTexture){let _=f.mapping,w=_===Na||_===Ua,I=_===Ii||_===qi;if(w||I){let T=e.get(f),d=T!==void 0?T.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return n===null&&(n=new Ao(i)),T=w?n.fromEquirectangular(f,T):n.fromCubemap(f,T),T.texture.pmremVersion=f.pmremVersion,e.set(f,T),T.texture;if(T!==void 0)return T.texture;{let b=f.image;return w&&b&&b.height>0||I&&b&&h(b)?(n===null&&(n=new Ao(i)),T=w?n.fromEquirectangular(f):n.fromCubemap(f),T.texture.pmremVersion=f.pmremVersion,e.set(f,T),f.addEventListener("dispose",m),T.texture):null}}}return f}function a(f,_){return _===Na?f.mapping=Ii:_===Ua&&(f.mapping=qi),f}function h(f){let _=0,w=6;for(let I=0;I<w;I++)f[I]!==void 0&&_++;return _===w}function u(f){let _=f.target;_.removeEventListener("dispose",u);let w=t.get(_);w!==void 0&&(t.delete(_),w.dispose())}function m(f){let _=f.target;_.removeEventListener("dispose",m);let w=e.get(_);w!==void 0&&(e.delete(_),w.dispose())}function x(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:x}}function Zp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Vi("WebGLRenderer: "+n+" extension not supported."),s}}}function Jp(i,t,e,n){let s={},r=new WeakMap;function l(x){let f=x.target;f.index!==null&&t.remove(f.index);for(let w in f.attributes)t.remove(f.attributes[w]);f.removeEventListener("dispose",l),delete s[f.id];let _=r.get(f);_&&(t.remove(_),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(x,f){return s[f.id]===!0||(f.addEventListener("dispose",l),s[f.id]=!0,e.memory.geometries++),f}function h(x){let f=x.attributes;for(let _ in f)t.update(f[_],i.ARRAY_BUFFER)}function u(x){let f=[],_=x.index,w=x.attributes.position,I=0;if(w===void 0)return;if(_!==null){let b=_.array;I=_.version;for(let C=0,v=b.length;C<v;C+=3){let c=b[C+0],S=b[C+1],D=b[C+2];f.push(c,S,S,D,D,c)}}else{let b=w.array;I=w.version;for(let C=0,v=b.length/3-1;C<v;C+=3){let c=C+0,S=C+1,D=C+2;f.push(c,S,S,D,D,c)}}let T=new(w.count>=65535?js:Ks)(f,1);T.version=I;let d=r.get(x);d&&t.remove(d),r.set(x,T)}function m(x){let f=r.get(x);if(f){let _=x.index;_!==null&&f.version<_.version&&u(x)}else u(x);return r.get(x)}return{get:a,update:h,getWireframeAttribute:m}}function $p(i,t,e){let n;function s(x){n=x}let r,l;function a(x){r=x.type,l=x.bytesPerElement}function h(x,f){i.drawElements(n,f,r,x*l),e.update(f,n,1)}function u(x,f,_){_!==0&&(i.drawElementsInstanced(n,f,r,x*l,_),e.update(f,n,_))}function m(x,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,x,0,_);let I=0;for(let T=0;T<_;T++)I+=f[T];e.update(I,n,1)}this.setMode=s,this.setIndex=a,this.render=h,this.renderInstances=u,this.renderMultiDraw=m}function Kp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,l,a){switch(e.calls++,l){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:ce("WebGLInfo: Unknown draw mode:",l);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function jp(i,t,e){let n=new WeakMap,s=new Xe;function r(l,a,h){let u=l.morphTargetInfluences,m=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,x=m!==void 0?m.length:0,f=n.get(a);if(f===void 0||f.count!==x){let L=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",L)};f!==void 0&&f.texture.dispose();let _=a.morphAttributes.position!==void 0,w=a.morphAttributes.normal!==void 0,I=a.morphAttributes.color!==void 0,T=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],C=0;_===!0&&(C=1),w===!0&&(C=2),I===!0&&(C=3);let v=a.attributes.position.count*C,c=1;v>t.maxTextureSize&&(c=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let S=new Float32Array(v*c*4*x),D=new Gi(S,v,c,x);D.type=On,D.needsUpdate=!0;let g=C*4;for(let k=0;k<x;k++){let K=T[k],q=d[k],nt=b[k],H=v*c*4*k;for(let tt=0;tt<K.count;tt++){let pt=tt*g;_===!0&&(s.fromBufferAttribute(K,tt),S[H+pt+0]=s.x,S[H+pt+1]=s.y,S[H+pt+2]=s.z,S[H+pt+3]=0),w===!0&&(s.fromBufferAttribute(q,tt),S[H+pt+4]=s.x,S[H+pt+5]=s.y,S[H+pt+6]=s.z,S[H+pt+7]=0),I===!0&&(s.fromBufferAttribute(nt,tt),S[H+pt+8]=s.x,S[H+pt+9]=s.y,S[H+pt+10]=s.z,S[H+pt+11]=nt.itemSize===4?s.w:1)}}f={count:x,texture:D,size:new Te(v,c)},n.set(a,f),a.addEventListener("dispose",L)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",l.morphTexture,e);else{let _=0;for(let I=0;I<u.length;I++)_+=u[I];let w=a.morphTargetsRelative?1:1-_;h.getUniforms().setValue(i,"morphTargetBaseInfluence",w),h.getUniforms().setValue(i,"morphTargetInfluences",u)}h.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Qp(i,t,e,n,s){let r=new WeakMap;function l(u){let m=s.render.frame,x=u.geometry,f=t.get(u,x);if(r.get(f)!==m&&(t.update(f),r.set(f,m)),u.isInstancedMesh&&(u.hasEventListener("dispose",h)===!1&&u.addEventListener("dispose",h),r.get(u)!==m&&(e.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&e.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,m))),u.isSkinnedMesh){let _=u.skeleton;r.get(_)!==m&&(_.update(),r.set(_,m))}return f}function a(){r=new WeakMap}function h(u){let m=u.target;m.removeEventListener("dispose",h),n.releaseStatesOfObject(m),e.remove(m.instanceMatrix),m.instanceColor!==null&&e.remove(m.instanceColor)}return{update:l,dispose:a}}var tm={[Ml]:"LINEAR_TONE_MAPPING",[bl]:"REINHARD_TONE_MAPPING",[Sl]:"CINEON_TONE_MAPPING",[mr]:"ACES_FILMIC_TONE_MAPPING",[Tl]:"AGX_TONE_MAPPING",[El]:"NEUTRAL_TONE_MAPPING",[wl]:"CUSTOM_TONE_MAPPING"};function em(i,t,e,n,s,r){let l=new Sn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,h=null,u=new Rn;u.setAttribute("position",new Mn([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Mn([0,2,0,0,2,0],2));let m=new Ss({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),x=new fn(u,m),f=new Ts(-1,1,1,-1,0,1),_=null,w=null,I=!1,T,d=null,b=[],C=!1;this.setSize=function(v,c){l.setSize(v,c),a!==null&&a.setSize(v,c),h!==null&&h.setSize(v,c);for(let S=0;S<b.length;S++){let D=b[S];D.setSize&&D.setSize(v,c)}},this.setEffects=function(v){b=v,C=b.length>0&&b[0].isRenderPass===!0;let c=l.width,S=l.height;b.length>0&&a===null&&(a=new Sn(c,S,{type:Yn,depthBuffer:!1,stencilBuffer:!1}),h=new Sn(c,S,{type:Yn,depthBuffer:!1,stencilBuffer:!1}));for(let D=0;D<b.length;D++){let g=b[D];g.setSize&&g.setSize(c,S)}},this.begin=function(v,c){if(I||v.toneMapping===Xn&&b.length===0)return!1;if(d=c,c!==null){let S=c.width,D=c.height;(l.width!==S||l.height!==D)&&this.setSize(S,D)}return C===!1&&v.setRenderTarget(l),T=v.toneMapping,v.toneMapping=Xn,!0},this.hasRenderPass=function(){return C},this.end=function(v,c){v.toneMapping=T,I=!0;let S=l,D=a;for(let g=0;g<b.length;g++){let L=b[g];L.enabled!==!1&&(L.render(v,D,S,c),L.needsSwap!==!1&&(S=D,D=D===a?h:a))}if(_!==v.outputColorSpace||w!==v.toneMapping){_=v.outputColorSpace,w=v.toneMapping,m.defines={},Ee.getTransfer(_)===Ue&&(m.defines.SRGB_TRANSFER="");let g=tm[w];g&&(m.defines[g]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(d),v.render(x,f),d=null,I=!1},this.isCompositing=function(){return I},this.dispose=function(){l.dispose(),a!==null&&a.dispose(),h!==null&&h.dispose(),u.dispose(),m.dispose()}}var tu=new bn,Kl=new Ti(1,1),eu=new Gi,nu=new xa,iu=new rr,Uh=[],Fh=[],Oh=new Float32Array(16),Bh=new Float32Array(9),zh=new Float32Array(4);function Ds(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Uh[s];if(r===void 0&&(r=new Float32Array(s),Uh[s]=r),t!==0){n.toArray(r,0);for(let l=1,a=0;l!==t;++l)a+=e,i[l].toArray(r,a)}return r}function tn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function en(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Po(i,t){let e=Fh[t];e===void 0&&(e=new Int32Array(t),Fh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function nm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function im(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2fv(this.addr,t),en(e,t)}}function sm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(tn(e,t))return;i.uniform3fv(this.addr,t),en(e,t)}}function rm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4fv(this.addr,t),en(e,t)}}function am(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;zh.set(n),i.uniformMatrix2fv(this.addr,!1,zh),en(e,n)}}function om(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Bh.set(n),i.uniformMatrix3fv(this.addr,!1,Bh),en(e,n)}}function lm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Oh.set(n),i.uniformMatrix4fv(this.addr,!1,Oh),en(e,n)}}function cm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function hm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2iv(this.addr,t),en(e,t)}}function um(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;i.uniform3iv(this.addr,t),en(e,t)}}function dm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4iv(this.addr,t),en(e,t)}}function fm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function pm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2uiv(this.addr,t),en(e,t)}}function mm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;i.uniform3uiv(this.addr,t),en(e,t)}}function gm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4uiv(this.addr,t),en(e,t)}}function xm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Kl.compareFunction=e.isReversedDepthBuffer()?So:bo,r=Kl):r=tu,e.setTexture2D(t||r,s)}function _m(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||nu,s)}function ym(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||iu,s)}function vm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||eu,s)}function Mm(i){switch(i){case 5126:return nm;case 35664:return im;case 35665:return sm;case 35666:return rm;case 35674:return am;case 35675:return om;case 35676:return lm;case 5124:case 35670:return cm;case 35667:case 35671:return hm;case 35668:case 35672:return um;case 35669:case 35673:return dm;case 5125:return fm;case 36294:return pm;case 36295:return mm;case 36296:return gm;case 35678:case 36198:case 36298:case 36306:case 35682:return xm;case 35679:case 36299:case 36307:return _m;case 35680:case 36300:case 36308:case 36293:return ym;case 36289:case 36303:case 36311:case 36292:return vm}}function bm(i,t){i.uniform1fv(this.addr,t)}function Sm(i,t){let e=Ds(t,this.size,2);i.uniform2fv(this.addr,e)}function wm(i,t){let e=Ds(t,this.size,3);i.uniform3fv(this.addr,e)}function Tm(i,t){let e=Ds(t,this.size,4);i.uniform4fv(this.addr,e)}function Em(i,t){let e=Ds(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Am(i,t){let e=Ds(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Cm(i,t){let e=Ds(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Rm(i,t){i.uniform1iv(this.addr,t)}function Im(i,t){i.uniform2iv(this.addr,t)}function Pm(i,t){i.uniform3iv(this.addr,t)}function Lm(i,t){i.uniform4iv(this.addr,t)}function Dm(i,t){i.uniform1uiv(this.addr,t)}function Nm(i,t){i.uniform2uiv(this.addr,t)}function Um(i,t){i.uniform3uiv(this.addr,t)}function Fm(i,t){i.uniform4uiv(this.addr,t)}function Om(i,t,e){let n=this.cache,s=t.length,r=Po(e,s);tn(n,r)||(i.uniform1iv(this.addr,r),en(n,r));let l;this.type===i.SAMPLER_2D_SHADOW?l=Kl:l=tu;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||l,r[a])}function Bm(i,t,e){let n=this.cache,s=t.length,r=Po(e,s);tn(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let l=0;l!==s;++l)e.setTexture3D(t[l]||nu,r[l])}function zm(i,t,e){let n=this.cache,s=t.length,r=Po(e,s);tn(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let l=0;l!==s;++l)e.setTextureCube(t[l]||iu,r[l])}function km(i,t,e){let n=this.cache,s=t.length,r=Po(e,s);tn(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let l=0;l!==s;++l)e.setTexture2DArray(t[l]||eu,r[l])}function Vm(i){switch(i){case 5126:return bm;case 35664:return Sm;case 35665:return wm;case 35666:return Tm;case 35674:return Em;case 35675:return Am;case 35676:return Cm;case 5124:case 35670:return Rm;case 35667:case 35671:return Im;case 35668:case 35672:return Pm;case 35669:case 35673:return Lm;case 5125:return Dm;case 36294:return Nm;case 36295:return Um;case 36296:return Fm;case 35678:case 36198:case 36298:case 36306:case 35682:return Om;case 35679:case 36299:case 36307:return Bm;case 35680:case 36300:case 36308:case 36293:return zm;case 36289:case 36303:case 36311:case 36292:return km}}var jl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Mm(e.type)}},Ql=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Vm(e.type)}},tc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,l=s.length;r!==l;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Jl=/(\w+)(\])?(\[|\.)?/g;function kh(i,t){i.seq.push(t),i.map[t.id]=t}function Gm(i,t,e){let n=i.name,s=n.length;for(Jl.lastIndex=0;;){let r=Jl.exec(n),l=Jl.lastIndex,a=r[1],h=r[2]==="]",u=r[3];if(h&&(a=a|0),u===void 0||u==="["&&l+2===s){kh(e,u===void 0?new jl(a,i,t):new Ql(a,i,t));break}else{let x=e.map[a];x===void 0&&(x=new tc(a),kh(e,x)),e=x}}}var Ls=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let l=0;l<n;++l){let a=t.getActiveUniform(e,l),h=t.getUniformLocation(e,a.name);Gm(a,h,this)}let s=[],r=[];for(let l of this.seq)l.type===t.SAMPLER_2D_SHADOW||l.type===t.SAMPLER_CUBE_SHADOW||l.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(l):r.push(l);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,l=e.length;r!==l;++r){let a=e[r],h=n[a.id];h.needsUpdate!==!1&&a.setValue(t,h.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let l=t[s];l.id in e&&n.push(l)}return n}};function Vh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Hm=37297,Wm=0;function Xm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let l=s;l<r;l++){let a=l+1;n.push(`${a===t?">":" "} ${a}: ${e[l]}`)}return n.join(`
`)}var Gh=new de;function qm(i){Ee._getMatrix(Gh,Ee.workingColorSpace,i);let t=`mat3( ${Gh.elements.map(e=>e.toFixed(4))} )`;switch(Ee.getTransfer(i)){case qs:return[t,"LinearTransferOETF"];case Ue:return[t,"sRGBTransferOETF"];default:return he("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Hh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let l=/ERROR: 0:(\d+)/.exec(r);if(l){let a=parseInt(l[1]);return e.toUpperCase()+`

`+r+`

`+Xm(i.getShaderSource(t),a)}else return r}function Ym(i,t){let e=qm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Zm={[Ml]:"Linear",[bl]:"Reinhard",[Sl]:"Cineon",[mr]:"ACESFilmic",[Tl]:"AgX",[El]:"Neutral",[wl]:"Custom"};function Jm(i,t){let e=Zm[t];return e===void 0?(he("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Eo=new ht;function $m(){Ee.getLuminanceCoefficients(Eo);let i=Eo.x.toFixed(4),t=Eo.y.toFixed(4),e=Eo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Km(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ar).join(`
`)}function jm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Qm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),l=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[l]={type:r.type,location:i.getAttribLocation(t,l),locationSize:a}}return e}function Ar(i){return i!==""}function Wh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var t0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ec(i){return i.replace(t0,n0)}var e0=new Map;function n0(i,t){let e=ye[t];if(e===void 0){let n=e0.get(t);if(n!==void 0)e=ye[n],he('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ec(e)}var i0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qh(i){return i.replace(i0,s0)}function s0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var r0={[Wi]:"SHADOWMAP_TYPE_PCF",[Es]:"SHADOWMAP_TYPE_VSM"};function a0(i){return r0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var o0={[Ii]:"ENVMAP_TYPE_CUBE",[qi]:"ENVMAP_TYPE_CUBE",[gr]:"ENVMAP_TYPE_CUBE_UV"};function l0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":o0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var c0={[qi]:"ENVMAP_MODE_REFRACTION"};function h0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":c0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var u0={[vl]:"ENVMAP_BLENDING_MULTIPLY",[uh]:"ENVMAP_BLENDING_MIX",[dh]:"ENVMAP_BLENDING_ADD"};function d0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":u0[i.combine]||"ENVMAP_BLENDING_NONE"}function f0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function p0(i,t,e,n){let s=i.getContext(),r=e.defines,l=e.vertexShader,a=e.fragmentShader,h=a0(e),u=l0(e),m=h0(e),x=d0(e),f=f0(e),_=Km(e),w=jm(r),I=s.createProgram(),T,d,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(T=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(Ar).join(`
`),T.length>0&&(T+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(Ar).join(`
`),d.length>0&&(d+=`
`)):(T=[Yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+m:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ar).join(`
`),d=[Yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+m:"",e.envMap?"#define "+x:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?ye.tonemapping_pars_fragment:"",e.toneMapping!==Xn?Jm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,Ym("linearToOutputTexel",e.outputColorSpace),$m(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ar).join(`
`)),l=ec(l),l=Wh(l,e),l=Xh(l,e),a=ec(a),a=Wh(a,e),a=Xh(a,e),l=qh(l),a=qh(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,T=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+T,d=["#define varying in",e.glslVersion===wr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let C=b+T+l,v=b+d+a,c=Vh(s,s.VERTEX_SHADER,C),S=Vh(s,s.FRAGMENT_SHADER,v);s.attachShader(I,c),s.attachShader(I,S),e.index0AttributeName!==void 0?s.bindAttribLocation(I,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(I,0,"position"),s.linkProgram(I);function D(K){if(i.debug.checkShaderErrors){let q=s.getProgramInfoLog(I)||"",nt=s.getShaderInfoLog(c)||"",H=s.getShaderInfoLog(S)||"",tt=q.trim(),pt=nt.trim(),ut=H.trim(),vt=!0,dt=!0;if(s.getProgramParameter(I,s.LINK_STATUS)===!1)if(vt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,I,c,S);else{let gt=Hh(s,c,"vertex"),st=Hh(s,S,"fragment");ce("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(I,s.VALIDATE_STATUS)+`

Material Name: `+K.name+`
Material Type: `+K.type+`

Program Info Log: `+tt+`
`+gt+`
`+st)}else tt!==""?he("WebGLProgram: Program Info Log:",tt):(pt===""||ut==="")&&(dt=!1);dt&&(K.diagnostics={runnable:vt,programLog:tt,vertexShader:{log:pt,prefix:T},fragmentShader:{log:ut,prefix:d}})}s.deleteShader(c),s.deleteShader(S),g=new Ls(s,I),L=Qm(s,I)}let g;this.getUniforms=function(){return g===void 0&&D(this),g};let L;this.getAttributes=function(){return L===void 0&&D(this),L};let k=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(I,Hm)),k},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(I),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Wm++,this.cacheKey=t,this.usedTimes=1,this.program=I,this.vertexShader=c,this.fragmentShader=S,this}var m0=0,nc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ic(t),e.set(t,n)),n}},ic=class{constructor(t){this.id=m0++,this.code=t,this.usedTimes=0}};function g0(i){return i===Li||i===br||i===Sr}function x0(i,t,e,n,s,r){let l=new ys,a=new nc,h=new Set,u=[],m=new Map,x=n.logarithmicDepthBuffer,f=n.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(g){return h.add(g),g===0?"uv":`uv${g}`}function I(g,L,k,K,q,nt){let H=K.fog,tt=q.geometry,pt=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?K.environment:null,ut=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,vt=t.get(g.envMap||pt,ut),dt=vt&&vt.mapping===gr?vt.image.height:null,gt=_[g.type];g.precision!==null&&(f=n.getMaxPrecision(g.precision),f!==g.precision&&he("WebGLProgram.getParameters:",g.precision,"not supported, using",f,"instead."));let st=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,N=st!==void 0?st.length:0,Vt=0;tt.morphAttributes.position!==void 0&&(Vt=1),tt.morphAttributes.normal!==void 0&&(Vt=2),tt.morphAttributes.color!==void 0&&(Vt=3);let ge,Gt,ot,_t;if(gt){let $=ri[gt];ge=$.vertexShader,Gt=$.fragmentShader}else{ge=g.vertexShader,Gt=g.fragmentShader;let $=a.getVertexShaderStage(g),J=a.getFragmentShaderStage(g);a.update(g,$,J),ot=$.id,_t=J.id}let Mt=i.getRenderTarget(),Lt=i.state.buffers.depth.getReversed(),Wt=q.isInstancedMesh===!0,Dt=q.isBatchedMesh===!0,$t=!!g.map,ie=!!g.matcap,fe=!!vt,oe=!!g.aoMap,ue=!!g.lightMap,le=!!g.bumpMap&&g.wireframe===!1,Ae=!!g.normalMap,ve=!!g.displacementMap,We=!!g.emissiveMap,xe=!!g.metalnessMap,Ie=!!g.roughnessMap,Q=g.anisotropy>0,te=g.clearcoat>0,Me=g.dispersion>0,O=g.retroreflectivity>0,M=g.iridescence>0,z=g.sheen>0,Y=g.transmission>0,W=Q&&!!g.anisotropyMap,yt=te&&!!g.clearcoatMap,wt=te&&!!g.clearcoatNormalMap,mt=te&&!!g.clearcoatRoughnessMap,xt=M&&!!g.iridescenceMap,It=M&&!!g.iridescenceThicknessMap,Xt=z&&!!g.sheenColorMap,At=z&&!!g.sheenRoughnessMap,Ct=!!g.specularMap,zt=!!g.specularColorMap,Kt=!!g.specularIntensityMap,re=Y&&!!g.transmissionMap,Z=Y&&!!g.thicknessMap,Pt=!!g.gradientMap,P=!!g.alphaMap,X=g.alphaTest>0,it=!!g.alphaHash,y=!!g.extensions,B=Xn;g.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(B=i.toneMapping);let U={shaderID:gt,shaderType:g.type,shaderName:g.name,vertexShader:ge,fragmentShader:Gt,defines:g.defines,customVertexShaderID:ot,customFragmentShaderID:_t,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:f,batching:Dt,batchingColor:Dt&&q._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&q.instanceColor!==null,instancingMorph:Wt&&q.morphTexture!==null,outputColorSpace:Mt===null?i.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:Ee.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:$t,matcap:ie,envMap:fe,envMapMode:fe&&vt.mapping,envMapCubeUVHeight:dt,aoMap:oe,lightMap:ue,bumpMap:le,normalMap:Ae,displacementMap:ve,emissiveMap:We,normalMapObjectSpace:Ae&&g.normalMapType===mh,normalMapTangentSpace:Ae&&g.normalMapType===Mo,packedNormalMap:Ae&&g.normalMapType===Mo&&g0(g.normalMap.format),metalnessMap:xe,roughnessMap:Ie,anisotropy:Q,anisotropyMap:W,clearcoat:te,clearcoatMap:yt,clearcoatNormalMap:wt,clearcoatRoughnessMap:mt,dispersion:Me,retroreflection:O,iridescence:M,iridescenceMap:xt,iridescenceThicknessMap:It,sheen:z,sheenColorMap:Xt,sheenRoughnessMap:At,specularMap:Ct,specularColorMap:zt,specularIntensityMap:Kt,transmission:Y,transmissionMap:re,thicknessMap:Z,gradientMap:Pt,opaque:g.transparent===!1&&g.blending===As&&g.alphaToCoverage===!1,alphaMap:P,alphaTest:X,alphaHash:it,combine:g.combine,mapUv:$t&&w(g.map.channel),aoMapUv:oe&&w(g.aoMap.channel),lightMapUv:ue&&w(g.lightMap.channel),bumpMapUv:le&&w(g.bumpMap.channel),normalMapUv:Ae&&w(g.normalMap.channel),displacementMapUv:ve&&w(g.displacementMap.channel),emissiveMapUv:We&&w(g.emissiveMap.channel),metalnessMapUv:xe&&w(g.metalnessMap.channel),roughnessMapUv:Ie&&w(g.roughnessMap.channel),anisotropyMapUv:W&&w(g.anisotropyMap.channel),clearcoatMapUv:yt&&w(g.clearcoatMap.channel),clearcoatNormalMapUv:wt&&w(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&w(g.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&w(g.iridescenceMap.channel),iridescenceThicknessMapUv:It&&w(g.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&w(g.sheenColorMap.channel),sheenRoughnessMapUv:At&&w(g.sheenRoughnessMap.channel),specularMapUv:Ct&&w(g.specularMap.channel),specularColorMapUv:zt&&w(g.specularColorMap.channel),specularIntensityMapUv:Kt&&w(g.specularIntensityMap.channel),transmissionMapUv:re&&w(g.transmissionMap.channel),thicknessMapUv:Z&&w(g.thicknessMap.channel),alphaMapUv:P&&w(g.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(Ae||Q),vertexNormals:!!tt.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!tt.attributes.uv&&($t||P),fog:!!H,useFog:g.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||tt.attributes.normal===void 0&&Ae===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Lt,skinning:q.isSkinnedMesh===!0,hasPositionAttribute:tt.attributes.position!==void 0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:Vt,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:nt.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:B,decodeVideoTexture:$t&&g.map.isVideoTexture===!0&&Ee.getTransfer(g.map.colorSpace)===Ue,decodeVideoTextureEmissive:We&&g.emissiveMap.isVideoTexture===!0&&Ee.getTransfer(g.emissiveMap.colorSpace)===Ue,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Ln,flipSided:g.side===xn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:y&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(y&&g.extensions.multiDraw===!0||Dt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return U.vertexUv1s=h.has(1),U.vertexUv2s=h.has(2),U.vertexUv3s=h.has(3),h.clear(),U}function T(g){let L=[];if(g.shaderID?L.push(g.shaderID):(L.push(g.customVertexShaderID),L.push(g.customFragmentShaderID)),g.defines!==void 0)for(let k in g.defines)L.push(k),L.push(g.defines[k]);return g.isRawShaderMaterial===!1&&(d(L,g),b(L,g),L.push(i.outputColorSpace)),L.push(g.customProgramCacheKey),L.join()}function d(g,L){g.push(L.precision),g.push(L.outputColorSpace),g.push(L.envMapMode),g.push(L.envMapCubeUVHeight),g.push(L.mapUv),g.push(L.alphaMapUv),g.push(L.lightMapUv),g.push(L.aoMapUv),g.push(L.bumpMapUv),g.push(L.normalMapUv),g.push(L.displacementMapUv),g.push(L.emissiveMapUv),g.push(L.metalnessMapUv),g.push(L.roughnessMapUv),g.push(L.anisotropyMapUv),g.push(L.clearcoatMapUv),g.push(L.clearcoatNormalMapUv),g.push(L.clearcoatRoughnessMapUv),g.push(L.iridescenceMapUv),g.push(L.iridescenceThicknessMapUv),g.push(L.sheenColorMapUv),g.push(L.sheenRoughnessMapUv),g.push(L.specularMapUv),g.push(L.specularColorMapUv),g.push(L.specularIntensityMapUv),g.push(L.transmissionMapUv),g.push(L.thicknessMapUv),g.push(L.combine),g.push(L.fogExp2),g.push(L.sizeAttenuation),g.push(L.morphTargetsCount),g.push(L.morphAttributeCount),g.push(L.numSunLights),g.push(L.numDirLights),g.push(L.numPointLights),g.push(L.numSpotLights),g.push(L.numSpotLightMaps),g.push(L.numHemiLights),g.push(L.numRectAreaLights),g.push(L.numSunLightShadows),g.push(L.numDirLightShadows),g.push(L.numPointLightShadows),g.push(L.numSpotLightShadows),g.push(L.numSpotLightShadowsWithMaps),g.push(L.numLightProbes),g.push(L.shadowMapType),g.push(L.toneMapping),g.push(L.numClippingPlanes),g.push(L.numClipIntersection),g.push(L.depthPacking)}function b(g,L){l.disableAll(),L.instancing&&l.enable(0),L.instancingColor&&l.enable(1),L.instancingMorph&&l.enable(2),L.matcap&&l.enable(3),L.envMap&&l.enable(4),L.normalMapObjectSpace&&l.enable(5),L.normalMapTangentSpace&&l.enable(6),L.clearcoat&&l.enable(7),L.iridescence&&l.enable(8),L.alphaTest&&l.enable(9),L.vertexColors&&l.enable(10),L.vertexAlphas&&l.enable(11),L.vertexUv1s&&l.enable(12),L.vertexUv2s&&l.enable(13),L.vertexUv3s&&l.enable(14),L.vertexTangents&&l.enable(15),L.anisotropy&&l.enable(16),L.alphaHash&&l.enable(17),L.batching&&l.enable(18),L.dispersion&&l.enable(19),L.retroreflection&&l.enable(24),L.batchingColor&&l.enable(20),L.gradientMap&&l.enable(21),L.packedNormalMap&&l.enable(22),L.vertexNormals&&l.enable(23),g.push(l.mask),l.disableAll(),L.fog&&l.enable(0),L.useFog&&l.enable(1),L.flatShading&&l.enable(2),L.logarithmicDepthBuffer&&l.enable(3),L.reversedDepthBuffer&&l.enable(4),L.skinning&&l.enable(5),L.morphTargets&&l.enable(6),L.morphNormals&&l.enable(7),L.morphColors&&l.enable(8),L.premultipliedAlpha&&l.enable(9),L.shadowMapEnabled&&l.enable(10),L.doubleSided&&l.enable(11),L.flipSided&&l.enable(12),L.useDepthPacking&&l.enable(13),L.dithering&&l.enable(14),L.transmission&&l.enable(15),L.sheen&&l.enable(16),L.opaque&&l.enable(17),L.pointsUvs&&l.enable(18),L.decodeVideoTexture&&l.enable(19),L.decodeVideoTextureEmissive&&l.enable(20),L.alphaToCoverage&&l.enable(21),L.numLightProbeGrids>0&&l.enable(22),L.hasPositionAttribute&&l.enable(23),g.push(l.mask)}function C(g){let L=_[g.type],k;if(L){let K=ri[L];k=Ch.clone(K.uniforms)}else k=g.uniforms;return k}function v(g,L){let k=m.get(L);return k!==void 0?++k.usedTimes:(k=new p0(i,L,g,s),u.push(k),m.set(L,k)),k}function c(g){if(--g.usedTimes===0){let L=u.indexOf(g);u[L]=u[u.length-1],u.pop(),m.delete(g.cacheKey),g.destroy()}}function S(g){a.remove(g)}function D(){a.dispose()}return{getParameters:I,getProgramCacheKey:T,getUniforms:C,acquireProgram:v,releaseProgram:c,releaseShaderCache:S,programs:u,dispose:D}}function _0(){let i=new WeakMap;function t(l){return i.has(l)}function e(l){let a=i.get(l);return a===void 0&&(a={},i.set(l,a)),a}function n(l){i.delete(l)}function s(l,a,h){i.get(l)[a]=h}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function y0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Zh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Jh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function l(f){let _=0;return f.isInstancedMesh&&(_+=2),f.isSkinnedMesh&&(_+=1),_}function a(f,_,w,I,T,d){let b=i[t];return b===void 0?(b={id:f.id,object:f,geometry:_,material:w,materialVariant:l(f),groupOrder:I,renderOrder:f.renderOrder,z:T,group:d},i[t]=b):(b.id=f.id,b.object=f,b.geometry=_,b.material=w,b.materialVariant=l(f),b.groupOrder=I,b.renderOrder=f.renderOrder,b.z=T,b.group=d),t++,b}function h(f,_,w,I,T,d,b){b.reversedDepth===!0&&(T=-T);let C=a(f,_,w,I,T,d);w.transmission>0?n.push(C):w.transparent===!0?s.push(C):e.push(C)}function u(f,_,w,I,T,d){let b=a(f,_,w,I,T,d);w.transmission>0?n.unshift(b):w.transparent===!0?s.unshift(b):e.unshift(b)}function m(f,_){e.length>1&&e.sort(f||y0),n.length>1&&n.sort(_||Zh),s.length>1&&s.sort(_||Zh)}function x(){for(let f=t,_=i.length;f<_;f++){let w=i[f];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:h,unshift:u,finish:x,sort:m}}function v0(){let i=new WeakMap;function t(n,s){let r=i.get(n),l;return r===void 0?(l=new Jh,i.set(n,[l])):s>=r.length?(l=new Jh,r.push(l)):l=r[s],l}function e(){i=new WeakMap}return{get:t,dispose:e}}function M0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new ht,color:new _e};break;case"SpotLight":e={position:new ht,direction:new ht,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new ht,color:new _e,distance:0,decay:0};break;case"HemisphereLight":e={direction:new ht,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":e={color:new _e,position:new ht,halfWidth:new ht,halfHeight:new ht};break}return i[t.id]=e,e}}}function b0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var S0=0;function w0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function T0(i){let t=new M0,e=b0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new ht);let s=new ht,r=new Ne,l=new Ne;function a(u){let m=0,x=0,f=0;for(let q=0;q<9;q++)n.probe[q].set(0,0,0);let _=0,w=0,I=0,T=0,d=0,b=0,C=0,v=0,c=0,S=0,D=0,g=0,L=0,k=0;u.sort(w0);for(let q=0,nt=u.length;q<nt;q++){let H=u[q],tt=H.color,pt=H.intensity,ut=H.distance,vt=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Li?vt=H.shadow.map.texture:vt=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)m+=tt.r*pt,x+=tt.g*pt,f+=tt.b*pt;else if(H.isLightProbe){for(let dt=0;dt<9;dt++)n.probe[dt].addScaledVector(H.sh.coefficients[dt],pt);k++}else if(H.isSunLight){let dt=t.get(H);if(dt.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){let gt=H.shadow,st=e.get(H);st.shadowIntensity=gt.intensity,st.shadowBias=gt.bias,st.shadowNormalBias=gt.normalBias,st.shadowRadius=gt.radius,st.shadowMapSize.copy(gt.mapSize).multiply(gt.getFrameExtents()),n.sunShadow[w]=st,n.sunShadowMap[w]=vt;let N=gt.getViewportCount();for(let Vt=0;Vt<N;Vt++)n.sunShadowMatrix[I+Vt]=gt.getMatrix(Vt),n.sunShadowCascade[I+Vt]=gt._cascadeData[Vt];I+=N,w++}n.sun[_]=dt,_++}else if(H.isDirectionalLight){let dt=t.get(H);if(dt.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){let gt=H.shadow,st=e.get(H);st.shadowIntensity=gt.intensity,st.shadowBias=gt.bias,st.shadowNormalBias=gt.normalBias,st.shadowRadius=gt.radius,st.shadowMapSize=gt.mapSize,n.directionalShadow[T]=st,n.directionalShadowMap[T]=vt,n.directionalShadowMatrix[T]=H.shadow.matrix,c++}n.directional[T]=dt,T++}else if(H.isSpotLight){let dt=t.get(H);dt.position.setFromMatrixPosition(H.matrixWorld),dt.color.copy(tt).multiplyScalar(pt),dt.distance=ut,dt.coneCos=Math.cos(H.angle),dt.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),dt.decay=H.decay,n.spot[b]=dt;let gt=H.shadow;if(H.map&&(n.spotLightMap[g]=H.map,g++,gt.updateMatrices(H),H.castShadow&&L++),n.spotLightMatrix[b]=gt.matrix,H.castShadow){let st=e.get(H);st.shadowIntensity=gt.intensity,st.shadowBias=gt.bias,st.shadowNormalBias=gt.normalBias,st.shadowRadius=gt.radius,st.shadowMapSize=gt.mapSize,n.spotShadow[b]=st,n.spotShadowMap[b]=vt,D++}b++}else if(H.isRectAreaLight){let dt=t.get(H);dt.color.copy(tt).multiplyScalar(pt),dt.halfWidth.set(H.width*.5,0,0),dt.halfHeight.set(0,H.height*.5,0),n.rectArea[C]=dt,C++}else if(H.isPointLight){let dt=t.get(H);if(dt.color.copy(H.color).multiplyScalar(H.intensity),dt.distance=H.distance,dt.decay=H.decay,H.castShadow){let gt=H.shadow,st=e.get(H);st.shadowIntensity=gt.intensity,st.shadowBias=gt.bias,st.shadowNormalBias=gt.normalBias,st.shadowRadius=gt.radius,st.shadowMapSize=gt.mapSize,st.shadowCameraNear=gt.camera.near,st.shadowCameraFar=gt.camera.far,n.pointShadow[d]=st,n.pointShadowMap[d]=vt,n.pointShadowMatrix[d]=H.shadow.matrix,S++}n.point[d]=dt,d++}else if(H.isHemisphereLight){let dt=t.get(H);dt.skyColor.copy(H.color).multiplyScalar(pt),dt.groundColor.copy(H.groundColor).multiplyScalar(pt),n.hemi[v]=dt,v++}}C>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=kt.LTC_FLOAT_1,n.rectAreaLTC2=kt.LTC_FLOAT_2):(n.rectAreaLTC1=kt.LTC_HALF_1,n.rectAreaLTC2=kt.LTC_HALF_2)),n.ambient[0]=m,n.ambient[1]=x,n.ambient[2]=f;let K=n.hash;(K.sunLength!==_||K.directionalLength!==T||K.pointLength!==d||K.spotLength!==b||K.rectAreaLength!==C||K.hemiLength!==v||K.numSunShadows!==w||K.numDirectionalShadows!==c||K.numPointShadows!==S||K.numSpotShadows!==D||K.numSpotMaps!==g||K.numLightProbes!==k)&&(n.sun.length=_,n.directional.length=T,n.spot.length=b,n.rectArea.length=C,n.point.length=d,n.hemi.length=v,n.sunShadow.length=w,n.sunShadowMap.length=w,n.sunShadowMatrix.length=I,n.sunShadowCascade.length=I,n.directionalShadow.length=c,n.directionalShadowMap.length=c,n.directionalShadowMatrix.length=c,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=D,n.spotShadowMap.length=D,n.spotLightMatrix.length=D+g-L,n.spotLightMap.length=g,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=k,K.sunLength=_,K.directionalLength=T,K.pointLength=d,K.spotLength=b,K.rectAreaLength=C,K.hemiLength=v,K.numSunShadows=w,K.numDirectionalShadows=c,K.numPointShadows=S,K.numSpotShadows=D,K.numSpotMaps=g,K.numLightProbes=k,n.version=S0++)}function h(u,m){let x=0,f=0,_=0,w=0,I=0,T=0,d=m.matrixWorldInverse;for(let b=0,C=u.length;b<C;b++){let v=u[b];if(v.isSunLight){let c=n.sun[x];c.direction.setFromMatrixPosition(v.matrixWorld),c.direction.transformDirection(d),x++}else if(v.isDirectionalLight){let c=n.directional[f];c.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),c.direction.sub(s),c.direction.transformDirection(d),f++}else if(v.isSpotLight){let c=n.spot[w];c.position.setFromMatrixPosition(v.matrixWorld),c.position.applyMatrix4(d),c.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),c.direction.sub(s),c.direction.transformDirection(d),w++}else if(v.isRectAreaLight){let c=n.rectArea[I];c.position.setFromMatrixPosition(v.matrixWorld),c.position.applyMatrix4(d),l.identity(),r.copy(v.matrixWorld),r.premultiply(d),l.extractRotation(r),c.halfWidth.set(v.width*.5,0,0),c.halfHeight.set(0,v.height*.5,0),c.halfWidth.applyMatrix4(l),c.halfHeight.applyMatrix4(l),I++}else if(v.isPointLight){let c=n.point[_];c.position.setFromMatrixPosition(v.matrixWorld),c.position.applyMatrix4(d),_++}else if(v.isHemisphereLight){let c=n.hemi[T];c.direction.setFromMatrixPosition(v.matrixWorld),c.direction.transformDirection(d),T++}}}return{setup:a,setupView:h,state:n}}function $h(i){let t=new T0(i),e=[],n=[],s=[];function r(f){x.camera=f,e.length=0,n.length=0,s.length=0}function l(f){e.push(f)}function a(f){n.push(f)}function h(f){s.push(f)}function u(){t.setup(e)}function m(f){t.setupView(e,f)}let x={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:x,setupLights:u,setupLightsView:m,pushLight:l,pushShadow:a,pushLightProbeGrid:h}}function E0(i){let t=new WeakMap;function e(s,r=0){let l=t.get(s),a;return l===void 0?(a=new $h(i),t.set(s,[a])):r>=l.length?(a=new $h(i),l.push(a)):a=l[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var A0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C0=`uniform sampler2D shadow_pass;
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
}`,R0=[new ht(1,0,0),new ht(-1,0,0),new ht(0,1,0),new ht(0,-1,0),new ht(0,0,1),new ht(0,0,-1)],I0=[new ht(0,-1,0),new ht(0,-1,0),new ht(0,0,1),new ht(0,0,-1),new ht(0,-1,0),new ht(0,-1,0)],Kh=new Ne,Er=new ht,$l=new ht;function P0(i,t,e){let n=new Ms,s=new Te,r=new Te,l=new Xe,a=new ws,h=new ya,u={},m=e.maxTextureSize,x={[Ri]:xn,[xn]:Ri,[Ln]:Ln},f=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:A0,fragmentShader:C0}),_=f.clone();_.defines.HORIZONTAL_PASS=1;let w=new Rn;w.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let I=new fn(w,f),T=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wi;let d=this.type;this.render=function(S,D,g){if(T.enabled===!1||T.autoUpdate===!1&&T.needsUpdate===!1||S.length===0)return;this.type===qc&&(he("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Wi);let L=i.getRenderTarget(),k=i.getActiveCubeFace(),K=i.getActiveMipmapLevel(),q=i.state;q.setBlending(ni),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let nt=d!==this.type;nt&&D.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(tt=>tt.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,tt=S.length;H<tt;H++){let pt=S[H],ut=pt.shadow;if(ut===void 0){he("WebGLShadowMap:",pt,"has no shadow.");continue}if(ut.autoUpdate===!1&&ut.needsUpdate===!1)continue;s.copy(ut.mapSize);let vt=ut.getFrameExtents();s.multiply(vt),r.copy(ut.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(r.x=Math.floor(m/vt.x),s.x=r.x*vt.x,ut.mapSize.x=r.x),s.y>m&&(r.y=Math.floor(m/vt.y),s.y=r.y*vt.y,ut.mapSize.y=r.y));let dt=i.state.buffers.depth.getReversed();if(ut.camera._reversedDepth=dt,ut.map===null||nt===!0){if(ut.map!==null&&(ut.map.depthTexture!==null&&(ut.map.depthTexture.dispose(),ut.map.depthTexture=null),ut.map.dispose()),this.type===Es){if(pt.isPointLight){he("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ut.map=new Sn(s.x,s.y,{format:Li,type:Yn,minFilter:Qe,magFilter:Qe,generateMipmaps:!1}),ut.map.texture.name=pt.name+".shadowMap",ut.map.depthTexture=new Ti(s.x,s.y,On),ut.map.depthTexture.name=pt.name+".shadowMapDepth",ut.map.depthTexture.format=jn,ut.map.depthTexture.compareFunction=null,ut.map.depthTexture.minFilter=rn,ut.map.depthTexture.magFilter=rn}else pt.isPointLight?(ut.map=new Co(s.x),ut.map.depthTexture=new _a(s.x,qn)):(ut.map=new Sn(s.x,s.y),ut.map.depthTexture=new Ti(s.x,s.y,qn)),ut.map.depthTexture.name=pt.name+".shadowMap",ut.map.depthTexture.format=jn,this.type===Wi?(ut.map.depthTexture.compareFunction=dt?So:bo,ut.map.depthTexture.minFilter=Qe,ut.map.depthTexture.magFilter=Qe):(ut.map.depthTexture.compareFunction=null,ut.map.depthTexture.minFilter=rn,ut.map.depthTexture.magFilter=rn);ut.camera.updateProjectionMatrix()}ut.map.isWebGLCubeRenderTarget!==!0&&(ut.map.width!==s.x||ut.map.height!==s.y)&&ut.map.setSize(s.x,s.y);let gt=ut.map.isWebGLCubeRenderTarget?6:ut.getViewportCount();pt.isPointLight!==!0&&ut.updateMatrices(pt,g);for(let st=0;st<gt;st++){let N=ut.getCamera(st);if(pt.isPointLight){let Vt=ut.camera,ge=ut.matrix,Gt=pt.distance||Vt.far;Gt!==Vt.far&&(Vt.far=Gt,Vt.updateProjectionMatrix()),Er.setFromMatrixPosition(pt.matrixWorld),Vt.position.copy(Er),$l.copy(Vt.position),$l.add(R0[st]),Vt.up.copy(I0[st]),Vt.lookAt($l),Vt.updateMatrixWorld(),ge.makeTranslation(-Er.x,-Er.y,-Er.z),Kh.multiplyMatrices(Vt.projectionMatrix,Vt.matrixWorldInverse),ut._frustum.setFromProjectionMatrix(Kh,Vt.coordinateSystem,Vt.reversedDepth)}if(ut.map.isWebGLCubeRenderTarget)i.setRenderTarget(ut.map,st),i.clear();else{st===0&&(i.setRenderTarget(ut.map),i.clear());let Vt=ut.getViewport(st);l.set(r.x*Vt.x,r.y*Vt.y,r.x*Vt.z,r.y*Vt.w),q.viewport(l)}n=ut.getFrustum(st),v(D,g,N,pt,this.type)}ut.isPointLightShadow!==!0&&this.type===Es&&b(ut,g),ut.needsUpdate=!1}d=this.type,T.needsUpdate=!1,i.setRenderTarget(L,k,K)};function b(S,D){let g=t.update(I);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,_.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,_.needsUpdate=!0),S.mapPass===null?S.mapPass=new Sn(s.x,s.y,{format:Li,type:Yn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(D,null,g,f,I,null),_.uniforms.shadow_pass.value=S.mapPass.texture,_.uniforms.resolution.value.set(S.map.width,S.map.height),_.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(D,null,g,_,I,null)}function C(S,D,g,L){let k=null,K=g.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(K!==void 0)k=K;else if(k=g.isPointLight===!0?h:a,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let q=k.uuid,nt=D.uuid,H=u[q];H===void 0&&(H={},u[q]=H);let tt=H[nt];tt===void 0&&(tt=k.clone(),H[nt]=tt,D.addEventListener("dispose",c)),k=tt}if(k.visible=D.visible,k.wireframe=D.wireframe,L===Es?k.side=D.shadowSide!==null?D.shadowSide:D.side:k.side=D.shadowSide!==null?D.shadowSide:x[D.side],k.alphaMap=D.alphaMap,k.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,k.map=D.map,k.clipShadows=D.clipShadows,k.clippingPlanes=D.clippingPlanes,k.clipIntersection=D.clipIntersection,k.displacementMap=D.displacementMap,k.displacementScale=D.displacementScale,k.displacementBias=D.displacementBias,k.wireframeLinewidth=D.wireframeLinewidth,k.linewidth=D.linewidth,g.isPointLight===!0&&k.isMeshDistanceMaterial===!0){let q=i.properties.get(k);q.light=g}return k}function v(S,D,g,L,k){if(S.visible===!1)return;if(S.layers.test(D.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&k===Es)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,S.matrixWorld);let nt=t.update(S),H=S.material;if(Array.isArray(H)){let tt=nt.groups;for(let pt=0,ut=tt.length;pt<ut;pt++){let vt=tt[pt],dt=H[vt.materialIndex];if(dt&&dt.visible){let gt=C(S,dt,L,k);S.onBeforeShadow(i,S,D,g,nt,gt,vt),i.renderBufferDirect(g,null,nt,gt,S,vt),S.onAfterShadow(i,S,D,g,nt,gt,vt)}}}else if(H.visible){let tt=C(S,H,L,k);S.onBeforeShadow(i,S,D,g,nt,tt,null),i.renderBufferDirect(g,null,nt,tt,S,null),S.onAfterShadow(i,S,D,g,nt,tt,null)}}let q=S.children;for(let nt=0,H=q.length;nt<H;nt++)v(q[nt],D,g,L,k)}function c(S){S.target.removeEventListener("dispose",c);for(let g in u){let L=u[g],k=S.target.uuid;k in L&&(L[k].dispose(),delete L[k])}}}function L0(i,t){function e(){let Z=!1,Pt=new Xe,P=null,X=new Xe(0,0,0,0);return{setMask:function(it){P!==it&&!Z&&(i.colorMask(it,it,it,it),P=it)},setLocked:function(it){Z=it},setClear:function(it,y,B,U,$){$===!0&&(it*=U,y*=U,B*=U),Pt.set(it,y,B,U),X.equals(Pt)===!1&&(i.clearColor(it,y,B,U),X.copy(Pt))},reset:function(){Z=!1,P=null,X.set(-1,0,0,0)}}}function n(){let Z=!1,Pt=!1,P=null,X=null,it=null;return{setReversed:function(y){if(Pt!==y){let B=t.get("EXT_clip_control");y?B.clipControlEXT(B.LOWER_LEFT_EXT,B.ZERO_TO_ONE_EXT):B.clipControlEXT(B.LOWER_LEFT_EXT,B.NEGATIVE_ONE_TO_ONE_EXT),Pt=y;let U=it;it=null,this.setClear(U)}},getReversed:function(){return Pt},setTest:function(y){y?Mt(i.DEPTH_TEST):Lt(i.DEPTH_TEST)},setMask:function(y){P!==y&&!Z&&(i.depthMask(y),P=y)},setFunc:function(y){if(Pt&&(y=Eh[y]),X!==y){switch(y){case ra:i.depthFunc(i.NEVER);break;case aa:i.depthFunc(i.ALWAYS);break;case oa:i.depthFunc(i.LESS);break;case ps:i.depthFunc(i.LEQUAL);break;case la:i.depthFunc(i.EQUAL);break;case ca:i.depthFunc(i.GEQUAL);break;case ha:i.depthFunc(i.GREATER);break;case ua:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}X=y}},setLocked:function(y){Z=y},setClear:function(y){it!==y&&(it=y,Pt&&(y=1-y),i.clearDepth(y))},reset:function(){Z=!1,P=null,X=null,it=null,Pt=!1}}}function s(){let Z=!1,Pt=null,P=null,X=null,it=null,y=null,B=null,U=null,$=null;return{setTest:function(J){Z||(J?Mt(i.STENCIL_TEST):Lt(i.STENCIL_TEST))},setMask:function(J){Pt!==J&&!Z&&(i.stencilMask(J),Pt=J)},setFunc:function(J,bt,rt){(P!==J||X!==bt||it!==rt)&&(i.stencilFunc(J,bt,rt),P=J,X=bt,it=rt)},setOp:function(J,bt,rt){(y!==J||B!==bt||U!==rt)&&(i.stencilOp(J,bt,rt),y=J,B=bt,U=rt)},setLocked:function(J){Z=J},setClear:function(J){$!==J&&(i.clearStencil(J),$=J)},reset:function(){Z=!1,Pt=null,P=null,X=null,it=null,y=null,B=null,U=null,$=null}}}let r=new e,l=new n,a=new s,h=new WeakMap,u=new WeakMap,m={},x={},f={},_=new WeakMap,w=[],I=null,T=!1,d=null,b=null,C=null,v=null,c=null,S=null,D=null,g=new _e(0,0,0),L=0,k=!1,K=null,q=null,nt=null,H=null,tt=null,pt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ut=!1,vt=0,dt=i.getParameter(i.VERSION);dt.indexOf("WebGL")!==-1?(vt=parseFloat(/^WebGL (\d)/.exec(dt)[1]),ut=vt>=1):dt.indexOf("OpenGL ES")!==-1&&(vt=parseFloat(/^OpenGL ES (\d)/.exec(dt)[1]),ut=vt>=2);let gt=null,st={},N=i.getParameter(i.SCISSOR_BOX),Vt=i.getParameter(i.VIEWPORT),ge=new Xe().fromArray(N),Gt=new Xe().fromArray(Vt);function ot(Z,Pt,P,X){let it=new Uint8Array(4),y=i.createTexture();i.bindTexture(Z,y),i.texParameteri(Z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let B=0;B<P;B++)Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?i.texImage3D(Pt,0,i.RGBA,1,1,X,0,i.RGBA,i.UNSIGNED_BYTE,it):i.texImage2D(Pt+B,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,it);return y}let _t={};_t[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),l.setClear(1),a.setClear(0),Mt(i.DEPTH_TEST),l.setFunc(ps),le(!1),Ae(pl),Mt(i.CULL_FACE),oe(ni);function Mt(Z){m[Z]!==!0&&(i.enable(Z),m[Z]=!0)}function Lt(Z){m[Z]!==!1&&(i.disable(Z),m[Z]=!1)}function Wt(Z,Pt){return f[Z]!==Pt?(i.bindFramebuffer(Z,Pt),f[Z]=Pt,Z===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Pt),Z===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Pt),!0):!1}function Dt(Z,Pt){let P=w,X=!1;if(Z){P=_.get(Pt),P===void 0&&(P=[],_.set(Pt,P));let it=Z.textures;if(P.length!==it.length||P[0]!==i.COLOR_ATTACHMENT0){for(let y=0,B=it.length;y<B;y++)P[y]=i.COLOR_ATTACHMENT0+y;P.length=it.length,X=!0}}else P[0]!==i.BACK&&(P[0]=i.BACK,X=!0);X&&i.drawBuffers(P)}function $t(Z){return I!==Z?(i.useProgram(Z),I=Z,!0):!1}let ie={[Xi]:i.FUNC_ADD,[Zc]:i.FUNC_SUBTRACT,[Jc]:i.FUNC_REVERSE_SUBTRACT};ie[$c]=i.MIN,ie[Kc]=i.MAX;let fe={[jc]:i.ZERO,[Qc]:i.ONE,[th]:i.SRC_COLOR,[_l]:i.SRC_ALPHA,[ah]:i.SRC_ALPHA_SATURATE,[sh]:i.DST_COLOR,[nh]:i.DST_ALPHA,[eh]:i.ONE_MINUS_SRC_COLOR,[yl]:i.ONE_MINUS_SRC_ALPHA,[rh]:i.ONE_MINUS_DST_COLOR,[ih]:i.ONE_MINUS_DST_ALPHA,[oh]:i.CONSTANT_COLOR,[lh]:i.ONE_MINUS_CONSTANT_COLOR,[ch]:i.CONSTANT_ALPHA,[hh]:i.ONE_MINUS_CONSTANT_ALPHA};function oe(Z,Pt,P,X,it,y,B,U,$,J){if(Z===ni){T===!0&&(Lt(i.BLEND),T=!1);return}if(T===!1&&(Mt(i.BLEND),T=!0),Z!==Yc){if(Z!==d||J!==k){if((b!==Xi||c!==Xi)&&(i.blendEquation(i.FUNC_ADD),b=Xi,c=Xi),J)switch(Z){case As:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ml:i.blendFunc(i.ONE,i.ONE);break;case gl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ce("WebGLState: Invalid blending: ",Z);break}else switch(Z){case As:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ml:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case gl:ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xl:ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ce("WebGLState: Invalid blending: ",Z);break}C=null,v=null,S=null,D=null,g.set(0,0,0),L=0,d=Z,k=J}return}it=it||Pt,y=y||P,B=B||X,(Pt!==b||it!==c)&&(i.blendEquationSeparate(ie[Pt],ie[it]),b=Pt,c=it),(P!==C||X!==v||y!==S||B!==D)&&(i.blendFuncSeparate(fe[P],fe[X],fe[y],fe[B]),C=P,v=X,S=y,D=B),(U.equals(g)===!1||$!==L)&&(i.blendColor(U.r,U.g,U.b,$),g.copy(U),L=$),d=Z,k=!1}function ue(Z,Pt){Z.side===Ln?Lt(i.CULL_FACE):Mt(i.CULL_FACE);let P=Z.side===xn;Pt&&(P=!P),le(P),Z.blending===As&&Z.transparent===!1?oe(ni):oe(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),l.setFunc(Z.depthFunc),l.setTest(Z.depthTest),l.setMask(Z.depthWrite),r.setMask(Z.colorWrite);let X=Z.stencilWrite;a.setTest(X),X&&(a.setMask(Z.stencilWriteMask),a.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),a.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),We(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?Mt(i.SAMPLE_ALPHA_TO_COVERAGE):Lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function le(Z){K!==Z&&(Z?i.frontFace(i.CW):i.frontFace(i.CCW),K=Z)}function Ae(Z){Z!==Wc?(Mt(i.CULL_FACE),Z!==q&&(Z===pl?i.cullFace(i.BACK):Z===Xc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Lt(i.CULL_FACE),q=Z}function ve(Z){Z!==nt&&(ut&&i.lineWidth(Z),nt=Z)}function We(Z,Pt,P){Z?(Mt(i.POLYGON_OFFSET_FILL),(H!==Pt||tt!==P)&&(H=Pt,tt=P,l.getReversed()&&(Pt=-Pt),i.polygonOffset(Pt,P))):Lt(i.POLYGON_OFFSET_FILL)}function xe(Z){Z?Mt(i.SCISSOR_TEST):Lt(i.SCISSOR_TEST)}function Ie(Z){Z===void 0&&(Z=i.TEXTURE0+pt-1),gt!==Z&&(i.activeTexture(Z),gt=Z)}function Q(Z,Pt,P){P===void 0&&(gt===null?P=i.TEXTURE0+pt-1:P=gt);let X=st[P];X===void 0&&(X={type:void 0,texture:void 0},st[P]=X),(X.type!==Z||X.texture!==Pt)&&(gt!==P&&(i.activeTexture(P),gt=P),i.bindTexture(Z,Pt||_t[Z]),X.type=Z,X.texture=Pt)}function te(){let Z=st[gt];Z!==void 0&&Z.type!==void 0&&(i.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function Me(){try{i.compressedTexImage2D(...arguments)}catch(Z){ce("WebGLState:",Z)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(Z){ce("WebGLState:",Z)}}function M(){try{i.texSubImage2D(...arguments)}catch(Z){ce("WebGLState:",Z)}}function z(){try{i.texSubImage3D(...arguments)}catch(Z){ce("WebGLState:",Z)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(Z){ce("WebGLState:",Z)}}function W(){try{i.compressedTexSubImage3D(...arguments)}catch(Z){ce("WebGLState:",Z)}}function yt(){try{i.texStorage2D(...arguments)}catch(Z){ce("WebGLState:",Z)}}function wt(){try{i.texStorage3D(...arguments)}catch(Z){ce("WebGLState:",Z)}}function mt(){try{i.texImage2D(...arguments)}catch(Z){ce("WebGLState:",Z)}}function xt(){try{i.texImage3D(...arguments)}catch(Z){ce("WebGLState:",Z)}}function It(Z){return x[Z]!==void 0?x[Z]:i.getParameter(Z)}function Xt(Z,Pt){x[Z]!==Pt&&(i.pixelStorei(Z,Pt),x[Z]=Pt)}function At(Z){ge.equals(Z)===!1&&(i.scissor(Z.x,Z.y,Z.z,Z.w),ge.copy(Z))}function Ct(Z){Gt.equals(Z)===!1&&(i.viewport(Z.x,Z.y,Z.z,Z.w),Gt.copy(Z))}function zt(Z,Pt){let P=u.get(Pt);P===void 0&&(P=new WeakMap,u.set(Pt,P));let X=P.get(Z);X===void 0&&(X=i.getUniformBlockIndex(Pt,Z.name),P.set(Z,X))}function Kt(Z,Pt){let X=u.get(Pt).get(Z);h.get(Pt)!==X&&(i.uniformBlockBinding(Pt,X,Z.__bindingPointIndex),h.set(Pt,X))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),l.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),m={},x={},gt=null,st={},f={},_=new WeakMap,w=[],I=null,T=!1,d=null,b=null,C=null,v=null,c=null,S=null,D=null,g=new _e(0,0,0),L=0,k=!1,K=null,q=null,nt=null,H=null,tt=null,ge.set(0,0,i.canvas.width,i.canvas.height),Gt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),l.reset(),a.reset()}return{buffers:{color:r,depth:l,stencil:a},enable:Mt,disable:Lt,bindFramebuffer:Wt,drawBuffers:Dt,useProgram:$t,setBlending:oe,setMaterial:ue,setFlipSided:le,setCullFace:Ae,setLineWidth:ve,setPolygonOffset:We,setScissorTest:xe,activeTexture:Ie,bindTexture:Q,unbindTexture:te,compressedTexImage2D:Me,compressedTexImage3D:O,texImage2D:mt,texImage3D:xt,pixelStorei:Xt,getParameter:It,updateUBOMapping:zt,uniformBlockBinding:Kt,texStorage2D:yt,texStorage3D:wt,texSubImage2D:M,texSubImage3D:z,compressedTexSubImage2D:Y,compressedTexSubImage3D:W,scissor:At,viewport:Ct,reset:re}}function D0(i,t,e,n,s,r,l){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Te,m=new WeakMap,x=new Set,f,_=new WeakMap,w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function I(O,M){return w?new OffscreenCanvas(O,M):Ys("canvas")}function T(O,M,z){let Y=1,W=Me(O);if((W.width>z||W.height>z)&&(Y=z/Math.max(W.width,W.height)),Y<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){let yt=Math.floor(Y*W.width),wt=Math.floor(Y*W.height);f===void 0&&(f=I(yt,wt));let mt=M?I(yt,wt):f;return mt.width=yt,mt.height=wt,mt.getContext("2d").drawImage(O,0,0,yt,wt),he("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+yt+"x"+wt+")."),mt}else return"data"in O&&he("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),O;return O}function d(O){return O.generateMipmaps}function b(O){i.generateMipmap(O)}function C(O){return O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?i.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(O,M,z,Y,W,yt=!1){if(O!==null){if(i[O]!==void 0)return i[O];he("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let wt;Y&&(wt=t.get("EXT_texture_norm16"),wt||he("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let mt=M;if(M===i.RED&&(z===i.FLOAT&&(mt=i.R32F),z===i.HALF_FLOAT&&(mt=i.R16F),z===i.UNSIGNED_BYTE&&(mt=i.R8),z===i.UNSIGNED_SHORT&&wt&&(mt=wt.R16_EXT),z===i.SHORT&&wt&&(mt=wt.R16_SNORM_EXT)),M===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(mt=i.R8UI),z===i.UNSIGNED_SHORT&&(mt=i.R16UI),z===i.UNSIGNED_INT&&(mt=i.R32UI),z===i.BYTE&&(mt=i.R8I),z===i.SHORT&&(mt=i.R16I),z===i.INT&&(mt=i.R32I)),M===i.RG&&(z===i.FLOAT&&(mt=i.RG32F),z===i.HALF_FLOAT&&(mt=i.RG16F),z===i.UNSIGNED_BYTE&&(mt=i.RG8),z===i.UNSIGNED_SHORT&&wt&&(mt=wt.RG16_EXT),z===i.SHORT&&wt&&(mt=wt.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(mt=i.RG8UI),z===i.UNSIGNED_SHORT&&(mt=i.RG16UI),z===i.UNSIGNED_INT&&(mt=i.RG32UI),z===i.BYTE&&(mt=i.RG8I),z===i.SHORT&&(mt=i.RG16I),z===i.INT&&(mt=i.RG32I)),M===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(mt=i.RGB8UI),z===i.UNSIGNED_SHORT&&(mt=i.RGB16UI),z===i.UNSIGNED_INT&&(mt=i.RGB32UI),z===i.BYTE&&(mt=i.RGB8I),z===i.SHORT&&(mt=i.RGB16I),z===i.INT&&(mt=i.RGB32I)),M===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(mt=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(mt=i.RGBA16UI),z===i.UNSIGNED_INT&&(mt=i.RGBA32UI),z===i.BYTE&&(mt=i.RGBA8I),z===i.SHORT&&(mt=i.RGBA16I),z===i.INT&&(mt=i.RGBA32I)),M===i.RGB&&(z===i.UNSIGNED_SHORT&&wt&&(mt=wt.RGB16_EXT),z===i.SHORT&&wt&&(mt=wt.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(mt=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(mt=i.R11F_G11F_B10F)),M===i.RGBA){let xt=yt?qs:Ee.getTransfer(W);z===i.FLOAT&&(mt=i.RGBA32F),z===i.HALF_FLOAT&&(mt=i.RGBA16F),z===i.UNSIGNED_BYTE&&(mt=xt===Ue?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&wt&&(mt=wt.RGBA16_EXT),z===i.SHORT&&wt&&(mt=wt.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(mt=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(mt=i.RGB5_A1)}return(mt===i.R16F||mt===i.R32F||mt===i.RG16F||mt===i.RG32F||mt===i.RGBA16F||mt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),mt}function c(O,M){let z;return O?M===null||M===qn||M===Rs?z=i.DEPTH24_STENCIL8:M===On?z=i.DEPTH32F_STENCIL8:M===Cs&&(z=i.DEPTH24_STENCIL8,he("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===qn||M===Rs?z=i.DEPTH_COMPONENT24:M===On?z=i.DEPTH_COMPONENT32F:M===Cs&&(z=i.DEPTH_COMPONENT16),z}function S(O,M){return d(O)===!0||O.isFramebufferTexture&&O.minFilter!==rn&&O.minFilter!==Qe?Math.log2(Math.max(M.width,M.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?M.mipmaps.length:1}function D(O){let M=O.target;M.removeEventListener("dispose",D),L(M),M.isVideoTexture&&m.delete(M),M.isHTMLTexture&&x.delete(M)}function g(O){let M=O.target;M.removeEventListener("dispose",g),K(M)}function L(O){let M=n.get(O);if(M.__webglInit===void 0)return;let z=O.source,Y=_.get(z);if(Y){let W=Y[M.__cacheKey];W.usedTimes--,W.usedTimes===0&&k(O),Object.keys(Y).length===0&&_.delete(z)}n.remove(O)}function k(O){let M=n.get(O);i.deleteTexture(M.__webglTexture);let z=O.source,Y=_.get(z);delete Y[M.__cacheKey],l.memory.textures--}function K(O){let M=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let W=0;W<M.__webglFramebuffer[Y].length;W++)i.deleteFramebuffer(M.__webglFramebuffer[Y][W]);else i.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)i.deleteFramebuffer(M.__webglFramebuffer[Y]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let z=O.textures;for(let Y=0,W=z.length;Y<W;Y++){let yt=n.get(z[Y]);yt.__webglTexture&&(i.deleteTexture(yt.__webglTexture),l.memory.textures--),n.remove(z[Y])}n.remove(O)}let q=0;function nt(){q=0}function H(){return q}function tt(O){q=O}function pt(){let O=q;return O>=s.maxTextures&&he("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,O}function ut(O){let M=[];return M.push(O.wrapS),M.push(O.wrapT),M.push(O.wrapR||0),M.push(O.magFilter),M.push(O.minFilter),M.push(O.anisotropy),M.push(O.internalFormat),M.push(O.format),M.push(O.type),M.push(O.generateMipmaps),M.push(O.premultiplyAlpha),M.push(O.flipY),M.push(O.unpackAlignment),M.push(O.colorSpace),M.join()}function vt(O,M){let z=n.get(O);if(O.isVideoTexture&&Q(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&z.__version!==O.version){let Y=O.image;if(Y===null)he("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)he("WebGLRenderer: Texture marked for update but image is incomplete");else{Lt(z,O,M);return}}else O.isExternalTexture&&(z.__webglTexture=O.sourceTexture?O.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+M)}function dt(O,M){let z=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&z.__version!==O.version){Lt(z,O,M);return}else O.isExternalTexture&&(z.__webglTexture=O.sourceTexture?O.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+M)}function gt(O,M){let z=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&z.__version!==O.version){Lt(z,O,M);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+M)}function st(O,M){let z=n.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&z.__version!==O.version){Wt(z,O,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+M)}let N={[ms]:i.REPEAT,[Kn]:i.CLAMP_TO_EDGE,[da]:i.MIRRORED_REPEAT},Vt={[rn]:i.NEAREST,[fh]:i.NEAREST_MIPMAP_NEAREST,[xr]:i.NEAREST_MIPMAP_LINEAR,[Qe]:i.LINEAR,[Fa]:i.LINEAR_MIPMAP_NEAREST,[ii]:i.LINEAR_MIPMAP_LINEAR},ge={[xh]:i.NEVER,[bh]:i.ALWAYS,[_h]:i.LESS,[bo]:i.LEQUAL,[yh]:i.EQUAL,[So]:i.GEQUAL,[vh]:i.GREATER,[Mh]:i.NOTEQUAL};function Gt(O,M){if(M.type===On&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Qe||M.magFilter===Fa||M.magFilter===xr||M.magFilter===ii||M.minFilter===Qe||M.minFilter===Fa||M.minFilter===xr||M.minFilter===ii)&&he("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,N[M.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,N[M.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,N[M.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,Vt[M.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,Vt[M.minFilter]),M.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,ge[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===rn||M.minFilter!==xr&&M.minFilter!==ii||M.type===On&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(O,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ot(O,M){let z=!1;O.__webglInit===void 0&&(O.__webglInit=!0,M.addEventListener("dispose",D));let Y=M.source,W=_.get(Y);W===void 0&&(W={},_.set(Y,W));let yt=ut(M);if(yt!==O.__cacheKey){W[yt]===void 0&&(W[yt]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,z=!0),W[yt].usedTimes++;let wt=W[O.__cacheKey];wt!==void 0&&(W[O.__cacheKey].usedTimes--,wt.usedTimes===0&&k(M)),O.__cacheKey=yt,O.__webglTexture=W[yt].texture}return z}function _t(O,M,z){return Math.floor(Math.floor(O/z)/M)}function Mt(O,M,z,Y){let yt=O.updateRanges;if(yt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,z,Y,M.data);else{yt.sort((Xt,At)=>Xt.start-At.start);let wt=0;for(let Xt=1;Xt<yt.length;Xt++){let At=yt[wt],Ct=yt[Xt],zt=At.start+At.count,Kt=_t(Ct.start,M.width,4),re=_t(At.start,M.width,4);Ct.start<=zt+1&&Kt===re&&_t(Ct.start+Ct.count-1,M.width,4)===Kt?At.count=Math.max(At.count,Ct.start+Ct.count-At.start):(++wt,yt[wt]=Ct)}yt.length=wt+1;let mt=e.getParameter(i.UNPACK_ROW_LENGTH),xt=e.getParameter(i.UNPACK_SKIP_PIXELS),It=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let Xt=0,At=yt.length;Xt<At;Xt++){let Ct=yt[Xt],zt=Math.floor(Ct.start/4),Kt=Math.ceil(Ct.count/4),re=zt%M.width,Z=Math.floor(zt/M.width),Pt=Kt,P=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,re),e.pixelStorei(i.UNPACK_SKIP_ROWS,Z),e.texSubImage2D(i.TEXTURE_2D,0,re,Z,Pt,P,z,Y,M.data)}O.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,mt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,xt),e.pixelStorei(i.UNPACK_SKIP_ROWS,It)}}function Lt(O,M,z){let Y=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=i.TEXTURE_3D);let W=ot(O,M),yt=M.source;e.bindTexture(Y,O.__webglTexture,i.TEXTURE0+z);let wt=n.get(yt);if(yt.version!==wt.__version||W===!0){if(e.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let P=Ee.getPrimaries(Ee.workingColorSpace),X=M.colorSpace===mi?null:Ee.getPrimaries(M.colorSpace),it=M.colorSpace===mi||P===X?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it)}e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let xt=T(M.image,!1,s.maxTextureSize);xt=te(M,xt);let It=r.convert(M.format,M.colorSpace),Xt=r.convert(M.type),At=v(M.internalFormat,It,Xt,M.normalized,M.colorSpace,M.isVideoTexture);Gt(Y,M);let Ct,zt=M.mipmaps,Kt=M.isVideoTexture!==!0,re=wt.__version===void 0||W===!0,Z=yt.dataReady,Pt=S(M,xt);if(M.isDepthTexture)At=c(M.format===Pi,M.type),re&&(Kt?e.texStorage2D(i.TEXTURE_2D,1,At,xt.width,xt.height):e.texImage2D(i.TEXTURE_2D,0,At,xt.width,xt.height,0,It,Xt,null));else if(M.isDataTexture)if(zt.length>0){Kt&&re&&e.texStorage2D(i.TEXTURE_2D,Pt,At,zt[0].width,zt[0].height);for(let P=0,X=zt.length;P<X;P++)Ct=zt[P],Kt?Z&&e.texSubImage2D(i.TEXTURE_2D,P,0,0,Ct.width,Ct.height,It,Xt,Ct.data):e.texImage2D(i.TEXTURE_2D,P,At,Ct.width,Ct.height,0,It,Xt,Ct.data);M.generateMipmaps=!1}else Kt?(re&&e.texStorage2D(i.TEXTURE_2D,Pt,At,xt.width,xt.height),Z&&Mt(M,xt,It,Xt)):e.texImage2D(i.TEXTURE_2D,0,At,xt.width,xt.height,0,It,Xt,xt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Kt&&re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,At,zt[0].width,zt[0].height,xt.depth);for(let P=0,X=zt.length;P<X;P++)if(Ct=zt[P],M.format!==Bn)if(It!==null)if(Kt){if(Z)if(M.layerUpdates.size>0){let it=zl(Ct.width,Ct.height,M.format,M.type);for(let y of M.layerUpdates){let B=Ct.data.subarray(y*it/Ct.data.BYTES_PER_ELEMENT,(y+1)*it/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,P,0,0,y,Ct.width,Ct.height,1,It,B)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,P,0,0,0,Ct.width,Ct.height,xt.depth,It,Ct.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,P,At,Ct.width,Ct.height,xt.depth,0,Ct.data,0,0);else he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?Z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,P,0,0,0,Ct.width,Ct.height,xt.depth,It,Xt,Ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,P,At,Ct.width,Ct.height,xt.depth,0,It,Xt,Ct.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Kt&&re&&e.texStorage2D(i.TEXTURE_2D,Pt,At,zt[0].width,zt[0].height);for(let P=0,X=zt.length;P<X;P++)Ct=zt[P],M.format!==Bn?It!==null?Kt?Z&&e.compressedTexSubImage2D(i.TEXTURE_2D,P,0,0,Ct.width,Ct.height,It,Ct.data):e.compressedTexImage2D(i.TEXTURE_2D,P,At,Ct.width,Ct.height,0,Ct.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?Z&&e.texSubImage2D(i.TEXTURE_2D,P,0,0,Ct.width,Ct.height,It,Xt,Ct.data):e.texImage2D(i.TEXTURE_2D,P,At,Ct.width,Ct.height,0,It,Xt,Ct.data)}else if(M.isDataArrayTexture)if(Kt){if(re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,At,xt.width,xt.height,xt.depth),Z)if(M.layerUpdates.size>0){let P=zl(xt.width,xt.height,M.format,M.type);for(let X of M.layerUpdates){let it=xt.data.subarray(X*P/xt.data.BYTES_PER_ELEMENT,(X+1)*P/xt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,X,xt.width,xt.height,1,It,Xt,it)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,It,Xt,xt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,xt.width,xt.height,xt.depth,0,It,Xt,xt.data);else if(M.isData3DTexture)Kt?(re&&e.texStorage3D(i.TEXTURE_3D,Pt,At,xt.width,xt.height,xt.depth),Z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,It,Xt,xt.data)):e.texImage3D(i.TEXTURE_3D,0,At,xt.width,xt.height,xt.depth,0,It,Xt,xt.data);else if(M.isFramebufferTexture){if(re)if(Kt)e.texStorage2D(i.TEXTURE_2D,Pt,At,xt.width,xt.height);else{let P=xt.width,X=xt.height;for(let it=0;it<Pt;it++)e.texImage2D(i.TEXTURE_2D,it,At,P,X,0,It,Xt,null),P>>=1,X>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let P=i.canvas;if(P.hasAttribute("layoutsubtree")||P.setAttribute("layoutsubtree","true"),xt.parentNode!==P){P.appendChild(xt),x.add(M),P.onpaint=X=>{let it=X.changedElements;for(let y of x)it.includes(y.image)&&(y.needsUpdate=!0)},P.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,xt);else{let it=i.RGBA,y=i.RGBA,B=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,it,y,B,xt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(zt.length>0){if(Kt&&re){let P=Me(zt[0]);e.texStorage2D(i.TEXTURE_2D,Pt,At,P.width,P.height)}for(let P=0,X=zt.length;P<X;P++)Ct=zt[P],Kt?Z&&e.texSubImage2D(i.TEXTURE_2D,P,0,0,It,Xt,Ct):e.texImage2D(i.TEXTURE_2D,P,At,It,Xt,Ct);M.generateMipmaps=!1}else if(Kt){if(re){let P=Me(xt);e.texStorage2D(i.TEXTURE_2D,Pt,At,P.width,P.height)}Z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,It,Xt,xt)}else e.texImage2D(i.TEXTURE_2D,0,At,It,Xt,xt);d(M)&&b(Y),wt.__version=yt.version,M.onUpdate&&M.onUpdate(M)}O.__version=M.version}function Wt(O,M,z){if(M.image.length!==6)return;let Y=ot(O,M),W=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+z);let yt=n.get(W);if(W.version!==yt.__version||Y===!0){e.activeTexture(i.TEXTURE0+z);let wt=Ee.getPrimaries(Ee.workingColorSpace),mt=M.colorSpace===mi?null:Ee.getPrimaries(M.colorSpace),xt=M.colorSpace===mi||wt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let It=M.isCompressedTexture||M.image[0].isCompressedTexture,Xt=M.image[0]&&M.image[0].isDataTexture,At=[];for(let y=0;y<6;y++)!It&&!Xt?At[y]=T(M.image[y],!0,s.maxCubemapSize):At[y]=Xt?M.image[y].image:M.image[y],At[y]=te(M,At[y]);let Ct=At[0],zt=r.convert(M.format,M.colorSpace),Kt=r.convert(M.type),re=v(M.internalFormat,zt,Kt,M.normalized,M.colorSpace),Z=M.isVideoTexture!==!0,Pt=yt.__version===void 0||Y===!0,P=W.dataReady,X=S(M,Ct);Gt(i.TEXTURE_CUBE_MAP,M);let it;if(It){Z&&Pt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,X,re,Ct.width,Ct.height);for(let y=0;y<6;y++){it=At[y].mipmaps;for(let B=0;B<it.length;B++){let U=it[B];M.format!==Bn?zt!==null?Z?P&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+y,B,0,0,U.width,U.height,zt,U.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+y,B,re,U.width,U.height,0,U.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+y,B,0,0,U.width,U.height,zt,Kt,U.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+y,B,re,U.width,U.height,0,zt,Kt,U.data)}}}else{if(it=M.mipmaps,Z&&Pt){it.length>0&&X++;let y=Me(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,X,re,y.width,y.height)}for(let y=0;y<6;y++)if(Xt){Z?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+y,0,0,0,At[y].width,At[y].height,zt,Kt,At[y].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+y,0,re,At[y].width,At[y].height,0,zt,Kt,At[y].data);for(let B=0;B<it.length;B++){let $=it[B].image[y].image;Z?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+y,B+1,0,0,$.width,$.height,zt,Kt,$.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+y,B+1,re,$.width,$.height,0,zt,Kt,$.data)}}else{Z?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+y,0,0,0,zt,Kt,At[y]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+y,0,re,zt,Kt,At[y]);for(let B=0;B<it.length;B++){let U=it[B];Z?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+y,B+1,0,0,zt,Kt,U.image[y]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+y,B+1,re,zt,Kt,U.image[y])}}}d(M)&&b(i.TEXTURE_CUBE_MAP),yt.__version=W.version,M.onUpdate&&M.onUpdate(M)}O.__version=M.version}function Dt(O,M,z,Y,W,yt){let wt=r.convert(z.format,z.colorSpace),mt=r.convert(z.type),xt=v(z.internalFormat,wt,mt,z.normalized,z.colorSpace),It=n.get(M),Xt=n.get(z);if(Xt.__renderTarget=M,!It.__hasExternalTextures){let At=Math.max(1,M.width>>yt),Ct=Math.max(1,M.height>>yt);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?e.texImage3D(W,yt,xt,At,Ct,M.depth,0,wt,mt,null):e.texImage2D(W,yt,xt,At,Ct,0,wt,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,O),Ie(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,W,Xt.__webglTexture,0,xe(M)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,W,Xt.__webglTexture,yt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function $t(O,M,z){if(i.bindRenderbuffer(i.RENDERBUFFER,O),M.depthBuffer){let Y=M.depthTexture,W=Y&&Y.isDepthTexture?Y.type:null,yt=c(M.stencilBuffer,W),wt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ie(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe(M),yt,M.width,M.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe(M),yt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,yt,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,O)}else{let Y=M.textures;for(let W=0;W<Y.length;W++){let yt=Y[W],wt=r.convert(yt.format,yt.colorSpace),mt=r.convert(yt.type),xt=v(yt.internalFormat,wt,mt,yt.normalized,yt.colorSpace);Ie(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe(M),xt,M.width,M.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe(M),xt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,xt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ie(O,M,z){let Y=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,O),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W=n.get(M.depthTexture);if(W.__renderTarget=M,(!W.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y){if(W.__webglInit===void 0&&(W.__webglInit=!0,M.depthTexture.addEventListener("dispose",D)),W.__webglTexture===void 0){W.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Gt(i.TEXTURE_CUBE_MAP,M.depthTexture);let It=r.convert(M.depthTexture.format),Xt=r.convert(M.depthTexture.type),At;M.depthTexture.format===jn?At=i.DEPTH_COMPONENT24:M.depthTexture.format===Pi&&(At=i.DEPTH24_STENCIL8);for(let Ct=0;Ct<6;Ct++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,At,M.width,M.height,0,It,Xt,null)}}else vt(M.depthTexture,0);let yt=W.__webglTexture,wt=xe(M),mt=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,xt=M.depthTexture.format===Pi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===jn)Ie(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xt,mt,yt,0,wt):i.framebufferTexture2D(i.FRAMEBUFFER,xt,mt,yt,0);else if(M.depthTexture.format===Pi)Ie(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xt,mt,yt,0,wt):i.framebufferTexture2D(i.FRAMEBUFFER,xt,mt,yt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function fe(O){let M=n.get(O),z=O.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==O.depthTexture){let Y=O.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){let W=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",W)};Y.addEventListener("dispose",W),M.__depthDisposeCallback=W}M.__boundDepthTexture=Y}if(O.depthTexture&&!M.__autoAllocateDepthBuffer)if(z)for(let Y=0;Y<6;Y++)ie(M.__webglFramebuffer[Y],O,Y);else{let Y=O.texture.mipmaps;Y&&Y.length>0?ie(M.__webglFramebuffer[0],O,0):ie(M.__webglFramebuffer,O,0)}else if(z){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=i.createRenderbuffer(),$t(M.__webglDepthbuffer[Y],O,!1);else{let W=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=M.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,yt),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,yt)}}else{let Y=O.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),$t(M.__webglDepthbuffer,O,!1);else{let W=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,yt),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,yt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(O,M,z){let Y=n.get(O);M!==void 0&&Dt(Y.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&fe(O)}function ue(O){let M=O.texture,z=n.get(O),Y=n.get(M);O.addEventListener("dispose",g);let W=O.textures,yt=O.isWebGLCubeRenderTarget===!0,wt=W.length>1;if(wt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=M.version,l.memory.textures++),yt){z.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[mt]=[];for(let xt=0;xt<M.mipmaps.length;xt++)z.__webglFramebuffer[mt][xt]=i.createFramebuffer()}else z.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let mt=0;mt<M.mipmaps.length;mt++)z.__webglFramebuffer[mt]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(wt)for(let mt=0,xt=W.length;mt<xt;mt++){let It=n.get(W[mt]);It.__webglTexture===void 0&&(It.__webglTexture=i.createTexture(),l.memory.textures++)}if(O.samples>0&&Ie(O)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let mt=0;mt<W.length;mt++){let xt=W[mt];z.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[mt]);let It=r.convert(xt.format,xt.colorSpace),Xt=r.convert(xt.type),At=v(xt.internalFormat,It,Xt,xt.normalized,xt.colorSpace,O.isXRRenderTarget===!0),Ct=xe(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,At,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,z.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),$t(z.__webglDepthRenderbuffer,O,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(yt){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Gt(i.TEXTURE_CUBE_MAP,M);for(let mt=0;mt<6;mt++)if(M.mipmaps&&M.mipmaps.length>0)for(let xt=0;xt<M.mipmaps.length;xt++)Dt(z.__webglFramebuffer[mt][xt],O,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,xt);else Dt(z.__webglFramebuffer[mt],O,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);d(M)&&b(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let mt=0,xt=W.length;mt<xt;mt++){let It=W[mt],Xt=n.get(It),At=i.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(At=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(At,Xt.__webglTexture),Gt(At,It),Dt(z.__webglFramebuffer,O,It,i.COLOR_ATTACHMENT0+mt,At,0),d(It)&&b(At)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(mt=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,Y.__webglTexture),Gt(mt,M),M.mipmaps&&M.mipmaps.length>0)for(let xt=0;xt<M.mipmaps.length;xt++)Dt(z.__webglFramebuffer[xt],O,M,i.COLOR_ATTACHMENT0,mt,xt);else Dt(z.__webglFramebuffer,O,M,i.COLOR_ATTACHMENT0,mt,0);d(M)&&b(mt),e.unbindTexture()}O.depthBuffer&&fe(O)}function le(O){let M=O.textures;for(let z=0,Y=M.length;z<Y;z++){let W=M[z];if(d(W)){let yt=C(O),wt=n.get(W).__webglTexture;e.bindTexture(yt,wt),b(yt),e.unbindTexture()}}}let Ae=[],ve=[];function We(O){if(O.samples>0){if(Ie(O)===!1){let M=O.textures,z=O.width,Y=O.height,W=i.COLOR_BUFFER_BIT,yt=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(O),mt=M.length>1;if(mt)for(let It=0;It<M.length;It++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);let xt=O.texture.mipmaps;xt&&xt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let It=0;It<M.length;It++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[It]);let Xt=n.get(M[It]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xt,0)}i.blitFramebuffer(0,0,z,Y,0,0,z,Y,W,i.NEAREST),h===!0&&(Ae.length=0,ve.length=0,Ae.push(i.COLOR_ATTACHMENT0+It),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&(Ae.push(yt),ve.push(yt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ve)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ae))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let It=0;It<M.length;It++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,wt.__webglColorRenderbuffer[It]);let Xt=n.get(M[It]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,Xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&h){let M=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function xe(O){return Math.min(s.maxSamples,O.samples)}function Ie(O){let M=n.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Q(O){let M=l.render.frame;m.get(O)!==M&&(m.set(O,M),O.update())}function te(O,M){let z=O.colorSpace,Y=O.format,W=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||z!==Xs&&z!==mi&&(Ee.getTransfer(z)===Ue?(Y!==Bn||W!==wn)&&he("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ce("WebGLTextures: Unsupported texture color space:",z)),M}function Me(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(u.width=O.naturalWidth||O.width,u.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(u.width=O.displayWidth,u.height=O.displayHeight):(u.width=O.width,u.height=O.height),u}this.allocateTextureUnit=pt,this.resetTextureUnits=nt,this.getTextureUnits=H,this.setTextureUnits=tt,this.setTexture2D=vt,this.setTexture2DArray=dt,this.setTexture3D=gt,this.setTextureCube=st,this.rebindTextures=oe,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=Ie,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function N0(i,t){function e(n,s=mi){let r,l=Ee.getTransfer(s);if(n===wn)return i.UNSIGNED_BYTE;if(n===Ba)return i.UNSIGNED_SHORT_4_4_4_4;if(n===za)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Il)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Cl)return i.BYTE;if(n===Rl)return i.SHORT;if(n===Cs)return i.UNSIGNED_SHORT;if(n===Oa)return i.INT;if(n===qn)return i.UNSIGNED_INT;if(n===On)return i.FLOAT;if(n===Yn)return i.HALF_FLOAT;if(n===Ll)return i.ALPHA;if(n===Dl)return i.RGB;if(n===Bn)return i.RGBA;if(n===jn)return i.DEPTH_COMPONENT;if(n===Pi)return i.DEPTH_STENCIL;if(n===ka)return i.RED;if(n===Va)return i.RED_INTEGER;if(n===Li)return i.RG;if(n===Ga)return i.RG_INTEGER;if(n===Ha)return i.RGBA_INTEGER;if(n===_r||n===yr||n===vr||n===Mr)if(l===Ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wa||n===Xa||n===qa||n===Ya)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Za||n===Ja||n===$a||n===Ka||n===ja||n===br||n===Qa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Za||n===Ja)return l===Ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$a)return l===Ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ka)return r.COMPRESSED_R11_EAC;if(n===ja)return r.COMPRESSED_SIGNED_R11_EAC;if(n===br)return r.COMPRESSED_RG11_EAC;if(n===Qa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===to||n===eo||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===to)return l===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===eo)return l===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===no)return l===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===io)return l===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===so)return l===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ro)return l===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ao)return l===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oo)return l===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lo)return l===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===co)return l===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ho)return l===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===uo)return l===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fo)return l===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===po)return l===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mo||n===go||n===xo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===mo)return l===Ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===go)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_o||n===yo||n===Sr||n===vo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===_o)return r.COMPRESSED_RED_RGTC1_EXT;if(n===yo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var U0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F0=`
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

}`,sc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ar(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new In({vertexShader:U0,fragmentShader:F0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new fn(new or(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},rc=class extends Qn{constructor(t,e){super();let n=this,s=null,r=1,l=null,a="local-floor",h=1,u=null,m=null,x=null,f=null,_=null,w=null,I=typeof XRWebGLBinding<"u",T=new sc,d={},b=e.getContextAttributes(),C=null,v=null,c=[],S=[],D=new Te,g=null,L=null,k=new un;k.viewport=new Xe;let K=new un;K.viewport=new Xe;let q=[k,K],nt=new La,H=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(_t){let Mt=c[_t];return Mt===void 0&&(Mt=new vs,c[_t]=Mt),Mt.getTargetRaySpace()},this.getControllerGrip=function(_t){let Mt=c[_t];return Mt===void 0&&(Mt=new vs,c[_t]=Mt),Mt.getGripSpace()},this.getHand=function(_t){let Mt=c[_t];return Mt===void 0&&(Mt=new vs,c[_t]=Mt),Mt.getHandSpace()};function pt(_t){let Mt=S.indexOf(_t.inputSource);if(Mt===-1)return;let Lt=c[Mt];Lt!==void 0&&(Lt.update(_t.inputSource,_t.frame,u||l),Lt.dispatchEvent({type:_t.type,data:_t.inputSource}))}function ut(){s.removeEventListener("select",pt),s.removeEventListener("selectstart",pt),s.removeEventListener("selectend",pt),s.removeEventListener("squeeze",pt),s.removeEventListener("squeezestart",pt),s.removeEventListener("squeezeend",pt),s.removeEventListener("end",ut),s.removeEventListener("inputsourceschange",vt);for(let _t=0;_t<c.length;_t++){let Mt=S[_t];Mt!==null&&(S[_t]=null,c[_t].disconnect(Mt))}H=null,tt=null,T.reset();for(let _t in d)delete d[_t];if(t.setRenderTarget(C),_=null,f=null,x=null,s=null,v=null,ot.stop(),n.isPresenting=!1,t.setPixelRatio(g),t.setSize(D.width,D.height,!1),L!==null){let _t=L.camera;_t.fov=L.fov,_t.zoom=L.zoom,_t.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(_t){r=_t,n.isPresenting===!0&&he("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(_t){a=_t,n.isPresenting===!0&&he("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||l},this.setReferenceSpace=function(_t){u=_t},this.getBaseLayer=function(){return f!==null?f:_},this.getBinding=function(){return x===null&&I&&(x=new XRWebGLBinding(s,e)),x},this.getFrame=function(){return w},this.getSession=function(){return s},this.setSession=async function(_t){if(s=_t,s!==null){if(C=t.getRenderTarget(),s.addEventListener("select",pt),s.addEventListener("selectstart",pt),s.addEventListener("selectend",pt),s.addEventListener("squeeze",pt),s.addEventListener("squeezestart",pt),s.addEventListener("squeezeend",pt),s.addEventListener("end",ut),s.addEventListener("inputsourceschange",vt),b.xrCompatible!==!0&&await e.makeXRCompatible(),g=t.getPixelRatio(),t.getSize(D),I&&"createProjectionLayer"in XRWebGLBinding.prototype){let Lt=null,Wt=null,Dt=null;b.depth&&(Dt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Lt=b.stencil?Pi:jn,Wt=b.stencil?Rs:qn);let $t={colorFormat:e.RGBA8,depthFormat:Dt,scaleFactor:r};x=this.getBinding(),f=x.createProjectionLayer($t),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Sn(f.textureWidth,f.textureHeight,{format:Bn,type:wn,depthTexture:new Ti(f.textureWidth,f.textureHeight,Wt,void 0,void 0,void 0,void 0,void 0,void 0,Lt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Lt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};_=new XRWebGLLayer(s,e,Lt),s.updateRenderState({baseLayer:_}),t.setPixelRatio(1),t.setSize(_.framebufferWidth,_.framebufferHeight,!1),v=new Sn(_.framebufferWidth,_.framebufferHeight,{format:Bn,type:wn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(h),u=null,l=await s.requestReferenceSpace(a),ot.setContext(s),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function vt(_t){for(let Mt=0;Mt<_t.removed.length;Mt++){let Lt=_t.removed[Mt],Wt=S.indexOf(Lt);Wt>=0&&(S[Wt]=null,c[Wt].disconnect(Lt))}for(let Mt=0;Mt<_t.added.length;Mt++){let Lt=_t.added[Mt],Wt=S.indexOf(Lt);if(Wt===-1){for(let $t=0;$t<c.length;$t++)if($t>=S.length){S.push(Lt),Wt=$t;break}else if(S[$t]===null){S[$t]=Lt,Wt=$t;break}if(Wt===-1)break}let Dt=c[Wt];Dt&&Dt.connect(Lt)}}let dt=new ht,gt=new ht;function st(_t,Mt,Lt){dt.setFromMatrixPosition(Mt.matrixWorld),gt.setFromMatrixPosition(Lt.matrixWorld);let Wt=dt.distanceTo(gt),Dt=Mt.projectionMatrix.elements,$t=Lt.projectionMatrix.elements,ie=Dt[14]/(Dt[10]-1),fe=Dt[14]/(Dt[10]+1),oe=(Dt[9]+1)/Dt[5],ue=(Dt[9]-1)/Dt[5],le=(Dt[8]-1)/Dt[0],Ae=($t[8]+1)/$t[0],ve=ie*le,We=ie*Ae,xe=Wt/(-le+Ae),Ie=xe*-le;if(Mt.matrixWorld.decompose(_t.position,_t.quaternion,_t.scale),_t.translateX(Ie),_t.translateZ(xe),_t.matrixWorld.compose(_t.position,_t.quaternion,_t.scale),_t.matrixWorldInverse.copy(_t.matrixWorld).invert(),Dt[10]===-1)_t.projectionMatrix.copy(Mt.projectionMatrix),_t.projectionMatrixInverse.copy(Mt.projectionMatrixInverse);else{let Q=ie+xe,te=fe+xe,Me=ve-Ie,O=We+(Wt-Ie),M=oe*fe/te*Q,z=ue*fe/te*Q;_t.projectionMatrix.makePerspective(Me,O,M,z,Q,te),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert()}}function N(_t,Mt){Mt===null?_t.matrixWorld.copy(_t.matrix):_t.matrixWorld.multiplyMatrices(Mt.matrixWorld,_t.matrix),_t.matrixWorldInverse.copy(_t.matrixWorld).invert()}this.updateCamera=function(_t){if(s===null)return;let Mt=_t.near,Lt=_t.far;T.texture!==null&&(T.depthNear>0&&(Mt=T.depthNear),T.depthFar>0&&(Lt=T.depthFar)),nt.near=K.near=k.near=Mt,nt.far=K.far=k.far=Lt,(H!==nt.near||tt!==nt.far)&&(s.updateRenderState({depthNear:nt.near,depthFar:nt.far}),H=nt.near,tt=nt.far),nt.layers.mask=_t.layers.mask|6,k.layers.mask=nt.layers.mask&-5,K.layers.mask=nt.layers.mask&-3;let Wt=_t.parent,Dt=nt.cameras;N(nt,Wt);for(let $t=0;$t<Dt.length;$t++)N(Dt[$t],Wt);Dt.length===2?st(nt,k,K):nt.projectionMatrix.copy(k.projectionMatrix),L===null&&_t.isPerspectiveCamera&&(L={camera:_t,fov:_t.fov,zoom:_t.zoom}),Vt(_t,nt,Wt)};function Vt(_t,Mt,Lt){Lt===null?_t.matrix.copy(Mt.matrixWorld):(_t.matrix.copy(Lt.matrixWorld),_t.matrix.invert(),_t.matrix.multiply(Mt.matrixWorld)),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.updateMatrixWorld(!0),_t.projectionMatrix.copy(Mt.projectionMatrix),_t.projectionMatrixInverse.copy(Mt.projectionMatrixInverse),_t.isPerspectiveCamera&&(_t.fov=pa*2*Math.atan(1/_t.projectionMatrix.elements[5]),_t.zoom=1)}this.getCamera=function(){return nt},this.getFoveation=function(){if(!(f===null&&_===null))return h},this.setFoveation=function(_t){h=_t,f!==null&&(f.fixedFoveation=_t),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=_t)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(nt)},this.getCameraTexture=function(_t){return d[_t]};let ge=null;function Gt(_t,Mt){if(m=Mt.getViewerPose(u||l),w=Mt,m!==null){let Lt=m.views;_!==null&&(t.setRenderTargetFramebuffer(v,_.framebuffer),t.setRenderTarget(v));let Wt=!1;Lt.length!==nt.cameras.length&&(nt.cameras.length=0,Wt=!0);for(let fe=0;fe<Lt.length;fe++){let oe=Lt[fe],ue=null;if(_!==null)ue=_.getViewport(oe);else{let Ae=x.getViewSubImage(f,oe);ue=Ae.viewport,fe===0&&(t.setRenderTargetTextures(v,Ae.colorTexture,Ae.depthStencilTexture),t.setRenderTarget(v))}let le=q[fe];le===void 0&&(le=new un,le.layers.enable(fe),le.viewport=new Xe,q[fe]=le),le.matrix.fromArray(oe.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(oe.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(ue.x,ue.y,ue.width,ue.height),fe===0&&(nt.matrix.copy(le.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale)),Wt===!0&&nt.cameras.push(le)}let Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&I){x=n.getBinding();let fe=x.getDepthInformation(Lt[0]);fe&&fe.isValid&&fe.texture&&T.init(fe,s.renderState)}if(Dt&&Dt.includes("camera-access")&&I){t.state.unbindTexture(),x=n.getBinding();for(let fe=0;fe<Lt.length;fe++){let oe=Lt[fe].camera;if(oe){let ue=d[oe];ue||(ue=new ar,d[oe]=ue);let le=x.getCameraImage(oe);ue.sourceTexture=le}}}}for(let Lt=0;Lt<c.length;Lt++){let Wt=S[Lt],Dt=c[Lt];Wt!==null&&Dt!==void 0&&Dt.update(Wt,Mt,u||l)}ge&&ge(_t,Mt),Mt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Mt}),w=null}let ot=new jh;ot.setAnimationLoop(Gt),this.setAnimationLoop=function(_t){ge=_t},this.dispose=function(){}}},O0=new Ne,su=new de;su.set(-1,0,0,0,1,0,0,0,1);function B0(i,t){function e(T,d){T.matrixAutoUpdate===!0&&T.updateMatrix(),d.value.copy(T.matrix)}function n(T,d){d.color.getRGB(T.fogColor.value,Fl(i)),d.isFog?(T.fogNear.value=d.near,T.fogFar.value=d.far):d.isFogExp2&&(T.fogDensity.value=d.density)}function s(T,d,b,C,v){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(T,d):d.isMeshLambertMaterial?(r(T,d),d.envMap&&(T.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(T,d),x(T,d)):d.isMeshPhongMaterial?(r(T,d),m(T,d),d.envMap&&(T.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(T,d),f(T,d),d.isMeshPhysicalMaterial&&_(T,d,v)):d.isMeshMatcapMaterial?(r(T,d),w(T,d)):d.isMeshDepthMaterial?r(T,d):d.isMeshDistanceMaterial?(r(T,d),I(T,d)):d.isMeshNormalMaterial?r(T,d):d.isLineBasicMaterial?(l(T,d),d.isLineDashedMaterial&&a(T,d)):d.isPointsMaterial?h(T,d,b,C):d.isSpriteMaterial?u(T,d):d.isShadowMaterial?(T.color.value.copy(d.color),T.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(T,d){T.opacity.value=d.opacity,d.color&&T.diffuse.value.copy(d.color),d.emissive&&T.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(T.map.value=d.map,e(d.map,T.mapTransform)),d.alphaMap&&(T.alphaMap.value=d.alphaMap,e(d.alphaMap,T.alphaMapTransform)),d.bumpMap&&(T.bumpMap.value=d.bumpMap,e(d.bumpMap,T.bumpMapTransform),T.bumpScale.value=d.bumpScale,d.side===xn&&(T.bumpScale.value*=-1)),d.normalMap&&(T.normalMap.value=d.normalMap,e(d.normalMap,T.normalMapTransform),T.normalScale.value.copy(d.normalScale),d.side===xn&&T.normalScale.value.negate()),d.displacementMap&&(T.displacementMap.value=d.displacementMap,e(d.displacementMap,T.displacementMapTransform),T.displacementScale.value=d.displacementScale,T.displacementBias.value=d.displacementBias),d.emissiveMap&&(T.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,T.emissiveMapTransform)),d.specularMap&&(T.specularMap.value=d.specularMap,e(d.specularMap,T.specularMapTransform)),d.alphaTest>0&&(T.alphaTest.value=d.alphaTest);let b=t.get(d),C=b.envMap,v=b.envMapRotation;C&&(T.envMap.value=C,T.envMapRotation.value.setFromMatrix4(O0.makeRotationFromEuler(v)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&T.envMapRotation.value.premultiply(su),T.reflectivity.value=d.reflectivity,T.ior.value=d.ior,T.refractionRatio.value=d.refractionRatio),d.lightMap&&(T.lightMap.value=d.lightMap,T.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,T.lightMapTransform)),d.aoMap&&(T.aoMap.value=d.aoMap,T.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,T.aoMapTransform))}function l(T,d){T.diffuse.value.copy(d.color),T.opacity.value=d.opacity,d.map&&(T.map.value=d.map,e(d.map,T.mapTransform))}function a(T,d){T.dashSize.value=d.dashSize,T.totalSize.value=d.dashSize+d.gapSize,T.scale.value=d.scale}function h(T,d,b,C){T.diffuse.value.copy(d.color),T.opacity.value=d.opacity,T.size.value=d.size*b,T.scale.value=C*.5,d.map&&(T.map.value=d.map,e(d.map,T.uvTransform)),d.alphaMap&&(T.alphaMap.value=d.alphaMap,e(d.alphaMap,T.alphaMapTransform)),d.alphaTest>0&&(T.alphaTest.value=d.alphaTest)}function u(T,d){T.diffuse.value.copy(d.color),T.opacity.value=d.opacity,T.rotation.value=d.rotation,d.map&&(T.map.value=d.map,e(d.map,T.mapTransform)),d.alphaMap&&(T.alphaMap.value=d.alphaMap,e(d.alphaMap,T.alphaMapTransform)),d.alphaTest>0&&(T.alphaTest.value=d.alphaTest)}function m(T,d){T.specular.value.copy(d.specular),T.shininess.value=Math.max(d.shininess,1e-4)}function x(T,d){d.gradientMap&&(T.gradientMap.value=d.gradientMap)}function f(T,d){T.metalness.value=d.metalness,d.metalnessMap&&(T.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,T.metalnessMapTransform)),T.roughness.value=d.roughness,d.roughnessMap&&(T.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,T.roughnessMapTransform)),d.envMap&&(T.envMapIntensity.value=d.envMapIntensity)}function _(T,d,b){T.ior.value=d.ior,d.sheen>0&&(T.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),T.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(T.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,T.sheenColorMapTransform)),d.sheenRoughnessMap&&(T.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,T.sheenRoughnessMapTransform))),d.clearcoat>0&&(T.clearcoat.value=d.clearcoat,T.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(T.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,T.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(T.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,T.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(T.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,T.clearcoatNormalMapTransform),T.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===xn&&T.clearcoatNormalScale.value.negate())),d.dispersion>0&&(T.dispersion.value=d.dispersion),d.retroreflectivity>0&&(T.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(T.iridescence.value=d.iridescence,T.iridescenceIOR.value=d.iridescenceIOR,T.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],T.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(T.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,T.iridescenceMapTransform)),d.iridescenceThicknessMap&&(T.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,T.iridescenceThicknessMapTransform))),d.transmission>0&&(T.transmission.value=d.transmission,T.transmissionSamplerMap.value=b.texture,T.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(T.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,T.transmissionMapTransform)),T.thickness.value=d.thickness,d.thicknessMap&&(T.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,T.thicknessMapTransform)),T.attenuationDistance.value=d.attenuationDistance,T.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(T.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(T.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,T.anisotropyMapTransform))),T.specularIntensity.value=d.specularIntensity,T.specularColor.value.copy(d.specularColor),d.specularColorMap&&(T.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,T.specularColorMapTransform)),d.specularIntensityMap&&(T.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,T.specularIntensityMapTransform))}function w(T,d){d.matcap&&(T.matcap.value=d.matcap)}function I(T,d){let b=t.get(d).light;T.referencePosition.value.setFromMatrixPosition(b.matrixWorld),T.nearDistance.value=b.shadow.camera.near,T.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function z0(i,t,e,n){let s={},r={},l=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(v,c){let S=c.program;n.uniformBlockBinding(v,S)}function u(v,c){let S=s[v.id];S===void 0&&(T(v),S=m(v),s[v.id]=S,v.addEventListener("dispose",b));let D=c.program;n.updateUBOMapping(v,D);let g=t.render.frame;r[v.id]!==g&&(f(v),r[v.id]=g)}function m(v){let c=x();v.__bindingPointIndex=c;let S=i.createBuffer(),D=v.__size,g=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,D,g),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,c,S),S}function x(){for(let v=0;v<a;v++)if(l.indexOf(v)===-1)return l.push(v),v;return ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let c=s[v.id],S=v.uniforms,D=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,c);for(let g=0,L=S.length;g<L;g++){let k=S[g];if(Array.isArray(k))for(let K=0,q=k.length;K<q;K++)_(k[K],g,K,D);else _(k,g,0,D)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(v,c,S,D){if(I(v,c,S,D)===!0){let g=v.__offset,L=v.value;if(Array.isArray(L)){let k=0;for(let K=0;K<L.length;K++){let q=L[K],nt=d(q);w(q,v.__data,k),typeof q!="number"&&typeof q!="boolean"&&!q.isMatrix3&&!ArrayBuffer.isView(q)&&(k+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}}else w(L,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,g,v.__data)}}function w(v,c,S){typeof v=="number"||typeof v=="boolean"?c[0]=v:v.isMatrix3?(c[0]=v.elements[0],c[1]=v.elements[1],c[2]=v.elements[2],c[3]=0,c[4]=v.elements[3],c[5]=v.elements[4],c[6]=v.elements[5],c[7]=0,c[8]=v.elements[6],c[9]=v.elements[7],c[10]=v.elements[8],c[11]=0):ArrayBuffer.isView(v)?c.set(new v.constructor(v.buffer,v.byteOffset,c.length)):v.toArray(c,S)}function I(v,c,S,D){let g=v.value,L=c+"_"+S;if(D[L]===void 0)return typeof g=="number"||typeof g=="boolean"?D[L]=g:ArrayBuffer.isView(g)?D[L]=g.slice():D[L]=g.clone(),!0;{let k=D[L];if(typeof g=="number"||typeof g=="boolean"){if(k!==g)return D[L]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(k.equals(g)===!1)return k.copy(g),!0}}return!1}function T(v){let c=v.uniforms,S=0,D=16;for(let L=0,k=c.length;L<k;L++){let K=Array.isArray(c[L])?c[L]:[c[L]];for(let q=0,nt=K.length;q<nt;q++){let H=K[q],tt=Array.isArray(H.value)?H.value:[H.value];for(let pt=0,ut=tt.length;pt<ut;pt++){let vt=tt[pt],dt=d(vt),gt=S%D,st=gt%dt.boundary,N=gt+st;S+=st,N!==0&&D-N<dt.storage&&(S+=D-N),H.__data=new Float32Array(dt.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=dt.storage}}}let g=S%D;return g>0&&(S+=D-g),v.__size=S,v.__cache={},this}function d(v){let c={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(c.boundary=4,c.storage=4):v.isVector2?(c.boundary=8,c.storage=8):v.isVector3||v.isColor?(c.boundary=16,c.storage=12):v.isVector4?(c.boundary=16,c.storage=16):v.isMatrix3?(c.boundary=48,c.storage=48):v.isMatrix4?(c.boundary=64,c.storage=64):v.isTexture?he("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(c.boundary=16,c.storage=v.byteLength):he("WebGLRenderer: Unsupported uniform value type.",v),c}function b(v){let c=v.target;c.removeEventListener("dispose",b);let S=l.indexOf(c.__bindingPointIndex);l.splice(S,1),i.deleteBuffer(s[c.id]),delete s[c.id],delete r[c.id]}function C(){for(let v in s)i.deleteBuffer(s[v]);l=[],s={},r={}}return{bind:h,update:u,dispose:C}}var k0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),si=null;function V0(){return si===null&&(si=new ir(k0,16,16,Li,Yn),si.name="DFG_LUT",si.minFilter=Qe,si.magFilter=Qe,si.wrapS=Kn,si.wrapT=Kn,si.generateMipmaps=!1,si.needsUpdate=!0),si}var Ro=class{constructor(t={}){let{canvas:e=Sh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:l=!1,antialias:a=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:u=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:f=!1,outputBufferType:_=wn}=t;this.isWebGLRenderer=!0;let w;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=n.getContextAttributes().alpha}else w=l;let I=_,T=new Set([Ha,Ga,Va]),d=new Set([wn,qn,Cs,Rs,Ba,za]),b=new Uint32Array(4),C=new Int32Array(4),v=new ht,c=null,S=null,D=[],g=[],L=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let k=this,K=!1,q=null,nt=null,H=null,tt=null;this._outputColorSpace=an;let pt=0,ut=0,vt=null,dt=-1,gt=null,st=new Xe,N=new Xe,Vt=null,ge=new _e(0),Gt=0,ot=e.width,_t=e.height,Mt=1,Lt=null,Wt=null,Dt=new Xe(0,0,ot,_t),$t=new Xe(0,0,ot,_t),ie=!1,fe=new Ms,oe=!1,ue=!1,le=new Ne,Ae=new ht,ve=new Xe,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},xe=!1;function Ie(){return vt===null?Mt:1}let Q=n;function te(R,j){return e.getContext(R,j)}let Me,O,M,z,Y,W,yt,wt,mt,xt,It,Xt,At,Ct,zt,Kt,re,Z,Pt,P,X,it,y;try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:h,preserveDrawingBuffer:u,powerPreference:m,failIfMajorPerformanceCaveat:x};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",J,!1),e.addEventListener("webglcontextcreationerror",bt,!1),Q===null){let j="webgl2";if(Q=te(j,R),Q===null)throw te(j)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}B()}catch(R){throw e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",J,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),ce("WebGLRenderer: "+R.message),R}function B(){Me=new Zp(Q),Me.init(),X=new N0(Q,Me),O=new Bp(Q,Me,t,X),M=new L0(Q,Me),O.reversedDepthBuffer&&f&&M.buffers.depth.setReversed(!0),nt=Q.createFramebuffer(),H=Q.createFramebuffer(),tt=Q.createFramebuffer(),z=new Kp(Q),Y=new _0,W=new D0(Q,Me,M,Y,O,X,z),yt=new Yp(k),wt=new ju(Q),it=new Fp(Q,wt),mt=new Jp(Q,wt,z,it),xt=new Qp(Q,mt,wt,it,z),Z=new jp(Q,O,W),zt=new zp(Y),It=new x0(k,yt,Me,O,it,zt),Xt=new B0(k,Y),At=new v0,Ct=new E0(Me),re=new Up(k,yt,M,xt,w,h),Kt=new P0(k,xt,O),y=new z0(Q,z,O,M),Pt=new Op(Q,Me,z),P=new $p(Q,Me,z),z.programs=It.programs,k.capabilities=O,k.extensions=Me,k.properties=Y,k.renderLists=At,k.shadowMap=Kt,k.state=M,k.info=z}I!==wn&&(L=new em(I,e.width,e.height,a,s,r));let U=new rc(k,Q);this.xr=U,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){let R=Me.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Me.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Mt},this.setPixelRatio=function(R){R!==void 0&&(Mt=R,this.setSize(ot,_t,!1))},this.getSize=function(R){return R.set(ot,_t)},this.setSize=function(R,j,ft=!0){if(U.isPresenting){he("WebGLRenderer: Can't change size while VR device is presenting.");return}ot=R,_t=j,e.width=Math.floor(R*Mt),e.height=Math.floor(j*Mt),ft===!0&&(e.style.width=R+"px",e.style.height=j+"px"),L!==null&&L.setSize(e.width,e.height),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(ot*Mt,_t*Mt).floor()},this.setDrawingBufferSize=function(R,j,ft){ot=R,_t=j,Mt=ft,e.width=Math.floor(R*ft),e.height=Math.floor(j*ft),this.setViewport(0,0,R,j)},this.setEffects=function(R){if(I===wn){ce("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let j=0;j<R.length;j++)if(R[j].isOutputPass===!0){he("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(st)},this.getViewport=function(R){return R.copy(Dt)},this.setViewport=function(R,j,ft,ct){R.isVector4?Dt.set(R.x,R.y,R.z,R.w):Dt.set(R,j,ft,ct),M.viewport(st.copy(Dt).multiplyScalar(Mt).round())},this.getScissor=function(R){return R.copy($t)},this.setScissor=function(R,j,ft,ct){R.isVector4?$t.set(R.x,R.y,R.z,R.w):$t.set(R,j,ft,ct),M.scissor(N.copy($t).multiplyScalar(Mt).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(R){M.setScissorTest(ie=R)},this.setOpaqueSort=function(R){Lt=R},this.setTransparentSort=function(R){Wt=R},this.getClearColor=function(R){return R.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(R=!0,j=!0,ft=!0){let ct=0;if(R){let lt=!1;if(vt!==null){let Rt=vt.texture.format;lt=T.has(Rt)}if(lt){let Rt=vt.texture.type,Ht=d.has(Rt),Ft=re.getClearColor(),Zt=re.getClearAlpha(),qt=Ft.r,me=Ft.g,ae=Ft.b;Ht?(b[0]=qt,b[1]=me,b[2]=ae,b[3]=Zt,Q.clearBufferuiv(Q.COLOR,0,b)):(C[0]=qt,C[1]=me,C[2]=ae,C[3]=Zt,Q.clearBufferiv(Q.COLOR,0,C))}else ct|=Q.COLOR_BUFFER_BIT}j&&(ct|=Q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ft&&(ct|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ct!==0&&Q.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),q=R},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",J,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),re.dispose(),At.dispose(),Ct.dispose(),Y.dispose(),yt.dispose(),xt.dispose(),it.dispose(),y.dispose(),It.dispose(),U.dispose(),U.removeEventListener("sessionstart",ne),U.removeEventListener("sessionend",Fe),Pe.stop()};function $(R){R.preventDefault(),Zs("WebGLRenderer: Context Lost."),K=!0}function J(){Zs("WebGLRenderer: Context Restored."),K=!1;let R=z.autoReset,j=Kt.enabled,ft=Kt.autoUpdate,ct=Kt.needsUpdate,lt=Kt.type;B(),z.autoReset=R,Kt.enabled=j,Kt.autoUpdate=ft,Kt.needsUpdate=ct,Kt.type=lt}function bt(R){ce("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function rt(R){let j=R.target;j.removeEventListener("dispose",rt),Et(j)}function Et(R){ee(R),Y.remove(R)}function ee(R){let j=Y.get(R).programs;j!==void 0&&(j.forEach(function(ft){It.releaseProgram(ft)}),R.isShaderMaterial&&It.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,ft,ct,lt,Rt){j===null&&(j=We);let Ht=lt.isMesh&&lt.matrixWorld.determinantAffine()<0,Ft=jt(R,j,ft,ct,lt);M.setMaterial(ct,Ht);let Zt=ft.index,qt=1;if(ct.wireframe===!0){if(Zt=mt.getWireframeAttribute(ft),Zt===void 0)return;qt=2}let me=ft.drawRange,ae=ft.attributes.position,Jt=me.start*qt,Qt=(me.start+me.count)*qt;Rt!==null&&(Jt=Math.max(Jt,Rt.start*qt),Qt=Math.min(Qt,(Rt.start+Rt.count)*qt)),Zt!==null?(Jt=Math.max(Jt,0),Qt=Math.min(Qt,Zt.count)):ae!=null&&(Jt=Math.max(Jt,0),Qt=Math.min(Qt,ae.count));let Ve=Qt-Jt;if(Ve<0||Ve===1/0)return;it.setup(lt,ct,Ft,ft,Zt);let Oe,Se=Pt;if(Zt!==null&&(Oe=wt.get(Zt),Se=P,Se.setIndex(Oe)),lt.isMesh)ct.wireframe===!0?(M.setLineWidth(ct.wireframeLinewidth*Ie()),Se.setMode(Q.LINES)):Se.setMode(Q.TRIANGLES);else if(lt.isLine){let qe=ct.linewidth;qe===void 0&&(qe=1),M.setLineWidth(qe*Ie()),lt.isLineSegments?Se.setMode(Q.LINES):lt.isLineLoop?Se.setMode(Q.LINE_LOOP):Se.setMode(Q.LINE_STRIP)}else lt.isPoints?Se.setMode(Q.POINTS):lt.isSprite&&Se.setMode(Q.TRIANGLES);if(lt.isBatchedMesh)if(Me.get("WEBGL_multi_draw"))Se.renderMultiDraw(lt._multiDrawStarts,lt._multiDrawCounts,lt._multiDrawCount);else{let qe=lt._multiDrawStarts,Bt=lt._multiDrawCounts,$e=lt._multiDrawCount,be=Zt?wt.get(Zt).bytesPerElement:1,Ze=Y.get(ct).currentProgram.getUniforms();for(let Dn=0;Dn<$e;Dn++)Ze.setValue(Q,"_gl_DrawID",Dn),Se.render(qe[Dn]/be,Bt[Dn])}else if(lt.isInstancedMesh)Se.renderInstances(Jt,Ve,lt.count);else if(ft.isInstancedBufferGeometry){let qe=ft._maxInstanceCount!==void 0?ft._maxInstanceCount:1/0,Bt=Math.min(ft.instanceCount,qe);Se.renderInstances(Jt,Ve,Bt)}else Se.render(Jt,Ve)};function pe(R,j,ft,ct){q!==null&&R.isNodeMaterial&&q.setObject(ct,R),oe===!0&&zt.setState(R,ft,!1),R.transparent===!0&&R.side===Ln&&R.forceSinglePass===!1?(R.side=xn,R.needsUpdate=!0,Ji(R,j,ct),R.side=Ri,R.needsUpdate=!0,Ji(R,j,ct),R.side=Ln):Ji(R,j,ct)}this.compile=function(R,j,ft=null){ft===null&&(ft=R),q!==null&&q.renderStart(R,j,ft),S=Ct.get(ft),S.init(j),g.push(S),ft.traverseVisible(function(lt){lt.isLight&&lt.layers.test(j.layers)&&(S.pushLight(lt),lt.castShadow&&S.pushShadow(lt))}),R!==ft&&R.traverseVisible(function(lt){lt.isLight&&lt.layers.test(j.layers)&&(S.pushLight(lt),lt.castShadow&&S.pushShadow(lt))}),S.setupLights(),q!==null&&q.updateLights(S.state.lightsArray),ue=this.localClippingEnabled,oe=zt.init(this.clippingPlanes,ue),oe===!0&&zt.setGlobalState(this.clippingPlanes,j),q!==null&&Kt.render(S.state.shadowsArray,ft,j);let ct=new Set;return R.traverse(function(lt){if(!(lt.isMesh||lt.isPoints||lt.isLine||lt.isSprite))return;let Rt=lt.material;if(Rt)if(Array.isArray(Rt))for(let Ht=0;Ht<Rt.length;Ht++){let Ft=Rt[Ht];pe(Ft,ft,j,lt),ct.add(Ft)}else pe(Rt,ft,j,lt),ct.add(Rt)}),S=g.pop(),q!==null&&q.renderEnd(),ct},this.compileAsync=function(R,j,ft=null){let ct=this.compile(R,j,ft);return new Promise(lt=>{function Rt(){if(ct.forEach(function(Ht){let Zt=Y.get(Ht).currentProgram;(Zt===void 0||Zt.isReady())&&ct.delete(Ht)}),ct.size===0){lt(R);return}setTimeout(Rt,10)}Me.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let St=null;function Yt(R){St&&St(R)}function ne(){Pe.stop()}function Fe(){Pe.start()}let Pe=new jh;Pe.setAnimationLoop(Yt),typeof self<"u"&&Pe.setContext(self),this.setAnimationLoop=function(R){St=R,U.setAnimationLoop(R),R===null?Pe.stop():Pe.start()},U.addEventListener("sessionstart",ne),U.addEventListener("sessionend",Fe),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(K===!0)return;q!==null&&q.renderStart(R,j);let ft=U.enabled===!0&&U.isPresenting===!0,ct=L!==null&&(vt===null||ft)&&L.begin(k,vt);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),U.enabled===!0&&U.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(U.cameraAutoUpdate===!0&&U.updateCamera(j),j=U.getCamera()),R.isScene===!0&&R.onBeforeRender(k,R,j,vt),S=Ct.get(R,g.length),S.init(j),S.state.textureUnits=W.getTextureUnits(),g.push(S),le.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),fe.setFromProjectionMatrix(le,Wn,j.reversedDepth),ue=this.localClippingEnabled,oe=zt.init(this.clippingPlanes,ue),c=At.get(R,D.length),c.init(),D.push(c),U.enabled===!0&&U.isPresenting===!0){let Ht=k.xr.getDepthSensingMesh();Ht!==null&&Je(Ht,j,-1/0,k.sortObjects)}Je(R,j,0,k.sortObjects),c.finish(),q!==null&&q.updateLights(S.state.lightsArray),k.sortObjects===!0&&c.sort(Lt,Wt),xe=U.enabled===!1||U.isPresenting===!1||U.hasDepthSensing()===!1,xe&&re.addToRenderList(c,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),oe===!0&&zt.beginShadows();let lt=S.state.shadowsArray;if(Kt.render(lt,R,j),oe===!0&&zt.endShadows(),(ct&&L.hasRenderPass())===!1){let Ht=c.opaque,Ft=c.transmissive;if(S.setupLights(),j.isArrayCamera){let Zt=j.cameras;if(Ft.length>0)for(let qt=0,me=Zt.length;qt<me;qt++){let ae=Zt[qt];Zn(Ht,Ft,R,ae)}xe&&re.render(R);for(let qt=0,me=Zt.length;qt<me;qt++){let ae=Zt[qt];on(c,R,ae,ae.viewport)}}else Ft.length>0&&Zn(Ht,Ft,R,j),xe&&re.render(R),on(c,R,j)}vt!==null&&ut===0&&(W.updateMultisampleRenderTarget(vt),W.updateRenderTargetMipmap(vt)),ct&&L.end(k),R.isScene===!0&&R.onAfterRender(k,R,j),it.resetDefaultState(),dt=-1,gt=null,g.pop(),g.length>0?(S=g[g.length-1],W.setTextureUnits(S.state.textureUnits),oe===!0&&zt.setGlobalState(k.clippingPlanes,S.state.camera)):S=null,D.pop(),D.length>0?c=D[D.length-1]:c=null,q!==null&&q.renderEnd()};function Je(R,j,ft,ct){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)ft=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLightProbeGrid)S.pushLightProbeGrid(R);else if(R.isLight)S.pushLight(R),R.castShadow&&S.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(fe)){ct&&ve.setFromMatrixPosition(R.matrixWorld).applyMatrix4(le);let Ht=xt.update(R),Ft=R.material;Ft.visible&&c.push(R,Ht,Ft,ft,ve.z,null,j)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(fe))){let Ht=xt.update(R),Ft=R.material;if(ct&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ve.copy(R.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),ve.copy(Ht.boundingSphere.center)),ve.applyMatrix4(R.matrixWorld).applyMatrix4(le)),Array.isArray(Ft)){let Zt=Ht.groups;for(let qt=0,me=Zt.length;qt<me;qt++){let ae=Zt[qt],Jt=Ft[ae.materialIndex];Jt&&Jt.visible&&c.push(R,Ht,Jt,ft,ve.z,ae,j)}}else Ft.visible&&c.push(R,Ht,Ft,ft,ve.z,null,j)}}let Rt=R.children;for(let Ht=0,Ft=Rt.length;Ht<Ft;Ht++)Je(Rt[Ht],j,ft,ct)}function on(R,j,ft,ct){let{opaque:lt,transmissive:Rt,transparent:Ht}=R;S.setupLightsView(ft),oe===!0&&zt.setGlobalState(k.clippingPlanes,ft),ct&&M.viewport(st.copy(ct)),lt.length>0&&zn(lt,j,ft),Rt.length>0&&zn(Rt,j,ft),Ht.length>0&&zn(Ht,j,ft),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Zn(R,j,ft,ct){if((ft.isScene===!0?ft.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[ct.id]===void 0){let Jt=Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[ct.id]=new Sn(1,1,{generateMipmaps:!0,type:Jt?Yn:wn,minFilter:ii,samples:Math.max(4,O.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ee.workingColorSpace})}let Rt=S.state.transmissionRenderTarget[ct.id],Ht=ct.viewport||st;Rt.setSize(Ht.z*k.transmissionResolutionScale,Ht.w*k.transmissionResolutionScale);let Ft=k.getRenderTarget(),Zt=k.getActiveCubeFace(),qt=k.getActiveMipmapLevel();k.setRenderTarget(Rt),k.getClearColor(ge),Gt=k.getClearAlpha(),Gt<1&&k.setClearColor(16777215,.5),k.clear(),xe&&re.render(ft);let me=k.toneMapping;k.toneMapping=Xn;let ae=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),S.setupLightsView(ct),oe===!0&&zt.setGlobalState(k.clippingPlanes,ct),zn(R,ft,ct),W.updateMultisampleRenderTarget(Rt),W.updateRenderTargetMipmap(Rt),Me.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Qt=0,Ve=j.length;Qt<Ve;Qt++){let Oe=j[Qt],{object:Se,geometry:qe,material:Bt,group:$e}=Oe;if(Bt.side===Ln&&Se.layers.test(ct.layers)){let be=Bt.side;Bt.side=xn,Bt.needsUpdate=!0,ai(Se,ft,ct,qe,Bt,$e),Bt.side=be,Bt.needsUpdate=!0,Jt=!0}}Jt===!0&&(W.updateMultisampleRenderTarget(Rt),W.updateRenderTargetMipmap(Rt))}k.setRenderTarget(Ft,Zt,qt),k.setClearColor(ge,Gt),ae!==void 0&&(ct.viewport=ae),k.toneMapping=me}function zn(R,j,ft){let ct=j.isScene===!0?j.overrideMaterial:null;for(let lt=0,Rt=R.length;lt<Rt;lt++){let Ht=R[lt],{object:Ft,geometry:Zt,group:qt}=Ht,me=Ht.material;me.allowOverride===!0&&ct!==null&&(me=ct),Ft.layers.test(ft.layers)&&ai(Ft,j,ft,Zt,me,qt)}}function ai(R,j,ft,ct,lt,Rt){q!==null&&lt.isNodeMaterial&&q.setObject(R,lt),R.onBeforeRender(k,j,ft,ct,lt,Rt),R.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),lt.onBeforeRender(k,j,ft,ct,R,Rt),lt.transparent===!0&&lt.side===Ln&&lt.forceSinglePass===!1?(lt.side=xn,lt.needsUpdate=!0,k.renderBufferDirect(ft,j,ct,lt,R,Rt),lt.side=Ri,lt.needsUpdate=!0,k.renderBufferDirect(ft,j,ct,lt,R,Rt),lt.side=Ln):k.renderBufferDirect(ft,j,ct,lt,R,Rt),R.onAfterRender(k,j,ft,ct,lt,Rt)}function Ji(R,j,ft){j.isScene!==!0&&(j=We);let ct=Y.get(R),lt=S.state.lights,Rt=S.state.shadowsArray,Ht=lt.state.version,Ft=It.getParameters(R,lt.state,Rt,j,ft,S.state.lightProbeGridArray),Zt=It.getProgramCacheKey(Ft),qt=ct.programs;ct.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?j.environment:null,ct.fog=j.fog;let me=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ct.envMap=yt.get(R.envMap||ct.environment,me),ct.envMapRotation=ct.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,qt===void 0&&(R.addEventListener("dispose",rt),qt=new Map,ct.programs=qt);let ae=qt.get(Zt);if(ae!==void 0){if(ct.currentProgram===ae&&ct.lightsStateVersion===Ht)return Ns(R,Ft),ae}else Ft.uniforms=It.getUniforms(R),q!==null&&R.isNodeMaterial&&q.build(R,ft,Ft),R.onBeforeCompile(Ft,k),ae=It.acquireProgram(Ft,Zt),qt.set(Zt,ae),ct.uniforms=Ft.uniforms;let Jt=ct.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Jt.clippingPlanes=zt.uniform),Ns(R,Ft),ct.needsLights=Di(R),ct.lightsStateVersion=Ht,ct.needsLights&&(Jt.ambientLightColor.value=lt.state.ambient,Jt.lightProbe.value=lt.state.probe,Jt.sunLights.value=lt.state.sun,Jt.sunLightShadows.value=lt.state.sunShadow,Jt.directionalLights.value=lt.state.directional,Jt.directionalLightShadows.value=lt.state.directionalShadow,Jt.spotLights.value=lt.state.spot,Jt.spotLightShadows.value=lt.state.spotShadow,Jt.rectAreaLights.value=lt.state.rectArea,Jt.ltc_1.value=lt.state.rectAreaLTC1,Jt.ltc_2.value=lt.state.rectAreaLTC2,Jt.pointLights.value=lt.state.point,Jt.pointLightShadows.value=lt.state.pointShadow,Jt.hemisphereLights.value=lt.state.hemi,Jt.sunShadowMatrix.value=lt.state.sunShadowMatrix,Jt.sunShadowCascade.value=lt.state.sunShadowCascade,Jt.directionalShadowMatrix.value=lt.state.directionalShadowMatrix,Jt.spotLightMatrix.value=lt.state.spotLightMatrix,Jt.spotLightMap.value=lt.state.spotLightMap,Jt.pointShadowMatrix.value=lt.state.pointShadowMatrix),ct.lightProbeGrid=S.state.lightProbeGridArray.length>0,ct.currentProgram=ae,ct.uniformsList=null,ae}function Cr(R){if(R.uniformsList===null){let j=R.currentProgram.getUniforms();R.uniformsList=Ls.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function Ns(R,j){let ft=Y.get(R);ft.outputColorSpace=j.outputColorSpace,ft.batching=j.batching,ft.batchingColor=j.batchingColor,ft.instancing=j.instancing,ft.instancingColor=j.instancingColor,ft.instancingMorph=j.instancingMorph,ft.skinning=j.skinning,ft.morphTargets=j.morphTargets,ft.morphNormals=j.morphNormals,ft.morphColors=j.morphColors,ft.morphTargetsCount=j.morphTargetsCount,ft.numClippingPlanes=j.numClippingPlanes,ft.numIntersection=j.numClipIntersection,ft.vertexAlphas=j.vertexAlphas,ft.vertexTangents=j.vertexTangents,ft.toneMapping=j.toneMapping}function $i(R,j){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;v.setFromMatrixPosition(j.matrixWorld);for(let ft=0,ct=R.length;ft<ct;ft++){let lt=R[ft];if(lt.texture!==null&&lt.boundingBox.containsPoint(v))return lt}return null}function jt(R,j,ft,ct,lt){j.isScene!==!0&&(j=We),W.resetTextureUnits();let Rt=j.fog,Ht=ct.isMeshStandardMaterial||ct.isMeshLambertMaterial||ct.isMeshPhongMaterial?j.environment:null,Ft=vt===null?k.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Ee.workingColorSpace,Zt=ct.isMeshStandardMaterial||ct.isMeshLambertMaterial&&!ct.envMap||ct.isMeshPhongMaterial&&!ct.envMap,qt=yt.get(ct.envMap||Ht,Zt),me=ct.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,ae=!!ft.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),Jt=!!ft.morphAttributes.position,Qt=!!ft.morphAttributes.normal,Ve=!!ft.morphAttributes.color,Oe=Xn;ct.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(Oe=k.toneMapping);let Se=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,qe=Se!==void 0?Se.length:0,Bt=Y.get(ct),$e=S.state.lights;if(oe===!0&&(ue===!0||R!==gt)){let Be=R===gt&&ct.id===dt;zt.setState(ct,R,Be)}let be=!1;ct.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==$e.state.version||Bt.outputColorSpace!==Ft||lt.isBatchedMesh&&Bt.batching===!1||!lt.isBatchedMesh&&Bt.batching===!0||lt.isBatchedMesh&&Bt.batchingColor===!0&&lt._colorsTexture===null||lt.isBatchedMesh&&Bt.batchingColor===!1&&lt._colorsTexture!==null||lt.isInstancedMesh&&Bt.instancing===!1||!lt.isInstancedMesh&&Bt.instancing===!0||lt.isSkinnedMesh&&Bt.skinning===!1||!lt.isSkinnedMesh&&Bt.skinning===!0||lt.isInstancedMesh&&Bt.instancingColor===!0&&lt.instanceColor===null||lt.isInstancedMesh&&Bt.instancingColor===!1&&lt.instanceColor!==null||lt.isInstancedMesh&&Bt.instancingMorph===!0&&lt.morphTexture===null||lt.isInstancedMesh&&Bt.instancingMorph===!1&&lt.morphTexture!==null||Bt.envMap!==qt||ct.fog===!0&&Bt.fog!==Rt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==zt.numPlanes||Bt.numIntersection!==zt.numIntersection)||Bt.vertexAlphas!==me||Bt.vertexTangents!==ae||Bt.morphTargets!==Jt||Bt.morphNormals!==Qt||Bt.morphColors!==Ve||Bt.toneMapping!==Oe||Bt.morphTargetsCount!==qe||!!Bt.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(be=!0):(be=!0,Bt.__version=ct.version);let Ze=Bt.currentProgram;be===!0&&(Ze=Ji(ct,j,lt),q&&ct.isNodeMaterial&&q.onUpdateProgram(ct,Ze,Bt));let Dn=!1,_n=!1,we=!1,Re=Ze.getUniforms(),Le=Bt.uniforms;if(M.useProgram(Ze.program)&&(Dn=!0,_n=!0,we=!0),ct.id!==dt&&(dt=ct.id,_n=!0),Bt.needsLights){let Be=$i(S.state.lightProbeGridArray,lt);Bt.lightProbeGrid!==Be&&(Bt.lightProbeGrid=Be,_n=!0)}if(Dn||gt!==R){M.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Re.setValue(Q,"projectionMatrix",R.projectionMatrix),Re.setValue(Q,"viewMatrix",R.matrixWorldInverse);let ln=Re.map.cameraPosition;ln!==void 0&&ln.setValue(Q,Ae.setFromMatrixPosition(R.matrixWorld)),O.logarithmicDepthBuffer&&Re.setValue(Q,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&Re.setValue(Q,"isOrthographic",R.isOrthographicCamera===!0),gt!==R&&(gt=R,_n=!0,we=!0)}if(Bt.needsLights&&($e.state.sunShadowMap.length>0&&Re.setValue(Q,"sunShadowMap",$e.state.sunShadowMap,W),$e.state.directionalShadowMap.length>0&&Re.setValue(Q,"directionalShadowMap",$e.state.directionalShadowMap,W),$e.state.spotShadowMap.length>0&&Re.setValue(Q,"spotShadowMap",$e.state.spotShadowMap,W),$e.state.pointShadowMap.length>0&&Re.setValue(Q,"pointShadowMap",$e.state.pointShadowMap,W)),lt.isSkinnedMesh){Re.setOptional(Q,lt,"bindMatrix"),Re.setOptional(Q,lt,"bindMatrixInverse");let Be=lt.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),Re.setValue(Q,"boneTexture",Be.boneTexture,W))}lt.isBatchedMesh&&(Re.setOptional(Q,lt,"batchingTexture"),Re.setValue(Q,"batchingTexture",lt._matricesTexture,W),Re.setOptional(Q,lt,"batchingIdTexture"),Re.setValue(Q,"batchingIdTexture",lt._indirectTexture,W),Re.setOptional(Q,lt,"batchingColorTexture"),lt._colorsTexture!==null&&Re.setValue(Q,"batchingColorTexture",lt._colorsTexture,W));let Nn=ft.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&Z.update(lt,ft,Ze),(_n||Bt.receiveShadow!==lt.receiveShadow)&&(Bt.receiveShadow=lt.receiveShadow,Re.setValue(Q,"receiveShadow",lt.receiveShadow)),(ct.isMeshStandardMaterial||ct.isMeshLambertMaterial||ct.isMeshPhongMaterial)&&ct.envMap===null&&j.environment!==null&&(Le.envMapIntensity.value=j.environmentIntensity),Le.dfgLUT!==void 0&&(Le.dfgLUT.value=V0()),_n){if(Re.setValue(Q,"toneMappingExposure",k.toneMappingExposure),Bt.needsLights&&mn(Le,we),Rt&&ct.fog===!0&&Xt.refreshFogUniforms(Le,Rt),Xt.refreshMaterialUniforms(Le,ct,Mt,_t,S.state.transmissionRenderTarget[R.id]),Bt.needsLights&&Bt.lightProbeGrid){let Be=Bt.lightProbeGrid;Le.probesSH.value=Be.texture,Le.probesMin.value.copy(Be.boundingBox.min),Le.probesMax.value.copy(Be.boundingBox.max),Le.probesResolution.value.copy(Be.resolution)}Ls.upload(Q,Cr(Bt),Le,W)}if(ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(Ls.upload(Q,Cr(Bt),Le,W),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&Re.setValue(Q,"center",lt.center),Re.setValue(Q,"modelViewMatrix",lt.modelViewMatrix),Re.setValue(Q,"normalMatrix",lt.normalMatrix),Re.setValue(Q,"modelMatrix",lt.matrixWorld),ct.uniformsGroups!==void 0){let Be=ct.uniformsGroups;for(let ln=0,ke=Be.length;ln<ke;ln++){let Ir=Be[ln];y.update(Ir,Ze),y.bind(Ir,Ze)}}return Ze}function mn(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.sunLights.needsUpdate=j,R.sunLightShadows.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function Di(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return pt},this.getActiveMipmapLevel=function(){return ut},this.getRenderTarget=function(){return vt},this.setRenderTargetTextures=function(R,j,ft){let ct=Y.get(R);ct.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ct.__autoAllocateDepthBuffer===!1&&(ct.__useRenderToTexture=!1),Y.get(R.texture).__webglTexture=j,Y.get(R.depthTexture).__webglTexture=ct.__autoAllocateDepthBuffer?void 0:ft,ct.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,j){let ft=Y.get(R);ft.__webglFramebuffer=j,ft.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(R,j=0,ft=0){vt=R,pt=j,ut=ft;let ct=null,lt=!1,Rt=!1;if(R){let Ft=Y.get(R);if(Ft.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(Q.FRAMEBUFFER,Ft.__webglFramebuffer),st.copy(R.viewport),N.copy(R.scissor),Vt=R.scissorTest,M.viewport(st),M.scissor(N),M.setScissorTest(Vt),dt=-1;return}else if(Ft.__webglFramebuffer===void 0)W.setupRenderTarget(R);else if(Ft.__hasExternalTextures)W.rebindTextures(R,Y.get(R.texture).__webglTexture,Y.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let me=R.depthTexture;if(Ft.__boundDepthTexture!==me){if(me!==null&&Y.has(me)&&(R.width!==me.image.width||R.height!==me.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(R)}}let Zt=R.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Rt=!0);let qt=Y.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(qt[j])?ct=qt[j][ft]:ct=qt[j],lt=!0):R.samples>0&&W.useMultisampledRTT(R)===!1?ct=Y.get(R).__webglMultisampledFramebuffer:Array.isArray(qt)?ct=qt[ft]:ct=qt,st.copy(R.viewport),N.copy(R.scissor),Vt=R.scissorTest}else st.copy(Dt).multiplyScalar(Mt).floor(),N.copy($t).multiplyScalar(Mt).floor(),Vt=ie;if(ft!==0&&(ct=nt),M.bindFramebuffer(Q.FRAMEBUFFER,ct)&&M.drawBuffers(R,ct),M.viewport(st),M.scissor(N),M.setScissorTest(Vt),lt){let Ft=Y.get(R.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ft.__webglTexture,ft)}else if(Rt){let Ft=j;for(let Zt=0;Zt<R.textures.length;Zt++){let qt=Y.get(R.textures[Zt]);Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+Zt,qt.__webglTexture,ft,Ft)}}else if(R!==null&&ft!==0){let Ft=Y.get(R.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Ft.__webglTexture,ft)}dt=-1};function Rr(R){let j=Y.get(R);return(j.__readFormat!==R.format||j.__readType!==R.type)&&(j.__readFormat=R.format,j.__readType=R.type,j.__formatReadable=O.textureFormatReadable(R.format),j.__typeReadable=O.textureTypeReadable(R.type)),j}this.readRenderTargetPixels=function(R,j,ft,ct,lt,Rt,Ht,Ft=0){if(!(R&&R.isWebGLRenderTarget)){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Zt=Y.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ht!==void 0&&(Zt=Zt[Ht]),Zt){M.bindFramebuffer(Q.FRAMEBUFFER,Zt);try{let qt=R.textures[Ft],me=qt.format,ae=qt.type;R.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+Ft);let Jt=Rr(qt);if(Jt.__formatReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Jt.__typeReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-ct&&ft>=0&&ft<=R.height-lt&&Q.readPixels(j,ft,ct,lt,X.convert(me),X.convert(ae),Rt)}finally{let qt=vt!==null?Y.get(vt).__webglFramebuffer:null;M.bindFramebuffer(Q.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(R,j,ft,ct,lt,Rt,Ht,Ft=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Zt=Y.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ht!==void 0&&(Zt=Zt[Ht]),Zt)if(j>=0&&j<=R.width-ct&&ft>=0&&ft<=R.height-lt){M.bindFramebuffer(Q.FRAMEBUFFER,Zt);let qt=R.textures[Ft],me=qt.format,ae=qt.type;R.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+Ft);let Jt=Rr(qt);if(Jt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Jt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Qt=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,Qt),Q.bufferData(Q.PIXEL_PACK_BUFFER,Rt.byteLength,Q.STREAM_READ),Q.readPixels(j,ft,ct,lt,X.convert(me),X.convert(ae),0),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null);let Ve=vt!==null?Y.get(vt).__webglFramebuffer:null;M.bindFramebuffer(Q.FRAMEBUFFER,Ve);let Oe=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await Th(Q,Oe,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,Qt),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,Rt),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null),Q.deleteBuffer(Qt),Q.deleteSync(Oe),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,j=null,ft=0){let ct=Math.pow(2,-ft),lt=Math.floor(R.image.width*ct),Rt=Math.floor(R.image.height*ct),Ht=j!==null?j.x:0,Ft=j!==null?j.y:0;W.setTexture2D(R,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,ft,0,0,Ht,Ft,lt,Rt),M.unbindTexture()},this.copyTextureToTexture=function(R,j,ft=null,ct=null,lt=0,Rt=0){let Ht,Ft,Zt,qt,me,ae,Jt,Qt,Ve,Oe=R.isCompressedTexture?R.mipmaps[Rt]:R.image;if(ft!==null)Ht=ft.max.x-ft.min.x,Ft=ft.max.y-ft.min.y,Zt=ft.isBox3?ft.max.z-ft.min.z:1,qt=ft.min.x,me=ft.min.y,ae=ft.isBox3?ft.min.z:0;else{let Le=Math.pow(2,-lt);Ht=Math.floor(Oe.width*Le),Ft=Math.floor(Oe.height*Le),R.isDataArrayTexture?Zt=Oe.depth:R.isData3DTexture?Zt=Math.floor(Oe.depth*Le):Zt=1,qt=0,me=0,ae=0}ct!==null?(Jt=ct.x,Qt=ct.y,Ve=ct.z):(Jt=0,Qt=0,Ve=0);let Se=X.convert(j.format),qe=X.convert(j.type),Bt;j.isData3DTexture?(W.setTexture3D(j,0),Bt=Q.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(W.setTexture2DArray(j,0),Bt=Q.TEXTURE_2D_ARRAY):(W.setTexture2D(j,0),Bt=Q.TEXTURE_2D),M.activeTexture(Q.TEXTURE0),M.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,j.flipY),M.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),M.pixelStorei(Q.UNPACK_ALIGNMENT,j.unpackAlignment);let $e=M.getParameter(Q.UNPACK_ROW_LENGTH),be=M.getParameter(Q.UNPACK_IMAGE_HEIGHT),Ze=M.getParameter(Q.UNPACK_SKIP_PIXELS),Dn=M.getParameter(Q.UNPACK_SKIP_ROWS),_n=M.getParameter(Q.UNPACK_SKIP_IMAGES);M.pixelStorei(Q.UNPACK_ROW_LENGTH,Oe.width),M.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Oe.height),M.pixelStorei(Q.UNPACK_SKIP_PIXELS,qt),M.pixelStorei(Q.UNPACK_SKIP_ROWS,me),M.pixelStorei(Q.UNPACK_SKIP_IMAGES,ae);let we=R.isDataArrayTexture||R.isData3DTexture,Re=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){let Le=Y.get(R),Nn=Y.get(j),Be=Y.get(Le.__renderTarget),ln=Y.get(Nn.__renderTarget);M.bindFramebuffer(Q.READ_FRAMEBUFFER,Be.__webglFramebuffer),M.bindFramebuffer(Q.DRAW_FRAMEBUFFER,ln.__webglFramebuffer);for(let ke=0;ke<Zt;ke++)we&&(Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Y.get(R).__webglTexture,lt,ae+ke),Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Y.get(j).__webglTexture,Rt,Ve+ke)),Q.blitFramebuffer(qt,me,Ht,Ft,Jt,Qt,Ht,Ft,Q.DEPTH_BUFFER_BIT,Q.NEAREST);M.bindFramebuffer(Q.READ_FRAMEBUFFER,null),M.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else if(lt!==0||R.isRenderTargetTexture||Y.has(R)){let Le=Y.get(R),Nn=Y.get(j);M.bindFramebuffer(Q.READ_FRAMEBUFFER,H),M.bindFramebuffer(Q.DRAW_FRAMEBUFFER,tt);for(let Be=0;Be<Zt;Be++)we?Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Le.__webglTexture,lt,ae+Be):Q.framebufferTexture2D(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Le.__webglTexture,lt),Re?Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Nn.__webglTexture,Rt,Ve+Be):Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Nn.__webglTexture,Rt),lt!==0?Q.blitFramebuffer(qt,me,Ht,Ft,Jt,Qt,Ht,Ft,Q.COLOR_BUFFER_BIT,Q.NEAREST):Re?Q.copyTexSubImage3D(Bt,Rt,Jt,Qt,Ve+Be,qt,me,Ht,Ft):Q.copyTexSubImage2D(Bt,Rt,Jt,Qt,qt,me,Ht,Ft);M.bindFramebuffer(Q.READ_FRAMEBUFFER,null),M.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else Re?R.isDataTexture||R.isData3DTexture?Q.texSubImage3D(Bt,Rt,Jt,Qt,Ve,Ht,Ft,Zt,Se,qe,Oe.data):j.isCompressedArrayTexture?Q.compressedTexSubImage3D(Bt,Rt,Jt,Qt,Ve,Ht,Ft,Zt,Se,Oe.data):Q.texSubImage3D(Bt,Rt,Jt,Qt,Ve,Ht,Ft,Zt,Se,qe,Oe):R.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,Rt,Jt,Qt,Ht,Ft,Se,qe,Oe.data):R.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,Rt,Jt,Qt,Oe.width,Oe.height,Se,Oe.data):Q.texSubImage2D(Q.TEXTURE_2D,Rt,Jt,Qt,Ht,Ft,Se,qe,Oe);M.pixelStorei(Q.UNPACK_ROW_LENGTH,$e),M.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,be),M.pixelStorei(Q.UNPACK_SKIP_PIXELS,Ze),M.pixelStorei(Q.UNPACK_SKIP_ROWS,Dn),M.pixelStorei(Q.UNPACK_SKIP_IMAGES,_n),Rt===0&&j.generateMipmaps&&Q.generateMipmap(Bt),M.unbindTexture()},this.initRenderTarget=function(R){Y.get(R).__webglFramebuffer===void 0&&W.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?W.setTextureCube(R,0):R.isData3DTexture?W.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?W.setTexture2DArray(R,0):W.setTexture2D(R,0),M.unbindTexture()},this.resetState=function(){pt=0,ut=0,vt=null,M.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ee._getUnpackColorSpace()}};window.FestaGL=(()=>{let i=Math.PI*2,t=(d,b,C)=>Math.min(C,Math.max(b,d)),e={add:(d,b)=>[d[0]+b[0],d[1]+b[1],d[2]+b[2]],sub:(d,b)=>[d[0]-b[0],d[1]-b[1],d[2]-b[2]],mul:(d,b)=>[d[0]*b,d[1]*b,d[2]*b],dot:(d,b)=>d[0]*b[0]+d[1]*b[1]+d[2]*b[2],cross:(d,b)=>[d[1]*b[2]-d[2]*b[1],d[2]*b[0]-d[0]*b[2],d[0]*b[1]-d[1]*b[0]],len:d=>Math.hypot(...d),norm:d=>{let b=Math.hypot(...d)||1;return d.map(C=>C/b)}},n={identity:()=>new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),multiply:(d,b)=>{let C=new Float32Array(16);for(let v=0;v<4;v++)for(let c=0;c<4;c++)C[v*4+c]=d[c]*b[v*4]+d[4+c]*b[v*4+1]+d[8+c]*b[v*4+2]+d[12+c]*b[v*4+3];return C},perspective:(d,b,C,v)=>{let c=1/Math.tan(d/2),S=new Float32Array(16);return S[0]=c/b,S[5]=c,S[10]=(v+C)/(C-v),S[11]=-1,S[14]=2*v*C/(C-v),S},ortho:(d,b,C,v,c,S)=>new Float32Array([2/(b-d),0,0,0,0,2/(v-C),0,0,0,0,-2/(S-c),0,-(b+d)/(b-d),-(v+C)/(v-C),-(S+c)/(S-c),1]),lookAt:(d,b,C=[0,1,0])=>{let v=e.norm(e.sub(d,b)),c=e.norm(e.cross(C,v)),S=e.cross(v,c);return new Float32Array([c[0],S[0],v[0],0,c[1],S[1],v[1],0,c[2],S[2],v[2],0,-e.dot(c,d),-e.dot(S,d),-e.dot(v,d),1])},compose:(d=0,b=0,C=0,v=0,c=1,S=c,D=c)=>{let g=Math.cos(v),L=Math.sin(v);return new Float32Array([g*c,0,-L*c,0,0,S,0,0,L*D,0,g*D,0,d,b,C,1])},transform:(d,b,C=1)=>[d[0]*b[0]+d[4]*b[1]+d[8]*b[2]+d[12]*C,d[1]*b[0]+d[5]*b[1]+d[9]*b[2]+d[13]*C,d[2]*b[0]+d[6]*b[1]+d[10]*b[2]+d[14]*C],inverse:d=>{let b=new Float32Array(16),C=Array.from(d),v=Array.from({length:4},(c,S)=>[C[S],C[S+4],C[S+8],C[S+12],...Array.from({length:4},(D,g)=>S===g?1:0)]);for(let c=0;c<4;c++){let S=c;for(let g=c+1;g<4;g++)Math.abs(v[g][c])>Math.abs(v[S][c])&&(S=g);[v[c],v[S]]=[v[S],v[c]];let D=v[c][c];if(Math.abs(D)<1e-12)return n.identity();for(let g=0;g<8;g++)v[c][g]/=D;for(let g=0;g<4;g++)if(g!==c){let L=v[g][c];for(let k=0;k<8;k++)v[g][k]-=L*v[c][k]}}for(let c=0;c<4;c++)for(let S=0;S<4;S++)b[S*4+c]=v[c][S+4];return b}};function s(d){return Array.isArray(d)?d:typeof d=="number"?[(d>>16&255)/255,(d>>8&255)/255,(d&255)/255]:(d=d.replace("#",""),d.length===3&&(d=d.split("").map(b=>b+b).join("")),s(parseInt(d,16)))}function r(d=91371){let b=d>>>0;return()=>{b+=1831565813;let C=b;return C=Math.imul(C^C>>>15,C|1),C^=C+Math.imul(C^C>>>7,C|61),((C^C>>>14)>>>0)/4294967296}}let l=(d="#ffffff",b=0,C=.7,v=0,c=0,S=1)=>({color:s(d),p:[b,C,v,c],ao:S});class a{constructor(){this.data=new Float32Array(262144),this.used=0,this.count=0,this.transform=n.identity(),this.animation=[0,0,0,0]}reserve(b){if(this.used+b>this.data.length){let C=new Float32Array(Math.max(this.data.length*2,this.used+b));C.set(this.data),this.data=C}}vertex(b,C,v,c){this.reserve(20),b=n.transform(this.transform,b),C=e.norm(n.transform(this.transform,C,0));let S=this.data,D=this.used,g=c.color;for(let L=0;L<3;L++)S[D+L]=b[L];for(let L=0;L<3;L++)S[D+3+L]=C[L];S[D+6]=v[0],S[D+7]=v[1],S[D+8]=g[0],S[D+9]=g[1],S[D+10]=g[2],S[D+11]=c.ao??1;for(let L=0;L<4;L++)S[D+12+L]=c.p[L];for(let L=0;L<4;L++)S[D+16+L]=this.animation[L];this.used+=20,this.count++}tri(b,C,v,c,S=[[0,0],[0,1],[1,1]],D=null){let g=e.norm(e.cross(e.sub(C,b),e.sub(v,b)));this.vertex(b,D?D[0]:g,S[0],c),this.vertex(C,D?D[1]:g,S[1],c),this.vertex(v,D?D[2]:g,S[2],c)}quad(b,C,v,c,S,D=1,g=1){this.tri(b,C,v,S,[[0,0],[0,g],[D,g]]),this.tri(b,v,c,S,[[0,0],[D,g],[D,0]])}box(b,C,v,c,S,D,g){let L=b-c/2,k=b+c/2,K=C-S/2,q=C+S/2,nt=v-D/2,H=v+D/2;this.quad([L,q,H],[L,K,H],[k,K,H],[k,q,H],g,g.fit?1:c,g.fit?1:S),this.quad([k,q,nt],[k,K,nt],[L,K,nt],[L,q,nt],g,g.fit?1:c,g.fit?1:S),this.quad([k,q,H],[k,K,H],[k,K,nt],[k,q,nt],g,g.fit?1:D,g.fit?1:S),this.quad([L,q,nt],[L,K,nt],[L,K,H],[L,q,H],g,g.fit?1:D,g.fit?1:S),this.quad([L,q,nt],[L,q,H],[k,q,H],[k,q,nt],g,g.fit?1:c,g.fit?1:D),this.quad([L,K,H],[L,K,nt],[k,K,nt],[k,K,H],g,g.fit?1:c,g.fit?1:D)}plane(b,C,v,c,S,D,g=c,L=S){this.quad([b-c/2,C,v-S/2],[b-c/2,C,v+S/2],[b+c/2,C,v+S/2],[b+c/2,C,v-S/2],D,g,L)}sphere(b,C,v,c,S,D,g,L=16,k=10,K=0,q=Math.PI){let nt=(H,tt)=>{let pt=H/L*i,ut=K+tt/k*(q-K),vt=[Math.sin(ut)*Math.cos(pt),Math.cos(ut),Math.sin(ut)*Math.sin(pt)];return{p:[b+vt[0]*c,C+vt[1]*S,v+vt[2]*D],n:e.norm([vt[0]/c,vt[1]/S,vt[2]/D]),uv:[H/L,tt/k]}};for(let H=0;H<k;H++)for(let tt=0;tt<L;tt++){let pt=nt(tt,H),ut=nt(tt,H+1),vt=nt(tt+1,H+1),dt=nt(tt+1,H);for(let gt of[[pt,ut,vt],[pt,vt,dt]]){let st=e.cross(e.sub(gt[1].p,gt[0].p),e.sub(gt[2].p,gt[0].p));e.dot(st,gt[0].n)<0&&([gt[1],gt[2]]=[gt[2],gt[1]]),this.tri(...gt.map(N=>N.p),g,gt.map(N=>N.uv),gt.map(N=>N.n))}}}cylinder(b,C,v,c,S,D=12,g=!0){let L=e.norm(e.sub(C,b)),k=e.norm(e.cross(L,Math.abs(L[1])>.95?[1,0,0]:[0,1,0])),K=e.cross(L,k),q=e.len(e.sub(C,b)),nt=(tt,pt,ut)=>e.add(tt,e.add(e.mul(k,Math.cos(ut)*pt),e.mul(K,Math.sin(ut)*pt))),H=tt=>e.norm(e.add(e.add(e.mul(k,Math.cos(tt)),e.mul(K,Math.sin(tt))),e.mul(L,(v-c)/q)));for(let tt=0;tt<D;tt++){let pt=tt/D*i,ut=(tt+1)/D*i,vt=nt(b,v,pt),dt=nt(C,c,pt),gt=nt(C,c,ut),st=nt(b,v,ut),N=H(pt),Vt=H(ut);this.tri(vt,gt,dt,S,[[tt/D,0],[(tt+1)/D,q],[tt/D,q]],[N,Vt,N]),this.tri(vt,st,gt,S,[[tt/D,0],[(tt+1)/D,0],[(tt+1)/D,q]],[N,Vt,Vt]),g&&(this.tri(b,st,vt,S),this.tri(C,dt,gt,S))}}disk(b,C,v,c,S,D=32){for(let g=0;g<D;g++){let L=g/D*i,k=(g+1)/D*i;this.tri([b,C,v],[b+Math.cos(k)*c,C,v+Math.sin(k)*c],[b+Math.cos(L)*c,C,v+Math.sin(L)*c],S,[[.5,.5],[.5+Math.cos(k)*.5,.5+Math.sin(k)*.5],[.5+Math.cos(L)*.5,.5+Math.sin(L)*.5]])}}tube(b,C,v,c=8){for(let S=1;S<b.length;S++)this.cylinder(b[S-1],b[S],C,C,v,c)}sign(b,C,v,c,S,D,g=!1){let L=l("#ffffff",D,.8,0,.15);this.quad([b-c/2,C+S/2,v],[b-c/2,C-S/2,v],[b+c/2,C-S/2,v],[b+c/2,C+S/2,v],L),g&&this.box(b,C,v-.022,c+.05,S+.05,.04,l("#574333",3))}scope(b,C){let v=this.transform;this.transform=n.multiply(v,b),C(),this.transform=v}animate(b,C,v){let c=this.animation;this.animation=[...b,C],v(),this.animation=c}}class h{constructor(b=512){this.size=b,this.layers=[],this.names={}}add(b,C){let v=document.createElement("canvas");v.width=v.height=this.size;let c=v.getContext("2d",{willReadFrequently:!0});C&&C(c,this.size);let S=this.layers.length;return this.layers.push(v),this.names[b]=S,S}sign(b,C,v="",c="#304c55",S=""){return this.add(b,(D,g)=>{D.fillStyle="#f9f7f0",D.fillRect(0,0,g,g),D.fillStyle=c,D.fillRect(0,0,g,62),D.fillStyle="#ffffff",D.font='700 24px "Noto Sans CJK JP", "Yu Gothic", sans-serif',D.fillText(S||b,22,41),D.fillStyle="#273b3c";let L=u(D,C,g-52,37),k=L.length>3?30:37;L=u(D,C,g-52,k),D.font=`700 ${k}px "Noto Sans CJK JP", "Yu Gothic", sans-serif`;let K=154-Math.min(L.length,4)*4;L.slice(0,4).forEach((H,tt)=>D.fillText(H,26,K+tt*(k+10))),D.fillStyle="#53605b",D.font='500 25px "Noto Sans CJK JP", "Yu Gothic", sans-serif';let q=u(D,v,g-52,25),nt=Math.max(300,K+L.length*(k+10)+25);q.slice(0,4).forEach((H,tt)=>D.fillText(H,26,nt+tt*34)),D.fillStyle=c,D.fillRect(26,g-53,g-52,3),D.fillStyle="#6b7770",D.font='19px "Noto Sans CJK JP", "Yu Gothic", sans-serif',D.fillText("つながりフェスタ 2026",26,g-23)})}banner(b,C,v="",c="#174f54"){return this.add(b,(S,D)=>{S.scale(1,D/112),S.fillStyle="#f9f7f0",S.fillRect(0,0,D,112),S.fillStyle=c,S.fillRect(0,0,76,112),S.fillStyle="#fff",S.font='700 23px "Noto Sans CJK JP", "Yu Gothic", sans-serif',S.textAlign="center",S.fillText(b,38,64);let g=29;for(;g>17&&(S.font=`700 ${g}px "Noto Sans CJK JP", "Yu Gothic", sans-serif`,!(S.measureText(C).width<D-104));)g--;S.textAlign="left",S.fillStyle="#263d3c",S.fillText(C,92,52),S.font='500 17px "Noto Sans CJK JP", "Yu Gothic", sans-serif',S.fillStyle="#5b675d";let L=v;for(;S.measureText(L).width>D-109&&L.length;)L=L.slice(0,-1);S.fillText(L,92,84),S.fillStyle=c,S.fillRect(76,106,D-76,6)})}upload(b,C=this.size){let v=new Uint8Array(C*C*4*this.layers.length),c=document.createElement("canvas");c.width=c.height=C;let S=c.getContext("2d");this.layers.forEach((D,g)=>{S.clearRect(0,0,C,C),S.drawImage(D,0,0,C,C),v.set(S.getImageData(0,0,C,C).data,g*C*C*4)}),this.texture=new Gi(v,C,C,this.layers.length),this.texture.colorSpace=an,this.texture.wrapS=this.texture.wrapT=ms,this.texture.minFilter=ii,this.texture.magFilter=Qe,this.texture.generateMipmaps=!0,this.texture.anisotropy=4,this.texture.needsUpdate=!0}}function u(d,b,C,v){d.font=`700 ${v}px "Noto Sans CJK JP", "Yu Gothic", sans-serif`;let c=[],S="";for(let D of b){if(D===`
`){c.push(S),S="";continue}d.measureText(S+D).width>C&&S?(c.push(S),S=D):S+=D}return S&&c.push(S),c}let m=`#version 300 es
 precision highp float;out vec2 vUV;void main(){vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));vUV=p;gl_Position=vec4(p*2.-1.,0.,1.);}`,x=`#version 300 es
 precision highp float;in vec2 vUV;out vec4 frag;uniform mat4 uInvVP;uniform vec3 uEye;uniform vec3 uSun;uniform float uTime;
 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+1.),f.x),f.y);}float fbm(vec2 p){float n=0.,a=.5;for(int i=0;i<5;i++){n+=noise(p)*a;p=p*2.03+vec2(17.3,9.2);a*=.51;}return n;}
 void main(){vec4 q=uInvVP*vec4(vUV*2.-1.,1.,1.);vec3 ray=normalize(q.xyz/q.w-uEye);float up=max(ray.y,0.);vec3 sky=mix(vec3(.71,.83,.90),vec3(.22,.48,.78),pow(up,.44));float sun=max(dot(ray,uSun),0.);sky+=vec3(1.,.81,.57)*pow(sun,100.)*.22;sky+=vec3(3.,2.8,2.5)*smoothstep(.99988,.99998,sun);
 if(ray.y>.018){vec2 cp=ray.xz/(ray.y+.07)*2.7+vec2(uTime*.0014,0.);float n=fbm(cp);float cloud=smoothstep(.52,.76,n)*smoothstep(.01,.20,ray.y);float shade=fbm(cp+vec2(.18,.08));sky=mix(sky,mix(vec3(.79,.83,.86),vec3(1.15,1.14,1.10),shade),cloud*.75);}if(ray.y<0.)sky=mix(sky,vec3(.65,.71,.69),min(-ray.y*4.,1.));frag=vec4(sky,1.);}
 `,f=`
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
 `,_=`
 vec3 transformed = festaAnimation.xyz+festaRotation()*(position-festaAnimation.xyz);
 if(festaAnimation.w>8.) transformed.z+=sin(festaTime*1.9+transformed.x*4.+transformed.y*1.3)*.08*max(0.,transformed.x-festaAnimation.x);
 if(festaInfo.z>0.) transformed.xz+=festaInfo.z*.045*sin(festaTime*.7+transformed.xz*.23)*clamp(transformed.y*.15,0.,1.);
 festaUV=uv; festaMat=festaSurface; festaShade=festaAO; festaWorld=(instanceMatrix*vec4(transformed,1.)).xyz;
 `;function w(d,b,C=!1){return d.onBeforeCompile=v=>{v.uniforms.festaTime=b.timeUniform,v.uniforms.festaAtlas=b.atlasUniform,v.vertexShader=f+v.vertexShader,v.vertexShader=v.vertexShader.replace("#include <begin_vertex>",_).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
objectNormal=festaRotation()*objectNormal;`),v.fragmentShader=`precision highp sampler2DArray;
uniform sampler2DArray festaAtlas;
varying vec2 festaUV;
varying vec4 festaMat;
varying float festaShade;
varying vec3 festaWorld;
float festaNoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(fract(sin(dot(i,vec2(127.1,311.7)))*43758.5453),fract(sin(dot(i+vec2(1.,0.),vec2(127.1,311.7)))*43758.5453),f.x),mix(fract(sin(dot(i+vec2(0.,1.),vec2(127.1,311.7)))*43758.5453),fract(sin(dot(i+1.,vec2(127.1,311.7)))*43758.5453),f.x),f.y); }
`+v.fragmentShader,v.fragmentShader=v.fragmentShader.replace("#include <map_fragment>",`vec4 festaTexel=texture(festaAtlas,vec3(festaUV,festaMat.x));
if(festaTexel.a<.4) discard;
diffuseColor*=festaTexel;
if(festaMat.x>.5 && festaMat.x<1.5){float variation=festaNoise(festaWorld.xz*.28)*.65+festaNoise(festaWorld.xz*2.1)*.35;diffuseColor.rgb*=mix(.72,1.14,variation);}
if(festaMat.x>3.5 && festaMat.x<4.5)diffuseColor.rgb*=mix(.84,1.09,festaNoise(festaWorld.xz*.6));`),v.fragmentShader=v.fragmentShader.replace("diffuseColor*=festaTexel;",`diffuseColor*=festaTexel;
if(festaMat.x>2.5 && festaMat.x<3.5){
 float weather=festaNoise(festaWorld.xz*.31+vec2(0.,festaWorld.y*.18));
 float baseDamp=(1.-smoothstep(.15,1.6,festaWorld.y))*festaNoise(festaWorld.xz*1.8);
 diffuseColor.rgb*=mix(.93,1.02,weather)*(1.-baseDamp*.13);
}`),C||(v.fragmentShader=v.fragmentShader.replace("#include <roughnessmap_fragment>","float roughnessFactor=clamp(festaMat.y,.06,1.);").replace("#include <metalnessmap_fragment>","float metalnessFactor=clamp(festaMat.z,0.,1.);").replace("#include <emissivemap_fragment>","totalEmissiveRadiance=diffuseColor.rgb*festaMat.w;").replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
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
reflectedLight.indirectDiffuse*=festaShade;`))},d.customProgramCacheKey=()=>C?"festa-depth-2":"festa-standard-2",d}class I{constructor(b,C,{name:v="",shadow:c=!0,instances:S=null,dynamic:D=!1}={}){this.name=v,this.renderer=b,this.count=C.count,this.shadow=c,this.dynamic=D,this.instances=S||[{matrix:n.identity(),info:[0,0,0,0]}];let g=C.data.slice(0,C.used),L=new _e;for(let q=0;q<g.length;q+=20)L.setRGB(g[q+8],g[q+9],g[q+10],an),g[q+8]=L.r,g[q+9]=L.g,g[q+10]=L.b;let k=new Rn,K=new Qs(g,20);for(let[q,nt,H]of[["position",3,0],["normal",3,3],["uv",2,6],["color",3,8],["festaAO",1,11],["festaSurface",4,12],["festaAnimation",4,16]])k.setAttribute(q,new tr(K,nt,H));this.info=new Hi(new Float32Array(this.instances.length*4),4),this.info.setUsage(wo),k.setAttribute("festaInfo",this.info),this.object=new sr(k,b.surfaceMaterial,this.instances.length),this.object.name=v,this.object.castShadow=c,this.object.receiveShadow=!0,this.object.frustumCulled=!1,this.object.customDepthMaterial=b.depthMaterial,this.object.instanceMatrix.setUsage(wo),this.matrix=new Ne,this.updateInstances(),b.scene.add(this.object),b.meshes.push(this),C.data=null}get visible(){return this.object.visible}set visible(b){this.object.visible=b}updateInstances(){this.instances.forEach((b,C)=>{this.object.setMatrixAt(C,this.matrix.fromArray(b.matrix)),this.info.set(b.info||[0,0,0,0],C*4)}),this.object.instanceMatrix.needsUpdate=!0,this.info.needsUpdate=!0}dispose(){this.renderer.scene.remove(this.object),this.object.geometry.dispose(),this.object.dispose(),this.renderer.meshes=this.renderer.meshes.filter(b=>b!==this)}}class T{constructor(b,C="standard"){this.canvas=b,this.engine=new Ro({canvas:b,alpha:!1,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0}),this.gl=this.engine.getContext(),this.engine.outputColorSpace=an,this.engine.toneMapping=mr,this.engine.shadowMap.enabled=!0,this.engine.shadowMap.type=Wi,this.engine.shadowMap.autoUpdate=!1,this.scene=new $s,this.scene.fog=new Js("#c5d3d8",110,420),this.camera={eye:[0,1.68,20],target:[0,1.68,0],fov:66*Math.PI/180,near:.065,far:700},this.threeCamera=new un,this.meshes=[],this.quality=C,this.time=0,this.exposure=1.12,this.sun=e.norm([-.38,.79,.48]),this.sunColor=[1,.94,.81],this.sunPower=3.7,this.timeUniform={value:0},this.atlasUniform={value:null},this.surfaceMaterial=w(new lr({color:16777215,vertexColors:!0,roughness:1,metalness:1,side:Ln,alphaTest:.4}),this),this.depthMaterial=w(new ws({depthPacking:Nl,side:Ln,alphaTest:.4}),this,!0),this.hemisphere=new ur("#c7e0f5","#817562",1.8),this.scene.add(this.hemisphere),this.sunLight=new fr(16777215,this.sunPower),this.sunLight.castShadow=!0,this.scene.add(this.sunLight,this.sunLight.target),this.stats={draws:0,triangles:0,fps:0},this.frameCount=0,this.fpsStamp=performance.now(),this.shadowAge=-1,this.shadowDirty=!0,this.targetSize=[0,0];let v=new Rn;v.setAttribute("position",new Mn([-1,-1,0,3,-1,0,-1,3,0],3)),this.skyUniforms={uInvVP:{value:new Ne},uEye:{value:new ht},uSun:{value:new ht},uTime:this.timeUniform};let c=new Ss({glslVersion:wr,vertexShader:m.replace("#version 300 es","").replace("0.,1.);","1.,1.);"),fragmentShader:x.replace("#version 300 es","").replace("frag=vec4(sky,1.);","sky=sky*1.12; sky=clamp((sky*(2.51*sky+.03))/(sky*(2.43*sky+.59)+.14),0.,1.);frag=vec4(pow(sky,vec3(1./2.2)),1.);"),uniforms:this.skyUniforms,depthWrite:!1,depthTest:!1});this.sky=new fn(v,c),this.sky.frustumCulled=!1,this.sky.renderOrder=-1e3,this.scene.add(this.sky),this.setQuality(C)}set atlas(b){this._atlas=b,this.atlasUniform.value=b.texture}get atlas(){return this._atlas}setQuality(b){this.quality=b,this.pixelRatio=b==="high"?Math.min(devicePixelRatio,1.75):b==="low"?.8:Math.min(devicePixelRatio,1.15),this.shadowSize=b==="high"?4096:b==="low"?1024:2048,this.engine.setPixelRatio(this.pixelRatio),this.createShadow(),this.resize()}createShadow(){let b=this.sunLight,C=b.shadow;b.position.set(-3+this.sun[0]*230,this.sun[1]*230,26+this.sun[2]*230),b.target.position.set(-3,0,26),b.color.setRGB(...this.sunColor),b.intensity=this.sunPower,Object.assign(C.camera,{left:-108,right:108,top:108,bottom:-108,near:1,far:500}),C.camera.updateProjectionMatrix(),C.bias=-15e-5,C.normalBias=216/this.shadowSize*1.35,C.mapSize.x!==this.shadowSize&&(C.map?.dispose(),C.map=null,C.mapSize.set(this.shadowSize,this.shadowSize)),this.shadowDirty=!0}resize(){let b=Math.max(1,this.canvas.clientWidth),C=Math.max(1,this.canvas.clientHeight);b===this.targetSize[0]&&C===this.targetSize[1]&&this.engine.getPixelRatio()===this.pixelRatio||(this.targetSize=[b,C],this.engine.setSize(b,C,!1))}render(b=0){if(!this.atlas)return;this.time=b,this.timeUniform.value=b,this.resize();let C=this.camera,v=this.threeCamera;v.position.fromArray(C.eye),v.up.set(0,1,0),v.lookAt(new ht(...C.target)),v.fov=C.fov*180/Math.PI,v.aspect=this.canvas.clientWidth/this.canvas.clientHeight,v.near=C.near,v.far=C.far,v.updateProjectionMatrix(),v.updateMatrixWorld(),this.vp=new Ne().multiplyMatrices(v.projectionMatrix,v.matrixWorldInverse).elements,this.invVp=new Ne().fromArray(this.vp).invert().elements,this.skyUniforms.uInvVP.value.fromArray(this.invVp),this.skyUniforms.uEye.value.fromArray(C.eye),this.skyUniforms.uSun.value.fromArray(this.sun),this.engine.toneMappingExposure=this.exposure,(this.shadowDirty||b-this.shadowAge>.45)&&(this.engine.shadowMap.needsUpdate=!0,this.shadowDirty=!1,this.shadowAge=b),this.engine.render(this.scene,v),this.stats.draws=this.engine.info.render.calls,this.stats.triangles=this.engine.info.render.triangles,this.frameCount++;let c=performance.now();c-this.fpsStamp>1500&&(this.stats.fps=Math.round(this.frameCount*1e3/(c-this.fpsStamp)),this.frameCount=0,this.fpsStamp=c)}project(b){if(!this.vp)return null;let C=this.vp,v=n.transform(C,b),c=C[3]*b[0]+C[7]*b[1]+C[11]*b[2]+C[15];return c<=0?null:{x:(v[0]/c*.5+.5)*this.canvas.clientWidth,y:(-v[1]/c*.5+.5)*this.canvas.clientHeight,z:v[2]/c}}groundPoint(b,C){if(!this.invVp)return null;let v=new pr;return v.setFromCamera(new Te(b/this.canvas.clientWidth*2-1,1-C/this.canvas.clientHeight*2),this.threeCamera),v.ray.intersectPlane(new Cn(new ht(0,1,0),0),new ht)?.toArray()||null}}return{V:e,M:n,Geometry:a,Mesh:I,Renderer:T,Atlas:h,material:l,color:s,rng:r,clamp:t,TAU:i,wrap:u}})();window.FestaScenery={height(i,t){let e=(h,u,m,x,f)=>{let _=Math.hypot((i-h)/m,(t-u)/x);return _<1?f*Math.pow(Math.cos(_*Math.PI/2),2):0},n=Math.max(e(112,-4,49,100,25),e(130,82,65,84,22),e(-113,7,41,40,20),e(-39,-103,63,47,15),e(8,-107,45,48,20),e(53,-105,49,46,16));if(i<60.8||i>=103.2||t<=15.08||t>=96.08)return n;let s=h=>(h=Math.max(0,Math.min(1,h)),h*h*(3-2*h)),r=s((t-15.08)/12)*(1-s((t-80.08)/16)),l=s((i-75.2)/28),a=3.7+(Math.max(n,3.7)-3.7)*l;return n+(a-n)*r},textures(i,t){let e=i.layers[3],n=e.getContext("2d"),s=e.width,r=t(8401),l=n.createImageData(s,s);for(let a=0;a<s;a++)for(let h=0;h<s;h++){let u=Math.sin(h/s*Math.PI*4+.5)*Math.cos(a/s*Math.PI*6)*1.7,m=(r()-.5)*9+u,x=(a*s+h)*4;l.data[x]=241+m,l.data[x+1]=239+m,l.data[x+2]=229+m,l.data[x+3]=255}n.putImageData(l,0,0);for(let a of[7,8]){let h=i.layers[a].getContext("2d"),u=t(301+a);h.clearRect(0,0,s,s);for(let m=0;m<1700;m++){let x=u()*Math.PI*2,f=Math.sqrt(u()),_=.5+Math.cos(x)*f*.45,w=.5+Math.sin(x)*f*.42;if(f>.84&&u()>.52)continue;let I=(1-w)*12+u()*17,T=a===7?76+u()*30:18+u()*24;h.fillStyle=`hsl(${T},${a===7?24+u()*22:38+u()*20}%,${16+I}%)`,h.beginPath(),h.ellipse(_*s,w*s,3+u()*7,2+u()*4,u()*6.28,0,6.28),h.fill()}}return i.add("Window reflection",(a,h)=>{let u=a.createLinearGradient(0,0,0,h);u.addColorStop(0,"#9baeb3"),u.addColorStop(.46,"#667d81"),u.addColorStop(.49,"#536562"),u.addColorStop(1,"#364743"),a.fillStyle=u,a.fillRect(0,0,h,h);let m=t(721);for(let x=0;x<150;x++){let f=m()*h,_=h*(.48+m()*.5);a.fillStyle=`rgba(31,48,35,${.025+m()*.1})`,a.beginPath(),a.ellipse(f,_,5+m()*29,3+m()*16,0,0,6.28),a.fill()}a.fillStyle="rgba(218,228,226,.10)",a.fillRect(h*.23,0,h*.03,h),a.fillRect(h*.75,0,h*.018,h)})},build({details:i,green:t,distant:e,signGeo:n,childSign:s,p:r,m:l,mat:a,M:h,rng:u,TAU:m,ga:x,gb:f,gc:_,gw:w,gd:I,gymRise:T=.45}){let d=u(70031),b=(P,X)=>P+(X-P)*d(),C=a("#dcdccf",3,.88),v=a("#c7cbc3",3,.87),c=r(425.28,478),S=r(470,478),D=5.25,g=3.25,L=x[0]-1.2,k=2.4,K=S[1]+1.2,q=f[1]+1.6,nt=(P,X,it=1.05)=>{i.cylinder([P[0],P[1]+it,P[2]],[X[0],X[1]+it,X[2]],.028,.028,C,7);let y=Math.max(1,Math.ceil(Math.hypot(X[0]-P[0],X[2]-P[2])/.19));for(let B=0;B<=y;B++){let U=B/y,$=P[0]+(X[0]-P[0])*U,J=P[1]+(X[1]-P[1])*U,bt=P[2]+(X[2]-P[2])*U;i.cylinder([$,J,bt],[$,J+it,bt],.016,.016,C,6)}},H=(P,X,it,y,B)=>i.box((P+X)/2,B-.14,(it+y)/2,X-P,.28,y-it,C);H(c[0],x[0],S[1]-1.2,K,D),nt([c[0],D,S[1]-1.2],[x[0],D,S[1]-1.2]),nt([c[0],D,K],[x[0]-k,D,K]);for(let P of[c[0]+.22,x[0]-2.65])i.box(P,D/2-.14,S[1],.38,D-.28,.42,C);let tt=12,pt=(q-K)/tt,ut=(D-g)/tt;for(let P=0;P<tt;P++){let X=K+P*pt,it=X+pt,y=D-P*ut;i.box(L,y-ut/2-.08,(X+it)/2,k,ut+.16,pt+.015,C)}for(let P of[x[0]-k,x[0]])i.quad([P,D-.28,K],[P,g-.28,q],[P,g-.48,q],[P,D-.48,K],C),nt([P,D,K],[P,g,q]);H(x[0]-k,f[0],f[1],q+1.3,g),nt([x[0]-k,g,q+1.3],[_[0]+4.3,g,q+1.3]),nt([x[0]-k,g,q],[x[0]-k,g,q+1.3]);for(let P of[x[0]-k+.25,x[0]+2.2,_[0]+4.4,f[0]-.25])i.box(P,(g-.28)/2,q+.99,.42,g-.28,.45,C);i.box((_[0]+4.3+f[0])/2,g+.46,q+1.17,f[0]-_[0]-4.3,.92,.22,C);let vt=a("#778885",0,.48,.08),dt=a("#c3c5b9",0,.63,.18);for(let P of[-6.8,-2.3,2.3,6.8])i.box(_[0]+P,6,f[1]+.2,1.35,2.4,.09,dt),i.box(_[0]+P,5.96,f[1]+.26,1.21,2.22,.03,vt),i.box(_[0]+P,6.75,f[1]+.29,1.22,.67,.05,C),i.box(_[0]+P,5.52,f[1]+.3,1.22,.045,.04,dt);for(let P of[x[0]+2.7,f[0]-3.4])i.box(P,1.75,f[1]+.21,1.42,1.45,.08,dt),i.box(P,1.75,f[1]+.26,1.28,1.31,.035,vt),i.box(P,1.75,f[1]+.3,.045,1.31,.05,dt),i.box(P,1.01,f[1]+.33,1.55,.08,.22,C);let gt=x[0]+w*.38,st=f[1]+.27;i.box(gt,1.54,st,4.5,2.76,.08,a("#27332f",0,.91));for(let P=0;P<4;P++){let X=gt+(P-1.5)*1.1;i.box(X,1.45,st+.055,1.04,2.35,.035,vt),i.box(X-.55,1.54,st+.09,.055,2.76,.055,dt),i.box(X,1.06,st+.09,1.1,.045,.06,dt),i.box(X,2.49,st+.09,1.1,.045,.06,dt),i.box(X+(P%2?-.42:.42),1.3,st+.14,.03,.3,.05,dt)}i.box(gt+2.2,1.54,st+.09,.055,2.76,.055,dt),i.box(gt,2.91,st+.09,4.5,.06,.06,dt),i.box(gt,.15,f[1]+1.75,5.6,.3,3,C);for(let P=0;P<3;P++)i.box(gt,.025+P*.05,f[1]+4.06-P*.38,5.6,.05+P*.1,.4,C);let N=a("#83b4c2",0,.54,.12);for(let[P,X]of[[335,344],[421,433],[468,484]]){let it=r(470,P)[1],y=r(470,X)[1],B=(it+y)/2,U=y-it;for(let $=0;$<3;$++){let J=($+1)*T/3;i.box(x[0]-1.38+$*.46,J/2,B,.48,J,U+.24,C)}i.box(x[0]-.11,T-.04,B,.54,.08,U+.24,C);for(let $ of[it+.12,y-.12])i.box(x[0]-.76,T+1.12,$,1.32,2.24,.075,N),i.box(x[0]-.76,T+2.25,$,1.36,.045,.09,dt)}let Vt=[[303,334],[345,420],[434,467],[485,503]];for(let P of[-1,1])for(let[X,it]of Vt){let y=r(470,X)[1]+.15,B=r(470,it)[1]-.15,U=Math.max(1,Math.ceil((B-y)/5.4));for(let $=0;$<U;$++){let J=y+(B-y)*$/U+.18,bt=y+(B-y)*($+1)/U-.18,rt=_[0]+P*(w/2+.26),Et=.56,ee=4.04;for(let pe of[!1,!0]){let St=pe?ee:Et,Yt=pe?Et:ee,ne=Yt-St,Fe=bt-J,Pe=Math.hypot(ne,Fe),Je=-Fe/Pe*.065,on=ne/Pe*.065;i.quad([rt,St+Je,J+on],[rt,St-Je,J-on],[rt,Yt-Je,bt-on],[rt,Yt+Je,bt+on],C,Pe,.13);for(let[Zn,zn]of[[St,J],[Yt,bt]]){i.box(rt,Zn,zn,.045,.25,.25,C);for(let ai of[-.065,.065])i.cylinder([rt+P*.022,Zn,zn+ai],[rt+P*.04,Zn,zn+ai],.017,.017,a("#abae9e",0,.65,.1),6)}}}}for(let P of[-1,1])for(let[X,it]of Vt){let y=_[0]+P*(w/2+.185),B=r(470,X)[1],U=r(470,it)[1];for(let $=B+.8;$<U;$+=2.65)i.box(y,2.12,$,.012,3.78,.014,a("#b9baae",0,.96))}for(let P of[-1,1]){let X=_[0]+P*(w/2+.31);i.cylinder([X,8.66,x[1]],[X,8.66,f[1]],.075,.075,C,10);for(let it of[x[1]+.32,x[1]+16.5,f[1]-.35])i.cylinder([X,.25,it],[X,8.66,it],.045,.045,C,8);for(let[it,y]of Vt){let B=r(470,it)[1],U=r(470,y)[1];i.box(X-P*.14,.19,(B+U)/2,.08,.38,U-B,a("#94958b",3,.96))}}let ge=(P,X,it)=>P+it>x[0]&&P-it<f[0]&&X+it>x[1]&&X-it<f[1];function Gt(P,X,it,y,B=1,U=82,$=!1){if(P>55&&P<80&&X>26&&X<82)return;let J=window.FestaScenery.height(P,X);if(P<-52&&P>-88&&X<-12&&X>-70&&(it=Math.min(it,6.2)),P>-74&&P<-58&&X>-11&&X<10)return;let bt=u(y);for(let rt=0;rt<U;rt++){let Et=bt()*m,ee=Math.sqrt(bt())*it*.46*B,pe=it*(.13+bt()*.77)-ee*.09,St=P+Math.cos(Et)*ee,Yt=X+Math.sin(Et)*ee,ne=it*(.21+bt()*.14),Fe=bt()*m;if(ge(St,Yt,ne*.71))continue;let Pe=$?a(rt%4?"#a0704d":"#855841",8,.98,0,0,.92):a(rt%7===0?"#879c75":rt%3?"#526b48":"#344f39",7,.98,0,0,.92);t.scope(h.compose(St,J+pe,Yt,Fe),()=>{t.quad([-ne/2,-ne/2,0],[-ne/2,ne/2,0],[ne/2,ne/2,0],[ne/2,-ne/2,0],Pe),t.quad([-ne/2,0,-ne/2],[-ne/2,0,ne/2],[ne/2,0,ne/2],[ne/2,0,-ne/2],Pe)})}for(let rt=0;rt<12;rt++){let Et=rt*m/12,ee=P+Math.cos(Et)*it*.25*B,pe=X+Math.sin(Et)*it*.25*B,St=it*(.25+bt()*.08),Yt=$?a("#75523b",8,.98):a(rt%3?"#3c5a40":"#60734b",7,.98);ge(ee,pe,St*.71)||t.scope(h.compose(ee,J+it*.21,pe,Et),()=>t.quad([-St/2,-St/2,0],[-St/2,St/2,0],[St/2,St/2,0],[St/2,-St/2,0],Yt))}}let ot=f[1]+3.2,_t=a("#94705a",3,.98),Mt=a("#4c4835",1,1),Lt=u(2701);for(let[P,X,it]of[[x[0]+3,4.6,2.9],[f[0]-4.7,8.4,3.6]]){i.box(P,.24,ot,X,.48,2.1,_t),i.plane(P,.486,ot,X-.35,1.7,Mt);for(let y=P-X/2+.2;y<P+X/2;y+=.42)for(let B of[.12,.35])i.box(y+(B>.2?.2:0),B,ot+1.055,.012,.2,.015,a("#c3ac8a"));for(let y=0;y<Math.round(X*36);y++){let B=P+(Lt()-.5)*(X-.6),U=.5+Lt()*it,$=ot+(Lt()-.5)*1.4,J=.52+Lt()*.4,bt=a(y%5?"#6b835a":"#879669",7,1);t.scope(h.compose(B,U,$,Lt()*m),()=>{t.quad([-J/2,-J/2,0],[-J/2,J/2,0],[J/2,J/2,0],[J/2,-J/2,0],bt),t.quad([-J/2,0,-J/2],[-J/2,0,J/2],[J/2,0,J/2],[J/2,0,-J/2],bt)})}for(let y=P-X/2+.3;y<P+X/2;y+=.61){let B=ot+1.4;i.box(y,.13,B,.43,.26,.33,a("#a88767",3,.94));for(let U=0;U<3;U++)i.sphere(y+(U-1)*.11,.3,B,.095,.11,.11,a(U%2?"#989b62":"#557549"),8,5)}}let Wt=Number((f[0]+3.6).toFixed(2)),Dt=Number((f[1]-20).toFixed(2)),$t=Number((f[1]+33).toFixed(2)),ie=3.6,fe=a("#92968a",3,.99),oe=a("#b0b3a6",3,.94);i.quad([Wt-.35,0,Dt],[Wt-.35,0,$t],[Wt,ie,$t],[Wt,ie,Dt],fe,18,3),i.box(Wt+.08,ie+.08,(Dt+$t)/2,.64,.16,$t-Dt,oe);for(let P=Dt+.3;P<$t;P+=2.2)i.cylinder([Wt+.1,ie+.12,P],[Wt+.1,ie+1.16,P],.022,.022,dt,6),i.box(Wt-.28,.65,P,.025,.1,.1,a("#454d43"));for(let P of[ie+.3,ie+1.12])i.cylinder([Wt+.1,P,Dt],[Wt+.1,P,$t],.022,.022,dt,6);for(let P=Dt;P<$t;P+=5.4)i.cylinder([Wt-.34,.05,P],[Wt-.01,ie-.02,P],.012,.012,a("#777e72"),5);{let P=Wt+6.3,X=f[1]+1.4,it=8.8,y=11,B=6.6;e.box(P,ie+B/2,X,it,B,y,a("#d8d2be",3,.96));let U=a("#6f6860",10,.9),$=ie+B;for(let J of[-1,1])e.quad([P,$+1.7,X-y/2-.4],[P,$+1.7,X+y/2+.4],[P+J*(it/2+.4),$,X+y/2+.4],[P+J*(it/2+.4),$,X-y/2-.4],U,3,4);for(let J of[X-y/2,X+y/2])e.tri([P-it/2,$,J],[P,$+1.7,J],[P+it/2,$,J],C);for(let J of[ie+1.65,ie+4.8])for(let bt of[-3.6,0,3.6])i.box(P-it/2-.025,J,X+bt,.05,1.28,1.4,a("#5d625a")),i.box(P-it/2-.06,J,X+bt,.035,1.1,1.22,vt),i.box(P-it/2-.087,J,X+bt,.04,1.12,.035,dt)}let ue=window.FestaScenery.height,le=[...new Set([...Array.from({length:89},(P,X)=>-156+X*4),60.8,75.2,103.2])].sort((P,X)=>P-X),Ae=[...new Set([...Array.from({length:72},(P,X)=>-112+X*4),15.08,Dt,$t,96.08])].sort((P,X)=>P-X);for(let P=0;P<le.length-1;P++)for(let X=0;X<Ae.length-1;X++){let it=le[P],y=Ae[X],B=le[P+1],U=Ae[X+1];if(it<Wt&&B===Wt&&y>=Dt&&U<=$t)continue;let $=[[it,y],[it,U],[B,U],[B,y]].map(([rt,Et])=>[rt,ue(rt,Et)-.1,Et]);if($.every(rt=>rt[1]<0))continue;let J=a("#ffffff",2,.98),bt=([rt,Et,ee])=>{let pe=rt===Wt&&ee>=Dt&&ee<=$t?2*(ue(rt,ee)-ue(rt+.1,ee)):ue(rt-.1,ee)-ue(rt+.1,ee),St=ue(rt,ee-.1)-ue(rt,ee+.1),Yt=Math.hypot(pe,.2,St);return[pe/Yt,.2/Yt,St/Yt]};for(let rt of[[0,1,2],[0,2,3]])e.tri(...rt.map(Et=>$[Et]),J,rt.map(Et=>[($[Et][0]+550)*460/1100,($[Et][2]+550)*460/1100]),rt.map(Et=>bt($[Et])))}for(let P=-149;P<188;P+=6)for(let X=-99;X<162;X+=6){if(ue(P,X)<2.3)continue;let it=u(Math.round((P+200)*800+X+200));Gt(P+(it()-.5)*2,X+(it()-.5)*2,4.8+it()*2.1,Math.round((P+200)*801+X+201),1.5,30)}let ve=a("#7a895a",7,.98),We=a("#9ca469",7,.98),xe=a("#625c46",1,1);function Ie(P,X,it,y,B,U){let $=u(U);for(let J=0;J<Math.ceil(it*B*24);J++){let bt=$()*m,rt=Math.sqrt($()),Et=P+Math.cos(bt)*it*.48*rt,ee=X+Math.sin(bt)*B*.48*rt,pe=.12+y*(.2+.8*Math.sqrt(1-rt*rt))*(.72+$()*.28),St=.24+$()*.22;t.scope(h.compose(Et,pe,ee,$()*m),()=>{t.quad([-St/2,-St/2,0],[-St/2,St/2,0],[St/2,St/2,0],[St/2,-St/2,0],J%5?ve:We),t.quad([-St/2,0,-St/2],[-St/2,0,St/2],[St/2,0,St/2],[St/2,0,-St/2],ve)})}}for(let[P,X,it,y,B]of[[135,429,5.4,.8,1.15],[158,429,3.6,.65,1.1],[177,429,2.3,.46,1],[279,430,4.1,.58,.85]]){let U=r(P,X);i.plane(U[0],.035,U[1],it,B,xe);for(let $ of[-1,1])i.box(U[0],.09,U[1]+$*B/2,it,.18,.1,a("#a3a295",3,.97));for(let $ of[-1,1])i.box(U[0]+$*it/2,.09,U[1],.1,.18,B,a("#a3a295",3,.97));Ie(U[0],U[1],it-.15,y,B-.12,P*101)}for(let[P,X]of[[257,11],[287,7]])for(let it=0;it<X;it++){let y=r(P+it*2.2,434),B=.39,U=.26,$=a(it%3?"#d1c6ac":"#987554",3,.95);i.box(y[0],U/2,y[1],B,U,.28,$),i.plane(y[0],U+.008,y[1],B-.045,.23,xe);for(let J of[-1,1])i.box(y[0],U-.01,y[1]+J*.14,B+.035,.055,.035,$);for(let J=0;J<3;J++){let bt=y[0]+(J-1)*.1;i.cylinder([bt,U,y[1]],[bt,U+.16+it%3*.025,y[1]],.007,.004,a("#657352"),5),t.scope(h.compose(bt,U+.14,y[1],it+J),()=>{t.quad([-.09,-.03,0],[-.06,.11,0],[.06,.11,0],[.09,-.03,0],ve),t.quad([0,-.03,-.09],[0,.11,-.06],[0,.11,.06],[0,-.03,.09],We)})}}for(let[P,X,it,y]of[[54,375,3.1,1.8],[69,375,2.8,1.8]]){let B=r(P,X),U=2.05,$=a("#b7b9af",3,.95),J=a("#8f978e",0,.8,.15);i.box(B[0],U/2,B[1],it,U,y,$),i.box(B[0],U+.055,B[1],it+.18,.11,y+.16,J);for(let bt of[-1,1])i.box(B[0]+bt*it*.23,U*.48,B[1]-y/2-.025,it*.43,U*.9,.035,a("#9da79e",3,.92)),i.box(B[0]+bt*.075,1.04,B[1]-y/2-.06,.025,.19,.045,J)}Ie(r(60,367)[0],r(60,367)[1],3.2,1.15,1.3,92160);let Q=-66,te=-1,Me=11.2,O=15.6,M=6.3,z=a("#d8d8c9",3,.96);e.box(Q,M/2,te,Me,M,O,z);let Y=Q+Me/2;e.quad([Q-Me/2-.35,M+.25,te-O/2-.35],[Q-Me/2-.35,M+.25,te+O/2+.35],[Y+.35,M+.05,te+O/2+.35],[Y+.35,M+.05,te-O/2-.35],a("#747d7a",10,.85),4,4),e.box(Y+.2,M,te,.12,.19,O+.7,z);for(let P of[-5.7,-2.7,0,3,5.7]){let X=P===0?.65:1.45;i.box(Y+.03,4.63,te+P,.055,1.38,X,dt),i.box(Y+.064,4.63,te+P,.02,1.24,X-.13,vt),i.box(Y+.086,4.63,te+P,.03,1.26,.035,dt)}for(let P of[-4.5,4.5])i.box(Y+.08,1.28,te+P,.12,2.5,1.37,a("#adb5ac",3,.85)),i.box(Y+.15,1.78,te+P,.035,.77,.92,vt),i.box(Y+.53,2.65,te+P,1.1,.12,2.05,a("#8e9994",10,.9)),i.box(Y+.85,.1,te+P,1.5,.2,2.1,C),i.sphere(Y+.14,2.77,te+P-1.3,.055,.11,.11,a("#eeeadd"),10,6);i.quad([Y,.03,te-7.5],[Y+.95,.03,te-7.5],[Y+.95,.2,te+6],[Y,.2,te+6],C,1,6),nt([Y+1.02,.03,te-7.5],[Y+1.02,.2,te+6],.83),n&&s!==void 0&&n.scope(h.compose(Y+.18,0,te,Math.PI/2),()=>n.sign(0,2.65,0,5.1,.95,s));let W=-83,yt=-22,wt=ue(W,yt),mt=29,xt=a("#a7aca5",0,.68,.25);for(let P=0;P<8;P++){let X=wt+P*mt/8,it=wt+(P+1)*mt/8,y=2.65-P*.235,B=y-.235;for(let U of[-1,1])for(let $ of[-1,1])e.cylinder([W+U*y,X,yt+$*y],[W+U*B,it,yt+$*B],.07,.05,xt,6),e.cylinder([W+U*y,X,yt+$*y],[W-U*B,it,yt+$*B],.026,.026,xt,5),e.cylinder([W+U*y,X,yt+$*y],[W+U*B,it,yt-$*B],.026,.026,xt,5)}for(let P of[wt+20.5,wt+24.8,wt+29]){e.cylinder([W-5,P,yt],[W+5,P,yt],.075,.075,xt,6);for(let X of[-4.7,4.7]){e.cylinder([W+X,P,yt],[W+X,P-.9,yt],.1,.1,a("#a6ada0"),8);let it=r(322,56),y=[];for(let B=0;B<=28;B++){let U=B/28;y.push([W+X+(it[0]-W)*U,P-.9+(26-(wt+29))*U-3.1*Math.sin(U*Math.PI),yt+(it[1]-yt)*U])}e.tube(y,.028,a("#626963"),5)}}let It=[[103,69],[131,47],[202,40],[331,44],[479,94],[574,146],[583,632],[592,679],[470,739],[101,780],[71,735],[21,525],[30,339],[57,250],[63,145]],Xt=0;for(let P=0;P<It.length-1;P++){if(P===7||P===8||P===9)continue;let X=r(...It[P]),it=r(...It[P+1]),y=it[0]-X[0],B=it[1]-X[1],U=Math.hypot(y,B),$=B/U,J=-y/U;for(let bt=2;bt<U;bt+=5.7){let rt=bt/U,Et=X[0]+y*rt,ee=X[1]+B*rt;Gt(Et+$*7.6,ee+J*7.6,b(7,11.3),1e4+Xt++),(P<5||P>10)&&Gt(Et+$*14.6+y/U*2.4,ee+J*14.6+B/U*2.4,b(8.2,13),1e4+Xt++,1.13),(P<6||P>10)&&Gt(Et+$*2,ee+J*2,b(2.2,3.2),1e4+Xt++,1.8)}}e.scope(h.compose(-106,5,-41,Math.PI/2),()=>{let P=a("#c6c8bf",3,.92),X=a("#b4c2be",0,.76,.05),it=a("#46545a",0,.88),y=a("#53696d",0,.37,.08),B=69,U=12,$=5,J=2.85;e.box(0,-2.5,0,B+1,5,U+2,a("#8a8c7b",3,.98)),e.box(0,$*J/2,0,B,$*J,U,P);for(let bt=0;bt<$;bt++){let rt=bt*J;e.box(0,rt+1.4,U/2+.07,B-.6,2.42,.12,it),e.box(0,rt+.1,U/2+1.02,B+.7,.2,2.15,P),e.box(0,rt+.79,U/2+1.98,B,.98,.1,X),e.box(0,rt+1.33,U/2+1.99,B,.06,.13,a("#d3d9d5",0,.45,.28));for(let Et=-B/2+1.6;Et<B/2;Et+=3.45)e.box(Et,rt+1.4,U/2+.16,2.1,2.25,.03,y),e.box(Et+.99,rt+1.4,U/2+.18,.035,2.25,.03,l.metal),e.box(Et+1.52,rt+1.4,U/2+1.06,.1,2.58,1.85,P)}for(let bt of[-B/2,-B*.18,B*.18,B/2])e.box(bt,$*J/2,U/2+1.08,.33,$*J,2.3,P);e.box(0,$*J+.13,0,B+1.2,.26,U+4.2,P)});for(let P=0;P<13;P++){let X=-74+P*5.6,it=-84+P%3*2.7;Gt(it,X,7.5+P%4*.9,32140+P,1.1,58,P===2||P===5||P===9)}let At=a("#338db0",0,.63,.08),Ct=a("#ac4c39",0,.68),zt=a("#dbb548",0,.6),Kt=r(411,88);i.scope(h.compose(Kt[0],0,Kt[1],.18),()=>{for(let P of[-.55,.55])for(let X of[-.55,.55])i.cylinder([P,.02,X],[P,3.15,X],.045,.045,At,8);i.box(0,1.94,0,1.22,.09,1.2,a("#899892",0,.7));for(let P of[-.61,.61])i.cylinder([P,2,-.55],[P,3.03,-.55],.035,.035,Ct,8),i.cylinder([P,3.03,-.55],[P,3.03,.55],.035,.035,Ct,8),i.quad([P*.72,1.96,.55],[P*.72,.16,3.45],[P*.72,.34,3.47],[P*.72,2.16,.55],zt,3,1);i.quad([-.44,1.97,.55],[.44,1.97,.55],[.44,.16,3.45],[-.44,.16,3.45],zt,1,3);for(let P=.28;P<1.97;P+=.27)i.cylinder([-.47,P,-.69],[.47,P,-.69],.026,.026,l.metal,7)});let re=r(483,126);for(let P=0;P<5;P++){let X=re[0]+P*1.5,it=1+P*.27;for(let y of[-.65,.65])i.cylinder([X+y,0,re[1]],[X+y,it,re[1]],.032,.032,At,8);i.cylinder([X-.65,it,re[1]],[X+.65,it,re[1]],.028,.028,l.metal,8)}let Z=r(365,75);i.cylinder([Z[0],0,Z[1]],[Z[0],3.5,Z[1]],.075,.075,a("#aab4ad",0,.65,.2),10),i.box(Z[0],3.45,Z[1]+.18,1.8,1.05,.07,a("#e7e7da",3,.9)),i.box(Z[0],3.32,Z[1]+.23,.65,.49,.012,Ct),i.box(Z[0],3.32,Z[1]+.24,.58,.42,.012,a("#e7e7da"));let Pt=[];for(let P=0;P<=24;P++){let X=P/24*m;Pt.push([Z[0]+Math.sin(X)*.23,3.02,Z[1]+.56+Math.cos(X)*.23])}i.tube(Pt,.016,Ct,6)}};window.buildFestaWorld=async function(i,t=()=>{}){let{V:e,M:n,Geometry:s,Mesh:r,Atlas:l,material:a,color:h,rng:u,clamp:m,TAU:x}=FestaGL,f=FESTA_DATA,_=u(9212026),w=(o,p)=>o+(p-o)*_(),I=(o,p)=>[(o-320)*.22,(p-290)*.22],T=(o,p,E=0)=>{let A=I(o,p);return[A[0],E,A[1]]},d=new l(512),b=o=>new Promise((p,E)=>{let A=new Image;A.onload=()=>p(A),A.onerror=()=>E(new Error("内蔵テクスチャを読み込めません。")),A.src=o}),C=await b(FESTA_ASSETS.gravel),v=await b(FESTA_ASSETS.grass);t(.08,"地面と建物の素材を準備しています"),d.add("white",(o,p)=>{o.fillStyle="#fff",o.fillRect(0,0,p,p)});function c(o,p,E,A=.25){return d.add(o,(F,G)=>{F.drawImage(p,0,0,G,G);let V=F.getImageData(0,0,G,G),at=h(E);for(let et=0;et<V.data.length;et+=4){let Tt=V.data[et]/255,Nt=.82+Tt*A;for(let Ut=0;Ut<3;Ut++)V.data[et+Ut]=m(at[Ut]*255*Nt,0,255);V.data[et+3]=255}F.putImageData(V,0,0)})}c("soil",C,"#a19580",.32),c("grass",v,"#727b4d",.55),d.add("concrete",(o,p)=>{o.fillStyle="#efeee6",o.fillRect(0,0,p,p);let E=o.getImageData(0,0,p,p);for(let A=0;A<E.data.length;A+=4){let F=w(-12,6);for(let G=0;G<3;G++)E.data[A+G]+=F}o.putImageData(E,0,0),o.strokeStyle="rgba(119,119,107,.13)",o.lineWidth=1,o.beginPath(),o.moveTo(0,120),o.lineTo(p,120),o.stroke()}),c("asphalt",C,"#555754",.6),d.add("wood",(o,p)=>{o.fillStyle="#b78a57",o.fillRect(0,0,p,p);for(let E=0;E<8;E++){let A=E*64;o.fillStyle=`hsl(${31+w(-3,3)},${34+w(-5,5)}%,${55+w(-6,6)}%)`,o.fillRect(A,0,63,p);for(let G=0;G<35;G++){let V=A+w(1,62);o.strokeStyle=`rgba(73,44,18,${w(.04,.17)})`,o.lineWidth=w(.3,1.3),o.beginPath();for(let at=0;at<=p;at+=16)o.lineTo(V+Math.sin(at/72+G)*w(.2,1.4),at);o.stroke()}o.fillStyle="rgba(43,32,24,.20)",o.fillRect(A,0,1,p);let F=E%3*163;o.fillRect(A,F,64,1)}}),d.add("fabric",(o,p)=>{o.fillStyle="#f7f6f0",o.fillRect(0,0,p,p);for(let E=0;E<p;E+=3)o.strokeStyle=E%6?"rgba(98,99,84,.05)":"rgba(255,255,255,.3)",o.beginPath(),o.moveTo(E,0),o.lineTo(E,p),o.stroke(),o.beginPath(),o.moveTo(0,E),o.lineTo(p,E),o.stroke();o.strokeStyle="rgba(154,155,144,.2)",o.lineWidth=2,o.strokeRect(8,8,p-16,p-16)});function S(o=!1){d.add(o?"autumn":"leaf",(p,E)=>{p.clearRect(0,0,E,E);for(let A=0;A<220;A++){let F=w(0,x),G=Math.sqrt(_())*228,V=E/2+Math.cos(F)*G,at=E/2+Math.sin(F)*G;p.strokeStyle=o?"#6f6541":"#526445",p.lineWidth=1.8,p.beginPath(),p.moveTo(E/2,E*.7),p.quadraticCurveTo(E/2+(V-E/2)*.65,at+40,V,at),p.stroke();let et=o?w(12,59):w(72,110);p.fillStyle=`hsl(${et},${w(27,45)}%,${w(27,48)}%)`,p.beginPath(),p.ellipse(V,at,w(6,11),w(12,23),F+.5,0,x),p.fill(),p.strokeStyle="rgba(208,214,130,.3)",p.lineWidth=.7,p.beginPath(),p.moveTo(V-4,at-10),p.lineTo(V+4,at+10),p.stroke()}})}S(!1),S(!0),d.add("bark",(o,p)=>{o.fillStyle="#807565",o.fillRect(0,0,p,p);for(let E=0;E<650;E++){o.strokeStyle=`rgba(${Math.floor(w(30,70))},${Math.floor(w(25,60))},${Math.floor(w(20,50))},${w(.1,.6)})`,o.lineWidth=w(.5,5),o.beginPath();let A=w(0,p),F=w(0,p);o.moveTo(A,F),o.lineTo(A+w(-9,9),F+w(14,120)),o.stroke()}}),d.add("roof",(o,p)=>{o.fillStyle="#a6b2b3",o.fillRect(0,0,p,p);for(let E=0;E<p;E+=32)o.fillStyle="#7c8d91",o.fillRect(E,0,3,p),o.fillStyle="#c7cecd",o.fillRect(E+3,0,2,p)}),d.add("net",(o,p)=>{o.clearRect(0,0,p,p),o.strokeStyle="#b1b4a7",o.lineWidth=3;for(let E=-p;E<p*2;E+=64)o.beginPath(),o.moveTo(E,0),o.lineTo(E+p,p),o.stroke(),o.beginPath(),o.moveTo(E,p),o.lineTo(E+p,0),o.stroke()}),d.add("tire",(o,p)=>{o.fillStyle="#2b2b2a",o.fillRect(0,0,p,p),o.strokeStyle="#484948",o.lineWidth=5;for(let E=0;E<p;E+=27)o.beginPath(),o.moveTo(0,E),o.lineTo(p*.5,E+15),o.lineTo(p,E),o.stroke()}),d.add("cloth",(o,p)=>{o.fillStyle="#eeeadf",o.fillRect(0,0,p,p),o.fillStyle="rgba(83,117,120,.12)";for(let E=0;E<p;E+=40)o.fillRect(E,0,18,p),o.fillRect(0,E,p,18)});let D={F:"#a64c35",S:"#385e76",T:"#4e6c43",P:"#83503e",M:"#c39343",I:"#27595c"},g={};for(let o of[...f.records.filter(p=>!["unplaced","performer","unconfirmed","workshop"].includes(p.kind)),...f.locations])g[o.id]={banner:d.banner(o.id.startsWith("F-")||o.id.startsWith("S-")||o.id.startsWith("T-")?o.id:{HQ:"INFO",GYM:"STAGE",MOBILITY:"RIDE",MEET:"REST",OUTSTAGE:"STAGE",GATE_MAIN:"WELCOME",GATE_WEST:"WELCOME",WC:"WC",EAT2:"REST"}[o.id]||"FESTA",o.short,o.caption,D[o.category]),menu:d.sign(o.id+"-menu",o.short,o.detail,D[o.category],o.id+"   "+(o.status||"予定"))};let L=d.banner("西鎌倉","鎌倉市立西鎌倉小学校","つながりフェスタ＠にしかま2026","#415d60"),k=d.banner("2026","つながりフェスタ＠にしかま","つながる、みつかる、すきになる","#356064"),K=d.sign("走行エリア","モビリティー",`実走路の中へは入れません。
見学は柵の外側から。`,"#a74d38","車両実走路"),q=d.banner("常設舞台","壇上舞台　使用せず","配置図に基づく表示","#695a51"),nt=d.banner("P","みんなの舞台","体育館内・開始予定","#83533c"),H=d.add("schedule",(o,p)=>{o.fillStyle="#fff9ec",o.fillRect(0,0,p,p),o.fillStyle="#5b3e32",o.font="700 29px sans-serif",o.fillText("体育館内 開始予定",24,42),o.font="17px sans-serif",o.fillText("終了時刻は未確認　／　当日変更の可能性あり",24,70),f.schedule.forEach((E,A)=>{let F=112+A*36;o.fillStyle=A%2?"#ffffff":"#f2ebde",o.fillRect(14,F-24,484,34),o.fillStyle="#83533c",o.font="700 20px sans-serif",o.fillText(E.time,23,F),o.fillStyle="#263b38";let G=18;o.font=`${G}px sans-serif`;let V=E.name;for(;o.measureText(V).width>370&&G>10;)o.font=`${--G}px sans-serif`;o.fillText(V,100,F)})}),tt=d.add("Entrance panels",(o,p)=>{let E=u(451);o.fillStyle="#33363b",o.fillRect(0,0,p,p);for(let A=0;A<p;A+=5)for(let F=0;F<p;F+=12){let G=40+E()*25;o.fillStyle=`rgb(${G},${G+1},${G+5})`,o.fillRect(F+(A%10?6:0),A,10,3)}}),pt=FestaScenery.textures(d,u),ut=d.add("gym-floor",(o,p)=>{o.fillStyle="#aa7549",o.fillRect(0,0,p,p);for(let E=0;E<p;E+=32){o.fillStyle=`hsl(${27+w(-2,2)},${40+w(-5,5)}%,${48+w(-4,4)}%)`,o.fillRect(E+1,0,30,p),o.fillStyle="rgba(71,43,25,.24)",o.fillRect(E,0,1,p);let A=Math.floor(E/32)%4*128+32;o.fillRect(E+1,A,30,1);for(let F=0;F<9;F++)o.fillStyle=`rgba(84,51,27,${w(.025,.075)})`,o.fillRect(E+w(2,29),0,w(.35,1),p)}}),vt=d.add("gym-wall-wood",(o,p)=>{o.fillStyle="#a77b60",o.fillRect(0,0,p,p);for(let E=0;E<p;E+=26)o.fillStyle=`hsl(${24+w(-2,2)},${31+w(-4,4)}%,${47+w(-3,3)}%)`,o.fillRect(E+1,0,24,p),o.fillStyle="rgba(44,27,21,.27)",o.fillRect(E,0,1,p),o.fillStyle="rgba(227,180,128,.15)",o.fillRect(E+3,0,1,p)}),dt=d.add("gym-display-board",(o,p)=>{o.fillStyle="#ecebe5",o.fillRect(0,0,p,p),o.fillStyle="#aaa9a2";for(let E=12;E<p;E+=16)for(let A=12;A<p;A+=16)o.beginPath(),o.arc(A,E,1.4,0,x),o.fill()}),gt=o=>Object.assign(a(o,pt,.39,.06),{fit:!0}),st=new s,N=new s,Vt=new s,ge=new s,Gt=new s,ot={dirt:a("#fff",1,.97),grass:a("#fff",2,.98),wall:a("#dedccf",3,.93),base:a("#a3aaa5",3,.9),asphalt:a("#fff",4,.95),wood:a("#fff",5,.64),metal:a("#a6b0ac",0,.3,.65),whiteMetal:a("#f1f1e8",0,.42,.24),dark:a("#273036",0,.72),glass:gt("#c1cece"),black:a("#252928",0,.6),fabric:a("#f9f9f4",6,.85),bark:a("#fff",9,.94),leaf:a("#fff",7,.88),autumn:a("#fff",8,.9),tire:a("#fff",12,.93)},_t=[],Mt=[],Lt=[],Wt=[],Dt=[],$t=[];function ie(o,p,E,A,F="",G=0){_t.push({x:o,z:p,w:E,d:A,id:F,r:G})}function fe(o,p,E,A,F){let G=I(o,p),V=I(E,A);ie((G[0]+V[0])/2,(G[1]+V[1])/2,V[0]-G[0],V[1]-G[1],F)}let ue=[[103,69],[131,47],[202,40],[331,44],[479,94],[574,146],[583,632],[592,679],[470,739],[101,780],[71,735],[21,525],[30,339],[57,250],[63,145],[116,123],[95,101]].map(o=>I(...o));function le(o,p,E){let A=!1;for(let F=0,G=E.length-1;F<E.length;G=F++){let V=E[F],at=E[G];V[1]>p!=at[1]>p&&o<(at[0]-V[0])*(p-V[1])/(at[1]-V[1])+V[0]&&(A=!A)}return A}let Ae=0;function ve(o,p,E,A=3){let F=o.map(Ut=>[...Ut]);F.reduce((Ut,Ot,se)=>{let Ye=F[(se+1)%F.length];return Ut+Ot[0]*Ye[1]-Ye[0]*Ot[1]},0)<0&&F.reverse();let V=F.map((Ut,Ot)=>Ot),at=.007+Ae++*.011,et=(Ut,Ot,se)=>(Ot[0]-Ut[0])*(se[1]-Ut[1])-(Ot[1]-Ut[1])*(se[0]-Ut[0]),Tt=0;function Nt(Ut,Ot,se){p.tri([Ut[0],at,Ut[1]],[se[0],at,se[1]],[Ot[0],at,Ot[1]],E,[[Ut[0]/A,Ut[1]/A],[se[0]/A,se[1]/A],[Ot[0]/A,Ot[1]/A]])}for(;V.length>3&&Tt++<600;){let Ut=!1;for(let Ot=0;Ot<V.length;Ot++){let se=V[(Ot-1+V.length)%V.length],Ye=V[Ot],Ge=V[(Ot+1)%V.length],De=F[se],nn=F[Ye],Tn=F[Ge];if(!(et(De,nn,Tn)<1e-4)&&!V.some(Un=>Un!==se&&Un!==Ye&&Un!==Ge&&et(De,nn,F[Un])>=0&&et(nn,Tn,F[Un])>=0&&et(Tn,De,F[Un])>=0)){Nt(De,nn,Tn),V.splice(Ot,1),Ut=!0;break}}if(!Ut)break}V.length===3&&Nt(...V.map(Ut=>F[Ut]))}st.plane(0,-.1,0,1100,1100,ot.grass,460,460),ve(ue,st,ot.asphalt,.7);let We=[I(64,146),I(147,146),I(175,83),I(286,78),I(382,92),I(491,128),I(575,167),I(575,300),I(470,302),I(469,412),I(430,431),I(425,407),I(260,408),I(223,418),I(170,413),I(99,420),I(98,388),I(66,388),I(64,350)];ve(We,st,ot.dirt,1.35),t(.18,"配置図から校舎と会場を組み立てています");function xe(o,p,E,A,F=10.65,G="校舎",V=!0){let at=I(o,p),et=I(E,A),Tt=(at[0]+et[0])/2,Nt=(at[1]+et[1])/2,Ut=et[0]-at[0],Ot=et[1]-at[1];if(Wt.push({x:Tt,z:Nt,w:Ut,d:Ot,h:F,label:G}),ie(Tt,Nt,Ut+.18,Ot+.18,G),st.box(Tt,F/2,Nt,Ut,F,Ot,ot.wall),st.box(Tt,.24,Nt,Ut+.15,.48,Ot+.15,ot.base),st.box(Tt,F+.12,Nt,Ut+.55,.24,Ot+.55,a("#c6c3b6",0,.86)),!V)return;let se=F>12?4:F>9?3:2,Ye=(F-.35)/se;for(let Ge=0;Ge<4;Ge++){let De=Ge%2?Ot:Ut,nn=Ge%2?Ut:Ot;N.scope(n.compose(Tt,0,Nt,Ge*Math.PI/2),()=>{let Tn=Math.max(1,Math.floor((De-.9)/4.3)),Un=(De-.9)/Tn;for(let yn=0;yn<se;yn++){let Ui=1.62+yn*Ye,Ur=yn===0?1.8:1.16;N.box(0,yn*Ye+.45,nn/2+.015,De,.035,.026,a("#b4b3a7",0,.95));for(let Fr=0;Fr<Tn;Fr++){let Os=-De/2+.45+(Fr+.5)*Un,ji=Un*.84;N.box(Os,Ui,nn/2+.024,ji+.12,Ur+.12,.06,a("#aaa99f",0,.6,.25)),N.box(Os,Ui,nn/2+.06,ji,Ur,.025,gt((Fr+yn)%4===0?"#a9b8b8":"#c5cecb"));for(let Fo=1;Fo<4;Fo++)N.box(Os-ji/2+Fo*ji/4,Ui,nn/2+.085,.038,Ur,.032,ot.metal);N.box(Os,Ui-Ur/2-.035,nn/2+.11,ji+.17,.075,.17,a("#bdbdb3",0,.85)),yn===0&&N.box(Os,Ui+.2,nn/2+.087,ji,.037,.03,ot.metal)}}for(let yn=0;yn<=Tn;yn+=2){let Ui=-De/2+.45+yn*Un;N.box(Ui,F/2,nn/2+.085,.22,F,.17,ot.wall)}for(let yn of[-1,1])N.cylinder([yn*(De/2-.2),.35,nn/2+.19],[yn*(De/2-.2),F-.2,nn/2+.19],.045,.045,a("#a9aaa0",0,.75),8)})}}xe(95.4,436.56,329.52,489.72,13.5),xe(30.48,411.36,82.56,541.56,10.65),xe(67.32,389.4,95.4,436.56,10.65),xe(329.52,430.32,425.28,516.36,13.5),xe(307.92,489.72,329.52,516.36,7.2),xe(311.52,535.08,390.72,603.6,7.9,"昇降口",!1),xe(103.44,608.28,401.04,666.1,10.7);{let o=I(111,436.56);N.box(o[0],6.75,o[1]-.16,6.1,13.5,.32,ot.wall);for(let p of[3.2,6.5,9.8,13.4])N.box(o[0],p,o[1]-.36,6.55,.19,.47,ot.wall);N.box(o[0],1.3,o[1]-.34,4.7,2.4,.05,ot.glass),N.box(o[0],2.88,o[1]-1,6.4,.2,2,ot.wall)}{let o=I(238,436.56),p=a("#693f30",0,.78),E=a("#9e9f94",0,.72,.18);N.box(o[0],1.25,o[1]-.035,6.3,2.5,.08,p),N.box(o[0],2.8,o[1]-.7,8.8,.18,1.5,a("#724b3e",0,.8));for(let A of[-4.1,4.1])N.box(o[0]+A,1.4,o[1]-1.2,.23,2.8,.23,ot.wall);for(let A of[-2.75,-1.38,0,1.38,2.75])N.box(o[0]+A,1.32,o[1]-.095,.045,2.24,.07,E),N.box(o[0]+A,2.22,o[1]-.13,1.3,.055,.05,E);for(let A of[-1.1,1.1])N.box(o[0]+A,1.12,o[1]-.15,.05,.32,.06,E);N.box(o[0],.055,o[1]-1.45,9,.11,2.55,a("#aeada1",3,.95))}function Ie(o,p,E,A=0){N.scope(n.compose(o,p,E,A),()=>{N.cylinder([0,0,-.03],[0,0,.06],.48,.48,ot.whiteMetal,36),N.cylinder([0,0,.062],[0,0,.07],.43,.43,a("#efefdf"),36);for(let F=0;F<12;F++){let G=F/12*x;N.cylinder([Math.sin(G)*.34,Math.cos(G)*.34,.085],[Math.sin(G)*.38,Math.cos(G)*.38,.085],.01,.01,ot.dark,5)}N.cylinder([0,0,.095],[.07,.27,.095],.017,.017,ot.dark,6),N.cylinder([0,0,.1],[.27,-.1,.1],.013,.013,ot.dark,6)})}{let o=I(365,430.2);Ie(o[0],6.8,o[1]-.06,Math.PI)}{let o=I(391,566);N.scope(n.compose(o[0]+.06,0,o[1],Math.PI/2),()=>{let p=a("#e1e0d4",3,.92),E=a("#ffffff",tt,.95),A=2.1,F=.22,G=-.85;N.box(0,5.5,.93,14.4,4.5,2.34,p),N.box(-3.92,5.59,A+.045,5.35,3.05,.06,E),N.box(3.14,5.59,A+.045,6.91,3.05,.06,E),N.box(0,7.84,.96,14.7,.2,2.52,p),N.box(0,3.28,.94,14.4,.3,2.32,p),N.box(0,.16,1.18,14.5,.2,2.88,a("#aaa99e",3,.9)),N.box(0,1.65,F-.08,13.65,2.92,.06,a("#252e2c",0,.93));let V=a("#b4b9b4",0,.42,.38),at=a("#56665f",0,.3,.15);for(let et=0;et<10;et++){let Tt=-6.08+et*1.35;N.box(Tt,1.5,F,1.28,2.25,.035,at),N.box(Tt,2.85,F,1.28,.37,.035,a("#777e70",0,.36)),N.box(Tt-.66,1.65,F+.045,.045,2.9,.055,V);for(let Nt of[.38,1.18,2.64,3.06])N.box(Tt,Nt,F+.045,1.34,.045,.055,V);et%2===0&&(N.box(Tt+.46,1.2,F+.105,.025,.32,.035,V),N.box(Tt+.46,1.02,F+.075,.12,.025,.08,V))}N.box(6.74,1.65,F+.045,.045,2.9,.055,V);for(let et of[-6.91,G,6.91])N.box(et,1.71,A-.29,.58,3.08,.58,p),N.box(et,.23,A-.29,.67,.15,.67,a("#b7b7aa",3,.94));for(let et of[-6.9,6.9])N.box(et,1.74,1.08,.28,3.04,1.88,p);for(let et of[-5.25,-2.65,1.55,4.85])N.box(et,3.115,1.16,.38,.045,.26,a("#50534b")),N.box(et,3.086,1.16,.29,.017,.17,a("#e7e3c5",0,.6,0,.25));for(let et=0;et<3;et++)N.box(0,.03+et*.05,3.25-et*.38,14.7,.06+et*.1,.4,a("#a9a79b",3,.9));Ie(G,3.6,A+.08,0)})}{let o=I(204,420),p=a("#919b94",0,.58,.21),E=a("#a9aea5",0,.82);st.box(o[0],1.8,o[1],8.9,3.6,5.3,ot.wall),st.box(o[0],3.66,o[1],9.15,.18,5.55,a("#919b94",10)),ie(o[0],o[1],9,5.4,"用具庫");for(let A of[-1,1]){N.box(o[0]+A*2.12,1.58,o[1]-2.69,4.08,2.95,.07,E),N.box(o[0]+A*2.12,1.59,o[1]-2.75,4,.035,.055,p);for(let F=-1;F<=1;F++)N.box(o[0]+A*2.12+F*1.17,1.58,o[1]-2.75,.025,2.88,.045,p);N.box(o[0]+A*3.5,1.34,o[1]-2.79,.045,.26,.045,p)}N.box(o[0],3.16,o[1]-2.81,8.75,.22,.12,p);for(let A of[-3.9,0,3.9])N.cylinder([o[0]+A,3.58,o[1]-2.64],[o[0]+A,.08,o[1]-2.64],.045,.045,p,8);N.box(o[0],1.3,o[1]+2.68,3,2.6,.08,a("#79857f",0,.46,.35))}function Q(o,p,E=0){let A=I(o,p);N.scope(n.compose(A[0],0,A[1],E),()=>{N.box(0,.63,0,2.9,.33,.52,ot.base),N.box(0,.83,0,2.96,.08,.6,a("#c3cdca",0,.23,.7));for(let F=0;F<6;F++){let G=-1.22+F*.49;N.box(G,.84,0,.35,.015,.33,a("#697e81",0,.18,.65)),N.cylinder([G,.81,-.19],[G,1.15,-.19],.018,.018,ot.metal,7),N.cylinder([G,1.15,-.19],[G,1.15,.02],.017,.017,ot.metal,7)}for(let F of[-1.1,1.1])N.box(F,.35,0,.13,.7,.34,ot.base)})}Q(251,414),Q(42,400);{let o=I(401,538),p=a("#ac7049",0,.94);N.cylinder([o[0],.12,o[1]],[o[0],.75,o[1]],1.25,1.25,p,36),N.cylinder([o[0],.75,o[1]],[o[0],.82,o[1]],1.29,1.29,a("#ada99a"),36),N.cylinder([o[0],.825,o[1]],[o[0],.84,o[1]],1.1,1.1,ot.base,36);for(let E=0;E<24;E++){let A=E/24*x;N.cylinder([o[0]+1.252*Math.sin(A),.12,o[1]+1.252*Math.cos(A)],[o[0]+1.252*Math.sin(A),.74,o[1]+1.252*Math.cos(A)],.009,.009,a("#d4b99a"),5)}for(let E of[-.48,.48])N.cylinder([o[0]+E,.84,o[1]],[o[0]+E,1.18,o[1]],.025,.025,ot.metal,7),N.cylinder([o[0]+E,1.18,o[1]],[o[0]+E+.16,1.18,o[1]],.025,.025,ot.metal,7)}let te=470,Me=580,O=302,M=504,z=I(te,O),Y=I(Me,M),W=[(z[0]+Y[0])/2,(z[1]+Y[1])/2],yt=Y[0]-z[0],wt=Y[1]-z[1],mt=I(500,468)[1],xt=.45,It=mt-z[1],Xt=(z[1]+mt)/2;st.box(W[0],xt/2,W[1],yt,xt,wt,a("#b7b9b3",3,.94)),st.plane(W[0],xt+.045,Xt,yt,It,a("#ffffff",ut,.4),yt/4,It/4),st.plane(W[0],xt+.044,(mt+Y[1])/2,yt,Y[1]-mt,a("#c9c5b9",0,.88),yt/4,2),Wt.push({x:W[0],z:W[1],w:yt,d:wt,h:10,label:"体育館",gym:!0}),st.box(Y[0],2.1,W[1],.35,4.2,wt,ot.wall),st.box(Y[0],8.38,W[1],.35,.64,wt,ot.wall),ie(Y[0],W[1],.4,wt,"体育館東壁"),st.box(W[0],4.35,z[1],yt,8.7,.35,ot.wall),ie(W[0],z[1],yt,.4,"体育館壁");let At=z[0]+yt*.38,Ct=2.25,zt=[[z[0],At-Ct],[At+Ct,Y[0]]];for(let[o,p]of zt)st.box((o+p)/2,2.1,Y[1],p-o,4.2,.35,ot.wall);st.box(At,3.6,Y[1],Ct*2,1.2,.35,ot.wall),st.box(W[0],6.45,Y[1],yt,4.5,.35,ot.wall),ie(W[0],Y[1],yt,.4,"体育館壁");for(let[o,p]of zt)st.box((o+p)/2,2.1,mt,p-o,4.2,.35,ot.wall),ie((o+p)/2,mt,p-o,.4,"体育館床の出口側の壁");st.box(At,3.6,mt,Ct*2,1.2,.35,ot.wall),st.box(W[0],6.45,mt,yt,4.5,.35,ot.wall),ie(At,mt,Ct*2,.4,"体育館の閉じた扉");let Kt=[[335,344],[421,433],[468,484]],re=[[302,335],[344,421],[433,468],[484,504]];for(let[o,p]of re){let E=I(te,o),A=I(te,p);st.box(z[0],2.1,(E[1]+A[1])/2,.36,4.2,A[1]-E[1],ot.wall),ie(z[0],(E[1]+A[1])/2,.4,A[1]-E[1],"体育館西壁")}st.box(z[0],8.38,W[1],.36,.64,wt,ot.wall);for(let[o,p]of Kt){let E=I(te,o),A=I(te,p);st.box(z[0],3.49,(E[1]+A[1])/2,.36,1.42,A[1]-E[1],ot.wall)}let Z=gt("#aab9b7"),Pt=a("#b7b9ae",0,.53,.3);for(let o of[-1,1]){let p=W[0]+o*yt/2;N.box(p,6.13,W[1],.03,3.86,wt-.75,Z);for(let E of[4.2,5.05,6.1,7.12,8.05])N.box(p,E,W[1],.16,.065,wt,Pt);for(let E=z[1]+.45;E<Y[1];E+=1.35)N.box(p,6.13,E,.17,3.9,.055,Pt);for(let E=z[1]+.5;E<Y[1];E+=5.4)o<0&&Kt.some(([A,F])=>E>I(te,A)[1]-.2&&E<I(te,F)[1]+.2)||N.box(p,4.3,E,.45,8.6,.33,ot.wall);for(let E=z[1]+.5;E<Y[1]-.4;E+=.55)N.box(p-o*.3,4.9,E,.035,1.2,.03,ot.whiteMetal);N.box(p-o*.3,5.5,W[1],.05,.05,wt,ot.whiteMetal)}let P=a("#ffffff",vt,.78),X=a("#966d50",0,.76);for(let o of[-1,1])for(let[p,E]of o<0?re:[[302,504]]){let A=I(te,p)[1],F=I(te,E)[1],G=W[0]+o*(yt/2-.205);N.box(G,2.14,(A+F)/2,.028,4.03,F-A,P),N.box(G-o*.04,4.14,(A+F)/2,.045,.11,F-A,X);for(let V=A+.36;V<F;V+=.75)N.box(G-o*.03,2.1,V,.035,3.94,.026,X);N.cylinder([G-o*.35,5.2,A],[G-o*.35,5.2,F],.025,.025,ot.whiteMetal,8)}for(let[o,p]of Kt){let E=I(te,o)[1],A=I(te,p)[1];N.box(z[0]+.205,3.49,(E+A)/2,.035,1.42,A-E,P)}let it=mt-.205;for(let[o,p]of zt){N.box((o+p)/2,2.1,it,p-o-.06,4.04,.035,P);for(let E=o+.38;E<p-.2;E+=.53)N.box(E,2.1,it-.028,.022,3.96,.02,X)}N.box(At,3.59,it,4.46,1.14,.035,P);let y=a("#e6e2d8",0,.76),B=a("#24775f",0,.74,.04);for(let o of[-1,1])N.box(At+o*2.25,1.52,it-.04,.11,3.04,.09,y);N.box(At,3.02,it-.04,4.6,.12,.09,y),st.box(At,1.5,mt-.08,4.32,2.94,.16,a("#aa8769",0,.82)),N.box(At,1.5,it-.09,.045,2.9,.04,X);for(let o of[-1,1])N.box(At+o*.16,1.34,it-.12,.035,.28,.07,ot.metal);for(let o of[-4.8,0,4.8]){let p=W[0]+o;N.box(p,6,it-.02,1.35,2.4,.05,y),N.box(p,6,it-.055,1.21,2.25,.025,B),N.box(p-.35,6,it-.073,.08,2.19,.015,a("#6eb49a",0,.79,.02))}let U=a("#8f9693",10,.78,.12),$=a("#e8e6dc",0,.96);for(let o of[-1,1]){let p=W[0]+o*(yt/2+.4);ge.quad([W[0],10.15,z[1]-.4],[W[0],10.15,Y[1]+.4],[p,8.72,Y[1]+.4],[p,8.72,z[1]-.4],U,wt/3,4),ge.quad([W[0],9.97,z[1]],[p,8.54,z[1]],[p,8.54,Y[1]],[W[0],9.97,Y[1]],$,1,1)}for(let o of[z[1],Y[1]])st.tri([z[0],8.7,o],[W[0],10.15,o],[Y[0],8.7,o],ot.wall);for(let o=z[1]+3;o<Y[1]-1;o+=5.4)for(let p of[-7,-2.3,2.3,7]){let E=9.93-Math.abs(p)/(yt/2)*1.43;ge.cylinder([W[0]+p,E-.07,o],[W[0]+p,E-.01,o],.25,.25,ot.whiteMetal,20),ge.disk(W[0]+p,E-.085,o,.215,a("#fff9e4",0,.9,0,.8),20)}let J=a("#a8784f",0,.58),bt=a("#391722",6,.94),rt=a("#c39736",0,.47,.17),Et=z[1]+4.03,ee=z[1]+2.14;for(let o of[-1,1]){let p=yt/2-6.12,E=W[0]+o*(6.12+p/2);N.box(E,2.1,z[1]+.21,p,4.16,.05,P);for(let A=E-p/2+.36;A<E+p/2;A+=.5)N.box(A,2.1,z[1]+.25,.023,4.08,.026,X)}st.box(W[0],xt+.55,z[1]+2.1,11,1.1,4,a("#aa7649",ut,.52)),ie(W[0],z[1]+2.1,11,4.2,"常設舞台・使用せず"),N.box(W[0],3.81,ee,11.2,5.46,.11,bt);for(let o=0;o<32;o++){let p=W[0]-5.42+o*.35;N.cylinder([p,1.1,ee+.08],[p,6.49,ee+.08],.075,.075,a(o%3?"#421925":"#572331",6,.96),7)}for(let o of[1.1,6.48])N.box(W[0],o,ee+.17,11.18,.085,.1,rt);for(let o of[-1,1])N.box(W[0]+o*5.86,4.05,Et,.73,6.89,.69,J),N.box(W[0]+o*5.49,3.79,(ee+Et)/2,.22,5.95,Et-ee,J);N.box(W[0],7.46,Et,12.45,.66,.72,J),N.box(W[0],6.89,Et+.39,11.12,.55,.07,a("#4a1a28",0,.94)),N.quad([W[0],7.24,Et+.44],[W[0]-.25,6.97,Et+.44],[W[0],6.7,Et+.44],[W[0]+.25,6.97,Et+.44],rt),N.box(W[0],1.01,Et+.45,11.1,.73,.33,P);for(let o of[-1,1])N.box(W[0]+o*8.25,2.55,z[1]+.29,3.2,.92,.06,P);Gt.sign(W[0]-8.25,2.55,z[1]+.34,3,.62,q),Gt.sign(W[0]+8.25,2.55,z[1]+.34,3,.62,nt);{let o=Y[0]-.25,p=a("#ffffff",dt,.91);for(let E=0;E<5;E++){let A=z[1]+8.3+E*5.45;N.box(o,2.53,A,.09,2.45,5.24,X),N.box(o-.06,2.53,A,.025,2.31,5.1,p);for(let F=0;F<2;F++)for(let G=0;G<5;G++){let V=A+(G-2)*.92,at=2.99-F*.91;N.box(o-.084,at,V,.014,.66,.54,a(["#edece6","#e2e5df","#e7e0d7"][G%3],0,.94))}}}for(let o of[-1,1])for(let p of[z[1]+20,z[1]+33,z[1]+46])N.box(W[0]+o*(yt/2-.245),6.03,p,.035,2.9,2.4,a("#27443b",6,.9));for(let o of[-1,1])N.cylinder([W[0]+o*6,.05,z[1]+5],[W[0]+o*6,5.3,z[1]+5],.045,.045,ot.metal,8);function pe(o,p,E,A,F,G=.066+xt){let V=E[0]-p[0],at=E[1]-p[1],et=Math.hypot(V,at),Tt=-at/et*A/2,Nt=V/et*A/2;o.quad([p[0]-Tt,G,p[1]-Nt],[p[0]+Tt,G,p[1]+Nt],[E[0]+Tt,G,E[1]+Nt],[E[0]-Tt,G,E[1]-Nt],F,et,1)}for(let o of[W[0]-8.2,W[0]+8.2])pe(N,[o,z[1]+6],[o,mt-2],.047,a("#f5ede3"));for(let o of[z[1]+6,Xt,mt-2])pe(N,[W[0]-8.2,o],[W[0]+8.2,o],.047,a("#f5ede3"));for(let o of[W[0]-6.8,W[0]+6.8])pe(N,[o,z[1]+13],[o,mt-3],.036,a("#293239"),.068+xt);for(let o of[z[1]+13,mt-3])pe(N,[W[0]-6.8,o],[W[0]+6.8,o],.036,a("#293239"),.068+xt);for(let o of[W[0]-9.2,W[0]+9.2])pe(N,[o,z[1]+16],[o,mt-4],.038,a("#2f7795"),.07+xt);let St=I(469.65,427);Gt.scope(n.compose(St[0]-.12,0,St[1],-Math.PI/2),()=>{Gt.sign(0,2.94,0,3.5,.75,g.GYM.banner),Gt.sign(3.7,1.55,.1,1.08,1.65,H)}),t(.3,"テント・キッチンカー・ブースの内容を配置しています");function Yt(o,p,E,A=0,F="#66746c",G=0){o.scope(n.compose(p,G,E,A),()=>{let V=a("#a5aca8",0,.32,.5),at=a(F,6,.82);o.box(0,.43,0,.42,.055,.39,at),o.box(0,.7,-.18,.43,.3,.045,at);for(let et of[-.17,.17])o.cylinder([et,.04,-.15],[et,.86,-.18],.016,.016,V,6),o.cylinder([et,.04,.21],[et,.44,.1],.016,.016,V,6),o.cylinder([et,.05,-.16],[et,.47,.15],.014,.014,V,6);o.cylinder([-.19,.18,-.14],[.19,.18,-.14],.012,.012,V,6)})}function ne(o,p,E,A=1.8,F=.72,G=0,V=!0,at=!1){o.scope(n.compose(p,0,E,G),()=>{o.box(0,.73,0,A,.07,F,V?a("#f2ede1",13,.9):a("#d5c8af",5,.7));for(let et of[-A*.36,A*.36])o.cylinder([et,.06,-F*.34],[et,.71,F*.32],.022,.022,ot.metal,7),o.cylinder([et,.06,F*.34],[et,.71,-F*.32],.022,.022,ot.metal,7);if(o.cylinder([-A*.38,.35,0],[A*.38,.35,0],.021,.021,ot.metal,7),V)for(let et of[-1,1])o.box(0,.6,et*F/2,A,.25,.016,a("#eeeadf",6,.94))}),at&&ie(p,E,Math.abs(Math.cos(G))*A+Math.abs(Math.sin(G))*F,Math.abs(Math.sin(G))*A+Math.abs(Math.cos(G))*F,"table")}let Fe=I(368,283);for(let o=0;o<4;o++)for(let p=0;p<4;p++){let E=Fe[0]+(p-1.5)*2.62,A=Fe[1]+(o-1.5)*2.42;ne(N,E,A,1.65,.7,0,!0,!0);for(let F of[-1,1])for(let G=0;G<3;G++){let V=E+(G-1)*.53,at=A+F*.71;Yt(N,V,at,F===-1?0:Math.PI,"#6f7970"),$t.push({x:V,z:at,yaw:F===-1?0:Math.PI})}}let Pe=I(431,548);for(let o=0;o<3;o++){ne(N,Pe[0],Pe[1]+(o-1)*2.2,1.8,.65,0,!0,!0);for(let p of[-1,1])for(let E=0;E<3;E++)Yt(N,Pe[0]+(E-1)*.57,Pe[1]+(o-1)*2.2+p*.68,p<0?0:Math.PI)}for(let o=0;o<6;o++)for(let p=0;p<12;p++){let E=W[0]+(p-5.5)*.64+(p<6?-.7:.7),A=z[1]+18.5+o*.92;Yt(N,E,A,Math.PI,"#566a68",xt+.05),$t.push({x:E,z:A,yaw:Math.PI,gym:!0})}for(let o=0;o<6;o++)for(let p of[-2,-1,12,13]){let E=W[0]+(p-5.5)*.64+(p<6?-.7:.7),A=z[1]+18.5+o*.92;Yt(N,E,A,Math.PI,"#566a68",xt+.05),$t.push({x:E,z:A,yaw:Math.PI,gym:!0,addedGymSeat:!0})}for(let o=6;o<8;o++)for(let p=0;p<16;p++){let E=W[0]+(p-7.5)*.64+(p<8?-.7:.7),A=z[1]+18.5+o*.92;Yt(N,E,A,Math.PI,"#566a68",xt+.05),$t.push({x:E,z:A,yaw:Math.PI,gym:!0,addedGymSeat:!0})}function Je(o,p,E,A,F=0){o.scope(n.compose(p,0,E,F),()=>{o.cylinder([-.4,.04,-.15],[-.35,1.29,0],.023,.023,ot.wood,6),o.cylinder([.4,.04,-.15],[.35,1.29,0],.023,.023,ot.wood,6),o.cylinder([-.4,.04,-.48],[-.35,1.29,0],.023,.023,ot.wood,6),o.cylinder([.4,.04,-.48],[.35,1.29,0],.023,.023,ot.wood,6),o.sign(0,.85,.03,.7,.94,A,!0)})}function on(o,p,E,A,F=2.18,G=3.16){let V=[[-p/2,F,-E/2],[-p/2,F,E/2],[p/2,F,E/2],[p/2,F,-E/2]],at=[0,G,0];for(let et=0;et<4;et++){let Tt=V[et],Nt=V[(et+1)%4],Ut=(Ot,se)=>{let Ye=e.add(e.mul(Tt,1-Ot),e.mul(Nt,Ot)),Ge=e.add(e.mul(Ye,1-se),e.mul(at,se));return Ge[1]-=.052*Math.sin(Ot*Math.PI)*Math.sin(se*Math.PI),Ge};for(let Ot=0;Ot<10;Ot++)for(let se=0;se<8;se++){let Ye=Ot/10,Ge=se/8,De=Ut(Ye,Ge),nn=Ut((Ot+1)/10,Ge),Tn=Ut((Ot+1)/10,(se+1)/8),Un=Ut(Ye,(se+1)/8);o.quad(De,nn,Tn,Un,A,1,1)}o.quad(Tt,[Tt[0],F-.2,Tt[2]],[Nt[0],F-.2,Nt[2]],Nt,A,1,1)}}function Zn(o,p){let E=p.id,A=p.category,F=E==="F-1"||E==="F-9",G=E==="F-6"||E==="F-8",V=E==="T-12",at=E==="T-2";if(F){for(let et=0;et<9;et++){let Tt=-.8+et%5*.23,Nt=.3+Math.floor(et/5)*.22;o.cylinder([Tt,.79,Nt],[Tt,.94,Nt],.044,.052,a("#faf3dd"),12),o.cylinder([Tt,.94,Nt],[Tt,.958,Nt],.055,.055,a("#635442"),12)}o.box(.54,1.02,-.14,.45,.53,.32,a("#3f4443",0,.25,.45)),o.box(.53,1.09,.03,.22,.13,.017,a("#91aaa1",0,.25,.2));for(let et=0;et<3;et++)o.cylinder([.36+et*.11,.79,.16],[.36+et*.11,.98,.16],.028,.028,ot.metal,8)}else if(G)for(let et=0;et<3;et++){let Tt=-.65+et*.65;o.box(Tt,.79,.28,.56,.11,.4,a("#a98350",5));for(let Nt=0;Nt<7;Nt++)o.sphere(Tt+w(-.2,.2),.89,.28+w(-.14,.14),w(.065,.09),.045,w(.06,.1),a(["#bd863d","#d2a05d","#a87139"][Nt%3]),12,7)}else if(V)for(let et=0;et<3;et++){let Tt=-.62+et*.6;o.box(Tt,.85,.17,.52,.2,.5,a("#b7915d",5));for(let Nt=0;Nt<8;Nt++){let Ut=Tt+w(-.2,.2),Ot=.17+w(-.17,.17);o.cylinder([Ut,.88,Ot],[Ut+.11,1.06,Ot+.04],.017,.04,a("#d07731"),8),o.cylinder([Ut+.1,1.04,Ot+.04],[Ut+.17,1.17,Ot+.02],.008,.01,a("#58703a"),6)}}else if(at){o.box(-.35,.94,.15,.7,.28,.34,a("#2b363c",0,.45,.25)),o.box(-.42,1.01,.33,.29,.1,.007,a("#a9be92",0,.5,0,.2));for(let et=0;et<3;et++)o.cylinder([-.06+et*.05,.94,.34],[-.06+et*.05,.94,.37],.024,.024,ot.metal,10);o.box(.5,.84,.23,.35,.05,.28,a("#373a3c")),o.cylinder([.75,.8,-.13],[.75,2.65,-.13],.012,.012,ot.metal,7),o.cylinder([.33,2.4,-.13],[1.14,2.4,-.13],.015,.015,ot.metal,7)}else if(A==="F"){for(let et=0;et<3;et++){let Tt=-.7+et*.65;o.box(Tt,.8,.22,.54,.09,.36,a("#d1d5c8",0,.25,.45));for(let Nt=0;Nt<8;Nt++){let Ut=Tt+w(-.2,.2),Ot=.22+w(-.12,.12);o.sphere(Ut,.855,Ot,.047,.025,.045,a(["#c99352","#dfb476","#724b30"][Nt%3]),9,5)}}if(E==="F-11"){o.box(.12,.8,-.26,1,.1,.3,ot.black);for(let et=0;et<9;et++)o.cylinder([-.3+et*.1,.88,-.49],[-.3+et*.1,.88,.02],.006,.006,a("#d5b878"),5)}}else if(A==="S"){for(let et=0;et<14;et++){let Tt=-.8+et%7*.25,Nt=.13+Math.floor(et/7)*.25;o.box(Tt,.794,Nt,.17,.015,.16,a("#f8f4e6")),o.sphere(Tt,.83,Nt,.055,.032,.055,a(["#aa5c61","#b5aa6c","#558489","#9a804c"][et%4],0,.28,.32),12,7)}if(E==="S-8")for(let et=0;et<9;et++)o.cylinder([-.75+et*.17,.83,-.2],[-.7+et*.17,1.01,-.08],.021,.024,a("#c8af70",5),7)}else for(let et=0;et<3;et++)o.box(-.65+et*.6,.795,.22,.43,.015,.28,a("#faf8ec")),o.box(-.65+et*.6,.82,.2,.35,.012,.21,a(["#bbbaa0","#a6b4bb","#b7ba8d"][et],0,.8))}function zn(o,p=null){let E=p||o.pos,A=o.width||3.02,F=2.75,G=o.yaw||0,V=o.id==="S-3"||o.id==="S-9"?"#8393a0":o.id==="F-11"?"#859690":"#f8f7ef",at=a(D[o.category],6,.92);st.scope(n.compose(E[0],0,E[1],G),()=>{on(st,A,F,a(V,6,.92));for(let Ot of o.id==="F-10"?[-A/2+.035,0,A/2-.035]:[-A/2+.035,A/2-.035])for(let se of[-F/2+.035,F/2-.035])st.cylinder([Ot,.03,se],[Ot,2.2,se],.029,.026,ot.metal,8);st.box(0,2.1,F/2,A,.29,.026,at),st.box(0,2.1,-F/2,A,.29,.025,a(V,6));for(let Ot of[-A/2,A/2])st.box(Ot,2.1,0,.025,.29,F,a(V,6));st.cylinder([-A/2,2.17,-F/2],[A/2,2.17,F/2],.021,.021,ot.metal,8),st.cylinder([A/2,2.17,-F/2],[-A/2,2.17,F/2],.021,.021,ot.metal,8),(o.category==="F"||o.id==="HQ")&&st.box(0,1.15,-F/2,A,1.87,.015,a("#eeeee5",6,.94))}),N.scope(n.compose(E[0],0,E[1],G),()=>{o.id==="F-10"?(ne(N,-1.5,.4,2.28,.73),ne(N,1.5,.4,2.28,.73),N.scope(n.compose(-1.5,0,0),()=>Zn(N,o)),Yt(N,-2.15,-.53,0,"#65746c"),N.box(-.75,.23,-.46,.54,.42,.4,a("#af9270",5))):(ne(N,0,.4,Math.min(A-.45,2.28),.73),Zn(N,o),Yt(N,-.65,-.53,0,"#65746c"),N.box(.75,.23,-.46,.54,.42,.4,a("#af9270",5))),o.category==="T"&&N.sign(.56,1.5,-1.25,.95,.98,g[o.id].menu,!0)}),Gt.scope(n.compose(E[0],0,E[1],G),()=>{Gt.sign(0,2.15,F/2+.03,Math.min(A-.09,2.87),.62,g[o.id].banner),Je(Gt,-A/2+.2,F/2+.4,g[o.id].menu,-.14)});let et=[Math.sin(G),Math.cos(G)],Tt=[Math.cos(G),-Math.sin(G)],Nt=E[0]+et[0]*.4,Ut=E[1]+et[1]*.4;ie(Nt,Ut,Math.abs(Tt[0])*(A-.4)+Math.abs(et[0])*.8,Math.abs(Tt[1])*(A-.4)+Math.abs(et[1])*.8,o.id),o.approach=[E[0]+et[0]*(F/2+3.1),E[1]+et[1]*(F/2+3.1)],o.marker=[E[0]+et[0]*1.4,3.22,E[1]+et[1]*1.4],Lt.push(o)}function ai(o,p,E,A,F=1,G=.37){o.cylinder([p,E,A-.09],[p,E,A+.09],G,G,ot.tire,22),o.cylinder([p,E,A+F*.094],[p,E,A+F*.114],G*.55,G*.55,ot.metal,20);for(let V=0;V<6;V++){let at=V/6*x;o.cylinder([p+Math.cos(at)*G*.34,E+Math.sin(at)*G*.34,A+F*.115],[p+Math.cos(at)*G*.34,E+Math.sin(at)*G*.34,A+F*.12],G*.12,G*.12,ot.dark,7)}}function Ji(o,p){let E=o.pos,A=o.yaw,G=a(["#ede6d3","#c3a875","#eef0df","#657f79","#aa7761","#e2d8c3","#e0cf9e","#6c7a75"][p%8],0,.38,.23),V=st;V.scope(n.compose(E[0],0,E[1],A),()=>{V.box(0,.46,0,3.85,.22,1.7,ot.dark),V.box(.42,1.63,0,2.85,2.03,1.82,G),V.box(-1.41,1.2,0,1.06,1.37,1.8,G),V.box(-1.65,.9,0,.88,.38,1.9,G),V.box(-1.44,1.58,0,1.04,.74,1.8,G),V.box(-1.96,1.58,0,.035,.66,1.57,ot.glass),V.box(-1.42,1.65,.91,.76,.54,.018,ot.glass),V.box(-1.42,1.65,-.91,.76,.54,.018,ot.glass),V.box(.46,1.79,.918,2.4,1,.012,ot.dark),V.box(.46,1.72,.923,2.27,.81,.009,a("#555e54",0,.7)),V.box(.46,1.16,1.11,2.55,.07,.54,ot.metal),V.box(.46,2.76,0,2.98,.14,1.92,G);for(let Tt of[-1.35,1.2])for(let Nt of[-.89,.89])ai(V,Tt,.4,Nt,Nt<0?-1:1,.36);V.box(-1.98,.61,0,.1,.19,1.7,a("#b3b8b3",0,.35,.55));for(let Tt of[-.61,.61])V.box(-2.04,.93,Tt,.034,.2,.37,a("#eee8cf",0,.14,.3,.15));V.box(-2.05,.58,0,.034,.16,.28,a("#decb71")),V.box(.26,2.91,-.17,.53,.17,.44,ot.whiteMetal),V.cylinder([1.3,2.8,-.48],[1.3,3,-.48],.11,.11,ot.metal,12);for(let Tt of[-1.06,1.06])V.cylinder([-1.65,1.61,Tt*.83],[-1.65,1.62,Tt],.02,.02,ot.dark,6),V.box(-1.64,1.64,Tt,.1,.19,.05,ot.dark);V.quad([-.9,2.56,.94],[-.9,2.3,2.03],[1.76,2.3,2.03],[1.76,2.56,.94],a("#f6efdf",6),2,1),V.box(.43,2.22,2.02,2.7,.18,.02,a(D.F,6));for(let Tt of[-.82,1.69])V.cylinder([Tt,1.71,.96],[Tt,2.3,1.95],.017,.017,ot.metal,6)}),N.scope(n.compose(E[0],.38,E[1],A),()=>Zn(N,o)),Gt.scope(n.compose(E[0],0,E[1],A),()=>{Gt.sign(.42,2.67,.945,2.54,.48,g[o.id].banner),Je(Gt,-.4,2.28,g[o.id].menu,.1)});let at=[Math.sin(A),Math.cos(A)],et=[Math.cos(A),-Math.sin(A)];ie(E[0],E[1],Math.abs(et[0])*4.03+Math.abs(at[0])*1.93,Math.abs(et[1])*4.03+Math.abs(at[1])*1.93,o.id),o.approach=[E[0]+at[0]*3.3,E[1]+at[1]*3.3],o.marker=[E[0]+at[0]*1.45,3.42,E[1]+at[1]*1.45],Lt.push(o)}let Cr=0;for(let o of f.records)o.kind==="tent"?zn(o):o.kind==="truck"&&Ji(o,Cr++);let Ns=f.locations.find(o=>o.id==="HQ");Ns.width=6.9,zn(Ns);let $i=f.locations.find(o=>o.id==="OUTSTAGE"),jt=$i.pos;st.box(jt[0],.28,jt[1],7.2,.56,1.8,ot.wood),ie(jt[0],jt[1],7.2,1.8,"屋外ステージ");for(let o of[-1.8,0,1.8])N.box(jt[0]+o,.563,jt[1],.012,.009,1.8,ot.dark);N.box(jt[0],.563,jt[1],7.2,.009,.012,ot.dark);for(let o of[-1,1])N.box(jt[0]+o*4.05,.14,jt[1]+.5,.72,.28,.72,ot.base),N.cylinder([jt[0]+o*3.9,.04,jt[1]-.4],[jt[0]+o*3.9,3.2,jt[1]-.4],.033,.033,ot.metal,7),N.box(jt[0]+o*3.9,2.5,jt[1]-.4,.48,.85,.35,ot.black);let mn=jt[1]-1.65,Di=jt[1]-3.75;for(let o of[-1,1])N.cylinder([jt[0]+o*4,.1,mn],[jt[0]+o*4,.12,Di],.035,.035,ot.metal,8);N.cylinder([jt[0]-4,.1,mn],[jt[0]+4,.1,mn],.035,.035,ot.metal,8);for(let o of[-1,1])N.cylinder([jt[0]+o*4,.1,mn],[jt[0]+o*4,2.1,mn],.035,.035,ot.metal,8);N.cylinder([jt[0]-4,2.1,mn],[jt[0]+4,2.1,mn],.035,.035,ot.metal,8),N.cylinder([jt[0]-4,.12,Di],[jt[0]+4,.12,Di],.035,.035,ot.metal,8),N.quad([jt[0]-4,.12,Di],[jt[0]-4,.1,mn],[jt[0]+4,.1,mn],[jt[0]+4,.12,Di],a("#a7b0a6",11,.75),6,2);let Rr=d.add("stage-k-estate",(o,p)=>{o.fillStyle="#f7f7f2",o.fillRect(0,0,p,p),o.fillStyle="#9e3235",o.fillRect(0,0,p,92),o.fillStyle="#fff",o.textAlign="center",o.font="700 24px sans-serif",o.fillText("SHONAN REAL ESTATE",p/2,55),o.fillStyle="#24516b",o.font="700 69px sans-serif",o.fillText("K ESTATE",p/2,255),o.fillStyle="#5c7989",o.font="600 24px sans-serif",o.fillText("K エステート",p/2,315)});for(let o=-1;o<=1;o++){let p=jt[0]+o*2.52,E=2.42;Gt.quad([p-E/2,2.02,mn+.06],[p-E/2,.13,mn+.06],[p+E/2,.13,mn+.06],[p+E/2,2.02,mn+.06],a("#ffffff",Rr,.9,0,.06))}let R=jt[0]+5.15,j=jt[1]+2.6;N.box(R,1.5,j,1.26,.73,.12,ot.black),N.box(R,1.5,j+.07,1.22,.69,.025,a("#303c3d",0,.32,.08)),N.cylinder([R,.08,j],[R,1.13,j],.055,.055,ot.metal,8),N.box(R,.06,j,.62,.12,.47,ot.dark);for(let o of[.2,1.2])ne(N,jt[0]+5.5,jt[1]+o,1.32,.63,0);N.box(jt[0]+5.5,.85,jt[1]+1.2,.56,.18,.39,ot.dark);for(let o of[.2,1.2])Yt(N,jt[0]+5.5,jt[1]+o+1,0,"#4a5558");N.cylinder([jt[0]+6.45,.37,jt[1]-1.5],[jt[0]+6.82,.37,jt[1]-1.5],.23,.23,ot.dark,12),ie(R,j,1.3,.5,"大型モニター");let ft=[jt[0]-5.8,jt[1]+.4];N.scope(n.compose(ft[0],0,ft[1],0),()=>{on(N,3,2.8,ot.fabric);for(let o of[-1.45,1.45])for(let p of[-1.3,1.3])N.cylinder([o,.04,p],[o,2.15,p],.025,.025,ot.metal,7)}),ne(N,ft[0]+.35,ft[1]+.45,1.55,.7,0);for(let o=0;o<15;o++)N.box(ft[0]-1+o%5*.45,.2+Math.floor(o/5)*.4,ft[1]-.7,.41,.38,.48,ot.wood);ie(ft[0],ft[1],3,2.8,"屋外ステージのポップアップテント"),N.cylinder([jt[0],.6,jt[1]+.1],[jt[0],1.9,jt[1]+.1],.018,.018,ot.black,7),N.cylinder([jt[0],1.9,jt[1]+.1],[jt[0]+.36,2.08,jt[1]+.22],.018,.018,ot.black,7),Gt.sign(jt[0],.34,jt[1]+.914,6.75,.5,g.OUTSTAGE.banner),$i.approach=[jt[0],jt[1]+3.2],$i.marker=[jt[0],2.1,jt[1]],Lt.push($i);for(let o of f.locations.filter(p=>["MEET","EAT2","WC"].includes(p.id)))o.approach=o.pos,o.marker=[o.pos[0],2.5,o.pos[1]],Lt.push(o),o.id==="WC"&&Gt.scope(n.compose(o.pos[0],0,o.pos[1],0),()=>{Gt.sign(0,2.4,0,2.2,.53,g.WC.banner)});t(.45,"木々・遊具・モビリティ走路を作っています");let ct=[[192,116],[225,94],[306,91],[391,108],[436,132],[443,164],[423,178],[350,179],[294,162],[252,141],[209,143]];function lt(o,p=12){let E=[];for(let A=0;A<o.length;A++){let F=o[(A-1+o.length)%o.length],G=o[A],V=o[(A+1)%o.length],at=o[(A+2)%o.length];for(let et=0;et<p;et++){let Tt=et/p,Nt=Tt*Tt,Ut=Nt*Tt;E.push([0,1].map(Ot=>.5*(2*G[Ot]+(-F[Ot]+V[Ot])*Tt+(2*F[Ot]-5*G[Ot]+4*V[Ot]-at[Ot])*Nt+(-F[Ot]+3*G[Ot]-3*V[Ot]+at[Ot])*Ut)))}}return E}let Rt=lt(ct.map(o=>I(...o)),16),Ht=0,Ft=[0],Zt=Rt.map((o,p)=>{let E=Rt[(p-1+Rt.length)%Rt.length],A=Rt[(p+1)%Rt.length],F=A[0]-E[0],G=A[1]-E[1],V=Math.hypot(F,G);return[-G/V,F/V]});for(let o=0;o<Rt.length;o++){let p=(o+1)%Rt.length,E=Rt[o],A=Rt[p],F=Zt[o],G=Zt[p],V=Math.hypot(A[0]-E[0],A[1]-E[1]);if(Ht+=V,Ft.push(Ht),st.quad([E[0]-F[0],.035,E[1]-F[1]],[E[0]+F[0],.035,E[1]+F[1]],[A[0]+G[0],.035,A[1]+G[1]],[A[0]-G[0],.035,A[1]-G[1]],a("#bba990",1,.98),2,V),o%8<4)for(let at of[-1,1])pe(N,[E[0]+F[0]*.95*at,E[1]+F[1]*.95*at],[A[0]+G[0]*.95*at,A[1]+G[1]*.95*at],.085,a("#f3e8d0"),.043)}let qt=lt([[171,90],[281,77],[395,95],[452,128],[458,179],[436,190],[330,190],[281,174],[245,151],[176,150]].map(o=>I(...o)),5);function me(o,p,E=.65,A=!1,F=!1){let G=Math.hypot(p[0]-o[0],p[1]-o[1]),V=Math.max(1,Math.ceil(G/2.2)),at=A?a("#a48d66",5):a("#dedfd4",0,.45,.35);for(let et=0;et<=V;et++){let Tt=o[0]+(p[0]-o[0])*et/V,Nt=o[1]+(p[1]-o[1])*et/V;N.cylinder([Tt,.05,Nt],[Tt,E+.05,Nt],A?.045:.025,A?.042:.025,at,7),A||N.box(Tt,.035,Nt,.28,.07,.34,ot.base)}for(let et of[E*.4,E])N.cylinder([o[0],et,o[1]],[p[0],et,p[1]],A?.036:.021,A?.036:.021,at,7);F&&N.quad([o[0],.15,o[1]],[o[0],E,o[1]],[p[0],E,p[1]],[p[0],.15,p[1]],a("#a2aa9a",11,.82),G/1.1,E/1.1)}for(let o=0;o<qt.length;o++)me(qt[o],qt[(o+1)%qt.length],.65);let ae=f.locations.find(o=>o.id==="MOBILITY");ae.approach=[ae.pos[0]-2,ae.pos[1]+2.1],ae.marker=[ae.pos[0],2.8,ae.pos[1]],Lt.push(ae),N.scope(n.compose(ae.pos[0],0,ae.pos[1],0),()=>{on(N,3,2.7,a("#f1e5cc",6));for(let o of[-1.45,1.45])for(let p of[-1.3,1.3])N.cylinder([o,.05,p],[o,2.2,p],.026,.026,ot.metal,7)}),Gt.sign(ae.pos[0],2.1,ae.pos[1]+1.37,2.85,.65,g.MOBILITY.banner),Je(Gt,ae.pos[0]-.2,ae.pos[1]+.3,K,-.3);function Jt(o){let p=(o%Ht+Ht)%Ht,E=0;for(;E<Rt.length-1&&Ft[E+1]<p;)E++;let A=Rt[E],F=Rt[(E+1)%Rt.length],G=(p-Ft[E])/(Ft[E+1]-Ft[E]);return{x:A[0]+(F[0]-A[0])*G,z:A[1]+(F[1]-A[1])*G,yaw:Math.atan2(F[0]-A[0],F[1]-A[1])}}let Qt=new s,Ve=a("#d5d8d1",0,.39,.18),Oe=a("#91a7a6",0,.21,.55);Qt.box(0,.46,-.2,1.22,.2,2.3,ot.dark),Qt.box(0,.84,-.94,1.24,.65,.72,Ve),Qt.box(0,1.02,-.74,1.12,.25,.7,a("#465052",0,.75)),Qt.box(0,.82,.22,1.23,.16,1.18,Ve),Qt.sphere(0,.87,.95,.68,.61,.25,Ve,18,10);let Se=Array.from({length:17},(o,p)=>(p-8)*.07),qe=Array.from({length:9},(o,p)=>p/8),Bt=(o,p)=>{let E=Math.abs(o)/.56;return[o,1.22+p*(.69-.1*E*E),1.17-.56*p-.13*E*E]},$e=(o,p)=>{let E=-.2*p*o/.31360000000000005,A=-.26*o/(.56*.56),F=.69-.1*(o/.56)**2,G=[E*-.56-A*F,.56,F],V=Math.hypot(...G);return G.map(at=>at/V)};for(let o=0;o<qe.length-1;o++)for(let p=0;p<Se.length-1;p++){let E=Se[p],A=Se[p+1],F=qe[o],G=qe[o+1],V=Bt(E,F),at=Bt(E,G),et=Bt(A,G),Tt=Bt(A,F),Nt=$e(E,F),Ut=$e(E,G),Ot=$e(A,G),se=$e(A,F);Qt.tri(at,V,Tt,Oe,[[0,1],[0,0],[1,0]],[Ut,Nt,se]),Qt.tri(at,Tt,et,Oe,[[0,1],[1,0],[1,1]],[Ut,se,Ot])}let be=a("#252c2d",0,.68,.12);for(let o of[0,1])for(let p=0;p<Se.length-1;p++)Qt.cylinder(Bt(Se[p],o),Bt(Se[p+1],o),.021,.021,be,7);for(let o of[-.56,.56])for(let p=0;p<qe.length-1;p++)Qt.cylinder(Bt(o,qe[p]),Bt(o,qe[p+1]),.024,.024,be,7);let Ze=(o,p)=>{let E=Math.abs(o)/.56;return[o,1.91-.1*E*E-.03*Math.max(0,-p),p-.13*E*E]};for(let o=0;o<Se.length-1;o++){let p=Se[o],E=Se[o+1];Qt.quad(Ze(p,.61),Ze(p,-1.12),Ze(E,-1.12),Ze(E,.61),Ve),Qt.cylinder(Ze(p,-1.12),Ze(E,-1.12),.018,.018,be,7)}for(let o of[-.56,.56])Qt.cylinder(Ze(o,.61),Ze(o,-1.12),.027,.027,be,8),Qt.cylinder([o,.58,-1.07],Ze(o,-1.12),.026,.026,ot.metal,8);for(let o of[-.65,.65])Qt.box(o,.55,-.05,.14,.12,1.65,Ve),Qt.box(o,1.14,-1,.07,.48,.07,ot.dark),Qt.box(o,1.08,.8,.08,.54,.08,ot.dark);Qt.box(0,1.15,-.59,.96,.2,.48,a("#333b3c",0,.75)),Qt.box(0,1.03,.44,.77,.09,.36,ot.dark),Qt.sphere(0,.99,1.19,.15,.15,.065,ot.dark,12,8);for(let o of[-.42,.42])Qt.box(o,1.02,1.17,.29,.07,.035,a("#f0ebd9",0,.35,.1,.2));for(let o of[-.55,.55])Qt.scope(n.compose(o,.34,-1.02,Math.PI/2),()=>ai(Qt,0,0,0,o>0?1:-1,.34));Qt.scope(n.compose(0,.34,1.2,Math.PI/2),()=>ai(Qt,0,0,0,1,.34)),Qt.cylinder([-.4,1.23,.72],[.4,1.23,.72],.025,.025,ot.dark,9);for(let o of[-.69,.69])Qt.cylinder([o,1.33,.8],[o*1.13,1.37,1],.02,.02,ot.dark,7),Qt.box(o*1.13,1.39,1.02,.19,.11,.055,ot.dark);let Dn=d.banner("DEMO","電動トライク","車体色は仮表示","#53605b");Qt.scope(n.compose(.69,0,-.65,Math.PI/2),()=>Qt.sign(0,.92,0,1.3,.3,Dn));let _n=f.records.find(o=>o.kind==="goat"),we=_n.pos,Re=6.5,Le=6.3,Nn=[[we[0]-Re/2,we[1]-Le/2],[we[0]+Re/2,we[1]-Le/2],[we[0]+Re/2,we[1]+Le/2],[we[0]-Re/2,we[1]+Le/2]];ve(Nn,st,a("#c7bb89",2,.97),2);for(let o=0;o<4;o++)me(Nn[o],Nn[(o+1)%4],1.1,!0);ie(we[0],we[1],Re,Le,"ヤギ牧場"),_n.approach=[we[0],we[1]+Le/2+3.1],_n.marker=[we[0],2.5,we[1]+Le/2],Lt.push(_n),Gt.sign(we[0],2.72,we[1]+Le/2+.06,3.4,.68,g[_n.id].banner);for(let o of[-1,1])N.cylinder([we[0]+o*1.6,.05,we[1]+Le/2],[we[0]+o*1.6,3.09,we[1]+Le/2],.05,.05,ot.wood,7);N.box(we[0]-2,.26,we[1]-1.7,.9,.48,1.4,a("#b6a166",2)),N.cylinder([we[0]+2,.05,we[1]-2],[we[0]+2,.28,we[1]-2],.35,.38,a("#6b8990",0,.3,.4),18);function Be(){let o=new s,p=a("#e9e4d5",0,.95),E=a("#776654",0,.92);o.sphere(0,.73,0,.3,.29,.54,p,18,10),o.cylinder([0,.85,.3],[0,1.13,.52],.18,.14,p,14),o.sphere(0,1.19,.61,.15,.18,.24,p,16,10),o.sphere(0,1.1,.78,.12,.1,.1,E,12,7);for(let A of[-1,1]){o.sphere(A*.22,1.26,.48,.19,.055,.085,p,12,7),o.sphere(A*.137,1.22,.67,.015,.024,.025,ot.black,8,6),o.cylinder([A*.09,1.31,.51],[A*.11,1.48,.38],.039,.021,E,9),o.cylinder([A*.11,1.48,.38],[A*.1,1.55,.27],.021,.009,E,8);for(let F of[-.32,.33])o.cylinder([A*.19,.6,F],[A*.18,.12,F+.03],.046,.03,p,9),o.box(A*.18,.07,F+.05,.09,.1,.14,E)}return o.cylinder([0,.92,-.46],[0,1.06,-.62],.035,.016,p,9),o.cylinder([0,1.08,.77],[0,.92,.72],.045,.01,p,9),o}let ln=f.records.find(o=>o.kind==="baseball");ln.locationSource="配置ゾーニング 9月21日 Ver.6案（1ページ）";let ke=ln.pos;ln.approach=[ke[0]+9,ke[1]+2],ln.marker=[ke[0]+8,2.8,ke[1]+1],Lt.push(ln),Gt.sign(ke[0]+8,1.8,ke[1]+1,4,.82,g[ln.id].banner);for(let o of[-1,1])N.cylinder([ke[0]+8+o*1.9,.08,ke[1]+1],[ke[0]+8+o*1.9,2.3,ke[1]+1],.035,.035,ot.metal,7);for(let o of[[-3,-2],[0,-5],[3,-2],[0,1]])N.box(ke[0]+o[0],.052,ke[1]+o[1],.34,.045,.34,a("#e8e2c8"));N.cylinder([ke[0]+4,.08,ke[1]+2],[ke[0]+4.4,.1,ke[1]+3.05],.022,.045,a("#b49566",5),9),N.sphere(ke[0]+4.25,.095,ke[1]+2.2,.074,.074,.074,a("#e9e6dc"),12,8);let Ir=d.add("baseball-net",(o,p)=>{o.clearRect(0,0,p,p),o.strokeStyle="#becab2",o.lineWidth=4,o.beginPath();for(let E=0;E<=p;E+=64)o.moveTo(E,0),o.lineTo(E,p),o.moveTo(0,E),o.lineTo(p,E);o.stroke()}),ru=d.add("baseball-flag",(o,p)=>{o.fillStyle="#672d3d",o.fillRect(0,0,p,p);for(let E=0;E<p;E+=3)o.fillStyle=E%6?"rgba(233,208,172,.035)":"rgba(0,0,0,.055)",o.fillRect(E,0,1,p);o.strokeStyle="#d0b792",o.lineWidth=3,o.strokeRect(9,9,p-18,p-18),o.textAlign="center",o.fillStyle="#f4d990",o.font='700 27px "Yu Gothic",sans-serif',o.fillText("オール西鎌倉少年野球クラブ",p/2,64,475),o.fillStyle="#f5ead8",o.font="bold 170px Georgia,serif",o.fillText("N",p/2,305),o.fillStyle="#df6358",o.font='700 93px "Yu Mincho",serif',o.fillText("必",90,293),o.fillText("勝",424,293),o.strokeStyle="#d1d0ac",o.lineWidth=6;for(let E of[-1,1]){o.beginPath(),o.moveTo(p/2,396),o.quadraticCurveTo(p/2+E*120,357,p/2+E*103,186),o.stroke();for(let A=0;A<10;A++){let F=A/9,G=p/2+E*(22+81*Math.sin(F*Math.PI/2)),V=380-F*181;o.save(),o.translate(G,V),o.rotate(E*(.8+F*.4)),o.fillStyle="#d4d4b5",o.beginPath(),o.ellipse(0,0,5,16,0,0,Math.PI*2),o.fill(),o.restore()}}}),au=d.sign("baseball-board",ln.name,"野球体験","#672d3d","T-5");N.scope(n.compose(ke[0],0,ke[1]),()=>{let o=a("#38674d",0,.65,.15),p=a("#476e48",Ir,.95),E=a("#eeeadd",0,.97);function A(G,V,at,et,Tt=0){N.scope(n.compose(G,0,V,Tt),()=>{for(let Nt of[-1,1]){let Ut=Nt*at/2;N.cylinder([Ut,.04,0],[Ut,et,0],.029,.029,o,8),N.cylinder([Ut,.04,-.65],[Ut,.04,.65],.025,.025,o,8),N.cylinder([Ut,.05,.6],[Ut,1,0],.023,.023,o,8)}N.cylinder([-at/2,et,0],[at/2,et,0],.025,.025,o,8),N.quad([-at/2,.09,0],[-at/2,et-.02,0],[at/2,et-.02,0],[at/2,.09,0],p,at/.8,et/.8),N.cylinder([-at/2,.1,0],[at/2,.1,0],.045,.045,o,8)})}A(3.4,-1.3,4.8,3.3),A(-4,-5.5,2.4,2.5,.35),A(-9,-2,2.4,2.5,-.2),N.sign(2.4,2.22,-1.25,2,1.48,ru);for(let G of[1.46,3.34])N.cylinder([G,2.98,-1.24],[G,3.28,-1.3],.009,.009,a("#d9d4b4"),6);ne(N,.1,1,1.8,.72,0,!1,!1),Yt(N,-1.15,1.05,.18,"#3e4647"),Yt(N,7.1,-.4,-.35,"#42484d"),N.scope(n.compose(.15,.72,1.05,-.08),()=>N.sign(0,.48,0,.78,.83,au,!0)),N.box(-.55,.89,.98,.38,.24,.3,a("#778c87",0,.8));for(let G=0;G<5;G++)N.cylinder([-.7+G*.068,.99,.99],[-.7+G*.068,1.16,.99],.014,.014,a(G%2?"#c6a264":"#edddb0"),6);function F(G,V,at){for(let et=0;et<48;et++){let Tt=et/48*x,Nt=(et+1)/48*x,Ut=(Ot,se)=>[G+Math.cos(Ot)*se,.043,V+Math.sin(Ot)*se];N.quad(Ut(Tt,at-.025),Ut(Nt,at-.025),Ut(Nt,at+.025),Ut(Tt,at+.025),E)}}for(let[G,V,at]of[[2,5.2,!1],[7.8,5.5,!1],[-3,2.5,!0]]){F(G,V,.66);let et=a(at?"#388faf":"#e5cc57",0,.9);N.box(G,.035,V,.34,.06,.34,et),N.cylinder([G,.06,V],[G,.62,V],.145,.022,et,12)}for(let G of[3.9,4.65,5.4]){let V=a("#78b3ce",0,.78);N.cylinder([G,.04,3.8],[G,.4,3.8],.21,.16,V,16),N.cylinder([G,.037,3.8],[G,.071,3.8],.225,.222,V,16)}for(let G of[-1.9,6])N.box(G,.044,-3.7,.06,.015,7.2,E);N.box(2.05,.044,-7.3,7.9,.015,.06,E),N.box(2.05,.044,-.1,7.9,.015,.06,E),N.box(3.5,.044,7.1,11.5,.015,.06,E)});let Lo=(o,p,E)=>o+E>z[0]&&o-E<Y[0]&&p+E>z[1]&&p-E<Y[1];function ou(o,p,E=7,A=!1){let F=I(o,p),G=F[0],V=F[1],at=u(Math.round(o*721+p*91)),et=p>=410&&p<=420?{132:[6.8,.53,!1],152:[6.3,.56,!1],175:[7.6,.26,!0],252:[7.8,.28,!0]}[o]:null;et&&(E=et[0]);let Tt=N;Tt.cylinder([G,0,V],[G+.12,E*.57,V-.1],.19,.08,ot.bark,11);for(let Nt=0;Nt<6;Nt++){let Ut=Nt*x/6+at(),Ot=[G,E*.34+at()*.6,V],se=[G+Math.cos(Ut)*E*.27,E*(.62+at()*.17),V+Math.sin(Ut)*E*.27];if(!Lo((Ot[0]+se[0])/2,(Ot[2]+se[2])/2,Math.max(Math.abs(Ot[0]-se[0]),Math.abs(Ot[2]-se[2]))/2+.08)){Tt.cylinder(Ot,se,.073,.026,ot.bark,8);for(let Ye=0;Ye<3;Ye++){let Ge=[se[0]+(at()-.5)*1.4,se[1]+at()*1.05,se[2]+(at()-.5)*1.4];Lo((se[0]+Ge[0])/2,(se[2]+Ge[2])/2,Math.max(Math.abs(se[0]-Ge[0]),Math.abs(se[2]-Ge[2]))/2+.03)||Tt.cylinder(se,Ge,.029,.01,ot.bark,7)}}}for(let Nt=0;Nt<(et?180:52);Nt++){let Ut=at()*x,Ot=Math.sqrt(at())*E*(et?et[1]:.38),se=G+Math.cos(Ut)*Ot,Ye=V+Math.sin(Ut)*Ot,Ge=E*(et?.57:.7)+at()*E*(et?.38:.25)-Ot/E*.8,De=E*(et?.12+at()*.09:.19+at()*.13),nn=at()*x,Tn=(et?et[2]:A)?ot.autumn:ot.leaf;Lo(se,Ye,De*.71)||Vt.scope(n.compose(se,Ge,Ye,nn),()=>{Vt.quad([-De/2,-De/2,0],[-De/2,De/2,0],[De/2,De/2,0],[De/2,-De/2,0],Tn),Vt.quad([-De/2,0,-De/2],[-De/2,0,De/2],[De/2,0,De/2],[De/2,0,-De/2],Tn)})}Mt.push({x:G,z:V,r:.26})}[[143,54],[176,48],[207,47],[234,46],[270,45],[301,48],[366,63],[399,73],[431,85],[464,98],[496,116],[532,131],[561,151],[566,206],[566,240],[568,275],[581,361],[582,414],[581,521],[579,566],[568,627],[547,692],[509,719],[480,730],[432,738],[404,742],[371,748],[323,757],[282,759],[243,764],[205,769],[168,773],[130,775],[92,750],[83,712],[75,671],[53,584],[32,527],[38,382],[62,335],[68,159],[132,418],[152,418],[175,413],[252,412],[283,414],[321,415],[348,419],[381,417],[417,418],[420,396]].forEach((o,p)=>ou(o[0],o[1],w(5.8,8.7),p%3!==0));let kn=I(525,171);for(let o=0;o<6;o++){let p=kn[0]+o*1.5;N.cylinder([p,.03,kn[1]],[p,2.45,kn[1]],.033,.033,a("#287b9c",0,.5,.35),8),N.cylinder([p,2.45,kn[1]],[p,2.45,kn[1]+1.1],.025,.025,ot.metal,8),N.cylinder([p,.03,kn[1]+1.1],[p,2.45,kn[1]+1.1],.033,.033,a("#287b9c"),8)}for(let o of[kn[1],kn[1]+1.1])N.cylinder([kn[0],2.45,o],[kn[0]+7.5,2.45,o],.03,.03,ot.metal,8);let Pr=I(514,238);for(let o=0;o<4;o++)for(let p=0;p<4;p++){let E=Pr[0]+o*.7,A=Pr[1]+p*.7;N.cylinder([E,.02,A],[E,2.1,A],.022,.022,a("#287b9c"),7);for(let F=.7;F<2.2;F+=.7)o<3&&N.cylinder([E,F,A],[E+.7,F,A],.02,.02,a("#287b9c"),7),p<3&&N.cylinder([E,F,A],[E,F,A+.7],.02,.02,a("#287b9c"),7)}ie(Pr[0]+1.05,Pr[1]+1.05,2.3,2.3,"遊具");for(let o=0;o<ue.length;o++){let p=ue[o],E=ue[(o+1)%ue.length];o===6||o===15||o===16||me(p,E,1.55,!1,!0)}for(let o of["GATE_MAIN","GATE_WEST"]){let p=f.locations.find(F=>F.id===o),E=p.pos,A=o==="GATE_MAIN"?-Math.PI/4:.7;N.scope(n.compose(E[0],0,E[1],A),()=>{for(let F of[-1,1])N.box(F*2.6,1,0,.52,2,.58,ot.wall),N.box(F*2.6,2.03,0,.6,.08,.64,ot.base),N.cylinder([F*2.75,.05,.25],[F*2.75,3.35,.25],.036,.036,ot.metal,9);if(o==="GATE_MAIN"){let F=a("#586567",0,.54,.35),G=a("#aeb0a7",3,.96);for(let V of[-1,1]){N.box(V*4.4,.47,0,3.05,.94,.58,G),N.box(V*4.4,.96,0,3.13,.08,.68,ot.base);for(let at=.24;at<=2.64;at+=.24)N.cylinder([V*2.45,.22,at],[V*2.45,1.52,at],.019,.019,F,6);for(let at of[.23,1.51])N.cylinder([V*2.45,at,.18],[V*2.45,at,2.72],.026,.026,F,6)}}N.sign(0,3.12,.25,5.7,.96,k)}),p.approach=o==="GATE_MAIN"?[49,75]:[-43,-38],p.marker=[E[0],3.75,E[1]],Lt.push(p)}{let o=f.locations.find(p=>p.id==="GATE_WEST");N.scope(n.compose(o.pos[0],0,o.pos[1],.7),()=>{N.box(0,.045,1.15,5.05,.09,3.75,a("#b7b5a8",3,.96));for(let p of[-1,1]){N.box(p*3.24,.33,1.25,.52,.66,4.1,a("#a3a59a",3,.98)),N.box(p*3.24,.7,1.25,.61,.085,4.25,a("#c7c9ba",3,.93));for(let E of[-.52,.55,1.62,2.69])N.box(p*3.24,.34,E,.54,.42,.023,a("#898e83",3,.96))}})}let Do=new s,lu=d.sign("flag",`つながり
フェスタ`,`＠にしかま
2026`,"#366568","");Do.animate([0,0,0],9,()=>Do.quad([.05,2.8,0],[.05,1,0],[.62,1,0],[.62,2.8,0],a("#fff",lu,.8)));let ac=[];for(let o of[[448,520],[440,611],[543,622],[468,407],[282,378],[130,128],[461,296]]){let p=I(...o);N.cylinder([p[0],.03,p[1]],[p[0],3,p[1]],.016,.014,ot.whiteMetal,8),N.box(p[0],.055,p[1],.48,.1,.4,a("#dedfd6")),ac.push({matrix:n.compose(p[0],0,p[1],-.3),info:[w(0,6),0,0,0]})}for(let o of[[465,441],[459,446],[456,452],[458,463],[445,472],[552,651],[542,651],[178,166]]){let p=I(...o);N.box(p[0],.035,p[1],.32,.07,.32,a("#b1543e")),N.cylinder([p[0],.06,p[1]],[p[0],.63,p[1]],.125,.022,a("#c7793c"),10),N.cylinder([p[0],.32,p[1]],[p[0],.4,p[1]],.072,.061,a("#e6ddc7"),10)}function oc(o,p,E=25){let A=I(o,p),F=7;for(let G=0;G<F;G++){let V=G/F*E,at=(G+1)/F*E,et=2.4-G/F*1.6,Tt=2.4-(G+1)/F*1.6;for(let Nt of[-1,1])for(let Ut of[-1,1])N.cylinder([A[0]+Nt*et,V,A[1]+Ut*et],[A[0]+Nt*Tt,at,A[1]+Ut*Tt],.06,.045,ot.metal,6),N.cylinder([A[0]+Nt*et,V,A[1]+Ut*et],[A[0]-Nt*Tt,at,A[1]+Ut*Tt],.026,.026,ot.metal,6),N.cylinder([A[0]+Nt*et,V,A[1]+Ut*et],[A[0]+Nt*Tt,at,A[1]-Ut*Tt],.026,.026,ot.metal,6)}for(let G of[E*.71,E*.87,E]){N.cylinder([A[0]-5,G,A[1]],[A[0]+5,G,A[1]],.065,.065,ot.metal,7);for(let V of[-1,1])N.cylinder([A[0]+V*.9,G-1.8,A[1]],[A[0]+V*5,G,A[1]],.04,.04,ot.metal,6),N.cylinder([A[0]+V*4.7,G,A[1]],[A[0]+V*4.7,G-1,A[1]],.09,.09,a("#9b9d84"),10)}return ie(A[0],A[1],5,5,"鉄塔"),A}let Lr=oc(322,56,26),lc=oc(548,194,26);for(let o of[-4.7,4.7])for(let p of[18.46,22.62,26]){let E=[];for(let A=0;A<=36;A++){let F=A/36;E.push([Lr[0]+(lc[0]-Lr[0])*F+o,p-1-3.4*Math.sin(F*Math.PI),Lr[1]+(lc[1]-Lr[1])*F])}N.tube(E,.035,ot.dark,5)}let oi=new s;for(let o=0;o<27;o++){let p=o/27*x,E=125+w(0,35),A=o<9?o<4?-151:-83:o<18?84:-66+(o-18)*16.5,F=o<9?-42+o*17:o<18?-21+(o-9)*17:132,G=w(6,10),V=w(6,11),at=w(5.2,7.3);oi.scope(n.compose(0,FestaScenery.height(A,F),0),()=>{oi.box(A,at/2,F,G,at,V,a(["#ddd8c9","#c4ccca","#e6e0d4","#b8b9ac"][o%4],3,.9));let et=a(["#676f70","#8a7163","#5d6966"][o%3],10,.7);oi.tri([A-G/2-.35,at,F-V/2-.35],[A+G/2+.35,at,F-V/2-.35],[A,at+2,F-V/2-.35],et),oi.tri([A+G/2+.35,at,F+V/2+.35],[A-G/2-.35,at,F+V/2+.35],[A,at+2,F+V/2+.35],et),oi.quad([A-G/2-.35,at,F-V/2-.35],[A-G/2-.35,at,F+V/2+.35],[A,at+2,F+V/2+.35],[A,at+2,F-V/2-.35],et,3,3),oi.quad([A,at+2,F-V/2-.35],[A,at+2,F+V/2+.35],[A+G/2+.35,at,F+V/2+.35],[A+G/2+.35,at,F-V/2-.35],et,3,3);for(let Tt=0;Tt<3;Tt++)oi.box(A+(Tt-1)*2.1,at*.62,F+V/2+.02,1.15,1.35,.03,ot.glass)})}let cu=d.banner("WC","にしかまくら子どもの家","当日のトイレ","#426861");FestaScenery.build({details:N,green:Vt,distant:oi,signGeo:Gt,childSign:cu,p:I,m:ot,mat:a,M:n,rng:u,TAU:x,ga:z,gb:Y,gc:W,gw:yt,gd:wt,gymRise:xt});function Ki(o,p,E=.26){if(!le(o,p,ue)||le(o,p,qt))return!1;for(let A of _t){let F=Math.max(Math.abs(o-A.x)-A.w/2,0),G=Math.max(Math.abs(p-A.z)-A.d/2,0);if(F*F+G*G<E*E)return!1}for(let A of Mt)if(Math.hypot(o-A.x,p-A.z)<E+A.r)return!1;return!0}function cc(o,p){return o>=z[0]+.05&&o<=Y[0]-.15&&p>=z[1]+.05&&p<=Y[1]-.05?xt:o>=z[0]-1.65&&o<z[0]+.05&&Kt.some(([E,A])=>p>=I(te,E)[1]+.15&&p<=I(te,A)[1]-.15)?xt*m((o-z[0]+1.65)/1.7,0,1):0}function Dr(o,p=10){if(Ki(o[0],o[1],.31))return[...o];for(let E=.4;E<=p;E+=.35)for(let A=0;A<32;A++){let F=A*x/32,G=o[0]+Math.sin(F)*E,V=o[1]+Math.cos(F)*E;if(Ki(G,V,.31))return[G,V]}return null}let No=f.locations.find(o=>o.id==="GYM");No.approach=[W[0],z[1]+18.8],No.marker=[W[0],3.1+xt,z[1]+18.8],Lt.push(No);for(let o of Lt)o.id==="WC"&&(o.approach=[W[0],Y[1]-5]),o.approach=Dr(o.approach)||Dr(o.pos);t(.62,"来場者・ヤギ・試乗車の動きを準備しています");function hc(o=0){let p=new s,E=a(["#7f9c9a","#d8c5ad","#a76250","#4c6670","#787c58","#b7b4a9","#655c73","#e3d1b1"][o%8],6,.93),A=a(["#41494e","#746854","#4a575a","#485669"][o%4],6,.91),F=a(["#cba584","#d8b69a","#bc9879","#d0ad8c"][o%4],0,.78),G=a(["#383733","#4b4137","#77756e"][o%3],0,.96),V=[[.88,.19,.126],[.98,.19,.13],[1.16,.218,.148],[1.32,.243,.144],[1.385,.222,.127],[1.445,.075,.064]];for(let at=0;at<V.length-1;at++)for(let et=0;et<20;et++){let Tt=et/20*x,Nt=(et+1)/20*x,Ut=V[at],Ot=V[at+1],se=(Ye,Ge)=>[Math.cos(Ge)*Ye[1],Ye[0],Math.sin(Ge)*Ye[2]];p.quad(se(Ut,Tt),se(Ot,Tt),se(Ot,Nt),se(Ut,Nt),E,1,1)}p.cylinder([0,1.4,0],[0,1.49,0],.061,.062,F,10),p.sphere(0,1.57,.012,.114,.142,.107,F,16,11),p.sphere(0,1.575,-.009,.116,.145,.11,G,20,10,0,1.26),p.sphere(0,1.58,.127,.017,.032,.024,F,10,7);for(let at of[-1,1])p.sphere(at*.111,1.57,.008,.024,.042,.026,F,9,7),p.sphere(at*.039,1.601,.111,.009,.004,.005,ot.black,8,5),p.cylinder([at*.026,1.621,.104],[at*.053,1.621,.098],.004,.004,G,5),p.animate([at*.23,1.37,0],at,()=>{p.sphere(at*.235,1.335,0,.082,.105,.085,E,12,9),p.sphere(at*.295,1.08,.035,.064,.073,.064,E,12,8),p.cylinder([at*.23,1.37,0],[at*.295,1.08,.035],.079,.064,E,12),p.cylinder([at*.295,1.08,.035],[at*.29,.9,.06],.063,.045,E,11),p.sphere(at*.287,.859,.065,.043,.067,.038,F,11,7)}),p.animate([at*.108,.88,0],at*2,()=>{p.cylinder([at*.105,.9,0],[at*.12,.49,.015],.098,.077,A,12),p.cylinder([at*.12,.49,.015],[at*.12,.1,0],.077,.06,A,11),p.sphere(at*.12,.077,.052,.075,.068,.146,a("#383d3c",0,.75),12,7),p.box(at*.12,.034,.054,.142,.035,.25,a("#c1beb1"))});if(o%3===0&&(p.sphere(0,1.7,-.006,.126,.045,.126,a("#b4a481",6),14,8),p.box(0,1.676,.125,.18,.018,.14,a("#b4a481",6))),o%4===1){p.sphere(0,1.17,-.16,.16,.23,.1,a("#73664e",6),13,9);for(let at of[-1,1])p.cylinder([at*.16,1.36,.04],[at*.12,1.03,.09],.017,.017,a("#756b58"),7)}return o%4===2&&(p.cylinder([.29,.91,.06],[.32,.66,.06],.01,.01,a("#aa9675"),7),p.box(.32,.57,.06,.19,.24,.22,a("#d3c2a1",6))),p}function hu(o){let p=hc(o),E=new s;for(let F=0;F<p.used;F+=60)if(!(Math.abs(p.data[F+19])>1.5&&Math.abs(p.data[F+19])<3))for(let G=0;G<3;G++){let V=F+G*20,at={color:Array.from(p.data.slice(V+8,V+11)),p:Array.from(p.data.slice(V+12,V+16)),ao:p.data[V+11]};E.vertex([p.data[V],p.data[V+1]-.4,p.data[V+2]],Array.from(p.data.slice(V+3,V+6)),Array.from(p.data.slice(V+6,V+8)),at)}let A=a(["#41494e","#746854","#4a575a","#485669"][o%4],6,.9);for(let F of[-1,1])E.cylinder([F*.105,.49,0],[F*.12,.46,.35],.1,.08,A,12),E.sphere(F*.12,.46,.35,.078,.084,.085,A,12,8),E.cylinder([F*.12,.46,.35],[F*.12,.105,.39],.078,.058,A,12),E.sphere(F*.12,.078,.45,.073,.06,.145,a("#383d3c"),12,8),E.box(F*.12,.035,.45,.14,.035,.25,a("#b8b9ad"));return E}function uu(o){let p=new s,E=a(["#dfb357","#72a0a2","#aa6357","#8c9a66"][o%4],6,.92),A=a("#506277",6,.91),F=a("#d4ad8b",0,.77),G=a("#3d342e",0,.94);p.sphere(0,.83,0,.2,.3,.145,E,14,10),p.cylinder([0,1.04,0],[0,1.17,0],.065,.06,F,10),p.sphere(0,1.34,0,.165,.19,.15,F,16,11),p.sphere(0,1.4,-.015,.17,.145,.153,G,16,9,0,1.35);for(let V of[-1,1])p.sphere(V*.06,1.36,.141,.01,.008,.008,ot.dark,8,5),p.animate([V*.19,1.04,0],V,()=>{p.cylinder([V*.19,1.02,0],[V*.27,.65,.025],.067,.045,E,10),p.sphere(V*.27,.62,.03,.048,.06,.044,F,10,7)}),p.animate([V*.09,.58,0],V*2,()=>{p.cylinder([V*.09,.58,0],[V*.11,.25,0],.079,.062,A,10),p.cylinder([V*.11,.25,0],[V*.11,.09,.025],.06,.05,A,10),p.sphere(V*.11,.055,.085,.072,.052,.115,ot.dark,10,7)});return p}let uc=Array.from({length:8},()=>[]),dc=Array.from({length:4},()=>[]),Ni=[],du=0;function Us(o,p,E=0,A=!1,F=1,G=null,V="visitor"){let at=du++,et=V==="child",Tt=at%(et?4:8),Nt={matrix:n.compose(o,0,p,E,F),info:[w(0,6.28),A?1:0,0,0]},Ut={x:o,z:p,yaw:E,scale:F,instance:Nt,walk:A,path:G,pathIndex:0,speed:w(.4,.64),group:Tt,type:V,index:at};(et?dc:uc)[Tt].push(Nt),Ni.push(Ut)}for(let[o,p]of Lt.filter(E=>["F","S","T"].includes(E.category)&&E.approach).entries())if(o%2===0){let E=p.yaw||0,A=o%3?-1:1,F=p.approach,G=F[0]-Math.sin(E)*1.05+Math.cos(E)*.95*A,V=F[1]-Math.cos(E)*1.05-Math.sin(E)*.95*A;Ki(G,V,.2)&&Us(G,V,Math.atan2(p.pos[0]-G,p.pos[1]-V),!1,w(.88,1.04))}for(let o of f.records.filter(p=>p.kind==="tent")){let p=o.yaw||0,E=o.id==="F-10"?-1.5:0;Us(o.pos[0]+Math.cos(p)*E-Math.sin(p)*.52,o.pos[1]-Math.sin(p)*E-Math.cos(p)*.52,p,!1,.93,null,"vendor")}let fc=[[[0,10],[2,9],[2,-11],[20,-12],[26,-12],[26,-2],[26,12],[16,12],[0,10]],[[27,47],[29,54],[29,63],[31,68],[31,75],[28,77],[28,70],[29,60],[27,47]],[[-41,13],[-13,13],[-12,-4],[-15,-17],[-33,-19],[-41,13]],[[19,18],[26,21],[28,32],[29,44],[27,47],[28,32],[26,21],[19,18]]];for(let o=0;o<36;o++){let p=fc[o%fc.length],E=o%p.length,A=p[E],F=p[(E+1)%p.length],G=w(0,1),V=Dr([A[0]+(F[0]-A[0])*G,A[1]+(F[1]-A[1])*G],2);if(!V)continue;let at=o%3===0;Us(V[0],V[1],Math.atan2(F[0]-A[0],F[1]-A[1]),!0,at?1:w(.88,1.05),p,at?"child":"visitor"),Ni[Ni.length-1].pathIndex=(E+1)%p.length}for(let o=0;o<7;o++)Us(W[0]+(o-3)*1.6,z[1]+9.5+o%2*.6,0,!0,.8,null,"performer");for(let o of[[7,11],[8,11.5],[24,-9],[25,-8.7],[-12,-23],[-13,-23.4],[-39,-44],[49,32],[50,33]])Ki(...o,.23)&&Us(o[0],o[1],w(0,x),!1,w(.85,1));let je={};je.base=new r(i,st,{name:"Architecture, ground and booths"}),je.details=new r(i,N,{name:"Furniture, windows and equipment"}),je.foliage=new r(i,Vt,{name:"Foliage",instances:[{matrix:n.identity(),info:[0,0,1,0]}]}),je.roof=new r(i,ge,{name:"Gym roof"}),je.signs=new r(i,Gt,{name:"Readable booth signs"}),je.distant=new r(i,oi,{name:"Approximate neighbourhood",shadow:!1}),je.flags=new r(i,Do,{name:"Fabric banners",instances:ac});let pc=Array.from({length:4},()=>[]),fu=0;for(let o=0;o<$t.length;o++){if($t[o].addedGymSeat||o%4!==1&&!($t[o].gym&&o%5===2))continue;let p=$t[o];pc[fu++%4].push({matrix:n.compose(p.x,p.gym?xt:0,p.z,p.yaw,.94),info:[0,0,0,0]})}je.seated=pc.map((o,p)=>new r(i,hu(p),{name:"Seated visitors "+p,instances:o}));let Nr=Jt(0);je.vehicle=new r(i,Qt,{name:"Generic mobility vehicle",instances:[{matrix:n.compose(Nr.x,0,Nr.z,Nr.yaw),info:[0,0,0,0]}],dynamic:!0});let mc=Array.from({length:4},(o,p)=>({matrix:n.compose(we[0]+(p%2-.5)*2,0,we[1]+(Math.floor(p/2)-.5)*2.2,p*1.8,p===3?.64:1),info:[p,0,0,0]}));je.goats=new r(i,Be(),{name:"Goats",instances:mc,dynamic:!0}),je.actors=uc.map((o,p)=>new r(i,hc(p),{name:"Visitors "+p,instances:o,dynamic:!0})),je.children=dc.map((o,p)=>new r(i,uu(p),{name:"Children "+p,instances:o,dynamic:!0})),t(.81,"看板と案内データを仕上げています"),d.upload(i.gl,matchMedia("(pointer:coarse)").matches||innerWidth<650?256:512),i.atlas=d;let gc=70,Uo=0,Fs=Nr,xc=Ni.filter(o=>o.type!=="vendor"&&o.type!=="performer");function _c(o){gc=m(o,0,100);let p=Math.round(xc.length*gc/100);xc.forEach((E,A)=>E.hidden=A>=p),Ni.filter(E=>E.type==="vendor"||E.type==="performer").forEach(E=>E.hidden=o===0),je.seated.forEach(E=>E.visible=o>10),i.shadowDirty=!0}_c(70);function pu(o,p){if(Fs=Jt(o*.88),je.vehicle.instances[0].matrix=n.compose(Fs.x,0,Fs.z,Fs.yaw),je.vehicle.updateInstances(),o-Uo>.055){let E=Math.min(.18,o-Uo);Uo=o;for(let A of Ni){if(A.walk&&A.path&&!A.hidden){let V=A.path[A.pathIndex],at=V[0]-A.x,et=V[1]-A.z,Tt=Math.hypot(at,et);if(Tt<.35)A.pathIndex=(A.pathIndex+1)%A.path.length;else{let Nt=A.x+at/Tt*A.speed*E,Ut=A.z+et/Tt*A.speed*E;Ki(Nt,Ut,.19)?(A.x=Nt,A.z=Ut,A.yaw=Math.atan2(at,et)):A.pathIndex=(A.pathIndex+1)%A.path.length}}let F=cc(A.x,A.z),G=A.yaw;A.type==="performer"&&(G=Math.sin(o*.5+A.index*.3)*.12,F+=.04+Math.max(0,Math.sin(o*2.4+A.index*.4))*.07),A.instance.matrix=n.compose(A.x,A.hidden?-100:F,A.z,G,A.scale),A.instance.info[1]=A.hidden?0:A.walk?A.type==="performer"?.8:1:0}je.actors.forEach(A=>A.updateInstances()),je.children.forEach(A=>A.updateInstances()),mc.forEach((A,F)=>{let G=F*1.8+Math.sin(o*.1+F)*.3;A.matrix=n.compose(we[0]+(F%2-.5)*2+Math.sin(o*.1+F)*.2,0,we[1]+(Math.floor(F/2)-.5)*2.2,G,F===3?.64:1)}),je.goats.updateInstances()}}return t(.9,"歩行できる経路を確認しています"),{data:f,markers:Lt,colliders:_t,buildings:Wt,campus:ue,field:We,restricted:qt,track:Rt,trackLength:Ht,meshes:je,trunks:Mt,seats:$t,atlas:d,categoryColors:D,isWalkable:Ki,walkHeight:cc,nearestWalkable:Dr,update:pu,setCrowd:_c,p:I,getCar:()=>Fs,polyInside:le,actorCount:Ni.length}};window.FestaNavigation=class{constructor(i){this.world=i,this.step=.7,this.x0=-67,this.z0=-58,this.nx=184,this.nz=244,this.size=this.nx*this.nz,this.open=new Uint8Array(this.size);for(let t=0;t<this.nz;t++)for(let e=0;e<this.nx;e++){let n=this.point(t*this.nx+e);this.open[t*this.nx+e]=i.isWalkable(n[0],n[1],.34)?1:0}}point(i){return[this.x0+i%this.nx*this.step,this.z0+Math.floor(i/this.nx)*this.step]}index(i){return Math.round((i[1]-this.z0)/this.step)*this.nx+Math.round((i[0]-this.x0)/this.step)}nearest(i){let t=Math.round((i[0]-this.x0)/this.step),e=Math.round((i[1]-this.z0)/this.step),n=-1,s=1/0;for(let r=0;r<18;r++){for(let l=-r;l<=r;l++)for(let a=-r;a<=r;a++){if(r&&Math.abs(a)!==r&&Math.abs(l)!==r)continue;let h=t+a,u=e+l;if(h<0||h>=this.nx||u<0||u>=this.nz)continue;let m=u*this.nx+h;if(!this.open[m])continue;let x=this.point(m),f=Math.hypot(x[0]-i[0],x[1]-i[1]);f<s&&(s=f,n=m)}if(n>=0)return n}return-1}lineFree(i,t,e=.3){let n=Math.hypot(t[0]-i[0],t[1]-i[1]),s=Math.ceil(n/.16);for(let r=0;r<=s;r++)if(!this.world.isWalkable(i[0]+(t[0]-i[0])*r/Math.max(1,s),i[1]+(t[1]-i[1])*r/Math.max(1,s),e))return!1;return!0}find(i,t){let e=this.nearest(i),n=this.nearest(t);if(e<0||n<0)return null;let s=new Float32Array(this.size);s.fill(1/0);let r=new Int32Array(this.size);r.fill(-1);let l=new Uint8Array(this.size),a=[],h=(b,C)=>{let v={i:b,f:C},c=a.length;for(a.push(v);c;){let S=c-1>>1;if(a[S].f<=v.f)break;a[c]=a[S],c=S}a[c]=v},u=()=>{let b=a[0],C=a.pop();if(a.length){let v=0;for(;2*v+1<a.length;){let c=2*v+1;if(c+1<a.length&&a[c+1].f<a[c].f&&c++,a[c].f>=C.f)break;a[v]=a[c],v=c}a[v]=C}return b.i},m=n%this.nx,x=Math.floor(n/this.nx),f=b=>{let C=Math.abs(b%this.nx-m),v=Math.abs(Math.floor(b/this.nx)-x);return Math.max(C,v)+.41421356*Math.min(C,v)};s[e]=0,h(e,f(e));let _=!1;for(;a.length;){let b=u();if(l[b])continue;if(l[b]=1,b===n){_=!0;break}let C=b%this.nx,v=Math.floor(b/this.nx);for(let c=-1;c<=1;c++)for(let S=-1;S<=1;S++){if(!S&&!c)continue;let D=C+S,g=v+c;if(D<0||D>=this.nx||g<0||g>=this.nz)continue;let L=g*this.nx+D;if(!this.open[L]||l[L]||S&&c&&(!this.open[v*this.nx+D]||!this.open[g*this.nx+C]))continue;let k=s[b]+(S&&c?1.41421356:1);k<s[L]&&(s[L]=k,r[L]=b,h(L,k+f(L)))}}if(!_)return null;let w=[],I=n;for(;I>=0&&(w.push(this.point(I)),I!==e);)I=r[I];w.reverse(),this.lineFree(i,w[0])&&w.unshift([...i]),this.lineFree(w[w.length-1],t)&&w.push([...t]);let T=[w[0]],d=0;for(;d<w.length-1;){let b=w.length-1;for(;b>d+1&&!this.lineFree(w[d],w[b]);)b--;T.push(w[b]),d=b}return T}};(async function(){let i=y=>document.getElementById(y),t=y=>String(y??"").replace(/[&<>"']/g,B=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[B]),e={search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',overview:'<path d="m3 8 9-5 9 5-9 5-9-5Z M3 12l9 5 9-5M3 16l9 5 9-5"/>',route:'<circle cx="5" cy="5" r="2"/><circle cx="19" cy="19" r="2"/><path d="M7 5h8a4 4 0 0 1 0 8H9a4 4 0 0 0 0 8h5"/>',settings:'<path d="M4 6h16M4 12h16M4 18h16"/><circle cx="9" cy="6" r="2" fill="currentColor"/><circle cx="16" cy="12" r="2" fill="currentColor"/><circle cx="8" cy="18" r="2" fill="currentColor"/>',help:'<circle cx="12" cy="12" r="9"/><path d="M9.3 9a2.8 2.8 0 0 1 5.4 1c0 2-2.7 2-2.7 4M12 17h.01"/>',arrow:'<path d="M4 12h15m-5-5 5 5-5 5"/>',back:'<path d="M20 12H5m5-5-5 5 5 5"/>',close:'<path d="m6 6 12 12M6 18 18 6"/>',expand:'<path d="M9 3H3v6M15 3h6v6M3 15v6h6M21 15v6h-6"/>',walk:'<circle cx="13" cy="4" r="2"/><path d="m11 9 3 2 4 1M11 8l-3 5-4 1M11 9l-1 7-4 5m4-5 5 1 2 5"/>',pin:'<path d="M19 10c0 6-7 12-7 12S5 16 5 10a7 7 0 0 1 14 0Z"/><circle cx="12" cy="10" r="2.5"/>',eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>'};function n(y){return'<svg viewBox="0 0 24 24" aria-hidden="true">'+(e[y]||e.pin)+"</svg>"}function s(y=document){y.querySelectorAll("[data-icon]").forEach(B=>B.innerHTML=n(B.dataset.icon))}s();let r=FESTA_DATA,l=[...r.records,...r.locations],a=Object.fromEntries(l.map(y=>[y.id,y])),h={F:"#a64c35",S:"#385e76",T:"#4e6c43",P:"#83503e",M:"#ab8450",I:"#28595c"},u={F:"飲食・屋台村",S:"物販・ワークショップ",T:"地域・防災・体験",P:"体育館の出演団体",M:"交流・モビリティー",I:"会場案内"},m=matchMedia("(pointer:coarse)").matches||innerWidth<650,x=matchMedia("(prefers-reduced-motion: reduce)").matches,f,_,w,I=!1,T=0,d=0,b=0,C,v=null,c={mode:"welcome",pos:[0,11],yaw:.1,pitch:0,orbitYaw:-.48,orbitPitch:.79,orbitDist:115,orbitTarget:[0,0,22],returnPos:null,selected:null,nearest:null,path:null,pathIndex:1,auto:!1,targetId:null,labels:!0,showRoof:!0,tour:!1,tourIndex:-1,tourWaiting:0,paused:!1,sheet:null,crowd:70,light:"day",distanceWalked:0,rideYaw:0,runMode:!1,quality:m?"standard":"high"},S={},D={x:0,y:0,active:!1,pid:null},g={active:!1,pid:null,x:0,y:0,moved:0},L=null,k=new Set,K=new Map;function q(y,B=4e3){i("toast").textContent=y,i("toast").classList.remove("hidden"),clearTimeout(C),C=setTimeout(()=>i("toast").classList.add("hidden"),B)}function nt(y,B){i("loadBar").style.width=Math.round(y*100)+"%",i("loadText").textContent=B}let H=()=>new Promise(y=>setTimeout(y,0));function tt(){c.mode="walk",i("welcome").classList.add("hidden"),i("hud").classList.remove("hidden"),i("minimapWrap").classList.remove("hidden"),i("bottomHint").classList.remove("hidden"),i("joystick").classList.remove("hidden"),m&&i("lookHint").classList.remove("hidden"),i("scene").focus({preventScroll:!0})}function pt(y){c.yaw=Math.atan2(y[0]-c.pos[0],-(y[1]-c.pos[1])),c.pitch=-.02}function ut(y){_&&(c.pos=_.nearestWalkable(y)||[0,11])}function vt(y="field"){if(I){if(ve(),yt(),Gt(),oe(!1),tt(),y==="field")ut([2.8,11]),pt([14,-14]);else{let B=a[y];ut(B.approach),pt(y==="GATE_MAIN"?[33,61]:[-27,-24])}c.mode="walk",st(),q(m?"左の丸で移動。画面の右側をドラッグすると見回せます。":"左の丸、WASD または矢印キーで移動。画面をドラッグして見回します。",4500)}}function dt(){I&&(ve(),yt(),oe(!1),Gt(),c.mode="welcome",i("welcome").classList.remove("hidden"),i("minimapWrap").classList.add("hidden"),i("bottomHint").classList.add("hidden"),i("nearby").classList.add("hidden"),i("joystick").classList.add("hidden"),i("lookHint").classList.add("hidden"),st())}function gt(){if(I){if(ve(),yt(),c.mode==="overview"){c.mode="walk",c.returnPos&&(c.pos=[...c.returnPos]),c.pitch=0,st();return}c.mode==="welcome"&&tt(),Gt(),oe(!1),c.returnPos=[...c.pos],c.mode="overview",c.orbitTarget=[0,0,23],c.orbitDist=158,c.orbitYaw=-.27,c.orbitPitch=.9,st(),q("ドラッグで回転、ホイールで拡大。地面を押すとその場所へ移動します。ブースの札を押すと内容を表示します。")}}function st(){let y=c.mode;if(i("speedToggle").classList.toggle("hidden",m||y!=="walk"),i("speedToggle").textContent=c.runMode?"速度：走る":"速度：歩く",i("speedToggle").setAttribute("aria-pressed",String(c.runMode)),i("speedToggle").setAttribute("aria-label",c.runMode?"走るを選択中。歩くに切り替える":"歩くを選択中。走るに切り替える"),i("overviewBtn").classList.toggle("active",y==="overview"),i("joystick").classList.toggle("hidden",y!=="walk"||!!c.sheet),i("lookHint").classList.toggle("hidden",!m||y!=="walk"||!!c.sheet),i("tourCard").classList.toggle("hidden",!c.tour),i("modeBar").classList.toggle("hidden",y==="welcome"||y==="walk"&&!c.path&&!c.tour),y==="overview")i("modeText").textContent="上空から会場を見る",i("modeAction").textContent="歩行に戻る";else if(y==="ride")i("modeText").textContent="モビリティー試乗イメージ",i("modeAction").textContent="降りる";else if(c.path){let B=a[c.targetId];i("modeText").textContent=(c.auto?"歩いて案内中：":"経路表示：")+(B?B.short:"選択した場所"),i("modeAction").textContent=c.auto?"一時停止":"自動で歩く"}else c.tour&&(i("modeText").textContent="会場ツアー",i("modeAction").textContent="終了")}function N(y){return y.kind==="performer"||y.id==="T-SCI"?a.GYM:y}function Vt(y,B=!0){if(!I)return;let U=typeof y=="string"?N(a[y]):null,$=U?.approach||(!U&&Array.isArray(y)?y:null);if(!$)return q("この団体のブース位置は資料で特定できていません。"),!1;c.mode==="welcome"&&vt("field"),c.mode==="ride"&&(c.mode="walk",ut(a.MOBILITY.approach)),c.mode="walk";let J=w.find(c.pos,$);return J?(c.path=J,c.pathIndex=1,c.auto=B,c.targetId=U?.id||null,ot(J),ve(),yt(),st(),!0):(q("ここから歩ける経路を見つけられませんでした。「この場所へ移動」で見学できます。",6e3),!1)}function ge(y,B=!1){let U=N(a[y]);return U?.approach?(c.mode==="welcome"&&tt(),Gt(),c.tour||(c.tour=!1),c.mode="walk",ut(U.approach),pt(U.pos),U.id==="GATE_MAIN"&&pt([33,61]),U.id==="GATE_WEST"&&pt([-27,-24]),U.id==="GYM"&&pt([U.pos[0],_.p(525,345)[1]]),U.id==="WC"&&pt([45,45]),ve(),yt(),st(),B||q(U.short+" に移動しました"),!0):!1}function Gt(){c.path=null,c.auto=!1,c.targetId=null,L&&(L.dispose(),L=null),st()}function ot(y){L&&L.dispose();let{Geometry:B,Mesh:U,material:$}=FestaGL,J=new B;for(let rt=0;rt<y.length-1;rt++){let Et=y[rt],ee=y[rt+1],pe=ee[0]-Et[0],St=ee[1]-Et[1],Yt=Math.hypot(pe,St);if(Yt<.01)continue;let ne=-St/Yt*.055,Fe=pe/Yt*.055;J.quad([Et[0]-ne,.088,Et[1]-Fe],[Et[0]+ne,.088,Et[1]+Fe],[ee[0]+ne,.088,ee[1]+Fe],[ee[0]-ne,.088,ee[1]-Fe],$("#b78134",0,.75,0,.13));for(let Pe=1;Pe<Yt;Pe+=2){let Je=Et[0]+pe*Pe/Yt,on=Et[1]+St*Pe/Yt;J.disk(Je,.092,on,.12,$("#dfbc77",0,.7,0,.2),10)}}let bt=y[y.length-1];J.cylinder([bt[0],.08,bt[1]],[bt[0],.15,bt[1]],.26,.26,$("#d2a558",0,.65,0,.2),30),L=new U(f,J,{name:"Navigation guide",shadow:!1})}function _t(y,B){let U=Math.max(1,Math.ceil(Math.hypot(y,B)/.15)),$=0;for(let J=0;J<U;J++){let bt=[...c.pos],rt=c.pos[0]+y/U,Et=c.pos[1]+B/U;_.isWalkable(rt,Et,.28)?c.pos=[rt,Et]:(_.isWalkable(rt,c.pos[1],.28)&&(c.pos[0]=rt),_.isWalkable(c.pos[0],Et,.28)&&(c.pos[1]=Et)),$+=Math.hypot(c.pos[0]-bt[0],c.pos[1]-bt[1])}return c.distanceWalked+=$,$}function Mt(y){if(!c.path||!c.auto)return;let B=c.path[c.pathIndex];if(!B){Lt();return}let U=B[0]-c.pos[0],$=B[1]-c.pos[1],J=Math.hypot(U,$);if(J<.16){c.pathIndex++,c.pathIndex>=c.path.length&&Lt();return}let bt=Math.min(J,y*(c.tour?2:2.35)),rt=_t(U/J*bt,$/J*bt),Et=Math.atan2(U,-$);c.yaw+=Wt(Et-c.yaw)*Math.min(1,y*3.3),c.pitch+=(0-c.pitch)*Math.min(1,y*3),rt<2e-4&&bt>.001&&(c.auto=!1,q("障害物の手前で停止しました。移動キーで位置を調整できます。"),st())}function Lt(){let y=c.targetId,B=a[y];Gt(),B&&(pt(B.pos),B.id==="GATE_MAIN"&&pt([33,61]),B.id==="GATE_WEST"&&pt([-27,-24]),k.add(y),q(B.short+" に到着しました",2600)),c.tour&&(c.tourWaiting=10,ie())}function Wt(y){return Math.atan2(Math.sin(y),Math.cos(y))}let Dt=[{id:"GATE_MAIN",title:"正門から、フェスタへ",text:"キッチンカーの並ぶ入口からスタート。会場の端から端まで、配置案の位置関係をたどります。"},{id:"F-1",title:"コーヒーのブースへ",text:"オウカ珈琲。コーヒーやホットサンドなど、予定されている内容を看板や詳細画面で読めます。"},{id:"F-8",title:"校庭の屋台村",text:"ル・ミリュウ鎌倉山をはじめ、飲食ブースは校庭の東西に配置。中央には16卓・96席のであいの広場があります。"},{id:"MEET",title:"座って、ひと息",text:"であいの広場。近くには7.2m×1.8mの屋外ステージ。机や椅子の大きさを手がかりに、空間を体験できます。"},{id:"S-5",title:"ワイワイマルシェ",text:"物販やワークショップの列へ。テントをのぞきながら、各団体の予定内容を確かめられます。"},{id:"MOBILITY",title:"モビリティーの試乗エリア",text:"配置図では幅2m・延長約135mの実走路。ここでは汎用の車両モデルを走らせています。柵の内側には歩いて入れません。"},{id:"T-15",title:"ヤギ牧場で、であう",text:"福祉農業推進機構のブース。ヤギと触れ合う企画を、校庭の北西側に配置しています。"},{id:"T-2",title:"地域と、防災と",text:"西鎌そなーずのラジオや無線の展示。地域紹介・防災・福祉などのコーナーも、飲食や物販と同じ会場で見学できます。"},{id:"GYM",title:"体育館、みんなの舞台",text:"体育館の中へ。常設の壇上舞台は配置図に従い使用せず、床面の催しとして演出。出演順案は詳細画面で読めます。"}];function $t(){I&&(ve(),yt(),Gt(),c.mode==="welcome"&&tt(),c.mode="walk",c.tour=!0,c.tourIndex=0,ge("GATE_MAIN",!0),c.tour=!0,c.tourWaiting=10,ie(),st())}function ie(){let y=Dt[c.tourIndex];y&&(i("tourCount").textContent="GUIDED WALK  "+String(c.tourIndex+1).padStart(2,"0")+" / "+Dt.length,i("tourTitle").textContent=y.title,i("tourDescription").textContent=y.text,i("tourNext").innerHTML=(c.tourIndex===Dt.length-1?"ツアーを終える":"次の場所へ")+" "+n("arrow"),i("tourCard").classList.toggle("hidden",!c.tour))}function fe(){if(c.tour){if(c.tourWaiting=0,c.tourIndex++,c.tourIndex>=Dt.length){oe(),q("会場を一周しました。このまま自由に歩けます。");return}ie(),Vt(Dt[c.tourIndex].id,!0)||(ge(Dt[c.tourIndex].id,!0),c.tourWaiting=10)}}function oe(y=!0){c.tour=!1,c.tourWaiting=0,i("tourCard").classList.add("hidden"),y&&Gt(),st()}function ue(){I&&(c.mode==="welcome"&&tt(),ve(),Gt(),oe(!1),c.mode="ride",c.rideYaw=0,c.pitch=-.06,st(),q("試乗視点です。ドラッグして周囲を見回せます。車種・速度は演出です。",5500))}function le(){c.mode==="overview"?(c.mode="walk",c.returnPos&&ut(c.returnPos),c.pitch=0):c.mode==="ride"?(c.mode="walk",ut(a.MOBILITY.approach),pt(_.track[40])):(oe(!1),Gt()),st()}function Ae(y,B){v=document.activeElement,c.sheet=B,i("sheetTitle").textContent=y,i("sheet").classList.remove("hidden"),i("sheetScrim").classList.remove("hidden"),i("sheetBack").classList.add("hidden"),i("sheetBody").scrollTop=0,P(),st(),setTimeout(()=>i("sheetClose").focus({preventScroll:!0}),0)}function ve(){c.sheet=null,i("sheet").classList.add("hidden"),i("sheetScrim").classList.add("hidden"),st(),v&&v.isConnected&&v.focus({preventScroll:!0})}let We="",xe="all";function Ie(){Ae("ブースを見つける","search"),i("sheetBody").innerHTML='<div class="search-field">'+n("search")+'<input id="searchInput" aria-label="団体名や内容から検索" placeholder="団体名・食べもの・体験から検索" value="'+t(We)+'"></div><div class="filter-row">'+[["all","すべて"],["F","飲食"],["S","物販・体験"],["T","地域・防災"],["P","舞台"],["I","会場案内"]].map(([y,B])=>'<button class="filter '+(y===xe?"active":"")+'" data-filter="'+y+'">'+B+"</button>").join("")+'</div><p class="result-count" id="resultCount"></p><div id="results"></div>',i("searchInput").addEventListener("input",y=>{We=y.target.value,Q()}),i("sheetBody").querySelectorAll("[data-filter]").forEach(y=>y.onclick=()=>{xe=y.dataset.filter,i("sheetBody").querySelectorAll("[data-filter]").forEach(B=>B.classList.toggle("active",B===y)),Q()}),Q(),setTimeout(()=>i("searchInput").focus(),30)}function Q(){let y=We.normalize("NFKC").toLowerCase().trim(),B=y.split(/\s+/).filter(Boolean),U=l.filter($=>(xe==="all"||(xe==="I"?["M","I"].includes($.category):$.category===xe))&&B.every(J=>($.id+" "+$.name+" "+$.detail).normalize("NFKC").toLowerCase().includes(J)));i("resultCount").textContent=U.length+" 項目 ／ 団体51・会場案内9（9月時点の資料）",i("results").innerHTML=U.length?U.map($=>'<button class="result" data-id="'+t($.id)+'"><span class="badge" style="background:'+h[$.category]+'">'+t($.id.startsWith("P-")?"P":$.id.includes("-")?$.id:$.id==="WC"?"WC":"案内")+'</span><span class="result-info"><strong>'+t($.name)+'</strong><small class="'+($.kind==="unplaced"?"unplaced":"")+'">'+t($.kind==="unplaced"?"位置未特定 · "+$.caption:$.caption)+"</small></span>"+n("arrow")+"</button>").join(""):'<p class="empty">該当する項目がありません。<br>短い言葉でも検索できます。</p>',i("results").querySelectorAll("[data-id]").forEach($=>$.onclick=()=>te($.dataset.id,!0))}function te(y,B=!1){let U=a[y];if(!U)return;c.selected=y,k.add(y),Ae("ブース・会場の詳細","detail"),i("sheetBack").classList.toggle("hidden",!B);let $=N(U),J=I&&!!$.approach,bt=u[U.category],rt=U.source||"配置ゾーニング 9月21日 Ver.6案（1ページ）",Et='<div class="detail-id"><span class="badge" style="background:'+h[U.category]+'">'+t(U.id.startsWith("P-")?"P":U.id.includes("-")?U.id:"案内")+"</span>"+t(bt)+'<span>／ 予定</span></div><h3 class="detail-title">'+t(U.name)+'</h3><p class="detail-caption">'+t(U.caption)+"</p>";J?Et+='<div class="detail-actions"><button class="primary" id="navigateHere">'+n("route")+' 歩いて案内</button><button class="secondary" id="jumpHere">この場所へ移動</button></div>':Et+=U.kind==="unconfirmed"?'<div class="note-box warn">今回の体育館の開始予定9件に記載がなく、出演予定は未確認です。</div>':U.kind==="unplaced"?'<div class="note-box warn">参加予定団体一覧には記載がありますが、配置図からワークショップの位置を特定できません。推測でブースを追加していません。</div>':'<div class="note-box">3D表示が起動していないため、ここでは移動機能を利用できません。団体の予定内容と参照資料は読めます。</div>',U.id==="MOBILITY"&&(Et+='<button class="secondary" id="rideBtn">動いている車両の視点で見学</button><p class="source-text">電動トライク1台の仮表示です。車体色・外観・速度は確定していません。</p>'),Et+='<div class="section-label">'+(U.category==="P"?"参加予定内容":"資料に記載された内容")+'</div><div class="detail-content">'+t(U.detail)+"</div>",(U.category==="F"||U.category==="S")&&(Et+='<div class="note-box">価格・販売内容は資料作成時点の予定です。3Dで置かれている商品は雰囲気を伝えるための模型で、実物や販売数量を示すものではありません。</div>'),(U.id==="GYM"||U.category==="P"||U.id==="T-SCI")&&(Et+='<div class="section-label">体育館内 開始予定</div>'+r.schedule.map(ee=>'<div class="schedule-row"><b>'+t(ee.time)+"</b><span>"+t(ee.name)+"</span></div>").join(""),Et+='<p class="source-text">利用者から受け取った開始予定です。終了時刻は未確認です。常設の壇上舞台は使用せず、床面の演出・椅子の並びは補完表現です。サイエンスクラフト部のワークショップは体育館で開催予定ですが、館内の正確な場所と時間は未確認です。</p>'),Et+='<div class="section-label">参照した資料</div><p class="source-text">'+t(rt)+"</p>"+(U.locationSource?'<p class="source-text">位置：'+t(U.locationSource)+"</p>":""),U.sourceType==="web"&&(Et+='<p class="source-text">提供Excelには未掲載。公式2026ページの公開内容で補足しています。</p>'),i("sheetBody").innerHTML=Et,J&&(i("navigateHere").onclick=()=>{oe(!1),Vt(y,!0)},i("jumpHere").onclick=()=>{oe(!1),ge(y)}),i("rideBtn")&&(i("rideBtn").onclick=ue)}function Me(){Ae("表示と操作の設定","settings"),i("sheetBody").innerHTML='<div class="setting-row"><label for="quality">描画品質</label><select id="quality"><option value="high">高画質 — PC向け</option><option value="standard">標準 — 軽さと品質のバランス</option><option value="low">軽量 — 小さな端末向け</option></select><small>影の解像度と描画解像度を変更します。重い場合は「標準」「軽量」を選択。</small></div><div class="setting-row"><label for="crowd">来場者の表示量 <span id="crowdValue"></span></label><input id="crowd" type="range" min="0" max="100" step="10" value="'+c.crowd+'"><small>人数は演出です。実際の来場者数や混雑予測ではありません。</small></div><div class="setting-row"><label for="light">光の雰囲気</label><select id="light"><option value="day">昼の光</option><option value="afternoon">午後の光</option></select><small>当日の天気・太陽位置を再現したものではありません。</small></div><label class="toggle-row" for="labelsToggle">近くのブース名を表示<input type="checkbox" id="labelsToggle" '+(c.labels?"checked":"")+'></label><label class="toggle-row" for="roofToggle">体育館の屋根を表示<input type="checkbox" id="roofToggle" '+(c.showRoof?"checked":"")+'></label><div class="note-box">屋根を外すと、上空から体育館の中を確認できます。歩行時には屋根の表示に関係なく出入口から入ります。</div><button class="secondary" id="fullscreenBtn">全画面表示を切り替える</button><button class="text-btn" id="captureBtn">いまの3D画面を画像として保存 '+n("arrow")+'</button><div class="section-label">動作情報</div><p class="source-text" id="performanceInfo"></p><button id="settingsHelp" class="text-btn">操作方法・資料と再現範囲 '+n("help")+"</button>",i("quality").value=c.quality,i("quality").onchange=y=>{c.quality=y.target.value,f.setQuality(c.quality),q("描画品質を変更しました")},i("crowdValue").textContent=c.crowd+"%",i("crowd").oninput=y=>{c.crowd=Number(y.target.value),_.setCrowd(c.crowd),i("crowdValue").textContent=c.crowd+"%"},i("light").value=c.light,i("light").onchange=y=>{c.light=y.target.value,f.sun=FestaGL.V.norm(c.light==="day"?[-.38,.79,.48]:[-.75,.38,.46]),f.sunColor=c.light==="day"?[1,.94,.81]:[1,.84,.65],f.sunPower=c.light==="day"?3.7:3.4,f.exposure=c.light==="day"?1.12:1.18,f.createShadow()},i("labelsToggle").onchange=y=>c.labels=y.target.checked,i("roofToggle").onchange=y=>{c.showRoof=y.target.checked,_.meshes.roof.visible=c.showRoof,f.shadowDirty=!0},i("fullscreenBtn").onclick=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{q("この表示環境では全画面表示を利用できません。")}},i("captureBtn").onclick=()=>{try{f.render(d);let y=document.createElement("a");y.href=i("scene").toDataURL("image/png"),y.download="festa2026_3d_view.png",y.click()}catch{q("画像の保存に対応していない表示環境です。")}},i("settingsHelp").onclick=()=>O(),i("performanceInfo").textContent="WebGL 2 ／ 外部通信なし ／ "+f.stats.triangles.toLocaleString()+" triangles ／ "+f.stats.draws+" draw calls（現在の場面）"}function O(){Ae("操作と、資料について","help"),i("sheetBody").innerHTML='<div class="help-section"><h3>PCで歩く</h3>'+[["左下の丸いパッド","前後・左右に移動"],["W / A / S / D・矢印キー","前後・左右に移動"],["画面をドラッグ","見回す"],["画面下の「歩く」「走る」","速度を切り替える"],["Shift ＋移動","押している間だけ走る"],["E","近くのブースの内容"],["V","上空／歩行を切り替え"],["M","会場マップ"],["Esc","閉じる・移動を止める"]].map(y=>'<div class="control-row"><span>'+t(y[0])+"</span><span>"+t(y[1])+"</span></div>").join("")+"<h3>スマートフォン・タブレット</h3><p>左下の丸いパッドで移動します。中心付近では細かく、外側では速く移動できます。画面の右側をドラッグして見回します。看板の札や「内容を見る」をタップすると、団体名と内容が読めます。端末を横向きにすると広く見渡せます。</p><h3>ブースを探す・案内を使う</h3><p>「ブース」から団体名や食べもの、体験などで検索できます。「歩いて案内」は経路を表示して自動で歩きます。移動キーやジョイスティックを使うと手動操作に戻ります。「この場所へ移動」は、そのブースの前へ直接移動します。</p><p>上空表示ではドラッグで回転、ホイール／2本指で拡大・縮小。会場マップでは点を選ぶとブース情報、歩ける場所を選ぶと直接移動します。描き直した会場マップと上空表示でも歩ける場所へ直接移動できます。</p><h3>読み取り方</h3>"+r.caveats.map(y=>"<p>"+t(y)+"</p>").join("")+'<div class="note-box">校舎は外観のみ。体育館には出入口から入れます。常設壇上舞台は資料の「使用せず」に従って閉鎖。建物の高さ・細かな外装や実際の段差は未測量です。</div><h3>参照資料</h3>'+r.sources.map(y=>'<div class="source-entry"><strong>'+t(y.type)+" · "+(y.url?'<a href="'+t(y.url)+'" target="_blank" rel="noopener noreferrer">'+t(y.name)+"</a>":t(y.name))+"</strong><p>"+t(y.description)+"</p></div>").join("")+'<h3>このアプリについて</h3><p>すべての描画・検索・経路計算は、このHTMLを開いた端末内で行います。外部通信、位置情報の取得、アクセス解析、アカウント登録はありません。上の公式サイトへのリンクを開く場合だけ外部に移動します。</p><p>描画にはThree.jsを使用し、形状、人物、看板は本アプリ向けに実装。地表テクスチャはCC0画像を使用しています。写真測量や現地撮影による3Dモデルではありません。</p><p class="source-text">テクスチャ：Gravel04 / CC0Textures、Grass 01 / linolafett（CC0、scikit-image同梱）。提供資料の権利は元の権利者に帰属します。</p></div>'}function M(y){let B=y.clientWidth,U=y.clientHeight,$=Math.min((B-18)/128,(U-18)/174);return{w:B,h:U,scale:$,ox:B/2,oy:U/2-24*$,to:J=>[B/2+J[0]*$,U/2+(J[1]-24)*$],from:(J,bt)=>[(J-B/2)/$,(bt-U/2)/$+24]}}function z(y,B=!1){if(!_||!y.clientWidth)return;let U=M(y),$=Math.min(devicePixelRatio,2),J=Math.round(U.w*$),bt=Math.round(U.h*$);(y.width!==J||y.height!==bt)&&(y.width=J,y.height=bt);let rt=y.getContext("2d");rt.setTransform($,0,0,$,0,0),rt.clearRect(0,0,U.w,U.h),rt.fillStyle="#eeeee3",rt.fillRect(0,0,U.w,U.h);let Et=(St,Yt,ne)=>{rt.beginPath(),St.forEach((Fe,Pe)=>{let[Je,on]=U.to(Fe);Pe?rt.lineTo(Je,on):rt.moveTo(Je,on)}),rt.closePath(),Yt&&(rt.fillStyle=Yt,rt.fill()),ne&&(rt.strokeStyle=ne,rt.lineWidth=1,rt.stroke())};Et(_.campus,"#d4d8cd","#b4c3b5"),Et(_.field,"#e6d8ba"),Et(_.restricted,"#ded5c1","#b5a68a"),rt.beginPath(),_.track.forEach((St,Yt)=>{let[ne,Fe]=U.to(St);Yt?rt.lineTo(ne,Fe):rt.moveTo(ne,Fe)}),rt.closePath(),rt.strokeStyle="#c09164",rt.lineWidth=Math.max(1,U.scale*2),rt.stroke();for(let St of _.buildings){let Yt=U.to([St.x-St.w/2,St.z-St.d/2]);rt.fillStyle=St.gym?"#bfccb9":"#a6b5ad",rt.fillRect(Yt[0],Yt[1],St.w*U.scale,St.d*U.scale),rt.strokeStyle="#8fa397",rt.lineWidth=.6,rt.strokeRect(Yt[0],Yt[1],St.w*U.scale,St.d*U.scale),B&&St.w*U.scale>40&&(rt.fillStyle="#4c6858",rt.font="10px sans-serif",rt.textAlign="center",rt.fillText(St.gym?"体育館":"校舎",Yt[0]+St.w*U.scale/2,Yt[1]+St.d*U.scale/2+3))}for(let St of _.markers){let[Yt,ne]=U.to(St.pos),Fe=B?3.7:2.1;if(rt.beginPath(),rt.arc(Yt,ne,Fe,0,Math.PI*2),rt.fillStyle=h[St.category],rt.fill(),B&&(rt.strokeStyle="#fcf9ee",rt.lineWidth=.7,rt.stroke(),St.id.includes("-")&&St.kind!=="performer")){rt.font="9px sans-serif",rt.textAlign="left",rt.fillStyle="#3e584b";let Pe=Yt+6,Je=ne+3;St.pos[1]<-16&&St.pos[0]>-10?(Pe=Yt,Je=ne-10,rt.save(),rt.translate(Pe,Je),rt.rotate(-Math.PI/2.8),rt.fillText(St.id,0,0),rt.restore()):St.pos[0]<1&&St.pos[1]>-16&&St.pos[1]<10?(rt.textAlign="right",rt.fillText(St.id,Yt-6,ne+3)):rt.fillText(St.id,Pe,Je)}}c.path&&(rt.beginPath(),c.path.forEach((St,Yt)=>{let[ne,Fe]=U.to(St);Yt?rt.lineTo(ne,Fe):rt.moveTo(ne,Fe)}),rt.strokeStyle="#af7b29",rt.lineWidth=B?2:1.5,rt.setLineDash([4,2]),rt.stroke(),rt.setLineDash([]));let[ee,pe]=U.to(c.pos);if(rt.save(),rt.translate(ee,pe),rt.rotate(c.yaw),rt.fillStyle="#fff",rt.beginPath(),rt.arc(0,0,B?7:5,0,Math.PI*2),rt.fill(),rt.fillStyle="#174f58",rt.beginPath(),rt.moveTo(0,B?-10:-7),rt.lineTo(B?5:4,B?6:4),rt.lineTo(0,B?3:1),rt.lineTo(B?-5:-4,B?6:4),rt.closePath(),rt.fill(),rt.restore(),rt.fillStyle="#526b5d",rt.textAlign="right",rt.font=(B?"10":"8")+"px sans-serif",B){let[St,Yt]=U.to(a.GATE_MAIN.pos);rt.textAlign="right",rt.fillText("正門",St-9,Yt-9);let[ne,Fe]=U.to(a.GATE_WEST.pos);rt.textAlign="left",rt.fillText("西ヶ谷門",ne-10,Fe+15)}}let Y=!1;function W(){I&&(P(),ve(),v=document.activeElement,i("mapModal").classList.remove("hidden"),Y=!1,i("bigmap").classList.remove("hidden"),i("originalWrap").classList.add("hidden"),i("mapToggle").textContent="会場マップ（描き直し）",i("mapExplain").textContent="ブースの点を押すと内容を表示。歩ける場所を押すと、その場所へ直接移動します。",requestAnimationFrame(()=>z(i("bigmap"),!0)),i("mapClose").focus())}function yt(){i("mapModal").classList.add("hidden")}function wt(y){return!y||!_.isWalkable(y[0],y[1],.32)?(q("建物・柵の中は選べません。歩ける場所を選択してください。"),!1):(oe(!1),Gt(),c.mode==="welcome"&&tt(),c.mode="walk",c.returnPos=null,c.pitch=0,ut(y),yt(),st(),q("選んだ場所へ移動しました"),!0)}function mt(y){let B=i("bigmap").getBoundingClientRect(),U=y.clientX-B.left,$=y.clientY-B.top,J=M(i("bigmap")),bt=null,rt=16;for(let ee of _.markers){let pe=J.to(ee.pos),St=Math.hypot(pe[0]-U,pe[1]-$);St<rt&&(rt=St,bt=ee)}if(bt){yt(),te(bt.id);return}let Et=J.from(U,$);if(!_.isWalkable(...Et,.32)){q("建物・柵の中は選べません。歩ける場所を選択してください。");return}wt(Et)}function xt(y){let B=i("originalPlan"),U=B.getBoundingClientRect();if(!B.naturalWidth||!U.width||!U.height)return;let $=(y.clientX-U.left)/U.width*660-25,J=(y.clientY-U.top)/U.height*870-35,bt=_.p($,J),rt=null,Et=16;for(let ee of _.markers){let pe=U.left+(ee.pos[0]/.22+320+25)/660*U.width,St=U.top+(ee.pos[1]/.22+290+35)/870*U.height,Yt=Math.hypot(pe-y.clientX,St-y.clientY);Yt<Et&&(Et=Yt,rt=ee)}if(rt){yt(),te(rt.id);return}wt(bt)}function It(y,B){let U=new Map,$=!1;y.addEventListener("pointerdown",J=>{U.size?$=!0:$=!1,U.set(J.pointerId,[J.clientX,J.clientY])}),y.addEventListener("pointermove",J=>{let bt=U.get(J.pointerId);bt&&Math.hypot(J.clientX-bt[0],J.clientY-bt[1])>8&&($=!0)}),y.addEventListener("pointerup",J=>U.delete(J.pointerId)),y.addEventListener("pointercancel",J=>{U.delete(J.pointerId),$=!0}),y.addEventListener("click",J=>{$||B(J)})}function Xt(){for(let y of _.markers){let B=document.createElement("button");B.className="world-label hidden",B.style.setProperty("--accent",h[y.category]),B.setAttribute("aria-label",y.name+" の内容を見る"),B.innerHTML="<b>"+t(y.id.includes("-")?y.id:y.id==="WC"?"WC":"")+"</b><span>"+t(y.short)+"</span>",B.onclick=U=>{U.stopPropagation(),te(y.id)},i("labels").appendChild(B),K.set(y.id,B)}}function At(){if(!I)return;let y=c.mode==="overview",B=c.labels&&c.mode!=="welcome"&&!c.sheet&&i("mapModal").classList.contains("hidden"),U=[];for(let J of _.markers){let bt=K.get(J.id);if(bt.classList.add("hidden"),!B)continue;let rt=Math.hypot(f.camera.eye[0]-J.marker[0],f.camera.eye[2]-J.marker[2]);if(!y&&rt>24)continue;let Et=f.project(J.marker);if(!(!Et||Et.z>1||Et.x<35||Et.x>innerWidth-35||Et.y<112||Et.y>innerHeight-90)){if(!y){let ee=!1,pe=f.camera.eye;for(let St of _.buildings){if(St.gym){let Yt=pe[0]>St.x-St.w/2&&pe[0]<St.x+St.w/2&&pe[2]>St.z-St.d/2&&pe[2]<St.z+St.d/2,ne=J.marker[0]>St.x-St.w/2&&J.marker[0]<St.x+St.w/2&&J.marker[2]>St.z-St.d/2&&J.marker[2]<St.z+St.d/2;Yt!==ne&&rt>6&&(ee=!0);continue}for(let Yt=.1;Yt<.96;Yt+=.09){let ne=pe[0]+(J.marker[0]-pe[0])*Yt,Fe=pe[2]+(J.marker[2]-pe[2])*Yt,Pe=pe[1]+(J.marker[1]-pe[1])*Yt;if(Math.abs(ne-St.x)<St.w/2&&Math.abs(Fe-St.z)<St.d/2&&Pe<St.h){ee=!0;break}}if(ee)break}if(ee)continue}U.push({r:J,el:bt,pr:Et,d:rt})}}U.sort((J,bt)=>J.d-bt.d);let $=[];for(let J of U){if($.length>=(y?20:m?4:7))break;let bt=Math.min(m?160:220,45+J.r.short.length*10);$.some(rt=>Math.abs(rt.pr.x-J.pr.x)<(rt.width+bt)/2+7&&Math.abs(rt.pr.y-J.pr.y)<34)||(J.width=bt,J.el.style.left=J.pr.x+"px",J.el.style.top=J.pr.y+"px",J.el.classList.remove("hidden"),$.push(J))}}function Ct(){if(!I)return;let y=null,B=4.8;if(c.mode==="walk")for(let rt of _.markers){if(!rt.approach)continue;let Et=Math.hypot(c.pos[0]-rt.approach[0],c.pos[1]-rt.approach[1]);Et<B&&(B=Et,y=rt)}c.nearest=y?.id||null;let U=y&&!c.sheet&&c.mode==="walk"&&!c.tour;i("nearby").classList.toggle("hidden",!U),U&&(i("nearCategory").textContent=y.id.includes("-")?y.id:y.id==="WC"?"WC":"案内",i("nearCategory").style.background=h[y.category],i("nearCaption").textContent=u[y.category],i("nearName").textContent=y.short);let[$,J]=c.pos,bt=$>33&&$<57.5&&J>2.6&&J<47?"体育館":J>48?"正門・キッチンカーエリア":J<-25?"モビリティー・であいの広場":$<-13?"アウトドアーエリア":"校庭・にぎわいゾーン";i("locationText").textContent=c.mode==="overview"?"会場全体":c.mode==="ride"?"モビリティー試乗":bt}let zt=new Map,Kt=0;i("scene").addEventListener("pointerdown",y=>{if(!(!I||c.sheet||c.mode==="welcome")){if(zt.set(y.pointerId,[y.clientX,y.clientY]),zt.size===2){g.multi=!0;let B=[...zt.values()];Kt=Math.hypot(B[0][0]-B[1][0],B[0][1]-B[1][1])}g.active=!0,g.pid=y.pointerId,g.x=y.clientX,g.y=y.clientY,g.moved=0,g.multi=zt.size>1,i("scene").setPointerCapture(y.pointerId)}}),i("scene").addEventListener("pointermove",y=>{if(!zt.has(y.pointerId))return;if(zt.set(y.pointerId,[y.clientX,y.clientY]),zt.size===2&&c.mode==="overview"){let $=[...zt.values()],J=Math.hypot($[0][0]-$[1][0],$[0][1]-$[1][1]);c.orbitDist=FestaGL.clamp(c.orbitDist*Kt/Math.max(1,J),25,190),Kt=J;return}if(!g.active||g.pid!==y.pointerId)return;let B=y.clientX-g.x,U=y.clientY-g.y;g.x=y.clientX,g.y=y.clientY,g.moved+=Math.abs(B)+Math.abs(U),c.mode==="overview"?(c.orbitYaw-=B*.004,c.orbitPitch=FestaGL.clamp(c.orbitPitch+U*.003,.18,1.48)):(c.mode==="ride"?c.rideYaw+=B*.004:c.yaw-=B*.004,c.pitch=FestaGL.clamp(c.pitch+U*.0035,-1.15,1.15))});function re(y){let B=y.type==="pointerup"&&c.mode==="overview"&&g.pid===y.pointerId&&zt.size===1&&!g.multi&&g.moved<=8;if(zt.delete(y.pointerId),g.pid===y.pointerId&&(g.active=!1),B){let U=i("scene").getBoundingClientRect(),$=f.groundPoint(y.clientX-U.left,y.clientY-U.top);$&&wt([$[0],$[2]])}}i("scene").addEventListener("pointerup",re),i("scene").addEventListener("pointercancel",re),i("scene").addEventListener("contextmenu",y=>y.preventDefault()),i("scene").addEventListener("wheel",y=>{c.mode==="overview"&&(y.preventDefault(),c.orbitDist=FestaGL.clamp(c.orbitDist*Math.exp(y.deltaY*.001),25,190))},{passive:!1}),i("joystick").addEventListener("pointerdown",y=>{y.preventDefault(),D.pid=y.pointerId,D.active=!0,i("joystick").setPointerCapture(y.pointerId),Z(y),c.auto&&(c.auto=!1,oe(!1),st())}),i("joystick").addEventListener("pointermove",y=>{D.pid===y.pointerId&&Z(y)});function Z(y){let B=i("joystick").getBoundingClientRect(),U=y.clientX-(B.left+B.width/2),$=y.clientY-(B.top+B.height/2),J=Math.hypot(U,$),bt=37;J>bt&&(U*=bt/J,$*=bt/J),D.x=U/bt,D.y=-$/bt,i("joyKnob").style.transform="translate("+U+"px,"+$+"px)"}function Pt(){D.x=D.y=0,D.active=!1,D.pid=null,i("joyKnob").style.transform=""}i("joystick").addEventListener("pointerup",Pt),i("joystick").addEventListener("pointercancel",Pt);function P(){for(let y in S)S[y]=!1;Pt()}window.addEventListener("blur",P),document.addEventListener("visibilitychange",()=>{P(),T=0}),document.addEventListener("keydown",y=>{if(!I)return;let B=/INPUT|SELECT|TEXTAREA/.test(document.activeElement?.tagName);if(y.code==="Escape"){y.preventDefault(),i("mapModal").classList.contains("hidden")?c.sheet?ve():le():yt();return}if(y.code==="Tab"&&(c.sheet||!i("mapModal").classList.contains("hidden"))){let U=c.sheet?i("sheet"):i("mapModal"),$=[...U.querySelectorAll("button,a,input,select")].filter(J=>!J.closest(".hidden")&&!J.disabled);if($.length){let J=$[0],bt=$[$.length-1];y.shiftKey&&document.activeElement===J?(bt.focus(),y.preventDefault()):!y.shiftKey&&document.activeElement===bt&&(J.focus(),y.preventDefault())}return}B||c.sheet||!i("mapModal").classList.contains("hidden")||(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight"].includes(y.code)&&(y.preventDefault(),S[y.code]=!0,(c.auto||c.tour)&&(c.auto=!1,oe(!1),st())),!y.repeat&&(y.code==="KeyE"&&c.nearest&&te(c.nearest),y.code==="KeyV"&&gt(),y.code==="KeyM"&&W(),y.code==="KeyT"&&$t(),y.code==="KeyF"&&Ie()))}),document.addEventListener("keyup",y=>S[y.code]=!1);function X(y){if(!I||c.paused)return;if(_.update(d,y),c.mode==="walk"&&!c.sheet&&i("mapModal").classList.contains("hidden")){let $=(S.KeyW||S.ArrowUp?1:0)-(S.KeyS||S.ArrowDown?1:0)+D.y,J=(S.KeyD||S.ArrowRight?1:0)-(S.KeyA||S.ArrowLeft?1:0)+D.x,bt=Math.hypot($,J);if(bt>.03){bt>1&&($/=bt,J/=bt);let Et=S.KeyW||S.ArrowUp||S.KeyS||S.ArrowDown||S.KeyD||S.ArrowRight||S.KeyA||S.ArrowLeft?c.runMode||S.ShiftLeft||S.ShiftRight?4.6:3:2.3+2.3*Math.min(bt,1);_t((Math.sin(c.yaw)*$+Math.cos(c.yaw)*J)*Et*y,(-Math.cos(c.yaw)*$+Math.sin(c.yaw)*J)*Et*y)}else Mt(y);c.tour&&c.tourWaiting>0&&!x&&(c.tourWaiting-=y,c.tourWaiting<=0&&fe())}let B,U;if(c.mode==="overview"){let $=c.orbitTarget,J=c.orbitDist,bt=Math.cos(c.orbitPitch);B=[$[0]+Math.sin(c.orbitYaw)*J*bt,Math.sin(c.orbitPitch)*J,$[2]+Math.cos(c.orbitYaw)*J*bt],U=[...$]}else if(c.mode==="welcome"){let $=x?0:Math.sin(d*.085)*.8;B=[2.2+$,2.2,11.5],U=[15+$,2,-13]}else if(c.mode==="ride"){let $=_.getCar();B=[$.x+Math.sin($.yaw)*1.28,1.68,$.z+Math.cos($.yaw)*1.28];let J=$.yaw+c.rideYaw;U=[B[0]+Math.sin(J)*Math.cos(c.pitch),B[1]+Math.sin(c.pitch),B[2]+Math.cos(J)*Math.cos(c.pitch)],c.pos=[$.x,$.z]}else{let J=(Math.abs(D.x)+Math.abs(D.y)||S.KeyW||S.KeyA||S.KeyS||S.KeyD||c.auto)&&!x?Math.sin(c.distanceWalked*8)*.017:0;B=[c.pos[0],1.68+_.walkHeight(c.pos[0],c.pos[1])+J,c.pos[1]],U=[B[0]+Math.sin(c.yaw)*Math.cos(c.pitch),B[1]+Math.sin(c.pitch),B[2]-Math.cos(c.yaw)*Math.cos(c.pitch)]}f.camera.near=c.mode==="overview"?1:.09,f.camera.eye=B,f.camera.target=U}function it(y){if(!I)return;if(c.testFreeze){requestAnimationFrame(it);return}let B=T?Math.min(.12,(y-T)/1e3):.016;T=y,document.hidden||(c.paused||(d+=B),X(B),f.render(d),b+=B,b>.13&&(b=0,At(),Ct(),z(i("minimap")),!i("mapModal").classList.contains("hidden")&&!Y&&z(i("bigmap"),!0))),requestAnimationFrame(it)}i("homeBtn").onclick=dt,i("startBtn").onclick=()=>vt("field"),i("startMain").onclick=()=>vt("GATE_MAIN"),i("startWest").onclick=()=>vt("GATE_WEST"),i("welcomeOverview").onclick=gt,i("searchBtn").onclick=Ie,i("overviewBtn").onclick=gt,i("tourBtn").onclick=$t,i("settingsBtn").onclick=Me,i("helpBtn").onclick=O,i("sheetClose").onclick=ve,i("sheetScrim").onclick=ve,i("sheetBack").onclick=Ie,i("nearOpen").onclick=()=>c.nearest&&te(c.nearest),i("mapBtn").onclick=W,i("mapClose").onclick=yt,It(i("bigmap"),mt),It(i("originalPlan"),xt),i("speedToggle").onclick=()=>{c.runMode=!c.runMode,st()},i("modeExit").onclick=le,i("modeAction").onclick=()=>{c.mode==="overview"||c.mode==="ride"?le():c.path?(c.auto=!c.auto,st()):c.tour&&oe()},i("tourNext").onclick=fe,i("tourStop").onclick=()=>oe(),i("mapToggle").onclick=()=>{Y=!Y,i("bigmap").classList.toggle("hidden",Y),i("originalWrap").classList.toggle("hidden",!Y),i("mapToggle").textContent=Y?"案内マップへ戻る":"会場マップ（描き直し）",i("mapExplain").textContent=Y?"3D会場と同じ配置から描き直したマップです。縦にスクロールし、歩ける場所を押すと直接移動します。":"ブースの点を押すと内容を表示。歩ける場所を押すと、その場所へ直接移動します。",Y||z(i("bigmap"),!0)},i("mapModal").onclick=y=>{y.target===i("mapModal")&&yt()},i("originalPlan").src="./assets/venue-map.svg",window.addEventListener("resize",()=>{f&&f.resize(),_&&(z(i("minimap")),i("mapModal").classList.contains("hidden")||z(i("bigmap"),!0))});try{await H(),f=new FestaGL.Renderer(i("scene"),c.quality),_=await buildFestaWorld(f,nt),await H(),w=new FestaNavigation(_),Xt(),nt(1,"会場の準備ができました"),I=!0,window.__FESTA_TEST__={ready:!0,renderer:f,world:_,nav:w,state:c,byId:a,start:vt,teleport:ge,routeTo:Vt,showDetail:te,showSearch:Ie,showSettings:Me,showHelp:O,showMap:W,toOverview:gt,ride:ue,exitMode:le,tick:X,move:_t,stops:Dt,beginTour:$t,nextTour:fe,stopTour:oe,stopRoute:Gt,closeSheet:ve,get animTime(){return d},render:()=>{X(.016),f.render(d),At(),Ct(),z(i("minimap"))}},X(.016),f.render(0),i("loading").classList.add("hidden"),i("hud").classList.remove("hidden"),i("welcome").classList.remove("hidden"),requestAnimationFrame(it),i("scene").addEventListener("webglcontextlost",y=>{y.preventDefault(),c.paused=!0,q("描画が停止しました。ページを再読み込みすると再開できます。",3e4)})}catch(y){console.error(y),i("loading").innerHTML='<div class="loading-inner"><span class="eyebrow">3D表示を開始できませんでした</span><h1 style="font-size:26px">ブース情報は読めます。</h1><p>'+t(y.message)+'</p><p>WebGL 2対応のChrome・Edge・Safariで、このHTMLをブラウザとして開くと3D表示を利用できます。端末のグラフィックアクセラレーション設定も影響します。</p><button id="fallbackList" class="primary">参加団体一覧を読む</button><button id="fallbackPlan" class="secondary" style="margin-top:10px">配置図を見る</button></div>',i("fallbackList").onclick=()=>{Ie(),i("sheet").style.zIndex=110,i("sheetScrim").style.zIndex=109},i("fallbackPlan").onclick=()=>{let B=window.open();if(B){B.document.title="会場配置図";let U=B.document.createElement("img");U.src="./assets/venue-map.svg",U.style.maxWidth="100%",B.document.body.appendChild(U)}},window.__FESTA_TEST__={ready:!1,error:y.message}}})();})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
