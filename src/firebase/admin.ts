import * as admin from 'firebase-admin';
import { firebaseConfig } from './config';

// IMPORTANT: This file is for server-side use only.
// Do not import or use this in any client-side components.

let app: admin.app.App;

if (!admin.apps.length) {
  try {
    // Attempt to initialize using Application Default Credentials (ADC)
    // This works in environments like Cloud Run, Cloud Functions, App Engine
    app = admin.initializeApp();
  } catch (e) {
    // Fallback for local development or environments without ADC
    console.warn("Firebase Admin initialization with Application Default Credentials failed, falling back to service account key from environment variable. This is normal for local development.");
    const serviceAccountKey = process.env.FIREBASE_ADMIN_SERVICE_ACCOUNT_KEY;
    if (!serviceAccountKey) {
      throw new Error("FIREBASE_ADMIN_SERVICE_ACCOUNT_KEY environment variable is not set. Cannot initialize Firebase Admin SDK.");
    }
    
    app = admin.initializeApp({
      credential: admin.credential.cert(JSON.parse(serviceAccountKey)),
      databaseURL: `https://${firebaseConfig.projectId}.firebaseio.com`
    });
  }
} else {
  app = admin.app();
}

const firestore = admin.firestore();
const auth = admin.auth();

export function getFirebaseAdmin() {
  return { app, firestore, auth };
}
