var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const MODE = 'production';
const enableSourceMap = false;

module.exports = {
    mode: MODE,
    entry: './src/js/main.js',
    devtool: 'source-map',
    output: {
        path: path.join(__dirname,'c96_dev/public/js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules\/(?!(dom7)\/).*/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                            sourceMap: enableSourceMap
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
        ],
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: '../css/style.css'
        }),
    ]
};