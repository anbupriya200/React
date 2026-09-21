import { Route, Routes } from "react-router-dom"
import Navbar from "./component/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Courses from "./pages/Courses" 
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"
import Help from "./pages/Help"

const App = () => {
  return (
    <> 
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About/> } />
      <Route path="/Services" element={<Services/>} />
      <Route path="/Courses" element={<Courses/>} />
      <Route path="/Gallery" element={<Gallery />} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Help" element={<Help />} />
    </Routes>
    </>
  )
}

export default App