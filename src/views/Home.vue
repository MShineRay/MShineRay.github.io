<template>
  <div class="container">
    <!--    <h1>Hello, world</h1>-->

    <!--    <div class='jumbotron masthead'>-->
    <!--      <div class='container'>-->
    <!--        <h1>Hello, world</h1>-->
    <!--            <h2>简洁、直观、强悍的前端开发框架，让web开发更迅速、简单。</h2>-->
    <!--        <div class='masthead-button-links'>-->
    <!--          <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">-->
    <!--            <el-button slot="append" icon="el-icon-search"></el-button>-->
    <!--          </el-input>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->

    <div class="projects">
      <!--      <div class='projects-header page-header'>-->
      <!--            <h2>Bootstrap相关优质项目推荐</h2>-->
      <!--            <p>这些项目或者是对Bootstrap进行了有益的补充，或者是基于Bootstrap开发的</p>-->
      <!--      </div>-->

      <div class="row">
        <div class="col-sm-6 col-md-4 col-lg-3">
          <el-card shadow="hover">
            <div class="thumbnail">
              <a href="#read-notes" title="Reading Notes" target="_blank"> Reading Notes </a>
              <div class="caption">
                <p>My Reading Notes</p>
                <p>by MShineRay</p>
                <p>@ 2021-10-09 16:00:00</p>
              </div>
            </div>
          </el-card>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-3">
          <el-card shadow="hover">
            <div class="thumbnail">
              <a href="#share-image" title="Share Image" target="_blank"> Share Image </a>
              <div class="caption">
                <p>My Share image</p>
                <p>by MShineRay</p>
                <p>@ 2022-01-02 15:35:00</p>
              </div>
            </div>
          </el-card>
        </div>
        <!--        <div class='col-sm-6 col-md-4 col-lg-3 '>-->
        <!--          <el-card shadow="hover">-->
        <!--            <div class='thumbnail'>-->
        <!--              <a-->
        <!--                href='https://github.com/mshineray'-->
        <!--                title='Share Bar'-->
        <!--                target='_blank'>-->
        <!--                Share Bar-->
        <!--              </a>-->
        <!--              <div class='caption'>-->
        <!--                <p>My Share Bar</p>-->
        <!--                <p>by MShineRay</p>-->
        <!--                <p>@ 2021-10-09 16:00:00</p>-->
        <!--              </div>-->
        <!--            </div>-->
        <!--          </el-card>-->
        <!--        </div>-->
        <!--        <div class='col-sm-6 col-md-4 col-lg-3 '>-->
        <!--          <el-card shadow="hover">-->
        <!--            <div class='thumbnail'>-->
        <!--              <a-->
        <!--                href='https://github.com/mshineray'-->
        <!--                title='Work Bar'-->
        <!--                target='_blank'>-->
        <!--                Work Bar-->
        <!--              </a>-->
        <!--              <div class='caption'>-->
        <!--                <p>My Work Bar</p>-->
        <!--                <p>by MShineRay</p>-->
        <!--                <p>@ 2021-10-09 16:00:00</p>-->
        <!--              </div>-->
        <!--            </div>-->
        <!--          </el-card>-->
        <!--        </div>-->
        <!--        <div class='col-sm-6 col-md-4 col-lg-3 '>-->
        <!--          <el-card shadow="hover">-->
        <!--            <div class='thumbnail'>-->
        <!--              <a-->
        <!--                href='https://github.com/mshineray'-->
        <!--                title='Creator Bar'-->
        <!--                target='_blank'>-->
        <!--                Creator Bar-->
        <!--              </a>-->
        <!--              <div class='caption'>-->
        <!--                <p>Creator Bar</p>-->
        <!--                <p>by MShineRay</p>-->
        <!--                <p>@ 2021-10-09 16:00:00</p>-->
        <!--              </div>-->
        <!--            </div>-->
        <!--          </el-card>-->
        <!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: 'Home',
  components: {
    // HelloWorld,
  },
}
</script>

<style scoped>
.masthead-button-links {
  width: 70%;
  margin: 0 auto;
}
.thumbnail {
  /*margin-bottom: 30px;*/
}
.container {
  margin-top: 20px;
}
</style>
