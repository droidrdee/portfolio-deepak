import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
    const reviews = [
        {
            text: "Deepak transformed our manual workflow into a fully automated AI system. Saved us 20+ hours a week!",
            author: "Sarah J., CEO at TechFlow",
            role: "Automation Client"
        },
        {
            text: "Incredible attention to detail on our mobile app. The UI is buttery smooth and the backend is rock solid.",
            author: "Mark R., Founder",
            role: "App Dev Client"
        }
    ];

    return (
        <motion.div
            className="bento-item col-span-2 testimonials-cell"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
        >
            <h3>Client Love</h3>
            <div className="reviews-container">
                {reviews.map((review, i) => (
                    <div key={i} className="review-card">
                        <FaQuoteLeft className="quote-icon" />
                        <p className="review-text">"{review.text}"</p>
                        <div className="review-author">
                            <span className="author-name">{review.author}</span>
                            <span className="author-role">{review.role}</span>
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
        .testimonials-cell h3 {
          margin-bottom: 20px;
          font-size: 1.2rem;
        }
        .reviews-container {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .review-card {
          background: rgba(255,255,255,0.03);
          padding: 15px;
          border-radius: 16px;
          position: relative;
        }
        .quote-icon {
          color: var(--accent);
          opacity: 0.5;
          font-size: 1.2rem;
          margin-bottom: 10px;
        }
        .review-text {
          font-size: 0.95rem;
          line-height: 1.5;
          color: #e5e5e5;
          margin-bottom: 15px;
          font-style: italic;
        }
        .review-author {
          display: flex;
          flex-direction: column;
        }
        .author-name {
          font-weight: 600;
          font-size: 0.9rem;
          color: white;
        }
        .author-role {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
      `}</style>
        </motion.div>
    );
};

export default Testimonials;
