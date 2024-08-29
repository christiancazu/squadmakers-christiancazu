<template>
  <article class="sm-card">
    <figure class="sm-card__figure">
      <img class="sm-card__figure__image" :src="character.image" :alt="character.name">
      <div class="sm-card__figure__favorite">
        <Favorite :is-favorite="character.isFavorite" @toggle-favorite="$emit('toggleFavorite', character.id)" />
      </div>
    </figure>
    <div class="sm-card__content">
      <div class="sm-card__content__top">
        <label class="sm-card__content__top__label">
          <div class="sm-card__content__top__label__status" :style="{ backgroundColor: status[character.status] }" />
          {{ character.status }} - {{ character.species }}
        </label>
        <p class="sm-card__content__top__text">
          {{ character.name }}
        </p>
      </div>
      <div class="sm-card__content__middle">
        <label class="sm-card__content__middle__label">
          last known location:
        </label>
        <p class="sm-card__content__middle__text">
          {{ character.location.name }}
        </p>
      </div>
      <div class="sm-card__content__bottom">
        <label class="sm-card__content__bottom__label">
          first seen in:
        </label>
        <p class="sm-card__content__bottom__text">
          {{ character.origin.name }}
        </p>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import Favorite from '../Favorite/Favorite.vue'

export type Character = {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Origin;
  image: string;
  episode: string[];
  url: string;
  created: string;
  isFavorite?: boolean;
}

export type Origin = {
  name: string;
  url: string;
}

defineProps<{
  character: Character
}>()

defineEmits(['toggleFavorite'])

const status = {
  "Alive": "#27AE60",
  "Dead": "#EB5757",
  "unknown": "#828282"
}
</script>

<style scoped lang="scss">
$border-radius: 10px;

.sm-card {
  display: flex;
  width: 326px;
  height: 140px;
  border-radius: $border-radius;
  border: 1px solid #E0E0E0;

  &__figure {
    height: 140px;
    width: 140px;
    position: relative;
    border-radius: $border-radius 0 0 $border-radius;

    &__image {
      border-radius: $border-radius 0 0 $border-radius;
      height: 140px;
      width: 140px;
      position: absolute;
      top: -1px;
      left: -1px;
    }

    &__favorite {
      position: absolute;
      bottom: 4px;
      right: 8px;
    }
  }

  &__content {
    padding: 10px;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-around;
    text-overflow: ellipsis;

    &__top {
      &__label {
        line-height: 12.19px;
        color: #4F4F4F;
        display: flex;
        align-items: baseline;

        &__status {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          margin-right: 4px;
          transform: translateY(-2px);
        }
      }

      &__text {
        font-size: 16px;
        line-height: 19.5px;
      }
    }

    &__middle,
    &__bottom {
      &__label {
        color: #828282;
        line-height: 12.19px;
      }

      &__text {
        line-height: 14.63px;
        font-size: 12px;
      }
    }
  }
}
</style>
