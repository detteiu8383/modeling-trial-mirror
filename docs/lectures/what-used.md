# 3DCGは何で作るの？

:::tip 目標
3DCG制作に必要なソフトウェアを知る。
:::

3DCGに必要なモノはいっぱい(モデル、マテリアル、テクスチャ、アニメーション、シェーダー、シーンなど)あるので、各データの編集に適した、さまざまなソフトウェアを相手に作業することになる。

モデリングのためのソフトを**モデラー**、レンダリングのためのソフトを**レンダラー**と呼ぶ。

:::tip
ソフトウェアに関してはWikipediaの[3DCGソフトウェア](https://ja.wikipedia.org/wiki/3DCG%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2)のページがめちゃくちゃ参考になるのでぜひ(というか絶対に)読んでほしい。

- 網羅的に紹介されている
- 頻繁に情報が更新されている
- (日本語版Wikipediaページ長ランキング第9位)
:::

3DCG制作ソフトは統合型ソフトと特化型ソフトに大別される。これらのソフトを適宜使い分けて制作する。

## 統合型ソフト

モデリング、アニメーション、レンダリングなどの**多くの工程をまとめて行える**ソフトウェア。

- これ1つあればそこそこ制作できる
- 初心者におすすめ
- 一つ一つの機能が(特化型ソフトと比較すると)比較的低機能であることが多く、プラグインと呼ばれる拡張機能が必要になることもある

## 特化型ソフト

モデリング、アニメーション、レンダリングなどの各工程**いずれかに特化**したソフト

- 特化している分高性能
- こだわりたい上級者向け
- ソフト間でデータのやり取りが必要になる

:::tip まとめ
各作業工程を一つのソフトでまとめて行えるものもあれば、各工程に特化したソフトも存在する。制作物に合わせて、これらのソフトを適切に選び、組み合わせて制作を進める。
:::

---

以下、具体的なソフトを列挙します。有名なものだけ。

## 統合型ソフトの例

### Blender

[blender.org - Home of the Blender project - Free and Open 3D Creation Software](https://www.blender.org/)

- **無料**
- 大体全部できる
- 動作が比較的軽い
- ユーザーが多い → 解説記事が豊富
- 最近いろんな企業が使うようになった
  - [「やっと3Dツールが紙とペンのような存在になる」エヴァ制作のカラーがBlenderへの移行を進める理由とは？（西田宗千佳） - Engadget 日本版](https://japanese.engadget.com/jp-2019-08-14-blender-khara.html)

:::warning お気持ち
「3DCGを始めてみたい！」って人がいたら@d_etteiu8383なら迷わずBlenderをおすすめします。
まず何より無料である点が強い。「やっぱり3DCG辞める」って時に失うものが何もない。

無料であるにもかかわらず、3DCGの始めから終わりまで最低限これ一つで間に合うのも強い。
:::

### Maya

[Autodesk Maya 2022 | Autodesk 公式](https://www.autodesk.co.jp/products/maya/overview)

- **高性能**
- キャラクターアニメーションに強い
- 映画業界とゲーム業界のスタンダード
- ¥286,000/年
- 利用例：
  - プリキュア
  - ウマ娘
  - プロセカ
  - アイドルマスタースターリットシーズン

:::warning お気持ち
企業のデファクトスタンダードは確かにMAYA。もしあなたがCG系の専門学生であったり、CG系企業への就職を目指しているのであればMAYAを使う練習をしたほうが良いと思います。ただし、趣味程度で3DCGに触れたいのであれば、まずは無償体験版や、学生用無償版で試用することをおすすめします。趣味で始めるには28万円は高すぎですが、業界のスタンダードを試すなら無償版で十分です。実際@d_etteiu8383が初めてモデリングをした際はMAYAの無償版を利用しました(当時はBlenderが使いづらかったという背景もありますが)。
:::

### 3ds Max

[3ds Max 2022 | Autodesk 公式](https://www.autodesk.co.jp/products/3ds-max/overview?source=footer)

- Mayaと同じ会社(Autodesk)
- プラグインが豊富
- ¥286,000/年
- Windows のみ
- 利用例：

### Houdini

[Houdini | 3D Procedural Software for Film, TV & Gamedev | SideFX](https://www.sidefx.com/ja/products/houdini/)

- ノードベース
- エフェクト最強
  - 物理シミュレーション
  - パーティクル
- **プロシージャル**モデリングに強い
- 映画・VFX 向き
  - 群衆シミュレーションなどが得意

### CINEMA 4D

[3Dモデリング、テクスチャリング、ライティング、アニメーション、シミュレーションソフト｜Cinema 4D by Maxon - Maxon](https://www.maxon.net/ja/cinema-4d)

- モーショングラフィックスに強い
- After Effects との連携が強い
- [@ksk_st 加速サトウ](https://twitter.com/ksk_st)氏(AZKi,無頼星れんこの作者)のメインツール

## 特化型ソフトの例(モデラー)

### ZBrush

[Pixologic : ZBrush - The all-in-one-digital sculpting solution](https://pixologic.com/)

- モデラー
- デジタル彫刻ソフト
- **スカルプトモデリング**
  - ポリゴンモデリングは各頂点や面を指定して形作るのに対し、粘土をこねたり削ったりするように形作っていくのがスカルプトモデリングだと思ってもらえれば大丈夫
- 効率良くデティールの細かいモデル作成
- スカルプトモデリングと言えばコレ

### 3D-Coat

[3DCoat | 簡単操作で3Dモデルを作成できる3Dソフトウェア](https://3dcoat.com/jp/)

- モデラー&テクスチャ作成
- スカルプトモデリング
- リトポロジーが得意
- UV展開が得意

### Metasequoia

[metaseq.net | 3Dモデリングソフトウェア「Metasequoia（メタセコイア）」公式サイト](https://www.metaseq.net/jp/)

- モデラー
- 日本生まれ
- 無料版アリ

### Marvelous Designer

[Marvelous Designer](https://www.marvelousdesigner.com/)

- 衣服の作成に特化したモデラー
- 型紙をもとにシミュレーションが行われる

### VRoid Studio

[VRoid Studio](https://vroid.com/studio)

- キャラモデルの制作に特化したモデラー
- 最低限のクオリティのモデルを最短手順で手に入れるならこれ

## 特化型ソフトの例(テクスチャ作成)

### Photoshop

[Adobe Photoshop｜画像編集ソフト 【アドビ公式】](https://www.adobe.com/jp/products/photoshop.html)

- 画像編集ソフト
- テクスチャ作成に使ってる人が多い

### Substance Painter

[3Dアセットにマテリアルやテクスチャをペイントする、3Dデザインソフトウェアの決定版 | Adobe Substance 3D Painter](https://www.adobe.com/jp/products/substance3d-painter.html)

- テクスチャ作成ソフト
- 3Dモデルに直接色塗りしてテクスチャを作る
- 筆で塗るだけではなく、パーティクルで色塗りできる

### Substance Designer

[パラメトリック3Dアセット、モデル、マテリアル、パターンを制作する、3Dデザインソフトウェアの決定版 | Adobe Substance 3D Designer](https://www.adobe.com/jp/products/substance3d-designer.html)

- テクスチャ作成ソフト
- ノードベースでマテリアルを作成

## 特化型ソフトの例(アニメーション作成)

### MikuMikuDance

[Vocaloid Promotion Video Project](https://sites.google.com/view/vpvp/)

- いわゆるMMD
- アニメーションの作成とレンダリングを行うソフト
  - スケルトンとスキンウェイトの設定が終わっているモデルデータが必要(PMD/PMX)
- 日本の3Dキャラアニメーション文化の発展にめちゃくちゃ影響を与えた
- モーションデータやモデルデータが大量にコミュニティにアップされてる

## 特化型ソフトの例(コンポジット、ポストエフェクト)

### Adobe After Effects

[Adobe After Effects | VFXとモーショングラフィックスソフトウェア](https://www.adobe.com/jp/products/aftereffects.html)

- デジタル合成
- モーショングラフィックス
- 映像加工ソフトと言えばこれ

### NUKE

[Nuke、 NukeX、Nuke Studio | VFX ソフトウェア | Foundry](https://www.foundry.com/ja/products/nuke-family/nuke)

- ノードベースのコンポジット
- 無料体験版アリ

## 特化型ソフトの例(ゲームエンジン)

ゲームエンジンも立派な3DCGソフトウェア

### Unity

[Unity Real-Time Development Platform | 3D, 2D VR & AR Engine](https://unity.com/)

- 基本無料
- ゲーム
  - ウマ娘もUnity
- 映像制作にも使われる(魔法使いプリキュア!のエンディング等)
- Vtuberは大体これ
- 利用例：
  - ウマ娘

### Unreal Engine

[Unreal Engine 製品概要 - Unreal Engine](https://www.unrealengine.com/ja/unreal)

- 基本無料
- 高品質なグラフィックが特徴
- Naniteでハイポリモデルもサクサク描画
- Lumenで動的に変化する光の描画
- 利用例：
  - アイドルマスタースターリットシーズン
