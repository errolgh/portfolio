import Gallery from '../components/Gallery'
import '../styles/portfolio.scss'

export default function Portfolio(){
    return(
        <div className="portfolio">
            <h1>My Case Studies</h1>
            <Gallery />
        </div>
    )
}
// portfolio can (and maybe should?) have its own scss file
// to format everything that exists outside of the gallary component.