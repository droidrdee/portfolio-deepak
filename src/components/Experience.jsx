import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const roles = [
    {
      company: 'Softude Infotech Pvt. Ltd.',
      role: 'AI/ML Engineer',
      period: 'Jun 2025 — Present',
      location: 'Indore, India',
      isCurrent: true,
      tags: ['LLM', 'RAG', 'Agentic AI', 'Async I/O', 'Vertex AI', 'LLMOps'],
      bullets: [
        {
          headline: 'Architected a production LLM-driven conversational automation system for DCGPAC',
          detail:
            'Integrated intent classification, RAG-based context retrieval, and multi-turn dialogue management to automate purchase orders, approval workflows, inventory queries, and vendor communication through a single chatbot interface — eliminating manual touchpoints across 3 enterprise workflows.',
        },
        {
          headline: 'Built event-driven workflow automation pipelines for procurement and logistics',
          detail:
            'Implemented webhooks, async task schedulers, and background workers that compressed multi-step operational processes from hours to under 5 minutes, removing human bottlenecks across procurement, logistics coordination, and document routing.',
        },
        {
          headline: 'Developed a Maritime OCR Intelligence System for shipping and regulatory PDFs',
          detail:
            'Processed port circulars, shipping notices, and regulatory PDFs through a multi-stage NLP workflow using PyMuPDF, Tesseract OCR, transformer-based re-ranking, and keyword scoring to surface profit-impacting insights that previously required hours of manual analyst review.',
        },
        {
          headline: 'Resolved critical performance issues in the flagship Cost Estimation Platform',
          detail:
            'Served Havells, TVS, and Hero by eliminating memory leaks, restructuring N+1 queries into optimized joins, and migrating the data-access layer to a fully async/await architecture — delivering a 90% overall performance improvement.',
        },
        {
          headline: 'Scaled the platform to support 25–30+ concurrent users per client',
          detail:
            'Reduced peak API response time by 70% through systematic profiling, connection pooling, and async I/O refactoring across the backend stack.',
        },
      ],
    },
    {
      company: 'RA Software',
      role: 'Backend Developer Intern',
      period: 'Feb 2024 — Aug 2024',
      location: 'Jaipur, India · Remote',
      isCurrent: false,
      tags: ['REST APIs', 'PostgreSQL', 'CI/CD', 'Agile'],
      bullets: [
        {
          headline: 'Built and maintained RESTful APIs powering 10,000+ daily transactions',
          detail:
            'Improved response consistency across 5+ endpoints. Designed normalised database schemas and optimised query logic via index tuning and query batching.',
        },
        {
          headline: 'Contributed to full Agile sprint cycles',
          detail:
            'Owned sprint planning, code reviews, and CI/CD pipeline maintenance — gaining hands-on production debugging and deployment experience.',
        },
      ],
    },
  ];

  return (
    <motion.div
      className="bento-item col-span-4 experience-cell"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55 }}
    >
      <div className="exp-header">
        <div>
          <div className="section-label">work · 2024 — now</div>
          <h2 className="exp-title">Experience that ships <span className="text-gradient">to production</span></h2>
        </div>
        <div className="exp-summary">
          <div className="summary-pill">
            <span className="num">2</span>
            <span className="label">Companies</span>
          </div>
          <div className="summary-pill">
            <span className="num">3</span>
            <span className="label">Enterprise clients</span>
          </div>
          <div className="summary-pill">
            <span className="num">10k+</span>
            <span className="label">Daily API hits</span>
          </div>
        </div>
      </div>

      <div className="timeline">
        {roles.map((r, idx) => (
          <div key={idx} className="role">
            <div className="rail">
              <div className={`rail-dot ${r.isCurrent ? 'current' : ''}`}>
                {r.isCurrent && <span className="rail-ping" />}
              </div>
              {idx !== roles.length - 1 && <div className="rail-line" />}
            </div>

            <div className="role-body">
              <div className="role-head">
                <div>
                  <h3 className="company-name">
                    <FaBriefcase className="ico" /> {r.company}
                  </h3>
                  <div className="role-meta">
                    <span className="role-name">{r.role}</span>
                    <span className="meta-dot">•</span>
                    <span className="loc"><FaMapMarkerAlt className="ico-sm" /> {r.location}</span>
                  </div>
                </div>
                <div className="role-period">
                  {r.isCurrent && <span className="now-tag"><span className="live-dot" /> Now</span>}
                  <span className="period">{r.period}</span>
                </div>
              </div>

              <div className="role-tags">
                {r.tags.map((t) => (
                  <span key={t} className="chip chip-violet">{t}</span>
                ))}
              </div>

              <ul className="bullets">
                {r.bullets.map((b, i) => (
                  <li key={i} className="bullet">
                    <FaArrowUpRightFromSquare className="bullet-ico" />
                    <div>
                      <div className="bullet-headline">{b.headline}</div>
                      <div className="bullet-detail">{b.detail}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .experience-cell {
          padding: 32px;
        }
        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 24px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }
        .exp-title {
          font-size: clamp(1.6rem, 2.6vw, 2.1rem);
          line-height: 1.15;
          letter-spacing: -0.02em;
          max-width: 560px;
        }
        .exp-summary {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .summary-pill {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 10px 14px;
          border-radius: 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 96px;
        }
        .summary-pill .num {
          font-family: var(--font-display);
          font-size: 1.45rem;
          font-weight: 700;
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .summary-pill .label {
          font-size: 0.68rem;
          font-family: var(--font-mono);
          color: var(--text-muted);
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .timeline {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .role {
          display: grid;
          grid-template-columns: 32px 1fr;
          gap: 18px;
          padding-bottom: 28px;
        }
        .role:last-child { padding-bottom: 0; }
        .rail {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }
        .rail-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.12);
          border: 2px solid rgba(255, 255, 255, 0.2);
          position: relative;
          margin-top: 6px;
        }
        .rail-dot.current {
          background: var(--accent);
          border-color: rgba(139, 92, 246, 0.5);
          box-shadow: 0 0 18px rgba(139, 92, 246, 0.6);
        }
        .rail-ping {
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          background: rgba(139, 92, 246, 0.4);
          animation: ping 2s ease-out infinite;
        }
        @keyframes ping {
          0% { transform: scale(0.6); opacity: 0.8; }
          100% { transform: scale(2); opacity: 0; }
        }
        .rail-line {
          flex: 1;
          width: 2px;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.02));
          margin-top: 8px;
        }
        .role-body {
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 18px;
          padding: 22px;
          transition: 0.3s;
        }
        .role-body:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(139, 92, 246, 0.18);
        }
        .role-head {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 14px;
          flex-wrap: wrap;
        }
        .company-name {
          font-size: 1.15rem;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 6px;
        }
        .company-name .ico {
          color: var(--accent-2);
          font-size: 0.95rem;
        }
        .role-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-muted);
          font-size: 0.9rem;
          flex-wrap: wrap;
        }
        .role-name {
          color: var(--text-main);
          font-weight: 500;
        }
        .loc {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .ico-sm { font-size: 0.78rem; }
        .meta-dot { color: var(--text-dim); }
        .role-period {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 6px;
        }
        .now-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(163, 230, 53, 0.12);
          border: 1px solid rgba(163, 230, 53, 0.25);
          color: #bef264;
          padding: 3px 9px;
          border-radius: 999px;
          font-size: 0.7rem;
          font-family: var(--font-mono);
          font-weight: 500;
        }
        .period {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-muted);
          letter-spacing: 0.02em;
        }
        .role-tags {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
          margin-bottom: 18px;
        }
        .bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .bullet {
          display: grid;
          grid-template-columns: 22px 1fr;
          gap: 12px;
          align-items: start;
        }
        .bullet-ico {
          color: var(--accent-2);
          font-size: 0.78rem;
          margin-top: 5px;
        }
        .bullet-headline {
          color: var(--text-main);
          font-weight: 600;
          font-size: 0.97rem;
          line-height: 1.4;
          margin-bottom: 4px;
        }
        .bullet-detail {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.6;
        }
        @media (max-width: 640px) {
          .experience-cell { padding: 22px; }
          .role-head { flex-direction: column; }
          .role-period { align-items: flex-start; }
          .role { grid-template-columns: 24px 1fr; gap: 14px; }
          .role-body { padding: 18px; }
        }
      `}</style>
    </motion.div>
  );
};

export default Experience;
