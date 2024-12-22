import { useEffect, useState } from "react";

export default function AddTodo({AddTodolist,editTodolist,updateTodo}){
    const initial={
        taskName:"",
        done:false,
      }
    const [newTodo,setNewTodo] = useState(initial)
    function handleChange(e){
        e.preventDefault()
        setNewTodo({...newTodo,taskName:e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault()
        if(editTodolist){
            updateTodo(newTodo);
            setNewTodo(initial);
        }
        else{
            AddTodolist(newTodo);
            setNewTodo(initial);
        }
    }
    useEffect(()=>{
        if(editTodolist){
            setNewTodo(editTodolist);
        }
    },[editTodolist])
    return(
        <>
        <form>
            <input onChange={handleChange} type="text" placeholder="Enter The Task" value={newTodo.taskName}></input>
            <button onClick={handleSubmit}>{editTodolist?"Update":"Add"}</button>
        </form>
        </>
    )
}