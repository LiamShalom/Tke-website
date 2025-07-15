import React from "react";
import { InstagramEmbed } from 'react-social-media-embed';
import "./HouseTour.css";

function HouseTour() {
    return (
        <div>
            <h1>Virtual House Tours</h1>
            <div className="house-tour-container">
                <InstagramEmbed url="https://www.instagram.com/p/DJj7_q_p5ix/" width={400} />
                <InstagramEmbed url="https://www.instagram.com/p/CRM3WuBlT9o/" width={400} />
            </div>
        </div>
    );
}

export default HouseTour