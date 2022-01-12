import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

const db = admin.firestore();

interface bookingData {
  date: string;
  name: string;
  term1: boolean;
  term2: boolean;
  term3: boolean;
  term4: boolean;
  term5: boolean;
}

interface termsData {
  tarm1: boolean;
  term2: boolean;
  term3: boolean;
  term4: boolean;
  term5: boolean;
}

// CREATE
// 予約情報の作成
export const createDocument = functions.https.onRequest(async (req, res) => {
  const bookingInformation: bookingData = JSON.parse(JSON.stringify(req.body));

  let name: string = bookingInformation.name;
  let date: string = bookingInformation.date;

  let terms: termsData = {
    tarm1: bookingInformation.term1,
    term2: bookingInformation.term2,
    term3: bookingInformation.term3,
    term4: bookingInformation.term4,
    term5: bookingInformation.term5
  };

  await db.collection(date).doc(name).set(terms)

  res.status(200).send();
});

// UPDATE
// 予約情報の更新
export const updateDocument = functions.https.onRequest(async (req, res) => {
  await db.collection('test').doc('abc').update({ a: 234, b: 345 });
  res.send();
});

// DELETE
// 予約情報の削除
export const deleteDocument = functions.https.onRequest(async (req, res) => {
  const bookingInformation: bookingData = JSON.parse(JSON.stringify(req.body));
  let name: string = bookingInformation.name;
  let date: string = bookingInformation.date;

  await db.collection(date).doc(name).delete();
  res.send();
});

// READ
// 予約情報の読み込み
export const getDocument = functions.https.onRequest(async (req, res) => {
  const data = await (await db.collection('test').doc('abc').get()).data();
  res.send(data);
});
