import React, { FC, FormEvent, useRef } from 'react'
import './styles.css'
interface IInputField {
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>,
  handleAdd: (e: FormEvent) => void;
}
const InputField: FC<IInputField> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form className='input'
      onSubmit={(e)=>{
        handleAdd(e)
        inputRef.current?.blur()
      }}
    >
      <input
        type='text'
        className='input__box'
        placeholder='Enter a task'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        ref={inputRef}
      />
      <button type='submit' className='input__submit'>Go</button>
    </form>
  )
}

export default InputField
