
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword,
     getAuth, 
     signInWithEmailAndPassword, 
     signOut} from "firebase/auth";

import {
     addDoc,
    collection,
    getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCduhchLSTO2LZsFlaXu6gSHwUaHUNs8w8",
  authDomain: "netflix-clone-a5a55.firebaseapp.com",
  projectId: "netflix-clone-a5a55",
  storageBucket: "netflix-clone-a5a55.firebasestorage.app",
  messagingSenderId: "562120484015",
  appId: "1:562120484015:web:6dc3a8949a86911bfca05a"
};


const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
const db =getFirestore(app);

const signUp = async(name,email,password)=>{
    try{
        const res =await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,
            authProvider: "loacal",
            email
        }) 

    }
    catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));

    }

}

const login = async (email,password)=>{
    try{
        await signInWithEmailAndPassword(auth,email,password);
    }
    catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));

    }

}


const logout =()=>{
    signOut(auth);
}

export {auth,db,login,signUp,logout};
