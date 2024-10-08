import { createContext, useEffect } from "react";
import { useState } from "react";
import { auth } from "../Services/firebase";
import { updateProfile } from "firebase/auth";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isChecked, setIsChecked] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        auth.onAuthStateChanged((usuario) => {
            setUser(usuario);
            setLoading(false);
        })
    }, [])

    useEffect(() => {
        updateProfile(auth.currentUser, {
            displayName: user?.displayName,
            photoURL: user?.photoURL
        })
    },[user])


  

    const values = { user, setUser, isChecked, setIsChecked, loading }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}
