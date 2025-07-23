import ImageCarousel from "../Components/ImageCarousel";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from 'react';
import TkeFlag from '../Components/tkeFlag';
import { FaBook } from 'react-icons/fa';
import "./Home.css";

function Home() {

    const images = [
        './tke-photo1.jpg',
        './tke-photo2.jpg',
        './tke-photo3.jpg',
        './tke-photo4.jpg',
        './tke-photo6.jpg',
        './tke-photo7.jpg'
    ];

    const navigate = useNavigate();
    const textOverlayRef = useRef(null);

    // Duplicate text content to "overlaid-text" field for multicoloring on mount
    useEffect(() => {
        if (textOverlayRef.current) {
            textOverlayRef.current.setAttribute("overlaid-text", textOverlayRef.current.textContent);
        }
    }, []);

    return (
        <>
        <div className='home-flag-container'>
            <div className='home-flag-box'>
                <TkeFlag>
                    <h1 ref={textOverlayRef} className='home-flag-foreground'>TAU KAPPA EPSILON</h1>
                </TkeFlag>
            </div>
        </div>
        <div className="home-main">
            <div className="home-header">
                <img className="home-tke-logo" src="TKENewLOGO.png" alt="TKElogo" />
            </div>
            <div className="home-about">
                <h1 className="home-about-header">WHY JOIN TAU KAPPA EPSILON FRATERNITY?</h1>
                <a className="home-about-description">The Chi chapter at the University of Washington is the longest standing TKE chapter in the entire nation.
                    Since 1899 we have partied and made memories to last a lifetime. Joining TKE means becoming a part of something
                    bigger than yourself - you'll find yourself surrounded by likeminded men who will always have your back.
                </a>
                <button type="submit" className="learn-more" onClick={() => navigate('/about')}>Learn More</button>
            </div>
            <div className="home-carousel">
                <ImageCarousel images={images} />
            </div>
            <div className="home-values">
                <div className="home-value-item">
                    <img src="./finish.png" alt="Leadership" width="36px" height="36px" />
                    <div className="home-value-item-content">
                        <div className="home-value-title">Leadership</div>
                        <div className="home-value-description">
                            At TKE, we lead with confidence, purpose, and a strong sense of brotherhood.
                        </div>
                    </div>
                </div>
                <div className="home-value-item">
                    <img src="./multiple-users-silhouette.png" alt="Social" width="36px" height="36px" />
                    <div className="home-value-item-content">
                        <div className="home-value-title">Social</div>
                        <div className="home-value-description">College is about balance, that also includes having a great time.
                        </div>
                    </div>
                </div>
                <div className="home-value-item">
                    <img src="./open-book.png" alt="Academics" width="36px" height="36px" />
                    <div className="home-value-item-content">
                        <div className="home-value-title">Academics</div>
                        <div className="home-value-description">
                            We prioritize academics to graduate smarter, stronger, and ready for what's next.
                        </div>
                    </div>
                </div>
            </div>





        </div>
        </>
    )
}

export default Home;