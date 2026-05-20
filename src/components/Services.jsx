import React from 'react';
import { motion } from 'framer-motion';
import { TbBrain, TbVectorTriangle } from 'react-icons/tb';
import { HiSparkles, HiServer, HiCpuChip } from 'react-icons/hi2';
import { FaRobot } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            icon: <TbBrain />,
            title: 'Agentic AI Systems',
            desc: 'Multi-agent LangChain / LlamaIndex pipelines with ReAct loops, tool use, query routers, and forced-route overrides for evaluation.',
            accent: 'violet',
        },
        {
            icon: <TbVectorTriangle />,
            title: 'RAG Pipelines',
            desc: 'Production retrieval — ChromaDB / Pinecone / Weaviate, OCR ingestion, MiniLM embeddings, FlashRank re-ranking, MRR/NDCG eval.',
            accent: 'cyan',
        },
        {
            icon: <FaRobot />,
            title: 'LLM Automation',
            desc: 'Conversational chatbots, intent classification, multi-turn dialogue, and event-driven workflow automation that replaces manual steps.',
            accent: 'pink',
        },
        {
            icon: <HiServer />,
            title: 'Backend Architecture',
            desc: 'FastAPI / Django async I/O, connection pooling, query optimisation, and refactors that lift platforms from 3 users to 30+.',
            accent: 'lime',
        },
        {
            icon: <HiCpuChip />,
            title: 'Fine-Tuning · LLMOps',
            desc: 'QLoRA (4-bit) fine-tuning, Vertex AI / AWS Bedrock deployment, CI/CD for AI workloads, and rigorous retrieval evaluation.',
            accent: 'violet',
        },
        {
            icon: <HiSparkles />,
            title: 'OCR & Document AI',
            desc: 'PyMuPDF + Tesseract multi-stage pipelines with Transformer re-ranking — turning regulatory PDFs into structured profit insight.',
            accent: 'cyan',
        },
    ];

    return (
        <motion.div
            className="bento-item col-span-2 services-cell"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.1 }}
        >
            <div className="section-label">what i build · for clients</div>
            <h3 className="bento-heading">Services</h3>

            <div className="services-grid">
                {services.map((service, i) => (
                    <div key={i} className={`service-card accent-${service.accent}`}>
                        <div className="icon-box">{service.icon}</div>
                        <div className="service-info">
                            <h4>{service.title}</h4>
                            <p>{service.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .service-card {
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid rgba(255, 255, 255, 0.06);
          padding: 16px;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          transition: 0.28s;
        }
        .service-card:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 255, 255, 0.12);
          transform: translateY(-3px);
        }
        .icon-box {
          font-size: 1.1rem;
          padding: 9px;
          border-radius: 11px;
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .service-card.accent-violet .icon-box { color: #c4b5fd; background: rgba(139, 92, 246, 0.14); }
        .service-card.accent-violet:hover { border-color: rgba(139, 92, 246, 0.3); }
        .service-card.accent-cyan .icon-box { color: #67e8f9; background: rgba(6, 182, 212, 0.14); }
        .service-card.accent-cyan:hover { border-color: rgba(6, 182, 212, 0.3); }
        .service-card.accent-pink .icon-box { color: #f9a8d4; background: rgba(236, 72, 153, 0.14); }
        .service-card.accent-pink:hover { border-color: rgba(236, 72, 153, 0.3); }
        .service-card.accent-lime .icon-box { color: #bef264; background: rgba(163, 230, 53, 0.14); }
        .service-card.accent-lime:hover { border-color: rgba(163, 230, 53, 0.3); }
        .service-info h4 {
          font-size: 0.95rem;
          margin-bottom: 5px;
          color: white;
          letter-spacing: -0.01em;
        }
        .service-info p {
          font-size: 0.78rem;
          color: var(--text-muted);
          line-height: 1.5;
        }
        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </motion.div>
    );
};

export default Services;
