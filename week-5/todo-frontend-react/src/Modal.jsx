import axios from "axios";
import { useState } from "react";

const Modal = ({isOpen, onClose,getTodos })=> {
    if(!isOpen) return;
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isDone, setIsDone] = useState("");

    const inpStyle= {padding:4, margin:4, width:200};

    async function handleAddTodo() {
        console.log("Sending req to add todo!")
        const todoTobeAdded = {
            title:title,
            description:description,
            isDone:isDone,
        }

        try {
            const token = localStorage.getItem('token');
            // const headers = {Authorization : `Bearer ${token}`}  //and send header {headers} 
            //As my backend expects token (as a name so, i've to token)
            const response = await axios.post("http://localhost:3000/todos/", todoTobeAdded,{
                headers:{
                    token:token
                }
            });
            console.log(response.data);
            getTodos();

        } catch (error) {
            console.log(error);
            // console.log(error.response.data.message);
            
        }
    }


    return (
        <div style={{backgroundColor:"#B3B792", padding:10, borderRadius:10, maringTop:10, width:220}}>
            
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
                <h1>Todo Data ;)</h1>
                <input
                    value = {title}
                    placeholder="Title"
                    onChange={(e)=> setTitle(e.target.value)}
                    style={inpStyle}
                
                />
                <input
                    value = {description}
                    placeholder="Descritpion"
                    onChange={(e)=> setDescription(e.target.value)}
                    style={inpStyle}
                />
                <div style={{display:"flex", margin:10, padding:2}}>
                    <p style={{margin:10}}>Status</p>
                        <button style={{margin:2}} onClick={()=> setIsDone(true)}>Yes</button>
                        <button style={{margin:2}} onClick={()=> setIsDone(true)}>NO</button>
                    
                </div>
            <button style={{inpStyle}} onClick={()=> {handleAddTodo(); onClose();}}>Add</button>
            </div>
        </div>
    )

}

export default Modal;

//When I add a todo it should also update the setTodo's array check that too,