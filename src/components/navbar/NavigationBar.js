
import React, { useState, useRef } from 'react';
import './NavigationBar.css';
import logo from '../../images/logoMM.jpg';
import { FaBars, FaTimes } from 'react-icons/fa';

function NavigationBar() {
  const navRef = useRef();
  const showNav = () => navRef.current.classList.toggle('show-nav');
  const [isOpen, setIsOpen] = useState(false);


    return (
      <header>
        {/* <div className="logo"><img src={logo} className="logo_style" alt="Montclair Meats Logo" /></div> */}
        <nav ref={navRef}>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contactus">Contact</a>
            <button className='nav-btn nav-close-btn' onClick={showNav}>
              <FaTimes/>
            </button>
        </nav>
        <button className='nav-btn' onClick={showNav}>
          <FaBars/>
        </button>

      </header>
        
    );
}

export default NavigationBar;
