import React from 'react';
import './MatchStatistics.css'; // Link to the CSS file for styling

const MatchStatistics = () => {
  // Placeholder data - replace with actual data from your source
  const statistics = {
    possession: { home: '60%', away: '40%' },
    shotsOnTarget: { home: 8, away: 5 },
    corners: { home: 6, away: 4 },
    fouls: { home: 10, away: 12 },
  };

  return (
    <div className="match-statistics">
      <h2>Match Statistics</h2>
      <div className="statistics-grid">
        {Object.entries(statistics).map(([key, value]) => (
          <div key={key} className="statistic">
            <h3>{key.replace(/([A-Z])/g, ' $1').charAt(0).toUpperCase() + key.slice(1)}</h3>
            <div className="statistic-values">
              <span>Home: {value.home}</span>
              <span>Away: {value.away}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchStatistics;
