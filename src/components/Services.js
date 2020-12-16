import laptop from '../images/laptop.svg'
import rocket from '../images/rocket.svg'
import hand from '../images/hand.svg'
import '../styles/services.scss'

export default function Services() {
    return (
        <>
            <h4>My Focus</h4>
            <div className="service-container">
                <div className="service-card">
                    <div>
                        <img src={rocket} alt="laptop" />
                        <h3>Rapid Deployment</h3>
                        <p>Application deployment with Netlify on an agile development basis.</p>
                    </div>
                </div>
                <div className="service-card">
                    <div>
                        <img src={laptop} alt="laptop" />
                        <h3>Responsive Design</h3>
                        <p>Interfaces created with mobile, tablet, and desktop users in mind. Sites can be accessed from any device.</p>
                    </div>
                </div>
                <div className="service-card">
                    <div>
                        <img src={hand} alt="laptop" />
                        <h3>Feature-Rich Apps</h3>
                        <p>Currently showcasing my front end projects with a variety of features from many JavaScript libraries.</p>
                    </div>
                </div>
            </div>
        </>
    )
}