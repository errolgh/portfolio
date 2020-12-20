import flaterrol from '../images/flaterrol.jpg'
import '../styles/about.scss'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

export default function About () {
    return (
        <motion.div className="about" variants={pageAnimation} initial="hidden" animate="show">

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
                    </p>
                    <button>
                        <NavLink to="/contact">
                            Reach Out
                        </NavLink>
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

        </motion.div>
    )
}