import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import '../styles/LanguageCoursesPage.css';

const LanguageCoursesPage = () => {
  const [selectedLevel, setSelectedLevel] = useState('all');
  
  const handleLevelChange = (level) => {
    setSelectedLevel(level);
  };

  const courses = [
    {
      id: 1,
      level: 'a1',
      title: 'A1 - Beginner German',
      description: 'Start your German language journey with our comprehensive beginner course. Learn basic vocabulary, grammar, and simple conversations.',
      duration: '8 weeks',
      schedule: [
        { day: 'Monday & Wednesday', time: '6:00 PM - 7:30 PM' },
        { day: 'Tuesday & Thursday', time: '10:00 AM - 11:30 AM' },
        { day: 'Saturday & Sunday', time: '9:00 AM - 12:00 PM (Weekend Intensive)' }
      ],
      price: 'NPR 12,000',
      startDates: ['May 15, 2025', 'June 10, 2025', 'July 5, 2025']
    },
    {
      id: 2,
      level: 'a2',
      title: 'A2 - Elementary German',
      description: 'Build on your basic knowledge with our A2 course. Expand your vocabulary and learn to communicate in everyday situations with more confidence.',
      duration: '10 weeks',
      schedule: [
        { day: 'Monday & Wednesday', time: '7:45 PM - 9:15 PM' },
        { day: 'Tuesday & Thursday', time: '1:00 PM - 2:30 PM' },
        { day: 'Saturday & Sunday', time: '1:00 PM - 4:00 PM (Weekend Intensive)' }
      ],
      price: 'NPR 15,000',
      startDates: ['May 15, 2025', 'June 10, 2025', 'July 5, 2025']
    },
    {
      id: 3,
      level: 'b1',
      title: 'B1 - Intermediate German',
      description: 'Advance your German skills with our B1 course. Focus on more complex grammar, expanding vocabulary, and improving conversation skills for daily life.',
      duration: '12 weeks',
      schedule: [
        { day: 'Monday & Wednesday', time: '6:00 PM - 7:30 PM' },
        { day: 'Tuesday & Thursday', time: '6:00 PM - 7:30 PM' },
        { day: 'Saturday & Sunday', time: '9:00 AM - 12:00 PM (Weekend Intensive)' }
      ],
      price: 'NPR 18,000',
      startDates: ['May 22, 2025', 'June 17, 2025', 'July 12, 2025']
    },
    {
      id: 4,
      level: 'b2',
      title: 'B2 - Upper Intermediate German',
      description: 'Refine your German language skills with our B2 course. Develop fluency in various contexts and prepare for academic or professional environments.',
      duration: '12 weeks',
      schedule: [
        { day: 'Monday & Wednesday', time: '7:45 PM - 9:15 PM' },
        { day: 'Tuesday & Thursday', time: '7:45 PM - 9:15 PM' },
        { day: 'Saturday & Sunday', time: '1:00 PM - 4:00 PM (Weekend Intensive)' }
      ],
      price: 'NPR 20,000',
      startDates: ['May 22, 2025', 'June 17, 2025', 'July 12, 2025']
    },
    {
      id: 5,
      level: 'c1',
      title: 'C1 - Advanced German',
      description: 'Master complex aspects of German with our C1 course. Achieve near-native fluency and handle academic and professional communication with confidence.',
      duration: '14 weeks',
      schedule: [
        { day: 'Monday & Wednesday', time: '6:00 PM - 8:00 PM' },
        { day: 'Saturday & Sunday', time: '9:00 AM - 1:00 PM (Weekend Intensive)' }
      ],
      price: 'NPR 25,000',
      startDates: ['June 1, 2025', 'July 15, 2025', 'August 10, 2025']
    },
    {
      id: 6,
      level: 'c2',
      title: 'C2 - Proficiency German',
      description: 'Achieve the highest level of German language proficiency with our C2 course. Perfect your skills to communicate at a native-like level in all contexts.',
      duration: '16 weeks',
      schedule: [
        { day: 'Tuesday & Thursday', time: '6:00 PM - 8:00 PM' },
        { day: 'Saturday & Sunday', time: '2:00 PM - 6:00 PM (Weekend Intensive)' }
      ],
      price: 'NPR 30,000',
      startDates: ['June 5, 2025', 'August 1, 2025', 'September 15, 2025']
    }
  ];

  const filteredCourses = selectedLevel === 'all' ? courses : courses.filter(course => course.level === selectedLevel);

  return (
    <div className="language-courses-page">
      <section className="page-header language-header">
        <div className="page-header-content">
          <h1>German Language Courses</h1>
          <p>Learn German from certified instructors through our online classes</p>
        </div>
        <div className="page-header-overlay"></div>
      </section>

      <section className="language-intro">
        <div className="container">
          <div className="language-intro-content">
            <h2>Why Learn German with GERMANY?</h2>
            <p>Our online German language courses are designed to help you achieve fluency and confidence in German, preparing you for study, work, or life in Germany.</p>
            
            <div className="language-features">
              <div className="feature">
                <div className="feature-icon">
                  <i className="fas fa-user-graduate"></i>
                </div>
                <div className="feature-text">
                  <h3>Certified Instructors</h3>
                  <p>Learn from native German speakers and certified language teachers with years of experience.</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">
                  <i className="fas fa-laptop"></i>
                </div>
                <div className="feature-text">
                  <h3>Interactive Online Classes</h3>
                  <p>Engage in interactive lessons with small class sizes to ensure personal attention and maximum speaking practice.</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">
                  <i className="fas fa-book"></i>
                </div>
                <div className="feature-text">
                  <h3>Comprehensive Learning Materials</h3>
                  <p>Access to digital textbooks, audio materials, and additional resources to support your learning journey.</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">
                  <i className="fas fa-certificate"></i>
                </div>
                <div className="feature-text">
                  <h3>Certificate of Completion</h3>
                  <p>Receive a certificate at the end of each level, recognized for visa applications and academic purposes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="course-levels">
        <div className="container">
          <h2>Our German Courses</h2>
          <p>Select the appropriate level to view course details</p>
          
          <div className="level-tabs">
            <button 
              className={`level-tab ${selectedLevel === 'all' ? 'active' : ''}`}
              onClick={() => handleLevelChange('all')}
            >
              All Levels
            </button>
            <button 
              className={`level-tab ${selectedLevel === 'a1' ? 'active' : ''}`}
              onClick={() => handleLevelChange('a1')}
            >
              A1 - Beginner
            </button>
            <button 
              className={`level-tab ${selectedLevel === 'a2' ? 'active' : ''}`}
              onClick={() => handleLevelChange('a2')}
            >
              A2 - Elementary
            </button>
            <button 
              className={`level-tab ${selectedLevel === 'b1' ? 'active' : ''}`}
              onClick={() => handleLevelChange('b1')}
            >
              B1 - Intermediate
            </button>
            <button 
              className={`level-tab ${selectedLevel === 'b2' ? 'active' : ''}`}
              onClick={() => handleLevelChange('b2')}
            >
              B2 - Upper Intermediate
            </button>
            <button 
              className={`level-tab ${selectedLevel === 'c1' ? 'active' : ''}`}
              onClick={() => handleLevelChange('c1')}
            >
              C1 - Advanced
            </button>
            <button 
              className={`level-tab ${selectedLevel === 'c2' ? 'active' : ''}`}
              onClick={() => handleLevelChange('c2')}
            >
              C2 - Proficiency
            </button>
          </div>
          
          <div className="course-grid">
            {filteredCourses.map(course => (
              <div className="course-card" key={course.id}>
                <div className={`course-level course-level-${course.level}`}>
                  {course.level.toUpperCase()}
                </div>
                <div className="course-content">
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  
                  <div className="course-details">
                    <div className="detail">
                      <i className="fas fa-calendar-alt"></i>
                      <span>Duration: {course.duration}</span>
                    </div>
                    <div className="detail">
                      <i className="fas fa-clock"></i>
                      <span>Schedule:</span>
                      <ul>
                        {course.schedule.map((schedule, index) => (
                          <li key={index}>{schedule.day}: {schedule.time}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="detail">
                      <i className="fas fa-money-bill-wave"></i>
                      <span>Price: {course.price}</span>
                    </div>
                    <div className="detail">
                      <i className="fas fa-calendar-check"></i>
                      <span>Upcoming Batches:</span>
                      <ul>
                        {course.startDates.map((date, index) => (
                          <li key={index}>{date}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <button className="btn btn-primary">Book Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="language-exam">
        <div className="container">
          <div className="exam-content">
            <h2>Official German Language Exams</h2>
            <p>We are an authorized test center for official German language examinations required for visa applications and university admissions.</p>
            
            <div className="exam-types">
              <div className="exam">
                <h3>Goethe-Zertifikat</h3>
                <p>Internationally recognized German language certificates offered by the Goethe-Institut. Available for all levels from A1 to C2.</p>
                <button className="btn btn-secondary">More Info</button>
              </div>
              
              <div className="exam">
                <h3>TestDaF</h3>
                <p>Test of German as a Foreign Language, required for admission to German universities. Equivalent to B2-C1 levels.</p>
                <button className="btn btn-secondary">More Info</button>
              </div>
              
              <div className="exam">
                <h3>telc Deutsch</h3>
                <p>The European Language Certificates in German, recognized for academic and professional purposes in German-speaking countries.</p>
                <button className="btn btn-secondary">More Info</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="language-faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          
          <div className="faq-accordion">
            <div className="faq-item">
              <div className="faq-question">
                <h3>How are the online classes conducted?</h3>
                <span className="faq-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="faq-answer">
                <p>Our online classes are conducted via Zoom with interactive features. You'll need a stable internet connection, a computer or tablet with a webcam and microphone. Classes include live instruction, breakout rooms for practice, multimedia presentations, and interactive exercises.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <h3>What level should I start with?</h3>
                <span className="faq-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="faq-answer">
                <p>If you have no prior knowledge of German, you should start with A1. If you've studied German before, we offer a free placement test to determine your current level and recommend the appropriate course.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <h3>How many students are in each class?</h3>
                <span className="faq-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="faq-answer">
                <p>We maintain small class sizes of 8-12 students to ensure personalized attention and maximum speaking opportunities for each student.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <h3>What if I miss a class?</h3>
                <span className="faq-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="faq-answer">
                <p>All classes are recorded and made available for students who miss a session. You can also schedule a short catch-up session with your instructor during their office hours.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <h3>Are the certificates recognized for visa applications?</h3>
                <span className="faq-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="faq-answer">
                <p>Our course completion certificates are useful for visa application documentation, but for official language proficiency proof, we recommend taking the Goethe-Zertifikat or telc exams which we can help you prepare for and register.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Start Your German Language Journey?</h2>
          <p>Book a free trial class or speak to our language counselors for personalized guidance</p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Book Free Trial</button>
            <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LanguageCoursesPage;