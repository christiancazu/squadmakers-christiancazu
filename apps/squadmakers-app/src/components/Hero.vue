<template>
  <section class="sm-hero">
    <img
      class="sm-hero__bg"
      :src="imageBg"
    >
    <div class="sm-hero__search">
      <img
        class="sm-hero__search__img"
        src="@/assets/rickandmorty.png"
        alt="rickandmorty"
      >
      <SearchInput />
    </div>

    <ModalsContainer />
  </section>
</template>

<script setup lang="ts">
import { ModalsContainer } from 'vue-final-modal';

import SearchInput from './SearchInput.vue';

import imageBg from '@/assets/bg.png'
</script>

<style scoped lang="scss">
.sm-hero {
  height: 455px;
  max-width: 1440px;
  border: 1px solid black;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;

  &__bg {
    width: 100%;
    position: absolute;
    top: 0;
    height: 100%;
    bottom: 0;
    margin: auto;

    object-fit: cover;
    background-color: black;
    filter: brightness(50%);
    z-index: -1;
  }

  &__search {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    color: #BDBDBD;
    max-width: 500px;

    &__img {
      width: 347px;
      height: 122px;
      margin: 0 auto;
    }
  }
}
</style>
