import React from 'react';
import './MatchSummary.css'; // Ensure you create and link the corresponding CSS file for styling

const MatchSummary = () => {
  // Placeholder data - replace with actual data as needed
  const matchInfo = {
    date: "2024-02-10",
    time: "15:00",
    teams: {
      home: "Manchester United",
      away: "Barcelona"
    },
    location: "Old Trafford, Manchester"
  };

  return (
    <div className="match-summary">
      <h2>Match Summary</h2>
      <div className="match-details">
        <p><strong>Date & Time:</strong> {matchInfo.date} at {matchInfo.time}</p>
        <p><strong>Location:</strong> {matchInfo.location}</p>
        <div className="teams">
          <h3>{matchInfo.teams.home} vs {matchInfo.teams.away}</h3>
        </div>
      </div>
    </div>
  );
};

export default MatchSummary;
