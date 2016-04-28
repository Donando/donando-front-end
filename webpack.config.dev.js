var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname + '/src',
  entry: {
    javascript:  './index.js',
    html: './index.html'
  },
  output: {
    filename: 'app.js',
    path: __dirname + '/dist'
  },
  resolve: {
    root: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')]
  },
  eslint: {
    configFile: './.eslintrc',
    emitError: true,
    emitWarning: true,
    failOnError: true
  },
  devtool: 'inline-source-map',
  plugins: [
    new ExtractTextPlugin('style.css'),
    new webpack.optimize.CommonsChunkPlugin('common.js')
  ],
  module : {
    preLoaders: [{
      test: /\/js$/,
      exclude: path.resolve(__dirname, 'node_modules'),
      loader: 'eslint-loader'
    }],
    loaders: [
      {
        test: /\.js$/,
        exclude:  path.resolve(__dirname, 'node_modules'),
        loaders: ['react-hot','babel']
      }, {
        test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
        loader: 'imports?jQuery=jquery'
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style', // backup loader when not building .css file
          'css!sass' // loaders to preprocess CSS
        )
      }, {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      }, {
        test: /\.(woff2?|svg)$/,
        loader: 'url?limit=10000'
      }, {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=8192'
      }, {
        test: /\.(ttf|eot)$/,
        loader: 'file'
      }
    ]
  }
}
