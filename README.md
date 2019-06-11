## AutoPushWebpackPlugin

- 打包完成后自动推动到指定分支

- 仅支持 `git ssh` 连接 请确保有推送权限

- 默认分支为 `dist`

- 请添加 `.gitignore` 忽略 `.auto_push_dir` 目录

- 支持 Webapck 4.x



- 安装

```bash
  # use npm
  npm install auto-push-webpack-plugin
  # or yarn
  yarn add auto-push-webpack-plugin
```



- 使用（在TS中）

```ts
  // webpack configure
  const webpackConfigure: webpack.Configure = {
    plugins: [
      // ... other plugins
      new AutoPushWebpackPlugin({
        // is required
        repo: 'git@github.com:heyikang/auto-push-webpack-plugin.git',
        branch: 'dist' // default value dist
        sleep: 2000, // default value 2000 type is number
      })
    ]
  }
```

- 使用（在JS中）

```js
  // webpack configure
  module.exports = {
    plugins: [
      // ... other plugins
      new AutoPushWebpackPlugin({
        // is required
        repo: 'git@github.com:heyikang/auto-push-webpack-plugin.git',
        branch: 'dist' // default value dist
        sleep: 2000, // default value 2000 type is number
      })
    ]
  }
```

# License

MIT



