## AutoPushWebpackPlugin

- 打包完成后自动推动到指定分支

- 仅支持 `git ssh` 连接 请确保有推送权限

- 默认分支为 `dist`



- 使用（在TS中）

```ts
  // webpack configure
  const webpackConfigure: webpack.Configure = {
    plugins: [
      // ... other plugins
      new AutoPushWebpackPlugin({
        repo: 'git@github.com:heyikang/auto-push-webpack-plugin.git',
        branch: 'dist' // default value dist
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
        repo: 'git@github.com:heyikang/auto-push-webpack-plugin.git',
        branch: 'dist' // default value dist
      })
    ]
  }
```

# License

MIT



