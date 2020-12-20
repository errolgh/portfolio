import Banner from '../components/Banner'
import Services from '../components/Services'
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

export default function Home() {
    return (
        <motion.div className="home" exit="exit" variants={pageAnimation} initial="hidden" animate="show">
            <Banner />
            <Services />
        </motion.div>
    )
}