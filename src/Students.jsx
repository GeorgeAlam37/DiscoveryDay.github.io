import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import student1 from '../src/assets/student1.png';
import student2 from '../src/assets/student2.png';
import student3 from '../src/assets/student3.png';
import student4 from '../src/assets/student4.png';
import './index.css';
import './students.css';

const cardsData = [
    {
      id: 1,
      title: 'Eva',
      imgSrc: student1,
      description:
        '“I am so grateful for this opportunity; currently, I work as a full-time app developer. My dream came true.',
    },
    {
      id: 2,
      title: 'Juan',
      imgSrc: student2,
      description:
        '“When I got stuck I could always ask my mentor for help. His support really made the difference.',
    },
    {
      id: 3,
      title: 'Mary',
      imgSrc: student3,
      description:
        '“When I got stuck I could always ask my mentor for help. His support really made the difference.',
    },
    {
      id: 4,
      title: 'Yin',
      imgSrc: student4,
      description:
        '“After this course I was able to start a trainee-ship and now I have a full time job as an app developer.',
    },
  ];
const Students = () => {
  return (
    <div className="container mb-5">
      <div className="row p-5 text-center">
        <div className="col">
          <h2 className="fw-bold">What our students say</h2>
        </div>
      </div>

      <div className="scrolling-container row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {cardsData.map((card) => (
          <div key={card.id} className="col">
            <div className="card border-0 overflow-hidden h-100">
              <img
                src={card.imgSrc}
                className="card-img-top img-fluid"
                alt={card.title}
                style={{ objectFit: 'cover', height: '200px' }}
              />
              <div className="card-body text-center" style={{ background: '#66d978' }}>
                <h4 className="card-title fw-bold mb-3">{card.title}</h4>
                <p className="card-text fs-16">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;