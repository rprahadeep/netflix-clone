import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Firestore, getFirestore, addDoc, collection } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

const firebaseKey = import.meta.env.VITE_FIREBASE_KEY


const firebaseConfig = {
  apiKey: firebaseKey,
  authDomain: "netflix-clone-1b5b3.firebaseapp.com",
  projectId: "netflix-clone-1b5b3",
  storageBucket: "netflix-clone-1b5b3.firebasestorage.app",
  messagingSenderId: "400342521505",
  appId: "1:400342521505:web:03a5d7cbefaea286a6c2e0",
  measurementId: "G-8WVCMKNRYR"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (name, email, password)=>{
  try{
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const user = res.user
    await addDoc(collection(db, "user"),{
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    })
  } catch(error) {
    console.log(error)
    toast.error(error.code)
  }
}

const login = async(email, password) => {
  try{
    await signInWithEmailAndPassword(auth, email, password)
  } catch(error){
    console.log(error)
    toast.error(error.code)
  }
}

const logout = () => {
  signOut(auth)
}

export {auth, db, login, logout, signup}