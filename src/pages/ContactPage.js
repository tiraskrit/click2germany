import React, { useState } from 'react';
// import '../styles/ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    // Show success message
    alert('Thank you for your message. We will contact you soon!');
  };

  return (
    <div className="contact-page">
      <section className="page-header contact-header">
        <div className="page-header-content">
          <h1>Contact Us</h1>
          <p>Get in touch with our expert consultants for any inquiries</p>
        </div>
        <div className="page-header-overlay"></div>
      </section>

      <section className="contact-info">
        <div className="container">
          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Visit Us</h3>
              <p>GERMANY Consultancy</p>
              <p>J.P. Road, Thamel</p>
              <p>Kathmandu, Nepal</p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <h3>Call Us</h3>
              <p>+977 1 4123456</p>
              <p>+977 9801234567</p>
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Email Us</h3>
              <p>info@germany.com.np</p>
              <p>admissions@germany.com.np</p>
              <p>language@germany.com.np</p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-comments"></i>
              </div>
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and our team will get back to you within 24 hours</p>
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="student-visa">Student Visa Inquiry</option>
                      <option value="au-pair">AU Pair Program</option>
                      <option value="ausbildung">Ausbildung/Vocational Training</option>
                      <option value="work-visa">Work Visa</option>
                      <option value="tourist-visa">Tourist Visa</option>
                      <option value="language-course">Language Courses</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <div className="form-group form-checkbox">
                  <input type="checkbox" id="privacy" name="privacy" required />
                  <label htmlFor="privacy">I agree to the processing of my personal data according to GERMANY's <a href="/privacy-policy">Privacy Policy</a> *</label>
                </div>
                
                <div className="form-submit">
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </div>
              </form>
            </div>
            
            <div className="map-container">
              <h2>Find Us</h2>
              <div className="map">
                {/* Map placeholder - would be replaced with actual Google Maps iframe */}
                <img src="/api/placeholder/600/450" alt="Map Location" />
              </div>
              <div className="office-hours">
                <h3>Office Hours</h3>
                <ul>
                  <li><span>Monday - Friday:</span> 9:00 AM - 5:00 PM</li>
                  <li><span>Saturday:</span> 10:00 AM - 2:00 PM</li>
                  <li><span>Sunday:</span> Closed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          
          <div className="faq-accordion">
            <div className="faq-item">
              <div className="faq-question">
                <h3>Do I need to schedule an appointment before visiting your office?</h3>
                <span className="faq-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="faq-answer">
                <p>While walk-ins are welcome, we recommend scheduling an appointment to ensure that a consultant is available to assist you with your specific inquiries. You can book an appointment by phone, email, or through our online appointment form.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <h3>How long does it take to get a response after submitting a contact form?</h3>
                <span className="faq-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="faq-answer">
                <p>We aim to respond to all inquiries within 24 business hours. For urgent matters, we recommend calling our office directly.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <h3>Do you offer online consultations?</h3>
                <span className="faq-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="faq-answer">
                <p>Yes, we offer virtual consultations via Zoom, Microsoft Teams, or other platforms of your choice. This is particularly convenient for clients outside Kathmandu or those who prefer remote meetings.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <h3>Is the initial consultation free?</h3>
                <span className="faq-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="faq-answer">
                <p>Yes, we offer a free 30-minute initial consultation to discuss your goals and determine how we can best assist you. Detailed consultations and personalized planning sessions are part of our paid services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>Subscribe to Our Newsletter</h2>
            <p>Stay updated with the latest German visa regulations, university admissions, and opportunities</p>
            
            <form className="newsletter-form">
              <input type="email" placeholder="Your Email Address" required />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;