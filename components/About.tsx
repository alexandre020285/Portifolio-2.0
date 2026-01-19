'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 70, behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className={styles.grid}>
          <motion.div variants={itemVariants} className={styles.textContent}>
            <motion.h2 variants={itemVariants} className={styles.title}>
              Sobre Mim
            </motion.h2>

            <motion.p variants={itemVariants} className={styles.paragraph}>
              Tenho experiência em trabalho em equipe, atuação sob pressão e foco em metas e resultados, adquiridos em minhas funções anteriores.
            </motion.p>

            <motion.p variants={itemVariants} className={styles.paragraph}>
              Busco colaborar com designers e desenvolvedores na criação de produtos de alta qualidade. Estou em constante aprendizado de novas tecnologias, acompanhando a evolução do setor e aprimorando minhas habilidades.
            </motion.p>

            <motion.p variants={itemVariants} className={styles.paragraph}>
              Procuro novas oportunidades para aplicar meu conhecimento e contribuir para o sucesso de projetos.
            </motion.p>

            <motion.div variants={itemVariants} className={styles.detailsGrid}>
              <motion.div whileHover={{ scale: 1.05 }} className={styles.detailCard}>
                <h3 className={styles.detailCardTitle}>Experiência</h3>
                <p className={styles.detailCardText}>+2 anos desenvolvendo aplicações web</p>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} className={styles.detailCard}>
                <h3 className={styles.detailCardTitle}>Formação</h3>
                <p className={styles.detailCardText}>Análise e Desenvolvimento de Sistemas - Anhanguera</p>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className={styles.actions}>
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="/alexandre de oliveira alves.pdf" download className={`${styles.button} ${styles.buttonPrimary}`}>
                📄 Download CV
              </motion.a>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => scrollToSection('portfolio')} className={`${styles.button} ${styles.buttonSecondary}`}>
                Ver Projetos
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className={styles.imageWrapper}>
            <div className={styles.rotatingBorder} />
            <div className={styles.rotatingBorder2} />
            <div className={styles.profileImage}>
              <Image src="/AOA-logo.jpeg" alt="AOA Logo" fill />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
