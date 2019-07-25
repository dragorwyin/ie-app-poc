const path = require('path');

module.exports = {
  outputPath: path.resolve(__dirname, '../', 'dist'),
  entryPath: path.resolve(__dirname, '../', 'web', 'index.js'),
  templatePath: path.resolve(__dirname, 'web', 'index.html')
};