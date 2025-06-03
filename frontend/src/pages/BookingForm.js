import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import '../styles/BookingForm.css';

const BookingForm = ({ course, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    email: '',
    phone: '',
    selectedStartDate: '',
    selectedSchedule: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentApproved, setPaymentApproved] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const { name, dateOfBirth, email, selectedStartDate, selectedSchedule } = formData;
    return name && dateOfBirth && email && selectedStartDate && selectedSchedule;
  };

  const createPayPalOrder = async () => {
    try {
      const response = await fetch('/api/create-paypal-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          courseId: course.id,
          amount: course.priceNumeric,
          currency: course.currency
        }),
      });
      
      const data = await response.json();
      return data.orderID;
    } catch (error) {
      console.error('Error creating PayPal order:', error);
      throw error;
    }
  };

  const onPayPalApprove = async (data) => {
    try {
      setIsSubmitting(true);
      
      // Capture the payment
      const captureResponse = await fetch('/api/capture-paypal-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderID: data.orderID
        }),
      });
      
      const captureData = await captureResponse.json();
      
      if (captureData.status === 'COMPLETED') {
        setPaymentApproved(true);
        
        // Create booking in database
        const bookingResponse = await fetch('/api/bookings', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            courseId: course.id,
            paymentId: captureData.captureID,
            paymentStatus: 'COMPLETED'
          }),
        });
        
        if (bookingResponse.ok) {
          setBookingConfirmed(true);
        } else {
          throw new Error('Failed to create booking');
        }
      }
    } catch (error) {
      console.error('Error processing payment:', error);
      alert('Payment processing failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const onPayPalError = (err) => {
    console.error('PayPal error:', err);
    alert('Payment failed. Please try again.');
  };

  if (!isOpen) return null;

  if (bookingConfirmed) {
    return (
      <div className="booking-modal-overlay">
        <div className="booking-modal">
          <div className="booking-success">
            <div className="success-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <h2>Booking Confirmed!</h2>
            <p>Thank you for your booking. We have sent a confirmation email to {formData.email}.</p>
            <div className="booking-details">
              <h3>Booking Details:</h3>
              <p><strong>Course:</strong> {course.title}</p>
              <p><strong>Start Date:</strong> {formData.selectedStartDate}</p>
              <p><strong>Schedule:</strong> {formData.selectedSchedule}</p>
              <p><strong>Price:</strong> {course.price}</p>
            </div>
            <button className="btn btn-primary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-modal-overlay">
      <div className="booking-modal">
        <div className="booking-modal-header">
          <h2>Book Course: {course.title}</h2>
          <button className="close-btn" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <div className="booking-modal-content">
          <div className="course-summary">
            <h3>Course Details</h3>
            <p><strong>Level:</strong> {course.level.toUpperCase()}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Price:</strong> {course.price}</p>
          </div>

          <form className="booking-form">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="dateOfBirth">Date of Birth *</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
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
                onChange={handleInputChange}
                required
                placeholder="Enter your email address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number (Optional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="selectedStartDate">Preferred Start Date *</label>
              <select
                id="selectedStartDate"
                name="selectedStartDate"
                value={formData.selectedStartDate}
                onChange={handleInputChange}
                required
              >
                <option value="">Select start date</option>
                {course.startDates.map((date, index) => (
                  <option key={index} value={date}>
                    {date}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="selectedSchedule">Preferred Schedule *</label>
              <select
                id="selectedSchedule"
                name="selectedSchedule"
                value={formData.selectedSchedule}
                onChange={handleInputChange}
                required
              >
                <option value="">Select schedule</option>
                {course.schedule.map((schedule, index) => (
                  <option key={index} value={`${schedule.day}: ${schedule.time}`}>
                    {schedule.day}: {schedule.time}
                  </option>
                ))}
              </select>
            </div>

            <div className="payment-section">
              <h3>Payment</h3>
              <div className="price-display">
                <span className="price-label">Total Amount:</span>
                <span className="price-amount">{course.price}</span>
              </div>
              {validateForm() && !isSubmitting && (
                <div className="paypal-button-container">
                  <PayPalScriptProvider 
                    options={{ 
                      "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
                      currency: "USD"
                    }}
                  >
                    <PayPalButtons
                      createOrder={createPayPalOrder}
                      onApprove={onPayPalApprove}
                      onError={onPayPalError}
                      disabled={isSubmitting}
                      style={{
                        layout: 'vertical',
                        color: 'blue',
                        shape: 'rect',
                        label: 'paypal'
                      }}
                    />
                  </PayPalScriptProvider>
                </div>
              )}
              
              {!validateForm() && (
                <div className="validation-message">
                  Please fill in all required fields to proceed with payment.
                </div>
              )}
              
              {isSubmitting && (
                <div className="loading-message">
                  <i className="fas fa-spinner fa-spin"></i>
                  Processing payment...
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;