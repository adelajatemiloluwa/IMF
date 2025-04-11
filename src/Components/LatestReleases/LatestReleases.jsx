import React from 'react';
import './LatestReleases.css';

const LatestReleases = () => {
  const releases = [
    {
      title: "Greece: Selected Issues",
      date: "APRIL 7, 2025"
    },
    {
      title: "Greece: 2025 Article IV Consultation-Press Release; Staff Report; and Statement by the Executive Director for Greece",
      date: "APRIL 7, 2025"
    },
    {
      title: "IMF Executive Board Concludes 2024 Financial System Stability Assessment with the People's Republic of China",
      date: "APRIL 4, 2025"
    },
    {
      title: "Curaçao and Sint Maarten: Systemic Risk and Financial Stability, Financial Stability Report",
      date: "APRIL 4, 2025"
    },
    {
      title: "IMF Executive Board Concludes 2025 Article IV Consultation with Greece",
      date: "APRIL 4, 2025"
    },
    {
      title: "Ireland: Staff Concluding Statement of the 2025 Article IV Mission",
      date: "APRIL 4, 2025"
    },
    {
      title: "IMF Staff Reached Staff-level Agreement on the Fifth Review of the Rwanda's Policy Coordination Instrument",
      date: "APRIL 4, 2025"
    },
    {
      title: "Dominica: Staff Concluding Statement of the 2025 Article IV Mission",
      date: "APRIL 4, 2025"
    }
  ];

  return (
    <div className="latest-releases">
      <h1 className="section-title">Latest Releases</h1>
      
      <div className="releases-list">
        {releases.map((release, index) => (
          <div key={index} className="release-item">
            <h2 className="release-title">{release.title}</h2>
            <p className="release-date">{release.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestReleases;