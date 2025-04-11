import React from 'react';
import './AccountabilitySection.css';
import phone from '../../assets/phone.svg';
import Bulb from '../../assets/Bulb.svg';
import coporate from '../../assets/corporate.svg';
import giving from '../../assets/Giving.svg';

const AccountabilitySection = () => {
    const accountabilityItems = [
      {
        title: "IMF INTEGRITY HOTLINE",
        subtitle: "+1 800 548 5384",
        icon: phone
      },
      {
        title: "INDEPENDENT",
        subtitle: "EVALUATION OFFICE",
        icon: Bulb
      },
      {
        title: "CORPORATE",
        subtitle: "RESPONSIBILITY",
        icon: coporate
      },
      {
        title: "IMF GIVING",
        subtitle: "TOGETHER",
        icon: giving
      }
    ];
  
    return (
      <div className="accountability-container">
        <h2 className="accountability-header">Accountability</h2>
        <div className="accountability-grid">
          {accountabilityItems.map((item, index) => (
            <div key={index} className="accountability-item">
              <div className="accountability-icon-container">
                <img src={item.icon} alt={item.title} className="accountability-icon" />
              </div>
              <div className="accountability-text">
                <div className="accountability-title">{item.title}</div>
                <div className="accountability-subtitle">{item.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default AccountabilitySection;