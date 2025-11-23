import React from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <motion.div
      id="contact"
      className="bento-item col-span-2 contact-cell"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <div className="contact-content">
        <div>
          <h3>Let's work together</h3>
          <p>Interested in AI Agents or Generative AI? Reach out.</p>
        </div>
        <form className="mini-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">
            <FaPaperPlane />
          </button>
        </form>
        <div className="mail-link">
          <a href="mailto:droidrdee@gmail.com">droidrdee@gmail.com</a>
        </div>
      </div>

      <style>{`
        .contact-cell {
          background: linear-gradient(135deg, rgba(244, 63, 94, 0.1) 0%, rgba(251, 191, 36, 0.1) 100%);
          border-color: rgba(244, 63, 94, 0.2);
        }
        .contact-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }
        .contact-content h3 {
          font-size: 1.5rem;
          margin-bottom: 5px;
        }
        .contact-content p {
          color: var(--text-muted);
          margin-bottom: 20px;
        }
        .mini-form {
          position: relative;
          margin-bottom: 20px;
        }
        .mini-form input {
          width: 100%;
          background: rgba(0,0,0,0.3);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 15px 50px 15px 20px;
          border-radius: 12px;
          color: white;
          font-family: var(--font-body);
          outline: none;
          transition: border-color 0.3s;
        }
        .mini-form input:focus {
          border-color: var(--accent);
        }
        .mini-form button {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          background: var(--accent);
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s;
        }
        .mini-form button:hover {
          background: #fbbf24;
        }
        .mail-link a {
          color: white;
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 600;
          border-bottom: 1px dashed rgba(255,255,255,0.3);
        }
      `}</style>
    </motion.div>
  );
};

export default Contact;
