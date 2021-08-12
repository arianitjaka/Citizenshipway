import React from 'react';
import './ResidencyHeader.scss';
import Navbar from '../../../Navbar/Navbar';
import ResidencyBanner from '../Banner/ResidencyBanner';


const ResidencyHeader = () => {
  return (
    <div className="about-header">
      <Navbar />
      <ResidencyBanner />
    </div>
  );
}

export default ResidencyHeader;