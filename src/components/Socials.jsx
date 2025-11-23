import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Socials = () => {
  const links = [
    { icon: <FaGithub />, url: 'https://github.com/droidrdee', label: 'GitHub', color: '#333' },
    { icon: <FaLinkedin />, url: '#', label: 'LinkedIn', color: '#0077b5' },
    { icon: <FaTwitter />, url: '#', label: 'X (Twitter)', color: '#1da1f2' },
    { icon: <FaEnvelope />, url: 'mailto:droidrdee@gmail.com', label: 'Email', color: '#ea4335' },
  ];

  return (
    <motion.div
      className="bento-item col-span-1 row-span-2 socials-cell"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <h3>Connect</h3>
      <div className="social-grid">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            className="social-card"
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon">{link.icon}</span>
            <span className="label">{link.label}</span>
          </a>
        ))}
      </div>

      <style>{`
        .socials-cell h3 {
          margin-bottom: 20px;
          font-size: 1.2rem;
        }
        .social-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
          height: 100%;
        }
        .social-card {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 15px;
          background: rgba(255,255,255,0.03);
          border-radius: 16px;
          text-decoration: none;
          color: var(--text-muted);
          transition: all 0.3s;
          border: 1px solid transparent;
        }
        .social-card:hover {
          background: rgba(255,255,255,0.08);
          color: white;
          transform: translateX(5px);
          border-color: rgba(255,255,255,0.1);
        }
        .social-card .icon {
          font-size: 1.2rem;
        }
        .social-card .label {
          font-weight: 500;
          font-size: 0.9rem;
        }
      `}</style>
    </motion.div>
  );
};

export default Socials;
