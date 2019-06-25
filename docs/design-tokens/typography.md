# The Typography Token

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
@import '@contactlab/design-tokens/lib/styles/typography/index.pcss';
```

#### Using with Webpack + Less.js

> **WARN:** Use Less.js `>=v3.5.0`

If you're using Webpack and Less.js you can install **[less-loader](https://github.com/webpack-contrib/less-loader#webpack-resolver)**. Webpack provides an advanced mechanism to resolve files from `node_modules` folder:

```css
@import '~@contactlab/design-tokens/lib/styles/typography/index.less';
```

#### Using via CDN

To pull in Contactlab Design Tokens for quick demos or prototyping, grab the latest default configuration build via CDN:

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/@contactlab/design-tokens@latest/lib/styles/typography/index.css"
/>
```

---

## Headings

| type      | font-family              | font-size\* | line-height | margin-bottom\* | color   | css usage    |
| --------- | ------------------------ | ----------- | ----------- | --------------- | ------- | ------------ |
| Hero Text | "Montserrat", sans-serif | 6.4rem      | 1em         | 2.6rem          | base800 | `.hero-text` |
| Heading 1 | "Montserrat", sans-serif | 3.8rem      | 1.2em       | 2.4rem          | base800 | global       |
| Heading 2 | "Montserrat", sans-serif | 3.2rem      | 1.2em       | 2.2rem          | base800 | global       |
| Heading 3 | "Montserrat", sans-serif | 2.8rem      | 1.2em       | 2rem            | base800 | global       |
| Heading 4 | "Montserrat", sans-serif | 2.4rem      | 1.4em       | 1.8rem          | base800 | global       |
| Heading 5 | "Montserrat", sans-serif | 2.2rem      | 1.4em       | 1.6rem          | base800 | global       |
| Heading 6 | "Montserrat", sans-serif | 2rem        | 1.4em       | 1.4rem          | base800 | global       |

> \*All the dimensions expressed in rem unit must be related to the font-size of the root element of 62.5% (1rem = 10px; 10px / 16px = 62.5%).

---

## SubHeadings

| type         | font-family              | font-size\* | line-height | margin-bottom\* | color   | css usage       |
| ------------ | ------------------------ | ----------- | ----------- | --------------- | ------- | --------------- |
| SubHeading 1 | "Montserrat", sans-serif | 2.2rem      | 1.3em       | 1.6rem          | base700 | `.subheading-1` |
| SubHeading 2 | "Montserrat", sans-serif | 2rem        | 1.3em       | 1.4rem          | base700 | `.subheading-2` |
| SubHeading 3 | "Montserrat", sans-serif | 1.8rem      | 1.3em       | 1.2rem          | base700 | `.subheading-3` |

> \*All the dimensions expressed in rem unit must be related to the font-size of the root element of 62.5% (1rem = 10px; 10px / 16px = 62.5%).

---

## Others

| type      | font-family                                                                  | font-size\* | line-height | margin-bottom\* | color   | css usage |
| --------- | ---------------------------------------------------------------------------- | ----------- | ----------- | --------------- | ------- | --------- |
| Paragraph | "Montserrat", sans-serif                                                     | 1.4rem      | 1.5em       | 1.4rem          | base900 | global    |
| Small     | "Montserrat", sans-serif                                                     | 1.2rem      | 1.4em       | none            | base600 | global    |
| Code      | "Inconsolata", "Consolas", "Monaco", "Andale Mono", "Ubuntu Mono", monospace | 1.5em       | 1.4rem      | none            | inherit | global    |

> \*All the dimensions expressed in rem unit must be related to the font-size of the root element of 62.5% (1rem = 10px; 10px / 16px = 62.5%).
