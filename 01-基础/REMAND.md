### moudle
  由于webpack默认只能解析js、json文件，所以如果需要解析图片等资源，需要通过配置进行解析，如下：
  + 1、通过内置资源模块去打包导入 asset/resource asset/inline asset/source asset(这种方式会根据8kb自动在resource和inline中选择)
  + 2、通过loader，针对复杂的文件 比如css、less、sass、jsx、ts
  + 3、当然也可以自己再对js进行自定义解析处理
### plugins
  + html-webpack-plugin: 打包html插件
  + mini-css-extract-plugin: 分离css插件，可以使得css打包后形成一个新的css文件，便于html-wepback-plugin插件通过link方式引入该打包后的css文件
  + css-minimizer-webpack-plugin：压缩css的插件，必须启用mode: production才生效
