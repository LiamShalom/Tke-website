import "./RushBox.css"
import React from 'react';

function RushBox() {
    return (
        <div className="rush-box">
            <div className="rush-box-text">Interested in TKE? Contact our Rush Chairs</div>
            <div className="rush-box-text-small">Or learn more about rush below.</div>
            <div className="rush-button-wrapper">
                <button className="rush-black-button">Meet Our Team</button>
                <button className="rush-white-button">Learn More</button>
            </div>
        </div>
    );
}

export default RushBox;