import "./App.css"
import {useState} from "react"
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App(){
  let task=[{
    name:"html",
    done:false,
    id:1,
  },{
    name:"css",
    done:false,
    id:2,
  },{
    name:"js",
    done:false,
    id:3,
  }];

  //reset all
  //edit
  //add
  //delete
  //task completed

  const [todo,setTodo] =useState(task);

  function AddTodolist(toname){
    if(todo.includes(toname)){
      alert("task already exists...")
    }
    setTodo([...todo,toname]);
  }
  function deleteTodo(index){
    
  }
  function editTodo(index){

  }
  function resetAll(){
    
  }

  return(
    <div className="App">
      <h1>Todo App</h1>
      <AddTodo AddTodolist={AddTodolist}></AddTodo>
      <TodoList todo={todo} deleteTodo={deleteTodo} editTodo={editTodo}></TodoList>
    </div>
  )
}
export default App;