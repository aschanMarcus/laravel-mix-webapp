# Laravel-mix WebApp

Leverages on [Favicons Webpack Plugin](https://github.com/jantimon/favicons-webpack-plugin) and [HTML Webpack Plugin](https://github.com/jantimon/html-webpack-plugin) to automatically generate your favicons for you and inject them into a HTML file.

## Install
```bash
npm i html-webpack-plugin --save-dev
```
```bash
yarn add html-webpack-plugin --dev
```

## Usage
```js
require('laravel-mix-versionhash')

mix.webApp({logo: 'src/path-to-logo.svg'})
```

## Options
| option     | type   | default            | description                                                         |
|------------|--------|--------------------|---------------------------------------------------------------------|
| logo       | string |                    | The path to the logo from which the favicons will be generated      |
| filename   | string | `webapp.html`      | The filename of the HTML file that should get generated             |
| outputPath | string | `/webicons`        | The path to the directory where icons should be placed              |
| prefix     | string | `assets/webicons/` | The path prefix for the generated icon tags                         |
| favicons   | object | `{}`               | See [favicons](https://github.com/jantimon/favicons-webpack-plugin) |
