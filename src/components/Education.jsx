import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';
import { HiAcademicCap } from 'react-icons/hi2';

const Education = () => {
  return (
    <motion.div
      className="bento-item col-span-2 edu-cell"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
    >
      <div className="section-label">education · foundations</div>
      <h3 className="bento-heading"><FaGraduationCap className="icon" /> Education</h3>

      <div className="edu-card">
        <div className="edu-top">
          <div className="logo-circle">
            <FaUniversity />
          </div>
          <div className="edu-meta">
            <div className="degree">B.E. — Computer Science &amp; Engineering</div>
            <div className="uni-name">Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)</div>
            <div className="uni-loc">Bhopal, India</div>
          </div>
        </div>

        <div className="edu-footer">
          <div className="grad-stat">
            <span className="stat-num text-gradient">7.6</span>
            <span className="stat-label">CGPA · /10</span>
          </div>
          <div className="grad-divider" />
          <div className="grad-stat">
            <span className="stat-num text-gradient">Mar 2025</span>
            <span className="stat-label">Graduated</span>
          </div>
        </div>
      </div>

      <div className="continuing">
        <HiAcademicCap className="ci-ico" />
        <div>
          <div className="ci-title">Continuous learner</div>
          <div className="ci-sub">QLoRA fine-tuning · LLM evaluation (MRR@10, NDCG@10) · multi-agent orchestration</div>
        </div>
      </div>

      <style>{`
        .edu-cell { gap: 14px; }
        .edu-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 16px;
          padding: 18px;
          margin-bottom: 12px;
        }
        .edu-top {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          margin-bottom: 16px;
        }
        .logo-circle {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(139, 92, 246, 0.14);
          border: 1px solid rgba(139, 92, 246, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          color: #c4b5fd;
          flex-shrink: 0;
        }
        .degree {
          font-weight: 600;
          color: var(--text-main);
          font-size: 0.98rem;
          margin-bottom: 4px;
          line-height: 1.3;
        }
        .uni-name {
          color: var(--text-main);
          font-size: 0.86rem;
          opacity: 0.9;
          margin-bottom: 2px;
        }
        .uni-loc {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-muted);
          letter-spacing: 0.02em;
        }
        .edu-footer {
          display: flex;
          align-items: center;
          gap: 16px;
          padding-top: 14px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }
        .grad-stat {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }
        .stat-num {
          font-family: var(--font-display);
          font-size: 1.3rem;
          font-weight: 700;
          line-height: 1;
        }
        .stat-label {
          font-size: 0.68rem;
          font-family: var(--font-mono);
          color: var(--text-muted);
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .grad-divider {
          width: 1px;
          height: 28px;
          background: rgba(255, 255, 255, 0.08);
        }
        .continuing {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          padding: 14px;
          background: rgba(6, 182, 212, 0.06);
          border: 1px solid rgba(6, 182, 212, 0.18);
          border-radius: 14px;
        }
        .ci-ico {
          color: #67e8f9;
          font-size: 1.3rem;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .ci-title {
          color: var(--text-main);
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 3px;
        }
        .ci-sub {
          color: var(--text-muted);
          font-size: 0.78rem;
          line-height: 1.5;
          font-family: var(--font-mono);
        }
      `}</style>
    </motion.div>
  );
};

export default Education;
