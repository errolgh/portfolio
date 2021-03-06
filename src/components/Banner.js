import errol1 from '../images/errol-pelican.jpg'
import '../styles/banner.scss'
import { NavLink } from 'react-router-dom'

export default function Banner() {
  return (
    <div className="banner">
      <div className="tag-line">
        <h2>
          Purposeful <div>Web Development</div>
        </h2>
        <p>
          I work to bring new features to <span>life</span>.
        </p>
          <NavLink to="/contact" activeClassName="current-page">
            <button>
                <div>Get In Touch</div> 
            </button>
          </NavLink>
      </div>
      <div className="img-container">
        <img src={errol1} alt="Errol Watson" />
      </div>
    </div>
  )
}
