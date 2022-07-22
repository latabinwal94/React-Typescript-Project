import React, {FC, FormEvent, useState} from 'react';
import './App.css';
import InputField from './components/InputField';
import ToDoList from './components/ToDoList';
import { Todo } from './model';

const App: FC  = () => {
  const [todo, setTodo] = useState<string>('')
  const [todoList, setToDoList] = useState<Todo[]>([])

  const handleAdd = (e: FormEvent) => {
    e.preventDefault()
    if(todo) {
      setToDoList([...todoList, {id: Date.now(), todo, isDone: false}])
      setTodo('')
    }
  }

  return (
    <div className="app">
      <span className="heading">Taskify</span>
      <InputField
        todo={todo}
        setTodo={setTodo}
        handleAdd={handleAdd}
      />
      <ToDoList
        todoList={todoList}
        setToDoList={setToDoList}
      />
    </div>
  )
}

export default App;
