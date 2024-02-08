import React, { useState, useEffect } from 'react';
import './App.css'; // Ensure you have a corresponding CSS file for styling
import NavigationBar from './NavigationBar';
import Slideshow from './Slideshow';
import FeatureSection from './FeatureSection';
import DynamicContentSection from './DynamicContentSection';
import ContactForm from './ContactForm';
import FAQ from './FAQ';
import Footer from './Footer';
import FeaturesSlideshow from './FeaturesSlideshow';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MatchDetailPage from './MatchDetailPage'; // Your match detail component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import FutureGamesPage from './FutureGamesPage'; // Import the new page component

ChartJS.register(ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const slideImages = [
  'https://e0.365dm.com/19/01/2048x1152/skysports-rafael-nadal-novak-djokovic_4556818.jpg?20190125124546',
  'https://www.zetbet.com/media/Blog/2022/April-22/Football-Betting-tips.jpg',
  'https://media.newyorker.com/photos/5f52608d704116b9739db5c9/16:9/w_2559,h_1439,c_limit/Thomas-NBAMLBStrikes.jpg',
];

const sections = [
  {
    league: 'Premier League',
    matches: [
      {
        date: 'Sat 10 Feb 15:00',
        homeTeam: 'Liverpool',
        awayTeam: 'Manchester United',
        oddsHome: '2/3',
        oddsDraw: '3/1',
        oddsAway: '4/1',
      },
      {
        date: 'Sun 11 Feb 17:30',
        homeTeam: 'Chelsea',
        awayTeam: 'Arsenal',
        oddsHome: '5/4',
        oddsDraw: '2/1',
        oddsAway: '3/2',
      },
      {
        date: 'Mon 12 Feb 20:00',
        homeTeam: 'Tottenham',
        awayTeam: 'Leicester City',
        oddsHome: '6/5',
        oddsDraw: '9/4',
        oddsAway: '1/1',
      },
    ],
  },
  {
    league: 'NBA',
    matches: [
      {
        date: 'Tue 13 Feb 19:00',
        homeTeam: 'LA Lakers',
        awayTeam: 'Boston Celtics',
        oddsHome: '1/3',
        oddsDraw: 'N/A', // Draws are typically not applicable in basketball
        oddsAway: '3/1',
      },
      {
        date: 'Wed 14 Feb 20:30',
        homeTeam: 'Golden State Warriors',
        awayTeam: 'Chicago Bulls',
        oddsHome: '9/7',
        oddsDraw: 'N/A',
        oddsAway: '5/4',
      },
      {
        date: 'Thu 15 Feb 18:00',
        homeTeam: 'Miami Heat',
        awayTeam: 'New York Knicks',
        oddsHome: '4/6',
        oddsDraw: 'N/A',
        oddsAway: '6/5',
      },
    ],
  },
  {
    league: 'eSports - League of Legends',
    matches: [
      {
        date: 'Fri 16 Feb 15:00',
        homeTeam: 'Cloud9',
        awayTeam: 'Team Liquid',
        oddsHome: '2/5',
        oddsDraw: '5/2',
        oddsAway: '7/2',
      },
      {
        date: 'Sat 17 Feb 16:00',
        homeTeam: 'Fnatic',
        awayTeam: 'G2 Esports',
        oddsHome: '1/1',
        oddsDraw: '11/4',
        oddsAway: '3/1',
      },
      {
        date: 'Sun 18 Feb 17:00',
        homeTeam: 'T1',
        awayTeam: 'DWG KIA',
        oddsHome: '13/8',
        oddsDraw: '2/1',
        oddsAway: '5/4',
      },
    ],
  },
  {
    league: 'Grand Slam Tennis',
    matches: [
      {
        date: 'Mon 19 Feb 13:00',
        homeTeam: 'Novak Djokovic',
        awayTeam: 'Rafael Nadal',
        oddsHome: '3/4',
        oddsDraw: 'N/A',
        oddsAway: '4/3',
      },
      {
        date: 'Tue 20 Feb 14:00',
        homeTeam: 'Serena Williams',
        awayTeam: 'Naomi Osaka',
        oddsHome: '1/1',
        oddsDraw: 'N/A',
        oddsAway: '4/5',
      },
      {
        date: 'Wed 21 Feb 15:30',
        homeTeam: 'Roger Federer',
        awayTeam: 'Andy Murray',
        oddsHome: '4/7',
        oddsDraw: 'N/A',
        oddsAway: '5/4',
      },
    ],
  },
];

// Final App component assembly

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={
          <>
            <Slideshow images={slideImages} />
            <FeaturesSlideshow sections={sections} />
            <FeatureSection />
            <DynamicContentSection />
            <ContactForm />
            <FAQ />
          </>
        } />
       <Route path="/future-games" element={<FutureGamesPage />} />
        <Route path="/match-detail" element={<MatchDetailPage />} />
        {/* Add other routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;