import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';

const ProfileImage = () => {
  return (
    <motion.div
      className="bento-item col-span-1 row-span-2 image-cell"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
    >
      <img
        src="/profile.png"
        alt="Deepak Rathore — AI Engineer"
        className="profile-img"
      />
      <div className="img-gradient" />

      <div className="img-top">
        <div className="role-stack">
          <span className="role-tag">AI Engineer</span>
        </div>
      </div>

      <div className="img-bottom">
        <div className="name-block">
          <h3 className="name">Deepak Rathore</h3>
          <div className="loc"><FaMapMarkerAlt /> Indore, India</div>
        </div>
        <div className="status-stack">
          <span className="live-dot" />
          <span className="status-text">Open to work</span>
        </div>
      </div>

      <style>{`
        .image-cell {
          padding: 0;
          border: none;
          min-height: 480px;
        }
        .profile-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
          z-index: 0;
        }
        .image-cell:hover .profile-img {
          transform: scale(1.04);
        }
        .img-gradient {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.1) 45%, transparent 60%),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, transparent 35%);
          z-index: 1;
        }
        .img-top {
          position: relative;
          z-index: 2;
          padding: 18px;
        }
        .role-tag {
          display: inline-flex;
          padding: 5px 11px;
          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 999px;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: white;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .img-bottom {
          margin-top: auto;
          padding: 18px;
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 10px;
        }
        .name {
          font-size: 1.1rem;
          margin-bottom: 4px;
          color: white;
          letter-spacing: -0.01em;
        }
        .loc {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: #d1d5db;
          font-size: 0.78rem;
          font-family: var(--font-mono);
        }
        .loc svg { font-size: 0.7rem; color: #f9a8d4; }
        .status-stack {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(8px);
          padding: 5px 10px;
          border-radius: 999px;
          border: 1px solid rgba(163, 230, 53, 0.3);
        }
        .status-text {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: #bef264;
        }
      `}</style>
    </motion.div>
  );
};

export default ProfileImage;
