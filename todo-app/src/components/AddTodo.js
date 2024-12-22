export default function AddTodo({AddTodolist}){
    function handleChange(e){
        let toname=e.target.value;
    }
    function handleSubmit(e){
        // AddTodolist(toname);
    }
    return(
        <>
        <form>
            <input onChange={handleChange} type="text" placeholder="Enter The Task"></input>
            <button onClick={handleSubmit}>Add</button>
        </form>
        </>
    )
}