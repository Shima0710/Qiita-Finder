# Qiita Finder

## 概要
Qiita Finderは、Qiitaの記事をキーワードで検索し、新着順、関連順、いいね順でソートして表示することができるシングルページアプリケーションです。

## デモ
[Qiita Finderデモ](https://shima0710.github.io/EC/index.html)

## 使用技術
- HTML
- CSS
- JavaScript (Vue.js 3, Axios, Lodash)

## ファイル構成
.
├── index.html
├── css
│ └── main.css
└── js
└── main.js

## インストールと使用方法

### 必要条件
- Node.js (version 12以降)

### インストール
1. リポジトリをクローンします。
   ```sh
   git clone https://github.com/Shima7010/qiita-finder.git
2.ディレクトリに移動します。
cd qiita-finder

### 使用方法
1.ローカルサーバーを起動します。
npx http-server

2.ブラウザで以下のURLにアクセスします。
http://localhost:8080

### プロジェクトの詳細
HTML (index.html)
Qiita Finderの基本構造を提供し、Vue.jsとAxiosを使用してデータを動的に取得します。
CSS (main.css)
レスポンシブでモダンなデザインを提供し、Qiita Finderの見た目を整えます。
JavaScript (main.js)
Vue.jsを使用してアプリケーションのロジックを実装し、Axiosを使用してQiita APIからデータを取得します。
### 機能
キーワード検索
新着順、関連順、いいね順でのソート
Qiitaの記事のリスト表示
### 今後の予定
ページネーション機能の追加
検索履歴の保存
ダークモードの実装

