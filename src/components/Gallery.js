import hackerNewsSearch from '../images/hackernewssearch.png'
import '../styles/gallery.scss'


export default function Gallery(){
    return (
        <div className="projects">
            <div className="project">
                <a href="https://cranky-stonebraker-12c9f2.netlify.app/" target="_blank">
                    <h2>Hacker News Search</h2>
                    <p>An SPA featuring the Hacker News Algolia API. Built with ReactJS, Redux, and Hooks.</p>
                    <img src={hackerNewsSearch} alt="Hacker News Search" />
                </a>
            </div>
            <div className="project">
                <h2>Hacker News Search</h2>
                <img src={hackerNewsSearch} alt="Hacker News Search" />
            </div>
            <div className="project">
                <h2>Hacker News Search</h2>
                <img src={hackerNewsSearch} alt="Hacker News Search" />
            </div>
            <div className="project">
                <h2>Hacker News Search</h2>
                <img src={hackerNewsSearch} alt="Hacker News Search" />
            </div>
            <div className="project">
                <h2>Hacker News Search</h2>
                <img src={hackerNewsSearch} alt="Hacker News Search" />
            </div>
            <div className="project">
                <h2>Hacker News Search</h2>
                <img src={hackerNewsSearch} alt="Hacker News Search" />
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