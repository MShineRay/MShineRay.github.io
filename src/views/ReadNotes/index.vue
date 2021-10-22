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
export default {
  name: 'Home',
  components: {
    // HelloWorld,
  },
  data() {
    return {
      bookList: [
        {
          bookImg: 'pingjunfen/written.jpg',
          author: '康辉',
          bookName: '平均分',
          bookUrl: '/read-notes/pingjunfen',
        },
        {
          bookImg: 'yongjiujilu/written.jpg',
          author: '爱德华·斯诺登',
          bookName: '永久记录',
          bookUrl: '/read-notes/yongjiujilu',
        },
        {
          bookImg: 'renshengyouwo/written.jpg',
          author: '梅耶.马斯克',
          bookName: '人生如我',
          bookUrl: '/read-notes/renshengyouwo',
        },
        {
          bookImg: 'fulankelinzichuan/written.jpg',
          author: '富兰克林',
          bookName: '富兰克林自传',
          bookUrl: '/read-notes/fulankelinzichuan',
        },
        {
          bookImg: 'jiucaideziwoxiuyang/written.jpg',
          author: '李笑来',
          bookName: '韭菜的自我修养',
          bookUrl: '/read-notes/jiucaideziwoxiuyang',
        }
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.container{
  margin-top: 20px;
}
</style>
