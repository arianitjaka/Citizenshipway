import React from 'react';
import { Link } from 'react-router-dom';
import './ContactButton.scss';
import { FormattedMessage } from 'react-intl';


const ContactButton = () => {
  return (
    <div className="contact-button-div">
      <Link to="/contact" className="contact-button">
      <button className="contact-btn-content">
        <h3 className="button-text">
          <FormattedMessage id="Contact" />
        </h3>
      </button>
      </Link>
    </div>
  );
};

export default ContactButton;
