# squadmakers-lib



## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## use node >= 18

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

## Installation

#### pnpm

```bash
pnpm add christiancazu-squadmakers-lib
```

Then you need to register it:

`import { Tarjeta, Favorite } from 'christiancazu-squadmakers-lib'`

## Usage Tarjeta

```html
<Tarjeta :character="character"></Tarjeta>
```

## Tarjeta Props
| Name | Type |
| ---:| --- |
| character | Character |

## Character Type
| Name | Type |
| ---:| --- |
| id | Number |
| name | String |
| status | 'Alive' \| 'Dead' \| 'unknown' |
| species | String |
| type | String |
| species | String |
| gender | String |
| origin | Origin |
| location | Origin |
| image | String |
| episode | String[] |
| url | String |
| created | String |
| isFavorite? | Boolean |

## Origin Type
| Name | Type |
| ---:| --- |
| name | String |
| url | String |

## Events
| Name | Arguments | Description |
| ---: | --- | --- |
| toggleFavorite | id(Number) | Emitted when favorite button is toggled |

## Usage Favorite

```html
<Favorite isFavorite></Favorite>
```

## Favorite Props
| Name | Type |
| ---:| --- |
| isFavorite? | Boolean |

## Events
| Name | Arguments | Description |
| ---: | --- | --- |
| toggleFavorite | | Emitted when favorite button is toggled |
