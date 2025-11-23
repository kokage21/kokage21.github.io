import React from 'react';
import heroImage from '../assets/images/gallery-hero.png';
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

            {/* ★ここからGALLERY専用レイアウト */}
            <div className="gallery-container">
                <div className="gallery-grid">
                    {galleryPosts.map((art) => (
                        <div key={art.id} id={`art-${art.id}`} className="gallery-item">

                            {/* 写真エリア（正方形のタイル） */}
                            {art.image && (
                                <img
                                    src={art.image}
                                    alt={art.title}
                                    className="gallery-thumb"
                                />
                            )}

                            {/* 情報エリア（日付と場所のみ） */}
                            <div className="gallery-info">
                                <span>{art.date}</span>

                                {/* 場所がある場合のみ表示 */}
                                {art.location && (
                                    <>
                                        <span style={{ opacity: 0.5 }}>|</span> {/* 区切り線 */}
                                        <span>📍 {art.location}</span>
                                    </>
                                )}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Gallery;