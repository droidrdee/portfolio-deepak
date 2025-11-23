import React from 'react';
import { motion } from 'framer-motion';

const Clients = () => {
    const clients = [
        { name: 'TechFlow Inc.', project: 'AI Automation System', year: '2024' },
        { name: 'GreenLeaf', project: 'E-commerce Mobile App', year: '2023' },
        { name: 'StartUp X', project: 'SaaS Web Platform', year: '2023' },
        { name: 'MediCare', project: 'Patient Chatbot Agent', year: '2022' },
    ];

    return (
        <motion.div
            className="bento-item col-span-2 clients-cell"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
        >
            <h3>Selected Clients</h3>
            <div className="clients-list">
                {clients.map((client, i) => (
                    <div key={i} className="client-row">
                        <div className="client-info">
                            <span className="client-name">{client.name}</span>
                            <span className="project-name">{client.project}</span>
                        </div>
                        <span className="year">{client.year}</span>
                    </div>
                ))}
            </div>

            <style>{`
        .clients-cell h3 {
          margin-bottom: 20px;
          font-size: 1.2rem;
        }
        .clients-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .client-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px;
          background: rgba(255,255,255,0.02);
          border-radius: 12px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          transition: 0.3s;
        }
        .client-row:hover {
          background: rgba(255,255,255,0.05);
        }
        .client-info {
          display: flex;
          flex-direction: column;
        }
        .client-name {
          font-weight: 600;
          font-size: 0.95rem;
          color: white;
        }
        .project-name {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .year {
          font-size: 0.85rem;
          color: var(--accent);
          font-weight: 500;
          background: rgba(244, 63, 94, 0.1);
          padding: 4px 8px;
          border-radius: 6px;
        }
      `}</style>
        </motion.div>
    );
};

export default Clients;
