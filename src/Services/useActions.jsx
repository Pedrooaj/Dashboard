import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "./firebase";
import { toast } from "react-toastify";
const RegisterUser = async ( email, password, name ) => {
    try{
        await createUserWithEmailAndPassword(auth, email, password).then((newUser) => {
            updateProfile(newUser.user, { displayName: name || "Anônimo" })
        })
        toast.success("Usuário criado com sucesso", { position: "bottom-left", autoClose: 2000 })
    }catch(error){
        toast.error("Não foi possível criar o usuário", { position: "bottom-left", autoClose: 2000 })
        throw error
    }
}

const SignInUser = async (email, password) => {
    try{
        await signInWithEmailAndPassword(auth, email, password)
        
    }catch(error){
        throw toast.error("Usuário ou senha inválidos", { position: "bottom-left", autoClose: 2000 })
        
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