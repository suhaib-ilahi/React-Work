import ThemeContextProvider from './context/ThemeContextProvider'
import Layout from './layout/Layout'

const App = () => {
    
  return (
   <ThemeContextProvider>
      <Layout/>
   </ThemeContextProvider>
  )
}

export default App