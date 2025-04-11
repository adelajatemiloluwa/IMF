import React from 'react';
import './ResourcesNav.css';
import Bank from '../../assets/Bank.png';
import youth from '../../assets/youth-icon.png';
import newspaper from '../../assets/Newspaper.png';
import career from '../../assets/Career.png';
import person from '../../assets/person-group.png';

const ResourcesNav = () => {
  return (
    <div className="resources-nav-container">
      <div className="resources-nav-header">Resources For</div>
      <div className="resources-nav-items">
        <div className="nav-item">
          <img src={person} alt="Civil Society" className="nav-icon" />
          <span>CIVIL SOCIETY</span>
        </div>
        <div className="nav-item">
          <img src={youth} alt="Youth" className="nav-icon" />
          <span>YOUTH</span>
        </div>
        <div className="nav-item">
          <img src={newspaper} alt="Journalists" className="nav-icon" />
          <span>JOURNALISTS</span>
        </div>
        <div className="nav-item">
          <img src={Bank} alt="Legislators" className="nav-icon" />
          <span>LEGISLATORS</span>
        </div>
        <div className="nav-item">
          <img src={career} alt="Careers" className="nav-icon" />
          <span>CAREERS</span>
        </div>
      </div>
    </div>
  );
};

export default ResourcesNav;