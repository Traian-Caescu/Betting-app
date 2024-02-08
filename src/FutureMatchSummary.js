import React from 'react';
import './FutureMatchSummary.css'; // Make sure to create a corresponding CSS file for styling

const FutureMatchSummary = ({ match }) => {
  return (
    <div className="future-match-summary">
      <h2>Upcoming Match</h2>
      <div className="match-details">
        <p><strong>Date & Time:</strong> {match.date}</p>
        <p><strong>Location:</strong> {match.venue}</p>
        <h3>{match.homeTeam} vs {match.awayTeam}</h3>
      </div>
    </div>
  );
};

export default FutureMatchSummary;
