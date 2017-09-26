var webpack = require('webpack'),
    path = require('path'),
    autoprefixer = require('autoprefixer'),
    precss = require('precss'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
        template: __dirname + '/app/index.html',
        filename: 'index.html',
        inject: 'body'
    })

module.exports = {
  entry: [
    './app/index.js'
  ],
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  output: {
    path: __dirname + '/dist',
    filename: "index.compiled.js"
  },
  module: {
    devtool: "source-map", // or "inline-source-map"
    loaders: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /joi-browser/],
        include: [path.resolve(__dirname, 'app')],
        loader: "babel-loader",
        query: {
            presets: ['react', 'es2015', 'stage-0']
        }
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!postcss-loader!sass-loader?sourceMap"
      },

      {
        test: /\.jpg|.jpeg|.png|.gif|.svg$/,
        loader: "file?name=images/[name].[ext]"
      },
      {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          loader: 'file?name=fonts/[name].[ext]'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ],
    sassLoader: {
      includePaths: [path.resolve(__dirname, "./app/index.scss")]
    }
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('development')
        }
    })
  ],
  postcss: function () {
      return [precss, autoprefixer];
  }
}