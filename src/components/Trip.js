import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/66.jpeg";
import Trip2 from "../assets/101.jpg";
import Trip3 from "../assets/55.jpg";

function Trip(){
    return (
        <div className="trip"> 
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData
                image={Trip1}
                heading = "Trip to Auli"
                text = "Auli is India's premier ski resort destination. Originally developed as a paramilitary , Auli's skiing slopes are popular among tourists and professionals alike. In winter, Auli hosts several snow adventure events.  For skiing enthusiasts, January to March is the best time to visit."/>
                <TripData
                image={Trip2}
                heading = "Trip to Rishikesh"
                text = "Rishikesh has spectacular view of jungle-clad hills. Rishikesh also has confluence of River Ganges and Chandrabhaga. The glorious attraction of Rishikesh is none other than the great river Ganges herself, running rapidly throughout the city. In the ancient time and still so many yogis, rishis, sages and sannyasis attracted to Rishikesh to practice yoga in this peaceful location."/>
                <TripData
                image={Trip3}
                heading = "Trip to Mussoorie"
                text = "Mussoorie is one of the most popular hill stations located at a distance of 290 km from Delhi in the Dehradun district of Uttarakhand. With a backdrop of the Shivalik range of Himalayas and doon valley, Mussoorie, also known as Queen of The Hills, stands at an altitude of 7000 feet above sea level."/>
            
            </div>
        </div>
    );
}

export default Trip;