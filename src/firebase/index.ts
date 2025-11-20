'use client';

import { firebaseConfig as devFirebaseConfig } from '@/firebase/config';
import { initializeApp, getApps, getApp, FirebaseApp, FirebaseOptions } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

// IMPORTANT: DO NOT MODIFY THIS FUNCTION
export function initializeFirebase() {
  if (getApps().length) {
    return getSdks(getApp());
  }

  // This logic is designed to work with multiple deployment environments.
  // 1. Firebase App Hosting: It automatically provides environment variables, and `initializeApp()` works without args.
  // 2. Vercel/Netlify: It relies on manually set `NEXT_PUBLIC_` environment variables.
  // 3. Local Development: It falls back to the `firebaseConfig` object in `src/firebase/config.ts`.

  let firebaseApp: FirebaseApp;

  // Try to initialize from App Hosting's automatic environment variables first.
  try {
    // The `FIREBASE_CONFIG` env var is a JSON string set by App Hosting.
    if (process.env.FIREBASE_CONFIG) {
      console.log("Initializing Firebase with App Hosting config.");
      firebaseApp = initializeApp();
      return getSdks(firebaseApp);
    }
  } catch (e) {
     console.warn('Could not initialize via App Hosting automatic config.', e);
  }

  // If not on App Hosting, try to build config from Vercel/Netlify-style environment variables.
  const envConfig: FirebaseOptions = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  };

  // Check if all necessary Vercel/Netlify env vars are present
  if (envConfig.apiKey && envConfig.projectId && envConfig.appId) {
    console.log("Initializing Firebase with NEXT_PUBLIC environment variables.");
    firebaseApp = initializeApp(envConfig);
  } else {
    // Fallback to the local development config file.
    console.log("Initializing Firebase with local dev config.");
    firebaseApp = initializeApp(devFirebaseConfig);
  }
  
  return getSdks(firebaseApp);
}

export function getSdks(firebaseApp: FirebaseApp) {
  return {
    firebaseApp,
    auth: getAuth(firebaseApp),
    firestore: getFirestore(firebaseApp)
  };
}

export * from './provider';
export * from './client-provider';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
export * from './non-blocking-updates';
export * from './errors';
export * from './error-emitter';
