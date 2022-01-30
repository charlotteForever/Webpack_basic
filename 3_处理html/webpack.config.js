const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index',
    output: {
        filename: '[name].js',
        path: path.join(__dirname, './dist')
    },
    mode: 'development',
    plugins: [new HtmlWebpackPlugin()]
}