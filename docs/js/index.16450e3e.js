(function(e){function t(t){for(var r,a,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={index:0},o={index:0},i=[];function s(e){return c.p+"js/"+({test:"test"}[e]||e)+"."+{"chunk-2c392aa7":"7837fdec",test:"c5311357"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-2c392aa7":1,test:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({test:"test"}[e]||e)+"."+{"chunk-2c392aa7":"2a3a2571",test:"0e433876"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===r||u===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0974":function(e,t,n){},"37c7":function(e,t,n){},"3b62":function(e,t,n){},5552:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"default",(function(){return O}));n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("4de4");var a=n("8bbf"),o=n.n(a),i=(n("f5df1"),n("5c96")),s=n.n(i),c=(n("0fae"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)}),l=[],u=(n("5c0b"),n("0c7c")),d={},f=Object(u["a"])(d,c,l,!1,null,null,null),p=f.exports,m=n("2909"),g=(n("99af"),n("d3b7"),n("3ca3"),n("ddb0"),n("6389")),h=n.n(g),v=[{path:"/test",name:"Test",component:function(){return n.e("test").then(n.bind(null,"892b"))}}],w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"jumbotron masthead"},[n("div",{staticClass:"container"},[n("h1",[e._v("Hello, world")]),n("div",{staticClass:"masthead-button-links"},[n("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入内容"},model:{value:e.input3,callback:function(t){e.input3=t},expression:"input3"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1)],1)])]),n("div",{staticClass:"container projects"},[n("div",{staticClass:"projects-header page-header"}),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-6 col-md-4 col-lg-3 "},[n("el-card",{attrs:{shadow:"hover"}},[n("div",{staticClass:"thumbnail"},[n("a",{attrs:{href:"/read-notes",title:"Reading Notes",target:"_blank"}},[e._v(" Reading Notes ")]),n("div",{staticClass:"caption"},[n("p",[e._v("My Reading Notes")]),n("p",[e._v("by MShineRay")]),n("p",[e._v("@ 2021-10-09 16:00:00")])])])])],1)])])])},b=[],y={name:"Home",components:{}},C=y,$=(n("cccb"),Object(u["a"])(C,w,b,!1,null,null,null)),S=$.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout-default"},[n("el-container",[n("div",{staticClass:"navbar navbar-inverse navbar-fixed-top"},[n("div",{staticClass:"container"},[n("div",{staticClass:"navbar-header"},[n("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":".navbar-collapse"}},[n("span",{staticClass:"sr-only"},[e._v("Toggle navigation")]),n("span",{staticClass:"icon-bar"}),n("span",{staticClass:"icon-bar"}),n("span",{staticClass:"icon-bar"})]),n("a",{staticClass:"navbar-brand hidden-sm",attrs:{href:"#"}},[e._v("P2PShare")])]),n("div",{staticClass:"navbar-collapse collapse",attrs:{role:"navigation"}},[n("ul",{staticClass:"nav navbar-nav"},[n("li",[n("a",{attrs:{href:"https://www.npmjs.com/package/@a0znpm/fecli",target:"_blank"}},[e._v("fecli")])])]),n("ul",{staticClass:"nav navbar-nav navbar-right hidden-sm"},[n("li",[n("a",{attrs:{href:"https://github.com/MShineRay",target:"_blank"}},[e._v("Github")])])])])])]),n("el-main",[n("router-view")],1)],1)],1)},E=[],M={name:"Layout",components:{},mixins:[],data:function(){return{}},computed:{},mounted:function(){},methods:{}},k=M,D=(n("8766"),Object(u["a"])(k,x,E,!1,null,null,null)),T=D.exports;o.a.use(h.a);var j=[{path:"/",name:"Home",component:T,children:[{path:"",name:"home",component:S,meta:{}},{path:"read-notes",name:"read-notes",component:function(){return n.e("chunk-2c392aa7").then(n.bind(null,"d7ab"))}}]}].concat(Object(m["a"])(v),[{path:"*",redirect:"/test"}]),N=new h.a({mode:"history",routes:j}),A=N,O={},P=n("5880"),L=n.n(P);o.a.use(L.a);var _=new L.a.Store({state:{},mutations:{},actions:{},modules:{}}),R=(n("b64b"),n("159b"),n("ac1f"),n("5319"),n("1276"),n("bc3a")),F=n.n(R),H=n("75ee"),Y=n.n(H),B={environment:"online",debug:!1,timeout:3e4,themeType:0};Object.assign(B,Y.a["online"].common,Y.a["online"].special);var U="xxx.com";if(window.location.host!==U){var I=["staff","test"],q={mock:["mock"],dev:["dev"],test:["test"],sit:["sit"],uat:["uat"],pre:["pre"]},z={locMock:["mock.local.fe.cn"],locDev:["dev.local.fe.cn","127.0.0.1","localhost"],locTest:["test.local.fe.cn"],locSit:["sit.local.fe.cn"],locUat:["uat.local.fe.cn"],locPre:["pre.local.fe.cn"],mock:[],dev:[],test:[],sit:[],uat:[],pre:[]};for(var J in q)for(var W=0,Z=q[J].length;W<Z;W++)for(var V=0,X=I.length;V<X;V++)z[J].push(q[J][W]+I[V]);for(var K in z)for(var G=0,Q=z[K].length;G<Q;G++)window.location.hostname===z[K][G]&&(B["environment"]=K);var ee=B["environment"];["mock","dev","test","sit","uat","pre","locMock","locDev","locTest","locSit","locUat","locPre"].indexOf(ee)>-1&&Object.assign(B,Y.a[ee].common,Y.a[ee].special)}console.log("feConfig:",B);var te=B;function ne(e){if("nodeT"===te["environment"]){var t="/fe-local-setpost/?path="+e.config.url.split("?")[0].replace(/:/g,"")+"&feLog=not-log",n=JSON.stringify(e.data),r=new window.XMLHttpRequest;r.open("POST",t,!0),r.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),r.onreadystatechange=function(){},r.send(n)}}F.a.defaults.withCredentials=!0,F.a.defaults.timeout=te["timeout"],F.a.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),F.a.interceptors.response.use((function(e){ne(e);try{e.request.axiosFELog={config:e.config,data:e.data,headers:e.headers}}catch(t){console.log(t)}return e}),(function(e){try{e.response.request.axiosFELog={config:e.response.config,data:e.response.data,headers:e.response.headers}}catch(t){e&&e.config&&"function"===typeof window.feLog&&window.feLog("ajaxError",e.config)}return Promise.reject(e)}));var re=(new Date).getTime(),ae={post:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if((new Date).getTime()-re>5e3){if(!window.navigator.onLine)return Promise.reject(new Error("网络异常，请重试"));re=(new Date).getTime()}return Array.isArray(n)&&2===n.length&&n[1].closeLoading,new Promise((function(t,r){F.a.post.apply(F.a,[e].concat(n)).then((function(e){t(e.data)})).catch((function(e){r(e)}))}))},get:function(e,t){return new Promise((function(n,r){var a="";a=t&&t.params?t:{params:t},F.a.get(e,a).then((function(e){n(e.data)})).catch((function(e){r(e)}))}))}},oe=n("1da1"),ie=(n("96cf"),n("25f0"),n("a9e3"),n("4d63"),n("a15b"),n("fb6a"),n("2b3d"),n("a630"),n("6062"),{StudentName:/^(?![.·])[\u4E00-\u9FA5A-Za-z.·]+$/,IdCardSimple:/(^\d{15}$)|(^\d{17}([0-9]|X)$)/,ArmyIdCard:/^[\u4E00-\u9FA5]{1,}\d{8}$/,PasswordSimple:/^\d{6}$/,Passport:/^[a-zA-Z0-9..·`~｀～]{1,9}$/,StudentCode:/^[GgJjLl]{1}\d{17}([Xx]|\d){1}$/,TelAreaCoe:/^(0|０)\d{2,4}/,Telephone:/^\d{4,9}$/,ExtensionNumber:/^\d{1,4}$/,Email2:/^\w+@\w+(\.\w+)+(,\w+@\w+(\.\w+)+)*$/,ZipCode:/^\d{6}$/,Name:/^[\u4E00-\u9FA5A-Za-z]+$/,Number:/^[0-9]+(.[0-9]+)?$/,PositiveInteger0:/^([1-9]\d*|[0]{1,1})$/,PositiveInteger:/^([1-9]\d*)$/,Age:/^([1-9]\d*|0)$/,Money:/^[0-9]{1,9}(\.[0-9]{1})?$/,NegativeMoney:/^(-|\+)?[0-9]{1,9}(\.[0-9]{1})?$/,Money2:/^[0-9]{1,9}(\.[0-9]{1,2})?$/,NegativeMoney2:/^(-|\+)?[0-9]{1,9}(\.[0-9]{1,2})?$/,Password:/^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,Chinese:/^[_\\W\\u4e00-\\u9fa5]{2,20}$/,Email:/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/,IdCard:/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/,Date:/^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/,Phone:/^[1][3,4,5,6,7,8,9]\d{9}$/,MaskPhone:/^1\d{2}[*]{4}\d{4}$/,HKMobile:/^\d{8}$/,MaskHKMobile:/^\d{2}[*]{4}\d{2}$/,Integer:/^\d+$/,WindowsFileName:/^(?!((^(con)$)|^(con)\/..*|(^(prn)$)|^(prn)\/..*|(^(aux)$)|^(aux)\/..*|(^(nul)$)|^(nul)\/..*|(^(com)[1-9]$)|^(com)[1-9]\/..*|(^(lpt)[1-9]$)|^(lpt)[1-9]\/..*)|^\/s+|.*\/s$)(^[^/:/*/?/"/</>/|]{1,255}$)$/}),se=function(e){return(e||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,"")},ce={add:function(e,t){var n,r,a;try{n=e.toString().split(".")[1].length}catch(o){n=0}try{r=t.toString().split(".")[1].length}catch(o){r=0}return a=Math.pow(10,Math.max(n,r)),(this.mul(e,a)+this.mul(t,a))/a},sub:function(e,t){var n,r,a;try{n=e.toString().split(".")[1].length}catch(o){n=0}try{r=t.toString().split(".")[1].length}catch(o){r=0}return a=Math.pow(10,Math.max(n,r)),(this.mul(e,a)-this.mul(t,a))/a},mul:function(e,t){var n=0,r=e.toString(),a=t.toString();try{n+=r.split(".")[1].length}catch(o){console.error(o)}try{n+=a.split(".")[1].length}catch(o){console.error(o)}return Number(r.replace(".",""))*Number(a.replace(".",""))/Math.pow(10,n)},div:function(e,t){var n,r,a=0,o=0;try{a=e.toString().split(".")[1].length}catch(i){console.log(i)}try{o=t.toString().split(".")[1].length}catch(i){console.log(i)}return n=Number(e.toString().replace(".","")),r=Number(t.toString().replace(".","")),this.mul(n/r,Math.pow(10,o-a))},formatDate:function(e,t){if(!e||"null"===e||"undefined"===e)return"--";e+="";var n=new Date(e.replace(/-/g,"/")),r=n.getFullYear(),a=n.getMonth()+1,o=n.getDate(),i=n.getHours(),s=n.getMinutes(),c=n.getSeconds();switch(t){case"YYYY-MM-DD":return r+"-"+(a<10?"0"+a:a)+"-"+(o<10?"0"+o:o);case"YYYY-MM-DD hh:mm:ss":return r+"-"+(a<10?"0"+a:a)+"-"+(o<10?"0"+o:o)+" "+(i<10?"0"+i:i)+":"+(s<10?"0"+s:s)+":"+(c<10?"0"+c:c);default:break}},clone:function(e){return this.checkType(e,"Object")||this.checkType(e,"Array")?this.strToJson(this.jsonToStr(e)):{}},Validate:{is:function(e,t){var n=!1;return e instanceof RegExp?n=e.test(t):"string"===typeof e&&(n=ie[e]&&ie[e].test(t)),n},reg:function(e){return ie[e]}},getBirthdayFromIdCard:function(e){var t="";return null!==e&&""!==e&&(15===e.length?t="19"+e.substr(6,6):18===e.length&&(t=e.substr(6,8)),t=t.replace(/(.{4})(.{2})/,"$1-$2-")),t},getAgeByBirthday:function(e){var t,n=e.split("-"),r=parseInt(n[0]),a=parseInt(n[1]),o=parseInt(n[2]),i=new Date,s=i.getFullYear(),c=i.getMonth()+1,l=i.getDate();if(s===r)t=0;else{var u=s-r;if(u>0)if(c===a){var d=l-o;t=d<0?u-1:u}else{var f=c-a;t=f<0?u-1:u}else t=-1}return t},getAgeByBirthdayYear:function(e){var t=e.split("-"),n=parseInt(t[0]),r=new Date,a=r.getFullYear();return a-n},maskStr:function(e,t,n,r){for(var a=r||"*",o=(e+"").split("");t<n;t++)o[t]=a;return o.join("")},threadSleep:function(e){return Object(oe["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=function(e){return new Promise((function(t){return setTimeout(t,e)}))},t.next=3,n(e);case 3:return t.abrupt("return",!0);case 4:case"end":return t.stop()}}),t)})))()},delPx:function(e){return Number(e.replace("px",""))},getNavtiveStyle:function(e,t){return this.getComputedStyle(e,null).getPropertyValue(t)},$jQuery:function(e){return document.querySelector(e)},fix:function(e,t){return(""+e).length<t?(new Array(t+1).join("0")+e).slice(-t):""+e},getCurrentDateTime:function(){var e=new Date,t="-",n=":",r=e.getMonth()+1,a=e.getDate();r>=1&&r<=9&&(r="0"+r),a>=0&&a<=9&&(a="0"+a);var o=e.getFullYear()+t+r+t+a+" "+e.getHours()+n+e.getMinutes()+n+e.getSeconds();return o},getCurrentDate:function(){var e=new Date,t="-",n=e.getMonth()+1,r=e.getDate();return n>=1&&n<=9&&(n="0"+n),r>=0&&r<=9&&(r="0"+r),e.getFullYear()+t+n+t+r},getAppointedDay:function(e,t){var n=t||new Date;return n.setDate(n.getDate()+e),this.formatDate(n,"YYYY-MM-DD")},toDate:function(e){return new Date(Date.parse(e.replace(/-/g,"/")))},getTime:function(e){return e=e.substring(0,19),e=e.replace(/-/g,"/"),new Date(e).getTime()},getTimeAxis:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:36e5,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"HH:mm",a=new Date("2020/11/24 "+e),o=a.getTime(),i=new Date("2020/11/24 "+t),s=i.getTime(),c=[];c.push(ce.format(a,r));while(o<s){o+=n;var l=new Date(o);c.push(ce.format(l,r))}return c},format:function(e,t){var n=e||new Date,r={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"H+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),S:n.getMilliseconds()};for(var a in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length))),r)new RegExp("("+a+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?r[a]:("00"+r[a]).substr((""+r[a]).length)));return t},addEvent:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.addEventListener?e.addEventListener(t,n,r):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n},getComputedStyle:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){var t=null;return t=window.getComputedStyle?getComputedStyle(e,null):e.currentStyle,t})),addClass:function(e,t){if(e){for(var n=e.className,r=(t||"").split(" "),a=0,o=r.length;a<o;a++){var i=r[a];i&&(e.classList?e.classList.add(i):this.hasClass(e,i)||(n+=" "+i))}e.classList||(e.className=n)}},hasClass:function(e,t){if(!e||!t)return!1;if(-1!==t.indexOf(" "))throw new Error("className should not contain space.");return e.classList?e.classList.contains(t):(" "+e.className+" ").indexOf(" "+t+" ")>-1},removeClass:function(e,t){if(e&&t){for(var n=t.split(" "),r=" "+e.className+" ",a=0,o=n.length;a<o;a++){var i=n[a];i&&(e.classList?e.classList.remove(i):this.hasClass(e,i)&&(r=r.replace(" "+i+" "," ")))}e.classList||(e.className=se(r))}},checkType:function(e,t){return Object.prototype.toString.call(e).slice(8,-1)===t},flatten:function(e){var t=this;return e.reduce((function(e,n){return e.concat(t.checkType(n,"Array")?t.flatten(n):n)}),[])},getClientSize:function(){return void 0!==window.innerHeight?{width:window.innerWidth,height:window.innerHeight}:"CSS1Compat"===document.compatMode?{width:document.documentElement.clientWidth,height:document.documentElement.clientHeight}:{width:document.body.clientWidth,height:document.body.clientHeight}},strToJson:function(e){return e?JSON.parse(e):{}},jsonToStr:function(e){return e?JSON.stringify(e):""},downFile:function(e,t){var n=new Blob([e]);if("download"in document.createElement("a")){var r=document.createElement("a");r.download=t,r.style.display="none",r.href=URL.createObjectURL(n),document.body.appendChild(r),r.click(),URL.revokeObjectURL(r.href),document.body.removeChild(r)}else navigator.msSaveBlob(n,t)},exportErrorHandler:function(e){var t=new FileReader,n=new Blob([e]);t.onload=function(e){try{var t=JSON.parse(e.target.result);1*t.Status!==1&&t.Msg?ce.$confirm(t.Msg,"warning"):ce.$confirm(t,"warning")}catch(e){ce.$confirm("解析数据有误","warning")}},t.readAsText(n)},getDays:function(e,t){var n,r,a,o="-";n=e.split(o),r=t.split(o);var i=new Date(n[0],n[1]-1,n[2]),s=new Date(r[0],r[1]-1,r[2]);return a=parseInt(Math.abs(s.getTime()-i.getTime())/1e3/60/60/24),a},isWindowSys:function(){return"Win32"===navigator.platform||"Windows"===navigator.platform},maskMobile:function(e){if(Number(e)&&11===String(e).length){var t=String(e),n=/^(\d{3})\d{4}(\d{4})$/;return t.replace(n,"$1****$2")}return e},getByClass:function(e,t){if(e.getElementsByClassName)return e.getElementsByClassName(t);for(var n=[],r=new RegExp(" "+t+" ","i"),a=e.getElementsByTagName("*"),o=0;o<a.length;o++)r.test(" "+a[o].className+" ")&&n.push(a[o]);return n},unique:function(e){return Array.from(new Set(e))},uniqueAryObject:function(e,t){for(var n={},r=[],a=0;a<e.length;a++){var o=e[a];n[o[t]]||(n[o[t]]=r.push(o))}return r},getCookie:function(e){return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[-.+*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null}},le=ce,ue={computed:{},data:function(){return{}},methods:{havePermission:function(e){return this.$store.getters.havePermission(e)}}},de=n("2106"),fe=n.n(de),pe=(n("0974"),function(e){e.use(s.a)}),me={install:pe},ge=me,he=te["environment"],ve=te["shareUrl"],we={"001":ve+"/search","002":"test"===he?"/test2":"/test3"},be=we,ye={feApiConfig:be,feAxios:ae,feTools:le,feConfig:te,$axios:F.a},Ce={install:function(e){var t=Object.keys(ye),n=Object.keys(r);t.forEach((function(t){return e.prototype[t]=ye[t]})),n.forEach((function(t){return e.filter(t,r[t])})),e.prototype.$eventHub=new e,e.use(fe.a,F.a),e.mixin(ue),e.directive("el-focus",{inserted:function(e){"input"===e.tagName.toLocaleLowerCase()?e.focus():e.getElementsByTagName("input")&&e.getElementsByTagName("input")[0].focus()}}),e.use(ge)}},$e=Ce;for(var Se in o.a.use(s.a),o.a.use($e),o.a.config.productionTip=!1,O)o.a.filter(Se,O[Se]);new o.a({router:A,store:_,render:function(e){return e(p)}}).$mount("#app")},5880:function(e,t){e.exports=Vuex},"5c0b":function(e,t,n){"use strict";n("37c7")},6389:function(e,t){e.exports=VueRouter},"75ee":function(e,t){var n,r,a="fe-mock-php",o="/fe-api-local";try{n="https:"===window.location.protocol?"wss:":"ws:",r="https:"===window.location.protocol?"https:":"http:"}catch(S){n="ws:",r="http:"}var i={common:{shareUrl:"//www.test.com",share2Url:r+"//www.test2.com",share3Url:"http://www.test2.com"},special:{debug:!1}},s={common:{shareUrl:a+"/share",locWSUrl:n},special:{debug:!0}},c={common:{},special:{debug:!0}},l={common:{},special:{debug:!0}},u={common:{},special:{debug:!0}},d={common:{},special:{debug:!0}},f={common:{},special:{debug:!0}},p={common:{},special:{debug:!0}},m={},g={common:{shareUrl:o+"/share"},special:{}},h={common:m,special:{}},v={common:m,special:{}},w={common:m,special:{}},b={common:m,special:{}},y={common:m,special:{}},C={common:m,special:{}},$={online:i,mock:s,dev:c,test:l,fat:u,sit:d,pre:p,uat:f,locMock:g,locDev:h,locTest:v,locFat:w,locSit:b,locPre:y,locUat:C};e.exports=$},8766:function(e,t,n){"use strict";n("3b62")},"8bbf":function(e,t){e.exports=Vue},cccb:function(e,t,n){"use strict";n("5552")}});
//# sourceMappingURL=index.16450e3e.js.map