import React, { useState, useEffect } from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTypo3 } from '@fortawesome/free-brands-svg-icons';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

import Button from './Button';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [button, setButton] = useState(true);

  const handleHamburgerMenuClick = () => setClicked(!clicked);
  const closeMobileMenu = () => setClicked(false);

  const showButton = () => {
    window.innerWidth <= 960 ? setButton(false) : setButton(true)
  };

  useEffect(() => {
    showButton()
  }, [])
  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TRVL
            <FontAwesomeIcon icon={faTypo3} />
          </Link>
        </div>
        <div className='menu-icon' onClick={handleHamburgerMenuClick}>
          <FontAwesomeIcon icon={clicked ? faX : faBars} />
        </div>
        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu} >
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/services' className='nav-links' onClick={closeMobileMenu} >
              Services
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/products' className='nav-links' onClick={closeMobileMenu} >
              Products
            </Link>
          </li>
            <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu} >
              Sign Up
            </Link>
        </ul>
        {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
      </nav>
    </>
  );
};

export default Navbar;
