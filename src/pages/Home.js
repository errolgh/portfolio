import Banner from '../components/Banner'
import Services from '../components/Services'

export default function Home() {
    return (
        <>
            <Banner />
            <Services />
            <div>
                <h4>My Portfolio</h4>
                <p className="latest">See my latest work.</p>
            </div>
        </>
    )
}