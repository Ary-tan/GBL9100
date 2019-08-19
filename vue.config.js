const path = require('path');
module.exports = {
  publicPath: '/',
  outputDir: 'GBL9100',
  devServer: {
    port: 8080,
    host: '10.10.101.11',
    https: false,
    open: true,
    proxy: {
      '/api': {
        target: 'http://10.10.101.12:8089',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  },
  productionSourceMap: false,
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
};

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/common.less'),
      ],
    })
}