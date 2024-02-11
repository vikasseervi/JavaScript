import { useParams, Link} from "react-router-dom"
import { useState } from "react"
import { retrieveHelloWorldBean, retrieveHelloPathVariable } from "./api/HelloWorldApiService";
import { useAuth } from "./security/AuthContext";

export default function WelcomeComponent() {

    const {username} = useParams()
    const [message, setMessage] = useState(null);
    const authContext = useAuth()

    function callHelloWorldApi() {
        //axios is a popular framework to call rest api

        retrieveHelloPathVariable('Vikas', authContext.token)
            .then((response) => successfulRespone(response))
            .catch( (error) => errorRespone(error) )
            .finally( () => console.log('cleanUp'))
    }

    function successfulRespone(response){
        setMessage(response.data.message);
    }
    
    function errorRespone(response){
        console.log(response)
    }

    return(
        <div className="Welcome">
            <h1>Welcome {username}</h1>
            <div >
                <Link to='/todos'>Your todos </Link>
            </div>
            <div className="btn btn-success m-3" onClick={callHelloWorldApi}>
                Call Hello World
            </div>
            <div className="test-info">
                {message}
            </div>
        </div>
    )
}