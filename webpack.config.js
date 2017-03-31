var path = require('path');
var webpack = require('webpack');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var smartImport = require('postcss-smart-import');

var PATH = {
  VENDOR: __dirname + '/src/vendor.ts',
  MAIN: __dirname + '/src/main.ts'
}

var DIR = {
  OUTPUT: __dirname + '/dist/'
}

var plugins = [
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: [
        smartImport,
        precss,
        autoprefixer({
          browsers: [
            'ie >= 9'
          ]
        })
      ],
      'html-minify-loader': {
        quotes: true,
        comments: false,
        dom: {
          lowerCaseAttributeNames: false
        }
      }
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: [
      'main',
      'vendor'
    ]
  })
];

module.exports = {
  cache: true,
  entry: {
    vendor: PATH.VENDOR,
    main: PATH.MAIN
  },
  output: {
    path: DIR.OUTPUT,
    filename: '[name].js'
  },
  resolve: {
    extensions: [
      '.ts',
      '.js'
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
    open: true
  },
  module: {
    exprContextCritical: false,
    rules: [{
      test: /\.ts$/,
      use: [
        'awesome-typescript-loader',
        'angular2-template-loader'
      ]
    }, {
      test: /\.html$/,
      use: 'html-loader'
    }, {
      test: /\.scss$/,
      use: [
        'to-string-loader',
        'css-loader',
        'postcss-loader',
        'sass-loader'
      ]
    }]
  },
  plugins: plugins
};
