/**
 * 全家mixin
 */

export default {
  created(){
    window.gtag_event && window.gtag_event('open-'+this.$route.path, this.$route.query)
  }
}
