import React from 'react'

const AuthSystem = () => {
  
  return (
    <div style={{placeItems:'center', marginTop:100}}>
      <h1>Welcome to the authSystem demo!</h1>
      <br/>
      <p>The demo showcases two approaches to managing authentication state in React :</p>
      <br/>
      <li>State Lifting</li>
      <li>Context API</li>
      <br/>
      <p>Use the toggle above to switch between the two approaches!</p>
      
    </div>
  )
}

export default AuthSystem