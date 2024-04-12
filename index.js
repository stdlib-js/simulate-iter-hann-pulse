// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterHannPulse=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var f=Math.abs,c=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,d=/e-(\d)$/,y=/^(\d+)$/,v=/^(\d+)e/,g=/\.0$/,b=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,h,"$1e"),n=s.call(n,b,"e"),n=s.call(n,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,d,"e-0$1"),r.alternate&&(n=s.call(n,y,"$1."),n=s.call(n,v,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):c.call(n)}function m(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}var j=String.fromCharCode,A=isNaN,E=Array.isArray;function O(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function _(r){var t,e,n,i,a,f,c,l,s,p,d,y,v;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)f+=n;else{if(t=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(i=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,A(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!A(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,d=n.width,y=n.padRight,v=void 0,(v=d-p.length)<0?p:p=y?p+m(v):m(v)+p)),f+=n.arg||"",c+=1}return f}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function U(r){var t,e,n,o;for(e=[],o=0,n=T.exec(r);n;)(t=r.slice(o,T.lastIndex-n[0].length)).length&&e.push(t),e.push(S(n)),o=T.lastIndex,n=T.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function I(r){var t,e;if("string"!=typeof r)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[U(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return _.apply(null,t)}var N,x=Object.prototype,F=x.toString,P=x.__defineGetter__,k=x.__defineSetter__,L=x.__lookupGetter__,V=x.__lookupSetter__;N=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===F.call(e))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(L.call(r,t)||V.call(r,t)?(n=r.__proto__,r.__proto__=x,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&P&&P.call(r,t,e.get),a&&k&&k.call(r,t,e.set),r};var C=N;function G(r,t,e){C(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var R=Object.prototype.hasOwnProperty;function $(r,t){return null!=r&&R.call(r,t)}var H="function"==typeof Symbol?Symbol:void 0;var W="function"==typeof H&&"symbol"==typeof H("foo")&&$(H,"iterator")&&"symbol"==typeof H.iterator?Symbol.iterator:null;function B(){var r,t=arguments,e="https://stdlib.io/e/"+t[0]+"?";for(r=1;r<t.length;r++)e+="&arg[]="+encodeURIComponent(t[r]);return e}function M(r){return r!=r}var Z=Number.POSITIVE_INFINITY,X=Number,Y=X.NEGATIVE_INFINITY;function z(r){return r===Z||r===Y}function D(r){return Math.abs(r)}var K="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function q(){return K&&"symbol"==typeof Symbol.toStringTag}var J=Object.prototype.toString;var Q="function"==typeof H?H.toStringTag:"";var rr=q()?function(r){var t,e,n;if(null==r)return J.call(r);e=r[Q],t=$(r,Q);try{r[Q]=void 0}catch(t){return J.call(r)}return n=J.call(r),t?r[Q]=e:delete r[Q],n}:function(r){return J.call(r)},tr="function"==typeof Uint32Array;var er="function"==typeof Uint32Array?Uint32Array:null;var nr,or="function"==typeof Uint32Array?Uint32Array:void 0;nr=function(){var r,t,e;if("function"!=typeof er)return!1;try{t=new er(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(tr&&e instanceof Uint32Array||"[object Uint32Array]"===rr(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ir=nr,ar="function"==typeof Float64Array;var ur="function"==typeof Float64Array?Float64Array:null;var fr,cr="function"==typeof Float64Array?Float64Array:void 0;fr=function(){var r,t,e;if("function"!=typeof ur)return!1;try{t=new ur([1,3.14,-3.14,NaN]),e=t,r=(ar&&e instanceof Float64Array||"[object Float64Array]"===rr(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var lr=fr,sr="function"==typeof Uint8Array;var pr="function"==typeof Uint8Array?Uint8Array:null;var dr,yr="function"==typeof Uint8Array?Uint8Array:void 0;dr=function(){var r,t,e;if("function"!=typeof pr)return!1;try{t=new pr(t=[1,3.14,-3.14,256,257]),e=t,r=(sr&&e instanceof Uint8Array||"[object Uint8Array]"===rr(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var vr=dr,gr="function"==typeof Uint16Array;var br="function"==typeof Uint16Array?Uint16Array:null;var hr,wr="function"==typeof Uint16Array?Uint16Array:void 0;hr=function(){var r,t,e;if("function"!=typeof br)return!1;try{t=new br(t=[1,3.14,-3.14,65536,65537]),e=t,r=(gr&&e instanceof Uint16Array||"[object Uint16Array]"===rr(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var mr,jr={uint16:hr,uint8:vr};(mr=new jr.uint16(1))[0]=4660;var Ar=52===new jr.uint8(mr.buffer)[0],Er=!0===Ar?1:0,Or=new lr(1),_r=new ir(Or.buffer);function Tr(r){return Or[0]=r,_r[Er]}function Sr(r,t){var e,n,o,i;return o=(i=r*r)*i,n=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),n+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(o=1-(e=.5*i))+(1-o-e+(i*n-r*t))}var Ur=-.16666666666666632,Ir=.00833333333332249,Nr=-.0001984126982985795,xr=27557313707070068e-22,Fr=-2.5050760253406863e-8,Pr=1.58969099521155e-10;function kr(r,t){var e,n,o;return e=Ir+(o=r*r)*(Nr+o*xr)+o*(o*o)*(Fr+o*Pr),n=o*r,0===t?r+n*(Ur+o*e):r-(o*(.5*t-n*e)-t-n*Ur)}var Lr,Vr,Cr=2147483647,Gr=2146435072,Rr=1048575,$r=!0===Ar?0:1,Hr=new lr(1),Wr=new ir(Hr.buffer);!0===Ar?(Lr=1,Vr=0):(Lr=0,Vr=1);var Br={HIGH:Lr,LOW:Vr},Mr=new lr(1),Zr=new ir(Mr.buffer),Xr=Br.HIGH,Yr=Br.LOW;function zr(r,t){return Zr[Xr]=r,Zr[Yr]=t,Mr[0]}var Dr,Kr,qr=Math.floor,Jr=1023,Qr=1023,rt=-1023,tt=-1074,et=2147483648;!0===Ar?(Dr=1,Kr=0):(Dr=0,Kr=1);var nt={HIGH:Dr,LOW:Kr},ot=new lr(1),it=new ir(ot.buffer),at=nt.HIGH,ut=nt.LOW;function ft(r,t,e,n){return ot[0]=r,t[n]=it[at],t[n+e]=it[ut],t}function ct(r){return ft(r,[0,0],1,0)}G(ct,"assign",ft);var lt=[0,0];var st=22250738585072014e-324,pt=4503599627370496;function dt(r,t,e,n){return M(r)||z(r)?(t[n]=r,t[n+e]=0,t):0!==r&&D(r)<st?(t[n]=r*pt,t[n+e]=-52,t):(t[n]=r,t[n+e]=0,t)}G((function(r){return dt(r,[0,0],1,0)}),"assign",dt);var yt=2220446049250313e-31,vt=2148532223,gt=[0,0],bt=[0,0];function ht(r,t){var e,n,o,i,a,u;return 0===t||0===r||M(r)||z(r)?r:(dt(r,gt,1,0),r=gt[0],t+=gt[1],t+=function(r){var t=Tr(r);return(t=(t&Gr)>>>20)-Jr|0}(r),t<tt?(o=0,i=r,ct.assign(o,lt,1,0),a=lt[0],a&=Cr,u=Tr(i),zr(a|=u&=et,lt[1])):t>Qr?r<0?Y:Z:(t<=rt?(t+=52,n=yt):n=1,ct.assign(r,bt,1,0),e=bt[0],e&=vt,n*zr(e|=t+Jr<<20,bt[1])))}function wt(r){return function(r,t){var e,n;for(e=[],n=0;n<t;n++)e.push(r);return e}(0,r)}var mt=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],jt=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],At=16777216,Et=5.960464477539063e-8,Ot=wt(20),_t=wt(20),Tt=wt(20),St=wt(20);function Ut(r,t,e,n,o,i,a,u,f){var c,l,s,p,d,y,v,g,b;for(p=i,b=n[e],g=e,d=0;g>0;d++)l=Et*b|0,St[d]=b-At*l|0,b=n[g-1]+l,g-=1;if(b=ht(b,o),b-=8*qr(.125*b),b-=v=0|b,s=0,o>0?(v+=d=St[e-1]>>24-o,St[e-1]-=d<<24-o,s=St[e-1]>>23-o):0===o?s=St[e-1]>>23:b>=.5&&(s=2),s>0){for(v+=1,c=0,d=0;d<e;d++)g=St[d],0===c?0!==g&&(c=1,St[d]=16777216-g):St[d]=16777215-g;if(o>0)switch(o){case 1:St[e-1]&=8388607;break;case 2:St[e-1]&=4194303}2===s&&(b=1-b,0!==c&&(b-=ht(1,o)))}if(0===b){for(g=0,d=e-1;d>=i;d--)g|=St[d];if(0===g){for(y=1;0===St[i-y];y++);for(d=e+1;d<=e+y;d++){for(f[u+d]=mt[a+d],l=0,g=0;g<=u;g++)l+=r[g]*f[u+(d-g)];n[d]=l}return Ut(r,t,e+=y,n,o,i,a,u,f)}}if(0===b)for(e-=1,o-=24;0===St[e];)e-=1,o-=24;else(b=ht(b,-o))>=At?(l=Et*b|0,St[e]=b-At*l|0,o+=24,St[e+=1]=l):St[e]=0|b;for(l=ht(1,o),d=e;d>=0;d--)n[d]=l*St[d],l*=Et;for(d=e;d>=0;d--){for(l=0,y=0;y<=p&&y<=e-d;y++)l+=jt[y]*n[d+y];Tt[e-d]=l}for(l=0,d=e;d>=0;d--)l+=Tt[d];for(t[0]=0===s?l:-l,l=Tt[0]-l,d=1;d<=e;d++)l+=Tt[d];return t[1]=0===s?l:-l,7&v}function It(r,t,e,n){var o,i,a,u,f,c,l;for(4,(i=(e-3)/24|0)<0&&(i=0),u=e-24*(i+1),c=i-(a=n-1),l=a+4,f=0;f<=l;f++)Ot[f]=c<0?0:mt[c],c+=1;for(f=0;f<=4;f++){for(o=0,c=0;c<=a;c++)o+=r[c]*Ot[a+(f-c)];_t[f]=o}return 4,Ut(r,t,4,_t,u,4,i,a,Ot)}var Nt=Math.round,xt=.6366197723675814,Ft=1.5707963267341256,Pt=6077100506506192e-26,kt=6077100506303966e-26,Lt=20222662487959506e-37,Vt=20222662487111665e-37,Ct=84784276603689e-45,Gt=2047;function Rt(r,t,e){var n,o,i,a,u;return i=r-(n=Nt(r*xt))*Ft,a=n*Pt,u=t>>20|0,e[0]=i-a,u-(Tr(e[0])>>20&Gt)>16&&(a=n*Lt-((o=i)-(i=o-(a=n*kt))-a),e[0]=i-a,u-(Tr(e[0])>>20&Gt)>49&&(a=n*Ct-((o=i)-(i=o-(a=n*Vt))-a),e[0]=i-a)),e[1]=i-e[0]-a,n}var $t=0,Ht=16777216,Wt=1.5707963267341256,Bt=6077100506506192e-26,Mt=2*Bt,Zt=3*Bt,Xt=4*Bt,Yt=598523,zt=1072243195,Dt=1073928572,Kt=1074752122,qt=1074977148,Jt=1075183036,Qt=1075388923,re=1075594811,te=1094263291,ee=[0,0,0],ne=[0,0];function oe(r,t){var e,n,o,i,a,u,f;if((o=Tr(r)&Cr|0)<=zt)return t[0]=r,t[1]=0,0;if(o<=Kt)return(o&Rr)===Yt?Rt(r,o,t):o<=Dt?r>0?(f=r-Wt,t[0]=f-Bt,t[1]=f-t[0]-Bt,1):(f=r+Wt,t[0]=f+Bt,t[1]=f-t[0]+Bt,-1):r>0?(f=r-2*Wt,t[0]=f-Mt,t[1]=f-t[0]-Mt,2):(f=r+2*Wt,t[0]=f+Mt,t[1]=f-t[0]+Mt,-2);if(o<=re)return o<=Jt?o===qt?Rt(r,o,t):r>0?(f=r-3*Wt,t[0]=f-Zt,t[1]=f-t[0]-Zt,3):(f=r+3*Wt,t[0]=f+Zt,t[1]=f-t[0]+Zt,-3):o===Qt?Rt(r,o,t):r>0?(f=r-4*Wt,t[0]=f-Xt,t[1]=f-t[0]-Xt,4):(f=r+4*Wt,t[0]=f+Xt,t[1]=f-t[0]+Xt,-4);if(o<te)return Rt(r,o,t);if(o>=Gr)return t[0]=NaN,t[1]=NaN,0;for(e=function(r){return Hr[0]=r,Wr[$r]}(r),f=zr(o-((n=(o>>20)-1046)<<20|0),e),a=0;a<2;a++)ee[a]=0|f,f=(f-ee[a])*Ht;for(ee[2]=f,i=3;ee[i-1]===$t;)i-=1;return u=It(ee,ne,n,i),r<0?(t[0]=-ne[0],t[1]=-ne[1],-u):(t[0]=ne[0],t[1]=ne[1],u)}var ie=[0,0],ae=2147483647,ue=1072243195,fe=1044381696,ce=2146435072;function le(r){var t;if(t=Tr(r),(t&=ae)<=ue)return t<fe?1:Sr(r,0);if(t>=ce)return NaN;switch(3&oe(r,ie)){case 0:return Sr(ie[0],ie[1]);case 1:return-kr(ie[0],ie[1]);case 2:return-Sr(ie[0],ie[1]);default:return kr(ie[0],ie[1])}}var se=1072243195,pe=1045430272,de=[0,0];var ye=3.141592653589793,ve=9007199254740992;function ge(r){var t,e,n,o;return M(r)||z(r)?NaN:(t=D(r))>ve?1:.5===(n=t-(e=qr(t)))?0:(o=n<.25?le(ye*n):n<.75?function(r){var t;if(t=Tr(r),(t&=Cr)<=se)return t<pe?r:kr(r,0);if(t>=Gr)return NaN;switch(3&oe(r,de)){case 0:return kr(de[0],de[1]);case 1:return Sr(de[0],de[1]);case 2:return-kr(de[0],de[1]);default:return-Sr(de[0],de[1])}}(ye*(n=.5-n)):-le(ye*(n=1-n)),e%2==1?-o:o)}var be=Array.isArray?Array.isArray:function(r){return"[object Array]"===rr(r)};var he=/./;function we(r){return"boolean"==typeof r}var me=Boolean,je=Boolean.prototype.toString;var Ae=q();function Ee(r){return"object"==typeof r&&(r instanceof me||(Ae?function(r){try{return je.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===rr(r)))}function Oe(r){return we(r)||Ee(r)}G(Oe,"isPrimitive",we),G(Oe,"isObject",Ee);var _e="object"==typeof self?self:null,Te="object"==typeof window?window:null,Se="object"==typeof global?global:null,Ue="object"==typeof globalThis?globalThis:null;var Ie=function(r){if(arguments.length){if(!we(r))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(Ue)return Ue;if(_e)return _e;if(Te)return Te;if(Se)return Se;throw new Error("unexpected error. Unable to resolve global object.")}(),Ne=Ie.document&&Ie.document.childNodes,xe=Int8Array;function Fe(){return/^\s*function\s*([^(]*)/i}var Pe=/^\s*function\s*([^(]*)/i;function ke(r){return null!==r&&"object"==typeof r}function Le(r){var t,e,n,o;if(("Object"===(e=rr(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Pe.exec(n.toString()))return t[1]}return ke(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}G(Fe,"REGEXP",Pe),G(ke,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!be(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(ke));var Ve="function"==typeof he||"object"==typeof xe||"function"==typeof Ne?function(r){return Le(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Le(r).toLowerCase():t};function Ce(r){return"function"===Ve(r)}var Ge,Re=Object,$e=Object.getPrototypeOf;Ge=Ce(Object.getPrototypeOf)?$e:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===rr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var He=Ge;var We=Object.prototype;function Be(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!be(r)}(r)&&(t=function(r){return null==r?null:(r=Re(r),He(r))}(r),!t||!$(r,"constructor")&&$(t,"constructor")&&Ce(t.constructor)&&"[object Function]"===rr(t.constructor)&&$(t,"isPrototypeOf")&&Ce(t.isPrototypeOf)&&(t===We||function(r){var t;for(t in r)if(!$(r,t))return!1;return!0}(r)))}function Me(r){return"number"==typeof r}var Ze=X.prototype.toString;var Xe=q();function Ye(r){return"object"==typeof r&&(r instanceof X||(Xe?function(r){try{return Ze.call(r),!0}catch(r){return!1}}(r):"[object Number]"===rr(r)))}function ze(r){return Me(r)||Ye(r)}function De(r){return Me(r)&&r>0}function Ke(r){return Ye(r)&&r.valueOf()>0}function qe(r){return De(r)||Ke(r)}function Je(r){return r<Z&&r>Y&&qr(t=r)===t;var t}function Qe(r){return Me(r)&&Je(r)}function rn(r){return Ye(r)&&Je(r.valueOf())}function tn(r){return Qe(r)||rn(r)}function en(r){return Qe(r)&&r>0}function nn(r){return rn(r)&&r.valueOf()>0}function on(r){return en(r)||nn(r)}function an(r){return Qe(r)&&r>=0}function un(r){return rn(r)&&r.valueOf()>=0}function fn(r){return an(r)||un(r)}return G(ze,"isPrimitive",Me),G(ze,"isObject",Ye),G(qe,"isPrimitive",De),G(qe,"isObject",Ke),G(tn,"isPrimitive",Qe),G(tn,"isObject",rn),G(on,"isPrimitive",en),G(on,"isObject",nn),G(fn,"isPrimitive",an),G(fn,"isObject",un),function r(t){var e,n,o,i,a,u,f,c;if(e={duration:-1,period:100,amplitude:1,offset:0,iter:1e308},arguments.length&&(i=function(r,t){return Be(t)?$(t,"duration")&&(r.duration=t.duration,!en(t.duration))?new TypeError(B("0tL3P","duration",t.duration)):$(t,"period")&&(r.period=t.period,!en(t.period))?new TypeError(B("0tL3P","period",t.period)):$(t,"amplitude")&&(r.amplitude=t.amplitude,!De(t.amplitude))?new TypeError(B("0tL4D","amplitude",t.amplitude)):$(t,"offset")&&(r.offset=t.offset,!Qe(t.offset))?new TypeError(B("0tL8M","offset",t.offset)):$(t,"iter")&&(r.iter=t.iter,!an(t.iter))?new TypeError(B("0tL2t","iter",t.iter)):null:new TypeError(B("0tL2V",t))}(e,t)))throw i;if(-1===e.duration&&(e.duration=e.period),e.duration>e.period)throw new RangeError(B("0tL8K","duration",e.duration));if(e.duration<=2)throw new RangeError(B("0tL8L","duration",e.duration));return(u=(e.period-e.offset)%e.period)<0&&(u+=e.period),a=.5*e.amplitude,f=2/(e.duration-1),u-=1,c=0,G(n={},"next",(function(){if(c+=1,o||c>e.iter)return{done:!0};return{value:(u=(u+1)%e.period)<e.duration?a*(1-ge(f*u)):0,done:!1}})),G(n,"return",(function(r){if(o=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),W&&G(n,W,(function(){return r(e)})),n}}));
//# sourceMappingURL=index.js.map