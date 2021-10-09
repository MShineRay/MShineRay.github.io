<template>
  <div class="home">

    <div class='jumbotron masthead'>
      <div class='container'>
        <h1>P2PShare</h1>
        <!--    <h2>简洁、直观、强悍的前端开发框架，让web开发更迅速、简单。</h2>-->
        <p class='masthead-button-links'>
          <input type='text'>
        </p>
      </div>
    </div>


    <div class='container projects'>

      <div class='projects-header page-header'>
        <!--    <h2>Bootstrap相关优质项目推荐</h2>-->
        <!--    <p>这些项目或者是对Bootstrap进行了有益的补充，或者是基于Bootstrap开发的</p>-->
      </div>

      <div class='row'>
        <div class='col-sm-6 col-md-4 col-lg-3 '>
          <div class='thumbnail' style='height: 336px;'>
            <a
              href='https://www.youzhan.org/'
              title='Reading Notes'
              target='_blank'>
              Reading Notes
            </a>
            <div class='caption'>
              <p>My reading notes</p>
              <p>by MShineRay</p>
              <p>@ 2021-10-09 16:00:00</p>
            </div>
          </div>
        </div>

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

