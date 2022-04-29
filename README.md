# 新歓モデリング体験会資料

新刊モデリング体験会資料のリポジトリ  。
体験会資料URL:<https://3d-trial-2022.trap.games/>

powered by [vuepress-next](https://github.com/vuepress/vuepress-next)

```bash
npm install

# Serves VuePress
npm run dev

# Build VuePress
npm run build
```

## 内容を更新したい場合

この体験会試料は[vuepress-next](https://github.com/vuepress/vuepress-next)を利用して作成しています。詳細は[Document](https://v2.vuepress.vuejs.org/)を参照してください。

### 手元でテストする

詳細：[Getting Started | VuePress](https://v2.vuepress.vuejs.org/guide/getting-started.html#prerequisites)

```bash
// このリポジトリをクローンする
git clone https://git.trap.jp/d_etteiu8383/modeling-trial.git

// クローンしたフォルダに移動する
cd modeling-trial

// サーバーの立ち上げ
npm run dev
```

上記コマンドを実行すると開発サーバーが立ち上がり、<http://localhost:8080>でページを確認することができます。

### ページ内容を書き換える

各ページは[`./docs`](https://git.trap.jp/d_etteiu8383/modeling-trial/src/branch/master/docs)以下のmarkdownファイルから生成されており、これらを変更することで各ページを変更することができます。

### ページを追加/削除する

詳細：[Page | VuePress](https://v2.vuepress.vuejs.org/guide/page.html#frontmatter)

mdファイルを追加すればページが勝手に生えます。サイドバーに表示したい場合は[`docs/.vuepress/config.ts`](https://git.trap.jp/d_etteiu8383/modeling-trial/src/branch/master/docs/.vuepress/config.ts)の`themeConfig`を編集する必要があります。

サイドバーの編集：[Config #sidebar | VuePress](https://v2.vuepress.vuejs.org/reference/default-theme/config.html#sidebar)
