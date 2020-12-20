import Gallery from '../components/Gallery'
import '../styles/portfolio.scss'
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

export default function Portfolio(){
    return(
        <motion.div className="portfolio" exit="exit" variants={pageAnimation} initial="hidden" animate="show">
            <h1>My Case Studies</h1>
            <Gallery />
        </motion.div>
    )
}
// portfolio can (and maybe should?) have its own scss file
// to format everything that exists outside of the gallary component.