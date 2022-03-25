<template>
  <div class="container">
    <div class="row">
      <div
        class="col-sm-6 col-md-4 col-lg-3"
        v-for="(book, index) in bookList"
        :key="book.pageName"
        style="margin-bottom: 20px"
      >
        <el-card shadow="hover">
          <a
            :href="'#/share-image/zhiqun/detail?img='+index"
            title="Reading Notes"
            style="width: 150px; height: 200px"
            target="_blank"
          >
            <div class="thumbnail">
              <p>{{ book.pageName }}</p>
            </div>
          </a>
        </el-card>
<!--        <el-card>-->
<!--          <h3>{{book.name}}</h3>-->
<!--          <img :src="book.url" width="250px" height="600px" alt="">-->
<!--        </el-card>-->
      </div>
    </div>
  </div>
</template>

<script>
import bookList from './index.json'
import logCreated from "@/mixin/log-created";

export default {
  name: 'Home',
  data() {
    return {
      bookList,
    }
  },
  mixins: [logCreated]

}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 20px;
}
</style>
