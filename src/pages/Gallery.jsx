import React from 'react';
import heroImage from '../assets/images/gallery-hero.png';

function Gallery() {
    return (
        <div className="page-container">
            <div className="hero-section">
                <img src={heroImage} alt="Gallery Hero" className="hero-image" />
                <h1 className="page-title">GALLERY</h1>
            </div>
            <p>Photo gallery.</p>
        </div>
    );
}

export default Gallery;
