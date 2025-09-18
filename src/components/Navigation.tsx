import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Aimee Oh
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/about" 
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/projects" 
              className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
