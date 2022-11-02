import React from 'react';

import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <h1 className="headtext__cormorant" style={{ marginBottom: '1rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Itshak Sade 39, Hadera, Israel</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Sun - Thu : 10:00 am - 02:00 am</p>
        <p className="p__opensans">Fri - Sat : Closed</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus_img" />
    </div>
  </div>
);

export default FindUs;
