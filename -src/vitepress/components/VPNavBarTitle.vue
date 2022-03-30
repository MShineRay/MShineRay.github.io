<script lang="ts" setup>
import { useData } from 'vitepress'
const { theme } = useData()

const storageKey = 'vue-theme-appearance'
const isDark = typeof localStorage !== 'undefined' ? isDarkFn() : () => {}

function isDarkFn() {
  const fn = () => {
    let userPreference = localStorage.getItem(storageKey) || 'auto'
    const query = window.matchMedia(`(prefers-color-scheme: dark)`)
    return userPreference === 'auto' ? query.matches : userPreference === 'dark'
  }
  return fn
}

</script>


<template>
  <a class="VPNavBarTitle" href="/">
    <img v-if="theme.logo && !isDark()" :src="theme.logo" alt="logo" class="logo"  width="24" height="24">
    <img v-else-if="theme.logoDark && isDark()" :src="theme.logoDark" alt="logo" class="logo"  width="24" height="24">
    <svg v-else class="logo" viewBox="0 0 128 128" width="24" height="24">
      <path
        fill="#42b883"
        d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
      />
      <path
        fill="#35495e"
        d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"
      />
    </svg>
    <span v-if="theme.logoText" class="text">{{theme.logoText}}</span>
    <span v-else class="text">Vue.js</span>
  </a>
</template>

<style scoped>
.VPNavBarTitle {
  display: flex;
  align-items: center;
  padding-top: 1px;
  height: var(--vt-nav-height);
  transition: opacity 0.25s;
}

.VPNavBarTitle:hover {
  opacity: 0.6;
}

.logo {
  position: relative;
}

.logo + .text {
  padding-left: 8px;
}

.text {
  font-size: 16px;
  font-weight: 500;
}
</style>
