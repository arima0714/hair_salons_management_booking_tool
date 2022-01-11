import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
admin.initializeApp();

const db = admin.firestore()

interface bookingData {
    date: string,
    name: string,
}

// CREATE
// 予約情報の作成
export const createDocument = functions.https.onRequest(async (req, res) => {
    const bookingInformation: bookingData = JSON.parse(JSON.stringify(req.body));

    console.log(bookingInformation)

    let name: string = bookingInformation.name
    console.log(name)
    let date: string = bookingInformation.date
    console.log(date)
});

// UPDATE
// 予約情報の更新
export const updateDocument = functions.https.onRequest(async (req, res) => {
    await db.collection("test").doc("abc").update({a: 234, b:345});
    res.send();
});

// DELETE
// 予約情報の削除
export const deleteDocument = functions.https.onRequest(async (req, res) => {
    await db.collection("test").doc("abc").delete();
    res.send();
});

// READ
// 予約情報の追加
export const getDocument = functions.https.onRequest(async (req, res) => {
    const data = await (await db.collection("test").doc("abc").get()).data();
    res.send(data);
});
