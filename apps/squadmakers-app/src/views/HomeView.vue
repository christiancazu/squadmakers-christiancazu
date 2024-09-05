<template>
  <div class="sm-home-view">
    <div
      class="sm-home-view__bg"
      :style="{ backgroundImage: `url(${imageBg})` }"
    />
    <div class="sm-home-view__content">
      <img
        src="@/assets/rickandmorty.png"
        alt="rickandmorty"
        height="233"
        width="684"
      >
      <h1 class="sm-home-view__content__title">
        Wellcome to Rick and Morty
      </h1>
      <h2 class="sm-home-view__content__subtitle">
        Squadmaker Front-end Challenge by Christian Carrillo
      </h2>
      <Button
        label="Continue"
        @click="router.push('/characters')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import imageBg from '@/assets/bg.png'
import Button from '@/components/Button.vue';
import { useRouter } from 'vue-router';

const router = useRouter()
</script>

<style lang="scss" scoped>
.sm-home-view {
  position: relative;

  &__bg {
    position: absolute;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 70%;
    height: 100vh;
    filter: brightness(50%);
    background-color: #000000;
    z-index: -1;

  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    min-height: 100vh;

    &__title {
      font-size: 36px;
      text-align: center;
      margin-bottom: 16px;
    }

    &__subtitle {
      font-size: 18px;
      text-align: center;
      margin-bottom: 24px;
    }
  }
}
</style>
