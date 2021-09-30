const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  chainWebpack: config => {
    config.module // 修改svg預設處理,
      .rule('svg')
      .exclude
      .add(resolve('src/assets/icons'))
      .end()

    config.module // 新增 svg-sprite-loader 設定
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include
      .add(resolve('src/assets/icons')) // svg圖示的路徑
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]' // 設定svg中symbol中id的值
      })
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        // 路徑根據具體需求更改
        path.resolve(__dirname, 'src/assets/scss/config/_variables.scss')
        // path.resolve(__dirname, 'src/assets/styles/mixin.scss')
      ]
    }
  }
}

// }
// module.exports = {
//   pluginOptions: {
//     'style-resources-loader': {
//       preProcessor: 'scss',
//       patterns: [
//         // 路徑根據具體需求更改
//         path.resolve(__dirname, 'src/assets/scss/config/_variables.scss')
//         // path.resolve(__dirname, 'src/assets/styles/mixin.scss')
//       ]
//     }
//   }
// }
