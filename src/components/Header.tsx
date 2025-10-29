import { NavLink } from "react-router"
import "./Header.css";

function Header(){
  return <header className="site-header-hdr">
      <div className="container-hdr">
        <NavLink to="/" className="brand-hdr">
          Poudlard
        </NavLink>
        <nav className="nav-hdr">
          <NavLink to='/' end className={({ isActive }) => (isActive ? "active" : undefined)}>Home</NavLink>
          <NavLink to='/houses'   className={({ isActive }) => (isActive ? "active" : undefined)}>Houses</NavLink>
          <NavLink to='/characters'  className={({ isActive }) => (isActive ? "active" : undefined)}>Characters</NavLink>
          <NavLink to='/spells'  className={({ isActive }) => (isActive ? "active" : undefined)}>Spells</NavLink>
        </nav>
      </div>
    </header>
}

export default Header