import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
admin.initializeApp();

const db = admin.firestore()

// type bookingInfo = {
//     date: string;
//     name: string;
//     term1: boolean;
//     term2: boolean;
//     term3: boolean;
//     term4: boolean;
//     term5: boolean;
// }


export const createDocument = functions.https.onRequest(async (req, res) => {
    interface bookingInfo {
        date: string;
        name: string;
        term1: boolean;
        term2: boolean;
        term3: boolean;
        term4: boolean;
        term5: boolean;
        description: string
    }
    let bookingInformation: bookingInfo = JSON.parse(JSON.stringify(req.query));

    await db.collection("test").doc("abc").set(bookingInformation);
    res.status(200).json(bookingInformation).send();
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

// CREATE
// 予約情報の作成

// READ
// 予約情報の追加

// UPDATE
// 予約情報の更新

// DELETE
// 予約情報の削除
