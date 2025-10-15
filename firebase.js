import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'


// Replace with your own environment variables in production
const firebaseConfig = {
apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'REPLACE',
authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'REPLACE',
projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'REPLACE',
storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'REPLACE',
messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || 'REPLACE',
appId: import.meta.env.VITE_FIREBASE_APP_ID || 'REPLACE'
}


const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export default app
