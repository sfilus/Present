const path = require('path');
module.exports = {
  entry: './js/cover-letter.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public/build')
  }
};