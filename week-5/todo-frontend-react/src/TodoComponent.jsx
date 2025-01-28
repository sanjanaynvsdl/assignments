
import axios from "axios";
import { MdEdit , MdDelete, MdAdd} from "react-icons/md";

const TodoComponent = ({id, title, description, isDone, getTodos})=> {


    async function handleDelete(id) {
        
        try {
            const response = await axios.delete(`http://localhost:3000/todos/${id}`, {
                headers :{
                    token:localStorage.getItem('token')
                }
            })
            getTodos();
            

            console.log(response.data);
        } catch (error) {
            console.log(error);
            
        }
    }

   
        const styleBtn = {
            padding: '2px 4px',  
            fontSize: '12px',  
            height: '24px', 
            width: '30px' , 
            margin:'4px',
            marginTop:"20"
        }
        
    return (
        <div style={{backgroundColor:"#725C3A", padding:6,margin:10, width:150, display:'flex', color:"white", borderRadius:8 }}>
            <p style={{marginTop:8, marginRight:3}}>{title}</p>
            {/* <p>{description}</p> */}
            {/* {isDone ? <p>Status: Done</p> : <p>Status : Not yet!</p>} */}
            <div style={{display:"flex"}}>
                <button style={styleBtn} ><MdAdd /></button>
                <button style={styleBtn} ><MdEdit /></button>
                <button style={styleBtn} onClick={()=> handleDelete(id)}><MdDelete /></button>
            </div>
        </div>
    )

}

export default TodoComponent;