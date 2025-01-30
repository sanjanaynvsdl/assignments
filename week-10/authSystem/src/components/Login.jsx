import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import "../App.css"
import { AssignContext } from '../App';

const Login = ({username,setUsername }) => {

  const navigate = useNavigate();
  // const {username, setUsername, isContext}= useContext(AssignContext);
  
  
  const handleSubmit = (e)=> {
    e.preventDefault();
    console.log(`The username is ${username}`);
    navigate("/home")
  }


  return (
    <div style={{placeItems:"center", marginTop:20}}>
      <h1>Login to the page!</h1>
      <br></br>
      <form className='login-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          
          <input 
            type='text'
            placeholder='Name'
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
          />

          <input 
            type='password'
            placeholder='password'/>

        </div>
        

          <button>Submit</button>

      </form>
    </div>
  )
}

export default Login