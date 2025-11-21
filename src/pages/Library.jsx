import React from 'react';
import heroImage from '../assets/images/library-hero.png';

function Library() {
    return (
        <div className="page-container">
            <div className="hero-section">
                <img src={heroImage} alt="Library Hero" className="hero-image" />
                <h1 className="page-title">LIBRARY</h1>
            </div>
            <p>Books I have read.</p>
        </div>
    );
}

export default Library;
