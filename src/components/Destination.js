import Mountain1 from "../assets/1.jpeg"
import Mountain2 from "../assets/2.jpeg"
import Mountain3 from "../assets/5.jpeg"
import Mountain4 from "../assets/8.webp"
import DestinationData from "./DestinationData"
import "./DestinationStyles.css"
const Destination = () => {
    return(
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame</p>
           <DestinationData
                className="first-des"
                heading="Jim Corbett National Park"
                text="Jim Corbett National Park is the oldest national park set amidst the foothills of the Himalayas in the Nainital district of Uttarakhand. Known for housing the endangered Bengal tiger, Corbett National Park is part of the larger Corbett Tiger Reserve. Famous for its wildlife safaris, Jim Corbett National Park has multiple resorts set on the riverside. Home to more than 650 species of rare and migratory birds, it is a haven for bird watchers."
                img1={Mountain1}
                img2={Mountain2}
           />
           <DestinationData
                className="first-des-reverse"
                heading="Char Dham"
                text="Uttarakhand, also known as Devbhoomi or the Land of Gods, is home to numerous temples and welcomes devotees all year round. Among the countless religious sites and circuits that devotees visit in Uttarakhand, one of the most prominent is the Char Dham Yatra. This Yatra or pilgrimage is a tour of four holy sites - Yamunotri, Gangotri, Kedarnath and Badrinath – nestled high up in the Himalayas."
                img1={Mountain3}
                img2={Mountain4}
           /> 
        </div>
    )
}

export default Destination