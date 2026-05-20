import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaCode, FaRocket } from 'react-icons/fa';
import { HiBeaker, HiChartBar } from 'react-icons/hi2';

const Process = () => {
    const steps = [
        {
            icon: <FaSearch />,
            num: '01',
            title: 'Discovery',
            desc: 'Map the real bottleneck — not the symptom. Profile, benchmark, define success metrics before a single line ships.',
        },
        {
            icon: <HiBeaker />,
            num: '02',
            title: 'Prototype',
            desc: 'Smallest working slice. Evaluate retrieval (MRR / NDCG), validate latency, sanity-check the LLM output.',
        },
        {
            icon: <FaCode />,
            num: '03',
            title: 'Engineer',
            desc: 'Production-grade build — async I/O, structured logging, type-safe APIs, and reproducible deployments.',
        },
        {
            icon: <HiChartBar />,
            num: '04',
            title: 'Evaluate',
            desc: 'Measurable wins only. Before/after profiling, latency percentiles, retrieval quality, user-capacity tests.',
        },
        {
            icon: <FaRocket />,
            num: '05',
            title: 'Ship',
            desc: 'Deploy on Vertex AI / AWS Bedrock / Docker. Monitor in prod, iterate based on real usage.',
        },
    ];

    return (
        <motion.div
            className="bento-item col-span-2 process-cell"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.15 }}
        >
            <div className="section-label">how i work · repeatable</div>
            <h3 className="bento-heading">My Workflow</h3>

            <div className="process-steps">
                {steps.map((step, i) => (
                    <div key={i} className="step-item">
                        <div className="step-rail">
                            <div className="step-icon">{step.icon}</div>
                            {i !== steps.length - 1 && <div className="step-line" />}
                        </div>
                        <div className="step-info">
                            <div className="step-row">
                                <span className="step-num">{step.num}</span>
                                <h4>{step.title}</h4>
                            </div>
                            <p>{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
        .process-steps {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .step-item {
          display: grid;
          grid-template-columns: 36px 1fr;
          gap: 14px;
          padding-bottom: 14px;
        }
        .step-item:last-child { padding-bottom: 0; }
        .step-rail {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .step-icon {
          width: 32px;
          height: 32px;
          background: rgba(139, 92, 246, 0.12);
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #c4b5fd;
          font-size: 0.85rem;
          border: 1px solid rgba(139, 92, 246, 0.22);
          flex-shrink: 0;
        }
        .step-line {
          flex: 1;
          width: 2px;
          background: linear-gradient(to bottom, rgba(139, 92, 246, 0.25), rgba(255, 255, 255, 0.03));
          margin-top: 6px;
          min-height: 18px;
        }
        .step-info {
          padding-top: 4px;
        }
        .step-row {
          display: flex;
          align-items: baseline;
          gap: 10px;
          margin-bottom: 4px;
        }
        .step-num {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-dim);
          letter-spacing: 0.04em;
        }
        .step-info h4 {
          font-size: 0.97rem;
          color: white;
          letter-spacing: -0.01em;
        }
        .step-info p {
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.55;
        }
      `}</style>
        </motion.div>
    );
};

export default Process;
