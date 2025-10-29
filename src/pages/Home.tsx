import bgImage from "../assets/bgImage.jpg"
import HomeHouses from "../components/HomeHouses"
import './Home.css'


function Home () {
    return <>
    <div className="home-hero-bg" 
    style={{['--hero-image' as any]: `url(${bgImage})`}}
    /> 
    <HomeHouses />
    </>
}

export default Home