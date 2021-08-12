import React from 'react';
import './Logo.scss';
import logo from '../../../Assets/Navbar/logo.svg';


const Logo = () => {
    return (
      <div className="logo-div">
          <img src={logo} alt="" className="logo"/>
          <h3 className="logo-text">Citizenshipway</h3>
      </div>
    );
  };
  
  export default Logo;
