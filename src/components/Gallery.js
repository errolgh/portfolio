import hackerNewsSearch from '../images/hackernewssearch.png'
import '../styles/gallery.scss'


export default function Gallery(){
    return (
        <div>
            <div className="card-container">
                <div className="project-card">
                    <h3>Hacker News Search</h3>
                    <img src={hackerNewsSearch} alt="Hacker News Search" />
                    {/* https://cranky-stonebraker-12c9f2.netlify.app/ */}
                    <p></p>
                </div>
                <div className="project-card">
                    <h3>Hacker News Search</h3>
                    <img src={hackerNewsSearch} alt="Hacker News Search" />
                    <p></p>
                </div>
                <div className="project-card">
                    <h3>Hacker News Search</h3>
                    <img src={hackerNewsSearch} alt="Hacker News Search" />
                    <p></p>
                </div>
            </div>
        </div>
    )
}

// app title
// app image or GIF
// short description
// github
// make a visit link (button)
// show more nerd shit