import React from 'react'   
// import { nanoid } from '@reduxjs/toolkit'
import { useDispatch, useSelector, } from 'react-redux'
import { deleteTodo } from '../features/todo/todoSlice'

function TodoList() {
  const todosList = useSelector(state => state.todo.todos) 
  const dispatch = useDispatch()
  const editTodo = (id) =>{
      
  })
  }
  
  return (
    <>
   
    <ul className="list-none">
        {todosList.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className='text-white'>{todo.text}</div>
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (isTodoEditable) {
                        editTodo(todo.id);
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            <button
             onClick={() => dispatch(deleteTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
            ❌
            </button>
          </li>
        ))}
      </ul>
      </>
  )
}

export default TodoList