import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeImg from "../assets/66.jpg"
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home(){
    return(
        <>
        <Navbar/>
        <Hero
            cName="hero"
            heroImg={HomeImg}
            title="Journey to the Heart of the Himalayas"
            text="Dive in to Beauty with Us"
            buttonText="Explore Now"
            url="/"
            btnClass="show"
        />
        <Destination/>
        <Trip/>
        <Footer/>
        </>
    );
}

export default Home;