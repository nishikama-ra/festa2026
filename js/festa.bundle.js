(()=>{var dh=0,Dl=1,fh=2;var ns=1,ph=2,Bs=3,Vi=0,vn=1,On=2,ci=0,zs=1,Nl=2,Ul=3,Fl=4,mh=5;var is=100,gh=101,xh=102,_h=103,yh=104,vh=200,Mh=201,bh=202,Sh=203,Ol=204,Bl=205,wh=206,Th=207,Eh=208,Ah=209,Ch=210,Rh=211,Ih=212,Ph=213,Lh=214,va=0,Ma=1,ba=2,Es=3,Sa=4,wa=5,Ta=6,Ea=7,zl=0,Dh=1,Nh=2,jn=0,kl=1,Vl=2,Gl=3,Ir=4,Hl=5,Wl=6,Xl=7;var ql=300,Gi=301,ss=302,Ja=303,$a=304,Pr=306,As=1e3,si=1001,Aa=1002,cn=1003,Uh=1004;var Lr=1005;var en=1006,Ka=1007;var hi=1008;var Cn=1009,Yl=1010,Zl=1011,ks=1012,ja=1013,Qn=1014,Hn=1015,ti=1016,Qa=1017,to=1018,Vs=1020,Jl=35902,$l=35899,Kl=1021,jl=1022,Wn=1023,ri=1026,Hi=1027,eo=1028,no=1029,Wi=1030,io=1031;var so=1033,Dr=33776,Nr=33777,Ur=33778,Fr=33779,ro=35840,ao=35841,oo=35842,lo=35843,co=36196,ho=37492,uo=37496,fo=37488,po=37489,Or=37490,mo=37491,go=37808,xo=37809,_o=37810,yo=37811,vo=37812,Mo=37813,bo=37814,So=37815,wo=37816,To=37817,Eo=37818,Ao=37819,Co=37820,Ro=37821,Io=36492,Po=36494,Lo=36495,Do=36283,No=36284,Br=36285,Uo=36286;var rr=2300,Ca=2301,_a=2302,Tl=2303,El=2400,Al=2401,Cl=2402;var Fh=3200,Ql=3201;var Fo=0,Oh=1,wi="",un="srgb",ar="srgb-linear",or="linear",Oe="srgb";var ya=7680;var Bh=519,zh=512,kh=513,Vh=514,Oo=515,Gh=516,Hh=517,Bo=518,Wh=519,tc=35044,zo=35048;var zr="300 es",Kn=2e3,Cs=2001;function ku(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Vu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function lr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Xh(){let i=lr("canvas");return i.style.display="block",i}var Vc={},Rs=null;function cr(...i){let t="THREE."+i.shift();Rs?Rs("log",t,...i):console.log(t,...i)}function qh(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function he(...i){i=qh(i);let t="THREE."+i.shift();if(Rs)Rs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ce(...i){i=qh(i);let t="THREE."+i.shift();if(Rs)Rs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Qi(...i){let t=i.join(" ");t in Vc||(Vc[t]=!0,he(...i))}function Yh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Zh={[va]:Ma,[ba]:Ta,[Sa]:Ea,[Es]:wa,[Ma]:va,[Ta]:ba,[Ea]:Sa,[wa]:Es},ai=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,l=s.length;r<l;r++)s[r].call(this,t);t.target=null}}},dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var nl=Math.PI/180,Ra=180/Math.PI;function Ni(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]+"-"+dn[t&255]+dn[t>>8&255]+"-"+dn[t>>16&15|64]+dn[t>>24&255]+"-"+dn[e&63|128]+dn[e>>8&255]+"-"+dn[e>>16&255]+dn[e>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function Re(i,t,e){return Math.max(t,Math.min(e,i))}function Gu(i,t){return(i%t+t)%t}function il(i,t,e){return(1-e)*i+e*t}function ii(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var rc=class rc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Re(this.x,t.x,e.x),this.y=Re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Re(this.x,t,e),this.y=Re(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,l=this.y-t.y;return this.x=r*n-l*s+t.x,this.y=r*s+l*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};rc.prototype.isVector2=!0;var Ee=rc,oi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,l,a){let h=n[s+0],u=n[s+1],m=n[s+2],x=n[s+3],f=r[l+0],_=r[l+1],S=r[l+2],P=r[l+3];if(x!==P||h!==f||u!==_||m!==S){let T=h*f+u*_+m*S+x*P;T<0&&(f=-f,_=-_,S=-S,P=-P,T=-T);let d=1-a;if(T<.9995){let b=Math.acos(T),C=Math.sin(b);d=Math.sin(d*b)/C,a=Math.sin(a*b)/C,h=h*d+f*a,u=u*d+_*a,m=m*d+S*a,x=x*d+P*a}else{h=h*d+f*a,u=u*d+_*a,m=m*d+S*a,x=x*d+P*a;let b=1/Math.sqrt(h*h+u*u+m*m+x*x);h*=b,u*=b,m*=b,x*=b}}t[e]=h,t[e+1]=u,t[e+2]=m,t[e+3]=x}static multiplyQuaternionsFlat(t,e,n,s,r,l){let a=n[s],h=n[s+1],u=n[s+2],m=n[s+3],x=r[l],f=r[l+1],_=r[l+2],S=r[l+3];return t[e]=a*S+m*x+h*_-u*f,t[e+1]=h*S+m*f+u*x-a*_,t[e+2]=u*S+m*_+a*f-h*x,t[e+3]=m*S-a*x-h*f-u*_,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,l=t._order,a=Math.cos,h=Math.sin,u=a(n/2),m=a(s/2),x=a(r/2),f=h(n/2),_=h(s/2),S=h(r/2);switch(l){case"XYZ":this._x=f*m*x+u*_*S,this._y=u*_*x-f*m*S,this._z=u*m*S+f*_*x,this._w=u*m*x-f*_*S;break;case"YXZ":this._x=f*m*x+u*_*S,this._y=u*_*x-f*m*S,this._z=u*m*S-f*_*x,this._w=u*m*x+f*_*S;break;case"ZXY":this._x=f*m*x-u*_*S,this._y=u*_*x+f*m*S,this._z=u*m*S+f*_*x,this._w=u*m*x-f*_*S;break;case"ZYX":this._x=f*m*x-u*_*S,this._y=u*_*x+f*m*S,this._z=u*m*S-f*_*x,this._w=u*m*x+f*_*S;break;case"YZX":this._x=f*m*x+u*_*S,this._y=u*_*x+f*m*S,this._z=u*m*S-f*_*x,this._w=u*m*x-f*_*S;break;case"XZY":this._x=f*m*x-u*_*S,this._y=u*_*x-f*m*S,this._z=u*m*S+f*_*x,this._w=u*m*x+f*_*S;break;default:he("Quaternion: .setFromEuler() encountered an unknown order: "+l)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],l=e[1],a=e[5],h=e[9],u=e[2],m=e[6],x=e[10],f=n+a+x;if(f>0){let _=.5/Math.sqrt(f+1);this._w=.25/_,this._x=(m-h)*_,this._y=(r-u)*_,this._z=(l-s)*_}else if(n>a&&n>x){let _=2*Math.sqrt(1+n-a-x);this._w=(m-h)/_,this._x=.25*_,this._y=(s+l)/_,this._z=(r+u)/_}else if(a>x){let _=2*Math.sqrt(1+a-n-x);this._w=(r-u)/_,this._x=(s+l)/_,this._y=.25*_,this._z=(h+m)/_}else{let _=2*Math.sqrt(1+x-n-a);this._w=(l-s)/_,this._x=(r+u)/_,this._y=(h+m)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,l=t._w,a=e._x,h=e._y,u=e._z,m=e._w;return this._x=n*m+l*a+s*u-r*h,this._y=s*m+l*h+r*a-n*u,this._z=r*m+l*u+n*h-s*a,this._w=l*m-n*a-s*h-r*u,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,l=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,l=-l,a=-a);let h=1-e;if(a<.9995){let u=Math.acos(a),m=Math.sin(u);h=Math.sin(h*u)/m,e=Math.sin(e*u)/m,this._x=this._x*h+n*e,this._y=this._y*h+s*e,this._z=this._z*h+r*e,this._w=this._w*h+l*e,this._onChangeCallback()}else this._x=this._x*h+n*e,this._y=this._y*h+s*e,this._z=this._z*h+r*e,this._w=this._w*h+l*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ac=class ac{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,l=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*l,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*l,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*l,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,l=t.y,a=t.z,h=t.w,u=2*(l*s-a*n),m=2*(a*e-r*s),x=2*(r*n-l*e);return this.x=e+h*u+l*x-a*m,this.y=n+h*m+a*u-r*x,this.z=s+h*x+r*m-l*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Re(this.x,t.x,e.x),this.y=Re(this.y,t.y,e.y),this.z=Re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Re(this.x,t,e),this.y=Re(this.y,t,e),this.z=Re(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,l=e.x,a=e.y,h=e.z;return this.x=s*h-r*a,this.y=r*l-n*h,this.z=n*a-s*l,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return sl.copy(this).projectOnVector(t),this.sub(sl)}reflect(t){return this.sub(sl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ac.prototype.isVector3=!0;var ht=ac,sl=new ht,Gc=new oi,oc=class oc{constructor(t,e,n,s,r,l,a,h,u){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,l,a,h,u)}set(t,e,n,s,r,l,a,h,u){let m=this.elements;return m[0]=t,m[1]=s,m[2]=a,m[3]=e,m[4]=r,m[5]=h,m[6]=n,m[7]=l,m[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,l=n[0],a=n[3],h=n[6],u=n[1],m=n[4],x=n[7],f=n[2],_=n[5],S=n[8],P=s[0],T=s[3],d=s[6],b=s[1],C=s[4],y=s[7],c=s[2],w=s[5],D=s[8];return r[0]=l*P+a*b+h*c,r[3]=l*T+a*C+h*w,r[6]=l*d+a*y+h*D,r[1]=u*P+m*b+x*c,r[4]=u*T+m*C+x*w,r[7]=u*d+m*y+x*D,r[2]=f*P+_*b+S*c,r[5]=f*T+_*C+S*w,r[8]=f*d+_*y+S*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],l=t[4],a=t[5],h=t[6],u=t[7],m=t[8];return e*l*m-e*a*u-n*r*m+n*a*h+s*r*u-s*l*h}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],l=t[4],a=t[5],h=t[6],u=t[7],m=t[8],x=m*l-a*u,f=a*h-m*r,_=u*r-l*h,S=e*x+n*f+s*_;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);let P=1/S;return t[0]=x*P,t[1]=(s*u-m*n)*P,t[2]=(a*n-s*l)*P,t[3]=f*P,t[4]=(m*e-s*h)*P,t[5]=(s*r-a*e)*P,t[6]=_*P,t[7]=(n*h-u*e)*P,t[8]=(l*e-n*r)*P,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,l,a){let h=Math.cos(r),u=Math.sin(r);return this.set(n*h,n*u,-n*(h*l+u*a)+l+t,-s*u,s*h,-s*(-u*l+h*a)+a+e,0,0,1),this}scale(t,e){return Qi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(rl.makeScale(t,e)),this}rotate(t){return Qi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(rl.makeRotation(-t)),this}translate(t,e){return Qi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(rl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};oc.prototype.isMatrix3=!0;var pe=oc,rl=new pe,Hc=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wc=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hu(){let i={enabled:!0,workingColorSpace:ar,spaces:{},convert:function(s,r,l){return this.enabled===!1||r===l||!r||!l||(this.spaces[r].transfer===Oe&&(s.r=bi(s.r),s.g=bi(s.g),s.b=bi(s.b)),this.spaces[r].primaries!==this.spaces[l].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Oe&&(s.r=Ts(s.r),s.g=Ts(s.g),s.b=Ts(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===wi?or:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,l){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Qi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Qi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ar]:{primaries:t,whitePoint:n,transfer:or,toXYZ:Hc,fromXYZ:Wc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:t,whitePoint:n,transfer:Oe,toXYZ:Hc,fromXYZ:Wc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:un}}}),i}var Ae=Hu();function bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ts(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var us,Ia=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{us===void 0&&(us=lr("canvas")),us.width=t.width,us.height=t.height;let s=us.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=us}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=lr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let l=0;l<r.length;l++)r[l]=bi(r[l]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(bi(e[n]/255)*255):e[n]=bi(e[n]);return{data:e,width:t.width,height:t.height}}else return he("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Wu=0,Is=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=Ni(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let l=0,a=s.length;l<a;l++)s[l].isDataTexture?r.push(al(s[l].image)):r.push(al(s[l]))}else r=al(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function al(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ia.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(he("Texture: Unable to serialize Texture."),{})}var Xu=0,ol=new ht,En=class i extends ai{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=si,s=si,r=en,l=hi,a=Wn,h=Cn,u=i.DEFAULT_ANISOTROPY,m=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=Ni(),this.name="",this.source=new Is(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=l,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=h,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ol).x}get height(){return this.source.getSize(ol).y}get depth(){return this.source.getSize(ol).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){he(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){he(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ql)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case As:t.x=t.x-Math.floor(t.x);break;case si:t.x=t.x<0?0:1;break;case Aa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case As:t.y=t.y-Math.floor(t.y);break;case si:t.y=t.y<0?0:1;break;case Aa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=ql;En.DEFAULT_ANISOTROPY=1;var lc=class lc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,l=t.elements;return this.x=l[0]*e+l[4]*n+l[8]*s+l[12]*r,this.y=l[1]*e+l[5]*n+l[9]*s+l[13]*r,this.z=l[2]*e+l[6]*n+l[10]*s+l[14]*r,this.w=l[3]*e+l[7]*n+l[11]*s+l[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,h=t.elements,u=h[0],m=h[4],x=h[8],f=h[1],_=h[5],S=h[9],P=h[2],T=h[6],d=h[10];if(Math.abs(m-f)<.01&&Math.abs(x-P)<.01&&Math.abs(S-T)<.01){if(Math.abs(m+f)<.1&&Math.abs(x+P)<.1&&Math.abs(S+T)<.1&&Math.abs(u+_+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(u+1)/2,y=(_+1)/2,c=(d+1)/2,w=(m+f)/4,D=(x+P)/4,g=(S+T)/4;return C>y&&C>c?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=w/n,r=D/n):y>c?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=g/s):c<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(c),n=D/r,s=g/r),this.set(n,s,r,e),this}let b=Math.sqrt((T-S)*(T-S)+(x-P)*(x-P)+(f-m)*(f-m));return Math.abs(b)<.001&&(b=1),this.x=(T-S)/b,this.y=(x-P)/b,this.z=(f-m)/b,this.w=Math.acos((u+_+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Re(this.x,t.x,e.x),this.y=Re(this.y,t.y,e.y),this.z=Re(this.z,t.z,e.z),this.w=Re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Re(this.x,t,e),this.y=Re(this.y,t,e),this.z=Re(this.z,t,e),this.w=Re(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};lc.prototype.isVector4=!0;var Ye=lc,Pa=class extends ai{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ye(0,0,t,e),this.scissorTest=!1,this.viewport=new Ye(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new En(s),l=n.count;for(let a=0;a<l;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Is(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},An=class extends Pa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ts=class extends En{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var La=class extends En{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Za=class Za{constructor(t,e,n,s,r,l,a,h,u,m,x,f,_,S,P,T){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,l,a,h,u,m,x,f,_,S,P,T)}set(t,e,n,s,r,l,a,h,u,m,x,f,_,S,P,T){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=l,d[9]=a,d[13]=h,d[2]=u,d[6]=m,d[10]=x,d[14]=f,d[3]=_,d[7]=S,d[11]=P,d[15]=T,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Za().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ds.setFromMatrixColumn(t,0).length(),r=1/ds.setFromMatrixColumn(t,1).length(),l=1/ds.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*l,e[9]=n[9]*l,e[10]=n[10]*l,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,l=Math.cos(n),a=Math.sin(n),h=Math.cos(s),u=Math.sin(s),m=Math.cos(r),x=Math.sin(r);if(t.order==="XYZ"){let f=l*m,_=l*x,S=a*m,P=a*x;e[0]=h*m,e[4]=-h*x,e[8]=u,e[1]=_+S*u,e[5]=f-P*u,e[9]=-a*h,e[2]=P-f*u,e[6]=S+_*u,e[10]=l*h}else if(t.order==="YXZ"){let f=h*m,_=h*x,S=u*m,P=u*x;e[0]=f+P*a,e[4]=S*a-_,e[8]=l*u,e[1]=l*x,e[5]=l*m,e[9]=-a,e[2]=_*a-S,e[6]=P+f*a,e[10]=l*h}else if(t.order==="ZXY"){let f=h*m,_=h*x,S=u*m,P=u*x;e[0]=f-P*a,e[4]=-l*x,e[8]=S+_*a,e[1]=_+S*a,e[5]=l*m,e[9]=P-f*a,e[2]=-l*u,e[6]=a,e[10]=l*h}else if(t.order==="ZYX"){let f=l*m,_=l*x,S=a*m,P=a*x;e[0]=h*m,e[4]=S*u-_,e[8]=f*u+P,e[1]=h*x,e[5]=P*u+f,e[9]=_*u-S,e[2]=-u,e[6]=a*h,e[10]=l*h}else if(t.order==="YZX"){let f=l*h,_=l*u,S=a*h,P=a*u;e[0]=h*m,e[4]=P-f*x,e[8]=S*x+_,e[1]=x,e[5]=l*m,e[9]=-a*m,e[2]=-u*m,e[6]=_*x+S,e[10]=f-P*x}else if(t.order==="XZY"){let f=l*h,_=l*u,S=a*h,P=a*u;e[0]=h*m,e[4]=-x,e[8]=u*m,e[1]=f*x+P,e[5]=l*m,e[9]=_*x-S,e[2]=S*x-_,e[6]=a*m,e[10]=P*x+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qu,t,Yu)}lookAt(t,e,n){let s=this.elements;return Pn.subVectors(t,e),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Ci.crossVectors(n,Pn),Ci.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Ci.crossVectors(n,Pn)),Ci.normalize(),jr.crossVectors(Pn,Ci),s[0]=Ci.x,s[4]=jr.x,s[8]=Pn.x,s[1]=Ci.y,s[5]=jr.y,s[9]=Pn.y,s[2]=Ci.z,s[6]=jr.z,s[10]=Pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,l=n[0],a=n[4],h=n[8],u=n[12],m=n[1],x=n[5],f=n[9],_=n[13],S=n[2],P=n[6],T=n[10],d=n[14],b=n[3],C=n[7],y=n[11],c=n[15],w=s[0],D=s[4],g=s[8],L=s[12],z=s[1],J=s[5],q=s[9],nt=s[13],W=s[2],Q=s[6],dt=s[10],ut=s[14],yt=s[3],mt=s[7],ft=s[11],it=s[15];return r[0]=l*w+a*z+h*W+u*yt,r[4]=l*D+a*J+h*Q+u*mt,r[8]=l*g+a*q+h*dt+u*ft,r[12]=l*L+a*nt+h*ut+u*it,r[1]=m*w+x*z+f*W+_*yt,r[5]=m*D+x*J+f*Q+_*mt,r[9]=m*g+x*q+f*dt+_*ft,r[13]=m*L+x*nt+f*ut+_*it,r[2]=S*w+P*z+T*W+d*yt,r[6]=S*D+P*J+T*Q+d*mt,r[10]=S*g+P*q+T*dt+d*ft,r[14]=S*L+P*nt+T*ut+d*it,r[3]=b*w+C*z+y*W+c*yt,r[7]=b*D+C*J+y*Q+c*mt,r[11]=b*g+C*q+y*dt+c*ft,r[15]=b*L+C*nt+y*ut+c*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],l=t[1],a=t[5],h=t[9],u=t[13],m=t[2],x=t[6],f=t[10],_=t[14],S=t[3],P=t[7],T=t[11],d=t[15],b=h*_-u*f,C=a*_-u*x,y=a*f-h*x,c=l*_-u*m,w=l*f-h*m,D=l*x-a*m;return e*(P*b-T*C+d*y)-n*(S*b-T*c+d*w)+s*(S*C-P*c+d*D)-r*(S*y-P*w+T*D)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],l=t[5],a=t[9],h=t[2],u=t[6],m=t[10];return e*(l*m-a*u)-n*(r*m-a*h)+s*(r*u-l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],l=t[4],a=t[5],h=t[6],u=t[7],m=t[8],x=t[9],f=t[10],_=t[11],S=t[12],P=t[13],T=t[14],d=t[15],b=e*a-n*l,C=e*h-s*l,y=e*u-r*l,c=n*h-s*a,w=n*u-r*a,D=s*u-r*h,g=m*P-x*S,L=m*T-f*S,z=m*d-_*S,J=x*T-f*P,q=x*d-_*P,nt=f*d-_*T,W=b*nt-C*q+y*J+c*z-w*L+D*g;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Q=1/W;return t[0]=(a*nt-h*q+u*J)*Q,t[1]=(s*q-n*nt-r*J)*Q,t[2]=(P*D-T*w+d*c)*Q,t[3]=(f*w-x*D-_*c)*Q,t[4]=(h*z-l*nt-u*L)*Q,t[5]=(e*nt-s*z+r*L)*Q,t[6]=(T*y-S*D-d*C)*Q,t[7]=(m*D-f*y+_*C)*Q,t[8]=(l*q-a*z+u*g)*Q,t[9]=(n*z-e*q-r*g)*Q,t[10]=(S*w-P*y+d*b)*Q,t[11]=(x*y-m*w-_*b)*Q,t[12]=(a*L-l*J-h*g)*Q,t[13]=(e*J-n*L+s*g)*Q,t[14]=(P*C-S*c-T*b)*Q,t[15]=(m*c-x*C+f*b)*Q,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,l=t.x,a=t.y,h=t.z,u=r*l,m=r*a;return this.set(u*l+n,u*a-s*h,u*h+s*a,0,u*a+s*h,m*a+n,m*h-s*l,0,u*h-s*a,m*h+s*l,r*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,l){return this.set(1,n,r,0,t,1,l,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,l=e._y,a=e._z,h=e._w,u=r+r,m=l+l,x=a+a,f=r*u,_=r*m,S=r*x,P=l*m,T=l*x,d=a*x,b=h*u,C=h*m,y=h*x,c=n.x,w=n.y,D=n.z;return s[0]=(1-(P+d))*c,s[1]=(_+y)*c,s[2]=(S-C)*c,s[3]=0,s[4]=(_-y)*w,s[5]=(1-(f+d))*w,s[6]=(T+b)*w,s[7]=0,s[8]=(S+C)*D,s[9]=(T-b)*D,s[10]=(1-(f+P))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let l=ds.set(s[0],s[1],s[2]).length(),a=ds.set(s[4],s[5],s[6]).length(),h=ds.set(s[8],s[9],s[10]).length();r<0&&(l=-l),Zn.copy(this);let u=1/l,m=1/a,x=1/h;return Zn.elements[0]*=u,Zn.elements[1]*=u,Zn.elements[2]*=u,Zn.elements[4]*=m,Zn.elements[5]*=m,Zn.elements[6]*=m,Zn.elements[8]*=x,Zn.elements[9]*=x,Zn.elements[10]*=x,e.setFromRotationMatrix(Zn),n.x=l,n.y=a,n.z=h,this}makePerspective(t,e,n,s,r,l,a=Kn,h=!1){let u=this.elements,m=2*r/(e-t),x=2*r/(n-s),f=(e+t)/(e-t),_=(n+s)/(n-s),S,P;if(h)S=r/(l-r),P=l*r/(l-r);else if(a===Kn)S=-(l+r)/(l-r),P=-2*l*r/(l-r);else if(a===Cs)S=-l/(l-r),P=-l*r/(l-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=m,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=x,u[9]=_,u[13]=0,u[2]=0,u[6]=0,u[10]=S,u[14]=P,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,n,s,r,l,a=Kn,h=!1){let u=this.elements,m=2/(e-t),x=2/(n-s),f=-(e+t)/(e-t),_=-(n+s)/(n-s),S,P;if(h)S=1/(l-r),P=l/(l-r);else if(a===Kn)S=-2/(l-r),P=-(l+r)/(l-r);else if(a===Cs)S=-1/(l-r),P=-r/(l-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=m,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=x,u[9]=0,u[13]=_,u[2]=0,u[6]=0,u[10]=S,u[14]=P,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Za.prototype.isMatrix4=!0;var De=Za,ds=new ht,Zn=new De,qu=new ht(0,0,0),Yu=new ht(1,1,1),Ci=new ht,jr=new ht,Pn=new ht,Xc=new De,qc=new oi,Si=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],l=s[4],a=s[8],h=s[1],u=s[5],m=s[9],x=s[2],f=s[6],_=s[10];switch(e){case"XYZ":this._y=Math.asin(Re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-m,_),this._z=Math.atan2(-l,r)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(a,_),this._z=Math.atan2(h,u)):(this._y=Math.atan2(-x,r),this._z=0);break;case"ZXY":this._x=Math.asin(Re(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-x,_),this._z=Math.atan2(-l,u)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-Re(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(f,_),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-l,u));break;case"YZX":this._z=Math.asin(Re(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,u),this._y=Math.atan2(-x,r)):(this._x=0,this._y=Math.atan2(a,_));break;case"XZY":this._z=Math.asin(-Re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-m,_),this._y=0);break;default:he("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Xc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qc.setFromEuler(this),this.setFromQuaternion(qc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Si.DEFAULT_ORDER="XYZ";var Ps=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Zu=0,Yc=new ht,fs=new oi,xi=new De,Qr=new ht,Qs=new ht,Ju=new ht,$u=new oi,Zc=new ht(1,0,0),Jc=new ht(0,1,0),$c=new ht(0,0,1),Kc={type:"added"},Ku={type:"removed"},ps={type:"childadded",child:null},ll={type:"childremoved",child:null},mn=class i extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new ht,e=new Si,n=new oi,s=new ht(1,1,1);function r(){n.setFromEuler(e,!1)}function l(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new De},normalMatrix:{value:new pe}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ps,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis(Zc,t)}rotateY(t){return this.rotateOnAxis(Jc,t)}rotateZ(t){return this.rotateOnAxis($c,t)}translateOnAxis(t,e){return Yc.copy(t).applyQuaternion(this.quaternion),this.position.add(Yc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zc,t)}translateY(t){return this.translateOnAxis(Jc,t)}translateZ(t){return this.translateOnAxis($c,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qr.copy(t):Qr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Qs,Qr,this.up):xi.lookAt(Qr,Qs,this.up),this.quaternion.setFromRotationMatrix(xi),s&&(xi.extractRotation(s.matrixWorld),fs.setFromRotationMatrix(xi),this.quaternion.premultiply(fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Kc),ps.child=t,this.dispatchEvent(ps),ps.child=null):ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ku),ll.child=t,this.dispatchEvent(ll),ll.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Kc),ps.child=t,this.dispatchEvent(ps),ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let l=this.children[n].getObjectByProperty(t,e);if(l!==void 0)return l}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,l=s.length;r<l;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,t,Ju),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,$u,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let l=0,a=r.length;l<a;l++)r[l].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,h){return a[h.uuid]===void 0&&(a[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let h=a.shapes;if(Array.isArray(h))for(let u=0,m=h.length;u<m;u++){let x=h[u];r(t.shapes,x)}else r(t.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let h=0,u=this.material.length;h<u;h++)a.push(r(t.materials,this.material[h]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let h=this.animations[a];s.animations.push(r(t.animations,h))}}if(e){let a=l(t.geometries),h=l(t.materials),u=l(t.textures),m=l(t.images),x=l(t.shapes),f=l(t.skeletons),_=l(t.animations),S=l(t.nodes);a.length>0&&(n.geometries=a),h.length>0&&(n.materials=h),u.length>0&&(n.textures=u),m.length>0&&(n.images=m),x.length>0&&(n.shapes=x),f.length>0&&(n.skeletons=f),_.length>0&&(n.animations=_),S.length>0&&(n.nodes=S)}return n.object=s,n;function l(a){let h=[];for(let u in a){let m=a[u];delete m.metadata,h.push(m)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};mn.DEFAULT_UP=new ht(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ji=class extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}},ju={type:"move"},Ls=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ht,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ht),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ht,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ht,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,l=null,a=this._targetRay,h=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){l=!0;for(let P of t.hand.values()){let T=e.getJointPose(P,n),d=this._getHandJoint(u,P);T!==null&&(d.matrix.fromArray(T.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=T.radius),d.visible=T!==null}let m=u.joints["index-finger-tip"],x=u.joints["thumb-tip"],f=m.position.distanceTo(x.position),_=.02,S=.005;u.inputState.pinching&&f>_+S?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&f<=_-S&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ju)))}return a!==null&&(a.visible=s!==null),h!==null&&(h.visible=r!==null),u!==null&&(u.visible=l!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ji;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},ta={h:0,s:0,l:0};function cl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ye=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=un){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ae.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Ae.workingColorSpace){if(t=Gu(t,1),e=Re(e,0,1),n=Re(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,l=2*n-r;this.r=cl(l,r,t+1/3),this.g=cl(l,r,t),this.b=cl(l,r,t-1/3)}return Ae.colorSpaceToWorking(this,s),this}setStyle(t,e=un){function n(r){r!==void 0&&parseFloat(r)<1&&he("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,l=s[1],a=s[2];switch(l){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:he("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],l=r.length;if(l===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(l===6)return this.setHex(parseInt(r,16),e);he("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=un){let n=Jh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):he("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}copyLinearToSRGB(t){return this.r=Ts(t.r),this.g=Ts(t.g),this.b=Ts(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=un){return Ae.workingToColorSpace(fn.copy(this),t),Math.round(Re(fn.r*255,0,255))*65536+Math.round(Re(fn.g*255,0,255))*256+Math.round(Re(fn.b*255,0,255))}getHexString(t=un){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ae.workingColorSpace){Ae.workingToColorSpace(fn.copy(this),e);let n=fn.r,s=fn.g,r=fn.b,l=Math.max(n,s,r),a=Math.min(n,s,r),h,u,m=(a+l)/2;if(a===l)h=0,u=0;else{let x=l-a;switch(u=m<=.5?x/(l+a):x/(2-l-a),l){case n:h=(s-r)/x+(s<r?6:0);break;case s:h=(r-n)/x+2;break;case r:h=(n-s)/x+4;break}h/=6}return t.h=h,t.s=u,t.l=m,t}getRGB(t,e=Ae.workingColorSpace){return Ae.workingToColorSpace(fn.copy(this),e),t.r=fn.r,t.g=fn.g,t.b=fn.b,t}getStyle(t=un){Ae.workingToColorSpace(fn.copy(this),t);let e=fn.r,n=fn.g,s=fn.b;return t!==un?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ri),this.setHSL(Ri.h+t,Ri.s+e,Ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ri),t.getHSL(ta);let n=il(Ri.h,ta.h,e),s=il(Ri.s,ta.s,e),r=il(Ri.l,ta.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new ye;ye.NAMES=Jh;var hr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ye(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ur=class extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Jn=new ht,_i=new ht,hl=new ht,yi=new ht,ms=new ht,gs=new ht,jc=new ht,ul=new ht,dl=new ht,fl=new ht,pl=new Ye,ml=new Ye,gl=new Ye,Di=class i{constructor(t=new ht,e=new ht,n=new ht){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Jn.subVectors(t,e),s.cross(Jn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Jn.subVectors(s,e),_i.subVectors(n,e),hl.subVectors(t,e);let l=Jn.dot(Jn),a=Jn.dot(_i),h=Jn.dot(hl),u=_i.dot(_i),m=_i.dot(hl),x=l*u-a*a;if(x===0)return r.set(0,0,0),null;let f=1/x,_=(u*h-a*m)*f,S=(l*m-a*h)*f;return r.set(1-_-S,S,_)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(t,e,n,s,r,l,a,h){return this.getBarycoord(t,e,n,s,yi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,yi.x),h.addScaledVector(l,yi.y),h.addScaledVector(a,yi.z),h)}static getInterpolatedAttribute(t,e,n,s,r,l){return pl.setScalar(0),ml.setScalar(0),gl.setScalar(0),pl.fromBufferAttribute(t,e),ml.fromBufferAttribute(t,n),gl.fromBufferAttribute(t,s),l.setScalar(0),l.addScaledVector(pl,r.x),l.addScaledVector(ml,r.y),l.addScaledVector(gl,r.z),l}static isFrontFacing(t,e,n,s){return Jn.subVectors(n,e),_i.subVectors(t,e),Jn.cross(_i).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Jn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Jn.cross(_i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,l,a;ms.subVectors(s,n),gs.subVectors(r,n),ul.subVectors(t,n);let h=ms.dot(ul),u=gs.dot(ul);if(h<=0&&u<=0)return e.copy(n);dl.subVectors(t,s);let m=ms.dot(dl),x=gs.dot(dl);if(m>=0&&x<=m)return e.copy(s);let f=h*x-m*u;if(f<=0&&h>=0&&m<=0)return l=h/(h-m),e.copy(n).addScaledVector(ms,l);fl.subVectors(t,r);let _=ms.dot(fl),S=gs.dot(fl);if(S>=0&&_<=S)return e.copy(r);let P=_*u-h*S;if(P<=0&&u>=0&&S<=0)return a=u/(u-S),e.copy(n).addScaledVector(gs,a);let T=m*S-_*x;if(T<=0&&x-m>=0&&_-S>=0)return jc.subVectors(r,s),a=(x-m)/(x-m+(_-S)),e.copy(s).addScaledVector(jc,a);let d=1/(T+P+f);return l=P*d,a=f*d,e.copy(n).addScaledVector(ms,l).addScaledVector(gs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},li=class{constructor(t=new ht(1/0,1/0,1/0),e=new ht(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint($n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint($n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=$n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let l=0,a=r.count;l<a;l++)t.isMesh===!0?t.getVertexPosition(l,$n):$n.fromBufferAttribute(r,l),$n.applyMatrix4(t.matrixWorld),this.expandByPoint($n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ea.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ea.copy(n.boundingBox)),ea.applyMatrix4(t.matrixWorld),this.union(ea)}let s=t.children;for(let r=0,l=s.length;r<l;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$n),$n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(tr),na.subVectors(this.max,tr),xs.subVectors(t.a,tr),_s.subVectors(t.b,tr),ys.subVectors(t.c,tr),Ii.subVectors(_s,xs),Pi.subVectors(ys,_s),Zi.subVectors(xs,ys);let e=[0,-Ii.z,Ii.y,0,-Pi.z,Pi.y,0,-Zi.z,Zi.y,Ii.z,0,-Ii.x,Pi.z,0,-Pi.x,Zi.z,0,-Zi.x,-Ii.y,Ii.x,0,-Pi.y,Pi.x,0,-Zi.y,Zi.x,0];return!xl(e,xs,_s,ys,na)||(e=[1,0,0,0,1,0,0,0,1],!xl(e,xs,_s,ys,na))?!1:(ia.crossVectors(Ii,Pi),e=[ia.x,ia.y,ia.z],xl(e,xs,_s,ys,na))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},vi=[new ht,new ht,new ht,new ht,new ht,new ht,new ht,new ht],$n=new ht,ea=new li,xs=new ht,_s=new ht,ys=new ht,Ii=new ht,Pi=new ht,Zi=new ht,tr=new ht,na=new ht,ia=new ht,Ji=new ht;function xl(i,t,e,n,s){for(let r=0,l=i.length-3;r<=l;r+=3){Ji.fromArray(i,r);let a=s.x*Math.abs(Ji.x)+s.y*Math.abs(Ji.y)+s.z*Math.abs(Ji.z),h=t.dot(Ji),u=e.dot(Ji),m=n.dot(Ji);if(Math.max(-Math.max(h,u,m),Math.min(h,u,m))>a)return!1}return!0}var Qe=new ht,sa=new Ee,Qu=0,wn=class extends ai{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=tc,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)sa.fromBufferAttribute(this,e),sa.applyMatrix3(t),this.setXY(e,sa.x,sa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix3(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ii(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ii(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ii(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ii(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ii(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),s=Ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),s=Ge(s,this.array),r=Ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var dr=class extends wn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var fr=class extends wn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Tn=class extends wn{constructor(t,e,n){super(new Float32Array(t),e,n)}},td=new li,er=new ht,_l=new ht,Ui=class{constructor(t=new ht,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):td.setFromPoints(t).getCenter(n);let s=0;for(let r=0,l=t.length;r<l;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;er.subVectors(t,this.center);let e=er.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(er,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_l.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(er.copy(t.center).add(_l)),this.expandByPoint(er.copy(t.center).sub(_l))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ed=0,Gn=new De,yl=new mn,vs=new ht,Ln=new li,nr=new li,ln=new ht,Nn=class i extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ku(t)?fr:dr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new pe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Gn.makeRotationFromQuaternion(t),this.applyMatrix4(Gn),this}rotateX(t){return Gn.makeRotationX(t),this.applyMatrix4(Gn),this}rotateY(t){return Gn.makeRotationY(t),this.applyMatrix4(Gn),this}rotateZ(t){return Gn.makeRotationZ(t),this.applyMatrix4(Gn),this}translate(t,e,n){return Gn.makeTranslation(t,e,n),this.applyMatrix4(Gn),this}scale(t,e,n){return Gn.makeScale(t,e,n),this.applyMatrix4(Gn),this}lookAt(t){return yl.lookAt(t),yl.updateMatrix(),this.applyMatrix4(yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let l=t[s];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new Tn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&he("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ht(-1/0,-1/0,-1/0),new ht(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ht,1/0);return}if(t){let n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(t),e)for(let r=0,l=e.length;r<l;r++){let a=e[r];nr.setFromBufferAttribute(a),this.morphTargetsRelative?(ln.addVectors(Ln.min,nr.min),Ln.expandByPoint(ln),ln.addVectors(Ln.max,nr.max),Ln.expandByPoint(ln)):(Ln.expandByPoint(nr.min),Ln.expandByPoint(nr.max))}Ln.getCenter(n);let s=0;for(let r=0,l=t.count;r<l;r++)ln.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ln));if(e)for(let r=0,l=e.length;r<l;r++){let a=e[r],h=this.morphTargetsRelative;for(let u=0,m=a.count;u<m;u++)ln.fromBufferAttribute(a,u),h&&(vs.fromBufferAttribute(t,u),ln.add(vs)),s=Math.max(s,n.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,l=this.getAttribute("tangent");(l===void 0||l.count!==n.count)&&(l=new wn(new Float32Array(4*n.count),4),this.setAttribute("tangent",l));let a=[],h=[];for(let g=0;g<n.count;g++)a[g]=new ht,h[g]=new ht;let u=new ht,m=new ht,x=new ht,f=new Ee,_=new Ee,S=new Ee,P=new ht,T=new ht;function d(g,L,z){u.fromBufferAttribute(n,g),m.fromBufferAttribute(n,L),x.fromBufferAttribute(n,z),f.fromBufferAttribute(r,g),_.fromBufferAttribute(r,L),S.fromBufferAttribute(r,z),m.sub(u),x.sub(u),_.sub(f),S.sub(f);let J=1/(_.x*S.y-S.x*_.y);isFinite(J)&&(P.copy(m).multiplyScalar(S.y).addScaledVector(x,-_.y).multiplyScalar(J),T.copy(x).multiplyScalar(_.x).addScaledVector(m,-S.x).multiplyScalar(J),a[g].add(P),a[L].add(P),a[z].add(P),h[g].add(T),h[L].add(T),h[z].add(T))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let g=0,L=b.length;g<L;++g){let z=b[g],J=z.start,q=z.count;for(let nt=J,W=J+q;nt<W;nt+=3)d(t.getX(nt+0),t.getX(nt+1),t.getX(nt+2))}let C=new ht,y=new ht,c=new ht,w=new ht;function D(g){c.fromBufferAttribute(s,g),w.copy(c);let L=a[g];C.copy(L),C.sub(c.multiplyScalar(c.dot(L))).normalize(),y.crossVectors(w,L);let J=y.dot(h[g])<0?-1:1;l.setXYZW(g,C.x,C.y,C.z,J)}for(let g=0,L=b.length;g<L;++g){let z=b[g],J=z.start,q=z.count;for(let nt=J,W=J+q;nt<W;nt+=3)D(t.getX(nt+0)),D(t.getX(nt+1)),D(t.getX(nt+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new wn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,_=n.count;f<_;f++)n.setXYZ(f,0,0,0);let s=new ht,r=new ht,l=new ht,a=new ht,h=new ht,u=new ht,m=new ht,x=new ht;if(t)for(let f=0,_=t.count;f<_;f+=3){let S=t.getX(f+0),P=t.getX(f+1),T=t.getX(f+2);s.fromBufferAttribute(e,S),r.fromBufferAttribute(e,P),l.fromBufferAttribute(e,T),m.subVectors(l,r),x.subVectors(s,r),m.cross(x),a.fromBufferAttribute(n,S),h.fromBufferAttribute(n,P),u.fromBufferAttribute(n,T),a.add(m),h.add(m),u.add(m),n.setXYZ(S,a.x,a.y,a.z),n.setXYZ(P,h.x,h.y,h.z),n.setXYZ(T,u.x,u.y,u.z)}else for(let f=0,_=e.count;f<_;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),l.fromBufferAttribute(e,f+2),m.subVectors(l,r),x.subVectors(s,r),m.cross(x),n.setXYZ(f+0,m.x,m.y,m.z),n.setXYZ(f+1,m.x,m.y,m.z),n.setXYZ(f+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ln.fromBufferAttribute(t,e),ln.normalize(),t.setXYZ(e,ln.x,ln.y,ln.z)}toNonIndexed(){function t(a,h){let u=a.array,m=a.itemSize,x=a.normalized,f=new u.constructor(h.length*m),_=0,S=0;for(let P=0,T=h.length;P<T;P++){a.isInterleavedBufferAttribute?_=h[P]*a.data.stride+a.offset:_=h[P]*m;for(let d=0;d<m;d++)f[S++]=u[_++]}return new wn(f,m,x)}if(this.index===null)return he("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let h=s[a],u=t(h,n);e.setAttribute(a,u)}let r=this.morphAttributes;for(let a in r){let h=[],u=r[a];for(let m=0,x=u.length;m<x;m++){let f=u[m],_=t(f,n);h.push(_)}e.morphAttributes[a]=h}e.morphTargetsRelative=this.morphTargetsRelative;let l=this.groups;for(let a=0,h=l.length;a<h;a++){let u=l[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let h=this.parameters;for(let u in h)h[u]!==void 0&&(t[u]=h[u]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let h in n){let u=n[h];t.data.attributes[h]=u.toJSON(t.data)}let s={},r=!1;for(let h in this.morphAttributes){let u=this.morphAttributes[h],m=[];for(let x=0,f=u.length;x<f;x++){let _=u[x];m.push(_.toJSON(t.data))}m.length>0&&(s[h]=m,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let l=this.groups;l.length>0&&(t.data.groups=JSON.parse(JSON.stringify(l)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let u in s){let m=s[u];this.setAttribute(u,m.clone(e))}let r=t.morphAttributes;for(let u in r){let m=[],x=r[u];for(let f=0,_=x.length;f<_;f++)m.push(x[f].clone(e));this.morphAttributes[u]=m}this.morphTargetsRelative=t.morphTargetsRelative;let l=t.groups;for(let u=0,m=l.length;u<m;u++){let x=l[u];this.addGroup(x.start,x.count,x.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},pr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=tc,this.updateRanges=[],this.version=0,this.uuid=Ni()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},yn=new ht,mr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyMatrix4(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyNormalMatrix(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.transformDirection(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ii(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ii(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ii(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ii(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ii(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),s=Ge(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),s=Ge(s,this.array),r=Ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){cr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new wn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){cr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},vl=new ht,nd=new ht,id=new pe,Dn=class{constructor(t=new ht(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=vl.subVectors(n,e).cross(nd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(vl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let l=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(l<0||l>1)?null:e.copy(t.start).addScaledVector(s,l)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||id.getNormalMatrix(t),s=this.coplanarPoint(vl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},sd=0,Fi=class extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=zs,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ol,this.blendDst=Bl,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ya,this.stencilZFail=ya,this.stencilZPass=ya,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){he(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){he(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let l=[];for(let a in r){let h=r[a];delete h.metadata,l.push(h)}return l}if(e){let r=s(t.textures),l=s(t.images);r.length>0&&(n.textures=r),l.length>0&&(n.images=l)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ye().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Dn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ee().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ee().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Mi=new ht,Ml=new ht,ra=new ht,aa=new ht,gr=class{constructor(t=new ht,e=new ht(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Mi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mi.copy(this.origin).addScaledVector(this.direction,e),Mi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ml.copy(t).add(e).multiplyScalar(.5),ra.copy(e).sub(t).normalize(),aa.copy(this.origin).sub(Ml);let r=t.distanceTo(e)*.5,l=-this.direction.dot(ra),a=aa.dot(this.direction),h=-aa.dot(ra),u=aa.lengthSq(),m=Math.abs(1-l*l),x,f,_,S;if(m>0)if(x=l*h-a,f=l*a-h,S=r*m,x>=0)if(f>=-S)if(f<=S){let P=1/m;x*=P,f*=P,_=x*(x+l*f+2*a)+f*(l*x+f+2*h)+u}else f=r,x=Math.max(0,-(l*f+a)),_=-x*x+f*(f+2*h)+u;else f=-r,x=Math.max(0,-(l*f+a)),_=-x*x+f*(f+2*h)+u;else f<=-S?(x=Math.max(0,-(-l*r+a)),f=x>0?-r:Math.min(Math.max(-r,-h),r),_=-x*x+f*(f+2*h)+u):f<=S?(x=0,f=Math.min(Math.max(-r,-h),r),_=f*(f+2*h)+u):(x=Math.max(0,-(l*r+a)),f=x>0?r:Math.min(Math.max(-r,-h),r),_=-x*x+f*(f+2*h)+u);else f=l>0?-r:r,x=Math.max(0,-(l*f+a)),_=-x*x+f*(f+2*h)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,x),s&&s.copy(Ml).addScaledVector(ra,f),_}intersectSphere(t,e){if(t.radius<0)return null;Mi.subVectors(t.center,this.origin);let n=Mi.dot(this.direction),s=Mi.dot(Mi)-n*n,r=t.radius*t.radius;if(s>r)return null;let l=Math.sqrt(r-s),a=n-l,h=n+l;return h<0?null:a<0?this.at(h,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,l,a,h,u=1/this.direction.x,m=1/this.direction.y,x=1/this.direction.z,f=this.origin;return u>=0?(n=(t.min.x-f.x)*u,s=(t.max.x-f.x)*u):(n=(t.max.x-f.x)*u,s=(t.min.x-f.x)*u),m>=0?(r=(t.min.y-f.y)*m,l=(t.max.y-f.y)*m):(r=(t.max.y-f.y)*m,l=(t.min.y-f.y)*m),n>l||r>s||((r>n||isNaN(n))&&(n=r),(l<s||isNaN(s))&&(s=l),x>=0?(a=(t.min.z-f.z)*x,h=(t.max.z-f.z)*x):(a=(t.max.z-f.z)*x,h=(t.min.z-f.z)*x),n>h||a>s)||((a>n||n!==n)&&(n=a),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Mi)!==null}intersectTriangle(t,e,n,s,r){let l=this.origin,a=this.direction,h=a.x,u=a.y,m=a.z,x=t.x-l.x,f=t.y-l.y,_=t.z-l.z,S=e.x-l.x,P=e.y-l.y,T=e.z-l.z,d=n.x-l.x,b=n.y-l.y,C=n.z-l.z,y=Math.abs(h),c=Math.abs(u),w=Math.abs(m),D,g,L,z,J,q,nt,W,Q,dt,ut,yt;if(y>=c&&y>=w?(L=h,q=x,Q=S,yt=d,h>=0?(D=u,g=m,z=f,J=_,nt=P,W=T,dt=b,ut=C):(D=m,g=u,z=_,J=f,nt=T,W=P,dt=C,ut=b)):c>=w?(L=u,q=f,Q=P,yt=b,u>=0?(D=m,g=h,z=_,J=x,nt=T,W=S,dt=C,ut=d):(D=h,g=m,z=x,J=_,nt=S,W=T,dt=d,ut=C)):(L=m,q=_,Q=T,yt=C,m>=0?(D=h,g=u,z=x,J=f,nt=S,W=P,dt=d,ut=b):(D=u,g=h,z=f,J=x,nt=P,W=S,dt=b,ut=d)),L===0)return null;let mt=D/L,ft=g/L,it=1/L,N=z-mt*q,Zt=J-ft*q,Me=nt-mt*Q,zt=W-ft*Q,et=dt-mt*yt,xt=ut-ft*yt,Mt=et*zt-xt*Me,Ft=N*xt-Zt*et,ee=Me*Zt-zt*N;if(s){if(Mt<0||Ft<0||ee<0)return null}else if((Mt<0||Ft<0||ee<0)&&(Mt>0||Ft>0||ee>0))return null;let Ot=Mt+Ft+ee;if(Ot===0)return null;let se=it*(Mt*q+Ft*Q+ee*yt);return(Ot>0?se<0:se>0)?null:this.at(se/Ot,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xr=class extends Fi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Qc=new De,$i=new gr,oa=new Ui,th=new ht,la=new ht,ca=new ht,ha=new ht,bl=new ht,ua=new ht,eh=new ht,da=new ht,gn=class extends mn{constructor(t=new Nn,e=new xr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,l=s.length;r<l;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,l=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ua.set(0,0,0);for(let h=0,u=r.length;h<u;h++){let m=a[h],x=r[h];m!==0&&(bl.fromBufferAttribute(x,t),l?ua.addScaledVector(bl,m):ua.addScaledVector(bl.sub(e),m))}e.add(ua)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(r),$i.copy(t.ray).recast(t.near),!(oa.containsPoint($i.origin)===!1&&($i.intersectSphere(oa,th)===null||$i.origin.distanceToSquared(th)>(t.far-t.near)**2))&&(Qc.copy(r).invert(),$i.copy(t.ray).applyMatrix4(Qc),!(n.boundingBox!==null&&$i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,$i)))}_computeIntersections(t,e,n){let s,r=this.geometry,l=this.material,a=r.index,h=r.attributes.position,u=r.attributes.uv,m=r.attributes.uv1,x=r.attributes.normal,f=r.groups,_=r.drawRange;if(a!==null)if(Array.isArray(l))for(let S=0,P=f.length;S<P;S++){let T=f[S],d=l[T.materialIndex],b=Math.max(T.start,_.start),C=Math.min(a.count,Math.min(T.start+T.count,_.start+_.count));for(let y=b,c=C;y<c;y+=3){let w=a.getX(y),D=a.getX(y+1),g=a.getX(y+2);s=fa(this,d,t,n,u,m,x,w,D,g),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=T.materialIndex,e.push(s))}}else{let S=Math.max(0,_.start),P=Math.min(a.count,_.start+_.count);for(let T=S,d=P;T<d;T+=3){let b=a.getX(T),C=a.getX(T+1),y=a.getX(T+2);s=fa(this,l,t,n,u,m,x,b,C,y),s&&(s.faceIndex=Math.floor(T/3),e.push(s))}}else if(h!==void 0)if(Array.isArray(l))for(let S=0,P=f.length;S<P;S++){let T=f[S],d=l[T.materialIndex],b=Math.max(T.start,_.start),C=Math.min(h.count,Math.min(T.start+T.count,_.start+_.count));for(let y=b,c=C;y<c;y+=3){let w=y,D=y+1,g=y+2;s=fa(this,d,t,n,u,m,x,w,D,g),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=T.materialIndex,e.push(s))}}else{let S=Math.max(0,_.start),P=Math.min(h.count,_.start+_.count);for(let T=S,d=P;T<d;T+=3){let b=T,C=T+1,y=T+2;s=fa(this,l,t,n,u,m,x,b,C,y),s&&(s.faceIndex=Math.floor(T/3),e.push(s))}}}};function rd(i,t,e,n,s,r,l,a){let h;if(t.side===vn?h=n.intersectTriangle(l,r,s,!0,a):h=n.intersectTriangle(s,r,l,t.side===Vi,a),h===null)return null;da.copy(a),da.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(da);return u<e.near||u>e.far?null:{distance:u,point:da.clone(),object:i}}function fa(i,t,e,n,s,r,l,a,h,u){i.getVertexPosition(a,la),i.getVertexPosition(h,ca),i.getVertexPosition(u,ha);let m=rd(i,t,e,n,la,ca,ha,eh);if(m){let x=new ht;Di.getBarycoord(eh,la,ca,ha,x),s&&(m.uv=Di.getInterpolatedAttribute(s,a,h,u,x,new Ee)),r&&(m.uv1=Di.getInterpolatedAttribute(r,a,h,u,x,new Ee)),l&&(m.normal=Di.getInterpolatedAttribute(l,a,h,u,x,new ht),m.normal.dot(n.direction)>0&&m.normal.multiplyScalar(-1));let f={a,b:h,c:u,normal:new ht,materialIndex:0};Di.getNormal(la,ca,ha,f.normal),m.face=f,m.barycoord=x}return m}var _r=class extends En{constructor(t=null,e=1,n=1,s,r,l,a,h,u=cn,m=cn,x,f){super(null,l,a,h,u,m,s,r,x,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var es=class extends wn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ms=new De,nh=new De,pa=[],ih=new li,ad=new De,ir=new gn,sr=new Ui,yr=class extends gn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new es(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ad)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new li),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ms),ih.copy(t.boundingBox).applyMatrix4(Ms),this.boundingBox.union(ih)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ui),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ms),sr.copy(t.boundingSphere).applyMatrix4(Ms),this.boundingSphere.union(sr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,l=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[l+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ir.geometry=this.geometry,ir.material=this.material,ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sr.copy(this.boundingSphere),sr.applyMatrix4(n),t.ray.intersectsSphere(sr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ms),nh.multiplyMatrices(n,Ms),ir.matrixWorld=nh,ir.raycast(t,pa);for(let l=0,a=pa.length;l<a;l++){let h=pa[l];h.instanceId=r,h.object=this,e.push(h)}pa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new es(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new _r(new Float32Array(s*this.count),s,this.count,eo,Hn));let r=this.morphTexture.source.data.data,l=0;for(let u=0;u<n.length;u++)l+=n[u];let a=this.geometry.morphTargetsRelative?1:1-l,h=s*t;return r[h]=a,r.set(n,h+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ki=new Ui,od=new Ee(.5,.5),ma=new ht,Ds=class{constructor(t=new Dn,e=new Dn,n=new Dn,s=new Dn,r=new Dn,l=new Dn){this.planes=[t,e,n,s,r,l]}set(t,e,n,s,r,l){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(l),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Kn,n=!1){let s=this.planes,r=t.elements,l=r[0],a=r[1],h=r[2],u=r[3],m=r[4],x=r[5],f=r[6],_=r[7],S=r[8],P=r[9],T=r[10],d=r[11],b=r[12],C=r[13],y=r[14],c=r[15];if(s[0].setComponents(u-l,_-m,d-S,c-b).normalize(),s[1].setComponents(u+l,_+m,d+S,c+b).normalize(),s[2].setComponents(u+a,_+x,d+P,c+C).normalize(),s[3].setComponents(u-a,_-x,d-P,c-C).normalize(),n)s[4].setComponents(h,f,T,y).normalize(),s[5].setComponents(u-h,_-f,d-T,c-y).normalize();else if(s[4].setComponents(u-h,_-f,d-T,c-y).normalize(),e===Kn)s[5].setComponents(u+h,_+f,d+T,c+y).normalize();else if(e===Cs)s[5].setComponents(h,f,T,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(t){Ki.center.set(0,0,0);let e=od.distanceTo(t.center);return Ki.radius=.7071067811865476+e,Ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ma.x=s.normal.x>0?t.max.x:t.min.x,ma.y=s.normal.y>0?t.max.y:t.min.y,ma.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ma)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var vr=class extends En{constructor(t=[],e=Gi,n,s,r,l,a,h,u,m){super(t,e,n,s,r,l,a,h,u,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Oi=class extends En{constructor(t,e,n=Qn,s,r,l,a=cn,h=cn,u,m=ri,x=1){if(m!==ri&&m!==Hi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:x};super(f,s,r,l,a,h,m,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Is(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Da=class extends Oi{constructor(t,e=Qn,n=Gi,s,r,l=cn,a=cn,h,u=ri){let m={width:t,height:t,depth:1},x=[m,m,m,m,m,m];super(t,t,e,n,s,r,l,a,h,u),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Mr=class extends En{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ns=class i extends Nn{constructor(t=1,e=1,n=1,s=1,r=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:l};let a=this;s=Math.floor(s),r=Math.floor(r),l=Math.floor(l);let h=[],u=[],m=[],x=[],f=0,_=0;S("z","y","x",-1,-1,n,e,t,l,r,0),S("z","y","x",1,-1,n,e,-t,l,r,1),S("x","z","y",1,1,t,n,e,s,l,2),S("x","z","y",1,-1,t,n,-e,s,l,3),S("x","y","z",1,-1,t,e,n,s,r,4),S("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(h),this.setAttribute("position",new Tn(u,3)),this.setAttribute("normal",new Tn(m,3)),this.setAttribute("uv",new Tn(x,2));function S(P,T,d,b,C,y,c,w,D,g,L){let z=y/D,J=c/g,q=y/2,nt=c/2,W=w/2,Q=D+1,dt=g+1,ut=0,yt=0,mt=new ht;for(let ft=0;ft<dt;ft++){let it=ft*J-nt;for(let N=0;N<Q;N++){let Zt=N*z-q;mt[P]=Zt*b,mt[T]=it*C,mt[d]=W,u.push(mt.x,mt.y,mt.z),mt[P]=0,mt[T]=0,mt[d]=w>0?1:-1,m.push(mt.x,mt.y,mt.z),x.push(N/D),x.push(1-ft/g),ut+=1}}for(let ft=0;ft<g;ft++)for(let it=0;it<D;it++){let N=f+it+Q*ft,Zt=f+it+Q*(ft+1),Me=f+(it+1)+Q*(ft+1),zt=f+(it+1)+Q*ft;h.push(N,Zt,zt),h.push(Zt,Me,zt),yt+=6}a.addGroup(_,yt,L),_+=yt,f+=ut}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var br=class i extends Nn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,l=e/2,a=Math.floor(n),h=Math.floor(s),u=a+1,m=h+1,x=t/a,f=e/h,_=[],S=[],P=[],T=[];for(let d=0;d<m;d++){let b=d*f-l;for(let C=0;C<u;C++){let y=C*x-r;S.push(y,-b,0),P.push(0,0,1),T.push(C/a),T.push(1-d/h)}}for(let d=0;d<h;d++)for(let b=0;b<a;b++){let C=b+u*d,y=b+u*(d+1),c=b+1+u*(d+1),w=b+1+u*d;_.push(C,y,w),_.push(y,c,w)}this.setIndex(_),this.setAttribute("position",new Tn(S,3)),this.setAttribute("normal",new Tn(P,3)),this.setAttribute("uv",new Tn(T,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};function rs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(sh(s))s.isRenderTargetTexture?(he("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(sh(s[0])){let r=[];for(let l=0,a=s.length;l<a;l++)r[l]=s[l].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function xn(i){let t={};for(let e=0;e<i.length;e++){let n=rs(i[e]);for(let s in n)t[s]=n[s]}return t}function sh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ld(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ec(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}var $h={clone:rs,merge:xn},cd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Un=class extends Fi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cd,this.fragmentShader=hd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rs(t.uniforms),this.uniformsGroups=ld(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let l=this.uniforms[s].value;l&&l.isTexture?e.uniforms[s]={type:"t",value:l.toJSON(t).uuid}:l&&l.isColor?e.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?e.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?e.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?e.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?e.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?e.uniforms[s]={type:"m4",value:l.toArray()}:e.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ye().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ee().fromArray(s.value);break;case"v3":this.uniforms[n].value=new ht().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ye().fromArray(s.value);break;case"m3":this.uniforms[n].value=new pe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new De().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Us=class extends Un{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Sr=class extends Fi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fo,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Fs=class extends Fi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Na=class extends Fi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function bs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Sl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Bi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let l;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}l=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let h=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===h)break;if(s=r,r=e[--n-1],t>=r)break t}l=n,n=0;break e}break n}for(;n<l;){let a=n+l>>>1;t<e[a]?l=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let l=0;l!==s;++l)e[l]=n[r+l];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ua=class extends Bi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:El,endingEnd:El}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,l=t+1,a=s[r],h=s[l];if(a===void 0)switch(this.getSettings_().endingStart){case Al:r=t,a=2*e-n;break;case Cl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(h===void 0)switch(this.getSettings_().endingEnd){case Al:l=t,h=2*n-e;break;case Cl:l=1,h=n+s[1]-s[0];break;default:l=t-1,h=e}let u=(n-e)*.5,m=this.valueSize;this._weightPrev=u/(e-a),this._weightNext=u/(h-n),this._offsetPrev=r*m,this._offsetNext=l*m}interpolate_(t,e,n,s){let r=this.resultBuffer,l=this.sampleValues,a=this.valueSize,h=t*a,u=h-a,m=this._offsetPrev,x=this._offsetNext,f=this._weightPrev,_=this._weightNext,S=(n-e)/(s-e),P=S*S,T=P*S,d=-f*T+2*f*P-f*S,b=(1+f)*T+(-1.5-2*f)*P+(-.5+f)*S+1,C=(-1-_)*T+(1.5+_)*P+.5*S,y=_*T-_*P;for(let c=0;c!==a;++c)r[c]=d*l[m+c]+b*l[u+c]+C*l[h+c]+y*l[x+c];return r}},Fa=class extends Bi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,l=this.sampleValues,a=this.valueSize,h=t*a,u=h-a,m=(n-e)/(s-e),x=1-m;for(let f=0;f!==a;++f)r[f]=l[u+f]*x+l[h+f]*m;return r}},Oa=class extends Bi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ba=class extends Bi{interpolate_(t,e,n,s){let r=this.resultBuffer,l=this.sampleValues,a=this.valueSize,h=t*a,u=h-a,m=this.inTangents,x=this.outTangents;if(!m||!x){let S=(n-e)/(s-e),P=1-S;for(let T=0;T!==a;++T)r[T]=l[u+T]*P+l[h+T]*S;return r}let f=a*2,_=t-1;for(let S=0;S!==a;++S){let P=l[u+S],T=l[h+S],d=_*f+S*2,b=x[d],C=x[d+1],y=t*f+S*2,c=m[y],w=m[y+1],D=dd(n,e,b,c,s);r[S]=Kh(D,P,C,w,T)}return r}};function Kh(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function ud(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function dd(i,t,e,n,s){let r=(i-t)/(s-t);for(let l=0;l<8;l++){let a=Kh(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let h=ud(r,t,e,n,s);if(Math.abs(h)<1e-10)break;r=Math.max(0,Math.min(1,r-a/h))}return r}var Fn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=bs(e,this.TimeBufferType),this.values=bs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:bs(t.times,Array),values:bs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Sl(t.settings)&&(n.settings={inTangents:bs(t.settings.inTangents,Array),outTangents:bs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Oa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Fa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ua(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ba(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case rr:e=this.InterpolantFactoryMethodDiscrete;break;case Ca:e=this.InterpolantFactoryMethodLinear;break;case _a:e=this.InterpolantFactoryMethodSmooth;break;case Tl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return he("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rr;case this.InterpolantFactoryMethodLinear:return Ca;case this.InterpolantFactoryMethodSmooth:return _a;case this.InterpolantFactoryMethodBezier:return Tl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Sl(this.settings)&&(rh(this.settings.inTangents,t),rh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,l=s-1;for(;r!==s&&n[r]<t;)++r;for(;l!==-1&&n[l]>e;)--l;if(++l,r!==0||l!==s){r>=l&&(l=Math.max(l,1),r=l-1);let a=this.getValueSize();this.times=n.slice(r,l),this.values=this.values.slice(r*a,l*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ce("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ce("KeyframeTrack: Track is empty.",this),t=!1);let l=null;for(let a=0;a!==r;a++){let h=n[a];if(typeof h=="number"&&isNaN(h)){ce("KeyframeTrack: Time is not a valid number.",this,a,h),t=!1;break}if(l!==null&&l>h){ce("KeyframeTrack: Out of order keys.",this,a,h,l),t=!1;break}l=h}if(s!==void 0&&Vu(s))for(let a=0,h=s.length;a!==h;++a){let u=s[a];if(isNaN(u)){ce("KeyframeTrack: Value is not a valid number.",this,a,u),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===_a,r=t.length-1,l=1;for(let a=1;a<r;++a){let h=!1,u=t[a],m=t[a+1];if(u!==m&&(a!==1||u!==t[0]))if(s)h=!0;else{let x=a*n,f=x-n,_=x+n;for(let S=0;S!==n;++S){let P=e[x+S];if(P!==e[f+S]||P!==e[_+S]){h=!0;break}}}if(h){if(a!==l){t[l]=t[a];let x=a*n,f=l*n;for(let _=0;_!==n;++_)e[f+_]=e[x+_]}++l}}if(r>0){t[l]=t[r];for(let a=r*n,h=l*n,u=0;u!==n;++u)e[h+u]=e[a+u];++l}return l!==t.length?(this.times=t.slice(0,l),this.values=e.slice(0,l*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Sl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function rh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Fn.prototype.ValueTypeName="";Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=Ca;var zi=class extends Fn{constructor(t,e,n){super(t,e,n)}};zi.prototype.ValueTypeName="bool";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=rr;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var za=class extends Fn{constructor(t,e,n,s){super(t,e,n,s)}};za.prototype.ValueTypeName="color";var ka=class extends Fn{constructor(t,e,n,s){super(t,e,n,s)}};ka.prototype.ValueTypeName="number";var Va=class extends Bi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,l=this.sampleValues,a=this.valueSize,h=(n-e)/(s-e),u=t*a;for(let m=u+a;u!==m;u+=4)oi.slerpFlat(r,0,l,u-a,l,u,h);return r}},wr=class extends Fn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Va(this.times,this.values,this.getValueSize(),t)}};wr.prototype.ValueTypeName="quaternion";wr.prototype.InterpolantFactoryMethodSmooth=void 0;var ki=class extends Fn{constructor(t,e,n){super(t,e,n)}};ki.prototype.ValueTypeName="string";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=rr;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Ga=class extends Fn{constructor(t,e,n,s){super(t,e,n,s)}};Ga.prototype.ValueTypeName="vector";var Ha=class{constructor(t,e,n){let s=this,r=!1,l=0,a=0,h,u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(m){a++,r===!1&&s.onStart!==void 0&&s.onStart(m,l,a),r=!0},this.itemEnd=function(m){l++,s.onProgress!==void 0&&s.onProgress(m,l,a),l===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return m=m.normalize("NFC"),h?h(m):m},this.setURLModifier=function(m){return h=m,this},this.addHandler=function(m,x){return u.push(m,x),this},this.removeHandler=function(m){let x=u.indexOf(m);return x!==-1&&u.splice(x,2),this},this.getHandler=function(m){for(let x=0,f=u.length;x<f;x+=2){let _=u[x],S=u[x+1];if(_.global&&(_.lastIndex=0),_.test(m))return S}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},jh=new Ha,Wa=class{constructor(t){this.manager=t!==void 0?t:jh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Wa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Tr=class extends mn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Er=class extends Tr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},wl=new De,ah=new ht,oh=new ht,Xa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ds,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;ah.setFromMatrixPosition(t.matrixWorld),e.position.copy(ah),oh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(oh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){wl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(wl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,l=s?s.z/r.x:1,a=s?s.w/r.y:1,h=s?s.x/r.x:0,u=s?s.y/r.y:0;t.coordinateSystem===Cs||t.reversedDepth?e.set(.5*l,0,0,.5*l+h,0,.5*a,0,.5*a+u,0,0,1,0,0,0,0,1):e.set(.5*l,0,0,.5*l+h,0,.5*a,0,.5*a+u,0,0,.5,.5,0,0,0,1),e.multiply(wl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ga=new ht,xa=new oi,ni=new ht,Ar=class extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=Kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ga,xa,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ga,xa,ni.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ga,xa,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ga,xa,ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Li=new ht,lh=new Ee,ch=new Ee,pn=class extends Ar{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ra*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(nl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ra*2*Math.atan(Math.tan(nl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Li.x,Li.y).multiplyScalar(-t/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-t/Li.z)}getViewSize(t,e){return this.getViewBounds(t,lh,ch),e.subVectors(ch,lh)}setViewOffset(t,e,n,s,r,l){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(nl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,l=this.view;if(this.view!==null&&this.view.enabled){let h=l.fullWidth,u=l.fullHeight;r+=l.offsetX*s/h,e-=l.offsetY*n/u,s*=l.width/h,n*=l.height/u}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Os=class extends Ar{constructor(t=-1,e=1,n=1,s=-1,r=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=l,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,l=n+t,a=s+e,h=s-e;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,l=r+u*this.view.width,a-=m*this.view.offsetY,h=a-m*this.view.height}this.projectionMatrix.makeOrthographic(r,l,a,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Rl=class extends Xa{constructor(){super(new Os(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Cr=class extends Tr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.shadow=new Rl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ss=-90,ws=1,qa=class extends mn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new pn(Ss,ws,t,e);s.layers=this.layers,this.add(s);let r=new pn(Ss,ws,t,e);r.layers=this.layers,this.add(r);let l=new pn(Ss,ws,t,e);l.layers=this.layers,this.add(l);let a=new pn(Ss,ws,t,e);a.layers=this.layers,this.add(a);let h=new pn(Ss,ws,t,e);h.layers=this.layers,this.add(h);let u=new pn(Ss,ws,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,l,a,h]=e;for(let u of e)this.remove(u);if(t===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===Cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,l,a,h,u,m]=this.children,x=t.getRenderTarget(),f=t.getActiveCubeFace(),_=t.getActiveMipmapLevel(),S=t.xr.enabled;t.xr.enabled=!1;let P=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let T=!1;t.isWebGLRenderer===!0?T=t.state.buffers.depth.getReversed():T=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),T&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),T&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,2,s),T&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),T&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(n,4,s),T&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),n.texture.generateMipmaps=P,t.setRenderTarget(n,5,s),T&&t.autoClear===!1&&t.clearDepth(),t.render(e,m),t.setRenderTarget(x,f,_),t.xr.enabled=S,n.texture.needsPMREMUpdate=!0}},Ya=class extends pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var nc="\\[\\]\\.:\\/",fd=new RegExp("["+nc+"]","g"),ic="[^"+nc+"]",pd="[^"+nc.replace("\\.","")+"]",md=/((?:WC+[\/:])*)/.source.replace("WC",ic),gd=/(WCOD+)?/.source.replace("WCOD",pd),xd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ic),_d=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ic),yd=new RegExp("^"+md+gd+xd+_d+"$"),vd=["material","materials","bones","map"],Il=class{constructor(t,e,n){let s=n||We.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},We=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(fd,"")}static parseTrackName(t){let e=yd.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);vd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let l=0;l<r.length;l++){let a=r[l];if(a.name===e||a.uuid===e)return a;let h=n(a.children);if(h)return h}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){he("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=e.objectIndex;switch(n){case"materials":if(!t.material){ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ce("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ce("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let m=0;m<t.length;m++)if(t[m].name===u){u=m;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ce("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ce("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(u!==void 0){if(t[u]===void 0){ce("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let l=t[s];if(l===void 0){let u=e.nodeName;ce("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}h=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=r}else l.fromArray!==void 0&&l.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(h=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};We.Composite=Il;We.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};We.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};We.prototype.GetterByBindingType=[We.prototype._getValue_direct,We.prototype._getValue_array,We.prototype._getValue_arrayElement,We.prototype._getValue_toArray];We.prototype.SetterByBindingTypeAndVersioning=[[We.prototype._setValue_direct,We.prototype._setValue_direct_setNeedsUpdate,We.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[We.prototype._setValue_array,We.prototype._setValue_array_setNeedsUpdate,We.prototype._setValue_array_setMatrixWorldNeedsUpdate],[We.prototype._setValue_arrayElement,We.prototype._setValue_arrayElement_setNeedsUpdate,We.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[We.prototype._setValue_fromArray,We.prototype._setValue_fromArray_setNeedsUpdate,We.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var mg=new Float32Array(1);var hh=new De,Rr=class{constructor(t,e,n=0,s=1/0){this.ray=new gr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ps,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ce("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return hh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hh),this}intersectObject(t,e=!0,n=[]){return Pl(t,this,n,e),n.sort(uh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Pl(t[s],this,n,e);return n.sort(uh),n}};function uh(i,t){return i.distance-t.distance}function Pl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let l=0,a=r.length;l<a;l++)Pl(r[l],t,e,!0)}}var cc=class cc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};cc.prototype.isMatrix2=!0;var Ll=cc;function sc(i,t,e,n){let s=Md(n);switch(e){case Kl:return i*t;case eo:return i*t/s.components*s.byteLength;case no:return i*t/s.components*s.byteLength;case Wi:return i*t*2/s.components*s.byteLength;case io:return i*t*2/s.components*s.byteLength;case jl:return i*t*3/s.components*s.byteLength;case Wn:return i*t*4/s.components*s.byteLength;case so:return i*t*4/s.components*s.byteLength;case Dr:case Nr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ur:case Fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ao:case lo:return Math.max(i,16)*Math.max(t,8)/4;case ro:case oo:return Math.max(i,8)*Math.max(t,8)/2;case co:case ho:case fo:case po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case uo:case Or:case mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case _o:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case yo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case vo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Mo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case bo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case So:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case wo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case To:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Eo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ao:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Co:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ro:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Io:case Po:case Lo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Do:case No:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Br:case Uo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Md(i){switch(i){case Cn:case Yl:return{byteLength:1,components:1};case ks:case Zl:case ti:return{byteLength:2,components:1};case Qa:case to:return{byteLength:2,components:4};case Qn:case ja:case Hn:return{byteLength:4,components:1};case Jl:case $l:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?he("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function vu(){let i=null,t=!1,e=null,n=null;function s(r,l){n=i.requestAnimationFrame(s),e(r,l)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Sd(i){let t=new WeakMap;function e(a,h){let u=a.array,m=a.usage,x=u.byteLength,f=i.createBuffer();i.bindBuffer(h,f),i.bufferData(h,u,m),a.onUploadCallback();let _;if(u instanceof Float32Array)_=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)_=i.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=i.SHORT;else if(u instanceof Uint32Array)_=i.UNSIGNED_INT;else if(u instanceof Int32Array)_=i.INT;else if(u instanceof Int8Array)_=i.BYTE;else if(u instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:x}}function n(a,h,u){let m=h.array,x=h.updateRanges;if(i.bindBuffer(u,a),x.length===0)i.bufferSubData(u,0,m);else{x.sort((_,S)=>_.start-S.start);let f=0;for(let _=1;_<x.length;_++){let S=x[f],P=x[_];P.start<=S.start+S.count+1?S.count=Math.max(S.count,P.start+P.count-S.start):(++f,x[f]=P)}x.length=f+1;for(let _=0,S=x.length;_<S;_++){let P=x[_];i.bufferSubData(u,P.start*m.BYTES_PER_ELEMENT,m,P.start,P.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let h=t.get(a);h&&(i.deleteBuffer(h.buffer),t.delete(a))}function l(a,h){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let m=t.get(a);(!m||m.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let u=t.get(a);if(u===void 0)t.set(a,e(a,h));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,h),u.version=a.version}}return{get:s,remove:r,update:l}}var wd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Td=`#ifdef USE_ALPHAHASH
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
#endif`,Ed=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ad=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Id=`#ifdef USE_AOMAP
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
#endif`,Pd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ld=`#ifdef USE_BATCHING
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
#endif`,Dd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ud=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Od=`#ifdef USE_IRIDESCENCE
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
#endif`,Bd=`#ifdef USE_BUMPMAP
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
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Wd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Xd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Yd=`#define PI 3.141592653589793
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
} // validated`,Zd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jd=`vec3 transformedNormal = objectNormal;
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
#endif`,$d=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tf="gl_FragColor = linearToOutputTexel( gl_FragColor );",ef=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nf=`#ifdef USE_ENVMAP
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
#endif`,sf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,rf=`#ifdef USE_ENVMAP
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
#endif`,af=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,of=`#ifdef USE_ENVMAP
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
#endif`,lf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,df=`#ifdef USE_GRADIENTMAP
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
}`,ff=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,xf=`#ifdef USE_ENVMAP
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
#endif`,_f=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bf=`PhysicalMaterial material;
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
#endif`,Sf=`uniform sampler2D dfgLUT;
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
}`,wf=`
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
#endif`,Tf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ef=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Af=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Cf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,If=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Df=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Uf=`#if defined( USE_POINTS_UV )
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
#endif`,Ff=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Of=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vf=`#ifdef USE_MORPHTARGETS
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
#endif`,Gf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Zf=`#ifdef USE_NORMALMAP
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
#endif`,Jf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$f=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ep=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,np=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ip=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ap=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,op=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hp=`float getShadowMask() {
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
}`,up=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dp=`#ifdef USE_SKINNING
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
#endif`,fp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pp=`#ifdef USE_SKINNING
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
#endif`,mp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_p=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yp=`#ifdef USE_TRANSMISSION
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
#endif`,vp=`#ifdef USE_TRANSMISSION
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
#endif`,Mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Tp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ep=`uniform sampler2D t2D;
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
}`,Ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ip=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pp=`#include <common>
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
}`,Lp=`#if DEPTH_PACKING == 3200
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
}`,Dp=`#define DISTANCE
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
}`,Np=`#define DISTANCE
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
}`,Up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Op=`uniform float scale;
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
}`,Bp=`uniform vec3 diffuse;
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
}`,zp=`#include <common>
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
}`,kp=`uniform vec3 diffuse;
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
}`,Vp=`#define LAMBERT
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
}`,Gp=`#define LAMBERT
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
}`,Hp=`#define MATCAP
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
}`,Wp=`#define MATCAP
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
}`,Xp=`#define NORMAL
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
}`,qp=`#define NORMAL
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
}`,Yp=`#define PHONG
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
}`,Zp=`#define PHONG
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
}`,Jp=`#define STANDARD
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
}`,$p=`#define STANDARD
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
}`,Kp=`#define TOON
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
}`,jp=`#define TOON
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
}`,Qp=`uniform float size;
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
}`,tm=`uniform vec3 diffuse;
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
}`,em=`#include <common>
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
}`,nm=`uniform vec3 color;
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
}`,im=`uniform float rotation;
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
}`,sm=`uniform vec3 diffuse;
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
}`,ve={alphahash_fragment:wd,alphahash_pars_fragment:Td,alphamap_fragment:Ed,alphamap_pars_fragment:Ad,alphatest_fragment:Cd,alphatest_pars_fragment:Rd,aomap_fragment:Id,aomap_pars_fragment:Pd,batching_pars_vertex:Ld,batching_vertex:Dd,begin_vertex:Nd,beginnormal_vertex:Ud,bsdfs:Fd,iridescence_fragment:Od,bumpmap_pars_fragment:Bd,clipping_planes_fragment:zd,clipping_planes_pars_fragment:kd,clipping_planes_pars_vertex:Vd,clipping_planes_vertex:Gd,color_fragment:Hd,color_pars_fragment:Wd,color_pars_vertex:Xd,color_vertex:qd,common:Yd,cube_uv_reflection_fragment:Zd,defaultnormal_vertex:Jd,displacementmap_pars_vertex:$d,displacementmap_vertex:Kd,emissivemap_fragment:jd,emissivemap_pars_fragment:Qd,colorspace_fragment:tf,colorspace_pars_fragment:ef,envmap_fragment:nf,envmap_common_pars_fragment:sf,envmap_pars_fragment:rf,envmap_pars_vertex:af,envmap_physical_pars_fragment:xf,envmap_vertex:of,fog_vertex:lf,fog_pars_vertex:cf,fog_fragment:hf,fog_pars_fragment:uf,gradientmap_pars_fragment:df,lightmap_pars_fragment:ff,lights_lambert_fragment:pf,lights_lambert_pars_fragment:mf,lights_pars_begin:gf,lights_toon_fragment:_f,lights_toon_pars_fragment:yf,lights_phong_fragment:vf,lights_phong_pars_fragment:Mf,lights_physical_fragment:bf,lights_physical_pars_fragment:Sf,lights_fragment_begin:wf,lights_fragment_maps:Tf,lights_fragment_end:Ef,lightprobes_pars_fragment:Af,logdepthbuf_fragment:Cf,logdepthbuf_pars_fragment:Rf,logdepthbuf_pars_vertex:If,logdepthbuf_vertex:Pf,map_fragment:Lf,map_pars_fragment:Df,map_particle_fragment:Nf,map_particle_pars_fragment:Uf,metalnessmap_fragment:Ff,metalnessmap_pars_fragment:Of,morphinstance_vertex:Bf,morphcolor_vertex:zf,morphnormal_vertex:kf,morphtarget_pars_vertex:Vf,morphtarget_vertex:Gf,normal_fragment_begin:Hf,normal_fragment_maps:Wf,normal_pars_fragment:Xf,normal_pars_vertex:qf,normal_vertex:Yf,normalmap_pars_fragment:Zf,clearcoat_normal_fragment_begin:Jf,clearcoat_normal_fragment_maps:$f,clearcoat_pars_fragment:Kf,iridescence_pars_fragment:jf,opaque_fragment:Qf,packing:tp,premultiplied_alpha_fragment:ep,project_vertex:np,dithering_fragment:ip,dithering_pars_fragment:sp,roughnessmap_fragment:rp,roughnessmap_pars_fragment:ap,shadowmap_pars_fragment:op,shadowmap_pars_vertex:lp,shadowmap_vertex:cp,shadowmask_pars_fragment:hp,skinbase_vertex:up,skinning_pars_vertex:dp,skinning_vertex:fp,skinnormal_vertex:pp,specularmap_fragment:mp,specularmap_pars_fragment:gp,tonemapping_fragment:xp,tonemapping_pars_fragment:_p,transmission_fragment:yp,transmission_pars_fragment:vp,uv_pars_fragment:Mp,uv_pars_vertex:bp,uv_vertex:Sp,worldpos_vertex:wp,background_vert:Tp,background_frag:Ep,backgroundCube_vert:Ap,backgroundCube_frag:Cp,cube_vert:Rp,cube_frag:Ip,depth_vert:Pp,depth_frag:Lp,distance_vert:Dp,distance_frag:Np,equirect_vert:Up,equirect_frag:Fp,linedashed_vert:Op,linedashed_frag:Bp,meshbasic_vert:zp,meshbasic_frag:kp,meshlambert_vert:Vp,meshlambert_frag:Gp,meshmatcap_vert:Hp,meshmatcap_frag:Wp,meshnormal_vert:Xp,meshnormal_frag:qp,meshphong_vert:Yp,meshphong_frag:Zp,meshphysical_vert:Jp,meshphysical_frag:$p,meshtoon_vert:Kp,meshtoon_frag:jp,points_vert:Qp,points_frag:tm,shadow_vert:em,shadow_frag:nm,sprite_vert:im,sprite_frag:sm},Wt={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ht},probesMax:{value:new ht},probesResolution:{value:new ht}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},di={basic:{uniforms:xn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:xn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new ye(0)},envMapIntensity:{value:1}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:xn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:xn([Wt.common,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.roughnessmap,Wt.metalnessmap,Wt.fog,Wt.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:xn([Wt.common,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.gradientmap,Wt.fog,Wt.lights,{emissive:{value:new ye(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:xn([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:xn([Wt.points,Wt.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:xn([Wt.common,Wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:xn([Wt.common,Wt.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:xn([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:xn([Wt.sprite,Wt.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distance:{uniforms:xn([Wt.common,Wt.displacementmap,{referencePosition:{value:new ht},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distance_vert,fragmentShader:ve.distance_frag},shadow:{uniforms:xn([Wt.lights,Wt.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};di.physical={uniforms:xn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};var ko={r:0,b:0,g:0},rm=new De,Mu=new pe;Mu.set(-1,0,0,0,1,0,0,0,1);function am(i,t,e,n,s,r){let l=new ye(0),a=s===!0?0:1,h,u,m=null,x=0,f=null;function _(b){let C=b.isScene===!0?b.background:null;if(C&&C.isTexture){let y=b.backgroundBlurriness>0;C=t.get(C,y)}return C}function S(b){let C=!1,y=_(b);y===null?T(l,a):y&&y.isColor&&(T(y,1),C=!0);let c=i.xr.getEnvironmentBlendMode();c==="additive"?e.buffers.color.setClear(0,0,0,1,r):c==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||C)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function P(b,C){let y=_(C);y&&(y.isCubeTexture||y.mapping===Pr)?(u===void 0&&(u=new gn(new Ns(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:rs(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(c,w,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(rm.makeRotationFromEuler(C.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Mu),u.material.toneMapped=Ae.getTransfer(y.colorSpace)!==Oe,(m!==y||x!==y.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,m=y,x=y.version,f=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(h===void 0&&(h=new gn(new br(2,2),new Un({name:"BackgroundMaterial",uniforms:rs(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=y,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.toneMapped=Ae.getTransfer(y.colorSpace)!==Oe,y.matrixAutoUpdate===!0&&y.updateMatrix(),h.material.uniforms.uvTransform.value.copy(y.matrix),(m!==y||x!==y.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,m=y,x=y.version,f=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function T(b,C){b.getRGB(ko,ec(i)),e.buffers.color.setClear(ko.r,ko.g,ko.b,C,r)}function d(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return l},setClearColor:function(b,C=1){l.set(b),a=C,T(l,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,T(l,a)},render:S,addToRenderList:P,dispose:d}}function om(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,l=!1;function a(J,q,nt,W,Q){let dt=!1,ut=x(J,W,nt,q);r!==ut&&(r=ut,u(r.object)),dt=_(J,W,nt,Q),dt&&S(J,W,nt,Q),Q!==null&&t.update(Q,i.ELEMENT_ARRAY_BUFFER),(dt||l)&&(l=!1,y(J,q,nt,W),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function h(){return i.createVertexArray()}function u(J){return i.bindVertexArray(J)}function m(J){return i.deleteVertexArray(J)}function x(J,q,nt,W){let Q=W.wireframe===!0,dt=n[q.id];dt===void 0&&(dt={},n[q.id]=dt);let ut=J.isInstancedMesh===!0?J.id:0,yt=dt[ut];yt===void 0&&(yt={},dt[ut]=yt);let mt=yt[nt.id];mt===void 0&&(mt={},yt[nt.id]=mt);let ft=mt[Q];return ft===void 0&&(ft=f(h()),mt[Q]=ft),ft}function f(J){let q=[],nt=[],W=[];for(let Q=0;Q<e;Q++)q[Q]=0,nt[Q]=0,W[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:nt,attributeDivisors:W,object:J,attributes:{},index:null}}function _(J,q,nt,W){let Q=r.attributes,dt=q.attributes,ut=0,yt=nt.getAttributes();for(let mt in yt)if(yt[mt].location>=0){let it=Q[mt],N=dt[mt];if(N===void 0&&(mt==="instanceMatrix"&&J.instanceMatrix&&(N=J.instanceMatrix),mt==="instanceColor"&&J.instanceColor&&(N=J.instanceColor)),it===void 0||it.attribute!==N||N&&it.data!==N.data)return!0;ut++}return r.attributesNum!==ut||r.index!==W}function S(J,q,nt,W){let Q={},dt=q.attributes,ut=0,yt=nt.getAttributes();for(let mt in yt)if(yt[mt].location>=0){let it=dt[mt];it===void 0&&(mt==="instanceMatrix"&&J.instanceMatrix&&(it=J.instanceMatrix),mt==="instanceColor"&&J.instanceColor&&(it=J.instanceColor));let N={};N.attribute=it,it&&it.data&&(N.data=it.data),Q[mt]=N,ut++}r.attributes=Q,r.attributesNum=ut,r.index=W}function P(){let J=r.newAttributes;for(let q=0,nt=J.length;q<nt;q++)J[q]=0}function T(J){d(J,0)}function d(J,q){let nt=r.newAttributes,W=r.enabledAttributes,Q=r.attributeDivisors;nt[J]=1,W[J]===0&&(i.enableVertexAttribArray(J),W[J]=1),Q[J]!==q&&(i.vertexAttribDivisor(J,q),Q[J]=q)}function b(){let J=r.newAttributes,q=r.enabledAttributes;for(let nt=0,W=q.length;nt<W;nt++)q[nt]!==J[nt]&&(i.disableVertexAttribArray(nt),q[nt]=0)}function C(J,q,nt,W,Q,dt,ut){ut===!0?i.vertexAttribIPointer(J,q,nt,Q,dt):i.vertexAttribPointer(J,q,nt,W,Q,dt)}function y(J,q,nt,W){P();let Q=W.attributes,dt=nt.getAttributes(),ut=q.defaultAttributeValues;for(let yt in dt){let mt=dt[yt];if(mt.location>=0){let ft=Q[yt];if(ft===void 0&&(yt==="instanceMatrix"&&J.instanceMatrix&&(ft=J.instanceMatrix),yt==="instanceColor"&&J.instanceColor&&(ft=J.instanceColor)),ft!==void 0){let it=ft.normalized,N=ft.itemSize,Zt=t.get(ft);if(Zt===void 0)continue;let Me=Zt.buffer,zt=Zt.type,et=Zt.bytesPerElement,xt=zt===i.INT||zt===i.UNSIGNED_INT||ft.gpuType===ja;if(ft.isInterleavedBufferAttribute){let Mt=ft.data,Ft=Mt.stride,ee=ft.offset;if(Mt.isInstancedInterleavedBuffer){for(let Ot=0;Ot<mt.locationSize;Ot++)d(mt.location+Ot,Mt.meshPerAttribute);J.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Ot=0;Ot<mt.locationSize;Ot++)T(mt.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let Ot=0;Ot<mt.locationSize;Ot++)C(mt.location+Ot,N/mt.locationSize,zt,it,Ft*et,(ee+N/mt.locationSize*Ot)*et,xt)}else{if(ft.isInstancedBufferAttribute){for(let Mt=0;Mt<mt.locationSize;Mt++)d(mt.location+Mt,ft.meshPerAttribute);J.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Mt=0;Mt<mt.locationSize;Mt++)T(mt.location+Mt);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let Mt=0;Mt<mt.locationSize;Mt++)C(mt.location+Mt,N/mt.locationSize,zt,it,N*et,N/mt.locationSize*Mt*et,xt)}}else if(ut!==void 0){let it=ut[yt];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(mt.location,it);break;case 3:i.vertexAttrib3fv(mt.location,it);break;case 4:i.vertexAttrib4fv(mt.location,it);break;default:i.vertexAttrib1fv(mt.location,it)}}}}b()}function c(){L();for(let J in n){let q=n[J];for(let nt in q){let W=q[nt];for(let Q in W){let dt=W[Q];for(let ut in dt)m(dt[ut].object),delete dt[ut];delete W[Q]}}delete n[J]}}function w(J){if(n[J.id]===void 0)return;let q=n[J.id];for(let nt in q){let W=q[nt];for(let Q in W){let dt=W[Q];for(let ut in dt)m(dt[ut].object),delete dt[ut];delete W[Q]}}delete n[J.id]}function D(J){for(let q in n){let nt=n[q];for(let W in nt){let Q=nt[W];if(Q[J.id]===void 0)continue;let dt=Q[J.id];for(let ut in dt)m(dt[ut].object),delete dt[ut];delete Q[J.id]}}}function g(J){for(let q in n){let nt=n[q],W=J.isInstancedMesh===!0?J.id:0,Q=nt[W];if(Q!==void 0){for(let dt in Q){let ut=Q[dt];for(let yt in ut)m(ut[yt].object),delete ut[yt];delete Q[dt]}delete nt[W],Object.keys(nt).length===0&&delete n[q]}}}function L(){z(),l=!0,r!==s&&(r=s,u(r.object))}function z(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:z,dispose:c,releaseStatesOfGeometry:w,releaseStatesOfObject:g,releaseStatesOfProgram:D,initAttributes:P,enableAttribute:T,disableUnusedAttributes:b}}function lm(i,t,e){let n;function s(h){n=h}function r(h,u){i.drawArrays(n,h,u),e.update(u,n,1)}function l(h,u,m){m!==0&&(i.drawArraysInstanced(n,h,u,m),e.update(u,n,m))}function a(h,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,u,0,m);let f=0;for(let _=0;_<m;_++)f+=u[_];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=l,this.renderMultiDraw=a}function cm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(D){return!(D!==Wn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let g=D===ti&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==Cn&&D!==Hn&&!g&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function h(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp",m=h(u);m!==u&&(he("WebGLRenderer:",u,"not supported, using",m,"instead."),u=m);let x=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&he("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let _=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=i.getParameter(i.MAX_TEXTURE_SIZE),T=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),c=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:l,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:x,reversedDepthBuffer:f,maxTextures:_,maxVertexTextures:S,maxTextureSize:P,maxCubemapSize:T,maxAttributes:d,maxVertexUniforms:b,maxVaryings:C,maxFragmentUniforms:y,maxSamples:c,samples:w}}function hm(i){let t=this,e=null,n=0,s=!1,r=!1,l=new Dn,a=new pe,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(x,f){let _=x.length!==0||f||n!==0||s;return s=f,n=x.length,_},this.beginShadows=function(){r=!0,m(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(x,f){e=m(x,f,0)},this.setState=function(x,f,_){let S=x.clippingPlanes,P=x.clipIntersection,T=x.clipShadows,d=i.get(x);if(!s||S===null||S.length===0||r&&!T)r?m(null):u();else{let b=r?0:n,C=b*4,y=d.clippingState||null;h.value=y,y=m(S,f,C,_);for(let c=0;c!==C;++c)y[c]=e[c];d.clippingState=y,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=b}};function u(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function m(x,f,_,S){let P=x!==null?x.length:0,T=null;if(P!==0){if(T=h.value,S!==!0||T===null){let d=_+P*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(T===null||T.length<d)&&(T=new Float32Array(d));for(let C=0,y=_;C!==P;++C,y+=4)l.copy(x[C]).applyMatrix4(b,a),l.normal.toArray(T,y),T[y+3]=l.constant}h.value=T,h.needsUpdate=!0}return t.numPlanes=P,t.numIntersection=0,T}}var Hs=4,um=6,dm=20,fm=256,kr=new Os,Qh=new ye,hc=null,uc=0,dc=0,fc=!1,pm=new ht,as=new ht,Go=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:l=256,position:a=pm}=r;hc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),dc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);let h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,n,s,h,a),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(hc,uc,dc),this._renderer.xr.enabled=fc,t.scissorTest=!1,Gs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gi||t.mapping===ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),dc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:ti,format:Wn,colorSpace:ar,depthBuffer:!1},s=tu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tu(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=mm(r)),this._blurMaterial=xm(r,t,e),this._ggxMaterial=gm(r,t,e)}return s}_compileMaterial(t){let e=new gn(new Nn,t);this._renderer.compile(e,kr)}_sceneToCubeUV(t,e,n,s,r){let h=new pn(90,1,e,n),u=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],x=this._renderer,f=x.autoClear,_=x.toneMapping;x.getClearColor(Qh),x.toneMapping=jn,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(s),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new gn(new Ns,new xr({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1})));let P=this._backgroundBox,T=P.material,d=!1,b=t.background;b?b.isColor&&(T.color.copy(b),t.background=null,d=!0):(T.color.copy(Qh),d=!0);for(let C=0;C<6;C++){let y=C%3;y===0?(h.up.set(0,u[C],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+m[C],r.y,r.z)):y===1?(h.up.set(0,0,u[C]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+m[C],r.z)):(h.up.set(0,u[C],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+m[C]));let c=this._cubeSize;Gs(s,y*c,C>2?c:0,c,c),x.setRenderTarget(s),d&&x.render(P,h),x.render(t,h)}x.toneMapping=_,x.autoClear=f,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Gi||t.mapping===ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eu());let r=s?this._cubemapMaterial:this._equirectMaterial,l=this._lodMeshes[0];l.material=r;let a=r.uniforms;a.envMap.value=t;let h=this._cubeSize;Gs(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(l,kr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,l=this._ggxMaterial,a=this._lodMeshes[n];a.material=l;let h=l.uniforms,u=n/(this._lodMeshes.length-1),m=e/(this._lodMeshes.length-1),x=Math.sqrt(u*u-m*m),f=u*1.25,_=x*f,{_lodMax:S}=this,P=this._sizeLods[n],T=3*P*(n>S-Hs?n-S+Hs:0),d=4*(this._cubeSize-P);h.envMap.value=t.texture,h.roughness.value=_,h.mipInt.value=S-e,Gs(r,T,d,3*P,2*P),s.setRenderTarget(r),s.render(a,kr),h.envMap.value=r.texture,h.roughness.value=0,h.mipInt.value=S-n,Gs(t,T,d,3*P,2*P),s.setRenderTarget(t),s.render(a,kr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,l=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,l),this._blurPass(r,t,n,n,l)}_blurPass(t,e,n,s,r){let l=this._renderer,a=this._blurMaterial,h=this._lodMeshes[s];h.material=a;let u=a.uniforms;u.envMap.value=t.texture,u.sigma.value=r,u.mipInt.value=this._lodMax-n;let m=this._sizeLods[s],x=3*m*(s>this._lodMax-Hs?s-this._lodMax+Hs:0),f=4*(this._cubeSize-m);Gs(e,x,f,3*m,2*m),l.setRenderTarget(e),l.render(h,kr)}};function mm(i){let t=[],e=[],n=i,s=i-Hs+1+um;for(let r=0;r<s;r++){let l=Math.pow(2,n);t.push(l);let a=1/(l-2),h=-a,u=1+a,m=[h,h,u,h,u,u,h,h,u,u,h,u],x=6,f=6,_=3,S=new Float32Array(_*f*x),P=new Float32Array(_*f*x);for(let d=0;d<x;d++){let b=d%3*2/3-1,C=d>2?0:-1,y=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];S.set(y,_*f*d);for(let c=0;c<f;c++){let w=m[c*2]*2-1,D=m[c*2+1]*2-1;d===0?as.set(1,D,w):d===1?as.set(-w,1,-D):d===2?as.set(-w,D,1):d===3?as.set(-1,D,-w):d===4?as.set(-w,-1,D):as.set(w,D,-1),as.toArray(P,(d*f+c)*_)}}let T=new Nn;T.setAttribute("position",new wn(S,_)),T.setAttribute("outputDirection",new wn(P,_)),e.push(new gn(T,null)),n>Hs&&n--}return{lodMeshes:e,sizeLods:t}}function tu(i,t,e){let n=new An(i,t,e);return n.texture.mapping=Pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function gm(i,t,e){return new Un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:fm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xo(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function xm(i,t,e){return new Un({name:"SphericalGaussianBlur",defines:{SAMPLES:dm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Xo(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function eu(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xo(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function nu(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Xo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ho=class extends An{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new vr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ns(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vn,blending:ci});r.uniforms.tEquirect.value=e;let l=new gn(s,r),a=e.minFilter;return e.minFilter===hi&&(e.minFilter=en),new qa(1,10,this).update(t,l),e.minFilter=a,l.geometry.dispose(),l.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let l=0;l<6;l++)t.setRenderTarget(this,l),t.clear(e,n,s);t.setRenderTarget(r)}};function _m(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,_=!1){return f==null?null:_?l(f):r(f)}function r(f){if(f&&f.isTexture){let _=f.mapping;if(_===Ja||_===$a)if(t.has(f)){let S=t.get(f).texture;return a(S,f.mapping)}else{let S=f.image;if(S&&S.height>0){let P=new Ho(S.height);return P.fromEquirectangularTexture(i,f),t.set(f,P),f.addEventListener("dispose",u),a(P.texture,f.mapping)}else return null}}return f}function l(f){if(f&&f.isTexture){let _=f.mapping,S=_===Ja||_===$a,P=_===Gi||_===ss;if(S||P){let T=e.get(f),d=T!==void 0?T.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return n===null&&(n=new Go(i)),T=S?n.fromEquirectangular(f,T):n.fromCubemap(f,T),T.texture.pmremVersion=f.pmremVersion,e.set(f,T),T.texture;if(T!==void 0)return T.texture;{let b=f.image;return S&&b&&b.height>0||P&&b&&h(b)?(n===null&&(n=new Go(i)),T=S?n.fromEquirectangular(f):n.fromCubemap(f),T.texture.pmremVersion=f.pmremVersion,e.set(f,T),f.addEventListener("dispose",m),T.texture):null}}}return f}function a(f,_){return _===Ja?f.mapping=Gi:_===$a&&(f.mapping=ss),f}function h(f){let _=0,S=6;for(let P=0;P<S;P++)f[P]!==void 0&&_++;return _===S}function u(f){let _=f.target;_.removeEventListener("dispose",u);let S=t.get(_);S!==void 0&&(t.delete(_),S.dispose())}function m(f){let _=f.target;_.removeEventListener("dispose",m);let S=e.get(_);S!==void 0&&(e.delete(_),S.dispose())}function x(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:x}}function ym(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Qi("WebGLRenderer: "+n+" extension not supported."),s}}}function vm(i,t,e,n){let s={},r=new WeakMap;function l(x){let f=x.target;f.index!==null&&t.remove(f.index);for(let S in f.attributes)t.remove(f.attributes[S]);f.removeEventListener("dispose",l),delete s[f.id];let _=r.get(f);_&&(t.remove(_),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(x,f){return s[f.id]===!0||(f.addEventListener("dispose",l),s[f.id]=!0,e.memory.geometries++),f}function h(x){let f=x.attributes;for(let _ in f)t.update(f[_],i.ARRAY_BUFFER)}function u(x){let f=[],_=x.index,S=x.attributes.position,P=0;if(S===void 0)return;if(_!==null){let b=_.array;P=_.version;for(let C=0,y=b.length;C<y;C+=3){let c=b[C+0],w=b[C+1],D=b[C+2];f.push(c,w,w,D,D,c)}}else{let b=S.array;P=S.version;for(let C=0,y=b.length/3-1;C<y;C+=3){let c=C+0,w=C+1,D=C+2;f.push(c,w,w,D,D,c)}}let T=new(S.count>=65535?fr:dr)(f,1);T.version=P;let d=r.get(x);d&&t.remove(d),r.set(x,T)}function m(x){let f=r.get(x);if(f){let _=x.index;_!==null&&f.version<_.version&&u(x)}else u(x);return r.get(x)}return{get:a,update:h,getWireframeAttribute:m}}function Mm(i,t,e){let n;function s(x){n=x}let r,l;function a(x){r=x.type,l=x.bytesPerElement}function h(x,f){i.drawElements(n,f,r,x*l),e.update(f,n,1)}function u(x,f,_){_!==0&&(i.drawElementsInstanced(n,f,r,x*l,_),e.update(f,n,_))}function m(x,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,x,0,_);let P=0;for(let T=0;T<_;T++)P+=f[T];e.update(P,n,1)}this.setMode=s,this.setIndex=a,this.render=h,this.renderInstances=u,this.renderMultiDraw=m}function bm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,l,a){switch(e.calls++,l){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:ce("WebGLInfo: Unknown draw mode:",l);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Sm(i,t,e){let n=new WeakMap,s=new Ye;function r(l,a,h){let u=l.morphTargetInfluences,m=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,x=m!==void 0?m.length:0,f=n.get(a);if(f===void 0||f.count!==x){let L=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",L)};f!==void 0&&f.texture.dispose();let _=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,P=a.morphAttributes.color!==void 0,T=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],C=0;_===!0&&(C=1),S===!0&&(C=2),P===!0&&(C=3);let y=a.attributes.position.count*C,c=1;y>t.maxTextureSize&&(c=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*c*4*x),D=new ts(w,y,c,x);D.type=Hn,D.needsUpdate=!0;let g=C*4;for(let z=0;z<x;z++){let J=T[z],q=d[z],nt=b[z],W=y*c*4*z;for(let Q=0;Q<J.count;Q++){let dt=Q*g;_===!0&&(s.fromBufferAttribute(J,Q),w[W+dt+0]=s.x,w[W+dt+1]=s.y,w[W+dt+2]=s.z,w[W+dt+3]=0),S===!0&&(s.fromBufferAttribute(q,Q),w[W+dt+4]=s.x,w[W+dt+5]=s.y,w[W+dt+6]=s.z,w[W+dt+7]=0),P===!0&&(s.fromBufferAttribute(nt,Q),w[W+dt+8]=s.x,w[W+dt+9]=s.y,w[W+dt+10]=s.z,w[W+dt+11]=nt.itemSize===4?s.w:1)}}f={count:x,texture:D,size:new Ee(y,c)},n.set(a,f),a.addEventListener("dispose",L)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",l.morphTexture,e);else{let _=0;for(let P=0;P<u.length;P++)_+=u[P];let S=a.morphTargetsRelative?1:1-_;h.getUniforms().setValue(i,"morphTargetBaseInfluence",S),h.getUniforms().setValue(i,"morphTargetInfluences",u)}h.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function wm(i,t,e,n,s){let r=new WeakMap;function l(u){let m=s.render.frame,x=u.geometry,f=t.get(u,x);if(r.get(f)!==m&&(t.update(f),r.set(f,m)),u.isInstancedMesh&&(u.hasEventListener("dispose",h)===!1&&u.addEventListener("dispose",h),r.get(u)!==m&&(e.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&e.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,m))),u.isSkinnedMesh){let _=u.skeleton;r.get(_)!==m&&(_.update(),r.set(_,m))}return f}function a(){r=new WeakMap}function h(u){let m=u.target;m.removeEventListener("dispose",h),n.releaseStatesOfObject(m),e.remove(m.instanceMatrix),m.instanceColor!==null&&e.remove(m.instanceColor)}return{update:l,dispose:a}}var Tm={[kl]:"LINEAR_TONE_MAPPING",[Vl]:"REINHARD_TONE_MAPPING",[Gl]:"CINEON_TONE_MAPPING",[Ir]:"ACES_FILMIC_TONE_MAPPING",[Wl]:"AGX_TONE_MAPPING",[Xl]:"NEUTRAL_TONE_MAPPING",[Hl]:"CUSTOM_TONE_MAPPING"};function Em(i,t,e,n,s,r){let l=new An(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,h=null,u=new Nn;u.setAttribute("position",new Tn([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Tn([0,2,0,0,2,0],2));let m=new Us({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),x=new gn(u,m),f=new Os(-1,1,1,-1,0,1),_=null,S=null,P=!1,T,d=null,b=[],C=!1;this.setSize=function(y,c){l.setSize(y,c),a!==null&&a.setSize(y,c),h!==null&&h.setSize(y,c);for(let w=0;w<b.length;w++){let D=b[w];D.setSize&&D.setSize(y,c)}},this.setEffects=function(y){b=y,C=b.length>0&&b[0].isRenderPass===!0;let c=l.width,w=l.height;b.length>0&&a===null&&(a=new An(c,w,{type:ti,depthBuffer:!1,stencilBuffer:!1}),h=new An(c,w,{type:ti,depthBuffer:!1,stencilBuffer:!1}));for(let D=0;D<b.length;D++){let g=b[D];g.setSize&&g.setSize(c,w)}},this.begin=function(y,c){if(P||y.toneMapping===jn&&b.length===0)return!1;if(d=c,c!==null){let w=c.width,D=c.height;(l.width!==w||l.height!==D)&&this.setSize(w,D)}return C===!1&&y.setRenderTarget(l),T=y.toneMapping,y.toneMapping=jn,!0},this.hasRenderPass=function(){return C},this.end=function(y,c){y.toneMapping=T,P=!0;let w=l,D=a;for(let g=0;g<b.length;g++){let L=b[g];L.enabled!==!1&&(L.render(y,D,w,c),L.needsSwap!==!1&&(w=D,D=D===a?h:a))}if(_!==y.outputColorSpace||S!==y.toneMapping){_=y.outputColorSpace,S=y.toneMapping,m.defines={},Ae.getTransfer(_)===Oe&&(m.defines.SRGB_TRANSFER="");let g=Tm[S];g&&(m.defines[g]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(d),y.render(x,f),d=null,P=!1},this.isCompositing=function(){return P},this.dispose=function(){l.dispose(),a!==null&&a.dispose(),h!==null&&h.dispose(),u.dispose(),m.dispose()}}var bu=new En,gc=new Oi(1,1),Su=new ts,wu=new La,Tu=new vr,iu=[],su=[],ru=new Float32Array(16),au=new Float32Array(9),ou=new Float32Array(4);function Xs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=iu[s];if(r===void 0&&(r=new Float32Array(s),iu[s]=r),t!==0){n.toArray(r,0);for(let l=1,a=0;l!==t;++l)a+=e,i[l].toArray(r,a)}return r}function nn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function sn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function qo(i,t){let e=su[t];e===void 0&&(e=new Int32Array(t),su[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Am(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Cm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2fv(this.addr,t),sn(e,t)}}function Rm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(nn(e,t))return;i.uniform3fv(this.addr,t),sn(e,t)}}function Im(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4fv(this.addr,t),sn(e,t)}}function Pm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;ou.set(n),i.uniformMatrix2fv(this.addr,!1,ou),sn(e,n)}}function Lm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;au.set(n),i.uniformMatrix3fv(this.addr,!1,au),sn(e,n)}}function Dm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;ru.set(n),i.uniformMatrix4fv(this.addr,!1,ru),sn(e,n)}}function Nm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Um(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2iv(this.addr,t),sn(e,t)}}function Fm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;i.uniform3iv(this.addr,t),sn(e,t)}}function Om(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4iv(this.addr,t),sn(e,t)}}function Bm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function zm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2uiv(this.addr,t),sn(e,t)}}function km(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;i.uniform3uiv(this.addr,t),sn(e,t)}}function Vm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4uiv(this.addr,t),sn(e,t)}}function Gm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(gc.compareFunction=e.isReversedDepthBuffer()?Bo:Oo,r=gc):r=bu,e.setTexture2D(t||r,s)}function Hm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||wu,s)}function Wm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Tu,s)}function Xm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Su,s)}function qm(i){switch(i){case 5126:return Am;case 35664:return Cm;case 35665:return Rm;case 35666:return Im;case 35674:return Pm;case 35675:return Lm;case 35676:return Dm;case 5124:case 35670:return Nm;case 35667:case 35671:return Um;case 35668:case 35672:return Fm;case 35669:case 35673:return Om;case 5125:return Bm;case 36294:return zm;case 36295:return km;case 36296:return Vm;case 35678:case 36198:case 36298:case 36306:case 35682:return Gm;case 35679:case 36299:case 36307:return Hm;case 35680:case 36300:case 36308:case 36293:return Wm;case 36289:case 36303:case 36311:case 36292:return Xm}}function Ym(i,t){i.uniform1fv(this.addr,t)}function Zm(i,t){let e=Xs(t,this.size,2);i.uniform2fv(this.addr,e)}function Jm(i,t){let e=Xs(t,this.size,3);i.uniform3fv(this.addr,e)}function $m(i,t){let e=Xs(t,this.size,4);i.uniform4fv(this.addr,e)}function Km(i,t){let e=Xs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function jm(i,t){let e=Xs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Qm(i,t){let e=Xs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function t0(i,t){i.uniform1iv(this.addr,t)}function e0(i,t){i.uniform2iv(this.addr,t)}function n0(i,t){i.uniform3iv(this.addr,t)}function i0(i,t){i.uniform4iv(this.addr,t)}function s0(i,t){i.uniform1uiv(this.addr,t)}function r0(i,t){i.uniform2uiv(this.addr,t)}function a0(i,t){i.uniform3uiv(this.addr,t)}function o0(i,t){i.uniform4uiv(this.addr,t)}function l0(i,t,e){let n=this.cache,s=t.length,r=qo(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));let l;this.type===i.SAMPLER_2D_SHADOW?l=gc:l=bu;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||l,r[a])}function c0(i,t,e){let n=this.cache,s=t.length,r=qo(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let l=0;l!==s;++l)e.setTexture3D(t[l]||wu,r[l])}function h0(i,t,e){let n=this.cache,s=t.length,r=qo(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let l=0;l!==s;++l)e.setTextureCube(t[l]||Tu,r[l])}function u0(i,t,e){let n=this.cache,s=t.length,r=qo(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let l=0;l!==s;++l)e.setTexture2DArray(t[l]||Su,r[l])}function d0(i){switch(i){case 5126:return Ym;case 35664:return Zm;case 35665:return Jm;case 35666:return $m;case 35674:return Km;case 35675:return jm;case 35676:return Qm;case 5124:case 35670:return t0;case 35667:case 35671:return e0;case 35668:case 35672:return n0;case 35669:case 35673:return i0;case 5125:return s0;case 36294:return r0;case 36295:return a0;case 36296:return o0;case 35678:case 36198:case 36298:case 36306:case 35682:return l0;case 35679:case 36299:case 36307:return c0;case 35680:case 36300:case 36308:case 36293:return h0;case 36289:case 36303:case 36311:case 36292:return u0}}var xc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=qm(e.type)}},_c=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=d0(e.type)}},yc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,l=s.length;r!==l;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},pc=/(\w+)(\])?(\[|\.)?/g;function lu(i,t){i.seq.push(t),i.map[t.id]=t}function f0(i,t,e){let n=i.name,s=n.length;for(pc.lastIndex=0;;){let r=pc.exec(n),l=pc.lastIndex,a=r[1],h=r[2]==="]",u=r[3];if(h&&(a=a|0),u===void 0||u==="["&&l+2===s){lu(e,u===void 0?new xc(a,i,t):new _c(a,i,t));break}else{let x=e.map[a];x===void 0&&(x=new yc(a),lu(e,x)),e=x}}}var Ws=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let l=0;l<n;++l){let a=t.getActiveUniform(e,l),h=t.getUniformLocation(e,a.name);f0(a,h,this)}let s=[],r=[];for(let l of this.seq)l.type===t.SAMPLER_2D_SHADOW||l.type===t.SAMPLER_CUBE_SHADOW||l.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(l):r.push(l);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,l=e.length;r!==l;++r){let a=e[r],h=n[a.id];h.needsUpdate!==!1&&a.setValue(t,h.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let l=t[s];l.id in e&&n.push(l)}return n}};function cu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var p0=37297,m0=0;function g0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let l=s;l<r;l++){let a=l+1;n.push(`${a===t?">":" "} ${a}: ${e[l]}`)}return n.join(`
`)}var hu=new pe;function x0(i){Ae._getMatrix(hu,Ae.workingColorSpace,i);let t=`mat3( ${hu.elements.map(e=>e.toFixed(4))} )`;switch(Ae.getTransfer(i)){case or:return[t,"LinearTransferOETF"];case Oe:return[t,"sRGBTransferOETF"];default:return he("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function uu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let l=/ERROR: 0:(\d+)/.exec(r);if(l){let a=parseInt(l[1]);return e.toUpperCase()+`

`+r+`

`+g0(i.getShaderSource(t),a)}else return r}function _0(i,t){let e=x0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var y0={[kl]:"Linear",[Vl]:"Reinhard",[Gl]:"Cineon",[Ir]:"ACESFilmic",[Wl]:"AgX",[Xl]:"Neutral",[Hl]:"Custom"};function v0(i,t){let e=y0[t];return e===void 0?(he("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Vo=new ht;function M0(){Ae.getLuminanceCoefficients(Vo);let i=Vo.x.toFixed(4),t=Vo.y.toFixed(4),e=Vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function b0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gr).join(`
`)}function S0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function w0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),l=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[l]={type:r.type,location:i.getAttribLocation(t,l),locationSize:a}}return e}function Gr(i){return i!==""}function du(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var T0=/^[ \t]*#include +<([\w\d./]+)>/gm;function vc(i){return i.replace(T0,A0)}var E0=new Map;function A0(i,t){let e=ve[t];if(e===void 0){let n=E0.get(t);if(n!==void 0)e=ve[n],he('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return vc(e)}var C0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pu(i){return i.replace(C0,R0)}function R0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var I0={[ns]:"SHADOWMAP_TYPE_PCF",[Bs]:"SHADOWMAP_TYPE_VSM"};function P0(i){return I0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var L0={[Gi]:"ENVMAP_TYPE_CUBE",[ss]:"ENVMAP_TYPE_CUBE",[Pr]:"ENVMAP_TYPE_CUBE_UV"};function D0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":L0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var N0={[ss]:"ENVMAP_MODE_REFRACTION"};function U0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":N0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var F0={[zl]:"ENVMAP_BLENDING_MULTIPLY",[Dh]:"ENVMAP_BLENDING_MIX",[Nh]:"ENVMAP_BLENDING_ADD"};function O0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":F0[i.combine]||"ENVMAP_BLENDING_NONE"}function B0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function z0(i,t,e,n){let s=i.getContext(),r=e.defines,l=e.vertexShader,a=e.fragmentShader,h=P0(e),u=D0(e),m=U0(e),x=O0(e),f=B0(e),_=b0(e),S=S0(r),P=s.createProgram(),T,d,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(T=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(Gr).join(`
`),T.length>0&&(T+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(Gr).join(`
`),d.length>0&&(d+=`
`)):(T=[mu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+m:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gr).join(`
`),d=[mu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+m:"",e.envMap?"#define "+x:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==jn?"#define TONE_MAPPING":"",e.toneMapping!==jn?ve.tonemapping_pars_fragment:"",e.toneMapping!==jn?v0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,_0("linearToOutputTexel",e.outputColorSpace),M0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gr).join(`
`)),l=vc(l),l=du(l,e),l=fu(l,e),a=vc(a),a=du(a,e),a=fu(a,e),l=pu(l),a=pu(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,T=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+T,d=["#define varying in",e.glslVersion===zr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let C=b+T+l,y=b+d+a,c=cu(s,s.VERTEX_SHADER,C),w=cu(s,s.FRAGMENT_SHADER,y);s.attachShader(P,c),s.attachShader(P,w),e.index0AttributeName!==void 0?s.bindAttribLocation(P,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(P,0,"position"),s.linkProgram(P);function D(J){if(i.debug.checkShaderErrors){let q=s.getProgramInfoLog(P)||"",nt=s.getShaderInfoLog(c)||"",W=s.getShaderInfoLog(w)||"",Q=q.trim(),dt=nt.trim(),ut=W.trim(),yt=!0,mt=!0;if(s.getProgramParameter(P,s.LINK_STATUS)===!1)if(yt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,P,c,w);else{let ft=uu(s,c,"vertex"),it=uu(s,w,"fragment");ce("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(P,s.VALIDATE_STATUS)+`

Material Name: `+J.name+`
Material Type: `+J.type+`

Program Info Log: `+Q+`
`+ft+`
`+it)}else Q!==""?he("WebGLProgram: Program Info Log:",Q):(dt===""||ut==="")&&(mt=!1);mt&&(J.diagnostics={runnable:yt,programLog:Q,vertexShader:{log:dt,prefix:T},fragmentShader:{log:ut,prefix:d}})}s.deleteShader(c),s.deleteShader(w),g=new Ws(s,P),L=w0(s,P)}let g;this.getUniforms=function(){return g===void 0&&D(this),g};let L;this.getAttributes=function(){return L===void 0&&D(this),L};let z=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(P,p0)),z},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(P),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=m0++,this.cacheKey=t,this.usedTimes=1,this.program=P,this.vertexShader=c,this.fragmentShader=w,this}var k0=0,Mc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new bc(t),e.set(t,n)),n}},bc=class{constructor(t){this.id=k0++,this.code=t,this.usedTimes=0}};function V0(i){return i===Wi||i===Or||i===Br}function G0(i,t,e,n,s,r){let l=new Ps,a=new Mc,h=new Set,u=[],m=new Map,x=n.logarithmicDepthBuffer,f=n.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(g){return h.add(g),g===0?"uv":`uv${g}`}function P(g,L,z,J,q,nt){let W=J.fog,Q=q.geometry,dt=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?J.environment:null,ut=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,yt=t.get(g.envMap||dt,ut),mt=yt&&yt.mapping===Pr?yt.image.height:null,ft=_[g.type];g.precision!==null&&(f=n.getMaxPrecision(g.precision),f!==g.precision&&he("WebGLProgram.getParameters:",g.precision,"not supported, using",f,"instead."));let it=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,N=it!==void 0?it.length:0,Zt=0;Q.morphAttributes.position!==void 0&&(Zt=1),Q.morphAttributes.normal!==void 0&&(Zt=2),Q.morphAttributes.color!==void 0&&(Zt=3);let Me,zt,et,xt;if(ft){let O=di[ft];Me=O.vertexShader,zt=O.fragmentShader}else{Me=g.vertexShader,zt=g.fragmentShader;let O=a.getVertexShaderStage(g),k=a.getFragmentShaderStage(g);a.update(g,O,k),et=O.id,xt=k.id}let Mt=i.getRenderTarget(),Ft=i.state.buffers.depth.getReversed(),ee=q.isInstancedMesh===!0,Ot=q.isBatchedMesh===!0,se=!!g.map,oe=!!g.matcap,ue=!!yt,jt=!!g.aoMap,de=!!g.lightMap,ne=!!g.bumpMap&&g.wireframe===!1,me=!!g.normalMap,Se=!!g.displacementMap,Ze=!!g.emissiveMap,fe=!!g.metalnessMap,Pe=!!g.roughnessMap,K=g.anisotropy>0,xe=g.clearcoat>0,we=g.dispersion>0,F=g.retroreflectivity>0,M=g.iridescence>0,B=g.sheen>0,V=g.transmission>0,Y=K&&!!g.anisotropyMap,vt=xe&&!!g.clearcoatMap,wt=xe&&!!g.clearcoatNormalMap,at=xe&&!!g.clearcoatRoughnessMap,ct=M&&!!g.iridescenceMap,Et=M&&!!g.iridescenceThicknessMap,Gt=B&&!!g.sheenColorMap,Ct=B&&!!g.sheenRoughnessMap,Pt=!!g.specularMap,Ht=!!g.specularColorMap,Qt=!!g.specularIntensityMap,re=V&&!!g.transmissionMap,Z=V&&!!g.thicknessMap,It=!!g.gradientMap,_t=!!g.alphaMap,Lt=g.alphaTest>0,Dt=!!g.alphaHash,R=!!g.extensions,j=jn;g.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(j=i.toneMapping);let E={shaderID:ft,shaderType:g.type,shaderName:g.name,vertexShader:Me,fragmentShader:zt,defines:g.defines,customVertexShaderID:et,customFragmentShaderID:xt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:f,batching:Ot,batchingColor:Ot&&q._colorsTexture!==null,instancing:ee,instancingColor:ee&&q.instanceColor!==null,instancingMorph:ee&&q.morphTexture!==null,outputColorSpace:Mt===null?i.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:Ae.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:se,matcap:oe,envMap:ue,envMapMode:ue&&yt.mapping,envMapCubeUVHeight:mt,aoMap:jt,lightMap:de,bumpMap:ne,normalMap:me,displacementMap:Se,emissiveMap:Ze,normalMapObjectSpace:me&&g.normalMapType===Oh,normalMapTangentSpace:me&&g.normalMapType===Fo,packedNormalMap:me&&g.normalMapType===Fo&&V0(g.normalMap.format),metalnessMap:fe,roughnessMap:Pe,anisotropy:K,anisotropyMap:Y,clearcoat:xe,clearcoatMap:vt,clearcoatNormalMap:wt,clearcoatRoughnessMap:at,dispersion:we,retroreflection:F,iridescence:M,iridescenceMap:ct,iridescenceThicknessMap:Et,sheen:B,sheenColorMap:Gt,sheenRoughnessMap:Ct,specularMap:Pt,specularColorMap:Ht,specularIntensityMap:Qt,transmission:V,transmissionMap:re,thicknessMap:Z,gradientMap:It,opaque:g.transparent===!1&&g.blending===zs&&g.alphaToCoverage===!1,alphaMap:_t,alphaTest:Lt,alphaHash:Dt,combine:g.combine,mapUv:se&&S(g.map.channel),aoMapUv:jt&&S(g.aoMap.channel),lightMapUv:de&&S(g.lightMap.channel),bumpMapUv:ne&&S(g.bumpMap.channel),normalMapUv:me&&S(g.normalMap.channel),displacementMapUv:Se&&S(g.displacementMap.channel),emissiveMapUv:Ze&&S(g.emissiveMap.channel),metalnessMapUv:fe&&S(g.metalnessMap.channel),roughnessMapUv:Pe&&S(g.roughnessMap.channel),anisotropyMapUv:Y&&S(g.anisotropyMap.channel),clearcoatMapUv:vt&&S(g.clearcoatMap.channel),clearcoatNormalMapUv:wt&&S(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&S(g.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&S(g.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&S(g.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&S(g.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&S(g.sheenRoughnessMap.channel),specularMapUv:Pt&&S(g.specularMap.channel),specularColorMapUv:Ht&&S(g.specularColorMap.channel),specularIntensityMapUv:Qt&&S(g.specularIntensityMap.channel),transmissionMapUv:re&&S(g.transmissionMap.channel),thicknessMapUv:Z&&S(g.thicknessMap.channel),alphaMapUv:_t&&S(g.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(me||K),vertexNormals:!!Q.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!Q.attributes.uv&&(se||_t),fog:!!W,useFog:g.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||Q.attributes.normal===void 0&&me===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Ft,skinning:q.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:Zt,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:nt.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:j,decodeVideoTexture:se&&g.map.isVideoTexture===!0&&Ae.getTransfer(g.map.colorSpace)===Oe,decodeVideoTextureEmissive:Ze&&g.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(g.emissiveMap.colorSpace)===Oe,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===On,flipSided:g.side===vn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:R&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(R&&g.extensions.multiDraw===!0||Ot)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return E.vertexUv1s=h.has(1),E.vertexUv2s=h.has(2),E.vertexUv3s=h.has(3),h.clear(),E}function T(g){let L=[];if(g.shaderID?L.push(g.shaderID):(L.push(g.customVertexShaderID),L.push(g.customFragmentShaderID)),g.defines!==void 0)for(let z in g.defines)L.push(z),L.push(g.defines[z]);return g.isRawShaderMaterial===!1&&(d(L,g),b(L,g),L.push(i.outputColorSpace)),L.push(g.customProgramCacheKey),L.join()}function d(g,L){g.push(L.precision),g.push(L.outputColorSpace),g.push(L.envMapMode),g.push(L.envMapCubeUVHeight),g.push(L.mapUv),g.push(L.alphaMapUv),g.push(L.lightMapUv),g.push(L.aoMapUv),g.push(L.bumpMapUv),g.push(L.normalMapUv),g.push(L.displacementMapUv),g.push(L.emissiveMapUv),g.push(L.metalnessMapUv),g.push(L.roughnessMapUv),g.push(L.anisotropyMapUv),g.push(L.clearcoatMapUv),g.push(L.clearcoatNormalMapUv),g.push(L.clearcoatRoughnessMapUv),g.push(L.iridescenceMapUv),g.push(L.iridescenceThicknessMapUv),g.push(L.sheenColorMapUv),g.push(L.sheenRoughnessMapUv),g.push(L.specularMapUv),g.push(L.specularColorMapUv),g.push(L.specularIntensityMapUv),g.push(L.transmissionMapUv),g.push(L.thicknessMapUv),g.push(L.combine),g.push(L.fogExp2),g.push(L.sizeAttenuation),g.push(L.morphTargetsCount),g.push(L.morphAttributeCount),g.push(L.numSunLights),g.push(L.numDirLights),g.push(L.numPointLights),g.push(L.numSpotLights),g.push(L.numSpotLightMaps),g.push(L.numHemiLights),g.push(L.numRectAreaLights),g.push(L.numSunLightShadows),g.push(L.numDirLightShadows),g.push(L.numPointLightShadows),g.push(L.numSpotLightShadows),g.push(L.numSpotLightShadowsWithMaps),g.push(L.numLightProbes),g.push(L.shadowMapType),g.push(L.toneMapping),g.push(L.numClippingPlanes),g.push(L.numClipIntersection),g.push(L.depthPacking)}function b(g,L){l.disableAll(),L.instancing&&l.enable(0),L.instancingColor&&l.enable(1),L.instancingMorph&&l.enable(2),L.matcap&&l.enable(3),L.envMap&&l.enable(4),L.normalMapObjectSpace&&l.enable(5),L.normalMapTangentSpace&&l.enable(6),L.clearcoat&&l.enable(7),L.iridescence&&l.enable(8),L.alphaTest&&l.enable(9),L.vertexColors&&l.enable(10),L.vertexAlphas&&l.enable(11),L.vertexUv1s&&l.enable(12),L.vertexUv2s&&l.enable(13),L.vertexUv3s&&l.enable(14),L.vertexTangents&&l.enable(15),L.anisotropy&&l.enable(16),L.alphaHash&&l.enable(17),L.batching&&l.enable(18),L.dispersion&&l.enable(19),L.retroreflection&&l.enable(24),L.batchingColor&&l.enable(20),L.gradientMap&&l.enable(21),L.packedNormalMap&&l.enable(22),L.vertexNormals&&l.enable(23),g.push(l.mask),l.disableAll(),L.fog&&l.enable(0),L.useFog&&l.enable(1),L.flatShading&&l.enable(2),L.logarithmicDepthBuffer&&l.enable(3),L.reversedDepthBuffer&&l.enable(4),L.skinning&&l.enable(5),L.morphTargets&&l.enable(6),L.morphNormals&&l.enable(7),L.morphColors&&l.enable(8),L.premultipliedAlpha&&l.enable(9),L.shadowMapEnabled&&l.enable(10),L.doubleSided&&l.enable(11),L.flipSided&&l.enable(12),L.useDepthPacking&&l.enable(13),L.dithering&&l.enable(14),L.transmission&&l.enable(15),L.sheen&&l.enable(16),L.opaque&&l.enable(17),L.pointsUvs&&l.enable(18),L.decodeVideoTexture&&l.enable(19),L.decodeVideoTextureEmissive&&l.enable(20),L.alphaToCoverage&&l.enable(21),L.numLightProbeGrids>0&&l.enable(22),L.hasPositionAttribute&&l.enable(23),g.push(l.mask)}function C(g){let L=_[g.type],z;if(L){let J=di[L];z=$h.clone(J.uniforms)}else z=g.uniforms;return z}function y(g,L){let z=m.get(L);return z!==void 0?++z.usedTimes:(z=new z0(i,L,g,s),u.push(z),m.set(L,z)),z}function c(g){if(--g.usedTimes===0){let L=u.indexOf(g);u[L]=u[u.length-1],u.pop(),m.delete(g.cacheKey),g.destroy()}}function w(g){a.remove(g)}function D(){a.dispose()}return{getParameters:P,getProgramCacheKey:T,getUniforms:C,acquireProgram:y,releaseProgram:c,releaseShaderCache:w,programs:u,dispose:D}}function H0(){let i=new WeakMap;function t(l){return i.has(l)}function e(l){let a=i.get(l);return a===void 0&&(a={},i.set(l,a)),a}function n(l){i.delete(l)}function s(l,a,h){i.get(l)[a]=h}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function W0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function gu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function xu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function l(f){let _=0;return f.isInstancedMesh&&(_+=2),f.isSkinnedMesh&&(_+=1),_}function a(f,_,S,P,T,d){let b=i[t];return b===void 0?(b={id:f.id,object:f,geometry:_,material:S,materialVariant:l(f),groupOrder:P,renderOrder:f.renderOrder,z:T,group:d},i[t]=b):(b.id=f.id,b.object=f,b.geometry=_,b.material=S,b.materialVariant=l(f),b.groupOrder=P,b.renderOrder=f.renderOrder,b.z=T,b.group=d),t++,b}function h(f,_,S,P,T,d,b){b.reversedDepth===!0&&(T=-T);let C=a(f,_,S,P,T,d);S.transmission>0?n.push(C):S.transparent===!0?s.push(C):e.push(C)}function u(f,_,S,P,T,d){let b=a(f,_,S,P,T,d);S.transmission>0?n.unshift(b):S.transparent===!0?s.unshift(b):e.unshift(b)}function m(f,_){e.length>1&&e.sort(f||W0),n.length>1&&n.sort(_||gu),s.length>1&&s.sort(_||gu)}function x(){for(let f=t,_=i.length;f<_;f++){let S=i[f];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:h,unshift:u,finish:x,sort:m}}function X0(){let i=new WeakMap;function t(n,s){let r=i.get(n),l;return r===void 0?(l=new xu,i.set(n,[l])):s>=r.length?(l=new xu,r.push(l)):l=r[s],l}function e(){i=new WeakMap}return{get:t,dispose:e}}function q0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new ht,color:new ye};break;case"SpotLight":e={position:new ht,direction:new ht,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new ht,color:new ye,distance:0,decay:0};break;case"HemisphereLight":e={direction:new ht,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":e={color:new ye,position:new ht,halfWidth:new ht,halfHeight:new ht};break}return i[t.id]=e,e}}}function Y0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Z0=0;function J0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function $0(i){let t=new q0,e=Y0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new ht);let s=new ht,r=new De,l=new De;function a(u){let m=0,x=0,f=0;for(let q=0;q<9;q++)n.probe[q].set(0,0,0);let _=0,S=0,P=0,T=0,d=0,b=0,C=0,y=0,c=0,w=0,D=0,g=0,L=0,z=0;u.sort(J0);for(let q=0,nt=u.length;q<nt;q++){let W=u[q],Q=W.color,dt=W.intensity,ut=W.distance,yt=null;if(W.shadow&&W.shadow.map&&(W.shadow.map.texture.format===Wi?yt=W.shadow.map.texture:yt=W.shadow.map.depthTexture||W.shadow.map.texture),W.isAmbientLight)m+=Q.r*dt,x+=Q.g*dt,f+=Q.b*dt;else if(W.isLightProbe){for(let mt=0;mt<9;mt++)n.probe[mt].addScaledVector(W.sh.coefficients[mt],dt);z++}else if(W.isSunLight){let mt=t.get(W);if(mt.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){let ft=W.shadow,it=e.get(W);it.shadowIntensity=ft.intensity,it.shadowBias=ft.bias,it.shadowNormalBias=ft.normalBias,it.shadowRadius=ft.radius,it.shadowMapSize.copy(ft.mapSize).multiply(ft.getFrameExtents()),n.sunShadow[S]=it,n.sunShadowMap[S]=yt;let N=ft.getViewportCount();for(let Zt=0;Zt<N;Zt++)n.sunShadowMatrix[P+Zt]=ft.getMatrix(Zt),n.sunShadowCascade[P+Zt]=ft._cascadeData[Zt];P+=N,S++}n.sun[_]=mt,_++}else if(W.isDirectionalLight){let mt=t.get(W);if(mt.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){let ft=W.shadow,it=e.get(W);it.shadowIntensity=ft.intensity,it.shadowBias=ft.bias,it.shadowNormalBias=ft.normalBias,it.shadowRadius=ft.radius,it.shadowMapSize=ft.mapSize,n.directionalShadow[T]=it,n.directionalShadowMap[T]=yt,n.directionalShadowMatrix[T]=W.shadow.matrix,c++}n.directional[T]=mt,T++}else if(W.isSpotLight){let mt=t.get(W);mt.position.setFromMatrixPosition(W.matrixWorld),mt.color.copy(Q).multiplyScalar(dt),mt.distance=ut,mt.coneCos=Math.cos(W.angle),mt.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),mt.decay=W.decay,n.spot[b]=mt;let ft=W.shadow;if(W.map&&(n.spotLightMap[g]=W.map,g++,ft.updateMatrices(W),W.castShadow&&L++),n.spotLightMatrix[b]=ft.matrix,W.castShadow){let it=e.get(W);it.shadowIntensity=ft.intensity,it.shadowBias=ft.bias,it.shadowNormalBias=ft.normalBias,it.shadowRadius=ft.radius,it.shadowMapSize=ft.mapSize,n.spotShadow[b]=it,n.spotShadowMap[b]=yt,D++}b++}else if(W.isRectAreaLight){let mt=t.get(W);mt.color.copy(Q).multiplyScalar(dt),mt.halfWidth.set(W.width*.5,0,0),mt.halfHeight.set(0,W.height*.5,0),n.rectArea[C]=mt,C++}else if(W.isPointLight){let mt=t.get(W);if(mt.color.copy(W.color).multiplyScalar(W.intensity),mt.distance=W.distance,mt.decay=W.decay,W.castShadow){let ft=W.shadow,it=e.get(W);it.shadowIntensity=ft.intensity,it.shadowBias=ft.bias,it.shadowNormalBias=ft.normalBias,it.shadowRadius=ft.radius,it.shadowMapSize=ft.mapSize,it.shadowCameraNear=ft.camera.near,it.shadowCameraFar=ft.camera.far,n.pointShadow[d]=it,n.pointShadowMap[d]=yt,n.pointShadowMatrix[d]=W.shadow.matrix,w++}n.point[d]=mt,d++}else if(W.isHemisphereLight){let mt=t.get(W);mt.skyColor.copy(W.color).multiplyScalar(dt),mt.groundColor.copy(W.groundColor).multiplyScalar(dt),n.hemi[y]=mt,y++}}C>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Wt.LTC_FLOAT_1,n.rectAreaLTC2=Wt.LTC_FLOAT_2):(n.rectAreaLTC1=Wt.LTC_HALF_1,n.rectAreaLTC2=Wt.LTC_HALF_2)),n.ambient[0]=m,n.ambient[1]=x,n.ambient[2]=f;let J=n.hash;(J.sunLength!==_||J.directionalLength!==T||J.pointLength!==d||J.spotLength!==b||J.rectAreaLength!==C||J.hemiLength!==y||J.numSunShadows!==S||J.numDirectionalShadows!==c||J.numPointShadows!==w||J.numSpotShadows!==D||J.numSpotMaps!==g||J.numLightProbes!==z)&&(n.sun.length=_,n.directional.length=T,n.spot.length=b,n.rectArea.length=C,n.point.length=d,n.hemi.length=y,n.sunShadow.length=S,n.sunShadowMap.length=S,n.sunShadowMatrix.length=P,n.sunShadowCascade.length=P,n.directionalShadow.length=c,n.directionalShadowMap.length=c,n.directionalShadowMatrix.length=c,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=D,n.spotShadowMap.length=D,n.spotLightMatrix.length=D+g-L,n.spotLightMap.length=g,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=z,J.sunLength=_,J.directionalLength=T,J.pointLength=d,J.spotLength=b,J.rectAreaLength=C,J.hemiLength=y,J.numSunShadows=S,J.numDirectionalShadows=c,J.numPointShadows=w,J.numSpotShadows=D,J.numSpotMaps=g,J.numLightProbes=z,n.version=Z0++)}function h(u,m){let x=0,f=0,_=0,S=0,P=0,T=0,d=m.matrixWorldInverse;for(let b=0,C=u.length;b<C;b++){let y=u[b];if(y.isSunLight){let c=n.sun[x];c.direction.setFromMatrixPosition(y.matrixWorld),c.direction.transformDirection(d),x++}else if(y.isDirectionalLight){let c=n.directional[f];c.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),c.direction.sub(s),c.direction.transformDirection(d),f++}else if(y.isSpotLight){let c=n.spot[S];c.position.setFromMatrixPosition(y.matrixWorld),c.position.applyMatrix4(d),c.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),c.direction.sub(s),c.direction.transformDirection(d),S++}else if(y.isRectAreaLight){let c=n.rectArea[P];c.position.setFromMatrixPosition(y.matrixWorld),c.position.applyMatrix4(d),l.identity(),r.copy(y.matrixWorld),r.premultiply(d),l.extractRotation(r),c.halfWidth.set(y.width*.5,0,0),c.halfHeight.set(0,y.height*.5,0),c.halfWidth.applyMatrix4(l),c.halfHeight.applyMatrix4(l),P++}else if(y.isPointLight){let c=n.point[_];c.position.setFromMatrixPosition(y.matrixWorld),c.position.applyMatrix4(d),_++}else if(y.isHemisphereLight){let c=n.hemi[T];c.direction.setFromMatrixPosition(y.matrixWorld),c.direction.transformDirection(d),T++}}}return{setup:a,setupView:h,state:n}}function _u(i){let t=new $0(i),e=[],n=[],s=[];function r(f){x.camera=f,e.length=0,n.length=0,s.length=0}function l(f){e.push(f)}function a(f){n.push(f)}function h(f){s.push(f)}function u(){t.setup(e)}function m(f){t.setupView(e,f)}let x={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:x,setupLights:u,setupLightsView:m,pushLight:l,pushShadow:a,pushLightProbeGrid:h}}function K0(i){let t=new WeakMap;function e(s,r=0){let l=t.get(s),a;return l===void 0?(a=new _u(i),t.set(s,[a])):r>=l.length?(a=new _u(i),l.push(a)):a=l[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var j0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Q0=`uniform sampler2D shadow_pass;
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
}`,tg=[new ht(1,0,0),new ht(-1,0,0),new ht(0,1,0),new ht(0,-1,0),new ht(0,0,1),new ht(0,0,-1)],eg=[new ht(0,-1,0),new ht(0,-1,0),new ht(0,0,1),new ht(0,0,-1),new ht(0,-1,0),new ht(0,-1,0)],yu=new De,Vr=new ht,mc=new ht;function ng(i,t,e){let n=new Ds,s=new Ee,r=new Ee,l=new Ye,a=new Fs,h=new Na,u={},m=e.maxTextureSize,x={[Vi]:vn,[vn]:Vi,[On]:On},f=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:j0,fragmentShader:Q0}),_=f.clone();_.defines.HORIZONTAL_PASS=1;let S=new Nn;S.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let P=new gn(S,f),T=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ns;let d=this.type;this.render=function(w,D,g){if(T.enabled===!1||T.autoUpdate===!1&&T.needsUpdate===!1||w.length===0)return;this.type===ph&&(he("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ns);let L=i.getRenderTarget(),z=i.getActiveCubeFace(),J=i.getActiveMipmapLevel(),q=i.state;q.setBlending(ci),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let nt=d!==this.type;nt&&D.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(Q=>Q.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,Q=w.length;W<Q;W++){let dt=w[W],ut=dt.shadow;if(ut===void 0){he("WebGLShadowMap:",dt,"has no shadow.");continue}if(ut.autoUpdate===!1&&ut.needsUpdate===!1)continue;s.copy(ut.mapSize);let yt=ut.getFrameExtents();s.multiply(yt),r.copy(ut.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(r.x=Math.floor(m/yt.x),s.x=r.x*yt.x,ut.mapSize.x=r.x),s.y>m&&(r.y=Math.floor(m/yt.y),s.y=r.y*yt.y,ut.mapSize.y=r.y));let mt=i.state.buffers.depth.getReversed();if(ut.camera._reversedDepth=mt,ut.map===null||nt===!0){if(ut.map!==null&&(ut.map.depthTexture!==null&&(ut.map.depthTexture.dispose(),ut.map.depthTexture=null),ut.map.dispose()),this.type===Bs){if(dt.isPointLight){he("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ut.map=new An(s.x,s.y,{format:Wi,type:ti,minFilter:en,magFilter:en,generateMipmaps:!1}),ut.map.texture.name=dt.name+".shadowMap",ut.map.depthTexture=new Oi(s.x,s.y,Hn),ut.map.depthTexture.name=dt.name+".shadowMapDepth",ut.map.depthTexture.format=ri,ut.map.depthTexture.compareFunction=null,ut.map.depthTexture.minFilter=cn,ut.map.depthTexture.magFilter=cn}else dt.isPointLight?(ut.map=new Ho(s.x),ut.map.depthTexture=new Da(s.x,Qn)):(ut.map=new An(s.x,s.y),ut.map.depthTexture=new Oi(s.x,s.y,Qn)),ut.map.depthTexture.name=dt.name+".shadowMap",ut.map.depthTexture.format=ri,this.type===ns?(ut.map.depthTexture.compareFunction=mt?Bo:Oo,ut.map.depthTexture.minFilter=en,ut.map.depthTexture.magFilter=en):(ut.map.depthTexture.compareFunction=null,ut.map.depthTexture.minFilter=cn,ut.map.depthTexture.magFilter=cn);ut.camera.updateProjectionMatrix()}ut.map.isWebGLCubeRenderTarget!==!0&&(ut.map.width!==s.x||ut.map.height!==s.y)&&ut.map.setSize(s.x,s.y);let ft=ut.map.isWebGLCubeRenderTarget?6:ut.getViewportCount();dt.isPointLight!==!0&&ut.updateMatrices(dt,g);for(let it=0;it<ft;it++){let N=ut.getCamera(it);if(dt.isPointLight){let Zt=ut.camera,Me=ut.matrix,zt=dt.distance||Zt.far;zt!==Zt.far&&(Zt.far=zt,Zt.updateProjectionMatrix()),Vr.setFromMatrixPosition(dt.matrixWorld),Zt.position.copy(Vr),mc.copy(Zt.position),mc.add(tg[it]),Zt.up.copy(eg[it]),Zt.lookAt(mc),Zt.updateMatrixWorld(),Me.makeTranslation(-Vr.x,-Vr.y,-Vr.z),yu.multiplyMatrices(Zt.projectionMatrix,Zt.matrixWorldInverse),ut._frustum.setFromProjectionMatrix(yu,Zt.coordinateSystem,Zt.reversedDepth)}if(ut.map.isWebGLCubeRenderTarget)i.setRenderTarget(ut.map,it),i.clear();else{it===0&&(i.setRenderTarget(ut.map),i.clear());let Zt=ut.getViewport(it);l.set(r.x*Zt.x,r.y*Zt.y,r.x*Zt.z,r.y*Zt.w),q.viewport(l)}n=ut.getFrustum(it),y(D,g,N,dt,this.type)}ut.isPointLightShadow!==!0&&this.type===Bs&&b(ut,g),ut.needsUpdate=!1}d=this.type,T.needsUpdate=!1,i.setRenderTarget(L,z,J)};function b(w,D){let g=t.update(P);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,_.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,_.needsUpdate=!0),w.mapPass===null?w.mapPass=new An(s.x,s.y,{format:Wi,type:ti}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(D,null,g,f,P,null),_.uniforms.shadow_pass.value=w.mapPass.texture,_.uniforms.resolution.value.set(w.map.width,w.map.height),_.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(D,null,g,_,P,null)}function C(w,D,g,L){let z=null,J=g.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(J!==void 0)z=J;else if(z=g.isPointLight===!0?h:a,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let q=z.uuid,nt=D.uuid,W=u[q];W===void 0&&(W={},u[q]=W);let Q=W[nt];Q===void 0&&(Q=z.clone(),W[nt]=Q,D.addEventListener("dispose",c)),z=Q}if(z.visible=D.visible,z.wireframe=D.wireframe,L===Bs?z.side=D.shadowSide!==null?D.shadowSide:D.side:z.side=D.shadowSide!==null?D.shadowSide:x[D.side],z.alphaMap=D.alphaMap,z.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,z.map=D.map,z.clipShadows=D.clipShadows,z.clippingPlanes=D.clippingPlanes,z.clipIntersection=D.clipIntersection,z.displacementMap=D.displacementMap,z.displacementScale=D.displacementScale,z.displacementBias=D.displacementBias,z.wireframeLinewidth=D.wireframeLinewidth,z.linewidth=D.linewidth,g.isPointLight===!0&&z.isMeshDistanceMaterial===!0){let q=i.properties.get(z);q.light=g}return z}function y(w,D,g,L,z){if(w.visible===!1)return;if(w.layers.test(D.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&z===Bs)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,w.matrixWorld);let nt=t.update(w),W=w.material;if(Array.isArray(W)){let Q=nt.groups;for(let dt=0,ut=Q.length;dt<ut;dt++){let yt=Q[dt],mt=W[yt.materialIndex];if(mt&&mt.visible){let ft=C(w,mt,L,z);w.onBeforeShadow(i,w,D,g,nt,ft,yt),i.renderBufferDirect(g,null,nt,ft,w,yt),w.onAfterShadow(i,w,D,g,nt,ft,yt)}}}else if(W.visible){let Q=C(w,W,L,z);w.onBeforeShadow(i,w,D,g,nt,Q,null),i.renderBufferDirect(g,null,nt,Q,w,null),w.onAfterShadow(i,w,D,g,nt,Q,null)}}let q=w.children;for(let nt=0,W=q.length;nt<W;nt++)y(q[nt],D,g,L,z)}function c(w){w.target.removeEventListener("dispose",c);for(let g in u){let L=u[g],z=w.target.uuid;z in L&&(L[z].dispose(),delete L[z])}}}function ig(i,t){function e(){let Z=!1,It=new Ye,_t=null,Lt=new Ye(0,0,0,0);return{setMask:function(Dt){_t!==Dt&&!Z&&(i.colorMask(Dt,Dt,Dt,Dt),_t=Dt)},setLocked:function(Dt){Z=Dt},setClear:function(Dt,R,j,E,O){O===!0&&(Dt*=E,R*=E,j*=E),It.set(Dt,R,j,E),Lt.equals(It)===!1&&(i.clearColor(Dt,R,j,E),Lt.copy(It))},reset:function(){Z=!1,_t=null,Lt.set(-1,0,0,0)}}}function n(){let Z=!1,It=!1,_t=null,Lt=null,Dt=null;return{setReversed:function(R){if(It!==R){let j=t.get("EXT_clip_control");R?j.clipControlEXT(j.LOWER_LEFT_EXT,j.ZERO_TO_ONE_EXT):j.clipControlEXT(j.LOWER_LEFT_EXT,j.NEGATIVE_ONE_TO_ONE_EXT),It=R;let E=Dt;Dt=null,this.setClear(E)}},getReversed:function(){return It},setTest:function(R){R?Mt(i.DEPTH_TEST):Ft(i.DEPTH_TEST)},setMask:function(R){_t!==R&&!Z&&(i.depthMask(R),_t=R)},setFunc:function(R){if(It&&(R=Zh[R]),Lt!==R){switch(R){case va:i.depthFunc(i.NEVER);break;case Ma:i.depthFunc(i.ALWAYS);break;case ba:i.depthFunc(i.LESS);break;case Es:i.depthFunc(i.LEQUAL);break;case Sa:i.depthFunc(i.EQUAL);break;case wa:i.depthFunc(i.GEQUAL);break;case Ta:i.depthFunc(i.GREATER);break;case Ea:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Lt=R}},setLocked:function(R){Z=R},setClear:function(R){Dt!==R&&(Dt=R,It&&(R=1-R),i.clearDepth(R))},reset:function(){Z=!1,_t=null,Lt=null,Dt=null,It=!1}}}function s(){let Z=!1,It=null,_t=null,Lt=null,Dt=null,R=null,j=null,E=null,O=null;return{setTest:function(k){Z||(k?Mt(i.STENCIL_TEST):Ft(i.STENCIL_TEST))},setMask:function(k){It!==k&&!Z&&(i.stencilMask(k),It=k)},setFunc:function(k,lt,X){(_t!==k||Lt!==lt||Dt!==X)&&(i.stencilFunc(k,lt,X),_t=k,Lt=lt,Dt=X)},setOp:function(k,lt,X){(R!==k||j!==lt||E!==X)&&(i.stencilOp(k,lt,X),R=k,j=lt,E=X)},setLocked:function(k){Z=k},setClear:function(k){O!==k&&(i.clearStencil(k),O=k)},reset:function(){Z=!1,It=null,_t=null,Lt=null,Dt=null,R=null,j=null,E=null,O=null}}}let r=new e,l=new n,a=new s,h=new WeakMap,u=new WeakMap,m={},x={},f={},_=new WeakMap,S=[],P=null,T=!1,d=null,b=null,C=null,y=null,c=null,w=null,D=null,g=new ye(0,0,0),L=0,z=!1,J=null,q=null,nt=null,W=null,Q=null,dt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ut=!1,yt=0,mt=i.getParameter(i.VERSION);mt.indexOf("WebGL")!==-1?(yt=parseFloat(/^WebGL (\d)/.exec(mt)[1]),ut=yt>=1):mt.indexOf("OpenGL ES")!==-1&&(yt=parseFloat(/^OpenGL ES (\d)/.exec(mt)[1]),ut=yt>=2);let ft=null,it={},N=i.getParameter(i.SCISSOR_BOX),Zt=i.getParameter(i.VIEWPORT),Me=new Ye().fromArray(N),zt=new Ye().fromArray(Zt);function et(Z,It,_t,Lt){let Dt=new Uint8Array(4),R=i.createTexture();i.bindTexture(Z,R),i.texParameteri(Z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let j=0;j<_t;j++)Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?i.texImage3D(It,0,i.RGBA,1,1,Lt,0,i.RGBA,i.UNSIGNED_BYTE,Dt):i.texImage2D(It+j,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Dt);return R}let xt={};xt[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),xt[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xt[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),l.setClear(1),a.setClear(0),Mt(i.DEPTH_TEST),l.setFunc(Es),ne(!1),me(Dl),Mt(i.CULL_FACE),jt(ci);function Mt(Z){m[Z]!==!0&&(i.enable(Z),m[Z]=!0)}function Ft(Z){m[Z]!==!1&&(i.disable(Z),m[Z]=!1)}function ee(Z,It){return f[Z]!==It?(i.bindFramebuffer(Z,It),f[Z]=It,Z===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=It),Z===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=It),!0):!1}function Ot(Z,It){let _t=S,Lt=!1;if(Z){_t=_.get(It),_t===void 0&&(_t=[],_.set(It,_t));let Dt=Z.textures;if(_t.length!==Dt.length||_t[0]!==i.COLOR_ATTACHMENT0){for(let R=0,j=Dt.length;R<j;R++)_t[R]=i.COLOR_ATTACHMENT0+R;_t.length=Dt.length,Lt=!0}}else _t[0]!==i.BACK&&(_t[0]=i.BACK,Lt=!0);Lt&&i.drawBuffers(_t)}function se(Z){return P!==Z?(i.useProgram(Z),P=Z,!0):!1}let oe={[is]:i.FUNC_ADD,[gh]:i.FUNC_SUBTRACT,[xh]:i.FUNC_REVERSE_SUBTRACT};oe[_h]=i.MIN,oe[yh]=i.MAX;let ue={[vh]:i.ZERO,[Mh]:i.ONE,[bh]:i.SRC_COLOR,[Ol]:i.SRC_ALPHA,[Ch]:i.SRC_ALPHA_SATURATE,[Eh]:i.DST_COLOR,[wh]:i.DST_ALPHA,[Sh]:i.ONE_MINUS_SRC_COLOR,[Bl]:i.ONE_MINUS_SRC_ALPHA,[Ah]:i.ONE_MINUS_DST_COLOR,[Th]:i.ONE_MINUS_DST_ALPHA,[Rh]:i.CONSTANT_COLOR,[Ih]:i.ONE_MINUS_CONSTANT_COLOR,[Ph]:i.CONSTANT_ALPHA,[Lh]:i.ONE_MINUS_CONSTANT_ALPHA};function jt(Z,It,_t,Lt,Dt,R,j,E,O,k){if(Z===ci){T===!0&&(Ft(i.BLEND),T=!1);return}if(T===!1&&(Mt(i.BLEND),T=!0),Z!==mh){if(Z!==d||k!==z){if((b!==is||c!==is)&&(i.blendEquation(i.FUNC_ADD),b=is,c=is),k)switch(Z){case zs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nl:i.blendFunc(i.ONE,i.ONE);break;case Ul:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ce("WebGLState: Invalid blending: ",Z);break}else switch(Z){case zs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ul:ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fl:ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ce("WebGLState: Invalid blending: ",Z);break}C=null,y=null,w=null,D=null,g.set(0,0,0),L=0,d=Z,z=k}return}Dt=Dt||It,R=R||_t,j=j||Lt,(It!==b||Dt!==c)&&(i.blendEquationSeparate(oe[It],oe[Dt]),b=It,c=Dt),(_t!==C||Lt!==y||R!==w||j!==D)&&(i.blendFuncSeparate(ue[_t],ue[Lt],ue[R],ue[j]),C=_t,y=Lt,w=R,D=j),(E.equals(g)===!1||O!==L)&&(i.blendColor(E.r,E.g,E.b,O),g.copy(E),L=O),d=Z,z=!1}function de(Z,It){Z.side===On?Ft(i.CULL_FACE):Mt(i.CULL_FACE);let _t=Z.side===vn;It&&(_t=!_t),ne(_t),Z.blending===zs&&Z.transparent===!1?jt(ci):jt(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),l.setFunc(Z.depthFunc),l.setTest(Z.depthTest),l.setMask(Z.depthWrite),r.setMask(Z.colorWrite);let Lt=Z.stencilWrite;a.setTest(Lt),Lt&&(a.setMask(Z.stencilWriteMask),a.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),a.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),Ze(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?Mt(i.SAMPLE_ALPHA_TO_COVERAGE):Ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function ne(Z){J!==Z&&(Z?i.frontFace(i.CW):i.frontFace(i.CCW),J=Z)}function me(Z){Z!==dh?(Mt(i.CULL_FACE),Z!==q&&(Z===Dl?i.cullFace(i.BACK):Z===fh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ft(i.CULL_FACE),q=Z}function Se(Z){Z!==nt&&(ut&&i.lineWidth(Z),nt=Z)}function Ze(Z,It,_t){Z?(Mt(i.POLYGON_OFFSET_FILL),(W!==It||Q!==_t)&&(W=It,Q=_t,l.getReversed()&&(It=-It),i.polygonOffset(It,_t))):Ft(i.POLYGON_OFFSET_FILL)}function fe(Z){Z?Mt(i.SCISSOR_TEST):Ft(i.SCISSOR_TEST)}function Pe(Z){Z===void 0&&(Z=i.TEXTURE0+dt-1),ft!==Z&&(i.activeTexture(Z),ft=Z)}function K(Z,It,_t){_t===void 0&&(ft===null?_t=i.TEXTURE0+dt-1:_t=ft);let Lt=it[_t];Lt===void 0&&(Lt={type:void 0,texture:void 0},it[_t]=Lt),(Lt.type!==Z||Lt.texture!==It)&&(ft!==_t&&(i.activeTexture(_t),ft=_t),i.bindTexture(Z,It||xt[Z]),Lt.type=Z,Lt.texture=It)}function xe(){let Z=it[ft];Z!==void 0&&Z.type!==void 0&&(i.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function we(){try{i.compressedTexImage2D(...arguments)}catch(Z){ce("WebGLState:",Z)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(Z){ce("WebGLState:",Z)}}function M(){try{i.texSubImage2D(...arguments)}catch(Z){ce("WebGLState:",Z)}}function B(){try{i.texSubImage3D(...arguments)}catch(Z){ce("WebGLState:",Z)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(Z){ce("WebGLState:",Z)}}function Y(){try{i.compressedTexSubImage3D(...arguments)}catch(Z){ce("WebGLState:",Z)}}function vt(){try{i.texStorage2D(...arguments)}catch(Z){ce("WebGLState:",Z)}}function wt(){try{i.texStorage3D(...arguments)}catch(Z){ce("WebGLState:",Z)}}function at(){try{i.texImage2D(...arguments)}catch(Z){ce("WebGLState:",Z)}}function ct(){try{i.texImage3D(...arguments)}catch(Z){ce("WebGLState:",Z)}}function Et(Z){return x[Z]!==void 0?x[Z]:i.getParameter(Z)}function Gt(Z,It){x[Z]!==It&&(i.pixelStorei(Z,It),x[Z]=It)}function Ct(Z){Me.equals(Z)===!1&&(i.scissor(Z.x,Z.y,Z.z,Z.w),Me.copy(Z))}function Pt(Z){zt.equals(Z)===!1&&(i.viewport(Z.x,Z.y,Z.z,Z.w),zt.copy(Z))}function Ht(Z,It){let _t=u.get(It);_t===void 0&&(_t=new WeakMap,u.set(It,_t));let Lt=_t.get(Z);Lt===void 0&&(Lt=i.getUniformBlockIndex(It,Z.name),_t.set(Z,Lt))}function Qt(Z,It){let Lt=u.get(It).get(Z);h.get(It)!==Lt&&(i.uniformBlockBinding(It,Lt,Z.__bindingPointIndex),h.set(It,Lt))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),l.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),m={},x={},ft=null,it={},f={},_=new WeakMap,S=[],P=null,T=!1,d=null,b=null,C=null,y=null,c=null,w=null,D=null,g=new ye(0,0,0),L=0,z=!1,J=null,q=null,nt=null,W=null,Q=null,Me.set(0,0,i.canvas.width,i.canvas.height),zt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),l.reset(),a.reset()}return{buffers:{color:r,depth:l,stencil:a},enable:Mt,disable:Ft,bindFramebuffer:ee,drawBuffers:Ot,useProgram:se,setBlending:jt,setMaterial:de,setFlipSided:ne,setCullFace:me,setLineWidth:Se,setPolygonOffset:Ze,setScissorTest:fe,activeTexture:Pe,bindTexture:K,unbindTexture:xe,compressedTexImage2D:we,compressedTexImage3D:F,texImage2D:at,texImage3D:ct,pixelStorei:Gt,getParameter:Et,updateUBOMapping:Ht,uniformBlockBinding:Qt,texStorage2D:vt,texStorage3D:wt,texSubImage2D:M,texSubImage3D:B,compressedTexSubImage2D:V,compressedTexSubImage3D:Y,scissor:Ct,viewport:Pt,reset:re}}function sg(i,t,e,n,s,r,l){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ee,m=new WeakMap,x=new Set,f,_=new WeakMap,S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(F,M){return S?new OffscreenCanvas(F,M):lr("canvas")}function T(F,M,B){let V=1,Y=we(F);if((Y.width>B||Y.height>B)&&(V=B/Math.max(Y.width,Y.height)),V<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){let vt=Math.floor(V*Y.width),wt=Math.floor(V*Y.height);f===void 0&&(f=P(vt,wt));let at=M?P(vt,wt):f;return at.width=vt,at.height=wt,at.getContext("2d").drawImage(F,0,0,vt,wt),he("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+vt+"x"+wt+")."),at}else return"data"in F&&he("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),F;return F}function d(F){return F.generateMipmaps}function b(F){i.generateMipmap(F)}function C(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(F,M,B,V,Y,vt=!1){if(F!==null){if(i[F]!==void 0)return i[F];he("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let wt;V&&(wt=t.get("EXT_texture_norm16"),wt||he("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let at=M;if(M===i.RED&&(B===i.FLOAT&&(at=i.R32F),B===i.HALF_FLOAT&&(at=i.R16F),B===i.UNSIGNED_BYTE&&(at=i.R8),B===i.UNSIGNED_SHORT&&wt&&(at=wt.R16_EXT),B===i.SHORT&&wt&&(at=wt.R16_SNORM_EXT)),M===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(at=i.R8UI),B===i.UNSIGNED_SHORT&&(at=i.R16UI),B===i.UNSIGNED_INT&&(at=i.R32UI),B===i.BYTE&&(at=i.R8I),B===i.SHORT&&(at=i.R16I),B===i.INT&&(at=i.R32I)),M===i.RG&&(B===i.FLOAT&&(at=i.RG32F),B===i.HALF_FLOAT&&(at=i.RG16F),B===i.UNSIGNED_BYTE&&(at=i.RG8),B===i.UNSIGNED_SHORT&&wt&&(at=wt.RG16_EXT),B===i.SHORT&&wt&&(at=wt.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(at=i.RG8UI),B===i.UNSIGNED_SHORT&&(at=i.RG16UI),B===i.UNSIGNED_INT&&(at=i.RG32UI),B===i.BYTE&&(at=i.RG8I),B===i.SHORT&&(at=i.RG16I),B===i.INT&&(at=i.RG32I)),M===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(at=i.RGB8UI),B===i.UNSIGNED_SHORT&&(at=i.RGB16UI),B===i.UNSIGNED_INT&&(at=i.RGB32UI),B===i.BYTE&&(at=i.RGB8I),B===i.SHORT&&(at=i.RGB16I),B===i.INT&&(at=i.RGB32I)),M===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(at=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(at=i.RGBA16UI),B===i.UNSIGNED_INT&&(at=i.RGBA32UI),B===i.BYTE&&(at=i.RGBA8I),B===i.SHORT&&(at=i.RGBA16I),B===i.INT&&(at=i.RGBA32I)),M===i.RGB&&(B===i.UNSIGNED_SHORT&&wt&&(at=wt.RGB16_EXT),B===i.SHORT&&wt&&(at=wt.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(at=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(at=i.R11F_G11F_B10F)),M===i.RGBA){let ct=vt?or:Ae.getTransfer(Y);B===i.FLOAT&&(at=i.RGBA32F),B===i.HALF_FLOAT&&(at=i.RGBA16F),B===i.UNSIGNED_BYTE&&(at=ct===Oe?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&wt&&(at=wt.RGBA16_EXT),B===i.SHORT&&wt&&(at=wt.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(at=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(at=i.RGB5_A1)}return(at===i.R16F||at===i.R32F||at===i.RG16F||at===i.RG32F||at===i.RGBA16F||at===i.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function c(F,M){let B;return F?M===null||M===Qn||M===Vs?B=i.DEPTH24_STENCIL8:M===Hn?B=i.DEPTH32F_STENCIL8:M===ks&&(B=i.DEPTH24_STENCIL8,he("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Qn||M===Vs?B=i.DEPTH_COMPONENT24:M===Hn?B=i.DEPTH_COMPONENT32F:M===ks&&(B=i.DEPTH_COMPONENT16),B}function w(F,M){return d(F)===!0||F.isFramebufferTexture&&F.minFilter!==cn&&F.minFilter!==en?Math.log2(Math.max(M.width,M.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?M.mipmaps.length:1}function D(F){let M=F.target;M.removeEventListener("dispose",D),L(M),M.isVideoTexture&&m.delete(M),M.isHTMLTexture&&x.delete(M)}function g(F){let M=F.target;M.removeEventListener("dispose",g),J(M)}function L(F){let M=n.get(F);if(M.__webglInit===void 0)return;let B=F.source,V=_.get(B);if(V){let Y=V[M.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&z(F),Object.keys(V).length===0&&_.delete(B)}n.remove(F)}function z(F){let M=n.get(F);i.deleteTexture(M.__webglTexture);let B=F.source,V=_.get(B);delete V[M.__cacheKey],l.memory.textures--}function J(F){let M=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(M.__webglFramebuffer[V]))for(let Y=0;Y<M.__webglFramebuffer[V].length;Y++)i.deleteFramebuffer(M.__webglFramebuffer[V][Y]);else i.deleteFramebuffer(M.__webglFramebuffer[V]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[V])}else{if(Array.isArray(M.__webglFramebuffer))for(let V=0;V<M.__webglFramebuffer.length;V++)i.deleteFramebuffer(M.__webglFramebuffer[V]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let V=0;V<M.__webglColorRenderbuffer.length;V++)M.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[V]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let B=F.textures;for(let V=0,Y=B.length;V<Y;V++){let vt=n.get(B[V]);vt.__webglTexture&&(i.deleteTexture(vt.__webglTexture),l.memory.textures--),n.remove(B[V])}n.remove(F)}let q=0;function nt(){q=0}function W(){return q}function Q(F){q=F}function dt(){let F=q;return F>=s.maxTextures&&he("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,F}function ut(F){let M=[];return M.push(F.wrapS),M.push(F.wrapT),M.push(F.wrapR||0),M.push(F.magFilter),M.push(F.minFilter),M.push(F.anisotropy),M.push(F.internalFormat),M.push(F.format),M.push(F.type),M.push(F.generateMipmaps),M.push(F.premultiplyAlpha),M.push(F.flipY),M.push(F.unpackAlignment),M.push(F.colorSpace),M.join()}function yt(F,M){let B=n.get(F);if(F.isVideoTexture&&K(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&B.__version!==F.version){let V=F.image;if(V===null)he("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)he("WebGLRenderer: Texture marked for update but image is incomplete");else{Ft(B,F,M);return}}else F.isExternalTexture&&(B.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+M)}function mt(F,M){let B=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&B.__version!==F.version){Ft(B,F,M);return}else F.isExternalTexture&&(B.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+M)}function ft(F,M){let B=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&B.__version!==F.version){Ft(B,F,M);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+M)}function it(F,M){let B=n.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&B.__version!==F.version){ee(B,F,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+M)}let N={[As]:i.REPEAT,[si]:i.CLAMP_TO_EDGE,[Aa]:i.MIRRORED_REPEAT},Zt={[cn]:i.NEAREST,[Uh]:i.NEAREST_MIPMAP_NEAREST,[Lr]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[Ka]:i.LINEAR_MIPMAP_NEAREST,[hi]:i.LINEAR_MIPMAP_LINEAR},Me={[zh]:i.NEVER,[Wh]:i.ALWAYS,[kh]:i.LESS,[Oo]:i.LEQUAL,[Vh]:i.EQUAL,[Bo]:i.GEQUAL,[Gh]:i.GREATER,[Hh]:i.NOTEQUAL};function zt(F,M){if(M.type===Hn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===en||M.magFilter===Ka||M.magFilter===Lr||M.magFilter===hi||M.minFilter===en||M.minFilter===Ka||M.minFilter===Lr||M.minFilter===hi)&&he("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,N[M.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,N[M.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,N[M.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,Zt[M.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,Zt[M.minFilter]),M.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,Me[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===cn||M.minFilter!==Lr&&M.minFilter!==hi||M.type===Hn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(F,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function et(F,M){let B=!1;F.__webglInit===void 0&&(F.__webglInit=!0,M.addEventListener("dispose",D));let V=M.source,Y=_.get(V);Y===void 0&&(Y={},_.set(V,Y));let vt=ut(M);if(vt!==F.__cacheKey){Y[vt]===void 0&&(Y[vt]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,B=!0),Y[vt].usedTimes++;let wt=Y[F.__cacheKey];wt!==void 0&&(Y[F.__cacheKey].usedTimes--,wt.usedTimes===0&&z(M)),F.__cacheKey=vt,F.__webglTexture=Y[vt].texture}return B}function xt(F,M,B){return Math.floor(Math.floor(F/B)/M)}function Mt(F,M,B,V){let vt=F.updateRanges;if(vt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,B,V,M.data);else{vt.sort((Gt,Ct)=>Gt.start-Ct.start);let wt=0;for(let Gt=1;Gt<vt.length;Gt++){let Ct=vt[wt],Pt=vt[Gt],Ht=Ct.start+Ct.count,Qt=xt(Pt.start,M.width,4),re=xt(Ct.start,M.width,4);Pt.start<=Ht+1&&Qt===re&&xt(Pt.start+Pt.count-1,M.width,4)===Qt?Ct.count=Math.max(Ct.count,Pt.start+Pt.count-Ct.start):(++wt,vt[wt]=Pt)}vt.length=wt+1;let at=e.getParameter(i.UNPACK_ROW_LENGTH),ct=e.getParameter(i.UNPACK_SKIP_PIXELS),Et=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let Gt=0,Ct=vt.length;Gt<Ct;Gt++){let Pt=vt[Gt],Ht=Math.floor(Pt.start/4),Qt=Math.ceil(Pt.count/4),re=Ht%M.width,Z=Math.floor(Ht/M.width),It=Qt,_t=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,re),e.pixelStorei(i.UNPACK_SKIP_ROWS,Z),e.texSubImage2D(i.TEXTURE_2D,0,re,Z,It,_t,B,V,M.data)}F.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,at),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ct),e.pixelStorei(i.UNPACK_SKIP_ROWS,Et)}}function Ft(F,M,B){let V=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(V=i.TEXTURE_3D);let Y=et(F,M),vt=M.source;e.bindTexture(V,F.__webglTexture,i.TEXTURE0+B);let wt=n.get(vt);if(vt.version!==wt.__version||Y===!0){if(e.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let _t=Ae.getPrimaries(Ae.workingColorSpace),Lt=M.colorSpace===wi?null:Ae.getPrimaries(M.colorSpace),Dt=M.colorSpace===wi||_t===Lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt)}e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let ct=T(M.image,!1,s.maxTextureSize);ct=xe(M,ct);let Et=r.convert(M.format,M.colorSpace),Gt=r.convert(M.type),Ct=y(M.internalFormat,Et,Gt,M.normalized,M.colorSpace,M.isVideoTexture);zt(V,M);let Pt,Ht=M.mipmaps,Qt=M.isVideoTexture!==!0,re=wt.__version===void 0||Y===!0,Z=vt.dataReady,It=w(M,ct);if(M.isDepthTexture)Ct=c(M.format===Hi,M.type),re&&(Qt?e.texStorage2D(i.TEXTURE_2D,1,Ct,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,Ct,ct.width,ct.height,0,Et,Gt,null));else if(M.isDataTexture)if(Ht.length>0){Qt&&re&&e.texStorage2D(i.TEXTURE_2D,It,Ct,Ht[0].width,Ht[0].height);for(let _t=0,Lt=Ht.length;_t<Lt;_t++)Pt=Ht[_t],Qt?Z&&e.texSubImage2D(i.TEXTURE_2D,_t,0,0,Pt.width,Pt.height,Et,Gt,Pt.data):e.texImage2D(i.TEXTURE_2D,_t,Ct,Pt.width,Pt.height,0,Et,Gt,Pt.data);M.generateMipmaps=!1}else Qt?(re&&e.texStorage2D(i.TEXTURE_2D,It,Ct,ct.width,ct.height),Z&&Mt(M,ct,Et,Gt)):e.texImage2D(i.TEXTURE_2D,0,Ct,ct.width,ct.height,0,Et,Gt,ct.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Qt&&re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,Ct,Ht[0].width,Ht[0].height,ct.depth);for(let _t=0,Lt=Ht.length;_t<Lt;_t++)if(Pt=Ht[_t],M.format!==Wn)if(Et!==null)if(Qt){if(Z)if(M.layerUpdates.size>0){let Dt=sc(Pt.width,Pt.height,M.format,M.type);for(let R of M.layerUpdates){let j=Pt.data.subarray(R*Dt/Pt.data.BYTES_PER_ELEMENT,(R+1)*Dt/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_t,0,0,R,Pt.width,Pt.height,1,Et,j)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_t,0,0,0,Pt.width,Pt.height,ct.depth,Et,Pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,_t,Ct,Pt.width,Pt.height,ct.depth,0,Pt.data,0,0);else he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?Z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,_t,0,0,0,Pt.width,Pt.height,ct.depth,Et,Gt,Pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,_t,Ct,Pt.width,Pt.height,ct.depth,0,Et,Gt,Pt.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Qt&&re&&e.texStorage2D(i.TEXTURE_2D,It,Ct,Ht[0].width,Ht[0].height);for(let _t=0,Lt=Ht.length;_t<Lt;_t++)Pt=Ht[_t],M.format!==Wn?Et!==null?Qt?Z&&e.compressedTexSubImage2D(i.TEXTURE_2D,_t,0,0,Pt.width,Pt.height,Et,Pt.data):e.compressedTexImage2D(i.TEXTURE_2D,_t,Ct,Pt.width,Pt.height,0,Pt.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?Z&&e.texSubImage2D(i.TEXTURE_2D,_t,0,0,Pt.width,Pt.height,Et,Gt,Pt.data):e.texImage2D(i.TEXTURE_2D,_t,Ct,Pt.width,Pt.height,0,Et,Gt,Pt.data)}else if(M.isDataArrayTexture)if(Qt){if(re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,Ct,ct.width,ct.height,ct.depth),Z)if(M.layerUpdates.size>0){let _t=sc(ct.width,ct.height,M.format,M.type);for(let Lt of M.layerUpdates){let Dt=ct.data.subarray(Lt*_t/ct.data.BYTES_PER_ELEMENT,(Lt+1)*_t/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Lt,ct.width,ct.height,1,Et,Gt,Dt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,Et,Gt,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ct,ct.width,ct.height,ct.depth,0,Et,Gt,ct.data);else if(M.isData3DTexture)Qt?(re&&e.texStorage3D(i.TEXTURE_3D,It,Ct,ct.width,ct.height,ct.depth),Z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,Et,Gt,ct.data)):e.texImage3D(i.TEXTURE_3D,0,Ct,ct.width,ct.height,ct.depth,0,Et,Gt,ct.data);else if(M.isFramebufferTexture){if(re)if(Qt)e.texStorage2D(i.TEXTURE_2D,It,Ct,ct.width,ct.height);else{let _t=ct.width,Lt=ct.height;for(let Dt=0;Dt<It;Dt++)e.texImage2D(i.TEXTURE_2D,Dt,Ct,_t,Lt,0,Et,Gt,null),_t>>=1,Lt>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let _t=i.canvas;if(_t.hasAttribute("layoutsubtree")||_t.setAttribute("layoutsubtree","true"),ct.parentNode!==_t){_t.appendChild(ct),x.add(M),_t.onpaint=Lt=>{let Dt=Lt.changedElements;for(let R of x)Dt.includes(R.image)&&(R.needsUpdate=!0)},_t.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ct);else{let Dt=i.RGBA,R=i.RGBA,j=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Dt,R,j,ct)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ht.length>0){if(Qt&&re){let _t=we(Ht[0]);e.texStorage2D(i.TEXTURE_2D,It,Ct,_t.width,_t.height)}for(let _t=0,Lt=Ht.length;_t<Lt;_t++)Pt=Ht[_t],Qt?Z&&e.texSubImage2D(i.TEXTURE_2D,_t,0,0,Et,Gt,Pt):e.texImage2D(i.TEXTURE_2D,_t,Ct,Et,Gt,Pt);M.generateMipmaps=!1}else if(Qt){if(re){let _t=we(ct);e.texStorage2D(i.TEXTURE_2D,It,Ct,_t.width,_t.height)}Z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,Gt,ct)}else e.texImage2D(i.TEXTURE_2D,0,Ct,Et,Gt,ct);d(M)&&b(V),wt.__version=vt.version,M.onUpdate&&M.onUpdate(M)}F.__version=M.version}function ee(F,M,B){if(M.image.length!==6)return;let V=et(F,M),Y=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+B);let vt=n.get(Y);if(Y.version!==vt.__version||V===!0){e.activeTexture(i.TEXTURE0+B);let wt=Ae.getPrimaries(Ae.workingColorSpace),at=M.colorSpace===wi?null:Ae.getPrimaries(M.colorSpace),ct=M.colorSpace===wi||wt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let Et=M.isCompressedTexture||M.image[0].isCompressedTexture,Gt=M.image[0]&&M.image[0].isDataTexture,Ct=[];for(let R=0;R<6;R++)!Et&&!Gt?Ct[R]=T(M.image[R],!0,s.maxCubemapSize):Ct[R]=Gt?M.image[R].image:M.image[R],Ct[R]=xe(M,Ct[R]);let Pt=Ct[0],Ht=r.convert(M.format,M.colorSpace),Qt=r.convert(M.type),re=y(M.internalFormat,Ht,Qt,M.normalized,M.colorSpace),Z=M.isVideoTexture!==!0,It=vt.__version===void 0||V===!0,_t=Y.dataReady,Lt=w(M,Pt);zt(i.TEXTURE_CUBE_MAP,M);let Dt;if(Et){Z&&It&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,re,Pt.width,Pt.height);for(let R=0;R<6;R++){Dt=Ct[R].mipmaps;for(let j=0;j<Dt.length;j++){let E=Dt[j];M.format!==Wn?Ht!==null?Z?_t&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,j,0,0,E.width,E.height,Ht,E.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,j,re,E.width,E.height,0,E.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,j,0,0,E.width,E.height,Ht,Qt,E.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,j,re,E.width,E.height,0,Ht,Qt,E.data)}}}else{if(Dt=M.mipmaps,Z&&It){Dt.length>0&&Lt++;let R=we(Ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,re,R.width,R.height)}for(let R=0;R<6;R++)if(Gt){Z?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,Ct[R].width,Ct[R].height,Ht,Qt,Ct[R].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,re,Ct[R].width,Ct[R].height,0,Ht,Qt,Ct[R].data);for(let j=0;j<Dt.length;j++){let O=Dt[j].image[R].image;Z?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,j+1,0,0,O.width,O.height,Ht,Qt,O.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,j+1,re,O.width,O.height,0,Ht,Qt,O.data)}}else{Z?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,Ht,Qt,Ct[R]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,re,Ht,Qt,Ct[R]);for(let j=0;j<Dt.length;j++){let E=Dt[j];Z?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,j+1,0,0,Ht,Qt,E.image[R]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,j+1,re,Ht,Qt,E.image[R])}}}d(M)&&b(i.TEXTURE_CUBE_MAP),vt.__version=Y.version,M.onUpdate&&M.onUpdate(M)}F.__version=M.version}function Ot(F,M,B,V,Y,vt){let wt=r.convert(B.format,B.colorSpace),at=r.convert(B.type),ct=y(B.internalFormat,wt,at,B.normalized,B.colorSpace),Et=n.get(M),Gt=n.get(B);if(Gt.__renderTarget=M,!Et.__hasExternalTextures){let Ct=Math.max(1,M.width>>vt),Pt=Math.max(1,M.height>>vt);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?e.texImage3D(Y,vt,ct,Ct,Pt,M.depth,0,wt,at,null):e.texImage2D(Y,vt,ct,Ct,Pt,0,wt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,F),Pe(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,Y,Gt.__webglTexture,0,fe(M)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,Y,Gt.__webglTexture,vt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function se(F,M,B){if(i.bindRenderbuffer(i.RENDERBUFFER,F),M.depthBuffer){let V=M.depthTexture,Y=V&&V.isDepthTexture?V.type:null,vt=c(M.stencilBuffer,Y),wt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Pe(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe(M),vt,M.width,M.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe(M),vt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,vt,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,F)}else{let V=M.textures;for(let Y=0;Y<V.length;Y++){let vt=V[Y],wt=r.convert(vt.format,vt.colorSpace),at=r.convert(vt.type),ct=y(vt.internalFormat,wt,at,vt.normalized,vt.colorSpace);Pe(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe(M),ct,M.width,M.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe(M),ct,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ct,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function oe(F,M,B){let V=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,F),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=n.get(M.depthTexture);if(Y.__renderTarget=M,(!Y.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),V){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,M.depthTexture.addEventListener("dispose",D)),Y.__webglTexture===void 0){Y.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),zt(i.TEXTURE_CUBE_MAP,M.depthTexture);let Et=r.convert(M.depthTexture.format),Gt=r.convert(M.depthTexture.type),Ct;M.depthTexture.format===ri?Ct=i.DEPTH_COMPONENT24:M.depthTexture.format===Hi&&(Ct=i.DEPTH24_STENCIL8);for(let Pt=0;Pt<6;Pt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,Ct,M.width,M.height,0,Et,Gt,null)}}else yt(M.depthTexture,0);let vt=Y.__webglTexture,wt=fe(M),at=V?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,ct=M.depthTexture.format===Hi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===ri)Pe(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,at,vt,0,wt):i.framebufferTexture2D(i.FRAMEBUFFER,ct,at,vt,0);else if(M.depthTexture.format===Hi)Pe(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,at,vt,0,wt):i.framebufferTexture2D(i.FRAMEBUFFER,ct,at,vt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ue(F){let M=n.get(F),B=F.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==F.depthTexture){let V=F.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),V){let Y=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,V.removeEventListener("dispose",Y)};V.addEventListener("dispose",Y),M.__depthDisposeCallback=Y}M.__boundDepthTexture=V}if(F.depthTexture&&!M.__autoAllocateDepthBuffer)if(B)for(let V=0;V<6;V++)oe(M.__webglFramebuffer[V],F,V);else{let V=F.texture.mipmaps;V&&V.length>0?oe(M.__webglFramebuffer[0],F,0):oe(M.__webglFramebuffer,F,0)}else if(B){M.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[V]),M.__webglDepthbuffer[V]===void 0)M.__webglDepthbuffer[V]=i.createRenderbuffer(),se(M.__webglDepthbuffer[V],F,!1);else{let Y=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=M.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,vt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,vt)}}else{let V=F.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),se(M.__webglDepthbuffer,F,!1);else{let Y=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,vt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,vt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function jt(F,M,B){let V=n.get(F);M!==void 0&&Ot(V.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&ue(F)}function de(F){let M=F.texture,B=n.get(F),V=n.get(M);F.addEventListener("dispose",g);let Y=F.textures,vt=F.isWebGLCubeRenderTarget===!0,wt=Y.length>1;if(wt||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=M.version,l.memory.textures++),vt){B.__webglFramebuffer=[];for(let at=0;at<6;at++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[at]=[];for(let ct=0;ct<M.mipmaps.length;ct++)B.__webglFramebuffer[at][ct]=i.createFramebuffer()}else B.__webglFramebuffer[at]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let at=0;at<M.mipmaps.length;at++)B.__webglFramebuffer[at]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(wt)for(let at=0,ct=Y.length;at<ct;at++){let Et=n.get(Y[at]);Et.__webglTexture===void 0&&(Et.__webglTexture=i.createTexture(),l.memory.textures++)}if(F.samples>0&&Pe(F)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let at=0;at<Y.length;at++){let ct=Y[at];B.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[at]);let Et=r.convert(ct.format,ct.colorSpace),Gt=r.convert(ct.type),Ct=y(ct.internalFormat,Et,Gt,ct.normalized,ct.colorSpace,F.isXRRenderTarget===!0),Pt=fe(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,Ct,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,B.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),se(B.__webglDepthRenderbuffer,F,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(vt){e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),zt(i.TEXTURE_CUBE_MAP,M);for(let at=0;at<6;at++)if(M.mipmaps&&M.mipmaps.length>0)for(let ct=0;ct<M.mipmaps.length;ct++)Ot(B.__webglFramebuffer[at][ct],F,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,ct);else Ot(B.__webglFramebuffer[at],F,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);d(M)&&b(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let at=0,ct=Y.length;at<ct;at++){let Et=Y[at],Gt=n.get(Et),Ct=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ct=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Ct,Gt.__webglTexture),zt(Ct,Et),Ot(B.__webglFramebuffer,F,Et,i.COLOR_ATTACHMENT0+at,Ct,0),d(Et)&&b(Ct)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(at=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,V.__webglTexture),zt(at,M),M.mipmaps&&M.mipmaps.length>0)for(let ct=0;ct<M.mipmaps.length;ct++)Ot(B.__webglFramebuffer[ct],F,M,i.COLOR_ATTACHMENT0,at,ct);else Ot(B.__webglFramebuffer,F,M,i.COLOR_ATTACHMENT0,at,0);d(M)&&b(at),e.unbindTexture()}F.depthBuffer&&ue(F)}function ne(F){let M=F.textures;for(let B=0,V=M.length;B<V;B++){let Y=M[B];if(d(Y)){let vt=C(F),wt=n.get(Y).__webglTexture;e.bindTexture(vt,wt),b(vt),e.unbindTexture()}}}let me=[],Se=[];function Ze(F){if(F.samples>0){if(Pe(F)===!1){let M=F.textures,B=F.width,V=F.height,Y=i.COLOR_BUFFER_BIT,vt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(F),at=M.length>1;if(at)for(let Et=0;Et<M.length;Et++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);let ct=F.texture.mipmaps;ct&&ct.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Et=0;Et<M.length;Et++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[Et]);let Gt=n.get(M[Et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,B,V,0,0,B,V,Y,i.NEAREST),h===!0&&(me.length=0,Se.length=0,me.push(i.COLOR_ATTACHMENT0+Et),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(me.push(vt),Se.push(vt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Se)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,me))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let Et=0;Et<M.length;Et++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,wt.__webglColorRenderbuffer[Et]);let Gt=n.get(M[Et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&h){let M=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function fe(F){return Math.min(s.maxSamples,F.samples)}function Pe(F){let M=n.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function K(F){let M=l.render.frame;m.get(F)!==M&&(m.set(F,M),F.update())}function xe(F,M){let B=F.colorSpace,V=F.format,Y=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||B!==ar&&B!==wi&&(Ae.getTransfer(B)===Oe?(V!==Wn||Y!==Cn)&&he("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ce("WebGLTextures: Unsupported texture color space:",B)),M}function we(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(u.width=F.naturalWidth||F.width,u.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(u.width=F.displayWidth,u.height=F.displayHeight):(u.width=F.width,u.height=F.height),u}this.allocateTextureUnit=dt,this.resetTextureUnits=nt,this.getTextureUnits=W,this.setTextureUnits=Q,this.setTexture2D=yt,this.setTexture2DArray=mt,this.setTexture3D=ft,this.setTextureCube=it,this.rebindTextures=jt,this.setupRenderTarget=de,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=Ot,this.useMultisampledRTT=Pe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function rg(i,t){function e(n,s=wi){let r,l=Ae.getTransfer(s);if(n===Cn)return i.UNSIGNED_BYTE;if(n===Qa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===to)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$l)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Yl)return i.BYTE;if(n===Zl)return i.SHORT;if(n===ks)return i.UNSIGNED_SHORT;if(n===ja)return i.INT;if(n===Qn)return i.UNSIGNED_INT;if(n===Hn)return i.FLOAT;if(n===ti)return i.HALF_FLOAT;if(n===Kl)return i.ALPHA;if(n===jl)return i.RGB;if(n===Wn)return i.RGBA;if(n===ri)return i.DEPTH_COMPONENT;if(n===Hi)return i.DEPTH_STENCIL;if(n===eo)return i.RED;if(n===no)return i.RED_INTEGER;if(n===Wi)return i.RG;if(n===io)return i.RG_INTEGER;if(n===so)return i.RGBA_INTEGER;if(n===Dr||n===Nr||n===Ur||n===Fr)if(l===Oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ro||n===ao||n===oo||n===lo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ro)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ao)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===oo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===lo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===co||n===ho||n===uo||n===fo||n===po||n===Or||n===mo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===co||n===ho)return l===Oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===uo)return l===Oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===fo)return r.COMPRESSED_R11_EAC;if(n===po)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Or)return r.COMPRESSED_RG11_EAC;if(n===mo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===go||n===xo||n===_o||n===yo||n===vo||n===Mo||n===bo||n===So||n===wo||n===To||n===Eo||n===Ao||n===Co||n===Ro)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===go)return l===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xo)return l===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_o)return l===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yo)return l===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vo)return l===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Mo)return l===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bo)return l===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===So)return l===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wo)return l===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===To)return l===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Eo)return l===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ao)return l===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Co)return l===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ro)return l===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Io||n===Po||n===Lo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Io)return l===Oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Po)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Lo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Do||n===No||n===Br||n===Uo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Do)return r.COMPRESSED_RED_RGTC1_EXT;if(n===No)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Br)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Uo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var ag=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,og=`
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

}`,Sc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Mr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Un({vertexShader:ag,fragmentShader:og,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new gn(new br(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wc=class extends ai{constructor(t,e){super();let n=this,s=null,r=1,l=null,a="local-floor",h=1,u=null,m=null,x=null,f=null,_=null,S=null,P=typeof XRWebGLBinding<"u",T=new Sc,d={},b=e.getContextAttributes(),C=null,y=null,c=[],w=[],D=new Ee,g=null,L=null,z=new pn;z.viewport=new Ye;let J=new pn;J.viewport=new Ye;let q=[z,J],nt=new Ya,W=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(xt){let Mt=c[xt];return Mt===void 0&&(Mt=new Ls,c[xt]=Mt),Mt.getTargetRaySpace()},this.getControllerGrip=function(xt){let Mt=c[xt];return Mt===void 0&&(Mt=new Ls,c[xt]=Mt),Mt.getGripSpace()},this.getHand=function(xt){let Mt=c[xt];return Mt===void 0&&(Mt=new Ls,c[xt]=Mt),Mt.getHandSpace()};function dt(xt){let Mt=w.indexOf(xt.inputSource);if(Mt===-1)return;let Ft=c[Mt];Ft!==void 0&&(Ft.update(xt.inputSource,xt.frame,u||l),Ft.dispatchEvent({type:xt.type,data:xt.inputSource}))}function ut(){s.removeEventListener("select",dt),s.removeEventListener("selectstart",dt),s.removeEventListener("selectend",dt),s.removeEventListener("squeeze",dt),s.removeEventListener("squeezestart",dt),s.removeEventListener("squeezeend",dt),s.removeEventListener("end",ut),s.removeEventListener("inputsourceschange",yt);for(let xt=0;xt<c.length;xt++){let Mt=w[xt];Mt!==null&&(w[xt]=null,c[xt].disconnect(Mt))}W=null,Q=null,T.reset();for(let xt in d)delete d[xt];if(t.setRenderTarget(C),_=null,f=null,x=null,s=null,y=null,et.stop(),n.isPresenting=!1,t.setPixelRatio(g),t.setSize(D.width,D.height,!1),L!==null){let xt=L.camera;xt.fov=L.fov,xt.zoom=L.zoom,xt.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(xt){r=xt,n.isPresenting===!0&&he("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(xt){a=xt,n.isPresenting===!0&&he("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||l},this.setReferenceSpace=function(xt){u=xt},this.getBaseLayer=function(){return f!==null?f:_},this.getBinding=function(){return x===null&&P&&(x=new XRWebGLBinding(s,e)),x},this.getFrame=function(){return S},this.getSession=function(){return s},this.setSession=async function(xt){if(s=xt,s!==null){if(C=t.getRenderTarget(),s.addEventListener("select",dt),s.addEventListener("selectstart",dt),s.addEventListener("selectend",dt),s.addEventListener("squeeze",dt),s.addEventListener("squeezestart",dt),s.addEventListener("squeezeend",dt),s.addEventListener("end",ut),s.addEventListener("inputsourceschange",yt),b.xrCompatible!==!0&&await e.makeXRCompatible(),g=t.getPixelRatio(),t.getSize(D),P&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ft=null,ee=null,Ot=null;b.depth&&(Ot=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ft=b.stencil?Hi:ri,ee=b.stencil?Vs:Qn);let se={colorFormat:e.RGBA8,depthFormat:Ot,scaleFactor:r};x=this.getBinding(),f=x.createProjectionLayer(se),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new An(f.textureWidth,f.textureHeight,{format:Wn,type:Cn,depthTexture:new Oi(f.textureWidth,f.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,Ft),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Ft={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};_=new XRWebGLLayer(s,e,Ft),s.updateRenderState({baseLayer:_}),t.setPixelRatio(1),t.setSize(_.framebufferWidth,_.framebufferHeight,!1),y=new An(_.framebufferWidth,_.framebufferHeight,{format:Wn,type:Cn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(h),u=null,l=await s.requestReferenceSpace(a),et.setContext(s),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function yt(xt){for(let Mt=0;Mt<xt.removed.length;Mt++){let Ft=xt.removed[Mt],ee=w.indexOf(Ft);ee>=0&&(w[ee]=null,c[ee].disconnect(Ft))}for(let Mt=0;Mt<xt.added.length;Mt++){let Ft=xt.added[Mt],ee=w.indexOf(Ft);if(ee===-1){for(let se=0;se<c.length;se++)if(se>=w.length){w.push(Ft),ee=se;break}else if(w[se]===null){w[se]=Ft,ee=se;break}if(ee===-1)break}let Ot=c[ee];Ot&&Ot.connect(Ft)}}let mt=new ht,ft=new ht;function it(xt,Mt,Ft){mt.setFromMatrixPosition(Mt.matrixWorld),ft.setFromMatrixPosition(Ft.matrixWorld);let ee=mt.distanceTo(ft),Ot=Mt.projectionMatrix.elements,se=Ft.projectionMatrix.elements,oe=Ot[14]/(Ot[10]-1),ue=Ot[14]/(Ot[10]+1),jt=(Ot[9]+1)/Ot[5],de=(Ot[9]-1)/Ot[5],ne=(Ot[8]-1)/Ot[0],me=(se[8]+1)/se[0],Se=oe*ne,Ze=oe*me,fe=ee/(-ne+me),Pe=fe*-ne;if(Mt.matrixWorld.decompose(xt.position,xt.quaternion,xt.scale),xt.translateX(Pe),xt.translateZ(fe),xt.matrixWorld.compose(xt.position,xt.quaternion,xt.scale),xt.matrixWorldInverse.copy(xt.matrixWorld).invert(),Ot[10]===-1)xt.projectionMatrix.copy(Mt.projectionMatrix),xt.projectionMatrixInverse.copy(Mt.projectionMatrixInverse);else{let K=oe+fe,xe=ue+fe,we=Se-Pe,F=Ze+(ee-Pe),M=jt*ue/xe*K,B=de*ue/xe*K;xt.projectionMatrix.makePerspective(we,F,M,B,K,xe),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert()}}function N(xt,Mt){Mt===null?xt.matrixWorld.copy(xt.matrix):xt.matrixWorld.multiplyMatrices(Mt.matrixWorld,xt.matrix),xt.matrixWorldInverse.copy(xt.matrixWorld).invert()}this.updateCamera=function(xt){if(s===null)return;let Mt=xt.near,Ft=xt.far;T.texture!==null&&(T.depthNear>0&&(Mt=T.depthNear),T.depthFar>0&&(Ft=T.depthFar)),nt.near=J.near=z.near=Mt,nt.far=J.far=z.far=Ft,(W!==nt.near||Q!==nt.far)&&(s.updateRenderState({depthNear:nt.near,depthFar:nt.far}),W=nt.near,Q=nt.far),nt.layers.mask=xt.layers.mask|6,z.layers.mask=nt.layers.mask&-5,J.layers.mask=nt.layers.mask&-3;let ee=xt.parent,Ot=nt.cameras;N(nt,ee);for(let se=0;se<Ot.length;se++)N(Ot[se],ee);Ot.length===2?it(nt,z,J):nt.projectionMatrix.copy(z.projectionMatrix),L===null&&xt.isPerspectiveCamera&&(L={camera:xt,fov:xt.fov,zoom:xt.zoom}),Zt(xt,nt,ee)};function Zt(xt,Mt,Ft){Ft===null?xt.matrix.copy(Mt.matrixWorld):(xt.matrix.copy(Ft.matrixWorld),xt.matrix.invert(),xt.matrix.multiply(Mt.matrixWorld)),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.updateMatrixWorld(!0),xt.projectionMatrix.copy(Mt.projectionMatrix),xt.projectionMatrixInverse.copy(Mt.projectionMatrixInverse),xt.isPerspectiveCamera&&(xt.fov=Ra*2*Math.atan(1/xt.projectionMatrix.elements[5]),xt.zoom=1)}this.getCamera=function(){return nt},this.getFoveation=function(){if(!(f===null&&_===null))return h},this.setFoveation=function(xt){h=xt,f!==null&&(f.fixedFoveation=xt),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=xt)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(nt)},this.getCameraTexture=function(xt){return d[xt]};let Me=null;function zt(xt,Mt){if(m=Mt.getViewerPose(u||l),S=Mt,m!==null){let Ft=m.views;_!==null&&(t.setRenderTargetFramebuffer(y,_.framebuffer),t.setRenderTarget(y));let ee=!1;Ft.length!==nt.cameras.length&&(nt.cameras.length=0,ee=!0);for(let ue=0;ue<Ft.length;ue++){let jt=Ft[ue],de=null;if(_!==null)de=_.getViewport(jt);else{let me=x.getViewSubImage(f,jt);de=me.viewport,ue===0&&(t.setRenderTargetTextures(y,me.colorTexture,me.depthStencilTexture),t.setRenderTarget(y))}let ne=q[ue];ne===void 0&&(ne=new pn,ne.layers.enable(ue),ne.viewport=new Ye,q[ue]=ne),ne.matrix.fromArray(jt.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(jt.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(de.x,de.y,de.width,de.height),ue===0&&(nt.matrix.copy(ne.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale)),ee===!0&&nt.cameras.push(ne)}let Ot=s.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&P){x=n.getBinding();let ue=x.getDepthInformation(Ft[0]);ue&&ue.isValid&&ue.texture&&T.init(ue,s.renderState)}if(Ot&&Ot.includes("camera-access")&&P){t.state.unbindTexture(),x=n.getBinding();for(let ue=0;ue<Ft.length;ue++){let jt=Ft[ue].camera;if(jt){let de=d[jt];de||(de=new Mr,d[jt]=de);let ne=x.getCameraImage(jt);de.sourceTexture=ne}}}}for(let Ft=0;Ft<c.length;Ft++){let ee=w[Ft],Ot=c[Ft];ee!==null&&Ot!==void 0&&Ot.update(ee,Mt,u||l)}Me&&Me(xt,Mt),Mt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Mt}),S=null}let et=new vu;et.setAnimationLoop(zt),this.setAnimationLoop=function(xt){Me=xt},this.dispose=function(){}}},lg=new De,Eu=new pe;Eu.set(-1,0,0,0,1,0,0,0,1);function cg(i,t){function e(T,d){T.matrixAutoUpdate===!0&&T.updateMatrix(),d.value.copy(T.matrix)}function n(T,d){d.color.getRGB(T.fogColor.value,ec(i)),d.isFog?(T.fogNear.value=d.near,T.fogFar.value=d.far):d.isFogExp2&&(T.fogDensity.value=d.density)}function s(T,d,b,C,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(T,d):d.isMeshLambertMaterial?(r(T,d),d.envMap&&(T.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(T,d),x(T,d)):d.isMeshPhongMaterial?(r(T,d),m(T,d),d.envMap&&(T.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(T,d),f(T,d),d.isMeshPhysicalMaterial&&_(T,d,y)):d.isMeshMatcapMaterial?(r(T,d),S(T,d)):d.isMeshDepthMaterial?r(T,d):d.isMeshDistanceMaterial?(r(T,d),P(T,d)):d.isMeshNormalMaterial?r(T,d):d.isLineBasicMaterial?(l(T,d),d.isLineDashedMaterial&&a(T,d)):d.isPointsMaterial?h(T,d,b,C):d.isSpriteMaterial?u(T,d):d.isShadowMaterial?(T.color.value.copy(d.color),T.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(T,d){T.opacity.value=d.opacity,d.color&&T.diffuse.value.copy(d.color),d.emissive&&T.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(T.map.value=d.map,e(d.map,T.mapTransform)),d.alphaMap&&(T.alphaMap.value=d.alphaMap,e(d.alphaMap,T.alphaMapTransform)),d.bumpMap&&(T.bumpMap.value=d.bumpMap,e(d.bumpMap,T.bumpMapTransform),T.bumpScale.value=d.bumpScale,d.side===vn&&(T.bumpScale.value*=-1)),d.normalMap&&(T.normalMap.value=d.normalMap,e(d.normalMap,T.normalMapTransform),T.normalScale.value.copy(d.normalScale),d.side===vn&&T.normalScale.value.negate()),d.displacementMap&&(T.displacementMap.value=d.displacementMap,e(d.displacementMap,T.displacementMapTransform),T.displacementScale.value=d.displacementScale,T.displacementBias.value=d.displacementBias),d.emissiveMap&&(T.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,T.emissiveMapTransform)),d.specularMap&&(T.specularMap.value=d.specularMap,e(d.specularMap,T.specularMapTransform)),d.alphaTest>0&&(T.alphaTest.value=d.alphaTest);let b=t.get(d),C=b.envMap,y=b.envMapRotation;C&&(T.envMap.value=C,T.envMapRotation.value.setFromMatrix4(lg.makeRotationFromEuler(y)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&T.envMapRotation.value.premultiply(Eu),T.reflectivity.value=d.reflectivity,T.ior.value=d.ior,T.refractionRatio.value=d.refractionRatio),d.lightMap&&(T.lightMap.value=d.lightMap,T.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,T.lightMapTransform)),d.aoMap&&(T.aoMap.value=d.aoMap,T.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,T.aoMapTransform))}function l(T,d){T.diffuse.value.copy(d.color),T.opacity.value=d.opacity,d.map&&(T.map.value=d.map,e(d.map,T.mapTransform))}function a(T,d){T.dashSize.value=d.dashSize,T.totalSize.value=d.dashSize+d.gapSize,T.scale.value=d.scale}function h(T,d,b,C){T.diffuse.value.copy(d.color),T.opacity.value=d.opacity,T.size.value=d.size*b,T.scale.value=C*.5,d.map&&(T.map.value=d.map,e(d.map,T.uvTransform)),d.alphaMap&&(T.alphaMap.value=d.alphaMap,e(d.alphaMap,T.alphaMapTransform)),d.alphaTest>0&&(T.alphaTest.value=d.alphaTest)}function u(T,d){T.diffuse.value.copy(d.color),T.opacity.value=d.opacity,T.rotation.value=d.rotation,d.map&&(T.map.value=d.map,e(d.map,T.mapTransform)),d.alphaMap&&(T.alphaMap.value=d.alphaMap,e(d.alphaMap,T.alphaMapTransform)),d.alphaTest>0&&(T.alphaTest.value=d.alphaTest)}function m(T,d){T.specular.value.copy(d.specular),T.shininess.value=Math.max(d.shininess,1e-4)}function x(T,d){d.gradientMap&&(T.gradientMap.value=d.gradientMap)}function f(T,d){T.metalness.value=d.metalness,d.metalnessMap&&(T.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,T.metalnessMapTransform)),T.roughness.value=d.roughness,d.roughnessMap&&(T.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,T.roughnessMapTransform)),d.envMap&&(T.envMapIntensity.value=d.envMapIntensity)}function _(T,d,b){T.ior.value=d.ior,d.sheen>0&&(T.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),T.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(T.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,T.sheenColorMapTransform)),d.sheenRoughnessMap&&(T.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,T.sheenRoughnessMapTransform))),d.clearcoat>0&&(T.clearcoat.value=d.clearcoat,T.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(T.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,T.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(T.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,T.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(T.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,T.clearcoatNormalMapTransform),T.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===vn&&T.clearcoatNormalScale.value.negate())),d.dispersion>0&&(T.dispersion.value=d.dispersion),d.retroreflectivity>0&&(T.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(T.iridescence.value=d.iridescence,T.iridescenceIOR.value=d.iridescenceIOR,T.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],T.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(T.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,T.iridescenceMapTransform)),d.iridescenceThicknessMap&&(T.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,T.iridescenceThicknessMapTransform))),d.transmission>0&&(T.transmission.value=d.transmission,T.transmissionSamplerMap.value=b.texture,T.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(T.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,T.transmissionMapTransform)),T.thickness.value=d.thickness,d.thicknessMap&&(T.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,T.thicknessMapTransform)),T.attenuationDistance.value=d.attenuationDistance,T.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(T.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(T.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,T.anisotropyMapTransform))),T.specularIntensity.value=d.specularIntensity,T.specularColor.value.copy(d.specularColor),d.specularColorMap&&(T.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,T.specularColorMapTransform)),d.specularIntensityMap&&(T.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,T.specularIntensityMapTransform))}function S(T,d){d.matcap&&(T.matcap.value=d.matcap)}function P(T,d){let b=t.get(d).light;T.referencePosition.value.setFromMatrixPosition(b.matrixWorld),T.nearDistance.value=b.shadow.camera.near,T.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function hg(i,t,e,n){let s={},r={},l=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(y,c){let w=c.program;n.uniformBlockBinding(y,w)}function u(y,c){let w=s[y.id];w===void 0&&(T(y),w=m(y),s[y.id]=w,y.addEventListener("dispose",b));let D=c.program;n.updateUBOMapping(y,D);let g=t.render.frame;r[y.id]!==g&&(f(y),r[y.id]=g)}function m(y){let c=x();y.__bindingPointIndex=c;let w=i.createBuffer(),D=y.__size,g=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,D,g),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,c,w),w}function x(){for(let y=0;y<a;y++)if(l.indexOf(y)===-1)return l.push(y),y;return ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let c=s[y.id],w=y.uniforms,D=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,c);for(let g=0,L=w.length;g<L;g++){let z=w[g];if(Array.isArray(z))for(let J=0,q=z.length;J<q;J++)_(z[J],g,J,D);else _(z,g,0,D)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(y,c,w,D){if(P(y,c,w,D)===!0){let g=y.__offset,L=y.value;if(Array.isArray(L)){let z=0;for(let J=0;J<L.length;J++){let q=L[J],nt=d(q);S(q,y.__data,z),typeof q!="number"&&typeof q!="boolean"&&!q.isMatrix3&&!ArrayBuffer.isView(q)&&(z+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}}else S(L,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,g,y.__data)}}function S(y,c,w){typeof y=="number"||typeof y=="boolean"?c[0]=y:y.isMatrix3?(c[0]=y.elements[0],c[1]=y.elements[1],c[2]=y.elements[2],c[3]=0,c[4]=y.elements[3],c[5]=y.elements[4],c[6]=y.elements[5],c[7]=0,c[8]=y.elements[6],c[9]=y.elements[7],c[10]=y.elements[8],c[11]=0):ArrayBuffer.isView(y)?c.set(new y.constructor(y.buffer,y.byteOffset,c.length)):y.toArray(c,w)}function P(y,c,w,D){let g=y.value,L=c+"_"+w;if(D[L]===void 0)return typeof g=="number"||typeof g=="boolean"?D[L]=g:ArrayBuffer.isView(g)?D[L]=g.slice():D[L]=g.clone(),!0;{let z=D[L];if(typeof g=="number"||typeof g=="boolean"){if(z!==g)return D[L]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(z.equals(g)===!1)return z.copy(g),!0}}return!1}function T(y){let c=y.uniforms,w=0,D=16;for(let L=0,z=c.length;L<z;L++){let J=Array.isArray(c[L])?c[L]:[c[L]];for(let q=0,nt=J.length;q<nt;q++){let W=J[q],Q=Array.isArray(W.value)?W.value:[W.value];for(let dt=0,ut=Q.length;dt<ut;dt++){let yt=Q[dt],mt=d(yt),ft=w%D,it=ft%mt.boundary,N=ft+it;w+=it,N!==0&&D-N<mt.storage&&(w+=D-N),W.__data=new Float32Array(mt.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=w,w+=mt.storage}}}let g=w%D;return g>0&&(w+=D-g),y.__size=w,y.__cache={},this}function d(y){let c={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(c.boundary=4,c.storage=4):y.isVector2?(c.boundary=8,c.storage=8):y.isVector3||y.isColor?(c.boundary=16,c.storage=12):y.isVector4?(c.boundary=16,c.storage=16):y.isMatrix3?(c.boundary=48,c.storage=48):y.isMatrix4?(c.boundary=64,c.storage=64):y.isTexture?he("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(c.boundary=16,c.storage=y.byteLength):he("WebGLRenderer: Unsupported uniform value type.",y),c}function b(y){let c=y.target;c.removeEventListener("dispose",b);let w=l.indexOf(c.__bindingPointIndex);l.splice(w,1),i.deleteBuffer(s[c.id]),delete s[c.id],delete r[c.id]}function C(){for(let y in s)i.deleteBuffer(s[y]);l=[],s={},r={}}return{bind:h,update:u,dispose:C}}var ug=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ui=null;function dg(){return ui===null&&(ui=new _r(ug,16,16,Wi,ti),ui.name="DFG_LUT",ui.minFilter=en,ui.magFilter=en,ui.wrapS=si,ui.wrapT=si,ui.generateMipmaps=!1,ui.needsUpdate=!0),ui}var Wo=class{constructor(t={}){let{canvas:e=Xh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:l=!1,antialias:a=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:u=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:f=!1,outputBufferType:_=Cn}=t;this.isWebGLRenderer=!0;let S;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=n.getContextAttributes().alpha}else S=l;let P=_,T=new Set([so,io,no]),d=new Set([Cn,Qn,ks,Vs,Qa,to]),b=new Uint32Array(4),C=new Int32Array(4),y=new ht,c=null,w=null,D=[],g=[],L=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let z=this,J=!1,q=null,nt=null,W=null,Q=null;this._outputColorSpace=un;let dt=0,ut=0,yt=null,mt=-1,ft=null,it=new Ye,N=new Ye,Zt=null,Me=new ye(0),zt=0,et=e.width,xt=e.height,Mt=1,Ft=null,ee=null,Ot=new Ye(0,0,et,xt),se=new Ye(0,0,et,xt),oe=!1,ue=new Ds,jt=!1,de=!1,ne=new De,me=new ht,Se=new Ye,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},fe=!1;function Pe(){return yt===null?Mt:1}let K=n;function xe(I,$){return e.getContext(I,$)}let we,F,M,B,V,Y,vt,wt,at,ct,Et,Gt,Ct,Pt,Ht,Qt,re,Z,It,_t,Lt,Dt,R;try{let I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:h,preserveDrawingBuffer:u,powerPreference:m,failIfMajorPerformanceCaveat:x};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",O,!1),e.addEventListener("webglcontextrestored",k,!1),e.addEventListener("webglcontextcreationerror",lt,!1),K===null){let $="webgl2";if(K=xe($,I),K===null)throw xe($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}j()}catch(I){throw e.removeEventListener("webglcontextlost",O,!1),e.removeEventListener("webglcontextrestored",k,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),ce("WebGLRenderer: "+I.message),I}function j(){we=new ym(K),we.init(),Lt=new rg(K,we),F=new cm(K,we,t,Lt),M=new ig(K,we),F.reversedDepthBuffer&&f&&M.buffers.depth.setReversed(!0),nt=K.createFramebuffer(),W=K.createFramebuffer(),Q=K.createFramebuffer(),B=new bm(K),V=new H0,Y=new sg(K,we,M,V,F,Lt,B),vt=new _m(z),wt=new Sd(K),Dt=new om(K,wt),at=new vm(K,wt,B,Dt),ct=new wm(K,at,wt,Dt,B),Z=new Sm(K,F,Y),Ht=new hm(V),Et=new G0(z,vt,we,F,Dt,Ht),Gt=new cg(z,V),Ct=new X0,Pt=new K0(we),re=new am(z,vt,M,ct,S,h),Qt=new ng(z,ct,F),R=new hg(K,B,F,M),It=new lm(K,we,B),_t=new Mm(K,we,B),B.programs=Et.programs,z.capabilities=F,z.extensions=we,z.properties=V,z.renderLists=Ct,z.shadowMap=Qt,z.state=M,z.info=B}P!==Cn&&(L=new Em(P,e.width,e.height,a,s,r));let E=new wc(z,K);this.xr=E,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){let I=we.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=we.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return Mt},this.setPixelRatio=function(I){I!==void 0&&(Mt=I,this.setSize(et,xt,!1))},this.getSize=function(I){return I.set(et,xt)},this.setSize=function(I,$,pt=!0){if(E.isPresenting){he("WebGLRenderer: Can't change size while VR device is presenting.");return}et=I,xt=$,e.width=Math.floor(I*Mt),e.height=Math.floor($*Mt),pt===!0&&(e.style.width=I+"px",e.style.height=$+"px"),L!==null&&L.setSize(e.width,e.height),this.setViewport(0,0,I,$)},this.getDrawingBufferSize=function(I){return I.set(et*Mt,xt*Mt).floor()},this.setDrawingBufferSize=function(I,$,pt){et=I,xt=$,Mt=pt,e.width=Math.floor(I*pt),e.height=Math.floor($*pt),this.setViewport(0,0,I,$)},this.setEffects=function(I){if(P===Cn){ce("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let $=0;$<I.length;$++)if(I[$].isOutputPass===!0){he("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(it)},this.getViewport=function(I){return I.copy(Ot)},this.setViewport=function(I,$,pt,ot){I.isVector4?Ot.set(I.x,I.y,I.z,I.w):Ot.set(I,$,pt,ot),M.viewport(it.copy(Ot).multiplyScalar(Mt).round())},this.getScissor=function(I){return I.copy(se)},this.setScissor=function(I,$,pt,ot){I.isVector4?se.set(I.x,I.y,I.z,I.w):se.set(I,$,pt,ot),M.scissor(N.copy(se).multiplyScalar(Mt).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(I){M.setScissorTest(oe=I)},this.setOpaqueSort=function(I){Ft=I},this.setTransparentSort=function(I){ee=I},this.getClearColor=function(I){return I.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(I=!0,$=!0,pt=!0){let ot=0;if(I){let st=!1;if(yt!==null){let Bt=yt.texture.format;st=T.has(Bt)}if(st){let Bt=yt.texture.type,qt=d.has(Bt),Vt=re.getClearColor(),Yt=re.getClearAlpha(),$t=Vt.r,ge=Vt.g,_e=Vt.b;qt?(b[0]=$t,b[1]=ge,b[2]=_e,b[3]=Yt,K.clearBufferuiv(K.COLOR,0,b)):(C[0]=$t,C[1]=ge,C[2]=_e,C[3]=Yt,K.clearBufferiv(K.COLOR,0,C))}else ot|=K.COLOR_BUFFER_BIT}$&&(ot|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),pt&&(ot|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ot!==0&&K.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),q=I},this.dispose=function(){e.removeEventListener("webglcontextlost",O,!1),e.removeEventListener("webglcontextrestored",k,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),re.dispose(),Ct.dispose(),Pt.dispose(),V.dispose(),vt.dispose(),ct.dispose(),Dt.dispose(),R.dispose(),Et.dispose(),E.dispose(),E.removeEventListener("sessionstart",te),E.removeEventListener("sessionend",le),Te.stop()};function O(I){I.preventDefault(),cr("WebGLRenderer: Context Lost."),J=!0}function k(){cr("WebGLRenderer: Context Restored."),J=!1;let I=B.autoReset,$=Qt.enabled,pt=Qt.autoUpdate,ot=Qt.needsUpdate,st=Qt.type;j(),B.autoReset=I,Qt.enabled=$,Qt.autoUpdate=pt,Qt.needsUpdate=ot,Qt.type=st}function lt(I){ce("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function X(I){let $=I.target;$.removeEventListener("dispose",X),gt($)}function gt(I){St(I),V.remove(I)}function St(I){let $=V.get(I).programs;$!==void 0&&($.forEach(function(pt){Et.releaseProgram(pt)}),I.isShaderMaterial&&Et.releaseShaderCache(I))}this.renderBufferDirect=function(I,$,pt,ot,st,Bt){$===null&&($=Ze);let qt=st.isMesh&&st.matrixWorld.determinantAffine()<0,Vt=Ti(I,$,pt,ot,st);M.setMaterial(ot,qt);let Yt=pt.index,$t=1;if(ot.wireframe===!0){if(Yt=at.getWireframeAttribute(pt),Yt===void 0)return;$t=2}let ge=pt.drawRange,_e=pt.attributes.position,Kt=ge.start*$t,Ie=(ge.start+ge.count)*$t;Bt!==null&&(Kt=Math.max(Kt,Bt.start*$t),Ie=Math.min(Ie,(Bt.start+Bt.count)*$t)),Yt!==null?(Kt=Math.max(Kt,0),Ie=Math.min(Ie,Yt.count)):_e!=null&&(Kt=Math.max(Kt,0),Ie=Math.min(Ie,_e.count));let Xe=Ie-Kt;if(Xe<0||Xe===1/0)return;Dt.setup(st,ot,Vt,pt,Yt);let ze,Ne=It;if(Yt!==null&&(ze=wt.get(Yt),Ne=_t,Ne.setIndex(ze)),st.isMesh)ot.wireframe===!0?(M.setLineWidth(ot.wireframeLinewidth*Pe()),Ne.setMode(K.LINES)):Ne.setMode(K.TRIANGLES);else if(st.isLine){let rn=ot.linewidth;rn===void 0&&(rn=1),M.setLineWidth(rn*Pe()),st.isLineSegments?Ne.setMode(K.LINES):st.isLineLoop?Ne.setMode(K.LINE_LOOP):Ne.setMode(K.LINE_STRIP)}else st.isPoints?Ne.setMode(K.POINTS):st.isSprite&&Ne.setMode(K.TRIANGLES);if(st.isBatchedMesh)if(we.get("WEBGL_multi_draw"))Ne.renderMultiDraw(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount);else{let rn=st._multiDrawStarts,Jt=st._multiDrawCounts,an=st._multiDrawCount,be=Yt?wt.get(Yt).bytesPerElement:1,Xt=V.get(ot).currentProgram.getUniforms();for(let qe=0;qe<an;qe++)Xt.setValue(K,"_gl_DrawID",qe),Ne.render(rn[qe]/be,Jt[qe])}else if(st.isInstancedMesh)Ne.renderInstances(Kt,Xe,st.count);else if(pt.isInstancedBufferGeometry){let rn=pt._maxInstanceCount!==void 0?pt._maxInstanceCount:1/0,Jt=Math.min(pt.instanceCount,rn);Ne.renderInstances(Kt,Xe,Jt)}else Ne.render(Kt,Xe)};function Rt(I,$,pt,ot){q!==null&&I.isNodeMaterial&&q.setObject(ot,I),jt===!0&&Ht.setState(I,pt,!1),I.transparent===!0&&I.side===On&&I.forceSinglePass===!1?(I.side=vn,I.needsUpdate=!0,zn(I,$,ot),I.side=Vi,I.needsUpdate=!0,zn(I,$,ot),I.side=On):zn(I,$,ot)}this.compile=function(I,$,pt=null){pt===null&&(pt=I),q!==null&&q.renderStart(I,$,pt),w=Pt.get(pt),w.init($),g.push(w),pt.traverseVisible(function(st){st.isLight&&st.layers.test($.layers)&&(w.pushLight(st),st.castShadow&&w.pushShadow(st))}),I!==pt&&I.traverseVisible(function(st){st.isLight&&st.layers.test($.layers)&&(w.pushLight(st),st.castShadow&&w.pushShadow(st))}),w.setupLights(),q!==null&&q.updateLights(w.state.lightsArray),de=this.localClippingEnabled,jt=Ht.init(this.clippingPlanes,de),jt===!0&&Ht.setGlobalState(this.clippingPlanes,$),q!==null&&Qt.render(w.state.shadowsArray,pt,$);let ot=new Set;return I.traverse(function(st){if(!(st.isMesh||st.isPoints||st.isLine||st.isSprite))return;let Bt=st.material;if(Bt)if(Array.isArray(Bt))for(let qt=0;qt<Bt.length;qt++){let Vt=Bt[qt];Rt(Vt,pt,$,st),ot.add(Vt)}else Rt(Bt,pt,$,st),ot.add(Bt)}),w=g.pop(),q!==null&&q.renderEnd(),ot},this.compileAsync=function(I,$,pt=null){let ot=this.compile(I,$,pt);return new Promise(st=>{function Bt(){if(ot.forEach(function(qt){let Yt=V.get(qt).currentProgram;(Yt===void 0||Yt.isReady())&&ot.delete(qt)}),ot.size===0){st(I);return}setTimeout(Bt,10)}we.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let bt=null;function At(I){bt&&bt(I)}function te(){Te.stop()}function le(){Te.start()}let Te=new vu;Te.setAnimationLoop(At),typeof self<"u"&&Te.setContext(self),this.setAnimationLoop=function(I){bt=I,E.setAnimationLoop(I),I===null?Te.stop():Te.start()},E.addEventListener("sessionstart",te),E.addEventListener("sessionend",le),this.render=function(I,$){if($!==void 0&&$.isCamera!==!0){ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(J===!0)return;q!==null&&q.renderStart(I,$);let pt=E.enabled===!0&&E.isPresenting===!0,ot=L!==null&&(yt===null||pt)&&L.begin(z,yt);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),E.enabled===!0&&E.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(E.cameraAutoUpdate===!0&&E.updateCamera($),$=E.getCamera()),I.isScene===!0&&I.onBeforeRender(z,I,$,yt),w=Pt.get(I,g.length),w.init($),w.state.textureUnits=Y.getTextureUnits(),g.push(w),ne.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),ue.setFromProjectionMatrix(ne,Kn,$.reversedDepth),de=this.localClippingEnabled,jt=Ht.init(this.clippingPlanes,de),c=Ct.get(I,D.length),c.init(),D.push(c),E.enabled===!0&&E.isPresenting===!0){let qt=z.xr.getDepthSensingMesh();qt!==null&&ae(qt,$,-1/0,z.sortObjects)}ae(I,$,0,z.sortObjects),c.finish(),q!==null&&q.updateLights(w.state.lightsArray),z.sortObjects===!0&&c.sort(Ft,ee),fe=E.enabled===!1||E.isPresenting===!1||E.hasDepthSensing()===!1,fe&&re.addToRenderList(c,I),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),jt===!0&&Ht.beginShadows();let st=w.state.shadowsArray;if(Qt.render(st,I,$),jt===!0&&Ht.endShadows(),(ot&&L.hasRenderPass())===!1){let qt=c.opaque,Vt=c.transmissive;if(w.setupLights(),$.isArrayCamera){let Yt=$.cameras;if(Vt.length>0)for(let $t=0,ge=Yt.length;$t<ge;$t++){let _e=Yt[$t];Be(qt,Vt,I,_e)}fe&&re.render(I);for(let $t=0,ge=Yt.length;$t<ge;$t++){let _e=Yt[$t];$e(c,I,_e,_e.viewport)}}else Vt.length>0&&Be(qt,Vt,I,$),fe&&re.render(I),$e(c,I,$)}yt!==null&&ut===0&&(Y.updateMultisampleRenderTarget(yt),Y.updateRenderTargetMipmap(yt)),ot&&L.end(z),I.isScene===!0&&I.onAfterRender(z,I,$),Dt.resetDefaultState(),mt=-1,ft=null,g.pop(),g.length>0?(w=g[g.length-1],Y.setTextureUnits(w.state.textureUnits),jt===!0&&Ht.setGlobalState(z.clippingPlanes,w.state.camera)):w=null,D.pop(),D.length>0?c=D[D.length-1]:c=null,q!==null&&q.renderEnd()};function ae(I,$,pt,ot){if(I.visible===!1)return;if(I.layers.test($.layers)){if(I.isGroup)pt=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update($);else if(I.isLightProbeGrid)w.pushLightProbeGrid(I);else if(I.isLight)w.pushLight(I),I.castShadow&&w.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||I.intersectsFrustum(ue)){ot&&Se.setFromMatrixPosition(I.matrixWorld).applyMatrix4(ne);let qt=ct.update(I),Vt=I.material;Vt.visible&&c.push(I,qt,Vt,pt,Se.z,null,$)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||I.intersectsFrustum(ue))){let qt=ct.update(I),Vt=I.material;if(ot&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Se.copy(I.boundingSphere.center)):(qt.boundingSphere===null&&qt.computeBoundingSphere(),Se.copy(qt.boundingSphere.center)),Se.applyMatrix4(I.matrixWorld).applyMatrix4(ne)),Array.isArray(Vt)){let Yt=qt.groups;for(let $t=0,ge=Yt.length;$t<ge;$t++){let _e=Yt[$t],Kt=Vt[_e.materialIndex];Kt&&Kt.visible&&c.push(I,qt,Kt,pt,Se.z,_e,$)}}else Vt.visible&&c.push(I,qt,Vt,pt,Se.z,null,$)}}let Bt=I.children;for(let qt=0,Vt=Bt.length;qt<Vt;qt++)ae(Bt[qt],$,pt,ot)}function $e(I,$,pt,ot){let{opaque:st,transmissive:Bt,transparent:qt}=I;w.setupLightsView(pt),jt===!0&&Ht.setGlobalState(z.clippingPlanes,pt),ot&&M.viewport(it.copy(ot)),st.length>0&&Bn(st,$,pt),Bt.length>0&&Bn(Bt,$,pt),qt.length>0&&Bn(qt,$,pt),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Be(I,$,pt,ot){if((pt.isScene===!0?pt.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[ot.id]===void 0){let Kt=we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[ot.id]=new An(1,1,{generateMipmaps:!0,type:Kt?ti:Cn,minFilter:hi,samples:Math.max(4,F.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ae.workingColorSpace})}let Bt=w.state.transmissionRenderTarget[ot.id],qt=ot.viewport||it;Bt.setSize(qt.z*z.transmissionResolutionScale,qt.w*z.transmissionResolutionScale);let Vt=z.getRenderTarget(),Yt=z.getActiveCubeFace(),$t=z.getActiveMipmapLevel();z.setRenderTarget(Bt),z.getClearColor(Me),zt=z.getClearAlpha(),zt<1&&z.setClearColor(16777215,.5),z.clear(),fe&&re.render(pt);let ge=z.toneMapping;z.toneMapping=jn;let _e=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),w.setupLightsView(ot),jt===!0&&Ht.setGlobalState(z.clippingPlanes,ot),Bn(I,pt,ot),Y.updateMultisampleRenderTarget(Bt),Y.updateRenderTargetMipmap(Bt),we.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Ie=0,Xe=$.length;Ie<Xe;Ie++){let ze=$[Ie],{object:Ne,geometry:rn,material:Jt,group:an}=ze;if(Jt.side===On&&Ne.layers.test(ot.layers)){let be=Jt.side;Jt.side=vn,Jt.needsUpdate=!0,Xn(Ne,pt,ot,rn,Jt,an),Jt.side=be,Jt.needsUpdate=!0,Kt=!0}}Kt===!0&&(Y.updateMultisampleRenderTarget(Bt),Y.updateRenderTargetMipmap(Bt))}z.setRenderTarget(Vt,Yt,$t),z.setClearColor(Me,zt),_e!==void 0&&(ot.viewport=_e),z.toneMapping=ge}function Bn(I,$,pt){let ot=$.isScene===!0?$.overrideMaterial:null;for(let st=0,Bt=I.length;st<Bt;st++){let qt=I[st],{object:Vt,geometry:Yt,group:$t}=qt,ge=qt.material;ge.allowOverride===!0&&ot!==null&&(ge=ot),Vt.layers.test(pt.layers)&&Xn(Vt,$,pt,Yt,ge,$t)}}function Xn(I,$,pt,ot,st,Bt){q!==null&&st.isNodeMaterial&&q.setObject(I,st),I.onBeforeRender(z,$,pt,ot,st,Bt),I.modelViewMatrix.multiplyMatrices(pt.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),st.onBeforeRender(z,$,pt,ot,I,Bt),st.transparent===!0&&st.side===On&&st.forceSinglePass===!1?(st.side=vn,st.needsUpdate=!0,z.renderBufferDirect(pt,$,ot,st,I,Bt),st.side=Vi,st.needsUpdate=!0,z.renderBufferDirect(pt,$,ot,st,I,Bt),st.side=On):z.renderBufferDirect(pt,$,ot,st,I,Bt),I.onAfterRender(z,$,pt,ot,st,Bt)}function zn(I,$,pt){$.isScene!==!0&&($=Ze);let ot=V.get(I),st=w.state.lights,Bt=w.state.shadowsArray,qt=st.state.version,Vt=Et.getParameters(I,st.state,Bt,$,pt,w.state.lightProbeGridArray),Yt=Et.getProgramCacheKey(Vt),$t=ot.programs;ot.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?$.environment:null,ot.fog=$.fog;let ge=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;ot.envMap=vt.get(I.envMap||ot.environment,ge),ot.envMapRotation=ot.environment!==null&&I.envMap===null?$.environmentRotation:I.envMapRotation,$t===void 0&&(I.addEventListener("dispose",X),$t=new Map,ot.programs=$t);let _e=$t.get(Yt);if(_e!==void 0){if(ot.currentProgram===_e&&ot.lightsStateVersion===qt)return kn(I,Vt),_e}else Vt.uniforms=Et.getUniforms(I),q!==null&&I.isNodeMaterial&&q.build(I,pt,Vt),I.onBeforeCompile(Vt,z),_e=Et.acquireProgram(Vt,Yt),$t.set(Yt,_e),ot.uniforms=Vt.uniforms;let Kt=ot.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Kt.clippingPlanes=Ht.uniform),kn(I,Vt),ot.needsLights=Zo(I),ot.lightsStateVersion=qt,ot.needsLights&&(Kt.ambientLightColor.value=st.state.ambient,Kt.lightProbe.value=st.state.probe,Kt.sunLights.value=st.state.sun,Kt.sunLightShadows.value=st.state.sunShadow,Kt.directionalLights.value=st.state.directional,Kt.directionalLightShadows.value=st.state.directionalShadow,Kt.spotLights.value=st.state.spot,Kt.spotLightShadows.value=st.state.spotShadow,Kt.rectAreaLights.value=st.state.rectArea,Kt.ltc_1.value=st.state.rectAreaLTC1,Kt.ltc_2.value=st.state.rectAreaLTC2,Kt.pointLights.value=st.state.point,Kt.pointLightShadows.value=st.state.pointShadow,Kt.hemisphereLights.value=st.state.hemi,Kt.sunShadowMatrix.value=st.state.sunShadowMatrix,Kt.sunShadowCascade.value=st.state.sunShadowCascade,Kt.directionalShadowMatrix.value=st.state.directionalShadowMatrix,Kt.spotLightMatrix.value=st.state.spotLightMatrix,Kt.spotLightMap.value=st.state.spotLightMap,Kt.pointShadowMatrix.value=st.state.pointShadowMatrix),ot.lightProbeGrid=w.state.lightProbeGridArray.length>0,ot.currentProgram=_e,ot.uniformsList=null,_e}function _n(I){if(I.uniformsList===null){let $=I.currentProgram.getUniforms();I.uniformsList=Ws.seqWithValue($.seq,I.uniforms)}return I.uniformsList}function kn(I,$){let pt=V.get(I);pt.outputColorSpace=$.outputColorSpace,pt.batching=$.batching,pt.batchingColor=$.batchingColor,pt.instancing=$.instancing,pt.instancingColor=$.instancingColor,pt.instancingMorph=$.instancingMorph,pt.skinning=$.skinning,pt.morphTargets=$.morphTargets,pt.morphNormals=$.morphNormals,pt.morphColors=$.morphColors,pt.morphTargetsCount=$.morphTargetsCount,pt.numClippingPlanes=$.numClippingPlanes,pt.numIntersection=$.numClipIntersection,pt.vertexAlphas=$.vertexAlphas,pt.vertexTangents=$.vertexTangents,pt.toneMapping=$.toneMapping}function Mn(I,$){if(I.length===0)return null;if(I.length===1)return I[0].texture!==null?I[0]:null;y.setFromMatrixPosition($.matrixWorld);for(let pt=0,ot=I.length;pt<ot;pt++){let st=I[pt];if(st.texture!==null&&st.boundingBox.containsPoint(y))return st}return null}function Ti(I,$,pt,ot,st){$.isScene!==!0&&($=Ze),Y.resetTextureUnits();let Bt=$.fog,qt=ot.isMeshStandardMaterial||ot.isMeshLambertMaterial||ot.isMeshPhongMaterial?$.environment:null,Vt=yt===null?z.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:Ae.workingColorSpace,Yt=ot.isMeshStandardMaterial||ot.isMeshLambertMaterial&&!ot.envMap||ot.isMeshPhongMaterial&&!ot.envMap,$t=vt.get(ot.envMap||qt,Yt),ge=ot.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,_e=!!pt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Kt=!!pt.morphAttributes.position,Ie=!!pt.morphAttributes.normal,Xe=!!pt.morphAttributes.color,ze=jn;ot.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(ze=z.toneMapping);let Ne=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,rn=Ne!==void 0?Ne.length:0,Jt=V.get(ot),an=w.state.lights;if(jt===!0&&(de===!0||I!==ft)){let Ve=I===ft&&ot.id===mt;Ht.setState(ot,I,Ve)}let be=!1;ot.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==an.state.version||Jt.outputColorSpace!==Vt||st.isBatchedMesh&&Jt.batching===!1||!st.isBatchedMesh&&Jt.batching===!0||st.isBatchedMesh&&Jt.batchingColor===!0&&st._colorsTexture===null||st.isBatchedMesh&&Jt.batchingColor===!1&&st._colorsTexture!==null||st.isInstancedMesh&&Jt.instancing===!1||!st.isInstancedMesh&&Jt.instancing===!0||st.isSkinnedMesh&&Jt.skinning===!1||!st.isSkinnedMesh&&Jt.skinning===!0||st.isInstancedMesh&&Jt.instancingColor===!0&&st.instanceColor===null||st.isInstancedMesh&&Jt.instancingColor===!1&&st.instanceColor!==null||st.isInstancedMesh&&Jt.instancingMorph===!0&&st.morphTexture===null||st.isInstancedMesh&&Jt.instancingMorph===!1&&st.morphTexture!==null||Jt.envMap!==$t||ot.fog===!0&&Jt.fog!==Bt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Ht.numPlanes||Jt.numIntersection!==Ht.numIntersection)||Jt.vertexAlphas!==ge||Jt.vertexTangents!==_e||Jt.morphTargets!==Kt||Jt.morphNormals!==Ie||Jt.morphColors!==Xe||Jt.toneMapping!==ze||Jt.morphTargetsCount!==rn||!!Jt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(be=!0):(be=!0,Jt.__version=ot.version);let Xt=Jt.currentProgram;be===!0&&(Xt=zn(ot,$,st),q&&ot.isNodeMaterial&&q.onUpdateProgram(ot,Xt,Jt));let qe=!1,bn=!1,Ei=!1,Ce=Xt.getUniforms(),ke=Jt.uniforms;if(M.useProgram(Xt.program)&&(qe=!0,bn=!0,Ei=!0),ot.id!==mt&&(mt=ot.id,bn=!0),Jt.needsLights){let Ve=Mn(w.state.lightProbeGridArray,st);Jt.lightProbeGrid!==Ve&&(Jt.lightProbeGrid=Ve,bn=!0)}if(qe||ft!==I){M.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),Ce.setValue(K,"projectionMatrix",I.projectionMatrix),Ce.setValue(K,"viewMatrix",I.matrixWorldInverse);let qn=Ce.map.cameraPosition;qn!==void 0&&qn.setValue(K,me.setFromMatrixPosition(I.matrixWorld)),F.logarithmicDepthBuffer&&Ce.setValue(K,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Ce.setValue(K,"isOrthographic",I.isOrthographicCamera===!0),ft!==I&&(ft=I,bn=!0,Ei=!0)}if(Jt.needsLights&&(an.state.sunShadowMap.length>0&&Ce.setValue(K,"sunShadowMap",an.state.sunShadowMap,Y),an.state.directionalShadowMap.length>0&&Ce.setValue(K,"directionalShadowMap",an.state.directionalShadowMap,Y),an.state.spotShadowMap.length>0&&Ce.setValue(K,"spotShadowMap",an.state.spotShadowMap,Y),an.state.pointShadowMap.length>0&&Ce.setValue(K,"pointShadowMap",an.state.pointShadowMap,Y)),st.isSkinnedMesh){Ce.setOptional(K,st,"bindMatrix"),Ce.setOptional(K,st,"bindMatrixInverse");let Ve=st.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),Ce.setValue(K,"boneTexture",Ve.boneTexture,Y))}st.isBatchedMesh&&(Ce.setOptional(K,st,"batchingTexture"),Ce.setValue(K,"batchingTexture",st._matricesTexture,Y),Ce.setOptional(K,st,"batchingIdTexture"),Ce.setValue(K,"batchingIdTexture",st._indirectTexture,Y),Ce.setOptional(K,st,"batchingColorTexture"),st._colorsTexture!==null&&Ce.setValue(K,"batchingColorTexture",st._colorsTexture,Y));let hn=pt.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&Z.update(st,pt,Xt),(bn||Jt.receiveShadow!==st.receiveShadow)&&(Jt.receiveShadow=st.receiveShadow,Ce.setValue(K,"receiveShadow",st.receiveShadow)),(ot.isMeshStandardMaterial||ot.isMeshLambertMaterial||ot.isMeshPhongMaterial)&&ot.envMap===null&&$.environment!==null&&(ke.envMapIntensity.value=$.environmentIntensity),ke.dfgLUT!==void 0&&(ke.dfgLUT.value=dg()),bn){if(Ce.setValue(K,"toneMappingExposure",z.toneMappingExposure),Jt.needsLights&&Yo(ke,Ei),Bt&&ot.fog===!0&&Gt.refreshFogUniforms(ke,Bt),Gt.refreshMaterialUniforms(ke,ot,Mt,xt,w.state.transmissionRenderTarget[I.id]),Jt.needsLights&&Jt.lightProbeGrid){let Ve=Jt.lightProbeGrid;ke.probesSH.value=Ve.texture,ke.probesMin.value.copy(Ve.boundingBox.min),ke.probesMax.value.copy(Ve.boundingBox.max),ke.probesResolution.value.copy(Ve.resolution)}Ws.upload(K,_n(Jt),ke,Y)}if(ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Ws.upload(K,_n(Jt),ke,Y),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Ce.setValue(K,"center",st.center),Ce.setValue(K,"modelViewMatrix",st.modelViewMatrix),Ce.setValue(K,"normalMatrix",st.normalMatrix),Ce.setValue(K,"modelMatrix",st.matrixWorld),ot.uniformsGroups!==void 0){let Ve=ot.uniformsGroups;for(let qn=0,Ke=Ve.length;qn<Ke;qn++){let fi=Ve[qn];R.update(fi,Xt),R.bind(fi,Xt)}}return Xt}function Yo(I,$){I.ambientLightColor.needsUpdate=$,I.lightProbe.needsUpdate=$,I.sunLights.needsUpdate=$,I.sunLightShadows.needsUpdate=$,I.directionalLights.needsUpdate=$,I.directionalLightShadows.needsUpdate=$,I.pointLights.needsUpdate=$,I.pointLightShadows.needsUpdate=$,I.spotLights.needsUpdate=$,I.spotLightShadows.needsUpdate=$,I.rectAreaLights.needsUpdate=$,I.hemisphereLights.needsUpdate=$}function Zo(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return dt},this.getActiveMipmapLevel=function(){return ut},this.getRenderTarget=function(){return yt},this.setRenderTargetTextures=function(I,$,pt){let ot=V.get(I);ot.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),V.get(I.texture).__webglTexture=$,V.get(I.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:pt,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,$){let pt=V.get(I);pt.__webglFramebuffer=$,pt.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(I,$=0,pt=0){yt=I,dt=$,ut=pt;let ot=null,st=!1,Bt=!1;if(I){let Vt=V.get(I);if(Vt.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(K.FRAMEBUFFER,Vt.__webglFramebuffer),it.copy(I.viewport),N.copy(I.scissor),Zt=I.scissorTest,M.viewport(it),M.scissor(N),M.setScissorTest(Zt),mt=-1;return}else if(Vt.__webglFramebuffer===void 0)Y.setupRenderTarget(I);else if(Vt.__hasExternalTextures)Y.rebindTextures(I,V.get(I.texture).__webglTexture,V.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let ge=I.depthTexture;if(Vt.__boundDepthTexture!==ge){if(ge!==null&&V.has(ge)&&(I.width!==ge.image.width||I.height!==ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(I)}}let Yt=I.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Bt=!0);let $t=V.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray($t[$])?ot=$t[$][pt]:ot=$t[$],st=!0):I.samples>0&&Y.useMultisampledRTT(I)===!1?ot=V.get(I).__webglMultisampledFramebuffer:Array.isArray($t)?ot=$t[pt]:ot=$t,it.copy(I.viewport),N.copy(I.scissor),Zt=I.scissorTest}else it.copy(Ot).multiplyScalar(Mt).floor(),N.copy(se).multiplyScalar(Mt).floor(),Zt=oe;if(pt!==0&&(ot=nt),M.bindFramebuffer(K.FRAMEBUFFER,ot)&&M.drawBuffers(I,ot),M.viewport(it),M.scissor(N),M.setScissorTest(Zt),st){let Vt=V.get(I.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+$,Vt.__webglTexture,pt)}else if(Bt){let Vt=$;for(let Yt=0;Yt<I.textures.length;Yt++){let $t=V.get(I.textures[Yt]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+Yt,$t.__webglTexture,pt,Vt)}}else if(I!==null&&pt!==0){let Vt=V.get(I.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Vt.__webglTexture,pt)}mt=-1};function Hr(I){let $=V.get(I);return($.__readFormat!==I.format||$.__readType!==I.type)&&($.__readFormat=I.format,$.__readType=I.type,$.__formatReadable=F.textureFormatReadable(I.format),$.__typeReadable=F.textureTypeReadable(I.type)),$}this.readRenderTargetPixels=function(I,$,pt,ot,st,Bt,qt,Vt=0){if(!(I&&I.isWebGLRenderTarget)){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=V.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&qt!==void 0&&(Yt=Yt[qt]),Yt){M.bindFramebuffer(K.FRAMEBUFFER,Yt);try{let $t=I.textures[Vt],ge=$t.format,_e=$t.type;I.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Vt);let Kt=Hr($t);if(Kt.__formatReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Kt.__typeReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=I.width-ot&&pt>=0&&pt<=I.height-st&&K.readPixels($,pt,ot,st,Lt.convert(ge),Lt.convert(_e),Bt)}finally{let $t=yt!==null?V.get(yt).__webglFramebuffer:null;M.bindFramebuffer(K.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(I,$,pt,ot,st,Bt,qt,Vt=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=V.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&qt!==void 0&&(Yt=Yt[qt]),Yt)if($>=0&&$<=I.width-ot&&pt>=0&&pt<=I.height-st){M.bindFramebuffer(K.FRAMEBUFFER,Yt);let $t=I.textures[Vt],ge=$t.format,_e=$t.type;I.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Vt);let Kt=Hr($t);if(Kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ie=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,Ie),K.bufferData(K.PIXEL_PACK_BUFFER,Bt.byteLength,K.STREAM_READ),K.readPixels($,pt,ot,st,Lt.convert(ge),Lt.convert(_e),0),K.bindBuffer(K.PIXEL_PACK_BUFFER,null);let Xe=yt!==null?V.get(yt).__webglFramebuffer:null;M.bindFramebuffer(K.FRAMEBUFFER,Xe);let ze=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await Yh(K,ze,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,Ie),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,Bt),K.bindBuffer(K.PIXEL_PACK_BUFFER,null),K.deleteBuffer(Ie),K.deleteSync(ze),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,$=null,pt=0){let ot=Math.pow(2,-pt),st=Math.floor(I.image.width*ot),Bt=Math.floor(I.image.height*ot),qt=$!==null?$.x:0,Vt=$!==null?$.y:0;Y.setTexture2D(I,0),K.copyTexSubImage2D(K.TEXTURE_2D,pt,0,0,qt,Vt,st,Bt),M.unbindTexture()},this.copyTextureToTexture=function(I,$,pt=null,ot=null,st=0,Bt=0){let qt,Vt,Yt,$t,ge,_e,Kt,Ie,Xe,ze=I.isCompressedTexture?I.mipmaps[Bt]:I.image;if(pt!==null)qt=pt.max.x-pt.min.x,Vt=pt.max.y-pt.min.y,Yt=pt.isBox3?pt.max.z-pt.min.z:1,$t=pt.min.x,ge=pt.min.y,_e=pt.isBox3?pt.min.z:0;else{let ke=Math.pow(2,-st);qt=Math.floor(ze.width*ke),Vt=Math.floor(ze.height*ke),I.isDataArrayTexture?Yt=ze.depth:I.isData3DTexture?Yt=Math.floor(ze.depth*ke):Yt=1,$t=0,ge=0,_e=0}ot!==null?(Kt=ot.x,Ie=ot.y,Xe=ot.z):(Kt=0,Ie=0,Xe=0);let Ne=Lt.convert($.format),rn=Lt.convert($.type),Jt;$.isData3DTexture?(Y.setTexture3D($,0),Jt=K.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(Y.setTexture2DArray($,0),Jt=K.TEXTURE_2D_ARRAY):(Y.setTexture2D($,0),Jt=K.TEXTURE_2D),M.activeTexture(K.TEXTURE0),M.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,$.flipY),M.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),M.pixelStorei(K.UNPACK_ALIGNMENT,$.unpackAlignment);let an=M.getParameter(K.UNPACK_ROW_LENGTH),be=M.getParameter(K.UNPACK_IMAGE_HEIGHT),Xt=M.getParameter(K.UNPACK_SKIP_PIXELS),qe=M.getParameter(K.UNPACK_SKIP_ROWS),bn=M.getParameter(K.UNPACK_SKIP_IMAGES);M.pixelStorei(K.UNPACK_ROW_LENGTH,ze.width),M.pixelStorei(K.UNPACK_IMAGE_HEIGHT,ze.height),M.pixelStorei(K.UNPACK_SKIP_PIXELS,$t),M.pixelStorei(K.UNPACK_SKIP_ROWS,ge),M.pixelStorei(K.UNPACK_SKIP_IMAGES,_e);let Ei=I.isDataArrayTexture||I.isData3DTexture,Ce=$.isDataArrayTexture||$.isData3DTexture;if(I.isDepthTexture){let ke=V.get(I),hn=V.get($),Ve=V.get(ke.__renderTarget),qn=V.get(hn.__renderTarget);M.bindFramebuffer(K.READ_FRAMEBUFFER,Ve.__webglFramebuffer),M.bindFramebuffer(K.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let Ke=0;Ke<Yt;Ke++)Ei&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,V.get(I).__webglTexture,st,_e+Ke),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,V.get($).__webglTexture,Bt,Xe+Ke)),K.blitFramebuffer($t,ge,qt,Vt,Kt,Ie,qt,Vt,K.DEPTH_BUFFER_BIT,K.NEAREST);M.bindFramebuffer(K.READ_FRAMEBUFFER,null),M.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(st!==0||I.isRenderTargetTexture||V.has(I)){let ke=V.get(I),hn=V.get($);M.bindFramebuffer(K.READ_FRAMEBUFFER,W),M.bindFramebuffer(K.DRAW_FRAMEBUFFER,Q);for(let Ve=0;Ve<Yt;Ve++)Ei?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ke.__webglTexture,st,_e+Ve):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,ke.__webglTexture,st),Ce?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,hn.__webglTexture,Bt,Xe+Ve):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,hn.__webglTexture,Bt),st!==0?K.blitFramebuffer($t,ge,qt,Vt,Kt,Ie,qt,Vt,K.COLOR_BUFFER_BIT,K.NEAREST):Ce?K.copyTexSubImage3D(Jt,Bt,Kt,Ie,Xe+Ve,$t,ge,qt,Vt):K.copyTexSubImage2D(Jt,Bt,Kt,Ie,$t,ge,qt,Vt);M.bindFramebuffer(K.READ_FRAMEBUFFER,null),M.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else Ce?I.isDataTexture||I.isData3DTexture?K.texSubImage3D(Jt,Bt,Kt,Ie,Xe,qt,Vt,Yt,Ne,rn,ze.data):$.isCompressedArrayTexture?K.compressedTexSubImage3D(Jt,Bt,Kt,Ie,Xe,qt,Vt,Yt,Ne,ze.data):K.texSubImage3D(Jt,Bt,Kt,Ie,Xe,qt,Vt,Yt,Ne,rn,ze):I.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,Bt,Kt,Ie,qt,Vt,Ne,rn,ze.data):I.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,Bt,Kt,Ie,ze.width,ze.height,Ne,ze.data):K.texSubImage2D(K.TEXTURE_2D,Bt,Kt,Ie,qt,Vt,Ne,rn,ze);M.pixelStorei(K.UNPACK_ROW_LENGTH,an),M.pixelStorei(K.UNPACK_IMAGE_HEIGHT,be),M.pixelStorei(K.UNPACK_SKIP_PIXELS,Xt),M.pixelStorei(K.UNPACK_SKIP_ROWS,qe),M.pixelStorei(K.UNPACK_SKIP_IMAGES,bn),Bt===0&&$.generateMipmaps&&K.generateMipmap(Jt),M.unbindTexture()},this.initRenderTarget=function(I){V.get(I).__webglFramebuffer===void 0&&Y.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?Y.setTextureCube(I,0):I.isData3DTexture?Y.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?Y.setTexture2DArray(I,0):Y.setTexture2D(I,0),M.unbindTexture()},this.resetState=function(){dt=0,ut=0,yt=null,M.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ae._getUnpackColorSpace()}};window.FestaGL=(()=>{let i=Math.PI*2,t=(d,b,C)=>Math.min(C,Math.max(b,d)),e={add:(d,b)=>[d[0]+b[0],d[1]+b[1],d[2]+b[2]],sub:(d,b)=>[d[0]-b[0],d[1]-b[1],d[2]-b[2]],mul:(d,b)=>[d[0]*b,d[1]*b,d[2]*b],dot:(d,b)=>d[0]*b[0]+d[1]*b[1]+d[2]*b[2],cross:(d,b)=>[d[1]*b[2]-d[2]*b[1],d[2]*b[0]-d[0]*b[2],d[0]*b[1]-d[1]*b[0]],len:d=>Math.hypot(...d),norm:d=>{let b=Math.hypot(...d)||1;return d.map(C=>C/b)}},n={identity:()=>new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),multiply:(d,b)=>{let C=new Float32Array(16);for(let y=0;y<4;y++)for(let c=0;c<4;c++)C[y*4+c]=d[c]*b[y*4]+d[4+c]*b[y*4+1]+d[8+c]*b[y*4+2]+d[12+c]*b[y*4+3];return C},perspective:(d,b,C,y)=>{let c=1/Math.tan(d/2),w=new Float32Array(16);return w[0]=c/b,w[5]=c,w[10]=(y+C)/(C-y),w[11]=-1,w[14]=2*y*C/(C-y),w},ortho:(d,b,C,y,c,w)=>new Float32Array([2/(b-d),0,0,0,0,2/(y-C),0,0,0,0,-2/(w-c),0,-(b+d)/(b-d),-(y+C)/(y-C),-(w+c)/(w-c),1]),lookAt:(d,b,C=[0,1,0])=>{let y=e.norm(e.sub(d,b)),c=e.norm(e.cross(C,y)),w=e.cross(y,c);return new Float32Array([c[0],w[0],y[0],0,c[1],w[1],y[1],0,c[2],w[2],y[2],0,-e.dot(c,d),-e.dot(w,d),-e.dot(y,d),1])},compose:(d=0,b=0,C=0,y=0,c=1,w=c,D=c)=>{let g=Math.cos(y),L=Math.sin(y);return new Float32Array([g*c,0,-L*c,0,0,w,0,0,L*D,0,g*D,0,d,b,C,1])},transform:(d,b,C=1)=>[d[0]*b[0]+d[4]*b[1]+d[8]*b[2]+d[12]*C,d[1]*b[0]+d[5]*b[1]+d[9]*b[2]+d[13]*C,d[2]*b[0]+d[6]*b[1]+d[10]*b[2]+d[14]*C],inverse:d=>{let b=new Float32Array(16),C=Array.from(d),y=Array.from({length:4},(c,w)=>[C[w],C[w+4],C[w+8],C[w+12],...Array.from({length:4},(D,g)=>w===g?1:0)]);for(let c=0;c<4;c++){let w=c;for(let g=c+1;g<4;g++)Math.abs(y[g][c])>Math.abs(y[w][c])&&(w=g);[y[c],y[w]]=[y[w],y[c]];let D=y[c][c];if(Math.abs(D)<1e-12)return n.identity();for(let g=0;g<8;g++)y[c][g]/=D;for(let g=0;g<4;g++)if(g!==c){let L=y[g][c];for(let z=0;z<8;z++)y[g][z]-=L*y[c][z]}}for(let c=0;c<4;c++)for(let w=0;w<4;w++)b[w*4+c]=y[c][w+4];return b}};function s(d){return Array.isArray(d)?d:typeof d=="number"?[(d>>16&255)/255,(d>>8&255)/255,(d&255)/255]:(d=d.replace("#",""),d.length===3&&(d=d.split("").map(b=>b+b).join("")),s(parseInt(d,16)))}function r(d=91371){let b=d>>>0;return()=>{b+=1831565813;let C=b;return C=Math.imul(C^C>>>15,C|1),C^=C+Math.imul(C^C>>>7,C|61),((C^C>>>14)>>>0)/4294967296}}let l=(d="#ffffff",b=0,C=.7,y=0,c=0,w=1)=>({color:s(d),p:[b,C,y,c],ao:w});class a{constructor(){this.data=new Float32Array(262144),this.used=0,this.count=0,this.transform=n.identity(),this.animation=[0,0,0,0]}reserve(b){if(this.used+b>this.data.length){let C=new Float32Array(Math.max(this.data.length*2,this.used+b));C.set(this.data),this.data=C}}vertex(b,C,y,c){this.reserve(20),b=n.transform(this.transform,b),C=e.norm(n.transform(this.transform,C,0));let w=this.data,D=this.used,g=c.color;for(let L=0;L<3;L++)w[D+L]=b[L];for(let L=0;L<3;L++)w[D+3+L]=C[L];w[D+6]=y[0],w[D+7]=y[1],w[D+8]=g[0],w[D+9]=g[1],w[D+10]=g[2],w[D+11]=c.ao??1;for(let L=0;L<4;L++)w[D+12+L]=c.p[L];for(let L=0;L<4;L++)w[D+16+L]=this.animation[L];this.used+=20,this.count++}tri(b,C,y,c,w=[[0,0],[0,1],[1,1]],D=null){let g=e.norm(e.cross(e.sub(C,b),e.sub(y,b)));this.vertex(b,D?D[0]:g,w[0],c),this.vertex(C,D?D[1]:g,w[1],c),this.vertex(y,D?D[2]:g,w[2],c)}quad(b,C,y,c,w,D=1,g=1){this.tri(b,C,y,w,[[0,0],[0,g],[D,g]]),this.tri(b,y,c,w,[[0,0],[D,g],[D,0]])}box(b,C,y,c,w,D,g){let L=b-c/2,z=b+c/2,J=C-w/2,q=C+w/2,nt=y-D/2,W=y+D/2;this.quad([L,q,W],[L,J,W],[z,J,W],[z,q,W],g,g.fit?1:c,g.fit?1:w),this.quad([z,q,nt],[z,J,nt],[L,J,nt],[L,q,nt],g,g.fit?1:c,g.fit?1:w),this.quad([z,q,W],[z,J,W],[z,J,nt],[z,q,nt],g,g.fit?1:D,g.fit?1:w),this.quad([L,q,nt],[L,J,nt],[L,J,W],[L,q,W],g,g.fit?1:D,g.fit?1:w),this.quad([L,q,nt],[L,q,W],[z,q,W],[z,q,nt],g,g.fit?1:c,g.fit?1:D),this.quad([L,J,W],[L,J,nt],[z,J,nt],[z,J,W],g,g.fit?1:c,g.fit?1:D)}plane(b,C,y,c,w,D,g=c,L=w){this.quad([b-c/2,C,y-w/2],[b-c/2,C,y+w/2],[b+c/2,C,y+w/2],[b+c/2,C,y-w/2],D,g,L)}sphere(b,C,y,c,w,D,g,L=16,z=10,J=0,q=Math.PI){let nt=(W,Q)=>{let dt=W/L*i,ut=J+Q/z*(q-J),yt=[Math.sin(ut)*Math.cos(dt),Math.cos(ut),Math.sin(ut)*Math.sin(dt)];return{p:[b+yt[0]*c,C+yt[1]*w,y+yt[2]*D],n:e.norm([yt[0]/c,yt[1]/w,yt[2]/D]),uv:[W/L,Q/z]}};for(let W=0;W<z;W++)for(let Q=0;Q<L;Q++){let dt=nt(Q,W),ut=nt(Q,W+1),yt=nt(Q+1,W+1),mt=nt(Q+1,W);for(let ft of[[dt,ut,yt],[dt,yt,mt]]){let it=e.cross(e.sub(ft[1].p,ft[0].p),e.sub(ft[2].p,ft[0].p));e.dot(it,ft[0].n)<0&&([ft[1],ft[2]]=[ft[2],ft[1]]),this.tri(...ft.map(N=>N.p),g,ft.map(N=>N.uv),ft.map(N=>N.n))}}}cylinder(b,C,y,c,w,D=12,g=!0){let L=e.norm(e.sub(C,b)),z=e.norm(e.cross(L,Math.abs(L[1])>.95?[1,0,0]:[0,1,0])),J=e.cross(L,z),q=e.len(e.sub(C,b)),nt=(Q,dt,ut)=>e.add(Q,e.add(e.mul(z,Math.cos(ut)*dt),e.mul(J,Math.sin(ut)*dt))),W=Q=>e.norm(e.add(e.add(e.mul(z,Math.cos(Q)),e.mul(J,Math.sin(Q))),e.mul(L,(y-c)/q)));for(let Q=0;Q<D;Q++){let dt=Q/D*i,ut=(Q+1)/D*i,yt=nt(b,y,dt),mt=nt(C,c,dt),ft=nt(C,c,ut),it=nt(b,y,ut),N=W(dt),Zt=W(ut);this.tri(yt,ft,mt,w,[[Q/D,0],[(Q+1)/D,q],[Q/D,q]],[N,Zt,N]),this.tri(yt,it,ft,w,[[Q/D,0],[(Q+1)/D,0],[(Q+1)/D,q]],[N,Zt,Zt]),g&&(this.tri(b,it,yt,w),this.tri(C,mt,ft,w))}}disk(b,C,y,c,w,D=32){for(let g=0;g<D;g++){let L=g/D*i,z=(g+1)/D*i;this.tri([b,C,y],[b+Math.cos(z)*c,C,y+Math.sin(z)*c],[b+Math.cos(L)*c,C,y+Math.sin(L)*c],w,[[.5,.5],[.5+Math.cos(z)*.5,.5+Math.sin(z)*.5],[.5+Math.cos(L)*.5,.5+Math.sin(L)*.5]])}}tube(b,C,y,c=8){for(let w=1;w<b.length;w++)this.cylinder(b[w-1],b[w],C,C,y,c)}sign(b,C,y,c,w,D,g=!1){let L=l("#ffffff",D,.8,0,.15);this.quad([b-c/2,C+w/2,y],[b-c/2,C-w/2,y],[b+c/2,C-w/2,y],[b+c/2,C+w/2,y],L),g&&this.box(b,C,y-.022,c+.05,w+.05,.04,l("#574333",3))}scope(b,C){let y=this.transform;this.transform=n.multiply(y,b),C(),this.transform=y}animate(b,C,y){let c=this.animation;this.animation=[...b,C],y(),this.animation=c}}class h{constructor(b=512){this.size=b,this.layers=[],this.names={}}add(b,C){let y=document.createElement("canvas");y.width=y.height=this.size;let c=y.getContext("2d",{willReadFrequently:!0});C&&C(c,this.size);let w=this.layers.length;return this.layers.push(y),this.names[b]=w,w}sign(b,C,y="",c="#304c55",w=""){return this.add(b,(D,g)=>{D.fillStyle="#f9f7f0",D.fillRect(0,0,g,g),D.fillStyle=c,D.fillRect(0,0,g,62),D.fillStyle="#ffffff",D.font='700 24px "Noto Sans CJK JP", "Yu Gothic", sans-serif',D.fillText(w||b,22,41),D.fillStyle="#273b3c";let L=u(D,C,g-52,37),z=L.length>3?30:37;L=u(D,C,g-52,z),D.font=`700 ${z}px "Noto Sans CJK JP", "Yu Gothic", sans-serif`;let J=154-Math.min(L.length,4)*4;L.slice(0,4).forEach((W,Q)=>D.fillText(W,26,J+Q*(z+10))),D.fillStyle="#53605b",D.font='500 25px "Noto Sans CJK JP", "Yu Gothic", sans-serif';let q=u(D,y,g-52,25),nt=Math.max(300,J+L.length*(z+10)+25);q.slice(0,4).forEach((W,Q)=>D.fillText(W,26,nt+Q*34)),D.fillStyle=c,D.fillRect(26,g-53,g-52,3),D.fillStyle="#6b7770",D.font='19px "Noto Sans CJK JP", "Yu Gothic", sans-serif',D.fillText("つながりフェスタ 2026",26,g-23)})}banner(b,C,y="",c="#174f54"){return this.add(b,(w,D)=>{w.scale(1,D/112),w.fillStyle="#f9f7f0",w.fillRect(0,0,D,112),w.fillStyle=c,w.fillRect(0,0,76,112),w.fillStyle="#fff",w.font='700 23px "Noto Sans CJK JP", "Yu Gothic", sans-serif',w.textAlign="center",w.fillText(b,38,64);let g=29;for(;g>17&&(w.font=`700 ${g}px "Noto Sans CJK JP", "Yu Gothic", sans-serif`,!(w.measureText(C).width<D-104));)g--;w.textAlign="left",w.fillStyle="#263d3c",w.fillText(C,92,52),w.font='500 17px "Noto Sans CJK JP", "Yu Gothic", sans-serif',w.fillStyle="#5b675d";let L=y;for(;w.measureText(L).width>D-109&&L.length;)L=L.slice(0,-1);w.fillText(L,92,84),w.fillStyle=c,w.fillRect(76,106,D-76,6)})}upload(b,C=this.size){let y=new Uint8Array(C*C*4*this.layers.length),c=document.createElement("canvas");c.width=c.height=C;let w=c.getContext("2d");this.layers.forEach((D,g)=>{w.clearRect(0,0,C,C),w.drawImage(D,0,0,C,C),y.set(w.getImageData(0,0,C,C).data,g*C*C*4)}),this.texture=new ts(y,C,C,this.layers.length),this.texture.colorSpace=un,this.texture.wrapS=this.texture.wrapT=As,this.texture.minFilter=hi,this.texture.magFilter=en,this.texture.generateMipmaps=!0,this.texture.anisotropy=4,this.texture.needsUpdate=!0}}function u(d,b,C,y){d.font=`700 ${y}px "Noto Sans CJK JP", "Yu Gothic", sans-serif`;let c=[],w="";for(let D of b){if(D===`
`){c.push(w),w="";continue}d.measureText(w+D).width>C&&w?(c.push(w),w=D):w+=D}return w&&c.push(w),c}let m=`#version 300 es
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
 `;function S(d,b,C=!1){return d.onBeforeCompile=y=>{y.uniforms.festaTime=b.timeUniform,y.uniforms.festaAtlas=b.atlasUniform,y.vertexShader=f+y.vertexShader,y.vertexShader=y.vertexShader.replace("#include <begin_vertex>",_).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
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
}`),C||(y.fragmentShader=y.fragmentShader.replace("#include <roughnessmap_fragment>","float roughnessFactor=clamp(festaMat.y,.06,1.);").replace("#include <metalnessmap_fragment>","float metalnessFactor=clamp(festaMat.z,0.,1.);").replace("#include <emissivemap_fragment>","totalEmissiveRadiance=diffuseColor.rgb*festaMat.w;").replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
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
reflectedLight.indirectDiffuse*=festaShade;`))},d.customProgramCacheKey=()=>C?"festa-depth-2":"festa-standard-2",d}class P{constructor(b,C,{name:y="",shadow:c=!0,instances:w=null,dynamic:D=!1}={}){this.name=y,this.renderer=b,this.count=C.count,this.shadow=c,this.dynamic=D,this.instances=w||[{matrix:n.identity(),info:[0,0,0,0]}];let g=C.data.slice(0,C.used),L=new ye;for(let q=0;q<g.length;q+=20)L.setRGB(g[q+8],g[q+9],g[q+10],un),g[q+8]=L.r,g[q+9]=L.g,g[q+10]=L.b;let z=new Nn,J=new pr(g,20);for(let[q,nt,W]of[["position",3,0],["normal",3,3],["uv",2,6],["color",3,8],["festaAO",1,11],["festaSurface",4,12],["festaAnimation",4,16]])z.setAttribute(q,new mr(J,nt,W));this.info=new es(new Float32Array(this.instances.length*4),4),this.info.setUsage(zo),z.setAttribute("festaInfo",this.info),this.object=new yr(z,b.surfaceMaterial,this.instances.length),this.object.name=y,this.object.castShadow=c,this.object.receiveShadow=!0,this.object.frustumCulled=!1,this.object.customDepthMaterial=b.depthMaterial,this.object.instanceMatrix.setUsage(zo),this.matrix=new De,this.updateInstances(),b.scene.add(this.object),b.meshes.push(this),C.data=null}get visible(){return this.object.visible}set visible(b){this.object.visible=b}updateInstances(){this.instances.forEach((b,C)=>{this.object.setMatrixAt(C,this.matrix.fromArray(b.matrix)),this.info.set(b.info||[0,0,0,0],C*4)}),this.object.instanceMatrix.needsUpdate=!0,this.info.needsUpdate=!0}dispose(){this.renderer.scene.remove(this.object),this.object.geometry.dispose(),this.object.dispose(),this.renderer.meshes=this.renderer.meshes.filter(b=>b!==this)}}class T{constructor(b,C="standard"){this.canvas=b,this.engine=new Wo({canvas:b,alpha:!1,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0}),this.gl=this.engine.getContext(),this.engine.outputColorSpace=un,this.engine.toneMapping=Ir,this.engine.shadowMap.enabled=!0,this.engine.shadowMap.type=ns,this.engine.shadowMap.autoUpdate=!1,this.scene=new ur,this.scene.fog=new hr("#c5d3d8",110,420),this.camera={eye:[0,1.68,20],target:[0,1.68,0],fov:66*Math.PI/180,near:.065,far:700},this.threeCamera=new pn,this.meshes=[],this.quality=C,this.time=0,this.exposure=1.12,this.sun=e.norm([-.38,.79,.48]),this.sunColor=[1,.94,.81],this.sunPower=3.7,this.timeUniform={value:0},this.atlasUniform={value:null},this.surfaceMaterial=S(new Sr({color:16777215,vertexColors:!0,roughness:1,metalness:1,side:On,alphaTest:.4}),this),this.depthMaterial=S(new Fs({depthPacking:Ql,side:On,alphaTest:.4}),this,!0),this.hemisphere=new Er("#c7e0f5","#817562",1.8),this.scene.add(this.hemisphere),this.sunLight=new Cr(16777215,this.sunPower),this.sunLight.castShadow=!0,this.scene.add(this.sunLight,this.sunLight.target),this.stats={draws:0,triangles:0,fps:0},this.frameCount=0,this.fpsStamp=performance.now(),this.shadowAge=-1,this.shadowDirty=!0,this.targetSize=[0,0];let y=new Nn;y.setAttribute("position",new Tn([-1,-1,0,3,-1,0,-1,3,0],3)),this.skyUniforms={uInvVP:{value:new De},uEye:{value:new ht},uSun:{value:new ht},uTime:this.timeUniform};let c=new Us({glslVersion:zr,vertexShader:m.replace("#version 300 es","").replace("0.,1.);","1.,1.);"),fragmentShader:x.replace("#version 300 es","").replace("frag=vec4(sky,1.);","sky=sky*1.12; sky=clamp((sky*(2.51*sky+.03))/(sky*(2.43*sky+.59)+.14),0.,1.);frag=vec4(pow(sky,vec3(1./2.2)),1.);"),uniforms:this.skyUniforms,depthWrite:!1,depthTest:!1});this.sky=new gn(y,c),this.sky.frustumCulled=!1,this.sky.renderOrder=-1e3,this.scene.add(this.sky),this.setQuality(C)}set atlas(b){this._atlas=b,this.atlasUniform.value=b.texture}get atlas(){return this._atlas}setQuality(b){this.quality=b,this.pixelRatio=b==="high"?Math.min(devicePixelRatio,1.75):b==="low"?.8:Math.min(devicePixelRatio,1.15),this.shadowSize=b==="high"?4096:b==="low"?1024:2048,this.engine.setPixelRatio(this.pixelRatio),this.createShadow(),this.resize()}createShadow(){let b=this.sunLight,C=b.shadow;b.position.set(-3+this.sun[0]*230,this.sun[1]*230,26+this.sun[2]*230),b.target.position.set(-3,0,26),b.color.setRGB(...this.sunColor),b.intensity=this.sunPower,Object.assign(C.camera,{left:-108,right:108,top:108,bottom:-108,near:1,far:500}),C.camera.updateProjectionMatrix(),C.bias=-15e-5,C.normalBias=216/this.shadowSize*1.35,C.mapSize.x!==this.shadowSize&&(C.map?.dispose(),C.map=null,C.mapSize.set(this.shadowSize,this.shadowSize)),this.shadowDirty=!0}resize(){let b=Math.max(1,this.canvas.clientWidth),C=Math.max(1,this.canvas.clientHeight);b===this.targetSize[0]&&C===this.targetSize[1]&&this.engine.getPixelRatio()===this.pixelRatio||(this.targetSize=[b,C],this.engine.setSize(b,C,!1))}render(b=0){if(!this.atlas)return;this.time=b,this.timeUniform.value=b,this.resize();let C=this.camera,y=this.threeCamera;y.position.fromArray(C.eye),y.up.set(0,1,0),y.lookAt(new ht(...C.target)),y.fov=C.fov*180/Math.PI,y.aspect=this.canvas.clientWidth/this.canvas.clientHeight,y.near=C.near,y.far=C.far,y.updateProjectionMatrix(),y.updateMatrixWorld(),this.vp=new De().multiplyMatrices(y.projectionMatrix,y.matrixWorldInverse).elements,this.invVp=new De().fromArray(this.vp).invert().elements,this.skyUniforms.uInvVP.value.fromArray(this.invVp),this.skyUniforms.uEye.value.fromArray(C.eye),this.skyUniforms.uSun.value.fromArray(this.sun),this.engine.toneMappingExposure=this.exposure,(this.shadowDirty||b-this.shadowAge>.45)&&(this.engine.shadowMap.needsUpdate=!0,this.shadowDirty=!1,this.shadowAge=b),this.engine.render(this.scene,y),this.stats.draws=this.engine.info.render.calls,this.stats.triangles=this.engine.info.render.triangles,this.frameCount++;let c=performance.now();c-this.fpsStamp>1500&&(this.stats.fps=Math.round(this.frameCount*1e3/(c-this.fpsStamp)),this.frameCount=0,this.fpsStamp=c)}project(b){if(!this.vp)return null;let C=this.vp,y=n.transform(C,b),c=C[3]*b[0]+C[7]*b[1]+C[11]*b[2]+C[15];return c<=0?null:{x:(y[0]/c*.5+.5)*this.canvas.clientWidth,y:(-y[1]/c*.5+.5)*this.canvas.clientHeight,z:y[2]/c}}groundPoint(b,C){if(!this.invVp)return null;let y=new Rr;return y.setFromCamera(new Ee(b/this.canvas.clientWidth*2-1,1-C/this.canvas.clientHeight*2),this.threeCamera),y.ray.intersectPlane(new Dn(new ht(0,1,0),0),new ht)?.toArray()||null}}return{V:e,M:n,Geometry:a,Mesh:P,Renderer:T,Atlas:h,material:l,color:s,rng:r,clamp:t,TAU:i,wrap:u}})();window.FestaScenery={height(i,t){let e=(h,u,m,x,f)=>{let _=Math.hypot((i-h)/m,(t-u)/x);return _<1?f*Math.pow(Math.cos(_*Math.PI/2),2):0},n=Math.max(e(112,-4,49,100,25),e(130,82,65,84,22),e(-113,7,41,40,20),e(-39,-103,63,47,15),e(8,-107,45,48,20),e(53,-105,49,46,16));if(i<60.8||i>=103.2||t<=15.08||t>=96.08)return n;let s=h=>(h=Math.max(0,Math.min(1,h)),h*h*(3-2*h)),r=s((t-15.08)/12)*(1-s((t-80.08)/16)),l=s((i-75.2)/28),a=3.7+(Math.max(n,3.7)-3.7)*l;return n+(a-n)*r},textures(i,t){let e=i.layers[3],n=e.getContext("2d"),s=e.width,r=t(8401),l=n.createImageData(s,s);for(let a=0;a<s;a++)for(let h=0;h<s;h++){let u=Math.sin(h/s*Math.PI*4+.5)*Math.cos(a/s*Math.PI*6)*1.7,m=(r()-.5)*9+u,x=(a*s+h)*4;l.data[x]=241+m,l.data[x+1]=239+m,l.data[x+2]=229+m,l.data[x+3]=255}n.putImageData(l,0,0);for(let a of[7,8]){let h=i.layers[a].getContext("2d"),u=t(301+a);h.clearRect(0,0,s,s);for(let m=0;m<1700;m++){let x=u()*Math.PI*2,f=Math.sqrt(u()),_=.5+Math.cos(x)*f*.45,S=.5+Math.sin(x)*f*.42;if(f>.84&&u()>.52)continue;let P=(1-S)*12+u()*17,T=a===7?76+u()*30:18+u()*24;h.fillStyle=`hsl(${T},${a===7?24+u()*22:38+u()*20}%,${16+P}%)`,h.beginPath(),h.ellipse(_*s,S*s,3+u()*7,2+u()*4,u()*6.28,0,6.28),h.fill()}}return i.add("Window reflection",(a,h)=>{let u=a.createLinearGradient(0,0,0,h);u.addColorStop(0,"#9baeb3"),u.addColorStop(.46,"#667d81"),u.addColorStop(.49,"#536562"),u.addColorStop(1,"#364743"),a.fillStyle=u,a.fillRect(0,0,h,h);let m=t(721);for(let x=0;x<150;x++){let f=m()*h,_=h*(.48+m()*.5);a.fillStyle=`rgba(31,48,35,${.025+m()*.1})`,a.beginPath(),a.ellipse(f,_,5+m()*29,3+m()*16,0,0,6.28),a.fill()}a.fillStyle="rgba(218,228,226,.10)",a.fillRect(h*.23,0,h*.03,h),a.fillRect(h*.75,0,h*.018,h)})},build({details:i,green:t,distant:e,signGeo:n,childSign:s,p:r,m:l,mat:a,M:h,rng:u,TAU:m,ga:x,gb:f,gc:_,gw:S,gd:P,gymRise:T=.45}){let d=u(70031),b=(E,O)=>E+(O-E)*d(),C=a("#dcdccf",3,.88),y=a("#c7cbc3",3,.87),c=r(425.28,478),w=r(470,478),D=5.25,g=3.25,L=x[0]-1.2,z=2.4,J=w[1]+1.2,q=f[1]+1.6,nt=(E,O,k=1.05)=>{i.cylinder([E[0],E[1]+k,E[2]],[O[0],O[1]+k,O[2]],.028,.028,C,7);let lt=Math.max(1,Math.ceil(Math.hypot(O[0]-E[0],O[2]-E[2])/.19));for(let X=0;X<=lt;X++){let gt=X/lt,St=E[0]+(O[0]-E[0])*gt,Rt=E[1]+(O[1]-E[1])*gt,bt=E[2]+(O[2]-E[2])*gt;i.cylinder([St,Rt,bt],[St,Rt+k,bt],.016,.016,C,6)}},W=(E,O,k,lt,X)=>i.box((E+O)/2,X-.14,(k+lt)/2,O-E,.28,lt-k,C);W(c[0],x[0],w[1]-1.2,J,D),nt([c[0],D,w[1]-1.2],[x[0],D,w[1]-1.2]),nt([c[0],D,J],[x[0]-z,D,J]);for(let E of[c[0]+.22,x[0]-2.65])i.box(E,D/2-.14,w[1],.38,D-.28,.42,C);let Q=12,dt=(q-J)/Q,ut=(D-g)/Q;for(let E=0;E<Q;E++){let O=J+E*dt,k=O+dt,lt=D-E*ut;i.box(L,lt-ut/2-.08,(O+k)/2,z,ut+.16,dt+.015,C)}for(let E of[x[0]-z,x[0]])i.quad([E,D-.28,J],[E,g-.28,q],[E,g-.48,q],[E,D-.48,J],C),nt([E,D,J],[E,g,q]);W(x[0]-z,f[0],f[1],q+1.3,g),nt([x[0]-z,g,q+1.3],[_[0]+4.3,g,q+1.3]),nt([x[0]-z,g,q],[x[0]-z,g,q+1.3]);for(let E of[x[0]-z+.25,x[0]+2.2,_[0]+4.4,f[0]-.25])i.box(E,(g-.28)/2,q+.99,.42,g-.28,.45,C);i.box((_[0]+4.3+f[0])/2,g+.46,q+1.17,f[0]-_[0]-4.3,.92,.22,C);let yt=a("#778885",0,.48,.08),mt=a("#c3c5b9",0,.63,.18),ft=a("#414c4e",0,.48,.62);for(let E of[-6.8,-2.3,2.3,6.8])i.box(_[0]+E,6,f[1]+.2,1.35,2.4,.09,mt),i.box(_[0]+E,5.96,f[1]+.26,1.21,2.22,.03,yt),i.box(_[0]+E,6.75,f[1]+.29,1.22,.67,.05,C),i.box(_[0]+E,5.52,f[1]+.3,1.22,.045,.04,mt);let it=x[0]+S*77/309,N=x[0]+S*156/309,Zt=x[0]+S*202/309,Me=x[0]+S*233/309;for(let[E,O]of[[x[0]+2.75,1.5],[N+1.3,1],[Zt+1.075,.95],[Me+2.45,1.5]])i.box(E,1.93,f[1]+.24,O+.12,1.62,.065,ft),i.box(E,1.93,f[1]+.28,O-.08,1.45,.025,yt),i.box(E,1.93,f[1]+.31,.045,1.51,.045,ft),i.box(E,1.93,f[1]+.32,O+.15,.045,.045,ft);let zt=x[0]+S*.38,et=f[1]+.27;for(let E of[-1,1]){let O=zt+E*1.65;i.box(O,1.45,et+.055,1.04,2.35,.035,yt),i.box(O,1.06,et+.09,1.1,.045,.06,ft),i.box(O,2.49,et+.09,1.1,.045,.06,ft),i.box(zt+E*2.2,1.54,et+.09,.055,2.76,.055,ft),i.box(zt+E*1.1,1.54,et+.09,.055,2.76,.055,ft),i.box(zt+E*1.1,1.45,et-.5,.035,2.35,1.04,yt),i.box(zt+E*1.1,1.06,et-.5,.05,.045,1.08,ft)}i.box(zt,2.91,et+.09,4.5,.06,.06,ft),i.box(zt,.15,f[1]+1.75,5.6,.3,3,C);for(let E=0;E<3;E++)i.box(zt,.025+E*.05,f[1]+4.06-E*.38,5.6,.05+E*.1,.4,C);let xt=a("#83b4c2",0,.54,.12);for(let[E,O]of[[335,344],[421,433],[468,484]]){let k=r(470,E)[1],lt=r(470,O)[1],X=(k+lt)/2,gt=lt-k;for(let St=0;St<3;St++){let Rt=(St+1)*T/3;i.box(x[0]-1.38+St*.46,Rt/2,X,.48,Rt,gt+.24,C)}i.box(x[0]-.11,T-.04,X,.54,.08,gt+.24,C);for(let St of[k+.12,lt-.12])i.box(x[0]-.76,T+1.12,St,1.32,2.24,.075,xt),i.box(x[0]-.76,T+2.25,St,1.36,.045,.09,mt)}let Mt=[[303,334],[345,420],[434,467],[485,503]];for(let E of[-1,1])for(let[O,k]of Mt){let lt=r(470,O)[1]+.15,X=r(470,k)[1]-.15,gt=Math.max(1,Math.ceil((X-lt)/5.4));for(let St=0;St<gt;St++){let Rt=lt+(X-lt)*St/gt+.18,bt=lt+(X-lt)*(St+1)/gt-.18,At=_[0]+E*(S/2+.26),te=.56,le=4.04;for(let Te of[!1,!0]){let ae=Te?le:te,$e=Te?te:le,Be=$e-ae,Bn=bt-Rt,Xn=Math.hypot(Be,Bn),zn=-Bn/Xn*.065,_n=Be/Xn*.065;i.quad([At,ae+zn,Rt+_n],[At,ae-zn,Rt-_n],[At,$e-zn,bt-_n],[At,$e+zn,bt+_n],C,Xn,.13);for(let[kn,Mn]of[[ae,Rt],[$e,bt]]){i.box(At,kn,Mn,.045,.25,.25,C);for(let Ti of[-.065,.065])i.cylinder([At+E*.022,kn,Mn+Ti],[At+E*.04,kn,Mn+Ti],.017,.017,a("#abae9e",0,.65,.1),6)}}}}for(let E of[-1,1])for(let[O,k]of Mt){let lt=_[0]+E*(S/2+.185),X=r(470,O)[1],gt=r(470,k)[1];for(let St=X+.8;St<gt;St+=2.65)i.box(lt,2.12,St,.012,3.78,.014,a("#b9baae",0,.96))}for(let E of[-1,1]){let O=_[0]+E*(S/2+.31);i.cylinder([O,8.66,x[1]],[O,8.66,f[1]],.075,.075,C,10);for(let k of[x[1]+.32,x[1]+16.5,f[1]-.35])i.cylinder([O,.25,k],[O,8.66,k],.045,.045,C,8);for(let[k,lt]of Mt){let X=r(470,k)[1],gt=r(470,lt)[1];i.box(O-E*.14,.19,(X+gt)/2,.08,.38,gt-X,a("#94958b",3,.96))}}let Ft=(E,O,k)=>E+k>x[0]&&E-k<f[0]&&O+k>x[1]&&O-k<f[1];function ee(E,O,k,lt,X=1,gt=82,St=!1){if(E>55&&E<80&&O>26&&O<82)return;let Rt=window.FestaScenery.height(E,O);if(E<-52&&E>-88&&O<-12&&O>-70&&(k=Math.min(k,6.2)),E>-74&&E<-58&&O>-11&&O<10)return;let bt=u(lt);for(let At=0;At<gt;At++){let te=bt()*m,le=Math.sqrt(bt())*k*.46*X,Te=k*(.13+bt()*.77)-le*.09,ae=E+Math.cos(te)*le,$e=O+Math.sin(te)*le,Be=k*(.21+bt()*.14),Bn=bt()*m;if(Ft(ae,$e,Be*.71))continue;let Xn=St?a(At%4?"#a0704d":"#855841",8,.98,0,0,.92):a(At%7===0?"#879c75":At%3?"#526b48":"#344f39",7,.98,0,0,.92);t.scope(h.compose(ae,Rt+Te,$e,Bn),()=>{t.quad([-Be/2,-Be/2,0],[-Be/2,Be/2,0],[Be/2,Be/2,0],[Be/2,-Be/2,0],Xn),t.quad([-Be/2,0,-Be/2],[-Be/2,0,Be/2],[Be/2,0,Be/2],[Be/2,0,-Be/2],Xn)})}for(let At=0;At<12;At++){let te=At*m/12,le=E+Math.cos(te)*k*.25*X,Te=O+Math.sin(te)*k*.25*X,ae=k*(.25+bt()*.08),$e=St?a("#75523b",8,.98):a(At%3?"#3c5a40":"#60734b",7,.98);Ft(le,Te,ae*.71)||t.scope(h.compose(le,Rt+k*.21,Te,te),()=>t.quad([-ae/2,-ae/2,0],[-ae/2,ae/2,0],[ae/2,ae/2,0],[ae/2,-ae/2,0],$e))}}let Ot=f[1]+3.2,se=a("#94705a",3,.98),oe=a("#4c4835",1,1),ue=u(2701);for(let[E,O,k]of[[x[0]+3,4.6,2.9],[f[0]-4.7,8.4,3.6]]){i.box(E,.24,Ot,O,.48,2.1,se),i.plane(E,.486,Ot,O-.35,1.7,oe);for(let lt=E-O/2+.2;lt<E+O/2;lt+=.42)for(let X of[.12,.35])i.box(lt+(X>.2?.2:0),X,Ot+1.055,.012,.2,.015,a("#c3ac8a"));for(let lt=0;lt<Math.round(O*36);lt++){let X=E+(ue()-.5)*(O-.6),gt=.5+ue()*k,St=Ot+(ue()-.5)*1.4,Rt=.52+ue()*.4,bt=a(lt%5?"#6b835a":"#879669",7,1);t.scope(h.compose(X,gt,St,ue()*m),()=>{t.quad([-Rt/2,-Rt/2,0],[-Rt/2,Rt/2,0],[Rt/2,Rt/2,0],[Rt/2,-Rt/2,0],bt),t.quad([-Rt/2,0,-Rt/2],[-Rt/2,0,Rt/2],[Rt/2,0,Rt/2],[Rt/2,0,-Rt/2],bt)})}for(let lt=E-O/2+.3;lt<E+O/2;lt+=.61){let X=Ot+1.4;i.box(lt,.13,X,.43,.26,.33,a("#a88767",3,.94));for(let gt=0;gt<3;gt++)i.sphere(lt+(gt-1)*.11,.3,X,.095,.11,.11,a(gt%2?"#989b62":"#557549"),8,5)}}let jt=Number((f[0]+3.6).toFixed(2)),de=Number((f[1]-20).toFixed(2)),ne=Number((f[1]+33).toFixed(2)),me=3.6,Se=a("#92968a",3,.99),Ze=a("#b0b3a6",3,.94);i.quad([jt-.35,0,de],[jt-.35,0,ne],[jt,me,ne],[jt,me,de],Se,18,3),i.box(jt+.08,me+.08,(de+ne)/2,.64,.16,ne-de,Ze);for(let E=de+.3;E<ne;E+=2.2)i.cylinder([jt+.1,me+.12,E],[jt+.1,me+1.16,E],.022,.022,mt,6),i.box(jt-.28,.65,E,.025,.1,.1,a("#454d43"));for(let E of[me+.3,me+1.12])i.cylinder([jt+.1,E,de],[jt+.1,E,ne],.022,.022,mt,6);for(let E=de;E<ne;E+=5.4)i.cylinder([jt-.34,.05,E],[jt-.01,me-.02,E],.012,.012,a("#777e72"),5);{let E=jt+6.3,O=f[1]+1.4,k=8.8,lt=11,X=6.6;e.box(E,me+X/2,O,k,X,lt,a("#d8d2be",3,.96));let gt=a("#6f6860",10,.9),St=me+X;for(let Rt of[-1,1])e.quad([E,St+1.7,O-lt/2-.4],[E,St+1.7,O+lt/2+.4],[E+Rt*(k/2+.4),St,O+lt/2+.4],[E+Rt*(k/2+.4),St,O-lt/2-.4],gt,3,4);for(let Rt of[O-lt/2,O+lt/2])e.tri([E-k/2,St,Rt],[E,St+1.7,Rt],[E+k/2,St,Rt],C);for(let Rt of[me+1.65,me+4.8])for(let bt of[-3.6,0,3.6])i.box(E-k/2-.025,Rt,O+bt,.05,1.28,1.4,a("#5d625a")),i.box(E-k/2-.06,Rt,O+bt,.035,1.1,1.22,yt),i.box(E-k/2-.087,Rt,O+bt,.04,1.12,.035,mt)}let fe=window.FestaScenery.height,Pe=[...new Set([...Array.from({length:89},(E,O)=>-156+O*4),60.8,75.2,103.2])].sort((E,O)=>E-O),K=[...new Set([...Array.from({length:72},(E,O)=>-112+O*4),15.08,de,ne,96.08])].sort((E,O)=>E-O);for(let E=0;E<Pe.length-1;E++)for(let O=0;O<K.length-1;O++){let k=Pe[E],lt=K[O],X=Pe[E+1],gt=K[O+1];if(k<jt&&X===jt&&lt>=de&&gt<=ne)continue;let St=[[k,lt],[k,gt],[X,gt],[X,lt]].map(([At,te])=>[At,fe(At,te)-.1,te]);if(St.every(At=>At[1]<0))continue;let Rt=a("#ffffff",2,.98),bt=([At,te,le])=>{let Te=At===jt&&le>=de&&le<=ne?2*(fe(At,le)-fe(At+.1,le)):fe(At-.1,le)-fe(At+.1,le),ae=fe(At,le-.1)-fe(At,le+.1),$e=Math.hypot(Te,.2,ae);return[Te/$e,.2/$e,ae/$e]};for(let At of[[0,1,2],[0,2,3]])e.tri(...At.map(te=>St[te]),Rt,At.map(te=>[(St[te][0]+550)*460/1100,(St[te][2]+550)*460/1100]),At.map(te=>bt(St[te])))}for(let E=-149;E<188;E+=6)for(let O=-99;O<162;O+=6){if(fe(E,O)<2.3)continue;let k=u(Math.round((E+200)*800+O+200));ee(E+(k()-.5)*2,O+(k()-.5)*2,4.8+k()*2.1,Math.round((E+200)*801+O+201),1.5,30)}let xe=a("#7a895a",7,.98),we=a("#9ca469",7,.98),F=a("#625c46",1,1);function M(E,O,k,lt,X,gt){let St=u(gt);for(let Rt=0;Rt<Math.ceil(k*X*24);Rt++){let bt=St()*m,At=Math.sqrt(St()),te=E+Math.cos(bt)*k*.48*At,le=O+Math.sin(bt)*X*.48*At,Te=.12+lt*(.2+.8*Math.sqrt(1-At*At))*(.72+St()*.28),ae=.24+St()*.22;t.scope(h.compose(te,Te,le,St()*m),()=>{t.quad([-ae/2,-ae/2,0],[-ae/2,ae/2,0],[ae/2,ae/2,0],[ae/2,-ae/2,0],Rt%5?xe:we),t.quad([-ae/2,0,-ae/2],[-ae/2,0,ae/2],[ae/2,0,ae/2],[ae/2,0,-ae/2],xe)})}}for(let[E,O,k,lt,X]of[[135,429,5.4,.8,1.15],[158,429,3.6,.65,1.1],[177,429,2.3,.46,1],[279,430,4.1,.58,.85]]){let gt=r(E,O);i.plane(gt[0],.035,gt[1],k,X,F);for(let St of[-1,1])i.box(gt[0],.09,gt[1]+St*X/2,k,.18,.1,a("#a3a295",3,.97));for(let St of[-1,1])i.box(gt[0]+St*k/2,.09,gt[1],.1,.18,X,a("#a3a295",3,.97));M(gt[0],gt[1],k-.15,lt,X-.12,E*101)}for(let[E,O]of[[257,11],[287,7]])for(let k=0;k<O;k++){let lt=r(E+k*2.2,434),X=.39,gt=.26,St=a(k%3?"#d1c6ac":"#987554",3,.95);i.box(lt[0],gt/2,lt[1],X,gt,.28,St),i.plane(lt[0],gt+.008,lt[1],X-.045,.23,F);for(let Rt of[-1,1])i.box(lt[0],gt-.01,lt[1]+Rt*.14,X+.035,.055,.035,St);for(let Rt=0;Rt<3;Rt++){let bt=lt[0]+(Rt-1)*.1;i.cylinder([bt,gt,lt[1]],[bt,gt+.16+k%3*.025,lt[1]],.007,.004,a("#657352"),5),t.scope(h.compose(bt,gt+.14,lt[1],k+Rt),()=>{t.quad([-.09,-.03,0],[-.06,.11,0],[.06,.11,0],[.09,-.03,0],xe),t.quad([0,-.03,-.09],[0,.11,-.06],[0,.11,.06],[0,-.03,.09],we)})}}for(let[E,O,k,lt]of[[54,375,3.1,1.8],[69,375,2.8,1.8]]){let X=r(E,O),gt=2.05,St=a("#b7b9af",3,.95),Rt=a("#8f978e",0,.8,.15);i.box(X[0],gt/2,X[1],k,gt,lt,St),i.box(X[0],gt+.055,X[1],k+.18,.11,lt+.16,Rt);for(let bt of[-1,1])i.box(X[0]+bt*k*.23,gt*.48,X[1]-lt/2-.025,k*.43,gt*.9,.035,a("#9da79e",3,.92)),i.box(X[0]+bt*.075,1.04,X[1]-lt/2-.06,.025,.19,.045,Rt)}M(r(60,367)[0],r(60,367)[1],3.2,1.15,1.3,92160);let B=-66,V=-1,Y=11.2,vt=15.6,wt=6.3,at=a("#d8d8c9",3,.96);e.box(B,wt/2,V,Y,wt,vt,at);let ct=B+Y/2;e.quad([B-Y/2-.35,wt+.25,V-vt/2-.35],[B-Y/2-.35,wt+.25,V+vt/2+.35],[ct+.35,wt+.05,V+vt/2+.35],[ct+.35,wt+.05,V-vt/2-.35],a("#747d7a",10,.85),4,4),e.box(ct+.2,wt,V,.12,.19,vt+.7,at);for(let E of[-5.7,-2.7,0,3,5.7]){let O=E===0?.65:1.45;i.box(ct+.03,4.63,V+E,.055,1.38,O,mt),i.box(ct+.064,4.63,V+E,.02,1.24,O-.13,yt),i.box(ct+.086,4.63,V+E,.03,1.26,.035,mt)}for(let E of[-4.5,4.5])i.box(ct+.08,1.28,V+E,.12,2.5,1.37,a("#adb5ac",3,.85)),i.box(ct+.15,1.78,V+E,.035,.77,.92,yt),i.box(ct+.53,2.65,V+E,1.1,.12,2.05,a("#8e9994",10,.9)),i.box(ct+.85,.1,V+E,1.5,.2,2.1,C),i.sphere(ct+.14,2.77,V+E-1.3,.055,.11,.11,a("#eeeadd"),10,6);i.quad([ct,.03,V-7.5],[ct+.95,.03,V-7.5],[ct+.95,.2,V+6],[ct,.2,V+6],C,1,6),nt([ct+1.02,.03,V-7.5],[ct+1.02,.2,V+6],.83),n&&s!==void 0&&n.scope(h.compose(ct+.18,0,V,Math.PI/2),()=>n.sign(0,2.65,0,5.1,.95,s));let Et=-83,Gt=-22,Ct=fe(Et,Gt),Pt=29,Ht=a("#a7aca5",0,.68,.25);for(let E=0;E<8;E++){let O=Ct+E*Pt/8,k=Ct+(E+1)*Pt/8,lt=2.65-E*.235,X=lt-.235;for(let gt of[-1,1])for(let St of[-1,1])e.cylinder([Et+gt*lt,O,Gt+St*lt],[Et+gt*X,k,Gt+St*X],.07,.05,Ht,6),e.cylinder([Et+gt*lt,O,Gt+St*lt],[Et-gt*X,k,Gt+St*X],.026,.026,Ht,5),e.cylinder([Et+gt*lt,O,Gt+St*lt],[Et+gt*X,k,Gt-St*X],.026,.026,Ht,5)}for(let E of[Ct+20.5,Ct+24.8,Ct+29]){e.cylinder([Et-5,E,Gt],[Et+5,E,Gt],.075,.075,Ht,6);for(let O of[-4.7,4.7]){e.cylinder([Et+O,E,Gt],[Et+O,E-.9,Gt],.1,.1,a("#a6ada0"),8);let k=r(322,56),lt=[];for(let X=0;X<=28;X++){let gt=X/28;lt.push([Et+O+(k[0]-Et)*gt,E-.9+(26-(Ct+29))*gt-3.1*Math.sin(gt*Math.PI),Gt+(k[1]-Gt)*gt])}e.tube(lt,.028,a("#626963"),5)}}let Qt=[[103,69],[131,47],[202,40],[331,44],[479,94],[574,146],[583,632],[592,679],[470,739],[101,780],[71,735],[21,525],[30,339],[57,250],[63,145]],re=0;for(let E=0;E<Qt.length-1;E++){if(E===7||E===8||E===9)continue;let O=r(...Qt[E]),k=r(...Qt[E+1]),lt=k[0]-O[0],X=k[1]-O[1],gt=Math.hypot(lt,X),St=X/gt,Rt=-lt/gt;for(let bt=2;bt<gt;bt+=5.7){let At=bt/gt,te=O[0]+lt*At,le=O[1]+X*At;ee(te+St*7.6,le+Rt*7.6,b(7,11.3),1e4+re++),(E<5||E>10)&&ee(te+St*14.6+lt/gt*2.4,le+Rt*14.6+X/gt*2.4,b(8.2,13),1e4+re++,1.13),(E<6||E>10)&&ee(te+St*2,le+Rt*2,b(2.2,3.2),1e4+re++,1.8)}}e.scope(h.compose(-106,5,-41,Math.PI/2),()=>{let E=a("#c6c8bf",3,.92),O=a("#b4c2be",0,.76,.05),k=a("#46545a",0,.88),lt=a("#53696d",0,.37,.08),X=69,gt=12,St=5,Rt=2.85;e.box(0,-2.5,0,X+1,5,gt+2,a("#8a8c7b",3,.98)),e.box(0,St*Rt/2,0,X,St*Rt,gt,E);for(let bt=0;bt<St;bt++){let At=bt*Rt;e.box(0,At+1.4,gt/2+.07,X-.6,2.42,.12,k),e.box(0,At+.1,gt/2+1.02,X+.7,.2,2.15,E),e.box(0,At+.79,gt/2+1.98,X,.98,.1,O),e.box(0,At+1.33,gt/2+1.99,X,.06,.13,a("#d3d9d5",0,.45,.28));for(let te=-X/2+1.6;te<X/2;te+=3.45)e.box(te,At+1.4,gt/2+.16,2.1,2.25,.03,lt),e.box(te+.99,At+1.4,gt/2+.18,.035,2.25,.03,l.metal),e.box(te+1.52,At+1.4,gt/2+1.06,.1,2.58,1.85,E)}for(let bt of[-X/2,-X*.18,X*.18,X/2])e.box(bt,St*Rt/2,gt/2+1.08,.33,St*Rt,2.3,E);e.box(0,St*Rt+.13,0,X+1.2,.26,gt+4.2,E)});for(let E=0;E<13;E++){let O=-74+E*5.6,k=-84+E%3*2.7;ee(k,O,7.5+E%4*.9,32140+E,1.1,58,E===2||E===5||E===9)}let Z=a("#338db0",0,.63,.08),It=a("#ac4c39",0,.68),_t=a("#dbb548",0,.6),Lt=r(411,88);i.scope(h.compose(Lt[0],0,Lt[1],.18),()=>{for(let E of[-.55,.55])for(let O of[-.55,.55])i.cylinder([E,.02,O],[E,3.15,O],.045,.045,Z,8);i.box(0,1.94,0,1.22,.09,1.2,a("#899892",0,.7));for(let E of[-.61,.61])i.cylinder([E,2,-.55],[E,3.03,-.55],.035,.035,It,8),i.cylinder([E,3.03,-.55],[E,3.03,.55],.035,.035,It,8),i.quad([E*.72,1.96,.55],[E*.72,.16,3.45],[E*.72,.34,3.47],[E*.72,2.16,.55],_t,3,1);i.quad([-.44,1.97,.55],[.44,1.97,.55],[.44,.16,3.45],[-.44,.16,3.45],_t,1,3);for(let E=.28;E<1.97;E+=.27)i.cylinder([-.47,E,-.69],[.47,E,-.69],.026,.026,l.metal,7)});let Dt=r(483,126);for(let E=0;E<5;E++){let O=Dt[0]+E*1.5,k=1+E*.27;for(let lt of[-.65,.65])i.cylinder([O+lt,0,Dt[1]],[O+lt,k,Dt[1]],.032,.032,Z,8);i.cylinder([O-.65,k,Dt[1]],[O+.65,k,Dt[1]],.028,.028,l.metal,8)}let R=r(365,75);i.cylinder([R[0],0,R[1]],[R[0],3.5,R[1]],.075,.075,a("#aab4ad",0,.65,.2),10),i.box(R[0],3.45,R[1]+.18,1.8,1.05,.07,a("#e7e7da",3,.9)),i.box(R[0],3.32,R[1]+.23,.65,.49,.012,It),i.box(R[0],3.32,R[1]+.24,.58,.42,.012,a("#e7e7da"));let j=[];for(let E=0;E<=24;E++){let O=E/24*m;j.push([R[0]+Math.sin(O)*.23,3.02,R[1]+.56+Math.cos(O)*.23])}i.tube(j,.016,It,6)}};window.buildFestaWorld=async function(i,t=()=>{}){let{V:e,M:n,Geometry:s,Mesh:r,Atlas:l,material:a,color:h,rng:u,clamp:m,TAU:x}=FestaGL,f=FESTA_DATA,_=u(9212026),S=(o,p)=>o+(p-o)*_(),P=(o,p)=>[(o-320)*.22,(p-290)*.22],T=(o,p,v=0)=>{let A=P(o,p);return[A[0],v,A[1]]},d=new l(512),b=o=>new Promise((p,v)=>{let A=new Image;A.onload=()=>p(A),A.onerror=()=>v(new Error("内蔵テクスチャを読み込めません。")),A.src=o}),C=await b(FESTA_ASSETS.gravel),y=await b(FESTA_ASSETS.grass);t(.08,"地面と建物の素材を準備しています"),d.add("white",(o,p)=>{o.fillStyle="#fff",o.fillRect(0,0,p,p)});function c(o,p,v,A=.25){return d.add(o,(U,G)=>{U.drawImage(p,0,0,G,G);let H=U.getImageData(0,0,G,G),rt=h(v);for(let tt=0;tt<H.data.length;tt+=4){let Tt=H.data[tt]/255,Nt=.82+Tt*A;for(let Ut=0;Ut<3;Ut++)H.data[tt+Ut]=m(rt[Ut]*255*Nt,0,255);H.data[tt+3]=255}U.putImageData(H,0,0)})}c("soil",C,"#a19580",.32),c("grass",y,"#727b4d",.55),d.add("concrete",(o,p)=>{o.fillStyle="#efeee6",o.fillRect(0,0,p,p);let v=o.getImageData(0,0,p,p);for(let A=0;A<v.data.length;A+=4){let U=S(-12,6);for(let G=0;G<3;G++)v.data[A+G]+=U}o.putImageData(v,0,0),o.strokeStyle="rgba(119,119,107,.13)",o.lineWidth=1,o.beginPath(),o.moveTo(0,120),o.lineTo(p,120),o.stroke()}),c("asphalt",C,"#555754",.6),d.add("wood",(o,p)=>{o.fillStyle="#b78a57",o.fillRect(0,0,p,p);for(let v=0;v<8;v++){let A=v*64;o.fillStyle=`hsl(${31+S(-3,3)},${34+S(-5,5)}%,${55+S(-6,6)}%)`,o.fillRect(A,0,63,p);for(let G=0;G<35;G++){let H=A+S(1,62);o.strokeStyle=`rgba(73,44,18,${S(.04,.17)})`,o.lineWidth=S(.3,1.3),o.beginPath();for(let rt=0;rt<=p;rt+=16)o.lineTo(H+Math.sin(rt/72+G)*S(.2,1.4),rt);o.stroke()}o.fillStyle="rgba(43,32,24,.20)",o.fillRect(A,0,1,p);let U=v%3*163;o.fillRect(A,U,64,1)}}),d.add("fabric",(o,p)=>{o.fillStyle="#f7f6f0",o.fillRect(0,0,p,p);for(let v=0;v<p;v+=3)o.strokeStyle=v%6?"rgba(98,99,84,.05)":"rgba(255,255,255,.3)",o.beginPath(),o.moveTo(v,0),o.lineTo(v,p),o.stroke(),o.beginPath(),o.moveTo(0,v),o.lineTo(p,v),o.stroke();o.strokeStyle="rgba(154,155,144,.2)",o.lineWidth=2,o.strokeRect(8,8,p-16,p-16)});function w(o=!1){d.add(o?"autumn":"leaf",(p,v)=>{p.clearRect(0,0,v,v);for(let A=0;A<220;A++){let U=S(0,x),G=Math.sqrt(_())*228,H=v/2+Math.cos(U)*G,rt=v/2+Math.sin(U)*G;p.strokeStyle=o?"#6f6541":"#526445",p.lineWidth=1.8,p.beginPath(),p.moveTo(v/2,v*.7),p.quadraticCurveTo(v/2+(H-v/2)*.65,rt+40,H,rt),p.stroke();let tt=o?S(12,59):S(72,110);p.fillStyle=`hsl(${tt},${S(27,45)}%,${S(27,48)}%)`,p.beginPath(),p.ellipse(H,rt,S(6,11),S(12,23),U+.5,0,x),p.fill(),p.strokeStyle="rgba(208,214,130,.3)",p.lineWidth=.7,p.beginPath(),p.moveTo(H-4,rt-10),p.lineTo(H+4,rt+10),p.stroke()}})}w(!1),w(!0),d.add("bark",(o,p)=>{o.fillStyle="#807565",o.fillRect(0,0,p,p);for(let v=0;v<650;v++){o.strokeStyle=`rgba(${Math.floor(S(30,70))},${Math.floor(S(25,60))},${Math.floor(S(20,50))},${S(.1,.6)})`,o.lineWidth=S(.5,5),o.beginPath();let A=S(0,p),U=S(0,p);o.moveTo(A,U),o.lineTo(A+S(-9,9),U+S(14,120)),o.stroke()}}),d.add("roof",(o,p)=>{o.fillStyle="#a6b2b3",o.fillRect(0,0,p,p);for(let v=0;v<p;v+=32)o.fillStyle="#7c8d91",o.fillRect(v,0,3,p),o.fillStyle="#c7cecd",o.fillRect(v+3,0,2,p)}),d.add("net",(o,p)=>{o.clearRect(0,0,p,p),o.strokeStyle="#b1b4a7",o.lineWidth=3;for(let v=-p;v<p*2;v+=64)o.beginPath(),o.moveTo(v,0),o.lineTo(v+p,p),o.stroke(),o.beginPath(),o.moveTo(v,p),o.lineTo(v+p,0),o.stroke()}),d.add("tire",(o,p)=>{o.fillStyle="#2b2b2a",o.fillRect(0,0,p,p),o.strokeStyle="#484948",o.lineWidth=5;for(let v=0;v<p;v+=27)o.beginPath(),o.moveTo(0,v),o.lineTo(p*.5,v+15),o.lineTo(p,v),o.stroke()}),d.add("cloth",(o,p)=>{o.fillStyle="#eeeadf",o.fillRect(0,0,p,p),o.fillStyle="rgba(83,117,120,.12)";for(let v=0;v<p;v+=40)o.fillRect(v,0,18,p),o.fillRect(0,v,p,18)});let D={F:"#a64c35",S:"#385e76",T:"#4e6c43",P:"#83503e",M:"#c39343",I:"#27595c"},g={};for(let o of[...f.records.filter(p=>!["unplaced","performer","unconfirmed","workshop"].includes(p.kind)),...f.locations])g[o.id]={banner:d.banner(o.id.startsWith("F-")||o.id.startsWith("S-")||o.id.startsWith("T-")?o.id:{HQ:"INFO",GYM:"STAGE",MOBILITY:"RIDE",MEET:"REST",OUTSTAGE:"STAGE",GATE_MAIN:"WELCOME",GATE_WEST:"WELCOME",WC:"WC",EAT2:"REST"}[o.id]||"FESTA",o.short,o.caption,D[o.category]),menu:d.sign(o.id+"-menu",o.short,o.detail,D[o.category],o.id+"   "+(o.status||"予定"))};let L=d.banner("西鎌倉","鎌倉市立西鎌倉小学校","つながりフェスタ＠にしかま2026","#415d60"),z=d.banner("2026","つながりフェスタ＠にしかま","つながる、みつかる、すきになる","#356064"),J=d.sign("走行エリア","モビリティー",`実走路の中へは入れません。
見学は柵の外側から。`,"#a74d38","車両実走路"),q=d.banner("常設舞台","壇上舞台　使用せず","配置図に基づく表示","#695a51"),nt=d.banner("P","みんなの舞台","体育館内・開始予定","#83533c"),W=d.add("schedule",(o,p)=>{o.fillStyle="#fff9ec",o.fillRect(0,0,p,p),o.fillStyle="#5b3e32",o.font="700 29px sans-serif",o.fillText("体育館内 開始予定",24,42),o.font="17px sans-serif",o.fillText("終了時刻は未確認　／　当日変更の可能性あり",24,70),f.schedule.forEach((v,A)=>{let U=112+A*36;o.fillStyle=A%2?"#ffffff":"#f2ebde",o.fillRect(14,U-24,484,34),o.fillStyle="#83533c",o.font="700 20px sans-serif",o.fillText(v.time,23,U),o.fillStyle="#263b38";let G=18;o.font=`${G}px sans-serif`;let H=v.name;for(;o.measureText(H).width>370&&G>10;)o.font=`${--G}px sans-serif`;o.fillText(H,100,U)})}),Q=d.add("Entrance panels",(o,p)=>{let v=u(451);o.fillStyle="#33363b",o.fillRect(0,0,p,p);for(let A=0;A<p;A+=5)for(let U=0;U<p;U+=12){let G=40+v()*25;o.fillStyle=`rgb(${G},${G+1},${G+5})`,o.fillRect(U+(A%10?6:0),A,10,3)}}),dt=FestaScenery.textures(d,u),ut=d.add("gym-floor",(o,p)=>{o.fillStyle="#aa7549",o.fillRect(0,0,p,p);for(let v=0;v<p;v+=32){o.fillStyle=`hsl(${27+S(-2,2)},${40+S(-5,5)}%,${48+S(-4,4)}%)`,o.fillRect(v+1,0,30,p),o.fillStyle="rgba(71,43,25,.24)",o.fillRect(v,0,1,p);let A=Math.floor(v/32)%4*128+32;o.fillRect(v+1,A,30,1);for(let U=0;U<9;U++)o.fillStyle=`rgba(84,51,27,${S(.025,.075)})`,o.fillRect(v+S(2,29),0,S(.35,1),p)}}),yt=d.add("gym-wall-wood",(o,p)=>{o.fillStyle="#a77b60",o.fillRect(0,0,p,p);for(let v=0;v<p;v+=26)o.fillStyle=`hsl(${24+S(-2,2)},${31+S(-4,4)}%,${47+S(-3,3)}%)`,o.fillRect(v+1,0,24,p),o.fillStyle="rgba(44,27,21,.27)",o.fillRect(v,0,1,p),o.fillStyle="rgba(227,180,128,.15)",o.fillRect(v+3,0,1,p)}),mt=d.add("gym-display-board",(o,p)=>{o.fillStyle="#ecebe5",o.fillRect(0,0,p,p),o.fillStyle="#aaa9a2";for(let v=12;v<p;v+=16)for(let A=12;A<p;A+=16)o.beginPath(),o.arc(A,v,1.4,0,x),o.fill()}),ft=o=>Object.assign(a(o,dt,.39,.06),{fit:!0}),it=new s,N=new s,Zt=new s,Me=new s,zt=new s,et={dirt:a("#fff",1,.97),grass:a("#fff",2,.98),wall:a("#dedccf",3,.93),base:a("#a3aaa5",3,.9),asphalt:a("#fff",4,.95),wood:a("#fff",5,.64),metal:a("#a6b0ac",0,.3,.65),whiteMetal:a("#f1f1e8",0,.42,.24),dark:a("#273036",0,.72),glass:ft("#c1cece"),black:a("#252928",0,.6),fabric:a("#f9f9f4",6,.85),bark:a("#fff",9,.94),leaf:a("#fff",7,.88),autumn:a("#fff",8,.9),tire:a("#fff",12,.93)},xt=[],Mt=[],Ft=[],ee=[],Ot=[],se=[];function oe(o,p,v,A,U="",G=0){xt.push({x:o,z:p,w:v,d:A,id:U,r:G})}function ue(o,p,v,A,U){let G=P(o,p),H=P(v,A);oe((G[0]+H[0])/2,(G[1]+H[1])/2,H[0]-G[0],H[1]-G[1],U)}let de=[[103,69],[131,47],[202,40],[331,44],[479,94],[574,146],[583,632],[592,679],[470,739],[101,780],[71,735],[21,525],[30,339],[57,250],[63,145],[116,123],[95,101]].map(o=>P(...o));function ne(o,p,v){let A=!1;for(let U=0,G=v.length-1;U<v.length;G=U++){let H=v[U],rt=v[G];H[1]>p!=rt[1]>p&&o<(rt[0]-H[0])*(p-H[1])/(rt[1]-H[1])+H[0]&&(A=!A)}return A}let me=0;function Se(o,p,v,A=3){let U=o.map(Ut=>[...Ut]);U.reduce((Ut,kt,ie)=>{let Je=U[(ie+1)%U.length];return Ut+kt[0]*Je[1]-Je[0]*kt[1]},0)<0&&U.reverse();let H=U.map((Ut,kt)=>kt),rt=.007+me++*.011,tt=(Ut,kt,ie)=>(kt[0]-Ut[0])*(ie[1]-Ut[1])-(kt[1]-Ut[1])*(ie[0]-Ut[0]),Tt=0;function Nt(Ut,kt,ie){p.tri([Ut[0],rt,Ut[1]],[ie[0],rt,ie[1]],[kt[0],rt,kt[1]],v,[[Ut[0]/A,Ut[1]/A],[ie[0]/A,ie[1]/A],[kt[0]/A,kt[1]/A]])}for(;H.length>3&&Tt++<600;){let Ut=!1;for(let kt=0;kt<H.length;kt++){let ie=H[(kt-1+H.length)%H.length],Je=H[kt],He=H[(kt+1)%H.length],Le=U[ie],on=U[Je],In=U[He];if(!(tt(Le,on,In)<1e-4)&&!H.some(Vn=>Vn!==ie&&Vn!==Je&&Vn!==He&&tt(Le,on,U[Vn])>=0&&tt(on,In,U[Vn])>=0&&tt(In,Le,U[Vn])>=0)){Nt(Le,on,In),H.splice(kt,1),Ut=!0;break}}if(!Ut)break}H.length===3&&Nt(...H.map(Ut=>U[Ut]))}it.plane(0,-.1,0,1100,1100,et.grass,460,460),Se(de,it,et.asphalt,.7);let Ze=[P(64,146),P(147,146),P(175,83),P(286,78),P(382,92),P(491,128),P(575,167),P(575,300),P(470,302),P(469,412),P(430,431),P(425,407),P(260,408),P(223,418),P(170,413),P(99,420),P(98,388),P(66,388),P(64,350)];Se(Ze,it,et.dirt,1.35),t(.18,"配置図から校舎と会場を組み立てています");function fe(o,p,v,A,U=10.65,G="校舎",H=!0){let rt=P(o,p),tt=P(v,A),Tt=(rt[0]+tt[0])/2,Nt=(rt[1]+tt[1])/2,Ut=tt[0]-rt[0],kt=tt[1]-rt[1];if(ee.push({x:Tt,z:Nt,w:Ut,d:kt,h:U,label:G}),oe(Tt,Nt,Ut+.18,kt+.18,G),it.box(Tt,U/2,Nt,Ut,U,kt,et.wall),it.box(Tt,.24,Nt,Ut+.15,.48,kt+.15,et.base),it.box(Tt,U+.12,Nt,Ut+.55,.24,kt+.55,a("#c6c3b6",0,.86)),!H)return;let ie=U>12?4:U>9?3:2,Je=(U-.35)/ie;for(let He=0;He<4;He++){let Le=He%2?kt:Ut,on=He%2?Ut:kt;N.scope(n.compose(Tt,0,Nt,He*Math.PI/2),()=>{let In=Math.max(1,Math.floor((Le-.9)/4.3)),Vn=(Le-.9)/In;for(let Sn=0;Sn<ie;Sn++){let Yi=1.62+Sn*Je,$r=Sn===0?1.8:1.16;N.box(0,Sn*Je+.45,on/2+.015,Le,.035,.026,a("#b4b3a7",0,.95));for(let Kr=0;Kr<In;Kr++){let js=-Le/2+.45+(Kr+.5)*Vn,hs=Vn*.84;N.box(js,Yi,on/2+.024,hs+.12,$r+.12,.06,a("#aaa99f",0,.6,.25)),N.box(js,Yi,on/2+.06,hs,$r,.025,ft((Kr+Sn)%4===0?"#a9b8b8":"#c5cecb"));for(let el=1;el<4;el++)N.box(js-hs/2+el*hs/4,Yi,on/2+.085,.038,$r,.032,et.metal);N.box(js,Yi-$r/2-.035,on/2+.11,hs+.17,.075,.17,a("#bdbdb3",0,.85)),Sn===0&&N.box(js,Yi+.2,on/2+.087,hs,.037,.03,et.metal)}}for(let Sn=0;Sn<=In;Sn+=2){let Yi=-Le/2+.45+Sn*Vn;N.box(Yi,U/2,on/2+.085,.22,U,.17,et.wall)}for(let Sn of[-1,1])N.cylinder([Sn*(Le/2-.2),.35,on/2+.19],[Sn*(Le/2-.2),U-.2,on/2+.19],.045,.045,a("#a9aaa0",0,.75),8)})}}fe(95.4,436.56,329.52,489.72,13.5),fe(30.48,411.36,82.56,541.56,10.65),fe(67.32,389.4,95.4,436.56,10.65),fe(329.52,430.32,425.28,516.36,13.5),fe(307.92,489.72,329.52,516.36,7.2),fe(311.52,535.08,390.72,603.6,7.9,"昇降口",!1),fe(103.44,608.28,401.04,666.1,10.7);{let o=P(111,436.56);N.box(o[0],6.75,o[1]-.16,6.1,13.5,.32,et.wall);for(let p of[3.2,6.5,9.8,13.4])N.box(o[0],p,o[1]-.36,6.55,.19,.47,et.wall);N.box(o[0],1.3,o[1]-.34,4.7,2.4,.05,et.glass),N.box(o[0],2.88,o[1]-1,6.4,.2,2,et.wall)}{let o=P(238,436.56),p=a("#693f30",0,.78),v=a("#9e9f94",0,.72,.18);N.box(o[0],1.25,o[1]-.035,6.3,2.5,.08,p),N.box(o[0],2.8,o[1]-.7,8.8,.18,1.5,a("#724b3e",0,.8));for(let A of[-4.1,4.1])N.box(o[0]+A,1.4,o[1]-1.2,.23,2.8,.23,et.wall);for(let A of[-2.75,-1.38,0,1.38,2.75])N.box(o[0]+A,1.32,o[1]-.095,.045,2.24,.07,v),N.box(o[0]+A,2.22,o[1]-.13,1.3,.055,.05,v);for(let A of[-1.1,1.1])N.box(o[0]+A,1.12,o[1]-.15,.05,.32,.06,v);N.box(o[0],.055,o[1]-1.45,9,.11,2.55,a("#aeada1",3,.95))}function Pe(o,p,v,A=0){N.scope(n.compose(o,p,v,A),()=>{N.cylinder([0,0,-.03],[0,0,.06],.48,.48,et.whiteMetal,36),N.cylinder([0,0,.062],[0,0,.07],.43,.43,a("#efefdf"),36);for(let U=0;U<12;U++){let G=U/12*x;N.cylinder([Math.sin(G)*.34,Math.cos(G)*.34,.085],[Math.sin(G)*.38,Math.cos(G)*.38,.085],.01,.01,et.dark,5)}N.cylinder([0,0,.095],[.07,.27,.095],.017,.017,et.dark,6),N.cylinder([0,0,.1],[.27,-.1,.1],.013,.013,et.dark,6)})}{let o=P(365,430.2);Pe(o[0],6.8,o[1]-.06,Math.PI)}{let o=P(391,566);N.scope(n.compose(o[0]+.06,0,o[1],Math.PI/2),()=>{let p=a("#e1e0d4",3,.92),v=a("#ffffff",Q,.95),A=2.1,U=.22,G=-.85;N.box(0,5.5,.93,14.4,4.5,2.34,p),N.box(-3.92,5.59,A+.045,5.35,3.05,.06,v),N.box(3.14,5.59,A+.045,6.91,3.05,.06,v),N.box(0,7.84,.96,14.7,.2,2.52,p),N.box(0,3.28,.94,14.4,.3,2.32,p),N.box(0,.16,1.18,14.5,.2,2.88,a("#aaa99e",3,.9)),N.box(0,1.65,U-.08,13.65,2.92,.06,a("#252e2c",0,.93));let H=a("#b4b9b4",0,.42,.38),rt=a("#56665f",0,.3,.15);for(let tt=0;tt<10;tt++){let Tt=-6.08+tt*1.35;N.box(Tt,1.5,U,1.28,2.25,.035,rt),N.box(Tt,2.85,U,1.28,.37,.035,a("#777e70",0,.36)),N.box(Tt-.66,1.65,U+.045,.045,2.9,.055,H);for(let Nt of[.38,1.18,2.64,3.06])N.box(Tt,Nt,U+.045,1.34,.045,.055,H);tt%2===0&&(N.box(Tt+.46,1.2,U+.105,.025,.32,.035,H),N.box(Tt+.46,1.02,U+.075,.12,.025,.08,H))}N.box(6.74,1.65,U+.045,.045,2.9,.055,H);for(let tt of[-6.91,G,6.91])N.box(tt,1.71,A-.29,.58,3.08,.58,p),N.box(tt,.23,A-.29,.67,.15,.67,a("#b7b7aa",3,.94));for(let tt of[-6.9,6.9])N.box(tt,1.74,1.08,.28,3.04,1.88,p);for(let tt of[-5.25,-2.65,1.55,4.85])N.box(tt,3.115,1.16,.38,.045,.26,a("#50534b")),N.box(tt,3.086,1.16,.29,.017,.17,a("#e7e3c5",0,.6,0,.25));for(let tt=0;tt<3;tt++)N.box(0,.03+tt*.05,3.25-tt*.38,14.7,.06+tt*.1,.4,a("#a9a79b",3,.9));Pe(G,3.6,A+.08,0)})}{let o=P(204,420),p=a("#919b94",0,.58,.21),v=a("#a9aea5",0,.82);it.box(o[0],1.8,o[1],8.9,3.6,5.3,et.wall),it.box(o[0],3.66,o[1],9.15,.18,5.55,a("#919b94",10)),oe(o[0],o[1],9,5.4,"用具庫");for(let A of[-1,1]){N.box(o[0]+A*2.12,1.58,o[1]-2.69,4.08,2.95,.07,v),N.box(o[0]+A*2.12,1.59,o[1]-2.75,4,.035,.055,p);for(let U=-1;U<=1;U++)N.box(o[0]+A*2.12+U*1.17,1.58,o[1]-2.75,.025,2.88,.045,p);N.box(o[0]+A*3.5,1.34,o[1]-2.79,.045,.26,.045,p)}N.box(o[0],3.16,o[1]-2.81,8.75,.22,.12,p);for(let A of[-3.9,0,3.9])N.cylinder([o[0]+A,3.58,o[1]-2.64],[o[0]+A,.08,o[1]-2.64],.045,.045,p,8);N.box(o[0],1.3,o[1]+2.68,3,2.6,.08,a("#79857f",0,.46,.35))}function K(o,p,v=0){let A=P(o,p);N.scope(n.compose(A[0],0,A[1],v),()=>{N.box(0,.63,0,2.9,.33,.52,et.base),N.box(0,.83,0,2.96,.08,.6,a("#c3cdca",0,.23,.7));for(let U=0;U<6;U++){let G=-1.22+U*.49;N.box(G,.84,0,.35,.015,.33,a("#697e81",0,.18,.65)),N.cylinder([G,.81,-.19],[G,1.15,-.19],.018,.018,et.metal,7),N.cylinder([G,1.15,-.19],[G,1.15,.02],.017,.017,et.metal,7)}for(let U of[-1.1,1.1])N.box(U,.35,0,.13,.7,.34,et.base)})}K(251,414),K(42,400);{let o=P(401,538),p=a("#ac7049",0,.94);N.cylinder([o[0],.12,o[1]],[o[0],.75,o[1]],1.25,1.25,p,36),N.cylinder([o[0],.75,o[1]],[o[0],.82,o[1]],1.29,1.29,a("#ada99a"),36),N.cylinder([o[0],.825,o[1]],[o[0],.84,o[1]],1.1,1.1,et.base,36);for(let v=0;v<24;v++){let A=v/24*x;N.cylinder([o[0]+1.252*Math.sin(A),.12,o[1]+1.252*Math.cos(A)],[o[0]+1.252*Math.sin(A),.74,o[1]+1.252*Math.cos(A)],.009,.009,a("#d4b99a"),5)}for(let v of[-.48,.48])N.cylinder([o[0]+v,.84,o[1]],[o[0]+v,1.18,o[1]],.025,.025,et.metal,7),N.cylinder([o[0]+v,1.18,o[1]],[o[0]+v+.16,1.18,o[1]],.025,.025,et.metal,7)}let xe=470,we=580,F=302,M=504,B=P(xe,F),V=P(we,M),Y=[(B[0]+V[0])/2,(B[1]+V[1])/2],vt=V[0]-B[0],wt=V[1]-B[1],at=P(500,468)[1],ct=.45,Et=at-B[1],Gt=(B[1]+at)/2;it.box(Y[0],ct/2,Y[1],vt,ct,wt,a("#b7b9b3",3,.94)),it.plane(Y[0],ct+.045,Gt,vt,Et,a("#ffffff",ut,.4),vt/4,Et/4),it.plane(Y[0],ct+.044,(at+V[1])/2,vt,V[1]-at,a("#c9c5b9",0,.88),vt/4,2),ee.push({x:Y[0],z:Y[1],w:vt,d:wt,h:10,label:"体育館",gym:!0}),it.box(V[0],2.1,Y[1],.35,4.2,wt,et.wall),it.box(V[0],8.38,Y[1],.35,.64,wt,et.wall),oe(V[0],Y[1],.4,wt,"体育館東壁"),it.box(Y[0],4.35,B[1],vt,8.7,.35,et.wall),oe(Y[0],B[1],vt,.4,"体育館壁");let Ct=B[0]+vt*.38,Pt=2.25,Ht=ct,Qt=a("#e1dfd5",3,.92),re=B[0]+vt*77/309,Z=B[0]+vt*156/309,It=B[0]+vt*202/309,_t=B[0]+vt*233/309,Lt=at+(V[1]-at)*27/66,Dt=(B[0]+re)/2,R=(_t+V[0])/2,j=1.1,E=[[Dt-j,Dt+j],[Ct-Pt,Ct+Pt],[R-j,R+j]],O=[],k=B[0];for(let[o,p]of E)o>k&&O.push([k,o]),k=p;k<V[0]&&O.push([k,V[0]]);let lt=[[B[0]+2,B[0]+3.5],[Z+.8,Z+1.8],[It+.6,It+1.55],[_t+1.7,_t+3.2]],X=[lt[0],[Ct-Pt,Ct+Pt],...lt.slice(1)],gt=[],St=B[0];for(let[o,p]of X)o>St&&gt.push([St,o]),St=p;St<V[0]&&gt.push([St,V[0]]);for(let[o,p]of gt)it.box((o+p)/2,2.1,V[1],p-o,4.2,.35,et.wall),oe((o+p)/2,V[1],p-o,.4,"体育館南壁");for(let[o,p]of lt){let v=(o+p)/2,A=p-o;it.box(v,.58,V[1],A,1.16,.35,et.wall),it.box(v,3.45,V[1],A,1.5,.35,et.wall),N.box(v,1.93,V[1]+.045,A-.12,1.52,.055,ft("#aab9b7")),oe(v,V[1],A,.4,"体育館南壁の窓")}it.box(Ct,3.6,V[1],Pt*2,1.2,.35,et.wall),it.box(Y[0],6.45,V[1],vt,4.5,.35,et.wall);for(let[o,p]of O)it.box((o+p)/2,2.1,at,p-o,4.2,.35,et.wall),oe((o+p)/2,at,p-o,.4,"体育館床の出口側の壁");let Rt=a("#f4f3ed",0,.62,.08),bt=a("#e2e2da",0,.54,.24);for(let o of[Dt,R])it.box(o,3.6,at,j*2,1.2,.35,et.wall),it.box(o,1.51,at-.095,j*2-.12,3.02,.11,Rt),N.box(o,1.52,at-.17,j*2+.06,3.1,.045,bt),N.box(o,1.52,at-.205,j*2-.12,2.98,.025,Rt),N.box(o+(o<Y[0]?.78:-.78),1.4,at-.24,.025,.23,.05,et.metal),oe(o,at,j*2,.4,"出演者控室の閉じた扉");it.box(Ct,3.6,at,Pt*2,1.2,.35,et.wall),it.box(Y[0],6.37,at,vt,4.34,.35,et.wall),it.tri([B[0],8.54,at],[Y[0],9.97,at],[V[0],8.54,at],et.wall);function At(o,p,v){it.box(o,Ht+1.6,(p+v)/2,.16,3.2,v-p,Qt),oe(o,(p+v)/2,.18,v-p,"体育館前室の壁")}function te(o,p,v){it.box((o+p)/2,Ht+1.6,v,p-o,3.2,.16,Qt),oe((o+p)/2,v,p-o,.18,"体育館前室の壁")}At(re,at+.22,V[1]),At(Z,Lt,V[1]),At(It,at+.22,V[1]),At(_t,at+.22,V[1]),te(Z,It,Lt);let le=a("#a69b86",0,.82),Te=(Lt+V[1])/2,ae=V[1]-Lt-.55;for(let o of[re+.36,Z-.48]){for(let p of[.28,.7,1.12])N.box(o,ct+p,Te,.56,.07,ae,le);for(let p of[-1,1])N.box(o+p*.27,ct+.7,Te,.045,1.1,ae,le);oe(o,Te,.56,ae,"下駄箱")}[["出演者控室（小）",(B[0]+re)/2],["WC（M）",(Z+It)/2],["WC（W）",(It+_t)/2],["出演者控室（大）",(_t+V[0])/2]].forEach(([o,p],v)=>{let A=d.add("gym-room-"+v,(U,G)=>{U.fillStyle="#f5f3eb",U.fillRect(0,0,G,G),U.fillStyle="#273b39",U.textAlign="center",v===0||v===3?(U.font="700 78px sans-serif",U.fillText("出演者控室",G/2,218),U.font="700 100px sans-serif",U.fillText(v===0?"（小）":"（大）",G/2,350)):(U.font="700 112px sans-serif",U.fillText(o,G/2,296))});zt.scope(n.compose(p,0,V[1]-.24,Math.PI),()=>{zt.sign(0,3.35,0,v===0||v===3?2.2:1.35,.36,A,!0)})});let Be=[[335,344],[421,433],[468,484]],Bn=[[302,335],[344,421],[433,468],[484,504]];for(let[o,p]of Bn){let v=P(xe,o),A=P(xe,p);it.box(B[0],2.1,(v[1]+A[1])/2,.36,4.2,A[1]-v[1],et.wall),oe(B[0],(v[1]+A[1])/2,.4,A[1]-v[1],"体育館西壁")}it.box(B[0],8.38,Y[1],.36,.64,wt,et.wall);for(let[o,p]of Be){let v=P(xe,o),A=P(xe,p);it.box(B[0],3.49,(v[1]+A[1])/2,.36,1.42,A[1]-v[1],et.wall)}let Xn=ft("#aab9b7"),zn=a("#b7b9ae",0,.53,.3);for(let o of[-1,1]){let p=Y[0]+o*vt/2;N.box(p,6.13,Y[1],.03,3.86,wt-.75,Xn);for(let v of[4.2,5.05,6.1,7.12,8.05])N.box(p,v,Y[1],.16,.065,wt,zn);for(let v=B[1]+.45;v<V[1];v+=1.35)N.box(p,6.13,v,.17,3.9,.055,zn);for(let v=B[1]+.5;v<V[1];v+=5.4)o<0&&Be.some(([A,U])=>v>P(xe,A)[1]-.2&&v<P(xe,U)[1]+.2)||N.box(p,4.3,v,.45,8.6,.33,et.wall);for(let v=B[1]+.5;v<V[1]-.4;v+=.55)N.box(p-o*.3,4.9,v,.035,1.2,.03,et.whiteMetal);N.box(p-o*.3,5.5,Y[1],.05,.05,wt,et.whiteMetal)}let _n=a("#ffffff",yt,.78),kn=a("#966d50",0,.76);for(let o of[-1,1])for(let[p,v]of o<0?Bn:[[302,504]]){let A=P(xe,p)[1],U=P(xe,v)[1],G=Y[0]+o*(vt/2-.205);N.box(G,2.14,(A+U)/2,.028,4.03,U-A,_n),N.box(G-o*.04,4.14,(A+U)/2,.045,.11,U-A,kn);for(let H=A+.36;H<U;H+=.75)N.box(G-o*.03,2.1,H,.035,3.94,.026,kn);N.cylinder([G-o*.35,5.2,A],[G-o*.35,5.2,U],.025,.025,et.whiteMetal,8)}for(let[o,p]of Be){let v=P(xe,o)[1],A=P(xe,p)[1];N.box(B[0]+.205,3.49,(v+A)/2,.035,1.42,A-v,_n)}let Mn=at-.205;for(let[o,p]of O)N.box((o+p)/2,1.55,Mn,p-o,2.94,.035,_n);N.box(Y[0],3.57,Mn,vt,1.1,.035,_n);for(let o=B[0]+.38;o<V[0]-.2;o+=.53){let p=E.some(([v,A])=>o>=v&&o<=A);N.box(o,p?3.57:2.1,Mn-.028,.022,p?1.02:3.96,.02,kn)}let Ti=a("#e6e2d8",0,.76),Yo=a("#24775f",0,.74,.04);for(let o of[-1,1])N.box(Ct+o*2.25,1.52,Mn-.04,.11,3.04,.09,Ti);N.box(Ct,3.02,Mn-.04,4.6,.12,.09,Ti);let Zo=a("#f4f3ed",0,.64,.08);for(let o of[-1,1])N.box(Ct+o*(Pt-.11),1.51,at+.67,.08,2.98,1.28,Zo),N.box(Ct+o*(Pt-.17),1.44,at+.25,.035,.27,.05,et.metal);for(let o of[-4.8,0,4.8]){let p=Y[0]+o;N.box(p,6,Mn-.02,1.35,2.4,.05,Ti),N.box(p,6,Mn-.055,1.21,2.25,.025,Yo),N.box(p-.35,6,Mn-.073,.08,2.19,.015,a("#6eb49a",0,.79,.02))}let Hr=a("#8f9693",10,.78,.12),I=a("#e8e6dc",0,.96);for(let o of[-1,1]){let p=Y[0]+o*(vt/2+.4);Me.quad([Y[0],10.15,B[1]-.4],[Y[0],10.15,V[1]+.4],[p,8.72,V[1]+.4],[p,8.72,B[1]-.4],Hr,wt/3,4),Me.quad([Y[0],9.97,B[1]],[p,8.54,B[1]],[p,8.54,V[1]],[Y[0],9.97,V[1]],I,1,1)}for(let o of[B[1],V[1]])it.tri([B[0],8.7,o],[Y[0],10.15,o],[V[0],8.7,o],et.wall);for(let o=B[1]+3;o<V[1]-1;o+=5.4)for(let p of[-7,-2.3,2.3,7]){let v=9.93-Math.abs(p)/(vt/2)*1.43;Me.cylinder([Y[0]+p,v-.07,o],[Y[0]+p,v-.01,o],.25,.25,et.whiteMetal,20),Me.disk(Y[0]+p,v-.085,o,.215,a("#fff9e4",0,.9,0,.8),20)}let $=a("#a8784f",0,.58),pt=a("#391722",6,.94),ot=a("#c39736",0,.47,.17),st=B[1]+4.03,Bt=B[1]+2.14;for(let o of[-1,1]){let p=vt/2-6.12,v=Y[0]+o*(6.12+p/2);it.box(v,4.35,st,p,8.7,.35,et.wall),oe(v,st,p,.4,"体育館壁"),N.box(v,2.1,st+.21,p,4.16,.05,_n);for(let A=v-p/2+.36;A<v+p/2;A+=.5)N.box(A,2.1,st+.25,.023,4.08,.026,kn)}it.box(Y[0],8.2,st,12.24,1,.35,et.wall),it.box(Y[0],ct+.55,B[1]+2.1,11,1.1,4,a("#aa7649",ut,.52)),oe(Y[0],B[1]+2.1,11,4.2,"常設舞台・使用せず"),N.box(Y[0],3.81,Bt,11.2,5.46,.11,pt);for(let o=0;o<32;o++){let p=Y[0]-5.42+o*.35;N.cylinder([p,1.1,Bt+.08],[p,6.49,Bt+.08],.075,.075,a(o%3?"#421925":"#572331",6,.96),7)}for(let o of[1.1,6.48])N.box(Y[0],o,Bt+.17,11.18,.085,.1,ot);for(let o of[-1,1])N.box(Y[0]+o*5.86,4.05,st,.73,6.89,.45,$),N.box(Y[0]+o*5.49,3.79,(Bt+st)/2,.22,5.95,st-Bt,$);N.box(Y[0],7.46,st,12.45,.66,.45,$),N.box(Y[0],6.89,st+.23,11.12,.55,.07,a("#4a1a28",0,.94)),N.quad([Y[0],7.24,st+.28],[Y[0]-.25,6.97,st+.28],[Y[0],6.7,st+.28],[Y[0]+.25,6.97,st+.28],ot),N.box(Y[0],1,st+.11,11.1,1.1,.15,_n);for(let o of[-1,1])N.box(Y[0]+o*8.25,2.55,st+.29,3.2,.92,.06,_n);zt.sign(Y[0]-8.25,2.55,st+.34,3,.62,q),zt.sign(Y[0]+8.25,2.55,st+.34,3,.62,nt);{let o=V[0]-.25,p=a("#ffffff",mt,.91);for(let v=0;v<5;v++){let A=B[1]+8.3+v*5.45;N.box(o,2.53,A,.09,2.45,5.24,kn),N.box(o-.06,2.53,A,.025,2.31,5.1,p);for(let U=0;U<2;U++)for(let G=0;G<5;G++){let H=A+(G-2)*.92,rt=2.99-U*.91;N.box(o-.084,rt,H,.014,.66,.54,a(["#edece6","#e2e5df","#e7e0d7"][G%3],0,.94))}}}for(let o of[-1,1])for(let p of[B[1]+20,B[1]+33,B[1]+46])N.box(Y[0]+o*(vt/2-.245),6.03,p,.035,2.9,2.4,a("#27443b",6,.9));for(let o of[-1,1])N.cylinder([Y[0]+o*6,.05,B[1]+5],[Y[0]+o*6,5.3,B[1]+5],.045,.045,et.metal,8);function qt(o,p,v,A,U,G=.066+ct){let H=v[0]-p[0],rt=v[1]-p[1],tt=Math.hypot(H,rt),Tt=-rt/tt*A/2,Nt=H/tt*A/2;o.quad([p[0]-Tt,G,p[1]-Nt],[p[0]+Tt,G,p[1]+Nt],[v[0]+Tt,G,v[1]+Nt],[v[0]-Tt,G,v[1]-Nt],U,tt,1)}for(let o of[Y[0]-8.2,Y[0]+8.2])qt(N,[o,B[1]+6],[o,at-2],.047,a("#f5ede3"));for(let o of[B[1]+6,Gt,at-2])qt(N,[Y[0]-8.2,o],[Y[0]+8.2,o],.047,a("#f5ede3"));for(let o of[Y[0]-6.8,Y[0]+6.8])qt(N,[o,B[1]+13],[o,at-3],.036,a("#293239"),.068+ct);for(let o of[B[1]+13,at-3])qt(N,[Y[0]-6.8,o],[Y[0]+6.8,o],.036,a("#293239"),.068+ct);for(let o of[Y[0]-9.2,Y[0]+9.2])qt(N,[o,B[1]+16],[o,at-4],.038,a("#2f7795"),.07+ct);let Vt=P(469.65,427);zt.scope(n.compose(Vt[0]-.12,0,Vt[1],-Math.PI/2),()=>{zt.sign(0,2.94,0,3.5,.75,g.GYM.banner),zt.sign(3.7,1.55,.1,1.08,1.65,W)}),t(.3,"テント・キッチンカー・ブースの内容を配置しています");function Yt(o,p,v,A=0,U="#66746c",G=0){o.scope(n.compose(p,G,v,A),()=>{let H=a("#a5aca8",0,.32,.5),rt=a(U,6,.82);o.box(0,.43,0,.42,.055,.39,rt),o.box(0,.7,-.18,.43,.3,.045,rt);for(let tt of[-.17,.17])o.cylinder([tt,.04,-.15],[tt,.86,-.18],.016,.016,H,6),o.cylinder([tt,.04,.21],[tt,.44,.1],.016,.016,H,6),o.cylinder([tt,.05,-.16],[tt,.47,.15],.014,.014,H,6);o.cylinder([-.19,.18,-.14],[.19,.18,-.14],.012,.012,H,6)})}function $t(o,p,v,A=1.8,U=.72,G=0,H=!0,rt=!1){o.scope(n.compose(p,0,v,G),()=>{o.box(0,.73,0,A,.07,U,H?a("#f2ede1",13,.9):a("#d5c8af",5,.7));for(let tt of[-A*.36,A*.36])o.cylinder([tt,.06,-U*.34],[tt,.71,U*.32],.022,.022,et.metal,7),o.cylinder([tt,.06,U*.34],[tt,.71,-U*.32],.022,.022,et.metal,7);if(o.cylinder([-A*.38,.35,0],[A*.38,.35,0],.021,.021,et.metal,7),H)for(let tt of[-1,1])o.box(0,.6,tt*U/2,A,.25,.016,a("#eeeadf",6,.94))}),rt&&oe(p,v,Math.abs(Math.cos(G))*A+Math.abs(Math.sin(G))*U,Math.abs(Math.sin(G))*A+Math.abs(Math.cos(G))*U,"table")}let ge=P(368,283);for(let o=0;o<4;o++)for(let p=0;p<4;p++){let v=ge[0]+(p-1.5)*2.62,A=ge[1]+(o-1.5)*2.42;$t(N,v,A,1.65,.7,0,!0,!0);for(let U of[-1,1])for(let G=0;G<3;G++){let H=v+(G-1)*.53,rt=A+U*.71;Yt(N,H,rt,U===-1?0:Math.PI,"#6f7970"),se.push({x:H,z:rt,yaw:U===-1?0:Math.PI})}}let _e=P(431,548);for(let o=0;o<3;o++){$t(N,_e[0],_e[1]+(o-1)*2.2,1.8,.65,0,!0,!0);for(let p of[-1,1])for(let v=0;v<3;v++)Yt(N,_e[0]+(v-1)*.57,_e[1]+(o-1)*2.2+p*.68,p<0?0:Math.PI)}for(let o=0;o<6;o++)for(let p=0;p<12;p++){let v=Y[0]+(p-5.5)*.64+(p<6?-.7:.7),A=B[1]+18.5+o*.92;Yt(N,v,A,Math.PI,"#566a68",ct+.05),se.push({x:v,z:A,yaw:Math.PI,gym:!0})}for(let o=0;o<6;o++)for(let p of[-2,-1,12,13]){let v=Y[0]+(p-5.5)*.64+(p<6?-.7:.7),A=B[1]+18.5+o*.92;Yt(N,v,A,Math.PI,"#566a68",ct+.05),se.push({x:v,z:A,yaw:Math.PI,gym:!0,addedGymSeat:!0})}for(let o=6;o<8;o++)for(let p=0;p<16;p++){let v=Y[0]+(p-7.5)*.64+(p<8?-.7:.7),A=B[1]+18.5+o*.92;Yt(N,v,A,Math.PI,"#566a68",ct+.05),se.push({x:v,z:A,yaw:Math.PI,gym:!0,addedGymSeat:!0})}function Kt(o,p,v,A,U=0){o.scope(n.compose(p,0,v,U),()=>{o.cylinder([-.4,.04,-.15],[-.35,1.29,0],.023,.023,et.wood,6),o.cylinder([.4,.04,-.15],[.35,1.29,0],.023,.023,et.wood,6),o.cylinder([-.4,.04,-.48],[-.35,1.29,0],.023,.023,et.wood,6),o.cylinder([.4,.04,-.48],[.35,1.29,0],.023,.023,et.wood,6),o.sign(0,.85,.03,.7,.94,A,!0)})}function Ie(o,p,v,A,U=2.18,G=3.16){let H=[[-p/2,U,-v/2],[-p/2,U,v/2],[p/2,U,v/2],[p/2,U,-v/2]],rt=[0,G,0];for(let tt=0;tt<4;tt++){let Tt=H[tt],Nt=H[(tt+1)%4],Ut=(kt,ie)=>{let Je=e.add(e.mul(Tt,1-kt),e.mul(Nt,kt)),He=e.add(e.mul(Je,1-ie),e.mul(rt,ie));return He[1]-=.052*Math.sin(kt*Math.PI)*Math.sin(ie*Math.PI),He};for(let kt=0;kt<10;kt++)for(let ie=0;ie<8;ie++){let Je=kt/10,He=ie/8,Le=Ut(Je,He),on=Ut((kt+1)/10,He),In=Ut((kt+1)/10,(ie+1)/8),Vn=Ut(Je,(ie+1)/8);o.quad(Le,on,In,Vn,A,1,1)}o.quad(Tt,[Tt[0],U-.2,Tt[2]],[Nt[0],U-.2,Nt[2]],Nt,A,1,1)}}function Xe(o,p){let v=p.id,A=p.category,U=v==="F-1"||v==="F-9",G=v==="F-6"||v==="F-8",H=v==="T-12",rt=v==="T-2";if(U){for(let tt=0;tt<9;tt++){let Tt=-.8+tt%5*.23,Nt=.3+Math.floor(tt/5)*.22;o.cylinder([Tt,.79,Nt],[Tt,.94,Nt],.044,.052,a("#faf3dd"),12),o.cylinder([Tt,.94,Nt],[Tt,.958,Nt],.055,.055,a("#635442"),12)}o.box(.54,1.02,-.14,.45,.53,.32,a("#3f4443",0,.25,.45)),o.box(.53,1.09,.03,.22,.13,.017,a("#91aaa1",0,.25,.2));for(let tt=0;tt<3;tt++)o.cylinder([.36+tt*.11,.79,.16],[.36+tt*.11,.98,.16],.028,.028,et.metal,8)}else if(G)for(let tt=0;tt<3;tt++){let Tt=-.65+tt*.65;o.box(Tt,.79,.28,.56,.11,.4,a("#a98350",5));for(let Nt=0;Nt<7;Nt++)o.sphere(Tt+S(-.2,.2),.89,.28+S(-.14,.14),S(.065,.09),.045,S(.06,.1),a(["#bd863d","#d2a05d","#a87139"][Nt%3]),12,7)}else if(H)for(let tt=0;tt<3;tt++){let Tt=-.62+tt*.6;o.box(Tt,.85,.17,.52,.2,.5,a("#b7915d",5));for(let Nt=0;Nt<8;Nt++){let Ut=Tt+S(-.2,.2),kt=.17+S(-.17,.17);o.cylinder([Ut,.88,kt],[Ut+.11,1.06,kt+.04],.017,.04,a("#d07731"),8),o.cylinder([Ut+.1,1.04,kt+.04],[Ut+.17,1.17,kt+.02],.008,.01,a("#58703a"),6)}}else if(rt){o.box(-.35,.94,.15,.7,.28,.34,a("#2b363c",0,.45,.25)),o.box(-.42,1.01,.33,.29,.1,.007,a("#a9be92",0,.5,0,.2));for(let tt=0;tt<3;tt++)o.cylinder([-.06+tt*.05,.94,.34],[-.06+tt*.05,.94,.37],.024,.024,et.metal,10);o.box(.5,.84,.23,.35,.05,.28,a("#373a3c")),o.cylinder([.75,.8,-.13],[.75,2.65,-.13],.012,.012,et.metal,7),o.cylinder([.33,2.4,-.13],[1.14,2.4,-.13],.015,.015,et.metal,7)}else if(A==="F"){for(let tt=0;tt<3;tt++){let Tt=-.7+tt*.65;o.box(Tt,.8,.22,.54,.09,.36,a("#d1d5c8",0,.25,.45));for(let Nt=0;Nt<8;Nt++){let Ut=Tt+S(-.2,.2),kt=.22+S(-.12,.12);o.sphere(Ut,.855,kt,.047,.025,.045,a(["#c99352","#dfb476","#724b30"][Nt%3]),9,5)}}if(v==="F-11"){o.box(.12,.8,-.26,1,.1,.3,et.black);for(let tt=0;tt<9;tt++)o.cylinder([-.3+tt*.1,.88,-.49],[-.3+tt*.1,.88,.02],.006,.006,a("#d5b878"),5)}}else if(A==="S"){for(let tt=0;tt<14;tt++){let Tt=-.8+tt%7*.25,Nt=.13+Math.floor(tt/7)*.25;o.box(Tt,.794,Nt,.17,.015,.16,a("#f8f4e6")),o.sphere(Tt,.83,Nt,.055,.032,.055,a(["#aa5c61","#b5aa6c","#558489","#9a804c"][tt%4],0,.28,.32),12,7)}if(v==="S-8")for(let tt=0;tt<9;tt++)o.cylinder([-.75+tt*.17,.83,-.2],[-.7+tt*.17,1.01,-.08],.021,.024,a("#c8af70",5),7)}else for(let tt=0;tt<3;tt++)o.box(-.65+tt*.6,.795,.22,.43,.015,.28,a("#faf8ec")),o.box(-.65+tt*.6,.82,.2,.35,.012,.21,a(["#bbbaa0","#a6b4bb","#b7ba8d"][tt],0,.8))}function ze(o,p=null){let v=p||o.pos,A=o.width||3.02,U=2.75,G=o.yaw||0,H=o.id==="S-3"||o.id==="S-9"?"#8393a0":o.id==="F-11"?"#859690":"#f8f7ef",rt=a(D[o.category],6,.92);it.scope(n.compose(v[0],0,v[1],G),()=>{Ie(it,A,U,a(H,6,.92));for(let kt of o.id==="F-10"?[-A/2+.035,0,A/2-.035]:[-A/2+.035,A/2-.035])for(let ie of[-U/2+.035,U/2-.035])it.cylinder([kt,.03,ie],[kt,2.2,ie],.029,.026,et.metal,8);it.box(0,2.1,U/2,A,.29,.026,rt),it.box(0,2.1,-U/2,A,.29,.025,a(H,6));for(let kt of[-A/2,A/2])it.box(kt,2.1,0,.025,.29,U,a(H,6));it.cylinder([-A/2,2.17,-U/2],[A/2,2.17,U/2],.021,.021,et.metal,8),it.cylinder([A/2,2.17,-U/2],[-A/2,2.17,U/2],.021,.021,et.metal,8),(o.category==="F"||o.id==="HQ")&&it.box(0,1.15,-U/2,A,1.87,.015,a("#eeeee5",6,.94))}),N.scope(n.compose(v[0],0,v[1],G),()=>{o.id==="F-10"?($t(N,-1.5,.4,2.28,.73),$t(N,1.5,.4,2.28,.73),N.scope(n.compose(-1.5,0,0),()=>Xe(N,o)),Yt(N,-2.15,-.53,0,"#65746c"),N.box(-.75,.23,-.46,.54,.42,.4,a("#af9270",5))):($t(N,0,.4,Math.min(A-.45,2.28),.73),Xe(N,o),Yt(N,-.65,-.53,0,"#65746c"),N.box(.75,.23,-.46,.54,.42,.4,a("#af9270",5))),o.category==="T"&&N.sign(.56,1.5,-1.25,.95,.98,g[o.id].menu,!0)}),zt.scope(n.compose(v[0],0,v[1],G),()=>{zt.sign(0,2.15,U/2+.03,Math.min(A-.09,2.87),.62,g[o.id].banner),Kt(zt,-A/2+.2,U/2+.4,g[o.id].menu,-.14)});let tt=[Math.sin(G),Math.cos(G)],Tt=[Math.cos(G),-Math.sin(G)],Nt=v[0]+tt[0]*.4,Ut=v[1]+tt[1]*.4;oe(Nt,Ut,Math.abs(Tt[0])*(A-.4)+Math.abs(tt[0])*.8,Math.abs(Tt[1])*(A-.4)+Math.abs(tt[1])*.8,o.id),o.approach=[v[0]+tt[0]*(U/2+3.1),v[1]+tt[1]*(U/2+3.1)],o.marker=[v[0]+tt[0]*1.4,3.22,v[1]+tt[1]*1.4],Ft.push(o)}function Ne(o,p,v,A,U=1,G=.37){o.cylinder([p,v,A-.09],[p,v,A+.09],G,G,et.tire,22),o.cylinder([p,v,A+U*.094],[p,v,A+U*.114],G*.55,G*.55,et.metal,20);for(let H=0;H<6;H++){let rt=H/6*x;o.cylinder([p+Math.cos(rt)*G*.34,v+Math.sin(rt)*G*.34,A+U*.115],[p+Math.cos(rt)*G*.34,v+Math.sin(rt)*G*.34,A+U*.12],G*.12,G*.12,et.dark,7)}}function rn(o,p){let v=o.pos,A=o.yaw,G=a(["#ede6d3","#c3a875","#eef0df","#657f79","#aa7761","#e2d8c3","#e0cf9e","#6c7a75"][p%8],0,.38,.23),H=it;H.scope(n.compose(v[0],0,v[1],A),()=>{H.box(0,.46,0,3.85,.22,1.7,et.dark),H.box(.42,1.63,0,2.85,2.03,1.82,G),H.box(-1.41,1.2,0,1.06,1.37,1.8,G),H.box(-1.65,.9,0,.88,.38,1.9,G),H.box(-1.44,1.58,0,1.04,.74,1.8,G),H.box(-1.96,1.58,0,.035,.66,1.57,et.glass),H.box(-1.42,1.65,.91,.76,.54,.018,et.glass),H.box(-1.42,1.65,-.91,.76,.54,.018,et.glass),H.box(.46,1.79,.918,2.4,1,.012,et.dark),H.box(.46,1.72,.923,2.27,.81,.009,a("#555e54",0,.7)),H.box(.46,1.16,1.11,2.55,.07,.54,et.metal),H.box(.46,2.76,0,2.98,.14,1.92,G);for(let Tt of[-1.35,1.2])for(let Nt of[-.89,.89])Ne(H,Tt,.4,Nt,Nt<0?-1:1,.36);H.box(-1.98,.61,0,.1,.19,1.7,a("#b3b8b3",0,.35,.55));for(let Tt of[-.61,.61])H.box(-2.04,.93,Tt,.034,.2,.37,a("#eee8cf",0,.14,.3,.15));H.box(-2.05,.58,0,.034,.16,.28,a("#decb71")),H.box(.26,2.91,-.17,.53,.17,.44,et.whiteMetal),H.cylinder([1.3,2.8,-.48],[1.3,3,-.48],.11,.11,et.metal,12);for(let Tt of[-1.06,1.06])H.cylinder([-1.65,1.61,Tt*.83],[-1.65,1.62,Tt],.02,.02,et.dark,6),H.box(-1.64,1.64,Tt,.1,.19,.05,et.dark);H.quad([-.9,2.56,.94],[-.9,2.3,2.03],[1.76,2.3,2.03],[1.76,2.56,.94],a("#f6efdf",6),2,1),H.box(.43,2.22,2.02,2.7,.18,.02,a(D.F,6));for(let Tt of[-.82,1.69])H.cylinder([Tt,1.71,.96],[Tt,2.3,1.95],.017,.017,et.metal,6)}),N.scope(n.compose(v[0],.38,v[1],A),()=>Xe(N,o)),zt.scope(n.compose(v[0],0,v[1],A),()=>{zt.sign(.42,2.67,.945,2.54,.48,g[o.id].banner),Kt(zt,-.4,2.28,g[o.id].menu,.1)});let rt=[Math.sin(A),Math.cos(A)],tt=[Math.cos(A),-Math.sin(A)];oe(v[0],v[1],Math.abs(tt[0])*4.03+Math.abs(rt[0])*1.93,Math.abs(tt[1])*4.03+Math.abs(rt[1])*1.93,o.id),o.approach=[v[0]+rt[0]*3.3,v[1]+rt[1]*3.3],o.marker=[v[0]+rt[0]*1.45,3.42,v[1]+rt[1]*1.45],Ft.push(o)}let Jt=0;for(let o of f.records)o.kind==="tent"?ze(o):o.kind==="truck"&&rn(o,Jt++);let an=f.locations.find(o=>o.id==="HQ");an.width=6.9,ze(an);let be=f.locations.find(o=>o.id==="OUTSTAGE"),Xt=be.pos;it.box(Xt[0],.28,Xt[1],7.2,.56,1.8,et.wood),oe(Xt[0],Xt[1],7.2,1.8,"屋外ステージ");for(let o of[-1.8,0,1.8])N.box(Xt[0]+o,.563,Xt[1],.012,.009,1.8,et.dark);N.box(Xt[0],.563,Xt[1],7.2,.009,.012,et.dark);for(let o of[-1,1])N.box(Xt[0]+o*4.05,.14,Xt[1]+.5,.72,.28,.72,et.base),N.cylinder([Xt[0]+o*3.9,.04,Xt[1]-.4],[Xt[0]+o*3.9,3.2,Xt[1]-.4],.033,.033,et.metal,7),N.box(Xt[0]+o*3.9,2.5,Xt[1]-.4,.48,.85,.35,et.black);let qe=Xt[1]-1.65,bn=Xt[1]-3.75;for(let o of[-1,1])N.cylinder([Xt[0]+o*4,.1,qe],[Xt[0]+o*4,.12,bn],.035,.035,et.metal,8);N.cylinder([Xt[0]-4,.1,qe],[Xt[0]+4,.1,qe],.035,.035,et.metal,8);for(let o of[-1,1])N.cylinder([Xt[0]+o*4,.1,qe],[Xt[0]+o*4,2.1,qe],.035,.035,et.metal,8);N.cylinder([Xt[0]-4,2.1,qe],[Xt[0]+4,2.1,qe],.035,.035,et.metal,8),N.cylinder([Xt[0]-4,.12,bn],[Xt[0]+4,.12,bn],.035,.035,et.metal,8),N.quad([Xt[0]-4,.12,bn],[Xt[0]-4,.1,qe],[Xt[0]+4,.1,qe],[Xt[0]+4,.12,bn],a("#a7b0a6",11,.75),6,2);let Ei=d.add("stage-k-estate",(o,p)=>{o.fillStyle="#f7f7f2",o.fillRect(0,0,p,p),o.fillStyle="#9e3235",o.fillRect(0,0,p,92),o.fillStyle="#fff",o.textAlign="center",o.font="700 24px sans-serif",o.fillText("SHONAN REAL ESTATE",p/2,55),o.fillStyle="#24516b",o.font="700 69px sans-serif",o.fillText("K ESTATE",p/2,255),o.fillStyle="#5c7989",o.font="600 24px sans-serif",o.fillText("K エステート",p/2,315)});for(let o=-1;o<=1;o++){let p=Xt[0]+o*2.52,v=2.42;zt.quad([p-v/2,2.02,qe+.06],[p-v/2,.13,qe+.06],[p+v/2,.13,qe+.06],[p+v/2,2.02,qe+.06],a("#ffffff",Ei,.9,0,.06))}let Ce=Xt[0]+5.15,ke=Xt[1]+2.6;N.box(Ce,1.5,ke,1.26,.73,.12,et.black),N.box(Ce,1.5,ke+.07,1.22,.69,.025,a("#303c3d",0,.32,.08)),N.cylinder([Ce,.08,ke],[Ce,1.13,ke],.055,.055,et.metal,8),N.box(Ce,.06,ke,.62,.12,.47,et.dark);for(let o of[.2,1.2])$t(N,Xt[0]+5.5,Xt[1]+o,1.32,.63,0);N.box(Xt[0]+5.5,.85,Xt[1]+1.2,.56,.18,.39,et.dark);for(let o of[.2,1.2])Yt(N,Xt[0]+5.5,Xt[1]+o+1,0,"#4a5558");N.cylinder([Xt[0]+6.45,.37,Xt[1]-1.5],[Xt[0]+6.82,.37,Xt[1]-1.5],.23,.23,et.dark,12),oe(Ce,ke,1.3,.5,"大型モニター");let hn=[Xt[0]-5.8,Xt[1]+.4];N.scope(n.compose(hn[0],0,hn[1],0),()=>{Ie(N,3,2.8,et.fabric);for(let o of[-1.45,1.45])for(let p of[-1.3,1.3])N.cylinder([o,.04,p],[o,2.15,p],.025,.025,et.metal,7)}),$t(N,hn[0]+.35,hn[1]+.45,1.55,.7,0);for(let o=0;o<15;o++)N.box(hn[0]-1+o%5*.45,.2+Math.floor(o/5)*.4,hn[1]-.7,.41,.38,.48,et.wood);oe(hn[0],hn[1],3,2.8,"屋外ステージのポップアップテント"),N.cylinder([Xt[0],.6,Xt[1]+.1],[Xt[0],1.9,Xt[1]+.1],.018,.018,et.black,7),N.cylinder([Xt[0],1.9,Xt[1]+.1],[Xt[0]+.36,2.08,Xt[1]+.22],.018,.018,et.black,7),zt.sign(Xt[0],.34,Xt[1]+.914,6.75,.5,g.OUTSTAGE.banner),be.approach=[Xt[0],Xt[1]+3.2],be.marker=[Xt[0],2.1,Xt[1]],Ft.push(be);for(let o of f.locations.filter(p=>["MEET","EAT2","WC"].includes(p.id)))o.approach=o.pos,o.marker=[o.pos[0],2.5,o.pos[1]],Ft.push(o),o.id==="WC"&&zt.scope(n.compose(o.pos[0],0,o.pos[1],0),()=>{zt.sign(0,2.4,0,2.2,.53,g.WC.banner)});t(.45,"木々・遊具・モビリティ走路を作っています");let Ve=[[192,116],[225,94],[306,91],[391,108],[436,132],[443,164],[423,178],[350,179],[294,162],[252,141],[209,143]];function qn(o,p=12){let v=[];for(let A=0;A<o.length;A++){let U=o[(A-1+o.length)%o.length],G=o[A],H=o[(A+1)%o.length],rt=o[(A+2)%o.length];for(let tt=0;tt<p;tt++){let Tt=tt/p,Nt=Tt*Tt,Ut=Nt*Tt;v.push([0,1].map(kt=>.5*(2*G[kt]+(-U[kt]+H[kt])*Tt+(2*U[kt]-5*G[kt]+4*H[kt]-rt[kt])*Nt+(-U[kt]+3*G[kt]-3*H[kt]+rt[kt])*Ut)))}}return v}let Ke=qn(Ve.map(o=>P(...o)),16),fi=0,qs=[0],Tc=Ke.map((o,p)=>{let v=Ke[(p-1+Ke.length)%Ke.length],A=Ke[(p+1)%Ke.length],U=A[0]-v[0],G=A[1]-v[1],H=Math.hypot(U,G);return[-G/H,U/H]});for(let o=0;o<Ke.length;o++){let p=(o+1)%Ke.length,v=Ke[o],A=Ke[p],U=Tc[o],G=Tc[p],H=Math.hypot(A[0]-v[0],A[1]-v[1]);if(fi+=H,qs.push(fi),it.quad([v[0]-U[0],.035,v[1]-U[1]],[v[0]+U[0],.035,v[1]+U[1]],[A[0]+G[0],.035,A[1]+G[1]],[A[0]-G[0],.035,A[1]-G[1]],a("#bba990",1,.98),2,H),o%8<4)for(let rt of[-1,1])qt(N,[v[0]+U[0]*.95*rt,v[1]+U[1]*.95*rt],[A[0]+G[0]*.95*rt,A[1]+G[1]*.95*rt],.085,a("#f3e8d0"),.043)}let os=qn([[171,90],[281,77],[395,95],[452,128],[458,179],[436,190],[330,190],[281,174],[245,151],[176,150]].map(o=>P(...o)),5);function Jo(o,p,v=.65,A=!1,U=!1){let G=Math.hypot(p[0]-o[0],p[1]-o[1]),H=Math.max(1,Math.ceil(G/2.2)),rt=A?a("#a48d66",5):a("#dedfd4",0,.45,.35);for(let tt=0;tt<=H;tt++){let Tt=o[0]+(p[0]-o[0])*tt/H,Nt=o[1]+(p[1]-o[1])*tt/H;N.cylinder([Tt,.05,Nt],[Tt,v+.05,Nt],A?.045:.025,A?.042:.025,rt,7),A||N.box(Tt,.035,Nt,.28,.07,.34,et.base)}for(let tt of[v*.4,v])N.cylinder([o[0],tt,o[1]],[p[0],tt,p[1]],A?.036:.021,A?.036:.021,rt,7);U&&N.quad([o[0],.15,o[1]],[o[0],v,o[1]],[p[0],v,p[1]],[p[0],.15,p[1]],a("#a2aa9a",11,.82),G/1.1,v/1.1)}for(let o=0;o<os.length;o++)Jo(os[o],os[(o+1)%os.length],.65);let Rn=f.locations.find(o=>o.id==="MOBILITY");Rn.approach=[Rn.pos[0]-2,Rn.pos[1]+2.1],Rn.marker=[Rn.pos[0],2.8,Rn.pos[1]],Ft.push(Rn),N.scope(n.compose(Rn.pos[0],0,Rn.pos[1],0),()=>{Ie(N,3,2.7,a("#f1e5cc",6));for(let o of[-1.45,1.45])for(let p of[-1.3,1.3])N.cylinder([o,.05,p],[o,2.2,p],.026,.026,et.metal,7)}),zt.sign(Rn.pos[0],2.1,Rn.pos[1]+1.37,2.85,.65,g.MOBILITY.banner),Kt(zt,Rn.pos[0]-.2,Rn.pos[1]+.3,J,-.3);function Ec(o){let p=(o%fi+fi)%fi,v=0;for(;v<Ke.length-1&&qs[v+1]<p;)v++;let A=Ke[v],U=Ke[(v+1)%Ke.length],G=(p-qs[v])/(qs[v+1]-qs[v]);return{x:A[0]+(U[0]-A[0])*G,z:A[1]+(U[1]-A[1])*G,yaw:Math.atan2(U[0]-A[0],U[1]-A[1])}}let Ue=new s,Ys=a("#d5d8d1",0,.39,.18),Ac=a("#91a7a6",0,.21,.55);Ue.box(0,.46,-.2,1.22,.2,2.3,et.dark),Ue.box(0,.84,-.94,1.24,.65,.72,Ys),Ue.box(0,1.02,-.74,1.12,.25,.7,a("#465052",0,.75)),Ue.box(0,.82,.22,1.23,.16,1.18,Ys),Ue.sphere(0,.87,.95,.68,.61,.25,Ys,18,10);let pi=Array.from({length:17},(o,p)=>(p-8)*.07),ls=Array.from({length:9},(o,p)=>p/8),Ai=(o,p)=>{let v=Math.abs(o)/.56;return[o,1.22+p*(.69-.1*v*v),1.17-.56*p-.13*v*v]},Wr=(o,p)=>{let v=-.2*p*o/.31360000000000005,A=-.26*o/(.56*.56),U=.69-.1*(o/.56)**2,G=[v*-.56-A*U,.56,U],H=Math.hypot(...G);return G.map(rt=>rt/H)};for(let o=0;o<ls.length-1;o++)for(let p=0;p<pi.length-1;p++){let v=pi[p],A=pi[p+1],U=ls[o],G=ls[o+1],H=Ai(v,U),rt=Ai(v,G),tt=Ai(A,G),Tt=Ai(A,U),Nt=Wr(v,U),Ut=Wr(v,G),kt=Wr(A,G),ie=Wr(A,U);Ue.tri(rt,H,Tt,Ac,[[0,1],[0,0],[1,0]],[Ut,Nt,ie]),Ue.tri(rt,Tt,tt,Ac,[[0,1],[1,0],[1,1]],[Ut,ie,kt])}let Xr=a("#252c2d",0,.68,.12);for(let o of[0,1])for(let p=0;p<pi.length-1;p++)Ue.cylinder(Ai(pi[p],o),Ai(pi[p+1],o),.021,.021,Xr,7);for(let o of[-.56,.56])for(let p=0;p<ls.length-1;p++)Ue.cylinder(Ai(o,ls[p]),Ai(o,ls[p+1]),.024,.024,Xr,7);let mi=(o,p)=>{let v=Math.abs(o)/.56;return[o,1.91-.1*v*v-.03*Math.max(0,-p),p-.13*v*v]};for(let o=0;o<pi.length-1;o++){let p=pi[o],v=pi[o+1];Ue.quad(mi(p,.61),mi(p,-1.12),mi(v,-1.12),mi(v,.61),Ys),Ue.cylinder(mi(p,-1.12),mi(v,-1.12),.018,.018,Xr,7)}for(let o of[-.56,.56])Ue.cylinder(mi(o,.61),mi(o,-1.12),.027,.027,Xr,8),Ue.cylinder([o,.58,-1.07],mi(o,-1.12),.026,.026,et.metal,8);for(let o of[-.65,.65])Ue.box(o,.55,-.05,.14,.12,1.65,Ys),Ue.box(o,1.14,-1,.07,.48,.07,et.dark),Ue.box(o,1.08,.8,.08,.54,.08,et.dark);Ue.box(0,1.15,-.59,.96,.2,.48,a("#333b3c",0,.75)),Ue.box(0,1.03,.44,.77,.09,.36,et.dark),Ue.sphere(0,.99,1.19,.15,.15,.065,et.dark,12,8);for(let o of[-.42,.42])Ue.box(o,1.02,1.17,.29,.07,.035,a("#f0ebd9",0,.35,.1,.2));for(let o of[-.55,.55])Ue.scope(n.compose(o,.34,-1.02,Math.PI/2),()=>Ne(Ue,0,0,0,o>0?1:-1,.34));Ue.scope(n.compose(0,.34,1.2,Math.PI/2),()=>Ne(Ue,0,0,0,1,.34)),Ue.cylinder([-.4,1.23,.72],[.4,1.23,.72],.025,.025,et.dark,9);for(let o of[-.69,.69])Ue.cylinder([o,1.33,.8],[o*1.13,1.37,1],.02,.02,et.dark,7),Ue.box(o*1.13,1.39,1.02,.19,.11,.055,et.dark);let Au=d.banner("DEMO","電動トライク","車体色は仮表示","#53605b");Ue.scope(n.compose(.69,0,-.65,Math.PI/2),()=>Ue.sign(0,.92,0,1.3,.3,Au));let Zs=f.records.find(o=>o.kind==="goat"),Fe=Zs.pos,Js=6.5,ei=6.3,$o=[[Fe[0]-Js/2,Fe[1]-ei/2],[Fe[0]+Js/2,Fe[1]-ei/2],[Fe[0]+Js/2,Fe[1]+ei/2],[Fe[0]-Js/2,Fe[1]+ei/2]];Se($o,it,a("#c7bb89",2,.97),2);for(let o=0;o<4;o++)Jo($o[o],$o[(o+1)%4],1.1,!0);oe(Fe[0],Fe[1],Js,ei,"ヤギ牧場"),Zs.approach=[Fe[0],Fe[1]+ei/2+3.1],Zs.marker=[Fe[0],2.5,Fe[1]+ei/2],Ft.push(Zs),zt.sign(Fe[0],2.72,Fe[1]+ei/2+.06,3.4,.68,g[Zs.id].banner);for(let o of[-1,1])N.cylinder([Fe[0]+o*1.6,.05,Fe[1]+ei/2],[Fe[0]+o*1.6,3.09,Fe[1]+ei/2],.05,.05,et.wood,7);N.box(Fe[0]-2,.26,Fe[1]-1.7,.9,.48,1.4,a("#b6a166",2)),N.cylinder([Fe[0]+2,.05,Fe[1]-2],[Fe[0]+2,.28,Fe[1]-2],.35,.38,a("#6b8990",0,.3,.4),18);function Cu(){let o=new s,p=a("#e9e4d5",0,.95),v=a("#776654",0,.92);o.sphere(0,.73,0,.3,.29,.54,p,18,10),o.cylinder([0,.85,.3],[0,1.13,.52],.18,.14,p,14),o.sphere(0,1.19,.61,.15,.18,.24,p,16,10),o.sphere(0,1.1,.78,.12,.1,.1,v,12,7);for(let A of[-1,1]){o.sphere(A*.22,1.26,.48,.19,.055,.085,p,12,7),o.sphere(A*.137,1.22,.67,.015,.024,.025,et.black,8,6),o.cylinder([A*.09,1.31,.51],[A*.11,1.48,.38],.039,.021,v,9),o.cylinder([A*.11,1.48,.38],[A*.1,1.55,.27],.021,.009,v,8);for(let U of[-.32,.33])o.cylinder([A*.19,.6,U],[A*.18,.12,U+.03],.046,.03,p,9),o.box(A*.18,.07,U+.05,.09,.1,.14,v)}return o.cylinder([0,.92,-.46],[0,1.06,-.62],.035,.016,p,9),o.cylinder([0,1.08,.77],[0,.92,.72],.045,.01,p,9),o}let Xi=f.records.find(o=>o.kind==="baseball");Xi.locationSource="配置ゾーニング 9月21日 Ver.6案（1ページ）";let je=Xi.pos;Xi.approach=[je[0]+9,je[1]+2],Xi.marker=[je[0]+8,2.8,je[1]+1],Ft.push(Xi),zt.sign(je[0]+8,1.8,je[1]+1,4,.82,g[Xi.id].banner);for(let o of[-1,1])N.cylinder([je[0]+8+o*1.9,.08,je[1]+1],[je[0]+8+o*1.9,2.3,je[1]+1],.035,.035,et.metal,7);for(let o of[[-3,-2],[0,-5],[3,-2],[0,1]])N.box(je[0]+o[0],.052,je[1]+o[1],.34,.045,.34,a("#e8e2c8"));N.cylinder([je[0]+4,.08,je[1]+2],[je[0]+4.4,.1,je[1]+3.05],.022,.045,a("#b49566",5),9),N.sphere(je[0]+4.25,.095,je[1]+2.2,.074,.074,.074,a("#e9e6dc"),12,8);let Ru=d.add("baseball-net",(o,p)=>{o.clearRect(0,0,p,p),o.strokeStyle="#becab2",o.lineWidth=4,o.beginPath();for(let v=0;v<=p;v+=64)o.moveTo(v,0),o.lineTo(v,p),o.moveTo(0,v),o.lineTo(p,v);o.stroke()}),Iu=d.add("baseball-flag",(o,p)=>{o.fillStyle="#672d3d",o.fillRect(0,0,p,p);for(let v=0;v<p;v+=3)o.fillStyle=v%6?"rgba(233,208,172,.035)":"rgba(0,0,0,.055)",o.fillRect(v,0,1,p);o.strokeStyle="#d0b792",o.lineWidth=3,o.strokeRect(9,9,p-18,p-18),o.textAlign="center",o.fillStyle="#f4d990",o.font='700 27px "Yu Gothic",sans-serif',o.fillText("オール西鎌倉少年野球クラブ",p/2,64,475),o.fillStyle="#f5ead8",o.font="bold 170px Georgia,serif",o.fillText("N",p/2,305),o.fillStyle="#df6358",o.font='700 93px "Yu Mincho",serif',o.fillText("必",90,293),o.fillText("勝",424,293),o.strokeStyle="#d1d0ac",o.lineWidth=6;for(let v of[-1,1]){o.beginPath(),o.moveTo(p/2,396),o.quadraticCurveTo(p/2+v*120,357,p/2+v*103,186),o.stroke();for(let A=0;A<10;A++){let U=A/9,G=p/2+v*(22+81*Math.sin(U*Math.PI/2)),H=380-U*181;o.save(),o.translate(G,H),o.rotate(v*(.8+U*.4)),o.fillStyle="#d4d4b5",o.beginPath(),o.ellipse(0,0,5,16,0,0,Math.PI*2),o.fill(),o.restore()}}}),Pu=d.sign("baseball-board",Xi.name,"野球体験","#672d3d","T-5");N.scope(n.compose(je[0],0,je[1]),()=>{let o=a("#38674d",0,.65,.15),p=a("#476e48",Ru,.95),v=a("#eeeadd",0,.97);function A(G,H,rt,tt,Tt=0){N.scope(n.compose(G,0,H,Tt),()=>{for(let Nt of[-1,1]){let Ut=Nt*rt/2;N.cylinder([Ut,.04,0],[Ut,tt,0],.029,.029,o,8),N.cylinder([Ut,.04,-.65],[Ut,.04,.65],.025,.025,o,8),N.cylinder([Ut,.05,.6],[Ut,1,0],.023,.023,o,8)}N.cylinder([-rt/2,tt,0],[rt/2,tt,0],.025,.025,o,8),N.quad([-rt/2,.09,0],[-rt/2,tt-.02,0],[rt/2,tt-.02,0],[rt/2,.09,0],p,rt/.8,tt/.8),N.cylinder([-rt/2,.1,0],[rt/2,.1,0],.045,.045,o,8)})}A(3.4,-1.3,4.8,3.3),A(-4,-5.5,2.4,2.5,.35),A(-9,-2,2.4,2.5,-.2),N.sign(2.4,2.22,-1.25,2,1.48,Iu);for(let G of[1.46,3.34])N.cylinder([G,2.98,-1.24],[G,3.28,-1.3],.009,.009,a("#d9d4b4"),6);$t(N,.1,1,1.8,.72,0,!1,!1),Yt(N,-1.15,1.05,.18,"#3e4647"),Yt(N,7.1,-.4,-.35,"#42484d"),N.scope(n.compose(.15,.72,1.05,-.08),()=>N.sign(0,.48,0,.78,.83,Pu,!0)),N.box(-.55,.89,.98,.38,.24,.3,a("#778c87",0,.8));for(let G=0;G<5;G++)N.cylinder([-.7+G*.068,.99,.99],[-.7+G*.068,1.16,.99],.014,.014,a(G%2?"#c6a264":"#edddb0"),6);function U(G,H,rt){for(let tt=0;tt<48;tt++){let Tt=tt/48*x,Nt=(tt+1)/48*x,Ut=(kt,ie)=>[G+Math.cos(kt)*ie,.043,H+Math.sin(kt)*ie];N.quad(Ut(Tt,rt-.025),Ut(Nt,rt-.025),Ut(Nt,rt+.025),Ut(Tt,rt+.025),v)}}for(let[G,H,rt]of[[2,5.2,!1],[7.8,5.5,!1],[-3,2.5,!0]]){U(G,H,.66);let tt=a(rt?"#388faf":"#e5cc57",0,.9);N.box(G,.035,H,.34,.06,.34,tt),N.cylinder([G,.06,H],[G,.62,H],.145,.022,tt,12)}for(let G of[3.9,4.65,5.4]){let H=a("#78b3ce",0,.78);N.cylinder([G,.04,3.8],[G,.4,3.8],.21,.16,H,16),N.cylinder([G,.037,3.8],[G,.071,3.8],.225,.222,H,16)}for(let G of[-1.9,6])N.box(G,.044,-3.7,.06,.015,7.2,v);N.box(2.05,.044,-7.3,7.9,.015,.06,v),N.box(2.05,.044,-.1,7.9,.015,.06,v),N.box(3.5,.044,7.1,11.5,.015,.06,v)});let Ko=(o,p,v)=>o+v>B[0]&&o-v<V[0]&&p+v>B[1]&&p-v<V[1];function Lu(o,p,v=7,A=!1){let U=P(o,p),G=U[0],H=U[1],rt=u(Math.round(o*721+p*91)),tt=p>=410&&p<=420?{132:[6.8,.53,!1],152:[6.3,.56,!1],175:[7.6,.26,!0],252:[7.8,.28,!0]}[o]:null;tt&&(v=tt[0]);let Tt=N;Tt.cylinder([G,0,H],[G+.12,v*.57,H-.1],.19,.08,et.bark,11);for(let Nt=0;Nt<6;Nt++){let Ut=Nt*x/6+rt(),kt=[G,v*.34+rt()*.6,H],ie=[G+Math.cos(Ut)*v*.27,v*(.62+rt()*.17),H+Math.sin(Ut)*v*.27];if(!Ko((kt[0]+ie[0])/2,(kt[2]+ie[2])/2,Math.max(Math.abs(kt[0]-ie[0]),Math.abs(kt[2]-ie[2]))/2+.08)){Tt.cylinder(kt,ie,.073,.026,et.bark,8);for(let Je=0;Je<3;Je++){let He=[ie[0]+(rt()-.5)*1.4,ie[1]+rt()*1.05,ie[2]+(rt()-.5)*1.4];Ko((ie[0]+He[0])/2,(ie[2]+He[2])/2,Math.max(Math.abs(ie[0]-He[0]),Math.abs(ie[2]-He[2]))/2+.03)||Tt.cylinder(ie,He,.029,.01,et.bark,7)}}}for(let Nt=0;Nt<(tt?180:52);Nt++){let Ut=rt()*x,kt=Math.sqrt(rt())*v*(tt?tt[1]:.38),ie=G+Math.cos(Ut)*kt,Je=H+Math.sin(Ut)*kt,He=v*(tt?.57:.7)+rt()*v*(tt?.38:.25)-kt/v*.8,Le=v*(tt?.12+rt()*.09:.19+rt()*.13),on=rt()*x,In=(tt?tt[2]:A)?et.autumn:et.leaf;Ko(ie,Je,Le*.71)||Zt.scope(n.compose(ie,He,Je,on),()=>{Zt.quad([-Le/2,-Le/2,0],[-Le/2,Le/2,0],[Le/2,Le/2,0],[Le/2,-Le/2,0],In),Zt.quad([-Le/2,0,-Le/2],[-Le/2,0,Le/2],[Le/2,0,Le/2],[Le/2,0,-Le/2],In)})}Mt.push({x:G,z:H,r:.26})}[[143,54],[176,48],[207,47],[234,46],[270,45],[301,48],[366,63],[399,73],[431,85],[464,98],[496,116],[532,131],[561,151],[566,206],[566,240],[568,275],[581,361],[582,414],[581,521],[579,566],[568,627],[547,692],[509,719],[480,730],[432,738],[404,742],[371,748],[323,757],[282,759],[243,764],[205,769],[168,773],[130,775],[92,750],[83,712],[75,671],[53,584],[32,527],[38,382],[62,335],[68,159],[132,418],[152,418],[175,413],[252,412],[283,414],[321,415],[348,419],[381,417],[417,418],[420,396]].forEach((o,p)=>Lu(o[0],o[1],S(5.8,8.7),p%3!==0));let Yn=P(525,171);for(let o=0;o<6;o++){let p=Yn[0]+o*1.5;N.cylinder([p,.03,Yn[1]],[p,2.45,Yn[1]],.033,.033,a("#287b9c",0,.5,.35),8),N.cylinder([p,2.45,Yn[1]],[p,2.45,Yn[1]+1.1],.025,.025,et.metal,8),N.cylinder([p,.03,Yn[1]+1.1],[p,2.45,Yn[1]+1.1],.033,.033,a("#287b9c"),8)}for(let o of[Yn[1],Yn[1]+1.1])N.cylinder([Yn[0],2.45,o],[Yn[0]+7.5,2.45,o],.03,.03,et.metal,8);let qr=P(514,238);for(let o=0;o<4;o++)for(let p=0;p<4;p++){let v=qr[0]+o*.7,A=qr[1]+p*.7;N.cylinder([v,.02,A],[v,2.1,A],.022,.022,a("#287b9c"),7);for(let U=.7;U<2.2;U+=.7)o<3&&N.cylinder([v,U,A],[v+.7,U,A],.02,.02,a("#287b9c"),7),p<3&&N.cylinder([v,U,A],[v,U,A+.7],.02,.02,a("#287b9c"),7)}oe(qr[0]+1.05,qr[1]+1.05,2.3,2.3,"遊具");for(let o=0;o<de.length;o++){let p=de[o],v=de[(o+1)%de.length];o===6||o===15||o===16||Jo(p,v,1.55,!1,!0)}for(let o of["GATE_MAIN","GATE_WEST"]){let p=f.locations.find(U=>U.id===o),v=p.pos,A=o==="GATE_MAIN"?-Math.PI/4:.7;N.scope(n.compose(v[0],0,v[1],A),()=>{for(let U of[-1,1])N.box(U*2.6,1,0,.52,2,.58,et.wall),N.box(U*2.6,2.03,0,.6,.08,.64,et.base),N.cylinder([U*2.75,.05,.25],[U*2.75,3.35,.25],.036,.036,et.metal,9);if(o==="GATE_MAIN"){let U=a("#586567",0,.54,.35),G=a("#aeb0a7",3,.96);for(let H of[-1,1]){N.box(H*4.4,.47,0,3.05,.94,.58,G),N.box(H*4.4,.96,0,3.13,.08,.68,et.base);for(let rt=.24;rt<=2.64;rt+=.24)N.cylinder([H*2.45,.22,rt],[H*2.45,1.52,rt],.019,.019,U,6);for(let rt of[.23,1.51])N.cylinder([H*2.45,rt,.18],[H*2.45,rt,2.72],.026,.026,U,6)}}N.sign(0,3.12,.25,5.7,.96,z)}),p.approach=o==="GATE_MAIN"?[49,75]:[-43,-38],p.marker=[v[0],3.75,v[1]],Ft.push(p)}{let o=f.locations.find(p=>p.id==="GATE_WEST");N.scope(n.compose(o.pos[0],0,o.pos[1],.7),()=>{N.box(0,.045,1.15,5.05,.09,3.75,a("#b7b5a8",3,.96));for(let p of[-1,1]){N.box(p*3.24,.33,1.25,.52,.66,4.1,a("#a3a59a",3,.98)),N.box(p*3.24,.7,1.25,.61,.085,4.25,a("#c7c9ba",3,.93));for(let v of[-.52,.55,1.62,2.69])N.box(p*3.24,.34,v,.54,.42,.023,a("#898e83",3,.96))}})}let jo=new s,Du=d.sign("flag",`つながり
フェスタ`,`＠にしかま
2026`,"#366568","");jo.animate([0,0,0],9,()=>jo.quad([.05,2.8,0],[.05,1,0],[.62,1,0],[.62,2.8,0],a("#fff",Du,.8)));let Cc=[];for(let o of[[448,520],[440,611],[543,622],[468,407],[282,378],[130,128],[461,296]]){let p=P(...o);N.cylinder([p[0],.03,p[1]],[p[0],3,p[1]],.016,.014,et.whiteMetal,8),N.box(p[0],.055,p[1],.48,.1,.4,a("#dedfd6")),Cc.push({matrix:n.compose(p[0],0,p[1],-.3),info:[S(0,6),0,0,0]})}for(let o of[[465,441],[459,446],[456,452],[458,463],[445,472],[552,651],[542,651],[178,166]]){let p=P(...o);N.box(p[0],.035,p[1],.32,.07,.32,a("#b1543e")),N.cylinder([p[0],.06,p[1]],[p[0],.63,p[1]],.125,.022,a("#c7793c"),10),N.cylinder([p[0],.32,p[1]],[p[0],.4,p[1]],.072,.061,a("#e6ddc7"),10)}function Rc(o,p,v=25){let A=P(o,p),U=7;for(let G=0;G<U;G++){let H=G/U*v,rt=(G+1)/U*v,tt=2.4-G/U*1.6,Tt=2.4-(G+1)/U*1.6;for(let Nt of[-1,1])for(let Ut of[-1,1])N.cylinder([A[0]+Nt*tt,H,A[1]+Ut*tt],[A[0]+Nt*Tt,rt,A[1]+Ut*Tt],.06,.045,et.metal,6),N.cylinder([A[0]+Nt*tt,H,A[1]+Ut*tt],[A[0]-Nt*Tt,rt,A[1]+Ut*Tt],.026,.026,et.metal,6),N.cylinder([A[0]+Nt*tt,H,A[1]+Ut*tt],[A[0]+Nt*Tt,rt,A[1]-Ut*Tt],.026,.026,et.metal,6)}for(let G of[v*.71,v*.87,v]){N.cylinder([A[0]-5,G,A[1]],[A[0]+5,G,A[1]],.065,.065,et.metal,7);for(let H of[-1,1])N.cylinder([A[0]+H*.9,G-1.8,A[1]],[A[0]+H*5,G,A[1]],.04,.04,et.metal,6),N.cylinder([A[0]+H*4.7,G,A[1]],[A[0]+H*4.7,G-1,A[1]],.09,.09,a("#9b9d84"),10)}return oe(A[0],A[1],5,5,"鉄塔"),A}let Yr=Rc(322,56,26),Ic=Rc(548,194,26);for(let o of[-4.7,4.7])for(let p of[18.46,22.62,26]){let v=[];for(let A=0;A<=36;A++){let U=A/36;v.push([Yr[0]+(Ic[0]-Yr[0])*U+o,p-1-3.4*Math.sin(U*Math.PI),Yr[1]+(Ic[1]-Yr[1])*U])}N.tube(v,.035,et.dark,5)}let gi=new s;for(let o=0;o<27;o++){let p=o/27*x,v=125+S(0,35),A=o<9?o<4?-151:-83:o<18?84:-66+(o-18)*16.5,U=o<9?-42+o*17:o<18?-21+(o-9)*17:132,G=S(6,10),H=S(6,11),rt=S(5.2,7.3);gi.scope(n.compose(0,FestaScenery.height(A,U),0),()=>{gi.box(A,rt/2,U,G,rt,H,a(["#ddd8c9","#c4ccca","#e6e0d4","#b8b9ac"][o%4],3,.9));let tt=a(["#676f70","#8a7163","#5d6966"][o%3],10,.7);gi.tri([A-G/2-.35,rt,U-H/2-.35],[A+G/2+.35,rt,U-H/2-.35],[A,rt+2,U-H/2-.35],tt),gi.tri([A+G/2+.35,rt,U+H/2+.35],[A-G/2-.35,rt,U+H/2+.35],[A,rt+2,U+H/2+.35],tt),gi.quad([A-G/2-.35,rt,U-H/2-.35],[A-G/2-.35,rt,U+H/2+.35],[A,rt+2,U+H/2+.35],[A,rt+2,U-H/2-.35],tt,3,3),gi.quad([A,rt+2,U-H/2-.35],[A,rt+2,U+H/2+.35],[A+G/2+.35,rt,U+H/2+.35],[A+G/2+.35,rt,U-H/2-.35],tt,3,3);for(let Tt=0;Tt<3;Tt++)gi.box(A+(Tt-1)*2.1,rt*.62,U+H/2+.02,1.15,1.35,.03,et.glass)})}let Nu=d.banner("WC","にしかまくら子どもの家","当日のトイレ","#426861");FestaScenery.build({details:N,green:Zt,distant:gi,signGeo:zt,childSign:Nu,p:P,m:et,mat:a,M:n,rng:u,TAU:x,ga:B,gb:V,gc:Y,gw:vt,gd:wt,gymRise:ct});function cs(o,p,v=.26){if(!ne(o,p,de)||ne(o,p,os))return!1;for(let A of xt){let U=Math.max(Math.abs(o-A.x)-A.w/2,0),G=Math.max(Math.abs(p-A.z)-A.d/2,0);if(U*U+G*G<v*v)return!1}for(let A of Mt)if(Math.hypot(o-A.x,p-A.z)<v+A.r)return!1;return!0}function Pc(o,p){return o>=B[0]+.05&&o<=V[0]-.15&&p>=B[1]+.05&&p<=V[1]-.05?ct:o>=B[0]-1.65&&o<B[0]+.05&&Be.some(([v,A])=>p>=P(xe,v)[1]+.15&&p<=P(xe,A)[1]-.15)?ct*m((o-B[0]+1.65)/1.7,0,1):0}function Zr(o,p=10){if(cs(o[0],o[1],.31))return[...o];for(let v=.4;v<=p;v+=.35)for(let A=0;A<32;A++){let U=A*x/32,G=o[0]+Math.sin(U)*v,H=o[1]+Math.cos(U)*v;if(cs(G,H,.31))return[G,H]}return null}let Qo=f.locations.find(o=>o.id==="GYM");Qo.approach=[Y[0],B[1]+18.8],Qo.marker=[Y[0],3.1+ct,B[1]+18.8],Ft.push(Qo);for(let o of Ft)o.id==="WC"&&(o.approach=[(Z+_t)/2,V[1]+5.5]),o.approach=Zr(o.approach)||Zr(o.pos);t(.62,"来場者・ヤギ・試乗車の動きを準備しています");function Lc(o=0){let p=new s,v=a(["#7f9c9a","#d8c5ad","#a76250","#4c6670","#787c58","#b7b4a9","#655c73","#e3d1b1"][o%8],6,.93),A=a(["#41494e","#746854","#4a575a","#485669"][o%4],6,.91),U=a(["#cba584","#d8b69a","#bc9879","#d0ad8c"][o%4],0,.78),G=a(["#383733","#4b4137","#77756e"][o%3],0,.96),H=[[.88,.19,.126],[.98,.19,.13],[1.16,.218,.148],[1.32,.243,.144],[1.385,.222,.127],[1.445,.075,.064]];for(let rt=0;rt<H.length-1;rt++)for(let tt=0;tt<20;tt++){let Tt=tt/20*x,Nt=(tt+1)/20*x,Ut=H[rt],kt=H[rt+1],ie=(Je,He)=>[Math.cos(He)*Je[1],Je[0],Math.sin(He)*Je[2]];p.quad(ie(Ut,Tt),ie(kt,Tt),ie(kt,Nt),ie(Ut,Nt),v,1,1)}p.cylinder([0,1.4,0],[0,1.49,0],.061,.062,U,10),p.sphere(0,1.57,.012,.114,.142,.107,U,16,11),p.sphere(0,1.575,-.009,.116,.145,.11,G,20,10,0,1.26),p.sphere(0,1.58,.127,.017,.032,.024,U,10,7);for(let rt of[-1,1])p.sphere(rt*.111,1.57,.008,.024,.042,.026,U,9,7),p.sphere(rt*.039,1.601,.111,.009,.004,.005,et.black,8,5),p.cylinder([rt*.026,1.621,.104],[rt*.053,1.621,.098],.004,.004,G,5),p.animate([rt*.23,1.37,0],rt,()=>{p.sphere(rt*.235,1.335,0,.082,.105,.085,v,12,9),p.sphere(rt*.295,1.08,.035,.064,.073,.064,v,12,8),p.cylinder([rt*.23,1.37,0],[rt*.295,1.08,.035],.079,.064,v,12),p.cylinder([rt*.295,1.08,.035],[rt*.29,.9,.06],.063,.045,v,11),p.sphere(rt*.287,.859,.065,.043,.067,.038,U,11,7)}),p.animate([rt*.108,.88,0],rt*2,()=>{p.cylinder([rt*.105,.9,0],[rt*.12,.49,.015],.098,.077,A,12),p.cylinder([rt*.12,.49,.015],[rt*.12,.1,0],.077,.06,A,11),p.sphere(rt*.12,.077,.052,.075,.068,.146,a("#383d3c",0,.75),12,7),p.box(rt*.12,.034,.054,.142,.035,.25,a("#c1beb1"))});if(o%3===0&&(p.sphere(0,1.7,-.006,.126,.045,.126,a("#b4a481",6),14,8),p.box(0,1.676,.125,.18,.018,.14,a("#b4a481",6))),o%4===1){p.sphere(0,1.17,-.16,.16,.23,.1,a("#73664e",6),13,9);for(let rt of[-1,1])p.cylinder([rt*.16,1.36,.04],[rt*.12,1.03,.09],.017,.017,a("#756b58"),7)}return o%4===2&&(p.cylinder([.29,.91,.06],[.32,.66,.06],.01,.01,a("#aa9675"),7),p.box(.32,.57,.06,.19,.24,.22,a("#d3c2a1",6))),p}function Uu(o){let p=Lc(o),v=new s;for(let U=0;U<p.used;U+=60)if(!(Math.abs(p.data[U+19])>1.5&&Math.abs(p.data[U+19])<3))for(let G=0;G<3;G++){let H=U+G*20,rt={color:Array.from(p.data.slice(H+8,H+11)),p:Array.from(p.data.slice(H+12,H+16)),ao:p.data[H+11]};v.vertex([p.data[H],p.data[H+1]-.4,p.data[H+2]],Array.from(p.data.slice(H+3,H+6)),Array.from(p.data.slice(H+6,H+8)),rt)}let A=a(["#41494e","#746854","#4a575a","#485669"][o%4],6,.9);for(let U of[-1,1])v.cylinder([U*.105,.49,0],[U*.12,.46,.35],.1,.08,A,12),v.sphere(U*.12,.46,.35,.078,.084,.085,A,12,8),v.cylinder([U*.12,.46,.35],[U*.12,.105,.39],.078,.058,A,12),v.sphere(U*.12,.078,.45,.073,.06,.145,a("#383d3c"),12,8),v.box(U*.12,.035,.45,.14,.035,.25,a("#b8b9ad"));return v}function Fu(o){let p=new s,v=a(["#dfb357","#72a0a2","#aa6357","#8c9a66"][o%4],6,.92),A=a("#506277",6,.91),U=a("#d4ad8b",0,.77),G=a("#3d342e",0,.94);p.sphere(0,.83,0,.2,.3,.145,v,14,10),p.cylinder([0,1.04,0],[0,1.17,0],.065,.06,U,10),p.sphere(0,1.34,0,.165,.19,.15,U,16,11),p.sphere(0,1.4,-.015,.17,.145,.153,G,16,9,0,1.35);for(let H of[-1,1])p.sphere(H*.06,1.36,.141,.01,.008,.008,et.dark,8,5),p.animate([H*.19,1.04,0],H,()=>{p.cylinder([H*.19,1.02,0],[H*.27,.65,.025],.067,.045,v,10),p.sphere(H*.27,.62,.03,.048,.06,.044,U,10,7)}),p.animate([H*.09,.58,0],H*2,()=>{p.cylinder([H*.09,.58,0],[H*.11,.25,0],.079,.062,A,10),p.cylinder([H*.11,.25,0],[H*.11,.09,.025],.06,.05,A,10),p.sphere(H*.11,.055,.085,.072,.052,.115,et.dark,10,7)});return p}let Dc=Array.from({length:8},()=>[]),Nc=Array.from({length:4},()=>[]),qi=[],Ou=0;function $s(o,p,v=0,A=!1,U=1,G=null,H="visitor"){let rt=Ou++,tt=H==="child",Tt=rt%(tt?4:8),Nt={matrix:n.compose(o,0,p,v,U),info:[S(0,6.28),A?1:0,0,0]},Ut={x:o,z:p,yaw:v,scale:U,instance:Nt,walk:A,path:G,pathIndex:0,speed:S(.4,.64),group:Tt,type:H,index:rt};(tt?Nc:Dc)[Tt].push(Nt),qi.push(Ut)}for(let[o,p]of Ft.filter(v=>["F","S","T"].includes(v.category)&&v.approach).entries())if(o%2===0){let v=p.yaw||0,A=o%3?-1:1,U=p.approach,G=U[0]-Math.sin(v)*1.05+Math.cos(v)*.95*A,H=U[1]-Math.cos(v)*1.05-Math.sin(v)*.95*A;cs(G,H,.2)&&$s(G,H,Math.atan2(p.pos[0]-G,p.pos[1]-H),!1,S(.88,1.04))}for(let o of f.records.filter(p=>p.kind==="tent")){let p=o.yaw||0,v=o.id==="F-10"?-1.5:0;$s(o.pos[0]+Math.cos(p)*v-Math.sin(p)*.52,o.pos[1]-Math.sin(p)*v-Math.cos(p)*.52,p,!1,.93,null,"vendor")}let Uc=[[[0,10],[2,9],[2,-11],[20,-12],[26,-12],[26,-2],[26,12],[16,12],[0,10]],[[27,47],[29,54],[29,63],[31,68],[31,75],[28,77],[28,70],[29,60],[27,47]],[[-41,13],[-13,13],[-12,-4],[-15,-17],[-33,-19],[-41,13]],[[19,18],[26,21],[28,32],[29,44],[27,47],[28,32],[26,21],[19,18]]];for(let o=0;o<36;o++){let p=Uc[o%Uc.length],v=o%p.length,A=p[v],U=p[(v+1)%p.length],G=S(0,1),H=Zr([A[0]+(U[0]-A[0])*G,A[1]+(U[1]-A[1])*G],2);if(!H)continue;let rt=o%3===0;$s(H[0],H[1],Math.atan2(U[0]-A[0],U[1]-A[1]),!0,rt?1:S(.88,1.05),p,rt?"child":"visitor"),qi[qi.length-1].pathIndex=(v+1)%p.length}for(let o=0;o<7;o++)$s(Y[0]+(o-3)*1.6,B[1]+9.5+o%2*.6,0,!0,.8,null,"performer");for(let o of[[7,11],[8,11.5],[24,-9],[25,-8.7],[-12,-23],[-13,-23.4],[-39,-44],[49,32],[50,33]])cs(...o,.23)&&$s(o[0],o[1],S(0,x),!1,S(.85,1));let tn={};tn.base=new r(i,it,{name:"Architecture, ground and booths"}),tn.details=new r(i,N,{name:"Furniture, windows and equipment"}),tn.foliage=new r(i,Zt,{name:"Foliage",instances:[{matrix:n.identity(),info:[0,0,1,0]}]}),tn.roof=new r(i,Me,{name:"Gym roof"}),tn.signs=new r(i,zt,{name:"Readable booth signs"}),tn.distant=new r(i,gi,{name:"Approximate neighbourhood",shadow:!1}),tn.flags=new r(i,jo,{name:"Fabric banners",instances:Cc});let Fc=Array.from({length:4},()=>[]),Bu=0;for(let o=0;o<se.length;o++){if(se[o].addedGymSeat||o%4!==1&&!(se[o].gym&&o%5===2))continue;let p=se[o];Fc[Bu++%4].push({matrix:n.compose(p.x,p.gym?ct:0,p.z,p.yaw,.94),info:[0,0,0,0]})}tn.seated=Fc.map((o,p)=>new r(i,Uu(p),{name:"Seated visitors "+p,instances:o}));let Jr=Ec(0);tn.vehicle=new r(i,Ue,{name:"Generic mobility vehicle",instances:[{matrix:n.compose(Jr.x,0,Jr.z,Jr.yaw),info:[0,0,0,0]}],dynamic:!0});let Oc=Array.from({length:4},(o,p)=>({matrix:n.compose(Fe[0]+(p%2-.5)*2,0,Fe[1]+(Math.floor(p/2)-.5)*2.2,p*1.8,p===3?.64:1),info:[p,0,0,0]}));tn.goats=new r(i,Cu(),{name:"Goats",instances:Oc,dynamic:!0}),tn.actors=Dc.map((o,p)=>new r(i,Lc(p),{name:"Visitors "+p,instances:o,dynamic:!0})),tn.children=Nc.map((o,p)=>new r(i,Fu(p),{name:"Children "+p,instances:o,dynamic:!0})),t(.81,"看板と案内データを仕上げています"),d.upload(i.gl,matchMedia("(pointer:coarse)").matches||innerWidth<650?256:512),i.atlas=d;let Bc=70,tl=0,Ks=Jr,zc=qi.filter(o=>o.type!=="vendor"&&o.type!=="performer");function kc(o){Bc=m(o,0,100);let p=Math.round(zc.length*Bc/100);zc.forEach((v,A)=>v.hidden=A>=p),qi.filter(v=>v.type==="vendor"||v.type==="performer").forEach(v=>v.hidden=o===0),tn.seated.forEach(v=>v.visible=o>10),i.shadowDirty=!0}kc(70);function zu(o,p){if(Ks=Ec(o*.88),tn.vehicle.instances[0].matrix=n.compose(Ks.x,0,Ks.z,Ks.yaw),tn.vehicle.updateInstances(),o-tl>.055){let v=Math.min(.18,o-tl);tl=o;for(let A of qi){if(A.walk&&A.path&&!A.hidden){let H=A.path[A.pathIndex],rt=H[0]-A.x,tt=H[1]-A.z,Tt=Math.hypot(rt,tt);if(Tt<.35)A.pathIndex=(A.pathIndex+1)%A.path.length;else{let Nt=A.x+rt/Tt*A.speed*v,Ut=A.z+tt/Tt*A.speed*v;cs(Nt,Ut,.19)?(A.x=Nt,A.z=Ut,A.yaw=Math.atan2(rt,tt)):A.pathIndex=(A.pathIndex+1)%A.path.length}}let U=Pc(A.x,A.z),G=A.yaw;A.type==="performer"&&(G=Math.sin(o*.5+A.index*.3)*.12,U+=.04+Math.max(0,Math.sin(o*2.4+A.index*.4))*.07),A.instance.matrix=n.compose(A.x,A.hidden?-100:U,A.z,G,A.scale),A.instance.info[1]=A.hidden?0:A.walk?A.type==="performer"?.8:1:0}tn.actors.forEach(A=>A.updateInstances()),tn.children.forEach(A=>A.updateInstances()),Oc.forEach((A,U)=>{let G=U*1.8+Math.sin(o*.1+U)*.3;A.matrix=n.compose(Fe[0]+(U%2-.5)*2+Math.sin(o*.1+U)*.2,0,Fe[1]+(Math.floor(U/2)-.5)*2.2,G,U===3?.64:1)}),tn.goats.updateInstances()}}return t(.9,"歩行できる経路を確認しています"),{data:f,markers:Ft,colliders:xt,buildings:ee,campus:de,field:Ze,restricted:os,track:Ke,trackLength:fi,meshes:tn,trunks:Mt,seats:se,atlas:d,categoryColors:D,isWalkable:cs,walkHeight:Pc,nearestWalkable:Zr,update:zu,setCrowd:kc,p:P,getCar:()=>Ks,polyInside:ne,actorCount:qi.length}};window.FestaNavigation=class{constructor(i){this.world=i,this.step=.7,this.x0=-67,this.z0=-58,this.nx=184,this.nz=244,this.size=this.nx*this.nz,this.open=new Uint8Array(this.size);for(let t=0;t<this.nz;t++)for(let e=0;e<this.nx;e++){let n=this.point(t*this.nx+e);this.open[t*this.nx+e]=i.isWalkable(n[0],n[1],.34)?1:0}}point(i){return[this.x0+i%this.nx*this.step,this.z0+Math.floor(i/this.nx)*this.step]}index(i){return Math.round((i[1]-this.z0)/this.step)*this.nx+Math.round((i[0]-this.x0)/this.step)}nearest(i){let t=Math.round((i[0]-this.x0)/this.step),e=Math.round((i[1]-this.z0)/this.step),n=-1,s=1/0;for(let r=0;r<18;r++){for(let l=-r;l<=r;l++)for(let a=-r;a<=r;a++){if(r&&Math.abs(a)!==r&&Math.abs(l)!==r)continue;let h=t+a,u=e+l;if(h<0||h>=this.nx||u<0||u>=this.nz)continue;let m=u*this.nx+h;if(!this.open[m])continue;let x=this.point(m),f=Math.hypot(x[0]-i[0],x[1]-i[1]);f<s&&(s=f,n=m)}if(n>=0)return n}return-1}lineFree(i,t,e=.3){let n=Math.hypot(t[0]-i[0],t[1]-i[1]),s=Math.ceil(n/.16);for(let r=0;r<=s;r++)if(!this.world.isWalkable(i[0]+(t[0]-i[0])*r/Math.max(1,s),i[1]+(t[1]-i[1])*r/Math.max(1,s),e))return!1;return!0}find(i,t){let e=this.nearest(i),n=this.nearest(t);if(e<0||n<0)return null;let s=new Float32Array(this.size);s.fill(1/0);let r=new Int32Array(this.size);r.fill(-1);let l=new Uint8Array(this.size),a=[],h=(b,C)=>{let y={i:b,f:C},c=a.length;for(a.push(y);c;){let w=c-1>>1;if(a[w].f<=y.f)break;a[c]=a[w],c=w}a[c]=y},u=()=>{let b=a[0],C=a.pop();if(a.length){let y=0;for(;2*y+1<a.length;){let c=2*y+1;if(c+1<a.length&&a[c+1].f<a[c].f&&c++,a[c].f>=C.f)break;a[y]=a[c],y=c}a[y]=C}return b.i},m=n%this.nx,x=Math.floor(n/this.nx),f=b=>{let C=Math.abs(b%this.nx-m),y=Math.abs(Math.floor(b/this.nx)-x);return Math.max(C,y)+.41421356*Math.min(C,y)};s[e]=0,h(e,f(e));let _=!1;for(;a.length;){let b=u();if(l[b])continue;if(l[b]=1,b===n){_=!0;break}let C=b%this.nx,y=Math.floor(b/this.nx);for(let c=-1;c<=1;c++)for(let w=-1;w<=1;w++){if(!w&&!c)continue;let D=C+w,g=y+c;if(D<0||D>=this.nx||g<0||g>=this.nz)continue;let L=g*this.nx+D;if(!this.open[L]||l[L]||w&&c&&(!this.open[y*this.nx+D]||!this.open[g*this.nx+C]))continue;let z=s[b]+(w&&c?1.41421356:1);z<s[L]&&(s[L]=z,r[L]=b,h(L,z+f(L)))}}if(!_)return null;let S=[],P=n;for(;P>=0&&(S.push(this.point(P)),P!==e);)P=r[P];S.reverse(),this.lineFree(i,S[0])&&S.unshift([...i]),this.lineFree(S[S.length-1],t)&&S.push([...t]);let T=[S[0]],d=0;for(;d<S.length-1;){let b=S.length-1;for(;b>d+1&&!this.lineFree(S[d],S[b]);)b--;T.push(S[b]),d=b}return T}};(async function(){let i=R=>document.getElementById(R),t=R=>String(R??"").replace(/[&<>"']/g,j=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[j]),e={search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',overview:'<path d="m3 8 9-5 9 5-9 5-9-5Z M3 12l9 5 9-5M3 16l9 5 9-5"/>',route:'<circle cx="5" cy="5" r="2"/><circle cx="19" cy="19" r="2"/><path d="M7 5h8a4 4 0 0 1 0 8H9a4 4 0 0 0 0 8h5"/>',settings:'<path d="M4 6h16M4 12h16M4 18h16"/><circle cx="9" cy="6" r="2" fill="currentColor"/><circle cx="16" cy="12" r="2" fill="currentColor"/><circle cx="8" cy="18" r="2" fill="currentColor"/>',help:'<circle cx="12" cy="12" r="9"/><path d="M9.3 9a2.8 2.8 0 0 1 5.4 1c0 2-2.7 2-2.7 4M12 17h.01"/>',arrow:'<path d="M4 12h15m-5-5 5 5-5 5"/>',back:'<path d="M20 12H5m5-5-5 5 5 5"/>',close:'<path d="m6 6 12 12M6 18 18 6"/>',expand:'<path d="M9 3H3v6M15 3h6v6M3 15v6h6M21 15v6h-6"/>',walk:'<circle cx="13" cy="4" r="2"/><path d="m11 9 3 2 4 1M11 8l-3 5-4 1M11 9l-1 7-4 5m4-5 5 1 2 5"/>',pin:'<path d="M19 10c0 6-7 12-7 12S5 16 5 10a7 7 0 0 1 14 0Z"/><circle cx="12" cy="10" r="2.5"/>',eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>'};function n(R){return'<svg viewBox="0 0 24 24" aria-hidden="true">'+(e[R]||e.pin)+"</svg>"}function s(R=document){R.querySelectorAll("[data-icon]").forEach(j=>j.innerHTML=n(j.dataset.icon))}s();let r=FESTA_DATA,l=[...r.records,...r.locations],a=Object.fromEntries(l.map(R=>[R.id,R])),h={F:"#a64c35",S:"#385e76",T:"#4e6c43",P:"#83503e",M:"#ab8450",I:"#28595c"},u={F:"飲食・屋台村",S:"物販・ワークショップ",T:"地域・防災・体験",P:"体育館の出演団体",M:"交流・モビリティー",I:"会場案内"},m=matchMedia("(pointer:coarse)").matches||innerWidth<650,x=matchMedia("(prefers-reduced-motion: reduce)").matches,f,_,S,P=!1,T=0,d=0,b=0,C,y=null,c={mode:"welcome",pos:[0,11],yaw:.1,pitch:0,orbitYaw:-.48,orbitPitch:.79,orbitDist:115,orbitTarget:[0,0,22],returnPos:null,selected:null,nearest:null,path:null,pathIndex:1,auto:!1,targetId:null,labels:!0,showRoof:!0,tour:!1,tourIndex:-1,tourWaiting:0,paused:!1,sheet:null,crowd:70,light:"day",distanceWalked:0,rideYaw:0,runMode:!1,quality:m?"standard":"high"},w={},D={x:0,y:0,active:!1,pid:null},g={active:!1,pid:null,x:0,y:0,moved:0},L=null,z=new Set,J=new Map;function q(R,j=4e3){i("toast").textContent=R,i("toast").classList.remove("hidden"),clearTimeout(C),C=setTimeout(()=>i("toast").classList.add("hidden"),j)}function nt(R,j){i("loadBar").style.width=Math.round(R*100)+"%",i("loadText").textContent=j}let W=()=>new Promise(R=>setTimeout(R,0));function Q(){c.mode="walk",i("welcome").classList.add("hidden"),i("hud").classList.remove("hidden"),i("minimapWrap").classList.remove("hidden"),i("bottomHint").classList.remove("hidden"),i("joystick").classList.remove("hidden"),m&&i("lookHint").classList.remove("hidden"),i("scene").focus({preventScroll:!0})}function dt(R){c.yaw=Math.atan2(R[0]-c.pos[0],-(R[1]-c.pos[1])),c.pitch=-.02}function ut(R){_&&(c.pos=_.nearestWalkable(R)||[0,11])}function yt(R="field"){if(P){if(Se(),vt(),zt(),jt(!1),Q(),R==="field")ut([2.8,11]),dt([14,-14]);else{let j=a[R];ut(j.approach),dt(R==="GATE_MAIN"?[33,61]:[-27,-24])}c.mode="walk",it(),q(m?"左の丸で移動。画面の右側をドラッグすると見回せます。":"左の丸、WASD または矢印キーで移動。画面をドラッグして見回します。",4500)}}function mt(){P&&(Se(),vt(),jt(!1),zt(),c.mode="welcome",i("welcome").classList.remove("hidden"),i("minimapWrap").classList.add("hidden"),i("bottomHint").classList.add("hidden"),i("nearby").classList.add("hidden"),i("joystick").classList.add("hidden"),i("lookHint").classList.add("hidden"),it())}function ft(){if(P){if(Se(),vt(),c.mode==="overview"){c.mode="walk",c.returnPos&&(c.pos=[...c.returnPos]),c.pitch=0,it();return}c.mode==="welcome"&&Q(),zt(),jt(!1),c.returnPos=[...c.pos],c.mode="overview",c.orbitTarget=[0,0,23],c.orbitDist=158,c.orbitYaw=-.27,c.orbitPitch=.9,it(),q("ドラッグで回転、ホイールで拡大。地面を押すとその場所へ移動します。ブースの札を押すと内容を表示します。")}}function it(){let R=c.mode;if(i("speedToggle").classList.toggle("hidden",m||R!=="walk"),i("speedToggle").textContent=c.runMode?"速度：走る":"速度：歩く",i("speedToggle").setAttribute("aria-pressed",String(c.runMode)),i("speedToggle").setAttribute("aria-label",c.runMode?"走るを選択中。歩くに切り替える":"歩くを選択中。走るに切り替える"),i("overviewBtn").classList.toggle("active",R==="overview"),i("joystick").classList.toggle("hidden",R!=="walk"||!!c.sheet),i("lookHint").classList.toggle("hidden",!m||R!=="walk"||!!c.sheet),i("tourCard").classList.toggle("hidden",!c.tour),i("modeBar").classList.toggle("hidden",R==="welcome"||R==="walk"&&!c.path&&!c.tour),R==="overview")i("modeText").textContent="上空から会場を見る",i("modeAction").textContent="歩行に戻る";else if(R==="ride")i("modeText").textContent="モビリティー試乗イメージ",i("modeAction").textContent="降りる";else if(c.path){let j=a[c.targetId];i("modeText").textContent=(c.auto?"歩いて案内中：":"経路表示：")+(j?j.short:"選択した場所"),i("modeAction").textContent=c.auto?"一時停止":"自動で歩く"}else c.tour&&(i("modeText").textContent="会場ツアー",i("modeAction").textContent="終了")}function N(R){return R.kind==="performer"||R.id==="T-SCI"?a.GYM:R}function Zt(R,j=!0){if(!P)return;let E=typeof R=="string"?N(a[R]):null,O=E?.approach||(!E&&Array.isArray(R)?R:null);if(!O)return q("この団体のブース位置は資料で特定できていません。"),!1;c.mode==="welcome"&&yt("field"),c.mode==="ride"&&(c.mode="walk",ut(a.MOBILITY.approach)),c.mode="walk";let k=S.find(c.pos,O);return k?(c.path=k,c.pathIndex=1,c.auto=j,c.targetId=E?.id||null,et(k),Se(),vt(),it(),!0):(q("ここから歩ける経路を見つけられませんでした。「この場所へ移動」で見学できます。",6e3),!1)}function Me(R,j=!1){let E=N(a[R]);return E?.approach?(c.mode==="welcome"&&Q(),zt(),c.tour||(c.tour=!1),c.mode="walk",ut(E.approach),dt(E.pos),E.id==="GATE_MAIN"&&dt([33,61]),E.id==="GATE_WEST"&&dt([-27,-24]),E.id==="GYM"&&dt([E.pos[0],_.p(525,345)[1]]),E.id==="WC"&&dt([45,45]),Se(),vt(),it(),j||q(E.short+" に移動しました"),!0):!1}function zt(){c.path=null,c.auto=!1,c.targetId=null,L&&(L.dispose(),L=null),it()}function et(R){L&&L.dispose();let{Geometry:j,Mesh:E,material:O}=FestaGL,k=new j;for(let X=0;X<R.length-1;X++){let gt=R[X],St=R[X+1],Rt=St[0]-gt[0],bt=St[1]-gt[1],At=Math.hypot(Rt,bt);if(At<.01)continue;let te=-bt/At*.055,le=Rt/At*.055;k.quad([gt[0]-te,.088,gt[1]-le],[gt[0]+te,.088,gt[1]+le],[St[0]+te,.088,St[1]+le],[St[0]-te,.088,St[1]-le],O("#b78134",0,.75,0,.13));for(let Te=1;Te<At;Te+=2){let ae=gt[0]+Rt*Te/At,$e=gt[1]+bt*Te/At;k.disk(ae,.092,$e,.12,O("#dfbc77",0,.7,0,.2),10)}}let lt=R[R.length-1];k.cylinder([lt[0],.08,lt[1]],[lt[0],.15,lt[1]],.26,.26,O("#d2a558",0,.65,0,.2),30),L=new E(f,k,{name:"Navigation guide",shadow:!1})}function xt(R,j){let E=Math.max(1,Math.ceil(Math.hypot(R,j)/.15)),O=0;for(let k=0;k<E;k++){let lt=[...c.pos],X=c.pos[0]+R/E,gt=c.pos[1]+j/E;_.isWalkable(X,gt,.28)?c.pos=[X,gt]:(_.isWalkable(X,c.pos[1],.28)&&(c.pos[0]=X),_.isWalkable(c.pos[0],gt,.28)&&(c.pos[1]=gt)),O+=Math.hypot(c.pos[0]-lt[0],c.pos[1]-lt[1])}return c.distanceWalked+=O,O}function Mt(R){if(!c.path||!c.auto)return;let j=c.path[c.pathIndex];if(!j){Ft();return}let E=j[0]-c.pos[0],O=j[1]-c.pos[1],k=Math.hypot(E,O);if(k<.16){c.pathIndex++,c.pathIndex>=c.path.length&&Ft();return}let lt=Math.min(k,R*(c.tour?2:2.35)),X=xt(E/k*lt,O/k*lt),gt=Math.atan2(E,-O);c.yaw+=ee(gt-c.yaw)*Math.min(1,R*3.3),c.pitch+=(0-c.pitch)*Math.min(1,R*3),X<2e-4&&lt>.001&&(c.auto=!1,q("障害物の手前で停止しました。移動キーで位置を調整できます。"),it())}function Ft(){let R=c.targetId,j=a[R];zt(),j&&(dt(j.pos),j.id==="GATE_MAIN"&&dt([33,61]),j.id==="GATE_WEST"&&dt([-27,-24]),z.add(R),q(j.short+" に到着しました",2600)),c.tour&&(c.tourWaiting=10,oe())}function ee(R){return Math.atan2(Math.sin(R),Math.cos(R))}let Ot=[{id:"GATE_MAIN",title:"正門から、フェスタへ",text:"キッチンカーの並ぶ入口からスタート。会場の端から端まで、配置案の位置関係をたどります。"},{id:"F-1",title:"コーヒーのブースへ",text:"オウカ珈琲。コーヒーやホットサンドなど、予定されている内容を看板や詳細画面で読めます。"},{id:"F-8",title:"校庭の屋台村",text:"ル・ミリュウ鎌倉山をはじめ、飲食ブースは校庭の東西に配置。中央には16卓・96席のであいの広場があります。"},{id:"MEET",title:"座って、ひと息",text:"であいの広場。近くには7.2m×1.8mの屋外ステージ。机や椅子の大きさを手がかりに、空間を体験できます。"},{id:"S-5",title:"ワイワイマルシェ",text:"物販やワークショップの列へ。テントをのぞきながら、各団体の予定内容を確かめられます。"},{id:"MOBILITY",title:"モビリティーの試乗エリア",text:"配置図では幅2m・延長約135mの実走路。ここでは汎用の車両モデルを走らせています。柵の内側には歩いて入れません。"},{id:"T-15",title:"ヤギ牧場で、であう",text:"福祉農業推進機構のブース。ヤギと触れ合う企画を、校庭の北西側に配置しています。"},{id:"T-2",title:"地域と、防災と",text:"西鎌そなーずのラジオや無線の展示。地域紹介・防災・福祉などのコーナーも、飲食や物販と同じ会場で見学できます。"},{id:"GYM",title:"体育館、みんなの舞台",text:"体育館の中へ。常設の壇上舞台は配置図に従い使用せず、床面の催しとして演出。出演順案は詳細画面で読めます。"}];function se(){P&&(Se(),vt(),zt(),c.mode==="welcome"&&Q(),c.mode="walk",c.tour=!0,c.tourIndex=0,Me("GATE_MAIN",!0),c.tour=!0,c.tourWaiting=10,oe(),it())}function oe(){let R=Ot[c.tourIndex];R&&(i("tourCount").textContent="GUIDED WALK  "+String(c.tourIndex+1).padStart(2,"0")+" / "+Ot.length,i("tourTitle").textContent=R.title,i("tourDescription").textContent=R.text,i("tourNext").innerHTML=(c.tourIndex===Ot.length-1?"ツアーを終える":"次の場所へ")+" "+n("arrow"),i("tourCard").classList.toggle("hidden",!c.tour))}function ue(){if(c.tour){if(c.tourWaiting=0,c.tourIndex++,c.tourIndex>=Ot.length){jt(),q("会場を一周しました。このまま自由に歩けます。");return}oe(),Zt(Ot[c.tourIndex].id,!0)||(Me(Ot[c.tourIndex].id,!0),c.tourWaiting=10)}}function jt(R=!0){c.tour=!1,c.tourWaiting=0,i("tourCard").classList.add("hidden"),R&&zt(),it()}function de(){P&&(c.mode==="welcome"&&Q(),Se(),zt(),jt(!1),c.mode="ride",c.rideYaw=0,c.pitch=-.06,it(),q("試乗視点です。ドラッグして周囲を見回せます。車種・速度は演出です。",5500))}function ne(){c.mode==="overview"?(c.mode="walk",c.returnPos&&ut(c.returnPos),c.pitch=0):c.mode==="ride"?(c.mode="walk",ut(a.MOBILITY.approach),dt(_.track[40])):(jt(!1),zt()),it()}function me(R,j){y=document.activeElement,c.sheet=j,i("sheetTitle").textContent=R,i("sheet").classList.remove("hidden"),i("sheetScrim").classList.remove("hidden"),i("sheetBack").classList.add("hidden"),i("sheetBody").scrollTop=0,_t(),it(),setTimeout(()=>i("sheetClose").focus({preventScroll:!0}),0)}function Se(){c.sheet=null,i("sheet").classList.add("hidden"),i("sheetScrim").classList.add("hidden"),it(),y&&y.isConnected&&y.focus({preventScroll:!0})}let Ze="",fe="all";function Pe(){me("ブースを見つける","search"),i("sheetBody").innerHTML='<div class="search-field">'+n("search")+'<input id="searchInput" aria-label="団体名や内容から検索" placeholder="団体名・食べもの・体験から検索" value="'+t(Ze)+'"></div><div class="filter-row">'+[["all","すべて"],["F","飲食"],["S","物販・体験"],["T","地域・防災"],["P","舞台"],["I","会場案内"]].map(([R,j])=>'<button class="filter '+(R===fe?"active":"")+'" data-filter="'+R+'">'+j+"</button>").join("")+'</div><p class="result-count" id="resultCount"></p><div id="results"></div>',i("searchInput").addEventListener("input",R=>{Ze=R.target.value,K()}),i("sheetBody").querySelectorAll("[data-filter]").forEach(R=>R.onclick=()=>{fe=R.dataset.filter,i("sheetBody").querySelectorAll("[data-filter]").forEach(j=>j.classList.toggle("active",j===R)),K()}),K(),setTimeout(()=>i("searchInput").focus(),30)}function K(){let R=Ze.normalize("NFKC").toLowerCase().trim(),j=R.split(/\s+/).filter(Boolean),E=l.filter(O=>(fe==="all"||(fe==="I"?["M","I"].includes(O.category):O.category===fe))&&j.every(k=>(O.id+" "+O.name+" "+O.detail).normalize("NFKC").toLowerCase().includes(k)));i("resultCount").textContent=E.length+" 項目 ／ 団体51・会場案内9（9月時点の資料）",i("results").innerHTML=E.length?E.map(O=>'<button class="result" data-id="'+t(O.id)+'"><span class="badge" style="background:'+h[O.category]+'">'+t(O.id.startsWith("P-")?"P":O.id.includes("-")?O.id:O.id==="WC"?"WC":"案内")+'</span><span class="result-info"><strong>'+t(O.name)+'</strong><small class="'+(O.kind==="unplaced"?"unplaced":"")+'">'+t(O.kind==="unplaced"?"位置未特定 · "+O.caption:O.caption)+"</small></span>"+n("arrow")+"</button>").join(""):'<p class="empty">該当する項目がありません。<br>短い言葉でも検索できます。</p>',i("results").querySelectorAll("[data-id]").forEach(O=>O.onclick=()=>xe(O.dataset.id,!0))}function xe(R,j=!1){let E=a[R];if(!E)return;c.selected=R,z.add(R),me("ブース・会場の詳細","detail"),i("sheetBack").classList.toggle("hidden",!j);let O=N(E),k=P&&!!O.approach,lt=u[E.category],X=E.source||"配置ゾーニング 9月21日 Ver.6案（1ページ）",gt='<div class="detail-id"><span class="badge" style="background:'+h[E.category]+'">'+t(E.id.startsWith("P-")?"P":E.id.includes("-")?E.id:"案内")+"</span>"+t(lt)+'<span>／ 予定</span></div><h3 class="detail-title">'+t(E.name)+'</h3><p class="detail-caption">'+t(E.caption)+"</p>";k?gt+='<div class="detail-actions"><button class="primary" id="navigateHere">'+n("route")+' 歩いて案内</button><button class="secondary" id="jumpHere">この場所へ移動</button></div>':gt+=E.kind==="unconfirmed"?'<div class="note-box warn">今回の体育館の開始予定9件に記載がなく、出演予定は未確認です。</div>':E.kind==="unplaced"?'<div class="note-box warn">参加予定団体一覧には記載がありますが、配置図からワークショップの位置を特定できません。推測でブースを追加していません。</div>':'<div class="note-box">3D表示が起動していないため、ここでは移動機能を利用できません。団体の予定内容と参照資料は読めます。</div>',E.id==="MOBILITY"&&(gt+='<button class="secondary" id="rideBtn">動いている車両の視点で見学</button><p class="source-text">電動トライク1台の仮表示です。車体色・外観・速度は確定していません。</p>'),gt+='<div class="section-label">'+(E.category==="P"?"参加予定内容":"資料に記載された内容")+'</div><div class="detail-content">'+t(E.detail)+"</div>",(E.category==="F"||E.category==="S")&&(gt+='<div class="note-box">価格・販売内容は資料作成時点の予定です。3Dで置かれている商品は雰囲気を伝えるための模型で、実物や販売数量を示すものではありません。</div>'),(E.id==="GYM"||E.category==="P"||E.id==="T-SCI")&&(gt+='<div class="section-label">体育館内 開始予定</div>'+r.schedule.map(St=>'<div class="schedule-row"><b>'+t(St.time)+"</b><span>"+t(St.name)+"</span></div>").join(""),gt+='<p class="source-text">利用者から受け取った開始予定です。終了時刻は未確認です。常設の壇上舞台は使用せず、床面の演出・椅子の並びは補完表現です。サイエンスクラフト部のワークショップは体育館で開催予定ですが、館内の正確な場所と時間は未確認です。</p>'),gt+='<div class="section-label">参照した資料</div><p class="source-text">'+t(X)+"</p>"+(E.locationSource?'<p class="source-text">位置：'+t(E.locationSource)+"</p>":""),E.sourceType==="web"&&(gt+='<p class="source-text">提供Excelには未掲載。公式2026ページの公開内容で補足しています。</p>'),i("sheetBody").innerHTML=gt,k&&(i("navigateHere").onclick=()=>{jt(!1),Zt(R,!0)},i("jumpHere").onclick=()=>{jt(!1),Me(R)}),i("rideBtn")&&(i("rideBtn").onclick=de)}function we(){me("表示と操作の設定","settings"),i("sheetBody").innerHTML='<div class="setting-row"><label for="quality">描画品質</label><select id="quality"><option value="high">高画質 — PC向け</option><option value="standard">標準 — 軽さと品質のバランス</option><option value="low">軽量 — 小さな端末向け</option></select><small>影の解像度と描画解像度を変更します。重い場合は「標準」「軽量」を選択。</small></div><div class="setting-row"><label for="crowd">来場者の表示量 <span id="crowdValue"></span></label><input id="crowd" type="range" min="0" max="100" step="10" value="'+c.crowd+'"><small>人数は演出です。実際の来場者数や混雑予測ではありません。</small></div><div class="setting-row"><label for="light">光の雰囲気</label><select id="light"><option value="day">昼の光</option><option value="afternoon">午後の光</option></select><small>当日の天気・太陽位置を再現したものではありません。</small></div><label class="toggle-row" for="labelsToggle">近くのブース名を表示<input type="checkbox" id="labelsToggle" '+(c.labels?"checked":"")+'></label><label class="toggle-row" for="roofToggle">体育館の屋根を表示<input type="checkbox" id="roofToggle" '+(c.showRoof?"checked":"")+'></label><div class="note-box">屋根を外すと、上空から体育館の中を確認できます。歩行時には屋根の表示に関係なく出入口から入ります。</div><button class="secondary" id="fullscreenBtn">全画面表示を切り替える</button><button class="text-btn" id="captureBtn">いまの3D画面を画像として保存 '+n("arrow")+'</button><div class="section-label">動作情報</div><p class="source-text" id="performanceInfo"></p><button id="settingsHelp" class="text-btn">操作方法・資料と再現範囲 '+n("help")+"</button>",i("quality").value=c.quality,i("quality").onchange=R=>{c.quality=R.target.value,f.setQuality(c.quality),q("描画品質を変更しました")},i("crowdValue").textContent=c.crowd+"%",i("crowd").oninput=R=>{c.crowd=Number(R.target.value),_.setCrowd(c.crowd),i("crowdValue").textContent=c.crowd+"%"},i("light").value=c.light,i("light").onchange=R=>{c.light=R.target.value,f.sun=FestaGL.V.norm(c.light==="day"?[-.38,.79,.48]:[-.75,.38,.46]),f.sunColor=c.light==="day"?[1,.94,.81]:[1,.84,.65],f.sunPower=c.light==="day"?3.7:3.4,f.exposure=c.light==="day"?1.12:1.18,f.createShadow()},i("labelsToggle").onchange=R=>c.labels=R.target.checked,i("roofToggle").onchange=R=>{c.showRoof=R.target.checked,_.meshes.roof.visible=c.showRoof,f.shadowDirty=!0},i("fullscreenBtn").onclick=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{q("この表示環境では全画面表示を利用できません。")}},i("captureBtn").onclick=()=>{try{f.render(d);let R=document.createElement("a");R.href=i("scene").toDataURL("image/png"),R.download="festa2026_3d_view.png",R.click()}catch{q("画像の保存に対応していない表示環境です。")}},i("settingsHelp").onclick=()=>F(),i("performanceInfo").textContent="WebGL 2 ／ 外部通信なし ／ "+f.stats.triangles.toLocaleString()+" triangles ／ "+f.stats.draws+" draw calls（現在の場面）"}function F(){me("操作と、資料について","help"),i("sheetBody").innerHTML='<div class="help-section"><h3>PCで歩く</h3>'+[["左下の丸いパッド","前後・左右に移動"],["W / A / S / D・矢印キー","前後・左右に移動"],["画面をドラッグ","見回す"],["画面下の「歩く」「走る」","速度を切り替える"],["Shift ＋移動","押している間だけ走る"],["E","近くのブースの内容"],["V","上空／歩行を切り替え"],["M","会場マップ"],["Esc","閉じる・移動を止める"]].map(R=>'<div class="control-row"><span>'+t(R[0])+"</span><span>"+t(R[1])+"</span></div>").join("")+"<h3>スマートフォン・タブレット</h3><p>左下の丸いパッドで移動します。中心付近では細かく、外側では速く移動できます。画面の右側をドラッグして見回します。看板の札や「内容を見る」をタップすると、団体名と内容が読めます。端末を横向きにすると広く見渡せます。</p><h3>ブースを探す・案内を使う</h3><p>「ブース」から団体名や食べもの、体験などで検索できます。「歩いて案内」は経路を表示して自動で歩きます。移動キーやジョイスティックを使うと手動操作に戻ります。「この場所へ移動」は、そのブースの前へ直接移動します。</p><p>上空表示ではドラッグで回転、ホイール／2本指で拡大・縮小。会場マップでは点を選ぶとブース情報、歩ける場所を選ぶと直接移動します。描き直した会場マップと上空表示でも歩ける場所へ直接移動できます。</p><h3>読み取り方</h3>"+r.caveats.map(R=>"<p>"+t(R)+"</p>").join("")+'<div class="note-box">校舎は外観のみ。体育館には出入口から入れます。常設壇上舞台は資料の「使用せず」に従って閉鎖。建物の高さ・細かな外装や実際の段差は未測量です。</div><h3>参照資料</h3>'+r.sources.map(R=>'<div class="source-entry"><strong>'+t(R.type)+" · "+(R.url?'<a href="'+t(R.url)+'" target="_blank" rel="noopener noreferrer">'+t(R.name)+"</a>":t(R.name))+"</strong><p>"+t(R.description)+"</p></div>").join("")+'<h3>このアプリについて</h3><p>すべての描画・検索・経路計算は、このHTMLを開いた端末内で行います。外部通信、位置情報の取得、アクセス解析、アカウント登録はありません。上の公式サイトへのリンクを開く場合だけ外部に移動します。</p><p>描画にはThree.jsを使用し、形状、人物、看板は本アプリ向けに実装。地表テクスチャはCC0画像を使用しています。写真測量や現地撮影による3Dモデルではありません。</p><p class="source-text">テクスチャ：Gravel04 / CC0Textures、Grass 01 / linolafett（CC0、scikit-image同梱）。提供資料の権利は元の権利者に帰属します。</p></div>'}function M(R){let j=R.clientWidth,E=R.clientHeight,O=Math.min((j-18)/128,(E-18)/174);return{w:j,h:E,scale:O,ox:j/2,oy:E/2-24*O,to:k=>[j/2+k[0]*O,E/2+(k[1]-24)*O],from:(k,lt)=>[(k-j/2)/O,(lt-E/2)/O+24]}}function B(R,j=!1){if(!_||!R.clientWidth)return;let E=M(R),O=Math.min(devicePixelRatio,2),k=Math.round(E.w*O),lt=Math.round(E.h*O);(R.width!==k||R.height!==lt)&&(R.width=k,R.height=lt);let X=R.getContext("2d");X.setTransform(O,0,0,O,0,0),X.clearRect(0,0,E.w,E.h),X.fillStyle="#eeeee3",X.fillRect(0,0,E.w,E.h);let gt=(bt,At,te)=>{X.beginPath(),bt.forEach((le,Te)=>{let[ae,$e]=E.to(le);Te?X.lineTo(ae,$e):X.moveTo(ae,$e)}),X.closePath(),At&&(X.fillStyle=At,X.fill()),te&&(X.strokeStyle=te,X.lineWidth=1,X.stroke())};gt(_.campus,"#d4d8cd","#b4c3b5"),gt(_.field,"#e6d8ba"),gt(_.restricted,"#ded5c1","#b5a68a"),X.beginPath(),_.track.forEach((bt,At)=>{let[te,le]=E.to(bt);At?X.lineTo(te,le):X.moveTo(te,le)}),X.closePath(),X.strokeStyle="#c09164",X.lineWidth=Math.max(1,E.scale*2),X.stroke();for(let bt of _.buildings){let At=E.to([bt.x-bt.w/2,bt.z-bt.d/2]);X.fillStyle=bt.gym?"#bfccb9":"#a6b5ad",X.fillRect(At[0],At[1],bt.w*E.scale,bt.d*E.scale),X.strokeStyle="#8fa397",X.lineWidth=.6,X.strokeRect(At[0],At[1],bt.w*E.scale,bt.d*E.scale),j&&bt.w*E.scale>40&&(X.fillStyle="#4c6858",X.font="10px sans-serif",X.textAlign="center",X.fillText(bt.gym?"体育館":"校舎",At[0]+bt.w*E.scale/2,At[1]+bt.d*E.scale/2+3))}for(let bt of _.markers){let[At,te]=E.to(bt.pos),le=j?3.7:2.1;if(X.beginPath(),X.arc(At,te,le,0,Math.PI*2),X.fillStyle=h[bt.category],X.fill(),j&&(X.strokeStyle="#fcf9ee",X.lineWidth=.7,X.stroke(),bt.id.includes("-")&&bt.kind!=="performer")){X.font="9px sans-serif",X.textAlign="left",X.fillStyle="#3e584b";let Te=At+6,ae=te+3;bt.pos[1]<-16&&bt.pos[0]>-10?(Te=At,ae=te-10,X.save(),X.translate(Te,ae),X.rotate(-Math.PI/2.8),X.fillText(bt.id,0,0),X.restore()):bt.pos[0]<1&&bt.pos[1]>-16&&bt.pos[1]<10?(X.textAlign="right",X.fillText(bt.id,At-6,te+3)):X.fillText(bt.id,Te,ae)}}c.path&&(X.beginPath(),c.path.forEach((bt,At)=>{let[te,le]=E.to(bt);At?X.lineTo(te,le):X.moveTo(te,le)}),X.strokeStyle="#af7b29",X.lineWidth=j?2:1.5,X.setLineDash([4,2]),X.stroke(),X.setLineDash([]));let[St,Rt]=E.to(c.pos);if(X.save(),X.translate(St,Rt),X.rotate(c.yaw),X.fillStyle="#fff",X.beginPath(),X.arc(0,0,j?7:5,0,Math.PI*2),X.fill(),X.fillStyle="#174f58",X.beginPath(),X.moveTo(0,j?-10:-7),X.lineTo(j?5:4,j?6:4),X.lineTo(0,j?3:1),X.lineTo(j?-5:-4,j?6:4),X.closePath(),X.fill(),X.restore(),X.fillStyle="#526b5d",X.textAlign="right",X.font=(j?"10":"8")+"px sans-serif",j){let[bt,At]=E.to(a.GATE_MAIN.pos);X.textAlign="right",X.fillText("正門",bt-9,At-9);let[te,le]=E.to(a.GATE_WEST.pos);X.textAlign="left",X.fillText("西ヶ谷門",te-10,le+15)}}let V=!1;function Y(){P&&(_t(),Se(),y=document.activeElement,i("mapModal").classList.remove("hidden"),V=!1,i("bigmap").classList.remove("hidden"),i("originalWrap").classList.add("hidden"),i("mapToggle").textContent="会場マップ（描き直し）",i("mapExplain").textContent="ブースの点を押すと内容を表示。歩ける場所を押すと、その場所へ直接移動します。",requestAnimationFrame(()=>B(i("bigmap"),!0)),i("mapClose").focus())}function vt(){i("mapModal").classList.add("hidden")}function wt(R){return!R||!_.isWalkable(R[0],R[1],.32)?(q("建物・柵の中は選べません。歩ける場所を選択してください。"),!1):(jt(!1),zt(),c.mode==="welcome"&&Q(),c.mode="walk",c.returnPos=null,c.pitch=0,ut(R),vt(),it(),q("選んだ場所へ移動しました"),!0)}function at(R){let j=i("bigmap").getBoundingClientRect(),E=R.clientX-j.left,O=R.clientY-j.top,k=M(i("bigmap")),lt=null,X=16;for(let St of _.markers){let Rt=k.to(St.pos),bt=Math.hypot(Rt[0]-E,Rt[1]-O);bt<X&&(X=bt,lt=St)}if(lt){vt(),xe(lt.id);return}let gt=k.from(E,O);if(!_.isWalkable(...gt,.32)){q("建物・柵の中は選べません。歩ける場所を選択してください。");return}wt(gt)}function ct(R){let j=i("originalPlan"),E=j.getBoundingClientRect();if(!j.naturalWidth||!E.width||!E.height)return;let O=(R.clientX-E.left)/E.width*660-25,k=(R.clientY-E.top)/E.height*870-35,lt=_.p(O,k),X=null,gt=16;for(let St of _.markers){let Rt=E.left+(St.pos[0]/.22+320+25)/660*E.width,bt=E.top+(St.pos[1]/.22+290+35)/870*E.height,At=Math.hypot(Rt-R.clientX,bt-R.clientY);At<gt&&(gt=At,X=St)}if(X){vt(),xe(X.id);return}wt(lt)}function Et(R,j){let E=new Map,O=!1;R.addEventListener("pointerdown",k=>{E.size?O=!0:O=!1,E.set(k.pointerId,[k.clientX,k.clientY])}),R.addEventListener("pointermove",k=>{let lt=E.get(k.pointerId);lt&&Math.hypot(k.clientX-lt[0],k.clientY-lt[1])>8&&(O=!0)}),R.addEventListener("pointerup",k=>E.delete(k.pointerId)),R.addEventListener("pointercancel",k=>{E.delete(k.pointerId),O=!0}),R.addEventListener("click",k=>{O||j(k)})}function Gt(){for(let R of _.markers){let j=document.createElement("button");j.className="world-label hidden",j.style.setProperty("--accent",h[R.category]),j.setAttribute("aria-label",R.name+" の内容を見る"),j.innerHTML="<b>"+t(R.id.includes("-")?R.id:R.id==="WC"?"WC":"")+"</b><span>"+t(R.short)+"</span>",j.onclick=E=>{E.stopPropagation(),xe(R.id)},i("labels").appendChild(j),J.set(R.id,j)}}function Ct(){if(!P)return;let R=c.mode==="overview",j=c.labels&&c.mode!=="welcome"&&!c.sheet&&i("mapModal").classList.contains("hidden"),E=[];for(let k of _.markers){let lt=J.get(k.id);if(lt.classList.add("hidden"),!j)continue;let X=Math.hypot(f.camera.eye[0]-k.marker[0],f.camera.eye[2]-k.marker[2]);if(!R&&X>24)continue;let gt=f.project(k.marker);if(!(!gt||gt.z>1||gt.x<35||gt.x>innerWidth-35||gt.y<112||gt.y>innerHeight-90)){if(!R){let St=!1,Rt=f.camera.eye;for(let bt of _.buildings){if(bt.gym){let At=Rt[0]>bt.x-bt.w/2&&Rt[0]<bt.x+bt.w/2&&Rt[2]>bt.z-bt.d/2&&Rt[2]<bt.z+bt.d/2,te=k.marker[0]>bt.x-bt.w/2&&k.marker[0]<bt.x+bt.w/2&&k.marker[2]>bt.z-bt.d/2&&k.marker[2]<bt.z+bt.d/2;At!==te&&X>6&&(St=!0);continue}for(let At=.1;At<.96;At+=.09){let te=Rt[0]+(k.marker[0]-Rt[0])*At,le=Rt[2]+(k.marker[2]-Rt[2])*At,Te=Rt[1]+(k.marker[1]-Rt[1])*At;if(Math.abs(te-bt.x)<bt.w/2&&Math.abs(le-bt.z)<bt.d/2&&Te<bt.h){St=!0;break}}if(St)break}if(St)continue}E.push({r:k,el:lt,pr:gt,d:X})}}E.sort((k,lt)=>k.d-lt.d);let O=[];for(let k of E){if(O.length>=(R?20:m?4:7))break;let lt=Math.min(m?160:220,45+k.r.short.length*10);O.some(X=>Math.abs(X.pr.x-k.pr.x)<(X.width+lt)/2+7&&Math.abs(X.pr.y-k.pr.y)<34)||(k.width=lt,k.el.style.left=k.pr.x+"px",k.el.style.top=k.pr.y+"px",k.el.classList.remove("hidden"),O.push(k))}}function Pt(){if(!P)return;let R=null,j=4.8;if(c.mode==="walk")for(let X of _.markers){if(!X.approach)continue;let gt=Math.hypot(c.pos[0]-X.approach[0],c.pos[1]-X.approach[1]);gt<j&&(j=gt,R=X)}c.nearest=R?.id||null;let E=R&&!c.sheet&&c.mode==="walk"&&!c.tour;i("nearby").classList.toggle("hidden",!E),E&&(i("nearCategory").textContent=R.id.includes("-")?R.id:R.id==="WC"?"WC":"案内",i("nearCategory").style.background=h[R.category],i("nearCaption").textContent=u[R.category],i("nearName").textContent=R.short);let[O,k]=c.pos,lt=O>33&&O<57.5&&k>2.6&&k<47?"体育館":k>48?"正門・キッチンカーエリア":k<-25?"モビリティー・であいの広場":O<-13?"アウトドアーエリア":"校庭・にぎわいゾーン";i("locationText").textContent=c.mode==="overview"?"会場全体":c.mode==="ride"?"モビリティー試乗":lt}let Ht=new Map,Qt=0;i("scene").addEventListener("pointerdown",R=>{if(!(!P||c.sheet||c.mode==="welcome")){if(Ht.set(R.pointerId,[R.clientX,R.clientY]),Ht.size===2){g.multi=!0;let j=[...Ht.values()];Qt=Math.hypot(j[0][0]-j[1][0],j[0][1]-j[1][1])}g.active=!0,g.pid=R.pointerId,g.x=R.clientX,g.y=R.clientY,g.moved=0,g.multi=Ht.size>1,i("scene").setPointerCapture(R.pointerId)}}),i("scene").addEventListener("pointermove",R=>{if(!Ht.has(R.pointerId))return;if(Ht.set(R.pointerId,[R.clientX,R.clientY]),Ht.size===2&&c.mode==="overview"){let O=[...Ht.values()],k=Math.hypot(O[0][0]-O[1][0],O[0][1]-O[1][1]);c.orbitDist=FestaGL.clamp(c.orbitDist*Qt/Math.max(1,k),25,190),Qt=k;return}if(!g.active||g.pid!==R.pointerId)return;let j=R.clientX-g.x,E=R.clientY-g.y;g.x=R.clientX,g.y=R.clientY,g.moved+=Math.abs(j)+Math.abs(E),c.mode==="overview"?(c.orbitYaw-=j*.004,c.orbitPitch=FestaGL.clamp(c.orbitPitch+E*.003,.18,1.48)):(c.mode==="ride"?c.rideYaw+=j*.004:c.yaw-=j*.004,c.pitch=FestaGL.clamp(c.pitch+E*.0035,-1.15,1.15))});function re(R){let j=R.type==="pointerup"&&c.mode==="overview"&&g.pid===R.pointerId&&Ht.size===1&&!g.multi&&g.moved<=8;if(Ht.delete(R.pointerId),g.pid===R.pointerId&&(g.active=!1),j){let E=i("scene").getBoundingClientRect(),O=f.groundPoint(R.clientX-E.left,R.clientY-E.top);O&&wt([O[0],O[2]])}}i("scene").addEventListener("pointerup",re),i("scene").addEventListener("pointercancel",re),i("scene").addEventListener("contextmenu",R=>R.preventDefault()),i("scene").addEventListener("wheel",R=>{c.mode==="overview"&&(R.preventDefault(),c.orbitDist=FestaGL.clamp(c.orbitDist*Math.exp(R.deltaY*.001),25,190))},{passive:!1}),i("joystick").addEventListener("pointerdown",R=>{R.preventDefault(),D.pid=R.pointerId,D.active=!0,i("joystick").setPointerCapture(R.pointerId),Z(R),c.auto&&(c.auto=!1,jt(!1),it())}),i("joystick").addEventListener("pointermove",R=>{D.pid===R.pointerId&&Z(R)});function Z(R){let j=i("joystick").getBoundingClientRect(),E=R.clientX-(j.left+j.width/2),O=R.clientY-(j.top+j.height/2),k=Math.hypot(E,O),lt=37;k>lt&&(E*=lt/k,O*=lt/k),D.x=E/lt,D.y=-O/lt,i("joyKnob").style.transform="translate("+E+"px,"+O+"px)"}function It(){D.x=D.y=0,D.active=!1,D.pid=null,i("joyKnob").style.transform=""}i("joystick").addEventListener("pointerup",It),i("joystick").addEventListener("pointercancel",It);function _t(){for(let R in w)w[R]=!1;It()}window.addEventListener("blur",_t),document.addEventListener("visibilitychange",()=>{_t(),T=0}),document.addEventListener("keydown",R=>{if(!P)return;let j=/INPUT|SELECT|TEXTAREA/.test(document.activeElement?.tagName);if(R.code==="Escape"){R.preventDefault(),i("mapModal").classList.contains("hidden")?c.sheet?Se():ne():vt();return}if(R.code==="Tab"&&(c.sheet||!i("mapModal").classList.contains("hidden"))){let E=c.sheet?i("sheet"):i("mapModal"),O=[...E.querySelectorAll("button,a,input,select")].filter(k=>!k.closest(".hidden")&&!k.disabled);if(O.length){let k=O[0],lt=O[O.length-1];R.shiftKey&&document.activeElement===k?(lt.focus(),R.preventDefault()):!R.shiftKey&&document.activeElement===lt&&(k.focus(),R.preventDefault())}return}j||c.sheet||!i("mapModal").classList.contains("hidden")||(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight"].includes(R.code)&&(R.preventDefault(),w[R.code]=!0,(c.auto||c.tour)&&(c.auto=!1,jt(!1),it())),!R.repeat&&(R.code==="KeyE"&&c.nearest&&xe(c.nearest),R.code==="KeyV"&&ft(),R.code==="KeyM"&&Y(),R.code==="KeyT"&&se(),R.code==="KeyF"&&Pe()))}),document.addEventListener("keyup",R=>w[R.code]=!1);function Lt(R){if(!P||c.paused)return;if(_.update(d,R),c.mode==="walk"&&!c.sheet&&i("mapModal").classList.contains("hidden")){let O=(w.KeyW||w.ArrowUp?1:0)-(w.KeyS||w.ArrowDown?1:0)+D.y,k=(w.KeyD||w.ArrowRight?1:0)-(w.KeyA||w.ArrowLeft?1:0)+D.x,lt=Math.hypot(O,k);if(lt>.03){lt>1&&(O/=lt,k/=lt);let gt=w.KeyW||w.ArrowUp||w.KeyS||w.ArrowDown||w.KeyD||w.ArrowRight||w.KeyA||w.ArrowLeft?c.runMode||w.ShiftLeft||w.ShiftRight?4.6:3:2.3+2.3*Math.min(lt,1);xt((Math.sin(c.yaw)*O+Math.cos(c.yaw)*k)*gt*R,(-Math.cos(c.yaw)*O+Math.sin(c.yaw)*k)*gt*R)}else Mt(R);c.tour&&c.tourWaiting>0&&!x&&(c.tourWaiting-=R,c.tourWaiting<=0&&ue())}let j,E;if(c.mode==="overview"){let O=c.orbitTarget,k=c.orbitDist,lt=Math.cos(c.orbitPitch);j=[O[0]+Math.sin(c.orbitYaw)*k*lt,Math.sin(c.orbitPitch)*k,O[2]+Math.cos(c.orbitYaw)*k*lt],E=[...O]}else if(c.mode==="welcome"){let O=x?0:Math.sin(d*.085)*.8;j=[2.2+O,2.2,11.5],E=[15+O,2,-13]}else if(c.mode==="ride"){let O=_.getCar();j=[O.x+Math.sin(O.yaw)*1.28,1.68,O.z+Math.cos(O.yaw)*1.28];let k=O.yaw+c.rideYaw;E=[j[0]+Math.sin(k)*Math.cos(c.pitch),j[1]+Math.sin(c.pitch),j[2]+Math.cos(k)*Math.cos(c.pitch)],c.pos=[O.x,O.z]}else{let k=(Math.abs(D.x)+Math.abs(D.y)||w.KeyW||w.KeyA||w.KeyS||w.KeyD||c.auto)&&!x?Math.sin(c.distanceWalked*8)*.017:0;j=[c.pos[0],1.68+_.walkHeight(c.pos[0],c.pos[1])+k,c.pos[1]],E=[j[0]+Math.sin(c.yaw)*Math.cos(c.pitch),j[1]+Math.sin(c.pitch),j[2]-Math.cos(c.yaw)*Math.cos(c.pitch)]}f.camera.near=c.mode==="overview"?1:.09,f.camera.eye=j,f.camera.target=E}function Dt(R){if(!P)return;if(c.testFreeze){requestAnimationFrame(Dt);return}let j=T?Math.min(.12,(R-T)/1e3):.016;T=R,document.hidden||(c.paused||(d+=j),Lt(j),f.render(d),b+=j,b>.13&&(b=0,Ct(),Pt(),B(i("minimap")),!i("mapModal").classList.contains("hidden")&&!V&&B(i("bigmap"),!0))),requestAnimationFrame(Dt)}i("homeBtn").onclick=mt,i("startBtn").onclick=()=>yt("field"),i("startMain").onclick=()=>yt("GATE_MAIN"),i("startWest").onclick=()=>yt("GATE_WEST"),i("welcomeOverview").onclick=ft,i("searchBtn").onclick=Pe,i("overviewBtn").onclick=ft,i("tourBtn").onclick=se,i("settingsBtn").onclick=we,i("helpBtn").onclick=F,i("sheetClose").onclick=Se,i("sheetScrim").onclick=Se,i("sheetBack").onclick=Pe,i("nearOpen").onclick=()=>c.nearest&&xe(c.nearest),i("mapBtn").onclick=Y,i("mapClose").onclick=vt,Et(i("bigmap"),at),Et(i("originalPlan"),ct),i("speedToggle").onclick=()=>{c.runMode=!c.runMode,it()},i("modeExit").onclick=ne,i("modeAction").onclick=()=>{c.mode==="overview"||c.mode==="ride"?ne():c.path?(c.auto=!c.auto,it()):c.tour&&jt()},i("tourNext").onclick=ue,i("tourStop").onclick=()=>jt(),i("mapToggle").onclick=()=>{V=!V,i("bigmap").classList.toggle("hidden",V),i("originalWrap").classList.toggle("hidden",!V),i("mapToggle").textContent=V?"案内マップへ戻る":"会場マップ（描き直し）",i("mapExplain").textContent=V?"3D会場と同じ配置から描き直したマップです。縦にスクロールし、歩ける場所を押すと直接移動します。":"ブースの点を押すと内容を表示。歩ける場所を押すと、その場所へ直接移動します。",V||B(i("bigmap"),!0)},i("mapModal").onclick=R=>{R.target===i("mapModal")&&vt()},i("originalPlan").src="./assets/venue-map.svg",window.addEventListener("resize",()=>{f&&f.resize(),_&&(B(i("minimap")),i("mapModal").classList.contains("hidden")||B(i("bigmap"),!0))});try{await W(),f=new FestaGL.Renderer(i("scene"),c.quality),_=await buildFestaWorld(f,nt),await W(),S=new FestaNavigation(_),Gt(),nt(1,"会場の準備ができました"),P=!0,window.__FESTA_TEST__={ready:!0,renderer:f,world:_,nav:S,state:c,byId:a,start:yt,teleport:Me,routeTo:Zt,showDetail:xe,showSearch:Pe,showSettings:we,showHelp:F,showMap:Y,toOverview:ft,ride:de,exitMode:ne,tick:Lt,move:xt,stops:Ot,beginTour:se,nextTour:ue,stopTour:jt,stopRoute:zt,closeSheet:Se,get animTime(){return d},render:()=>{Lt(.016),f.render(d),Ct(),Pt(),B(i("minimap"))}},Lt(.016),f.render(0),i("loading").classList.add("hidden"),i("hud").classList.remove("hidden"),i("welcome").classList.remove("hidden"),requestAnimationFrame(Dt),i("scene").addEventListener("webglcontextlost",R=>{R.preventDefault(),c.paused=!0,q("描画が停止しました。ページを再読み込みすると再開できます。",3e4)})}catch(R){console.error(R),i("loading").innerHTML='<div class="loading-inner"><span class="eyebrow">3D表示を開始できませんでした</span><h1 style="font-size:26px">ブース情報は読めます。</h1><p>'+t(R.message)+'</p><p>WebGL 2対応のChrome・Edge・Safariで、このHTMLをブラウザとして開くと3D表示を利用できます。端末のグラフィックアクセラレーション設定も影響します。</p><button id="fallbackList" class="primary">参加団体一覧を読む</button><button id="fallbackPlan" class="secondary" style="margin-top:10px">配置図を見る</button></div>',i("fallbackList").onclick=()=>{Pe(),i("sheet").style.zIndex=110,i("sheetScrim").style.zIndex=109},i("fallbackPlan").onclick=()=>{let j=window.open();if(j){j.document.title="会場配置図";let E=j.document.createElement("img");E.src="./assets/venue-map.svg",E.style.maxWidth="100%",j.document.body.appendChild(E)}},window.__FESTA_TEST__={ready:!1,error:R.message}}})();})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
