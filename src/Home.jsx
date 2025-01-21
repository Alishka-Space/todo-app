import Create from './Create'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BsCircleFill, BsFillTrashFill } from 'react-icons/bs' // Import the necessary icon components

const Home = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/get')
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))

    },[])
    const handleEdit = (id) => {
        axios.put('http://localhost:5000/update/'+id)
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))
        
    }
  
    return (
        <div className='home'>
            <h2>ToDo List</h2>
            <Create />
            {
                
                todos.length === 0 
                ? <div><h2>No Record</h2></div> 
                : todos.map((todo, index) => (
                    <div className='task' key={index}>
                        <div className='checkbox' onClick={()=> handleEdit(todo._id)} >
                             <BsCircleFill className='icon' />
                             <p>{todo.task}</p>
                        </div>
                        <div>
                            <span><BsFillTrashFill className='icon'/></span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Home
