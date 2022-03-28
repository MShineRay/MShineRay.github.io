/// <reference types="vitepress/client" />
/// <reference types="vue/macros-global" />

declare module '@a0znpm/theme-vue-base/config' {
  import { UserConfig } from 'vitepress'
  const config: () => Promise<UserConfig>
  export default config
}

declare module '@a0znpm/theme-vue-base/highlight' {
  const createHighlighter: () => Promise<(input: string) => string>
  export default createHighlighter
}
