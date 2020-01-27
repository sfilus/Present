const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const footer = fs.readFileSync(__dirname + '/templates/partials/footer.html');
const meta = fs.readFileSync(__dirname + '/templates/partials/meta.html');

const slidesJson = JSON.parse(fs.readFileSync(__dirname + '/slides.json', 'utf8'));
console.log(slidesJson);

module.exports = {
  mode: 'production',
  entry: './js/cover-letter.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public/build')
  },
  // loaders: [
  //   { test: /\.html$/, loader: "underscore-template-loader" }
  // ],
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'templates/pages/1-intro.html'),
      filename: path.resolve(__dirname, 'public/build/index.html'),
      inject: false,
      footer: footer,
      meta: meta
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'templates/pages/2-why-i-want-to-work-at-basecamp.html'),
      filename: path.resolve(__dirname, 'public/build/2-why-i-want-to-work-at-basecamp.html'),
      inject: false,
      footer: footer,
      meta: meta
    })
  ]
};