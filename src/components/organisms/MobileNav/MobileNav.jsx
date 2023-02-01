import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import './styles.css';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="mobile-nav">
      <div className="mobile-nav__hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className="mobile-nav__line"></div>
        <div className="mobile-nav__line"></div>
        <div className="mobile-nav__line"></div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            ref={ref}
            initial={{ opacity: 0, x: '200px' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '200px' }}
            className="mobile-nav__menu"
          >
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="/">Home</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="/about">About</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="#project-list">Projects</a>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
