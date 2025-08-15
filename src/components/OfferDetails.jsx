import React from 'react';
import { motion } from 'framer-motion';

const OfferDetails = () => {
  const features = [
    {
      icon: "🌐",
      title: "3-Page Website",
      description: "Home, About, and Contact pages with custom content"
    },
    {
      icon: "📱",
      title: "Mobile-First Design",
      description: "Fully responsive across all devices and screen sizes"
    },
    {
      icon: "📝",
      title: "Working Contact Form",
      description: "Functional form with email notifications and spam protection"
    },
    {
      icon: "🔍",
      title: "SEO Optimized",
      description: "Basic SEO setup for better search engine visibility"
    },
    {
      icon: "⚡",
      title: "Fast Loading",
      description: "Optimized for speed and performance"
    },
    {
      icon: "🎨",
      title: "Custom Branding",
      description: "Your colors, fonts, and logo integration"
    }
  ];

  const additionalServices = [
    "Google Analytics integration",
    "Social media links",
    "Basic content writing (up to 500 words per page)",
    "1 round of revisions",
    "30 days of support",
    "Hosting setup guidance"
  ];

  const terms = [
    "Offer valid for new customers only",
    "Additional pages: $150 per page",
    "E-commerce functionality: +$300",
    "Custom animations: +$200",
    "Content writing beyond 500 words: $0.50 per word",
    "Rush delivery (3-5 days): +$200",
    "Payment: 50% upfront, 50% upon completion",
    "Delivery: 7 business days from final approval"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="offer-details">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <div className="social-proof">
            <p className="social-proof-text">Join 50+ businesses who got their website in 7 days</p>
            <div className="testimonial-preview">
              <span className="quote">"BrandGoto delivered exactly what I needed - fast and professional!"</span>
              <span className="author">- Sarah J., Real Estate Agent</span>
            </div>
          </div>
          <h2 className="section-title">What's Included in Your $500 Website</h2>
          <p className="section-subtitle">Complete, professional websites that actually work</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="features-grid"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="feature-card"
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="additional-services"
        >
          <h3 className="services-title">Plus These Free Bonuses:</h3>
          <div className="services-list">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="service-item"
              >
                <span className="checkmark">✓</span>
                <span>{service}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="terms-section"
        >
          <h3 className="terms-title">Terms & Conditions</h3>
          <div className="terms-list">
            {terms.map((term, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="term-item"
              >
                <span className="bullet">•</span>
                <span>{term}</span>
              </motion.div>
            ))}
          </div>
          <p className="terms-note">
            * All prices in CAD. GST/HST applies to Canadian residents.
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        .offer-details {
          background: #000;
          padding: 100px 0;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .social-proof {
          background: linear-gradient(135deg, rgba(247, 95, 11, 0.1) 0%, rgba(2, 57, 66, 0.2) 100%);
          border-radius: 16px;
          padding: 2rem;
          margin-bottom: 3rem;
          border: 1px solid rgba(247, 95, 11, 0.2);
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .social-proof-text {
          color: #F75F0B;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .testimonial-preview {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .quote {
          color: rgba(255, 255, 255, 0.9);
          font-style: italic;
          font-size: 1rem;
          line-height: 1.5;
        }
        
        .author {
          color: #CFF8FF;
          font-size: 0.9rem;
          font-weight: 500;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 4rem;
        }
        
        .feature-card {
          background: linear-gradient(135deg, rgba(2, 57, 66, 0.3) 0%, rgba(0, 0, 0, 0.8) 100%);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          border: 1px solid rgba(2, 57, 66, 0.5);
          transition: all 0.3s ease;
        }
        
        .feature-card:hover {
          transform: translateY(-5px);
          border-color: rgba(247, 95, 11, 0.5);
          box-shadow: 0 10px 30px rgba(247, 95, 11, 0.2);
        }
        
        .feature-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .feature-title {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: #CFF8FF;
        }
        
        .feature-description {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1rem;
          line-height: 1.5;
        }
        
        .additional-services {
          background: linear-gradient(135deg, rgba(247, 95, 11, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%);
          border-radius: 20px;
          padding: 2.5rem;
          margin-bottom: 3rem;
          border: 1px solid rgba(247, 95, 11, 0.3);
        }
        
        .services-title {
          color: #F75F0B;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          text-align: center;
        }
        
        .services-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
        }
        
        .service-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: rgba(255, 255, 255, 0.9);
          font-size: 1rem;
        }
        
        .checkmark {
          color: #F75F0B;
          font-weight: bold;
          font-size: 1.2rem;
        }
        
        .terms-section {
          background: linear-gradient(135deg, rgba(2, 57, 66, 0.3) 0%, rgba(0, 0, 0, 0.8) 100%);
          border-radius: 20px;
          padding: 2.5rem;
          border: 1px solid rgba(2, 57, 66, 0.5);
        }
        
        .terms-title {
          color: #CFF8FF;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          text-align: center;
        }
        
        .terms-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }
        
        .term-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.95rem;
          line-height: 1.4;
        }
        
        .bullet {
          color: #F75F0B;
          font-weight: bold;
          font-size: 1.1rem;
          line-height: 1.2;
        }
        
        .terms-note {
          text-align: center;
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
          font-style: italic;
          margin: 0;
        }
        
        @media (max-width: 768px) {
          .offer-details {
            padding: 80px 0;
          }
          
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
          
          .additional-services,
          .terms-section {
            padding: 2rem;
          }
          
          .services-list,
          .terms-list {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 480px) {
          .offer-details {
            padding: 60px 0;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .feature-card {
            padding: 1.5rem;
          }
          
          .additional-services,
          .terms-section {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default OfferDetails;
