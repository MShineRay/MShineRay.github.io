/**
 *
 */
export default {
  created() {
    this.$eventHub.$on('refresh-todo', this.refreshTodoCallback)
    console.log('eventHub refresh-todo on (' + this.$options.name + ')')
  },
  methods: {
    /**
     * 刷新回调
     * @required 勿删
     */
    refreshTodoCallback(data) {
      /**
       * 判断组件名是否一致，避免触发冗余刷新
       * @required 必须显示声明组件的name
       */
      if (this.$options && data && this.$options.name === data.component) {
        console.log('eventHub refresh-todo refreshTodoCallback [' + data + ']')
        /**
         * 刷新钩子
         * 组件需要提供此方法
         * @param {data} Object 回调数据
         */
        typeof this.refreshTodo === 'function' && this.refreshTodo(data)
      }
    },
  },
  // 最好在组件销毁前
  // 清除事件监听
  beforeDestroy() {
    /**
     * @reference https://cn.vuejs.org/v2/api/#vm-off
     */
    this.$eventHub.$off('refresh-todo', this.refreshTodoCallback)
    console.log('eventHub refresh-todo off (' + this.$options.name + ')')
  },
}
