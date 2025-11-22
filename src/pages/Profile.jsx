import React from 'react';
import heroImage from '../assets/images/profile-hero.png';
import ContactForm from '../components/ContactForm';

function Profile() {
    return (
        <div className="page-container">
            <div className="hero-section">
                <img src={heroImage} alt="Profile Hero" className="hero-image" />
                <h1 className="page-title">PROFILE</h1>
            </div>
            <div className="profile-content">
                <p>About me.</p>
                <div style={{ marginTop: '2rem', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Contact</h2>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default Profile;
