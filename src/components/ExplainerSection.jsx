import React from 'react';
import { motion } from 'framer-motion';

const ExplainerSection = () => {
  const features = [
    {
      icon: "⚡",
      title: "Speed",
      description: "Go live in just 7 days"
    },
    {
      icon: "🎨",
      title: "Quality",
      description: "Modern, responsive design"
    },
    {
      icon: "💰",
      title: "Affordable",
      description: "Flat $500 rate"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="explainer-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Why Choose BrandGoto?</h2>
          <p className="section-subtitle">Launch fast. Look pro. Stay affordable.</p>
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
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="feature-icon"
              >
                {feature.icon}
              </motion.div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="explainer-cta-wrap"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn btn-primary explainer-cta"
          >
            Get My Website Started
          </motion.button>
        </motion.div>
      </div>

      <style jsx>{`
        .explainer-section {
          background: #000;
          padding: 100px 0;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          max-width: 900px;
          margin: 0 auto;
        }
        
        .feature-card {
          text-align: center;
          padding: 2rem;
          background: linear-gradient(135deg, rgba(2, 57, 66, 0.3) 0%, rgba(0, 0, 0, 0.8) 100%);
          border-radius: 16px;
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
          display: block;
        }
        
        .feature-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #CFF8FF;
        }
        
        .feature-description {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.8);
          font-weight: 400;
        }

        .explainer-cta-wrap {
          display: flex;
          justify-content: center;
          margin-top: 2.5rem;
        }

        .explainer-cta {
          padding: 16px 28px;
          border-radius: 999px;
        }
        
        @media (max-width: 768px) {
          .explainer-section {
            padding: 80px 0;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            max-width: 400px;
          }
          
          .feature-card {
            padding: 1.5rem;
          }
          
          .feature-icon {
            font-size: 2.5rem;
          }
          .explainer-cta { width: 100%; max-width: 420px; }
        }
        
        @media (max-width: 480px) {
          .explainer-section {
            padding: 60px 0;
          }
          
          .feature-card {
            padding: 1.25rem;
          }
          
          .feature-icon {
            font-size: 2rem;
          }
          .explainer-cta { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default ExplainerSection;
