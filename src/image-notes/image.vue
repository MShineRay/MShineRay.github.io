<template>
  <div class="container">
    <div class="row" >
      <div
        class="col-sm-6 col-lg-4"
        v-for="(book, idx) in imgList"
        :key="book.name"
        style="margin-bottom: 20px"
      >
        <div>
          <h3>{{book.name}}</h3>
          <img :src="type+book.url" width="250px" height="600px" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logCreated from "@/mixin/log-created";

export default {
  name: 'Home',
  mixins: [logCreated],
  data() {
    return {
      title: this.$route.query.title,
      index: this.$route.query.img,
      type: this.$route.query.type,
      imgList: JSON.parse(this.$route.query.imgList||[]),
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
