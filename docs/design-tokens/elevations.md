# The Elevation Token

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
@import '@contactlab/design-tokens/lib/styles/elevations/index.pcss';
```

#### Using with Webpack + Less.js

> **WARN:** Use Less.js `>=v3.5.0`

If you're using Webpack and Less.js you can install **[less-loader](https://github.com/webpack-contrib/less-loader#webpack-resolver)**. Webpack provides an advanced mechanism to resolve files from `node_modules` folder:

```css
@import '~@contactlab/design-tokens/lib/styles/elevations/index.less';
```

#### Using via CDN

To pull in Contactlab Design Tokens for quick demos or prototyping, grab the latest default configuration build via CDN:

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/@contactlab/design-tokens@latest/lib/styles/elevations/index.css"
/>
```

---

## Elevations

| depth | css usage              | less usage         | margin-bottom\* | css usage    |
| ----- | ---------------------- | ------------------ | --------------- | ------------ |
| 1dp   | `var(--elevation-1dp)` | `@elevations[1dp]` | 2.6rem          | `.hero-text` |
| 2dp   | `var(--elevation-2dp)` | `@elevations[2dp]` | 2.4rem          | global       |
| 3dp   | `var(--elevation-3dp)` | `@elevations[3dp]` | 2.2rem          | global       |
| 4dp   | `var(--elevation-4dp)` | `@elevations[4dp]` | 2rem            | global       |
| 5dp   | `var(--elevation-5dp)` | `@elevations[5dp]` | 1.8rem          | global       |
