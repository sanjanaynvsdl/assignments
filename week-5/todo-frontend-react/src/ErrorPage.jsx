import { Link } from "react-router-dom"

const ErrorPage = ()=> {
    return(
        <div>
            No data found on this URL! PLease go back home
            <button onClick={<Link path="/"></Link>}>Home</button>
        </div>
    )
}

export default ErrorPage;