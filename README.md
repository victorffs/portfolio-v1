<h1 align="center">
  Frago.so Portfolio - v1
</h1>
<p align="center">
  My personal portfolio website <a href="https://portfolio.frago.so/" target="_blank">portfolio.frago.so</a> built with <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby</a> and hosted with <a href="https://www.netlify.com/" target="_blank">Netlify</a>
</p>

![demo](https://raw.githubusercontent.com/victorffs/portfolio-v1/main/src/images/demo.png)

## 🚨 Forking this repo (please read!)

This website was created based on [brittanychiang v4](https://github.com/bchiang7/v4) template.

If you want to fork this repo, please give proper credit linking back to [brittanychiang.com](https://brittanychiang.com). Thanks!

## 🛠 Installation & Set Up

1. Install the Gatsby CLI

   ```sh
   npm install yarn
   npm install -g gatsby-cli
   ```

2. Install and use the correct version of Node using [NVM](https://github.com/nvm-sh/nvm)

   ```sh
   nvm install
   ```

3. Install dependencies

   ```sh
   yarn
   ```

4. Start the development server

   ```sh
   npm start
   ```

## 🚀 Building and Running for Production

1. Generate a full static production build

   ```sh
   npm run build
   ```

1. Preview the site as it will appear once deployed

   ```sh
   npm run serve
   ```

## 🎨 Color Reference

| Color          | Hex                                                                |
| -------------- | ------------------------------------------------------------------ |
| Navy           | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) `#0a192f` |
| Light Navy     | ![#112240](https://via.placeholder.com/10/0a192f?text=+) `#112240` |
| Lightest Navy  | ![#233554](https://via.placeholder.com/10/303C55?text=+) `#233554` |
| Slate          | ![#8892b0](https://via.placeholder.com/10/8892b0?text=+) `#8892b0` |
| Light Slate    | ![#a8b2d1](https://via.placeholder.com/10/a8b2d1?text=+) `#a8b2d1` |
| Lightest Slate | ![#ccd6f6](https://via.placeholder.com/10/ccd6f6?text=+) `#ccd6f6` |
| White          | ![#e6f1ff](https://via.placeholder.com/10/e6f1ff?text=+) `#e6f1ff` |
| Green          | ![#64ffda](https://via.placeholder.com/10/64ffda?text=+) `#64ffda` |

# Solving issues:

If issues on `npm start` command, clean node modules:

```sh
rm -rf node_modules package-lock.json yarn.lock
```

Then nvm to use correct node version, install npm and dependencies:

```sh
nvm install
npm install
```

Then close and reopen terminal

Then finally run:

```sh
npm start
```
