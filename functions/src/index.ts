import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

const db = admin.firestore();

interface bookingData {
  salonName: string;
  date: string;
  name: string;
  term1: boolean;
  term2: boolean;
  term3: boolean;
  term4: boolean;
  term5: boolean;
}

interface termsData {
  [term: string]: string;
}

// CREATE
// 予約情報の作成
export const createDocument = functions.https.onRequest(async (req, res) => {
  const bookingInformation: bookingData = JSON.parse(JSON.stringify(req.body));

  let salonName: string = bookingInformation.salonName;
  let name: string = bookingInformation.name;
  let date: string = bookingInformation.date;

  let termsData: termsData = {};

  let term1toBeReceived: boolean = bookingInformation.term1;
  let term2toBeReceived: boolean = bookingInformation.term2;
  let term3toBeReceived: boolean = bookingInformation.term3;
  let term4toBeReceived: boolean = bookingInformation.term4;
  let term5toBeReceived: boolean = bookingInformation.term5;

  if (term1toBeReceived) {
    termsData['term1'] = name;
  }
  if (term2toBeReceived) {
    termsData['term2'] = name;
  }
  if (term3toBeReceived) {
    termsData['term3'] = name;
  }
  if (term4toBeReceived) {
    termsData['term4'] = name;
  }
  if (term5toBeReceived) {
    termsData['term5'] = name;
  }

  await db.collection(salonName).doc(date).set(termsData);

  res.status(200).send();
});

// DELETE
// 予約情報の削除
export const deleteDocument = functions.https.onRequest(async (req, res) => {
  const bookingInformation: bookingData = JSON.parse(JSON.stringify(req.body));

  let salonName: string = bookingInformation.salonName;
  // let name: string = bookingInformation.name;
  let date: string = bookingInformation.date;

  await db.collection(salonName).doc(date).delete();
  res.send();
});

interface bookingDataToRead {
  salonName: string;
  date: string;
}

// READ
// 予約情報の読み込み
export const getDocument = functions.https.onRequest(async (req, res) => {
  const bookingInformation: bookingDataToRead = JSON.parse(
    JSON.stringify(req.body)
  );
  const salonName = bookingInformation.salonName;
  const date = bookingInformation.date;

  const data = await (await db.collection(salonName).doc(date).get()).data();
  res.send(data);
});
