var path = require('path');

module.exports = {
    mode: 'development',
    entry: './public/js/app.js',
    output: {
        filename:"app.bundle.js",
        path: path.resolve(__dirname, 'public/js/dist')
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: "babel-loader",
                options:
                {
                    presets: ['@babel/preset-env']
                }
            }
        ]
    }, devServer: {
        historyApiFallback: {
            index: 'index.html'
        }
    }
};