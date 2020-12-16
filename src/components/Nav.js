import '../styles/nav.scss'
import { NavLink } from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <h1 id="logo">Errol Watson</h1>
            <ul>
                <li><NavLink to="/" activeClassName="current-page" exact>Home</NavLink></li>
                <div className="line" ></div>
                <li><NavLink to="/portfolio" activeClassName="current-page" >Portfolio</NavLink></li>
                <div className="line" ></div>
                <li><NavLink to="/about" activeClassName="current-page" >About</NavLink></li>
                <div className="line" ></div>
                <li><NavLink to="/contact" activeClassName="current-page" >Contact</NavLink></li>
                <div className="line" ></div>
            </ul>
        </nav>
    )
}