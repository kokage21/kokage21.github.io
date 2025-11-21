import React from 'react';
import heroImage from '../assets/images/blog-hero.png';

function Blog() {
    return (
        <div className="page-container">
            <div className="hero-section">
                <img src={heroImage} alt="Blog Hero" className="hero-image" />
                <h1 className="page-title">BLOG</h1>
            </div>
            <p>My blog posts.</p>
        </div>
    );
}

export default Blog;
