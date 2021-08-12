import React from 'react';
import './AboutHeader.scss';
import Navbar from '../../../Navbar/Navbar';
import AboutBanner from '../Banner/AboutBanner';


const AboutHeader = () => {
  return (
    <div className="about-header">
      <Navbar />
      <AboutBanner />
    </div>
  );
}

export default AboutHeader;