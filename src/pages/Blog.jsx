import React from 'react';
import heroImage from '../assets/images/blog-hero.png';
// 作成したデータを読み込みます
import { blogPosts } from '../assets/articles/blogPosts';
import '../styles/Blog.css'; // ※後述：スタイルを整えるCSS

function Blog() {
    return (
        <div className="page-container">
            <div className="hero-section">
                <img src={heroImage} alt="Blog Hero" className="hero-image" />
                <h1 className="page-title">BLOG</h1>
            </div>
            {/* ここから記事リストの自動生成エリア */}
            <div className="blog-list-container">
                {blogPosts.map((post) => (
                    <article key={post.id} className="blog-card">
                        <div className="blog-header">
                            <h2 className="blog-title">{post.title}</h2>
                            <div className="blog-meta">
                                <span className="blog-date">{post.date}</span>
                                <span className="blog-category">{post.category}</span>
                            </div>
                        </div>
                        <p className="blog-content">{post.content}</p>
                    </article>
                ))}
            </div>
        </div>
    );
}

export default Blog;
