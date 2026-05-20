import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const Socials = () => {
  const links = [
    {
      icon: <FaGithub />,
      url: 'https://github.com/droidrdee',
      label: 'GitHub',
      handle: '@droidrdee',
      meta: 'Open-source · OMNIMIND',
      accent: 'violet',
      external: true,
    },
    {
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/in/droidrdee',
      label: 'LinkedIn',
      handle: 'in/droidrdee',
      meta: 'Network · 1.5k+ connections',
      accent: 'cyan',
      external: true,
    },
    {
      icon: <FaEnvelope />,
      url: 'mailto:deepakrathore62@outlook.com',
      label: 'Email',
      handle: 'deepakrathore62@outlook.com',
      meta: 'Primary · responds in 24h',
      accent: 'pink',
      external: false,
    },
    {
      icon: <FaPhone />,
      url: 'tel:+919977032423',
      label: 'Phone · WhatsApp',
      handle: '+91 99770 32423',
      meta: 'Available all 7 days · Anytime',
      accent: 'lime',
      external: false,
    },
  ];

  return (
    <motion.div
      className="bento-item col-span-4 socials-cell"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
    >
      <div className="soc-header">
        <div>
          <div className="section-label">connect · find me</div>
          <h3 className="bento-heading">Channels</h3>
        </div>
        <div className="soc-availability">
          <span className="live-dot" />
          <span>Available for new projects · Q3 2026</span>
        </div>
      </div>

      <div className="social-grid">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            className={`social-card accent-${link.accent}`}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noreferrer' : undefined}
          >
            <div className="card-head">
              <span className="icon">{link.icon}</span>
              <span className="ext-ico"><FaArrowUpRightFromSquare /></span>
            </div>
            <div className="info">
              <span className="label">{link.label}</span>
              <span className="handle">{link.handle}</span>
            </div>
            <div className="meta">{link.meta}</div>
          </a>
        ))}
      </div>

      <style>{`
        .socials-cell { padding: 24px 26px; }
        .soc-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 16px;
          margin-bottom: 18px;
          flex-wrap: wrap;
        }
        .soc-availability {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(163, 230, 53, 0.08);
          border: 1px solid rgba(163, 230, 53, 0.2);
          color: #bef264;
          padding: 6px 12px;
          border-radius: 999px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.02em;
        }
        .social-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }
        .social-card {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 16px;
          background: rgba(255, 255, 255, 0.025);
          border-radius: 16px;
          text-decoration: none;
          color: var(--text-main);
          transition: 0.3s;
          border: 1px solid rgba(255, 255, 255, 0.06);
          position: relative;
          overflow: hidden;
        }
        .social-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 0%;
          height: 2px;
          transition: width 0.4s ease;
        }
        .social-card.accent-violet::before { background: linear-gradient(90deg, transparent, #8b5cf6); }
        .social-card.accent-cyan::before { background: linear-gradient(90deg, transparent, #06b6d4); }
        .social-card.accent-pink::before { background: linear-gradient(90deg, transparent, #ec4899); }
        .social-card.accent-lime::before { background: linear-gradient(90deg, transparent, #a3e635); }
        .social-card:hover {
          background: rgba(255, 255, 255, 0.045);
          transform: translateY(-3px);
        }
        .social-card:hover::before { width: 100%; }
        .social-card.accent-violet:hover { border-color: rgba(139, 92, 246, 0.32); box-shadow: 0 0 0 1px rgba(139, 92, 246, 0.08); }
        .social-card.accent-cyan:hover { border-color: rgba(6, 182, 212, 0.32); box-shadow: 0 0 0 1px rgba(6, 182, 212, 0.08); }
        .social-card.accent-pink:hover { border-color: rgba(236, 72, 153, 0.32); box-shadow: 0 0 0 1px rgba(236, 72, 153, 0.08); }
        .social-card.accent-lime:hover { border-color: rgba(163, 230, 53, 0.32); box-shadow: 0 0 0 1px rgba(163, 230, 53, 0.08); }
        .card-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .social-card .icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 1.05rem;
          flex-shrink: 0;
        }
        .social-card.accent-violet .icon { background: rgba(139, 92, 246, 0.14); color: #c4b5fd; }
        .social-card.accent-cyan .icon { background: rgba(6, 182, 212, 0.14); color: #67e8f9; }
        .social-card.accent-pink .icon { background: rgba(236, 72, 153, 0.14); color: #f9a8d4; }
        .social-card.accent-lime .icon { background: rgba(163, 230, 53, 0.14); color: #bef264; }
        .ext-ico {
          font-size: 0.7rem;
          color: var(--text-dim);
          opacity: 0;
          transform: translateY(-3px);
          transition: 0.3s;
        }
        .social-card:hover .ext-ico {
          opacity: 1;
          transform: translateY(0);
          color: var(--text-main);
        }
        .info {
          display: flex;
          flex-direction: column;
          gap: 3px;
          min-width: 0;
        }
        .label {
          font-weight: 600;
          font-size: 0.92rem;
          color: white;
          letter-spacing: -0.01em;
        }
        .handle {
          font-family: var(--font-mono);
          font-size: 0.74rem;
          color: var(--text-muted);
          letter-spacing: 0.01em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .meta {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: var(--text-dim);
          padding-top: 10px;
          margin-top: auto;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          letter-spacing: 0.02em;
        }
        @media (max-width: 900px) {
          .social-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 520px) {
          .social-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </motion.div>
  );
};

export default Socials;
