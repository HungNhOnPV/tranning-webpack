const path = require('path');

const config = {
  entry: './src/index.js',
  output: { 
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  watch: true,
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/
      }
    ]
  }
}

module.exports = config;