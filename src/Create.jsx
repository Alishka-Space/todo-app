

const Create = () => {
  return (
    <div className="home">
    <form className="create_form">
        <input type="text" placeholder="Enter Task" />
        <button type="button" onClick={handleAdd} >submit</button>
    </form>
</div>
  )
}

export default Create
