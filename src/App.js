import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
// import Apply from './components/Apply';
import Contact from './components/contactus/Contact';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
          <div>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/contactus" element={<Contact />} />
              {/* <Route exact path="/about" element={<ShoppingCart />} /> */}
            </Routes>
            <Footer />
          </div>
        </Router>
  );
}

export default App;
