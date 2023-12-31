import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';


import './rabobank.css';

const HorizontalSlideshow = () => {
  return (
    <div id="carousel-container" className='p-5'>
      <h2 className='text-center mb-5'>What our students created</h2>
      <Carousel
        style={{
          maxWidth: '700px', // Adjust the maximum width of the carousel
          margin: '0 auto', // Center the carousel horizontally
        }}
        interval={2000} // Set the interval to 2000 milliseconds (2 seconds)
        nextIcon={null}
        prevIcon={null}

      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='https://images.unsplash.com/photo-1682687981630-cefe9cd73072?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='https://images.unsplash.com/photo-1682687981630-cefe9cd73072?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='https://images.unsplash.com/photo-1682687981630-cefe9cd73072?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt="Third slide"
          />
        </Carousel.Item>

      </Carousel>
    </div>
  );
};

export default HorizontalSlideshow;


