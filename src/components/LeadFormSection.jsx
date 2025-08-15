import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LeadFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);



  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://hook.us2.make.com/h7ui0hneajmm6im79gzz95b74wwy3165', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          source: 'BrandGoto Landing Page',
          timestamp: new Date().toISOString(),
          url: window.location.href
        })
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
          });
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      // You could add error handling here if needed
      alert('There was an error submitting your form. Please try again or contact us directly.');
    }
  };

  if (isSubmitted) {
    return (
      <section id="lead-form" className="lead-form-section">
        <div className="container">
                  <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="success-message"
        >
          <div className="success-icon">✅</div>
          <h2>Thank You</h2>
          <p>We would reach out to you shortly</p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="btn btn-secondary"
          >
            Send Another Message
          </button>
        </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-form" className="lead-form-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Get Your Website Started Today</h2>
          <p className="section-subtitle">Quick form - we'll call you within 2 hours to discuss your project</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="form-container"
        >
          <form onSubmit={handleSubmit} className="lead-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  placeholder="Your full name"
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="your@email.com"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`form-input ${errors.phone ? 'error' : ''}`}
                placeholder="(555) 123-4567"
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">What do you need? *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={`form-textarea ${errors.message ? 'error' : ''}`}
                placeholder="Brief description of your website needs..."
                rows="3"
              />
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn btn-primary submit-btn"
            >
              {isSubmitting ? 'Sending...' : 'Get My Website Started'}
            </motion.button>
          </form>
        </motion.div>
      </div>

      <style jsx>{`
        .lead-form-section {
          background: #000;
          padding: 100px 0;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .form-container {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .lead-form {
          background: linear-gradient(135deg, rgba(2, 57, 66, 0.3) 0%, rgba(0, 0, 0, 0.8) 100%);
          border-radius: 20px;
          padding: 3rem;
          border: 1px solid rgba(2, 57, 66, 0.5);
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-input.error,
        .form-select.error,
        .form-textarea.error {
          border-color: #ef2d56;
          background: rgba(239, 45, 86, 0.1);
        }
        
        .error-message {
          color: #ef2d56;
          font-size: 0.9rem;
          margin-top: 0.5rem;
          display: block;
        }
        
        .submit-btn {
          width: 100%;
          padding: 18px;
          font-size: 1.2rem;
          border-radius: 12px;
          background: #ef2d56;
          margin-top: 1rem;
        }
        
        .submit-btn:hover {
          background: linear-gradient(135deg, #ef2d56 0%, #F75F0B 100%);
        }
        
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .success-message {
          text-align: center;
          background: linear-gradient(135deg, rgba(2, 57, 66, 0.4) 0%, rgba(0, 0, 0, 0.9) 100%);
          border-radius: 20px;
          padding: 3rem 2rem;
          border: 2px solid rgba(247, 95, 11, 0.3);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
          max-width: 400px;
          margin: 0 auto;
        }
        
        .success-icon {
          font-size: 4rem;
          margin-bottom: 1.5rem;
          display: block;
        }
        
        .success-message h2 {
          color: #CFF8FF;
          margin-bottom: 1rem;
          font-size: 2rem;
          font-weight: 700;
        }
        
        .success-message p {
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 2rem;
          font-size: 1.1rem;
          line-height: 1.5;
        }
        
        @media (max-width: 768px) {
          .lead-form-section {
            padding: 80px 0;
          }
          
          .lead-form {
            padding: 2rem;
          }
          
          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
          
          .submit-btn {
            font-size: 1.1rem;
            padding: 16px;
          }
          
          .success-message {
            padding: 2.5rem 1.5rem;
            margin: 0 1rem;
          }
          
          .success-icon {
            font-size: 4rem;
            margin-bottom: 1rem;
          }
          
          .success-message h2 {
            font-size: 1.8rem;
          }
          
          .success-message p {
            font-size: 1.1rem;
          }
        }
        
        @media (max-width: 480px) {
          .lead-form-section {
            padding: 60px 0;
          }
          
          .lead-form {
            padding: 1.5rem;
          }
          
          .submit-btn {
            font-size: 1rem;
            padding: 14px;
          }
          
          .success-message {
            padding: 2rem 1rem;
            border-radius: 20px;
          }
          
          .success-icon {
            font-size: 3.5rem;
          }
          
          .success-message h2 {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </section>
  );
};

export default LeadFormSection;
