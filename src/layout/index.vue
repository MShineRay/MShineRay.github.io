<template>
  <div class="layout-default">
    <el-container>
      <el-header>
        <div class="header">
          <div class="LX3sZb">
            <div class="gb_Qd gb_Ed">
              <div>
                <div class="gb_g">
                  <a class="gb_f"
                     href="https://github.com/mshineray" target="_blank">GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>

export default {
  name: "Layout",
  components: {},
  mixins: [],
  data() {
    return {};
  },
  computed: {},
  mounted() {
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.gb_Ed {
  height: 48px;
  vertical-align: middle;
  white-space: nowrap;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-user-select: none;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  line-height: normal;
  padding: 0 4px;
  padding-left: 30px;
  -webkit-flex: 0 0 auto;
  flex: 0 0 auto;
  -webkit-justify-content: flex-end;
  justify-content: flex-end
}


a.gb_f, span.gb_f {
  color: rgba(0, 0, 0, 0.87);
  text-decoration: none
}


a.gb_f:focus {
  outline-offset: 2px
}

a.gb_f:hover {
  text-decoration: underline
}

.gb_g {
  display: inline-block;
  padding-left: 15px
}

.gb_g .gb_f {
  display: inline-block;
  line-height: 24px;
  vertical-align: middle
}

.header {
  display: flex;
  align-items: center;
  padding: 6px
}

.LX3sZb {
  display: inline-block;
  flex-grow: 1
}
</style>
