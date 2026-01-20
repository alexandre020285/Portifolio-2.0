'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element && window.scrollTo({ top: element.offsetTop - 70, behavior: 'smooth' });
  };

  const quickLinks = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'portfolio', label: 'Portfólio' },
    { id: 'contact', label: 'Contato' },
  ];

  const services = [
    'Desenvolvimento Web',
    'Aplicativos Mobile',
    'UI/UX Design',
    'Consultoria',
    'Manutenção',
  ];

  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.backgroundWrapper}>
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Infinity }}
          className={styles.animatedBg}
        />
      </div>

      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.footerSection}
          >
            <h3 className={styles.footerTitleMain}>Portfólio</h3>
            <p className={styles.footerText}>
              Desenvolvedor Full Stack Junior em busca de desafios e oportunidades, se esta procurando um DEV que vai se dedicar a seu projeto, estou a disposição.
            </p>
            <div className={styles.socialLinks}>
              <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/alexandre-oliveira-alves/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                  alt="LinkedIn"
                  fill
                />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/alexandre020285"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="GitHub"
                  fill
                />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className={styles.footerTitle}>Links Rápidos</h4>
            <ul className={styles.linksList}>
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => scrollToSection(link.id)}
                    className={styles.footerLink}
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className={styles.footerTitle}>Serviços</h4>
            <ul className={styles.linksList}>
              {services.map((service, index) => (
                <li key={index} className={styles.footerServiceItem}>
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className={styles.footerTitle}>Contato</h4>
            <div className={styles.contactInfo}>
              <p className={styles.contactItem}>📧 alexandre0202dev@gmail.com</p>
              <p className={styles.contactItem}>📱 +55 (21) 99052-0213</p>
              <p className={styles.contactItem}>📍 Rio de Janeiro, RJ - Brasil</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={styles.copyright}
        >
          <p>© {new Date().getFullYear()} Alexandre Alves. Todos os direitos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
}
