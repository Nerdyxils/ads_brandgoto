import React from 'react';
import { motion } from 'framer-motion';

const PortfolioSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      business: "Real Estate Agent",
      quote: "BrandGoto delivered my website in just 6 days! It looks professional and has already generated 3 new leads.",
      avatar: "👩‍💼"
    },
    {
      name: "Mike Chen",
      business: "Landscaping Services",
      quote: "The quality is amazing for the price. My customers love how easy it is to navigate and book services.",
      avatar: "👨‍🌾"
    },
    {
      name: "Lisa Rodriguez",
      business: "Cleaning Company",
      quote: "Fast turnaround, great communication, and a website that perfectly represents my brand. Highly recommend!",
      avatar: "👩‍🔧"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="portfolio-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">See the Transformation</h2>
          <p className="section-subtitle">Before and after examples of our work</p>
        </motion.div>

        {/* Before/After Mockups */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mockups-container"
        >
          <div className="mockup-pair">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mockup-card before"
            >
              <div className="mockup-label">Before</div>
              <div className="mockup-placeholder">
                <div className="mockup-content">
                  <div className="mockup-header"></div>
                  <div className="mockup-body">
                    <div className="mockup-text"></div>
                    <div className="mockup-text short"></div>
                    <div className="mockup-button"></div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mockup-card after"
            >
              <div className="mockup-label">After</div>
              <div className="mockup-placeholder">
                <div className="mockup-content">
                  <div className="mockup-header modern"></div>
                  <div className="mockup-body">
                    <div className="mockup-text modern"></div>
                    <div className="mockup-text short modern"></div>
                    <div className="mockup-button modern"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="testimonials-grid"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="testimonial-card"
            >
              <div className="testimonial-avatar">{testimonial.avatar}</div>
              <blockquote className="testimonial-quote">
                "{testimonial.quote}"
              </blockquote>
              <div className="testimonial-author">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.business}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .portfolio-section {
          background: linear-gradient(135deg, #023942 0%, #000 100%);
          padding: 100px 0;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .mockups-container {
          margin-bottom: 4rem;
        }
        
        .mockup-pair {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .mockup-card {
          background: rgba(0, 0, 0, 0.6);
          border-radius: 16px;
          padding: 1.5rem;
          border: 1px solid rgba(2, 57, 66, 0.5);
          transition: all 0.3s ease;
        }
        
        .mockup-card:hover {
          border-color: rgba(247, 95, 11, 0.5);
          box-shadow: 0 10px 30px rgba(247, 95, 11, 0.2);
        }
        
        .mockup-label {
          text-align: center;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #CFF8FF;
          font-size: 1.1rem;
        }
        
        .mockup-placeholder {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          padding: 1rem;
          min-height: 200px;
        }
        
        .mockup-content {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .mockup-header {
          height: 20px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        
        .mockup-header.modern {
          background: linear-gradient(90deg, #F75F0B, #ef2d56);
        }
        
        .mockup-body {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: 1rem;
        }
        
        .mockup-text {
          height: 12px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 4px;
        }
        
        .mockup-text.short {
          width: 70%;
        }
        
        .mockup-text.modern {
          background: rgba(207, 248, 255, 0.2);
        }
        
        .mockup-button {
          height: 16px;
          width: 80px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          margin-top: 0.5rem;
        }
        
        .mockup-button.modern {
          background: linear-gradient(90deg, #F75F0B, #ef2d56);
        }
        
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .testimonial-card {
          background: rgba(0, 0, 0, 0.6);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          border: 1px solid rgba(2, 57, 66, 0.5);
          transition: all 0.3s ease;
        }
        
        .testimonial-card:hover {
          transform: translateY(-5px);
          border-color: rgba(247, 95, 11, 0.5);
          box-shadow: 0 10px 30px rgba(247, 95, 11, 0.2);
        }
        
        .testimonial-avatar {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .testimonial-quote {
          font-style: italic;
          margin-bottom: 1.5rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
        }
        
        .testimonial-author {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        
        .testimonial-author strong {
          color: #CFF8FF;
          font-size: 1.1rem;
        }
        
        .testimonial-author span {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
          .portfolio-section {
            padding: 80px 0;
          }
          
          .mockup-pair {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            max-width: 400px;
          }
          
          .testimonial-card {
            padding: 1.5rem;
          }
        }
        
        @media (max-width: 480px) {
          .portfolio-section {
            padding: 60px 0;
          }
          
          .mockup-card {
            padding: 1rem;
          }
          
          .testimonial-card {
            padding: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
};

export default PortfolioSection;
