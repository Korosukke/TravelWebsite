import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import AboutImg from "../assets/00.jpg"
import Footer from "../components/Footer";
import Trip from "../components/Trip";
import Destination from "../components/Destination";
import Offer from "../components/Offer";

function Service(){
    return(
        <>
        <Navbar/>
        <Hero
            cName="hero-mid"
            heroImg={AboutImg}
            title="Explore"
            btnClass="hide"
        />
        <Offer/>
        <Footer/>
        </>
    )
}

export default Service;