const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
        use: [
          // "style-loader",
          {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // you can specify a publicPath here
                // by default it use publicPath in webpackOptions.output
              }
            },
          "css-loader",
      ],
        test: /\.css$/
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ]
}

module.exports = config;