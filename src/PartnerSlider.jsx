import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PartnerSlider.css';
import partner1 from '../src/assets/partner1.png';
import partner2 from '../src/assets/partner2.png';
import partner3 from '../src/assets/partner3.png';
import partner4 from '../src/assets/partner4.png';
import partner5 from '../src/assets/partner5.png';
import partner6 from '../src/assets/partner6.png';
import partner7 from '../src/assets/partner7.png';
import partner8 from '../src/assets/partner8.png';
import partner9 from '../src/assets/partner9.png';
import partner10 from '../src/assets/partner10.png';
import partner11 from '../src/assets/partner11.png';
import partner12 from '../src/assets/partner12.png';
import partner13 from '../src/assets/partner13.png';
import partner14 from '../src/assets/partner14.png';

const partners = [partner1, partner2, partner3, partner4, partner5, partner6, partner7, partner8, partner9, partner10, partner11, partner12, partner13, partner14];

const PartnerSlider = () => {
  return (
    <>
      <section className='p-5'>
      <h4 className='mb-4 fw-bold fs-42 text-center'>Proud partners of us:</h4><br />
        <div className="container">
          <div id="sliderContainer" className="partner-slider">
            <div className="partner-logos">
              {partners.map((partner, index) => (
                <img
                  key={index}
                  className="partner-logo"
                  src={partner}
                  alt={`Partner ${index + 1}`}
                  
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnerSlider;
