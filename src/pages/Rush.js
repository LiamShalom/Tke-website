// Main component for rush page. Shows four rush chairs and their information.
// See TO MAINTAINING tags.

import React from "react";
import RushProfile from "../Components/RushProfile.js"
import "./Rush.css"

// TO MAINTAIN: Change the following entries to match the updated rush chairs.
// Images should be added to ./public/gallery
const headRushData = {
    img: "./logo512.png",
    name: "Trevor Berry",
    details: "Head Rush", // Don't change
    pc: "23",
    loc: "Kirkland, WA",
    major: "Finance",
    phone: "(425) 599-9335",
    insta: "trevor.berry7"
};

const chair1Data = {
    img: "./logo512.png",
    name: "Andy Hoff",
    details: "Rush Chair", // Don't change
    pc: "24",
    loc: "Seattle, WA",
    major: "Mechanical Engineering",
    phone: "(206) 771-3332",
    insta: "andyhofff"
};

const chair2Data = {
    img: "./logo512.png",
    name: "Carter Thompson",
    details: "Rush Chair", // Don't change
    pc: "24",
    loc: "Sammamish, WA",
    major: "Construction Management",
    phone: "(425) 553-9999",
    insta: "carthomps75"
};

const chair3Data = {
    img: "./logo512.png",
    name: "Vishal Grimella",
    details: "Rush Chair", // Don't change
    pc: "24",
    loc: "The Bay 🤙",
    major: "Political Science",
    phone: "(510) 561-8086",
    insta: "vishal_garimella"
};



// Render main component.
function Rush() {
    return (
        <div>
            <h2 className="rush-sub-header">Interested in TKE? Contact our Rush Chairs.</h2>
            <div className="rush-container">
            <RushProfile input = {headRushData} className="box"></RushProfile>
            <RushProfile input = {chair1Data} className="box"></RushProfile>
            <RushProfile input = {chair2Data} className="box"></RushProfile>
            <RushProfile input = {chair3Data} className="box"></RushProfile>
        </div>
        </div>
        
    );
}

export default Rush;