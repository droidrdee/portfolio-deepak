import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding } from 'react-icons/fa';

const Clients = () => {
    const clients = [
        { name: 'Havells', project: 'Cost Estimation Platform · 90% perf lift', year: '2025', accent: 'violet' },
        { name: 'TVS', project: 'Async I/O refactor · 70% latency cut', year: '2025', accent: 'cyan' },
        { name: 'Hero MotoCorp', project: 'Concurrent capacity scale-up (7×)', year: '2025', accent: 'pink' },
        { name: 'DCGPAC', project: 'LLM conversational automation system', year: '2025', accent: 'lime' },
        { name: 'Internal · Maritime', project: 'OCR Intelligence System for shipping PDFs', year: '2025', accent: 'violet' },
    ];

    return (
        <motion.div
            className="bento-item col-span-2 clients-cell"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.15 }}
        >
            <div className="section-label">enterprise clients · production</div>
            <h3 className="bento-heading"><FaBuilding className="icon" /> Trusted by</h3>

            <div className="clients-list">
                {clients.map((client, i) => (
                    <div key={i} className={`client-row accent-${client.accent}`}>
                        <div className="client-left">
                            <span className="client-initial">{client.name.charAt(0)}</span>
                            <div className="client-info">
                                <span className="client-name">{client.name}</span>
                                <span className="project-name">{client.project}</span>
                            </div>
                        </div>
                        <span className="year">{client.year}</span>
                    </div>
                ))}
            </div>

            <style>{`
                .clients-list {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
                .client-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 12px 14px;
                    background: rgba(255, 255, 255, 0.025);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 12px;
                    transition: 0.28s;
                }
                .client-row:hover {
                    background: rgba(255, 255, 255, 0.045);
                    transform: translateX(3px);
                }
                .client-row.accent-violet:hover { border-color: rgba(139, 92, 246, 0.3); }
                .client-row.accent-cyan:hover { border-color: rgba(6, 182, 212, 0.3); }
                .client-row.accent-pink:hover { border-color: rgba(236, 72, 153, 0.3); }
                .client-row.accent-lime:hover { border-color: rgba(163, 230, 53, 0.3); }
                .client-left {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }
                .client-initial {
                    width: 34px;
                    height: 34px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-family: var(--font-display);
                    font-weight: 700;
                    font-size: 0.95rem;
                    flex-shrink: 0;
                }
                .client-row.accent-violet .client-initial { background: rgba(139, 92, 246, 0.14); color: #c4b5fd; }
                .client-row.accent-cyan .client-initial { background: rgba(6, 182, 212, 0.14); color: #67e8f9; }
                .client-row.accent-pink .client-initial { background: rgba(236, 72, 153, 0.14); color: #f9a8d4; }
                .client-row.accent-lime .client-initial { background: rgba(163, 230, 53, 0.14); color: #bef264; }
                .client-info {
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                }
                .client-name {
                    font-weight: 600;
                    font-size: 0.95rem;
                    color: white;
                    letter-spacing: -0.01em;
                }
                .project-name {
                    font-size: 0.75rem;
                    color: var(--text-muted);
                    font-family: var(--font-mono);
                }
                .year {
                    font-size: 0.72rem;
                    font-family: var(--font-mono);
                    color: var(--text-muted);
                    padding: 4px 9px;
                    border-radius: 6px;
                    background: rgba(255, 255, 255, 0.04);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                }
            `}</style>
        </motion.div>
    );
};

export default Clients;
