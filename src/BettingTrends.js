import React from 'react';
import { Line } from 'react-chartjs-2';
import './BettingTrends.css'; // Link to the CSS file for styling

const BettingTrends = () => {
  const data = {
    labels: ['1 Week Ago', '6 Days Ago', '5 Days Ago', '4 Days Ago', '3 Days Ago', '2 Days Ago', '1 Day Ago', 'Today'],
    datasets: [
      {
        label: 'Odds for Manchester United',
        data: [2.5, 2.45, 2.5, 2.55, 2.6, 2.65, 2.7, 2.75],
        borderColor: '#007bff',
        backgroundColor: 'rgba(0, 123, 255, 0.5)',
        fill: true,
      },
      {
        label: 'Odds for Barcelona',
        data: [1.55, 1.6, 1.65, 1.6, 1.55, 1.5, 1.45, 1.4],
        borderColor: '#28a745',
        backgroundColor: 'rgba(40, 167, 69, 0.5)',
        fill: true,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: false,
      },
    },
    elements: {
      line: {
        tension: 0.4, // Smoothes the line
      },
    },
    plugins: {
      legend: {
        position: 'top', // Places the legend at the top
      },
    },
  };

  return (
    <div className="betting-trends">
      <h2>Betting Trends</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default BettingTrends;
