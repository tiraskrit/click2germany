import React from 'react';
import { Link } from 'react-router-dom';
// import '../styles/HomePage.css';
// import heroImage from '../assets/hero-image.jpg';
import servicesIcon1 from '../assets/icons/student-visa.png';
import servicesIcon2 from '../assets/icons/au-pair.png';
import servicesIcon3 from '../assets/icons/work-visa.png';
import servicesIcon4 from '../assets/icons/language.png';
import testimonialImage1 from '../assets/testimonial-1.png';
import testimonialImage2 from '../assets/testimonial-2.png';
import testimonialImage3 from '../assets/testimonial-3.png';
import partnerLogo1 from '../assets/partners/partner-1.png';
import partnerLogo2 from '../assets/partners/partner-2.png';
import partnerLogo3 from '../assets/partners/partner-3.png';
import partnerLogo4 from '../assets/partners/partner-4.png';
import partnerLogo5 from '../assets/partners/partner-5.png';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${'heroImage'})` }}>
        <div className="hero-content">
          <h1>Your Journey to Germany Starts Here</h1>
          <p>Expert guidance for study, work, and travel opportunities in Germany</p>
          <div className="hero-buttons">
            <Link to="/apply" className="btn btn-primary">Apply Now</Link>
            <Link to="/services" className="btn btn-secondary">Explore</Link>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Services Overview Section */}
      <section className="services-overview">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>We offer comprehensive consultancy for all your German dreams</p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <img src={servicesIcon1} alt="Student Visa" />
            </div>
            <h3>Student Visa</h3>
            <p>Complete guidance for admission to German universities and student visa application process.</p>
            <Link to="/apply" className="service-link">Learn More <i className="fas fa-arrow-right"></i></Link>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <img src={servicesIcon2} alt="AU Pair Visa" />
            </div>
            <h3>AU Pair Program</h3>
            <p>Experience German culture while living with a host family and learning the language.</p>
            <Link to="/apply" className="service-link">Learn More <i className="fas fa-arrow-right"></i></Link>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <img src={servicesIcon3} alt="Work Visa" />
            </div>
            <h3>Work & Ausbildung</h3>
            <p>Professional guidance for job seeking and vocational training opportunities in Germany.</p>
            <Link to="/apply" className="service-link">Learn More <i className="fas fa-arrow-right"></i></Link>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <img src={servicesIcon4} alt="Language Courses" />
            </div>
            <h3>German Language</h3>
            <p>Online German language courses from A1 to C2 level with certified instructors.</p>
            <Link to="/language-courses" className="service-link">Learn More <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-image">
          <div className="image-container">
            <img src="https://images.adsttc.com/media/images/649c/a208/5921/1809/2b26/96e1/medium_jpg/hawe-office-building-barkow-leibinger_6.jpg?1687986715" alt="GERMANY Office" />
          </div>
        </div>
        <div className="about-content">
          <div className="section-header center-aligned">
            <h2>Why Choose Click2Germany?</h2>
            <p>We're dedicated to turning your German dreams into reality</p>
          </div>
          <div className="about-features">
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="feature-text">
                <h3>Expert Consultants</h3>
                <p>Our team consists of experienced professionals with deep knowledge of German immigration procedures.</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="feature-text">
                <h3>High Success Rate</h3>
                <p>We pride ourselves on our high visa approval rates and successful placements in Germany.</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="feature-text">
                <h3>Personalized Approach</h3>
                <p>We create customized plans based on your individual goals and circumstances.</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="feature-text">
                <h3>End-to-End Support</h3>
                <p>From initial consultation to arrival in Germany, we're with you every step of the way.</p>
              </div>
            </div>
          </div>
          <Link to="/about" className="btn btn-primary">Learn More About Us</Link>
        </div>
      </section>

      {/* Language Course Promo */}
      <section className="language-promo">
        <div className="language-promo-content">
          <h2>Master German Language Online</h2>
          <p>Learn German from certified instructors at your own pace and convenience</p>
          <div className="language-levels">
            <div className="level">A1</div>
            <div className="level">A2</div>
            <div className="level">B1</div>
            <div className="level">B2</div>
            <div className="level">C1</div>
            <div className="level">C2</div>
          </div>
          <Link to="/language-courses" className="btn btn-secondary">View Courses</Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="section-header">
          <h2>Success Stories</h2>
          <p>Hear from our satisfied clients who are living their German dreams</p>
        </div>
        <div className="testimonial-slider">
          <div className="testimonial">
            <div className="testimonial-image">
              <img src={testimonialImage1} alt="Testimonial" />
            </div>
            <div className="testimonial-content">
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>"Click2Germany helped me secure admission to my dream university in Berlin. Their language courses and application guidance were invaluable."</p>
              <h4>Sujata Sharma</h4>
              <p className="client-status">Student at TU Berlin</p>
            </div>
          </div>
          <div className="testimonial">
            <div className="testimonial-image">
              <img src={testimonialImage2} alt="Testimonial" />
            </div>
            <div className="testimonial-content">
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>"The AU Pair program arranged by Click2Germany was life-changing. I improved my German skills and experienced the culture firsthand."</p>
              <h4>Rohan Thapa</h4>
              <p className="client-status">Former AU Pair in Munich</p>
            </div>
          </div>
          <div className="testimonial">
            <div className="testimonial-image">
              <img src={testimonialImage3} alt="Testimonial" />
            </div>
            <div className="testimonial-content">
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>"Thanks to Click2Germany's Ausbildung program guidance, I'm now training to be a nurse in Hamburg with a clear path to permanent residency."</p>
              <h4>Anisha Karki</h4>
              <p className="client-status">Nursing Trainee in Hamburg</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-item">
          <h3>1000+</h3>
          <p>Successful Visa Applications</p>
        </div>
        <div className="stat-item">
          <h3>500+</h3>
          <p>University Placements</p>
        </div>
        <div className="stat-item">
          <h3>200+</h3>
          <p>AU Pair Placements</p>
        </div>
        <div className="stat-item">
          <h3>300+</h3>
          <p>Ausbildung & Job Placements</p>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <div className="section-header">
          <h2>Our Partners</h2>
          <p>We collaborate with renowned German institutions and organizations</p>
        </div>
        <div className="partners-logo">
          <img src={partnerLogo1} alt="Partner Logo" />
          <img src={partnerLogo2} alt="Partner Logo" />
          <img src={partnerLogo3} alt="Partner Logo" />
          <img src={partnerLogo4} alt="Partner Logo" />
          <img src={partnerLogo5} alt="Partner Logo" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Begin Your German Journey?</h2>
          <p>Contact us today for a free consultation and take the first step towards your future in Germany</p>
          <div className="cta-buttons">
            <Link to="/apply" className="btn btn-primary">Apply Now</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;