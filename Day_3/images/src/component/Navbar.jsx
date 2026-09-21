import { Link } from "react-router-dom"
import logo from "../assets/vite.svg"
const Navbar = () => {
  return (
     <>
     <div className="bg-green-700 h-30 p-10 flex justify-between items-center">
        <div className=" ">
            <img className="" src={logo} alt="img"   />
            
        </div>
        <div className=" flex gap-4 ">
            <Link to="/" >Home</Link>
            <Link to="/About" >About</Link>
        </div>
     </div>
     </>
  )
}

export default Navbar