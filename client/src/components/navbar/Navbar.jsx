import "./navbar.css"
import {Link} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { useContext } from "react"

const Navbar = () => {

  const {user} = useContext(AuthContext)

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{color:"inherit", textdecoration:"none"}}>
          <span className="logo">Donny2stroke</span>
          </Link>
        {user ? "ciao "+user.username : (<div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>)}
      </div>
    </div>
  )
}

export default Navbar