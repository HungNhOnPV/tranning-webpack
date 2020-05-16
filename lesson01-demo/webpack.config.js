const path = require('path');

const config = {
  entry: './src/index.js',
  output: { 
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    // watch: true
  }
}

module.exports = config;