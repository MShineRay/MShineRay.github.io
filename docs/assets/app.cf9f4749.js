import { T as Transition, w as withModifiers, v as vShow, c as createSSRApp } from "./framework.765af80f.js";
import { s as shallowRef, r as readonly, i as inject, c as computed, a as reactive, m as markRaw, n as nextTick, w as watchEffect, _ as _export_sfc, o as openBlock, b as createElementBlock, d as createBaseVNode, e as createStaticVNode, f as defineComponent, g as createBlock, h as withCtx, j as createCommentVNode, k as ref, l as watch, p as onUnmounted, q as renderSlot, u as unref, t as normalizeClass, v as resolveDynamicComponent, x as createTextVNode, y as toDisplayString, F as Fragment, z as renderList, A as createVNode, B as h, C as provide, D as pushScopeId, E as popScopeId, G as defineAsyncComponent, H as onMounted, I as watchPostEffect, J as resolveComponent, K as getCurrentInstance, L as getCurrentScope, M as onScopeDispose, N as onUpdated, O as withDirectives } from "./plugin-vue_export-helper.8106b725.js";
const scriptRel = "modulepreload";
const seen = {};
const base = "/";
const __vitePreload = function preload(baseModule, deps) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  return Promise.all(deps.map((dep) => {
    dep = `${base}${dep}`;
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link2 = document.createElement("link");
    link2.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link2.as = "script";
      link2.crossOrigin = "";
    }
    link2.href = dep;
    document.head.appendChild(link2);
    if (isCss) {
      return new Promise((res, rej) => {
        link2.addEventListener("load", res);
        link2.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule());
};
var serializedSiteData = `{"lang":"en-US","title":"ShineRay","description":"ShineRay","base":"/","head":[["link",{"href":"/favicon.ico","rel":"icon"}],["meta",{"name":"app-build-time","value":1659015357767}],["script",{"src":"https://www.googletagmanager.com/gtag/js?id=G-R31NB6KKBC","async":"async"}],["link",{"href":"//cdn.bootcss.com/gitalk/1.5.0/gitalk.min.css","rel":"stylesheet"}],["script",{"src":"//cdn.bootcss.com/gitalk/1.7.2/gitalk.min.js","async":"async"}],["script",{},"window.dataLayer = window.dataLayer || [];\\nfunction gtag(){dataLayer.push(arguments);}\\ngtag('js', new Date());\\ngtag('config', 'G-R31NB6KKBC');\\nfunction gtag_event(eventName, data) {\\n  gtag(\\"event\\", eventName, data || {\\n    // send_to: __opay_tracking_id,\\n    // 'debug_mode':true\\n  });\\n  return false;\\n}\\nwindow.onload = function (){\\n  console.log('onload...')\\n  window.gtag_event && window.gtag_event(location.pathname)\\n}\\n"],["script",{},"var initGitalk = function(id) {\\n  var gitalk = new Gitalk({\\n    clientID: \\"187ca77e9ef602c818de\\",\\n    clientSecret: \\"f6e67959ddba9c12d2cf1f0b2f229febb61e4422\\",\\n    repo: \\"MShineRay.github.io\\",\\n    owner: \\"MShineRay\\",\\n    admin: [\\"MShineRay\\"],\\n    id: id || \\"\u8BC4\u8BBA\\",\\n    language: \\"zh-CN\\",\\n    perPage: 10,\\n    distractionFreeMode: false,\\n    pagerDirection: \\"last\\",\\n    createIssueManually: false\\n    // updateCountCallback: commentCount\\n  });\\n\\n  gitalk.render(\\"gitalk-container\\");\\n};\\n"],["script",{},"/*!\\n* felogsdk v1.0.3\\n* (c) 2022 1659014536455 MShineRay\\n* @license MIT\\n*/\\nvar felogsdk=function(t){\\"use strict\\";function q(e,t){var n,r=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)),r}function C(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?q(Object(o),!0).forEach(function(t){var e,n;e=r,n=o[t=t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):q(Object(o)).forEach(function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(o,t))})}return r}var e=\\"undefined\\"!=typeof globalThis?globalThis:\\"undefined\\"!=typeof window?window:\\"undefined\\"!=typeof global?global:\\"undefined\\"!=typeof self?self:{};function n(t,e){return t===e||t!=t&&e!=e}var D=n;function r(t,e){for(var n=t.length;n--;)if(D(t[n][0],e))return n;return-1}var X=r,N=Array.prototype.splice;var z=r;var F=r;var H=r;function U(t){var e=this.__data__;return!((t=X(e,t))<0)&&(t==e.length-1?e.pop():N.call(e,t,1),--this.size,!0)}function W(t){var e=this.__data__;return(t=z(e,t))<0?void 0:e[t][1]}function J(t){return-1<F(this.__data__,t)}function G(t,e){var n=this.__data__,r=H(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function o(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}o.prototype.clear=function(){this.__data__=[],this.size=0},o.prototype.delete=U,o.prototype.get=W,o.prototype.has=J,o.prototype.set=G;var i=o,$=i;function V(){this.__data__=new $,this.size=0}function Q(t){var e=this.__data__,t=e.delete(t);return this.size=e.size,t}function K(t){return this.__data__.get(t)}function Y(t){return this.__data__.has(t)}var e=\\"object\\"==typeof e&&e&&e.Object===Object&&e,a=\\"object\\"==typeof self&&self&&self.Object===Object&&self,a=e||a||Function(\\"return this\\")(),c=a.Symbol,s=Object.prototype,Z=s.hasOwnProperty,tt=s.toString,u=c?c.toStringTag:void 0;var et=Object.prototype.toString;var nt=function(t){var e=Z.call(t,u),n=t[u];try{var r=!(t[u]=void 0)}catch(t){}var o=tt.call(t);return r&&(e?t[u]=n:delete t[u]),o},rt=function(t){return et.call(t)},ot=c?c.toStringTag:void 0;function d(t){return null==t?void 0===t?\\"[object Undefined]\\":\\"[object Null]\\":(ot&&ot in Object(t)?nt:rt)(t)}function l(t){var e=typeof t;return null!=t&&(\\"object\\"==e||\\"function\\"==e)}var it=d,at=l;function f(t){return!!at(t)&&(\\"[object Function]\\"==(t=it(t))||\\"[object GeneratorFunction]\\"==t||\\"[object AsyncFunction]\\"==t||\\"[object Proxy]\\"==t)}var s=a[\\"__core-js_shared__\\"],ct=(c=/[^.]+$/.exec(s&&s.keys&&s.keys.IE_PROTO||\\"\\"))?\\"Symbol(src)_1.\\"+c:\\"\\";var st=Function.prototype.toString;var ut=f,dt=function(t){return!!ct&&ct in t},lt=l,ft=function(t){if(null!=t){try{return st.call(t)}catch(t){}try{return t+\\"\\"}catch(t){}}return\\"\\"},pt=/^\\\\[object .+?Constructor\\\\]$/,s=Function.prototype,c=Object.prototype,s=s.toString,c=c.hasOwnProperty,ht=RegExp(\\"^\\"+s.call(c).replace(/[\\\\\\\\^$.*+?()[\\\\]{}|]/g,\\"\\\\\\\\$&\\").replace(/hasOwnProperty|(function).*?(?=\\\\\\\\\\\\()| for .+?(?=\\\\\\\\\\\\])/g,\\"$1.*?\\")+\\"$\\");var gt=function(t){return!(!lt(t)||dt(t))&&(ut(t)?ht:pt).test(ft(t))},vt=function(t,e){return null==t?void 0:t[e]};function p(t,e){return t=vt(t,e),gt(t)?t:void 0}var s=p(a,\\"Map\\"),c=p(Object,\\"create\\"),yt=c;var wt=c,mt=Object.prototype.hasOwnProperty;var bt=c,_t=Object.prototype.hasOwnProperty;var Ot=c;function jt(t){return t=this.has(t)&&delete this.__data__[t],this.size-=t?1:0,t}function xt(t){var e,n=this.__data__;return wt?\\"__lodash_hash_undefined__\\"===(e=n[t])?void 0:e:mt.call(n,t)?n[t]:void 0}function St(t){var e=this.__data__;return bt?void 0!==e[t]:_t.call(e,t)}function kt(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Ot&&void 0===e?\\"__lodash_hash_undefined__\\":e,this}function h(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}h.prototype.clear=function(){this.__data__=yt?yt(null):{},this.size=0},h.prototype.delete=jt,h.prototype.get=xt,h.prototype.has=St,h.prototype.set=kt;var At=h,Et=i,Tt=s;var It=function(t){var e=typeof t;return\\"string\\"==e||\\"number\\"==e||\\"symbol\\"==e||\\"boolean\\"==e?\\"__proto__\\"!==t:null===t};function g(t,e){return t=t.__data__,It(e)?t[\\"string\\"==typeof e?\\"string\\":\\"hash\\"]:t.map}var Pt=g;var Rt=g;var Mt=g;var Lt=g;function Bt(t){return t=Pt(this,t).delete(t),this.size-=t?1:0,t}function qt(t){return Rt(this,t).get(t)}function Ct(t){return Mt(this,t).has(t)}function Dt(t,e){var n=Lt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function v(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}v.prototype.clear=function(){this.size=0,this.__data__={hash:new At,map:new(Tt||Et),string:new At}},v.prototype.delete=Bt,v.prototype.get=qt,v.prototype.has=Ct,v.prototype.set=Dt;var Xt=i,Nt=s,zt=v;function Ft(t,e){var n=this.__data__;if(n instanceof Xt){var r=n.__data__;if(!Nt||r.length<199)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new zt(r)}return n.set(t,e),this.size=n.size,this}var Ht=i,c=Q,s=K,i=Y;function y(t){t=this.__data__=new Ht(t);this.size=t.size}y.prototype.clear=V,y.prototype.delete=c,y.prototype.get=s,y.prototype.has=i,y.prototype.set=Ft;var c=y,Ut=p,s=function(){try{var t=Ut(Object,\\"defineProperty\\");return t({},\\"\\",{}),t}catch(t){}}(),Wt=s;function w(t,e,n){\\"__proto__\\"==e&&Wt?Wt(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}var Jt=w,Gt=n;function $t(t,e,n){(void 0===n||Gt(t[e],n))&&(void 0!==n||e in t)||Jt(t,e,n)}var m,i=function(s){return function(t,e,n){for(var r=-1,o=Object(t),i=n(t),a=i.length;a--;){var c=i[s?a:++r];if(!1===e(o[c],c,o))break}return t}}(),Vt={exports:{}};_=(_=(x=Vt).exports)&&!_.nodeType&&_,j=(j=_&&x&&!x.nodeType&&x)&&j.exports===_?a.Buffer:void 0,m=j?j.allocUnsafe:void 0,x.exports=function(t,e){return e?t.slice():(e=t.length,e=m?m(e):new t.constructor(e),t.copy(e),e)};var Qt=a.Uint8Array;var Kt=function(t){var e=new t.constructor(t.byteLength);return new Qt(e).set(new Qt(t)),e};function Yt(t,e){return e=e?Kt(t.buffer):t.buffer,new t.constructor(e,t.byteOffset,t.length)}function Zt(t,e){var n=-1,r=t.length;for(e=e||Array(r);++n<r;)e[n]=t[n];return e}var te=l,ee=Object.create;function b(){}var _=function(e,n){return function(t){return e(n(t))}}(Object.getPrototypeOf,Object),ne=Object.prototype;function re(t){var e=t&&t.constructor;return t===(\\"function\\"==typeof e&&e.prototype||ne)}var oe=function(t){if(!te(t))return{};if(ee)return ee(t);b.prototype=t;t=new b;return b.prototype=void 0,t},ie=_,ae=re;function ce(t){return\\"function\\"!=typeof t.constructor||ae(t)?{}:oe(ie(t))}function O(t){return null!=t&&\\"object\\"==typeof t}var se=d,ue=O;var j=function(t){return ue(t)&&\\"[object Arguments]\\"==se(t)},de=O,x=Object.prototype,le=x.hasOwnProperty,fe=x.propertyIsEnumerable,x=j(function(){return arguments}())?j:function(t){return de(t)&&le.call(t,\\"callee\\")&&!fe.call(t,\\"callee\\")},j=Array.isArray;function pe(t){return\\"number\\"==typeof t&&-1<t&&t%1==0&&t<=9007199254740991}var he=f,ge=pe;function S(t){return null!=t&&ge(t.length)&&!he(t)}var ve=S,ye=O;function we(t){return ye(t)&&ve(t)}var me={exports:{}};P=(P=(I=me).exports)&&!P.nodeType&&P,k=(k=P&&I&&!I.nodeType&&I)&&k.exports===P?a.Buffer:void 0,P=k?k.isBuffer:void 0,I.exports=P||function(){return!1};var be=d,_e=_,Oe=O,a=Function.prototype,k=Object.prototype,je=a.toString,xe=k.hasOwnProperty,Se=je.call(Object);function ke(t){return!(!Oe(t)||\\"[object Object]\\"!=be(t))&&(null===(t=_e(t))||\\"function\\"==typeof(t=xe.call(t,\\"constructor\\")&&t.constructor)&&t instanceof t&&je.call(t)==Se)}var Ae=d,Ee=pe,Te=O,A={};A[\\"[object Float32Array]\\"]=A[\\"[object Float64Array]\\"]=A[\\"[object Int8Array]\\"]=A[\\"[object Int16Array]\\"]=A[\\"[object Int32Array]\\"]=A[\\"[object Uint8Array]\\"]=A[\\"[object Uint8ClampedArray]\\"]=A[\\"[object Uint16Array]\\"]=A[\\"[object Uint32Array]\\"]=!0,A[\\"[object Arguments]\\"]=A[\\"[object Array]\\"]=A[\\"[object ArrayBuffer]\\"]=A[\\"[object Boolean]\\"]=A[\\"[object DataView]\\"]=A[\\"[object Date]\\"]=A[\\"[object Error]\\"]=A[\\"[object Function]\\"]=A[\\"[object Map]\\"]=A[\\"[object Number]\\"]=A[\\"[object Object]\\"]=A[\\"[object RegExp]\\"]=A[\\"[object Set]\\"]=A[\\"[object String]\\"]=A[\\"[object WeakMap]\\"]=!1;function Ie(t){return Te(t)&&Ee(t.length)&&!!A[Ae(t)]}function Pe(e){return function(t){return e(t)}}var E,T,I={exports:{}},a=(_=(_=(P=I).exports)&&!_.nodeType&&_,E=_&&P&&!P.nodeType&&P,T=E&&E.exports===_&&e.process,_=function(){try{var t=E&&E.require&&E.require(\\"util\\").types;return t?t:T&&T.binding&&T.binding(\\"util\\")}catch(t){}}(),P.exports=_,Ie),k=Pe,e=I.exports,P=e&&e.isTypedArray,_=P?k(P):a;function Re(t,e){if((\\"constructor\\"!==e||\\"function\\"!=typeof t[e])&&\\"__proto__\\"!=e)return t[e]}var Me=w,Le=n,Be=Object.prototype.hasOwnProperty;var qe=function(t,e,n){var r=t[e];Be.call(t,e)&&Le(r,n)&&(void 0!==n||e in t)||Me(t,e,n)},Ce=w;var De=/^(?:0|[1-9]\\\\d*)$/;function Xe(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&(\\"number\\"==n||\\"symbol\\"!=n&&De.test(t))&&-1<t&&t%1==0&&t<e}var Ne=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r},ze=x,Fe=j,He=me.exports,Ue=Xe,We=_,Je=Object.prototype.hasOwnProperty;var Ge=l,$e=re,Ve=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e},Qe=Object.prototype.hasOwnProperty;var Ke=function(t,e){var n,r=Fe(t),o=!r&&ze(t),i=!r&&!o&&He(t),a=!r&&!o&&!i&&We(t),c=r||o||i||a,s=c?Ne(t.length,String):[],u=s.length;for(n in t)!e&&!Je.call(t,n)||c&&(\\"length\\"==n||i&&(\\"offset\\"==n||\\"parent\\"==n)||a&&(\\"buffer\\"==n||\\"byteLength\\"==n||\\"byteOffset\\"==n)||Ue(n,u))||s.push(n);return s},Ye=function(t){if(!Ge(t))return Ve(t);var e,n=$e(t),r=[];for(e in t)(\\"constructor\\"!=e||!n&&Qe.call(t,e))&&r.push(e);return r},Ze=S;function tn(t){return Ze(t)?Ke(t,!0):Ye(t)}var en=function(t,e,n,r){for(var o=!n,i=(n=n||{},-1),a=e.length;++i<a;){var c=e[i],s=r?r(n[c],t[c],c,n,t):void 0;void 0===s&&(s=t[c]),(o?Ce:qe)(n,c,s)}return n},nn=tn;var rn=$t,on=Vt.exports,an=Yt,cn=Zt,sn=ce,un=x,dn=j,ln=we,fn=me.exports,pn=f,hn=l,gn=ke,vn=_,yn=Re,wn=function(t){return en(t,nn(t))};var mn=c,bn=$t,_n=i,On=function(t,e,n,r,o,i,a){var c,s,u,d=yn(t,n),l=yn(e,n),f=a.get(l);f||((e=void 0===(f=i?i(d,l,n+\\"\\",t,e,a):void 0))&&(s=!(c=dn(l))&&fn(l),u=!c&&!s&&vn(l),f=l,c||s||u?f=dn(d)?d:ln(d)?cn(d):s?on(l,!(e=!1)):u?an(l,!(e=!1)):[]:gn(l)||un(l)?un(f=d)?f=wn(d):hn(d)&&!pn(d)||(f=sn(l)):e=!1),e&&(a.set(l,f),o(f,l,r,i,a),a.delete(l))),rn(t,n,f)},jn=l,xn=tn,Sn=Re;function kn(t){return t}var An=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)},En=Math.max;var Tn=function(t){return function(){return t}},In=s,Pn=Date.now;var I=function(n){var r=0,o=0;return function(){var t=Pn(),e=16-(t-o);if(o=t,0<e){if(800<=++r)return arguments[0]}else r=0;return n.apply(void 0,arguments)}}(In?function(t,e){return In(t,\\"toString\\",{configurable:!0,enumerable:!1,value:Tn(e),writable:!0})}:kn),Rn=kn,Mn=function(i,a,c){return a=En(void 0===a?i.length-1:a,0),function(){for(var t=arguments,e=-1,n=En(t.length-a,0),r=Array(n);++e<n;)r[e]=t[a+e];for(var e=-1,o=Array(a+1);++e<a;)o[e]=t[e];return o[a]=c(r),An(i,this,o)}},Ln=I;var Bn=n,qn=S,Cn=Xe,Dn=l;var Xn=function(t,e){return Ln(Mn(t,e,Rn),t+\\"\\")},Nn=function(t,e,n){if(!Dn(n))return!1;var r=typeof e;return!!(\\"number\\"==r?qn(n)&&Cn(e,n.length):\\"string\\"==r&&e in n)&&Bn(n[e],t)};var zn=function r(o,i,a,c,s){o!==i&&_n(i,function(t,e){var n;s=s||new mn,jn(t)?On(o,i,e,a,r,c,s):(n=c?c(Sn(o,e),t,e+\\"\\",o,i,s):void 0,bn(o,e,n=void 0===n?t:n))},xn)},Fn=function(c){return Xn(function(t,e){var n=-1,r=e.length,o=1<r?e[r-1]:void 0,i=2<r?e[2]:void 0,o=3<c.length&&\\"function\\"==typeof o?(r--,o):void 0;for(i&&Nn(e[0],e[1],i)&&(o=r<3?void 0:o,r=1),t=Object(t);++n<r;){var a=e[n];a&&c(t,a,n,o)}return t})}(function(t,e,n){zn(t,e,n)}),Hn=\\"1.0.3\\",Un=((new Date).getTime(),(new Date).getFullYear(),{larkNotice:{open:!0,url:\\"https://www.tobetter.org.cn/apife/api/report\\",key:\\"\u3010FE_LOG\u3011\\",webhookKey:\\"d4ea43c198e2\\",webhook:\\"d4ea43c198e2\\"},url:\\"https://www.tobetter.org.cn/apife/api/report\\",open:!0,switch:{timing:!0,windowError:!0,unhandledrejection:!0,mock:!1,showLog:!1,debug:!1,checkProjectVersion:!1},sendType:\\"ajax\\",timeout:3e3,callback:function(){},imgUseCrossOrigin:!1,commonData:{}}),R={};function Wn(){return(1e7*Math.random()).toString(16).substr(0,4)+\\"-\\"+(new Date).getTime()+\\"-\\"+Math.random().toString().substr(2,5)}function Jn(t){return null!=t&&\\"[object Object]\\"===Gn.call(t)}var e=Array.isArray,k=Object.prototype,Gn=k.toString,P=Array.prototype,$n=P.forEach,Vn=P.slice,Qn=k.hasOwnProperty,Kn=e||function(t){return\\"[object Array]\\"===Gn.call(t)};function Yn(){var t=!1;if(\\"object\\"!=typeof navigator||\\"function\\"!=typeof navigator.sendBeacon)return t;e={},n=navigator.userAgent.toLowerCase(),(r=n.match(/opera.([\\\\d.]+)/))?e.opera=Number(r[1].split(\\".\\")[0]):(r=n.match(/msie ([\\\\d.]+)/))?e.ie=Number(r[1].split(\\".\\")[0]):(r=n.match(/edge.([\\\\d.]+)/))?e.edge=Number(r[1].split(\\".\\")[0]):(r=n.match(/firefox\\\\/([\\\\d.]+)/))?e.firefox=Number(r[1].split(\\".\\")[0]):(r=n.match(/chrome\\\\/([\\\\d.]+)/))?e.chrome=Number(r[1].split(\\".\\")[0]):(r=n.match(/version\\\\/([\\\\d.]+).*safari/))?e.safari=Number(r[1].match(/^\\\\d*.\\\\d*/)):(r=n.match(/trident\\\\/([\\\\d.]+)/))&&(e.ie=11);var e,n=e,r=navigator.userAgent.toLowerCase();return/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)?(e=(r.match(/os [\\\\d._]*/gi)+\\"\\").replace(/[^0-9|]/gi,\\"\\").replace(/_/gi,\\".\\").split(\\".\\"),void 0===n.safari&&(n.safari=e[0]),e[0]&&e[0]<13?(41<n.chrome||30<n.firefox||25<n.opera||12<n.safari)&&(t=!0):(41<n.chrome||30<n.firefox||25<n.opera||11.3<n.safari)&&(t=!0)):(38<n.chrome||13<n.edge||30<n.firefox||25<n.opera||11<n.safari)&&(t=!0),t}function Zn(){var e,t=\\"felogsdk_session-storage-support\\";try{e=!(!sessionStorage||!sessionStorage.setItem)&&(sessionStorage.setItem(t,\\"testIsSupportStorage\\"),sessionStorage.removeItem(t),!0)}catch(t){e=!1}return e}function M(){if((Zn()&&\\"true\\"===sessionStorage.getItem(\\"felogsdk_debug\\")||R.switch.showLog)&&(!Jn(arguments[0])||!0!==R.switch.showLog&&\\"string\\"!==R.switch.showLog&&!1!==R.switch.showLog||(arguments[0]=function(e){try{return JSON.stringify(e,null,\\"  \\")}catch(t){return JSON.stringify(e)}}(arguments[0])),\\"object\\"==typeof console&&console.log))try{console.log.apply(console,arguments)}catch(t){console.log(arguments[0])}}var tr={};function er(t,e,n){if(null!=t)if($n&&t.forEach===$n)t.forEach(e,n);else if(Kn(t)&&t.length===+t.length){for(var r=0,o=t.length;r<o;r++)if(r in t&&e.call(n,t[r],r,t)===tr)return}else for(var i in t)if(Qn.call(t,i)&&e.call(n,t[i],i,t)===tr)return}function nr(t){function e(t){if(!t)return\\"\\";try{return JSON.parse(t)}catch(t){return{}}}t.timeout=t.timeout||2e4,t.credentials=void 0===t.credentials||t.credentials;var n=function(t){if(t)return void 0!==window.XMLHttpRequest&&\\"withCredentials\\"in new XMLHttpRequest?new XMLHttpRequest:void 0!==window.XDomainRequest?new window.XDomainRequest:null;if(void 0!==window.XMLHttpRequest)return new XMLHttpRequest;if(window.ActiveXObject)try{return new window.ActiveXObject(\\"Msxml2.XMLHTTP\\")}catch(t){try{return new window.ActiveXObject(\\"Microsoft.XMLHTTP\\")}catch(t){console.error(t)}}}(t.cors);if(n){t.type||(t.type=t.data?\\"POST\\":\\"GET\\");var r,o=(t=function(n){return er(Vn.call(arguments,1),function(t){for(var e in t)Qn.call(t,e)&&void 0!==t[e]&&(n[e]=t[e])}),n}({success:function(){},error:function(){}},t)).success,i=t.error;t.success=function(t){o(t),r&&(clearTimeout(r),r=null)},t.error=function(t){i(t),r&&(clearTimeout(r),r=null)},r=setTimeout(function(){try{Jn(n)&&n.abort&&n.abort()}catch(t){M(t)}r&&(clearTimeout(r),r=null,t.error&&t.error(),n.onreadystatechange=null,n.onload=null,n.onerror=null)},t.timeout),void 0!==window.XDomainRequest&&n instanceof window.XDomainRequest&&(n.onload=function(){t.success&&t.success(e(n.responseText)),n.onreadystatechange=null,n.onload=null,n.onerror=null},n.onerror=function(){t.error&&t.error(e(n.responseText),n.status),n.onreadystatechange=null,n.onerror=null,n.onload=null}),n.onreadystatechange=function(){try{4==n.readyState&&(200<=n.status&&n.status<300||304==n.status?t.success(e(n.responseText)):t.error(e(n.responseText),n.status),n.onreadystatechange=null,n.onload=null)}catch(t){n.onreadystatechange=null,n.onload=null}},n.open(t.type,t.url,!0);try{t.credentials&&(n.withCredentials=!0),Jn(t.header)&&er(t.header,function(t,e){n.setRequestHeader&&n.setRequestHeader(e,t)}),t.data&&(t.cors||n.setRequestHeader&&n.setRequestHeader(\\"X-Requested-With\\",\\"XMLHttpRequest\\"),\\"application/json\\"===t.contentType?n.setRequestHeader&&n.setRequestHeader(\\"Content-type\\",\\"application/json; charset=UTF-8\\"):n.setRequestHeader&&n.setRequestHeader(\\"Content-type\\",\\"application/x-www-form-urlencoded\\"))}catch(t){M(t)}n.send(t.data||null)}}function rr(){return function(){var e,t=\\"felogsdk_local-storage-support\\";try{e=!(!localStorage||!localStorage.setItem)&&(localStorage.setItem(t,\\"testIsSupportStorage\\"),localStorage.removeItem(t),!0)}catch(t){e=!1}return e}()?JSON.parse(JSON.stringify(localStorage)):{}}function or(t,n){var r,e,o;\\"performance\\"in window&&((r=performance&&performance.timing)&&(e=function(){var t={},e={t_l:r.loadEventStart-r.fetchStart,t_tti:r.domInteractive-r.fetchStart,t_fpt:r.responseEnd-r.fetchStart},t=Object.assign({},t,e);n(t)},o=window.onload,\\"function\\"!=typeof window.onload?window.onload=e:window.onload=function(){o(),e()}))}var ir=function(t){M(\\"encodeTrackDataFn data:\\"),M(t);t=function(e){var n=\\"\\";try{n=btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,function(t,e){return String.fromCharCode(\\"0x\\"+e)}))}catch(t){n=e}return n}(JSON.stringify(t));return\\"data=\\"+encodeURIComponent(t)};function ar(t){t={config:{larkNotice:t.config.larkNotice,mock:t.config.switch.mock},data:t.data};return ir(t)}var L=function(t){var e;this.callback=t.config.callback,this.img=document.createElement(\\"img\\"),this.img.width=1,this.img.height=1,t.config.imgUseCrossOrigin&&(this.img.crossOrigin=\\"anonymous\\"),this.data=t.data,this.server_url=(e=t.config.url,t=ar(t=t),-1!==e.indexOf(\\"?\\")?e+\\"&\\"+t:e+\\"?\\"+t)},cr=(L.prototype.start=function(){this.img.src=this.server_url},L.prototype.lastClear=function(){this.img.src=\\"\\"},function(t){this.callback=t.config.callback,this.server_url=t.config.url,this.timeout=t.config.timeout,this.data=ar(t)}),sr=(cr.prototype.start=function(){var t=this;nr({url:this.server_url,type:\\"POST\\",data:this.data,credentials:!1,timeout:this.timeout,cors:!0,success:function(){t.isEnd()},error:function(){t.isEnd()}})},function(t){this.callback=t.config.callback,this.server_url=t.config.url,this.data=ar(t)});function ur(t){switch(M(\\"getSender option:\\"),M(t),function(t){var e=Un.sendType;t.config&&[\\"image\\",\\"ajax\\",\\"beacon\\"].includes(t.config.sendType)&&(e=t.config.sendType);(\\"beacon\\"!==e||Yn())&&(\\"ajax\\"!==e||void 0!==window.XMLHttpRequest&&(\\"withCredentials\\"in new XMLHttpRequest||void 0!==window.XDomainRequest))||(e=\\"image\\");return e}(t)){case\\"image\\":return new L(t);case\\"ajax\\":return new cr(t);case\\"beacon\\":return new sr(t);default:return new L(t)}}sr.prototype.start=function(){var t=this;\\"object\\"==typeof navigator&&\\"function\\"==typeof navigator.sendBeacon&&navigator.sendBeacon(this.server_url,this.data),setTimeout(function(){t.isEnd()},40)};var dr={};function B(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:\\"FE_LOG\\",e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};try{!function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};M(\\"feLogSdk send data:\\"),M(t),R.open&&dr.realtimeSend({config:R,data:t})}({en:t,bd:C({},e),cd:lr()})}catch(t){console.error(t)}}dr.queue={items:[],enqueue:function(t){this.items.push(t),this.start()},dequeue:function(){return this.items.shift()},getCurrentItem:function(){return this.items[0]},isRun:!1,start:function(){0<this.items.length&&!this.isRun&&(this.isRun=!0,this.getCurrentItem().start())},close:function(){this.dequeue(),this.isRun=!1,this.start()}},dr.realtimeSend=function(t){var e,n;e=t,M(\\"getRealtimeInstance option:\\"),M(e),t=ur(e),n=t.start,t.start=function(){var t=this;n.apply(this,arguments),setTimeout(function(){t.isEnd(!0)},e.config.timeout)},t.end=function(){this.callback&&this.callback()},t.isEnd=function(){this.received||(this.received=!0,this.end())},t.start()};function lr(){var t,e=(new Date).getTime().toString();return C({tid:function(){try{var t=window.sessionStorage,e=t.getItem(\\"felogsdk_tid\\");return e||(e=Wn(),t.setItem(\\"felogsdk_tid\\",e),e)}catch(t){return\\"\\"}}()||Wn(),t:e,p:navigator.platform,ov:-1<(e=navigator.userAgent).indexOf(\\"Mac OS X\\")?\\"IOS\\"+(e.match(/OS [\\\\d._]*/gi)+\\"\\").replace(/[^0-9|_.]/gi,\\"\\").replace(/_/gi,\\".\\"):-1<e.indexOf(\\"Android\\")||-1<e.indexOf(\\"Linux\\")?\\"Android\\"+e.substr(e.indexOf(\\"Android\\")+8,e.indexOf(\\";\\",e.indexOf(\\"Android\\"))-e.indexOf(\\"Android\\")-8):-1<e.indexOf(\\"BB10\\")?\\"blackberry\\"+e.substr(e.indexOf(\\"BB10\\")+5,e.indexOf(\\";\\",e.indexOf(\\"BB10\\"))-e.indexOf(\\"BB10\\")-5):-1<e.indexOf(\\"IEMobile\\")?\\"winphone\\"+e.substr(e.indexOf(\\"IEMobile\\")+9,e.indexOf(\\";\\",e.indexOf(\\"IEMobile\\"))-e.indexOf(\\"IEMobile\\")-9):-1<(e=navigator.userAgent.toLowerCase()).indexOf(\\"windows nt 5.0\\")?\\"Windows 2000\\":-1<e.indexOf(\\"windows nt 5.1\\")||-1<e.indexOf(\\"windows nt 5.2\\")?\\"Windows XP\\":-1<e.indexOf(\\"windows nt 6.0\\")?\\"Windows Vista\\":-1<e.indexOf(\\"windows nt 6.1\\")||-1<e.indexOf(\\"windows 7\\")?\\"Windows 7\\":-1<e.indexOf(\\"windows nt 6.2\\")||-1<e.indexOf(\\"windows 8\\")?\\"Windows 8\\":-1<e.indexOf(\\"windows nt 6.3\\")?\\"Windows 8.1\\":-1<e.indexOf(\\"windows nt 6.2\\")||-1<e.indexOf(\\"windows nt 10.0\\")?\\"Windows 10\\":\\"Unknown\\",l:navigator.language||navigator.browserLanguage,did:(e=window.localStorage,(t=e.getItem(\\"felogsdk_did\\"))||(t=Wn(),e.setItem(\\"felogsdk_did\\",t),t)),dsc:window.screen.width+\\"x\\"+window.screen.height,dcwh:(window.innerWidth||document.documentElement.clientWidth)+\\"x\\"+(window.innerHeight||document.documentElement.clientHeight),if:window.self!==window.top,ph:window.self!==window.top?encodeURIComponent(window.top.location.href):\\"\\",im:!!navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i),h:encodeURIComponent(window.location.href),pn:location.pathname,hn:window.location.hostname,b:function(){var t,e=navigator.userAgent.toLowerCase(),n=null,r={IE:window.ActiveXObject||\\"ActiveXObject\\"in window,Chrome:-1<e.indexOf(\\"chrome\\")&&-1<e.indexOf(\\"safari\\"),Firefox:-1<e.indexOf(\\"firefox\\"),Opera:-1<e.indexOf(\\"opera\\"),Safari:-1<e.indexOf(\\"safari\\")&&-1===e.indexOf(\\"chrome\\"),Edge:-1<e.indexOf(\\"edge\\"),QQBrowser:/qqbrowser/.test(e),WeixinBrowser:/MicroMessenger/i.test(e)};for(t in r)r[t]&&(n=t);return n}(),os:function(){var t,e=\\"\\",n={},r=navigator.userAgent.toLowerCase();for(t in n.Windows=\\"Win32\\"===navigator.platform||\\"Windows\\"===navigator.platform,n.Mac=\\"Mac68K\\"===navigator.platform||\\"MacPPC\\"===navigator.platform||\\"Macintosh\\"===navigator.platform||\\"MacIntel\\"===navigator.platform,n.iphone=-1<r.indexOf(\\"iphone\\"),n.ipod=-1<r.indexOf(\\"ipod\\"),n.ipad=-1<r.indexOf(\\"ipad\\"),n.Android=-1<r.indexOf(\\"android\\"),n)n[t]&&(e=t);return e}(),ua:navigator.userAgent,sdk:{v:Hn,bt:1659014536455},ref:encodeURIComponent(document.referrer),ss:Zn()?JSON.parse(JSON.stringify(sessionStorage)):{},ls:rr(),ck:document.cookie},R.commonData||{})}function fr(){\\"image\\"!==(R=Fn({},Un,0<arguments.length&&void 0!==arguments[0]?arguments[0]:{})).sendType&&\\"ajax\\"!==R.sendType&&\\"beacon\\"!==R.sendType&&(R.sendType=\\"image\\")}function pr(t){!function(t){R.commonData=Fn({},R.commonData,0<arguments.length&&void 0!==t?t:{})}(t)}return t.init=function(){var e,n,{config:t={},callback:r=null,commonData:o={}}=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(fr(t),pr(o||{}),R.switch.timing&&or(0,function(t){B(\\"FE_TIMING\\",t)}),R.switch.windowError&&(e=function(t){B(\\"FE_JS_ERROR\\",t)},window.addEventListener(\\"error\\",function(t){t={eventType:\\"window_onerror\\",err_message:t.message,err_lineno:t.lineno,err_colno:t.colno,err_stack:t.error.stack,err_filename:t.filename,err_type:t.type};e&&e(t)})),R.switch.unhandledrejection&&(n=function(t){B(\\"FE_JS_ERROR\\",t)},window.addEventListener(\\"unhandledrejection\\",t=>{t={eventType:\\"unhandledrejection\\",err_type:t.type||\\"unhandledrejection\\",err_reason:t.reason};n&&n(t)})),R.switch.checkProjectVersion)try{document.body.addEventListener(\\"click\\",function(){var n,r,o=\\"felogsdk_\\"+location.hostname+\\"_feprojectversion\\",i=localStorage.getItem(o);return n=function(t){var e;i?i&&t&&(i!==t?document.getElementById(o)||((e=document.createElement(\\"div\\")).textContent=\\"\u9875\u9762\u6709\u66F4\u65B0\uFF0C\u8BF7\u70B9\u51FB\u5237\u65B0\\",e.style=\\"cursor: pointer;z-index:99999999;padding:5px;border-radius:5px;position: fixed; bottom: 20px; right: 5px; font-size: 12px;background-color: black;color: red;\\",e.id=o,document.body.appendChild(e),document.getElementById(o).addEventListener(\\"click\\",function(){console.log(\\"page reload...\\"),document.body.remove(document.getElementById(o)),localStorage.setItem(o,t),location.reload()})):(localStorage.setItem(o,t),document.getElementById(o)&&(document.getElementById(o).removeEventListener(\\"click\\"),document.body.remove(document.getElementById(o))))):localStorage.setItem(o,t)},(r=new XMLHttpRequest).open(\\"GET\\",location.origin+\\"/version/index.json?t=\\"+(new Date).getTime(),!0),r.send(),!(r.onreadystatechange=function(){if(4===r.readyState&&200===r.status){var t,e=r.responseText;try{e&&JSON.parse(e)&&(t=JSON.parse(e).version,n(t))}catch(t){console.log(t)}}})})}catch(t){console.error(\\"checkProjectVersion error:\\"+t)}r&&r()},t.report=B,t.setBZCommonData=pr,t.setConfig=fr,Object.defineProperty(t,\\"__esModule\\",{value:!0}),t}({});\\n"],["script",{},"window.felogsdk && window.felogsdk.init()\\n"]],"themeConfig":{"logo":"/img/logo-share-dark.svg","logoDark":"/img/logo-share.svg","logoText":"ShineRay","socialLinks":[{"icon":"github","link":"https://github.com/mshineray/"}],"nav":[{"text":"Space","activeMatch":"^/(image-notes|www-notes|read-notes|guide|style-guide|cookbook|examples)/","items":[{"text":"Read Notes","link":"/read-notes/"},{"text":"Image Notes","link":"/image-notes/"},{"text":"Work Notes","link":"/work-notes/"},{"text":"WWW Notes","link":"/www-notes/"}]}],"sidebar":{"/read-notes/":[{"text":"Read Notes","items":[{"text":"Book List","link":"/read-notes/"},{"text":"\u5E73\u5747\u5206","link":"/read-notes/weread/pingjunfen"},{"text":"\u6C38\u4E45\u8BB0\u5F55","link":"/read-notes/weread/yongjiujilu"},{"text":"\u4EBA\u751F\u5982\u6211","link":"/read-notes/weread/renshengyouwo"},{"text":"\u5BCC\u5170\u514B\u6797\u81EA\u4F20","link":"/read-notes/weread/fulankelinzichuan"},{"text":"\u97ED\u83DC\u7684\u81EA\u6211\u4FEE\u517B","link":"/read-notes/weread/jiucaideziwoxiuyang"},{"text":"\u5927\u578B\u7F51\u7AD9\u6027\u80FD\u4F18\u5316\u5B9E\u6218\uFF1A\u4ECE\u524D\u7AEF\u3001\u7F51\u7EDC\u3001CDN\u5230\u540E\u7AEF\u3001\u5927\u4FC3\u7684\u5168\u94FE\u8DEF\u6027\u80FD\u4F18\u5316\u8BE6\u89E3","link":"/read-notes/weread/daxingwangzhanxingnengyouhuashizhan"},{"text":"\u4FDD\u6301\u9965\u6E34\uFF1A\u4E0D\u65AD\u83B7\u53D6\u65B0\u77E5\u8BC6\uFF0C\u5347\u7EA7\u5E95\u5C42\u64CD\u4F5C\u80FD\u529B","link":"/read-notes/weread/baochijike"},{"text":"\u5C0F\u72D7\u94B1\u94B12","link":"/read-notes/weread/xiaogouqianqian2"},{"text":"\u4E09\u5341\u5C81\uFF0C\u4E00\u5207\u521A\u521A\u5F00\u59CB","link":"/read-notes/weread/sanshisuiyiqieganggangkaishi"},{"text":"\u5FB7\u7C73\u5B89\uFF1A\u5F77\u5FA8\u5C11\u5E74\u65F6","link":"/read-notes/weread/demianpanghuangshaonianshi"},{"text":"\u5F71\u54CD\u4E16\u754C\u7684\u4E2D\u56FD\u690D\u7269","link":"/read-notes/weread/yingxiangshijiedezhongguozhiwu"},{"text":"\u95ED\u73AF\u601D\u7EF4","link":"/read-notes/weread/bihuansiwei"},{"text":"\u6211\u662F\u600E\u4E48\u5272\u97ED\u83DC\u7684\uFF1A\u4E00\u4E2A\u9A97\u5B50\u7684\u6094\u8FC7\u4E0E\u81EA\u767D","link":"/read-notes/weread/woshizenmogejiucaide"},{"text":"\u5B8B\u6C0F\u4E09\u59D0\u59B9","link":"/read-notes/weread/songshisanjiemei"},{"text":"\u597D\u70B9\u5B50\u90FD\u662F\u5077\u6765\u7684\uFF1A\u53F2\u4E0A\u6700\u611F\u6027\u768460\u5802\u521B\u65B0\u8BFE","link":"/read-notes/weread/haodianzidushitoulaide"},{"text":"\u738B\u6C38\u5E86\u5168\u4F20","link":"/read-notes/weread/wangyongqingquanchuan"},{"text":"Web\u5168\u6808\u5DE5\u7A0B\u5E08\u7684\u81EA\u6211\u4FEE\u517B","link":"/read-notes/weread/Webquanzhangongchengshideziwoxiuyang"},{"text":"\u5199\u7ED9\u6240\u6709\u4EBA\u7684\u7F16\u7A0B\u601D\u7EF4","link":"/read-notes/weread/xiegeisuoyourendebianchengsiwei"},{"text":"\u524D\u7AEF\u5DE5\u7A0B\u5316\uFF1A\u4F53\u7CFB\u8BBE\u8BA1\u4E0E\u5B9E\u8DF5","link":"/read-notes/weread/qianduangongchenghuatixishejiyushijian"},{"text":"\u4EE3\u7801\u7CBE\u8FDB\u4E4B\u8DEF\uFF1A\u4ECE\u7801\u519C\u5230\u5DE5\u5320","link":"/read-notes/weread/daimajingjinzhilucongmanongdaogongjiang"},{"text":"\u4E00\u5F80\u65E0\u524D\uFF1A\u5C0F\u7C73\u5341\u5468\u5E74 \u96F7\u519B\u516C\u5F00\u6F14\u8BB2\u5168\u6587","link":"/read-notes/weread/yiwangwuqianxiaomishizhounian"},{"text":"\u534A\u5C0F\u65F6\u6F2B\u753B\u4E2D\u56FD\u54F2\u5B66\u53F2","link":"/read-notes/weread/banxiaoshimanhuazhongguozhexueshi"},{"text":"\u56FE\u8BF4\u4E16\u754C\u683C\u5C40","link":"/read-notes/weread/tushuoshijiegeju"},{"text":"\u5BCC\u4EBA\u7684\u903B\u8F91\uFF1A\u5982\u4F55\u521B\u9020\u8D22\u5BCC\uFF0C\u5982\u4F55\u4FDD\u6709\u8D22\u5BCC","link":"/read-notes/weread/furendeluojiruhechuangzaocaifu"},{"text":"\u534A\u5C0F\u65F6\u6F2B\u753B\u7ECF\u6D4E\u5B66\u7CFB\u5217\uFF08\u51714\u518C\uFF09\uFF08\u72EC\u5BB6\u5B9A\u5236\u7248\uFF09","link":"/read-notes/weread/banxiaoshimanhuajingjixuexilie"},{"text":"\u6211\u4E0D\u8981\u4F60\u6B7B\u4E8E\u4E00\u4E8B\u65E0\u6210\uFF1A\u7ED9\u5973\u513F\u768417\u5C01\u544A\u522B\u4FE1","link":"/read-notes/weread/wobuyaonisiyuyishiwuchenggeinverde17fenggaobiexin"},{"text":"\u625B\u4F4F\u5C31\u662F\u672C\u4E8B","link":"/read-notes/weread/kangzhujiushibenshi"},{"text":"GitHub\u5165\u95E8\u4E0E\u5B9E\u8DF5","link":"/read-notes/weread/githubrumenyushijian"},{"text":"\u65AD\u820D\u79BB","link":"/read-notes/weread/duansheli"},{"text":"\u5BCC\u7238\u723821\u4E16\u7EAA\u7684\u751F\u610F","link":"/read-notes/weread/fubaba21shijideshengyi"},{"text":"\u667A\u80FD\u4E3B\u4E49\uFF1A\u672A\u6765\u5546\u4E1A\u4E0E\u793E\u4F1A\u7684\u65B0\u751F\u6001","link":"/read-notes/weread/zhinengzhuyiweilaishangyeyushehuidexinshengtai"},{"text":"\u5E78\u798F\u4E86\u5417\uFF1F","link":"/read-notes/weread/xingfulema"},{"text":"\u6D41\u8840\u7684\u80A1\u5E02","link":"/read-notes/weread/liuxiedegushi"},{"text":"\u667A\u80FD\u5316\u6D6A\u6F6E\uFF1A\u6B63\u5728\u7206\u53D1\u7684\u7B2C\u56DB\u6B21\u5DE5\u4E1A\u9769\u547D","link":"/read-notes/weread/zhinenghualangchaozhengzaibaofadedisicigongyegeming"},{"text":"\u8BA9\u65F6\u95F4\u966A\u4F60\u6162\u6162\u53D8\u5BCC","link":"/read-notes/weread/rangshijianpeinimanmanbianfu"},{"text":"\u8F93\u8D62","link":"/read-notes/weread/shuying"},{"text":"\u8C37\u6B4C\u7684\u6545\u4E8B","link":"/read-notes/weread/gugedegushi"},{"text":"\u6C83\u5179\u4F20\uFF1A\u4E0E\u82F9\u679C\u4E00\u8D77\u75AF\u72C2","link":"/read-notes/weread/wozichuanyupingguoyiqifengkuang"},{"text":"\u603B\u88C1\u768466\u6761\u5546\u4E1A\u601D\u7EF4","link":"/read-notes/weread/zongcaide66tiaoshangyesiwei"},{"text":"Web\u6D4B\u8BD5\u56E7\u4E8B","link":"/read-notes/weread/Webceshijiongshi"},{"text":"UI\u8BBE\u8BA1\u7CBE\u54C1\u5FC5\u4FEE\u8BFE","link":"/read-notes/weread/UIshejijingpinbixiuke"}]},{"text":"\u77E5\u7FA4","items":[{"text":"\u53CA\u65F6\u51C6\u786E\u7684\u4F20\u8FBE\u9700\u6C42","link":"/read-notes/zhiqun/jishizhunquedechuandaxuqiu"},{"text":"\u6570\u636E\u5206\u67904\u6B65\u8D70","link":"/read-notes/zhiqun/shujufenxisibuzou"},{"text":"\u7B80\u5386\u63D0\u5347\u9762\u8BD5\u9080\u7EA6\u7387","link":"/read-notes/zhiqun/jianlitishengyaoyuelv"},{"text":"\u4F5C\u54C1\u96C6","link":"/read-notes/zhiqun/zuopinji"}]},{"text":"\u94FE\u63A5","items":[{"text":"Image Notes","link":"/image-notes/"},{"text":"WWW Notes","link":"/www-notes/"},{"text":"Work Notes","link":"/work-notes/"}]}],"/image-notes/":[{"text":"\u77E5\u7FA4","items":[{"text":"Image List","link":"/image-notes/"}]},{"text":"\u94FE\u63A5","items":[{"text":"Read Notes","link":"/read-notes/"},{"text":"WWW Notes","link":"/www-notes/"},{"text":"Work Notes","link":"/work-notes/"}]}],"/work-notes/":[{"text":"Work Notes","items":[{"text":"\u5DE5\u4F5C\u53F0","link":"/work-notes/"}]},{"text":"\u57CB\u70B9","items":[{"text":"Log List","link":"/work-notes/log"}]},{"text":"\u94FE\u63A5","items":[{"text":"Read Notes","link":"/read-notes/"},{"text":"WWW Notes","link":"/www-notes/"},{"text":"Image Notes","link":"/image-notes/"}]}],"/www-notes/":[{"text":"WWW Notes","items":[{"text":"www list","link":"/www-notes/"}]},{"text":"\u94FE\u63A5","items":[{"text":"Read Notes","link":"/read-notes/"},{"text":"Work Notes","link":"/work-notes/"},{"text":"Image Notes","link":"/image-notes/"}]}]},"editLink":{"repo":"MShineRay/MShineRay.github.io","text":"Edit this page on GitHub"},"footer":{"license":{"text":"MIT License","link":"https://opensource.org/licenses/MIT"},"copyright":"Copyright \xA9 2022-now MShineRay"},"appearance":false},"locales":{},"langs":{}}`;
const EXTERNAL_URL_RE = /^https?:/i;
const inBrowser$1 = typeof window !== "undefined";
function findMatchRoot(route, roots) {
  roots.sort((a, b) => {
    const levelDelta = b.split("/").length - a.split("/").length;
    if (levelDelta !== 0) {
      return levelDelta;
    } else {
      return b.length - a.length;
    }
  });
  for (const r of roots) {
    if (route.startsWith(r))
      return r;
  }
}
function resolveLocales(locales, route) {
  const localeRoot = findMatchRoot(route, Object.keys(locales));
  return localeRoot ? locales[localeRoot] : void 0;
}
function createLangDictionary(siteData) {
  const { locales } = siteData.themeConfig || {};
  const siteLocales = siteData.locales;
  return locales && siteLocales ? Object.keys(locales).reduce((langs, path) => {
    langs[path] = {
      label: locales[path].label,
      lang: siteLocales[path].lang
    };
    return langs;
  }, {}) : {};
}
function resolveSiteDataByRoute(siteData, route) {
  route = cleanRoute(siteData, route);
  const localeData = resolveLocales(siteData.locales || {}, route);
  const localeThemeConfig = resolveLocales(siteData.themeConfig.locales || {}, route);
  return Object.assign({}, siteData, localeData, {
    themeConfig: Object.assign({}, siteData.themeConfig, localeThemeConfig, {
      locales: {}
    }),
    lang: (localeData || siteData).lang,
    locales: {},
    langs: createLangDictionary(siteData)
  });
}
function cleanRoute(siteData, route) {
  if (!inBrowser$1) {
    return route;
  }
  const base2 = siteData.base;
  const baseWithoutSuffix = base2.endsWith("/") ? base2.slice(0, -1) : base2;
  return route.slice(baseWithoutSuffix.length);
}
const dataSymbol = Symbol();
const siteDataRef = shallowRef(parse(serializedSiteData));
function parse(data) {
  return readonly(JSON.parse(data));
}
function initData(route) {
  const site = computed(() => resolveSiteDataByRoute(siteDataRef.value, route.path));
  return {
    site,
    theme: computed(() => site.value.themeConfig),
    page: computed(() => route.data),
    frontmatter: computed(() => route.data.frontmatter),
    lang: computed(() => site.value.lang),
    localePath: computed(() => {
      const { langs, lang } = site.value;
      const path = Object.keys(langs).find((langPath) => langs[langPath].lang === lang);
      return withBase(path || "/");
    }),
    title: computed(() => {
      return route.data.title ? route.data.title + " | " + site.value.title : site.value.title;
    }),
    description: computed(() => {
      return route.data.description || site.value.description;
    })
  };
}
function useData() {
  const data = inject(dataSymbol);
  if (!data) {
    throw new Error("vitepress data not properly injected in app");
  }
  return data;
}
function joinPath(base2, path) {
  return `${base2}${path}`.replace(/\/+/g, "/");
}
function withBase(path) {
  return EXTERNAL_URL_RE.test(path) ? path : joinPath(siteDataRef.value.base, path);
}
function pathToFile(path) {
  let pagePath = path.replace(/\.html$/, "");
  pagePath = decodeURIComponent(pagePath);
  if (pagePath.endsWith("/")) {
    pagePath += "index";
  }
  {
    if (inBrowser$1) {
      const base2 = "/";
      pagePath = pagePath.slice(base2.length).replace(/\//g, "_") + ".md";
      const pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      pagePath = `${base2}assets/${pagePath}.${pageHash}.js`;
    } else {
      pagePath = `./${pagePath.slice(1).replace(/\//g, "_")}.md.js`;
    }
  }
  return pagePath;
}
const RouterSymbol = Symbol();
const fakeHost = `http://a.com`;
const getDefaultRoute = () => ({
  path: "/",
  component: null,
  data: null
});
function createRouter(loadPageModule, fallbackComponent) {
  const route = reactive(getDefaultRoute());
  function go(href = inBrowser$1 ? location.href : "/") {
    const url = new URL(href, fakeHost);
    if (!url.pathname.endsWith("/") && !url.pathname.endsWith(".html")) {
      url.pathname += ".html";
      href = url.pathname + url.search + url.hash;
    }
    if (inBrowser$1) {
      history.replaceState({ scrollPosition: window.scrollY }, document.title);
      history.pushState(null, "", href);
    }
    return loadPage(href);
  }
  let latestPendingPath = null;
  async function loadPage(href, scrollPosition = 0) {
    const targetLoc = new URL(href, fakeHost);
    const pendingPath = latestPendingPath = targetLoc.pathname;
    try {
      let page = loadPageModule(pendingPath);
      if ("then" in page && typeof page.then === "function") {
        page = await page;
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        const { default: comp, __pageData } = page;
        if (!comp) {
          throw new Error(`Invalid route component: ${comp}`);
        }
        route.path = pendingPath;
        route.component = markRaw(comp);
        route.data = true ? markRaw(JSON.parse(__pageData)) : readonly(JSON.parse(__pageData));
        if (inBrowser$1) {
          nextTick(() => {
            if (targetLoc.hash && !scrollPosition) {
              let target = null;
              try {
                target = document.querySelector(decodeURIComponent(targetLoc.hash));
              } catch (e) {
                console.warn(e);
              }
              if (target) {
                scrollTo(target, targetLoc.hash);
                return;
              }
            }
            window.scrollTo(0, scrollPosition);
          });
        }
      }
    } catch (err) {
      if (!err.message.match(/fetch/)) {
        console.error(err);
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        route.path = pendingPath;
        route.component = fallbackComponent ? markRaw(fallbackComponent) : null;
      }
    }
  }
  if (inBrowser$1) {
    window.addEventListener("click", (e) => {
      const link2 = e.target.closest("a");
      if (link2) {
        const { href, protocol, hostname, pathname, hash, target } = link2;
        const currentUrl = window.location;
        const extMatch = pathname.match(/\.\w+$/);
        if (!e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey && target !== `_blank` && protocol === currentUrl.protocol && hostname === currentUrl.hostname && !(extMatch && extMatch[0] !== ".html")) {
          e.preventDefault();
          if (pathname === currentUrl.pathname) {
            if (hash && hash !== currentUrl.hash) {
              history.pushState(null, "", hash);
              window.dispatchEvent(new Event("hashchange"));
              scrollTo(link2, hash, link2.classList.contains("header-anchor"));
            }
          } else {
            go(href);
          }
        }
      }
    }, { capture: true });
    window.addEventListener("popstate", (e) => {
      loadPage(location.href, e.state && e.state.scrollPosition || 0);
    });
    window.addEventListener("hashchange", (e) => {
      e.preventDefault();
    });
  }
  return {
    route,
    go
  };
}
function useRouter() {
  const router = inject(RouterSymbol);
  if (!router) {
    throw new Error("useRouter() is called without provider.");
  }
  return router;
}
function useRoute() {
  return useRouter().route;
}
function scrollTo(el, hash, smooth = false) {
  let target = null;
  try {
    target = el.classList.contains(".header-anchor") ? el : document.querySelector(decodeURIComponent(hash));
  } catch (e) {
    console.warn(e);
  }
  if (target) {
    const targetTop = target.offsetTop;
    if (!smooth || Math.abs(targetTop - window.scrollY) > window.innerHeight) {
      window.scrollTo(0, targetTop);
    } else {
      window.scrollTo({
        left: 0,
        top: targetTop,
        behavior: "smooth"
      });
    }
  }
}
function useUpdateHead(route, siteDataByRouteRef) {
  let managedHeadTags = [];
  let isFirstUpdate = true;
  const updateHeadTags = (newTags) => {
    if (isFirstUpdate) {
      isFirstUpdate = false;
      return;
    }
    const newEls = [];
    const commonLength = Math.min(managedHeadTags.length, newTags.length);
    for (let i = 0; i < commonLength; i++) {
      let el = managedHeadTags[i];
      const [tag, attrs, innerHTML = ""] = newTags[i];
      if (el.tagName.toLocaleLowerCase() === tag) {
        for (const key in attrs) {
          if (el.getAttribute(key) !== attrs[key]) {
            el.setAttribute(key, attrs[key]);
          }
        }
        for (let i2 = 0; i2 < el.attributes.length; i2++) {
          const name = el.attributes[i2].name;
          if (!(name in attrs)) {
            el.removeAttribute(name);
          }
        }
        if (el.innerHTML !== innerHTML) {
          el.innerHTML = innerHTML;
        }
      } else {
        document.head.removeChild(el);
        el = createHeadElement(newTags[i]);
        document.head.append(el);
      }
      newEls.push(el);
    }
    managedHeadTags.slice(commonLength).forEach((el) => document.head.removeChild(el));
    newTags.slice(commonLength).forEach((headConfig) => {
      const el = createHeadElement(headConfig);
      document.head.appendChild(el);
      newEls.push(el);
    });
    managedHeadTags = newEls;
  };
  watchEffect(() => {
    const pageData = route.data;
    const siteData = siteDataByRouteRef.value;
    const pageTitle = pageData && pageData.title;
    const pageDescription = pageData && pageData.description;
    const frontmatterHead = pageData && pageData.frontmatter.head;
    document.title = (pageTitle ? pageTitle + ` | ` : ``) + siteData.title;
    document.querySelector(`meta[name=description]`).setAttribute("content", pageDescription || siteData.description);
    updateHeadTags([
      ...[],
      ...frontmatterHead ? filterOutHeadDescription(frontmatterHead) : []
    ]);
  });
}
function createHeadElement([tag, attrs, innerHTML]) {
  const el = document.createElement(tag);
  for (const key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
  if (innerHTML) {
    el.innerHTML = innerHTML;
  }
  return el;
}
function isMetaDescription(headConfig) {
  return headConfig[0] === "meta" && headConfig[1] && headConfig[1].name === "description";
}
function filterOutHeadDescription(head) {
  return head.filter((h2) => !isMetaDescription(h2));
}
const _sfc_main$Z = {};
const _hoisted_1$M = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
const _hoisted_2$D = /* @__PURE__ */ createBaseVNode("path", { d: "M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z" }, null, -1);
const _hoisted_3$t = /* @__PURE__ */ createBaseVNode("path", { d: "M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z" }, null, -1);
const _hoisted_4$c = /* @__PURE__ */ createBaseVNode("path", { d: "M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z" }, null, -1);
const _hoisted_5$9 = /* @__PURE__ */ createBaseVNode("path", { d: "M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z" }, null, -1);
const _hoisted_6$5 = [
  _hoisted_2$D,
  _hoisted_3$t,
  _hoisted_4$c,
  _hoisted_5$9
];
function _sfc_render$h(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$M, _hoisted_6$5);
}
var VTIconAlignLeft = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["render", _sfc_render$h]]);
const _sfc_main$Y = {};
const _hoisted_1$L = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
const _hoisted_2$C = /* @__PURE__ */ createBaseVNode("path", { d: "M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z" }, null, -1);
const _hoisted_3$s = [
  _hoisted_2$C
];
function _sfc_render$g(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$L, _hoisted_3$s);
}
var VTIconChevronDown = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["render", _sfc_render$g]]);
const _sfc_main$X = {};
const _hoisted_1$K = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
const _hoisted_2$B = /* @__PURE__ */ createBaseVNode("path", { d: "M15,19c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4l6-6c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4L10.4,12l5.3,5.3c0.4,0.4,0.4,1,0,1.4C15.5,18.9,15.3,19,15,19z" }, null, -1);
const _hoisted_3$r = [
  _hoisted_2$B
];
function _sfc_render$f(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$K, _hoisted_3$r);
}
var VTIconChevronLeft = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["render", _sfc_render$f]]);
const _sfc_main$W = {};
const _hoisted_1$J = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
const _hoisted_2$A = /* @__PURE__ */ createBaseVNode("path", { d: "M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z" }, null, -1);
const _hoisted_3$q = [
  _hoisted_2$A
];
function _sfc_render$e(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$J, _hoisted_3$q);
}
var VTIconChevronRight = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["render", _sfc_render$e]]);
const _sfc_main$V = {};
const _hoisted_1$I = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
const _hoisted_2$z = /* @__PURE__ */ createBaseVNode("path", { d: "M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.202 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z" }, null, -1);
const _hoisted_3$p = [
  _hoisted_2$z
];
function _sfc_render$d(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$I, _hoisted_3$p);
}
var VTIconDiscord = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["render", _sfc_render$d]]);
const _sfc_main$U = {};
const _hoisted_1$H = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  height: "24px",
  viewBox: "0 0 24 24",
  width: "24px"
};
const _hoisted_2$y = /* @__PURE__ */ createBaseVNode("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}, null, -1);
const _hoisted_3$o = /* @__PURE__ */ createBaseVNode("path", { d: "M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z" }, null, -1);
const _hoisted_4$b = [
  _hoisted_2$y,
  _hoisted_3$o
];
function _sfc_render$c(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$H, _hoisted_4$b);
}
var VTIconExternalLink = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["render", _sfc_render$c]]);
const _sfc_main$T = {};
const _hoisted_1$G = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
const _hoisted_2$x = /* @__PURE__ */ createBaseVNode("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" }, null, -1);
const _hoisted_3$n = [
  _hoisted_2$x
];
function _sfc_render$b(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$G, _hoisted_3$n);
}
var VTIconFacebook = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["render", _sfc_render$b]]);
const _sfc_main$S = {};
const _hoisted_1$F = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
const _hoisted_2$w = /* @__PURE__ */ createBaseVNode("path", { d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" }, null, -1);
const _hoisted_3$m = [
  _hoisted_2$w
];
function _sfc_render$a(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$F, _hoisted_3$m);
}
var VTIconGitHub = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["render", _sfc_render$a]]);
const _sfc_main$R = {};
const _hoisted_1$E = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
const _hoisted_2$v = /* @__PURE__ */ createBaseVNode("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}, null, -1);
const _hoisted_3$l = /* @__PURE__ */ createBaseVNode("path", {
  d: " M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ",
  class: "css-c4d79v"
}, null, -1);
const _hoisted_4$a = [
  _hoisted_2$v,
  _hoisted_3$l
];
function _sfc_render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$E, _hoisted_4$a);
}
var VTIconLanguages = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["render", _sfc_render$9]]);
const _sfc_main$Q = {};
const _hoisted_1$D = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
const _hoisted_2$u = /* @__PURE__ */ createBaseVNode("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" }, null, -1);
const _hoisted_3$k = [
  _hoisted_2$u
];
function _sfc_render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$D, _hoisted_3$k);
}
var VTIconLinkedIn = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["render", _sfc_render$8]]);
const _sfc_main$P = {};
const _hoisted_1$C = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
const _hoisted_2$t = /* @__PURE__ */ createBaseVNode("circle", {
  cx: "12",
  cy: "12",
  r: "2"
}, null, -1);
const _hoisted_3$j = /* @__PURE__ */ createBaseVNode("circle", {
  cx: "19",
  cy: "12",
  r: "2"
}, null, -1);
const _hoisted_4$9 = /* @__PURE__ */ createBaseVNode("circle", {
  cx: "5",
  cy: "12",
  r: "2"
}, null, -1);
const _hoisted_5$8 = [
  _hoisted_2$t,
  _hoisted_3$j,
  _hoisted_4$9
];
function _sfc_render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$C, _hoisted_5$8);
}
var VTIconMoreHorizontal = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["render", _sfc_render$7]]);
const _sfc_main$O = {};
const _hoisted_1$B = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
const _hoisted_2$s = /* @__PURE__ */ createBaseVNode("path", { d: "M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z" }, null, -1);
const _hoisted_3$i = [
  _hoisted_2$s
];
function _sfc_render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$B, _hoisted_3$i);
}
var VTIconMoon = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["render", _sfc_render$6]]);
const _sfc_main$N = {};
const _hoisted_1$A = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
const _hoisted_2$r = /* @__PURE__ */ createBaseVNode("path", { d: "M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z" }, null, -1);
const _hoisted_3$h = [
  _hoisted_2$r
];
function _sfc_render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$A, _hoisted_3$h);
}
var VTIconPlus = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["render", _sfc_render$5]]);
const _sfc_main$M = {};
const _hoisted_1$z = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
const _hoisted_2$q = /* @__PURE__ */ createBaseVNode("path", { d: "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" }, null, -1);
const _hoisted_3$g = [
  _hoisted_2$q
];
function _sfc_render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$z, _hoisted_3$g);
}
var VTIconSlack = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["render", _sfc_render$4]]);
const _sfc_main$L = {};
const _hoisted_1$y = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
const _hoisted_2$p = /* @__PURE__ */ createStaticVNode('<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>', 9);
const _hoisted_11 = [
  _hoisted_2$p
];
function _sfc_render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$y, _hoisted_11);
}
var VTIconSun = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["render", _sfc_render$3]]);
const _sfc_main$K = {};
const _hoisted_1$x = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
const _hoisted_2$o = /* @__PURE__ */ createBaseVNode("path", { d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" }, null, -1);
const _hoisted_3$f = [
  _hoisted_2$o
];
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$x, _hoisted_3$f);
}
var VTIconTwitter = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["render", _sfc_render$2]]);
const _sfc_main$J = {};
const _hoisted_1$w = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
};
const _hoisted_2$n = /* @__PURE__ */ createBaseVNode("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
}, null, -1);
const _hoisted_3$e = [
  _hoisted_2$n
];
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$w, _hoisted_3$e);
}
var VTIconEdit = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["render", _sfc_render$1]]);
const _hoisted_1$v = {
  key: 0,
  class: "vt-backdrop"
};
const _sfc_main$I = /* @__PURE__ */ defineComponent({
  props: {
    show: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: "fade" }, {
        default: withCtx(() => [
          __props.show ? (openBlock(), createElementBlock("div", _hoisted_1$v)) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
const focusedElement = ref();
let active = false;
let listeners = 0;
function useFocusContainer(options) {
  const containsFocus = ref(false);
  if (typeof window !== "undefined") {
    !active && activateFocusTracking();
    listeners++;
    const unwatch = watch(focusedElement, (el) => {
      var _a2, _b2, _c;
      if (el === options.elRef.value || ((_a2 = options.elRef.value) == null ? void 0 : _a2.contains(el))) {
        containsFocus.value = true;
        (_b2 = options.onFocus) == null ? void 0 : _b2.call(options);
      } else {
        containsFocus.value = false;
        (_c = options.onBlur) == null ? void 0 : _c.call(options);
      }
    });
    onUnmounted(() => {
      unwatch();
      listeners--;
      if (!listeners) {
        deactivateFocusTracking();
      }
    });
  }
  return readonly(containsFocus);
}
function activateFocusTracking() {
  document.addEventListener("focusin", handleFocusIn);
  active = true;
  focusedElement.value = document.activeElement;
}
function deactivateFocusTracking() {
  document.removeEventListener("focusin", handleFocusIn);
}
function handleFocusIn() {
  focusedElement.value = document.activeElement;
}
const _sfc_main$H = /* @__PURE__ */ defineComponent({
  props: {
    href: null,
    noIcon: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const isExternal2 = computed(() => props.href && /^[a-z]+:/i.test(props.href));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.href ? "a" : "span"), {
        class: normalizeClass(["vt-link", { link: __props.href }]),
        href: __props.href,
        target: unref(isExternal2) ? "_blank" : void 0,
        rel: unref(isExternal2) ? "noopener noreferrer" : void 0
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default"),
          unref(isExternal2) && !__props.noIcon ? (openBlock(), createBlock(VTIconExternalLink, {
            key: 0,
            class: "vt-link-icon"
          })) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["class", "href", "target", "rel"]);
    };
  }
});
const _sfc_main$G = /* @__PURE__ */ defineComponent({
  props: {
    item: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$H, {
        class: "vt-menu-link",
        href: __props.item.link
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(__props.item.text), 1)
        ]),
        _: 1
      }, 8, ["href"]);
    };
  }
});
const _hoisted_1$u = { class: "vt-menu-group" };
const _hoisted_2$m = {
  key: 0,
  class: "vt-menu-group-title"
};
const _sfc_main$F = /* @__PURE__ */ defineComponent({
  props: {
    text: null,
    items: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$u, [
        __props.text ? (openBlock(), createElementBlock("p", _hoisted_2$m, toDisplayString(__props.text), 1)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
          return openBlock(), createElementBlock(Fragment, null, [
            "link" in item ? (openBlock(), createBlock(_sfc_main$G, {
              key: 0,
              item
            }, null, 8, ["item"])) : createCommentVNode("", true)
          ], 64);
        }), 256))
      ]);
    };
  }
});
const _hoisted_1$t = { class: "vt-menu" };
const _hoisted_2$l = {
  key: 0,
  class: "vt-menu-items"
};
const _sfc_main$E = /* @__PURE__ */ defineComponent({
  props: {
    items: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$t, [
        __props.items ? (openBlock(), createElementBlock("div", _hoisted_2$l, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
            return openBlock(), createElementBlock(Fragment, {
              key: item.text
            }, [
              "link" in item ? (openBlock(), createBlock(_sfc_main$G, {
                key: 0,
                item
              }, null, 8, ["item"])) : (openBlock(), createBlock(_sfc_main$F, {
                key: 1,
                text: item.text,
                items: item.items
              }, null, 8, ["text", "items"]))
            ], 64);
          }), 128))
        ])) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
