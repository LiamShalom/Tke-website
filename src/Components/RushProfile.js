import "./RushProfile.css"
import React from 'react';

function RushProfile( {img, name, phone, email, insta} ) {
    return (
        <div className="image-box">
            <img src={img} className="image" />
            <div className="description">{name}</div>
        </div>
    );
}
