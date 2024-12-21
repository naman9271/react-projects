import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from "./components/TodoList"

function App() {
const [todo,setTodo] = useState([]);

function addTodo(toname){
  if(todo.includes(toname)){
    alert("This Task Already exists....");
  }else{
    setTodo(...todo,toname);
    console.log(todo);
  }
}
function editTodo(toname){

}
function deleteTodo(del){
  const index = todo.find(del);
  let newTodo = [...todo];
  setTodo(newTodo.splice(index,1));
//del=array element name to be get deleted

}

  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo addTodo={addTodo} editTodo={editTodo}></AddTodo>
      {todo.map((element) => {
        <TodoList todolist={element} deleteTodo={deleteTodo}></TodoList>
        
      })}
    </div>
  );
}

export default App;
