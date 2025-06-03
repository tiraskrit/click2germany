import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import logo from '../assets/germany-logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-section">
          <Link to="/" className="footer-logo">
            <img src={logo} alt="Click2Germany Logo" />
            <span>Click2Germany</span>
          </Link>
          <p>Your trusted partner for German visa consultancy and language learning services in Nepal.</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-link-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/language-courses">Language Courses</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-link-section">
            <h3>Visa Services</h3>
            <ul>
              <li><Link to="/apply">Student Visa</Link></li>
              <li><Link to="/apply">AU Pair Visa</Link></li>
              <li><Link to="/apply">Ausbildung Visa</Link></li>
              <li><Link to="/apply">Working Visa</Link></li>
              <li><Link to="/apply">Tourist Visa</Link></li>
            </ul>
          </div>

          <div className="footer-link-section">
            <h3>Contact Info</h3>
            <ul className="contact-info">
              <li><i className="fas fa-map-marker-alt"></i> Thamel, Kathmandu, Nepal</li>
              <li><i className="fas fa-phone"></i> +977 1 4123456</li>
              <li><i className="fas fa-envelope"></i> info@germany.com.np</li>
              <li><i className="fas fa-clock"></i> Sun-Fri: 9:00 AM - 5:00 PM</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Click2Germany. All rights reserved.</p>
        <div className="footer-bottom-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-conditions">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;