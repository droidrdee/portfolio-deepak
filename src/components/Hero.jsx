import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <motion.div
      className="bento-item col-span-2 row-span-2 hero-cell"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="hero-content">
        <div className="status-badge">
          <span className="dot"></span> Available for Freelance
        </div>
        <h1>
          I build <span className="text-gradient">Everything</span> <br />
          Digital.
        </h1>
        <p>
          I'm <strong>Deepak Rathore</strong>, a Full-Stack AI Engineer & Freelancer.
          From <strong>Mobile Apps</strong> (iOS/Android) and <strong>Websites</strong> to
          <strong> AI Agents</strong> and <strong>Automation</strong> products — I turn complex ideas into reality.
        </p>
        <a href="#contact" className="cta-btn">
          Hire Me <FaArrowRight />
        </a>
      </div>

      <div className="bg-glow"></div>

      <style>{`
        .hero-cell {
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(244, 63, 94, 0.1);
          color: #fb7185;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          margin-bottom: 20px;
          border: 1px solid rgba(244, 63, 94, 0.2);
        }
        .dot {
          width: 6px;
          height: 6px;
          background: #f43f5e;
          border-radius: 50%;
          box-shadow: 0 0 8px #f43f5e;
        }
        h1 {
          font-size: 3.2rem;
          line-height: 1.1;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }
        p {
          color: var(--text-muted);
          font-size: 1.1rem;
          line-height: 1.6;
          max-width: 90%;
          margin-bottom: 30px;
        }
        strong {
          color: white;
          font-weight: 600;
        }
        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: white;
          color: black;
          padding: 12px 24px;
          border-radius: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: transform 0.2s;
        }
        .cta-btn:hover {
          transform: scale(1.05);
        }
        .bg-glow {
          position: absolute;
          top: -50%;
          right: -50%;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(244, 63, 94, 0.15) 0%, transparent 70%);
          pointer-events: none;
        }
        @media (max-width: 768px) {
          h1 { font-size: 2.5rem; }
        }
      `}</style>
    </motion.div>
  );
};

export default Hero;
