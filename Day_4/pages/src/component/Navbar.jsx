import { Link } from "react-router-dom"

const Navbar = () => {
  return (<> 
    <section className="nav">
        <div className="logo">
            <h3>logo</h3>
        </div>
        <div className="link">
            <Link to="/"></Link>
            <Link to="/"></Link>
            <Link to="/"></Link>
            <Link to="/"></Link>
        </div>
    </section>
    </>
  )
}

export default Navbar