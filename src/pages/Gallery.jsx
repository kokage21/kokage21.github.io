import React from 'react';
import heroImage from '../assets/images/gallery-hero.png';
// ★データファイルを読み込む
import { galleryPosts } from '../assets/articles/galleryPosts.js';

function Gallery() {
    return (
        <div className="page-container">
            <div className="hero-section">
                <img src={heroImage} alt="Gallery Hero" className="hero-image" />
                <h1 className="page-title">GALLERY</h1>
            </div>
            <p className="page-description">
                Photo gallery & Artworks.
            </p>

            {/* 統一されたコンテナクラス */}
            <div className="blog-list-container">
                {galleryPosts.map((art) => (
                    <article key={art.id} id={`art-${art.id}`} className="blog-card">

                        {/* 左：画像エリア */}
                        {art.image && (
                            <div className="blog-image-wrapper">
                                <img src={art.image} alt={art.title} className="blog-card-image" />
                            </div>
                        )}

                        {/* 右：文章エリア */}
                        <div className="blog-text-area">
                            <div className="blog-header">
                                <h2 className="blog-title">{art.title}</h2>

                                <div className="blog-meta">
                                    <span className="blog-date">{art.date}</span>
                                    <span className="tag-mini">{art.category}</span>

                                    {/* ★GALLERY特有：場所があれば表示 */}
                                    {art.location && (
                                        <span style={{ marginLeft: '10px', fontSize: '0.8rem', color: '#666' }}>
                                            📍 {art.location}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <p className="blog-content">{art.content}</p>
                        </div>

                    </article>
                ))}
            </div>
        </div>
    );
}

export default Gallery;