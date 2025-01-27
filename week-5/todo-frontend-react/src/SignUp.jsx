import { useState } from "react"
import axios from "axios"


const SignUp = ()=> {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const inpStyle = {padding:4, margin:4, width:200};


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
        } catch (error) {
            console.log(error);
            
        }
    }

   
    return(
        <div style={{backgroundColor:"lightgray", padding:20, width:220, borderRadius:10,  margin:10}}>
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

        </div>
    )
}

export default SignUp;