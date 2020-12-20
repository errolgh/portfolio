import flaterrol from '../images/flaterrol.jpg'
import '../styles/about.scss'

export default function About () {
    return (
        <div className="about">
            <div className="about-the-author">
                <div className="author-image">
                    <img src={flaterrol} alt="author"/>
                </div>
                <div className="author-bio">
                    <h1>About the Author</h1>
                    <p>
                    My name is Errol Watson. I'm currently based in Baltimore, Maryland. I am the sole developer of this site.
                    I got into programming after building my first gaming PC.
                    The build was relatively easy and mostly anticlimactic, thusly, after it was up and running,
                    I became more curious about how all the pieces in my computer and its applications worked.
                    I'm grateful for finding programming because I am the kind of person who enjoys deep dives into new subjects,&nbsp;
                    and programming is <span style={{"font-style": "italic"}}>deep.</span>&nbsp;
                    I wanted to build a career that I could cultivate from home if necessary and spend less time in someone else's idea of a work environment.
                    <br/>
                    <br/>
                    So over the span of the years I've taken courses, bootcamps, and taught myself how to build websites and web applications.
                    Now it's time to offer my help to you.
                    {/* What I found was that a lot of small businesses don't have the funds to spend thousands of dollars upfront on a new website.
                    And many of those who did, were taken advantage of and have a website that inherited ancient design trends.
                    They were in a frustrating spot - they either can't afford a good website, and if they can they don't know who to trust to make something great.&nbsp;
                    So I tweaked my business model to fit their needs. That's how I came up with my $0 down and $150 a month model.
                    It's more managable for a small business to handle and won't hurt their bank accounts.  */}
                    </p>
                    <button>
                        Reach Out
                    </button>
                </div>
            </div>

            <div className="about-this-site">
                <h1>About this Site</h1>
                <div className="libraries-used">
                    <ul>
                        <li>React 17</li>
                        <li>React Router v5</li>
                        <li>Sass CSS</li>
                    </ul>
                    <ul>
                        <li>Font Awesome</li>
                        <li>EmailJS</li>
                        <li>Framer-Motion</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}