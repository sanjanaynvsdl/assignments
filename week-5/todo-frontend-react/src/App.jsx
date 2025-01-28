import { useEffect, useState } from "react"
import "./App.css"
import SignUp from "./SignUp"
import Layout from "./Layout";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TodoPage from "./TodoPage";
import SignIn from "./SignIn";
import ErrorPage from "./ErrorPage";

function App() {
  const [isToken, setIsToken] = useState(false);
  
  
  function userLoggedIn() {
    const token = localStorage.getItem('token');
    console.log(token);

    if(token) {
      setIsToken(tkn => tkn=true);
    } else {
      setIsToken(tkn => tkn=false);
    }
  }

  useEffect(()=> {
    userLoggedIn();
    
  },[isToken]);

  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        {isToken ? <Route path="/" element={<TodoPage/>}/> : <Route path="/" element={<SignUp/>}/> } 
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

       
      {/* <SignIn/> */}
      

      
    </>
  )
}

export default App


