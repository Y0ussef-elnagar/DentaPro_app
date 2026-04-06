

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC6J0MS_ahtQKPTsh0eKbn7_pg9dPHo6Ls",
  authDomain: "dental-appointments-d6822.firebaseapp.com",
  projectId: "dental-appointments-d6822",
  storageBucket: "dental-appointments-d6822.appspot.com",
  messagingSenderId: "876858416608",
  appId: "1:876858416608:web:218cb59899ab2355281f85",
};

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);