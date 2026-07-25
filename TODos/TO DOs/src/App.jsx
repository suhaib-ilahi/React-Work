import React, { useEffect, useState } from 'react'
import { TodoForm, TodoItem } from './components';
import { TodoProvider } from './context';
function App() {
   const [todo, setTodo] = useState([]);

   const addTodo = (todo) =>{
    setTodo((prev)=>[...prev,{id:Date.now() , ...todo}])
   }

   const updatedTodo = (id,todo)=>{
        setTodo((prev) => prev.map((current) => current.id  === id ? todo : current))
   }

   const deleteTodo = (id) =>{
      setTodo((prev) => prev.filter((current)=> current.id !==id ))
   }

   const toggleComplete = (id) =>{
    setTodo((prev) => prev.map((current) =>
            current.id === id ? {...current, completed : !current.completed} : current
        ))
   }

   useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length>0){
      setTodo(todos)
    }
   } ,[])

   useEffect(() => {
    localStorage.setItem("todos" , JSON.stringify(todo))
   }, [todo])
   

  return (
    <TodoProvider value ={{todo,addTodo,deleteTodo,toggleComplete,updatedTodo}}>
  <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
                 <TodoForm/>
            </div>
      <div className="flex flex-wrap gap-y-3">
                      {todo.map((current) => (
                        <div key={current.id} className='w-full'>
                          <TodoItem todo={current}/>
                        </div>
                      ))}
                      
                  </div>
              </div>
          </div>
          </TodoProvider>
  )
}

export default App
