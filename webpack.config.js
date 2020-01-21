const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const header = fs.readFileSync(__dirname + '/templates/partials/header.html');
const footer = fs.readFileSync(__dirname + '/templates/partials/footer.html');
const meta = fs.readFileSync(__dirname + '/templates/partials/meta.html');

module.exports = {
  mode: 'production',
  entry: './js/cover-letter.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public/build')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'templates/pages/1-intro.html'),
      filename: path.resolve(__dirname, 'public/build/index.html'),
      inject: false,
      header: header,
      footer: footer,
      meta: meta
    })
  ]
};