var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require("extract-text-webpack-plugin")


var config = {
  entry: './frontend/main.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  resolve: {
    modules: [
      'node_modules',
			'frontend',
      'frontend/components'
    ],
    extensions: ['.js', '.jsx', '.scss', '.sass']
  },
  module: {
    rules: [{
      test: /\.(jsx|js)?$/,
      exclude: /(node_modules)/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['es2016', 'react'],
          plugins: ["transform-decorators-legacy", "syntax-dynamic-import"]
        }
      }]
    },{
      test: /\.(ttf|otf|eot|png|jpg|svg|pdf|woff(2)?)$/,
      use: {
				loader: 'url-loader',
				options: {
          limit: 19
        }
			},
    },{
      test: /\.(scss|sass|css)$/,
      use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
    }]
  },
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    disableHostCheck: true,
    publicPath: '/',
    hot: true,
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ],
}

module.exports = config
