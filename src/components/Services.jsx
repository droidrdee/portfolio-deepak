import React from 'react';
import { motion } from 'framer-motion';
import { FaMobileAlt, FaGlobe, FaRobot, FaCogs } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            icon: <FaMobileAlt />,
            title: 'App Dev',
            desc: 'iOS & Android apps using React Native.'
        },
        {
            icon: <FaGlobe />,
            title: 'Web Dev',
            desc: 'Modern, responsive websites & web apps.'
        },
        {
            icon: <FaRobot />,
            title: 'AI Agents',
            desc: 'Custom Chatbots & AI automation agents.'
        },
        {
            icon: <FaCogs />,
            title: 'Automation',
            desc: 'Streamlining workflows & business logic.'
        },
    ];

    return (
        <motion.div
            className="bento-item col-span-2 services-cell"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
        >
            <h3>Services</h3>
            <div className="services-grid">
                {services.map((service, i) => (
                    <div key={i} className="service-card">
                        <div className="icon-box">{service.icon}</div>
                        <div className="service-info">
                            <h4>{service.title}</h4>
                            <p>{service.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
        .services-cell h3 {
          margin-bottom: 20px;
          font-size: 1.2rem;
        }
        .services-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }
        .service-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          padding: 15px;
          border-radius: 16px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          transition: all 0.3s;
        }
        .service-card:hover {
          background: rgba(255,255,255,0.08);
          transform: translateY(-2px);
          border-color: rgba(255,255,255,0.1);
        }
        .icon-box {
          font-size: 1.2rem;
          color: var(--accent);
          background: rgba(244, 63, 94, 0.1);
          padding: 8px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .service-info h4 {
          font-size: 0.95rem;
          margin-bottom: 4px;
          color: white;
        }
        .service-info p {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.4;
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
