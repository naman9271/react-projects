import React from 'react'
import {Todo} from './model'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { MdFileDownloadDone } from "react-icons/md";
import './styles.css'
type Props={
    todo:Todo;
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo:React.FC<Props> = ({todo,todos,setTodos}) => {
  return (
    <form className='todos_single'>
        <span className='todos_single--text'>
            {todo.todo}
        </span>
            <div>
                <span className="icon"><CiEdit /></span>
                <span className="icon"><MdDelete /></span>
                <span className="icon"><MdFileDownloadDone /></span>
            </div>
    </form>
  )
}

export default SingleTodo