import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpeg";
import Trip2 from "../assets/8.webp";
import Trip3 from "../assets/6.jpg";

function Trip(){
    return (
        <div className="trip"> 
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData
                image={Trip1}
                heading = "Trip in Indonesia"
                text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"/>
                <TripData
                image={Trip2}
                heading = "Trip in Malaysia"
                text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"/>
                <TripData
                image={Trip3}
                heading = "Trip in Indonesia"
                text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"/>
            
            </div>
        </div>
    );
}

export default Trip;