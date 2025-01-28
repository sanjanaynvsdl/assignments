
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import TodoComponent from "./TodoComponent";
import Modal from "./Modal"
import { useNavigate } from "react-router-dom";
const TodoPage = ()=> {

const [isModalOpen, setModalOpen]  = useState(false);
const [todos, setTodos] = useState([]);
const navigate = useNavigate();


const handleLogout = ()=> {
    localStorage.clear();
    navigate("/signin")
}

const getTodos = useCallback(async()=>{
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

},[]);

useEffect(()=> {
    getTodos();
  },[getTodos])

    return(
        <div style={
            
            {
                backgroundColor:"#B3B792", 
                borderRadius:10, 
                width:250, 
                padding:20,
                marginTop:30,
                marginLeft: "auto",
                marginRight: "auto"
            }
        }>
            <div>
                <button onClick={()=> handleLogout()}>Logout</button>
                {isModalOpen ? null :<button

                style={{marginLeft: 60}}
                onClick={()=> setModalOpen(true)}
                >Add TODO!</button>}
                
                {isModalOpen && <Modal isOpen ={isModalOpen} onClose={()=> setModalOpen(false)} getTodos={getTodos}/>}

            </div>
            
            
            { todos && todos.map((todo)=> (
                    <TodoComponent
                        key={todo._id}
                        id= {todo._id}
                        title={todo.title}
                        description={todo.description}
                        isDone={todo.isDone}
                        getTodos = {getTodos}
                    />
                ))
            }

      </div>
    )
}

export default TodoPage;