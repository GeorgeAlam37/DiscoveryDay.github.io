import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import how1 from '../how/how1.png'
import how2 from '../how/how2.png'
import '../how/howitworks.css'
import num1 from '../assets/num1.svg'
import num2 from '../assets/num2.svg';



function HowItWorks() {
  return (
    <Container className="py-5">
        <h1 className='text-center mb-5'>How it works</h1>

 
    <Row className="align-items-center">
      {/* Left Side: SVG Image */}
      <Col md={6}>
        <div className="text-center">
          <img
            src={how1}
            alt="how1"
            className='img-fluid'
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </Col>

      {/* Right Side: Text */}
      <Col md={6}>
        <div className="text-center text-md-start">
            <img src={num1} alt="num1" className="mr-4 my-4" />
          <h2>Register for our<br/>Discovery Day</h2>
          <p>
          Our curated training courses provide you with<br/>professional and technical training.<br/>These features enable you to actively work on your<br/>development as an IT professional.
          </p>
        </div>
      </Col>

    </Row>
    
    <Row className="align-items-center my-3">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 24 24"
      fill="#c2f0c9"
      stroke="#c2f0c9"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className='down-arrow'
    >
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <polyline points="18 13 12 19 6 13"></polyline>
    </svg>
    </Row>

    <Row className="align-items-center">
  {/* Right Side: Text */}
  <Col md={6}>
    <div className="text-center text-md-end">
      <img src={num2} alt="num2" className="mr-4 my-4" />
      <h2>Converse with on of<br />our coaches<span style={{color: '#368342', fontSize: '23px'}}> so we can<br />make a mentor match</span></h2>
      <p>
      By putting you at the center of our matching
 process,<br />we get to discover what moves
you.<br />Together we focus on what matters
most to ensure<br />you land in the best possible<br />
 working environment. 
      </p>
    </div>
  </Col>

  {/* Left Side: SVG Image */}
  <Col md={6}>
    <div className="text-center">
      <img
        src={how2}
        alt="how2"
        className='img-fluid'
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
  </Col>
</Row>


    <Row className="align-items-center my-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 24 24"
      fill="#c2f0c9"
      stroke="#c2f0c9"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className='down-arrow'
    >
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <polyline points="18 13 12 19 6 13"></polyline>
    </svg>
    </Row>
  </Container>
  )
}

export default HowItWorks
