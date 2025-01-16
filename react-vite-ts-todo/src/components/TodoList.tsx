import React from 'react'
import './styles.css'
import {Todo} from './model'
import SingleTodo from './SingleTodo'
import { Droppable, DroppableProvided, DroppableStateSnapshot  } from 'react-beautiful-dnd';
interface Props{
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos:Todo[];
    setCompletedTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList:React.FC<Props> = ({todos , setTodos,completedTodos ,setCompletedTodos}) => {
  return (
      <div className="container">
        <Droppable droppableId='TodoList'>
          {(provided: DroppableProvided, snapshot: DroppableStateSnapshot)=>(
            <div className={`todos ${snapshot.isDraggingOver?"dragactive":""}`} ref={provided.innerRef} {...provided.droppableProps}>
            <span className="todos_heading">Active Tasks</span>
              {todos.map((todo,index)=>(
                  <SingleTodo index={index} key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>
              ))}
              {provided.placeholder as React.ReactNode}
          </div>
         )}
        </Droppable>

        <Droppable droppableId='TodosRemove'>
          {(provided: DroppableProvided, snapshot: DroppableStateSnapshot)=>(
              <div className={`todos remove ${snapshot.isDraggingOver?"dragcomplete":""}`} ref={provided.innerRef} {...provided.droppableProps}>
              <span className="todos_heading">Completed Tasks</span>
              {completedTodos.map((todo,index)=>(
                      <SingleTodo index={index} key={todo.id} todo={todo} todos={completedTodos} setTodos={setCompletedTodos}/>
                  ))}
              {provided.placeholder as React.ReactNode}
            </div>
          )}
        </Droppable>
      </div>
  )
}

export default TodoList