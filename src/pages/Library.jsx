import React from 'react';
import heroImage from '../assets/images/library-hero.png';
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

            <div className="blog-list-container">
                {libraryPosts.map((book) => {
                    // 1. リンクがあるか、それは外部リンク(http)かを判定
                    const hasLink = !!book.link;
                    const isExternal = hasLink && book.link.startsWith('http');

                    // 2. カードの中身（画像と文章）を変数に入れる
                    const cardContent = (
                        <>
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
                                        <span style={{ fontWeight: 'bold', marginRight: '10px', color: '#aaa' }}>
                                            {book.author}
                                        </span>
                                        <span className="blog-date">{book.date}</span>
                                        <span className="tag-mini">{book.category}</span>
                                    </div>
                                </div>
                                <p className="blog-content">{book.content}</p>
                            </div>
                        </>
                    );

                    // 3. 判定結果によって、使うタグ（入れ物）を使い分ける

                    // A. 外部リンクの場合（Amazonなど） -> <a>タグで別タブを開く
                    if (isExternal) {
                        return (
                            <a
                                key={book.id}
                                href={book.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="blog-card"
                                // リンクの下線を消し、文字色を維持するスタイル
                                style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
                            >
                                {cardContent}
                            </a>
                        );
                    }

                    // B. リンクがない場合 -> ただの <article> (クリックできない)
                    return (
                        <article key={book.id} id={`book-${book.id}`} className="blog-card">
                            {cardContent}
                        </article>
                    );
                })}
            </div>
        </div>
    );
}

export default Library;