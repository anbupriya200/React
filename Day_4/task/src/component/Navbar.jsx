import { Link } from "react-router-dom"
import logo from "../assets/hero.png"

const Navbar = () => {
  return (
     <>
     <div className="bg-green-200 h-30 flex justify-between items-center p-10">
      <div>
        <img className="w-20 h-20" src={logo} alt="" />
      </div>
      <div className="flex gap-10">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Services">Services</Link>
        <Link to="/Courses">Courses</Link>
        <Link to="/Gallery">Gallery</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Help">Help</Link>
      </div>
     </div>
     </>
  )
}

export default Navbar