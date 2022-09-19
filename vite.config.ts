import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'

import viteEslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteEslint()
  ],
  resolve: {
    alias: {
      '@': './src'
    }
  },
  css: {
    // css 预处理器配置选项
    preprocessorOptions: {
      scss: {
        // 设置全局引入该scss 文件
        additionalData: '@import "@/common/style/variable.scss";'
      }
    },
    // css module 配置项
    modules: {
      // 自定义类目 name 文件名 local 类名
      generateScopedName: '[name]_[local]_[hash:base64:5]'
    },

    // postcss 配合
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11']
        })
      ]
    }
  }
})
