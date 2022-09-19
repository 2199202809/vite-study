module.exports = {
  // 运行环境
  "env": {
    // 启用浏览器环境，浏览器环境全局变量（window）就会同时启用
    "browser": true,
    "es2021": true
  },
  // extends 相当于继承另外一份 ESLint 配置，可以配置为一个字符串，也可以配置成一个字符串数组。主要分如下 3 种情况:
  "extends": [
    // 1. 从 ESLint 本身继承 
    "eslint:recommended",
    // 2. 从类似 eslint-config-xxx 的 npm 包继承；
    "prettier",
    // 3. 从 ESLint 插件继承。
    // 格式一般为: `plugin:${pluginName}/${configName}`
    "plugin:prettier/recommended",
    "plugin:vue/essential",
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parserOptions": {
    // latest: 启用最新的 ES 语法。
    "ecmaVersion": "latest",
    // 解析器 
    // ESLint 底层默认使用 Espree来进行 AST 解析，这个解析器目前已经基于 Acron 来实现,
    // 虽然说 Acron 目前能够解析绝大多数的 ECMAScript 规范的语法，但还是不支持 TypeScript,
    // 因此需要引入其他的解析器完成 TS 的解析。
    "parser": "@typescript-eslint/parser",
    // 默认为script，如果使用 ES Module 则应设置为module
    "sourceType": "module",
  },
  // 我们可以通过添加 ESLint 插件来增加一些特定的规则
  "plugins": [
    "vue",
    // 添加 TS 规则，可省略`eslint-plugin`
    "@typescript-eslint",
    "prettier"
  ],
  "rules": {
    /**
     * off 或 0: 表示关闭规则。
     * warn 或 1: 表示开启规则，不过违背规则后只抛出 warning，而不会导致程序退出。
     * error 或 2: 表示开启规则，不过违背规则后抛出 error，程序会退出。
     */
    "prettier/prettier": "error",
  }
}
