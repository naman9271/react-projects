export default function TodoList({todo,deleteTodo,isCompleted,editTodo}){
  return (
    todo.map((element) => (
      <div className="boxes" key={element.id}>
        <div onClick={()=>{isCompleted(element.id)}}>{element.taskName}   {element.done?"Completed":"Pending"}</div>
        <button onClick={()=>{deleteTodo(element.id)}}>Delete</button>
        <button onClick={()=>{editTodo(element.id)}}>Edit</button>
      </div>
    ))
  )
}
