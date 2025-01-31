import React from 'react'

const RandomUser = ({dataOfuser}) => {
  console.log("This is userdata " +dataOfuser);

  
  return (
    <div style={{border:' 1px solid black', borderRadius:10, padding:10, placeItems:'center', margin:10}}>
      <h3>Name : {dataOfuser.name.title+" " + dataOfuser.name.first +" "+ dataOfuser.name.last}</h3>
      <img src={dataOfuser.picture.large}/>

      
    </div>
  )
}

export default RandomUser