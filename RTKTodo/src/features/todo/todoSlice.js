import {createSlice, nanoid} from '@reduxjs/toolkit'

export const initialState = {
    todos:[]
}

export const todoSlice = createSlice({
   name: 'todo',
   initialState,
   reducers:{
    addTodo:(state,action)=>{
        const todo = {
            id:nanoid(),
            text:action.payload
        }
        state.todos.push(todo)
    },
    deleteTodo:(state,action)=>{
       state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    updateTodo:(state,action)=>{
        state.todos = state.todos.map((current) => current.id === action.payload.id ? {text :action.payload} : {text : current.text})
    }
}
})

export const {addTodo,deleteTodo,updateTodo} = todoSlice.actions

export const todoReducer = todoSlice.reducer