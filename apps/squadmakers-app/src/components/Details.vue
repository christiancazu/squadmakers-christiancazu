<template>
  <div class="sm-details">
    <div class="sm-details__header">
      <div class="sm-details__header__bg">
        <img
          :src="imageBg"
          alt="rickandmorty"
        >
      </div>
      <svg
        width="30"
        class="sm-details__header__close"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        @click="close"
      >
        <path
          d="M15 0.46875C6.97266 0.46875 0.46875 6.97266 0.46875 15C0.46875 23.0273 6.97266 29.5312 15 29.5312C23.0273 29.5312 29.5312 23.0273 29.5312 15C29.5312 6.97266 23.0273 0.46875 15 0.46875ZM22.125 18.8145C22.4004 19.0898 22.4004 19.5352 22.125 19.8105L19.8047 22.125C19.5293 22.4004 19.084 22.4004 18.8086 22.125L15 18.2812L11.1855 22.125C10.9102 22.4004 10.4648 22.4004 10.1895 22.125L7.875 19.8047C7.59961 19.5293 7.59961 19.084 7.875 18.8086L11.7188 15L7.875 11.1855C7.59961 10.9102 7.59961 10.4648 7.875 10.1895L10.1953 7.86914C10.4707 7.59375 10.916 7.59375 11.1914 7.86914L15 11.7188L18.8145 7.875C19.0898 7.59961 19.5352 7.59961 19.8105 7.875L22.1309 10.1953C22.4062 10.4707 22.4062 10.916 22.1309 11.1914L18.2812 15L22.125 18.8145Z"
          fill="white"
        />
      </svg>
      <div class="sm-details__header__info">
        <figure>
          <img
            :src="character?.image"
            alt="rickandmorty"
          >
          <Favorite
            class="sm-details__header__info__favorite"
            is-favorite
          />
        </figure>
        <div class="sm-details__header__info__text">
          <p class="sm-details__header__info__text__status">
            {{ character?.status }}
          </p>
          <p class="sm-details__header__info__text__name">
            {{ character?.name }}
          </p>
          <p class="sm-details__header__info__text__species">
            {{ character?.species }}
          </p>
        </div>
      </div>
    </div>
    <div class="sm-details__body">
      <div class="sm-details__body__info">
        <p class="sm-details__body__info__title">
          Information
        </p>
        <div class="sm-details__body__info__cards">
          <div
            v-for="(info, index) in [
              {
                text: character?.gender,
                title: 'Gender',
              },
              {
                text: character?.origin.name,
                title: 'Origin',
              },
              {
                text: character?.type,
                title: 'Type',
              }
            ]"
            :key="index"
            class="sm-details__body__info__cards__item"
          >
            <p class="sm-details__body__info__cards__item__title">
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 0.6875C2.79007 0.6875 0.1875 3.29101 0.1875 6.5C0.1875 9.71087 2.79007 12.3125 6 12.3125C9.20993 12.3125 11.8125 9.71087 11.8125 6.5C11.8125 3.29101 9.20993 0.6875 6 0.6875ZM6 3.26562C6.54366 3.26562 6.98438 3.70634 6.98438 4.25C6.98438 4.79366 6.54366 5.23438 6 5.23438C5.45634 5.23438 5.01562 4.79366 5.01562 4.25C5.01562 3.70634 5.45634 3.26562 6 3.26562ZM7.3125 9.21875C7.3125 9.37407 7.18657 9.5 7.03125 9.5H4.96875C4.81343 9.5 4.6875 9.37407 4.6875 9.21875V8.65625C4.6875 8.50093 4.81343 8.375 4.96875 8.375H5.25V6.875H4.96875C4.81343 6.875 4.6875 6.74907 4.6875 6.59375V6.03125C4.6875 5.87593 4.81343 5.75 4.96875 5.75H6.46875C6.62407 5.75 6.75 5.87593 6.75 6.03125V8.375H7.03125C7.18657 8.375 7.3125 8.50093 7.3125 8.65625V9.21875Z"
                  fill="#828282"
                />
              </svg>
              <span>{{ info.title }}:</span>
            </p>
            <p
              :title="info.text"
              class="sm-details__body__info__cards__item__text"
            >
              {{ info.text }}
            </p>
          </div>
        </div>

        <hr class="sm-details__body__info__separator">

        <p class="sm-details__body__info__title">
          Episodes
        </p>

        <div class="sm-details__body__info__episodes">
          <template v-if="!isFetchingEpisodes">
            <div
              v-for="(episode, index) in Array.isArray(episodes) ? episodes : [episodes || {}]"
              :key="index"
              class="sm-details__body__info__episodes__item"
            >
              <p
                :title="episode.name"
                class="sm-details__body__info__episodes__item__title"
              >
                {{ episode.name }}
              </p>
              <p class="sm-details__body__info__episodes__item__name">
                {{ episode.episode }}
              </p>
              <p class="sm-details__body__info__episodes__item__date">
                {{ parseDate(episode.created) }}
              </p>
            </div>
          </template>
          <Spinner v-else />
        </div>

        <hr class="sm-details__body__info__separator">

        <p class="sm-details__body__info__title">
          Interesting characters
        </p>
        <div class="sm-details__body__info__characters">
          <Tarjeta :character="character!" />
          <Tarjeta :character="character!" />
        </div>
        <div class="sm-details__body__info__actions">
          <Button
            label="Share character"
            @click="close"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useFetch } from '@vueuse/core';

