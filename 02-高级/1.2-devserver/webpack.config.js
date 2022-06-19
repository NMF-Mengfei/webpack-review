/*
 * @Author: niumengfei
 * @Date: 2022-06-16 14:34:43
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-06-17 16:26:32
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './app.js',
    //默认打包后 路径为 当前根目录下 dist文件夹下，有main.js 和 index.html
    plugins: [
        new HtmlWebpackPlugin(),
    ],
    devServer: {
        static: { 
            directory: path.join(__dirname, 'dist'),
        }, // 默认是把/dist目录当作web服务的根目录
        // compress: false, //告诉服务器通过哪种方式加载资源，true为zip 默认为true 测试需要强制刷新
        // port: 3000, //端口号
        headers: { //添加响应头信息
            'dsad': '213123'
        },
        proxy: {
            '/api': {
                target: 'http://localhost:8000',
                // pathRewrite: { '^/api': '' },
            },
        },
        // https: true, //通过https访问
        // http2: true,
        historyApiFallback: true, //防止404
        host: '0.0.0.0', //
        
    }
}