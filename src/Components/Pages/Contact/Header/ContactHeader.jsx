import React from 'react';
import './ContactHeader.scss';
import Navbar from '../../../Navbar/Navbar';
import ContactBanner from '../Banner/ContactBanner';


const ContactHeader = () => {
    return (
        <div className="contact-header">
            <Navbar />
            <ContactBanner />
        </div>
    );
};

export default ContactHeader;
