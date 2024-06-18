// App.js
import React from 'react';
import Navbar from './components/Navbar';
import WelcomeSection from './components/WelcomeSection';
import SocialMediaButtons from './components/SocialMediaButtons'; // Import the SocialMediaButtons component
import SatisfyingCurvyCursor from './SatisfyingCurvyCursor';
import './styles.css';

function App() {
  return (
    <div>
      <Navbar />
      <WelcomeSection />
      <SatisfyingCurvyCursor />
      <SocialMediaButtons /> {/* Include the SocialMediaButtons component */}
    </div>
  );
}

export default App;
