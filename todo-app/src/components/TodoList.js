export default function TodoList({todo,deleteTodo,editTodo}){
  return (
    todo.map((element) => (
      <div key={element.id}>
        {element.name}   {todo.done?"Completed":"Pending"}
        <button onClick={()=>{deleteTodo(element.id)}}>Delete</button>
        <button onClick={()=>{editTodo(element.id)}}>Edit</button>
      </div>
    ))
  )
}
