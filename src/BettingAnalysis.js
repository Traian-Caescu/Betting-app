import React from 'react';
import './BettingAnalysis.css'; // Make sure to create a corresponding CSS file for styling

// Sample data for betting analysis
const bettingAnalysisData = {
  match: 'Chelsea vs Arsenal',
  expertTips: [
    { tip: 'Considering the current form of both teams, betting on a draw might be a wise choice.', odds: '3.50' },
    // ... more tips
  ],
  bettingMarkets: [
    { market: 'Over/Under 2.5 Goals', overOdds: '1.85', underOdds: '1.95' },
    // ... more markets
  ],
};

const BettingAnalysis = () => {
  return (
    <div className="betting-analysis">
      <h2>Betting Analysis for {bettingAnalysisData.match}</h2>
      <div className="expert-tips">
        <h3>Expert Tips</h3>
        {bettingAnalysisData.expertTips.map((tip, index) => (
          <div key={index} className="tip">
            <p>{tip.tip}</p>
            <p>Odds: {tip.odds}</p>
          </div>
        ))}
      </div>
      <div className="betting-markets">
        <h3>Betting Markets</h3>
        {bettingAnalysisData.bettingMarkets.map((market, index) => (
          <div key={index} className="market">
            <p>{market.market}</p>
            <p>Over: {market.overOdds}</p>
            <p>Under: {market.underOdds}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BettingAnalysis;
