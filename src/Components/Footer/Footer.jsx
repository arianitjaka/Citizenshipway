import React from 'react';
import './Footer.scss';
import SelectLanguage from '../Shared/SelectLanguage/SelectLanguage';

import Logo from '../../Assets/Footer/logo.png';
import Email from '../../Assets/Footer/email.png';
import Phone from '../../Assets/Footer/phone.png';

import Facebook from '../../Assets/Footer/facebook.png';
import LinkedIn from '../../Assets/Footer/linkedin.png';
import YouTube from '../../Assets/Footer/youtube.png';
import Twitter from '../../Assets/Footer/twitter.png';

// import Languages from '../../Assets/Footer/language.png';



const Footer = (props) => {
    return (
        <div className="footer">

            <div className="footer-container">

                <div className="footer-logo-and-contact">
                    <div className="footer-logo">
                        <img src={Logo} alt="" />
                        <h1>Citizenshipway</h1>
                    </div>

                    <div className="footer-contact">
                        <div className="footer-contact-email">
                            <img src={Email} alt="" />
                            <h5>support@citizenshipway.com</h5>
                        </div>

                        <div className="footer-contact-phone">
                            <img src={Phone} alt="" />
                            <h5>+1 1213 24456</h5>
                        </div>
                    </div>
                </div>

                <div className="footer-columns">
                    <div className="column-content">
                        <h4>Company</h4>
                        <p>Blog</p>
                        <p>Our Story</p>
                        <p>Our Team</p>
                        <p>Careers</p>
                        <p>News</p>
                        <p>FAQ</p>
                        <p>Contact Us</p>
                        <p>Book Conusltation</p>
                    </div>

                    <div className="column-content">
                        <h4>Services</h4>
                        <p>Citizenship by Investment</p>
                        <p>Residency</p>
                        <p>Advisory & Complience Services</p>
                        <p>Incorporations & Banking</p>
                        <p>Offshore Investments</p>
                        <p>Caribbean Concierge</p>
                    </div>

                    <div className="column-content">
                        <h4>Citizenship Programs</h4>
                        <p>Antigua & Barbuda</p>
                        <p>Canada</p>
                        <p>Dominica</p>
                        <p>Grenada</p>
                        <p>Ireland</p>
                        <p>Malta</p>
                        <p>St Kitts & Nevis</p>
                        <p>St. Lucia</p>
                    </div>

                    <div className="column-content">
                        <h4>Residency</h4>
                        <p>Antigua & Barbuda</p>
                        <p>Canada</p>
                        <p>Ireland</p>
                        <p>Malta</p>
                        <p>Austria</p>
                        <p>Cypros</p>
                        <p>Greece</p>
                        <p>UAE</p>
                    </div>

                    <div className="column-content">
                        <h4>Luxury Properties</h4>
                        <p>Antigua & Barbuda</p>
                        <p>Dominica</p>
                        <p>Grenada</p>
                        <p>St. Kitts & Nevis</p>
                        <p>UAE</p>
                    </div>
                </div>

                <div className="footer-subscribe-and-social">
                    <div className="footer-subscribe">
                        <h1>Suscribe to our newsletter</h1>

                        <div className="subscribe-field">
                            <input type="email" placeholder="Enter your email" />
                            <button>
                                <h4>Subscribe</h4>
                            </button>
                        </div>
                    </div>

                    <div className="footer-social">
                        <div className="social-btn">
                            <img src={Facebook} alt="" />
                        </div>

                        <div className="social-btn">
                            <img src={LinkedIn} alt="" />
                        </div>

                        <div className="social-btn">
                            <img src={YouTube} alt="" />
                        </div>

                        <div className="social-btn">
                            <img src={Twitter} alt="" />
                        </div>
                    </div>
                </div>

                <hr />

                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <h4>Privacy <span>|</span> Terms & Conditions</h4>
                    </div>

                    <div className="footer-bottom-content">
                        <h4>2021, Citizenshipway INC, All Rights Are Reserved.</h4>
                    </div>

                    <div className="footer-bottom-content">
                        <SelectLanguage
                            setLanguage={props.setLanguage}
                            language={props.language}
                        />
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Footer;