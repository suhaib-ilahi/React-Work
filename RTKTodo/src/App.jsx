import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'


function App() {
  return (
    <>
    <div className=' m-auto flex justify-center text-2xl font-bold bg-blend-overlay bg-amber-200'>Add your todos </div>
     <AddTodo/>
     <TodoList/>
    
    </>
  )
}

export default App
