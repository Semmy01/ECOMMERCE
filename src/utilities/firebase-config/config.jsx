import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAXFM_1Ed32NKaDaJm15kpAUdVHQIM8nro",
  authDomain: "e-commerce-project-5d7e6.firebaseapp.com",
  projectId: "e-commerce-project-5d7e6",
  storageBucket: "e-commerce-project-5d7e6.firebasestorage.app",
  messagingSenderId: "5273119098",
  appId: "1:5273119098:web:ee8a3b83155b0e37740ec3",
  measurementId: "G-VJ5QT8WP67"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)