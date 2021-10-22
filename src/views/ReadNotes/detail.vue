<template>
  <div class="container">
    <!--    list + Ranking-->
    <!--    <h1>reading note list</h1>-->
    <!--    <img src="img/pingjunfen/001.jpg" width="300" height="400"/>-->
    <h1 class="title">平均分</h1>

    <h5 class="author">康辉</h5>
    <!--    <h5 class="number">7个笔记</h5>-->

    <section>
      <h3>◆ 广院断章</h3>
      <p> >> 一切的未知，一切的不可能，都尽可以去试一下。</p>
    </section>
    <section>
      <h3>◆ 康辉：21℃，不多不少，刚刚好</h3>
      <p>>> 说是有四种人可以做一辈子的朋友：一是一起扛过枪的，二是一起下过乡的，三是一起负过伤的，四是一起同过窗的。</p>
    </section>
    <section>
      <h3>◆ 江城子</h3>
      <p>>>
        该你做的功课提前做也是做，拖到最后做也是做；该你做的事，随手做也是做，集中到最后花费大量时间、精力、气急败坏地做也是做。随时看一眼功课就不用到期末考试时挑灯夜战了，随手把东西整理好就不用为找个小东西翻箱倒柜了，把这些事情都安排合理的话，你就很主动，很少惊慌失措，其实这才是最省力气的办法</p>
    </section>
    <section>
      <h3>◆ 我与《新闻联播》</h3>
      <p>>> 说风光，南秀北雄；看年俗，东西不同。</p>
    </section>
    <section>
      <h3>◆ 难忘的2008</h3>
      <p>>> 什么是健康？世界卫生组织下的定义是“躯体健康、心理健康、社会适应良好和道德健康”</p>
      <p>>> 要是没有了残疾，健全会否因其司空见惯而变得腻烦和乏味呢？我常梦想着在人间彻底消灭残疾，但可以相信，那时将由患病者代替残疾人去承担同样的苦难。</p>
    </section>
    <section>
      <h3>◆ 十年一觉世博梦</h3>
      <p>>> 当我们记录今天的时候，如果还能着眼于明天，那么今天的记录也就绝不只是记录了。</p>
    </section>

    <footer class="footer">
      <img src="weread/img/pingjunfen/qr.png" alt="qr">
      <p>扫码阅读本书</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  components: {
    // HelloWorld,
  },
}
</script>

<style lang="scss" scoped>
.container {
  text-align: left;
  margin: 0 auto;
  max-width: 65%;

  h1 {
    text-align: center;
  }

  .author {
    text-align: right;
  }

  section + section {
    margin-bottom: 30px;
  }
  .footer{
    margin-top: 30px;
    text-align: center;
    border-top: 1px solid #ddd;
    padding-top: 30px;
  }
}
</style>

