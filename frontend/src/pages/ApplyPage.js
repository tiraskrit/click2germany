import React, { useState } from 'react';
// import '../styles/ApplyPage.css';

const ApplyPage = () => {
  const [selectedVisa, setSelectedVisa] = useState('student');
  
  const handleVisaChange = (visa) => {
    setSelectedVisa(visa);
  };

  return (
    <div className="apply-page">
      <section className="page-header">
        <div className="page-header-content">
          <h1>Apply for German Visa</h1>
          <p>Choose the right visa category and start your application process</p>
        </div>
        <div className="page-header-overlay"></div>
      </section>

      <section className="visa-selection">
        <div className="container">
          <h2>Select Visa Category</h2>
          <div className="visa-tabs">
            <button 
              className={`visa-tab ${selectedVisa === 'student' ? 'active' : ''}`}
              onClick={() => handleVisaChange('student')}
            >
              <i className="fas fa-graduation-cap"></i> Student Visa
            </button>
            <button 
              className={`visa-tab ${selectedVisa === 'aupair' ? 'active' : ''}`}
              onClick={() => handleVisaChange('aupair')}
            >
              <i className="fas fa-home"></i> AU Pair Visa
            </button>
            <button 
              className={`visa-tab ${selectedVisa === 'ausbildung' ? 'active' : ''}`}
              onClick={() => handleVisaChange('ausbildung')}
            >
              <i className="fas fa-tools"></i> Ausbildung Visa
            </button>
            <button 
              className={`visa-tab ${selectedVisa === 'work' ? 'active' : ''}`}
              onClick={() => handleVisaChange('work')}
            >
              <i className="fas fa-briefcase"></i> Working Visa
            </button>
            <button 
              className={`visa-tab ${selectedVisa === 'tourist' ? 'active' : ''}`}
              onClick={() => handleVisaChange('tourist')}
            >
              <i className="fas fa-plane"></i> Tourist Visa
            </button>
          </div>

          <div className="visa-content">
            {selectedVisa === 'student' && (
              <div className="visa-info">
                <h3>Student Visa Application</h3>
                <p>Pursue higher education at German universities with a student visa. This visa is for students who have received admission from a German educational institution.</p>
                
                <div className="visa-requirements">
                  <h4>Requirements:</h4>
                  <ul>
                    <li>University admission letter</li>
                    <li>Proof of financial resources</li>
                    <li>Health insurance</li>
                    <li>German language proficiency (usually B1/B2)</li>
                    <li>Academic transcripts</li>
                  </ul>
                </div>

                <div className="process-timeline">
                  <h4>Application Process:</h4>
                  <div className="timeline">
                    <div className="timeline-item">
                      <div className="timeline-icon">1</div>
                      <div className="timeline-content">
                        <h5>Initial Consultation</h5>
                        <p>Meet with our consultants to discuss your educational goals</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-icon">2</div>
                      <div className="timeline-content">
                        <h5>University Application</h5>
                        <p>We assist in applying to suitable German universities</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-icon">3</div>
                      <div className="timeline-content">
                        <h5>Language Preparation</h5>
                        <p>Enroll in our German language courses to reach required proficiency</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-icon">4</div>
                      <div className="timeline-content">
                        <h5>Visa Application</h5>
                        <p>Complete documentation and application for student visa</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-icon">5</div>
                      <div className="timeline-content">
                        <h5>Pre-departure Guidance</h5>
                        <p>Preparation for travel and life in Germany</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedVisa === 'aupair' && (
              <div className="visa-info">
                <h3>AU Pair Visa Application</h3>
                <p>Live with a German host family, learn the language, and experience the culture with an AU Pair visa. This program is ideal for young adults aged 18-26.</p>
                
                <div className="visa-requirements">
                  <h4>Requirements:</h4>
                  <ul>
                    <li>Age between 18-26 years</li>
                    <li>Basic German language skills (A1 level)</li>
                    <li>Host family placement agreement</li>
                    <li>Health insurance</li>
                    <li>Clean criminal record</li>
                  </ul>
                </div>

                <div className="process-timeline">
                  <h4>Application Process:</h4>
                  <div className="timeline">
                    <div className="timeline-item">
                      <div className="timeline-icon">1</div>
                      <div className="timeline-content">
                        <h5>Initial Consultation</h5>
                        <p>Discuss your expectations and preferences for AU Pair program</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-icon">2</div>
                      <div className="timeline-content">
                        <h5>Host Family Matching</h5>
                        <p>We connect you with suitable German host families</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-icon">3</div>
                      <div className="timeline-content">
                        <h5>Language Preparation</h5>
                        <p>Basic German language training (A1 level)</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-icon">4</div>
                      <div className="timeline-content">
                        <h5>Visa Application</h5>
                        <p>Complete documentation and application for AU Pair visa</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-icon">5</div>
                      <div className="timeline-content">
                        <h5>Pre-departure Guidance</h5>
                        <p>Preparation for your role and life with a German family</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedVisa === 'ausbildung' && (
              <div className="visa-info">
                <h3>Ausbildung (Vocational Training) Visa Application</h3>
                <p>Receive practical training in a recognized profession through Click2Germany's dual vocational training system. This combines practical work with theoretical education.</p>
                
                <div className="visa-requirements">
                  <h4>Requirements:</h4>
                  <ul>
                    <li>Training contract with a German company</li>
                    <li>German language proficiency (B1 level)</li>
                    <li>Proof of financial resources</li>
                    <li>Health insurance</li>
                    <li>Educational qualifications</li>
                  </ul>
                </div>

                <div className="process-timeline">
                  <h4>Application Process:</h4>
                  <div className="timeline">
                    <div className="timeline-item">
                      <div className="timeline-icon">1</div>
                      <div className="timeline-content">
                        <h5>Initial Consultation</h5>
                        <p>Discuss suitable vocational training programs based on your interests</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-icon">2</div>
                      <div className="timeline-content">
                        <h5>Training Position Search</h5>
                        <p>We assist in finding and applying for Ausbildung positions</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-icon">3</div>
                      <div className="timeline-content">
                        <h5>Language Preparation</h5>
                        <p>German language training (B1 level)</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-icon">4</div>
                      <div className="timeline-content">
                        <h5>Visa Application</h5>
                        <p>Complete documentation and application for Ausbildung visa</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-icon">5</div>
                      <div className="timeline-content">
                        <h5>Pre-departure Guidance</h5>
                        <p>Preparation for training and life in Germany</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedVisa === 'work' && (
              <div className="visa-info">
                <h3>Working Visa Application</h3>
                <p>For skilled professionals seeking employment opportunities in Germany. This visa allows you to work in your field of expertise in the German job market.</p>
                
                <div className="visa-requirements">
                  <h4>Requirements:</h4>
                  <ul>
                    <li>Job offer from a German employer</li>
                    <li>Recognized qualifications for the job</li>
                    <li>German language proficiency (job-dependent)</li>
                    <li>Health insurance</li>
                    <li>Work experience documentation</li>
                  </ul>
                </div>

                <div className="process-timeline">
                  <h4>Application Process:</h4>
                  <div className="timeline">
                    <div className="timeline-item">
                      <div className="timeline-icon">1</div>
                      <div className="timeline-content">
                        <h5>Initial Consultation</h5>
                        <p>Evaluate your skills and job prospects in Germany</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-icon">2</div>
                      <div className="timeline-content">
                        <h5>Job Search Assistance</h5>
                        <p>Resume preparation and job application support</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-icon">3</div>
                      <div className="timeline-content">
                        <h5>Qualification Recognition</h5>
                        <p>Assistance with recognition of foreign qualifications</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-icon">4</div>
                      <div className="timeline-content">
                        <h5>Visa Application</h5>
                        <p>Complete documentation and application for working visa</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-icon">5</div>
                      <div className="timeline-content">
                        <h5>Pre-departure Guidance</h5>
                        <p>Preparation for work and life in Germany</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedVisa === 'tourist' && (
              <div className="visa-info">
                <h3>Tourist Visa Application</h3>
                <p>Explore Germany for leisure, visit family and friends, or attend short-term events with a tourist visa for stays up to 90 days.</p>
                
                <div className="visa-requirements">
                  <h4>Requirements:</h4>
                  <ul>
                    <li>Valid passport</li>
                    <li>Travel itinerary</li>
                    <li>Proof of accommodation</li>
                    <li>Travel insurance</li>
                    <li>Proof of financial resources</li>
                    <li>Return ticket</li>
                  </ul>
                </div>

                <div className="process-timeline">
                  <h4>Application Process:</h4>
                  <div className="timeline">
                    <div className="timeline-item">
                      <div className="timeline-icon">1</div>
                      <div className="timeline-content">
                        <h5>Initial Consultation</h5>
                        <p>Discuss your travel plans and visa requirements</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-icon">2</div>
                      <div className="timeline-content">
                        <h5>Documentation Preparation</h5>
                        <p>Gather all required documents for your application</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-icon">3</div>
                      <div className="timeline-content">
                        <h5>Visa Application</h5>
                        <p>Complete application forms and submission</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-icon">4</div>
                      <div className="timeline-content">
                        <h5>Travel Planning</h5>
                        <p>Assistance with itinerary and accommodation arrangements</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="application-form">
        <div className="container">
          <h2>Start Your Application</h2>
          <p>Fill out the form below to begin your visa application process</p>
          
          <form className="visa-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input type="text" id="fullName" name="fullName" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" name="email" required />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
              <div className="form-group">
                <label htmlFor="dob">Date of Birth *</label>
                <input type="date" id="dob" name="dob" required />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="education">Highest Educational Qualification *</label>
                <select id="education" name="education" required>
                  <option value="">Select your qualification</option>
                  <option value="high-school">High School</option>
                  <option value="bachelors">Bachelor's Degree</option>
                  <option value="masters">Master's Degree</option>
                  <option value="phd">PhD</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="germanLevel">German Language Level</label>
                <select id="germanLevel" name="germanLevel">
                  <option value="">Select your level</option>
                  <option value="none">No Knowledge</option>
                  <option value="a1">A1 (Beginner)</option>
                  <option value="a2">A2 (Elementary)</option>
                  <option value="b1">B1 (Intermediate)</option>
                  <option value="b2">B2 (Upper Intermediate)</option>
                  <option value="c1">C1 (Advanced)</option>
                  <option value="c2">C2 (Proficient)</option>
                </select>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="visaType">Visa Type *</label>
              <select id="visaType" name="visaType" required>
                <option value="">Select visa type</option>
                <option value="student">Student Visa</option>
                <option value="aupair">AU Pair Visa</option>
                <option value="ausbildung">Ausbildung Visa</option>
                <option value="work">Working Visa</option>
                <option value="tourist">Tourist Visa</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Additional Information</label>
              <textarea id="message" name="message" rows="4"></textarea>
            </div>
            
            <div className="form-group form-checkbox">
              <input type="checkbox" id="terms" name="terms" required />
              <label htmlFor="terms">I agree to the processing of my personal data according to Click2Germany's <a href="/privacy-policy">Privacy Policy</a> *</label>
            </div>
            
            <div className="form-submit">
              <button type="submit" className="btn btn-primary">Submit Application</button>
            </div>
          </form>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-accordion">
            <div className="faq-item">
              <div className="faq-question">
                <h3>How long does the visa application process take?</h3>
                <span className="faq-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="faq-answer">
                <p>The processing time varies depending on the visa type. Student visas typically take 4-6 weeks, while work visas may take 8-12 weeks. We recommend applying at least 3 months before your planned departure.</p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <h3>What are the costs involved in the application process?</h3>
                <span className="faq-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="faq-answer">
                <p>Costs include visa application fees (€75-€100), health insurance (varies), blocked account deposit (€11,208 for students), and our consultancy fees. We provide a detailed breakdown during your initial consultation.</p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <h3>Do I need to know German language for all visa types?</h3>
                <span className="faq-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="faq-answer">
                <p>Language requirements vary by visa type. Student visas typically require B1/B2 level, Ausbildung visas require B1, while tourist visas have no language requirement. We offer language courses to help you meet these requirements.</p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <h3>What is a blocked account and who needs it?</h3>
                <span className="faq-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="faq-answer">
                <p>A blocked account is a special account that proves you have sufficient funds to support yourself in Germany. It's primarily required for student visa applicants, who must deposit approximately €11,208 (subject to change) to cover one year of expenses.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplyPage;