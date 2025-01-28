import { useState } from "react"
import axios from "axios"
import {Link, useNavigate} from "react-router-dom";


const SignUp = ()=> {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const inpStyle = {padding:4, margin:4, width:200};
    const navigate = useNavigate();


    async function handleSignup() {
        try {
            const datoToSend = {
                name:name,
                email:email,
                password:password
            }
            console.log("Sending req to the backend!")
            const response = await axios.post("http://localhost:3000/auth/signup", datoToSend);

            console.log(response.data);
            if(response.status==200) {
                navigate("/signin");
            }
        } catch (error) {
            console.log(error);
            
        }
    }

   
    return(
        <div style={
            
            {
                backgroundColor:"#B3B792", 
                borderRadius:10, 
                width:250, 
                padding:20,
                marginTop:30,
                marginLeft: "auto",
                marginRight: "auto"
            }
        }>
            <h2>SignUp to add todo!</h2>

            <div style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
                <input 
                    type="text"
                    style={inpStyle}
                    value={name}
                    placeholder="Name"
                    onChange={(e)=> setName(e.target.value)}
                />

                <input
                    type="text"
                    style={inpStyle}
                    value={email}
                    placeholder="Email"
                    onChange={(e)=> setEmail(e.target.value)}
                />

                <input
                    type="password"
                    style={inpStyle}
                    value={password}
                    placeholder="Password"
                    onChange={(e)=> setPassword(e.target.value)}
                />


            </div>
            
            <button 
                style={{padding:4, margin:4, width:210}}
                onClick={()=>handleSignup()}>
                Sign UP
            </button>
            <p>Already have an account?<Link to="/signin">Login</Link></p>
        </div>
    )
}

export default SignUp;