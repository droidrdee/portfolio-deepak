import React from 'react';
import Hero from './components/Hero';
import Socials from './components/Socials';
import ProfileImage from './components/ProfileImage';
import ProjectCard from './components/ProjectCard';
import ProjectsHeader from './components/ProjectsHeader';
import Skills from './components/Skills';
import Stats from './components/Stats';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Services from './components/Services';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import BookCall from './components/BookCall';

function App() {
  return (
    <div className="app-wrapper">
      <div className="bento-container">
        {/* Row 1 — Intro */}
        <Hero />
        <ProfileImage />

        {/* Row 2 — Identity & quick connect */}
        <Socials />
        <Stats />

        {/* Row 3 — Experience (deep dive) */}
        <Experience />

        {/* Row 4 — Skills (categorized) */}
        <Skills />

        {/* Row 5 — Projects header */}
        <ProjectsHeader />

        {/* Row 6 — Featured Project: OMNIMIND */}
        <ProjectCard
          title="OMNIMIND"
          tagline="Full-Stack Agentic AI Research Platform"
          desc="A multi-agent research platform with three execution paths — a LlamaIndex + ChromaDB RAG pipeline, a LangChain + Tavily web-search ReAct agent, and a GPT-4o reasoning agent — fronted by FastAPI and a Streamlit UI."
          highlights={[
            'Query router dispatches each question via live-keyword detection, query-complexity heuristics, and top-K retrieval confidence from a FlashRank-reranked ChromaDB lookup',
            'OCR ingestion pipeline (PyMuPDF + Tesseract fallback) feeding a MiniLM embedder, with batch upload, document listing, and deletion APIs',
            'QLoRA (4-bit) fine-tuning + MRR@10 / NDCG@10 / Hit@5 evaluation scripts for the retriever embedding model',
            'Forced-route overrides for evaluation, structured logging, and reproducible Docker deployment',
          ]}
          tags={['Python', 'LangChain', 'LlamaIndex', 'FastAPI', 'ChromaDB', 'Docker', 'Streamlit']}
          accent="violet"
          badge="Featured · Resume Project"
          year="2026"
          metric={{ value: 'NDCG@10', label: 'evaluated retriever' }}
          github="https://github.com/droidrdee"
          delay={0.05}
          colSpan={4}
          featured
        />

        {/* Row 7 — Two project cards */}
        <ProjectCard
          title="DCGPAC Conversational Automation"
          tagline="Enterprise Procurement & Approval Chatbot"
          desc="A production LLM-driven conversational system that automates purchase orders, approval workflows, inventory queries, and vendor communication through a single chatbot interface across 3 enterprise workflows."
          highlights={[
            'Intent classification + RAG-based context retrieval + multi-turn dialogue management',
            'Event-driven workflow automation with webhooks, async schedulers, and background workers',
            'Compressed multi-step operations from hours to under 5 minutes',
          ]}
          tags={['LLM', 'RAG', 'FastAPI', 'Async', 'Enterprise']}
          accent="cyan"
          badge="Production · Softude × DCGPAC"
          year="2025"
          metric={{ value: '<5 min', label: 'workflow turnaround' }}
          delay={0.1}
          colSpan={2}
        />

        <ProjectCard
          title="Maritime OCR Intelligence"
          tagline="Document AI for Shipping & Regulatory PDFs"
          desc="A multi-stage NLP pipeline that ingests port circulars, shipping notices, and regulatory PDFs — automatically surfacing profit-impacting insights that previously required hours of manual analyst review."
          highlights={[
            'PyMuPDF + Tesseract OCR with intelligent fallback routing',
            'Transformer-based re-ranking + keyword scoring for relevance',
            'Profit-impacting insights surfaced automatically per document',
          ]}
          tags={['OCR', 'NLP', 'Transformers', 'PyMuPDF', 'Tesseract']}
          accent="pink"
          badge="Production · Softude"
          year="2025"
          metric={{ value: 'Hours → Seconds', label: 'analyst review' }}
          delay={0.15}
          colSpan={2}
        />

        {/* Row 8 — Cost Estimation Platform */}
        <ProjectCard
          title="Cost Estimation Platform"
          tagline="Async-I/O Refactor for Havells · TVS · Hero"
          desc="Resolved critical architectural failures in Softude's flagship Cost Estimation Platform serving three major enterprise manufacturers — turning a system that buckled at 4 concurrent users into one that runs steadily at 30+ users."
          highlights={[
            'Eliminated memory leaks via systematic profiling and connection pooling',
            'Restructured N+1 queries into optimized joins with index tuning',
            'Migrated the data-access layer to a fully async / await I/O architecture',
            '90% overall performance improvement · 70% reduction in peak API response time',
          ]}
          tags={['Django', 'FastAPI', 'Async I/O', 'PostgreSQL', 'Profiling']}
          accent="lime"
          badge="Enterprise · Production"
          year="2026"
          metric={{ value: '90% faster', label: '3→30+ users · 70% lower latency' }}
          delay={0.2}
          colSpan={4}
        />

        {/* Row 9 — Services + Process */}
        <Services />
        <Process />

        {/* Row 10 — Clients + Education */}
        <Clients />
        <Education />

        {/* Row 11 — Testimonials */}
        <Testimonials />

        {/* Row 12 — Book a call (CTA) */}
        <BookCall />

        {/* Row 13 — Contact (full) */}
        <Contact />
      </div>

      <footer className="simple-footer">
        <div className="footer-row">
          <span className="footer-name">Deepak Rathore</span>
          <span className="footer-dot">•</span>
          <span>AI GenAI Engineer</span>
          <span className="footer-dot">•</span>
          <span>Indore, India</span>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} Deepak Rathore. Built with React, Vite &amp; framer-motion.
        </p>
      </footer>

      <style>{`
        .app-wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          padding: 30px 0 20px;
        }
        .simple-footer {
          text-align: center;
          padding: 50px 20px 30px;
          margin-top: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          max-width: 1280px;
          margin-left: auto;
          margin-right: auto;
          width: 100%;
        }
        .footer-row {
          display: inline-flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-muted);
          margin-bottom: 12px;
          letter-spacing: 0.02em;
        }
        .footer-name {
          color: var(--text-main);
          font-weight: 600;
        }
        .footer-dot { color: var(--text-dim); }
        .footer-copy {
          color: var(--text-dim);
          font-size: 0.78rem;
          font-family: var(--font-mono);
        }
      `}</style>
    </div>
  );
}

export default App;
