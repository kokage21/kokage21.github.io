import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/images/home-hero.png';

import { blogPosts } from '../assets/articles/blogPosts.js';
import { worksPosts } from '../assets/articles/worksPosts.js';
import { libraryPosts } from '../assets/articles/libraryPosts.js';
import { isNewPost } from '../utils/dateUtils.js';

function Home() {

    // Blog
    const featuredBlogs = blogPosts
        .filter(post => post.featured)
        .map(post => ({
            id: `blog-${post.id}`,
            title: post.title,
            image: post.image,
            category: "BLOG / " + post.category,
            description: post.content.substring(0, 40) + "...",
            link: `/blog#post-${post.id}`,
            date: post.date
        }));

    // Works
    const featuredWorks = worksPosts
        .filter(work => work.featured)
        .map(work => ({
            id: `work-${work.id}`,
            title: work.title,
            image: work.image,
            category: "WORKS / " + work.category,
            description: work.description,
            link: `/works#work-${work.id}`,
            date: work.date
        }));

    // Library（★ここを復活させます！）
    const featuredLibrary = libraryPosts
        .filter(book => book.featured)
        .map(book => ({
            id: `book-${book.id}`,
            title: book.title,
            image: book.image,
            category: "LIBRARY / " + book.category,
            description: book.content.substring(0, 40) + "...",
            link: `/library#book-${book.id}`,
            date: book.date
        }));

    const dashboardItems = [
        ...featuredBlogs,
        ...featuredWorks,
        ...featuredLibrary // ★ここも復活！
    ]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 6);

    return (
        <div className="page-container">
            <div className="hero-section">
                <img src={heroImage} alt="Home Hero" className="hero-image" />
                <h1 className="page-title">HOME</h1>
            </div>

            <p className="page-description">
                Welcome to KOKAGE Works! <br />
                最新の活動記録です。
            </p>

            <div className="grid-container">
                {dashboardItems.map((item) => (
                    <Link key={item.id} to={item.link} className="grid-card">

                        {/* カンマの後に数字を入れる（例：3日以内ならNew） */}
                        {isNewPost(item.date, 3) && (
                            <span className="new-badge">New!</span>
                        )}

                        {item.image && <img src={item.image} alt={item.title} className="grid-image" />}

                        <div className="grid-content">
                            <h3>{item.title}</h3>

                            <div style={{ fontSize: '0.85rem', color: '#888', marginBottom: '0.5rem' }}>
                                {item.date}
                            </div>

                            <div className="tags">
                                <span className="tag">{item.category}</span>
                            </div>
                            <p>{item.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Home;