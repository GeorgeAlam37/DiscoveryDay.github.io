import React from 'react';
import check from './assets/check.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Register = () => {
  return (
    <>
    <Navbar />

    {/* Regitration body */}

    <div className='main p-5' >
    <div className="container-fluid">
      <div className="row">
        {/* Text Information */}
        <div className="col-lg-6 col-md-12 py-md-5 mx-auto mb-4 mb-md-0 mb-lg-0" >
          <h2 className="text-start mb-4 fw-bold fs-42">Register Here</h2><br /><br />
          <p className='fs-24'>
            Discovery day is our introduction day. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p><br /><br />

          <p className="mt-4 d-flex align-items-center">
            <img src={check} alt="check" className="mr-4" />
            Discover how fun programming is.
            </p>

          <p className='mt-4 d-flex align-items-center'>
          <img src={check} alt='check' className="mr-4" />
            Joining offers a supportive community. HTML, CSS.</p>
            <p className='mt-4 d-flex align-items-center'>
            <img src={check} alt='check' className="mr-4" />
                Essential coding skills including
            HTML, CSS.</p>
        </div>
        {/* Registration Form */}
        <div className="col-lg-6 col-md-12 p-5 form">
          <h2 className="text-start fw-bold fs-25 mb-4">Register For Discovery Day</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                E-mail
              </label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>

            <div className="mb-3">
              <label htmlFor="birthdate" className="form-label">
                Birth date
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
    
    <Footer />
    
    </>
  );
};

export default Register;
