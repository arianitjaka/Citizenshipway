import React from 'react';
import './Languages.scss';
import flag from '../../../Assets/Navbar/flag.svg';


const Languages = () => {
    return (
      <div className="languages-div">
          <img src={flag} alt="" className="language-selector"/>
      </div>
    );
  };
  
  export default Languages;