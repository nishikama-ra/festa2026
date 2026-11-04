(()=>{var Fh=0,Kl=1,Oh=2;var ps=1,Bh=2,js=3,ji=0,Un=1,$n=2,Mi=0,Qs=1,jl=2,Ql=3,ec=4,kh=5;var ms=100,zh=101,Vh=102,Gh=103,Hh=104,Wh=200,Xh=201,qh=202,Yh=203,tc=204,nc=205,Zh=206,Jh=207,$h=208,Kh=209,jh=210,Qh=211,eu=212,tu=213,nu=214,Na=0,Ua=1,Fa=2,zs=3,Oa=4,Ba=5,ka=6,za=7,ic=0,iu=1,su=2,ai=0,sc=1,rc=2,ac=3,Xr=4,oc=5,lc=6,cc=7;var hc=300,Qi=301,gs=302,co=303,ho=304,qr=306,Vs=1e3,gi=1001,Va=1002,bn=1003,ru=1004;var Yr=1005;var _n=1006,uo=1007;var bi=1008;var Vn=1009,uc=1010,dc=1011,er=1012,fo=1013,oi=1014,jn=1015,li=1016,po=1017,mo=1018,tr=1020,fc=35902,pc=35899,mc=1021,gc=1022,Qn=1023,xi=1026,es=1027,go=1028,xo=1029,ts=1030,_o=1031;var yo=1033,Zr=33776,Jr=33777,$r=33778,Kr=33779,vo=35840,Mo=35841,bo=35842,So=35843,wo=36196,To=37492,Eo=37496,Ao=37488,Co=37489,jr=37490,Ro=37491,Io=37808,Po=37809,Lo=37810,Do=37811,No=37812,Uo=37813,Fo=37814,Oo=37815,Bo=37816,ko=37817,zo=37818,Vo=37819,Go=37820,Ho=37821,Wo=36492,Xo=36494,qo=36495,Yo=36283,Zo=36284,Qr=36285,Jo=36286;var vr=2300,Ga=2301,La=2302,Hl=2303,Wl=2400,Xl=2401,ql=2402;var au=3200,xc=3201;var $o=0,ou=1,Oi="",Tn="srgb",Mr="srgb-linear",br="linear",$t="srgb";var Da=7680;var lu=519,cu=512,hu=513,uu=514,Ko=515,du=516,fu=517,jo=518,pu=519,_c=35044,Qo=35048;var ea="300 es",ri=2e3,Gs=2001;function Ld(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Dd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Sr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function mu(){let i=Sr("canvas");return i.style.display="block",i}var uh={},Hs=null;function wr(...i){let e="THREE."+i.shift();Hs?Hs("log",e,...i):console.log(e,...i)}function gu(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function mt(...i){i=gu(i);let e="THREE."+i.shift();if(Hs)Hs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function pt(...i){i=gu(i);let e="THREE."+i.shift();if(Hs)Hs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function us(...i){let e=i.join(" ");e in uh||(uh[e]=!0,mt(...i))}function xu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var _u={[Na]:Ua,[Fa]:ka,[Oa]:za,[zs]:Ba,[Ua]:Na,[ka]:Fa,[za]:Oa,[Ba]:zs},_i=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,l=s.length;r<l;r++)s[r].call(this,e);e.target=null}}},An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var vl=Math.PI/180,Ha=180/Math.PI;function Xi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(An[i&255]+An[i>>8&255]+An[i>>16&255]+An[i>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[n&255]+An[n>>8&255]+An[n>>16&255]+An[n>>24&255]).toLowerCase()}function Vt(i,e,t){return Math.max(e,Math.min(t,i))}function Nd(i,e){return(i%e+e)%e}function Ml(i,e,t){return(1-t)*i+t*e}function mi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function nn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Sc=class Sc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Vt(this.x,e.x,t.x),this.y=Vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Vt(this.x,e,t),this.y=Vt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,l=this.y-e.y;return this.x=r*n-l*s+e.x,this.y=r*s+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Sc.prototype.isVector2=!0;var Ut=Sc,yi=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,l,o){let h=n[s+0],u=n[s+1],p=n[s+2],_=n[s+3],m=r[l+0],w=r[l+1],y=r[l+2],L=r[l+3];if(_!==L||h!==m||u!==w||p!==y){let S=h*m+u*w+p*y+_*L;S<0&&(m=-m,w=-w,y=-y,L=-L,S=-S);let d=1-o;if(S<.9995){let T=Math.acos(S),I=Math.sin(T);d=Math.sin(d*T)/I,o=Math.sin(o*T)/I,h=h*d+m*o,u=u*d+w*o,p=p*d+y*o,_=_*d+L*o}else{h=h*d+m*o,u=u*d+w*o,p=p*d+y*o,_=_*d+L*o;let T=1/Math.sqrt(h*h+u*u+p*p+_*_);h*=T,u*=T,p*=T,_*=T}}e[t]=h,e[t+1]=u,e[t+2]=p,e[t+3]=_}static multiplyQuaternionsFlat(e,t,n,s,r,l){let o=n[s],h=n[s+1],u=n[s+2],p=n[s+3],_=r[l],m=r[l+1],w=r[l+2],y=r[l+3];return e[t]=o*y+p*_+h*w-u*m,e[t+1]=h*y+p*m+u*_-o*w,e[t+2]=u*y+p*w+o*m-h*_,e[t+3]=p*y-o*_-h*m-u*w,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,l=e._order,o=Math.cos,h=Math.sin,u=o(n/2),p=o(s/2),_=o(r/2),m=h(n/2),w=h(s/2),y=h(r/2);switch(l){case"XYZ":this._x=m*p*_+u*w*y,this._y=u*w*_-m*p*y,this._z=u*p*y+m*w*_,this._w=u*p*_-m*w*y;break;case"YXZ":this._x=m*p*_+u*w*y,this._y=u*w*_-m*p*y,this._z=u*p*y-m*w*_,this._w=u*p*_+m*w*y;break;case"ZXY":this._x=m*p*_-u*w*y,this._y=u*w*_+m*p*y,this._z=u*p*y+m*w*_,this._w=u*p*_-m*w*y;break;case"ZYX":this._x=m*p*_-u*w*y,this._y=u*w*_+m*p*y,this._z=u*p*y-m*w*_,this._w=u*p*_+m*w*y;break;case"YZX":this._x=m*p*_+u*w*y,this._y=u*w*_+m*p*y,this._z=u*p*y-m*w*_,this._w=u*p*_-m*w*y;break;case"XZY":this._x=m*p*_-u*w*y,this._y=u*w*_-m*p*y,this._z=u*p*y+m*w*_,this._w=u*p*_+m*w*y;break;default:mt("Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],l=t[1],o=t[5],h=t[9],u=t[2],p=t[6],_=t[10],m=n+o+_;if(m>0){let w=.5/Math.sqrt(m+1);this._w=.25/w,this._x=(p-h)*w,this._y=(r-u)*w,this._z=(l-s)*w}else if(n>o&&n>_){let w=2*Math.sqrt(1+n-o-_);this._w=(p-h)/w,this._x=.25*w,this._y=(s+l)/w,this._z=(r+u)/w}else if(o>_){let w=2*Math.sqrt(1+o-n-_);this._w=(r-u)/w,this._x=(s+l)/w,this._y=.25*w,this._z=(h+p)/w}else{let w=2*Math.sqrt(1+_-n-o);this._w=(l-s)/w,this._x=(r+u)/w,this._y=(h+p)/w,this._z=.25*w}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,l=e._w,o=t._x,h=t._y,u=t._z,p=t._w;return this._x=n*p+l*o+s*u-r*h,this._y=s*p+l*h+r*o-n*u,this._z=r*p+l*u+n*h-s*o,this._w=l*p-n*o-s*h-r*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,l=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,l=-l,o=-o);let h=1-t;if(o<.9995){let u=Math.acos(o),p=Math.sin(u);h=Math.sin(h*u)/p,t=Math.sin(t*u)/p,this._x=this._x*h+n*t,this._y=this._y*h+s*t,this._z=this._z*h+r*t,this._w=this._w*h+l*t,this._onChangeCallback()}else this._x=this._x*h+n*t,this._y=this._y*h+s*t,this._z=this._z*h+r*t,this._w=this._w*h+l*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},wc=class wc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,l=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*l,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*l,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*l,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,l=e.y,o=e.z,h=e.w,u=2*(l*s-o*n),p=2*(o*t-r*s),_=2*(r*n-l*t);return this.x=t+h*u+l*_-o*p,this.y=n+h*p+o*u-r*_,this.z=s+h*_+r*p-l*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Vt(this.x,e.x,t.x),this.y=Vt(this.y,e.y,t.y),this.z=Vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Vt(this.x,e,t),this.y=Vt(this.y,e,t),this.z=Vt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,l=t.x,o=t.y,h=t.z;return this.x=s*h-r*o,this.y=r*l-n*h,this.z=n*o-s*l,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return bl.copy(this).projectOnVector(e),this.sub(bl)}reflect(e){return this.sub(bl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};wc.prototype.isVector3=!0;var ce=wc,bl=new ce,dh=new yi,Tc=class Tc{constructor(e,t,n,s,r,l,o,h,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,l,o,h,u)}set(e,t,n,s,r,l,o,h,u){let p=this.elements;return p[0]=e,p[1]=s,p[2]=o,p[3]=t,p[4]=r,p[5]=h,p[6]=n,p[7]=l,p[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,l=n[0],o=n[3],h=n[6],u=n[1],p=n[4],_=n[7],m=n[2],w=n[5],y=n[8],L=s[0],S=s[3],d=s[6],T=s[1],I=s[4],g=s[7],C=s[2],b=s[5],U=s[8];return r[0]=l*L+o*T+h*C,r[3]=l*S+o*I+h*b,r[6]=l*d+o*g+h*U,r[1]=u*L+p*T+_*C,r[4]=u*S+p*I+_*b,r[7]=u*d+p*g+_*U,r[2]=m*L+w*T+y*C,r[5]=m*S+w*I+y*b,r[8]=m*d+w*g+y*U,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],l=e[4],o=e[5],h=e[6],u=e[7],p=e[8];return t*l*p-t*o*u-n*r*p+n*o*h+s*r*u-s*l*h}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],l=e[4],o=e[5],h=e[6],u=e[7],p=e[8],_=p*l-o*u,m=o*h-p*r,w=u*r-l*h,y=t*_+n*m+s*w;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let L=1/y;return e[0]=_*L,e[1]=(s*u-p*n)*L,e[2]=(o*n-s*l)*L,e[3]=m*L,e[4]=(p*t-s*h)*L,e[5]=(s*r-o*t)*L,e[6]=w*L,e[7]=(n*h-u*t)*L,e[8]=(l*t-n*r)*L,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,l,o){let h=Math.cos(r),u=Math.sin(r);return this.set(n*h,n*u,-n*(h*l+u*o)+l+e,-s*u,s*h,-s*(-u*l+h*o)+o+t,0,0,1),this}scale(e,t){return us("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Sl.makeScale(e,t)),this}rotate(e){return us("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Sl.makeRotation(-e)),this}translate(e,t){return us("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Sl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Tc.prototype.isMatrix3=!0;var vt=Tc,Sl=new vt,fh=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ph=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ud(){let i={enabled:!0,workingColorSpace:Mr,spaces:{},convert:function(s,r,l){return this.enabled===!1||r===l||!r||!l||(this.spaces[r].transfer===$t&&(s.r=Ui(s.r),s.g=Ui(s.g),s.b=Ui(s.b)),this.spaces[r].primaries!==this.spaces[l].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===$t&&(s.r=ks(s.r),s.g=ks(s.g),s.b=ks(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Oi?br:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,l){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return us("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return us("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Mr]:{primaries:e,whitePoint:n,transfer:br,toXYZ:fh,fromXYZ:ph,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tn},outputColorSpaceConfig:{drawingBufferColorSpace:Tn}},[Tn]:{primaries:e,whitePoint:n,transfer:$t,toXYZ:fh,fromXYZ:ph,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tn}}}),i}var Ft=Ud();function Ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ks(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ts,Wa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ts===void 0&&(Ts=Sr("canvas")),Ts.width=e.width,Ts.height=e.height;let s=Ts.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ts}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Sr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let l=0;l<r.length;l++)r[l]=Ui(r[l]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ui(t[n]/255)*255):t[n]=Ui(t[n]);return{data:t,width:e.width,height:e.height}}else return mt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Fd=0,Ws=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Xi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let l=0,o=s.length;l<o;l++)s[l].isDataTexture?r.push(wl(s[l].image)):r.push(wl(s[l]))}else r=wl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function wl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(mt("Texture: Unable to serialize Texture."),{})}var Od=0,Tl=new ce,kn=class i extends _i{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=gi,s=gi,r=_n,l=bi,o=Qn,h=Vn,u=i.DEFAULT_ANISOTROPY,p=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=Xi(),this.name="",this.source=new Ws(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=l,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=h,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Tl).x}get height(){return this.source.getSize(Tl).y}get depth(){return this.source.getSize(Tl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){mt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){mt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vs:e.x=e.x-Math.floor(e.x);break;case gi:e.x=e.x<0?0:1;break;case Va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vs:e.y=e.y-Math.floor(e.y);break;case gi:e.y=e.y<0?0:1;break;case Va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=hc;kn.DEFAULT_ANISOTROPY=1;var Ec=class Ec{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*s+l[12]*r,this.y=l[1]*t+l[5]*n+l[9]*s+l[13]*r,this.z=l[2]*t+l[6]*n+l[10]*s+l[14]*r,this.w=l[3]*t+l[7]*n+l[11]*s+l[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,h=e.elements,u=h[0],p=h[4],_=h[8],m=h[1],w=h[5],y=h[9],L=h[2],S=h[6],d=h[10];if(Math.abs(p-m)<.01&&Math.abs(_-L)<.01&&Math.abs(y-S)<.01){if(Math.abs(p+m)<.1&&Math.abs(_+L)<.1&&Math.abs(y+S)<.1&&Math.abs(u+w+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let I=(u+1)/2,g=(w+1)/2,C=(d+1)/2,b=(p+m)/4,U=(_+L)/4,x=(y+S)/4;return I>g&&I>C?I<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(I),s=b/n,r=U/n):g>C?g<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(g),n=b/s,r=x/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=U/r,s=x/r),this.set(n,s,r,t),this}let T=Math.sqrt((S-y)*(S-y)+(_-L)*(_-L)+(m-p)*(m-p));return Math.abs(T)<.001&&(T=1),this.x=(S-y)/T,this.y=(_-L)/T,this.z=(m-p)/T,this.w=Math.acos((u+w+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Vt(this.x,e.x,t.x),this.y=Vt(this.y,e.y,t.y),this.z=Vt(this.z,e.z,t.z),this.w=Vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Vt(this.x,e,t),this.y=Vt(this.y,e,t),this.z=Vt(this.z,e,t),this.w=Vt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ec.prototype.isVector4=!0;var ln=Ec,Xa=class extends _i{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ln(0,0,e,t),this.scissorTest=!1,this.viewport=new ln(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new kn(s),l=n.count;for(let o=0;o<l;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ws(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},zn=class extends Xa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ds=class extends kn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var qa=class extends kn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var lo=class lo{constructor(e,t,n,s,r,l,o,h,u,p,_,m,w,y,L,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,l,o,h,u,p,_,m,w,y,L,S)}set(e,t,n,s,r,l,o,h,u,p,_,m,w,y,L,S){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=l,d[9]=o,d[13]=h,d[2]=u,d[6]=p,d[10]=_,d[14]=m,d[3]=w,d[7]=y,d[11]=L,d[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lo().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Es.setFromMatrixColumn(e,0).length(),r=1/Es.setFromMatrixColumn(e,1).length(),l=1/Es.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,l=Math.cos(n),o=Math.sin(n),h=Math.cos(s),u=Math.sin(s),p=Math.cos(r),_=Math.sin(r);if(e.order==="XYZ"){let m=l*p,w=l*_,y=o*p,L=o*_;t[0]=h*p,t[4]=-h*_,t[8]=u,t[1]=w+y*u,t[5]=m-L*u,t[9]=-o*h,t[2]=L-m*u,t[6]=y+w*u,t[10]=l*h}else if(e.order==="YXZ"){let m=h*p,w=h*_,y=u*p,L=u*_;t[0]=m+L*o,t[4]=y*o-w,t[8]=l*u,t[1]=l*_,t[5]=l*p,t[9]=-o,t[2]=w*o-y,t[6]=L+m*o,t[10]=l*h}else if(e.order==="ZXY"){let m=h*p,w=h*_,y=u*p,L=u*_;t[0]=m-L*o,t[4]=-l*_,t[8]=y+w*o,t[1]=w+y*o,t[5]=l*p,t[9]=L-m*o,t[2]=-l*u,t[6]=o,t[10]=l*h}else if(e.order==="ZYX"){let m=l*p,w=l*_,y=o*p,L=o*_;t[0]=h*p,t[4]=y*u-w,t[8]=m*u+L,t[1]=h*_,t[5]=L*u+m,t[9]=w*u-y,t[2]=-u,t[6]=o*h,t[10]=l*h}else if(e.order==="YZX"){let m=l*h,w=l*u,y=o*h,L=o*u;t[0]=h*p,t[4]=L-m*_,t[8]=y*_+w,t[1]=_,t[5]=l*p,t[9]=-o*p,t[2]=-u*p,t[6]=w*_+y,t[10]=m-L*_}else if(e.order==="XZY"){let m=l*h,w=l*u,y=o*h,L=o*u;t[0]=h*p,t[4]=-_,t[8]=u*p,t[1]=m*_+L,t[5]=l*p,t[9]=w*_-y,t[2]=y*_-w,t[6]=o*p,t[10]=L*_+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bd,e,kd)}lookAt(e,t,n){let s=this.elements;return Wn.subVectors(e,t),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),ki.crossVectors(n,Wn),ki.lengthSq()===0&&(Math.abs(n.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),ki.crossVectors(n,Wn)),ki.normalize(),da.crossVectors(Wn,ki),s[0]=ki.x,s[4]=da.x,s[8]=Wn.x,s[1]=ki.y,s[5]=da.y,s[9]=Wn.y,s[2]=ki.z,s[6]=da.z,s[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,l=n[0],o=n[4],h=n[8],u=n[12],p=n[1],_=n[5],m=n[9],w=n[13],y=n[2],L=n[6],S=n[10],d=n[14],T=n[3],I=n[7],g=n[11],C=n[15],b=s[0],U=s[4],x=s[8],N=s[12],G=s[1],Z=s[5],R=s[9],K=s[13],H=s[2],J=s[6],fe=s[10],ge=s[14],be=s[3],j=s[7],M=s[11],Se=s[15];return r[0]=l*b+o*G+h*H+u*be,r[4]=l*U+o*Z+h*J+u*j,r[8]=l*x+o*R+h*fe+u*M,r[12]=l*N+o*K+h*ge+u*Se,r[1]=p*b+_*G+m*H+w*be,r[5]=p*U+_*Z+m*J+w*j,r[9]=p*x+_*R+m*fe+w*M,r[13]=p*N+_*K+m*ge+w*Se,r[2]=y*b+L*G+S*H+d*be,r[6]=y*U+L*Z+S*J+d*j,r[10]=y*x+L*R+S*fe+d*M,r[14]=y*N+L*K+S*ge+d*Se,r[3]=T*b+I*G+g*H+C*be,r[7]=T*U+I*Z+g*J+C*j,r[11]=T*x+I*R+g*fe+C*M,r[15]=T*N+I*K+g*ge+C*Se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],l=e[1],o=e[5],h=e[9],u=e[13],p=e[2],_=e[6],m=e[10],w=e[14],y=e[3],L=e[7],S=e[11],d=e[15],T=h*w-u*m,I=o*w-u*_,g=o*m-h*_,C=l*w-u*p,b=l*m-h*p,U=l*_-o*p;return t*(L*T-S*I+d*g)-n*(y*T-S*C+d*b)+s*(y*I-L*C+d*U)-r*(y*g-L*b+S*U)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],l=e[5],o=e[9],h=e[2],u=e[6],p=e[10];return t*(l*p-o*u)-n*(r*p-o*h)+s*(r*u-l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],l=e[4],o=e[5],h=e[6],u=e[7],p=e[8],_=e[9],m=e[10],w=e[11],y=e[12],L=e[13],S=e[14],d=e[15],T=t*o-n*l,I=t*h-s*l,g=t*u-r*l,C=n*h-s*o,b=n*u-r*o,U=s*u-r*h,x=p*L-_*y,N=p*S-m*y,G=p*d-w*y,Z=_*S-m*L,R=_*d-w*L,K=m*d-w*S,H=T*K-I*R+g*Z+C*G-b*N+U*x;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let J=1/H;return e[0]=(o*K-h*R+u*Z)*J,e[1]=(s*R-n*K-r*Z)*J,e[2]=(L*U-S*b+d*C)*J,e[3]=(m*b-_*U-w*C)*J,e[4]=(h*G-l*K-u*N)*J,e[5]=(t*K-s*G+r*N)*J,e[6]=(S*g-y*U-d*I)*J,e[7]=(p*U-m*g+w*I)*J,e[8]=(l*R-o*G+u*x)*J,e[9]=(n*G-t*R-r*x)*J,e[10]=(y*b-L*g+d*T)*J,e[11]=(_*g-p*b-w*T)*J,e[12]=(o*N-l*Z-h*x)*J,e[13]=(t*Z-n*N+s*x)*J,e[14]=(L*I-y*C-S*T)*J,e[15]=(p*C-_*I+m*T)*J,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,l=e.x,o=e.y,h=e.z,u=r*l,p=r*o;return this.set(u*l+n,u*o-s*h,u*h+s*o,0,u*o+s*h,p*o+n,p*h-s*l,0,u*h-s*o,p*h+s*l,r*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,l){return this.set(1,n,r,0,e,1,l,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,l=t._y,o=t._z,h=t._w,u=r+r,p=l+l,_=o+o,m=r*u,w=r*p,y=r*_,L=l*p,S=l*_,d=o*_,T=h*u,I=h*p,g=h*_,C=n.x,b=n.y,U=n.z;return s[0]=(1-(L+d))*C,s[1]=(w+g)*C,s[2]=(y-I)*C,s[3]=0,s[4]=(w-g)*b,s[5]=(1-(m+d))*b,s[6]=(S+T)*b,s[7]=0,s[8]=(y+I)*U,s[9]=(S-T)*U,s[10]=(1-(m+L))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let l=Es.set(s[0],s[1],s[2]).length(),o=Es.set(s[4],s[5],s[6]).length(),h=Es.set(s[8],s[9],s[10]).length();r<0&&(l=-l),ni.copy(this);let u=1/l,p=1/o,_=1/h;return ni.elements[0]*=u,ni.elements[1]*=u,ni.elements[2]*=u,ni.elements[4]*=p,ni.elements[5]*=p,ni.elements[6]*=p,ni.elements[8]*=_,ni.elements[9]*=_,ni.elements[10]*=_,t.setFromRotationMatrix(ni),n.x=l,n.y=o,n.z=h,this}makePerspective(e,t,n,s,r,l,o=ri,h=!1){let u=this.elements,p=2*r/(t-e),_=2*r/(n-s),m=(t+e)/(t-e),w=(n+s)/(n-s),y,L;if(h)y=r/(l-r),L=l*r/(l-r);else if(o===ri)y=-(l+r)/(l-r),L=-2*l*r/(l-r);else if(o===Gs)y=-l/(l-r),L=-l*r/(l-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=p,u[4]=0,u[8]=m,u[12]=0,u[1]=0,u[5]=_,u[9]=w,u[13]=0,u[2]=0,u[6]=0,u[10]=y,u[14]=L,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,s,r,l,o=ri,h=!1){let u=this.elements,p=2/(t-e),_=2/(n-s),m=-(t+e)/(t-e),w=-(n+s)/(n-s),y,L;if(h)y=1/(l-r),L=l/(l-r);else if(o===ri)y=-2/(l-r),L=-(l+r)/(l-r);else if(o===Gs)y=-1/(l-r),L=-r/(l-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=p,u[4]=0,u[8]=0,u[12]=m,u[1]=0,u[5]=_,u[9]=0,u[13]=w,u[2]=0,u[6]=0,u[10]=y,u[14]=L,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};lo.prototype.isMatrix4=!0;var Yt=lo,Es=new ce,ni=new Yt,Bd=new ce(0,0,0),kd=new ce(1,1,1),ki=new ce,da=new ce,Wn=new ce,mh=new Yt,gh=new yi,Fi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],l=s[4],o=s[8],h=s[1],u=s[5],p=s[9],_=s[2],m=s[6],w=s[10];switch(t){case"XYZ":this._y=Math.asin(Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-p,w),this._z=Math.atan2(-l,r)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(o,w),this._z=Math.atan2(h,u)):(this._y=Math.atan2(-_,r),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-_,w),this._z=Math.atan2(-l,u)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-Vt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(m,w),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-l,u));break;case"YZX":this._z=Math.asin(Vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,u),this._y=Math.atan2(-_,r)):(this._x=0,this._y=Math.atan2(o,w));break;case"XZY":this._z=Math.asin(-Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-p,w),this._y=0);break;default:mt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gh.setFromEuler(this),this.setFromQuaternion(gh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Fi.DEFAULT_ORDER="XYZ";var Xs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},zd=0,xh=new ce,As=new yi,Ii=new Yt,fa=new ce,pr=new ce,Vd=new ce,Gd=new yi,_h=new ce(1,0,0),yh=new ce(0,1,0),vh=new ce(0,0,1),Mh={type:"added"},Hd={type:"removed"},Cs={type:"childadded",child:null},El={type:"childremoved",child:null},In=class i extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new ce,t=new Fi,n=new yi,s=new ce(1,1,1);function r(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Yt},normalMatrix:{value:new vt}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return As.setFromAxisAngle(e,t),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,t){return As.setFromAxisAngle(e,t),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(_h,e)}rotateY(e){return this.rotateOnAxis(yh,e)}rotateZ(e){return this.rotateOnAxis(vh,e)}translateOnAxis(e,t){return xh.copy(e).applyQuaternion(this.quaternion),this.position.add(xh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_h,e)}translateY(e){return this.translateOnAxis(yh,e)}translateZ(e){return this.translateOnAxis(vh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fa.copy(e):fa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(pr,fa,this.up):Ii.lookAt(fa,pr,this.up),this.quaternion.setFromRotationMatrix(Ii),s&&(Ii.extractRotation(s.matrixWorld),As.setFromRotationMatrix(Ii),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mh),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null):pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hd),El.child=e,this.dispatchEvent(El),El.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mh),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,l=s.length;r<l;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,e,Vd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,Gd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let l=0,o=r.length;l<o;l++)r[l].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,h){return o[h.uuid]===void 0&&(o[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let h=o.shapes;if(Array.isArray(h))for(let u=0,p=h.length;u<p;u++){let _=h[u];r(e.shapes,_)}else r(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let h=0,u=this.material.length;h<u;h++)o.push(r(e.materials,this.material[h]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let h=this.animations[o];s.animations.push(r(e.animations,h))}}if(t){let o=l(e.geometries),h=l(e.materials),u=l(e.textures),p=l(e.images),_=l(e.shapes),m=l(e.skeletons),w=l(e.animations),y=l(e.nodes);o.length>0&&(n.geometries=o),h.length>0&&(n.materials=h),u.length>0&&(n.textures=u),p.length>0&&(n.images=p),_.length>0&&(n.shapes=_),m.length>0&&(n.skeletons=m),w.length>0&&(n.animations=w),y.length>0&&(n.nodes=y)}return n.object=s,n;function l(o){let h=[];for(let u in o){let p=o[u];delete p.metadata,h.push(p)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};In.DEFAULT_UP=new ce(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hs=class extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}},Wd={type:"move"},qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,l=null,o=this._targetRay,h=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){l=!0;for(let L of e.hand.values()){let S=t.getJointPose(L,n),d=this._getHandJoint(u,L);S!==null&&(d.matrix.fromArray(S.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=S.radius),d.visible=S!==null}let p=u.joints["index-finger-tip"],_=u.joints["thumb-tip"],m=p.position.distanceTo(_.position),w=.02,y=.005;u.inputState.pinching&&m>w+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&m<=w-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wd)))}return o!==null&&(o.visible=s!==null),h!==null&&(h.visible=r!==null),u!==null&&(u.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new hs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},yu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},pa={h:0,s:0,l:0};function Al(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Et=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ft.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ft.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ft.workingColorSpace){if(e=Nd(e,1),t=Vt(t,0,1),n=Vt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,l=2*n-r;this.r=Al(l,r,e+1/3),this.g=Al(l,r,e),this.b=Al(l,r,e-1/3)}return Ft.colorSpaceToWorking(this,s),this}setStyle(e,t=Tn){function n(r){r!==void 0&&parseFloat(r)<1&&mt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,l=s[1],o=s[2];switch(l){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:mt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],l=r.length;if(l===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(r,16),t);mt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tn){let n=yu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):mt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return Ft.workingToColorSpace(Cn.copy(this),e),Math.round(Vt(Cn.r*255,0,255))*65536+Math.round(Vt(Cn.g*255,0,255))*256+Math.round(Vt(Cn.b*255,0,255))}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ft.workingColorSpace){Ft.workingToColorSpace(Cn.copy(this),t);let n=Cn.r,s=Cn.g,r=Cn.b,l=Math.max(n,s,r),o=Math.min(n,s,r),h,u,p=(o+l)/2;if(o===l)h=0,u=0;else{let _=l-o;switch(u=p<=.5?_/(l+o):_/(2-l-o),l){case n:h=(s-r)/_+(s<r?6:0);break;case s:h=(r-n)/_+2;break;case r:h=(n-s)/_+4;break}h/=6}return e.h=h,e.s=u,e.l=p,e}getRGB(e,t=Ft.workingColorSpace){return Ft.workingToColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=Tn){Ft.workingToColorSpace(Cn.copy(this),e);let t=Cn.r,n=Cn.g,s=Cn.b;return e!==Tn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(pa);let n=Ml(zi.h,pa.h,t),s=Ml(zi.s,pa.s,t),r=Ml(zi.l,pa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Cn=new Et;Et.NAMES=yu;var Tr=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Et(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Er=class extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fi,this.environmentIntensity=1,this.environmentRotation=new Fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ii=new ce,Pi=new ce,Cl=new ce,Li=new ce,Rs=new ce,Is=new ce,bh=new ce,Rl=new ce,Il=new ce,Pl=new ce,Ll=new ln,Dl=new ln,Nl=new ln,Wi=class i{constructor(e=new ce,t=new ce,n=new ce){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ii.subVectors(e,t),s.cross(ii);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ii.subVectors(s,t),Pi.subVectors(n,t),Cl.subVectors(e,t);let l=ii.dot(ii),o=ii.dot(Pi),h=ii.dot(Cl),u=Pi.dot(Pi),p=Pi.dot(Cl),_=l*u-o*o;if(_===0)return r.set(0,0,0),null;let m=1/_,w=(u*h-o*p)*m,y=(l*p-o*h)*m;return r.set(1-w-y,y,w)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,t,n,s,r,l,o,h){return this.getBarycoord(e,t,n,s,Li)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,Li.x),h.addScaledVector(l,Li.y),h.addScaledVector(o,Li.z),h)}static getInterpolatedAttribute(e,t,n,s,r,l){return Ll.setScalar(0),Dl.setScalar(0),Nl.setScalar(0),Ll.fromBufferAttribute(e,t),Dl.fromBufferAttribute(e,n),Nl.fromBufferAttribute(e,s),l.setScalar(0),l.addScaledVector(Ll,r.x),l.addScaledVector(Dl,r.y),l.addScaledVector(Nl,r.z),l}static isFrontFacing(e,t,n,s){return ii.subVectors(n,t),Pi.subVectors(e,t),ii.cross(Pi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),ii.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,l,o;Rs.subVectors(s,n),Is.subVectors(r,n),Rl.subVectors(e,n);let h=Rs.dot(Rl),u=Is.dot(Rl);if(h<=0&&u<=0)return t.copy(n);Il.subVectors(e,s);let p=Rs.dot(Il),_=Is.dot(Il);if(p>=0&&_<=p)return t.copy(s);let m=h*_-p*u;if(m<=0&&h>=0&&p<=0)return l=h/(h-p),t.copy(n).addScaledVector(Rs,l);Pl.subVectors(e,r);let w=Rs.dot(Pl),y=Is.dot(Pl);if(y>=0&&w<=y)return t.copy(r);let L=w*u-h*y;if(L<=0&&u>=0&&y<=0)return o=u/(u-y),t.copy(n).addScaledVector(Is,o);let S=p*y-w*_;if(S<=0&&_-p>=0&&w-y>=0)return bh.subVectors(r,s),o=(_-p)/(_-p+(w-y)),t.copy(s).addScaledVector(bh,o);let d=1/(S+L+m);return l=L*d,o=m*d,t.copy(n).addScaledVector(Rs,l).addScaledVector(Is,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},vi=class{constructor(e=new ce(1/0,1/0,1/0),t=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let l=0,o=r.count;l<o;l++)e.isMesh===!0?e.getVertexPosition(l,si):si.fromBufferAttribute(r,l),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ma.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ma.copy(n.boundingBox)),ma.applyMatrix4(e.matrixWorld),this.union(ma)}let s=e.children;for(let r=0,l=s.length;r<l;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mr),ga.subVectors(this.max,mr),Ps.subVectors(e.a,mr),Ls.subVectors(e.b,mr),Ds.subVectors(e.c,mr),Vi.subVectors(Ls,Ps),Gi.subVectors(Ds,Ls),as.subVectors(Ps,Ds);let t=[0,-Vi.z,Vi.y,0,-Gi.z,Gi.y,0,-as.z,as.y,Vi.z,0,-Vi.x,Gi.z,0,-Gi.x,as.z,0,-as.x,-Vi.y,Vi.x,0,-Gi.y,Gi.x,0,-as.y,as.x,0];return!Ul(t,Ps,Ls,Ds,ga)||(t=[1,0,0,0,1,0,0,0,1],!Ul(t,Ps,Ls,Ds,ga))?!1:(xa.crossVectors(Vi,Gi),t=[xa.x,xa.y,xa.z],Ul(t,Ps,Ls,Ds,ga))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Di=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],si=new ce,ma=new vi,Ps=new ce,Ls=new ce,Ds=new ce,Vi=new ce,Gi=new ce,as=new ce,mr=new ce,ga=new ce,xa=new ce,os=new ce;function Ul(i,e,t,n,s){for(let r=0,l=i.length-3;r<=l;r+=3){os.fromArray(i,r);let o=s.x*Math.abs(os.x)+s.y*Math.abs(os.y)+s.z*Math.abs(os.z),h=e.dot(os),u=t.dot(os),p=n.dot(os);if(Math.max(-Math.max(h,u,p),Math.min(h,u,p))>o)return!1}return!0}var mn=new ce,_a=new Ut,Xd=0,On=class extends _i{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_c,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_a.fromBufferAttribute(this,t),_a.applyMatrix3(e),this.setXY(t,_a.x,_a.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix3(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=mi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array),s=nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array),s=nn(s,this.array),r=nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ar=class extends On{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Cr=class extends On{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Bn=class extends On{constructor(e,t,n){super(new Float32Array(e),t,n)}},qd=new vi,gr=new ce,Fl=new ce,qi=class{constructor(e=new ce,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):qd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,l=e.length;r<l;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gr.subVectors(e,this.center);let t=gr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(gr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gr.copy(e.center).add(Fl)),this.expandByPoint(gr.copy(e.center).sub(Fl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Yd=0,Kn=new Yt,Ol=new In,Ns=new ce,Xn=new vi,xr=new vi,Mn=new ce,Yn=class i extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ld(e)?Cr:Ar)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new vt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,n){return Kn.makeTranslation(e,t,n),this.applyMatrix4(Kn),this}scale(e,t,n){return Kn.makeScale(e,t,n),this.applyMatrix4(Kn),this}lookAt(e){return Ol.lookAt(e),Ol.updateMatrix(),this.applyMatrix4(Ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let l=e[s];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new Bn(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&mt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Xn.setFromBufferAttribute(r),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ce,1/0);return}if(e){let n=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let r=0,l=t.length;r<l;r++){let o=t[r];xr.setFromBufferAttribute(o),this.morphTargetsRelative?(Mn.addVectors(Xn.min,xr.min),Xn.expandByPoint(Mn),Mn.addVectors(Xn.max,xr.max),Xn.expandByPoint(Mn)):(Xn.expandByPoint(xr.min),Xn.expandByPoint(xr.max))}Xn.getCenter(n);let s=0;for(let r=0,l=e.count;r<l;r++)Mn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Mn));if(t)for(let r=0,l=t.length;r<l;r++){let o=t[r],h=this.morphTargetsRelative;for(let u=0,p=o.count;u<p;u++)Mn.fromBufferAttribute(o,u),h&&(Ns.fromBufferAttribute(e,u),Mn.add(Ns)),s=Math.max(s,n.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,l=this.getAttribute("tangent");(l===void 0||l.count!==n.count)&&(l=new On(new Float32Array(4*n.count),4),this.setAttribute("tangent",l));let o=[],h=[];for(let x=0;x<n.count;x++)o[x]=new ce,h[x]=new ce;let u=new ce,p=new ce,_=new ce,m=new Ut,w=new Ut,y=new Ut,L=new ce,S=new ce;function d(x,N,G){u.fromBufferAttribute(n,x),p.fromBufferAttribute(n,N),_.fromBufferAttribute(n,G),m.fromBufferAttribute(r,x),w.fromBufferAttribute(r,N),y.fromBufferAttribute(r,G),p.sub(u),_.sub(u),w.sub(m),y.sub(m);let Z=1/(w.x*y.y-y.x*w.y);isFinite(Z)&&(L.copy(p).multiplyScalar(y.y).addScaledVector(_,-w.y).multiplyScalar(Z),S.copy(_).multiplyScalar(w.x).addScaledVector(p,-y.x).multiplyScalar(Z),o[x].add(L),o[N].add(L),o[G].add(L),h[x].add(S),h[N].add(S),h[G].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let x=0,N=T.length;x<N;++x){let G=T[x],Z=G.start,R=G.count;for(let K=Z,H=Z+R;K<H;K+=3)d(e.getX(K+0),e.getX(K+1),e.getX(K+2))}let I=new ce,g=new ce,C=new ce,b=new ce;function U(x){C.fromBufferAttribute(s,x),b.copy(C);let N=o[x];I.copy(N),I.sub(C.multiplyScalar(C.dot(N))).normalize(),g.crossVectors(b,N);let Z=g.dot(h[x])<0?-1:1;l.setXYZW(x,I.x,I.y,I.z,Z)}for(let x=0,N=T.length;x<N;++x){let G=T[x],Z=G.start,R=G.count;for(let K=Z,H=Z+R;K<H;K+=3)U(e.getX(K+0)),U(e.getX(K+1)),U(e.getX(K+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new On(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,w=n.count;m<w;m++)n.setXYZ(m,0,0,0);let s=new ce,r=new ce,l=new ce,o=new ce,h=new ce,u=new ce,p=new ce,_=new ce;if(e)for(let m=0,w=e.count;m<w;m+=3){let y=e.getX(m+0),L=e.getX(m+1),S=e.getX(m+2);s.fromBufferAttribute(t,y),r.fromBufferAttribute(t,L),l.fromBufferAttribute(t,S),p.subVectors(l,r),_.subVectors(s,r),p.cross(_),o.fromBufferAttribute(n,y),h.fromBufferAttribute(n,L),u.fromBufferAttribute(n,S),o.add(p),h.add(p),u.add(p),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(L,h.x,h.y,h.z),n.setXYZ(S,u.x,u.y,u.z)}else for(let m=0,w=t.count;m<w;m+=3)s.fromBufferAttribute(t,m+0),r.fromBufferAttribute(t,m+1),l.fromBufferAttribute(t,m+2),p.subVectors(l,r),_.subVectors(s,r),p.cross(_),n.setXYZ(m+0,p.x,p.y,p.z),n.setXYZ(m+1,p.x,p.y,p.z),n.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mn.fromBufferAttribute(e,t),Mn.normalize(),e.setXYZ(t,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(o,h){let u=o.array,p=o.itemSize,_=o.normalized,m=new u.constructor(h.length*p),w=0,y=0;for(let L=0,S=h.length;L<S;L++){o.isInterleavedBufferAttribute?w=h[L]*o.data.stride+o.offset:w=h[L]*p;for(let d=0;d<p;d++)m[y++]=u[w++]}return new On(m,p,_)}if(this.index===null)return mt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let h=s[o],u=e(h,n);t.setAttribute(o,u)}let r=this.morphAttributes;for(let o in r){let h=[],u=r[o];for(let p=0,_=u.length;p<_;p++){let m=u[p],w=e(m,n);h.push(w)}t.morphAttributes[o]=h}t.morphTargetsRelative=this.morphTargetsRelative;let l=this.groups;for(let o=0,h=l.length;o<h;o++){let u=l[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let h=this.parameters;for(let u in h)h[u]!==void 0&&(e[u]=h[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let h in n){let u=n[h];e.data.attributes[h]=u.toJSON(e.data)}let s={},r=!1;for(let h in this.morphAttributes){let u=this.morphAttributes[h],p=[];for(let _=0,m=u.length;_<m;_++){let w=u[_];p.push(w.toJSON(e.data))}p.length>0&&(s[h]=p,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let u in s){let p=s[u];this.setAttribute(u,p.clone(t))}let r=e.morphAttributes;for(let u in r){let p=[],_=r[u];for(let m=0,w=_.length;m<w;m++)p.push(_[m].clone(t));this.morphAttributes[u]=p}this.morphTargetsRelative=e.morphTargetsRelative;let l=e.groups;for(let u=0,p=l.length;u<p;u++){let _=l[u];this.addGroup(_.start,_.count,_.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_c,this.updateRanges=[],this.version=0,this.uuid=Xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Nn=new ce,Ir=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Nn.fromBufferAttribute(this,t),Nn.applyMatrix4(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nn.fromBufferAttribute(this,t),Nn.applyNormalMatrix(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nn.fromBufferAttribute(this,t),Nn.transformDirection(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=mi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nn(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=mi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=mi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=mi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=mi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array),s=nn(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array),s=nn(s,this.array),r=nn(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){wr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new On(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){wr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Bl=new ce,Zd=new ce,Jd=new vt,qn=class{constructor(e=new ce(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Bl.subVectors(n,t).cross(Zd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Bl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let l=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(l<0||l>1)?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Jd.getNormalMatrix(e),s=this.coplanarPoint(Bl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},$d=0,Yi=class extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=Xi(),this.name="",this.type="Material",this.blending=Qs,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tc,this.blendDst=nc,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Da,this.stencilZFail=Da,this.stencilZPass=Da,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){mt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){mt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let l=[];for(let o in r){let h=r[o];delete h.metadata,l.push(h)}return l}if(t){let r=s(e.textures),l=s(e.images);r.length>0&&(n.textures=r),l.length>0&&(n.images=l)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new qn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ut().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ut().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ni=new ce,kl=new ce,ya=new ce,va=new ce,Pr=class{constructor(e=new ce,t=new ce(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){kl.copy(e).add(t).multiplyScalar(.5),ya.copy(t).sub(e).normalize(),va.copy(this.origin).sub(kl);let r=e.distanceTo(t)*.5,l=-this.direction.dot(ya),o=va.dot(this.direction),h=-va.dot(ya),u=va.lengthSq(),p=Math.abs(1-l*l),_,m,w,y;if(p>0)if(_=l*h-o,m=l*o-h,y=r*p,_>=0)if(m>=-y)if(m<=y){let L=1/p;_*=L,m*=L,w=_*(_+l*m+2*o)+m*(l*_+m+2*h)+u}else m=r,_=Math.max(0,-(l*m+o)),w=-_*_+m*(m+2*h)+u;else m=-r,_=Math.max(0,-(l*m+o)),w=-_*_+m*(m+2*h)+u;else m<=-y?(_=Math.max(0,-(-l*r+o)),m=_>0?-r:Math.min(Math.max(-r,-h),r),w=-_*_+m*(m+2*h)+u):m<=y?(_=0,m=Math.min(Math.max(-r,-h),r),w=m*(m+2*h)+u):(_=Math.max(0,-(l*r+o)),m=_>0?r:Math.min(Math.max(-r,-h),r),w=-_*_+m*(m+2*h)+u);else m=l>0?-r:r,_=Math.max(0,-(l*m+o)),w=-_*_+m*(m+2*h)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,_),s&&s.copy(kl).addScaledVector(ya,m),w}intersectSphere(e,t){if(e.radius<0)return null;Ni.subVectors(e.center,this.origin);let n=Ni.dot(this.direction),s=Ni.dot(Ni)-n*n,r=e.radius*e.radius;if(s>r)return null;let l=Math.sqrt(r-s),o=n-l,h=n+l;return h<0?null:o<0?this.at(h,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,l,o,h,u=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,m=this.origin;return u>=0?(n=(e.min.x-m.x)*u,s=(e.max.x-m.x)*u):(n=(e.max.x-m.x)*u,s=(e.min.x-m.x)*u),p>=0?(r=(e.min.y-m.y)*p,l=(e.max.y-m.y)*p):(r=(e.max.y-m.y)*p,l=(e.min.y-m.y)*p),n>l||r>s||((r>n||isNaN(n))&&(n=r),(l<s||isNaN(s))&&(s=l),_>=0?(o=(e.min.z-m.z)*_,h=(e.max.z-m.z)*_):(o=(e.max.z-m.z)*_,h=(e.min.z-m.z)*_),n>h||o>s)||((o>n||n!==n)&&(n=o),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,n,s,r){let l=this.origin,o=this.direction,h=o.x,u=o.y,p=o.z,_=e.x-l.x,m=e.y-l.y,w=e.z-l.z,y=t.x-l.x,L=t.y-l.y,S=t.z-l.z,d=n.x-l.x,T=n.y-l.y,I=n.z-l.z,g=Math.abs(h),C=Math.abs(u),b=Math.abs(p),U,x,N,G,Z,R,K,H,J,fe,ge,be;if(g>=C&&g>=b?(N=h,R=_,J=y,be=d,h>=0?(U=u,x=p,G=m,Z=w,K=L,H=S,fe=T,ge=I):(U=p,x=u,G=w,Z=m,K=S,H=L,fe=I,ge=T)):C>=b?(N=u,R=m,J=L,be=T,u>=0?(U=p,x=h,G=w,Z=_,K=S,H=y,fe=I,ge=d):(U=h,x=p,G=_,Z=w,K=y,H=S,fe=d,ge=I)):(N=p,R=w,J=S,be=I,p>=0?(U=h,x=u,G=_,Z=m,K=y,H=L,fe=d,ge=T):(U=u,x=h,G=m,Z=_,K=L,H=y,fe=T,ge=d)),N===0)return null;let j=U/N,M=x/N,Se=1/N,Ve=G-j*R,Re=Z-M*R,ee=K-j*J,ht=H-M*J,Ct=fe-j*be,ye=ge-M*be,he=Ct*ht-ye*ee,He=Ve*ye-Re*Ct,ft=ee*Re-ht*Ve;if(s){if(he<0||He<0||ft<0)return null}else if((he<0||He<0||ft<0)&&(he>0||He>0||ft>0))return null;let ke=he+He+ft;if(ke===0)return null;let We=Se*(he*R+He*J+ft*be);return(ke>0?We<0:We>0)?null:this.at(We/ke,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Lr=class extends Yi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.combine=ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Sh=new Yt,ls=new Pr,Ma=new qi,wh=new ce,ba=new ce,Sa=new ce,wa=new ce,zl=new ce,Ta=new ce,Th=new ce,Ea=new ce,Pn=class extends In{constructor(e=new Yn,t=new Lr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,l=s.length;r<l;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ta.set(0,0,0);for(let h=0,u=r.length;h<u;h++){let p=o[h],_=r[h];p!==0&&(zl.fromBufferAttribute(_,e),l?Ta.addScaledVector(zl,p):Ta.addScaledVector(zl.sub(t),p))}t.add(Ta)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(r),ls.copy(e.ray).recast(e.near),!(Ma.containsPoint(ls.origin)===!1&&(ls.intersectSphere(Ma,wh)===null||ls.origin.distanceToSquared(wh)>(e.far-e.near)**2))&&(Sh.copy(r).invert(),ls.copy(e.ray).applyMatrix4(Sh),!(n.boundingBox!==null&&ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,n){let s,r=this.geometry,l=this.material,o=r.index,h=r.attributes.position,u=r.attributes.uv,p=r.attributes.uv1,_=r.attributes.normal,m=r.groups,w=r.drawRange;if(o!==null)if(Array.isArray(l))for(let y=0,L=m.length;y<L;y++){let S=m[y],d=l[S.materialIndex],T=Math.max(S.start,w.start),I=Math.min(o.count,Math.min(S.start+S.count,w.start+w.count));for(let g=T,C=I;g<C;g+=3){let b=o.getX(g),U=o.getX(g+1),x=o.getX(g+2);s=Aa(this,d,e,n,u,p,_,b,U,x),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{let y=Math.max(0,w.start),L=Math.min(o.count,w.start+w.count);for(let S=y,d=L;S<d;S+=3){let T=o.getX(S),I=o.getX(S+1),g=o.getX(S+2);s=Aa(this,l,e,n,u,p,_,T,I,g),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(l))for(let y=0,L=m.length;y<L;y++){let S=m[y],d=l[S.materialIndex],T=Math.max(S.start,w.start),I=Math.min(h.count,Math.min(S.start+S.count,w.start+w.count));for(let g=T,C=I;g<C;g+=3){let b=g,U=g+1,x=g+2;s=Aa(this,d,e,n,u,p,_,b,U,x),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{let y=Math.max(0,w.start),L=Math.min(h.count,w.start+w.count);for(let S=y,d=L;S<d;S+=3){let T=S,I=S+1,g=S+2;s=Aa(this,l,e,n,u,p,_,T,I,g),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}}};function Kd(i,e,t,n,s,r,l,o){let h;if(e.side===Un?h=n.intersectTriangle(l,r,s,!0,o):h=n.intersectTriangle(s,r,l,e.side===ji,o),h===null)return null;Ea.copy(o),Ea.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(Ea);return u<t.near||u>t.far?null:{distance:u,point:Ea.clone(),object:i}}function Aa(i,e,t,n,s,r,l,o,h,u){i.getVertexPosition(o,ba),i.getVertexPosition(h,Sa),i.getVertexPosition(u,wa);let p=Kd(i,e,t,n,ba,Sa,wa,Th);if(p){let _=new ce;Wi.getBarycoord(Th,ba,Sa,wa,_),s&&(p.uv=Wi.getInterpolatedAttribute(s,o,h,u,_,new Ut)),r&&(p.uv1=Wi.getInterpolatedAttribute(r,o,h,u,_,new Ut)),l&&(p.normal=Wi.getInterpolatedAttribute(l,o,h,u,_,new ce),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));let m={a:o,b:h,c:u,normal:new ce,materialIndex:0};Wi.getNormal(ba,Sa,wa,m.normal),p.face=m,p.barycoord=_}return p}var Dr=class extends kn{constructor(e=null,t=1,n=1,s,r,l,o,h,u=bn,p=bn,_,m){super(null,l,o,h,u,p,s,r,_,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fs=class extends On{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Us=new Yt,Eh=new Yt,Ca=[],Ah=new vi,jd=new Yt,_r=new Pn,yr=new qi,Nr=class extends Pn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,jd)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Us),Ah.copy(e.boundingBox).applyMatrix4(Us),this.boundingBox.union(Ah)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Us),yr.copy(e.boundingSphere).applyMatrix4(Us),this.boundingSphere.union(yr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,l=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[l+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(_r.geometry=this.geometry,_r.material=this.material,_r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yr.copy(this.boundingSphere),yr.applyMatrix4(n),e.ray.intersectsSphere(yr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Us),Eh.multiplyMatrices(n,Us),_r.matrixWorld=Eh,_r.raycast(e,Ca);for(let l=0,o=Ca.length;l<o;l++){let h=Ca[l];h.instanceId=r,h.object=this,t.push(h)}Ca.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new fs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Dr(new Float32Array(s*this.count),s,this.count,go,jn));let r=this.morphTexture.source.data.data,l=0;for(let u=0;u<n.length;u++)l+=n[u];let o=this.geometry.morphTargetsRelative?1:1-l,h=s*e;return r[h]=o,r.set(n,h+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},cs=new qi,Qd=new Ut(.5,.5),Ra=new ce,Ys=class{constructor(e=new qn,t=new qn,n=new qn,s=new qn,r=new qn,l=new qn){this.planes=[e,t,n,s,r,l]}set(e,t,n,s,r,l){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(l),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ri,n=!1){let s=this.planes,r=e.elements,l=r[0],o=r[1],h=r[2],u=r[3],p=r[4],_=r[5],m=r[6],w=r[7],y=r[8],L=r[9],S=r[10],d=r[11],T=r[12],I=r[13],g=r[14],C=r[15];if(s[0].setComponents(u-l,w-p,d-y,C-T).normalize(),s[1].setComponents(u+l,w+p,d+y,C+T).normalize(),s[2].setComponents(u+o,w+_,d+L,C+I).normalize(),s[3].setComponents(u-o,w-_,d-L,C-I).normalize(),n)s[4].setComponents(h,m,S,g).normalize(),s[5].setComponents(u-h,w-m,d-S,C-g).normalize();else if(s[4].setComponents(u-h,w-m,d-S,C-g).normalize(),t===ri)s[5].setComponents(u+h,w+m,d+S,C+g).normalize();else if(t===Gs)s[5].setComponents(h,m,S,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(e){cs.center.set(0,0,0);let t=Qd.distanceTo(e.center);return cs.radius=.7071067811865476+t,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ra.x=s.normal.x>0?e.max.x:e.min.x,Ra.y=s.normal.y>0?e.max.y:e.min.y,Ra.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ra)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ur=class extends kn{constructor(e=[],t=Qi,n,s,r,l,o,h,u,p){super(e,t,n,s,r,l,o,h,u,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Zi=class extends kn{constructor(e,t,n=oi,s,r,l,o=bn,h=bn,u,p=xi,_=1){if(p!==xi&&p!==es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let m={width:e,height:t,depth:_};super(m,s,r,l,o,h,p,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ws(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ya=class extends Zi{constructor(e,t=oi,n=Qi,s,r,l=bn,o=bn,h,u=xi){let p={width:e,height:e,depth:1},_=[p,p,p,p,p,p];super(e,e,t,n,s,r,l,o,h,u),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Fr=class extends kn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Zs=class i extends Yn{constructor(e=1,t=1,n=1,s=1,r=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:l};let o=this;s=Math.floor(s),r=Math.floor(r),l=Math.floor(l);let h=[],u=[],p=[],_=[],m=0,w=0;y("z","y","x",-1,-1,n,t,e,l,r,0),y("z","y","x",1,-1,n,t,-e,l,r,1),y("x","z","y",1,1,e,n,t,s,l,2),y("x","z","y",1,-1,e,n,-t,s,l,3),y("x","y","z",1,-1,e,t,n,s,r,4),y("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(h),this.setAttribute("position",new Bn(u,3)),this.setAttribute("normal",new Bn(p,3)),this.setAttribute("uv",new Bn(_,2));function y(L,S,d,T,I,g,C,b,U,x,N){let G=g/U,Z=C/x,R=g/2,K=C/2,H=b/2,J=U+1,fe=x+1,ge=0,be=0,j=new ce;for(let M=0;M<fe;M++){let Se=M*Z-K;for(let Ve=0;Ve<J;Ve++){let Re=Ve*G-R;j[L]=Re*T,j[S]=Se*I,j[d]=H,u.push(j.x,j.y,j.z),j[L]=0,j[S]=0,j[d]=b>0?1:-1,p.push(j.x,j.y,j.z),_.push(Ve/U),_.push(1-M/x),ge+=1}}for(let M=0;M<x;M++)for(let Se=0;Se<U;Se++){let Ve=m+Se+J*M,Re=m+Se+J*(M+1),ee=m+(Se+1)+J*(M+1),ht=m+(Se+1)+J*M;h.push(Ve,Re,ht),h.push(Re,ee,ht),be+=6}o.addGroup(w,be,N),w+=be,m+=ge}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Or=class i extends Yn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,l=t/2,o=Math.floor(n),h=Math.floor(s),u=o+1,p=h+1,_=e/o,m=t/h,w=[],y=[],L=[],S=[];for(let d=0;d<p;d++){let T=d*m-l;for(let I=0;I<u;I++){let g=I*_-r;y.push(g,-T,0),L.push(0,0,1),S.push(I/o),S.push(1-d/h)}}for(let d=0;d<h;d++)for(let T=0;T<o;T++){let I=T+u*d,g=T+u*(d+1),C=T+1+u*(d+1),b=T+1+u*d;w.push(I,g,b),w.push(g,C,b)}this.setIndex(w),this.setAttribute("position",new Bn(y,3)),this.setAttribute("normal",new Bn(L,3)),this.setAttribute("uv",new Bn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};function xs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Ch(s))s.isRenderTargetTexture?(mt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Ch(s[0])){let r=[];for(let l=0,o=s.length;l<o;l++)r[l]=s[l].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Ln(i){let e={};for(let t=0;t<i.length;t++){let n=xs(i[t]);for(let s in n)e[s]=n[s]}return e}function Ch(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ef(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function yc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ft.workingColorSpace}var vu={clone:xs,merge:Ln},tf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Zn=class extends Yi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tf,this.fragmentShader=nf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=ef(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let l=this.uniforms[s].value;l&&l.isTexture?t.uniforms[s]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[s]={type:"m4",value:l.toArray()}:t.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Et().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ut().fromArray(s.value);break;case"v3":this.uniforms[n].value=new ce().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ln().fromArray(s.value);break;case"m3":this.uniforms[n].value=new vt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Yt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Js=class extends Zn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Br=class extends Yi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$o,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var $s=class extends Yi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=au,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Za=class extends Yi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Fs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Vl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ji=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let l;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}l=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let h=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===h)break;if(s=r,r=t[--n-1],e>=r)break e}l=n,n=0;break t}break n}for(;n<l;){let o=n+l>>>1;e<t[o]?l=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let l=0;l!==s;++l)t[l]=n[r+l];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ja=class extends Ji{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wl,endingEnd:Wl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,l=e+1,o=s[r],h=s[l];if(o===void 0)switch(this.getSettings_().endingStart){case Xl:r=e,o=2*t-n;break;case ql:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(h===void 0)switch(this.getSettings_().endingEnd){case Xl:l=e,h=2*n-t;break;case ql:l=1,h=n+s[1]-s[0];break;default:l=e-1,h=t}let u=(n-t)*.5,p=this.valueSize;this._weightPrev=u/(t-o),this._weightNext=u/(h-n),this._offsetPrev=r*p,this._offsetNext=l*p}interpolate_(e,t,n,s){let r=this.resultBuffer,l=this.sampleValues,o=this.valueSize,h=e*o,u=h-o,p=this._offsetPrev,_=this._offsetNext,m=this._weightPrev,w=this._weightNext,y=(n-t)/(s-t),L=y*y,S=L*y,d=-m*S+2*m*L-m*y,T=(1+m)*S+(-1.5-2*m)*L+(-.5+m)*y+1,I=(-1-w)*S+(1.5+w)*L+.5*y,g=w*S-w*L;for(let C=0;C!==o;++C)r[C]=d*l[p+C]+T*l[u+C]+I*l[h+C]+g*l[_+C];return r}},$a=class extends Ji{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,l=this.sampleValues,o=this.valueSize,h=e*o,u=h-o,p=(n-t)/(s-t),_=1-p;for(let m=0;m!==o;++m)r[m]=l[u+m]*_+l[h+m]*p;return r}},Ka=class extends Ji{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ja=class extends Ji{interpolate_(e,t,n,s){let r=this.resultBuffer,l=this.sampleValues,o=this.valueSize,h=e*o,u=h-o,p=this.inTangents,_=this.outTangents;if(!p||!_){let y=(n-t)/(s-t),L=1-y;for(let S=0;S!==o;++S)r[S]=l[u+S]*L+l[h+S]*y;return r}let m=o*2,w=e-1;for(let y=0;y!==o;++y){let L=l[u+y],S=l[h+y],d=w*m+y*2,T=_[d],I=_[d+1],g=e*m+y*2,C=p[g],b=p[g+1],U=rf(n,t,T,C,s);r[y]=Mu(U,L,I,b,S)}return r}};function Mu(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function sf(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function rf(i,e,t,n,s){let r=(i-e)/(s-e);for(let l=0;l<8;l++){let o=Mu(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let h=sf(r,e,t,n,s);if(Math.abs(h)<1e-10)break;r=Math.max(0,Math.min(1,r-o/h))}return r}var Jn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fs(t,this.TimeBufferType),this.values=Fs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Fs(e.times,Array),values:Fs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Vl(e.settings)&&(n.settings={inTangents:Fs(e.settings.inTangents,Array),outTangents:Fs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $a(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ja(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case vr:t=this.InterpolantFactoryMethodDiscrete;break;case Ga:t=this.InterpolantFactoryMethodLinear;break;case La:t=this.InterpolantFactoryMethodSmooth;break;case Hl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return mt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vr;case this.InterpolantFactoryMethodLinear:return Ga;case this.InterpolantFactoryMethodSmooth:return La;case this.InterpolantFactoryMethodBezier:return Hl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Vl(this.settings)&&(Rh(this.settings.inTangents,e),Rh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,l=s-1;for(;r!==s&&n[r]<e;)++r;for(;l!==-1&&n[l]>t;)--l;if(++l,r!==0||l!==s){r>=l&&(l=Math.max(l,1),r=l-1);let o=this.getValueSize();this.times=n.slice(r,l),this.values=this.values.slice(r*o,l*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(pt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(pt("KeyframeTrack: Track is empty.",this),e=!1);let l=null;for(let o=0;o!==r;o++){let h=n[o];if(typeof h=="number"&&isNaN(h)){pt("KeyframeTrack: Time is not a valid number.",this,o,h),e=!1;break}if(l!==null&&l>h){pt("KeyframeTrack: Out of order keys.",this,o,h,l),e=!1;break}l=h}if(s!==void 0&&Dd(s))for(let o=0,h=s.length;o!==h;++o){let u=s[o];if(isNaN(u)){pt("KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===La,r=e.length-1,l=1;for(let o=1;o<r;++o){let h=!1,u=e[o],p=e[o+1];if(u!==p&&(o!==1||u!==e[0]))if(s)h=!0;else{let _=o*n,m=_-n,w=_+n;for(let y=0;y!==n;++y){let L=t[_+y];if(L!==t[m+y]||L!==t[w+y]){h=!0;break}}}if(h){if(o!==l){e[l]=e[o];let _=o*n,m=l*n;for(let w=0;w!==n;++w)t[m+w]=t[_+w]}++l}}if(r>0){e[l]=e[r];for(let o=r*n,h=l*n,u=0;u!==n;++u)t[h+u]=t[o+u];++l}return l!==e.length?(this.times=e.slice(0,l),this.values=t.slice(0,l*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Vl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Rh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Jn.prototype.ValueTypeName="";Jn.prototype.TimeBufferType=Float32Array;Jn.prototype.ValueBufferType=Float32Array;Jn.prototype.DefaultInterpolation=Ga;var $i=class extends Jn{constructor(e,t,n){super(e,t,n)}};$i.prototype.ValueTypeName="bool";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=vr;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var Qa=class extends Jn{constructor(e,t,n,s){super(e,t,n,s)}};Qa.prototype.ValueTypeName="color";var eo=class extends Jn{constructor(e,t,n,s){super(e,t,n,s)}};eo.prototype.ValueTypeName="number";var to=class extends Ji{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,l=this.sampleValues,o=this.valueSize,h=(n-t)/(s-t),u=e*o;for(let p=u+o;u!==p;u+=4)yi.slerpFlat(r,0,l,u-o,l,u,h);return r}},kr=class extends Jn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new to(this.times,this.values,this.getValueSize(),e)}};kr.prototype.ValueTypeName="quaternion";kr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ki=class extends Jn{constructor(e,t,n){super(e,t,n)}};Ki.prototype.ValueTypeName="string";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=vr;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var no=class extends Jn{constructor(e,t,n,s){super(e,t,n,s)}};no.prototype.ValueTypeName="vector";var io=class{constructor(e,t,n){let s=this,r=!1,l=0,o=0,h,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(p){o++,r===!1&&s.onStart!==void 0&&s.onStart(p,l,o),r=!0},this.itemEnd=function(p){l++,s.onProgress!==void 0&&s.onProgress(p,l,o),l===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return p=p.normalize("NFC"),h?h(p):p},this.setURLModifier=function(p){return h=p,this},this.addHandler=function(p,_){return u.push(p,_),this},this.removeHandler=function(p){let _=u.indexOf(p);return _!==-1&&u.splice(_,2),this},this.getHandler=function(p){for(let _=0,m=u.length;_<m;_+=2){let w=u[_],y=u[_+1];if(w.global&&(w.lastIndex=0),w.test(p))return y}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},bu=new io,so=class{constructor(e){this.manager=e!==void 0?e:bu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};so.DEFAULT_MATERIAL_NAME="__DEFAULT";var zr=class extends In{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Vr=class extends zr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(In.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Gl=new Yt,Ih=new ce,Ph=new ce,ro=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.mapType=Vn,this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ys,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ih.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ih),Ph.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ph),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Gl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Gl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,l=s?s.z/r.x:1,o=s?s.w/r.y:1,h=s?s.x/r.x:0,u=s?s.y/r.y:0;e.coordinateSystem===Gs||e.reversedDepth?t.set(.5*l,0,0,.5*l+h,0,.5*o,0,.5*o+u,0,0,1,0,0,0,0,1):t.set(.5*l,0,0,.5*l+h,0,.5*o,0,.5*o+u,0,0,.5,.5,0,0,0,1),t.multiply(Gl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ia=new ce,Pa=new yi,pi=new ce,Gr=class extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ia,Pa,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ia,Pa,pi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ia,Pa,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ia,Pa,pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Hi=new ce,Lh=new Ut,Dh=new Ut,Rn=class extends Gr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ha*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(vl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ha*2*Math.atan(Math.tan(vl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,t){return this.getViewBounds(e,Lh,Dh),t.subVectors(Dh,Lh)}setViewOffset(e,t,n,s,r,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(vl*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,l=this.view;if(this.view!==null&&this.view.enabled){let h=l.fullWidth,u=l.fullHeight;r+=l.offsetX*s/h,t-=l.offsetY*n/u,s*=l.width/h,n*=l.height/u}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Ks=class extends Gr{constructor(e=-1,t=1,n=1,s=-1,r=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,l=n+e,o=s+t,h=s-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,l=r+u*this.view.width,o-=p*this.view.offsetY,h=o-p*this.view.height}this.projectionMatrix.makeOrthographic(r,l,o,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Yl=class extends ro{constructor(){super(new Ks(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Hr=class extends zr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(In.DEFAULT_UP),this.updateMatrix(),this.target=new In,this.shadow=new Yl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Os=-90,Bs=1,ao=class extends In{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Rn(Os,Bs,e,t);s.layers=this.layers,this.add(s);let r=new Rn(Os,Bs,e,t);r.layers=this.layers,this.add(r);let l=new Rn(Os,Bs,e,t);l.layers=this.layers,this.add(l);let o=new Rn(Os,Bs,e,t);o.layers=this.layers,this.add(o);let h=new Rn(Os,Bs,e,t);h.layers=this.layers,this.add(h);let u=new Rn(Os,Bs,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,l,o,h]=t;for(let u of t)this.remove(u);if(e===ri)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Gs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,l,o,h,u,p]=this.children,_=e.getRenderTarget(),m=e.getActiveCubeFace(),w=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;let L=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,2,s),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(n,4,s),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.generateMipmaps=L,e.setRenderTarget(n,5,s),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(_,m,w),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},oo=class extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var vc="\\[\\]\\.:\\/",af=new RegExp("["+vc+"]","g"),Mc="[^"+vc+"]",of="[^"+vc.replace("\\.","")+"]",lf=/((?:WC+[\/:])*)/.source.replace("WC",Mc),cf=/(WCOD+)?/.source.replace("WCOD",of),hf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mc),uf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mc),df=new RegExp("^"+lf+cf+hf+uf+"$"),ff=["material","materials","bones","map"],Zl=class{constructor(e,t,n){let s=n||an.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},an=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(af,"")}static parseTrackName(e){let t=df.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ff.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let l=0;l<r.length;l++){let o=r[l];if(o.name===t||o.uuid===t)return o;let h=n(o.children);if(h)return h}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){mt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){pt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){pt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let p=0;p<e.length;p++)if(e[p].name===u){u=p;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){pt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){pt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){pt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let l=e[s];if(l===void 0){let u=t.nodeName;pt("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}h=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=r}else l.fromArray!==void 0&&l.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(h=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};an.Composite=Zl;an.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};an.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};an.prototype.GetterByBindingType=[an.prototype._getValue_direct,an.prototype._getValue_array,an.prototype._getValue_arrayElement,an.prototype._getValue_toArray];an.prototype.SetterByBindingTypeAndVersioning=[[an.prototype._setValue_direct,an.prototype._setValue_direct_setNeedsUpdate,an.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[an.prototype._setValue_array,an.prototype._setValue_array_setNeedsUpdate,an.prototype._setValue_array_setMatrixWorldNeedsUpdate],[an.prototype._setValue_arrayElement,an.prototype._setValue_arrayElement_setNeedsUpdate,an.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[an.prototype._setValue_fromArray,an.prototype._setValue_fromArray_setNeedsUpdate,an.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var o1=new Float32Array(1);var Nh=new Yt,Wr=class{constructor(e,t,n=0,s=1/0){this.ray=new Pr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Xs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):pt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Nh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nh),this}intersectObject(e,t=!0,n=[]){return Jl(e,this,n,t),n.sort(Uh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Jl(e[s],this,n,t);return n.sort(Uh),n}};function Uh(i,e){return i.distance-e.distance}function Jl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let l=0,o=r.length;l<o;l++)Jl(r[l],e,t,!0)}}var Ac=class Ac{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Ac.prototype.isMatrix2=!0;var $l=Ac;function bc(i,e,t,n){let s=pf(n);switch(t){case mc:return i*e;case go:return i*e/s.components*s.byteLength;case xo:return i*e/s.components*s.byteLength;case ts:return i*e*2/s.components*s.byteLength;case _o:return i*e*2/s.components*s.byteLength;case gc:return i*e*3/s.components*s.byteLength;case Qn:return i*e*4/s.components*s.byteLength;case yo:return i*e*4/s.components*s.byteLength;case Zr:case Jr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $r:case Kr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Mo:case So:return Math.max(i,16)*Math.max(e,8)/4;case vo:case bo:return Math.max(i,8)*Math.max(e,8)/2;case wo:case To:case Ao:case Co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Eo:case jr:case Ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Io:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Po:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Lo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Do:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case No:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Uo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Fo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Oo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ko:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case zo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Vo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Go:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ho:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Wo:case Xo:case qo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Yo:case Zo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Qr:case Jo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function pf(i){switch(i){case Vn:case uc:return{byteLength:1,components:1};case er:case dc:case li:return{byteLength:2,components:1};case po:case mo:return{byteLength:2,components:4};case oi:case fo:case jn:return{byteLength:4,components:1};case fc:case pc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?mt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Wu(){let i=null,e=!1,t=null,n=null;function s(r,l){n=i.requestAnimationFrame(s),t(r,l)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function gf(i){let e=new WeakMap;function t(o,h){let u=o.array,p=o.usage,_=u.byteLength,m=i.createBuffer();i.bindBuffer(h,m),i.bufferData(h,u,p),o.onUploadCallback();let w;if(u instanceof Float32Array)w=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)w=i.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?w=i.HALF_FLOAT:w=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)w=i.SHORT;else if(u instanceof Uint32Array)w=i.UNSIGNED_INT;else if(u instanceof Int32Array)w=i.INT;else if(u instanceof Int8Array)w=i.BYTE;else if(u instanceof Uint8Array)w=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)w=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:w,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:_}}function n(o,h,u){let p=h.array,_=h.updateRanges;if(i.bindBuffer(u,o),_.length===0)i.bufferSubData(u,0,p);else{_.sort((w,y)=>w.start-y.start);let m=0;for(let w=1;w<_.length;w++){let y=_[m],L=_[w];L.start<=y.start+y.count+1?y.count=Math.max(y.count,L.start+L.count-y.start):(++m,_[m]=L)}_.length=m+1;for(let w=0,y=_.length;w<y;w++){let L=_[w];i.bufferSubData(u,L.start*p.BYTES_PER_ELEMENT,p,L.start,L.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let h=e.get(o);h&&(i.deleteBuffer(h.buffer),e.delete(o))}function l(o,h){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let p=e.get(o);(!p||p.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=e.get(o);if(u===void 0)e.set(o,t(o,h));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,h),u.version=o.version}}return{get:s,remove:r,update:l}}var xf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_f=`#ifdef USE_ALPHAHASH
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
#endif`,yf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sf=`#ifdef USE_AOMAP
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
#endif`,wf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tf=`#ifdef USE_BATCHING
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
#endif`,Ef=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Af=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,If=`#ifdef USE_IRIDESCENCE
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
#endif`,Pf=`#ifdef USE_BUMPMAP
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
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ff=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Of=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Bf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,kf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,zf=`#define PI 3.141592653589793
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
} // validated`,Vf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gf=`vec3 transformedNormal = objectNormal;
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
#endif`,Hf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jf=`#ifdef USE_ENVMAP
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
#endif`,$f=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
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
#endif`,jf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qf=`#ifdef USE_ENVMAP
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
#endif`,ep=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,np=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ip=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sp=`#ifdef USE_GRADIENTMAP
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
}`,rp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ap=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,cp=`#ifdef USE_ENVMAP
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
#endif`,hp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pp=`PhysicalMaterial material;
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
#endif`,mp=`uniform sampler2D dfgLUT;
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
}`,gp=`
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
#endif`,xp=`#if defined( RE_IndirectDiffuse )
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
#endif`,_p=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,vp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ep=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ap=`#if defined( USE_POINTS_UV )
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
#endif`,Cp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ip=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dp=`#ifdef USE_MORPHTARGETS
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
#endif`,Np=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Up=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,zp=`#ifdef USE_NORMALMAP
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
#endif`,Vp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$p=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nm=`float getShadowMask() {
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
}`,im=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sm=`#ifdef USE_SKINNING
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
#endif`,rm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,am=`#ifdef USE_SKINNING
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
#endif`,om=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,um=`#ifdef USE_TRANSMISSION
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
#endif`,dm=`#ifdef USE_TRANSMISSION
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
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_m=`uniform sampler2D t2D;
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
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sm=`#include <common>
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
}`,wm=`#if DEPTH_PACKING == 3200
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
}`,Tm=`#define DISTANCE
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
}`,Em=`#define DISTANCE
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
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rm=`uniform float scale;
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
}`,Im=`uniform vec3 diffuse;
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
}`,Pm=`#include <common>
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
}`,Lm=`uniform vec3 diffuse;
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
}`,Dm=`#define LAMBERT
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
}`,Nm=`#define LAMBERT
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
}`,Um=`#define MATCAP
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
}`,Fm=`#define MATCAP
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
}`,Om=`#define NORMAL
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
}`,Bm=`#define NORMAL
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
}`,km=`#define PHONG
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
}`,zm=`#define PHONG
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
}`,Vm=`#define STANDARD
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
}`,Gm=`#define STANDARD
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
}`,Hm=`#define TOON
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
}`,Wm=`#define TOON
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
}`,Xm=`uniform float size;
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
}`,qm=`uniform vec3 diffuse;
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
}`,Ym=`#include <common>
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
}`,Zm=`uniform vec3 color;
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
}`,Jm=`uniform float rotation;
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
}`,$m=`uniform vec3 diffuse;
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
}`,At={alphahash_fragment:xf,alphahash_pars_fragment:_f,alphamap_fragment:yf,alphamap_pars_fragment:vf,alphatest_fragment:Mf,alphatest_pars_fragment:bf,aomap_fragment:Sf,aomap_pars_fragment:wf,batching_pars_vertex:Tf,batching_vertex:Ef,begin_vertex:Af,beginnormal_vertex:Cf,bsdfs:Rf,iridescence_fragment:If,bumpmap_pars_fragment:Pf,clipping_planes_fragment:Lf,clipping_planes_pars_fragment:Df,clipping_planes_pars_vertex:Nf,clipping_planes_vertex:Uf,color_fragment:Ff,color_pars_fragment:Of,color_pars_vertex:Bf,color_vertex:kf,common:zf,cube_uv_reflection_fragment:Vf,defaultnormal_vertex:Gf,displacementmap_pars_vertex:Hf,displacementmap_vertex:Wf,emissivemap_fragment:Xf,emissivemap_pars_fragment:qf,colorspace_fragment:Yf,colorspace_pars_fragment:Zf,envmap_fragment:Jf,envmap_common_pars_fragment:$f,envmap_pars_fragment:Kf,envmap_pars_vertex:jf,envmap_physical_pars_fragment:cp,envmap_vertex:Qf,fog_vertex:ep,fog_pars_vertex:tp,fog_fragment:np,fog_pars_fragment:ip,gradientmap_pars_fragment:sp,lightmap_pars_fragment:rp,lights_lambert_fragment:ap,lights_lambert_pars_fragment:op,lights_pars_begin:lp,lights_toon_fragment:hp,lights_toon_pars_fragment:up,lights_phong_fragment:dp,lights_phong_pars_fragment:fp,lights_physical_fragment:pp,lights_physical_pars_fragment:mp,lights_fragment_begin:gp,lights_fragment_maps:xp,lights_fragment_end:_p,lightprobes_pars_fragment:yp,logdepthbuf_fragment:vp,logdepthbuf_pars_fragment:Mp,logdepthbuf_pars_vertex:bp,logdepthbuf_vertex:Sp,map_fragment:wp,map_pars_fragment:Tp,map_particle_fragment:Ep,map_particle_pars_fragment:Ap,metalnessmap_fragment:Cp,metalnessmap_pars_fragment:Rp,morphinstance_vertex:Ip,morphcolor_vertex:Pp,morphnormal_vertex:Lp,morphtarget_pars_vertex:Dp,morphtarget_vertex:Np,normal_fragment_begin:Up,normal_fragment_maps:Fp,normal_pars_fragment:Op,normal_pars_vertex:Bp,normal_vertex:kp,normalmap_pars_fragment:zp,clearcoat_normal_fragment_begin:Vp,clearcoat_normal_fragment_maps:Gp,clearcoat_pars_fragment:Hp,iridescence_pars_fragment:Wp,opaque_fragment:Xp,packing:qp,premultiplied_alpha_fragment:Yp,project_vertex:Zp,dithering_fragment:Jp,dithering_pars_fragment:$p,roughnessmap_fragment:Kp,roughnessmap_pars_fragment:jp,shadowmap_pars_fragment:Qp,shadowmap_pars_vertex:em,shadowmap_vertex:tm,shadowmask_pars_fragment:nm,skinbase_vertex:im,skinning_pars_vertex:sm,skinning_vertex:rm,skinnormal_vertex:am,specularmap_fragment:om,specularmap_pars_fragment:lm,tonemapping_fragment:cm,tonemapping_pars_fragment:hm,transmission_fragment:um,transmission_pars_fragment:dm,uv_pars_fragment:fm,uv_pars_vertex:pm,uv_vertex:mm,worldpos_vertex:gm,background_vert:xm,background_frag:_m,backgroundCube_vert:ym,backgroundCube_frag:vm,cube_vert:Mm,cube_frag:bm,depth_vert:Sm,depth_frag:wm,distance_vert:Tm,distance_frag:Em,equirect_vert:Am,equirect_frag:Cm,linedashed_vert:Rm,linedashed_frag:Im,meshbasic_vert:Pm,meshbasic_frag:Lm,meshlambert_vert:Dm,meshlambert_frag:Nm,meshmatcap_vert:Um,meshmatcap_frag:Fm,meshnormal_vert:Om,meshnormal_frag:Bm,meshphong_vert:km,meshphong_frag:zm,meshphysical_vert:Vm,meshphysical_frag:Gm,meshtoon_vert:Hm,meshtoon_frag:Wm,points_vert:Xm,points_frag:qm,shadow_vert:Ym,shadow_frag:Zm,sprite_vert:Jm,sprite_frag:$m},Ze={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ce},probesMax:{value:new ce},probesResolution:{value:new ce}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},wi={basic:{uniforms:Ln([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:Ln([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new Et(0)},envMapIntensity:{value:1}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:Ln([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:Ln([Ze.common,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.roughnessmap,Ze.metalnessmap,Ze.fog,Ze.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:Ln([Ze.common,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.gradientmap,Ze.fog,Ze.lights,{emissive:{value:new Et(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:Ln([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:Ln([Ze.points,Ze.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:Ln([Ze.common,Ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:Ln([Ze.common,Ze.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:Ln([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,{opacity:{value:1}}]),vertexShader:At.meshnormal_vert,fragmentShader:At.meshnormal_frag},sprite:{uniforms:Ln([Ze.sprite,Ze.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:At.background_vert,fragmentShader:At.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:At.backgroundCube_vert,fragmentShader:At.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distance:{uniforms:Ln([Ze.common,Ze.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distance_vert,fragmentShader:At.distance_frag},shadow:{uniforms:Ln([Ze.lights,Ze.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};wi.physical={uniforms:Ln([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};var el={r:0,b:0,g:0},Km=new Yt,Xu=new vt;Xu.set(-1,0,0,0,1,0,0,0,1);function jm(i,e,t,n,s,r){let l=new Et(0),o=s===!0?0:1,h,u,p=null,_=0,m=null;function w(T){let I=T.isScene===!0?T.background:null;if(I&&I.isTexture){let g=T.backgroundBlurriness>0;I=e.get(I,g)}return I}function y(T){let I=!1,g=w(T);g===null?S(l,o):g&&g.isColor&&(S(g,1),I=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||I)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function L(T,I){let g=w(I);g&&(g.isCubeTexture||g.mapping===qr)?(u===void 0&&(u=new Pn(new Zs(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:xs(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,b,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=g,u.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Km.makeRotationFromEuler(I.backgroundRotation)).transpose(),g.isCubeTexture&&g.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Xu),u.material.toneMapped=Ft.getTransfer(g.colorSpace)!==$t,(p!==g||_!==g.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,p=g,_=g.version,m=i.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(h===void 0&&(h=new Pn(new Or(2,2),new Zn({name:"BackgroundMaterial",uniforms:xs(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=g,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.toneMapped=Ft.getTransfer(g.colorSpace)!==$t,g.matrixAutoUpdate===!0&&g.updateMatrix(),h.material.uniforms.uvTransform.value.copy(g.matrix),(p!==g||_!==g.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,p=g,_=g.version,m=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null))}function S(T,I){T.getRGB(el,yc(i)),t.buffers.color.setClear(el.r,el.g,el.b,I,r)}function d(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return l},setClearColor:function(T,I=1){l.set(T),o=I,S(l,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,S(l,o)},render:y,addToRenderList:L,dispose:d}}function Qm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=m(null),r=s,l=!1;function o(Z,R,K,H,J){let fe=!1,ge=_(Z,H,K,R);r!==ge&&(r=ge,u(r.object)),fe=w(Z,H,K,J),fe&&y(Z,H,K,J),J!==null&&e.update(J,i.ELEMENT_ARRAY_BUFFER),(fe||l)&&(l=!1,g(Z,R,K,H),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function h(){return i.createVertexArray()}function u(Z){return i.bindVertexArray(Z)}function p(Z){return i.deleteVertexArray(Z)}function _(Z,R,K,H){let J=H.wireframe===!0,fe=n[R.id];fe===void 0&&(fe={},n[R.id]=fe);let ge=Z.isInstancedMesh===!0?Z.id:0,be=fe[ge];be===void 0&&(be={},fe[ge]=be);let j=be[K.id];j===void 0&&(j={},be[K.id]=j);let M=j[J];return M===void 0&&(M=m(h()),j[J]=M),M}function m(Z){let R=[],K=[],H=[];for(let J=0;J<t;J++)R[J]=0,K[J]=0,H[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:K,attributeDivisors:H,object:Z,attributes:{},index:null}}function w(Z,R,K,H){let J=r.attributes,fe=R.attributes,ge=0,be=K.getAttributes();for(let j in be)if(be[j].location>=0){let Se=J[j],Ve=fe[j];if(Ve===void 0&&(j==="instanceMatrix"&&Z.instanceMatrix&&(Ve=Z.instanceMatrix),j==="instanceColor"&&Z.instanceColor&&(Ve=Z.instanceColor)),Se===void 0||Se.attribute!==Ve||Ve&&Se.data!==Ve.data)return!0;ge++}return r.attributesNum!==ge||r.index!==H}function y(Z,R,K,H){let J={},fe=R.attributes,ge=0,be=K.getAttributes();for(let j in be)if(be[j].location>=0){let Se=fe[j];Se===void 0&&(j==="instanceMatrix"&&Z.instanceMatrix&&(Se=Z.instanceMatrix),j==="instanceColor"&&Z.instanceColor&&(Se=Z.instanceColor));let Ve={};Ve.attribute=Se,Se&&Se.data&&(Ve.data=Se.data),J[j]=Ve,ge++}r.attributes=J,r.attributesNum=ge,r.index=H}function L(){let Z=r.newAttributes;for(let R=0,K=Z.length;R<K;R++)Z[R]=0}function S(Z){d(Z,0)}function d(Z,R){let K=r.newAttributes,H=r.enabledAttributes,J=r.attributeDivisors;K[Z]=1,H[Z]===0&&(i.enableVertexAttribArray(Z),H[Z]=1),J[Z]!==R&&(i.vertexAttribDivisor(Z,R),J[Z]=R)}function T(){let Z=r.newAttributes,R=r.enabledAttributes;for(let K=0,H=R.length;K<H;K++)R[K]!==Z[K]&&(i.disableVertexAttribArray(K),R[K]=0)}function I(Z,R,K,H,J,fe,ge){ge===!0?i.vertexAttribIPointer(Z,R,K,J,fe):i.vertexAttribPointer(Z,R,K,H,J,fe)}function g(Z,R,K,H){L();let J=H.attributes,fe=K.getAttributes(),ge=R.defaultAttributeValues;for(let be in fe){let j=fe[be];if(j.location>=0){let M=J[be];if(M===void 0&&(be==="instanceMatrix"&&Z.instanceMatrix&&(M=Z.instanceMatrix),be==="instanceColor"&&Z.instanceColor&&(M=Z.instanceColor)),M!==void 0){let Se=M.normalized,Ve=M.itemSize,Re=e.get(M);if(Re===void 0)continue;let ee=Re.buffer,ht=Re.type,Ct=Re.bytesPerElement,ye=ht===i.INT||ht===i.UNSIGNED_INT||M.gpuType===fo;if(M.isInterleavedBufferAttribute){let he=M.data,He=he.stride,ft=M.offset;if(he.isInstancedInterleavedBuffer){for(let ke=0;ke<j.locationSize;ke++)d(j.location+ke,he.meshPerAttribute);Z.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ke=0;ke<j.locationSize;ke++)S(j.location+ke);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let ke=0;ke<j.locationSize;ke++)I(j.location+ke,Ve/j.locationSize,ht,Se,He*Ct,(ft+Ve/j.locationSize*ke)*Ct,ye)}else{if(M.isInstancedBufferAttribute){for(let he=0;he<j.locationSize;he++)d(j.location+he,M.meshPerAttribute);Z.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=M.meshPerAttribute*M.count)}else for(let he=0;he<j.locationSize;he++)S(j.location+he);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let he=0;he<j.locationSize;he++)I(j.location+he,Ve/j.locationSize,ht,Se,Ve*Ct,Ve/j.locationSize*he*Ct,ye)}}else if(ge!==void 0){let Se=ge[be];if(Se!==void 0)switch(Se.length){case 2:i.vertexAttrib2fv(j.location,Se);break;case 3:i.vertexAttrib3fv(j.location,Se);break;case 4:i.vertexAttrib4fv(j.location,Se);break;default:i.vertexAttrib1fv(j.location,Se)}}}}T()}function C(){N();for(let Z in n){let R=n[Z];for(let K in R){let H=R[K];for(let J in H){let fe=H[J];for(let ge in fe)p(fe[ge].object),delete fe[ge];delete H[J]}}delete n[Z]}}function b(Z){if(n[Z.id]===void 0)return;let R=n[Z.id];for(let K in R){let H=R[K];for(let J in H){let fe=H[J];for(let ge in fe)p(fe[ge].object),delete fe[ge];delete H[J]}}delete n[Z.id]}function U(Z){for(let R in n){let K=n[R];for(let H in K){let J=K[H];if(J[Z.id]===void 0)continue;let fe=J[Z.id];for(let ge in fe)p(fe[ge].object),delete fe[ge];delete J[Z.id]}}}function x(Z){for(let R in n){let K=n[R],H=Z.isInstancedMesh===!0?Z.id:0,J=K[H];if(J!==void 0){for(let fe in J){let ge=J[fe];for(let be in ge)p(ge[be].object),delete ge[be];delete J[fe]}delete K[H],Object.keys(K).length===0&&delete n[R]}}}function N(){G(),l=!0,r!==s&&(r=s,u(r.object))}function G(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:G,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:U,initAttributes:L,enableAttribute:S,disableUnusedAttributes:T}}function e0(i,e,t){let n;function s(h){n=h}function r(h,u){i.drawArrays(n,h,u),t.update(u,n,1)}function l(h,u,p){p!==0&&(i.drawArraysInstanced(n,h,u,p),t.update(u,n,p))}function o(h,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,u,0,p);let m=0;for(let w=0;w<p;w++)m+=u[w];t.update(m,n,1)}this.setMode=s,this.render=r,this.renderInstances=l,this.renderMultiDraw=o}function t0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let U=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(U){return!(U!==Qn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(U){let x=U===li&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Vn&&U!==jn&&!x&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function h(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp",p=h(u);p!==u&&(mt("WebGLRenderer:",u,"not supported, using",p,"instead."),u=p);let _=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&mt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let w=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),L=i.getParameter(i.MAX_TEXTURE_SIZE),S=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),g=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:l,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:_,reversedDepthBuffer:m,maxTextures:w,maxVertexTextures:y,maxTextureSize:L,maxCubemapSize:S,maxAttributes:d,maxVertexUniforms:T,maxVaryings:I,maxFragmentUniforms:g,maxSamples:C,samples:b}}function n0(i){let e=this,t=null,n=0,s=!1,r=!1,l=new qn,o=new vt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,m){let w=_.length!==0||m||n!==0||s;return s=m,n=_.length,w},this.beginShadows=function(){r=!0,p(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(_,m){t=p(_,m,0)},this.setState=function(_,m,w){let y=_.clippingPlanes,L=_.clipIntersection,S=_.clipShadows,d=i.get(_);if(!s||y===null||y.length===0||r&&!S)r?p(null):u();else{let T=r?0:n,I=T*4,g=d.clippingState||null;h.value=g,g=p(y,m,I,w);for(let C=0;C!==I;++C)g[C]=t[C];d.clippingState=g,this.numIntersection=L?this.numPlanes:0,this.numPlanes+=T}};function u(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(_,m,w,y){let L=_!==null?_.length:0,S=null;if(L!==0){if(S=h.value,y!==!0||S===null){let d=w+L*4,T=m.matrixWorldInverse;o.getNormalMatrix(T),(S===null||S.length<d)&&(S=new Float32Array(d));for(let I=0,g=w;I!==L;++I,g+=4)l.copy(_[I]).applyMatrix4(T,o),l.normal.toArray(S,g),S[g+3]=l.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=L,e.numIntersection=0,S}}var ir=4,i0=6,s0=20,r0=256,ta=new Ks,Su=new Et,Cc=null,Rc=0,Ic=0,Pc=!1,a0=new ce,_s=new ce,nl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:l=256,position:o=a0}=r;Cc=this._renderer.getRenderTarget(),Rc=this._renderer.getActiveCubeFace(),Ic=this._renderer.getActiveMipmapLevel(),Pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);let h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,n,s,h,o),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Cc,Rc,Ic),this._renderer.xr.enabled=Pc,e.scissorTest=!1,nr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qi||e.mapping===gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cc=this._renderer.getRenderTarget(),Rc=this._renderer.getActiveCubeFace(),Ic=this._renderer.getActiveMipmapLevel(),Pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:li,format:Qn,colorSpace:Mr,depthBuffer:!1},s=wu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wu(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=o0(r)),this._blurMaterial=c0(r,e,t),this._ggxMaterial=l0(r,e,t)}return s}_compileMaterial(e){let t=new Pn(new Yn,e);this._renderer.compile(t,ta)}_sceneToCubeUV(e,t,n,s,r){let h=new Rn(90,1,t,n),u=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,m=_.autoClear,w=_.toneMapping;_.getClearColor(Su),_.toneMapping=ai,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(s),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pn(new Zs,new Lr({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1})));let L=this._backgroundBox,S=L.material,d=!1,T=e.background;T?T.isColor&&(S.color.copy(T),e.background=null,d=!0):(S.color.copy(Su),d=!0);for(let I=0;I<6;I++){let g=I%3;g===0?(h.up.set(0,u[I],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+p[I],r.y,r.z)):g===1?(h.up.set(0,0,u[I]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+p[I],r.z)):(h.up.set(0,u[I],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+p[I]));let C=this._cubeSize;nr(s,g*C,I>2?C:0,C,C),_.setRenderTarget(s),d&&_.render(L,h),_.render(e,h)}_.toneMapping=w,_.autoClear=m,e.background=T}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Qi||e.mapping===gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tu());let r=s?this._cubemapMaterial:this._equirectMaterial,l=this._lodMeshes[0];l.material=r;let o=r.uniforms;o.envMap.value=e;let h=this._cubeSize;nr(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(l,ta)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,l=this._ggxMaterial,o=this._lodMeshes[n];o.material=l;let h=l.uniforms,u=n/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),_=Math.sqrt(u*u-p*p),m=u*1.25,w=_*m,{_lodMax:y}=this,L=this._sizeLods[n],S=3*L*(n>y-ir?n-y+ir:0),d=4*(this._cubeSize-L);h.envMap.value=e.texture,h.roughness.value=w,h.mipInt.value=y-t,nr(r,S,d,3*L,2*L),s.setRenderTarget(r),s.render(o,ta),h.envMap.value=r.texture,h.roughness.value=0,h.mipInt.value=y-n,nr(e,S,d,3*L,2*L),s.setRenderTarget(e),s.render(o,ta)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,l=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,l),this._blurPass(r,e,n,n,l)}_blurPass(e,t,n,s,r){let l=this._renderer,o=this._blurMaterial,h=this._lodMeshes[s];h.material=o;let u=o.uniforms;u.envMap.value=e.texture,u.sigma.value=r,u.mipInt.value=this._lodMax-n;let p=this._sizeLods[s],_=3*p*(s>this._lodMax-ir?s-this._lodMax+ir:0),m=4*(this._cubeSize-p);nr(t,_,m,3*p,2*p),l.setRenderTarget(t),l.render(h,ta)}};function o0(i){let e=[],t=[],n=i,s=i-ir+1+i0;for(let r=0;r<s;r++){let l=Math.pow(2,n);e.push(l);let o=1/(l-2),h=-o,u=1+o,p=[h,h,u,h,u,u,h,h,u,u,h,u],_=6,m=6,w=3,y=new Float32Array(w*m*_),L=new Float32Array(w*m*_);for(let d=0;d<_;d++){let T=d%3*2/3-1,I=d>2?0:-1,g=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];y.set(g,w*m*d);for(let C=0;C<m;C++){let b=p[C*2]*2-1,U=p[C*2+1]*2-1;d===0?_s.set(1,U,b):d===1?_s.set(-b,1,-U):d===2?_s.set(-b,U,1):d===3?_s.set(-1,U,-b):d===4?_s.set(-b,-1,U):_s.set(b,U,-1),_s.toArray(L,(d*m+C)*w)}}let S=new Yn;S.setAttribute("position",new On(y,w)),S.setAttribute("outputDirection",new On(L,w)),t.push(new Pn(S,null)),n>ir&&n--}return{lodMeshes:t,sizeLods:e}}function wu(i,e,t){let n=new zn(i,e,t);return n.texture.mapping=qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function l0(i,e,t){return new Zn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:r0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:rl(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function c0(i,e,t){return new Zn({name:"SphericalGaussianBlur",defines:{SAMPLES:s0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:rl(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Tu(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rl(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Eu(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function rl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var il=class extends zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ur(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Zs(5,5,5),r=new Zn({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Un,blending:Mi});r.uniforms.tEquirect.value=t;let l=new Pn(s,r),o=t.minFilter;return t.minFilter===bi&&(t.minFilter=_n),new ao(1,10,this).update(e,l),t.minFilter=o,l.geometry.dispose(),l.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,s);e.setRenderTarget(r)}};function h0(i){let e=new WeakMap,t=new WeakMap,n=null;function s(m,w=!1){return m==null?null:w?l(m):r(m)}function r(m){if(m&&m.isTexture){let w=m.mapping;if(w===co||w===ho)if(e.has(m)){let y=e.get(m).texture;return o(y,m.mapping)}else{let y=m.image;if(y&&y.height>0){let L=new il(y.height);return L.fromEquirectangularTexture(i,m),e.set(m,L),m.addEventListener("dispose",u),o(L.texture,m.mapping)}else return null}}return m}function l(m){if(m&&m.isTexture){let w=m.mapping,y=w===co||w===ho,L=w===Qi||w===gs;if(y||L){let S=t.get(m),d=S!==void 0?S.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==d)return n===null&&(n=new nl(i)),S=y?n.fromEquirectangular(m,S):n.fromCubemap(m,S),S.texture.pmremVersion=m.pmremVersion,t.set(m,S),S.texture;if(S!==void 0)return S.texture;{let T=m.image;return y&&T&&T.height>0||L&&T&&h(T)?(n===null&&(n=new nl(i)),S=y?n.fromEquirectangular(m):n.fromCubemap(m),S.texture.pmremVersion=m.pmremVersion,t.set(m,S),m.addEventListener("dispose",p),S.texture):null}}}return m}function o(m,w){return w===co?m.mapping=Qi:w===ho&&(m.mapping=gs),m}function h(m){let w=0,y=6;for(let L=0;L<y;L++)m[L]!==void 0&&w++;return w===y}function u(m){let w=m.target;w.removeEventListener("dispose",u);let y=e.get(w);y!==void 0&&(e.delete(w),y.dispose())}function p(m){let w=m.target;w.removeEventListener("dispose",p);let y=t.get(w);y!==void 0&&(t.delete(w),y.dispose())}function _(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:_}}function u0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&us("WebGLRenderer: "+n+" extension not supported."),s}}}function d0(i,e,t,n){let s={},r=new WeakMap;function l(_){let m=_.target;m.index!==null&&e.remove(m.index);for(let y in m.attributes)e.remove(m.attributes[y]);m.removeEventListener("dispose",l),delete s[m.id];let w=r.get(m);w&&(e.remove(w),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function o(_,m){return s[m.id]===!0||(m.addEventListener("dispose",l),s[m.id]=!0,t.memory.geometries++),m}function h(_){let m=_.attributes;for(let w in m)e.update(m[w],i.ARRAY_BUFFER)}function u(_){let m=[],w=_.index,y=_.attributes.position,L=0;if(y===void 0)return;if(w!==null){let T=w.array;L=w.version;for(let I=0,g=T.length;I<g;I+=3){let C=T[I+0],b=T[I+1],U=T[I+2];m.push(C,b,b,U,U,C)}}else{let T=y.array;L=y.version;for(let I=0,g=T.length/3-1;I<g;I+=3){let C=I+0,b=I+1,U=I+2;m.push(C,b,b,U,U,C)}}let S=new(y.count>=65535?Cr:Ar)(m,1);S.version=L;let d=r.get(_);d&&e.remove(d),r.set(_,S)}function p(_){let m=r.get(_);if(m){let w=_.index;w!==null&&m.version<w.version&&u(_)}else u(_);return r.get(_)}return{get:o,update:h,getWireframeAttribute:p}}function f0(i,e,t){let n;function s(_){n=_}let r,l;function o(_){r=_.type,l=_.bytesPerElement}function h(_,m){i.drawElements(n,m,r,_*l),t.update(m,n,1)}function u(_,m,w){w!==0&&(i.drawElementsInstanced(n,m,r,_*l,w),t.update(m,n,w))}function p(_,m,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,_,0,w);let L=0;for(let S=0;S<w;S++)L+=m[S];t.update(L,n,1)}this.setMode=s,this.setIndex=o,this.render=h,this.renderInstances=u,this.renderMultiDraw=p}function p0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,l,o){switch(t.calls++,l){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:pt("WebGLInfo: Unknown draw mode:",l);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function m0(i,e,t){let n=new WeakMap,s=new ln;function r(l,o,h){let u=l.morphTargetInfluences,p=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,_=p!==void 0?p.length:0,m=n.get(o);if(m===void 0||m.count!==_){let N=function(){U.dispose(),n.delete(o),o.removeEventListener("dispose",N)};m!==void 0&&m.texture.dispose();let w=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,L=o.morphAttributes.color!==void 0,S=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],I=0;w===!0&&(I=1),y===!0&&(I=2),L===!0&&(I=3);let g=o.attributes.position.count*I,C=1;g>e.maxTextureSize&&(C=Math.ceil(g/e.maxTextureSize),g=e.maxTextureSize);let b=new Float32Array(g*C*4*_),U=new ds(b,g,C,_);U.type=jn,U.needsUpdate=!0;let x=I*4;for(let G=0;G<_;G++){let Z=S[G],R=d[G],K=T[G],H=g*C*4*G;for(let J=0;J<Z.count;J++){let fe=J*x;w===!0&&(s.fromBufferAttribute(Z,J),b[H+fe+0]=s.x,b[H+fe+1]=s.y,b[H+fe+2]=s.z,b[H+fe+3]=0),y===!0&&(s.fromBufferAttribute(R,J),b[H+fe+4]=s.x,b[H+fe+5]=s.y,b[H+fe+6]=s.z,b[H+fe+7]=0),L===!0&&(s.fromBufferAttribute(K,J),b[H+fe+8]=s.x,b[H+fe+9]=s.y,b[H+fe+10]=s.z,b[H+fe+11]=K.itemSize===4?s.w:1)}}m={count:_,texture:U,size:new Ut(g,C)},n.set(o,m),o.addEventListener("dispose",N)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",l.morphTexture,t);else{let w=0;for(let L=0;L<u.length;L++)w+=u[L];let y=o.morphTargetsRelative?1:1-w;h.getUniforms().setValue(i,"morphTargetBaseInfluence",y),h.getUniforms().setValue(i,"morphTargetInfluences",u)}h.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:r}}function g0(i,e,t,n,s){let r=new WeakMap;function l(u){let p=s.render.frame,_=u.geometry,m=e.get(u,_);if(r.get(m)!==p&&(e.update(m),r.set(m,p)),u.isInstancedMesh&&(u.hasEventListener("dispose",h)===!1&&u.addEventListener("dispose",h),r.get(u)!==p&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,p))),u.isSkinnedMesh){let w=u.skeleton;r.get(w)!==p&&(w.update(),r.set(w,p))}return m}function o(){r=new WeakMap}function h(u){let p=u.target;p.removeEventListener("dispose",h),n.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:o}}var x0={[sc]:"LINEAR_TONE_MAPPING",[rc]:"REINHARD_TONE_MAPPING",[ac]:"CINEON_TONE_MAPPING",[Xr]:"ACES_FILMIC_TONE_MAPPING",[lc]:"AGX_TONE_MAPPING",[cc]:"NEUTRAL_TONE_MAPPING",[oc]:"CUSTOM_TONE_MAPPING"};function _0(i,e,t,n,s,r){let l=new zn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,h=null,u=new Yn;u.setAttribute("position",new Bn([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Bn([0,2,0,0,2,0],2));let p=new Js({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new Pn(u,p),m=new Ks(-1,1,1,-1,0,1),w=null,y=null,L=!1,S,d=null,T=[],I=!1;this.setSize=function(g,C){l.setSize(g,C),o!==null&&o.setSize(g,C),h!==null&&h.setSize(g,C);for(let b=0;b<T.length;b++){let U=T[b];U.setSize&&U.setSize(g,C)}},this.setEffects=function(g){T=g,I=T.length>0&&T[0].isRenderPass===!0;let C=l.width,b=l.height;T.length>0&&o===null&&(o=new zn(C,b,{type:li,depthBuffer:!1,stencilBuffer:!1}),h=new zn(C,b,{type:li,depthBuffer:!1,stencilBuffer:!1}));for(let U=0;U<T.length;U++){let x=T[U];x.setSize&&x.setSize(C,b)}},this.begin=function(g,C){if(L||g.toneMapping===ai&&T.length===0)return!1;if(d=C,C!==null){let b=C.width,U=C.height;(l.width!==b||l.height!==U)&&this.setSize(b,U)}return I===!1&&g.setRenderTarget(l),S=g.toneMapping,g.toneMapping=ai,!0},this.hasRenderPass=function(){return I},this.end=function(g,C){g.toneMapping=S,L=!0;let b=l,U=o;for(let x=0;x<T.length;x++){let N=T[x];N.enabled!==!1&&(N.render(g,U,b,C),N.needsSwap!==!1&&(b=U,U=U===o?h:o))}if(w!==g.outputColorSpace||y!==g.toneMapping){w=g.outputColorSpace,y=g.toneMapping,p.defines={},Ft.getTransfer(w)===$t&&(p.defines.SRGB_TRANSFER="");let x=x0[y];x&&(p.defines[x]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=b.texture,g.setRenderTarget(d),g.render(_,m),d=null,L=!1},this.isCompositing=function(){return L},this.dispose=function(){l.dispose(),o!==null&&o.dispose(),h!==null&&h.dispose(),u.dispose(),p.dispose()}}var qu=new kn,Nc=new Zi(1,1),Yu=new ds,Zu=new qa,Ju=new Ur,Au=[],Cu=[],Ru=new Float32Array(16),Iu=new Float32Array(9),Pu=new Float32Array(4);function rr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Au[s];if(r===void 0&&(r=new Float32Array(s),Au[s]=r),e!==0){n.toArray(r,0);for(let l=1,o=0;l!==e;++l)o+=t,i[l].toArray(r,o)}return r}function yn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function vn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function al(i,e){let t=Cu[e];t===void 0&&(t=new Int32Array(e),Cu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function y0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function v0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;i.uniform2fv(this.addr,e),vn(t,e)}}function M0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yn(t,e))return;i.uniform3fv(this.addr,e),vn(t,e)}}function b0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;i.uniform4fv(this.addr,e),vn(t,e)}}function S0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(yn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),vn(t,e)}else{if(yn(t,n))return;Pu.set(n),i.uniformMatrix2fv(this.addr,!1,Pu),vn(t,n)}}function w0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(yn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),vn(t,e)}else{if(yn(t,n))return;Iu.set(n),i.uniformMatrix3fv(this.addr,!1,Iu),vn(t,n)}}function T0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(yn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),vn(t,e)}else{if(yn(t,n))return;Ru.set(n),i.uniformMatrix4fv(this.addr,!1,Ru),vn(t,n)}}function E0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function A0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;i.uniform2iv(this.addr,e),vn(t,e)}}function C0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yn(t,e))return;i.uniform3iv(this.addr,e),vn(t,e)}}function R0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;i.uniform4iv(this.addr,e),vn(t,e)}}function I0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function P0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;i.uniform2uiv(this.addr,e),vn(t,e)}}function L0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yn(t,e))return;i.uniform3uiv(this.addr,e),vn(t,e)}}function D0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;i.uniform4uiv(this.addr,e),vn(t,e)}}function N0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Nc.compareFunction=t.isReversedDepthBuffer()?jo:Ko,r=Nc):r=qu,t.setTexture2D(e||r,s)}function U0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Zu,s)}function F0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ju,s)}function O0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Yu,s)}function B0(i){switch(i){case 5126:return y0;case 35664:return v0;case 35665:return M0;case 35666:return b0;case 35674:return S0;case 35675:return w0;case 35676:return T0;case 5124:case 35670:return E0;case 35667:case 35671:return A0;case 35668:case 35672:return C0;case 35669:case 35673:return R0;case 5125:return I0;case 36294:return P0;case 36295:return L0;case 36296:return D0;case 35678:case 36198:case 36298:case 36306:case 35682:return N0;case 35679:case 36299:case 36307:return U0;case 35680:case 36300:case 36308:case 36293:return F0;case 36289:case 36303:case 36311:case 36292:return O0}}function k0(i,e){i.uniform1fv(this.addr,e)}function z0(i,e){let t=rr(e,this.size,2);i.uniform2fv(this.addr,t)}function V0(i,e){let t=rr(e,this.size,3);i.uniform3fv(this.addr,t)}function G0(i,e){let t=rr(e,this.size,4);i.uniform4fv(this.addr,t)}function H0(i,e){let t=rr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function W0(i,e){let t=rr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function X0(i,e){let t=rr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function q0(i,e){i.uniform1iv(this.addr,e)}function Y0(i,e){i.uniform2iv(this.addr,e)}function Z0(i,e){i.uniform3iv(this.addr,e)}function J0(i,e){i.uniform4iv(this.addr,e)}function $0(i,e){i.uniform1uiv(this.addr,e)}function K0(i,e){i.uniform2uiv(this.addr,e)}function j0(i,e){i.uniform3uiv(this.addr,e)}function Q0(i,e){i.uniform4uiv(this.addr,e)}function eg(i,e,t){let n=this.cache,s=e.length,r=al(t,s);yn(n,r)||(i.uniform1iv(this.addr,r),vn(n,r));let l;this.type===i.SAMPLER_2D_SHADOW?l=Nc:l=qu;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||l,r[o])}function tg(i,e,t){let n=this.cache,s=e.length,r=al(t,s);yn(n,r)||(i.uniform1iv(this.addr,r),vn(n,r));for(let l=0;l!==s;++l)t.setTexture3D(e[l]||Zu,r[l])}function ng(i,e,t){let n=this.cache,s=e.length,r=al(t,s);yn(n,r)||(i.uniform1iv(this.addr,r),vn(n,r));for(let l=0;l!==s;++l)t.setTextureCube(e[l]||Ju,r[l])}function ig(i,e,t){let n=this.cache,s=e.length,r=al(t,s);yn(n,r)||(i.uniform1iv(this.addr,r),vn(n,r));for(let l=0;l!==s;++l)t.setTexture2DArray(e[l]||Yu,r[l])}function sg(i){switch(i){case 5126:return k0;case 35664:return z0;case 35665:return V0;case 35666:return G0;case 35674:return H0;case 35675:return W0;case 35676:return X0;case 5124:case 35670:return q0;case 35667:case 35671:return Y0;case 35668:case 35672:return Z0;case 35669:case 35673:return J0;case 5125:return $0;case 36294:return K0;case 36295:return j0;case 36296:return Q0;case 35678:case 36198:case 36298:case 36306:case 35682:return eg;case 35679:case 36299:case 36307:return tg;case 35680:case 36300:case 36308:case 36293:return ng;case 36289:case 36303:case 36311:case 36292:return ig}}var Uc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=B0(t.type)}},Fc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sg(t.type)}},Oc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,l=s.length;r!==l;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Lc=/(\w+)(\])?(\[|\.)?/g;function Lu(i,e){i.seq.push(e),i.map[e.id]=e}function rg(i,e,t){let n=i.name,s=n.length;for(Lc.lastIndex=0;;){let r=Lc.exec(n),l=Lc.lastIndex,o=r[1],h=r[2]==="]",u=r[3];if(h&&(o=o|0),u===void 0||u==="["&&l+2===s){Lu(t,u===void 0?new Uc(o,i,e):new Fc(o,i,e));break}else{let _=t.map[o];_===void 0&&(_=new Oc(o),Lu(t,_)),t=_}}}var sr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let l=0;l<n;++l){let o=e.getActiveUniform(t,l),h=e.getUniformLocation(t,o.name);rg(o,h,this)}let s=[],r=[];for(let l of this.seq)l.type===e.SAMPLER_2D_SHADOW||l.type===e.SAMPLER_CUBE_SHADOW||l.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(l):r.push(l);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,l=t.length;r!==l;++r){let o=t[r],h=n[o.id];h.needsUpdate!==!1&&o.setValue(e,h.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let l=e[s];l.id in t&&n.push(l)}return n}};function Du(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var ag=37297,og=0;function lg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let l=s;l<r;l++){let o=l+1;n.push(`${o===e?">":" "} ${o}: ${t[l]}`)}return n.join(`
`)}var Nu=new vt;function cg(i){Ft._getMatrix(Nu,Ft.workingColorSpace,i);let e=`mat3( ${Nu.elements.map(t=>t.toFixed(4))} )`;switch(Ft.getTransfer(i)){case br:return[e,"LinearTransferOETF"];case $t:return[e,"sRGBTransferOETF"];default:return mt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Uu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let l=/ERROR: 0:(\d+)/.exec(r);if(l){let o=parseInt(l[1]);return t.toUpperCase()+`

`+r+`

`+lg(i.getShaderSource(e),o)}else return r}function hg(i,e){let t=cg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var ug={[sc]:"Linear",[rc]:"Reinhard",[ac]:"Cineon",[Xr]:"ACESFilmic",[lc]:"AgX",[cc]:"Neutral",[oc]:"Custom"};function dg(i,e){let t=ug[e];return t===void 0?(mt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var tl=new ce;function fg(){Ft.getLuminanceCoefficients(tl);let i=tl.x.toFixed(4),e=tl.y.toFixed(4),t=tl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function mg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function gg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),l=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[l]={type:r.type,location:i.getAttribLocation(e,l),locationSize:o}}return t}function ia(i){return i!==""}function Fu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ou(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var xg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bc(i){return i.replace(xg,yg)}var _g=new Map;function yg(i,e){let t=At[e];if(t===void 0){let n=_g.get(e);if(n!==void 0)t=At[n],mt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Bc(t)}var vg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bu(i){return i.replace(vg,Mg)}function Mg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ku(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var bg={[ps]:"SHADOWMAP_TYPE_PCF",[js]:"SHADOWMAP_TYPE_VSM"};function Sg(i){return bg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var wg={[Qi]:"ENVMAP_TYPE_CUBE",[gs]:"ENVMAP_TYPE_CUBE",[qr]:"ENVMAP_TYPE_CUBE_UV"};function Tg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":wg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Eg={[gs]:"ENVMAP_MODE_REFRACTION"};function Ag(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Eg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Cg={[ic]:"ENVMAP_BLENDING_MULTIPLY",[iu]:"ENVMAP_BLENDING_MIX",[su]:"ENVMAP_BLENDING_ADD"};function Rg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Cg[i.combine]||"ENVMAP_BLENDING_NONE"}function Ig(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Pg(i,e,t,n){let s=i.getContext(),r=t.defines,l=t.vertexShader,o=t.fragmentShader,h=Sg(t),u=Tg(t),p=Ag(t),_=Rg(t),m=Ig(t),w=pg(t),y=mg(r),L=s.createProgram(),S,d,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(ia).join(`
`),S.length>0&&(S+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(ia).join(`
`),d.length>0&&(d+=`
`)):(S=[ku(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),d=[ku(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?At.tonemapping_pars_fragment:"",t.toneMapping!==ai?dg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",At.colorspace_pars_fragment,hg("linearToOutputTexel",t.outputColorSpace),fg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ia).join(`
`)),l=Bc(l),l=Fu(l,t),l=Ou(l,t),o=Bc(o),o=Fu(o,t),o=Ou(o,t),l=Bu(l),o=Bu(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,S=[w,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,d=["#define varying in",t.glslVersion===ea?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ea?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let I=T+S+l,g=T+d+o,C=Du(s,s.VERTEX_SHADER,I),b=Du(s,s.FRAGMENT_SHADER,g);s.attachShader(L,C),s.attachShader(L,b),t.index0AttributeName!==void 0?s.bindAttribLocation(L,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(L,0,"position"),s.linkProgram(L);function U(Z){if(i.debug.checkShaderErrors){let R=s.getProgramInfoLog(L)||"",K=s.getShaderInfoLog(C)||"",H=s.getShaderInfoLog(b)||"",J=R.trim(),fe=K.trim(),ge=H.trim(),be=!0,j=!0;if(s.getProgramParameter(L,s.LINK_STATUS)===!1)if(be=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,L,C,b);else{let M=Uu(s,C,"vertex"),Se=Uu(s,b,"fragment");pt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(L,s.VALIDATE_STATUS)+`

Material Name: `+Z.name+`
Material Type: `+Z.type+`

Program Info Log: `+J+`
`+M+`
`+Se)}else J!==""?mt("WebGLProgram: Program Info Log:",J):(fe===""||ge==="")&&(j=!1);j&&(Z.diagnostics={runnable:be,programLog:J,vertexShader:{log:fe,prefix:S},fragmentShader:{log:ge,prefix:d}})}s.deleteShader(C),s.deleteShader(b),x=new sr(s,L),N=gg(s,L)}let x;this.getUniforms=function(){return x===void 0&&U(this),x};let N;this.getAttributes=function(){return N===void 0&&U(this),N};let G=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=s.getProgramParameter(L,ag)),G},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(L),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=og++,this.cacheKey=e,this.usedTimes=1,this.program=L,this.vertexShader=C,this.fragmentShader=b,this}var Lg=0,kc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new zc(e),t.set(e,n)),n}},zc=class{constructor(e){this.id=Lg++,this.code=e,this.usedTimes=0}};function Dg(i){return i===ts||i===jr||i===Qr}function Ng(i,e,t,n,s,r){let l=new Xs,o=new kc,h=new Set,u=[],p=new Map,_=n.logarithmicDepthBuffer,m=n.precision,w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(x){return h.add(x),x===0?"uv":`uv${x}`}function L(x,N,G,Z,R,K){let H=Z.fog,J=R.geometry,fe=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?Z.environment:null,ge=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,be=e.get(x.envMap||fe,ge),j=be&&be.mapping===qr?be.image.height:null,M=w[x.type];x.precision!==null&&(m=n.getMaxPrecision(x.precision),m!==x.precision&&mt("WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));let Se=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Ve=Se!==void 0?Se.length:0,Re=0;J.morphAttributes.position!==void 0&&(Re=1),J.morphAttributes.normal!==void 0&&(Re=2),J.morphAttributes.color!==void 0&&(Re=3);let ee,ht,Ct,ye;if(M){let Tt=wi[M];ee=Tt.vertexShader,ht=Tt.fragmentShader}else{ee=x.vertexShader,ht=x.fragmentShader;let Tt=o.getVertexShaderStage(x),lt=o.getFragmentShaderStage(x);o.update(x,Tt,lt),Ct=Tt.id,ye=lt.id}let he=i.getRenderTarget(),He=i.state.buffers.depth.getReversed(),ft=R.isInstancedMesh===!0,ke=R.isBatchedMesh===!0,We=!!x.map,en=!!x.matcap,rt=!!be,_t=!!x.aoMap,Pt=!!x.lightMap,gt=!!x.bumpMap&&x.wireframe===!1,dt=!!x.normalMap,Ot=!!x.displacementMap,Gt=!!x.emissiveMap,yt=!!x.metalnessMap,Nt=!!x.roughnessMap,te=x.anisotropy>0,Bt=x.clearcoat>0,St=x.dispersion>0,B=x.retroreflectivity>0,v=x.iridescence>0,se=x.sheen>0,le=x.transmission>0,xe=te&&!!x.anisotropyMap,Le=Bt&&!!x.clearcoatMap,Ae=Bt&&!!x.clearcoatNormalMap,pe=Bt&&!!x.clearcoatRoughnessMap,ve=v&&!!x.iridescenceMap,Ne=v&&!!x.iridescenceThicknessMap,nt=se&&!!x.sheenColorMap,re=se&&!!x.sheenRoughnessMap,me=!!x.specularMap,_e=!!x.specularColorMap,Oe=!!x.specularIntensityMap,ot=le&&!!x.transmissionMap,W=le&&!!x.thicknessMap,Ce=!!x.gradientMap,Me=!!x.alphaMap,Ue=x.alphaTest>0,De=!!x.alphaHash,we=!!x.extensions,tt=ai;x.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(tt=i.toneMapping);let $e={shaderID:M,shaderType:x.type,shaderName:x.name,vertexShader:ee,fragmentShader:ht,defines:x.defines,customVertexShaderID:Ct,customFragmentShaderID:ye,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:ke,batchingColor:ke&&R._colorsTexture!==null,instancing:ft,instancingColor:ft&&R.instanceColor!==null,instancingMorph:ft&&R.morphTexture!==null,outputColorSpace:he===null?i.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Ft.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:We,matcap:en,envMap:rt,envMapMode:rt&&be.mapping,envMapCubeUVHeight:j,aoMap:_t,lightMap:Pt,bumpMap:gt,normalMap:dt,displacementMap:Ot,emissiveMap:Gt,normalMapObjectSpace:dt&&x.normalMapType===ou,normalMapTangentSpace:dt&&x.normalMapType===$o,packedNormalMap:dt&&x.normalMapType===$o&&Dg(x.normalMap.format),metalnessMap:yt,roughnessMap:Nt,anisotropy:te,anisotropyMap:xe,clearcoat:Bt,clearcoatMap:Le,clearcoatNormalMap:Ae,clearcoatRoughnessMap:pe,dispersion:St,retroreflection:B,iridescence:v,iridescenceMap:ve,iridescenceThicknessMap:Ne,sheen:se,sheenColorMap:nt,sheenRoughnessMap:re,specularMap:me,specularColorMap:_e,specularIntensityMap:Oe,transmission:le,transmissionMap:ot,thicknessMap:W,gradientMap:Ce,opaque:x.transparent===!1&&x.blending===Qs&&x.alphaToCoverage===!1,alphaMap:Me,alphaTest:Ue,alphaHash:De,combine:x.combine,mapUv:We&&y(x.map.channel),aoMapUv:_t&&y(x.aoMap.channel),lightMapUv:Pt&&y(x.lightMap.channel),bumpMapUv:gt&&y(x.bumpMap.channel),normalMapUv:dt&&y(x.normalMap.channel),displacementMapUv:Ot&&y(x.displacementMap.channel),emissiveMapUv:Gt&&y(x.emissiveMap.channel),metalnessMapUv:yt&&y(x.metalnessMap.channel),roughnessMapUv:Nt&&y(x.roughnessMap.channel),anisotropyMapUv:xe&&y(x.anisotropyMap.channel),clearcoatMapUv:Le&&y(x.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&y(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&y(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&y(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&y(x.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&y(x.sheenColorMap.channel),sheenRoughnessMapUv:re&&y(x.sheenRoughnessMap.channel),specularMapUv:me&&y(x.specularMap.channel),specularColorMapUv:_e&&y(x.specularColorMap.channel),specularIntensityMapUv:Oe&&y(x.specularIntensityMap.channel),transmissionMapUv:ot&&y(x.transmissionMap.channel),thicknessMapUv:W&&y(x.thicknessMap.channel),alphaMapUv:Me&&y(x.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(dt||te),vertexNormals:!!J.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!J.attributes.uv&&(We||Me),fog:!!H,useFog:x.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||J.attributes.normal===void 0&&dt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:He,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Ve,morphTextureStride:Re,numSunLights:N.sun.length,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numSunLightShadows:N.sunShadowMap.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:K.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:tt,decodeVideoTexture:We&&x.map.isVideoTexture===!0&&Ft.getTransfer(x.map.colorSpace)===$t,decodeVideoTextureEmissive:Gt&&x.emissiveMap.isVideoTexture===!0&&Ft.getTransfer(x.emissiveMap.colorSpace)===$t,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===$n,flipSided:x.side===Un,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:we&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&x.extensions.multiDraw===!0||ke)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return $e.vertexUv1s=h.has(1),$e.vertexUv2s=h.has(2),$e.vertexUv3s=h.has(3),h.clear(),$e}function S(x){let N=[];if(x.shaderID?N.push(x.shaderID):(N.push(x.customVertexShaderID),N.push(x.customFragmentShaderID)),x.defines!==void 0)for(let G in x.defines)N.push(G),N.push(x.defines[G]);return x.isRawShaderMaterial===!1&&(d(N,x),T(N,x),N.push(i.outputColorSpace)),N.push(x.customProgramCacheKey),N.join()}function d(x,N){x.push(N.precision),x.push(N.outputColorSpace),x.push(N.envMapMode),x.push(N.envMapCubeUVHeight),x.push(N.mapUv),x.push(N.alphaMapUv),x.push(N.lightMapUv),x.push(N.aoMapUv),x.push(N.bumpMapUv),x.push(N.normalMapUv),x.push(N.displacementMapUv),x.push(N.emissiveMapUv),x.push(N.metalnessMapUv),x.push(N.roughnessMapUv),x.push(N.anisotropyMapUv),x.push(N.clearcoatMapUv),x.push(N.clearcoatNormalMapUv),x.push(N.clearcoatRoughnessMapUv),x.push(N.iridescenceMapUv),x.push(N.iridescenceThicknessMapUv),x.push(N.sheenColorMapUv),x.push(N.sheenRoughnessMapUv),x.push(N.specularMapUv),x.push(N.specularColorMapUv),x.push(N.specularIntensityMapUv),x.push(N.transmissionMapUv),x.push(N.thicknessMapUv),x.push(N.combine),x.push(N.fogExp2),x.push(N.sizeAttenuation),x.push(N.morphTargetsCount),x.push(N.morphAttributeCount),x.push(N.numSunLights),x.push(N.numDirLights),x.push(N.numPointLights),x.push(N.numSpotLights),x.push(N.numSpotLightMaps),x.push(N.numHemiLights),x.push(N.numRectAreaLights),x.push(N.numSunLightShadows),x.push(N.numDirLightShadows),x.push(N.numPointLightShadows),x.push(N.numSpotLightShadows),x.push(N.numSpotLightShadowsWithMaps),x.push(N.numLightProbes),x.push(N.shadowMapType),x.push(N.toneMapping),x.push(N.numClippingPlanes),x.push(N.numClipIntersection),x.push(N.depthPacking)}function T(x,N){l.disableAll(),N.instancing&&l.enable(0),N.instancingColor&&l.enable(1),N.instancingMorph&&l.enable(2),N.matcap&&l.enable(3),N.envMap&&l.enable(4),N.normalMapObjectSpace&&l.enable(5),N.normalMapTangentSpace&&l.enable(6),N.clearcoat&&l.enable(7),N.iridescence&&l.enable(8),N.alphaTest&&l.enable(9),N.vertexColors&&l.enable(10),N.vertexAlphas&&l.enable(11),N.vertexUv1s&&l.enable(12),N.vertexUv2s&&l.enable(13),N.vertexUv3s&&l.enable(14),N.vertexTangents&&l.enable(15),N.anisotropy&&l.enable(16),N.alphaHash&&l.enable(17),N.batching&&l.enable(18),N.dispersion&&l.enable(19),N.retroreflection&&l.enable(24),N.batchingColor&&l.enable(20),N.gradientMap&&l.enable(21),N.packedNormalMap&&l.enable(22),N.vertexNormals&&l.enable(23),x.push(l.mask),l.disableAll(),N.fog&&l.enable(0),N.useFog&&l.enable(1),N.flatShading&&l.enable(2),N.logarithmicDepthBuffer&&l.enable(3),N.reversedDepthBuffer&&l.enable(4),N.skinning&&l.enable(5),N.morphTargets&&l.enable(6),N.morphNormals&&l.enable(7),N.morphColors&&l.enable(8),N.premultipliedAlpha&&l.enable(9),N.shadowMapEnabled&&l.enable(10),N.doubleSided&&l.enable(11),N.flipSided&&l.enable(12),N.useDepthPacking&&l.enable(13),N.dithering&&l.enable(14),N.transmission&&l.enable(15),N.sheen&&l.enable(16),N.opaque&&l.enable(17),N.pointsUvs&&l.enable(18),N.decodeVideoTexture&&l.enable(19),N.decodeVideoTextureEmissive&&l.enable(20),N.alphaToCoverage&&l.enable(21),N.numLightProbeGrids>0&&l.enable(22),N.hasPositionAttribute&&l.enable(23),x.push(l.mask)}function I(x){let N=w[x.type],G;if(N){let Z=wi[N];G=vu.clone(Z.uniforms)}else G=x.uniforms;return G}function g(x,N){let G=p.get(N);return G!==void 0?++G.usedTimes:(G=new Pg(i,N,x,s),u.push(G),p.set(N,G)),G}function C(x){if(--x.usedTimes===0){let N=u.indexOf(x);u[N]=u[u.length-1],u.pop(),p.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function U(){o.dispose()}return{getParameters:L,getProgramCacheKey:S,getUniforms:I,acquireProgram:g,releaseProgram:C,releaseShaderCache:b,programs:u,dispose:U}}function Ug(){let i=new WeakMap;function e(l){return i.has(l)}function t(l){let o=i.get(l);return o===void 0&&(o={},i.set(l,o)),o}function n(l){i.delete(l)}function s(l,o,h){i.get(l)[o]=h}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Fg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function zu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Vu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function l(m){let w=0;return m.isInstancedMesh&&(w+=2),m.isSkinnedMesh&&(w+=1),w}function o(m,w,y,L,S,d){let T=i[e];return T===void 0?(T={id:m.id,object:m,geometry:w,material:y,materialVariant:l(m),groupOrder:L,renderOrder:m.renderOrder,z:S,group:d},i[e]=T):(T.id=m.id,T.object=m,T.geometry=w,T.material=y,T.materialVariant=l(m),T.groupOrder=L,T.renderOrder=m.renderOrder,T.z=S,T.group=d),e++,T}function h(m,w,y,L,S,d,T){T.reversedDepth===!0&&(S=-S);let I=o(m,w,y,L,S,d);y.transmission>0?n.push(I):y.transparent===!0?s.push(I):t.push(I)}function u(m,w,y,L,S,d){let T=o(m,w,y,L,S,d);y.transmission>0?n.unshift(T):y.transparent===!0?s.unshift(T):t.unshift(T)}function p(m,w){t.length>1&&t.sort(m||Fg),n.length>1&&n.sort(w||zu),s.length>1&&s.sort(w||zu)}function _(){for(let m=e,w=i.length;m<w;m++){let y=i[m];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:h,unshift:u,finish:_,sort:p}}function Og(){let i=new WeakMap;function e(n,s){let r=i.get(n),l;return r===void 0?(l=new Vu,i.set(n,[l])):s>=r.length?(l=new Vu,r.push(l)):l=r[s],l}function t(){i=new WeakMap}return{get:e,dispose:t}}function Bg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new ce,color:new Et};break;case"SpotLight":t={position:new ce,direction:new ce,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ce,color:new Et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ce,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":t={color:new Et,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return i[e.id]=t,t}}}function kg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var zg=0;function Vg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Gg(i){let e=new Bg,t=kg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new ce);let s=new ce,r=new Yt,l=new Yt;function o(u){let p=0,_=0,m=0;for(let R=0;R<9;R++)n.probe[R].set(0,0,0);let w=0,y=0,L=0,S=0,d=0,T=0,I=0,g=0,C=0,b=0,U=0,x=0,N=0,G=0;u.sort(Vg);for(let R=0,K=u.length;R<K;R++){let H=u[R],J=H.color,fe=H.intensity,ge=H.distance,be=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===ts?be=H.shadow.map.texture:be=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)p+=J.r*fe,_+=J.g*fe,m+=J.b*fe;else if(H.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(H.sh.coefficients[j],fe);G++}else if(H.isSunLight){let j=e.get(H);if(j.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){let M=H.shadow,Se=t.get(H);Se.shadowIntensity=M.intensity,Se.shadowBias=M.bias,Se.shadowNormalBias=M.normalBias,Se.shadowRadius=M.radius,Se.shadowMapSize.copy(M.mapSize).multiply(M.getFrameExtents()),n.sunShadow[y]=Se,n.sunShadowMap[y]=be;let Ve=M.getViewportCount();for(let Re=0;Re<Ve;Re++)n.sunShadowMatrix[L+Re]=M.getMatrix(Re),n.sunShadowCascade[L+Re]=M._cascadeData[Re];L+=Ve,y++}n.sun[w]=j,w++}else if(H.isDirectionalLight){let j=e.get(H);if(j.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){let M=H.shadow,Se=t.get(H);Se.shadowIntensity=M.intensity,Se.shadowBias=M.bias,Se.shadowNormalBias=M.normalBias,Se.shadowRadius=M.radius,Se.shadowMapSize=M.mapSize,n.directionalShadow[S]=Se,n.directionalShadowMap[S]=be,n.directionalShadowMatrix[S]=H.shadow.matrix,C++}n.directional[S]=j,S++}else if(H.isSpotLight){let j=e.get(H);j.position.setFromMatrixPosition(H.matrixWorld),j.color.copy(J).multiplyScalar(fe),j.distance=ge,j.coneCos=Math.cos(H.angle),j.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),j.decay=H.decay,n.spot[T]=j;let M=H.shadow;if(H.map&&(n.spotLightMap[x]=H.map,x++,M.updateMatrices(H),H.castShadow&&N++),n.spotLightMatrix[T]=M.matrix,H.castShadow){let Se=t.get(H);Se.shadowIntensity=M.intensity,Se.shadowBias=M.bias,Se.shadowNormalBias=M.normalBias,Se.shadowRadius=M.radius,Se.shadowMapSize=M.mapSize,n.spotShadow[T]=Se,n.spotShadowMap[T]=be,U++}T++}else if(H.isRectAreaLight){let j=e.get(H);j.color.copy(J).multiplyScalar(fe),j.halfWidth.set(H.width*.5,0,0),j.halfHeight.set(0,H.height*.5,0),n.rectArea[I]=j,I++}else if(H.isPointLight){let j=e.get(H);if(j.color.copy(H.color).multiplyScalar(H.intensity),j.distance=H.distance,j.decay=H.decay,H.castShadow){let M=H.shadow,Se=t.get(H);Se.shadowIntensity=M.intensity,Se.shadowBias=M.bias,Se.shadowNormalBias=M.normalBias,Se.shadowRadius=M.radius,Se.shadowMapSize=M.mapSize,Se.shadowCameraNear=M.camera.near,Se.shadowCameraFar=M.camera.far,n.pointShadow[d]=Se,n.pointShadowMap[d]=be,n.pointShadowMatrix[d]=H.shadow.matrix,b++}n.point[d]=j,d++}else if(H.isHemisphereLight){let j=e.get(H);j.skyColor.copy(H.color).multiplyScalar(fe),j.groundColor.copy(H.groundColor).multiplyScalar(fe),n.hemi[g]=j,g++}}I>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ze.LTC_FLOAT_1,n.rectAreaLTC2=Ze.LTC_FLOAT_2):(n.rectAreaLTC1=Ze.LTC_HALF_1,n.rectAreaLTC2=Ze.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=_,n.ambient[2]=m;let Z=n.hash;(Z.sunLength!==w||Z.directionalLength!==S||Z.pointLength!==d||Z.spotLength!==T||Z.rectAreaLength!==I||Z.hemiLength!==g||Z.numSunShadows!==y||Z.numDirectionalShadows!==C||Z.numPointShadows!==b||Z.numSpotShadows!==U||Z.numSpotMaps!==x||Z.numLightProbes!==G)&&(n.sun.length=w,n.directional.length=S,n.spot.length=T,n.rectArea.length=I,n.point.length=d,n.hemi.length=g,n.sunShadow.length=y,n.sunShadowMap.length=y,n.sunShadowMatrix.length=L,n.sunShadowCascade.length=L,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=U,n.spotShadowMap.length=U,n.spotLightMatrix.length=U+x-N,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=G,Z.sunLength=w,Z.directionalLength=S,Z.pointLength=d,Z.spotLength=T,Z.rectAreaLength=I,Z.hemiLength=g,Z.numSunShadows=y,Z.numDirectionalShadows=C,Z.numPointShadows=b,Z.numSpotShadows=U,Z.numSpotMaps=x,Z.numLightProbes=G,n.version=zg++)}function h(u,p){let _=0,m=0,w=0,y=0,L=0,S=0,d=p.matrixWorldInverse;for(let T=0,I=u.length;T<I;T++){let g=u[T];if(g.isSunLight){let C=n.sun[_];C.direction.setFromMatrixPosition(g.matrixWorld),C.direction.transformDirection(d),_++}else if(g.isDirectionalLight){let C=n.directional[m];C.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(d),m++}else if(g.isSpotLight){let C=n.spot[y];C.position.setFromMatrixPosition(g.matrixWorld),C.position.applyMatrix4(d),C.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(d),y++}else if(g.isRectAreaLight){let C=n.rectArea[L];C.position.setFromMatrixPosition(g.matrixWorld),C.position.applyMatrix4(d),l.identity(),r.copy(g.matrixWorld),r.premultiply(d),l.extractRotation(r),C.halfWidth.set(g.width*.5,0,0),C.halfHeight.set(0,g.height*.5,0),C.halfWidth.applyMatrix4(l),C.halfHeight.applyMatrix4(l),L++}else if(g.isPointLight){let C=n.point[w];C.position.setFromMatrixPosition(g.matrixWorld),C.position.applyMatrix4(d),w++}else if(g.isHemisphereLight){let C=n.hemi[S];C.direction.setFromMatrixPosition(g.matrixWorld),C.direction.transformDirection(d),S++}}}return{setup:o,setupView:h,state:n}}function Gu(i){let e=new Gg(i),t=[],n=[],s=[];function r(m){_.camera=m,t.length=0,n.length=0,s.length=0}function l(m){t.push(m)}function o(m){n.push(m)}function h(m){s.push(m)}function u(){e.setup(t)}function p(m){e.setupView(t,m)}let _={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:_,setupLights:u,setupLightsView:p,pushLight:l,pushShadow:o,pushLightProbeGrid:h}}function Hg(i){let e=new WeakMap;function t(s,r=0){let l=e.get(s),o;return l===void 0?(o=new Gu(i),e.set(s,[o])):r>=l.length?(o=new Gu(i),l.push(o)):o=l[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Wg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xg=`uniform sampler2D shadow_pass;
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
}`,qg=[new ce(1,0,0),new ce(-1,0,0),new ce(0,1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1)],Yg=[new ce(0,-1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1),new ce(0,-1,0),new ce(0,-1,0)],Hu=new Yt,na=new ce,Dc=new ce;function Zg(i,e,t){let n=new Ys,s=new Ut,r=new Ut,l=new ln,o=new $s,h=new Za,u={},p=t.maxTextureSize,_={[ji]:Un,[Un]:ji,[$n]:$n},m=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:Wg,fragmentShader:Xg}),w=m.clone();w.defines.HORIZONTAL_PASS=1;let y=new Yn;y.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let L=new Pn(y,m),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ps;let d=this.type;this.render=function(b,U,x){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||b.length===0)return;this.type===Bh&&(mt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ps);let N=i.getRenderTarget(),G=i.getActiveCubeFace(),Z=i.getActiveMipmapLevel(),R=i.state;R.setBlending(Mi),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);let K=d!==this.type;K&&U.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(J=>J.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,J=b.length;H<J;H++){let fe=b[H],ge=fe.shadow;if(ge===void 0){mt("WebGLShadowMap:",fe,"has no shadow.");continue}if(ge.autoUpdate===!1&&ge.needsUpdate===!1)continue;s.copy(ge.mapSize);let be=ge.getFrameExtents();s.multiply(be),r.copy(ge.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(r.x=Math.floor(p/be.x),s.x=r.x*be.x,ge.mapSize.x=r.x),s.y>p&&(r.y=Math.floor(p/be.y),s.y=r.y*be.y,ge.mapSize.y=r.y));let j=i.state.buffers.depth.getReversed();if(ge.camera._reversedDepth=j,ge.map===null||K===!0){if(ge.map!==null&&(ge.map.depthTexture!==null&&(ge.map.depthTexture.dispose(),ge.map.depthTexture=null),ge.map.dispose()),this.type===js){if(fe.isPointLight){mt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ge.map=new zn(s.x,s.y,{format:ts,type:li,minFilter:_n,magFilter:_n,generateMipmaps:!1}),ge.map.texture.name=fe.name+".shadowMap",ge.map.depthTexture=new Zi(s.x,s.y,jn),ge.map.depthTexture.name=fe.name+".shadowMapDepth",ge.map.depthTexture.format=xi,ge.map.depthTexture.compareFunction=null,ge.map.depthTexture.minFilter=bn,ge.map.depthTexture.magFilter=bn}else fe.isPointLight?(ge.map=new il(s.x),ge.map.depthTexture=new Ya(s.x,oi)):(ge.map=new zn(s.x,s.y),ge.map.depthTexture=new Zi(s.x,s.y,oi)),ge.map.depthTexture.name=fe.name+".shadowMap",ge.map.depthTexture.format=xi,this.type===ps?(ge.map.depthTexture.compareFunction=j?jo:Ko,ge.map.depthTexture.minFilter=_n,ge.map.depthTexture.magFilter=_n):(ge.map.depthTexture.compareFunction=null,ge.map.depthTexture.minFilter=bn,ge.map.depthTexture.magFilter=bn);ge.camera.updateProjectionMatrix()}ge.map.isWebGLCubeRenderTarget!==!0&&(ge.map.width!==s.x||ge.map.height!==s.y)&&ge.map.setSize(s.x,s.y);let M=ge.map.isWebGLCubeRenderTarget?6:ge.getViewportCount();fe.isPointLight!==!0&&ge.updateMatrices(fe,x);for(let Se=0;Se<M;Se++){let Ve=ge.getCamera(Se);if(fe.isPointLight){let Re=ge.camera,ee=ge.matrix,ht=fe.distance||Re.far;ht!==Re.far&&(Re.far=ht,Re.updateProjectionMatrix()),na.setFromMatrixPosition(fe.matrixWorld),Re.position.copy(na),Dc.copy(Re.position),Dc.add(qg[Se]),Re.up.copy(Yg[Se]),Re.lookAt(Dc),Re.updateMatrixWorld(),ee.makeTranslation(-na.x,-na.y,-na.z),Hu.multiplyMatrices(Re.projectionMatrix,Re.matrixWorldInverse),ge._frustum.setFromProjectionMatrix(Hu,Re.coordinateSystem,Re.reversedDepth)}if(ge.map.isWebGLCubeRenderTarget)i.setRenderTarget(ge.map,Se),i.clear();else{Se===0&&(i.setRenderTarget(ge.map),i.clear());let Re=ge.getViewport(Se);l.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),R.viewport(l)}n=ge.getFrustum(Se),g(U,x,Ve,fe,this.type)}ge.isPointLightShadow!==!0&&this.type===js&&T(ge,x),ge.needsUpdate=!1}d=this.type,S.needsUpdate=!1,i.setRenderTarget(N,G,Z)};function T(b,U){let x=e.update(L);m.defines.VSM_SAMPLES!==b.blurSamples&&(m.defines.VSM_SAMPLES=b.blurSamples,w.defines.VSM_SAMPLES=b.blurSamples,m.needsUpdate=!0,w.needsUpdate=!0),b.mapPass===null?b.mapPass=new zn(s.x,s.y,{format:ts,type:li}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),m.uniforms.shadow_pass.value=b.map.depthTexture,m.uniforms.resolution.value.set(b.map.width,b.map.height),m.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(U,null,x,m,L,null),w.uniforms.shadow_pass.value=b.mapPass.texture,w.uniforms.resolution.value.set(b.map.width,b.map.height),w.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(U,null,x,w,L,null)}function I(b,U,x,N){let G=null,Z=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(Z!==void 0)G=Z;else if(G=x.isPointLight===!0?h:o,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){let R=G.uuid,K=U.uuid,H=u[R];H===void 0&&(H={},u[R]=H);let J=H[K];J===void 0&&(J=G.clone(),H[K]=J,U.addEventListener("dispose",C)),G=J}if(G.visible=U.visible,G.wireframe=U.wireframe,N===js?G.side=U.shadowSide!==null?U.shadowSide:U.side:G.side=U.shadowSide!==null?U.shadowSide:_[U.side],G.alphaMap=U.alphaMap,G.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,G.map=U.map,G.clipShadows=U.clipShadows,G.clippingPlanes=U.clippingPlanes,G.clipIntersection=U.clipIntersection,G.displacementMap=U.displacementMap,G.displacementScale=U.displacementScale,G.displacementBias=U.displacementBias,G.wireframeLinewidth=U.wireframeLinewidth,G.linewidth=U.linewidth,x.isPointLight===!0&&G.isMeshDistanceMaterial===!0){let R=i.properties.get(G);R.light=x}return G}function g(b,U,x,N,G){if(b.visible===!1)return;if(b.layers.test(U.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&G===js)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);let K=e.update(b),H=b.material;if(Array.isArray(H)){let J=K.groups;for(let fe=0,ge=J.length;fe<ge;fe++){let be=J[fe],j=H[be.materialIndex];if(j&&j.visible){let M=I(b,j,N,G);b.onBeforeShadow(i,b,U,x,K,M,be),i.renderBufferDirect(x,null,K,M,b,be),b.onAfterShadow(i,b,U,x,K,M,be)}}}else if(H.visible){let J=I(b,H,N,G);b.onBeforeShadow(i,b,U,x,K,J,null),i.renderBufferDirect(x,null,K,J,b,null),b.onAfterShadow(i,b,U,x,K,J,null)}}let R=b.children;for(let K=0,H=R.length;K<H;K++)g(R[K],U,x,N,G)}function C(b){b.target.removeEventListener("dispose",C);for(let x in u){let N=u[x],G=b.target.uuid;G in N&&(N[G].dispose(),delete N[G])}}}function Jg(i,e){function t(){let W=!1,Ce=new ln,Me=null,Ue=new ln(0,0,0,0);return{setMask:function(De){Me!==De&&!W&&(i.colorMask(De,De,De,De),Me=De)},setLocked:function(De){W=De},setClear:function(De,we,tt,$e,Tt){Tt===!0&&(De*=$e,we*=$e,tt*=$e),Ce.set(De,we,tt,$e),Ue.equals(Ce)===!1&&(i.clearColor(De,we,tt,$e),Ue.copy(Ce))},reset:function(){W=!1,Me=null,Ue.set(-1,0,0,0)}}}function n(){let W=!1,Ce=!1,Me=null,Ue=null,De=null;return{setReversed:function(we){if(Ce!==we){let tt=e.get("EXT_clip_control");we?tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.ZERO_TO_ONE_EXT):tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.NEGATIVE_ONE_TO_ONE_EXT),Ce=we;let $e=De;De=null,this.setClear($e)}},getReversed:function(){return Ce},setTest:function(we){we?he(i.DEPTH_TEST):He(i.DEPTH_TEST)},setMask:function(we){Me!==we&&!W&&(i.depthMask(we),Me=we)},setFunc:function(we){if(Ce&&(we=_u[we]),Ue!==we){switch(we){case Na:i.depthFunc(i.NEVER);break;case Ua:i.depthFunc(i.ALWAYS);break;case Fa:i.depthFunc(i.LESS);break;case zs:i.depthFunc(i.LEQUAL);break;case Oa:i.depthFunc(i.EQUAL);break;case Ba:i.depthFunc(i.GEQUAL);break;case ka:i.depthFunc(i.GREATER);break;case za:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ue=we}},setLocked:function(we){W=we},setClear:function(we){De!==we&&(De=we,Ce&&(we=1-we),i.clearDepth(we))},reset:function(){W=!1,Me=null,Ue=null,De=null,Ce=!1}}}function s(){let W=!1,Ce=null,Me=null,Ue=null,De=null,we=null,tt=null,$e=null,Tt=null;return{setTest:function(lt){W||(lt?he(i.STENCIL_TEST):He(i.STENCIL_TEST))},setMask:function(lt){Ce!==lt&&!W&&(i.stencilMask(lt),Ce=lt)},setFunc:function(lt,rn,z){(Me!==lt||Ue!==rn||De!==z)&&(i.stencilFunc(lt,rn,z),Me=lt,Ue=rn,De=z)},setOp:function(lt,rn,z){(we!==lt||tt!==rn||$e!==z)&&(i.stencilOp(lt,rn,z),we=lt,tt=rn,$e=z)},setLocked:function(lt){W=lt},setClear:function(lt){Tt!==lt&&(i.clearStencil(lt),Tt=lt)},reset:function(){W=!1,Ce=null,Me=null,Ue=null,De=null,we=null,tt=null,$e=null,Tt=null}}}let r=new t,l=new n,o=new s,h=new WeakMap,u=new WeakMap,p={},_={},m={},w=new WeakMap,y=[],L=null,S=!1,d=null,T=null,I=null,g=null,C=null,b=null,U=null,x=new Et(0,0,0),N=0,G=!1,Z=null,R=null,K=null,H=null,J=null,fe=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ge=!1,be=0,j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(be=parseFloat(/^WebGL (\d)/.exec(j)[1]),ge=be>=1):j.indexOf("OpenGL ES")!==-1&&(be=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),ge=be>=2);let M=null,Se={},Ve=i.getParameter(i.SCISSOR_BOX),Re=i.getParameter(i.VIEWPORT),ee=new ln().fromArray(Ve),ht=new ln().fromArray(Re);function Ct(W,Ce,Me,Ue){let De=new Uint8Array(4),we=i.createTexture();i.bindTexture(W,we),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let tt=0;tt<Me;tt++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Ce,0,i.RGBA,1,1,Ue,0,i.RGBA,i.UNSIGNED_BYTE,De):i.texImage2D(Ce+tt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,De);return we}let ye={};ye[i.TEXTURE_2D]=Ct(i.TEXTURE_2D,i.TEXTURE_2D,1),ye[i.TEXTURE_CUBE_MAP]=Ct(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[i.TEXTURE_2D_ARRAY]=Ct(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ye[i.TEXTURE_3D]=Ct(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),l.setClear(1),o.setClear(0),he(i.DEPTH_TEST),l.setFunc(zs),gt(!1),dt(Kl),he(i.CULL_FACE),_t(Mi);function he(W){p[W]!==!0&&(i.enable(W),p[W]=!0)}function He(W){p[W]!==!1&&(i.disable(W),p[W]=!1)}function ft(W,Ce){return m[W]!==Ce?(i.bindFramebuffer(W,Ce),m[W]=Ce,W===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=Ce),W===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=Ce),!0):!1}function ke(W,Ce){let Me=y,Ue=!1;if(W){Me=w.get(Ce),Me===void 0&&(Me=[],w.set(Ce,Me));let De=W.textures;if(Me.length!==De.length||Me[0]!==i.COLOR_ATTACHMENT0){for(let we=0,tt=De.length;we<tt;we++)Me[we]=i.COLOR_ATTACHMENT0+we;Me.length=De.length,Ue=!0}}else Me[0]!==i.BACK&&(Me[0]=i.BACK,Ue=!0);Ue&&i.drawBuffers(Me)}function We(W){return L!==W?(i.useProgram(W),L=W,!0):!1}let en={[ms]:i.FUNC_ADD,[zh]:i.FUNC_SUBTRACT,[Vh]:i.FUNC_REVERSE_SUBTRACT};en[Gh]=i.MIN,en[Hh]=i.MAX;let rt={[Wh]:i.ZERO,[Xh]:i.ONE,[qh]:i.SRC_COLOR,[tc]:i.SRC_ALPHA,[jh]:i.SRC_ALPHA_SATURATE,[$h]:i.DST_COLOR,[Zh]:i.DST_ALPHA,[Yh]:i.ONE_MINUS_SRC_COLOR,[nc]:i.ONE_MINUS_SRC_ALPHA,[Kh]:i.ONE_MINUS_DST_COLOR,[Jh]:i.ONE_MINUS_DST_ALPHA,[Qh]:i.CONSTANT_COLOR,[eu]:i.ONE_MINUS_CONSTANT_COLOR,[tu]:i.CONSTANT_ALPHA,[nu]:i.ONE_MINUS_CONSTANT_ALPHA};function _t(W,Ce,Me,Ue,De,we,tt,$e,Tt,lt){if(W===Mi){S===!0&&(He(i.BLEND),S=!1);return}if(S===!1&&(he(i.BLEND),S=!0),W!==kh){if(W!==d||lt!==G){if((T!==ms||C!==ms)&&(i.blendEquation(i.FUNC_ADD),T=ms,C=ms),lt)switch(W){case Qs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jl:i.blendFunc(i.ONE,i.ONE);break;case Ql:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ec:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:pt("WebGLState: Invalid blending: ",W);break}else switch(W){case Qs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ql:pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ec:pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:pt("WebGLState: Invalid blending: ",W);break}I=null,g=null,b=null,U=null,x.set(0,0,0),N=0,d=W,G=lt}return}De=De||Ce,we=we||Me,tt=tt||Ue,(Ce!==T||De!==C)&&(i.blendEquationSeparate(en[Ce],en[De]),T=Ce,C=De),(Me!==I||Ue!==g||we!==b||tt!==U)&&(i.blendFuncSeparate(rt[Me],rt[Ue],rt[we],rt[tt]),I=Me,g=Ue,b=we,U=tt),($e.equals(x)===!1||Tt!==N)&&(i.blendColor($e.r,$e.g,$e.b,Tt),x.copy($e),N=Tt),d=W,G=!1}function Pt(W,Ce){W.side===$n?He(i.CULL_FACE):he(i.CULL_FACE);let Me=W.side===Un;Ce&&(Me=!Me),gt(Me),W.blending===Qs&&W.transparent===!1?_t(Mi):_t(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),l.setFunc(W.depthFunc),l.setTest(W.depthTest),l.setMask(W.depthWrite),r.setMask(W.colorWrite);let Ue=W.stencilWrite;o.setTest(Ue),Ue&&(o.setMask(W.stencilWriteMask),o.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),o.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Gt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?he(i.SAMPLE_ALPHA_TO_COVERAGE):He(i.SAMPLE_ALPHA_TO_COVERAGE)}function gt(W){Z!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),Z=W)}function dt(W){W!==Fh?(he(i.CULL_FACE),W!==R&&(W===Kl?i.cullFace(i.BACK):W===Oh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):He(i.CULL_FACE),R=W}function Ot(W){W!==K&&(ge&&i.lineWidth(W),K=W)}function Gt(W,Ce,Me){W?(he(i.POLYGON_OFFSET_FILL),(H!==Ce||J!==Me)&&(H=Ce,J=Me,l.getReversed()&&(Ce=-Ce),i.polygonOffset(Ce,Me))):He(i.POLYGON_OFFSET_FILL)}function yt(W){W?he(i.SCISSOR_TEST):He(i.SCISSOR_TEST)}function Nt(W){W===void 0&&(W=i.TEXTURE0+fe-1),M!==W&&(i.activeTexture(W),M=W)}function te(W,Ce,Me){Me===void 0&&(M===null?Me=i.TEXTURE0+fe-1:Me=M);let Ue=Se[Me];Ue===void 0&&(Ue={type:void 0,texture:void 0},Se[Me]=Ue),(Ue.type!==W||Ue.texture!==Ce)&&(M!==Me&&(i.activeTexture(Me),M=Me),i.bindTexture(W,Ce||ye[W]),Ue.type=W,Ue.texture=Ce)}function Bt(){let W=Se[M];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function St(){try{i.compressedTexImage2D(...arguments)}catch(W){pt("WebGLState:",W)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(W){pt("WebGLState:",W)}}function v(){try{i.texSubImage2D(...arguments)}catch(W){pt("WebGLState:",W)}}function se(){try{i.texSubImage3D(...arguments)}catch(W){pt("WebGLState:",W)}}function le(){try{i.compressedTexSubImage2D(...arguments)}catch(W){pt("WebGLState:",W)}}function xe(){try{i.compressedTexSubImage3D(...arguments)}catch(W){pt("WebGLState:",W)}}function Le(){try{i.texStorage2D(...arguments)}catch(W){pt("WebGLState:",W)}}function Ae(){try{i.texStorage3D(...arguments)}catch(W){pt("WebGLState:",W)}}function pe(){try{i.texImage2D(...arguments)}catch(W){pt("WebGLState:",W)}}function ve(){try{i.texImage3D(...arguments)}catch(W){pt("WebGLState:",W)}}function Ne(W){return _[W]!==void 0?_[W]:i.getParameter(W)}function nt(W,Ce){_[W]!==Ce&&(i.pixelStorei(W,Ce),_[W]=Ce)}function re(W){ee.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),ee.copy(W))}function me(W){ht.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),ht.copy(W))}function _e(W,Ce){let Me=u.get(Ce);Me===void 0&&(Me=new WeakMap,u.set(Ce,Me));let Ue=Me.get(W);Ue===void 0&&(Ue=i.getUniformBlockIndex(Ce,W.name),Me.set(W,Ue))}function Oe(W,Ce){let Ue=u.get(Ce).get(W);h.get(Ce)!==Ue&&(i.uniformBlockBinding(Ce,Ue,W.__bindingPointIndex),h.set(Ce,Ue))}function ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),l.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),p={},_={},M=null,Se={},m={},w=new WeakMap,y=[],L=null,S=!1,d=null,T=null,I=null,g=null,C=null,b=null,U=null,x=new Et(0,0,0),N=0,G=!1,Z=null,R=null,K=null,H=null,J=null,ee.set(0,0,i.canvas.width,i.canvas.height),ht.set(0,0,i.canvas.width,i.canvas.height),r.reset(),l.reset(),o.reset()}return{buffers:{color:r,depth:l,stencil:o},enable:he,disable:He,bindFramebuffer:ft,drawBuffers:ke,useProgram:We,setBlending:_t,setMaterial:Pt,setFlipSided:gt,setCullFace:dt,setLineWidth:Ot,setPolygonOffset:Gt,setScissorTest:yt,activeTexture:Nt,bindTexture:te,unbindTexture:Bt,compressedTexImage2D:St,compressedTexImage3D:B,texImage2D:pe,texImage3D:ve,pixelStorei:nt,getParameter:Ne,updateUBOMapping:_e,uniformBlockBinding:Oe,texStorage2D:Le,texStorage3D:Ae,texSubImage2D:v,texSubImage3D:se,compressedTexSubImage2D:le,compressedTexSubImage3D:xe,scissor:re,viewport:me,reset:ot}}function $g(i,e,t,n,s,r,l){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ut,p=new WeakMap,_=new Set,m,w=new WeakMap,y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function L(B,v){return y?new OffscreenCanvas(B,v):Sr("canvas")}function S(B,v,se){let le=1,xe=St(B);if((xe.width>se||xe.height>se)&&(le=se/Math.max(xe.width,xe.height)),le<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){let Le=Math.floor(le*xe.width),Ae=Math.floor(le*xe.height);m===void 0&&(m=L(Le,Ae));let pe=v?L(Le,Ae):m;return pe.width=Le,pe.height=Ae,pe.getContext("2d").drawImage(B,0,0,Le,Ae),mt("WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+Le+"x"+Ae+")."),pe}else return"data"in B&&mt("WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),B;return B}function d(B){return B.generateMipmaps}function T(B){i.generateMipmap(B)}function I(B){return B.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?i.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function g(B,v,se,le,xe,Le=!1){if(B!==null){if(i[B]!==void 0)return i[B];mt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let Ae;le&&(Ae=e.get("EXT_texture_norm16"),Ae||mt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=v;if(v===i.RED&&(se===i.FLOAT&&(pe=i.R32F),se===i.HALF_FLOAT&&(pe=i.R16F),se===i.UNSIGNED_BYTE&&(pe=i.R8),se===i.UNSIGNED_SHORT&&Ae&&(pe=Ae.R16_EXT),se===i.SHORT&&Ae&&(pe=Ae.R16_SNORM_EXT)),v===i.RED_INTEGER&&(se===i.UNSIGNED_BYTE&&(pe=i.R8UI),se===i.UNSIGNED_SHORT&&(pe=i.R16UI),se===i.UNSIGNED_INT&&(pe=i.R32UI),se===i.BYTE&&(pe=i.R8I),se===i.SHORT&&(pe=i.R16I),se===i.INT&&(pe=i.R32I)),v===i.RG&&(se===i.FLOAT&&(pe=i.RG32F),se===i.HALF_FLOAT&&(pe=i.RG16F),se===i.UNSIGNED_BYTE&&(pe=i.RG8),se===i.UNSIGNED_SHORT&&Ae&&(pe=Ae.RG16_EXT),se===i.SHORT&&Ae&&(pe=Ae.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(se===i.UNSIGNED_BYTE&&(pe=i.RG8UI),se===i.UNSIGNED_SHORT&&(pe=i.RG16UI),se===i.UNSIGNED_INT&&(pe=i.RG32UI),se===i.BYTE&&(pe=i.RG8I),se===i.SHORT&&(pe=i.RG16I),se===i.INT&&(pe=i.RG32I)),v===i.RGB_INTEGER&&(se===i.UNSIGNED_BYTE&&(pe=i.RGB8UI),se===i.UNSIGNED_SHORT&&(pe=i.RGB16UI),se===i.UNSIGNED_INT&&(pe=i.RGB32UI),se===i.BYTE&&(pe=i.RGB8I),se===i.SHORT&&(pe=i.RGB16I),se===i.INT&&(pe=i.RGB32I)),v===i.RGBA_INTEGER&&(se===i.UNSIGNED_BYTE&&(pe=i.RGBA8UI),se===i.UNSIGNED_SHORT&&(pe=i.RGBA16UI),se===i.UNSIGNED_INT&&(pe=i.RGBA32UI),se===i.BYTE&&(pe=i.RGBA8I),se===i.SHORT&&(pe=i.RGBA16I),se===i.INT&&(pe=i.RGBA32I)),v===i.RGB&&(se===i.UNSIGNED_SHORT&&Ae&&(pe=Ae.RGB16_EXT),se===i.SHORT&&Ae&&(pe=Ae.RGB16_SNORM_EXT),se===i.UNSIGNED_INT_5_9_9_9_REV&&(pe=i.RGB9_E5),se===i.UNSIGNED_INT_10F_11F_11F_REV&&(pe=i.R11F_G11F_B10F)),v===i.RGBA){let ve=Le?br:Ft.getTransfer(xe);se===i.FLOAT&&(pe=i.RGBA32F),se===i.HALF_FLOAT&&(pe=i.RGBA16F),se===i.UNSIGNED_BYTE&&(pe=ve===$t?i.SRGB8_ALPHA8:i.RGBA8),se===i.UNSIGNED_SHORT&&Ae&&(pe=Ae.RGBA16_EXT),se===i.SHORT&&Ae&&(pe=Ae.RGBA16_SNORM_EXT),se===i.UNSIGNED_SHORT_4_4_4_4&&(pe=i.RGBA4),se===i.UNSIGNED_SHORT_5_5_5_1&&(pe=i.RGB5_A1)}return(pe===i.R16F||pe===i.R32F||pe===i.RG16F||pe===i.RG32F||pe===i.RGBA16F||pe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function C(B,v){let se;return B?v===null||v===oi||v===tr?se=i.DEPTH24_STENCIL8:v===jn?se=i.DEPTH32F_STENCIL8:v===er&&(se=i.DEPTH24_STENCIL8,mt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===oi||v===tr?se=i.DEPTH_COMPONENT24:v===jn?se=i.DEPTH_COMPONENT32F:v===er&&(se=i.DEPTH_COMPONENT16),se}function b(B,v){return d(B)===!0||B.isFramebufferTexture&&B.minFilter!==bn&&B.minFilter!==_n?Math.log2(Math.max(v.width,v.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?v.mipmaps.length:1}function U(B){let v=B.target;v.removeEventListener("dispose",U),N(v),v.isVideoTexture&&p.delete(v),v.isHTMLTexture&&_.delete(v)}function x(B){let v=B.target;v.removeEventListener("dispose",x),Z(v)}function N(B){let v=n.get(B);if(v.__webglInit===void 0)return;let se=B.source,le=w.get(se);if(le){let xe=le[v.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&G(B),Object.keys(le).length===0&&w.delete(se)}n.remove(B)}function G(B){let v=n.get(B);i.deleteTexture(v.__webglTexture);let se=B.source,le=w.get(se);delete le[v.__cacheKey],l.memory.textures--}function Z(B){let v=n.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),n.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(v.__webglFramebuffer[le]))for(let xe=0;xe<v.__webglFramebuffer[le].length;xe++)i.deleteFramebuffer(v.__webglFramebuffer[le][xe]);else i.deleteFramebuffer(v.__webglFramebuffer[le]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[le])}else{if(Array.isArray(v.__webglFramebuffer))for(let le=0;le<v.__webglFramebuffer.length;le++)i.deleteFramebuffer(v.__webglFramebuffer[le]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let le=0;le<v.__webglColorRenderbuffer.length;le++)v.__webglColorRenderbuffer[le]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[le]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let se=B.textures;for(let le=0,xe=se.length;le<xe;le++){let Le=n.get(se[le]);Le.__webglTexture&&(i.deleteTexture(Le.__webglTexture),l.memory.textures--),n.remove(se[le])}n.remove(B)}let R=0;function K(){R=0}function H(){return R}function J(B){R=B}function fe(){let B=R;return B>=s.maxTextures&&mt("WebGLTextures: Trying to use "+(B+1)+" texture units while this GPU supports only "+s.maxTextures),R+=1,B}function ge(B){let v=[];return v.push(B.wrapS),v.push(B.wrapT),v.push(B.wrapR||0),v.push(B.magFilter),v.push(B.minFilter),v.push(B.anisotropy),v.push(B.internalFormat),v.push(B.format),v.push(B.type),v.push(B.generateMipmaps),v.push(B.premultiplyAlpha),v.push(B.flipY),v.push(B.unpackAlignment),v.push(B.colorSpace),v.join()}function be(B,v){let se=n.get(B);if(B.isVideoTexture&&te(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&se.__version!==B.version){let le=B.image;if(le===null)mt("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)mt("WebGLRenderer: Texture marked for update but image is incomplete");else{He(se,B,v);return}}else B.isExternalTexture&&(se.__webglTexture=B.sourceTexture?B.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,se.__webglTexture,i.TEXTURE0+v)}function j(B,v){let se=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&se.__version!==B.version){He(se,B,v);return}else B.isExternalTexture&&(se.__webglTexture=B.sourceTexture?B.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,se.__webglTexture,i.TEXTURE0+v)}function M(B,v){let se=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&se.__version!==B.version){He(se,B,v);return}t.bindTexture(i.TEXTURE_3D,se.__webglTexture,i.TEXTURE0+v)}function Se(B,v){let se=n.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&se.__version!==B.version){ft(se,B,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture,i.TEXTURE0+v)}let Ve={[Vs]:i.REPEAT,[gi]:i.CLAMP_TO_EDGE,[Va]:i.MIRRORED_REPEAT},Re={[bn]:i.NEAREST,[ru]:i.NEAREST_MIPMAP_NEAREST,[Yr]:i.NEAREST_MIPMAP_LINEAR,[_n]:i.LINEAR,[uo]:i.LINEAR_MIPMAP_NEAREST,[bi]:i.LINEAR_MIPMAP_LINEAR},ee={[cu]:i.NEVER,[pu]:i.ALWAYS,[hu]:i.LESS,[Ko]:i.LEQUAL,[uu]:i.EQUAL,[jo]:i.GEQUAL,[du]:i.GREATER,[fu]:i.NOTEQUAL};function ht(B,v){if(v.type===jn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===_n||v.magFilter===uo||v.magFilter===Yr||v.magFilter===bi||v.minFilter===_n||v.minFilter===uo||v.minFilter===Yr||v.minFilter===bi)&&mt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(B,i.TEXTURE_WRAP_S,Ve[v.wrapS]),i.texParameteri(B,i.TEXTURE_WRAP_T,Ve[v.wrapT]),(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)&&i.texParameteri(B,i.TEXTURE_WRAP_R,Ve[v.wrapR]),i.texParameteri(B,i.TEXTURE_MAG_FILTER,Re[v.magFilter]),i.texParameteri(B,i.TEXTURE_MIN_FILTER,Re[v.minFilter]),v.compareFunction&&(i.texParameteri(B,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(B,i.TEXTURE_COMPARE_FUNC,ee[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===bn||v.minFilter!==Yr&&v.minFilter!==bi||v.type===jn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let se=e.get("EXT_texture_filter_anisotropic");i.texParameterf(B,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ct(B,v){let se=!1;B.__webglInit===void 0&&(B.__webglInit=!0,v.addEventListener("dispose",U));let le=v.source,xe=w.get(le);xe===void 0&&(xe={},w.set(le,xe));let Le=ge(v);if(Le!==B.__cacheKey){xe[Le]===void 0&&(xe[Le]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,se=!0),xe[Le].usedTimes++;let Ae=xe[B.__cacheKey];Ae!==void 0&&(xe[B.__cacheKey].usedTimes--,Ae.usedTimes===0&&G(v)),B.__cacheKey=Le,B.__webglTexture=xe[Le].texture}return se}function ye(B,v,se){return Math.floor(Math.floor(B/se)/v)}function he(B,v,se,le){let Le=B.updateRanges;if(Le.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,se,le,v.data);else{Le.sort((nt,re)=>nt.start-re.start);let Ae=0;for(let nt=1;nt<Le.length;nt++){let re=Le[Ae],me=Le[nt],_e=re.start+re.count,Oe=ye(me.start,v.width,4),ot=ye(re.start,v.width,4);me.start<=_e+1&&Oe===ot&&ye(me.start+me.count-1,v.width,4)===Oe?re.count=Math.max(re.count,me.start+me.count-re.start):(++Ae,Le[Ae]=me)}Le.length=Ae+1;let pe=t.getParameter(i.UNPACK_ROW_LENGTH),ve=t.getParameter(i.UNPACK_SKIP_PIXELS),Ne=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let nt=0,re=Le.length;nt<re;nt++){let me=Le[nt],_e=Math.floor(me.start/4),Oe=Math.ceil(me.count/4),ot=_e%v.width,W=Math.floor(_e/v.width),Ce=Oe,Me=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ot),t.pixelStorei(i.UNPACK_SKIP_ROWS,W),t.texSubImage2D(i.TEXTURE_2D,0,ot,W,Ce,Me,se,le,v.data)}B.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,pe),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ve),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ne)}}function He(B,v,se){let le=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(le=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(le=i.TEXTURE_3D);let xe=Ct(B,v),Le=v.source;t.bindTexture(le,B.__webglTexture,i.TEXTURE0+se);let Ae=n.get(Le);if(Le.version!==Ae.__version||xe===!0){if(t.activeTexture(i.TEXTURE0+se),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let Me=Ft.getPrimaries(Ft.workingColorSpace),Ue=v.colorSpace===Oi?null:Ft.getPrimaries(v.colorSpace),De=v.colorSpace===Oi||Me===Ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,De)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let ve=S(v.image,!1,s.maxTextureSize);ve=Bt(v,ve);let Ne=r.convert(v.format,v.colorSpace),nt=r.convert(v.type),re=g(v.internalFormat,Ne,nt,v.normalized,v.colorSpace,v.isVideoTexture);ht(le,v);let me,_e=v.mipmaps,Oe=v.isVideoTexture!==!0,ot=Ae.__version===void 0||xe===!0,W=Le.dataReady,Ce=b(v,ve);if(v.isDepthTexture)re=C(v.format===es,v.type),ot&&(Oe?t.texStorage2D(i.TEXTURE_2D,1,re,ve.width,ve.height):t.texImage2D(i.TEXTURE_2D,0,re,ve.width,ve.height,0,Ne,nt,null));else if(v.isDataTexture)if(_e.length>0){Oe&&ot&&t.texStorage2D(i.TEXTURE_2D,Ce,re,_e[0].width,_e[0].height);for(let Me=0,Ue=_e.length;Me<Ue;Me++)me=_e[Me],Oe?W&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,me.width,me.height,Ne,nt,me.data):t.texImage2D(i.TEXTURE_2D,Me,re,me.width,me.height,0,Ne,nt,me.data);v.generateMipmaps=!1}else Oe?(ot&&t.texStorage2D(i.TEXTURE_2D,Ce,re,ve.width,ve.height),W&&he(v,ve,Ne,nt)):t.texImage2D(i.TEXTURE_2D,0,re,ve.width,ve.height,0,Ne,nt,ve.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Oe&&ot&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,re,_e[0].width,_e[0].height,ve.depth);for(let Me=0,Ue=_e.length;Me<Ue;Me++)if(me=_e[Me],v.format!==Qn)if(Ne!==null)if(Oe){if(W)if(v.layerUpdates.size>0){let De=bc(me.width,me.height,v.format,v.type);for(let we of v.layerUpdates){let tt=me.data.subarray(we*De/me.data.BYTES_PER_ELEMENT,(we+1)*De/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,we,me.width,me.height,1,Ne,tt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,0,me.width,me.height,ve.depth,Ne,me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Me,re,me.width,me.height,ve.depth,0,me.data,0,0);else mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?W&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,0,me.width,me.height,ve.depth,Ne,nt,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Me,re,me.width,me.height,ve.depth,0,Ne,nt,me.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Oe&&ot&&t.texStorage2D(i.TEXTURE_2D,Ce,re,_e[0].width,_e[0].height);for(let Me=0,Ue=_e.length;Me<Ue;Me++)me=_e[Me],v.format!==Qn?Ne!==null?Oe?W&&t.compressedTexSubImage2D(i.TEXTURE_2D,Me,0,0,me.width,me.height,Ne,me.data):t.compressedTexImage2D(i.TEXTURE_2D,Me,re,me.width,me.height,0,me.data):mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?W&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,me.width,me.height,Ne,nt,me.data):t.texImage2D(i.TEXTURE_2D,Me,re,me.width,me.height,0,Ne,nt,me.data)}else if(v.isDataArrayTexture)if(Oe){if(ot&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,re,ve.width,ve.height,ve.depth),W)if(v.layerUpdates.size>0){let Me=bc(ve.width,ve.height,v.format,v.type);for(let Ue of v.layerUpdates){let De=ve.data.subarray(Ue*Me/ve.data.BYTES_PER_ELEMENT,(Ue+1)*Me/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ue,ve.width,ve.height,1,Ne,nt,De)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Ne,nt,ve.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,re,ve.width,ve.height,ve.depth,0,Ne,nt,ve.data);else if(v.isData3DTexture)Oe?(ot&&t.texStorage3D(i.TEXTURE_3D,Ce,re,ve.width,ve.height,ve.depth),W&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Ne,nt,ve.data)):t.texImage3D(i.TEXTURE_3D,0,re,ve.width,ve.height,ve.depth,0,Ne,nt,ve.data);else if(v.isFramebufferTexture){if(ot)if(Oe)t.texStorage2D(i.TEXTURE_2D,Ce,re,ve.width,ve.height);else{let Me=ve.width,Ue=ve.height;for(let De=0;De<Ce;De++)t.texImage2D(i.TEXTURE_2D,De,re,Me,Ue,0,Ne,nt,null),Me>>=1,Ue>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let Me=i.canvas;if(Me.hasAttribute("layoutsubtree")||Me.setAttribute("layoutsubtree","true"),ve.parentNode!==Me){Me.appendChild(ve),_.add(v),Me.onpaint=Ue=>{let De=Ue.changedElements;for(let we of _)De.includes(we.image)&&(we.needsUpdate=!0)},Me.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ve);else{let De=i.RGBA,we=i.RGBA,tt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,De,we,tt,ve)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(_e.length>0){if(Oe&&ot){let Me=St(_e[0]);t.texStorage2D(i.TEXTURE_2D,Ce,re,Me.width,Me.height)}for(let Me=0,Ue=_e.length;Me<Ue;Me++)me=_e[Me],Oe?W&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,Ne,nt,me):t.texImage2D(i.TEXTURE_2D,Me,re,Ne,nt,me);v.generateMipmaps=!1}else if(Oe){if(ot){let Me=St(ve);t.texStorage2D(i.TEXTURE_2D,Ce,re,Me.width,Me.height)}W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ne,nt,ve)}else t.texImage2D(i.TEXTURE_2D,0,re,Ne,nt,ve);d(v)&&T(le),Ae.__version=Le.version,v.onUpdate&&v.onUpdate(v)}B.__version=v.version}function ft(B,v,se){if(v.image.length!==6)return;let le=Ct(B,v),xe=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+se);let Le=n.get(xe);if(xe.version!==Le.__version||le===!0){t.activeTexture(i.TEXTURE0+se);let Ae=Ft.getPrimaries(Ft.workingColorSpace),pe=v.colorSpace===Oi?null:Ft.getPrimaries(v.colorSpace),ve=v.colorSpace===Oi||Ae===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let Ne=v.isCompressedTexture||v.image[0].isCompressedTexture,nt=v.image[0]&&v.image[0].isDataTexture,re=[];for(let we=0;we<6;we++)!Ne&&!nt?re[we]=S(v.image[we],!0,s.maxCubemapSize):re[we]=nt?v.image[we].image:v.image[we],re[we]=Bt(v,re[we]);let me=re[0],_e=r.convert(v.format,v.colorSpace),Oe=r.convert(v.type),ot=g(v.internalFormat,_e,Oe,v.normalized,v.colorSpace),W=v.isVideoTexture!==!0,Ce=Le.__version===void 0||le===!0,Me=xe.dataReady,Ue=b(v,me);ht(i.TEXTURE_CUBE_MAP,v);let De;if(Ne){W&&Ce&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,ot,me.width,me.height);for(let we=0;we<6;we++){De=re[we].mipmaps;for(let tt=0;tt<De.length;tt++){let $e=De[tt];v.format!==Qn?_e!==null?W?Me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,tt,0,0,$e.width,$e.height,_e,$e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,tt,ot,$e.width,$e.height,0,$e.data):mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,tt,0,0,$e.width,$e.height,_e,Oe,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,tt,ot,$e.width,$e.height,0,_e,Oe,$e.data)}}}else{if(De=v.mipmaps,W&&Ce){De.length>0&&Ue++;let we=St(re[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,ot,we.width,we.height)}for(let we=0;we<6;we++)if(nt){W?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,re[we].width,re[we].height,_e,Oe,re[we].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,ot,re[we].width,re[we].height,0,_e,Oe,re[we].data);for(let tt=0;tt<De.length;tt++){let Tt=De[tt].image[we].image;W?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,tt+1,0,0,Tt.width,Tt.height,_e,Oe,Tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,tt+1,ot,Tt.width,Tt.height,0,_e,Oe,Tt.data)}}else{W?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,_e,Oe,re[we]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,ot,_e,Oe,re[we]);for(let tt=0;tt<De.length;tt++){let $e=De[tt];W?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,tt+1,0,0,_e,Oe,$e.image[we]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,tt+1,ot,_e,Oe,$e.image[we])}}}d(v)&&T(i.TEXTURE_CUBE_MAP),Le.__version=xe.version,v.onUpdate&&v.onUpdate(v)}B.__version=v.version}function ke(B,v,se,le,xe,Le){let Ae=r.convert(se.format,se.colorSpace),pe=r.convert(se.type),ve=g(se.internalFormat,Ae,pe,se.normalized,se.colorSpace),Ne=n.get(v),nt=n.get(se);if(nt.__renderTarget=v,!Ne.__hasExternalTextures){let re=Math.max(1,v.width>>Le),me=Math.max(1,v.height>>Le);xe===i.TEXTURE_3D||xe===i.TEXTURE_2D_ARRAY?t.texImage3D(xe,Le,ve,re,me,v.depth,0,Ae,pe,null):t.texImage2D(xe,Le,ve,re,me,0,Ae,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,B),Nt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,xe,nt.__webglTexture,0,yt(v)):(xe===i.TEXTURE_2D||xe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,le,xe,nt.__webglTexture,Le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(B,v,se){if(i.bindRenderbuffer(i.RENDERBUFFER,B),v.depthBuffer){let le=v.depthTexture,xe=le&&le.isDepthTexture?le.type:null,Le=C(v.stencilBuffer,xe),Ae=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Nt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt(v),Le,v.width,v.height):se?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt(v),Le,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Le,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ae,i.RENDERBUFFER,B)}else{let le=v.textures;for(let xe=0;xe<le.length;xe++){let Le=le[xe],Ae=r.convert(Le.format,Le.colorSpace),pe=r.convert(Le.type),ve=g(Le.internalFormat,Ae,pe,Le.normalized,Le.colorSpace);Nt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt(v),ve,v.width,v.height):se?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt(v),ve,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ve,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function en(B,v,se){let le=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,B),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let xe=n.get(v.depthTexture);if(xe.__renderTarget=v,(!xe.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),le){if(xe.__webglInit===void 0&&(xe.__webglInit=!0,v.depthTexture.addEventListener("dispose",U)),xe.__webglTexture===void 0){xe.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,xe.__webglTexture),ht(i.TEXTURE_CUBE_MAP,v.depthTexture);let Ne=r.convert(v.depthTexture.format),nt=r.convert(v.depthTexture.type),re;v.depthTexture.format===xi?re=i.DEPTH_COMPONENT24:v.depthTexture.format===es&&(re=i.DEPTH24_STENCIL8);for(let me=0;me<6;me++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,re,v.width,v.height,0,Ne,nt,null)}}else be(v.depthTexture,0);let Le=xe.__webglTexture,Ae=yt(v),pe=le?i.TEXTURE_CUBE_MAP_POSITIVE_X+se:i.TEXTURE_2D,ve=v.depthTexture.format===es?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===xi)Nt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,pe,Le,0,Ae):i.framebufferTexture2D(i.FRAMEBUFFER,ve,pe,Le,0);else if(v.depthTexture.format===es)Nt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,pe,Le,0,Ae):i.framebufferTexture2D(i.FRAMEBUFFER,ve,pe,Le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(B){let v=n.get(B),se=B.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==B.depthTexture){let le=B.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),le){let xe=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,le.removeEventListener("dispose",xe)};le.addEventListener("dispose",xe),v.__depthDisposeCallback=xe}v.__boundDepthTexture=le}if(B.depthTexture&&!v.__autoAllocateDepthBuffer)if(se)for(let le=0;le<6;le++)en(v.__webglFramebuffer[le],B,le);else{let le=B.texture.mipmaps;le&&le.length>0?en(v.__webglFramebuffer[0],B,0):en(v.__webglFramebuffer,B,0)}else if(se){v.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[le]),v.__webglDepthbuffer[le]===void 0)v.__webglDepthbuffer[le]=i.createRenderbuffer(),We(v.__webglDepthbuffer[le],B,!1);else{let xe=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=v.__webglDepthbuffer[le];i.bindRenderbuffer(i.RENDERBUFFER,Le),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,Le)}}else{let le=B.texture.mipmaps;if(le&&le.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),We(v.__webglDepthbuffer,B,!1);else{let xe=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Le),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,Le)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(B,v,se){let le=n.get(B);v!==void 0&&ke(le.__webglFramebuffer,B,B.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),se!==void 0&&rt(B)}function Pt(B){let v=B.texture,se=n.get(B),le=n.get(v);B.addEventListener("dispose",x);let xe=B.textures,Le=B.isWebGLCubeRenderTarget===!0,Ae=xe.length>1;if(Ae||(le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture()),le.__version=v.version,l.memory.textures++),Le){se.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(v.mipmaps&&v.mipmaps.length>0){se.__webglFramebuffer[pe]=[];for(let ve=0;ve<v.mipmaps.length;ve++)se.__webglFramebuffer[pe][ve]=i.createFramebuffer()}else se.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){se.__webglFramebuffer=[];for(let pe=0;pe<v.mipmaps.length;pe++)se.__webglFramebuffer[pe]=i.createFramebuffer()}else se.__webglFramebuffer=i.createFramebuffer();if(Ae)for(let pe=0,ve=xe.length;pe<ve;pe++){let Ne=n.get(xe[pe]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=i.createTexture(),l.memory.textures++)}if(B.samples>0&&Nt(B)===!1){se.__webglMultisampledFramebuffer=i.createFramebuffer(),se.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let pe=0;pe<xe.length;pe++){let ve=xe[pe];se.__webglColorRenderbuffer[pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,se.__webglColorRenderbuffer[pe]);let Ne=r.convert(ve.format,ve.colorSpace),nt=r.convert(ve.type),re=g(ve.internalFormat,Ne,nt,ve.normalized,ve.colorSpace,B.isXRRenderTarget===!0),me=yt(B);i.renderbufferStorageMultisample(i.RENDERBUFFER,me,re,B.width,B.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,se.__webglColorRenderbuffer[pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),B.depthBuffer&&(se.__webglDepthRenderbuffer=i.createRenderbuffer(),We(se.__webglDepthRenderbuffer,B,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Le){t.bindTexture(i.TEXTURE_CUBE_MAP,le.__webglTexture),ht(i.TEXTURE_CUBE_MAP,v);for(let pe=0;pe<6;pe++)if(v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)ke(se.__webglFramebuffer[pe][ve],B,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ve);else ke(se.__webglFramebuffer[pe],B,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);d(v)&&T(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let pe=0,ve=xe.length;pe<ve;pe++){let Ne=xe[pe],nt=n.get(Ne),re=i.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(re=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,nt.__webglTexture),ht(re,Ne),ke(se.__webglFramebuffer,B,Ne,i.COLOR_ATTACHMENT0+pe,re,0),d(Ne)&&T(re)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(pe=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,le.__webglTexture),ht(pe,v),v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)ke(se.__webglFramebuffer[ve],B,v,i.COLOR_ATTACHMENT0,pe,ve);else ke(se.__webglFramebuffer,B,v,i.COLOR_ATTACHMENT0,pe,0);d(v)&&T(pe),t.unbindTexture()}B.depthBuffer&&rt(B)}function gt(B){let v=B.textures;for(let se=0,le=v.length;se<le;se++){let xe=v[se];if(d(xe)){let Le=I(B),Ae=n.get(xe).__webglTexture;t.bindTexture(Le,Ae),T(Le),t.unbindTexture()}}}let dt=[],Ot=[];function Gt(B){if(B.samples>0){if(Nt(B)===!1){let v=B.textures,se=B.width,le=B.height,xe=i.COLOR_BUFFER_BIT,Le=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(B),pe=v.length>1;if(pe)for(let Ne=0;Ne<v.length;Ne++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);let ve=B.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Ne=0;Ne<v.length;Ne++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(xe|=i.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(xe|=i.STENCIL_BUFFER_BIT)),pe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ne]);let nt=n.get(v[Ne]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,nt,0)}i.blitFramebuffer(0,0,se,le,0,0,se,le,xe,i.NEAREST),h===!0&&(dt.length=0,Ot.length=0,dt.push(i.COLOR_ATTACHMENT0+Ne),B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&(dt.push(Le),Ot.push(Le),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ot)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pe)for(let Ne=0;Ne<v.length;Ne++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ne]);let nt=n.get(v[Ne]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,nt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&h){let v=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function yt(B){return Math.min(s.maxSamples,B.samples)}function Nt(B){let v=n.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function te(B){let v=l.render.frame;p.get(B)!==v&&(p.set(B,v),B.update())}function Bt(B,v){let se=B.colorSpace,le=B.format,xe=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||se!==Mr&&se!==Oi&&(Ft.getTransfer(se)===$t?(le!==Qn||xe!==Vn)&&mt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):pt("WebGLTextures: Unsupported texture color space:",se)),v}function St(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(u.width=B.naturalWidth||B.width,u.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(u.width=B.displayWidth,u.height=B.displayHeight):(u.width=B.width,u.height=B.height),u}this.allocateTextureUnit=fe,this.resetTextureUnits=K,this.getTextureUnits=H,this.setTextureUnits=J,this.setTexture2D=be,this.setTexture2DArray=j,this.setTexture3D=M,this.setTextureCube=Se,this.rebindTextures=_t,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=Nt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Kg(i,e){function t(n,s=Oi){let r,l=Ft.getTransfer(s);if(n===Vn)return i.UNSIGNED_BYTE;if(n===po)return i.UNSIGNED_SHORT_4_4_4_4;if(n===mo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===pc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===uc)return i.BYTE;if(n===dc)return i.SHORT;if(n===er)return i.UNSIGNED_SHORT;if(n===fo)return i.INT;if(n===oi)return i.UNSIGNED_INT;if(n===jn)return i.FLOAT;if(n===li)return i.HALF_FLOAT;if(n===mc)return i.ALPHA;if(n===gc)return i.RGB;if(n===Qn)return i.RGBA;if(n===xi)return i.DEPTH_COMPONENT;if(n===es)return i.DEPTH_STENCIL;if(n===go)return i.RED;if(n===xo)return i.RED_INTEGER;if(n===ts)return i.RG;if(n===_o)return i.RG_INTEGER;if(n===yo)return i.RGBA_INTEGER;if(n===Zr||n===Jr||n===$r||n===Kr)if(l===$t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vo||n===Mo||n===bo||n===So)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===vo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===So)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wo||n===To||n===Eo||n===Ao||n===Co||n===jr||n===Ro)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wo||n===To)return l===$t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Eo)return l===$t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ao)return r.COMPRESSED_R11_EAC;if(n===Co)return r.COMPRESSED_SIGNED_R11_EAC;if(n===jr)return r.COMPRESSED_RG11_EAC;if(n===Ro)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Io||n===Po||n===Lo||n===Do||n===No||n===Uo||n===Fo||n===Oo||n===Bo||n===ko||n===zo||n===Vo||n===Go||n===Ho)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Io)return l===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Po)return l===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Lo)return l===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Do)return l===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===No)return l===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uo)return l===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fo)return l===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oo)return l===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bo)return l===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ko)return l===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zo)return l===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vo)return l===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Go)return l===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ho)return l===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wo||n===Xo||n===qo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Wo)return l===$t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yo||n===Zo||n===Qr||n===Jo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Yo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Zo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===tr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var jg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qg=`
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

}`,Vc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Fr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Zn({vertexShader:jg,fragmentShader:Qg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pn(new Or(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gc=class extends _i{constructor(e,t){super();let n=this,s=null,r=1,l=null,o="local-floor",h=1,u=null,p=null,_=null,m=null,w=null,y=null,L=typeof XRWebGLBinding<"u",S=new Vc,d={},T=t.getContextAttributes(),I=null,g=null,C=[],b=[],U=new Ut,x=null,N=null,G=new Rn;G.viewport=new ln;let Z=new Rn;Z.viewport=new ln;let R=[G,Z],K=new oo,H=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ye){let he=C[ye];return he===void 0&&(he=new qs,C[ye]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ye){let he=C[ye];return he===void 0&&(he=new qs,C[ye]=he),he.getGripSpace()},this.getHand=function(ye){let he=C[ye];return he===void 0&&(he=new qs,C[ye]=he),he.getHandSpace()};function fe(ye){let he=b.indexOf(ye.inputSource);if(he===-1)return;let He=C[he];He!==void 0&&(He.update(ye.inputSource,ye.frame,u||l),He.dispatchEvent({type:ye.type,data:ye.inputSource}))}function ge(){s.removeEventListener("select",fe),s.removeEventListener("selectstart",fe),s.removeEventListener("selectend",fe),s.removeEventListener("squeeze",fe),s.removeEventListener("squeezestart",fe),s.removeEventListener("squeezeend",fe),s.removeEventListener("end",ge),s.removeEventListener("inputsourceschange",be);for(let ye=0;ye<C.length;ye++){let he=b[ye];he!==null&&(b[ye]=null,C[ye].disconnect(he))}H=null,J=null,S.reset();for(let ye in d)delete d[ye];if(e.setRenderTarget(I),w=null,m=null,_=null,s=null,g=null,Ct.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(U.width,U.height,!1),N!==null){let ye=N.camera;ye.fov=N.fov,ye.zoom=N.zoom,ye.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ye){r=ye,n.isPresenting===!0&&mt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ye){o=ye,n.isPresenting===!0&&mt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||l},this.setReferenceSpace=function(ye){u=ye},this.getBaseLayer=function(){return m!==null?m:w},this.getBinding=function(){return _===null&&L&&(_=new XRWebGLBinding(s,t)),_},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(ye){if(s=ye,s!==null){if(I=e.getRenderTarget(),s.addEventListener("select",fe),s.addEventListener("selectstart",fe),s.addEventListener("selectend",fe),s.addEventListener("squeeze",fe),s.addEventListener("squeezestart",fe),s.addEventListener("squeezeend",fe),s.addEventListener("end",ge),s.addEventListener("inputsourceschange",be),T.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(U),L&&"createProjectionLayer"in XRWebGLBinding.prototype){let He=null,ft=null,ke=null;T.depth&&(ke=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,He=T.stencil?es:xi,ft=T.stencil?tr:oi);let We={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:r};_=this.getBinding(),m=_.createProjectionLayer(We),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),g=new zn(m.textureWidth,m.textureHeight,{format:Qn,type:Vn,depthTexture:new Zi(m.textureWidth,m.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,He),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{let He={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};w=new XRWebGLLayer(s,t,He),s.updateRenderState({baseLayer:w}),e.setPixelRatio(1),e.setSize(w.framebufferWidth,w.framebufferHeight,!1),g=new zn(w.framebufferWidth,w.framebufferHeight,{format:Qn,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:w.ignoreDepthValues===!1,resolveStencilBuffer:w.ignoreDepthValues===!1,storeMultisampledDepthBuffer:w.ignoreDepthValues===!1,storeMultisampledStencilBuffer:w.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(h),u=null,l=await s.requestReferenceSpace(o),Ct.setContext(s),Ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function be(ye){for(let he=0;he<ye.removed.length;he++){let He=ye.removed[he],ft=b.indexOf(He);ft>=0&&(b[ft]=null,C[ft].disconnect(He))}for(let he=0;he<ye.added.length;he++){let He=ye.added[he],ft=b.indexOf(He);if(ft===-1){for(let We=0;We<C.length;We++)if(We>=b.length){b.push(He),ft=We;break}else if(b[We]===null){b[We]=He,ft=We;break}if(ft===-1)break}let ke=C[ft];ke&&ke.connect(He)}}let j=new ce,M=new ce;function Se(ye,he,He){j.setFromMatrixPosition(he.matrixWorld),M.setFromMatrixPosition(He.matrixWorld);let ft=j.distanceTo(M),ke=he.projectionMatrix.elements,We=He.projectionMatrix.elements,en=ke[14]/(ke[10]-1),rt=ke[14]/(ke[10]+1),_t=(ke[9]+1)/ke[5],Pt=(ke[9]-1)/ke[5],gt=(ke[8]-1)/ke[0],dt=(We[8]+1)/We[0],Ot=en*gt,Gt=en*dt,yt=ft/(-gt+dt),Nt=yt*-gt;if(he.matrixWorld.decompose(ye.position,ye.quaternion,ye.scale),ye.translateX(Nt),ye.translateZ(yt),ye.matrixWorld.compose(ye.position,ye.quaternion,ye.scale),ye.matrixWorldInverse.copy(ye.matrixWorld).invert(),ke[10]===-1)ye.projectionMatrix.copy(he.projectionMatrix),ye.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{let te=en+yt,Bt=rt+yt,St=Ot-Nt,B=Gt+(ft-Nt),v=_t*rt/Bt*te,se=Pt*rt/Bt*te;ye.projectionMatrix.makePerspective(St,B,v,se,te,Bt),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert()}}function Ve(ye,he){he===null?ye.matrixWorld.copy(ye.matrix):ye.matrixWorld.multiplyMatrices(he.matrixWorld,ye.matrix),ye.matrixWorldInverse.copy(ye.matrixWorld).invert()}this.updateCamera=function(ye){if(s===null)return;let he=ye.near,He=ye.far;S.texture!==null&&(S.depthNear>0&&(he=S.depthNear),S.depthFar>0&&(He=S.depthFar)),K.near=Z.near=G.near=he,K.far=Z.far=G.far=He,(H!==K.near||J!==K.far)&&(s.updateRenderState({depthNear:K.near,depthFar:K.far}),H=K.near,J=K.far),K.layers.mask=ye.layers.mask|6,G.layers.mask=K.layers.mask&-5,Z.layers.mask=K.layers.mask&-3;let ft=ye.parent,ke=K.cameras;Ve(K,ft);for(let We=0;We<ke.length;We++)Ve(ke[We],ft);ke.length===2?Se(K,G,Z):K.projectionMatrix.copy(G.projectionMatrix),N===null&&ye.isPerspectiveCamera&&(N={camera:ye,fov:ye.fov,zoom:ye.zoom}),Re(ye,K,ft)};function Re(ye,he,He){He===null?ye.matrix.copy(he.matrixWorld):(ye.matrix.copy(He.matrixWorld),ye.matrix.invert(),ye.matrix.multiply(he.matrixWorld)),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.updateMatrixWorld(!0),ye.projectionMatrix.copy(he.projectionMatrix),ye.projectionMatrixInverse.copy(he.projectionMatrixInverse),ye.isPerspectiveCamera&&(ye.fov=Ha*2*Math.atan(1/ye.projectionMatrix.elements[5]),ye.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(m===null&&w===null))return h},this.setFoveation=function(ye){h=ye,m!==null&&(m.fixedFoveation=ye),w!==null&&w.fixedFoveation!==void 0&&(w.fixedFoveation=ye)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(K)},this.getCameraTexture=function(ye){return d[ye]};let ee=null;function ht(ye,he){if(p=he.getViewerPose(u||l),y=he,p!==null){let He=p.views;w!==null&&(e.setRenderTargetFramebuffer(g,w.framebuffer),e.setRenderTarget(g));let ft=!1;He.length!==K.cameras.length&&(K.cameras.length=0,ft=!0);for(let rt=0;rt<He.length;rt++){let _t=He[rt],Pt=null;if(w!==null)Pt=w.getViewport(_t);else{let dt=_.getViewSubImage(m,_t);Pt=dt.viewport,rt===0&&(e.setRenderTargetTextures(g,dt.colorTexture,dt.depthStencilTexture),e.setRenderTarget(g))}let gt=R[rt];gt===void 0&&(gt=new Rn,gt.layers.enable(rt),gt.viewport=new ln,R[rt]=gt),gt.matrix.fromArray(_t.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(_t.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),rt===0&&(K.matrix.copy(gt.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),ft===!0&&K.cameras.push(gt)}let ke=s.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&L){_=n.getBinding();let rt=_.getDepthInformation(He[0]);rt&&rt.isValid&&rt.texture&&S.init(rt,s.renderState)}if(ke&&ke.includes("camera-access")&&L){e.state.unbindTexture(),_=n.getBinding();for(let rt=0;rt<He.length;rt++){let _t=He[rt].camera;if(_t){let Pt=d[_t];Pt||(Pt=new Fr,d[_t]=Pt);let gt=_.getCameraImage(_t);Pt.sourceTexture=gt}}}}for(let He=0;He<C.length;He++){let ft=b[He],ke=C[He];ft!==null&&ke!==void 0&&ke.update(ft,he,u||l)}ee&&ee(ye,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),y=null}let Ct=new Wu;Ct.setAnimationLoop(ht),this.setAnimationLoop=function(ye){ee=ye},this.dispose=function(){}}},e1=new Yt,$u=new vt;$u.set(-1,0,0,0,1,0,0,0,1);function t1(i,e){function t(S,d){S.matrixAutoUpdate===!0&&S.updateMatrix(),d.value.copy(S.matrix)}function n(S,d){d.color.getRGB(S.fogColor.value,yc(i)),d.isFog?(S.fogNear.value=d.near,S.fogFar.value=d.far):d.isFogExp2&&(S.fogDensity.value=d.density)}function s(S,d,T,I,g){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(S,d):d.isMeshLambertMaterial?(r(S,d),d.envMap&&(S.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(S,d),_(S,d)):d.isMeshPhongMaterial?(r(S,d),p(S,d),d.envMap&&(S.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(S,d),m(S,d),d.isMeshPhysicalMaterial&&w(S,d,g)):d.isMeshMatcapMaterial?(r(S,d),y(S,d)):d.isMeshDepthMaterial?r(S,d):d.isMeshDistanceMaterial?(r(S,d),L(S,d)):d.isMeshNormalMaterial?r(S,d):d.isLineBasicMaterial?(l(S,d),d.isLineDashedMaterial&&o(S,d)):d.isPointsMaterial?h(S,d,T,I):d.isSpriteMaterial?u(S,d):d.isShadowMaterial?(S.color.value.copy(d.color),S.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(S,d){S.opacity.value=d.opacity,d.color&&S.diffuse.value.copy(d.color),d.emissive&&S.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(S.map.value=d.map,t(d.map,S.mapTransform)),d.alphaMap&&(S.alphaMap.value=d.alphaMap,t(d.alphaMap,S.alphaMapTransform)),d.bumpMap&&(S.bumpMap.value=d.bumpMap,t(d.bumpMap,S.bumpMapTransform),S.bumpScale.value=d.bumpScale,d.side===Un&&(S.bumpScale.value*=-1)),d.normalMap&&(S.normalMap.value=d.normalMap,t(d.normalMap,S.normalMapTransform),S.normalScale.value.copy(d.normalScale),d.side===Un&&S.normalScale.value.negate()),d.displacementMap&&(S.displacementMap.value=d.displacementMap,t(d.displacementMap,S.displacementMapTransform),S.displacementScale.value=d.displacementScale,S.displacementBias.value=d.displacementBias),d.emissiveMap&&(S.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,S.emissiveMapTransform)),d.specularMap&&(S.specularMap.value=d.specularMap,t(d.specularMap,S.specularMapTransform)),d.alphaTest>0&&(S.alphaTest.value=d.alphaTest);let T=e.get(d),I=T.envMap,g=T.envMapRotation;I&&(S.envMap.value=I,S.envMapRotation.value.setFromMatrix4(e1.makeRotationFromEuler(g)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply($u),S.reflectivity.value=d.reflectivity,S.ior.value=d.ior,S.refractionRatio.value=d.refractionRatio),d.lightMap&&(S.lightMap.value=d.lightMap,S.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,S.lightMapTransform)),d.aoMap&&(S.aoMap.value=d.aoMap,S.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,S.aoMapTransform))}function l(S,d){S.diffuse.value.copy(d.color),S.opacity.value=d.opacity,d.map&&(S.map.value=d.map,t(d.map,S.mapTransform))}function o(S,d){S.dashSize.value=d.dashSize,S.totalSize.value=d.dashSize+d.gapSize,S.scale.value=d.scale}function h(S,d,T,I){S.diffuse.value.copy(d.color),S.opacity.value=d.opacity,S.size.value=d.size*T,S.scale.value=I*.5,d.map&&(S.map.value=d.map,t(d.map,S.uvTransform)),d.alphaMap&&(S.alphaMap.value=d.alphaMap,t(d.alphaMap,S.alphaMapTransform)),d.alphaTest>0&&(S.alphaTest.value=d.alphaTest)}function u(S,d){S.diffuse.value.copy(d.color),S.opacity.value=d.opacity,S.rotation.value=d.rotation,d.map&&(S.map.value=d.map,t(d.map,S.mapTransform)),d.alphaMap&&(S.alphaMap.value=d.alphaMap,t(d.alphaMap,S.alphaMapTransform)),d.alphaTest>0&&(S.alphaTest.value=d.alphaTest)}function p(S,d){S.specular.value.copy(d.specular),S.shininess.value=Math.max(d.shininess,1e-4)}function _(S,d){d.gradientMap&&(S.gradientMap.value=d.gradientMap)}function m(S,d){S.metalness.value=d.metalness,d.metalnessMap&&(S.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,S.metalnessMapTransform)),S.roughness.value=d.roughness,d.roughnessMap&&(S.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,S.roughnessMapTransform)),d.envMap&&(S.envMapIntensity.value=d.envMapIntensity)}function w(S,d,T){S.ior.value=d.ior,d.sheen>0&&(S.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),S.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(S.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,S.sheenColorMapTransform)),d.sheenRoughnessMap&&(S.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,S.sheenRoughnessMapTransform))),d.clearcoat>0&&(S.clearcoat.value=d.clearcoat,S.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(S.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,S.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(S.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Un&&S.clearcoatNormalScale.value.negate())),d.dispersion>0&&(S.dispersion.value=d.dispersion),d.retroreflectivity>0&&(S.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(S.iridescence.value=d.iridescence,S.iridescenceIOR.value=d.iridescenceIOR,S.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(S.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,S.iridescenceMapTransform)),d.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),d.transmission>0&&(S.transmission.value=d.transmission,S.transmissionSamplerMap.value=T.texture,S.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(S.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,S.transmissionMapTransform)),S.thickness.value=d.thickness,d.thicknessMap&&(S.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=d.attenuationDistance,S.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(S.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(S.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=d.specularIntensity,S.specularColor.value.copy(d.specularColor),d.specularColorMap&&(S.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,S.specularColorMapTransform)),d.specularIntensityMap&&(S.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,S.specularIntensityMapTransform))}function y(S,d){d.matcap&&(S.matcap.value=d.matcap)}function L(S,d){let T=e.get(d).light;S.referencePosition.value.setFromMatrixPosition(T.matrixWorld),S.nearDistance.value=T.shadow.camera.near,S.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function n1(i,e,t,n){let s={},r={},l=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(g,C){let b=C.program;n.uniformBlockBinding(g,b)}function u(g,C){let b=s[g.id];b===void 0&&(S(g),b=p(g),s[g.id]=b,g.addEventListener("dispose",T));let U=C.program;n.updateUBOMapping(g,U);let x=e.render.frame;r[g.id]!==x&&(m(g),r[g.id]=x)}function p(g){let C=_();g.__bindingPointIndex=C;let b=i.createBuffer(),U=g.__size,x=g.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,U,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,C,b),b}function _(){for(let g=0;g<o;g++)if(l.indexOf(g)===-1)return l.push(g),g;return pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(g){let C=s[g.id],b=g.uniforms,U=g.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let x=0,N=b.length;x<N;x++){let G=b[x];if(Array.isArray(G))for(let Z=0,R=G.length;Z<R;Z++)w(G[Z],x,Z,U);else w(G,x,0,U)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function w(g,C,b,U){if(L(g,C,b,U)===!0){let x=g.__offset,N=g.value;if(Array.isArray(N)){let G=0;for(let Z=0;Z<N.length;Z++){let R=N[Z],K=d(R);y(R,g.__data,G),typeof R!="number"&&typeof R!="boolean"&&!R.isMatrix3&&!ArrayBuffer.isView(R)&&(G+=K.storage/Float32Array.BYTES_PER_ELEMENT)}}else y(N,g.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,g.__data)}}function y(g,C,b){typeof g=="number"||typeof g=="boolean"?C[0]=g:g.isMatrix3?(C[0]=g.elements[0],C[1]=g.elements[1],C[2]=g.elements[2],C[3]=0,C[4]=g.elements[3],C[5]=g.elements[4],C[6]=g.elements[5],C[7]=0,C[8]=g.elements[6],C[9]=g.elements[7],C[10]=g.elements[8],C[11]=0):ArrayBuffer.isView(g)?C.set(new g.constructor(g.buffer,g.byteOffset,C.length)):g.toArray(C,b)}function L(g,C,b,U){let x=g.value,N=C+"_"+b;if(U[N]===void 0)return typeof x=="number"||typeof x=="boolean"?U[N]=x:ArrayBuffer.isView(x)?U[N]=x.slice():U[N]=x.clone(),!0;{let G=U[N];if(typeof x=="number"||typeof x=="boolean"){if(G!==x)return U[N]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(G.equals(x)===!1)return G.copy(x),!0}}return!1}function S(g){let C=g.uniforms,b=0,U=16;for(let N=0,G=C.length;N<G;N++){let Z=Array.isArray(C[N])?C[N]:[C[N]];for(let R=0,K=Z.length;R<K;R++){let H=Z[R],J=Array.isArray(H.value)?H.value:[H.value];for(let fe=0,ge=J.length;fe<ge;fe++){let be=J[fe],j=d(be),M=b%U,Se=M%j.boundary,Ve=M+Se;b+=Se,Ve!==0&&U-Ve<j.storage&&(b+=U-Ve),H.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=b,b+=j.storage}}}let x=b%U;return x>0&&(b+=U-x),g.__size=b,g.__cache={},this}function d(g){let C={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(C.boundary=4,C.storage=4):g.isVector2?(C.boundary=8,C.storage=8):g.isVector3||g.isColor?(C.boundary=16,C.storage=12):g.isVector4?(C.boundary=16,C.storage=16):g.isMatrix3?(C.boundary=48,C.storage=48):g.isMatrix4?(C.boundary=64,C.storage=64):g.isTexture?mt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(C.boundary=16,C.storage=g.byteLength):mt("WebGLRenderer: Unsupported uniform value type.",g),C}function T(g){let C=g.target;C.removeEventListener("dispose",T);let b=l.indexOf(C.__bindingPointIndex);l.splice(b,1),i.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}function I(){for(let g in s)i.deleteBuffer(s[g]);l=[],s={},r={}}return{bind:h,update:u,dispose:I}}var i1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Si=null;function s1(){return Si===null&&(Si=new Dr(i1,16,16,ts,li),Si.name="DFG_LUT",Si.minFilter=_n,Si.magFilter=_n,Si.wrapS=gi,Si.wrapT=gi,Si.generateMipmaps=!1,Si.needsUpdate=!0),Si}var sl=class{constructor(e={}){let{canvas:t=mu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:l=!1,antialias:o=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:u=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:m=!1,outputBufferType:w=Vn}=e;this.isWebGLRenderer=!0;let y;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=n.getContextAttributes().alpha}else y=l;let L=w,S=new Set([yo,_o,xo]),d=new Set([Vn,oi,er,tr,po,mo]),T=new Uint32Array(4),I=new Int32Array(4),g=new ce,C=null,b=null,U=[],x=[],N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let G=this,Z=!1,R=null,K=null,H=null,J=null;this._outputColorSpace=Tn;let fe=0,ge=0,be=null,j=-1,M=null,Se=new ln,Ve=new ln,Re=null,ee=new Et(0),ht=0,Ct=t.width,ye=t.height,he=1,He=null,ft=null,ke=new ln(0,0,Ct,ye),We=new ln(0,0,Ct,ye),en=!1,rt=new Ys,_t=!1,Pt=!1,gt=new Yt,dt=new ce,Ot=new ln,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},yt=!1;function Nt(){return be===null?he:1}let te=n;function Bt(P,Q){return t.getContext(P,Q)}let St,B,v,se,le,xe,Le,Ae,pe,ve,Ne,nt,re,me,_e,Oe,ot,W,Ce,Me,Ue,De,we;try{let P={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:u,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Tt,!1),t.addEventListener("webglcontextrestored",lt,!1),t.addEventListener("webglcontextcreationerror",rn,!1),te===null){let Q="webgl2";if(te=Bt(Q,P),te===null)throw Bt(Q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}tt()}catch(P){throw t.removeEventListener("webglcontextlost",Tt,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",rn,!1),pt("WebGLRenderer: "+P.message),P}function tt(){St=new u0(te),St.init(),Ue=new Kg(te,St),B=new t0(te,St,e,Ue),v=new Jg(te,St),B.reversedDepthBuffer&&m&&v.buffers.depth.setReversed(!0),K=te.createFramebuffer(),H=te.createFramebuffer(),J=te.createFramebuffer(),se=new p0(te),le=new Ug,xe=new $g(te,St,v,le,B,Ue,se),Le=new h0(G),Ae=new gf(te),De=new Qm(te,Ae),pe=new d0(te,Ae,se,De),ve=new g0(te,pe,Ae,De,se),W=new m0(te,B,xe),_e=new n0(le),Ne=new Ng(G,Le,St,B,De,_e),nt=new t1(G,le),re=new Og,me=new Hg(St),ot=new jm(G,Le,v,ve,y,h),Oe=new Zg(G,ve,B),we=new n1(te,se,B,v),Ce=new e0(te,St,se),Me=new f0(te,St,se),se.programs=Ne.programs,G.capabilities=B,G.extensions=St,G.properties=le,G.renderLists=re,G.shadowMap=Oe,G.state=v,G.info=se}L!==Vn&&(N=new _0(L,t.width,t.height,o,s,r));let $e=new Gc(G,te);this.xr=$e,this.getContext=function(){return te},this.getContextAttributes=function(){return te.getContextAttributes()},this.forceContextLoss=function(){let P=St.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=St.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(P){P!==void 0&&(he=P,this.setSize(Ct,ye,!1))},this.getSize=function(P){return P.set(Ct,ye)},this.setSize=function(P,Q,de=!0){if($e.isPresenting){mt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ct=P,ye=Q,t.width=Math.floor(P*he),t.height=Math.floor(Q*he),de===!0&&(t.style.width=P+"px",t.style.height=Q+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,P,Q)},this.getDrawingBufferSize=function(P){return P.set(Ct*he,ye*he).floor()},this.setDrawingBufferSize=function(P,Q,de){Ct=P,ye=Q,he=de,t.width=Math.floor(P*de),t.height=Math.floor(Q*de),this.setViewport(0,0,P,Q)},this.setEffects=function(P){if(L===Vn){pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let Q=0;Q<P.length;Q++)if(P[Q].isOutputPass===!0){mt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(Se)},this.getViewport=function(P){return P.copy(ke)},this.setViewport=function(P,Q,de,ae){P.isVector4?ke.set(P.x,P.y,P.z,P.w):ke.set(P,Q,de,ae),v.viewport(Se.copy(ke).multiplyScalar(he).round())},this.getScissor=function(P){return P.copy(We)},this.setScissor=function(P,Q,de,ae){P.isVector4?We.set(P.x,P.y,P.z,P.w):We.set(P,Q,de,ae),v.scissor(Ve.copy(We).multiplyScalar(he).round())},this.getScissorTest=function(){return en},this.setScissorTest=function(P){v.setScissorTest(en=P)},this.setOpaqueSort=function(P){He=P},this.setTransparentSort=function(P){ft=P},this.getClearColor=function(P){return P.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor(...arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha(...arguments)},this.clear=function(P=!0,Q=!0,de=!0){let ae=0;if(P){let oe=!1;if(be!==null){let Xe=be.texture.format;oe=S.has(Xe)}if(oe){let Xe=be.texture.type,Je=d.has(Xe),Ye=ot.getClearColor(),Qe=ot.getClearAlpha(),je=Ye.r,Mt=Ye.g,Rt=Ye.b;Je?(T[0]=je,T[1]=Mt,T[2]=Rt,T[3]=Qe,te.clearBufferuiv(te.COLOR,0,T)):(I[0]=je,I[1]=Mt,I[2]=Rt,I[3]=Qe,te.clearBufferiv(te.COLOR,0,I))}else ae|=te.COLOR_BUFFER_BIT}Q&&(ae|=te.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),de&&(ae|=te.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&te.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),R=P},this.dispose=function(){t.removeEventListener("webglcontextlost",Tt,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",rn,!1),ot.dispose(),re.dispose(),me.dispose(),le.dispose(),Le.dispose(),ve.dispose(),De.dispose(),we.dispose(),Ne.dispose(),$e.dispose(),$e.removeEventListener("sessionstart",ue),$e.removeEventListener("sessionend",Y),Pe.stop()};function Tt(P){P.preventDefault(),wr("WebGLRenderer: Context Lost."),Z=!0}function lt(){wr("WebGLRenderer: Context Restored."),Z=!1;let P=se.autoReset,Q=Oe.enabled,de=Oe.autoUpdate,ae=Oe.needsUpdate,oe=Oe.type;tt(),se.autoReset=P,Oe.enabled=Q,Oe.autoUpdate=de,Oe.needsUpdate=ae,Oe.type=oe}function rn(P){pt("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function z(P){let Q=P.target;Q.removeEventListener("dispose",z),A(Q)}function A(P){V(P),le.remove(P)}function V(P){let Q=le.get(P).programs;Q!==void 0&&(Q.forEach(function(de){Ne.releaseProgram(de)}),P.isShaderMaterial&&Ne.releaseShaderCache(P))}this.renderBufferDirect=function(P,Q,de,ae,oe,Xe){Q===null&&(Q=Gt);let Je=oe.isMesh&&oe.matrixWorld.determinantAffine()<0,Ye=ci(P,Q,de,ae,oe);v.setMaterial(ae,Je);let Qe=de.index,je=1;if(ae.wireframe===!0){if(Qe=pe.getWireframeAttribute(de),Qe===void 0)return;je=2}let Mt=de.drawRange,Rt=de.attributes.position,st=Mt.start*je,qt=(Mt.start+Mt.count)*je;Xe!==null&&(st=Math.max(st,Xe.start*je),qt=Math.min(qt,(Xe.start+Xe.count)*je)),Qe!==null?(st=Math.max(st,0),qt=Math.min(qt,Qe.count)):Rt!=null&&(st=Math.max(st,0),qt=Math.min(qt,Rt.count));let cn=qt-st;if(cn<0||cn===1/0)return;De.setup(oe,ae,Ye,de,Qe);let Kt,jt=Ce;if(Qe!==null&&(Kt=Ae.get(Qe),jt=Me,jt.setIndex(Kt)),oe.isMesh)ae.wireframe===!0?(v.setLineWidth(ae.wireframeLinewidth*Nt()),jt.setMode(te.LINES)):jt.setMode(te.TRIANGLES);else if(oe.isLine){let xn=ae.linewidth;xn===void 0&&(xn=1),v.setLineWidth(xn*Nt()),oe.isLineSegments?jt.setMode(te.LINES):oe.isLineLoop?jt.setMode(te.LINE_LOOP):jt.setMode(te.LINE_STRIP)}else oe.isPoints?jt.setMode(te.POINTS):oe.isSprite&&jt.setMode(te.TRIANGLES);if(oe.isBatchedMesh)if(St.get("WEBGL_multi_draw"))jt.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{let xn=oe._multiDrawStarts,Be=oe._multiDrawCounts,hn=oe._multiDrawCount,wt=Qe?Ae.get(Qe).bytesPerElement:1,Dn=le.get(ae).currentProgram.getUniforms();for(let dn=0;dn<hn;dn++)Dn.setValue(te,"_gl_DrawID",dn),jt.render(xn[dn]/wt,Be[dn])}else if(oe.isInstancedMesh)jt.renderInstances(st,cn,oe.count);else if(de.isInstancedBufferGeometry){let xn=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,Be=Math.min(de.instanceCount,xn);jt.renderInstances(st,cn,Be)}else jt.render(st,cn)};function q(P,Q,de,ae){R!==null&&P.isNodeMaterial&&R.setObject(ae,P),_t===!0&&_e.setState(P,de,!1),P.transparent===!0&&P.side===$n&&P.forceSinglePass===!1?(P.side=Un,P.needsUpdate=!0,xt(P,Q,ae),P.side=ji,P.needsUpdate=!0,xt(P,Q,ae),P.side=$n):xt(P,Q,ae)}this.compile=function(P,Q,de=null){de===null&&(de=P),R!==null&&R.renderStart(P,Q,de),b=me.get(de),b.init(Q),x.push(b),de.traverseVisible(function(oe){oe.isLight&&oe.layers.test(Q.layers)&&(b.pushLight(oe),oe.castShadow&&b.pushShadow(oe))}),P!==de&&P.traverseVisible(function(oe){oe.isLight&&oe.layers.test(Q.layers)&&(b.pushLight(oe),oe.castShadow&&b.pushShadow(oe))}),b.setupLights(),R!==null&&R.updateLights(b.state.lightsArray),Pt=this.localClippingEnabled,_t=_e.init(this.clippingPlanes,Pt),_t===!0&&_e.setGlobalState(this.clippingPlanes,Q),R!==null&&Oe.render(b.state.shadowsArray,de,Q);let ae=new Set;return P.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;let Xe=oe.material;if(Xe)if(Array.isArray(Xe))for(let Je=0;Je<Xe.length;Je++){let Ye=Xe[Je];q(Ye,de,Q,oe),ae.add(Ye)}else q(Xe,de,Q,oe),ae.add(Xe)}),b=x.pop(),R!==null&&R.renderEnd(),ae},this.compileAsync=function(P,Q,de=null){let ae=this.compile(P,Q,de);return new Promise(oe=>{function Xe(){if(ae.forEach(function(Je){let Qe=le.get(Je).currentProgram;(Qe===void 0||Qe.isReady())&&ae.delete(Je)}),ae.size===0){oe(P);return}setTimeout(Xe,10)}St.get("KHR_parallel_shader_compile")!==null?Xe():setTimeout(Xe,10)})};let X=null;function $(P){X&&X(P)}function ue(){Pe.stop()}function Y(){Pe.start()}let Pe=new Wu;Pe.setAnimationLoop($),typeof self<"u"&&Pe.setContext(self),this.setAnimationLoop=function(P){X=P,$e.setAnimationLoop(P),P===null?Pe.stop():Pe.start()},$e.addEventListener("sessionstart",ue),$e.addEventListener("sessionend",Y),this.render=function(P,Q){if(Q!==void 0&&Q.isCamera!==!0){pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Z===!0)return;R!==null&&R.renderStart(P,Q);let de=$e.enabled===!0&&$e.isPresenting===!0,ae=N!==null&&(be===null||de)&&N.begin(G,be);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),$e.enabled===!0&&$e.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&($e.cameraAutoUpdate===!0&&$e.updateCamera(Q),Q=$e.getCamera()),P.isScene===!0&&P.onBeforeRender(G,P,Q,be),b=me.get(P,x.length),b.init(Q),b.state.textureUnits=xe.getTextureUnits(),x.push(b),gt.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),rt.setFromProjectionMatrix(gt,ri,Q.reversedDepth),Pt=this.localClippingEnabled,_t=_e.init(this.clippingPlanes,Pt),C=re.get(P,U.length),C.init(),U.push(C),$e.enabled===!0&&$e.isPresenting===!0){let Je=G.xr.getDepthSensingMesh();Je!==null&&ze(Je,Q,-1/0,G.sortObjects)}ze(P,Q,0,G.sortObjects),C.finish(),R!==null&&R.updateLights(b.state.lightsArray),G.sortObjects===!0&&C.sort(He,ft),yt=$e.enabled===!1||$e.isPresenting===!1||$e.hasDepthSensing()===!1,yt&&ot.addToRenderList(C,P),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_t===!0&&_e.beginShadows();let oe=b.state.shadowsArray;if(Oe.render(oe,P,Q),_t===!0&&_e.endShadows(),(ae&&N.hasRenderPass())===!1){let Je=C.opaque,Ye=C.transmissive;if(b.setupLights(),Q.isArrayCamera){let Qe=Q.cameras;if(Ye.length>0)for(let je=0,Mt=Qe.length;je<Mt;je++){let Rt=Qe[je];Ie(Je,Ye,P,Rt)}yt&&ot.render(P);for(let je=0,Mt=Qe.length;je<Mt;je++){let Rt=Qe[je];it(C,P,Rt,Rt.viewport)}}else Ye.length>0&&Ie(Je,Ye,P,Q),yt&&ot.render(P),it(C,P,Q)}be!==null&&ge===0&&(xe.updateMultisampleRenderTarget(be),xe.updateRenderTargetMipmap(be)),ae&&N.end(G),P.isScene===!0&&P.onAfterRender(G,P,Q),De.resetDefaultState(),j=-1,M=null,x.pop(),x.length>0?(b=x[x.length-1],xe.setTextureUnits(b.state.textureUnits),_t===!0&&_e.setGlobalState(G.clippingPlanes,b.state.camera)):b=null,U.pop(),U.length>0?C=U[U.length-1]:C=null,R!==null&&R.renderEnd()};function ze(P,Q,de,ae){if(P.visible===!1)return;if(P.layers.test(Q.layers)){if(P.isGroup)de=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Q);else if(P.isLightProbeGrid)b.pushLightProbeGrid(P);else if(P.isLight)b.pushLight(P),P.castShadow&&b.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||P.intersectsFrustum(rt)){ae&&Ot.setFromMatrixPosition(P.matrixWorld).applyMatrix4(gt);let Je=ve.update(P),Ye=P.material;Ye.visible&&C.push(P,Je,Ye,de,Ot.z,null,Q)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||P.intersectsFrustum(rt))){let Je=ve.update(P),Ye=P.material;if(ae&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ot.copy(P.boundingSphere.center)):(Je.boundingSphere===null&&Je.computeBoundingSphere(),Ot.copy(Je.boundingSphere.center)),Ot.applyMatrix4(P.matrixWorld).applyMatrix4(gt)),Array.isArray(Ye)){let Qe=Je.groups;for(let je=0,Mt=Qe.length;je<Mt;je++){let Rt=Qe[je],st=Ye[Rt.materialIndex];st&&st.visible&&C.push(P,Je,st,de,Ot.z,Rt,Q)}}else Ye.visible&&C.push(P,Je,Ye,de,Ot.z,null,Q)}}let Xe=P.children;for(let Je=0,Ye=Xe.length;Je<Ye;Je++)ze(Xe[Je],Q,de,ae)}function it(P,Q,de,ae){let{opaque:oe,transmissive:Xe,transparent:Je}=P;b.setupLightsView(de),_t===!0&&_e.setGlobalState(G.clippingPlanes,de),ae&&v.viewport(Se.copy(ae)),oe.length>0&&Ke(oe,Q,de),Xe.length>0&&Ke(Xe,Q,de),Je.length>0&&Ke(Je,Q,de),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Ie(P,Q,de,ae){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[ae.id]===void 0){let st=St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[ae.id]=new zn(1,1,{generateMipmaps:!0,type:st?li:Vn,minFilter:bi,samples:Math.max(4,B.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ft.workingColorSpace})}let Xe=b.state.transmissionRenderTarget[ae.id],Je=ae.viewport||Se;Xe.setSize(Je.z*G.transmissionResolutionScale,Je.w*G.transmissionResolutionScale);let Ye=G.getRenderTarget(),Qe=G.getActiveCubeFace(),je=G.getActiveMipmapLevel();G.setRenderTarget(Xe),G.getClearColor(ee),ht=G.getClearAlpha(),ht<1&&G.setClearColor(16777215,.5),G.clear(),yt&&ot.render(de);let Mt=G.toneMapping;G.toneMapping=ai;let Rt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),b.setupLightsView(ae),_t===!0&&_e.setGlobalState(G.clippingPlanes,ae),Ke(P,de,ae),xe.updateMultisampleRenderTarget(Xe),xe.updateRenderTargetMipmap(Xe),St.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let qt=0,cn=Q.length;qt<cn;qt++){let Kt=Q[qt],{object:jt,geometry:xn,material:Be,group:hn}=Kt;if(Be.side===$n&&jt.layers.test(ae.layers)){let wt=Be.side;Be.side=Un,Be.needsUpdate=!0,qe(jt,de,ae,xn,Be,hn),Be.side=wt,Be.needsUpdate=!0,st=!0}}st===!0&&(xe.updateMultisampleRenderTarget(Xe),xe.updateRenderTargetMipmap(Xe))}G.setRenderTarget(Ye,Qe,je),G.setClearColor(ee,ht),Rt!==void 0&&(ae.viewport=Rt),G.toneMapping=Mt}function Ke(P,Q,de){let ae=Q.isScene===!0?Q.overrideMaterial:null;for(let oe=0,Xe=P.length;oe<Xe;oe++){let Je=P[oe],{object:Ye,geometry:Qe,group:je}=Je,Mt=Je.material;Mt.allowOverride===!0&&ae!==null&&(Mt=ae),Ye.layers.test(de.layers)&&qe(Ye,Q,de,Qe,Mt,je)}}function qe(P,Q,de,ae,oe,Xe){R!==null&&oe.isNodeMaterial&&R.setObject(P,oe),P.onBeforeRender(G,Q,de,ae,oe,Xe),P.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),oe.onBeforeRender(G,Q,de,ae,P,Xe),oe.transparent===!0&&oe.side===$n&&oe.forceSinglePass===!1?(oe.side=Un,oe.needsUpdate=!0,G.renderBufferDirect(de,Q,ae,oe,P,Xe),oe.side=ji,oe.needsUpdate=!0,G.renderBufferDirect(de,Q,ae,oe,P,Xe),oe.side=$n):G.renderBufferDirect(de,Q,ae,oe,P,Xe),P.onAfterRender(G,Q,de,ae,oe,Xe)}function xt(P,Q,de){Q.isScene!==!0&&(Q=Gt);let ae=le.get(P),oe=b.state.lights,Xe=b.state.shadowsArray,Je=oe.state.version,Ye=Ne.getParameters(P,oe.state,Xe,Q,de,b.state.lightProbeGridArray),Qe=Ne.getProgramCacheKey(Ye),je=ae.programs;ae.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?Q.environment:null,ae.fog=Q.fog;let Mt=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;ae.envMap=Le.get(P.envMap||ae.environment,Mt),ae.envMapRotation=ae.environment!==null&&P.envMap===null?Q.environmentRotation:P.envMapRotation,je===void 0&&(P.addEventListener("dispose",z),je=new Map,ae.programs=je);let Rt=je.get(Qe);if(Rt!==void 0){if(ae.currentProgram===Rt&&ae.lightsStateVersion===Je)return gn(P,Ye),Rt}else Ye.uniforms=Ne.getUniforms(P),R!==null&&P.isNodeMaterial&&R.build(P,de,Ye),P.onBeforeCompile(Ye,G),Rt=Ne.acquireProgram(Ye,Qe),je.set(Qe,Rt),ae.uniforms=Ye.uniforms;let st=ae.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(st.clippingPlanes=_e.uniform),gn(P,Ye),ae.needsLights=hi(P),ae.lightsStateVersion=Je,ae.needsLights&&(st.ambientLightColor.value=oe.state.ambient,st.lightProbe.value=oe.state.probe,st.sunLights.value=oe.state.sun,st.sunLightShadows.value=oe.state.sunShadow,st.directionalLights.value=oe.state.directional,st.directionalLightShadows.value=oe.state.directionalShadow,st.spotLights.value=oe.state.spot,st.spotLightShadows.value=oe.state.spotShadow,st.rectAreaLights.value=oe.state.rectArea,st.ltc_1.value=oe.state.rectAreaLTC1,st.ltc_2.value=oe.state.rectAreaLTC2,st.pointLights.value=oe.state.point,st.pointLightShadows.value=oe.state.pointShadow,st.hemisphereLights.value=oe.state.hemi,st.sunShadowMatrix.value=oe.state.sunShadowMatrix,st.sunShadowCascade.value=oe.state.sunShadowCascade,st.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,st.spotLightMatrix.value=oe.state.spotLightMatrix,st.spotLightMap.value=oe.state.spotLightMap,st.pointShadowMatrix.value=oe.state.pointShadowMatrix),ae.lightProbeGrid=b.state.lightProbeGridArray.length>0,ae.currentProgram=Rt,ae.uniformsList=null,Rt}function Lt(P){if(P.uniformsList===null){let Q=P.currentProgram.getUniforms();P.uniformsList=sr.seqWithValue(Q.seq,P.uniforms)}return P.uniformsList}function gn(P,Q){let de=le.get(P);de.outputColorSpace=Q.outputColorSpace,de.batching=Q.batching,de.batchingColor=Q.batchingColor,de.instancing=Q.instancing,de.instancingColor=Q.instancingColor,de.instancingMorph=Q.instancingMorph,de.skinning=Q.skinning,de.morphTargets=Q.morphTargets,de.morphNormals=Q.morphNormals,de.morphColors=Q.morphColors,de.morphTargetsCount=Q.morphTargetsCount,de.numClippingPlanes=Q.numClippingPlanes,de.numIntersection=Q.numClipIntersection,de.vertexAlphas=Q.vertexAlphas,de.vertexTangents=Q.vertexTangents,de.toneMapping=Q.toneMapping}function Sn(P,Q){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;g.setFromMatrixPosition(Q.matrixWorld);for(let de=0,ae=P.length;de<ae;de++){let oe=P[de];if(oe.texture!==null&&oe.boundingBox.containsPoint(g))return oe}return null}function ci(P,Q,de,ae,oe){Q.isScene!==!0&&(Q=Gt),xe.resetTextureUnits();let Xe=Q.fog,Je=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?Q.environment:null,Ye=be===null?G.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Ft.workingColorSpace,Qe=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,je=Le.get(ae.envMap||Je,Qe),Mt=ae.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,Rt=!!de.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),st=!!de.morphAttributes.position,qt=!!de.morphAttributes.normal,cn=!!de.morphAttributes.color,Kt=ai;ae.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Kt=G.toneMapping);let jt=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,xn=jt!==void 0?jt.length:0,Be=le.get(ae),hn=b.state.lights;if(_t===!0&&(Pt===!0||P!==M)){let Zt=P===M&&ae.id===j;_e.setState(ae,P,Zt)}let wt=!1;ae.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==hn.state.version||Be.outputColorSpace!==Ye||oe.isBatchedMesh&&Be.batching===!1||!oe.isBatchedMesh&&Be.batching===!0||oe.isBatchedMesh&&Be.batchingColor===!0&&oe._colorsTexture===null||oe.isBatchedMesh&&Be.batchingColor===!1&&oe._colorsTexture!==null||oe.isInstancedMesh&&Be.instancing===!1||!oe.isInstancedMesh&&Be.instancing===!0||oe.isSkinnedMesh&&Be.skinning===!1||!oe.isSkinnedMesh&&Be.skinning===!0||oe.isInstancedMesh&&Be.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&Be.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&Be.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&Be.instancingMorph===!1&&oe.morphTexture!==null||Be.envMap!==je||ae.fog===!0&&Be.fog!==Xe||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==_e.numPlanes||Be.numIntersection!==_e.numIntersection)||Be.vertexAlphas!==Mt||Be.vertexTangents!==Rt||Be.morphTargets!==st||Be.morphNormals!==qt||Be.morphColors!==cn||Be.toneMapping!==Kt||Be.morphTargetsCount!==xn||!!Be.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(wt=!0):(wt=!0,Be.__version=ae.version);let Dn=Be.currentProgram;wt===!0&&(Dn=xt(ae,Q,oe),R&&ae.isNodeMaterial&&R.onUpdateProgram(ae,Dn,Be));let dn=!1,wn=!1,Ei=!1,Ht=Dn.getUniforms(),sn=Be.uniforms;if(v.useProgram(Dn.program)&&(dn=!0,wn=!0,Ei=!0),ae.id!==j&&(j=ae.id,wn=!0),Be.needsLights){let Zt=Sn(b.state.lightProbeGridArray,oe);Be.lightProbeGrid!==Zt&&(Be.lightProbeGrid=Zt,wn=!0)}if(dn||M!==P){v.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Ht.setValue(te,"projectionMatrix",P.projectionMatrix),Ht.setValue(te,"viewMatrix",P.matrixWorldInverse);let ei=Ht.map.cameraPosition;ei!==void 0&&ei.setValue(te,dt.setFromMatrixPosition(P.matrixWorld)),B.logarithmicDepthBuffer&&Ht.setValue(te,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Ht.setValue(te,"isOrthographic",P.isOrthographicCamera===!0),M!==P&&(M=P,wn=!0,Ei=!0)}if(Be.needsLights&&(hn.state.sunShadowMap.length>0&&Ht.setValue(te,"sunShadowMap",hn.state.sunShadowMap,xe),hn.state.directionalShadowMap.length>0&&Ht.setValue(te,"directionalShadowMap",hn.state.directionalShadowMap,xe),hn.state.spotShadowMap.length>0&&Ht.setValue(te,"spotShadowMap",hn.state.spotShadowMap,xe),hn.state.pointShadowMap.length>0&&Ht.setValue(te,"pointShadowMap",hn.state.pointShadowMap,xe)),oe.isSkinnedMesh){Ht.setOptional(te,oe,"bindMatrix"),Ht.setOptional(te,oe,"bindMatrixInverse");let Zt=oe.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),Ht.setValue(te,"boneTexture",Zt.boneTexture,xe))}oe.isBatchedMesh&&(Ht.setOptional(te,oe,"batchingTexture"),Ht.setValue(te,"batchingTexture",oe._matricesTexture,xe),Ht.setOptional(te,oe,"batchingIdTexture"),Ht.setValue(te,"batchingIdTexture",oe._indirectTexture,xe),Ht.setOptional(te,oe,"batchingColorTexture"),oe._colorsTexture!==null&&Ht.setValue(te,"batchingColorTexture",oe._colorsTexture,xe));let Gn=de.morphAttributes;if((Gn.position!==void 0||Gn.normal!==void 0||Gn.color!==void 0)&&W.update(oe,de,Dn),(wn||Be.receiveShadow!==oe.receiveShadow)&&(Be.receiveShadow=oe.receiveShadow,Ht.setValue(te,"receiveShadow",oe.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&Q.environment!==null&&(sn.envMapIntensity.value=Q.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=s1()),wn){if(Ht.setValue(te,"toneMappingExposure",G.toneMappingExposure),Be.needsLights&&ns(sn,Ei),Xe&&ae.fog===!0&&nt.refreshFogUniforms(sn,Xe),nt.refreshMaterialUniforms(sn,ae,he,ye,b.state.transmissionRenderTarget[P.id]),Be.needsLights&&Be.lightProbeGrid){let Zt=Be.lightProbeGrid;sn.probesSH.value=Zt.texture,sn.probesMin.value.copy(Zt.boundingBox.min),sn.probesMax.value.copy(Zt.boundingBox.max),sn.probesResolution.value.copy(Zt.resolution)}sr.upload(te,Lt(Be),sn,xe)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(sr.upload(te,Lt(Be),sn,xe),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Ht.setValue(te,"center",oe.center),Ht.setValue(te,"modelViewMatrix",oe.modelViewMatrix),Ht.setValue(te,"normalMatrix",oe.normalMatrix),Ht.setValue(te,"modelMatrix",oe.matrixWorld),ae.uniformsGroups!==void 0){let Zt=ae.uniformsGroups;for(let ei=0,ui=Zt.length;ei<ui;ei++){let sa=Zt[ei];we.update(sa,Dn),we.bind(sa,Dn)}}return Dn}function ns(P,Q){P.ambientLightColor.needsUpdate=Q,P.lightProbe.needsUpdate=Q,P.sunLights.needsUpdate=Q,P.sunLightShadows.needsUpdate=Q,P.directionalLights.needsUpdate=Q,P.directionalLightShadows.needsUpdate=Q,P.pointLights.needsUpdate=Q,P.pointLightShadows.needsUpdate=Q,P.spotLights.needsUpdate=Q,P.spotLightShadows.needsUpdate=Q,P.rectAreaLights.needsUpdate=Q,P.hemisphereLights.needsUpdate=Q}function hi(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return fe},this.getActiveMipmapLevel=function(){return ge},this.getRenderTarget=function(){return be},this.setRenderTargetTextures=function(P,Q,de){let ae=le.get(P);ae.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),le.get(P.texture).__webglTexture=Q,le.get(P.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:de,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,Q){let de=le.get(P);de.__webglFramebuffer=Q,de.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(P,Q=0,de=0){be=P,fe=Q,ge=de;let ae=null,oe=!1,Xe=!1;if(P){let Ye=le.get(P);if(Ye.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(te.FRAMEBUFFER,Ye.__webglFramebuffer),Se.copy(P.viewport),Ve.copy(P.scissor),Re=P.scissorTest,v.viewport(Se),v.scissor(Ve),v.setScissorTest(Re),j=-1;return}else if(Ye.__webglFramebuffer===void 0)xe.setupRenderTarget(P);else if(Ye.__hasExternalTextures)xe.rebindTextures(P,le.get(P.texture).__webglTexture,le.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Mt=P.depthTexture;if(Ye.__boundDepthTexture!==Mt){if(Mt!==null&&le.has(Mt)&&(P.width!==Mt.image.width||P.height!==Mt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");xe.setupDepthRenderbuffer(P)}}let Qe=P.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Xe=!0);let je=le.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(je[Q])?ae=je[Q][de]:ae=je[Q],oe=!0):P.samples>0&&xe.useMultisampledRTT(P)===!1?ae=le.get(P).__webglMultisampledFramebuffer:Array.isArray(je)?ae=je[de]:ae=je,Se.copy(P.viewport),Ve.copy(P.scissor),Re=P.scissorTest}else Se.copy(ke).multiplyScalar(he).floor(),Ve.copy(We).multiplyScalar(he).floor(),Re=en;if(de!==0&&(ae=K),v.bindFramebuffer(te.FRAMEBUFFER,ae)&&v.drawBuffers(P,ae),v.viewport(Se),v.scissor(Ve),v.setScissorTest(Re),oe){let Ye=le.get(P.texture);te.framebufferTexture2D(te.FRAMEBUFFER,te.COLOR_ATTACHMENT0,te.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ye.__webglTexture,de)}else if(Xe){let Ye=Q;for(let Qe=0;Qe<P.textures.length;Qe++){let je=le.get(P.textures[Qe]);te.framebufferTextureLayer(te.FRAMEBUFFER,te.COLOR_ATTACHMENT0+Qe,je.__webglTexture,de,Ye)}}else if(P!==null&&de!==0){let Ye=le.get(P.texture);te.framebufferTexture2D(te.FRAMEBUFFER,te.COLOR_ATTACHMENT0,te.TEXTURE_2D,Ye.__webglTexture,de)}j=-1};function Ti(P){let Q=le.get(P);return(Q.__readFormat!==P.format||Q.__readType!==P.type)&&(Q.__readFormat=P.format,Q.__readType=P.type,Q.__formatReadable=B.textureFormatReadable(P.format),Q.__typeReadable=B.textureTypeReadable(P.type)),Q}this.readRenderTargetPixels=function(P,Q,de,ae,oe,Xe,Je,Ye=0){if(!(P&&P.isWebGLRenderTarget)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=le.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Je!==void 0&&(Qe=Qe[Je]),Qe){v.bindFramebuffer(te.FRAMEBUFFER,Qe);try{let je=P.textures[Ye],Mt=je.format,Rt=je.type;P.textures.length>1&&te.readBuffer(te.COLOR_ATTACHMENT0+Ye);let st=Ti(je);if(st.__formatReadable===!1){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(st.__typeReadable===!1){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=P.width-ae&&de>=0&&de<=P.height-oe&&te.readPixels(Q,de,ae,oe,Ue.convert(Mt),Ue.convert(Rt),Xe)}finally{let je=be!==null?le.get(be).__webglFramebuffer:null;v.bindFramebuffer(te.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(P,Q,de,ae,oe,Xe,Je,Ye=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=le.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Je!==void 0&&(Qe=Qe[Je]),Qe)if(Q>=0&&Q<=P.width-ae&&de>=0&&de<=P.height-oe){v.bindFramebuffer(te.FRAMEBUFFER,Qe);let je=P.textures[Ye],Mt=je.format,Rt=je.type;P.textures.length>1&&te.readBuffer(te.COLOR_ATTACHMENT0+Ye);let st=Ti(je);if(st.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(st.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let qt=te.createBuffer();te.bindBuffer(te.PIXEL_PACK_BUFFER,qt),te.bufferData(te.PIXEL_PACK_BUFFER,Xe.byteLength,te.STREAM_READ),te.readPixels(Q,de,ae,oe,Ue.convert(Mt),Ue.convert(Rt),0),te.bindBuffer(te.PIXEL_PACK_BUFFER,null);let cn=be!==null?le.get(be).__webglFramebuffer:null;v.bindFramebuffer(te.FRAMEBUFFER,cn);let Kt=te.fenceSync(te.SYNC_GPU_COMMANDS_COMPLETE,0);return te.flush(),await xu(te,Kt,4),te.bindBuffer(te.PIXEL_PACK_BUFFER,qt),te.getBufferSubData(te.PIXEL_PACK_BUFFER,0,Xe),te.bindBuffer(te.PIXEL_PACK_BUFFER,null),te.deleteBuffer(qt),te.deleteSync(Kt),Xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,Q=null,de=0){let ae=Math.pow(2,-de),oe=Math.floor(P.image.width*ae),Xe=Math.floor(P.image.height*ae),Je=Q!==null?Q.x:0,Ye=Q!==null?Q.y:0;xe.setTexture2D(P,0),te.copyTexSubImage2D(te.TEXTURE_2D,de,0,0,Je,Ye,oe,Xe),v.unbindTexture()},this.copyTextureToTexture=function(P,Q,de=null,ae=null,oe=0,Xe=0){let Je,Ye,Qe,je,Mt,Rt,st,qt,cn,Kt=P.isCompressedTexture?P.mipmaps[Xe]:P.image;if(de!==null)Je=de.max.x-de.min.x,Ye=de.max.y-de.min.y,Qe=de.isBox3?de.max.z-de.min.z:1,je=de.min.x,Mt=de.min.y,Rt=de.isBox3?de.min.z:0;else{let sn=Math.pow(2,-oe);Je=Math.floor(Kt.width*sn),Ye=Math.floor(Kt.height*sn),P.isDataArrayTexture?Qe=Kt.depth:P.isData3DTexture?Qe=Math.floor(Kt.depth*sn):Qe=1,je=0,Mt=0,Rt=0}ae!==null?(st=ae.x,qt=ae.y,cn=ae.z):(st=0,qt=0,cn=0);let jt=Ue.convert(Q.format),xn=Ue.convert(Q.type),Be;Q.isData3DTexture?(xe.setTexture3D(Q,0),Be=te.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(xe.setTexture2DArray(Q,0),Be=te.TEXTURE_2D_ARRAY):(xe.setTexture2D(Q,0),Be=te.TEXTURE_2D),v.activeTexture(te.TEXTURE0),v.pixelStorei(te.UNPACK_FLIP_Y_WEBGL,Q.flipY),v.pixelStorei(te.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),v.pixelStorei(te.UNPACK_ALIGNMENT,Q.unpackAlignment);let hn=v.getParameter(te.UNPACK_ROW_LENGTH),wt=v.getParameter(te.UNPACK_IMAGE_HEIGHT),Dn=v.getParameter(te.UNPACK_SKIP_PIXELS),dn=v.getParameter(te.UNPACK_SKIP_ROWS),wn=v.getParameter(te.UNPACK_SKIP_IMAGES);v.pixelStorei(te.UNPACK_ROW_LENGTH,Kt.width),v.pixelStorei(te.UNPACK_IMAGE_HEIGHT,Kt.height),v.pixelStorei(te.UNPACK_SKIP_PIXELS,je),v.pixelStorei(te.UNPACK_SKIP_ROWS,Mt),v.pixelStorei(te.UNPACK_SKIP_IMAGES,Rt);let Ei=P.isDataArrayTexture||P.isData3DTexture,Ht=Q.isDataArrayTexture||Q.isData3DTexture;if(P.isDepthTexture){let sn=le.get(P),Gn=le.get(Q),Zt=le.get(sn.__renderTarget),ei=le.get(Gn.__renderTarget);v.bindFramebuffer(te.READ_FRAMEBUFFER,Zt.__webglFramebuffer),v.bindFramebuffer(te.DRAW_FRAMEBUFFER,ei.__webglFramebuffer);for(let ui=0;ui<Qe;ui++)Ei&&(te.framebufferTextureLayer(te.READ_FRAMEBUFFER,te.COLOR_ATTACHMENT0,le.get(P).__webglTexture,oe,Rt+ui),te.framebufferTextureLayer(te.DRAW_FRAMEBUFFER,te.COLOR_ATTACHMENT0,le.get(Q).__webglTexture,Xe,cn+ui)),te.blitFramebuffer(je,Mt,Je,Ye,st,qt,Je,Ye,te.DEPTH_BUFFER_BIT,te.NEAREST);v.bindFramebuffer(te.READ_FRAMEBUFFER,null),v.bindFramebuffer(te.DRAW_FRAMEBUFFER,null)}else if(oe!==0||P.isRenderTargetTexture||le.has(P)){let sn=le.get(P),Gn=le.get(Q);v.bindFramebuffer(te.READ_FRAMEBUFFER,H),v.bindFramebuffer(te.DRAW_FRAMEBUFFER,J);for(let Zt=0;Zt<Qe;Zt++)Ei?te.framebufferTextureLayer(te.READ_FRAMEBUFFER,te.COLOR_ATTACHMENT0,sn.__webglTexture,oe,Rt+Zt):te.framebufferTexture2D(te.READ_FRAMEBUFFER,te.COLOR_ATTACHMENT0,te.TEXTURE_2D,sn.__webglTexture,oe),Ht?te.framebufferTextureLayer(te.DRAW_FRAMEBUFFER,te.COLOR_ATTACHMENT0,Gn.__webglTexture,Xe,cn+Zt):te.framebufferTexture2D(te.DRAW_FRAMEBUFFER,te.COLOR_ATTACHMENT0,te.TEXTURE_2D,Gn.__webglTexture,Xe),oe!==0?te.blitFramebuffer(je,Mt,Je,Ye,st,qt,Je,Ye,te.COLOR_BUFFER_BIT,te.NEAREST):Ht?te.copyTexSubImage3D(Be,Xe,st,qt,cn+Zt,je,Mt,Je,Ye):te.copyTexSubImage2D(Be,Xe,st,qt,je,Mt,Je,Ye);v.bindFramebuffer(te.READ_FRAMEBUFFER,null),v.bindFramebuffer(te.DRAW_FRAMEBUFFER,null)}else Ht?P.isDataTexture||P.isData3DTexture?te.texSubImage3D(Be,Xe,st,qt,cn,Je,Ye,Qe,jt,xn,Kt.data):Q.isCompressedArrayTexture?te.compressedTexSubImage3D(Be,Xe,st,qt,cn,Je,Ye,Qe,jt,Kt.data):te.texSubImage3D(Be,Xe,st,qt,cn,Je,Ye,Qe,jt,xn,Kt):P.isDataTexture?te.texSubImage2D(te.TEXTURE_2D,Xe,st,qt,Je,Ye,jt,xn,Kt.data):P.isCompressedTexture?te.compressedTexSubImage2D(te.TEXTURE_2D,Xe,st,qt,Kt.width,Kt.height,jt,Kt.data):te.texSubImage2D(te.TEXTURE_2D,Xe,st,qt,Je,Ye,jt,xn,Kt);v.pixelStorei(te.UNPACK_ROW_LENGTH,hn),v.pixelStorei(te.UNPACK_IMAGE_HEIGHT,wt),v.pixelStorei(te.UNPACK_SKIP_PIXELS,Dn),v.pixelStorei(te.UNPACK_SKIP_ROWS,dn),v.pixelStorei(te.UNPACK_SKIP_IMAGES,wn),Xe===0&&Q.generateMipmaps&&te.generateMipmap(Be),v.unbindTexture()},this.initRenderTarget=function(P){le.get(P).__webglFramebuffer===void 0&&xe.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?xe.setTextureCube(P,0):P.isData3DTexture?xe.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?xe.setTexture2DArray(P,0):xe.setTexture2D(P,0),v.unbindTexture()},this.resetState=function(){fe=0,ge=0,be=null,v.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ft._getUnpackColorSpace()}};window.FestaGL=(()=>{let i=Math.PI*2,e=(d,T,I)=>Math.min(I,Math.max(T,d)),t={add:(d,T)=>[d[0]+T[0],d[1]+T[1],d[2]+T[2]],sub:(d,T)=>[d[0]-T[0],d[1]-T[1],d[2]-T[2]],mul:(d,T)=>[d[0]*T,d[1]*T,d[2]*T],dot:(d,T)=>d[0]*T[0]+d[1]*T[1]+d[2]*T[2],cross:(d,T)=>[d[1]*T[2]-d[2]*T[1],d[2]*T[0]-d[0]*T[2],d[0]*T[1]-d[1]*T[0]],len:d=>Math.hypot(...d),norm:d=>{let T=Math.hypot(...d)||1;return d.map(I=>I/T)}},n={identity:()=>new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),multiply:(d,T)=>{let I=new Float32Array(16);for(let g=0;g<4;g++)for(let C=0;C<4;C++)I[g*4+C]=d[C]*T[g*4]+d[4+C]*T[g*4+1]+d[8+C]*T[g*4+2]+d[12+C]*T[g*4+3];return I},perspective:(d,T,I,g)=>{let C=1/Math.tan(d/2),b=new Float32Array(16);return b[0]=C/T,b[5]=C,b[10]=(g+I)/(I-g),b[11]=-1,b[14]=2*g*I/(I-g),b},ortho:(d,T,I,g,C,b)=>new Float32Array([2/(T-d),0,0,0,0,2/(g-I),0,0,0,0,-2/(b-C),0,-(T+d)/(T-d),-(g+I)/(g-I),-(b+C)/(b-C),1]),lookAt:(d,T,I=[0,1,0])=>{let g=t.norm(t.sub(d,T)),C=t.norm(t.cross(I,g)),b=t.cross(g,C);return new Float32Array([C[0],b[0],g[0],0,C[1],b[1],g[1],0,C[2],b[2],g[2],0,-t.dot(C,d),-t.dot(b,d),-t.dot(g,d),1])},compose:(d=0,T=0,I=0,g=0,C=1,b=C,U=C)=>{let x=Math.cos(g),N=Math.sin(g);return new Float32Array([x*C,0,-N*C,0,0,b,0,0,N*U,0,x*U,0,d,T,I,1])},transform:(d,T,I=1)=>[d[0]*T[0]+d[4]*T[1]+d[8]*T[2]+d[12]*I,d[1]*T[0]+d[5]*T[1]+d[9]*T[2]+d[13]*I,d[2]*T[0]+d[6]*T[1]+d[10]*T[2]+d[14]*I],inverse:d=>{let T=new Float32Array(16),I=Array.from(d),g=Array.from({length:4},(C,b)=>[I[b],I[b+4],I[b+8],I[b+12],...Array.from({length:4},(U,x)=>b===x?1:0)]);for(let C=0;C<4;C++){let b=C;for(let x=C+1;x<4;x++)Math.abs(g[x][C])>Math.abs(g[b][C])&&(b=x);[g[C],g[b]]=[g[b],g[C]];let U=g[C][C];if(Math.abs(U)<1e-12)return n.identity();for(let x=0;x<8;x++)g[C][x]/=U;for(let x=0;x<4;x++)if(x!==C){let N=g[x][C];for(let G=0;G<8;G++)g[x][G]-=N*g[C][G]}}for(let C=0;C<4;C++)for(let b=0;b<4;b++)T[b*4+C]=g[C][b+4];return T}};function s(d){return Array.isArray(d)?d:typeof d=="number"?[(d>>16&255)/255,(d>>8&255)/255,(d&255)/255]:(d=d.replace("#",""),d.length===3&&(d=d.split("").map(T=>T+T).join("")),s(parseInt(d,16)))}function r(d=91371){let T=d>>>0;return()=>{T+=1831565813;let I=T;return I=Math.imul(I^I>>>15,I|1),I^=I+Math.imul(I^I>>>7,I|61),((I^I>>>14)>>>0)/4294967296}}let l=(d="#ffffff",T=0,I=.7,g=0,C=0,b=1)=>({color:s(d),p:[T,I,g,C],ao:b});class o{constructor(){this.data=new Float32Array(262144),this.used=0,this.count=0,this.transform=n.identity(),this.animation=[0,0,0,0]}reserve(T){if(this.used+T>this.data.length){let I=new Float32Array(Math.max(this.data.length*2,this.used+T));I.set(this.data),this.data=I}}vertex(T,I,g,C){this.reserve(20),T=n.transform(this.transform,T),I=t.norm(n.transform(this.transform,I,0));let b=this.data,U=this.used,x=C.color;for(let N=0;N<3;N++)b[U+N]=T[N];for(let N=0;N<3;N++)b[U+3+N]=I[N];b[U+6]=g[0],b[U+7]=g[1],b[U+8]=x[0],b[U+9]=x[1],b[U+10]=x[2],b[U+11]=C.ao??1;for(let N=0;N<4;N++)b[U+12+N]=C.p[N];for(let N=0;N<4;N++)b[U+16+N]=this.animation[N];this.used+=20,this.count++}tri(T,I,g,C,b=[[0,0],[0,1],[1,1]],U=null){let x=t.norm(t.cross(t.sub(I,T),t.sub(g,T)));this.vertex(T,U?U[0]:x,b[0],C),this.vertex(I,U?U[1]:x,b[1],C),this.vertex(g,U?U[2]:x,b[2],C)}quad(T,I,g,C,b,U=1,x=1){this.tri(T,I,g,b,[[0,0],[0,x],[U,x]]),this.tri(T,g,C,b,[[0,0],[U,x],[U,0]])}box(T,I,g,C,b,U,x){let N=T-C/2,G=T+C/2,Z=I-b/2,R=I+b/2,K=g-U/2,H=g+U/2;this.quad([N,R,H],[N,Z,H],[G,Z,H],[G,R,H],x,x.fit?1:C,x.fit?1:b),this.quad([G,R,K],[G,Z,K],[N,Z,K],[N,R,K],x,x.fit?1:C,x.fit?1:b),this.quad([G,R,H],[G,Z,H],[G,Z,K],[G,R,K],x,x.fit?1:U,x.fit?1:b),this.quad([N,R,K],[N,Z,K],[N,Z,H],[N,R,H],x,x.fit?1:U,x.fit?1:b),this.quad([N,R,K],[N,R,H],[G,R,H],[G,R,K],x,x.fit?1:C,x.fit?1:U),this.quad([N,Z,H],[N,Z,K],[G,Z,K],[G,Z,H],x,x.fit?1:C,x.fit?1:U)}plane(T,I,g,C,b,U,x=C,N=b){this.quad([T-C/2,I,g-b/2],[T-C/2,I,g+b/2],[T+C/2,I,g+b/2],[T+C/2,I,g-b/2],U,x,N)}sphere(T,I,g,C,b,U,x,N=16,G=10,Z=0,R=Math.PI){let K=(H,J)=>{let fe=H/N*i,ge=Z+J/G*(R-Z),be=[Math.sin(ge)*Math.cos(fe),Math.cos(ge),Math.sin(ge)*Math.sin(fe)];return{p:[T+be[0]*C,I+be[1]*b,g+be[2]*U],n:t.norm([be[0]/C,be[1]/b,be[2]/U]),uv:[H/N,J/G]}};for(let H=0;H<G;H++)for(let J=0;J<N;J++){let fe=K(J,H),ge=K(J,H+1),be=K(J+1,H+1),j=K(J+1,H);for(let M of[[fe,ge,be],[fe,be,j]]){let Se=t.cross(t.sub(M[1].p,M[0].p),t.sub(M[2].p,M[0].p));t.dot(Se,M[0].n)<0&&([M[1],M[2]]=[M[2],M[1]]),this.tri(...M.map(Ve=>Ve.p),x,M.map(Ve=>Ve.uv),M.map(Ve=>Ve.n))}}}cylinder(T,I,g,C,b,U=12,x=!0){let N=t.norm(t.sub(I,T)),G=t.norm(t.cross(N,Math.abs(N[1])>.95?[1,0,0]:[0,1,0])),Z=t.cross(N,G),R=t.len(t.sub(I,T)),K=(J,fe,ge)=>t.add(J,t.add(t.mul(G,Math.cos(ge)*fe),t.mul(Z,Math.sin(ge)*fe))),H=J=>t.norm(t.add(t.add(t.mul(G,Math.cos(J)),t.mul(Z,Math.sin(J))),t.mul(N,(g-C)/R)));for(let J=0;J<U;J++){let fe=J/U*i,ge=(J+1)/U*i,be=K(T,g,fe),j=K(I,C,fe),M=K(I,C,ge),Se=K(T,g,ge),Ve=H(fe),Re=H(ge);this.tri(be,M,j,b,[[J/U,0],[(J+1)/U,R],[J/U,R]],[Ve,Re,Ve]),this.tri(be,Se,M,b,[[J/U,0],[(J+1)/U,0],[(J+1)/U,R]],[Ve,Re,Re]),x&&(this.tri(T,Se,be,b),this.tri(I,j,M,b))}}disk(T,I,g,C,b,U=32){for(let x=0;x<U;x++){let N=x/U*i,G=(x+1)/U*i;this.tri([T,I,g],[T+Math.cos(G)*C,I,g+Math.sin(G)*C],[T+Math.cos(N)*C,I,g+Math.sin(N)*C],b,[[.5,.5],[.5+Math.cos(G)*.5,.5+Math.sin(G)*.5],[.5+Math.cos(N)*.5,.5+Math.sin(N)*.5]])}}tube(T,I,g,C=8){for(let b=1;b<T.length;b++)this.cylinder(T[b-1],T[b],I,I,g,C)}sign(T,I,g,C,b,U,x=!1){let N=l("#ffffff",U,.8,0,.15);this.quad([T-C/2,I+b/2,g],[T-C/2,I-b/2,g],[T+C/2,I-b/2,g],[T+C/2,I+b/2,g],N),x&&this.box(T,I,g-.022,C+.05,b+.05,.04,l("#574333",3))}scope(T,I){let g=this.transform;this.transform=n.multiply(g,T),I(),this.transform=g}animate(T,I,g){let C=this.animation;this.animation=[...T,I],g(),this.animation=C}}class h{constructor(T=512){this.size=T,this.layers=[],this.names={}}add(T,I){let g=document.createElement("canvas");g.width=g.height=this.size;let C=g.getContext("2d",{willReadFrequently:!0});I&&I(C,this.size);let b=this.layers.length;return this.layers.push(g),this.names[T]=b,b}sign(T,I,g="",C="#304c55",b=""){return this.add(T,(U,x)=>{U.fillStyle="#f9f7f0",U.fillRect(0,0,x,x),U.fillStyle=C,U.fillRect(0,0,x,62),U.fillStyle="#ffffff",U.font='700 24px "Noto Sans CJK JP", "Yu Gothic", sans-serif',U.fillText(b||T,22,41),U.fillStyle="#273b3c";let N=u(U,I,x-52,37),G=N.length>3?30:37;N=u(U,I,x-52,G),U.font=`700 ${G}px "Noto Sans CJK JP", "Yu Gothic", sans-serif`;let Z=154-Math.min(N.length,4)*4;N.slice(0,4).forEach((H,J)=>U.fillText(H,26,Z+J*(G+10))),U.fillStyle="#53605b",U.font='500 25px "Noto Sans CJK JP", "Yu Gothic", sans-serif';let R=u(U,g,x-52,25),K=Math.max(300,Z+N.length*(G+10)+25);R.slice(0,4).forEach((H,J)=>U.fillText(H,26,K+J*34)),U.fillStyle=C,U.fillRect(26,x-53,x-52,3),U.fillStyle="#6b7770",U.font='19px "Noto Sans CJK JP", "Yu Gothic", sans-serif',U.fillText("つながりフェスタ 2026",26,x-23)})}banner(T,I,g="",C="#174f54"){return this.add(T,(b,U)=>{b.scale(1,U/112),b.fillStyle="#f9f7f0",b.fillRect(0,0,U,112),b.fillStyle=C,b.fillRect(0,0,76,112),b.fillStyle="#fff",b.font='700 23px "Noto Sans CJK JP", "Yu Gothic", sans-serif',b.textAlign="center",b.fillText(T,38,64);let x=29;for(;x>17&&(b.font=`700 ${x}px "Noto Sans CJK JP", "Yu Gothic", sans-serif`,!(b.measureText(I).width<U-104));)x--;b.textAlign="left",b.fillStyle="#263d3c",b.fillText(I,92,52),b.font='500 17px "Noto Sans CJK JP", "Yu Gothic", sans-serif',b.fillStyle="#5b675d";let N=g;for(;b.measureText(N).width>U-109&&N.length;)N=N.slice(0,-1);b.fillText(N,92,84),b.fillStyle=C,b.fillRect(76,106,U-76,6)})}upload(T,I=this.size){let g=new Uint8Array(I*I*4*this.layers.length),C=document.createElement("canvas");C.width=C.height=I;let b=C.getContext("2d");this.layers.forEach((U,x)=>{b.clearRect(0,0,I,I),b.drawImage(U,0,0,I,I),g.set(b.getImageData(0,0,I,I).data,x*I*I*4)}),this.texture=new ds(g,I,I,this.layers.length),this.texture.colorSpace=Tn,this.texture.wrapS=this.texture.wrapT=Vs,this.texture.minFilter=bi,this.texture.magFilter=_n,this.texture.generateMipmaps=!0,this.texture.anisotropy=4,this.texture.needsUpdate=!0}}function u(d,T,I,g){d.font=`700 ${g}px "Noto Sans CJK JP", "Yu Gothic", sans-serif`;let C=[],b="";for(let U of T){if(U===`
`){C.push(b),b="";continue}d.measureText(b+U).width>I&&b?(C.push(b),b=U):b+=U}return b&&C.push(b),C}let p=`#version 300 es
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
 `,w=`
 vec3 transformed = festaAnimation.xyz+festaRotation()*(position-festaAnimation.xyz);
 if(festaAnimation.w>8.) transformed.z+=sin(festaTime*1.9+transformed.x*4.+transformed.y*1.3)*.08*max(0.,transformed.x-festaAnimation.x);
 if(festaInfo.z>0.) transformed.xz+=festaInfo.z*.045*sin(festaTime*.7+transformed.xz*.23)*clamp(transformed.y*.15,0.,1.);
 festaUV=uv; festaMat=festaSurface; festaShade=festaAO; festaWorld=(instanceMatrix*vec4(transformed,1.)).xyz;
 `;function y(d,T,I=!1){return d.onBeforeCompile=g=>{g.uniforms.festaTime=T.timeUniform,g.uniforms.festaAtlas=T.atlasUniform,g.vertexShader=m+g.vertexShader,g.vertexShader=g.vertexShader.replace("#include <begin_vertex>",w).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
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
reflectedLight.indirectDiffuse*=festaShade;`))},d.customProgramCacheKey=()=>I?"festa-depth-2":"festa-standard-2",d}class L{constructor(T,I,{name:g="",shadow:C=!0,instances:b=null,dynamic:U=!1}={}){this.name=g,this.renderer=T,this.count=I.count,this.shadow=C,this.dynamic=U,this.instances=b||[{matrix:n.identity(),info:[0,0,0,0]}];let x=I.data.slice(0,I.used),N=new Et;for(let R=0;R<x.length;R+=20)N.setRGB(x[R+8],x[R+9],x[R+10],Tn),x[R+8]=N.r,x[R+9]=N.g,x[R+10]=N.b;let G=new Yn,Z=new Rr(x,20);for(let[R,K,H]of[["position",3,0],["normal",3,3],["uv",2,6],["color",3,8],["festaAO",1,11],["festaSurface",4,12],["festaAnimation",4,16]])G.setAttribute(R,new Ir(Z,K,H));this.info=new fs(new Float32Array(this.instances.length*4),4),this.info.setUsage(Qo),G.setAttribute("festaInfo",this.info),this.object=new Nr(G,T.surfaceMaterial,this.instances.length),this.object.name=g,this.object.castShadow=C,this.object.receiveShadow=!0,this.object.frustumCulled=!1,this.object.customDepthMaterial=T.depthMaterial,this.object.instanceMatrix.setUsage(Qo),this.matrix=new Yt,this.updateInstances(),T.scene.add(this.object),T.meshes.push(this),I.data=null}get visible(){return this.object.visible}set visible(T){this.object.visible=T}updateInstances(){this.instances.forEach((T,I)=>{this.object.setMatrixAt(I,this.matrix.fromArray(T.matrix)),this.info.set(T.info||[0,0,0,0],I*4)}),this.object.instanceMatrix.needsUpdate=!0,this.info.needsUpdate=!0}dispose(){this.renderer.scene.remove(this.object),this.object.geometry.dispose(),this.object.dispose(),this.renderer.meshes=this.renderer.meshes.filter(T=>T!==this)}}class S{constructor(T,I="standard"){this.canvas=T,this.engine=new sl({canvas:T,alpha:!1,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0}),this.gl=this.engine.getContext(),this.engine.outputColorSpace=Tn,this.engine.toneMapping=Xr,this.engine.shadowMap.enabled=!0,this.engine.shadowMap.type=ps,this.engine.shadowMap.autoUpdate=!1,this.scene=new Er,this.scene.fog=new Tr("#c5d3d8",110,420),this.camera={eye:[0,1.68,20],target:[0,1.68,0],fov:66*Math.PI/180,near:.065,far:700},this.threeCamera=new Rn,this.meshes=[],this.quality=I,this.time=0,this.exposure=1.12,this.sun=t.norm([-.38,.79,.48]),this.sunColor=[1,.94,.81],this.sunPower=3.7,this.timeUniform={value:0},this.atlasUniform={value:null},this.surfaceMaterial=y(new Br({color:16777215,vertexColors:!0,roughness:1,metalness:1,side:$n,alphaTest:.4}),this),this.depthMaterial=y(new $s({depthPacking:xc,side:$n,alphaTest:.4}),this,!0),this.hemisphere=new Vr("#c7e0f5","#817562",1.8),this.scene.add(this.hemisphere),this.sunLight=new Hr(16777215,this.sunPower),this.sunLight.castShadow=!0,this.scene.add(this.sunLight,this.sunLight.target),this.stats={draws:0,triangles:0,fps:0},this.frameCount=0,this.fpsStamp=performance.now(),this.shadowAge=-1,this.shadowDirty=!0,this.targetSize=[0,0];let g=new Yn;g.setAttribute("position",new Bn([-1,-1,0,3,-1,0,-1,3,0],3)),this.skyUniforms={uInvVP:{value:new Yt},uEye:{value:new ce},uSun:{value:new ce},uTime:this.timeUniform};let C=new Js({glslVersion:ea,vertexShader:p.replace("#version 300 es","").replace("0.,1.);","1.,1.);"),fragmentShader:_.replace("#version 300 es","").replace("frag=vec4(sky,1.);","sky=sky*1.12; sky=clamp((sky*(2.51*sky+.03))/(sky*(2.43*sky+.59)+.14),0.,1.);frag=vec4(pow(sky,vec3(1./2.2)),1.);"),uniforms:this.skyUniforms,depthWrite:!1,depthTest:!1});this.sky=new Pn(g,C),this.sky.frustumCulled=!1,this.sky.renderOrder=-1e3,this.scene.add(this.sky),this.setQuality(I)}set atlas(T){this._atlas=T,this.atlasUniform.value=T.texture}get atlas(){return this._atlas}setQuality(T){this.quality=T,this.pixelRatio=T==="high"?Math.min(devicePixelRatio,1.75):T==="low"?.8:Math.min(devicePixelRatio,1.15),this.shadowSize=T==="high"?4096:T==="low"?1024:2048,this.engine.setPixelRatio(this.pixelRatio),this.createShadow(),this.resize()}createShadow(){let T=this.sunLight,I=T.shadow;T.position.set(-3+this.sun[0]*230,this.sun[1]*230,26+this.sun[2]*230),T.target.position.set(-3,0,26),T.color.setRGB(...this.sunColor),T.intensity=this.sunPower,Object.assign(I.camera,{left:-108,right:108,top:108,bottom:-108,near:1,far:500}),I.camera.updateProjectionMatrix(),I.bias=-15e-5,I.normalBias=216/this.shadowSize*1.35,I.mapSize.x!==this.shadowSize&&(I.map?.dispose(),I.map=null,I.mapSize.set(this.shadowSize,this.shadowSize)),this.shadowDirty=!0}resize(){let T=Math.max(1,this.canvas.clientWidth),I=Math.max(1,this.canvas.clientHeight);T===this.targetSize[0]&&I===this.targetSize[1]&&this.engine.getPixelRatio()===this.pixelRatio||(this.targetSize=[T,I],this.engine.setSize(T,I,!1))}render(T=0){if(!this.atlas)return;this.time=T,this.timeUniform.value=T,this.resize();let I=this.camera,g=this.threeCamera;g.position.fromArray(I.eye),g.up.set(0,1,0),g.lookAt(new ce(...I.target)),g.fov=I.fov*180/Math.PI,g.aspect=this.canvas.clientWidth/this.canvas.clientHeight,g.near=I.near,g.far=I.far,g.updateProjectionMatrix(),g.updateMatrixWorld(),this.vp=new Yt().multiplyMatrices(g.projectionMatrix,g.matrixWorldInverse).elements,this.invVp=new Yt().fromArray(this.vp).invert().elements,this.skyUniforms.uInvVP.value.fromArray(this.invVp),this.skyUniforms.uEye.value.fromArray(I.eye),this.skyUniforms.uSun.value.fromArray(this.sun),this.engine.toneMappingExposure=this.exposure,(this.shadowDirty||T-this.shadowAge>.45)&&(this.engine.shadowMap.needsUpdate=!0,this.shadowDirty=!1,this.shadowAge=T),this.engine.render(this.scene,g),this.stats.draws=this.engine.info.render.calls,this.stats.triangles=this.engine.info.render.triangles,this.frameCount++;let C=performance.now();C-this.fpsStamp>1500&&(this.stats.fps=Math.round(this.frameCount*1e3/(C-this.fpsStamp)),this.frameCount=0,this.fpsStamp=C)}project(T){if(!this.vp)return null;let I=this.vp,g=n.transform(I,T),C=I[3]*T[0]+I[7]*T[1]+I[11]*T[2]+I[15];return C<=0?null:{x:(g[0]/C*.5+.5)*this.canvas.clientWidth,y:(-g[1]/C*.5+.5)*this.canvas.clientHeight,z:g[2]/C}}groundPoint(T,I){if(!this.invVp)return null;let g=new Wr;return g.setFromCamera(new Ut(T/this.canvas.clientWidth*2-1,1-I/this.canvas.clientHeight*2),this.threeCamera),g.ray.intersectPlane(new qn(new ce(0,1,0),0),new ce)?.toArray()||null}}return{V:t,M:n,Geometry:o,Mesh:L,Renderer:S,Atlas:h,material:l,color:s,rng:r,clamp:e,TAU:i,wrap:u}})();window.FestaScenery={height(i,e){let t=(h,u,p,_,m)=>{let w=Math.hypot((i-h)/p,(e-u)/_);return w<1?m*Math.pow(Math.cos(w*Math.PI/2),2):0},n=Math.max(t(112,-4,49,100,25),t(130,82,65,84,22),t(-113,7,41,40,20),t(-39,-103,63,47,15),t(8,-107,45,48,20),t(53,-105,49,46,16));if(i<60.8||i>=103.2||e<=15.08||e>=96.08)return n;let s=h=>(h=Math.max(0,Math.min(1,h)),h*h*(3-2*h)),r=s((e-15.08)/12)*(1-s((e-80.08)/16)),l=s((i-75.2)/28),o=3.7+(Math.max(n,3.7)-3.7)*l;return n+(o-n)*r},textures(i,e){let t=i.layers[3],n=t.getContext("2d"),s=t.width,r=e(8401),l=n.createImageData(s,s);for(let o=0;o<s;o++)for(let h=0;h<s;h++){let u=Math.sin(h/s*Math.PI*4+.5)*Math.cos(o/s*Math.PI*6)*1.7,p=(r()-.5)*9+u,_=(o*s+h)*4;l.data[_]=241+p,l.data[_+1]=239+p,l.data[_+2]=229+p,l.data[_+3]=255}n.putImageData(l,0,0);for(let o of[7,8]){let h=i.layers[o].getContext("2d"),u=e(301+o);h.clearRect(0,0,s,s);for(let p=0;p<1700;p++){let _=u()*Math.PI*2,m=Math.sqrt(u()),w=.5+Math.cos(_)*m*.45,y=.5+Math.sin(_)*m*.42;if(m>.84&&u()>.52)continue;let L=(1-y)*12+u()*17,S=o===7?76+u()*30:18+u()*24;h.fillStyle=`hsl(${S},${o===7?24+u()*22:38+u()*20}%,${16+L}%)`,h.beginPath(),h.ellipse(w*s,y*s,3+u()*7,2+u()*4,u()*6.28,0,6.28),h.fill()}}return i.add("Window reflection",(o,h)=>{let u=o.createLinearGradient(0,0,0,h);u.addColorStop(0,"#9baeb3"),u.addColorStop(.46,"#667d81"),u.addColorStop(.49,"#536562"),u.addColorStop(1,"#364743"),o.fillStyle=u,o.fillRect(0,0,h,h);let p=e(721);for(let _=0;_<150;_++){let m=p()*h,w=h*(.48+p()*.5);o.fillStyle=`rgba(31,48,35,${.025+p()*.1})`,o.beginPath(),o.ellipse(m,w,5+p()*29,3+p()*16,0,0,6.28),o.fill()}o.fillStyle="rgba(218,228,226,.10)",o.fillRect(h*.23,0,h*.03,h),o.fillRect(h*.75,0,h*.018,h)})},build({details:i,green:e,distant:t,signGeo:n,childSign:s,p:r,planPoint:l,onRoad:o,gateOpen:h,m:u,mat:p,M:_,rng:m,TAU:w,ga:y,gb:L,gc:S,gw:d,gd:T,gymRise:I=.45}){let g=m(70031),C=(z,A)=>z+(A-z)*g(),b=p("#dcdccf",3,.88),U=p("#c7cbc3",3,.87),x=r(425.28,478),N=r(470,478),G=5.25,Z=3.25,R=y[0]-1.2,K=2.4,H=N[1]+1.2,J=L[1]+1.6,fe=(z,A,V=1.05)=>{i.cylinder([z[0],z[1]+V,z[2]],[A[0],A[1]+V,A[2]],.028,.028,b,7);let q=Math.max(1,Math.ceil(Math.hypot(A[0]-z[0],A[2]-z[2])/.19));for(let X=0;X<=q;X++){let $=X/q,ue=z[0]+(A[0]-z[0])*$,Y=z[1]+(A[1]-z[1])*$,Pe=z[2]+(A[2]-z[2])*$;i.cylinder([ue,Y,Pe],[ue,Y+V,Pe],.016,.016,b,6)}},ge=(z,A,V,q,X)=>i.box((z+A)/2,X-.14,(V+q)/2,A-z,.28,q-V,b);ge(x[0],y[0],N[1]-1.2,H,G),fe([x[0],G,N[1]-1.2],[y[0],G,N[1]-1.2]),fe([x[0],G,H],[y[0]-K,G,H]);for(let z of[x[0]+.22,y[0]-2.65])i.box(z,G/2-.14,N[1],.38,G-.28,.42,b);let be=12,j=(J-H)/be,M=(G-Z)/be;for(let z=0;z<be;z++){let A=H+z*j,V=A+j,q=G-z*M;i.box(R,q-M/2-.08,(A+V)/2,K,M+.16,j+.015,b)}for(let z of[y[0]-K,y[0]])i.quad([z,G-.28,H],[z,Z-.28,J],[z,Z-.48,J],[z,G-.48,H],b),fe([z,G,H],[z,Z,J]);ge(y[0]-K,L[0],L[1],J+1.3,Z),fe([y[0]-K,Z,J+1.3],[S[0]+4.3,Z,J+1.3]),fe([y[0]-K,Z,J],[y[0]-K,Z,J+1.3]);for(let z of[y[0]-K+.25,y[0]+2.2,S[0]+4.4,L[0]-.25])i.box(z,(Z-.28)/2,J+.99,.42,Z-.28,.45,b);i.box((S[0]+4.3+L[0])/2,Z+.46,J+1.17,L[0]-S[0]-4.3,.92,.22,b);let Se=p("#778885",0,.48,.08),Ve=p("#c3c5b9",0,.63,.18),Re=p("#414c4e",0,.48,.62);for(let z of[-6.8,-2.3,2.3,6.8])i.box(S[0]+z,6,L[1]+.2,1.35,2.4,.09,Ve),i.box(S[0]+z,5.96,L[1]+.26,1.21,2.22,.03,Se),i.box(S[0]+z,6.75,L[1]+.29,1.22,.67,.05,b),i.box(S[0]+z,5.52,L[1]+.3,1.22,.045,.04,Ve);let ee=y[0]+d*77/309,ht=y[0]+d*156/309,Ct=y[0]+d*202/309,ye=y[0]+d*233/309;for(let[z,A]of[[y[0]+2.75,1.5],[ht+1.3,1],[Ct+1.075,.95],[ye+2.45,1.5]])i.box(z,1.93,L[1]+.24,A+.12,1.62,.065,Re),i.box(z,1.93,L[1]+.28,A-.08,1.45,.025,Se),i.box(z,1.93,L[1]+.31,.045,1.51,.045,Re),i.box(z,1.93,L[1]+.32,A+.15,.045,.045,Re);let he=y[0]+d*.38,He=L[1]+.27;for(let z of[-1,1]){let A=he+z*1.65;i.box(A,1.45,He+.055,1.04,2.35,.035,Se),i.box(A,1.06,He+.09,1.1,.045,.06,Re),i.box(A,2.49,He+.09,1.1,.045,.06,Re),i.box(he+z*2.2,1.54,He+.09,.055,2.76,.055,Re),i.box(he+z*1.1,1.54,He+.09,.055,2.76,.055,Re),i.box(he+z*1.1,1.45,He-.5,.035,2.35,1.04,Se),i.box(he+z*1.1,1.06,He-.5,.05,.045,1.08,Re)}i.box(he,2.91,He+.09,4.5,.06,.06,Re),i.box(he,.15,L[1]+1.75,5.6,.3,3,b);for(let z=0;z<3;z++)i.box(he,.025+z*.05,L[1]+4.06-z*.38,5.6,.05+z*.1,.4,b);let ft=p("#83b4c2",0,.54,.12);for(let[z,A]of[[335,344],[421,433]]){let V=r(470,z)[1],q=r(470,A)[1],X=(V+q)/2,$=q-V;for(let ue=0;ue<3;ue++){let Y=(ue+1)*I/3;i.box(y[0]-1.38+ue*.46,Y/2,X,.48,Y,$+.24,b)}i.box(y[0]-.11,I-.04,X,.54,.08,$+.24,b);for(let ue of[V+.12,q-.12])i.box(y[0]-.76,I+1.12,ue,1.32,2.24,.075,ft),i.box(y[0]-.76,I+2.25,ue,1.36,.045,.09,Ve)}let ke=[[303,334],[345,420],[434,503]];for(let z of[-1,1])for(let[A,V]of ke){let q=r(470,A)[1]+.15,X=r(470,V)[1]-.15,$=Math.max(1,Math.ceil((X-q)/5.4));for(let ue=0;ue<$;ue++){let Y=q+(X-q)*ue/$+.18,Pe=q+(X-q)*(ue+1)/$-.18,ze=S[0]+z*(d/2+.26),it=.56,Ie=4.04;for(let Ke of[!1,!0]){let qe=Ke?Ie:it,xt=Ke?it:Ie,Lt=xt-qe,gn=Pe-Y,Sn=Math.hypot(Lt,gn),ci=-gn/Sn*.065,ns=Lt/Sn*.065;i.quad([ze,qe+ci,Y+ns],[ze,qe-ci,Y-ns],[ze,xt-ci,Pe-ns],[ze,xt+ci,Pe+ns],b,Sn,.13);for(let[hi,Ti]of[[qe,Y],[xt,Pe]]){i.box(ze,hi,Ti,.045,.25,.25,b);for(let P of[-.065,.065])i.cylinder([ze+z*.022,hi,Ti+P],[ze+z*.04,hi,Ti+P],.017,.017,p("#abae9e",0,.65,.1),6)}}}}for(let z of[-1,1])for(let[A,V]of ke){let q=S[0]+z*(d/2+.185),X=r(470,A)[1],$=r(470,V)[1];for(let ue=X+.8;ue<$;ue+=2.65)i.box(q,2.12,ue,.012,3.78,.014,p("#b9baae",0,.96))}for(let z of[-1,1]){let A=S[0]+z*(d/2+.31);i.cylinder([A,8.66,y[1]],[A,8.66,L[1]],.075,.075,b,10);for(let V of[y[1]+.32,y[1]+16.5,L[1]-.35])i.cylinder([A,.25,V],[A,8.66,V],.045,.045,b,8);for(let[V,q]of ke){let X=r(470,V)[1],$=r(470,q)[1];i.box(A-z*.14,.19,(X+$)/2,.08,.38,$-X,p("#94958b",3,.96))}}let We=(z,A,V)=>z+V>y[0]&&z-V<L[0]&&A+V>y[1]&&A-V<L[1];function en(z,A,V,q,X=1,$=82,ue=!1){if(h(z,A)||o(z,A,.6)||z>55&&z<80&&A>26&&A<82)return;let Y=window.FestaScenery.height(z,A);if(z<-52&&z>-88&&A<-12&&A>-70&&(V=Math.min(V,6.2)),z>-74&&z<-58&&A>-11&&A<10)return;let Pe=m(q);for(let ze=0;ze<$;ze++){let it=Pe()*w,Ie=Math.sqrt(Pe())*V*.46*X,Ke=V*(.13+Pe()*.77)-Ie*.09,qe=z+Math.cos(it)*Ie,xt=A+Math.sin(it)*Ie,Lt=V*(.21+Pe()*.14),gn=Pe()*w;if(We(qe,xt,Lt*.71))continue;let Sn=ue?p(ze%4?"#a0704d":"#855841",8,.98,0,0,.92):p(ze%7===0?"#879c75":ze%3?"#526b48":"#344f39",7,.98,0,0,.92);e.scope(_.compose(qe,Y+Ke,xt,gn),()=>{e.quad([-Lt/2,-Lt/2,0],[-Lt/2,Lt/2,0],[Lt/2,Lt/2,0],[Lt/2,-Lt/2,0],Sn),e.quad([-Lt/2,0,-Lt/2],[-Lt/2,0,Lt/2],[Lt/2,0,Lt/2],[Lt/2,0,-Lt/2],Sn)})}for(let ze=0;ze<12;ze++){let it=ze*w/12,Ie=z+Math.cos(it)*V*.25*X,Ke=A+Math.sin(it)*V*.25*X,qe=V*(.25+Pe()*.08),xt=ue?p("#75523b",8,.98):p(ze%3?"#3c5a40":"#60734b",7,.98);We(Ie,Ke,qe*.71)||e.scope(_.compose(Ie,Y+V*.21,Ke,it),()=>e.quad([-qe/2,-qe/2,0],[-qe/2,qe/2,0],[qe/2,qe/2,0],[qe/2,-qe/2,0],xt))}}let rt=L[1]+3.2,_t=p("#94705a",3,.98),Pt=p("#4c4835",1,1),gt=m(2701);for(let[z,A,V]of[[y[0]+3,4.6,2.9],[L[0]-4.7,8.4,3.6]]){i.box(z,.24,rt,A,.48,2.1,_t),i.plane(z,.486,rt,A-.35,1.7,Pt);for(let q=z-A/2+.2;q<z+A/2;q+=.42)for(let X of[.12,.35])i.box(q+(X>.2?.2:0),X,rt+1.055,.012,.2,.015,p("#c3ac8a"));for(let q=0;q<Math.round(A*36);q++){let X=z+(gt()-.5)*(A-.6),$=.5+gt()*V,ue=rt+(gt()-.5)*1.4,Y=.52+gt()*.4,Pe=p(q%5?"#6b835a":"#879669",7,1);e.scope(_.compose(X,$,ue,gt()*w),()=>{e.quad([-Y/2,-Y/2,0],[-Y/2,Y/2,0],[Y/2,Y/2,0],[Y/2,-Y/2,0],Pe),e.quad([-Y/2,0,-Y/2],[-Y/2,0,Y/2],[Y/2,0,Y/2],[Y/2,0,-Y/2],Pe)})}for(let q=z-A/2+.3;q<z+A/2;q+=.61){let X=rt+1.4;i.box(q,.13,X,.43,.26,.33,p("#a88767",3,.94));for(let $=0;$<3;$++)i.sphere(q+($-1)*.11,.3,X,.095,.11,.11,p($%2?"#989b62":"#557549"),8,5)}}let dt=Number((L[0]+3.6).toFixed(2)),Ot=Number((L[1]-20).toFixed(2)),Gt=Number((L[1]+33).toFixed(2)),yt=3.6,Nt=p("#92968a",3,.99),te=p("#b0b3a6",3,.94);i.quad([dt-.35,0,Ot],[dt-.35,0,Gt],[dt,yt,Gt],[dt,yt,Ot],Nt,18,3),i.box(dt+.08,yt+.08,(Ot+Gt)/2,.64,.16,Gt-Ot,te);for(let z=Ot+.3;z<Gt;z+=2.2)i.cylinder([dt+.1,yt+.12,z],[dt+.1,yt+1.16,z],.022,.022,Ve,6),i.box(dt-.28,.65,z,.025,.1,.1,p("#454d43"));for(let z of[yt+.3,yt+1.12])i.cylinder([dt+.1,z,Ot],[dt+.1,z,Gt],.022,.022,Ve,6);for(let z=Ot;z<Gt;z+=5.4)i.cylinder([dt-.34,.05,z],[dt-.01,yt-.02,z],.012,.012,p("#777e72"),5);{let z=dt+6.3,A=L[1]+1.4,V=8.8,q=11,X=6.6;t.box(z,yt+X/2,A,V,X,q,p("#d8d2be",3,.96));let $=p("#6f6860",10,.9),ue=yt+X;for(let Y of[-1,1])t.quad([z,ue+1.7,A-q/2-.4],[z,ue+1.7,A+q/2+.4],[z+Y*(V/2+.4),ue,A+q/2+.4],[z+Y*(V/2+.4),ue,A-q/2-.4],$,3,4);for(let Y of[A-q/2,A+q/2])t.tri([z-V/2,ue,Y],[z,ue+1.7,Y],[z+V/2,ue,Y],b);for(let Y of[yt+1.65,yt+4.8])for(let Pe of[-3.6,0,3.6])i.box(z-V/2-.025,Y,A+Pe,.05,1.28,1.4,p("#5d625a")),i.box(z-V/2-.06,Y,A+Pe,.035,1.1,1.22,Se),i.box(z-V/2-.087,Y,A+Pe,.04,1.12,.035,Ve)}let Bt=(z,A)=>o(z,A,3)||h(z,A)?0:window.FestaScenery.height(z,A),St=[...new Set([...Array.from({length:89},(z,A)=>-156+A*4),60.8,75.2,103.2])].sort((z,A)=>z-A),B=[...new Set([...Array.from({length:72},(z,A)=>-112+A*4),15.08,Ot,Gt,96.08])].sort((z,A)=>z-A);for(let z=0;z<St.length-1;z++)for(let A=0;A<B.length-1;A++){let V=St[z],q=B[A],X=St[z+1],$=B[A+1];if(V<dt&&X===dt&&q>=Ot&&$<=Gt)continue;let ue=[[V,q],[V,$],[X,$],[X,q]].map(([ze,it])=>[ze,Bt(ze,it)-.1,it]);if(ue.every(ze=>ze[1]<0))continue;let Y=p("#ffffff",2,.98),Pe=([ze,it,Ie])=>{let Ke=ze===dt&&Ie>=Ot&&Ie<=Gt?2*(Bt(ze,Ie)-Bt(ze+.1,Ie)):Bt(ze-.1,Ie)-Bt(ze+.1,Ie),qe=Bt(ze,Ie-.1)-Bt(ze,Ie+.1),xt=Math.hypot(Ke,.2,qe);return[Ke/xt,.2/xt,qe/xt]};for(let ze of[[0,1,2],[0,2,3]])t.tri(...ze.map(it=>ue[it]),Y,ze.map(it=>[(ue[it][0]+550)*460/1100,(ue[it][2]+550)*460/1100]),ze.map(it=>Pe(ue[it])))}for(let z=-149;z<188;z+=6)for(let A=-99;A<162;A+=6){if(Bt(z,A)<2.3)continue;let V=m(Math.round((z+200)*800+A+200));en(z+(V()-.5)*2,A+(V()-.5)*2,4.8+V()*2.1,Math.round((z+200)*801+A+201),1.5,30)}let v=p("#7a895a",7,.98),se=p("#9ca469",7,.98),le=p("#625c46",1,1);function xe(z,A,V,q,X,$){let ue=m($);for(let Y=0;Y<Math.ceil(V*X*24);Y++){let Pe=ue()*w,ze=Math.sqrt(ue()),it=z+Math.cos(Pe)*V*.48*ze,Ie=A+Math.sin(Pe)*X*.48*ze,Ke=.12+q*(.2+.8*Math.sqrt(1-ze*ze))*(.72+ue()*.28),qe=.24+ue()*.22;e.scope(_.compose(it,Ke,Ie,ue()*w),()=>{e.quad([-qe/2,-qe/2,0],[-qe/2,qe/2,0],[qe/2,qe/2,0],[qe/2,-qe/2,0],Y%5?v:se),e.quad([-qe/2,0,-qe/2],[-qe/2,0,qe/2],[qe/2,0,qe/2],[qe/2,0,-qe/2],v)})}}for(let[z,A,V,q,X]of[[135,429,5.4,.8,1.15],[158,429,3.6,.65,1.1],[177,429,2.3,.46,1],[279,430,4.1,.58,.85]]){let $=r(z,A);i.plane($[0],.035,$[1],V,X,le);for(let ue of[-1,1])i.box($[0],.09,$[1]+ue*X/2,V,.18,.1,p("#a3a295",3,.97));for(let ue of[-1,1])i.box($[0]+ue*V/2,.09,$[1],.1,.18,X,p("#a3a295",3,.97));xe($[0],$[1],V-.15,q,X-.12,z*101)}for(let[z,A]of[[257,11],[287,7]])for(let V=0;V<A;V++){let q=r(z+V*2.2,434),X=.39,$=.26,ue=p(V%3?"#d1c6ac":"#987554",3,.95);i.box(q[0],$/2,q[1],X,$,.28,ue),i.plane(q[0],$+.008,q[1],X-.045,.23,le);for(let Y of[-1,1])i.box(q[0],$-.01,q[1]+Y*.14,X+.035,.055,.035,ue);for(let Y=0;Y<3;Y++){let Pe=q[0]+(Y-1)*.1;i.cylinder([Pe,$,q[1]],[Pe,$+.16+V%3*.025,q[1]],.007,.004,p("#657352"),5),e.scope(_.compose(Pe,$+.14,q[1],V+Y),()=>{e.quad([-.09,-.03,0],[-.06,.11,0],[.06,.11,0],[.09,-.03,0],v),e.quad([0,-.03,-.09],[0,.11,-.06],[0,.11,.06],[0,-.03,.09],se)})}}for(let[z,A,V,q]of[[54,375,3.1,1.8],[69,375,2.8,1.8]]){let X=r(z,A),$=2.05,ue=p("#b7b9af",3,.95),Y=p("#8f978e",0,.8,.15);i.box(X[0],$/2,X[1],V,$,q,ue),i.box(X[0],$+.055,X[1],V+.18,.11,q+.16,Y);for(let Pe of[-1,1])i.box(X[0]+Pe*V*.23,$*.48,X[1]-q/2-.025,V*.43,$*.9,.035,p("#9da79e",3,.92)),i.box(X[0]+Pe*.075,1.04,X[1]-q/2-.06,.025,.19,.045,Y)}xe(r(60,367)[0],r(60,367)[1],3.2,1.15,1.3,92160);let Le=-66,Ae=-1,pe=11.2,ve=15.6,Ne=6.3,nt=p("#d8d8c9",3,.96);t.box(Le,Ne/2,Ae,pe,Ne,ve,nt);let re=Le+pe/2;t.quad([Le-pe/2-.35,Ne+.25,Ae-ve/2-.35],[Le-pe/2-.35,Ne+.25,Ae+ve/2+.35],[re+.35,Ne+.05,Ae+ve/2+.35],[re+.35,Ne+.05,Ae-ve/2-.35],p("#747d7a",10,.85),4,4),t.box(re+.2,Ne,Ae,.12,.19,ve+.7,nt);for(let z of[-5.7,-2.7,0,3,5.7]){let A=z===0?.65:1.45;i.box(re+.03,4.63,Ae+z,.055,1.38,A,Ve),i.box(re+.064,4.63,Ae+z,.02,1.24,A-.13,Se),i.box(re+.086,4.63,Ae+z,.03,1.26,.035,Ve)}for(let z of[-4.5,4.5])i.box(re+.08,1.28,Ae+z,.12,2.5,1.37,p("#adb5ac",3,.85)),i.box(re+.15,1.78,Ae+z,.035,.77,.92,Se),i.box(re+.53,2.65,Ae+z,1.1,.12,2.05,p("#8e9994",10,.9)),i.box(re+.85,.1,Ae+z,1.5,.2,2.1,b),i.sphere(re+.14,2.77,Ae+z-1.3,.055,.11,.11,p("#eeeadd"),10,6);i.quad([re,.03,Ae-7.5],[re+.95,.03,Ae-7.5],[re+.95,.2,Ae+6],[re,.2,Ae+6],b,1,6),fe([re+1.02,.03,Ae-7.5],[re+1.02,.2,Ae+6],.83),n&&s!==void 0&&n.scope(_.compose(re+.18,0,Ae,Math.PI/2),()=>n.sign(0,2.65,0,5.1,.95,s));let me=-83,_e=-22,Oe=Bt(me,_e),ot=29,W=p("#a7aca5",0,.68,.25);for(let z=0;z<8;z++){let A=Oe+z*ot/8,V=Oe+(z+1)*ot/8,q=2.65-z*.235,X=q-.235;for(let $ of[-1,1])for(let ue of[-1,1])t.cylinder([me+$*q,A,_e+ue*q],[me+$*X,V,_e+ue*X],.07,.05,W,6),t.cylinder([me+$*q,A,_e+ue*q],[me-$*X,V,_e+ue*X],.026,.026,W,5),t.cylinder([me+$*q,A,_e+ue*q],[me+$*X,V,_e-ue*X],.026,.026,W,5)}for(let z of[Oe+20.5,Oe+24.8,Oe+29]){t.cylinder([me-5,z,_e],[me+5,z,_e],.075,.075,W,6);for(let A of[-4.7,4.7]){t.cylinder([me+A,z,_e],[me+A,z-.9,_e],.1,.1,p("#a6ada0"),8);let V=r(322,56),q=[];for(let X=0;X<=28;X++){let $=X/28;q.push([me+A+(V[0]-me)*$,z-.9+(26-(Oe+29))*$-3.1*Math.sin($*Math.PI),_e+(V[1]-_e)*$])}t.tube(q,.028,p("#626963"),5)}}let Ce=[[103,69],[131,47],[202,40],[331,44],[479,94],[574,146],[583,632],[592,679],[470,739],[101,780],[71,735],[21,525],[30,339],[57,250],[63,145]],Me=0;for(let z=0;z<Ce.length-1;z++){if(z===7||z===8||z===9)continue;let A=r(...Ce[z]),V=r(...Ce[z+1]),q=V[0]-A[0],X=V[1]-A[1],$=Math.hypot(q,X),ue=X/$,Y=-q/$;for(let Pe=2;Pe<$;Pe+=5.7){let ze=Pe/$,it=A[0]+q*ze,Ie=A[1]+X*ze;en(it+ue*7.6,Ie+Y*7.6,C(7,11.3),1e4+Me++),(z<5||z>10)&&en(it+ue*14.6+q/$*2.4,Ie+Y*14.6+X/$*2.4,C(8.2,13),1e4+Me++,1.13),(z<6||z>10)&&en(it+ue*2,Ie+Y*2,C(2.2,3.2),1e4+Me++,1.8)}}t.scope(_.compose(-106,5,-41,Math.PI/2),()=>{let z=p("#c6c8bf",3,.92),A=p("#b4c2be",0,.76,.05),V=p("#46545a",0,.88),q=p("#53696d",0,.37,.08),X=69,$=12,ue=5,Y=2.85;t.box(0,-2.5,0,X+1,5,$+2,p("#8a8c7b",3,.98)),t.box(0,ue*Y/2,0,X,ue*Y,$,z);for(let Pe=0;Pe<ue;Pe++){let ze=Pe*Y;t.box(0,ze+1.4,$/2+.07,X-.6,2.42,.12,V),t.box(0,ze+.1,$/2+1.02,X+.7,.2,2.15,z),t.box(0,ze+.79,$/2+1.98,X,.98,.1,A),t.box(0,ze+1.33,$/2+1.99,X,.06,.13,p("#d3d9d5",0,.45,.28));for(let it=-X/2+1.6;it<X/2;it+=3.45)t.box(it,ze+1.4,$/2+.16,2.1,2.25,.03,q),t.box(it+.99,ze+1.4,$/2+.18,.035,2.25,.03,u.metal),t.box(it+1.52,ze+1.4,$/2+1.06,.1,2.58,1.85,z)}for(let Pe of[-X/2,-X*.18,X*.18,X/2])t.box(Pe,ue*Y/2,$/2+1.08,.33,ue*Y,2.3,z);t.box(0,ue*Y+.13,0,X+1.2,.26,$+4.2,z)});for(let z=0;z<13;z++){let A=-74+z*5.6,V=-84+z%3*2.7;en(V,A,7.5+z%4*.9,32140+z,1.1,58,z===2||z===5||z===9)}let Ue=p("#338db0",0,.63,.08),De=p("#ac4c39",0,.68),we=p("#dbb548",0,.6),tt=l(666,235);i.scope(_.compose(tt[0],0,tt[1],.18),()=>{for(let z of[-.55,.55])for(let A of[-.55,.55])i.cylinder([z,.02,A],[z,3.15,A],.045,.045,Ue,8);i.box(0,1.94,0,1.22,.09,1.2,p("#899892",0,.7));for(let z of[-.61,.61])i.cylinder([z,2,-.55],[z,3.03,-.55],.035,.035,De,8),i.cylinder([z,3.03,-.55],[z,3.03,.55],.035,.035,De,8),i.quad([z*.72,1.96,.55],[z*.72,.16,3.45],[z*.72,.34,3.47],[z*.72,2.16,.55],we,3,1);i.quad([-.44,1.97,.55],[.44,1.97,.55],[.44,.16,3.45],[-.44,.16,3.45],we,1,3);for(let z=.28;z<1.97;z+=.27)i.cylinder([-.47,z,-.69],[.47,z,-.69],.026,.026,u.metal,7)});for(let[z,A,V]of[[1171,230,-.54],[1267,303,-.57],[1368,371,-.55]]){let[q,X]=l(z,A);i.scope(_.compose(q,0,X,V),()=>{for(let $=0;$<=5;$++){let ue=($-2.5)*1.05,Y=1+$*.216;i.cylinder([ue,0,0],[ue,Y,0],.032,.032,Ue,8),$<5&&i.cylinder([ue,Y,0],[ue+1.05,Y,0],.028,.028,u.metal,8)}})}let[$e,Tt]=l(480,324);for(let z=0;z<3;z++){let A=$e+(z-1)*.65;i.cylinder([A,0,Tt],[A,2.45,Tt],.038,.038,Ue,8)}i.cylinder([$e-.72,2.45,Tt],[$e+.72,2.45,Tt],.032,.032,u.metal,8);let lt=r(365,75);i.cylinder([lt[0],0,lt[1]],[lt[0],3.5,lt[1]],.075,.075,p("#aab4ad",0,.65,.2),10),i.box(lt[0],3.45,lt[1]+.18,1.8,1.05,.07,p("#e7e7da",3,.9)),i.box(lt[0],3.32,lt[1]+.23,.65,.49,.012,De),i.box(lt[0],3.32,lt[1]+.24,.58,.42,.012,p("#e7e7da"));let rn=[];for(let z=0;z<=24;z++){let A=z/24*w;rn.push([lt[0]+Math.sin(A)*.23,3.02,lt[1]+.56+Math.cos(A)*.23])}i.tube(rn,.016,De,6)}};window.buildFestaWorld=async function(i,e=()=>{}){let{V:t,M:n,Geometry:s,Mesh:r,Atlas:l,material:o,color:h,rng:u,clamp:p,TAU:_}=FestaGL,m=FESTA_DATA,w=u(9212026),y=(a,c)=>a+(c-a)*w(),L=(a,c)=>[(a-320)*.22,(c-290)*.22],S=(a,c,f=0)=>{let E=L(a,c);return[E[0],f,E[1]]},d=new l(512),T=a=>new Promise((c,f)=>{let E=new Image;E.onload=()=>c(E),E.onerror=()=>f(new Error("内蔵テクスチャを読み込めません。")),E.src=a}),I=await T(FESTA_ASSETS.gravel),g=await T(FESTA_ASSETS.grass);e(.08,"地面と建物の素材を準備しています"),d.add("white",(a,c)=>{a.fillStyle="#fff",a.fillRect(0,0,c,c)});function C(a,c,f,E=.25){return d.add(a,(D,F)=>{D.drawImage(c,0,0,F,F);let O=D.getImageData(0,0,F,F),ne=h(f);for(let k=0;k<O.data.length;k+=4){let ie=O.data[k]/255,Te=.82+ie*E;for(let Ee=0;Ee<3;Ee++)O.data[k+Ee]=p(ne[Ee]*255*Te,0,255);O.data[k+3]=255}D.putImageData(O,0,0)})}C("soil",I,"#a19580",.32),C("grass",g,"#727b4d",.55),d.add("concrete",(a,c)=>{a.fillStyle="#efeee6",a.fillRect(0,0,c,c);let f=a.getImageData(0,0,c,c);for(let E=0;E<f.data.length;E+=4){let D=y(-12,6);for(let F=0;F<3;F++)f.data[E+F]+=D}a.putImageData(f,0,0),a.strokeStyle="rgba(119,119,107,.13)",a.lineWidth=1,a.beginPath(),a.moveTo(0,120),a.lineTo(c,120),a.stroke()}),C("asphalt",I,"#555754",.6),d.add("wood",(a,c)=>{a.fillStyle="#b78a57",a.fillRect(0,0,c,c);for(let f=0;f<8;f++){let E=f*64;a.fillStyle=`hsl(${31+y(-3,3)},${34+y(-5,5)}%,${55+y(-6,6)}%)`,a.fillRect(E,0,63,c);for(let F=0;F<35;F++){let O=E+y(1,62);a.strokeStyle=`rgba(73,44,18,${y(.04,.17)})`,a.lineWidth=y(.3,1.3),a.beginPath();for(let ne=0;ne<=c;ne+=16)a.lineTo(O+Math.sin(ne/72+F)*y(.2,1.4),ne);a.stroke()}a.fillStyle="rgba(43,32,24,.20)",a.fillRect(E,0,1,c);let D=f%3*163;a.fillRect(E,D,64,1)}}),d.add("fabric",(a,c)=>{a.fillStyle="#f7f6f0",a.fillRect(0,0,c,c);for(let f=0;f<c;f+=3)a.strokeStyle=f%6?"rgba(98,99,84,.05)":"rgba(255,255,255,.3)",a.beginPath(),a.moveTo(f,0),a.lineTo(f,c),a.stroke(),a.beginPath(),a.moveTo(0,f),a.lineTo(c,f),a.stroke();a.strokeStyle="rgba(154,155,144,.2)",a.lineWidth=2,a.strokeRect(8,8,c-16,c-16)});function b(a=!1){d.add(a?"autumn":"leaf",(c,f)=>{c.clearRect(0,0,f,f);for(let E=0;E<220;E++){let D=y(0,_),F=Math.sqrt(w())*228,O=f/2+Math.cos(D)*F,ne=f/2+Math.sin(D)*F;c.strokeStyle=a?"#6f6541":"#526445",c.lineWidth=1.8,c.beginPath(),c.moveTo(f/2,f*.7),c.quadraticCurveTo(f/2+(O-f/2)*.65,ne+40,O,ne),c.stroke();let k=a?y(12,59):y(72,110);c.fillStyle=`hsl(${k},${y(27,45)}%,${y(27,48)}%)`,c.beginPath(),c.ellipse(O,ne,y(6,11),y(12,23),D+.5,0,_),c.fill(),c.strokeStyle="rgba(208,214,130,.3)",c.lineWidth=.7,c.beginPath(),c.moveTo(O-4,ne-10),c.lineTo(O+4,ne+10),c.stroke()}})}b(!1),b(!0),d.add("bark",(a,c)=>{a.fillStyle="#807565",a.fillRect(0,0,c,c);for(let f=0;f<650;f++){a.strokeStyle=`rgba(${Math.floor(y(30,70))},${Math.floor(y(25,60))},${Math.floor(y(20,50))},${y(.1,.6)})`,a.lineWidth=y(.5,5),a.beginPath();let E=y(0,c),D=y(0,c);a.moveTo(E,D),a.lineTo(E+y(-9,9),D+y(14,120)),a.stroke()}}),d.add("roof",(a,c)=>{a.fillStyle="#a6b2b3",a.fillRect(0,0,c,c);for(let f=0;f<c;f+=32)a.fillStyle="#7c8d91",a.fillRect(f,0,3,c),a.fillStyle="#c7cecd",a.fillRect(f+3,0,2,c)}),d.add("net",(a,c)=>{a.clearRect(0,0,c,c),a.strokeStyle="#b1b4a7",a.lineWidth=3;for(let f=-c;f<c*2;f+=64)a.beginPath(),a.moveTo(f,0),a.lineTo(f+c,c),a.stroke(),a.beginPath(),a.moveTo(f,c),a.lineTo(f+c,0),a.stroke()}),d.add("tire",(a,c)=>{a.fillStyle="#2b2b2a",a.fillRect(0,0,c,c),a.strokeStyle="#484948",a.lineWidth=5;for(let f=0;f<c;f+=27)a.beginPath(),a.moveTo(0,f),a.lineTo(c*.5,f+15),a.lineTo(c,f),a.stroke()}),d.add("cloth",(a,c)=>{a.fillStyle="#eeeadf",a.fillRect(0,0,c,c),a.fillStyle="rgba(83,117,120,.12)";for(let f=0;f<c;f+=40)a.fillRect(f,0,18,c),a.fillRect(0,f,c,18)});let U={F:"#a64c35",S:"#385e76",T:"#4e6c43",P:"#83503e",M:"#c39343",I:"#27595c"},x={};for(let a of[...m.records.filter(c=>!["unplaced","performer","unconfirmed","workshop"].includes(c.kind)),...m.locations])x[a.id]={banner:d.banner(a.id.startsWith("F-")||a.id.startsWith("S-")||a.id.startsWith("T-")?a.id:{HQ:"INFO",GYM:"STAGE",MOBILITY:"RIDE",MEET:"REST",OUTSTAGE:"STAGE",GATE_MAIN:"WELCOME",GATE_WEST:"WELCOME",WC:"WC",EAT2:"REST"}[a.id]||"FESTA",a.id==="MOBILITY"?"モビリティー":a.short,a.id==="S-13"?"子どもくじ抽選会":a.caption,U[a.category]),menu:d.sign(a.id+"-menu",a.short,a.detail,U[a.category],a.id+"   "+(a.status||"予定"))};let N=d.banner("西鎌倉","鎌倉市立西鎌倉小学校","つながりフェスタ＠にしかま2026","#415d60"),G=d.banner("2026","つながりフェスタ＠にしかま","つながる、みつかる、すきになる","#356064"),Z=d.sign("走行エリア","モビリティー",`実走路の中へは入れません。
見学はトラロープの外側から。`,"#a74d38","車両実走路"),R=d.banner("P","みんなの舞台","体育館内・開始予定","#83533c"),K=d.add("schedule",(a,c)=>{a.fillStyle="#fff9ec",a.fillRect(0,0,c,c),a.fillStyle="#5b3e32",a.font="700 29px sans-serif",a.fillText("体育館内 開始予定",24,42),a.font="17px sans-serif",a.fillText("終了時刻は未確認　／　当日変更の可能性あり",24,70),m.schedule.forEach((f,E)=>{let D=112+E*36;a.fillStyle=E%2?"#ffffff":"#f2ebde",a.fillRect(14,D-24,484,34),a.fillStyle="#83533c",a.font="700 20px sans-serif",a.fillText(f.time,23,D),a.fillStyle="#263b38";let F=18;a.font=`${F}px sans-serif`;let O=f.name;for(;a.measureText(O).width>370&&F>10;)a.font=`${--F}px sans-serif`;a.fillText(O,100,D)})}),H=d.add("Entrance panels",(a,c)=>{let f=u(451);a.fillStyle="#33363b",a.fillRect(0,0,c,c);for(let E=0;E<c;E+=5)for(let D=0;D<c;D+=12){let F=40+f()*25;a.fillStyle=`rgb(${F},${F+1},${F+5})`,a.fillRect(D+(E%10?6:0),E,10,3)}}),J=FestaScenery.textures(d,u),fe=d.add("gym-floor",(a,c)=>{a.fillStyle="#aa7549",a.fillRect(0,0,c,c);for(let f=0;f<c;f+=32){a.fillStyle=`hsl(${27+y(-2,2)},${40+y(-5,5)}%,${48+y(-4,4)}%)`,a.fillRect(f+1,0,30,c),a.fillStyle="rgba(71,43,25,.24)",a.fillRect(f,0,1,c);let E=Math.floor(f/32)%4*128+32;a.fillRect(f+1,E,30,1);for(let D=0;D<9;D++)a.fillStyle=`rgba(84,51,27,${y(.025,.075)})`,a.fillRect(f+y(2,29),0,y(.35,1),c)}}),ge=d.add("gym-wall-wood",(a,c)=>{a.fillStyle="#a77b60",a.fillRect(0,0,c,c);for(let f=0;f<c;f+=26)a.fillStyle=`hsl(${24+y(-2,2)},${31+y(-4,4)}%,${47+y(-3,3)}%)`,a.fillRect(f+1,0,24,c),a.fillStyle="rgba(44,27,21,.27)",a.fillRect(f,0,1,c),a.fillStyle="rgba(227,180,128,.15)",a.fillRect(f+3,0,1,c)}),be=a=>Object.assign(o(a,J,.39,.06),{fit:!0}),j=new s,M=new s,Se=new s,Ve=new s,Re=new s,ee={dirt:o("#fff",1,.97),grass:o("#fff",2,.98),wall:o("#dedccf",3,.93),base:o("#a3aaa5",3,.9),asphalt:o("#fff",4,.95),wood:o("#fff",5,.64),metal:o("#a6b0ac",0,.3,.65),whiteMetal:o("#f1f1e8",0,.42,.24),dark:o("#273036",0,.72),glass:be("#c1cece"),black:o("#252928",0,.6),fabric:o("#f9f9f4",6,.85),bark:o("#fff",9,.94),leaf:o("#fff",7,.88),autumn:o("#fff",8,.9),tire:o("#fff",12,.93)},ht=(a,c)=>[33+(a-1334)*.08079070799073343,2.64+(c-886)*.08079070799073343],Ct=[],ye=[],he=[],He=[],ft=[],ke=[];function We(a,c,f,E,D="",F=0){Ct.push({x:a,z:c,w:f,d:E,id:D,r:F})}function en(a,c,f,E,D){let F=L(a,c),O=L(f,E);We((F[0]+O[0])/2,(F[1]+O[1])/2,O[0]-F[0],O[1]-F[1],D)}let{layout:rt}=m,_t=rt.campus;function Pt(a,c,f){let E=!1;for(let D=0,F=f.length-1;D<f.length;F=D++){let O=f[D],ne=f[F];O[1]>c!=ne[1]>c&&a<(ne[0]-O[0])*(c-O[1])/(ne[1]-O[1])+O[0]&&(E=!E)}return E}let gt=0;function dt(a,c,f,E=3){let D=a.map(Ee=>[...Ee]);D.reduce((Ee,Fe,et)=>{let Wt=D[(et+1)%D.length];return Ee+Fe[0]*Wt[1]-Wt[0]*Fe[1]},0)<0&&D.reverse();let O=D.map((Ee,Fe)=>Fe),ne=.007+gt++*.011,k=(Ee,Fe,et)=>(Fe[0]-Ee[0])*(et[1]-Ee[1])-(Fe[1]-Ee[1])*(et[0]-Ee[0]),ie=0;function Te(Ee,Fe,et){c.tri([Ee[0],ne,Ee[1]],[et[0],ne,et[1]],[Fe[0],ne,Fe[1]],f,[[Ee[0]/E,Ee[1]/E],[et[0]/E,et[1]/E],[Fe[0]/E,Fe[1]/E]])}for(;O.length>3&&ie++<600;){let Ee=!1;for(let Fe=0;Fe<O.length;Fe++){let et=O[(Fe-1+O.length)%O.length],Wt=O[Fe],It=O[(Fe+1)%O.length],bt=D[et],Ge=D[Wt],ct=D[It];if(!(k(bt,Ge,ct)<1e-4)&&!O.some(Dt=>Dt!==et&&Dt!==Wt&&Dt!==It&&k(bt,Ge,D[Dt])>=0&&k(Ge,ct,D[Dt])>=0&&k(ct,bt,D[Dt])>=0)){Te(bt,Ge,ct),O.splice(Fe,1),Ee=!0;break}}if(!Ee)break}O.length===3&&Te(...O.map(Ee=>D[Ee]))}j.plane(0,-.1,0,1100,1100,ee.grass,460,460),dt(_t,j,ee.asphalt,.7);let Ot=[[[1257,2090],[1354,2058],[1451,2011],[1544,1960],[1620,1919],[1690,1848],[1671,1876],[1656,1949],[1586,1998],[1487,2045],[1388,2088],[1270,2124]],[[1567,1835],[1641,1781],[1690,1848],[1620,1919],[1592,1930],[1579,1884],[1585,1864]]].map(a=>a.map(c=>ht(...c)));for(let a of Ot)dt(a,j,ee.asphalt,.8);function Gt(a,c,f,E){let D=E[0]-f[0],F=E[1]-f[1],O=p(((a-f[0])*D+(c-f[1])*F)/(D*D+F*F),0,1);return Math.hypot(a-f[0]-D*O,c-f[1]-F*O)}let yt=(a,c,f=0)=>Ot.some(E=>Pt(a,c,E)||E.some((D,F)=>Gt(a,c,D,E[(F+1)%E.length])<f)),Nt=m.locations.find(a=>a.id==="GATE_MAIN").pos,te=rt.mainGateApproach,Bt=(a,c)=>Gt(a,c,te,[2*Nt[0]-te[0],2*Nt[1]-te[1]])<2.8,St=[L(64,146),L(147,146),L(175,83),L(286,78),L(382,92),L(491,128),L(575,167),L(575,300),L(470,302),L(469,412),L(430,431),L(425,407),L(260,408),L(223,418),L(170,413),L(99,420),L(98,388),L(66,388),L(64,350)];dt(St,j,ee.dirt,1.35);let B=[[1328,1903],[1361,1894],[1407,1870],[1457,1850],[1510,1835],[1564,1837],[1571,1852],[1514,1858],[1465,1873],[1416,1892],[1370,1914],[1328,1922]].map(a=>ht(...a)),v=[[1390,1910],[1416,1892],[1465,1873],[1514,1858],[1571,1852],[1579,1867],[1573,1885],[1585,1926],[1535,1952],[1480,1974],[1440,1960]].map(a=>ht(...a));dt(B,j,o("#d6ccaf",3,.98),2),dt(v,j,o("#8a936e",2,.98),2);let se=o("#a8a497",3,.92);for(let a=0;a<v.length;a++){let c=v[a],f=v[(a+1)%v.length],E=f[0]-c[0],D=f[1]-c[1];M.scope(n.compose((c[0]+f[0])/2,0,(c[1]+f[1])/2,-Math.atan2(D,E)),()=>{M.box(0,.1,0,Math.hypot(E,D),.18,.12,se)})}let le=[["#5d7140",.42],["#738551",.32],["#506542",.45]];for(let a=0;a<v.length-1;a++){let[c,f]=v[a],E=ht(1502,1910),[D,F]=le[a%le.length],O=[c+(E[0]-c)*.23,f+(E[1]-f)*.23];Pt(...O,v)&&M.sphere(O[0],F,O[1],.68,F,.52,o(D,0,.95),10,7)}e(.18,"配置図から校舎と会場を組み立てています");function xe(a,c,f,E,D=10.65,F="校舎",O=!0){let ne=L(a,c),k=L(f,E),ie=(ne[0]+k[0])/2,Te=(ne[1]+k[1])/2,Ee=k[0]-ne[0],Fe=k[1]-ne[1];if(He.push({x:ie,z:Te,w:Ee,d:Fe,h:D,label:F}),We(ie,Te,Ee+.18,Fe+.18,F),j.box(ie,D/2,Te,Ee,D,Fe,ee.wall),j.box(ie,.24,Te,Ee+.15,.48,Fe+.15,ee.base),j.box(ie,D+.12,Te,Ee+.55,.24,Fe+.55,o("#c6c3b6",0,.86)),!O)return;let et=D>12?4:D>9?3:2,Wt=(D-.35)/et;for(let It=0;It<4;It++){let bt=It%2?Fe:Ee,Ge=It%2?Ee:Fe;M.scope(n.compose(ie,0,Te,It*Math.PI/2),()=>{let ct=Math.max(1,Math.floor((bt-.9)/4.3)),Dt=(bt-.9)/ct;for(let kt=0;kt<et;kt++){let ut=1.62+kt*Wt,zt=kt===0?1.8:1.16;M.box(0,kt*Wt+.45,Ge/2+.015,bt,.035,.026,o("#b4b3a7",0,.95));for(let on=0;on<ct;on++){let Xt=-bt/2+.45+(on+.5)*Dt,fn=Dt*.84;M.box(Xt,ut,Ge/2+.024,fn+.12,zt+.12,.06,o("#aaa99f",0,.6,.25)),M.box(Xt,ut,Ge/2+.06,fn,zt,.025,be((on+kt)%4===0?"#a9b8b8":"#c5cecb"));for(let ws=1;ws<4;ws++)M.box(Xt-fn/2+ws*fn/4,ut,Ge/2+.085,.038,zt,.032,ee.metal);M.box(Xt,ut-zt/2-.035,Ge/2+.11,fn+.17,.075,.17,o("#bdbdb3",0,.85)),kt===0&&M.box(Xt,ut+.2,Ge/2+.087,fn,.037,.03,ee.metal)}}for(let kt=0;kt<=ct;kt+=2){let ut=-bt/2+.45+kt*Dt;M.box(ut,D/2,Ge/2+.085,.22,D,.17,ee.wall)}for(let kt of[-1,1])M.cylinder([kt*(bt/2-.2),.35,Ge/2+.19],[kt*(bt/2-.2),D-.2,Ge/2+.19],.045,.045,o("#a9aaa0",0,.75),8)})}}xe(95.4,436.56,329.52,489.72,13.5),xe(30.48,411.36,82.56,541.56,10.65),xe(67.32,389.4,95.4,436.56,10.65),xe(329.52,430.32,425.28,516.36,13.5),xe(307.92,489.72,329.52,516.36,7.2),xe(311.52,535.08,390.72,603.6,7.9,"昇降口",!1),xe(103.44,608.28,401.04,666.1,10.7);{let a=L(111,436.56);M.box(a[0],6.75,a[1]-.16,6.1,13.5,.32,ee.wall);for(let c of[3.2,6.5,9.8,13.4])M.box(a[0],c,a[1]-.36,6.55,.19,.47,ee.wall);M.box(a[0],1.3,a[1]-.34,4.7,2.4,.05,ee.glass),M.box(a[0],2.88,a[1]-1,6.4,.2,2,ee.wall)}{let a=L(238,436.56),c=o("#693f30",0,.78),f=o("#9e9f94",0,.72,.18);M.box(a[0],1.25,a[1]-.035,6.3,2.5,.08,c),M.box(a[0],2.8,a[1]-.7,8.8,.18,1.5,o("#724b3e",0,.8));for(let E of[-4.1,4.1])M.box(a[0]+E,1.4,a[1]-1.2,.23,2.8,.23,ee.wall);for(let E of[-2.75,-1.38,0,1.38,2.75])M.box(a[0]+E,1.32,a[1]-.095,.045,2.24,.07,f),M.box(a[0]+E,2.22,a[1]-.13,1.3,.055,.05,f);for(let E of[-1.1,1.1])M.box(a[0]+E,1.12,a[1]-.15,.05,.32,.06,f);M.box(a[0],.055,a[1]-1.45,9,.11,2.55,o("#aeada1",3,.95))}function Le(a,c,f,E=0){M.scope(n.compose(a,c,f,E),()=>{M.cylinder([0,0,-.03],[0,0,.06],.48,.48,ee.whiteMetal,36),M.cylinder([0,0,.062],[0,0,.07],.43,.43,o("#efefdf"),36);for(let D=0;D<12;D++){let F=D/12*_;M.cylinder([Math.sin(F)*.34,Math.cos(F)*.34,.085],[Math.sin(F)*.38,Math.cos(F)*.38,.085],.01,.01,ee.dark,5)}M.cylinder([0,0,.095],[.07,.27,.095],.017,.017,ee.dark,6),M.cylinder([0,0,.1],[.27,-.1,.1],.013,.013,ee.dark,6)})}{let a=L(365,430.2);Le(a[0],6.8,a[1]-.06,Math.PI)}{let a=L(391,566);M.scope(n.compose(a[0]+.06,0,a[1],Math.PI/2),()=>{let c=o("#e1e0d4",3,.92),f=o("#ffffff",H,.95),E=2.1,D=.22,F=-.85;M.box(0,5.5,.93,14.4,4.5,2.34,c),M.box(-3.92,5.59,E+.045,5.35,3.05,.06,f),M.box(3.14,5.59,E+.045,6.91,3.05,.06,f),M.box(0,7.84,.96,14.7,.2,2.52,c),M.box(0,3.28,.94,14.4,.3,2.32,c),M.box(0,.16,1.18,14.5,.2,2.88,o("#aaa99e",3,.9)),M.box(0,1.65,D-.08,13.65,2.92,.06,o("#252e2c",0,.93));let O=o("#b4b9b4",0,.42,.38),ne=o("#56665f",0,.3,.15);for(let k=0;k<10;k++){let ie=-6.08+k*1.35;M.box(ie,1.5,D,1.28,2.25,.035,ne),M.box(ie,2.85,D,1.28,.37,.035,o("#777e70",0,.36)),M.box(ie-.66,1.65,D+.045,.045,2.9,.055,O);for(let Te of[.38,1.18,2.64,3.06])M.box(ie,Te,D+.045,1.34,.045,.055,O);k%2===0&&(M.box(ie+.46,1.2,D+.105,.025,.32,.035,O),M.box(ie+.46,1.02,D+.075,.12,.025,.08,O))}M.box(6.74,1.65,D+.045,.045,2.9,.055,O);for(let k of[-6.91,F,6.91])M.box(k,1.71,E-.29,.58,3.08,.58,c),M.box(k,.23,E-.29,.67,.15,.67,o("#b7b7aa",3,.94));for(let k of[-6.9,6.9])M.box(k,1.74,1.08,.28,3.04,1.88,c);for(let k of[-5.25,-2.65,1.55,4.85])M.box(k,3.115,1.16,.38,.045,.26,o("#50534b")),M.box(k,3.086,1.16,.29,.017,.17,o("#e7e3c5",0,.6,0,.25));for(let k=0;k<3;k++)M.box(0,.03+k*.05,3.25-k*.38,14.7,.06+k*.1,.4,o("#a9a79b",3,.9));Le(F,3.6,E+.08,0)})}{let a=L(204,420),c=o("#919b94",0,.58,.21),f=o("#a9aea5",0,.82);j.box(a[0],1.8,a[1],8.9,3.6,5.3,ee.wall),j.box(a[0],3.66,a[1],9.15,.18,5.55,o("#919b94",10)),We(a[0],a[1],9,5.4,"用具庫");for(let E of[-1,1]){M.box(a[0]+E*2.12,1.58,a[1]-2.69,4.08,2.95,.07,f),M.box(a[0]+E*2.12,1.59,a[1]-2.75,4,.035,.055,c);for(let D=-1;D<=1;D++)M.box(a[0]+E*2.12+D*1.17,1.58,a[1]-2.75,.025,2.88,.045,c);M.box(a[0]+E*3.5,1.34,a[1]-2.79,.045,.26,.045,c)}M.box(a[0],3.16,a[1]-2.81,8.75,.22,.12,c);for(let E of[-3.9,0,3.9])M.cylinder([a[0]+E,3.58,a[1]-2.64],[a[0]+E,.08,a[1]-2.64],.045,.045,c,8);M.box(a[0],1.3,a[1]+2.68,3,2.6,.08,o("#79857f",0,.46,.35))}function Ae(a,c,f=0){let E=L(a,c);M.scope(n.compose(E[0],0,E[1],f),()=>{M.box(0,.63,0,2.9,.33,.52,ee.base),M.box(0,.83,0,2.96,.08,.6,o("#c3cdca",0,.23,.7));for(let D=0;D<6;D++){let F=-1.22+D*.49;M.box(F,.84,0,.35,.015,.33,o("#697e81",0,.18,.65)),M.cylinder([F,.81,-.19],[F,1.15,-.19],.018,.018,ee.metal,7),M.cylinder([F,1.15,-.19],[F,1.15,.02],.017,.017,ee.metal,7)}for(let D of[-1.1,1.1])M.box(D,.35,0,.13,.7,.34,ee.base)})}Ae(251,414),Ae(42,400);{let a=L(401,538),c=o("#ac7049",0,.94);M.cylinder([a[0],.12,a[1]],[a[0],.75,a[1]],1.25,1.25,c,36),M.cylinder([a[0],.75,a[1]],[a[0],.82,a[1]],1.29,1.29,o("#ada99a"),36),M.cylinder([a[0],.825,a[1]],[a[0],.84,a[1]],1.1,1.1,ee.base,36);for(let f=0;f<24;f++){let E=f/24*_;M.cylinder([a[0]+1.252*Math.sin(E),.12,a[1]+1.252*Math.cos(E)],[a[0]+1.252*Math.sin(E),.74,a[1]+1.252*Math.cos(E)],.009,.009,o("#d4b99a"),5)}for(let f of[-.48,.48])M.cylinder([a[0]+f,.84,a[1]],[a[0]+f,1.18,a[1]],.025,.025,ee.metal,7),M.cylinder([a[0]+f,1.18,a[1]],[a[0]+f+.16,1.18,a[1]],.025,.025,ee.metal,7)}let pe=470,ve=580,Ne=302,nt=504,re=L(pe,Ne),me=L(ve,nt),_e=[(re[0]+me[0])/2,(re[1]+me[1])/2],Oe=me[0]-re[0],ot=me[1]-re[1],W=L(500,468)[1],Ce=.45,Me=W-re[1],Ue=(re[1]+W)/2;j.box(_e[0],Ce/2,_e[1],Oe,Ce,ot,o("#b7b9b3",3,.94)),j.plane(_e[0],Ce+.045,Ue,Oe,Me,o("#ffffff",fe,.4),Oe/4,Me/4),j.plane(_e[0],Ce+.044,(W+me[1])/2,Oe,me[1]-W,o("#c9c5b9",0,.88),Oe/4,2),He.push({x:_e[0],z:_e[1],w:Oe,d:ot,h:10,label:"体育館",gym:!0}),j.box(me[0],2.1,_e[1],.35,4.2,ot,ee.wall),j.box(me[0],8.38,_e[1],.35,.64,ot,ee.wall),We(me[0],_e[1],.4,ot,"体育館東壁"),j.box(_e[0],4.35,re[1],Oe,8.7,.35,ee.wall),We(_e[0],re[1],Oe,.4,"体育館壁");let De=re[0]+Oe*.38,we=2.25,tt=Ce,$e=o("#e1dfd5",3,.92),Tt=re[0]+Oe*77/309,lt=re[0]+Oe*156/309,rn=re[0]+Oe*202/309,z=re[0]+Oe*233/309,A=W+(me[1]-W)*27/66,V=(re[0]+Tt)/2,q=(z+me[0])/2,X=1.1,$=[[V-X,V+X],[De-we,De+we],[q-X,q+X]],ue=[],Y=re[0];for(let[a,c]of $)a>Y&&ue.push([Y,a]),Y=c;Y<me[0]&&ue.push([Y,me[0]]);let Pe=[[re[0]+2,re[0]+3.5],[lt+.8,lt+1.8],[rn+.6,rn+1.55],[z+1.7,z+3.2]],ze=[Pe[0],[De-we,De+we],...Pe.slice(1)],it=[],Ie=re[0];for(let[a,c]of ze)a>Ie&&it.push([Ie,a]),Ie=c;Ie<me[0]&&it.push([Ie,me[0]]);for(let[a,c]of it)j.box((a+c)/2,2.1,me[1],c-a,4.2,.35,ee.wall),We((a+c)/2,me[1],c-a,.4,"体育館南壁");for(let[a,c]of Pe){let f=(a+c)/2,E=c-a;j.box(f,.58,me[1],E,1.16,.35,ee.wall),j.box(f,3.45,me[1],E,1.5,.35,ee.wall),M.box(f,1.93,me[1]+.045,E-.12,1.52,.055,be("#aab9b7")),We(f,me[1],E,.4,"体育館南壁の窓")}j.box(De,3.6,me[1],we*2,1.2,.35,ee.wall),j.box(_e[0],6.45,me[1],Oe,4.5,.35,ee.wall);for(let[a,c]of ue)j.box((a+c)/2,2.1,W,c-a,4.2,.35,ee.wall),We((a+c)/2,W,c-a,.4,"体育館床の出口側の壁");let Ke=o("#f4f3ed",0,.62,.08),qe=o("#e2e2da",0,.54,.24);for(let a of[V,q])j.box(a,3.6,W,X*2,1.2,.35,ee.wall),j.box(a,1.51,W-.095,X*2-.12,3.02,.11,Ke),M.box(a,1.52,W-.17,X*2+.06,3.1,.045,qe),M.box(a,1.52,W-.205,X*2-.12,2.98,.025,Ke),M.box(a+(a<_e[0]?.78:-.78),1.4,W-.24,.025,.23,.05,ee.metal),We(a,W,X*2,.4,"出演者控室の閉じた扉");j.box(De,3.6,W,we*2,1.2,.35,ee.wall),j.box(_e[0],6.37,W,Oe,4.34,.35,ee.wall),j.tri([re[0],8.54,W],[_e[0],9.97,W],[me[0],8.54,W],ee.wall);function xt(a,c,f){j.box(a,tt+1.6,(c+f)/2,.16,3.2,f-c,$e),We(a,(c+f)/2,.18,f-c,"体育館前室の壁")}function Lt(a,c,f){j.box((a+c)/2,tt+1.6,f,c-a,3.2,.16,$e),We((a+c)/2,f,c-a,.18,"体育館前室の壁")}xt(Tt,W+.22,me[1]),xt(lt,A,me[1]),xt(rn,W+.22,me[1]),xt(z,W+.22,me[1]),Lt(lt,rn,A);let gn=o("#a69b86",0,.82),Sn=(A+me[1])/2,ci=me[1]-A-.55;for(let a of[Tt+.36,lt-.48]){for(let c of[.28,.7,1.12])M.box(a,Ce+c,Sn,.56,.07,ci,gn);for(let c of[-1,1])M.box(a+c*.27,Ce+.7,Sn,.045,1.1,ci,gn);We(a,Sn,.56,ci,"下駄箱")}[["出演者控室（小）",(re[0]+Tt)/2],["WC（M）",(lt+rn)/2],["WC（W）",(rn+z)/2],["出演者控室（大）",(z+me[0])/2]].forEach(([a,c],f)=>{let E=d.add("gym-room-"+f,(D,F)=>{D.fillStyle="#f5f3eb",D.fillRect(0,0,F,F),D.fillStyle="#273b39",D.textAlign="center",f===0||f===3?(D.font="700 78px sans-serif",D.fillText("出演者控室",F/2,218),D.font="700 100px sans-serif",D.fillText(f===0?"（小）":"（大）",F/2,350)):(D.font="700 112px sans-serif",D.fillText(a,F/2,296))});Re.scope(n.compose(c,0,me[1]-.24,Math.PI),()=>{Re.sign(0,3.35,0,f===0||f===3?2.2:1.35,.36,E,!0)})});let hi=[[335,344],[421,433]],Ti=[[302,335],[344,421],[433,504]];for(let[a,c]of Ti){let f=L(pe,a),E=L(pe,c);j.box(re[0],2.1,(f[1]+E[1])/2,.36,4.2,E[1]-f[1],ee.wall),We(re[0],(f[1]+E[1])/2,.4,E[1]-f[1],"体育館西壁")}j.box(re[0],8.38,_e[1],.36,.64,ot,ee.wall);for(let[a,c]of hi){let f=L(pe,a),E=L(pe,c);j.box(re[0],3.49,(f[1]+E[1])/2,.36,1.42,E[1]-f[1],ee.wall)}let P=be("#aab9b7"),Q=o("#b7b9ae",0,.53,.3);for(let a of[-1,1]){let c=_e[0]+a*Oe/2;M.box(c,6.13,_e[1],.03,3.86,ot-.75,P);for(let f of[4.2,5.05,6.1,7.12,8.05])M.box(c,f,_e[1],.16,.065,ot,Q);for(let f=re[1]+.45;f<me[1];f+=1.35)M.box(c,6.13,f,.17,3.9,.055,Q);for(let f=re[1]+.5;f<me[1];f+=5.4)a<0&&hi.some(([E,D])=>f>L(pe,E)[1]-.2&&f<L(pe,D)[1]+.2)||M.box(c,4.3,f,.45,8.6,.33,ee.wall);for(let f=re[1]+.5;f<me[1]-.4;f+=.55)M.box(c-a*.3,4.9,f,.035,1.2,.03,ee.whiteMetal);M.box(c-a*.3,5.5,_e[1],.05,.05,ot,ee.whiteMetal)}let de=o("#ffffff",ge,.78),ae=o("#966d50",0,.76);for(let a of[-1,1])for(let[c,f]of a<0?Ti:[[302,504]]){let E=L(pe,c)[1],D=L(pe,f)[1],F=_e[0]+a*(Oe/2-.205);M.box(F,2.14,(E+D)/2,.028,4.03,D-E,de),M.box(F-a*.04,4.14,(E+D)/2,.045,.11,D-E,ae);for(let O=E+.36;O<D;O+=.75)M.box(F-a*.03,2.1,O,.035,3.94,.026,ae);M.cylinder([F-a*.35,5.2,E],[F-a*.35,5.2,D],.025,.025,ee.whiteMetal,8)}let oe=["#777a4f","#8da6ab","#938270","#596f4c","#be9f7b","#765b4b"];for(let a=0;a<30;a++){let c=rt.exhibitsZ+(a%15-7)*.597,f=Ce+1.55+(.5-Math.floor(a/15))*(.21+.15);M.box(me[0]-.369,f,c,.012,.21,.297,ee.fabric),M.box(me[0]-.378,f+.028,c,.008,.117,.261,o(oe[a%6])),M.box(me[0]-.383,f-.045,c,.008,.061,.261,o(oe[(a*3+1)%6])),M.sphere(me[0]-.389,f-.009,c+.038,.007,.043,.049,o(oe[(a+3)%6]),8,6)}for(let a=0;a<4;a++){let c=rt.exhibitsZ+(a-1.5)*2.49,f=Ce+1.55;M.box(re[0]+.265,f,c,.012,1.17,2.37,ee.fabric);for(let E=0;E<6;E++){let D=o(["#739369","#7b9a9a","#ba8461"][E%3]);M.box(re[0]+.274,f+(.27-E*.09)*1.5,c+.36,.01,.027,1.14,D),M.sphere(re[0]+.274,f+(.19-E*.076)*1.5,c-.63,.008,.0525,.219,D,8,6)}}let Xe=me[0]-1.3,Je=W-1.3,Ye=o("#798c92",6,.95);M.scope(n.compose(Xe,Ce,Je,0),()=>{Gn(M,1.75,1.75,Ye,2,2.23);for(let a of[-1,1])M.box(a*.875,1.02,0,.022,1.95,1.75,Ye),M.box(0,1.02,a*.875,1.75,1.95,.022,Ye)}),We(Xe,Je,1.75,1.75,"授乳スペース");let Qe=m.locations.find(a=>a.id==="NURSING");Qe.pos=[Xe,Je],Qe.approach=[Xe-2,Je],Qe.marker=[Xe,Ce+2.45,Je],he.push(Qe);for(let[a,c]of hi){let f=L(pe,a)[1],E=L(pe,c)[1];M.box(re[0]+.205,3.49,(f+E)/2,.035,1.42,E-f,de)}let je=W-.205;for(let[a,c]of ue)M.box((a+c)/2,1.55,je,c-a,2.94,.035,de);M.box(_e[0],3.57,je,Oe,1.1,.035,de);for(let a=re[0]+.38;a<me[0]-.2;a+=.53){let c=$.some(([f,E])=>a>=f&&a<=E);M.box(a,c?3.57:2.1,je-.028,.022,c?1.02:3.96,.02,ae)}let Mt=o("#e6e2d8",0,.76),Rt=o("#24775f",0,.74,.04);for(let a of[-1,1])M.box(De+a*2.25,1.52,je-.04,.11,3.04,.09,Mt);M.box(De,3.02,je-.04,4.6,.12,.09,Mt);let st=o("#f4f3ed",0,.64,.08);for(let a of[-1,1])M.box(De+a*(we-.11),1.51,W+.67,.08,2.98,1.28,st),M.box(De+a*(we-.17),1.44,W+.25,.035,.27,.05,ee.metal);for(let a of[-4.8,0,4.8]){let c=_e[0]+a;M.box(c,6,je-.02,1.35,2.4,.05,Mt),M.box(c,6,je-.055,1.21,2.25,.025,Rt),M.box(c-.35,6,je-.073,.08,2.19,.015,o("#6eb49a",0,.79,.02))}let qt=o("#8f9693",10,.78,.12),cn=o("#e8e6dc",0,.96);for(let a of[-1,1]){let c=_e[0]+a*(Oe/2+.4);Ve.quad([_e[0],10.15,re[1]-.4],[_e[0],10.15,me[1]+.4],[c,8.72,me[1]+.4],[c,8.72,re[1]-.4],qt,ot/3,4),Ve.quad([_e[0],9.97,re[1]],[c,8.54,re[1]],[c,8.54,me[1]],[_e[0],9.97,me[1]],cn,1,1)}for(let a of[re[1],me[1]])j.tri([re[0],8.7,a],[_e[0],10.15,a],[me[0],8.7,a],ee.wall);for(let a=re[1]+3;a<me[1]-1;a+=5.4)for(let c of[-7,-2.3,2.3,7]){let f=9.93-Math.abs(c)/(Oe/2)*1.43;Ve.cylinder([_e[0]+c,f-.07,a],[_e[0]+c,f-.01,a],.25,.25,ee.whiteMetal,20),Ve.disk(_e[0]+c,f-.085,a,.215,o("#fff9e4",0,.9,0,.8),20)}let Kt=o("#a8784f",0,.58),jt=o("#391722",6,.94),xn=o("#c39736",0,.47,.17),Be=re[1]+4.03,hn=re[1]+2.14;for(let a of[-1,1]){let c=Oe/2-6.12,f=_e[0]+a*(6.12+c/2);j.box(f,4.35,Be,c,8.7,.35,ee.wall),We(f,Be,c,.4,"体育館壁"),M.box(f,2.1,Be+.21,c,4.16,.05,de);for(let E=f-c/2+.36;E<f+c/2;E+=.5)M.box(E,2.1,Be+.25,.023,4.08,.026,ae)}j.box(_e[0],8.2,Be,12.24,1,.35,ee.wall),j.box(_e[0],Ce+.55,re[1]+2.1,11,1.1,4,o("#aa7649",fe,.52)),We(_e[0],re[1]+2.1,11,4.2,"常設舞台・使用せず"),M.box(_e[0],3.81,hn,11.2,5.46,.11,jt);for(let a=0;a<32;a++){let c=_e[0]-5.42+a*.35;M.cylinder([c,1.1,hn+.08],[c,6.49,hn+.08],.075,.075,o(a%3?"#421925":"#572331",6,.96),7)}for(let a of[1.1,6.48])M.box(_e[0],a,hn+.17,11.18,.085,.1,xn);for(let a of[-1,1])M.box(_e[0]+a*5.86,4.05,Be,.73,6.89,.45,Kt),M.box(_e[0]+a*5.49,3.79,(hn+Be)/2,.22,5.95,Be-hn,Kt);M.box(_e[0],7.46,Be,12.45,.66,.45,Kt),M.box(_e[0],6.89,Be+.23,11.12,.55,.07,o("#4a1a28",0,.94)),M.quad([_e[0],7.24,Be+.28],[_e[0]-.25,6.97,Be+.28],[_e[0],6.7,Be+.28],[_e[0]+.25,6.97,Be+.28],xn),M.box(_e[0],1,Be+.11,11.1,1.1,.15,de);for(let a of[-1,1])M.box(_e[0]+a*8.25,2.55,Be+.29,3.2,.92,.06,de);Re.sign(_e[0]+8.25,2.55,Be+.34,3,.62,R);for(let a of[-1,1])for(let c of[re[1]+20,re[1]+33,re[1]+46])M.box(_e[0]+a*(Oe/2-.245),6.03,c,.035,2.9,2.4,o("#27443b",6,.9));for(let a of[-1,1])M.cylinder([_e[0]+a*6,.05,re[1]+5],[_e[0]+a*6,5.3,re[1]+5],.045,.045,ee.metal,8);function wt(a,c,f,E,D,F=.066+Ce){let O=f[0]-c[0],ne=f[1]-c[1],k=Math.hypot(O,ne),ie=-ne/k*E/2,Te=O/k*E/2;a.quad([c[0]-ie,F,c[1]-Te],[c[0]+ie,F,c[1]+Te],[f[0]+ie,F,f[1]+Te],[f[0]-ie,F,f[1]-Te],D,k,1)}for(let a of[_e[0]-8.2,_e[0]+8.2])wt(M,[a,re[1]+6],[a,W-2],.047,o("#f5ede3"));for(let a of[re[1]+6,Ue,W-2])wt(M,[_e[0]-8.2,a],[_e[0]+8.2,a],.047,o("#f5ede3"));for(let a of[_e[0]-6.8,_e[0]+6.8])wt(M,[a,re[1]+13],[a,W-3],.036,o("#293239"),.068+Ce);for(let a of[re[1]+13,W-3])wt(M,[_e[0]-6.8,a],[_e[0]+6.8,a],.036,o("#293239"),.068+Ce);for(let a of[_e[0]-9.2,_e[0]+9.2])wt(M,[a,re[1]+16],[a,W-4],.038,o("#2f7795"),.07+Ce);let Dn=L(469.65,427);Re.scope(n.compose(Dn[0]-.12,0,Dn[1],-Math.PI/2),()=>{Re.sign(0,2.94,0,3.5,.75,x.GYM.banner),Re.sign(3.7,1.55,.1,1.08,1.65,K)}),e(.3,"テント・キッチンカー・ブースの内容を配置しています");function dn(a,c,f,E=0,D="#66746c",F=0){a.scope(n.compose(c,F,f,E),()=>{let O=o("#a5aca8",0,.32,.5),ne=o(D,6,.82);a.box(0,.43,0,.42,.055,.39,ne),a.box(0,.7,-.18,.43,.3,.045,ne);for(let k of[-.17,.17])a.cylinder([k,.04,-.15],[k,.86,-.18],.016,.016,O,6),a.cylinder([k,.04,.21],[k,.44,.1],.016,.016,O,6),a.cylinder([k,.05,-.16],[k,.47,.15],.014,.014,O,6);a.cylinder([-.19,.18,-.14],[.19,.18,-.14],.012,.012,O,6)})}function wn(a,c,f,E=1.8,D=.72,F=0,O=!0,ne=!1){a.scope(n.compose(c,0,f,F),()=>{a.box(0,.73,0,E,.07,D,O?o("#f2ede1",13,.9):o("#d5c8af",5,.7));for(let k of[-E*.36,E*.36])a.cylinder([k,.06,-D*.34],[k,.71,D*.32],.022,.022,ee.metal,7),a.cylinder([k,.06,D*.34],[k,.71,-D*.32],.022,.022,ee.metal,7);if(a.cylinder([-E*.38,.35,0],[E*.38,.35,0],.021,.021,ee.metal,7),O)for(let k of[-1,1])a.box(0,.6,k*D/2,E,.25,.016,o("#eeeadf",6,.94))}),ne&&We(c,f,Math.abs(Math.cos(F))*E+Math.abs(Math.sin(F))*D,Math.abs(Math.sin(F))*E+Math.abs(Math.cos(F))*D,"table")}let Ei=ht(1050.5,871.5);for(let a=0;a<4;a++)for(let c=0;c<4;c++){let f=Ei[0]+(c-1.5)*2.62,E=Ei[1]+(a-1.5)*2.42;wn(M,f,E,1.65,.7,0,!0,!0);for(let D of[-1,1])for(let F=0;F<3;F++){let O=f+(F-1)*.53,ne=E+D*.71;dn(M,O,ne,D===-1?0:Math.PI,"#6f7970"),ke.push({x:O,z:ne,yaw:D===-1?0:Math.PI})}}let Ht=ht(1185.5,1577.5);for(let a=0;a<3;a++){wn(M,Ht[0],Ht[1]+(a-1)*2.2,1.8,.65,0,!0,!0);for(let c of[-1,1])for(let f=0;f<3;f++){let E=Ht[0]+(f-1)*.57,D=Ht[1]+(a-1)*2.2+c*.68,F=c<0?0:Math.PI;dn(M,E,D,F),ke.push({x:E,z:D,yaw:F,eat2:!0})}}for(let a=0;a<6;a++)for(let c=0;c<12;c++){let f=_e[0]+(c-5.5)*.64+(c<6?-.7:.7),E=re[1]+18.5+a*.92;dn(M,f,E,Math.PI,"#566a68",Ce+.05),ke.push({x:f,z:E,yaw:Math.PI,gym:!0})}for(let a=0;a<6;a++)for(let c of[-2,-1,12,13]){let f=_e[0]+(c-5.5)*.64+(c<6?-.7:.7),E=re[1]+18.5+a*.92;dn(M,f,E,Math.PI,"#566a68",Ce+.05),ke.push({x:f,z:E,yaw:Math.PI,gym:!0,addedGymSeat:!0})}for(let a=6;a<8;a++)for(let c=0;c<16;c++){let f=_e[0]+(c-7.5)*.64+(c<8?-.7:.7),E=re[1]+18.5+a*.92;dn(M,f,E,Math.PI,"#566a68",Ce+.05),ke.push({x:f,z:E,yaw:Math.PI,gym:!0,addedGymSeat:!0})}function sn(a,c,f,E,D=0){a.scope(n.compose(c,0,f,D),()=>{a.cylinder([-.4,.04,-.15],[-.35,1.29,0],.023,.023,ee.wood,6),a.cylinder([.4,.04,-.15],[.35,1.29,0],.023,.023,ee.wood,6),a.cylinder([-.4,.04,-.48],[-.35,1.29,0],.023,.023,ee.wood,6),a.cylinder([.4,.04,-.48],[.35,1.29,0],.023,.023,ee.wood,6),a.sign(0,.85,.03,.7,.94,E,!0)})}function Gn(a,c,f,E,D=2.18,F=3.16){let O=[[-c/2,D,-f/2],[-c/2,D,f/2],[c/2,D,f/2],[c/2,D,-f/2]],ne=[0,F,0];for(let k=0;k<4;k++){let ie=O[k],Te=O[(k+1)%4],Ee=(Fe,et)=>{let Wt=t.add(t.mul(ie,1-Fe),t.mul(Te,Fe)),It=t.add(t.mul(Wt,1-et),t.mul(ne,et));return It[1]-=.052*Math.sin(Fe*Math.PI)*Math.sin(et*Math.PI),It};for(let Fe=0;Fe<10;Fe++)for(let et=0;et<8;et++){let Wt=Fe/10,It=et/8,bt=Ee(Wt,It),Ge=Ee((Fe+1)/10,It),ct=Ee((Fe+1)/10,(et+1)/8),Dt=Ee(Wt,(et+1)/8);a.quad(bt,Ge,ct,Dt,E,1,1)}a.quad(ie,[ie[0],D-.2,ie[2]],[Te[0],D-.2,Te[2]],Te,E,1,1)}}function Zt(a,c){let f=c.id,E=c.category,D=f==="F-1"||f==="F-9",F=f==="F-6"||f==="F-8",O=f==="T-12",ne=f==="T-2";if(D){for(let k=0;k<9;k++){let ie=-.8+k%5*.23,Te=.3+Math.floor(k/5)*.22;a.cylinder([ie,.79,Te],[ie,.94,Te],.044,.052,o("#faf3dd"),12),a.cylinder([ie,.94,Te],[ie,.958,Te],.055,.055,o("#635442"),12)}a.box(.54,1.02,-.14,.45,.53,.32,o("#3f4443",0,.25,.45)),a.box(.53,1.09,.03,.22,.13,.017,o("#91aaa1",0,.25,.2));for(let k=0;k<3;k++)a.cylinder([.36+k*.11,.79,.16],[.36+k*.11,.98,.16],.028,.028,ee.metal,8)}else if(F)for(let k=0;k<3;k++){let ie=-.65+k*.65;a.box(ie,.79,.28,.56,.11,.4,o("#a98350",5));for(let Te=0;Te<7;Te++)a.sphere(ie+y(-.2,.2),.89,.28+y(-.14,.14),y(.065,.09),.045,y(.06,.1),o(["#bd863d","#d2a05d","#a87139"][Te%3]),12,7)}else if(O)for(let k=0;k<3;k++){let ie=-.62+k*.6;a.box(ie,.85,.17,.52,.2,.5,o("#b7915d",5));for(let Te=0;Te<8;Te++){let Ee=ie+y(-.2,.2),Fe=.17+y(-.17,.17);a.cylinder([Ee,.88,Fe],[Ee+.11,1.06,Fe+.04],.017,.04,o("#d07731"),8),a.cylinder([Ee+.1,1.04,Fe+.04],[Ee+.17,1.17,Fe+.02],.008,.01,o("#58703a"),6)}}else if(ne){a.box(-.35,.94,.15,.7,.28,.34,o("#2b363c",0,.45,.25)),a.box(-.42,1.01,.33,.29,.1,.007,o("#a9be92",0,.5,0,.2));for(let k=0;k<3;k++)a.cylinder([-.06+k*.05,.94,.34],[-.06+k*.05,.94,.37],.024,.024,ee.metal,10);a.box(.5,.84,.23,.35,.05,.28,o("#373a3c")),a.cylinder([.75,.8,-.13],[.75,2.65,-.13],.012,.012,ee.metal,7),a.cylinder([.33,2.4,-.13],[1.14,2.4,-.13],.015,.015,ee.metal,7)}else if(E==="F"){for(let k=0;k<3;k++){let ie=-.7+k*.65;a.box(ie,.8,.22,.54,.09,.36,o("#d1d5c8",0,.25,.45));for(let Te=0;Te<8;Te++){let Ee=ie+y(-.2,.2),Fe=.22+y(-.12,.12);a.sphere(Ee,.855,Fe,.047,.025,.045,o(["#c99352","#dfb476","#724b30"][Te%3]),9,5)}}if(f==="F-11"){a.box(.12,.8,-.26,1,.1,.3,ee.black);for(let k=0;k<9;k++)a.cylinder([-.3+k*.1,.88,-.49],[-.3+k*.1,.88,.02],.006,.006,o("#d5b878"),5)}}else if(E==="S"){for(let k=0;k<14;k++){let ie=-.8+k%7*.25,Te=.13+Math.floor(k/7)*.25;a.box(ie,.794,Te,.17,.015,.16,o("#f8f4e6")),a.sphere(ie,.83,Te,.055,.032,.055,o(["#aa5c61","#b5aa6c","#558489","#9a804c"][k%4],0,.28,.32),12,7)}if(f==="S-8")for(let k=0;k<9;k++)a.cylinder([-.75+k*.17,.83,-.2],[-.7+k*.17,1.01,-.08],.021,.024,o("#c8af70",5),7)}else for(let k=0;k<3;k++)a.box(-.65+k*.6,.795,.22,.43,.015,.28,o("#faf8ec")),a.box(-.65+k*.6,.82,.2,.35,.012,.21,o(["#bbbaa0","#a6b4bb","#b7ba8d"][k],0,.8))}function ei(a,c=null){let f=c||a.pos,E=a.width||3.02,D=a.depth||2.75,F=a.yaw||0,O=a.id==="S-3"||a.id==="S-9"?"#8393a0":a.id==="F-11"?"#859690":"#f8f7ef",ne=o(U[a.category],6,.92);j.scope(n.compose(f[0],0,f[1],F),()=>{Gn(j,E,D,o(O,6,.92));for(let Fe of a.id==="F-10"?[-E/2+.035,0,E/2-.035]:[-E/2+.035,E/2-.035])for(let et of[-D/2+.035,D/2-.035])j.cylinder([Fe,.03,et],[Fe,2.2,et],.029,.026,ee.metal,8);j.box(0,2.1,D/2,E,.29,.026,ne),j.box(0,2.1,-D/2,E,.29,.025,o(O,6));for(let Fe of[-E/2,E/2])j.box(Fe,2.1,0,.025,.29,D,o(O,6));j.cylinder([-E/2,2.17,-D/2],[E/2,2.17,D/2],.021,.021,ee.metal,8),j.cylinder([E/2,2.17,-D/2],[-E/2,2.17,D/2],.021,.021,ee.metal,8),(a.category==="F"||a.id==="HQ")&&j.box(0,1.15,-D/2,E,1.87,.015,o("#eeeee5",6,.94))}),M.scope(n.compose(f[0],0,f[1],F),()=>{a.id==="F-10"?(wn(M,-1.5,.4,2.28,.73),wn(M,1.5,.4,2.28,.73),M.scope(n.compose(-1.5,0,0),()=>Zt(M,a)),dn(M,-2.15,-.53,0,"#65746c"),M.box(-.75,.23,-.46,.54,.42,.4,o("#af9270",5))):(wn(M,0,.4,Math.min(E-.45,2.28),.73),Zt(M,a),dn(M,-.65,-.53,0,"#65746c"),M.box(.75,.23,-.46,.54,.42,.4,o("#af9270",5))),a.category==="T"&&M.sign(.56,1.5,-1.25,.95,.98,x[a.id].menu,!0)}),Re.scope(n.compose(f[0],0,f[1],F),()=>{Re.sign(0,2.15,D/2+.03,Math.min(E-.09,2.87),.62,x[a.id].banner),sn(Re,-E/2+.2,D/2+.4,x[a.id].menu,-.14)});let k=[Math.sin(F),Math.cos(F)],ie=[Math.cos(F),-Math.sin(F)],Te=f[0]+k[0]*.4,Ee=f[1]+k[1]*.4;We(Te,Ee,Math.abs(ie[0])*(E-.4)+Math.abs(k[0])*.8,Math.abs(ie[1])*(E-.4)+Math.abs(k[1])*.8,a.id),a.approach=[f[0]+k[0]*(D/2+3.1),f[1]+k[1]*(D/2+3.1)],a.marker=[f[0]+k[0]*1.4,3.22,f[1]+k[1]*1.4],he.push(a)}function ui(a,c,f,E,D=1,F=.37){a.cylinder([c,f,E-.09],[c,f,E+.09],F,F,ee.tire,22),a.cylinder([c,f,E+D*.094],[c,f,E+D*.114],F*.55,F*.55,ee.metal,20);for(let O=0;O<6;O++){let ne=O/6*_;a.cylinder([c+Math.cos(ne)*F*.34,f+Math.sin(ne)*F*.34,E+D*.115],[c+Math.cos(ne)*F*.34,f+Math.sin(ne)*F*.34,E+D*.12],F*.12,F*.12,ee.dark,7)}}function sa(a,c){let f=a.pos,E=a.yaw,F=o(["#ede6d3","#c3a875","#eef0df","#657f79","#aa7761","#e2d8c3","#e0cf9e","#6c7a75"][c%8],0,.38,.23),O=j;O.scope(n.compose(f[0],0,f[1],E),()=>{O.box(0,.46,0,3.85,.22,1.7,ee.dark),O.box(.42,1.63,0,2.85,2.03,1.82,F),O.box(-1.41,1.2,0,1.06,1.37,1.8,F),O.box(-1.65,.9,0,.88,.38,1.9,F),O.box(-1.44,1.58,0,1.04,.74,1.8,F),O.box(-1.96,1.58,0,.035,.66,1.57,ee.glass),O.box(-1.42,1.65,.91,.76,.54,.018,ee.glass),O.box(-1.42,1.65,-.91,.76,.54,.018,ee.glass),O.box(.46,1.79,.918,2.4,1,.012,ee.dark),O.box(.46,1.72,.923,2.27,.81,.009,o("#555e54",0,.7)),O.box(.46,1.16,1.11,2.55,.07,.54,ee.metal),O.box(.46,2.76,0,2.98,.14,1.92,F);for(let ie of[-1.35,1.2])for(let Te of[-.89,.89])ui(O,ie,.4,Te,Te<0?-1:1,.36);O.box(-1.98,.61,0,.1,.19,1.7,o("#b3b8b3",0,.35,.55));for(let ie of[-.61,.61])O.box(-2.04,.93,ie,.034,.2,.37,o("#eee8cf",0,.14,.3,.15));O.box(-2.05,.58,0,.034,.16,.28,o("#decb71")),O.box(.26,2.91,-.17,.53,.17,.44,ee.whiteMetal),O.cylinder([1.3,2.8,-.48],[1.3,3,-.48],.11,.11,ee.metal,12);for(let ie of[-1.06,1.06])O.cylinder([-1.65,1.61,ie*.83],[-1.65,1.62,ie],.02,.02,ee.dark,6),O.box(-1.64,1.64,ie,.1,.19,.05,ee.dark);O.quad([-.9,2.56,.94],[-.9,2.3,2.03],[1.76,2.3,2.03],[1.76,2.56,.94],o("#f6efdf",6),2,1),O.box(.43,2.22,2.02,2.7,.18,.02,o(U.F,6));for(let ie of[-.82,1.69])O.cylinder([ie,1.71,.96],[ie,2.3,1.95],.017,.017,ee.metal,6)}),M.scope(n.compose(f[0],.38,f[1],E),()=>Zt(M,a)),Re.scope(n.compose(f[0],0,f[1],E),()=>{Re.sign(.42,2.67,.945,2.54,.48,x[a.id].banner),sn(Re,-.4,2.28,x[a.id].menu,.1)});let ne=[Math.sin(E),Math.cos(E)],k=[Math.cos(E),-Math.sin(E)];We(f[0],f[1],Math.abs(k[0])*4.03+Math.abs(ne[0])*1.93,Math.abs(k[1])*4.03+Math.abs(ne[1])*1.93,a.id),a.approach=[f[0]+ne[0]*3.3,f[1]+ne[1]*3.3],a.marker=[f[0]+ne[0]*1.45,3.42,f[1]+ne[1]*1.45],he.push(a)}let Ku=0;for(let a of m.records)a.kind==="tent"?ei(a):a.kind==="truck"&&sa(a,Ku++);let ju=m.locations.find(a=>a.id==="HQ");ei(ju);let ra=m.locations.find(a=>a.id==="OUTSTAGE"),at=ra.pos;j.box(at[0],.28,at[1],7.2,.56,1.8,ee.wood),We(at[0],at[1],7.2,1.8,"屋外ステージ");for(let a of[-1.8,0,1.8])M.box(at[0]+a,.563,at[1],.012,.009,1.8,ee.dark);M.box(at[0],.563,at[1],7.2,.009,.012,ee.dark);for(let a of[-1,1])M.box(at[0]+a*4.05,.14,at[1]+.5,.72,.28,.72,ee.base),M.cylinder([at[0]+a*3.9,.04,at[1]-.4],[at[0]+a*3.9,3.2,at[1]-.4],.033,.033,ee.metal,7),M.box(at[0]+a*3.9,2.5,at[1]-.4,.48,.85,.35,ee.black);let Hn=at[1]-1.65,ar=at[1]-3.75;for(let a of[-1,1])M.cylinder([at[0]+a*4,.1,Hn],[at[0]+a*4,.12,ar],.035,.035,ee.metal,8);M.cylinder([at[0]-4,.1,Hn],[at[0]+4,.1,Hn],.035,.035,ee.metal,8);for(let a of[-1,1])M.cylinder([at[0]+a*4,.1,Hn],[at[0]+a*4,2.1,Hn],.035,.035,ee.metal,8);M.cylinder([at[0]-4,2.1,Hn],[at[0]+4,2.1,Hn],.035,.035,ee.metal,8),M.cylinder([at[0]-4,.12,ar],[at[0]+4,.12,ar],.035,.035,ee.metal,8),M.quad([at[0]-4,.12,ar],[at[0]-4,.1,Hn],[at[0]+4,.1,Hn],[at[0]+4,.12,ar],o("#a7b0a6",11,.75),6,2);let Qu=d.add("stage-k-estate",(a,c)=>{a.fillStyle="#f7f7f2",a.fillRect(0,0,c,c),a.fillStyle="#9e3235",a.fillRect(0,0,c,92),a.fillStyle="#fff",a.textAlign="center",a.font="700 24px sans-serif",a.fillText("SHONAN REAL ESTATE",c/2,55),a.fillStyle="#24516b",a.font="700 69px sans-serif",a.fillText("K ESTATE",c/2,255),a.fillStyle="#5c7989",a.font="600 24px sans-serif",a.fillText("K エステート",c/2,315)});for(let a=-1;a<=1;a++){let c=at[0]+a*2.52,f=2.42;Re.quad([c-f/2,2.02,Hn+.06],[c-f/2,.13,Hn+.06],[c+f/2,.13,Hn+.06],[c+f/2,2.02,Hn+.06],o("#ffffff",Qu,.9,0,.06))}let ys=at[0]+5.15,vs=at[1]+2.6;M.box(ys,1.5,vs,1.26,.73,.12,ee.black),M.box(ys,1.5,vs+.07,1.22,.69,.025,o("#303c3d",0,.32,.08)),M.cylinder([ys,.08,vs],[ys,1.13,vs],.055,.055,ee.metal,8),M.box(ys,.06,vs,.62,.12,.47,ee.dark);for(let a of[.2,1.2])wn(M,at[0]+5.5,at[1]+a,1.32,.63,0);M.box(at[0]+5.5,.85,at[1]+1.2,.56,.18,.39,ee.dark);for(let a of[.2,1.2])dn(M,at[0]+5.5,at[1]+a+1,0,"#4a5558");M.cylinder([at[0]+6.45,.37,at[1]-1.5],[at[0]+6.82,.37,at[1]-1.5],.23,.23,ee.dark,12),We(ys,vs,1.3,.5,"大型モニター");let Fn=[at[0]-5.8,at[1]+.4];M.scope(n.compose(Fn[0],0,Fn[1],0),()=>{Gn(M,3,2.8,ee.fabric);for(let a of[-1.45,1.45])for(let c of[-1.3,1.3])M.cylinder([a,.04,c],[a,2.15,c],.025,.025,ee.metal,7)}),wn(M,Fn[0]+.35,Fn[1]+.45,1.55,.7,0);for(let a=0;a<15;a++)M.box(Fn[0]-1+a%5*.45,.2+Math.floor(a/5)*.4,Fn[1]-.7,.41,.38,.48,ee.wood);We(Fn[0],Fn[1],3,2.8,"屋外ステージのポップアップテント"),M.cylinder([at[0],.6,at[1]+.1],[at[0],1.9,at[1]+.1],.018,.018,ee.black,7),M.cylinder([at[0],1.9,at[1]+.1],[at[0]+.36,2.08,at[1]+.22],.018,.018,ee.black,7),Re.sign(at[0],.34,at[1]+.914,6.75,.5,x.OUTSTAGE.banner),ra.approach=[at[0],at[1]+3.2],ra.marker=[at[0],2.1,at[1]],he.push(ra);for(let a of m.locations.filter(c=>["MEET","EAT2","WC"].includes(c.id)))a.approach=a.pos,a.marker=[a.pos[0],2.5,a.pos[1]],he.push(a),a.id==="WC"&&Re.scope(n.compose(a.pos[0],0,a.pos[1],0),()=>{Re.sign(0,2.4,0,2.2,.53,d.banner("WC","体育館南側・トイレ","当日のトイレ",U.I))});e(.45,"木々・遊具・モビリティ走路を作っています");let En=rt.track,Ms=0,or=[0],aa=En.map((a,c)=>{let f=En[(c-1+En.length)%En.length],E=En[(c+1)%En.length],D=E[0]-f[0],F=E[1]-f[1],O=Math.hypot(D,F);return[-F/O,D/O]});for(let a=0;a<En.length;a++){let c=(a+1)%En.length,f=En[a],E=En[c],D=aa[a],F=aa[c],O=Math.hypot(E[0]-f[0],E[1]-f[1]);if(Ms+=O,or.push(Ms),j.quad([f[0]-D[0],.055,f[1]-D[1]],[f[0]+D[0],.055,f[1]+D[1]],[E[0]+F[0],.055,E[1]+F[1]],[E[0]-F[0],.055,E[1]-F[1]],o("#bba990",1,.98),2,O),a%8<4)for(let ne of[-1,1])wt(M,[f[0]+D[0]*.95*ne,f[1]+D[1]*.95*ne],[E[0]+F[0]*.95*ne,E[1]+F[1]*.95*ne],.085,o("#f3e8d0"),.063)}let Hc=En.map(([a,c],f)=>[a-aa[f][0]*1.28,c-aa[f][1]*1.28]);function Wc(a,c,f=.65,E=!1,D=!1){let F=Math.hypot(c[0]-a[0],c[1]-a[1]),O=Math.max(1,Math.ceil(F/2.2)),ne=E?o("#a48d66",5):o("#dedfd4",0,.45,.35);for(let k=0;k<=O;k++){let ie=a[0]+(c[0]-a[0])*k/O,Te=a[1]+(c[1]-a[1])*k/O;M.cylinder([ie,.05,Te],[ie,f+.05,Te],E?.045:.025,E?.042:.025,ne,7),E||M.box(ie,.035,Te,.28,.07,.34,ee.base)}for(let k of[f*.4,f])M.cylinder([a[0],k,a[1]],[c[0],k,c[1]],E?.036:.021,E?.036:.021,ne,7);D&&M.quad([a[0],.15,a[1]],[a[0],f,a[1]],[c[0],f,c[1]],[c[0],.15,c[1]],o("#a2aa9a",11,.82),F/1.1,f/1.1)}let ed=o("#e1ba22",6,.9),td=o("#252525",6,.9);function nd(a,c){let f=Math.hypot(c[0]-a[0],c[1]-a[1]),E=Math.max(1,Math.ceil(f/2.2)),D=F=>[a[0]+(c[0]-a[0])*F,a[1]+(c[1]-a[1])*F];for(let F=0;F<=E;F++){let[O,ne]=D(F/E);M.cylinder([O,.02,ne],[O,.72,ne],.008,.008,ee.metal,7),M.cylinder([O,.68,ne],[O,.71,ne],.016,.016,ee.metal,8)}for(let F=0;F<E;F++)for(let O=0;O<8;O++){let ne=(F+O/8)/E,k=(F+(O+1)/8)/E,ie=D(ne),Te=D(k),Ee=.7-.05*Math.sin(Math.PI*O/8),Fe=.7-.05*Math.sin(Math.PI*(O+1)/8);M.cylinder([ie[0],Ee,ie[1]],[Te[0],Fe,Te[1]],.012,.012,O%2?td:ed,6)}}let ol=rt.ropeSections.flatMap(a=>a.slice(1).map((c,f)=>[a[f],c]));for(let[a,c]of ol)nd(a,c);let lr=rt.boarding.map(({pos:a,distance:c},f)=>{let E=m.locations.find(D=>D.id==="BOARDING_"+(f+1));return E.approach=[a[0]+(f===0?-1.25:.3),a[1]+(f===0?0:2)],E.marker=[a[0],1.75,a[1]],he.push(E),{position:a,distance:c,rec:E}}),ll=m.locations.find(a=>a.id==="MOBILITY");ll.approach=[Fn[0],Fn[1]+2.1],ll.marker=[Fn[0],2.8,Fn[1]],he.push(ll),Re.sign(Fn[0],2.1,Fn[1]+1.42,2.85,.65,x.MOBILITY.banner),sn(Re,lr[0].position[0]-1.5,lr[0].position[1]+1.6,Z,-.3);let[Xc,qc]=rt.boardingTent;M.scope(n.compose(Xc,0,qc,0),()=>{Gn(M,3,3,ee.fabric);for(let a of[-1.46,1.46])for(let c of[-1.46,1.46])M.cylinder([a,.03,c],[a,2.2,c],.029,.026,ee.metal,8)}),We(Xc,qc,3,3,"乗降場②");function Yc(a){let c=(a%Ms+Ms)%Ms,f=0;for(;f<En.length-1&&or[f+1]<c;)f++;let E=En[f],D=En[(f+1)%En.length],F=(c-or[f])/(or[f+1]-or[f]);return{x:E[0]+(D[0]-E[0])*F,z:E[1]+(D[1]-E[1])*F,yaw:Math.atan2(D[0]-E[0],D[1]-E[1])}}let tn=new s,cl=new s,cr=o("#d5d8d1",0,.39,.18),Zc=o("#91a7a6",0,.21,.55);tn.box(0,.46,-.2,1.22,.2,2.3,ee.dark),tn.box(0,.84,-.94,1.24,.65,.72,cr),tn.box(0,1.02,-.74,1.12,.25,.7,o("#465052",0,.75)),tn.box(0,.82,.22,1.23,.16,1.18,cr),tn.sphere(0,.87,.95,.68,.61,.25,cr,18,10);let Ai=Array.from({length:17},(a,c)=>(c-8)*.07),bs=Array.from({length:9},(a,c)=>c/8),Bi=(a,c)=>{let f=Math.abs(a)/.56;return[a,1.22+c*(.69-.1*f*f),1.17-.56*c-.13*f*f]},oa=(a,c)=>{let f=-.2*c*a/.31360000000000005,E=-.26*a/(.56*.56),D=.69-.1*(a/.56)**2,F=[f*-.56-E*D,.56,D],O=Math.hypot(...F);return F.map(ne=>ne/O)};for(let a=0;a<bs.length-1;a++)for(let c=0;c<Ai.length-1;c++){let f=Ai[c],E=Ai[c+1],D=bs[a],F=bs[a+1],O=Bi(f,D),ne=Bi(f,F),k=Bi(E,F),ie=Bi(E,D),Te=oa(f,D),Ee=oa(f,F),Fe=oa(E,F),et=oa(E,D);cl.tri(ne,O,ie,Zc,[[0,1],[0,0],[1,0]],[Ee,Te,et]),cl.tri(ne,ie,k,Zc,[[0,1],[1,0],[1,1]],[Ee,et,Fe])}let la=o("#252c2d",0,.68,.12);for(let a of[0,1])for(let c=0;c<Ai.length-1;c++)tn.cylinder(Bi(Ai[c],a),Bi(Ai[c+1],a),.021,.021,la,7);for(let a of[-.56,.56])for(let c=0;c<bs.length-1;c++)tn.cylinder(Bi(a,bs[c]),Bi(a,bs[c+1]),.024,.024,la,7);let Ci=(a,c)=>{let f=Math.abs(a)/.56;return[a,1.91-.1*f*f-.03*Math.max(0,-c),c-.13*f*f]};for(let a=0;a<Ai.length-1;a++){let c=Ai[a],f=Ai[a+1];tn.quad(Ci(c,.61),Ci(c,-1.12),Ci(f,-1.12),Ci(f,.61),cr),tn.cylinder(Ci(c,-1.12),Ci(f,-1.12),.018,.018,la,7)}for(let a of[-.56,.56])tn.cylinder(Ci(a,.61),Ci(a,-1.12),.027,.027,la,8),tn.cylinder([a,.58,-1.07],Ci(a,-1.12),.026,.026,ee.metal,8);for(let a of[-.65,.65])tn.box(a,.55,-.05,.14,.12,1.65,cr),tn.box(a,1.14,-1,.07,.48,.07,ee.dark),tn.box(a,1.08,.8,.08,.54,.08,ee.dark);tn.box(0,1.15,-.59,.96,.2,.48,o("#333b3c",0,.75)),tn.box(0,1.03,.44,.77,.09,.36,ee.dark),tn.sphere(0,.99,1.19,.15,.15,.065,ee.dark,12,8);for(let a of[-.42,.42])tn.box(a,1.02,1.17,.29,.07,.035,o("#f0ebd9",0,.35,.1,.2));for(let a of[-.55,.55])tn.scope(n.compose(a,.34,-1.02,Math.PI/2),()=>ui(tn,0,0,0,a>0?1:-1,.34));tn.scope(n.compose(0,.34,1.2,Math.PI/2),()=>ui(tn,0,0,0,1,.34)),tn.cylinder([-.4,1.23,.72],[.4,1.23,.72],.025,.025,ee.dark,9);for(let a of[-.69,.69])tn.cylinder([a,1.33,.8],[a*1.13,1.37,1],.02,.02,ee.dark,7),tn.box(a*1.13,1.39,1.02,.19,.11,.055,ee.dark);let id=d.banner("DEMO","電動トライク","車体色は仮表示","#53605b");tn.scope(n.compose(.69,0,-.65,Math.PI/2),()=>tn.sign(0,.92,0,1.3,.3,id));let hr=m.records.find(a=>a.kind==="goat"),Jt=hr.pos,ur=6.5,di=6.3,hl=[[Jt[0]-ur/2,Jt[1]-di/2],[Jt[0]+ur/2,Jt[1]-di/2],[Jt[0]+ur/2,Jt[1]+di/2],[Jt[0]-ur/2,Jt[1]+di/2]];dt(hl,j,o("#c7bb89",2,.97),2);for(let a=0;a<4;a++)Wc(hl[a],hl[(a+1)%4],1.1,!0);We(Jt[0],Jt[1],ur,di,"ヤギ牧場"),hr.approach=[Jt[0],Jt[1]+di/2+3.1],hr.marker=[Jt[0],2.5,Jt[1]+di/2],he.push(hr),Re.sign(Jt[0],2.72,Jt[1]+di/2+.06,3.4,.68,x[hr.id].banner);for(let a of[-1,1])M.cylinder([Jt[0]+a*1.6,.05,Jt[1]+di/2],[Jt[0]+a*1.6,3.09,Jt[1]+di/2],.05,.05,ee.wood,7);M.box(Jt[0]-2,.26,Jt[1]-1.7,.9,.48,1.4,o("#b6a166",2)),M.cylinder([Jt[0]+2,.05,Jt[1]-2],[Jt[0]+2,.28,Jt[1]-2],.35,.38,o("#6b8990",0,.3,.4),18);function sd(){let a=new s,c=o("#e9e4d5",0,.95),f=o("#776654",0,.92);a.sphere(0,.73,0,.3,.29,.54,c,18,10),a.cylinder([0,.85,.3],[0,1.13,.52],.18,.14,c,14),a.sphere(0,1.19,.61,.15,.18,.24,c,16,10),a.sphere(0,1.1,.78,.12,.1,.1,f,12,7);for(let E of[-1,1]){a.sphere(E*.22,1.26,.48,.19,.055,.085,c,12,7),a.sphere(E*.137,1.22,.67,.015,.024,.025,ee.black,8,6),a.cylinder([E*.09,1.31,.51],[E*.11,1.48,.38],.039,.021,f,9),a.cylinder([E*.11,1.48,.38],[E*.1,1.55,.27],.021,.009,f,8);for(let D of[-.32,.33])a.cylinder([E*.19,.6,D],[E*.18,.12,D+.03],.046,.03,c,9),a.box(E*.18,.07,D+.05,.09,.1,.14,f)}return a.cylinder([0,.92,-.46],[0,1.06,-.62],.035,.016,c,9),a.cylinder([0,1.08,.77],[0,.92,.72],.045,.01,c,9),a}let is=m.records.find(a=>a.kind==="baseball");is.locationSource="配置ゾーニング 9月30日 Ver.7案（1ページ）";let pn=is.pos;is.approach=[pn[0]+9,pn[1]+2],is.marker=[pn[0]+8,2.8,pn[1]+1],he.push(is),Re.sign(pn[0]+8,1.8,pn[1]+1,4,.82,x[is.id].banner);for(let a of[-1,1])M.cylinder([pn[0]+8+a*1.9,.08,pn[1]+1],[pn[0]+8+a*1.9,2.3,pn[1]+1],.035,.035,ee.metal,7);for(let a of[[-3,-2],[0,-5],[3,-2],[0,1]])M.box(pn[0]+a[0],.052,pn[1]+a[1],.34,.045,.34,o("#e8e2c8"));M.cylinder([pn[0]+4,.08,pn[1]+2],[pn[0]+4.4,.1,pn[1]+3.05],.022,.045,o("#b49566",5),9),M.sphere(pn[0]+4.25,.095,pn[1]+2.2,.074,.074,.074,o("#e9e6dc"),12,8);let rd=d.add("baseball-net",(a,c)=>{a.clearRect(0,0,c,c),a.strokeStyle="#becab2",a.lineWidth=4,a.beginPath();for(let f=0;f<=c;f+=64)a.moveTo(f,0),a.lineTo(f,c),a.moveTo(0,f),a.lineTo(c,f);a.stroke()}),ad=d.add("baseball-flag",(a,c)=>{a.fillStyle="#672d3d",a.fillRect(0,0,c,c);for(let f=0;f<c;f+=3)a.fillStyle=f%6?"rgba(233,208,172,.035)":"rgba(0,0,0,.055)",a.fillRect(f,0,1,c);a.strokeStyle="#d0b792",a.lineWidth=3,a.strokeRect(9,9,c-18,c-18),a.textAlign="center",a.fillStyle="#f4d990",a.font='700 27px "Yu Gothic",sans-serif',a.fillText("オール西鎌倉少年野球クラブ",c/2,64,475),a.fillStyle="#f5ead8",a.font="bold 170px Georgia,serif",a.fillText("N",c/2,305),a.fillStyle="#df6358",a.font='700 93px "Yu Mincho",serif',a.fillText("必",90,293),a.fillText("勝",424,293),a.strokeStyle="#d1d0ac",a.lineWidth=6;for(let f of[-1,1]){a.beginPath(),a.moveTo(c/2,396),a.quadraticCurveTo(c/2+f*120,357,c/2+f*103,186),a.stroke();for(let E=0;E<10;E++){let D=E/9,F=c/2+f*(22+81*Math.sin(D*Math.PI/2)),O=380-D*181;a.save(),a.translate(F,O),a.rotate(f*(.8+D*.4)),a.fillStyle="#d4d4b5",a.beginPath(),a.ellipse(0,0,5,16,0,0,Math.PI*2),a.fill(),a.restore()}}}),od=d.sign("baseball-board",is.name,"野球体験","#672d3d","T-5");M.scope(n.compose(pn[0],0,pn[1]),()=>{let a=o("#38674d",0,.65,.15),c=o("#476e48",rd,.95),f=o("#eeeadd",0,.97);function E(F,O,ne,k,ie=0){M.scope(n.compose(F,0,O,ie),()=>{for(let Te of[-1,1]){let Ee=Te*ne/2;M.cylinder([Ee,.04,0],[Ee,k,0],.029,.029,a,8),M.cylinder([Ee,.04,-.65],[Ee,.04,.65],.025,.025,a,8),M.cylinder([Ee,.05,.6],[Ee,1,0],.023,.023,a,8)}M.cylinder([-ne/2,k,0],[ne/2,k,0],.025,.025,a,8),M.quad([-ne/2,.09,0],[-ne/2,k-.02,0],[ne/2,k-.02,0],[ne/2,.09,0],c,ne/.8,k/.8),M.cylinder([-ne/2,.1,0],[ne/2,.1,0],.045,.045,a,8)})}E(3.4,-1.3,4.8,3.3),E(-4,-5.5,2.4,2.5,.35),E(-9,-2,2.4,2.5,-.2),M.sign(2.4,2.22,-1.25,2,1.48,ad);for(let F of[1.46,3.34])M.cylinder([F,2.98,-1.24],[F,3.28,-1.3],.009,.009,o("#d9d4b4"),6);wn(M,.1,1,1.8,.72,0,!1,!1),dn(M,-1.15,1.05,.18,"#3e4647"),dn(M,7.1,-.4,-.35,"#42484d"),M.scope(n.compose(.15,.72,1.05,-.08),()=>M.sign(0,.48,0,.78,.83,od,!0)),M.box(-.55,.89,.98,.38,.24,.3,o("#778c87",0,.8));for(let F=0;F<5;F++)M.cylinder([-.7+F*.068,.99,.99],[-.7+F*.068,1.16,.99],.014,.014,o(F%2?"#c6a264":"#edddb0"),6);function D(F,O,ne){for(let k=0;k<48;k++){let ie=k/48*_,Te=(k+1)/48*_,Ee=(Fe,et)=>[F+Math.cos(Fe)*et,.043,O+Math.sin(Fe)*et];M.quad(Ee(ie,ne-.025),Ee(Te,ne-.025),Ee(Te,ne+.025),Ee(ie,ne+.025),f)}}for(let[F,O,ne]of[[2,5.2,!1],[7.8,5.5,!1],[-3,2.5,!0]]){D(F,O,.66);let k=o(ne?"#388faf":"#e5cc57",0,.9);M.box(F,.035,O,.34,.06,.34,k),M.cylinder([F,.06,O],[F,.62,O],.145,.022,k,12)}for(let F of[3.9,4.65,5.4]){let O=o("#78b3ce",0,.78);M.cylinder([F,.04,3.8],[F,.4,3.8],.21,.16,O,16),M.cylinder([F,.037,3.8],[F,.071,3.8],.225,.222,O,16)}for(let F of[-1.9,6])M.box(F,.044,-3.7,.06,.015,7.2,f);M.box(2.05,.044,-7.3,7.9,.015,.06,f),M.box(2.05,.044,-.1,7.9,.015,.06,f),M.box(3.5,.044,7.1,11.5,.015,.06,f)});let ul=(a,c,f)=>a+f>re[0]&&a-f<me[0]&&c+f>re[1]&&c-f<me[1];function ld(a,c,f=7,E=!1){let D=L(a,c),F=D[0],O=D[1];if(Bt(F,O)||yt(F,O))return;let ne=u(Math.round(a*721+c*91)),k=c>=410&&c<=420?{132:[6.8,.53,!1],152:[6.3,.56,!1],175:[7.6,.26,!0],252:[7.8,.28,!0]}[a]:null;k&&(f=k[0]);let ie=M;ie.cylinder([F,0,O],[F+.12,f*.57,O-.1],.19,.08,ee.bark,11);for(let Te=0;Te<6;Te++){let Ee=Te*_/6+ne(),Fe=[F,f*.34+ne()*.6,O],et=[F+Math.cos(Ee)*f*.27,f*(.62+ne()*.17),O+Math.sin(Ee)*f*.27];if(!ul((Fe[0]+et[0])/2,(Fe[2]+et[2])/2,Math.max(Math.abs(Fe[0]-et[0]),Math.abs(Fe[2]-et[2]))/2+.08)){ie.cylinder(Fe,et,.073,.026,ee.bark,8);for(let Wt=0;Wt<3;Wt++){let It=[et[0]+(ne()-.5)*1.4,et[1]+ne()*1.05,et[2]+(ne()-.5)*1.4];ul((et[0]+It[0])/2,(et[2]+It[2])/2,Math.max(Math.abs(et[0]-It[0]),Math.abs(et[2]-It[2]))/2+.03)||ie.cylinder(et,It,.029,.01,ee.bark,7)}}}for(let Te=0;Te<(k?180:52);Te++){let Ee=ne()*_,Fe=Math.sqrt(ne())*f*(k?k[1]:.38),et=F+Math.cos(Ee)*Fe,Wt=O+Math.sin(Ee)*Fe,It=f*(k?.57:.7)+ne()*f*(k?.38:.25)-Fe/f*.8,bt=f*(k?.12+ne()*.09:.19+ne()*.13),Ge=ne()*_,ct=(k?k[2]:E)?ee.autumn:ee.leaf;ul(et,Wt,bt*.71)||Se.scope(n.compose(et,It,Wt,Ge),()=>{Se.quad([-bt/2,-bt/2,0],[-bt/2,bt/2,0],[bt/2,bt/2,0],[bt/2,-bt/2,0],ct),Se.quad([-bt/2,0,-bt/2],[-bt/2,0,bt/2],[bt/2,0,bt/2],[bt/2,0,-bt/2],ct)})}ye.push({x:F,z:O,r:.26})}[[143,54],[176,48],[207,47],[234,46],[270,45],[301,48],[366,63],[399,73],[431,85],[464,98],[496,116],[532,131],[561,151],[566,206],[566,240],[568,275],[581,361],[582,414],[581,521],[579,566],[568,627],[547,692],[509,719],[480,730],[432,738],[404,742],[371,748],[323,757],[282,759],[243,764],[205,769],[168,773],[130,775],[92,750],[83,712],[75,671],[53,584],[32,527],[38,382],[62,335],[68,159],[132,418],[152,418],[175,413],[252,412],[283,414],[321,415],[348,419],[381,417],[417,418],[420,396]].forEach((a,c)=>ld(a[0],a[1],y(5.8,8.7),c%3!==0));let ti=ht(1e3,219);for(let a=0;a<6;a++){let c=ti[0]+a*1.5;M.cylinder([c,.03,ti[1]],[c,2.45,ti[1]],.033,.033,o("#287b9c",0,.5,.35),8),M.cylinder([c,2.45,ti[1]],[c,2.45,ti[1]+1.1],.025,.025,ee.metal,8),M.cylinder([c,.03,ti[1]+1.1],[c,2.45,ti[1]+1.1],.033,.033,o("#287b9c"),8)}for(let a of[ti[1],ti[1]+1.1])M.cylinder([ti[0],2.45,a],[ti[0]+7.5,2.45,a],.03,.03,ee.metal,8);let ca=ht(735,207);for(let a=0;a<4;a++)for(let c=0;c<4;c++){let f=ca[0]+a*.7,E=ca[1]+c*.7;M.cylinder([f,.02,E],[f,2.1,E],.022,.022,o("#287b9c"),7);for(let D=.7;D<2.2;D+=.7)a<3&&M.cylinder([f,D,E],[f+.7,D,E],.02,.02,o("#287b9c"),7),c<3&&M.cylinder([f,D,E],[f,D,E+.7],.02,.02,o("#287b9c"),7)}We(ca[0]+1.05,ca[1]+1.05,2.3,2.3,"遊具");for(let a=0;a<_t.length;a++){let c=_t[a],f=_t[(a+1)%_t.length];a===15||a===_t.length-1||Wc(c,f,1.55,!1,!0)}for(let a of["GATE_MAIN","GATE_WEST"]){let c=m.locations.find(D=>D.id===a),f=c.pos,E=a==="GATE_MAIN"?c.yaw:.7;M.scope(n.compose(f[0],0,f[1],E),()=>{for(let D of[-1,1])M.box(D*2.6,1,0,.52,2,.58,ee.wall),M.box(D*2.6,2.03,0,.6,.08,.64,ee.base),M.cylinder([D*2.75,.05,.25],[D*2.75,3.35,.25],.036,.036,ee.metal,9);if(a==="GATE_MAIN"){let D=o("#586567",0,.54,.35),F=o("#aeb0a7",3,.96);for(let O of[-1,1]){M.box(O*4.4,.47,0,3.05,.94,.58,F),M.box(O*4.4,.96,0,3.13,.08,.68,ee.base);for(let ne=.24;ne<=2.64;ne+=.24)M.cylinder([O*2.45,.22,ne],[O*2.45,1.52,ne],.019,.019,D,6);for(let ne of[.23,1.51])M.cylinder([O*2.45,ne,.18],[O*2.45,ne,2.72],.026,.026,D,6)}}M.sign(0,3.12,.25,5.7,.96,G)}),c.approach=a==="GATE_MAIN"?rt.mainGateApproach:[-43,-38],c.marker=[f[0],3.75,f[1]],he.push(c)}{let a=m.locations.find(c=>c.id==="GATE_WEST");M.scope(n.compose(a.pos[0],0,a.pos[1],.7),()=>{M.box(0,.045,1.15,5.05,.09,3.75,o("#b7b5a8",3,.96));for(let c of[-1,1]){M.box(c*3.24,.33,1.25,.52,.66,4.1,o("#a3a59a",3,.98)),M.box(c*3.24,.7,1.25,.61,.085,4.25,o("#c7c9ba",3,.93));for(let f of[-.52,.55,1.62,2.69])M.box(c*3.24,.34,f,.54,.42,.023,o("#898e83",3,.96))}})}let dl=new s,cd=d.sign("flag",`つながり
フェスタ`,`＠にしかま
2026`,"#366568","");dl.animate([0,0,0],9,()=>dl.quad([.05,2.8,0],[.05,1,0],[.62,1,0],[.62,2.8,0],o("#fff",cd,.8)));let Jc=[];for(let a of[[448,520],[440,611],[543,622],[468,407],[282,378],[130,128],[461,296]]){let c=L(...a);M.cylinder([c[0],.03,c[1]],[c[0],3,c[1]],.016,.014,ee.whiteMetal,8),M.box(c[0],.055,c[1],.48,.1,.4,o("#dedfd6")),Jc.push({matrix:n.compose(c[0],0,c[1],-.3),info:[y(0,6),0,0,0]})}for(let a of[[465,441],[459,446],[456,452],[458,463],[445,472],[178,166]]){let c=L(...a);M.box(c[0],.035,c[1],.32,.07,.32,o("#b1543e")),M.cylinder([c[0],.06,c[1]],[c[0],.63,c[1]],.125,.022,o("#c7793c"),10),M.cylinder([c[0],.32,c[1]],[c[0],.4,c[1]],.072,.061,o("#e6ddc7"),10)}let hd=o("#efd342",6,.93);for(let[a,c]of rt.tapes){let f=c[0]-a[0],E=c[1]-a[1],D=Math.hypot(f,E);M.scope(n.compose((a[0]+c[0])/2,0,(a[1]+c[1])/2,-Math.atan2(E,f)),()=>{for(let F of[-1,1])M.cylinder([F*D/2,.02,0],[F*D/2,.92,0],.016,.016,ee.metal,7);M.box(0,.82,0,D,.068,.008,hd)})}let $c=rt.coneBars,ud=o("#d87834",6,.9),fl=o("#f8eee1",6,.93),pl=o("#c33c2d",6,.92);function dd(a,c){M.box(a,.045,c,.35,.09,.35,ee.dark),M.cylinder([a,.09,c],[a,.67,c],.14,.018,ud,10),M.cylinder([a,.32,c],[a,.41,c],.095,.075,fl,10)}for(let[a,c]of $c){for(let[f,E]of[a,c])dd(f,E);for(let f=0;f<8;f++){let E=f/8,D=(f+1)/8;M.cylinder([a[0]+(c[0]-a[0])*E,.78,a[1]+(c[1]-a[1])*E],[a[0]+(c[0]-a[0])*D,.78,a[1]+(c[1]-a[1])*D],.035,.035,f%2?fl:pl,7)}}for(let a of[[108,62],[452,744]]){let[c,f]=L(...a);M.cylinder([c-.38,.04,f-.38],[c+.38,.04,f+.38],.055,.055,pl,8),M.cylinder([c-.38,.04,f+.38],[c+.38,.04,f-.38],.055,.055,pl,8)}wt(M,L(255,720),L(451,720),.065,fl,.05);let fd=d.sign("立入禁止","立入禁止","","#b73527",""),pd=d.sign("駐輪禁止","駐輪禁止","","#b73527","");for(let a of[[56,419],[466,451]]){let[c,f]=L(...a);sn(Re,c,f,fd)}for(let a of[[108,62],[452,744]]){let[c,f]=L(...a);sn(Re,c,f,pd)}function Kc(a,c,f=25){let E=L(a,c),D=7;for(let F=0;F<D;F++){let O=F/D*f,ne=(F+1)/D*f,k=2.4-F/D*1.6,ie=2.4-(F+1)/D*1.6;for(let Te of[-1,1])for(let Ee of[-1,1])M.cylinder([E[0]+Te*k,O,E[1]+Ee*k],[E[0]+Te*ie,ne,E[1]+Ee*ie],.06,.045,ee.metal,6),M.cylinder([E[0]+Te*k,O,E[1]+Ee*k],[E[0]-Te*ie,ne,E[1]+Ee*ie],.026,.026,ee.metal,6),M.cylinder([E[0]+Te*k,O,E[1]+Ee*k],[E[0]+Te*ie,ne,E[1]-Ee*ie],.026,.026,ee.metal,6)}for(let F of[f*.71,f*.87,f]){M.cylinder([E[0]-5,F,E[1]],[E[0]+5,F,E[1]],.065,.065,ee.metal,7);for(let O of[-1,1])M.cylinder([E[0]+O*.9,F-1.8,E[1]],[E[0]+O*5,F,E[1]],.04,.04,ee.metal,6),M.cylinder([E[0]+O*4.7,F,E[1]],[E[0]+O*4.7,F-1,E[1]],.09,.09,o("#9b9d84"),10)}return We(E[0],E[1],5,5,"鉄塔"),E}let ha=Kc(322,56,26),jc=Kc(548,194,26);for(let a of[-4.7,4.7])for(let c of[18.46,22.62,26]){let f=[];for(let E=0;E<=36;E++){let D=E/36;f.push([ha[0]+(jc[0]-ha[0])*D+a,c-1-3.4*Math.sin(D*Math.PI),ha[1]+(jc[1]-ha[1])*D])}M.tube(f,.035,ee.dark,5)}let Ri=new s;for(let a=0;a<27;a++){let c=a/27*_,f=125+y(0,35),E=a<9?a<4?-151:-83:a<18?84:-66+(a-18)*16.5,D=a<9?-42+a*17:a<18?-21+(a-9)*17:132,F=y(6,10),O=y(6,11),ne=y(5.2,7.3);Ri.scope(n.compose(0,FestaScenery.height(E,D),0),()=>{Ri.box(E,ne/2,D,F,ne,O,o(["#ddd8c9","#c4ccca","#e6e0d4","#b8b9ac"][a%4],3,.9));let k=o(["#676f70","#8a7163","#5d6966"][a%3],10,.7);Ri.tri([E-F/2-.35,ne,D-O/2-.35],[E+F/2+.35,ne,D-O/2-.35],[E,ne+2,D-O/2-.35],k),Ri.tri([E+F/2+.35,ne,D+O/2+.35],[E-F/2-.35,ne,D+O/2+.35],[E,ne+2,D+O/2+.35],k),Ri.quad([E-F/2-.35,ne,D-O/2-.35],[E-F/2-.35,ne,D+O/2+.35],[E,ne+2,D+O/2+.35],[E,ne+2,D-O/2-.35],k,3,3),Ri.quad([E,ne+2,D-O/2-.35],[E,ne+2,D+O/2+.35],[E+F/2+.35,ne,D+O/2+.35],[E+F/2+.35,ne,D-O/2-.35],k,3,3);for(let ie=0;ie<3;ie++)Ri.box(E+(ie-1)*2.1,ne*.62,D+O/2+.02,1.15,1.35,.03,ee.glass)})}let md=d.banner("WC","にしかまくら子どもの家・トイレ","当日のトイレ","#426861");FestaScenery.build({details:M,green:Se,distant:Ri,signGeo:Re,childSign:md,p:L,planPoint:ht,onRoad:yt,gateOpen:Bt,m:ee,mat:o,M:n,rng:u,TAU:_,ga:re,gb:me,gc:_e,gw:Oe,gd:ot,gymRise:Ce});function gd(a,c){let f=o("#fafaf8",0,.42,.22),E=o("#25292b",0,.53,.16),D=be("#657177");M.scope(n.compose(a,0,c,0),()=>{let F=[[-2.69,.83,.48,1.49],[-2.59,.93,.43,1.52],[-2.35,.94,.43,1.53],[-1.9,.94,.43,1.53],[-1.53,.94,.43,1.53],[-1.16,.94,.43,1.53],[-.7,.94,.43,1.53],[.1,.94,.43,1.53],[.88,.94,.43,1.53],[1.15,.94,.43,1.53],[1.52,.94,.43,1.5],[1.89,.94,.43,1.45],[2.18,.93,.43,1.35],[2.51,.9,.43,1.26],[2.69,.82,.48,1.07]];for(let ne=0;ne<F.length-1;ne++){let[k,ie,Te,Ee]=F[ne],[Fe,et,Wt,It]=F[ne+1];M.quad([-ie,Ee,k],[ie,Ee,k],[et,It,Fe],[-et,It,Fe],f);for(let bt of[-1,1]){let Ge=(ct,Dt)=>Math.max(ct,.32+Math.sqrt(Math.max(0,.2025-Math.min((Dt+1.53)**2,(Dt-1.52)**2))));for(let ct=0;ct<6;ct++){let Dt=ct/6,kt=(ct+1)/6,ut=Xt=>[bt*(ie+(et-ie)*Xt),k+(Fe-k)*Xt],zt=ut(Dt),on=ut(kt);M.quad([zt[0],Ee+(It-Ee)*Dt,zt[1]],[on[0],Ee+(It-Ee)*kt,on[1]],[on[0],Ge(Te+(Wt-Te)*kt,on[1]),on[1]],[zt[0],Ge(Te+(Wt-Te)*Dt,zt[1]),zt[1]],f)}}}let O=[[-2.62,.89,1.49],[-2.46,.84,2.17],[-2.27,.79,2.28],[1.23,.79,2.28],[1.53,.8,2.16],[2.48,.87,1.26]];for(let ne=1;ne<5;ne++){let[k,ie,Te]=O[ne-1],[Ee,Fe,et]=O[ne];M.quad([-ie,Te,k],[ie,Te,k],[Fe,et,Ee],[-Fe,et,Ee],f)}M.quad([-.87,1.26,2.48],[.87,1.26,2.48],[.8,2.16,1.53],[-.8,2.16,1.53],f),M.quad([-.78,1.45,2.327],[.78,1.45,2.327],[.735,2.075,1.662],[-.735,2.075,1.662],D),M.quad([-.82,.48,2.69],[.82,.48,2.69],[.82,1.07,2.69],[-.82,1.07,2.69],f),M.quad([-.83,.48,-2.69],[.83,.48,-2.69],[.83,1.49,-2.69],[-.83,1.49,-2.69],f),M.quad([-.89,1.49,-2.62],[.89,1.49,-2.62],[.84,2.17,-2.46],[-.84,2.17,-2.46],f),M.quad([-.7,1.61,-2.6],[.7,1.61,-2.6],[.7,2.03,-2.51],[-.7,2.03,-2.51],D);for(let ne of[-1,1]){let k=(ie,Te,Ee)=>[ne*ie,Te,Ee];M.quad(k(.91,1.49,-2.62),k(.91,1.51,2.37),k(.8,2.16,1.53),k(.84,2.17,-2.46),f),M.quad(k(.901,1.62,-2.37),k(.901,1.62,.42),k(.831,2.06,.39),k(.854,2.06,-2.31),D),M.quad(k(.907,1.6,.58),k(.915,1.54,2.09),k(.82,2.05,1.49),k(.833,2.05,.64),D);for(let ie of[-1.4,-.38])M.box(ne*.884,1.84,ie,.018,.41,.045,E);for(let ie of[-1.3,.69])M.box(ne*.948,1.38,ie,.022,.059,.19,E);M.box(ne*.947,1.22,-1.1,.018,.021,1.8,o("#abb1b0")),M.cylinder(k(.9,1.57,1.77),k(1.02,1.57,1.77),.024,.024,E,8),M.box(ne*1.06,1.6,1.75,.14,.16,.23,E),M.box(ne*.71,.92,2.704,.27,.24,.029,ee.whiteMetal),M.box(ne*.81,1.32,-2.655,.105,.43,.028,o("#a9372c"));for(let ie of[-1.53,1.52]){M.cylinder(k(.7,.35,ie),k(.935,.35,ie),.35,.35,ee.tire,24),M.cylinder(k(.937,.35,ie),k(.951,.35,ie),.19,.19,ee.metal,20);for(let Te=0;Te<6;Te++){let Ee=Te*_/6;M.cylinder(k(.953,.35,ie),k(.953,.35+.16*Math.sin(Ee),ie+.16*Math.cos(Ee)),.024,.024,ee.whiteMetal,6)}}}M.box(0,.76,2.707,.95,.15,.025,E),M.box(0,.58,2.71,1.45,.1,.025,E),M.box(0,1.11,2.62,.96,.035,.035,ee.metal),M.box(0,.5,-2.685,1.65,.14,.027,f),M.box(0,1.14,-2.663,.49,.19,.028,ee.whiteMetal)}),We(a,c,1.88,5.38,"駐車車両")}function xd(a,c,f,E){let D=E%3,F=1.72,O=4.35,ne=D===0?1.42:1.94,k=o(["#e8e6e1","#7a8994","#c1c4c6","#4a5155","#a49182"][E%5],0,.4,.22);M.scope(n.compose(a,0,c,f),()=>{M.box(0,.6,0,F,.66,O,k),M.box(0,(.9+ne)/2,D===0?-.28:0,F*.92,ne-.9,D===0?O*.55:O*.92,k);for(let ie of[-1,1]){for(let Te of[-1,1]){let Ee=Te*O*.31,Fe=ie*F*.42;M.cylinder([Fe-.1,.31,Ee],[Fe+.1,.31,Ee],.31,.31,ee.tire,16),M.box(ie*F*.36,.69,Te*(O/2+.006),.22,.14,.018,Te>0?ee.whiteMetal:o("#a6463a"))}M.box(ie*F*.464,ne-.27,.46,.022,.35,O*.28,ee.dark),D!==1&&M.box(ie*F*.464,ne-.27,-.64,.022,.35,O*.25,ee.dark)}M.box(0,ne-.28,D===0?O*.21:O*.465,F*.77,.39,.026,ee.dark)}),We(a,c,Math.abs(Math.cos(f))*F+Math.abs(Math.sin(f))*O,Math.abs(Math.sin(f))*F+Math.abs(Math.cos(f))*O,"駐車車両")}rt.parking.forEach((a,c)=>a.forEach(([f,E],D)=>xd(f,E,c<2?0:Math.PI/2,D+c)));for(let[a,c,f]of[[360,850,1921],[309,680,1972],[310,703,2022]])for(let E=a+8,D=0;E<c-8;E+=20,D++){let[F,O]=ht(E,f);M.scope(n.compose(F,0,O,(D%3-1)*.1),()=>{let ne=o(["#454c53","#708e81","#a76855","#b4b9bb"][D%4]);for(let k of[-.56,.56])for(let ie=0;ie<12;ie++){let Te=ie*_/12,Ee=(ie+1)*_/12;M.cylinder([0,.31+.3*Math.cos(Te),k+.3*Math.sin(Te)],[0,.31+.3*Math.cos(Ee),k+.3*Math.sin(Ee)],.019,.019,ee.tire,6)}for(let[k,ie]of[[[0,.31,-.56],[0,.81,-.24]],[[0,.81,-.24],[0,.68,.38]],[[0,.68,.38],[0,.38,-.05]],[[0,.38,-.05],[0,.31,-.56]],[[0,.38,-.05],[0,.81,-.24]],[[0,.31,.56],[0,.97,.37]]])M.cylinder(k,ie,.023,.023,ne,6);M.box(0,.84,-.26,.16,.045,.25,ee.dark),M.cylinder([-.24,.98,.37],[.24,.98,.37],.019,.019,ee.metal,6)})}for(let a of["TERESA","TRACTOR","EXCAVATOR","PLAYGROUND"]){let c=m.locations.find(D=>D.id===a),[f,E]=c.pos;c.approach=[f,E+2.6],c.marker=[f,a==="TERESA"?2.7:2.3,E],he.push(c),a==="TERESA"&&gd(f,E),(a==="TRACTOR"||a==="EXCAVATOR")&&M.scope(n.compose(f,0,E,.3),()=>{let D=a==="TRACTOR",F=o(D?"#427346":"#d6aa35");M.box(0,.67,0,1.4,.56,2.42,F),M.box(0,1.52,-.38,1.22,1.06,1.16,ee.dark),M.box(0,2.12,-.38,1.38,.16,1.31,F);for(let O of[-1,1])if(D)for(let[ne,k]of[[-.73,.61],[.83,.37]])M.cylinder([O*.64,k,ne],[O*.97,k,ne],k,k,ee.tire,18);else M.box(O*.66,.32,0,.43,.6,2.52,ee.tire);D?M.box(0,1.02,.66,1.03,.65,1.35,F):(M.cylinder([0,1.02,.42],[0,2.38,1.15],.12,.12,F,8),M.cylinder([0,2.38,1.15],[0,.45,2.08],.11,.1,F,8),M.box(0,.31,2.18,.77,.44,.52,F)),We(f,E,2.1,D?3.3:4,"車両")})}function fi(a,c,f=.26){if(!Pt(a,c,_t)||Pt(a,c,v)||Pt(a,c,Hc)||ol.some(([E,D])=>Gt(a,c,E,D)<f))return!1;for(let E of Ct){let D=Math.max(Math.abs(a-E.x)-E.w/2,0),F=Math.max(Math.abs(c-E.z)-E.d/2,0);if(D*D+F*F<f*f)return!1}for(let E of ye)if(Math.hypot(a-E.x,c-E.z)<f+E.r)return!1;return!0}function ml(a,c){return a>=re[0]+.05&&a<=me[0]-.15&&c>=re[1]+.05&&c<=me[1]-.05?Ce:a>=re[0]-1.65&&a<re[0]+.05&&hi.some(([f,E])=>c>=L(pe,f)[1]+.15&&c<=L(pe,E)[1]-.15)?Ce*p((a-re[0]+1.65)/1.7,0,1):0}function Ss(a,c=10){if(fi(a[0],a[1],.31))return[...a];for(let f=.4;f<=c;f+=.35)for(let E=0;E<32;E++){let D=E*_/32,F=a[0]+Math.sin(D)*f,O=a[1]+Math.cos(D)*f;if(fi(F,O,.31))return[F,O]}return null}let gl=m.locations.find(a=>a.id==="GYM");gl.approach=[_e[0],re[1]+18.8],gl.marker=[_e[0],3.1+Ce,re[1]+18.8],he.push(gl);for(let a of he)a.id==="WC"&&(a.approach=[(lt+z)/2,me[1]+5.5]),a.approach=Ss(a.approach)||Ss(a.pos);e(.62,"来場者・ヤギ・走行車両の動きを準備しています");function xl(a=0,c=!1){let f=new s,E=o(c?"#233750":["#7f9c9a","#d8c5ad","#a76250","#4c6670","#787c58","#b7b4a9","#655c73","#e3d1b1"][a%8],6,.93),D=o(c?"#233750":["#41494e","#746854","#4a575a","#485669"][a%4],6,.91),F=o(["#cba584","#d8b69a","#bc9879","#d0ad8c"][a%4],0,.78),O=o(["#383733","#4b4137","#77756e"][a%3],0,.96),ne=[[.88,.19,.126],[.98,.19,.13],[1.16,.218,.148],[1.32,.243,.144],[1.385,.222,.127],[1.445,.075,.064]];for(let k=0;k<ne.length-1;k++)for(let ie=0;ie<20;ie++){let Te=ie/20*_,Ee=(ie+1)/20*_,Fe=ne[k],et=ne[k+1],Wt=(It,bt)=>[Math.cos(bt)*It[1],It[0],Math.sin(bt)*It[2]];f.quad(Wt(Fe,Te),Wt(et,Te),Wt(et,Ee),Wt(Fe,Ee),E,1,1)}f.cylinder([0,1.4,0],[0,1.49,0],.061,.062,F,10),f.sphere(0,1.57,.012,.114,.142,.107,F,16,11),f.sphere(0,1.575,-.009,.116,.145,.11,O,20,10,0,1.26),f.sphere(0,1.58,.127,.017,.032,.024,F,10,7);for(let k of[-1,1])f.sphere(k*.111,1.57,.008,.024,.042,.026,F,9,7),f.sphere(k*.039,1.601,.111,.009,.004,.005,ee.black,8,5),f.cylinder([k*.026,1.621,.104],[k*.053,1.621,.098],.004,.004,O,5),f.animate([k*.23,1.37,0],k,()=>{f.sphere(k*.235,1.335,0,.082,.105,.085,E,12,9),f.sphere(k*.295,1.08,.035,.064,.073,.064,E,12,8),f.cylinder([k*.23,1.37,0],[k*.295,1.08,.035],.079,.064,E,12),f.cylinder([k*.295,1.08,.035],[k*.29,.9,.06],.063,.045,E,11),f.sphere(k*.287,.859,.065,.043,.067,.038,F,11,7)}),f.animate([k*.108,.88,0],k*2,()=>{f.cylinder([k*.105,.9,0],[k*.12,.49,.015],.098,.077,D,12),f.cylinder([k*.12,.49,.015],[k*.12,.1,0],.077,.06,D,11),f.sphere(k*.12,.077,.052,.075,.068,.146,o("#383d3c",0,.75),12,7),f.box(k*.12,.034,.054,.142,.035,.25,o("#c1beb1"))});if(!c&&a%3===0&&(f.sphere(0,1.7,-.006,.126,.045,.126,o("#b4a481",6),14,8),f.box(0,1.676,.125,.18,.018,.14,o("#b4a481",6))),!c&&a%4===1){f.sphere(0,1.17,-.16,.16,.23,.1,o("#73664e",6),13,9);for(let k of[-1,1])f.cylinder([k*.16,1.36,.04],[k*.12,1.03,.09],.017,.017,o("#756b58"),7)}return!c&&a%4===2&&(f.cylinder([.29,.91,.06],[.32,.66,.06],.01,.01,o("#aa9675"),7),f.box(.32,.57,.06,.19,.24,.22,o("#d3c2a1",6))),f}let Qc=[],_d=d.add("鎌倉ガーディアンズ",(a,c)=>{a.clearRect(0,0,c,c),a.fillStyle="#e8c843",a.font="bold 54px sans-serif",a.textAlign="center",a.fillText("鎌倉ガーディアンズ",c/2,c*.58)});for(let a=0;a<lr.length;a++){let[c,f]=lr[a].position,E=a===0?Math.PI/2:-Math.PI/2,D=xl(1,!0);D.scope(n.compose(0,0,0,Math.PI),()=>D.sign(0,1.25,.15,.35,.12,_d,!0)),Qc.push({staff:D,instances:[{matrix:n.compose(c+(a===0?-1:-.1),0,f+1.35,E),info:[0,0,0,0]}]})}function yd(a){let c=xl(a),f=new s;for(let D=0;D<c.used;D+=60)if(!(Math.abs(c.data[D+19])>1.5&&Math.abs(c.data[D+19])<3))for(let F=0;F<3;F++){let O=D+F*20,ne={color:Array.from(c.data.slice(O+8,O+11)),p:Array.from(c.data.slice(O+12,O+16)),ao:c.data[O+11]};f.vertex([c.data[O],c.data[O+1]-.4,c.data[O+2]],Array.from(c.data.slice(O+3,O+6)),Array.from(c.data.slice(O+6,O+8)),ne)}let E=o(["#41494e","#746854","#4a575a","#485669"][a%4],6,.9);for(let D of[-1,1])f.cylinder([D*.105,.49,0],[D*.12,.46,.35],.1,.08,E,12),f.sphere(D*.12,.46,.35,.078,.084,.085,E,12,8),f.cylinder([D*.12,.46,.35],[D*.12,.105,.39],.078,.058,E,12),f.sphere(D*.12,.078,.45,.073,.06,.145,o("#383d3c"),12,8),f.box(D*.12,.035,.45,.14,.035,.25,o("#b8b9ad"));return f}function vd(a){let c=new s,f=o(["#dfb357","#72a0a2","#aa6357","#8c9a66"][a%4],6,.92),E=o("#506277",6,.91),D=o("#d4ad8b",0,.77),F=o("#3d342e",0,.94);c.sphere(0,.83,0,.2,.3,.145,f,14,10),c.cylinder([0,1.04,0],[0,1.17,0],.065,.06,D,10),c.sphere(0,1.34,0,.165,.19,.15,D,16,11),c.sphere(0,1.4,-.015,.17,.145,.153,F,16,9,0,1.35);for(let O of[-1,1])c.sphere(O*.06,1.36,.141,.01,.008,.008,ee.dark,8,5),c.animate([O*.19,1.04,0],O,()=>{c.cylinder([O*.19,1.02,0],[O*.27,.65,.025],.067,.045,f,10),c.sphere(O*.27,.62,.03,.048,.06,.044,D,10,7)}),c.animate([O*.09,.58,0],O*2,()=>{c.cylinder([O*.09,.58,0],[O*.11,.25,0],.079,.062,E,10),c.cylinder([O*.11,.25,0],[O*.11,.09,.025],.06,.05,E,10),c.sphere(O*.11,.055,.085,.072,.052,.115,ee.dark,10,7)});return c}function Md(){let a=new s,c=o("#f7f6f1",6,.96),f=o("#eeb5bf",0,.84),E=o("#252629",0,.74),D=o("#d3343f",6,.82),F=o("#a4cfe2",6,.88),O=o("#80acc0",6,.88),ne=o("#83b8a5",6,.82),k=o("#e3c538",6,.82);a.sphere(0,.75,-.02,.54,.63,.41,c,32,22),a.sphere(0,1.18,-.01,.44,.3,.36,c,28,16);for(let Ge of[-1,1]){a.animate([Ge*.27,.22,.13],Ge,()=>{a.sphere(Ge*.27,.145,.13,.205,.145,.27,c,22,13);for(let zt=-1;zt<=1;zt++)a.sphere(Ge*.27+zt*.1,.095,.34,.06,.045,.085,c,11,8)});let ct=Ge===-1,Dt=[Ge*.43,1.12,-.04],kt=[Ge*.54,ct?1.1:.96,.075],ut=[Ge*.64,ct?1.1:.83,ct?.25:.18];if(a.sphere(...Dt,.19,.21,.18,c,18,12),a.cylinder(Dt,kt,.145,.13,c,16),a.cylinder(kt,ut,.13,.12,c,16),a.sphere(...ut,.15,.15,.14,c,18,12),ct){a.sphere(ut[0],ut[1]-.015,ut[2]+.134,.052,.06,.014,f,12,9);for(let zt=-1;zt<=1;zt++)a.sphere(ut[0]+zt*.047,ut[1]+.074,ut[2]+.115,.02,.027,.009,f,9,7)}}let ie=[[-.36,.48,-.3],[-.53,.41,-.43],[-.7,.44,-.49],[-.83,.55,-.5],[-.9,.71,-.47],[-.86,.79,-.43]];for(let Ge=1;Ge<ie.length;Ge++){let ct=.091-Ge*.005;a.cylinder(ie[Ge-1],ie[Ge],ct+.006,ct,c,14),a.sphere(...ie[Ge],ct,ct,ct,c,14,10)}a.sphere(0,1.67,.055,.7,.55,.51,c,36,24);let Te=(Ge,ct)=>[(Ge[0]-550)*.00445,2.2+(667-Ge[1])*.00445,ct],Ee=(Ge,ct,Dt,kt)=>Array.from({length:8},(ut,zt)=>{let on=(zt+1)/8,Xt=1-on;return[0,1].map(fn=>Xt*Xt*Xt*Ge[fn]+3*Xt*Xt*on*ct[fn]+3*Xt*on*on*Dt[fn]+on*on*on*kt[fn])}),Fe=(Ge,ct,Dt)=>Array.from({length:5},(kt,ut)=>{let zt=(ut+1)/5,on=1-zt;return[0,1].map(Xt=>on*on*Ge[Xt]+2*on*zt*ct[Xt]+zt*zt*Dt[Xt])}),et=[[[508,674],...Ee([508,674],[481,643],[444,624],[408,633]),[390,640],...Fe([390,640],[385,645],[387,653]),...Ee([387,653],[389,675],[402,702],[416,721])],[[594,674],...Ee([594,674],[619,656],[660,645],[690,659]),[712,672],...Fe([712,672],[718,678],[714,685]),...Ee([714,685],[708,701],[683,734],[671,743])]],Wt=[[[444,661],...Ee([444,661],[456,661],[467,670],[469,680]),...Ee([469,680],[472,691],[469,701],[463,708]),[430,706],...Fe([430,706],[419,696],[421,684]),...Ee([421,684],[423,673],[433,663],[444,661])],[[650,677],...Ee([650,677],[663,678],[672,690],[672,702]),...Ee([672,702],[672,712],[665,722],[658,727]),[629,705],...Fe([629,705],[623,694],[631,685]),...Ee([631,685],[638,679],[643,677],[650,677])]];function It(Ge,ct,Dt,kt=!1){let ut=Ge.map(Xt=>Te(Xt,ct)),zt=[ut.reduce((Xt,fn)=>Xt+fn[0],0)/ut.length,ut.reduce((Xt,fn)=>Xt+fn[1],0)/ut.length,ct],on=ut.reduce((Xt,fn,ws)=>Xt+fn[0]*ut[(ws+1)%ut.length][1]-ut[(ws+1)%ut.length][0]*fn[1],0);for(let Xt=0;Xt<ut.length;Xt++){let fn=(Xt+1)%ut.length;on>0!==kt?a.tri(zt,ut[Xt],ut[fn],Dt):a.tri(zt,ut[fn],ut[Xt],Dt)}return ut}for(let Ge of[-1,1]){let ct=et[Ge<0?0:1],Dt=It(ct,.135,c),kt=It(ct,.065,c,!0);for(let ut=0;ut<ct.length;ut++){let zt=(ut+1)%ct.length;a.quad(Dt[ut],kt[ut],kt[zt],Dt[zt],c)}It(Wt[Ge<0?0:1],.142,f),a.sphere(Ge*.245,1.78,.526,.096,.099,.027,E,20,14),a.sphere(Ge*.225,1.815,.553,.027,.034,.01,c,10,8),a.sphere(Ge*.274,1.747,.552,.012,.014,.008,c,8,6),a.tube([[Ge*.15,1.967,.477],[Ge*.22,2.005,.471],[Ge*.3,1.979,.458]],.011,E,8),a.tube([[Ge*.16,2.055,.455],[Ge*.21,2.069,.448]],.009,E,7);for(let ut=-1;ut<=1;ut++){let zt=1.57+ut*.08;a.tube([[Ge*.49,zt,.432],[Ge*.64,zt+ut*.018,.393],[Ge*.8,zt+ut*.033,.338]],.008,E,7)}}a.sphere(0,1.585,.567,.053,.033,.023,f,14,10);for(let Ge of[-1,1]){let ct=[];for(let Dt=0;Dt<=10;Dt++){let kt=Dt/10;ct.push([Ge*.19*kt,1.515-.068*Math.sin(Math.PI*kt),.57-.044*kt])}a.tube(ct,.011,E,8)}let bt=[];for(let Ge=0;Ge<=28;Ge++){let ct=Ge/28*Math.PI*2;bt.push([Math.sin(ct)*.445,1.205,Math.cos(ct)*.351-.01])}a.tube(bt,.029,D,9),a.sphere(0,1.17,.367,.056,.044,.025,o("#d9d4ce",0,.9),13,8),a.sphere(-.01,1.125,.413,.21,.055,.064,c,20,12),a.sphere(-.165,1.135,.458,.026,.026,.021,c,12,8),a.tri([.18,1.12,.437],[.3,1.18,.423],[.26,1.08,.424],c),a.sphere(-.17,1.143,.48,.01,.01,.008,E,8,6);for(let Ge=0;Ge<5;Ge++)a.sphere(-.1+Ge*.05,1.104,.476,.007,.007,.006,E,7,5);a.tube([[-.37,1.14,.288],[-.33,1,.366],[-.23,.84,.396],[-.1,.68,.42],[.08,.55,.445],[.24,.51,.457]],.024,k,9),a.sphere(.28,.555,.415,.285,.297,.15,O,24,16),a.sphere(.28,.565,.532,.251,.259,.047,F,24,16);for(let Ge=0;Ge<3;Ge++)for(let ct=0;ct<6-Ge;ct++){let Dt=.083+ct*.078+Ge*.04,kt=.828+Ge*.058,ut=.51-Ge*.02;a.sphere(Dt,kt,ut,.046,.046,.044,ne,11,8)}for(let Ge of[-1,1])a.sphere(.28+Ge*.078,.603,.582,.015,.019,.01,E,9,7),a.sphere(.28+Ge*.078,.475,.575,.01,.013,.008,E,8,6);return a.tube([[.21,.53,.577],[.25,.504,.581],[.28,.5,.582],[.32,.515,.58],[.35,.538,.575]],.009,E,8),a}let eh=Array.from({length:8},()=>[]),th=Array.from({length:4},()=>[]),ss=[],bd=0;function rs(a,c,f=0,E=!1,D=1,F=null,O="visitor"){let ne=bd++,k=O==="child",ie=ne%(k?4:8),Te={matrix:n.compose(a,0,c,f,D),info:[y(0,6.28),E?1:0,0,0]},Ee={x:a,z:c,yaw:f,scale:D,instance:Te,walk:E,path:F,pathIndex:0,speed:y(.4,.64),group:ie,type:O,index:ne};(k?th:eh)[ie].push(Te),ss.push(Ee)}let Sd=["T-15","TRACTOR","EXCAVATOR","BOARDING_1","BOARDING_2"];for(let a of Sd){let c=m.records.find(O=>O.id===a)||m.locations.find(O=>O.id===a),[f,E]=c.pos,[D,F]=c.approach;for(let[O,ne]of[[-.85,0],[.85,0],[-.5,.95],[.55,1.15]]){let k=Ss([D+O,F+ne],1.8);k&&rs(k[0],k[1],Math.atan2(f-k[0],E-k[1]),!1,1,null,"gathering")}}for(let a of[-1,1])for(let c of[-1.05,0,1.05]){let f=a===-1?re[0]+1.95:me[0]-1.95,E=rt.exhibitsZ+c;fi(f,E)&&rs(f,E,a*Math.PI/2,!1,1,null,"gathering")}for(let[a,c]of he.filter(f=>["F","S","T"].includes(f.category)&&f.approach).entries()){let f=c.yaw||0,E=a%3?-1:1,D=c.approach,F=D[0]-Math.sin(f)*1.05+Math.cos(f)*.95*E,O=D[1]-Math.cos(f)*1.05-Math.sin(f)*.95*E;fi(F,O,.2)&&rs(F,O,Math.atan2(c.pos[0]-F,c.pos[1]-O),!1,y(.88,1.04))}for(let a of m.records.filter(c=>c.kind==="tent")){let c=a.yaw||0,f=a.id==="F-10"?-1.5:0;rs(a.pos[0]+Math.cos(c)*f-Math.sin(c)*.52,a.pos[1]-Math.sin(c)*f-Math.cos(c)*.52,c,!1,.93,null,"vendor")}let _l=[[[0,10],[2,9],[2,-11],[20,-12],[26,-12],[26,-2],[26,12],[16,12],[0,10]],[[27,47],[29,54],[29,63],[31,68],[31,75],[28,77],[28,70],[29,60],[27,47]],[[-41,13],[-13,13],[-12,-4],[-15,-17],[-33,-19],[-41,13]],[[19,18],[26,21],[28,32],[29,44],[27,47],[28,32],[26,21],[19,18]]],wd=[[-2.4,-2,-1.6],[-.8,0,.8,1.6,2.4,3.2],[-4,-3.2,-2.4,-2,-1.6,-.8,0,.8],[-3.2,-2.4,-1.6,-.8,0,.8,1.6,2.4,3.2,4]];function Td(a,c){let f=a.length-1;return Array.from({length:f},(E,D)=>{let F=a[(D+f-1)%f],O=a[(D+1)%f],ne=O[0]-F[0],k=O[1]-F[1],ie=Math.hypot(ne,k)||1;return[a[D][0]-k/ie*c,a[D][1]+ne/ie*c]})}function Ed(a){for(let c=0;c<a.length;c++){let f=a[c],E=a[(c+1)%a.length],D=Math.ceil(Math.hypot(E[0]-f[0],E[1]-f[1])/.7);for(let F=0;F<=D;F++){let O=F/D;if(!fi(f[0]+(E[0]-f[0])*O,f[1]+(E[1]-f[1])*O,.19))return!1}}return!0}let Ad=_l.map((a,c)=>wd[c].map(f=>Td(a,f)).filter(Ed)),nh=[0,2,3,2,3,1,2,3,0,3],Cd=[0,0,0,0];for(let a=0;a<120;a++){let c=nh[a%nh.length],f=Cd[c]++,E=Ad[c],D=E.length?E[(f+Math.floor(f/(_l[c].length-1)))%E.length]:_l[c].slice(0,-1),F=f%D.length,O=D[F],ne=D[(F+1)%D.length],k=y(0,1),ie=[O[0]+(ne[0]-O[0])*k,O[1]+(ne[1]-O[1])*k];if(fi(ie[0],ie[1],.19)||(ie=Ss(ie,2)),!ie)continue;let Te=a%3===0;rs(ie[0],ie[1],Math.atan2(ne[0]-O[0],ne[1]-O[1]),!0,Te?1:y(.88,1.05),D,Te?"child":"visitor"),ss[ss.length-1].pathIndex=(F+1)%D.length}for(let a=0;a<7;a++)rs(_e[0]+(a-3)*1.6,re[1]+9.5+a%2*.6,0,!0,.8,null,"performer");for(let a of[[7,11],[8,11.5],[24,-9],[25,-8.7],[-12,-23],[-13,-23.4],[-39,-44],[49,32],[50,33],[10,12],[11,12.4],[21,-10],[22,-10.4],[-10,-22],[-11,-22.4],[-37,-42],[47,34],[48,35]])fi(...a,.23)&&rs(a[0],a[1],y(0,_),!1,y(.85,1));let Qt={};Qt.base=new r(i,j,{name:"Architecture, ground and booths"}),Qt.details=new r(i,M,{name:"Furniture, windows and equipment"}),Qt.foliage=new r(i,Se,{name:"Foliage",instances:[{matrix:n.identity(),info:[0,0,1,0]}]}),Qt.roof=new r(i,Ve,{name:"Gym roof"}),Qt.signs=new r(i,Re,{name:"Readable booth signs"}),Qt.distant=new r(i,Ri,{name:"Approximate neighbourhood",shadow:!1}),Qt.flags=new r(i,dl,{name:"Fabric banners",instances:Jc});let ih=Array.from({length:4},()=>[]),Rd=0;for(let a=0;a<ke.length;a++){if(ke[a].addedGymSeat||a%2!==1&&!(ke[a].gym&&a%5===2))continue;let c=ke[a];ih[Rd++%4].push({matrix:n.compose(c.x,c.gym?Ce:0,c.z,c.yaw,.94),info:[0,0,0,0]})}Qt.boardingStaff=Qc.map(({staff:a,instances:c})=>new r(i,a,{name:"乗降場の誘導員",instances:c})),Qt.seated=ih.map((a,c)=>new r(i,yd(c),{name:"Seated visitors "+c,instances:a}));let ua=Yc(0),sh=n.compose(ua.x,0,ua.z,ua.yaw);Qt.vehicle=new r(i,tn,{name:"Generic mobility vehicle",instances:[{matrix:sh,info:[0,0,0,0]}],dynamic:!0}),Qt.vehicleGlass=new r(i,cl,{name:"Mobility vehicle windshield",instances:[{matrix:sh,info:[0,0,0,0]}],dynamic:!0,shadow:!1});let rh=Array.from({length:4},(a,c)=>({matrix:n.compose(Jt[0]+(c%2-.5)*2,0,Jt[1]+(Math.floor(c/2)-.5)*2.2,c*1.8,c===3?.64:1),info:[c,0,0,0]}));Qt.goats=new r(i,sd(),{name:"Goats",instances:rh,dynamic:!0});let dr=[[29,58],[29,65],[28,72],[30,74],[31,69],[31,61],[29,58]],ah=Ss(dr[0],2)||dr[0],un={x:ah[0],z:ah[1],yaw:0,index:1,speed:.56};Qt.kamanyan=new r(i,Md(),{name:"かまくらいふ かまにゃん",instances:[{matrix:n.compose(un.x,0,un.z,0,.82),info:[0,.65,0,0]}],dynamic:!0}),Qt.actors=eh.map((a,c)=>new r(i,xl(c),{name:"Visitors "+c,instances:a,dynamic:!0})),Qt.children=th.map((a,c)=>new r(i,vd(c),{name:"Children "+c,instances:a,dynamic:!0})),e(.81,"看板と案内データを仕上げています"),d.upload(i.gl,matchMedia("(pointer:coarse)").matches||innerWidth<650?256:512),i.atlas=d;let oh=70,yl=0,fr=ua,lh=0,ch=ss.filter(a=>a.type!=="vendor"&&a.type!=="performer"&&a.type!=="gathering");function hh(a){oh=p(a,0,100);let c=Math.round(ch.length*oh/100);ch.forEach((f,E)=>f.hidden=E>=c),ss.filter(f=>f.type==="vendor"||f.type==="performer"||f.type==="gathering").forEach(f=>f.hidden=a===0),Qt.seated.forEach(f=>f.visible=a>10),i.shadowDirty=!0}hh(70);function Id(a,c){let f=dr[un.index],E=f[0]-un.x,D=f[1]-un.z,F=Math.hypot(E,D),O=F<.3;if(F<.3)un.index=(un.index+1)%dr.length;else{let k=Math.min(F,un.speed*c),ie=un.x+E/F*k,Te=un.z+D/F*k;fi(ie,Te,.24)?(un.x=ie,un.z=Te,un.yaw=Math.atan2(E,D),O=k>0):un.index=(un.index+1)%dr.length}Qt.kamanyan.instances[0].matrix=n.compose(un.x,ml(un.x,un.z)+Math.max(0,Math.sin(a*7))*.025,un.z,un.yaw,.82),Qt.kamanyan.instances[0].info[1]=O?.65:0,Qt.kamanyan.updateInstances(),fr=Yc(a*.88+lh);let ne=n.compose(fr.x,0,fr.z,fr.yaw);if(Qt.vehicle.instances[0].matrix=ne,Qt.vehicleGlass.instances[0].matrix=ne,Qt.vehicle.updateInstances(),Qt.vehicleGlass.updateInstances(),a-yl>.055){let k=Math.min(.18,a-yl);yl=a;for(let ie of ss){if(ie.walk&&ie.path&&!ie.hidden){let Fe=ie.path[ie.pathIndex],et=Fe[0]-ie.x,Wt=Fe[1]-ie.z,It=Math.hypot(et,Wt);if(It<.35)ie.pathIndex=(ie.pathIndex+1)%ie.path.length;else{let bt=ie.x+et/It*ie.speed*k,Ge=ie.z+Wt/It*ie.speed*k;fi(bt,Ge,.19)?(ie.x=bt,ie.z=Ge,ie.yaw=Math.atan2(et,Wt)):ie.pathIndex=(ie.pathIndex+1)%ie.path.length}}let Te=ml(ie.x,ie.z),Ee=ie.yaw;ie.type==="performer"&&(Ee=Math.sin(a*.5+ie.index*.3)*.12,Te+=.04+Math.max(0,Math.sin(a*2.4+ie.index*.4))*.07),ie.instance.matrix=n.compose(ie.x,ie.hidden?-100:Te,ie.z,Ee,ie.scale),ie.instance.info[1]=ie.hidden?0:ie.walk?ie.type==="performer"?.8:1:0}Qt.actors.forEach(ie=>ie.updateInstances()),Qt.children.forEach(ie=>ie.updateInstances()),rh.forEach((ie,Te)=>{let Ee=Te*1.8+Math.sin(a*.1+Te)*.3;ie.matrix=n.compose(Jt[0]+(Te%2-.5)*2+Math.sin(a*.1+Te)*.2,0,Jt[1]+(Math.floor(Te/2)-.5)*2.2,Ee,Te===3?.64:1)}),Qt.goats.updateInstances()}}e(.9,"歩行できる経路を確認しています");function Pd(a){let c=!a;Qt.vehicleGlass.visible!==c&&(Qt.vehicleGlass.visible=c,i.shadowDirty=!0)}return{data:m,markers:he,colliders:Ct,buildings:He,campus:_t,field:St,restricted:Hc,track:En,trackLength:Ms,ropeSegments:ol,boardingGaps:lr,coneBars:$c,meshes:Qt,trunks:ye,seats:ke,atlas:d,categoryColors:U,isWalkable:fi,walkHeight:ml,nearestWalkable:Ss,update:Id,setCrowd:hh,setRideView:Pd,setCarStart:(a,c)=>{lh=a-c*.88},p:L,getCar:()=>fr,getKamanyan:()=>[un.x,2.18,un.z],polyInside:Pt,actorCount:ss.length}};window.FestaNavigation=class{constructor(i){this.world=i,this.step=.7;let e=i.campus.map(([n])=>n),t=i.campus.map(([,n])=>n);this.x0=Math.floor(Math.min(...e))-1,this.z0=Math.floor(Math.min(...t))-1,this.nx=Math.ceil((Math.max(...e)+1-this.x0)/this.step)+1,this.nz=Math.ceil((Math.max(...t)+1-this.z0)/this.step)+1,this.size=this.nx*this.nz,this.open=new Uint8Array(this.size);for(let n=0;n<this.nz;n++)for(let s=0;s<this.nx;s++){let r=this.point(n*this.nx+s);this.open[n*this.nx+s]=i.isWalkable(r[0],r[1],.34)?1:0}}point(i){return[this.x0+i%this.nx*this.step,this.z0+Math.floor(i/this.nx)*this.step]}index(i){return Math.round((i[1]-this.z0)/this.step)*this.nx+Math.round((i[0]-this.x0)/this.step)}nearest(i){let e=Math.round((i[0]-this.x0)/this.step),t=Math.round((i[1]-this.z0)/this.step),n=-1,s=1/0;for(let r=0;r<18;r++){for(let l=-r;l<=r;l++)for(let o=-r;o<=r;o++){if(r&&Math.abs(o)!==r&&Math.abs(l)!==r)continue;let h=e+o,u=t+l;if(h<0||h>=this.nx||u<0||u>=this.nz)continue;let p=u*this.nx+h;if(!this.open[p])continue;let _=this.point(p),m=Math.hypot(_[0]-i[0],_[1]-i[1]);m<s&&(s=m,n=p)}if(n>=0)return n}return-1}lineFree(i,e,t=.3){let n=Math.hypot(e[0]-i[0],e[1]-i[1]),s=Math.ceil(n/.16);for(let r=0;r<=s;r++)if(!this.world.isWalkable(i[0]+(e[0]-i[0])*r/Math.max(1,s),i[1]+(e[1]-i[1])*r/Math.max(1,s),t))return!1;return!0}find(i,e){let t=this.nearest(i),n=this.nearest(e);if(t<0||n<0)return null;let s=new Float32Array(this.size);s.fill(1/0);let r=new Int32Array(this.size);r.fill(-1);let l=new Uint8Array(this.size),o=[],h=(T,I)=>{let g={i:T,f:I},C=o.length;for(o.push(g);C;){let b=C-1>>1;if(o[b].f<=g.f)break;o[C]=o[b],C=b}o[C]=g},u=()=>{let T=o[0],I=o.pop();if(o.length){let g=0;for(;2*g+1<o.length;){let C=2*g+1;if(C+1<o.length&&o[C+1].f<o[C].f&&C++,o[C].f>=I.f)break;o[g]=o[C],g=C}o[g]=I}return T.i},p=n%this.nx,_=Math.floor(n/this.nx),m=T=>{let I=Math.abs(T%this.nx-p),g=Math.abs(Math.floor(T/this.nx)-_);return Math.max(I,g)+.41421356*Math.min(I,g)};s[t]=0,h(t,m(t));let w=!1;for(;o.length;){let T=u();if(l[T])continue;if(l[T]=1,T===n){w=!0;break}let I=T%this.nx,g=Math.floor(T/this.nx);for(let C=-1;C<=1;C++)for(let b=-1;b<=1;b++){if(!b&&!C)continue;let U=I+b,x=g+C;if(U<0||U>=this.nx||x<0||x>=this.nz)continue;let N=x*this.nx+U;if(!this.open[N]||l[N]||b&&C&&(!this.open[g*this.nx+U]||!this.open[x*this.nx+I]))continue;let G=s[T]+(b&&C?1.41421356:1);G<s[N]&&(s[N]=G,r[N]=T,h(N,G+m(N)))}}if(!w)return null;let y=[],L=n;for(;L>=0&&(y.push(this.point(L)),L!==t);)L=r[L];y.reverse(),this.lineFree(i,y[0])&&y.unshift([...i]),this.lineFree(y[y.length-1],e)&&y.push([...e]);let S=[y[0]],d=0;for(;d<y.length-1;){let T=y.length-1;for(;T>d+1&&!this.lineFree(y[d],y[T]);)T--;S.push(y[T]),d=T}return S}};(async function(){let i=A=>document.getElementById(A),e=A=>String(A??"").replace(/[&<>"']/g,V=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[V]),t={search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',overview:'<path d="m3 8 9-5 9 5-9 5-9-5Z M3 12l9 5 9-5M3 16l9 5 9-5"/>',route:'<circle cx="5" cy="5" r="2"/><circle cx="19" cy="19" r="2"/><path d="M7 5h8a4 4 0 0 1 0 8H9a4 4 0 0 0 0 8h5"/>',settings:'<path d="M4 6h16M4 12h16M4 18h16"/><circle cx="9" cy="6" r="2" fill="currentColor"/><circle cx="16" cy="12" r="2" fill="currentColor"/><circle cx="8" cy="18" r="2" fill="currentColor"/>',help:'<circle cx="12" cy="12" r="9"/><path d="M9.3 9a2.8 2.8 0 0 1 5.4 1c0 2-2.7 2-2.7 4M12 17h.01"/>',arrow:'<path d="M4 12h15m-5-5 5 5-5 5"/>',back:'<path d="M20 12H5m5-5-5 5 5 5"/>',close:'<path d="m6 6 12 12M6 18 18 6"/>',expand:'<path d="M9 3H3v6M15 3h6v6M3 15v6h6M21 15v6h-6"/>',walk:'<circle cx="13" cy="4" r="2"/><path d="m11 9 3 2 4 1M11 8l-3 5-4 1M11 9l-1 7-4 5m4-5 5 1 2 5"/>',pin:'<path d="M19 10c0 6-7 12-7 12S5 16 5 10a7 7 0 0 1 14 0Z"/><circle cx="12" cy="10" r="2.5"/>',eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>'};function n(A){return'<svg viewBox="0 0 24 24" aria-hidden="true">'+(t[A]||t.pin)+"</svg>"}function s(A=document){A.querySelectorAll("[data-icon]").forEach(V=>V.innerHTML=n(V.dataset.icon))}s();let r=FESTA_DATA,l=[...r.records,...r.locations],o=Object.fromEntries(l.map(A=>[A.id,A])),h={F:"#a64c35",S:"#385e76",T:"#4e6c43",P:"#83503e",M:"#ab8450",I:"#28595c"},u=[["F-truck","[F] 飲食（キッチンカー）"],["F-tent","[F] 飲食（テント）"],["S-goods","[S] 物販"],["S-paid","[S] 有料ワークショップ・スポーツ・体験"],["T","[T] 無料・情報・スポーツ・体験"],["P","[P] ステージ出演"]],p=Object.fromEntries(u),_={M:"交流・モビリティー",I:"会場案内",P:"体育館の出演団体"},m=new Set(["S-1","S-2","S-3","S-4","S-5","S-6","S-7","S-13"]),w=new Set(["S-8","S-9","S-10","S-11","S-12"]),y=new Set(r.locations.map(A=>A.id));function L(A){return y.has(A.id)?A.category:A.category==="F"?A.kind==="truck"?"F-truck":"F-tent":A.category==="S"?m.has(A.id)?"S-goods":w.has(A.id)?"S-paid":null:A.category==="T"||A.category==="P"?A.category:null}function S(A){return y.has(A.id)?_[A.category]:p[L(A)]}let d=matchMedia("(pointer:coarse)").matches||innerWidth<650,T=matchMedia("(prefers-reduced-motion: reduce)").matches,I,g,C,b=!1,U=0,x=0,N=0,G,Z=null,R={mode:"welcome",pos:[0,11],yaw:.1,pitch:0,orbitYaw:-.48,orbitPitch:.79,orbitDist:115,orbitTarget:[0,0,22],returnPos:null,selected:null,nearest:null,path:null,pathIndex:1,auto:!1,targetId:null,labels:!0,showRoof:!0,paused:!1,sheet:null,crowd:70,light:"day",distanceWalked:0,rideYaw:0,boardingStop:null,runMode:!1,quality:d?"standard":"high"},K={},H={x:0,y:0,active:!1,pid:null},J={active:!1,pid:null,x:0,y:0,moved:0},fe=null,ge=new Set,be=new Map;function j(A,V=4e3){i("toast").textContent=A,i("toast").classList.remove("hidden"),clearTimeout(G),G=setTimeout(()=>i("toast").classList.add("hidden"),V)}function M(A,V){i("loadBar").style.width=Math.round(A*100)+"%",i("loadText").textContent=V}let Se=()=>new Promise(A=>setTimeout(A,0));function Ve(){R.mode="walk",i("welcome").classList.add("hidden"),i("hud").classList.remove("hidden"),i("minimapWrap").classList.remove("hidden"),i("bottomHint").classList.remove("hidden"),i("joystick").classList.remove("hidden"),d&&i("lookHint").classList.remove("hidden"),i("scene").focus({preventScroll:!0})}function Re(A){R.yaw=Math.atan2(A[0]-R.pos[0],-(A[1]-R.pos[1])),R.pitch=-.02}function ee(A){g&&(R.pos=g.nearestWalkable(A)||[0,11])}function ht(A="field"){if(b){if(Nt(),ve(),We(),Ve(),A==="field")ee([2.8,11]),Re([14,-14]);else{let V=o[A];ee(V.approach),Re(A==="GATE_MAIN"?r.layout.mainGateLook:[-27,-24])}R.mode="walk",he(),j(d?"左の丸で移動。画面の右側をドラッグすると見回せます。":"左の丸、キーボードのWASD または矢印キーで移動。画面をドラッグして見回します。",4500)}}function Ct(){b&&(Nt(),ve(),We(),R.mode="welcome",i("welcome").classList.remove("hidden"),i("minimapWrap").classList.add("hidden"),i("bottomHint").classList.add("hidden"),i("nearby").classList.add("hidden"),i("joystick").classList.add("hidden"),i("lookHint").classList.add("hidden"),he())}function ye(){if(b){if(Nt(),ve(),R.mode==="overview"){R.mode="walk",R.returnPos&&(R.pos=[...R.returnPos]),R.pitch=0,he();return}R.mode==="welcome"&&Ve(),We(),R.returnPos=[...R.pos],R.mode="overview",R.orbitTarget=[0,0,23],R.orbitDist=158,R.orbitYaw=-.27,R.orbitPitch=.9,he(),j("ドラッグで回転、ホイールで拡大。地面を押すとその場所へ移動します。ブースの札を押すと内容を表示します。")}}function he(){let A=R.mode;if(g&&g.setRideView(A==="ride"),i("modeBar").classList.toggle("ride-active",A==="ride"),i("speedToggle").classList.toggle("hidden",d||A!=="walk"),i("speedToggle").textContent=R.runMode?"速度：走る":"速度：歩く",i("speedToggle").setAttribute("aria-pressed",String(R.runMode)),i("speedToggle").setAttribute("aria-label",R.runMode?"走るを選択中。歩くに切り替える":"歩くを選択中。走るに切り替える"),i("overviewBtn").classList.toggle("active",A==="overview"),i("joystick").classList.toggle("hidden",A!=="walk"||!!R.sheet),i("lookHint").classList.toggle("hidden",!d||A!=="walk"||!!R.sheet),i("modeBar").classList.toggle("hidden",A==="welcome"||A==="walk"&&!R.path),A==="overview")i("modeText").textContent="上空から会場を見る",i("modeAction").textContent="歩行に戻る";else if(A==="ride")i("modeText").textContent="トゥクトゥクに乗車中",i("modeAction").textContent="トゥクトゥクから降りる";else if(R.path){let V=o[R.targetId];i("modeText").textContent=(R.auto?"歩いて案内中：":"経路表示：")+(V?V.short:"選択した場所"),i("modeAction").textContent=R.auto?"一時停止":"自動で歩く"}}function He(A){return A.kind==="performer"||A.id==="T-SCI"?o.GYM:A}function ft(A,V=!0){if(!b)return;let q=typeof A=="string"?He(o[A]):null,X=q?.approach||(!q&&Array.isArray(A)?A:null);if(!X)return j("この団体のブース位置は資料で特定できていません。"),!1;R.mode==="welcome"&&ht("field"),R.mode==="ride"&&(R.mode="walk",ee(o.MOBILITY.approach)),R.mode="walk";let $=C.find(R.pos,X);return $?(R.path=$,R.pathIndex=1,R.auto=V,R.targetId=q?.id||null,en($),Nt(),ve(),he(),!0):(j("ここから歩ける経路を見つけられませんでした。「この場所へ移動」で見学できます。",6e3),!1)}function ke(A){let V=He(o[A]);return V?.approach?(R.mode==="welcome"&&Ve(),We(),R.mode="walk",ee(V.approach),Re(V.pos),V.id==="GATE_MAIN"&&Re(r.layout.mainGateLook),V.id==="GATE_WEST"&&Re([-27,-24]),V.id==="GYM"&&Re([V.pos[0],g.p(525,345)[1]]),V.id==="WC"&&Re([45,45]),Nt(),ve(),he(),j(V.short+" に移動しました"),!0):!1}function We(){R.path=null,R.auto=!1,R.targetId=null,fe&&(fe.dispose(),fe=null),he()}function en(A){fe&&fe.dispose();let{Geometry:V,Mesh:q,material:X}=FestaGL,$=new V;for(let Y=0;Y<A.length-1;Y++){let Pe=A[Y],ze=A[Y+1],it=ze[0]-Pe[0],Ie=ze[1]-Pe[1],Ke=Math.hypot(it,Ie);if(Ke<.01)continue;let qe=-Ie/Ke*.055,xt=it/Ke*.055;$.quad([Pe[0]-qe,.088,Pe[1]-xt],[Pe[0]+qe,.088,Pe[1]+xt],[ze[0]+qe,.088,ze[1]+xt],[ze[0]-qe,.088,ze[1]-xt],X("#b78134",0,.75,0,.13));for(let Lt=1;Lt<Ke;Lt+=2){let gn=Pe[0]+it*Lt/Ke,Sn=Pe[1]+Ie*Lt/Ke;$.disk(gn,.092,Sn,.12,X("#dfbc77",0,.7,0,.2),10)}}let ue=A[A.length-1];$.cylinder([ue[0],.08,ue[1]],[ue[0],.15,ue[1]],.26,.26,X("#d2a558",0,.65,0,.2),30),fe=new q(I,$,{name:"Navigation guide",shadow:!1})}function rt(A,V){let q=Math.max(1,Math.ceil(Math.hypot(A,V)/.15)),X=0;for(let $=0;$<q;$++){let ue=[...R.pos],Y=R.pos[0]+A/q,Pe=R.pos[1]+V/q;g.isWalkable(Y,Pe,.28)?R.pos=[Y,Pe]:(g.isWalkable(Y,R.pos[1],.28)&&(R.pos[0]=Y),g.isWalkable(R.pos[0],Pe,.28)&&(R.pos[1]=Pe)),X+=Math.hypot(R.pos[0]-ue[0],R.pos[1]-ue[1])}return R.distanceWalked+=X,X}function _t(A){if(!R.path||!R.auto)return;let V=R.path[R.pathIndex];if(!V){Pt();return}let q=V[0]-R.pos[0],X=V[1]-R.pos[1],$=Math.hypot(q,X);if($<.16){R.pathIndex++,R.pathIndex>=R.path.length&&Pt();return}let ue=Math.min($,A*2.35),Y=rt(q/$*ue,X/$*ue),Pe=Math.atan2(q,-X);R.yaw+=gt(Pe-R.yaw)*Math.min(1,A*3.3),R.pitch+=(0-R.pitch)*Math.min(1,A*3),Y<2e-4&&ue>.001&&(R.auto=!1,j("障害物の手前で停止しました。移動キーで位置を調整できます。"),he())}function Pt(){let A=R.targetId,V=o[A];We(),V&&(Re(V.pos),V.id==="GATE_MAIN"&&Re(r.layout.mainGateLook),V.id==="GATE_WEST"&&Re([-27,-24]),ge.add(A),j(V.short+" に到着しました",2600))}function gt(A){return Math.atan2(Math.sin(A),Math.cos(A))}let dt=[i("rideBubble"),i("rideBubble2")];function Ot(A){!b||R.mode!=="walk"||!A?.rec.approach||(Nt(),We(),R.boardingStop=A,g.setCarStart(A.distance,x),R.mode="ride",R.rideYaw=0,R.pitch=-.06,he(),j("トゥクトゥクに乗っています。ドラッグして周囲を見回せます。車種・速度は演出です。",5500))}function Gt(){if(R.mode==="overview")R.mode="walk",R.returnPos&&ee(R.returnPos),R.pitch=0;else if(R.mode==="ride"){R.mode="walk";let A=R.boardingStop;ee(A.rec.approach),Re(A.position),R.boardingStop=null}else We();he()}function yt(A,V){Z=document.activeElement,R.sheet=V,i("sheetTitle").textContent=A,i("sheet").classList.remove("hidden"),i("sheetScrim").classList.remove("hidden"),i("sheetBack").classList.add("hidden"),i("sheetBody").scrollTop=0,lt(),he(),setTimeout(()=>i("sheetClose").focus({preventScroll:!0}),0)}function Nt(){R.sheet=null,i("sheet").classList.add("hidden"),i("sheetScrim").classList.add("hidden"),he(),Z&&Z.isConnected&&Z.focus({preventScroll:!0})}let te="",Bt="all";function St(){yt("ブースを見つける","search"),i("sheetBody").innerHTML='<div class="search-field">'+n("search")+'<input id="searchInput" aria-label="団体名や内容から検索" placeholder="団体名・食べもの・体験から検索" value="'+e(te)+'"></div><div class="filter-row">'+[["all","すべて"],...u,["I","会場案内"]].map(([A,V])=>'<button class="filter '+(A===Bt?"active":"")+'" data-filter="'+A+'">'+V+"</button>").join("")+'</div><p class="result-count" id="resultCount"></p><p class="source-text">'+e(r.notice)+'</p><div id="results"></div>',i("searchInput").addEventListener("input",A=>{te=A.target.value,B()}),i("sheetBody").querySelectorAll("[data-filter]").forEach(A=>A.onclick=()=>{Bt=A.dataset.filter,i("sheetBody").querySelectorAll("[data-filter]").forEach(V=>V.classList.toggle("active",V===A)),B()}),B(),setTimeout(()=>i("searchInput").focus(),30)}function B(){let A=te.normalize("NFKC").toLowerCase().trim(),V=A.split(/\s+/).filter(Boolean),q=l.filter(X=>(Bt==="all"||(Bt==="I"?y.has(X.id)&&["M","I"].includes(X.category):L(X)===Bt))&&V.every($=>(X.id+" "+X.name+" "+X.detail).normalize("NFKC").toLowerCase().includes($)));i("resultCount").textContent=q.length+" 項目 ／ 団体"+r.records.length+"・会場案内"+r.locations.length+"（9月時点の予定）",i("results").innerHTML=q.length?q.map(X=>'<button class="result" data-id="'+e(X.id)+'"><span class="badge" style="background:'+h[X.category]+'">'+e(X.id.startsWith("P-")?"P":X.id.includes("-")?X.id:X.id==="WC"?"WC":"案内")+'</span><span class="result-info"><strong>'+e(X.name)+'</strong><small class="'+(X.kind==="unplaced"?"unplaced":"")+'">'+e(X.kind==="unplaced"?"位置未特定 · "+X.caption:X.caption)+"</small></span>"+n("arrow")+"</button>").join(""):'<p class="empty">該当する項目がありません。<br>短い言葉でも検索できます。</p>',i("results").querySelectorAll("[data-id]").forEach(X=>X.onclick=()=>v(X.dataset.id,!0))}function v(A,V=!1){let q=o[A];if(!q)return;R.selected=A,ge.add(A),yt("ブース・会場の詳細","detail"),i("sheetBack").classList.toggle("hidden",!V);let X=He(q),$=b&&!!X.approach,ue=S(q),Y='<div class="detail-id"><span class="badge" style="background:'+h[q.category]+'">'+e(q.id.startsWith("P-")?"P":q.id.includes("-")?q.id:"案内")+"</span>"+e(ue)+'<span>／ 予定</span></div><h3 class="detail-title">'+e(q.name)+'</h3><p class="detail-caption">'+e(q.caption)+"</p>";$?Y+='<div class="detail-actions"><button class="primary" id="navigateHere">'+n("route")+' 歩いて案内</button><button class="secondary" id="jumpHere">この場所へ移動</button></div>':Y+=q.kind==="unconfirmed"?'<div class="note-box warn">今回の体育館の開始予定9件に記載がなく、出演予定は未確認です。</div>':q.kind==="unplaced"?'<div class="note-box warn">参加予定団体一覧には記載がありますが、配置図からワークショップの位置を特定できません。推測でブースを追加していません。</div>':'<div class="note-box">3D表示が起動していないため、ここでは移動機能を利用できません。団体の予定内容は読めます。</div>',q.id==="MOBILITY"&&(Y+='<p class="source-text">電動トライク1台。車体色、走行速度は実際と異なる場合があります。</p>'),q.id!=="GYM"&&(Y+='<div class="section-label">'+(q.category==="P"?"参加予定内容":"内容")+'</div><div class="detail-content">'+e(q.detail)+"</div>"),(q.category==="F"||q.category==="S")&&(Y+='<div class="note-box">3Dで置かれている商品は実物や販売数量を示すものではありません。</div>'),(q.id==="GYM"||q.category==="P"||q.id==="T-SCI")&&(Y+='<div class="section-label">体育館内 開始予定</div>'+r.schedule.map(Pe=>'<div class="schedule-row"><b>'+e(Pe.time)+"</b><span>"+e(Pe.name)+"</span></div>").join(""),Y+='<p class="source-text">進行上の都合で開始・終了時刻は変更になることがあります。</p>'),Y+='<p class="source-text">'+e(r.notice)+"</p>",i("sheetBody").innerHTML=Y,$&&(i("navigateHere").onclick=()=>{ft(A,!0)},i("jumpHere").onclick=()=>{ke(A)})}function se(){yt("表示と操作の設定","settings"),i("sheetBody").innerHTML='<div class="setting-row"><label for="quality">描画品質</label><select id="quality"><option value="high">高画質 — PC向け</option><option value="standard">標準 — 軽さと品質のバランス</option><option value="low">軽量 — 小さな端末向け</option></select><small>影の解像度と描画解像度を変更します。重い場合は「標準」「軽量」を選択。</small></div><div class="setting-row"><label for="crowd">来場者の表示量 <span id="crowdValue"></span></label><input id="crowd" type="range" min="0" max="100" step="10" value="'+R.crowd+'"><small>人数は演出です。実際の来場者数や混雑予測ではありません。</small></div><div class="setting-row"><label for="light">光の雰囲気</label><select id="light"><option value="day">昼の光</option><option value="afternoon">午後の光</option></select><small>当日の天気・太陽位置を再現したものではありません。</small></div><label class="toggle-row" for="labelsToggle">近くのブース名を表示<input type="checkbox" id="labelsToggle" '+(R.labels?"checked":"")+'></label><label class="toggle-row" for="roofToggle">体育館の屋根を表示<input type="checkbox" id="roofToggle" '+(R.showRoof?"checked":"")+'></label><div class="note-box">屋根を外すと、上空から体育館の中を確認できます。歩行時には屋根の表示に関係なく出入口から入ります。</div><button class="secondary" id="fullscreenBtn">全画面表示を切り替える</button><button class="text-btn" id="captureBtn">いまの3D画面を画像として保存 '+n("arrow")+'</button><div class="section-label">動作情報</div><p class="source-text" id="performanceInfo"></p><button id="settingsHelp" class="text-btn">操作方法・資料と再現範囲 '+n("help")+"</button>",i("quality").value=R.quality,i("quality").onchange=A=>{R.quality=A.target.value,I.setQuality(R.quality),j("描画品質を変更しました")},i("crowdValue").textContent=R.crowd+"%",i("crowd").oninput=A=>{R.crowd=Number(A.target.value),g.setCrowd(R.crowd),i("crowdValue").textContent=R.crowd+"%"},i("light").value=R.light,i("light").onchange=A=>{R.light=A.target.value,I.sun=FestaGL.V.norm(R.light==="day"?[-.38,.79,.48]:[-.75,.38,.46]),I.sunColor=R.light==="day"?[1,.94,.81]:[1,.84,.65],I.sunPower=R.light==="day"?3.7:3.4,I.exposure=R.light==="day"?1.12:1.18,I.createShadow()},i("labelsToggle").onchange=A=>R.labels=A.target.checked,i("roofToggle").onchange=A=>{R.showRoof=A.target.checked,g.meshes.roof.visible=R.showRoof,I.shadowDirty=!0},i("fullscreenBtn").onclick=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{j("この表示環境では全画面表示を利用できません。")}},i("captureBtn").onclick=()=>{try{I.render(x);let A=document.createElement("a");A.href=i("scene").toDataURL("image/png"),A.download="festa2026_3d_view.png",A.click()}catch{j("画像の保存に対応していない表示環境です。")}},i("settingsHelp").onclick=()=>le(),i("performanceInfo").textContent="WebGL 2 ／ 外部通信なし ／ "+I.stats.triangles.toLocaleString()+" triangles ／ "+I.stats.draws+" draw calls（現在の場面）"}function le(){yt("操作と、資料について","help"),i("sheetBody").innerHTML='<div class="help-section"><h3>PCで歩く</h3>'+[["左下の丸いパッド","前後・左右に移動"],["W / A / S / D・矢印キー","前後・左右に移動"],["画面をドラッグ","見回す"],["画面下の「歩く」「走る」","速度を切り替える"],["Shift ＋移動","押している間だけ走る"],["E","近くのブースの内容"],["V","上空／歩行を切り替え"],["M","会場マップ"],["Esc","閉じる・移動を止める"]].map(A=>'<div class="control-row"><span>'+e(A[0])+"</span><span>"+e(A[1])+"</span></div>").join("")+"<h3>スマートフォン・タブレット</h3><p>左下の丸いパッドで移動します。中心付近では細かく、外側では速く移動できます。画面の右側をドラッグして見回します。看板の札や「内容を見る」をタップすると、団体名と内容が読めます。端末を横向きにすると広く見渡せます。</p><h3>ブースを探す・案内を使う</h3><p>「ブース」から団体名や食べもの、体験などで検索できます。「歩いて案内」は経路を表示して自動で歩きます。移動キーやジョイスティックを使うと手動操作に戻ります。「この場所へ移動」は、そのブースの前へ直接移動します。</p><p>上空表示ではドラッグで回転、ホイール／2本指で拡大・縮小。会場マップでは点を選ぶとブース情報、歩ける場所を選ぶと直接移動します。ブース番号入り配置図と上空表示でも歩ける場所へ直接移動できます。</p><h3>読み取り方</h3>"+r.caveats.map(A=>"<p>"+e(A)+"</p>").join("")+'<div class="note-box">校舎は外観のみ。体育館には出入口から入れます。壇上舞台は使用しません。</div><h3>参照資料</h3>'+r.sources.map(A=>'<div class="source-entry"><strong>'+e(A.type)+" · "+(A.url?'<a href="'+e(A.url)+'" target="_blank" rel="noopener noreferrer">'+e(A.name)+"</a>":e(A.name))+"</strong><p>"+e(A.description)+"</p></div>").join("")+'<h3>このアプリについて</h3><p>すべての描画・検索・経路計算は、このHTMLを開いた端末内で行います。外部通信、位置情報の取得、アクセス解析、アカウント登録はありません。「かまにゃん」の紹介ページを開く場合だけ外部に移動します。</p><p>描画にはThree.jsを使用し、形状、人物、看板は本アプリ向けに実装。地表テクスチャはCC0画像を使用しています。写真測量や現地撮影による3Dモデルではありません。</p><p class="source-text">テクスチャ：Gravel04 / CC0Textures、Grass 01 / linolafett（CC0、scikit-image同梱）。提供資料の権利は元の権利者に帰属します。</p></div>'}function xe(A){let V=A.clientWidth,q=A.clientHeight,X=g.campus.map(([qe])=>qe),$=g.campus.map(([,qe])=>qe),ue=Math.min(...X),Y=Math.max(...X),Pe=Math.min(...$),ze=Math.max(...$),it=(ue+Y)/2,Ie=(Pe+ze)/2,Ke=Math.min((V-18)/(Y-ue),(q-18)/(ze-Pe));return{w:V,h:q,scale:Ke,to:qe=>[V/2+(qe[0]-it)*Ke,q/2+(qe[1]-Ie)*Ke],from:(qe,xt)=>[(qe-V/2)/Ke+it,(xt-q/2)/Ke+Ie]}}function Le(A,V=!1){if(!g||!A.clientWidth)return;let q=xe(A),X=Math.min(devicePixelRatio,2),$=Math.round(q.w*X),ue=Math.round(q.h*X);(A.width!==$||A.height!==ue)&&(A.width=$,A.height=ue);let Y=A.getContext("2d");Y.setTransform(X,0,0,X,0,0),Y.clearRect(0,0,q.w,q.h),Y.fillStyle="#eeeee3",Y.fillRect(0,0,q.w,q.h);let Pe=(Ie,Ke,qe)=>{Y.beginPath(),Ie.forEach((xt,Lt)=>{let[gn,Sn]=q.to(xt);Lt?Y.lineTo(gn,Sn):Y.moveTo(gn,Sn)}),Y.closePath(),Ke&&(Y.fillStyle=Ke,Y.fill()),qe&&(Y.strokeStyle=qe,Y.lineWidth=1,Y.stroke())};Pe(g.campus,"#d4d8cd","#b4c3b5"),Pe(g.field,"#e6d8ba"),Pe(g.restricted,"#ded5c1","#b5a68a"),Y.beginPath(),g.track.forEach((Ie,Ke)=>{let[qe,xt]=q.to(Ie);Ke?Y.lineTo(qe,xt):Y.moveTo(qe,xt)}),Y.closePath(),Y.strokeStyle="#c09164",Y.lineWidth=Math.max(1,q.scale*2),Y.stroke(),Y.beginPath();for(let[Ie,Ke]of g.ropeSegments)Y.moveTo(...q.to(Ie)),Y.lineTo(...q.to(Ke));Y.strokeStyle="#d6ad23",Y.lineWidth=V?2:1.3,Y.stroke(),Y.setLineDash(V?[3,3]:[2,2]),Y.strokeStyle="#33312b",Y.stroke(),Y.setLineDash([]);for(let[Ie,Ke]of g.coneBars){let qe=q.to(Ie),xt=q.to(Ke);Y.beginPath(),Y.moveTo(...qe),Y.lineTo(...xt),Y.strokeStyle="#bb3b2c",Y.lineWidth=V?2.5:1.5,Y.stroke()}for(let Ie of g.buildings){let Ke=q.to([Ie.x-Ie.w/2,Ie.z-Ie.d/2]);Y.fillStyle=Ie.gym?"#bfccb9":"#a6b5ad",Y.fillRect(Ke[0],Ke[1],Ie.w*q.scale,Ie.d*q.scale),Y.strokeStyle="#8fa397",Y.lineWidth=.6,Y.strokeRect(Ke[0],Ke[1],Ie.w*q.scale,Ie.d*q.scale),V&&Ie.w*q.scale>40&&(Y.fillStyle="#4c6858",Y.font="10px sans-serif",Y.textAlign="center",Y.fillText(Ie.gym?"体育館":"校舎",Ke[0]+Ie.w*q.scale/2,Ke[1]+Ie.d*q.scale/2+3))}for(let Ie of g.markers){let[Ke,qe]=q.to(Ie.pos),xt=V?3.7:2.1;if(Y.beginPath(),Y.arc(Ke,qe,xt,0,Math.PI*2),Y.fillStyle=h[Ie.category],Y.fill(),V&&(Y.strokeStyle="#fcf9ee",Y.lineWidth=.7,Y.stroke(),Ie.id.includes("-")&&Ie.kind!=="performer")){Y.font="9px sans-serif",Y.textAlign="left",Y.fillStyle="#3e584b";let Lt=Ke+6,gn=qe+3;Ie.pos[1]<-16&&Ie.pos[0]>-10?(Lt=Ke,gn=qe-10,Y.save(),Y.translate(Lt,gn),Y.rotate(-Math.PI/2.8),Y.fillText(Ie.id,0,0),Y.restore()):Ie.pos[0]<1&&Ie.pos[1]>-16&&Ie.pos[1]<10?(Y.textAlign="right",Y.fillText(Ie.id,Ke-6,qe+3)):Y.fillText(Ie.id,Lt,gn)}}R.path&&(Y.beginPath(),R.path.forEach((Ie,Ke)=>{let[qe,xt]=q.to(Ie);Ke?Y.lineTo(qe,xt):Y.moveTo(qe,xt)}),Y.strokeStyle="#af7b29",Y.lineWidth=V?2:1.5,Y.setLineDash([4,2]),Y.stroke(),Y.setLineDash([]));let[ze,it]=q.to(R.pos);if(Y.save(),Y.translate(ze,it),Y.rotate(R.yaw),Y.fillStyle="#fff",Y.beginPath(),Y.arc(0,0,V?7:5,0,Math.PI*2),Y.fill(),Y.fillStyle="#174f58",Y.beginPath(),Y.moveTo(0,V?-10:-7),Y.lineTo(V?5:4,V?6:4),Y.lineTo(0,V?3:1),Y.lineTo(V?-5:-4,V?6:4),Y.closePath(),Y.fill(),Y.restore(),Y.fillStyle="#526b5d",Y.textAlign="right",Y.font=(V?"10":"8")+"px sans-serif",V){let[Ie,Ke]=q.to(o.GATE_MAIN.pos);Y.textAlign="right",Y.fillText("正門",Ie-9,Ke-9);let[qe,xt]=q.to(o.GATE_WEST.pos);Y.textAlign="left",Y.fillText("西ヶ谷門",qe-10,xt+15)}}let Ae=!1;function pe(){b&&(lt(),Nt(),Z=document.activeElement,i("mapModal").classList.remove("hidden"),Ae=!1,i("bigmap").classList.remove("hidden"),i("originalWrap").classList.add("hidden"),i("mapToggle").textContent="ブース番号入り配置図を見る",i("mapExplain").textContent="ブースの点を押すと内容を表示。歩ける場所を押すと、その場所へ直接移動します。",requestAnimationFrame(()=>Le(i("bigmap"),!0)),i("mapClose").focus())}function ve(){i("mapModal").classList.add("hidden")}function Ne(A){return!A||!g.isWalkable(A[0],A[1],.32)?(j("建物・走行路の中は選べません。歩ける場所を選択してください。"),!1):(We(),R.mode==="welcome"&&Ve(),R.mode="walk",R.returnPos=null,R.pitch=0,ee(A),ve(),he(),j("選んだ場所へ移動しました"),!0)}function nt(A){let V=i("bigmap").getBoundingClientRect(),q=A.clientX-V.left,X=A.clientY-V.top,$=xe(i("bigmap")),ue=null,Y=16;for(let ze of g.markers){let it=$.to(ze.pos),Ie=Math.hypot(it[0]-q,it[1]-X);Ie<Y&&(Y=Ie,ue=ze)}if(ue){ve(),v(ue.id);return}let Pe=$.from(q,X);if(!g.isWalkable(...Pe,.32)){j("建物・走行路の中は選べません。歩ける場所を選択してください。");return}Ne(Pe)}function re(A){let V=i("originalPlan"),q=V.getBoundingClientRect();if(!V.naturalWidth||!q.width||!q.height)return;let X=(A.clientX-q.left)/q.width*660-35,$=(A.clientY-q.top)/q.height*870-35,ue=g.p(X,$),Y=null,Pe=16;for(let ze of g.markers){let it=q.left+(ze.pos[0]/.22+320+35)/660*q.width,Ie=q.top+(ze.pos[1]/.22+290+35)/870*q.height,Ke=Math.hypot(it-A.clientX,Ie-A.clientY);Ke<Pe&&(Pe=Ke,Y=ze)}if(Y){ve(),v(Y.id);return}Ne(ue)}function me(A,V){let q=new Map,X=!1;A.addEventListener("pointerdown",$=>{q.size?X=!0:X=!1,q.set($.pointerId,[$.clientX,$.clientY])}),A.addEventListener("pointermove",$=>{let ue=q.get($.pointerId);ue&&Math.hypot($.clientX-ue[0],$.clientY-ue[1])>8&&(X=!0)}),A.addEventListener("pointerup",$=>q.delete($.pointerId)),A.addEventListener("pointercancel",$=>{q.delete($.pointerId),X=!0}),A.addEventListener("click",$=>{X||V($)})}function _e(){for(let A of g.markers){let V=document.createElement("button");V.className="world-label hidden",V.style.setProperty("--accent",h[A.category]),V.setAttribute("aria-label",A.name+" の内容を見る"),V.innerHTML="<b>"+e(A.id.includes("-")?A.id:A.id==="WC"?"WC":"")+"</b><span>"+e(A.short)+"</span>",V.onclick=q=>{q.stopPropagation(),v(A.id)},i("labels").appendChild(V),be.set(A.id,V)}}function Oe(){let A=R.mode==="walk"&&!R.sheet&&i("mapModal").classList.contains("hidden");dt.forEach((V,q)=>{if(V.classList.add("hidden"),!A)return;let{position:X}=g.boardingGaps[q],$=I.camera.eye;if(Math.hypot($[0]-X[0],$[2]-X[1])>18)return;let ue=I.project([X[0],1.88,X[1]]);if(!ue||ue.z>1||ue.x<0||ue.x>innerWidth||ue.y<0||ue.y>innerHeight)return;let Y=Math.hypot($[0]-X[0],$[2]-X[1]),Pe=Math.max(.52,Math.min(1,5/Math.max(Y,1))),ze=(d?146:176)*Pe/2+8;V.style.setProperty("--ride-scale",Pe),V.style.left=Math.max(ze,Math.min(innerWidth-ze,ue.x))+"px",V.style.top=ue.y+"px",V.classList.remove("hidden")})}function ot(){if(!b)return;let A=R.mode==="overview",V=R.labels&&R.mode!=="welcome"&&!R.sheet&&i("mapModal").classList.contains("hidden"),q=[];for(let $ of g.markers){let ue=be.get($.id);if(ue.classList.add("hidden"),!V)continue;let Y=Math.hypot(I.camera.eye[0]-$.marker[0],I.camera.eye[2]-$.marker[2]);if(!A&&Y>24)continue;let Pe=I.project($.marker);if(!(!Pe||Pe.z>1||Pe.x<35||Pe.x>innerWidth-35||Pe.y<112||Pe.y>innerHeight-90)){if(!A){let ze=!1,it=I.camera.eye;for(let Ie of g.buildings){if(Ie.gym){let Ke=it[0]>Ie.x-Ie.w/2&&it[0]<Ie.x+Ie.w/2&&it[2]>Ie.z-Ie.d/2&&it[2]<Ie.z+Ie.d/2,qe=$.marker[0]>Ie.x-Ie.w/2&&$.marker[0]<Ie.x+Ie.w/2&&$.marker[2]>Ie.z-Ie.d/2&&$.marker[2]<Ie.z+Ie.d/2;Ke!==qe&&Y>6&&(ze=!0);continue}for(let Ke=.1;Ke<.96;Ke+=.09){let qe=it[0]+($.marker[0]-it[0])*Ke,xt=it[2]+($.marker[2]-it[2])*Ke,Lt=it[1]+($.marker[1]-it[1])*Ke;if(Math.abs(qe-Ie.x)<Ie.w/2&&Math.abs(xt-Ie.z)<Ie.d/2&&Lt<Ie.h){ze=!0;break}}if(ze)break}if(ze)continue}q.push({r:$,el:ue,pr:Pe,d:Y})}}q.sort(($,ue)=>$.d-ue.d);let X=[];for(let $ of q){if(X.length>=(A?20:d?4:7))break;let ue=Math.min(d?160:220,45+$.r.short.length*10);X.some(Y=>Math.abs(Y.pr.x-$.pr.x)<(Y.width+ue)/2+7&&Math.abs(Y.pr.y-$.pr.y)<34)||($.width=ue,$.el.style.left=$.pr.x+"px",$.el.style.top=$.pr.y+"px",$.el.classList.remove("hidden"),X.push($))}}function W(){yt("かまにゃん","mascot"),i("sheetBody").innerHTML='<h3 class="detail-title">かまにゃん</h3><p class="detail-caption">鎌倉地域メディア「かまくらいふ」のキャラクターです。</p><div class="note-box">しらすの首輪に大仏のポシェットをつけています</div><p class="source-text">'+e(r.notice)+'</p><p class="source-text"><a href="https://kamakura-life.net/mascot/" target="_blank" rel="noopener noreferrer">かまくらいふの紹介ページ</a></p>'}function Ce(){let A=document.createElement("button");A.id="kamanyanLabel",A.className="world-label hidden",A.style.setProperty("--accent","#a97887"),A.setAttribute("aria-label","かまくらいふ かまにゃんの内容を見る"),A.innerHTML="<span>かまくらいふ　かまにゃん</span>",A.onclick=V=>{V.stopPropagation(),W()},i("labels").appendChild(A)}function Me(){let A=i("kamanyanLabel");if(!A||(A.classList.add("hidden"),!R.labels||R.mode==="welcome"||R.mode==="ride"||R.sheet||!i("mapModal").classList.contains("hidden")))return;let V=g.getKamanyan(),q=Math.hypot(I.camera.eye[0]-V[0],I.camera.eye[2]-V[2]);if(R.mode!=="overview"&&q>28)return;let X=I.project(V);!X||X.z>1||X.x<80||X.x>innerWidth-80||X.y<110||X.y>innerHeight-80||(A.style.left=X.x+"px",A.style.top=X.y+"px",A.classList.remove("hidden"))}function Ue(){if(!b)return;let A=null,V=4.8;if(R.mode==="walk")for(let Y of g.markers){if(!Y.approach)continue;let Pe=Math.hypot(R.pos[0]-Y.approach[0],R.pos[1]-Y.approach[1]);Pe<V&&(V=Pe,A=Y)}R.nearest=A?.id||null;let q=A&&!R.sheet&&R.mode==="walk";i("nearby").classList.toggle("hidden",!q),q&&(i("nearCategory").textContent=A.id.includes("-")?A.id:A.id==="WC"?"WC":"案内",i("nearCategory").style.background=h[A.category],i("nearCaption").textContent=S(A),i("nearName").textContent=A.short);let[X,$]=R.pos,ue=X>33&&X<57.5&&$>2.6&&$<47?"体育館":$>48?"正門・キッチンカーエリア":$<-25?"モビリティー・であいの広場":X<-13?"アウトドアーエリア":"校庭・にぎわいゾーン";i("locationText").textContent=R.mode==="overview"?"会場全体":R.mode==="ride"?"トゥクトゥクに乗車中":ue}let De=new Map,we=0;i("scene").addEventListener("pointerdown",A=>{if(!(!b||R.sheet||R.mode==="welcome")){if(De.set(A.pointerId,[A.clientX,A.clientY]),De.size===2){J.multi=!0;let V=[...De.values()];we=Math.hypot(V[0][0]-V[1][0],V[0][1]-V[1][1])}J.active=!0,J.pid=A.pointerId,J.x=A.clientX,J.y=A.clientY,J.moved=0,J.multi=De.size>1,i("scene").setPointerCapture(A.pointerId)}}),i("scene").addEventListener("pointermove",A=>{if(!De.has(A.pointerId))return;if(De.set(A.pointerId,[A.clientX,A.clientY]),De.size===2&&R.mode==="overview"){let X=[...De.values()],$=Math.hypot(X[0][0]-X[1][0],X[0][1]-X[1][1]);R.orbitDist=FestaGL.clamp(R.orbitDist*we/Math.max(1,$),25,190),we=$;return}if(!J.active||J.pid!==A.pointerId)return;let V=A.clientX-J.x,q=A.clientY-J.y;J.x=A.clientX,J.y=A.clientY,J.moved+=Math.abs(V)+Math.abs(q),R.mode==="overview"?(R.orbitYaw-=V*.004,R.orbitPitch=FestaGL.clamp(R.orbitPitch+q*.003,.18,1.48)):(R.mode==="ride"?R.rideYaw+=V*.004:R.yaw-=V*.004,R.pitch=FestaGL.clamp(R.pitch+q*.0035,-1.15,1.15))});function tt(A){let V=A.type==="pointerup"&&R.mode==="overview"&&J.pid===A.pointerId&&De.size===1&&!J.multi&&J.moved<=8;if(De.delete(A.pointerId),J.pid===A.pointerId&&(J.active=!1),V){let q=i("scene").getBoundingClientRect(),X=I.groundPoint(A.clientX-q.left,A.clientY-q.top);X&&Ne([X[0],X[2]])}}i("scene").addEventListener("pointerup",tt),i("scene").addEventListener("pointercancel",tt),i("scene").addEventListener("contextmenu",A=>A.preventDefault()),i("scene").addEventListener("wheel",A=>{R.mode==="overview"&&(A.preventDefault(),R.orbitDist=FestaGL.clamp(R.orbitDist*Math.exp(A.deltaY*.001),25,190))},{passive:!1}),i("joystick").addEventListener("pointerdown",A=>{A.preventDefault(),H.pid=A.pointerId,H.active=!0,i("joystick").setPointerCapture(A.pointerId),$e(A),R.auto&&(R.auto=!1,he())}),i("joystick").addEventListener("pointermove",A=>{H.pid===A.pointerId&&$e(A)});function $e(A){let V=i("joystick").getBoundingClientRect(),q=A.clientX-(V.left+V.width/2),X=A.clientY-(V.top+V.height/2),$=Math.hypot(q,X),ue=37;$>ue&&(q*=ue/$,X*=ue/$),H.x=q/ue,H.y=-X/ue,i("joyKnob").style.transform="translate("+q+"px,"+X+"px)"}function Tt(){H.x=H.y=0,H.active=!1,H.pid=null,i("joyKnob").style.transform=""}i("joystick").addEventListener("pointerup",Tt),i("joystick").addEventListener("pointercancel",Tt);function lt(){for(let A in K)K[A]=!1;Tt()}window.addEventListener("blur",lt),document.addEventListener("visibilitychange",()=>{lt(),U=0}),document.addEventListener("keydown",A=>{if(!b)return;let V=/INPUT|SELECT|TEXTAREA/.test(document.activeElement?.tagName);if(A.code==="Escape"){A.preventDefault(),i("mapModal").classList.contains("hidden")?R.sheet?Nt():Gt():ve();return}if(A.code==="Tab"&&(R.sheet||!i("mapModal").classList.contains("hidden"))){let q=R.sheet?i("sheet"):i("mapModal"),X=[...q.querySelectorAll("button,a,input,select")].filter($=>!$.closest(".hidden")&&!$.disabled);if(X.length){let $=X[0],ue=X[X.length-1];A.shiftKey&&document.activeElement===$?(ue.focus(),A.preventDefault()):!A.shiftKey&&document.activeElement===ue&&($.focus(),A.preventDefault())}return}V||R.sheet||!i("mapModal").classList.contains("hidden")||(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight"].includes(A.code)&&(A.preventDefault(),K[A.code]=!0,R.auto&&(R.auto=!1,he())),!A.repeat&&(A.code==="KeyE"&&R.nearest&&v(R.nearest),A.code==="KeyV"&&ye(),A.code==="KeyM"&&pe(),A.code==="KeyF"&&St()))}),document.addEventListener("keyup",A=>K[A.code]=!1);function rn(A){if(!b||R.paused)return;if(g.update(x,A),R.mode==="walk"&&!R.sheet&&i("mapModal").classList.contains("hidden")){let X=(K.KeyW||K.ArrowUp?1:0)-(K.KeyS||K.ArrowDown?1:0)+H.y,$=(K.KeyD||K.ArrowRight?1:0)-(K.KeyA||K.ArrowLeft?1:0)+H.x,ue=Math.hypot(X,$);if(ue>.03){ue>1&&(X/=ue,$/=ue);let Pe=K.KeyW||K.ArrowUp||K.KeyS||K.ArrowDown||K.KeyD||K.ArrowRight||K.KeyA||K.ArrowLeft?R.runMode||K.ShiftLeft||K.ShiftRight?4.6:3:2.3+2.3*Math.min(ue,1);rt((Math.sin(R.yaw)*X+Math.cos(R.yaw)*$)*Pe*A,(-Math.cos(R.yaw)*X+Math.sin(R.yaw)*$)*Pe*A)}else _t(A)}let V,q;if(R.mode==="overview"){let X=R.orbitTarget,$=R.orbitDist,ue=Math.cos(R.orbitPitch);V=[X[0]+Math.sin(R.orbitYaw)*$*ue,Math.sin(R.orbitPitch)*$,X[2]+Math.cos(R.orbitYaw)*$*ue],q=[...X]}else if(R.mode==="welcome"){let X=T?0:Math.sin(x*.085)*.8;V=[2.2+X,2.2,11.5],q=[15+X,2,-13]}else if(R.mode==="ride"){let X=g.getCar(),$=-.23;V=[X.x+Math.sin(X.yaw)*$,1.68,X.z+Math.cos(X.yaw)*$];let ue=X.yaw+R.rideYaw;q=[V[0]+Math.sin(ue)*Math.cos(R.pitch),V[1]+Math.sin(R.pitch),V[2]+Math.cos(ue)*Math.cos(R.pitch)],R.pos=[X.x,X.z]}else{let $=(Math.abs(H.x)+Math.abs(H.y)||K.KeyW||K.KeyA||K.KeyS||K.KeyD||R.auto)&&!T?Math.sin(R.distanceWalked*8)*.017:0;V=[R.pos[0],1.68+g.walkHeight(R.pos[0],R.pos[1])+$,R.pos[1]],q=[V[0]+Math.sin(R.yaw)*Math.cos(R.pitch),V[1]+Math.sin(R.pitch),V[2]-Math.cos(R.yaw)*Math.cos(R.pitch)]}I.camera.near=R.mode==="overview"?1:.09,I.camera.eye=V,I.camera.target=q}function z(A){if(!b)return;if(R.testFreeze){requestAnimationFrame(z);return}let V=U?Math.min(.12,(A-U)/1e3):.016;U=A,document.hidden||(R.paused||(x+=V),rn(V),I.render(x),Oe(),N+=V,N>.13&&(N=0,ot(),Me(),Ue(),Le(i("minimap")),!i("mapModal").classList.contains("hidden")&&!Ae&&Le(i("bigmap"),!0))),requestAnimationFrame(z)}dt.forEach((A,V)=>A.onclick=q=>{q.stopPropagation(),Ot(g.boardingGaps[V])}),i("homeBtn").onclick=Ct,i("startBtn").onclick=()=>ht("field"),i("startMain").onclick=()=>ht("GATE_MAIN"),i("startWest").onclick=()=>ht("GATE_WEST"),i("welcomeOverview").onclick=ye,i("searchBtn").onclick=St,i("overviewBtn").onclick=ye,i("settingsBtn").onclick=se,i("helpBtn").onclick=le,i("sheetClose").onclick=Nt,i("sheetScrim").onclick=Nt,i("sheetBack").onclick=St,i("nearOpen").onclick=()=>R.nearest&&v(R.nearest),i("mapBtn").onclick=pe,i("mapClose").onclick=ve,me(i("bigmap"),nt),me(i("originalPlan"),re),i("speedToggle").onclick=()=>{R.runMode=!R.runMode,he()},i("modeExit").onclick=Gt,i("modeAction").onclick=()=>{R.mode==="overview"||R.mode==="ride"?Gt():R.path&&(R.auto=!R.auto,he())},i("mapToggle").onclick=()=>{Ae=!Ae,i("bigmap").classList.toggle("hidden",Ae),i("originalWrap").classList.toggle("hidden",!Ae),i("mapToggle").textContent=Ae?"会場マップに戻る":"ブース番号入り配置図を見る",i("mapExplain").textContent=Ae?"ブース番号を押すと内容を表示。歩ける場所を押すと、その場所へ直接移動します。":"ブースの点を押すと内容を表示。歩ける場所を押すと、その場所へ直接移動します。",Ae||Le(i("bigmap"),!0)},i("mapModal").onclick=A=>{A.target===i("mapModal")&&ve()},i("originalPlan").src="./assets/venue-map.svg?v=20261104.3",window.addEventListener("resize",()=>{I&&I.resize(),g&&(Le(i("minimap")),i("mapModal").classList.contains("hidden")||Le(i("bigmap"),!0))});try{await Se(),I=new FestaGL.Renderer(i("scene"),R.quality),g=await buildFestaWorld(I,M),await Se(),C=new FestaNavigation(g),_e(),Ce(),M(1,"会場の準備ができました"),b=!0,window.__FESTA_TEST__={ready:!0,renderer:I,world:g,nav:C,state:R,byId:o,start:ht,teleport:ke,routeTo:ft,showDetail:v,showSearch:St,showSettings:se,showHelp:le,showMap:pe,toOverview:ye,ride:Ot,exitMode:Gt,tick:rn,move:rt,stopRoute:We,closeSheet:Nt,get animTime(){return x},render:()=>{rn(.016),I.render(x),Oe(),ot(),Me(),Ue(),Le(i("minimap"))}},rn(.016),I.render(0),i("loading").classList.add("hidden"),i("hud").classList.remove("hidden"),i("welcome").classList.remove("hidden"),requestAnimationFrame(z),i("scene").addEventListener("webglcontextlost",A=>{A.preventDefault(),R.paused=!0,j("描画が停止しました。ページを再読み込みすると再開できます。",3e4)})}catch(A){console.error(A),i("loading").innerHTML='<div class="loading-inner"><span class="eyebrow">3D表示を開始できませんでした</span><h1 style="font-size:26px">ブース情報は読めます。</h1><p>'+e(A.message)+'</p><p>WebGL 2対応のChrome・Edge・Safariで、このHTMLをブラウザとして開くと3D表示を利用できます。端末のグラフィックアクセラレーション設定も影響します。</p><button id="fallbackList" class="primary">参加団体一覧を読む</button><button id="fallbackPlan" class="secondary" style="margin-top:10px">配置図を見る</button></div>',i("fallbackList").onclick=()=>{St(),i("sheet").style.zIndex=110,i("sheetScrim").style.zIndex=109},i("fallbackPlan").onclick=()=>{let V=window.open();if(V){V.document.title="会場配置図";let q=V.document.createElement("img");q.src="./assets/venue-map.svg",q.style.maxWidth="100%",V.document.body.appendChild(q)}},window.__FESTA_TEST__={ready:!1,error:A.message}}})();})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
