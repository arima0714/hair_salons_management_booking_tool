import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
admin.initializeApp();

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
