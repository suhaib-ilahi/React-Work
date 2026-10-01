import Navbar from './components/Navbar'
import ThemeContextProvider from './context/ThemeContextProvider'
import Layout from './layout/Layout'
import Task from './pages/Task'

const App = () => {
    
  return (
   <ThemeContextProvider>
      <Navbar/>
      <Layout>
        <Task />
      </Layout>
   </ThemeContextProvider>
  )
}

export default App