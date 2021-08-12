import React from 'react';
import ContactHeader from '../Components/Pages/Contact/Header/ContactHeader';
import GeneralEnquiryForm from '../Components/Pages/Contact/GeneralEnquiryForm/GeneralEnquiryForm';
import ContactInfo from '../Components/Pages/Contact/Info/ContactInfo';
import ContactOffices from '../Components/Pages/Contact/Offices/ContactOffices';



const Contact = () => {
    return (
        <div>
            <ContactHeader />
            <GeneralEnquiryForm />
            <ContactInfo />
            <ContactOffices />
        </div>
    );
}

export default Contact;