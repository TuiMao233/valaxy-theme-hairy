<script lang="ts" setup>
import { ref, useModel } from 'vue'
import { onKeyDown, whenever } from '@vueuse/core'

const props = defineProps<{
  visible: boolean
}>()
const visible = useModel(props, 'visible')

const text = ref('')

onKeyDown('Escape', () => {
  if (!visible.value)
    return
  visible.value = false
})
whenever(() => !visible.value, () => {
  text.value = ''
})
</script>

<template>
  <Transition>
    <div v-if="visible" role="button" class="DocSearch DocSearch-Container " @click="visible = false">
      <div class="DocSearch-Modal" style="--docsearch-vh: 5.5200000000000005px;" @click.stop>
        <HairyFuseSearchHeader v-model:text="text" v-model:visible="visible" />
        <HairyFuseSearchDropdown v-model:visible="visible" :text="text" />
        <HairyFuseSearchFooter />
      </div>
    </div>
  </Transition>
</template>

<style lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
