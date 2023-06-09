module.exports = {
    publicPath: '/json-view/',
    configureWebpack: {
        devtool: 'source-map',
    },
    // 强制内联CSS
    css: {
        extract: false,
    },
    // 扩展 webpack 配置，使 components 加入编译
    chainWebpack: config => {
        config.module
            .rule('js')
            .include
            .add('/publish')//这里根据你文件夹名称自定义，每个人不一样
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                // 修改它的选项...
                return options
            })
    },
}
