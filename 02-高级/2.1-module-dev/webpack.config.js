/*
 * @Author: niumengfei
 * @Date: 2022-06-19 16:43:27
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-06-19 17:48:05
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
console.log(path.resolve(__dirname, 'src/app'));
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    // output: {
    //     publicPath: './'
    // },
    // modules: {
    //     rules: [
    //         {
    //             test: /\.js$/,
    //             use: path.resolve(__dirname, "./loader/replaceLoader.js")
    //         }
    //     ]
    // }
    plugins: [ 
        new HtmlWebpackPlugin()
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    }
}