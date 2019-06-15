const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src', 'js', 'index.js'),
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'privacy-choices/index.html',
      template: path.join(__dirname, 'examples', 'index.html'),
      inject: false
    }),
    new HtmlWebpackPlugin({
      filename: 'privacy-choices/informational/index.html',
      template: path.join(__dirname, 'examples', 'informational', 'index.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'privacy-choices/minimal/index.html',
      template: path.join(__dirname, 'examples', 'minimal', 'index.html')
    })
  ],
  output: {
    filename: 'privacy-choices/privacy-choices.bundle.js',
    path: path.join(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}
