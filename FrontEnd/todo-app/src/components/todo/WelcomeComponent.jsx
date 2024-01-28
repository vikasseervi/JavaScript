import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

export default function WelcomeComponent() {

    const {username} = useParams()

    return(
        <div className="Welcome">
            <h1>Welcome {username}</h1>
            <div >
                <Link to='/todos'>Your todos </Link>
            </div>
        </div>
    )
}