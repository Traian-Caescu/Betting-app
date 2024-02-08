import React from 'react';
import NavigationBar from './NavigationBar';
import FutureMatchSummary from './FutureMatchSummary'; // Component we created earlier
import PotentialLineups from './PotentialLineups';
import BettingOddsGraph from './BettingOddsGraph';
import InjuryReports from './InjuryReports';
import ChancesOfWinning from './ChancesOfWinning';
import BettingAnalysis from './BettingAnalysis';
import Footer from './Footer';
//import './FutureGamesPage.css'; // Ensure you create a CSS file for additional styling

const FutureGamesPage = () => {
    // Mock data for the match summary
    const match = {
      date: "2024-02-10 at 15:00",
      venue: "Wembley, London",
      homeTeam: "Chelsea",
      awayTeam: "Arsenal"
    };
  
    // Mock data for the potential lineups
    const homeTeamLineup = {
      team: 'Chelsea',
      formation: '4-3-3',
      players: [
        
      ]
    };
  
    const awayTeamLineup = {
      team: 'Arsenal',
      formation: '4-2-3-1',
      players: [
        
      ]
    };
  
    // ... other component logic
  return (
    <>
      
      <main className="future-games-page">
        {/* Components will be added here. Ensure to pass the required props */}
        <FutureMatchSummary match={match} />
        <PotentialLineups homeTeamLineup={homeTeamLineup} awayTeamLineup={awayTeamLineup} />
        <BettingOddsGraph />
        <InjuryReports />
        <ChancesOfWinning />
        <BettingAnalysis />
      </main>
     
    </>
  );
};

export default FutureGamesPage;
