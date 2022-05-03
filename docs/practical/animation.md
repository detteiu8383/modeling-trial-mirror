# アニメーションの作成

ここまでで、"立体物の用意"は完了しました。次に、このモデルを動かせるようにしていきましょう。

:::training

## スケルトンの追加

まず、モデルを動かすための骨格である、スケルトンの追加を行います。

**オブジェクトモードに戻り**、"追加"→"**アーマチュア**"を選択してください(Blenderではスケルトンのことをアーマチュアと呼びます)。

![アーマチュアの追加メニュー](./imgs/animation_add_armature.png)

![アーマチュアの追加結果](./imgs/animation_armature_added.png)

座学スライドで見せたような"ボーン"が追加されました。

このままではメッシュに隠れて見づらいので、ボーンが常に最前面に表示されるよう設定します。オブジェクトモードで追加したアーマチュアを選択し、プロパティパネルの棒人間マークを選択してください。これがアーマチュアの設定パネルです。この中の"ビューポート表示"の"最前面"にチェックを入れてください。すると、ボーンが常に最前面に表示されるようになります。

![アーマチュアの最前面表示設定](./imgs/animation_armature_show_in_front.png)

アーマチュアを選択して、アーマチュアの**編集モードに切り替え**ましょう。メッシュの編集モードと同様に、ボーンを操作することができます。下図のように、体の中心にボーンを移動させてください。

![ボーンを体の中央に移動させた図](./imgs/animation_edit_armature_00.png)

![ボーンを体の中央に移動させた図(側面)](./imgs/animation_edit_armature_01.png)

さらに、手足や頭の変形のためにボーンを追加します。アーマチュアの編集モードになっていることを確認し、体中央のボーンの先端のジョイント(球の部分)を選択してください。

この状態で左のツール一覧から**押し出し**ツールを選択します。

![ボーンの押し出しツール](./imgs/tool_extrude_armature.png)

すると、メッシュの編集時の押し出しツールと同じマニピュレータが出てきます。

![押し出しツールのマニピュレータ](./imgs/animation_edit_armature_02.png)

メッシュの時と同様に、白い円をドラッグすることで新たなボーンを作成することができます。これを使って、まず背骨先端から肩に向かって伸びるボーンを作成しましょう。

![肩ボーンの追加結果](./imgs/animation_edit_armature_03.png)

次に、肩からボーンを押し出して、腕の中心をとおる位置にボーンを追加しましょう。

![腕ボーンの追加結果](./imgs/animation_edit_armature_04.png)

これを繰り返し、体中心のボーンから押し出して作ったボーンで両手足と頭の位置にボーンを設置してください。

![アーマチュアの設定例](./imgs/animation_edit_armature_05.png)

↑こんな感じになっていればOK

## スキンウェイトの設定

次に、スキンウェイトの設定を行います。今回は自動でウェイト調整してくれる機能を用います。

まずオブジェクトモードに戻り、モデルのメッシュだけを選択してください。

![メッシュのみを選択した時の図](./imgs/animation_skinning_00.png)

次に、**メッシュを選択したまま**、<kbd>shift</kbd>+左クリックでアーマチュアも選択してください。下図のようにアーマチュアがオレンジ、メッシュが濃いオレンジになっていればOK。

![メッシュ、アーマチュアの順に選択した時の図](./imgs/animation_skinning_01.png)

この状態で左上のメニューから"オブジェクト"→"ペアレント"→"自動のウェイトで"を選択してください。これにより、メッシュがアーマチュアに追従する用設定されます。

![メッシュとアーマチュアを自動のウェイトで親子関係設定](./imgs/animation_skinning_02.png)

## ポーズ作成

モデルとアーマチュアを結びつけることができたので、次にポーズを設定します。
オブジェクトモードで**アーマチュアを選択し**、**ポーズモード**に切り替えます。

![ポーズモードの選択](./imgs/animation_edit_pose_00.png)

この状態でボーンの移動や回転をすると、モデルを変形させることができます。

![ポーズ変形の例](./imgs/posing_optimize.gif)

![ポーズ変形の例](./imgs/animation_edit_pose_01.png)

変形をリセットしたい場合、リセットしたいボーンを選択した状態で"ポーズ"→"トランスフォームをクリア"から、位置や回転をリセットすることができます。

![ポーズのリセット方法](./imgs/animation_reset_pose.png)

## キーフレームの作成

ここからは、実際にアニメーションを作成していきます。

まず、キーフレームを作成するために**タイムライン**パネルを広げます。タイムラインパネルは画面下部に存在します。ビューポートとの境界線にマウスを重ね、矢印が出たらドラッグして領域を広げることができます。

![タイムラインパネルの拡張](./imgs/animation_expand_timeline.png)

![タイムラインパネル](./imgs/animation_timeline.png)

これでキーフレームを作成する準備ができました。
まず、**タイムラインの青いバーを0フレーム目に合わせてください**。この青いバーは現在選択しているフレームを表しています。

![現在フレームを0フレーム目に移動](./imgs/animation_reset_timeline_bar.png)

これが「今から0フレーム目を編集するよ」という印です。

**この状態(0フレーム目)で**アーマチュアの**ポーズモード**に移り、自由にポーズを作ってください。

ポーズができたらボーンを**全選択**(<kbd>A</kbd>)し、左上のメニューから"ポーズ"→"アニメーション"→"キーフレームを挿入..."を選択して**キーフレームの挿入**を行います。  
(ショートカットキーとして、**<kbd>I</kbd>を押してキーフレームの挿入**を行うこともできます。)

![キーフレームの追加](./imgs/animation_add_keyframe.png)

キーフレームの挿入を選択すると、"キーフレーム挿入メニュー"というメニューが表示されます。これは、選択したアイテムのどの要素をキーフレームとして登録するかを選ぶメニューです。

![追加項目の選択](./imgs/animation_add_keyframe_menu.png)

メニューの"位置・回転・スケール"を選択すると、選択したボーンの位置・回転・スケールがキーフレームとして0フレーム目に挿入されます。

キーフレームが挿入された印として、タイムラインに黄色のひし形が表示されます。

![キーフレームマーカー](./imgs/animation_keyframe_marker.png)

タイムラインのバーを動かして別のフレームに移動→そのフレームでのポーズを設定→...
を繰り返すことでアニメーションを作成していきます。自分の好きなフレームで、好きなポーズをキーフレームとして設定してみましょう。

## アニメーションの長さの設定

プロパティパネルの**出力プロパティ**で、出力の設定をすることができます。プリンターのようなアイコンで示されています。

アニメーションの秒数は、"フレーム範囲"内の終了フレームの指定により変更できます。1秒間に24フレーム用いるので、5秒の動画にしたい場合は24×5=120フレームに設定してください。今回私は1秒間の短いループ動画にしたいので、終了を24に設定しました。

![使用フレームの設定](./imgs/animation_frame_settings.png)

例えば、0フレーム目で片腕を上げ、12フレーム目で腕を下げ、24フレーム目にまた腕を上げるポーズを取らせる(3つのキーフレームを挿入する)ことで、手を振るアニメーションができます。

![手を振るアニメーションの例](./imgs/swing_optimize.gif)

![キーフレームマーカーの例](./imgs/animation_keyframe_example.png)

:::