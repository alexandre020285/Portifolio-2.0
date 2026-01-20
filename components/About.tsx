'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
  // Função para rolar até uma seção
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 70, behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Texto sobre mim */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.textContent}
          >
            <h2 className={styles.title}>Sobre Mim</h2>

            <p className={styles.paragraph}>
              Tenho experiência em trabalho em equipe, atuação sob pressão e foco em metas e resultados, adquiridos em minhas funções anteriores.
            </p>

            <p className={styles.paragraph}>
              Busco colaborar com designers e desenvolvedores na criação de produtos de alta qualidade. Estou em constante aprendizado de novas tecnologias, acompanhando a evolução do setor e aprimorando minhas habilidades.
            </p>

            <p className={styles.paragraph}>
              Procuro novas oportunidades para aplicar meu conhecimento e contribuir para o sucesso de projetos.
            </p>

            {/* Cards de informações */}
            <div className={styles.detailsGrid}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={styles.detailCard}
              >
                <h3 className={styles.detailCardTitle}>Experiência</h3>
                <p className={styles.detailCardText}>+2 anos desenvolvendo aplicações web</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className={styles.detailCard}
              >
                <h3 className={styles.detailCardTitle}>Formação</h3>
                <p className={styles.detailCardText}>Análise e Desenvolvimento de Sistemas - Anhanguera</p>
              </motion.div>
            </div>

            {/* Botões de ação */}
            <div className={styles.actions}>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Portifolio-2.0/alexandre de oliveira alves.pdf"
                download
                className={`${styles.button} ${styles.buttonPrimary}`}
              >
                📄 Download CV
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('portfolio')}
                className={`${styles.button} ${styles.buttonSecondary}`}
              >
                Ver Projetos
              </motion.button>
            </div>
          </motion.div>

          {/* Imagem do logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.imageWrapper}
          >
            <div className={styles.rotatingBorder} />
            <div className={styles.rotatingBorder2} />
            <div className={styles.profileImage}>
              <Image src="/Portifolio-2.0/AOA-logo.jpeg" alt="AOA Logo" fill />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
