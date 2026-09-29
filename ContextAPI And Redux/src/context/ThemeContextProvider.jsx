import {  useState } from 'react'
import ThemeContext from './ThemeContext'

const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        theme == 'dark' ? setTheme('light'): setTheme('dark')
    }
    
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider