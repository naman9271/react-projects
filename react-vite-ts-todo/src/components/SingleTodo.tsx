import React, { useEffect, useRef, useState } from 'react'
import {Todo} from './model'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { MdFileDownloadDone } from "react-icons/md";
import './styles.css'
import { Draggable } from 'react-beautiful-dnd';
type Props={
    todo:Todo;
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
    index:number;
}

const SingleTodo:React.FC<Props> = ({todo,todos,setTodos,index}) => {

  const [edit,setEdit]=useState<boolean>(false)
  const [editText,setEditText]=useState<string>(todo.todo)

  function handleDone(id:number):void{
    setTodos(todos.map((todo)=>(
      todo.id===id?{...todo,isDone:!todo.isDone}:todo)))
  }
  function handleDelete(id:number):void{
    setTodos(todos.filter(t=>t.id!==id))
  }
  function handleEdit(e:React.FormEvent<HTMLFormElement>,id:number){
    e.preventDefault();
    setTodos(todos.map(t=>
      t.id===id?{...t,todo:editText}:t))
    setEdit(false);
  }
  const editRef=useRef<HTMLInputElement>(null);

  useEffect(()=>{
    editRef.current?.focus();
  },[edit])

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided,snapshot)=>(
        <form className={`todos_single ${snapshot.isDragging?"drag":""}`}
         onSubmit={(e)=>handleEdit(e,todo.id)}
         {...provided.draggableProps}
         {...provided.dragHandleProps}
         ref={provided.innerRef}
         >

        {edit?<input 
                ref={editRef}
                placeholder="enter the Updated name" 
                value={editText} 
                onChange={(e)=>setEditText(e.target.value)}
                className='"todos_single--text'/>
                
        :
          todo.isDone?<s className='todos_single--text'>
            {todo.todo}
          </s>:
          <span className='todos_single--text'>
              {todo.todo}
          </span>
          
        }
              <div>
                  <span 
                    className="icon" 
                    onClick={()=>{
                      if(!edit && !todo.isDone)
                      setEdit(!edit);
                    }}>
                      <CiEdit/>
                  </span>
                  <span className="icon" onClick={()=>{handleDelete(todo.id)}}><MdDelete/></span>
                  <span className="icon" onClick={()=>{handleDone(todo.id)}}><MdFileDownloadDone /></span>
              </div>
      </form>
      )}
    </Draggable>
  )
}

export default SingleTodo