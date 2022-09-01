// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterHannPulse=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,e=Object.prototype,o=e.toString,i=e.__defineGetter__,u=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||a.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,t,n.get),p&&u&&u.call(r,t,n.set),r};var c=t;function l(r,t,n){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y=Object.prototype.hasOwnProperty;function p(r,t){return null!=r&&y.call(r,t)}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&p(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function s(){var r,t=arguments,n=t[0],e="https://stdlib.io/e/"+n+"?";for(r=1;r<t.length;r++)e+="&arg[]="+encodeURIComponent(t[r]);return e}function d(r){return r!=r}var b=Number.POSITIVE_INFINITY,w=Number,m=w.NEGATIVE_INFINITY;function j(r){return r===b||r===m}function h(r){return Math.abs(r)}var A="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function g(){return A&&"symbol"==typeof Symbol.toStringTag}var _=Object.prototype.toString;var O="function"==typeof Symbol?Symbol.toStringTag:"";var E=g()?function(r){var t,n,e;if(null==r)return _.call(r);n=r[O],t=p(r,O);try{r[O]=void 0}catch(t){return _.call(r)}return e=_.call(r),t?r[O]=n:delete r[O],e}:function(r){return _.call(r)},U="function"==typeof Uint32Array;var N="function"==typeof Uint32Array?Uint32Array:null;var S,P="function"==typeof Uint32Array?Uint32Array:void 0;S=function(){var r,t,n;if("function"!=typeof N)return!1;try{t=new N(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(U&&n instanceof Uint32Array||"[object Uint32Array]"===E(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?P:function(){throw new Error("not implemented")};var T=S,I="function"==typeof Float64Array;var F="function"==typeof Float64Array?Float64Array:null;var R,H="function"==typeof Float64Array?Float64Array:void 0;R=function(){var r,t,n;if("function"!=typeof F)return!1;try{t=new F([1,3.14,-3.14,NaN]),n=t,r=(I&&n instanceof Float64Array||"[object Float64Array]"===E(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?H:function(){throw new Error("not implemented")};var G=R,Z="function"==typeof Uint8Array;var B="function"==typeof Uint8Array?Uint8Array:null;var L,x="function"==typeof Uint8Array?Uint8Array:void 0;L=function(){var r,t,n;if("function"!=typeof B)return!1;try{t=new B(t=[1,3.14,-3.14,256,257]),n=t,r=(Z&&n instanceof Uint8Array||"[object Uint8Array]"===E(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?x:function(){throw new Error("not implemented")};var V=L,M="function"==typeof Uint16Array;var k="function"==typeof Uint16Array?Uint16Array:null;var C,W="function"==typeof Uint16Array?Uint16Array:void 0;C=function(){var r,t,n;if("function"!=typeof k)return!1;try{t=new k(t=[1,3.14,-3.14,65536,65537]),n=t,r=(M&&n instanceof Uint16Array||"[object Uint16Array]"===E(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?W:function(){throw new Error("not implemented")};var Y,Q={uint16:C,uint8:V};(Y=new Q.uint16(1))[0]=4660;var X=52===new Q.uint8(Y.buffer)[0],q=!0===X?1:0,z=new G(1),D=new T(z.buffer);function J(r){return z[0]=r,D[q]}function K(r,t){var n,e,o,i;return o=(i=r*r)*i,e=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(o=1-(n=.5*i))+(1-o-n+(i*e-r*t))}var $=-.16666666666666632;function rr(r,t){var n,e,o;return n=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===t?r+e*($+o*n):r-(o*(.5*t-e*n)-t-e*$)}var tr,nr,er=!0===X?0:1,or=new G(1),ir=new T(or.buffer);!0===X?(tr=1,nr=0):(tr=0,nr=1);var ur={HIGH:tr,LOW:nr},fr=new G(1),ar=new T(fr.buffer),cr=ur.HIGH,lr=ur.LOW;function yr(r,t){return ar[cr]=r,ar[lr]=t,fr[0]}var pr,vr,sr=Math.floor;!0===X?(pr=1,vr=0):(pr=0,vr=1);var dr={HIGH:pr,LOW:vr},br=new G(1),wr=new T(br.buffer),mr=dr.HIGH,jr=dr.LOW;function hr(r,t){return br[0]=t,r[0]=wr[mr],r[1]=wr[jr],r}function Ar(r,t){return 1===arguments.length?hr([0,0],r):hr(r,t)}var gr=[0,0];function _r(r,t){return d(t)||j(t)?(r[0]=t,r[1]=0,r):0!==t&&h(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)}var Or=[0,0],Er=[0,0];function Ur(r,t){var n,e,o,i,u;return 0===t||0===r||d(r)||j(r)?r:(function(r,t){1===arguments.length?_r([0,0],r):_r(r,t)}(Or,r),t+=Or[1],t+=function(r){var t=J(r);return(t=(2146435072&t)>>>20)-1023|0}(r=Or[0]),t<-1074?(o=r,Ar(gr,0),i=gr[0],i&=2147483647,u=J(o),yr(i|=u&=2147483648,gr[1])):t>1023?r<0?m:b:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Ar(Er,r),n=Er[0],n&=2148532223,e*yr(n|=t+1023<<20,Er[1])))}function Nr(r){return function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n}(0,r)}var Sr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Pr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Tr=16777216,Ir=5.960464477539063e-8,Fr=Nr(20),Rr=Nr(20),Hr=Nr(20),Gr=Nr(20);function Zr(r,t,n,e,o,i,u,f,a){var c,l,y,p,v,s,d,b,w;for(p=i,w=e[n],b=n,v=0;b>0;v++)l=Ir*w|0,Gr[v]=w-Tr*l|0,w=e[b-1]+l,b-=1;if(w=Ur(w,o),w-=8*sr(.125*w),w-=d=0|w,y=0,o>0?(d+=v=Gr[n-1]>>24-o,Gr[n-1]-=v<<24-o,y=Gr[n-1]>>23-o):0===o?y=Gr[n-1]>>23:w>=.5&&(y=2),y>0){for(d+=1,c=0,v=0;v<n;v++)b=Gr[v],0===c?0!==b&&(c=1,Gr[v]=16777216-b):Gr[v]=16777215-b;if(o>0)switch(o){case 1:Gr[n-1]&=8388607;break;case 2:Gr[n-1]&=4194303}2===y&&(w=1-w,0!==c&&(w-=Ur(1,o)))}if(0===w){for(b=0,v=n-1;v>=i;v--)b|=Gr[v];if(0===b){for(s=1;0===Gr[i-s];s++);for(v=n+1;v<=n+s;v++){for(a[f+v]=Sr[u+v],l=0,b=0;b<=f;b++)l+=r[b]*a[f+(v-b)];e[v]=l}return Zr(r,t,n+=s,e,o,i,u,f,a)}}if(0===w)for(n-=1,o-=24;0===Gr[n];)n-=1,o-=24;else(w=Ur(w,-o))>=Tr?(l=Ir*w|0,Gr[n]=w-Tr*l|0,o+=24,Gr[n+=1]=l):Gr[n]=0|w;for(l=Ur(1,o),v=n;v>=0;v--)e[v]=l*Gr[v],l*=Ir;for(v=n;v>=0;v--){for(l=0,s=0;s<=p&&s<=n-v;s++)l+=Pr[s]*e[v+s];Hr[n-v]=l}for(l=0,v=n;v>=0;v--)l+=Hr[v];for(t[0]=0===y?l:-l,l=Hr[0]-l,v=1;v<=n;v++)l+=Hr[v];return t[1]=0===y?l:-l,7&d}function Br(r,t,n,e){var o,i,u,f,a,c,l;for(4,(i=(n-3)/24|0)<0&&(i=0),f=n-24*(i+1),c=i-(u=e-1),l=u+4,a=0;a<=l;a++)Fr[a]=c<0?0:Sr[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=u;c++)o+=r[c]*Fr[u+(a-c)];Rr[a]=o}return 4,Zr(r,t,4,Rr,f,4,i,u,Fr)}var Lr=Math.round;function xr(r,t,n){var e,o,i,u,f;return i=r-1.5707963267341256*(e=Lr(.6366197723675814*r)),u=6077100506506192e-26*e,f=t>>20|0,n[0]=i-u,f-(J(n[0])>>20&2047)>16&&(u=20222662487959506e-37*e-((o=i)-(i=o-(u=6077100506303966e-26*e))-u),n[0]=i-u,f-(J(n[0])>>20&2047)>49&&(u=84784276603689e-45*e-((o=i)-(i=o-(u=20222662487111665e-37*e))-u),n[0]=i-u)),n[1]=i-n[0]-u,e}var Vr=1.5707963267341256,Mr=6077100506506192e-26,kr=2*Mr,Cr=3*Mr,Wr=4*Mr,Yr=[0,0,0],Qr=[0,0];function Xr(r,t){var n,e,o,i,u,f,a;if((o=2147483647&J(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?xr(r,o,t):o<=1073928572?r>0?(a=r-Vr,t[0]=a-Mr,t[1]=a-t[0]-Mr,1):(a=r+Vr,t[0]=a+Mr,t[1]=a-t[0]+Mr,-1):r>0?(a=r-2*Vr,t[0]=a-kr,t[1]=a-t[0]-kr,2):(a=r+2*Vr,t[0]=a+kr,t[1]=a-t[0]+kr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?xr(r,o,t):r>0?(a=r-3*Vr,t[0]=a-Cr,t[1]=a-t[0]-Cr,3):(a=r+3*Vr,t[0]=a+Cr,t[1]=a-t[0]+Cr,-3):1075388923===o?xr(r,o,t):r>0?(a=r-4*Vr,t[0]=a-Wr,t[1]=a-t[0]-Wr,4):(a=r+4*Vr,t[0]=a+Wr,t[1]=a-t[0]+Wr,-4);if(o<1094263291)return xr(r,o,t);if(o>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(n=function(r){return or[0]=r,ir[er]}(r),a=yr(o-((e=(o>>20)-1046)<<20|0),n),u=0;u<2;u++)Yr[u]=0|a,a=16777216*(a-Yr[u]);for(Yr[2]=a,i=3;0===Yr[i-1];)i-=1;return f=Br(Yr,Qr,e,i),r<0?(t[0]=-Qr[0],t[1]=-Qr[1],-f):(t[0]=Qr[0],t[1]=Qr[1],f)}var qr=[0,0];function zr(r){var t;if(t=J(r),(t&=2147483647)<=1072243195)return t<1044381696?1:K(r,0);if(t>=2146435072)return NaN;switch(3&Xr(r,qr)){case 0:return K(qr[0],qr[1]);case 1:return-rr(qr[0],qr[1]);case 2:return-K(qr[0],qr[1]);default:return rr(qr[0],qr[1])}}var Dr=[0,0];var Jr=3.141592653589793;function Kr(r){var t,n,e,o;return d(r)||j(r)?NaN:(t=h(r))>9007199254740992?1:.5===(e=t-(n=sr(t)))?0:(o=e<.25?zr(Jr*e):e<.75?function(r){var t;if(t=J(r),(t&=2147483647)<=1072243195)return t<1045430272?r:rr(r,0);if(t>=2146435072)return NaN;switch(3&Xr(r,Dr)){case 0:return rr(Dr[0],Dr[1]);case 1:return K(Dr[0],Dr[1]);case 2:return-rr(Dr[0],Dr[1]);default:return-K(Dr[0],Dr[1])}}(Jr*(e=.5-e)):-zr(Jr*(e=1-e)),n%2==1?-o:o)}var $r=Array.isArray?Array.isArray:function(r){return"[object Array]"===E(r)};var rt=/./;function tt(r){return"boolean"==typeof r}var nt=Boolean.prototype.toString;var et=g();function ot(r){return"object"==typeof r&&(r instanceof Boolean||(et?function(r){try{return nt.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===E(r)))}function it(r){return tt(r)||ot(r)}function ut(){return new Function("return this;")()}l(it,"isPrimitive",tt),l(it,"isObject",ot);var ft="object"==typeof self?self:null,at="object"==typeof window?window:null,ct="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},lt="object"==typeof ct?ct:null;var yt=function(r){if(arguments.length){if(!tt(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return ut()}if(ft)return ft;if(at)return at;if(lt)return lt;throw new Error("unexpected error. Unable to resolve global object.")}(),pt=yt.document&&yt.document.childNodes,vt=Int8Array;function st(){return/^\s*function\s*([^(]*)/i}var dt=/^\s*function\s*([^(]*)/i;function bt(r){return null!==r&&"object"==typeof r}function wt(r){var t,n,e,o;if(("Object"===(n=E(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=dt.exec(e.toString()))return t[1]}return bt(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(st,"REGEXP",dt),l(bt,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!$r(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(bt));var mt="function"==typeof rt||"object"==typeof vt||"function"==typeof pt?function(r){return wt(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?wt(r).toLowerCase():t};function jt(r){return"function"===mt(r)}var ht,At=Object.getPrototypeOf;ht=jt(Object.getPrototypeOf)?At:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===E(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var gt=ht;var _t=Object.prototype;function Ot(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!$r(r)}(r)&&(t=function(r){return null==r?null:(r=Object(r),gt(r))}(r),!t||!p(r,"constructor")&&p(t,"constructor")&&jt(t.constructor)&&"[object Function]"===E(t.constructor)&&p(t,"isPrototypeOf")&&jt(t.isPrototypeOf)&&(t===_t||function(r){var t;for(t in r)if(!p(r,t))return!1;return!0}(r)))}function Et(r){return"number"==typeof r}var Ut=w.prototype.toString;var Nt=g();function St(r){return"object"==typeof r&&(r instanceof w||(Nt?function(r){try{return Ut.call(r),!0}catch(r){return!1}}(r):"[object Number]"===E(r)))}function Pt(r){return Et(r)||St(r)}function Tt(r){return Et(r)&&r>0}function It(r){return St(r)&&r.valueOf()>0}function Ft(r){return Tt(r)||It(r)}function Rt(r){return r<b&&r>m&&sr(t=r)===t;var t}function Ht(r){return Et(r)&&Rt(r)}function Gt(r){return St(r)&&Rt(r.valueOf())}function Zt(r){return Ht(r)||Gt(r)}function Bt(r){return Ht(r)&&r>0}function Lt(r){return Gt(r)&&r.valueOf()>0}function xt(r){return Bt(r)||Lt(r)}function Vt(r){return Ht(r)&&r>=0}function Mt(r){return Gt(r)&&r.valueOf()>=0}function kt(r){return Vt(r)||Mt(r)}function Ct(r,t){return Ot(t)?p(t,"duration")&&(r.duration=t.duration,!Bt(t.duration))?new TypeError(s("0RZ3b","duration",t.duration)):p(t,"period")&&(r.period=t.period,!Bt(t.period))?new TypeError(s("0RZ3b","period",t.period)):p(t,"amplitude")&&(r.amplitude=t.amplitude,!Tt(t.amplitude))?new TypeError(s("0RZ4Q","amplitude",t.amplitude)):p(t,"offset")&&(r.offset=t.offset,!Ht(t.offset))?new TypeError(s("0RZ8e","offset",t.offset)):p(t,"iter")&&(r.iter=t.iter,!Vt(t.iter))?new TypeError(s("0RZ35","iter",t.iter)):null:new TypeError(s("0RZ2h",t))}return l(Pt,"isPrimitive",Et),l(Pt,"isObject",St),l(Ft,"isPrimitive",Tt),l(Ft,"isObject",It),l(Zt,"isPrimitive",Ht),l(Zt,"isObject",Gt),l(xt,"isPrimitive",Bt),l(xt,"isObject",Lt),l(kt,"isPrimitive",Vt),l(kt,"isObject",Mt),function r(t){var n,e,o,i,u,f,a,c;if(n={duration:-1,period:100,amplitude:1,offset:0,iter:1e308},arguments.length&&(i=Ct(n,t)))throw i;if(-1===n.duration&&(n.duration=n.period),n.duration>n.period)throw new RangeError(s("0RZ8c","duration",n.duration));if(n.duration<=2)throw new RangeError(s("0RZ8d","duration",n.duration));return(f=(n.period-n.offset)%n.period)<0&&(f+=n.period),u=.5*n.amplitude,a=2/(n.duration-1),f-=1,c=0,l(e={},"next",y),l(e,"return",p),v&&l(e,v,d),e;function y(){return c+=1,o||c>n.iter?{done:!0}:{value:(f=(f+1)%n.period)<n.duration?u*(1-Kr(a*f)):0,done:!1}}function p(r){return o=!0,arguments.length?{value:r,done:!0}:{done:!0}}function d(){return r(n)}}}));
//# sourceMappingURL=index.js.map
