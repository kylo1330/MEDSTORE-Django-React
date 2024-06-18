import React from 'react';
import { Link } from 'react-router-dom';
import SocialMediaButtons from './SocialMediaButtons'; // Import the SocialMediaButtons component

const WelcomeSection = () => {
  return (
    <div style={{ fontFamily: 'Montserrat, sans-serif' }} className="welcome-section">
      <br></br>
       <h1 style={{color: '', fontWeight: 'bold' }}>Welcome to MedStore</h1>
      <p style={{ color: '#b87333', fontWeight: 'bold' }} className="quote">"Breaking barriers, bridging care. Explore our online shelves for a healthier you."</p>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '20vh'
      }}>
        <Link to="/blog/posts" className="btn btn-danger btn-lg btn-animate">Enter Medical Store</Link>
        <SocialMediaButtons /> {/* Include the SocialMediaButtons component */}
      </div>
    </div>
  );
};

export default WelcomeSection;
