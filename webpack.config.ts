import webpack from "webpack";

const HTMLWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

export default {
  entry: {
    index: './src/index.js',
  },
  resolve: {
    extensions: [ '.js', '.vue' ],
  },
  mode: 'development',
  devtool: false,
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // this will apply to both plain `.js` files
      // AND `<script>` blocks in `.vue` files
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
      {
        test: /\.(scss|css)$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: false // IMPORTANT: it's supposed to be turned off
            },
          },
          'sass-loader'          
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCSSExtractPlugin(),    
    new HTMLWebpackPlugin({
      template: './index.ejs',
      filename: 'index.html'
    }),
  ]
} as webpack.Configuration;