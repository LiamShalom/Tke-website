import "./RushBox.css";
import React from 'react';
import TkeFlag from "./tkeFlag";

function RushBox( { scrollFunc, aboutRef, teamRef } ) {
    const onTeamButtonClick = () => {
        scrollFunc(teamRef);
    };

    const onAboutButtonClick = () => {
        scrollFunc(aboutRef);
    };

    return (
        <div className="rush-box">
            <div className="rush-box-text">Interested in UW TKE? Contact our Rush Chairs</div>
            <div className="rush-box-text-small">Or learn more about rush below.</div>
            <div className="rush-button-wrapper">
                <button className="rush-black-button" onClick={onTeamButtonClick}>Meet Our Team</button>
                <button className="rush-white-button" onClick={onAboutButtonClick}>Learn More</button>
            </div>
        </div>
    );
}

export default RushBox;