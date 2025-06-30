import React, { useState } from 'react';
import './ImageCarousel.css';

function ImageCarousel({images}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="carousel-container">
            <button onClick={goToPrevious} className="nav-button left">‹</button>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel-image" />
            <button onClick={goToNext} className="nav-button right">›</button>
        </div>
    );
}

export default ImageCarousel;