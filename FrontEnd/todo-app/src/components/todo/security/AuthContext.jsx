import { createContext, useContext, useState } from "react";

// create a Context
export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

//Share the created context with other components
export default function AuthProvider({ children }) {
    
    //Put some state int the context
    const [isAuthenticated, setAuthentication] = useState(false)
    
    function login(username, password) {
        if(username === 'vikas' && password === 'vikas') {
            setAuthentication(true)
            return true;
        }
        else{
            setAuthentication(false)
            return false;
        }
    }

    function logout(){
        setAuthentication(false)
    }

    return(
        <AuthContext.Provider value={ {isAuthenticated, login, logout} } >
            {children}
        </AuthContext.Provider>
    )
}