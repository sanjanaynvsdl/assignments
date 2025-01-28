import React, { Component } from 'react'

const AdopterData = ({submissions})=>{
  return(
    <div>
        <table>
          <thead>
            <tr>
              <th>Pet Name</th>
              <th>Pet Type</th>
              <th>Breed</th>
              <th>Adopter Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {submissions && submissions.map((data, index)=>(
              console.log("This is the form data",data),
              <tr key={index}>
                <td>{data.petName}</td>
                <td>{data.petType}</td>
                <td>{data.breed}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
              </tr>
            ))}
          
          </tbody>
        </table>
      </div>

  )
}

export default AdopterData