/*
 * @Author: niumengfei
 * @Date: 2022-04-30 18:54:06
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-06-16 10:11:14
 */
module.exports = {
    output: {
        filename: 'assets/js/[name].js', //测试不需要 contenthash hash:5 
    },
    mode: 'development', //none development production
    /* devtool: 由于开发环境需要调试，但是打包后源文件打包为 bundle.js文件后，当我们查看报错的时候，错误依旧定位到了bundle里
        所以需要设置此字段的值 让bundle.js与源代码关联起来
    */
    devtool: 'inline-source-map', //调试代码 
    devServer: { //测试环境需要配置
        static: './dist' 
    },
} 