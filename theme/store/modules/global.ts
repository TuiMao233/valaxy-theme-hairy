import { defineStore } from 'pinia'
import { ref } from 'vue'
import { withGlobalPinia } from '../../utils'

const _useGlobalStore = defineStore('global', () => {
  const headerRef = ref<HTMLDivElement>()
  const showDrawer = ref(false)

  return {
    headerRef,
    showDrawer,
  }
})

export const useGlobalStore = withGlobalPinia(_useGlobalStore)
