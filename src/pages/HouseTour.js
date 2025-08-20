import React from "react";
import { InstagramEmbed } from 'react-social-media-embed';
import MapWithStreetView from "../Components/MapWithStreetView";
import "./HouseTour.css";

// Display the house tour page
function HouseTour() {
    return (
        <div className="house-page-container">
            <h1>Our House</h1>
            <div className="tour-streetview-container">
                <MapWithStreetView></MapWithStreetView>
            </div>
            <h1>Virtual House Tours</h1>
            <div className="house-tour-container">
                <InstagramEmbed url="https://www.instagram.com/p/DJj7_q_p5ix/" className="house-insta-embed"/>
                <InstagramEmbed url="https://www.instagram.com/p/CRM3WuBlT9o/" className="house-insta-embed"/>
            </div>
        </div>
    );
}

export default HouseTour