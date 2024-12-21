import "./TodoList.css"
export default function TodoList({todolist,deleteTodo}){
    return(
    <>
        <div className="todo">{todolist}</div>
        <button onClick={()=>{deleteTodo(todolist)}}>Delete</button>
        <button>Edit</button>
    </>
    )
}