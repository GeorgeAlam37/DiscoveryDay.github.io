import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Rabobank from './Rabobank'
import Footer from './Footer'
import home1 from '../src/assets/home1.png'
import forwho2 from '../src/assets/forwho2.png'
import PartnerSlider from './PartnerSlider'
import Students from './Students'
import HowItWorks from './how/HowItWorks';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


function Home() {
  const goUp = () => {
    window.scrollTo(0,0)
  };

  return (
    <>
    <Navbar />

    {/* for who div */}
    <div className="forwho-container">
        <div className="text-side text-center text-md-start mt-md-5">
          <h2 className='mb-4 fw-bold fs-42'>Untapp your talent and learn<br />for free ✨</h2><br />
          <p className='fs-28 mb-4'>
          Sign up today for next steps, no previous experience required.
          </p> 
          <Link to="/register" onClick={goUp}>
          <button type="submit" className="btn btn-success w-70 rounded-pill">
              Sign up for free
          </button>
          </Link>
        </div>

        <div className="image-side">
          <img
            src={home1}
            alt="home1"
            className="forwho-image"
          />
        </div>
    </div>
    

    <Rabobank />
    <Students />
    <HowItWorks />
    {/* kick start div */}
    <div className="d-flex justify-content-center align-items-center kick-start" >
      <div className="container text-center">
        <h1 className="text-black fw-bold mb-md-5">Kick start your Career in Tech?</h1>
        <p className="text-black mb-md-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <Link to="/register" onClick={goUp}>
            <button className="btn btn-outline-dark btn-lg mt-3 fw-bold">Sign up for our Discovery Day 🎉</button>
        </Link>
        <p className="text-black mt-2">Don't worry, it's free.</p>
      </div>
    </div>
    {/* end for who div */}
    <div className="container-fluid">
        <div className="row py-5">
          {/* Left Side (Image) */}
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img src={forwho2} alt="forwho2" className="img-fluid" />
          </div>

          {/* Right Side (Text Information) */}
          <div className="col-md-6 text-center text-md-start p-5">
            <h1 className="fw-bold fs-42">Did you know that...</h1>
            <h3 className='mb-4 fw-bold fs-38 we' style={{color: 'lightgreen'}}>we have a large community</h3>
            <p className="mt-5 d-flex">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    {/* end kick start div */}
    
    <PartnerSlider />
    <Footer />
    </>
  )
}

export default Home