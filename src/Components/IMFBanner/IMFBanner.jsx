import React from 'react';
import './IMFBanner.css';
import spring from '../../assets/spring.png'; // Make sure to add your IMF logo image

const IMFBanner = () => {
  return (
    <div className="imf-banner">
      <div className="header-container">
        <img src={spring} alt="IMF Logo" className="logo-image" />
        <div className="header-text">
          <h1>SPRING MEETINGS</h1>
          <h2>2025 IMAGINATION DC INTERNATIONAL MOMENT FUND</h2>
        </div>
      </div>

      <div className="meeting-details">
        <p>
          The 2025 Spring Meetings of the World Bank Group and the International Monetary Fund will take place from Monday, April 21 to Saturday, April 26. <span className="hashtag">#IMFmeetings</span>
        </p>
      </div>

      <div className="action-buttons">
        <button className="register-btn">REGISTER</button>
        <button className="schedule-btn">SCHEDULE</button>
      </div>

      <div className="sdr-rates">
        <div className="rate-item">
          <span>SDR RATES FOR APRIL 7, 2025</span>
        </div>
        <div className="rate-divider">/</div>
        <div className="rate-item">
          <span>SDR INTEREST RATE = 3.058%</span>
        </div>
        <div className="rate-divider">/</div>
        <div className="rate-item">
          <span>1 USD = SDR 0.74986</span>
          <span className="rate-change"></span>
        </div>
      </div>
    </div>
  );
};

export default IMFBanner;