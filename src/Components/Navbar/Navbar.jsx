import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.jpg';
import imf from '../../assets/imf.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="top-section">
  <div className="imf-header">
    <img src={imf} alt="IMF Logo" className="imf-image" />
    <Link to="/" className="imf-heading">
      <h1>INTERNATIONAL MONETARY FUND</h1>
    </Link>
        <nav>
          <ul>
            <li>ABOUT</li>
            <li>RESEARCH</li>
            <li>COUNTRIES</li>
            <li>CAPACITY DEVELOPMENT</li>
            <li>NEWS</li>
            <li>VIDEOS</li>
            <li>DATA</li>
            <li>PUBLICATION</li>
            <li>
              <Link to="/contactpage">CONTACT PAGE</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Fullscreen Image Below */}
      <div className="fullscreen-image">
        <img src={logo} alt="Background" className="bg-image" />
        <div className="image-text">
          Country Focus: Korea's Rapid Aging Doesn't Have To Be Economic Destiny
        </div>
      </div>
    </div>
  );
}

export default Navbar;