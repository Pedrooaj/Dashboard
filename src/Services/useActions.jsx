import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase";
const RegisterUser = async ( email, password) => {
    try{
        await createUserWithEmailAndPassword(auth, email, password)
    }catch(error){
        throw error
    }
}

const SignInUser = async (email, password) => {
    try{
        await signInWithEmailAndPassword(auth, email, password)
        
    }catch(error){
        console.error("Não foi possível fazer login", error);
        throw error
    }
}

const SignOutUser = async () => {
    try{
        await signOut(auth)
    }catch{
        console.error("Não foi possível fazer logout", error)
    }
}

export { RegisterUser, SignInUser, SignOutUser }