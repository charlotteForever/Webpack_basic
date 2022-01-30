const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index',
    output: {
        filename: '[name].js',
        // join是node.js下路径拼接的api；__dirname是当前文件所处目录的绝对路径
        path: path.join(__dirname, './dist')
    },
    mode: 'development',
    devtool: false,
    devServer: {
        hot: true
    },
    // 生成html的插件
    plugins: [new HtmlWebpackPlugin()],
    // 加载css模块
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    watch: true
}