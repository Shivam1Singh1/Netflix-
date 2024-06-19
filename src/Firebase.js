import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
    apiKey: "AIzaSyB8QzF7T0FIX72gJsFpawtk749hJvr5ybM",
    authDomain: "netflix-clone-84ccf.firebaseapp.com",
    projectId: "netflix-clone-84ccf",
    storageBucket: "netflix-clone-84ccf.appspot.com",
    messagingSenderId: "228449740245",
    appId: "1:228449740245:web:354c36da3336281516095c",
    measurementId: "G-4V18RBZSJE"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    }
    catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join("  "));
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    }
    catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join("  "));
    }
}



const logout = () => {
    signOut(auth);
}
export { auth, db, login, signup, logout };