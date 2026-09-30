(()=>{var gh=0,Fl=1,xh=2;var is=1,_h=2,ks=3,Vi=0,Mn=1,kn=2,hi=0,zs=1,Ol=2,Bl=3,kl=4,yh=5;var ss=100,vh=101,Mh=102,bh=103,Sh=104,wh=200,Th=201,Eh=202,Ah=203,zl=204,Vl=205,Ch=206,Rh=207,Ih=208,Ph=209,Lh=210,Dh=211,Nh=212,Uh=213,Fh=214,Ma=0,ba=1,Sa=2,As=3,wa=4,Ta=5,Ea=6,Aa=7,Gl=0,Oh=1,Bh=2,Kn=0,Hl=1,Wl=2,Xl=3,Lr=4,ql=5,Yl=6,Zl=7;var Jl=300,Gi=301,rs=302,$a=303,Ka=304,Dr=306,Cs=1e3,ri=1001,Ca=1002,cn=1003,kh=1004;var Nr=1005;var nn=1006,ja=1007;var ui=1008;var An=1009,$l=1010,Kl=1011,Vs=1012,Qa=1013,jn=1014,Hn=1015,Qn=1016,eo=1017,to=1018,Gs=1020,jl=35902,Ql=35899,ec=1021,tc=1022,Wn=1023,ai=1026,Hi=1027,no=1028,io=1029,Wi=1030,so=1031;var ro=1033,Ur=33776,Fr=33777,Or=33778,Br=33779,ao=35840,oo=35841,lo=35842,co=35843,ho=36196,uo=37492,fo=37496,po=37488,mo=37489,kr=37490,go=37491,xo=37808,_o=37809,yo=37810,vo=37811,Mo=37812,bo=37813,So=37814,wo=37815,To=37816,Eo=37817,Ao=37818,Co=37819,Ro=37820,Io=37821,Po=36492,Lo=36494,Do=36495,No=36283,Uo=36284,zr=36285,Fo=36286;var or=2300,Ra=2301,ya=2302,Cl=2303,Rl=2400,Il=2401,Pl=2402;var zh=3200,nc=3201;var Oo=0,Vh=1,Ti="",un="srgb",lr="srgb-linear",cr="linear",Nt="srgb";var va=7680;var Gh=519,Hh=512,Wh=513,Xh=514,Bo=515,qh=516,Yh=517,ko=518,Zh=519,ic=35044,zo=35048;var Vr="300 es",$n=2e3,Rs=2001;function qu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Yu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function hr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Jh(){let i=hr("canvas");return i.style.display="block",i}var Xc={},Is=null;function ur(...i){let e="THREE."+i.shift();Is?Is("log",e,...i):console.log(e,...i)}function $h(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function lt(...i){i=$h(i);let e="THREE."+i.shift();if(Is)Is("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ot(...i){i=$h(i);let e="THREE."+i.shift();if(Is)Is("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function es(...i){let e=i.join(" ");e in Xc||(Xc[e]=!0,lt(...i))}function Kh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var jh={[Ma]:ba,[Sa]:Ea,[wa]:Aa,[As]:Ta,[ba]:Ma,[Ea]:Sa,[Aa]:wa,[Ta]:As},oi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,l=s.length;r<l;r++)s[r].call(this,e);e.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var rl=Math.PI/180,Ia=180/Math.PI;function Ni(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function Tt(i,e,t){return Math.max(e,Math.min(t,i))}function Zu(i,e){return(i%e+e)%e}function al(i,e,t){return(1-t)*i+t*e}function si(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var lc=class lc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,l=this.y-e.y;return this.x=r*n-l*s+e.x,this.y=r*s+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};lc.prototype.isVector2=!0;var Mt=lc,li=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,l,a){let c=n[s+0],h=n[s+1],g=n[s+2],_=n[s+3],f=r[l+0],y=r[l+1],S=r[l+2],P=r[l+3];if(_!==P||c!==f||h!==y||g!==S){let T=c*f+h*y+g*S+_*P;T<0&&(f=-f,y=-y,S=-S,P=-P,T=-T);let d=1-a;if(T<.9995){let b=Math.acos(T),A=Math.sin(b);d=Math.sin(d*b)/A,a=Math.sin(a*b)/A,c=c*d+f*a,h=h*d+y*a,g=g*d+S*a,_=_*d+P*a}else{c=c*d+f*a,h=h*d+y*a,g=g*d+S*a,_=_*d+P*a;let b=1/Math.sqrt(c*c+h*h+g*g+_*_);c*=b,h*=b,g*=b,_*=b}}e[t]=c,e[t+1]=h,e[t+2]=g,e[t+3]=_}static multiplyQuaternionsFlat(e,t,n,s,r,l){let a=n[s],c=n[s+1],h=n[s+2],g=n[s+3],_=r[l],f=r[l+1],y=r[l+2],S=r[l+3];return e[t]=a*S+g*_+c*y-h*f,e[t+1]=c*S+g*f+h*_-a*y,e[t+2]=h*S+g*y+a*f-c*_,e[t+3]=g*S-a*_-c*f-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,l=e._order,a=Math.cos,c=Math.sin,h=a(n/2),g=a(s/2),_=a(r/2),f=c(n/2),y=c(s/2),S=c(r/2);switch(l){case"XYZ":this._x=f*g*_+h*y*S,this._y=h*y*_-f*g*S,this._z=h*g*S+f*y*_,this._w=h*g*_-f*y*S;break;case"YXZ":this._x=f*g*_+h*y*S,this._y=h*y*_-f*g*S,this._z=h*g*S-f*y*_,this._w=h*g*_+f*y*S;break;case"ZXY":this._x=f*g*_-h*y*S,this._y=h*y*_+f*g*S,this._z=h*g*S+f*y*_,this._w=h*g*_-f*y*S;break;case"ZYX":this._x=f*g*_-h*y*S,this._y=h*y*_+f*g*S,this._z=h*g*S-f*y*_,this._w=h*g*_+f*y*S;break;case"YZX":this._x=f*g*_+h*y*S,this._y=h*y*_+f*g*S,this._z=h*g*S-f*y*_,this._w=h*g*_-f*y*S;break;case"XZY":this._x=f*g*_-h*y*S,this._y=h*y*_-f*g*S,this._z=h*g*S+f*y*_,this._w=h*g*_+f*y*S;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],l=t[1],a=t[5],c=t[9],h=t[2],g=t[6],_=t[10],f=n+a+_;if(f>0){let y=.5/Math.sqrt(f+1);this._w=.25/y,this._x=(g-c)*y,this._y=(r-h)*y,this._z=(l-s)*y}else if(n>a&&n>_){let y=2*Math.sqrt(1+n-a-_);this._w=(g-c)/y,this._x=.25*y,this._y=(s+l)/y,this._z=(r+h)/y}else if(a>_){let y=2*Math.sqrt(1+a-n-_);this._w=(r-h)/y,this._x=(s+l)/y,this._y=.25*y,this._z=(c+g)/y}else{let y=2*Math.sqrt(1+_-n-a);this._w=(l-s)/y,this._x=(r+h)/y,this._y=(c+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,l=e._w,a=t._x,c=t._y,h=t._z,g=t._w;return this._x=n*g+l*a+s*h-r*c,this._y=s*g+l*c+r*a-n*h,this._z=r*g+l*h+n*c-s*a,this._w=l*g-n*a-s*c-r*h,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,l=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,l=-l,a=-a);let c=1-t;if(a<.9995){let h=Math.acos(a),g=Math.sin(h);c=Math.sin(c*h)/g,t=Math.sin(t*h)/g,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+l*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+l*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},cc=class cc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,l=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*l,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*l,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*l,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,l=e.y,a=e.z,c=e.w,h=2*(l*s-a*n),g=2*(a*t-r*s),_=2*(r*n-l*t);return this.x=t+c*h+l*_-a*g,this.y=n+c*g+a*h-r*_,this.z=s+c*_+r*g-l*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,l=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*l-n*c,this.z=n*a-s*l,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ol.copy(this).projectOnVector(e),this.sub(ol)}reflect(e){return this.sub(ol.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};cc.prototype.isVector3=!0;var ce=cc,ol=new ce,qc=new li,hc=class hc{constructor(e,t,n,s,r,l,a,c,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,l,a,c,h)}set(e,t,n,s,r,l,a,c,h){let g=this.elements;return g[0]=e,g[1]=s,g[2]=a,g[3]=t,g[4]=r,g[5]=c,g[6]=n,g[7]=l,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,l=n[0],a=n[3],c=n[6],h=n[1],g=n[4],_=n[7],f=n[2],y=n[5],S=n[8],P=s[0],T=s[3],d=s[6],b=s[1],A=s[4],M=s[7],u=s[2],w=s[5],N=s[8];return r[0]=l*P+a*b+c*u,r[3]=l*T+a*A+c*w,r[6]=l*d+a*M+c*N,r[1]=h*P+g*b+_*u,r[4]=h*T+g*A+_*w,r[7]=h*d+g*M+_*N,r[2]=f*P+y*b+S*u,r[5]=f*T+y*A+S*w,r[8]=f*d+y*M+S*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],l=e[4],a=e[5],c=e[6],h=e[7],g=e[8];return t*l*g-t*a*h-n*r*g+n*a*c+s*r*h-s*l*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],l=e[4],a=e[5],c=e[6],h=e[7],g=e[8],_=g*l-a*h,f=a*c-g*r,y=h*r-l*c,S=t*_+n*f+s*y;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);let P=1/S;return e[0]=_*P,e[1]=(s*h-g*n)*P,e[2]=(a*n-s*l)*P,e[3]=f*P,e[4]=(g*t-s*c)*P,e[5]=(s*r-a*t)*P,e[6]=y*P,e[7]=(n*c-h*t)*P,e[8]=(l*t-n*r)*P,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,l,a){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*l+h*a)+l+e,-s*h,s*c,-s*(-h*l+c*a)+a+t,0,0,1),this}scale(e,t){return es("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ll.makeScale(e,t)),this}rotate(e){return es("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ll.makeRotation(-e)),this}translate(e,t){return es("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ll.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};hc.prototype.isMatrix3=!0;var pt=hc,ll=new pt,Yc=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zc=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ju(){let i={enabled:!0,workingColorSpace:lr,spaces:{},convert:function(s,r,l){return this.enabled===!1||r===l||!r||!l||(this.spaces[r].transfer===Nt&&(s.r=Si(s.r),s.g=Si(s.g),s.b=Si(s.b)),this.spaces[r].primaries!==this.spaces[l].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Nt&&(s.r=Es(s.r),s.g=Es(s.g),s.b=Es(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ti?cr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,l){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return es("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return es("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[lr]:{primaries:e,whitePoint:n,transfer:cr,toXYZ:Yc,fromXYZ:Zc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:e,whitePoint:n,transfer:Nt,toXYZ:Yc,fromXYZ:Zc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:un}}}),i}var bt=Ju();function Si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Es(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ds,Pa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ds===void 0&&(ds=hr("canvas")),ds.width=e.width,ds.height=e.height;let s=ds.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ds}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=hr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let l=0;l<r.length;l++)r[l]=Si(r[l]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Si(t[n]/255)*255):t[n]=Si(t[n]);return{data:t,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},$u=0,Ps=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=Ni(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let l=0,a=s.length;l<a;l++)s[l].isDataTexture?r.push(cl(s[l].image)):r.push(cl(s[l]))}else r=cl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function cl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Pa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}var Ku=0,hl=new ce,Tn=class i extends oi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ri,s=ri,r=nn,l=ui,a=Wn,c=An,h=i.DEFAULT_ANISOTROPY,g=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=Ni(),this.name="",this.source=new Ps(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=l,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(hl).x}get height(){return this.source.getSize(hl).y}get depth(){return this.source.getSize(hl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){lt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){lt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cs:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case Ca:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cs:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case Ca:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=Jl;Tn.DEFAULT_ANISOTROPY=1;var uc=class uc{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*s+l[12]*r,this.y=l[1]*t+l[5]*n+l[9]*s+l[13]*r,this.z=l[2]*t+l[6]*n+l[10]*s+l[14]*r,this.w=l[3]*t+l[7]*n+l[11]*s+l[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,h=c[0],g=c[4],_=c[8],f=c[1],y=c[5],S=c[9],P=c[2],T=c[6],d=c[10];if(Math.abs(g-f)<.01&&Math.abs(_-P)<.01&&Math.abs(S-T)<.01){if(Math.abs(g+f)<.1&&Math.abs(_+P)<.1&&Math.abs(S+T)<.1&&Math.abs(h+y+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(h+1)/2,M=(y+1)/2,u=(d+1)/2,w=(g+f)/4,N=(_+P)/4,x=(S+T)/4;return A>M&&A>u?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=w/n,r=N/n):M>u?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=w/s,r=x/s):u<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(u),n=N/r,s=x/r),this.set(n,s,r,t),this}let b=Math.sqrt((T-S)*(T-S)+(_-P)*(_-P)+(f-g)*(f-g));return Math.abs(b)<.001&&(b=1),this.x=(T-S)/b,this.y=(_-P)/b,this.z=(f-g)/b,this.w=Math.acos((h+y+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this.w=Tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this.w=Tt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};uc.prototype.isVector4=!0;var Jt=uc,La=class extends oi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Jt(0,0,e,t),this.scissorTest=!1,this.viewport=new Jt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Tn(s),l=n.count;for(let a=0;a<l;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ps(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},En=class extends La{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ts=class extends Tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Da=class extends Tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ja=class Ja{constructor(e,t,n,s,r,l,a,c,h,g,_,f,y,S,P,T){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,l,a,c,h,g,_,f,y,S,P,T)}set(e,t,n,s,r,l,a,c,h,g,_,f,y,S,P,T){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=l,d[9]=a,d[13]=c,d[2]=h,d[6]=g,d[10]=_,d[14]=f,d[3]=y,d[7]=S,d[11]=P,d[15]=T,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ja().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/fs.setFromMatrixColumn(e,0).length(),r=1/fs.setFromMatrixColumn(e,1).length(),l=1/fs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,l=Math.cos(n),a=Math.sin(n),c=Math.cos(s),h=Math.sin(s),g=Math.cos(r),_=Math.sin(r);if(e.order==="XYZ"){let f=l*g,y=l*_,S=a*g,P=a*_;t[0]=c*g,t[4]=-c*_,t[8]=h,t[1]=y+S*h,t[5]=f-P*h,t[9]=-a*c,t[2]=P-f*h,t[6]=S+y*h,t[10]=l*c}else if(e.order==="YXZ"){let f=c*g,y=c*_,S=h*g,P=h*_;t[0]=f+P*a,t[4]=S*a-y,t[8]=l*h,t[1]=l*_,t[5]=l*g,t[9]=-a,t[2]=y*a-S,t[6]=P+f*a,t[10]=l*c}else if(e.order==="ZXY"){let f=c*g,y=c*_,S=h*g,P=h*_;t[0]=f-P*a,t[4]=-l*_,t[8]=S+y*a,t[1]=y+S*a,t[5]=l*g,t[9]=P-f*a,t[2]=-l*h,t[6]=a,t[10]=l*c}else if(e.order==="ZYX"){let f=l*g,y=l*_,S=a*g,P=a*_;t[0]=c*g,t[4]=S*h-y,t[8]=f*h+P,t[1]=c*_,t[5]=P*h+f,t[9]=y*h-S,t[2]=-h,t[6]=a*c,t[10]=l*c}else if(e.order==="YZX"){let f=l*c,y=l*h,S=a*c,P=a*h;t[0]=c*g,t[4]=P-f*_,t[8]=S*_+y,t[1]=_,t[5]=l*g,t[9]=-a*g,t[2]=-h*g,t[6]=y*_+S,t[10]=f-P*_}else if(e.order==="XZY"){let f=l*c,y=l*h,S=a*c,P=a*h;t[0]=c*g,t[4]=-_,t[8]=h*g,t[1]=f*_+P,t[5]=l*g,t[9]=y*_-S,t[2]=S*_-y,t[6]=a*g,t[10]=P*_+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ju,e,Qu)}lookAt(e,t,n){let s=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Ci.crossVectors(n,Dn),Ci.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Ci.crossVectors(n,Dn)),Ci.normalize(),Qr.crossVectors(Dn,Ci),s[0]=Ci.x,s[4]=Qr.x,s[8]=Dn.x,s[1]=Ci.y,s[5]=Qr.y,s[9]=Dn.y,s[2]=Ci.z,s[6]=Qr.z,s[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,l=n[0],a=n[4],c=n[8],h=n[12],g=n[1],_=n[5],f=n[9],y=n[13],S=n[2],P=n[6],T=n[10],d=n[14],b=n[3],A=n[7],M=n[11],u=n[15],w=s[0],N=s[4],x=s[8],D=s[12],V=s[1],$=s[5],Z=s[9],se=s[13],X=s[2],ne=s[6],de=s[10],ue=s[14],ve=s[3],fe=s[7],ee=s[11],C=s[15];return r[0]=l*w+a*V+c*X+h*ve,r[4]=l*N+a*$+c*ne+h*fe,r[8]=l*x+a*Z+c*de+h*ee,r[12]=l*D+a*se+c*ue+h*C,r[1]=g*w+_*V+f*X+y*ve,r[5]=g*N+_*$+f*ne+y*fe,r[9]=g*x+_*Z+f*de+y*ee,r[13]=g*D+_*se+f*ue+y*C,r[2]=S*w+P*V+T*X+d*ve,r[6]=S*N+P*$+T*ne+d*fe,r[10]=S*x+P*Z+T*de+d*ee,r[14]=S*D+P*se+T*ue+d*C,r[3]=b*w+A*V+M*X+u*ve,r[7]=b*N+A*$+M*ne+u*fe,r[11]=b*x+A*Z+M*de+u*ee,r[15]=b*D+A*se+M*ue+u*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],l=e[1],a=e[5],c=e[9],h=e[13],g=e[2],_=e[6],f=e[10],y=e[14],S=e[3],P=e[7],T=e[11],d=e[15],b=c*y-h*f,A=a*y-h*_,M=a*f-c*_,u=l*y-h*g,w=l*f-c*g,N=l*_-a*g;return t*(P*b-T*A+d*M)-n*(S*b-T*u+d*w)+s*(S*A-P*u+d*N)-r*(S*M-P*w+T*N)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],l=e[5],a=e[9],c=e[2],h=e[6],g=e[10];return t*(l*g-a*h)-n*(r*g-a*c)+s*(r*h-l*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],l=e[4],a=e[5],c=e[6],h=e[7],g=e[8],_=e[9],f=e[10],y=e[11],S=e[12],P=e[13],T=e[14],d=e[15],b=t*a-n*l,A=t*c-s*l,M=t*h-r*l,u=n*c-s*a,w=n*h-r*a,N=s*h-r*c,x=g*P-_*S,D=g*T-f*S,V=g*d-y*S,$=_*T-f*P,Z=_*d-y*P,se=f*d-y*T,X=b*se-A*Z+M*$+u*V-w*D+N*x;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let ne=1/X;return e[0]=(a*se-c*Z+h*$)*ne,e[1]=(s*Z-n*se-r*$)*ne,e[2]=(P*N-T*w+d*u)*ne,e[3]=(f*w-_*N-y*u)*ne,e[4]=(c*V-l*se-h*D)*ne,e[5]=(t*se-s*V+r*D)*ne,e[6]=(T*M-S*N-d*A)*ne,e[7]=(g*N-f*M+y*A)*ne,e[8]=(l*Z-a*V+h*x)*ne,e[9]=(n*V-t*Z-r*x)*ne,e[10]=(S*w-P*M+d*b)*ne,e[11]=(_*M-g*w-y*b)*ne,e[12]=(a*D-l*$-c*x)*ne,e[13]=(t*$-n*D+s*x)*ne,e[14]=(P*A-S*u-T*b)*ne,e[15]=(g*u-_*A+f*b)*ne,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,l=e.x,a=e.y,c=e.z,h=r*l,g=r*a;return this.set(h*l+n,h*a-s*c,h*c+s*a,0,h*a+s*c,g*a+n,g*c-s*l,0,h*c-s*a,g*c+s*l,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,l){return this.set(1,n,r,0,e,1,l,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,l=t._y,a=t._z,c=t._w,h=r+r,g=l+l,_=a+a,f=r*h,y=r*g,S=r*_,P=l*g,T=l*_,d=a*_,b=c*h,A=c*g,M=c*_,u=n.x,w=n.y,N=n.z;return s[0]=(1-(P+d))*u,s[1]=(y+M)*u,s[2]=(S-A)*u,s[3]=0,s[4]=(y-M)*w,s[5]=(1-(f+d))*w,s[6]=(T+b)*w,s[7]=0,s[8]=(S+A)*N,s[9]=(T-b)*N,s[10]=(1-(f+P))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let l=fs.set(s[0],s[1],s[2]).length(),a=fs.set(s[4],s[5],s[6]).length(),c=fs.set(s[8],s[9],s[10]).length();r<0&&(l=-l),Yn.copy(this);let h=1/l,g=1/a,_=1/c;return Yn.elements[0]*=h,Yn.elements[1]*=h,Yn.elements[2]*=h,Yn.elements[4]*=g,Yn.elements[5]*=g,Yn.elements[6]*=g,Yn.elements[8]*=_,Yn.elements[9]*=_,Yn.elements[10]*=_,t.setFromRotationMatrix(Yn),n.x=l,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,l,a=$n,c=!1){let h=this.elements,g=2*r/(t-e),_=2*r/(n-s),f=(t+e)/(t-e),y=(n+s)/(n-s),S,P;if(c)S=r/(l-r),P=l*r/(l-r);else if(a===$n)S=-(l+r)/(l-r),P=-2*l*r/(l-r);else if(a===Rs)S=-l/(l-r),P=-l*r/(l-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=g,h[4]=0,h[8]=f,h[12]=0,h[1]=0,h[5]=_,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=P,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,s,r,l,a=$n,c=!1){let h=this.elements,g=2/(t-e),_=2/(n-s),f=-(t+e)/(t-e),y=-(n+s)/(n-s),S,P;if(c)S=1/(l-r),P=l/(l-r);else if(a===$n)S=-2/(l-r),P=-(l+r)/(l-r);else if(a===Rs)S=-1/(l-r),P=-r/(l-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=g,h[4]=0,h[8]=0,h[12]=f,h[1]=0,h[5]=_,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=S,h[14]=P,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ja.prototype.isMatrix4=!0;var Rt=Ja,fs=new ce,Yn=new Rt,ju=new ce(0,0,0),Qu=new ce(1,1,1),Ci=new ce,Qr=new ce,Dn=new ce,Jc=new Rt,$c=new li,wi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],l=s[4],a=s[8],c=s[1],h=s[5],g=s[9],_=s[2],f=s[6],y=s[10];switch(t){case"XYZ":this._y=Math.asin(Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-l,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(a,y),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-_,r),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-l,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Tt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(f,y),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-l,h));break;case"YZX":this._z=Math.asin(Tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-_,r)):(this._x=0,this._y=Math.atan2(a,y));break;case"XZY":this._z=Math.asin(-Tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-g,y),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Jc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $c.setFromEuler(this),this.setFromQuaternion($c,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wi.DEFAULT_ORDER="XYZ";var Ls=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ed=0,Kc=new ce,ps=new li,_i=new Rt,ea=new ce,tr=new ce,td=new ce,nd=new li,jc=new ce(1,0,0),Qc=new ce(0,1,0),eh=new ce(0,0,1),th={type:"added"},id={type:"removed"},ms={type:"childadded",child:null},ul={type:"childremoved",child:null},gn=class i extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new ce,t=new wi,n=new li,s=new ce(1,1,1);function r(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Rt},normalMatrix:{value:new pt}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ls,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.multiply(ps),this}rotateOnWorldAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.premultiply(ps),this}rotateX(e){return this.rotateOnAxis(jc,e)}rotateY(e){return this.rotateOnAxis(Qc,e)}rotateZ(e){return this.rotateOnAxis(eh,e)}translateOnAxis(e,t){return Kc.copy(e).applyQuaternion(this.quaternion),this.position.add(Kc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jc,e)}translateY(e){return this.translateOnAxis(Qc,e)}translateZ(e){return this.translateOnAxis(eh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ea.copy(e):ea.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(tr,ea,this.up):_i.lookAt(ea,tr,this.up),this.quaternion.setFromRotationMatrix(_i),s&&(_i.extractRotation(s.matrixWorld),ps.setFromRotationMatrix(_i),this.quaternion.premultiply(ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(th),ms.child=e,this.dispatchEvent(ms),ms.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(id),ul.child=e,this.dispatchEvent(ul),ul.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(th),ms.child=e,this.dispatchEvent(ms),ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,l=s.length;r<l;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,e,td),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,nd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let l=0,a=r.length;l<a;l++)r[l].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let h=0,g=c.length;h<g;h++){let _=c[h];r(e.shapes,_)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,h=this.material.length;c<h;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=l(e.geometries),c=l(e.materials),h=l(e.textures),g=l(e.images),_=l(e.shapes),f=l(e.skeletons),y=l(e.animations),S=l(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),g.length>0&&(n.images=g),_.length>0&&(n.shapes=_),f.length>0&&(n.skeletons=f),y.length>0&&(n.animations=y),S.length>0&&(n.nodes=S)}return n.object=s,n;function l(a){let c=[];for(let h in a){let g=a[h];delete g.metadata,c.push(g)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};gn.DEFAULT_UP=new ce(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qi=class extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}},sd={type:"move"},Ds=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,l=null,a=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){l=!0;for(let P of e.hand.values()){let T=t.getJointPose(P,n),d=this._getHandJoint(h,P);T!==null&&(d.matrix.fromArray(T.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=T.radius),d.visible=T!==null}let g=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],f=g.position.distanceTo(_.position),y=.02,S=.005;h.inputState.pinching&&f>y+S?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&f<=y-S&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sd)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Qi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Qh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},ta={h:0,s:0,l:0};function dl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var _t=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=bt.workingColorSpace){if(e=Zu(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,l=2*n-r;this.r=dl(l,r,e+1/3),this.g=dl(l,r,e),this.b=dl(l,r,e-1/3)}return bt.colorSpaceToWorking(this,s),this}setStyle(e,t=un){function n(r){r!==void 0&&parseFloat(r)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,l=s[1],a=s[2];switch(l){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:lt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],l=r.length;if(l===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(r,16),t);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){let n=Qh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}copyLinearToSRGB(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return bt.workingToColorSpace(pn.copy(this),e),Math.round(Tt(pn.r*255,0,255))*65536+Math.round(Tt(pn.g*255,0,255))*256+Math.round(Tt(pn.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.workingToColorSpace(pn.copy(this),t);let n=pn.r,s=pn.g,r=pn.b,l=Math.max(n,s,r),a=Math.min(n,s,r),c,h,g=(a+l)/2;if(a===l)c=0,h=0;else{let _=l-a;switch(h=g<=.5?_/(l+a):_/(2-l-a),l){case n:c=(s-r)/_+(s<r?6:0);break;case s:c=(r-n)/_+2;break;case r:c=(n-s)/_+4;break}c/=6}return e.h=c,e.s=h,e.l=g,e}getRGB(e,t=bt.workingColorSpace){return bt.workingToColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=un){bt.workingToColorSpace(pn.copy(this),e);let t=pn.r,n=pn.g,s=pn.b;return e!==un?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ri),this.setHSL(Ri.h+e,Ri.s+t,Ri.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ri),e.getHSL(ta);let n=al(Ri.h,ta.h,t),s=al(Ri.s,ta.s,t),r=al(Ri.l,ta.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new _t;_t.NAMES=Qh;var dr=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new _t(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},fr=class extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Zn=new ce,yi=new ce,fl=new ce,vi=new ce,gs=new ce,xs=new ce,nh=new ce,pl=new ce,ml=new ce,gl=new ce,xl=new Jt,_l=new Jt,yl=new Jt,Di=class i{constructor(e=new ce,t=new ce,n=new ce){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Zn.subVectors(e,t),s.cross(Zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Zn.subVectors(s,t),yi.subVectors(n,t),fl.subVectors(e,t);let l=Zn.dot(Zn),a=Zn.dot(yi),c=Zn.dot(fl),h=yi.dot(yi),g=yi.dot(fl),_=l*h-a*a;if(_===0)return r.set(0,0,0),null;let f=1/_,y=(h*c-a*g)*f,S=(l*g-a*c)*f;return r.set(1-y-S,S,y)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,t,n,s,r,l,a,c){return this.getBarycoord(e,t,n,s,vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,vi.x),c.addScaledVector(l,vi.y),c.addScaledVector(a,vi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,l){return xl.setScalar(0),_l.setScalar(0),yl.setScalar(0),xl.fromBufferAttribute(e,t),_l.fromBufferAttribute(e,n),yl.fromBufferAttribute(e,s),l.setScalar(0),l.addScaledVector(xl,r.x),l.addScaledVector(_l,r.y),l.addScaledVector(yl,r.z),l}static isFrontFacing(e,t,n,s){return Zn.subVectors(n,t),yi.subVectors(e,t),Zn.cross(yi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Zn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,l,a;gs.subVectors(s,n),xs.subVectors(r,n),pl.subVectors(e,n);let c=gs.dot(pl),h=xs.dot(pl);if(c<=0&&h<=0)return t.copy(n);ml.subVectors(e,s);let g=gs.dot(ml),_=xs.dot(ml);if(g>=0&&_<=g)return t.copy(s);let f=c*_-g*h;if(f<=0&&c>=0&&g<=0)return l=c/(c-g),t.copy(n).addScaledVector(gs,l);gl.subVectors(e,r);let y=gs.dot(gl),S=xs.dot(gl);if(S>=0&&y<=S)return t.copy(r);let P=y*h-c*S;if(P<=0&&h>=0&&S<=0)return a=h/(h-S),t.copy(n).addScaledVector(xs,a);let T=g*S-y*_;if(T<=0&&_-g>=0&&y-S>=0)return nh.subVectors(r,s),a=(_-g)/(_-g+(y-S)),t.copy(s).addScaledVector(nh,a);let d=1/(T+P+f);return l=P*d,a=f*d,t.copy(n).addScaledVector(gs,l).addScaledVector(xs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ci=class{constructor(e=new ce(1/0,1/0,1/0),t=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let l=0,a=r.count;l<a;l++)e.isMesh===!0?e.getVertexPosition(l,Jn):Jn.fromBufferAttribute(r,l),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),na.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),na.copy(n.boundingBox)),na.applyMatrix4(e.matrixWorld),this.union(na)}let s=e.children;for(let r=0,l=s.length;r<l;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nr),ia.subVectors(this.max,nr),_s.subVectors(e.a,nr),ys.subVectors(e.b,nr),vs.subVectors(e.c,nr),Ii.subVectors(ys,_s),Pi.subVectors(vs,ys),Ji.subVectors(_s,vs);let t=[0,-Ii.z,Ii.y,0,-Pi.z,Pi.y,0,-Ji.z,Ji.y,Ii.z,0,-Ii.x,Pi.z,0,-Pi.x,Ji.z,0,-Ji.x,-Ii.y,Ii.x,0,-Pi.y,Pi.x,0,-Ji.y,Ji.x,0];return!vl(t,_s,ys,vs,ia)||(t=[1,0,0,0,1,0,0,0,1],!vl(t,_s,ys,vs,ia))?!1:(sa.crossVectors(Ii,Pi),t=[sa.x,sa.y,sa.z],vl(t,_s,ys,vs,ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Mi=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],Jn=new ce,na=new ci,_s=new ce,ys=new ce,vs=new ce,Ii=new ce,Pi=new ce,Ji=new ce,nr=new ce,ia=new ce,sa=new ce,$i=new ce;function vl(i,e,t,n,s){for(let r=0,l=i.length-3;r<=l;r+=3){$i.fromArray(i,r);let a=s.x*Math.abs($i.x)+s.y*Math.abs($i.y)+s.z*Math.abs($i.z),c=e.dot($i),h=t.dot($i),g=n.dot($i);if(Math.max(-Math.max(c,h,g),Math.min(c,h,g))>a)return!1}return!0}var tn=new ce,ra=new Mt,rd=0,Sn=class extends oi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ic,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ra.fromBufferAttribute(this,t),ra.applyMatrix3(e),this.setXY(t,ra.x,ra.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=si(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=si(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=si(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),s=Vt(s,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var pr=class extends Sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var mr=class extends Sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var wn=class extends Sn{constructor(e,t,n){super(new Float32Array(e),t,n)}},ad=new ci,ir=new ce,Ml=new ce,Ui=class{constructor(e=new ce,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ad.setFromPoints(e).getCenter(n);let s=0;for(let r=0,l=e.length;r<l;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ir.subVectors(e,this.center);let t=ir.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ir,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ml.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ir.copy(e.center).add(Ml)),this.expandByPoint(ir.copy(e.center).sub(Ml))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},od=0,Gn=new Rt,bl=new gn,Ms=new ce,Nn=new ci,sr=new ci,ln=new ce,Fn=class i extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qu(e)?mr:pr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new pt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,t,n){return Gn.makeTranslation(e,t,n),this.applyMatrix4(Gn),this}scale(e,t,n){return Gn.makeScale(e,t,n),this.applyMatrix4(Gn),this}lookAt(e){return bl.lookAt(e),bl.updateMatrix(),this.applyMatrix4(bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let l=e[s];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new wn(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ce,1/0);return}if(e){let n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let r=0,l=t.length;r<l;r++){let a=t[r];sr.setFromBufferAttribute(a),this.morphTargetsRelative?(ln.addVectors(Nn.min,sr.min),Nn.expandByPoint(ln),ln.addVectors(Nn.max,sr.max),Nn.expandByPoint(ln)):(Nn.expandByPoint(sr.min),Nn.expandByPoint(sr.max))}Nn.getCenter(n);let s=0;for(let r=0,l=e.count;r<l;r++)ln.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(ln));if(t)for(let r=0,l=t.length;r<l;r++){let a=t[r],c=this.morphTargetsRelative;for(let h=0,g=a.count;h<g;h++)ln.fromBufferAttribute(a,h),c&&(Ms.fromBufferAttribute(e,h),ln.add(Ms)),s=Math.max(s,n.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,l=this.getAttribute("tangent");(l===void 0||l.count!==n.count)&&(l=new Sn(new Float32Array(4*n.count),4),this.setAttribute("tangent",l));let a=[],c=[];for(let x=0;x<n.count;x++)a[x]=new ce,c[x]=new ce;let h=new ce,g=new ce,_=new ce,f=new Mt,y=new Mt,S=new Mt,P=new ce,T=new ce;function d(x,D,V){h.fromBufferAttribute(n,x),g.fromBufferAttribute(n,D),_.fromBufferAttribute(n,V),f.fromBufferAttribute(r,x),y.fromBufferAttribute(r,D),S.fromBufferAttribute(r,V),g.sub(h),_.sub(h),y.sub(f),S.sub(f);let $=1/(y.x*S.y-S.x*y.y);isFinite($)&&(P.copy(g).multiplyScalar(S.y).addScaledVector(_,-y.y).multiplyScalar($),T.copy(_).multiplyScalar(y.x).addScaledVector(g,-S.x).multiplyScalar($),a[x].add(P),a[D].add(P),a[V].add(P),c[x].add(T),c[D].add(T),c[V].add(T))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let x=0,D=b.length;x<D;++x){let V=b[x],$=V.start,Z=V.count;for(let se=$,X=$+Z;se<X;se+=3)d(e.getX(se+0),e.getX(se+1),e.getX(se+2))}let A=new ce,M=new ce,u=new ce,w=new ce;function N(x){u.fromBufferAttribute(s,x),w.copy(u);let D=a[x];A.copy(D),A.sub(u.multiplyScalar(u.dot(D))).normalize(),M.crossVectors(w,D);let $=M.dot(c[x])<0?-1:1;l.setXYZW(x,A.x,A.y,A.z,$)}for(let x=0,D=b.length;x<D;++x){let V=b[x],$=V.start,Z=V.count;for(let se=$,X=$+Z;se<X;se+=3)N(e.getX(se+0)),N(e.getX(se+1)),N(e.getX(se+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,y=n.count;f<y;f++)n.setXYZ(f,0,0,0);let s=new ce,r=new ce,l=new ce,a=new ce,c=new ce,h=new ce,g=new ce,_=new ce;if(e)for(let f=0,y=e.count;f<y;f+=3){let S=e.getX(f+0),P=e.getX(f+1),T=e.getX(f+2);s.fromBufferAttribute(t,S),r.fromBufferAttribute(t,P),l.fromBufferAttribute(t,T),g.subVectors(l,r),_.subVectors(s,r),g.cross(_),a.fromBufferAttribute(n,S),c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,T),a.add(g),c.add(g),h.add(g),n.setXYZ(S,a.x,a.y,a.z),n.setXYZ(P,c.x,c.y,c.z),n.setXYZ(T,h.x,h.y,h.z)}else for(let f=0,y=t.count;f<y;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),l.fromBufferAttribute(t,f+2),g.subVectors(l,r),_.subVectors(s,r),g.cross(_),n.setXYZ(f+0,g.x,g.y,g.z),n.setXYZ(f+1,g.x,g.y,g.z),n.setXYZ(f+2,g.x,g.y,g.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(a,c){let h=a.array,g=a.itemSize,_=a.normalized,f=new h.constructor(c.length*g),y=0,S=0;for(let P=0,T=c.length;P<T;P++){a.isInterleavedBufferAttribute?y=c[P]*a.data.stride+a.offset:y=c[P]*g;for(let d=0;d<g;d++)f[S++]=h[y++]}return new Sn(f,g,_)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],h=e(c,n);t.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let c=[],h=r[a];for(let g=0,_=h.length;g<_;g++){let f=h[g],y=e(f,n);c.push(y)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let l=this.groups;for(let a=0,c=l.length;a<c;a++){let h=l[a];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(e[h]=c[h]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let h=n[c];e.data.attributes[c]=h.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],g=[];for(let _=0,f=h.length;_<f;_++){let y=h[_];g.push(y.toJSON(e.data))}g.length>0&&(s[c]=g,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let h in s){let g=s[h];this.setAttribute(h,g.clone(t))}let r=e.morphAttributes;for(let h in r){let g=[],_=r[h];for(let f=0,y=_.length;f<y;f++)g.push(_[f].clone(t));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;let l=e.groups;for(let h=0,g=l.length;h<g;h++){let _=l[h];this.addGroup(_.start,_.count,_.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},gr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ic,this.updateRanges=[],this.version=0,this.uuid=Ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},vn=new ce,xr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=si(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),s=Vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),s=Vt(s,this.array),r=Vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ur("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Sn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ur("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Sl=new ce,ld=new ce,cd=new pt,Un=class{constructor(e=new ce(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Sl.subVectors(n,t).cross(ld.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Sl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let l=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(l<0||l>1)?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||cd.getNormalMatrix(e),s=this.coplanarPoint(Sl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},hd=0,Fi=class extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=zs,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zl,this.blendDst=Vl,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=va,this.stencilZFail=va,this.stencilZPass=va,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){lt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){lt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let l=[];for(let a in r){let c=r[a];delete c.metadata,l.push(c)}return l}if(t){let r=s(e.textures),l=s(e.images);r.length>0&&(n.textures=r),l.length>0&&(n.images=l)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new _t().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Un().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Mt().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Mt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var bi=new ce,wl=new ce,aa=new ce,oa=new ce,_r=class{constructor(e=new ce,t=new ce(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,t),bi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){wl.copy(e).add(t).multiplyScalar(.5),aa.copy(t).sub(e).normalize(),oa.copy(this.origin).sub(wl);let r=e.distanceTo(t)*.5,l=-this.direction.dot(aa),a=oa.dot(this.direction),c=-oa.dot(aa),h=oa.lengthSq(),g=Math.abs(1-l*l),_,f,y,S;if(g>0)if(_=l*c-a,f=l*a-c,S=r*g,_>=0)if(f>=-S)if(f<=S){let P=1/g;_*=P,f*=P,y=_*(_+l*f+2*a)+f*(l*_+f+2*c)+h}else f=r,_=Math.max(0,-(l*f+a)),y=-_*_+f*(f+2*c)+h;else f=-r,_=Math.max(0,-(l*f+a)),y=-_*_+f*(f+2*c)+h;else f<=-S?(_=Math.max(0,-(-l*r+a)),f=_>0?-r:Math.min(Math.max(-r,-c),r),y=-_*_+f*(f+2*c)+h):f<=S?(_=0,f=Math.min(Math.max(-r,-c),r),y=f*(f+2*c)+h):(_=Math.max(0,-(l*r+a)),f=_>0?r:Math.min(Math.max(-r,-c),r),y=-_*_+f*(f+2*c)+h);else f=l>0?-r:r,_=Math.max(0,-(l*f+a)),y=-_*_+f*(f+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,_),s&&s.copy(wl).addScaledVector(aa,f),y}intersectSphere(e,t){if(e.radius<0)return null;bi.subVectors(e.center,this.origin);let n=bi.dot(this.direction),s=bi.dot(bi)-n*n,r=e.radius*e.radius;if(s>r)return null;let l=Math.sqrt(r-s),a=n-l,c=n+l;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,l,a,c,h=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,f=this.origin;return h>=0?(n=(e.min.x-f.x)*h,s=(e.max.x-f.x)*h):(n=(e.max.x-f.x)*h,s=(e.min.x-f.x)*h),g>=0?(r=(e.min.y-f.y)*g,l=(e.max.y-f.y)*g):(r=(e.max.y-f.y)*g,l=(e.min.y-f.y)*g),n>l||r>s||((r>n||isNaN(n))&&(n=r),(l<s||isNaN(s))&&(s=l),_>=0?(a=(e.min.z-f.z)*_,c=(e.max.z-f.z)*_):(a=(e.max.z-f.z)*_,c=(e.min.z-f.z)*_),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,n,s,r){let l=this.origin,a=this.direction,c=a.x,h=a.y,g=a.z,_=e.x-l.x,f=e.y-l.y,y=e.z-l.z,S=t.x-l.x,P=t.y-l.y,T=t.z-l.z,d=n.x-l.x,b=n.y-l.y,A=n.z-l.z,M=Math.abs(c),u=Math.abs(h),w=Math.abs(g),N,x,D,V,$,Z,se,X,ne,de,ue,ve;if(M>=u&&M>=w?(D=c,Z=_,ne=S,ve=d,c>=0?(N=h,x=g,V=f,$=y,se=P,X=T,de=b,ue=A):(N=g,x=h,V=y,$=f,se=T,X=P,de=A,ue=b)):u>=w?(D=h,Z=f,ne=P,ve=b,h>=0?(N=g,x=c,V=y,$=_,se=T,X=S,de=A,ue=d):(N=c,x=g,V=_,$=y,se=S,X=T,de=d,ue=A)):(D=g,Z=y,ne=T,ve=A,g>=0?(N=c,x=h,V=_,$=f,se=S,X=P,de=d,ue=b):(N=h,x=c,V=f,$=_,se=P,X=S,de=b,ue=d)),D===0)return null;let fe=N/D,ee=x/D,C=1/D,Ve=V-fe*Z,We=$-ee*Z,rt=se-fe*ne,Q=X-ee*ne,ut=de-fe*ve,xe=ue-ee*ve,ye=ut*Q-xe*rt,He=Ve*xe-We*ut,at=rt*We-Q*Ve;if(s){if(ye<0||He<0||at<0)return null}else if((ye<0||He<0||at<0)&&(ye>0||He>0||at>0))return null;let Ne=ye+He+at;if(Ne===0)return null;let qe=C*(ye*Z+He*ne+at*ve);return(Ne>0?qe<0:qe>0)?null:this.at(qe/Ne,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},yr=class extends Fi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=Gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ih=new Rt,Ki=new _r,la=new Ui,sh=new ce,ca=new ce,ha=new ce,ua=new ce,Tl=new ce,da=new ce,rh=new ce,fa=new ce,xn=class extends gn{constructor(e=new Fn,t=new yr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,l=s.length;r<l;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){da.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let g=a[c],_=r[c];g!==0&&(Tl.fromBufferAttribute(_,e),l?da.addScaledVector(Tl,g):da.addScaledVector(Tl.sub(t),g))}t.add(da)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(r),Ki.copy(e.ray).recast(e.near),!(la.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(la,sh)===null||Ki.origin.distanceToSquared(sh)>(e.far-e.near)**2))&&(ih.copy(r).invert(),Ki.copy(e.ray).applyMatrix4(ih),!(n.boundingBox!==null&&Ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ki)))}_computeIntersections(e,t,n){let s,r=this.geometry,l=this.material,a=r.index,c=r.attributes.position,h=r.attributes.uv,g=r.attributes.uv1,_=r.attributes.normal,f=r.groups,y=r.drawRange;if(a!==null)if(Array.isArray(l))for(let S=0,P=f.length;S<P;S++){let T=f[S],d=l[T.materialIndex],b=Math.max(T.start,y.start),A=Math.min(a.count,Math.min(T.start+T.count,y.start+y.count));for(let M=b,u=A;M<u;M+=3){let w=a.getX(M),N=a.getX(M+1),x=a.getX(M+2);s=pa(this,d,e,n,h,g,_,w,N,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=T.materialIndex,t.push(s))}}else{let S=Math.max(0,y.start),P=Math.min(a.count,y.start+y.count);for(let T=S,d=P;T<d;T+=3){let b=a.getX(T),A=a.getX(T+1),M=a.getX(T+2);s=pa(this,l,e,n,h,g,_,b,A,M),s&&(s.faceIndex=Math.floor(T/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(l))for(let S=0,P=f.length;S<P;S++){let T=f[S],d=l[T.materialIndex],b=Math.max(T.start,y.start),A=Math.min(c.count,Math.min(T.start+T.count,y.start+y.count));for(let M=b,u=A;M<u;M+=3){let w=M,N=M+1,x=M+2;s=pa(this,d,e,n,h,g,_,w,N,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=T.materialIndex,t.push(s))}}else{let S=Math.max(0,y.start),P=Math.min(c.count,y.start+y.count);for(let T=S,d=P;T<d;T+=3){let b=T,A=T+1,M=T+2;s=pa(this,l,e,n,h,g,_,b,A,M),s&&(s.faceIndex=Math.floor(T/3),t.push(s))}}}};function ud(i,e,t,n,s,r,l,a){let c;if(e.side===Mn?c=n.intersectTriangle(l,r,s,!0,a):c=n.intersectTriangle(s,r,l,e.side===Vi,a),c===null)return null;fa.copy(a),fa.applyMatrix4(i.matrixWorld);let h=t.ray.origin.distanceTo(fa);return h<t.near||h>t.far?null:{distance:h,point:fa.clone(),object:i}}function pa(i,e,t,n,s,r,l,a,c,h){i.getVertexPosition(a,ca),i.getVertexPosition(c,ha),i.getVertexPosition(h,ua);let g=ud(i,e,t,n,ca,ha,ua,rh);if(g){let _=new ce;Di.getBarycoord(rh,ca,ha,ua,_),s&&(g.uv=Di.getInterpolatedAttribute(s,a,c,h,_,new Mt)),r&&(g.uv1=Di.getInterpolatedAttribute(r,a,c,h,_,new Mt)),l&&(g.normal=Di.getInterpolatedAttribute(l,a,c,h,_,new ce),g.normal.dot(n.direction)>0&&g.normal.multiplyScalar(-1));let f={a,b:c,c:h,normal:new ce,materialIndex:0};Di.getNormal(ca,ha,ua,f.normal),g.face=f,g.barycoord=_}return g}var vr=class extends Tn{constructor(e=null,t=1,n=1,s,r,l,a,c,h=cn,g=cn,_,f){super(null,l,a,c,h,g,s,r,_,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ns=class extends Sn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},bs=new Rt,ah=new Rt,ma=[],oh=new ci,dd=new Rt,rr=new xn,ar=new Ui,Mr=class extends xn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ns(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,dd)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ci),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,bs),oh.copy(e.boundingBox).applyMatrix4(bs),this.boundingBox.union(oh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ui),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,bs),ar.copy(e.boundingSphere).applyMatrix4(bs),this.boundingSphere.union(ar)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,l=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[l+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(rr.geometry=this.geometry,rr.material=this.material,rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ar.copy(this.boundingSphere),ar.applyMatrix4(n),e.ray.intersectsSphere(ar)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,bs),ah.multiplyMatrices(n,bs),rr.matrixWorld=ah,rr.raycast(e,ma);for(let l=0,a=ma.length;l<a;l++){let c=ma[l];c.instanceId=r,c.object=this,t.push(c)}ma.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ns(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new vr(new Float32Array(s*this.count),s,this.count,no,Hn));let r=this.morphTexture.source.data.data,l=0;for(let h=0;h<n.length;h++)l+=n[h];let a=this.geometry.morphTargetsRelative?1:1-l,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ji=new Ui,fd=new Mt(.5,.5),ga=new ce,Ns=class{constructor(e=new Un,t=new Un,n=new Un,s=new Un,r=new Un,l=new Un){this.planes=[e,t,n,s,r,l]}set(e,t,n,s,r,l){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(l),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$n,n=!1){let s=this.planes,r=e.elements,l=r[0],a=r[1],c=r[2],h=r[3],g=r[4],_=r[5],f=r[6],y=r[7],S=r[8],P=r[9],T=r[10],d=r[11],b=r[12],A=r[13],M=r[14],u=r[15];if(s[0].setComponents(h-l,y-g,d-S,u-b).normalize(),s[1].setComponents(h+l,y+g,d+S,u+b).normalize(),s[2].setComponents(h+a,y+_,d+P,u+A).normalize(),s[3].setComponents(h-a,y-_,d-P,u-A).normalize(),n)s[4].setComponents(c,f,T,M).normalize(),s[5].setComponents(h-c,y-f,d-T,u-M).normalize();else if(s[4].setComponents(h-c,y-f,d-T,u-M).normalize(),t===$n)s[5].setComponents(h+c,y+f,d+T,u+M).normalize();else if(t===Rs)s[5].setComponents(c,f,T,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){ji.center.set(0,0,0);let t=fd.distanceTo(e.center);return ji.radius=.7071067811865476+t,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ga.x=s.normal.x>0?e.max.x:e.min.x,ga.y=s.normal.y>0?e.max.y:e.min.y,ga.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ga)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var br=class extends Tn{constructor(e=[],t=Gi,n,s,r,l,a,c,h,g){super(e,t,n,s,r,l,a,c,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Oi=class extends Tn{constructor(e,t,n=jn,s,r,l,a=cn,c=cn,h,g=ai,_=1){if(g!==ai&&g!==Hi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:_};super(f,s,r,l,a,c,g,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ps(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Na=class extends Oi{constructor(e,t=jn,n=Gi,s,r,l=cn,a=cn,c,h=ai){let g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,t,n,s,r,l,a,c,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Sr=class extends Tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Us=class i extends Fn{constructor(e=1,t=1,n=1,s=1,r=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:l};let a=this;s=Math.floor(s),r=Math.floor(r),l=Math.floor(l);let c=[],h=[],g=[],_=[],f=0,y=0;S("z","y","x",-1,-1,n,t,e,l,r,0),S("z","y","x",1,-1,n,t,-e,l,r,1),S("x","z","y",1,1,e,n,t,s,l,2),S("x","z","y",1,-1,e,n,-t,s,l,3),S("x","y","z",1,-1,e,t,n,s,r,4),S("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new wn(h,3)),this.setAttribute("normal",new wn(g,3)),this.setAttribute("uv",new wn(_,2));function S(P,T,d,b,A,M,u,w,N,x,D){let V=M/N,$=u/x,Z=M/2,se=u/2,X=w/2,ne=N+1,de=x+1,ue=0,ve=0,fe=new ce;for(let ee=0;ee<de;ee++){let C=ee*$-se;for(let Ve=0;Ve<ne;Ve++){let We=Ve*V-Z;fe[P]=We*b,fe[T]=C*A,fe[d]=X,h.push(fe.x,fe.y,fe.z),fe[P]=0,fe[T]=0,fe[d]=w>0?1:-1,g.push(fe.x,fe.y,fe.z),_.push(Ve/N),_.push(1-ee/x),ue+=1}}for(let ee=0;ee<x;ee++)for(let C=0;C<N;C++){let Ve=f+C+ne*ee,We=f+C+ne*(ee+1),rt=f+(C+1)+ne*(ee+1),Q=f+(C+1)+ne*ee;c.push(Ve,We,Q),c.push(We,rt,Q),ve+=6}a.addGroup(y,ve,D),y+=ve,f+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var wr=class i extends Fn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,l=t/2,a=Math.floor(n),c=Math.floor(s),h=a+1,g=c+1,_=e/a,f=t/c,y=[],S=[],P=[],T=[];for(let d=0;d<g;d++){let b=d*f-l;for(let A=0;A<h;A++){let M=A*_-r;S.push(M,-b,0),P.push(0,0,1),T.push(A/a),T.push(1-d/c)}}for(let d=0;d<c;d++)for(let b=0;b<a;b++){let A=b+h*d,M=b+h*(d+1),u=b+1+h*(d+1),w=b+1+h*d;y.push(A,M,w),y.push(M,u,w)}this.setIndex(y),this.setAttribute("position",new wn(S,3)),this.setAttribute("normal",new wn(P,3)),this.setAttribute("uv",new wn(T,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};function as(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(lh(s))s.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(lh(s[0])){let r=[];for(let l=0,a=s.length;l<a;l++)r[l]=s[l].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function _n(i){let e={};for(let t=0;t<i.length;t++){let n=as(i[t]);for(let s in n)e[s]=n[s]}return e}function lh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function pd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function sc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}var eu={clone:as,merge:_n},md=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,On=class extends Fi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=md,this.fragmentShader=gd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=as(e.uniforms),this.uniformsGroups=pd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let l=this.uniforms[s].value;l&&l.isTexture?t.uniforms[s]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[s]={type:"m4",value:l.toArray()}:t.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new _t().setHex(s.value);break;case"v2":this.uniforms[n].value=new Mt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new ce().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Jt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new pt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Rt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Fs=class extends On{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Tr=class extends Fi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oo,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Os=class extends Fi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ua=class extends Fi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ss(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function El(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Bi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let l;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}l=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}l=n,n=0;break t}break n}for(;n<l;){let a=n+l>>>1;e<t[a]?l=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let l=0;l!==s;++l)t[l]=n[r+l];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Fa=class extends Bi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rl,endingEnd:Rl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,l=e+1,a=s[r],c=s[l];if(a===void 0)switch(this.getSettings_().endingStart){case Il:r=e,a=2*t-n;break;case Pl:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Il:l=e,c=2*n-t;break;case Pl:l=1,c=n+s[1]-s[0];break;default:l=e-1,c=t}let h=(n-t)*.5,g=this.valueSize;this._weightPrev=h/(t-a),this._weightNext=h/(c-n),this._offsetPrev=r*g,this._offsetNext=l*g}interpolate_(e,t,n,s){let r=this.resultBuffer,l=this.sampleValues,a=this.valueSize,c=e*a,h=c-a,g=this._offsetPrev,_=this._offsetNext,f=this._weightPrev,y=this._weightNext,S=(n-t)/(s-t),P=S*S,T=P*S,d=-f*T+2*f*P-f*S,b=(1+f)*T+(-1.5-2*f)*P+(-.5+f)*S+1,A=(-1-y)*T+(1.5+y)*P+.5*S,M=y*T-y*P;for(let u=0;u!==a;++u)r[u]=d*l[g+u]+b*l[h+u]+A*l[c+u]+M*l[_+u];return r}},Oa=class extends Bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,l=this.sampleValues,a=this.valueSize,c=e*a,h=c-a,g=(n-t)/(s-t),_=1-g;for(let f=0;f!==a;++f)r[f]=l[h+f]*_+l[c+f]*g;return r}},Ba=class extends Bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ka=class extends Bi{interpolate_(e,t,n,s){let r=this.resultBuffer,l=this.sampleValues,a=this.valueSize,c=e*a,h=c-a,g=this.inTangents,_=this.outTangents;if(!g||!_){let S=(n-t)/(s-t),P=1-S;for(let T=0;T!==a;++T)r[T]=l[h+T]*P+l[c+T]*S;return r}let f=a*2,y=e-1;for(let S=0;S!==a;++S){let P=l[h+S],T=l[c+S],d=y*f+S*2,b=_[d],A=_[d+1],M=e*f+S*2,u=g[M],w=g[M+1],N=_d(n,t,b,u,s);r[S]=tu(N,P,A,w,T)}return r}};function tu(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function xd(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function _d(i,e,t,n,s){let r=(i-e)/(s-e);for(let l=0;l<8;l++){let a=tu(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let c=xd(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var Bn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ss(t,this.TimeBufferType),this.values=Ss(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ss(e.times,Array),values:Ss(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),El(e.settings)&&(n.settings={inTangents:Ss(e.settings.inTangents,Array),outTangents:Ss(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ba(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Oa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ka(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case or:t=this.InterpolantFactoryMethodDiscrete;break;case Ra:t=this.InterpolantFactoryMethodLinear;break;case ya:t=this.InterpolantFactoryMethodSmooth;break;case Cl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return lt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return or;case this.InterpolantFactoryMethodLinear:return Ra;case this.InterpolantFactoryMethodSmooth:return ya;case this.InterpolantFactoryMethodBezier:return Cl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;El(this.settings)&&(ch(this.settings.inTangents,e),ch(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,l=s-1;for(;r!==s&&n[r]<e;)++r;for(;l!==-1&&n[l]>t;)--l;if(++l,r!==0||l!==s){r>=l&&(l=Math.max(l,1),r=l-1);let a=this.getValueSize();this.times=n.slice(r,l),this.values=this.values.slice(r*a,l*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ot("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ot("KeyframeTrack: Track is empty.",this),e=!1);let l=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){ot("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(l!==null&&l>c){ot("KeyframeTrack: Out of order keys.",this,a,c,l),e=!1;break}l=c}if(s!==void 0&&Yu(s))for(let a=0,c=s.length;a!==c;++a){let h=s[a];if(isNaN(h)){ot("KeyframeTrack: Value is not a valid number.",this,a,h),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ya,r=e.length-1,l=1;for(let a=1;a<r;++a){let c=!1,h=e[a],g=e[a+1];if(h!==g&&(a!==1||h!==e[0]))if(s)c=!0;else{let _=a*n,f=_-n,y=_+n;for(let S=0;S!==n;++S){let P=t[_+S];if(P!==t[f+S]||P!==t[y+S]){c=!0;break}}}if(c){if(a!==l){e[l]=e[a];let _=a*n,f=l*n;for(let y=0;y!==n;++y)t[f+y]=t[_+y]}++l}}if(r>0){e[l]=e[r];for(let a=r*n,c=l*n,h=0;h!==n;++h)t[c+h]=t[a+h];++l}return l!==e.length?(this.times=e.slice(0,l),this.values=t.slice(0,l*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,El(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ch(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Bn.prototype.ValueTypeName="";Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=Ra;var ki=class extends Bn{constructor(e,t,n){super(e,t,n)}};ki.prototype.ValueTypeName="bool";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=or;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var za=class extends Bn{constructor(e,t,n,s){super(e,t,n,s)}};za.prototype.ValueTypeName="color";var Va=class extends Bn{constructor(e,t,n,s){super(e,t,n,s)}};Va.prototype.ValueTypeName="number";var Ga=class extends Bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,l=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),h=e*a;for(let g=h+a;h!==g;h+=4)li.slerpFlat(r,0,l,h-a,l,h,c);return r}},Er=class extends Bn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ga(this.times,this.values,this.getValueSize(),e)}};Er.prototype.ValueTypeName="quaternion";Er.prototype.InterpolantFactoryMethodSmooth=void 0;var zi=class extends Bn{constructor(e,t,n){super(e,t,n)}};zi.prototype.ValueTypeName="string";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=or;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ha=class extends Bn{constructor(e,t,n,s){super(e,t,n,s)}};Ha.prototype.ValueTypeName="vector";var Wa=class{constructor(e,t,n){let s=this,r=!1,l=0,a=0,c,h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(g){a++,r===!1&&s.onStart!==void 0&&s.onStart(g,l,a),r=!0},this.itemEnd=function(g){l++,s.onProgress!==void 0&&s.onProgress(g,l,a),l===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(g){s.onError!==void 0&&s.onError(g)},this.resolveURL=function(g){return g=g.normalize("NFC"),c?c(g):g},this.setURLModifier=function(g){return c=g,this},this.addHandler=function(g,_){return h.push(g,_),this},this.removeHandler=function(g){let _=h.indexOf(g);return _!==-1&&h.splice(_,2),this},this.getHandler=function(g){for(let _=0,f=h.length;_<f;_+=2){let y=h[_],S=h[_+1];if(y.global&&(y.lastIndex=0),y.test(g))return S}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},nu=new Wa,Xa=class{constructor(e){this.manager=e!==void 0?e:nu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Xa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ar=class extends gn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Cr=class extends Ar{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _t(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Al=new Rt,hh=new ce,uh=new ce,qa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.mapType=An,this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ns,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;hh.setFromMatrixPosition(e.matrixWorld),t.position.copy(hh),uh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(uh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Al.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Al,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,l=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,h=s?s.y/r.y:0;e.coordinateSystem===Rs||e.reversedDepth?t.set(.5*l,0,0,.5*l+c,0,.5*a,0,.5*a+h,0,0,1,0,0,0,0,1):t.set(.5*l,0,0,.5*l+c,0,.5*a,0,.5*a+h,0,0,.5,.5,0,0,0,1),t.multiply(Al)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},xa=new ce,_a=new li,ii=new ce,Rr=class extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(xa,_a,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xa,_a,ii.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(xa,_a,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xa,_a,ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Li=new ce,dh=new Mt,fh=new Mt,mn=class extends Rr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ia*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(rl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ia*2*Math.atan(Math.tan(rl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Li.x,Li.y).multiplyScalar(-e/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-e/Li.z)}getViewSize(e,t){return this.getViewBounds(e,dh,fh),t.subVectors(fh,dh)}setViewOffset(e,t,n,s,r,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(rl*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,l=this.view;if(this.view!==null&&this.view.enabled){let c=l.fullWidth,h=l.fullHeight;r+=l.offsetX*s/c,t-=l.offsetY*n/h,s*=l.width/c,n*=l.height/h}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Bs=class extends Rr{constructor(e=-1,t=1,n=1,s=-1,r=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,l=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,l=r+h*this.view.width,a-=g*this.view.offsetY,c=a-g*this.view.height}this.projectionMatrix.makeOrthographic(r,l,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ll=class extends qa{constructor(){super(new Bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ir=class extends Ar{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new Ll}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ws=-90,Ts=1,Ya=class extends gn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new mn(ws,Ts,e,t);s.layers=this.layers,this.add(s);let r=new mn(ws,Ts,e,t);r.layers=this.layers,this.add(r);let l=new mn(ws,Ts,e,t);l.layers=this.layers,this.add(l);let a=new mn(ws,Ts,e,t);a.layers=this.layers,this.add(a);let c=new mn(ws,Ts,e,t);c.layers=this.layers,this.add(c);let h=new mn(ws,Ts,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,l,a,c]=t;for(let h of t)this.remove(h);if(e===$n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Rs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,l,a,c,h,g]=this.children,_=e.getRenderTarget(),f=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;let P=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let T=!1;e.isWebGLRenderer===!0?T=e.state.buffers.depth.getReversed():T=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),T&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),T&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,2,s),T&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),T&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),T&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),n.texture.generateMipmaps=P,e.setRenderTarget(n,5,s),T&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(_,f,y),e.xr.enabled=S,n.texture.needsPMREMUpdate=!0}},Za=class extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var rc="\\[\\]\\.:\\/",yd=new RegExp("["+rc+"]","g"),ac="[^"+rc+"]",vd="[^"+rc.replace("\\.","")+"]",Md=/((?:WC+[\/:])*)/.source.replace("WC",ac),bd=/(WCOD+)?/.source.replace("WCOD",vd),Sd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ac),wd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ac),Td=new RegExp("^"+Md+bd+Sd+wd+"$"),Ed=["material","materials","bones","map"],Dl=class{constructor(e,t,n){let s=n||Yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Yt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(yd,"")}static parseTrackName(e){let t=Td.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ed.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let l=0;l<r.length;l++){let a=r[l];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){lt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ot("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ot("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let g=0;g<e.length;g++)if(e[g].name===h){h=g;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ot("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ot("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){ot("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}let l=e[s];if(l===void 0){let h=t.nodeName;ot("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=r}else l.fromArray!==void 0&&l.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(c=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Yt.Composite=Dl;Yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Yt.prototype.GetterByBindingType=[Yt.prototype._getValue_direct,Yt.prototype._getValue_array,Yt.prototype._getValue_arrayElement,Yt.prototype._getValue_toArray];Yt.prototype.SetterByBindingTypeAndVersioning=[[Yt.prototype._setValue_direct,Yt.prototype._setValue_direct_setNeedsUpdate,Yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_array,Yt.prototype._setValue_array_setNeedsUpdate,Yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_arrayElement,Yt.prototype._setValue_arrayElement_setNeedsUpdate,Yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_fromArray,Yt.prototype._setValue_fromArray_setNeedsUpdate,Yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Mg=new Float32Array(1);var ph=new Rt,Pr=class{constructor(e,t,n=0,s=1/0){this.ray=new _r(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ls,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ot("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ph.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ph),this}intersectObject(e,t=!0,n=[]){return Nl(e,this,n,t),n.sort(mh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Nl(e[s],this,n,t);return n.sort(mh),n}};function mh(i,e){return i.distance-e.distance}function Nl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let l=0,a=r.length;l<a;l++)Nl(r[l],e,t,!0)}}var dc=class dc{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};dc.prototype.isMatrix2=!0;var Ul=dc;function oc(i,e,t,n){let s=Ad(n);switch(t){case ec:return i*e;case no:return i*e/s.components*s.byteLength;case io:return i*e/s.components*s.byteLength;case Wi:return i*e*2/s.components*s.byteLength;case so:return i*e*2/s.components*s.byteLength;case tc:return i*e*3/s.components*s.byteLength;case Wn:return i*e*4/s.components*s.byteLength;case ro:return i*e*4/s.components*s.byteLength;case Ur:case Fr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Or:case Br:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oo:case co:return Math.max(i,16)*Math.max(e,8)/4;case ao:case lo:return Math.max(i,8)*Math.max(e,8)/2;case ho:case uo:case po:case mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fo:case kr:case go:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _o:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case yo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case vo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case bo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case So:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case wo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case To:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Eo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ao:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Co:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ro:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Io:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Po:case Lo:case Do:return Math.ceil(i/4)*Math.ceil(e/4)*16;case No:case Uo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case zr:case Fo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ad(i){switch(i){case An:case $l:return{byteLength:1,components:1};case Vs:case Kl:case Qn:return{byteLength:2,components:1};case eo:case to:return{byteLength:2,components:4};case jn:case Qa:case Hn:return{byteLength:4,components:1};case jl:case Ql:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function wu(){let i=null,e=!1,t=null,n=null;function s(r,l){n=i.requestAnimationFrame(s),t(r,l)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Rd(i){let e=new WeakMap;function t(a,c){let h=a.array,g=a.usage,_=h.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,h,g),a.onUploadCallback();let y;if(h instanceof Float32Array)y=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=i.HALF_FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?y=i.HALF_FLOAT:y=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=i.SHORT;else if(h instanceof Uint32Array)y=i.UNSIGNED_INT;else if(h instanceof Int32Array)y=i.INT;else if(h instanceof Int8Array)y=i.BYTE;else if(h instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:_}}function n(a,c,h){let g=c.array,_=c.updateRanges;if(i.bindBuffer(h,a),_.length===0)i.bufferSubData(h,0,g);else{_.sort((y,S)=>y.start-S.start);let f=0;for(let y=1;y<_.length;y++){let S=_[f],P=_[y];P.start<=S.start+S.count+1?S.count=Math.max(S.count,P.start+P.count-S.start):(++f,_[f]=P)}_.length=f+1;for(let y=0,S=_.length;y<S;y++){let P=_[y];i.bufferSubData(h,P.start*g.BYTES_PER_ELEMENT,g,P.start,P.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function l(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let g=e.get(a);(!g||g.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=e.get(a);if(h===void 0)e.set(a,t(a,c));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,c),h.version=a.version}}return{get:s,remove:r,update:l}}var Id=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pd=`#ifdef USE_ALPHAHASH
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
#endif`,Ld=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ud=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fd=`#ifdef USE_AOMAP
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
#endif`,Od=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bd=`#ifdef USE_BATCHING
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
#endif`,kd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hd=`#ifdef USE_IRIDESCENCE
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
#endif`,Wd=`#ifdef USE_BUMPMAP
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
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$d=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Kd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Qd=`#define PI 3.141592653589793
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
} // validated`,ef=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tf=`vec3 transformedNormal = objectNormal;
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
#endif`,nf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,af=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,of="gl_FragColor = linearToOutputTexel( gl_FragColor );",lf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cf=`#ifdef USE_ENVMAP
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
#endif`,hf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,uf=`#ifdef USE_ENVMAP
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
#endif`,df=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ff=`#ifdef USE_ENVMAP
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
#endif`,pf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_f=`#ifdef USE_GRADIENTMAP
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
}`,yf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Sf=`#ifdef USE_ENVMAP
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
#endif`,wf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ef=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Af=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cf=`PhysicalMaterial material;
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
#endif`,Rf=`uniform sampler2D dfgLUT;
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
}`,If=`
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
#endif`,Pf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Df=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Nf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Uf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ff=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Of=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vf=`#if defined( USE_POINTS_UV )
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
#endif`,Gf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yf=`#ifdef USE_MORPHTARGETS
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
#endif`,Zf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$f=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ep=`#ifdef USE_NORMALMAP
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
#endif`,tp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,np=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ip=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ap=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,op=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,up=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gp=`float getShadowMask() {
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
}`,xp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_p=`#ifdef USE_SKINNING
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
#endif`,yp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vp=`#ifdef USE_SKINNING
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
#endif`,Mp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tp=`#ifdef USE_TRANSMISSION
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
#endif`,Ep=`#ifdef USE_TRANSMISSION
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
#endif`,Ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ip=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Pp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lp=`uniform sampler2D t2D;
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
}`,Dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Np=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Op=`#include <common>
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
}`,Bp=`#if DEPTH_PACKING == 3200
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
}`,kp=`#define DISTANCE
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
}`,zp=`#define DISTANCE
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
}`,Vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hp=`uniform float scale;
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
}`,Wp=`uniform vec3 diffuse;
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
}`,Xp=`#include <common>
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
}`,qp=`uniform vec3 diffuse;
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
}`,Yp=`#define LAMBERT
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
}`,Zp=`#define LAMBERT
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
}`,Jp=`#define MATCAP
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
}`,$p=`#define MATCAP
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
}`,Kp=`#define NORMAL
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
}`,jp=`#define NORMAL
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
}`,Qp=`#define PHONG
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
}`,em=`#define PHONG
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
}`,tm=`#define STANDARD
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
}`,nm=`#define STANDARD
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
}`,im=`#define TOON
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
}`,sm=`#define TOON
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
}`,rm=`uniform float size;
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
}`,am=`uniform vec3 diffuse;
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
}`,om=`#include <common>
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
}`,lm=`uniform vec3 color;
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
}`,cm=`uniform float rotation;
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
}`,hm=`uniform vec3 diffuse;
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
}`,yt={alphahash_fragment:Id,alphahash_pars_fragment:Pd,alphamap_fragment:Ld,alphamap_pars_fragment:Dd,alphatest_fragment:Nd,alphatest_pars_fragment:Ud,aomap_fragment:Fd,aomap_pars_fragment:Od,batching_pars_vertex:Bd,batching_vertex:kd,begin_vertex:zd,beginnormal_vertex:Vd,bsdfs:Gd,iridescence_fragment:Hd,bumpmap_pars_fragment:Wd,clipping_planes_fragment:Xd,clipping_planes_pars_fragment:qd,clipping_planes_pars_vertex:Yd,clipping_planes_vertex:Zd,color_fragment:Jd,color_pars_fragment:$d,color_pars_vertex:Kd,color_vertex:jd,common:Qd,cube_uv_reflection_fragment:ef,defaultnormal_vertex:tf,displacementmap_pars_vertex:nf,displacementmap_vertex:sf,emissivemap_fragment:rf,emissivemap_pars_fragment:af,colorspace_fragment:of,colorspace_pars_fragment:lf,envmap_fragment:cf,envmap_common_pars_fragment:hf,envmap_pars_fragment:uf,envmap_pars_vertex:df,envmap_physical_pars_fragment:Sf,envmap_vertex:ff,fog_vertex:pf,fog_pars_vertex:mf,fog_fragment:gf,fog_pars_fragment:xf,gradientmap_pars_fragment:_f,lightmap_pars_fragment:yf,lights_lambert_fragment:vf,lights_lambert_pars_fragment:Mf,lights_pars_begin:bf,lights_toon_fragment:wf,lights_toon_pars_fragment:Tf,lights_phong_fragment:Ef,lights_phong_pars_fragment:Af,lights_physical_fragment:Cf,lights_physical_pars_fragment:Rf,lights_fragment_begin:If,lights_fragment_maps:Pf,lights_fragment_end:Lf,lightprobes_pars_fragment:Df,logdepthbuf_fragment:Nf,logdepthbuf_pars_fragment:Uf,logdepthbuf_pars_vertex:Ff,logdepthbuf_vertex:Of,map_fragment:Bf,map_pars_fragment:kf,map_particle_fragment:zf,map_particle_pars_fragment:Vf,metalnessmap_fragment:Gf,metalnessmap_pars_fragment:Hf,morphinstance_vertex:Wf,morphcolor_vertex:Xf,morphnormal_vertex:qf,morphtarget_pars_vertex:Yf,morphtarget_vertex:Zf,normal_fragment_begin:Jf,normal_fragment_maps:$f,normal_pars_fragment:Kf,normal_pars_vertex:jf,normal_vertex:Qf,normalmap_pars_fragment:ep,clearcoat_normal_fragment_begin:tp,clearcoat_normal_fragment_maps:np,clearcoat_pars_fragment:ip,iridescence_pars_fragment:sp,opaque_fragment:rp,packing:ap,premultiplied_alpha_fragment:op,project_vertex:lp,dithering_fragment:cp,dithering_pars_fragment:hp,roughnessmap_fragment:up,roughnessmap_pars_fragment:dp,shadowmap_pars_fragment:fp,shadowmap_pars_vertex:pp,shadowmap_vertex:mp,shadowmask_pars_fragment:gp,skinbase_vertex:xp,skinning_pars_vertex:_p,skinning_vertex:yp,skinnormal_vertex:vp,specularmap_fragment:Mp,specularmap_pars_fragment:bp,tonemapping_fragment:Sp,tonemapping_pars_fragment:wp,transmission_fragment:Tp,transmission_pars_fragment:Ep,uv_pars_fragment:Ap,uv_pars_vertex:Cp,uv_vertex:Rp,worldpos_vertex:Ip,background_vert:Pp,background_frag:Lp,backgroundCube_vert:Dp,backgroundCube_frag:Np,cube_vert:Up,cube_frag:Fp,depth_vert:Op,depth_frag:Bp,distance_vert:kp,distance_frag:zp,equirect_vert:Vp,equirect_frag:Gp,linedashed_vert:Hp,linedashed_frag:Wp,meshbasic_vert:Xp,meshbasic_frag:qp,meshlambert_vert:Yp,meshlambert_frag:Zp,meshmatcap_vert:Jp,meshmatcap_frag:$p,meshnormal_vert:Kp,meshnormal_frag:jp,meshphong_vert:Qp,meshphong_frag:em,meshphysical_vert:tm,meshphysical_frag:nm,meshtoon_vert:im,meshtoon_frag:sm,points_vert:rm,points_frag:am,shadow_vert:om,shadow_frag:lm,sprite_vert:cm,sprite_frag:hm},Ge={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ce},probesMax:{value:new ce},probesResolution:{value:new ce}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},fi={basic:{uniforms:_n([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:_n([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new _t(0)},envMapIntensity:{value:1}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:_n([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:_n([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:_n([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new _t(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:_n([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:_n([Ge.points,Ge.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:_n([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:_n([Ge.common,Ge.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:_n([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:_n([Ge.sprite,Ge.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distance:{uniforms:_n([Ge.common,Ge.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distance_vert,fragmentShader:yt.distance_frag},shadow:{uniforms:_n([Ge.lights,Ge.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};fi.physical={uniforms:_n([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};var Vo={r:0,b:0,g:0},um=new Rt,Tu=new pt;Tu.set(-1,0,0,0,1,0,0,0,1);function dm(i,e,t,n,s,r){let l=new _t(0),a=s===!0?0:1,c,h,g=null,_=0,f=null;function y(b){let A=b.isScene===!0?b.background:null;if(A&&A.isTexture){let M=b.backgroundBlurriness>0;A=e.get(A,M)}return A}function S(b){let A=!1,M=y(b);M===null?T(l,a):M&&M.isColor&&(T(M,1),A=!0);let u=i.xr.getEnvironmentBlendMode();u==="additive"?t.buffers.color.setClear(0,0,0,1,r):u==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function P(b,A){let M=y(A);M&&(M.isCubeTexture||M.mapping===Dr)?(h===void 0&&(h=new xn(new Us(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:as(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(u,w,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(um.makeRotationFromEuler(A.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Tu),h.material.toneMapped=bt.getTransfer(M.colorSpace)!==Nt,(g!==M||_!==M.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,g=M,_=M.version,f=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new xn(new wr(2,2),new On({name:"BackgroundMaterial",uniforms:as(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=bt.getTransfer(M.colorSpace)!==Nt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(g!==M||_!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,g=M,_=M.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function T(b,A){b.getRGB(Vo,sc(i)),t.buffers.color.setClear(Vo.r,Vo.g,Vo.b,A,r)}function d(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return l},setClearColor:function(b,A=1){l.set(b),a=A,T(l,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,T(l,a)},render:S,addToRenderList:P,dispose:d}}function fm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,l=!1;function a($,Z,se,X,ne){let de=!1,ue=_($,X,se,Z);r!==ue&&(r=ue,h(r.object)),de=y($,X,se,ne),de&&S($,X,se,ne),ne!==null&&e.update(ne,i.ELEMENT_ARRAY_BUFFER),(de||l)&&(l=!1,M($,Z,se,X),ne!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function c(){return i.createVertexArray()}function h($){return i.bindVertexArray($)}function g($){return i.deleteVertexArray($)}function _($,Z,se,X){let ne=X.wireframe===!0,de=n[Z.id];de===void 0&&(de={},n[Z.id]=de);let ue=$.isInstancedMesh===!0?$.id:0,ve=de[ue];ve===void 0&&(ve={},de[ue]=ve);let fe=ve[se.id];fe===void 0&&(fe={},ve[se.id]=fe);let ee=fe[ne];return ee===void 0&&(ee=f(c()),fe[ne]=ee),ee}function f($){let Z=[],se=[],X=[];for(let ne=0;ne<t;ne++)Z[ne]=0,se[ne]=0,X[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:se,attributeDivisors:X,object:$,attributes:{},index:null}}function y($,Z,se,X){let ne=r.attributes,de=Z.attributes,ue=0,ve=se.getAttributes();for(let fe in ve)if(ve[fe].location>=0){let C=ne[fe],Ve=de[fe];if(Ve===void 0&&(fe==="instanceMatrix"&&$.instanceMatrix&&(Ve=$.instanceMatrix),fe==="instanceColor"&&$.instanceColor&&(Ve=$.instanceColor)),C===void 0||C.attribute!==Ve||Ve&&C.data!==Ve.data)return!0;ue++}return r.attributesNum!==ue||r.index!==X}function S($,Z,se,X){let ne={},de=Z.attributes,ue=0,ve=se.getAttributes();for(let fe in ve)if(ve[fe].location>=0){let C=de[fe];C===void 0&&(fe==="instanceMatrix"&&$.instanceMatrix&&(C=$.instanceMatrix),fe==="instanceColor"&&$.instanceColor&&(C=$.instanceColor));let Ve={};Ve.attribute=C,C&&C.data&&(Ve.data=C.data),ne[fe]=Ve,ue++}r.attributes=ne,r.attributesNum=ue,r.index=X}function P(){let $=r.newAttributes;for(let Z=0,se=$.length;Z<se;Z++)$[Z]=0}function T($){d($,0)}function d($,Z){let se=r.newAttributes,X=r.enabledAttributes,ne=r.attributeDivisors;se[$]=1,X[$]===0&&(i.enableVertexAttribArray($),X[$]=1),ne[$]!==Z&&(i.vertexAttribDivisor($,Z),ne[$]=Z)}function b(){let $=r.newAttributes,Z=r.enabledAttributes;for(let se=0,X=Z.length;se<X;se++)Z[se]!==$[se]&&(i.disableVertexAttribArray(se),Z[se]=0)}function A($,Z,se,X,ne,de,ue){ue===!0?i.vertexAttribIPointer($,Z,se,ne,de):i.vertexAttribPointer($,Z,se,X,ne,de)}function M($,Z,se,X){P();let ne=X.attributes,de=se.getAttributes(),ue=Z.defaultAttributeValues;for(let ve in de){let fe=de[ve];if(fe.location>=0){let ee=ne[ve];if(ee===void 0&&(ve==="instanceMatrix"&&$.instanceMatrix&&(ee=$.instanceMatrix),ve==="instanceColor"&&$.instanceColor&&(ee=$.instanceColor)),ee!==void 0){let C=ee.normalized,Ve=ee.itemSize,We=e.get(ee);if(We===void 0)continue;let rt=We.buffer,Q=We.type,ut=We.bytesPerElement,xe=Q===i.INT||Q===i.UNSIGNED_INT||ee.gpuType===Qa;if(ee.isInterleavedBufferAttribute){let ye=ee.data,He=ye.stride,at=ee.offset;if(ye.isInstancedInterleavedBuffer){for(let Ne=0;Ne<fe.locationSize;Ne++)d(fe.location+Ne,ye.meshPerAttribute);$.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Ne=0;Ne<fe.locationSize;Ne++)T(fe.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let Ne=0;Ne<fe.locationSize;Ne++)A(fe.location+Ne,Ve/fe.locationSize,Q,C,He*ut,(at+Ve/fe.locationSize*Ne)*ut,xe)}else{if(ee.isInstancedBufferAttribute){for(let ye=0;ye<fe.locationSize;ye++)d(fe.location+ye,ee.meshPerAttribute);$.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ye=0;ye<fe.locationSize;ye++)T(fe.location+ye);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let ye=0;ye<fe.locationSize;ye++)A(fe.location+ye,Ve/fe.locationSize,Q,C,Ve*ut,Ve/fe.locationSize*ye*ut,xe)}}else if(ue!==void 0){let C=ue[ve];if(C!==void 0)switch(C.length){case 2:i.vertexAttrib2fv(fe.location,C);break;case 3:i.vertexAttrib3fv(fe.location,C);break;case 4:i.vertexAttrib4fv(fe.location,C);break;default:i.vertexAttrib1fv(fe.location,C)}}}}b()}function u(){D();for(let $ in n){let Z=n[$];for(let se in Z){let X=Z[se];for(let ne in X){let de=X[ne];for(let ue in de)g(de[ue].object),delete de[ue];delete X[ne]}}delete n[$]}}function w($){if(n[$.id]===void 0)return;let Z=n[$.id];for(let se in Z){let X=Z[se];for(let ne in X){let de=X[ne];for(let ue in de)g(de[ue].object),delete de[ue];delete X[ne]}}delete n[$.id]}function N($){for(let Z in n){let se=n[Z];for(let X in se){let ne=se[X];if(ne[$.id]===void 0)continue;let de=ne[$.id];for(let ue in de)g(de[ue].object),delete de[ue];delete ne[$.id]}}}function x($){for(let Z in n){let se=n[Z],X=$.isInstancedMesh===!0?$.id:0,ne=se[X];if(ne!==void 0){for(let de in ne){let ue=ne[de];for(let ve in ue)g(ue[ve].object),delete ue[ve];delete ne[de]}delete se[X],Object.keys(se).length===0&&delete n[Z]}}}function D(){V(),l=!0,r!==s&&(r=s,h(r.object))}function V(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:V,dispose:u,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:N,initAttributes:P,enableAttribute:T,disableUnusedAttributes:b}}function pm(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function l(c,h,g){g!==0&&(i.drawArraysInstanced(n,c,h,g),t.update(h,n,g))}function a(c,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,g);let f=0;for(let y=0;y<g;y++)f+=h[y];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=l,this.renderMultiDraw=a}function mm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let N=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(N){return!(N!==Wn&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){let x=N===Qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==An&&N!==Hn&&!x&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp",g=c(h);g!==h&&(lt("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);let _=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let y=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=i.getParameter(i.MAX_TEXTURE_SIZE),T=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),u=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:l,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:f,maxTextures:y,maxVertexTextures:S,maxTextureSize:P,maxCubemapSize:T,maxAttributes:d,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:M,maxSamples:u,samples:w}}function gm(i){let e=this,t=null,n=0,s=!1,r=!1,l=new Un,a=new pt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(_,f){let y=_.length!==0||f||n!==0||s;return s=f,n=_.length,y},this.beginShadows=function(){r=!0,g(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(_,f){t=g(_,f,0)},this.setState=function(_,f,y){let S=_.clippingPlanes,P=_.clipIntersection,T=_.clipShadows,d=i.get(_);if(!s||S===null||S.length===0||r&&!T)r?g(null):h();else{let b=r?0:n,A=b*4,M=d.clippingState||null;c.value=M,M=g(S,f,A,y);for(let u=0;u!==A;++u)M[u]=t[u];d.clippingState=M,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=b}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function g(_,f,y,S){let P=_!==null?_.length:0,T=null;if(P!==0){if(T=c.value,S!==!0||T===null){let d=y+P*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(T===null||T.length<d)&&(T=new Float32Array(d));for(let A=0,M=y;A!==P;++A,M+=4)l.copy(_[A]).applyMatrix4(b,a),l.normal.toArray(T,M),T[M+3]=l.constant}c.value=T,c.needsUpdate=!0}return e.numPlanes=P,e.numIntersection=0,T}}var Ws=4,xm=6,_m=20,ym=256,Gr=new Bs,iu=new _t,fc=null,pc=0,mc=0,gc=!1,vm=new ce,os=new ce,Ho=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:l=256,position:a=vm}=r;fc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ru(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(fc,pc,mc),this._renderer.xr.enabled=gc,e.scissorTest=!1,Hs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gi||e.mapping===rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Qn,format:Wn,colorSpace:lr,depthBuffer:!1},s=su(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=su(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Mm(r)),this._blurMaterial=Sm(r,e,t),this._ggxMaterial=bm(r,e,t)}return s}_compileMaterial(e){let t=new xn(new Fn,e);this._renderer.compile(t,Gr)}_sceneToCubeUV(e,t,n,s,r){let c=new mn(90,1,t,n),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,f=_.autoClear,y=_.toneMapping;_.getClearColor(iu),_.toneMapping=Kn,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(s),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xn(new Us,new yr({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1})));let P=this._backgroundBox,T=P.material,d=!1,b=e.background;b?b.isColor&&(T.color.copy(b),e.background=null,d=!0):(T.color.copy(iu),d=!0);for(let A=0;A<6;A++){let M=A%3;M===0?(c.up.set(0,h[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+g[A],r.y,r.z)):M===1?(c.up.set(0,0,h[A]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+g[A],r.z)):(c.up.set(0,h[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+g[A]));let u=this._cubeSize;Hs(s,M*u,A>2?u:0,u,u),_.setRenderTarget(s),d&&_.render(P,c),_.render(e,c)}_.toneMapping=y,_.autoClear=f,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Gi||e.mapping===rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=au()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ru());let r=s?this._cubemapMaterial:this._equirectMaterial,l=this._lodMeshes[0];l.material=r;let a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Hs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(l,Gr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,l=this._ggxMaterial,a=this._lodMeshes[n];a.material=l;let c=l.uniforms,h=n/(this._lodMeshes.length-1),g=t/(this._lodMeshes.length-1),_=Math.sqrt(h*h-g*g),f=h*1.25,y=_*f,{_lodMax:S}=this,P=this._sizeLods[n],T=3*P*(n>S-Ws?n-S+Ws:0),d=4*(this._cubeSize-P);c.envMap.value=e.texture,c.roughness.value=y,c.mipInt.value=S-t,Hs(r,T,d,3*P,2*P),s.setRenderTarget(r),s.render(a,Gr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=S-n,Hs(e,T,d,3*P,2*P),s.setRenderTarget(e),s.render(a,Gr)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,l=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,l),this._blurPass(r,e,n,n,l)}_blurPass(e,t,n,s,r){let l=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let h=a.uniforms;h.envMap.value=e.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-n;let g=this._sizeLods[s],_=3*g*(s>this._lodMax-Ws?s-this._lodMax+Ws:0),f=4*(this._cubeSize-g);Hs(t,_,f,3*g,2*g),l.setRenderTarget(t),l.render(c,Gr)}};function Mm(i){let e=[],t=[],n=i,s=i-Ws+1+xm;for(let r=0;r<s;r++){let l=Math.pow(2,n);e.push(l);let a=1/(l-2),c=-a,h=1+a,g=[c,c,h,c,h,h,c,c,h,h,c,h],_=6,f=6,y=3,S=new Float32Array(y*f*_),P=new Float32Array(y*f*_);for(let d=0;d<_;d++){let b=d%3*2/3-1,A=d>2?0:-1,M=[b,A,0,b+2/3,A,0,b+2/3,A+1,0,b,A,0,b+2/3,A+1,0,b,A+1,0];S.set(M,y*f*d);for(let u=0;u<f;u++){let w=g[u*2]*2-1,N=g[u*2+1]*2-1;d===0?os.set(1,N,w):d===1?os.set(-w,1,-N):d===2?os.set(-w,N,1):d===3?os.set(-1,N,-w):d===4?os.set(-w,-1,N):os.set(w,N,-1),os.toArray(P,(d*f+u)*y)}}let T=new Fn;T.setAttribute("position",new Sn(S,y)),T.setAttribute("outputDirection",new Sn(P,y)),t.push(new xn(T,null)),n>Ws&&n--}return{lodMeshes:t,sizeLods:e}}function su(i,e,t){let n=new En(i,e,t);return n.texture.mapping=Dr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function bm(i,e,t){return new On({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ym,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qo(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Sm(i,e,t){return new On({name:"SphericalGaussianBlur",defines:{SAMPLES:_m,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:qo(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function ru(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qo(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function au(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function qo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Wo=class extends En{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new br(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Us(5,5,5),r=new On({name:"CubemapFromEquirect",uniforms:as(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:hi});r.uniforms.tEquirect.value=t;let l=new xn(s,r),a=t.minFilter;return t.minFilter===ui&&(t.minFilter=nn),new Ya(1,10,this).update(e,l),t.minFilter=a,l.geometry.dispose(),l.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,s);e.setRenderTarget(r)}};function wm(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,y=!1){return f==null?null:y?l(f):r(f)}function r(f){if(f&&f.isTexture){let y=f.mapping;if(y===$a||y===Ka)if(e.has(f)){let S=e.get(f).texture;return a(S,f.mapping)}else{let S=f.image;if(S&&S.height>0){let P=new Wo(S.height);return P.fromEquirectangularTexture(i,f),e.set(f,P),f.addEventListener("dispose",h),a(P.texture,f.mapping)}else return null}}return f}function l(f){if(f&&f.isTexture){let y=f.mapping,S=y===$a||y===Ka,P=y===Gi||y===rs;if(S||P){let T=t.get(f),d=T!==void 0?T.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return n===null&&(n=new Ho(i)),T=S?n.fromEquirectangular(f,T):n.fromCubemap(f,T),T.texture.pmremVersion=f.pmremVersion,t.set(f,T),T.texture;if(T!==void 0)return T.texture;{let b=f.image;return S&&b&&b.height>0||P&&b&&c(b)?(n===null&&(n=new Ho(i)),T=S?n.fromEquirectangular(f):n.fromCubemap(f),T.texture.pmremVersion=f.pmremVersion,t.set(f,T),f.addEventListener("dispose",g),T.texture):null}}}return f}function a(f,y){return y===$a?f.mapping=Gi:y===Ka&&(f.mapping=rs),f}function c(f){let y=0,S=6;for(let P=0;P<S;P++)f[P]!==void 0&&y++;return y===S}function h(f){let y=f.target;y.removeEventListener("dispose",h);let S=e.get(y);S!==void 0&&(e.delete(y),S.dispose())}function g(f){let y=f.target;y.removeEventListener("dispose",g);let S=t.get(y);S!==void 0&&(t.delete(y),S.dispose())}function _(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:_}}function Tm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&es("WebGLRenderer: "+n+" extension not supported."),s}}}function Em(i,e,t,n){let s={},r=new WeakMap;function l(_){let f=_.target;f.index!==null&&e.remove(f.index);for(let S in f.attributes)e.remove(f.attributes[S]);f.removeEventListener("dispose",l),delete s[f.id];let y=r.get(f);y&&(e.remove(y),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(_,f){return s[f.id]===!0||(f.addEventListener("dispose",l),s[f.id]=!0,t.memory.geometries++),f}function c(_){let f=_.attributes;for(let y in f)e.update(f[y],i.ARRAY_BUFFER)}function h(_){let f=[],y=_.index,S=_.attributes.position,P=0;if(S===void 0)return;if(y!==null){let b=y.array;P=y.version;for(let A=0,M=b.length;A<M;A+=3){let u=b[A+0],w=b[A+1],N=b[A+2];f.push(u,w,w,N,N,u)}}else{let b=S.array;P=S.version;for(let A=0,M=b.length/3-1;A<M;A+=3){let u=A+0,w=A+1,N=A+2;f.push(u,w,w,N,N,u)}}let T=new(S.count>=65535?mr:pr)(f,1);T.version=P;let d=r.get(_);d&&e.remove(d),r.set(_,T)}function g(_){let f=r.get(_);if(f){let y=_.index;y!==null&&f.version<y.version&&h(_)}else h(_);return r.get(_)}return{get:a,update:c,getWireframeAttribute:g}}function Am(i,e,t){let n;function s(_){n=_}let r,l;function a(_){r=_.type,l=_.bytesPerElement}function c(_,f){i.drawElements(n,f,r,_*l),t.update(f,n,1)}function h(_,f,y){y!==0&&(i.drawElementsInstanced(n,f,r,_*l,y),t.update(f,n,y))}function g(_,f,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,_,0,y);let P=0;for(let T=0;T<y;T++)P+=f[T];t.update(P,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=h,this.renderMultiDraw=g}function Cm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,l,a){switch(t.calls++,l){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:ot("WebGLInfo: Unknown draw mode:",l);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Rm(i,e,t){let n=new WeakMap,s=new Jt;function r(l,a,c){let h=l.morphTargetInfluences,g=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,_=g!==void 0?g.length:0,f=n.get(a);if(f===void 0||f.count!==_){let D=function(){N.dispose(),n.delete(a),a.removeEventListener("dispose",D)};f!==void 0&&f.texture.dispose();let y=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,P=a.morphAttributes.color!==void 0,T=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],A=0;y===!0&&(A=1),S===!0&&(A=2),P===!0&&(A=3);let M=a.attributes.position.count*A,u=1;M>e.maxTextureSize&&(u=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let w=new Float32Array(M*u*4*_),N=new ts(w,M,u,_);N.type=Hn,N.needsUpdate=!0;let x=A*4;for(let V=0;V<_;V++){let $=T[V],Z=d[V],se=b[V],X=M*u*4*V;for(let ne=0;ne<$.count;ne++){let de=ne*x;y===!0&&(s.fromBufferAttribute($,ne),w[X+de+0]=s.x,w[X+de+1]=s.y,w[X+de+2]=s.z,w[X+de+3]=0),S===!0&&(s.fromBufferAttribute(Z,ne),w[X+de+4]=s.x,w[X+de+5]=s.y,w[X+de+6]=s.z,w[X+de+7]=0),P===!0&&(s.fromBufferAttribute(se,ne),w[X+de+8]=s.x,w[X+de+9]=s.y,w[X+de+10]=s.z,w[X+de+11]=se.itemSize===4?s.w:1)}}f={count:_,texture:N,size:new Mt(M,u)},n.set(a,f),a.addEventListener("dispose",D)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",l.morphTexture,t);else{let y=0;for(let P=0;P<h.length;P++)y+=h[P];let S=a.morphTargetsRelative?1:1-y;c.getUniforms().setValue(i,"morphTargetBaseInfluence",S),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Im(i,e,t,n,s){let r=new WeakMap;function l(h){let g=s.render.frame,_=h.geometry,f=e.get(h,_);if(r.get(f)!==g&&(e.update(f),r.set(f,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),r.get(h)!==g&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,g))),h.isSkinnedMesh){let y=h.skeleton;r.get(y)!==g&&(y.update(),r.set(y,g))}return f}function a(){r=new WeakMap}function c(h){let g=h.target;g.removeEventListener("dispose",c),n.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:l,dispose:a}}var Pm={[Hl]:"LINEAR_TONE_MAPPING",[Wl]:"REINHARD_TONE_MAPPING",[Xl]:"CINEON_TONE_MAPPING",[Lr]:"ACES_FILMIC_TONE_MAPPING",[Yl]:"AGX_TONE_MAPPING",[Zl]:"NEUTRAL_TONE_MAPPING",[ql]:"CUSTOM_TONE_MAPPING"};function Lm(i,e,t,n,s,r){let l=new En(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,h=new Fn;h.setAttribute("position",new wn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new wn([0,2,0,0,2,0],2));let g=new Fs({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new xn(h,g),f=new Bs(-1,1,1,-1,0,1),y=null,S=null,P=!1,T,d=null,b=[],A=!1;this.setSize=function(M,u){l.setSize(M,u),a!==null&&a.setSize(M,u),c!==null&&c.setSize(M,u);for(let w=0;w<b.length;w++){let N=b[w];N.setSize&&N.setSize(M,u)}},this.setEffects=function(M){b=M,A=b.length>0&&b[0].isRenderPass===!0;let u=l.width,w=l.height;b.length>0&&a===null&&(a=new En(u,w,{type:Qn,depthBuffer:!1,stencilBuffer:!1}),c=new En(u,w,{type:Qn,depthBuffer:!1,stencilBuffer:!1}));for(let N=0;N<b.length;N++){let x=b[N];x.setSize&&x.setSize(u,w)}},this.begin=function(M,u){if(P||M.toneMapping===Kn&&b.length===0)return!1;if(d=u,u!==null){let w=u.width,N=u.height;(l.width!==w||l.height!==N)&&this.setSize(w,N)}return A===!1&&M.setRenderTarget(l),T=M.toneMapping,M.toneMapping=Kn,!0},this.hasRenderPass=function(){return A},this.end=function(M,u){M.toneMapping=T,P=!0;let w=l,N=a;for(let x=0;x<b.length;x++){let D=b[x];D.enabled!==!1&&(D.render(M,N,w,u),D.needsSwap!==!1&&(w=N,N=N===a?c:a))}if(y!==M.outputColorSpace||S!==M.toneMapping){y=M.outputColorSpace,S=M.toneMapping,g.defines={},bt.getTransfer(y)===Nt&&(g.defines.SRGB_TRANSFER="");let x=Pm[S];x&&(g.defines[x]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=w.texture,M.setRenderTarget(d),M.render(_,f),d=null,P=!1},this.isCompositing=function(){return P},this.dispose=function(){l.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),h.dispose(),g.dispose()}}var Eu=new Tn,yc=new Oi(1,1),Au=new ts,Cu=new Da,Ru=new br,ou=[],lu=[],cu=new Float32Array(16),hu=new Float32Array(9),uu=new Float32Array(4);function qs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=ou[s];if(r===void 0&&(r=new Float32Array(s),ou[s]=r),e!==0){n.toArray(r,0);for(let l=1,a=0;l!==e;++l)a+=t,i[l].toArray(r,a)}return r}function sn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function rn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Yo(i,e){let t=lu[e];t===void 0&&(t=new Int32Array(e),lu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Dm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Nm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2fv(this.addr,e),rn(t,e)}}function Um(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;i.uniform3fv(this.addr,e),rn(t,e)}}function Fm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4fv(this.addr,e),rn(t,e)}}function Om(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;uu.set(n),i.uniformMatrix2fv(this.addr,!1,uu),rn(t,n)}}function Bm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;hu.set(n),i.uniformMatrix3fv(this.addr,!1,hu),rn(t,n)}}function km(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;cu.set(n),i.uniformMatrix4fv(this.addr,!1,cu),rn(t,n)}}function zm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Vm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2iv(this.addr,e),rn(t,e)}}function Gm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3iv(this.addr,e),rn(t,e)}}function Hm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4iv(this.addr,e),rn(t,e)}}function Wm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Xm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2uiv(this.addr,e),rn(t,e)}}function qm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3uiv(this.addr,e),rn(t,e)}}function Ym(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4uiv(this.addr,e),rn(t,e)}}function Zm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(yc.compareFunction=t.isReversedDepthBuffer()?ko:Bo,r=yc):r=Eu,t.setTexture2D(e||r,s)}function Jm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Cu,s)}function $m(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ru,s)}function Km(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Au,s)}function jm(i){switch(i){case 5126:return Dm;case 35664:return Nm;case 35665:return Um;case 35666:return Fm;case 35674:return Om;case 35675:return Bm;case 35676:return km;case 5124:case 35670:return zm;case 35667:case 35671:return Vm;case 35668:case 35672:return Gm;case 35669:case 35673:return Hm;case 5125:return Wm;case 36294:return Xm;case 36295:return qm;case 36296:return Ym;case 35678:case 36198:case 36298:case 36306:case 35682:return Zm;case 35679:case 36299:case 36307:return Jm;case 35680:case 36300:case 36308:case 36293:return $m;case 36289:case 36303:case 36311:case 36292:return Km}}function Qm(i,e){i.uniform1fv(this.addr,e)}function e0(i,e){let t=qs(e,this.size,2);i.uniform2fv(this.addr,t)}function t0(i,e){let t=qs(e,this.size,3);i.uniform3fv(this.addr,t)}function n0(i,e){let t=qs(e,this.size,4);i.uniform4fv(this.addr,t)}function i0(i,e){let t=qs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function s0(i,e){let t=qs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function r0(i,e){let t=qs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function a0(i,e){i.uniform1iv(this.addr,e)}function o0(i,e){i.uniform2iv(this.addr,e)}function l0(i,e){i.uniform3iv(this.addr,e)}function c0(i,e){i.uniform4iv(this.addr,e)}function h0(i,e){i.uniform1uiv(this.addr,e)}function u0(i,e){i.uniform2uiv(this.addr,e)}function d0(i,e){i.uniform3uiv(this.addr,e)}function f0(i,e){i.uniform4uiv(this.addr,e)}function p0(i,e,t){let n=this.cache,s=e.length,r=Yo(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));let l;this.type===i.SAMPLER_2D_SHADOW?l=yc:l=Eu;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||l,r[a])}function m0(i,e,t){let n=this.cache,s=e.length,r=Yo(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let l=0;l!==s;++l)t.setTexture3D(e[l]||Cu,r[l])}function g0(i,e,t){let n=this.cache,s=e.length,r=Yo(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let l=0;l!==s;++l)t.setTextureCube(e[l]||Ru,r[l])}function x0(i,e,t){let n=this.cache,s=e.length,r=Yo(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let l=0;l!==s;++l)t.setTexture2DArray(e[l]||Au,r[l])}function _0(i){switch(i){case 5126:return Qm;case 35664:return e0;case 35665:return t0;case 35666:return n0;case 35674:return i0;case 35675:return s0;case 35676:return r0;case 5124:case 35670:return a0;case 35667:case 35671:return o0;case 35668:case 35672:return l0;case 35669:case 35673:return c0;case 5125:return h0;case 36294:return u0;case 36295:return d0;case 36296:return f0;case 35678:case 36198:case 36298:case 36306:case 35682:return p0;case 35679:case 36299:case 36307:return m0;case 35680:case 36300:case 36308:case 36293:return g0;case 36289:case 36303:case 36311:case 36292:return x0}}var vc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=jm(t.type)}},Mc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_0(t.type)}},bc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,l=s.length;r!==l;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},xc=/(\w+)(\])?(\[|\.)?/g;function du(i,e){i.seq.push(e),i.map[e.id]=e}function y0(i,e,t){let n=i.name,s=n.length;for(xc.lastIndex=0;;){let r=xc.exec(n),l=xc.lastIndex,a=r[1],c=r[2]==="]",h=r[3];if(c&&(a=a|0),h===void 0||h==="["&&l+2===s){du(t,h===void 0?new vc(a,i,e):new Mc(a,i,e));break}else{let _=t.map[a];_===void 0&&(_=new bc(a),du(t,_)),t=_}}}var Xs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let l=0;l<n;++l){let a=e.getActiveUniform(t,l),c=e.getUniformLocation(t,a.name);y0(a,c,this)}let s=[],r=[];for(let l of this.seq)l.type===e.SAMPLER_2D_SHADOW||l.type===e.SAMPLER_CUBE_SHADOW||l.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(l):r.push(l);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,l=t.length;r!==l;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let l=e[s];l.id in t&&n.push(l)}return n}};function fu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var v0=37297,M0=0;function b0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let l=s;l<r;l++){let a=l+1;n.push(`${a===e?">":" "} ${a}: ${t[l]}`)}return n.join(`
`)}var pu=new pt;function S0(i){bt._getMatrix(pu,bt.workingColorSpace,i);let e=`mat3( ${pu.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(i)){case cr:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function mu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let l=/ERROR: 0:(\d+)/.exec(r);if(l){let a=parseInt(l[1]);return t.toUpperCase()+`

`+r+`

`+b0(i.getShaderSource(e),a)}else return r}function w0(i,e){let t=S0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var T0={[Hl]:"Linear",[Wl]:"Reinhard",[Xl]:"Cineon",[Lr]:"ACESFilmic",[Yl]:"AgX",[Zl]:"Neutral",[ql]:"Custom"};function E0(i,e){let t=T0[e];return t===void 0?(lt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Go=new ce;function A0(){bt.getLuminanceCoefficients(Go);let i=Go.x.toFixed(4),e=Go.y.toFixed(4),t=Go.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function C0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wr).join(`
`)}function R0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function I0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),l=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[l]={type:r.type,location:i.getAttribLocation(e,l),locationSize:a}}return t}function Wr(i){return i!==""}function gu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var P0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sc(i){return i.replace(P0,D0)}var L0=new Map;function D0(i,e){let t=yt[e];if(t===void 0){let n=L0.get(e);if(n!==void 0)t=yt[n],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Sc(t)}var N0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _u(i){return i.replace(N0,U0)}function U0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yu(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var F0={[is]:"SHADOWMAP_TYPE_PCF",[ks]:"SHADOWMAP_TYPE_VSM"};function O0(i){return F0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var B0={[Gi]:"ENVMAP_TYPE_CUBE",[rs]:"ENVMAP_TYPE_CUBE",[Dr]:"ENVMAP_TYPE_CUBE_UV"};function k0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":B0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var z0={[rs]:"ENVMAP_MODE_REFRACTION"};function V0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":z0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var G0={[Gl]:"ENVMAP_BLENDING_MULTIPLY",[Oh]:"ENVMAP_BLENDING_MIX",[Bh]:"ENVMAP_BLENDING_ADD"};function H0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":G0[i.combine]||"ENVMAP_BLENDING_NONE"}function W0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function X0(i,e,t,n){let s=i.getContext(),r=t.defines,l=t.vertexShader,a=t.fragmentShader,c=O0(t),h=k0(t),g=V0(t),_=H0(t),f=W0(t),y=C0(t),S=R0(r),P=s.createProgram(),T,d,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(T=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Wr).join(`
`),T.length>0&&(T+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Wr).join(`
`),d.length>0&&(d+=`
`)):(T=[yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),d=[yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+g:"",t.envMap?"#define "+_:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kn?"#define TONE_MAPPING":"",t.toneMapping!==Kn?yt.tonemapping_pars_fragment:"",t.toneMapping!==Kn?E0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,w0("linearToOutputTexel",t.outputColorSpace),A0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wr).join(`
`)),l=Sc(l),l=gu(l,t),l=xu(l,t),a=Sc(a),a=gu(a,t),a=xu(a,t),l=_u(l),a=_u(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,T=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+T,d=["#define varying in",t.glslVersion===Vr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let A=b+T+l,M=b+d+a,u=fu(s,s.VERTEX_SHADER,A),w=fu(s,s.FRAGMENT_SHADER,M);s.attachShader(P,u),s.attachShader(P,w),t.index0AttributeName!==void 0?s.bindAttribLocation(P,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(P,0,"position"),s.linkProgram(P);function N($){if(i.debug.checkShaderErrors){let Z=s.getProgramInfoLog(P)||"",se=s.getShaderInfoLog(u)||"",X=s.getShaderInfoLog(w)||"",ne=Z.trim(),de=se.trim(),ue=X.trim(),ve=!0,fe=!0;if(s.getProgramParameter(P,s.LINK_STATUS)===!1)if(ve=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,P,u,w);else{let ee=mu(s,u,"vertex"),C=mu(s,w,"fragment");ot("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(P,s.VALIDATE_STATUS)+`

Material Name: `+$.name+`
Material Type: `+$.type+`

Program Info Log: `+ne+`
`+ee+`
`+C)}else ne!==""?lt("WebGLProgram: Program Info Log:",ne):(de===""||ue==="")&&(fe=!1);fe&&($.diagnostics={runnable:ve,programLog:ne,vertexShader:{log:de,prefix:T},fragmentShader:{log:ue,prefix:d}})}s.deleteShader(u),s.deleteShader(w),x=new Xs(s,P),D=I0(s,P)}let x;this.getUniforms=function(){return x===void 0&&N(this),x};let D;this.getAttributes=function(){return D===void 0&&N(this),D};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=s.getProgramParameter(P,v0)),V},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(P),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=M0++,this.cacheKey=e,this.usedTimes=1,this.program=P,this.vertexShader=u,this.fragmentShader=w,this}var q0=0,wc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Tc(e),t.set(e,n)),n}},Tc=class{constructor(e){this.id=q0++,this.code=e,this.usedTimes=0}};function Y0(i){return i===Wi||i===kr||i===zr}function Z0(i,e,t,n,s,r){let l=new Ls,a=new wc,c=new Set,h=[],g=new Map,_=n.logarithmicDepthBuffer,f=n.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(x){return c.add(x),x===0?"uv":`uv${x}`}function P(x,D,V,$,Z,se){let X=$.fog,ne=Z.geometry,de=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?$.environment:null,ue=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ve=e.get(x.envMap||de,ue),fe=ve&&ve.mapping===Dr?ve.image.height:null,ee=y[x.type];x.precision!==null&&(f=n.getMaxPrecision(x.precision),f!==x.precision&&lt("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));let C=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Ve=C!==void 0?C.length:0,We=0;ne.morphAttributes.position!==void 0&&(We=1),ne.morphAttributes.normal!==void 0&&(We=2),ne.morphAttributes.color!==void 0&&(We=3);let rt,Q,ut,xe;if(ee){let O=fi[ee];rt=O.vertexShader,Q=O.fragmentShader}else{rt=x.vertexShader,Q=x.fragmentShader;let O=a.getVertexShaderStage(x),te=a.getFragmentShaderStage(x);a.update(x,O,te),ut=O.id,xe=te.id}let ye=i.getRenderTarget(),He=i.state.buffers.depth.getReversed(),at=Z.isInstancedMesh===!0,Ne=Z.isBatchedMesh===!0,qe=!!x.map,Bt=!!x.matcap,it=!!ve,Qe=!!x.aoMap,ct=!!x.lightMap,st=!!x.bumpMap&&x.wireframe===!1,dt=!!x.normalMap,It=!!x.displacementMap,Gt=!!x.emissiveMap,xt=!!x.metalnessMap,Pt=!!x.roughnessMap,Y=x.anisotropy>0,Ct=x.clearcoat>0,vt=x.dispersion>0,F=x.retroreflectivity>0,m=x.iridescence>0,H=x.sheen>0,k=x.transmission>0,oe=Y&&!!x.anisotropyMap,we=Ct&&!!x.clearcoatMap,be=Ct&&!!x.clearcoatNormalMap,he=Ct&&!!x.clearcoatRoughnessMap,ge=m&&!!x.iridescenceMap,Ee=m&&!!x.iridescenceThicknessMap,Ue=H&&!!x.sheenColorMap,Re=H&&!!x.sheenRoughnessMap,Ie=!!x.specularMap,Ze=!!x.specularColorMap,Ke=!!x.specularIntensityMap,tt=k&&!!x.transmissionMap,J=k&&!!x.thicknessMap,Ae=!!x.gradientMap,_e=!!x.alphaMap,De=x.alphaTest>0,L=!!x.alphaHash,B=!!x.extensions,j=Kn;x.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(j=i.toneMapping);let E={shaderID:ee,shaderType:x.type,shaderName:x.name,vertexShader:rt,fragmentShader:Q,defines:x.defines,customVertexShaderID:ut,customFragmentShaderID:xe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Ne,batchingColor:Ne&&Z._colorsTexture!==null,instancing:at,instancingColor:at&&Z.instanceColor!==null,instancingMorph:at&&Z.morphTexture!==null,outputColorSpace:ye===null?i.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:bt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:qe,matcap:Bt,envMap:it,envMapMode:it&&ve.mapping,envMapCubeUVHeight:fe,aoMap:Qe,lightMap:ct,bumpMap:st,normalMap:dt,displacementMap:It,emissiveMap:Gt,normalMapObjectSpace:dt&&x.normalMapType===Vh,normalMapTangentSpace:dt&&x.normalMapType===Oo,packedNormalMap:dt&&x.normalMapType===Oo&&Y0(x.normalMap.format),metalnessMap:xt,roughnessMap:Pt,anisotropy:Y,anisotropyMap:oe,clearcoat:Ct,clearcoatMap:we,clearcoatNormalMap:be,clearcoatRoughnessMap:he,dispersion:vt,retroreflection:F,iridescence:m,iridescenceMap:ge,iridescenceThicknessMap:Ee,sheen:H,sheenColorMap:Ue,sheenRoughnessMap:Re,specularMap:Ie,specularColorMap:Ze,specularIntensityMap:Ke,transmission:k,transmissionMap:tt,thicknessMap:J,gradientMap:Ae,opaque:x.transparent===!1&&x.blending===zs&&x.alphaToCoverage===!1,alphaMap:_e,alphaTest:De,alphaHash:L,combine:x.combine,mapUv:qe&&S(x.map.channel),aoMapUv:Qe&&S(x.aoMap.channel),lightMapUv:ct&&S(x.lightMap.channel),bumpMapUv:st&&S(x.bumpMap.channel),normalMapUv:dt&&S(x.normalMap.channel),displacementMapUv:It&&S(x.displacementMap.channel),emissiveMapUv:Gt&&S(x.emissiveMap.channel),metalnessMapUv:xt&&S(x.metalnessMap.channel),roughnessMapUv:Pt&&S(x.roughnessMap.channel),anisotropyMapUv:oe&&S(x.anisotropyMap.channel),clearcoatMapUv:we&&S(x.clearcoatMap.channel),clearcoatNormalMapUv:be&&S(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&S(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&S(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&S(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&S(x.sheenColorMap.channel),sheenRoughnessMapUv:Re&&S(x.sheenRoughnessMap.channel),specularMapUv:Ie&&S(x.specularMap.channel),specularColorMapUv:Ze&&S(x.specularColorMap.channel),specularIntensityMapUv:Ke&&S(x.specularIntensityMap.channel),transmissionMapUv:tt&&S(x.transmissionMap.channel),thicknessMapUv:J&&S(x.thicknessMap.channel),alphaMapUv:_e&&S(x.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(dt||Y),vertexNormals:!!ne.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!ne.attributes.uv&&(qe||_e),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||ne.attributes.normal===void 0&&dt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:He,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:ne.attributes.position!==void 0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:Ve,morphTextureStride:We,numSunLights:D.sun.length,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numSunLightShadows:D.sunShadowMap.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:se.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:j,decodeVideoTexture:qe&&x.map.isVideoTexture===!0&&bt.getTransfer(x.map.colorSpace)===Nt,decodeVideoTextureEmissive:Gt&&x.emissiveMap.isVideoTexture===!0&&bt.getTransfer(x.emissiveMap.colorSpace)===Nt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===kn,flipSided:x.side===Mn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:B&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(B&&x.extensions.multiDraw===!0||Ne)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return E.vertexUv1s=c.has(1),E.vertexUv2s=c.has(2),E.vertexUv3s=c.has(3),c.clear(),E}function T(x){let D=[];if(x.shaderID?D.push(x.shaderID):(D.push(x.customVertexShaderID),D.push(x.customFragmentShaderID)),x.defines!==void 0)for(let V in x.defines)D.push(V),D.push(x.defines[V]);return x.isRawShaderMaterial===!1&&(d(D,x),b(D,x),D.push(i.outputColorSpace)),D.push(x.customProgramCacheKey),D.join()}function d(x,D){x.push(D.precision),x.push(D.outputColorSpace),x.push(D.envMapMode),x.push(D.envMapCubeUVHeight),x.push(D.mapUv),x.push(D.alphaMapUv),x.push(D.lightMapUv),x.push(D.aoMapUv),x.push(D.bumpMapUv),x.push(D.normalMapUv),x.push(D.displacementMapUv),x.push(D.emissiveMapUv),x.push(D.metalnessMapUv),x.push(D.roughnessMapUv),x.push(D.anisotropyMapUv),x.push(D.clearcoatMapUv),x.push(D.clearcoatNormalMapUv),x.push(D.clearcoatRoughnessMapUv),x.push(D.iridescenceMapUv),x.push(D.iridescenceThicknessMapUv),x.push(D.sheenColorMapUv),x.push(D.sheenRoughnessMapUv),x.push(D.specularMapUv),x.push(D.specularColorMapUv),x.push(D.specularIntensityMapUv),x.push(D.transmissionMapUv),x.push(D.thicknessMapUv),x.push(D.combine),x.push(D.fogExp2),x.push(D.sizeAttenuation),x.push(D.morphTargetsCount),x.push(D.morphAttributeCount),x.push(D.numSunLights),x.push(D.numDirLights),x.push(D.numPointLights),x.push(D.numSpotLights),x.push(D.numSpotLightMaps),x.push(D.numHemiLights),x.push(D.numRectAreaLights),x.push(D.numSunLightShadows),x.push(D.numDirLightShadows),x.push(D.numPointLightShadows),x.push(D.numSpotLightShadows),x.push(D.numSpotLightShadowsWithMaps),x.push(D.numLightProbes),x.push(D.shadowMapType),x.push(D.toneMapping),x.push(D.numClippingPlanes),x.push(D.numClipIntersection),x.push(D.depthPacking)}function b(x,D){l.disableAll(),D.instancing&&l.enable(0),D.instancingColor&&l.enable(1),D.instancingMorph&&l.enable(2),D.matcap&&l.enable(3),D.envMap&&l.enable(4),D.normalMapObjectSpace&&l.enable(5),D.normalMapTangentSpace&&l.enable(6),D.clearcoat&&l.enable(7),D.iridescence&&l.enable(8),D.alphaTest&&l.enable(9),D.vertexColors&&l.enable(10),D.vertexAlphas&&l.enable(11),D.vertexUv1s&&l.enable(12),D.vertexUv2s&&l.enable(13),D.vertexUv3s&&l.enable(14),D.vertexTangents&&l.enable(15),D.anisotropy&&l.enable(16),D.alphaHash&&l.enable(17),D.batching&&l.enable(18),D.dispersion&&l.enable(19),D.retroreflection&&l.enable(24),D.batchingColor&&l.enable(20),D.gradientMap&&l.enable(21),D.packedNormalMap&&l.enable(22),D.vertexNormals&&l.enable(23),x.push(l.mask),l.disableAll(),D.fog&&l.enable(0),D.useFog&&l.enable(1),D.flatShading&&l.enable(2),D.logarithmicDepthBuffer&&l.enable(3),D.reversedDepthBuffer&&l.enable(4),D.skinning&&l.enable(5),D.morphTargets&&l.enable(6),D.morphNormals&&l.enable(7),D.morphColors&&l.enable(8),D.premultipliedAlpha&&l.enable(9),D.shadowMapEnabled&&l.enable(10),D.doubleSided&&l.enable(11),D.flipSided&&l.enable(12),D.useDepthPacking&&l.enable(13),D.dithering&&l.enable(14),D.transmission&&l.enable(15),D.sheen&&l.enable(16),D.opaque&&l.enable(17),D.pointsUvs&&l.enable(18),D.decodeVideoTexture&&l.enable(19),D.decodeVideoTextureEmissive&&l.enable(20),D.alphaToCoverage&&l.enable(21),D.numLightProbeGrids>0&&l.enable(22),D.hasPositionAttribute&&l.enable(23),x.push(l.mask)}function A(x){let D=y[x.type],V;if(D){let $=fi[D];V=eu.clone($.uniforms)}else V=x.uniforms;return V}function M(x,D){let V=g.get(D);return V!==void 0?++V.usedTimes:(V=new X0(i,D,x,s),h.push(V),g.set(D,V)),V}function u(x){if(--x.usedTimes===0){let D=h.indexOf(x);h[D]=h[h.length-1],h.pop(),g.delete(x.cacheKey),x.destroy()}}function w(x){a.remove(x)}function N(){a.dispose()}return{getParameters:P,getProgramCacheKey:T,getUniforms:A,acquireProgram:M,releaseProgram:u,releaseShaderCache:w,programs:h,dispose:N}}function J0(){let i=new WeakMap;function e(l){return i.has(l)}function t(l){let a=i.get(l);return a===void 0&&(a={},i.set(l,a)),a}function n(l){i.delete(l)}function s(l,a,c){i.get(l)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function $0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function vu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Mu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function l(f){let y=0;return f.isInstancedMesh&&(y+=2),f.isSkinnedMesh&&(y+=1),y}function a(f,y,S,P,T,d){let b=i[e];return b===void 0?(b={id:f.id,object:f,geometry:y,material:S,materialVariant:l(f),groupOrder:P,renderOrder:f.renderOrder,z:T,group:d},i[e]=b):(b.id=f.id,b.object=f,b.geometry=y,b.material=S,b.materialVariant=l(f),b.groupOrder=P,b.renderOrder=f.renderOrder,b.z=T,b.group=d),e++,b}function c(f,y,S,P,T,d,b){b.reversedDepth===!0&&(T=-T);let A=a(f,y,S,P,T,d);S.transmission>0?n.push(A):S.transparent===!0?s.push(A):t.push(A)}function h(f,y,S,P,T,d){let b=a(f,y,S,P,T,d);S.transmission>0?n.unshift(b):S.transparent===!0?s.unshift(b):t.unshift(b)}function g(f,y){t.length>1&&t.sort(f||$0),n.length>1&&n.sort(y||vu),s.length>1&&s.sort(y||vu)}function _(){for(let f=e,y=i.length;f<y;f++){let S=i[f];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:h,finish:_,sort:g}}function K0(){let i=new WeakMap;function e(n,s){let r=i.get(n),l;return r===void 0?(l=new Mu,i.set(n,[l])):s>=r.length?(l=new Mu,r.push(l)):l=r[s],l}function t(){i=new WeakMap}return{get:e,dispose:t}}function j0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new ce,color:new _t};break;case"SpotLight":t={position:new ce,direction:new ce,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ce,color:new _t,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ce,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":t={color:new _t,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return i[e.id]=t,t}}}function Q0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var eg=0;function tg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ng(i){let e=new j0,t=Q0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new ce);let s=new ce,r=new Rt,l=new Rt;function a(h){let g=0,_=0,f=0;for(let Z=0;Z<9;Z++)n.probe[Z].set(0,0,0);let y=0,S=0,P=0,T=0,d=0,b=0,A=0,M=0,u=0,w=0,N=0,x=0,D=0,V=0;h.sort(tg);for(let Z=0,se=h.length;Z<se;Z++){let X=h[Z],ne=X.color,de=X.intensity,ue=X.distance,ve=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===Wi?ve=X.shadow.map.texture:ve=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)g+=ne.r*de,_+=ne.g*de,f+=ne.b*de;else if(X.isLightProbe){for(let fe=0;fe<9;fe++)n.probe[fe].addScaledVector(X.sh.coefficients[fe],de);V++}else if(X.isSunLight){let fe=e.get(X);if(fe.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){let ee=X.shadow,C=t.get(X);C.shadowIntensity=ee.intensity,C.shadowBias=ee.bias,C.shadowNormalBias=ee.normalBias,C.shadowRadius=ee.radius,C.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),n.sunShadow[S]=C,n.sunShadowMap[S]=ve;let Ve=ee.getViewportCount();for(let We=0;We<Ve;We++)n.sunShadowMatrix[P+We]=ee.getMatrix(We),n.sunShadowCascade[P+We]=ee._cascadeData[We];P+=Ve,S++}n.sun[y]=fe,y++}else if(X.isDirectionalLight){let fe=e.get(X);if(fe.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){let ee=X.shadow,C=t.get(X);C.shadowIntensity=ee.intensity,C.shadowBias=ee.bias,C.shadowNormalBias=ee.normalBias,C.shadowRadius=ee.radius,C.shadowMapSize=ee.mapSize,n.directionalShadow[T]=C,n.directionalShadowMap[T]=ve,n.directionalShadowMatrix[T]=X.shadow.matrix,u++}n.directional[T]=fe,T++}else if(X.isSpotLight){let fe=e.get(X);fe.position.setFromMatrixPosition(X.matrixWorld),fe.color.copy(ne).multiplyScalar(de),fe.distance=ue,fe.coneCos=Math.cos(X.angle),fe.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),fe.decay=X.decay,n.spot[b]=fe;let ee=X.shadow;if(X.map&&(n.spotLightMap[x]=X.map,x++,ee.updateMatrices(X),X.castShadow&&D++),n.spotLightMatrix[b]=ee.matrix,X.castShadow){let C=t.get(X);C.shadowIntensity=ee.intensity,C.shadowBias=ee.bias,C.shadowNormalBias=ee.normalBias,C.shadowRadius=ee.radius,C.shadowMapSize=ee.mapSize,n.spotShadow[b]=C,n.spotShadowMap[b]=ve,N++}b++}else if(X.isRectAreaLight){let fe=e.get(X);fe.color.copy(ne).multiplyScalar(de),fe.halfWidth.set(X.width*.5,0,0),fe.halfHeight.set(0,X.height*.5,0),n.rectArea[A]=fe,A++}else if(X.isPointLight){let fe=e.get(X);if(fe.color.copy(X.color).multiplyScalar(X.intensity),fe.distance=X.distance,fe.decay=X.decay,X.castShadow){let ee=X.shadow,C=t.get(X);C.shadowIntensity=ee.intensity,C.shadowBias=ee.bias,C.shadowNormalBias=ee.normalBias,C.shadowRadius=ee.radius,C.shadowMapSize=ee.mapSize,C.shadowCameraNear=ee.camera.near,C.shadowCameraFar=ee.camera.far,n.pointShadow[d]=C,n.pointShadowMap[d]=ve,n.pointShadowMatrix[d]=X.shadow.matrix,w++}n.point[d]=fe,d++}else if(X.isHemisphereLight){let fe=e.get(X);fe.skyColor.copy(X.color).multiplyScalar(de),fe.groundColor.copy(X.groundColor).multiplyScalar(de),n.hemi[M]=fe,M++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ge.LTC_FLOAT_1,n.rectAreaLTC2=Ge.LTC_FLOAT_2):(n.rectAreaLTC1=Ge.LTC_HALF_1,n.rectAreaLTC2=Ge.LTC_HALF_2)),n.ambient[0]=g,n.ambient[1]=_,n.ambient[2]=f;let $=n.hash;($.sunLength!==y||$.directionalLength!==T||$.pointLength!==d||$.spotLength!==b||$.rectAreaLength!==A||$.hemiLength!==M||$.numSunShadows!==S||$.numDirectionalShadows!==u||$.numPointShadows!==w||$.numSpotShadows!==N||$.numSpotMaps!==x||$.numLightProbes!==V)&&(n.sun.length=y,n.directional.length=T,n.spot.length=b,n.rectArea.length=A,n.point.length=d,n.hemi.length=M,n.sunShadow.length=S,n.sunShadowMap.length=S,n.sunShadowMatrix.length=P,n.sunShadowCascade.length=P,n.directionalShadow.length=u,n.directionalShadowMap.length=u,n.directionalShadowMatrix.length=u,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=N,n.spotShadowMap.length=N,n.spotLightMatrix.length=N+x-D,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=V,$.sunLength=y,$.directionalLength=T,$.pointLength=d,$.spotLength=b,$.rectAreaLength=A,$.hemiLength=M,$.numSunShadows=S,$.numDirectionalShadows=u,$.numPointShadows=w,$.numSpotShadows=N,$.numSpotMaps=x,$.numLightProbes=V,n.version=eg++)}function c(h,g){let _=0,f=0,y=0,S=0,P=0,T=0,d=g.matrixWorldInverse;for(let b=0,A=h.length;b<A;b++){let M=h[b];if(M.isSunLight){let u=n.sun[_];u.direction.setFromMatrixPosition(M.matrixWorld),u.direction.transformDirection(d),_++}else if(M.isDirectionalLight){let u=n.directional[f];u.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),u.direction.sub(s),u.direction.transformDirection(d),f++}else if(M.isSpotLight){let u=n.spot[S];u.position.setFromMatrixPosition(M.matrixWorld),u.position.applyMatrix4(d),u.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),u.direction.sub(s),u.direction.transformDirection(d),S++}else if(M.isRectAreaLight){let u=n.rectArea[P];u.position.setFromMatrixPosition(M.matrixWorld),u.position.applyMatrix4(d),l.identity(),r.copy(M.matrixWorld),r.premultiply(d),l.extractRotation(r),u.halfWidth.set(M.width*.5,0,0),u.halfHeight.set(0,M.height*.5,0),u.halfWidth.applyMatrix4(l),u.halfHeight.applyMatrix4(l),P++}else if(M.isPointLight){let u=n.point[y];u.position.setFromMatrixPosition(M.matrixWorld),u.position.applyMatrix4(d),y++}else if(M.isHemisphereLight){let u=n.hemi[T];u.direction.setFromMatrixPosition(M.matrixWorld),u.direction.transformDirection(d),T++}}}return{setup:a,setupView:c,state:n}}function bu(i){let e=new ng(i),t=[],n=[],s=[];function r(f){_.camera=f,t.length=0,n.length=0,s.length=0}function l(f){t.push(f)}function a(f){n.push(f)}function c(f){s.push(f)}function h(){e.setup(t)}function g(f){e.setupView(t,f)}let _={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:_,setupLights:h,setupLightsView:g,pushLight:l,pushShadow:a,pushLightProbeGrid:c}}function ig(i){let e=new WeakMap;function t(s,r=0){let l=e.get(s),a;return l===void 0?(a=new bu(i),e.set(s,[a])):r>=l.length?(a=new bu(i),l.push(a)):a=l[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var sg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rg=`uniform sampler2D shadow_pass;
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
}`,ag=[new ce(1,0,0),new ce(-1,0,0),new ce(0,1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1)],og=[new ce(0,-1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1),new ce(0,-1,0),new ce(0,-1,0)],Su=new Rt,Hr=new ce,_c=new ce;function lg(i,e,t){let n=new Ns,s=new Mt,r=new Mt,l=new Jt,a=new Os,c=new Ua,h={},g=t.maxTextureSize,_={[Vi]:Mn,[Mn]:Vi,[kn]:kn},f=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:sg,fragmentShader:rg}),y=f.clone();y.defines.HORIZONTAL_PASS=1;let S=new Fn;S.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let P=new xn(S,f),T=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=is;let d=this.type;this.render=function(w,N,x){if(T.enabled===!1||T.autoUpdate===!1&&T.needsUpdate===!1||w.length===0)return;this.type===_h&&(lt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=is);let D=i.getRenderTarget(),V=i.getActiveCubeFace(),$=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(hi),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);let se=d!==this.type;se&&N.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(ne=>ne.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,ne=w.length;X<ne;X++){let de=w[X],ue=de.shadow;if(ue===void 0){lt("WebGLShadowMap:",de,"has no shadow.");continue}if(ue.autoUpdate===!1&&ue.needsUpdate===!1)continue;s.copy(ue.mapSize);let ve=ue.getFrameExtents();s.multiply(ve),r.copy(ue.mapSize),(s.x>g||s.y>g)&&(s.x>g&&(r.x=Math.floor(g/ve.x),s.x=r.x*ve.x,ue.mapSize.x=r.x),s.y>g&&(r.y=Math.floor(g/ve.y),s.y=r.y*ve.y,ue.mapSize.y=r.y));let fe=i.state.buffers.depth.getReversed();if(ue.camera._reversedDepth=fe,ue.map===null||se===!0){if(ue.map!==null&&(ue.map.depthTexture!==null&&(ue.map.depthTexture.dispose(),ue.map.depthTexture=null),ue.map.dispose()),this.type===ks){if(de.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ue.map=new En(s.x,s.y,{format:Wi,type:Qn,minFilter:nn,magFilter:nn,generateMipmaps:!1}),ue.map.texture.name=de.name+".shadowMap",ue.map.depthTexture=new Oi(s.x,s.y,Hn),ue.map.depthTexture.name=de.name+".shadowMapDepth",ue.map.depthTexture.format=ai,ue.map.depthTexture.compareFunction=null,ue.map.depthTexture.minFilter=cn,ue.map.depthTexture.magFilter=cn}else de.isPointLight?(ue.map=new Wo(s.x),ue.map.depthTexture=new Na(s.x,jn)):(ue.map=new En(s.x,s.y),ue.map.depthTexture=new Oi(s.x,s.y,jn)),ue.map.depthTexture.name=de.name+".shadowMap",ue.map.depthTexture.format=ai,this.type===is?(ue.map.depthTexture.compareFunction=fe?ko:Bo,ue.map.depthTexture.minFilter=nn,ue.map.depthTexture.magFilter=nn):(ue.map.depthTexture.compareFunction=null,ue.map.depthTexture.minFilter=cn,ue.map.depthTexture.magFilter=cn);ue.camera.updateProjectionMatrix()}ue.map.isWebGLCubeRenderTarget!==!0&&(ue.map.width!==s.x||ue.map.height!==s.y)&&ue.map.setSize(s.x,s.y);let ee=ue.map.isWebGLCubeRenderTarget?6:ue.getViewportCount();de.isPointLight!==!0&&ue.updateMatrices(de,x);for(let C=0;C<ee;C++){let Ve=ue.getCamera(C);if(de.isPointLight){let We=ue.camera,rt=ue.matrix,Q=de.distance||We.far;Q!==We.far&&(We.far=Q,We.updateProjectionMatrix()),Hr.setFromMatrixPosition(de.matrixWorld),We.position.copy(Hr),_c.copy(We.position),_c.add(ag[C]),We.up.copy(og[C]),We.lookAt(_c),We.updateMatrixWorld(),rt.makeTranslation(-Hr.x,-Hr.y,-Hr.z),Su.multiplyMatrices(We.projectionMatrix,We.matrixWorldInverse),ue._frustum.setFromProjectionMatrix(Su,We.coordinateSystem,We.reversedDepth)}if(ue.map.isWebGLCubeRenderTarget)i.setRenderTarget(ue.map,C),i.clear();else{C===0&&(i.setRenderTarget(ue.map),i.clear());let We=ue.getViewport(C);l.set(r.x*We.x,r.y*We.y,r.x*We.z,r.y*We.w),Z.viewport(l)}n=ue.getFrustum(C),M(N,x,Ve,de,this.type)}ue.isPointLightShadow!==!0&&this.type===ks&&b(ue,x),ue.needsUpdate=!1}d=this.type,T.needsUpdate=!1,i.setRenderTarget(D,V,$)};function b(w,N){let x=e.update(P);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,y.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,y.needsUpdate=!0),w.mapPass===null?w.mapPass=new En(s.x,s.y,{format:Wi,type:Qn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(N,null,x,f,P,null),y.uniforms.shadow_pass.value=w.mapPass.texture,y.uniforms.resolution.value.set(w.map.width,w.map.height),y.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(N,null,x,y,P,null)}function A(w,N,x,D){let V=null,$=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if($!==void 0)V=$;else if(V=x.isPointLight===!0?c:a,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){let Z=V.uuid,se=N.uuid,X=h[Z];X===void 0&&(X={},h[Z]=X);let ne=X[se];ne===void 0&&(ne=V.clone(),X[se]=ne,N.addEventListener("dispose",u)),V=ne}if(V.visible=N.visible,V.wireframe=N.wireframe,D===ks?V.side=N.shadowSide!==null?N.shadowSide:N.side:V.side=N.shadowSide!==null?N.shadowSide:_[N.side],V.alphaMap=N.alphaMap,V.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,V.map=N.map,V.clipShadows=N.clipShadows,V.clippingPlanes=N.clippingPlanes,V.clipIntersection=N.clipIntersection,V.displacementMap=N.displacementMap,V.displacementScale=N.displacementScale,V.displacementBias=N.displacementBias,V.wireframeLinewidth=N.wireframeLinewidth,V.linewidth=N.linewidth,x.isPointLight===!0&&V.isMeshDistanceMaterial===!0){let Z=i.properties.get(V);Z.light=x}return V}function M(w,N,x,D,V){if(w.visible===!1)return;if(w.layers.test(N.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&V===ks)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let se=e.update(w),X=w.material;if(Array.isArray(X)){let ne=se.groups;for(let de=0,ue=ne.length;de<ue;de++){let ve=ne[de],fe=X[ve.materialIndex];if(fe&&fe.visible){let ee=A(w,fe,D,V);w.onBeforeShadow(i,w,N,x,se,ee,ve),i.renderBufferDirect(x,null,se,ee,w,ve),w.onAfterShadow(i,w,N,x,se,ee,ve)}}}else if(X.visible){let ne=A(w,X,D,V);w.onBeforeShadow(i,w,N,x,se,ne,null),i.renderBufferDirect(x,null,se,ne,w,null),w.onAfterShadow(i,w,N,x,se,ne,null)}}let Z=w.children;for(let se=0,X=Z.length;se<X;se++)M(Z[se],N,x,D,V)}function u(w){w.target.removeEventListener("dispose",u);for(let x in h){let D=h[x],V=w.target.uuid;V in D&&(D[V].dispose(),delete D[V])}}}function cg(i,e){function t(){let J=!1,Ae=new Jt,_e=null,De=new Jt(0,0,0,0);return{setMask:function(L){_e!==L&&!J&&(i.colorMask(L,L,L,L),_e=L)},setLocked:function(L){J=L},setClear:function(L,B,j,E,O){O===!0&&(L*=E,B*=E,j*=E),Ae.set(L,B,j,E),De.equals(Ae)===!1&&(i.clearColor(L,B,j,E),De.copy(Ae))},reset:function(){J=!1,_e=null,De.set(-1,0,0,0)}}}function n(){let J=!1,Ae=!1,_e=null,De=null,L=null;return{setReversed:function(B){if(Ae!==B){let j=e.get("EXT_clip_control");B?j.clipControlEXT(j.LOWER_LEFT_EXT,j.ZERO_TO_ONE_EXT):j.clipControlEXT(j.LOWER_LEFT_EXT,j.NEGATIVE_ONE_TO_ONE_EXT),Ae=B;let E=L;L=null,this.setClear(E)}},getReversed:function(){return Ae},setTest:function(B){B?ye(i.DEPTH_TEST):He(i.DEPTH_TEST)},setMask:function(B){_e!==B&&!J&&(i.depthMask(B),_e=B)},setFunc:function(B){if(Ae&&(B=jh[B]),De!==B){switch(B){case Ma:i.depthFunc(i.NEVER);break;case ba:i.depthFunc(i.ALWAYS);break;case Sa:i.depthFunc(i.LESS);break;case As:i.depthFunc(i.LEQUAL);break;case wa:i.depthFunc(i.EQUAL);break;case Ta:i.depthFunc(i.GEQUAL);break;case Ea:i.depthFunc(i.GREATER);break;case Aa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}De=B}},setLocked:function(B){J=B},setClear:function(B){L!==B&&(L=B,Ae&&(B=1-B),i.clearDepth(B))},reset:function(){J=!1,_e=null,De=null,L=null,Ae=!1}}}function s(){let J=!1,Ae=null,_e=null,De=null,L=null,B=null,j=null,E=null,O=null;return{setTest:function(te){J||(te?ye(i.STENCIL_TEST):He(i.STENCIL_TEST))},setMask:function(te){Ae!==te&&!J&&(i.stencilMask(te),Ae=te)},setFunc:function(te,q,le){(_e!==te||De!==q||L!==le)&&(i.stencilFunc(te,q,le),_e=te,De=q,L=le)},setOp:function(te,q,le){(B!==te||j!==q||E!==le)&&(i.stencilOp(te,q,le),B=te,j=q,E=le)},setLocked:function(te){J=te},setClear:function(te){O!==te&&(i.clearStencil(te),O=te)},reset:function(){J=!1,Ae=null,_e=null,De=null,L=null,B=null,j=null,E=null,O=null}}}let r=new t,l=new n,a=new s,c=new WeakMap,h=new WeakMap,g={},_={},f={},y=new WeakMap,S=[],P=null,T=!1,d=null,b=null,A=null,M=null,u=null,w=null,N=null,x=new _t(0,0,0),D=0,V=!1,$=null,Z=null,se=null,X=null,ne=null,de=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ue=!1,ve=0,fe=i.getParameter(i.VERSION);fe.indexOf("WebGL")!==-1?(ve=parseFloat(/^WebGL (\d)/.exec(fe)[1]),ue=ve>=1):fe.indexOf("OpenGL ES")!==-1&&(ve=parseFloat(/^OpenGL ES (\d)/.exec(fe)[1]),ue=ve>=2);let ee=null,C={},Ve=i.getParameter(i.SCISSOR_BOX),We=i.getParameter(i.VIEWPORT),rt=new Jt().fromArray(Ve),Q=new Jt().fromArray(We);function ut(J,Ae,_e,De){let L=new Uint8Array(4),B=i.createTexture();i.bindTexture(J,B),i.texParameteri(J,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(J,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let j=0;j<_e;j++)J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?i.texImage3D(Ae,0,i.RGBA,1,1,De,0,i.RGBA,i.UNSIGNED_BYTE,L):i.texImage2D(Ae+j,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,L);return B}let xe={};xe[i.TEXTURE_2D]=ut(i.TEXTURE_2D,i.TEXTURE_2D,1),xe[i.TEXTURE_CUBE_MAP]=ut(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[i.TEXTURE_2D_ARRAY]=ut(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xe[i.TEXTURE_3D]=ut(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),l.setClear(1),a.setClear(0),ye(i.DEPTH_TEST),l.setFunc(As),st(!1),dt(Fl),ye(i.CULL_FACE),Qe(hi);function ye(J){g[J]!==!0&&(i.enable(J),g[J]=!0)}function He(J){g[J]!==!1&&(i.disable(J),g[J]=!1)}function at(J,Ae){return f[J]!==Ae?(i.bindFramebuffer(J,Ae),f[J]=Ae,J===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Ae),J===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Ne(J,Ae){let _e=S,De=!1;if(J){_e=y.get(Ae),_e===void 0&&(_e=[],y.set(Ae,_e));let L=J.textures;if(_e.length!==L.length||_e[0]!==i.COLOR_ATTACHMENT0){for(let B=0,j=L.length;B<j;B++)_e[B]=i.COLOR_ATTACHMENT0+B;_e.length=L.length,De=!0}}else _e[0]!==i.BACK&&(_e[0]=i.BACK,De=!0);De&&i.drawBuffers(_e)}function qe(J){return P!==J?(i.useProgram(J),P=J,!0):!1}let Bt={[ss]:i.FUNC_ADD,[vh]:i.FUNC_SUBTRACT,[Mh]:i.FUNC_REVERSE_SUBTRACT};Bt[bh]=i.MIN,Bt[Sh]=i.MAX;let it={[wh]:i.ZERO,[Th]:i.ONE,[Eh]:i.SRC_COLOR,[zl]:i.SRC_ALPHA,[Lh]:i.SRC_ALPHA_SATURATE,[Ih]:i.DST_COLOR,[Ch]:i.DST_ALPHA,[Ah]:i.ONE_MINUS_SRC_COLOR,[Vl]:i.ONE_MINUS_SRC_ALPHA,[Ph]:i.ONE_MINUS_DST_COLOR,[Rh]:i.ONE_MINUS_DST_ALPHA,[Dh]:i.CONSTANT_COLOR,[Nh]:i.ONE_MINUS_CONSTANT_COLOR,[Uh]:i.CONSTANT_ALPHA,[Fh]:i.ONE_MINUS_CONSTANT_ALPHA};function Qe(J,Ae,_e,De,L,B,j,E,O,te){if(J===hi){T===!0&&(He(i.BLEND),T=!1);return}if(T===!1&&(ye(i.BLEND),T=!0),J!==yh){if(J!==d||te!==V){if((b!==ss||u!==ss)&&(i.blendEquation(i.FUNC_ADD),b=ss,u=ss),te)switch(J){case zs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ol:i.blendFunc(i.ONE,i.ONE);break;case Bl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ot("WebGLState: Invalid blending: ",J);break}else switch(J){case zs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ol:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Bl:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kl:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",J);break}A=null,M=null,w=null,N=null,x.set(0,0,0),D=0,d=J,V=te}return}L=L||Ae,B=B||_e,j=j||De,(Ae!==b||L!==u)&&(i.blendEquationSeparate(Bt[Ae],Bt[L]),b=Ae,u=L),(_e!==A||De!==M||B!==w||j!==N)&&(i.blendFuncSeparate(it[_e],it[De],it[B],it[j]),A=_e,M=De,w=B,N=j),(E.equals(x)===!1||O!==D)&&(i.blendColor(E.r,E.g,E.b,O),x.copy(E),D=O),d=J,V=!1}function ct(J,Ae){J.side===kn?He(i.CULL_FACE):ye(i.CULL_FACE);let _e=J.side===Mn;Ae&&(_e=!_e),st(_e),J.blending===zs&&J.transparent===!1?Qe(hi):Qe(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),l.setFunc(J.depthFunc),l.setTest(J.depthTest),l.setMask(J.depthWrite),r.setMask(J.colorWrite);let De=J.stencilWrite;a.setTest(De),De&&(a.setMask(J.stencilWriteMask),a.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),a.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),Gt(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?ye(i.SAMPLE_ALPHA_TO_COVERAGE):He(i.SAMPLE_ALPHA_TO_COVERAGE)}function st(J){$!==J&&(J?i.frontFace(i.CW):i.frontFace(i.CCW),$=J)}function dt(J){J!==gh?(ye(i.CULL_FACE),J!==Z&&(J===Fl?i.cullFace(i.BACK):J===xh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):He(i.CULL_FACE),Z=J}function It(J){J!==se&&(ue&&i.lineWidth(J),se=J)}function Gt(J,Ae,_e){J?(ye(i.POLYGON_OFFSET_FILL),(X!==Ae||ne!==_e)&&(X=Ae,ne=_e,l.getReversed()&&(Ae=-Ae),i.polygonOffset(Ae,_e))):He(i.POLYGON_OFFSET_FILL)}function xt(J){J?ye(i.SCISSOR_TEST):He(i.SCISSOR_TEST)}function Pt(J){J===void 0&&(J=i.TEXTURE0+de-1),ee!==J&&(i.activeTexture(J),ee=J)}function Y(J,Ae,_e){_e===void 0&&(ee===null?_e=i.TEXTURE0+de-1:_e=ee);let De=C[_e];De===void 0&&(De={type:void 0,texture:void 0},C[_e]=De),(De.type!==J||De.texture!==Ae)&&(ee!==_e&&(i.activeTexture(_e),ee=_e),i.bindTexture(J,Ae||xe[J]),De.type=J,De.texture=Ae)}function Ct(){let J=C[ee];J!==void 0&&J.type!==void 0&&(i.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function vt(){try{i.compressedTexImage2D(...arguments)}catch(J){ot("WebGLState:",J)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(J){ot("WebGLState:",J)}}function m(){try{i.texSubImage2D(...arguments)}catch(J){ot("WebGLState:",J)}}function H(){try{i.texSubImage3D(...arguments)}catch(J){ot("WebGLState:",J)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(J){ot("WebGLState:",J)}}function oe(){try{i.compressedTexSubImage3D(...arguments)}catch(J){ot("WebGLState:",J)}}function we(){try{i.texStorage2D(...arguments)}catch(J){ot("WebGLState:",J)}}function be(){try{i.texStorage3D(...arguments)}catch(J){ot("WebGLState:",J)}}function he(){try{i.texImage2D(...arguments)}catch(J){ot("WebGLState:",J)}}function ge(){try{i.texImage3D(...arguments)}catch(J){ot("WebGLState:",J)}}function Ee(J){return _[J]!==void 0?_[J]:i.getParameter(J)}function Ue(J,Ae){_[J]!==Ae&&(i.pixelStorei(J,Ae),_[J]=Ae)}function Re(J){rt.equals(J)===!1&&(i.scissor(J.x,J.y,J.z,J.w),rt.copy(J))}function Ie(J){Q.equals(J)===!1&&(i.viewport(J.x,J.y,J.z,J.w),Q.copy(J))}function Ze(J,Ae){let _e=h.get(Ae);_e===void 0&&(_e=new WeakMap,h.set(Ae,_e));let De=_e.get(J);De===void 0&&(De=i.getUniformBlockIndex(Ae,J.name),_e.set(J,De))}function Ke(J,Ae){let De=h.get(Ae).get(J);c.get(Ae)!==De&&(i.uniformBlockBinding(Ae,De,J.__bindingPointIndex),c.set(Ae,De))}function tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),l.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),g={},_={},ee=null,C={},f={},y=new WeakMap,S=[],P=null,T=!1,d=null,b=null,A=null,M=null,u=null,w=null,N=null,x=new _t(0,0,0),D=0,V=!1,$=null,Z=null,se=null,X=null,ne=null,rt.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),l.reset(),a.reset()}return{buffers:{color:r,depth:l,stencil:a},enable:ye,disable:He,bindFramebuffer:at,drawBuffers:Ne,useProgram:qe,setBlending:Qe,setMaterial:ct,setFlipSided:st,setCullFace:dt,setLineWidth:It,setPolygonOffset:Gt,setScissorTest:xt,activeTexture:Pt,bindTexture:Y,unbindTexture:Ct,compressedTexImage2D:vt,compressedTexImage3D:F,texImage2D:he,texImage3D:ge,pixelStorei:Ue,getParameter:Ee,updateUBOMapping:Ze,uniformBlockBinding:Ke,texStorage2D:we,texStorage3D:be,texSubImage2D:m,texSubImage3D:H,compressedTexSubImage2D:k,compressedTexSubImage3D:oe,scissor:Re,viewport:Ie,reset:tt}}function hg(i,e,t,n,s,r,l){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Mt,g=new WeakMap,_=new Set,f,y=new WeakMap,S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(F,m){return S?new OffscreenCanvas(F,m):hr("canvas")}function T(F,m,H){let k=1,oe=vt(F);if((oe.width>H||oe.height>H)&&(k=H/Math.max(oe.width,oe.height)),k<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){let we=Math.floor(k*oe.width),be=Math.floor(k*oe.height);f===void 0&&(f=P(we,be));let he=m?P(we,be):f;return he.width=we,he.height=be,he.getContext("2d").drawImage(F,0,0,we,be),lt("WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+we+"x"+be+")."),he}else return"data"in F&&lt("WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),F;return F}function d(F){return F.generateMipmaps}function b(F){i.generateMipmap(F)}function A(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(F,m,H,k,oe,we=!1){if(F!==null){if(i[F]!==void 0)return i[F];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let be;k&&(be=e.get("EXT_texture_norm16"),be||lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=m;if(m===i.RED&&(H===i.FLOAT&&(he=i.R32F),H===i.HALF_FLOAT&&(he=i.R16F),H===i.UNSIGNED_BYTE&&(he=i.R8),H===i.UNSIGNED_SHORT&&be&&(he=be.R16_EXT),H===i.SHORT&&be&&(he=be.R16_SNORM_EXT)),m===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(he=i.R8UI),H===i.UNSIGNED_SHORT&&(he=i.R16UI),H===i.UNSIGNED_INT&&(he=i.R32UI),H===i.BYTE&&(he=i.R8I),H===i.SHORT&&(he=i.R16I),H===i.INT&&(he=i.R32I)),m===i.RG&&(H===i.FLOAT&&(he=i.RG32F),H===i.HALF_FLOAT&&(he=i.RG16F),H===i.UNSIGNED_BYTE&&(he=i.RG8),H===i.UNSIGNED_SHORT&&be&&(he=be.RG16_EXT),H===i.SHORT&&be&&(he=be.RG16_SNORM_EXT)),m===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(he=i.RG8UI),H===i.UNSIGNED_SHORT&&(he=i.RG16UI),H===i.UNSIGNED_INT&&(he=i.RG32UI),H===i.BYTE&&(he=i.RG8I),H===i.SHORT&&(he=i.RG16I),H===i.INT&&(he=i.RG32I)),m===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(he=i.RGB8UI),H===i.UNSIGNED_SHORT&&(he=i.RGB16UI),H===i.UNSIGNED_INT&&(he=i.RGB32UI),H===i.BYTE&&(he=i.RGB8I),H===i.SHORT&&(he=i.RGB16I),H===i.INT&&(he=i.RGB32I)),m===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(he=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(he=i.RGBA16UI),H===i.UNSIGNED_INT&&(he=i.RGBA32UI),H===i.BYTE&&(he=i.RGBA8I),H===i.SHORT&&(he=i.RGBA16I),H===i.INT&&(he=i.RGBA32I)),m===i.RGB&&(H===i.UNSIGNED_SHORT&&be&&(he=be.RGB16_EXT),H===i.SHORT&&be&&(he=be.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(he=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(he=i.R11F_G11F_B10F)),m===i.RGBA){let ge=we?cr:bt.getTransfer(oe);H===i.FLOAT&&(he=i.RGBA32F),H===i.HALF_FLOAT&&(he=i.RGBA16F),H===i.UNSIGNED_BYTE&&(he=ge===Nt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&be&&(he=be.RGBA16_EXT),H===i.SHORT&&be&&(he=be.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(he=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(he=i.RGB5_A1)}return(he===i.R16F||he===i.R32F||he===i.RG16F||he===i.RG32F||he===i.RGBA16F||he===i.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function u(F,m){let H;return F?m===null||m===jn||m===Gs?H=i.DEPTH24_STENCIL8:m===Hn?H=i.DEPTH32F_STENCIL8:m===Vs&&(H=i.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===jn||m===Gs?H=i.DEPTH_COMPONENT24:m===Hn?H=i.DEPTH_COMPONENT32F:m===Vs&&(H=i.DEPTH_COMPONENT16),H}function w(F,m){return d(F)===!0||F.isFramebufferTexture&&F.minFilter!==cn&&F.minFilter!==nn?Math.log2(Math.max(m.width,m.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?m.mipmaps.length:1}function N(F){let m=F.target;m.removeEventListener("dispose",N),D(m),m.isVideoTexture&&g.delete(m),m.isHTMLTexture&&_.delete(m)}function x(F){let m=F.target;m.removeEventListener("dispose",x),$(m)}function D(F){let m=n.get(F);if(m.__webglInit===void 0)return;let H=F.source,k=y.get(H);if(k){let oe=k[m.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&V(F),Object.keys(k).length===0&&y.delete(H)}n.remove(F)}function V(F){let m=n.get(F);i.deleteTexture(m.__webglTexture);let H=F.source,k=y.get(H);delete k[m.__cacheKey],l.memory.textures--}function $(F){let m=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(m.__webglFramebuffer[k]))for(let oe=0;oe<m.__webglFramebuffer[k].length;oe++)i.deleteFramebuffer(m.__webglFramebuffer[k][oe]);else i.deleteFramebuffer(m.__webglFramebuffer[k]);m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer[k])}else{if(Array.isArray(m.__webglFramebuffer))for(let k=0;k<m.__webglFramebuffer.length;k++)i.deleteFramebuffer(m.__webglFramebuffer[k]);else i.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&i.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let k=0;k<m.__webglColorRenderbuffer.length;k++)m.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(m.__webglColorRenderbuffer[k]);m.__webglDepthRenderbuffer&&i.deleteRenderbuffer(m.__webglDepthRenderbuffer)}let H=F.textures;for(let k=0,oe=H.length;k<oe;k++){let we=n.get(H[k]);we.__webglTexture&&(i.deleteTexture(we.__webglTexture),l.memory.textures--),n.remove(H[k])}n.remove(F)}let Z=0;function se(){Z=0}function X(){return Z}function ne(F){Z=F}function de(){let F=Z;return F>=s.maxTextures&&lt("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+s.maxTextures),Z+=1,F}function ue(F){let m=[];return m.push(F.wrapS),m.push(F.wrapT),m.push(F.wrapR||0),m.push(F.magFilter),m.push(F.minFilter),m.push(F.anisotropy),m.push(F.internalFormat),m.push(F.format),m.push(F.type),m.push(F.generateMipmaps),m.push(F.premultiplyAlpha),m.push(F.flipY),m.push(F.unpackAlignment),m.push(F.colorSpace),m.join()}function ve(F,m){let H=n.get(F);if(F.isVideoTexture&&Y(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&H.__version!==F.version){let k=F.image;if(k===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{He(H,F,m);return}}else F.isExternalTexture&&(H.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+m)}function fe(F,m){let H=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&H.__version!==F.version){He(H,F,m);return}else F.isExternalTexture&&(H.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+m)}function ee(F,m){let H=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&H.__version!==F.version){He(H,F,m);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+m)}function C(F,m){let H=n.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&H.__version!==F.version){at(H,F,m);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+m)}let Ve={[Cs]:i.REPEAT,[ri]:i.CLAMP_TO_EDGE,[Ca]:i.MIRRORED_REPEAT},We={[cn]:i.NEAREST,[kh]:i.NEAREST_MIPMAP_NEAREST,[Nr]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[ja]:i.LINEAR_MIPMAP_NEAREST,[ui]:i.LINEAR_MIPMAP_LINEAR},rt={[Hh]:i.NEVER,[Zh]:i.ALWAYS,[Wh]:i.LESS,[Bo]:i.LEQUAL,[Xh]:i.EQUAL,[ko]:i.GEQUAL,[qh]:i.GREATER,[Yh]:i.NOTEQUAL};function Q(F,m){if(m.type===Hn&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===nn||m.magFilter===ja||m.magFilter===Nr||m.magFilter===ui||m.minFilter===nn||m.minFilter===ja||m.minFilter===Nr||m.minFilter===ui)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,Ve[m.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,Ve[m.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,Ve[m.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,We[m.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,We[m.minFilter]),m.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,rt[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===cn||m.minFilter!==Nr&&m.minFilter!==ui||m.type===Hn&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||n.get(m).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(F,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,s.getMaxAnisotropy())),n.get(m).__currentAnisotropy=m.anisotropy}}}function ut(F,m){let H=!1;F.__webglInit===void 0&&(F.__webglInit=!0,m.addEventListener("dispose",N));let k=m.source,oe=y.get(k);oe===void 0&&(oe={},y.set(k,oe));let we=ue(m);if(we!==F.__cacheKey){oe[we]===void 0&&(oe[we]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,H=!0),oe[we].usedTimes++;let be=oe[F.__cacheKey];be!==void 0&&(oe[F.__cacheKey].usedTimes--,be.usedTimes===0&&V(m)),F.__cacheKey=we,F.__webglTexture=oe[we].texture}return H}function xe(F,m,H){return Math.floor(Math.floor(F/H)/m)}function ye(F,m,H,k){let we=F.updateRanges;if(we.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,m.width,m.height,H,k,m.data);else{we.sort((Ue,Re)=>Ue.start-Re.start);let be=0;for(let Ue=1;Ue<we.length;Ue++){let Re=we[be],Ie=we[Ue],Ze=Re.start+Re.count,Ke=xe(Ie.start,m.width,4),tt=xe(Re.start,m.width,4);Ie.start<=Ze+1&&Ke===tt&&xe(Ie.start+Ie.count-1,m.width,4)===Ke?Re.count=Math.max(Re.count,Ie.start+Ie.count-Re.start):(++be,we[be]=Ie)}we.length=be+1;let he=t.getParameter(i.UNPACK_ROW_LENGTH),ge=t.getParameter(i.UNPACK_SKIP_PIXELS),Ee=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,m.width);for(let Ue=0,Re=we.length;Ue<Re;Ue++){let Ie=we[Ue],Ze=Math.floor(Ie.start/4),Ke=Math.ceil(Ie.count/4),tt=Ze%m.width,J=Math.floor(Ze/m.width),Ae=Ke,_e=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),t.pixelStorei(i.UNPACK_SKIP_ROWS,J),t.texSubImage2D(i.TEXTURE_2D,0,tt,J,Ae,_e,H,k,m.data)}F.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,he),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ee)}}function He(F,m,H){let k=i.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),m.isData3DTexture&&(k=i.TEXTURE_3D);let oe=ut(F,m),we=m.source;t.bindTexture(k,F.__webglTexture,i.TEXTURE0+H);let be=n.get(we);if(we.version!==be.__version||oe===!0){if(t.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&m.image instanceof ImageBitmap)===!1){let _e=bt.getPrimaries(bt.workingColorSpace),De=m.colorSpace===Ti?null:bt.getPrimaries(m.colorSpace),L=m.colorSpace===Ti||_e===De?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,L)}t.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment);let ge=T(m.image,!1,s.maxTextureSize);ge=Ct(m,ge);let Ee=r.convert(m.format,m.colorSpace),Ue=r.convert(m.type),Re=M(m.internalFormat,Ee,Ue,m.normalized,m.colorSpace,m.isVideoTexture);Q(k,m);let Ie,Ze=m.mipmaps,Ke=m.isVideoTexture!==!0,tt=be.__version===void 0||oe===!0,J=we.dataReady,Ae=w(m,ge);if(m.isDepthTexture)Re=u(m.format===Hi,m.type),tt&&(Ke?t.texStorage2D(i.TEXTURE_2D,1,Re,ge.width,ge.height):t.texImage2D(i.TEXTURE_2D,0,Re,ge.width,ge.height,0,Ee,Ue,null));else if(m.isDataTexture)if(Ze.length>0){Ke&&tt&&t.texStorage2D(i.TEXTURE_2D,Ae,Re,Ze[0].width,Ze[0].height);for(let _e=0,De=Ze.length;_e<De;_e++)Ie=Ze[_e],Ke?J&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,Ie.width,Ie.height,Ee,Ue,Ie.data):t.texImage2D(i.TEXTURE_2D,_e,Re,Ie.width,Ie.height,0,Ee,Ue,Ie.data);m.generateMipmaps=!1}else Ke?(tt&&t.texStorage2D(i.TEXTURE_2D,Ae,Re,ge.width,ge.height),J&&ye(m,ge,Ee,Ue)):t.texImage2D(i.TEXTURE_2D,0,Re,ge.width,ge.height,0,Ee,Ue,ge.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){Ke&&tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,Re,Ze[0].width,Ze[0].height,ge.depth);for(let _e=0,De=Ze.length;_e<De;_e++)if(Ie=Ze[_e],m.format!==Wn)if(Ee!==null)if(Ke){if(J)if(m.layerUpdates.size>0){let L=oc(Ie.width,Ie.height,m.format,m.type);for(let B of m.layerUpdates){let j=Ie.data.subarray(B*L/Ie.data.BYTES_PER_ELEMENT,(B+1)*L/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,B,Ie.width,Ie.height,1,Ee,j)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,0,Ie.width,Ie.height,ge.depth,Ee,Ie.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,_e,Re,Ie.width,Ie.height,ge.depth,0,Ie.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?J&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,0,Ie.width,Ie.height,ge.depth,Ee,Ue,Ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,_e,Re,Ie.width,Ie.height,ge.depth,0,Ee,Ue,Ie.data);m.layerUpdates.size>0&&m.clearLayerUpdates()}else{Ke&&tt&&t.texStorage2D(i.TEXTURE_2D,Ae,Re,Ze[0].width,Ze[0].height);for(let _e=0,De=Ze.length;_e<De;_e++)Ie=Ze[_e],m.format!==Wn?Ee!==null?Ke?J&&t.compressedTexSubImage2D(i.TEXTURE_2D,_e,0,0,Ie.width,Ie.height,Ee,Ie.data):t.compressedTexImage2D(i.TEXTURE_2D,_e,Re,Ie.width,Ie.height,0,Ie.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?J&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,Ie.width,Ie.height,Ee,Ue,Ie.data):t.texImage2D(i.TEXTURE_2D,_e,Re,Ie.width,Ie.height,0,Ee,Ue,Ie.data)}else if(m.isDataArrayTexture)if(Ke){if(tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,Re,ge.width,ge.height,ge.depth),J)if(m.layerUpdates.size>0){let _e=oc(ge.width,ge.height,m.format,m.type);for(let De of m.layerUpdates){let L=ge.data.subarray(De*_e/ge.data.BYTES_PER_ELEMENT,(De+1)*_e/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,De,ge.width,ge.height,1,Ee,Ue,L)}m.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Ee,Ue,ge.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Re,ge.width,ge.height,ge.depth,0,Ee,Ue,ge.data);else if(m.isData3DTexture)Ke?(tt&&t.texStorage3D(i.TEXTURE_3D,Ae,Re,ge.width,ge.height,ge.depth),J&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Ee,Ue,ge.data)):t.texImage3D(i.TEXTURE_3D,0,Re,ge.width,ge.height,ge.depth,0,Ee,Ue,ge.data);else if(m.isFramebufferTexture){if(tt)if(Ke)t.texStorage2D(i.TEXTURE_2D,Ae,Re,ge.width,ge.height);else{let _e=ge.width,De=ge.height;for(let L=0;L<Ae;L++)t.texImage2D(i.TEXTURE_2D,L,Re,_e,De,0,Ee,Ue,null),_e>>=1,De>>=1}}else if(m.isHTMLTexture){if("texElementImage2D"in i){let _e=i.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),ge.parentNode!==_e){_e.appendChild(ge),_.add(m),_e.onpaint=De=>{let L=De.changedElements;for(let B of _)L.includes(B.image)&&(B.needsUpdate=!0)},_e.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ge);else{let L=i.RGBA,B=i.RGBA,j=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,L,B,j,ge)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ze.length>0){if(Ke&&tt){let _e=vt(Ze[0]);t.texStorage2D(i.TEXTURE_2D,Ae,Re,_e.width,_e.height)}for(let _e=0,De=Ze.length;_e<De;_e++)Ie=Ze[_e],Ke?J&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,Ee,Ue,Ie):t.texImage2D(i.TEXTURE_2D,_e,Re,Ee,Ue,Ie);m.generateMipmaps=!1}else if(Ke){if(tt){let _e=vt(ge);t.texStorage2D(i.TEXTURE_2D,Ae,Re,_e.width,_e.height)}J&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,Ue,ge)}else t.texImage2D(i.TEXTURE_2D,0,Re,Ee,Ue,ge);d(m)&&b(k),be.__version=we.version,m.onUpdate&&m.onUpdate(m)}F.__version=m.version}function at(F,m,H){if(m.image.length!==6)return;let k=ut(F,m),oe=m.source;t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+H);let we=n.get(oe);if(oe.version!==we.__version||k===!0){t.activeTexture(i.TEXTURE0+H);let be=bt.getPrimaries(bt.workingColorSpace),he=m.colorSpace===Ti?null:bt.getPrimaries(m.colorSpace),ge=m.colorSpace===Ti||be===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let Ee=m.isCompressedTexture||m.image[0].isCompressedTexture,Ue=m.image[0]&&m.image[0].isDataTexture,Re=[];for(let B=0;B<6;B++)!Ee&&!Ue?Re[B]=T(m.image[B],!0,s.maxCubemapSize):Re[B]=Ue?m.image[B].image:m.image[B],Re[B]=Ct(m,Re[B]);let Ie=Re[0],Ze=r.convert(m.format,m.colorSpace),Ke=r.convert(m.type),tt=M(m.internalFormat,Ze,Ke,m.normalized,m.colorSpace),J=m.isVideoTexture!==!0,Ae=we.__version===void 0||k===!0,_e=oe.dataReady,De=w(m,Ie);Q(i.TEXTURE_CUBE_MAP,m);let L;if(Ee){J&&Ae&&t.texStorage2D(i.TEXTURE_CUBE_MAP,De,tt,Ie.width,Ie.height);for(let B=0;B<6;B++){L=Re[B].mipmaps;for(let j=0;j<L.length;j++){let E=L[j];m.format!==Wn?Ze!==null?J?_e&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,j,0,0,E.width,E.height,Ze,E.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,j,tt,E.width,E.height,0,E.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,j,0,0,E.width,E.height,Ze,Ke,E.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,j,tt,E.width,E.height,0,Ze,Ke,E.data)}}}else{if(L=m.mipmaps,J&&Ae){L.length>0&&De++;let B=vt(Re[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,De,tt,B.width,B.height)}for(let B=0;B<6;B++)if(Ue){J?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,Re[B].width,Re[B].height,Ze,Ke,Re[B].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,tt,Re[B].width,Re[B].height,0,Ze,Ke,Re[B].data);for(let j=0;j<L.length;j++){let O=L[j].image[B].image;J?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,j+1,0,0,O.width,O.height,Ze,Ke,O.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,j+1,tt,O.width,O.height,0,Ze,Ke,O.data)}}else{J?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,Ze,Ke,Re[B]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,tt,Ze,Ke,Re[B]);for(let j=0;j<L.length;j++){let E=L[j];J?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,j+1,0,0,Ze,Ke,E.image[B]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,j+1,tt,Ze,Ke,E.image[B])}}}d(m)&&b(i.TEXTURE_CUBE_MAP),we.__version=oe.version,m.onUpdate&&m.onUpdate(m)}F.__version=m.version}function Ne(F,m,H,k,oe,we){let be=r.convert(H.format,H.colorSpace),he=r.convert(H.type),ge=M(H.internalFormat,be,he,H.normalized,H.colorSpace),Ee=n.get(m),Ue=n.get(H);if(Ue.__renderTarget=m,!Ee.__hasExternalTextures){let Re=Math.max(1,m.width>>we),Ie=Math.max(1,m.height>>we);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,we,ge,Re,Ie,m.depth,0,be,he,null):t.texImage2D(oe,we,ge,Re,Ie,0,be,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,F),Pt(m)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,oe,Ue.__webglTexture,0,xt(m)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,oe,Ue.__webglTexture,we),t.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(F,m,H){if(i.bindRenderbuffer(i.RENDERBUFFER,F),m.depthBuffer){let k=m.depthTexture,oe=k&&k.isDepthTexture?k.type:null,we=u(m.stencilBuffer,oe),be=m.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Pt(m)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt(m),we,m.width,m.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt(m),we,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,we,m.width,m.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,be,i.RENDERBUFFER,F)}else{let k=m.textures;for(let oe=0;oe<k.length;oe++){let we=k[oe],be=r.convert(we.format,we.colorSpace),he=r.convert(we.type),ge=M(we.internalFormat,be,he,we.normalized,we.colorSpace);Pt(m)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt(m),ge,m.width,m.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt(m),ge,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,ge,m.width,m.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Bt(F,m,H){let k=m.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,F),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let oe=n.get(m.depthTexture);if(oe.__renderTarget=m,(!oe.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),k){if(oe.__webglInit===void 0&&(oe.__webglInit=!0,m.depthTexture.addEventListener("dispose",N)),oe.__webglTexture===void 0){oe.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),Q(i.TEXTURE_CUBE_MAP,m.depthTexture);let Ee=r.convert(m.depthTexture.format),Ue=r.convert(m.depthTexture.type),Re;m.depthTexture.format===ai?Re=i.DEPTH_COMPONENT24:m.depthTexture.format===Hi&&(Re=i.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Re,m.width,m.height,0,Ee,Ue,null)}}else ve(m.depthTexture,0);let we=oe.__webglTexture,be=xt(m),he=k?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,ge=m.depthTexture.format===Hi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(m.depthTexture.format===ai)Pt(m)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ge,he,we,0,be):i.framebufferTexture2D(i.FRAMEBUFFER,ge,he,we,0);else if(m.depthTexture.format===Hi)Pt(m)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ge,he,we,0,be):i.framebufferTexture2D(i.FRAMEBUFFER,ge,he,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(F){let m=n.get(F),H=F.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==F.depthTexture){let k=F.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),k){let oe=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,k.removeEventListener("dispose",oe)};k.addEventListener("dispose",oe),m.__depthDisposeCallback=oe}m.__boundDepthTexture=k}if(F.depthTexture&&!m.__autoAllocateDepthBuffer)if(H)for(let k=0;k<6;k++)Bt(m.__webglFramebuffer[k],F,k);else{let k=F.texture.mipmaps;k&&k.length>0?Bt(m.__webglFramebuffer[0],F,0):Bt(m.__webglFramebuffer,F,0)}else if(H){m.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[k]),m.__webglDepthbuffer[k]===void 0)m.__webglDepthbuffer[k]=i.createRenderbuffer(),qe(m.__webglDepthbuffer[k],F,!1);else{let oe=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=m.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,we),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,we)}}else{let k=F.texture.mipmaps;if(k&&k.length>0?t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=i.createRenderbuffer(),qe(m.__webglDepthbuffer,F,!1);else{let oe=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=m.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,we),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,we)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qe(F,m,H){let k=n.get(F);m!==void 0&&Ne(k.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&it(F)}function ct(F){let m=F.texture,H=n.get(F),k=n.get(m);F.addEventListener("dispose",x);let oe=F.textures,we=F.isWebGLCubeRenderTarget===!0,be=oe.length>1;if(be||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=m.version,l.memory.textures++),we){H.__webglFramebuffer=[];for(let he=0;he<6;he++)if(m.mipmaps&&m.mipmaps.length>0){H.__webglFramebuffer[he]=[];for(let ge=0;ge<m.mipmaps.length;ge++)H.__webglFramebuffer[he][ge]=i.createFramebuffer()}else H.__webglFramebuffer[he]=i.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){H.__webglFramebuffer=[];for(let he=0;he<m.mipmaps.length;he++)H.__webglFramebuffer[he]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(be)for(let he=0,ge=oe.length;he<ge;he++){let Ee=n.get(oe[he]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=i.createTexture(),l.memory.textures++)}if(F.samples>0&&Pt(F)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let he=0;he<oe.length;he++){let ge=oe[he];H.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[he]);let Ee=r.convert(ge.format,ge.colorSpace),Ue=r.convert(ge.type),Re=M(ge.internalFormat,Ee,Ue,ge.normalized,ge.colorSpace,F.isXRRenderTarget===!0),Ie=xt(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,Re,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,H.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),qe(H.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(we){t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),Q(i.TEXTURE_CUBE_MAP,m);for(let he=0;he<6;he++)if(m.mipmaps&&m.mipmaps.length>0)for(let ge=0;ge<m.mipmaps.length;ge++)Ne(H.__webglFramebuffer[he][ge],F,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,ge);else Ne(H.__webglFramebuffer[he],F,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);d(m)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let he=0,ge=oe.length;he<ge;he++){let Ee=oe[he],Ue=n.get(Ee),Re=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Re=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Re,Ue.__webglTexture),Q(Re,Ee),Ne(H.__webglFramebuffer,F,Ee,i.COLOR_ATTACHMENT0+he,Re,0),d(Ee)&&b(Re)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(he=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,k.__webglTexture),Q(he,m),m.mipmaps&&m.mipmaps.length>0)for(let ge=0;ge<m.mipmaps.length;ge++)Ne(H.__webglFramebuffer[ge],F,m,i.COLOR_ATTACHMENT0,he,ge);else Ne(H.__webglFramebuffer,F,m,i.COLOR_ATTACHMENT0,he,0);d(m)&&b(he),t.unbindTexture()}F.depthBuffer&&it(F)}function st(F){let m=F.textures;for(let H=0,k=m.length;H<k;H++){let oe=m[H];if(d(oe)){let we=A(F),be=n.get(oe).__webglTexture;t.bindTexture(we,be),b(we),t.unbindTexture()}}}let dt=[],It=[];function Gt(F){if(F.samples>0){if(Pt(F)===!1){let m=F.textures,H=F.width,k=F.height,oe=i.COLOR_BUFFER_BIT,we=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=n.get(F),he=m.length>1;if(he)for(let Ee=0;Ee<m.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);let ge=F.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Ee=0;Ee<m.length;Ee++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,be.__webglColorRenderbuffer[Ee]);let Ue=n.get(m[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ue,0)}i.blitFramebuffer(0,0,H,k,0,0,H,k,oe,i.NEAREST),c===!0&&(dt.length=0,It.length=0,dt.push(i.COLOR_ATTACHMENT0+Ee),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(dt.push(we),It.push(we),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,It)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let Ee=0;Ee<m.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,be.__webglColorRenderbuffer[Ee]);let Ue=n.get(m[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,Ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&c){let m=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[m])}}}function xt(F){return Math.min(s.maxSamples,F.samples)}function Pt(F){let m=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function Y(F){let m=l.render.frame;g.get(F)!==m&&(g.set(F,m),F.update())}function Ct(F,m){let H=F.colorSpace,k=F.format,oe=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||H!==lr&&H!==Ti&&(bt.getTransfer(H)===Nt?(k!==Wn||oe!==An)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",H)),m}function vt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(h.width=F.naturalWidth||F.width,h.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(h.width=F.displayWidth,h.height=F.displayHeight):(h.width=F.width,h.height=F.height),h}this.allocateTextureUnit=de,this.resetTextureUnits=se,this.getTextureUnits=X,this.setTextureUnits=ne,this.setTexture2D=ve,this.setTexture2DArray=fe,this.setTexture3D=ee,this.setTextureCube=C,this.rebindTextures=Qe,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=Pt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ug(i,e){function t(n,s=Ti){let r,l=bt.getTransfer(s);if(n===An)return i.UNSIGNED_BYTE;if(n===eo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===to)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ql)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===$l)return i.BYTE;if(n===Kl)return i.SHORT;if(n===Vs)return i.UNSIGNED_SHORT;if(n===Qa)return i.INT;if(n===jn)return i.UNSIGNED_INT;if(n===Hn)return i.FLOAT;if(n===Qn)return i.HALF_FLOAT;if(n===ec)return i.ALPHA;if(n===tc)return i.RGB;if(n===Wn)return i.RGBA;if(n===ai)return i.DEPTH_COMPONENT;if(n===Hi)return i.DEPTH_STENCIL;if(n===no)return i.RED;if(n===io)return i.RED_INTEGER;if(n===Wi)return i.RG;if(n===so)return i.RG_INTEGER;if(n===ro)return i.RGBA_INTEGER;if(n===Ur||n===Fr||n===Or||n===Br)if(l===Nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ur)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ur)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ao||n===oo||n===lo||n===co)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ao)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===lo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===co)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ho||n===uo||n===fo||n===po||n===mo||n===kr||n===go)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ho||n===uo)return l===Nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===fo)return l===Nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===po)return r.COMPRESSED_R11_EAC;if(n===mo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===kr)return r.COMPRESSED_RG11_EAC;if(n===go)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===xo||n===_o||n===yo||n===vo||n===Mo||n===bo||n===So||n===wo||n===To||n===Eo||n===Ao||n===Co||n===Ro||n===Io)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xo)return l===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_o)return l===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yo)return l===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vo)return l===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Mo)return l===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bo)return l===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===So)return l===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wo)return l===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===To)return l===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Eo)return l===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ao)return l===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Co)return l===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ro)return l===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Io)return l===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Po||n===Lo||n===Do)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Po)return l===Nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Lo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Do)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===No||n===Uo||n===zr||n===Fo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===No)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Uo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var dg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fg=`
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

}`,Ec=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Sr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new On({vertexShader:dg,fragmentShader:fg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xn(new wr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ac=class extends oi{constructor(e,t){super();let n=this,s=null,r=1,l=null,a="local-floor",c=1,h=null,g=null,_=null,f=null,y=null,S=null,P=typeof XRWebGLBinding<"u",T=new Ec,d={},b=t.getContextAttributes(),A=null,M=null,u=[],w=[],N=new Mt,x=null,D=null,V=new mn;V.viewport=new Jt;let $=new mn;$.viewport=new Jt;let Z=[V,$],se=new Za,X=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(xe){let ye=u[xe];return ye===void 0&&(ye=new Ds,u[xe]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(xe){let ye=u[xe];return ye===void 0&&(ye=new Ds,u[xe]=ye),ye.getGripSpace()},this.getHand=function(xe){let ye=u[xe];return ye===void 0&&(ye=new Ds,u[xe]=ye),ye.getHandSpace()};function de(xe){let ye=w.indexOf(xe.inputSource);if(ye===-1)return;let He=u[ye];He!==void 0&&(He.update(xe.inputSource,xe.frame,h||l),He.dispatchEvent({type:xe.type,data:xe.inputSource}))}function ue(){s.removeEventListener("select",de),s.removeEventListener("selectstart",de),s.removeEventListener("selectend",de),s.removeEventListener("squeeze",de),s.removeEventListener("squeezestart",de),s.removeEventListener("squeezeend",de),s.removeEventListener("end",ue),s.removeEventListener("inputsourceschange",ve);for(let xe=0;xe<u.length;xe++){let ye=w[xe];ye!==null&&(w[xe]=null,u[xe].disconnect(ye))}X=null,ne=null,T.reset();for(let xe in d)delete d[xe];if(e.setRenderTarget(A),y=null,f=null,_=null,s=null,M=null,ut.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(N.width,N.height,!1),D!==null){let xe=D.camera;xe.fov=D.fov,xe.zoom=D.zoom,xe.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(xe){r=xe,n.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(xe){a=xe,n.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||l},this.setReferenceSpace=function(xe){h=xe},this.getBaseLayer=function(){return f!==null?f:y},this.getBinding=function(){return _===null&&P&&(_=new XRWebGLBinding(s,t)),_},this.getFrame=function(){return S},this.getSession=function(){return s},this.setSession=async function(xe){if(s=xe,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",de),s.addEventListener("selectstart",de),s.addEventListener("selectend",de),s.addEventListener("squeeze",de),s.addEventListener("squeezestart",de),s.addEventListener("squeezeend",de),s.addEventListener("end",ue),s.addEventListener("inputsourceschange",ve),b.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(N),P&&"createProjectionLayer"in XRWebGLBinding.prototype){let He=null,at=null,Ne=null;b.depth&&(Ne=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,He=b.stencil?Hi:ai,at=b.stencil?Gs:jn);let qe={colorFormat:t.RGBA8,depthFormat:Ne,scaleFactor:r};_=this.getBinding(),f=_.createProjectionLayer(qe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new En(f.textureWidth,f.textureHeight,{format:Wn,type:An,depthTexture:new Oi(f.textureWidth,f.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,He),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let He={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};y=new XRWebGLLayer(s,t,He),s.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),M=new En(y.framebufferWidth,y.framebufferHeight,{format:Wn,type:An,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),h=null,l=await s.requestReferenceSpace(a),ut.setContext(s),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function ve(xe){for(let ye=0;ye<xe.removed.length;ye++){let He=xe.removed[ye],at=w.indexOf(He);at>=0&&(w[at]=null,u[at].disconnect(He))}for(let ye=0;ye<xe.added.length;ye++){let He=xe.added[ye],at=w.indexOf(He);if(at===-1){for(let qe=0;qe<u.length;qe++)if(qe>=w.length){w.push(He),at=qe;break}else if(w[qe]===null){w[qe]=He,at=qe;break}if(at===-1)break}let Ne=u[at];Ne&&Ne.connect(He)}}let fe=new ce,ee=new ce;function C(xe,ye,He){fe.setFromMatrixPosition(ye.matrixWorld),ee.setFromMatrixPosition(He.matrixWorld);let at=fe.distanceTo(ee),Ne=ye.projectionMatrix.elements,qe=He.projectionMatrix.elements,Bt=Ne[14]/(Ne[10]-1),it=Ne[14]/(Ne[10]+1),Qe=(Ne[9]+1)/Ne[5],ct=(Ne[9]-1)/Ne[5],st=(Ne[8]-1)/Ne[0],dt=(qe[8]+1)/qe[0],It=Bt*st,Gt=Bt*dt,xt=at/(-st+dt),Pt=xt*-st;if(ye.matrixWorld.decompose(xe.position,xe.quaternion,xe.scale),xe.translateX(Pt),xe.translateZ(xt),xe.matrixWorld.compose(xe.position,xe.quaternion,xe.scale),xe.matrixWorldInverse.copy(xe.matrixWorld).invert(),Ne[10]===-1)xe.projectionMatrix.copy(ye.projectionMatrix),xe.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{let Y=Bt+xt,Ct=it+xt,vt=It-Pt,F=Gt+(at-Pt),m=Qe*it/Ct*Y,H=ct*it/Ct*Y;xe.projectionMatrix.makePerspective(vt,F,m,H,Y,Ct),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert()}}function Ve(xe,ye){ye===null?xe.matrixWorld.copy(xe.matrix):xe.matrixWorld.multiplyMatrices(ye.matrixWorld,xe.matrix),xe.matrixWorldInverse.copy(xe.matrixWorld).invert()}this.updateCamera=function(xe){if(s===null)return;let ye=xe.near,He=xe.far;T.texture!==null&&(T.depthNear>0&&(ye=T.depthNear),T.depthFar>0&&(He=T.depthFar)),se.near=$.near=V.near=ye,se.far=$.far=V.far=He,(X!==se.near||ne!==se.far)&&(s.updateRenderState({depthNear:se.near,depthFar:se.far}),X=se.near,ne=se.far),se.layers.mask=xe.layers.mask|6,V.layers.mask=se.layers.mask&-5,$.layers.mask=se.layers.mask&-3;let at=xe.parent,Ne=se.cameras;Ve(se,at);for(let qe=0;qe<Ne.length;qe++)Ve(Ne[qe],at);Ne.length===2?C(se,V,$):se.projectionMatrix.copy(V.projectionMatrix),D===null&&xe.isPerspectiveCamera&&(D={camera:xe,fov:xe.fov,zoom:xe.zoom}),We(xe,se,at)};function We(xe,ye,He){He===null?xe.matrix.copy(ye.matrixWorld):(xe.matrix.copy(He.matrixWorld),xe.matrix.invert(),xe.matrix.multiply(ye.matrixWorld)),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.updateMatrixWorld(!0),xe.projectionMatrix.copy(ye.projectionMatrix),xe.projectionMatrixInverse.copy(ye.projectionMatrixInverse),xe.isPerspectiveCamera&&(xe.fov=Ia*2*Math.atan(1/xe.projectionMatrix.elements[5]),xe.zoom=1)}this.getCamera=function(){return se},this.getFoveation=function(){if(!(f===null&&y===null))return c},this.setFoveation=function(xe){c=xe,f!==null&&(f.fixedFoveation=xe),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=xe)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(se)},this.getCameraTexture=function(xe){return d[xe]};let rt=null;function Q(xe,ye){if(g=ye.getViewerPose(h||l),S=ye,g!==null){let He=g.views;y!==null&&(e.setRenderTargetFramebuffer(M,y.framebuffer),e.setRenderTarget(M));let at=!1;He.length!==se.cameras.length&&(se.cameras.length=0,at=!0);for(let it=0;it<He.length;it++){let Qe=He[it],ct=null;if(y!==null)ct=y.getViewport(Qe);else{let dt=_.getViewSubImage(f,Qe);ct=dt.viewport,it===0&&(e.setRenderTargetTextures(M,dt.colorTexture,dt.depthStencilTexture),e.setRenderTarget(M))}let st=Z[it];st===void 0&&(st=new mn,st.layers.enable(it),st.viewport=new Jt,Z[it]=st),st.matrix.fromArray(Qe.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(Qe.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(ct.x,ct.y,ct.width,ct.height),it===0&&(se.matrix.copy(st.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale)),at===!0&&se.cameras.push(st)}let Ne=s.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&P){_=n.getBinding();let it=_.getDepthInformation(He[0]);it&&it.isValid&&it.texture&&T.init(it,s.renderState)}if(Ne&&Ne.includes("camera-access")&&P){e.state.unbindTexture(),_=n.getBinding();for(let it=0;it<He.length;it++){let Qe=He[it].camera;if(Qe){let ct=d[Qe];ct||(ct=new Sr,d[Qe]=ct);let st=_.getCameraImage(Qe);ct.sourceTexture=st}}}}for(let He=0;He<u.length;He++){let at=w[He],Ne=u[He];at!==null&&Ne!==void 0&&Ne.update(at,ye,h||l)}rt&&rt(xe,ye),ye.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ye}),S=null}let ut=new wu;ut.setAnimationLoop(Q),this.setAnimationLoop=function(xe){rt=xe},this.dispose=function(){}}},pg=new Rt,Iu=new pt;Iu.set(-1,0,0,0,1,0,0,0,1);function mg(i,e){function t(T,d){T.matrixAutoUpdate===!0&&T.updateMatrix(),d.value.copy(T.matrix)}function n(T,d){d.color.getRGB(T.fogColor.value,sc(i)),d.isFog?(T.fogNear.value=d.near,T.fogFar.value=d.far):d.isFogExp2&&(T.fogDensity.value=d.density)}function s(T,d,b,A,M){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(T,d):d.isMeshLambertMaterial?(r(T,d),d.envMap&&(T.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(T,d),_(T,d)):d.isMeshPhongMaterial?(r(T,d),g(T,d),d.envMap&&(T.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(T,d),f(T,d),d.isMeshPhysicalMaterial&&y(T,d,M)):d.isMeshMatcapMaterial?(r(T,d),S(T,d)):d.isMeshDepthMaterial?r(T,d):d.isMeshDistanceMaterial?(r(T,d),P(T,d)):d.isMeshNormalMaterial?r(T,d):d.isLineBasicMaterial?(l(T,d),d.isLineDashedMaterial&&a(T,d)):d.isPointsMaterial?c(T,d,b,A):d.isSpriteMaterial?h(T,d):d.isShadowMaterial?(T.color.value.copy(d.color),T.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(T,d){T.opacity.value=d.opacity,d.color&&T.diffuse.value.copy(d.color),d.emissive&&T.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(T.map.value=d.map,t(d.map,T.mapTransform)),d.alphaMap&&(T.alphaMap.value=d.alphaMap,t(d.alphaMap,T.alphaMapTransform)),d.bumpMap&&(T.bumpMap.value=d.bumpMap,t(d.bumpMap,T.bumpMapTransform),T.bumpScale.value=d.bumpScale,d.side===Mn&&(T.bumpScale.value*=-1)),d.normalMap&&(T.normalMap.value=d.normalMap,t(d.normalMap,T.normalMapTransform),T.normalScale.value.copy(d.normalScale),d.side===Mn&&T.normalScale.value.negate()),d.displacementMap&&(T.displacementMap.value=d.displacementMap,t(d.displacementMap,T.displacementMapTransform),T.displacementScale.value=d.displacementScale,T.displacementBias.value=d.displacementBias),d.emissiveMap&&(T.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,T.emissiveMapTransform)),d.specularMap&&(T.specularMap.value=d.specularMap,t(d.specularMap,T.specularMapTransform)),d.alphaTest>0&&(T.alphaTest.value=d.alphaTest);let b=e.get(d),A=b.envMap,M=b.envMapRotation;A&&(T.envMap.value=A,T.envMapRotation.value.setFromMatrix4(pg.makeRotationFromEuler(M)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&T.envMapRotation.value.premultiply(Iu),T.reflectivity.value=d.reflectivity,T.ior.value=d.ior,T.refractionRatio.value=d.refractionRatio),d.lightMap&&(T.lightMap.value=d.lightMap,T.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,T.lightMapTransform)),d.aoMap&&(T.aoMap.value=d.aoMap,T.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,T.aoMapTransform))}function l(T,d){T.diffuse.value.copy(d.color),T.opacity.value=d.opacity,d.map&&(T.map.value=d.map,t(d.map,T.mapTransform))}function a(T,d){T.dashSize.value=d.dashSize,T.totalSize.value=d.dashSize+d.gapSize,T.scale.value=d.scale}function c(T,d,b,A){T.diffuse.value.copy(d.color),T.opacity.value=d.opacity,T.size.value=d.size*b,T.scale.value=A*.5,d.map&&(T.map.value=d.map,t(d.map,T.uvTransform)),d.alphaMap&&(T.alphaMap.value=d.alphaMap,t(d.alphaMap,T.alphaMapTransform)),d.alphaTest>0&&(T.alphaTest.value=d.alphaTest)}function h(T,d){T.diffuse.value.copy(d.color),T.opacity.value=d.opacity,T.rotation.value=d.rotation,d.map&&(T.map.value=d.map,t(d.map,T.mapTransform)),d.alphaMap&&(T.alphaMap.value=d.alphaMap,t(d.alphaMap,T.alphaMapTransform)),d.alphaTest>0&&(T.alphaTest.value=d.alphaTest)}function g(T,d){T.specular.value.copy(d.specular),T.shininess.value=Math.max(d.shininess,1e-4)}function _(T,d){d.gradientMap&&(T.gradientMap.value=d.gradientMap)}function f(T,d){T.metalness.value=d.metalness,d.metalnessMap&&(T.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,T.metalnessMapTransform)),T.roughness.value=d.roughness,d.roughnessMap&&(T.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,T.roughnessMapTransform)),d.envMap&&(T.envMapIntensity.value=d.envMapIntensity)}function y(T,d,b){T.ior.value=d.ior,d.sheen>0&&(T.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),T.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(T.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,T.sheenColorMapTransform)),d.sheenRoughnessMap&&(T.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,T.sheenRoughnessMapTransform))),d.clearcoat>0&&(T.clearcoat.value=d.clearcoat,T.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(T.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,T.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(T.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,T.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(T.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,T.clearcoatNormalMapTransform),T.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Mn&&T.clearcoatNormalScale.value.negate())),d.dispersion>0&&(T.dispersion.value=d.dispersion),d.retroreflectivity>0&&(T.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(T.iridescence.value=d.iridescence,T.iridescenceIOR.value=d.iridescenceIOR,T.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],T.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(T.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,T.iridescenceMapTransform)),d.iridescenceThicknessMap&&(T.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,T.iridescenceThicknessMapTransform))),d.transmission>0&&(T.transmission.value=d.transmission,T.transmissionSamplerMap.value=b.texture,T.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(T.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,T.transmissionMapTransform)),T.thickness.value=d.thickness,d.thicknessMap&&(T.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,T.thicknessMapTransform)),T.attenuationDistance.value=d.attenuationDistance,T.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(T.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(T.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,T.anisotropyMapTransform))),T.specularIntensity.value=d.specularIntensity,T.specularColor.value.copy(d.specularColor),d.specularColorMap&&(T.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,T.specularColorMapTransform)),d.specularIntensityMap&&(T.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,T.specularIntensityMapTransform))}function S(T,d){d.matcap&&(T.matcap.value=d.matcap)}function P(T,d){let b=e.get(d).light;T.referencePosition.value.setFromMatrixPosition(b.matrixWorld),T.nearDistance.value=b.shadow.camera.near,T.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function gg(i,e,t,n){let s={},r={},l=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,u){let w=u.program;n.uniformBlockBinding(M,w)}function h(M,u){let w=s[M.id];w===void 0&&(T(M),w=g(M),s[M.id]=w,M.addEventListener("dispose",b));let N=u.program;n.updateUBOMapping(M,N);let x=e.render.frame;r[M.id]!==x&&(f(M),r[M.id]=x)}function g(M){let u=_();M.__bindingPointIndex=u;let w=i.createBuffer(),N=M.__size,x=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,N,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,u,w),w}function _(){for(let M=0;M<a;M++)if(l.indexOf(M)===-1)return l.push(M),M;return ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let u=s[M.id],w=M.uniforms,N=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,u);for(let x=0,D=w.length;x<D;x++){let V=w[x];if(Array.isArray(V))for(let $=0,Z=V.length;$<Z;$++)y(V[$],x,$,N);else y(V,x,0,N)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function y(M,u,w,N){if(P(M,u,w,N)===!0){let x=M.__offset,D=M.value;if(Array.isArray(D)){let V=0;for(let $=0;$<D.length;$++){let Z=D[$],se=d(Z);S(Z,M.__data,V),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(V+=se.storage/Float32Array.BYTES_PER_ELEMENT)}}else S(D,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,M.__data)}}function S(M,u,w){typeof M=="number"||typeof M=="boolean"?u[0]=M:M.isMatrix3?(u[0]=M.elements[0],u[1]=M.elements[1],u[2]=M.elements[2],u[3]=0,u[4]=M.elements[3],u[5]=M.elements[4],u[6]=M.elements[5],u[7]=0,u[8]=M.elements[6],u[9]=M.elements[7],u[10]=M.elements[8],u[11]=0):ArrayBuffer.isView(M)?u.set(new M.constructor(M.buffer,M.byteOffset,u.length)):M.toArray(u,w)}function P(M,u,w,N){let x=M.value,D=u+"_"+w;if(N[D]===void 0)return typeof x=="number"||typeof x=="boolean"?N[D]=x:ArrayBuffer.isView(x)?N[D]=x.slice():N[D]=x.clone(),!0;{let V=N[D];if(typeof x=="number"||typeof x=="boolean"){if(V!==x)return N[D]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(V.equals(x)===!1)return V.copy(x),!0}}return!1}function T(M){let u=M.uniforms,w=0,N=16;for(let D=0,V=u.length;D<V;D++){let $=Array.isArray(u[D])?u[D]:[u[D]];for(let Z=0,se=$.length;Z<se;Z++){let X=$[Z],ne=Array.isArray(X.value)?X.value:[X.value];for(let de=0,ue=ne.length;de<ue;de++){let ve=ne[de],fe=d(ve),ee=w%N,C=ee%fe.boundary,Ve=ee+C;w+=C,Ve!==0&&N-Ve<fe.storage&&(w+=N-Ve),X.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=w,w+=fe.storage}}}let x=w%N;return x>0&&(w+=N-x),M.__size=w,M.__cache={},this}function d(M){let u={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(u.boundary=4,u.storage=4):M.isVector2?(u.boundary=8,u.storage=8):M.isVector3||M.isColor?(u.boundary=16,u.storage=12):M.isVector4?(u.boundary=16,u.storage=16):M.isMatrix3?(u.boundary=48,u.storage=48):M.isMatrix4?(u.boundary=64,u.storage=64):M.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(u.boundary=16,u.storage=M.byteLength):lt("WebGLRenderer: Unsupported uniform value type.",M),u}function b(M){let u=M.target;u.removeEventListener("dispose",b);let w=l.indexOf(u.__bindingPointIndex);l.splice(w,1),i.deleteBuffer(s[u.id]),delete s[u.id],delete r[u.id]}function A(){for(let M in s)i.deleteBuffer(s[M]);l=[],s={},r={}}return{bind:c,update:h,dispose:A}}var xg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),di=null;function _g(){return di===null&&(di=new vr(xg,16,16,Wi,Qn),di.name="DFG_LUT",di.minFilter=nn,di.magFilter=nn,di.wrapS=ri,di.wrapT=ri,di.generateMipmaps=!1,di.needsUpdate=!0),di}var Xo=class{constructor(e={}){let{canvas:t=Jh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:l=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:f=!1,outputBufferType:y=An}=e;this.isWebGLRenderer=!0;let S;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=n.getContextAttributes().alpha}else S=l;let P=y,T=new Set([ro,so,io]),d=new Set([An,jn,Vs,Gs,eo,to]),b=new Uint32Array(4),A=new Int32Array(4),M=new ce,u=null,w=null,N=[],x=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let V=this,$=!1,Z=null,se=null,X=null,ne=null;this._outputColorSpace=un;let de=0,ue=0,ve=null,fe=-1,ee=null,C=new Jt,Ve=new Jt,We=null,rt=new _t(0),Q=0,ut=t.width,xe=t.height,ye=1,He=null,at=null,Ne=new Jt(0,0,ut,xe),qe=new Jt(0,0,ut,xe),Bt=!1,it=new Ns,Qe=!1,ct=!1,st=new Rt,dt=new ce,It=new Jt,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},xt=!1;function Pt(){return ve===null?ye:1}let Y=n;function Ct(R,K){return t.getContext(R,K)}let vt,F,m,H,k,oe,we,be,he,ge,Ee,Ue,Re,Ie,Ze,Ke,tt,J,Ae,_e,De,L,B;try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",O,!1),t.addEventListener("webglcontextrestored",te,!1),t.addEventListener("webglcontextcreationerror",q,!1),Y===null){let K="webgl2";if(Y=Ct(K,R),Y===null)throw Ct(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}j()}catch(R){throw t.removeEventListener("webglcontextlost",O,!1),t.removeEventListener("webglcontextrestored",te,!1),t.removeEventListener("webglcontextcreationerror",q,!1),ot("WebGLRenderer: "+R.message),R}function j(){vt=new Tm(Y),vt.init(),De=new ug(Y,vt),F=new mm(Y,vt,e,De),m=new cg(Y,vt),F.reversedDepthBuffer&&f&&m.buffers.depth.setReversed(!0),se=Y.createFramebuffer(),X=Y.createFramebuffer(),ne=Y.createFramebuffer(),H=new Cm(Y),k=new J0,oe=new hg(Y,vt,m,k,F,De,H),we=new wm(V),be=new Rd(Y),L=new fm(Y,be),he=new Em(Y,be,H,L),ge=new Im(Y,he,be,L,H),J=new Rm(Y,F,oe),Ze=new gm(k),Ee=new Z0(V,we,vt,F,L,Ze),Ue=new mg(V,k),Re=new K0,Ie=new ig(vt),tt=new dm(V,we,m,ge,S,c),Ke=new lg(V,ge,F),B=new gg(Y,H,F,m),Ae=new pm(Y,vt,H),_e=new Am(Y,vt,H),H.programs=Ee.programs,V.capabilities=F,V.extensions=vt,V.properties=k,V.renderLists=Re,V.shadowMap=Ke,V.state=m,V.info=H}P!==An&&(D=new Lm(P,t.width,t.height,a,s,r));let E=new Ac(V,Y);this.xr=E,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){let R=vt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=vt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(R){R!==void 0&&(ye=R,this.setSize(ut,xe,!1))},this.getSize=function(R){return R.set(ut,xe)},this.setSize=function(R,K,pe=!0){if(E.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}ut=R,xe=K,t.width=Math.floor(R*ye),t.height=Math.floor(K*ye),pe===!0&&(t.style.width=R+"px",t.style.height=K+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,R,K)},this.getDrawingBufferSize=function(R){return R.set(ut*ye,xe*ye).floor()},this.setDrawingBufferSize=function(R,K,pe){ut=R,xe=K,ye=pe,t.width=Math.floor(R*pe),t.height=Math.floor(K*pe),this.setViewport(0,0,R,K)},this.setEffects=function(R){if(P===An){ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let K=0;K<R.length;K++)if(R[K].isOutputPass===!0){lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(C)},this.getViewport=function(R){return R.copy(Ne)},this.setViewport=function(R,K,pe,re){R.isVector4?Ne.set(R.x,R.y,R.z,R.w):Ne.set(R,K,pe,re),m.viewport(C.copy(Ne).multiplyScalar(ye).round())},this.getScissor=function(R){return R.copy(qe)},this.setScissor=function(R,K,pe,re){R.isVector4?qe.set(R.x,R.y,R.z,R.w):qe.set(R,K,pe,re),m.scissor(Ve.copy(qe).multiplyScalar(ye).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(R){m.setScissorTest(Bt=R)},this.setOpaqueSort=function(R){He=R},this.setTransparentSort=function(R){at=R},this.getClearColor=function(R){return R.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor(...arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha(...arguments)},this.clear=function(R=!0,K=!0,pe=!0){let re=0;if(R){let ae=!1;if(ve!==null){let ze=ve.texture.format;ae=T.has(ze)}if(ae){let ze=ve.texture.type,Je=d.has(ze),Fe=tt.getClearColor(),Xe=tt.getClearAlpha(),je=Fe.r,ft=Fe.g,gt=Fe.b;Je?(b[0]=je,b[1]=ft,b[2]=gt,b[3]=Xe,Y.clearBufferuiv(Y.COLOR,0,b)):(A[0]=je,A[1]=ft,A[2]=gt,A[3]=Xe,Y.clearBufferiv(Y.COLOR,0,A))}else re|=Y.COLOR_BUFFER_BIT}K&&(re|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),pe&&(re|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&Y.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),Z=R},this.dispose=function(){t.removeEventListener("webglcontextlost",O,!1),t.removeEventListener("webglcontextrestored",te,!1),t.removeEventListener("webglcontextcreationerror",q,!1),tt.dispose(),Re.dispose(),Ie.dispose(),k.dispose(),we.dispose(),ge.dispose(),L.dispose(),B.dispose(),Ee.dispose(),E.dispose(),E.removeEventListener("sessionstart",nt),E.removeEventListener("sessionend",mt),At.stop()};function O(R){R.preventDefault(),ur("WebGLRenderer: Context Lost."),$=!0}function te(){ur("WebGLRenderer: Context Restored."),$=!1;let R=H.autoReset,K=Ke.enabled,pe=Ke.autoUpdate,re=Ke.needsUpdate,ae=Ke.type;j(),H.autoReset=R,Ke.enabled=K,Ke.autoUpdate=pe,Ke.needsUpdate=re,Ke.type=ae}function q(R){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function le(R){let K=R.target;K.removeEventListener("dispose",le),Me(K)}function Me(R){Te(R),k.remove(R)}function Te(R){let K=k.get(R).programs;K!==void 0&&(K.forEach(function(pe){Ee.releaseProgram(pe)}),R.isShaderMaterial&&Ee.releaseShaderCache(R))}this.renderBufferDirect=function(R,K,pe,re,ae,ze){K===null&&(K=Gt);let Je=ae.isMesh&&ae.matrixWorld.determinantAffine()<0,Fe=ls(R,K,pe,re,ae);m.setMaterial(re,Je);let Xe=pe.index,je=1;if(re.wireframe===!0){if(Xe=he.getWireframeAttribute(pe),Xe===void 0)return;je=2}let ft=pe.drawRange,gt=pe.attributes.position,$e=ft.start*je,Et=(ft.start+ft.count)*je;ze!==null&&($e=Math.max($e,ze.start*je),Et=Math.min(Et,(ze.start+ze.count)*je)),Xe!==null?($e=Math.max($e,0),Et=Math.min(Et,Xe.count)):gt!=null&&($e=Math.max($e,0),Et=Math.min(Et,gt.count));let $t=Et-$e;if($t<0||$t===1/0)return;L.setup(ae,re,Fe,pe,Xe);let Ut,Ft=Ae;if(Xe!==null&&(Ut=be.get(Xe),Ft=_e,Ft.setIndex(Ut)),ae.isMesh)re.wireframe===!0?(m.setLineWidth(re.wireframeLinewidth*Pt()),Ft.setMode(Y.LINES)):Ft.setMode(Y.TRIANGLES);else if(ae.isLine){let an=re.linewidth;an===void 0&&(an=1),m.setLineWidth(an*Pt()),ae.isLineSegments?Ft.setMode(Y.LINES):ae.isLineLoop?Ft.setMode(Y.LINE_LOOP):Ft.setMode(Y.LINE_STRIP)}else ae.isPoints?Ft.setMode(Y.POINTS):ae.isSprite&&Ft.setMode(Y.TRIANGLES);if(ae.isBatchedMesh)if(vt.get("WEBGL_multi_draw"))Ft.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{let an=ae._multiDrawStarts,Ye=ae._multiDrawCounts,Qt=ae._multiDrawCount,Ce=Xe?be.get(Xe).bytesPerElement:1,qt=k.get(re).currentProgram.getUniforms();for(let dn=0;dn<Qt;dn++)qt.setValue(Y,"_gl_DrawID",dn),Ft.render(an[dn]/Ce,Ye[dn])}else if(ae.isInstancedMesh)Ft.renderInstances($e,$t,ae.count);else if(pe.isInstancedBufferGeometry){let an=pe._maxInstanceCount!==void 0?pe._maxInstanceCount:1/0,Ye=Math.min(pe.instanceCount,an);Ft.renderInstances($e,$t,Ye)}else Ft.render($e,$t)};function me(R,K,pe,re){Z!==null&&R.isNodeMaterial&&Z.setObject(re,R),Qe===!0&&Ze.setState(R,pe,!1),R.transparent===!0&&R.side===kn&&R.forceSinglePass===!1?(R.side=Mn,R.needsUpdate=!0,hn(R,K,re),R.side=Vi,R.needsUpdate=!0,hn(R,K,re),R.side=kn):hn(R,K,re)}this.compile=function(R,K,pe=null){pe===null&&(pe=R),Z!==null&&Z.renderStart(R,K,pe),w=Ie.get(pe),w.init(K),x.push(w),pe.traverseVisible(function(ae){ae.isLight&&ae.layers.test(K.layers)&&(w.pushLight(ae),ae.castShadow&&w.pushShadow(ae))}),R!==pe&&R.traverseVisible(function(ae){ae.isLight&&ae.layers.test(K.layers)&&(w.pushLight(ae),ae.castShadow&&w.pushShadow(ae))}),w.setupLights(),Z!==null&&Z.updateLights(w.state.lightsArray),ct=this.localClippingEnabled,Qe=Ze.init(this.clippingPlanes,ct),Qe===!0&&Ze.setGlobalState(this.clippingPlanes,K),Z!==null&&Ke.render(w.state.shadowsArray,pe,K);let re=new Set;return R.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;let ze=ae.material;if(ze)if(Array.isArray(ze))for(let Je=0;Je<ze.length;Je++){let Fe=ze[Je];me(Fe,pe,K,ae),re.add(Fe)}else me(ze,pe,K,ae),re.add(ze)}),w=x.pop(),Z!==null&&Z.renderEnd(),re},this.compileAsync=function(R,K,pe=null){let re=this.compile(R,K,pe);return new Promise(ae=>{function ze(){if(re.forEach(function(Je){let Xe=k.get(Je).currentProgram;(Xe===void 0||Xe.isReady())&&re.delete(Je)}),re.size===0){ae(R);return}setTimeout(ze,10)}vt.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let Pe=null;function ke(R){Pe&&Pe(R)}function nt(){At.stop()}function mt(){At.start()}let At=new wu;At.setAnimationLoop(ke),typeof self<"u"&&At.setContext(self),this.setAnimationLoop=function(R){Pe=R,E.setAnimationLoop(R),R===null?At.stop():At.start()},E.addEventListener("sessionstart",nt),E.addEventListener("sessionend",mt),this.render=function(R,K){if(K!==void 0&&K.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if($===!0)return;Z!==null&&Z.renderStart(R,K);let pe=E.enabled===!0&&E.isPresenting===!0,re=D!==null&&(ve===null||pe)&&D.begin(V,ve);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),E.enabled===!0&&E.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(E.cameraAutoUpdate===!0&&E.updateCamera(K),K=E.getCamera()),R.isScene===!0&&R.onBeforeRender(V,R,K,ve),w=Ie.get(R,x.length),w.init(K),w.state.textureUnits=oe.getTextureUnits(),x.push(w),st.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),it.setFromProjectionMatrix(st,$n,K.reversedDepth),ct=this.localClippingEnabled,Qe=Ze.init(this.clippingPlanes,ct),u=Re.get(R,N.length),u.init(),N.push(u),E.enabled===!0&&E.isPresenting===!0){let Je=V.xr.getDepthSensingMesh();Je!==null&&ht(Je,K,-1/0,V.sortObjects)}ht(R,K,0,V.sortObjects),u.finish(),Z!==null&&Z.updateLights(w.state.lightsArray),V.sortObjects===!0&&u.sort(He,at),xt=E.enabled===!1||E.isPresenting===!1||E.hasDepthSensing()===!1,xt&&tt.addToRenderList(u,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Qe===!0&&Ze.beginShadows();let ae=w.state.shadowsArray;if(Ke.render(ae,R,K),Qe===!0&&Ze.endShadows(),(re&&D.hasRenderPass())===!1){let Je=u.opaque,Fe=u.transmissive;if(w.setupLights(),K.isArrayCamera){let Xe=K.cameras;if(Fe.length>0)for(let je=0,ft=Xe.length;je<ft;je++){let gt=Xe[je];Xt(Je,Fe,R,gt)}xt&&tt.render(R);for(let je=0,ft=Xe.length;je<ft;je++){let gt=Xe[je];jt(u,R,gt,gt.viewport)}}else Fe.length>0&&Xt(Je,Fe,R,K),xt&&tt.render(R),jt(u,R,K)}ve!==null&&ue===0&&(oe.updateMultisampleRenderTarget(ve),oe.updateRenderTargetMipmap(ve)),re&&D.end(V),R.isScene===!0&&R.onAfterRender(V,R,K),L.resetDefaultState(),fe=-1,ee=null,x.pop(),x.length>0?(w=x[x.length-1],oe.setTextureUnits(w.state.textureUnits),Qe===!0&&Ze.setGlobalState(V.clippingPlanes,w.state.camera)):w=null,N.pop(),N.length>0?u=N[N.length-1]:u=null,Z!==null&&Z.renderEnd()};function ht(R,K,pe,re){if(R.visible===!1)return;if(R.layers.test(K.layers)){if(R.isGroup)pe=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(K);else if(R.isLightProbeGrid)w.pushLightProbeGrid(R);else if(R.isLight)w.pushLight(R),R.castShadow&&w.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(it)){re&&It.setFromMatrixPosition(R.matrixWorld).applyMatrix4(st);let Je=ge.update(R),Fe=R.material;Fe.visible&&u.push(R,Je,Fe,pe,It.z,null,K)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(it))){let Je=ge.update(R),Fe=R.material;if(re&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),It.copy(R.boundingSphere.center)):(Je.boundingSphere===null&&Je.computeBoundingSphere(),It.copy(Je.boundingSphere.center)),It.applyMatrix4(R.matrixWorld).applyMatrix4(st)),Array.isArray(Fe)){let Xe=Je.groups;for(let je=0,ft=Xe.length;je<ft;je++){let gt=Xe[je],$e=Fe[gt.materialIndex];$e&&$e.visible&&u.push(R,Je,$e,pe,It.z,gt,K)}}else Fe.visible&&u.push(R,Je,Fe,pe,It.z,null,K)}}let ze=R.children;for(let Je=0,Fe=ze.length;Je<Fe;Je++)ht(ze[Je],K,pe,re)}function jt(R,K,pe,re){let{opaque:ae,transmissive:ze,transparent:Je}=R;w.setupLightsView(pe),Qe===!0&&Ze.setGlobalState(V.clippingPlanes,pe),re&&m.viewport(C.copy(re)),ae.length>0&&Xn(ae,K,pe),ze.length>0&&Xn(ze,K,pe),Je.length>0&&Xn(Je,K,pe),m.buffers.depth.setTest(!0),m.buffers.depth.setMask(!0),m.buffers.color.setMask(!0),m.setPolygonOffset(!1)}function Xt(R,K,pe,re){if((pe.isScene===!0?pe.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[re.id]===void 0){let $e=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[re.id]=new En(1,1,{generateMipmaps:!0,type:$e?Qn:An,minFilter:ui,samples:Math.max(4,F.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:bt.workingColorSpace})}let ze=w.state.transmissionRenderTarget[re.id],Je=re.viewport||C;ze.setSize(Je.z*V.transmissionResolutionScale,Je.w*V.transmissionResolutionScale);let Fe=V.getRenderTarget(),Xe=V.getActiveCubeFace(),je=V.getActiveMipmapLevel();V.setRenderTarget(ze),V.getClearColor(rt),Q=V.getClearAlpha(),Q<1&&V.setClearColor(16777215,.5),V.clear(),xt&&tt.render(pe);let ft=V.toneMapping;V.toneMapping=Kn;let gt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),w.setupLightsView(re),Qe===!0&&Ze.setGlobalState(V.clippingPlanes,re),Xn(R,pe,re),oe.updateMultisampleRenderTarget(ze),oe.updateRenderTargetMipmap(ze),vt.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Et=0,$t=K.length;Et<$t;Et++){let Ut=K[Et],{object:Ft,geometry:an,material:Ye,group:Qt}=Ut;if(Ye.side===kn&&Ft.layers.test(re.layers)){let Ce=Ye.side;Ye.side=Mn,Ye.needsUpdate=!0,zn(Ft,pe,re,an,Ye,Qt),Ye.side=Ce,Ye.needsUpdate=!0,$e=!0}}$e===!0&&(oe.updateMultisampleRenderTarget(ze),oe.updateRenderTargetMipmap(ze))}V.setRenderTarget(Fe,Xe,je),V.setClearColor(rt,Q),gt!==void 0&&(re.viewport=gt),V.toneMapping=ft}function Xn(R,K,pe){let re=K.isScene===!0?K.overrideMaterial:null;for(let ae=0,ze=R.length;ae<ze;ae++){let Je=R[ae],{object:Fe,geometry:Xe,group:je}=Je,ft=Je.material;ft.allowOverride===!0&&re!==null&&(ft=re),Fe.layers.test(pe.layers)&&zn(Fe,K,pe,Xe,ft,je)}}function zn(R,K,pe,re,ae,ze){Z!==null&&ae.isNodeMaterial&&Z.setObject(R,ae),R.onBeforeRender(V,K,pe,re,ae,ze),R.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ae.onBeforeRender(V,K,pe,re,R,ze),ae.transparent===!0&&ae.side===kn&&ae.forceSinglePass===!1?(ae.side=Mn,ae.needsUpdate=!0,V.renderBufferDirect(pe,K,re,ae,R,ze),ae.side=Vi,ae.needsUpdate=!0,V.renderBufferDirect(pe,K,re,ae,R,ze),ae.side=kn):V.renderBufferDirect(pe,K,re,ae,R,ze),R.onAfterRender(V,K,pe,re,ae,ze)}function hn(R,K,pe){K.isScene!==!0&&(K=Gt);let re=k.get(R),ae=w.state.lights,ze=w.state.shadowsArray,Je=ae.state.version,Fe=Ee.getParameters(R,ae.state,ze,K,pe,w.state.lightProbeGridArray),Xe=Ee.getProgramCacheKey(Fe),je=re.programs;re.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?K.environment:null,re.fog=K.fog;let ft=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;re.envMap=we.get(R.envMap||re.environment,ft),re.envMapRotation=re.environment!==null&&R.envMap===null?K.environmentRotation:R.envMapRotation,je===void 0&&(R.addEventListener("dispose",le),je=new Map,re.programs=je);let gt=je.get(Xe);if(gt!==void 0){if(re.currentProgram===gt&&re.lightsStateVersion===Je)return yn(R,Fe),gt}else Fe.uniforms=Ee.getUniforms(R),Z!==null&&R.isNodeMaterial&&Z.build(R,pe,Fe),R.onBeforeCompile(Fe,V),gt=Ee.acquireProgram(Fe,Xe),je.set(Xe,gt),re.uniforms=Fe.uniforms;let $e=re.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&($e.clippingPlanes=Ze.uniform),yn(R,Fe),re.needsLights=Jo(R),re.lightsStateVersion=Je,re.needsLights&&($e.ambientLightColor.value=ae.state.ambient,$e.lightProbe.value=ae.state.probe,$e.sunLights.value=ae.state.sun,$e.sunLightShadows.value=ae.state.sunShadow,$e.directionalLights.value=ae.state.directional,$e.directionalLightShadows.value=ae.state.directionalShadow,$e.spotLights.value=ae.state.spot,$e.spotLightShadows.value=ae.state.spotShadow,$e.rectAreaLights.value=ae.state.rectArea,$e.ltc_1.value=ae.state.rectAreaLTC1,$e.ltc_2.value=ae.state.rectAreaLTC2,$e.pointLights.value=ae.state.point,$e.pointLightShadows.value=ae.state.pointShadow,$e.hemisphereLights.value=ae.state.hemi,$e.sunShadowMatrix.value=ae.state.sunShadowMatrix,$e.sunShadowCascade.value=ae.state.sunShadowCascade,$e.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,$e.spotLightMatrix.value=ae.state.spotLightMatrix,$e.spotLightMap.value=ae.state.spotLightMap,$e.pointShadowMatrix.value=ae.state.pointShadowMatrix),re.lightProbeGrid=w.state.lightProbeGridArray.length>0,re.currentProgram=gt,re.uniformsList=null,gt}function Cn(R){if(R.uniformsList===null){let K=R.currentProgram.getUniforms();R.uniformsList=Xs.seqWithValue(K.seq,R.uniforms)}return R.uniformsList}function yn(R,K){let pe=k.get(R);pe.outputColorSpace=K.outputColorSpace,pe.batching=K.batching,pe.batchingColor=K.batchingColor,pe.instancing=K.instancing,pe.instancingColor=K.instancingColor,pe.instancingMorph=K.instancingMorph,pe.skinning=K.skinning,pe.morphTargets=K.morphTargets,pe.morphNormals=K.morphNormals,pe.morphColors=K.morphColors,pe.morphTargetsCount=K.morphTargetsCount,pe.numClippingPlanes=K.numClippingPlanes,pe.numIntersection=K.numClipIntersection,pe.vertexAlphas=K.vertexAlphas,pe.vertexTangents=K.vertexTangents,pe.toneMapping=K.toneMapping}function pi(R,K){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;M.setFromMatrixPosition(K.matrixWorld);for(let pe=0,re=R.length;pe<re;pe++){let ae=R[pe];if(ae.texture!==null&&ae.boundingBox.containsPoint(M))return ae}return null}function ls(R,K,pe,re,ae){K.isScene!==!0&&(K=Gt),oe.resetTextureUnits();let ze=K.fog,Je=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?K.environment:null,Fe=ve===null?V.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:bt.workingColorSpace,Xe=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,je=we.get(re.envMap||Je,Xe),ft=re.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,gt=!!pe.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),$e=!!pe.morphAttributes.position,Et=!!pe.morphAttributes.normal,$t=!!pe.morphAttributes.color,Ut=Kn;re.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Ut=V.toneMapping);let Ft=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,an=Ft!==void 0?Ft.length:0,Ye=k.get(re),Qt=w.state.lights;if(Qe===!0&&(ct===!0||R!==ee)){let Ot=R===ee&&re.id===fe;Ze.setState(re,R,Ot)}let Ce=!1;re.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Qt.state.version||Ye.outputColorSpace!==Fe||ae.isBatchedMesh&&Ye.batching===!1||!ae.isBatchedMesh&&Ye.batching===!0||ae.isBatchedMesh&&Ye.batchingColor===!0&&ae._colorsTexture===null||ae.isBatchedMesh&&Ye.batchingColor===!1&&ae._colorsTexture!==null||ae.isInstancedMesh&&Ye.instancing===!1||!ae.isInstancedMesh&&Ye.instancing===!0||ae.isSkinnedMesh&&Ye.skinning===!1||!ae.isSkinnedMesh&&Ye.skinning===!0||ae.isInstancedMesh&&Ye.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&Ye.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&Ye.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&Ye.instancingMorph===!1&&ae.morphTexture!==null||Ye.envMap!==je||re.fog===!0&&Ye.fog!==ze||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Ze.numPlanes||Ye.numIntersection!==Ze.numIntersection)||Ye.vertexAlphas!==ft||Ye.vertexTangents!==gt||Ye.morphTargets!==$e||Ye.morphNormals!==Et||Ye.morphColors!==$t||Ye.toneMapping!==Ut||Ye.morphTargetsCount!==an||!!Ye.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Ce=!0):(Ce=!0,Ye.__version=re.version);let qt=Ye.currentProgram;Ce===!0&&(qt=hn(re,K,ae),Z&&re.isNodeMaterial&&Z.onUpdateProgram(re,qt,Ye));let dn=!1,ei=!1,Rn=!1,St=qt.getUniforms(),Lt=Ye.uniforms;if(m.useProgram(qt.program)&&(dn=!0,ei=!0,Rn=!0),re.id!==fe&&(fe=re.id,ei=!0),Ye.needsLights){let Ot=pi(w.state.lightProbeGridArray,ae);Ye.lightProbeGrid!==Ot&&(Ye.lightProbeGrid=Ot,ei=!0)}if(dn||ee!==R){m.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),St.setValue(Y,"projectionMatrix",R.projectionMatrix),St.setValue(Y,"viewMatrix",R.matrixWorldInverse);let Zt=St.map.cameraPosition;Zt!==void 0&&Zt.setValue(Y,dt.setFromMatrixPosition(R.matrixWorld)),F.logarithmicDepthBuffer&&St.setValue(Y,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&St.setValue(Y,"isOrthographic",R.isOrthographicCamera===!0),ee!==R&&(ee=R,ei=!0,Rn=!0)}if(Ye.needsLights&&(Qt.state.sunShadowMap.length>0&&St.setValue(Y,"sunShadowMap",Qt.state.sunShadowMap,oe),Qt.state.directionalShadowMap.length>0&&St.setValue(Y,"directionalShadowMap",Qt.state.directionalShadowMap,oe),Qt.state.spotShadowMap.length>0&&St.setValue(Y,"spotShadowMap",Qt.state.spotShadowMap,oe),Qt.state.pointShadowMap.length>0&&St.setValue(Y,"pointShadowMap",Qt.state.pointShadowMap,oe)),ae.isSkinnedMesh){St.setOptional(Y,ae,"bindMatrix"),St.setOptional(Y,ae,"bindMatrixInverse");let Ot=ae.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),St.setValue(Y,"boneTexture",Ot.boneTexture,oe))}ae.isBatchedMesh&&(St.setOptional(Y,ae,"batchingTexture"),St.setValue(Y,"batchingTexture",ae._matricesTexture,oe),St.setOptional(Y,ae,"batchingIdTexture"),St.setValue(Y,"batchingIdTexture",ae._indirectTexture,oe),St.setOptional(Y,ae,"batchingColorTexture"),ae._colorsTexture!==null&&St.setValue(Y,"batchingColorTexture",ae._colorsTexture,oe));let ti=pe.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&J.update(ae,pe,qt),(ei||Ye.receiveShadow!==ae.receiveShadow)&&(Ye.receiveShadow=ae.receiveShadow,St.setValue(Y,"receiveShadow",ae.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&K.environment!==null&&(Lt.envMapIntensity.value=K.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=_g()),ei){if(St.setValue(Y,"toneMappingExposure",V.toneMappingExposure),Ye.needsLights&&Zo(Lt,Rn),ze&&re.fog===!0&&Ue.refreshFogUniforms(Lt,ze),Ue.refreshMaterialUniforms(Lt,re,ye,xe,w.state.transmissionRenderTarget[R.id]),Ye.needsLights&&Ye.lightProbeGrid){let Ot=Ye.lightProbeGrid;Lt.probesSH.value=Ot.texture,Lt.probesMin.value.copy(Ot.boundingBox.min),Lt.probesMax.value.copy(Ot.boundingBox.max),Lt.probesResolution.value.copy(Ot.resolution)}Xs.upload(Y,Cn(Ye),Lt,oe)}if(re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Xs.upload(Y,Cn(Ye),Lt,oe),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&St.setValue(Y,"center",ae.center),St.setValue(Y,"modelViewMatrix",ae.modelViewMatrix),St.setValue(Y,"normalMatrix",ae.normalMatrix),St.setValue(Y,"modelMatrix",ae.matrixWorld),re.uniformsGroups!==void 0){let Ot=re.uniformsGroups;for(let Zt=0,In=Ot.length;Zt<In;Zt++){let Ei=Ot[Zt];B.update(Ei,qt),B.bind(Ei,qt)}}return qt}function Zo(R,K){R.ambientLightColor.needsUpdate=K,R.lightProbe.needsUpdate=K,R.sunLights.needsUpdate=K,R.sunLightShadows.needsUpdate=K,R.directionalLights.needsUpdate=K,R.directionalLightShadows.needsUpdate=K,R.pointLights.needsUpdate=K,R.pointLightShadows.needsUpdate=K,R.spotLights.needsUpdate=K,R.spotLightShadows.needsUpdate=K,R.rectAreaLights.needsUpdate=K,R.hemisphereLights.needsUpdate=K}function Jo(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return de},this.getActiveMipmapLevel=function(){return ue},this.getRenderTarget=function(){return ve},this.setRenderTargetTextures=function(R,K,pe){let re=k.get(R);re.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),k.get(R.texture).__webglTexture=K,k.get(R.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:pe,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,K){let pe=k.get(R);pe.__webglFramebuffer=K,pe.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(R,K=0,pe=0){ve=R,de=K,ue=pe;let re=null,ae=!1,ze=!1;if(R){let Fe=k.get(R);if(Fe.__useDefaultFramebuffer!==void 0){m.bindFramebuffer(Y.FRAMEBUFFER,Fe.__webglFramebuffer),C.copy(R.viewport),Ve.copy(R.scissor),We=R.scissorTest,m.viewport(C),m.scissor(Ve),m.setScissorTest(We),fe=-1;return}else if(Fe.__webglFramebuffer===void 0)oe.setupRenderTarget(R);else if(Fe.__hasExternalTextures)oe.rebindTextures(R,k.get(R.texture).__webglTexture,k.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let ft=R.depthTexture;if(Fe.__boundDepthTexture!==ft){if(ft!==null&&k.has(ft)&&(R.width!==ft.image.width||R.height!==ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(R)}}let Xe=R.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(ze=!0);let je=k.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(je[K])?re=je[K][pe]:re=je[K],ae=!0):R.samples>0&&oe.useMultisampledRTT(R)===!1?re=k.get(R).__webglMultisampledFramebuffer:Array.isArray(je)?re=je[pe]:re=je,C.copy(R.viewport),Ve.copy(R.scissor),We=R.scissorTest}else C.copy(Ne).multiplyScalar(ye).floor(),Ve.copy(qe).multiplyScalar(ye).floor(),We=Bt;if(pe!==0&&(re=se),m.bindFramebuffer(Y.FRAMEBUFFER,re)&&m.drawBuffers(R,re),m.viewport(C),m.scissor(Ve),m.setScissorTest(We),ae){let Fe=k.get(R.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+K,Fe.__webglTexture,pe)}else if(ze){let Fe=K;for(let Xe=0;Xe<R.textures.length;Xe++){let je=k.get(R.textures[Xe]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Xe,je.__webglTexture,pe,Fe)}}else if(R!==null&&pe!==0){let Fe=k.get(R.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Fe.__webglTexture,pe)}fe=-1};function Xr(R){let K=k.get(R);return(K.__readFormat!==R.format||K.__readType!==R.type)&&(K.__readFormat=R.format,K.__readType=R.type,K.__formatReadable=F.textureFormatReadable(R.format),K.__typeReadable=F.textureTypeReadable(R.type)),K}this.readRenderTargetPixels=function(R,K,pe,re,ae,ze,Je,Fe=0){if(!(R&&R.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=k.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Je!==void 0&&(Xe=Xe[Je]),Xe){m.bindFramebuffer(Y.FRAMEBUFFER,Xe);try{let je=R.textures[Fe],ft=je.format,gt=je.type;R.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Fe);let $e=Xr(je);if($e.__formatReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if($e.__typeReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=R.width-re&&pe>=0&&pe<=R.height-ae&&Y.readPixels(K,pe,re,ae,De.convert(ft),De.convert(gt),ze)}finally{let je=ve!==null?k.get(ve).__webglFramebuffer:null;m.bindFramebuffer(Y.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(R,K,pe,re,ae,ze,Je,Fe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=k.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Je!==void 0&&(Xe=Xe[Je]),Xe)if(K>=0&&K<=R.width-re&&pe>=0&&pe<=R.height-ae){m.bindFramebuffer(Y.FRAMEBUFFER,Xe);let je=R.textures[Fe],ft=je.format,gt=je.type;R.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Fe);let $e=Xr(je);if($e.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if($e.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Et=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Et),Y.bufferData(Y.PIXEL_PACK_BUFFER,ze.byteLength,Y.STREAM_READ),Y.readPixels(K,pe,re,ae,De.convert(ft),De.convert(gt),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);let $t=ve!==null?k.get(ve).__webglFramebuffer:null;m.bindFramebuffer(Y.FRAMEBUFFER,$t);let Ut=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await Kh(Y,Ut,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Et),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,ze),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(Et),Y.deleteSync(Ut),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,K=null,pe=0){let re=Math.pow(2,-pe),ae=Math.floor(R.image.width*re),ze=Math.floor(R.image.height*re),Je=K!==null?K.x:0,Fe=K!==null?K.y:0;oe.setTexture2D(R,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,pe,0,0,Je,Fe,ae,ze),m.unbindTexture()},this.copyTextureToTexture=function(R,K,pe=null,re=null,ae=0,ze=0){let Je,Fe,Xe,je,ft,gt,$e,Et,$t,Ut=R.isCompressedTexture?R.mipmaps[ze]:R.image;if(pe!==null)Je=pe.max.x-pe.min.x,Fe=pe.max.y-pe.min.y,Xe=pe.isBox3?pe.max.z-pe.min.z:1,je=pe.min.x,ft=pe.min.y,gt=pe.isBox3?pe.min.z:0;else{let Lt=Math.pow(2,-ae);Je=Math.floor(Ut.width*Lt),Fe=Math.floor(Ut.height*Lt),R.isDataArrayTexture?Xe=Ut.depth:R.isData3DTexture?Xe=Math.floor(Ut.depth*Lt):Xe=1,je=0,ft=0,gt=0}re!==null?($e=re.x,Et=re.y,$t=re.z):($e=0,Et=0,$t=0);let Ft=De.convert(K.format),an=De.convert(K.type),Ye;K.isData3DTexture?(oe.setTexture3D(K,0),Ye=Y.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(oe.setTexture2DArray(K,0),Ye=Y.TEXTURE_2D_ARRAY):(oe.setTexture2D(K,0),Ye=Y.TEXTURE_2D),m.activeTexture(Y.TEXTURE0),m.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,K.flipY),m.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),m.pixelStorei(Y.UNPACK_ALIGNMENT,K.unpackAlignment);let Qt=m.getParameter(Y.UNPACK_ROW_LENGTH),Ce=m.getParameter(Y.UNPACK_IMAGE_HEIGHT),qt=m.getParameter(Y.UNPACK_SKIP_PIXELS),dn=m.getParameter(Y.UNPACK_SKIP_ROWS),ei=m.getParameter(Y.UNPACK_SKIP_IMAGES);m.pixelStorei(Y.UNPACK_ROW_LENGTH,Ut.width),m.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Ut.height),m.pixelStorei(Y.UNPACK_SKIP_PIXELS,je),m.pixelStorei(Y.UNPACK_SKIP_ROWS,ft),m.pixelStorei(Y.UNPACK_SKIP_IMAGES,gt);let Rn=R.isDataArrayTexture||R.isData3DTexture,St=K.isDataArrayTexture||K.isData3DTexture;if(R.isDepthTexture){let Lt=k.get(R),ti=k.get(K),Ot=k.get(Lt.__renderTarget),Zt=k.get(ti.__renderTarget);m.bindFramebuffer(Y.READ_FRAMEBUFFER,Ot.__webglFramebuffer),m.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let In=0;In<Xe;In++)Rn&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,k.get(R).__webglTexture,ae,gt+In),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,k.get(K).__webglTexture,ze,$t+In)),Y.blitFramebuffer(je,ft,Je,Fe,$e,Et,Je,Fe,Y.DEPTH_BUFFER_BIT,Y.NEAREST);m.bindFramebuffer(Y.READ_FRAMEBUFFER,null),m.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(ae!==0||R.isRenderTargetTexture||k.has(R)){let Lt=k.get(R),ti=k.get(K);m.bindFramebuffer(Y.READ_FRAMEBUFFER,X),m.bindFramebuffer(Y.DRAW_FRAMEBUFFER,ne);for(let Ot=0;Ot<Xe;Ot++)Rn?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Lt.__webglTexture,ae,gt+Ot):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Lt.__webglTexture,ae),St?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ti.__webglTexture,ze,$t+Ot):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,ti.__webglTexture,ze),ae!==0?Y.blitFramebuffer(je,ft,Je,Fe,$e,Et,Je,Fe,Y.COLOR_BUFFER_BIT,Y.NEAREST):St?Y.copyTexSubImage3D(Ye,ze,$e,Et,$t+Ot,je,ft,Je,Fe):Y.copyTexSubImage2D(Ye,ze,$e,Et,je,ft,Je,Fe);m.bindFramebuffer(Y.READ_FRAMEBUFFER,null),m.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else St?R.isDataTexture||R.isData3DTexture?Y.texSubImage3D(Ye,ze,$e,Et,$t,Je,Fe,Xe,Ft,an,Ut.data):K.isCompressedArrayTexture?Y.compressedTexSubImage3D(Ye,ze,$e,Et,$t,Je,Fe,Xe,Ft,Ut.data):Y.texSubImage3D(Ye,ze,$e,Et,$t,Je,Fe,Xe,Ft,an,Ut):R.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,ze,$e,Et,Je,Fe,Ft,an,Ut.data):R.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,ze,$e,Et,Ut.width,Ut.height,Ft,Ut.data):Y.texSubImage2D(Y.TEXTURE_2D,ze,$e,Et,Je,Fe,Ft,an,Ut);m.pixelStorei(Y.UNPACK_ROW_LENGTH,Qt),m.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Ce),m.pixelStorei(Y.UNPACK_SKIP_PIXELS,qt),m.pixelStorei(Y.UNPACK_SKIP_ROWS,dn),m.pixelStorei(Y.UNPACK_SKIP_IMAGES,ei),ze===0&&K.generateMipmaps&&Y.generateMipmap(Ye),m.unbindTexture()},this.initRenderTarget=function(R){k.get(R).__webglFramebuffer===void 0&&oe.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?oe.setTextureCube(R,0):R.isData3DTexture?oe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?oe.setTexture2DArray(R,0):oe.setTexture2D(R,0),m.unbindTexture()},this.resetState=function(){de=0,ue=0,ve=null,m.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}};window.FestaGL=(()=>{let i=Math.PI*2,e=(d,b,A)=>Math.min(A,Math.max(b,d)),t={add:(d,b)=>[d[0]+b[0],d[1]+b[1],d[2]+b[2]],sub:(d,b)=>[d[0]-b[0],d[1]-b[1],d[2]-b[2]],mul:(d,b)=>[d[0]*b,d[1]*b,d[2]*b],dot:(d,b)=>d[0]*b[0]+d[1]*b[1]+d[2]*b[2],cross:(d,b)=>[d[1]*b[2]-d[2]*b[1],d[2]*b[0]-d[0]*b[2],d[0]*b[1]-d[1]*b[0]],len:d=>Math.hypot(...d),norm:d=>{let b=Math.hypot(...d)||1;return d.map(A=>A/b)}},n={identity:()=>new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),multiply:(d,b)=>{let A=new Float32Array(16);for(let M=0;M<4;M++)for(let u=0;u<4;u++)A[M*4+u]=d[u]*b[M*4]+d[4+u]*b[M*4+1]+d[8+u]*b[M*4+2]+d[12+u]*b[M*4+3];return A},perspective:(d,b,A,M)=>{let u=1/Math.tan(d/2),w=new Float32Array(16);return w[0]=u/b,w[5]=u,w[10]=(M+A)/(A-M),w[11]=-1,w[14]=2*M*A/(A-M),w},ortho:(d,b,A,M,u,w)=>new Float32Array([2/(b-d),0,0,0,0,2/(M-A),0,0,0,0,-2/(w-u),0,-(b+d)/(b-d),-(M+A)/(M-A),-(w+u)/(w-u),1]),lookAt:(d,b,A=[0,1,0])=>{let M=t.norm(t.sub(d,b)),u=t.norm(t.cross(A,M)),w=t.cross(M,u);return new Float32Array([u[0],w[0],M[0],0,u[1],w[1],M[1],0,u[2],w[2],M[2],0,-t.dot(u,d),-t.dot(w,d),-t.dot(M,d),1])},compose:(d=0,b=0,A=0,M=0,u=1,w=u,N=u)=>{let x=Math.cos(M),D=Math.sin(M);return new Float32Array([x*u,0,-D*u,0,0,w,0,0,D*N,0,x*N,0,d,b,A,1])},transform:(d,b,A=1)=>[d[0]*b[0]+d[4]*b[1]+d[8]*b[2]+d[12]*A,d[1]*b[0]+d[5]*b[1]+d[9]*b[2]+d[13]*A,d[2]*b[0]+d[6]*b[1]+d[10]*b[2]+d[14]*A],inverse:d=>{let b=new Float32Array(16),A=Array.from(d),M=Array.from({length:4},(u,w)=>[A[w],A[w+4],A[w+8],A[w+12],...Array.from({length:4},(N,x)=>w===x?1:0)]);for(let u=0;u<4;u++){let w=u;for(let x=u+1;x<4;x++)Math.abs(M[x][u])>Math.abs(M[w][u])&&(w=x);[M[u],M[w]]=[M[w],M[u]];let N=M[u][u];if(Math.abs(N)<1e-12)return n.identity();for(let x=0;x<8;x++)M[u][x]/=N;for(let x=0;x<4;x++)if(x!==u){let D=M[x][u];for(let V=0;V<8;V++)M[x][V]-=D*M[u][V]}}for(let u=0;u<4;u++)for(let w=0;w<4;w++)b[w*4+u]=M[u][w+4];return b}};function s(d){return Array.isArray(d)?d:typeof d=="number"?[(d>>16&255)/255,(d>>8&255)/255,(d&255)/255]:(d=d.replace("#",""),d.length===3&&(d=d.split("").map(b=>b+b).join("")),s(parseInt(d,16)))}function r(d=91371){let b=d>>>0;return()=>{b+=1831565813;let A=b;return A=Math.imul(A^A>>>15,A|1),A^=A+Math.imul(A^A>>>7,A|61),((A^A>>>14)>>>0)/4294967296}}let l=(d="#ffffff",b=0,A=.7,M=0,u=0,w=1)=>({color:s(d),p:[b,A,M,u],ao:w});class a{constructor(){this.data=new Float32Array(262144),this.used=0,this.count=0,this.transform=n.identity(),this.animation=[0,0,0,0]}reserve(b){if(this.used+b>this.data.length){let A=new Float32Array(Math.max(this.data.length*2,this.used+b));A.set(this.data),this.data=A}}vertex(b,A,M,u){this.reserve(20),b=n.transform(this.transform,b),A=t.norm(n.transform(this.transform,A,0));let w=this.data,N=this.used,x=u.color;for(let D=0;D<3;D++)w[N+D]=b[D];for(let D=0;D<3;D++)w[N+3+D]=A[D];w[N+6]=M[0],w[N+7]=M[1],w[N+8]=x[0],w[N+9]=x[1],w[N+10]=x[2],w[N+11]=u.ao??1;for(let D=0;D<4;D++)w[N+12+D]=u.p[D];for(let D=0;D<4;D++)w[N+16+D]=this.animation[D];this.used+=20,this.count++}tri(b,A,M,u,w=[[0,0],[0,1],[1,1]],N=null){let x=t.norm(t.cross(t.sub(A,b),t.sub(M,b)));this.vertex(b,N?N[0]:x,w[0],u),this.vertex(A,N?N[1]:x,w[1],u),this.vertex(M,N?N[2]:x,w[2],u)}quad(b,A,M,u,w,N=1,x=1){this.tri(b,A,M,w,[[0,0],[0,x],[N,x]]),this.tri(b,M,u,w,[[0,0],[N,x],[N,0]])}box(b,A,M,u,w,N,x){let D=b-u/2,V=b+u/2,$=A-w/2,Z=A+w/2,se=M-N/2,X=M+N/2;this.quad([D,Z,X],[D,$,X],[V,$,X],[V,Z,X],x,x.fit?1:u,x.fit?1:w),this.quad([V,Z,se],[V,$,se],[D,$,se],[D,Z,se],x,x.fit?1:u,x.fit?1:w),this.quad([V,Z,X],[V,$,X],[V,$,se],[V,Z,se],x,x.fit?1:N,x.fit?1:w),this.quad([D,Z,se],[D,$,se],[D,$,X],[D,Z,X],x,x.fit?1:N,x.fit?1:w),this.quad([D,Z,se],[D,Z,X],[V,Z,X],[V,Z,se],x,x.fit?1:u,x.fit?1:N),this.quad([D,$,X],[D,$,se],[V,$,se],[V,$,X],x,x.fit?1:u,x.fit?1:N)}plane(b,A,M,u,w,N,x=u,D=w){this.quad([b-u/2,A,M-w/2],[b-u/2,A,M+w/2],[b+u/2,A,M+w/2],[b+u/2,A,M-w/2],N,x,D)}sphere(b,A,M,u,w,N,x,D=16,V=10,$=0,Z=Math.PI){let se=(X,ne)=>{let de=X/D*i,ue=$+ne/V*(Z-$),ve=[Math.sin(ue)*Math.cos(de),Math.cos(ue),Math.sin(ue)*Math.sin(de)];return{p:[b+ve[0]*u,A+ve[1]*w,M+ve[2]*N],n:t.norm([ve[0]/u,ve[1]/w,ve[2]/N]),uv:[X/D,ne/V]}};for(let X=0;X<V;X++)for(let ne=0;ne<D;ne++){let de=se(ne,X),ue=se(ne,X+1),ve=se(ne+1,X+1),fe=se(ne+1,X);for(let ee of[[de,ue,ve],[de,ve,fe]]){let C=t.cross(t.sub(ee[1].p,ee[0].p),t.sub(ee[2].p,ee[0].p));t.dot(C,ee[0].n)<0&&([ee[1],ee[2]]=[ee[2],ee[1]]),this.tri(...ee.map(Ve=>Ve.p),x,ee.map(Ve=>Ve.uv),ee.map(Ve=>Ve.n))}}}cylinder(b,A,M,u,w,N=12,x=!0){let D=t.norm(t.sub(A,b)),V=t.norm(t.cross(D,Math.abs(D[1])>.95?[1,0,0]:[0,1,0])),$=t.cross(D,V),Z=t.len(t.sub(A,b)),se=(ne,de,ue)=>t.add(ne,t.add(t.mul(V,Math.cos(ue)*de),t.mul($,Math.sin(ue)*de))),X=ne=>t.norm(t.add(t.add(t.mul(V,Math.cos(ne)),t.mul($,Math.sin(ne))),t.mul(D,(M-u)/Z)));for(let ne=0;ne<N;ne++){let de=ne/N*i,ue=(ne+1)/N*i,ve=se(b,M,de),fe=se(A,u,de),ee=se(A,u,ue),C=se(b,M,ue),Ve=X(de),We=X(ue);this.tri(ve,ee,fe,w,[[ne/N,0],[(ne+1)/N,Z],[ne/N,Z]],[Ve,We,Ve]),this.tri(ve,C,ee,w,[[ne/N,0],[(ne+1)/N,0],[(ne+1)/N,Z]],[Ve,We,We]),x&&(this.tri(b,C,ve,w),this.tri(A,fe,ee,w))}}disk(b,A,M,u,w,N=32){for(let x=0;x<N;x++){let D=x/N*i,V=(x+1)/N*i;this.tri([b,A,M],[b+Math.cos(V)*u,A,M+Math.sin(V)*u],[b+Math.cos(D)*u,A,M+Math.sin(D)*u],w,[[.5,.5],[.5+Math.cos(V)*.5,.5+Math.sin(V)*.5],[.5+Math.cos(D)*.5,.5+Math.sin(D)*.5]])}}tube(b,A,M,u=8){for(let w=1;w<b.length;w++)this.cylinder(b[w-1],b[w],A,A,M,u)}sign(b,A,M,u,w,N,x=!1){let D=l("#ffffff",N,.8,0,.15);this.quad([b-u/2,A+w/2,M],[b-u/2,A-w/2,M],[b+u/2,A-w/2,M],[b+u/2,A+w/2,M],D),x&&this.box(b,A,M-.022,u+.05,w+.05,.04,l("#574333",3))}scope(b,A){let M=this.transform;this.transform=n.multiply(M,b),A(),this.transform=M}animate(b,A,M){let u=this.animation;this.animation=[...b,A],M(),this.animation=u}}class c{constructor(b=512){this.size=b,this.layers=[],this.names={}}add(b,A){let M=document.createElement("canvas");M.width=M.height=this.size;let u=M.getContext("2d",{willReadFrequently:!0});A&&A(u,this.size);let w=this.layers.length;return this.layers.push(M),this.names[b]=w,w}sign(b,A,M="",u="#304c55",w=""){return this.add(b,(N,x)=>{N.fillStyle="#f9f7f0",N.fillRect(0,0,x,x),N.fillStyle=u,N.fillRect(0,0,x,62),N.fillStyle="#ffffff",N.font='700 24px "Noto Sans CJK JP", "Yu Gothic", sans-serif',N.fillText(w||b,22,41),N.fillStyle="#273b3c";let D=h(N,A,x-52,37),V=D.length>3?30:37;D=h(N,A,x-52,V),N.font=`700 ${V}px "Noto Sans CJK JP", "Yu Gothic", sans-serif`;let $=154-Math.min(D.length,4)*4;D.slice(0,4).forEach((X,ne)=>N.fillText(X,26,$+ne*(V+10))),N.fillStyle="#53605b",N.font='500 25px "Noto Sans CJK JP", "Yu Gothic", sans-serif';let Z=h(N,M,x-52,25),se=Math.max(300,$+D.length*(V+10)+25);Z.slice(0,4).forEach((X,ne)=>N.fillText(X,26,se+ne*34)),N.fillStyle=u,N.fillRect(26,x-53,x-52,3),N.fillStyle="#6b7770",N.font='19px "Noto Sans CJK JP", "Yu Gothic", sans-serif',N.fillText("つながりフェスタ 2026",26,x-23)})}banner(b,A,M="",u="#174f54"){return this.add(b,(w,N)=>{w.scale(1,N/112),w.fillStyle="#f9f7f0",w.fillRect(0,0,N,112),w.fillStyle=u,w.fillRect(0,0,76,112),w.fillStyle="#fff",w.font='700 23px "Noto Sans CJK JP", "Yu Gothic", sans-serif',w.textAlign="center",w.fillText(b,38,64);let x=29;for(;x>17&&(w.font=`700 ${x}px "Noto Sans CJK JP", "Yu Gothic", sans-serif`,!(w.measureText(A).width<N-104));)x--;w.textAlign="left",w.fillStyle="#263d3c",w.fillText(A,92,52),w.font='500 17px "Noto Sans CJK JP", "Yu Gothic", sans-serif',w.fillStyle="#5b675d";let D=M;for(;w.measureText(D).width>N-109&&D.length;)D=D.slice(0,-1);w.fillText(D,92,84),w.fillStyle=u,w.fillRect(76,106,N-76,6)})}upload(b,A=this.size){let M=new Uint8Array(A*A*4*this.layers.length),u=document.createElement("canvas");u.width=u.height=A;let w=u.getContext("2d");this.layers.forEach((N,x)=>{w.clearRect(0,0,A,A),w.drawImage(N,0,0,A,A),M.set(w.getImageData(0,0,A,A).data,x*A*A*4)}),this.texture=new ts(M,A,A,this.layers.length),this.texture.colorSpace=un,this.texture.wrapS=this.texture.wrapT=Cs,this.texture.minFilter=ui,this.texture.magFilter=nn,this.texture.generateMipmaps=!0,this.texture.anisotropy=4,this.texture.needsUpdate=!0}}function h(d,b,A,M){d.font=`700 ${M}px "Noto Sans CJK JP", "Yu Gothic", sans-serif`;let u=[],w="";for(let N of b){if(N===`
`){u.push(w),w="";continue}d.measureText(w+N).width>A&&w?(u.push(w),w=N):w+=N}return w&&u.push(w),u}let g=`#version 300 es
 precision highp float;out vec2 vUV;void main(){vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));vUV=p;gl_Position=vec4(p*2.-1.,0.,1.);}`,_=`#version 300 es
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
 `,y=`
 vec3 transformed = festaAnimation.xyz+festaRotation()*(position-festaAnimation.xyz);
 if(festaAnimation.w>8.) transformed.z+=sin(festaTime*1.9+transformed.x*4.+transformed.y*1.3)*.08*max(0.,transformed.x-festaAnimation.x);
 if(festaInfo.z>0.) transformed.xz+=festaInfo.z*.045*sin(festaTime*.7+transformed.xz*.23)*clamp(transformed.y*.15,0.,1.);
 festaUV=uv; festaMat=festaSurface; festaShade=festaAO; festaWorld=(instanceMatrix*vec4(transformed,1.)).xyz;
 `;function S(d,b,A=!1){return d.onBeforeCompile=M=>{M.uniforms.festaTime=b.timeUniform,M.uniforms.festaAtlas=b.atlasUniform,M.vertexShader=f+M.vertexShader,M.vertexShader=M.vertexShader.replace("#include <begin_vertex>",y).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
objectNormal=festaRotation()*objectNormal;`),M.fragmentShader=`precision highp sampler2DArray;
uniform sampler2DArray festaAtlas;
varying vec2 festaUV;
varying vec4 festaMat;
varying float festaShade;
varying vec3 festaWorld;
float festaNoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(fract(sin(dot(i,vec2(127.1,311.7)))*43758.5453),fract(sin(dot(i+vec2(1.,0.),vec2(127.1,311.7)))*43758.5453),f.x),mix(fract(sin(dot(i+vec2(0.,1.),vec2(127.1,311.7)))*43758.5453),fract(sin(dot(i+1.,vec2(127.1,311.7)))*43758.5453),f.x),f.y); }
`+M.fragmentShader,M.fragmentShader=M.fragmentShader.replace("#include <map_fragment>",`vec4 festaTexel=texture(festaAtlas,vec3(festaUV,festaMat.x));
if(festaTexel.a<.4) discard;
diffuseColor*=festaTexel;
if(festaMat.x>.5 && festaMat.x<1.5){float variation=festaNoise(festaWorld.xz*.28)*.65+festaNoise(festaWorld.xz*2.1)*.35;diffuseColor.rgb*=mix(.72,1.14,variation);}
if(festaMat.x>3.5 && festaMat.x<4.5)diffuseColor.rgb*=mix(.84,1.09,festaNoise(festaWorld.xz*.6));`),M.fragmentShader=M.fragmentShader.replace("diffuseColor*=festaTexel;",`diffuseColor*=festaTexel;
if(festaMat.x>2.5 && festaMat.x<3.5){
 float weather=festaNoise(festaWorld.xz*.31+vec2(0.,festaWorld.y*.18));
 float baseDamp=(1.-smoothstep(.15,1.6,festaWorld.y))*festaNoise(festaWorld.xz*1.8);
 diffuseColor.rgb*=mix(.93,1.02,weather)*(1.-baseDamp*.13);
}`),A||(M.fragmentShader=M.fragmentShader.replace("#include <roughnessmap_fragment>","float roughnessFactor=clamp(festaMat.y,.06,1.);").replace("#include <metalnessmap_fragment>","float metalnessFactor=clamp(festaMat.z,0.,1.);").replace("#include <emissivemap_fragment>","totalEmissiveRadiance=diffuseColor.rgb*festaMat.w;").replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
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
reflectedLight.indirectDiffuse*=festaShade;`))},d.customProgramCacheKey=()=>A?"festa-depth-2":"festa-standard-2",d}class P{constructor(b,A,{name:M="",shadow:u=!0,instances:w=null,dynamic:N=!1}={}){this.name=M,this.renderer=b,this.count=A.count,this.shadow=u,this.dynamic=N,this.instances=w||[{matrix:n.identity(),info:[0,0,0,0]}];let x=A.data.slice(0,A.used),D=new _t;for(let Z=0;Z<x.length;Z+=20)D.setRGB(x[Z+8],x[Z+9],x[Z+10],un),x[Z+8]=D.r,x[Z+9]=D.g,x[Z+10]=D.b;let V=new Fn,$=new gr(x,20);for(let[Z,se,X]of[["position",3,0],["normal",3,3],["uv",2,6],["color",3,8],["festaAO",1,11],["festaSurface",4,12],["festaAnimation",4,16]])V.setAttribute(Z,new xr($,se,X));this.info=new ns(new Float32Array(this.instances.length*4),4),this.info.setUsage(zo),V.setAttribute("festaInfo",this.info),this.object=new Mr(V,b.surfaceMaterial,this.instances.length),this.object.name=M,this.object.castShadow=u,this.object.receiveShadow=!0,this.object.frustumCulled=!1,this.object.customDepthMaterial=b.depthMaterial,this.object.instanceMatrix.setUsage(zo),this.matrix=new Rt,this.updateInstances(),b.scene.add(this.object),b.meshes.push(this),A.data=null}get visible(){return this.object.visible}set visible(b){this.object.visible=b}updateInstances(){this.instances.forEach((b,A)=>{this.object.setMatrixAt(A,this.matrix.fromArray(b.matrix)),this.info.set(b.info||[0,0,0,0],A*4)}),this.object.instanceMatrix.needsUpdate=!0,this.info.needsUpdate=!0}dispose(){this.renderer.scene.remove(this.object),this.object.geometry.dispose(),this.object.dispose(),this.renderer.meshes=this.renderer.meshes.filter(b=>b!==this)}}class T{constructor(b,A="standard"){this.canvas=b,this.engine=new Xo({canvas:b,alpha:!1,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0}),this.gl=this.engine.getContext(),this.engine.outputColorSpace=un,this.engine.toneMapping=Lr,this.engine.shadowMap.enabled=!0,this.engine.shadowMap.type=is,this.engine.shadowMap.autoUpdate=!1,this.scene=new fr,this.scene.fog=new dr("#c5d3d8",110,420),this.camera={eye:[0,1.68,20],target:[0,1.68,0],fov:66*Math.PI/180,near:.065,far:700},this.threeCamera=new mn,this.meshes=[],this.quality=A,this.time=0,this.exposure=1.12,this.sun=t.norm([-.38,.79,.48]),this.sunColor=[1,.94,.81],this.sunPower=3.7,this.timeUniform={value:0},this.atlasUniform={value:null},this.surfaceMaterial=S(new Tr({color:16777215,vertexColors:!0,roughness:1,metalness:1,side:kn,alphaTest:.4}),this),this.depthMaterial=S(new Os({depthPacking:nc,side:kn,alphaTest:.4}),this,!0),this.hemisphere=new Cr("#c7e0f5","#817562",1.8),this.scene.add(this.hemisphere),this.sunLight=new Ir(16777215,this.sunPower),this.sunLight.castShadow=!0,this.scene.add(this.sunLight,this.sunLight.target),this.stats={draws:0,triangles:0,fps:0},this.frameCount=0,this.fpsStamp=performance.now(),this.shadowAge=-1,this.shadowDirty=!0,this.targetSize=[0,0];let M=new Fn;M.setAttribute("position",new wn([-1,-1,0,3,-1,0,-1,3,0],3)),this.skyUniforms={uInvVP:{value:new Rt},uEye:{value:new ce},uSun:{value:new ce},uTime:this.timeUniform};let u=new Fs({glslVersion:Vr,vertexShader:g.replace("#version 300 es","").replace("0.,1.);","1.,1.);"),fragmentShader:_.replace("#version 300 es","").replace("frag=vec4(sky,1.);","sky=sky*1.12; sky=clamp((sky*(2.51*sky+.03))/(sky*(2.43*sky+.59)+.14),0.,1.);frag=vec4(pow(sky,vec3(1./2.2)),1.);"),uniforms:this.skyUniforms,depthWrite:!1,depthTest:!1});this.sky=new xn(M,u),this.sky.frustumCulled=!1,this.sky.renderOrder=-1e3,this.scene.add(this.sky),this.setQuality(A)}set atlas(b){this._atlas=b,this.atlasUniform.value=b.texture}get atlas(){return this._atlas}setQuality(b){this.quality=b,this.pixelRatio=b==="high"?Math.min(devicePixelRatio,1.75):b==="low"?.8:Math.min(devicePixelRatio,1.15),this.shadowSize=b==="high"?4096:b==="low"?1024:2048,this.engine.setPixelRatio(this.pixelRatio),this.createShadow(),this.resize()}createShadow(){let b=this.sunLight,A=b.shadow;b.position.set(-3+this.sun[0]*230,this.sun[1]*230,26+this.sun[2]*230),b.target.position.set(-3,0,26),b.color.setRGB(...this.sunColor),b.intensity=this.sunPower,Object.assign(A.camera,{left:-108,right:108,top:108,bottom:-108,near:1,far:500}),A.camera.updateProjectionMatrix(),A.bias=-15e-5,A.normalBias=216/this.shadowSize*1.35,A.mapSize.x!==this.shadowSize&&(A.map?.dispose(),A.map=null,A.mapSize.set(this.shadowSize,this.shadowSize)),this.shadowDirty=!0}resize(){let b=Math.max(1,this.canvas.clientWidth),A=Math.max(1,this.canvas.clientHeight);b===this.targetSize[0]&&A===this.targetSize[1]&&this.engine.getPixelRatio()===this.pixelRatio||(this.targetSize=[b,A],this.engine.setSize(b,A,!1))}render(b=0){if(!this.atlas)return;this.time=b,this.timeUniform.value=b,this.resize();let A=this.camera,M=this.threeCamera;M.position.fromArray(A.eye),M.up.set(0,1,0),M.lookAt(new ce(...A.target)),M.fov=A.fov*180/Math.PI,M.aspect=this.canvas.clientWidth/this.canvas.clientHeight,M.near=A.near,M.far=A.far,M.updateProjectionMatrix(),M.updateMatrixWorld(),this.vp=new Rt().multiplyMatrices(M.projectionMatrix,M.matrixWorldInverse).elements,this.invVp=new Rt().fromArray(this.vp).invert().elements,this.skyUniforms.uInvVP.value.fromArray(this.invVp),this.skyUniforms.uEye.value.fromArray(A.eye),this.skyUniforms.uSun.value.fromArray(this.sun),this.engine.toneMappingExposure=this.exposure,(this.shadowDirty||b-this.shadowAge>.45)&&(this.engine.shadowMap.needsUpdate=!0,this.shadowDirty=!1,this.shadowAge=b),this.engine.render(this.scene,M),this.stats.draws=this.engine.info.render.calls,this.stats.triangles=this.engine.info.render.triangles,this.frameCount++;let u=performance.now();u-this.fpsStamp>1500&&(this.stats.fps=Math.round(this.frameCount*1e3/(u-this.fpsStamp)),this.frameCount=0,this.fpsStamp=u)}project(b){if(!this.vp)return null;let A=this.vp,M=n.transform(A,b),u=A[3]*b[0]+A[7]*b[1]+A[11]*b[2]+A[15];return u<=0?null:{x:(M[0]/u*.5+.5)*this.canvas.clientWidth,y:(-M[1]/u*.5+.5)*this.canvas.clientHeight,z:M[2]/u}}groundPoint(b,A){if(!this.invVp)return null;let M=new Pr;return M.setFromCamera(new Mt(b/this.canvas.clientWidth*2-1,1-A/this.canvas.clientHeight*2),this.threeCamera),M.ray.intersectPlane(new Un(new ce(0,1,0),0),new ce)?.toArray()||null}}return{V:t,M:n,Geometry:a,Mesh:P,Renderer:T,Atlas:c,material:l,color:s,rng:r,clamp:e,TAU:i,wrap:h}})();window.FestaScenery={height(i,e){let t=(c,h,g,_,f)=>{let y=Math.hypot((i-c)/g,(e-h)/_);return y<1?f*Math.pow(Math.cos(y*Math.PI/2),2):0},n=Math.max(t(112,-4,49,100,25),t(130,82,65,84,22),t(-113,7,41,40,20),t(-39,-103,63,47,15),t(8,-107,45,48,20),t(53,-105,49,46,16));if(i<60.8||i>=103.2||e<=15.08||e>=96.08)return n;let s=c=>(c=Math.max(0,Math.min(1,c)),c*c*(3-2*c)),r=s((e-15.08)/12)*(1-s((e-80.08)/16)),l=s((i-75.2)/28),a=3.7+(Math.max(n,3.7)-3.7)*l;return n+(a-n)*r},textures(i,e){let t=i.layers[3],n=t.getContext("2d"),s=t.width,r=e(8401),l=n.createImageData(s,s);for(let a=0;a<s;a++)for(let c=0;c<s;c++){let h=Math.sin(c/s*Math.PI*4+.5)*Math.cos(a/s*Math.PI*6)*1.7,g=(r()-.5)*9+h,_=(a*s+c)*4;l.data[_]=241+g,l.data[_+1]=239+g,l.data[_+2]=229+g,l.data[_+3]=255}n.putImageData(l,0,0);for(let a of[7,8]){let c=i.layers[a].getContext("2d"),h=e(301+a);c.clearRect(0,0,s,s);for(let g=0;g<1700;g++){let _=h()*Math.PI*2,f=Math.sqrt(h()),y=.5+Math.cos(_)*f*.45,S=.5+Math.sin(_)*f*.42;if(f>.84&&h()>.52)continue;let P=(1-S)*12+h()*17,T=a===7?76+h()*30:18+h()*24;c.fillStyle=`hsl(${T},${a===7?24+h()*22:38+h()*20}%,${16+P}%)`,c.beginPath(),c.ellipse(y*s,S*s,3+h()*7,2+h()*4,h()*6.28,0,6.28),c.fill()}}return i.add("Window reflection",(a,c)=>{let h=a.createLinearGradient(0,0,0,c);h.addColorStop(0,"#9baeb3"),h.addColorStop(.46,"#667d81"),h.addColorStop(.49,"#536562"),h.addColorStop(1,"#364743"),a.fillStyle=h,a.fillRect(0,0,c,c);let g=e(721);for(let _=0;_<150;_++){let f=g()*c,y=c*(.48+g()*.5);a.fillStyle=`rgba(31,48,35,${.025+g()*.1})`,a.beginPath(),a.ellipse(f,y,5+g()*29,3+g()*16,0,0,6.28),a.fill()}a.fillStyle="rgba(218,228,226,.10)",a.fillRect(c*.23,0,c*.03,c),a.fillRect(c*.75,0,c*.018,c)})},build({details:i,green:e,distant:t,signGeo:n,childSign:s,p:r,m:l,mat:a,M:c,rng:h,TAU:g,ga:_,gb:f,gc:y,gw:S,gd:P,gymRise:T=.45}){let d=h(70031),b=(E,O)=>E+(O-E)*d(),A=a("#dcdccf",3,.88),M=a("#c7cbc3",3,.87),u=r(425.28,478),w=r(470,478),N=5.25,x=3.25,D=_[0]-1.2,V=2.4,$=w[1]+1.2,Z=f[1]+1.6,se=(E,O,te=1.05)=>{i.cylinder([E[0],E[1]+te,E[2]],[O[0],O[1]+te,O[2]],.028,.028,A,7);let q=Math.max(1,Math.ceil(Math.hypot(O[0]-E[0],O[2]-E[2])/.19));for(let le=0;le<=q;le++){let Me=le/q,Te=E[0]+(O[0]-E[0])*Me,me=E[1]+(O[1]-E[1])*Me,Pe=E[2]+(O[2]-E[2])*Me;i.cylinder([Te,me,Pe],[Te,me+te,Pe],.016,.016,A,6)}},X=(E,O,te,q,le)=>i.box((E+O)/2,le-.14,(te+q)/2,O-E,.28,q-te,A);X(u[0],_[0],w[1]-1.2,$,N),se([u[0],N,w[1]-1.2],[_[0],N,w[1]-1.2]),se([u[0],N,$],[_[0]-V,N,$]);for(let E of[u[0]+.22,_[0]-2.65])i.box(E,N/2-.14,w[1],.38,N-.28,.42,A);let ne=12,de=(Z-$)/ne,ue=(N-x)/ne;for(let E=0;E<ne;E++){let O=$+E*de,te=O+de,q=N-E*ue;i.box(D,q-ue/2-.08,(O+te)/2,V,ue+.16,de+.015,A)}for(let E of[_[0]-V,_[0]])i.quad([E,N-.28,$],[E,x-.28,Z],[E,x-.48,Z],[E,N-.48,$],A),se([E,N,$],[E,x,Z]);X(_[0]-V,f[0],f[1],Z+1.3,x),se([_[0]-V,x,Z+1.3],[y[0]+4.3,x,Z+1.3]),se([_[0]-V,x,Z],[_[0]-V,x,Z+1.3]);for(let E of[_[0]-V+.25,_[0]+2.2,y[0]+4.4,f[0]-.25])i.box(E,(x-.28)/2,Z+.99,.42,x-.28,.45,A);i.box((y[0]+4.3+f[0])/2,x+.46,Z+1.17,f[0]-y[0]-4.3,.92,.22,A);let ve=a("#778885",0,.48,.08),fe=a("#c3c5b9",0,.63,.18),ee=a("#414c4e",0,.48,.62);for(let E of[-6.8,-2.3,2.3,6.8])i.box(y[0]+E,6,f[1]+.2,1.35,2.4,.09,fe),i.box(y[0]+E,5.96,f[1]+.26,1.21,2.22,.03,ve),i.box(y[0]+E,6.75,f[1]+.29,1.22,.67,.05,A),i.box(y[0]+E,5.52,f[1]+.3,1.22,.045,.04,fe);let C=_[0]+S*77/309,Ve=_[0]+S*156/309,We=_[0]+S*202/309,rt=_[0]+S*233/309;for(let[E,O]of[[_[0]+2.75,1.5],[Ve+1.3,1],[We+1.075,.95],[rt+2.45,1.5]])i.box(E,1.93,f[1]+.24,O+.12,1.62,.065,ee),i.box(E,1.93,f[1]+.28,O-.08,1.45,.025,ve),i.box(E,1.93,f[1]+.31,.045,1.51,.045,ee),i.box(E,1.93,f[1]+.32,O+.15,.045,.045,ee);let Q=_[0]+S*.38,ut=f[1]+.27;for(let E of[-1,1]){let O=Q+E*1.65;i.box(O,1.45,ut+.055,1.04,2.35,.035,ve),i.box(O,1.06,ut+.09,1.1,.045,.06,ee),i.box(O,2.49,ut+.09,1.1,.045,.06,ee),i.box(Q+E*2.2,1.54,ut+.09,.055,2.76,.055,ee),i.box(Q+E*1.1,1.54,ut+.09,.055,2.76,.055,ee),i.box(Q+E*1.1,1.45,ut-.5,.035,2.35,1.04,ve),i.box(Q+E*1.1,1.06,ut-.5,.05,.045,1.08,ee)}i.box(Q,2.91,ut+.09,4.5,.06,.06,ee),i.box(Q,.15,f[1]+1.75,5.6,.3,3,A);for(let E=0;E<3;E++)i.box(Q,.025+E*.05,f[1]+4.06-E*.38,5.6,.05+E*.1,.4,A);let xe=a("#83b4c2",0,.54,.12);for(let[E,O]of[[335,344],[421,433],[468,484]]){let te=r(470,E)[1],q=r(470,O)[1],le=(te+q)/2,Me=q-te;for(let Te=0;Te<3;Te++){let me=(Te+1)*T/3;i.box(_[0]-1.38+Te*.46,me/2,le,.48,me,Me+.24,A)}i.box(_[0]-.11,T-.04,le,.54,.08,Me+.24,A);for(let Te of[te+.12,q-.12])i.box(_[0]-.76,T+1.12,Te,1.32,2.24,.075,xe),i.box(_[0]-.76,T+2.25,Te,1.36,.045,.09,fe)}let ye=[[303,334],[345,420],[434,467],[485,503]];for(let E of[-1,1])for(let[O,te]of ye){let q=r(470,O)[1]+.15,le=r(470,te)[1]-.15,Me=Math.max(1,Math.ceil((le-q)/5.4));for(let Te=0;Te<Me;Te++){let me=q+(le-q)*Te/Me+.18,Pe=q+(le-q)*(Te+1)/Me-.18,ke=y[0]+E*(S/2+.26),nt=.56,mt=4.04;for(let At of[!1,!0]){let ht=At?mt:nt,jt=At?nt:mt,Xt=jt-ht,Xn=Pe-me,zn=Math.hypot(Xt,Xn),hn=-Xn/zn*.065,Cn=Xt/zn*.065;i.quad([ke,ht+hn,me+Cn],[ke,ht-hn,me-Cn],[ke,jt-hn,Pe-Cn],[ke,jt+hn,Pe+Cn],A,zn,.13);for(let[yn,pi]of[[ht,me],[jt,Pe]]){i.box(ke,yn,pi,.045,.25,.25,A);for(let ls of[-.065,.065])i.cylinder([ke+E*.022,yn,pi+ls],[ke+E*.04,yn,pi+ls],.017,.017,a("#abae9e",0,.65,.1),6)}}}}for(let E of[-1,1])for(let[O,te]of ye){let q=y[0]+E*(S/2+.185),le=r(470,O)[1],Me=r(470,te)[1];for(let Te=le+.8;Te<Me;Te+=2.65)i.box(q,2.12,Te,.012,3.78,.014,a("#b9baae",0,.96))}for(let E of[-1,1]){let O=y[0]+E*(S/2+.31);i.cylinder([O,8.66,_[1]],[O,8.66,f[1]],.075,.075,A,10);for(let te of[_[1]+.32,_[1]+16.5,f[1]-.35])i.cylinder([O,.25,te],[O,8.66,te],.045,.045,A,8);for(let[te,q]of ye){let le=r(470,te)[1],Me=r(470,q)[1];i.box(O-E*.14,.19,(le+Me)/2,.08,.38,Me-le,a("#94958b",3,.96))}}let He=(E,O,te)=>E+te>_[0]&&E-te<f[0]&&O+te>_[1]&&O-te<f[1];function at(E,O,te,q,le=1,Me=82,Te=!1){if(E>55&&E<80&&O>26&&O<82)return;let me=window.FestaScenery.height(E,O);if(E<-52&&E>-88&&O<-12&&O>-70&&(te=Math.min(te,6.2)),E>-74&&E<-58&&O>-11&&O<10)return;let Pe=h(q);for(let ke=0;ke<Me;ke++){let nt=Pe()*g,mt=Math.sqrt(Pe())*te*.46*le,At=te*(.13+Pe()*.77)-mt*.09,ht=E+Math.cos(nt)*mt,jt=O+Math.sin(nt)*mt,Xt=te*(.21+Pe()*.14),Xn=Pe()*g;if(He(ht,jt,Xt*.71))continue;let zn=Te?a(ke%4?"#a0704d":"#855841",8,.98,0,0,.92):a(ke%7===0?"#879c75":ke%3?"#526b48":"#344f39",7,.98,0,0,.92);e.scope(c.compose(ht,me+At,jt,Xn),()=>{e.quad([-Xt/2,-Xt/2,0],[-Xt/2,Xt/2,0],[Xt/2,Xt/2,0],[Xt/2,-Xt/2,0],zn),e.quad([-Xt/2,0,-Xt/2],[-Xt/2,0,Xt/2],[Xt/2,0,Xt/2],[Xt/2,0,-Xt/2],zn)})}for(let ke=0;ke<12;ke++){let nt=ke*g/12,mt=E+Math.cos(nt)*te*.25*le,At=O+Math.sin(nt)*te*.25*le,ht=te*(.25+Pe()*.08),jt=Te?a("#75523b",8,.98):a(ke%3?"#3c5a40":"#60734b",7,.98);He(mt,At,ht*.71)||e.scope(c.compose(mt,me+te*.21,At,nt),()=>e.quad([-ht/2,-ht/2,0],[-ht/2,ht/2,0],[ht/2,ht/2,0],[ht/2,-ht/2,0],jt))}}let Ne=f[1]+3.2,qe=a("#94705a",3,.98),Bt=a("#4c4835",1,1),it=h(2701);for(let[E,O,te]of[[_[0]+3,4.6,2.9],[f[0]-4.7,8.4,3.6]]){i.box(E,.24,Ne,O,.48,2.1,qe),i.plane(E,.486,Ne,O-.35,1.7,Bt);for(let q=E-O/2+.2;q<E+O/2;q+=.42)for(let le of[.12,.35])i.box(q+(le>.2?.2:0),le,Ne+1.055,.012,.2,.015,a("#c3ac8a"));for(let q=0;q<Math.round(O*36);q++){let le=E+(it()-.5)*(O-.6),Me=.5+it()*te,Te=Ne+(it()-.5)*1.4,me=.52+it()*.4,Pe=a(q%5?"#6b835a":"#879669",7,1);e.scope(c.compose(le,Me,Te,it()*g),()=>{e.quad([-me/2,-me/2,0],[-me/2,me/2,0],[me/2,me/2,0],[me/2,-me/2,0],Pe),e.quad([-me/2,0,-me/2],[-me/2,0,me/2],[me/2,0,me/2],[me/2,0,-me/2],Pe)})}for(let q=E-O/2+.3;q<E+O/2;q+=.61){let le=Ne+1.4;i.box(q,.13,le,.43,.26,.33,a("#a88767",3,.94));for(let Me=0;Me<3;Me++)i.sphere(q+(Me-1)*.11,.3,le,.095,.11,.11,a(Me%2?"#989b62":"#557549"),8,5)}}let Qe=Number((f[0]+3.6).toFixed(2)),ct=Number((f[1]-20).toFixed(2)),st=Number((f[1]+33).toFixed(2)),dt=3.6,It=a("#92968a",3,.99),Gt=a("#b0b3a6",3,.94);i.quad([Qe-.35,0,ct],[Qe-.35,0,st],[Qe,dt,st],[Qe,dt,ct],It,18,3),i.box(Qe+.08,dt+.08,(ct+st)/2,.64,.16,st-ct,Gt);for(let E=ct+.3;E<st;E+=2.2)i.cylinder([Qe+.1,dt+.12,E],[Qe+.1,dt+1.16,E],.022,.022,fe,6),i.box(Qe-.28,.65,E,.025,.1,.1,a("#454d43"));for(let E of[dt+.3,dt+1.12])i.cylinder([Qe+.1,E,ct],[Qe+.1,E,st],.022,.022,fe,6);for(let E=ct;E<st;E+=5.4)i.cylinder([Qe-.34,.05,E],[Qe-.01,dt-.02,E],.012,.012,a("#777e72"),5);{let E=Qe+6.3,O=f[1]+1.4,te=8.8,q=11,le=6.6;t.box(E,dt+le/2,O,te,le,q,a("#d8d2be",3,.96));let Me=a("#6f6860",10,.9),Te=dt+le;for(let me of[-1,1])t.quad([E,Te+1.7,O-q/2-.4],[E,Te+1.7,O+q/2+.4],[E+me*(te/2+.4),Te,O+q/2+.4],[E+me*(te/2+.4),Te,O-q/2-.4],Me,3,4);for(let me of[O-q/2,O+q/2])t.tri([E-te/2,Te,me],[E,Te+1.7,me],[E+te/2,Te,me],A);for(let me of[dt+1.65,dt+4.8])for(let Pe of[-3.6,0,3.6])i.box(E-te/2-.025,me,O+Pe,.05,1.28,1.4,a("#5d625a")),i.box(E-te/2-.06,me,O+Pe,.035,1.1,1.22,ve),i.box(E-te/2-.087,me,O+Pe,.04,1.12,.035,fe)}let xt=window.FestaScenery.height,Pt=[...new Set([...Array.from({length:89},(E,O)=>-156+O*4),60.8,75.2,103.2])].sort((E,O)=>E-O),Y=[...new Set([...Array.from({length:72},(E,O)=>-112+O*4),15.08,ct,st,96.08])].sort((E,O)=>E-O);for(let E=0;E<Pt.length-1;E++)for(let O=0;O<Y.length-1;O++){let te=Pt[E],q=Y[O],le=Pt[E+1],Me=Y[O+1];if(te<Qe&&le===Qe&&q>=ct&&Me<=st)continue;let Te=[[te,q],[te,Me],[le,Me],[le,q]].map(([ke,nt])=>[ke,xt(ke,nt)-.1,nt]);if(Te.every(ke=>ke[1]<0))continue;let me=a("#ffffff",2,.98),Pe=([ke,nt,mt])=>{let At=ke===Qe&&mt>=ct&&mt<=st?2*(xt(ke,mt)-xt(ke+.1,mt)):xt(ke-.1,mt)-xt(ke+.1,mt),ht=xt(ke,mt-.1)-xt(ke,mt+.1),jt=Math.hypot(At,.2,ht);return[At/jt,.2/jt,ht/jt]};for(let ke of[[0,1,2],[0,2,3]])t.tri(...ke.map(nt=>Te[nt]),me,ke.map(nt=>[(Te[nt][0]+550)*460/1100,(Te[nt][2]+550)*460/1100]),ke.map(nt=>Pe(Te[nt])))}for(let E=-149;E<188;E+=6)for(let O=-99;O<162;O+=6){if(xt(E,O)<2.3)continue;let te=h(Math.round((E+200)*800+O+200));at(E+(te()-.5)*2,O+(te()-.5)*2,4.8+te()*2.1,Math.round((E+200)*801+O+201),1.5,30)}let Ct=a("#7a895a",7,.98),vt=a("#9ca469",7,.98),F=a("#625c46",1,1);function m(E,O,te,q,le,Me){let Te=h(Me);for(let me=0;me<Math.ceil(te*le*24);me++){let Pe=Te()*g,ke=Math.sqrt(Te()),nt=E+Math.cos(Pe)*te*.48*ke,mt=O+Math.sin(Pe)*le*.48*ke,At=.12+q*(.2+.8*Math.sqrt(1-ke*ke))*(.72+Te()*.28),ht=.24+Te()*.22;e.scope(c.compose(nt,At,mt,Te()*g),()=>{e.quad([-ht/2,-ht/2,0],[-ht/2,ht/2,0],[ht/2,ht/2,0],[ht/2,-ht/2,0],me%5?Ct:vt),e.quad([-ht/2,0,-ht/2],[-ht/2,0,ht/2],[ht/2,0,ht/2],[ht/2,0,-ht/2],Ct)})}}for(let[E,O,te,q,le]of[[135,429,5.4,.8,1.15],[158,429,3.6,.65,1.1],[177,429,2.3,.46,1],[279,430,4.1,.58,.85]]){let Me=r(E,O);i.plane(Me[0],.035,Me[1],te,le,F);for(let Te of[-1,1])i.box(Me[0],.09,Me[1]+Te*le/2,te,.18,.1,a("#a3a295",3,.97));for(let Te of[-1,1])i.box(Me[0]+Te*te/2,.09,Me[1],.1,.18,le,a("#a3a295",3,.97));m(Me[0],Me[1],te-.15,q,le-.12,E*101)}for(let[E,O]of[[257,11],[287,7]])for(let te=0;te<O;te++){let q=r(E+te*2.2,434),le=.39,Me=.26,Te=a(te%3?"#d1c6ac":"#987554",3,.95);i.box(q[0],Me/2,q[1],le,Me,.28,Te),i.plane(q[0],Me+.008,q[1],le-.045,.23,F);for(let me of[-1,1])i.box(q[0],Me-.01,q[1]+me*.14,le+.035,.055,.035,Te);for(let me=0;me<3;me++){let Pe=q[0]+(me-1)*.1;i.cylinder([Pe,Me,q[1]],[Pe,Me+.16+te%3*.025,q[1]],.007,.004,a("#657352"),5),e.scope(c.compose(Pe,Me+.14,q[1],te+me),()=>{e.quad([-.09,-.03,0],[-.06,.11,0],[.06,.11,0],[.09,-.03,0],Ct),e.quad([0,-.03,-.09],[0,.11,-.06],[0,.11,.06],[0,-.03,.09],vt)})}}for(let[E,O,te,q]of[[54,375,3.1,1.8],[69,375,2.8,1.8]]){let le=r(E,O),Me=2.05,Te=a("#b7b9af",3,.95),me=a("#8f978e",0,.8,.15);i.box(le[0],Me/2,le[1],te,Me,q,Te),i.box(le[0],Me+.055,le[1],te+.18,.11,q+.16,me);for(let Pe of[-1,1])i.box(le[0]+Pe*te*.23,Me*.48,le[1]-q/2-.025,te*.43,Me*.9,.035,a("#9da79e",3,.92)),i.box(le[0]+Pe*.075,1.04,le[1]-q/2-.06,.025,.19,.045,me)}m(r(60,367)[0],r(60,367)[1],3.2,1.15,1.3,92160);let H=-66,k=-1,oe=11.2,we=15.6,be=6.3,he=a("#d8d8c9",3,.96);t.box(H,be/2,k,oe,be,we,he);let ge=H+oe/2;t.quad([H-oe/2-.35,be+.25,k-we/2-.35],[H-oe/2-.35,be+.25,k+we/2+.35],[ge+.35,be+.05,k+we/2+.35],[ge+.35,be+.05,k-we/2-.35],a("#747d7a",10,.85),4,4),t.box(ge+.2,be,k,.12,.19,we+.7,he);for(let E of[-5.7,-2.7,0,3,5.7]){let O=E===0?.65:1.45;i.box(ge+.03,4.63,k+E,.055,1.38,O,fe),i.box(ge+.064,4.63,k+E,.02,1.24,O-.13,ve),i.box(ge+.086,4.63,k+E,.03,1.26,.035,fe)}for(let E of[-4.5,4.5])i.box(ge+.08,1.28,k+E,.12,2.5,1.37,a("#adb5ac",3,.85)),i.box(ge+.15,1.78,k+E,.035,.77,.92,ve),i.box(ge+.53,2.65,k+E,1.1,.12,2.05,a("#8e9994",10,.9)),i.box(ge+.85,.1,k+E,1.5,.2,2.1,A),i.sphere(ge+.14,2.77,k+E-1.3,.055,.11,.11,a("#eeeadd"),10,6);i.quad([ge,.03,k-7.5],[ge+.95,.03,k-7.5],[ge+.95,.2,k+6],[ge,.2,k+6],A,1,6),se([ge+1.02,.03,k-7.5],[ge+1.02,.2,k+6],.83),n&&s!==void 0&&n.scope(c.compose(ge+.18,0,k,Math.PI/2),()=>n.sign(0,2.65,0,5.1,.95,s));let Ee=-83,Ue=-22,Re=xt(Ee,Ue),Ie=29,Ze=a("#a7aca5",0,.68,.25);for(let E=0;E<8;E++){let O=Re+E*Ie/8,te=Re+(E+1)*Ie/8,q=2.65-E*.235,le=q-.235;for(let Me of[-1,1])for(let Te of[-1,1])t.cylinder([Ee+Me*q,O,Ue+Te*q],[Ee+Me*le,te,Ue+Te*le],.07,.05,Ze,6),t.cylinder([Ee+Me*q,O,Ue+Te*q],[Ee-Me*le,te,Ue+Te*le],.026,.026,Ze,5),t.cylinder([Ee+Me*q,O,Ue+Te*q],[Ee+Me*le,te,Ue-Te*le],.026,.026,Ze,5)}for(let E of[Re+20.5,Re+24.8,Re+29]){t.cylinder([Ee-5,E,Ue],[Ee+5,E,Ue],.075,.075,Ze,6);for(let O of[-4.7,4.7]){t.cylinder([Ee+O,E,Ue],[Ee+O,E-.9,Ue],.1,.1,a("#a6ada0"),8);let te=r(322,56),q=[];for(let le=0;le<=28;le++){let Me=le/28;q.push([Ee+O+(te[0]-Ee)*Me,E-.9+(26-(Re+29))*Me-3.1*Math.sin(Me*Math.PI),Ue+(te[1]-Ue)*Me])}t.tube(q,.028,a("#626963"),5)}}let Ke=[[103,69],[131,47],[202,40],[331,44],[479,94],[574,146],[583,632],[592,679],[470,739],[101,780],[71,735],[21,525],[30,339],[57,250],[63,145]],tt=0;for(let E=0;E<Ke.length-1;E++){if(E===7||E===8||E===9)continue;let O=r(...Ke[E]),te=r(...Ke[E+1]),q=te[0]-O[0],le=te[1]-O[1],Me=Math.hypot(q,le),Te=le/Me,me=-q/Me;for(let Pe=2;Pe<Me;Pe+=5.7){let ke=Pe/Me,nt=O[0]+q*ke,mt=O[1]+le*ke;at(nt+Te*7.6,mt+me*7.6,b(7,11.3),1e4+tt++),(E<5||E>10)&&at(nt+Te*14.6+q/Me*2.4,mt+me*14.6+le/Me*2.4,b(8.2,13),1e4+tt++,1.13),(E<6||E>10)&&at(nt+Te*2,mt+me*2,b(2.2,3.2),1e4+tt++,1.8)}}t.scope(c.compose(-106,5,-41,Math.PI/2),()=>{let E=a("#c6c8bf",3,.92),O=a("#b4c2be",0,.76,.05),te=a("#46545a",0,.88),q=a("#53696d",0,.37,.08),le=69,Me=12,Te=5,me=2.85;t.box(0,-2.5,0,le+1,5,Me+2,a("#8a8c7b",3,.98)),t.box(0,Te*me/2,0,le,Te*me,Me,E);for(let Pe=0;Pe<Te;Pe++){let ke=Pe*me;t.box(0,ke+1.4,Me/2+.07,le-.6,2.42,.12,te),t.box(0,ke+.1,Me/2+1.02,le+.7,.2,2.15,E),t.box(0,ke+.79,Me/2+1.98,le,.98,.1,O),t.box(0,ke+1.33,Me/2+1.99,le,.06,.13,a("#d3d9d5",0,.45,.28));for(let nt=-le/2+1.6;nt<le/2;nt+=3.45)t.box(nt,ke+1.4,Me/2+.16,2.1,2.25,.03,q),t.box(nt+.99,ke+1.4,Me/2+.18,.035,2.25,.03,l.metal),t.box(nt+1.52,ke+1.4,Me/2+1.06,.1,2.58,1.85,E)}for(let Pe of[-le/2,-le*.18,le*.18,le/2])t.box(Pe,Te*me/2,Me/2+1.08,.33,Te*me,2.3,E);t.box(0,Te*me+.13,0,le+1.2,.26,Me+4.2,E)});for(let E=0;E<13;E++){let O=-74+E*5.6,te=-84+E%3*2.7;at(te,O,7.5+E%4*.9,32140+E,1.1,58,E===2||E===5||E===9)}let J=a("#338db0",0,.63,.08),Ae=a("#ac4c39",0,.68),_e=a("#dbb548",0,.6),De=r(411,88);i.scope(c.compose(De[0],0,De[1],.18),()=>{for(let E of[-.55,.55])for(let O of[-.55,.55])i.cylinder([E,.02,O],[E,3.15,O],.045,.045,J,8);i.box(0,1.94,0,1.22,.09,1.2,a("#899892",0,.7));for(let E of[-.61,.61])i.cylinder([E,2,-.55],[E,3.03,-.55],.035,.035,Ae,8),i.cylinder([E,3.03,-.55],[E,3.03,.55],.035,.035,Ae,8),i.quad([E*.72,1.96,.55],[E*.72,.16,3.45],[E*.72,.34,3.47],[E*.72,2.16,.55],_e,3,1);i.quad([-.44,1.97,.55],[.44,1.97,.55],[.44,.16,3.45],[-.44,.16,3.45],_e,1,3);for(let E=.28;E<1.97;E+=.27)i.cylinder([-.47,E,-.69],[.47,E,-.69],.026,.026,l.metal,7)});let L=r(483,126);for(let E=0;E<5;E++){let O=L[0]+E*1.5,te=1+E*.27;for(let q of[-.65,.65])i.cylinder([O+q,0,L[1]],[O+q,te,L[1]],.032,.032,J,8);i.cylinder([O-.65,te,L[1]],[O+.65,te,L[1]],.028,.028,l.metal,8)}let B=r(365,75);i.cylinder([B[0],0,B[1]],[B[0],3.5,B[1]],.075,.075,a("#aab4ad",0,.65,.2),10),i.box(B[0],3.45,B[1]+.18,1.8,1.05,.07,a("#e7e7da",3,.9)),i.box(B[0],3.32,B[1]+.23,.65,.49,.012,Ae),i.box(B[0],3.32,B[1]+.24,.58,.42,.012,a("#e7e7da"));let j=[];for(let E=0;E<=24;E++){let O=E/24*g;j.push([B[0]+Math.sin(O)*.23,3.02,B[1]+.56+Math.cos(O)*.23])}i.tube(j,.016,Ae,6)}};window.buildFestaWorld=async function(i,e=()=>{}){let{V:t,M:n,Geometry:s,Mesh:r,Atlas:l,material:a,color:c,rng:h,clamp:g,TAU:_}=FestaGL,f=FESTA_DATA,y=h(9212026),S=(o,p)=>o+(p-o)*y(),P=(o,p)=>[(o-320)*.22,(p-290)*.22],T=(o,p,v=0)=>{let I=P(o,p);return[I[0],v,I[1]]},d=new l(512),b=o=>new Promise((p,v)=>{let I=new Image;I.onload=()=>p(I),I.onerror=()=>v(new Error("内蔵テクスチャを読み込めません。")),I.src=o}),A=await b(FESTA_ASSETS.gravel),M=await b(FESTA_ASSETS.grass);e(.08,"地面と建物の素材を準備しています"),d.add("white",(o,p)=>{o.fillStyle="#fff",o.fillRect(0,0,p,p)});function u(o,p,v,I=.25){return d.add(o,(U,G)=>{U.drawImage(p,0,0,G,G);let W=U.getImageData(0,0,G,G),ie=c(v);for(let z=0;z<W.data.length;z+=4){let Se=W.data[z]/255,Le=.82+Se*I;for(let Oe=0;Oe<3;Oe++)W.data[z+Oe]=g(ie[Oe]*255*Le,0,255);W.data[z+3]=255}U.putImageData(W,0,0)})}u("soil",A,"#a19580",.32),u("grass",M,"#727b4d",.55),d.add("concrete",(o,p)=>{o.fillStyle="#efeee6",o.fillRect(0,0,p,p);let v=o.getImageData(0,0,p,p);for(let I=0;I<v.data.length;I+=4){let U=S(-12,6);for(let G=0;G<3;G++)v.data[I+G]+=U}o.putImageData(v,0,0),o.strokeStyle="rgba(119,119,107,.13)",o.lineWidth=1,o.beginPath(),o.moveTo(0,120),o.lineTo(p,120),o.stroke()}),u("asphalt",A,"#555754",.6),d.add("wood",(o,p)=>{o.fillStyle="#b78a57",o.fillRect(0,0,p,p);for(let v=0;v<8;v++){let I=v*64;o.fillStyle=`hsl(${31+S(-3,3)},${34+S(-5,5)}%,${55+S(-6,6)}%)`,o.fillRect(I,0,63,p);for(let G=0;G<35;G++){let W=I+S(1,62);o.strokeStyle=`rgba(73,44,18,${S(.04,.17)})`,o.lineWidth=S(.3,1.3),o.beginPath();for(let ie=0;ie<=p;ie+=16)o.lineTo(W+Math.sin(ie/72+G)*S(.2,1.4),ie);o.stroke()}o.fillStyle="rgba(43,32,24,.20)",o.fillRect(I,0,1,p);let U=v%3*163;o.fillRect(I,U,64,1)}}),d.add("fabric",(o,p)=>{o.fillStyle="#f7f6f0",o.fillRect(0,0,p,p);for(let v=0;v<p;v+=3)o.strokeStyle=v%6?"rgba(98,99,84,.05)":"rgba(255,255,255,.3)",o.beginPath(),o.moveTo(v,0),o.lineTo(v,p),o.stroke(),o.beginPath(),o.moveTo(0,v),o.lineTo(p,v),o.stroke();o.strokeStyle="rgba(154,155,144,.2)",o.lineWidth=2,o.strokeRect(8,8,p-16,p-16)});function w(o=!1){d.add(o?"autumn":"leaf",(p,v)=>{p.clearRect(0,0,v,v);for(let I=0;I<220;I++){let U=S(0,_),G=Math.sqrt(y())*228,W=v/2+Math.cos(U)*G,ie=v/2+Math.sin(U)*G;p.strokeStyle=o?"#6f6541":"#526445",p.lineWidth=1.8,p.beginPath(),p.moveTo(v/2,v*.7),p.quadraticCurveTo(v/2+(W-v/2)*.65,ie+40,W,ie),p.stroke();let z=o?S(12,59):S(72,110);p.fillStyle=`hsl(${z},${S(27,45)}%,${S(27,48)}%)`,p.beginPath(),p.ellipse(W,ie,S(6,11),S(12,23),U+.5,0,_),p.fill(),p.strokeStyle="rgba(208,214,130,.3)",p.lineWidth=.7,p.beginPath(),p.moveTo(W-4,ie-10),p.lineTo(W+4,ie+10),p.stroke()}})}w(!1),w(!0),d.add("bark",(o,p)=>{o.fillStyle="#807565",o.fillRect(0,0,p,p);for(let v=0;v<650;v++){o.strokeStyle=`rgba(${Math.floor(S(30,70))},${Math.floor(S(25,60))},${Math.floor(S(20,50))},${S(.1,.6)})`,o.lineWidth=S(.5,5),o.beginPath();let I=S(0,p),U=S(0,p);o.moveTo(I,U),o.lineTo(I+S(-9,9),U+S(14,120)),o.stroke()}}),d.add("roof",(o,p)=>{o.fillStyle="#a6b2b3",o.fillRect(0,0,p,p);for(let v=0;v<p;v+=32)o.fillStyle="#7c8d91",o.fillRect(v,0,3,p),o.fillStyle="#c7cecd",o.fillRect(v+3,0,2,p)}),d.add("net",(o,p)=>{o.clearRect(0,0,p,p),o.strokeStyle="#b1b4a7",o.lineWidth=3;for(let v=-p;v<p*2;v+=64)o.beginPath(),o.moveTo(v,0),o.lineTo(v+p,p),o.stroke(),o.beginPath(),o.moveTo(v,p),o.lineTo(v+p,0),o.stroke()}),d.add("tire",(o,p)=>{o.fillStyle="#2b2b2a",o.fillRect(0,0,p,p),o.strokeStyle="#484948",o.lineWidth=5;for(let v=0;v<p;v+=27)o.beginPath(),o.moveTo(0,v),o.lineTo(p*.5,v+15),o.lineTo(p,v),o.stroke()}),d.add("cloth",(o,p)=>{o.fillStyle="#eeeadf",o.fillRect(0,0,p,p),o.fillStyle="rgba(83,117,120,.12)";for(let v=0;v<p;v+=40)o.fillRect(v,0,18,p),o.fillRect(0,v,p,18)});let N={F:"#a64c35",S:"#385e76",T:"#4e6c43",P:"#83503e",M:"#c39343",I:"#27595c"},x={};for(let o of[...f.records.filter(p=>!["unplaced","performer","unconfirmed","workshop"].includes(p.kind)),...f.locations])x[o.id]={banner:d.banner(o.id.startsWith("F-")||o.id.startsWith("S-")||o.id.startsWith("T-")?o.id:{HQ:"INFO",GYM:"STAGE",MOBILITY:"RIDE",MEET:"REST",OUTSTAGE:"STAGE",GATE_MAIN:"WELCOME",GATE_WEST:"WELCOME",WC:"WC",EAT2:"REST"}[o.id]||"FESTA",o.short,o.caption,N[o.category]),menu:d.sign(o.id+"-menu",o.short,o.detail,N[o.category],o.id+"   "+(o.status||"予定"))};let D=d.banner("西鎌倉","鎌倉市立西鎌倉小学校","つながりフェスタ＠にしかま2026","#415d60"),V=d.banner("2026","つながりフェスタ＠にしかま","つながる、みつかる、すきになる","#356064"),$=d.sign("走行エリア","モビリティー",`実走路の中へは入れません。
見学は柵の外側から。`,"#a74d38","車両実走路"),Z=d.banner("P","みんなの舞台","体育館内・開始予定","#83533c"),se=d.add("schedule",(o,p)=>{o.fillStyle="#fff9ec",o.fillRect(0,0,p,p),o.fillStyle="#5b3e32",o.font="700 29px sans-serif",o.fillText("体育館内 開始予定",24,42),o.font="17px sans-serif",o.fillText("終了時刻は未確認　／　当日変更の可能性あり",24,70),f.schedule.forEach((v,I)=>{let U=112+I*36;o.fillStyle=I%2?"#ffffff":"#f2ebde",o.fillRect(14,U-24,484,34),o.fillStyle="#83533c",o.font="700 20px sans-serif",o.fillText(v.time,23,U),o.fillStyle="#263b38";let G=18;o.font=`${G}px sans-serif`;let W=v.name;for(;o.measureText(W).width>370&&G>10;)o.font=`${--G}px sans-serif`;o.fillText(W,100,U)})}),X=d.add("Entrance panels",(o,p)=>{let v=h(451);o.fillStyle="#33363b",o.fillRect(0,0,p,p);for(let I=0;I<p;I+=5)for(let U=0;U<p;U+=12){let G=40+v()*25;o.fillStyle=`rgb(${G},${G+1},${G+5})`,o.fillRect(U+(I%10?6:0),I,10,3)}}),ne=FestaScenery.textures(d,h),de=d.add("gym-floor",(o,p)=>{o.fillStyle="#aa7549",o.fillRect(0,0,p,p);for(let v=0;v<p;v+=32){o.fillStyle=`hsl(${27+S(-2,2)},${40+S(-5,5)}%,${48+S(-4,4)}%)`,o.fillRect(v+1,0,30,p),o.fillStyle="rgba(71,43,25,.24)",o.fillRect(v,0,1,p);let I=Math.floor(v/32)%4*128+32;o.fillRect(v+1,I,30,1);for(let U=0;U<9;U++)o.fillStyle=`rgba(84,51,27,${S(.025,.075)})`,o.fillRect(v+S(2,29),0,S(.35,1),p)}}),ue=d.add("gym-wall-wood",(o,p)=>{o.fillStyle="#a77b60",o.fillRect(0,0,p,p);for(let v=0;v<p;v+=26)o.fillStyle=`hsl(${24+S(-2,2)},${31+S(-4,4)}%,${47+S(-3,3)}%)`,o.fillRect(v+1,0,24,p),o.fillStyle="rgba(44,27,21,.27)",o.fillRect(v,0,1,p),o.fillStyle="rgba(227,180,128,.15)",o.fillRect(v+3,0,1,p)}),ve=d.add("gym-display-board",(o,p)=>{o.fillStyle="#ecebe5",o.fillRect(0,0,p,p),o.fillStyle="#aaa9a2";for(let v=12;v<p;v+=16)for(let I=12;I<p;I+=16)o.beginPath(),o.arc(I,v,1.4,0,_),o.fill()}),fe=o=>Object.assign(a(o,ne,.39,.06),{fit:!0}),ee=new s,C=new s,Ve=new s,We=new s,rt=new s,Q={dirt:a("#fff",1,.97),grass:a("#fff",2,.98),wall:a("#dedccf",3,.93),base:a("#a3aaa5",3,.9),asphalt:a("#fff",4,.95),wood:a("#fff",5,.64),metal:a("#a6b0ac",0,.3,.65),whiteMetal:a("#f1f1e8",0,.42,.24),dark:a("#273036",0,.72),glass:fe("#c1cece"),black:a("#252928",0,.6),fabric:a("#f9f9f4",6,.85),bark:a("#fff",9,.94),leaf:a("#fff",7,.88),autumn:a("#fff",8,.9),tire:a("#fff",12,.93)},ut=[],xe=[],ye=[],He=[],at=[],Ne=[];function qe(o,p,v,I,U="",G=0){ut.push({x:o,z:p,w:v,d:I,id:U,r:G})}function Bt(o,p,v,I,U){let G=P(o,p),W=P(v,I);qe((G[0]+W[0])/2,(G[1]+W[1])/2,W[0]-G[0],W[1]-G[1],U)}let Qe=[[103,69],[131,47],[202,40],[331,44],[479,94],[574,146],[583,632],[592,679],[470,739],[101,780],[71,735],[21,525],[30,339],[57,250],[63,145],[116,123],[95,101]].map(o=>P(...o));function ct(o,p,v){let I=!1;for(let U=0,G=v.length-1;U<v.length;G=U++){let W=v[U],ie=v[G];W[1]>p!=ie[1]>p&&o<(ie[0]-W[0])*(p-W[1])/(ie[1]-W[1])+W[0]&&(I=!I)}return I}let st=0;function dt(o,p,v,I=3){let U=o.map(Oe=>[...Oe]);U.reduce((Oe,Be,et)=>{let Wt=U[(et+1)%U.length];return Oe+Be[0]*Wt[1]-Wt[0]*Be[1]},0)<0&&U.reverse();let W=U.map((Oe,Be)=>Be),ie=.007+st++*.011,z=(Oe,Be,et)=>(Be[0]-Oe[0])*(et[1]-Oe[1])-(Be[1]-Oe[1])*(et[0]-Oe[0]),Se=0;function Le(Oe,Be,et){p.tri([Oe[0],ie,Oe[1]],[et[0],ie,et[1]],[Be[0],ie,Be[1]],v,[[Oe[0]/I,Oe[1]/I],[et[0]/I,et[1]/I],[Be[0]/I,Be[1]/I]])}for(;W.length>3&&Se++<600;){let Oe=!1;for(let Be=0;Be<W.length;Be++){let et=W[(Be-1+W.length)%W.length],Wt=W[Be],zt=W[(Be+1)%W.length],wt=U[et],on=U[Wt],Ln=U[zt];if(!(z(wt,on,Ln)<1e-4)&&!W.some(Vn=>Vn!==et&&Vn!==Wt&&Vn!==zt&&z(wt,on,U[Vn])>=0&&z(on,Ln,U[Vn])>=0&&z(Ln,wt,U[Vn])>=0)){Le(wt,on,Ln),W.splice(Be,1),Oe=!0;break}}if(!Oe)break}W.length===3&&Le(...W.map(Oe=>U[Oe]))}ee.plane(0,-.1,0,1100,1100,Q.grass,460,460),dt(Qe,ee,Q.asphalt,.7);let It=[P(64,146),P(147,146),P(175,83),P(286,78),P(382,92),P(491,128),P(575,167),P(575,300),P(470,302),P(469,412),P(430,431),P(425,407),P(260,408),P(223,418),P(170,413),P(99,420),P(98,388),P(66,388),P(64,350)];dt(It,ee,Q.dirt,1.35),e(.18,"配置図から校舎と会場を組み立てています");function Gt(o,p,v,I,U=10.65,G="校舎",W=!0){let ie=P(o,p),z=P(v,I),Se=(ie[0]+z[0])/2,Le=(ie[1]+z[1])/2,Oe=z[0]-ie[0],Be=z[1]-ie[1];if(He.push({x:Se,z:Le,w:Oe,d:Be,h:U,label:G}),qe(Se,Le,Oe+.18,Be+.18,G),ee.box(Se,U/2,Le,Oe,U,Be,Q.wall),ee.box(Se,.24,Le,Oe+.15,.48,Be+.15,Q.base),ee.box(Se,U+.12,Le,Oe+.55,.24,Be+.55,a("#c6c3b6",0,.86)),!W)return;let et=U>12?4:U>9?3:2,Wt=(U-.35)/et;for(let zt=0;zt<4;zt++){let wt=zt%2?Be:Oe,on=zt%2?Oe:Be;C.scope(n.compose(Se,0,Le,zt*Math.PI/2),()=>{let Ln=Math.max(1,Math.floor((wt-.9)/4.3)),Vn=(wt-.9)/Ln;for(let bn=0;bn<et;bn++){let Zi=1.62+bn*Wt,Kr=bn===0?1.8:1.16;C.box(0,bn*Wt+.45,on/2+.015,wt,.035,.026,a("#b4b3a7",0,.95));for(let jr=0;jr<Ln;jr++){let er=-wt/2+.45+(jr+.5)*Vn,us=Vn*.84;C.box(er,Zi,on/2+.024,us+.12,Kr+.12,.06,a("#aaa99f",0,.6,.25)),C.box(er,Zi,on/2+.06,us,Kr,.025,fe((jr+bn)%4===0?"#a9b8b8":"#c5cecb"));for(let sl=1;sl<4;sl++)C.box(er-us/2+sl*us/4,Zi,on/2+.085,.038,Kr,.032,Q.metal);C.box(er,Zi-Kr/2-.035,on/2+.11,us+.17,.075,.17,a("#bdbdb3",0,.85)),bn===0&&C.box(er,Zi+.2,on/2+.087,us,.037,.03,Q.metal)}}for(let bn=0;bn<=Ln;bn+=2){let Zi=-wt/2+.45+bn*Vn;C.box(Zi,U/2,on/2+.085,.22,U,.17,Q.wall)}for(let bn of[-1,1])C.cylinder([bn*(wt/2-.2),.35,on/2+.19],[bn*(wt/2-.2),U-.2,on/2+.19],.045,.045,a("#a9aaa0",0,.75),8)})}}Gt(95.4,436.56,329.52,489.72,13.5),Gt(30.48,411.36,82.56,541.56,10.65),Gt(67.32,389.4,95.4,436.56,10.65),Gt(329.52,430.32,425.28,516.36,13.5),Gt(307.92,489.72,329.52,516.36,7.2),Gt(311.52,535.08,390.72,603.6,7.9,"昇降口",!1),Gt(103.44,608.28,401.04,666.1,10.7);{let o=P(111,436.56);C.box(o[0],6.75,o[1]-.16,6.1,13.5,.32,Q.wall);for(let p of[3.2,6.5,9.8,13.4])C.box(o[0],p,o[1]-.36,6.55,.19,.47,Q.wall);C.box(o[0],1.3,o[1]-.34,4.7,2.4,.05,Q.glass),C.box(o[0],2.88,o[1]-1,6.4,.2,2,Q.wall)}{let o=P(238,436.56),p=a("#693f30",0,.78),v=a("#9e9f94",0,.72,.18);C.box(o[0],1.25,o[1]-.035,6.3,2.5,.08,p),C.box(o[0],2.8,o[1]-.7,8.8,.18,1.5,a("#724b3e",0,.8));for(let I of[-4.1,4.1])C.box(o[0]+I,1.4,o[1]-1.2,.23,2.8,.23,Q.wall);for(let I of[-2.75,-1.38,0,1.38,2.75])C.box(o[0]+I,1.32,o[1]-.095,.045,2.24,.07,v),C.box(o[0]+I,2.22,o[1]-.13,1.3,.055,.05,v);for(let I of[-1.1,1.1])C.box(o[0]+I,1.12,o[1]-.15,.05,.32,.06,v);C.box(o[0],.055,o[1]-1.45,9,.11,2.55,a("#aeada1",3,.95))}function xt(o,p,v,I=0){C.scope(n.compose(o,p,v,I),()=>{C.cylinder([0,0,-.03],[0,0,.06],.48,.48,Q.whiteMetal,36),C.cylinder([0,0,.062],[0,0,.07],.43,.43,a("#efefdf"),36);for(let U=0;U<12;U++){let G=U/12*_;C.cylinder([Math.sin(G)*.34,Math.cos(G)*.34,.085],[Math.sin(G)*.38,Math.cos(G)*.38,.085],.01,.01,Q.dark,5)}C.cylinder([0,0,.095],[.07,.27,.095],.017,.017,Q.dark,6),C.cylinder([0,0,.1],[.27,-.1,.1],.013,.013,Q.dark,6)})}{let o=P(365,430.2);xt(o[0],6.8,o[1]-.06,Math.PI)}{let o=P(391,566);C.scope(n.compose(o[0]+.06,0,o[1],Math.PI/2),()=>{let p=a("#e1e0d4",3,.92),v=a("#ffffff",X,.95),I=2.1,U=.22,G=-.85;C.box(0,5.5,.93,14.4,4.5,2.34,p),C.box(-3.92,5.59,I+.045,5.35,3.05,.06,v),C.box(3.14,5.59,I+.045,6.91,3.05,.06,v),C.box(0,7.84,.96,14.7,.2,2.52,p),C.box(0,3.28,.94,14.4,.3,2.32,p),C.box(0,.16,1.18,14.5,.2,2.88,a("#aaa99e",3,.9)),C.box(0,1.65,U-.08,13.65,2.92,.06,a("#252e2c",0,.93));let W=a("#b4b9b4",0,.42,.38),ie=a("#56665f",0,.3,.15);for(let z=0;z<10;z++){let Se=-6.08+z*1.35;C.box(Se,1.5,U,1.28,2.25,.035,ie),C.box(Se,2.85,U,1.28,.37,.035,a("#777e70",0,.36)),C.box(Se-.66,1.65,U+.045,.045,2.9,.055,W);for(let Le of[.38,1.18,2.64,3.06])C.box(Se,Le,U+.045,1.34,.045,.055,W);z%2===0&&(C.box(Se+.46,1.2,U+.105,.025,.32,.035,W),C.box(Se+.46,1.02,U+.075,.12,.025,.08,W))}C.box(6.74,1.65,U+.045,.045,2.9,.055,W);for(let z of[-6.91,G,6.91])C.box(z,1.71,I-.29,.58,3.08,.58,p),C.box(z,.23,I-.29,.67,.15,.67,a("#b7b7aa",3,.94));for(let z of[-6.9,6.9])C.box(z,1.74,1.08,.28,3.04,1.88,p);for(let z of[-5.25,-2.65,1.55,4.85])C.box(z,3.115,1.16,.38,.045,.26,a("#50534b")),C.box(z,3.086,1.16,.29,.017,.17,a("#e7e3c5",0,.6,0,.25));for(let z=0;z<3;z++)C.box(0,.03+z*.05,3.25-z*.38,14.7,.06+z*.1,.4,a("#a9a79b",3,.9));xt(G,3.6,I+.08,0)})}{let o=P(204,420),p=a("#919b94",0,.58,.21),v=a("#a9aea5",0,.82);ee.box(o[0],1.8,o[1],8.9,3.6,5.3,Q.wall),ee.box(o[0],3.66,o[1],9.15,.18,5.55,a("#919b94",10)),qe(o[0],o[1],9,5.4,"用具庫");for(let I of[-1,1]){C.box(o[0]+I*2.12,1.58,o[1]-2.69,4.08,2.95,.07,v),C.box(o[0]+I*2.12,1.59,o[1]-2.75,4,.035,.055,p);for(let U=-1;U<=1;U++)C.box(o[0]+I*2.12+U*1.17,1.58,o[1]-2.75,.025,2.88,.045,p);C.box(o[0]+I*3.5,1.34,o[1]-2.79,.045,.26,.045,p)}C.box(o[0],3.16,o[1]-2.81,8.75,.22,.12,p);for(let I of[-3.9,0,3.9])C.cylinder([o[0]+I,3.58,o[1]-2.64],[o[0]+I,.08,o[1]-2.64],.045,.045,p,8);C.box(o[0],1.3,o[1]+2.68,3,2.6,.08,a("#79857f",0,.46,.35))}function Pt(o,p,v=0){let I=P(o,p);C.scope(n.compose(I[0],0,I[1],v),()=>{C.box(0,.63,0,2.9,.33,.52,Q.base),C.box(0,.83,0,2.96,.08,.6,a("#c3cdca",0,.23,.7));for(let U=0;U<6;U++){let G=-1.22+U*.49;C.box(G,.84,0,.35,.015,.33,a("#697e81",0,.18,.65)),C.cylinder([G,.81,-.19],[G,1.15,-.19],.018,.018,Q.metal,7),C.cylinder([G,1.15,-.19],[G,1.15,.02],.017,.017,Q.metal,7)}for(let U of[-1.1,1.1])C.box(U,.35,0,.13,.7,.34,Q.base)})}Pt(251,414),Pt(42,400);{let o=P(401,538),p=a("#ac7049",0,.94);C.cylinder([o[0],.12,o[1]],[o[0],.75,o[1]],1.25,1.25,p,36),C.cylinder([o[0],.75,o[1]],[o[0],.82,o[1]],1.29,1.29,a("#ada99a"),36),C.cylinder([o[0],.825,o[1]],[o[0],.84,o[1]],1.1,1.1,Q.base,36);for(let v=0;v<24;v++){let I=v/24*_;C.cylinder([o[0]+1.252*Math.sin(I),.12,o[1]+1.252*Math.cos(I)],[o[0]+1.252*Math.sin(I),.74,o[1]+1.252*Math.cos(I)],.009,.009,a("#d4b99a"),5)}for(let v of[-.48,.48])C.cylinder([o[0]+v,.84,o[1]],[o[0]+v,1.18,o[1]],.025,.025,Q.metal,7),C.cylinder([o[0]+v,1.18,o[1]],[o[0]+v+.16,1.18,o[1]],.025,.025,Q.metal,7)}let Y=470,Ct=580,vt=302,F=504,m=P(Y,vt),H=P(Ct,F),k=[(m[0]+H[0])/2,(m[1]+H[1])/2],oe=H[0]-m[0],we=H[1]-m[1],be=P(500,468)[1],he=.45,ge=be-m[1],Ee=(m[1]+be)/2;ee.box(k[0],he/2,k[1],oe,he,we,a("#b7b9b3",3,.94)),ee.plane(k[0],he+.045,Ee,oe,ge,a("#ffffff",de,.4),oe/4,ge/4),ee.plane(k[0],he+.044,(be+H[1])/2,oe,H[1]-be,a("#c9c5b9",0,.88),oe/4,2),He.push({x:k[0],z:k[1],w:oe,d:we,h:10,label:"体育館",gym:!0}),ee.box(H[0],2.1,k[1],.35,4.2,we,Q.wall),ee.box(H[0],8.38,k[1],.35,.64,we,Q.wall),qe(H[0],k[1],.4,we,"体育館東壁"),ee.box(k[0],4.35,m[1],oe,8.7,.35,Q.wall),qe(k[0],m[1],oe,.4,"体育館壁");let Ue=m[0]+oe*.38,Re=2.25,Ie=he,Ze=a("#e1dfd5",3,.92),Ke=m[0]+oe*77/309,tt=m[0]+oe*156/309,J=m[0]+oe*202/309,Ae=m[0]+oe*233/309,_e=be+(H[1]-be)*27/66,De=(m[0]+Ke)/2,L=(Ae+H[0])/2,B=1.1,j=[[De-B,De+B],[Ue-Re,Ue+Re],[L-B,L+B]],E=[],O=m[0];for(let[o,p]of j)o>O&&E.push([O,o]),O=p;O<H[0]&&E.push([O,H[0]]);let te=[[m[0]+2,m[0]+3.5],[tt+.8,tt+1.8],[J+.6,J+1.55],[Ae+1.7,Ae+3.2]],q=[te[0],[Ue-Re,Ue+Re],...te.slice(1)],le=[],Me=m[0];for(let[o,p]of q)o>Me&&le.push([Me,o]),Me=p;Me<H[0]&&le.push([Me,H[0]]);for(let[o,p]of le)ee.box((o+p)/2,2.1,H[1],p-o,4.2,.35,Q.wall),qe((o+p)/2,H[1],p-o,.4,"体育館南壁");for(let[o,p]of te){let v=(o+p)/2,I=p-o;ee.box(v,.58,H[1],I,1.16,.35,Q.wall),ee.box(v,3.45,H[1],I,1.5,.35,Q.wall),C.box(v,1.93,H[1]+.045,I-.12,1.52,.055,fe("#aab9b7")),qe(v,H[1],I,.4,"体育館南壁の窓")}ee.box(Ue,3.6,H[1],Re*2,1.2,.35,Q.wall),ee.box(k[0],6.45,H[1],oe,4.5,.35,Q.wall);for(let[o,p]of E)ee.box((o+p)/2,2.1,be,p-o,4.2,.35,Q.wall),qe((o+p)/2,be,p-o,.4,"体育館床の出口側の壁");let Te=a("#f4f3ed",0,.62,.08),me=a("#e2e2da",0,.54,.24);for(let o of[De,L])ee.box(o,3.6,be,B*2,1.2,.35,Q.wall),ee.box(o,1.51,be-.095,B*2-.12,3.02,.11,Te),C.box(o,1.52,be-.17,B*2+.06,3.1,.045,me),C.box(o,1.52,be-.205,B*2-.12,2.98,.025,Te),C.box(o+(o<k[0]?.78:-.78),1.4,be-.24,.025,.23,.05,Q.metal),qe(o,be,B*2,.4,"出演者控室の閉じた扉");ee.box(Ue,3.6,be,Re*2,1.2,.35,Q.wall),ee.box(k[0],6.37,be,oe,4.34,.35,Q.wall),ee.tri([m[0],8.54,be],[k[0],9.97,be],[H[0],8.54,be],Q.wall);function Pe(o,p,v){ee.box(o,Ie+1.6,(p+v)/2,.16,3.2,v-p,Ze),qe(o,(p+v)/2,.18,v-p,"体育館前室の壁")}function ke(o,p,v){ee.box((o+p)/2,Ie+1.6,v,p-o,3.2,.16,Ze),qe((o+p)/2,v,p-o,.18,"体育館前室の壁")}Pe(Ke,be+.22,H[1]),Pe(tt,_e,H[1]),Pe(J,be+.22,H[1]),Pe(Ae,be+.22,H[1]),ke(tt,J,_e);let nt=a("#a69b86",0,.82),mt=(_e+H[1])/2,At=H[1]-_e-.55;for(let o of[Ke+.36,tt-.48]){for(let p of[.28,.7,1.12])C.box(o,he+p,mt,.56,.07,At,nt);for(let p of[-1,1])C.box(o+p*.27,he+.7,mt,.045,1.1,At,nt);qe(o,mt,.56,At,"下駄箱")}[["出演者控室（小）",(m[0]+Ke)/2],["WC（M）",(tt+J)/2],["WC（W）",(J+Ae)/2],["出演者控室（大）",(Ae+H[0])/2]].forEach(([o,p],v)=>{let I=d.add("gym-room-"+v,(U,G)=>{U.fillStyle="#f5f3eb",U.fillRect(0,0,G,G),U.fillStyle="#273b39",U.textAlign="center",v===0||v===3?(U.font="700 78px sans-serif",U.fillText("出演者控室",G/2,218),U.font="700 100px sans-serif",U.fillText(v===0?"（小）":"（大）",G/2,350)):(U.font="700 112px sans-serif",U.fillText(o,G/2,296))});rt.scope(n.compose(p,0,H[1]-.24,Math.PI),()=>{rt.sign(0,3.35,0,v===0||v===3?2.2:1.35,.36,I,!0)})});let jt=[[335,344],[421,433],[468,484]],Xt=[[302,335],[344,421],[433,468],[484,504]];for(let[o,p]of Xt){let v=P(Y,o),I=P(Y,p);ee.box(m[0],2.1,(v[1]+I[1])/2,.36,4.2,I[1]-v[1],Q.wall),qe(m[0],(v[1]+I[1])/2,.4,I[1]-v[1],"体育館西壁")}ee.box(m[0],8.38,k[1],.36,.64,we,Q.wall);for(let[o,p]of jt){let v=P(Y,o),I=P(Y,p);ee.box(m[0],3.49,(v[1]+I[1])/2,.36,1.42,I[1]-v[1],Q.wall)}let Xn=fe("#aab9b7"),zn=a("#b7b9ae",0,.53,.3);for(let o of[-1,1]){let p=k[0]+o*oe/2;C.box(p,6.13,k[1],.03,3.86,we-.75,Xn);for(let v of[4.2,5.05,6.1,7.12,8.05])C.box(p,v,k[1],.16,.065,we,zn);for(let v=m[1]+.45;v<H[1];v+=1.35)C.box(p,6.13,v,.17,3.9,.055,zn);for(let v=m[1]+.5;v<H[1];v+=5.4)o<0&&jt.some(([I,U])=>v>P(Y,I)[1]-.2&&v<P(Y,U)[1]+.2)||C.box(p,4.3,v,.45,8.6,.33,Q.wall);for(let v=m[1]+.5;v<H[1]-.4;v+=.55)C.box(p-o*.3,4.9,v,.035,1.2,.03,Q.whiteMetal);C.box(p-o*.3,5.5,k[1],.05,.05,we,Q.whiteMetal)}let hn=a("#ffffff",ue,.78),Cn=a("#966d50",0,.76);for(let o of[-1,1])for(let[p,v]of o<0?Xt:[[302,504]]){let I=P(Y,p)[1],U=P(Y,v)[1],G=k[0]+o*(oe/2-.205);C.box(G,2.14,(I+U)/2,.028,4.03,U-I,hn),C.box(G-o*.04,4.14,(I+U)/2,.045,.11,U-I,Cn);for(let W=I+.36;W<U;W+=.75)C.box(G-o*.03,2.1,W,.035,3.94,.026,Cn);C.cylinder([G-o*.35,5.2,I],[G-o*.35,5.2,U],.025,.025,Q.whiteMetal,8)}for(let[o,p]of jt){let v=P(Y,o)[1],I=P(Y,p)[1];C.box(m[0]+.205,3.49,(v+I)/2,.035,1.42,I-v,hn)}let yn=be-.205;for(let[o,p]of E)C.box((o+p)/2,1.55,yn,p-o,2.94,.035,hn);C.box(k[0],3.57,yn,oe,1.1,.035,hn);for(let o=m[0]+.38;o<H[0]-.2;o+=.53){let p=j.some(([v,I])=>o>=v&&o<=I);C.box(o,p?3.57:2.1,yn-.028,.022,p?1.02:3.96,.02,Cn)}let pi=a("#e6e2d8",0,.76),ls=a("#24775f",0,.74,.04);for(let o of[-1,1])C.box(Ue+o*2.25,1.52,yn-.04,.11,3.04,.09,pi);C.box(Ue,3.02,yn-.04,4.6,.12,.09,pi);let Zo=a("#f4f3ed",0,.64,.08);for(let o of[-1,1])C.box(Ue+o*(Re-.11),1.51,be+.67,.08,2.98,1.28,Zo),C.box(Ue+o*(Re-.17),1.44,be+.25,.035,.27,.05,Q.metal);for(let o of[-4.8,0,4.8]){let p=k[0]+o;C.box(p,6,yn-.02,1.35,2.4,.05,pi),C.box(p,6,yn-.055,1.21,2.25,.025,ls),C.box(p-.35,6,yn-.073,.08,2.19,.015,a("#6eb49a",0,.79,.02))}let Jo=a("#8f9693",10,.78,.12),Xr=a("#e8e6dc",0,.96);for(let o of[-1,1]){let p=k[0]+o*(oe/2+.4);We.quad([k[0],10.15,m[1]-.4],[k[0],10.15,H[1]+.4],[p,8.72,H[1]+.4],[p,8.72,m[1]-.4],Jo,we/3,4),We.quad([k[0],9.97,m[1]],[p,8.54,m[1]],[p,8.54,H[1]],[k[0],9.97,H[1]],Xr,1,1)}for(let o of[m[1],H[1]])ee.tri([m[0],8.7,o],[k[0],10.15,o],[H[0],8.7,o],Q.wall);for(let o=m[1]+3;o<H[1]-1;o+=5.4)for(let p of[-7,-2.3,2.3,7]){let v=9.93-Math.abs(p)/(oe/2)*1.43;We.cylinder([k[0]+p,v-.07,o],[k[0]+p,v-.01,o],.25,.25,Q.whiteMetal,20),We.disk(k[0]+p,v-.085,o,.215,a("#fff9e4",0,.9,0,.8),20)}let R=a("#a8784f",0,.58),K=a("#391722",6,.94),pe=a("#c39736",0,.47,.17),re=m[1]+4.03,ae=m[1]+2.14;for(let o of[-1,1]){let p=oe/2-6.12,v=k[0]+o*(6.12+p/2);ee.box(v,4.35,re,p,8.7,.35,Q.wall),qe(v,re,p,.4,"体育館壁"),C.box(v,2.1,re+.21,p,4.16,.05,hn);for(let I=v-p/2+.36;I<v+p/2;I+=.5)C.box(I,2.1,re+.25,.023,4.08,.026,Cn)}ee.box(k[0],8.2,re,12.24,1,.35,Q.wall),ee.box(k[0],he+.55,m[1]+2.1,11,1.1,4,a("#aa7649",de,.52)),qe(k[0],m[1]+2.1,11,4.2,"常設舞台・使用せず"),C.box(k[0],3.81,ae,11.2,5.46,.11,K);for(let o=0;o<32;o++){let p=k[0]-5.42+o*.35;C.cylinder([p,1.1,ae+.08],[p,6.49,ae+.08],.075,.075,a(o%3?"#421925":"#572331",6,.96),7)}for(let o of[1.1,6.48])C.box(k[0],o,ae+.17,11.18,.085,.1,pe);for(let o of[-1,1])C.box(k[0]+o*5.86,4.05,re,.73,6.89,.45,R),C.box(k[0]+o*5.49,3.79,(ae+re)/2,.22,5.95,re-ae,R);C.box(k[0],7.46,re,12.45,.66,.45,R),C.box(k[0],6.89,re+.23,11.12,.55,.07,a("#4a1a28",0,.94)),C.quad([k[0],7.24,re+.28],[k[0]-.25,6.97,re+.28],[k[0],6.7,re+.28],[k[0]+.25,6.97,re+.28],pe),C.box(k[0],1,re+.11,11.1,1.1,.15,hn);for(let o of[-1,1])C.box(k[0]+o*8.25,2.55,re+.29,3.2,.92,.06,hn);rt.sign(k[0]+8.25,2.55,re+.34,3,.62,Z);{let o=H[0]-.25,p=a("#ffffff",ve,.91);for(let v=0;v<5;v++){let I=m[1]+8.3+v*5.45;C.box(o,2.53,I,.09,2.45,5.24,Cn),C.box(o-.06,2.53,I,.025,2.31,5.1,p);for(let U=0;U<2;U++)for(let G=0;G<5;G++){let W=I+(G-2)*.92,ie=2.99-U*.91;C.box(o-.084,ie,W,.014,.66,.54,a(["#edece6","#e2e5df","#e7e0d7"][G%3],0,.94))}}}for(let o of[-1,1])for(let p of[m[1]+20,m[1]+33,m[1]+46])C.box(k[0]+o*(oe/2-.245),6.03,p,.035,2.9,2.4,a("#27443b",6,.9));for(let o of[-1,1])C.cylinder([k[0]+o*6,.05,m[1]+5],[k[0]+o*6,5.3,m[1]+5],.045,.045,Q.metal,8);function ze(o,p,v,I,U,G=.066+he){let W=v[0]-p[0],ie=v[1]-p[1],z=Math.hypot(W,ie),Se=-ie/z*I/2,Le=W/z*I/2;o.quad([p[0]-Se,G,p[1]-Le],[p[0]+Se,G,p[1]+Le],[v[0]+Se,G,v[1]+Le],[v[0]-Se,G,v[1]-Le],U,z,1)}for(let o of[k[0]-8.2,k[0]+8.2])ze(C,[o,m[1]+6],[o,be-2],.047,a("#f5ede3"));for(let o of[m[1]+6,Ee,be-2])ze(C,[k[0]-8.2,o],[k[0]+8.2,o],.047,a("#f5ede3"));for(let o of[k[0]-6.8,k[0]+6.8])ze(C,[o,m[1]+13],[o,be-3],.036,a("#293239"),.068+he);for(let o of[m[1]+13,be-3])ze(C,[k[0]-6.8,o],[k[0]+6.8,o],.036,a("#293239"),.068+he);for(let o of[k[0]-9.2,k[0]+9.2])ze(C,[o,m[1]+16],[o,be-4],.038,a("#2f7795"),.07+he);let Je=P(469.65,427);rt.scope(n.compose(Je[0]-.12,0,Je[1],-Math.PI/2),()=>{rt.sign(0,2.94,0,3.5,.75,x.GYM.banner),rt.sign(3.7,1.55,.1,1.08,1.65,se)}),e(.3,"テント・キッチンカー・ブースの内容を配置しています");function Fe(o,p,v,I=0,U="#66746c",G=0){o.scope(n.compose(p,G,v,I),()=>{let W=a("#a5aca8",0,.32,.5),ie=a(U,6,.82);o.box(0,.43,0,.42,.055,.39,ie),o.box(0,.7,-.18,.43,.3,.045,ie);for(let z of[-.17,.17])o.cylinder([z,.04,-.15],[z,.86,-.18],.016,.016,W,6),o.cylinder([z,.04,.21],[z,.44,.1],.016,.016,W,6),o.cylinder([z,.05,-.16],[z,.47,.15],.014,.014,W,6);o.cylinder([-.19,.18,-.14],[.19,.18,-.14],.012,.012,W,6)})}function Xe(o,p,v,I=1.8,U=.72,G=0,W=!0,ie=!1){o.scope(n.compose(p,0,v,G),()=>{o.box(0,.73,0,I,.07,U,W?a("#f2ede1",13,.9):a("#d5c8af",5,.7));for(let z of[-I*.36,I*.36])o.cylinder([z,.06,-U*.34],[z,.71,U*.32],.022,.022,Q.metal,7),o.cylinder([z,.06,U*.34],[z,.71,-U*.32],.022,.022,Q.metal,7);if(o.cylinder([-I*.38,.35,0],[I*.38,.35,0],.021,.021,Q.metal,7),W)for(let z of[-1,1])o.box(0,.6,z*U/2,I,.25,.016,a("#eeeadf",6,.94))}),ie&&qe(p,v,Math.abs(Math.cos(G))*I+Math.abs(Math.sin(G))*U,Math.abs(Math.sin(G))*I+Math.abs(Math.cos(G))*U,"table")}let je=P(368,283);for(let o=0;o<4;o++)for(let p=0;p<4;p++){let v=je[0]+(p-1.5)*2.62,I=je[1]+(o-1.5)*2.42;Xe(C,v,I,1.65,.7,0,!0,!0);for(let U of[-1,1])for(let G=0;G<3;G++){let W=v+(G-1)*.53,ie=I+U*.71;Fe(C,W,ie,U===-1?0:Math.PI,"#6f7970"),Ne.push({x:W,z:ie,yaw:U===-1?0:Math.PI})}}let ft=P(431,548);for(let o=0;o<3;o++){Xe(C,ft[0],ft[1]+(o-1)*2.2,1.8,.65,0,!0,!0);for(let p of[-1,1])for(let v=0;v<3;v++)Fe(C,ft[0]+(v-1)*.57,ft[1]+(o-1)*2.2+p*.68,p<0?0:Math.PI)}for(let o=0;o<6;o++)for(let p=0;p<12;p++){let v=k[0]+(p-5.5)*.64+(p<6?-.7:.7),I=m[1]+18.5+o*.92;Fe(C,v,I,Math.PI,"#566a68",he+.05),Ne.push({x:v,z:I,yaw:Math.PI,gym:!0})}for(let o=0;o<6;o++)for(let p of[-2,-1,12,13]){let v=k[0]+(p-5.5)*.64+(p<6?-.7:.7),I=m[1]+18.5+o*.92;Fe(C,v,I,Math.PI,"#566a68",he+.05),Ne.push({x:v,z:I,yaw:Math.PI,gym:!0,addedGymSeat:!0})}for(let o=6;o<8;o++)for(let p=0;p<16;p++){let v=k[0]+(p-7.5)*.64+(p<8?-.7:.7),I=m[1]+18.5+o*.92;Fe(C,v,I,Math.PI,"#566a68",he+.05),Ne.push({x:v,z:I,yaw:Math.PI,gym:!0,addedGymSeat:!0})}function gt(o,p,v,I,U=0){o.scope(n.compose(p,0,v,U),()=>{o.cylinder([-.4,.04,-.15],[-.35,1.29,0],.023,.023,Q.wood,6),o.cylinder([.4,.04,-.15],[.35,1.29,0],.023,.023,Q.wood,6),o.cylinder([-.4,.04,-.48],[-.35,1.29,0],.023,.023,Q.wood,6),o.cylinder([.4,.04,-.48],[.35,1.29,0],.023,.023,Q.wood,6),o.sign(0,.85,.03,.7,.94,I,!0)})}function $e(o,p,v,I,U=2.18,G=3.16){let W=[[-p/2,U,-v/2],[-p/2,U,v/2],[p/2,U,v/2],[p/2,U,-v/2]],ie=[0,G,0];for(let z=0;z<4;z++){let Se=W[z],Le=W[(z+1)%4],Oe=(Be,et)=>{let Wt=t.add(t.mul(Se,1-Be),t.mul(Le,Be)),zt=t.add(t.mul(Wt,1-et),t.mul(ie,et));return zt[1]-=.052*Math.sin(Be*Math.PI)*Math.sin(et*Math.PI),zt};for(let Be=0;Be<10;Be++)for(let et=0;et<8;et++){let Wt=Be/10,zt=et/8,wt=Oe(Wt,zt),on=Oe((Be+1)/10,zt),Ln=Oe((Be+1)/10,(et+1)/8),Vn=Oe(Wt,(et+1)/8);o.quad(wt,on,Ln,Vn,I,1,1)}o.quad(Se,[Se[0],U-.2,Se[2]],[Le[0],U-.2,Le[2]],Le,I,1,1)}}function Et(o,p){let v=p.id,I=p.category,U=v==="F-1"||v==="F-9",G=v==="F-6"||v==="F-8",W=v==="T-12",ie=v==="T-2";if(U){for(let z=0;z<9;z++){let Se=-.8+z%5*.23,Le=.3+Math.floor(z/5)*.22;o.cylinder([Se,.79,Le],[Se,.94,Le],.044,.052,a("#faf3dd"),12),o.cylinder([Se,.94,Le],[Se,.958,Le],.055,.055,a("#635442"),12)}o.box(.54,1.02,-.14,.45,.53,.32,a("#3f4443",0,.25,.45)),o.box(.53,1.09,.03,.22,.13,.017,a("#91aaa1",0,.25,.2));for(let z=0;z<3;z++)o.cylinder([.36+z*.11,.79,.16],[.36+z*.11,.98,.16],.028,.028,Q.metal,8)}else if(G)for(let z=0;z<3;z++){let Se=-.65+z*.65;o.box(Se,.79,.28,.56,.11,.4,a("#a98350",5));for(let Le=0;Le<7;Le++)o.sphere(Se+S(-.2,.2),.89,.28+S(-.14,.14),S(.065,.09),.045,S(.06,.1),a(["#bd863d","#d2a05d","#a87139"][Le%3]),12,7)}else if(W)for(let z=0;z<3;z++){let Se=-.62+z*.6;o.box(Se,.85,.17,.52,.2,.5,a("#b7915d",5));for(let Le=0;Le<8;Le++){let Oe=Se+S(-.2,.2),Be=.17+S(-.17,.17);o.cylinder([Oe,.88,Be],[Oe+.11,1.06,Be+.04],.017,.04,a("#d07731"),8),o.cylinder([Oe+.1,1.04,Be+.04],[Oe+.17,1.17,Be+.02],.008,.01,a("#58703a"),6)}}else if(ie){o.box(-.35,.94,.15,.7,.28,.34,a("#2b363c",0,.45,.25)),o.box(-.42,1.01,.33,.29,.1,.007,a("#a9be92",0,.5,0,.2));for(let z=0;z<3;z++)o.cylinder([-.06+z*.05,.94,.34],[-.06+z*.05,.94,.37],.024,.024,Q.metal,10);o.box(.5,.84,.23,.35,.05,.28,a("#373a3c")),o.cylinder([.75,.8,-.13],[.75,2.65,-.13],.012,.012,Q.metal,7),o.cylinder([.33,2.4,-.13],[1.14,2.4,-.13],.015,.015,Q.metal,7)}else if(I==="F"){for(let z=0;z<3;z++){let Se=-.7+z*.65;o.box(Se,.8,.22,.54,.09,.36,a("#d1d5c8",0,.25,.45));for(let Le=0;Le<8;Le++){let Oe=Se+S(-.2,.2),Be=.22+S(-.12,.12);o.sphere(Oe,.855,Be,.047,.025,.045,a(["#c99352","#dfb476","#724b30"][Le%3]),9,5)}}if(v==="F-11"){o.box(.12,.8,-.26,1,.1,.3,Q.black);for(let z=0;z<9;z++)o.cylinder([-.3+z*.1,.88,-.49],[-.3+z*.1,.88,.02],.006,.006,a("#d5b878"),5)}}else if(I==="S"){for(let z=0;z<14;z++){let Se=-.8+z%7*.25,Le=.13+Math.floor(z/7)*.25;o.box(Se,.794,Le,.17,.015,.16,a("#f8f4e6")),o.sphere(Se,.83,Le,.055,.032,.055,a(["#aa5c61","#b5aa6c","#558489","#9a804c"][z%4],0,.28,.32),12,7)}if(v==="S-8")for(let z=0;z<9;z++)o.cylinder([-.75+z*.17,.83,-.2],[-.7+z*.17,1.01,-.08],.021,.024,a("#c8af70",5),7)}else for(let z=0;z<3;z++)o.box(-.65+z*.6,.795,.22,.43,.015,.28,a("#faf8ec")),o.box(-.65+z*.6,.82,.2,.35,.012,.21,a(["#bbbaa0","#a6b4bb","#b7ba8d"][z],0,.8))}function $t(o,p=null){let v=p||o.pos,I=o.width||3.02,U=2.75,G=o.yaw||0,W=o.id==="S-3"||o.id==="S-9"?"#8393a0":o.id==="F-11"?"#859690":"#f8f7ef",ie=a(N[o.category],6,.92);ee.scope(n.compose(v[0],0,v[1],G),()=>{$e(ee,I,U,a(W,6,.92));for(let Be of o.id==="F-10"?[-I/2+.035,0,I/2-.035]:[-I/2+.035,I/2-.035])for(let et of[-U/2+.035,U/2-.035])ee.cylinder([Be,.03,et],[Be,2.2,et],.029,.026,Q.metal,8);ee.box(0,2.1,U/2,I,.29,.026,ie),ee.box(0,2.1,-U/2,I,.29,.025,a(W,6));for(let Be of[-I/2,I/2])ee.box(Be,2.1,0,.025,.29,U,a(W,6));ee.cylinder([-I/2,2.17,-U/2],[I/2,2.17,U/2],.021,.021,Q.metal,8),ee.cylinder([I/2,2.17,-U/2],[-I/2,2.17,U/2],.021,.021,Q.metal,8),(o.category==="F"||o.id==="HQ")&&ee.box(0,1.15,-U/2,I,1.87,.015,a("#eeeee5",6,.94))}),C.scope(n.compose(v[0],0,v[1],G),()=>{o.id==="F-10"?(Xe(C,-1.5,.4,2.28,.73),Xe(C,1.5,.4,2.28,.73),C.scope(n.compose(-1.5,0,0),()=>Et(C,o)),Fe(C,-2.15,-.53,0,"#65746c"),C.box(-.75,.23,-.46,.54,.42,.4,a("#af9270",5))):(Xe(C,0,.4,Math.min(I-.45,2.28),.73),Et(C,o),Fe(C,-.65,-.53,0,"#65746c"),C.box(.75,.23,-.46,.54,.42,.4,a("#af9270",5))),o.category==="T"&&C.sign(.56,1.5,-1.25,.95,.98,x[o.id].menu,!0)}),rt.scope(n.compose(v[0],0,v[1],G),()=>{rt.sign(0,2.15,U/2+.03,Math.min(I-.09,2.87),.62,x[o.id].banner),gt(rt,-I/2+.2,U/2+.4,x[o.id].menu,-.14)});let z=[Math.sin(G),Math.cos(G)],Se=[Math.cos(G),-Math.sin(G)],Le=v[0]+z[0]*.4,Oe=v[1]+z[1]*.4;qe(Le,Oe,Math.abs(Se[0])*(I-.4)+Math.abs(z[0])*.8,Math.abs(Se[1])*(I-.4)+Math.abs(z[1])*.8,o.id),o.approach=[v[0]+z[0]*(U/2+3.1),v[1]+z[1]*(U/2+3.1)],o.marker=[v[0]+z[0]*1.4,3.22,v[1]+z[1]*1.4],ye.push(o)}function Ut(o,p,v,I,U=1,G=.37){o.cylinder([p,v,I-.09],[p,v,I+.09],G,G,Q.tire,22),o.cylinder([p,v,I+U*.094],[p,v,I+U*.114],G*.55,G*.55,Q.metal,20);for(let W=0;W<6;W++){let ie=W/6*_;o.cylinder([p+Math.cos(ie)*G*.34,v+Math.sin(ie)*G*.34,I+U*.115],[p+Math.cos(ie)*G*.34,v+Math.sin(ie)*G*.34,I+U*.12],G*.12,G*.12,Q.dark,7)}}function Ft(o,p){let v=o.pos,I=o.yaw,G=a(["#ede6d3","#c3a875","#eef0df","#657f79","#aa7761","#e2d8c3","#e0cf9e","#6c7a75"][p%8],0,.38,.23),W=ee;W.scope(n.compose(v[0],0,v[1],I),()=>{W.box(0,.46,0,3.85,.22,1.7,Q.dark),W.box(.42,1.63,0,2.85,2.03,1.82,G),W.box(-1.41,1.2,0,1.06,1.37,1.8,G),W.box(-1.65,.9,0,.88,.38,1.9,G),W.box(-1.44,1.58,0,1.04,.74,1.8,G),W.box(-1.96,1.58,0,.035,.66,1.57,Q.glass),W.box(-1.42,1.65,.91,.76,.54,.018,Q.glass),W.box(-1.42,1.65,-.91,.76,.54,.018,Q.glass),W.box(.46,1.79,.918,2.4,1,.012,Q.dark),W.box(.46,1.72,.923,2.27,.81,.009,a("#555e54",0,.7)),W.box(.46,1.16,1.11,2.55,.07,.54,Q.metal),W.box(.46,2.76,0,2.98,.14,1.92,G);for(let Se of[-1.35,1.2])for(let Le of[-.89,.89])Ut(W,Se,.4,Le,Le<0?-1:1,.36);W.box(-1.98,.61,0,.1,.19,1.7,a("#b3b8b3",0,.35,.55));for(let Se of[-.61,.61])W.box(-2.04,.93,Se,.034,.2,.37,a("#eee8cf",0,.14,.3,.15));W.box(-2.05,.58,0,.034,.16,.28,a("#decb71")),W.box(.26,2.91,-.17,.53,.17,.44,Q.whiteMetal),W.cylinder([1.3,2.8,-.48],[1.3,3,-.48],.11,.11,Q.metal,12);for(let Se of[-1.06,1.06])W.cylinder([-1.65,1.61,Se*.83],[-1.65,1.62,Se],.02,.02,Q.dark,6),W.box(-1.64,1.64,Se,.1,.19,.05,Q.dark);W.quad([-.9,2.56,.94],[-.9,2.3,2.03],[1.76,2.3,2.03],[1.76,2.56,.94],a("#f6efdf",6),2,1),W.box(.43,2.22,2.02,2.7,.18,.02,a(N.F,6));for(let Se of[-.82,1.69])W.cylinder([Se,1.71,.96],[Se,2.3,1.95],.017,.017,Q.metal,6)}),C.scope(n.compose(v[0],.38,v[1],I),()=>Et(C,o)),rt.scope(n.compose(v[0],0,v[1],I),()=>{rt.sign(.42,2.67,.945,2.54,.48,x[o.id].banner),gt(rt,-.4,2.28,x[o.id].menu,.1)});let ie=[Math.sin(I),Math.cos(I)],z=[Math.cos(I),-Math.sin(I)];qe(v[0],v[1],Math.abs(z[0])*4.03+Math.abs(ie[0])*1.93,Math.abs(z[1])*4.03+Math.abs(ie[1])*1.93,o.id),o.approach=[v[0]+ie[0]*3.3,v[1]+ie[1]*3.3],o.marker=[v[0]+ie[0]*1.45,3.42,v[1]+ie[1]*1.45],ye.push(o)}let an=0;for(let o of f.records)o.kind==="tent"?$t(o):o.kind==="truck"&&Ft(o,an++);let Ye=f.locations.find(o=>o.id==="HQ");Ye.width=6.9,$t(Ye);let Qt=f.locations.find(o=>o.id==="OUTSTAGE"),Ce=Qt.pos;ee.box(Ce[0],.28,Ce[1],7.2,.56,1.8,Q.wood),qe(Ce[0],Ce[1],7.2,1.8,"屋外ステージ");for(let o of[-1.8,0,1.8])C.box(Ce[0]+o,.563,Ce[1],.012,.009,1.8,Q.dark);C.box(Ce[0],.563,Ce[1],7.2,.009,.012,Q.dark);for(let o of[-1,1])C.box(Ce[0]+o*4.05,.14,Ce[1]+.5,.72,.28,.72,Q.base),C.cylinder([Ce[0]+o*3.9,.04,Ce[1]-.4],[Ce[0]+o*3.9,3.2,Ce[1]-.4],.033,.033,Q.metal,7),C.box(Ce[0]+o*3.9,2.5,Ce[1]-.4,.48,.85,.35,Q.black);let qt=Ce[1]-1.65,dn=Ce[1]-3.75;for(let o of[-1,1])C.cylinder([Ce[0]+o*4,.1,qt],[Ce[0]+o*4,.12,dn],.035,.035,Q.metal,8);C.cylinder([Ce[0]-4,.1,qt],[Ce[0]+4,.1,qt],.035,.035,Q.metal,8);for(let o of[-1,1])C.cylinder([Ce[0]+o*4,.1,qt],[Ce[0]+o*4,2.1,qt],.035,.035,Q.metal,8);C.cylinder([Ce[0]-4,2.1,qt],[Ce[0]+4,2.1,qt],.035,.035,Q.metal,8),C.cylinder([Ce[0]-4,.12,dn],[Ce[0]+4,.12,dn],.035,.035,Q.metal,8),C.quad([Ce[0]-4,.12,dn],[Ce[0]-4,.1,qt],[Ce[0]+4,.1,qt],[Ce[0]+4,.12,dn],a("#a7b0a6",11,.75),6,2);let ei=d.add("stage-k-estate",(o,p)=>{o.fillStyle="#f7f7f2",o.fillRect(0,0,p,p),o.fillStyle="#9e3235",o.fillRect(0,0,p,92),o.fillStyle="#fff",o.textAlign="center",o.font="700 24px sans-serif",o.fillText("SHONAN REAL ESTATE",p/2,55),o.fillStyle="#24516b",o.font="700 69px sans-serif",o.fillText("K ESTATE",p/2,255),o.fillStyle="#5c7989",o.font="600 24px sans-serif",o.fillText("K エステート",p/2,315)});for(let o=-1;o<=1;o++){let p=Ce[0]+o*2.52,v=2.42;rt.quad([p-v/2,2.02,qt+.06],[p-v/2,.13,qt+.06],[p+v/2,.13,qt+.06],[p+v/2,2.02,qt+.06],a("#ffffff",ei,.9,0,.06))}let Rn=Ce[0]+5.15,St=Ce[1]+2.6;C.box(Rn,1.5,St,1.26,.73,.12,Q.black),C.box(Rn,1.5,St+.07,1.22,.69,.025,a("#303c3d",0,.32,.08)),C.cylinder([Rn,.08,St],[Rn,1.13,St],.055,.055,Q.metal,8),C.box(Rn,.06,St,.62,.12,.47,Q.dark);for(let o of[.2,1.2])Xe(C,Ce[0]+5.5,Ce[1]+o,1.32,.63,0);C.box(Ce[0]+5.5,.85,Ce[1]+1.2,.56,.18,.39,Q.dark);for(let o of[.2,1.2])Fe(C,Ce[0]+5.5,Ce[1]+o+1,0,"#4a5558");C.cylinder([Ce[0]+6.45,.37,Ce[1]-1.5],[Ce[0]+6.82,.37,Ce[1]-1.5],.23,.23,Q.dark,12),qe(Rn,St,1.3,.5,"大型モニター");let Lt=[Ce[0]-5.8,Ce[1]+.4];C.scope(n.compose(Lt[0],0,Lt[1],0),()=>{$e(C,3,2.8,Q.fabric);for(let o of[-1.45,1.45])for(let p of[-1.3,1.3])C.cylinder([o,.04,p],[o,2.15,p],.025,.025,Q.metal,7)}),Xe(C,Lt[0]+.35,Lt[1]+.45,1.55,.7,0);for(let o=0;o<15;o++)C.box(Lt[0]-1+o%5*.45,.2+Math.floor(o/5)*.4,Lt[1]-.7,.41,.38,.48,Q.wood);qe(Lt[0],Lt[1],3,2.8,"屋外ステージのポップアップテント"),C.cylinder([Ce[0],.6,Ce[1]+.1],[Ce[0],1.9,Ce[1]+.1],.018,.018,Q.black,7),C.cylinder([Ce[0],1.9,Ce[1]+.1],[Ce[0]+.36,2.08,Ce[1]+.22],.018,.018,Q.black,7),rt.sign(Ce[0],.34,Ce[1]+.914,6.75,.5,x.OUTSTAGE.banner),Qt.approach=[Ce[0],Ce[1]+3.2],Qt.marker=[Ce[0],2.1,Ce[1]],ye.push(Qt);for(let o of f.locations.filter(p=>["MEET","EAT2","WC"].includes(p.id)))o.approach=o.pos,o.marker=[o.pos[0],2.5,o.pos[1]],ye.push(o),o.id==="WC"&&rt.scope(n.compose(o.pos[0],0,o.pos[1],0),()=>{rt.sign(0,2.4,0,2.2,.53,d.banner("WC","体育館南側・トイレ","当日のトイレ",N.I))});e(.45,"木々・遊具・モビリティ走路を作っています");let ti=[[192,116],[225,94],[306,91],[391,108],[436,132],[443,164],[423,178],[350,179],[294,162],[252,141],[209,143]];function Ot(o,p=12){let v=[];for(let I=0;I<o.length;I++){let U=o[(I-1+o.length)%o.length],G=o[I],W=o[(I+1)%o.length],ie=o[(I+2)%o.length];for(let z=0;z<p;z++){let Se=z/p,Le=Se*Se,Oe=Le*Se;v.push([0,1].map(Be=>.5*(2*G[Be]+(-U[Be]+W[Be])*Se+(2*U[Be]-5*G[Be]+4*W[Be]-ie[Be])*Le+(-U[Be]+3*G[Be]-3*W[Be]+ie[Be])*Oe)))}}return v}let Zt=Ot(ti.map(o=>P(...o)),16),In=0,Ei=[0],Cc=Zt.map((o,p)=>{let v=Zt[(p-1+Zt.length)%Zt.length],I=Zt[(p+1)%Zt.length],U=I[0]-v[0],G=I[1]-v[1],W=Math.hypot(U,G);return[-G/W,U/W]});for(let o=0;o<Zt.length;o++){let p=(o+1)%Zt.length,v=Zt[o],I=Zt[p],U=Cc[o],G=Cc[p],W=Math.hypot(I[0]-v[0],I[1]-v[1]);if(In+=W,Ei.push(In),ee.quad([v[0]-U[0],.035,v[1]-U[1]],[v[0]+U[0],.035,v[1]+U[1]],[I[0]+G[0],.035,I[1]+G[1]],[I[0]-G[0],.035,I[1]-G[1]],a("#bba990",1,.98),2,W),o%8<4)for(let ie of[-1,1])ze(C,[v[0]+U[0]*.95*ie,v[1]+U[1]*.95*ie],[I[0]+G[0]*.95*ie,I[1]+G[1]*.95*ie],.085,a("#f3e8d0"),.043)}let cs=Ot([[171,90],[281,77],[395,95],[452,128],[458,179],[436,190],[330,190],[281,174],[245,151],[176,150]].map(o=>P(...o)),5);function $o(o,p,v=.65,I=!1,U=!1){let G=Math.hypot(p[0]-o[0],p[1]-o[1]),W=Math.max(1,Math.ceil(G/2.2)),ie=I?a("#a48d66",5):a("#dedfd4",0,.45,.35);for(let z=0;z<=W;z++){let Se=o[0]+(p[0]-o[0])*z/W,Le=o[1]+(p[1]-o[1])*z/W;C.cylinder([Se,.05,Le],[Se,v+.05,Le],I?.045:.025,I?.042:.025,ie,7),I||C.box(Se,.035,Le,.28,.07,.34,Q.base)}for(let z of[v*.4,v])C.cylinder([o[0],z,o[1]],[p[0],z,p[1]],I?.036:.021,I?.036:.021,ie,7);U&&C.quad([o[0],.15,o[1]],[o[0],v,o[1]],[p[0],v,p[1]],[p[0],.15,p[1]],a("#a2aa9a",11,.82),G/1.1,v/1.1)}for(let o=0;o<cs.length;o++)$o(cs[o],cs[(o+1)%cs.length],.65);let Pn=f.locations.find(o=>o.id==="MOBILITY");Pn.approach=[Pn.pos[0]-2,Pn.pos[1]+2.1],Pn.marker=[Pn.pos[0],2.8,Pn.pos[1]],ye.push(Pn),C.scope(n.compose(Pn.pos[0],0,Pn.pos[1],0),()=>{$e(C,3,2.7,a("#f1e5cc",6));for(let o of[-1.45,1.45])for(let p of[-1.3,1.3])C.cylinder([o,.05,p],[o,2.2,p],.026,.026,Q.metal,7)}),rt.sign(Pn.pos[0],2.1,Pn.pos[1]+1.37,2.85,.65,x.MOBILITY.banner),gt(rt,Pn.pos[0]-.2,Pn.pos[1]+.3,$,-.3);function Rc(o){let p=(o%In+In)%In,v=0;for(;v<Zt.length-1&&Ei[v+1]<p;)v++;let I=Zt[v],U=Zt[(v+1)%Zt.length],G=(p-Ei[v])/(Ei[v+1]-Ei[v]);return{x:I[0]+(U[0]-I[0])*G,z:I[1]+(U[1]-I[1])*G,yaw:Math.atan2(U[0]-I[0],U[1]-I[1])}}let kt=new s,Ko=new s,Ys=a("#d5d8d1",0,.39,.18),Ic=a("#91a7a6",0,.21,.55);kt.box(0,.46,-.2,1.22,.2,2.3,Q.dark),kt.box(0,.84,-.94,1.24,.65,.72,Ys),kt.box(0,1.02,-.74,1.12,.25,.7,a("#465052",0,.75)),kt.box(0,.82,.22,1.23,.16,1.18,Ys),kt.sphere(0,.87,.95,.68,.61,.25,Ys,18,10);let mi=Array.from({length:17},(o,p)=>(p-8)*.07),hs=Array.from({length:9},(o,p)=>p/8),Ai=(o,p)=>{let v=Math.abs(o)/.56;return[o,1.22+p*(.69-.1*v*v),1.17-.56*p-.13*v*v]},qr=(o,p)=>{let v=-.2*p*o/.31360000000000005,I=-.26*o/(.56*.56),U=.69-.1*(o/.56)**2,G=[v*-.56-I*U,.56,U],W=Math.hypot(...G);return G.map(ie=>ie/W)};for(let o=0;o<hs.length-1;o++)for(let p=0;p<mi.length-1;p++){let v=mi[p],I=mi[p+1],U=hs[o],G=hs[o+1],W=Ai(v,U),ie=Ai(v,G),z=Ai(I,G),Se=Ai(I,U),Le=qr(v,U),Oe=qr(v,G),Be=qr(I,G),et=qr(I,U);Ko.tri(ie,W,Se,Ic,[[0,1],[0,0],[1,0]],[Oe,Le,et]),Ko.tri(ie,Se,z,Ic,[[0,1],[1,0],[1,1]],[Oe,et,Be])}let Yr=a("#252c2d",0,.68,.12);for(let o of[0,1])for(let p=0;p<mi.length-1;p++)kt.cylinder(Ai(mi[p],o),Ai(mi[p+1],o),.021,.021,Yr,7);for(let o of[-.56,.56])for(let p=0;p<hs.length-1;p++)kt.cylinder(Ai(o,hs[p]),Ai(o,hs[p+1]),.024,.024,Yr,7);let gi=(o,p)=>{let v=Math.abs(o)/.56;return[o,1.91-.1*v*v-.03*Math.max(0,-p),p-.13*v*v]};for(let o=0;o<mi.length-1;o++){let p=mi[o],v=mi[o+1];kt.quad(gi(p,.61),gi(p,-1.12),gi(v,-1.12),gi(v,.61),Ys),kt.cylinder(gi(p,-1.12),gi(v,-1.12),.018,.018,Yr,7)}for(let o of[-.56,.56])kt.cylinder(gi(o,.61),gi(o,-1.12),.027,.027,Yr,8),kt.cylinder([o,.58,-1.07],gi(o,-1.12),.026,.026,Q.metal,8);for(let o of[-.65,.65])kt.box(o,.55,-.05,.14,.12,1.65,Ys),kt.box(o,1.14,-1,.07,.48,.07,Q.dark),kt.box(o,1.08,.8,.08,.54,.08,Q.dark);kt.box(0,1.15,-.59,.96,.2,.48,a("#333b3c",0,.75)),kt.box(0,1.03,.44,.77,.09,.36,Q.dark),kt.sphere(0,.99,1.19,.15,.15,.065,Q.dark,12,8);for(let o of[-.42,.42])kt.box(o,1.02,1.17,.29,.07,.035,a("#f0ebd9",0,.35,.1,.2));for(let o of[-.55,.55])kt.scope(n.compose(o,.34,-1.02,Math.PI/2),()=>Ut(kt,0,0,0,o>0?1:-1,.34));kt.scope(n.compose(0,.34,1.2,Math.PI/2),()=>Ut(kt,0,0,0,1,.34)),kt.cylinder([-.4,1.23,.72],[.4,1.23,.72],.025,.025,Q.dark,9);for(let o of[-.69,.69])kt.cylinder([o,1.33,.8],[o*1.13,1.37,1],.02,.02,Q.dark,7),kt.box(o*1.13,1.39,1.02,.19,.11,.055,Q.dark);let Pu=d.banner("DEMO","電動トライク","車体色は仮表示","#53605b");kt.scope(n.compose(.69,0,-.65,Math.PI/2),()=>kt.sign(0,.92,0,1.3,.3,Pu));let Zs=f.records.find(o=>o.kind==="goat"),Dt=Zs.pos,Js=6.5,ni=6.3,jo=[[Dt[0]-Js/2,Dt[1]-ni/2],[Dt[0]+Js/2,Dt[1]-ni/2],[Dt[0]+Js/2,Dt[1]+ni/2],[Dt[0]-Js/2,Dt[1]+ni/2]];dt(jo,ee,a("#c7bb89",2,.97),2);for(let o=0;o<4;o++)$o(jo[o],jo[(o+1)%4],1.1,!0);qe(Dt[0],Dt[1],Js,ni,"ヤギ牧場"),Zs.approach=[Dt[0],Dt[1]+ni/2+3.1],Zs.marker=[Dt[0],2.5,Dt[1]+ni/2],ye.push(Zs),rt.sign(Dt[0],2.72,Dt[1]+ni/2+.06,3.4,.68,x[Zs.id].banner);for(let o of[-1,1])C.cylinder([Dt[0]+o*1.6,.05,Dt[1]+ni/2],[Dt[0]+o*1.6,3.09,Dt[1]+ni/2],.05,.05,Q.wood,7);C.box(Dt[0]-2,.26,Dt[1]-1.7,.9,.48,1.4,a("#b6a166",2)),C.cylinder([Dt[0]+2,.05,Dt[1]-2],[Dt[0]+2,.28,Dt[1]-2],.35,.38,a("#6b8990",0,.3,.4),18);function Lu(){let o=new s,p=a("#e9e4d5",0,.95),v=a("#776654",0,.92);o.sphere(0,.73,0,.3,.29,.54,p,18,10),o.cylinder([0,.85,.3],[0,1.13,.52],.18,.14,p,14),o.sphere(0,1.19,.61,.15,.18,.24,p,16,10),o.sphere(0,1.1,.78,.12,.1,.1,v,12,7);for(let I of[-1,1]){o.sphere(I*.22,1.26,.48,.19,.055,.085,p,12,7),o.sphere(I*.137,1.22,.67,.015,.024,.025,Q.black,8,6),o.cylinder([I*.09,1.31,.51],[I*.11,1.48,.38],.039,.021,v,9),o.cylinder([I*.11,1.48,.38],[I*.1,1.55,.27],.021,.009,v,8);for(let U of[-.32,.33])o.cylinder([I*.19,.6,U],[I*.18,.12,U+.03],.046,.03,p,9),o.box(I*.18,.07,U+.05,.09,.1,.14,v)}return o.cylinder([0,.92,-.46],[0,1.06,-.62],.035,.016,p,9),o.cylinder([0,1.08,.77],[0,.92,.72],.045,.01,p,9),o}let Xi=f.records.find(o=>o.kind==="baseball");Xi.locationSource="配置ゾーニング 9月21日 Ver.6案（1ページ）";let en=Xi.pos;Xi.approach=[en[0]+9,en[1]+2],Xi.marker=[en[0]+8,2.8,en[1]+1],ye.push(Xi),rt.sign(en[0]+8,1.8,en[1]+1,4,.82,x[Xi.id].banner);for(let o of[-1,1])C.cylinder([en[0]+8+o*1.9,.08,en[1]+1],[en[0]+8+o*1.9,2.3,en[1]+1],.035,.035,Q.metal,7);for(let o of[[-3,-2],[0,-5],[3,-2],[0,1]])C.box(en[0]+o[0],.052,en[1]+o[1],.34,.045,.34,a("#e8e2c8"));C.cylinder([en[0]+4,.08,en[1]+2],[en[0]+4.4,.1,en[1]+3.05],.022,.045,a("#b49566",5),9),C.sphere(en[0]+4.25,.095,en[1]+2.2,.074,.074,.074,a("#e9e6dc"),12,8);let Du=d.add("baseball-net",(o,p)=>{o.clearRect(0,0,p,p),o.strokeStyle="#becab2",o.lineWidth=4,o.beginPath();for(let v=0;v<=p;v+=64)o.moveTo(v,0),o.lineTo(v,p),o.moveTo(0,v),o.lineTo(p,v);o.stroke()}),Nu=d.add("baseball-flag",(o,p)=>{o.fillStyle="#672d3d",o.fillRect(0,0,p,p);for(let v=0;v<p;v+=3)o.fillStyle=v%6?"rgba(233,208,172,.035)":"rgba(0,0,0,.055)",o.fillRect(v,0,1,p);o.strokeStyle="#d0b792",o.lineWidth=3,o.strokeRect(9,9,p-18,p-18),o.textAlign="center",o.fillStyle="#f4d990",o.font='700 27px "Yu Gothic",sans-serif',o.fillText("オール西鎌倉少年野球クラブ",p/2,64,475),o.fillStyle="#f5ead8",o.font="bold 170px Georgia,serif",o.fillText("N",p/2,305),o.fillStyle="#df6358",o.font='700 93px "Yu Mincho",serif',o.fillText("必",90,293),o.fillText("勝",424,293),o.strokeStyle="#d1d0ac",o.lineWidth=6;for(let v of[-1,1]){o.beginPath(),o.moveTo(p/2,396),o.quadraticCurveTo(p/2+v*120,357,p/2+v*103,186),o.stroke();for(let I=0;I<10;I++){let U=I/9,G=p/2+v*(22+81*Math.sin(U*Math.PI/2)),W=380-U*181;o.save(),o.translate(G,W),o.rotate(v*(.8+U*.4)),o.fillStyle="#d4d4b5",o.beginPath(),o.ellipse(0,0,5,16,0,0,Math.PI*2),o.fill(),o.restore()}}}),Uu=d.sign("baseball-board",Xi.name,"野球体験","#672d3d","T-5");C.scope(n.compose(en[0],0,en[1]),()=>{let o=a("#38674d",0,.65,.15),p=a("#476e48",Du,.95),v=a("#eeeadd",0,.97);function I(G,W,ie,z,Se=0){C.scope(n.compose(G,0,W,Se),()=>{for(let Le of[-1,1]){let Oe=Le*ie/2;C.cylinder([Oe,.04,0],[Oe,z,0],.029,.029,o,8),C.cylinder([Oe,.04,-.65],[Oe,.04,.65],.025,.025,o,8),C.cylinder([Oe,.05,.6],[Oe,1,0],.023,.023,o,8)}C.cylinder([-ie/2,z,0],[ie/2,z,0],.025,.025,o,8),C.quad([-ie/2,.09,0],[-ie/2,z-.02,0],[ie/2,z-.02,0],[ie/2,.09,0],p,ie/.8,z/.8),C.cylinder([-ie/2,.1,0],[ie/2,.1,0],.045,.045,o,8)})}I(3.4,-1.3,4.8,3.3),I(-4,-5.5,2.4,2.5,.35),I(-9,-2,2.4,2.5,-.2),C.sign(2.4,2.22,-1.25,2,1.48,Nu);for(let G of[1.46,3.34])C.cylinder([G,2.98,-1.24],[G,3.28,-1.3],.009,.009,a("#d9d4b4"),6);Xe(C,.1,1,1.8,.72,0,!1,!1),Fe(C,-1.15,1.05,.18,"#3e4647"),Fe(C,7.1,-.4,-.35,"#42484d"),C.scope(n.compose(.15,.72,1.05,-.08),()=>C.sign(0,.48,0,.78,.83,Uu,!0)),C.box(-.55,.89,.98,.38,.24,.3,a("#778c87",0,.8));for(let G=0;G<5;G++)C.cylinder([-.7+G*.068,.99,.99],[-.7+G*.068,1.16,.99],.014,.014,a(G%2?"#c6a264":"#edddb0"),6);function U(G,W,ie){for(let z=0;z<48;z++){let Se=z/48*_,Le=(z+1)/48*_,Oe=(Be,et)=>[G+Math.cos(Be)*et,.043,W+Math.sin(Be)*et];C.quad(Oe(Se,ie-.025),Oe(Le,ie-.025),Oe(Le,ie+.025),Oe(Se,ie+.025),v)}}for(let[G,W,ie]of[[2,5.2,!1],[7.8,5.5,!1],[-3,2.5,!0]]){U(G,W,.66);let z=a(ie?"#388faf":"#e5cc57",0,.9);C.box(G,.035,W,.34,.06,.34,z),C.cylinder([G,.06,W],[G,.62,W],.145,.022,z,12)}for(let G of[3.9,4.65,5.4]){let W=a("#78b3ce",0,.78);C.cylinder([G,.04,3.8],[G,.4,3.8],.21,.16,W,16),C.cylinder([G,.037,3.8],[G,.071,3.8],.225,.222,W,16)}for(let G of[-1.9,6])C.box(G,.044,-3.7,.06,.015,7.2,v);C.box(2.05,.044,-7.3,7.9,.015,.06,v),C.box(2.05,.044,-.1,7.9,.015,.06,v),C.box(3.5,.044,7.1,11.5,.015,.06,v)});let Qo=(o,p,v)=>o+v>m[0]&&o-v<H[0]&&p+v>m[1]&&p-v<H[1];function Fu(o,p,v=7,I=!1){let U=P(o,p),G=U[0],W=U[1],ie=h(Math.round(o*721+p*91)),z=p>=410&&p<=420?{132:[6.8,.53,!1],152:[6.3,.56,!1],175:[7.6,.26,!0],252:[7.8,.28,!0]}[o]:null;z&&(v=z[0]);let Se=C;Se.cylinder([G,0,W],[G+.12,v*.57,W-.1],.19,.08,Q.bark,11);for(let Le=0;Le<6;Le++){let Oe=Le*_/6+ie(),Be=[G,v*.34+ie()*.6,W],et=[G+Math.cos(Oe)*v*.27,v*(.62+ie()*.17),W+Math.sin(Oe)*v*.27];if(!Qo((Be[0]+et[0])/2,(Be[2]+et[2])/2,Math.max(Math.abs(Be[0]-et[0]),Math.abs(Be[2]-et[2]))/2+.08)){Se.cylinder(Be,et,.073,.026,Q.bark,8);for(let Wt=0;Wt<3;Wt++){let zt=[et[0]+(ie()-.5)*1.4,et[1]+ie()*1.05,et[2]+(ie()-.5)*1.4];Qo((et[0]+zt[0])/2,(et[2]+zt[2])/2,Math.max(Math.abs(et[0]-zt[0]),Math.abs(et[2]-zt[2]))/2+.03)||Se.cylinder(et,zt,.029,.01,Q.bark,7)}}}for(let Le=0;Le<(z?180:52);Le++){let Oe=ie()*_,Be=Math.sqrt(ie())*v*(z?z[1]:.38),et=G+Math.cos(Oe)*Be,Wt=W+Math.sin(Oe)*Be,zt=v*(z?.57:.7)+ie()*v*(z?.38:.25)-Be/v*.8,wt=v*(z?.12+ie()*.09:.19+ie()*.13),on=ie()*_,Ln=(z?z[2]:I)?Q.autumn:Q.leaf;Qo(et,Wt,wt*.71)||Ve.scope(n.compose(et,zt,Wt,on),()=>{Ve.quad([-wt/2,-wt/2,0],[-wt/2,wt/2,0],[wt/2,wt/2,0],[wt/2,-wt/2,0],Ln),Ve.quad([-wt/2,0,-wt/2],[-wt/2,0,wt/2],[wt/2,0,wt/2],[wt/2,0,-wt/2],Ln)})}xe.push({x:G,z:W,r:.26})}[[143,54],[176,48],[207,47],[234,46],[270,45],[301,48],[366,63],[399,73],[431,85],[464,98],[496,116],[532,131],[561,151],[566,206],[566,240],[568,275],[581,361],[582,414],[581,521],[579,566],[568,627],[547,692],[509,719],[480,730],[432,738],[404,742],[371,748],[323,757],[282,759],[243,764],[205,769],[168,773],[130,775],[92,750],[83,712],[75,671],[53,584],[32,527],[38,382],[62,335],[68,159],[132,418],[152,418],[175,413],[252,412],[283,414],[321,415],[348,419],[381,417],[417,418],[420,396]].forEach((o,p)=>Fu(o[0],o[1],S(5.8,8.7),p%3!==0));let qn=P(525,171);for(let o=0;o<6;o++){let p=qn[0]+o*1.5;C.cylinder([p,.03,qn[1]],[p,2.45,qn[1]],.033,.033,a("#287b9c",0,.5,.35),8),C.cylinder([p,2.45,qn[1]],[p,2.45,qn[1]+1.1],.025,.025,Q.metal,8),C.cylinder([p,.03,qn[1]+1.1],[p,2.45,qn[1]+1.1],.033,.033,a("#287b9c"),8)}for(let o of[qn[1],qn[1]+1.1])C.cylinder([qn[0],2.45,o],[qn[0]+7.5,2.45,o],.03,.03,Q.metal,8);let Zr=P(514,238);for(let o=0;o<4;o++)for(let p=0;p<4;p++){let v=Zr[0]+o*.7,I=Zr[1]+p*.7;C.cylinder([v,.02,I],[v,2.1,I],.022,.022,a("#287b9c"),7);for(let U=.7;U<2.2;U+=.7)o<3&&C.cylinder([v,U,I],[v+.7,U,I],.02,.02,a("#287b9c"),7),p<3&&C.cylinder([v,U,I],[v,U,I+.7],.02,.02,a("#287b9c"),7)}qe(Zr[0]+1.05,Zr[1]+1.05,2.3,2.3,"遊具");for(let o=0;o<Qe.length;o++){let p=Qe[o],v=Qe[(o+1)%Qe.length];o===6||o===15||o===16||$o(p,v,1.55,!1,!0)}for(let o of["GATE_MAIN","GATE_WEST"]){let p=f.locations.find(U=>U.id===o),v=p.pos,I=o==="GATE_MAIN"?-Math.PI/4:.7;C.scope(n.compose(v[0],0,v[1],I),()=>{for(let U of[-1,1])C.box(U*2.6,1,0,.52,2,.58,Q.wall),C.box(U*2.6,2.03,0,.6,.08,.64,Q.base),C.cylinder([U*2.75,.05,.25],[U*2.75,3.35,.25],.036,.036,Q.metal,9);if(o==="GATE_MAIN"){let U=a("#586567",0,.54,.35),G=a("#aeb0a7",3,.96);for(let W of[-1,1]){C.box(W*4.4,.47,0,3.05,.94,.58,G),C.box(W*4.4,.96,0,3.13,.08,.68,Q.base);for(let ie=.24;ie<=2.64;ie+=.24)C.cylinder([W*2.45,.22,ie],[W*2.45,1.52,ie],.019,.019,U,6);for(let ie of[.23,1.51])C.cylinder([W*2.45,ie,.18],[W*2.45,ie,2.72],.026,.026,U,6)}}C.sign(0,3.12,.25,5.7,.96,V)}),p.approach=o==="GATE_MAIN"?[49,75]:[-43,-38],p.marker=[v[0],3.75,v[1]],ye.push(p)}{let o=f.locations.find(p=>p.id==="GATE_WEST");C.scope(n.compose(o.pos[0],0,o.pos[1],.7),()=>{C.box(0,.045,1.15,5.05,.09,3.75,a("#b7b5a8",3,.96));for(let p of[-1,1]){C.box(p*3.24,.33,1.25,.52,.66,4.1,a("#a3a59a",3,.98)),C.box(p*3.24,.7,1.25,.61,.085,4.25,a("#c7c9ba",3,.93));for(let v of[-.52,.55,1.62,2.69])C.box(p*3.24,.34,v,.54,.42,.023,a("#898e83",3,.96))}})}let el=new s,Ou=d.sign("flag",`つながり
フェスタ`,`＠にしかま
2026`,"#366568","");el.animate([0,0,0],9,()=>el.quad([.05,2.8,0],[.05,1,0],[.62,1,0],[.62,2.8,0],a("#fff",Ou,.8)));let Pc=[];for(let o of[[448,520],[440,611],[543,622],[468,407],[282,378],[130,128],[461,296]]){let p=P(...o);C.cylinder([p[0],.03,p[1]],[p[0],3,p[1]],.016,.014,Q.whiteMetal,8),C.box(p[0],.055,p[1],.48,.1,.4,a("#dedfd6")),Pc.push({matrix:n.compose(p[0],0,p[1],-.3),info:[S(0,6),0,0,0]})}for(let o of[[465,441],[459,446],[456,452],[458,463],[445,472],[552,651],[542,651],[178,166]]){let p=P(...o);C.box(p[0],.035,p[1],.32,.07,.32,a("#b1543e")),C.cylinder([p[0],.06,p[1]],[p[0],.63,p[1]],.125,.022,a("#c7793c"),10),C.cylinder([p[0],.32,p[1]],[p[0],.4,p[1]],.072,.061,a("#e6ddc7"),10)}function Lc(o,p,v=25){let I=P(o,p),U=7;for(let G=0;G<U;G++){let W=G/U*v,ie=(G+1)/U*v,z=2.4-G/U*1.6,Se=2.4-(G+1)/U*1.6;for(let Le of[-1,1])for(let Oe of[-1,1])C.cylinder([I[0]+Le*z,W,I[1]+Oe*z],[I[0]+Le*Se,ie,I[1]+Oe*Se],.06,.045,Q.metal,6),C.cylinder([I[0]+Le*z,W,I[1]+Oe*z],[I[0]-Le*Se,ie,I[1]+Oe*Se],.026,.026,Q.metal,6),C.cylinder([I[0]+Le*z,W,I[1]+Oe*z],[I[0]+Le*Se,ie,I[1]-Oe*Se],.026,.026,Q.metal,6)}for(let G of[v*.71,v*.87,v]){C.cylinder([I[0]-5,G,I[1]],[I[0]+5,G,I[1]],.065,.065,Q.metal,7);for(let W of[-1,1])C.cylinder([I[0]+W*.9,G-1.8,I[1]],[I[0]+W*5,G,I[1]],.04,.04,Q.metal,6),C.cylinder([I[0]+W*4.7,G,I[1]],[I[0]+W*4.7,G-1,I[1]],.09,.09,a("#9b9d84"),10)}return qe(I[0],I[1],5,5,"鉄塔"),I}let Jr=Lc(322,56,26),Dc=Lc(548,194,26);for(let o of[-4.7,4.7])for(let p of[18.46,22.62,26]){let v=[];for(let I=0;I<=36;I++){let U=I/36;v.push([Jr[0]+(Dc[0]-Jr[0])*U+o,p-1-3.4*Math.sin(U*Math.PI),Jr[1]+(Dc[1]-Jr[1])*U])}C.tube(v,.035,Q.dark,5)}let xi=new s;for(let o=0;o<27;o++){let p=o/27*_,v=125+S(0,35),I=o<9?o<4?-151:-83:o<18?84:-66+(o-18)*16.5,U=o<9?-42+o*17:o<18?-21+(o-9)*17:132,G=S(6,10),W=S(6,11),ie=S(5.2,7.3);xi.scope(n.compose(0,FestaScenery.height(I,U),0),()=>{xi.box(I,ie/2,U,G,ie,W,a(["#ddd8c9","#c4ccca","#e6e0d4","#b8b9ac"][o%4],3,.9));let z=a(["#676f70","#8a7163","#5d6966"][o%3],10,.7);xi.tri([I-G/2-.35,ie,U-W/2-.35],[I+G/2+.35,ie,U-W/2-.35],[I,ie+2,U-W/2-.35],z),xi.tri([I+G/2+.35,ie,U+W/2+.35],[I-G/2-.35,ie,U+W/2+.35],[I,ie+2,U+W/2+.35],z),xi.quad([I-G/2-.35,ie,U-W/2-.35],[I-G/2-.35,ie,U+W/2+.35],[I,ie+2,U+W/2+.35],[I,ie+2,U-W/2-.35],z,3,3),xi.quad([I,ie+2,U-W/2-.35],[I,ie+2,U+W/2+.35],[I+G/2+.35,ie,U+W/2+.35],[I+G/2+.35,ie,U-W/2-.35],z,3,3);for(let Se=0;Se<3;Se++)xi.box(I+(Se-1)*2.1,ie*.62,U+W/2+.02,1.15,1.35,.03,Q.glass)})}let Bu=d.banner("WC","にしかまくら子どもの家・トイレ","当日のトイレ","#426861");FestaScenery.build({details:C,green:Ve,distant:xi,signGeo:rt,childSign:Bu,p:P,m:Q,mat:a,M:n,rng:h,TAU:_,ga:m,gb:H,gc:k,gw:oe,gd:we,gymRise:he});function qi(o,p,v=.26){if(!ct(o,p,Qe)||ct(o,p,cs))return!1;for(let I of ut){let U=Math.max(Math.abs(o-I.x)-I.w/2,0),G=Math.max(Math.abs(p-I.z)-I.d/2,0);if(U*U+G*G<v*v)return!1}for(let I of xe)if(Math.hypot(o-I.x,p-I.z)<v+I.r)return!1;return!0}function tl(o,p){return o>=m[0]+.05&&o<=H[0]-.15&&p>=m[1]+.05&&p<=H[1]-.05?he:o>=m[0]-1.65&&o<m[0]+.05&&jt.some(([v,I])=>p>=P(Y,v)[1]+.15&&p<=P(Y,I)[1]-.15)?he*g((o-m[0]+1.65)/1.7,0,1):0}function $s(o,p=10){if(qi(o[0],o[1],.31))return[...o];for(let v=.4;v<=p;v+=.35)for(let I=0;I<32;I++){let U=I*_/32,G=o[0]+Math.sin(U)*v,W=o[1]+Math.cos(U)*v;if(qi(G,W,.31))return[G,W]}return null}let nl=f.locations.find(o=>o.id==="GYM");nl.approach=[k[0],m[1]+18.8],nl.marker=[k[0],3.1+he,m[1]+18.8],ye.push(nl);for(let o of ye)o.id==="WC"&&(o.approach=[(tt+Ae)/2,H[1]+5.5]),o.approach=$s(o.approach)||$s(o.pos);e(.62,"来場者・ヤギ・走行車両の動きを準備しています");function Nc(o=0){let p=new s,v=a(["#7f9c9a","#d8c5ad","#a76250","#4c6670","#787c58","#b7b4a9","#655c73","#e3d1b1"][o%8],6,.93),I=a(["#41494e","#746854","#4a575a","#485669"][o%4],6,.91),U=a(["#cba584","#d8b69a","#bc9879","#d0ad8c"][o%4],0,.78),G=a(["#383733","#4b4137","#77756e"][o%3],0,.96),W=[[.88,.19,.126],[.98,.19,.13],[1.16,.218,.148],[1.32,.243,.144],[1.385,.222,.127],[1.445,.075,.064]];for(let ie=0;ie<W.length-1;ie++)for(let z=0;z<20;z++){let Se=z/20*_,Le=(z+1)/20*_,Oe=W[ie],Be=W[ie+1],et=(Wt,zt)=>[Math.cos(zt)*Wt[1],Wt[0],Math.sin(zt)*Wt[2]];p.quad(et(Oe,Se),et(Be,Se),et(Be,Le),et(Oe,Le),v,1,1)}p.cylinder([0,1.4,0],[0,1.49,0],.061,.062,U,10),p.sphere(0,1.57,.012,.114,.142,.107,U,16,11),p.sphere(0,1.575,-.009,.116,.145,.11,G,20,10,0,1.26),p.sphere(0,1.58,.127,.017,.032,.024,U,10,7);for(let ie of[-1,1])p.sphere(ie*.111,1.57,.008,.024,.042,.026,U,9,7),p.sphere(ie*.039,1.601,.111,.009,.004,.005,Q.black,8,5),p.cylinder([ie*.026,1.621,.104],[ie*.053,1.621,.098],.004,.004,G,5),p.animate([ie*.23,1.37,0],ie,()=>{p.sphere(ie*.235,1.335,0,.082,.105,.085,v,12,9),p.sphere(ie*.295,1.08,.035,.064,.073,.064,v,12,8),p.cylinder([ie*.23,1.37,0],[ie*.295,1.08,.035],.079,.064,v,12),p.cylinder([ie*.295,1.08,.035],[ie*.29,.9,.06],.063,.045,v,11),p.sphere(ie*.287,.859,.065,.043,.067,.038,U,11,7)}),p.animate([ie*.108,.88,0],ie*2,()=>{p.cylinder([ie*.105,.9,0],[ie*.12,.49,.015],.098,.077,I,12),p.cylinder([ie*.12,.49,.015],[ie*.12,.1,0],.077,.06,I,11),p.sphere(ie*.12,.077,.052,.075,.068,.146,a("#383d3c",0,.75),12,7),p.box(ie*.12,.034,.054,.142,.035,.25,a("#c1beb1"))});if(o%3===0&&(p.sphere(0,1.7,-.006,.126,.045,.126,a("#b4a481",6),14,8),p.box(0,1.676,.125,.18,.018,.14,a("#b4a481",6))),o%4===1){p.sphere(0,1.17,-.16,.16,.23,.1,a("#73664e",6),13,9);for(let ie of[-1,1])p.cylinder([ie*.16,1.36,.04],[ie*.12,1.03,.09],.017,.017,a("#756b58"),7)}return o%4===2&&(p.cylinder([.29,.91,.06],[.32,.66,.06],.01,.01,a("#aa9675"),7),p.box(.32,.57,.06,.19,.24,.22,a("#d3c2a1",6))),p}function ku(o){let p=Nc(o),v=new s;for(let U=0;U<p.used;U+=60)if(!(Math.abs(p.data[U+19])>1.5&&Math.abs(p.data[U+19])<3))for(let G=0;G<3;G++){let W=U+G*20,ie={color:Array.from(p.data.slice(W+8,W+11)),p:Array.from(p.data.slice(W+12,W+16)),ao:p.data[W+11]};v.vertex([p.data[W],p.data[W+1]-.4,p.data[W+2]],Array.from(p.data.slice(W+3,W+6)),Array.from(p.data.slice(W+6,W+8)),ie)}let I=a(["#41494e","#746854","#4a575a","#485669"][o%4],6,.9);for(let U of[-1,1])v.cylinder([U*.105,.49,0],[U*.12,.46,.35],.1,.08,I,12),v.sphere(U*.12,.46,.35,.078,.084,.085,I,12,8),v.cylinder([U*.12,.46,.35],[U*.12,.105,.39],.078,.058,I,12),v.sphere(U*.12,.078,.45,.073,.06,.145,a("#383d3c"),12,8),v.box(U*.12,.035,.45,.14,.035,.25,a("#b8b9ad"));return v}function zu(o){let p=new s,v=a(["#dfb357","#72a0a2","#aa6357","#8c9a66"][o%4],6,.92),I=a("#506277",6,.91),U=a("#d4ad8b",0,.77),G=a("#3d342e",0,.94);p.sphere(0,.83,0,.2,.3,.145,v,14,10),p.cylinder([0,1.04,0],[0,1.17,0],.065,.06,U,10),p.sphere(0,1.34,0,.165,.19,.15,U,16,11),p.sphere(0,1.4,-.015,.17,.145,.153,G,16,9,0,1.35);for(let W of[-1,1])p.sphere(W*.06,1.36,.141,.01,.008,.008,Q.dark,8,5),p.animate([W*.19,1.04,0],W,()=>{p.cylinder([W*.19,1.02,0],[W*.27,.65,.025],.067,.045,v,10),p.sphere(W*.27,.62,.03,.048,.06,.044,U,10,7)}),p.animate([W*.09,.58,0],W*2,()=>{p.cylinder([W*.09,.58,0],[W*.11,.25,0],.079,.062,I,10),p.cylinder([W*.11,.25,0],[W*.11,.09,.025],.06,.05,I,10),p.sphere(W*.11,.055,.085,.072,.052,.115,Q.dark,10,7)});return p}function Vu(){let o=new s,p=a("#faf9f4",6,.95),v=a("#efb8c4",0,.8),I=a("#252829",0,.75),U=a("#c93538",6,.82),G=a("#a9d6e6",6,.86),W=a("#83b9aa",6,.82),ie=a("#d3a330",6,.8);o.sphere(0,.86,0,.46,.67,.35,p,24,16);for(let z of[-1,1])o.sphere(z*.26,.2,.02,.22,.2,.23,p,16,12),o.sphere(z*.44,1.02,.03,.17,.24,.2,p,14,10),o.sphere(z*.54,.72,.2,.13,.14,.13,p,12,9);o.sphere(0,1.68,.06,.61,.47,.48,p,28,18);for(let z of[-1,1]){let Se=z*.39;o.tri([Se-z*.19,1.95,.02],[Se,2.37,.03],[Se+z*.2,1.97,.04],p),o.tri([Se-z*.12,2,.1],[Se,2.28,.12],[Se+z*.12,2.01,.11],v),o.sphere(z*.22,1.73,.485,.087,.12,.018,I,12,9),o.sphere(z*.196,1.77,.507,.024,.035,.01,p,8,7);for(let Le=-1;Le<=1;Le++)o.cylinder([z*.28,1.54+Le*.07,.49],[z*.61,1.55+Le*.11,.47],.008,.006,I,6)}o.sphere(0,1.56,.54,.055,.035,.028,v,11,8),o.cylinder([0,1.52,.56],[0,1.46,.55],.008,.008,I,6);for(let z of[-1,1])o.cylinder([0,1.46,.55],[z*.1,1.44,.53],.008,.008,I,6);o.cylinder([-.34,1.27,.24],[.34,1.27,.24],.026,.026,U,12),o.sphere(0,1.2,.38,.22,.07,.055,p,16,10),o.tri([-.23,1.2,.39],[-.33,1.27,.39],[-.33,1.13,.39],p),o.sphere(.13,1.22,.434,.009,.009,.008,I,7,6),o.cylinder([-.28,1.1,.3],[.28,.62,.42],.018,.018,ie,10),o.sphere(.27,.58,.39,.28,.3,.12,G,18,12);for(let z=0;z<6;z++)o.sphere(.1+z*.065,.82,.44,.048,.048,.045,W,9,7);for(let z of[-1,1])o.sphere(.27+z*.075,.6,.502,.013,.018,.009,I,7,6);return o.cylinder([.23,.49,.505],[.31,.49,.505],.009,.009,I,7),o.sphere(.27,.46,.507,.04,.019,.008,v,9,7),o}let Uc=Array.from({length:8},()=>[]),Fc=Array.from({length:4},()=>[]),Yi=[],Gu=0;function Ks(o,p,v=0,I=!1,U=1,G=null,W="visitor"){let ie=Gu++,z=W==="child",Se=ie%(z?4:8),Le={matrix:n.compose(o,0,p,v,U),info:[S(0,6.28),I?1:0,0,0]},Oe={x:o,z:p,yaw:v,scale:U,instance:Le,walk:I,path:G,pathIndex:0,speed:S(.4,.64),group:Se,type:W,index:ie};(z?Fc:Uc)[Se].push(Le),Yi.push(Oe)}for(let[o,p]of ye.filter(v=>["F","S","T"].includes(v.category)&&v.approach).entries())if(o%2===0){let v=p.yaw||0,I=o%3?-1:1,U=p.approach,G=U[0]-Math.sin(v)*1.05+Math.cos(v)*.95*I,W=U[1]-Math.cos(v)*1.05-Math.sin(v)*.95*I;qi(G,W,.2)&&Ks(G,W,Math.atan2(p.pos[0]-G,p.pos[1]-W),!1,S(.88,1.04))}for(let o of f.records.filter(p=>p.kind==="tent")){let p=o.yaw||0,v=o.id==="F-10"?-1.5:0;Ks(o.pos[0]+Math.cos(p)*v-Math.sin(p)*.52,o.pos[1]-Math.sin(p)*v-Math.cos(p)*.52,p,!1,.93,null,"vendor")}let Oc=[[[0,10],[2,9],[2,-11],[20,-12],[26,-12],[26,-2],[26,12],[16,12],[0,10]],[[27,47],[29,54],[29,63],[31,68],[31,75],[28,77],[28,70],[29,60],[27,47]],[[-41,13],[-13,13],[-12,-4],[-15,-17],[-33,-19],[-41,13]],[[19,18],[26,21],[28,32],[29,44],[27,47],[28,32],[26,21],[19,18]]];for(let o=0;o<36;o++){let p=Oc[o%Oc.length],v=o%p.length,I=p[v],U=p[(v+1)%p.length],G=S(0,1),W=$s([I[0]+(U[0]-I[0])*G,I[1]+(U[1]-I[1])*G],2);if(!W)continue;let ie=o%3===0;Ks(W[0],W[1],Math.atan2(U[0]-I[0],U[1]-I[1]),!0,ie?1:S(.88,1.05),p,ie?"child":"visitor"),Yi[Yi.length-1].pathIndex=(v+1)%p.length}for(let o=0;o<7;o++)Ks(k[0]+(o-3)*1.6,m[1]+9.5+o%2*.6,0,!0,.8,null,"performer");for(let o of[[7,11],[8,11.5],[24,-9],[25,-8.7],[-12,-23],[-13,-23.4],[-39,-44],[49,32],[50,33]])qi(...o,.23)&&Ks(o[0],o[1],S(0,_),!1,S(.85,1));let Ht={};Ht.base=new r(i,ee,{name:"Architecture, ground and booths"}),Ht.details=new r(i,C,{name:"Furniture, windows and equipment"}),Ht.foliage=new r(i,Ve,{name:"Foliage",instances:[{matrix:n.identity(),info:[0,0,1,0]}]}),Ht.roof=new r(i,We,{name:"Gym roof"}),Ht.signs=new r(i,rt,{name:"Readable booth signs"}),Ht.distant=new r(i,xi,{name:"Approximate neighbourhood",shadow:!1}),Ht.flags=new r(i,el,{name:"Fabric banners",instances:Pc});let Bc=Array.from({length:4},()=>[]),Hu=0;for(let o=0;o<Ne.length;o++){if(Ne[o].addedGymSeat||o%4!==1&&!(Ne[o].gym&&o%5===2))continue;let p=Ne[o];Bc[Hu++%4].push({matrix:n.compose(p.x,p.gym?he:0,p.z,p.yaw,.94),info:[0,0,0,0]})}Ht.seated=Bc.map((o,p)=>new r(i,ku(p),{name:"Seated visitors "+p,instances:o}));let $r=Rc(0),kc=n.compose($r.x,0,$r.z,$r.yaw);Ht.vehicle=new r(i,kt,{name:"Generic mobility vehicle",instances:[{matrix:kc,info:[0,0,0,0]}],dynamic:!0}),Ht.vehicleGlass=new r(i,Ko,{name:"Mobility vehicle windshield",instances:[{matrix:kc,info:[0,0,0,0]}],dynamic:!0,shadow:!1});let zc=Array.from({length:4},(o,p)=>({matrix:n.compose(Dt[0]+(p%2-.5)*2,0,Dt[1]+(Math.floor(p/2)-.5)*2.2,p*1.8,p===3?.64:1),info:[p,0,0,0]}));Ht.goats=new r(i,Lu(),{name:"Goats",instances:zc,dynamic:!0});let js=[[45,70],[45,78],[43,78],[43,64],[44,55],[45,70]],Vc=$s(js[0],2)||js[0],Kt={x:Vc[0],z:Vc[1],yaw:0,index:1,speed:.56};Ht.kamanyan=new r(i,Vu(),{name:"かまくらいふ かまにゃん",instances:[{matrix:n.compose(Kt.x,0,Kt.z,0),info:[0,0,0,0]}],dynamic:!0}),Ht.actors=Uc.map((o,p)=>new r(i,Nc(p),{name:"Visitors "+p,instances:o,dynamic:!0})),Ht.children=Fc.map((o,p)=>new r(i,zu(p),{name:"Children "+p,instances:o,dynamic:!0})),e(.81,"看板と案内データを仕上げています"),d.upload(i.gl,matchMedia("(pointer:coarse)").matches||innerWidth<650?256:512),i.atlas=d;let Gc=70,il=0,Qs=$r,Hc=Yi.filter(o=>o.type!=="vendor"&&o.type!=="performer");function Wc(o){Gc=g(o,0,100);let p=Math.round(Hc.length*Gc/100);Hc.forEach((v,I)=>v.hidden=I>=p),Yi.filter(v=>v.type==="vendor"||v.type==="performer").forEach(v=>v.hidden=o===0),Ht.seated.forEach(v=>v.visible=o>10),i.shadowDirty=!0}Wc(70);function Wu(o,p){let v=js[Kt.index],I=v[0]-Kt.x,U=v[1]-Kt.z,G=Math.hypot(I,U);if(G<.3)Kt.index=(Kt.index+1)%js.length;else{let ie=Math.min(G,Kt.speed*p),z=Kt.x+I/G*ie,Se=Kt.z+U/G*ie;qi(z,Se,.24)?(Kt.x=z,Kt.z=Se,Kt.yaw=Math.atan2(I,U)+Math.PI):Kt.index=(Kt.index+1)%js.length}Ht.kamanyan.instances[0].matrix=n.compose(Kt.x,tl(Kt.x,Kt.z)+Math.max(0,Math.sin(o*7))*.025,Kt.z,Kt.yaw),Ht.kamanyan.updateInstances(),Qs=Rc(o*.88);let W=n.compose(Qs.x,0,Qs.z,Qs.yaw);if(Ht.vehicle.instances[0].matrix=W,Ht.vehicleGlass.instances[0].matrix=W,Ht.vehicle.updateInstances(),Ht.vehicleGlass.updateInstances(),o-il>.055){let ie=Math.min(.18,o-il);il=o;for(let z of Yi){if(z.walk&&z.path&&!z.hidden){let Oe=z.path[z.pathIndex],Be=Oe[0]-z.x,et=Oe[1]-z.z,Wt=Math.hypot(Be,et);if(Wt<.35)z.pathIndex=(z.pathIndex+1)%z.path.length;else{let zt=z.x+Be/Wt*z.speed*ie,wt=z.z+et/Wt*z.speed*ie;qi(zt,wt,.19)?(z.x=zt,z.z=wt,z.yaw=Math.atan2(Be,et)):z.pathIndex=(z.pathIndex+1)%z.path.length}}let Se=tl(z.x,z.z),Le=z.yaw;z.type==="performer"&&(Le=Math.sin(o*.5+z.index*.3)*.12,Se+=.04+Math.max(0,Math.sin(o*2.4+z.index*.4))*.07),z.instance.matrix=n.compose(z.x,z.hidden?-100:Se,z.z,Le,z.scale),z.instance.info[1]=z.hidden?0:z.walk?z.type==="performer"?.8:1:0}Ht.actors.forEach(z=>z.updateInstances()),Ht.children.forEach(z=>z.updateInstances()),zc.forEach((z,Se)=>{let Le=Se*1.8+Math.sin(o*.1+Se)*.3;z.matrix=n.compose(Dt[0]+(Se%2-.5)*2+Math.sin(o*.1+Se)*.2,0,Dt[1]+(Math.floor(Se/2)-.5)*2.2,Le,Se===3?.64:1)}),Ht.goats.updateInstances()}}e(.9,"歩行できる経路を確認しています");function Xu(o){let p=!o;Ht.vehicleGlass.visible!==p&&(Ht.vehicleGlass.visible=p,i.shadowDirty=!0)}return{data:f,markers:ye,colliders:ut,buildings:He,campus:Qe,field:It,restricted:cs,track:Zt,trackLength:In,meshes:Ht,trunks:xe,seats:Ne,atlas:d,categoryColors:N,isWalkable:qi,walkHeight:tl,nearestWalkable:$s,update:Wu,setCrowd:Wc,setRideView:Xu,p:P,getCar:()=>Qs,getKamanyan:()=>[Kt.x,2.35,Kt.z],polyInside:ct,actorCount:Yi.length}};window.FestaNavigation=class{constructor(i){this.world=i,this.step=.7,this.x0=-67,this.z0=-58,this.nx=184,this.nz=244,this.size=this.nx*this.nz,this.open=new Uint8Array(this.size);for(let e=0;e<this.nz;e++)for(let t=0;t<this.nx;t++){let n=this.point(e*this.nx+t);this.open[e*this.nx+t]=i.isWalkable(n[0],n[1],.34)?1:0}}point(i){return[this.x0+i%this.nx*this.step,this.z0+Math.floor(i/this.nx)*this.step]}index(i){return Math.round((i[1]-this.z0)/this.step)*this.nx+Math.round((i[0]-this.x0)/this.step)}nearest(i){let e=Math.round((i[0]-this.x0)/this.step),t=Math.round((i[1]-this.z0)/this.step),n=-1,s=1/0;for(let r=0;r<18;r++){for(let l=-r;l<=r;l++)for(let a=-r;a<=r;a++){if(r&&Math.abs(a)!==r&&Math.abs(l)!==r)continue;let c=e+a,h=t+l;if(c<0||c>=this.nx||h<0||h>=this.nz)continue;let g=h*this.nx+c;if(!this.open[g])continue;let _=this.point(g),f=Math.hypot(_[0]-i[0],_[1]-i[1]);f<s&&(s=f,n=g)}if(n>=0)return n}return-1}lineFree(i,e,t=.3){let n=Math.hypot(e[0]-i[0],e[1]-i[1]),s=Math.ceil(n/.16);for(let r=0;r<=s;r++)if(!this.world.isWalkable(i[0]+(e[0]-i[0])*r/Math.max(1,s),i[1]+(e[1]-i[1])*r/Math.max(1,s),t))return!1;return!0}find(i,e){let t=this.nearest(i),n=this.nearest(e);if(t<0||n<0)return null;let s=new Float32Array(this.size);s.fill(1/0);let r=new Int32Array(this.size);r.fill(-1);let l=new Uint8Array(this.size),a=[],c=(b,A)=>{let M={i:b,f:A},u=a.length;for(a.push(M);u;){let w=u-1>>1;if(a[w].f<=M.f)break;a[u]=a[w],u=w}a[u]=M},h=()=>{let b=a[0],A=a.pop();if(a.length){let M=0;for(;2*M+1<a.length;){let u=2*M+1;if(u+1<a.length&&a[u+1].f<a[u].f&&u++,a[u].f>=A.f)break;a[M]=a[u],M=u}a[M]=A}return b.i},g=n%this.nx,_=Math.floor(n/this.nx),f=b=>{let A=Math.abs(b%this.nx-g),M=Math.abs(Math.floor(b/this.nx)-_);return Math.max(A,M)+.41421356*Math.min(A,M)};s[t]=0,c(t,f(t));let y=!1;for(;a.length;){let b=h();if(l[b])continue;if(l[b]=1,b===n){y=!0;break}let A=b%this.nx,M=Math.floor(b/this.nx);for(let u=-1;u<=1;u++)for(let w=-1;w<=1;w++){if(!w&&!u)continue;let N=A+w,x=M+u;if(N<0||N>=this.nx||x<0||x>=this.nz)continue;let D=x*this.nx+N;if(!this.open[D]||l[D]||w&&u&&(!this.open[M*this.nx+N]||!this.open[x*this.nx+A]))continue;let V=s[b]+(w&&u?1.41421356:1);V<s[D]&&(s[D]=V,r[D]=b,c(D,V+f(D)))}}if(!y)return null;let S=[],P=n;for(;P>=0&&(S.push(this.point(P)),P!==t);)P=r[P];S.reverse(),this.lineFree(i,S[0])&&S.unshift([...i]),this.lineFree(S[S.length-1],e)&&S.push([...e]);let T=[S[0]],d=0;for(;d<S.length-1;){let b=S.length-1;for(;b>d+1&&!this.lineFree(S[d],S[b]);)b--;T.push(S[b]),d=b}return T}};(async function(){let i=L=>document.getElementById(L),e=L=>String(L??"").replace(/[&<>"']/g,B=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[B]),t={search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',overview:'<path d="m3 8 9-5 9 5-9 5-9-5Z M3 12l9 5 9-5M3 16l9 5 9-5"/>',route:'<circle cx="5" cy="5" r="2"/><circle cx="19" cy="19" r="2"/><path d="M7 5h8a4 4 0 0 1 0 8H9a4 4 0 0 0 0 8h5"/>',settings:'<path d="M4 6h16M4 12h16M4 18h16"/><circle cx="9" cy="6" r="2" fill="currentColor"/><circle cx="16" cy="12" r="2" fill="currentColor"/><circle cx="8" cy="18" r="2" fill="currentColor"/>',help:'<circle cx="12" cy="12" r="9"/><path d="M9.3 9a2.8 2.8 0 0 1 5.4 1c0 2-2.7 2-2.7 4M12 17h.01"/>',arrow:'<path d="M4 12h15m-5-5 5 5-5 5"/>',back:'<path d="M20 12H5m5-5-5 5 5 5"/>',close:'<path d="m6 6 12 12M6 18 18 6"/>',expand:'<path d="M9 3H3v6M15 3h6v6M3 15v6h6M21 15v6h-6"/>',walk:'<circle cx="13" cy="4" r="2"/><path d="m11 9 3 2 4 1M11 8l-3 5-4 1M11 9l-1 7-4 5m4-5 5 1 2 5"/>',pin:'<path d="M19 10c0 6-7 12-7 12S5 16 5 10a7 7 0 0 1 14 0Z"/><circle cx="12" cy="10" r="2.5"/>',eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>'};function n(L){return'<svg viewBox="0 0 24 24" aria-hidden="true">'+(t[L]||t.pin)+"</svg>"}function s(L=document){L.querySelectorAll("[data-icon]").forEach(B=>B.innerHTML=n(B.dataset.icon))}s();let r=FESTA_DATA,l=[...r.records,...r.locations],a=Object.fromEntries(l.map(L=>[L.id,L])),c={F:"#a64c35",S:"#385e76",T:"#4e6c43",P:"#83503e",M:"#ab8450",I:"#28595c"},h={F:"飲食・屋台村",S:"物販・ワークショップ",T:"地域・防災・体験",P:"体育館の出演団体",M:"交流・モビリティー",I:"会場案内"},g=matchMedia("(pointer:coarse)").matches||innerWidth<650,_=matchMedia("(prefers-reduced-motion: reduce)").matches,f,y,S,P=!1,T=0,d=0,b=0,A,M=null,u={mode:"welcome",pos:[0,11],yaw:.1,pitch:0,orbitYaw:-.48,orbitPitch:.79,orbitDist:115,orbitTarget:[0,0,22],returnPos:null,selected:null,nearest:null,path:null,pathIndex:1,auto:!1,targetId:null,labels:!0,showRoof:!0,paused:!1,sheet:null,crowd:70,light:"day",distanceWalked:0,rideYaw:0,runMode:!1,quality:g?"standard":"high"},w={},N={x:0,y:0,active:!1,pid:null},x={active:!1,pid:null,x:0,y:0,moved:0},D=null,V=new Set,$=new Map;function Z(L,B=4e3){i("toast").textContent=L,i("toast").classList.remove("hidden"),clearTimeout(A),A=setTimeout(()=>i("toast").classList.add("hidden"),B)}function se(L,B){i("loadBar").style.width=Math.round(L*100)+"%",i("loadText").textContent=B}let X=()=>new Promise(L=>setTimeout(L,0));function ne(){u.mode="walk",i("welcome").classList.add("hidden"),i("hud").classList.remove("hidden"),i("minimapWrap").classList.remove("hidden"),i("bottomHint").classList.remove("hidden"),i("joystick").classList.remove("hidden"),g&&i("lookHint").classList.remove("hidden"),i("scene").focus({preventScroll:!0})}function de(L){u.yaw=Math.atan2(L[0]-u.pos[0],-(L[1]-u.pos[1])),u.pitch=-.02}function ue(L){y&&(u.pos=y.nearestWalkable(L)||[0,11])}function ve(L="field"){if(P){if(it(),F(),Q(),ne(),L==="field")ue([2.8,11]),de([14,-14]);else{let B=a[L];ue(B.approach),de(L==="GATE_MAIN"?[33,61]:[-27,-24])}u.mode="walk",C(),Z(g?"左の丸で移動。画面の右側をドラッグすると見回せます。":"左の丸、キーボードのWASD または矢印キーで移動。画面をドラッグして見回します。",4500)}}function fe(){P&&(it(),F(),Q(),u.mode="welcome",i("welcome").classList.remove("hidden"),i("minimapWrap").classList.add("hidden"),i("bottomHint").classList.add("hidden"),i("nearby").classList.add("hidden"),i("joystick").classList.add("hidden"),i("lookHint").classList.add("hidden"),C())}function ee(){if(P){if(it(),F(),u.mode==="overview"){u.mode="walk",u.returnPos&&(u.pos=[...u.returnPos]),u.pitch=0,C();return}u.mode==="welcome"&&ne(),Q(),u.returnPos=[...u.pos],u.mode="overview",u.orbitTarget=[0,0,23],u.orbitDist=158,u.orbitYaw=-.27,u.orbitPitch=.9,C(),Z("ドラッグで回転、ホイールで拡大。地面を押すとその場所へ移動します。ブースの札を押すと内容を表示します。")}}function C(){let L=u.mode;if(y&&y.setRideView(L==="ride"),i("modeBar").classList.toggle("ride-active",L==="ride"),i("speedToggle").classList.toggle("hidden",g||L!=="walk"),i("speedToggle").textContent=u.runMode?"速度：走る":"速度：歩く",i("speedToggle").setAttribute("aria-pressed",String(u.runMode)),i("speedToggle").setAttribute("aria-label",u.runMode?"走るを選択中。歩くに切り替える":"歩くを選択中。走るに切り替える"),i("overviewBtn").classList.toggle("active",L==="overview"),i("joystick").classList.toggle("hidden",L!=="walk"||!!u.sheet),i("lookHint").classList.toggle("hidden",!g||L!=="walk"||!!u.sheet),i("modeBar").classList.toggle("hidden",L==="welcome"||L==="walk"&&!u.path),L==="overview")i("modeText").textContent="上空から会場を見る",i("modeAction").textContent="歩行に戻る";else if(L==="ride")i("modeText").textContent="トゥクトゥクに乗車中",i("modeAction").textContent="トゥクトゥクから降りる";else if(u.path){let B=a[u.targetId];i("modeText").textContent=(u.auto?"歩いて案内中：":"経路表示：")+(B?B.short:"選択した場所"),i("modeAction").textContent=u.auto?"一時停止":"自動で歩く"}}function Ve(L){return L.kind==="performer"||L.id==="T-SCI"?a.GYM:L}function We(L,B=!0){if(!P)return;let j=typeof L=="string"?Ve(a[L]):null,E=j?.approach||(!j&&Array.isArray(L)?L:null);if(!E)return Z("この団体のブース位置は資料で特定できていません。"),!1;u.mode==="welcome"&&ve("field"),u.mode==="ride"&&(u.mode="walk",ue(a.MOBILITY.approach)),u.mode="walk";let O=S.find(u.pos,E);return O?(u.path=O,u.pathIndex=1,u.auto=B,u.targetId=j?.id||null,ut(O),it(),F(),C(),!0):(Z("ここから歩ける経路を見つけられませんでした。「この場所へ移動」で見学できます。",6e3),!1)}function rt(L){let B=Ve(a[L]);return B?.approach?(u.mode==="welcome"&&ne(),Q(),u.mode="walk",ue(B.approach),de(B.pos),B.id==="GATE_MAIN"&&de([33,61]),B.id==="GATE_WEST"&&de([-27,-24]),B.id==="GYM"&&de([B.pos[0],y.p(525,345)[1]]),B.id==="WC"&&de([45,45]),it(),F(),C(),Z(B.short+" に移動しました"),!0):!1}function Q(){u.path=null,u.auto=!1,u.targetId=null,D&&(D.dispose(),D=null),C()}function ut(L){D&&D.dispose();let{Geometry:B,Mesh:j,material:E}=FestaGL,O=new B;for(let q=0;q<L.length-1;q++){let le=L[q],Me=L[q+1],Te=Me[0]-le[0],me=Me[1]-le[1],Pe=Math.hypot(Te,me);if(Pe<.01)continue;let ke=-me/Pe*.055,nt=Te/Pe*.055;O.quad([le[0]-ke,.088,le[1]-nt],[le[0]+ke,.088,le[1]+nt],[Me[0]+ke,.088,Me[1]+nt],[Me[0]-ke,.088,Me[1]-nt],E("#b78134",0,.75,0,.13));for(let mt=1;mt<Pe;mt+=2){let At=le[0]+Te*mt/Pe,ht=le[1]+me*mt/Pe;O.disk(At,.092,ht,.12,E("#dfbc77",0,.7,0,.2),10)}}let te=L[L.length-1];O.cylinder([te[0],.08,te[1]],[te[0],.15,te[1]],.26,.26,E("#d2a558",0,.65,0,.2),30),D=new j(f,O,{name:"Navigation guide",shadow:!1})}function xe(L,B){let j=Math.max(1,Math.ceil(Math.hypot(L,B)/.15)),E=0;for(let O=0;O<j;O++){let te=[...u.pos],q=u.pos[0]+L/j,le=u.pos[1]+B/j;y.isWalkable(q,le,.28)?u.pos=[q,le]:(y.isWalkable(q,u.pos[1],.28)&&(u.pos[0]=q),y.isWalkable(u.pos[0],le,.28)&&(u.pos[1]=le)),E+=Math.hypot(u.pos[0]-te[0],u.pos[1]-te[1])}return u.distanceWalked+=E,E}function ye(L){if(!u.path||!u.auto)return;let B=u.path[u.pathIndex];if(!B){He();return}let j=B[0]-u.pos[0],E=B[1]-u.pos[1],O=Math.hypot(j,E);if(O<.16){u.pathIndex++,u.pathIndex>=u.path.length&&He();return}let te=Math.min(O,L*2.35),q=xe(j/O*te,E/O*te),le=Math.atan2(j,-E);u.yaw+=at(le-u.yaw)*Math.min(1,L*3.3),u.pitch+=(0-u.pitch)*Math.min(1,L*3),q<2e-4&&te>.001&&(u.auto=!1,Z("障害物の手前で停止しました。移動キーで位置を調整できます。"),C())}function He(){let L=u.targetId,B=a[L];Q(),B&&(de(B.pos),B.id==="GATE_MAIN"&&de([33,61]),B.id==="GATE_WEST"&&de([-27,-24]),V.add(L),Z(B.short+" に到着しました",2600))}function at(L){return Math.atan2(Math.sin(L),Math.cos(L))}function Ne(){P&&(u.mode==="welcome"&&ne(),it(),Q(),u.mode="ride",u.rideYaw=0,u.pitch=-.06,C(),Z("トゥクトゥクに乗っています。ドラッグして周囲を見回せます。車種・速度は演出です。",5500))}function qe(){u.mode==="overview"?(u.mode="walk",u.returnPos&&ue(u.returnPos),u.pitch=0):u.mode==="ride"?(u.mode="walk",ue(a.MOBILITY.approach),de(y.track[40])):Q(),C()}function Bt(L,B){M=document.activeElement,u.sheet=B,i("sheetTitle").textContent=L,i("sheet").classList.remove("hidden"),i("sheetScrim").classList.remove("hidden"),i("sheetBack").classList.add("hidden"),i("sheetBody").scrollTop=0,Ae(),C(),setTimeout(()=>i("sheetClose").focus({preventScroll:!0}),0)}function it(){u.sheet=null,i("sheet").classList.add("hidden"),i("sheetScrim").classList.add("hidden"),C(),M&&M.isConnected&&M.focus({preventScroll:!0})}let Qe="",ct="all";function st(){Bt("ブースを見つける","search"),i("sheetBody").innerHTML='<div class="search-field">'+n("search")+'<input id="searchInput" aria-label="団体名や内容から検索" placeholder="団体名・食べもの・体験から検索" value="'+e(Qe)+'"></div><div class="filter-row">'+[["all","すべて"],["F","飲食"],["S","物販・体験"],["T","地域・防災"],["P","舞台"],["I","会場案内"]].map(([L,B])=>'<button class="filter '+(L===ct?"active":"")+'" data-filter="'+L+'">'+B+"</button>").join("")+'</div><p class="result-count" id="resultCount"></p><p class="source-text">'+e(r.notice)+'</p><div id="results"></div>',i("searchInput").addEventListener("input",L=>{Qe=L.target.value,dt()}),i("sheetBody").querySelectorAll("[data-filter]").forEach(L=>L.onclick=()=>{ct=L.dataset.filter,i("sheetBody").querySelectorAll("[data-filter]").forEach(B=>B.classList.toggle("active",B===L)),dt()}),dt(),setTimeout(()=>i("searchInput").focus(),30)}function dt(){let L=Qe.normalize("NFKC").toLowerCase().trim(),B=L.split(/\s+/).filter(Boolean),j=l.filter(E=>(ct==="all"||(ct==="I"?["M","I"].includes(E.category):E.category===ct))&&B.every(O=>(E.id+" "+E.name+" "+E.detail).normalize("NFKC").toLowerCase().includes(O)));i("resultCount").textContent=j.length+" 項目 ／ 団体"+r.records.length+"・会場案内"+r.locations.length+"（9月時点の資料）",i("results").innerHTML=j.length?j.map(E=>'<button class="result" data-id="'+e(E.id)+'"><span class="badge" style="background:'+c[E.category]+'">'+e(E.id.startsWith("P-")?"P":E.id.includes("-")?E.id:E.id==="WC"?"WC":"案内")+'</span><span class="result-info"><strong>'+e(E.name)+'</strong><small class="'+(E.kind==="unplaced"?"unplaced":"")+'">'+e(E.kind==="unplaced"?"位置未特定 · "+E.caption:E.caption)+"</small></span>"+n("arrow")+"</button>").join(""):'<p class="empty">該当する項目がありません。<br>短い言葉でも検索できます。</p>',i("results").querySelectorAll("[data-id]").forEach(E=>E.onclick=()=>It(E.dataset.id,!0))}function It(L,B=!1){let j=a[L];if(!j)return;u.selected=L,V.add(L),Bt("ブース・会場の詳細","detail"),i("sheetBack").classList.toggle("hidden",!B);let E=Ve(j),O=P&&!!E.approach,te=h[j.category],q=j.source||"配置ゾーニング 9月21日 Ver.6案（1ページ）",le='<div class="detail-id"><span class="badge" style="background:'+c[j.category]+'">'+e(j.id.startsWith("P-")?"P":j.id.includes("-")?j.id:"案内")+"</span>"+e(te)+'<span>／ 予定</span></div><h3 class="detail-title">'+e(j.name)+'</h3><p class="detail-caption">'+e(j.caption)+"</p>";O?le+='<div class="detail-actions"><button class="primary" id="navigateHere">'+n("route")+' 歩いて案内</button><button class="secondary" id="jumpHere">この場所へ移動</button></div>':le+=j.kind==="unconfirmed"?'<div class="note-box warn">今回の体育館の開始予定9件に記載がなく、出演予定は未確認です。</div>':j.kind==="unplaced"?'<div class="note-box warn">参加予定団体一覧には記載がありますが、配置図からワークショップの位置を特定できません。推測でブースを追加していません。</div>':'<div class="note-box">3D表示が起動していないため、ここでは移動機能を利用できません。団体の予定内容と参照資料は読めます。</div>',j.id==="MOBILITY"&&(le+='<button class="secondary" id="rideBtn">動いている車両の視点で見学</button><p class="source-text">電動トライク1台。車体色、走行速度は実際と異なる場合があります。</p>'),j.id!=="GYM"&&(le+='<div class="section-label">'+(j.category==="P"?"参加予定内容":"資料に記載された内容")+'</div><div class="detail-content">'+e(j.detail)+"</div>"),(j.category==="F"||j.category==="S")&&(le+='<div class="note-box">3Dで置かれている商品は実物や販売数量を示すものではありません。</div>'),(j.id==="GYM"||j.category==="P"||j.id==="T-SCI")&&(le+='<div class="section-label">体育館内 開始予定</div>'+r.schedule.map(Me=>'<div class="schedule-row"><b>'+e(Me.time)+"</b><span>"+e(Me.name)+"</span></div>").join(""),le+='<p class="source-text">進行上の都合で開始・終了時刻は変更になることがあります。</p>'),le+='<div class="section-label">参照した資料</div><p class="source-text">'+e(q)+"</p>"+(j.locationSource&&j.locationSource!=="配置ゾーニング 9月21日 Ver.6案（1ページ）"?'<p class="source-text">位置：'+e(j.locationSource)+"</p>":"")+'<p class="source-text">'+e(r.notice)+"</p>",i("sheetBody").innerHTML=le,O&&(i("navigateHere").onclick=()=>{We(L,!0)},i("jumpHere").onclick=()=>{rt(L)}),i("rideBtn")&&(i("rideBtn").onclick=Ne)}function Gt(){Bt("表示と操作の設定","settings"),i("sheetBody").innerHTML='<div class="setting-row"><label for="quality">描画品質</label><select id="quality"><option value="high">高画質 — PC向け</option><option value="standard">標準 — 軽さと品質のバランス</option><option value="low">軽量 — 小さな端末向け</option></select><small>影の解像度と描画解像度を変更します。重い場合は「標準」「軽量」を選択。</small></div><div class="setting-row"><label for="crowd">来場者の表示量 <span id="crowdValue"></span></label><input id="crowd" type="range" min="0" max="100" step="10" value="'+u.crowd+'"><small>人数は演出です。実際の来場者数や混雑予測ではありません。</small></div><div class="setting-row"><label for="light">光の雰囲気</label><select id="light"><option value="day">昼の光</option><option value="afternoon">午後の光</option></select><small>当日の天気・太陽位置を再現したものではありません。</small></div><label class="toggle-row" for="labelsToggle">近くのブース名を表示<input type="checkbox" id="labelsToggle" '+(u.labels?"checked":"")+'></label><label class="toggle-row" for="roofToggle">体育館の屋根を表示<input type="checkbox" id="roofToggle" '+(u.showRoof?"checked":"")+'></label><div class="note-box">屋根を外すと、上空から体育館の中を確認できます。歩行時には屋根の表示に関係なく出入口から入ります。</div><button class="secondary" id="fullscreenBtn">全画面表示を切り替える</button><button class="text-btn" id="captureBtn">いまの3D画面を画像として保存 '+n("arrow")+'</button><div class="section-label">動作情報</div><p class="source-text" id="performanceInfo"></p><button id="settingsHelp" class="text-btn">操作方法・資料と再現範囲 '+n("help")+"</button>",i("quality").value=u.quality,i("quality").onchange=L=>{u.quality=L.target.value,f.setQuality(u.quality),Z("描画品質を変更しました")},i("crowdValue").textContent=u.crowd+"%",i("crowd").oninput=L=>{u.crowd=Number(L.target.value),y.setCrowd(u.crowd),i("crowdValue").textContent=u.crowd+"%"},i("light").value=u.light,i("light").onchange=L=>{u.light=L.target.value,f.sun=FestaGL.V.norm(u.light==="day"?[-.38,.79,.48]:[-.75,.38,.46]),f.sunColor=u.light==="day"?[1,.94,.81]:[1,.84,.65],f.sunPower=u.light==="day"?3.7:3.4,f.exposure=u.light==="day"?1.12:1.18,f.createShadow()},i("labelsToggle").onchange=L=>u.labels=L.target.checked,i("roofToggle").onchange=L=>{u.showRoof=L.target.checked,y.meshes.roof.visible=u.showRoof,f.shadowDirty=!0},i("fullscreenBtn").onclick=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{Z("この表示環境では全画面表示を利用できません。")}},i("captureBtn").onclick=()=>{try{f.render(d);let L=document.createElement("a");L.href=i("scene").toDataURL("image/png"),L.download="festa2026_3d_view.png",L.click()}catch{Z("画像の保存に対応していない表示環境です。")}},i("settingsHelp").onclick=()=>xt(),i("performanceInfo").textContent="WebGL 2 ／ 外部通信なし ／ "+f.stats.triangles.toLocaleString()+" triangles ／ "+f.stats.draws+" draw calls（現在の場面）"}function xt(){Bt("操作と、資料について","help"),i("sheetBody").innerHTML='<div class="help-section"><h3>PCで歩く</h3>'+[["左下の丸いパッド","前後・左右に移動"],["W / A / S / D・矢印キー","前後・左右に移動"],["画面をドラッグ","見回す"],["画面下の「歩く」「走る」","速度を切り替える"],["Shift ＋移動","押している間だけ走る"],["E","近くのブースの内容"],["V","上空／歩行を切り替え"],["M","会場マップ"],["Esc","閉じる・移動を止める"]].map(L=>'<div class="control-row"><span>'+e(L[0])+"</span><span>"+e(L[1])+"</span></div>").join("")+"<h3>スマートフォン・タブレット</h3><p>左下の丸いパッドで移動します。中心付近では細かく、外側では速く移動できます。画面の右側をドラッグして見回します。看板の札や「内容を見る」をタップすると、団体名と内容が読めます。端末を横向きにすると広く見渡せます。</p><h3>ブースを探す・案内を使う</h3><p>「ブース」から団体名や食べもの、体験などで検索できます。「歩いて案内」は経路を表示して自動で歩きます。移動キーやジョイスティックを使うと手動操作に戻ります。「この場所へ移動」は、そのブースの前へ直接移動します。</p><p>上空表示ではドラッグで回転、ホイール／2本指で拡大・縮小。会場マップでは点を選ぶとブース情報、歩ける場所を選ぶと直接移動します。ブース番号入り配置図と上空表示でも歩ける場所へ直接移動できます。</p><h3>読み取り方</h3>"+r.caveats.map(L=>"<p>"+e(L)+"</p>").join("")+'<div class="note-box">校舎は外観のみ。体育館には出入口から入れます。壇上舞台は使用しません。</div><h3>参照資料</h3>'+r.sources.map(L=>'<div class="source-entry"><strong>'+e(L.type)+" · "+(L.url?'<a href="'+e(L.url)+'" target="_blank" rel="noopener noreferrer">'+e(L.name)+"</a>":e(L.name))+"</strong><p>"+e(L.description)+"</p></div>").join("")+'<h3>このアプリについて</h3><p>すべての描画・検索・経路計算は、このHTMLを開いた端末内で行います。外部通信、位置情報の取得、アクセス解析、アカウント登録はありません。「かまにゃん」の紹介ページを開く場合だけ外部に移動します。</p><p>描画にはThree.jsを使用し、形状、人物、看板は本アプリ向けに実装。地表テクスチャはCC0画像を使用しています。写真測量や現地撮影による3Dモデルではありません。</p><p class="source-text">テクスチャ：Gravel04 / CC0Textures、Grass 01 / linolafett（CC0、scikit-image同梱）。提供資料の権利は元の権利者に帰属します。</p></div>'}function Pt(L){let B=L.clientWidth,j=L.clientHeight,E=Math.min((B-18)/128,(j-18)/174);return{w:B,h:j,scale:E,ox:B/2,oy:j/2-24*E,to:O=>[B/2+O[0]*E,j/2+(O[1]-24)*E],from:(O,te)=>[(O-B/2)/E,(te-j/2)/E+24]}}function Y(L,B=!1){if(!y||!L.clientWidth)return;let j=Pt(L),E=Math.min(devicePixelRatio,2),O=Math.round(j.w*E),te=Math.round(j.h*E);(L.width!==O||L.height!==te)&&(L.width=O,L.height=te);let q=L.getContext("2d");q.setTransform(E,0,0,E,0,0),q.clearRect(0,0,j.w,j.h),q.fillStyle="#eeeee3",q.fillRect(0,0,j.w,j.h);let le=(me,Pe,ke)=>{q.beginPath(),me.forEach((nt,mt)=>{let[At,ht]=j.to(nt);mt?q.lineTo(At,ht):q.moveTo(At,ht)}),q.closePath(),Pe&&(q.fillStyle=Pe,q.fill()),ke&&(q.strokeStyle=ke,q.lineWidth=1,q.stroke())};le(y.campus,"#d4d8cd","#b4c3b5"),le(y.field,"#e6d8ba"),le(y.restricted,"#ded5c1","#b5a68a"),q.beginPath(),y.track.forEach((me,Pe)=>{let[ke,nt]=j.to(me);Pe?q.lineTo(ke,nt):q.moveTo(ke,nt)}),q.closePath(),q.strokeStyle="#c09164",q.lineWidth=Math.max(1,j.scale*2),q.stroke();for(let me of y.buildings){let Pe=j.to([me.x-me.w/2,me.z-me.d/2]);q.fillStyle=me.gym?"#bfccb9":"#a6b5ad",q.fillRect(Pe[0],Pe[1],me.w*j.scale,me.d*j.scale),q.strokeStyle="#8fa397",q.lineWidth=.6,q.strokeRect(Pe[0],Pe[1],me.w*j.scale,me.d*j.scale),B&&me.w*j.scale>40&&(q.fillStyle="#4c6858",q.font="10px sans-serif",q.textAlign="center",q.fillText(me.gym?"体育館":"校舎",Pe[0]+me.w*j.scale/2,Pe[1]+me.d*j.scale/2+3))}for(let me of y.markers){let[Pe,ke]=j.to(me.pos),nt=B?3.7:2.1;if(q.beginPath(),q.arc(Pe,ke,nt,0,Math.PI*2),q.fillStyle=c[me.category],q.fill(),B&&(q.strokeStyle="#fcf9ee",q.lineWidth=.7,q.stroke(),me.id.includes("-")&&me.kind!=="performer")){q.font="9px sans-serif",q.textAlign="left",q.fillStyle="#3e584b";let mt=Pe+6,At=ke+3;me.pos[1]<-16&&me.pos[0]>-10?(mt=Pe,At=ke-10,q.save(),q.translate(mt,At),q.rotate(-Math.PI/2.8),q.fillText(me.id,0,0),q.restore()):me.pos[0]<1&&me.pos[1]>-16&&me.pos[1]<10?(q.textAlign="right",q.fillText(me.id,Pe-6,ke+3)):q.fillText(me.id,mt,At)}}u.path&&(q.beginPath(),u.path.forEach((me,Pe)=>{let[ke,nt]=j.to(me);Pe?q.lineTo(ke,nt):q.moveTo(ke,nt)}),q.strokeStyle="#af7b29",q.lineWidth=B?2:1.5,q.setLineDash([4,2]),q.stroke(),q.setLineDash([]));let[Me,Te]=j.to(u.pos);if(q.save(),q.translate(Me,Te),q.rotate(u.yaw),q.fillStyle="#fff",q.beginPath(),q.arc(0,0,B?7:5,0,Math.PI*2),q.fill(),q.fillStyle="#174f58",q.beginPath(),q.moveTo(0,B?-10:-7),q.lineTo(B?5:4,B?6:4),q.lineTo(0,B?3:1),q.lineTo(B?-5:-4,B?6:4),q.closePath(),q.fill(),q.restore(),q.fillStyle="#526b5d",q.textAlign="right",q.font=(B?"10":"8")+"px sans-serif",B){let[me,Pe]=j.to(a.GATE_MAIN.pos);q.textAlign="right",q.fillText("正門",me-9,Pe-9);let[ke,nt]=j.to(a.GATE_WEST.pos);q.textAlign="left",q.fillText("西ヶ谷門",ke-10,nt+15)}}let Ct=!1;function vt(){P&&(Ae(),it(),M=document.activeElement,i("mapModal").classList.remove("hidden"),Ct=!1,i("bigmap").classList.remove("hidden"),i("originalWrap").classList.add("hidden"),i("mapToggle").textContent="ブース番号入り配置図を見る",i("mapExplain").textContent="ブースの点を押すと内容を表示。歩ける場所を押すと、その場所へ直接移動します。",requestAnimationFrame(()=>Y(i("bigmap"),!0)),i("mapClose").focus())}function F(){i("mapModal").classList.add("hidden")}function m(L){return!L||!y.isWalkable(L[0],L[1],.32)?(Z("建物・柵の中は選べません。歩ける場所を選択してください。"),!1):(Q(),u.mode==="welcome"&&ne(),u.mode="walk",u.returnPos=null,u.pitch=0,ue(L),F(),C(),Z("選んだ場所へ移動しました"),!0)}function H(L){let B=i("bigmap").getBoundingClientRect(),j=L.clientX-B.left,E=L.clientY-B.top,O=Pt(i("bigmap")),te=null,q=16;for(let Me of y.markers){let Te=O.to(Me.pos),me=Math.hypot(Te[0]-j,Te[1]-E);me<q&&(q=me,te=Me)}if(te){F(),It(te.id);return}let le=O.from(j,E);if(!y.isWalkable(...le,.32)){Z("建物・柵の中は選べません。歩ける場所を選択してください。");return}m(le)}function k(L){let B=i("originalPlan"),j=B.getBoundingClientRect();if(!B.naturalWidth||!j.width||!j.height)return;let E=(L.clientX-j.left)/j.width*660-25,O=(L.clientY-j.top)/j.height*870-35,te=y.p(E,O),q=null,le=16;for(let Me of y.markers){let Te=j.left+(Me.pos[0]/.22+320+25)/660*j.width,me=j.top+(Me.pos[1]/.22+290+35)/870*j.height,Pe=Math.hypot(Te-L.clientX,me-L.clientY);Pe<le&&(le=Pe,q=Me)}if(q){F(),It(q.id);return}m(te)}function oe(L,B){let j=new Map,E=!1;L.addEventListener("pointerdown",O=>{j.size?E=!0:E=!1,j.set(O.pointerId,[O.clientX,O.clientY])}),L.addEventListener("pointermove",O=>{let te=j.get(O.pointerId);te&&Math.hypot(O.clientX-te[0],O.clientY-te[1])>8&&(E=!0)}),L.addEventListener("pointerup",O=>j.delete(O.pointerId)),L.addEventListener("pointercancel",O=>{j.delete(O.pointerId),E=!0}),L.addEventListener("click",O=>{E||B(O)})}function we(){for(let L of y.markers){let B=document.createElement("button");B.className="world-label hidden",B.style.setProperty("--accent",c[L.category]),B.setAttribute("aria-label",L.name+" の内容を見る"),B.innerHTML="<b>"+e(L.id.includes("-")?L.id:L.id==="WC"?"WC":"")+"</b><span>"+e(L.short)+"</span>",B.onclick=j=>{j.stopPropagation(),It(L.id)},i("labels").appendChild(B),$.set(L.id,B)}}function be(){let L=i("rideBubble");if(L.classList.add("hidden"),u.mode!=="walk"||u.sheet||!i("mapModal").classList.contains("hidden"))return;let B=a.MOBILITY,j=[B.pos[0]-2,1.55,B.pos[1]],E=f.camera.eye;if(Math.hypot(E[0]-j[0],E[2]-j[2])>18)return;let O=f.project(j);if(!O||O.z>1||O.x<0||O.x>innerWidth||O.y<0||O.y>innerHeight)return;let te=[f.camera.target[0]-E[0],f.camera.target[2]-E[2]],q=Math.hypot(...te);if(q<.001)return;let le=f.project([j[0]-te[1]/q*.5,j[1],j[2]+te[0]/q*.5]);if(!le)return;let Me=2*Math.hypot(le.x-O.x,le.y-O.y);if(Me<24)return;let Te=Me/(g?132:156),me=Math.min(innerWidth/2,(g?146:176)*Te/2+8);L.style.setProperty("--ride-scale",Te),L.style.left=Math.max(me,Math.min(innerWidth-me,O.x))+"px",L.style.top=O.y+"px",L.classList.remove("hidden")}function he(){if(!P)return;let L=u.mode==="overview",B=u.labels&&u.mode!=="welcome"&&!u.sheet&&i("mapModal").classList.contains("hidden"),j=[];for(let O of y.markers){let te=$.get(O.id);if(te.classList.add("hidden"),!B)continue;let q=Math.hypot(f.camera.eye[0]-O.marker[0],f.camera.eye[2]-O.marker[2]);if(!L&&q>24)continue;let le=f.project(O.marker);if(!(!le||le.z>1||le.x<35||le.x>innerWidth-35||le.y<112||le.y>innerHeight-90)){if(!L){let Me=!1,Te=f.camera.eye;for(let me of y.buildings){if(me.gym){let Pe=Te[0]>me.x-me.w/2&&Te[0]<me.x+me.w/2&&Te[2]>me.z-me.d/2&&Te[2]<me.z+me.d/2,ke=O.marker[0]>me.x-me.w/2&&O.marker[0]<me.x+me.w/2&&O.marker[2]>me.z-me.d/2&&O.marker[2]<me.z+me.d/2;Pe!==ke&&q>6&&(Me=!0);continue}for(let Pe=.1;Pe<.96;Pe+=.09){let ke=Te[0]+(O.marker[0]-Te[0])*Pe,nt=Te[2]+(O.marker[2]-Te[2])*Pe,mt=Te[1]+(O.marker[1]-Te[1])*Pe;if(Math.abs(ke-me.x)<me.w/2&&Math.abs(nt-me.z)<me.d/2&&mt<me.h){Me=!0;break}}if(Me)break}if(Me)continue}j.push({r:O,el:te,pr:le,d:q})}}j.sort((O,te)=>O.d-te.d);let E=[];for(let O of j){if(E.length>=(L?20:g?4:7))break;let te=Math.min(g?160:220,45+O.r.short.length*10);E.some(q=>Math.abs(q.pr.x-O.pr.x)<(q.width+te)/2+7&&Math.abs(q.pr.y-O.pr.y)<34)||(O.width=te,O.el.style.left=O.pr.x+"px",O.el.style.top=O.pr.y+"px",O.el.classList.remove("hidden"),E.push(O))}}function ge(){Bt("かまにゃん","mascot"),i("sheetBody").innerHTML='<h3 class="detail-title">かまにゃん</h3><p class="detail-caption">鎌倉地域メディア「かまくらいふ」のキャラクターです。</p><div class="note-box">しらすの首輪に大仏のポシェットをつけています</div><p class="source-text">'+e(r.notice)+'</p><p class="source-text"><a href="https://kamakura-life.net/mascot/" target="_blank" rel="noopener noreferrer">かまくらいふの紹介ページ</a></p>'}function Ee(){let L=document.createElement("button");L.id="kamanyanLabel",L.className="world-label hidden",L.style.setProperty("--accent","#a97887"),L.setAttribute("aria-label","かまくらいふ かまにゃんの内容を見る"),L.innerHTML="<b>ねこ</b><span>かまくらいふ　かまにゃん</span>",L.onclick=B=>{B.stopPropagation(),ge()},i("labels").appendChild(L)}function Ue(){let L=i("kamanyanLabel");if(!L||(L.classList.add("hidden"),!u.labels||u.mode==="welcome"||u.mode==="ride"||u.sheet||!i("mapModal").classList.contains("hidden")))return;let B=y.getKamanyan(),j=Math.hypot(f.camera.eye[0]-B[0],f.camera.eye[2]-B[2]);if(u.mode!=="overview"&&j>28)return;let E=f.project(B);!E||E.z>1||E.x<80||E.x>innerWidth-80||E.y<110||E.y>innerHeight-80||(L.style.left=E.x+"px",L.style.top=E.y+"px",L.classList.remove("hidden"))}function Re(){if(!P)return;let L=null,B=4.8;if(u.mode==="walk")for(let q of y.markers){if(!q.approach)continue;let le=Math.hypot(u.pos[0]-q.approach[0],u.pos[1]-q.approach[1]);le<B&&(B=le,L=q)}u.nearest=L?.id||null;let j=L&&!u.sheet&&u.mode==="walk";i("nearby").classList.toggle("hidden",!j),j&&(i("nearCategory").textContent=L.id.includes("-")?L.id:L.id==="WC"?"WC":"案内",i("nearCategory").style.background=c[L.category],i("nearCaption").textContent=h[L.category],i("nearName").textContent=L.short);let[E,O]=u.pos,te=E>33&&E<57.5&&O>2.6&&O<47?"体育館":O>48?"正門・キッチンカーエリア":O<-25?"モビリティー・であいの広場":E<-13?"アウトドアーエリア":"校庭・にぎわいゾーン";i("locationText").textContent=u.mode==="overview"?"会場全体":u.mode==="ride"?"トゥクトゥクに乗車中":te}let Ie=new Map,Ze=0;i("scene").addEventListener("pointerdown",L=>{if(!(!P||u.sheet||u.mode==="welcome")){if(Ie.set(L.pointerId,[L.clientX,L.clientY]),Ie.size===2){x.multi=!0;let B=[...Ie.values()];Ze=Math.hypot(B[0][0]-B[1][0],B[0][1]-B[1][1])}x.active=!0,x.pid=L.pointerId,x.x=L.clientX,x.y=L.clientY,x.moved=0,x.multi=Ie.size>1,i("scene").setPointerCapture(L.pointerId)}}),i("scene").addEventListener("pointermove",L=>{if(!Ie.has(L.pointerId))return;if(Ie.set(L.pointerId,[L.clientX,L.clientY]),Ie.size===2&&u.mode==="overview"){let E=[...Ie.values()],O=Math.hypot(E[0][0]-E[1][0],E[0][1]-E[1][1]);u.orbitDist=FestaGL.clamp(u.orbitDist*Ze/Math.max(1,O),25,190),Ze=O;return}if(!x.active||x.pid!==L.pointerId)return;let B=L.clientX-x.x,j=L.clientY-x.y;x.x=L.clientX,x.y=L.clientY,x.moved+=Math.abs(B)+Math.abs(j),u.mode==="overview"?(u.orbitYaw-=B*.004,u.orbitPitch=FestaGL.clamp(u.orbitPitch+j*.003,.18,1.48)):(u.mode==="ride"?u.rideYaw+=B*.004:u.yaw-=B*.004,u.pitch=FestaGL.clamp(u.pitch+j*.0035,-1.15,1.15))});function Ke(L){let B=L.type==="pointerup"&&u.mode==="overview"&&x.pid===L.pointerId&&Ie.size===1&&!x.multi&&x.moved<=8;if(Ie.delete(L.pointerId),x.pid===L.pointerId&&(x.active=!1),B){let j=i("scene").getBoundingClientRect(),E=f.groundPoint(L.clientX-j.left,L.clientY-j.top);E&&m([E[0],E[2]])}}i("scene").addEventListener("pointerup",Ke),i("scene").addEventListener("pointercancel",Ke),i("scene").addEventListener("contextmenu",L=>L.preventDefault()),i("scene").addEventListener("wheel",L=>{u.mode==="overview"&&(L.preventDefault(),u.orbitDist=FestaGL.clamp(u.orbitDist*Math.exp(L.deltaY*.001),25,190))},{passive:!1}),i("joystick").addEventListener("pointerdown",L=>{L.preventDefault(),N.pid=L.pointerId,N.active=!0,i("joystick").setPointerCapture(L.pointerId),tt(L),u.auto&&(u.auto=!1,C())}),i("joystick").addEventListener("pointermove",L=>{N.pid===L.pointerId&&tt(L)});function tt(L){let B=i("joystick").getBoundingClientRect(),j=L.clientX-(B.left+B.width/2),E=L.clientY-(B.top+B.height/2),O=Math.hypot(j,E),te=37;O>te&&(j*=te/O,E*=te/O),N.x=j/te,N.y=-E/te,i("joyKnob").style.transform="translate("+j+"px,"+E+"px)"}function J(){N.x=N.y=0,N.active=!1,N.pid=null,i("joyKnob").style.transform=""}i("joystick").addEventListener("pointerup",J),i("joystick").addEventListener("pointercancel",J);function Ae(){for(let L in w)w[L]=!1;J()}window.addEventListener("blur",Ae),document.addEventListener("visibilitychange",()=>{Ae(),T=0}),document.addEventListener("keydown",L=>{if(!P)return;let B=/INPUT|SELECT|TEXTAREA/.test(document.activeElement?.tagName);if(L.code==="Escape"){L.preventDefault(),i("mapModal").classList.contains("hidden")?u.sheet?it():qe():F();return}if(L.code==="Tab"&&(u.sheet||!i("mapModal").classList.contains("hidden"))){let j=u.sheet?i("sheet"):i("mapModal"),E=[...j.querySelectorAll("button,a,input,select")].filter(O=>!O.closest(".hidden")&&!O.disabled);if(E.length){let O=E[0],te=E[E.length-1];L.shiftKey&&document.activeElement===O?(te.focus(),L.preventDefault()):!L.shiftKey&&document.activeElement===te&&(O.focus(),L.preventDefault())}return}B||u.sheet||!i("mapModal").classList.contains("hidden")||(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight"].includes(L.code)&&(L.preventDefault(),w[L.code]=!0,u.auto&&(u.auto=!1,C())),!L.repeat&&(L.code==="KeyE"&&u.nearest&&It(u.nearest),L.code==="KeyV"&&ee(),L.code==="KeyM"&&vt(),L.code==="KeyF"&&st()))}),document.addEventListener("keyup",L=>w[L.code]=!1);function _e(L){if(!P||u.paused)return;if(y.update(d,L),u.mode==="walk"&&!u.sheet&&i("mapModal").classList.contains("hidden")){let E=(w.KeyW||w.ArrowUp?1:0)-(w.KeyS||w.ArrowDown?1:0)+N.y,O=(w.KeyD||w.ArrowRight?1:0)-(w.KeyA||w.ArrowLeft?1:0)+N.x,te=Math.hypot(E,O);if(te>.03){te>1&&(E/=te,O/=te);let le=w.KeyW||w.ArrowUp||w.KeyS||w.ArrowDown||w.KeyD||w.ArrowRight||w.KeyA||w.ArrowLeft?u.runMode||w.ShiftLeft||w.ShiftRight?4.6:3:2.3+2.3*Math.min(te,1);xe((Math.sin(u.yaw)*E+Math.cos(u.yaw)*O)*le*L,(-Math.cos(u.yaw)*E+Math.sin(u.yaw)*O)*le*L)}else ye(L)}let B,j;if(u.mode==="overview"){let E=u.orbitTarget,O=u.orbitDist,te=Math.cos(u.orbitPitch);B=[E[0]+Math.sin(u.orbitYaw)*O*te,Math.sin(u.orbitPitch)*O,E[2]+Math.cos(u.orbitYaw)*O*te],j=[...E]}else if(u.mode==="welcome"){let E=_?0:Math.sin(d*.085)*.8;B=[2.2+E,2.2,11.5],j=[15+E,2,-13]}else if(u.mode==="ride"){let E=y.getCar(),O=-.23;B=[E.x+Math.sin(E.yaw)*O,1.68,E.z+Math.cos(E.yaw)*O];let te=E.yaw+u.rideYaw;j=[B[0]+Math.sin(te)*Math.cos(u.pitch),B[1]+Math.sin(u.pitch),B[2]+Math.cos(te)*Math.cos(u.pitch)],u.pos=[E.x,E.z]}else{let O=(Math.abs(N.x)+Math.abs(N.y)||w.KeyW||w.KeyA||w.KeyS||w.KeyD||u.auto)&&!_?Math.sin(u.distanceWalked*8)*.017:0;B=[u.pos[0],1.68+y.walkHeight(u.pos[0],u.pos[1])+O,u.pos[1]],j=[B[0]+Math.sin(u.yaw)*Math.cos(u.pitch),B[1]+Math.sin(u.pitch),B[2]-Math.cos(u.yaw)*Math.cos(u.pitch)]}f.camera.near=u.mode==="overview"?1:.09,f.camera.eye=B,f.camera.target=j}function De(L){if(!P)return;if(u.testFreeze){requestAnimationFrame(De);return}let B=T?Math.min(.12,(L-T)/1e3):.016;T=L,document.hidden||(u.paused||(d+=B),_e(B),f.render(d),be(),b+=B,b>.13&&(b=0,he(),Ue(),Re(),Y(i("minimap")),!i("mapModal").classList.contains("hidden")&&!Ct&&Y(i("bigmap"),!0))),requestAnimationFrame(De)}i("rideBubble").onclick=L=>{L.stopPropagation(),Ne()},i("homeBtn").onclick=fe,i("startBtn").onclick=()=>ve("field"),i("startMain").onclick=()=>ve("GATE_MAIN"),i("startWest").onclick=()=>ve("GATE_WEST"),i("welcomeOverview").onclick=ee,i("searchBtn").onclick=st,i("overviewBtn").onclick=ee,i("settingsBtn").onclick=Gt,i("helpBtn").onclick=xt,i("sheetClose").onclick=it,i("sheetScrim").onclick=it,i("sheetBack").onclick=st,i("nearOpen").onclick=()=>u.nearest&&It(u.nearest),i("mapBtn").onclick=vt,i("mapClose").onclick=F,oe(i("bigmap"),H),oe(i("originalPlan"),k),i("speedToggle").onclick=()=>{u.runMode=!u.runMode,C()},i("modeExit").onclick=qe,i("modeAction").onclick=()=>{u.mode==="overview"||u.mode==="ride"?qe():u.path&&(u.auto=!u.auto,C())},i("mapToggle").onclick=()=>{Ct=!Ct,i("bigmap").classList.toggle("hidden",Ct),i("originalWrap").classList.toggle("hidden",!Ct),i("mapToggle").textContent=Ct?"会場マップに戻る":"ブース番号入り配置図を見る",i("mapExplain").textContent=Ct?"ブース番号を押すと内容を表示。歩ける場所を押すと、その場所へ直接移動します。":"ブースの点を押すと内容を表示。歩ける場所を押すと、その場所へ直接移動します。",Ct||Y(i("bigmap"),!0)},i("mapModal").onclick=L=>{L.target===i("mapModal")&&F()},i("originalPlan").src="./assets/venue-map.svg?v=20260929",window.addEventListener("resize",()=>{f&&f.resize(),y&&(Y(i("minimap")),i("mapModal").classList.contains("hidden")||Y(i("bigmap"),!0))});try{await X(),f=new FestaGL.Renderer(i("scene"),u.quality),y=await buildFestaWorld(f,se),await X(),S=new FestaNavigation(y),we(),Ee(),se(1,"会場の準備ができました"),P=!0,window.__FESTA_TEST__={ready:!0,renderer:f,world:y,nav:S,state:u,byId:a,start:ve,teleport:rt,routeTo:We,showDetail:It,showSearch:st,showSettings:Gt,showHelp:xt,showMap:vt,toOverview:ee,ride:Ne,exitMode:qe,tick:_e,move:xe,stopRoute:Q,closeSheet:it,get animTime(){return d},render:()=>{_e(.016),f.render(d),be(),he(),Ue(),Re(),Y(i("minimap"))}},_e(.016),f.render(0),i("loading").classList.add("hidden"),i("hud").classList.remove("hidden"),i("welcome").classList.remove("hidden"),requestAnimationFrame(De),i("scene").addEventListener("webglcontextlost",L=>{L.preventDefault(),u.paused=!0,Z("描画が停止しました。ページを再読み込みすると再開できます。",3e4)})}catch(L){console.error(L),i("loading").innerHTML='<div class="loading-inner"><span class="eyebrow">3D表示を開始できませんでした</span><h1 style="font-size:26px">ブース情報は読めます。</h1><p>'+e(L.message)+'</p><p>WebGL 2対応のChrome・Edge・Safariで、このHTMLをブラウザとして開くと3D表示を利用できます。端末のグラフィックアクセラレーション設定も影響します。</p><button id="fallbackList" class="primary">参加団体一覧を読む</button><button id="fallbackPlan" class="secondary" style="margin-top:10px">配置図を見る</button></div>',i("fallbackList").onclick=()=>{st(),i("sheet").style.zIndex=110,i("sheetScrim").style.zIndex=109},i("fallbackPlan").onclick=()=>{let B=window.open();if(B){B.document.title="会場配置図";let j=B.document.createElement("img");j.src="./assets/venue-map.svg",j.style.maxWidth="100%",B.document.body.appendChild(j)}},window.__FESTA_TEST__={ready:!1,error:L.message}}})();})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
