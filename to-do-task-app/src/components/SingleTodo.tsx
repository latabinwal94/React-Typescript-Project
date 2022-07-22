import React, { FC, FormEvent, useState } from 'react'
import { Todo } from '../model'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import './styles.css'

interface ISingleTodo {
  item: Todo,
  todoList: Todo[],
  setToDoList: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: FC<ISingleTodo> = ({ item, todoList, setToDoList }) => {
  const [edit, setEdit] = useState<boolean>(false)
  const [editTodo, setEditToDo] = useState<string>(item.todo)


  const handleDone = (id: number) => {
    setToDoList(todoList.map((todo) => todo.id === id ? {...todo, isDone: !todo.isDone} : {...todo} ))
  }
   
  const handleDelete = (id: number) => {
    setToDoList(todoList.filter((todo) => todo.id !== id))
  }
  const handleEditMode = (e: FormEvent, id: number) => {
    e.preventDefault()
    setToDoList(todoList.map((todo) => todo.id === id ? {...todo, todo: editTodo} : todo))
    setEdit(false)
  }

  return (
    <form className='todo__single' onSubmit={(e)=>{handleEditMode(e, item.id)}}>
      {edit ? <input value={editTodo} onChange={(e) => setEditToDo(e.target.value)} /> :
        <span className='todo__single--text'>
          {item.todo}
        </span>
      }
      <div>
        <span
          className='icon'
          onClick={() => {
            if(!edit && !item.isDone) {
              setEdit(true)
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className='icon' onClick={() => {handleDelete(item.id)}}>
          <AiFillDelete />
        </span>
        <span className='icon' onClick={() =>{handleDone(item.id)}}>
          <MdDone />
        </span>
      </div>
    </form>
  )
}

export default SingleTodo
