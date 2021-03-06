# Blenderのインストール・日本語化

Blenderのインストール手順を紹介します。以下に従い、**インストール**と**日本語化**を行ってください。

なお、本ページの画像ではバージョン3.0.1を利用して説明しています。現在リリースされている最新版は<blenderVersion />であり、以下の説明とは一部ファイル名等が異なりますが、大まかな流れは同じです。

[[TOC]]

## インストール手順

### Windowsでの手順

1. <https://www.blender.org/download/>にアクセスし、「Download Blender <blenderVersion />」のボタンをクリックして<code>blender-<blenderVersion />-windows64.msi</code>(バージョンによってファイル名が変わります)を適当な場所にダウンロードしてください。ダウンロード場所はデスクトップなどどこでもOK。  
  ![installation_01.png](./imgs/installation_01.png)
2. ダウンロードした<code>blender-<blenderVersion />-windows64.msi</code>をダブルクリックしてインストールを開始します。以下のウィンドウが立ち上がるので"Next"をクリック。  
  ![installation_02.png](./imgs/installation_02.png)
3. 使用許諾契約が表示されます。同意しないとBlenderが使えないのでチェックボックスにチェックを入れて"Next"をクリック。  
  ![installation_03.png](./imgs/installation_03.png)
4. Custom Setupが表示されます。インストール内容のカスタムは不要なのでウンドウ中央に表示されるツリー部分は触らないでください。誤クリック等で設定が変わってしまったら下の"Reset"をクリック。デフォルトでは<code>C:\Program Files\Blender Foundation\Blender\\<blenderVersion is-short="true"/></code>にインストールされます。  
    ![installation_04.png](./imgs/installation_04.png)
    :::tip
    インストール場所を変えたい場合は画像内点線で囲った"Browse..."をクリックしてインストールしたいフォルダを選択してください。インストールには約550MBの空き容量が必要です。インストール場所の設定をしたら"Next"をクリック。
    :::
5. 以下の画像が表示されたらインストール準備は完了。"Install"をクリックするとインストールが開始されます。  
  ![installation_05.png](./imgs/installation_05.png)
6. ユーザーアカウント制御が表示されるので"はい"をクリック。  
  ![installation_06.png](./imgs/installation_06.png)
7. インストールが進行します。数分で完了します。  
  ![installation_07.png](./imgs/installation_07.png)
8. 下の画面が表示されたらインストール完了です。"Finish"をクリックしてウィザードを閉じてください。  
  ![installation_08.png](./imgs/installation_08.png)
9. デスクトップにBlenderのショートカットが作られているはず。ダブルクリックでBlenderを起動できます。  
  ![installation_09.png](./imgs/installation_09.png)

### Macでの手順

1. <https://www.blender.org/download/>にアクセスし、「Download Blender <blenderVersion />」のボタンをクリックして<code>blender-<blenderVersion />-macos-x64.dmg</code>(バージョンによってファイル名が変わります)を適当な場所にダウンロードしてください。ダウンロード場所はデスクトップなどどこでもOK。  
  ![installation_01.png](./imgs/installation_mac_01.png)
2. ダウンロードした<code>blender-<blenderVersion />-macos-x64.dmg</code>をダブルクリックしてインストールを開始します。以下のウィンドウが立ち上がるので"Blender"を"アプリケーション"フォルダにドラッグアンドドロップ。  
  ![installation_02.png](./imgs/installation_mac_02.png)
3. "アプリケーション"内の"Blender"をダブルクリックしてBlenderを起動できます。初回起動時は以下のウィンドウが表示されますが、"開く"を押しましょう。  
  ![installation_03.png](./imgs/installation_mac_03.png)

## 日本語化手順

必須の操作ではありませんが、初心者の方は日本語化することをおすすめします。

1. インストールしたBlenderを起動してください。デフォルトではBlenderを起動すると以下のような画面になります。中央に出ているウインドウは**スプラッシュ画面**です。**スプラッシュ画面の外側の領域をクリックしてスプラッシュ画面を消してください。**  
    :::warning
    最初に起動した場合はスプラッシュ画面からも日本語化設定が可能です。が、今回はより詳細な設定を行うためここでの設定は無視します。
    :::
    ![installation_10.png](./imgs/installation_10.png)  
    ↓Quick Setupのデフォルト設定 どこも変更しないようにしましょう↓  
    ![installation_10_1.png](./imgs/installation_10_1.png)
2. 左上の"Edit"をクリックしてドロップダウンメニューを表示してください。最下部にある"Preferences..."をクリックすると設定ウィンドウを開くことができます。  
  ![installation_12.png](./imgs/installation_12.png)
3. Blenderの設定ウィンドウです。左列で設定のカテゴリを選択できます。言語設定は一番上の"Interface"内に存在するので"Interface"をクリックしてください。  
  ![installation_13.png](./imgs/installation_13.png)
4. "Translation"内の"Language"の右にあるメニューをクリックして言語一覧から"Japanese(日本語)"を選択してください。  
  ![installation_14.png](./imgs/installation_14.png)
5. **重要** 日本語の選択後、すぐ下の"影響"欄の3つのチェックボックスを確認しましょう。  
   - "ツールチップ"にチェックを入れると、各種UI要素上にマウスカーソルを重ねた時に表示される解説が翻訳されます(**チェック推奨**)
   - "インターフェイス"にチェックを入れるとすべてのラベルが翻訳されます(**チェック推奨**、英語の資料を見ながら制作するとき等はチェックを外すと良い)
   - **重要** "新規データ"にチェックを入れると新しく追加したデータブロックの名前が翻訳されます。**チェックを付けないでください**。(Quick Setupから言語を変更すると新規データに勝手にチェックが入ってしまいます)

    以下の画像のようになっていれば大丈夫です。  
    ![installation_15.png](./imgs/installation_15.png)

    :::warning
    "新規データ"にチェックを付けてしまうと、新しく追加したオブジェクト、マテリアル、シェイプキー、UVマップ、頂点グループ等々がすべて日本語名で生成されてしまいます。日本語データ、つまり2バイト文字を含むデータはエラーやトラブルの原因になる可能性が非常に高いので絶対にチェックを付けないようにしましょう。オブジェクト名などは自分で変更することが可能ですが、その際にも日本語の入力はしないようにしましょう。
    :::

これでBlenderの日本語化は完了です。設定ウィンドウは閉じてOKです。
