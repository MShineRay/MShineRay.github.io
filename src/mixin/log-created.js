/**
 * 全家mixin
 */
export default {
  created(){
    if (typeof window !== "undefined") {
      window.gtag_event && window.gtag_event(location.pathname)
    }
  }
}
