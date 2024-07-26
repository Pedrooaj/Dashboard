import { createContext, useEffect } from "react";
import { useState } from "react";
import 'firebase/storage';
import { auth } from "../Services/firebase";
import { updateProfile } from "firebase/auth";




export const PerfilContext = createContext();

export const PerfilProvider = ({ children }) => {
    const [name, setName] = useState(auth.currentUser.displayName);
    const [urlImage, seturlImage] = useState(auth.currentUser.photoURL);

    useEffect(() => {
        updateProfile(auth.currentUser, { displayName: name, photoURL: urlImage })

    },[urlImage, name])


    

    return (
        <PerfilContext.Provider value={{ name, setName, urlImage, seturlImage }}>
            {children}
        </PerfilContext.Provider>
    )

}