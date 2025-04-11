import React from 'react';
import './TopicsSection.css';

const TopicsSection = () => {
  const topics = [
    "Artificial Intelligence (AI)",
    "Fiscal Issues at the IMF",
    "Low-Income Countries",
    "Comprehensive Surveillance Review",
    "Governance and Anti-Corruption",
    "Sovereign Debt",
    "Special Drawing Rights (SDR)",
    "Fintech",
    "IMF & the Group of Twenty",
    "SEE ALL TOPICS"
  ];

  return (
    <div className="topics-container">
      <h2 className="topics-header">Topics</h2>
      <div className="topics-grid">
        {topics.map((topic, index) => (
          <div 
            key={index} 
            className={`topic-item ${index === topics.length - 1 ? 'see-all' : ''}`}
          >
            {topic}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicsSection;