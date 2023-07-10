const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const StylelintPlugin = require('stylelint-webpack-plugin')

const PROJECT = {
  title: 'TStemplate',
  lang: 'en',
  isEmptyBodyRequired: true,
}

const getTemplate = (subtitle) => `<!DOCTYPE html>
<html lang="${PROJECT.lang}">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${PROJECT.title}${subtitle ? ' | ' + subtitle : ''}</title>
    <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png">
    <link rel="manifest" href="./site.webmanifest">
  </head>
  <body class="light-theme">${PROJECT.isEmptyBodyRequired ? '' : '\n    <div class="root" id="root"></div>'}
  </body>
</html>`

module.exports = {
  entry: {
    app: path.resolve(__dirname, './src/index.ts'),
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: 'assets/[name][ext]',
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  plugins: [
    new StylelintPlugin({ extensions: ['scss'] }),
    new ESLintPlugin({ extensions: ['ts'] }),
    new HtmlWebpackPlugin({
      templateContent: getTemplate(),
      fileName: 'index.html',
      chunks: ['app'],
    }),
    new CopyPlugin({ patterns: [{ from: './src/assets/favicon', to: './' }] }),
  ],

  module: {
    rules: [
      { test: /\.ts?$/i, use: ['ts-loader'] },
      { test: /\.(css|s[ac]ss)$/i, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|webp|mp3)$/i, type: 'asset' },
    ],
  },

  resolve: { extensions: ['.ts', '.js'] },
}
