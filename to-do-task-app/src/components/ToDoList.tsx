import React, { FC } from 'react'
import { Todo } from '../model'
import SingleTodo from './SingleTodo'

interface IToDoList {
  todoList: Todo[],
  setToDoList: React.Dispatch<React.SetStateAction<Todo[]>>
}

const ToDoList: FC<IToDoList> = ({ todoList, setToDoList }) => {
  return (
    <div className='todos'>
      {todoList.map((item) => {
        return <SingleTodo
          item={item}
          key={item.id}
          todoList={todoList}
          setToDoList={setToDoList}
        />
      })}
    </div>
  )
}

export default ToDoList
