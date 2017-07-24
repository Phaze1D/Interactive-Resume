var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
          presets: ['es2015', 'es2016', 'react'],
          plugins: [
						"transform-decorators-legacy",
						"syntax-dynamic-import",
						"babel-plugin-inline-import",
						"transform-es2015-parameters"
					]
        }
      }]
    },{
      test: /\.(ttf|otf|eot|png|jpg|svg|mp3|pdf|woff(2)?)$/,
      use: {
				loader: 'url-loader',
				options: {
          limit: 19
        }
			},
    },{
			test: /\.(html)$/,
      use: {
				loader: 'url-loader',
				options: {
					name: 'index.[ext]',
          limit: 19
        }
			},
		},{
			test: /\.(ico)$/,
      use: {
				loader: 'url-loader',
				options: {
					name: '[name].[ext]',
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
  plugins: [
		new ExtractTextPlugin("styles.css"),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: {removeAll: true } },
      canPrint: true
    }),
    new UglifyJSPlugin({ output: {comments: false} }),
    // new BundleAnalyzerPlugin()
  ],
}

module.exports = config
