import{d as g,p as m,o as s,c as i,j as a,t as _,F as f,C as h,e as v,_ as x,G as w}from"./chunks/framework.N5UAqUai.js";const N={class:"container"},y={class:"title"},k={class:"row"},I={key:0,class:"sub-title"},O=["src"],C=g({__name:"image",setup(u){let l=c();function c(){var n=typeof window<"u"?window.location.search:"",e={imgList:"",title:""};if(n.indexOf("?")!==-1)for(var t=n.substr(n.indexOf("?")+1),o=t.split("&"),r=0;r<o.length;r++)e[o[r].split("=")[0]]=decodeURIComponent(o[r].split("=")[1]);return e}const p=m(l.title),d=m(JSON.parse(l.imgList||"[]"));return typeof initGitalk<"u"&&setTimeout(function(){initGitalk()},3e3),(n,e)=>(s(),i("div",N,[a("h1",y,_(p.value),1),a("div",k,[(s(!0),i(f,null,h(d.value,(t,o)=>(s(),i("div",{key:t.name,style:{"margin-bottom":"20px"},class:"image-list"},[a("div",null,[d.value.length>1?(s(),i("h2",I,_(t.name),1)):v("",!0),a("img",{src:t.url,width:"250",height:"600",alt:""},null,8,O)])]))),128))]),e[0]||(e[0]=a("div",{id:"gitalk-container"},null,-1))]))}}),L=x(C,[["__scopeId","data-v-92231d97"]]),G=JSON.parse('{"title":"Image Notes","description":"","frontmatter":{"title":"Image Notes","page":true,"footer":false},"headers":[],"relativePath":"image-notes/image.md","filePath":"image-notes/image.md"}'),S={name:"image-notes/image.md"},P=Object.assign(S,{setup(u){return(l,c)=>(s(),i("div",null,[w(L)]))}});export{G as __pageData,P as default};
