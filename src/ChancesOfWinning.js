import React from 'react';
import { Pie } from 'react-chartjs-2';
import './ChancesOfWinning.css'; // Make sure to create a corresponding CSS file for styling

// Sample data for chances of winning
const chancesData = {
  labels: ['Chelsea Win', 'Draw', 'Arsenal Win'],
  datasets: [
    {
      data: [50, 20, 30], // Example percentages
      backgroundColor: ['#034694', '#95a5a6', '#EF0107'],
      hoverBackgroundColor: ['#022d5f', '#7f8c8d', '#b91012'],
    }
  ]
};

const ChancesOfWinning = () => {
  return (
    <div className="chances-of-winning">
      <h2>Chances of Winning</h2>
      <Pie data={chancesData} />
    </div>
  );
};

export default ChancesOfWinning;
