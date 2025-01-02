import { useState } from "react";
import "./App.css"
import Inputfield from "./components/Inputfield";
import {Todo} from './components/model';
import TodoList from "./components/TodoList";
// App():React.FC-->react functional component 
// //React.ReactNode-->react node that supports all type of the react components
//The issue arises because the type React.FC refers to the entire functional component type, not the return type of the function. When you use function App(): React.FC, you're essentially saying that the return type of App is a React.FC, which is incorrect. A functional component returns a JSX.Element, not a React.FC.
// function App():JSX>Element {
//   return (
//     <div className="App">
//       {/* <span className="header">Taskify</span> */}
//     </div>
//   )
// }
const App: React.FC = () => {
  const[todo,setTodo]=useState<string>('');
  const[todos,setTodos]=useState<Todo[]>([]);

  function handleAdd(e:React.FormEvent){
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}]);
      setTodo('');
    }
  }
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <Inputfield todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
      
    </div>
  );
};

export default App
