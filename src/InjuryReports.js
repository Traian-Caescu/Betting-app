import React from 'react';
import './InjuryReports.css';

const injuries = [
  {
    team: 'Chelsea',
    players: [
      { name: 'Reece James', position: 'Right-back', injury: 'Hamstring', returnDate: '2 weeks' },
      { name: 'Christopher Nkunku', position: 'Forward', injury: 'Hip', returnDate: '1 week' },
      { name: 'Wesley Fofana', position: 'Centre-back', injury: 'ACL', returnDate: '6 months' },
    ],
  },
  {
    team: 'Arsenal',
    players: [
      { name: 'Thomas Partey', position: 'Midfielder', injury: 'Thigh', returnDate: '3 weeks' },
      { name: 'Gabriel Martinelli', position: 'Forward', injury: 'Ankle', returnDate: '1 week' },
      { name: 'Kieran Tierney', position: 'Left-back', injury: 'Knee', returnDate: '1 month' },
    ],
  },
];

const InjuryReports = () => {
  return (
    <div className="injury-reports">
      <h2>Injury Reports</h2>
      {injuries.map(injuryReport => (
        <div key={injuryReport.team} className="injury-report">
          <h3>{injuryReport.team}</h3>
          <ul>
            {injuryReport.players.map(player => (
              <li key={player.name}>
                <span>{player.name}, {player.position}</span>
                <span className="injury">{player.injury}</span>
                <span className="return-date">Expected Return: {player.returnDate}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default InjuryReports;
