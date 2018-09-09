# react-app-hello-world

*作りな がら学ぶ React入門* 2章 のサンプルアプリです

## 構築メモ

```bash
mkdir hello_react
cd hello_react/
npm init -y
vim package.json

npm install react react-dom
npm install webpack webpack-dev-server --save-dev
npm install babel-cli babel-loader babel-preset-env babel-preset-react --save-dev
npm install eslint eslint-loader eslint-plugin-react --save-dev
npm install css-loader style-loader --save-dev

# 書籍に記載はないけど追加でインストールしたもの
npm install webpack-cli --save-dev
npm install babel-core --save-dev
npm install babel-loader@7 --save-dev

mkdir src public
vim .babelrc
vim .eslintrc.json
vim webpack.config.js
vim public/index.html
vim src/index.js

npm start
```

