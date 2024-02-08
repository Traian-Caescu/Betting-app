import React from 'react';
import './PlayerPerformance.css'; // Ensure you link the corresponding CSS file for styling

const PlayerPerformance = () => {
  // Placeholder data - replace with actual data from your source
  const playerStats = [
    {
      name: "Lionel Messi",
      team: "Barcelona",
      goals: 2,
      assists: 1,
      tackles: 3,
    },
    {
      name: "Cristiano Ronaldo",
      team: "Manchester United",
      goals: 1,
      assists: 2,
      tackles: 1,
    },
    // Add more players as needed
  ];

  return (
    <div className="player-performance">
      <h2>Player Performances</h2>
      <div className="players-grid">
        {playerStats.map((player, index) => (
          <div key={index} className="player-stat">
            <h3>{player.name} ({player.team})</h3>
            <p>Goals: {player.goals}</p>
            <p>Assists: {player.assists}</p>
            <p>Tackles: {player.tackles}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerPerformance;
