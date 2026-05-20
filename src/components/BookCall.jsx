import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

const BookCall = () => {
    return (
        <motion.div
            className="bento-item col-span-2 book-call-cell"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.2 }}
        >
            <div className="book-glow" />
            <div className="book-content">
                <div className="text-content">
                    <div className="section-label">free 20-min discovery call</div>
                    <h3>Got an AI/ML problem worth solving?</h3>
                    <p>
                        Bring the bottleneck — I'll bring the architecture. No slides, no fluff.
                        We map the path from idea → production in one focused call.
                    </p>
                </div>
                <a href="mailto:deepakrathore62@outlook.com?subject=Discovery%20Call%20Request" className="book-btn">
                    Schedule a call <FaArrowRight />
                </a>
            </div>

            <div className="book-meta">
                <span><FaCalendarAlt /> Mon — Fri</span>
                <span className="dot">•</span>
                <span>10:00 — 18:00 IST</span>
                <span className="dot">•</span>
                <span>Remote</span>
            </div>

            <style>{`
        .book-call-cell {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.12) 0%, rgba(6, 182, 212, 0.12) 100%);
          border-color: rgba(139, 92, 246, 0.18);
          justify-content: space-between;
          position: relative;
          overflow: hidden;
        }
        .book-glow {
          position: absolute;
          top: -60px;
          right: -60px;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%);
          filter: blur(60px);
          pointer-events: none;
        }
        .book-content {
          position: relative;
          z-index: 1;
        }
        .text-content h3 {
          font-size: 1.4rem;
          margin-bottom: 10px;
          letter-spacing: -0.015em;
        }
        .text-content p {
          color: var(--text-muted);
          font-size: 0.92rem;
          line-height: 1.55;
          margin-bottom: 22px;
        }
        .book-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: white;
          color: black;
          padding: 12px 22px;
          border-radius: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: 0.25s;
          font-size: 0.92rem;
        }
        .book-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(255, 255, 255, 0.18);
        }
        .book-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 18px;
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-muted);
          letter-spacing: 0.02em;
          flex-wrap: wrap;
          position: relative;
          z-index: 1;
        }
        .book-meta .dot { color: var(--text-dim); }
        .book-meta svg {
          margin-right: 6px;
          color: var(--accent);
        }
      `}</style>
        </motion.div>
    );
};

export default BookCall;
