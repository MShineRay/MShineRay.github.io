<template>
  <div class="container">
    <div class="row">
      <div
        class="col-sm-6 col-lg-4"
        v-for="(book, index) in bookList"
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

export default {
  name: 'Home',
  components: {
    // HelloWorld,
  },
  data() {
    return {
      bookList,
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 20px;

  //.el-card {
    //min-height: 150px;
  //}
}
</style>
