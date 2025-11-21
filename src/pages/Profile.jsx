import React from 'react';
import heroImage from '../assets/images/profile-hero.png';

function Profile() {
    return (
        <div className="page-container">
            <div className="hero-section">
                <img src={heroImage} alt="Profile Hero" className="hero-image" />
                <h1 className="page-title">PROFILE</h1>
            </div>
            <div className="profile-content">
                <p>About me.</p>
                <div style={{ marginTop: '2rem' }}>
                    <a href="mailto:your.email@example.com" className="contact-link" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>
                        Contact Me via Email
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Profile;
