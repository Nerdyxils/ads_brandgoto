import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../images/BG_Slant_Logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="footer-simple"
        >
          <div className="footer-brand">
            <motion.div whileHover={{ scale: 1.05 }} className="brand-logo">
              <img src={Logo} alt="BrandGoto logo" className="footer-logo" />
              <span className="logo-tagline">Professional websites in 7 days</span>
            </motion.div>
          </div>
          <div className="footer-bottom-content">
            <p className="copyright">© {new Date().getFullYear()} BrandGoto</p>
            <p className="made-by">Made by <span className="brand-highlight">BrandGoto</span></p>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #000 0%, #023942 100%);
          padding: 80px 0 40px;
          border-top: 1px solid rgba(2, 57, 66, 0.5);
        }
        
        .footer-simple {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .footer-brand {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        
        .brand-logo {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
          cursor: pointer;
        }

        .footer-logo {
          width: 200px;
          height: auto;
        }
        
        .logo-tagline {
          color: #CFF8FF;
          font-size: 0.9rem;
          font-weight: 400;
          margin: 0;
        }
        
        .footer-links { display: none; }
        
        .footer-section h4 {
          color: #CFF8FF;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        
        .footer-section ul {
          list-style: none;
          padding: 0;
        }
        
        .footer-section ul li {
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          cursor: pointer;
          transition: color 0.3s ease;
        }
        
        .footer-section ul li:hover {
          color: #CFF8FF;
        }
        
        .footer-divider { display: none; }
        
        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        
        .copyright,
        .made-by {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
          margin: 0;
        }
        
        .brand-highlight {
          color: #F75F0B;
          font-weight: 600;
        }
        
        @media (max-width: 768px) {
          .footer {
            padding: 60px 0 30px;
          }
          .footer-simple { align-items: center; text-align: center; }
          .brand-logo { align-items: center; }
          .footer-logo { width: 160px; }
          
          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
          }
        }
        
        @media (max-width: 480px) {
          .footer {
            padding: 40px 0 20px;
          }
          
          .logo-text {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
