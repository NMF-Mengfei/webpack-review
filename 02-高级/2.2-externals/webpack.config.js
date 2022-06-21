/*
 * @Author: niumengfei
 * @Date: 2022-06-19 18:01:03
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-06-21 10:15:38
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            // template: 'index.html', //原html文件位置 //可以./index.html 也可以直接index.html
        }),
    ],
    externalsType: 'script', //扩展标签文件格式
    externals: {
        // jquery: '$', // $ 或者 jQuery 都可以 因为CDN链接执行后 全局window上已经有了$和jQuery
        jquery: [
            'https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js', //参数1 资源地址
            'jQuery', //参数2 资源加载给全局的变量
        ]
    }
}