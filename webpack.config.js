// source: https://github.com/frederikprijck/angularjs-webpack-starter
const path = require('path');
const ROOT = path.resolve( __dirname, 'src' );

/**
 * Webpack Plugins
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: ROOT,

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'tslint-loader',
          options: {
            emitErrors: true
          }
        },
        enforce: 'pre'
      },
      {
        test: /\.ts$/,
        exclude: [ /node_modules/ ],
        use: [
          'ng-annotate-loader',
          'awesome-typescript-loader',
          'angular2-template-loader'
        ]
      },
      {
        test: /\.html$/,
        use: 'raw-loader'
      },
      {
        test: /\.css$/,
        loaders: ['to-string-loader', 'css-loader']
      },


      //
      // {
      //   test: /\.scss$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: ['css-loader', 'sass-loader'],
      //     publicPath: '../'
      //   }),
      // },
      {
        test: /\.(jpg|png|gif)$/,
        use: 'file-loader'
      },
      // {
      //   test: /.html$/,
      //   // exclude: /index.html$/,
      //   // use: 'html-loader'
      //   loader: 'html-loader'
      // }
      /* Embed files. */
      // {
      //   test: /\.(html|css)$/,
      //   loader: 'raw-loader',
      //   exclude: /\.async\.(html|css)$/
      // },
      // /* Async loading. */
      // {
      //   test: /\.async\.(html|css)$/,
      //   loaders: ['file?name=[name].[hash].[ext]', 'extract']
      // }


      // {
      //   test: /\.html$/,
      //   exclude: /index.html$/,
      //   use: [
      //     {
      //       loader:'ngtemplate-loader',
      //       options: {
      //         relativeTo: './app/'
      //       }
      //     },
      //     { loader: 'html-loader' }
      //   ]
      // }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'AngularJS - Webpack',
      template: 'index.html',
      inject: true
    }),
    new LoaderOptionsPlugin({
      debug: true,
      options: {
        tslint: {
          configuration: require('./tslint.json'),
          typeCheck: true
        }
      }
    }),
    new ExtractTextPlugin('css/style.css')
  ],

  entry: './main.ts'
};
