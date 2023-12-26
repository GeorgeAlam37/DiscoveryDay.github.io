import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Register from './Register';
import ForWho from './ForWho'; // Import the new component
import Home from './Home';
import IntroAnimation from './intro/Intro';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
/* intro */
const [introComplete, setIntroComplete] = useState(false);

const handleAnimationComplete = () => {
  setIntroComplete(true);
};
  return (  
    <Router>
    {/* intro  */}
    {!introComplete && (
      <IntroAnimation onAnimationComplete={handleAnimationComplete} />
    )}
     {introComplete && (
      <Routes>
        <Route path="/forwho" element={<ForWho />} />
        <Route path="home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<>
          <Home />
        </>} />
      </Routes>
     )}
    </Router>
  );
}

export default App;

