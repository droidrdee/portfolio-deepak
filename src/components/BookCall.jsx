import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';

const BookCall = () => {
    return (
        <motion.div
            className="bento-item col-span-2 book-call-cell"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
        >
            <div className="book-content">
                <div className="icon-wrapper">
                    <FaCalendarAlt />
                </div>
                <div className="text-content">
                    <h3>Book a Discovery Call</h3>
                    <p>Let's discuss your project idea in a free 15-min session.</p>
                </div>
                <a href="#" className="book-btn">Schedule Now</a>
            </div>

            <style>{`
        .book-call-cell {
          background: linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(244, 63, 94, 0.1) 100%);
          border-color: rgba(251, 191, 36, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .book-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          gap: 20px;
        }
        .icon-wrapper {
          width: 60px;
          height: 60px;
          background: rgba(255,255,255,0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: #fbbf24;
        }
        .text-content {
          flex: 1;
        }
        .text-content h3 {
          font-size: 1.3rem;
          margin-bottom: 5px;
        }
        .text-content p {
          color: var(--text-muted);
          font-size: 0.95rem;
        }
        .book-btn {
          background: white;
          color: black;
          padding: 12px 24px;
          border-radius: 12px;
          font-weight: 600;
          text-decoration: none;
          white-space: nowrap;
          transition: transform 0.2s;
        }
        .book-btn:hover {
          transform: scale(1.05);
        }
        @media (max-width: 640px) {
          .book-content {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
        </motion.div>
    );
};

export default BookCall;
