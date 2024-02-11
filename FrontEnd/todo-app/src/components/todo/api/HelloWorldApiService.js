import { apiCLient } from "./ApiClient";

// export function retrieveHelloWorldBean(){
//     return axios.get('http://localhost:8080/hello-world-bean')
// }

export const retrieveHelloWorldBean = () => apiCLient.get('/hello-world-bean')
export const retrieveHelloPathVariable = (username, token) => apiCLient.get(`/hello-world/path-variable/${username}`,
    // {
    //     headers: {
    //         Authorization: token
    //     }
    // }
    
    )
