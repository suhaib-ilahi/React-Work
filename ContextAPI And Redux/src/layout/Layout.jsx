import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'


const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${theme === 'dark' ? 'dark bg-slate-800 text-slate-100' : 'bg-slate-100 text-slate-900'} min-h-screen w-full transition-colors duration-200`
      }
    >
      {children}
    </div>
  )
}

export default Layout