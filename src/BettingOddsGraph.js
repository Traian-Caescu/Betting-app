import React from 'react';
import { Line } from 'react-chartjs-2';
import './BettingOddsGraph.css'; // Make sure to create a corresponding CSS file for styling

// Sample data for the betting odds - these would be dynamically loaded in a real scenario
const data = {
  labels: ['7 days ago', '6 days ago', '5 days ago', '4 days ago', '3 days ago', '2 days ago', '1 day ago', 'Today'],
  datasets: [
    {
      label: 'Chelsea Odds',
      data: [2.5, 2.4, 2.45, 2.5, 2.55, 2.6, 2.65, 2.7],
      fill: false,
      borderColor: '#034694', // Chelsea color
      tension: 0.1
    },
    {
      label: 'Arsenal Odds',
      data: [2.8, 2.85, 2.9, 2.85, 2.8, 2.75, 2.7, 2.65],
      fill: false,
      borderColor: '#EF0107', // Arsenal color
      tension: 0.1
    }
  ]
};

const options = {
  scales: {
    y: {
      beginAtZero: false
    }
  },
  plugins: {
    legend: {
      position: 'top',
    }
  }
};

const BettingOddsGraph = () => {
  return (
    <div className="betting-odds-graph">
      <h2>Betting Odds Trend</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default BettingOddsGraph;
