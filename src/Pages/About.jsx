import React from 'react';
import AboutHeader from '../Components/Pages/About/Header/AboutHeader';
import Values from '../Components/Pages/About/Values/Values';
import OurStory from '../Components/Pages/About/OurStory/OurStory';
import CountriesCultures from '../Components/Pages/About/CountriesCultures/CountriesCultures';
import OurPurpose from '../Components/Pages/About/OurPurpose/OurPurpose';
import KeyPeople from '../Components/Pages/About/KeyPeople/KeyPeople';
import Offices from '../Components/Pages/About/Offices/Offices';


const About = () => {
    return (
      <div>
        <AboutHeader />
        <Values />
        <OurStory />
        <CountriesCultures />
        <OurPurpose />
        <KeyPeople />
        <Offices />
      </div>
    );
}
  
export default About;