import AuthSystem from './components/AuthSystem';
import './Auth.css';
import { createContext, useState } from 'react';
import Login from "./components/Login"
import Layout from "./components/Laytout";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";


 
  

  export const AssignContext = createContext();

function App() {
  const [username, setUsername]=useState("");
  const [isContext, setIsContext] = useState(true);
  // console.log(username);


  return (
    <AssignContext.Provider value={{
      username:username,
      isContext:isContext,
      setUsername:setUsername,
      setIsContext:setIsContext
    }}>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/login' element={<Login username = {username} setUsername = {setUsername}/>}/>
            <Route path='/home' element={<Home username={username} isContext={isContext} setIsContext = {setIsContext} />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </AssignContext.Provider>
  )
}

export default App;

//DId not properly implement botht the functionalitties in sink
//But, Completed implementing using stateLifting
//And understood about the Context API