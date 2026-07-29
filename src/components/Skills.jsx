import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaPython, FaDocker, FaAws, FaGitAlt,
} from 'react-icons/fa';
import {
  SiLangchain, SiOpenai, SiHuggingface, SiGooglecloud, SiFastapi, SiDjango,
  SiPandas, SiNumpy, SiTensorflow, SiScikitlearn, SiPostgresql,
  SiStreamlit, SiHeroku, SiGithubactions, SiKeras, SiGooglegemini, SiAnthropic,
} from 'react-icons/si';
import { HiSparkles, HiCpuChip, HiCloud, HiServer, HiCircleStack, HiCodeBracket } from 'react-icons/hi2';
import { TbBrain, TbDatabase, TbVectorTriangle } from 'react-icons/tb';

const Skills = () => {
  const categories = [
    {
      key: 'genai',
      label: 'Generative AI · LLMs',
      icon: <HiSparkles />,
      accent: 'violet',
      summary: 'LangChain, LangGraph, agents, prompt engineering, hallucination reduction',
      items: [
        { name: 'LangChain', icon: <SiLangchain />, level: 'Expert' },
        { name: 'LangGraph', icon: <TbBrain />, level: 'Advanced' },
        { name: 'LlamaIndex', icon: <TbBrain />, level: 'Expert' },
        { name: 'OpenAI GPT-4 / GPT-4o', icon: <SiOpenai />, level: 'Expert' },
        { name: 'Gemini API', icon: <SiGooglegemini />, level: 'Advanced' },
        { name: 'Hugging Face', icon: <SiHuggingface />, level: 'Advanced' },
        { name: 'Anthropic', icon: <SiAnthropic />, level: 'Advanced' },
        { name: 'Prompt Engineering', icon: <HiSparkles />, level: 'Expert' },
        { name: 'Tool Calling', icon: <HiCpuChip />, level: 'Advanced' },
        { name: 'Agentic AI · Multi-Agent', icon: <TbBrain />, level: 'Expert' },
      ],
    },
    {
      key: 'rag',
      label: 'RAG · Vector Databases',
      icon: <TbVectorTriangle />,
      accent: 'cyan',
      summary: 'Retrieval pipelines, semantic search, hybrid search, re-ranking',
      items: [
        { name: 'RAG Pipelines', icon: <TbVectorTriangle />, level: 'Expert' },
        { name: 'Semantic Search', icon: <TbVectorTriangle />, level: 'Expert' },
        { name: 'Embedding Pipelines', icon: <TbDatabase />, level: 'Advanced' },
        { name: 'ChromaDB', icon: <TbDatabase />, level: 'Expert' },
        { name: 'Pinecone', icon: <TbDatabase />, level: 'Advanced' },
        { name: 'FAISS', icon: <TbDatabase />, level: 'Advanced' },
        { name: 'pgvector', icon: <TbDatabase />, level: 'Advanced' },
        { name: 'MiniLM Embeddings', icon: <TbDatabase />, level: 'Advanced' },
        { name: 'FlashRank Re-ranking', icon: <HiCpuChip />, level: 'Advanced' },
        { name: 'RAGAS', icon: <HiCpuChip />, level: 'Advanced' },
      ],
    },
    {
      key: 'mldl',
      label: 'Machine Learning · Deep Learning',
      icon: <HiCpuChip />,
      accent: 'pink',
      summary: 'Classical ML, neural networks, model evaluation',
      items: [
        { name: 'Scikit-Learn', icon: <SiScikitlearn />, level: 'Expert' },
        { name: 'TensorFlow · Keras', icon: <SiTensorflow />, level: 'Advanced' },
        { name: 'Neural Networks', icon: <HiCpuChip />, level: 'Advanced' },
        { name: 'CNNs', icon: <HiCpuChip />, level: 'Advanced' },
        { name: 'Random Forests · GBM', icon: <HiCpuChip />, level: 'Advanced' },
        { name: 'SVM · K-Means', icon: <HiCpuChip />, level: 'Advanced' },
        { name: 'Hyperparameter Tuning', icon: <HiCpuChip />, level: 'Advanced' },
        { name: 'Model Eval (F1 / NDCG / MRR)', icon: <HiCpuChip />, level: 'Expert' },
      ],
    },
    {
      key: 'cloud',
      label: 'Cloud · LLMOps',
      icon: <HiCloud />,
      accent: 'cyan',
      summary: 'Vertex AI, Bedrock, CI/CD, observability and AI Dev tools',
      items: [
        { name: 'Vertex AI', icon: <SiGooglecloud />, level: 'Expert' },
        { name: 'AWS Bedrock', icon: <FaAws />, level: 'Advanced' },
        { name: 'LLMOps', icon: <HiCloud />, level: 'Expert' },
        { name: 'GitHub Actions · GitLab CI/CD', icon: <SiGithubactions />, level: 'Advanced' },
        { name: 'Docker', icon: <FaDocker />, level: 'Expert' },
        { name: 'Prometheus · Grafana', icon: <HiCloud />, level: 'Advanced' },
        { name: 'Streamlit', icon: <SiStreamlit />, level: 'Advanced' },
        { name: 'OWASP LLM Top 10', icon: <HiCloud />, level: 'Advanced' },
      ],
    },
    {
      key: 'backend',
      label: 'Backend · Deployment',
      icon: <HiServer />,
      accent: 'violet',
      summary: 'Async APIs, scalable services, system design',
      items: [
        { name: 'FastAPI', icon: <SiFastapi />, level: 'Expert' },
        { name: 'Django', icon: <SiDjango />, level: 'Expert' },
        { name: 'Flask', icon: <HiServer />, level: 'Advanced' },
        { name: 'Node.js', icon: <HiServer />, level: 'Advanced' },
        { name: 'RESTful APIs', icon: <HiCodeBracket />, level: 'Expert' },
        { name: 'Async I/O Architecture', icon: <HiServer />, level: 'Expert' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 'Advanced' },
        { name: 'JWT · RBAC', icon: <HiServer />, level: 'Advanced' },
        { name: 'Git · GitHub', icon: <FaGitAlt />, level: 'Expert' },
      ],
    },
    {
      key: 'data',
      label: 'Data · Document Processing',
      icon: <HiCircleStack />,
      accent: 'lime',
      summary: 'OCR, parsing, analysis, visualization',
      items: [
        { name: 'Pandas', icon: <SiPandas />, level: 'Expert' },
        { name: 'NumPy', icon: <SiNumpy />, level: 'Expert' },
        { name: 'Matplotlib · Seaborn', icon: <HiCircleStack />, level: 'Advanced' },
        { name: 'PyMuPDF', icon: <HiCircleStack />, level: 'Expert' },
        { name: 'Tesseract OCR', icon: <HiCircleStack />, level: 'Expert' },
      ],
    },
    {
      key: 'langs',
      label: 'Languages',
      icon: <HiCodeBracket />,
      accent: 'pink',
      summary: 'Core programming & query languages',
      items: [
        { name: 'Python', icon: <FaPython />, level: 'Expert' },
        { name: 'SQL', icon: <HiCircleStack />, level: 'Advanced' },
        { name: 'Bash · Shell', icon: <HiCodeBracket />, level: 'Advanced' },
      ],
    },
  ];

  const [active, setActive] = useState('genai');
  const activeCat = categories.find((c) => c.key === active);

  return (
    <motion.div
      className="bento-item col-span-4 skills-cell"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay: 0.05 }}
    >
      <div className="skills-header">
        <div>
          <div className="section-label">tech stack · battle-tested</div>
          <h2 className="skills-title">
            The toolkit behind <span className="text-gradient">production AI</span>
          </h2>
        </div>
        <p className="skills-intro">
          Curated, categorized, and indexed by depth — from large language models down to the OCR fallbacks
          that quietly keep ingestion pipelines alive.
        </p>
      </div>

      <div className="cat-tabs">
        {categories.map((c) => (
          <button
            key={c.key}
            className={`cat-tab ${active === c.key ? 'is-active' : ''} accent-${c.accent}`}
            onClick={() => setActive(c.key)}
          >
            <span className="cat-ico">{c.icon}</span>
            <span className="cat-name">{c.label}</span>
            <span className="cat-count">{c.items.length}</span>
          </button>
        ))}
      </div>

      <motion.div
        key={active}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="cat-panel"
      >
        <p className={`cat-summary accent-${activeCat.accent}`}>{activeCat.summary}</p>
        <div className="skill-grid">
          {activeCat.items.map((s, i) => (
            <div key={i} className={`skill-tile accent-${activeCat.accent}`} title={`${s.name} · ${s.level}`}>
              <span className="tile-ico">{s.icon}</span>
              <div className="tile-text">
                <span className="tile-name">{s.name}</span>
                <span className="tile-level">{s.level}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <style>{`
        .skills-cell { padding: 32px; }
        .skills-header {
          display: flex;
          justify-content: space-between;
          gap: 30px;
          align-items: flex-end;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }
        .skills-title {
          font-size: clamp(1.6rem, 2.6vw, 2.1rem);
          line-height: 1.15;
          letter-spacing: -0.02em;
        }
        .skills-intro {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.55;
          max-width: 460px;
        }
        .cat-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          padding: 6px;
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          margin-bottom: 24px;
        }
        .cat-tab {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 14px;
          background: transparent;
          border: 1px solid transparent;
          border-radius: 12px;
          color: var(--text-muted);
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          transition: 0.25s;
          letter-spacing: -0.005em;
        }
        .cat-tab:hover {
          background: rgba(255, 255, 255, 0.04);
          color: var(--text-main);
        }
        .cat-tab.is-active {
          background: rgba(255, 255, 255, 0.06);
          color: white;
          border-color: rgba(255, 255, 255, 0.1);
        }
        .cat-tab.is-active.accent-violet { background: rgba(139, 92, 246, 0.14); border-color: rgba(139, 92, 246, 0.3); color: #c4b5fd; }
        .cat-tab.is-active.accent-cyan { background: rgba(6, 182, 212, 0.14); border-color: rgba(6, 182, 212, 0.3); color: #67e8f9; }
        .cat-tab.is-active.accent-pink { background: rgba(236, 72, 153, 0.14); border-color: rgba(236, 72, 153, 0.3); color: #f9a8d4; }
        .cat-tab.is-active.accent-lime { background: rgba(163, 230, 53, 0.14); border-color: rgba(163, 230, 53, 0.3); color: #bef264; }
        .cat-ico { font-size: 0.95rem; display: inline-flex; }
        .cat-count {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          padding: 2px 7px;
          background: rgba(255, 255, 255, 0.06);
          border-radius: 999px;
          color: var(--text-muted);
        }
        .cat-summary {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-bottom: 18px;
          color: var(--text-muted);
        }
        .cat-summary.accent-violet { color: #c4b5fd; }
        .cat-summary.accent-cyan { color: #67e8f9; }
        .cat-summary.accent-pink { color: #f9a8d4; }
        .cat-summary.accent-lime { color: #bef264; }
        .skill-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 10px;
        }
        .skill-tile {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 13px 14px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 14px;
          transition: 0.25s;
        }
        .skill-tile:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.12);
        }
        .skill-tile.accent-violet:hover { border-color: rgba(139, 92, 246, 0.35); box-shadow: 0 0 0 1px rgba(139, 92, 246, 0.08); }
        .skill-tile.accent-cyan:hover { border-color: rgba(6, 182, 212, 0.35); box-shadow: 0 0 0 1px rgba(6, 182, 212, 0.08); }
        .skill-tile.accent-pink:hover { border-color: rgba(236, 72, 153, 0.35); box-shadow: 0 0 0 1px rgba(236, 72, 153, 0.08); }
        .skill-tile.accent-lime:hover { border-color: rgba(163, 230, 53, 0.35); box-shadow: 0 0 0 1px rgba(163, 230, 53, 0.08); }
        .tile-ico {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 1.05rem;
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-main);
          flex-shrink: 0;
        }
        .skill-tile.accent-violet .tile-ico { background: rgba(139, 92, 246, 0.14); color: #c4b5fd; }
        .skill-tile.accent-cyan .tile-ico { background: rgba(6, 182, 212, 0.14); color: #67e8f9; }
        .skill-tile.accent-pink .tile-ico { background: rgba(236, 72, 153, 0.14); color: #f9a8d4; }
        .skill-tile.accent-lime .tile-ico { background: rgba(163, 230, 53, 0.14); color: #bef264; }
        .tile-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
        }
        .tile-name {
          color: var(--text-main);
          font-size: 0.88rem;
          font-weight: 500;
          line-height: 1.25;
        }
        .tile-level {
          font-family: var(--font-mono);
          font-size: 0.66rem;
          color: var(--text-dim);
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        @media (max-width: 640px) {
          .skills-cell { padding: 22px; }
          .cat-tab .cat-name { display: none; }
          .cat-tab { padding: 9px 11px; }
        }
      `}</style>
    </motion.div>
  );
};

export default Skills;
