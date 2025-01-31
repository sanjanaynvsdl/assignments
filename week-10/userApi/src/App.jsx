import { useEffect, useState } from 'react'
import RandomUser from './components/RandomUser'
import axios from "axios"

function App() {
  const [users, setUsers]=useState([]);
  const [page, setPage]=useState(1);
  const [loading, setIsLoading]=useState(false);

async function fetchUsers() {
  try {
    setIsLoading(true);
    const response = await axios.get(`https://randomuser.me/api/?page=${page}&results=5`);
    console.log(response.data);
    setUsers(prev => [...prev,  ...response.data.results])
  } catch (error) {
    console.log(`There was a error in fetching the user : ${error}`);
  }
  setIsLoading(false);
}

console.log(`This is the current user data `+ users[0]);

useEffect(()=> {
  fetchUsers();
},[page]);

  return (
   <div style={{placeItems:"center"}}>
      <h1>Random Users</h1>
      <button onClick={()=> setPage(pre => pre+1)}>Load more users</button>
        {loading && <h1 style={{backgroundColor:'lavender', padding:10, maring:20, placeItems:'center'}}>Loading!</h1>}
      <div style={{display:'grid', gridTemplateColumns: "repeat(3, 1fr)"}}>
        {users && users.map((user, index)=> (
          <div>
            <RandomUser 
            key={index} 
            dataOfuser={user}
          />
          </div>
          
        ))}

      </div>
   </div>
  )
}

export default App
