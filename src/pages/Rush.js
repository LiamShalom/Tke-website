// Main component for rush page. Shows four rush chairs and their information.
// See TO MAINTAINING tags.

import React, { useRef } from "react";
import RushProfile from "../Components/RushProfile.js"
import RushBox from "../Components/RushBox.js"
import WhySection from "../Components/WhySection.js";
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
    img: "./rush-gallery/andyhoff.jpg",
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

    const aboutRef = useRef(null);
    const teamRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="rush-container">
            <RushBox scrollFunc={scrollToSection} aboutRef={aboutRef} teamRef={teamRef}></RushBox>
            <h1 ref={aboutRef} className="why-tke-section">Why Rush TKE at UW?</h1>
            <WhySection></WhySection>
            <h1 ref={teamRef} className="meet-our-team-section">Meet Our Team</h1>
            <div className="rush-profile-container">
                <RushProfile input = {headRushData} className="box"></RushProfile>
                <RushProfile input = {chair1Data} className="box"></RushProfile>
                <RushProfile input = {chair2Data} className="box"></RushProfile>
                <RushProfile input = {chair3Data} className="box"></RushProfile>
                {/* <div className="rush-chairs-image-box">
                    <img src={"./rush-gallery/tke-rush-chairs.jpg"} className="rush-chairs-image"></img>
                </div> */}
            </div>
        </div>
    );
}

export default Rush;