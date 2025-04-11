import React from 'react';
import './Publications.css';
import we1 from '../../assets/we1.png'
import we2 from '../../assets/we2.png'
import we3 from '../../assets/we3.png'
import we4 from '../../assets/we4.jpg'
import we5 from '../../assets/we5.jpg'
import we6 from '../../assets/we6.jpg'
const Publications = () => {
  const publications = [
    {
      id: 1,
      category: "WORLD ECONOMIC OUTLOOK",
      Image: we6, 
      items: [
        { date: "JANUARY 2025", title: "Global Growth: Divergent and Uncertain" }
      ]
    },
    {
      id: 2,
      category: "GLOBAL FINANCIAL STABILITY REPORT",
      items: [
        { date: "OCTOBER 2024", title: "Steadying the Courses Uncertainty, Artificial Intelligence, and Financial Stability" }
      ]
    },
    {
      id: 3,
      category: "FISCAL MONITOR",
      items: [
        { date: "OCTOBER 2024", title: "Putting a Lid on Public Debt" }
      ]
    },
    {
      id: 4,
      category: "REGIONAL ECONOMIC OUTLOOK",
      items: [
        { date: "REVOLUTION OF THE SECOND EDITION", title: "REGIONAL ECONOMIC OUTLOOK" },
        { date: "Latest Issues", title: "" }
      ]
    },
    {
      id: 5,
      category: "FRIDGE",
      items: [
        { date: "MARCH 2025", title: "FINANCE & DEVELOPMENT" },
        { date: "The Talent Equation", title: "" }
      ]
    },
    {
      id: 6,
      category: "",
      items: [
        { date: "SEPTEMBER 2024", title: "ANNUAL REPORT" },
        { date: "Resilience in the Face of Change", title: "" }
      ]
    }
  ];

  return (
    <div className="publications">
      <h1 className="section-title">Publications</h1>
      
      <div className="publications-grid">
        {publications.map((pub) => (
          <div key={pub.id} className="publication-card">
            {/* Image placeholder - uncomment and add your images */}
            {/* <img src={} alt={pub.category} className="publication-image" /> */}
            
            <div className="publication-content">
              {pub.category && <h2 className="publication-category">{pub.category}</h2>}
              
              <ul className="publication-items">
                {pub.items.map((item, index) => (
                  <li key={index} className="publication-item">
                    {item.date && <span className="publication-date">{item.date}</span>}
                    {item.title && <p className="publication-title">{item.title}</p>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;