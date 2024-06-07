import { app } from './firebase';

import { signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut} from "firebase/auth";
import { addDoc, collection, getFirestore, query, getDocs, where} from "firebase/firestore";

const auth = getAuth(app)
const db = getFirestore(app)

const loginComEmailESenha = async (email, pwd) => {
    try {
        await signInWithEmailAndPassword(auth, email, pwd)
    }catch(error){
        alert("Email ou senha invalidos")
    }
}

const registrarComEmailESenha = async (name, email, pwd) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, pwd);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email
        })
    }catch(error){

    }
}

const recuperarSenha = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Email para recuperação de senha enviado!");
    }catch(error){
        console.log(error)
    }
}

const logout = () => {
    signOut(auth);
}

export {
    auth,
    loginComEmailESenha,
    registrarComEmailESenha,
    recuperarSenha,
    logout
}