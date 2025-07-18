import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import TkeFlag from '../Components/tkeFlag';
import "./About.css"

function About() {
    const headingRef = useRef(null);

    // Duplicate text content to "overlaid-text" field for multicoloring on mount
    useEffect(() => {
        if (headingRef.current) {
            headingRef.current.setAttribute("overlaid-text", headingRef.current.textContent);
        }
    }, []);

    return (
        <div className='about-container'>
            <div className='about-box'>
                <TkeFlag>
                    <h1 ref={headingRef} className='about-flag-foreground'>TAU KAPPA EPSILON</h1>
                </TkeFlag>
            </div>
        </div>
    );
}

export default About;