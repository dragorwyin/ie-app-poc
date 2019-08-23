const path = require('path');

module.exports = {
  outputPath: path.resolve(__dirname, '../', 'dist'),
  entryPath: path.resolve(__dirname, '../', 'index.js'),
  templatePath: path.resolve(__dirname, '../', 'index.html')
};