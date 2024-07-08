import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Services/firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isChecked, setIsChecked] = useState(false);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
        })
    }, [])

    const values = {
        user,
        setUser,
        isChecked,
        setIsChecked,
        loading,

    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}