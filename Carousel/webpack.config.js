const path = require('path');
// const ExtractTextWebpackPlugin = require("mini-css-extract-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");



module.exports = {
  entry: path.resolve(__dirname, './client'),
  output: {
    path: path.resolve(__dirname, './static'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js[x]?/,
        exclude: /(node_modules|dep)/,
        options: {
          presets: ['react', 'env']
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader"
        ]
      }
      // {
      //   test: /\.scss$/,
      //   : MiniCssExtractPlugin.extract({
      //     fallback: 'style-loader',
      //     use: ['css-loader', 'sass-loader']
      //   })
      // },
    ]
  },
  plugins: [new MiniCssExtractPlugin()],
  
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  }
};