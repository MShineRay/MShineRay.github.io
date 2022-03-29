<template>
  <div class="container">
    <div class="row" >
      <div
        class="col-sm-6 col-lg-4"
        v-for="(book, idx) in bookList[index].imgList"
        :key="book.name"
        style="margin-bottom: 20px"
      >
        <el-card>
          <h3>{{book.name}}</h3>
          <img :src="book.url" width="250px" height="600px" alt="">
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import bookList from './index.json'
import logCreated from "@/mixin/log-created";

export default {
  name: 'Home',
  components: {
    // HelloWorld,
  },
  mixins: [logCreated],
  data() {
    return {
      index: this.$route.query.img,
      bookList,
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 20px;
  .row{
    display: flex;
    justify-content: center;
  }
}
</style>
