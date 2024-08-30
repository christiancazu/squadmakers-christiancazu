<template>
  <button
    class="sm-button"
    :style="flat && `background: whitesmoke; color: #11555F`"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  flat?: boolean
}>()
</script>

<style lang="scss" scoped>
$color: #11555F;
.sm-button {
  background: $color;
  border: 1px solid $color;
  border-radius: 60px;
  height: 44px;
  padding: 11px 20px;
  gap: 10px;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.6px;
  text-align: center;
  color: #FFFFFF;
  cursor: pointer;

  &:hover {
    filter: brightness(95%);
  }
}
</style>
