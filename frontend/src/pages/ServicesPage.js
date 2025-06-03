import React from 'react';
import { Link } from 'react-router-dom';
// import '../styles/ServicesPage.css';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <section className="page-header services-header">
        <div className="page-header-content">
          <h1>Our Services</h1>
          <p>Explore the wide range of services we offer to help you achieve your German dreams</p>
        </div>
        <div className="page-header-overlay"></div>
      </section>

      <section className="services-overview">
        <div className="container">
          <div className="section-header">
            <h2>What We Offer</h2>
            <p>Comprehensive consultancy services tailored to your needs</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Student Visa</h3>
              <p>Guidance for university admissions and student visa applications to study in Germany.</p>
              <Link to="/apply" className="service-link">Learn More <i className="fas fa-arrow-right"></i></Link>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-home"></i>
              </div>
              <h3>AU Pair Program</h3>
              <p>Live with a German host family, learn the language, and experience the culture.</p>
              <Link to="/apply" className="service-link">Learn More <i className="fas fa-arrow-right"></i></Link>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-tools"></i>
              </div>
              <h3>Ausbildung Visa</h3>
              <p>Vocational training opportunities in Germany's dual education system.</p>
              <Link to="/apply" className="service-link">Learn More <i className="fas fa-arrow-right"></i></Link>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <h3>Work Visa</h3>
              <p>Professional guidance for job applications and work visa processes in Germany.</p>
              <Link to="/apply" className="service-link">Learn More <i className="fas fa-arrow-right"></i></Link>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-plane"></i>
              </div>
              <h3>Tourist Visa</h3>
              <p>Assistance with tourist visa applications for short-term visits to Germany.</p>
              <Link to="/apply" className="service-link">Learn More <i className="fas fa-arrow-right"></i></Link>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-book"></i>
              </div>
              <h3>German Language Courses</h3>
              <p>Online language courses from A1 to C2 levels with certified instructors.</p>
              <Link to="/language-courses" className="service-link">Learn More <i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Start Your Journey?</h2>
          <p>Contact us today for personalized guidance and support</p>
          <div className="cta-buttons">
            <Link to="/apply" className="btn btn-primary">Apply Now</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;