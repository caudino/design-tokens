# The Color Token

---

## Getting Started

### Install Contactlab Design Tokens via npm

For most projects (and to take advantage of Contactlab Design Token's customization features), you'll want to install Contactlab Design Token via npm.

```sh
# Using npm
npm install @contactlab/design-tokens

# Using Yarn
yarn add @contactlab/design-tokens
```

---

### Add Contactlab Design Tokens to your CSS

#### Using with PostCSS

If you're using **[postcss-import](https://github.com/postcss/postcss-import)** (or a tool that uses it under the hood), import colors source:

```css
@import '@contactlab/design-tokens/lib/styles/colors/index.pcss';
```

#### Using with Webpack + Less.js

> **WARN:** Use Less.js `>=v3.5.0`

If you're using Webpack and Less.js you can install **[less-loader](https://github.com/webpack-contrib/less-loader#webpack-resolver)**. Webpack provides an advanced mechanism to resolve files from `node_modules` folder:

```css
@import '~@contactlab/design-tokens/lib/styles/colors/index.less';
```

#### Using via CDN

To pull in Contactlab Design Tokens for quick demos or prototyping, grab the latest default configuration build via CDN:

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/@contactlab/design-tokens@latest/lib/styles/colors/index.css"
/>
```

---

## Bases

| preview                                                     | type | depth | css usage              | less usage         | css classes           |
| ----------------------------------------------------------- | ---- | ----- | ---------------------- | ------------------ | --------------------- |
| ![#f7fcff](https://via.placeholder.com/50x25/f7fcff/f7fcff) | base | 100   | `var(--color-base100)` | `@colors[base100]` | `.(bg?)color-base100` |
| ![#deebf4](https://via.placeholder.com/50x25/deebf4/deebf4) | base | 200   | `var(--color-base200)` | `@colors[base200]` | `.(bg?)color-base200` |
| ![#c3d4e0](https://via.placeholder.com/50x25/c3d4e0/c3d4e0) | base | 300   | `var(--color-base300)` | `@colors[base300]` | `.(bg?)color-base300` |
| ![#9cb0bf](https://via.placeholder.com/50x25/9cb0bf/9cb0bf) | base | 400   | `var(--color-base400)` | `@colors[base400]` | `.(bg?)color-base400` |
| ![#7e96a8](https://via.placeholder.com/50x25/7e96a8/7e96a8) | base | 500   | `var(--color-base500)` | `@colors[base500]` | `.(bg?)color-base500` |
| ![#5b768c](https://via.placeholder.com/50x25/5b768c/5b768c) | base | 600   | `var(--color-base600)` | `@colors[base600]` | `.(bg?)color-base600` |
| ![#36546d](https://via.placeholder.com/50x25/36546d/36546d) | base | 700   | `var(--color-base700)` | `@colors[base700]` | `.(bg?)color-base700` |
| ![#1d3344](https://via.placeholder.com/50x25/1d3344/1d3344) | base | 800   | `var(--color-base800)` | `@colors[base800]` | `.(bg?)color-base800` |
| ![#001420](https://via.placeholder.com/50x25/001420/001420) | base | 900   | `var(--color-base900)` | `@colors[base900]` | `.(bg?)color-base900` |

---

## Accents

| preview                                                     | type   | depth | css usage                | less usage           | css classes             |
| ----------------------------------------------------------- | ------ | ----- | ------------------------ | -------------------- | ----------------------- |
| ![#bae1f9](https://via.placeholder.com/50x25/bae1f9/bae1f9) | accent | 100   | `var(--color-accent100)` | `@colors[accent100]` | `.(bg?)color-accent100` |
| ![#8ccdf6](https://via.placeholder.com/50x25/8ccdf6/8ccdf6) | accent | 200   | `var(--color-accent200)` | `@colors[accent200]` | `.(bg?)color-accent200` |
| ![#5eb9f2](https://via.placeholder.com/50x25/5eb9f2/5eb9f2) | accent | 300   | `var(--color-accent300)` | `@colors[accent300]` | `.(bg?)color-accent300` |
| ![#30a5ef](https://via.placeholder.com/50x25/30a5ef/30a5ef) | accent | 400   | `var(--color-accent400)` | `@colors[accent400]` | `.(bg?)color-accent400` |
| ![#0391ec](https://via.placeholder.com/50x25/0391ec/0391ec) | accent | 500   | `var(--color-accent500)` | `@colors[accent500]` | `.(bg?)color-accent500` |
| ![#0072bc](https://via.placeholder.com/50x25/0072bc/0072bc) | accent | 600   | `var(--color-accent600)` | `@colors[accent600]` | `.(bg?)color-accent600` |
| ![#025d97](https://via.placeholder.com/50x25/025d97/025d97) | accent | 700   | `var(--color-accent700)` | `@colors[accent700]` | `.(bg?)color-accent700` |
| ![#02426c](https://via.placeholder.com/50x25/02426c/02426c) | accent | 800   | `var(--color-accent800)` | `@colors[accent800]` | `.(bg?)color-accent800` |
| ![#012841](https://via.placeholder.com/50x25/012841/012841) | accent | 900   | `var(--color-accent900)` | `@colors[accent900]` | `.(bg?)color-accent900` |

---

## Illustrations

| preview                                                     | type        | depth | css usage                     | less usage                | css classes                  |
| ----------------------------------------------------------- | ----------- | ----- | ----------------------------- | ------------------------- | ---------------------------- |
| ![#e9e8ff](https://via.placeholder.com/50x25/e9e8ff/e9e8ff) | fluo-base   | 300   | `var(--color-fluo-base300)`   | `@colors[fluo-base300]`   | `.(bg?)color-fluo-base300`   |
| ![#b4afff](https://via.placeholder.com/50x25/b4afff/b4afff) | fluo-base   | 600   | `var(--color-fluo-base600)`   | `@colors[fluo-base600]`   | `.(bg?)color-fluo-base600`   |
| ![#7168ff](https://via.placeholder.com/50x25/7168ff/7168ff) | fluo-base   | 900   | `var(--color-fluo-base900)`   | `@colors[fluo-base900]`   | `.(bg?)color-fluo-base900`   |
| ![#e1f9ef](https://via.placeholder.com/50x25/e1f9ef/e1f9ef) | fluo-accent | 300   | `var(--color-fluo-accent300)` | `@colors[fluo-accent300]` | `.(bg?)color-fluo-accent300` |
| ![#9bebd0](https://via.placeholder.com/50x25/9bebd0/9bebd0) | fluo-accent | 600   | `var(--color-fluo-accent600)` | `@colors[fluo-accent600]` | `.(bg?)color-fluo-accent600` |
| ![#00c9bd](https://via.placeholder.com/50x25/00c9bd/00c9bd) | fluo-accent | 900   | `var(--color-fluo-accent900)` | `@colors[fluo-accent900]` | `.(bg?)color-fluo-accent900` |

---

## Feedbacks

| preview                                                     | type    | css usage              | less usage         | css classes           |
| ----------------------------------------------------------- | ------- | ---------------------- | ------------------ | --------------------- |
| ![#0391ec](https://via.placeholder.com/50x25/0391ec/0391ec) | info    | `var(--color-info)`    | `@colors[info]`    | `.(bg?)color-info`    |
| ![#53c518](https://via.placeholder.com/50x25/53c518/53c518) | success | `var(--color-success)` | `@colors[success]` | `.(bg?)color-success` |
| ![#ffb200](https://via.placeholder.com/50x25/ffb200/ffb200) | warning | `var(--color-warning)` | `@colors[warning]` | `.(bg?)color-warning` |
| ![#fc192f](https://via.placeholder.com/50x25/fc192f/fc192f) | error   | `var(--color-error)`   | `@colors[error]`   | `.(bg?)color-error`   |

---

## Neutrals

| preview                                            | type    | css usage            | less usage       | css classes         |
| -------------------------------------------------- | ------- | -------------------- | ---------------- | ------------------- |
| ![#000](https://via.placeholder.com/50x25/000/000) | warning | `var(--color-black)` | `@colors[black]` | `.(bg?)color-black` |
| ![#fff](https://via.placeholder.com/50x25/fff/fff) | success | `var(--color-white)` | `@colors[white]` | `.(bg?)color-white` |
