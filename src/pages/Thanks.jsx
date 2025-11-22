import React from 'react';
import { Link } from 'react-router-dom';

function Thanks() {
    return (
        <div className="page-container" style={{ textAlign: 'center', padding: '4rem 1rem' }}>
            <h1 className="section-title">Thank You</h1>
            <p style={{ marginBottom: '2rem' }}>Your message has been sent successfully.</p>
            <Link to="/" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>
                Back to Home
            </Link>
        </div>
    );
}

export default Thanks;
