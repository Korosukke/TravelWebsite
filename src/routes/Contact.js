import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import AboutImg from "../assets/2.jpeg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Home(){
    return(
        <><Navbar/>
        <Hero
            cName="hero-mid"
            heroImg={AboutImg}
            title="Contact"
            btnClass="hide"
        />
        <ContactForm/>
        <Footer/>
        </>
    )
}

export default Home;