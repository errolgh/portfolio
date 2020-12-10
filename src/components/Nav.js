import '../styles/nav.scss'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <h1 id="logo">Errol Watson</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}