(()=>{var vh=0,Bl=1,Mh=2;var os=1,bh=2,Hs=3,Yi=0,Ln=1,Yn=2,mi=0,Ws=1,kl=2,zl=3,Vl=4,Sh=5;var ls=100,wh=101,Th=102,Eh=103,Ah=104,Ch=200,Rh=201,Ih=202,Ph=203,Gl=204,Hl=205,Lh=206,Dh=207,Nh=208,Uh=209,Fh=210,Oh=211,Bh=212,kh=213,zh=214,ba=0,Sa=1,wa=2,Ps=3,Ta=4,Ea=5,Aa=6,Ca=7,Wl=0,Vh=1,Gh=2,ni=0,Xl=1,ql=2,Yl=3,Ur=4,Zl=5,Jl=6,$l=7;var Kl=300,Zi=301,cs=302,Ka=303,ja=304,Fr=306,Ls=1e3,hi=1001,Ra=1002,bn=1003,Hh=1004;var Or=1005;var gn=1006,Qa=1007;var gi=1008;var On=1009,jl=1010,Ql=1011,Xs=1012,eo=1013,ii=1014,Jn=1015,si=1016,to=1017,no=1018,qs=1020,ec=35902,tc=35899,nc=1021,ic=1022,$n=1023,ui=1026,Ji=1027,io=1028,so=1029,$i=1030,ro=1031;var ao=1033,Br=33776,kr=33777,zr=33778,Vr=33779,oo=35840,lo=35841,co=35842,ho=35843,uo=36196,fo=37492,po=37496,mo=37488,go=37489,Gr=37490,xo=37491,_o=37808,yo=37809,vo=37810,Mo=37811,bo=37812,So=37813,wo=37814,To=37815,Eo=37816,Ao=37817,Co=37818,Ro=37819,Io=37820,Po=37821,Lo=36492,Do=36494,No=36495,Uo=36283,Fo=36284,Hr=36285,Oo=36286;var hr=2300,Ia=2301,va=2302,Il=2303,Pl=2400,Ll=2401,Dl=2402;var Wh=3200,sc=3201;var Bo=0,Xh=1,Pi="",Sn="srgb",ur="srgb-linear",dr="linear",Xt="srgb";var Ma=7680;var qh=519,Yh=512,Zh=513,Jh=514,ko=515,$h=516,Kh=517,zo=518,jh=519,rc=35044,Vo=35048;var Wr="300 es",ti=2e3,Ds=2001;function ld(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function cd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function fr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qh(){let i=fr("canvas");return i.style.display="block",i}var Jc={},Ns=null;function pr(...i){let e="THREE."+i.shift();Ns?Ns("log",e,...i):console.log(e,...i)}function eu(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ft(...i){i=eu(i);let e="THREE."+i.shift();if(Ns)Ns("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function dt(...i){i=eu(i);let e="THREE."+i.shift();if(Ns)Ns("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ss(...i){let e=i.join(" ");e in Jc||(Jc[e]=!0,ft(...i))}function tu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var nu={[ba]:Sa,[wa]:Aa,[Ta]:Ca,[Ps]:Ea,[Sa]:ba,[Aa]:wa,[Ca]:Ta,[Ea]:Ps},di=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,l=s.length;r<l;r++)s[r].call(this,e);e.target=null}}},Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ol=Math.PI/180,Pa=180/Math.PI;function zi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]).toLowerCase()}function Dt(i,e,t){return Math.max(e,Math.min(t,i))}function hd(i,e){return(i%e+e)%e}function ll(i,e,t){return(1-t)*i+t*e}function ci(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function tn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var hc=class hc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Dt(this.x,e.x,t.x),this.y=Dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Dt(this.x,e,t),this.y=Dt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,l=this.y-e.y;return this.x=r*n-l*s+e.x,this.y=r*s+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hc.prototype.isVector2=!0;var Rt=hc,fi=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,l,a){let c=n[s+0],h=n[s+1],m=n[s+2],g=n[s+3],f=r[l+0],v=r[l+1],M=r[l+2],L=r[l+3];if(g!==L||c!==f||h!==v||m!==M){let S=c*f+h*v+m*M+g*L;S<0&&(f=-f,v=-v,M=-M,L=-L,S=-S);let d=1-a;if(S<.9995){let b=Math.acos(S),E=Math.sin(b);d=Math.sin(d*b)/E,a=Math.sin(a*b)/E,c=c*d+f*a,h=h*d+v*a,m=m*d+M*a,g=g*d+L*a}else{c=c*d+f*a,h=h*d+v*a,m=m*d+M*a,g=g*d+L*a;let b=1/Math.sqrt(c*c+h*h+m*m+g*g);c*=b,h*=b,m*=b,g*=b}}e[t]=c,e[t+1]=h,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,s,r,l){let a=n[s],c=n[s+1],h=n[s+2],m=n[s+3],g=r[l],f=r[l+1],v=r[l+2],M=r[l+3];return e[t]=a*M+m*g+c*v-h*f,e[t+1]=c*M+m*f+h*g-a*v,e[t+2]=h*M+m*v+a*f-c*g,e[t+3]=m*M-a*g-c*f-h*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,l=e._order,a=Math.cos,c=Math.sin,h=a(n/2),m=a(s/2),g=a(r/2),f=c(n/2),v=c(s/2),M=c(r/2);switch(l){case"XYZ":this._x=f*m*g+h*v*M,this._y=h*v*g-f*m*M,this._z=h*m*M+f*v*g,this._w=h*m*g-f*v*M;break;case"YXZ":this._x=f*m*g+h*v*M,this._y=h*v*g-f*m*M,this._z=h*m*M-f*v*g,this._w=h*m*g+f*v*M;break;case"ZXY":this._x=f*m*g-h*v*M,this._y=h*v*g+f*m*M,this._z=h*m*M+f*v*g,this._w=h*m*g-f*v*M;break;case"ZYX":this._x=f*m*g-h*v*M,this._y=h*v*g+f*m*M,this._z=h*m*M-f*v*g,this._w=h*m*g+f*v*M;break;case"YZX":this._x=f*m*g+h*v*M,this._y=h*v*g+f*m*M,this._z=h*m*M-f*v*g,this._w=h*m*g-f*v*M;break;case"XZY":this._x=f*m*g-h*v*M,this._y=h*v*g-f*m*M,this._z=h*m*M+f*v*g,this._w=h*m*g+f*v*M;break;default:ft("Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],l=t[1],a=t[5],c=t[9],h=t[2],m=t[6],g=t[10],f=n+a+g;if(f>0){let v=.5/Math.sqrt(f+1);this._w=.25/v,this._x=(m-c)*v,this._y=(r-h)*v,this._z=(l-s)*v}else if(n>a&&n>g){let v=2*Math.sqrt(1+n-a-g);this._w=(m-c)/v,this._x=.25*v,this._y=(s+l)/v,this._z=(r+h)/v}else if(a>g){let v=2*Math.sqrt(1+a-n-g);this._w=(r-h)/v,this._x=(s+l)/v,this._y=.25*v,this._z=(c+m)/v}else{let v=2*Math.sqrt(1+g-n-a);this._w=(l-s)/v,this._x=(r+h)/v,this._y=(c+m)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,l=e._w,a=t._x,c=t._y,h=t._z,m=t._w;return this._x=n*m+l*a+s*h-r*c,this._y=s*m+l*c+r*a-n*h,this._z=r*m+l*h+n*c-s*a,this._w=l*m-n*a-s*c-r*h,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,l=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,l=-l,a=-a);let c=1-t;if(a<.9995){let h=Math.acos(a),m=Math.sin(h);c=Math.sin(c*h)/m,t=Math.sin(t*h)/m,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+l*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+l*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},uc=class uc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($c.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($c.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,l=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*l,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*l,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*l,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,l=e.y,a=e.z,c=e.w,h=2*(l*s-a*n),m=2*(a*t-r*s),g=2*(r*n-l*t);return this.x=t+c*h+l*g-a*m,this.y=n+c*m+a*h-r*g,this.z=s+c*g+r*m-l*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Dt(this.x,e.x,t.x),this.y=Dt(this.y,e.y,t.y),this.z=Dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Dt(this.x,e,t),this.y=Dt(this.y,e,t),this.z=Dt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,l=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*l-n*c,this.z=n*a-s*l,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return cl.copy(this).projectOnVector(e),this.sub(cl)}reflect(e){return this.sub(cl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};uc.prototype.isVector3=!0;var de=uc,cl=new de,$c=new fi,dc=class dc{constructor(e,t,n,s,r,l,a,c,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,l,a,c,h)}set(e,t,n,s,r,l,a,c,h){let m=this.elements;return m[0]=e,m[1]=s,m[2]=a,m[3]=t,m[4]=r,m[5]=c,m[6]=n,m[7]=l,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,l=n[0],a=n[3],c=n[6],h=n[1],m=n[4],g=n[7],f=n[2],v=n[5],M=n[8],L=s[0],S=s[3],d=s[6],b=s[1],E=s[4],y=s[7],T=s[2],w=s[5],N=s[8];return r[0]=l*L+a*b+c*T,r[3]=l*S+a*E+c*w,r[6]=l*d+a*y+c*N,r[1]=h*L+m*b+g*T,r[4]=h*S+m*E+g*w,r[7]=h*d+m*y+g*N,r[2]=f*L+v*b+M*T,r[5]=f*S+v*E+M*w,r[8]=f*d+v*y+M*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],l=e[4],a=e[5],c=e[6],h=e[7],m=e[8];return t*l*m-t*a*h-n*r*m+n*a*c+s*r*h-s*l*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],l=e[4],a=e[5],c=e[6],h=e[7],m=e[8],g=m*l-a*h,f=a*c-m*r,v=h*r-l*c,M=t*g+n*f+s*v;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);let L=1/M;return e[0]=g*L,e[1]=(s*h-m*n)*L,e[2]=(a*n-s*l)*L,e[3]=f*L,e[4]=(m*t-s*c)*L,e[5]=(s*r-a*t)*L,e[6]=v*L,e[7]=(n*c-h*t)*L,e[8]=(l*t-n*r)*L,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,l,a){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*l+h*a)+l+e,-s*h,s*c,-s*(-h*l+c*a)+a+t,0,0,1),this}scale(e,t){return ss("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(hl.makeScale(e,t)),this}rotate(e){return ss("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(hl.makeRotation(-e)),this}translate(e,t){return ss("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(hl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};dc.prototype.isMatrix3=!0;var Mt=dc,hl=new Mt,Kc=new Mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jc=new Mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ud(){let i={enabled:!0,workingColorSpace:ur,spaces:{},convert:function(s,r,l){return this.enabled===!1||r===l||!r||!l||(this.spaces[r].transfer===Xt&&(s.r=Ri(s.r),s.g=Ri(s.g),s.b=Ri(s.b)),this.spaces[r].primaries!==this.spaces[l].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Xt&&(s.r=Is(s.r),s.g=Is(s.g),s.b=Is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Pi?dr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,l){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ss("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ss("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ur]:{primaries:e,whitePoint:n,transfer:dr,toXYZ:Kc,fromXYZ:jc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:e,whitePoint:n,transfer:Xt,toXYZ:Kc,fromXYZ:jc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}}),i}var Pt=ud();function Ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var gs,La=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{gs===void 0&&(gs=fr("canvas")),gs.width=e.width,gs.height=e.height;let s=gs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=gs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=fr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let l=0;l<r.length;l++)r[l]=Ri(r[l]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ri(t[n]/255)*255):t[n]=Ri(t[n]);return{data:t,width:e.width,height:e.height}}else return ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},dd=0,Us=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=zi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let l=0,a=s.length;l<a;l++)s[l].isDataTexture?r.push(ul(s[l].image)):r.push(ul(s[l]))}else r=ul(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ul(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?La.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ft("Texture: Unable to serialize Texture."),{})}var fd=0,dl=new de,Un=class i extends di{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=hi,s=hi,r=gn,l=gi,a=$n,c=On,h=i.DEFAULT_ANISOTROPY,m=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=zi(),this.name="",this.source=new Us(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=l,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(dl).x}get height(){return this.source.getSize(dl).y}get depth(){return this.source.getSize(dl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ft(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ft(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ls:e.x=e.x-Math.floor(e.x);break;case hi:e.x=e.x<0?0:1;break;case Ra:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ls:e.y=e.y-Math.floor(e.y);break;case hi:e.y=e.y<0?0:1;break;case Ra:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=Kl;Un.DEFAULT_ANISOTROPY=1;var fc=class fc{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*s+l[12]*r,this.y=l[1]*t+l[5]*n+l[9]*s+l[13]*r,this.z=l[2]*t+l[6]*n+l[10]*s+l[14]*r,this.w=l[3]*t+l[7]*n+l[11]*s+l[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,h=c[0],m=c[4],g=c[8],f=c[1],v=c[5],M=c[9],L=c[2],S=c[6],d=c[10];if(Math.abs(m-f)<.01&&Math.abs(g-L)<.01&&Math.abs(M-S)<.01){if(Math.abs(m+f)<.1&&Math.abs(g+L)<.1&&Math.abs(M+S)<.1&&Math.abs(h+v+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(h+1)/2,y=(v+1)/2,T=(d+1)/2,w=(m+f)/4,N=(g+L)/4,_=(M+S)/4;return E>y&&E>T?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=w/n,r=N/n):y>T?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=_/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=N/r,s=_/r),this.set(n,s,r,t),this}let b=Math.sqrt((S-M)*(S-M)+(g-L)*(g-L)+(f-m)*(f-m));return Math.abs(b)<.001&&(b=1),this.x=(S-M)/b,this.y=(g-L)/b,this.z=(f-m)/b,this.w=Math.acos((h+v+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Dt(this.x,e.x,t.x),this.y=Dt(this.y,e.y,t.y),this.z=Dt(this.z,e.z,t.z),this.w=Dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Dt(this.x,e,t),this.y=Dt(this.y,e,t),this.z=Dt(this.z,e,t),this.w=Dt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fc.prototype.isVector4=!0;var on=fc,Da=class extends di{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new on(0,0,e,t),this.scissorTest=!1,this.viewport=new on(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Un(s),l=n.count;for(let a=0;a<l;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Us(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fn=class extends Da{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},rs=class extends Un{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Na=class extends Un{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var $a=class $a{constructor(e,t,n,s,r,l,a,c,h,m,g,f,v,M,L,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,l,a,c,h,m,g,f,v,M,L,S)}set(e,t,n,s,r,l,a,c,h,m,g,f,v,M,L,S){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=l,d[9]=a,d[13]=c,d[2]=h,d[6]=m,d[10]=g,d[14]=f,d[3]=v,d[7]=M,d[11]=L,d[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $a().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/xs.setFromMatrixColumn(e,0).length(),r=1/xs.setFromMatrixColumn(e,1).length(),l=1/xs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,l=Math.cos(n),a=Math.sin(n),c=Math.cos(s),h=Math.sin(s),m=Math.cos(r),g=Math.sin(r);if(e.order==="XYZ"){let f=l*m,v=l*g,M=a*m,L=a*g;t[0]=c*m,t[4]=-c*g,t[8]=h,t[1]=v+M*h,t[5]=f-L*h,t[9]=-a*c,t[2]=L-f*h,t[6]=M+v*h,t[10]=l*c}else if(e.order==="YXZ"){let f=c*m,v=c*g,M=h*m,L=h*g;t[0]=f+L*a,t[4]=M*a-v,t[8]=l*h,t[1]=l*g,t[5]=l*m,t[9]=-a,t[2]=v*a-M,t[6]=L+f*a,t[10]=l*c}else if(e.order==="ZXY"){let f=c*m,v=c*g,M=h*m,L=h*g;t[0]=f-L*a,t[4]=-l*g,t[8]=M+v*a,t[1]=v+M*a,t[5]=l*m,t[9]=L-f*a,t[2]=-l*h,t[6]=a,t[10]=l*c}else if(e.order==="ZYX"){let f=l*m,v=l*g,M=a*m,L=a*g;t[0]=c*m,t[4]=M*h-v,t[8]=f*h+L,t[1]=c*g,t[5]=L*h+f,t[9]=v*h-M,t[2]=-h,t[6]=a*c,t[10]=l*c}else if(e.order==="YZX"){let f=l*c,v=l*h,M=a*c,L=a*h;t[0]=c*m,t[4]=L-f*g,t[8]=M*g+v,t[1]=g,t[5]=l*m,t[9]=-a*m,t[2]=-h*m,t[6]=v*g+M,t[10]=f-L*g}else if(e.order==="XZY"){let f=l*c,v=l*h,M=a*c,L=a*h;t[0]=c*m,t[4]=-g,t[8]=h*m,t[1]=f*g+L,t[5]=l*m,t[9]=v*g-M,t[2]=M*g-v,t[6]=a*m,t[10]=L*g+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pd,e,md)}lookAt(e,t,n){let s=this.elements;return Vn.subVectors(e,t),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),Ni.crossVectors(n,Vn),Ni.lengthSq()===0&&(Math.abs(n.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),Ni.crossVectors(n,Vn)),Ni.normalize(),ea.crossVectors(Vn,Ni),s[0]=Ni.x,s[4]=ea.x,s[8]=Vn.x,s[1]=Ni.y,s[5]=ea.y,s[9]=Vn.y,s[2]=Ni.z,s[6]=ea.z,s[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,l=n[0],a=n[4],c=n[8],h=n[12],m=n[1],g=n[5],f=n[9],v=n[13],M=n[2],L=n[6],S=n[10],d=n[14],b=n[3],E=n[7],y=n[11],T=n[15],w=s[0],N=s[4],_=s[8],D=s[12],V=s[1],q=s[5],A=s[9],J=s[13],H=s[2],$=s[6],me=s[10],fe=s[14],be=s[3],ce=s[7],te=s[11],P=s[15];return r[0]=l*w+a*V+c*H+h*be,r[4]=l*N+a*q+c*$+h*ce,r[8]=l*_+a*A+c*me+h*te,r[12]=l*D+a*J+c*fe+h*P,r[1]=m*w+g*V+f*H+v*be,r[5]=m*N+g*q+f*$+v*ce,r[9]=m*_+g*A+f*me+v*te,r[13]=m*D+g*J+f*fe+v*P,r[2]=M*w+L*V+S*H+d*be,r[6]=M*N+L*q+S*$+d*ce,r[10]=M*_+L*A+S*me+d*te,r[14]=M*D+L*J+S*fe+d*P,r[3]=b*w+E*V+y*H+T*be,r[7]=b*N+E*q+y*$+T*ce,r[11]=b*_+E*A+y*me+T*te,r[15]=b*D+E*J+y*fe+T*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],l=e[1],a=e[5],c=e[9],h=e[13],m=e[2],g=e[6],f=e[10],v=e[14],M=e[3],L=e[7],S=e[11],d=e[15],b=c*v-h*f,E=a*v-h*g,y=a*f-c*g,T=l*v-h*m,w=l*f-c*m,N=l*g-a*m;return t*(L*b-S*E+d*y)-n*(M*b-S*T+d*w)+s*(M*E-L*T+d*N)-r*(M*y-L*w+S*N)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],l=e[5],a=e[9],c=e[2],h=e[6],m=e[10];return t*(l*m-a*h)-n*(r*m-a*c)+s*(r*h-l*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],l=e[4],a=e[5],c=e[6],h=e[7],m=e[8],g=e[9],f=e[10],v=e[11],M=e[12],L=e[13],S=e[14],d=e[15],b=t*a-n*l,E=t*c-s*l,y=t*h-r*l,T=n*c-s*a,w=n*h-r*a,N=s*h-r*c,_=m*L-g*M,D=m*S-f*M,V=m*d-v*M,q=g*S-f*L,A=g*d-v*L,J=f*d-v*S,H=b*J-E*A+y*q+T*V-w*D+N*_;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let $=1/H;return e[0]=(a*J-c*A+h*q)*$,e[1]=(s*A-n*J-r*q)*$,e[2]=(L*N-S*w+d*T)*$,e[3]=(f*w-g*N-v*T)*$,e[4]=(c*V-l*J-h*D)*$,e[5]=(t*J-s*V+r*D)*$,e[6]=(S*y-M*N-d*E)*$,e[7]=(m*N-f*y+v*E)*$,e[8]=(l*A-a*V+h*_)*$,e[9]=(n*V-t*A-r*_)*$,e[10]=(M*w-L*y+d*b)*$,e[11]=(g*y-m*w-v*b)*$,e[12]=(a*D-l*q-c*_)*$,e[13]=(t*q-n*D+s*_)*$,e[14]=(L*E-M*T-S*b)*$,e[15]=(m*T-g*E+f*b)*$,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,l=e.x,a=e.y,c=e.z,h=r*l,m=r*a;return this.set(h*l+n,h*a-s*c,h*c+s*a,0,h*a+s*c,m*a+n,m*c-s*l,0,h*c-s*a,m*c+s*l,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,l){return this.set(1,n,r,0,e,1,l,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,l=t._y,a=t._z,c=t._w,h=r+r,m=l+l,g=a+a,f=r*h,v=r*m,M=r*g,L=l*m,S=l*g,d=a*g,b=c*h,E=c*m,y=c*g,T=n.x,w=n.y,N=n.z;return s[0]=(1-(L+d))*T,s[1]=(v+y)*T,s[2]=(M-E)*T,s[3]=0,s[4]=(v-y)*w,s[5]=(1-(f+d))*w,s[6]=(S+b)*w,s[7]=0,s[8]=(M+E)*N,s[9]=(S-b)*N,s[10]=(1-(f+L))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let l=xs.set(s[0],s[1],s[2]).length(),a=xs.set(s[4],s[5],s[6]).length(),c=xs.set(s[8],s[9],s[10]).length();r<0&&(l=-l),jn.copy(this);let h=1/l,m=1/a,g=1/c;return jn.elements[0]*=h,jn.elements[1]*=h,jn.elements[2]*=h,jn.elements[4]*=m,jn.elements[5]*=m,jn.elements[6]*=m,jn.elements[8]*=g,jn.elements[9]*=g,jn.elements[10]*=g,t.setFromRotationMatrix(jn),n.x=l,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,l,a=ti,c=!1){let h=this.elements,m=2*r/(t-e),g=2*r/(n-s),f=(t+e)/(t-e),v=(n+s)/(n-s),M,L;if(c)M=r/(l-r),L=l*r/(l-r);else if(a===ti)M=-(l+r)/(l-r),L=-2*l*r/(l-r);else if(a===Ds)M=-l/(l-r),L=-l*r/(l-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=m,h[4]=0,h[8]=f,h[12]=0,h[1]=0,h[5]=g,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=L,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,s,r,l,a=ti,c=!1){let h=this.elements,m=2/(t-e),g=2/(n-s),f=-(t+e)/(t-e),v=-(n+s)/(n-s),M,L;if(c)M=1/(l-r),L=l/(l-r);else if(a===ti)M=-2/(l-r),L=-(l+r)/(l-r);else if(a===Ds)M=-1/(l-r),L=-r/(l-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=m,h[4]=0,h[8]=0,h[12]=f,h[1]=0,h[5]=g,h[9]=0,h[13]=v,h[2]=0,h[6]=0,h[10]=M,h[14]=L,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};$a.prototype.isMatrix4=!0;var Ft=$a,xs=new de,jn=new Ft,pd=new de(0,0,0),md=new de(1,1,1),Ni=new de,ea=new de,Vn=new de,Qc=new Ft,eh=new fi,Ii=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],l=s[4],a=s[8],c=s[1],h=s[5],m=s[9],g=s[2],f=s[6],v=s[10];switch(t){case"XYZ":this._y=Math.asin(Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-m,v),this._z=Math.atan2(-l,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(a,v),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-g,r),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-g,v),this._z=Math.atan2(-l,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Dt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(f,v),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-l,h));break;case"YZX":this._z=Math.asin(Dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-g,r)):(this._x=0,this._y=Math.atan2(a,v));break;case"XZY":this._z=Math.asin(-Dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-m,v),this._y=0);break;default:ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Qc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return eh.setFromEuler(this),this.setFromQuaternion(eh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ii.DEFAULT_ORDER="XYZ";var Fs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},gd=0,th=new de,_s=new fi,wi=new Ft,ta=new de,sr=new de,xd=new de,_d=new fi,nh=new de(1,0,0),ih=new de(0,1,0),sh=new de(0,0,1),rh={type:"added"},yd={type:"removed"},ys={type:"childadded",child:null},fl={type:"childremoved",child:null},Cn=class i extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new de,t=new Ii,n=new fi,s=new de(1,1,1);function r(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ft},normalMatrix:{value:new Mt}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(nh,e)}rotateY(e){return this.rotateOnAxis(ih,e)}rotateZ(e){return this.rotateOnAxis(sh,e)}translateOnAxis(e,t){return th.copy(e).applyQuaternion(this.quaternion),this.position.add(th.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nh,e)}translateY(e){return this.translateOnAxis(ih,e)}translateZ(e){return this.translateOnAxis(sh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ta.copy(e):ta.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(sr,ta,this.up):wi.lookAt(ta,sr,this.up),this.quaternion.setFromRotationMatrix(wi),s&&(wi.extractRotation(s.matrixWorld),_s.setFromRotationMatrix(wi),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rh),ys.child=e,this.dispatchEvent(ys),ys.child=null):dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yd),fl.child=e,this.dispatchEvent(fl),fl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rh),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,l=s.length;r<l;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,e,xd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,_d,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let l=0,a=r.length;l<a;l++)r[l].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let h=0,m=c.length;h<m;h++){let g=c[h];r(e.shapes,g)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,h=this.material.length;c<h;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=l(e.geometries),c=l(e.materials),h=l(e.textures),m=l(e.images),g=l(e.shapes),f=l(e.skeletons),v=l(e.animations),M=l(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),m.length>0&&(n.images=m),g.length>0&&(n.shapes=g),f.length>0&&(n.skeletons=f),v.length>0&&(n.animations=v),M.length>0&&(n.nodes=M)}return n.object=s,n;function l(a){let c=[];for(let h in a){let m=a[h];delete m.metadata,c.push(m)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Cn.DEFAULT_UP=new de(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var is=class extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}},vd={type:"move"},Os=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new is,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new is,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new de,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new de),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new is,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new de,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new de,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,l=null,a=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){l=!0;for(let L of e.hand.values()){let S=t.getJointPose(L,n),d=this._getHandJoint(h,L);S!==null&&(d.matrix.fromArray(S.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=S.radius),d.visible=S!==null}let m=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],f=m.position.distanceTo(g.position),v=.02,M=.005;h.inputState.pinching&&f>v+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&f<=v-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vd)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new is;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},iu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},na={h:0,s:0,l:0};function pl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Tt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Pt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Pt.workingColorSpace){if(e=hd(e,1),t=Dt(t,0,1),n=Dt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,l=2*n-r;this.r=pl(l,r,e+1/3),this.g=pl(l,r,e),this.b=pl(l,r,e-1/3)}return Pt.colorSpaceToWorking(this,s),this}setStyle(e,t=Sn){function n(r){r!==void 0&&parseFloat(r)<1&&ft("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,l=s[1],a=s[2];switch(l){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ft("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],l=r.length;if(l===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(r,16),t);ft("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Sn){let n=iu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ft("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sn){return Pt.workingToColorSpace(En.copy(this),e),Math.round(Dt(En.r*255,0,255))*65536+Math.round(Dt(En.g*255,0,255))*256+Math.round(Dt(En.b*255,0,255))}getHexString(e=Sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.workingToColorSpace(En.copy(this),t);let n=En.r,s=En.g,r=En.b,l=Math.max(n,s,r),a=Math.min(n,s,r),c,h,m=(a+l)/2;if(a===l)c=0,h=0;else{let g=l-a;switch(h=m<=.5?g/(l+a):g/(2-l-a),l){case n:c=(s-r)/g+(s<r?6:0);break;case s:c=(r-n)/g+2;break;case r:c=(n-s)/g+4;break}c/=6}return e.h=c,e.s=h,e.l=m,e}getRGB(e,t=Pt.workingColorSpace){return Pt.workingToColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=Sn){Pt.workingToColorSpace(En.copy(this),e);let t=En.r,n=En.g,s=En.b;return e!==Sn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ui),this.setHSL(Ui.h+e,Ui.s+t,Ui.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ui),e.getHSL(na);let n=ll(Ui.h,na.h,t),s=ll(Ui.s,na.s,t),r=ll(Ui.l,na.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},En=new Tt;Tt.NAMES=iu;var mr=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Tt(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},gr=class extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Qn=new de,Ti=new de,ml=new de,Ei=new de,vs=new de,Ms=new de,ah=new de,gl=new de,xl=new de,_l=new de,yl=new on,vl=new on,Ml=new on,ki=class i{constructor(e=new de,t=new de,n=new de){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Qn.subVectors(e,t),s.cross(Qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Qn.subVectors(s,t),Ti.subVectors(n,t),ml.subVectors(e,t);let l=Qn.dot(Qn),a=Qn.dot(Ti),c=Qn.dot(ml),h=Ti.dot(Ti),m=Ti.dot(ml),g=l*h-a*a;if(g===0)return r.set(0,0,0),null;let f=1/g,v=(h*c-a*m)*f,M=(l*m-a*c)*f;return r.set(1-v-M,M,v)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,n,s,r,l,a,c){return this.getBarycoord(e,t,n,s,Ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ei.x),c.addScaledVector(l,Ei.y),c.addScaledVector(a,Ei.z),c)}static getInterpolatedAttribute(e,t,n,s,r,l){return yl.setScalar(0),vl.setScalar(0),Ml.setScalar(0),yl.fromBufferAttribute(e,t),vl.fromBufferAttribute(e,n),Ml.fromBufferAttribute(e,s),l.setScalar(0),l.addScaledVector(yl,r.x),l.addScaledVector(vl,r.y),l.addScaledVector(Ml,r.z),l}static isFrontFacing(e,t,n,s){return Qn.subVectors(n,t),Ti.subVectors(e,t),Qn.cross(Ti).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),Qn.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,l,a;vs.subVectors(s,n),Ms.subVectors(r,n),gl.subVectors(e,n);let c=vs.dot(gl),h=Ms.dot(gl);if(c<=0&&h<=0)return t.copy(n);xl.subVectors(e,s);let m=vs.dot(xl),g=Ms.dot(xl);if(m>=0&&g<=m)return t.copy(s);let f=c*g-m*h;if(f<=0&&c>=0&&m<=0)return l=c/(c-m),t.copy(n).addScaledVector(vs,l);_l.subVectors(e,r);let v=vs.dot(_l),M=Ms.dot(_l);if(M>=0&&v<=M)return t.copy(r);let L=v*h-c*M;if(L<=0&&h>=0&&M<=0)return a=h/(h-M),t.copy(n).addScaledVector(Ms,a);let S=m*M-v*g;if(S<=0&&g-m>=0&&v-M>=0)return ah.subVectors(r,s),a=(g-m)/(g-m+(v-M)),t.copy(s).addScaledVector(ah,a);let d=1/(S+L+f);return l=L*d,a=f*d,t.copy(n).addScaledVector(vs,l).addScaledVector(Ms,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},pi=class{constructor(e=new de(1/0,1/0,1/0),t=new de(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let l=0,a=r.count;l<a;l++)e.isMesh===!0?e.getVertexPosition(l,ei):ei.fromBufferAttribute(r,l),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ia.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ia.copy(n.boundingBox)),ia.applyMatrix4(e.matrixWorld),this.union(ia)}let s=e.children;for(let r=0,l=s.length;r<l;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rr),sa.subVectors(this.max,rr),bs.subVectors(e.a,rr),Ss.subVectors(e.b,rr),ws.subVectors(e.c,rr),Fi.subVectors(Ss,bs),Oi.subVectors(ws,Ss),Qi.subVectors(bs,ws);let t=[0,-Fi.z,Fi.y,0,-Oi.z,Oi.y,0,-Qi.z,Qi.y,Fi.z,0,-Fi.x,Oi.z,0,-Oi.x,Qi.z,0,-Qi.x,-Fi.y,Fi.x,0,-Oi.y,Oi.x,0,-Qi.y,Qi.x,0];return!bl(t,bs,Ss,ws,sa)||(t=[1,0,0,0,1,0,0,0,1],!bl(t,bs,Ss,ws,sa))?!1:(ra.crossVectors(Fi,Oi),t=[ra.x,ra.y,ra.z],bl(t,bs,Ss,ws,sa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ai=[new de,new de,new de,new de,new de,new de,new de,new de],ei=new de,ia=new pi,bs=new de,Ss=new de,ws=new de,Fi=new de,Oi=new de,Qi=new de,rr=new de,sa=new de,ra=new de,es=new de;function bl(i,e,t,n,s){for(let r=0,l=i.length-3;r<=l;r+=3){es.fromArray(i,r);let a=s.x*Math.abs(es.x)+s.y*Math.abs(es.y)+s.z*Math.abs(es.z),c=e.dot(es),h=t.dot(es),m=n.dot(es);if(Math.max(-Math.max(c,h,m),Math.min(c,h,m))>a)return!1}return!0}var mn=new de,aa=new Rt,Md=0,Dn=class extends di{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Md++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=rc,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)aa.fromBufferAttribute(this,t),aa.applyMatrix3(e),this.setXY(t,aa.x,aa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix3(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array),s=tn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array),s=tn(s,this.array),r=tn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var xr=class extends Dn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var _r=class extends Dn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Nn=class extends Dn{constructor(e,t,n){super(new Float32Array(e),t,n)}},bd=new pi,ar=new de,Sl=new de,Vi=class{constructor(e=new de,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):bd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,l=e.length;r<l;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ar.subVectors(e,this.center);let t=ar.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ar,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ar.copy(e.center).add(Sl)),this.expandByPoint(ar.copy(e.center).sub(Sl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Sd=0,Zn=new Ft,wl=new Cn,Ts=new de,Gn=new pi,or=new pi,Mn=new de,Wn=class i extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ld(e)?_r:xr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Mt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,n){return Zn.makeTranslation(e,t,n),this.applyMatrix4(Zn),this}scale(e,t,n){return Zn.makeScale(e,t,n),this.applyMatrix4(Zn),this}lookAt(e){return wl.lookAt(e),wl.updateMatrix(),this.applyMatrix4(wl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let l=e[s];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new Nn(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new de(-1/0,-1/0,-1/0),new de(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new de,1/0);return}if(e){let n=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let r=0,l=t.length;r<l;r++){let a=t[r];or.setFromBufferAttribute(a),this.morphTargetsRelative?(Mn.addVectors(Gn.min,or.min),Gn.expandByPoint(Mn),Mn.addVectors(Gn.max,or.max),Gn.expandByPoint(Mn)):(Gn.expandByPoint(or.min),Gn.expandByPoint(or.max))}Gn.getCenter(n);let s=0;for(let r=0,l=e.count;r<l;r++)Mn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Mn));if(t)for(let r=0,l=t.length;r<l;r++){let a=t[r],c=this.morphTargetsRelative;for(let h=0,m=a.count;h<m;h++)Mn.fromBufferAttribute(a,h),c&&(Ts.fromBufferAttribute(e,h),Mn.add(Ts)),s=Math.max(s,n.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,l=this.getAttribute("tangent");(l===void 0||l.count!==n.count)&&(l=new Dn(new Float32Array(4*n.count),4),this.setAttribute("tangent",l));let a=[],c=[];for(let _=0;_<n.count;_++)a[_]=new de,c[_]=new de;let h=new de,m=new de,g=new de,f=new Rt,v=new Rt,M=new Rt,L=new de,S=new de;function d(_,D,V){h.fromBufferAttribute(n,_),m.fromBufferAttribute(n,D),g.fromBufferAttribute(n,V),f.fromBufferAttribute(r,_),v.fromBufferAttribute(r,D),M.fromBufferAttribute(r,V),m.sub(h),g.sub(h),v.sub(f),M.sub(f);let q=1/(v.x*M.y-M.x*v.y);isFinite(q)&&(L.copy(m).multiplyScalar(M.y).addScaledVector(g,-v.y).multiplyScalar(q),S.copy(g).multiplyScalar(v.x).addScaledVector(m,-M.x).multiplyScalar(q),a[_].add(L),a[D].add(L),a[V].add(L),c[_].add(S),c[D].add(S),c[V].add(S))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let _=0,D=b.length;_<D;++_){let V=b[_],q=V.start,A=V.count;for(let J=q,H=q+A;J<H;J+=3)d(e.getX(J+0),e.getX(J+1),e.getX(J+2))}let E=new de,y=new de,T=new de,w=new de;function N(_){T.fromBufferAttribute(s,_),w.copy(T);let D=a[_];E.copy(D),E.sub(T.multiplyScalar(T.dot(D))).normalize(),y.crossVectors(w,D);let q=y.dot(c[_])<0?-1:1;l.setXYZW(_,E.x,E.y,E.z,q)}for(let _=0,D=b.length;_<D;++_){let V=b[_],q=V.start,A=V.count;for(let J=q,H=q+A;J<H;J+=3)N(e.getX(J+0)),N(e.getX(J+1)),N(e.getX(J+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Dn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,v=n.count;f<v;f++)n.setXYZ(f,0,0,0);let s=new de,r=new de,l=new de,a=new de,c=new de,h=new de,m=new de,g=new de;if(e)for(let f=0,v=e.count;f<v;f+=3){let M=e.getX(f+0),L=e.getX(f+1),S=e.getX(f+2);s.fromBufferAttribute(t,M),r.fromBufferAttribute(t,L),l.fromBufferAttribute(t,S),m.subVectors(l,r),g.subVectors(s,r),m.cross(g),a.fromBufferAttribute(n,M),c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,S),a.add(m),c.add(m),h.add(m),n.setXYZ(M,a.x,a.y,a.z),n.setXYZ(L,c.x,c.y,c.z),n.setXYZ(S,h.x,h.y,h.z)}else for(let f=0,v=t.count;f<v;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),l.fromBufferAttribute(t,f+2),m.subVectors(l,r),g.subVectors(s,r),m.cross(g),n.setXYZ(f+0,m.x,m.y,m.z),n.setXYZ(f+1,m.x,m.y,m.z),n.setXYZ(f+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mn.fromBufferAttribute(e,t),Mn.normalize(),e.setXYZ(t,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(a,c){let h=a.array,m=a.itemSize,g=a.normalized,f=new h.constructor(c.length*m),v=0,M=0;for(let L=0,S=c.length;L<S;L++){a.isInterleavedBufferAttribute?v=c[L]*a.data.stride+a.offset:v=c[L]*m;for(let d=0;d<m;d++)f[M++]=h[v++]}return new Dn(f,m,g)}if(this.index===null)return ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],h=e(c,n);t.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let c=[],h=r[a];for(let m=0,g=h.length;m<g;m++){let f=h[m],v=e(f,n);c.push(v)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let l=this.groups;for(let a=0,c=l.length;a<c;a++){let h=l[a];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(e[h]=c[h]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let h=n[c];e.data.attributes[c]=h.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],m=[];for(let g=0,f=h.length;g<f;g++){let v=h[g];m.push(v.toJSON(e.data))}m.length>0&&(s[c]=m,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let h in s){let m=s[h];this.setAttribute(h,m.clone(t))}let r=e.morphAttributes;for(let h in r){let m=[],g=r[h];for(let f=0,v=g.length;f<v;f++)m.push(g[f].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;let l=e.groups;for(let h=0,m=l.length;h<m;h++){let g=l[h];this.addGroup(g.start,g.count,g.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},yr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=rc,this.updateRanges=[],this.version=0,this.uuid=zi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Pn=new de,vr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.applyMatrix4(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.applyNormalMatrix(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.transformDirection(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tn(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=tn(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tn(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tn(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tn(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ci(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array),s=tn(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array),s=tn(s,this.array),r=tn(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){pr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Dn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){pr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Tl=new de,wd=new de,Td=new Mt,Hn=class{constructor(e=new de(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Tl.subVectors(n,t).cross(wd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Tl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let l=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(l<0||l>1)?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Td.getNormalMatrix(e),s=this.coplanarPoint(Tl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ed=0,Gi=class extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=Ws,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gl,this.blendDst=Hl,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ma,this.stencilZFail=Ma,this.stencilZPass=Ma,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ft(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ft(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let l=[];for(let a in r){let c=r[a];delete c.metadata,l.push(c)}return l}if(t){let r=s(e.textures),l=s(e.images);r.length>0&&(n.textures=r),l.length>0&&(n.images=l)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Tt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Hn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Rt().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Rt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ci=new de,El=new de,oa=new de,la=new de,Mr=class{constructor(e=new de,t=new de(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){El.copy(e).add(t).multiplyScalar(.5),oa.copy(t).sub(e).normalize(),la.copy(this.origin).sub(El);let r=e.distanceTo(t)*.5,l=-this.direction.dot(oa),a=la.dot(this.direction),c=-la.dot(oa),h=la.lengthSq(),m=Math.abs(1-l*l),g,f,v,M;if(m>0)if(g=l*c-a,f=l*a-c,M=r*m,g>=0)if(f>=-M)if(f<=M){let L=1/m;g*=L,f*=L,v=g*(g+l*f+2*a)+f*(l*g+f+2*c)+h}else f=r,g=Math.max(0,-(l*f+a)),v=-g*g+f*(f+2*c)+h;else f=-r,g=Math.max(0,-(l*f+a)),v=-g*g+f*(f+2*c)+h;else f<=-M?(g=Math.max(0,-(-l*r+a)),f=g>0?-r:Math.min(Math.max(-r,-c),r),v=-g*g+f*(f+2*c)+h):f<=M?(g=0,f=Math.min(Math.max(-r,-c),r),v=f*(f+2*c)+h):(g=Math.max(0,-(l*r+a)),f=g>0?r:Math.min(Math.max(-r,-c),r),v=-g*g+f*(f+2*c)+h);else f=l>0?-r:r,g=Math.max(0,-(l*f+a)),v=-g*g+f*(f+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(El).addScaledVector(oa,f),v}intersectSphere(e,t){if(e.radius<0)return null;Ci.subVectors(e.center,this.origin);let n=Ci.dot(this.direction),s=Ci.dot(Ci)-n*n,r=e.radius*e.radius;if(s>r)return null;let l=Math.sqrt(r-s),a=n-l,c=n+l;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,l,a,c,h=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,f=this.origin;return h>=0?(n=(e.min.x-f.x)*h,s=(e.max.x-f.x)*h):(n=(e.max.x-f.x)*h,s=(e.min.x-f.x)*h),m>=0?(r=(e.min.y-f.y)*m,l=(e.max.y-f.y)*m):(r=(e.max.y-f.y)*m,l=(e.min.y-f.y)*m),n>l||r>s||((r>n||isNaN(n))&&(n=r),(l<s||isNaN(s))&&(s=l),g>=0?(a=(e.min.z-f.z)*g,c=(e.max.z-f.z)*g):(a=(e.max.z-f.z)*g,c=(e.min.z-f.z)*g),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,n,s,r){let l=this.origin,a=this.direction,c=a.x,h=a.y,m=a.z,g=e.x-l.x,f=e.y-l.y,v=e.z-l.z,M=t.x-l.x,L=t.y-l.y,S=t.z-l.z,d=n.x-l.x,b=n.y-l.y,E=n.z-l.z,y=Math.abs(c),T=Math.abs(h),w=Math.abs(m),N,_,D,V,q,A,J,H,$,me,fe,be;if(y>=T&&y>=w?(D=c,A=g,$=M,be=d,c>=0?(N=h,_=m,V=f,q=v,J=L,H=S,me=b,fe=E):(N=m,_=h,V=v,q=f,J=S,H=L,me=E,fe=b)):T>=w?(D=h,A=f,$=L,be=b,h>=0?(N=m,_=c,V=v,q=g,J=S,H=M,me=E,fe=d):(N=c,_=m,V=g,q=v,J=M,H=S,me=d,fe=E)):(D=m,A=v,$=S,be=E,m>=0?(N=c,_=h,V=g,q=f,J=M,H=L,me=d,fe=b):(N=h,_=c,V=f,q=g,J=L,H=M,me=b,fe=d)),D===0)return null;let ce=N/D,te=_/D,P=1/D,Xe=V-ce*A,Ge=q-te*A,at=J-ce*$,ee=H-te*$,_t=me-ce*be,_e=fe-te*be,ge=_t*ee-_e*at,qe=Xe*_e-Ge*_t,ct=at*Ge-ee*Xe;if(s){if(ge<0||qe<0||ct<0)return null}else if((ge<0||qe<0||ct<0)&&(ge>0||qe>0||ct>0))return null;let Fe=ge+qe+ct;if(Fe===0)return null;let Ye=P*(ge*A+qe*$+ct*be);return(Fe>0?Ye<0:Ye>0)?null:this.at(Ye/Fe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},br=class extends Gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=Wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},oh=new Ft,ts=new Mr,ca=new Vi,lh=new de,ha=new de,ua=new de,da=new de,Al=new de,fa=new de,ch=new de,pa=new de,Rn=class extends Cn{constructor(e=new Wn,t=new br){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,l=s.length;r<l;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){fa.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let m=a[c],g=r[c];m!==0&&(Al.fromBufferAttribute(g,e),l?fa.addScaledVector(Al,m):fa.addScaledVector(Al.sub(t),m))}t.add(fa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ca.copy(n.boundingSphere),ca.applyMatrix4(r),ts.copy(e.ray).recast(e.near),!(ca.containsPoint(ts.origin)===!1&&(ts.intersectSphere(ca,lh)===null||ts.origin.distanceToSquared(lh)>(e.far-e.near)**2))&&(oh.copy(r).invert(),ts.copy(e.ray).applyMatrix4(oh),!(n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ts)))}_computeIntersections(e,t,n){let s,r=this.geometry,l=this.material,a=r.index,c=r.attributes.position,h=r.attributes.uv,m=r.attributes.uv1,g=r.attributes.normal,f=r.groups,v=r.drawRange;if(a!==null)if(Array.isArray(l))for(let M=0,L=f.length;M<L;M++){let S=f[M],d=l[S.materialIndex],b=Math.max(S.start,v.start),E=Math.min(a.count,Math.min(S.start+S.count,v.start+v.count));for(let y=b,T=E;y<T;y+=3){let w=a.getX(y),N=a.getX(y+1),_=a.getX(y+2);s=ma(this,d,e,n,h,m,g,w,N,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{let M=Math.max(0,v.start),L=Math.min(a.count,v.start+v.count);for(let S=M,d=L;S<d;S+=3){let b=a.getX(S),E=a.getX(S+1),y=a.getX(S+2);s=ma(this,l,e,n,h,m,g,b,E,y),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(l))for(let M=0,L=f.length;M<L;M++){let S=f[M],d=l[S.materialIndex],b=Math.max(S.start,v.start),E=Math.min(c.count,Math.min(S.start+S.count,v.start+v.count));for(let y=b,T=E;y<T;y+=3){let w=y,N=y+1,_=y+2;s=ma(this,d,e,n,h,m,g,w,N,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{let M=Math.max(0,v.start),L=Math.min(c.count,v.start+v.count);for(let S=M,d=L;S<d;S+=3){let b=S,E=S+1,y=S+2;s=ma(this,l,e,n,h,m,g,b,E,y),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}}};function Ad(i,e,t,n,s,r,l,a){let c;if(e.side===Ln?c=n.intersectTriangle(l,r,s,!0,a):c=n.intersectTriangle(s,r,l,e.side===Yi,a),c===null)return null;pa.copy(a),pa.applyMatrix4(i.matrixWorld);let h=t.ray.origin.distanceTo(pa);return h<t.near||h>t.far?null:{distance:h,point:pa.clone(),object:i}}function ma(i,e,t,n,s,r,l,a,c,h){i.getVertexPosition(a,ha),i.getVertexPosition(c,ua),i.getVertexPosition(h,da);let m=Ad(i,e,t,n,ha,ua,da,ch);if(m){let g=new de;ki.getBarycoord(ch,ha,ua,da,g),s&&(m.uv=ki.getInterpolatedAttribute(s,a,c,h,g,new Rt)),r&&(m.uv1=ki.getInterpolatedAttribute(r,a,c,h,g,new Rt)),l&&(m.normal=ki.getInterpolatedAttribute(l,a,c,h,g,new de),m.normal.dot(n.direction)>0&&m.normal.multiplyScalar(-1));let f={a,b:c,c:h,normal:new de,materialIndex:0};ki.getNormal(ha,ua,da,f.normal),m.face=f,m.barycoord=g}return m}var Sr=class extends Un{constructor(e=null,t=1,n=1,s,r,l,a,c,h=bn,m=bn,g,f){super(null,l,a,c,h,m,s,r,g,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var as=class extends Dn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Es=new Ft,hh=new Ft,ga=[],uh=new pi,Cd=new Ft,lr=new Rn,cr=new Vi,wr=class extends Rn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new as(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Cd)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Es),uh.copy(e.boundingBox).applyMatrix4(Es),this.boundingBox.union(uh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Es),cr.copy(e.boundingSphere).applyMatrix4(Es),this.boundingSphere.union(cr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,l=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[l+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(lr.geometry=this.geometry,lr.material=this.material,lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cr.copy(this.boundingSphere),cr.applyMatrix4(n),e.ray.intersectsSphere(cr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Es),hh.multiplyMatrices(n,Es),lr.matrixWorld=hh,lr.raycast(e,ga);for(let l=0,a=ga.length;l<a;l++){let c=ga[l];c.instanceId=r,c.object=this,t.push(c)}ga.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new as(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Sr(new Float32Array(s*this.count),s,this.count,io,Jn));let r=this.morphTexture.source.data.data,l=0;for(let h=0;h<n.length;h++)l+=n[h];let a=this.geometry.morphTargetsRelative?1:1-l,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ns=new Vi,Rd=new Rt(.5,.5),xa=new de,Bs=class{constructor(e=new Hn,t=new Hn,n=new Hn,s=new Hn,r=new Hn,l=new Hn){this.planes=[e,t,n,s,r,l]}set(e,t,n,s,r,l){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(l),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ti,n=!1){let s=this.planes,r=e.elements,l=r[0],a=r[1],c=r[2],h=r[3],m=r[4],g=r[5],f=r[6],v=r[7],M=r[8],L=r[9],S=r[10],d=r[11],b=r[12],E=r[13],y=r[14],T=r[15];if(s[0].setComponents(h-l,v-m,d-M,T-b).normalize(),s[1].setComponents(h+l,v+m,d+M,T+b).normalize(),s[2].setComponents(h+a,v+g,d+L,T+E).normalize(),s[3].setComponents(h-a,v-g,d-L,T-E).normalize(),n)s[4].setComponents(c,f,S,y).normalize(),s[5].setComponents(h-c,v-f,d-S,T-y).normalize();else if(s[4].setComponents(h-c,v-f,d-S,T-y).normalize(),t===ti)s[5].setComponents(h+c,v+f,d+S,T+y).normalize();else if(t===Ds)s[5].setComponents(c,f,S,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){ns.center.set(0,0,0);let t=Rd.distanceTo(e.center);return ns.radius=.7071067811865476+t,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(xa.x=s.normal.x>0?e.max.x:e.min.x,xa.y=s.normal.y>0?e.max.y:e.min.y,xa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(xa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Tr=class extends Un{constructor(e=[],t=Zi,n,s,r,l,a,c,h,m){super(e,t,n,s,r,l,a,c,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Hi=class extends Un{constructor(e,t,n=ii,s,r,l,a=bn,c=bn,h,m=ui,g=1){if(m!==ui&&m!==Ji)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:g};super(f,s,r,l,a,c,m,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Us(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ua=class extends Hi{constructor(e,t=ii,n=Zi,s,r,l=bn,a=bn,c,h=ui){let m={width:e,height:e,depth:1},g=[m,m,m,m,m,m];super(e,e,t,n,s,r,l,a,c,h),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Er=class extends Un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ks=class i extends Wn{constructor(e=1,t=1,n=1,s=1,r=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:l};let a=this;s=Math.floor(s),r=Math.floor(r),l=Math.floor(l);let c=[],h=[],m=[],g=[],f=0,v=0;M("z","y","x",-1,-1,n,t,e,l,r,0),M("z","y","x",1,-1,n,t,-e,l,r,1),M("x","z","y",1,1,e,n,t,s,l,2),M("x","z","y",1,-1,e,n,-t,s,l,3),M("x","y","z",1,-1,e,t,n,s,r,4),M("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Nn(h,3)),this.setAttribute("normal",new Nn(m,3)),this.setAttribute("uv",new Nn(g,2));function M(L,S,d,b,E,y,T,w,N,_,D){let V=y/N,q=T/_,A=y/2,J=T/2,H=w/2,$=N+1,me=_+1,fe=0,be=0,ce=new de;for(let te=0;te<me;te++){let P=te*q-J;for(let Xe=0;Xe<$;Xe++){let Ge=Xe*V-A;ce[L]=Ge*b,ce[S]=P*E,ce[d]=H,h.push(ce.x,ce.y,ce.z),ce[L]=0,ce[S]=0,ce[d]=w>0?1:-1,m.push(ce.x,ce.y,ce.z),g.push(Xe/N),g.push(1-te/_),fe+=1}}for(let te=0;te<_;te++)for(let P=0;P<N;P++){let Xe=f+P+$*te,Ge=f+P+$*(te+1),at=f+(P+1)+$*(te+1),ee=f+(P+1)+$*te;c.push(Xe,Ge,ee),c.push(Ge,at,ee),be+=6}a.addGroup(v,be,D),v+=be,f+=fe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ar=class i extends Wn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,l=t/2,a=Math.floor(n),c=Math.floor(s),h=a+1,m=c+1,g=e/a,f=t/c,v=[],M=[],L=[],S=[];for(let d=0;d<m;d++){let b=d*f-l;for(let E=0;E<h;E++){let y=E*g-r;M.push(y,-b,0),L.push(0,0,1),S.push(E/a),S.push(1-d/c)}}for(let d=0;d<c;d++)for(let b=0;b<a;b++){let E=b+h*d,y=b+h*(d+1),T=b+1+h*(d+1),w=b+1+h*d;v.push(E,y,w),v.push(y,T,w)}this.setIndex(v),this.setAttribute("position",new Nn(M,3)),this.setAttribute("normal",new Nn(L,3)),this.setAttribute("uv",new Nn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};function hs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(dh(s))s.isRenderTargetTexture?(ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(dh(s[0])){let r=[];for(let l=0,a=s.length;l<a;l++)r[l]=s[l].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function In(i){let e={};for(let t=0;t<i.length;t++){let n=hs(i[t]);for(let s in n)e[s]=n[s]}return e}function dh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Id(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ac(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}var su={clone:hs,merge:In},Pd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ld=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xn=class extends Gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pd,this.fragmentShader=Ld,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hs(e.uniforms),this.uniformsGroups=Id(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let l=this.uniforms[s].value;l&&l.isTexture?t.uniforms[s]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[s]={type:"m4",value:l.toArray()}:t.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Tt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Rt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new de().fromArray(s.value);break;case"v4":this.uniforms[n].value=new on().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Mt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ft().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},zs=class extends Xn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Cr=class extends Gi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bo,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Vs=class extends Gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Fa=class extends Gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function As(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Cl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Wi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let l;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}l=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}l=n,n=0;break t}break n}for(;n<l;){let a=n+l>>>1;e<t[a]?l=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let l=0;l!==s;++l)t[l]=n[r+l];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Oa=class extends Wi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pl,endingEnd:Pl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,l=e+1,a=s[r],c=s[l];if(a===void 0)switch(this.getSettings_().endingStart){case Ll:r=e,a=2*t-n;break;case Dl:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ll:l=e,c=2*n-t;break;case Dl:l=1,c=n+s[1]-s[0];break;default:l=e-1,c=t}let h=(n-t)*.5,m=this.valueSize;this._weightPrev=h/(t-a),this._weightNext=h/(c-n),this._offsetPrev=r*m,this._offsetNext=l*m}interpolate_(e,t,n,s){let r=this.resultBuffer,l=this.sampleValues,a=this.valueSize,c=e*a,h=c-a,m=this._offsetPrev,g=this._offsetNext,f=this._weightPrev,v=this._weightNext,M=(n-t)/(s-t),L=M*M,S=L*M,d=-f*S+2*f*L-f*M,b=(1+f)*S+(-1.5-2*f)*L+(-.5+f)*M+1,E=(-1-v)*S+(1.5+v)*L+.5*M,y=v*S-v*L;for(let T=0;T!==a;++T)r[T]=d*l[m+T]+b*l[h+T]+E*l[c+T]+y*l[g+T];return r}},Ba=class extends Wi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,l=this.sampleValues,a=this.valueSize,c=e*a,h=c-a,m=(n-t)/(s-t),g=1-m;for(let f=0;f!==a;++f)r[f]=l[h+f]*g+l[c+f]*m;return r}},ka=class extends Wi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},za=class extends Wi{interpolate_(e,t,n,s){let r=this.resultBuffer,l=this.sampleValues,a=this.valueSize,c=e*a,h=c-a,m=this.inTangents,g=this.outTangents;if(!m||!g){let M=(n-t)/(s-t),L=1-M;for(let S=0;S!==a;++S)r[S]=l[h+S]*L+l[c+S]*M;return r}let f=a*2,v=e-1;for(let M=0;M!==a;++M){let L=l[h+M],S=l[c+M],d=v*f+M*2,b=g[d],E=g[d+1],y=e*f+M*2,T=m[y],w=m[y+1],N=Nd(n,t,b,T,s);r[M]=ru(N,L,E,w,S)}return r}};function ru(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Dd(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Nd(i,e,t,n,s){let r=(i-e)/(s-e);for(let l=0;l<8;l++){let a=ru(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let c=Dd(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var qn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=As(t,this.TimeBufferType),this.values=As(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:As(e.times,Array),values:As(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Cl(e.settings)&&(n.settings={inTangents:As(e.settings.inTangents,Array),outTangents:As(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ba(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Oa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new za(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case hr:t=this.InterpolantFactoryMethodDiscrete;break;case Ia:t=this.InterpolantFactoryMethodLinear;break;case va:t=this.InterpolantFactoryMethodSmooth;break;case Il:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ft("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hr;case this.InterpolantFactoryMethodLinear:return Ia;case this.InterpolantFactoryMethodSmooth:return va;case this.InterpolantFactoryMethodBezier:return Il}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Cl(this.settings)&&(fh(this.settings.inTangents,e),fh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,l=s-1;for(;r!==s&&n[r]<e;)++r;for(;l!==-1&&n[l]>t;)--l;if(++l,r!==0||l!==s){r>=l&&(l=Math.max(l,1),r=l-1);let a=this.getValueSize();this.times=n.slice(r,l),this.values=this.values.slice(r*a,l*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(dt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(dt("KeyframeTrack: Track is empty.",this),e=!1);let l=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){dt("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(l!==null&&l>c){dt("KeyframeTrack: Out of order keys.",this,a,c,l),e=!1;break}l=c}if(s!==void 0&&cd(s))for(let a=0,c=s.length;a!==c;++a){let h=s[a];if(isNaN(h)){dt("KeyframeTrack: Value is not a valid number.",this,a,h),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===va,r=e.length-1,l=1;for(let a=1;a<r;++a){let c=!1,h=e[a],m=e[a+1];if(h!==m&&(a!==1||h!==e[0]))if(s)c=!0;else{let g=a*n,f=g-n,v=g+n;for(let M=0;M!==n;++M){let L=t[g+M];if(L!==t[f+M]||L!==t[v+M]){c=!0;break}}}if(c){if(a!==l){e[l]=e[a];let g=a*n,f=l*n;for(let v=0;v!==n;++v)t[f+v]=t[g+v]}++l}}if(r>0){e[l]=e[r];for(let a=r*n,c=l*n,h=0;h!==n;++h)t[c+h]=t[a+h];++l}return l!==e.length?(this.times=e.slice(0,l),this.values=t.slice(0,l*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Cl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function fh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}qn.prototype.ValueTypeName="";qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=Ia;var Xi=class extends qn{constructor(e,t,n){super(e,t,n)}};Xi.prototype.ValueTypeName="bool";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=hr;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Va=class extends qn{constructor(e,t,n,s){super(e,t,n,s)}};Va.prototype.ValueTypeName="color";var Ga=class extends qn{constructor(e,t,n,s){super(e,t,n,s)}};Ga.prototype.ValueTypeName="number";var Ha=class extends Wi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,l=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),h=e*a;for(let m=h+a;h!==m;h+=4)fi.slerpFlat(r,0,l,h-a,l,h,c);return r}},Rr=class extends qn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ha(this.times,this.values,this.getValueSize(),e)}};Rr.prototype.ValueTypeName="quaternion";Rr.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends qn{constructor(e,t,n){super(e,t,n)}};qi.prototype.ValueTypeName="string";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=hr;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Wa=class extends qn{constructor(e,t,n,s){super(e,t,n,s)}};Wa.prototype.ValueTypeName="vector";var Xa=class{constructor(e,t,n){let s=this,r=!1,l=0,a=0,c,h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(m){a++,r===!1&&s.onStart!==void 0&&s.onStart(m,l,a),r=!0},this.itemEnd=function(m){l++,s.onProgress!==void 0&&s.onProgress(m,l,a),l===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return m=m.normalize("NFC"),c?c(m):m},this.setURLModifier=function(m){return c=m,this},this.addHandler=function(m,g){return h.push(m,g),this},this.removeHandler=function(m){let g=h.indexOf(m);return g!==-1&&h.splice(g,2),this},this.getHandler=function(m){for(let g=0,f=h.length;g<f;g+=2){let v=h[g],M=h[g+1];if(v.global&&(v.lastIndex=0),v.test(m))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},au=new Xa,qa=class{constructor(e){this.manager=e!==void 0?e:au,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};qa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ir=class extends Cn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Pr=class extends Ir{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Rl=new Ft,ph=new de,mh=new de,Ya=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.mapType=On,this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bs,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new on(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ph.setFromMatrixPosition(e.matrixWorld),t.position.copy(ph),mh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Rl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Rl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,l=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,h=s?s.y/r.y:0;e.coordinateSystem===Ds||e.reversedDepth?t.set(.5*l,0,0,.5*l+c,0,.5*a,0,.5*a+h,0,0,1,0,0,0,0,1):t.set(.5*l,0,0,.5*l+c,0,.5*a,0,.5*a+h,0,0,.5,.5,0,0,0,1),t.multiply(Rl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},_a=new de,ya=new fi,li=new de,Lr=class extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(_a,ya,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_a,ya,li.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(_a,ya,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_a,ya,li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Bi=new de,gh=new Rt,xh=new Rt,An=class extends Lr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Pa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ol*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pa*2*Math.atan(Math.tan(ol*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,t){return this.getViewBounds(e,gh,xh),t.subVectors(xh,gh)}setViewOffset(e,t,n,s,r,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ol*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,l=this.view;if(this.view!==null&&this.view.enabled){let c=l.fullWidth,h=l.fullHeight;r+=l.offsetX*s/c,t-=l.offsetY*n/h,s*=l.width/c,n*=l.height/h}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Gs=class extends Lr{constructor(e=-1,t=1,n=1,s=-1,r=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,l=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,l=r+h*this.view.width,a-=m*this.view.offsetY,c=a-m*this.view.height}this.projectionMatrix.makeOrthographic(r,l,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Nl=class extends Ya{constructor(){super(new Gs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Dr=class extends Ir{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.target=new Cn,this.shadow=new Nl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Cs=-90,Rs=1,Za=class extends Cn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new An(Cs,Rs,e,t);s.layers=this.layers,this.add(s);let r=new An(Cs,Rs,e,t);r.layers=this.layers,this.add(r);let l=new An(Cs,Rs,e,t);l.layers=this.layers,this.add(l);let a=new An(Cs,Rs,e,t);a.layers=this.layers,this.add(a);let c=new An(Cs,Rs,e,t);c.layers=this.layers,this.add(c);let h=new An(Cs,Rs,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,l,a,c]=t;for(let h of t)this.remove(h);if(e===ti)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,l,a,c,h,m]=this.children,g=e.getRenderTarget(),f=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;let L=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,2,s),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),n.texture.generateMipmaps=L,e.setRenderTarget(n,5,s),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(g,f,v),e.xr.enabled=M,n.texture.needsPMREMUpdate=!0}},Ja=class extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var oc="\\[\\]\\.:\\/",Ud=new RegExp("["+oc+"]","g"),lc="[^"+oc+"]",Fd="[^"+oc.replace("\\.","")+"]",Od=/((?:WC+[\/:])*)/.source.replace("WC",lc),Bd=/(WCOD+)?/.source.replace("WCOD",Fd),kd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lc),zd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lc),Vd=new RegExp("^"+Od+Bd+kd+zd+"$"),Gd=["material","materials","bones","map"],Ul=class{constructor(e,t,n){let s=n||sn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},sn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ud,"")}static parseTrackName(e){let t=Vd.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Gd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let l=0;l<r.length;l++){let a=r[l];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ft("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){dt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){dt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let m=0;m<e.length;m++)if(e[m].name===h){h=m;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){dt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){dt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){dt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}let l=e[s];if(l===void 0){let h=t.nodeName;dt("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=r}else l.fromArray!==void 0&&l.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(c=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};sn.Composite=Ul;sn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};sn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};sn.prototype.GetterByBindingType=[sn.prototype._getValue_direct,sn.prototype._getValue_array,sn.prototype._getValue_arrayElement,sn.prototype._getValue_toArray];sn.prototype.SetterByBindingTypeAndVersioning=[[sn.prototype._setValue_direct,sn.prototype._setValue_direct_setNeedsUpdate,sn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_array,sn.prototype._setValue_array_setNeedsUpdate,sn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_arrayElement,sn.prototype._setValue_arrayElement_setNeedsUpdate,sn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_fromArray,sn.prototype._setValue_fromArray_setNeedsUpdate,sn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Bg=new Float32Array(1);var _h=new Ft,Nr=class{constructor(e,t,n=0,s=1/0){this.ray=new Mr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Fs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):dt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return _h.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_h),this}intersectObject(e,t=!0,n=[]){return Fl(e,this,n,t),n.sort(yh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Fl(e[s],this,n,t);return n.sort(yh),n}};function yh(i,e){return i.distance-e.distance}function Fl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let l=0,a=r.length;l<a;l++)Fl(r[l],e,t,!0)}}var pc=class pc{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};pc.prototype.isMatrix2=!0;var Ol=pc;function cc(i,e,t,n){let s=Hd(n);switch(t){case nc:return i*e;case io:return i*e/s.components*s.byteLength;case so:return i*e/s.components*s.byteLength;case $i:return i*e*2/s.components*s.byteLength;case ro:return i*e*2/s.components*s.byteLength;case ic:return i*e*3/s.components*s.byteLength;case $n:return i*e*4/s.components*s.byteLength;case ao:return i*e*4/s.components*s.byteLength;case Br:case kr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case zr:case Vr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case lo:case ho:return Math.max(i,16)*Math.max(e,8)/4;case oo:case co:return Math.max(i,8)*Math.max(e,8)/2;case uo:case fo:case mo:case go:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case po:case Gr:case xo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case vo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case bo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case So:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case wo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case To:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Eo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ao:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Co:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ro:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Io:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Po:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Lo:case Do:case No:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Uo:case Fo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Hr:case Oo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hd(i){switch(i){case On:case jl:return{byteLength:1,components:1};case Xs:case Ql:case si:return{byteLength:2,components:1};case to:case no:return{byteLength:2,components:4};case ii:case eo:case Jn:return{byteLength:4,components:1};case ec:case tc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Cu(){let i=null,e=!1,t=null,n=null;function s(r,l){n=i.requestAnimationFrame(s),t(r,l)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Xd(i){let e=new WeakMap;function t(a,c){let h=a.array,m=a.usage,g=h.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,h,m),a.onUploadCallback();let v;if(h instanceof Float32Array)v=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)v=i.HALF_FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?v=i.HALF_FLOAT:v=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=i.SHORT;else if(h instanceof Uint32Array)v=i.UNSIGNED_INT;else if(h instanceof Int32Array)v=i.INT;else if(h instanceof Int8Array)v=i.BYTE;else if(h instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:g}}function n(a,c,h){let m=c.array,g=c.updateRanges;if(i.bindBuffer(h,a),g.length===0)i.bufferSubData(h,0,m);else{g.sort((v,M)=>v.start-M.start);let f=0;for(let v=1;v<g.length;v++){let M=g[f],L=g[v];L.start<=M.start+M.count+1?M.count=Math.max(M.count,L.start+L.count-M.start):(++f,g[f]=L)}g.length=f+1;for(let v=0,M=g.length;v<M;v++){let L=g[v];i.bufferSubData(h,L.start*m.BYTES_PER_ELEMENT,m,L.start,L.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function l(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let m=e.get(a);(!m||m.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=e.get(a);if(h===void 0)e.set(a,t(a,c));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,c),h.version=a.version}}return{get:s,remove:r,update:l}}var qd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yd=`#ifdef USE_ALPHAHASH
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
#endif`,Zd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$d=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jd=`#ifdef USE_AOMAP
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
#endif`,Qd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ef=`#ifdef USE_BATCHING
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
#endif`,tf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,af=`#ifdef USE_IRIDESCENCE
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
#endif`,of=`#ifdef USE_BUMPMAP
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
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,df=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ff=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,pf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,mf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,gf=`#define PI 3.141592653589793
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
} // validated`,xf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_f=`vec3 transformedNormal = objectNormal;
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
#endif`,yf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sf="gl_FragColor = linearToOutputTexel( gl_FragColor );",wf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tf=`#ifdef USE_ENVMAP
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
#endif`,Ef=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Af=`#ifdef USE_ENVMAP
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
#endif`,Cf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rf=`#ifdef USE_ENVMAP
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
#endif`,If=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Df=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nf=`#ifdef USE_GRADIENTMAP
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
}`,Uf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ff=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,kf=`#ifdef USE_ENVMAP
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
#endif`,zf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wf=`PhysicalMaterial material;
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
#endif`,Xf=`uniform sampler2D dfgLUT;
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
}`,qf=`
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
#endif`,Yf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jf=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,$f=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ep=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,np=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ip=`#if defined( USE_POINTS_UV )
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
#endif`,sp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ap=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,op=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cp=`#ifdef USE_MORPHTARGETS
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
#endif`,hp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,up=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gp=`#ifdef USE_NORMALMAP
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
#endif`,xp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_p=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ep=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ap=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ip=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lp=`float getShadowMask() {
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
}`,Dp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Np=`#ifdef USE_SKINNING
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
#endif`,Up=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fp=`#ifdef USE_SKINNING
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
#endif`,Op=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vp=`#ifdef USE_TRANSMISSION
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
#endif`,Gp=`#ifdef USE_TRANSMISSION
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
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Yp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zp=`uniform sampler2D t2D;
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
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$p=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`#include <common>
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
}`,em=`#if DEPTH_PACKING == 3200
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
}`,tm=`#define DISTANCE
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
}`,nm=`#define DISTANCE
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
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`uniform float scale;
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
}`,am=`uniform vec3 diffuse;
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
}`,om=`#include <common>
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
}`,lm=`uniform vec3 diffuse;
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
}`,cm=`#define LAMBERT
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
}`,hm=`#define LAMBERT
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
}`,um=`#define MATCAP
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
}`,dm=`#define MATCAP
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
}`,fm=`#define NORMAL
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
}`,pm=`#define NORMAL
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
}`,mm=`#define PHONG
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
}`,gm=`#define PHONG
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
}`,xm=`#define STANDARD
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
}`,_m=`#define STANDARD
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
}`,ym=`#define TOON
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
}`,vm=`#define TOON
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
}`,Mm=`uniform float size;
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
}`,bm=`uniform vec3 diffuse;
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
}`,Sm=`#include <common>
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
}`,wm=`uniform vec3 color;
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
}`,Tm=`uniform float rotation;
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
}`,Em=`uniform vec3 diffuse;
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
}`,Et={alphahash_fragment:qd,alphahash_pars_fragment:Yd,alphamap_fragment:Zd,alphamap_pars_fragment:Jd,alphatest_fragment:$d,alphatest_pars_fragment:Kd,aomap_fragment:jd,aomap_pars_fragment:Qd,batching_pars_vertex:ef,batching_vertex:tf,begin_vertex:nf,beginnormal_vertex:sf,bsdfs:rf,iridescence_fragment:af,bumpmap_pars_fragment:of,clipping_planes_fragment:lf,clipping_planes_pars_fragment:cf,clipping_planes_pars_vertex:hf,clipping_planes_vertex:uf,color_fragment:df,color_pars_fragment:ff,color_pars_vertex:pf,color_vertex:mf,common:gf,cube_uv_reflection_fragment:xf,defaultnormal_vertex:_f,displacementmap_pars_vertex:yf,displacementmap_vertex:vf,emissivemap_fragment:Mf,emissivemap_pars_fragment:bf,colorspace_fragment:Sf,colorspace_pars_fragment:wf,envmap_fragment:Tf,envmap_common_pars_fragment:Ef,envmap_pars_fragment:Af,envmap_pars_vertex:Cf,envmap_physical_pars_fragment:kf,envmap_vertex:Rf,fog_vertex:If,fog_pars_vertex:Pf,fog_fragment:Lf,fog_pars_fragment:Df,gradientmap_pars_fragment:Nf,lightmap_pars_fragment:Uf,lights_lambert_fragment:Ff,lights_lambert_pars_fragment:Of,lights_pars_begin:Bf,lights_toon_fragment:zf,lights_toon_pars_fragment:Vf,lights_phong_fragment:Gf,lights_phong_pars_fragment:Hf,lights_physical_fragment:Wf,lights_physical_pars_fragment:Xf,lights_fragment_begin:qf,lights_fragment_maps:Yf,lights_fragment_end:Zf,lightprobes_pars_fragment:Jf,logdepthbuf_fragment:$f,logdepthbuf_pars_fragment:Kf,logdepthbuf_pars_vertex:jf,logdepthbuf_vertex:Qf,map_fragment:ep,map_pars_fragment:tp,map_particle_fragment:np,map_particle_pars_fragment:ip,metalnessmap_fragment:sp,metalnessmap_pars_fragment:rp,morphinstance_vertex:ap,morphcolor_vertex:op,morphnormal_vertex:lp,morphtarget_pars_vertex:cp,morphtarget_vertex:hp,normal_fragment_begin:up,normal_fragment_maps:dp,normal_pars_fragment:fp,normal_pars_vertex:pp,normal_vertex:mp,normalmap_pars_fragment:gp,clearcoat_normal_fragment_begin:xp,clearcoat_normal_fragment_maps:_p,clearcoat_pars_fragment:yp,iridescence_pars_fragment:vp,opaque_fragment:Mp,packing:bp,premultiplied_alpha_fragment:Sp,project_vertex:wp,dithering_fragment:Tp,dithering_pars_fragment:Ep,roughnessmap_fragment:Ap,roughnessmap_pars_fragment:Cp,shadowmap_pars_fragment:Rp,shadowmap_pars_vertex:Ip,shadowmap_vertex:Pp,shadowmask_pars_fragment:Lp,skinbase_vertex:Dp,skinning_pars_vertex:Np,skinning_vertex:Up,skinnormal_vertex:Fp,specularmap_fragment:Op,specularmap_pars_fragment:Bp,tonemapping_fragment:kp,tonemapping_pars_fragment:zp,transmission_fragment:Vp,transmission_pars_fragment:Gp,uv_pars_fragment:Hp,uv_pars_vertex:Wp,uv_vertex:Xp,worldpos_vertex:qp,background_vert:Yp,background_frag:Zp,backgroundCube_vert:Jp,backgroundCube_frag:$p,cube_vert:Kp,cube_frag:jp,depth_vert:Qp,depth_frag:em,distance_vert:tm,distance_frag:nm,equirect_vert:im,equirect_frag:sm,linedashed_vert:rm,linedashed_frag:am,meshbasic_vert:om,meshbasic_frag:lm,meshlambert_vert:cm,meshlambert_frag:hm,meshmatcap_vert:um,meshmatcap_frag:dm,meshnormal_vert:fm,meshnormal_frag:pm,meshphong_vert:mm,meshphong_frag:gm,meshphysical_vert:xm,meshphysical_frag:_m,meshtoon_vert:ym,meshtoon_frag:vm,points_vert:Mm,points_frag:bm,shadow_vert:Sm,shadow_frag:wm,sprite_vert:Tm,sprite_frag:Em},Ze={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Mt}},envmap:{envMap:{value:null},envMapRotation:{value:new Mt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Mt},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new de},probesMax:{value:new de},probesResolution:{value:new de}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0},uvTransform:{value:new Mt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}}},_i={basic:{uniforms:In([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:In([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new Tt(0)},envMapIntensity:{value:1}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:In([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:In([Ze.common,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.roughnessmap,Ze.metalnessmap,Ze.fog,Ze.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:In([Ze.common,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.gradientmap,Ze.fog,Ze.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:In([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:In([Ze.points,Ze.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:In([Ze.common,Ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:In([Ze.common,Ze.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:In([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:In([Ze.sprite,Ze.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new Mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Mt}},vertexShader:Et.backgroundCube_vert,fragmentShader:Et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distance:{uniforms:In([Ze.common,Ze.displacementmap,{referencePosition:{value:new de},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Et.distance_vert,fragmentShader:Et.distance_frag},shadow:{uniforms:In([Ze.lights,Ze.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};_i.physical={uniforms:In([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Mt},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Mt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Mt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Mt},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Mt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Mt},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Mt}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};var Go={r:0,b:0,g:0},Am=new Ft,Ru=new Mt;Ru.set(-1,0,0,0,1,0,0,0,1);function Cm(i,e,t,n,s,r){let l=new Tt(0),a=s===!0?0:1,c,h,m=null,g=0,f=null;function v(b){let E=b.isScene===!0?b.background:null;if(E&&E.isTexture){let y=b.backgroundBlurriness>0;E=e.get(E,y)}return E}function M(b){let E=!1,y=v(b);y===null?S(l,a):y&&y.isColor&&(S(y,1),E=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function L(b,E){let y=v(E);y&&(y.isCubeTexture||y.mapping===Fr)?(h===void 0&&(h=new Rn(new ks(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:hs(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,w,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Am.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Ru),h.material.toneMapped=Pt.getTransfer(y.colorSpace)!==Xt,(m!==y||g!==y.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,m=y,g=y.version,f=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Rn(new Ar(2,2),new Xn({name:"BackgroundMaterial",uniforms:hs(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Pt.getTransfer(y.colorSpace)!==Xt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(m!==y||g!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,m=y,g=y.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function S(b,E){b.getRGB(Go,ac(i)),t.buffers.color.setClear(Go.r,Go.g,Go.b,E,r)}function d(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return l},setClearColor:function(b,E=1){l.set(b),a=E,S(l,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,S(l,a)},render:M,addToRenderList:L,dispose:d}}function Rm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,l=!1;function a(q,A,J,H,$){let me=!1,fe=g(q,H,J,A);r!==fe&&(r=fe,h(r.object)),me=v(q,H,J,$),me&&M(q,H,J,$),$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(me||l)&&(l=!1,y(q,A,J,H),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function c(){return i.createVertexArray()}function h(q){return i.bindVertexArray(q)}function m(q){return i.deleteVertexArray(q)}function g(q,A,J,H){let $=H.wireframe===!0,me=n[A.id];me===void 0&&(me={},n[A.id]=me);let fe=q.isInstancedMesh===!0?q.id:0,be=me[fe];be===void 0&&(be={},me[fe]=be);let ce=be[J.id];ce===void 0&&(ce={},be[J.id]=ce);let te=ce[$];return te===void 0&&(te=f(c()),ce[$]=te),te}function f(q){let A=[],J=[],H=[];for(let $=0;$<t;$++)A[$]=0,J[$]=0,H[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:J,attributeDivisors:H,object:q,attributes:{},index:null}}function v(q,A,J,H){let $=r.attributes,me=A.attributes,fe=0,be=J.getAttributes();for(let ce in be)if(be[ce].location>=0){let P=$[ce],Xe=me[ce];if(Xe===void 0&&(ce==="instanceMatrix"&&q.instanceMatrix&&(Xe=q.instanceMatrix),ce==="instanceColor"&&q.instanceColor&&(Xe=q.instanceColor)),P===void 0||P.attribute!==Xe||Xe&&P.data!==Xe.data)return!0;fe++}return r.attributesNum!==fe||r.index!==H}function M(q,A,J,H){let $={},me=A.attributes,fe=0,be=J.getAttributes();for(let ce in be)if(be[ce].location>=0){let P=me[ce];P===void 0&&(ce==="instanceMatrix"&&q.instanceMatrix&&(P=q.instanceMatrix),ce==="instanceColor"&&q.instanceColor&&(P=q.instanceColor));let Xe={};Xe.attribute=P,P&&P.data&&(Xe.data=P.data),$[ce]=Xe,fe++}r.attributes=$,r.attributesNum=fe,r.index=H}function L(){let q=r.newAttributes;for(let A=0,J=q.length;A<J;A++)q[A]=0}function S(q){d(q,0)}function d(q,A){let J=r.newAttributes,H=r.enabledAttributes,$=r.attributeDivisors;J[q]=1,H[q]===0&&(i.enableVertexAttribArray(q),H[q]=1),$[q]!==A&&(i.vertexAttribDivisor(q,A),$[q]=A)}function b(){let q=r.newAttributes,A=r.enabledAttributes;for(let J=0,H=A.length;J<H;J++)A[J]!==q[J]&&(i.disableVertexAttribArray(J),A[J]=0)}function E(q,A,J,H,$,me,fe){fe===!0?i.vertexAttribIPointer(q,A,J,$,me):i.vertexAttribPointer(q,A,J,H,$,me)}function y(q,A,J,H){L();let $=H.attributes,me=J.getAttributes(),fe=A.defaultAttributeValues;for(let be in me){let ce=me[be];if(ce.location>=0){let te=$[be];if(te===void 0&&(be==="instanceMatrix"&&q.instanceMatrix&&(te=q.instanceMatrix),be==="instanceColor"&&q.instanceColor&&(te=q.instanceColor)),te!==void 0){let P=te.normalized,Xe=te.itemSize,Ge=e.get(te);if(Ge===void 0)continue;let at=Ge.buffer,ee=Ge.type,_t=Ge.bytesPerElement,_e=ee===i.INT||ee===i.UNSIGNED_INT||te.gpuType===eo;if(te.isInterleavedBufferAttribute){let ge=te.data,qe=ge.stride,ct=te.offset;if(ge.isInstancedInterleavedBuffer){for(let Fe=0;Fe<ce.locationSize;Fe++)d(ce.location+Fe,ge.meshPerAttribute);q.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Fe=0;Fe<ce.locationSize;Fe++)S(ce.location+Fe);i.bindBuffer(i.ARRAY_BUFFER,at);for(let Fe=0;Fe<ce.locationSize;Fe++)E(ce.location+Fe,Xe/ce.locationSize,ee,P,qe*_t,(ct+Xe/ce.locationSize*Fe)*_t,_e)}else{if(te.isInstancedBufferAttribute){for(let ge=0;ge<ce.locationSize;ge++)d(ce.location+ge,te.meshPerAttribute);q.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ge=0;ge<ce.locationSize;ge++)S(ce.location+ge);i.bindBuffer(i.ARRAY_BUFFER,at);for(let ge=0;ge<ce.locationSize;ge++)E(ce.location+ge,Xe/ce.locationSize,ee,P,Xe*_t,Xe/ce.locationSize*ge*_t,_e)}}else if(fe!==void 0){let P=fe[be];if(P!==void 0)switch(P.length){case 2:i.vertexAttrib2fv(ce.location,P);break;case 3:i.vertexAttrib3fv(ce.location,P);break;case 4:i.vertexAttrib4fv(ce.location,P);break;default:i.vertexAttrib1fv(ce.location,P)}}}}b()}function T(){D();for(let q in n){let A=n[q];for(let J in A){let H=A[J];for(let $ in H){let me=H[$];for(let fe in me)m(me[fe].object),delete me[fe];delete H[$]}}delete n[q]}}function w(q){if(n[q.id]===void 0)return;let A=n[q.id];for(let J in A){let H=A[J];for(let $ in H){let me=H[$];for(let fe in me)m(me[fe].object),delete me[fe];delete H[$]}}delete n[q.id]}function N(q){for(let A in n){let J=n[A];for(let H in J){let $=J[H];if($[q.id]===void 0)continue;let me=$[q.id];for(let fe in me)m(me[fe].object),delete me[fe];delete $[q.id]}}}function _(q){for(let A in n){let J=n[A],H=q.isInstancedMesh===!0?q.id:0,$=J[H];if($!==void 0){for(let me in $){let fe=$[me];for(let be in fe)m(fe[be].object),delete fe[be];delete $[me]}delete J[H],Object.keys(J).length===0&&delete n[A]}}}function D(){V(),l=!0,r!==s&&(r=s,h(r.object))}function V(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:V,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:N,initAttributes:L,enableAttribute:S,disableUnusedAttributes:b}}function Im(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function l(c,h,m){m!==0&&(i.drawArraysInstanced(n,c,h,m),t.update(h,n,m))}function a(c,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,m);let f=0;for(let v=0;v<m;v++)f+=h[v];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=l,this.renderMultiDraw=a}function Pm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let N=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(N){return!(N!==$n&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){let _=N===si&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==On&&N!==Jn&&!_&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp",m=c(h);m!==h&&(ft("WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);let g=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let v=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),L=i.getParameter(i.MAX_TEXTURE_SIZE),S=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:l,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:f,maxTextures:v,maxVertexTextures:M,maxTextureSize:L,maxCubemapSize:S,maxAttributes:d,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:y,maxSamples:T,samples:w}}function Lm(i){let e=this,t=null,n=0,s=!1,r=!1,l=new Hn,a=new Mt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(g,f){let v=g.length!==0||f||n!==0||s;return s=f,n=g.length,v},this.beginShadows=function(){r=!0,m(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(g,f){t=m(g,f,0)},this.setState=function(g,f,v){let M=g.clippingPlanes,L=g.clipIntersection,S=g.clipShadows,d=i.get(g);if(!s||M===null||M.length===0||r&&!S)r?m(null):h();else{let b=r?0:n,E=b*4,y=d.clippingState||null;c.value=y,y=m(M,f,E,v);for(let T=0;T!==E;++T)y[T]=t[T];d.clippingState=y,this.numIntersection=L?this.numPlanes:0,this.numPlanes+=b}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function m(g,f,v,M){let L=g!==null?g.length:0,S=null;if(L!==0){if(S=c.value,M!==!0||S===null){let d=v+L*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(S===null||S.length<d)&&(S=new Float32Array(d));for(let E=0,y=v;E!==L;++E,y+=4)l.copy(g[E]).applyMatrix4(b,a),l.normal.toArray(S,y),S[y+3]=l.constant}c.value=S,c.needsUpdate=!0}return e.numPlanes=L,e.numIntersection=0,S}}var Zs=4,Dm=6,Nm=20,Um=256,Xr=new Gs,ou=new Tt,mc=null,gc=0,xc=0,_c=!1,Fm=new de,us=new de,Wo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:l=256,position:a=Fm}=r;mc=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),xc=this._renderer.getActiveMipmapLevel(),_c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(mc,gc,xc),this._renderer.xr.enabled=_c,e.scissorTest=!1,Ys(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zi||e.mapping===cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mc=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),xc=this._renderer.getActiveMipmapLevel(),_c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:si,format:$n,colorSpace:ur,depthBuffer:!1},s=lu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lu(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Om(r)),this._blurMaterial=km(r,e,t),this._ggxMaterial=Bm(r,e,t)}return s}_compileMaterial(e){let t=new Rn(new Wn,e);this._renderer.compile(t,Xr)}_sceneToCubeUV(e,t,n,s,r){let c=new An(90,1,t,n),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,f=g.autoClear,v=g.toneMapping;g.getClearColor(ou),g.toneMapping=ni,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(s),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Rn(new ks,new br({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1})));let L=this._backgroundBox,S=L.material,d=!1,b=e.background;b?b.isColor&&(S.color.copy(b),e.background=null,d=!0):(S.color.copy(ou),d=!0);for(let E=0;E<6;E++){let y=E%3;y===0?(c.up.set(0,h[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+m[E],r.y,r.z)):y===1?(c.up.set(0,0,h[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+m[E],r.z)):(c.up.set(0,h[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+m[E]));let T=this._cubeSize;Ys(s,y*T,E>2?T:0,T,T),g.setRenderTarget(s),d&&g.render(L,c),g.render(e,c)}g.toneMapping=v,g.autoClear=f,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Zi||e.mapping===cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cu());let r=s?this._cubemapMaterial:this._equirectMaterial,l=this._lodMeshes[0];l.material=r;let a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Ys(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(l,Xr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,l=this._ggxMaterial,a=this._lodMeshes[n];a.material=l;let c=l.uniforms,h=n/(this._lodMeshes.length-1),m=t/(this._lodMeshes.length-1),g=Math.sqrt(h*h-m*m),f=h*1.25,v=g*f,{_lodMax:M}=this,L=this._sizeLods[n],S=3*L*(n>M-Zs?n-M+Zs:0),d=4*(this._cubeSize-L);c.envMap.value=e.texture,c.roughness.value=v,c.mipInt.value=M-t,Ys(r,S,d,3*L,2*L),s.setRenderTarget(r),s.render(a,Xr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=M-n,Ys(e,S,d,3*L,2*L),s.setRenderTarget(e),s.render(a,Xr)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,l=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,l),this._blurPass(r,e,n,n,l)}_blurPass(e,t,n,s,r){let l=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let h=a.uniforms;h.envMap.value=e.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-n;let m=this._sizeLods[s],g=3*m*(s>this._lodMax-Zs?s-this._lodMax+Zs:0),f=4*(this._cubeSize-m);Ys(t,g,f,3*m,2*m),l.setRenderTarget(t),l.render(c,Xr)}};function Om(i){let e=[],t=[],n=i,s=i-Zs+1+Dm;for(let r=0;r<s;r++){let l=Math.pow(2,n);e.push(l);let a=1/(l-2),c=-a,h=1+a,m=[c,c,h,c,h,h,c,c,h,h,c,h],g=6,f=6,v=3,M=new Float32Array(v*f*g),L=new Float32Array(v*f*g);for(let d=0;d<g;d++){let b=d%3*2/3-1,E=d>2?0:-1,y=[b,E,0,b+2/3,E,0,b+2/3,E+1,0,b,E,0,b+2/3,E+1,0,b,E+1,0];M.set(y,v*f*d);for(let T=0;T<f;T++){let w=m[T*2]*2-1,N=m[T*2+1]*2-1;d===0?us.set(1,N,w):d===1?us.set(-w,1,-N):d===2?us.set(-w,N,1):d===3?us.set(-1,N,-w):d===4?us.set(-w,-1,N):us.set(w,N,-1),us.toArray(L,(d*f+T)*v)}}let S=new Wn;S.setAttribute("position",new Dn(M,v)),S.setAttribute("outputDirection",new Dn(L,v)),t.push(new Rn(S,null)),n>Zs&&n--}return{lodMeshes:t,sizeLods:e}}function lu(i,e,t){let n=new Fn(i,e,t);return n.texture.mapping=Fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ys(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Bm(i,e,t){return new Xn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Um,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Yo(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function km(i,e,t){return new Xn({name:"SphericalGaussianBlur",defines:{SAMPLES:Nm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Yo(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function cu(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yo(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function hu(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Yo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Xo=class extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Tr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ks(5,5,5),r=new Xn({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ln,blending:mi});r.uniforms.tEquirect.value=t;let l=new Rn(s,r),a=t.minFilter;return t.minFilter===gi&&(t.minFilter=gn),new Za(1,10,this).update(e,l),t.minFilter=a,l.geometry.dispose(),l.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,s);e.setRenderTarget(r)}};function zm(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,v=!1){return f==null?null:v?l(f):r(f)}function r(f){if(f&&f.isTexture){let v=f.mapping;if(v===Ka||v===ja)if(e.has(f)){let M=e.get(f).texture;return a(M,f.mapping)}else{let M=f.image;if(M&&M.height>0){let L=new Xo(M.height);return L.fromEquirectangularTexture(i,f),e.set(f,L),f.addEventListener("dispose",h),a(L.texture,f.mapping)}else return null}}return f}function l(f){if(f&&f.isTexture){let v=f.mapping,M=v===Ka||v===ja,L=v===Zi||v===cs;if(M||L){let S=t.get(f),d=S!==void 0?S.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return n===null&&(n=new Wo(i)),S=M?n.fromEquirectangular(f,S):n.fromCubemap(f,S),S.texture.pmremVersion=f.pmremVersion,t.set(f,S),S.texture;if(S!==void 0)return S.texture;{let b=f.image;return M&&b&&b.height>0||L&&b&&c(b)?(n===null&&(n=new Wo(i)),S=M?n.fromEquirectangular(f):n.fromCubemap(f),S.texture.pmremVersion=f.pmremVersion,t.set(f,S),f.addEventListener("dispose",m),S.texture):null}}}return f}function a(f,v){return v===Ka?f.mapping=Zi:v===ja&&(f.mapping=cs),f}function c(f){let v=0,M=6;for(let L=0;L<M;L++)f[L]!==void 0&&v++;return v===M}function h(f){let v=f.target;v.removeEventListener("dispose",h);let M=e.get(v);M!==void 0&&(e.delete(v),M.dispose())}function m(f){let v=f.target;v.removeEventListener("dispose",m);let M=t.get(v);M!==void 0&&(t.delete(v),M.dispose())}function g(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:g}}function Vm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ss("WebGLRenderer: "+n+" extension not supported."),s}}}function Gm(i,e,t,n){let s={},r=new WeakMap;function l(g){let f=g.target;f.index!==null&&e.remove(f.index);for(let M in f.attributes)e.remove(f.attributes[M]);f.removeEventListener("dispose",l),delete s[f.id];let v=r.get(f);v&&(e.remove(v),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(g,f){return s[f.id]===!0||(f.addEventListener("dispose",l),s[f.id]=!0,t.memory.geometries++),f}function c(g){let f=g.attributes;for(let v in f)e.update(f[v],i.ARRAY_BUFFER)}function h(g){let f=[],v=g.index,M=g.attributes.position,L=0;if(M===void 0)return;if(v!==null){let b=v.array;L=v.version;for(let E=0,y=b.length;E<y;E+=3){let T=b[E+0],w=b[E+1],N=b[E+2];f.push(T,w,w,N,N,T)}}else{let b=M.array;L=M.version;for(let E=0,y=b.length/3-1;E<y;E+=3){let T=E+0,w=E+1,N=E+2;f.push(T,w,w,N,N,T)}}let S=new(M.count>=65535?_r:xr)(f,1);S.version=L;let d=r.get(g);d&&e.remove(d),r.set(g,S)}function m(g){let f=r.get(g);if(f){let v=g.index;v!==null&&f.version<v.version&&h(g)}else h(g);return r.get(g)}return{get:a,update:c,getWireframeAttribute:m}}function Hm(i,e,t){let n;function s(g){n=g}let r,l;function a(g){r=g.type,l=g.bytesPerElement}function c(g,f){i.drawElements(n,f,r,g*l),t.update(f,n,1)}function h(g,f,v){v!==0&&(i.drawElementsInstanced(n,f,r,g*l,v),t.update(f,n,v))}function m(g,f,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,g,0,v);let L=0;for(let S=0;S<v;S++)L+=f[S];t.update(L,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=h,this.renderMultiDraw=m}function Wm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,l,a){switch(t.calls++,l){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:dt("WebGLInfo: Unknown draw mode:",l);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Xm(i,e,t){let n=new WeakMap,s=new on;function r(l,a,c){let h=l.morphTargetInfluences,m=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,g=m!==void 0?m.length:0,f=n.get(a);if(f===void 0||f.count!==g){let D=function(){N.dispose(),n.delete(a),a.removeEventListener("dispose",D)};f!==void 0&&f.texture.dispose();let v=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,L=a.morphAttributes.color!==void 0,S=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],E=0;v===!0&&(E=1),M===!0&&(E=2),L===!0&&(E=3);let y=a.attributes.position.count*E,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let w=new Float32Array(y*T*4*g),N=new rs(w,y,T,g);N.type=Jn,N.needsUpdate=!0;let _=E*4;for(let V=0;V<g;V++){let q=S[V],A=d[V],J=b[V],H=y*T*4*V;for(let $=0;$<q.count;$++){let me=$*_;v===!0&&(s.fromBufferAttribute(q,$),w[H+me+0]=s.x,w[H+me+1]=s.y,w[H+me+2]=s.z,w[H+me+3]=0),M===!0&&(s.fromBufferAttribute(A,$),w[H+me+4]=s.x,w[H+me+5]=s.y,w[H+me+6]=s.z,w[H+me+7]=0),L===!0&&(s.fromBufferAttribute(J,$),w[H+me+8]=s.x,w[H+me+9]=s.y,w[H+me+10]=s.z,w[H+me+11]=J.itemSize===4?s.w:1)}}f={count:g,texture:N,size:new Rt(y,T)},n.set(a,f),a.addEventListener("dispose",D)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",l.morphTexture,t);else{let v=0;for(let L=0;L<h.length;L++)v+=h[L];let M=a.morphTargetsRelative?1:1-v;c.getUniforms().setValue(i,"morphTargetBaseInfluence",M),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function qm(i,e,t,n,s){let r=new WeakMap;function l(h){let m=s.render.frame,g=h.geometry,f=e.get(h,g);if(r.get(f)!==m&&(e.update(f),r.set(f,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),r.get(h)!==m&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,m))),h.isSkinnedMesh){let v=h.skeleton;r.get(v)!==m&&(v.update(),r.set(v,m))}return f}function a(){r=new WeakMap}function c(h){let m=h.target;m.removeEventListener("dispose",c),n.releaseStatesOfObject(m),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:l,dispose:a}}var Ym={[Xl]:"LINEAR_TONE_MAPPING",[ql]:"REINHARD_TONE_MAPPING",[Yl]:"CINEON_TONE_MAPPING",[Ur]:"ACES_FILMIC_TONE_MAPPING",[Jl]:"AGX_TONE_MAPPING",[$l]:"NEUTRAL_TONE_MAPPING",[Zl]:"CUSTOM_TONE_MAPPING"};function Zm(i,e,t,n,s,r){let l=new Fn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,h=new Wn;h.setAttribute("position",new Nn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Nn([0,2,0,0,2,0],2));let m=new zs({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new Rn(h,m),f=new Gs(-1,1,1,-1,0,1),v=null,M=null,L=!1,S,d=null,b=[],E=!1;this.setSize=function(y,T){l.setSize(y,T),a!==null&&a.setSize(y,T),c!==null&&c.setSize(y,T);for(let w=0;w<b.length;w++){let N=b[w];N.setSize&&N.setSize(y,T)}},this.setEffects=function(y){b=y,E=b.length>0&&b[0].isRenderPass===!0;let T=l.width,w=l.height;b.length>0&&a===null&&(a=new Fn(T,w,{type:si,depthBuffer:!1,stencilBuffer:!1}),c=new Fn(T,w,{type:si,depthBuffer:!1,stencilBuffer:!1}));for(let N=0;N<b.length;N++){let _=b[N];_.setSize&&_.setSize(T,w)}},this.begin=function(y,T){if(L||y.toneMapping===ni&&b.length===0)return!1;if(d=T,T!==null){let w=T.width,N=T.height;(l.width!==w||l.height!==N)&&this.setSize(w,N)}return E===!1&&y.setRenderTarget(l),S=y.toneMapping,y.toneMapping=ni,!0},this.hasRenderPass=function(){return E},this.end=function(y,T){y.toneMapping=S,L=!0;let w=l,N=a;for(let _=0;_<b.length;_++){let D=b[_];D.enabled!==!1&&(D.render(y,N,w,T),D.needsSwap!==!1&&(w=N,N=N===a?c:a))}if(v!==y.outputColorSpace||M!==y.toneMapping){v=y.outputColorSpace,M=y.toneMapping,m.defines={},Pt.getTransfer(v)===Xt&&(m.defines.SRGB_TRANSFER="");let _=Ym[M];_&&(m.defines[_]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(d),y.render(g,f),d=null,L=!1},this.isCompositing=function(){return L},this.dispose=function(){l.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),h.dispose(),m.dispose()}}var Iu=new Un,Mc=new Hi(1,1),Pu=new rs,Lu=new Na,Du=new Tr,uu=[],du=[],fu=new Float32Array(16),pu=new Float32Array(9),mu=new Float32Array(4);function $s(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=uu[s];if(r===void 0&&(r=new Float32Array(s),uu[s]=r),e!==0){n.toArray(r,0);for(let l=1,a=0;l!==e;++l)a+=t,i[l].toArray(r,a)}return r}function xn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function _n(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Zo(i,e){let t=du[e];t===void 0&&(t=new Int32Array(e),du[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Jm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function $m(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;i.uniform2fv(this.addr,e),_n(t,e)}}function Km(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xn(t,e))return;i.uniform3fv(this.addr,e),_n(t,e)}}function jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;i.uniform4fv(this.addr,e),_n(t,e)}}function Qm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),_n(t,e)}else{if(xn(t,n))return;mu.set(n),i.uniformMatrix2fv(this.addr,!1,mu),_n(t,n)}}function e0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),_n(t,e)}else{if(xn(t,n))return;pu.set(n),i.uniformMatrix3fv(this.addr,!1,pu),_n(t,n)}}function t0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),_n(t,e)}else{if(xn(t,n))return;fu.set(n),i.uniformMatrix4fv(this.addr,!1,fu),_n(t,n)}}function n0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function i0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;i.uniform2iv(this.addr,e),_n(t,e)}}function s0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;i.uniform3iv(this.addr,e),_n(t,e)}}function r0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;i.uniform4iv(this.addr,e),_n(t,e)}}function a0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function o0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;i.uniform2uiv(this.addr,e),_n(t,e)}}function l0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;i.uniform3uiv(this.addr,e),_n(t,e)}}function c0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;i.uniform4uiv(this.addr,e),_n(t,e)}}function h0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Mc.compareFunction=t.isReversedDepthBuffer()?zo:ko,r=Mc):r=Iu,t.setTexture2D(e||r,s)}function u0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Lu,s)}function d0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Du,s)}function f0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Pu,s)}function p0(i){switch(i){case 5126:return Jm;case 35664:return $m;case 35665:return Km;case 35666:return jm;case 35674:return Qm;case 35675:return e0;case 35676:return t0;case 5124:case 35670:return n0;case 35667:case 35671:return i0;case 35668:case 35672:return s0;case 35669:case 35673:return r0;case 5125:return a0;case 36294:return o0;case 36295:return l0;case 36296:return c0;case 35678:case 36198:case 36298:case 36306:case 35682:return h0;case 35679:case 36299:case 36307:return u0;case 35680:case 36300:case 36308:case 36293:return d0;case 36289:case 36303:case 36311:case 36292:return f0}}function m0(i,e){i.uniform1fv(this.addr,e)}function g0(i,e){let t=$s(e,this.size,2);i.uniform2fv(this.addr,t)}function x0(i,e){let t=$s(e,this.size,3);i.uniform3fv(this.addr,t)}function _0(i,e){let t=$s(e,this.size,4);i.uniform4fv(this.addr,t)}function y0(i,e){let t=$s(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function v0(i,e){let t=$s(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function M0(i,e){let t=$s(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function b0(i,e){i.uniform1iv(this.addr,e)}function S0(i,e){i.uniform2iv(this.addr,e)}function w0(i,e){i.uniform3iv(this.addr,e)}function T0(i,e){i.uniform4iv(this.addr,e)}function E0(i,e){i.uniform1uiv(this.addr,e)}function A0(i,e){i.uniform2uiv(this.addr,e)}function C0(i,e){i.uniform3uiv(this.addr,e)}function R0(i,e){i.uniform4uiv(this.addr,e)}function I0(i,e,t){let n=this.cache,s=e.length,r=Zo(t,s);xn(n,r)||(i.uniform1iv(this.addr,r),_n(n,r));let l;this.type===i.SAMPLER_2D_SHADOW?l=Mc:l=Iu;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||l,r[a])}function P0(i,e,t){let n=this.cache,s=e.length,r=Zo(t,s);xn(n,r)||(i.uniform1iv(this.addr,r),_n(n,r));for(let l=0;l!==s;++l)t.setTexture3D(e[l]||Lu,r[l])}function L0(i,e,t){let n=this.cache,s=e.length,r=Zo(t,s);xn(n,r)||(i.uniform1iv(this.addr,r),_n(n,r));for(let l=0;l!==s;++l)t.setTextureCube(e[l]||Du,r[l])}function D0(i,e,t){let n=this.cache,s=e.length,r=Zo(t,s);xn(n,r)||(i.uniform1iv(this.addr,r),_n(n,r));for(let l=0;l!==s;++l)t.setTexture2DArray(e[l]||Pu,r[l])}function N0(i){switch(i){case 5126:return m0;case 35664:return g0;case 35665:return x0;case 35666:return _0;case 35674:return y0;case 35675:return v0;case 35676:return M0;case 5124:case 35670:return b0;case 35667:case 35671:return S0;case 35668:case 35672:return w0;case 35669:case 35673:return T0;case 5125:return E0;case 36294:return A0;case 36295:return C0;case 36296:return R0;case 35678:case 36198:case 36298:case 36306:case 35682:return I0;case 35679:case 36299:case 36307:return P0;case 35680:case 36300:case 36308:case 36293:return L0;case 36289:case 36303:case 36311:case 36292:return D0}}var bc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=p0(t.type)}},Sc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=N0(t.type)}},wc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,l=s.length;r!==l;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},yc=/(\w+)(\])?(\[|\.)?/g;function gu(i,e){i.seq.push(e),i.map[e.id]=e}function U0(i,e,t){let n=i.name,s=n.length;for(yc.lastIndex=0;;){let r=yc.exec(n),l=yc.lastIndex,a=r[1],c=r[2]==="]",h=r[3];if(c&&(a=a|0),h===void 0||h==="["&&l+2===s){gu(t,h===void 0?new bc(a,i,e):new Sc(a,i,e));break}else{let g=t.map[a];g===void 0&&(g=new wc(a),gu(t,g)),t=g}}}var Js=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let l=0;l<n;++l){let a=e.getActiveUniform(t,l),c=e.getUniformLocation(t,a.name);U0(a,c,this)}let s=[],r=[];for(let l of this.seq)l.type===e.SAMPLER_2D_SHADOW||l.type===e.SAMPLER_CUBE_SHADOW||l.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(l):r.push(l);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,l=t.length;r!==l;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let l=e[s];l.id in t&&n.push(l)}return n}};function xu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var F0=37297,O0=0;function B0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let l=s;l<r;l++){let a=l+1;n.push(`${a===e?">":" "} ${a}: ${t[l]}`)}return n.join(`
`)}var _u=new Mt;function k0(i){Pt._getMatrix(_u,Pt.workingColorSpace,i);let e=`mat3( ${_u.elements.map(t=>t.toFixed(4))} )`;switch(Pt.getTransfer(i)){case dr:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return ft("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function yu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let l=/ERROR: 0:(\d+)/.exec(r);if(l){let a=parseInt(l[1]);return t.toUpperCase()+`

`+r+`

`+B0(i.getShaderSource(e),a)}else return r}function z0(i,e){let t=k0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var V0={[Xl]:"Linear",[ql]:"Reinhard",[Yl]:"Cineon",[Ur]:"ACESFilmic",[Jl]:"AgX",[$l]:"Neutral",[Zl]:"Custom"};function G0(i,e){let t=V0[e];return t===void 0?(ft("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ho=new de;function H0(){Pt.getLuminanceCoefficients(Ho);let i=Ho.x.toFixed(4),e=Ho.y.toFixed(4),t=Ho.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function W0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}function X0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function q0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),l=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[l]={type:r.type,location:i.getAttribLocation(e,l),locationSize:a}}return t}function Yr(i){return i!==""}function vu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Y0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tc(i){return i.replace(Y0,J0)}var Z0=new Map;function J0(i,e){let t=Et[e];if(t===void 0){let n=Z0.get(e);if(n!==void 0)t=Et[n],ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Tc(t)}var $0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bu(i){return i.replace($0,K0)}function K0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Su(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var j0={[os]:"SHADOWMAP_TYPE_PCF",[Hs]:"SHADOWMAP_TYPE_VSM"};function Q0(i){return j0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var eg={[Zi]:"ENVMAP_TYPE_CUBE",[cs]:"ENVMAP_TYPE_CUBE",[Fr]:"ENVMAP_TYPE_CUBE_UV"};function tg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":eg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var ng={[cs]:"ENVMAP_MODE_REFRACTION"};function ig(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ng[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var sg={[Wl]:"ENVMAP_BLENDING_MULTIPLY",[Vh]:"ENVMAP_BLENDING_MIX",[Gh]:"ENVMAP_BLENDING_ADD"};function rg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":sg[i.combine]||"ENVMAP_BLENDING_NONE"}function ag(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function og(i,e,t,n){let s=i.getContext(),r=t.defines,l=t.vertexShader,a=t.fragmentShader,c=Q0(t),h=tg(t),m=ig(t),g=rg(t),f=ag(t),v=W0(t),M=X0(r),L=s.createProgram(),S,d,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Yr).join(`
`),S.length>0&&(S+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Yr).join(`
`),d.length>0&&(d+=`
`)):(S=[Su(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),d=[Su(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?Et.tonemapping_pars_fragment:"",t.toneMapping!==ni?G0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Et.colorspace_pars_fragment,z0("linearToOutputTexel",t.outputColorSpace),H0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yr).join(`
`)),l=Tc(l),l=vu(l,t),l=Mu(l,t),a=Tc(a),a=vu(a,t),a=Mu(a,t),l=bu(l),a=bu(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,S=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,d=["#define varying in",t.glslVersion===Wr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let E=b+S+l,y=b+d+a,T=xu(s,s.VERTEX_SHADER,E),w=xu(s,s.FRAGMENT_SHADER,y);s.attachShader(L,T),s.attachShader(L,w),t.index0AttributeName!==void 0?s.bindAttribLocation(L,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(L,0,"position"),s.linkProgram(L);function N(q){if(i.debug.checkShaderErrors){let A=s.getProgramInfoLog(L)||"",J=s.getShaderInfoLog(T)||"",H=s.getShaderInfoLog(w)||"",$=A.trim(),me=J.trim(),fe=H.trim(),be=!0,ce=!0;if(s.getProgramParameter(L,s.LINK_STATUS)===!1)if(be=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,L,T,w);else{let te=yu(s,T,"vertex"),P=yu(s,w,"fragment");dt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(L,s.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+$+`
`+te+`
`+P)}else $!==""?ft("WebGLProgram: Program Info Log:",$):(me===""||fe==="")&&(ce=!1);ce&&(q.diagnostics={runnable:be,programLog:$,vertexShader:{log:me,prefix:S},fragmentShader:{log:fe,prefix:d}})}s.deleteShader(T),s.deleteShader(w),_=new Js(s,L),D=q0(s,L)}let _;this.getUniforms=function(){return _===void 0&&N(this),_};let D;this.getAttributes=function(){return D===void 0&&N(this),D};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=s.getProgramParameter(L,F0)),V},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(L),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=O0++,this.cacheKey=e,this.usedTimes=1,this.program=L,this.vertexShader=T,this.fragmentShader=w,this}var lg=0,Ec=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ac(e),t.set(e,n)),n}},Ac=class{constructor(e){this.id=lg++,this.code=e,this.usedTimes=0}};function cg(i){return i===$i||i===Gr||i===Hr}function hg(i,e,t,n,s,r){let l=new Fs,a=new Ec,c=new Set,h=[],m=new Map,g=n.logarithmicDepthBuffer,f=n.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(_){return c.add(_),_===0?"uv":`uv${_}`}function L(_,D,V,q,A,J){let H=q.fog,$=A.geometry,me=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?q.environment:null,fe=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,be=e.get(_.envMap||me,fe),ce=be&&be.mapping===Fr?be.image.height:null,te=v[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&ft("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let P=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Xe=P!==void 0?P.length:0,Ge=0;$.morphAttributes.position!==void 0&&(Ge=1),$.morphAttributes.normal!==void 0&&(Ge=2),$.morphAttributes.color!==void 0&&(Ge=3);let at,ee,_t,_e;if(te){let le=_i[te];at=le.vertexShader,ee=le.fragmentShader}else{at=_.vertexShader,ee=_.fragmentShader;let le=a.getVertexShaderStage(_),ye=a.getFragmentShaderStage(_);a.update(_,le,ye),_t=le.id,_e=ye.id}let ge=i.getRenderTarget(),qe=i.state.buffers.depth.getReversed(),ct=A.isInstancedMesh===!0,Fe=A.isBatchedMesh===!0,Ye=!!_.map,rn=!!_.matcap,pt=!!be,ot=!!_.aoMap,bt=!!_.lightMap,ht=!!_.bumpMap&&_.wireframe===!1,yt=!!_.normalMap,Kt=!!_.displacementMap,zt=!!_.emissiveMap,mt=!!_.metalnessMap,Ot=!!_.roughnessMap,X=_.anisotropy>0,jt=_.clearcoat>0,At=_.dispersion>0,O=_.retroreflectivity>0,p=_.iridescence>0,W=_.sheen>0,z=_.transmission>0,ae=X&&!!_.anisotropyMap,Te=jt&&!!_.clearcoatMap,Se=jt&&!!_.clearcoatNormalMap,he=jt&&!!_.clearcoatRoughnessMap,xe=p&&!!_.iridescenceMap,Re=p&&!!_.iridescenceThicknessMap,ze=W&&!!_.sheenColorMap,De=W&&!!_.sheenRoughnessMap,Oe=!!_.specularMap,Qe=!!_.specularColorMap,it=!!_.specularIntensityMap,lt=z&&!!_.transmissionMap,Z=z&&!!_.thicknessMap,Ne=!!_.gradientMap,ve=!!_.alphaMap,Ie=_.alphaTest>0,Be=!!_.alphaHash,Me=!!_.extensions,nt=ni;_.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(nt=i.toneMapping);let F={shaderID:te,shaderType:_.type,shaderName:_.name,vertexShader:at,fragmentShader:ee,defines:_.defines,customVertexShaderID:_t,customFragmentShaderID:_e,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:Fe,batchingColor:Fe&&A._colorsTexture!==null,instancing:ct,instancingColor:ct&&A.instanceColor!==null,instancingMorph:ct&&A.morphTexture!==null,outputColorSpace:ge===null?i.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Pt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ye,matcap:rn,envMap:pt,envMapMode:pt&&be.mapping,envMapCubeUVHeight:ce,aoMap:ot,lightMap:bt,bumpMap:ht,normalMap:yt,displacementMap:Kt,emissiveMap:zt,normalMapObjectSpace:yt&&_.normalMapType===Xh,normalMapTangentSpace:yt&&_.normalMapType===Bo,packedNormalMap:yt&&_.normalMapType===Bo&&cg(_.normalMap.format),metalnessMap:mt,roughnessMap:Ot,anisotropy:X,anisotropyMap:ae,clearcoat:jt,clearcoatMap:Te,clearcoatNormalMap:Se,clearcoatRoughnessMap:he,dispersion:At,retroreflection:O,iridescence:p,iridescenceMap:xe,iridescenceThicknessMap:Re,sheen:W,sheenColorMap:ze,sheenRoughnessMap:De,specularMap:Oe,specularColorMap:Qe,specularIntensityMap:it,transmission:z,transmissionMap:lt,thicknessMap:Z,gradientMap:Ne,opaque:_.transparent===!1&&_.blending===Ws&&_.alphaToCoverage===!1,alphaMap:ve,alphaTest:Ie,alphaHash:Be,combine:_.combine,mapUv:Ye&&M(_.map.channel),aoMapUv:ot&&M(_.aoMap.channel),lightMapUv:bt&&M(_.lightMap.channel),bumpMapUv:ht&&M(_.bumpMap.channel),normalMapUv:yt&&M(_.normalMap.channel),displacementMapUv:Kt&&M(_.displacementMap.channel),emissiveMapUv:zt&&M(_.emissiveMap.channel),metalnessMapUv:mt&&M(_.metalnessMap.channel),roughnessMapUv:Ot&&M(_.roughnessMap.channel),anisotropyMapUv:ae&&M(_.anisotropyMap.channel),clearcoatMapUv:Te&&M(_.clearcoatMap.channel),clearcoatNormalMapUv:Se&&M(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&M(_.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&M(_.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&M(_.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&M(_.sheenColorMap.channel),sheenRoughnessMapUv:De&&M(_.sheenRoughnessMap.channel),specularMapUv:Oe&&M(_.specularMap.channel),specularColorMapUv:Qe&&M(_.specularColorMap.channel),specularIntensityMapUv:it&&M(_.specularIntensityMap.channel),transmissionMapUv:lt&&M(_.transmissionMap.channel),thicknessMapUv:Z&&M(_.thicknessMap.channel),alphaMapUv:ve&&M(_.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(yt||X),vertexNormals:!!$.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:A.isPoints===!0&&!!$.attributes.uv&&(Ye||ve),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||$.attributes.normal===void 0&&yt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:qe,skinning:A.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Xe,morphTextureStride:Ge,numSunLights:D.sun.length,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numSunLightShadows:D.sunShadowMap.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:J.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:nt,decodeVideoTexture:Ye&&_.map.isVideoTexture===!0&&Pt.getTransfer(_.map.colorSpace)===Xt,decodeVideoTextureEmissive:zt&&_.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(_.emissiveMap.colorSpace)===Xt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Yn,flipSided:_.side===Ln,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Me&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&_.extensions.multiDraw===!0||Fe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return F.vertexUv1s=c.has(1),F.vertexUv2s=c.has(2),F.vertexUv3s=c.has(3),c.clear(),F}function S(_){let D=[];if(_.shaderID?D.push(_.shaderID):(D.push(_.customVertexShaderID),D.push(_.customFragmentShaderID)),_.defines!==void 0)for(let V in _.defines)D.push(V),D.push(_.defines[V]);return _.isRawShaderMaterial===!1&&(d(D,_),b(D,_),D.push(i.outputColorSpace)),D.push(_.customProgramCacheKey),D.join()}function d(_,D){_.push(D.precision),_.push(D.outputColorSpace),_.push(D.envMapMode),_.push(D.envMapCubeUVHeight),_.push(D.mapUv),_.push(D.alphaMapUv),_.push(D.lightMapUv),_.push(D.aoMapUv),_.push(D.bumpMapUv),_.push(D.normalMapUv),_.push(D.displacementMapUv),_.push(D.emissiveMapUv),_.push(D.metalnessMapUv),_.push(D.roughnessMapUv),_.push(D.anisotropyMapUv),_.push(D.clearcoatMapUv),_.push(D.clearcoatNormalMapUv),_.push(D.clearcoatRoughnessMapUv),_.push(D.iridescenceMapUv),_.push(D.iridescenceThicknessMapUv),_.push(D.sheenColorMapUv),_.push(D.sheenRoughnessMapUv),_.push(D.specularMapUv),_.push(D.specularColorMapUv),_.push(D.specularIntensityMapUv),_.push(D.transmissionMapUv),_.push(D.thicknessMapUv),_.push(D.combine),_.push(D.fogExp2),_.push(D.sizeAttenuation),_.push(D.morphTargetsCount),_.push(D.morphAttributeCount),_.push(D.numSunLights),_.push(D.numDirLights),_.push(D.numPointLights),_.push(D.numSpotLights),_.push(D.numSpotLightMaps),_.push(D.numHemiLights),_.push(D.numRectAreaLights),_.push(D.numSunLightShadows),_.push(D.numDirLightShadows),_.push(D.numPointLightShadows),_.push(D.numSpotLightShadows),_.push(D.numSpotLightShadowsWithMaps),_.push(D.numLightProbes),_.push(D.shadowMapType),_.push(D.toneMapping),_.push(D.numClippingPlanes),_.push(D.numClipIntersection),_.push(D.depthPacking)}function b(_,D){l.disableAll(),D.instancing&&l.enable(0),D.instancingColor&&l.enable(1),D.instancingMorph&&l.enable(2),D.matcap&&l.enable(3),D.envMap&&l.enable(4),D.normalMapObjectSpace&&l.enable(5),D.normalMapTangentSpace&&l.enable(6),D.clearcoat&&l.enable(7),D.iridescence&&l.enable(8),D.alphaTest&&l.enable(9),D.vertexColors&&l.enable(10),D.vertexAlphas&&l.enable(11),D.vertexUv1s&&l.enable(12),D.vertexUv2s&&l.enable(13),D.vertexUv3s&&l.enable(14),D.vertexTangents&&l.enable(15),D.anisotropy&&l.enable(16),D.alphaHash&&l.enable(17),D.batching&&l.enable(18),D.dispersion&&l.enable(19),D.retroreflection&&l.enable(24),D.batchingColor&&l.enable(20),D.gradientMap&&l.enable(21),D.packedNormalMap&&l.enable(22),D.vertexNormals&&l.enable(23),_.push(l.mask),l.disableAll(),D.fog&&l.enable(0),D.useFog&&l.enable(1),D.flatShading&&l.enable(2),D.logarithmicDepthBuffer&&l.enable(3),D.reversedDepthBuffer&&l.enable(4),D.skinning&&l.enable(5),D.morphTargets&&l.enable(6),D.morphNormals&&l.enable(7),D.morphColors&&l.enable(8),D.premultipliedAlpha&&l.enable(9),D.shadowMapEnabled&&l.enable(10),D.doubleSided&&l.enable(11),D.flipSided&&l.enable(12),D.useDepthPacking&&l.enable(13),D.dithering&&l.enable(14),D.transmission&&l.enable(15),D.sheen&&l.enable(16),D.opaque&&l.enable(17),D.pointsUvs&&l.enable(18),D.decodeVideoTexture&&l.enable(19),D.decodeVideoTextureEmissive&&l.enable(20),D.alphaToCoverage&&l.enable(21),D.numLightProbeGrids>0&&l.enable(22),D.hasPositionAttribute&&l.enable(23),_.push(l.mask)}function E(_){let D=v[_.type],V;if(D){let q=_i[D];V=su.clone(q.uniforms)}else V=_.uniforms;return V}function y(_,D){let V=m.get(D);return V!==void 0?++V.usedTimes:(V=new og(i,D,_,s),h.push(V),m.set(D,V)),V}function T(_){if(--_.usedTimes===0){let D=h.indexOf(_);h[D]=h[h.length-1],h.pop(),m.delete(_.cacheKey),_.destroy()}}function w(_){a.remove(_)}function N(){a.dispose()}return{getParameters:L,getProgramCacheKey:S,getUniforms:E,acquireProgram:y,releaseProgram:T,releaseShaderCache:w,programs:h,dispose:N}}function ug(){let i=new WeakMap;function e(l){return i.has(l)}function t(l){let a=i.get(l);return a===void 0&&(a={},i.set(l,a)),a}function n(l){i.delete(l)}function s(l,a,c){i.get(l)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function dg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function wu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Tu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function l(f){let v=0;return f.isInstancedMesh&&(v+=2),f.isSkinnedMesh&&(v+=1),v}function a(f,v,M,L,S,d){let b=i[e];return b===void 0?(b={id:f.id,object:f,geometry:v,material:M,materialVariant:l(f),groupOrder:L,renderOrder:f.renderOrder,z:S,group:d},i[e]=b):(b.id=f.id,b.object=f,b.geometry=v,b.material=M,b.materialVariant=l(f),b.groupOrder=L,b.renderOrder=f.renderOrder,b.z=S,b.group=d),e++,b}function c(f,v,M,L,S,d,b){b.reversedDepth===!0&&(S=-S);let E=a(f,v,M,L,S,d);M.transmission>0?n.push(E):M.transparent===!0?s.push(E):t.push(E)}function h(f,v,M,L,S,d){let b=a(f,v,M,L,S,d);M.transmission>0?n.unshift(b):M.transparent===!0?s.unshift(b):t.unshift(b)}function m(f,v){t.length>1&&t.sort(f||dg),n.length>1&&n.sort(v||wu),s.length>1&&s.sort(v||wu)}function g(){for(let f=e,v=i.length;f<v;f++){let M=i[f];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:h,finish:g,sort:m}}function fg(){let i=new WeakMap;function e(n,s){let r=i.get(n),l;return r===void 0?(l=new Tu,i.set(n,[l])):s>=r.length?(l=new Tu,r.push(l)):l=r[s],l}function t(){i=new WeakMap}return{get:e,dispose:t}}function pg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new de,color:new Tt};break;case"SpotLight":t={position:new de,direction:new de,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new de,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new de,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":t={color:new Tt,position:new de,halfWidth:new de,halfHeight:new de};break}return i[e.id]=t,t}}}function mg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var gg=0;function xg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function _g(i){let e=new pg,t=mg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new de);let s=new de,r=new Ft,l=new Ft;function a(h){let m=0,g=0,f=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let v=0,M=0,L=0,S=0,d=0,b=0,E=0,y=0,T=0,w=0,N=0,_=0,D=0,V=0;h.sort(xg);for(let A=0,J=h.length;A<J;A++){let H=h[A],$=H.color,me=H.intensity,fe=H.distance,be=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===$i?be=H.shadow.map.texture:be=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)m+=$.r*me,g+=$.g*me,f+=$.b*me;else if(H.isLightProbe){for(let ce=0;ce<9;ce++)n.probe[ce].addScaledVector(H.sh.coefficients[ce],me);V++}else if(H.isSunLight){let ce=e.get(H);if(ce.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){let te=H.shadow,P=t.get(H);P.shadowIntensity=te.intensity,P.shadowBias=te.bias,P.shadowNormalBias=te.normalBias,P.shadowRadius=te.radius,P.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),n.sunShadow[M]=P,n.sunShadowMap[M]=be;let Xe=te.getViewportCount();for(let Ge=0;Ge<Xe;Ge++)n.sunShadowMatrix[L+Ge]=te.getMatrix(Ge),n.sunShadowCascade[L+Ge]=te._cascadeData[Ge];L+=Xe,M++}n.sun[v]=ce,v++}else if(H.isDirectionalLight){let ce=e.get(H);if(ce.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){let te=H.shadow,P=t.get(H);P.shadowIntensity=te.intensity,P.shadowBias=te.bias,P.shadowNormalBias=te.normalBias,P.shadowRadius=te.radius,P.shadowMapSize=te.mapSize,n.directionalShadow[S]=P,n.directionalShadowMap[S]=be,n.directionalShadowMatrix[S]=H.shadow.matrix,T++}n.directional[S]=ce,S++}else if(H.isSpotLight){let ce=e.get(H);ce.position.setFromMatrixPosition(H.matrixWorld),ce.color.copy($).multiplyScalar(me),ce.distance=fe,ce.coneCos=Math.cos(H.angle),ce.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),ce.decay=H.decay,n.spot[b]=ce;let te=H.shadow;if(H.map&&(n.spotLightMap[_]=H.map,_++,te.updateMatrices(H),H.castShadow&&D++),n.spotLightMatrix[b]=te.matrix,H.castShadow){let P=t.get(H);P.shadowIntensity=te.intensity,P.shadowBias=te.bias,P.shadowNormalBias=te.normalBias,P.shadowRadius=te.radius,P.shadowMapSize=te.mapSize,n.spotShadow[b]=P,n.spotShadowMap[b]=be,N++}b++}else if(H.isRectAreaLight){let ce=e.get(H);ce.color.copy($).multiplyScalar(me),ce.halfWidth.set(H.width*.5,0,0),ce.halfHeight.set(0,H.height*.5,0),n.rectArea[E]=ce,E++}else if(H.isPointLight){let ce=e.get(H);if(ce.color.copy(H.color).multiplyScalar(H.intensity),ce.distance=H.distance,ce.decay=H.decay,H.castShadow){let te=H.shadow,P=t.get(H);P.shadowIntensity=te.intensity,P.shadowBias=te.bias,P.shadowNormalBias=te.normalBias,P.shadowRadius=te.radius,P.shadowMapSize=te.mapSize,P.shadowCameraNear=te.camera.near,P.shadowCameraFar=te.camera.far,n.pointShadow[d]=P,n.pointShadowMap[d]=be,n.pointShadowMatrix[d]=H.shadow.matrix,w++}n.point[d]=ce,d++}else if(H.isHemisphereLight){let ce=e.get(H);ce.skyColor.copy(H.color).multiplyScalar(me),ce.groundColor.copy(H.groundColor).multiplyScalar(me),n.hemi[y]=ce,y++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ze.LTC_FLOAT_1,n.rectAreaLTC2=Ze.LTC_FLOAT_2):(n.rectAreaLTC1=Ze.LTC_HALF_1,n.rectAreaLTC2=Ze.LTC_HALF_2)),n.ambient[0]=m,n.ambient[1]=g,n.ambient[2]=f;let q=n.hash;(q.sunLength!==v||q.directionalLength!==S||q.pointLength!==d||q.spotLength!==b||q.rectAreaLength!==E||q.hemiLength!==y||q.numSunShadows!==M||q.numDirectionalShadows!==T||q.numPointShadows!==w||q.numSpotShadows!==N||q.numSpotMaps!==_||q.numLightProbes!==V)&&(n.sun.length=v,n.directional.length=S,n.spot.length=b,n.rectArea.length=E,n.point.length=d,n.hemi.length=y,n.sunShadow.length=M,n.sunShadowMap.length=M,n.sunShadowMatrix.length=L,n.sunShadowCascade.length=L,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=N,n.spotShadowMap.length=N,n.spotLightMatrix.length=N+_-D,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=V,q.sunLength=v,q.directionalLength=S,q.pointLength=d,q.spotLength=b,q.rectAreaLength=E,q.hemiLength=y,q.numSunShadows=M,q.numDirectionalShadows=T,q.numPointShadows=w,q.numSpotShadows=N,q.numSpotMaps=_,q.numLightProbes=V,n.version=gg++)}function c(h,m){let g=0,f=0,v=0,M=0,L=0,S=0,d=m.matrixWorldInverse;for(let b=0,E=h.length;b<E;b++){let y=h[b];if(y.isSunLight){let T=n.sun[g];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(d),g++}else if(y.isDirectionalLight){let T=n.directional[f];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),f++}else if(y.isSpotLight){let T=n.spot[M];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),M++}else if(y.isRectAreaLight){let T=n.rectArea[L];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),l.identity(),r.copy(y.matrixWorld),r.premultiply(d),l.extractRotation(r),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(l),T.halfHeight.applyMatrix4(l),L++}else if(y.isPointLight){let T=n.point[v];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),v++}else if(y.isHemisphereLight){let T=n.hemi[S];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(d),S++}}}return{setup:a,setupView:c,state:n}}function Eu(i){let e=new _g(i),t=[],n=[],s=[];function r(f){g.camera=f,t.length=0,n.length=0,s.length=0}function l(f){t.push(f)}function a(f){n.push(f)}function c(f){s.push(f)}function h(){e.setup(t)}function m(f){e.setupView(t,f)}let g={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:g,setupLights:h,setupLightsView:m,pushLight:l,pushShadow:a,pushLightProbeGrid:c}}function yg(i){let e=new WeakMap;function t(s,r=0){let l=e.get(s),a;return l===void 0?(a=new Eu(i),e.set(s,[a])):r>=l.length?(a=new Eu(i),l.push(a)):a=l[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var vg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mg=`uniform sampler2D shadow_pass;
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
}`,bg=[new de(1,0,0),new de(-1,0,0),new de(0,1,0),new de(0,-1,0),new de(0,0,1),new de(0,0,-1)],Sg=[new de(0,-1,0),new de(0,-1,0),new de(0,0,1),new de(0,0,-1),new de(0,-1,0),new de(0,-1,0)],Au=new Ft,qr=new de,vc=new de;function wg(i,e,t){let n=new Bs,s=new Rt,r=new Rt,l=new on,a=new Vs,c=new Fa,h={},m=t.maxTextureSize,g={[Yi]:Ln,[Ln]:Yi,[Yn]:Yn},f=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:vg,fragmentShader:Mg}),v=f.clone();v.defines.HORIZONTAL_PASS=1;let M=new Wn;M.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let L=new Rn(M,f),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=os;let d=this.type;this.render=function(w,N,_){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||w.length===0)return;this.type===bh&&(ft("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=os);let D=i.getRenderTarget(),V=i.getActiveCubeFace(),q=i.getActiveMipmapLevel(),A=i.state;A.setBlending(mi),A.buffers.depth.getReversed()===!0?A.buffers.color.setClear(0,0,0,0):A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);let J=d!==this.type;J&&N.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach($=>$.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,$=w.length;H<$;H++){let me=w[H],fe=me.shadow;if(fe===void 0){ft("WebGLShadowMap:",me,"has no shadow.");continue}if(fe.autoUpdate===!1&&fe.needsUpdate===!1)continue;s.copy(fe.mapSize);let be=fe.getFrameExtents();s.multiply(be),r.copy(fe.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(r.x=Math.floor(m/be.x),s.x=r.x*be.x,fe.mapSize.x=r.x),s.y>m&&(r.y=Math.floor(m/be.y),s.y=r.y*be.y,fe.mapSize.y=r.y));let ce=i.state.buffers.depth.getReversed();if(fe.camera._reversedDepth=ce,fe.map===null||J===!0){if(fe.map!==null&&(fe.map.depthTexture!==null&&(fe.map.depthTexture.dispose(),fe.map.depthTexture=null),fe.map.dispose()),this.type===Hs){if(me.isPointLight){ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}fe.map=new Fn(s.x,s.y,{format:$i,type:si,minFilter:gn,magFilter:gn,generateMipmaps:!1}),fe.map.texture.name=me.name+".shadowMap",fe.map.depthTexture=new Hi(s.x,s.y,Jn),fe.map.depthTexture.name=me.name+".shadowMapDepth",fe.map.depthTexture.format=ui,fe.map.depthTexture.compareFunction=null,fe.map.depthTexture.minFilter=bn,fe.map.depthTexture.magFilter=bn}else me.isPointLight?(fe.map=new Xo(s.x),fe.map.depthTexture=new Ua(s.x,ii)):(fe.map=new Fn(s.x,s.y),fe.map.depthTexture=new Hi(s.x,s.y,ii)),fe.map.depthTexture.name=me.name+".shadowMap",fe.map.depthTexture.format=ui,this.type===os?(fe.map.depthTexture.compareFunction=ce?zo:ko,fe.map.depthTexture.minFilter=gn,fe.map.depthTexture.magFilter=gn):(fe.map.depthTexture.compareFunction=null,fe.map.depthTexture.minFilter=bn,fe.map.depthTexture.magFilter=bn);fe.camera.updateProjectionMatrix()}fe.map.isWebGLCubeRenderTarget!==!0&&(fe.map.width!==s.x||fe.map.height!==s.y)&&fe.map.setSize(s.x,s.y);let te=fe.map.isWebGLCubeRenderTarget?6:fe.getViewportCount();me.isPointLight!==!0&&fe.updateMatrices(me,_);for(let P=0;P<te;P++){let Xe=fe.getCamera(P);if(me.isPointLight){let Ge=fe.camera,at=fe.matrix,ee=me.distance||Ge.far;ee!==Ge.far&&(Ge.far=ee,Ge.updateProjectionMatrix()),qr.setFromMatrixPosition(me.matrixWorld),Ge.position.copy(qr),vc.copy(Ge.position),vc.add(bg[P]),Ge.up.copy(Sg[P]),Ge.lookAt(vc),Ge.updateMatrixWorld(),at.makeTranslation(-qr.x,-qr.y,-qr.z),Au.multiplyMatrices(Ge.projectionMatrix,Ge.matrixWorldInverse),fe._frustum.setFromProjectionMatrix(Au,Ge.coordinateSystem,Ge.reversedDepth)}if(fe.map.isWebGLCubeRenderTarget)i.setRenderTarget(fe.map,P),i.clear();else{P===0&&(i.setRenderTarget(fe.map),i.clear());let Ge=fe.getViewport(P);l.set(r.x*Ge.x,r.y*Ge.y,r.x*Ge.z,r.y*Ge.w),A.viewport(l)}n=fe.getFrustum(P),y(N,_,Xe,me,this.type)}fe.isPointLightShadow!==!0&&this.type===Hs&&b(fe,_),fe.needsUpdate=!1}d=this.type,S.needsUpdate=!1,i.setRenderTarget(D,V,q)};function b(w,N){let _=e.update(L);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,v.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,v.needsUpdate=!0),w.mapPass===null?w.mapPass=new Fn(s.x,s.y,{format:$i,type:si}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(N,null,_,f,L,null),v.uniforms.shadow_pass.value=w.mapPass.texture,v.uniforms.resolution.value.set(w.map.width,w.map.height),v.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(N,null,_,v,L,null)}function E(w,N,_,D){let V=null,q=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(q!==void 0)V=q;else if(V=_.isPointLight===!0?c:a,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){let A=V.uuid,J=N.uuid,H=h[A];H===void 0&&(H={},h[A]=H);let $=H[J];$===void 0&&($=V.clone(),H[J]=$,N.addEventListener("dispose",T)),V=$}if(V.visible=N.visible,V.wireframe=N.wireframe,D===Hs?V.side=N.shadowSide!==null?N.shadowSide:N.side:V.side=N.shadowSide!==null?N.shadowSide:g[N.side],V.alphaMap=N.alphaMap,V.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,V.map=N.map,V.clipShadows=N.clipShadows,V.clippingPlanes=N.clippingPlanes,V.clipIntersection=N.clipIntersection,V.displacementMap=N.displacementMap,V.displacementScale=N.displacementScale,V.displacementBias=N.displacementBias,V.wireframeLinewidth=N.wireframeLinewidth,V.linewidth=N.linewidth,_.isPointLight===!0&&V.isMeshDistanceMaterial===!0){let A=i.properties.get(V);A.light=_}return V}function y(w,N,_,D,V){if(w.visible===!1)return;if(w.layers.test(N.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&V===Hs)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);let J=e.update(w),H=w.material;if(Array.isArray(H)){let $=J.groups;for(let me=0,fe=$.length;me<fe;me++){let be=$[me],ce=H[be.materialIndex];if(ce&&ce.visible){let te=E(w,ce,D,V);w.onBeforeShadow(i,w,N,_,J,te,be),i.renderBufferDirect(_,null,J,te,w,be),w.onAfterShadow(i,w,N,_,J,te,be)}}}else if(H.visible){let $=E(w,H,D,V);w.onBeforeShadow(i,w,N,_,J,$,null),i.renderBufferDirect(_,null,J,$,w,null),w.onAfterShadow(i,w,N,_,J,$,null)}}let A=w.children;for(let J=0,H=A.length;J<H;J++)y(A[J],N,_,D,V)}function T(w){w.target.removeEventListener("dispose",T);for(let _ in h){let D=h[_],V=w.target.uuid;V in D&&(D[V].dispose(),delete D[V])}}}function Tg(i,e){function t(){let Z=!1,Ne=new on,ve=null,Ie=new on(0,0,0,0);return{setMask:function(Be){ve!==Be&&!Z&&(i.colorMask(Be,Be,Be,Be),ve=Be)},setLocked:function(Be){Z=Be},setClear:function(Be,Me,nt,F,le){le===!0&&(Be*=F,Me*=F,nt*=F),Ne.set(Be,Me,nt,F),Ie.equals(Ne)===!1&&(i.clearColor(Be,Me,nt,F),Ie.copy(Ne))},reset:function(){Z=!1,ve=null,Ie.set(-1,0,0,0)}}}function n(){let Z=!1,Ne=!1,ve=null,Ie=null,Be=null;return{setReversed:function(Me){if(Ne!==Me){let nt=e.get("EXT_clip_control");Me?nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.ZERO_TO_ONE_EXT):nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.NEGATIVE_ONE_TO_ONE_EXT),Ne=Me;let F=Be;Be=null,this.setClear(F)}},getReversed:function(){return Ne},setTest:function(Me){Me?ge(i.DEPTH_TEST):qe(i.DEPTH_TEST)},setMask:function(Me){ve!==Me&&!Z&&(i.depthMask(Me),ve=Me)},setFunc:function(Me){if(Ne&&(Me=nu[Me]),Ie!==Me){switch(Me){case ba:i.depthFunc(i.NEVER);break;case Sa:i.depthFunc(i.ALWAYS);break;case wa:i.depthFunc(i.LESS);break;case Ps:i.depthFunc(i.LEQUAL);break;case Ta:i.depthFunc(i.EQUAL);break;case Ea:i.depthFunc(i.GEQUAL);break;case Aa:i.depthFunc(i.GREATER);break;case Ca:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ie=Me}},setLocked:function(Me){Z=Me},setClear:function(Me){Be!==Me&&(Be=Me,Ne&&(Me=1-Me),i.clearDepth(Me))},reset:function(){Z=!1,ve=null,Ie=null,Be=null,Ne=!1}}}function s(){let Z=!1,Ne=null,ve=null,Ie=null,Be=null,Me=null,nt=null,F=null,le=null;return{setTest:function(ye){Z||(ye?ge(i.STENCIL_TEST):qe(i.STENCIL_TEST))},setMask:function(ye){Ne!==ye&&!Z&&(i.stencilMask(ye),Ne=ye)},setFunc:function(ye,Ee,C){(ve!==ye||Ie!==Ee||Be!==C)&&(i.stencilFunc(ye,Ee,C),ve=ye,Ie=Ee,Be=C)},setOp:function(ye,Ee,C){(Me!==ye||nt!==Ee||F!==C)&&(i.stencilOp(ye,Ee,C),Me=ye,nt=Ee,F=C)},setLocked:function(ye){Z=ye},setClear:function(ye){le!==ye&&(i.clearStencil(ye),le=ye)},reset:function(){Z=!1,Ne=null,ve=null,Ie=null,Be=null,Me=null,nt=null,F=null,le=null}}}let r=new t,l=new n,a=new s,c=new WeakMap,h=new WeakMap,m={},g={},f={},v=new WeakMap,M=[],L=null,S=!1,d=null,b=null,E=null,y=null,T=null,w=null,N=null,_=new Tt(0,0,0),D=0,V=!1,q=null,A=null,J=null,H=null,$=null,me=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),fe=!1,be=0,ce=i.getParameter(i.VERSION);ce.indexOf("WebGL")!==-1?(be=parseFloat(/^WebGL (\d)/.exec(ce)[1]),fe=be>=1):ce.indexOf("OpenGL ES")!==-1&&(be=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),fe=be>=2);let te=null,P={},Xe=i.getParameter(i.SCISSOR_BOX),Ge=i.getParameter(i.VIEWPORT),at=new on().fromArray(Xe),ee=new on().fromArray(Ge);function _t(Z,Ne,ve,Ie){let Be=new Uint8Array(4),Me=i.createTexture();i.bindTexture(Z,Me),i.texParameteri(Z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let nt=0;nt<ve;nt++)Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?i.texImage3D(Ne,0,i.RGBA,1,1,Ie,0,i.RGBA,i.UNSIGNED_BYTE,Be):i.texImage2D(Ne+nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Be);return Me}let _e={};_e[i.TEXTURE_2D]=_t(i.TEXTURE_2D,i.TEXTURE_2D,1),_e[i.TEXTURE_CUBE_MAP]=_t(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[i.TEXTURE_2D_ARRAY]=_t(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_e[i.TEXTURE_3D]=_t(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),l.setClear(1),a.setClear(0),ge(i.DEPTH_TEST),l.setFunc(Ps),ht(!1),yt(Bl),ge(i.CULL_FACE),ot(mi);function ge(Z){m[Z]!==!0&&(i.enable(Z),m[Z]=!0)}function qe(Z){m[Z]!==!1&&(i.disable(Z),m[Z]=!1)}function ct(Z,Ne){return f[Z]!==Ne?(i.bindFramebuffer(Z,Ne),f[Z]=Ne,Z===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Ne),Z===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Fe(Z,Ne){let ve=M,Ie=!1;if(Z){ve=v.get(Ne),ve===void 0&&(ve=[],v.set(Ne,ve));let Be=Z.textures;if(ve.length!==Be.length||ve[0]!==i.COLOR_ATTACHMENT0){for(let Me=0,nt=Be.length;Me<nt;Me++)ve[Me]=i.COLOR_ATTACHMENT0+Me;ve.length=Be.length,Ie=!0}}else ve[0]!==i.BACK&&(ve[0]=i.BACK,Ie=!0);Ie&&i.drawBuffers(ve)}function Ye(Z){return L!==Z?(i.useProgram(Z),L=Z,!0):!1}let rn={[ls]:i.FUNC_ADD,[wh]:i.FUNC_SUBTRACT,[Th]:i.FUNC_REVERSE_SUBTRACT};rn[Eh]=i.MIN,rn[Ah]=i.MAX;let pt={[Ch]:i.ZERO,[Rh]:i.ONE,[Ih]:i.SRC_COLOR,[Gl]:i.SRC_ALPHA,[Fh]:i.SRC_ALPHA_SATURATE,[Nh]:i.DST_COLOR,[Lh]:i.DST_ALPHA,[Ph]:i.ONE_MINUS_SRC_COLOR,[Hl]:i.ONE_MINUS_SRC_ALPHA,[Uh]:i.ONE_MINUS_DST_COLOR,[Dh]:i.ONE_MINUS_DST_ALPHA,[Oh]:i.CONSTANT_COLOR,[Bh]:i.ONE_MINUS_CONSTANT_COLOR,[kh]:i.CONSTANT_ALPHA,[zh]:i.ONE_MINUS_CONSTANT_ALPHA};function ot(Z,Ne,ve,Ie,Be,Me,nt,F,le,ye){if(Z===mi){S===!0&&(qe(i.BLEND),S=!1);return}if(S===!1&&(ge(i.BLEND),S=!0),Z!==Sh){if(Z!==d||ye!==V){if((b!==ls||T!==ls)&&(i.blendEquation(i.FUNC_ADD),b=ls,T=ls),ye)switch(Z){case Ws:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case kl:i.blendFunc(i.ONE,i.ONE);break;case zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:dt("WebGLState: Invalid blending: ",Z);break}else switch(Z){case Ws:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case kl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case zl:dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vl:dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:dt("WebGLState: Invalid blending: ",Z);break}E=null,y=null,w=null,N=null,_.set(0,0,0),D=0,d=Z,V=ye}return}Be=Be||Ne,Me=Me||ve,nt=nt||Ie,(Ne!==b||Be!==T)&&(i.blendEquationSeparate(rn[Ne],rn[Be]),b=Ne,T=Be),(ve!==E||Ie!==y||Me!==w||nt!==N)&&(i.blendFuncSeparate(pt[ve],pt[Ie],pt[Me],pt[nt]),E=ve,y=Ie,w=Me,N=nt),(F.equals(_)===!1||le!==D)&&(i.blendColor(F.r,F.g,F.b,le),_.copy(F),D=le),d=Z,V=!1}function bt(Z,Ne){Z.side===Yn?qe(i.CULL_FACE):ge(i.CULL_FACE);let ve=Z.side===Ln;Ne&&(ve=!ve),ht(ve),Z.blending===Ws&&Z.transparent===!1?ot(mi):ot(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),l.setFunc(Z.depthFunc),l.setTest(Z.depthTest),l.setMask(Z.depthWrite),r.setMask(Z.colorWrite);let Ie=Z.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(Z.stencilWriteMask),a.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),a.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),zt(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?ge(i.SAMPLE_ALPHA_TO_COVERAGE):qe(i.SAMPLE_ALPHA_TO_COVERAGE)}function ht(Z){q!==Z&&(Z?i.frontFace(i.CW):i.frontFace(i.CCW),q=Z)}function yt(Z){Z!==vh?(ge(i.CULL_FACE),Z!==A&&(Z===Bl?i.cullFace(i.BACK):Z===Mh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):qe(i.CULL_FACE),A=Z}function Kt(Z){Z!==J&&(fe&&i.lineWidth(Z),J=Z)}function zt(Z,Ne,ve){Z?(ge(i.POLYGON_OFFSET_FILL),(H!==Ne||$!==ve)&&(H=Ne,$=ve,l.getReversed()&&(Ne=-Ne),i.polygonOffset(Ne,ve))):qe(i.POLYGON_OFFSET_FILL)}function mt(Z){Z?ge(i.SCISSOR_TEST):qe(i.SCISSOR_TEST)}function Ot(Z){Z===void 0&&(Z=i.TEXTURE0+me-1),te!==Z&&(i.activeTexture(Z),te=Z)}function X(Z,Ne,ve){ve===void 0&&(te===null?ve=i.TEXTURE0+me-1:ve=te);let Ie=P[ve];Ie===void 0&&(Ie={type:void 0,texture:void 0},P[ve]=Ie),(Ie.type!==Z||Ie.texture!==Ne)&&(te!==ve&&(i.activeTexture(ve),te=ve),i.bindTexture(Z,Ne||_e[Z]),Ie.type=Z,Ie.texture=Ne)}function jt(){let Z=P[te];Z!==void 0&&Z.type!==void 0&&(i.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function At(){try{i.compressedTexImage2D(...arguments)}catch(Z){dt("WebGLState:",Z)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(Z){dt("WebGLState:",Z)}}function p(){try{i.texSubImage2D(...arguments)}catch(Z){dt("WebGLState:",Z)}}function W(){try{i.texSubImage3D(...arguments)}catch(Z){dt("WebGLState:",Z)}}function z(){try{i.compressedTexSubImage2D(...arguments)}catch(Z){dt("WebGLState:",Z)}}function ae(){try{i.compressedTexSubImage3D(...arguments)}catch(Z){dt("WebGLState:",Z)}}function Te(){try{i.texStorage2D(...arguments)}catch(Z){dt("WebGLState:",Z)}}function Se(){try{i.texStorage3D(...arguments)}catch(Z){dt("WebGLState:",Z)}}function he(){try{i.texImage2D(...arguments)}catch(Z){dt("WebGLState:",Z)}}function xe(){try{i.texImage3D(...arguments)}catch(Z){dt("WebGLState:",Z)}}function Re(Z){return g[Z]!==void 0?g[Z]:i.getParameter(Z)}function ze(Z,Ne){g[Z]!==Ne&&(i.pixelStorei(Z,Ne),g[Z]=Ne)}function De(Z){at.equals(Z)===!1&&(i.scissor(Z.x,Z.y,Z.z,Z.w),at.copy(Z))}function Oe(Z){ee.equals(Z)===!1&&(i.viewport(Z.x,Z.y,Z.z,Z.w),ee.copy(Z))}function Qe(Z,Ne){let ve=h.get(Ne);ve===void 0&&(ve=new WeakMap,h.set(Ne,ve));let Ie=ve.get(Z);Ie===void 0&&(Ie=i.getUniformBlockIndex(Ne,Z.name),ve.set(Z,Ie))}function it(Z,Ne){let Ie=h.get(Ne).get(Z);c.get(Ne)!==Ie&&(i.uniformBlockBinding(Ne,Ie,Z.__bindingPointIndex),c.set(Ne,Ie))}function lt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),l.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),m={},g={},te=null,P={},f={},v=new WeakMap,M=[],L=null,S=!1,d=null,b=null,E=null,y=null,T=null,w=null,N=null,_=new Tt(0,0,0),D=0,V=!1,q=null,A=null,J=null,H=null,$=null,at.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),l.reset(),a.reset()}return{buffers:{color:r,depth:l,stencil:a},enable:ge,disable:qe,bindFramebuffer:ct,drawBuffers:Fe,useProgram:Ye,setBlending:ot,setMaterial:bt,setFlipSided:ht,setCullFace:yt,setLineWidth:Kt,setPolygonOffset:zt,setScissorTest:mt,activeTexture:Ot,bindTexture:X,unbindTexture:jt,compressedTexImage2D:At,compressedTexImage3D:O,texImage2D:he,texImage3D:xe,pixelStorei:ze,getParameter:Re,updateUBOMapping:Qe,uniformBlockBinding:it,texStorage2D:Te,texStorage3D:Se,texSubImage2D:p,texSubImage3D:W,compressedTexSubImage2D:z,compressedTexSubImage3D:ae,scissor:De,viewport:Oe,reset:lt}}function Eg(i,e,t,n,s,r,l){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Rt,m=new WeakMap,g=new Set,f,v=new WeakMap,M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function L(O,p){return M?new OffscreenCanvas(O,p):fr("canvas")}function S(O,p,W){let z=1,ae=At(O);if((ae.width>W||ae.height>W)&&(z=W/Math.max(ae.width,ae.height)),z<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){let Te=Math.floor(z*ae.width),Se=Math.floor(z*ae.height);f===void 0&&(f=L(Te,Se));let he=p?L(Te,Se):f;return he.width=Te,he.height=Se,he.getContext("2d").drawImage(O,0,0,Te,Se),ft("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+Te+"x"+Se+")."),he}else return"data"in O&&ft("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),O;return O}function d(O){return O.generateMipmaps}function b(O){i.generateMipmap(O)}function E(O){return O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?i.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(O,p,W,z,ae,Te=!1){if(O!==null){if(i[O]!==void 0)return i[O];ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Se;z&&(Se=e.get("EXT_texture_norm16"),Se||ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=p;if(p===i.RED&&(W===i.FLOAT&&(he=i.R32F),W===i.HALF_FLOAT&&(he=i.R16F),W===i.UNSIGNED_BYTE&&(he=i.R8),W===i.UNSIGNED_SHORT&&Se&&(he=Se.R16_EXT),W===i.SHORT&&Se&&(he=Se.R16_SNORM_EXT)),p===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(he=i.R8UI),W===i.UNSIGNED_SHORT&&(he=i.R16UI),W===i.UNSIGNED_INT&&(he=i.R32UI),W===i.BYTE&&(he=i.R8I),W===i.SHORT&&(he=i.R16I),W===i.INT&&(he=i.R32I)),p===i.RG&&(W===i.FLOAT&&(he=i.RG32F),W===i.HALF_FLOAT&&(he=i.RG16F),W===i.UNSIGNED_BYTE&&(he=i.RG8),W===i.UNSIGNED_SHORT&&Se&&(he=Se.RG16_EXT),W===i.SHORT&&Se&&(he=Se.RG16_SNORM_EXT)),p===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(he=i.RG8UI),W===i.UNSIGNED_SHORT&&(he=i.RG16UI),W===i.UNSIGNED_INT&&(he=i.RG32UI),W===i.BYTE&&(he=i.RG8I),W===i.SHORT&&(he=i.RG16I),W===i.INT&&(he=i.RG32I)),p===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(he=i.RGB8UI),W===i.UNSIGNED_SHORT&&(he=i.RGB16UI),W===i.UNSIGNED_INT&&(he=i.RGB32UI),W===i.BYTE&&(he=i.RGB8I),W===i.SHORT&&(he=i.RGB16I),W===i.INT&&(he=i.RGB32I)),p===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(he=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(he=i.RGBA16UI),W===i.UNSIGNED_INT&&(he=i.RGBA32UI),W===i.BYTE&&(he=i.RGBA8I),W===i.SHORT&&(he=i.RGBA16I),W===i.INT&&(he=i.RGBA32I)),p===i.RGB&&(W===i.UNSIGNED_SHORT&&Se&&(he=Se.RGB16_EXT),W===i.SHORT&&Se&&(he=Se.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(he=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(he=i.R11F_G11F_B10F)),p===i.RGBA){let xe=Te?dr:Pt.getTransfer(ae);W===i.FLOAT&&(he=i.RGBA32F),W===i.HALF_FLOAT&&(he=i.RGBA16F),W===i.UNSIGNED_BYTE&&(he=xe===Xt?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&Se&&(he=Se.RGBA16_EXT),W===i.SHORT&&Se&&(he=Se.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(he=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(he=i.RGB5_A1)}return(he===i.R16F||he===i.R32F||he===i.RG16F||he===i.RG32F||he===i.RGBA16F||he===i.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function T(O,p){let W;return O?p===null||p===ii||p===qs?W=i.DEPTH24_STENCIL8:p===Jn?W=i.DEPTH32F_STENCIL8:p===Xs&&(W=i.DEPTH24_STENCIL8,ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):p===null||p===ii||p===qs?W=i.DEPTH_COMPONENT24:p===Jn?W=i.DEPTH_COMPONENT32F:p===Xs&&(W=i.DEPTH_COMPONENT16),W}function w(O,p){return d(O)===!0||O.isFramebufferTexture&&O.minFilter!==bn&&O.minFilter!==gn?Math.log2(Math.max(p.width,p.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?p.mipmaps.length:1}function N(O){let p=O.target;p.removeEventListener("dispose",N),D(p),p.isVideoTexture&&m.delete(p),p.isHTMLTexture&&g.delete(p)}function _(O){let p=O.target;p.removeEventListener("dispose",_),q(p)}function D(O){let p=n.get(O);if(p.__webglInit===void 0)return;let W=O.source,z=v.get(W);if(z){let ae=z[p.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&V(O),Object.keys(z).length===0&&v.delete(W)}n.remove(O)}function V(O){let p=n.get(O);i.deleteTexture(p.__webglTexture);let W=O.source,z=v.get(W);delete z[p.__cacheKey],l.memory.textures--}function q(O){let p=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(p.__webglFramebuffer[z]))for(let ae=0;ae<p.__webglFramebuffer[z].length;ae++)i.deleteFramebuffer(p.__webglFramebuffer[z][ae]);else i.deleteFramebuffer(p.__webglFramebuffer[z]);p.__webglDepthbuffer&&i.deleteRenderbuffer(p.__webglDepthbuffer[z])}else{if(Array.isArray(p.__webglFramebuffer))for(let z=0;z<p.__webglFramebuffer.length;z++)i.deleteFramebuffer(p.__webglFramebuffer[z]);else i.deleteFramebuffer(p.__webglFramebuffer);if(p.__webglDepthbuffer&&i.deleteRenderbuffer(p.__webglDepthbuffer),p.__webglMultisampledFramebuffer&&i.deleteFramebuffer(p.__webglMultisampledFramebuffer),p.__webglColorRenderbuffer)for(let z=0;z<p.__webglColorRenderbuffer.length;z++)p.__webglColorRenderbuffer[z]&&i.deleteRenderbuffer(p.__webglColorRenderbuffer[z]);p.__webglDepthRenderbuffer&&i.deleteRenderbuffer(p.__webglDepthRenderbuffer)}let W=O.textures;for(let z=0,ae=W.length;z<ae;z++){let Te=n.get(W[z]);Te.__webglTexture&&(i.deleteTexture(Te.__webglTexture),l.memory.textures--),n.remove(W[z])}n.remove(O)}let A=0;function J(){A=0}function H(){return A}function $(O){A=O}function me(){let O=A;return O>=s.maxTextures&&ft("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+s.maxTextures),A+=1,O}function fe(O){let p=[];return p.push(O.wrapS),p.push(O.wrapT),p.push(O.wrapR||0),p.push(O.magFilter),p.push(O.minFilter),p.push(O.anisotropy),p.push(O.internalFormat),p.push(O.format),p.push(O.type),p.push(O.generateMipmaps),p.push(O.premultiplyAlpha),p.push(O.flipY),p.push(O.unpackAlignment),p.push(O.colorSpace),p.join()}function be(O,p){let W=n.get(O);if(O.isVideoTexture&&X(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&W.__version!==O.version){let z=O.image;if(z===null)ft("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)ft("WebGLRenderer: Texture marked for update but image is incomplete");else{qe(W,O,p);return}}else O.isExternalTexture&&(W.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+p)}function ce(O,p){let W=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&W.__version!==O.version){qe(W,O,p);return}else O.isExternalTexture&&(W.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+p)}function te(O,p){let W=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&W.__version!==O.version){qe(W,O,p);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+p)}function P(O,p){let W=n.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&W.__version!==O.version){ct(W,O,p);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+p)}let Xe={[Ls]:i.REPEAT,[hi]:i.CLAMP_TO_EDGE,[Ra]:i.MIRRORED_REPEAT},Ge={[bn]:i.NEAREST,[Hh]:i.NEAREST_MIPMAP_NEAREST,[Or]:i.NEAREST_MIPMAP_LINEAR,[gn]:i.LINEAR,[Qa]:i.LINEAR_MIPMAP_NEAREST,[gi]:i.LINEAR_MIPMAP_LINEAR},at={[Yh]:i.NEVER,[jh]:i.ALWAYS,[Zh]:i.LESS,[ko]:i.LEQUAL,[Jh]:i.EQUAL,[zo]:i.GEQUAL,[$h]:i.GREATER,[Kh]:i.NOTEQUAL};function ee(O,p){if(p.type===Jn&&e.has("OES_texture_float_linear")===!1&&(p.magFilter===gn||p.magFilter===Qa||p.magFilter===Or||p.magFilter===gi||p.minFilter===gn||p.minFilter===Qa||p.minFilter===Or||p.minFilter===gi)&&ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,Xe[p.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,Xe[p.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,Xe[p.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,Ge[p.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,Ge[p.minFilter]),p.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,at[p.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(p.magFilter===bn||p.minFilter!==Or&&p.minFilter!==gi||p.type===Jn&&e.has("OES_texture_float_linear")===!1)return;if(p.anisotropy>1||n.get(p).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(O,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(p.anisotropy,s.getMaxAnisotropy())),n.get(p).__currentAnisotropy=p.anisotropy}}}function _t(O,p){let W=!1;O.__webglInit===void 0&&(O.__webglInit=!0,p.addEventListener("dispose",N));let z=p.source,ae=v.get(z);ae===void 0&&(ae={},v.set(z,ae));let Te=fe(p);if(Te!==O.__cacheKey){ae[Te]===void 0&&(ae[Te]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,W=!0),ae[Te].usedTimes++;let Se=ae[O.__cacheKey];Se!==void 0&&(ae[O.__cacheKey].usedTimes--,Se.usedTimes===0&&V(p)),O.__cacheKey=Te,O.__webglTexture=ae[Te].texture}return W}function _e(O,p,W){return Math.floor(Math.floor(O/W)/p)}function ge(O,p,W,z){let Te=O.updateRanges;if(Te.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,p.width,p.height,W,z,p.data);else{Te.sort((ze,De)=>ze.start-De.start);let Se=0;for(let ze=1;ze<Te.length;ze++){let De=Te[Se],Oe=Te[ze],Qe=De.start+De.count,it=_e(Oe.start,p.width,4),lt=_e(De.start,p.width,4);Oe.start<=Qe+1&&it===lt&&_e(Oe.start+Oe.count-1,p.width,4)===it?De.count=Math.max(De.count,Oe.start+Oe.count-De.start):(++Se,Te[Se]=Oe)}Te.length=Se+1;let he=t.getParameter(i.UNPACK_ROW_LENGTH),xe=t.getParameter(i.UNPACK_SKIP_PIXELS),Re=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,p.width);for(let ze=0,De=Te.length;ze<De;ze++){let Oe=Te[ze],Qe=Math.floor(Oe.start/4),it=Math.ceil(Oe.count/4),lt=Qe%p.width,Z=Math.floor(Qe/p.width),Ne=it,ve=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,lt),t.pixelStorei(i.UNPACK_SKIP_ROWS,Z),t.texSubImage2D(i.TEXTURE_2D,0,lt,Z,Ne,ve,W,z,p.data)}O.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,he),t.pixelStorei(i.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Re)}}function qe(O,p,W){let z=i.TEXTURE_2D;(p.isDataArrayTexture||p.isCompressedArrayTexture)&&(z=i.TEXTURE_2D_ARRAY),p.isData3DTexture&&(z=i.TEXTURE_3D);let ae=_t(O,p),Te=p.source;t.bindTexture(z,O.__webglTexture,i.TEXTURE0+W);let Se=n.get(Te);if(Te.version!==Se.__version||ae===!0){if(t.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&p.image instanceof ImageBitmap)===!1){let ve=Pt.getPrimaries(Pt.workingColorSpace),Ie=p.colorSpace===Pi?null:Pt.getPrimaries(p.colorSpace),Be=p.colorSpace===Pi||ve===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,p.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}t.pixelStorei(i.UNPACK_ALIGNMENT,p.unpackAlignment);let xe=S(p.image,!1,s.maxTextureSize);xe=jt(p,xe);let Re=r.convert(p.format,p.colorSpace),ze=r.convert(p.type),De=y(p.internalFormat,Re,ze,p.normalized,p.colorSpace,p.isVideoTexture);ee(z,p);let Oe,Qe=p.mipmaps,it=p.isVideoTexture!==!0,lt=Se.__version===void 0||ae===!0,Z=Te.dataReady,Ne=w(p,xe);if(p.isDepthTexture)De=T(p.format===Ji,p.type),lt&&(it?t.texStorage2D(i.TEXTURE_2D,1,De,xe.width,xe.height):t.texImage2D(i.TEXTURE_2D,0,De,xe.width,xe.height,0,Re,ze,null));else if(p.isDataTexture)if(Qe.length>0){it&&lt&&t.texStorage2D(i.TEXTURE_2D,Ne,De,Qe[0].width,Qe[0].height);for(let ve=0,Ie=Qe.length;ve<Ie;ve++)Oe=Qe[ve],it?Z&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Oe.width,Oe.height,Re,ze,Oe.data):t.texImage2D(i.TEXTURE_2D,ve,De,Oe.width,Oe.height,0,Re,ze,Oe.data);p.generateMipmaps=!1}else it?(lt&&t.texStorage2D(i.TEXTURE_2D,Ne,De,xe.width,xe.height),Z&&ge(p,xe,Re,ze)):t.texImage2D(i.TEXTURE_2D,0,De,xe.width,xe.height,0,Re,ze,xe.data);else if(p.isCompressedTexture)if(p.isCompressedArrayTexture){it&&lt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,De,Qe[0].width,Qe[0].height,xe.depth);for(let ve=0,Ie=Qe.length;ve<Ie;ve++)if(Oe=Qe[ve],p.format!==$n)if(Re!==null)if(it){if(Z)if(p.layerUpdates.size>0){let Be=cc(Oe.width,Oe.height,p.format,p.type);for(let Me of p.layerUpdates){let nt=Oe.data.subarray(Me*Be/Oe.data.BYTES_PER_ELEMENT,(Me+1)*Be/Oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,Me,Oe.width,Oe.height,1,Re,nt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,Oe.width,Oe.height,xe.depth,Re,Oe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ve,De,Oe.width,Oe.height,xe.depth,0,Oe.data,0,0);else ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?Z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,Oe.width,Oe.height,xe.depth,Re,ze,Oe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ve,De,Oe.width,Oe.height,xe.depth,0,Re,ze,Oe.data);p.layerUpdates.size>0&&p.clearLayerUpdates()}else{it&&lt&&t.texStorage2D(i.TEXTURE_2D,Ne,De,Qe[0].width,Qe[0].height);for(let ve=0,Ie=Qe.length;ve<Ie;ve++)Oe=Qe[ve],p.format!==$n?Re!==null?it?Z&&t.compressedTexSubImage2D(i.TEXTURE_2D,ve,0,0,Oe.width,Oe.height,Re,Oe.data):t.compressedTexImage2D(i.TEXTURE_2D,ve,De,Oe.width,Oe.height,0,Oe.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?Z&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Oe.width,Oe.height,Re,ze,Oe.data):t.texImage2D(i.TEXTURE_2D,ve,De,Oe.width,Oe.height,0,Re,ze,Oe.data)}else if(p.isDataArrayTexture)if(it){if(lt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,De,xe.width,xe.height,xe.depth),Z)if(p.layerUpdates.size>0){let ve=cc(xe.width,xe.height,p.format,p.type);for(let Ie of p.layerUpdates){let Be=xe.data.subarray(Ie*ve/xe.data.BYTES_PER_ELEMENT,(Ie+1)*ve/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ie,xe.width,xe.height,1,Re,ze,Be)}p.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Re,ze,xe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,xe.width,xe.height,xe.depth,0,Re,ze,xe.data);else if(p.isData3DTexture)it?(lt&&t.texStorage3D(i.TEXTURE_3D,Ne,De,xe.width,xe.height,xe.depth),Z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Re,ze,xe.data)):t.texImage3D(i.TEXTURE_3D,0,De,xe.width,xe.height,xe.depth,0,Re,ze,xe.data);else if(p.isFramebufferTexture){if(lt)if(it)t.texStorage2D(i.TEXTURE_2D,Ne,De,xe.width,xe.height);else{let ve=xe.width,Ie=xe.height;for(let Be=0;Be<Ne;Be++)t.texImage2D(i.TEXTURE_2D,Be,De,ve,Ie,0,Re,ze,null),ve>>=1,Ie>>=1}}else if(p.isHTMLTexture){if("texElementImage2D"in i){let ve=i.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),xe.parentNode!==ve){ve.appendChild(xe),g.add(p),ve.onpaint=Ie=>{let Be=Ie.changedElements;for(let Me of g)Be.includes(Me.image)&&(Me.needsUpdate=!0)},ve.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,xe);else{let Be=i.RGBA,Me=i.RGBA,nt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Be,Me,nt,xe)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Qe.length>0){if(it&&lt){let ve=At(Qe[0]);t.texStorage2D(i.TEXTURE_2D,Ne,De,ve.width,ve.height)}for(let ve=0,Ie=Qe.length;ve<Ie;ve++)Oe=Qe[ve],it?Z&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Re,ze,Oe):t.texImage2D(i.TEXTURE_2D,ve,De,Re,ze,Oe);p.generateMipmaps=!1}else if(it){if(lt){let ve=At(xe);t.texStorage2D(i.TEXTURE_2D,Ne,De,ve.width,ve.height)}Z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Re,ze,xe)}else t.texImage2D(i.TEXTURE_2D,0,De,Re,ze,xe);d(p)&&b(z),Se.__version=Te.version,p.onUpdate&&p.onUpdate(p)}O.__version=p.version}function ct(O,p,W){if(p.image.length!==6)return;let z=_t(O,p),ae=p.source;t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+W);let Te=n.get(ae);if(ae.version!==Te.__version||z===!0){t.activeTexture(i.TEXTURE0+W);let Se=Pt.getPrimaries(Pt.workingColorSpace),he=p.colorSpace===Pi?null:Pt.getPrimaries(p.colorSpace),xe=p.colorSpace===Pi||Se===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,p.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,p.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let Re=p.isCompressedTexture||p.image[0].isCompressedTexture,ze=p.image[0]&&p.image[0].isDataTexture,De=[];for(let Me=0;Me<6;Me++)!Re&&!ze?De[Me]=S(p.image[Me],!0,s.maxCubemapSize):De[Me]=ze?p.image[Me].image:p.image[Me],De[Me]=jt(p,De[Me]);let Oe=De[0],Qe=r.convert(p.format,p.colorSpace),it=r.convert(p.type),lt=y(p.internalFormat,Qe,it,p.normalized,p.colorSpace),Z=p.isVideoTexture!==!0,Ne=Te.__version===void 0||z===!0,ve=ae.dataReady,Ie=w(p,Oe);ee(i.TEXTURE_CUBE_MAP,p);let Be;if(Re){Z&&Ne&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,lt,Oe.width,Oe.height);for(let Me=0;Me<6;Me++){Be=De[Me].mipmaps;for(let nt=0;nt<Be.length;nt++){let F=Be[nt];p.format!==$n?Qe!==null?Z?ve&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,nt,0,0,F.width,F.height,Qe,F.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,nt,lt,F.width,F.height,0,F.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,nt,0,0,F.width,F.height,Qe,it,F.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,nt,lt,F.width,F.height,0,Qe,it,F.data)}}}else{if(Be=p.mipmaps,Z&&Ne){Be.length>0&&Ie++;let Me=At(De[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,lt,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(ze){Z?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,De[Me].width,De[Me].height,Qe,it,De[Me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,lt,De[Me].width,De[Me].height,0,Qe,it,De[Me].data);for(let nt=0;nt<Be.length;nt++){let le=Be[nt].image[Me].image;Z?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,nt+1,0,0,le.width,le.height,Qe,it,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,nt+1,lt,le.width,le.height,0,Qe,it,le.data)}}else{Z?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Qe,it,De[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,lt,Qe,it,De[Me]);for(let nt=0;nt<Be.length;nt++){let F=Be[nt];Z?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,nt+1,0,0,Qe,it,F.image[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,nt+1,lt,Qe,it,F.image[Me])}}}d(p)&&b(i.TEXTURE_CUBE_MAP),Te.__version=ae.version,p.onUpdate&&p.onUpdate(p)}O.__version=p.version}function Fe(O,p,W,z,ae,Te){let Se=r.convert(W.format,W.colorSpace),he=r.convert(W.type),xe=y(W.internalFormat,Se,he,W.normalized,W.colorSpace),Re=n.get(p),ze=n.get(W);if(ze.__renderTarget=p,!Re.__hasExternalTextures){let De=Math.max(1,p.width>>Te),Oe=Math.max(1,p.height>>Te);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,Te,xe,De,Oe,p.depth,0,Se,he,null):t.texImage2D(ae,Te,xe,De,Oe,0,Se,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,O),Ot(p)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,ae,ze.__webglTexture,0,mt(p)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,z,ae,ze.__webglTexture,Te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ye(O,p,W){if(i.bindRenderbuffer(i.RENDERBUFFER,O),p.depthBuffer){let z=p.depthTexture,ae=z&&z.isDepthTexture?z.type:null,Te=T(p.stencilBuffer,ae),Se=p.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ot(p)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt(p),Te,p.width,p.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt(p),Te,p.width,p.height):i.renderbufferStorage(i.RENDERBUFFER,Te,p.width,p.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,O)}else{let z=p.textures;for(let ae=0;ae<z.length;ae++){let Te=z[ae],Se=r.convert(Te.format,Te.colorSpace),he=r.convert(Te.type),xe=y(Te.internalFormat,Se,he,Te.normalized,Te.colorSpace);Ot(p)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt(p),xe,p.width,p.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt(p),xe,p.width,p.height):i.renderbufferStorage(i.RENDERBUFFER,xe,p.width,p.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function rn(O,p,W){let z=p.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,O),!(p.depthTexture&&p.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ae=n.get(p.depthTexture);if(ae.__renderTarget=p,(!ae.__webglTexture||p.depthTexture.image.width!==p.width||p.depthTexture.image.height!==p.height)&&(p.depthTexture.image.width=p.width,p.depthTexture.image.height=p.height,p.depthTexture.needsUpdate=!0),z){if(ae.__webglInit===void 0&&(ae.__webglInit=!0,p.depthTexture.addEventListener("dispose",N)),ae.__webglTexture===void 0){ae.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture),ee(i.TEXTURE_CUBE_MAP,p.depthTexture);let Re=r.convert(p.depthTexture.format),ze=r.convert(p.depthTexture.type),De;p.depthTexture.format===ui?De=i.DEPTH_COMPONENT24:p.depthTexture.format===Ji&&(De=i.DEPTH24_STENCIL8);for(let Oe=0;Oe<6;Oe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,De,p.width,p.height,0,Re,ze,null)}}else be(p.depthTexture,0);let Te=ae.__webglTexture,Se=mt(p),he=z?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,xe=p.depthTexture.format===Ji?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(p.depthTexture.format===ui)Ot(p)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,he,Te,0,Se):i.framebufferTexture2D(i.FRAMEBUFFER,xe,he,Te,0);else if(p.depthTexture.format===Ji)Ot(p)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,he,Te,0,Se):i.framebufferTexture2D(i.FRAMEBUFFER,xe,he,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pt(O){let p=n.get(O),W=O.isWebGLCubeRenderTarget===!0;if(p.__boundDepthTexture!==O.depthTexture){let z=O.depthTexture;if(p.__depthDisposeCallback&&p.__depthDisposeCallback(),z){let ae=()=>{delete p.__boundDepthTexture,delete p.__depthDisposeCallback,z.removeEventListener("dispose",ae)};z.addEventListener("dispose",ae),p.__depthDisposeCallback=ae}p.__boundDepthTexture=z}if(O.depthTexture&&!p.__autoAllocateDepthBuffer)if(W)for(let z=0;z<6;z++)rn(p.__webglFramebuffer[z],O,z);else{let z=O.texture.mipmaps;z&&z.length>0?rn(p.__webglFramebuffer[0],O,0):rn(p.__webglFramebuffer,O,0)}else if(W){p.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer[z]),p.__webglDepthbuffer[z]===void 0)p.__webglDepthbuffer[z]=i.createRenderbuffer(),Ye(p.__webglDepthbuffer[z],O,!1);else{let ae=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=p.__webglDepthbuffer[z];i.bindRenderbuffer(i.RENDERBUFFER,Te),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,Te)}}else{let z=O.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer),p.__webglDepthbuffer===void 0)p.__webglDepthbuffer=i.createRenderbuffer(),Ye(p.__webglDepthbuffer,O,!1);else{let ae=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=p.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Te),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,Te)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(O,p,W){let z=n.get(O);p!==void 0&&Fe(z.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&pt(O)}function bt(O){let p=O.texture,W=n.get(O),z=n.get(p);O.addEventListener("dispose",_);let ae=O.textures,Te=O.isWebGLCubeRenderTarget===!0,Se=ae.length>1;if(Se||(z.__webglTexture===void 0&&(z.__webglTexture=i.createTexture()),z.__version=p.version,l.memory.textures++),Te){W.__webglFramebuffer=[];for(let he=0;he<6;he++)if(p.mipmaps&&p.mipmaps.length>0){W.__webglFramebuffer[he]=[];for(let xe=0;xe<p.mipmaps.length;xe++)W.__webglFramebuffer[he][xe]=i.createFramebuffer()}else W.__webglFramebuffer[he]=i.createFramebuffer()}else{if(p.mipmaps&&p.mipmaps.length>0){W.__webglFramebuffer=[];for(let he=0;he<p.mipmaps.length;he++)W.__webglFramebuffer[he]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Se)for(let he=0,xe=ae.length;he<xe;he++){let Re=n.get(ae[he]);Re.__webglTexture===void 0&&(Re.__webglTexture=i.createTexture(),l.memory.textures++)}if(O.samples>0&&Ot(O)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let he=0;he<ae.length;he++){let xe=ae[he];W.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[he]);let Re=r.convert(xe.format,xe.colorSpace),ze=r.convert(xe.type),De=y(xe.internalFormat,Re,ze,xe.normalized,xe.colorSpace,O.isXRRenderTarget===!0),Oe=mt(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,De,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,W.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Ye(W.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Te){t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture),ee(i.TEXTURE_CUBE_MAP,p);for(let he=0;he<6;he++)if(p.mipmaps&&p.mipmaps.length>0)for(let xe=0;xe<p.mipmaps.length;xe++)Fe(W.__webglFramebuffer[he][xe],O,p,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,xe);else Fe(W.__webglFramebuffer[he],O,p,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);d(p)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let he=0,xe=ae.length;he<xe;he++){let Re=ae[he],ze=n.get(Re),De=i.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(De=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(De,ze.__webglTexture),ee(De,Re),Fe(W.__webglFramebuffer,O,Re,i.COLOR_ATTACHMENT0+he,De,0),d(Re)&&b(De)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(he=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,z.__webglTexture),ee(he,p),p.mipmaps&&p.mipmaps.length>0)for(let xe=0;xe<p.mipmaps.length;xe++)Fe(W.__webglFramebuffer[xe],O,p,i.COLOR_ATTACHMENT0,he,xe);else Fe(W.__webglFramebuffer,O,p,i.COLOR_ATTACHMENT0,he,0);d(p)&&b(he),t.unbindTexture()}O.depthBuffer&&pt(O)}function ht(O){let p=O.textures;for(let W=0,z=p.length;W<z;W++){let ae=p[W];if(d(ae)){let Te=E(O),Se=n.get(ae).__webglTexture;t.bindTexture(Te,Se),b(Te),t.unbindTexture()}}}let yt=[],Kt=[];function zt(O){if(O.samples>0){if(Ot(O)===!1){let p=O.textures,W=O.width,z=O.height,ae=i.COLOR_BUFFER_BIT,Te=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(O),he=p.length>1;if(he)for(let Re=0;Re<p.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);let xe=O.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Re=0;Re<p.length;Re++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[Re]);let ze=n.get(p[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ze,0)}i.blitFramebuffer(0,0,W,z,0,0,W,z,ae,i.NEAREST),c===!0&&(yt.length=0,Kt.length=0,yt.push(i.COLOR_ATTACHMENT0+Re),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&(yt.push(Te),Kt.push(Te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Kt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,yt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let Re=0;Re<p.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,Se.__webglColorRenderbuffer[Re]);let ze=n.get(p[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&c){let p=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[p])}}}function mt(O){return Math.min(s.maxSamples,O.samples)}function Ot(O){let p=n.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&p.__useRenderToTexture!==!1}function X(O){let p=l.render.frame;m.get(O)!==p&&(m.set(O,p),O.update())}function jt(O,p){let W=O.colorSpace,z=O.format,ae=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||W!==ur&&W!==Pi&&(Pt.getTransfer(W)===Xt?(z!==$n||ae!==On)&&ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):dt("WebGLTextures: Unsupported texture color space:",W)),p}function At(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(h.width=O.naturalWidth||O.width,h.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(h.width=O.displayWidth,h.height=O.displayHeight):(h.width=O.width,h.height=O.height),h}this.allocateTextureUnit=me,this.resetTextureUnits=J,this.getTextureUnits=H,this.setTextureUnits=$,this.setTexture2D=be,this.setTexture2DArray=ce,this.setTexture3D=te,this.setTextureCube=P,this.rebindTextures=ot,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=Ot,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Ag(i,e){function t(n,s=Pi){let r,l=Pt.getTransfer(s);if(n===On)return i.UNSIGNED_BYTE;if(n===to)return i.UNSIGNED_SHORT_4_4_4_4;if(n===no)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ec)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===tc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===jl)return i.BYTE;if(n===Ql)return i.SHORT;if(n===Xs)return i.UNSIGNED_SHORT;if(n===eo)return i.INT;if(n===ii)return i.UNSIGNED_INT;if(n===Jn)return i.FLOAT;if(n===si)return i.HALF_FLOAT;if(n===nc)return i.ALPHA;if(n===ic)return i.RGB;if(n===$n)return i.RGBA;if(n===ui)return i.DEPTH_COMPONENT;if(n===Ji)return i.DEPTH_STENCIL;if(n===io)return i.RED;if(n===so)return i.RED_INTEGER;if(n===$i)return i.RG;if(n===ro)return i.RG_INTEGER;if(n===ao)return i.RGBA_INTEGER;if(n===Br||n===kr||n===zr||n===Vr)if(l===Xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Br)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Br)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oo||n===lo||n===co||n===ho)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===oo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===co)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ho)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uo||n===fo||n===po||n===mo||n===go||n===Gr||n===xo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===uo||n===fo)return l===Xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===po)return l===Xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===mo)return r.COMPRESSED_R11_EAC;if(n===go)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Gr)return r.COMPRESSED_RG11_EAC;if(n===xo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===_o||n===yo||n===vo||n===Mo||n===bo||n===So||n===wo||n===To||n===Eo||n===Ao||n===Co||n===Ro||n===Io||n===Po)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_o)return l===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===yo)return l===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vo)return l===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Mo)return l===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bo)return l===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===So)return l===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wo)return l===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===To)return l===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Eo)return l===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ao)return l===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Co)return l===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ro)return l===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Io)return l===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Po)return l===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Lo||n===Do||n===No)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Lo)return l===Xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Do)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===No)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Uo||n===Fo||n===Hr||n===Oo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Uo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Hr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Cg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rg=`
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

}`,Cc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Er(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Xn({vertexShader:Cg,fragmentShader:Rg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Rn(new Ar(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rc=class extends di{constructor(e,t){super();let n=this,s=null,r=1,l=null,a="local-floor",c=1,h=null,m=null,g=null,f=null,v=null,M=null,L=typeof XRWebGLBinding<"u",S=new Cc,d={},b=t.getContextAttributes(),E=null,y=null,T=[],w=[],N=new Rt,_=null,D=null,V=new An;V.viewport=new on;let q=new An;q.viewport=new on;let A=[V,q],J=new Ja,H=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(_e){let ge=T[_e];return ge===void 0&&(ge=new Os,T[_e]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(_e){let ge=T[_e];return ge===void 0&&(ge=new Os,T[_e]=ge),ge.getGripSpace()},this.getHand=function(_e){let ge=T[_e];return ge===void 0&&(ge=new Os,T[_e]=ge),ge.getHandSpace()};function me(_e){let ge=w.indexOf(_e.inputSource);if(ge===-1)return;let qe=T[ge];qe!==void 0&&(qe.update(_e.inputSource,_e.frame,h||l),qe.dispatchEvent({type:_e.type,data:_e.inputSource}))}function fe(){s.removeEventListener("select",me),s.removeEventListener("selectstart",me),s.removeEventListener("selectend",me),s.removeEventListener("squeeze",me),s.removeEventListener("squeezestart",me),s.removeEventListener("squeezeend",me),s.removeEventListener("end",fe),s.removeEventListener("inputsourceschange",be);for(let _e=0;_e<T.length;_e++){let ge=w[_e];ge!==null&&(w[_e]=null,T[_e].disconnect(ge))}H=null,$=null,S.reset();for(let _e in d)delete d[_e];if(e.setRenderTarget(E),v=null,f=null,g=null,s=null,y=null,_t.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(N.width,N.height,!1),D!==null){let _e=D.camera;_e.fov=D.fov,_e.zoom=D.zoom,_e.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(_e){r=_e,n.isPresenting===!0&&ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(_e){a=_e,n.isPresenting===!0&&ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||l},this.setReferenceSpace=function(_e){h=_e},this.getBaseLayer=function(){return f!==null?f:v},this.getBinding=function(){return g===null&&L&&(g=new XRWebGLBinding(s,t)),g},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(_e){if(s=_e,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",me),s.addEventListener("selectstart",me),s.addEventListener("selectend",me),s.addEventListener("squeeze",me),s.addEventListener("squeezestart",me),s.addEventListener("squeezeend",me),s.addEventListener("end",fe),s.addEventListener("inputsourceschange",be),b.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(N),L&&"createProjectionLayer"in XRWebGLBinding.prototype){let qe=null,ct=null,Fe=null;b.depth&&(Fe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,qe=b.stencil?Ji:ui,ct=b.stencil?qs:ii);let Ye={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:r};g=this.getBinding(),f=g.createProjectionLayer(Ye),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Fn(f.textureWidth,f.textureHeight,{format:$n,type:On,depthTexture:new Hi(f.textureWidth,f.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,qe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let qe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};v=new XRWebGLLayer(s,t,qe),s.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),y=new Fn(v.framebufferWidth,v.framebufferHeight,{format:$n,type:On,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),h=null,l=await s.requestReferenceSpace(a),_t.setContext(s),_t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function be(_e){for(let ge=0;ge<_e.removed.length;ge++){let qe=_e.removed[ge],ct=w.indexOf(qe);ct>=0&&(w[ct]=null,T[ct].disconnect(qe))}for(let ge=0;ge<_e.added.length;ge++){let qe=_e.added[ge],ct=w.indexOf(qe);if(ct===-1){for(let Ye=0;Ye<T.length;Ye++)if(Ye>=w.length){w.push(qe),ct=Ye;break}else if(w[Ye]===null){w[Ye]=qe,ct=Ye;break}if(ct===-1)break}let Fe=T[ct];Fe&&Fe.connect(qe)}}let ce=new de,te=new de;function P(_e,ge,qe){ce.setFromMatrixPosition(ge.matrixWorld),te.setFromMatrixPosition(qe.matrixWorld);let ct=ce.distanceTo(te),Fe=ge.projectionMatrix.elements,Ye=qe.projectionMatrix.elements,rn=Fe[14]/(Fe[10]-1),pt=Fe[14]/(Fe[10]+1),ot=(Fe[9]+1)/Fe[5],bt=(Fe[9]-1)/Fe[5],ht=(Fe[8]-1)/Fe[0],yt=(Ye[8]+1)/Ye[0],Kt=rn*ht,zt=rn*yt,mt=ct/(-ht+yt),Ot=mt*-ht;if(ge.matrixWorld.decompose(_e.position,_e.quaternion,_e.scale),_e.translateX(Ot),_e.translateZ(mt),_e.matrixWorld.compose(_e.position,_e.quaternion,_e.scale),_e.matrixWorldInverse.copy(_e.matrixWorld).invert(),Fe[10]===-1)_e.projectionMatrix.copy(ge.projectionMatrix),_e.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{let X=rn+mt,jt=pt+mt,At=Kt-Ot,O=zt+(ct-Ot),p=ot*pt/jt*X,W=bt*pt/jt*X;_e.projectionMatrix.makePerspective(At,O,p,W,X,jt),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert()}}function Xe(_e,ge){ge===null?_e.matrixWorld.copy(_e.matrix):_e.matrixWorld.multiplyMatrices(ge.matrixWorld,_e.matrix),_e.matrixWorldInverse.copy(_e.matrixWorld).invert()}this.updateCamera=function(_e){if(s===null)return;let ge=_e.near,qe=_e.far;S.texture!==null&&(S.depthNear>0&&(ge=S.depthNear),S.depthFar>0&&(qe=S.depthFar)),J.near=q.near=V.near=ge,J.far=q.far=V.far=qe,(H!==J.near||$!==J.far)&&(s.updateRenderState({depthNear:J.near,depthFar:J.far}),H=J.near,$=J.far),J.layers.mask=_e.layers.mask|6,V.layers.mask=J.layers.mask&-5,q.layers.mask=J.layers.mask&-3;let ct=_e.parent,Fe=J.cameras;Xe(J,ct);for(let Ye=0;Ye<Fe.length;Ye++)Xe(Fe[Ye],ct);Fe.length===2?P(J,V,q):J.projectionMatrix.copy(V.projectionMatrix),D===null&&_e.isPerspectiveCamera&&(D={camera:_e,fov:_e.fov,zoom:_e.zoom}),Ge(_e,J,ct)};function Ge(_e,ge,qe){qe===null?_e.matrix.copy(ge.matrixWorld):(_e.matrix.copy(qe.matrixWorld),_e.matrix.invert(),_e.matrix.multiply(ge.matrixWorld)),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.updateMatrixWorld(!0),_e.projectionMatrix.copy(ge.projectionMatrix),_e.projectionMatrixInverse.copy(ge.projectionMatrixInverse),_e.isPerspectiveCamera&&(_e.fov=Pa*2*Math.atan(1/_e.projectionMatrix.elements[5]),_e.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(f===null&&v===null))return c},this.setFoveation=function(_e){c=_e,f!==null&&(f.fixedFoveation=_e),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=_e)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(J)},this.getCameraTexture=function(_e){return d[_e]};let at=null;function ee(_e,ge){if(m=ge.getViewerPose(h||l),M=ge,m!==null){let qe=m.views;v!==null&&(e.setRenderTargetFramebuffer(y,v.framebuffer),e.setRenderTarget(y));let ct=!1;qe.length!==J.cameras.length&&(J.cameras.length=0,ct=!0);for(let pt=0;pt<qe.length;pt++){let ot=qe[pt],bt=null;if(v!==null)bt=v.getViewport(ot);else{let yt=g.getViewSubImage(f,ot);bt=yt.viewport,pt===0&&(e.setRenderTargetTextures(y,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(y))}let ht=A[pt];ht===void 0&&(ht=new An,ht.layers.enable(pt),ht.viewport=new on,A[pt]=ht),ht.matrix.fromArray(ot.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(ot.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(bt.x,bt.y,bt.width,bt.height),pt===0&&(J.matrix.copy(ht.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),ct===!0&&J.cameras.push(ht)}let Fe=s.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&L){g=n.getBinding();let pt=g.getDepthInformation(qe[0]);pt&&pt.isValid&&pt.texture&&S.init(pt,s.renderState)}if(Fe&&Fe.includes("camera-access")&&L){e.state.unbindTexture(),g=n.getBinding();for(let pt=0;pt<qe.length;pt++){let ot=qe[pt].camera;if(ot){let bt=d[ot];bt||(bt=new Er,d[ot]=bt);let ht=g.getCameraImage(ot);bt.sourceTexture=ht}}}}for(let qe=0;qe<T.length;qe++){let ct=w[qe],Fe=T[qe];ct!==null&&Fe!==void 0&&Fe.update(ct,ge,h||l)}at&&at(_e,ge),ge.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ge}),M=null}let _t=new Cu;_t.setAnimationLoop(ee),this.setAnimationLoop=function(_e){at=_e},this.dispose=function(){}}},Ig=new Ft,Nu=new Mt;Nu.set(-1,0,0,0,1,0,0,0,1);function Pg(i,e){function t(S,d){S.matrixAutoUpdate===!0&&S.updateMatrix(),d.value.copy(S.matrix)}function n(S,d){d.color.getRGB(S.fogColor.value,ac(i)),d.isFog?(S.fogNear.value=d.near,S.fogFar.value=d.far):d.isFogExp2&&(S.fogDensity.value=d.density)}function s(S,d,b,E,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(S,d):d.isMeshLambertMaterial?(r(S,d),d.envMap&&(S.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(S,d),g(S,d)):d.isMeshPhongMaterial?(r(S,d),m(S,d),d.envMap&&(S.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(S,d),f(S,d),d.isMeshPhysicalMaterial&&v(S,d,y)):d.isMeshMatcapMaterial?(r(S,d),M(S,d)):d.isMeshDepthMaterial?r(S,d):d.isMeshDistanceMaterial?(r(S,d),L(S,d)):d.isMeshNormalMaterial?r(S,d):d.isLineBasicMaterial?(l(S,d),d.isLineDashedMaterial&&a(S,d)):d.isPointsMaterial?c(S,d,b,E):d.isSpriteMaterial?h(S,d):d.isShadowMaterial?(S.color.value.copy(d.color),S.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(S,d){S.opacity.value=d.opacity,d.color&&S.diffuse.value.copy(d.color),d.emissive&&S.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(S.map.value=d.map,t(d.map,S.mapTransform)),d.alphaMap&&(S.alphaMap.value=d.alphaMap,t(d.alphaMap,S.alphaMapTransform)),d.bumpMap&&(S.bumpMap.value=d.bumpMap,t(d.bumpMap,S.bumpMapTransform),S.bumpScale.value=d.bumpScale,d.side===Ln&&(S.bumpScale.value*=-1)),d.normalMap&&(S.normalMap.value=d.normalMap,t(d.normalMap,S.normalMapTransform),S.normalScale.value.copy(d.normalScale),d.side===Ln&&S.normalScale.value.negate()),d.displacementMap&&(S.displacementMap.value=d.displacementMap,t(d.displacementMap,S.displacementMapTransform),S.displacementScale.value=d.displacementScale,S.displacementBias.value=d.displacementBias),d.emissiveMap&&(S.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,S.emissiveMapTransform)),d.specularMap&&(S.specularMap.value=d.specularMap,t(d.specularMap,S.specularMapTransform)),d.alphaTest>0&&(S.alphaTest.value=d.alphaTest);let b=e.get(d),E=b.envMap,y=b.envMapRotation;E&&(S.envMap.value=E,S.envMapRotation.value.setFromMatrix4(Ig.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(Nu),S.reflectivity.value=d.reflectivity,S.ior.value=d.ior,S.refractionRatio.value=d.refractionRatio),d.lightMap&&(S.lightMap.value=d.lightMap,S.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,S.lightMapTransform)),d.aoMap&&(S.aoMap.value=d.aoMap,S.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,S.aoMapTransform))}function l(S,d){S.diffuse.value.copy(d.color),S.opacity.value=d.opacity,d.map&&(S.map.value=d.map,t(d.map,S.mapTransform))}function a(S,d){S.dashSize.value=d.dashSize,S.totalSize.value=d.dashSize+d.gapSize,S.scale.value=d.scale}function c(S,d,b,E){S.diffuse.value.copy(d.color),S.opacity.value=d.opacity,S.size.value=d.size*b,S.scale.value=E*.5,d.map&&(S.map.value=d.map,t(d.map,S.uvTransform)),d.alphaMap&&(S.alphaMap.value=d.alphaMap,t(d.alphaMap,S.alphaMapTransform)),d.alphaTest>0&&(S.alphaTest.value=d.alphaTest)}function h(S,d){S.diffuse.value.copy(d.color),S.opacity.value=d.opacity,S.rotation.value=d.rotation,d.map&&(S.map.value=d.map,t(d.map,S.mapTransform)),d.alphaMap&&(S.alphaMap.value=d.alphaMap,t(d.alphaMap,S.alphaMapTransform)),d.alphaTest>0&&(S.alphaTest.value=d.alphaTest)}function m(S,d){S.specular.value.copy(d.specular),S.shininess.value=Math.max(d.shininess,1e-4)}function g(S,d){d.gradientMap&&(S.gradientMap.value=d.gradientMap)}function f(S,d){S.metalness.value=d.metalness,d.metalnessMap&&(S.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,S.metalnessMapTransform)),S.roughness.value=d.roughness,d.roughnessMap&&(S.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,S.roughnessMapTransform)),d.envMap&&(S.envMapIntensity.value=d.envMapIntensity)}function v(S,d,b){S.ior.value=d.ior,d.sheen>0&&(S.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),S.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(S.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,S.sheenColorMapTransform)),d.sheenRoughnessMap&&(S.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,S.sheenRoughnessMapTransform))),d.clearcoat>0&&(S.clearcoat.value=d.clearcoat,S.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(S.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,S.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(S.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ln&&S.clearcoatNormalScale.value.negate())),d.dispersion>0&&(S.dispersion.value=d.dispersion),d.retroreflectivity>0&&(S.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(S.iridescence.value=d.iridescence,S.iridescenceIOR.value=d.iridescenceIOR,S.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(S.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,S.iridescenceMapTransform)),d.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),d.transmission>0&&(S.transmission.value=d.transmission,S.transmissionSamplerMap.value=b.texture,S.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(S.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,S.transmissionMapTransform)),S.thickness.value=d.thickness,d.thicknessMap&&(S.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=d.attenuationDistance,S.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(S.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(S.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=d.specularIntensity,S.specularColor.value.copy(d.specularColor),d.specularColorMap&&(S.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,S.specularColorMapTransform)),d.specularIntensityMap&&(S.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,d){d.matcap&&(S.matcap.value=d.matcap)}function L(S,d){let b=e.get(d).light;S.referencePosition.value.setFromMatrixPosition(b.matrixWorld),S.nearDistance.value=b.shadow.camera.near,S.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Lg(i,e,t,n){let s={},r={},l=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,T){let w=T.program;n.uniformBlockBinding(y,w)}function h(y,T){let w=s[y.id];w===void 0&&(S(y),w=m(y),s[y.id]=w,y.addEventListener("dispose",b));let N=T.program;n.updateUBOMapping(y,N);let _=e.render.frame;r[y.id]!==_&&(f(y),r[y.id]=_)}function m(y){let T=g();y.__bindingPointIndex=T;let w=i.createBuffer(),N=y.__size,_=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,N,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,w),w}function g(){for(let y=0;y<a;y++)if(l.indexOf(y)===-1)return l.push(y),y;return dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let T=s[y.id],w=y.uniforms,N=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let _=0,D=w.length;_<D;_++){let V=w[_];if(Array.isArray(V))for(let q=0,A=V.length;q<A;q++)v(V[q],_,q,N);else v(V,_,0,N)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function v(y,T,w,N){if(L(y,T,w,N)===!0){let _=y.__offset,D=y.value;if(Array.isArray(D)){let V=0;for(let q=0;q<D.length;q++){let A=D[q],J=d(A);M(A,y.__data,V),typeof A!="number"&&typeof A!="boolean"&&!A.isMatrix3&&!ArrayBuffer.isView(A)&&(V+=J.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(D,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,y.__data)}}function M(y,T,w){typeof y=="number"||typeof y=="boolean"?T[0]=y:y.isMatrix3?(T[0]=y.elements[0],T[1]=y.elements[1],T[2]=y.elements[2],T[3]=0,T[4]=y.elements[3],T[5]=y.elements[4],T[6]=y.elements[5],T[7]=0,T[8]=y.elements[6],T[9]=y.elements[7],T[10]=y.elements[8],T[11]=0):ArrayBuffer.isView(y)?T.set(new y.constructor(y.buffer,y.byteOffset,T.length)):y.toArray(T,w)}function L(y,T,w,N){let _=y.value,D=T+"_"+w;if(N[D]===void 0)return typeof _=="number"||typeof _=="boolean"?N[D]=_:ArrayBuffer.isView(_)?N[D]=_.slice():N[D]=_.clone(),!0;{let V=N[D];if(typeof _=="number"||typeof _=="boolean"){if(V!==_)return N[D]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(V.equals(_)===!1)return V.copy(_),!0}}return!1}function S(y){let T=y.uniforms,w=0,N=16;for(let D=0,V=T.length;D<V;D++){let q=Array.isArray(T[D])?T[D]:[T[D]];for(let A=0,J=q.length;A<J;A++){let H=q[A],$=Array.isArray(H.value)?H.value:[H.value];for(let me=0,fe=$.length;me<fe;me++){let be=$[me],ce=d(be),te=w%N,P=te%ce.boundary,Xe=te+P;w+=P,Xe!==0&&N-Xe<ce.storage&&(w+=N-Xe),H.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=w,w+=ce.storage}}}let _=w%N;return _>0&&(w+=N-_),y.__size=w,y.__cache={},this}function d(y){let T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(T.boundary=16,T.storage=y.byteLength):ft("WebGLRenderer: Unsupported uniform value type.",y),T}function b(y){let T=y.target;T.removeEventListener("dispose",b);let w=l.indexOf(T.__bindingPointIndex);l.splice(w,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function E(){for(let y in s)i.deleteBuffer(s[y]);l=[],s={},r={}}return{bind:c,update:h,dispose:E}}var Dg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),xi=null;function Ng(){return xi===null&&(xi=new Sr(Dg,16,16,$i,si),xi.name="DFG_LUT",xi.minFilter=gn,xi.magFilter=gn,xi.wrapS=hi,xi.wrapT=hi,xi.generateMipmaps=!1,xi.needsUpdate=!0),xi}var qo=class{constructor(e={}){let{canvas:t=Qh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:l=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:f=!1,outputBufferType:v=On}=e;this.isWebGLRenderer=!0;let M;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=n.getContextAttributes().alpha}else M=l;let L=v,S=new Set([ao,ro,so]),d=new Set([On,ii,Xs,qs,to,no]),b=new Uint32Array(4),E=new Int32Array(4),y=new de,T=null,w=null,N=[],_=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let V=this,q=!1,A=null,J=null,H=null,$=null;this._outputColorSpace=Sn;let me=0,fe=0,be=null,ce=-1,te=null,P=new on,Xe=new on,Ge=null,at=new Tt(0),ee=0,_t=t.width,_e=t.height,ge=1,qe=null,ct=null,Fe=new on(0,0,_t,_e),Ye=new on(0,0,_t,_e),rn=!1,pt=new Bs,ot=!1,bt=!1,ht=new Ft,yt=new de,Kt=new on,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},mt=!1;function Ot(){return be===null?ge:1}let X=n;function jt(I,K){return t.getContext(I,K)}let At,O,p,W,z,ae,Te,Se,he,xe,Re,ze,De,Oe,Qe,it,lt,Z,Ne,ve,Ie,Be,Me;try{let I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),X===null){let K="webgl2";if(X=jt(K,I),X===null)throw jt(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}nt()}catch(I){throw t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),dt("WebGLRenderer: "+I.message),I}function nt(){At=new Vm(X),At.init(),Ie=new Ag(X,At),O=new Pm(X,At,e,Ie),p=new Tg(X,At),O.reversedDepthBuffer&&f&&p.buffers.depth.setReversed(!0),J=X.createFramebuffer(),H=X.createFramebuffer(),$=X.createFramebuffer(),W=new Wm(X),z=new ug,ae=new Eg(X,At,p,z,O,Ie,W),Te=new zm(V),Se=new Xd(X),Be=new Rm(X,Se),he=new Gm(X,Se,W,Be),xe=new qm(X,he,Se,Be,W),Z=new Xm(X,O,ae),Qe=new Lm(z),Re=new hg(V,Te,At,O,Be,Qe),ze=new Pg(V,z),De=new fg,Oe=new yg(At),lt=new Cm(V,Te,p,xe,M,c),it=new wg(V,xe,O),Me=new Lg(X,W,O,p),Ne=new Im(X,At,W),ve=new Hm(X,At,W),W.programs=Re.programs,V.capabilities=O,V.extensions=At,V.properties=z,V.renderLists=De,V.shadowMap=it,V.state=p,V.info=W}L!==On&&(D=new Zm(L,t.width,t.height,a,s,r));let F=new Rc(V,X);this.xr=F,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let I=At.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=At.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(I){I!==void 0&&(ge=I,this.setSize(_t,_e,!1))},this.getSize=function(I){return I.set(_t,_e)},this.setSize=function(I,K,pe=!0){if(F.isPresenting){ft("WebGLRenderer: Can't change size while VR device is presenting.");return}_t=I,_e=K,t.width=Math.floor(I*ge),t.height=Math.floor(K*ge),pe===!0&&(t.style.width=I+"px",t.style.height=K+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,I,K)},this.getDrawingBufferSize=function(I){return I.set(_t*ge,_e*ge).floor()},this.setDrawingBufferSize=function(I,K,pe){_t=I,_e=K,ge=pe,t.width=Math.floor(I*pe),t.height=Math.floor(K*pe),this.setViewport(0,0,I,K)},this.setEffects=function(I){if(L===On){dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let K=0;K<I.length;K++)if(I[K].isOutputPass===!0){ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(P)},this.getViewport=function(I){return I.copy(Fe)},this.setViewport=function(I,K,pe,se){I.isVector4?Fe.set(I.x,I.y,I.z,I.w):Fe.set(I,K,pe,se),p.viewport(P.copy(Fe).multiplyScalar(ge).round())},this.getScissor=function(I){return I.copy(Ye)},this.setScissor=function(I,K,pe,se){I.isVector4?Ye.set(I.x,I.y,I.z,I.w):Ye.set(I,K,pe,se),p.scissor(Xe.copy(Ye).multiplyScalar(ge).round())},this.getScissorTest=function(){return rn},this.setScissorTest=function(I){p.setScissorTest(rn=I)},this.setOpaqueSort=function(I){qe=I},this.setTransparentSort=function(I){ct=I},this.getClearColor=function(I){return I.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor(...arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha(...arguments)},this.clear=function(I=!0,K=!0,pe=!0){let se=0;if(I){let oe=!1;if(be!==null){let Ve=be.texture.format;oe=S.has(Ve)}if(oe){let Ve=be.texture.type,je=d.has(Ve),ke=lt.getClearColor(),Je=lt.getClearAlpha(),st=ke.r,vt=ke.g,St=ke.b;je?(b[0]=st,b[1]=vt,b[2]=St,b[3]=Je,X.clearBufferuiv(X.COLOR,0,b)):(E[0]=st,E[1]=vt,E[2]=St,E[3]=Je,X.clearBufferiv(X.COLOR,0,E))}else se|=X.COLOR_BUFFER_BIT}K&&(se|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),pe&&(se|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se!==0&&X.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),A=I},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),lt.dispose(),De.dispose(),Oe.dispose(),z.dispose(),Te.dispose(),xe.dispose(),Be.dispose(),Me.dispose(),Re.dispose(),F.dispose(),F.removeEventListener("sessionstart",ie),F.removeEventListener("sessionend",We),gt.stop()};function le(I){I.preventDefault(),pr("WebGLRenderer: Context Lost."),q=!0}function ye(){pr("WebGLRenderer: Context Restored."),q=!1;let I=W.autoReset,K=it.enabled,pe=it.autoUpdate,se=it.needsUpdate,oe=it.type;nt(),W.autoReset=I,it.enabled=K,it.autoUpdate=pe,it.needsUpdate=se,it.type=oe}function Ee(I){dt("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function C(I){let K=I.target;K.removeEventListener("dispose",C),G(K)}function G(I){Y(I),z.remove(I)}function Y(I){let K=z.get(I).programs;K!==void 0&&(K.forEach(function(pe){Re.releaseProgram(pe)}),I.isShaderMaterial&&Re.releaseShaderCache(I))}this.renderBufferDirect=function(I,K,pe,se,oe,Ve){K===null&&(K=zt);let je=oe.isMesh&&oe.matrixWorld.determinantAffine()<0,ke=ds(I,K,pe,se,oe);p.setMaterial(se,je);let Je=pe.index,st=1;if(se.wireframe===!0){if(Je=he.getWireframeAttribute(pe),Je===void 0)return;st=2}let vt=pe.drawRange,St=pe.attributes.position,tt=vt.start*st,Nt=(vt.start+vt.count)*st;Ve!==null&&(tt=Math.max(tt,Ve.start*st),Nt=Math.min(Nt,(Ve.start+Ve.count)*st)),Je!==null?(tt=Math.max(tt,0),Nt=Math.min(Nt,Je.count)):St!=null&&(tt=Math.max(tt,0),Nt=Math.min(Nt,St.count));let ln=Nt-tt;if(ln<0||ln===1/0)return;Be.setup(oe,se,ke,pe,Je);let qt,Yt=Ne;if(Je!==null&&(qt=Se.get(Je),Yt=ve,Yt.setIndex(qt)),oe.isMesh)se.wireframe===!0?(p.setLineWidth(se.wireframeLinewidth*Ot()),Yt.setMode(X.LINES)):Yt.setMode(X.TRIANGLES);else if(oe.isLine){let yn=se.linewidth;yn===void 0&&(yn=1),p.setLineWidth(yn*Ot()),oe.isLineSegments?Yt.setMode(X.LINES):oe.isLineLoop?Yt.setMode(X.LINE_LOOP):Yt.setMode(X.LINE_STRIP)}else oe.isPoints?Yt.setMode(X.POINTS):oe.isSprite&&Yt.setMode(X.TRIANGLES);if(oe.isBatchedMesh)if(At.get("WEBGL_multi_draw"))Yt.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{let yn=oe._multiDrawStarts,$e=oe._multiDrawCounts,fn=oe._multiDrawCount,Le=Je?Se.get(Je).bytesPerElement:1,nn=z.get(se).currentProgram.getUniforms();for(let wn=0;wn<fn;wn++)nn.setValue(X,"_gl_DrawID",wn),Yt.render(yn[wn]/Le,$e[wn])}else if(oe.isInstancedMesh)Yt.renderInstances(tt,ln,oe.count);else if(pe.isInstancedBufferGeometry){let yn=pe._maxInstanceCount!==void 0?pe._maxInstanceCount:1/0,$e=Math.min(pe.instanceCount,yn);Yt.renderInstances(tt,ln,$e)}else Yt.render(tt,ln)};function j(I,K,pe,se){A!==null&&I.isNodeMaterial&&A.setObject(se,I),ot===!0&&Qe.setState(I,pe,!1),I.transparent===!0&&I.side===Yn&&I.forceSinglePass===!1?(I.side=Ln,I.needsUpdate=!0,Vt(I,K,se),I.side=Yi,I.needsUpdate=!0,Vt(I,K,se),I.side=Yn):Vt(I,K,se)}this.compile=function(I,K,pe=null){pe===null&&(pe=I),A!==null&&A.renderStart(I,K,pe),w=Oe.get(pe),w.init(K),_.push(w),pe.traverseVisible(function(oe){oe.isLight&&oe.layers.test(K.layers)&&(w.pushLight(oe),oe.castShadow&&w.pushShadow(oe))}),I!==pe&&I.traverseVisible(function(oe){oe.isLight&&oe.layers.test(K.layers)&&(w.pushLight(oe),oe.castShadow&&w.pushShadow(oe))}),w.setupLights(),A!==null&&A.updateLights(w.state.lightsArray),bt=this.localClippingEnabled,ot=Qe.init(this.clippingPlanes,bt),ot===!0&&Qe.setGlobalState(this.clippingPlanes,K),A!==null&&it.render(w.state.shadowsArray,pe,K);let se=new Set;return I.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;let Ve=oe.material;if(Ve)if(Array.isArray(Ve))for(let je=0;je<Ve.length;je++){let ke=Ve[je];j(ke,pe,K,oe),se.add(ke)}else j(Ve,pe,K,oe),se.add(Ve)}),w=_.pop(),A!==null&&A.renderEnd(),se},this.compileAsync=function(I,K,pe=null){let se=this.compile(I,K,pe);return new Promise(oe=>{function Ve(){if(se.forEach(function(je){let Je=z.get(je).currentProgram;(Je===void 0||Je.isReady())&&se.delete(je)}),se.size===0){oe(I);return}setTimeout(Ve,10)}At.get("KHR_parallel_shader_compile")!==null?Ve():setTimeout(Ve,10)})};let re=null;function we(I){re&&re(I)}function ie(){gt.stop()}function We(){gt.start()}let gt=new Cu;gt.setAnimationLoop(we),typeof self<"u"&&gt.setContext(self),this.setAnimationLoop=function(I){re=I,F.setAnimationLoop(I),I===null?gt.stop():gt.start()},F.addEventListener("sessionstart",ie),F.addEventListener("sessionend",We),this.render=function(I,K){if(K!==void 0&&K.isCamera!==!0){dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;A!==null&&A.renderStart(I,K);let pe=F.enabled===!0&&F.isPresenting===!0,se=D!==null&&(be===null||pe)&&D.begin(V,be);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),F.enabled===!0&&F.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(F.cameraAutoUpdate===!0&&F.updateCamera(K),K=F.getCamera()),I.isScene===!0&&I.onBeforeRender(V,I,K,be),w=Oe.get(I,_.length),w.init(K),w.state.textureUnits=ae.getTextureUnits(),_.push(w),ht.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),pt.setFromProjectionMatrix(ht,ti,K.reversedDepth),bt=this.localClippingEnabled,ot=Qe.init(this.clippingPlanes,bt),T=De.get(I,N.length),T.init(),N.push(T),F.enabled===!0&&F.isPresenting===!0){let je=V.xr.getDepthSensingMesh();je!==null&&et(je,K,-1/0,V.sortObjects)}et(I,K,0,V.sortObjects),T.finish(),A!==null&&A.updateLights(w.state.lightsArray),V.sortObjects===!0&&T.sort(qe,ct),mt=F.enabled===!1||F.isPresenting===!1||F.hasDepthSensing()===!1,mt&&lt.addToRenderList(T,I),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ot===!0&&Qe.beginShadows();let oe=w.state.shadowsArray;if(it.render(oe,I,K),ot===!0&&Qe.endShadows(),(se&&D.hasRenderPass())===!1){let je=T.opaque,ke=T.transmissive;if(w.setupLights(),K.isArrayCamera){let Je=K.cameras;if(ke.length>0)for(let st=0,vt=Je.length;st<vt;st++){let St=Je[st];Ke(je,ke,I,St)}mt&&lt.render(I);for(let st=0,vt=Je.length;st<vt;st++){let St=Je[st];Pe(T,I,St,St.viewport)}}else ke.length>0&&Ke(je,ke,I,K),mt&&lt.render(I),Pe(T,I,K)}be!==null&&fe===0&&(ae.updateMultisampleRenderTarget(be),ae.updateRenderTargetMipmap(be)),se&&D.end(V),I.isScene===!0&&I.onAfterRender(V,I,K),Be.resetDefaultState(),ce=-1,te=null,_.pop(),_.length>0?(w=_[_.length-1],ae.setTextureUnits(w.state.textureUnits),ot===!0&&Qe.setGlobalState(V.clippingPlanes,w.state.camera)):w=null,N.pop(),N.length>0?T=N[N.length-1]:T=null,A!==null&&A.renderEnd()};function et(I,K,pe,se){if(I.visible===!1)return;if(I.layers.test(K.layers)){if(I.isGroup)pe=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(K);else if(I.isLightProbeGrid)w.pushLightProbeGrid(I);else if(I.isLight)w.pushLight(I),I.castShadow&&w.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||I.intersectsFrustum(pt)){se&&Kt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(ht);let je=xe.update(I),ke=I.material;ke.visible&&T.push(I,je,ke,pe,Kt.z,null,K)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||I.intersectsFrustum(pt))){let je=xe.update(I),ke=I.material;if(se&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Kt.copy(I.boundingSphere.center)):(je.boundingSphere===null&&je.computeBoundingSphere(),Kt.copy(je.boundingSphere.center)),Kt.applyMatrix4(I.matrixWorld).applyMatrix4(ht)),Array.isArray(ke)){let Je=je.groups;for(let st=0,vt=Je.length;st<vt;st++){let St=Je[st],tt=ke[St.materialIndex];tt&&tt.visible&&T.push(I,je,tt,pe,Kt.z,St,K)}}else ke.visible&&T.push(I,je,ke,pe,Kt.z,null,K)}}let Ve=I.children;for(let je=0,ke=Ve.length;je<ke;je++)et(Ve[je],K,pe,se)}function Pe(I,K,pe,se){let{opaque:oe,transmissive:Ve,transparent:je}=I;w.setupLightsView(pe),ot===!0&&Qe.setGlobalState(V.clippingPlanes,pe),se&&p.viewport(P.copy(se)),oe.length>0&&wt(oe,K,pe),Ve.length>0&&wt(Ve,K,pe),je.length>0&&wt(je,K,pe),p.buffers.depth.setTest(!0),p.buffers.depth.setMask(!0),p.buffers.color.setMask(!0),p.setPolygonOffset(!1)}function Ke(I,K,pe,se){if((pe.isScene===!0?pe.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[se.id]===void 0){let tt=At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[se.id]=new Fn(1,1,{generateMipmaps:!0,type:tt?si:On,minFilter:gi,samples:Math.max(4,O.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Pt.workingColorSpace})}let Ve=w.state.transmissionRenderTarget[se.id],je=se.viewport||P;Ve.setSize(je.z*V.transmissionResolutionScale,je.w*V.transmissionResolutionScale);let ke=V.getRenderTarget(),Je=V.getActiveCubeFace(),st=V.getActiveMipmapLevel();V.setRenderTarget(Ve),V.getClearColor(at),ee=V.getClearAlpha(),ee<1&&V.setClearColor(16777215,.5),V.clear(),mt&&lt.render(pe);let vt=V.toneMapping;V.toneMapping=ni;let St=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),w.setupLightsView(se),ot===!0&&Qe.setGlobalState(V.clippingPlanes,se),wt(I,pe,se),ae.updateMultisampleRenderTarget(Ve),ae.updateRenderTargetMipmap(Ve),At.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let Nt=0,ln=K.length;Nt<ln;Nt++){let qt=K[Nt],{object:Yt,geometry:yn,material:$e,group:fn}=qt;if($e.side===Yn&&Yt.layers.test(se.layers)){let Le=$e.side;$e.side=Ln,$e.needsUpdate=!0,It(Yt,pe,se,yn,$e,fn),$e.side=Le,$e.needsUpdate=!0,tt=!0}}tt===!0&&(ae.updateMultisampleRenderTarget(Ve),ae.updateRenderTargetMipmap(Ve))}V.setRenderTarget(ke,Je,st),V.setClearColor(at,ee),St!==void 0&&(se.viewport=St),V.toneMapping=vt}function wt(I,K,pe){let se=K.isScene===!0?K.overrideMaterial:null;for(let oe=0,Ve=I.length;oe<Ve;oe++){let je=I[oe],{object:ke,geometry:Je,group:st}=je,vt=je.material;vt.allowOverride===!0&&se!==null&&(vt=se),ke.layers.test(pe.layers)&&It(ke,K,pe,Je,vt,st)}}function It(I,K,pe,se,oe,Ve){A!==null&&oe.isNodeMaterial&&A.setObject(I,oe),I.onBeforeRender(V,K,pe,se,oe,Ve),I.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),oe.onBeforeRender(V,K,pe,se,I,Ve),oe.transparent===!0&&oe.side===Yn&&oe.forceSinglePass===!1?(oe.side=Ln,oe.needsUpdate=!0,V.renderBufferDirect(pe,K,se,oe,I,Ve),oe.side=Yi,oe.needsUpdate=!0,V.renderBufferDirect(pe,K,se,oe,I,Ve),oe.side=Yn):V.renderBufferDirect(pe,K,se,oe,I,Ve),I.onAfterRender(V,K,pe,se,oe,Ve)}function Vt(I,K,pe){K.isScene!==!0&&(K=zt);let se=z.get(I),oe=w.state.lights,Ve=w.state.shadowsArray,je=oe.state.version,ke=Re.getParameters(I,oe.state,Ve,K,pe,w.state.lightProbeGridArray),Je=Re.getProgramCacheKey(ke),st=se.programs;se.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?K.environment:null,se.fog=K.fog;let vt=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;se.envMap=Te.get(I.envMap||se.environment,vt),se.envMapRotation=se.environment!==null&&I.envMap===null?K.environmentRotation:I.envMapRotation,st===void 0&&(I.addEventListener("dispose",C),st=new Map,se.programs=st);let St=st.get(Je);if(St!==void 0){if(se.currentProgram===St&&se.lightsStateVersion===je)return dn(I,ke),St}else ke.uniforms=Re.getUniforms(I),A!==null&&I.isNodeMaterial&&A.build(I,pe,ke),I.onBeforeCompile(ke,V),St=Re.acquireProgram(ke,Je),st.set(Je,St),se.uniforms=ke.uniforms;let tt=se.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(tt.clippingPlanes=Qe.uniform),dn(I,ke),se.needsLights=$o(I),se.lightsStateVersion=je,se.needsLights&&(tt.ambientLightColor.value=oe.state.ambient,tt.lightProbe.value=oe.state.probe,tt.sunLights.value=oe.state.sun,tt.sunLightShadows.value=oe.state.sunShadow,tt.directionalLights.value=oe.state.directional,tt.directionalLightShadows.value=oe.state.directionalShadow,tt.spotLights.value=oe.state.spot,tt.spotLightShadows.value=oe.state.spotShadow,tt.rectAreaLights.value=oe.state.rectArea,tt.ltc_1.value=oe.state.rectAreaLTC1,tt.ltc_2.value=oe.state.rectAreaLTC2,tt.pointLights.value=oe.state.point,tt.pointLightShadows.value=oe.state.pointShadow,tt.hemisphereLights.value=oe.state.hemi,tt.sunShadowMatrix.value=oe.state.sunShadowMatrix,tt.sunShadowCascade.value=oe.state.sunShadowCascade,tt.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,tt.spotLightMatrix.value=oe.state.spotLightMatrix,tt.spotLightMap.value=oe.state.spotLightMap,tt.pointShadowMatrix.value=oe.state.pointShadowMatrix),se.lightProbeGrid=w.state.lightProbeGridArray.length>0,se.currentProgram=St,se.uniformsList=null,St}function cn(I){if(I.uniformsList===null){let K=I.currentProgram.getUniforms();I.uniformsList=Js.seqWithValue(K.seq,I.uniforms)}return I.uniformsList}function dn(I,K){let pe=z.get(I);pe.outputColorSpace=K.outputColorSpace,pe.batching=K.batching,pe.batchingColor=K.batchingColor,pe.instancing=K.instancing,pe.instancingColor=K.instancingColor,pe.instancingMorph=K.instancingMorph,pe.skinning=K.skinning,pe.morphTargets=K.morphTargets,pe.morphNormals=K.morphNormals,pe.morphColors=K.morphColors,pe.morphTargetsCount=K.morphTargetsCount,pe.numClippingPlanes=K.numClippingPlanes,pe.numIntersection=K.numClipIntersection,pe.vertexAlphas=K.vertexAlphas,pe.vertexTangents=K.vertexTangents,pe.toneMapping=K.toneMapping}function yi(I,K){if(I.length===0)return null;if(I.length===1)return I[0].texture!==null?I[0]:null;y.setFromMatrixPosition(K.matrixWorld);for(let pe=0,se=I.length;pe<se;pe++){let oe=I[pe];if(oe.texture!==null&&oe.boundingBox.containsPoint(y))return oe}return null}function ds(I,K,pe,se,oe){K.isScene!==!0&&(K=zt),ae.resetTextureUnits();let Ve=K.fog,je=se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial?K.environment:null,ke=be===null?V.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Pt.workingColorSpace,Je=se.isMeshStandardMaterial||se.isMeshLambertMaterial&&!se.envMap||se.isMeshPhongMaterial&&!se.envMap,st=Te.get(se.envMap||je,Je),vt=se.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,St=!!pe.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),tt=!!pe.morphAttributes.position,Nt=!!pe.morphAttributes.normal,ln=!!pe.morphAttributes.color,qt=ni;se.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(qt=V.toneMapping);let Yt=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,yn=Yt!==void 0?Yt.length:0,$e=z.get(se),fn=w.state.lights;if(ot===!0&&(bt===!0||I!==te)){let Zt=I===te&&se.id===ce;Qe.setState(se,I,Zt)}let Le=!1;se.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==fn.state.version||$e.outputColorSpace!==ke||oe.isBatchedMesh&&$e.batching===!1||!oe.isBatchedMesh&&$e.batching===!0||oe.isBatchedMesh&&$e.batchingColor===!0&&oe._colorsTexture===null||oe.isBatchedMesh&&$e.batchingColor===!1&&oe._colorsTexture!==null||oe.isInstancedMesh&&$e.instancing===!1||!oe.isInstancedMesh&&$e.instancing===!0||oe.isSkinnedMesh&&$e.skinning===!1||!oe.isSkinnedMesh&&$e.skinning===!0||oe.isInstancedMesh&&$e.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&$e.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&$e.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&$e.instancingMorph===!1&&oe.morphTexture!==null||$e.envMap!==st||se.fog===!0&&$e.fog!==Ve||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Qe.numPlanes||$e.numIntersection!==Qe.numIntersection)||$e.vertexAlphas!==vt||$e.vertexTangents!==St||$e.morphTargets!==tt||$e.morphNormals!==Nt||$e.morphColors!==ln||$e.toneMapping!==qt||$e.morphTargetsCount!==yn||!!$e.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Le=!0):(Le=!0,$e.__version=se.version);let nn=$e.currentProgram;Le===!0&&(nn=Vt(se,K,oe),A&&se.isNodeMaterial&&A.onUpdateProgram(se,nn,$e));let wn=!1,ri=!1,Bn=!1,Lt=nn.getUniforms(),Gt=$e.uniforms;if(p.useProgram(nn.program)&&(wn=!0,ri=!0,Bn=!0),se.id!==ce&&(ce=se.id,ri=!0),$e.needsLights){let Zt=yi(w.state.lightProbeGridArray,oe);$e.lightProbeGrid!==Zt&&($e.lightProbeGrid=Zt,ri=!0)}if(wn||te!==I){p.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),Lt.setValue(X,"projectionMatrix",I.projectionMatrix),Lt.setValue(X,"viewMatrix",I.matrixWorldInverse);let an=Lt.map.cameraPosition;an!==void 0&&an.setValue(X,yt.setFromMatrixPosition(I.matrixWorld)),O.logarithmicDepthBuffer&&Lt.setValue(X,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Lt.setValue(X,"isOrthographic",I.isOrthographicCamera===!0),te!==I&&(te=I,ri=!0,Bn=!0)}if($e.needsLights&&(fn.state.sunShadowMap.length>0&&Lt.setValue(X,"sunShadowMap",fn.state.sunShadowMap,ae),fn.state.directionalShadowMap.length>0&&Lt.setValue(X,"directionalShadowMap",fn.state.directionalShadowMap,ae),fn.state.spotShadowMap.length>0&&Lt.setValue(X,"spotShadowMap",fn.state.spotShadowMap,ae),fn.state.pointShadowMap.length>0&&Lt.setValue(X,"pointShadowMap",fn.state.pointShadowMap,ae)),oe.isSkinnedMesh){Lt.setOptional(X,oe,"bindMatrix"),Lt.setOptional(X,oe,"bindMatrixInverse");let Zt=oe.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),Lt.setValue(X,"boneTexture",Zt.boneTexture,ae))}oe.isBatchedMesh&&(Lt.setOptional(X,oe,"batchingTexture"),Lt.setValue(X,"batchingTexture",oe._matricesTexture,ae),Lt.setOptional(X,oe,"batchingIdTexture"),Lt.setValue(X,"batchingIdTexture",oe._indirectTexture,ae),Lt.setOptional(X,oe,"batchingColorTexture"),oe._colorsTexture!==null&&Lt.setValue(X,"batchingColorTexture",oe._colorsTexture,ae));let ai=pe.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&Z.update(oe,pe,nn),(ri||$e.receiveShadow!==oe.receiveShadow)&&($e.receiveShadow=oe.receiveShadow,Lt.setValue(X,"receiveShadow",oe.receiveShadow)),(se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial)&&se.envMap===null&&K.environment!==null&&(Gt.envMapIntensity.value=K.environmentIntensity),Gt.dfgLUT!==void 0&&(Gt.dfgLUT.value=Ng()),ri){if(Lt.setValue(X,"toneMappingExposure",V.toneMappingExposure),$e.needsLights&&Jo(Gt,Bn),Ve&&se.fog===!0&&ze.refreshFogUniforms(Gt,Ve),ze.refreshMaterialUniforms(Gt,se,ge,_e,w.state.transmissionRenderTarget[I.id]),$e.needsLights&&$e.lightProbeGrid){let Zt=$e.lightProbeGrid;Gt.probesSH.value=Zt.texture,Gt.probesMin.value.copy(Zt.boundingBox.min),Gt.probesMax.value.copy(Zt.boundingBox.max),Gt.probesResolution.value.copy(Zt.resolution)}Js.upload(X,cn($e),Gt,ae)}if(se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Js.upload(X,cn($e),Gt,ae),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Lt.setValue(X,"center",oe.center),Lt.setValue(X,"modelViewMatrix",oe.modelViewMatrix),Lt.setValue(X,"normalMatrix",oe.normalMatrix),Lt.setValue(X,"modelMatrix",oe.matrixWorld),se.uniformsGroups!==void 0){let Zt=se.uniformsGroups;for(let an=0,kn=Zt.length;an<kn;an++){let Li=Zt[an];Me.update(Li,nn),Me.bind(Li,nn)}}return nn}function Jo(I,K){I.ambientLightColor.needsUpdate=K,I.lightProbe.needsUpdate=K,I.sunLights.needsUpdate=K,I.sunLightShadows.needsUpdate=K,I.directionalLights.needsUpdate=K,I.directionalLightShadows.needsUpdate=K,I.pointLights.needsUpdate=K,I.pointLightShadows.needsUpdate=K,I.spotLights.needsUpdate=K,I.spotLightShadows.needsUpdate=K,I.rectAreaLights.needsUpdate=K,I.hemisphereLights.needsUpdate=K}function $o(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return me},this.getActiveMipmapLevel=function(){return fe},this.getRenderTarget=function(){return be},this.setRenderTargetTextures=function(I,K,pe){let se=z.get(I);se.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),z.get(I.texture).__webglTexture=K,z.get(I.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:pe,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,K){let pe=z.get(I);pe.__webglFramebuffer=K,pe.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(I,K=0,pe=0){be=I,me=K,fe=pe;let se=null,oe=!1,Ve=!1;if(I){let ke=z.get(I);if(ke.__useDefaultFramebuffer!==void 0){p.bindFramebuffer(X.FRAMEBUFFER,ke.__webglFramebuffer),P.copy(I.viewport),Xe.copy(I.scissor),Ge=I.scissorTest,p.viewport(P),p.scissor(Xe),p.setScissorTest(Ge),ce=-1;return}else if(ke.__webglFramebuffer===void 0)ae.setupRenderTarget(I);else if(ke.__hasExternalTextures)ae.rebindTextures(I,z.get(I.texture).__webglTexture,z.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let vt=I.depthTexture;if(ke.__boundDepthTexture!==vt){if(vt!==null&&z.has(vt)&&(I.width!==vt.image.width||I.height!==vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(I)}}let Je=I.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Ve=!0);let st=z.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(st[K])?se=st[K][pe]:se=st[K],oe=!0):I.samples>0&&ae.useMultisampledRTT(I)===!1?se=z.get(I).__webglMultisampledFramebuffer:Array.isArray(st)?se=st[pe]:se=st,P.copy(I.viewport),Xe.copy(I.scissor),Ge=I.scissorTest}else P.copy(Fe).multiplyScalar(ge).floor(),Xe.copy(Ye).multiplyScalar(ge).floor(),Ge=rn;if(pe!==0&&(se=J),p.bindFramebuffer(X.FRAMEBUFFER,se)&&p.drawBuffers(I,se),p.viewport(P),p.scissor(Xe),p.setScissorTest(Ge),oe){let ke=z.get(I.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+K,ke.__webglTexture,pe)}else if(Ve){let ke=K;for(let Je=0;Je<I.textures.length;Je++){let st=z.get(I.textures[Je]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Je,st.__webglTexture,pe,ke)}}else if(I!==null&&pe!==0){let ke=z.get(I.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,ke.__webglTexture,pe)}ce=-1};function Zr(I){let K=z.get(I);return(K.__readFormat!==I.format||K.__readType!==I.type)&&(K.__readFormat=I.format,K.__readType=I.type,K.__formatReadable=O.textureFormatReadable(I.format),K.__typeReadable=O.textureTypeReadable(I.type)),K}this.readRenderTargetPixels=function(I,K,pe,se,oe,Ve,je,ke=0){if(!(I&&I.isWebGLRenderTarget)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=z.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&je!==void 0&&(Je=Je[je]),Je){p.bindFramebuffer(X.FRAMEBUFFER,Je);try{let st=I.textures[ke],vt=st.format,St=st.type;I.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+ke);let tt=Zr(st);if(tt.__formatReadable===!1){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(tt.__typeReadable===!1){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=I.width-se&&pe>=0&&pe<=I.height-oe&&X.readPixels(K,pe,se,oe,Ie.convert(vt),Ie.convert(St),Ve)}finally{let st=be!==null?z.get(be).__webglFramebuffer:null;p.bindFramebuffer(X.FRAMEBUFFER,st)}}},this.readRenderTargetPixelsAsync=async function(I,K,pe,se,oe,Ve,je,ke=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Je=z.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&je!==void 0&&(Je=Je[je]),Je)if(K>=0&&K<=I.width-se&&pe>=0&&pe<=I.height-oe){p.bindFramebuffer(X.FRAMEBUFFER,Je);let st=I.textures[ke],vt=st.format,St=st.type;I.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+ke);let tt=Zr(st);if(tt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(tt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Nt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Nt),X.bufferData(X.PIXEL_PACK_BUFFER,Ve.byteLength,X.STREAM_READ),X.readPixels(K,pe,se,oe,Ie.convert(vt),Ie.convert(St),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);let ln=be!==null?z.get(be).__webglFramebuffer:null;p.bindFramebuffer(X.FRAMEBUFFER,ln);let qt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await tu(X,qt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Nt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Ve),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(Nt),X.deleteSync(qt),Ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,K=null,pe=0){let se=Math.pow(2,-pe),oe=Math.floor(I.image.width*se),Ve=Math.floor(I.image.height*se),je=K!==null?K.x:0,ke=K!==null?K.y:0;ae.setTexture2D(I,0),X.copyTexSubImage2D(X.TEXTURE_2D,pe,0,0,je,ke,oe,Ve),p.unbindTexture()},this.copyTextureToTexture=function(I,K,pe=null,se=null,oe=0,Ve=0){let je,ke,Je,st,vt,St,tt,Nt,ln,qt=I.isCompressedTexture?I.mipmaps[Ve]:I.image;if(pe!==null)je=pe.max.x-pe.min.x,ke=pe.max.y-pe.min.y,Je=pe.isBox3?pe.max.z-pe.min.z:1,st=pe.min.x,vt=pe.min.y,St=pe.isBox3?pe.min.z:0;else{let Gt=Math.pow(2,-oe);je=Math.floor(qt.width*Gt),ke=Math.floor(qt.height*Gt),I.isDataArrayTexture?Je=qt.depth:I.isData3DTexture?Je=Math.floor(qt.depth*Gt):Je=1,st=0,vt=0,St=0}se!==null?(tt=se.x,Nt=se.y,ln=se.z):(tt=0,Nt=0,ln=0);let Yt=Ie.convert(K.format),yn=Ie.convert(K.type),$e;K.isData3DTexture?(ae.setTexture3D(K,0),$e=X.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(ae.setTexture2DArray(K,0),$e=X.TEXTURE_2D_ARRAY):(ae.setTexture2D(K,0),$e=X.TEXTURE_2D),p.activeTexture(X.TEXTURE0),p.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,K.flipY),p.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),p.pixelStorei(X.UNPACK_ALIGNMENT,K.unpackAlignment);let fn=p.getParameter(X.UNPACK_ROW_LENGTH),Le=p.getParameter(X.UNPACK_IMAGE_HEIGHT),nn=p.getParameter(X.UNPACK_SKIP_PIXELS),wn=p.getParameter(X.UNPACK_SKIP_ROWS),ri=p.getParameter(X.UNPACK_SKIP_IMAGES);p.pixelStorei(X.UNPACK_ROW_LENGTH,qt.width),p.pixelStorei(X.UNPACK_IMAGE_HEIGHT,qt.height),p.pixelStorei(X.UNPACK_SKIP_PIXELS,st),p.pixelStorei(X.UNPACK_SKIP_ROWS,vt),p.pixelStorei(X.UNPACK_SKIP_IMAGES,St);let Bn=I.isDataArrayTexture||I.isData3DTexture,Lt=K.isDataArrayTexture||K.isData3DTexture;if(I.isDepthTexture){let Gt=z.get(I),ai=z.get(K),Zt=z.get(Gt.__renderTarget),an=z.get(ai.__renderTarget);p.bindFramebuffer(X.READ_FRAMEBUFFER,Zt.__webglFramebuffer),p.bindFramebuffer(X.DRAW_FRAMEBUFFER,an.__webglFramebuffer);for(let kn=0;kn<Je;kn++)Bn&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,z.get(I).__webglTexture,oe,St+kn),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,z.get(K).__webglTexture,Ve,ln+kn)),X.blitFramebuffer(st,vt,je,ke,tt,Nt,je,ke,X.DEPTH_BUFFER_BIT,X.NEAREST);p.bindFramebuffer(X.READ_FRAMEBUFFER,null),p.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(oe!==0||I.isRenderTargetTexture||z.has(I)){let Gt=z.get(I),ai=z.get(K);p.bindFramebuffer(X.READ_FRAMEBUFFER,H),p.bindFramebuffer(X.DRAW_FRAMEBUFFER,$);for(let Zt=0;Zt<Je;Zt++)Bn?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Gt.__webglTexture,oe,St+Zt):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Gt.__webglTexture,oe),Lt?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ai.__webglTexture,Ve,ln+Zt):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,ai.__webglTexture,Ve),oe!==0?X.blitFramebuffer(st,vt,je,ke,tt,Nt,je,ke,X.COLOR_BUFFER_BIT,X.NEAREST):Lt?X.copyTexSubImage3D($e,Ve,tt,Nt,ln+Zt,st,vt,je,ke):X.copyTexSubImage2D($e,Ve,tt,Nt,st,vt,je,ke);p.bindFramebuffer(X.READ_FRAMEBUFFER,null),p.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Lt?I.isDataTexture||I.isData3DTexture?X.texSubImage3D($e,Ve,tt,Nt,ln,je,ke,Je,Yt,yn,qt.data):K.isCompressedArrayTexture?X.compressedTexSubImage3D($e,Ve,tt,Nt,ln,je,ke,Je,Yt,qt.data):X.texSubImage3D($e,Ve,tt,Nt,ln,je,ke,Je,Yt,yn,qt):I.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Ve,tt,Nt,je,ke,Yt,yn,qt.data):I.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Ve,tt,Nt,qt.width,qt.height,Yt,qt.data):X.texSubImage2D(X.TEXTURE_2D,Ve,tt,Nt,je,ke,Yt,yn,qt);p.pixelStorei(X.UNPACK_ROW_LENGTH,fn),p.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Le),p.pixelStorei(X.UNPACK_SKIP_PIXELS,nn),p.pixelStorei(X.UNPACK_SKIP_ROWS,wn),p.pixelStorei(X.UNPACK_SKIP_IMAGES,ri),Ve===0&&K.generateMipmaps&&X.generateMipmap($e),p.unbindTexture()},this.initRenderTarget=function(I){z.get(I).__webglFramebuffer===void 0&&ae.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?ae.setTextureCube(I,0):I.isData3DTexture?ae.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?ae.setTexture2DArray(I,0):ae.setTexture2D(I,0),p.unbindTexture()},this.resetState=function(){me=0,fe=0,be=null,p.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Pt._getUnpackColorSpace()}};window.FestaGL=(()=>{let i=Math.PI*2,e=(d,b,E)=>Math.min(E,Math.max(b,d)),t={add:(d,b)=>[d[0]+b[0],d[1]+b[1],d[2]+b[2]],sub:(d,b)=>[d[0]-b[0],d[1]-b[1],d[2]-b[2]],mul:(d,b)=>[d[0]*b,d[1]*b,d[2]*b],dot:(d,b)=>d[0]*b[0]+d[1]*b[1]+d[2]*b[2],cross:(d,b)=>[d[1]*b[2]-d[2]*b[1],d[2]*b[0]-d[0]*b[2],d[0]*b[1]-d[1]*b[0]],len:d=>Math.hypot(...d),norm:d=>{let b=Math.hypot(...d)||1;return d.map(E=>E/b)}},n={identity:()=>new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),multiply:(d,b)=>{let E=new Float32Array(16);for(let y=0;y<4;y++)for(let T=0;T<4;T++)E[y*4+T]=d[T]*b[y*4]+d[4+T]*b[y*4+1]+d[8+T]*b[y*4+2]+d[12+T]*b[y*4+3];return E},perspective:(d,b,E,y)=>{let T=1/Math.tan(d/2),w=new Float32Array(16);return w[0]=T/b,w[5]=T,w[10]=(y+E)/(E-y),w[11]=-1,w[14]=2*y*E/(E-y),w},ortho:(d,b,E,y,T,w)=>new Float32Array([2/(b-d),0,0,0,0,2/(y-E),0,0,0,0,-2/(w-T),0,-(b+d)/(b-d),-(y+E)/(y-E),-(w+T)/(w-T),1]),lookAt:(d,b,E=[0,1,0])=>{let y=t.norm(t.sub(d,b)),T=t.norm(t.cross(E,y)),w=t.cross(y,T);return new Float32Array([T[0],w[0],y[0],0,T[1],w[1],y[1],0,T[2],w[2],y[2],0,-t.dot(T,d),-t.dot(w,d),-t.dot(y,d),1])},compose:(d=0,b=0,E=0,y=0,T=1,w=T,N=T)=>{let _=Math.cos(y),D=Math.sin(y);return new Float32Array([_*T,0,-D*T,0,0,w,0,0,D*N,0,_*N,0,d,b,E,1])},transform:(d,b,E=1)=>[d[0]*b[0]+d[4]*b[1]+d[8]*b[2]+d[12]*E,d[1]*b[0]+d[5]*b[1]+d[9]*b[2]+d[13]*E,d[2]*b[0]+d[6]*b[1]+d[10]*b[2]+d[14]*E],inverse:d=>{let b=new Float32Array(16),E=Array.from(d),y=Array.from({length:4},(T,w)=>[E[w],E[w+4],E[w+8],E[w+12],...Array.from({length:4},(N,_)=>w===_?1:0)]);for(let T=0;T<4;T++){let w=T;for(let _=T+1;_<4;_++)Math.abs(y[_][T])>Math.abs(y[w][T])&&(w=_);[y[T],y[w]]=[y[w],y[T]];let N=y[T][T];if(Math.abs(N)<1e-12)return n.identity();for(let _=0;_<8;_++)y[T][_]/=N;for(let _=0;_<4;_++)if(_!==T){let D=y[_][T];for(let V=0;V<8;V++)y[_][V]-=D*y[T][V]}}for(let T=0;T<4;T++)for(let w=0;w<4;w++)b[w*4+T]=y[T][w+4];return b}};function s(d){return Array.isArray(d)?d:typeof d=="number"?[(d>>16&255)/255,(d>>8&255)/255,(d&255)/255]:(d=d.replace("#",""),d.length===3&&(d=d.split("").map(b=>b+b).join("")),s(parseInt(d,16)))}function r(d=91371){let b=d>>>0;return()=>{b+=1831565813;let E=b;return E=Math.imul(E^E>>>15,E|1),E^=E+Math.imul(E^E>>>7,E|61),((E^E>>>14)>>>0)/4294967296}}let l=(d="#ffffff",b=0,E=.7,y=0,T=0,w=1)=>({color:s(d),p:[b,E,y,T],ao:w});class a{constructor(){this.data=new Float32Array(262144),this.used=0,this.count=0,this.transform=n.identity(),this.animation=[0,0,0,0]}reserve(b){if(this.used+b>this.data.length){let E=new Float32Array(Math.max(this.data.length*2,this.used+b));E.set(this.data),this.data=E}}vertex(b,E,y,T){this.reserve(20),b=n.transform(this.transform,b),E=t.norm(n.transform(this.transform,E,0));let w=this.data,N=this.used,_=T.color;for(let D=0;D<3;D++)w[N+D]=b[D];for(let D=0;D<3;D++)w[N+3+D]=E[D];w[N+6]=y[0],w[N+7]=y[1],w[N+8]=_[0],w[N+9]=_[1],w[N+10]=_[2],w[N+11]=T.ao??1;for(let D=0;D<4;D++)w[N+12+D]=T.p[D];for(let D=0;D<4;D++)w[N+16+D]=this.animation[D];this.used+=20,this.count++}tri(b,E,y,T,w=[[0,0],[0,1],[1,1]],N=null){let _=t.norm(t.cross(t.sub(E,b),t.sub(y,b)));this.vertex(b,N?N[0]:_,w[0],T),this.vertex(E,N?N[1]:_,w[1],T),this.vertex(y,N?N[2]:_,w[2],T)}quad(b,E,y,T,w,N=1,_=1){this.tri(b,E,y,w,[[0,0],[0,_],[N,_]]),this.tri(b,y,T,w,[[0,0],[N,_],[N,0]])}box(b,E,y,T,w,N,_){let D=b-T/2,V=b+T/2,q=E-w/2,A=E+w/2,J=y-N/2,H=y+N/2;this.quad([D,A,H],[D,q,H],[V,q,H],[V,A,H],_,_.fit?1:T,_.fit?1:w),this.quad([V,A,J],[V,q,J],[D,q,J],[D,A,J],_,_.fit?1:T,_.fit?1:w),this.quad([V,A,H],[V,q,H],[V,q,J],[V,A,J],_,_.fit?1:N,_.fit?1:w),this.quad([D,A,J],[D,q,J],[D,q,H],[D,A,H],_,_.fit?1:N,_.fit?1:w),this.quad([D,A,J],[D,A,H],[V,A,H],[V,A,J],_,_.fit?1:T,_.fit?1:N),this.quad([D,q,H],[D,q,J],[V,q,J],[V,q,H],_,_.fit?1:T,_.fit?1:N)}plane(b,E,y,T,w,N,_=T,D=w){this.quad([b-T/2,E,y-w/2],[b-T/2,E,y+w/2],[b+T/2,E,y+w/2],[b+T/2,E,y-w/2],N,_,D)}sphere(b,E,y,T,w,N,_,D=16,V=10,q=0,A=Math.PI){let J=(H,$)=>{let me=H/D*i,fe=q+$/V*(A-q),be=[Math.sin(fe)*Math.cos(me),Math.cos(fe),Math.sin(fe)*Math.sin(me)];return{p:[b+be[0]*T,E+be[1]*w,y+be[2]*N],n:t.norm([be[0]/T,be[1]/w,be[2]/N]),uv:[H/D,$/V]}};for(let H=0;H<V;H++)for(let $=0;$<D;$++){let me=J($,H),fe=J($,H+1),be=J($+1,H+1),ce=J($+1,H);for(let te of[[me,fe,be],[me,be,ce]]){let P=t.cross(t.sub(te[1].p,te[0].p),t.sub(te[2].p,te[0].p));t.dot(P,te[0].n)<0&&([te[1],te[2]]=[te[2],te[1]]),this.tri(...te.map(Xe=>Xe.p),_,te.map(Xe=>Xe.uv),te.map(Xe=>Xe.n))}}}cylinder(b,E,y,T,w,N=12,_=!0){let D=t.norm(t.sub(E,b)),V=t.norm(t.cross(D,Math.abs(D[1])>.95?[1,0,0]:[0,1,0])),q=t.cross(D,V),A=t.len(t.sub(E,b)),J=($,me,fe)=>t.add($,t.add(t.mul(V,Math.cos(fe)*me),t.mul(q,Math.sin(fe)*me))),H=$=>t.norm(t.add(t.add(t.mul(V,Math.cos($)),t.mul(q,Math.sin($))),t.mul(D,(y-T)/A)));for(let $=0;$<N;$++){let me=$/N*i,fe=($+1)/N*i,be=J(b,y,me),ce=J(E,T,me),te=J(E,T,fe),P=J(b,y,fe),Xe=H(me),Ge=H(fe);this.tri(be,te,ce,w,[[$/N,0],[($+1)/N,A],[$/N,A]],[Xe,Ge,Xe]),this.tri(be,P,te,w,[[$/N,0],[($+1)/N,0],[($+1)/N,A]],[Xe,Ge,Ge]),_&&(this.tri(b,P,be,w),this.tri(E,ce,te,w))}}disk(b,E,y,T,w,N=32){for(let _=0;_<N;_++){let D=_/N*i,V=(_+1)/N*i;this.tri([b,E,y],[b+Math.cos(V)*T,E,y+Math.sin(V)*T],[b+Math.cos(D)*T,E,y+Math.sin(D)*T],w,[[.5,.5],[.5+Math.cos(V)*.5,.5+Math.sin(V)*.5],[.5+Math.cos(D)*.5,.5+Math.sin(D)*.5]])}}tube(b,E,y,T=8){for(let w=1;w<b.length;w++)this.cylinder(b[w-1],b[w],E,E,y,T)}sign(b,E,y,T,w,N,_=!1){let D=l("#ffffff",N,.8,0,.15);this.quad([b-T/2,E+w/2,y],[b-T/2,E-w/2,y],[b+T/2,E-w/2,y],[b+T/2,E+w/2,y],D),_&&this.box(b,E,y-.022,T+.05,w+.05,.04,l("#574333",3))}scope(b,E){let y=this.transform;this.transform=n.multiply(y,b),E(),this.transform=y}animate(b,E,y){let T=this.animation;this.animation=[...b,E],y(),this.animation=T}}class c{constructor(b=512){this.size=b,this.layers=[],this.names={}}add(b,E){let y=document.createElement("canvas");y.width=y.height=this.size;let T=y.getContext("2d",{willReadFrequently:!0});E&&E(T,this.size);let w=this.layers.length;return this.layers.push(y),this.names[b]=w,w}sign(b,E,y="",T="#304c55",w=""){return this.add(b,(N,_)=>{N.fillStyle="#f9f7f0",N.fillRect(0,0,_,_),N.fillStyle=T,N.fillRect(0,0,_,62),N.fillStyle="#ffffff",N.font='700 24px "Noto Sans CJK JP", "Yu Gothic", sans-serif',N.fillText(w||b,22,41),N.fillStyle="#273b3c";let D=h(N,E,_-52,37),V=D.length>3?30:37;D=h(N,E,_-52,V),N.font=`700 ${V}px "Noto Sans CJK JP", "Yu Gothic", sans-serif`;let q=154-Math.min(D.length,4)*4;D.slice(0,4).forEach((H,$)=>N.fillText(H,26,q+$*(V+10))),N.fillStyle="#53605b",N.font='500 25px "Noto Sans CJK JP", "Yu Gothic", sans-serif';let A=h(N,y,_-52,25),J=Math.max(300,q+D.length*(V+10)+25);A.slice(0,4).forEach((H,$)=>N.fillText(H,26,J+$*34)),N.fillStyle=T,N.fillRect(26,_-53,_-52,3),N.fillStyle="#6b7770",N.font='19px "Noto Sans CJK JP", "Yu Gothic", sans-serif',N.fillText("つながりフェスタ 2026",26,_-23)})}banner(b,E,y="",T="#174f54"){return this.add(b,(w,N)=>{w.scale(1,N/112),w.fillStyle="#f9f7f0",w.fillRect(0,0,N,112),w.fillStyle=T,w.fillRect(0,0,76,112),w.fillStyle="#fff",w.font='700 23px "Noto Sans CJK JP", "Yu Gothic", sans-serif',w.textAlign="center",w.fillText(b,38,64);let _=29;for(;_>17&&(w.font=`700 ${_}px "Noto Sans CJK JP", "Yu Gothic", sans-serif`,!(w.measureText(E).width<N-104));)_--;w.textAlign="left",w.fillStyle="#263d3c",w.fillText(E,92,52),w.font='500 17px "Noto Sans CJK JP", "Yu Gothic", sans-serif',w.fillStyle="#5b675d";let D=y;for(;w.measureText(D).width>N-109&&D.length;)D=D.slice(0,-1);w.fillText(D,92,84),w.fillStyle=T,w.fillRect(76,106,N-76,6)})}upload(b,E=this.size){let y=new Uint8Array(E*E*4*this.layers.length),T=document.createElement("canvas");T.width=T.height=E;let w=T.getContext("2d");this.layers.forEach((N,_)=>{w.clearRect(0,0,E,E),w.drawImage(N,0,0,E,E),y.set(w.getImageData(0,0,E,E).data,_*E*E*4)}),this.texture=new rs(y,E,E,this.layers.length),this.texture.colorSpace=Sn,this.texture.wrapS=this.texture.wrapT=Ls,this.texture.minFilter=gi,this.texture.magFilter=gn,this.texture.generateMipmaps=!0,this.texture.anisotropy=4,this.texture.needsUpdate=!0}}function h(d,b,E,y){d.font=`700 ${y}px "Noto Sans CJK JP", "Yu Gothic", sans-serif`;let T=[],w="";for(let N of b){if(N===`
`){T.push(w),w="";continue}d.measureText(w+N).width>E&&w?(T.push(w),w=N):w+=N}return w&&T.push(w),T}let m=`#version 300 es
 precision highp float;out vec2 vUV;void main(){vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));vUV=p;gl_Position=vec4(p*2.-1.,0.,1.);}`,g=`#version 300 es
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
 `,v=`
 vec3 transformed = festaAnimation.xyz+festaRotation()*(position-festaAnimation.xyz);
 if(festaAnimation.w>8.) transformed.z+=sin(festaTime*1.9+transformed.x*4.+transformed.y*1.3)*.08*max(0.,transformed.x-festaAnimation.x);
 if(festaInfo.z>0.) transformed.xz+=festaInfo.z*.045*sin(festaTime*.7+transformed.xz*.23)*clamp(transformed.y*.15,0.,1.);
 festaUV=uv; festaMat=festaSurface; festaShade=festaAO; festaWorld=(instanceMatrix*vec4(transformed,1.)).xyz;
 `;function M(d,b,E=!1){return d.onBeforeCompile=y=>{y.uniforms.festaTime=b.timeUniform,y.uniforms.festaAtlas=b.atlasUniform,y.vertexShader=f+y.vertexShader,y.vertexShader=y.vertexShader.replace("#include <begin_vertex>",v).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
objectNormal=festaRotation()*objectNormal;`),y.fragmentShader=`precision highp sampler2DArray;
uniform sampler2DArray festaAtlas;
varying vec2 festaUV;
varying vec4 festaMat;
varying float festaShade;
varying vec3 festaWorld;
float festaNoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(fract(sin(dot(i,vec2(127.1,311.7)))*43758.5453),fract(sin(dot(i+vec2(1.,0.),vec2(127.1,311.7)))*43758.5453),f.x),mix(fract(sin(dot(i+vec2(0.,1.),vec2(127.1,311.7)))*43758.5453),fract(sin(dot(i+1.,vec2(127.1,311.7)))*43758.5453),f.x),f.y); }
`+y.fragmentShader,y.fragmentShader=y.fragmentShader.replace("#include <map_fragment>",`vec4 festaTexel=texture(festaAtlas,vec3(festaUV,festaMat.x));
if(festaTexel.a<.4) discard;
diffuseColor*=festaTexel;
if(festaMat.x>.5 && festaMat.x<1.5){float variation=festaNoise(festaWorld.xz*.28)*.65+festaNoise(festaWorld.xz*2.1)*.35;diffuseColor.rgb*=mix(.72,1.14,variation);}
if(festaMat.x>3.5 && festaMat.x<4.5)diffuseColor.rgb*=mix(.84,1.09,festaNoise(festaWorld.xz*.6));`),y.fragmentShader=y.fragmentShader.replace("diffuseColor*=festaTexel;",`diffuseColor*=festaTexel;
if(festaMat.x>2.5 && festaMat.x<3.5){
 float weather=festaNoise(festaWorld.xz*.31+vec2(0.,festaWorld.y*.18));
 float baseDamp=(1.-smoothstep(.15,1.6,festaWorld.y))*festaNoise(festaWorld.xz*1.8);
 diffuseColor.rgb*=mix(.93,1.02,weather)*(1.-baseDamp*.13);
}`),E||(y.fragmentShader=y.fragmentShader.replace("#include <roughnessmap_fragment>","float roughnessFactor=clamp(festaMat.y,.06,1.);").replace("#include <metalnessmap_fragment>","float metalnessFactor=clamp(festaMat.z,0.,1.);").replace("#include <emissivemap_fragment>","totalEmissiveRadiance=diffuseColor.rgb*festaMat.w;").replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
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
reflectedLight.indirectDiffuse*=festaShade;`))},d.customProgramCacheKey=()=>E?"festa-depth-2":"festa-standard-2",d}class L{constructor(b,E,{name:y="",shadow:T=!0,instances:w=null,dynamic:N=!1}={}){this.name=y,this.renderer=b,this.count=E.count,this.shadow=T,this.dynamic=N,this.instances=w||[{matrix:n.identity(),info:[0,0,0,0]}];let _=E.data.slice(0,E.used),D=new Tt;for(let A=0;A<_.length;A+=20)D.setRGB(_[A+8],_[A+9],_[A+10],Sn),_[A+8]=D.r,_[A+9]=D.g,_[A+10]=D.b;let V=new Wn,q=new yr(_,20);for(let[A,J,H]of[["position",3,0],["normal",3,3],["uv",2,6],["color",3,8],["festaAO",1,11],["festaSurface",4,12],["festaAnimation",4,16]])V.setAttribute(A,new vr(q,J,H));this.info=new as(new Float32Array(this.instances.length*4),4),this.info.setUsage(Vo),V.setAttribute("festaInfo",this.info),this.object=new wr(V,b.surfaceMaterial,this.instances.length),this.object.name=y,this.object.castShadow=T,this.object.receiveShadow=!0,this.object.frustumCulled=!1,this.object.customDepthMaterial=b.depthMaterial,this.object.instanceMatrix.setUsage(Vo),this.matrix=new Ft,this.updateInstances(),b.scene.add(this.object),b.meshes.push(this),E.data=null}get visible(){return this.object.visible}set visible(b){this.object.visible=b}updateInstances(){this.instances.forEach((b,E)=>{this.object.setMatrixAt(E,this.matrix.fromArray(b.matrix)),this.info.set(b.info||[0,0,0,0],E*4)}),this.object.instanceMatrix.needsUpdate=!0,this.info.needsUpdate=!0}dispose(){this.renderer.scene.remove(this.object),this.object.geometry.dispose(),this.object.dispose(),this.renderer.meshes=this.renderer.meshes.filter(b=>b!==this)}}class S{constructor(b,E="standard"){this.canvas=b,this.engine=new qo({canvas:b,alpha:!1,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0}),this.gl=this.engine.getContext(),this.engine.outputColorSpace=Sn,this.engine.toneMapping=Ur,this.engine.shadowMap.enabled=!0,this.engine.shadowMap.type=os,this.engine.shadowMap.autoUpdate=!1,this.scene=new gr,this.scene.fog=new mr("#c5d3d8",110,420),this.camera={eye:[0,1.68,20],target:[0,1.68,0],fov:66*Math.PI/180,near:.065,far:700},this.threeCamera=new An,this.meshes=[],this.quality=E,this.time=0,this.exposure=1.12,this.sun=t.norm([-.38,.79,.48]),this.sunColor=[1,.94,.81],this.sunPower=3.7,this.timeUniform={value:0},this.atlasUniform={value:null},this.surfaceMaterial=M(new Cr({color:16777215,vertexColors:!0,roughness:1,metalness:1,side:Yn,alphaTest:.4}),this),this.depthMaterial=M(new Vs({depthPacking:sc,side:Yn,alphaTest:.4}),this,!0),this.hemisphere=new Pr("#c7e0f5","#817562",1.8),this.scene.add(this.hemisphere),this.sunLight=new Dr(16777215,this.sunPower),this.sunLight.castShadow=!0,this.scene.add(this.sunLight,this.sunLight.target),this.stats={draws:0,triangles:0,fps:0},this.frameCount=0,this.fpsStamp=performance.now(),this.shadowAge=-1,this.shadowDirty=!0,this.targetSize=[0,0];let y=new Wn;y.setAttribute("position",new Nn([-1,-1,0,3,-1,0,-1,3,0],3)),this.skyUniforms={uInvVP:{value:new Ft},uEye:{value:new de},uSun:{value:new de},uTime:this.timeUniform};let T=new zs({glslVersion:Wr,vertexShader:m.replace("#version 300 es","").replace("0.,1.);","1.,1.);"),fragmentShader:g.replace("#version 300 es","").replace("frag=vec4(sky,1.);","sky=sky*1.12; sky=clamp((sky*(2.51*sky+.03))/(sky*(2.43*sky+.59)+.14),0.,1.);frag=vec4(pow(sky,vec3(1./2.2)),1.);"),uniforms:this.skyUniforms,depthWrite:!1,depthTest:!1});this.sky=new Rn(y,T),this.sky.frustumCulled=!1,this.sky.renderOrder=-1e3,this.scene.add(this.sky),this.setQuality(E)}set atlas(b){this._atlas=b,this.atlasUniform.value=b.texture}get atlas(){return this._atlas}setQuality(b){this.quality=b,this.pixelRatio=b==="high"?Math.min(devicePixelRatio,1.75):b==="low"?.8:Math.min(devicePixelRatio,1.15),this.shadowSize=b==="high"?4096:b==="low"?1024:2048,this.engine.setPixelRatio(this.pixelRatio),this.createShadow(),this.resize()}createShadow(){let b=this.sunLight,E=b.shadow;b.position.set(-3+this.sun[0]*230,this.sun[1]*230,26+this.sun[2]*230),b.target.position.set(-3,0,26),b.color.setRGB(...this.sunColor),b.intensity=this.sunPower,Object.assign(E.camera,{left:-108,right:108,top:108,bottom:-108,near:1,far:500}),E.camera.updateProjectionMatrix(),E.bias=-15e-5,E.normalBias=216/this.shadowSize*1.35,E.mapSize.x!==this.shadowSize&&(E.map?.dispose(),E.map=null,E.mapSize.set(this.shadowSize,this.shadowSize)),this.shadowDirty=!0}resize(){let b=Math.max(1,this.canvas.clientWidth),E=Math.max(1,this.canvas.clientHeight);b===this.targetSize[0]&&E===this.targetSize[1]&&this.engine.getPixelRatio()===this.pixelRatio||(this.targetSize=[b,E],this.engine.setSize(b,E,!1))}render(b=0){if(!this.atlas)return;this.time=b,this.timeUniform.value=b,this.resize();let E=this.camera,y=this.threeCamera;y.position.fromArray(E.eye),y.up.set(0,1,0),y.lookAt(new de(...E.target)),y.fov=E.fov*180/Math.PI,y.aspect=this.canvas.clientWidth/this.canvas.clientHeight,y.near=E.near,y.far=E.far,y.updateProjectionMatrix(),y.updateMatrixWorld(),this.vp=new Ft().multiplyMatrices(y.projectionMatrix,y.matrixWorldInverse).elements,this.invVp=new Ft().fromArray(this.vp).invert().elements,this.skyUniforms.uInvVP.value.fromArray(this.invVp),this.skyUniforms.uEye.value.fromArray(E.eye),this.skyUniforms.uSun.value.fromArray(this.sun),this.engine.toneMappingExposure=this.exposure,(this.shadowDirty||b-this.shadowAge>.45)&&(this.engine.shadowMap.needsUpdate=!0,this.shadowDirty=!1,this.shadowAge=b),this.engine.render(this.scene,y),this.stats.draws=this.engine.info.render.calls,this.stats.triangles=this.engine.info.render.triangles,this.frameCount++;let T=performance.now();T-this.fpsStamp>1500&&(this.stats.fps=Math.round(this.frameCount*1e3/(T-this.fpsStamp)),this.frameCount=0,this.fpsStamp=T)}project(b){if(!this.vp)return null;let E=this.vp,y=n.transform(E,b),T=E[3]*b[0]+E[7]*b[1]+E[11]*b[2]+E[15];return T<=0?null:{x:(y[0]/T*.5+.5)*this.canvas.clientWidth,y:(-y[1]/T*.5+.5)*this.canvas.clientHeight,z:y[2]/T}}groundPoint(b,E){if(!this.invVp)return null;let y=new Nr;return y.setFromCamera(new Rt(b/this.canvas.clientWidth*2-1,1-E/this.canvas.clientHeight*2),this.threeCamera),y.ray.intersectPlane(new Hn(new de(0,1,0),0),new de)?.toArray()||null}}return{V:t,M:n,Geometry:a,Mesh:L,Renderer:S,Atlas:c,material:l,color:s,rng:r,clamp:e,TAU:i,wrap:h}})();window.FestaScenery={height(i,e){let t=(c,h,m,g,f)=>{let v=Math.hypot((i-c)/m,(e-h)/g);return v<1?f*Math.pow(Math.cos(v*Math.PI/2),2):0},n=Math.max(t(112,-4,49,100,25),t(130,82,65,84,22),t(-113,7,41,40,20),t(-39,-103,63,47,15),t(8,-107,45,48,20),t(53,-105,49,46,16));if(i<60.8||i>=103.2||e<=15.08||e>=96.08)return n;let s=c=>(c=Math.max(0,Math.min(1,c)),c*c*(3-2*c)),r=s((e-15.08)/12)*(1-s((e-80.08)/16)),l=s((i-75.2)/28),a=3.7+(Math.max(n,3.7)-3.7)*l;return n+(a-n)*r},textures(i,e){let t=i.layers[3],n=t.getContext("2d"),s=t.width,r=e(8401),l=n.createImageData(s,s);for(let a=0;a<s;a++)for(let c=0;c<s;c++){let h=Math.sin(c/s*Math.PI*4+.5)*Math.cos(a/s*Math.PI*6)*1.7,m=(r()-.5)*9+h,g=(a*s+c)*4;l.data[g]=241+m,l.data[g+1]=239+m,l.data[g+2]=229+m,l.data[g+3]=255}n.putImageData(l,0,0);for(let a of[7,8]){let c=i.layers[a].getContext("2d"),h=e(301+a);c.clearRect(0,0,s,s);for(let m=0;m<1700;m++){let g=h()*Math.PI*2,f=Math.sqrt(h()),v=.5+Math.cos(g)*f*.45,M=.5+Math.sin(g)*f*.42;if(f>.84&&h()>.52)continue;let L=(1-M)*12+h()*17,S=a===7?76+h()*30:18+h()*24;c.fillStyle=`hsl(${S},${a===7?24+h()*22:38+h()*20}%,${16+L}%)`,c.beginPath(),c.ellipse(v*s,M*s,3+h()*7,2+h()*4,h()*6.28,0,6.28),c.fill()}}return i.add("Window reflection",(a,c)=>{let h=a.createLinearGradient(0,0,0,c);h.addColorStop(0,"#9baeb3"),h.addColorStop(.46,"#667d81"),h.addColorStop(.49,"#536562"),h.addColorStop(1,"#364743"),a.fillStyle=h,a.fillRect(0,0,c,c);let m=e(721);for(let g=0;g<150;g++){let f=m()*c,v=c*(.48+m()*.5);a.fillStyle=`rgba(31,48,35,${.025+m()*.1})`,a.beginPath(),a.ellipse(f,v,5+m()*29,3+m()*16,0,0,6.28),a.fill()}a.fillStyle="rgba(218,228,226,.10)",a.fillRect(c*.23,0,c*.03,c),a.fillRect(c*.75,0,c*.018,c)})},build({details:i,green:e,distant:t,signGeo:n,childSign:s,p:r,m:l,mat:a,M:c,rng:h,TAU:m,ga:g,gb:f,gc:v,gw:M,gd:L,gymRise:S=.45}){let d=h(70031),b=(F,le)=>F+(le-F)*d(),E=a("#dcdccf",3,.88),y=a("#c7cbc3",3,.87),T=r(425.28,478),w=r(470,478),N=5.25,_=3.25,D=g[0]-1.2,V=2.4,q=w[1]+1.2,A=f[1]+1.6,J=(F,le,ye=1.05)=>{i.cylinder([F[0],F[1]+ye,F[2]],[le[0],le[1]+ye,le[2]],.028,.028,E,7);let Ee=Math.max(1,Math.ceil(Math.hypot(le[0]-F[0],le[2]-F[2])/.19));for(let C=0;C<=Ee;C++){let G=C/Ee,Y=F[0]+(le[0]-F[0])*G,j=F[1]+(le[1]-F[1])*G,re=F[2]+(le[2]-F[2])*G;i.cylinder([Y,j,re],[Y,j+ye,re],.016,.016,E,6)}},H=(F,le,ye,Ee,C)=>i.box((F+le)/2,C-.14,(ye+Ee)/2,le-F,.28,Ee-ye,E);H(T[0],g[0],w[1]-1.2,q,N),J([T[0],N,w[1]-1.2],[g[0],N,w[1]-1.2]),J([T[0],N,q],[g[0]-V,N,q]);for(let F of[T[0]+.22,g[0]-2.65])i.box(F,N/2-.14,w[1],.38,N-.28,.42,E);let $=12,me=(A-q)/$,fe=(N-_)/$;for(let F=0;F<$;F++){let le=q+F*me,ye=le+me,Ee=N-F*fe;i.box(D,Ee-fe/2-.08,(le+ye)/2,V,fe+.16,me+.015,E)}for(let F of[g[0]-V,g[0]])i.quad([F,N-.28,q],[F,_-.28,A],[F,_-.48,A],[F,N-.48,q],E),J([F,N,q],[F,_,A]);H(g[0]-V,f[0],f[1],A+1.3,_),J([g[0]-V,_,A+1.3],[v[0]+4.3,_,A+1.3]),J([g[0]-V,_,A],[g[0]-V,_,A+1.3]);for(let F of[g[0]-V+.25,g[0]+2.2,v[0]+4.4,f[0]-.25])i.box(F,(_-.28)/2,A+.99,.42,_-.28,.45,E);i.box((v[0]+4.3+f[0])/2,_+.46,A+1.17,f[0]-v[0]-4.3,.92,.22,E);let be=a("#778885",0,.48,.08),ce=a("#c3c5b9",0,.63,.18),te=a("#414c4e",0,.48,.62);for(let F of[-6.8,-2.3,2.3,6.8])i.box(v[0]+F,6,f[1]+.2,1.35,2.4,.09,ce),i.box(v[0]+F,5.96,f[1]+.26,1.21,2.22,.03,be),i.box(v[0]+F,6.75,f[1]+.29,1.22,.67,.05,E),i.box(v[0]+F,5.52,f[1]+.3,1.22,.045,.04,ce);let P=g[0]+M*77/309,Xe=g[0]+M*156/309,Ge=g[0]+M*202/309,at=g[0]+M*233/309;for(let[F,le]of[[g[0]+2.75,1.5],[Xe+1.3,1],[Ge+1.075,.95],[at+2.45,1.5]])i.box(F,1.93,f[1]+.24,le+.12,1.62,.065,te),i.box(F,1.93,f[1]+.28,le-.08,1.45,.025,be),i.box(F,1.93,f[1]+.31,.045,1.51,.045,te),i.box(F,1.93,f[1]+.32,le+.15,.045,.045,te);let ee=g[0]+M*.38,_t=f[1]+.27;for(let F of[-1,1]){let le=ee+F*1.65;i.box(le,1.45,_t+.055,1.04,2.35,.035,be),i.box(le,1.06,_t+.09,1.1,.045,.06,te),i.box(le,2.49,_t+.09,1.1,.045,.06,te),i.box(ee+F*2.2,1.54,_t+.09,.055,2.76,.055,te),i.box(ee+F*1.1,1.54,_t+.09,.055,2.76,.055,te),i.box(ee+F*1.1,1.45,_t-.5,.035,2.35,1.04,be),i.box(ee+F*1.1,1.06,_t-.5,.05,.045,1.08,te)}i.box(ee,2.91,_t+.09,4.5,.06,.06,te),i.box(ee,.15,f[1]+1.75,5.6,.3,3,E);for(let F=0;F<3;F++)i.box(ee,.025+F*.05,f[1]+4.06-F*.38,5.6,.05+F*.1,.4,E);let _e=a("#83b4c2",0,.54,.12);for(let[F,le]of[[335,344],[421,433]]){let ye=r(470,F)[1],Ee=r(470,le)[1],C=(ye+Ee)/2,G=Ee-ye;for(let Y=0;Y<3;Y++){let j=(Y+1)*S/3;i.box(g[0]-1.38+Y*.46,j/2,C,.48,j,G+.24,E)}i.box(g[0]-.11,S-.04,C,.54,.08,G+.24,E);for(let Y of[ye+.12,Ee-.12])i.box(g[0]-.76,S+1.12,Y,1.32,2.24,.075,_e),i.box(g[0]-.76,S+2.25,Y,1.36,.045,.09,ce)}let ge=[[303,334],[345,420],[434,503]];for(let F of[-1,1])for(let[le,ye]of ge){let Ee=r(470,le)[1]+.15,C=r(470,ye)[1]-.15,G=Math.max(1,Math.ceil((C-Ee)/5.4));for(let Y=0;Y<G;Y++){let j=Ee+(C-Ee)*Y/G+.18,re=Ee+(C-Ee)*(Y+1)/G-.18,we=v[0]+F*(M/2+.26),ie=.56,We=4.04;for(let gt of[!1,!0]){let et=gt?We:ie,Pe=gt?ie:We,Ke=Pe-et,wt=re-j,It=Math.hypot(Ke,wt),Vt=-wt/It*.065,cn=Ke/It*.065;i.quad([we,et+Vt,j+cn],[we,et-Vt,j-cn],[we,Pe-Vt,re-cn],[we,Pe+Vt,re+cn],E,It,.13);for(let[dn,yi]of[[et,j],[Pe,re]]){i.box(we,dn,yi,.045,.25,.25,E);for(let ds of[-.065,.065])i.cylinder([we+F*.022,dn,yi+ds],[we+F*.04,dn,yi+ds],.017,.017,a("#abae9e",0,.65,.1),6)}}}}for(let F of[-1,1])for(let[le,ye]of ge){let Ee=v[0]+F*(M/2+.185),C=r(470,le)[1],G=r(470,ye)[1];for(let Y=C+.8;Y<G;Y+=2.65)i.box(Ee,2.12,Y,.012,3.78,.014,a("#b9baae",0,.96))}for(let F of[-1,1]){let le=v[0]+F*(M/2+.31);i.cylinder([le,8.66,g[1]],[le,8.66,f[1]],.075,.075,E,10);for(let ye of[g[1]+.32,g[1]+16.5,f[1]-.35])i.cylinder([le,.25,ye],[le,8.66,ye],.045,.045,E,8);for(let[ye,Ee]of ge){let C=r(470,ye)[1],G=r(470,Ee)[1];i.box(le-F*.14,.19,(C+G)/2,.08,.38,G-C,a("#94958b",3,.96))}}let qe=(F,le,ye)=>F+ye>g[0]&&F-ye<f[0]&&le+ye>g[1]&&le-ye<f[1];function ct(F,le,ye,Ee,C=1,G=82,Y=!1){if(F>55&&F<80&&le>26&&le<82)return;let j=window.FestaScenery.height(F,le);if(F<-52&&F>-88&&le<-12&&le>-70&&(ye=Math.min(ye,6.2)),F>-74&&F<-58&&le>-11&&le<10)return;let re=h(Ee);for(let we=0;we<G;we++){let ie=re()*m,We=Math.sqrt(re())*ye*.46*C,gt=ye*(.13+re()*.77)-We*.09,et=F+Math.cos(ie)*We,Pe=le+Math.sin(ie)*We,Ke=ye*(.21+re()*.14),wt=re()*m;if(qe(et,Pe,Ke*.71))continue;let It=Y?a(we%4?"#a0704d":"#855841",8,.98,0,0,.92):a(we%7===0?"#879c75":we%3?"#526b48":"#344f39",7,.98,0,0,.92);e.scope(c.compose(et,j+gt,Pe,wt),()=>{e.quad([-Ke/2,-Ke/2,0],[-Ke/2,Ke/2,0],[Ke/2,Ke/2,0],[Ke/2,-Ke/2,0],It),e.quad([-Ke/2,0,-Ke/2],[-Ke/2,0,Ke/2],[Ke/2,0,Ke/2],[Ke/2,0,-Ke/2],It)})}for(let we=0;we<12;we++){let ie=we*m/12,We=F+Math.cos(ie)*ye*.25*C,gt=le+Math.sin(ie)*ye*.25*C,et=ye*(.25+re()*.08),Pe=Y?a("#75523b",8,.98):a(we%3?"#3c5a40":"#60734b",7,.98);qe(We,gt,et*.71)||e.scope(c.compose(We,j+ye*.21,gt,ie),()=>e.quad([-et/2,-et/2,0],[-et/2,et/2,0],[et/2,et/2,0],[et/2,-et/2,0],Pe))}}let Fe=f[1]+3.2,Ye=a("#94705a",3,.98),rn=a("#4c4835",1,1),pt=h(2701);for(let[F,le,ye]of[[g[0]+3,4.6,2.9],[f[0]-4.7,8.4,3.6]]){i.box(F,.24,Fe,le,.48,2.1,Ye),i.plane(F,.486,Fe,le-.35,1.7,rn);for(let Ee=F-le/2+.2;Ee<F+le/2;Ee+=.42)for(let C of[.12,.35])i.box(Ee+(C>.2?.2:0),C,Fe+1.055,.012,.2,.015,a("#c3ac8a"));for(let Ee=0;Ee<Math.round(le*36);Ee++){let C=F+(pt()-.5)*(le-.6),G=.5+pt()*ye,Y=Fe+(pt()-.5)*1.4,j=.52+pt()*.4,re=a(Ee%5?"#6b835a":"#879669",7,1);e.scope(c.compose(C,G,Y,pt()*m),()=>{e.quad([-j/2,-j/2,0],[-j/2,j/2,0],[j/2,j/2,0],[j/2,-j/2,0],re),e.quad([-j/2,0,-j/2],[-j/2,0,j/2],[j/2,0,j/2],[j/2,0,-j/2],re)})}for(let Ee=F-le/2+.3;Ee<F+le/2;Ee+=.61){let C=Fe+1.4;i.box(Ee,.13,C,.43,.26,.33,a("#a88767",3,.94));for(let G=0;G<3;G++)i.sphere(Ee+(G-1)*.11,.3,C,.095,.11,.11,a(G%2?"#989b62":"#557549"),8,5)}}let ot=Number((f[0]+3.6).toFixed(2)),bt=Number((f[1]-20).toFixed(2)),ht=Number((f[1]+33).toFixed(2)),yt=3.6,Kt=a("#92968a",3,.99),zt=a("#b0b3a6",3,.94);i.quad([ot-.35,0,bt],[ot-.35,0,ht],[ot,yt,ht],[ot,yt,bt],Kt,18,3),i.box(ot+.08,yt+.08,(bt+ht)/2,.64,.16,ht-bt,zt);for(let F=bt+.3;F<ht;F+=2.2)i.cylinder([ot+.1,yt+.12,F],[ot+.1,yt+1.16,F],.022,.022,ce,6),i.box(ot-.28,.65,F,.025,.1,.1,a("#454d43"));for(let F of[yt+.3,yt+1.12])i.cylinder([ot+.1,F,bt],[ot+.1,F,ht],.022,.022,ce,6);for(let F=bt;F<ht;F+=5.4)i.cylinder([ot-.34,.05,F],[ot-.01,yt-.02,F],.012,.012,a("#777e72"),5);{let F=ot+6.3,le=f[1]+1.4,ye=8.8,Ee=11,C=6.6;t.box(F,yt+C/2,le,ye,C,Ee,a("#d8d2be",3,.96));let G=a("#6f6860",10,.9),Y=yt+C;for(let j of[-1,1])t.quad([F,Y+1.7,le-Ee/2-.4],[F,Y+1.7,le+Ee/2+.4],[F+j*(ye/2+.4),Y,le+Ee/2+.4],[F+j*(ye/2+.4),Y,le-Ee/2-.4],G,3,4);for(let j of[le-Ee/2,le+Ee/2])t.tri([F-ye/2,Y,j],[F,Y+1.7,j],[F+ye/2,Y,j],E);for(let j of[yt+1.65,yt+4.8])for(let re of[-3.6,0,3.6])i.box(F-ye/2-.025,j,le+re,.05,1.28,1.4,a("#5d625a")),i.box(F-ye/2-.06,j,le+re,.035,1.1,1.22,be),i.box(F-ye/2-.087,j,le+re,.04,1.12,.035,ce)}let mt=window.FestaScenery.height,Ot=[...new Set([...Array.from({length:89},(F,le)=>-156+le*4),60.8,75.2,103.2])].sort((F,le)=>F-le),X=[...new Set([...Array.from({length:72},(F,le)=>-112+le*4),15.08,bt,ht,96.08])].sort((F,le)=>F-le);for(let F=0;F<Ot.length-1;F++)for(let le=0;le<X.length-1;le++){let ye=Ot[F],Ee=X[le],C=Ot[F+1],G=X[le+1];if(ye<ot&&C===ot&&Ee>=bt&&G<=ht)continue;let Y=[[ye,Ee],[ye,G],[C,G],[C,Ee]].map(([we,ie])=>[we,mt(we,ie)-.1,ie]);if(Y.every(we=>we[1]<0))continue;let j=a("#ffffff",2,.98),re=([we,ie,We])=>{let gt=we===ot&&We>=bt&&We<=ht?2*(mt(we,We)-mt(we+.1,We)):mt(we-.1,We)-mt(we+.1,We),et=mt(we,We-.1)-mt(we,We+.1),Pe=Math.hypot(gt,.2,et);return[gt/Pe,.2/Pe,et/Pe]};for(let we of[[0,1,2],[0,2,3]])t.tri(...we.map(ie=>Y[ie]),j,we.map(ie=>[(Y[ie][0]+550)*460/1100,(Y[ie][2]+550)*460/1100]),we.map(ie=>re(Y[ie])))}for(let F=-149;F<188;F+=6)for(let le=-99;le<162;le+=6){if(mt(F,le)<2.3)continue;let ye=h(Math.round((F+200)*800+le+200));ct(F+(ye()-.5)*2,le+(ye()-.5)*2,4.8+ye()*2.1,Math.round((F+200)*801+le+201),1.5,30)}let jt=a("#7a895a",7,.98),At=a("#9ca469",7,.98),O=a("#625c46",1,1);function p(F,le,ye,Ee,C,G){let Y=h(G);for(let j=0;j<Math.ceil(ye*C*24);j++){let re=Y()*m,we=Math.sqrt(Y()),ie=F+Math.cos(re)*ye*.48*we,We=le+Math.sin(re)*C*.48*we,gt=.12+Ee*(.2+.8*Math.sqrt(1-we*we))*(.72+Y()*.28),et=.24+Y()*.22;e.scope(c.compose(ie,gt,We,Y()*m),()=>{e.quad([-et/2,-et/2,0],[-et/2,et/2,0],[et/2,et/2,0],[et/2,-et/2,0],j%5?jt:At),e.quad([-et/2,0,-et/2],[-et/2,0,et/2],[et/2,0,et/2],[et/2,0,-et/2],jt)})}}for(let[F,le,ye,Ee,C]of[[135,429,5.4,.8,1.15],[158,429,3.6,.65,1.1],[177,429,2.3,.46,1],[279,430,4.1,.58,.85]]){let G=r(F,le);i.plane(G[0],.035,G[1],ye,C,O);for(let Y of[-1,1])i.box(G[0],.09,G[1]+Y*C/2,ye,.18,.1,a("#a3a295",3,.97));for(let Y of[-1,1])i.box(G[0]+Y*ye/2,.09,G[1],.1,.18,C,a("#a3a295",3,.97));p(G[0],G[1],ye-.15,Ee,C-.12,F*101)}for(let[F,le]of[[257,11],[287,7]])for(let ye=0;ye<le;ye++){let Ee=r(F+ye*2.2,434),C=.39,G=.26,Y=a(ye%3?"#d1c6ac":"#987554",3,.95);i.box(Ee[0],G/2,Ee[1],C,G,.28,Y),i.plane(Ee[0],G+.008,Ee[1],C-.045,.23,O);for(let j of[-1,1])i.box(Ee[0],G-.01,Ee[1]+j*.14,C+.035,.055,.035,Y);for(let j=0;j<3;j++){let re=Ee[0]+(j-1)*.1;i.cylinder([re,G,Ee[1]],[re,G+.16+ye%3*.025,Ee[1]],.007,.004,a("#657352"),5),e.scope(c.compose(re,G+.14,Ee[1],ye+j),()=>{e.quad([-.09,-.03,0],[-.06,.11,0],[.06,.11,0],[.09,-.03,0],jt),e.quad([0,-.03,-.09],[0,.11,-.06],[0,.11,.06],[0,-.03,.09],At)})}}for(let[F,le,ye,Ee]of[[54,375,3.1,1.8],[69,375,2.8,1.8]]){let C=r(F,le),G=2.05,Y=a("#b7b9af",3,.95),j=a("#8f978e",0,.8,.15);i.box(C[0],G/2,C[1],ye,G,Ee,Y),i.box(C[0],G+.055,C[1],ye+.18,.11,Ee+.16,j);for(let re of[-1,1])i.box(C[0]+re*ye*.23,G*.48,C[1]-Ee/2-.025,ye*.43,G*.9,.035,a("#9da79e",3,.92)),i.box(C[0]+re*.075,1.04,C[1]-Ee/2-.06,.025,.19,.045,j)}p(r(60,367)[0],r(60,367)[1],3.2,1.15,1.3,92160);let W=-66,z=-1,ae=11.2,Te=15.6,Se=6.3,he=a("#d8d8c9",3,.96);t.box(W,Se/2,z,ae,Se,Te,he);let xe=W+ae/2;t.quad([W-ae/2-.35,Se+.25,z-Te/2-.35],[W-ae/2-.35,Se+.25,z+Te/2+.35],[xe+.35,Se+.05,z+Te/2+.35],[xe+.35,Se+.05,z-Te/2-.35],a("#747d7a",10,.85),4,4),t.box(xe+.2,Se,z,.12,.19,Te+.7,he);for(let F of[-5.7,-2.7,0,3,5.7]){let le=F===0?.65:1.45;i.box(xe+.03,4.63,z+F,.055,1.38,le,ce),i.box(xe+.064,4.63,z+F,.02,1.24,le-.13,be),i.box(xe+.086,4.63,z+F,.03,1.26,.035,ce)}for(let F of[-4.5,4.5])i.box(xe+.08,1.28,z+F,.12,2.5,1.37,a("#adb5ac",3,.85)),i.box(xe+.15,1.78,z+F,.035,.77,.92,be),i.box(xe+.53,2.65,z+F,1.1,.12,2.05,a("#8e9994",10,.9)),i.box(xe+.85,.1,z+F,1.5,.2,2.1,E),i.sphere(xe+.14,2.77,z+F-1.3,.055,.11,.11,a("#eeeadd"),10,6);i.quad([xe,.03,z-7.5],[xe+.95,.03,z-7.5],[xe+.95,.2,z+6],[xe,.2,z+6],E,1,6),J([xe+1.02,.03,z-7.5],[xe+1.02,.2,z+6],.83),n&&s!==void 0&&n.scope(c.compose(xe+.18,0,z,Math.PI/2),()=>n.sign(0,2.65,0,5.1,.95,s));let Re=-83,ze=-22,De=mt(Re,ze),Oe=29,Qe=a("#a7aca5",0,.68,.25);for(let F=0;F<8;F++){let le=De+F*Oe/8,ye=De+(F+1)*Oe/8,Ee=2.65-F*.235,C=Ee-.235;for(let G of[-1,1])for(let Y of[-1,1])t.cylinder([Re+G*Ee,le,ze+Y*Ee],[Re+G*C,ye,ze+Y*C],.07,.05,Qe,6),t.cylinder([Re+G*Ee,le,ze+Y*Ee],[Re-G*C,ye,ze+Y*C],.026,.026,Qe,5),t.cylinder([Re+G*Ee,le,ze+Y*Ee],[Re+G*C,ye,ze-Y*C],.026,.026,Qe,5)}for(let F of[De+20.5,De+24.8,De+29]){t.cylinder([Re-5,F,ze],[Re+5,F,ze],.075,.075,Qe,6);for(let le of[-4.7,4.7]){t.cylinder([Re+le,F,ze],[Re+le,F-.9,ze],.1,.1,a("#a6ada0"),8);let ye=r(322,56),Ee=[];for(let C=0;C<=28;C++){let G=C/28;Ee.push([Re+le+(ye[0]-Re)*G,F-.9+(26-(De+29))*G-3.1*Math.sin(G*Math.PI),ze+(ye[1]-ze)*G])}t.tube(Ee,.028,a("#626963"),5)}}let it=[[103,69],[131,47],[202,40],[331,44],[479,94],[574,146],[583,632],[592,679],[470,739],[101,780],[71,735],[21,525],[30,339],[57,250],[63,145]],lt=0;for(let F=0;F<it.length-1;F++){if(F===7||F===8||F===9)continue;let le=r(...it[F]),ye=r(...it[F+1]),Ee=ye[0]-le[0],C=ye[1]-le[1],G=Math.hypot(Ee,C),Y=C/G,j=-Ee/G;for(let re=2;re<G;re+=5.7){let we=re/G,ie=le[0]+Ee*we,We=le[1]+C*we;ct(ie+Y*7.6,We+j*7.6,b(7,11.3),1e4+lt++),(F<5||F>10)&&ct(ie+Y*14.6+Ee/G*2.4,We+j*14.6+C/G*2.4,b(8.2,13),1e4+lt++,1.13),(F<6||F>10)&&ct(ie+Y*2,We+j*2,b(2.2,3.2),1e4+lt++,1.8)}}t.scope(c.compose(-106,5,-41,Math.PI/2),()=>{let F=a("#c6c8bf",3,.92),le=a("#b4c2be",0,.76,.05),ye=a("#46545a",0,.88),Ee=a("#53696d",0,.37,.08),C=69,G=12,Y=5,j=2.85;t.box(0,-2.5,0,C+1,5,G+2,a("#8a8c7b",3,.98)),t.box(0,Y*j/2,0,C,Y*j,G,F);for(let re=0;re<Y;re++){let we=re*j;t.box(0,we+1.4,G/2+.07,C-.6,2.42,.12,ye),t.box(0,we+.1,G/2+1.02,C+.7,.2,2.15,F),t.box(0,we+.79,G/2+1.98,C,.98,.1,le),t.box(0,we+1.33,G/2+1.99,C,.06,.13,a("#d3d9d5",0,.45,.28));for(let ie=-C/2+1.6;ie<C/2;ie+=3.45)t.box(ie,we+1.4,G/2+.16,2.1,2.25,.03,Ee),t.box(ie+.99,we+1.4,G/2+.18,.035,2.25,.03,l.metal),t.box(ie+1.52,we+1.4,G/2+1.06,.1,2.58,1.85,F)}for(let re of[-C/2,-C*.18,C*.18,C/2])t.box(re,Y*j/2,G/2+1.08,.33,Y*j,2.3,F);t.box(0,Y*j+.13,0,C+1.2,.26,G+4.2,F)});for(let F=0;F<13;F++){let le=-74+F*5.6,ye=-84+F%3*2.7;ct(ye,le,7.5+F%4*.9,32140+F,1.1,58,F===2||F===5||F===9)}let Z=a("#338db0",0,.63,.08),Ne=a("#ac4c39",0,.68),ve=a("#dbb548",0,.6),Ie=r(411,88);i.scope(c.compose(Ie[0],0,Ie[1],.18),()=>{for(let F of[-.55,.55])for(let le of[-.55,.55])i.cylinder([F,.02,le],[F,3.15,le],.045,.045,Z,8);i.box(0,1.94,0,1.22,.09,1.2,a("#899892",0,.7));for(let F of[-.61,.61])i.cylinder([F,2,-.55],[F,3.03,-.55],.035,.035,Ne,8),i.cylinder([F,3.03,-.55],[F,3.03,.55],.035,.035,Ne,8),i.quad([F*.72,1.96,.55],[F*.72,.16,3.45],[F*.72,.34,3.47],[F*.72,2.16,.55],ve,3,1);i.quad([-.44,1.97,.55],[.44,1.97,.55],[.44,.16,3.45],[-.44,.16,3.45],ve,1,3);for(let F=.28;F<1.97;F+=.27)i.cylinder([-.47,F,-.69],[.47,F,-.69],.026,.026,l.metal,7)});let Be=r(483,126);for(let F=0;F<5;F++){let le=Be[0]+F*1.5,ye=1+F*.27;for(let Ee of[-.65,.65])i.cylinder([le+Ee,0,Be[1]],[le+Ee,ye,Be[1]],.032,.032,Z,8);i.cylinder([le-.65,ye,Be[1]],[le+.65,ye,Be[1]],.028,.028,l.metal,8)}let Me=r(365,75);i.cylinder([Me[0],0,Me[1]],[Me[0],3.5,Me[1]],.075,.075,a("#aab4ad",0,.65,.2),10),i.box(Me[0],3.45,Me[1]+.18,1.8,1.05,.07,a("#e7e7da",3,.9)),i.box(Me[0],3.32,Me[1]+.23,.65,.49,.012,Ne),i.box(Me[0],3.32,Me[1]+.24,.58,.42,.012,a("#e7e7da"));let nt=[];for(let F=0;F<=24;F++){let le=F/24*m;nt.push([Me[0]+Math.sin(le)*.23,3.02,Me[1]+.56+Math.cos(le)*.23])}i.tube(nt,.016,Ne,6)}};window.buildFestaWorld=async function(i,e=()=>{}){let{V:t,M:n,Geometry:s,Mesh:r,Atlas:l,material:a,color:c,rng:h,clamp:m,TAU:g}=FestaGL,f=FESTA_DATA,v=h(9212026),M=(o,u)=>o+(u-o)*v(),L=(o,u)=>[(o-320)*.22,(u-290)*.22],S=(o,u,x=0)=>{let R=L(o,u);return[R[0],x,R[1]]},d=new l(512),b=o=>new Promise((u,x)=>{let R=new Image;R.onload=()=>u(R),R.onerror=()=>x(new Error("内蔵テクスチャを読み込めません。")),R.src=o}),E=await b(FESTA_ASSETS.gravel),y=await b(FESTA_ASSETS.grass);e(.08,"地面と建物の素材を準備しています"),d.add("white",(o,u)=>{o.fillStyle="#fff",o.fillRect(0,0,u,u)});function T(o,u,x,R=.25){return d.add(o,(U,B)=>{U.drawImage(u,0,0,B,B);let k=U.getImageData(0,0,B,B),ne=c(x);for(let Q=0;Q<k.data.length;Q+=4){let ue=k.data[Q]/255,Ae=.82+ue*R;for(let Ce=0;Ce<3;Ce++)k.data[Q+Ce]=m(ne[Ce]*255*Ae,0,255);k.data[Q+3]=255}U.putImageData(k,0,0)})}T("soil",E,"#a19580",.32),T("grass",y,"#727b4d",.55),d.add("concrete",(o,u)=>{o.fillStyle="#efeee6",o.fillRect(0,0,u,u);let x=o.getImageData(0,0,u,u);for(let R=0;R<x.data.length;R+=4){let U=M(-12,6);for(let B=0;B<3;B++)x.data[R+B]+=U}o.putImageData(x,0,0),o.strokeStyle="rgba(119,119,107,.13)",o.lineWidth=1,o.beginPath(),o.moveTo(0,120),o.lineTo(u,120),o.stroke()}),T("asphalt",E,"#555754",.6),d.add("wood",(o,u)=>{o.fillStyle="#b78a57",o.fillRect(0,0,u,u);for(let x=0;x<8;x++){let R=x*64;o.fillStyle=`hsl(${31+M(-3,3)},${34+M(-5,5)}%,${55+M(-6,6)}%)`,o.fillRect(R,0,63,u);for(let B=0;B<35;B++){let k=R+M(1,62);o.strokeStyle=`rgba(73,44,18,${M(.04,.17)})`,o.lineWidth=M(.3,1.3),o.beginPath();for(let ne=0;ne<=u;ne+=16)o.lineTo(k+Math.sin(ne/72+B)*M(.2,1.4),ne);o.stroke()}o.fillStyle="rgba(43,32,24,.20)",o.fillRect(R,0,1,u);let U=x%3*163;o.fillRect(R,U,64,1)}}),d.add("fabric",(o,u)=>{o.fillStyle="#f7f6f0",o.fillRect(0,0,u,u);for(let x=0;x<u;x+=3)o.strokeStyle=x%6?"rgba(98,99,84,.05)":"rgba(255,255,255,.3)",o.beginPath(),o.moveTo(x,0),o.lineTo(x,u),o.stroke(),o.beginPath(),o.moveTo(0,x),o.lineTo(u,x),o.stroke();o.strokeStyle="rgba(154,155,144,.2)",o.lineWidth=2,o.strokeRect(8,8,u-16,u-16)});function w(o=!1){d.add(o?"autumn":"leaf",(u,x)=>{u.clearRect(0,0,x,x);for(let R=0;R<220;R++){let U=M(0,g),B=Math.sqrt(v())*228,k=x/2+Math.cos(U)*B,ne=x/2+Math.sin(U)*B;u.strokeStyle=o?"#6f6541":"#526445",u.lineWidth=1.8,u.beginPath(),u.moveTo(x/2,x*.7),u.quadraticCurveTo(x/2+(k-x/2)*.65,ne+40,k,ne),u.stroke();let Q=o?M(12,59):M(72,110);u.fillStyle=`hsl(${Q},${M(27,45)}%,${M(27,48)}%)`,u.beginPath(),u.ellipse(k,ne,M(6,11),M(12,23),U+.5,0,g),u.fill(),u.strokeStyle="rgba(208,214,130,.3)",u.lineWidth=.7,u.beginPath(),u.moveTo(k-4,ne-10),u.lineTo(k+4,ne+10),u.stroke()}})}w(!1),w(!0),d.add("bark",(o,u)=>{o.fillStyle="#807565",o.fillRect(0,0,u,u);for(let x=0;x<650;x++){o.strokeStyle=`rgba(${Math.floor(M(30,70))},${Math.floor(M(25,60))},${Math.floor(M(20,50))},${M(.1,.6)})`,o.lineWidth=M(.5,5),o.beginPath();let R=M(0,u),U=M(0,u);o.moveTo(R,U),o.lineTo(R+M(-9,9),U+M(14,120)),o.stroke()}}),d.add("roof",(o,u)=>{o.fillStyle="#a6b2b3",o.fillRect(0,0,u,u);for(let x=0;x<u;x+=32)o.fillStyle="#7c8d91",o.fillRect(x,0,3,u),o.fillStyle="#c7cecd",o.fillRect(x+3,0,2,u)}),d.add("net",(o,u)=>{o.clearRect(0,0,u,u),o.strokeStyle="#b1b4a7",o.lineWidth=3;for(let x=-u;x<u*2;x+=64)o.beginPath(),o.moveTo(x,0),o.lineTo(x+u,u),o.stroke(),o.beginPath(),o.moveTo(x,u),o.lineTo(x+u,0),o.stroke()}),d.add("tire",(o,u)=>{o.fillStyle="#2b2b2a",o.fillRect(0,0,u,u),o.strokeStyle="#484948",o.lineWidth=5;for(let x=0;x<u;x+=27)o.beginPath(),o.moveTo(0,x),o.lineTo(u*.5,x+15),o.lineTo(u,x),o.stroke()}),d.add("cloth",(o,u)=>{o.fillStyle="#eeeadf",o.fillRect(0,0,u,u),o.fillStyle="rgba(83,117,120,.12)";for(let x=0;x<u;x+=40)o.fillRect(x,0,18,u),o.fillRect(0,x,u,18)});let N={F:"#a64c35",S:"#385e76",T:"#4e6c43",P:"#83503e",M:"#c39343",I:"#27595c"},_={};for(let o of[...f.records.filter(u=>!["unplaced","performer","unconfirmed","workshop"].includes(u.kind)),...f.locations])_[o.id]={banner:d.banner(o.id.startsWith("F-")||o.id.startsWith("S-")||o.id.startsWith("T-")?o.id:{HQ:"INFO",GYM:"STAGE",MOBILITY:"RIDE",MEET:"REST",OUTSTAGE:"STAGE",GATE_MAIN:"WELCOME",GATE_WEST:"WELCOME",WC:"WC",EAT2:"REST"}[o.id]||"FESTA",o.short,o.caption,N[o.category]),menu:d.sign(o.id+"-menu",o.short,o.detail,N[o.category],o.id+"   "+(o.status||"予定"))};let D=d.banner("西鎌倉","鎌倉市立西鎌倉小学校","つながりフェスタ＠にしかま2026","#415d60"),V=d.banner("2026","つながりフェスタ＠にしかま","つながる、みつかる、すきになる","#356064"),q=d.sign("走行エリア","モビリティー",`実走路の中へは入れません。
見学はトラロープの外側から。`,"#a74d38","車両実走路"),A=d.banner("P","みんなの舞台","体育館内・開始予定","#83533c"),J=d.add("schedule",(o,u)=>{o.fillStyle="#fff9ec",o.fillRect(0,0,u,u),o.fillStyle="#5b3e32",o.font="700 29px sans-serif",o.fillText("体育館内 開始予定",24,42),o.font="17px sans-serif",o.fillText("終了時刻は未確認　／　当日変更の可能性あり",24,70),f.schedule.forEach((x,R)=>{let U=112+R*36;o.fillStyle=R%2?"#ffffff":"#f2ebde",o.fillRect(14,U-24,484,34),o.fillStyle="#83533c",o.font="700 20px sans-serif",o.fillText(x.time,23,U),o.fillStyle="#263b38";let B=18;o.font=`${B}px sans-serif`;let k=x.name;for(;o.measureText(k).width>370&&B>10;)o.font=`${--B}px sans-serif`;o.fillText(k,100,U)})}),H=d.add("Entrance panels",(o,u)=>{let x=h(451);o.fillStyle="#33363b",o.fillRect(0,0,u,u);for(let R=0;R<u;R+=5)for(let U=0;U<u;U+=12){let B=40+x()*25;o.fillStyle=`rgb(${B},${B+1},${B+5})`,o.fillRect(U+(R%10?6:0),R,10,3)}}),$=FestaScenery.textures(d,h),me=d.add("gym-floor",(o,u)=>{o.fillStyle="#aa7549",o.fillRect(0,0,u,u);for(let x=0;x<u;x+=32){o.fillStyle=`hsl(${27+M(-2,2)},${40+M(-5,5)}%,${48+M(-4,4)}%)`,o.fillRect(x+1,0,30,u),o.fillStyle="rgba(71,43,25,.24)",o.fillRect(x,0,1,u);let R=Math.floor(x/32)%4*128+32;o.fillRect(x+1,R,30,1);for(let U=0;U<9;U++)o.fillStyle=`rgba(84,51,27,${M(.025,.075)})`,o.fillRect(x+M(2,29),0,M(.35,1),u)}}),fe=d.add("gym-wall-wood",(o,u)=>{o.fillStyle="#a77b60",o.fillRect(0,0,u,u);for(let x=0;x<u;x+=26)o.fillStyle=`hsl(${24+M(-2,2)},${31+M(-4,4)}%,${47+M(-3,3)}%)`,o.fillRect(x+1,0,24,u),o.fillStyle="rgba(44,27,21,.27)",o.fillRect(x,0,1,u),o.fillStyle="rgba(227,180,128,.15)",o.fillRect(x+3,0,1,u)}),be=d.add("gym-display-board",(o,u)=>{o.fillStyle="#ecebe5",o.fillRect(0,0,u,u),o.fillStyle="#aaa9a2";for(let x=12;x<u;x+=16)for(let R=12;R<u;R+=16)o.beginPath(),o.arc(R,x,1.4,0,g),o.fill()}),ce=o=>Object.assign(a(o,$,.39,.06),{fit:!0}),te=new s,P=new s,Xe=new s,Ge=new s,at=new s,ee={dirt:a("#fff",1,.97),grass:a("#fff",2,.98),wall:a("#dedccf",3,.93),base:a("#a3aaa5",3,.9),asphalt:a("#fff",4,.95),wood:a("#fff",5,.64),metal:a("#a6b0ac",0,.3,.65),whiteMetal:a("#f1f1e8",0,.42,.24),dark:a("#273036",0,.72),glass:ce("#c1cece"),black:a("#252928",0,.6),fabric:a("#f9f9f4",6,.85),bark:a("#fff",9,.94),leaf:a("#fff",7,.88),autumn:a("#fff",8,.9),tire:a("#fff",12,.93)},_t=[],_e=[],ge=[],qe=[],ct=[],Fe=[];function Ye(o,u,x,R,U="",B=0){_t.push({x:o,z:u,w:x,d:R,id:U,r:B})}function rn(o,u,x,R,U){let B=L(o,u),k=L(x,R);Ye((B[0]+k[0])/2,(B[1]+k[1])/2,k[0]-B[0],k[1]-B[1],U)}let ot=[[103,69],[131,47],[202,40],[331,44],[479,94],[574,146],[583,632],[592,679],[470,739],[101,780],[71,735],[21,525],[30,339],[57,250],[63,145],[116,123],[95,101]].map(o=>L(...o));function bt(o,u,x){let R=!1;for(let U=0,B=x.length-1;U<x.length;B=U++){let k=x[U],ne=x[B];k[1]>u!=ne[1]>u&&o<(ne[0]-k[0])*(u-k[1])/(ne[1]-k[1])+k[0]&&(R=!R)}return R}let ht=0;function yt(o,u,x,R=3){let U=o.map(Ce=>[...Ce]);U.reduce((Ce,Ue,rt)=>{let Jt=U[(rt+1)%U.length];return Ce+Ue[0]*Jt[1]-Jt[0]*Ue[1]},0)<0&&U.reverse();let k=U.map((Ce,Ue)=>Ue),ne=.007+ht++*.011,Q=(Ce,Ue,rt)=>(Ue[0]-Ce[0])*(rt[1]-Ce[1])-(Ue[1]-Ce[1])*(rt[0]-Ce[0]),ue=0;function Ae(Ce,Ue,rt){u.tri([Ce[0],ne,Ce[1]],[rt[0],ne,rt[1]],[Ue[0],ne,Ue[1]],x,[[Ce[0]/R,Ce[1]/R],[rt[0]/R,rt[1]/R],[Ue[0]/R,Ue[1]/R]])}for(;k.length>3&&ue++<600;){let Ce=!1;for(let Ue=0;Ue<k.length;Ue++){let rt=k[(Ue-1+k.length)%k.length],Jt=k[Ue],Ut=k[(Ue+1)%k.length],Ct=U[rt],He=U[Jt],xt=U[Ut];if(!(Q(Ct,He,xt)<1e-4)&&!k.some(Bt=>Bt!==rt&&Bt!==Jt&&Bt!==Ut&&Q(Ct,He,U[Bt])>=0&&Q(He,xt,U[Bt])>=0&&Q(xt,Ct,U[Bt])>=0)){Ae(Ct,He,xt),k.splice(Ue,1),Ce=!0;break}}if(!Ce)break}k.length===3&&Ae(...k.map(Ce=>U[Ce]))}te.plane(0,-.1,0,1100,1100,ee.grass,460,460),yt(ot,te,ee.asphalt,.7);let Kt=[L(64,146),L(147,146),L(175,83),L(286,78),L(382,92),L(491,128),L(575,167),L(575,300),L(470,302),L(469,412),L(430,431),L(425,407),L(260,408),L(223,418),L(170,413),L(99,420),L(98,388),L(66,388),L(64,350)];yt(Kt,te,ee.dirt,1.35),e(.18,"配置図から校舎と会場を組み立てています");function zt(o,u,x,R,U=10.65,B="校舎",k=!0){let ne=L(o,u),Q=L(x,R),ue=(ne[0]+Q[0])/2,Ae=(ne[1]+Q[1])/2,Ce=Q[0]-ne[0],Ue=Q[1]-ne[1];if(qe.push({x:ue,z:Ae,w:Ce,d:Ue,h:U,label:B}),Ye(ue,Ae,Ce+.18,Ue+.18,B),te.box(ue,U/2,Ae,Ce,U,Ue,ee.wall),te.box(ue,.24,Ae,Ce+.15,.48,Ue+.15,ee.base),te.box(ue,U+.12,Ae,Ce+.55,.24,Ue+.55,a("#c6c3b6",0,.86)),!k)return;let rt=U>12?4:U>9?3:2,Jt=(U-.35)/rt;for(let Ut=0;Ut<4;Ut++){let Ct=Ut%2?Ue:Ce,He=Ut%2?Ce:Ue;P.scope(n.compose(ue,0,Ae,Ut*Math.PI/2),()=>{let xt=Math.max(1,Math.floor((Ct-.9)/4.3)),Bt=(Ct-.9)/xt;for(let kt=0;kt<rt;kt++){let ut=1.62+kt*Jt,$t=kt===0?1.8:1.16;P.box(0,kt*Jt+.45,He/2+.015,Ct,.035,.026,a("#b4b3a7",0,.95));for(let vn=0;vn<xt;vn++){let Wt=-Ct/2+.45+(vn+.5)*Bt,un=Bt*.84;P.box(Wt,ut,He/2+.024,un+.12,$t+.12,.06,a("#aaa99f",0,.6,.25)),P.box(Wt,ut,He/2+.06,un,$t,.025,ce((vn+kt)%4===0?"#a9b8b8":"#c5cecb"));for(let ms=1;ms<4;ms++)P.box(Wt-un/2+ms*un/4,ut,He/2+.085,.038,$t,.032,ee.metal);P.box(Wt,ut-$t/2-.035,He/2+.11,un+.17,.075,.17,a("#bdbdb3",0,.85)),kt===0&&P.box(Wt,ut+.2,He/2+.087,un,.037,.03,ee.metal)}}for(let kt=0;kt<=xt;kt+=2){let ut=-Ct/2+.45+kt*Bt;P.box(ut,U/2,He/2+.085,.22,U,.17,ee.wall)}for(let kt of[-1,1])P.cylinder([kt*(Ct/2-.2),.35,He/2+.19],[kt*(Ct/2-.2),U-.2,He/2+.19],.045,.045,a("#a9aaa0",0,.75),8)})}}zt(95.4,436.56,329.52,489.72,13.5),zt(30.48,411.36,82.56,541.56,10.65),zt(67.32,389.4,95.4,436.56,10.65),zt(329.52,430.32,425.28,516.36,13.5),zt(307.92,489.72,329.52,516.36,7.2),zt(311.52,535.08,390.72,603.6,7.9,"昇降口",!1),zt(103.44,608.28,401.04,666.1,10.7);{let o=L(111,436.56);P.box(o[0],6.75,o[1]-.16,6.1,13.5,.32,ee.wall);for(let u of[3.2,6.5,9.8,13.4])P.box(o[0],u,o[1]-.36,6.55,.19,.47,ee.wall);P.box(o[0],1.3,o[1]-.34,4.7,2.4,.05,ee.glass),P.box(o[0],2.88,o[1]-1,6.4,.2,2,ee.wall)}{let o=L(238,436.56),u=a("#693f30",0,.78),x=a("#9e9f94",0,.72,.18);P.box(o[0],1.25,o[1]-.035,6.3,2.5,.08,u),P.box(o[0],2.8,o[1]-.7,8.8,.18,1.5,a("#724b3e",0,.8));for(let R of[-4.1,4.1])P.box(o[0]+R,1.4,o[1]-1.2,.23,2.8,.23,ee.wall);for(let R of[-2.75,-1.38,0,1.38,2.75])P.box(o[0]+R,1.32,o[1]-.095,.045,2.24,.07,x),P.box(o[0]+R,2.22,o[1]-.13,1.3,.055,.05,x);for(let R of[-1.1,1.1])P.box(o[0]+R,1.12,o[1]-.15,.05,.32,.06,x);P.box(o[0],.055,o[1]-1.45,9,.11,2.55,a("#aeada1",3,.95))}function mt(o,u,x,R=0){P.scope(n.compose(o,u,x,R),()=>{P.cylinder([0,0,-.03],[0,0,.06],.48,.48,ee.whiteMetal,36),P.cylinder([0,0,.062],[0,0,.07],.43,.43,a("#efefdf"),36);for(let U=0;U<12;U++){let B=U/12*g;P.cylinder([Math.sin(B)*.34,Math.cos(B)*.34,.085],[Math.sin(B)*.38,Math.cos(B)*.38,.085],.01,.01,ee.dark,5)}P.cylinder([0,0,.095],[.07,.27,.095],.017,.017,ee.dark,6),P.cylinder([0,0,.1],[.27,-.1,.1],.013,.013,ee.dark,6)})}{let o=L(365,430.2);mt(o[0],6.8,o[1]-.06,Math.PI)}{let o=L(391,566);P.scope(n.compose(o[0]+.06,0,o[1],Math.PI/2),()=>{let u=a("#e1e0d4",3,.92),x=a("#ffffff",H,.95),R=2.1,U=.22,B=-.85;P.box(0,5.5,.93,14.4,4.5,2.34,u),P.box(-3.92,5.59,R+.045,5.35,3.05,.06,x),P.box(3.14,5.59,R+.045,6.91,3.05,.06,x),P.box(0,7.84,.96,14.7,.2,2.52,u),P.box(0,3.28,.94,14.4,.3,2.32,u),P.box(0,.16,1.18,14.5,.2,2.88,a("#aaa99e",3,.9)),P.box(0,1.65,U-.08,13.65,2.92,.06,a("#252e2c",0,.93));let k=a("#b4b9b4",0,.42,.38),ne=a("#56665f",0,.3,.15);for(let Q=0;Q<10;Q++){let ue=-6.08+Q*1.35;P.box(ue,1.5,U,1.28,2.25,.035,ne),P.box(ue,2.85,U,1.28,.37,.035,a("#777e70",0,.36)),P.box(ue-.66,1.65,U+.045,.045,2.9,.055,k);for(let Ae of[.38,1.18,2.64,3.06])P.box(ue,Ae,U+.045,1.34,.045,.055,k);Q%2===0&&(P.box(ue+.46,1.2,U+.105,.025,.32,.035,k),P.box(ue+.46,1.02,U+.075,.12,.025,.08,k))}P.box(6.74,1.65,U+.045,.045,2.9,.055,k);for(let Q of[-6.91,B,6.91])P.box(Q,1.71,R-.29,.58,3.08,.58,u),P.box(Q,.23,R-.29,.67,.15,.67,a("#b7b7aa",3,.94));for(let Q of[-6.9,6.9])P.box(Q,1.74,1.08,.28,3.04,1.88,u);for(let Q of[-5.25,-2.65,1.55,4.85])P.box(Q,3.115,1.16,.38,.045,.26,a("#50534b")),P.box(Q,3.086,1.16,.29,.017,.17,a("#e7e3c5",0,.6,0,.25));for(let Q=0;Q<3;Q++)P.box(0,.03+Q*.05,3.25-Q*.38,14.7,.06+Q*.1,.4,a("#a9a79b",3,.9));mt(B,3.6,R+.08,0)})}{let o=L(204,420),u=a("#919b94",0,.58,.21),x=a("#a9aea5",0,.82);te.box(o[0],1.8,o[1],8.9,3.6,5.3,ee.wall),te.box(o[0],3.66,o[1],9.15,.18,5.55,a("#919b94",10)),Ye(o[0],o[1],9,5.4,"用具庫");for(let R of[-1,1]){P.box(o[0]+R*2.12,1.58,o[1]-2.69,4.08,2.95,.07,x),P.box(o[0]+R*2.12,1.59,o[1]-2.75,4,.035,.055,u);for(let U=-1;U<=1;U++)P.box(o[0]+R*2.12+U*1.17,1.58,o[1]-2.75,.025,2.88,.045,u);P.box(o[0]+R*3.5,1.34,o[1]-2.79,.045,.26,.045,u)}P.box(o[0],3.16,o[1]-2.81,8.75,.22,.12,u);for(let R of[-3.9,0,3.9])P.cylinder([o[0]+R,3.58,o[1]-2.64],[o[0]+R,.08,o[1]-2.64],.045,.045,u,8);P.box(o[0],1.3,o[1]+2.68,3,2.6,.08,a("#79857f",0,.46,.35))}function Ot(o,u,x=0){let R=L(o,u);P.scope(n.compose(R[0],0,R[1],x),()=>{P.box(0,.63,0,2.9,.33,.52,ee.base),P.box(0,.83,0,2.96,.08,.6,a("#c3cdca",0,.23,.7));for(let U=0;U<6;U++){let B=-1.22+U*.49;P.box(B,.84,0,.35,.015,.33,a("#697e81",0,.18,.65)),P.cylinder([B,.81,-.19],[B,1.15,-.19],.018,.018,ee.metal,7),P.cylinder([B,1.15,-.19],[B,1.15,.02],.017,.017,ee.metal,7)}for(let U of[-1.1,1.1])P.box(U,.35,0,.13,.7,.34,ee.base)})}Ot(251,414),Ot(42,400);{let o=L(401,538),u=a("#ac7049",0,.94);P.cylinder([o[0],.12,o[1]],[o[0],.75,o[1]],1.25,1.25,u,36),P.cylinder([o[0],.75,o[1]],[o[0],.82,o[1]],1.29,1.29,a("#ada99a"),36),P.cylinder([o[0],.825,o[1]],[o[0],.84,o[1]],1.1,1.1,ee.base,36);for(let x=0;x<24;x++){let R=x/24*g;P.cylinder([o[0]+1.252*Math.sin(R),.12,o[1]+1.252*Math.cos(R)],[o[0]+1.252*Math.sin(R),.74,o[1]+1.252*Math.cos(R)],.009,.009,a("#d4b99a"),5)}for(let x of[-.48,.48])P.cylinder([o[0]+x,.84,o[1]],[o[0]+x,1.18,o[1]],.025,.025,ee.metal,7),P.cylinder([o[0]+x,1.18,o[1]],[o[0]+x+.16,1.18,o[1]],.025,.025,ee.metal,7)}let X=470,jt=580,At=302,O=504,p=L(X,At),W=L(jt,O),z=[(p[0]+W[0])/2,(p[1]+W[1])/2],ae=W[0]-p[0],Te=W[1]-p[1],Se=L(500,468)[1],he=.45,xe=Se-p[1],Re=(p[1]+Se)/2;te.box(z[0],he/2,z[1],ae,he,Te,a("#b7b9b3",3,.94)),te.plane(z[0],he+.045,Re,ae,xe,a("#ffffff",me,.4),ae/4,xe/4),te.plane(z[0],he+.044,(Se+W[1])/2,ae,W[1]-Se,a("#c9c5b9",0,.88),ae/4,2),qe.push({x:z[0],z:z[1],w:ae,d:Te,h:10,label:"体育館",gym:!0}),te.box(W[0],2.1,z[1],.35,4.2,Te,ee.wall),te.box(W[0],8.38,z[1],.35,.64,Te,ee.wall),Ye(W[0],z[1],.4,Te,"体育館東壁"),te.box(z[0],4.35,p[1],ae,8.7,.35,ee.wall),Ye(z[0],p[1],ae,.4,"体育館壁");let ze=p[0]+ae*.38,De=2.25,Oe=he,Qe=a("#e1dfd5",3,.92),it=p[0]+ae*77/309,lt=p[0]+ae*156/309,Z=p[0]+ae*202/309,Ne=p[0]+ae*233/309,ve=Se+(W[1]-Se)*27/66,Ie=(p[0]+it)/2,Be=(Ne+W[0])/2,Me=1.1,nt=[[Ie-Me,Ie+Me],[ze-De,ze+De],[Be-Me,Be+Me]],F=[],le=p[0];for(let[o,u]of nt)o>le&&F.push([le,o]),le=u;le<W[0]&&F.push([le,W[0]]);let ye=[[p[0]+2,p[0]+3.5],[lt+.8,lt+1.8],[Z+.6,Z+1.55],[Ne+1.7,Ne+3.2]],Ee=[ye[0],[ze-De,ze+De],...ye.slice(1)],C=[],G=p[0];for(let[o,u]of Ee)o>G&&C.push([G,o]),G=u;G<W[0]&&C.push([G,W[0]]);for(let[o,u]of C)te.box((o+u)/2,2.1,W[1],u-o,4.2,.35,ee.wall),Ye((o+u)/2,W[1],u-o,.4,"体育館南壁");for(let[o,u]of ye){let x=(o+u)/2,R=u-o;te.box(x,.58,W[1],R,1.16,.35,ee.wall),te.box(x,3.45,W[1],R,1.5,.35,ee.wall),P.box(x,1.93,W[1]+.045,R-.12,1.52,.055,ce("#aab9b7")),Ye(x,W[1],R,.4,"体育館南壁の窓")}te.box(ze,3.6,W[1],De*2,1.2,.35,ee.wall),te.box(z[0],6.45,W[1],ae,4.5,.35,ee.wall);for(let[o,u]of F)te.box((o+u)/2,2.1,Se,u-o,4.2,.35,ee.wall),Ye((o+u)/2,Se,u-o,.4,"体育館床の出口側の壁");let Y=a("#f4f3ed",0,.62,.08),j=a("#e2e2da",0,.54,.24);for(let o of[Ie,Be])te.box(o,3.6,Se,Me*2,1.2,.35,ee.wall),te.box(o,1.51,Se-.095,Me*2-.12,3.02,.11,Y),P.box(o,1.52,Se-.17,Me*2+.06,3.1,.045,j),P.box(o,1.52,Se-.205,Me*2-.12,2.98,.025,Y),P.box(o+(o<z[0]?.78:-.78),1.4,Se-.24,.025,.23,.05,ee.metal),Ye(o,Se,Me*2,.4,"出演者控室の閉じた扉");te.box(ze,3.6,Se,De*2,1.2,.35,ee.wall),te.box(z[0],6.37,Se,ae,4.34,.35,ee.wall),te.tri([p[0],8.54,Se],[z[0],9.97,Se],[W[0],8.54,Se],ee.wall);function re(o,u,x){te.box(o,Oe+1.6,(u+x)/2,.16,3.2,x-u,Qe),Ye(o,(u+x)/2,.18,x-u,"体育館前室の壁")}function we(o,u,x){te.box((o+u)/2,Oe+1.6,x,u-o,3.2,.16,Qe),Ye((o+u)/2,x,u-o,.18,"体育館前室の壁")}re(it,Se+.22,W[1]),re(lt,ve,W[1]),re(Z,Se+.22,W[1]),re(Ne,Se+.22,W[1]),we(lt,Z,ve);let ie=a("#a69b86",0,.82),We=(ve+W[1])/2,gt=W[1]-ve-.55;for(let o of[it+.36,lt-.48]){for(let u of[.28,.7,1.12])P.box(o,he+u,We,.56,.07,gt,ie);for(let u of[-1,1])P.box(o+u*.27,he+.7,We,.045,1.1,gt,ie);Ye(o,We,.56,gt,"下駄箱")}[["出演者控室（小）",(p[0]+it)/2],["WC（M）",(lt+Z)/2],["WC（W）",(Z+Ne)/2],["出演者控室（大）",(Ne+W[0])/2]].forEach(([o,u],x)=>{let R=d.add("gym-room-"+x,(U,B)=>{U.fillStyle="#f5f3eb",U.fillRect(0,0,B,B),U.fillStyle="#273b39",U.textAlign="center",x===0||x===3?(U.font="700 78px sans-serif",U.fillText("出演者控室",B/2,218),U.font="700 100px sans-serif",U.fillText(x===0?"（小）":"（大）",B/2,350)):(U.font="700 112px sans-serif",U.fillText(o,B/2,296))});at.scope(n.compose(u,0,W[1]-.24,Math.PI),()=>{at.sign(0,3.35,0,x===0||x===3?2.2:1.35,.36,R,!0)})});let Pe=[[335,344],[421,433]],Ke=[[302,335],[344,421],[433,504]];for(let[o,u]of Ke){let x=L(X,o),R=L(X,u);te.box(p[0],2.1,(x[1]+R[1])/2,.36,4.2,R[1]-x[1],ee.wall),Ye(p[0],(x[1]+R[1])/2,.4,R[1]-x[1],"体育館西壁")}te.box(p[0],8.38,z[1],.36,.64,Te,ee.wall);for(let[o,u]of Pe){let x=L(X,o),R=L(X,u);te.box(p[0],3.49,(x[1]+R[1])/2,.36,1.42,R[1]-x[1],ee.wall)}let wt=ce("#aab9b7"),It=a("#b7b9ae",0,.53,.3);for(let o of[-1,1]){let u=z[0]+o*ae/2;P.box(u,6.13,z[1],.03,3.86,Te-.75,wt);for(let x of[4.2,5.05,6.1,7.12,8.05])P.box(u,x,z[1],.16,.065,Te,It);for(let x=p[1]+.45;x<W[1];x+=1.35)P.box(u,6.13,x,.17,3.9,.055,It);for(let x=p[1]+.5;x<W[1];x+=5.4)o<0&&Pe.some(([R,U])=>x>L(X,R)[1]-.2&&x<L(X,U)[1]+.2)||P.box(u,4.3,x,.45,8.6,.33,ee.wall);for(let x=p[1]+.5;x<W[1]-.4;x+=.55)P.box(u-o*.3,4.9,x,.035,1.2,.03,ee.whiteMetal);P.box(u-o*.3,5.5,z[1],.05,.05,Te,ee.whiteMetal)}let Vt=a("#ffffff",fe,.78),cn=a("#966d50",0,.76);for(let o of[-1,1])for(let[u,x]of o<0?Ke:[[302,504]]){let R=L(X,u)[1],U=L(X,x)[1],B=z[0]+o*(ae/2-.205);P.box(B,2.14,(R+U)/2,.028,4.03,U-R,Vt),P.box(B-o*.04,4.14,(R+U)/2,.045,.11,U-R,cn);for(let k=R+.36;k<U;k+=.75)P.box(B-o*.03,2.1,k,.035,3.94,.026,cn);P.cylinder([B-o*.35,5.2,R],[B-o*.35,5.2,U],.025,.025,ee.whiteMetal,8)}for(let[o,u]of Pe){let x=L(X,o)[1],R=L(X,u)[1];P.box(p[0]+.205,3.49,(x+R)/2,.035,1.42,R-x,Vt)}let dn=Se-.205;for(let[o,u]of F)P.box((o+u)/2,1.55,dn,u-o,2.94,.035,Vt);P.box(z[0],3.57,dn,ae,1.1,.035,Vt);for(let o=p[0]+.38;o<W[0]-.2;o+=.53){let u=nt.some(([x,R])=>o>=x&&o<=R);P.box(o,u?3.57:2.1,dn-.028,.022,u?1.02:3.96,.02,cn)}let yi=a("#e6e2d8",0,.76),ds=a("#24775f",0,.74,.04);for(let o of[-1,1])P.box(ze+o*2.25,1.52,dn-.04,.11,3.04,.09,yi);P.box(ze,3.02,dn-.04,4.6,.12,.09,yi);let Jo=a("#f4f3ed",0,.64,.08);for(let o of[-1,1])P.box(ze+o*(De-.11),1.51,Se+.67,.08,2.98,1.28,Jo),P.box(ze+o*(De-.17),1.44,Se+.25,.035,.27,.05,ee.metal);for(let o of[-4.8,0,4.8]){let u=z[0]+o;P.box(u,6,dn-.02,1.35,2.4,.05,yi),P.box(u,6,dn-.055,1.21,2.25,.025,ds),P.box(u-.35,6,dn-.073,.08,2.19,.015,a("#6eb49a",0,.79,.02))}let $o=a("#8f9693",10,.78,.12),Zr=a("#e8e6dc",0,.96);for(let o of[-1,1]){let u=z[0]+o*(ae/2+.4);Ge.quad([z[0],10.15,p[1]-.4],[z[0],10.15,W[1]+.4],[u,8.72,W[1]+.4],[u,8.72,p[1]-.4],$o,Te/3,4),Ge.quad([z[0],9.97,p[1]],[u,8.54,p[1]],[u,8.54,W[1]],[z[0],9.97,W[1]],Zr,1,1)}for(let o of[p[1],W[1]])te.tri([p[0],8.7,o],[z[0],10.15,o],[W[0],8.7,o],ee.wall);for(let o=p[1]+3;o<W[1]-1;o+=5.4)for(let u of[-7,-2.3,2.3,7]){let x=9.93-Math.abs(u)/(ae/2)*1.43;Ge.cylinder([z[0]+u,x-.07,o],[z[0]+u,x-.01,o],.25,.25,ee.whiteMetal,20),Ge.disk(z[0]+u,x-.085,o,.215,a("#fff9e4",0,.9,0,.8),20)}let I=a("#a8784f",0,.58),K=a("#391722",6,.94),pe=a("#c39736",0,.47,.17),se=p[1]+4.03,oe=p[1]+2.14;for(let o of[-1,1]){let u=ae/2-6.12,x=z[0]+o*(6.12+u/2);te.box(x,4.35,se,u,8.7,.35,ee.wall),Ye(x,se,u,.4,"体育館壁"),P.box(x,2.1,se+.21,u,4.16,.05,Vt);for(let R=x-u/2+.36;R<x+u/2;R+=.5)P.box(R,2.1,se+.25,.023,4.08,.026,cn)}te.box(z[0],8.2,se,12.24,1,.35,ee.wall),te.box(z[0],he+.55,p[1]+2.1,11,1.1,4,a("#aa7649",me,.52)),Ye(z[0],p[1]+2.1,11,4.2,"常設舞台・使用せず"),P.box(z[0],3.81,oe,11.2,5.46,.11,K);for(let o=0;o<32;o++){let u=z[0]-5.42+o*.35;P.cylinder([u,1.1,oe+.08],[u,6.49,oe+.08],.075,.075,a(o%3?"#421925":"#572331",6,.96),7)}for(let o of[1.1,6.48])P.box(z[0],o,oe+.17,11.18,.085,.1,pe);for(let o of[-1,1])P.box(z[0]+o*5.86,4.05,se,.73,6.89,.45,I),P.box(z[0]+o*5.49,3.79,(oe+se)/2,.22,5.95,se-oe,I);P.box(z[0],7.46,se,12.45,.66,.45,I),P.box(z[0],6.89,se+.23,11.12,.55,.07,a("#4a1a28",0,.94)),P.quad([z[0],7.24,se+.28],[z[0]-.25,6.97,se+.28],[z[0],6.7,se+.28],[z[0]+.25,6.97,se+.28],pe),P.box(z[0],1,se+.11,11.1,1.1,.15,Vt);for(let o of[-1,1])P.box(z[0]+o*8.25,2.55,se+.29,3.2,.92,.06,Vt);at.sign(z[0]+8.25,2.55,se+.34,3,.62,A);{let o=W[0]-.25,u=a("#ffffff",be,.91);for(let x=0;x<5;x++){let R=p[1]+8.3+x*5.45;P.box(o,2.53,R,.09,2.45,5.24,cn),P.box(o-.06,2.53,R,.025,2.31,5.1,u);for(let U=0;U<2;U++)for(let B=0;B<5;B++){let k=R+(B-2)*.92,ne=2.99-U*.91;P.box(o-.084,ne,k,.014,.66,.54,a(["#edece6","#e2e5df","#e7e0d7"][B%3],0,.94))}}}for(let o of[-1,1])for(let u of[p[1]+20,p[1]+33,p[1]+46])P.box(z[0]+o*(ae/2-.245),6.03,u,.035,2.9,2.4,a("#27443b",6,.9));for(let o of[-1,1])P.cylinder([z[0]+o*6,.05,p[1]+5],[z[0]+o*6,5.3,p[1]+5],.045,.045,ee.metal,8);function Ve(o,u,x,R,U,B=.066+he){let k=x[0]-u[0],ne=x[1]-u[1],Q=Math.hypot(k,ne),ue=-ne/Q*R/2,Ae=k/Q*R/2;o.quad([u[0]-ue,B,u[1]-Ae],[u[0]+ue,B,u[1]+Ae],[x[0]+ue,B,x[1]+Ae],[x[0]-ue,B,x[1]-Ae],U,Q,1)}for(let o of[z[0]-8.2,z[0]+8.2])Ve(P,[o,p[1]+6],[o,Se-2],.047,a("#f5ede3"));for(let o of[p[1]+6,Re,Se-2])Ve(P,[z[0]-8.2,o],[z[0]+8.2,o],.047,a("#f5ede3"));for(let o of[z[0]-6.8,z[0]+6.8])Ve(P,[o,p[1]+13],[o,Se-3],.036,a("#293239"),.068+he);for(let o of[p[1]+13,Se-3])Ve(P,[z[0]-6.8,o],[z[0]+6.8,o],.036,a("#293239"),.068+he);for(let o of[z[0]-9.2,z[0]+9.2])Ve(P,[o,p[1]+16],[o,Se-4],.038,a("#2f7795"),.07+he);let je=L(469.65,427);at.scope(n.compose(je[0]-.12,0,je[1],-Math.PI/2),()=>{at.sign(0,2.94,0,3.5,.75,_.GYM.banner),at.sign(3.7,1.55,.1,1.08,1.65,J)}),e(.3,"テント・キッチンカー・ブースの内容を配置しています");function ke(o,u,x,R=0,U="#66746c",B=0){o.scope(n.compose(u,B,x,R),()=>{let k=a("#a5aca8",0,.32,.5),ne=a(U,6,.82);o.box(0,.43,0,.42,.055,.39,ne),o.box(0,.7,-.18,.43,.3,.045,ne);for(let Q of[-.17,.17])o.cylinder([Q,.04,-.15],[Q,.86,-.18],.016,.016,k,6),o.cylinder([Q,.04,.21],[Q,.44,.1],.016,.016,k,6),o.cylinder([Q,.05,-.16],[Q,.47,.15],.014,.014,k,6);o.cylinder([-.19,.18,-.14],[.19,.18,-.14],.012,.012,k,6)})}function Je(o,u,x,R=1.8,U=.72,B=0,k=!0,ne=!1){o.scope(n.compose(u,0,x,B),()=>{o.box(0,.73,0,R,.07,U,k?a("#f2ede1",13,.9):a("#d5c8af",5,.7));for(let Q of[-R*.36,R*.36])o.cylinder([Q,.06,-U*.34],[Q,.71,U*.32],.022,.022,ee.metal,7),o.cylinder([Q,.06,U*.34],[Q,.71,-U*.32],.022,.022,ee.metal,7);if(o.cylinder([-R*.38,.35,0],[R*.38,.35,0],.021,.021,ee.metal,7),k)for(let Q of[-1,1])o.box(0,.6,Q*U/2,R,.25,.016,a("#eeeadf",6,.94))}),ne&&Ye(u,x,Math.abs(Math.cos(B))*R+Math.abs(Math.sin(B))*U,Math.abs(Math.sin(B))*R+Math.abs(Math.cos(B))*U,"table")}let st=L(368,283);for(let o=0;o<4;o++)for(let u=0;u<4;u++){let x=st[0]+(u-1.5)*2.62,R=st[1]+(o-1.5)*2.42;Je(P,x,R,1.65,.7,0,!0,!0);for(let U of[-1,1])for(let B=0;B<3;B++){let k=x+(B-1)*.53,ne=R+U*.71;ke(P,k,ne,U===-1?0:Math.PI,"#6f7970"),Fe.push({x:k,z:ne,yaw:U===-1?0:Math.PI})}}let vt=L(431,548);for(let o=0;o<3;o++){Je(P,vt[0],vt[1]+(o-1)*2.2,1.8,.65,0,!0,!0);for(let u of[-1,1])for(let x=0;x<3;x++){let R=vt[0]+(x-1)*.57,U=vt[1]+(o-1)*2.2+u*.68,B=u<0?0:Math.PI;ke(P,R,U,B),Fe.push({x:R,z:U,yaw:B,eat2:!0})}}for(let o=0;o<6;o++)for(let u=0;u<12;u++){let x=z[0]+(u-5.5)*.64+(u<6?-.7:.7),R=p[1]+18.5+o*.92;ke(P,x,R,Math.PI,"#566a68",he+.05),Fe.push({x,z:R,yaw:Math.PI,gym:!0})}for(let o=0;o<6;o++)for(let u of[-2,-1,12,13]){let x=z[0]+(u-5.5)*.64+(u<6?-.7:.7),R=p[1]+18.5+o*.92;ke(P,x,R,Math.PI,"#566a68",he+.05),Fe.push({x,z:R,yaw:Math.PI,gym:!0,addedGymSeat:!0})}for(let o=6;o<8;o++)for(let u=0;u<16;u++){let x=z[0]+(u-7.5)*.64+(u<8?-.7:.7),R=p[1]+18.5+o*.92;ke(P,x,R,Math.PI,"#566a68",he+.05),Fe.push({x,z:R,yaw:Math.PI,gym:!0,addedGymSeat:!0})}function St(o,u,x,R,U=0){o.scope(n.compose(u,0,x,U),()=>{o.cylinder([-.4,.04,-.15],[-.35,1.29,0],.023,.023,ee.wood,6),o.cylinder([.4,.04,-.15],[.35,1.29,0],.023,.023,ee.wood,6),o.cylinder([-.4,.04,-.48],[-.35,1.29,0],.023,.023,ee.wood,6),o.cylinder([.4,.04,-.48],[.35,1.29,0],.023,.023,ee.wood,6),o.sign(0,.85,.03,.7,.94,R,!0)})}function tt(o,u,x,R,U=2.18,B=3.16){let k=[[-u/2,U,-x/2],[-u/2,U,x/2],[u/2,U,x/2],[u/2,U,-x/2]],ne=[0,B,0];for(let Q=0;Q<4;Q++){let ue=k[Q],Ae=k[(Q+1)%4],Ce=(Ue,rt)=>{let Jt=t.add(t.mul(ue,1-Ue),t.mul(Ae,Ue)),Ut=t.add(t.mul(Jt,1-rt),t.mul(ne,rt));return Ut[1]-=.052*Math.sin(Ue*Math.PI)*Math.sin(rt*Math.PI),Ut};for(let Ue=0;Ue<10;Ue++)for(let rt=0;rt<8;rt++){let Jt=Ue/10,Ut=rt/8,Ct=Ce(Jt,Ut),He=Ce((Ue+1)/10,Ut),xt=Ce((Ue+1)/10,(rt+1)/8),Bt=Ce(Jt,(rt+1)/8);o.quad(Ct,He,xt,Bt,R,1,1)}o.quad(ue,[ue[0],U-.2,ue[2]],[Ae[0],U-.2,Ae[2]],Ae,R,1,1)}}function Nt(o,u){let x=u.id,R=u.category,U=x==="F-1"||x==="F-9",B=x==="F-6"||x==="F-8",k=x==="T-12",ne=x==="T-2";if(U){for(let Q=0;Q<9;Q++){let ue=-.8+Q%5*.23,Ae=.3+Math.floor(Q/5)*.22;o.cylinder([ue,.79,Ae],[ue,.94,Ae],.044,.052,a("#faf3dd"),12),o.cylinder([ue,.94,Ae],[ue,.958,Ae],.055,.055,a("#635442"),12)}o.box(.54,1.02,-.14,.45,.53,.32,a("#3f4443",0,.25,.45)),o.box(.53,1.09,.03,.22,.13,.017,a("#91aaa1",0,.25,.2));for(let Q=0;Q<3;Q++)o.cylinder([.36+Q*.11,.79,.16],[.36+Q*.11,.98,.16],.028,.028,ee.metal,8)}else if(B)for(let Q=0;Q<3;Q++){let ue=-.65+Q*.65;o.box(ue,.79,.28,.56,.11,.4,a("#a98350",5));for(let Ae=0;Ae<7;Ae++)o.sphere(ue+M(-.2,.2),.89,.28+M(-.14,.14),M(.065,.09),.045,M(.06,.1),a(["#bd863d","#d2a05d","#a87139"][Ae%3]),12,7)}else if(k)for(let Q=0;Q<3;Q++){let ue=-.62+Q*.6;o.box(ue,.85,.17,.52,.2,.5,a("#b7915d",5));for(let Ae=0;Ae<8;Ae++){let Ce=ue+M(-.2,.2),Ue=.17+M(-.17,.17);o.cylinder([Ce,.88,Ue],[Ce+.11,1.06,Ue+.04],.017,.04,a("#d07731"),8),o.cylinder([Ce+.1,1.04,Ue+.04],[Ce+.17,1.17,Ue+.02],.008,.01,a("#58703a"),6)}}else if(ne){o.box(-.35,.94,.15,.7,.28,.34,a("#2b363c",0,.45,.25)),o.box(-.42,1.01,.33,.29,.1,.007,a("#a9be92",0,.5,0,.2));for(let Q=0;Q<3;Q++)o.cylinder([-.06+Q*.05,.94,.34],[-.06+Q*.05,.94,.37],.024,.024,ee.metal,10);o.box(.5,.84,.23,.35,.05,.28,a("#373a3c")),o.cylinder([.75,.8,-.13],[.75,2.65,-.13],.012,.012,ee.metal,7),o.cylinder([.33,2.4,-.13],[1.14,2.4,-.13],.015,.015,ee.metal,7)}else if(R==="F"){for(let Q=0;Q<3;Q++){let ue=-.7+Q*.65;o.box(ue,.8,.22,.54,.09,.36,a("#d1d5c8",0,.25,.45));for(let Ae=0;Ae<8;Ae++){let Ce=ue+M(-.2,.2),Ue=.22+M(-.12,.12);o.sphere(Ce,.855,Ue,.047,.025,.045,a(["#c99352","#dfb476","#724b30"][Ae%3]),9,5)}}if(x==="F-11"){o.box(.12,.8,-.26,1,.1,.3,ee.black);for(let Q=0;Q<9;Q++)o.cylinder([-.3+Q*.1,.88,-.49],[-.3+Q*.1,.88,.02],.006,.006,a("#d5b878"),5)}}else if(R==="S"){for(let Q=0;Q<14;Q++){let ue=-.8+Q%7*.25,Ae=.13+Math.floor(Q/7)*.25;o.box(ue,.794,Ae,.17,.015,.16,a("#f8f4e6")),o.sphere(ue,.83,Ae,.055,.032,.055,a(["#aa5c61","#b5aa6c","#558489","#9a804c"][Q%4],0,.28,.32),12,7)}if(x==="S-8")for(let Q=0;Q<9;Q++)o.cylinder([-.75+Q*.17,.83,-.2],[-.7+Q*.17,1.01,-.08],.021,.024,a("#c8af70",5),7)}else for(let Q=0;Q<3;Q++)o.box(-.65+Q*.6,.795,.22,.43,.015,.28,a("#faf8ec")),o.box(-.65+Q*.6,.82,.2,.35,.012,.21,a(["#bbbaa0","#a6b4bb","#b7ba8d"][Q],0,.8))}function ln(o,u=null){let x=u||o.pos,R=o.width||3.02,U=2.75,B=o.yaw||0,k=o.id==="S-3"||o.id==="S-9"?"#8393a0":o.id==="F-11"?"#859690":"#f8f7ef",ne=a(N[o.category],6,.92);te.scope(n.compose(x[0],0,x[1],B),()=>{tt(te,R,U,a(k,6,.92));for(let Ue of o.id==="F-10"?[-R/2+.035,0,R/2-.035]:[-R/2+.035,R/2-.035])for(let rt of[-U/2+.035,U/2-.035])te.cylinder([Ue,.03,rt],[Ue,2.2,rt],.029,.026,ee.metal,8);te.box(0,2.1,U/2,R,.29,.026,ne),te.box(0,2.1,-U/2,R,.29,.025,a(k,6));for(let Ue of[-R/2,R/2])te.box(Ue,2.1,0,.025,.29,U,a(k,6));te.cylinder([-R/2,2.17,-U/2],[R/2,2.17,U/2],.021,.021,ee.metal,8),te.cylinder([R/2,2.17,-U/2],[-R/2,2.17,U/2],.021,.021,ee.metal,8),(o.category==="F"||o.id==="HQ")&&te.box(0,1.15,-U/2,R,1.87,.015,a("#eeeee5",6,.94))}),P.scope(n.compose(x[0],0,x[1],B),()=>{o.id==="F-10"?(Je(P,-1.5,.4,2.28,.73),Je(P,1.5,.4,2.28,.73),P.scope(n.compose(-1.5,0,0),()=>Nt(P,o)),ke(P,-2.15,-.53,0,"#65746c"),P.box(-.75,.23,-.46,.54,.42,.4,a("#af9270",5))):(Je(P,0,.4,Math.min(R-.45,2.28),.73),Nt(P,o),ke(P,-.65,-.53,0,"#65746c"),P.box(.75,.23,-.46,.54,.42,.4,a("#af9270",5))),o.category==="T"&&P.sign(.56,1.5,-1.25,.95,.98,_[o.id].menu,!0)}),at.scope(n.compose(x[0],0,x[1],B),()=>{at.sign(0,2.15,U/2+.03,Math.min(R-.09,2.87),.62,_[o.id].banner),St(at,-R/2+.2,U/2+.4,_[o.id].menu,-.14)});let Q=[Math.sin(B),Math.cos(B)],ue=[Math.cos(B),-Math.sin(B)],Ae=x[0]+Q[0]*.4,Ce=x[1]+Q[1]*.4;Ye(Ae,Ce,Math.abs(ue[0])*(R-.4)+Math.abs(Q[0])*.8,Math.abs(ue[1])*(R-.4)+Math.abs(Q[1])*.8,o.id),o.approach=[x[0]+Q[0]*(U/2+3.1),x[1]+Q[1]*(U/2+3.1)],o.marker=[x[0]+Q[0]*1.4,3.22,x[1]+Q[1]*1.4],ge.push(o)}function qt(o,u,x,R,U=1,B=.37){o.cylinder([u,x,R-.09],[u,x,R+.09],B,B,ee.tire,22),o.cylinder([u,x,R+U*.094],[u,x,R+U*.114],B*.55,B*.55,ee.metal,20);for(let k=0;k<6;k++){let ne=k/6*g;o.cylinder([u+Math.cos(ne)*B*.34,x+Math.sin(ne)*B*.34,R+U*.115],[u+Math.cos(ne)*B*.34,x+Math.sin(ne)*B*.34,R+U*.12],B*.12,B*.12,ee.dark,7)}}function Yt(o,u){let x=o.pos,R=o.yaw,B=a(["#ede6d3","#c3a875","#eef0df","#657f79","#aa7761","#e2d8c3","#e0cf9e","#6c7a75"][u%8],0,.38,.23),k=te;k.scope(n.compose(x[0],0,x[1],R),()=>{k.box(0,.46,0,3.85,.22,1.7,ee.dark),k.box(.42,1.63,0,2.85,2.03,1.82,B),k.box(-1.41,1.2,0,1.06,1.37,1.8,B),k.box(-1.65,.9,0,.88,.38,1.9,B),k.box(-1.44,1.58,0,1.04,.74,1.8,B),k.box(-1.96,1.58,0,.035,.66,1.57,ee.glass),k.box(-1.42,1.65,.91,.76,.54,.018,ee.glass),k.box(-1.42,1.65,-.91,.76,.54,.018,ee.glass),k.box(.46,1.79,.918,2.4,1,.012,ee.dark),k.box(.46,1.72,.923,2.27,.81,.009,a("#555e54",0,.7)),k.box(.46,1.16,1.11,2.55,.07,.54,ee.metal),k.box(.46,2.76,0,2.98,.14,1.92,B);for(let ue of[-1.35,1.2])for(let Ae of[-.89,.89])qt(k,ue,.4,Ae,Ae<0?-1:1,.36);k.box(-1.98,.61,0,.1,.19,1.7,a("#b3b8b3",0,.35,.55));for(let ue of[-.61,.61])k.box(-2.04,.93,ue,.034,.2,.37,a("#eee8cf",0,.14,.3,.15));k.box(-2.05,.58,0,.034,.16,.28,a("#decb71")),k.box(.26,2.91,-.17,.53,.17,.44,ee.whiteMetal),k.cylinder([1.3,2.8,-.48],[1.3,3,-.48],.11,.11,ee.metal,12);for(let ue of[-1.06,1.06])k.cylinder([-1.65,1.61,ue*.83],[-1.65,1.62,ue],.02,.02,ee.dark,6),k.box(-1.64,1.64,ue,.1,.19,.05,ee.dark);k.quad([-.9,2.56,.94],[-.9,2.3,2.03],[1.76,2.3,2.03],[1.76,2.56,.94],a("#f6efdf",6),2,1),k.box(.43,2.22,2.02,2.7,.18,.02,a(N.F,6));for(let ue of[-.82,1.69])k.cylinder([ue,1.71,.96],[ue,2.3,1.95],.017,.017,ee.metal,6)}),P.scope(n.compose(x[0],.38,x[1],R),()=>Nt(P,o)),at.scope(n.compose(x[0],0,x[1],R),()=>{at.sign(.42,2.67,.945,2.54,.48,_[o.id].banner),St(at,-.4,2.28,_[o.id].menu,.1)});let ne=[Math.sin(R),Math.cos(R)],Q=[Math.cos(R),-Math.sin(R)];Ye(x[0],x[1],Math.abs(Q[0])*4.03+Math.abs(ne[0])*1.93,Math.abs(Q[1])*4.03+Math.abs(ne[1])*1.93,o.id),o.approach=[x[0]+ne[0]*3.3,x[1]+ne[1]*3.3],o.marker=[x[0]+ne[0]*1.45,3.42,x[1]+ne[1]*1.45],ge.push(o)}let yn=0;for(let o of f.records)o.kind==="tent"?ln(o):o.kind==="truck"&&Yt(o,yn++);let $e=f.locations.find(o=>o.id==="HQ");$e.width=6.9,ln($e);let fn=f.locations.find(o=>o.id==="OUTSTAGE"),Le=fn.pos;te.box(Le[0],.28,Le[1],7.2,.56,1.8,ee.wood),Ye(Le[0],Le[1],7.2,1.8,"屋外ステージ");for(let o of[-1.8,0,1.8])P.box(Le[0]+o,.563,Le[1],.012,.009,1.8,ee.dark);P.box(Le[0],.563,Le[1],7.2,.009,.012,ee.dark);for(let o of[-1,1])P.box(Le[0]+o*4.05,.14,Le[1]+.5,.72,.28,.72,ee.base),P.cylinder([Le[0]+o*3.9,.04,Le[1]-.4],[Le[0]+o*3.9,3.2,Le[1]-.4],.033,.033,ee.metal,7),P.box(Le[0]+o*3.9,2.5,Le[1]-.4,.48,.85,.35,ee.black);let nn=Le[1]-1.65,wn=Le[1]-3.75;for(let o of[-1,1])P.cylinder([Le[0]+o*4,.1,nn],[Le[0]+o*4,.12,wn],.035,.035,ee.metal,8);P.cylinder([Le[0]-4,.1,nn],[Le[0]+4,.1,nn],.035,.035,ee.metal,8);for(let o of[-1,1])P.cylinder([Le[0]+o*4,.1,nn],[Le[0]+o*4,2.1,nn],.035,.035,ee.metal,8);P.cylinder([Le[0]-4,2.1,nn],[Le[0]+4,2.1,nn],.035,.035,ee.metal,8),P.cylinder([Le[0]-4,.12,wn],[Le[0]+4,.12,wn],.035,.035,ee.metal,8),P.quad([Le[0]-4,.12,wn],[Le[0]-4,.1,nn],[Le[0]+4,.1,nn],[Le[0]+4,.12,wn],a("#a7b0a6",11,.75),6,2);let ri=d.add("stage-k-estate",(o,u)=>{o.fillStyle="#f7f7f2",o.fillRect(0,0,u,u),o.fillStyle="#9e3235",o.fillRect(0,0,u,92),o.fillStyle="#fff",o.textAlign="center",o.font="700 24px sans-serif",o.fillText("SHONAN REAL ESTATE",u/2,55),o.fillStyle="#24516b",o.font="700 69px sans-serif",o.fillText("K ESTATE",u/2,255),o.fillStyle="#5c7989",o.font="600 24px sans-serif",o.fillText("K エステート",u/2,315)});for(let o=-1;o<=1;o++){let u=Le[0]+o*2.52,x=2.42;at.quad([u-x/2,2.02,nn+.06],[u-x/2,.13,nn+.06],[u+x/2,.13,nn+.06],[u+x/2,2.02,nn+.06],a("#ffffff",ri,.9,0,.06))}let Bn=Le[0]+5.15,Lt=Le[1]+2.6;P.box(Bn,1.5,Lt,1.26,.73,.12,ee.black),P.box(Bn,1.5,Lt+.07,1.22,.69,.025,a("#303c3d",0,.32,.08)),P.cylinder([Bn,.08,Lt],[Bn,1.13,Lt],.055,.055,ee.metal,8),P.box(Bn,.06,Lt,.62,.12,.47,ee.dark);for(let o of[.2,1.2])Je(P,Le[0]+5.5,Le[1]+o,1.32,.63,0);P.box(Le[0]+5.5,.85,Le[1]+1.2,.56,.18,.39,ee.dark);for(let o of[.2,1.2])ke(P,Le[0]+5.5,Le[1]+o+1,0,"#4a5558");P.cylinder([Le[0]+6.45,.37,Le[1]-1.5],[Le[0]+6.82,.37,Le[1]-1.5],.23,.23,ee.dark,12),Ye(Bn,Lt,1.3,.5,"大型モニター");let Gt=[Le[0]-5.8,Le[1]+.4];P.scope(n.compose(Gt[0],0,Gt[1],0),()=>{tt(P,3,2.8,ee.fabric);for(let o of[-1.45,1.45])for(let u of[-1.3,1.3])P.cylinder([o,.04,u],[o,2.15,u],.025,.025,ee.metal,7)}),Je(P,Gt[0]+.35,Gt[1]+.45,1.55,.7,0);for(let o=0;o<15;o++)P.box(Gt[0]-1+o%5*.45,.2+Math.floor(o/5)*.4,Gt[1]-.7,.41,.38,.48,ee.wood);Ye(Gt[0],Gt[1],3,2.8,"屋外ステージのポップアップテント"),P.cylinder([Le[0],.6,Le[1]+.1],[Le[0],1.9,Le[1]+.1],.018,.018,ee.black,7),P.cylinder([Le[0],1.9,Le[1]+.1],[Le[0]+.36,2.08,Le[1]+.22],.018,.018,ee.black,7),at.sign(Le[0],.34,Le[1]+.914,6.75,.5,_.OUTSTAGE.banner),fn.approach=[Le[0],Le[1]+3.2],fn.marker=[Le[0],2.1,Le[1]],ge.push(fn);for(let o of f.locations.filter(u=>["MEET","EAT2","WC"].includes(u.id)))o.approach=o.pos,o.marker=[o.pos[0],2.5,o.pos[1]],ge.push(o),o.id==="WC"&&at.scope(n.compose(o.pos[0],0,o.pos[1],0),()=>{at.sign(0,2.4,0,2.2,.53,d.banner("WC","体育館南側・トイレ","当日のトイレ",N.I))});e(.45,"木々・遊具・モビリティ走路を作っています");let ai=[[192,116],[225,94],[306,91],[391,108],[436,132],[443,164],[423,178],[350,179],[294,162],[252,141],[209,143]];function Zt(o,u=12){let x=[];for(let R=0;R<o.length;R++){let U=o[(R-1+o.length)%o.length],B=o[R],k=o[(R+1)%o.length],ne=o[(R+2)%o.length];for(let Q=0;Q<u;Q++){let ue=Q/u,Ae=ue*ue,Ce=Ae*ue;x.push([0,1].map(Ue=>.5*(2*B[Ue]+(-U[Ue]+k[Ue])*ue+(2*U[Ue]-5*B[Ue]+4*k[Ue]-ne[Ue])*Ae+(-U[Ue]+3*B[Ue]-3*k[Ue]+ne[Ue])*Ce)))}}return x}let an=Zt(ai.map(o=>L(...o)),16),kn=0,Li=[0],Ic=an.map((o,u)=>{let x=an[(u-1+an.length)%an.length],R=an[(u+1)%an.length],U=R[0]-x[0],B=R[1]-x[1],k=Math.hypot(U,B);return[-B/k,U/k]});for(let o=0;o<an.length;o++){let u=(o+1)%an.length,x=an[o],R=an[u],U=Ic[o],B=Ic[u],k=Math.hypot(R[0]-x[0],R[1]-x[1]);if(kn+=k,Li.push(kn),te.quad([x[0]-U[0],.035,x[1]-U[1]],[x[0]+U[0],.035,x[1]+U[1]],[R[0]+B[0],.035,R[1]+B[1]],[R[0]-B[0],.035,R[1]-B[1]],a("#bba990",1,.98),2,k),o%8<4)for(let ne of[-1,1])Ve(P,[x[0]+U[0]*.95*ne,x[1]+U[1]*.95*ne],[R[0]+B[0]*.95*ne,R[1]+B[1]*.95*ne],.085,a("#f3e8d0"),.043)}let fs=Zt([[171,90],[281,77],[395,95],[452,128],[458,179],[436,190],[330,190],[281,174],[245,151],[176,150]].map(o=>L(...o)),5);function Pc(o,u,x=.65,R=!1,U=!1){let B=Math.hypot(u[0]-o[0],u[1]-o[1]),k=Math.max(1,Math.ceil(B/2.2)),ne=R?a("#a48d66",5):a("#dedfd4",0,.45,.35);for(let Q=0;Q<=k;Q++){let ue=o[0]+(u[0]-o[0])*Q/k,Ae=o[1]+(u[1]-o[1])*Q/k;P.cylinder([ue,.05,Ae],[ue,x+.05,Ae],R?.045:.025,R?.042:.025,ne,7),R||P.box(ue,.035,Ae,.28,.07,.34,ee.base)}for(let Q of[x*.4,x])P.cylinder([o[0],Q,o[1]],[u[0],Q,u[1]],R?.036:.021,R?.036:.021,ne,7);U&&P.quad([o[0],.15,o[1]],[o[0],x,o[1]],[u[0],x,u[1]],[u[0],.15,u[1]],a("#a2aa9a",11,.82),B/1.1,x/1.1)}let Uu=a("#e1ba22",6,.9),Fu=a("#252525",6,.9);function Ou(o,u){let x=Math.hypot(u[0]-o[0],u[1]-o[1]),R=Math.max(1,Math.ceil(x/2.2)),U=B=>[o[0]+(u[0]-o[0])*B,o[1]+(u[1]-o[1])*B];for(let B=0;B<=R;B++){let[k,ne]=U(B/R);P.cylinder([k,.02,ne],[k,1,ne],.008,.008,ee.metal,7),P.cylinder([k,.95,ne],[k,.98,ne],.016,.016,ee.metal,8)}for(let B=0;B<R;B++)for(let k=0;k<8;k++){let ne=(B+k/8)/R,Q=(B+(k+1)/8)/R,ue=U(ne),Ae=U(Q),Ce=.91-.05*Math.sin(Math.PI*k/8),Ue=.91-.05*Math.sin(Math.PI*(k+1)/8);P.cylinder([ue[0],Ce,ue[1]],[Ae[0],Ue,Ae[1]],.012,.012,k%2?Fu:Uu,6)}}for(let o=0;o<fs.length;o++)Ou(fs[o],fs[(o+1)%fs.length]);let zn=f.locations.find(o=>o.id==="MOBILITY");zn.approach=[zn.pos[0]-2,zn.pos[1]+2.1],zn.marker=[zn.pos[0],2.8,zn.pos[1]],ge.push(zn),P.scope(n.compose(zn.pos[0],0,zn.pos[1],0),()=>{tt(P,3,2.7,a("#f1e5cc",6));for(let o of[-1.45,1.45])for(let u of[-1.3,1.3])P.cylinder([o,.05,u],[o,2.2,u],.026,.026,ee.metal,7)}),at.sign(zn.pos[0],2.1,zn.pos[1]+1.37,2.85,.65,_.MOBILITY.banner),St(at,zn.pos[0]-.2,zn.pos[1]+.3,q,-.3);function Lc(o){let u=(o%kn+kn)%kn,x=0;for(;x<an.length-1&&Li[x+1]<u;)x++;let R=an[x],U=an[(x+1)%an.length],B=(u-Li[x])/(Li[x+1]-Li[x]);return{x:R[0]+(U[0]-R[0])*B,z:R[1]+(U[1]-R[1])*B,yaw:Math.atan2(U[0]-R[0],U[1]-R[1])}}let Qt=new s,Ko=new s,Ks=a("#d5d8d1",0,.39,.18),Dc=a("#91a7a6",0,.21,.55);Qt.box(0,.46,-.2,1.22,.2,2.3,ee.dark),Qt.box(0,.84,-.94,1.24,.65,.72,Ks),Qt.box(0,1.02,-.74,1.12,.25,.7,a("#465052",0,.75)),Qt.box(0,.82,.22,1.23,.16,1.18,Ks),Qt.sphere(0,.87,.95,.68,.61,.25,Ks,18,10);let vi=Array.from({length:17},(o,u)=>(u-8)*.07),ps=Array.from({length:9},(o,u)=>u/8),Di=(o,u)=>{let x=Math.abs(o)/.56;return[o,1.22+u*(.69-.1*x*x),1.17-.56*u-.13*x*x]},Jr=(o,u)=>{let x=-.2*u*o/.31360000000000005,R=-.26*o/(.56*.56),U=.69-.1*(o/.56)**2,B=[x*-.56-R*U,.56,U],k=Math.hypot(...B);return B.map(ne=>ne/k)};for(let o=0;o<ps.length-1;o++)for(let u=0;u<vi.length-1;u++){let x=vi[u],R=vi[u+1],U=ps[o],B=ps[o+1],k=Di(x,U),ne=Di(x,B),Q=Di(R,B),ue=Di(R,U),Ae=Jr(x,U),Ce=Jr(x,B),Ue=Jr(R,B),rt=Jr(R,U);Ko.tri(ne,k,ue,Dc,[[0,1],[0,0],[1,0]],[Ce,Ae,rt]),Ko.tri(ne,ue,Q,Dc,[[0,1],[1,0],[1,1]],[Ce,rt,Ue])}let $r=a("#252c2d",0,.68,.12);for(let o of[0,1])for(let u=0;u<vi.length-1;u++)Qt.cylinder(Di(vi[u],o),Di(vi[u+1],o),.021,.021,$r,7);for(let o of[-.56,.56])for(let u=0;u<ps.length-1;u++)Qt.cylinder(Di(o,ps[u]),Di(o,ps[u+1]),.024,.024,$r,7);let Mi=(o,u)=>{let x=Math.abs(o)/.56;return[o,1.91-.1*x*x-.03*Math.max(0,-u),u-.13*x*x]};for(let o=0;o<vi.length-1;o++){let u=vi[o],x=vi[o+1];Qt.quad(Mi(u,.61),Mi(u,-1.12),Mi(x,-1.12),Mi(x,.61),Ks),Qt.cylinder(Mi(u,-1.12),Mi(x,-1.12),.018,.018,$r,7)}for(let o of[-.56,.56])Qt.cylinder(Mi(o,.61),Mi(o,-1.12),.027,.027,$r,8),Qt.cylinder([o,.58,-1.07],Mi(o,-1.12),.026,.026,ee.metal,8);for(let o of[-.65,.65])Qt.box(o,.55,-.05,.14,.12,1.65,Ks),Qt.box(o,1.14,-1,.07,.48,.07,ee.dark),Qt.box(o,1.08,.8,.08,.54,.08,ee.dark);Qt.box(0,1.15,-.59,.96,.2,.48,a("#333b3c",0,.75)),Qt.box(0,1.03,.44,.77,.09,.36,ee.dark),Qt.sphere(0,.99,1.19,.15,.15,.065,ee.dark,12,8);for(let o of[-.42,.42])Qt.box(o,1.02,1.17,.29,.07,.035,a("#f0ebd9",0,.35,.1,.2));for(let o of[-.55,.55])Qt.scope(n.compose(o,.34,-1.02,Math.PI/2),()=>qt(Qt,0,0,0,o>0?1:-1,.34));Qt.scope(n.compose(0,.34,1.2,Math.PI/2),()=>qt(Qt,0,0,0,1,.34)),Qt.cylinder([-.4,1.23,.72],[.4,1.23,.72],.025,.025,ee.dark,9);for(let o of[-.69,.69])Qt.cylinder([o,1.33,.8],[o*1.13,1.37,1],.02,.02,ee.dark,7),Qt.box(o*1.13,1.39,1.02,.19,.11,.055,ee.dark);let Bu=d.banner("DEMO","電動トライク","車体色は仮表示","#53605b");Qt.scope(n.compose(.69,0,-.65,Math.PI/2),()=>Qt.sign(0,.92,0,1.3,.3,Bu));let js=f.records.find(o=>o.kind==="goat"),Ht=js.pos,Qs=6.5,oi=6.3,jo=[[Ht[0]-Qs/2,Ht[1]-oi/2],[Ht[0]+Qs/2,Ht[1]-oi/2],[Ht[0]+Qs/2,Ht[1]+oi/2],[Ht[0]-Qs/2,Ht[1]+oi/2]];yt(jo,te,a("#c7bb89",2,.97),2);for(let o=0;o<4;o++)Pc(jo[o],jo[(o+1)%4],1.1,!0);Ye(Ht[0],Ht[1],Qs,oi,"ヤギ牧場"),js.approach=[Ht[0],Ht[1]+oi/2+3.1],js.marker=[Ht[0],2.5,Ht[1]+oi/2],ge.push(js),at.sign(Ht[0],2.72,Ht[1]+oi/2+.06,3.4,.68,_[js.id].banner);for(let o of[-1,1])P.cylinder([Ht[0]+o*1.6,.05,Ht[1]+oi/2],[Ht[0]+o*1.6,3.09,Ht[1]+oi/2],.05,.05,ee.wood,7);P.box(Ht[0]-2,.26,Ht[1]-1.7,.9,.48,1.4,a("#b6a166",2)),P.cylinder([Ht[0]+2,.05,Ht[1]-2],[Ht[0]+2,.28,Ht[1]-2],.35,.38,a("#6b8990",0,.3,.4),18);function ku(){let o=new s,u=a("#e9e4d5",0,.95),x=a("#776654",0,.92);o.sphere(0,.73,0,.3,.29,.54,u,18,10),o.cylinder([0,.85,.3],[0,1.13,.52],.18,.14,u,14),o.sphere(0,1.19,.61,.15,.18,.24,u,16,10),o.sphere(0,1.1,.78,.12,.1,.1,x,12,7);for(let R of[-1,1]){o.sphere(R*.22,1.26,.48,.19,.055,.085,u,12,7),o.sphere(R*.137,1.22,.67,.015,.024,.025,ee.black,8,6),o.cylinder([R*.09,1.31,.51],[R*.11,1.48,.38],.039,.021,x,9),o.cylinder([R*.11,1.48,.38],[R*.1,1.55,.27],.021,.009,x,8);for(let U of[-.32,.33])o.cylinder([R*.19,.6,U],[R*.18,.12,U+.03],.046,.03,u,9),o.box(R*.18,.07,U+.05,.09,.1,.14,x)}return o.cylinder([0,.92,-.46],[0,1.06,-.62],.035,.016,u,9),o.cylinder([0,1.08,.77],[0,.92,.72],.045,.01,u,9),o}let Ki=f.records.find(o=>o.kind==="baseball");Ki.locationSource="配置ゾーニング 9月30日 Ver.7案（1ページ）";let pn=Ki.pos;Ki.approach=[pn[0]+9,pn[1]+2],Ki.marker=[pn[0]+8,2.8,pn[1]+1],ge.push(Ki),at.sign(pn[0]+8,1.8,pn[1]+1,4,.82,_[Ki.id].banner);for(let o of[-1,1])P.cylinder([pn[0]+8+o*1.9,.08,pn[1]+1],[pn[0]+8+o*1.9,2.3,pn[1]+1],.035,.035,ee.metal,7);for(let o of[[-3,-2],[0,-5],[3,-2],[0,1]])P.box(pn[0]+o[0],.052,pn[1]+o[1],.34,.045,.34,a("#e8e2c8"));P.cylinder([pn[0]+4,.08,pn[1]+2],[pn[0]+4.4,.1,pn[1]+3.05],.022,.045,a("#b49566",5),9),P.sphere(pn[0]+4.25,.095,pn[1]+2.2,.074,.074,.074,a("#e9e6dc"),12,8);let zu=d.add("baseball-net",(o,u)=>{o.clearRect(0,0,u,u),o.strokeStyle="#becab2",o.lineWidth=4,o.beginPath();for(let x=0;x<=u;x+=64)o.moveTo(x,0),o.lineTo(x,u),o.moveTo(0,x),o.lineTo(u,x);o.stroke()}),Vu=d.add("baseball-flag",(o,u)=>{o.fillStyle="#672d3d",o.fillRect(0,0,u,u);for(let x=0;x<u;x+=3)o.fillStyle=x%6?"rgba(233,208,172,.035)":"rgba(0,0,0,.055)",o.fillRect(x,0,1,u);o.strokeStyle="#d0b792",o.lineWidth=3,o.strokeRect(9,9,u-18,u-18),o.textAlign="center",o.fillStyle="#f4d990",o.font='700 27px "Yu Gothic",sans-serif',o.fillText("オール西鎌倉少年野球クラブ",u/2,64,475),o.fillStyle="#f5ead8",o.font="bold 170px Georgia,serif",o.fillText("N",u/2,305),o.fillStyle="#df6358",o.font='700 93px "Yu Mincho",serif',o.fillText("必",90,293),o.fillText("勝",424,293),o.strokeStyle="#d1d0ac",o.lineWidth=6;for(let x of[-1,1]){o.beginPath(),o.moveTo(u/2,396),o.quadraticCurveTo(u/2+x*120,357,u/2+x*103,186),o.stroke();for(let R=0;R<10;R++){let U=R/9,B=u/2+x*(22+81*Math.sin(U*Math.PI/2)),k=380-U*181;o.save(),o.translate(B,k),o.rotate(x*(.8+U*.4)),o.fillStyle="#d4d4b5",o.beginPath(),o.ellipse(0,0,5,16,0,0,Math.PI*2),o.fill(),o.restore()}}}),Gu=d.sign("baseball-board",Ki.name,"野球体験","#672d3d","T-5");P.scope(n.compose(pn[0],0,pn[1]),()=>{let o=a("#38674d",0,.65,.15),u=a("#476e48",zu,.95),x=a("#eeeadd",0,.97);function R(B,k,ne,Q,ue=0){P.scope(n.compose(B,0,k,ue),()=>{for(let Ae of[-1,1]){let Ce=Ae*ne/2;P.cylinder([Ce,.04,0],[Ce,Q,0],.029,.029,o,8),P.cylinder([Ce,.04,-.65],[Ce,.04,.65],.025,.025,o,8),P.cylinder([Ce,.05,.6],[Ce,1,0],.023,.023,o,8)}P.cylinder([-ne/2,Q,0],[ne/2,Q,0],.025,.025,o,8),P.quad([-ne/2,.09,0],[-ne/2,Q-.02,0],[ne/2,Q-.02,0],[ne/2,.09,0],u,ne/.8,Q/.8),P.cylinder([-ne/2,.1,0],[ne/2,.1,0],.045,.045,o,8)})}R(3.4,-1.3,4.8,3.3),R(-4,-5.5,2.4,2.5,.35),R(-9,-2,2.4,2.5,-.2),P.sign(2.4,2.22,-1.25,2,1.48,Vu);for(let B of[1.46,3.34])P.cylinder([B,2.98,-1.24],[B,3.28,-1.3],.009,.009,a("#d9d4b4"),6);Je(P,.1,1,1.8,.72,0,!1,!1),ke(P,-1.15,1.05,.18,"#3e4647"),ke(P,7.1,-.4,-.35,"#42484d"),P.scope(n.compose(.15,.72,1.05,-.08),()=>P.sign(0,.48,0,.78,.83,Gu,!0)),P.box(-.55,.89,.98,.38,.24,.3,a("#778c87",0,.8));for(let B=0;B<5;B++)P.cylinder([-.7+B*.068,.99,.99],[-.7+B*.068,1.16,.99],.014,.014,a(B%2?"#c6a264":"#edddb0"),6);function U(B,k,ne){for(let Q=0;Q<48;Q++){let ue=Q/48*g,Ae=(Q+1)/48*g,Ce=(Ue,rt)=>[B+Math.cos(Ue)*rt,.043,k+Math.sin(Ue)*rt];P.quad(Ce(ue,ne-.025),Ce(Ae,ne-.025),Ce(Ae,ne+.025),Ce(ue,ne+.025),x)}}for(let[B,k,ne]of[[2,5.2,!1],[7.8,5.5,!1],[-3,2.5,!0]]){U(B,k,.66);let Q=a(ne?"#388faf":"#e5cc57",0,.9);P.box(B,.035,k,.34,.06,.34,Q),P.cylinder([B,.06,k],[B,.62,k],.145,.022,Q,12)}for(let B of[3.9,4.65,5.4]){let k=a("#78b3ce",0,.78);P.cylinder([B,.04,3.8],[B,.4,3.8],.21,.16,k,16),P.cylinder([B,.037,3.8],[B,.071,3.8],.225,.222,k,16)}for(let B of[-1.9,6])P.box(B,.044,-3.7,.06,.015,7.2,x);P.box(2.05,.044,-7.3,7.9,.015,.06,x),P.box(2.05,.044,-.1,7.9,.015,.06,x),P.box(3.5,.044,7.1,11.5,.015,.06,x)});let Qo=(o,u,x)=>o+x>p[0]&&o-x<W[0]&&u+x>p[1]&&u-x<W[1];function Hu(o,u,x=7,R=!1){let U=L(o,u),B=U[0],k=U[1],ne=h(Math.round(o*721+u*91)),Q=u>=410&&u<=420?{132:[6.8,.53,!1],152:[6.3,.56,!1],175:[7.6,.26,!0],252:[7.8,.28,!0]}[o]:null;Q&&(x=Q[0]);let ue=P;ue.cylinder([B,0,k],[B+.12,x*.57,k-.1],.19,.08,ee.bark,11);for(let Ae=0;Ae<6;Ae++){let Ce=Ae*g/6+ne(),Ue=[B,x*.34+ne()*.6,k],rt=[B+Math.cos(Ce)*x*.27,x*(.62+ne()*.17),k+Math.sin(Ce)*x*.27];if(!Qo((Ue[0]+rt[0])/2,(Ue[2]+rt[2])/2,Math.max(Math.abs(Ue[0]-rt[0]),Math.abs(Ue[2]-rt[2]))/2+.08)){ue.cylinder(Ue,rt,.073,.026,ee.bark,8);for(let Jt=0;Jt<3;Jt++){let Ut=[rt[0]+(ne()-.5)*1.4,rt[1]+ne()*1.05,rt[2]+(ne()-.5)*1.4];Qo((rt[0]+Ut[0])/2,(rt[2]+Ut[2])/2,Math.max(Math.abs(rt[0]-Ut[0]),Math.abs(rt[2]-Ut[2]))/2+.03)||ue.cylinder(rt,Ut,.029,.01,ee.bark,7)}}}for(let Ae=0;Ae<(Q?180:52);Ae++){let Ce=ne()*g,Ue=Math.sqrt(ne())*x*(Q?Q[1]:.38),rt=B+Math.cos(Ce)*Ue,Jt=k+Math.sin(Ce)*Ue,Ut=x*(Q?.57:.7)+ne()*x*(Q?.38:.25)-Ue/x*.8,Ct=x*(Q?.12+ne()*.09:.19+ne()*.13),He=ne()*g,xt=(Q?Q[2]:R)?ee.autumn:ee.leaf;Qo(rt,Jt,Ct*.71)||Xe.scope(n.compose(rt,Ut,Jt,He),()=>{Xe.quad([-Ct/2,-Ct/2,0],[-Ct/2,Ct/2,0],[Ct/2,Ct/2,0],[Ct/2,-Ct/2,0],xt),Xe.quad([-Ct/2,0,-Ct/2],[-Ct/2,0,Ct/2],[Ct/2,0,Ct/2],[Ct/2,0,-Ct/2],xt)})}_e.push({x:B,z:k,r:.26})}[[143,54],[176,48],[207,47],[234,46],[270,45],[301,48],[366,63],[399,73],[431,85],[464,98],[496,116],[532,131],[561,151],[566,206],[566,240],[568,275],[581,361],[582,414],[581,521],[579,566],[568,627],[547,692],[509,719],[480,730],[432,738],[404,742],[371,748],[323,757],[282,759],[243,764],[205,769],[168,773],[130,775],[92,750],[83,712],[75,671],[53,584],[32,527],[38,382],[62,335],[68,159],[132,418],[152,418],[175,413],[252,412],[283,414],[321,415],[348,419],[381,417],[417,418],[420,396]].forEach((o,u)=>Hu(o[0],o[1],M(5.8,8.7),u%3!==0));let Kn=L(525,171);for(let o=0;o<6;o++){let u=Kn[0]+o*1.5;P.cylinder([u,.03,Kn[1]],[u,2.45,Kn[1]],.033,.033,a("#287b9c",0,.5,.35),8),P.cylinder([u,2.45,Kn[1]],[u,2.45,Kn[1]+1.1],.025,.025,ee.metal,8),P.cylinder([u,.03,Kn[1]+1.1],[u,2.45,Kn[1]+1.1],.033,.033,a("#287b9c"),8)}for(let o of[Kn[1],Kn[1]+1.1])P.cylinder([Kn[0],2.45,o],[Kn[0]+7.5,2.45,o],.03,.03,ee.metal,8);let Kr=L(514,238);for(let o=0;o<4;o++)for(let u=0;u<4;u++){let x=Kr[0]+o*.7,R=Kr[1]+u*.7;P.cylinder([x,.02,R],[x,2.1,R],.022,.022,a("#287b9c"),7);for(let U=.7;U<2.2;U+=.7)o<3&&P.cylinder([x,U,R],[x+.7,U,R],.02,.02,a("#287b9c"),7),u<3&&P.cylinder([x,U,R],[x,U,R+.7],.02,.02,a("#287b9c"),7)}Ye(Kr[0]+1.05,Kr[1]+1.05,2.3,2.3,"遊具");for(let o=0;o<ot.length;o++){let u=ot[o],x=ot[(o+1)%ot.length];o===6||o===15||o===16||Pc(u,x,1.55,!1,!0)}for(let o of["GATE_MAIN","GATE_WEST"]){let u=f.locations.find(U=>U.id===o),x=u.pos,R=o==="GATE_MAIN"?-Math.PI/4:.7;P.scope(n.compose(x[0],0,x[1],R),()=>{for(let U of[-1,1])P.box(U*2.6,1,0,.52,2,.58,ee.wall),P.box(U*2.6,2.03,0,.6,.08,.64,ee.base),P.cylinder([U*2.75,.05,.25],[U*2.75,3.35,.25],.036,.036,ee.metal,9);if(o==="GATE_MAIN"){let U=a("#586567",0,.54,.35),B=a("#aeb0a7",3,.96);for(let k of[-1,1]){P.box(k*4.4,.47,0,3.05,.94,.58,B),P.box(k*4.4,.96,0,3.13,.08,.68,ee.base);for(let ne=.24;ne<=2.64;ne+=.24)P.cylinder([k*2.45,.22,ne],[k*2.45,1.52,ne],.019,.019,U,6);for(let ne of[.23,1.51])P.cylinder([k*2.45,ne,.18],[k*2.45,ne,2.72],.026,.026,U,6)}}P.sign(0,3.12,.25,5.7,.96,V)}),u.approach=o==="GATE_MAIN"?[49,75]:[-43,-38],u.marker=[x[0],3.75,x[1]],ge.push(u)}{let o=f.locations.find(u=>u.id==="GATE_WEST");P.scope(n.compose(o.pos[0],0,o.pos[1],.7),()=>{P.box(0,.045,1.15,5.05,.09,3.75,a("#b7b5a8",3,.96));for(let u of[-1,1]){P.box(u*3.24,.33,1.25,.52,.66,4.1,a("#a3a59a",3,.98)),P.box(u*3.24,.7,1.25,.61,.085,4.25,a("#c7c9ba",3,.93));for(let x of[-.52,.55,1.62,2.69])P.box(u*3.24,.34,x,.54,.42,.023,a("#898e83",3,.96))}})}let el=new s,Wu=d.sign("flag",`つながり
フェスタ`,`＠にしかま
2026`,"#366568","");el.animate([0,0,0],9,()=>el.quad([.05,2.8,0],[.05,1,0],[.62,1,0],[.62,2.8,0],a("#fff",Wu,.8)));let Nc=[];for(let o of[[448,520],[440,611],[543,622],[468,407],[282,378],[130,128],[461,296]]){let u=L(...o);P.cylinder([u[0],.03,u[1]],[u[0],3,u[1]],.016,.014,ee.whiteMetal,8),P.box(u[0],.055,u[1],.48,.1,.4,a("#dedfd6")),Nc.push({matrix:n.compose(u[0],0,u[1],-.3),info:[M(0,6),0,0,0]})}for(let o of[[465,441],[459,446],[456,452],[458,463],[445,472],[552,651],[542,651],[178,166]]){let u=L(...o);P.box(u[0],.035,u[1],.32,.07,.32,a("#b1543e")),P.cylinder([u[0],.06,u[1]],[u[0],.63,u[1]],.125,.022,a("#c7793c"),10),P.cylinder([u[0],.32,u[1]],[u[0],.4,u[1]],.072,.061,a("#e6ddc7"),10)}let Uc=[[[160,108],[180,98]],[[222,85],[246,75]],[[260,78],[282,68]],[[351,69],[378,83]],[[397,69],[423,83]],[[433,96],[457,111]],[[467,114],[493,130]],[[26,428],[47,428]],[[502,544],[527,544]],[[508,573],[533,573]],[[495,683],[520,671]],[[529,668],[551,656]],[[565,647],[580,637]]].map(([o,u])=>[L(...o),L(...u)]),Xu=a("#d87834",6,.9),tl=a("#f8eee1",6,.93),nl=a("#c33c2d",6,.92);function qu(o,u){P.box(o,.045,u,.35,.09,.35,ee.dark),P.cylinder([o,.09,u],[o,.67,u],.14,.018,Xu,10),P.cylinder([o,.32,u],[o,.41,u],.095,.075,tl,10)}for(let[o,u]of Uc){for(let[x,R]of[o,u])qu(x,R);for(let x=0;x<8;x++){let R=x/8,U=(x+1)/8;P.cylinder([o[0]+(u[0]-o[0])*R,.78,o[1]+(u[1]-o[1])*R],[o[0]+(u[0]-o[0])*U,.78,o[1]+(u[1]-o[1])*U],.035,.035,x%2?tl:nl,7)}}for(let o of[[108,62],[452,744]]){let[u,x]=L(...o);P.cylinder([u-.38,.04,x-.38],[u+.38,.04,x+.38],.055,.055,nl,8),P.cylinder([u-.38,.04,x+.38],[u+.38,.04,x-.38],.055,.055,nl,8)}Ve(P,L(255,720),L(451,720),.065,tl,.05);let Yu=d.sign("立入禁止","立入禁止","","#b73527",""),Zu=d.sign("駐輪禁止","駐輪禁止","","#b73527","");for(let o of[[56,419],[466,451]]){let[u,x]=L(...o);St(at,u,x,Yu)}for(let o of[[108,62],[452,744]]){let[u,x]=L(...o);St(at,u,x,Zu)}function Fc(o,u,x=25){let R=L(o,u),U=7;for(let B=0;B<U;B++){let k=B/U*x,ne=(B+1)/U*x,Q=2.4-B/U*1.6,ue=2.4-(B+1)/U*1.6;for(let Ae of[-1,1])for(let Ce of[-1,1])P.cylinder([R[0]+Ae*Q,k,R[1]+Ce*Q],[R[0]+Ae*ue,ne,R[1]+Ce*ue],.06,.045,ee.metal,6),P.cylinder([R[0]+Ae*Q,k,R[1]+Ce*Q],[R[0]-Ae*ue,ne,R[1]+Ce*ue],.026,.026,ee.metal,6),P.cylinder([R[0]+Ae*Q,k,R[1]+Ce*Q],[R[0]+Ae*ue,ne,R[1]-Ce*ue],.026,.026,ee.metal,6)}for(let B of[x*.71,x*.87,x]){P.cylinder([R[0]-5,B,R[1]],[R[0]+5,B,R[1]],.065,.065,ee.metal,7);for(let k of[-1,1])P.cylinder([R[0]+k*.9,B-1.8,R[1]],[R[0]+k*5,B,R[1]],.04,.04,ee.metal,6),P.cylinder([R[0]+k*4.7,B,R[1]],[R[0]+k*4.7,B-1,R[1]],.09,.09,a("#9b9d84"),10)}return Ye(R[0],R[1],5,5,"鉄塔"),R}let jr=Fc(322,56,26),Oc=Fc(548,194,26);for(let o of[-4.7,4.7])for(let u of[18.46,22.62,26]){let x=[];for(let R=0;R<=36;R++){let U=R/36;x.push([jr[0]+(Oc[0]-jr[0])*U+o,u-1-3.4*Math.sin(U*Math.PI),jr[1]+(Oc[1]-jr[1])*U])}P.tube(x,.035,ee.dark,5)}let bi=new s;for(let o=0;o<27;o++){let u=o/27*g,x=125+M(0,35),R=o<9?o<4?-151:-83:o<18?84:-66+(o-18)*16.5,U=o<9?-42+o*17:o<18?-21+(o-9)*17:132,B=M(6,10),k=M(6,11),ne=M(5.2,7.3);bi.scope(n.compose(0,FestaScenery.height(R,U),0),()=>{bi.box(R,ne/2,U,B,ne,k,a(["#ddd8c9","#c4ccca","#e6e0d4","#b8b9ac"][o%4],3,.9));let Q=a(["#676f70","#8a7163","#5d6966"][o%3],10,.7);bi.tri([R-B/2-.35,ne,U-k/2-.35],[R+B/2+.35,ne,U-k/2-.35],[R,ne+2,U-k/2-.35],Q),bi.tri([R+B/2+.35,ne,U+k/2+.35],[R-B/2-.35,ne,U+k/2+.35],[R,ne+2,U+k/2+.35],Q),bi.quad([R-B/2-.35,ne,U-k/2-.35],[R-B/2-.35,ne,U+k/2+.35],[R,ne+2,U+k/2+.35],[R,ne+2,U-k/2-.35],Q,3,3),bi.quad([R,ne+2,U-k/2-.35],[R,ne+2,U+k/2+.35],[R+B/2+.35,ne,U+k/2+.35],[R+B/2+.35,ne,U-k/2-.35],Q,3,3);for(let ue=0;ue<3;ue++)bi.box(R+(ue-1)*2.1,ne*.62,U+k/2+.02,1.15,1.35,.03,ee.glass)})}let Ju=d.banner("WC","にしかまくら子どもの家・トイレ","当日のトイレ","#426861");FestaScenery.build({details:P,green:Xe,distant:bi,signGeo:at,childSign:Ju,p:L,m:ee,mat:a,M:n,rng:h,TAU:g,ga:p,gb:W,gc:z,gw:ae,gd:Te,gymRise:he});function Si(o,u,x=.26){if(!bt(o,u,ot)||bt(o,u,fs))return!1;for(let R of _t){let U=Math.max(Math.abs(o-R.x)-R.w/2,0),B=Math.max(Math.abs(u-R.z)-R.d/2,0);if(U*U+B*B<x*x)return!1}for(let R of _e)if(Math.hypot(o-R.x,u-R.z)<x+R.r)return!1;return!0}function il(o,u){return o>=p[0]+.05&&o<=W[0]-.15&&u>=p[1]+.05&&u<=W[1]-.05?he:o>=p[0]-1.65&&o<p[0]+.05&&Pe.some(([x,R])=>u>=L(X,x)[1]+.15&&u<=L(X,R)[1]-.15)?he*m((o-p[0]+1.65)/1.7,0,1):0}function er(o,u=10){if(Si(o[0],o[1],.31))return[...o];for(let x=.4;x<=u;x+=.35)for(let R=0;R<32;R++){let U=R*g/32,B=o[0]+Math.sin(U)*x,k=o[1]+Math.cos(U)*x;if(Si(B,k,.31))return[B,k]}return null}let sl=f.locations.find(o=>o.id==="GYM");sl.approach=[z[0],p[1]+18.8],sl.marker=[z[0],3.1+he,p[1]+18.8],ge.push(sl);for(let o of ge)o.id==="WC"&&(o.approach=[(lt+Ne)/2,W[1]+5.5]),o.approach=er(o.approach)||er(o.pos);e(.62,"来場者・ヤギ・走行車両の動きを準備しています");function Bc(o=0){let u=new s,x=a(["#7f9c9a","#d8c5ad","#a76250","#4c6670","#787c58","#b7b4a9","#655c73","#e3d1b1"][o%8],6,.93),R=a(["#41494e","#746854","#4a575a","#485669"][o%4],6,.91),U=a(["#cba584","#d8b69a","#bc9879","#d0ad8c"][o%4],0,.78),B=a(["#383733","#4b4137","#77756e"][o%3],0,.96),k=[[.88,.19,.126],[.98,.19,.13],[1.16,.218,.148],[1.32,.243,.144],[1.385,.222,.127],[1.445,.075,.064]];for(let ne=0;ne<k.length-1;ne++)for(let Q=0;Q<20;Q++){let ue=Q/20*g,Ae=(Q+1)/20*g,Ce=k[ne],Ue=k[ne+1],rt=(Jt,Ut)=>[Math.cos(Ut)*Jt[1],Jt[0],Math.sin(Ut)*Jt[2]];u.quad(rt(Ce,ue),rt(Ue,ue),rt(Ue,Ae),rt(Ce,Ae),x,1,1)}u.cylinder([0,1.4,0],[0,1.49,0],.061,.062,U,10),u.sphere(0,1.57,.012,.114,.142,.107,U,16,11),u.sphere(0,1.575,-.009,.116,.145,.11,B,20,10,0,1.26),u.sphere(0,1.58,.127,.017,.032,.024,U,10,7);for(let ne of[-1,1])u.sphere(ne*.111,1.57,.008,.024,.042,.026,U,9,7),u.sphere(ne*.039,1.601,.111,.009,.004,.005,ee.black,8,5),u.cylinder([ne*.026,1.621,.104],[ne*.053,1.621,.098],.004,.004,B,5),u.animate([ne*.23,1.37,0],ne,()=>{u.sphere(ne*.235,1.335,0,.082,.105,.085,x,12,9),u.sphere(ne*.295,1.08,.035,.064,.073,.064,x,12,8),u.cylinder([ne*.23,1.37,0],[ne*.295,1.08,.035],.079,.064,x,12),u.cylinder([ne*.295,1.08,.035],[ne*.29,.9,.06],.063,.045,x,11),u.sphere(ne*.287,.859,.065,.043,.067,.038,U,11,7)}),u.animate([ne*.108,.88,0],ne*2,()=>{u.cylinder([ne*.105,.9,0],[ne*.12,.49,.015],.098,.077,R,12),u.cylinder([ne*.12,.49,.015],[ne*.12,.1,0],.077,.06,R,11),u.sphere(ne*.12,.077,.052,.075,.068,.146,a("#383d3c",0,.75),12,7),u.box(ne*.12,.034,.054,.142,.035,.25,a("#c1beb1"))});if(o%3===0&&(u.sphere(0,1.7,-.006,.126,.045,.126,a("#b4a481",6),14,8),u.box(0,1.676,.125,.18,.018,.14,a("#b4a481",6))),o%4===1){u.sphere(0,1.17,-.16,.16,.23,.1,a("#73664e",6),13,9);for(let ne of[-1,1])u.cylinder([ne*.16,1.36,.04],[ne*.12,1.03,.09],.017,.017,a("#756b58"),7)}return o%4===2&&(u.cylinder([.29,.91,.06],[.32,.66,.06],.01,.01,a("#aa9675"),7),u.box(.32,.57,.06,.19,.24,.22,a("#d3c2a1",6))),u}function $u(o){let u=Bc(o),x=new s;for(let U=0;U<u.used;U+=60)if(!(Math.abs(u.data[U+19])>1.5&&Math.abs(u.data[U+19])<3))for(let B=0;B<3;B++){let k=U+B*20,ne={color:Array.from(u.data.slice(k+8,k+11)),p:Array.from(u.data.slice(k+12,k+16)),ao:u.data[k+11]};x.vertex([u.data[k],u.data[k+1]-.4,u.data[k+2]],Array.from(u.data.slice(k+3,k+6)),Array.from(u.data.slice(k+6,k+8)),ne)}let R=a(["#41494e","#746854","#4a575a","#485669"][o%4],6,.9);for(let U of[-1,1])x.cylinder([U*.105,.49,0],[U*.12,.46,.35],.1,.08,R,12),x.sphere(U*.12,.46,.35,.078,.084,.085,R,12,8),x.cylinder([U*.12,.46,.35],[U*.12,.105,.39],.078,.058,R,12),x.sphere(U*.12,.078,.45,.073,.06,.145,a("#383d3c"),12,8),x.box(U*.12,.035,.45,.14,.035,.25,a("#b8b9ad"));return x}function Ku(o){let u=new s,x=a(["#dfb357","#72a0a2","#aa6357","#8c9a66"][o%4],6,.92),R=a("#506277",6,.91),U=a("#d4ad8b",0,.77),B=a("#3d342e",0,.94);u.sphere(0,.83,0,.2,.3,.145,x,14,10),u.cylinder([0,1.04,0],[0,1.17,0],.065,.06,U,10),u.sphere(0,1.34,0,.165,.19,.15,U,16,11),u.sphere(0,1.4,-.015,.17,.145,.153,B,16,9,0,1.35);for(let k of[-1,1])u.sphere(k*.06,1.36,.141,.01,.008,.008,ee.dark,8,5),u.animate([k*.19,1.04,0],k,()=>{u.cylinder([k*.19,1.02,0],[k*.27,.65,.025],.067,.045,x,10),u.sphere(k*.27,.62,.03,.048,.06,.044,U,10,7)}),u.animate([k*.09,.58,0],k*2,()=>{u.cylinder([k*.09,.58,0],[k*.11,.25,0],.079,.062,R,10),u.cylinder([k*.11,.25,0],[k*.11,.09,.025],.06,.05,R,10),u.sphere(k*.11,.055,.085,.072,.052,.115,ee.dark,10,7)});return u}function ju(){let o=new s,u=a("#f7f6f1",6,.96),x=a("#eeb5bf",0,.84),R=a("#252629",0,.74),U=a("#d3343f",6,.82),B=a("#a4cfe2",6,.88),k=a("#80acc0",6,.88),ne=a("#83b8a5",6,.82),Q=a("#e3c538",6,.82);o.sphere(0,.75,-.02,.54,.63,.41,u,32,22),o.sphere(0,1.18,-.01,.44,.3,.36,u,28,16);for(let He of[-1,1]){o.animate([He*.27,.22,.13],He,()=>{o.sphere(He*.27,.145,.13,.205,.145,.27,u,22,13);for(let $t=-1;$t<=1;$t++)o.sphere(He*.27+$t*.1,.095,.34,.06,.045,.085,u,11,8)});let xt=He===-1,Bt=[He*.43,1.12,-.04],kt=[He*.54,xt?1.1:.96,.075],ut=[He*.64,xt?1.1:.83,xt?.25:.18];if(o.sphere(...Bt,.19,.21,.18,u,18,12),o.cylinder(Bt,kt,.145,.13,u,16),o.cylinder(kt,ut,.13,.12,u,16),o.sphere(...ut,.15,.15,.14,u,18,12),xt){o.sphere(ut[0],ut[1]-.015,ut[2]+.134,.052,.06,.014,x,12,9);for(let $t=-1;$t<=1;$t++)o.sphere(ut[0]+$t*.047,ut[1]+.074,ut[2]+.115,.02,.027,.009,x,9,7)}}let ue=[[-.36,.48,-.3],[-.53,.41,-.43],[-.7,.44,-.49],[-.83,.55,-.5],[-.9,.71,-.47],[-.86,.79,-.43]];for(let He=1;He<ue.length;He++){let xt=.091-He*.005;o.cylinder(ue[He-1],ue[He],xt+.006,xt,u,14),o.sphere(...ue[He],xt,xt,xt,u,14,10)}o.sphere(0,1.67,.055,.7,.55,.51,u,36,24);let Ae=(He,xt)=>[(He[0]-550)*.00445,2.2+(667-He[1])*.00445,xt],Ce=(He,xt,Bt,kt)=>Array.from({length:8},(ut,$t)=>{let vn=($t+1)/8,Wt=1-vn;return[0,1].map(un=>Wt*Wt*Wt*He[un]+3*Wt*Wt*vn*xt[un]+3*Wt*vn*vn*Bt[un]+vn*vn*vn*kt[un])}),Ue=(He,xt,Bt)=>Array.from({length:5},(kt,ut)=>{let $t=(ut+1)/5,vn=1-$t;return[0,1].map(Wt=>vn*vn*He[Wt]+2*vn*$t*xt[Wt]+$t*$t*Bt[Wt])}),rt=[[[508,674],...Ce([508,674],[481,643],[444,624],[408,633]),[390,640],...Ue([390,640],[385,645],[387,653]),...Ce([387,653],[389,675],[402,702],[416,721])],[[594,674],...Ce([594,674],[619,656],[660,645],[690,659]),[712,672],...Ue([712,672],[718,678],[714,685]),...Ce([714,685],[708,701],[683,734],[671,743])]],Jt=[[[444,661],...Ce([444,661],[456,661],[467,670],[469,680]),...Ce([469,680],[472,691],[469,701],[463,708]),[430,706],...Ue([430,706],[419,696],[421,684]),...Ce([421,684],[423,673],[433,663],[444,661])],[[650,677],...Ce([650,677],[663,678],[672,690],[672,702]),...Ce([672,702],[672,712],[665,722],[658,727]),[629,705],...Ue([629,705],[623,694],[631,685]),...Ce([631,685],[638,679],[643,677],[650,677])]];function Ut(He,xt,Bt,kt=!1){let ut=He.map(Wt=>Ae(Wt,xt)),$t=[ut.reduce((Wt,un)=>Wt+un[0],0)/ut.length,ut.reduce((Wt,un)=>Wt+un[1],0)/ut.length,xt],vn=ut.reduce((Wt,un,ms)=>Wt+un[0]*ut[(ms+1)%ut.length][1]-ut[(ms+1)%ut.length][0]*un[1],0);for(let Wt=0;Wt<ut.length;Wt++){let un=(Wt+1)%ut.length;vn>0!==kt?o.tri($t,ut[Wt],ut[un],Bt):o.tri($t,ut[un],ut[Wt],Bt)}return ut}for(let He of[-1,1]){let xt=rt[He<0?0:1],Bt=Ut(xt,.135,u),kt=Ut(xt,.065,u,!0);for(let ut=0;ut<xt.length;ut++){let $t=(ut+1)%xt.length;o.quad(Bt[ut],kt[ut],kt[$t],Bt[$t],u)}Ut(Jt[He<0?0:1],.142,x),o.sphere(He*.245,1.78,.526,.096,.099,.027,R,20,14),o.sphere(He*.225,1.815,.553,.027,.034,.01,u,10,8),o.sphere(He*.274,1.747,.552,.012,.014,.008,u,8,6),o.tube([[He*.15,1.967,.477],[He*.22,2.005,.471],[He*.3,1.979,.458]],.011,R,8),o.tube([[He*.16,2.055,.455],[He*.21,2.069,.448]],.009,R,7);for(let ut=-1;ut<=1;ut++){let $t=1.57+ut*.08;o.tube([[He*.49,$t,.432],[He*.64,$t+ut*.018,.393],[He*.8,$t+ut*.033,.338]],.008,R,7)}}o.sphere(0,1.585,.567,.053,.033,.023,x,14,10);for(let He of[-1,1]){let xt=[];for(let Bt=0;Bt<=10;Bt++){let kt=Bt/10;xt.push([He*.19*kt,1.515-.068*Math.sin(Math.PI*kt),.57-.044*kt])}o.tube(xt,.011,R,8)}let Ct=[];for(let He=0;He<=28;He++){let xt=He/28*Math.PI*2;Ct.push([Math.sin(xt)*.445,1.205,Math.cos(xt)*.351-.01])}o.tube(Ct,.029,U,9),o.sphere(0,1.17,.367,.056,.044,.025,a("#d9d4ce",0,.9),13,8),o.sphere(-.01,1.125,.413,.21,.055,.064,u,20,12),o.sphere(-.165,1.135,.458,.026,.026,.021,u,12,8),o.tri([.18,1.12,.437],[.3,1.18,.423],[.26,1.08,.424],u),o.sphere(-.17,1.143,.48,.01,.01,.008,R,8,6);for(let He=0;He<5;He++)o.sphere(-.1+He*.05,1.104,.476,.007,.007,.006,R,7,5);o.tube([[-.37,1.14,.288],[-.33,1,.366],[-.23,.84,.396],[-.1,.68,.42],[.08,.55,.445],[.24,.51,.457]],.024,Q,9),o.sphere(.28,.555,.415,.285,.297,.15,k,24,16),o.sphere(.28,.565,.532,.251,.259,.047,B,24,16);for(let He=0;He<3;He++)for(let xt=0;xt<6-He;xt++){let Bt=.083+xt*.078+He*.04,kt=.828+He*.058,ut=.51-He*.02;o.sphere(Bt,kt,ut,.046,.046,.044,ne,11,8)}for(let He of[-1,1])o.sphere(.28+He*.078,.603,.582,.015,.019,.01,R,9,7),o.sphere(.28+He*.078,.475,.575,.01,.013,.008,R,8,6);return o.tube([[.21,.53,.577],[.25,.504,.581],[.28,.5,.582],[.32,.515,.58],[.35,.538,.575]],.009,R,8),o}let kc=Array.from({length:8},()=>[]),zc=Array.from({length:4},()=>[]),ji=[],Qu=0;function tr(o,u,x=0,R=!1,U=1,B=null,k="visitor"){let ne=Qu++,Q=k==="child",ue=ne%(Q?4:8),Ae={matrix:n.compose(o,0,u,x,U),info:[M(0,6.28),R?1:0,0,0]},Ce={x:o,z:u,yaw:x,scale:U,instance:Ae,walk:R,path:B,pathIndex:0,speed:M(.4,.64),group:ue,type:k,index:ne};(Q?zc:kc)[ue].push(Ae),ji.push(Ce)}for(let[o,u]of ge.filter(x=>["F","S","T"].includes(x.category)&&x.approach).entries()){let x=u.yaw||0,R=o%3?-1:1,U=u.approach,B=U[0]-Math.sin(x)*1.05+Math.cos(x)*.95*R,k=U[1]-Math.cos(x)*1.05-Math.sin(x)*.95*R;Si(B,k,.2)&&tr(B,k,Math.atan2(u.pos[0]-B,u.pos[1]-k),!1,M(.88,1.04))}for(let o of f.records.filter(u=>u.kind==="tent")){let u=o.yaw||0,x=o.id==="F-10"?-1.5:0;tr(o.pos[0]+Math.cos(u)*x-Math.sin(u)*.52,o.pos[1]-Math.sin(u)*x-Math.cos(u)*.52,u,!1,.93,null,"vendor")}let rl=[[[0,10],[2,9],[2,-11],[20,-12],[26,-12],[26,-2],[26,12],[16,12],[0,10]],[[27,47],[29,54],[29,63],[31,68],[31,75],[28,77],[28,70],[29,60],[27,47]],[[-41,13],[-13,13],[-12,-4],[-15,-17],[-33,-19],[-41,13]],[[19,18],[26,21],[28,32],[29,44],[27,47],[28,32],[26,21],[19,18]]],ed=[[-2.4,-2,-1.6],[-.8,0,.8,1.6,2.4,3.2],[-4,-3.2,-2.4,-2,-1.6,-.8,0,.8],[-3.2,-2.4,-1.6,-.8,0,.8,1.6,2.4,3.2,4]];function td(o,u){let x=o.length-1;return Array.from({length:x},(R,U)=>{let B=o[(U+x-1)%x],k=o[(U+1)%x],ne=k[0]-B[0],Q=k[1]-B[1],ue=Math.hypot(ne,Q)||1;return[o[U][0]-Q/ue*u,o[U][1]+ne/ue*u]})}function nd(o){for(let u=0;u<o.length;u++){let x=o[u],R=o[(u+1)%o.length],U=Math.ceil(Math.hypot(R[0]-x[0],R[1]-x[1])/.7);for(let B=0;B<=U;B++){let k=B/U;if(!Si(x[0]+(R[0]-x[0])*k,x[1]+(R[1]-x[1])*k,.19))return!1}}return!0}let id=rl.map((o,u)=>ed[u].map(x=>td(o,x)).filter(nd)),Vc=[0,2,3,2,3,1,2,3,0,3],sd=[0,0,0,0];for(let o=0;o<120;o++){let u=Vc[o%Vc.length],x=sd[u]++,R=id[u],U=R.length?R[(x+Math.floor(x/(rl[u].length-1)))%R.length]:rl[u].slice(0,-1),B=x%U.length,k=U[B],ne=U[(B+1)%U.length],Q=M(0,1),ue=[k[0]+(ne[0]-k[0])*Q,k[1]+(ne[1]-k[1])*Q];if(Si(ue[0],ue[1],.19)||(ue=er(ue,2)),!ue)continue;let Ae=o%3===0;tr(ue[0],ue[1],Math.atan2(ne[0]-k[0],ne[1]-k[1]),!0,Ae?1:M(.88,1.05),U,Ae?"child":"visitor"),ji[ji.length-1].pathIndex=(B+1)%U.length}for(let o=0;o<7;o++)tr(z[0]+(o-3)*1.6,p[1]+9.5+o%2*.6,0,!0,.8,null,"performer");for(let o of[[7,11],[8,11.5],[24,-9],[25,-8.7],[-12,-23],[-13,-23.4],[-39,-44],[49,32],[50,33],[10,12],[11,12.4],[21,-10],[22,-10.4],[-10,-22],[-11,-22.4],[-37,-42],[47,34],[48,35]])Si(...o,.23)&&tr(o[0],o[1],M(0,g),!1,M(.85,1));let en={};en.base=new r(i,te,{name:"Architecture, ground and booths"}),en.details=new r(i,P,{name:"Furniture, windows and equipment"}),en.foliage=new r(i,Xe,{name:"Foliage",instances:[{matrix:n.identity(),info:[0,0,1,0]}]}),en.roof=new r(i,Ge,{name:"Gym roof"}),en.signs=new r(i,at,{name:"Readable booth signs"}),en.distant=new r(i,bi,{name:"Approximate neighbourhood",shadow:!1}),en.flags=new r(i,el,{name:"Fabric banners",instances:Nc});let Gc=Array.from({length:4},()=>[]),rd=0;for(let o=0;o<Fe.length;o++){if(Fe[o].addedGymSeat||o%2!==1&&!(Fe[o].gym&&o%5===2))continue;let u=Fe[o];Gc[rd++%4].push({matrix:n.compose(u.x,u.gym?he:0,u.z,u.yaw,.94),info:[0,0,0,0]})}en.seated=Gc.map((o,u)=>new r(i,$u(u),{name:"Seated visitors "+u,instances:o}));let Qr=Lc(0),Hc=n.compose(Qr.x,0,Qr.z,Qr.yaw);en.vehicle=new r(i,Qt,{name:"Generic mobility vehicle",instances:[{matrix:Hc,info:[0,0,0,0]}],dynamic:!0}),en.vehicleGlass=new r(i,Ko,{name:"Mobility vehicle windshield",instances:[{matrix:Hc,info:[0,0,0,0]}],dynamic:!0,shadow:!1});let Wc=Array.from({length:4},(o,u)=>({matrix:n.compose(Ht[0]+(u%2-.5)*2,0,Ht[1]+(Math.floor(u/2)-.5)*2.2,u*1.8,u===3?.64:1),info:[u,0,0,0]}));en.goats=new r(i,ku(),{name:"Goats",instances:Wc,dynamic:!0});let nr=[[29,58],[29,65],[28,72],[30,74],[31,69],[31,61],[29,58]],Xc=er(nr[0],2)||nr[0],hn={x:Xc[0],z:Xc[1],yaw:0,index:1,speed:.56};en.kamanyan=new r(i,ju(),{name:"かまくらいふ かまにゃん",instances:[{matrix:n.compose(hn.x,0,hn.z,0,.82),info:[0,.65,0,0]}],dynamic:!0}),en.actors=kc.map((o,u)=>new r(i,Bc(u),{name:"Visitors "+u,instances:o,dynamic:!0})),en.children=zc.map((o,u)=>new r(i,Ku(u),{name:"Children "+u,instances:o,dynamic:!0})),e(.81,"看板と案内データを仕上げています"),d.upload(i.gl,matchMedia("(pointer:coarse)").matches||innerWidth<650?256:512),i.atlas=d;let qc=70,al=0,ir=Qr,Yc=ji.filter(o=>o.type!=="vendor"&&o.type!=="performer");function Zc(o){qc=m(o,0,100);let u=Math.round(Yc.length*qc/100);Yc.forEach((x,R)=>x.hidden=R>=u),ji.filter(x=>x.type==="vendor"||x.type==="performer").forEach(x=>x.hidden=o===0),en.seated.forEach(x=>x.visible=o>10),i.shadowDirty=!0}Zc(70);function ad(o,u){let x=nr[hn.index],R=x[0]-hn.x,U=x[1]-hn.z,B=Math.hypot(R,U),k=B<.3;if(B<.3)hn.index=(hn.index+1)%nr.length;else{let Q=Math.min(B,hn.speed*u),ue=hn.x+R/B*Q,Ae=hn.z+U/B*Q;Si(ue,Ae,.24)?(hn.x=ue,hn.z=Ae,hn.yaw=Math.atan2(R,U),k=Q>0):hn.index=(hn.index+1)%nr.length}en.kamanyan.instances[0].matrix=n.compose(hn.x,il(hn.x,hn.z)+Math.max(0,Math.sin(o*7))*.025,hn.z,hn.yaw,.82),en.kamanyan.instances[0].info[1]=k?.65:0,en.kamanyan.updateInstances(),ir=Lc(o*.88);let ne=n.compose(ir.x,0,ir.z,ir.yaw);if(en.vehicle.instances[0].matrix=ne,en.vehicleGlass.instances[0].matrix=ne,en.vehicle.updateInstances(),en.vehicleGlass.updateInstances(),o-al>.055){let Q=Math.min(.18,o-al);al=o;for(let ue of ji){if(ue.walk&&ue.path&&!ue.hidden){let Ue=ue.path[ue.pathIndex],rt=Ue[0]-ue.x,Jt=Ue[1]-ue.z,Ut=Math.hypot(rt,Jt);if(Ut<.35)ue.pathIndex=(ue.pathIndex+1)%ue.path.length;else{let Ct=ue.x+rt/Ut*ue.speed*Q,He=ue.z+Jt/Ut*ue.speed*Q;Si(Ct,He,.19)?(ue.x=Ct,ue.z=He,ue.yaw=Math.atan2(rt,Jt)):ue.pathIndex=(ue.pathIndex+1)%ue.path.length}}let Ae=il(ue.x,ue.z),Ce=ue.yaw;ue.type==="performer"&&(Ce=Math.sin(o*.5+ue.index*.3)*.12,Ae+=.04+Math.max(0,Math.sin(o*2.4+ue.index*.4))*.07),ue.instance.matrix=n.compose(ue.x,ue.hidden?-100:Ae,ue.z,Ce,ue.scale),ue.instance.info[1]=ue.hidden?0:ue.walk?ue.type==="performer"?.8:1:0}en.actors.forEach(ue=>ue.updateInstances()),en.children.forEach(ue=>ue.updateInstances()),Wc.forEach((ue,Ae)=>{let Ce=Ae*1.8+Math.sin(o*.1+Ae)*.3;ue.matrix=n.compose(Ht[0]+(Ae%2-.5)*2+Math.sin(o*.1+Ae)*.2,0,Ht[1]+(Math.floor(Ae/2)-.5)*2.2,Ce,Ae===3?.64:1)}),en.goats.updateInstances()}}e(.9,"歩行できる経路を確認しています");function od(o){let u=!o;en.vehicleGlass.visible!==u&&(en.vehicleGlass.visible=u,i.shadowDirty=!0)}return{data:f,markers:ge,colliders:_t,buildings:qe,campus:ot,field:Kt,restricted:fs,track:an,trackLength:kn,coneBars:Uc,meshes:en,trunks:_e,seats:Fe,atlas:d,categoryColors:N,isWalkable:Si,walkHeight:il,nearestWalkable:er,update:ad,setCrowd:Zc,setRideView:od,p:L,getCar:()=>ir,getKamanyan:()=>[hn.x,2.18,hn.z],polyInside:bt,actorCount:ji.length}};window.FestaNavigation=class{constructor(i){this.world=i,this.step=.7,this.x0=-67,this.z0=-58,this.nx=184,this.nz=244,this.size=this.nx*this.nz,this.open=new Uint8Array(this.size);for(let e=0;e<this.nz;e++)for(let t=0;t<this.nx;t++){let n=this.point(e*this.nx+t);this.open[e*this.nx+t]=i.isWalkable(n[0],n[1],.34)?1:0}}point(i){return[this.x0+i%this.nx*this.step,this.z0+Math.floor(i/this.nx)*this.step]}index(i){return Math.round((i[1]-this.z0)/this.step)*this.nx+Math.round((i[0]-this.x0)/this.step)}nearest(i){let e=Math.round((i[0]-this.x0)/this.step),t=Math.round((i[1]-this.z0)/this.step),n=-1,s=1/0;for(let r=0;r<18;r++){for(let l=-r;l<=r;l++)for(let a=-r;a<=r;a++){if(r&&Math.abs(a)!==r&&Math.abs(l)!==r)continue;let c=e+a,h=t+l;if(c<0||c>=this.nx||h<0||h>=this.nz)continue;let m=h*this.nx+c;if(!this.open[m])continue;let g=this.point(m),f=Math.hypot(g[0]-i[0],g[1]-i[1]);f<s&&(s=f,n=m)}if(n>=0)return n}return-1}lineFree(i,e,t=.3){let n=Math.hypot(e[0]-i[0],e[1]-i[1]),s=Math.ceil(n/.16);for(let r=0;r<=s;r++)if(!this.world.isWalkable(i[0]+(e[0]-i[0])*r/Math.max(1,s),i[1]+(e[1]-i[1])*r/Math.max(1,s),t))return!1;return!0}find(i,e){let t=this.nearest(i),n=this.nearest(e);if(t<0||n<0)return null;let s=new Float32Array(this.size);s.fill(1/0);let r=new Int32Array(this.size);r.fill(-1);let l=new Uint8Array(this.size),a=[],c=(b,E)=>{let y={i:b,f:E},T=a.length;for(a.push(y);T;){let w=T-1>>1;if(a[w].f<=y.f)break;a[T]=a[w],T=w}a[T]=y},h=()=>{let b=a[0],E=a.pop();if(a.length){let y=0;for(;2*y+1<a.length;){let T=2*y+1;if(T+1<a.length&&a[T+1].f<a[T].f&&T++,a[T].f>=E.f)break;a[y]=a[T],y=T}a[y]=E}return b.i},m=n%this.nx,g=Math.floor(n/this.nx),f=b=>{let E=Math.abs(b%this.nx-m),y=Math.abs(Math.floor(b/this.nx)-g);return Math.max(E,y)+.41421356*Math.min(E,y)};s[t]=0,c(t,f(t));let v=!1;for(;a.length;){let b=h();if(l[b])continue;if(l[b]=1,b===n){v=!0;break}let E=b%this.nx,y=Math.floor(b/this.nx);for(let T=-1;T<=1;T++)for(let w=-1;w<=1;w++){if(!w&&!T)continue;let N=E+w,_=y+T;if(N<0||N>=this.nx||_<0||_>=this.nz)continue;let D=_*this.nx+N;if(!this.open[D]||l[D]||w&&T&&(!this.open[y*this.nx+N]||!this.open[_*this.nx+E]))continue;let V=s[b]+(w&&T?1.41421356:1);V<s[D]&&(s[D]=V,r[D]=b,c(D,V+f(D)))}}if(!v)return null;let M=[],L=n;for(;L>=0&&(M.push(this.point(L)),L!==t);)L=r[L];M.reverse(),this.lineFree(i,M[0])&&M.unshift([...i]),this.lineFree(M[M.length-1],e)&&M.push([...e]);let S=[M[0]],d=0;for(;d<M.length-1;){let b=M.length-1;for(;b>d+1&&!this.lineFree(M[d],M[b]);)b--;S.push(M[b]),d=b}return S}};(async function(){let i=C=>document.getElementById(C),e=C=>String(C??"").replace(/[&<>"']/g,G=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[G]),t={search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',overview:'<path d="m3 8 9-5 9 5-9 5-9-5Z M3 12l9 5 9-5M3 16l9 5 9-5"/>',route:'<circle cx="5" cy="5" r="2"/><circle cx="19" cy="19" r="2"/><path d="M7 5h8a4 4 0 0 1 0 8H9a4 4 0 0 0 0 8h5"/>',settings:'<path d="M4 6h16M4 12h16M4 18h16"/><circle cx="9" cy="6" r="2" fill="currentColor"/><circle cx="16" cy="12" r="2" fill="currentColor"/><circle cx="8" cy="18" r="2" fill="currentColor"/>',help:'<circle cx="12" cy="12" r="9"/><path d="M9.3 9a2.8 2.8 0 0 1 5.4 1c0 2-2.7 2-2.7 4M12 17h.01"/>',arrow:'<path d="M4 12h15m-5-5 5 5-5 5"/>',back:'<path d="M20 12H5m5-5-5 5 5 5"/>',close:'<path d="m6 6 12 12M6 18 18 6"/>',expand:'<path d="M9 3H3v6M15 3h6v6M3 15v6h6M21 15v6h-6"/>',walk:'<circle cx="13" cy="4" r="2"/><path d="m11 9 3 2 4 1M11 8l-3 5-4 1M11 9l-1 7-4 5m4-5 5 1 2 5"/>',pin:'<path d="M19 10c0 6-7 12-7 12S5 16 5 10a7 7 0 0 1 14 0Z"/><circle cx="12" cy="10" r="2.5"/>',eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>'};function n(C){return'<svg viewBox="0 0 24 24" aria-hidden="true">'+(t[C]||t.pin)+"</svg>"}function s(C=document){C.querySelectorAll("[data-icon]").forEach(G=>G.innerHTML=n(G.dataset.icon))}s();let r=FESTA_DATA,l=[...r.records,...r.locations],a=Object.fromEntries(l.map(C=>[C.id,C])),c={F:"#a64c35",S:"#385e76",T:"#4e6c43",P:"#83503e",M:"#ab8450",I:"#28595c"},h=[["F-truck","[F] 飲食（キッチンカー）"],["F-tent","[F] 飲食（テント）"],["S-goods","[S] 物販"],["S-paid","[S] 有料ワークショップ・スポーツ・体験"],["T","[T] 無料・情報・スポーツ・体験"],["P","[P] ステージ出演"]],m=Object.fromEntries(h),g={M:"交流・モビリティー",I:"会場案内",P:"体育館の出演団体"},f=new Set(["S-1","S-2","S-3","S-4","S-5","S-6","S-7"]),v=new Set(["S-8","S-9","S-10","S-11","S-12"]),M=new Set(r.locations.map(C=>C.id));function L(C){return M.has(C.id)?C.category:C.category==="F"?C.kind==="truck"?"F-truck":"F-tent":C.category==="S"?f.has(C.id)?"S-goods":v.has(C.id)?"S-paid":null:C.category==="T"||C.category==="P"?C.category:null}function S(C){return M.has(C.id)?g[C.category]:m[L(C)]}let d=matchMedia("(pointer:coarse)").matches||innerWidth<650,b=matchMedia("(prefers-reduced-motion: reduce)").matches,E,y,T,w=!1,N=0,_=0,D=0,V,q=null,A={mode:"welcome",pos:[0,11],yaw:.1,pitch:0,orbitYaw:-.48,orbitPitch:.79,orbitDist:115,orbitTarget:[0,0,22],returnPos:null,selected:null,nearest:null,path:null,pathIndex:1,auto:!1,targetId:null,labels:!0,showRoof:!0,paused:!1,sheet:null,crowd:70,light:"day",distanceWalked:0,rideYaw:0,runMode:!1,quality:d?"standard":"high"},J={},H={x:0,y:0,active:!1,pid:null},$={active:!1,pid:null,x:0,y:0,moved:0},me=null,fe=new Set,be=new Map;function ce(C,G=4e3){i("toast").textContent=C,i("toast").classList.remove("hidden"),clearTimeout(V),V=setTimeout(()=>i("toast").classList.add("hidden"),G)}function te(C,G){i("loadBar").style.width=Math.round(C*100)+"%",i("loadText").textContent=G}let P=()=>new Promise(C=>setTimeout(C,0));function Xe(){A.mode="walk",i("welcome").classList.add("hidden"),i("hud").classList.remove("hidden"),i("minimapWrap").classList.remove("hidden"),i("bottomHint").classList.remove("hidden"),i("joystick").classList.remove("hidden"),d&&i("lookHint").classList.remove("hidden"),i("scene").focus({preventScroll:!0})}function Ge(C){A.yaw=Math.atan2(C[0]-A.pos[0],-(C[1]-A.pos[1])),A.pitch=-.02}function at(C){y&&(A.pos=y.nearestWalkable(C)||[0,11])}function ee(C="field"){if(w){if(mt(),he(),Ye(),Xe(),C==="field")at([2.8,11]),Ge([14,-14]);else{let G=a[C];at(G.approach),Ge(C==="GATE_MAIN"?[33,61]:[-27,-24])}A.mode="walk",ge(),ce(d?"左の丸で移動。画面の右側をドラッグすると見回せます。":"左の丸、キーボードのWASD または矢印キーで移動。画面をドラッグして見回します。",4500)}}function _t(){w&&(mt(),he(),Ye(),A.mode="welcome",i("welcome").classList.remove("hidden"),i("minimapWrap").classList.add("hidden"),i("bottomHint").classList.add("hidden"),i("nearby").classList.add("hidden"),i("joystick").classList.add("hidden"),i("lookHint").classList.add("hidden"),ge())}function _e(){if(w){if(mt(),he(),A.mode==="overview"){A.mode="walk",A.returnPos&&(A.pos=[...A.returnPos]),A.pitch=0,ge();return}A.mode==="welcome"&&Xe(),Ye(),A.returnPos=[...A.pos],A.mode="overview",A.orbitTarget=[0,0,23],A.orbitDist=158,A.orbitYaw=-.27,A.orbitPitch=.9,ge(),ce("ドラッグで回転、ホイールで拡大。地面を押すとその場所へ移動します。ブースの札を押すと内容を表示します。")}}function ge(){let C=A.mode;if(y&&y.setRideView(C==="ride"),i("modeBar").classList.toggle("ride-active",C==="ride"),i("speedToggle").classList.toggle("hidden",d||C!=="walk"),i("speedToggle").textContent=A.runMode?"速度：走る":"速度：歩く",i("speedToggle").setAttribute("aria-pressed",String(A.runMode)),i("speedToggle").setAttribute("aria-label",A.runMode?"走るを選択中。歩くに切り替える":"歩くを選択中。走るに切り替える"),i("overviewBtn").classList.toggle("active",C==="overview"),i("joystick").classList.toggle("hidden",C!=="walk"||!!A.sheet),i("lookHint").classList.toggle("hidden",!d||C!=="walk"||!!A.sheet),i("modeBar").classList.toggle("hidden",C==="welcome"||C==="walk"&&!A.path),C==="overview")i("modeText").textContent="上空から会場を見る",i("modeAction").textContent="歩行に戻る";else if(C==="ride")i("modeText").textContent="トゥクトゥクに乗車中",i("modeAction").textContent="トゥクトゥクから降りる";else if(A.path){let G=a[A.targetId];i("modeText").textContent=(A.auto?"歩いて案内中：":"経路表示：")+(G?G.short:"選択した場所"),i("modeAction").textContent=A.auto?"一時停止":"自動で歩く"}}function qe(C){return C.kind==="performer"||C.id==="T-SCI"?a.GYM:C}function ct(C,G=!0){if(!w)return;let Y=typeof C=="string"?qe(a[C]):null,j=Y?.approach||(!Y&&Array.isArray(C)?C:null);if(!j)return ce("この団体のブース位置は資料で特定できていません。"),!1;A.mode==="welcome"&&ee("field"),A.mode==="ride"&&(A.mode="walk",at(a.MOBILITY.approach)),A.mode="walk";let re=T.find(A.pos,j);return re?(A.path=re,A.pathIndex=1,A.auto=G,A.targetId=Y?.id||null,rn(re),mt(),he(),ge(),!0):(ce("ここから歩ける経路を見つけられませんでした。「この場所へ移動」で見学できます。",6e3),!1)}function Fe(C){let G=qe(a[C]);return G?.approach?(A.mode==="welcome"&&Xe(),Ye(),A.mode="walk",at(G.approach),Ge(G.pos),G.id==="GATE_MAIN"&&Ge([33,61]),G.id==="GATE_WEST"&&Ge([-27,-24]),G.id==="GYM"&&Ge([G.pos[0],y.p(525,345)[1]]),G.id==="WC"&&Ge([45,45]),mt(),he(),ge(),ce(G.short+" に移動しました"),!0):!1}function Ye(){A.path=null,A.auto=!1,A.targetId=null,me&&(me.dispose(),me=null),ge()}function rn(C){me&&me.dispose();let{Geometry:G,Mesh:Y,material:j}=FestaGL,re=new G;for(let ie=0;ie<C.length-1;ie++){let We=C[ie],gt=C[ie+1],et=gt[0]-We[0],Pe=gt[1]-We[1],Ke=Math.hypot(et,Pe);if(Ke<.01)continue;let wt=-Pe/Ke*.055,It=et/Ke*.055;re.quad([We[0]-wt,.088,We[1]-It],[We[0]+wt,.088,We[1]+It],[gt[0]+wt,.088,gt[1]+It],[gt[0]-wt,.088,gt[1]-It],j("#b78134",0,.75,0,.13));for(let Vt=1;Vt<Ke;Vt+=2){let cn=We[0]+et*Vt/Ke,dn=We[1]+Pe*Vt/Ke;re.disk(cn,.092,dn,.12,j("#dfbc77",0,.7,0,.2),10)}}let we=C[C.length-1];re.cylinder([we[0],.08,we[1]],[we[0],.15,we[1]],.26,.26,j("#d2a558",0,.65,0,.2),30),me=new Y(E,re,{name:"Navigation guide",shadow:!1})}function pt(C,G){let Y=Math.max(1,Math.ceil(Math.hypot(C,G)/.15)),j=0;for(let re=0;re<Y;re++){let we=[...A.pos],ie=A.pos[0]+C/Y,We=A.pos[1]+G/Y;y.isWalkable(ie,We,.28)?A.pos=[ie,We]:(y.isWalkable(ie,A.pos[1],.28)&&(A.pos[0]=ie),y.isWalkable(A.pos[0],We,.28)&&(A.pos[1]=We)),j+=Math.hypot(A.pos[0]-we[0],A.pos[1]-we[1])}return A.distanceWalked+=j,j}function ot(C){if(!A.path||!A.auto)return;let G=A.path[A.pathIndex];if(!G){bt();return}let Y=G[0]-A.pos[0],j=G[1]-A.pos[1],re=Math.hypot(Y,j);if(re<.16){A.pathIndex++,A.pathIndex>=A.path.length&&bt();return}let we=Math.min(re,C*2.35),ie=pt(Y/re*we,j/re*we),We=Math.atan2(Y,-j);A.yaw+=ht(We-A.yaw)*Math.min(1,C*3.3),A.pitch+=(0-A.pitch)*Math.min(1,C*3),ie<2e-4&&we>.001&&(A.auto=!1,ce("障害物の手前で停止しました。移動キーで位置を調整できます。"),ge())}function bt(){let C=A.targetId,G=a[C];Ye(),G&&(Ge(G.pos),G.id==="GATE_MAIN"&&Ge([33,61]),G.id==="GATE_WEST"&&Ge([-27,-24]),fe.add(C),ce(G.short+" に到着しました",2600))}function ht(C){return Math.atan2(Math.sin(C),Math.cos(C))}function yt(){w&&(A.mode==="welcome"&&Xe(),mt(),Ye(),A.mode="ride",A.rideYaw=0,A.pitch=-.06,ge(),ce("トゥクトゥクに乗っています。ドラッグして周囲を見回せます。車種・速度は演出です。",5500))}function Kt(){A.mode==="overview"?(A.mode="walk",A.returnPos&&at(A.returnPos),A.pitch=0):A.mode==="ride"?(A.mode="walk",at(a.MOBILITY.approach),Ge(y.track[40])):Ye(),ge()}function zt(C,G){q=document.activeElement,A.sheet=G,i("sheetTitle").textContent=C,i("sheet").classList.remove("hidden"),i("sheetScrim").classList.remove("hidden"),i("sheetBack").classList.add("hidden"),i("sheetBody").scrollTop=0,le(),ge(),setTimeout(()=>i("sheetClose").focus({preventScroll:!0}),0)}function mt(){A.sheet=null,i("sheet").classList.add("hidden"),i("sheetScrim").classList.add("hidden"),ge(),q&&q.isConnected&&q.focus({preventScroll:!0})}let Ot="",X="all";function jt(){zt("ブースを見つける","search"),i("sheetBody").innerHTML='<div class="search-field">'+n("search")+'<input id="searchInput" aria-label="団体名や内容から検索" placeholder="団体名・食べもの・体験から検索" value="'+e(Ot)+'"></div><div class="filter-row">'+[["all","すべて"],...h,["I","会場案内"]].map(([C,G])=>'<button class="filter '+(C===X?"active":"")+'" data-filter="'+C+'">'+G+"</button>").join("")+'</div><p class="result-count" id="resultCount"></p><p class="source-text">'+e(r.notice)+'</p><div id="results"></div>',i("searchInput").addEventListener("input",C=>{Ot=C.target.value,At()}),i("sheetBody").querySelectorAll("[data-filter]").forEach(C=>C.onclick=()=>{X=C.dataset.filter,i("sheetBody").querySelectorAll("[data-filter]").forEach(G=>G.classList.toggle("active",G===C)),At()}),At(),setTimeout(()=>i("searchInput").focus(),30)}function At(){let C=Ot.normalize("NFKC").toLowerCase().trim(),G=C.split(/\s+/).filter(Boolean),Y=l.filter(j=>(X==="all"||(X==="I"?M.has(j.id)&&["M","I"].includes(j.category):L(j)===X))&&G.every(re=>(j.id+" "+j.name+" "+j.detail).normalize("NFKC").toLowerCase().includes(re)));i("resultCount").textContent=Y.length+" 項目 ／ 団体"+r.records.length+"・会場案内"+r.locations.length+"（9月時点の予定）",i("results").innerHTML=Y.length?Y.map(j=>'<button class="result" data-id="'+e(j.id)+'"><span class="badge" style="background:'+c[j.category]+'">'+e(j.id.startsWith("P-")?"P":j.id.includes("-")?j.id:j.id==="WC"?"WC":"案内")+'</span><span class="result-info"><strong>'+e(j.name)+'</strong><small class="'+(j.kind==="unplaced"?"unplaced":"")+'">'+e(j.kind==="unplaced"?"位置未特定 · "+j.caption:j.caption)+"</small></span>"+n("arrow")+"</button>").join(""):'<p class="empty">該当する項目がありません。<br>短い言葉でも検索できます。</p>',i("results").querySelectorAll("[data-id]").forEach(j=>j.onclick=()=>O(j.dataset.id,!0))}function O(C,G=!1){let Y=a[C];if(!Y)return;A.selected=C,fe.add(C),zt("ブース・会場の詳細","detail"),i("sheetBack").classList.toggle("hidden",!G);let j=qe(Y),re=w&&!!j.approach,we=S(Y),ie='<div class="detail-id"><span class="badge" style="background:'+c[Y.category]+'">'+e(Y.id.startsWith("P-")?"P":Y.id.includes("-")?Y.id:"案内")+"</span>"+e(we)+'<span>／ 予定</span></div><h3 class="detail-title">'+e(Y.name)+'</h3><p class="detail-caption">'+e(Y.caption)+"</p>";re?ie+='<div class="detail-actions"><button class="primary" id="navigateHere">'+n("route")+' 歩いて案内</button><button class="secondary" id="jumpHere">この場所へ移動</button></div>':ie+=Y.kind==="unconfirmed"?'<div class="note-box warn">今回の体育館の開始予定9件に記載がなく、出演予定は未確認です。</div>':Y.kind==="unplaced"?'<div class="note-box warn">参加予定団体一覧には記載がありますが、配置図からワークショップの位置を特定できません。推測でブースを追加していません。</div>':'<div class="note-box">3D表示が起動していないため、ここでは移動機能を利用できません。団体の予定内容は読めます。</div>',Y.id==="MOBILITY"&&(ie+='<button class="secondary" id="rideBtn">動いている車両の視点で見学</button><p class="source-text">電動トライク1台。車体色、走行速度は実際と異なる場合があります。</p>'),Y.id!=="GYM"&&(ie+='<div class="section-label">'+(Y.category==="P"?"参加予定内容":"内容")+'</div><div class="detail-content">'+e(Y.detail)+"</div>"),(Y.category==="F"||Y.category==="S")&&(ie+='<div class="note-box">3Dで置かれている商品は実物や販売数量を示すものではありません。</div>'),(Y.id==="GYM"||Y.category==="P"||Y.id==="T-SCI")&&(ie+='<div class="section-label">体育館内 開始予定</div>'+r.schedule.map(We=>'<div class="schedule-row"><b>'+e(We.time)+"</b><span>"+e(We.name)+"</span></div>").join(""),ie+='<p class="source-text">進行上の都合で開始・終了時刻は変更になることがあります。</p>'),ie+='<p class="source-text">'+e(r.notice)+"</p>",i("sheetBody").innerHTML=ie,re&&(i("navigateHere").onclick=()=>{ct(C,!0)},i("jumpHere").onclick=()=>{Fe(C)}),i("rideBtn")&&(i("rideBtn").onclick=yt)}function p(){zt("表示と操作の設定","settings"),i("sheetBody").innerHTML='<div class="setting-row"><label for="quality">描画品質</label><select id="quality"><option value="high">高画質 — PC向け</option><option value="standard">標準 — 軽さと品質のバランス</option><option value="low">軽量 — 小さな端末向け</option></select><small>影の解像度と描画解像度を変更します。重い場合は「標準」「軽量」を選択。</small></div><div class="setting-row"><label for="crowd">来場者の表示量 <span id="crowdValue"></span></label><input id="crowd" type="range" min="0" max="100" step="10" value="'+A.crowd+'"><small>人数は演出です。実際の来場者数や混雑予測ではありません。</small></div><div class="setting-row"><label for="light">光の雰囲気</label><select id="light"><option value="day">昼の光</option><option value="afternoon">午後の光</option></select><small>当日の天気・太陽位置を再現したものではありません。</small></div><label class="toggle-row" for="labelsToggle">近くのブース名を表示<input type="checkbox" id="labelsToggle" '+(A.labels?"checked":"")+'></label><label class="toggle-row" for="roofToggle">体育館の屋根を表示<input type="checkbox" id="roofToggle" '+(A.showRoof?"checked":"")+'></label><div class="note-box">屋根を外すと、上空から体育館の中を確認できます。歩行時には屋根の表示に関係なく出入口から入ります。</div><button class="secondary" id="fullscreenBtn">全画面表示を切り替える</button><button class="text-btn" id="captureBtn">いまの3D画面を画像として保存 '+n("arrow")+'</button><div class="section-label">動作情報</div><p class="source-text" id="performanceInfo"></p><button id="settingsHelp" class="text-btn">操作方法・資料と再現範囲 '+n("help")+"</button>",i("quality").value=A.quality,i("quality").onchange=C=>{A.quality=C.target.value,E.setQuality(A.quality),ce("描画品質を変更しました")},i("crowdValue").textContent=A.crowd+"%",i("crowd").oninput=C=>{A.crowd=Number(C.target.value),y.setCrowd(A.crowd),i("crowdValue").textContent=A.crowd+"%"},i("light").value=A.light,i("light").onchange=C=>{A.light=C.target.value,E.sun=FestaGL.V.norm(A.light==="day"?[-.38,.79,.48]:[-.75,.38,.46]),E.sunColor=A.light==="day"?[1,.94,.81]:[1,.84,.65],E.sunPower=A.light==="day"?3.7:3.4,E.exposure=A.light==="day"?1.12:1.18,E.createShadow()},i("labelsToggle").onchange=C=>A.labels=C.target.checked,i("roofToggle").onchange=C=>{A.showRoof=C.target.checked,y.meshes.roof.visible=A.showRoof,E.shadowDirty=!0},i("fullscreenBtn").onclick=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{ce("この表示環境では全画面表示を利用できません。")}},i("captureBtn").onclick=()=>{try{E.render(_);let C=document.createElement("a");C.href=i("scene").toDataURL("image/png"),C.download="festa2026_3d_view.png",C.click()}catch{ce("画像の保存に対応していない表示環境です。")}},i("settingsHelp").onclick=()=>W(),i("performanceInfo").textContent="WebGL 2 ／ 外部通信なし ／ "+E.stats.triangles.toLocaleString()+" triangles ／ "+E.stats.draws+" draw calls（現在の場面）"}function W(){zt("操作と、資料について","help"),i("sheetBody").innerHTML='<div class="help-section"><h3>PCで歩く</h3>'+[["左下の丸いパッド","前後・左右に移動"],["W / A / S / D・矢印キー","前後・左右に移動"],["画面をドラッグ","見回す"],["画面下の「歩く」「走る」","速度を切り替える"],["Shift ＋移動","押している間だけ走る"],["E","近くのブースの内容"],["V","上空／歩行を切り替え"],["M","会場マップ"],["Esc","閉じる・移動を止める"]].map(C=>'<div class="control-row"><span>'+e(C[0])+"</span><span>"+e(C[1])+"</span></div>").join("")+"<h3>スマートフォン・タブレット</h3><p>左下の丸いパッドで移動します。中心付近では細かく、外側では速く移動できます。画面の右側をドラッグして見回します。看板の札や「内容を見る」をタップすると、団体名と内容が読めます。端末を横向きにすると広く見渡せます。</p><h3>ブースを探す・案内を使う</h3><p>「ブース」から団体名や食べもの、体験などで検索できます。「歩いて案内」は経路を表示して自動で歩きます。移動キーやジョイスティックを使うと手動操作に戻ります。「この場所へ移動」は、そのブースの前へ直接移動します。</p><p>上空表示ではドラッグで回転、ホイール／2本指で拡大・縮小。会場マップでは点を選ぶとブース情報、歩ける場所を選ぶと直接移動します。ブース番号入り配置図と上空表示でも歩ける場所へ直接移動できます。</p><h3>読み取り方</h3>"+r.caveats.map(C=>"<p>"+e(C)+"</p>").join("")+'<div class="note-box">校舎は外観のみ。体育館には出入口から入れます。壇上舞台は使用しません。</div><h3>参照資料</h3>'+r.sources.map(C=>'<div class="source-entry"><strong>'+e(C.type)+" · "+(C.url?'<a href="'+e(C.url)+'" target="_blank" rel="noopener noreferrer">'+e(C.name)+"</a>":e(C.name))+"</strong><p>"+e(C.description)+"</p></div>").join("")+'<h3>このアプリについて</h3><p>すべての描画・検索・経路計算は、このHTMLを開いた端末内で行います。外部通信、位置情報の取得、アクセス解析、アカウント登録はありません。「かまにゃん」の紹介ページを開く場合だけ外部に移動します。</p><p>描画にはThree.jsを使用し、形状、人物、看板は本アプリ向けに実装。地表テクスチャはCC0画像を使用しています。写真測量や現地撮影による3Dモデルではありません。</p><p class="source-text">テクスチャ：Gravel04 / CC0Textures、Grass 01 / linolafett（CC0、scikit-image同梱）。提供資料の権利は元の権利者に帰属します。</p></div>'}function z(C){let G=C.clientWidth,Y=C.clientHeight,j=Math.min((G-18)/128,(Y-18)/174);return{w:G,h:Y,scale:j,ox:G/2,oy:Y/2-24*j,to:re=>[G/2+re[0]*j,Y/2+(re[1]-24)*j],from:(re,we)=>[(re-G/2)/j,(we-Y/2)/j+24]}}function ae(C,G=!1){if(!y||!C.clientWidth)return;let Y=z(C),j=Math.min(devicePixelRatio,2),re=Math.round(Y.w*j),we=Math.round(Y.h*j);(C.width!==re||C.height!==we)&&(C.width=re,C.height=we);let ie=C.getContext("2d");ie.setTransform(j,0,0,j,0,0),ie.clearRect(0,0,Y.w,Y.h),ie.fillStyle="#eeeee3",ie.fillRect(0,0,Y.w,Y.h);let We=(Pe,Ke,wt)=>{ie.beginPath(),Pe.forEach((It,Vt)=>{let[cn,dn]=Y.to(It);Vt?ie.lineTo(cn,dn):ie.moveTo(cn,dn)}),ie.closePath(),Ke&&(ie.fillStyle=Ke,ie.fill()),wt&&(ie.strokeStyle=wt,ie.lineWidth=1,ie.stroke())};We(y.campus,"#d4d8cd","#b4c3b5"),We(y.field,"#e6d8ba"),We(y.restricted,"#ded5c1","#b5a68a"),ie.beginPath(),y.track.forEach((Pe,Ke)=>{let[wt,It]=Y.to(Pe);Ke?ie.lineTo(wt,It):ie.moveTo(wt,It)}),ie.closePath(),ie.strokeStyle="#c09164",ie.lineWidth=Math.max(1,Y.scale*2),ie.stroke(),ie.beginPath(),y.restricted.forEach((Pe,Ke)=>{let[wt,It]=Y.to(Pe);Ke?ie.lineTo(wt,It):ie.moveTo(wt,It)}),ie.closePath(),ie.strokeStyle="#d6ad23",ie.lineWidth=G?2:1.3,ie.stroke(),ie.setLineDash(G?[3,3]:[2,2]),ie.strokeStyle="#33312b",ie.stroke(),ie.setLineDash([]);for(let[Pe,Ke]of y.coneBars){let wt=Y.to(Pe),It=Y.to(Ke);ie.beginPath(),ie.moveTo(...wt),ie.lineTo(...It),ie.strokeStyle="#bb3b2c",ie.lineWidth=G?2.5:1.5,ie.stroke()}for(let Pe of y.buildings){let Ke=Y.to([Pe.x-Pe.w/2,Pe.z-Pe.d/2]);ie.fillStyle=Pe.gym?"#bfccb9":"#a6b5ad",ie.fillRect(Ke[0],Ke[1],Pe.w*Y.scale,Pe.d*Y.scale),ie.strokeStyle="#8fa397",ie.lineWidth=.6,ie.strokeRect(Ke[0],Ke[1],Pe.w*Y.scale,Pe.d*Y.scale),G&&Pe.w*Y.scale>40&&(ie.fillStyle="#4c6858",ie.font="10px sans-serif",ie.textAlign="center",ie.fillText(Pe.gym?"体育館":"校舎",Ke[0]+Pe.w*Y.scale/2,Ke[1]+Pe.d*Y.scale/2+3))}for(let Pe of y.markers){let[Ke,wt]=Y.to(Pe.pos),It=G?3.7:2.1;if(ie.beginPath(),ie.arc(Ke,wt,It,0,Math.PI*2),ie.fillStyle=c[Pe.category],ie.fill(),G&&(ie.strokeStyle="#fcf9ee",ie.lineWidth=.7,ie.stroke(),Pe.id.includes("-")&&Pe.kind!=="performer")){ie.font="9px sans-serif",ie.textAlign="left",ie.fillStyle="#3e584b";let Vt=Ke+6,cn=wt+3;Pe.pos[1]<-16&&Pe.pos[0]>-10?(Vt=Ke,cn=wt-10,ie.save(),ie.translate(Vt,cn),ie.rotate(-Math.PI/2.8),ie.fillText(Pe.id,0,0),ie.restore()):Pe.pos[0]<1&&Pe.pos[1]>-16&&Pe.pos[1]<10?(ie.textAlign="right",ie.fillText(Pe.id,Ke-6,wt+3)):ie.fillText(Pe.id,Vt,cn)}}A.path&&(ie.beginPath(),A.path.forEach((Pe,Ke)=>{let[wt,It]=Y.to(Pe);Ke?ie.lineTo(wt,It):ie.moveTo(wt,It)}),ie.strokeStyle="#af7b29",ie.lineWidth=G?2:1.5,ie.setLineDash([4,2]),ie.stroke(),ie.setLineDash([]));let[gt,et]=Y.to(A.pos);if(ie.save(),ie.translate(gt,et),ie.rotate(A.yaw),ie.fillStyle="#fff",ie.beginPath(),ie.arc(0,0,G?7:5,0,Math.PI*2),ie.fill(),ie.fillStyle="#174f58",ie.beginPath(),ie.moveTo(0,G?-10:-7),ie.lineTo(G?5:4,G?6:4),ie.lineTo(0,G?3:1),ie.lineTo(G?-5:-4,G?6:4),ie.closePath(),ie.fill(),ie.restore(),ie.fillStyle="#526b5d",ie.textAlign="right",ie.font=(G?"10":"8")+"px sans-serif",G){let[Pe,Ke]=Y.to(a.GATE_MAIN.pos);ie.textAlign="right",ie.fillText("正門",Pe-9,Ke-9);let[wt,It]=Y.to(a.GATE_WEST.pos);ie.textAlign="left",ie.fillText("西ヶ谷門",wt-10,It+15)}}let Te=!1;function Se(){w&&(le(),mt(),q=document.activeElement,i("mapModal").classList.remove("hidden"),Te=!1,i("bigmap").classList.remove("hidden"),i("originalWrap").classList.add("hidden"),i("mapToggle").textContent="ブース番号入り配置図を見る",i("mapExplain").textContent="ブースの点を押すと内容を表示。歩ける場所を押すと、その場所へ直接移動します。",requestAnimationFrame(()=>ae(i("bigmap"),!0)),i("mapClose").focus())}function he(){i("mapModal").classList.add("hidden")}function xe(C){return!C||!y.isWalkable(C[0],C[1],.32)?(ce("建物・走行路の中は選べません。歩ける場所を選択してください。"),!1):(Ye(),A.mode==="welcome"&&Xe(),A.mode="walk",A.returnPos=null,A.pitch=0,at(C),he(),ge(),ce("選んだ場所へ移動しました"),!0)}function Re(C){let G=i("bigmap").getBoundingClientRect(),Y=C.clientX-G.left,j=C.clientY-G.top,re=z(i("bigmap")),we=null,ie=16;for(let gt of y.markers){let et=re.to(gt.pos),Pe=Math.hypot(et[0]-Y,et[1]-j);Pe<ie&&(ie=Pe,we=gt)}if(we){he(),O(we.id);return}let We=re.from(Y,j);if(!y.isWalkable(...We,.32)){ce("建物・走行路の中は選べません。歩ける場所を選択してください。");return}xe(We)}function ze(C){let G=i("originalPlan"),Y=G.getBoundingClientRect();if(!G.naturalWidth||!Y.width||!Y.height)return;let j=(C.clientX-Y.left)/Y.width*660-25,re=(C.clientY-Y.top)/Y.height*870-35,we=y.p(j,re),ie=null,We=16;for(let gt of y.markers){let et=Y.left+(gt.pos[0]/.22+320+25)/660*Y.width,Pe=Y.top+(gt.pos[1]/.22+290+35)/870*Y.height,Ke=Math.hypot(et-C.clientX,Pe-C.clientY);Ke<We&&(We=Ke,ie=gt)}if(ie){he(),O(ie.id);return}xe(we)}function De(C,G){let Y=new Map,j=!1;C.addEventListener("pointerdown",re=>{Y.size?j=!0:j=!1,Y.set(re.pointerId,[re.clientX,re.clientY])}),C.addEventListener("pointermove",re=>{let we=Y.get(re.pointerId);we&&Math.hypot(re.clientX-we[0],re.clientY-we[1])>8&&(j=!0)}),C.addEventListener("pointerup",re=>Y.delete(re.pointerId)),C.addEventListener("pointercancel",re=>{Y.delete(re.pointerId),j=!0}),C.addEventListener("click",re=>{j||G(re)})}function Oe(){for(let C of y.markers){let G=document.createElement("button");G.className="world-label hidden",G.style.setProperty("--accent",c[C.category]),G.setAttribute("aria-label",C.name+" の内容を見る"),G.innerHTML="<b>"+e(C.id.includes("-")?C.id:C.id==="WC"?"WC":"")+"</b><span>"+e(C.short)+"</span>",G.onclick=Y=>{Y.stopPropagation(),O(C.id)},i("labels").appendChild(G),be.set(C.id,G)}}function Qe(){let C=i("rideBubble");if(C.classList.add("hidden"),A.mode!=="walk"||A.sheet||!i("mapModal").classList.contains("hidden"))return;let G=a.MOBILITY,Y=[G.pos[0]-2,1.55,G.pos[1]],j=E.camera.eye;if(Math.hypot(j[0]-Y[0],j[2]-Y[2])>18)return;let re=E.project(Y);if(!re||re.z>1||re.x<0||re.x>innerWidth||re.y<0||re.y>innerHeight)return;let we=[E.camera.target[0]-j[0],E.camera.target[2]-j[2]],ie=Math.hypot(...we);if(ie<.001)return;let We=E.project([Y[0]-we[1]/ie*.5,Y[1],Y[2]+we[0]/ie*.5]);if(!We)return;let gt=2*Math.hypot(We.x-re.x,We.y-re.y);if(gt<24)return;let et=gt/(d?132:156),Pe=Math.min(innerWidth/2,(d?146:176)*et/2+8);C.style.setProperty("--ride-scale",et),C.style.left=Math.max(Pe,Math.min(innerWidth-Pe,re.x))+"px",C.style.top=re.y+"px",C.classList.remove("hidden")}function it(){if(!w)return;let C=A.mode==="overview",G=A.labels&&A.mode!=="welcome"&&!A.sheet&&i("mapModal").classList.contains("hidden"),Y=[];for(let re of y.markers){let we=be.get(re.id);if(we.classList.add("hidden"),!G)continue;let ie=Math.hypot(E.camera.eye[0]-re.marker[0],E.camera.eye[2]-re.marker[2]);if(!C&&ie>24)continue;let We=E.project(re.marker);if(!(!We||We.z>1||We.x<35||We.x>innerWidth-35||We.y<112||We.y>innerHeight-90)){if(!C){let gt=!1,et=E.camera.eye;for(let Pe of y.buildings){if(Pe.gym){let Ke=et[0]>Pe.x-Pe.w/2&&et[0]<Pe.x+Pe.w/2&&et[2]>Pe.z-Pe.d/2&&et[2]<Pe.z+Pe.d/2,wt=re.marker[0]>Pe.x-Pe.w/2&&re.marker[0]<Pe.x+Pe.w/2&&re.marker[2]>Pe.z-Pe.d/2&&re.marker[2]<Pe.z+Pe.d/2;Ke!==wt&&ie>6&&(gt=!0);continue}for(let Ke=.1;Ke<.96;Ke+=.09){let wt=et[0]+(re.marker[0]-et[0])*Ke,It=et[2]+(re.marker[2]-et[2])*Ke,Vt=et[1]+(re.marker[1]-et[1])*Ke;if(Math.abs(wt-Pe.x)<Pe.w/2&&Math.abs(It-Pe.z)<Pe.d/2&&Vt<Pe.h){gt=!0;break}}if(gt)break}if(gt)continue}Y.push({r:re,el:we,pr:We,d:ie})}}Y.sort((re,we)=>re.d-we.d);let j=[];for(let re of Y){if(j.length>=(C?20:d?4:7))break;let we=Math.min(d?160:220,45+re.r.short.length*10);j.some(ie=>Math.abs(ie.pr.x-re.pr.x)<(ie.width+we)/2+7&&Math.abs(ie.pr.y-re.pr.y)<34)||(re.width=we,re.el.style.left=re.pr.x+"px",re.el.style.top=re.pr.y+"px",re.el.classList.remove("hidden"),j.push(re))}}function lt(){zt("かまにゃん","mascot"),i("sheetBody").innerHTML='<h3 class="detail-title">かまにゃん</h3><p class="detail-caption">鎌倉地域メディア「かまくらいふ」のキャラクターです。</p><div class="note-box">しらすの首輪に大仏のポシェットをつけています</div><p class="source-text">'+e(r.notice)+'</p><p class="source-text"><a href="https://kamakura-life.net/mascot/" target="_blank" rel="noopener noreferrer">かまくらいふの紹介ページ</a></p>'}function Z(){let C=document.createElement("button");C.id="kamanyanLabel",C.className="world-label hidden",C.style.setProperty("--accent","#a97887"),C.setAttribute("aria-label","かまくらいふ かまにゃんの内容を見る"),C.innerHTML="<span>かまくらいふ　かまにゃん</span>",C.onclick=G=>{G.stopPropagation(),lt()},i("labels").appendChild(C)}function Ne(){let C=i("kamanyanLabel");if(!C||(C.classList.add("hidden"),!A.labels||A.mode==="welcome"||A.mode==="ride"||A.sheet||!i("mapModal").classList.contains("hidden")))return;let G=y.getKamanyan(),Y=Math.hypot(E.camera.eye[0]-G[0],E.camera.eye[2]-G[2]);if(A.mode!=="overview"&&Y>28)return;let j=E.project(G);!j||j.z>1||j.x<80||j.x>innerWidth-80||j.y<110||j.y>innerHeight-80||(C.style.left=j.x+"px",C.style.top=j.y+"px",C.classList.remove("hidden"))}function ve(){if(!w)return;let C=null,G=4.8;if(A.mode==="walk")for(let ie of y.markers){if(!ie.approach)continue;let We=Math.hypot(A.pos[0]-ie.approach[0],A.pos[1]-ie.approach[1]);We<G&&(G=We,C=ie)}A.nearest=C?.id||null;let Y=C&&!A.sheet&&A.mode==="walk";i("nearby").classList.toggle("hidden",!Y),Y&&(i("nearCategory").textContent=C.id.includes("-")?C.id:C.id==="WC"?"WC":"案内",i("nearCategory").style.background=c[C.category],i("nearCaption").textContent=S(C),i("nearName").textContent=C.short);let[j,re]=A.pos,we=j>33&&j<57.5&&re>2.6&&re<47?"体育館":re>48?"正門・キッチンカーエリア":re<-25?"モビリティー・であいの広場":j<-13?"アウトドアーエリア":"校庭・にぎわいゾーン";i("locationText").textContent=A.mode==="overview"?"会場全体":A.mode==="ride"?"トゥクトゥクに乗車中":we}let Ie=new Map,Be=0;i("scene").addEventListener("pointerdown",C=>{if(!(!w||A.sheet||A.mode==="welcome")){if(Ie.set(C.pointerId,[C.clientX,C.clientY]),Ie.size===2){$.multi=!0;let G=[...Ie.values()];Be=Math.hypot(G[0][0]-G[1][0],G[0][1]-G[1][1])}$.active=!0,$.pid=C.pointerId,$.x=C.clientX,$.y=C.clientY,$.moved=0,$.multi=Ie.size>1,i("scene").setPointerCapture(C.pointerId)}}),i("scene").addEventListener("pointermove",C=>{if(!Ie.has(C.pointerId))return;if(Ie.set(C.pointerId,[C.clientX,C.clientY]),Ie.size===2&&A.mode==="overview"){let j=[...Ie.values()],re=Math.hypot(j[0][0]-j[1][0],j[0][1]-j[1][1]);A.orbitDist=FestaGL.clamp(A.orbitDist*Be/Math.max(1,re),25,190),Be=re;return}if(!$.active||$.pid!==C.pointerId)return;let G=C.clientX-$.x,Y=C.clientY-$.y;$.x=C.clientX,$.y=C.clientY,$.moved+=Math.abs(G)+Math.abs(Y),A.mode==="overview"?(A.orbitYaw-=G*.004,A.orbitPitch=FestaGL.clamp(A.orbitPitch+Y*.003,.18,1.48)):(A.mode==="ride"?A.rideYaw+=G*.004:A.yaw-=G*.004,A.pitch=FestaGL.clamp(A.pitch+Y*.0035,-1.15,1.15))});function Me(C){let G=C.type==="pointerup"&&A.mode==="overview"&&$.pid===C.pointerId&&Ie.size===1&&!$.multi&&$.moved<=8;if(Ie.delete(C.pointerId),$.pid===C.pointerId&&($.active=!1),G){let Y=i("scene").getBoundingClientRect(),j=E.groundPoint(C.clientX-Y.left,C.clientY-Y.top);j&&xe([j[0],j[2]])}}i("scene").addEventListener("pointerup",Me),i("scene").addEventListener("pointercancel",Me),i("scene").addEventListener("contextmenu",C=>C.preventDefault()),i("scene").addEventListener("wheel",C=>{A.mode==="overview"&&(C.preventDefault(),A.orbitDist=FestaGL.clamp(A.orbitDist*Math.exp(C.deltaY*.001),25,190))},{passive:!1}),i("joystick").addEventListener("pointerdown",C=>{C.preventDefault(),H.pid=C.pointerId,H.active=!0,i("joystick").setPointerCapture(C.pointerId),nt(C),A.auto&&(A.auto=!1,ge())}),i("joystick").addEventListener("pointermove",C=>{H.pid===C.pointerId&&nt(C)});function nt(C){let G=i("joystick").getBoundingClientRect(),Y=C.clientX-(G.left+G.width/2),j=C.clientY-(G.top+G.height/2),re=Math.hypot(Y,j),we=37;re>we&&(Y*=we/re,j*=we/re),H.x=Y/we,H.y=-j/we,i("joyKnob").style.transform="translate("+Y+"px,"+j+"px)"}function F(){H.x=H.y=0,H.active=!1,H.pid=null,i("joyKnob").style.transform=""}i("joystick").addEventListener("pointerup",F),i("joystick").addEventListener("pointercancel",F);function le(){for(let C in J)J[C]=!1;F()}window.addEventListener("blur",le),document.addEventListener("visibilitychange",()=>{le(),N=0}),document.addEventListener("keydown",C=>{if(!w)return;let G=/INPUT|SELECT|TEXTAREA/.test(document.activeElement?.tagName);if(C.code==="Escape"){C.preventDefault(),i("mapModal").classList.contains("hidden")?A.sheet?mt():Kt():he();return}if(C.code==="Tab"&&(A.sheet||!i("mapModal").classList.contains("hidden"))){let Y=A.sheet?i("sheet"):i("mapModal"),j=[...Y.querySelectorAll("button,a,input,select")].filter(re=>!re.closest(".hidden")&&!re.disabled);if(j.length){let re=j[0],we=j[j.length-1];C.shiftKey&&document.activeElement===re?(we.focus(),C.preventDefault()):!C.shiftKey&&document.activeElement===we&&(re.focus(),C.preventDefault())}return}G||A.sheet||!i("mapModal").classList.contains("hidden")||(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight"].includes(C.code)&&(C.preventDefault(),J[C.code]=!0,A.auto&&(A.auto=!1,ge())),!C.repeat&&(C.code==="KeyE"&&A.nearest&&O(A.nearest),C.code==="KeyV"&&_e(),C.code==="KeyM"&&Se(),C.code==="KeyF"&&jt()))}),document.addEventListener("keyup",C=>J[C.code]=!1);function ye(C){if(!w||A.paused)return;if(y.update(_,C),A.mode==="walk"&&!A.sheet&&i("mapModal").classList.contains("hidden")){let j=(J.KeyW||J.ArrowUp?1:0)-(J.KeyS||J.ArrowDown?1:0)+H.y,re=(J.KeyD||J.ArrowRight?1:0)-(J.KeyA||J.ArrowLeft?1:0)+H.x,we=Math.hypot(j,re);if(we>.03){we>1&&(j/=we,re/=we);let We=J.KeyW||J.ArrowUp||J.KeyS||J.ArrowDown||J.KeyD||J.ArrowRight||J.KeyA||J.ArrowLeft?A.runMode||J.ShiftLeft||J.ShiftRight?4.6:3:2.3+2.3*Math.min(we,1);pt((Math.sin(A.yaw)*j+Math.cos(A.yaw)*re)*We*C,(-Math.cos(A.yaw)*j+Math.sin(A.yaw)*re)*We*C)}else ot(C)}let G,Y;if(A.mode==="overview"){let j=A.orbitTarget,re=A.orbitDist,we=Math.cos(A.orbitPitch);G=[j[0]+Math.sin(A.orbitYaw)*re*we,Math.sin(A.orbitPitch)*re,j[2]+Math.cos(A.orbitYaw)*re*we],Y=[...j]}else if(A.mode==="welcome"){let j=b?0:Math.sin(_*.085)*.8;G=[2.2+j,2.2,11.5],Y=[15+j,2,-13]}else if(A.mode==="ride"){let j=y.getCar(),re=-.23;G=[j.x+Math.sin(j.yaw)*re,1.68,j.z+Math.cos(j.yaw)*re];let we=j.yaw+A.rideYaw;Y=[G[0]+Math.sin(we)*Math.cos(A.pitch),G[1]+Math.sin(A.pitch),G[2]+Math.cos(we)*Math.cos(A.pitch)],A.pos=[j.x,j.z]}else{let re=(Math.abs(H.x)+Math.abs(H.y)||J.KeyW||J.KeyA||J.KeyS||J.KeyD||A.auto)&&!b?Math.sin(A.distanceWalked*8)*.017:0;G=[A.pos[0],1.68+y.walkHeight(A.pos[0],A.pos[1])+re,A.pos[1]],Y=[G[0]+Math.sin(A.yaw)*Math.cos(A.pitch),G[1]+Math.sin(A.pitch),G[2]-Math.cos(A.yaw)*Math.cos(A.pitch)]}E.camera.near=A.mode==="overview"?1:.09,E.camera.eye=G,E.camera.target=Y}function Ee(C){if(!w)return;if(A.testFreeze){requestAnimationFrame(Ee);return}let G=N?Math.min(.12,(C-N)/1e3):.016;N=C,document.hidden||(A.paused||(_+=G),ye(G),E.render(_),Qe(),D+=G,D>.13&&(D=0,it(),Ne(),ve(),ae(i("minimap")),!i("mapModal").classList.contains("hidden")&&!Te&&ae(i("bigmap"),!0))),requestAnimationFrame(Ee)}i("rideBubble").onclick=C=>{C.stopPropagation(),yt()},i("homeBtn").onclick=_t,i("startBtn").onclick=()=>ee("field"),i("startMain").onclick=()=>ee("GATE_MAIN"),i("startWest").onclick=()=>ee("GATE_WEST"),i("welcomeOverview").onclick=_e,i("searchBtn").onclick=jt,i("overviewBtn").onclick=_e,i("settingsBtn").onclick=p,i("helpBtn").onclick=W,i("sheetClose").onclick=mt,i("sheetScrim").onclick=mt,i("sheetBack").onclick=jt,i("nearOpen").onclick=()=>A.nearest&&O(A.nearest),i("mapBtn").onclick=Se,i("mapClose").onclick=he,De(i("bigmap"),Re),De(i("originalPlan"),ze),i("speedToggle").onclick=()=>{A.runMode=!A.runMode,ge()},i("modeExit").onclick=Kt,i("modeAction").onclick=()=>{A.mode==="overview"||A.mode==="ride"?Kt():A.path&&(A.auto=!A.auto,ge())},i("mapToggle").onclick=()=>{Te=!Te,i("bigmap").classList.toggle("hidden",Te),i("originalWrap").classList.toggle("hidden",!Te),i("mapToggle").textContent=Te?"会場マップに戻る":"ブース番号入り配置図を見る",i("mapExplain").textContent=Te?"ブース番号を押すと内容を表示。歩ける場所を押すと、その場所へ直接移動します。":"ブースの点を押すと内容を表示。歩ける場所を押すと、その場所へ直接移動します。",Te||ae(i("bigmap"),!0)},i("mapModal").onclick=C=>{C.target===i("mapModal")&&he()},i("originalPlan").src="./assets/venue-map.svg?v=20260929",window.addEventListener("resize",()=>{E&&E.resize(),y&&(ae(i("minimap")),i("mapModal").classList.contains("hidden")||ae(i("bigmap"),!0))});try{await P(),E=new FestaGL.Renderer(i("scene"),A.quality),y=await buildFestaWorld(E,te),await P(),T=new FestaNavigation(y),Oe(),Z(),te(1,"会場の準備ができました"),w=!0,window.__FESTA_TEST__={ready:!0,renderer:E,world:y,nav:T,state:A,byId:a,start:ee,teleport:Fe,routeTo:ct,showDetail:O,showSearch:jt,showSettings:p,showHelp:W,showMap:Se,toOverview:_e,ride:yt,exitMode:Kt,tick:ye,move:pt,stopRoute:Ye,closeSheet:mt,get animTime(){return _},render:()=>{ye(.016),E.render(_),Qe(),it(),Ne(),ve(),ae(i("minimap"))}},ye(.016),E.render(0),i("loading").classList.add("hidden"),i("hud").classList.remove("hidden"),i("welcome").classList.remove("hidden"),requestAnimationFrame(Ee),i("scene").addEventListener("webglcontextlost",C=>{C.preventDefault(),A.paused=!0,ce("描画が停止しました。ページを再読み込みすると再開できます。",3e4)})}catch(C){console.error(C),i("loading").innerHTML='<div class="loading-inner"><span class="eyebrow">3D表示を開始できませんでした</span><h1 style="font-size:26px">ブース情報は読めます。</h1><p>'+e(C.message)+'</p><p>WebGL 2対応のChrome・Edge・Safariで、このHTMLをブラウザとして開くと3D表示を利用できます。端末のグラフィックアクセラレーション設定も影響します。</p><button id="fallbackList" class="primary">参加団体一覧を読む</button><button id="fallbackPlan" class="secondary" style="margin-top:10px">配置図を見る</button></div>',i("fallbackList").onclick=()=>{jt(),i("sheet").style.zIndex=110,i("sheetScrim").style.zIndex=109},i("fallbackPlan").onclick=()=>{let G=window.open();if(G){G.document.title="会場配置図";let Y=G.document.createElement("img");Y.src="./assets/venue-map.svg",Y.style.maxWidth="100%",G.document.body.appendChild(Y)}},window.__FESTA_TEST__={ready:!1,error:C.message}}})();})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
