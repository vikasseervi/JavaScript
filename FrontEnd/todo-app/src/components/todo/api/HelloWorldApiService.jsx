import axios from "axios"

// export function retrieveHelloWorldBean(){
//     return axios.get('http://localhost:8080/hello-world-bean')
// }

const apiCLient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
)

export const retrieveHelloWorldBean = () => apiCLient.get('/hello-world-bean')
export const retrieveHelloPathVariable = (username) => apiCLient.get(`/hello-world/path-variable/${username}`)