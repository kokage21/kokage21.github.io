import React from 'react';
import { Link } from 'react-router-dom'; // ★修正1：これを忘れると動かない！
import heroImage from '../assets/images/home-hero.png';

import { blogPosts } from '../assets/articles/blogPosts.js';
import { worksPosts } from '../assets/articles/worksPosts.js';

function Home() {

    // Blogからの選抜
    const featuredBlogs = blogPosts
        .filter(post => post.featured)
        .map(post => ({
            id: `blog-${post.id}`,
            title: post.title,
            image: post.image,
            category: "BLOG / " + post.category,
            description: post.content.substring(0, 40) + "...",
            link: `/blog#post-${post.id}`
        }));

    // Worksからの選抜
    // ★修正2：変数を「worksData」から「worksPosts」に修正
    const featuredWorks = worksPosts
        .filter(work => work.featured)
        .map(work => ({
            id: `work-${work.id}`,
            title: work.title,
            image: work.image,
            category: "WORKS / " + work.category,
            description: work.description,
            link: `/works#work-${work.id}` // ※Worksページ側のID設定も忘れずに！
        }));

    // ★修正3：ドット3つ(...)をつけて、配列を「結合」する
    // これがないと、[[blog], [work]] という二重構造になり、mapでエラーになります
    const dashboardItems = [
        ...featuredBlogs,
        ...featuredWorks
    ];

    return (
        <div className="page-container">
            <div className="hero-section">
                <img src={heroImage} alt="Home Hero" className="hero-image" />
                <h1 className="page-title">HOME</h1>
            </div>
            <p className="page-description">
                Welcome to KOKAGE Works. <br />
                最新の活動記録です。
                現在勉強しながらWEBサイト構築中。(ほとんど生成AI頼りですが汗)
            </p>

            <div className="grid-container">
                {/* データがある場合のみ表示する安全策(?.) */}
                {dashboardItems?.map((item) => (
                    <Link key={item.id} to={item.link} className="grid-card">

                        {/* 画像があれば表示 */}
                        {item.image && <img src={item.image} alt={item.title} className="grid-image" />}

                        <div className="grid-content">
                            <h3>{item.title}</h3>
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