// Main component for rush page. Shows four rush chairs and their information.
// See FOR MAINTAINING tags.

import React from "react";
import { RushProfile } from "../Components/RushProfile.js"

// FOR MAINTAINING: Change the following entries to match the updated rush chairs.
const headRushData = {
    img: "../../public/logo512.png",
    name: "Trevor Berry",
    phone: "(425) 599-9335",
    email: "",
    insta: ""
};

const chair1Data = {
    img: "../../public/logo512.png",
    name: "Andy Hoff",
    phone: "(206) 771-3332",
    email: "",
    insta: ""
};

const chair2Data = {
    img: "../../public/logo512.png",
    name: "Carter Thompson",
    phone: "(425) 553-9999",
    email: "",
    insta: ""
};

const chair3Data = {
    img: "../../public/logo512.png",
    name: "Vishal Grimella",
    phone: "(510) 561-8086",
    email: "",
    insta: ""
};



// Render main component.
function Rush() {
    return (
        <div className="box-container">
            <RushProfile input = {headRushData} className="box"></RushProfile>
            <RushProfile input = {chair1Data} className="box"></RushProfile>
            <RushProfile input = {chair2Data} className="box"></RushProfile>
            <RushProfile input = {chair3Data} className="box"></RushProfile>
        </div>
    );
}

export default Rush;