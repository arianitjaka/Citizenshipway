import React from 'react';
import Header from '../Components/Pages/Home/Header/Header';
import GlobalCitizens from '../Components/Pages/Home/GlobalCitizens/GlobalCitizens';
import Services from '../Components/Pages/Home/Services/Services';
import CitizenshipResidenceOptions from '../Components/Pages/Home/CitizenshipResidenceOptions/CitizenshipResidenceOptions';
import Programs from '../Components/Pages/Home/Programs/Programs';
import WhyCitizenshipway from '../Components/Pages/Home/WhyCitizenshipway/WhyCitizenshipway';
import LatestNews from '../Components/Pages/Home/LatestNews/LatestNews';
import Testimonials from '../Components/Pages/Home/Testimonials/Testimonials';



const Home = () => {
  return (
    <div>
      <Header />
      <GlobalCitizens />
      <Services />
      <CitizenshipResidenceOptions />
      <Programs />
      <WhyCitizenshipway />
      <LatestNews />
      <Testimonials />

      
    </div>
  );
}

export default Home;