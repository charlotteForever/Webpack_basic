const path = require('path')

module.exports = {
    entry: './src/index',
    output: {
        filename: '[name].js',
        path: path.join(__dirname, './dist'),
    },
    module: {
        rules: [{
            // '\'是为了转义
            test: /\.css/i,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    }
}