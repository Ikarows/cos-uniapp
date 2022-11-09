<div align="center">
<p><img width="150" src="https://avatars0.githubusercontent.com/u/25151659?s=460&v=4"></p>

<h1>cos-uniapp</h1>

<p>
   <strong>vue3 + vite3 + ts 打造的 uniapp 模版</strong>
</p>

<p>
  <sub>Made with ❤︎ by
    <a href="https://github.com/Ikarows">Ikarows</a>
  </sub>
</p>

<img src="https://shields.io/badge/node-%3E%3D%2016.0.0-brightgreen">
<img src="https://img.shields.io/badge/vue-3.2.41-brightgreen">
<img src="https://img.shields.io/badge/vite-3.1.8-brightgreen">
<img src="https://img.shields.io/badge/typescript-4.8.3-brightgreen">
<img src="https://img.shields.io/badge/axios-1.1.3-brightgreen">
<img src="https://img.shields.io/badge/pinia-2.0.23-brightgreen">
<br />
<img src="https://img.shields.io/badge/eslint-8.27.0-brightgreen">
<img src="https://img.shields.io/badge/vue_i18n-9.1.9-brightgreen">
</div>

<br>
<br>

## 项目地址

```shell
git clone https://github.com/Ikarows/cos-uniapp.git
```

<br />

## `node` 版本推荐

因为该模板采用目前较新技术栈，所以推荐大家使用 `node` 当前的长期维护版本 `v16`， 大于 `v16.13.1` 即可。
<br />

## 技术栈

- Vue3
- Vite3
- TypeScript
- Axios
- Pinia
- Eslint
- i18h

## 开发

```bash

# install cnpm
npm install cnpm -g --registry=https://registry.npm.taobao.org;

# install dependencies
cnpm i

## 推荐直接放到 Hbuildx 中运行 ##

# strat
npm run dev:app
npm run dev:app-android
npm run dev:app-ios
npm run dev:custom
npm run dev:h5
npm run dev:h5:ssr
npm run dev:mp-alipay
npm run dev:mp-baidu
npm run dev:mp-kuaishou
npm run dev:mp-lark
npm run dev:mp-qq
npm run dev:mp-toutiao
npm run dev:mp-weixin
npm run dev:quickapp-webview
npm run dev:quickapp-webview-huawei
npm run dev:quickapp-webview-union

# build
npm run build:app
npm run build:app-android
npm run build:app-ios
npm run build:custom
npm run build:h5
npm run build:h5:ssr
npm run build:mp-alipay
npm run build:mp-baidu
npm run build:mp-kuaishou
npm run build:mp-lark
npm run build:mp-qq
npm run build:mp-toutiao
npm run build:mp-weixin
npm run build:quickapp-webview
npm run build:quickapp-webview-huawei
npm run build:quickapp-webview-union

# eslint
npm run lint
```

## 项目目录

```bash
├── .hbuilderx         # hbuilderx配置
├── src                # 项目文件夹
│   ├── api            # API接口
│   ├── components     # 公用组件
│   ├── config         # 配置文件
│   │   ├── http.ts    # axios 封装
│   │   └── request.ts # 请求封装(get，post)
│   ├── pages          # 页面目录
│   ├── static         # 资源文件夹
│   │   ├── img        # 图库
│   │   ├── js         # 脚本
│   │   └── css        # 样式（scss, css, less）
│   ├── store          # Pinia 目录
│   ├── utils          # 公用函数目录
│   ├── App.vue        # vue 根文件
│   ├── env.d.ts       
│   ├── main.ts        # vue 入口js
│   ├── manifest.json  # hubildx项目打包配置
│   ├── pages.json     # 路由配置
│   ├── shime-vue.d.ts # 去除qs提示配置
│   └── uni.scss       # 默认样式
│
├── .eslintignore      # eslint忽略文件
├── .eslintrc.js       # eslint配置
├── .gitignore         # git忽略文件
├── .prettierignore    # prettier忽略文件
├── .prettierrc        # prettier风格配置
├── index.html         # 首页入口文件
├── package.json       # 依赖包
├── README.md          # 项目说明
├── tsconfig.json      # ts 配置文件
├── upload.mjs         # 自动化部署
└── vite.config.ts     # vite配置文件
```

## 打包H5自动化部署

- upload.mjs 文件中配置

**例子如下**

```javascript
const serve = {
  dev: {
    // 测试服务器
    host: '', // 服务器的IP地址
    port: '22', // 服务器端口， 一般为 22
    username: '', // 用户名
    password: '', // 密码
    // privateKey: require('fs').readFileSync('D:\\key.ppk'),
    passphrase: 'private_key_password',
    path: '' // 项目部署的服务器目标位置
  },
  pro: {
    // 正式服务器
    host: '', // 服务器的IP地址
    port: '22', // 服务器端口， 一般为 22
    username: '', // 用户名
    password: '', // 密码
    // privateKey: require('fs').readFileSync('D:\\key.ppk'),
    passphrase: 'private_key_password',
    path: '' // 项目部署的服务器目标位置
  }
}
```

- 打包发布到`测试`服务器

```shell
npm run deploy -- dev
```

- 打包发布到`正式`服务器

```shell
npm run deploy -- pro
```
