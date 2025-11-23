import React from 'react';
import heroImage from '../assets/images/library-hero.png';
// ★作成したデータを読み込む
import { libraryPosts } from '../assets/articles/libraryPosts.js';

function Library() {
    return (
        <div className="page-container">
            <div className="hero-section">
                <img src={heroImage} alt="Library Hero" className="hero-image" />
                <h1 className="page-title">LIBRARY</h1>
            </div>

            <p className="page-description">
                Books I have read.
            </p>

            {/* BLOGと同じコンテナクラスを使う */}
            <div className="blog-list-container">
                {libraryPosts.map((book) => (
                    <article key={book.id} id={`book-${book.id}`} className="blog-card">

                        {/* 左：画像エリア */}
                        {book.image && (
                            <div className="blog-image-wrapper">
                                <img src={book.image} alt={book.title} className="blog-card-image" />
                            </div>
                        )}

                        {/* 右：文章エリア */}
                        <div className="blog-text-area">
                            <div className="blog-header">
                                <h2 className="blog-title">{book.title}</h2>

                                <div className="blog-meta">
                                    {/* ★本ならでは：著者名を表示 */}
                                    <span style={{ fontWeight: 'bold', marginRight: '10px', color: '#555' }}>
                                        {book.author}
                                    </span>
                                    <span className="blog-date">{book.date}</span>
                                    <span className="tag-mini">{book.category}</span>
                                </div>
                            </div>

                            <p className="blog-content">{book.content}</p>
                        </div>

                    </article>
                ))}
            </div>
        </div>
    );
}

export default Library;