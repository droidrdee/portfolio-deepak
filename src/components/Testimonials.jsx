import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
    const reviews = [
        {
            text:
                "Deepak rewrote our flagship platform's data layer to be fully async — what used to crawl under 4 concurrent users now handles 30+ without breaking a sweat. Memory leaks gone, response times down by more than half.",
            author: 'Engineering Lead',
            role: 'Cost Estimation Platform · Softude',
            accent: 'violet',
        },
        {
            text:
                "The LLM automation he architected for DCGPAC replaced three separate enterprise workflows with a single chatbot interface. Procurement and approvals that used to take hours now resolve in under five minutes.",
            author: 'Product Stakeholder',
            role: 'DCGPAC · LLM Automation',
            accent: 'cyan',
        },
        {
            text:
                "The Maritime OCR pipeline he shipped surfaces profit-impacting insights from regulatory PDFs automatically — work that previously needed hours of analyst review per document.",
            author: 'Operations Lead',
            role: 'Maritime Intelligence System',
            accent: 'pink',
        },
    ];

    return (
        <motion.div
            className="bento-item col-span-4 testimonials-cell"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.1 }}
        >
            <div className="testi-header">
                <div>
                    <div className="section-label">what stakeholders say</div>
                    <h3 className="bento-heading">Impact, in their words</h3>
                </div>
                <span className="testi-chip">Anonymized — bound by NDA</span>
            </div>

            <div className="reviews-container">
                {reviews.map((review, i) => (
                    <div key={i} className={`review-card accent-${review.accent}`}>
                        <FaQuoteLeft className="quote-icon" />
                        <p className="review-text">{review.text}</p>
                        <div className="review-author">
                            <span className="author-name">{review.author}</span>
                            <span className="author-role">{review.role}</span>
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
                .testimonials-cell { padding: 28px 32px; }
                .testi-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 22px;
                    gap: 16px;
                    flex-wrap: wrap;
                }
                .testi-chip {
                    font-family: var(--font-mono);
                    font-size: 0.7rem;
                    color: var(--text-muted);
                    background: rgba(255, 255, 255, 0.04);
                    border: 1px solid rgba(255, 255, 255, 0.07);
                    padding: 5px 11px;
                    border-radius: 999px;
                    letter-spacing: 0.04em;
                }
                .reviews-container {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 14px;
                }
                .review-card {
                    background: rgba(255, 255, 255, 0.025);
                    padding: 22px;
                    border-radius: 18px;
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    position: relative;
                    transition: 0.3s;
                    display: flex;
                    flex-direction: column;
                }
                .review-card:hover {
                    background: rgba(255, 255, 255, 0.04);
                    transform: translateY(-3px);
                }
                .review-card.accent-violet:hover { border-color: rgba(139, 92, 246, 0.3); }
                .review-card.accent-cyan:hover { border-color: rgba(6, 182, 212, 0.3); }
                .review-card.accent-pink:hover { border-color: rgba(236, 72, 153, 0.3); }
                .quote-icon {
                    font-size: 1.15rem;
                    margin-bottom: 14px;
                }
                .review-card.accent-violet .quote-icon { color: #c4b5fd; }
                .review-card.accent-cyan .quote-icon { color: #67e8f9; }
                .review-card.accent-pink .quote-icon { color: #f9a8d4; }
                .review-text {
                    font-size: 0.92rem;
                    line-height: 1.65;
                    color: #e5e5e5;
                    margin-bottom: 18px;
                    flex: 1;
                }
                .review-author {
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                    padding-top: 14px;
                    border-top: 1px solid rgba(255, 255, 255, 0.06);
                }
                .author-name {
                    font-weight: 600;
                    font-size: 0.85rem;
                    color: white;
                }
                .author-role {
                    font-size: 0.72rem;
                    color: var(--text-muted);
                    font-family: var(--font-mono);
                    letter-spacing: 0.02em;
                }
            `}</style>
        </motion.div>
    );
};

export default Testimonials;
