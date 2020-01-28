const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const _ = require('lodash');

const footer = fs.readFileSync(__dirname + '/templates/partials/footer.html');
const meta = fs.readFileSync(__dirname + '/templates/partials/meta.html');
const slidesJson = JSON.parse(fs.readFileSync(__dirname + '/slides.json', 'utf8'));

let slidePlugins = _.map(slidesJson.pages, function(slide, index) {
  let config = {
      template: path.resolve(__dirname, 'templates/pages/', slide.template),
      filename: path.resolve(__dirname, 'public/build/', slide.template),
      footer: footer,
      meta: meta,
      inject: false
  };
  if(index === 0) {
    config.filename = path.resolve(__dirname,'public/build/', 'index.html');
  }
  return new HtmlWebpackPlugin(config);
});

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
  plugins: slidePlugins
};