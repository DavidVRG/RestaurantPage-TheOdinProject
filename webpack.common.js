const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [new HtmlWebpackPlugin({template: './src/template.html'})],
    module: {
        rules: [
            {
              test: /\.html$/i,
              loader: "html-loader",
            },
            {
              test: /\.png$/,
              type: 'asset/resource'
            },
          ],
      }
}