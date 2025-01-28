import axios from "axios";
import { useState } from "react"
import {Link, useNavigate} from "react-router-dom";

const SignIn = ()=> {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const inpStyle= {padding:4, margin:4, width:200};
    
    async function handleSinIn() {

        const dataToSend = {
            email:email,
            password:password,
        }
        console.log(email, password);
        try {
            
            const response = await axios.post("http://localhost:3000/auth/signin", dataToSend);
            console.log(response.data);
            localStorage.setItem('token', response.data.token);

            if(response.status==200) {
                if(response.status==200) {
                    navigate("/");
                }
            }

        } catch (error) {
            console.log(error);
            console.log(error.response.data.message);
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
           <h2>Sign In to get todo's</h2>
           <div style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
                <input 
                    value={email}
                    placeholder="Email"
                    onChange={(e)=> setEmail(e.target.value)}
                    style={inpStyle}
                />

                <input
                    value={password}
                    placeholder="Password"
                    onChange={(e)=> setPassword(e.target.value)}
                    style={inpStyle}
                />
                <button
                    onClick={()=> handleSinIn()}
                    style={{padding:4, margin:4, width:210}}>
                    Submit
                </button>
                <p>Don't have an acc? <Link to="/signup">Sign-Up</Link></p>

           </div>


        </div>
    )
}

export default SignIn