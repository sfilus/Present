const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const _ = require('lodash');
const ejs = require('ejs');

const slidesJson = JSON.parse(fs.readFileSync(__dirname + '/slides.json', 'utf8'));
const footerString = fs.readFileSync(__dirname + '/templates/partials/footer.ejs', 'utf8');
const footer = ejs.render(footerString, {"pages": slidesJson.pages});
const header = fs.readFileSync(__dirname + '/templates/partials/header.html');

let slidePlugins = _.map(slidesJson.pages, function(slide, index) {
  let config = {
      template: path.resolve(__dirname, 'templates/pages/', slide.template),
      filename: path.resolve(__dirname, 'public/build/', slide.buildTemplate),
      footer: footer,
      header: header,
      inject: false
  };
  return new HtmlWebpackPlugin(config);
});

module.exports = {
  mode: 'production',
  entry: './js/cover-letter.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public/build')
  },
  plugins: slidePlugins
};