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
            <p><b><i>Click2Germany</i></b> was founded in 2018 by a group of Nepali professionals who had experienced the challenges of navigating the German immigration system firsthand. Recognizing the lack of reliable guidance for Nepalis seeking opportunities in Germany, they established <b><i>Click2Germany</i></b> to bridge this gap.</p>
            <p>What started as a small consultancy in Thamel, Kathmandu has now grown into a trusted name in German visa consultancy and language education. Over the years, we have helped more than 2,000 Nepalis successfully relocate to Germany for studies, work, vocational training, and cultural exchange programs.</p>
            <p>Our team now includes former German university students, language experts, visa specialists, and professionals with extensive experience in the German education and employment sectors.</p>
          </div>
          <div className="about-image">
            <img src="https://images.adsttc.com/media/images/649c/a208/5921/1809/2b26/96e1/medium_jpg/hawe-office-building-barkow-leibinger_6.jpg?1687986715" alt="GERMANY Office" />
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
                <img src="https://i.pinimg.com/474x/65/0e/83/650e839353173e1126198f6e6fd7432c.jpg" alt="Team Member" />
              </div>
              <h3>Anand Sharma <a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a> <a href="https://twitter.com"><i className="fab fa-twitter"></i></a></h3>
              <p className="member-title"><b>Founder & CEO</b></p>
              <p>Former International Student in Berlin with 10+ years experience in education consultancy</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="https://st3.depositphotos.com/2000559/15054/i/450/depositphotos_150549284-stock-photo-pretty-female-teen.jpg" alt="" />
              </div>
              <h3>Sunita Poudel <a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a> <a href="https://twitter.com"><i className="fab fa-twitter"></i></a></h3>
              <p className="member-title"><b>Language Program Director</b></p>
              <p>Certified German Language Teacher with C2 proficiency and 8+ years teaching experience</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="https://www.rbb24.de/content/dam/rbb/rbb/rbb24/2021/2020_02/imago-images/mm.jpg.jpg/size=708x398.jpg" alt="" />
              </div>
              <h3>Michael Müller <a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a> <a href="https://twitter.com"><i className="fab fa-twitter"></i></a></h3>
              <p className="member-title"><b>German University Relations</b></p>
              <p>Native German speaker with extensive connections to German universities and educational institutions</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="https://files.photosnepal.com/preview/2022/12/professional-nepali-businesswoman-posing-with-laptop-over-black-background-wbr9whexv.jpg?size=large" alt="Team Member" />
              </div>
              <h3>Binita Gurung <a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a> <a href="https://twitter.com"><i className="fab fa-twitter"></i></a></h3>
              <p className="member-title"><b>Visa & Immigration Specialist</b></p>
              <p>Former visa officer with 6+ years experience in German immigration procedures</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="https://i0.wp.com/neostuffs.com/wp-content/uploads/2016/02/dayahang.jpg?fit=708%2C708&ssl=1" alt="" />
              </div>
              <h3>Prakash Thapa <a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a> <a href="https://twitter.com"><i className="fab fa-twitter"></i></a></h3>
              <p className="member-title"><b>Career Counselor</b></p>
              <p>Specializes in Ausbildung and work placement opportunities with German companies</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="https://english.onlinekhabar.com/wp-content/uploads/2021/03/Anushka.jpg" alt="Team Member" />
              </div>
              <h3>Lisa Schmidt <a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a> <a href="https://twitter.com"><i className="fab fa-twitter"></i></a></h3>
              <p className="member-title"><b>AU Pair Program Coordinator</b></p>
              <p>Former AU Pair with extensive experience in matching candidates with host families</p>
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
                <p>Click2Germany was established in Thamel, Kathmandu as a specialized German consultancy service.</p>
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
