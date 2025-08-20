import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Logo from '../images/BG_Slant_Logo.png';

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
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
          source: 'BrandGoto Landing Page - Hero Form',
          timestamp: new Date().toISOString(),
          url: window.location.href
        })
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: ''
          });
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      alert('There was an error submitting your form. Please try again or contact us directly.');
    }
  };

  return (
    <section className="hero-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-content"
        >
          <motion.img
            src={Logo}
            alt="BrandGoto logo"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="hero-logo"
          />
          <div className="price-badge" aria-label="Websites starting at $199">Websites starting at $199</div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hero-title"
          >
            Affordable Business Websites Starting at $199
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="hero-subtitle"
          >
            Affordable websites with professional branding, SEO-ready builds, and optional AI automation. Fill the form to get started.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="hero-form-container"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="hero-success-message"
              >
                <div className="success-icon">✅</div>
                <h3>Thank You!</h3>
                <p>We would reach out to you shortly</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="hero-form">
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`form-input ${errors.name ? 'error' : ''}`}
                      placeholder="Your full name"
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>
                  
                  <div className="form-group">
                    <input
                      type="email"
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
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`form-input ${errors.phone ? 'error' : ''}`}
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn btn-primary hero-submit-btn"
                >
                  {isSubmitting ? 'Sending...' : 'Get My Website Started'}
                </motion.button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
      
      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #000 0%, #023942 100%);
          position: relative;
          overflow: hidden;
        }
        
        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 50% 50%, rgba(247, 95, 11, 0.1) 0%, transparent 70%);
          pointer-events: none;
        }
        
        .hero-content {
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .price-badge {
          display: block;
          margin: 0.5rem auto 1rem auto;
          padding: 6px 12px;
          border-radius: 999px;
          background: linear-gradient(135deg, #F75F0B, #ef2d56);
          color: #fff;
          font-size: 0.95rem;
          font-weight: 700;
          width: fit-content;
          box-shadow: 0 6px 16px rgba(247,95,11,0.35);
        }

        .hero-logo {
          width: 200px;
          height: auto;
          display: block;
          margin: 0 auto 0.25rem auto;
          filter: drop-shadow(0 6px 18px rgba(247, 95, 11, 0.25));
        }
        
        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1.25rem;
          background: linear-gradient(135deg, #fff 0%, #CFF8FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-subtitle {
          font-size: 1.4rem;
          color: #CFF8FF;
          margin-bottom: 2.25rem;
          font-weight: 400;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .hero-form-container {
          max-width: 500px;
          margin: 0 auto;
        }
        
        .hero-form {
          background: rgba(0, 0, 0, 0.6);
          border-radius: 20px;
          padding: 2rem;
          border: 1px solid rgba(2, 57, 66, 0.5);
          backdrop-filter: blur(10px);
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        
        .form-group {
          margin-bottom: 1rem;
        }
        
        .form-input {
          width: 100%;
          padding: 16px;
          font-size: 1rem;
          border: 2px solid rgba(2, 57, 66, 0.5);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          font-family: 'Poppins', sans-serif;
          transition: all 0.3s ease;
        }
        
        .form-input:focus {
          outline: none;
          border-color: #F75F0B;
          background: rgba(255, 255, 255, 0.15);
        }
        
        .form-input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }
        
        .form-input.error {
          border-color: #ef2d56;
          background: rgba(239, 45, 86, 0.1);
        }
        
        .error-message {
          color: #ef2d56;
          font-size: 0.85rem;
          margin-top: 0.5rem;
          display: block;
        }
        
        .hero-submit-btn {
          width: 100%;
          font-size: 1.1rem;
          padding: 18px;
          border-radius: 12px;
          margin-top: 0.5rem;
        }
        
        .hero-success-message {
          text-align: center;
          background: rgba(0, 0, 0, 0.6);
          border-radius: 20px;
          padding: 2rem;
          border: 1px solid rgba(2, 57, 66, 0.5);
        }
        
        .success-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .hero-success-message h3 {
          color: #CFF8FF;
          margin-bottom: 0.5rem;
          font-size: 1.5rem;
        }
        
        .hero-success-message p {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1rem;
        }
        
        @media (max-width: 768px) {
          .hero-logo { width: 160px; margin-bottom: 0.25rem; }
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.2rem;
          }
          
          .hero-form {
            padding: 1.5rem;
          }
          
          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
          
          .hero-submit-btn {
            font-size: 1rem;
            padding: 16px;
          }
        }
        
        @media (max-width: 480px) {
          .hero-logo { width: 140px; }
          .hero-title {
            font-size: 2rem;
          }
          
          .hero-subtitle {
            font-size: 1.1rem;
          }
          
          .hero-form {
            padding: 1.25rem;
          }
          
          .hero-submit-btn {
            font-size: 0.95rem;
            padding: 14px;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
