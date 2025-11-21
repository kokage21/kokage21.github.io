import React from 'react';
import heroImage from '../assets/images/works-hero.png';

function Works() {
    return (
        <div className="page-container">
            <div className="hero-section">
                <img src={heroImage} alt="Works Hero" className="hero-image" />
                <h1 className="page-title">WORKS</h1>
            </div>
            <p>Here are my works.</p>
        </div>
    );
}

export default Works;
