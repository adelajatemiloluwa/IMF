import React from 'react';
import './IMFPressRelease.css';
// Import your images (make sure to add these files to your project)
import Pressrelease from '../../assets/imf-press-release.jpg';
import imfgeneric from '../../assets/imf-generic-1.jpg';
import bonds from '../../assets/b2b-bonds-thumbnail-eng-16x9.jpg';

const IMFPressRelease = () => {
  return (
    <div className="imf-press-release">
      <div className="sections-container">
        {/* Section 1 */}
        <section className="press-section">
          <div className="section-image-container">
            <img src={Pressrelease} alt="" className="section-image" />
          </div>
          <h3>Statement by Kristalina Georgieva</h3>
          <div className="press-release-item">
            <span className="press-release-tag">PRESS RELEASE</span>
            <p>IMF Managing Director Kristalina Georgieva's statement on yesterday's announcement of U.S. tariffs.</p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="press-section">
          <div className="section-image-container">
            <img src={imfgeneric} alt="" className="section-image" />
          </div>
          <h3>Entrepreneurship and Growth</h3>
          <div className="press-release-item">
            <span className="press-release-tag">PRESS RELEASE</span>
            <p>Advisory Council formed to boost entrepreneurship and productivity through macroeconomic and financial policies.</p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="press-section">
          <div className="section-image-container">
            <img src={bonds} alt="" className="section-image" />
          </div>
          <p className="bonds-question">What are Bonds?</p>
          <div className="press-release-item">
            <span className="press-release-tag">WATCH</span>
            <p>Our latest Back to Basics video explains what are bonds and why they play a crucial role in the financial world.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default IMFPressRelease;
