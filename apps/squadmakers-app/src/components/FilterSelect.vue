<template>
  <label
    :for="id"
    class="sm-filter-select"
  >
    <select
      :id="id"
      v-model="filter"
      @input="$emit('filter-selected', filter)"
    >
      <option
        value=""
        disabled
        selected
        hidden
      >
        {{ placeholder }}
      </option>
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option"
      >
        {{ option }}
      </option>
    </select>
    <div
      v-if="filter"
      class="sm-filter-select__close"
      title="Delete filter"
      @click="handleClearFilter"
    >
      &times;
    </div>
  </label>
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core'

const props = defineProps<{
  id: string
  placeholder: string
  options: string[]
  modelValue: string
}>()

const emit = defineEmits(['filter-selected', 'update:modelValue'])

const filter = useVModel(props, 'modelValue', emit)

function handleClearFilter() {
  filter.value = ''
}
</script>

<style scoped lang="scss">
.sm-filter-select {
  position: relative;
  width: 100%;

  & select {
    width: 100%;
    height: 36px;
  }

  &__close {
    position: absolute;
    bottom: 8px;
    right: 24px;
    border-radius: 50%;
    padding-inline: 4px;
    color: red;
    cursor: pointer;
    border: 1px solid whitesmoke;
    background-color: whitesmoke;

    &:hover {
      filter: brightness(95%);
      border: 1px solid gray;
    }
  }
}
</style>
