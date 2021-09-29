<template>
  <div class="test">
    test page
    <el-button @click="testAjax"> ajax </el-button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: 'Test',
  components: {
    // HelloWorld,
  },
  methods: {
    testAjax() {
      let option = {
        test: 'post',
      }
      this.feAxios.post(this.feApiConfig['001'], option).then(res => {
        console.log('res:', res)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.home {
}
</style>
