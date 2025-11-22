import React from 'react';
import heroImage from '../assets/images/works-hero.png';
import { worksData } from '../articles/worksData.js'; // データを読み込む

function Works() {
    return (
        <div className="page-container">
            <div className="hero-section">
                <img src={heroImage} alt="Works Hero" className="hero-image" />
                <h1 className="page-title">WORKS</h1>
            </div>
            <p>Here are my works.</p>

            <div className="grid-container">
                {worksData.map((item) => (
                    <div key={item.id} className="grid-card">
                        {/* 画像があれば表示 */}
                        {item.image && <img src={item.image} alt={item.title} className="grid-image" />}

                        <div className="grid-content">
                            <h3>{item.title}</h3>
                            <div className="tags">
                                {item.tools.map(tool => <span key={tool} className="tag">{tool}</span>)}
                            </div>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Works;
