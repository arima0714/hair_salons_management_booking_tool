# 理髪店の予約管理

# メソッドとそれぞれの説明

下記の通り

| メソッド | 説明           | 
| -------- | -------------- | 
| CREATE   | 予約情報の作成 | 
| READ     | 予約情報の追加 | 
| UPDATE   | 予約情報の更新 | 
| DELETE   | 予約情報の削除 | 

# DB

Firestoreを用いる。
構成は下記の通り

`/日付/<term>/<name>`


# PlantUML

vscodeのplantuml拡張機能を利用。workspaceを読み込むと設定される。

dockerが必要でサーバーの起動は下記の通り。

`docker run -d -p 8080:8080 plantuml/plantuml-server:jetty`

# FireBase Emulator

## 起動

`npx firebase emulators:start`
