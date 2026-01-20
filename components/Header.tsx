'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element && window.scrollTo({ top: element.offsetTop - 70, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'portfolio', label: 'Portfólio' },
    { id: 'contact', label: 'Contato' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logoWrapper} onClick={() => scrollToSection('home')}>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={styles.logoImage}
            >
              <Image src="/AOA-logo.jpeg" alt="AOA Logo" fill />
            </motion.div>
            <h2 className={styles.logoText}>Portfólio</h2>
          </div>

          <nav className={styles.nav}>
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(link.id)}
                className={styles.navButton}
              >
                {link.label}
                <span className={styles.navUnderline}></span>
              </motion.button>
            ))}
          </nav>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={styles.mobileMenuButton}
          >
            <motion.span
              animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 8 : 0 }}
              className={styles.menuLine}
            />
            <motion.span
              animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
              className={styles.menuLine}
            />
            <motion.span
              animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -8 : 0 }}
              className={styles.menuLine}
            />
          </motion.button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className={styles.mobileNav}
        >
          <div className={styles.mobileNavContent}>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={styles.mobileNavButton}
              >
                {link.label}
              </button>
            ))}
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}
