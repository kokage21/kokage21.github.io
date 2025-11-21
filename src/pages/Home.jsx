import React from 'react';
import heroImage from '../assets/images/home-hero.png';

function Home() {
    return (
        <div className="page-container">
            <div className="hero-section">
                <img src={heroImage} alt="Home Hero" className="hero-image" />
                <h1 className="page-title">HOME</h1>
            </div>
            <p>Welcome to my personal website.</p>
        </div>
    );
}

export default Home;
