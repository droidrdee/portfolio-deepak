import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';

const Hero = () => {
  return (
    <motion.div
      className="bento-item col-span-3 row-span-2 hero-cell"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="hero-content">
        <div className="status-row">
          <div className="status-badge">
            <span className="live-dot"></span>
            <span>Open to opportunities worldwide · Willing to relocate</span>
          </div>
          <div className="version-tag">v2026.05</div>
        </div>

        <h1 className="hero-title">
          Building <span className="text-gradient">production-grade</span>
          <br />
          AI &amp; Agentic systems<span className="cursor">_</span>
        </h1>

        <p className="hero-sub">
          I'm <strong>Deepak Rathore</strong> — an <strong>AI GenAI Engineer</strong> who ships
          <span className="inline-chip"><HiSparkles /> RAG pipelines</span>,
          <span className="inline-chip"><HiSparkles /> multi-agent LLM systems</span>, and
          <span className="inline-chip"><HiSparkles /> async backends</span>
          that scale enterprise platforms for <strong>Havells</strong>, <strong>TVS</strong>, and <strong>Hero</strong>. Currently
          architecting LLM-driven automation at <strong>Softude Infotech</strong>.
        </p>

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="stat-num text-gradient">90%</span>
            <span className="stat-label">Perf improvement</span>
          </div>
          <div className="divider" />
          <div className="hero-stat">
            <span className="stat-num text-gradient">7×</span>
            <span className="stat-label">User-capacity scale</span>
          </div>
          <div className="divider" />
          <div className="hero-stat">
            <span className="stat-num text-gradient">10k+</span>
            <span className="stat-label">Daily txns shipped</span>
          </div>
        </div>

        <div className="hero-cta">
          <a href="#contact" className="cta-btn primary">
            Let's build something <FaArrowRight />
          </a>
          <a href="/DEEPAK%20RATHORE%20--%20RESUME-1.pdf" className="cta-btn ghost" download>
            <FaDownload /> Resume
          </a>
        </div>
      </div>

      <div className="bg-glow glow-1"></div>
      <div className="bg-glow glow-2"></div>
      <div className="orbit">
        <span className="orbit-tag">Python</span>
        <span className="orbit-tag">LangChain</span>
        <span className="orbit-tag">RAG</span>
        <span className="orbit-tag">Vertex AI</span>
        <span className="orbit-tag">FastAPI</span>
      </div>

      <style>{`
        .hero-cell {
          justify-content: center;
          position: relative;
          overflow: hidden;
          min-height: 480px;
        }
        .hero-content {
          position: relative;
          z-index: 2;
        }
        .status-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 26px;
          flex-wrap: wrap;
          gap: 10px;
        }
        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(163, 230, 53, 0.08);
          color: #bef264;
          padding: 7px 14px;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 500;
          border: 1px solid rgba(163, 230, 53, 0.22);
          font-family: var(--font-mono);
          letter-spacing: 0.01em;
        }
        .version-tag {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-dim);
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }
        .hero-title {
          font-size: clamp(2.1rem, 4.4vw, 3.6rem);
          line-height: 1.05;
          margin-bottom: 22px;
          letter-spacing: -0.025em;
          font-weight: 700;
        }
        .cursor {
          display: inline-block;
          color: var(--accent-2);
          animation: blink 1.1s steps(2) infinite;
          font-weight: 300;
          margin-left: 4px;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .hero-sub {
          color: var(--text-muted);
          font-size: 1.05rem;
          line-height: 1.65;
          max-width: 92%;
          margin-bottom: 26px;
        }
        .hero-sub strong {
          color: white;
          font-weight: 600;
        }
        .inline-chip {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 2px 8px;
          border-radius: 6px;
          background: rgba(139, 92, 246, 0.12);
          border: 1px solid rgba(139, 92, 246, 0.22);
          color: #c4b5fd;
          font-size: 0.85rem;
          font-weight: 500;
          margin: 0 2px;
          white-space: nowrap;
        }
        .inline-chip svg {
          font-size: 0.7rem;
          color: var(--accent-2);
        }
        .hero-stats {
          display: flex;
          align-items: center;
          gap: 18px;
          padding: 14px 0;
          margin-bottom: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .hero-stat {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .stat-num {
          font-family: var(--font-display);
          font-size: 1.55rem;
          font-weight: 700;
          line-height: 1;
        }
        .stat-label {
          font-size: 0.72rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .divider {
          width: 1px;
          height: 32px;
          background: rgba(255, 255, 255, 0.08);
        }
        .hero-cta {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 22px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          transition: all 0.25s;
          font-family: var(--font-body);
        }
        .cta-btn.primary {
          background: white;
          color: black;
        }
        .cta-btn.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(255, 255, 255, 0.15);
        }
        .cta-btn.ghost {
          background: rgba(255, 255, 255, 0.05);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.12);
        }
        .cta-btn.ghost:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.22);
          transform: translateY(-2px);
        }
        .bg-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
        }
        .glow-1 {
          top: -120px;
          right: -120px;
          width: 380px;
          height: 380px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.35) 0%, transparent 70%);
        }
        .glow-2 {
          bottom: -100px;
          left: -100px;
          width: 320px;
          height: 320px;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, transparent 70%);
        }
        .orbit {
          position: absolute;
          top: 50%;
          right: -40px;
          transform: translateY(-50%);
          display: none;
          flex-direction: column;
          gap: 10px;
          z-index: 1;
          opacity: 0.55;
        }
        .orbit-tag {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-muted);
          padding: 4px 10px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px dashed rgba(255, 255, 255, 0.1);
          border-radius: 6px;
        }
        @media (min-width: 1100px) {
          .orbit { display: flex; }
        }
        @media (max-width: 768px) {
          .hero-cell { min-height: auto; }
          .hero-stats { flex-wrap: wrap; gap: 12px; }
          .divider { display: none; }
        }
      `}</style>
    </motion.div>
  );
};

export default Hero;
