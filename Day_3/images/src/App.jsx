import { Route, Router, Routes } from "react-router-dom"
import Navbar from "./component/navbar"
import Home from "./pages/Home"
import About from "./pages/About"

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} /> 
      <Route path="/About" element={<About/>} /> 
    </Routes>
    </>
  )
}

export default App