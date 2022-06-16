/*
 * @Author: niumengfei
 * @Date: 2022-04-30 18:54:06
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-05-04 12:40:08
 */
console.log(__dirname)
const path = require('path');
const HtmlWebpackPlugins = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'assets/js/bundle.js',
        clean: true, //清除历史dist
    },
    mode: 'development', //none development
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugins({
            filename: 'index.html', //文件名 可以指定到目录assets/index.html
            template: 'index.html', //原html文件位置 //可以./index.html 也可以直接index.html
            inject: 'head', //放在html的哪里 body head true / false
        }),
    ],
    devServer: { 
        static: './dist' 
    }
}