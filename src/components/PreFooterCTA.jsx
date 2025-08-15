import React from 'react';
import { motion } from 'framer-motion';

const PreFooterCTA = () => {
  return (
    <section className="prefooter-cta">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="cta-card"
        >
          <div className="cta-content">
            <h2 className="cta-title">Want to learn more before you start?</h2>
            <p className="cta-subtitle">See what we offer, FAQs, and next steps — all in one place.</p>
          </div>
          <motion.a
            href="https://links.brandgoto.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="btn btn-primary cta-button"
          >
            Learn More
          </motion.a>
        </motion.div>
      </div>

      <style jsx>{`
        .prefooter-cta {
          background: linear-gradient(135deg, #000 0%, #023942 100%);
          padding: 60px 0 80px;
        }

        .cta-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.25rem;
          border: 1px solid rgba(2, 57, 66, 0.5);
          background: linear-gradient(135deg, rgba(2, 57, 66, 0.35) 0%, rgba(0, 0, 0, 0.8) 100%);
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.35);
        }

        .cta-title {
          font-size: 1.6rem;
          font-weight: 700;
          line-height: 1.25;
          margin: 0 0 6px 0;
          background: linear-gradient(135deg, #fff 0%, #CFF8FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cta-subtitle {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1rem;
          margin: 0;
        }

        .cta-button {
          white-space: nowrap;
          border-radius: 999px;
          padding: 14px 22px;
        }

        @media (max-width: 768px) {
          .cta-card {
            flex-direction: column;
            align-items: stretch;
            text-align: center;
          }
          .cta-button {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default PreFooterCTA;


