import { useEffect, useState } from "react"
import "./App.css"
import SignUp from "./SignUp"
import TodoComponent from "./TodoComponent"
import SignIn from "./SignIn";
import Modal from "./Modal";
import axios from "axios";

function App() {
  const [isToken, setIsToken] = useState(false);
  const [isModalOpen, setModalOpen]  = useState(false);
  const [todos, setTodos] = useState([]);
  
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
    getTodos();
    
  },[])

  //TODO :This is causing infinte renders
  // useEffect(()=> {
  //   getTodos();
  // },[todos])

  async function getTodos() {
    try {
      const response = await axios.get("http://localhost:3000/todos/", { 
        headers : {
        token:localStorage.getItem('token')
        }
      })

      setTodos(response.data.todos);
    } catch (error) {
      console.log("There was an error in fetching todo's" + error)
      
    }
    console.log(todos);
  }


  return (
    <>
      <h1>This is a TODO- FULL Stack application!</h1>

       {isToken ? null : <SignUp/>} 
      {/* <SignIn/> */}
      
      <div>
        {isModalOpen ? null :<button
          onClick={()=> setModalOpen(true)}
          >Add TODO!</button>}
        
      {isModalOpen && <Modal isOpen ={isModalOpen} onClose={()=> setModalOpen(false)}/>}
      {/* <TodoComponent/> */}

      {todos.map((todo)=> (
        <TodoComponent
          key={todo._id}
          id= {todo._id}
          title={todo.title}
          description={todo.description}
          isDone={todo.isDone}
          fn = {getTodos}
        />
      ))}

      </div>
      
    </>
  )
}

export default App

//Render getTodo's when ever todos array changes
//Things to improve :
//1. Fetch todo's after every update edit update, delete, 
//2. Make changes in current todo's than fetching every time from backend
//3. IMplement Update and loguout functionality,
//4. Make the UI a bit better
