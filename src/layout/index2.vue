<template>
  <div class="layout-default">
    <el-container>
      <el-header>
        <div class="Ne6nSd">
          <div class="LX3sZb">
            <div class="gb_Qd gb_Ed">
              <div>
                <div class="gb_2d">
                  <div class="gb_g">
                    <a class="gb_f" href="https://github.com/mshineray" target="_blank">GitHub </a>
                  </div>
                </div>
              </div>
              <!--              <div class="gb_Me">-->
              <!--                <div class="gb_Nc">-->
              <!--                  <div class="gb_B gb_bd">-->
              <!--                    <div class="gb_tf">-->
              <!--                      <a class="gb_C"-->
              <!--                         href="#"-->
              <!--                      >-->
              <!--                        <svg class="gb_Pe" focusable="false" viewBox="0 0 24 24">-->
              <!--                          <path-->
              <!--                            d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>-->
              <!--                        </svg>-->
              <!--                      </a>-->
              <!--                    </div>-->
              <!--                  </div>-->
              <!--                </div>-->
              <!--                <div class="gb_Na gb_bd">-->
              <!--                  <div class="gb_tf">-->
              <!--                    <a class="gb_C"-->
              <!--                       href="#"-->
              <!--                    >-->
              <!--                      <img-->
              <!--                        class="gb_Ca "-->
              <!--                        src="https://lh3.googleusercontent.com/ogw/ADea4I6b0IWkT3ebP0q4xfMHaU0PNGu3qDC_u5YTmgX0=s32-c-mo"-->
              <!--                      >-->
              <!--                    </a>-->
              <!--                  </div>-->
              <!--                </div>-->
              <!--              </div>-->
            </div>
          </div>
        </div>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <!--      <el-footer>Footer</el-footer>-->
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  components: {},
  mixins: [],
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.gb_tf {
  position: relative;
}

.gb_C {
  display: inline-block;
  outline: none;
  vertical-align: middle;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: 40px;
  width: 40px;
  color: #000;
  cursor: pointer;
  text-decoration: none;
}

.gb_Me {
  position: relative;
}

.gb_C {
  padding: 8px;
  cursor: pointer;
}

.gb_Ne button:focus svg,
.gb_Ne button:hover svg,
.gb_Ne button:active svg,
.gb_C:focus,
.gb_C:hover,
.gb_C:active,
.gb_C[aria-expanded='true'] {
  outline: none;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}

.gb_vc .gb_Ne.gb_Oe button:focus svg,
.gb_vc .gb_Ne.gb_Oe button:focus:hover svg,
.gb_Ne button:focus svg,
.gb_Ne button:focus:hover svg,
.gb_C:focus,
.gb_C:focus:hover {
  background-color: rgba(60, 64, 67, 0.1);
}

.gb_vc .gb_Ne.gb_Oe button:active svg,
.gb_Ne button:active svg,
.gb_C:active {
  background-color: rgba(60, 64, 67, 0.12);
}

.gb_vc .gb_Ne.gb_Oe button:hover svg,
.gb_Ne button:hover svg,
.gb_C:hover {
  background-color: rgba(60, 64, 67, 0.08);
}

.gb_C[aria-expanded='true'],
.gb_C:hover[aria-expanded='true'] {
  background-color: rgba(95, 99, 104, 0.24);
}

.gb_C[aria-expanded='true'] .gb_Pe,
.gb_C[aria-expanded='true'] .gb_Qe {
  fill: #5f6368;
  opacity: 1;
}

.gb_vc .gb_Ne button:hover svg,
.gb_vc .gb_C:hover {
  background-color: rgba(232, 234, 237, 0.08);
}

.gb_vc .gb_Ne button:focus svg,
.gb_vc .gb_Ne button:focus:hover svg,
.gb_vc .gb_C:focus,
.gb_vc .gb_C:focus:hover {
  background-color: rgba(232, 234, 237, 0.1);
}

.gb_vc .gb_Ne button:active svg,
.gb_vc .gb_C:active {
  background-color: rgba(232, 234, 237, 0.12);
}

.gb_vc .gb_C[aria-expanded='true'],
.gb_vc .gb_C:hover[aria-expanded='true'] {
  background-color: rgba(255, 255, 255, 0.12);
}

.gb_vc .gb_C[aria-expanded='true'] .gb_Pe,
.gb_vc .gb_C[aria-expanded='true'] .gb_Qe {
  fill: #ffffff;
  opacity: 1;
}

.gb_bd {
  display: inline-block;
  vertical-align: middle;
  padding: 4px;
}

.gb_E {
  z-index: 991;
  line-height: normal;
}

.gb_Se .gb_E {
  top: 56px;
}

.gb_B .gb_C,
.gb_D .gb_B .gb_C {
  background-position: -64px -29px;
}

.gb_B .gb_C,
.gb_B .gb_C:hover,
.gb_B .gb_C:focus {
  opacity: 1;
}

.gb_Cd {
  display: none;
}

.gb_Uc {
  font-family: Google Sans, Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.25px;
  line-height: 48px;
  margin-bottom: 2px;
  opacity: 1;
  overflow: hidden;
  padding-left: 16px;
  position: relative;
  text-overflow: ellipsis;
  vertical-align: middle;
  top: 2px;
  white-space: nowrap;
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;
}

.gb_Wc.gb_Xc .gb_Uc {
  padding-left: 4px;
}

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
}

.gb_Qd.gb_Nc {
  padding-left: 4px;
}

.gb_Nc {
  display: inline;
}

.gb_Uc {
  display: inline-block;
}

.gb_Qd {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: 48px;
  line-height: normal;
  padding: 0 4px;
  padding-left: 30px;
  -webkit-flex: 0 0 auto;
  flex: 0 0 auto;
  -webkit-box-pack: flex-end;
  -webkit-justify-content: flex-end;
  justify-content: flex-end;
}

.gb_Vd {
  font-size: 14px;
  max-width: 200px;
  overflow: hidden;
  padding: 0 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-user-select: text;
}

.gb_Wd {
  -webkit-transition: background-color 0.4s;
  transition: background-color 0.4s;
}

.gb_Xd {
  color: black;
}

.gb_vc {
  color: white;
}

.gb_s {
  color: rgba(0, 0, 0, 0.87);
}

.gb_2d {
  font-family: arial, sans-serif;
  line-height: normal;
  padding-right: 15px;
}

a.gb_f,
span.gb_f {
  color: rgba(0, 0, 0, 0.87);
  text-decoration: none;
}

.gb_vc a.gb_f,
.gb_vc span.gb_f {
  color: white;
}

a.gb_f:focus {
  outline-offset: 2px;
}

a.gb_f:hover {
  text-decoration: underline;
}

.gb_g {
  display: inline-block;
  padding-left: 15px;
}

.gb_g .gb_f {
  display: inline-block;
  line-height: 24px;
  vertical-align: middle;
}

.gb_Ca {
  -webkit-background-size: 32px 32px;
  background-size: 32px 32px;
  border: 0;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  display: block;
  margin: 0px;
  position: relative;
  height: 32px;
  width: 32px;
  z-index: 0;
}

.gb_Na .gb_C {
  padding: 4px;
}

.Ne6nSd {
  display: flex;
  align-items: center;
  padding: 6px;
}

.LX3sZb {
  display: inline-block;
  flex-grow: 1;
}
</style>
