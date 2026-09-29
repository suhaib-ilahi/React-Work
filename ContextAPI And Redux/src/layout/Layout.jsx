import  { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
 

const Layout = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    
  return (
      <div className={`h-full w-full  ${theme == 'dark' ? "bg-black" : "bg-amber-500"}`}>
        <button onClick={() => toggleTheme()} className={`m-3 text-white p-3 rounded-xl bg-blue-900`}>Toggle</button>
        </div>
  )
}

export default Layout