<template>
  <footer class="sm-footer">
    <img
      class="sm-footer__bg"
      :src="imageBg"
    >
  </footer>
</template>

<script setup lang="ts">
import imageBg from '@/assets/bg.png'
</script>

<style lang="scss" scoped>
.sm-footer {
  position: relative;
  height: 142px;

  &__bg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 10px;
    object-fit: cover;
    object-position: 0 16%;
    background-color: black;
    z-index: -1;
  }
}
</style>
