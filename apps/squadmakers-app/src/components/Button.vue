<template>
  <button
    class="sm-button"
    :class="{ '--flat': flat, '--disabled': disabled, '--circle': circle }"
    :disabled="disabled"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  label: string | number
  flat?: boolean
  disabled?: boolean
  circle?: boolean
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

  &.--flat {
    background: whitesmoke;
    color: #11555F;
  }

  &.--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.--circle {
    border-radius: 50%;
  }
}
</style>
