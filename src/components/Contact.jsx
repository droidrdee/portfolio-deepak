import React from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <motion.div
      id="contact"
      className="bento-item col-span-4 contact-cell"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55 }}
    >
      <div className="contact-glow" />

      <div className="contact-inner">
        <div className="contact-left">
          <div className="section-label">let's talk · response within 24h</div>
          <h2 className="contact-title">
            Have an idea worth <span className="text-gradient">shipping?</span>
          </h2>
          <p className="contact-sub">
            Whether it's a RAG pipeline, multi-agent system, or an existing platform that needs to
            stop falling over at 4 concurrent users — drop a note. I respond personally,
            usually within a day.
          </p>

          <div className="channels">
            <a href="mailto:deepakrathore1033@gmail.com" className="channel">
              <div className="ch-ico violet"><FaEnvelope /></div>
              <div className="ch-info">
                <span className="ch-label">Email</span>
                <span className="ch-value">deepakrathore1033@gmail.com</span>
              </div>
            </a>
            <a href="tel:+919977032423" className="channel">
              <div className="ch-ico cyan"><FaPhone /></div>
              <div className="ch-info">
                <span className="ch-label">Phone</span>
                <span className="ch-value">+91 99770 32423</span>
              </div>
            </a>
            <div className="channel non-link">
              <div className="ch-ico pink"><FaMapMarkerAlt /></div>
              <div className="ch-info">
                <span className="ch-label">Based in</span>
                <span className="ch-value">Indore, India · Remote-friendly</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const subject = encodeURIComponent(`Project enquiry — ${data.get('name') || 'no-name'}`);
              const body = encodeURIComponent(
                `Hi Deepak,\n\n${data.get('message') || ''}\n\n— ${data.get('name') || ''}\n${data.get('email') || ''}`
              );
              window.location.href = `mailto:deepakrathore1033@gmail.com?subject=${subject}&body=${body}`;
            }}
          >
            <div className="form-row">
              <input name="name" type="text" placeholder="Your name" required />
              <input name="email" type="email" placeholder="Your email" required />
            </div>
            <textarea
              name="message"
              placeholder="What are you trying to build? (a one-liner is enough — we'll iterate)"
              rows={4}
              required
            />
            <button type="submit" className="send-btn">
              Send message <FaPaperPlane />
            </button>
            <p className="form-fineprint">
              Or just hit <a href="mailto:deepakrathore1033@gmail.com">deepakrathore1033@gmail.com</a> — same inbox.
            </p>
          </form>
        </div>
      </div>

      <style>{`
        .contact-cell {
          padding: 36px;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 60%, rgba(236, 72, 153, 0.08) 100%);
          border-color: rgba(139, 92, 246, 0.18);
          position: relative;
          overflow: hidden;
        }
        .contact-glow {
          position: absolute;
          top: -100px;
          right: -100px;
          width: 360px;
          height: 360px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.35) 0%, transparent 70%);
          filter: blur(80px);
          pointer-events: none;
        }
        .contact-inner {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 40px;
          position: relative;
          z-index: 1;
        }
        .contact-title {
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          line-height: 1.1;
          margin-bottom: 14px;
          letter-spacing: -0.02em;
        }
        .contact-sub {
          color: var(--text-muted);
          font-size: 0.96rem;
          line-height: 1.65;
          margin-bottom: 28px;
          max-width: 480px;
        }
        .channels {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .channel {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 14px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 14px;
          text-decoration: none;
          color: var(--text-main);
          transition: 0.28s;
        }
        a.channel:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 255, 255, 0.14);
          transform: translateX(3px);
        }
        .channel.non-link { cursor: default; }
        .ch-ico {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.95rem;
          flex-shrink: 0;
        }
        .ch-ico.violet { background: rgba(139, 92, 246, 0.16); color: #c4b5fd; }
        .ch-ico.cyan { background: rgba(6, 182, 212, 0.16); color: #67e8f9; }
        .ch-ico.pink { background: rgba(236, 72, 153, 0.16); color: #f9a8d4; }
        .ch-info {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }
        .ch-label {
          font-family: var(--font-mono);
          font-size: 0.66rem;
          color: var(--text-muted);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .ch-value {
          color: white;
          font-size: 0.9rem;
          font-weight: 500;
        }
        .contact-form {
          background: rgba(0, 0, 0, 0.28);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 24px;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .contact-form input,
        .contact-form textarea {
          width: 100%;
          background: rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 13px 16px;
          border-radius: 12px;
          color: white;
          font-family: var(--font-body);
          font-size: 0.92rem;
          outline: none;
          transition: 0.25s;
          resize: vertical;
        }
        .contact-form input::placeholder,
        .contact-form textarea::placeholder {
          color: var(--text-dim);
        }
        .contact-form input:focus,
        .contact-form textarea:focus {
          border-color: var(--accent);
          background: rgba(139, 92, 246, 0.06);
        }
        .send-btn {
          margin-top: 4px;
          padding: 13px 22px;
          background: white;
          color: black;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.92rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-family: var(--font-body);
          transition: 0.25s;
        }
        .send-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(255, 255, 255, 0.18);
        }
        .form-fineprint {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-align: center;
          margin-top: 4px;
          font-family: var(--font-mono);
        }
        .form-fineprint a {
          color: #c4b5fd;
          text-decoration: none;
          border-bottom: 1px dashed rgba(196, 181, 253, 0.4);
        }
        @media (max-width: 900px) {
          .contact-inner { grid-template-columns: 1fr; gap: 30px; }
          .contact-cell { padding: 26px; }
        }
        @media (max-width: 500px) {
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </motion.div>
  );
};

export default Contact;
