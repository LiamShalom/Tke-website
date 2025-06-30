import "./RushProfile.css"
import React from 'react';
import { FaInstagram } from 'react-icons/fa';


/**
 * Takes in input data and produces a formatted profile of each rush chair.
 * @param {input} input of the form {img, name, details, loc, pc, major, phone, insta}
 * @returns corresponding component
 */
function RushProfile( {input} ) {
    const {img, name, details, loc, pc, major, phone, insta} = input
    return (
        <div className="rush-image-box">
            <img src={img} className="rush-image" />
            <div className="rush-name">{name}</div>
            <div className="rush-details">{details}, PC{pc}</div>
            <div className="rush-details">{loc}</div>
            <div className="rush-major">{major}</div>
            <a href={`tel:${phone}`} className="rush-phone">{phone}</a>
            <a
                href={`https://instagram.com/${insta}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rush-insta-link"
            >
                <FaInstagram size={24} />
            </a>
        </div>
    );
}

export default RushProfile;
