import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaDocker, FaReact, FaNodeJs, FaGitAlt, FaAws, FaFigma } from 'react-icons/fa';
import { SiDjango, SiPytorch, SiFastapi, SiOpencv, SiTensorflow, SiPostgresql, SiFirebase, SiMongodb, SiKubernetes, SiGraphql, SiRedis, SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { icon: <FaPython />, name: 'Python' },
    { icon: <SiDjango />, name: 'Django' },
    { icon: <SiFastapi />, name: 'FastAPI' },
    { icon: <FaReact />, name: 'React Native' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <SiPytorch />, name: 'PyTorch' },
    { icon: <SiTensorflow />, name: 'TensorFlow' },
    { icon: <SiOpencv />, name: 'OpenCV' },
    { icon: <FaAws />, name: 'AWS' },
    { icon: <FaDocker />, name: 'Docker' },
    { icon: <SiKubernetes />, name: 'Kubernetes' },
    { icon: <SiPostgresql />, name: 'PostgreSQL' },
    { icon: <SiMongodb />, name: 'MongoDB' },
    { icon: <SiRedis />, name: 'Redis' },
    { icon: <SiFirebase />, name: 'Firebase' },
    { icon: <SiGraphql />, name: 'GraphQL' },
    { icon: <SiTailwindcss />, name: 'Tailwind' },
    { icon: <FaFigma />, name: 'Figma' },
    { icon: <FaGitAlt />, name: 'Git' },
  ];

  return (
    <motion.div
      className="bento-item col-span-2 skills-cell"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h3>Tech Stack & Tools</h3>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div key={i} className="skill-item" title={skill.name}>
            {skill.icon}
          </div>
        ))}
      </div>

      <style>{`
        .skills-cell h3 {
          margin-bottom: 20px;
          font-size: 1.2rem;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
          gap: 15px;
        }
        .skill-item {
          aspect-ratio: 1;
          background: rgba(255,255,255,0.05);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          color: var(--text-muted);
          transition: all 0.3s;
          border: 1px solid transparent;
        }
        .skill-item:hover {
          background: rgba(255,255,255,0.1);
          color: white;
          border-color: var(--accent);
          transform: translateY(-5px);
        }
      `}</style>
    </motion.div>
  );
};

export default Skills;
