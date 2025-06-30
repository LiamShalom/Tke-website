import "./RushProfile.css"
import React from 'react';

function RushProfile( {input} ) {
    const {img, name, phone, email, insta} = input
    return (
        <div className="image-box">
            <img src={img} className="image" />
            <div className="description">{name}</div>
        </div>
    );
}

export default RushProfile;
