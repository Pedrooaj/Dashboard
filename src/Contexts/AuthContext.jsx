import { createContext, useEffect } from "react";
import { useState } from "react";
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



    return (
        <AuthContext.Provider value={{ user, setUser, isChecked, setIsChecked, loading }}>
            {children}
        </AuthContext.Provider>
    )
}
