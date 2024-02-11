import { createContext, useContext, useState } from "react";
import { executeJwtAuthenticationService } from "../api/AuthenticationApiService";
import { apiCLient } from "../api/ApiClient";

// create a Context
export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

//Share the created context with other components
export default function AuthProvider({ children }) {
    
    //Put some state int the context
    const [isAuthenticated, setAuthentication] = useState(false)
    const [username, setUsername] = useState(null)
    const [token, setToken] = useState(null)
    
    // function login(username, password) {
    //     if(username === 'vikas' && password === 'vikas') {
    //         setUsername(username)
    //         setAuthentication(true)
    //         return true;
    //     }
    //     else{
    //         setUsername(null)
    //         setAuthentication(false)
    //         return false;
    //     }
    // }
    
    // async function login(username, password) {

    //     const basicToken = 'Basic ' + window.btoa(username + ":" + password); // should be exactly right

    //     try{
    //         const response = await executeBasicAuthenticationService(basicToken)

    //         if(response.status === 200) {
    //             setUsername(username)
    //             setAuthentication(true)
    //             setToken(basicToken)
    //             apiCLient.interceptors.request.use(
    //                 (config) => {
    //                     config.headers.Authorization = basicToken
    //                     return config
    //                 }
    //             )
    //             return true;
    //         }
    //         else{
    //             logout()
    //             return false;
    //         }
    //     }
    //     catch(error) {
    //         logout()
    //         return false;
    //     }
    // }
    
    
    async function login(username, password) {

        // const basicToken = 'Basic ' + window.btoa(username + ":" + password); // should be exactly right

        try{
            const response = await executeJwtAuthenticationService(username, password)

            if(response.status === 200) {
                const jwtToken = "Bearer " + response.data.token
                setUsername(username)
                setAuthentication(true)
                setToken(jwtToken)
                apiCLient.interceptors.request.use(
                    (config) => {
                        config.headers.Authorization = jwtToken
                        return config
                    }
                )
                return true;
            }
            else{
                logout()
                return false;
            }
        }
        catch(error) {
            logout()
            return false;
        }
    }

    function logout(){
        setAuthentication(false)
        setToken(null)
        setUsername(null)
    }

    return(
        <AuthContext.Provider value={ {isAuthenticated, login, logout, username, token} } >
            {children}
        </AuthContext.Provider>
    )
}