/*
 * @Author: niumengfei
 * @Date: 2022-06-16 14:34:43
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-06-16 14:42:28
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './app.js',
    // output: path.resolve(__dirname, '')
    plugins: [
        new HtmlWebpackPlugin(),
    ]
}