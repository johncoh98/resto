import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Itshak Sade 39, Hadera, Israel</p>
        <p className="p__opensans">+972 54 369 2295</p>
        <p className="p__opensans">+972 58 636 8744</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.logob} alt="footer_logo" />
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Sunday-Thursday:</p>
        <p className="p__opensans">10:00 am - 02:00 am</p>
        <p className="p__opensans">Friday-Saturday:</p>
        <p className="p__opensans">Closed</p>
      </div>
    </div>
  </div>
);

export default Footer;