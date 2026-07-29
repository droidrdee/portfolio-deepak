import React from 'react';
import { motion } from 'framer-motion';
import { FaBolt, FaUsers, FaClock, FaCheckCircle } from 'react-icons/fa';

const Stats = () => {
  const stats = [
    {
      icon: <FaBolt />,
      value: '90%',
      label: 'Document review reduction',
      desc: 'achieved in the maritime document intelligence workflow through OCR, PDF parsing, and reranking.',
      accent: 'violet',
    },
    {
      icon: <FaUsers />,
      value: '97%',
      label: 'Bulk-processing gain',
      desc: 'cut processing time from 10–15 minutes to under 30 seconds for enterprise bulk uploads.',
      accent: 'cyan',
    },
    {
      icon: <FaClock />,
      value: '65%',
      label: 'Latency reduction',
      desc: 'achieved in the HR assistant stack by adding semantic caching and optimized retrieval.',
      accent: 'pink',
    },
    {
      icon: <FaCheckCircle />,
      value: '500+',
      label: 'Monthly records',
      desc: 'processed for Medico Healthcare through the OCR and classification pipeline.',
      accent: 'lime',
    },
  ];

  return (
    <motion.div
      className="bento-item col-span-4 stats-cell"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55 }}
    >
      <div className="stats-header">
        <div>
          <div className="section-label">impact · numbers that compound</div>
          <h2 className="stats-title">
            Built to <span className="text-gradient">measure</span>, shipped to <span className="text-gradient">scale</span>
          </h2>
        </div>
        <p className="stats-intro">
          A few numbers from work currently running in production for enterprise clients including
          Havells, TVS, Hero, and DCGPAC.
        </p>
      </div>

      <div className="stats-grid">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            className={`stat-card accent-${s.accent}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
          >
            <div className="stat-top">
              <div className="stat-icon">{s.icon}</div>
              <span className="stat-label-top">{s.label}</span>
            </div>
            <div className="stat-value text-gradient">{s.value}</div>
            <p className="stat-desc">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      <style>{`
        .stats-cell { padding: 32px; }
        .stats-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 30px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }
        .stats-title {
          font-size: clamp(1.6rem, 2.6vw, 2.1rem);
          line-height: 1.15;
          letter-spacing: -0.02em;
        }
        .stats-intro {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.55;
          max-width: 440px;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 14px;
        }
        .stat-card {
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 18px;
          padding: 22px;
          transition: 0.3s;
          position: relative;
          overflow: hidden;
        }
        .stat-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 100%;
          height: 2px;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .stat-card.accent-violet::before { background: linear-gradient(90deg, transparent, #8b5cf6, transparent); }
        .stat-card.accent-cyan::before { background: linear-gradient(90deg, transparent, #06b6d4, transparent); }
        .stat-card.accent-pink::before { background: linear-gradient(90deg, transparent, #ec4899, transparent); }
        .stat-card.accent-lime::before { background: linear-gradient(90deg, transparent, #a3e635, transparent); }
        .stat-card:hover {
          transform: translateY(-4px);
          background: rgba(255, 255, 255, 0.045);
          border-color: rgba(255, 255, 255, 0.12);
        }
        .stat-card:hover::before { opacity: 1; }
        .stat-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .stat-icon {
          width: 38px;
          height: 38px;
          border-radius: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
        }
        .stat-card.accent-violet .stat-icon { background: rgba(139, 92, 246, 0.14); color: #c4b5fd; }
        .stat-card.accent-cyan .stat-icon { background: rgba(6, 182, 212, 0.14); color: #67e8f9; }
        .stat-card.accent-pink .stat-icon { background: rgba(236, 72, 153, 0.14); color: #f9a8d4; }
        .stat-card.accent-lime .stat-icon { background: rgba(163, 230, 53, 0.14); color: #bef264; }
        .stat-label-top {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: var(--text-muted);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .stat-value {
          font-family: var(--font-display);
          font-size: 2.6rem;
          font-weight: 700;
          line-height: 1;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }
        .stat-desc {
          color: var(--text-muted);
          font-size: 0.84rem;
          line-height: 1.55;
        }
        @media (max-width: 640px) {
          .stats-cell { padding: 22px; }
        }
      `}</style>
    </motion.div>
  );
};

export default Stats;
