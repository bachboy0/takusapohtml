# Takusapo HTML

Takusapo HTML は、たくサポ（仮）向けの静的サイト（HTML/CSS/JS）を管理するリポジトリです。プロジェクトの概要、使い方、開発者向け情報をこの README にまとめています。

## 特徴

- シンプルな静的構成（HTML/CSS/JavaScript）
- 依存関係を最小限にし、軽量で高速
- GitHub Pages 等でのホスティングに適した構成

## デモ / 公開 URL

- 公開先（例）: https://takusapohtml.pages.dev/

## リポジトリ構成

```
.
├── index.html
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
├── pages/
│   └── *.html
└── README.md
```

- `index.html`: トップページ
- `assets/css`: スタイル（CSS）
- `assets/js`: スクリプト（JavaScript）
- `assets/images`: 画像
- `pages/`: 下層ページ

※ 実際の構成に合わせて編集してください。

## 動作環境

- ブラウザ: 最新版の Chrome / Firefox / Safari / Edge を推奨
- サーバ: 静的配信で動作（GitHub Pages など）

## セットアップ

ローカルで確認する場合は、任意の静的サーバを使用します。

### 1) 簡易ローカルサーバ（Python）

```bash
# ルートディレクトリで実行
python3 -m http.server 8080
# http://localhost:8080 をブラウザで開く
```

### 2) Node.js の `serve` を使用

```bash
npm install -g serve
serve .
```

## 開発ルール

- HTML/CSS/JS は整形してからコミット（例: Prettier）
- 画像は最適化（圧縮）して追加
- コミットメッセージはわかりやすく（例: feat:, fix:, docs:, style:, refactor:, chore:）

### 推奨ツール（任意）

- Prettier（整形）
- ESLint（JS の静的解析）
- Stylelint（CSS の静的解析）

## ブランチ運用

- `main`: 安定版（公開用）
- `feature/*`: 機能追加
- `fix/*`: バグ修正

PR マージ前にローカル確認を行ってください。

## ライセンス

- ライセンス: MIT

## 作者 / コンタクト

- 作者: bachboy0
- 問い合わせ: GitHub Issues または（任意の連絡先）

## 今後の予定（例）

- レスポンシブ対応の強化
- コンポーネント化（共通ヘッダー/フッターの分離）
- 画像最適化の自動化
- GitHub Pages への自動デプロイ（Actions）
