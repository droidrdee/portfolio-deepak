import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, desc, tags, image, delay, colSpan = 2 }) => {
    return (
        <motion.div
            className={`bento-item col-span-${colSpan} project-card`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay }}
        >
            <div className="project-bg" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="project-content">
                <div className="project-header">
                    <div className="tags">
                        {tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                    </div>
                    <a href="#" className="link-btn"><FaExternalLinkAlt /></a>
                </div>
                <div className="project-info">
                    <h3>{title}</h3>
                    <p>{desc}</p>
                </div>
            </div>

            <style>{`
        .project-card {
          padding: 0;
          min-height: 300px;
        }
        .project-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          transition: transform 0.5s;
        }
        .project-card:hover .project-bg {
          transform: scale(1.05);
        }
        .project-content {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 60%, transparent 100%);
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        .tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .tag {
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(5px);
          padding: 4px 10px;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
        }
        .link-btn {
          width: 36px;
          height: 36px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: black;
          font-size: 0.9rem;
          opacity: 0;
          transform: translateY(-10px);
          transition: all 0.3s;
        }
        .project-card:hover .link-btn {
          opacity: 1;
          transform: translateY(0);
        }
        .project-info h3 {
          font-size: 1.5rem;
          margin-bottom: 8px;
        }
        .project-info p {
          color: #ccc;
          font-size: 0.95rem;
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
        </motion.div>
    );
};

export default ProjectCard;
