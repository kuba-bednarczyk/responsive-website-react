import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebookF, faTypo3, faYoutube } from '@fortawesome/free-brands-svg-icons';

import Button from './Button';

const Footer = () => {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscribtion-heading'>
          Join The Adventure newsletter to receive our best vaction deals
        </p>
        <p className='footer-subscription-text'>You can unsubscribe at any time.</p>
        <div className='input-areas'>
          <form>
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              className='footer-input'
            />
            <Button buttonStyle={'btn--outline'}>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/services'>Tesitmonials</Link>
            <Link to='/services'>Careers</Link>
            <Link to='/services'>Investors</Link>
            <Link to='/services'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>FAQ</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/services'>Tesitmonials</Link>
            <Link to='/services'>Careers</Link>
            <Link to='/services'>Investors</Link>
            <Link to='/services'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/services'>Tesitmonials</Link>
            <Link to='/services'>Careers</Link>
            <Link to='/services'>Investors</Link>
            <Link to='/services'>Terms of Service</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link className='social-logo'>
              TRVL
              <FontAwesomeIcon icon={faTypo3} />
            </Link>
          </div>
          <small className='website-rights'>TRVL &copy; 2023</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='YouTube'
            >
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
