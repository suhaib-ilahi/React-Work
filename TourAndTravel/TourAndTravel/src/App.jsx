import { Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import About from "./routes/About"
import Contact from "./routes/Contact"
import Service from "./routes/Service"
import Layout from "./Layout"
import Signup from "./routes/Signup"


function App() {

 return (
  <>
  <Routes>
    <Route path="/signup" element={<Signup/>}/>
    <Route  element={<Layout/>}>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/service" element={<Service/>}/>
    </Route>
  </Routes>

  </>
)
}

export default App
