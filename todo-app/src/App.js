import "./App.css"
import {useState} from "react"
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App(){
  // let task=[{
  //   taskName:"html",
  //   done:false,
  //   id:1,
  // },{
  //   taskName:"css",
  //   done:false,
  //   id:2,
  // },{
  //   taskName:"js",
  //   done:false,
  //   id:3,
  // }];

  //edit
  // aur isko use Effect be bina bhi kr skte hai and use reference hook se bnhi bhut easily kr skte hai
  //have to practice more about the edit and add functionality an dthink abut teh more optimized solution

  const [todo,setTodo] =useState([]);
  const[editTodolist,setEditTodolist] =useState(null)

  function AddTodolist(obj){
    if(todo.some(el=>el.taskName===obj.taskName)){
      alert("task already exists...")
      return
    }
    if(!(obj.taskName)){
      alert("Please Enter the Task...")
      return
    }
    setTodo([...todo,{...obj,id:todo.length+1}]);
  }
  function deleteTodo(index){
    let newTodo= todo.filter(el=>el.id!==index);
    setTodo(newTodo);
  }
  function editTodo(index){
    setEditTodolist(todo.find(el=>el.id===index))
  }
  function updateTodo(newTodo){
    const idx =todo.findIndex(el=>el.id===newTodo.id);
    let updatedTodo =[...todo];
    updatedTodo.splice(idx,1,newTodo);
    setTodo(updatedTodo);
    setEditTodolist(null);
  }
  function resetAll(){
    setTodo([]);
    }
  function isCompleted(index){
    let updatedTodo = todo.map(element=>{
      if(element.id===index){
        return {...element,done:!(element.done)}
      }
      return element;
    });
    setTodo(updatedTodo);
  }

  return(
    <div className="App">
      <h1>Todo App</h1>
      <AddTodo todo={todo} AddTodolist={AddTodolist} editTodolist={editTodolist} updateTodo={updateTodo}></AddTodo>
      <TodoList todo={todo} deleteTodo={deleteTodo} isCompleted={isCompleted} editTodo={editTodo}></TodoList>
      <button onClick={()=>{resetAll()}}>RESET ALL</button>
    </div>
  )
}
export default App;