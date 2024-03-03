import { createContext, useState } from "react";

export const LoginContext =  createContext();

export const LoginProvider = ({ children }) => {

    const [username, setUsername] = useState('');

    return (
        <LoginContext.Provider value={{ username, setUsername }}>
            {children}
        </LoginContext.Provider>
    )

}