const _hoisted_1$s = ["aria-expanded", "aria-label"];
const _hoisted_2$k = {
  key: 0,
  class: "vt-flyout-button-text"
};
const _hoisted_3$d = { class: "vt-flyout-menu" };
const _sfc_main$D = /* @__PURE__ */ defineComponent({
  props: {
    button: null,
    items: null,
    label: null
  },
  setup(__props) {
    const props = __props;
    const open = ref(false);
    const elRef = ref();
    const onBlur = () => {
      open.value = false;
    };
    useFocusContainer({
      elRef,
      onBlur
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "vt-flyout",
        ref_key: "elRef",
        ref: elRef,
        onMouseenter: _cache[1] || (_cache[1] = ($event) => open.value = true),
        onMouseleave: _cache[2] || (_cache[2] = ($event) => open.value = false)
      }, [
        createBaseVNode("button", {
          type: "button",
          class: "vt-flyout-button",
          "aria-haspopup": "true",
          "aria-expanded": open.value,
          "aria-label": __props.label,
          onClick: _cache[0] || (_cache[0] = ($event) => open.value = !open.value)
        }, [
          props.button ? (openBlock(), createElementBlock("span", _hoisted_2$k, [
            createTextVNode(toDisplayString(props.button) + " ", 1),
            createVNode(VTIconChevronDown, { class: "vt-flyout-button-text-icon" })
          ])) : (openBlock(), createBlock(VTIconMoreHorizontal, {
            key: 1,
            class: "vt-flyout-button-icon"
          }))
        ], 8, _hoisted_1$s),
        createBaseVNode("div", _hoisted_3$d, [
          createVNode(_sfc_main$E, { items: __props.items }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default")
            ]),
            _: 3
          }, 8, ["items"])
        ])
      ], 544);
    };
  }
});
const _hoisted_1$r = ["aria-expanded"];
const _hoisted_2$j = /* @__PURE__ */ createBaseVNode("span", { class: "vt-hamburger-container" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "vt-hamburger-top" }),
  /* @__PURE__ */ createBaseVNode("span", { class: "vt-hamburger-middle" }),
  /* @__PURE__ */ createBaseVNode("span", { class: "vt-hamburger-bottom" })
], -1);
const _hoisted_3$c = [
  _hoisted_2$j
];
const _sfc_main$C = /* @__PURE__ */ defineComponent({
  props: {
    active: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: "button",
        class: normalizeClass(["vt-hamburger", { "is-active": __props.active }]),
        "aria-label": "mobile navigation",
        "aria-expanded": __props.active,
        "aria-controls": "VPNavScreen"
      }, _hoisted_3$c, 10, _hoisted_1$r);
    };
  }
});
const _hoisted_1$q = ["href", "title", "target"];
const _hoisted_2$i = { class: "visually-hidden" };
const _sfc_main$B = /* @__PURE__ */ defineComponent({
  props: {
    size: null,
    icon: null,
    link: null
  },
  setup(__props) {
    const props = __props;
    const target = /^[a-z]+:/i.test(props.link) ? `_blank` : void 0;
    const icons = {
      discord: VTIconDiscord,
      facebook: VTIconFacebook,
      github: VTIconGitHub,
      linkedin: VTIconLinkedIn,
      slack: VTIconSlack,
      twitter: VTIconTwitter,
      languages: VTIconLanguages
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        class: normalizeClass(["vt-social-link", {
          "is-small": __props.size === "small",
          "is-medium": __props.size === "medium"
        }]),
        href: __props.link,
        title: __props.icon,
        target: unref(target),
        rel: "noopener noreferrer"
      }, [
        (openBlock(), createBlock(resolveDynamicComponent(icons[__props.icon]), { class: "vt-social-link-icon" })),
        createBaseVNode("span", _hoisted_2$i, toDisplayString(__props.icon), 1)
      ], 10, _hoisted_1$q);
    };
  }
});
const _hoisted_1$p = { class: "vt-social-links" };
const _sfc_main$A = /* @__PURE__ */ defineComponent({
  props: {
    size: null,
    links: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$p, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.links, ({ link: link2, icon }) => {
          return openBlock(), createBlock(_sfc_main$B, {
            key: link2,
            size: __props.size,
            icon,
            link: link2
          }, null, 8, ["size", "icon", "link"]);
        }), 128))
      ]);
    };
  }
});
const _sfc_main$z = {};
const _hoisted_1$o = {
  class: "vt-switch",
  type: "button",
  role: "switch"
};
const _hoisted_2$h = { class: "vt-switch-check" };
const _hoisted_3$b = {
  key: 0,
  class: "vt-switch-icon"
};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("button", _hoisted_1$o, [
    createBaseVNode("span", _hoisted_2$h, [
      _ctx.$slots.default ? (openBlock(), createElementBlock("span", _hoisted_3$b, [
        renderSlot(_ctx.$slots, "default")
      ])) : createCommentVNode("", true)
    ])
  ]);
}
var VTSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render]]);
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const storageKey = "vue-theme-appearance";
    const toggle = typeof localStorage !== "undefined" ? useAppearance() : () => {
    };
    function useAppearance() {
      let userPreference = localStorage.getItem(storageKey) || "auto";
      const query = window.matchMedia(`(prefers-color-scheme: dark)`);
      const classList = document.documentElement.classList;
      let isDark = userPreference === "auto" ? query.matches : userPreference === "dark";
      const setClass = (dark) => classList[dark ? "add" : "remove"]("dark");
      query.onchange = (e) => {
        if (userPreference === "auto") {
          setClass(isDark = e.matches);
        }
      };
      const toggle2 = () => {
        setClass(isDark = !isDark);
        localStorage.setItem(storageKey, userPreference = isDark ? query.matches ? "auto" : "dark" : query.matches ? "light" : "auto");
      };
      return toggle2;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(VTSwitch, {
        class: "vt-switch-appearance",
        "aria-label": "toggle dark mode",
        onClick: unref(toggle)
      }, {
        default: withCtx(() => [
          createVNode(VTIconSun, { class: "vt-switch-appearance-sun" }),
          createVNode(VTIconMoon, { class: "vt-switch-appearance-moon" })
        ]),
        _: 1
      }, 8, ["onClick"]);
    };
  }
});
var index = /* @__PURE__ */ (() => `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
  margin: 0;
}

/**
 * Render the \`main\` element consistently in IE.
 */

main {
  display: block;
}

/**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
  border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    \`fieldset\` elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}

/**
 * Colors Base
 *
 * These are the pure base color presets. Most of the time, you should not be
 * using these colors directly in the theme but rather use "Colors Theme"
 * instead because those are "Theme (light or dark)" dependant.
 * -------------------------------------------------------------------------- */

:root {
  --vt-c-white: #ffffff;
  --vt-c-white-soft: #f9f9f9;
  --vt-c-white-mute: #f1f1f1;

  --vt-c-black: #1a1a1a;
  --vt-c-black-pure: #000000;
  --vt-c-black-soft: #242424;
  --vt-c-black-mute: #2f2f2f;

  --vt-c-indigo: #213547;
  --vt-c-indigo-soft: #476582;
  --vt-c-indigo-light: #aac8e4;

  --vt-c-gray: #8e8e8e;
  --vt-c-gray-light-1: #aeaeae;
  --vt-c-gray-light-2: #c7c7c7;
  --vt-c-gray-light-3: #d1d1d1;
  --vt-c-gray-light-4: #e5e5e5;
  --vt-c-gray-light-5: #f2f2f2;
  --vt-c-gray-dark-1: #636363;
  --vt-c-gray-dark-2: #484848;
  --vt-c-gray-dark-3: #3a3a3a;
  --vt-c-gray-dark-4: #282828;
  --vt-c-gray-dark-5: #202020;

  --vt-c-divider-light-1: rgba(60, 60, 60, 0.29);
  --vt-c-divider-light-2: rgba(60, 60, 60, 0.12);
  --vt-c-divider-dark-1: rgba(84, 84, 84, 0.65);
  --vt-c-divider-dark-2: rgba(84, 84, 84, 0.48);

  --vt-c-text-light-1: var(--vt-c-indigo);
  --vt-c-text-light-2: rgba(60, 60, 60, 0.70);
  --vt-c-text-light-3: rgba(60, 60, 60, 0.33);
  --vt-c-text-light-4: rgba(60, 60, 60, 0.18);
  --vt-c-text-light-code: var(--vt-c-indigo-soft);

  --vt-c-text-dark-1: rgba(255, 255, 255, 0.87);
  --vt-c-text-dark-2: rgba(235, 235, 235, 0.60);
  --vt-c-text-dark-3: rgba(235, 235, 235, 0.38);
  --vt-c-text-dark-4: rgba(235, 235, 235, 0.18);
  --vt-c-text-dark-code: var(--vt-c-indigo-light);

  --vt-c-green: #42b883;
  --vt-c-green-light: #42d392;
  --vt-c-green-lighter: #35eb9a;
  --vt-c-green-dark: #33a06f;
  --vt-c-green-darker: #155f3e;

  --vt-c-blue: #3b8eed;
  --vt-c-blue-light: #549ced;
  --vt-c-blue-lighter: #50a2ff;
  --vt-c-blue-dark: #3468a3;
  --vt-c-blue-darker: #255489;

  --vt-c-yellow: #ffc517;
  --vt-c-yellow-light: #ffe417;
  --vt-c-yellow-lighter: #ffff17;
  --vt-c-yellow-dark: #e0ad15;
  --vt-c-yellow-darker: #bc9112;

  --vt-c-red: #ed3c50;
  --vt-c-red-light: #f43771;
  --vt-c-red-lighter: #fd1d7c;
  --vt-c-red-dark: #cd2d3f;
  --vt-c-red-darker: #ab2131;

  --vt-c-purple: #de41e0;
  --vt-c-purple-light: #e936eb;
  --vt-c-purple-lighter: #f616f8;
  --vt-c-purple-dark: #823c83;
  --vt-c-purple-darker: #602960;
}

/**
 * Colors Theme
 * -------------------------------------------------------------------------- */

:root {
  --vt-c-bg: var(--vt-c-white);
  --vt-c-bg-soft: var(--vt-c-white-soft);
  --vt-c-bg-mute: var(--vt-c-white-mute);

  --vt-c-divider: var(--vt-c-divider-light-1);
  --vt-c-divider-light: var(--vt-c-divider-light-2);

  --vt-c-divider-inverse: var(--vt-c-divider-dark-1);
  --vt-c-divider-inverse-light: var(--vt-c-divider-dark-2);

  --vt-c-text-1: var(--vt-c-text-light-1);
  --vt-c-text-2: var(--vt-c-text-light-2);
  --vt-c-text-3: var(--vt-c-text-light-3);
  --vt-c-text-4: var(--vt-c-text-light-4);
  --vt-c-text-code: var(--vt-c-text-light-code);

  --vt-c-text-inverse-1: var(--vt-c-text-dark-1);
  --vt-c-text-inverse-2: var(--vt-c-text-dark-2);
  --vt-c-text-inverse-3: var(--vt-c-text-dark-3);
  --vt-c-text-inverse-4: var(--vt-c-text-dark-4);

  --vt-c-brand: var(--vt-c-green);
  --vt-c-brand-light: var(--vt-c-green-light);
  --vt-c-brand-dark: var(--vt-c-green-dark);
  --vt-c-brand-highlight: var(--vt-c-brand-dark);
}

.dark {
  --vt-c-bg: var(--vt-c-black);
  --vt-c-bg-soft: var(--vt-c-black-soft);
  --vt-c-bg-mute: var(--vt-c-black-mute);

  --vt-c-divider: var(--vt-c-divider-dark-1);
  --vt-c-divider-light: var(--vt-c-divider-dark-2);

  --vt-c-divider-inverse: var(--vt-c-divider-light-1);
  --vt-c-divider-inverse-light: var(--vt-c-divider-light-2);

  --vt-c-text-1: var(--vt-c-text-dark-1);
  --vt-c-text-2: var(--vt-c-text-dark-2);
  --vt-c-text-3: var(--vt-c-text-dark-3);
  --vt-c-text-4: var(--vt-c-text-dark-4);
  --vt-c-text-code: var(--vt-c-text-dark-code);

  --vt-c-text-inverse-1: var(--vt-c-text-light-1);
  --vt-c-text-inverse-2: var(--vt-c-text-light-2);
  --vt-c-text-inverse-3: var(--vt-c-text-light-3);
  --vt-c-text-inverse-4: var(--vt-c-text-light-4);

  --vt-c-brand-highlight: var(--vt-c-brand-light);
}

/**
 * Typography
 * -------------------------------------------------------------------------- */

:root {
  --vt-font-family-base: Inter, -apple-system,
    BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  --vt-font-family-mono: Menlo, Monaco, Consolas, 'Courier New', monospace;
}

/**
 * Shadows
 * -------------------------------------------------------------------------- */

:root {
  --vt-shadow-1: 0 1px 2px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06);
  --vt-shadow-2: 0 3px 12px rgba(0, 0, 0, 0.07), 0 1px 4px rgba(0, 0, 0, 0.07);
  --vt-shadow-3: 0 12px 32px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.08);
  --vt-shadow-4: 0 14px 44px rgba(0, 0, 0, 0.12), 0 3px 9px rgba(0, 0, 0, 0.12);
  --vt-shadow-5: 0 18px 56px rgba(0, 0, 0, 0.16), 0 4px 12px rgba(0, 0, 0, 0.16);
}

/**
 * Magic Numbers
 * -------------------------------------------------------------------------- */

:root {
  --vt-nav-height: 55px;
}

*,
::before,
::after {
  box-sizing: border-box;
}

body {
  width: 100%;
  min-width: 320px;
  min-height: 100vh;
  font-family: var(--vt-font-family-base);
  letter-spacing: .2px;
  line-height: 24px;
  font-size: 16px;
  font-weight: 400;
  color: var(--vt-c-text-1);
  background-color: var(--vt-c-bg);
  direction: ltr;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  transition: color .5s, background-color .5s;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/**
 * Avoid 300ms click delay on touch devices that support the \`touch-action\`
 * CSS property.
 *
 * In particular, unlike most other browsers, IE11+Edge on Windows 10 on
 * touch devices and IE Mobile 10-11 DON'T remove the click delay when
 * \`<meta name="viewport" content="width=device-width">\` is present.
 * However, they DO support removing the click delay via
 * \`touch-action: manipulation\`.
 *
 * See:
 * - http://v4-alpha.getbootstrap.com/content/reboot/#click-delay-optimization-for-touch
 * - http://caniuse.com/#feat=css-touch-action
 * - http://patrickhlauke.github.io/touch/tests/results/#suppressing-300ms-delay
 */

a,
area,
button,
[role="button"],
input,
label,
select,
summary,
textarea {
  touch-action: manipulation;
}

a {
  color: inherit;
  text-decoration: inherit;
}

ol,
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

pre,
code,
kbd,
samp {
  font-family: var(--vt-font-family-mono);
}

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  vertical-align: middle;
}

img,
video {
  max-width: 100%;
  height: auto;
}

button,
input,
optgroup,
select,
textarea {
  border: 0;
  padding: 0;
  line-height: inherit;
  color: inherit;
}

button {
  padding: 0;
  background-color: transparent;
  background-image: none;
}

button,
[role="button"] {
  cursor: pointer;
}

button:focus, button:focus-visible {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}

button:focus:not(:focus-visible) {
  outline: none !important;
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
}

table {
  border-collapse: collapse;
}

input {
  background-color: transparent;
}

input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  color: var(--vt-c-text-3);
}

input::-ms-input-placeholder,
textarea::-ms-input-placeholder {
  color: var(--vt-c-text-3);
}

input::placeholder,
textarea::placeholder {
  color: var(--vt-c-text-3);
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

textarea {
  resize: vertical;
}

select {
  -webkit-appearance: none;
}

fieldset {
  margin: 0;
  padding: 0;
}

.visually-hidden {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.vt-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, .6);
  transition: opacity .5s;
}

.vt-backdrop.fade-enter-from,
.vt-backdrop.fade-leave-to {
  opacity: 0;
}

.vt-backdrop.fade-leave-active {
  transition-duration: .3s;
}

@media (min-width: 960px) {
  .vt-backdrop {
    display: none;
  }
}

.vt-doc {
  font-size: 16px;
  line-height: 1.7;
}

.vt-doc h1,
.vt-doc h2,
.vt-doc h3,
.vt-doc h4,
.vt-doc h5,
.vt-doc h6 {
  position: relative;
  font-weight: 600;
  line-height: 1.5;
  outline: none;
}

.vt-doc h1 {
  margin: 0 0 3rem;
  font-size: 38px;
  line-height: 1.4;
  letter-spacing: -0.02em;
}

.vt-doc h2 {
  margin: 4rem 0 1.8rem;
  border-top: 1px solid var(--vt-c-divider-light);
  padding-top: 1.8rem;
  font-size: 24px;
  letter-spacing: -0.02em;
}

@media (max-width: 768px) {
  .vt-doc h1 {
    font-size: 32px;
    margin-bottom: 1.8rem;
  }
  .vt-doc h1 + h2 {
    margin-top: 36px;
  }
}

.vt-doc h3 {
  font-size: 19px;
  letter-spacing: -0.01em;
  margin: 3rem 0 1.25rem;
}

.vt-doc h2 + h3 {
  margin-top: 0;
}

.vt-doc h4 {
  font-size: 17px;
  margin: 1.8rem 0 1rem;
}

.vt-doc .header-anchor {
  float: left;
  margin-left: -0.87em;
  padding-right: 0.23em;
  font-weight: 500;
  opacity: 0;
  transition: color 0.25s, opacity 0.25s;
}

.vt-doc h1:hover .header-anchor,
.vt-doc h1 .header-anchor:focus,
.vt-doc h2:hover .header-anchor,
.vt-doc h2 .header-anchor:focus,
.vt-doc h3:hover .header-anchor,
.vt-doc h3 .header-anchor:focus,
.vt-doc h4:hover .header-anchor,
.vt-doc h4 .header-anchor:focus,
.vt-doc h5:hover .header-anchor,
.vt-doc h5 .header-anchor:focus,
.vt-doc h6:hover .header-anchor,
.vt-doc h6 .header-anchor:focus {
  opacity: 1;
}

.vt-doc hr {
  border: none;
  border-top: 1px solid var(--vt-c-divider-light);
  margin: 1.8rem 0;
}

.vt-doc p,
.vt-doc ul,
.vt-doc ol,
.vt-doc summary {
  margin-bottom: 1.2em;
}

.vt-doc a {
  font-weight: 500;
  color: var(--vt-c-brand);
  transition: color 0.25s;
  text-decoration-style: dotted;
}

.vt-doc a:hover {
  color: var(--vt-c-brand-highlight);
}

.vt-doc strong {
  font-weight: 600;
}

.vt-doc table {
  display: block;
  border-collapse: collapse;
  margin: 1rem 0;
  overflow-x: auto;
}

.vt-doc tr {
  border-top: 1px solid var(--vt-c-divider);
  transition: background-color 0.5s;
}

.vt-doc tr:nth-child(2n) {
  background-color: var(--vt-c-bg-soft);
}

.vt-doc th,
.vt-doc td {
  border: 1px solid var(--vt-c-divider);
  padding: 0.6em 1em;
}

.vt-doc blockquote {
  margin: 1rem 0;
  border-left: 0.2rem solid var(--vt-c-divider);
  padding-left: 1rem;
  transition: border-color 0.5s;
}

.vt-doc blockquote > p {
  margin: 0;
  font-size: 16px;
  color: var(--vt-c-text-2);
  transition: color 0.5s;
}

.vt-doc figure {
  margin: 0;
}

.vt-doc img {
  max-width: 100%;
}

.vt-doc p > img {
  margin: 28px auto;
}

.vt-doc ol {
  counter-reset: item;
}

.vt-doc ol[start='2'] {
  counter-reset: item 1;
}

.vt-doc ol[start='3'] {
  counter-reset: item 2;
}

.vt-doc ol[start='4'] {
  counter-reset: item 3;
}

.vt-doc ol[start='5'] {
  counter-reset: item 4;
}

.vt-doc ol[start='6'] {
  counter-reset: item 5;
}

.vt-doc ol[start='7'] {
  counter-reset: item 6;
}

.vt-doc ol[start='8'] {
  counter-reset: item 7;
}

.vt-doc ol[start='9'] {
  counter-reset: item 8;
}

.vt-doc ol[start='10'] {
  counter-reset: item 9;
}

.vt-doc ol > li {
  counter-increment: item;
  position: relative;
  padding-left: 1.5rem;
}

.vt-doc ol > li:before {
  position: absolute;
  left: 2px;
  top: 1px;
  font-weight: bold;
  font-size: 14px;
  color: var(--vt-c-text-3);
  content: counter(item) '.';
}

@media (min-width: 768px) {
  .vt-doc ol > li:before {
    top: 2px;
  }
}

.vt-doc li {
  position: relative;
  margin: 1px 0;
}

.vt-doc ul {
  padding-left: 1.25rem;
}

.vt-doc ul > li:before {
  content: '';
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: var(--vt-c-text-3);
  transition: background-color 0.5s;
  left: -1.25rem;
  top: 0.75rem;
}

.vt-doc .video::before {
  display: block;
  content: '';
  padding-top: 56.25%;
}

.vt-doc .video {
  overflow: hidden;
  width: calc(100% + 48px);
  min-width: 415px;
  position: relative;
  margin: 0 -24px 18px;
}

.vt-doc .video-content {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

@media (min-width: 640px) {
  .vt-doc .video {
    border-radius: 8px;
  }
}

@media (max-width: 463px) {
  .vt-doc .video {
    width: 100%;
    margin: 0 calc((100vw - 463px) / 2) 18px;
  }
}

.vt-doc {
  --vt-doc-code-font-size: 14px;
  --vt-doc-code-line-height: 1.5;
}

/* inline code */

.vt-doc :not(pre) > code {
  background-color: var(--vt-c-bg-mute);
  padding: 0.15em 0.5em;
  border-radius: 4px;
  color: var(--vt-c-text-code);
  transition: color 0.5s, background-color 0.5s;
}

.vt-doc a > code {
  color: var(--vt-c-brand-dark);
}

.vt-doc :not(pre, h1, h2, h3, h4, h5, h6) > code {
  font-size: var(--vt-doc-code-font-size);
}

@media (min-width: 768px) {
  .vt-doc :not(pre) > code {
    white-space: nowrap;
  }
}

.vt-doc div[class*='language-'] {
  position: relative;
  margin: 28px -24px;
  background-color: #292d3e;
  overflow-x: auto;
  transition: background-color 0.5s;
}

.dark .vt-doc div[class*='language-'] {
  background-color: var(--vt-c-bg-soft);
}

@media (min-width: 640px) {
  .vt-doc div[class*='language-'] {
    margin: 28px 0;
    border-radius: 8px;
  }
}

@media (max-width: 639px) {
  .vt-doc li div[class*='language-'] {
    border-radius: 8px 0 0 8px;
  }
}

.vt-doc div[class*='language-'] + div[class*='language-'],
.vt-doc div[class$='-api'] + div[class*='language-'],
.vt-doc div[class*='language-'] + div[class$='-api'] > div[class*='language-'] {
  margin-top: -16px;
}

.vt-doc [class*='language-'] pre,
.vt-doc [class*='language-'] code {
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

.vt-doc [class*='language-'] pre {
  position: relative;
  z-index: 1;
  margin: 0;
  padding: 14px 24px;
  background: transparent;
  overflow-x: auto;
}

.vt-doc [class*='language-'] code {
  display: inline-block;
  padding: 0;
  line-height: var(--vt-doc-code-line-height);
  font-size: var(--vt-doc-code-font-size);
  color: #a6accd;
  transition: color 0.5s;
}

.vt-doc .highlight-lines {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  padding: 13px 0 11px;
  width: 100%;
  font-family: var(--vt-font-family-mono);
  line-height: var(--vt-doc-code-line-height);
  font-size: var(--vt-doc-code-font-size);
  user-select: none;
  overflow: hidden;
}

.vt-doc .highlight-lines .highlighted {
  background-color: rgba(0, 0, 0, 0.3);
  transition: background-color 0.5s;
}

.dark .vt-doc .highlight-lines .highlighted {
  background-color: rgba(255, 255, 255, 0.05);
}

.vt-doc div[class*='language-'].line-numbers-mode {
  padding-left: 32px;
}

.vt-doc .line-numbers-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 3;
  border-right: 1px solid var(--vt-c-divider-light);
  padding: 13px 0 11px;
  width: 32px;
  text-align: center;
  font-family: var(--vt-font-family-mono);
  line-height: var(--vt-doc-code-line-height);
  font-size: var(--vt-doc-code-font-size);
  color: var(--vt-c-text-3);
  transition: border-color 0.5s, color 0.5s;
}

.vt-doc [class*='language-']:before {
  position: absolute;
  top: 4px;
  right: 10px;
  z-index: 2;
  font-size: 12px;
  font-weight: 500;
  color: var(--vt-c-text-dark-3);
  transition: color 0.5s;
}

@media (max-width: 480px) {
  .vt-doc [class*='language-']:before {
    top: 1px;
    right: 5px;
    font-size: 11px;
  }
  .vt-doc [class*='language-'] pre {
    padding: 18px 20px 12px;
  }
  .vt-doc .highlight-lines {
    padding-top: 17px;
  }
}

.vt-doc [class~='language-vue']:before {
  content: 'vue';
}

.vt-doc [class~='language-html']:before {
  content: 'html';
}

.vt-doc [class~='language-vue-html']:before {
  content: 'template';
}

.vt-doc [class~='language-css']:before {
  content: 'css';
}

.vt-doc [class~='language-js']:before {
  content: 'js';
}

.vt-doc [class~='language-jsx']:before {
  content: 'jsx';
}

.vt-doc [class~='language-ts']:before {
  content: 'ts';
}

.vt-doc [class~='language-tsx']:before {
  content: 'tsx';
}

.vt-doc [class~='language-json']:before {
  content: 'json';
}

.vt-doc [class~='language-sh']:before,
.vt-doc [class~='language-bash']:before {
  content: 'sh';
}

.vt-doc .custom-block {
  margin: 28px 0;
  padding: 20px 24px 4px 42px;
  border-radius: 8px;
  overflow-x: auto;
  transition: color 0.5s, background-color 0.5s;
  position: relative;
  font-size: 14px;
  line-height: 1.6;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.55);
  background-color: var(--vt-c-bg-soft);
}

.dark .vt-doc .custom-block {
  color: var(--vt-c-text-2);
}

.vt-doc .custom-block:before {
  content: '\u24D8';
  position: absolute;
  font-weight: 600;
  font-size: 15px;
  top: 20px;
  left: 17px;
}

.vt-doc .custom-block.warning:before,
.vt-doc .custom-block.danger:before {
  content: '\u26A0';
  font-size: 17px;
  top: 19px;
  left: 16ppx;
}

.vt-doc .custom-block .custom-block-title {
  margin-bottom: 8px;
  font-size: 15px;
  font-weight: 500;
  color: var(--vt-c-text-1);
  transition: color 0.5s;
}

.vt-doc .custom-block.tip {
  border: 1px solid var(--vt-c-brand);
}

.vt-doc .custom-block.tip:before {
  color: var(--vt-c-brand);
}

.vt-doc .custom-block.warning {
  border: 1px solid var(--vt-c-yellow);
}

.vt-doc .custom-block.warning:before {
  color: var(--vt-c-yellow);
}

.vt-doc .custom-block.danger {
  border: 1px solid var(--vt-c-red);
}

.vt-doc .custom-block.danger .custom-block-title,
.vt-doc .custom-block.danger:before {
  color: var(--vt-c-red);
}

.vt-doc .custom-block ul li:before {
  top: 0.55rem;
}

.vt-doc .custom-block ol li:before {
  top: 1px;
  font-size: 13px;
}

.vt-doc .custom-block :not(pre) > code {
  font-size: 13px;
  background-color: rgba(27, 31, 35, 0.05);
}

.dark .vt-doc .custom-block :not(pre) > code {
  background-color: rgba(0, 0, 0, 0.2);
}

.vt-doc .custom-block.danger a,
.vt-doc .custom-block.warning a {
  color: var(--vt-c-text-code);
}

.vt-flyout {
  position: relative;
}

.vt-flyout:hover {
  color: var(--vt-c-bland);
  transition: color .25s;
}

.vt-flyout:hover .vt-flyout-button-text {
  color: var(--vt-c-text-2);
}

.vt-flyout:hover .vt-flyout-button-icon {
  fill: var(--vt-c-text-2);
}

.vt-flyout:hover .vt-flyout-menu,
.vt-flyout-button[aria-expanded="true"] + .vt-flyout-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.vt-flyout-button {
  display: flex;
  align-items: center;
  padding: 0 12px;
  height: var(--vt-nav-height);
  color: var(--vt-c-text-1);
  transition: color .5s;
}

.vt-flyout-button-text {
  display: flex;
  align-items: center;
  line-height: var(--vt-nav-height);
  font-size: 13px;
  font-weight: 500;
  color: var(--vt-c-text-1);
  transition: color .25s;
}

.vt-flyout-button-text-icon {
  margin-left: 4px;
  width: 14px;
  height: 14px;
  fill: currentColor;
}

.vt-flyout-button-icon {
  width: 20px;
  height: 20px;
  fill: currentColor;
  transition: fill .25s;
}

.vt-flyout-menu {
  position: absolute;
  top: calc(var(--vt-nav-height) / 2 + 15px);
  right: 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-4px);
  transition: opacity .25s, visibility .25s, transform .25s;
}

.vt-hamburger {
  display: flex;
  justify-content: center;
  align-items: center;
}

.vt-hamburger:hover .vt-hamburger-top    { top: 0; left: 0; transform: translateX(4px); }

.vt-hamburger:hover .vt-hamburger-middle { top: 6; left: 0; transform: translateX(0); }

.vt-hamburger:hover .vt-hamburger-bottom { top: 12px; left: 0; transform: translateX(8px); }

.vt-hamburger.is-active .vt-hamburger-top    { top: 6px; transform: translateX(0) rotate(225deg); }

.vt-hamburger.is-active .vt-hamburger-middle { top: 6px; transform: translateX(16px); }

.vt-hamburger.is-active .vt-hamburger-bottom { top: 6px; transform: translateX(0) rotate(135deg); }

.vt-hamburger.is-active:hover .vt-hamburger-top,
.vt-hamburger.is-active:hover .vt-hamburger-middle,
.vt-hamburger.is-active:hover .vt-hamburger-bottom {
  background-color: var(--vt-c-text-2);
  transition: top .25s, background-color .25s, transform .25s;
}

.vt-hamburger-container {
  position: relative;
  width: 16px;
  height: 14px;
  overflow: hidden;
}

.vt-hamburger-top,
.vt-hamburger-middle,
.vt-hamburger-bottom {
  position: absolute;
  width: 16px;
  height: 2px;
  background-color: var(--vt-c-text-1);
  transition: top .25s, background-color .5s, transform .25s;
}

.vt-hamburger-top    { top: 0; left: 0; transform: translateX(0); }

.vt-hamburger-middle { top: 6px; left: 0; transform: translateX(8px); }

.vt-hamburger-bottom { top: 12px; left: 0; transform: translateX(4px); }

.vt-link-icon {
  display: inline-block;
  margin-top: -2px;
  margin-left: 4px;
  width: 11px;
  height: 11px;
  fill: var(--vt-c-text-3);
  transition: fill 0.25s;
}

.vt-menu {
  border-radius: 8px;
  padding: 12px 0;
  min-width: 192px;
  border: 1px solid transparent;
  background: var(--vt-c-bg);
  box-shadow: var(--vt-shadow-3);
  transition: background-color .5s;
}

.dark .vt-menu {
  background: var(--vt-c-bg);
  box-shadow: var(--vt-shadow-1);
  border: 1px solid var(--vt-c-divider-light);
}

.vt-menu-items {
  transition: border-color .5s;
}

.vt-menu .vt-menu-group {
  padding: 0 0 12px;
}

.vt-menu .vt-menu-group + .vt-menu-group {
  border-top: 1px solid var(--vt-c-divider-light);
  padding: 11px 0 12px;
}

.vt-menu .vt-menu-group:last-child {
  padding-bottom: 0;
}

.vt-menu .vt-menu-group + .vt-menu-item-item {
  border-top: 1px solid var(--vt-c-divider-light);
  padding: 11px 16px 0;
}

.vt-menu .vt-menu-item {
  padding: 0 16px;
  white-space: nowrap;
}

.vt-menu-label {
  flex-grow: 1;
  line-height: 28px;
  font-size: 12px;
  font-weight: 500;
  color: var(--vt-c-text-2);
  transition: color .5s;
}

.vt-menu-action {
  padding-left: 24px;
}

.vt-menu-group-title {
  padding: 0 18px;
  line-height: 28px;
  font-size: 10px;
  font-weight: 600;
  color: var(--vt-c-text-3);
  text-transform: uppercase;
  transition: color .25s;
}

.vt-menu-link {
  display: block;
  padding: 0 18px;
  line-height: 28px;
  font-size: 13px;
  font-weight: 400;
  color: var(--vt-c-text-1);
  white-space: nowrap;
  transition: color .25s;
}

.vt-menu-link:hover {
  color: var(--vt-c-brand);
}

.vt-social-link {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--vt-c-text-2);
  transition: color .5s;
}

.vt-social-link.is-small {
  width: 36px;
  height: 36px;
}

.vt-social-link.is-small .vt-social-link-icon {
  width: 20px;
  height: 20px;
}

.vt-social-link.is-medium {
  width: 48px;
  height: 48px;
}

.vt-social-link.is-medium .vt-social-link-icon {
  width: 24px;
  height: 24px;
}

.vt-social-link:hover {
  color: var(--vt-c-text-1);
  transition: color .25s;
}

.vt-social-link-icon {
  fill: currentColor;
}

.vt-social-links {
  display: flex;
  justify-content: center;
}

.vt-switch {
  position: relative;
  border-radius: 11px;
  display: block;
  width: 40px;
  height: 22px;
  flex-shrink: 0;
  border: 1px solid var(--vt-c-divider);
  background-color: var(--vt-c-bg-mute);
  transition: border-color 0.25s, background-color 0.25s;
}

.vt-switch:hover {
  border-color: var(--vt-c-gray);
}

.vt-switch-check {
  position: absolute;
  top: 1px;
  left: 1px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: var(--vt-c-white);
  box-shadow: var(--vt-shadow-1);
  transition: background-color 0.25s, transform 0.25s;
}

.dark .vt-switch-check {
  background-color: var(--vt-c-black);
}

.vt-switch-icon {
  position: relative;
  display: block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  overflow: hidden;
}

.vt-switch-icon svg {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 12px;
  height: 12px;
  fill: var(--vt-c-text-2);
}

.dark .vt-switch-icon svg {
  fill: var(--vt-c-text-1);
  transition: opacity 0.25s;
}

.vt-switch-appearance-sun {
  opacity: 1;
}

.vt-switch-appearance-moon {
  opacity: 0;
}

.dark .vt-switch-appearance-sun {
  opacity: 0;
}

.dark .vt-switch-appearance-moon {
  opacity: 1;
}

.dark .vt-switch-appearance .vt-switch-check {
  transform: translateX(18px);
}

.vt-box-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.vt-box-container .vt-box {
  background-color: var(--vt-c-bg-soft);
  transition: color 0.5s, background-color 0.5s;
  padding: 28px 36px;
  border-radius: 8px;
  flex: 0 32%; /* default 3 column */
  font-size: 14px;
  font-weight: 500;
}

@media (max-width: 768px) {
  .vt-box-container .vt-box {
    flex: 0 100%;
    margin-bottom: 20px;
  }
}

.vt-badge {
  display: inline-block;
  border-radius: 6px;
  font-size: 0.65em;
  line-height: 1;
  font-weight: 600;
  padding: 0.35em 0.4em 0.3em;
  position: relative;
  top: -0.65em;
  margin-left: 0.5em;
  color: var(--vt-c-bg);
  transition: color 0.5s;
  background-color: var(--vt-c-brand);
}

.vt-badge.warning {
  color: var(--vt-c-text-light-1);
  background-color: var(--vt-c-yellow);
}

@font-face {
  font-family: Inter;
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url(/assets/inter-latin.7b37fe23.woff2) format('woff2');
  unicode-range: U+00??, U+0131, U+0152-0153, U+02bb-02bc, U+02c6, U+02da,
    U+02dc, U+2000-206f, U+2074, U+20ac, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+feff, U+fffd;
}

@font-face {
  font-family: Inter;
  font-style: normal;
  font-weight: 400 500 600 700 900;
  font-display: swap;
  src: url(/assets/inter-latin-ext.65457fee.woff2) format('woff2');
  unicode-range: U+0100-024f, U+0259, U+1e??, U+2020, U+20a0-20ab, U+20ad-20cf,
    U+2113, U+2c60-2c7f, U+a720-a7ff;
}

@font-face {
  font-family: Inter;
  font-style: normal;
  font-weight: 400 500 600 700 900;
  font-display: swap;
  src: url(/assets/inter-cyrillic.5af0208d.woff2) format('woff2');
  unicode-range: U+0400-045f, U+0490-0491, U+04b0-04b1, U+2116;
}

@font-face {
  font-family: Inter;
  font-style: normal;
  font-weight: 400 500 600 700 900;
  font-display: swap;
  src: url(/assets/inter-cyrillic-ext.dae818a0.woff2) format('woff2');
  unicode-range: U+0460-052f, U+1c80-1c88, U+20b4, U+2de0-2dff, U+a640-a69f,
    U+fe2e-fe2f;
}

@font-face {
  font-family: Inter;
  font-style: normal;
  font-weight: 400 500 600 700 900;
  font-display: swap;
  src: url(/assets/inter-greek.c347ae24.woff2) format('woff2');
  unicode-range: U+0370-03ff;
}

@font-face {
  font-family: Inter;
  font-style: normal;
  font-weight: 400 500 600 700 900;
  font-display: swap;
  src: url(/assets/inter-greek-ext.311d9dee.woff2) format('woff2');
  unicode-range: U+1f??;
}

@font-face {
  font-family: Inter;
  font-style: normal;
  font-weight: 400 500 600 700 900;
  font-display: swap;
  src: url(/assets/inter-vietnamese.38390954.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01a0-01a1,
    U+01af-01b0, U+1ea0-1ef9, U+20ab;
}

/**
 * Layouts
 * -------------------------------------------------------------------------- */

:root {
  /* Z Indexes */
  --vp-z-index-local-nav: 10;
  --vp-z-index-nav: 20;
  --vp-z-index-banner: 30;
  --vp-z-index-backdrop: 40;
  --vp-z-index-sidebar: 50;

  /* Screen Size */
  --vp-screen-max-width: 1376px;
}

/**
 * Component: Sidebar
 * -------------------------------------------------------------------------- */

:root {
  --vp-sidebar-width-mobile: 320px;
  --vp-sidebar-width-small: 272px;
}

html.dark {
  color-scheme: dark;
}
`)();
const Content = defineComponent({
  name: "VitePressContent",
  setup() {
    const route = useRoute();
    return () => h("div", { style: { position: "relative" } }, [
      route.component ? h(route.component) : null
    ]);
  }
});
var Debug_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.debug[data-v-bf835584] {\n  box-sizing: border-box;\n  position: fixed;\n  right: 8px;\n  bottom: 8px;\n  z-index: 9999;\n  border-radius: 4px;\n  width: 74px;\n  height: 32px;\n  color: #eeeeee;\n  overflow: hidden;\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, 0.85);\n  transition: all 0.15s ease;\n}\n.debug[data-v-bf835584]:hover {\n  background-color: rgba(0, 0, 0, 0.75);\n}\n.debug.open[data-v-bf835584] {\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  margin-top: 0;\n  border-radius: 0;\n  padding: 0 0;\n  overflow: scroll;\n}\n@media (min-width: 512px) {\n.debug.open[data-v-bf835584] {\n    width: 512px;\n}\n}\n.debug.open[data-v-bf835584]:hover {\n  background-color: rgba(0, 0, 0, 0.85);\n}\n.title[data-v-bf835584] {\n  margin: 0;\n  padding: 6px 16px 6px;\n  line-height: 20px;\n  font-size: 13px;\n}\n.block[data-v-bf835584] {\n  margin: 2px 0 0;\n  border-top: 1px solid rgba(255, 255, 255, 0.16);\n  padding: 8px 16px;\n  font-family: Hack, monospace;\n  font-size: 13px;\n}\n.block + .block[data-v-bf835584] {\n  margin-top: 8px;\n}\n")();
const hashRE = /#.*$/;
const extRE = /(index)?\.(md|html)$/;
const outboundRE = /^[a-z]+:/i;
function isExternal(path) {
  return outboundRE.test(path);
}
function ensureStartingSlash(path) {
  return /^\//.test(path) ? path : `/${path}`;
}
function normalizeLink(url) {
  if (isExternal(url)) {
    return url;
  }
  const { pathname, search, hash } = new URL(url, "http://vuejs.org");
  return withBase(pathname.endsWith("/") || pathname.endsWith(".html") ? url : `${pathname.replace(/(\.md)?$/, ".html")}${search}${hash}`);
}
const inBrowser = typeof window !== "undefined";
const hashRef = ref(inBrowser ? location.hash : "");
if (inBrowser) {
  window.addEventListener("hashchange", () => {
    hashRef.value = location.hash;
  });
}
function isActive(currentPath, matchPath, asRegex = false) {
  if (matchPath === void 0) {
    return false;
  }
  currentPath = normalize(`/${currentPath}`);
  if (asRegex) {
    return new RegExp(matchPath).test(currentPath);
  } else {
    if (normalize(matchPath) !== currentPath) {
      return false;
    }
    const hashMatch = matchPath.match(hashRE);
    if (hashMatch) {
      return hashRef.value === hashMatch[0];
    }
    return true;
  }
}
function normalize(path) {
  return decodeURI(path).replace(hashRE, "").replace(extRE, "");
}
function getSidebar(sidebar, path) {
  if (Array.isArray(sidebar)) {
    return sidebar;
  }
  path = ensureStartingSlash(path);
  for (const dir in sidebar) {
    if (path.startsWith(ensureStartingSlash(dir))) {
      return sidebar[dir];
    }
  }
  return [];
}
const configSymbol = Symbol("config");
function withConfigProvider(App) {
  return defineComponent({
    name: "VPConfigProvider",
    setup(_, { slots }) {
      const { theme } = useData();
      const config = computed(() => resolveConfig(theme.value));
      provide(configSymbol, config);
      return () => h(App, null, slots);
    }
  });
}
function useConfig() {
  return {
    config: inject(configSymbol)
  };
}
function resolveConfig(config) {
  var _a2;
  return Object.assign({
    appearance: true
  }, config, {
    nav: (_a2 = config.nav) == null ? void 0 : _a2.map(normalizeMenuItem),
    sidebar: config.sidebar && normalizeSideBar(config.sidebar)
  });
}
function normalizeMenuItem(item) {
  if ("link" in item) {
    return Object.assign({}, item, {
      link: normalizeLink(item.link)
    });
  } else {
    return Object.assign({}, item, { items: item.items.map(normalizeMenuItem) });
  }
}
function normalizeSideBar(sidebar) {
  if (Array.isArray(sidebar)) {
    return sidebar.map(normalizeMenuItem);
  } else {
    const ret = {};
    for (const key in sidebar) {
      ret[key] = normalizeSideBar(sidebar[key]);
    }
    return ret;
  }
}
function useSidebar() {
  const route = useRoute();
  const { config } = useConfig();
  const { frontmatter } = useData();
  const isOpen = ref(false);
  const sidebar = computed(() => {
    const sidebarConfig = config.value.sidebar;
    const relativePath = route.data.relativePath;
    return sidebarConfig ? getSidebar(sidebarConfig, relativePath) : [];
  });
  const hasSidebar = computed(() => frontmatter.value.sidebar !== false && sidebar.value.length > 0);
  function open() {
    isOpen.value = true;
  }
  function close() {
    isOpen.value = false;
  }
  function toggle() {
    isOpen.value ? close() : open();
  }
  return {
    isOpen,
    sidebar,
    hasSidebar,
    open,
    close,
    toggle
  };
}
function useNav() {
  const isScreenOpen = ref(false);
  function openScreen() {
    isScreenOpen.value = true;
    window.addEventListener("resize", closeScreenOnTabletWindow);
  }
  function closeScreen() {
    isScreenOpen.value = false;
    window.removeEventListener("resize", closeScreenOnTabletWindow);
  }
  function toggleScreen() {
    isScreenOpen.value ? closeScreen() : openScreen();
  }
  function closeScreenOnTabletWindow() {
    window.outerWidth >= 768 && closeScreen();
  }
  return {
    isScreenOpen,
    openScreen,
    closeScreen,
    toggleScreen
  };
}
var VPNavBarTitle_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPNavBarTitle[data-v-5974738b] {\n  display: flex;\n  align-items: center;\n  padding-top: 1px;\n  height: var(--vt-nav-height);\n  transition: opacity 0.25s;\n}\n.VPNavBarTitle[data-v-5974738b]:hover {\n  opacity: 0.6;\n}\n.logo[data-v-5974738b] {\n  position: relative;\n}\n.logo + .text[data-v-5974738b] {\n  padding-left: 8px;\n}\n.text[data-v-5974738b] {\n  font-size: 16px;\n  font-weight: 500;\n}\n")();
const _withScopeId$7 = (n) => (pushScopeId("data-v-5974738b"), n = n(), popScopeId(), n);
const _hoisted_1$n = {
  class: "VPNavBarTitle",
  href: "/"
};
const _hoisted_2$g = ["src"];
const _hoisted_3$a = ["src"];
const _hoisted_4$8 = {
  key: 2,
  class: "logo",
  viewBox: "0 0 128 128",
  width: "24",
  height: "24"
};
const _hoisted_5$7 = /* @__PURE__ */ _withScopeId$7(() => /* @__PURE__ */ createBaseVNode("path", {
  fill: "#42b883",
  d: "M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
}, null, -1));
const _hoisted_6$4 = /* @__PURE__ */ _withScopeId$7(() => /* @__PURE__ */ createBaseVNode("path", {
  fill: "#35495e",
  d: "M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"
}, null, -1));
const _hoisted_7$3 = [
  _hoisted_5$7,
  _hoisted_6$4
];
const _hoisted_8$2 = {
  key: 3,
  class: "text"
};
const _hoisted_9$2 = {
  key: 4,
  class: "text"
};
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { theme } = useData();
    const storageKey = "vue-theme-appearance";
    const isDark = typeof localStorage !== "undefined" ? isDarkFn() : () => {
    };
    function isDarkFn() {
      const fn = () => {
        let userPreference = localStorage.getItem(storageKey) || "auto";
        const query = window.matchMedia(`(prefers-color-scheme: dark)`);
        return userPreference === "auto" ? query.matches : userPreference === "dark";
      };
      return fn;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", _hoisted_1$n, [
        unref(theme).logo && !unref(isDark)() ? (openBlock(), createElementBlock("img", {
          key: 0,
          src: unref(theme).logo,
          alt: "logo",
          class: "logo",
          width: "24",
          height: "24"
        }, null, 8, _hoisted_2$g)) : unref(theme).logoDark && unref(isDark)() ? (openBlock(), createElementBlock("img", {
          key: 1,
          src: unref(theme).logoDark,
          alt: "logo",
          class: "logo",
          width: "24",
          height: "24"
        }, null, 8, _hoisted_3$a)) : (openBlock(), createElementBlock("svg", _hoisted_4$8, _hoisted_7$3)),
        unref(theme).logoText ? (openBlock(), createElementBlock("span", _hoisted_8$2, toDisplayString(unref(theme).logoText), 1)) : (openBlock(), createElementBlock("span", _hoisted_9$2, "Vue.js"))
      ]);
    };
  }
});
var VPNavBarTitle = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__scopeId", "data-v-5974738b"]]);
var style = /* @__PURE__ */ (() => '/*! @docsearch/css 3.0.0 | MIT License | \xA9 Algolia, Inc. and contributors | https://docsearch.algolia.com */\n:root{--docsearch-primary-color:#5468ff;--docsearch-text-color:#1c1e21;--docsearch-spacing:12px;--docsearch-icon-stroke-width:1.4;--docsearch-highlight-color:var(--docsearch-primary-color);--docsearch-muted-color:#969faf;--docsearch-container-background:rgba(101,108,133,0.8);--docsearch-logo-color:#5468ff;--docsearch-modal-width:560px;--docsearch-modal-height:600px;--docsearch-modal-background:#f5f6f7;--docsearch-modal-shadow:inset 1px 1px 0 0 hsla(0,0%,100%,0.5),0 3px 8px 0 #555a64;--docsearch-searchbox-height:56px;--docsearch-searchbox-background:#ebedf0;--docsearch-searchbox-focus-background:#fff;--docsearch-searchbox-shadow:inset 0 0 0 2px var(--docsearch-primary-color);--docsearch-hit-height:56px;--docsearch-hit-color:#444950;--docsearch-hit-active-color:#fff;--docsearch-hit-background:#fff;--docsearch-hit-shadow:0 1px 3px 0 #d4d9e1;--docsearch-key-gradient:linear-gradient(-225deg,#d5dbe4,#f8f8f8);--docsearch-key-shadow:inset 0 -2px 0 0 #cdcde6,inset 0 0 1px 1px #fff,0 1px 2px 1px rgba(30,35,90,0.4);--docsearch-footer-height:44px;--docsearch-footer-background:#fff;--docsearch-footer-shadow:0 -1px 0 0 #e0e3e8,0 -3px 6px 0 rgba(69,98,155,0.12)}html[data-theme=dark]{--docsearch-text-color:#f5f6f7;--docsearch-container-background:rgba(9,10,17,0.8);--docsearch-modal-background:#15172a;--docsearch-modal-shadow:inset 1px 1px 0 0 #2c2e40,0 3px 8px 0 #000309;--docsearch-searchbox-background:#090a11;--docsearch-searchbox-focus-background:#000;--docsearch-hit-color:#bec3c9;--docsearch-hit-shadow:none;--docsearch-hit-background:#090a11;--docsearch-key-gradient:linear-gradient(-26.5deg,#565872,#31355b);--docsearch-key-shadow:inset 0 -2px 0 0 #282d55,inset 0 0 1px 1px #51577d,0 2px 2px 0 rgba(3,4,9,0.3);--docsearch-footer-background:#1e2136;--docsearch-footer-shadow:inset 0 1px 0 0 rgba(73,76,106,0.5),0 -4px 8px 0 rgba(0,0,0,0.2);--docsearch-logo-color:#fff;--docsearch-muted-color:#7f8497}.DocSearch-Button{align-items:center;background:var(--docsearch-searchbox-background);border:0;border-radius:40px;color:var(--docsearch-muted-color);cursor:pointer;display:flex;font-weight:500;height:36px;justify-content:space-between;margin:0 0 0 16px;padding:0 8px;user-select:none}.DocSearch-Button:active,.DocSearch-Button:focus,.DocSearch-Button:hover{background:var(--docsearch-searchbox-focus-background);box-shadow:var(--docsearch-searchbox-shadow);color:var(--docsearch-text-color);outline:none}.DocSearch-Button-Container{align-items:center;display:flex}.DocSearch-Search-Icon{stroke-width:1.6}.DocSearch-Button .DocSearch-Search-Icon{color:var(--docsearch-text-color)}.DocSearch-Button-Placeholder{font-size:1rem;padding:0 12px 0 6px}.DocSearch-Button-Keys{display:flex;min-width:calc(40px + .8em)}.DocSearch-Button-Key{align-items:center;background:var(--docsearch-key-gradient);border-radius:3px;box-shadow:var(--docsearch-key-shadow);color:var(--docsearch-muted-color);display:flex;height:18px;justify-content:center;margin-right:.4em;padding-bottom:2px;position:relative;top:-1px;width:20px}@media (max-width:750px){.DocSearch-Button-Keys,.DocSearch-Button-Placeholder{display:none}}.DocSearch--active{overflow:hidden!important}.DocSearch-Container,.DocSearch-Container *{box-sizing:border-box}.DocSearch-Container{background-color:var(--docsearch-container-background);height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:200}.DocSearch-Container a{text-decoration:none}.DocSearch-Link{appearance:none;background:none;border:0;color:var(--docsearch-highlight-color);cursor:pointer;font:inherit;margin:0;padding:0}.DocSearch-Modal{background:var(--docsearch-modal-background);border-radius:6px;box-shadow:var(--docsearch-modal-shadow);flex-direction:column;margin:60px auto auto;max-width:var(--docsearch-modal-width);position:relative}.DocSearch-SearchBar{display:flex;padding:var(--docsearch-spacing) var(--docsearch-spacing) 0}.DocSearch-Form{align-items:center;background:var(--docsearch-searchbox-focus-background);border-radius:4px;box-shadow:var(--docsearch-searchbox-shadow);display:flex;height:var(--docsearch-searchbox-height);margin:0;padding:0 var(--docsearch-spacing);position:relative;width:100%}.DocSearch-Input{appearance:none;background:transparent;border:0;color:var(--docsearch-text-color);flex:1;font:inherit;font-size:1.2em;height:100%;outline:none;padding:0 0 0 8px;width:80%}.DocSearch-Input::placeholder{color:var(--docsearch-muted-color);opacity:1}.DocSearch-Input::-webkit-search-cancel-button,.DocSearch-Input::-webkit-search-decoration,.DocSearch-Input::-webkit-search-results-button,.DocSearch-Input::-webkit-search-results-decoration{display:none}.DocSearch-LoadingIndicator,.DocSearch-MagnifierLabel,.DocSearch-Reset{margin:0;padding:0}.DocSearch-MagnifierLabel,.DocSearch-Reset{align-items:center;color:var(--docsearch-highlight-color);display:flex;justify-content:center}.DocSearch-Container--Stalled .DocSearch-MagnifierLabel,.DocSearch-LoadingIndicator{display:none}.DocSearch-Container--Stalled .DocSearch-LoadingIndicator{align-items:center;color:var(--docsearch-highlight-color);display:flex;justify-content:center}@media screen and (prefers-reduced-motion:reduce){.DocSearch-Reset{animation:none;appearance:none;background:none;border:0;border-radius:50%;color:var(--docsearch-icon-color);cursor:pointer;right:0;stroke-width:var(--docsearch-icon-stroke-width)}}.DocSearch-Reset{animation:fade-in .1s ease-in forwards;appearance:none;background:none;border:0;border-radius:50%;color:var(--docsearch-icon-color);cursor:pointer;padding:2px;right:0;stroke-width:var(--docsearch-icon-stroke-width)}.DocSearch-Reset[hidden]{display:none}.DocSearch-Reset:focus{outline:none}.DocSearch-Reset:hover{color:var(--docsearch-highlight-color)}.DocSearch-LoadingIndicator svg,.DocSearch-MagnifierLabel svg{height:24px;width:24px}.DocSearch-Cancel{display:none}.DocSearch-Dropdown{max-height:calc(var(--docsearch-modal-height) - var(--docsearch-searchbox-height) - var(--docsearch-spacing) - var(--docsearch-footer-height));min-height:var(--docsearch-spacing);overflow-y:auto;overflow-y:overlay;padding:0 var(--docsearch-spacing);scrollbar-color:var(--docsearch-muted-color) var(--docsearch-modal-background);scrollbar-width:thin}.DocSearch-Dropdown::-webkit-scrollbar{width:12px}.DocSearch-Dropdown::-webkit-scrollbar-track{background:transparent}.DocSearch-Dropdown::-webkit-scrollbar-thumb{background-color:var(--docsearch-muted-color);border:3px solid var(--docsearch-modal-background);border-radius:20px}.DocSearch-Dropdown ul{list-style:none;margin:0;padding:0}.DocSearch-Label{font-size:.75em;line-height:1.6em}.DocSearch-Help,.DocSearch-Label{color:var(--docsearch-muted-color)}.DocSearch-Help{font-size:.9em;margin:0;user-select:none}.DocSearch-Title{font-size:1.2em}.DocSearch-Logo a{display:flex}.DocSearch-Logo svg{color:var(--docsearch-logo-color);margin-left:8px}.DocSearch-Hits:last-of-type{margin-bottom:24px}.DocSearch-Hits mark{background:none;color:var(--docsearch-highlight-color)}.DocSearch-HitsFooter{color:var(--docsearch-muted-color);display:flex;font-size:.85em;justify-content:center;margin-bottom:var(--docsearch-spacing);padding:var(--docsearch-spacing)}.DocSearch-HitsFooter a{border-bottom:1px solid;color:inherit}.DocSearch-Hit{border-radius:4px;display:flex;padding-bottom:4px;position:relative}@media screen and (prefers-reduced-motion:reduce){.DocSearch-Hit--deleting{transition:none}}.DocSearch-Hit--deleting{opacity:0;transition:all .25s linear}@media screen and (prefers-reduced-motion:reduce){.DocSearch-Hit--favoriting{transition:none}}.DocSearch-Hit--favoriting{transform:scale(0);transform-origin:top center;transition:all .25s linear;transition-delay:.25s}.DocSearch-Hit a{background:var(--docsearch-hit-background);border-radius:4px;box-shadow:var(--docsearch-hit-shadow);display:block;padding-left:var(--docsearch-spacing);width:100%}.DocSearch-Hit-source{background:var(--docsearch-modal-background);color:var(--docsearch-highlight-color);font-size:.85em;font-weight:600;line-height:32px;margin:0 -4px;padding:8px 4px 0;position:sticky;top:0;z-index:10}.DocSearch-Hit-Tree{color:var(--docsearch-muted-color);height:var(--docsearch-hit-height);opacity:.5;stroke-width:var(--docsearch-icon-stroke-width);width:24px}.DocSearch-Hit[aria-selected=true] a{background-color:var(--docsearch-highlight-color)}.DocSearch-Hit[aria-selected=true] mark{text-decoration:underline}.DocSearch-Hit-Container{align-items:center;color:var(--docsearch-hit-color);display:flex;flex-direction:row;height:var(--docsearch-hit-height);padding:0 var(--docsearch-spacing) 0 0}.DocSearch-Hit-icon{height:20px;width:20px}.DocSearch-Hit-action,.DocSearch-Hit-icon{color:var(--docsearch-muted-color);stroke-width:var(--docsearch-icon-stroke-width)}.DocSearch-Hit-action{align-items:center;display:flex;height:22px;width:22px}.DocSearch-Hit-action svg{display:block;height:18px;width:18px}.DocSearch-Hit-action+.DocSearch-Hit-action{margin-left:6px}.DocSearch-Hit-action-button{appearance:none;background:none;border:0;border-radius:50%;color:inherit;cursor:pointer;padding:2px}svg.DocSearch-Hit-Select-Icon{display:none}.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-Select-Icon{display:block}.DocSearch-Hit-action-button:focus,.DocSearch-Hit-action-button:hover{background:rgba(0,0,0,.2);transition:background-color .1s ease-in}@media screen and (prefers-reduced-motion:reduce){.DocSearch-Hit-action-button:focus,.DocSearch-Hit-action-button:hover{transition:none}}.DocSearch-Hit-action-button:focus path,.DocSearch-Hit-action-button:hover path{fill:#fff}.DocSearch-Hit-content-wrapper{display:flex;flex:1 1 auto;flex-direction:column;font-weight:500;justify-content:center;line-height:1.2em;margin:0 8px;overflow-x:hidden;position:relative;text-overflow:ellipsis;white-space:nowrap;width:80%}.DocSearch-Hit-title{font-size:.9em}.DocSearch-Hit-path{color:var(--docsearch-muted-color);font-size:.75em}.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-action,.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-icon,.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-path,.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-text,.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-title,.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-Tree,.DocSearch-Hit[aria-selected=true] mark{color:var(--docsearch-hit-active-color)!important}@media screen and (prefers-reduced-motion:reduce){.DocSearch-Hit-action-button:focus,.DocSearch-Hit-action-button:hover{background:rgba(0,0,0,.2);transition:none}}.DocSearch-ErrorScreen,.DocSearch-NoResults,.DocSearch-StartScreen{font-size:.9em;margin:0 auto;padding:36px 0;text-align:center;width:80%}.DocSearch-Screen-Icon{color:var(--docsearch-muted-color);padding-bottom:12px}.DocSearch-NoResults-Prefill-List{display:inline-block;padding-bottom:24px;text-align:left}.DocSearch-NoResults-Prefill-List ul{display:inline-block;padding:8px 0 0}.DocSearch-NoResults-Prefill-List li{list-style-position:inside;list-style-type:"\xBB "}.DocSearch-Prefill{appearance:none;background:none;border:0;border-radius:1em;color:var(--docsearch-highlight-color);cursor:pointer;display:inline-block;font-size:1em;font-weight:700;padding:0}.DocSearch-Prefill:focus,.DocSearch-Prefill:hover{outline:none;text-decoration:underline}.DocSearch-Footer{align-items:center;background:var(--docsearch-footer-background);border-radius:0 0 8px 8px;box-shadow:var(--docsearch-footer-shadow);display:flex;flex-direction:row-reverse;flex-shrink:0;height:var(--docsearch-footer-height);justify-content:space-between;padding:0 var(--docsearch-spacing);position:relative;user-select:none;width:100%;z-index:300}.DocSearch-Commands{color:var(--docsearch-muted-color);display:flex;list-style:none;margin:0;padding:0}.DocSearch-Commands li{align-items:center;display:flex}.DocSearch-Commands li:not(:last-of-type){margin-right:.8em}.DocSearch-Commands-Key{align-items:center;background:var(--docsearch-key-gradient);border-radius:2px;box-shadow:var(--docsearch-key-shadow);display:flex;height:18px;justify-content:center;margin-right:.4em;padding-bottom:1px;width:20px}@media (max-width:750px){:root{--docsearch-spacing:10px;--docsearch-footer-height:40px}.DocSearch-Dropdown{height:100%}.DocSearch-Container{height:100vh;height:-webkit-fill-available;height:calc(var(--docsearch-vh, 1vh)*100);position:absolute}.DocSearch-Footer{border-radius:0;bottom:0;position:absolute}.DocSearch-Hit-content-wrapper{display:flex;position:relative;width:80%}.DocSearch-Modal{border-radius:0;box-shadow:none;height:100vh;height:-webkit-fill-available;height:calc(var(--docsearch-vh, 1vh)*100);margin:0;max-width:100%;width:100%}.DocSearch-Dropdown{max-height:calc(var(--docsearch-vh, 1vh)*100 - var(--docsearch-searchbox-height) - var(--docsearch-spacing) - var(--docsearch-footer-height))}.DocSearch-Cancel{appearance:none;background:none;border:0;color:var(--docsearch-highlight-color);cursor:pointer;display:inline-block;flex:none;font:inherit;font-size:1em;font-weight:500;margin-left:var(--docsearch-spacing);outline:none;overflow:hidden;padding:0;user-select:none;white-space:nowrap}.DocSearch-Commands,.DocSearch-Hit-Tree{display:none}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}')();
var VPNavBarSearch_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => "\n.VPNavBarSearch {\n  display: flex;\n  align-items: center;\n  padding-left: 16px;\n}\n@media (min-width: 768px) {\n.VPNavBarSearch {\n    flex-grow: 1;\n}\n}\n.DocSearch {\n  --docsearch-primary-color: var(--vt-c-brand);\n  --docsearch-highlight-color: var(--docsearch-primary-color);\n  --docsearch-text-color: var(--vt-c-text-1);\n  --docsearch-muted-color: var(--vt-c-text-2);\n  --docsearch-searchbox-shadow: none;\n  --docsearch-searchbox-focus-background: transparent;\n  --docsearch-key-gradient: transparent;\n  --docsearch-key-shadow: none;\n  --docsearch-modal-background: var(--vt-c-bg-soft);\n  --docsearch-footer-background: var(--vt-c-bg);\n}\n.dark .DocSearch {\n  --docsearch-modal-shadow: none;\n  --docsearch-footer-shadow: none;\n  --docsearch-logo-color: var(--vt-c-text-2);\n  --docsearch-hit-background: var(--vt-c-bg-mute);\n  --docsearch-hit-color: var(--vt-c-text-2);\n  --docsearch-hit-shadow: none;\n}\n.dark .DocSearch-Footer {\n  border-top: 1px solid var(--vt-c-divider);\n}\n.dark .DocSearch-Form {\n  background-color: var(--vt-c-bg-mute);\n}\n.DocSearch-Form {\n  background-color: white;\n  border: 1px solid var(--vt-c-brand);\n}\n.DocSearch-Button-Container {\n  align-items: center;\n  display: flex;\n}\n.DocSearch-Button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  width: 48px;\n  height: 55px;\n  background: transparent;\n}\n.DocSearch-Button:hover {\n  background: transparent;\n}\n.DocSearch-Button:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n.DocSearch-Button:focus:not(:focus-visible) {\n  outline: none !important;\n}\n@media (min-width: 768px) {\n.DocSearch-Button {\n    justify-content: flex-start;\n    width: 100%;\n}\n}\n.DocSearch-Button .DocSearch-Search-Icon {\n  color: var(--vt-c-text-2);\n  transition: color 0.5s;\n  fill: currentColor;\n  width: 18px;\n  height: 18px;\n  position: relative;\n}\n@media (min-width: 768px) {\n.DocSearch-Button .DocSearch-Search-Icon {\n    top: 1px;\n    margin-right: 10px;\n    width: 15px;\n    height: 15px;\n}\n}\n.DocSearch-Button:hover .DocSearch-Search-Icon {\n  color: var(--vt-c-text-1);\n}\n.DocSearch-Button-Placeholder {\n  transition: color 0.5s;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--vt-c-text-2);\n  display: none;\n  padding: 0 10px 0 0;\n}\n@media (min-width: 960px) {\n.DocSearch-Button-Placeholder {\n    display: inline-block;\n}\n}\n.DocSearch-Button:hover .DocSearch-Button-Placeholder {\n  color: var(--vt-c-text-1);\n}\n.DocSearch-Button .DocSearch-Button-Key {\n  margin-top: 2px;\n  border: 1px solid var(--vt-c-divider);\n  border-right: none;\n  border-radius: 4px 0 0 4px;\n  display: none;\n  padding-left: 6px;\n  height: 22px;\n  line-height: 22px;\n  transition: color 0.5s, border-color 0.5s;\n  min-width: 0;\n}\n.DocSearch-Button .DocSearch-Button-Key + .DocSearch-Button-Key {\n  border-right: 1px solid var(--vt-c-divider);\n  border-left: none;\n  border-radius: 0 4px 4px 0;\n  padding-left: 2px;\n  padding-right: 6px;\n}\n.DocSearch-Button:hover .DocSearch-Button-Key {\n  border-color: var(--vt-c-brand-light);\n  color: var(--vt-c-brand-light);\n}\n@media (min-width: 768px) {\n.DocSearch-Button .DocSearch-Button-Key {\n    display: inline-block;\n}\n}\n.DocSearch-Button-Key {\n  font-size: 12px;\n  font-weight: 500;\n  height: 20px;\n  margin: 0;\n  width: auto;\n  color: var(--vt-c-text-3);\n  transition: color 0.5s;\n  display: inline-block;\n  padding: 0 1px;\n}\n")();
const _hoisted_1$m = {
  key: 0,
  class: "VPNavBarSearch"
};
const _hoisted_2$f = {
  type: "button",
  class: "DocSearch DocSearch-Button",
  "aria-label": "Search"
};
const _hoisted_3$9 = /* @__PURE__ */ createBaseVNode("span", { class: "DocSearch-Button-Container" }, [
  /* @__PURE__ */ createBaseVNode("svg", {
    width: "20",
    height: "20",
    class: "DocSearch-Search-Icon",
    viewBox: "0 0 20 20"
  }, [
    /* @__PURE__ */ createBaseVNode("path", {
      d: "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",
      stroke: "currentColor",
      fill: "none",
      "fill-rule": "evenodd",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("span", { class: "DocSearch-Button-Placeholder" }, "Search")
], -1);
const _hoisted_4$7 = { class: "DocSearch-Button-Keys" };
const _hoisted_5$6 = /* @__PURE__ */ createBaseVNode("span", { class: "DocSearch-Button-Key" }, "K", -1);
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { theme } = useData();
    const VPAlgoliaSearchBox = defineAsyncComponent(() => __vitePreload(() => import("./VPAlgoliaSearchBox.d81bd894.js"), true ? ["assets/VPAlgoliaSearchBox.d81bd894.js","assets/plugin-vue_export-helper.8106b725.js","assets/framework.765af80f.js"] : void 0));
    const loaded = ref(false);
    const metaKey = ref();
    onMounted(() => {
      if (metaKey.value) {
        metaKey.value.textContent = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? "\u2318" : "Ctrl";
      }
      const handleSearchHotKey = (e) => {
        if (e.key === "k" && (e.ctrlKey || e.metaKey)) {
          e.preventDefault();
          load();
          remove();
        }
      };
      const remove = () => {
        window.removeEventListener("keydown", handleSearchHotKey);
      };
      window.addEventListener("keydown", handleSearchHotKey);
      onUnmounted(remove);
    });
    function load() {
      if (!loaded.value) {
        loaded.value = true;
      }
    }
    return (_ctx, _cache) => {
      return unref(theme).algolia ? (openBlock(), createElementBlock("div", _hoisted_1$m, [
        loaded.value ? (openBlock(), createBlock(unref(VPAlgoliaSearchBox), { key: 0 })) : (openBlock(), createElementBlock("div", {
          key: 1,
          id: "docsearch",
          onClick: load
        }, [
          createBaseVNode("button", _hoisted_2$f, [
            _hoisted_3$9,
            createBaseVNode("span", _hoisted_4$7, [
              createBaseVNode("span", {
                class: "DocSearch-Button-Key",
                ref_key: "metaKey",
                ref: metaKey
              }, "Meta", 512),
              _hoisted_5$6
            ])
          ])
        ]))
      ])) : createCommentVNode("", true);
    };
  }
});
var VPNavBarMenuLink_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPNavBarMenuLink[data-v-dc63fdd0] {\n  display: block;\n  padding: 0 12px;\n  line-height: calc(var(--vt-nav-height) - 1px);\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--vt-c-text-1);\n  transition: color 0.25s;\n}\n.VPNavBarMenuLink.active[data-v-dc63fdd0] {\n  border-bottom: 1px solid var(--vt-c-brand);\n}\n.VPNavBarMenuLink[data-v-dc63fdd0]:hover {\n  color: var(--vt-c-brand);\n}\n")();
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  props: {
    item: null
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$H), {
        class: normalizeClass({
          VPNavBarMenuLink: true,
          active: unref(isActive)(unref(page).relativePath, __props.item.activeMatch || __props.item.link, !!__props.item.activeMatch)
        }),
        href: __props.item.link,
        noIcon: true
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(__props.item.text), 1)
        ]),
        _: 1
      }, 8, ["class", "href"]);
    };
  }
});
var VPNavBarMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__scopeId", "data-v-dc63fdd0"]]);
var VPNavBarMenuGroup_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPNavBarMenuGroup.active[data-v-7d508524] {\n  border-bottom: 1px solid var(--vt-c-brand);\n  height: var(--vt-nav-height);\n}\n")();
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  props: {
    item: null
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$D), {
        class: normalizeClass({
          VPNavBarMenuGroup: true,
          active: unref(isActive)(unref(page).relativePath, __props.item.activeMatch, true)
        }),
        button: __props.item.text,
        items: __props.item.items
      }, null, 8, ["class", "button", "items"]);
    };
  }
});
var VPNavBarMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-7d508524"]]);
var VPNavBarMenu_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPNavBarMenu[data-v-6a1e42bc] {\n  display: none;\n}\n@media (min-width: 768px) {\n.VPNavBarMenu[data-v-6a1e42bc] {\n    display: flex;\n}\n}\n")();
const _withScopeId$6 = (n) => (pushScopeId("data-v-6a1e42bc"), n = n(), popScopeId(), n);
const _hoisted_1$l = {
  key: 0,
  "aria-labelledby": "main-nav-aria-label",
  class: "VPNavBarMenu"
};
const _hoisted_2$e = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode("span", {
  id: "main-nav-aria-label",
  class: "visually-hidden"
}, "Main Navigation", -1));
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { config } = useConfig();
    return (_ctx, _cache) => {
      return unref(config).nav ? (openBlock(), createElementBlock("nav", _hoisted_1$l, [
        _hoisted_2$e,
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(config).nav, (item) => {
          return openBlock(), createElementBlock(Fragment, {
            key: item.text
          }, [
            "link" in item ? (openBlock(), createBlock(VPNavBarMenuLink, {
              key: 0,
              item
            }, null, 8, ["item"])) : (openBlock(), createBlock(VPNavBarMenuGroup, {
              key: 1,
              item
            }, null, 8, ["item"]))
          ], 64);
        }), 128))
      ])) : createCommentVNode("", true);
    };
  }
});
var VPNavBarMenu = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-6a1e42bc"]]);
var VPNavBarAppearance_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPNavBarAppearance[data-v-315c73f1] {\n  display: none;\n}\n@media (min-width: 1280px) {\n.VPNavBarAppearance[data-v-315c73f1] {\n    display: block;\n}\n}\n")();
const _hoisted_1$k = {
  key: 0,
  class: "VPNavBarAppearance"
};
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { config } = useConfig();
    return (_ctx, _cache) => {
      return unref(config).appearance ? (openBlock(), createElementBlock("div", _hoisted_1$k, [
        createVNode(unref(_sfc_main$y))
      ])) : createCommentVNode("", true);
    };
  }
});
var VPNavBarAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-315c73f1"]]);
var VPNavBarSocialLinks_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPNavBarSocialLinks[data-v-002cf527] {\n  display: none;\n  margin-right: -10px;\n}\n@media (min-width: 1280px) {\n.VPNavBarSocialLinks[data-v-002cf527] {\n    display: flex;\n}\n}\n")();
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { config } = useConfig();
    return (_ctx, _cache) => {
      return unref(config).socialLinks ? (openBlock(), createBlock(unref(_sfc_main$A), {
        key: 0,
        class: "VPNavBarSocialLinks",
        size: "small",
        links: unref(config).socialLinks
      }, null, 8, ["links"])) : createCommentVNode("", true);
    };
  }
});
var VPNavBarSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-002cf527"]]);
var VPNavBarExtra_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPNavBarExtra[data-v-8b8c786e] {\n  display: none;\n}\n@media (min-width: 768px) {\n.VPNavBarExtra[data-v-8b8c786e] {\n    display: block;\n}\n}\n@media (min-width: 1280px) {\n.VPNavBarExtra[data-v-8b8c786e] {\n    display: none;\n}\n}\n.item[data-v-8b8c786e] {\n  display: flex;\n  align-items: center;\n}\n.action[data-v-8b8c786e] {\n  margin-right: -2px;\n}\n.social-links[data-v-8b8c786e] {\n  margin: -4px -8px;\n}\n")();
const _withScopeId$5 = (n) => (pushScopeId("data-v-8b8c786e"), n = n(), popScopeId(), n);
const _hoisted_1$j = {
  key: 0,
  class: "vt-menu-group"
};
const _hoisted_2$d = { class: "vt-menu-item item" };
const _hoisted_3$8 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("p", { class: "vt-menu-label" }, "Appearance", -1));
const _hoisted_4$6 = { class: "vt-menu-action action" };
const _hoisted_5$5 = {
  key: 1,
  class: "vt-menu-group"
};
const _hoisted_6$3 = { class: "vt-menu-item item" };
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { config } = useConfig();
    const hasContent = computed(() => {
      return config.value.appearance || config.value.socialLinks;
    });
    return (_ctx, _cache) => {
      return unref(hasContent) ? (openBlock(), createBlock(unref(_sfc_main$D), {
        key: 0,
        class: "VPNavBarExtra",
        label: "extra navigation"
      }, {
        default: withCtx(() => [
          unref(config).appearance ? (openBlock(), createElementBlock("div", _hoisted_1$j, [
            createBaseVNode("div", _hoisted_2$d, [
              _hoisted_3$8,
              createBaseVNode("div", _hoisted_4$6, [
                createVNode(unref(_sfc_main$y))
              ])
            ])
          ])) : createCommentVNode("", true),
          unref(config).socialLinks ? (openBlock(), createElementBlock("div", _hoisted_5$5, [
            createBaseVNode("div", _hoisted_6$3, [
              createVNode(unref(_sfc_main$A), {
                class: "social-links",
                size: "small",
                links: unref(config).socialLinks
              }, null, 8, ["links"])
            ])
          ])) : createCommentVNode("", true)
        ]),
        _: 1
      })) : createCommentVNode("", true);
    };
  }
});
var VPNavBarExtra = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-8b8c786e"]]);
var VPNavBarHamburger_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPNavBarHamburger[data-v-737ae8bc] {\n  width: 40px;\n  height: var(--vt-nav-height);\n}\n@media (min-width: 768px) {\n.VPNavBarHamburger[data-v-737ae8bc] {\n    display: none;\n}\n}\n")();
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  props: {
    active: { type: Boolean }
  },
  setup(__props) {
    const { config } = useConfig();
    const hasContent = computed(() => {
      return config.value.appearance || config.value.socialLinks;
    });
    return (_ctx, _cache) => {
      return unref(hasContent) ? (openBlock(), createBlock(unref(_sfc_main$C), {
        key: 0,
        class: "VPNavBarHamburger",
        active: __props.active
      }, null, 8, ["active"])) : createCommentVNode("", true);
    };
  }
});
var VPNavBarHamburger = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-737ae8bc"]]);
var VPNavBar_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPNavBar[data-v-023241f2] {\n  position: relative;\n  border-bottom: 1px solid var(--vt-c-divider-light);\n  padding: 0 12px 0 24px;\n  height: var(--vt-nav-height);\n  background-color: var(--vt-c-bg);\n  transition: border-color 0.5s, background-color 0.5s;\n}\n@media (min-width: 768px) {\n.VPNavBar[data-v-023241f2] {\n    padding: 0 12px 0 32px;\n}\n}\n@media (min-width: 1280px) {\n.VPNavBar[data-v-023241f2] {\n    padding: 0 32px;\n}\n}\n.container[data-v-023241f2] {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 auto;\n  max-width: var(--vp-screen-max-width);\n}\n.content[data-v-023241f2] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  flex-grow: 1;\n}\n.menu + .appearance[data-v-023241f2] {\n  margin-left: 8px;\n}\n.menu + .social-links[data-v-023241f2] {\n  margin-left: 12px;\n}\n.appearance + .social-links[data-v-023241f2] {\n  margin-left: 12px;\n}\n")();
const _hoisted_1$i = { class: "VPNavBar" };
const _hoisted_2$c = { class: "container" };
const _hoisted_3$7 = { class: "content" };
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  props: {
    isScreenOpen: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$i, [
        createBaseVNode("div", _hoisted_2$c, [
          createVNode(VPNavBarTitle),
          createBaseVNode("div", _hoisted_3$7, [
            createVNode(_sfc_main$w, { class: "search" }),
            createVNode(VPNavBarMenu, { class: "menu" }),
            createVNode(VPNavBarAppearance, { class: "appearance" }),
            createVNode(VPNavBarSocialLinks, { class: "social-links" }),
            createVNode(VPNavBarExtra, { class: "extra" }),
            createVNode(VPNavBarHamburger, {
              class: "hamburger",
              active: __props.isScreenOpen,
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("toggle-screen"))
            }, null, 8, ["active"])
          ])
        ])
      ]);
    };
  }
});
var VPNavBar = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-023241f2"]]);
function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}
var hasPassiveEvents = false;
if (typeof window !== "undefined") {
  var passiveTestOptions = {
    get passive() {
      hasPassiveEvents = true;
      return void 0;
    }
  };
  window.addEventListener("testPassive", null, passiveTestOptions);
  window.removeEventListener("testPassive", null, passiveTestOptions);
}
var isIosDevice = typeof window !== "undefined" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
var locks = [];
var documentListenerAdded = false;
var initialClientY = -1;
var previousBodyOverflowSetting = void 0;
var previousBodyPaddingRight = void 0;
var allowTouchMove = function allowTouchMove2(el) {
  return locks.some(function(lock) {
    if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
      return true;
    }
    return false;
  });
};
var preventDefault = function preventDefault2(rawEvent) {
  var e = rawEvent || window.event;
  if (allowTouchMove(e.target)) {
    return true;
  }
  if (e.touches.length > 1)
    return true;
  if (e.preventDefault)
    e.preventDefault();
  return false;
};
var setOverflowHidden = function setOverflowHidden2(options) {
  if (previousBodyPaddingRight === void 0) {
    var _reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
    var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;
    if (_reserveScrollBarGap && scrollBarGap > 0) {
      previousBodyPaddingRight = document.body.style.paddingRight;
      document.body.style.paddingRight = scrollBarGap + "px";
    }
  }
  if (previousBodyOverflowSetting === void 0) {
    previousBodyOverflowSetting = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }
};
var restoreOverflowSetting = function restoreOverflowSetting2() {
  if (previousBodyPaddingRight !== void 0) {
    document.body.style.paddingRight = previousBodyPaddingRight;
    previousBodyPaddingRight = void 0;
  }
  if (previousBodyOverflowSetting !== void 0) {
    document.body.style.overflow = previousBodyOverflowSetting;
    previousBodyOverflowSetting = void 0;
  }
};
var isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled2(targetElement) {
  return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;
};
var handleScroll = function handleScroll2(event, targetElement) {
  var clientY = event.targetTouches[0].clientY - initialClientY;
  if (allowTouchMove(event.target)) {
    return false;
  }
  if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
    return preventDefault(event);
  }
  if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
    return preventDefault(event);
  }
  event.stopPropagation();
  return true;
};
var disableBodyScroll = function disableBodyScroll2(targetElement, options) {
  if (!targetElement) {
    console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
    return;
  }
  if (locks.some(function(lock2) {
    return lock2.targetElement === targetElement;
  })) {
    return;
  }
  var lock = {
    targetElement,
    options: options || {}
  };
  locks = [].concat(_toConsumableArray(locks), [lock]);
  if (isIosDevice) {
    targetElement.ontouchstart = function(event) {
      if (event.targetTouches.length === 1) {
        initialClientY = event.targetTouches[0].clientY;
      }
    };
    targetElement.ontouchmove = function(event) {
      if (event.targetTouches.length === 1) {
        handleScroll(event, targetElement);
      }
    };
    if (!documentListenerAdded) {
      document.addEventListener("touchmove", preventDefault, hasPassiveEvents ? { passive: false } : void 0);
      documentListenerAdded = true;
    }
  } else {
    setOverflowHidden(options);
  }
};
var clearAllBodyScrollLocks = function clearAllBodyScrollLocks2() {
  if (isIosDevice) {
    locks.forEach(function(lock) {
      lock.targetElement.ontouchstart = null;
      lock.targetElement.ontouchmove = null;
    });
    if (documentListenerAdded) {
      document.removeEventListener("touchmove", preventDefault, hasPassiveEvents ? { passive: false } : void 0);
      documentListenerAdded = false;
    }
    initialClientY = -1;
  } else {
    restoreOverflowSetting();
  }
  locks = [];
};
var VPNavScreenMenuLink_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPNavScreenMenuLink[data-v-0a87216f] {\n  display: block;\n  border-bottom: 1px solid var(--vt-c-divider-light);\n  padding: 12px 0 11px;\n  line-height: 24px;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--vt-c-text-1);\n  transition: border-color 0.5s, color 0.25s;\n}\n.VPNavScreenMenuLink[data-v-0a87216f]:hover {\n  color: var(--vt-c-brand);\n}\n")();
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  props: {
    text: null,
    link: null
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$H), {
        class: "VPNavScreenMenuLink",
        href: __props.link,
        onClick: unref(closeScreen)
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(__props.text), 1)
        ]),
        _: 1
      }, 8, ["href", "onClick"]);
    };
  }
});
var VPNavScreenMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-0a87216f"]]);
var VPNavScreenMenuGroupLink_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPNavScreenMenuGroupLink[data-v-cb59e258] {\n  display: block;\n  line-height: 32px;\n  font-size: 13px;\n  font-weight: 400;\n  color: var(--vt-c-text-1);\n  transition: color 0.25s;\n  margin-left: 0.6em;\n}\n.VPNavScreenMenuGroupLink[data-v-cb59e258]:hover {\n  color: var(--vt-c-brand);\n}\n")();
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  props: {
    text: null,
    link: null
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$H), {
        class: "VPNavScreenMenuGroupLink",
        href: __props.link,
        onClick: unref(closeScreen)
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(__props.text), 1)
        ]),
        _: 1
      }, 8, ["href", "onClick"]);
    };
  }
});
var VPNavScreenMenuGroupLink = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-cb59e258"]]);
var VPNavScreenMenuGroupSection_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPNavScreenMenuGroupSection[data-v-6faa7dda] {\n  display: block;\n}\n.title[data-v-6faa7dda] {\n  line-height: 32px;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--vt-c-text-2);\n  text-transform: uppercase;\n  transition: color 0.25s;\n}\n")();
const _hoisted_1$h = { class: "VPNavScreenMenuGroupSection" };
const _hoisted_2$b = {
  key: 0,
  class: "title"
};
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  props: {
    text: null,
    items: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$h, [
        __props.text ? (openBlock(), createElementBlock("p", _hoisted_2$b, toDisplayString(__props.text), 1)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
          return openBlock(), createBlock(VPNavScreenMenuGroupLink, {
            key: item.text,
            text: item.text,
            link: item.link
          }, null, 8, ["text", "link"]);
        }), 128))
      ]);
    };
  }
});
var VPNavScreenMenuGroupSection = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-6faa7dda"]]);
var VPNavScreenMenuGroup_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPNavScreenMenuGroup[data-v-351ae094] {\n  border-bottom: 1px solid var(--vt-c-divider-light);\n  height: 48px;\n  overflow: hidden;\n  transition: border-color 0.5s;\n}\n.VPNavScreenMenuGroup .items[data-v-351ae094] {\n  visibility: hidden;\n}\n.VPNavScreenMenuGroup.open .items[data-v-351ae094] {\n  visibility: visible;\n}\n.VPNavScreenMenuGroup.open[data-v-351ae094] {\n  padding-bottom: 10px;\n  height: auto;\n}\n.VPNavScreenMenuGroup.open .button[data-v-351ae094] {\n  padding-bottom: 6px;\n  color: var(--vt-c-brand);\n}\n.VPNavScreenMenuGroup.open .button-icon[data-v-351ae094] {\n  transform: rotate(45deg);\n}\n.button[data-v-351ae094] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 4px 11px 0;\n  width: 100%;\n  line-height: 24px;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--vt-c-text-1);\n  transition: color 0.25s;\n}\n.button[data-v-351ae094]:hover {\n  color: var(--vt-c-brand);\n}\n.button-icon[data-v-351ae094] {\n  width: 14px;\n  height: 14px;\n  fill: var(--vt-c-text-2);\n  transition: fill 0.5s, transform 0.25s;\n}\n.group[data-v-351ae094]:first-child {\n  padding-top: 4px;\n}\n.group + .group[data-v-351ae094] {\n  padding-top: 8px;\n}\n.group + .item[data-v-351ae094] {\n  padding-top: 8px;\n}\n")();
const _hoisted_1$g = ["aria-controls", "aria-expanded"];
const _hoisted_2$a = { class: "button-text" };
const _hoisted_3$6 = ["id"];
const _hoisted_4$5 = {
  key: 1,
  class: "group"
};
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  props: {
    text: null,
    items: null
  },
  setup(__props) {
    const props = __props;
    const isOpen = ref(false);
    const groupId = computed(() => `NavScreenGroup-${props.text.replace(" ", "-").toLowerCase()}`);
    function toggle() {
      isOpen.value = !isOpen.value;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["VPNavScreenMenuGroup", { open: isOpen.value }])
      }, [
        createBaseVNode("button", {
          class: "button",
          "aria-controls": unref(groupId),
          "aria-expanded": isOpen.value,
          onClick: toggle
        }, [
          createBaseVNode("span", _hoisted_2$a, toDisplayString(__props.text), 1),
          createVNode(unref(VTIconPlus), { class: "button-icon" })
        ], 8, _hoisted_1$g),
        createBaseVNode("div", {
          id: unref(groupId),
          class: "items"
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
            return openBlock(), createElementBlock(Fragment, {
              key: item.text
            }, [
              "link" in item ? (openBlock(), createElementBlock("div", {
                key: item.text,
                class: "item"
              }, [
                createVNode(VPNavScreenMenuGroupLink, {
                  text: item.text,
                  link: item.link
                }, null, 8, ["text", "link"])
              ])) : (openBlock(), createElementBlock("div", _hoisted_4$5, [
                createVNode(VPNavScreenMenuGroupSection, {
                  text: item.text,
                  items: item.items
                }, null, 8, ["text", "items"])
              ]))
            ], 64);
          }), 128))
        ], 8, _hoisted_3$6)
      ], 2);
    };
  }
});
var VPNavScreenMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-351ae094"]]);
const _hoisted_1$f = {
  key: 0,
  class: "VPNavScreenMenu"
};
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { config } = useConfig();
    return (_ctx, _cache) => {
      return unref(config).nav ? (openBlock(), createElementBlock("nav", _hoisted_1$f, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(config).nav, (item) => {
          return openBlock(), createElementBlock(Fragment, {
            key: item.text
          }, [
            "link" in item ? (openBlock(), createBlock(VPNavScreenMenuLink, {
              key: 0,
              text: item.text,
              link: item.link
            }, null, 8, ["text", "link"])) : (openBlock(), createBlock(VPNavScreenMenuGroup, {
              key: 1,
              text: item.text || "",
              items: item.items
            }, null, 8, ["text", "items"]))
          ], 64);
        }), 128))
      ])) : createCommentVNode("", true);
    };
  }
});
var VPNavScreenAppearance_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPNavScreenAppearance[data-v-0870c50a] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 8px;\n  padding: 12px 14px 12px 16px;\n  background-color: var(--vt-c-bg-soft);\n  transition: background-color 0.5s;\n}\n.text[data-v-0870c50a] {\n  line-height: 24px;\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--vt-c-text-2);\n  transition: color 0.5s;\n}\n")();
const _withScopeId$4 = (n) => (pushScopeId("data-v-0870c50a"), n = n(), popScopeId(), n);
const _hoisted_1$e = {
  key: 0,
  class: "VPNavScreenAppearance"
};
const _hoisted_2$9 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("p", { class: "text" }, "Appearance", -1));
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { config } = useConfig();
    return (_ctx, _cache) => {
      return unref(config).appearance ? (openBlock(), createElementBlock("div", _hoisted_1$e, [
        _hoisted_2$9,
        createVNode(unref(_sfc_main$y))
      ])) : createCommentVNode("", true);
    };
  }
});
var VPNavScreenAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-0870c50a"]]);
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { config } = useConfig();
    return (_ctx, _cache) => {
      return unref(config).socialLinks ? (openBlock(), createBlock(unref(_sfc_main$A), {
        key: 0,
        class: "VPNavScreenSocialLinks",
        size: "medium",
        links: unref(config).socialLinks
      }, null, 8, ["links"])) : createCommentVNode("", true);
    };
  }
});
var VPNavScreen_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPNavScreen[data-v-1f9a089b] {\n  position: fixed;\n  top: calc(var(--vt-nav-height) + var(--vt-banner-height, 0px));\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 0 32px;\n  width: 100%;\n  background-color: var(--vt-c-bg);\n  transition: background-color 0.5s;\n  overflow-y: auto;\n}\n.VPNavScreen.fade-enter-active[data-v-1f9a089b],\n.VPNavScreen.fade-leave-active[data-v-1f9a089b] {\n  transition: opacity 0.25s;\n}\n.VPNavScreen.fade-enter-active .container[data-v-1f9a089b],\n.VPNavScreen.fade-leave-active .container[data-v-1f9a089b] {\n  transition: transform 0.25s ease;\n}\n.VPNavScreen.fade-enter-from[data-v-1f9a089b],\n.VPNavScreen.fade-leave-to[data-v-1f9a089b] {\n  opacity: 0;\n}\n.VPNavScreen.fade-enter-from .container[data-v-1f9a089b],\n.VPNavScreen.fade-leave-to .container[data-v-1f9a089b] {\n  transform: translateY(-8px);\n}\n@media (min-width: 768px) {\n.VPNavScreen[data-v-1f9a089b] {\n    display: none;\n}\n}\n.container[data-v-1f9a089b] {\n  margin: 0 auto;\n  padding: 24px 0 96px;\n  max-width: 288px;\n}\n.menu + .appearance[data-v-1f9a089b] {\n  margin-top: 24px;\n}\n.menu + .social-links[data-v-1f9a089b] {\n  margin-top: 16px;\n}\n.appearance + .social-links[data-v-1f9a089b] {\n  margin-top: 12px;\n}\n")();
const _hoisted_1$d = { class: "container" };
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const screen = ref(null);
    function lockBodyScroll() {
      disableBodyScroll(screen.value, { reserveScrollBarGap: true });
    }
    function unlockBodyScroll() {
      clearAllBodyScrollLocks();
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: "fade",
        onEnter: lockBodyScroll,
        onAfterLeave: unlockBodyScroll
      }, {
        default: withCtx(() => [
          __props.open ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "VPNavScreen",
            ref_key: "screen",
            ref: screen
          }, [
            createBaseVNode("div", _hoisted_1$d, [
              createVNode(_sfc_main$j, { class: "menu" }),
              createVNode(VPNavScreenAppearance, { class: "appearance" }),
              createVNode(_sfc_main$h, { class: "social-links" })
            ])
          ], 512)) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
