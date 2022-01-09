import * as functions from 'firebase-functions'
import * as express from 'express'

const app = express()
app.get("/", (req, res) => res.status(200).send('Hey there!'))
exports.app = functions.https.onRequest(app)

// CREATE
// 予約情報の作成

// READ
// 予約情報の追加

// UPDATE
// 予約情報の更新

// DELETE
// 予約情報の削除
