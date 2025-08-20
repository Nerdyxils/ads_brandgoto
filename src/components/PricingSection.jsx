import React from 'react';
import { motion } from 'framer-motion';

const plans = [
  {
    key: 'starter',
    name: 'Starter – $199 (Hook Offer)',
    price: '$199',
    tagline: 'Quick Online Presence',
    popular: false,
    features: [
      '1–3 Page Website',
      'Mobile-Responsive Design',
      '24–48hr Turnaround',
      'Basic Contact Form',
      '14-Day Support'
    ],
    note: 'Launch fast with a short‑term starter site — get online now and upgrade when you’re ready.',
    cta: 'Get Online Fast – $199'
  },
  {
    key: 'growth',
    name: 'Growth – $750+ (Most Popular)',
    price: '$750+',
    tagline: 'Professional Brand Website',
    popular: true,
    features: [
      '5–7 Custom Pages',
      'Branded Design aligned to business identity',
      'Lead Forms + CRM Integration (HubSpot, Zoho, MailerLite)',
      'SEO Setup (Google Index, Meta Tags, Speed Optimization)',
      'Blog/Portfolio/Service Pages',
      '1-Month Maintenance & Support'
    ],
    note: 'Best for growing businesses that want an SEO-ready website and professional branding.',
    cta: 'Upgrade My Business – $750+'
  },
  {
    key: 'scale',
    name: 'Scale – $2,500+',
    price: '$2,500+',
    tagline: 'Business Growth & Automation Suite',
    popular: false,
    features: [
      '8–12 Pages w/ Custom Features',
      'Full Branding (logo, brand kit, color psychology)',
      'Advanced SEO + Local SEO Strategy',
      'AI-Powered CRM Automation (chatbot, workflows, email drips)',
      'Booking/Payment/Custom Functionality (Calendly, Stripe, e‑commerce)',
      '3 Months Hosting + Premium Support'
    ],
    note: 'Positioned for companies ready to automate and scale with AI and pro systems.',
    cta: 'Automate & Grow – $2,500+'
  }
];

const PricingSection = () => {
  return (
    <section className="pricing-section" aria-labelledby="pricing-title">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pricing-header"
        >
          <h2 id="pricing-title" className="section-title">Choose Your Path to Growth</h2>
          <p className="section-subtitle">Affordable websites, professional branding, SEO-ready websites, and AI automation — pick the plan that fits your business</p>
        </motion.div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.key}
              className={`plan-card ${plan.popular ? 'popular' : ''}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="popular-badge" aria-label="Most Popular">Most Popular</div>
              )}
              <header className="plan-header">
                <h2 className="plan-title">{plan.name}</h2>
                <p className="plan-tagline">{plan.tagline}</p>
              </header>
              <ul className="plan-features">
                {plan.features.map((f, i) => (
                  <li key={i}><span className="tick">✓</span> {f}</li>
                ))}
              </ul>
              <p className="plan-note">{plan.note}</p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} plan-cta`}
                onClick={() => {
                  // Scroll to hero form for conversion
                  const root = document.querySelector('.hero-section');
                  root?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {plan.cta}
              </motion.button>
            </motion.article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .pricing-section {
          background: #000;
          padding: 80px 0 100px;
        }

        .pricing-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .plan-card {
          position: relative;
          border: 1px solid rgba(2, 57, 66, 0.5);
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(2,57,66,0.28) 0%, rgba(0,0,0,0.85) 100%);
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .plan-card:hover {
          transform: translateY(-4px);
          border-color: rgba(247,95,11,0.45);
          box-shadow: 0 12px 30px rgba(247,95,11,0.18);
        }

        .plan-card.popular {
          border: 1px solid rgba(247,95,11,0.55);
          box-shadow: 0 16px 40px rgba(247,95,11,0.25);
          background: linear-gradient(135deg, rgba(247,95,11,0.15) 0%, rgba(0,0,0,0.9) 100%);
        }

        .popular-badge {
          position: absolute;
          top: -12px;
          right: 16px;
          background: linear-gradient(135deg, #F75F0B, #ef2d56);
          color: #fff;
          font-size: 0.8rem;
          padding: 6px 10px;
          border-radius: 999px;
          font-weight: 700;
          box-shadow: 0 6px 16px rgba(247,95,11,0.35);
        }

        .plan-header {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .plan-title { /* H2 per tier */
          font-size: 1.1rem;
          font-weight: 700;
          color: #fff;
        }

        .plan-tagline {
          color: #CFF8FF;
          font-size: 0.95rem;
        }

        .plan-features {
          list-style: none;
          padding: 0;
          margin: 0.25rem 0 0.5rem 0;
          display: grid;
          gap: 0.5rem;
        }

        .plan-features li {
          color: rgba(255,255,255,0.88);
          font-size: 0.95rem;
          display: flex;
          gap: 0.5rem;
          align-items: flex-start;
        }

        .tick { color: #F75F0B; font-weight: 700; }

        .plan-note {
          color: rgba(255,255,255,0.7);
          font-size: 0.9rem;
          min-height: 2.2rem;
        }

        .plan-cta {
          margin-top: auto;
          width: 100%;
          border-radius: 10px;
        }

        @media (max-width: 1024px) {
          .pricing-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 640px) {
          .pricing-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default PricingSection;
