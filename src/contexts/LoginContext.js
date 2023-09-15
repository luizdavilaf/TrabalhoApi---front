import { createContext, useState, useContext } from "react";

export const LoginContext = createContext(null);


export const LoginProvider = ({ children }) => {

    const [token, setToken] = useState(null);  
    
    const login = (newToken) => setToken(newToken);

    const logout = () => {setToken(null);};

    return (
        <LoginContext.Provider value={{token,logout,login}}>
            {children}
        </LoginContext.Provider>
    )
}


