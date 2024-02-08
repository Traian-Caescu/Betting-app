import React from 'react';
import NavigationBar from './NavigationBar'; // Adjust path as necessary
import MatchSummary from './MatchSummary'; // Component for the summary of the match
import MatchStatistics from './MatchStatistics'; // Component for detailed match statistics
import PlayerPerformance from './PlayerPerformance'; // Component for player performance stats
import BettingTrends from './BettingTrends'; // Component for visualizing betting trends
import FAQ from './FAQ';
import Footer from './Footer'; // Adjust path as necessary

function MatchDetailPage () {
  return (
    <>
      
      <main className="MatchDetailPage">
        <MatchSummary />
        <MatchStatistics />
        <PlayerPerformance />
        <BettingTrends />
      </main>
      
    </>
  );
};

export default MatchDetailPage;
