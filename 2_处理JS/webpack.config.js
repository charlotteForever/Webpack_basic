const path = require('path')
module.exports = {
    entry: './src/index',
    output: {
        filename: '[name].js',
        // join是node.js下路径拼接的api；__dirname是当前文件所处目录的绝对路径
        path: path.join(__dirname, './dist')
    },
    mode: 'development',
    devtool: false,
    module: {
        rules: [{
            test: /\.js$/i,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env'
                            ]
                        ]
                    }
                }
            ]
        }]
    }
}