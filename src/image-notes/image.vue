<script setup lang="ts">
// in .vue components or .md pages:
// named import "data" is the resolved static data
// can also import types for type consistency

import { ref} from 'vue'
let params = getParam()

function getParam() {
  var url = typeof window!=='undefined' ?window.location.search: ''
  var theRequest = {
    imgList: "",
    title: ""
  }
  if (url.indexOf('?') !== -1) {
    var str = url.substr(url.indexOf('?')+1)
    var strs = str.split('&')
    for(var i = 0; i < strs.length; i ++) {
      theRequest[strs[i].split('=')[0]]=decodeURIComponent(strs[i].split('=')[1])
    }
  }
  return theRequest
}

const title2 = ref(params.title)
const imgList = ref(JSON.parse(params.imgList||"[]"))
if(typeof initGitalk !== 'undefined'){
  setTimeout(function (){
    initGitalk()
  }, 3000)
}
</script>

<template>
  <div class="container">
    <h1 class="title">{{title2}}</h1>
    <div class="row" >
      <div
        v-for="(book, idx) in imgList"
        :key="book.name"
        style="margin-bottom: 20px"
        class="image-list"
      >
        <div>
          <h2 class="sub-title" v-if="imgList.length>1">{{book.name}}</h2>
          <img :src="book.url" width="250" height="600" alt="">
        </div>
      </div>
    </div>
    <div id="gitalk-container"></div>
  </div>
</template>


<style scoped>
.container {
  margin-top: 20px;
}
.container .title{
    display: flex;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 30px;
  }
.container  .row,
.container  .title,
.container  .sub-title{
    display: flex;
    justify-content: center;
  }
.container  .image-list + .image-list{
    margin-left: 30px;
  }

</style>
