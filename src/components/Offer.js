import Mountain1 from "../assets/1.jpeg"
import Mountain2 from "../assets/2.jpeg"
import Mountain3 from "../assets/5.jpeg"
import Mountain4 from "../assets/8.webp"
import Mountain5 from "../assets/87.jpg"
import Mountain6 from "../assets/88.jpg"
import Mountain7 from "../assets/123.jpg"
import Mountain8 from "../assets/73.jpeg"
import img2 from "../assets/97.jpg"
import img1 from "../assets/98.jpeg"
import img3 from "../assets/95.webp"
import img4 from "../assets/96.jpg"

import OfferData from "./OfferData"
import "./OfferStyles.css"
const Offer = () => {
    return(
        <div className="destination">
            <OfferData
                className="first-des-reverse"
                heading="Surkanda Devi"
                text="Dedicated to Goddess Durga, the Surkanda Devi Temple is a 3 km walk from the village, Kaddukhal. Legend has it that when Goddess Sati died, her husband Lord Shiva carried her body back to Kailash, which is when her head fell at the spot where the temple was then erected.
                Thus, the name Sirkandha was derived, which over the passage of time is called Surkanda. This ancient site is surrounded by lush greenery and a panoramic view of the breathtaking Himalayas!"
                img1={Mountain7}
                img2={Mountain8}
           />
           <OfferData
                className="first-des"
                heading="Beatles Ashram"
                text="Formerly known as Chaurasi Kutia, Beatles Ashram happens to be a popular ashram located at Rishikesh in Uttarakhand. The place received a lot of hype and achieved wide recognition after the Beatles band of Liverpool came to stay there in the year 1986. 

                The members of the band practiced meditation and composed many good songs in this place.  
                
                In the later period, the ashram was left abandoned but was reopened for tourists in the year 2015. At present, the Beatles Ashram is visited by locals as well as tourists, out of which most of the travelers are Beatles band fans. "
                img1={img1}
                img2={img2}
           />
           <OfferData
                className="first-des-reverse"
                heading="Lambi Dehar Mines"
                text="The Lambi Dehar Mines located at the outskirt of Mussoorie at a distance of 10km from the Mall Road in Mussoorie. It is a place where almost 50000 labourer died in pain due to inappropriate and wrongful mining  practices in 1990. Now local people used to say that those worker used to cry and scream at night. The resident near to those place claims that they have heard their voices at night."
                img1={img3}
                img2={img4}
           />
           <OfferData
                className="first-des"
                heading="Jim Corbett National Park"
                text="Jim Corbett National Park is the oldest national park set amidst the foothills of the Himalayas in the Nainital district of Uttarakhand. Known for housing the endangered Bengal tiger, Corbett National Park is part of the larger Corbett Tiger Reserve. Famous for its wildlife safaris, Jim Corbett National Park has multiple resorts set on the riverside. Home to more than 650 species of rare and migratory birds, it is a haven for bird watchers."
                img1={Mountain1}
                img2={Mountain2}
           />
           <OfferData
                className="first-des-reverse"
                heading="Char Dham"
                text="Uttarakhand, also known as Devbhoomi or the Land of Gods, is home to numerous temples and welcomes devotees all year round. Among the countless religious sites and circuits that devotees visit in Uttarakhand, one of the most prominent is the Char Dham Yatra. This Yatra or pilgrimage is a tour of four holy sites - Yamunotri, Gangotri, Kedarnath and Badrinath – nestled high up in the Himalayas."
                img1={Mountain3}
                img2={Mountain4}
           />
           <OfferData
                className="first-des"
                heading="Nainital"
                text="Nainital is a Himalayan resort town in the Kumaon region of India’s Uttarakhand state, at an elevation of roughly 2,000m. Formerly a British hill station, it’s set around Nainital Lake, a popular boating site with Naina Devi Hindu Temple on its north shore. A cable car runs to Snow View observation point (at 2,270m), with vistas over the town and mountains including Nanda Devi, Uttarakhand’s highest peak."
                img1={Mountain5}
                img2={Mountain6}
           /> 
        </div>
    )
}

export default Offer