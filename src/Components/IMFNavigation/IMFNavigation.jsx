import React from 'react';
import './IMFNavigation.css';
// Import images
import blog from '../../assets/blog.jpg';
import podcast from '../../assets/podcasts.jpg';
import country from '../../assets/country.jpg';  // This is imported as 'country'

const IMFNavigation = () => {
  const navItems = [
    { 
      title: "IMF BLOG", 
      link: "/blog",
      icon: blog
    },
    { 
      title: "IMF PODCASTS", 
      link: "/podcasts",
      icon: podcast
    },
    { 
      title: "IMF COUNTRY FOCUS", 
      link: "/country-focus",
      icon: country  // Changed from 'countryF' to 'country' to match the import
    }, ,
    
  ];


  return (
    <div className="imf-navigation">
      <div className="nav-container">
        {navItems.map((item, index) => (
          <a key={index} href={item.link} className="nav-item">
            <span className="nav-title">{item.title}</span>
            <img 
              src={item.icon} 
              alt="" 
              className="nav-icon"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default IMFNavigation;