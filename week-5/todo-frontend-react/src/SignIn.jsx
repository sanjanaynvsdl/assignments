import axios from "axios";
import { useState } from "react"

const SignIn = ()=> {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
            localStorage.setItem('token', response.data.token)

        } catch (error) {
            console.log(error);
            console.log(error.response.data.message);
        }
    }


    return(
        <div style={{backgroundColor:"lightgray", padding:20, width:220, borderRadius:10, margin:10}}>
           <h2>Sign In to get todo's</h2>
           <div>
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

           </div>


        </div>
    )
}

export default SignIn