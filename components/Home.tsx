'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Home.module.css';

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element && window.scrollTo({ top: element.offsetTop - 70, behavior: 'smooth' });
  };

  return (
    <section id="home" className={styles.section}>
      <div className={styles.backgroundWrapper}>
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 20, repeat: Infinity }}
          className={`${styles.animatedBg} ${styles.animatedBg1}`}
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 15, repeat: Infinity }}
          className={`${styles.animatedBg} ${styles.animatedBg2}`}
        />
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.textContent}
          >
            <h1 className={styles.title}>
              Olá, eu sou{' '}
              <span className={styles.highlight}>Alexandre Alves</span>
            </h1>

            <p className={styles.paragraph}>
              Sou um Desenvolvedor Full Stack Junior, meu objetivo é trabalhar em parceria com você, entendendo profundamente suas necessidades e desenvolvendo soluções.
            </p>

            <p className={styles.paragraph}>
              Estou pronto para colaborar em todas as etapas, oferecendo o suporte necessário para garantir a realização de projetos desafiadores.
            </p>

            <p className={styles.paragraph}>
              Se você está buscando um profissional comprometido com inovação e resultados concretos, estou à disposição para contribuir para o crescimento e sucesso da sua empresa.
            </p>

            <div className={styles.buttonWrapper}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('portfolio')}
                className={styles.button}
              >
                Ver Projetos
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={styles.imageWrapper}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className={styles.rotatingBorder}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className={styles.rotatingBorder2}
            />
            <div className={styles.profileImage}>
              <Image src="/Portifolio-2.0/Alexandre.jpg" alt="Alexandre Alves" fill priority />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
