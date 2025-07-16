import React from "react";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './RushBanner.css'

function RushBanner() {
    let location = useLocation()
    const [animationStart, setAnimationStart] = useState(0);

    useEffect(() => {
        setAnimationStart(prev => prev + 1);
    }, [location.pathname]);

    return (
        <div className="rushbanner-container" key={animationStart}>
            <div className="rushbanner-text-container">
                <div className="rushbanner-text-box"><span>\ RUSH TKE \</span></div>
                <div className="rushbanner-text-box"><span>\ RUSH TKE \</span></div>
                <div className="rushbanner-text-box"><span>\ RUSH TKE \</span></div>
                <div className="rushbanner-text-box"><span>\ RUSH TKE \</span></div>
                <div className="rushbanner-text-box"><span>\ RUSH TKE \</span></div>
                <div className="rushbanner-text-box"><span>\ RUSH TKE \</span></div>
                <div className="rushbanner-text-box"><span>\ RUSH TKE \</span></div>
                <div className="rushbanner-text-box"><span>\ RUSH TKE \</span></div>
                <div className="rushbanner-text-box"><span>\ RUSH TKE \</span></div>
            </div>
        </div>
    )
}

export default RushBanner;