import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaCode, FaRocket } from 'react-icons/fa';

const Process = () => {
    const steps = [
        { icon: <FaSearch />, title: 'Discovery', desc: 'Understanding your needs & goals.' },
        { icon: <FaCode />, title: 'Build', desc: 'Developing with clean, scalable code.' },
        { icon: <FaRocket />, title: 'Launch', desc: 'Deploying & optimizing for growth.' },
    ];

    return (
        <motion.div
            className="bento-item col-span-2 process-cell"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
        >
            <h3>My Workflow</h3>
            <div className="process-steps">
                {steps.map((step, i) => (
                    <div key={i} className="step-item">
                        <div className="step-icon">{step.icon}</div>
                        <div className="step-info">
                            <h4>{step.title}</h4>
                            <p>{step.desc}</p>
                        </div>
                        {i !== steps.length - 1 && <div className="step-line"></div>}
                    </div>
                ))}
            </div>

            <style>{`
        .process-cell h3 {
          margin-bottom: 20px;
          font-size: 1.2rem;
        }
        .process-steps {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          position: relative;
        }
        .step-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          flex: 1;
          position: relative;
          z-index: 1;
        }
        .step-icon {
          width: 50px;
          height: 50px;
          background: rgba(255,255,255,0.05);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          font-size: 1.2rem;
          margin-bottom: 10px;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .step-info h4 {
          font-size: 0.95rem;
          margin-bottom: 5px;
        }
        .step-info p {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.3;
          max-width: 120px;
        }
        .step-line {
          position: absolute;
          top: 25px;
          right: -50%;
          width: 100%;
          height: 2px;
          background: rgba(255,255,255,0.1);
          z-index: -1;
        }
        @media (max-width: 640px) {
          .process-steps {
            flex-direction: column;
            gap: 20px;
          }
          .step-item {
            flex-direction: row;
            text-align: left;
            gap: 15px;
            width: 100%;
          }
          .step-line {
            display: none;
          }
          .step-info p {
            max-width: none;
          }
        }
      `}</style>
        </motion.div>
    );
};

export default Process;
