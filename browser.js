// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,d=/e-(\d)$/,y=/^(\d+)$/,v=/^(\d+)e/,g=/\.0$/,b=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":c(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=l.call(n,h,"$1e"),n=l.call(n,b,"e"),n=l.call(n,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=l.call(n,p,"e+0$1"),n=l.call(n,d,"e-0$1"),r.alternate&&(n=l.call(n,y,"$1."),n=l.call(n,v,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):f.call(n)}function m(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}var j=String.fromCharCode,A=Array.isArray;function E(r){return r!=r}function O(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function _(r){var t,e,n,i,a,c,f,s,l,p,d,y,v;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,s=0;s<r.length;s++)if("string"==typeof(n=r[s]))c+=n;else{if(t=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),e=n.flags,l=0;l<e.length;l++)switch(i=e.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,E(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,d=n.width,y=n.padRight,v=void 0,(v=d-p.length)<0?p:p=y?p+m(v):m(v)+p)),c+=n.arg||"",f+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function U(r){var t,e,n,o;for(e=[],o=0,n=S.exec(r);n;)(t=r.slice(o,S.lastIndex-n[0].length)).length&&e.push(t),e.push(T(n)),o=S.lastIndex,n=S.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function I(r){var t,e;if("string"!=typeof r)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[U(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return _.apply(null,t)}var x,F=Object.prototype,N=F.toString,P=F.__defineGetter__,k=F.__defineSetter__,L=F.__lookupGetter__,V=F.__lookupSetter__;x=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===N.call(e))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(L.call(r,t)||V.call(r,t)?(n=r.__proto__,r.__proto__=F,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&P&&P.call(r,t,e.get),a&&k&&k.call(r,t,e.set),r};var C=x;function G(r,t,e){C(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var R=Object.prototype.hasOwnProperty;function $(r,t){return null!=r&&R.call(r,t)}var H="function"==typeof Symbol?Symbol:void 0,W="function"==typeof H&&"symbol"==typeof H("foo")&&$(H,"iterator")&&"symbol"==typeof H.iterator?Symbol.iterator:null;function B(){var r,t=arguments,e="https://stdlib.io/e/"+t[0]+"?";for(r=1;r<t.length;r++)e+="&arg[]="+encodeURIComponent(t[r]);return e}function M(r){return r!=r}var Z=Number.POSITIVE_INFINITY,X=Number,Y=X.NEGATIVE_INFINITY;function z(r){return r===Z||r===Y}function D(r){return Math.abs(r)}var K="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function q(){return K&&"symbol"==typeof Symbol.toStringTag}var J,Q=Object.prototype.toString,rr="function"==typeof H?H.toStringTag:"",tr=q()?function(r){var t,e,n;if(null==r)return Q.call(r);e=r[rr],t=$(r,rr);try{r[rr]=void 0}catch(t){return Q.call(r)}return n=Q.call(r),t?r[rr]=e:delete r[rr],n}:function(r){return Q.call(r)},er="function"==typeof Uint32Array,nr="function"==typeof Uint32Array?Uint32Array:null,or="function"==typeof Uint32Array?Uint32Array:void 0;J=function(){var r,t,e;if("function"!=typeof nr)return!1;try{t=new nr(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(er&&e instanceof Uint32Array||"[object Uint32Array]"===tr(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ir,ar=J,ur="function"==typeof Float64Array,cr="function"==typeof Float64Array?Float64Array:null,fr="function"==typeof Float64Array?Float64Array:void 0;ir=function(){var r,t,e;if("function"!=typeof cr)return!1;try{t=new cr([1,3.14,-3.14,NaN]),e=t,r=(ur&&e instanceof Float64Array||"[object Float64Array]"===tr(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var sr,lr=ir,pr="function"==typeof Uint8Array,dr="function"==typeof Uint8Array?Uint8Array:null,yr="function"==typeof Uint8Array?Uint8Array:void 0;sr=function(){var r,t,e;if("function"!=typeof dr)return!1;try{t=new dr(t=[1,3.14,-3.14,256,257]),e=t,r=(pr&&e instanceof Uint8Array||"[object Uint8Array]"===tr(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var vr,gr=sr,br="function"==typeof Uint16Array,hr="function"==typeof Uint16Array?Uint16Array:null,wr="function"==typeof Uint16Array?Uint16Array:void 0;vr=function(){var r,t,e;if("function"!=typeof hr)return!1;try{t=new hr(t=[1,3.14,-3.14,65536,65537]),e=t,r=(br&&e instanceof Uint16Array||"[object Uint16Array]"===tr(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var mr,jr={uint16:vr,uint8:gr};(mr=new jr.uint16(1))[0]=4660;var Ar=52===new jr.uint8(mr.buffer)[0],Er=!0===Ar?1:0,Or=new lr(1),_r=new ar(Or.buffer);function Sr(r){return Or[0]=r,_r[Er]}function Tr(r,t){var e,n,o,i;return o=(i=r*r)*i,n=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),n+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(o=1-(e=.5*i))+(1-o-e+(i*n-r*t))}var Ur=-.16666666666666632,Ir=.00833333333332249,xr=-.0001984126982985795,Fr=27557313707070068e-22,Nr=-2.5050760253406863e-8,Pr=1.58969099521155e-10;function kr(r,t){var e,n,o;return e=Ir+(o=r*r)*(xr+o*Fr)+o*(o*o)*(Nr+o*Pr),n=o*r,0===t?r+n*(Ur+o*e):r-(o*(.5*t-n*e)-t-n*Ur)}var Lr,Vr,Cr=2147483647,Gr=2146435072,Rr=1048575,$r=!0===Ar?0:1,Hr=new lr(1),Wr=new ar(Hr.buffer);!0===Ar?(Lr=1,Vr=0):(Lr=0,Vr=1);var Br={HIGH:Lr,LOW:Vr},Mr=new lr(1),Zr=new ar(Mr.buffer),Xr=Br.HIGH,Yr=Br.LOW;function zr(r,t){return Zr[Xr]=r,Zr[Yr]=t,Mr[0]}var Dr,Kr,qr=Math.floor,Jr=1023,Qr=1023,rt=-1023,tt=-1074,et=2147483648;!0===Ar?(Dr=1,Kr=0):(Dr=0,Kr=1);var nt={HIGH:Dr,LOW:Kr},ot=new lr(1),it=new ar(ot.buffer),at=nt.HIGH,ut=nt.LOW;function ct(r,t,e,n){return ot[0]=r,t[n]=it[at],t[n+e]=it[ut],t}function ft(r){return ct(r,[0,0],1,0)}G(ft,"assign",ct);var st=[0,0],lt=22250738585072014e-324,pt=4503599627370496;function dt(r,t,e,n){return M(r)||z(r)?(t[n]=r,t[n+e]=0,t):0!==r&&D(r)<lt?(t[n]=r*pt,t[n+e]=-52,t):(t[n]=r,t[n+e]=0,t)}G((function(r){return dt(r,[0,0],1,0)}),"assign",dt);var yt=2220446049250313e-31,vt=2148532223,gt=[0,0],bt=[0,0];function ht(r,t){var e,n,o,i,a,u;return 0===t||0===r||M(r)||z(r)?r:(dt(r,gt,1,0),r=gt[0],t+=gt[1],t+=function(r){var t=Sr(r);return(t=(t&Gr)>>>20)-Jr|0}(r),t<tt?(o=0,i=r,ft.assign(o,st,1,0),a=st[0],a&=Cr,u=Sr(i),zr(a|=u&=et,st[1])):t>Qr?r<0?Y:Z:(t<=rt?(t+=52,n=yt):n=1,ft.assign(r,bt,1,0),e=bt[0],e&=vt,n*zr(e|=t+Jr<<20,bt[1])))}function wt(r){return function(r,t){var e,n;for(e=[],n=0;n<t;n++)e.push(r);return e}(0,r)}var mt=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],jt=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],At=16777216,Et=5.960464477539063e-8,Ot=wt(20),_t=wt(20),St=wt(20),Tt=wt(20);function Ut(r,t,e,n,o,i,a,u,c){var f,s,l,p,d,y,v,g,b;for(p=i,b=n[e],g=e,d=0;g>0;d++)s=Et*b|0,Tt[d]=b-At*s|0,b=n[g-1]+s,g-=1;if(b=ht(b,o),b-=8*qr(.125*b),b-=v=0|b,l=0,o>0?(v+=d=Tt[e-1]>>24-o,Tt[e-1]-=d<<24-o,l=Tt[e-1]>>23-o):0===o?l=Tt[e-1]>>23:b>=.5&&(l=2),l>0){for(v+=1,f=0,d=0;d<e;d++)g=Tt[d],0===f?0!==g&&(f=1,Tt[d]=16777216-g):Tt[d]=16777215-g;if(o>0)switch(o){case 1:Tt[e-1]&=8388607;break;case 2:Tt[e-1]&=4194303}2===l&&(b=1-b,0!==f&&(b-=ht(1,o)))}if(0===b){for(g=0,d=e-1;d>=i;d--)g|=Tt[d];if(0===g){for(y=1;0===Tt[i-y];y++);for(d=e+1;d<=e+y;d++){for(c[u+d]=mt[a+d],s=0,g=0;g<=u;g++)s+=r[g]*c[u+(d-g)];n[d]=s}return Ut(r,t,e+=y,n,o,i,a,u,c)}}if(0===b)for(e-=1,o-=24;0===Tt[e];)e-=1,o-=24;else(b=ht(b,-o))>=At?(s=Et*b|0,Tt[e]=b-At*s|0,o+=24,Tt[e+=1]=s):Tt[e]=0|b;for(s=ht(1,o),d=e;d>=0;d--)n[d]=s*Tt[d],s*=Et;for(d=e;d>=0;d--){for(s=0,y=0;y<=p&&y<=e-d;y++)s+=jt[y]*n[d+y];St[e-d]=s}for(s=0,d=e;d>=0;d--)s+=St[d];for(t[0]=0===l?s:-s,s=St[0]-s,d=1;d<=e;d++)s+=St[d];return t[1]=0===l?s:-s,7&v}function It(r,t,e,n){var o,i,a,u,c,f,s;for((i=(e-3)/24|0)<0&&(i=0),u=e-24*(i+1),f=i-(a=n-1),s=a+4,c=0;c<=s;c++)Ot[c]=f<0?0:mt[f],f+=1;for(c=0;c<=4;c++){for(o=0,f=0;f<=a;f++)o+=r[f]*Ot[a+(c-f)];_t[c]=o}return Ut(r,t,4,_t,u,4,i,a,Ot)}var xt=Math.round,Ft=.6366197723675814,Nt=1.5707963267341256,Pt=6077100506506192e-26,kt=6077100506303966e-26,Lt=20222662487959506e-37,Vt=20222662487111665e-37,Ct=84784276603689e-45,Gt=2047;function Rt(r,t,e){var n,o,i,a,u;return i=r-(n=xt(r*Ft))*Nt,a=n*Pt,u=t>>20|0,e[0]=i-a,u-(Sr(e[0])>>20&Gt)>16&&(a=n*Lt-((o=i)-(i=o-(a=n*kt))-a),e[0]=i-a,u-(Sr(e[0])>>20&Gt)>49&&(a=n*Ct-((o=i)-(i=o-(a=n*Vt))-a),e[0]=i-a)),e[1]=i-e[0]-a,n}var $t=0,Ht=16777216,Wt=1.5707963267341256,Bt=6077100506506192e-26,Mt=2*Bt,Zt=3*Bt,Xt=4*Bt,Yt=598523,zt=1072243195,Dt=1073928572,Kt=1074752122,qt=1074977148,Jt=1075183036,Qt=1075388923,re=1075594811,te=1094263291,ee=[0,0,0],ne=[0,0];function oe(r,t){var e,n,o,i,a,u,c;if((o=Sr(r)&Cr|0)<=zt)return t[0]=r,t[1]=0,0;if(o<=Kt)return(o&Rr)===Yt?Rt(r,o,t):o<=Dt?r>0?(c=r-Wt,t[0]=c-Bt,t[1]=c-t[0]-Bt,1):(c=r+Wt,t[0]=c+Bt,t[1]=c-t[0]+Bt,-1):r>0?(c=r-2*Wt,t[0]=c-Mt,t[1]=c-t[0]-Mt,2):(c=r+2*Wt,t[0]=c+Mt,t[1]=c-t[0]+Mt,-2);if(o<=re)return o<=Jt?o===qt?Rt(r,o,t):r>0?(c=r-3*Wt,t[0]=c-Zt,t[1]=c-t[0]-Zt,3):(c=r+3*Wt,t[0]=c+Zt,t[1]=c-t[0]+Zt,-3):o===Qt?Rt(r,o,t):r>0?(c=r-4*Wt,t[0]=c-Xt,t[1]=c-t[0]-Xt,4):(c=r+4*Wt,t[0]=c+Xt,t[1]=c-t[0]+Xt,-4);if(o<te)return Rt(r,o,t);if(o>=Gr)return t[0]=NaN,t[1]=NaN,0;for(e=function(r){return Hr[0]=r,Wr[$r]}(r),c=zr(o-((n=(o>>20)-1046)<<20|0),e),a=0;a<2;a++)ee[a]=0|c,c=(c-ee[a])*Ht;for(ee[2]=c,i=3;ee[i-1]===$t;)i-=1;return u=It(ee,ne,n,i),r<0?(t[0]=-ne[0],t[1]=-ne[1],-u):(t[0]=ne[0],t[1]=ne[1],u)}var ie=[0,0],ae=2147483647,ue=1072243195,ce=1044381696,fe=2146435072;function se(r){var t;if(t=Sr(r),(t&=ae)<=ue)return t<ce?1:Tr(r,0);if(t>=fe)return NaN;switch(3&oe(r,ie)){case 0:return Tr(ie[0],ie[1]);case 1:return-kr(ie[0],ie[1]);case 2:return-Tr(ie[0],ie[1]);default:return kr(ie[0],ie[1])}}var le=1072243195,pe=1045430272,de=[0,0],ye=3.141592653589793,ve=9007199254740992;function ge(r){var t,e,n,o;return M(r)||z(r)?NaN:(t=D(r))>ve?1:.5==(n=t-(e=qr(t)))?0:(o=n<.25?se(ye*n):n<.75?function(r){var t;if(t=Sr(r),(t&=Cr)<=le)return t<pe?r:kr(r,0);if(t>=Gr)return NaN;switch(3&oe(r,de)){case 0:return kr(de[0],de[1]);case 1:return Tr(de[0],de[1]);case 2:return-kr(de[0],de[1]);default:return-Tr(de[0],de[1])}}(ye*(n=.5-n)):-se(ye*(n=1-n)),e%2==1?-o:o)}var be=Array.isArray?Array.isArray:function(r){return"[object Array]"===tr(r)},he=/./;function we(r){return"boolean"==typeof r}var me=Boolean,je=Boolean.prototype.toString,Ae=q();function Ee(r){return"object"==typeof r&&(r instanceof me||(Ae?function(r){try{return je.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===tr(r)))}function Oe(r){return we(r)||Ee(r)}G(Oe,"isPrimitive",we),G(Oe,"isObject",Ee);var _e="object"==typeof self?self:null,Se="object"==typeof window?window:null,Te="object"==typeof globalThis?globalThis:null,Ue=function(r){if(arguments.length){if(!we(r))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(Te)return Te;if(_e)return _e;if(Se)return Se;throw new Error("unexpected error. Unable to resolve global object.")}(),Ie=Ue.document&&Ue.document.childNodes,xe=Int8Array;function Fe(){return/^\s*function\s*([^(]*)/i}var Ne=/^\s*function\s*([^(]*)/i;function Pe(r){return null!==r&&"object"==typeof r}function ke(r){var t,e,n,o;if(("Object"===(e=tr(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Ne.exec(n.toString()))return t[1]}return Pe(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}G(Fe,"REGEXP",Ne),G(Pe,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!be(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(Pe));var Le="function"==typeof he||"object"==typeof xe||"function"==typeof Ie?function(r){return ke(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?ke(r).toLowerCase():t};function Ve(r){return"function"===Le(r)}var Ce,Ge=Object,Re=Object.getPrototypeOf;Ce=Ve(Object.getPrototypeOf)?Re:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===tr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var $e=Ce,He=Object.prototype;function We(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!be(r)}(r)&&(t=function(r){return null==r?null:(r=Ge(r),$e(r))}(r),!t||!$(r,"constructor")&&$(t,"constructor")&&Ve(t.constructor)&&"[object Function]"===tr(t.constructor)&&$(t,"isPrototypeOf")&&Ve(t.isPrototypeOf)&&(t===He||function(r){var t;for(t in r)if(!$(r,t))return!1;return!0}(r)))}function Be(r){return"number"==typeof r}var Me=X.prototype.toString,Ze=q();function Xe(r){return"object"==typeof r&&(r instanceof X||(Ze?function(r){try{return Me.call(r),!0}catch(r){return!1}}(r):"[object Number]"===tr(r)))}function Ye(r){return Be(r)||Xe(r)}function ze(r){return Be(r)&&r>0}function De(r){return Xe(r)&&r.valueOf()>0}function Ke(r){return ze(r)||De(r)}function qe(r){return r<Z&&r>Y&&qr(t=r)===t;var t}function Je(r){return Be(r)&&qe(r)}function Qe(r){return Xe(r)&&qe(r.valueOf())}function rn(r){return Je(r)||Qe(r)}function tn(r){return Je(r)&&r>0}function en(r){return Qe(r)&&r.valueOf()>0}function nn(r){return tn(r)||en(r)}function on(r){return Je(r)&&r>=0}function an(r){return Qe(r)&&r.valueOf()>=0}function un(r){return on(r)||an(r)}return G(Ye,"isPrimitive",Be),G(Ye,"isObject",Xe),G(Ke,"isPrimitive",ze),G(Ke,"isObject",De),G(rn,"isPrimitive",Je),G(rn,"isObject",Qe),G(nn,"isPrimitive",tn),G(nn,"isObject",en),G(un,"isPrimitive",on),G(un,"isObject",an),function r(t){var e,n,o,i,a,u,c,f;if(e={duration:-1,period:100,amplitude:1,offset:0,iter:1e308},arguments.length&&(i=function(r,t){return We(t)?$(t,"duration")&&(r.duration=t.duration,!tn(t.duration))?new TypeError(B("0tL3P","duration",t.duration)):$(t,"period")&&(r.period=t.period,!tn(t.period))?new TypeError(B("0tL3P","period",t.period)):$(t,"amplitude")&&(r.amplitude=t.amplitude,!ze(t.amplitude))?new TypeError(B("0tL4D","amplitude",t.amplitude)):$(t,"offset")&&(r.offset=t.offset,!Je(t.offset))?new TypeError(B("0tL8M","offset",t.offset)):$(t,"iter")&&(r.iter=t.iter,!on(t.iter))?new TypeError(B("0tL2t","iter",t.iter)):null:new TypeError(B("0tL2V",t))}(e,t)))throw i;if(-1===e.duration&&(e.duration=e.period),e.duration>e.period)throw new RangeError(B("0tL8K","duration",e.duration));if(e.duration<=2)throw new RangeError(B("0tL8L","duration",e.duration));return(u=(e.period-e.offset)%e.period)<0&&(u+=e.period),a=.5*e.amplitude,c=2/(e.duration-1),u-=1,f=0,G(n={},"next",(function(){return f+=1,o||f>e.iter?{done:!0}:{value:(u=(u+1)%e.period)<e.duration?a*(1-ge(c*u)):0,done:!1}})),G(n,"return",(function(r){return o=!0,arguments.length?{value:r,done:!0}:{done:!0}})),W&&G(n,W,(function(){return r(e)})),n}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterHannPulse=t();
//# sourceMappingURL=browser.js.map
