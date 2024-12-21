export default function AddTodo({addTodo}){
    function handleSubmit(e){
        e.preventDefault();
        let toname=e.target.toname.value;
        addTodo(toname);
    }
    return(
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter The task" name="toname"></input>
        <button >Save</button>
      </form>
    )
}