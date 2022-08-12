import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"



const firebaseConfig = {
    apiKey: "AIzaSyCVDnR2AEu7mUpbMe2x73Pi6xw2jf7HLf4",
    authDomain: "dropbox-clone-467f3.firebaseapp.com",
    projectId: "dropbox-clone-467f3",
    storageBucket: "dropbox-clone-467f3.appspot.com",
    messagingSenderId: "337637937106",
    appId: "1:337637937106:web:d52c03cfabb33e933d020b"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export { auth }