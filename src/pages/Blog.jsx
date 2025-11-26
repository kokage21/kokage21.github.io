import React from 'react';
import heroImage from '../assets/images/blog-hero.png';
import { blogPosts } from '../assets/articles/blogPosts.js';

function Blog() {
    return (
        <div className="page-container">
            <div className="hero-section">
                <img src={heroImage} alt="Blog Hero" className="hero-image" />
                <h1 className="page-title">BLOG</h1>
            </div>

            <p className="page-description">
                日々の出来事や気になったことを、書いていきます
            </p>

            <div className="blog-list-container">
                {blogPosts.map((post) => (
                    <article key={post.id} id={`post-${post.id}`} className="blog-card">

                        {/* 画像があるときだけ表示する（nullなら消える） */}
                        {post.image && (
                            <div className="blog-image-wrapper">
                                <img src={post.image} alt={post.title} className="blog-card-image" />
                            </div>
                        )}

                        <div className="blog-text-area">
                            <div className="blog-header">
                                <h2 className="blog-title">{post.title}</h2>

                                <div className="blog-meta">
                                    <span className="blog-date">{post.date}</span>
                                    <span className="tag-mini">{post.category}</span>
                                </div>
                            </div>
                            <p className="blog-content">{post.content}</p>
                        </div>

                    </article>
                ))}
            </div>
        </div>
    );
}

export default Blog;