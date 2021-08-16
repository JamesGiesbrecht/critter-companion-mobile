/* eslint-disable @typescript-eslint/restrict-template-expressions */
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

import ENV from 'src/constants/env'

const {
  FIREBASE_API_KEY,
  FIREBASE_PROJECT_ID,
  FIREBASE_DATABASE,
  FIREBASE_SENDER_ID,
  FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID,
} = ENV

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: 'crittercompanion.app',
  databaseURL: `https://${FIREBASE_DATABASE}.firebaseio.com`,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: `${FIREBASE_PROJECT_ID}.appspot.com`,
  messagingSenderId: FIREBASE_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: `G-${FIREBASE_MEASUREMENT_ID}`,
}

firebase.initializeApp(firebaseConfig)

export const firebaseAuth = firebase.auth()
export const firebaseDb = firebase.database()
