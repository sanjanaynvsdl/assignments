import React, { useState } from 'react';
import "../myApp.css"

const PetAdoptionForm = ({setSubmissions, submissions}) => {
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [breed, setBreed] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhoneNum]= useState("");
  const [error, setError]= useState({});

  

  const validateErrors = ()=> {
    let newErrors = {};

    if (petName.length < 3) newErrors.petName = "Pet name must be at least 3 characters long!";
    if (breed.length < 3) newErrors.breed = "Breed name must be at least 3 characters long!";
    if (name.length < 3) newErrors.name = "Your name must be at least 3 characters long!";
    if (!valid(email)) newErrors.email = "Invalid email format!";
    if (phone.length !== 10) newErrors.phone = "Phone number must be 10 digits!";
  
    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  }
  const formStyles = {
    backgroundColor: "rgba(173, 216, 200, 0.6)",
    padding:50,
    margin:100,
    marginLeft:50,
    marginRight:100,
    fontSize:'larger',
    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-start"

  }
  function valid(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  const handleSubmit = (event)=> {
    event.preventDefault();
    if(!validateErrors()) return;
    console.log(`This is the petName ${petName}`);
    console.log(`This is the petType ${petType}`);
    console.log(`This is the breed of it ${breed}`);
    console.log(`This is the name ${name}`);
    console.log(`This is the phone number of person ${phone}`);
    console.log(`This is the email of person ${email}`);

    const newEntry = {
      petName:petName,
      petType:petType,
      breed:breed,
      name:name,
      phone:phone,
      email:email
    }

    setSubmissions(prev => [...prev,newEntry ])
    
    setPetName("");
    setPetType("");
    setBreed("");
    setName("");
    setEmail("");
    setPhoneNum("");
    
    setTimeout(() => {
      setError({});
    }, 6000); 
  }

  console.log(submissions);
  console.log(error);

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <h3>Fill the form for pet adoption</h3>
        <label htmlFor="petName">Pet Name</label>

        <input 
          value={petName}
          id="petName"
          type='text'
          onChange={(e)=> setPetName(e.target.value)}
        />
        {error.petName && <div className="error">{error.petName}</div>}
        <label htmlFor="PetType">Pet Type</label>

        <select  value = {petType} onChange={(e)=> setPetType(e.target.value)}>
        <option value="" disabled>Select a Pet Type</option>
          <option value="Cat">Cat</option>
          <option value="Dog">Dog</option>
          <option value="Rabbit">Rabbit</option>
        </select>

        <label htmlFor="breed">Breed</label>
        <input
          value={breed}
          type='text'
          id="breed"
          onChange={(e)=> setBreed(e.target.value)}
        />

        {error.breed && <div className='error'>{error.breed}</div>}

        <label htmlFor="name">Name</label>
          <input
            value={name}
            type='text'
            id="name"
            onChange={(e)=> setName(e.target.value)}
          />
        {error.name && <div className='error'>{error.name}</div>}



        <label htmlFor="Email">Email</label>
          <input
            value={email}
            type='text'
            id="Email"
            onChange={(e)=> setEmail(e.target.value)}
          />
        {error.email && <div className='error'>{error.email}</div>}


        <label htmlFor="Phone">Phone No.</label>
            <input
              value={phone}
              type='text'
              id="Phone"
              onChange={(e)=> setPhoneNum(e.target.value)}
            />
        {error.phone && <div className='error'>{error.phone}</div>}
          <input type='Submit' className='inputSub'/>
        

      </form>

      
              
    </div>
  )
}

export default PetAdoptionForm