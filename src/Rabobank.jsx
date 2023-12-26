import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './index.css'; 
import rabovideo from '../src/assets/rabovideo.mp4';

function Rabobank() {
  return (
    <>
  <Container fluid className="rabo-video mb-md-5">
    <Row className="text-center py-5">
      <Col>
        <h2 className='fw-bold fs-42'>What our students created</h2>
      </Col>
    </Row>
    <Row className="justify-content-center align-items-center pb-5">
        <Col xs={12} md={8} lg={6}>
          <div className="video-container">
            <video autoPlay loop muted className="video rounded" style={{height: 'auto', maxWidth: '100%'}}>
              <source src={rabovideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Col>
    </Row>
  </Container>
    </>
  
  )
}

export default Rabobank