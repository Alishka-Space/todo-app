import { useState } from 'react'
import axios from 'axios'

const Create = () => {
  const [task, setTask] = useState()



  const handleAdd = () => {
    axios.post('http://localhost:5000/add', { task: task })
      .then(result => console.log(result))
      .catch(err => console.log(err))

  }
  return (
    <div className="home">
      <form className="create_form">
        <input type="text" placeholder="Enter Task" onChange={(e) => setTask(e.target.value)} />
        <button type="button" onClick={handleAdd} >submit</button>
      </form>
    </div>
  )
}

export default Create
