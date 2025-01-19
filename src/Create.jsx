

const Create = () => {
  const [task, setTask] = useState()



  const handleAdd = () => {

  }
  return (
    <div className="home">
    <form className="create_form">
        <input type="text" placeholder="Enter Task" onChange={(e) => setTask(e.target.value) } />
        <button type="button" onClick={handleAdd} >submit</button>
    </form>
</div>
  )
}

export default Create
