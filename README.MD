# react-antd-boilerplate

React + Antd 前端项目模板（支持IE8+）

# Quick Start

## 安装项目

```
npm i（推荐用淘宝NPM："cnpm i"）
```

## 启动项目

```
npm start
```

## 打包项目

```
npm run bundle
```

## 打包并预览

```
npm run build
```

打包代码在 dist 目录


# 目录结构

```javascript
config
|-- build.js                        # 打包预览脚本
|-- ie8-polyfills.js                # IE8兼容包配置
|-- info.js                         # 网站信息
|-- server.js                       # 预览服务器
|-- utils.js                        # 配置工具库
|-- webpack.common.js               # 公共配置
|-- webpack.dev.js                  # 开发配置
|-- webpack.prod.js                 # 生产配置
dist                                # 打包目录
docs                                # 项目文档
node_modules                        
polyfill                            # polyfill打包文件（IE8兼容包）
src                                 # 项目源码
|-- assets                          # 静态资源，包括公用的 css/less/html/images 等
|-- components                      # 公用组件，主要是react组件
|   |-- loading
|   |   |-- index.js
|   |   |-- index.less
|   |   |-- __tests__               # 测试文件
|   |   |   |-- xx.js
|-- entries                         # 入口目录
|   |-- app.html                    # 入口页
|   |-- app.js                      # 入口JS
|-- pages                           # 页面目录
|   |-- page1                       
|   |   |-- index.js                # 页面逻辑
|   |   |-- index.less              # 页面样式
|   |   |-- img                     # 页面图片
|   |   |   |-- xx.png          
|   |   |-- __tests__               # 测试文件
|   |   |   |-- xx.js
|-- routes                          # 页面路由
|-- utils                           # 工具库
tests                               # 其他测试文件
package.json                        
README.MD
```