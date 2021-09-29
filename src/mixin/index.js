/**
 * 全家mixin
 */

export default {
  computed: {},
  data() {
    return {}
  },
  methods: {
    havePermission: function (code) {
      return this.$store.getters.havePermission(code)
    },
  },
}
