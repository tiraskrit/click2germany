import React from 'react';
import { Link } from 'react-router-dom';
// import '../styles/AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="page-header about-header">
        <div className="page-header-content">
          <h1>Click2Germany</h1>
          <p>Learn about our journey, mission, and the team behind our success</p>
        </div>
        <div className="page-header-overlay"></div>
      </section>

      <section className="about-story">
        <div className="container">
          <div className="about-content">
            <div className="section-header left-aligned">
              <h2>Our Story</h2>
            </div>
            <p>GERMANY was founded in 2018 by a group of Nepali professionals who had experienced the challenges of navigating the German immigration system firsthand. Recognizing the lack of reliable guidance for Nepalis seeking opportunities in Germany, they established GERMANY to bridge this gap.</p>
            <p>What started as a small consultancy in Thamel, Kathmandu has now grown into a trusted name in German visa consultancy and language education. Over the years, we have helped more than 2,000 Nepalis successfully relocate to Germany for studies, work, vocational training, and cultural exchange programs.</p>
            <p>Our team now includes former German university students, language experts, visa specialists, and professionals with extensive experience in the German education and employment sectors.</p>
          </div>
          <div className="about-image">
            <img src="/api/placeholder/500/400" alt="GERMANY Office" />
          </div>
        </div>
      </section>

      <section className="mission-vision">
        <div className="container">
          <div className="mission">
            <div className="mission-icon">
              <i className="fas fa-bullseye"></i>
            </div>
            <h2>Our Mission</h2>
            <p>To provide accessible, reliable, and comprehensive consultancy services that empower Nepali citizens to pursue educational, professional, and cultural opportunities in Germany.</p>
          </div>
          <div className="vision">
            <div className="vision-icon">
              <i className="fas fa-eye"></i>
            </div>
            <h2>Our Vision</h2>
            <p>To be the leading bridge between Nepal and Germany, facilitating meaningful exchanges of knowledge, skills, and culture that benefit individuals and contribute to both societies.</p>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Integrity</h3>
              <p>We uphold the highest ethical standards in all our interactions and provide honest guidance to our clients.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Excellence</h3>
              <p>We strive for excellence in our services and continuously update our knowledge and methodology.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Client-Centered</h3>
              <p>We prioritize the unique needs and goals of each client, offering personalized support throughout their journey.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3>Empowerment</h3>
              <p>We believe in empowering individuals with the knowledge and skills they need to succeed in Germany.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-globe-europe"></i>
              </div>
              <h3>Cultural Bridge</h3>
              <p>We facilitate cultural understanding and integration, preparing our clients for life in a new country.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Compassion</h3>
              <p>We approach each client's journey with empathy, understanding the challenges of pursuing opportunities abroad.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Team</h2>
            <p>Our dedicated professionals are committed to your success</p>
          </div>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src="/api/placeholder/300/300" alt="Team Member" />
              </div>
              <h3>Anand Sharma</h3>
              <p className="member-title">Founder & CEO</p>
              <p>Former International Student in Berlin with 10+ years experience in education consultancy</p>
              <div className="social-links">
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="/api/placeholder/300/300" alt="Team Member" />
              </div>
              <h3>Sunita Poudel</h3>
              <p className="member-title">Language Program Director</p>
              <p>Certified German Language Teacher with C2 proficiency and 8+ years teaching experience</p>
              <div className="social-links">
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="/api/placeholder/300/300" alt="Team Member" />
              </div>
              <h3>Michael Müller</h3>
              <p className="member-title">German University Relations</p>
              <p>Native German speaker with extensive connections to German universities and educational institutions</p>
              <div className="social-links">
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="/api/placeholder/300/300" alt="Team Member" />
              </div>
              <h3>Binita Gurung</h3>
              <p className="member-title">Visa & Immigration Specialist</p>
              <p>Former visa officer with 6+ years experience in German immigration procedures</p>
              <div className="social-links">
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="/api/placeholder/300/300" alt="Team Member" />
              </div>
              <h3>Prakash Thapa</h3>
              <p className="member-title">Career Counselor</p>
              <p>Specializes in Ausbildung and work placement opportunities with German companies</p>
              <div className="social-links">
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="/api/placeholder/300/300" alt="Team Member" />
              </div>
              <h3>Lisa Schmidt</h3>
              <p className="member-title">AU Pair Program Coordinator</p>
              <p>Former AU Pair with extensive experience in matching candidates with host families</p>
              <div className="social-links">
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="achievements-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Achievements</h2>
          </div>
          <div className="achievements-timeline">
            <div className="timeline-item">
              <div className="timeline-year">2018</div>
              <div className="timeline-content">
                <h3>Foundation</h3>
                <p>GERMANY was established in Thamel, Kathmandu as a specialized German consultancy service.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2019</div>
              <div className="timeline-content">
                <h3>Language Center Launch</h3>
                <p>Introduced online German language courses with certified instructors.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h3>100th Success Story</h3>
                <p>Celebrated our 100th successful visa approval and university placement.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2021</div>
              <div className="timeline-content">
                <h3>Partnership with German Institutions</h3>
                <p>Established formal partnerships with several German universities and vocational schools.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2022</div>
              <div className="timeline-content">
                <h3>AU Pair Program Expansion</h3>
                <p>Launched a dedicated AU Pair program with connections to 50+ German host families.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2023</div>
              <div className="timeline-content">
                <h3>1000+ Success Stories</h3>
                <p>Reached the milestone of helping over 1000 Nepalis successfully relocate to Germany.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h3>Recognition as Leading Consultancy</h3>
                <p>Recognized as Nepal's leading German education and immigration consultancy.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2025</div>
              <div className="timeline-content">
                <h3>Digital Transformation</h3>
                <p>Launch of comprehensive online platform to serve clients nationwide and internationally.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Start Your German Journey?</h2>
          <p>Contact our team for personalized guidance and consultation</p>
          <div className="cta-buttons">
            <Link to="/apply" className="btn btn-primary">Apply Now</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
