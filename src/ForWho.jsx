import React from 'react';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import forwho1 from '../src/assets/forwho1.png';
import forwho2 from '../src/assets/forwho2.png';
import num1 from '../src/assets/num1.svg';
import num2 from '../src/assets/num2.svg';
import num3 from '../src/assets/num3.svg';
import num4 from '../src/assets/num4.svg';
import check from '../src/assets/check.svg';
import right from '../src/assets/right.png';
import Footer from './Footer';
import Card from './Card';
import './index.css'
function ForWho() {
  return (
    <>
      <Navbar />

      <div className="forwho-container">
        <div className="text-side mt-3 text-center text-md-start">
          <h2 className='mb-4 fw-bold fs-42'>For Who</h2><br />
          <p className='fs-28 mb-4'>
            Diversity, equality and inclusion are essential to our program with a special<br />focus on those who have been historically underrepresented in information<br />and communication technologies.<br />Would you like to have more information about<br />our course or the world of Tech? 
          </p>
        </div>
        <div className="image-side ">
          <img
            src={forwho1}
            alt="Forwho1"
            className="forwho-image"
          />
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          {/* Left Side (Image) */}
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img src={forwho2} alt="forwho2" className="img-fluid" />
          </div>

          {/* Right Side (Text Information) */}
          <div className="col-md-6 text-center text-md-start p-5">
            <h1 className="fw-bold fs-42">For who</h1>
            <h2 className='mb-4 fw-bold fs-38' style={{color: 'lightgreen'}}>We are open to all !</h2>
            <p className="mt-5 d-flex">
              <img src={num1} alt="num1" className="mr-4 mb-4" />
              Untappd is open to all; there’s no prior education or degree required. You only need to be over 18 or over.
            </p>
            <hr />
            <p className="mt-4 d-flex">
              <img src={num2} alt="num2" className="mr-4 mb-4" />
              We have two courses, one for beginners and our Skill Path course that is focused on career development. In both courses, we offer job coaching workshops.
            </p>
            <hr />
            <p className="mt-4 d-flex">
              <img src={num3} alt="num3" className="mr-4 mb-4" />
              Through a curated curriculum of interactive games and assignments, you will build your first web page in no time.
            </p>
            <hr />
            <p className="mt-4 d-flex">
              <img src={num4} alt="num4" className="mr-4 mb-4" />
              After our course, you will be eligible for numerous internships and job opportunities.
            </p>
          </div>
        </div>
      </div>

       {/* Regitration body */}

    <div className='forwho-register p-5'>
    <div className="container-fluid">
      <div className="row">
        {/* Text Information */}
        <div className="col-lg-6 col-md-12 p-5 mx-auto" >
          <h2 className="text-start fw-bold fs-42">Discovery day</h2><br /><br />
          <p className='fs-24'>
          Discovery day is our introduction day.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p><br /><br />

          <p className="mt-4 d-flex align-items-center">
            <img src={check} alt="check" className="mr-4" />
            Find out hoe leuk programmeren is.
            </p>

          <p className='mt-4 d-flex align-items-center'>
          <img src={check} alt='check' className="mr-4" />
          Lorem ipsum dolor sit amet, consectetur.</p>
          <p className='mt-4 d-flex align-items-center'>
            <img src={check} alt='check' className="mr-4" />
          Lorem ipsum dolor sit amet, consectetur.</p>
      <div className="col-lg-6 col-md-12 p-0">
        <img
          src={right}
          alt="right"
          className="img-fluid right d-none d-lg-block"
          style={{ width: '150px', height: '150px', marginLeft: '400px', marginTop: '-100px' }}
        />
      </div>
        </div>

        {/* Registration Form */}
        <div className="col-lg-5 col-md-12 p-5 form">
          <h2 className="text-start fw-bold fs-25 mb-4">Register for free</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
    
              </label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
      
              </label>
              <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
        
              </label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>

            <div className="mb-3">
              <label htmlFor="birthdate" className="form-label">
                
              </label>
              <input type="date" className="form-control" id="birthdate" />
            </div>

            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="acceptTerms" />
              <label className="form-check-label ml-3" htmlFor="acceptTerms">
                Accept terms and conditions
              </label>
            </div>

            <button type="submit" className="btn btn-success w-70 rounded-pill">
              Sign up for free
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* End Regitration body */}
      <Card />
      <Footer />
    </>
  );
}

export default ForWho;
