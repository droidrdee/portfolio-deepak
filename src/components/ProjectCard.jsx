import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const ProjectCard = ({
  title,
  tagline,
  desc,
  highlights = [],
  tags = [],
  accent = 'violet',
  badge,
  year,
  metric,
  github,
  link,
  delay = 0,
  colSpan = 2,
  featured = false,
}) => {
  const accentMap = {
    violet: { from: 'rgba(139, 92, 246, 0.18)', to: 'rgba(139, 92, 246, 0.02)', glow: 'rgba(139, 92, 246, 0.35)', text: '#c4b5fd', chip: 'chip-violet' },
    cyan: { from: 'rgba(6, 182, 212, 0.18)', to: 'rgba(6, 182, 212, 0.02)', glow: 'rgba(6, 182, 212, 0.35)', text: '#67e8f9', chip: 'chip-cyan' },
    pink: { from: 'rgba(236, 72, 153, 0.18)', to: 'rgba(236, 72, 153, 0.02)', glow: 'rgba(236, 72, 153, 0.35)', text: '#f9a8d4', chip: 'chip-pink' },
    lime: { from: 'rgba(163, 230, 53, 0.18)', to: 'rgba(163, 230, 53, 0.02)', glow: 'rgba(163, 230, 53, 0.35)', text: '#bef264', chip: 'chip-lime' },
  };
  const a = accentMap[accent] || accentMap.violet;

  return (
    <motion.div
      className={`bento-item col-span-${colSpan} project-card ${featured ? 'featured' : ''}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="card-glow" />

      <div className="card-top">
        <div className="card-meta">
          {badge && <span className={`chip ${a.chip}`}>{badge}</span>}
          {year && <span className="year-tag">{year}</span>}
        </div>
        <div className="card-actions">
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="card-action" aria-label="GitHub">
              <FaGithub />
            </a>
          )}
          {link && (
            <a href={link} target="_blank" rel="noreferrer" className="card-action" aria-label="Visit">
              <FaArrowUpRightFromSquare />
            </a>
          )}
        </div>
      </div>

      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        {tagline && <div className="card-tagline" style={{ color: a.text }}>{tagline}</div>}
        <p className="card-desc">{desc}</p>

        {highlights.length > 0 && (
          <ul className="card-highlights">
            {highlights.map((h, i) => (
              <li key={i}>
                <span className="bullet-mark" style={{ color: a.text }}>▹</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="card-footer">
        {metric && (
          <div className="metric">
            <span className="metric-val text-gradient">{metric.value}</span>
            <span className="metric-label">{metric.label}</span>
          </div>
        )}
        <div className="tag-row">
          {tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>

      <style>{`
        .project-card {
          padding: 26px;
          min-height: 340px;
          background: linear-gradient(135deg, ${a.from} 0%, ${a.to} 70%, var(--glass-bg) 100%);
          position: relative;
          overflow: hidden;
        }
        .project-card.featured {
          min-height: 420px;
        }
        .card-glow {
          position: absolute;
          top: -80px;
          right: -80px;
          width: 240px;
          height: 240px;
          border-radius: 50%;
          background: radial-gradient(circle, ${a.glow} 0%, transparent 70%);
          filter: blur(60px);
          opacity: 0.6;
          pointer-events: none;
          transition: opacity 0.4s;
        }
        .project-card:hover .card-glow {
          opacity: 1;
        }
        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 18px;
          position: relative;
          z-index: 2;
        }
        .card-meta {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          align-items: center;
        }
        .year-tag {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-muted);
          letter-spacing: 0.08em;
        }
        .card-actions {
          display: flex;
          gap: 8px;
        }
        .card-action {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--text-main);
          text-decoration: none;
          font-size: 0.85rem;
          transition: 0.25s;
        }
        .card-action:hover {
          background: white;
          color: black;
          border-color: white;
          transform: translateY(-2px);
        }
        .card-body {
          flex: 1;
          position: relative;
          z-index: 2;
        }
        .card-title {
          font-size: 1.55rem;
          margin-bottom: 4px;
          letter-spacing: -0.015em;
          line-height: 1.15;
        }
        .project-card.featured .card-title {
          font-size: 1.85rem;
        }
        .card-tagline {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          letter-spacing: 0.02em;
          margin-bottom: 14px;
          font-weight: 500;
        }
        .card-desc {
          color: var(--text-muted);
          font-size: 0.92rem;
          line-height: 1.55;
          margin-bottom: 16px;
        }
        .card-highlights {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 16px;
        }
        .card-highlights li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          color: var(--text-main);
          font-size: 0.88rem;
          line-height: 1.5;
        }
        .bullet-mark {
          font-weight: 700;
          margin-top: -1px;
          flex-shrink: 0;
        }
        .card-footer {
          margin-top: auto;
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .metric {
          display: flex;
          align-items: baseline;
          gap: 10px;
        }
        .metric-val {
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 700;
          line-height: 1;
        }
        .metric-label {
          font-size: 0.78rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
          letter-spacing: 0.02em;
        }
        .tag-row {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }
        .tag {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          padding: 3px 8px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.04);
          color: var(--text-muted);
          border: 1px solid rgba(255, 255, 255, 0.06);
          letter-spacing: 0.01em;
        }
      `}</style>
    </motion.div>
  );
};

export default ProjectCard;
