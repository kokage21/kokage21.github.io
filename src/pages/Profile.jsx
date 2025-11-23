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

            {/* ここが中央寄せの箱になります */}
            <div className="profile-content">

                {/* 他ページと同じ説明文のスタイルを適用 */}
                <p className="page-description">
                    About me.
                </p>

                <div style={{ marginTop: '2rem', marginBottom: '3rem' }}>
                    {/* 見出しに少し線を入れるとかっこよくなります */}
                    <h2 style={{
                        fontSize: '1.5rem',
                        marginBottom: '1.5rem',
                        borderBottom: '1px solid #333',
                        paddingBottom: '0.5rem'
                    }}>
                        Contact
                    </h2>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default Profile;