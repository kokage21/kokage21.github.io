import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  const location = useLocation();

  return (
    <div className="layout">
      <header className="header">
        <div className="container header-content">
          <Link to="/" className="logo">KOKAGE21</Link>
          <nav className="nav">
            <ul className="nav-list">
              <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>HOME</Link></li>
              <li><Link to="/works" className={location.pathname === '/works' ? 'active' : ''}>WORKS</Link></li>
              <li><Link to="/library" className={location.pathname === '/library' ? 'active' : ''}>LIBRARY</Link></li>
              <li><Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>GALLERY</Link></li>
              <li><Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>BLOG</Link></li>
              <li><Link to="/profile" className={location.pathname === '/profile' ? 'active' : ''}>PROFILE</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} My Personal Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