import type { Character } from '@/models';
import Spinner from './Spinner.vue';
import Button from './Button.vue';
import { Favorite, Tarjeta } from 'christiancazu-squadmakers-lib';

import imageBg from '@/assets/bg-details.jpeg'

const props = defineProps<{
  close: () => void
  character: Character | undefined
}>()

const episodeIds = props.character?.episode.map((e) => e.split('/').pop()).join(',')

const { data: episodes, isFetching: isFetchingEpisodes }
  = useFetch(`https://rickandmortyapi.com/api/episode/${episodeIds}`).get().json()

const parseDate = computed(() => (date: string) => {
  const _date = new Date(date)

  const month = _date.toLocaleString('default', { month: 'long' })
  const day = _date.toLocaleString('default', { day: 'numeric' })
  const year = _date.toLocaleString('default', { year: 'numeric' })

  return `${month} ${day}, ${year}`
})
</script>

<style lang="scss" scoped>
:deep(.sm-card__content__middle__label) {
  font-size: 16px;
}

$colorText: #4F4F4F;
$colorTextBold: #081F32;
$colorBorder: #E0E0E0;

.sm-details {
  &__header {
    position: relative;

    &__bg {
      height: 220px;
      width: 100%;
      overflow: hidden;
      object-fit: cover;
      position: relative;
      filter: brightness(60%);

      &>img {
        position: absolute;
        top: 68%;
        transform: translateY(-50%);
        max-width: 100%;
      }
    }

    &__close {
      border-radius: 50%;
      position: absolute;
      top: 16px;
      right: 16px;
      cursor: pointer;
    }

    &__info {
      height: 186px;
      background-color: #F2F2F2;
      position: relative;

      &>figure {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 4px solid #FFFFFF;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);

        &>img {
          object-fit: cover;
          border-radius: 50%;
        }
      }

      &__favorite {
        position: absolute;
        bottom: -10%;
        left: 50%;
        transform: translateX(-50%);
      }

      &__text {
        display: flex;
        justify-content: end;
        align-items: center;
        height: 100%;
        flex-direction: column;
        padding-bottom: 16px;

        &__status,
        &__species {
          color: #4F4F4F;
          text-transform: uppercase;
          font-weight: 500;
        }

        &__status {
          margin-bottom: 8px;
        }

        &__name {
          color: #081F32;
          margin-bottom: 8px;
          font-weight: 600;
          font-size: 20px;
        }
      }
    }
  }

  &__body {
    padding: 1rem;

    &__info {
      &__title {
        color: $colorText;
        font-weight: 600;
        font-size: 20px;
        margin-bottom: 1rem;
      }

      &__cards {
        display: flex;
        justify-content: space-between;

        &__item {
          padding: 12px;
          width: 163px;
          border-radius: 8px;
          border: 1px solid $colorBorder;

          & * {
            text-overflow: ellipsis;
            text-wrap: nowrap;
            overflow: hidden;
          }

          &__title {
            color: $colorText;
            font-size: 11px;
            display: flex;

            & svg {
              margin-right: 4px;
            }
          }

          &__text {
            color: $colorTextBold;
            font-size: 17px;
            font-weight: 600;
          }
        }
      }

      &__episodes {
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(auto-fit, minmax(163px, 1fr));
        gap: 16px;

        &__item {
          padding: 12px;
          border-radius: 8px;
          width: 163px;
          border: 1px solid $colorBorder;

          & * {
            text-overflow: ellipsis;
            text-wrap: nowrap;
            overflow: hidden;
          }

          &__title,
          &__date {
            color: $colorText;
            font-size: 11px;
          }

          &__name {
            color: $colorTextBold;
            font-size: 17px;
            font-weight: 600;
            margin: 4px 0;
          }

          &__date {
            font-weight: 500;
            text-transform: uppercase;
          }
        }
      }

      &__characters {
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(auto-fit, minmax(326px, 1fr));
        gap: 16px;
      }

      &__actions {
        margin: 36px 0 24px;
        display: flex;
        justify-content: end;
      }

      &__separator {
        margin: 2rem 0;
        border-top: 1px solid $colorBorder;
      }
    }
  }
}
</style>
