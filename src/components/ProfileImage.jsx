import React from 'react';
import { motion } from 'framer-motion';

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
        alt="Deepak Rathore"
        className="profile-img"
      />
      <div className="overlay-info">
        <span className="location">📍 Indore, India</span>
      </div>

      <style>{`
        .image-cell {
          padding: 0;
          border: none;
        }
        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }
        .image-cell:hover .profile-img {
          transform: scale(1.05);
        }
        .overlay-info {
          position: absolute;
          bottom: 20px;
          left: 20px;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(5px);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
          border: 1px solid rgba(255,255,255,0.1);
        }
      `}</style>
    </motion.div>
  );
};

export default ProfileImage;