var VPNavScreen = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-1f9a089b"]]);
var VPNav_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPNav[data-v-120da9e6] {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: var(--vp-z-index-nav);\n}\n@media (min-width: 960px) {\n.VPNav[data-v-120da9e6] {\n    position: fixed;\n    top: var(--vt-banner-height, 0px);\n    width: 100%;\n}\n}\n")();
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { isScreenOpen, closeScreen, toggleScreen } = useNav();
    const { hasSidebar } = useSidebar();
    provide("close-screen", closeScreen);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("header", {
        class: normalizeClass(["VPNav nav-bar", { stick: !unref(hasSidebar) }])
      }, [
        createVNode(VPNavBar, {
          "is-screen-open": unref(isScreenOpen),
          onToggleScreen: unref(toggleScreen)
        }, null, 8, ["is-screen-open", "onToggleScreen"]),
        createVNode(VPNavScreen, { open: unref(isScreenOpen) }, null, 8, ["open"])
      ], 2);
    };
  }
});
var VPNav = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-120da9e6"]]);
var VPLocalNav_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPLocalNav[data-v-38885c70] {\n  position: sticky;\n  top: var(--vt-banner-height, 0px);\n  left: 0;\n  z-index: var(--vp-z-index-local-nav);\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid var(--vt-c-divider-light);\n  background-color: var(--vt-c-bg);\n  transition: border-color 0.5s, background-color 0.5s;\n}\n@media (min-width: 960px) {\n.VPLocalNav[data-v-38885c70] {\n    display: none;\n}\n}\n.menu[data-v-38885c70] {\n  display: flex;\n  align-items: center;\n  padding: 0 24px;\n  line-height: 47px;\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--vt-c-text-2);\n  transition: color 0.5s;\n}\n.menu[data-v-38885c70]:hover {\n  color: var(--vt-c-text-1);\n  transition: color 0.25s;\n}\n@media (min-width: 768px) {\n.menu[data-v-38885c70] {\n    padding: 0 32px;\n}\n}\n.menu-icon[data-v-38885c70] {\n  margin-right: 8px;\n  width: 16px;\n  height: 16px;\n  fill: currentColor;\n}\n.top-link[data-v-38885c70] {\n  padding: 0 24px;\n  line-height: 47px;\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--vt-c-text-2);\n  transition: color 0.5s;\n}\n.top-link[data-v-38885c70]:hover {\n  color: var(--vt-c-text-1);\n  transition: color 0.25s;\n}\n@media (min-width: 768px) {\n.top-link[data-v-38885c70] {\n    padding: 0 32px;\n}\n}\n")();
const _withScopeId$3 = (n) => (pushScopeId("data-v-38885c70"), n = n(), popScopeId(), n);
const _hoisted_1$c = {
  key: 0,
  class: "VPLocalNav"
};
const _hoisted_2$8 = ["aria-expanded"];
const _hoisted_3$5 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("span", { class: "menu-text" }, "Menu", -1));
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const { hasSidebar } = useSidebar();
    const { frontmatter } = useData();
    function scrollToTop() {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    return (_ctx, _cache) => {
      return unref(hasSidebar) ? (openBlock(), createElementBlock("div", _hoisted_1$c, [
        createBaseVNode("button", {
          class: "menu",
          "aria-expanded": __props.open,
          "aria-controls": "VPSidebarNav",
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("open-menu"))
        }, [
          createVNode(unref(VTIconAlignLeft), { class: "menu-icon" }),
          _hoisted_3$5
        ], 8, _hoisted_2$8),
        unref(frontmatter).returnToTop !== false ? (openBlock(), createElementBlock("a", {
          key: 0,
          class: "top-link",
          href: "#",
          onClick: scrollToTop
        }, "Return to top")) : createCommentVNode("", true)
      ])) : createCommentVNode("", true);
    };
  }
});
var VPLocalNav = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-38885c70"]]);
var VPSkipLink_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPSkipLink[data-v-278575dc] {\n  top: 0.25rem;\n  left: 0.25rem;\n  padding: 0.65rem 1.5rem;\n  z-index: 999;\n  font-size: 0.9em;\n  font-weight: bold;\n  text-decoration: none;\n  color: var(--vt-c-green);\n  box-shadow: var(--vt-shadow-3);\n  background-color: var(--vt-c-bg);\n  border-radius: 8px;\n}\n.dark .VPSkipLink[data-v-278575dc] {\n  color: var(--vt-c-green);\n}\n.VPSkipLink[data-v-278575dc]:focus {\n  height: auto;\n  width: auto;\n  clip: auto;\n  clip-path: none;\n}\n")();
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const route = useRoute();
    const backToTop = ref();
    watch(() => route.path, () => backToTop.value.focus());
    const focusOnTargetAnchor = ({ target }) => {
      const el = document.querySelector(target.hash);
      if (el) {
        const removeTabIndex = () => {
          el.removeAttribute("tabindex");
          el.removeEventListener("blur", removeTabIndex);
        };
        el.setAttribute("tabindex", "-1");
        el.addEventListener("blur", removeTabIndex);
        el.focus();
        window.scrollTo(0, 0);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("span", {
          ref_key: "backToTop",
          ref: backToTop,
          tabindex: "-1"
        }, null, 512),
        createBaseVNode("a", {
          href: "#VPContent",
          class: "VPSkipLink visually-hidden",
          onClick: focusOnTargetAnchor
        }, " Skip to content ")
      ], 64);
    };
  }
});
var VPSkipLink = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-278575dc"]]);
const _hoisted_1$b = {
  class: "visually-hidden",
  "aria-live": "polite"
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { page } = useData();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$b, toDisplayString(unref(page).title) + " has loaded", 1);
    };
  }
});
var VPSidebarLink_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.link[data-v-f9e145ee] {\n  display: block;\n  padding: 6px 0;\n}\n@media (min-width: 960px) {\n.link[data-v-f9e145ee] {\n    padding: 4px 0;\n}\n}\n.link:hover .link-text[data-v-f9e145ee] {\n  color: var(--vt-c-brand-text-1);\n  transition: color 0.25s;\n}\n.link.active .link-text[data-v-f9e145ee] {\n  font-weight: 600;\n  color: var(--vt-c-brand);\n  transition: color 0.25s;\n}\n.link-text[data-v-f9e145ee] {\n  line-height: 20px;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--vt-c-text-2);\n  transition: color 0.5s;\n}\n")();
const _hoisted_1$a = ["href"];
const _hoisted_2$7 = { class: "link-text" };
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  props: {
    item: null
  },
  setup(__props) {
    const { page } = useData();
    const closeSideBar = inject("close-sidebar");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        class: normalizeClass({ link: true, active: unref(isActive)(unref(page).relativePath, __props.item.link) }),
        href: __props.item.link,
        onClick: _cache[0] || (_cache[0] = (...args) => unref(closeSideBar) && unref(closeSideBar)(...args))
      }, [
        createBaseVNode("p", _hoisted_2$7, toDisplayString(__props.item.text), 1)
      ], 10, _hoisted_1$a);
    };
  }
});
var VPSidebarLink = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-f9e145ee"]]);
var VPSidebarGroup_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.title[data-v-8aa87b8a] {\n  padding: 6px 0;\n}\n@media (min-width: 960px) {\n.title[data-v-8aa87b8a] {\n    padding: 4px 0;\n}\n}\n.title-text[data-v-8aa87b8a] {\n  line-height: 20px;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--vt-c-text-1);\n  transition: color 0.5s;\n}\n")();
const _hoisted_1$9 = { class: "VPSidebarGroup" };
const _hoisted_2$6 = { class: "title" };
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  props: {
    text: null,
    items: null
  },
  setup(__props) {
    const props = __props;
    const { page } = useData();
    function hasActiveLink() {
      const { relativePath } = page.value;
      return props.items.some((item) => isActive(relativePath, item.link));
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1$9, [
        createBaseVNode("div", _hoisted_2$6, [
          createBaseVNode("h2", {
            class: normalizeClass(["title-text", { active: hasActiveLink() }])
          }, toDisplayString(__props.text), 3)
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
          return openBlock(), createBlock(VPSidebarLink, {
            key: item.link,
            item
          }, null, 8, ["item"]);
        }), 128))
      ]);
    };
  }
});
var VPSidebarGroup = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-8aa87b8a"]]);
var VPSidebar_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPSidebar[data-v-7c4cef86] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: var(--vp-z-index-sidebar);\n  padding: 0 32px 96px;\n  width: calc(100vw - 64px);\n  max-width: var(--vp-sidebar-width-mobile);\n  opacity: 0;\n  background-color: var(--vt-c-bg);\n  box-shadow: var(--vt-c-shadow-3);\n  overflow-x: hidden;\n  overflow-y: auto;\n  transform: translateX(-100%);\n  transition: background-color 0.5s, opacity 0.5s, transform 0.3s ease;\n  /* -ms-overflow-style: none; */\n  /* scrollbar-width: none; */\n}\n#VPSidebarNav[data-v-7c4cef86] {\n  padding-top: 24px;\n  outline: 0;\n}\n\n/* .VPSidebar::-webkit-scrollbar {\n  display: none;\n} */\n@media (min-width: 960px) {\n.VPSidebar[data-v-7c4cef86] {\n    top: calc(var(--vt-nav-height) + var(--vt-banner-height, 0px));\n    z-index: 1;\n    border-right: 1px solid var(--vt-c-divider-light);\n    width: var(--vp-sidebar-width-small);\n    max-width: 100%;\n    opacity: 1;\n    visibility: visible;\n    box-shadow: none;\n    transform: translateX(0);\n    transition: border-color 0.5s, background-color 0.5s;\n}\n}\n@media (min-width: 1440px) {\n.VPSidebar[data-v-7c4cef86] {\n    padding: 0 32px 96px calc((100% - var(--vp-screen-max-width)) / 2);\n    width: calc(\n      (100% - var(--vp-screen-max-width)) / 2 + var(--vp-sidebar-width-small)\n    );\n}\n}\n.VPSidebar.open[data-v-7c4cef86] {\n  opacity: 1;\n  visibility: visible;\n  transform: translateX(0);\n  transition: background-color 0.5s, opacity 0.25s,\n    transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);\n}\n.dark .VPSidebar[data-v-7c4cef86] {\n  box-shadow: var(--vt-shadow-1);\n}\n.group + .group[data-v-7c4cef86] {\n  padding-top: 24px;\n}\n@media (min-width: 960px) {\n.group + .group[data-v-7c4cef86] {\n    padding-top: 16px;\n}\n}\n")();
const _withScopeId$2 = (n) => (pushScopeId("data-v-7c4cef86"), n = n(), popScopeId(), n);
const _hoisted_1$8 = {
  id: "VPSidebarNav",
  "aria-labelledby": "sidebar-aria-label",
  tabindex: "-1"
};
const _hoisted_2$5 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("span", {
  id: "sidebar-aria-label",
  class: "visually-hidden"
}, "Sidebar Navigation", -1));
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const { sidebar, hasSidebar } = useSidebar();
    let navEl = ref(null);
    watchPostEffect(async () => {
      var _a2;
      if (props.open) {
        await nextTick();
        (_a2 = navEl.value) == null ? void 0 : _a2.focus();
      }
    });
    return (_ctx, _cache) => {
      return unref(hasSidebar) ? (openBlock(), createElementBlock("aside", {
        key: 0,
        ref_key: "navEl",
        ref: navEl,
        class: normalizeClass(["VPSidebar", { open: __props.open }]),
        onClick: _cache[0] || (_cache[0] = withModifiers(() => {
        }, ["stop"]))
      }, [
        createBaseVNode("nav", _hoisted_1$8, [
          renderSlot(_ctx.$slots, "top", {}, void 0, true),
          _hoisted_2$5,
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(sidebar), (group) => {
            return openBlock(), createElementBlock("div", {
              key: group.text,
              class: "group"
            }, [
              createVNode(VPSidebarGroup, {
                text: group.text,
                items: group.items
              }, null, 8, ["text", "items"])
            ]);
          }), 128)),
          renderSlot(_ctx.$slots, "bottom", {}, void 0, true)
        ])
      ], 2)) : createCommentVNode("", true);
    };
  }
});
var VPSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-7c4cef86"]]);
var VPFooter_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPFooter[data-v-2f067d01] {\n  border-top: 1px solid var(--vt-c-bg-soft);\n  padding: 23px 0 24px;\n  background-color: var(--vt-c-bg-soft);\n  transition: border-top 0.5s, background-color 0.5s;\n}\n.dark .VPFooter[data-v-2f067d01] {\n  border-top: 1px solid var(--vt-c-divider-light);\n  background-color: var(--vt-c-bg);\n}\n.license[data-v-2f067d01],\n.copyright[data-v-2f067d01] {\n  text-align: center;\n  line-height: 20px;\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--vt-c-text-2);\n  transition: color 0.25s;\n}\n.link[data-v-2f067d01] {\n  color: var(--vt-c-text-1);\n  transition: color 0.25s;\n}\n.link[data-v-2f067d01]:hover {\n  color: var(--vt-c-text-2);\n}\n")();
const _hoisted_1$7 = { class: "VPFooter" };
const _hoisted_2$4 = {
  key: 0,
  class: "license"
};
const _hoisted_3$4 = /* @__PURE__ */ createTextVNode(" Released under the ");
const _hoisted_4$4 = /* @__PURE__ */ createTextVNode(". ");
const _hoisted_5$4 = {
  key: 1,
  class: "copyright"
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { theme } = useData();
    return (_ctx, _cache) => {
      var _a2, _b2;
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        ((_a2 = unref(theme).footer) == null ? void 0 : _a2.license) ? (openBlock(), createElementBlock("p", _hoisted_2$4, [
          _hoisted_3$4,
          createVNode(unref(_sfc_main$H), {
            class: "link",
            href: unref(theme).footer.license.link,
            "no-icon": ""
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(theme).footer.license.text), 1)
            ]),
            _: 1
          }, 8, ["href"]),
          _hoisted_4$4
        ])) : createCommentVNode("", true),
        ((_b2 = unref(theme).footer) == null ? void 0 : _b2.copyright) ? (openBlock(), createElementBlock("p", _hoisted_5$4, toDisplayString(unref(theme).footer.copyright), 1)) : createCommentVNode("", true)
      ]);
    };
  }
});
var VPFooter = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-2f067d01"]]);
const _hoisted_1$6 = { class: "VPContentPage" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { frontmatter } = useData();
    return (_ctx, _cache) => {
      const _component_Content = resolveComponent("Content");
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        createBaseVNode("main", null, [
          createVNode(_component_Content)
        ]),
        renderSlot(_ctx.$slots, "footer-before"),
        unref(frontmatter).footer !== false ? (openBlock(), createBlock(VPFooter, { key: 0 })) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "footer-after")
      ]);
    };
  }
});
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
const isClient = typeof window !== "undefined";
function tryOnMounted(fn, sync = true) {
  if (getCurrentInstance())
    onMounted(fn);
  else if (sync)
    fn();
  else
    nextTick(fn);
}
const defaultWindow = isClient ? window : void 0;
isClient ? window.document : void 0;
isClient ? window.navigator : void 0;
isClient ? window.location : void 0;
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow } = options;
  let mediaQuery;
  const matches = ref(false);
  const update = () => {
    if (!window2)
      return;
    if (!mediaQuery)
      mediaQuery = window2.matchMedia(query);
    matches.value = mediaQuery.matches;
  };
  tryOnMounted(() => {
    update();
    if (!mediaQuery)
      return;
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", update);
    else
      mediaQuery.addListener(update);
    tryOnScopeDispose(() => {
      if ("removeEventListener" in update)
        mediaQuery.removeEventListener("change", update);
      else
        mediaQuery.removeListener(update);
    });
  });
  return matches;
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
_global[globalKey];
var _a, _b;
isClient && (window == null ? void 0 : window.navigator) && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.platform) && /iP(ad|hone|od)/.test((_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.platform);
var __defProp$3 = Object.defineProperty;
var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3.call(b, prop))
      __defNormalProp$3(a, prop, b[prop]);
  if (__getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(b)) {
      if (__propIsEnum$3.call(b, prop))
        __defNormalProp$3(a, prop, b[prop]);
    }
  return a;
};
const initialRect = {
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  height: 0,
  width: 0
};
__spreadValues$3({
  text: ""
}, initialRect);
function resolveHeaders(headers) {
  return mapHeaders(groupHeaders(headers));
}
function groupHeaders(headers) {
  headers = headers.map((h2) => Object.assign({}, h2));
  let lastH2;
  for (const h2 of headers) {
    if (h2.level === 2) {
      lastH2 = h2;
    } else if (lastH2 && h2.level <= 3) {
      (lastH2.children || (lastH2.children = [])).push(h2);
    }
  }
  return headers.filter((h2) => h2.level === 2);
}
function mapHeaders(headers) {
  return headers.map((header) => ({
    text: header.title,
    link: `#${header.slug}`,
    children: header.children ? mapHeaders(header.children) : void 0,
    hidden: header.hidden
  }));
}
function useActiveAnchor(container, bg) {
  const isOutlineEnabled = useMediaQuery("(min-width: 1280px)");
  const onScroll = throttleAndDebounce(setActiveLink, 100);
  function setActiveLink() {
    if (!isOutlineEnabled.value) {
      return;
    }
    const links = [].slice.call(container.value.querySelectorAll(".outline-link"));
    const anchors = [].slice.call(document.querySelectorAll(".content .header-anchor")).filter((anchor) => links.some((link2) => link2.hash === anchor.hash));
    if (anchors.length && window.scrollY + window.innerHeight === document.body.offsetHeight) {
      activateLink(anchors[anchors.length - 1].hash);
      return;
    }
    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i];
      const nextAnchor = anchors[i + 1];
      const [isActive2, hash] = isAnchorActive(i, anchor, nextAnchor);
      if (isActive2) {
        history.replaceState(null, document.title, hash ? hash : " ");
        activateLink(hash);
        return;
      }
    }
  }
  let prevActiveLink = null;
  function activateLink(hash) {
    if (prevActiveLink) {
      prevActiveLink.classList.remove("active");
    }
    const activeLink = prevActiveLink = hash == null ? null : container.value.querySelector(`a[href="${decodeURIComponent(hash)}"]`);
    if (activeLink) {
      activeLink.classList.add("active");
      bg.value.style.opacity = "1";
      bg.value.style.top = activeLink.offsetTop + 33 + "px";
    } else {
      bg.value.style.opacity = "0";
      bg.value.style.top = "33px";
    }
  }
  onMounted(() => {
    requestAnimationFrame(setActiveLink);
    window.addEventListener("scroll", onScroll);
  });
  onUpdated(() => {
    activateLink(location.hash);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
  });
}
const pageOffset = 56;
function getAnchorTop(anchor) {
  return anchor.parentElement.offsetTop - pageOffset - 15;
}
function isAnchorActive(index2, anchor, nextAnchor) {
  const scrollTop = window.scrollY;
  if (index2 === 0 && scrollTop === 0) {
    return [true, null];
  }
  if (scrollTop < getAnchorTop(anchor)) {
    return [false, null];
  }
  if (!nextAnchor || scrollTop < getAnchorTop(nextAnchor)) {
    return [true, anchor.hash];
  }
  return [false, null];
}
function throttleAndDebounce(fn, delay) {
  let timeout;
  let called = false;
  return () => {
    if (timeout) {
      clearTimeout(timeout);
    }
    if (!called) {
      fn();
      called = true;
      setTimeout(() => {
        called = false;
      }, delay);
    } else {
      timeout = setTimeout(fn, delay);
    }
  };
}
var VPContentDocOutline_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPContentDocOutline[data-v-238a0d02] {\n  font-size: 13px;\n  font-weight: 500;\n  position: relative;\n}\n.outline-title[data-v-238a0d02] {\n  font-weight: 700;\n  margin-bottom: 4px;\n  text-transform: uppercase;\n  font-size: 11px;\n  letter-spacing: 0.4px;\n}\n.outline-link[data-v-238a0d02] {\n  color: var(--vt-c-text-2);\n  transition: color 0.5s;\n  line-height: 28px;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.outline-link[data-v-238a0d02]:hover,\n.outline-link.active[data-v-238a0d02] {\n  color: var(--vt-c-text-1);\n  transition: color 0.25s;\n}\n.outline-link.nested[data-v-238a0d02] {\n  padding-left: 1em;\n}\n.outline-marker[data-v-238a0d02] {\n  opacity: 0;\n  position: absolute;\n  background-color: var(--vt-c-green);\n  border-radius: 4px;\n  width: 4px;\n  height: 20px;\n  top: 32px;\n  left: -12px;\n  z-index: 0;\n  transition: top 0.25s cubic-bezier(0, 1, 0.5, 1), opacity 0.25s,\n    background-color 0.5s;\n}\n.root[data-v-238a0d02] {\n  z-index: 1;\n  position: relative;\n}\n")();
const _withScopeId$1 = (n) => (pushScopeId("data-v-238a0d02"), n = n(), popScopeId(), n);
const _hoisted_1$5 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "outline-title" }, "On this page", -1));
const _hoisted_2$3 = { "aria-labelledby": "doc-outline-aria-label" };
const _hoisted_3$3 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("span", {
  id: "doc-outline-aria-label",
  class: "visually-hidden"
}, "Table of Contents for current page", -1));
const _hoisted_4$3 = { class: "root" };
const _hoisted_5$3 = ["href"];
const _hoisted_6$2 = { key: 0 };
const _hoisted_7$2 = ["href"];
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { page, frontmatter } = useData();
    const container = ref();
    const marker = ref();
    useActiveAnchor(container, marker);
    const filterHeaders = inject("filter-headers", null);
    const filteredHeaders = computed(() => {
      return filterHeaders ? page.value.headers.map((h2) => {
        return filterHeaders(h2) ? h2 : Object.assign({}, h2, { hidden: true });
      }) : page.value.headers;
    });
    const handleClick = ({ target: el }) => {
      const id = "#" + el.href.split("#")[1];
      const heading = document.querySelector(id);
      heading == null ? void 0 : heading.focus();
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "VPContentDocOutline",
        ref_key: "container",
        ref: container
      }, [
        createBaseVNode("div", {
          class: "outline-marker",
          ref_key: "marker",
          ref: marker
        }, null, 512),
        _hoisted_1$5,
        createBaseVNode("nav", _hoisted_2$3, [
          _hoisted_3$3,
          createBaseVNode("ul", _hoisted_4$3, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(resolveHeaders)(unref(filteredHeaders)), ({ text, link: link2, children, hidden }) => {
              return withDirectives((openBlock(), createElementBlock("li", null, [
                createBaseVNode("a", {
                  class: "outline-link",
                  href: link2,
                  onClick: handleClick
                }, toDisplayString(text), 9, _hoisted_5$3),
                children && unref(frontmatter).outline === "deep" ? (openBlock(), createElementBlock("ul", _hoisted_6$2, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(children, ({ text: text2, link: link22, hidden: hidden2 }) => {
                    return withDirectives((openBlock(), createElementBlock("li", null, [
                      createBaseVNode("a", {
                        class: "outline-link nested",
                        href: link22,
                        onClick: handleClick
                      }, toDisplayString(text2), 9, _hoisted_7$2)
                    ], 512)), [
                      [vShow, !hidden2]
                    ]);
                  }), 256))
                ])) : createCommentVNode("", true)
              ], 512)), [
                [vShow, !hidden]
              ]);
            }), 256))
          ])
        ])
      ], 512);
    };
  }
});
var VPContentDocOutline = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-238a0d02"]]);
var VPContentDocFooter_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPContentDocFooter[data-v-eed9d8b8] {\n  border-top: 1px solid var(--vt-c-divider-light);\n  padding-top: 1rem;\n  display: flex;\n  justify-content: space-between;\n}\na[data-v-eed9d8b8] {\n  display: inline-block;\n  font-weight: 500;\n  font-size: 16px;\n  max-width: 48%;\n}\n.desc[data-v-eed9d8b8] {\n  font-size: 11px;\n  color: var(--vt-c-text-2);\n  display: block;\n}\n.title[data-v-eed9d8b8] {\n  color: var(--vt-c-brand);\n  transition: color 0.25s;\n}\na:hover .title[data-v-eed9d8b8] {\n  color: var(--vt-c-brand-highlight);\n}\n.next-link[data-v-eed9d8b8] {\n  margin-left: auto;\n  text-align: right;\n}\n.vt-link-icon[data-v-eed9d8b8] {\n  margin: -2px 0 0;\n  vertical-align: middle;\n}\n")();
const _hoisted_1$4 = {
  key: 0,
  class: "VPContentDocFooter"
};
const _hoisted_2$2 = ["href"];
const _hoisted_3$2 = { class: "desc" };
const _hoisted_4$2 = /* @__PURE__ */ createTextVNode(" Previous");
const _hoisted_5$2 = { class: "title" };
const _hoisted_6$1 = ["href"];
const _hoisted_7$1 = { class: "desc" };
const _hoisted_8$1 = /* @__PURE__ */ createTextVNode("Next ");
const _hoisted_9$1 = { class: "title" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { page, theme } = useData();
    const links = computed(() => {
      const sidebar = getSidebar(theme.value.sidebar, page.value.relativePath);
      const candidates = getFlatSideBarLinks(sidebar);
      const index2 = candidates.findIndex((link2) => isActive(page.value.relativePath, link2.link));
      return {
        prev: candidates[index2 - 1],
        next: candidates[index2 + 1]
      };
    });
    function getFlatSideBarLinks(sidebar) {
      const links2 = [];
      for (const group of sidebar) {
        for (const link2 of group.items) {
          links2.push(link2);
        }
      }
      return links2;
    }
    return (_ctx, _cache) => {
      return unref(links).prev || unref(links).next ? (openBlock(), createElementBlock("footer", _hoisted_1$4, [
        unref(links).prev ? (openBlock(), createElementBlock("a", {
          key: 0,
          class: "prev-link",
          href: unref(normalizeLink)(unref(links).prev.link)
        }, [
          createBaseVNode("span", _hoisted_3$2, [
            createVNode(unref(VTIconChevronLeft), { class: "vt-link-icon" }),
            _hoisted_4$2
          ]),
          createBaseVNode("span", _hoisted_5$2, toDisplayString(unref(links).prev.text), 1)
        ], 8, _hoisted_2$2)) : createCommentVNode("", true),
        unref(links).next ? (openBlock(), createElementBlock("a", {
          key: 1,
          class: "next-link",
          href: unref(normalizeLink)(unref(links).next.link)
        }, [
          createBaseVNode("span", _hoisted_7$1, [
            _hoisted_8$1,
            createVNode(unref(VTIconChevronRight), { class: "vt-link-icon" })
          ]),
          createBaseVNode("span", _hoisted_9$1, toDisplayString(unref(links).next.text), 1)
        ], 8, _hoisted_6$1)) : createCommentVNode("", true)
      ])) : createCommentVNode("", true);
    };
  }
});
var VPContentDocFooter = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-eed9d8b8"]]);
var VPCarbonAds_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => "\n.VPCarbonAds {\n  margin: 28px 0;\n  padding: 20px 24px;\n  background-color: var(--vt-c-bg-soft);\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 500;\n  line-height: 1.4;\n  color: var(--vt-c-text-2);\n  text-align: center;\n  transition: color 0.5s, background-color 0.5s;\n}\n.VPCarbonAds img {\n  margin: 0 auto 12px;\n  border-radius: 4px;\n}\n.VPCarbonAds .carbon-poweredby {\n  display: block;\n  margin-top: 6px;\n  text-transform: uppercase;\n  transition: color 0.5s;\n  color: var(--vt-c-text-3);\n  font-size: 10px;\n}\n")();
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { theme } = useData();
    const carbonOptions = theme.value.carbonAds;
    const container = ref();
    const isWide = useMediaQuery("(min-width: 1280px)");
    let hasInitalized = false;
    function init() {
      if (!hasInitalized) {
        hasInitalized = true;
        const s = document.createElement("script");
        s.id = "_carbonads_js";
        s.src = `//cdn.carbonads.com/carbon.js?serve=${carbonOptions.code}&placement=${carbonOptions.placement}`;
        s.async = true;
        container.value.appendChild(s);
      }
    }
    if (carbonOptions) {
      onMounted(() => {
        if (isWide.value) {
          init();
        } else {
          watch(isWide, (wide) => wide && init());
        }
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "VPCarbonAds",
        ref_key: "container",
        ref: container
      }, null, 512);
    };
  }
});
var VPContentDoc_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPContentDoc[data-v-aa0654cc] {\n  padding: 32px 24px 96px;\n}\n.vt-doc[data-v-aa0654cc] {\n  margin-bottom: 54px;\n}\n.content[data-v-aa0654cc] {\n  margin: 0 auto;\n  max-width: 688px;\n  position: relative;\n}\n.aside[data-v-aa0654cc] {\n  position: relative;\n  display: none;\n  flex-shrink: 0;\n  padding-left: 64px;\n  width: 320px;\n}\n.aside-container[data-v-aa0654cc] {\n  position: sticky;\n  width: 224px;\n  top: calc(var(--vt-nav-height) + var(--vt-banner-height, 0px) + 24px);\n  bottom: 0;\n}\n.aside-container[data-v-aa0654cc]::-webkit-scrollbar {\n  display: none;\n}\n.edit-link[data-v-aa0654cc] {\n  margin: 0 0 32px;\n  /* text-align: center; */\n}\n.edit-link .vt-link[data-v-aa0654cc] {\n  font-size: 14px;\n  color: var(--vt-c-brand);\n  font-weight: 500;\n}\n.vt-icon[data-v-aa0654cc] {\n  width: 18px;\n  height: 18px;\n  color: var(--vt-c-brand);\n  display: inline-block;\n  margin-right: 8px;\n  position: relative;\n  top: -1px;\n}\n@media (min-width: 768px) {\n.VPContentDoc[data-v-aa0654cc] {\n    padding: 48px 32px 96px;\n}\n}\n@media (min-width: 960px) {\n.VPContentDoc[data-v-aa0654cc] {\n    padding: 64px 64px 96px;\n}\n}\n@media (min-width: 1280px) {\n.VPContentDoc[data-v-aa0654cc] {\n    padding: 64px 0 96px 64px;\n}\n.VPContentDoc[data-v-aa0654cc]:not(.has-sidebar.has-aside) {\n    padding-left: calc((100vw - 688px) / 2);\n}\n.VPContentDoc.has-aside[data-v-aa0654cc]:not(.has-sidebar) {\n    padding-left: calc((100vw - 688px - 320px) / 2);\n}\n.container[data-v-aa0654cc] {\n    display: flex;\n}\n.content[data-v-aa0654cc] {\n    min-width: 620px;\n    margin: 0;\n    order: 1;\n}\n.VPContentDoc:not(.has-aside) .content[data-v-aa0654cc] {\n    min-width: 688px;\n}\n.aside[data-v-aa0654cc] {\n    display: block;\n    order: 2;\n}\n}\n@media (min-width: 1440px) {\n.VPContentDoc[data-v-aa0654cc] {\n    padding: 64px 0 96px 96px;\n}\n.aside[data-v-aa0654cc] {\n    padding-left: 96px;\n}\n}\n")();
const _hoisted_1$3 = { class: "container" };
const _hoisted_2$1 = {
  key: 0,
  class: "aside"
};
const _hoisted_3$1 = { class: "aside-container" };
const _hoisted_4$1 = { class: "content" };
const _hoisted_5$1 = {
  key: 0,
  class: "edit-link"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { page, frontmatter, theme } = useData();
    const hashMatch = /#(\w+)$/;
    const repoUrl = computed(() => {
      var _a2, _b2;
      const repo = ((_a2 = theme.value.editLink) == null ? void 0 : _a2.repo) || "vuejs/docs";
      const branch = ((_b2 = repo.match(hashMatch)) == null ? void 0 : _b2[1]) || "main";
      return `https://github.com/${repo}/edit/${branch}/src/${page.value.relativePath}`;
    });
    const pageClass = computed(() => {
      const { relativePath } = page.value;
      return relativePath.slice(0, relativePath.indexOf("/"));
    });
    return (_ctx, _cache) => {
      const _component_Content = resolveComponent("Content");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["VPContentDoc", { "has-aside": unref(frontmatter).aside !== false }])
      }, [
        createBaseVNode("div", _hoisted_1$3, [
          unref(frontmatter).aside !== false ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
            createBaseVNode("div", _hoisted_3$1, [
              renderSlot(_ctx.$slots, "aside-top", {}, void 0, true),
              unref(page).headers && unref(frontmatter).outline !== false ? (openBlock(), createBlock(VPContentDocOutline, { key: 0 })) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "aside-mid", {}, void 0, true),
              unref(theme).carbonAds && unref(frontmatter).ads !== false ? (openBlock(), createBlock(_sfc_main$4, { key: 1 })) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
            ])
          ])) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_4$1, [
            renderSlot(_ctx.$slots, "content-top", {}, void 0, true),
            createBaseVNode("main", null, [
              createVNode(_component_Content, {
                class: normalizeClass(["vt-doc", unref(pageClass)])
              }, null, 8, ["class"]),
              unref(theme).editLink && unref(frontmatter).editLink !== false ? (openBlock(), createElementBlock("p", _hoisted_5$1, [
                createVNode(unref(VTIconEdit), { class: "vt-icon" }),
                createVNode(unref(_sfc_main$H), {
                  href: unref(repoUrl),
                  "no-icon": true
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(theme).editLink.text), 1)
                  ]),
                  _: 1
                }, 8, ["href"])
              ])) : createCommentVNode("", true)
            ]),
            renderSlot(_ctx.$slots, "content-bottom", {}, void 0, true),
            unref(frontmatter).footer !== false ? (openBlock(), createBlock(VPContentDocFooter, { key: 0 })) : createCommentVNode("", true)
          ])
        ])
      ], 2);
    };
  }
});
var VPContentDoc = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-aa0654cc"]]);
var VPNotFound_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.vt-doc[data-v-76df36cc] {\n  padding: 32px 48px;\n  background-color: var(--vt-c-bg-soft);\n  margin: 32px;\n  border-radius: 8px;\n}\n.not-found-path[data-v-76df36cc] {\n  font-family: var(--vt-font-family-mono);\n  color: var(--vt-c-text-code);\n}\n")();
const _withScopeId = (n) => (pushScopeId("data-v-76df36cc"), n = n(), popScopeId(), n);
const _hoisted_1$2 = { class: "vt-doc" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", null, "Page Not Found", -1));
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" You found a dead link: ");
const _hoisted_4 = { class: "not-found-path" };
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_6 = { key: 0 };
const _hoisted_7 = /* @__PURE__ */ createTextVNode("Please ");
const _hoisted_8 = ["href"];
const _hoisted_9 = /* @__PURE__ */ createTextVNode(" so we can fix it.");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { theme } = useData();
    const route = useRoute();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        _hoisted_2,
        createBaseVNode("p", null, [
          _hoisted_3,
          createBaseVNode("span", _hoisted_4, toDisplayString(unref(route).path), 1),
          _hoisted_5,
          unref(theme).repo ? (openBlock(), createElementBlock("span", _hoisted_6, [
            _hoisted_7,
            createBaseVNode("a", {
              href: `https://github.com/${unref(theme).repo}`,
              target: "_blank"
            }, "let us know", 8, _hoisted_8),
            _hoisted_9
          ])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
var VPNotFound = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-76df36cc"]]);
var VPContent_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n@media (max-width: 768px) {\n.VPContent[data-v-fae15e66] {\n    overflow-x: hidden;\n}\n}\n@media (min-width: 960px) {\n.VPContent[data-v-fae15e66] {\n    padding-top: var(--vt-nav-height);\n}\n.VPContent.has-sidebar[data-v-fae15e66] {\n    padding-left: var(--vp-sidebar-width-small);\n}\n}\n@media (min-width: 1440px) {\n.VPContent.has-sidebar[data-v-fae15e66] {\n    padding-left: calc(\n      (100vw - var(--vp-screen-max-width)) / 2 + var(--vp-sidebar-width-small)\n    );\n}\n}\n")();
const _hoisted_1$1 = /* @__PURE__ */ createTextVNode("\\ ");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const route = useRoute();
    const { frontmatter } = useData();
    const { hasSidebar } = useSidebar();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: "VPContent",
        class: normalizeClass(["VPContent", { "has-sidebar": unref(hasSidebar) }])
      }, [
        unref(route).component === VPNotFound ? (openBlock(), createBlock(VPNotFound, { key: 0 })) : !!unref(frontmatter).page ? (openBlock(), createBlock(_sfc_main$7, { key: 1 }, {
          "footer-before": withCtx(() => [
            renderSlot(_ctx.$slots, "footer-before", {}, void 0, true)
          ]),
          "footer-after": withCtx(() => [
            renderSlot(_ctx.$slots, "footer-after", {}, void 0, true)
          ]),
          _: 3
        })) : (openBlock(), createBlock(VPContentDoc, {
          key: 2,
          class: normalizeClass({ "has-sidebar": unref(hasSidebar) })
        }, {
          "content-top": withCtx(() => [
            renderSlot(_ctx.$slots, "content-top", {}, void 0, true)
          ]),
          "content-bottom": withCtx(() => [
            renderSlot(_ctx.$slots, "content-bottom", {}, void 0, true)
          ]),
          "aside-top": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
          ]),
          "aside-mid": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-mid", {}, void 0, true)
          ]),
          "aside-bottom": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
          ]),
          default: withCtx(() => [
            _hoisted_1$1
          ]),
          _: 3
        }, 8, ["class"]))
      ], 2);
    };
  }
});
var VPContent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-fae15e66"]]);
var VPApp_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.VPApp[data-v-b00fe5ea] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background-color: var(--vt-c-bg);\n  transition: background-color 0.5s;\n  padding-top: var(--vt-banner-height);\n}\n.backdrop[data-v-b00fe5ea] {\n  z-index: var(--vp-z-index-backdrop);\n}\n")();
const _hoisted_1 = { class: "VPApp" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const {
      isOpen: isSidebarOpen,
      open: openSidebar,
      close: closeSidebar
    } = useSidebar();
    let triggerElement;
    watchEffect(() => {
      triggerElement = isSidebarOpen.value ? document.activeElement : void 0;
    });
    const onEsacpe = (e) => {
      if (e.key === "Escape" && isSidebarOpen.value) {
        closeSidebar();
        triggerElement == null ? void 0 : triggerElement.focus();
      }
    };
    onMounted(() => {
      window.addEventListener("keyup", onEsacpe);
    });
    onUnmounted(() => {
      window.removeEventListener("keyup", onEsacpe);
    });
    provide("close-sidebar", closeSidebar);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(VPSkipLink),
        createVNode(unref(_sfc_main$I), {
          class: "backdrop",
          show: unref(isSidebarOpen),
          onClick: unref(closeSidebar)
        }, null, 8, ["show", "onClick"]),
        renderSlot(_ctx.$slots, "banner", {}, void 0, true),
        createVNode(VPNav),
        createVNode(VPLocalNav, {
          open: unref(isSidebarOpen),
          onOpenMenu: unref(openSidebar)
        }, null, 8, ["open", "onOpenMenu"]),
        createVNode(VPSidebar, { open: unref(isSidebarOpen) }, {
          top: withCtx(() => [
            renderSlot(_ctx.$slots, "sidebar-top", {}, void 0, true)
          ]),
          bottom: withCtx(() => [
            renderSlot(_ctx.$slots, "sidebar-bottom", {}, void 0, true)
          ]),
          _: 3
        }, 8, ["open"]),
        createVNode(VPContent, null, {
          "content-top": withCtx(() => [
            renderSlot(_ctx.$slots, "content-top", {}, void 0, true)
          ]),
          "content-bottom": withCtx(() => [
            renderSlot(_ctx.$slots, "content-bottom", {}, void 0, true)
          ]),
          "aside-top": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
          ]),
          "aside-mid": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-mid", {}, void 0, true)
          ]),
          "aside-bottom": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
          ]),
          "footer-before": withCtx(() => [
            renderSlot(_ctx.$slots, "footer-before", {}, void 0, true)
          ]),
          "footer-after": withCtx(() => [
            renderSlot(_ctx.$slots, "footer-after", {}, void 0, true)
          ]),
          _: 3
        }),
        createVNode(_sfc_main$c)
      ]);
    };
  }
});
var VPApp = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b00fe5ea"]]);
const VPTheme = {
  Layout: withConfigProvider(VPApp),
  NotFound: VPNotFound
};
var Theme = {
  ...VPTheme,
  Layout() {
    return h(VPTheme.Layout, null, {});
  }
};
const hasFetched = /* @__PURE__ */ new Set();
const createLink = () => document.createElement("link");
const viaDOM = (url) => {
  const link2 = createLink();
  link2.rel = `prefetch`;
  link2.href = url;
  document.head.appendChild(link2);
};
const viaXHR = (url) => {
  const req = new XMLHttpRequest();
  req.open("GET", url, req.withCredentials = true);
  req.send();
};
let link;
const doFetch = inBrowser$1 && (link = createLink()) && link.relList && link.relList.supports && link.relList.supports("prefetch") ? viaDOM : viaXHR;
function usePrefetch() {
  if (!inBrowser$1) {
    return;
  }
  if (!window.IntersectionObserver) {
    return;
  }
  let conn;
  if ((conn = navigator.connection) && (conn.saveData || /2g/.test(conn.effectiveType))) {
    return;
  }
  const rIC = window.requestIdleCallback || setTimeout;
  let observer = null;
  const observeLinks = () => {
    if (observer) {
      observer.disconnect();
    }
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const link2 = entry.target;
          observer.unobserve(link2);
          const { pathname } = link2;
          if (!hasFetched.has(pathname)) {
            hasFetched.add(pathname);
            const pageChunkPath = pathToFile(pathname);
            doFetch(pageChunkPath);
          }
        }
      });
    });
    rIC(() => {
      document.querySelectorAll("#app a").forEach((link2) => {
        const { target, hostname, pathname } = link2;
        const extMatch = pathname.match(/\.\w+$/);
        if (extMatch && extMatch[0] !== ".html") {
          return;
        }
        if (target !== `_blank` && hostname === location.hostname) {
          if (pathname !== location.pathname) {
            observer.observe(link2);
          } else {
            hasFetched.add(pathname);
          }
        }
      });
    });
  };
  onMounted(observeLinks);
  const route = useRoute();
  watch(() => route.path, observeLinks);
  onUnmounted(() => {
    observer && observer.disconnect();
  });
}
const ClientOnly = defineComponent({
  setup(_, { slots }) {
    const show = ref(false);
    onMounted(() => {
      show.value = true;
    });
    return () => show.value && slots.default ? slots.default() : null;
  }
});
const NotFound = Theme.NotFound || (() => "404 Not Found");
const VitePressApp = {
  name: "VitePressApp",
  setup() {
    const { site } = useData();
    onMounted(() => {
      watch(() => site.value.lang, (lang) => {
        document.documentElement.lang = lang;
      }, { immediate: true });
    });
    {
      usePrefetch();
    }
    return () => h(Theme.Layout);
  }
};
function createApp() {
  const router = newRouter();
  const app = newApp();
  app.provide(RouterSymbol, router);
  const data = initData(router.route);
  app.provide(dataSymbol, data);
  if (inBrowser$1) {
    useUpdateHead(router.route, data.site);
  }
  app.component("Content", Content);
  app.component("ClientOnly", ClientOnly);
  app.component("Debug", () => null);
  Object.defineProperty(app.config.globalProperties, "$frontmatter", {
    get() {
      return data.frontmatter.value;
    }
  });
  if (Theme.enhanceApp) {
    Theme.enhanceApp({
      app,
      router,
      siteData: siteDataRef
    });
  }
  return { app, router };
}
function newApp() {
  return createSSRApp(VitePressApp);
}
function newRouter() {
  let isInitialPageLoad = inBrowser$1;
  let initialPath;
  return createRouter((path) => {
    let pageFilePath = pathToFile(path);
    if (isInitialPageLoad) {
      initialPath = pageFilePath;
    }
    if (isInitialPageLoad || initialPath === pageFilePath) {
      pageFilePath = pageFilePath.replace(/\.js$/, ".lean.js");
    }
    if (inBrowser$1) {
      isInitialPageLoad = false;
      return __vitePreload(() => import(
        /*@vite-ignore*/
        pageFilePath
      ), true ? [] : void 0);
    }
    return require(pageFilePath);
  }, NotFound);
}
if (inBrowser$1) {
  const { app, router } = createApp();
  router.go().then(() => {
    app.mount("#app");
  });
}
export { useRoute as a, useRouter as b, createApp, useData as u };
