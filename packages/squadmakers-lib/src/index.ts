import type { App } from 'vue';

import Tarjeta from './components/Tarjeta/Tarjeta.vue';
import Favorite from './components/Favorite/Favorite.vue';

import './assets/main.scss'

export default {
  install: (app: App) => {
    app.component('Tarjeta', Tarjeta);
    app.component('Favorite', Favorite);
  },
};

export {
  Tarjeta,
  Favorite
};
