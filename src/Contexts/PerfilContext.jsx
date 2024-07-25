import { createContext } from "react";
import { useState } from "react";
import 'firebase/storage';
import { auth } from "../Services/firebase";




export const PerfilContext = createContext();

export const PerfilProvider = ({ children }) => {
    const [name, setName] = useState(auth.currentUser.displayName);




    return (
        <PerfilContext.Provider value={{ name, setName }}>
            {children}
        </PerfilContext.Provider>
    )

}