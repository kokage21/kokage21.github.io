import React from 'react';

const Profile = () => {
    return (
        <div className="container section">
            <h1 className="section-title">Profile</h1>
            <div className="profile-content">
                <p>About me...</p>
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
