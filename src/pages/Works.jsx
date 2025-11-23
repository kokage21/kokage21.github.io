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

            {/* ★修正1：grid-container を blog-list-container に変更 */}
            <div className="blog-list-container">
                {worksPosts.map((item) => (
                    // ★修正2：grid-card を blog-card に変更
                    <article key={item.id} id={`work-${item.id}`} className="blog-card">

                        {/* ★修正3：画像エリア（BLOGと同じ構造にする） */}
                        {item.image && (
                            <div className="blog-image-wrapper">
                                <img src={item.image} alt={item.title} className="blog-card-image" />
                            </div>
                        )}

                        {/* ★修正4：文章エリア（BLOGと同じ構造にする） */}
                        <div className="blog-text-area">
                            {/* タイトルとタグ */}
                            <div className="blog-header">
                                <h2 className="blog-title">{item.title}</h2>

                                {/* ツール名（タグ）の表示エリア */}
                                <div className="tags" style={{ marginBottom: '1rem' }}>
                                    {item.tools.map(tool => (
                                        <span key={tool} className="tag">{tool}</span>
                                    ))}
                                </div>
                            </div>

                            {/* 説明文 */}
                            <p className="blog-content">{item.description}</p>
                        </div>

                    </article>
                ))}
            </div>
        </div>
    );
}

export default Works;