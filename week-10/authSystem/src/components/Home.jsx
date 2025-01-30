import React from 'react'
import AppBar from "./AppBar"
import AuthSystem from "./AuthSystem"
import "../Auth.css"

const Home = ({username,isContext,  setIsContext}) => {


  return (
    <div>
      
      <AppBar username ={username}/>
      <div style={{display:'flex', position:'fixed', right:10, top:100}}>
        <input
          style={{}}
          type='checkbox'
          checked={isContext}
          onChange={()=> setIsContext(pre => !pre)}/>
        <p style={{margin:10}}>Use Context API : {isContext ? "Yes" : "NO"}</p>
      </div>
      <AuthSystem />
    </div>
  )
}

export default Home