<template>
  <div
    class="sm-favorite"
    @click="$emit('toggleFavorite')"
  >
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.10314 0.625739L6.06251 5.28043L1.49689 6.02926C0.67814 6.16285 0.350015 7.2984 0.943765 7.94879L4.24689 11.5699L3.46564 16.6851C3.32501 17.6097 4.19064 18.3023 4.91564 17.8699L9.00002 15.4546L13.0844 17.8699C13.8094 18.2988 14.675 17.6097 14.5344 16.6851L13.7531 11.5699L17.0563 7.94879C17.65 7.2984 17.3219 6.16285 16.5031 6.02926L11.9375 5.28043L9.89689 0.625739C9.53127 -0.203949 8.47189 -0.214496 8.10314 0.625739Z"
        :fill="isFavorite ? '#F2994A' : '#828282'"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isFavorite?: boolean
}>()

defineEmits(['toggleFavorite'])
</script>

<style scoped>
.sm-favorite {
  width: 30px;
  height: 30px;
  background-color: #F2F2F2;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
