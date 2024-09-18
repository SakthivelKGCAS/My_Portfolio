import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Contact from './Contact';
import './App.css'; // Import your CSS file here
import 'bootstrap/dist/css/bootstrap.min.css';
import Research from './Research';


function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/" className="nav-item">Home</Link></li>
          <li><Link to="/about" className="nav-item">About</Link></li>
          <li><Link to="/education" className="nav-item">Education</Link></li>
          <li><Link to="/experience" className="nav-item">Experience</Link></li>
          <li><Link to="/research" className="nav-item">Research</Link></li>
          <li><Link to="/contact" className="nav-item">Contact</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />.
        <Route path="/research" element={<Research />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
