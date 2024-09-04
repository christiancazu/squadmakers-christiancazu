<template>
  <label class="sm-search-input">
    <div class="sm-search-input__icon --left">
      <svg
        v-if="search.isLoading"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
        >
          <animateTransform
            attributeName="transform"
            dur="0.75s"
            repeatCount="indefinite"
            type="rotate"
            values="0 12 12;360 12 12"
          />
        </path>
      </svg>
      <svg
        v-else
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.8072 26.3362L20.7529 19.2819C20.6271 19.1561 20.4631 19.0905 20.2881 19.0905H19.7248C21.6005 17.0617 22.7489 14.3548 22.7489 11.3744C22.7489 5.09116 17.6577 0 11.3744 0C5.09116 0 0 5.09116 0 11.3744C0 17.6577 5.09116 22.7489 11.3744 22.7489C14.3548 22.7489 17.0617 21.6005 19.0905 19.7303V20.2881C19.0905 20.4631 19.1616 20.6271 19.2819 20.7529L26.3362 27.8072C26.5932 28.0643 27.0088 28.0643 27.2659 27.8072L27.8072 27.2659C28.0643 27.0088 28.0643 26.5932 27.8072 26.3362ZM11.3744 20.999C6.05361 20.999 1.74991 16.6953 1.74991 11.3744C1.74991 6.05361 6.05361 1.74991 11.3744 1.74991C16.6953 1.74991 20.999 6.05361 20.999 11.3744C20.999 16.6953 16.6953 20.999 11.3744 20.999Z"
          fill="#F2F2F2"
        />
      </svg>

    </div>
    <input
      v-model="search.text"
      placeholder="Search character..."
      class="sm-search-input__input"
    >
    <div
      class="sm-search-input__icon --right"
      @click="open"
    >
      <svg
        width="28"
        height="26"
        viewBox="0 0 28 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.5625 20H10.5V17.8125C10.5 17.0852 9.91484 16.5 9.1875 16.5H6.5625C5.83516 16.5 5.25 17.0852 5.25 17.8125V20H0.4375C0.196875 20 0 20.1969 0 20.4375V21.3125C0 21.5531 0.196875 21.75 0.4375 21.75H5.25V23.9375C5.25 24.6648 5.83516 25.25 6.5625 25.25H9.1875C9.91484 25.25 10.5 24.6648 10.5 23.9375V21.75H27.5625C27.8031 21.75 28 21.5531 28 21.3125V20.4375C28 20.1969 27.8031 20 27.5625 20ZM8.75 23.5H7V18.25H8.75V23.5ZM27.5625 4.25H14V2.0625C14 1.33516 13.4148 0.75 12.6875 0.75H10.0625C9.33516 0.75 8.75 1.33516 8.75 2.0625V4.25H0.4375C0.196875 4.25 0 4.44688 0 4.6875V5.5625C0 5.80312 0.196875 6 0.4375 6H8.75V8.1875C8.75 8.91484 9.33516 9.5 10.0625 9.5H12.6875C13.4148 9.5 14 8.91484 14 8.1875V6H27.5625C27.8031 6 28 5.80312 28 5.5625V4.6875C28 4.44688 27.8031 4.25 27.5625 4.25ZM12.25 7.75H10.5V2.5H12.25V7.75ZM27.5625 12.125H22.75V9.9375C22.75 9.21016 22.1648 8.625 21.4375 8.625H18.8125C18.0852 8.625 17.5 9.21016 17.5 9.9375V12.125H0.4375C0.196875 12.125 0 12.3219 0 12.5625V13.4375C0 13.6781 0.196875 13.875 0.4375 13.875H17.5V16.0625C17.5 16.7898 18.0852 17.375 18.8125 17.375H21.4375C22.1648 17.375 22.75 16.7898 22.75 16.0625V13.875H27.5625C27.8031 13.875 28 13.6781 28 13.4375V12.5625C28 12.3219 27.8031 12.125 27.5625 12.125ZM21 15.625H19.25V10.375H21V15.625Z"
          fill="#BDBDBD"
        />
      </svg>
    </div>

    <div
      v-if="search.filters?.length"
      class="sm-search-input__filters"
    >
      <span class="sm-search-input__filters__label">Filters applied: </span>
      <p>{{ search.filters.join(', ') }}</p>
    </div>
  </label>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { useModal, useModalSlot } from 'vue-final-modal';
import { useDebounceFn } from '@vueuse/core';

import BaseModal from './BaseModal.vue';
import Filters from './Filters.vue';
import { useFilters } from '@/composables';

const { search, onSearchCharacters } = useFilters()

const debouncedFn = useDebounceFn(() => onSearchCharacters(), 1000);

watch(() => search.text, () => debouncedFn())

const { open, close } = useModal({
  component: BaseModal,
  slots: {
    default: useModalSlot({
      component: Filters,
      attrs: {
        handleClose() {
          close()
        },
        handleSearch() {
          onSearchCharacters()
          close()
        },
      }
    })
  }
})
</script>

<style scoped lang="scss">
.sm-search-input {
  position: relative;
  font-size: 20px;
  margin: 16px 0;

  &__icon {
    position: absolute;

    &.--left,
    &.--right {
      top: 16px;
      padding-inline: 8px;
    }

    &.--right {
      right: 8px;
      cursor: pointer;

    }
  }

  &__input {
    background-color: #081F32;
    padding-left: 48px;
    color: #BDBDBD;
    width: 100%;
    max-width: 500px;
    height: 60px;
    border-radius: 6px;
    font-size: 18px;
    border: 1px solid #F2F2F2;
  }

  &__filters {
    height: 33px;
    max-width: 500px;
    font-size: 18px;
    background-color: #F2F2F2;
    border-radius: 6px;
    display: flex;
    align-items: center;
    padding-inline: 16px;
    text-overflow: ellipsis;
    margin-top: 16px;

    & span {
      color: #34C759;
      padding-right: 8px;
    }

    & p {
      color: #081F32;
    }
  }
}
</style>
