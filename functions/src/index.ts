import * as functions from 'firebase-functions'
import * as express from 'express'
import * as admin from 'firebase-admin'
admin.initializeApp();

const db = admin.firestore()

export const createDocument = functions.https.onRequest(async (req, res) => {
    await db.collection("test").doc("abc").set({a: 123});
    res.send();
});

export const updateDocument = functions.https.onRequest(async (req, res) => {
    await db.collection("test").doc("abc").update({a: 234, b:345});
    res.send();
});

export const deleteDocument = functions.https.onRequest(async (req, res) => {
    await db.collection("test").doc("abc").delete();
    res.send();
});

export const getDocument = functions.https.onRequest(async (req, res) => {
    const data = await (await db.collection("test").doc("abc").get()).data();
    res.send(data);
});

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
