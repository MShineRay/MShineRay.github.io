<template>
  <div class="container">
    <div class="row">
      <div
        class="col-sm-6 col-md-4 col-lg-3"
        v-for="(book, index) in bookList"
        :key="book.name"
        style="margin-bottom: 20px"
      >
        <el-card shadow="hover">
          <a
            :href="'#' + book.url"
            title="Reading Notes"
            style="width: 150px; height: 200px"
            target="_blank"
          >
            <div class="thumbnail">
              <p>{{ book.name }}</p>
            </div>
          </a>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import bookList from './bookList.json'
import logCreated from "@/mixin/log-created";

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
  mixins: [logCreated]

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
