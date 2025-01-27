import axios from "axios";

const TodoComponent = ({id, title, description, isDone, getTodos})=> {


    async function handleDelete(id) {
        
        try {
            const response = await axios.delete(`http://localhost:3000/todos/${id}`, {
                headers :{
                    token:localStorage.getItem('token')
                }
            })
            

            console.log(response.data);
        } catch (error) {
            console.log(error);
            
        }
    }
    return (
        <div style={{backgroundColor:"lightgray", padding:10,margin:10, width:200 }}>
            <h2>{title}</h2>
            <p>{description}</p>
            {isDone ? <p>Status: Done</p> : <p>Status : Not yet!</p>}
            <div style={{display:"flex"}}>
                <button style={{margin:3}} >Edit</button>
                <button style={{margin:3}} onClick={()=> handleDelete(id)}>Delete</button>
            </div>
        </div>
    )

}

export default TodoComponent;