import '../styles/nav.scss'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="main-nav container">
      <h1 id="logo">Errol Watson</h1>
      <ul>
        <li>
          <NavLink to="/" activeClassName="current-page" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" activeClassName="current-page">
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="current-page">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="current-page">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
