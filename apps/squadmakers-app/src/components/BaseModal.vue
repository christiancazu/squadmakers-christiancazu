<script setup lang="ts">
import {withDefaults}from 'vue'

import { VueFinalModal } from 'vue-final-modal'

withDefaults(defineProps<{
  noPadding?: boolean
  scroll?: boolean
}>(), {
  nopadding: false,
  scroll: false
})

</script>

<template>
  <VueFinalModal
    class="base-modal"
    :class="{ '--no-padding': noPadding, '--scroll': scroll }"
    content-class="base-modal-content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
    background="interactive"
    esc-to-close
  >
    <slot />
  </VueFinalModal>
</template>

<style lang="scss">
.base-modal {
  display: flex;
  justify-content: center;
  align-items: center;
}

.base-modal-content {
  padding: 1rem;
  background: #fff;
  border-radius: 0.5rem;
  max-width: 756px;
  width: 100%;
  overflow: auto;
  margin-top: 54px;
  margin-bottom: 54px;
}

.base-modal.--no-padding .base-modal-content {
  padding: 0;
}
.base-modal.--scroll .base-modal-content {
  height: 100%;
}

.vfm--prevent-none {
  pointer-events: unset;
}
</style>
