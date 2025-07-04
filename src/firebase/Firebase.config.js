import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getDatabase} from "firebase/database"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDlNmz-QF_00OUuZs8dzlI629kNcLn45rY",
  authDomain: "mernmid2403.firebaseapp.com",
  projectId: "mernmid2403",
  storageBucket: "mernmid2403.firebasestorage.app",
  messagingSenderId: "970496085967",
  appId: "1:970496085967:web:6d4aa2fbd1ac38365a0cba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//todo:for crud operation
export const auth=getAuth(app);
export  const db=getDatabase(app);
export const storage = getStorage(app);


//for crud operation

export default app;
