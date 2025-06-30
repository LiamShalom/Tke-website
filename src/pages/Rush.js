import React from "react";
import { RushProfile } from "../Components/RushProfile.js"

const trevorData = {
    img: "../../public/logo512.png",
    name: "Trevor Berry",
    phone: "(425) 599-9335",
    email: "",
    insta: ""
};

function Rush() {

    return (
        <div className="box-container">
            <RushProfile input = {trevorData} className="box">Trevor</RushProfile>
            <div className="box">Andy</div>
            <div className="box">Carter</div>
            <div className="box">Vishal</div>
        </div>
    );
}

export default Rush;