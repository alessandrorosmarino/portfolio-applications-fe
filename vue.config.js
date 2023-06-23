const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(pdf)(\?.*)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'assets/[name].[hash:8].[ext]'
              }
            }
          ]
        }
      ]
    }
  }
});