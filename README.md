# 项目骨架初始化

- 前端：`client`（Vue 3 + Vite + Pinia + Vue Router）
- 后端：`server`（Node.js + Express + Multer）

## 前端
- 开发：进入 `client` 安装依赖后运行 `npm run dev`
- 入口：`client/index.html`，应用入口 `client/src/main.js`
- 主要页面：`client/src/views/QuotePage.vue`、`client/src/views/OrderConfirmation.vue`

## 后端
- 启动：进入 `server` 安装依赖后运行 `npm start`，默认端口 `3000`
- 路由：`/api/quote/calculate`、`/api/files/upload`、`/api/order/submit`、`/api/order/:id`

## 说明
- 当前为骨架版本，计价逻辑在 `server/utils/priceCalculator.js` 中，后续可替换为正式规则。
