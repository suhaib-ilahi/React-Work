import { createContext , useContext } from "react";

export const ToDoContext = createContext({
    todo: [{
        id: 1,
        title: "Learn React",
        completed: false
    }],
    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
    updatedTodo: (id,todo) => {},
   
});

export const useTodo = () =>{
    return useContext(ToDoContext);
}

export const TodoProvider = ToDoContext.Provider;