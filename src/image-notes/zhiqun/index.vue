<template>
  <div class="container">
    <div class="row">
      <div
        class="col-sm-6 col-md-4 col-lg-3"
        v-for="(book, index) in bookList"
        :key="book.pageName"
        style="margin-bottom: 20px"
      >
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
      </div>
    </div>
  </div>
</template>

<script>
import bookList from './index.json'
import logCreated from "../../mixin/log-created";

export default {
  name: 'ImageList',
  data() {
    return {
      bookList,
    }
  },
  mixins: [logCreated],
  mounted() {
    console.error(111)
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 20px;
}
</style>
