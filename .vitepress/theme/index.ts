import './styles/index.css'
import { h, App } from 'vue'
import { VPTheme } from '@a0znpm/theme-vue-base'
import VueSchoolLink from './components/VueSchoolLink.vue'
import {
  preferComposition,
  preferSFC,
  filterHeadersByPreference
} from './components/preferences'
import SponsorsAside from './components/SponsorsAside.vue'
import VueJobs from './components/VueJobs.vue'

export default Object.assign({}, VPTheme, {
  Layout: () => {
    // @ts-ignore
    return h(VPTheme.Layout, null, {
      'aside-mid': () => h(SponsorsAside),
      'aside-bottom': () => h(VueJobs)
    })
  },
  enhanceApp({ app }: { app: App }) {
    app.provide('prefer-composition', preferComposition)
    app.provide('prefer-sfc', preferSFC)
    app.provide('filter-headers', filterHeadersByPreference)
    app.component('VueSchoolLink', VueSchoolLink)
  }
})
