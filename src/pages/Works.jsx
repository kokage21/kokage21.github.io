import React from 'react';
import heroImage from '../assets/images/works-hero.png';
import { worksPosts } from '../assets/articles/worksPosts.js';

function Works() {
    return (
        <div className="page-container">
            <div className="hero-section">
                <img src={heroImage} alt="Works Hero" className="hero-image" />
                <h1 className="page-title">WORKS</h1>
            </div>

            <p className="page-description">
                Here are my works.
            </p>

            <div className="blog-list-container">
                {worksPosts.map((item) => (
                    <article key={item.id} id={`work-${item.id}`} className="blog-card">

                        {/* 画像エリア */}
                        {item.image && (
                            <div className="blog-image-wrapper">
                                <img src={item.image} alt={item.title} className="blog-card-image" />
                            </div>
                        )}

                        {/* 文章エリア */}
                        <div className="blog-text-area">
                            <div className="blog-header">
                                <h2 className="blog-title">{item.title}</h2>

                                {/* ★ここをBLOG/LIBRARYと統一！ */}
                                <div className="blog-meta">
                                    {/* 日付 */}
                                    <span className="blog-date">{item.date}</span>

                                    {/* ツール（タグ）を並べる */}
                                    {item.tools.map(tool => (
                                        <span key={tool} className="tag-mini">{tool}</span>
                                    ))}
                                </div>
                            </div>

                            <p className="blog-content">{item.description}</p>
                        </div>

                    </article>
                ))}
            </div>
        </div>
    );
}

export default Works;