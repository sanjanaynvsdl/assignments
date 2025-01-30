import React from 'react'
import "../App.css"
import { useNavigate } from 'react-router-dom'

const AppBar = ({username}) => {
  const navigate = useNavigate();
  return (
    <div className='app-bar'>
      <h1>Auth System demo</h1>
      <div className='user-section'>
        <div>Welcome, {username}!</div>
        <button onClick={()=> navigate("/login")}>Logout</button>
      </div>
    </div>
  )
}

export default AppBar