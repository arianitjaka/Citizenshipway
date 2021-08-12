import React from 'react';
import './CitizenshipHeader.scss';
import Navbar from '../../../Navbar/Navbar';
import CitizenshipBanner from '../Banner/CitizenshipBanner';


const CitizenshipHeader = () => {
  return (
    <div className="about-header">
      <Navbar />
      <CitizenshipBanner />
    </div>
  );
}

export default CitizenshipHeader;