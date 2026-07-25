import { useState } from 'react'
import './App.css'

function App() {
    const[color,setcolor]=useState('olive')

  return (
    
  <div className='w-full h-screen duration-200'
  style={{backgroundColor:color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg
      px-3 py-2 bg-white rounded-xl'>
        <button
        onClick={()=>setcolor('red')}
        className='outline-none p-3 rounded-full
        text-white shadow-lg ' style={{backgroundColor:'red'}}>Red</button>
     
        <button
         onClick={()=>setcolor('green')}
        className='outline-none p-3 rounded-full
        text-white shadow-lg ' style={{backgroundColor:'green'}}>Green</button>
    
        <button
         onClick={()=>setcolor('blue')}
        className='outline-none p-3 rounded-full
        text-white shadow-lg ' style={{backgroundColor:'blue'}}>Blue</button>
        <button
         onClick={()=>setcolor('Violet')}
        className='outline-none p-3 rounded-full
        text-white shadow-lg ' style={{backgroundColor:'Violet'}}>Violet</button>
        <button
         onClick={()=>setcolor('Yellow')}
        className='outline-none p-3 rounded-full
        text-white shadow-lg ' style={{backgroundColor:'Yellow'}}>Yellow</button>
        <button
         onClick={()=>setcolor('Orange')}
        className='outline-none p-3 rounded-full
        text-white shadow-lg ' style={{backgroundColor:'Orange'}}>Orange</button>
        <button
         onClick={()=>setcolor('Black')}
        className='outline-none p-3 rounded-full
        text-white shadow-lg ' style={{backgroundColor:'Black'}}>Black</button>
        <button
         onClick={()=>setcolor('Grey')}
        className='outline-none p-3 rounded-full
        text-white shadow-lg ' style={{backgroundColor:'Grey'}}>Grey</button>
      </div>
    </div>
  </div>

  )
}

export default App
