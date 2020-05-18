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
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      },
      {
        loader: 'file-loader',
        test: /\.jpe?g$|\.git$|\.png$|\.svg$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.wav$|\.mp3$|\.ico$/
      },
    ]
  }
}

module.exports = config;