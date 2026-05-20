import React from 'react';
import { motion } from 'framer-motion';
import { HiCodeBracket } from 'react-icons/hi2';

const ProjectsHeader = () => {
  return (
    <motion.div
      className="bento-item col-span-4 projects-header"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-inner">
        <div className="left">
          <div className="section-label">selected work · 2024 — 2026</div>
          <h2 className="ph-title">
            Shipped projects with <span className="text-gradient">measurable impact</span>
          </h2>
          <p className="ph-sub">
            From multi-agent research platforms to enterprise OCR intelligence — each project
            below ships in production or is built end-to-end with rigorous evaluation.
          </p>
        </div>
        <div className="right">
          <div className="legend">
            <span className="chip chip-violet">LLM / RAG</span>
            <span className="chip chip-cyan">Backend / Async</span>
            <span className="chip chip-pink">OCR / NLP</span>
            <span className="chip chip-lime">Internal Tools</span>
          </div>
          <div className="counter">
            <HiCodeBracket /> <span>4 featured</span>
          </div>
        </div>
      </div>

      <style>{`
        .projects-header {
          padding: 28px 32px;
          min-height: 0;
        }
        .header-inner {
          display: flex;
          justify-content: space-between;
          gap: 30px;
          align-items: flex-end;
          flex-wrap: wrap;
        }
        .ph-title {
          font-size: clamp(1.6rem, 2.6vw, 2.1rem);
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 10px;
        }
        .ph-sub {
          color: var(--text-muted);
          font-size: 0.96rem;
          line-height: 1.55;
          max-width: 580px;
        }
        .right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 10px;
        }
        .legend {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }
        .counter {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-muted);
        }
        @media (max-width: 768px) {
          .right { align-items: flex-start; }
          .legend { justify-content: flex-start; }
        }
      `}</style>
    </motion.div>
  );
};

export default ProjectsHeader;
