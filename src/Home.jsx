import Create from './Create'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/get')
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))

    },[])
  
    return (
        <div className='home'>
            <h2>ToDo List</h2>
            <Create />
            {
                
                todos.length === 0 
                ? <div><h2>No Record</h2></div> 
                : todos.map((todo, index) => (
                    <div key={index}>
                        {todo.task}
                    </div>
                ))
            }
        </div>
    )
}

export default Home
