<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 col-md-4 col-lg-3" v-for="(book, index) in bookList" :key="book.name" style="margin-bottom: 20px">
        <el-card shadow="hover">
          <div class="thumbnail">
            <a
              :href="'#' + book.bookUrl"
              title="Reading Notes"
              style="width: 150px; height: 200px"
              target="_blank"
            >
              <p>{{ book.bookName }}</p>
              <!-- <img :src="'./img'+book.bookImg"  style="width: 150px;height: 200px;" alt="">-->
            </a>
            <div class="caption">
              <p>{{ book.author }}</p>
            </div>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import bookList from './bookList.json'
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
.container{
  margin-top: 20px;
  .el-card{
    min-height: 150px;
  }
}
</style>
