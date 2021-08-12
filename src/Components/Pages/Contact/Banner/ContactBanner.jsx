import React from 'react';
import './ContactBanner.scss';

import { FormattedMessage } from 'react-intl';


const ContactBanner = () => {
  return (
    <div className="contact-banner">
      <h1 className="contact-banner-text">
        <FormattedMessage id="ContactTitle" />
      </h1>
    </div>
  );
}

export default ContactBanner;