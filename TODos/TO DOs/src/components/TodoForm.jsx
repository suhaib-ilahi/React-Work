import React, { useState } from 'react'
import { useTodo } from '../context/ToDoContext';

function TodoForm() {
    const [singleTodo,setSingleTodo] = useState("")

    const {addTodo} = useTodo()

    const add = (e) => {
        console.log(singleTodo)
        e.preventDefault()
        
        if(!singleTodo) return

        addTodo({todo : singleTodo,completed : false})

        setSingleTodo("")
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={singleTodo}
                onChange={(e) => setSingleTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

