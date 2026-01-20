'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Portfolio.module.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  mainImage: string;
  videoUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'TesteLionsSeminovos',
    description: 'Teste prático criando um site de venda de carros.',
    technologies: ['Next.js', 'React', 'TypeScript', 'React Icons'],
    githubUrl: 'https://github.com/alexandre020285/TesteLionsSeminovos',
    mainImage: '/Portifolio-2.0/img/projects/lions.png',
    videoUrl: '/Portifolio-2.0/img/videos/LiosnSeminovos.mp4',
  },
  {
    id: 2,
    title: 'Gerenciador De Contatos',
    description: 'Sistema completo de gerenciamento de contatos com login, cadastro e interface responsiva para desktop e mobile.',
    technologies: ['Angular', 'TypeScript', 'PostgreSQL', 'Nodejs'],
    githubUrl: 'https://github.com/alexandre020285/GerenciadorDeContatos',
    mainImage: '/Portifolio-2.0/img/projects/contatos.jpg',
    videoUrl: '/Portifolio-2.0/img/videos/contatos.mp4',
  },
  {
    id: 3,
    title: 'Loja Online ( e-commerce )',
    description: 'Uma aplicação Full Stack moderna de e-commerce desenvolvida com Next.js, TypeScript e Supabase.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Nodejs'],
    githubUrl: 'https://github.com/alexandre020285/Loja-Online',
    mainImage: '/Portifolio-2.0/img/projects/loja.png',
    videoUrl: '/Portifolio-2.0/img/videos/loja.mp4',
  },
  {
    id: 4,
    title: 'DevBurguer',
    description: 'Sistema de pedidos online para pequenas lojas com cardápio, carrinho de compras , Pedidos são enviados via API do WhatsApp ao estabelecimento.',
    technologies: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL'],
    githubUrl: 'https://github.com/alexandre020285/Hamburgueria-whasapp',
    mainImage: '/Portifolio-2.0/img/projects/devburguer.jpg',
    videoUrl: '/Portifolio-2.0/img/videos/devburguer.mp4',
  },
  {
    id: 5,
    title: 'MoviesLib',
    description: 'Sistema de design completo com componentes reutilizáveis e documentação.',
    technologies: ['React', 'Vite', 'TypeScript', 'Sass/CSS', 'Api-Rest', 'Nodejs'],
    githubUrl: 'https://github.com/alexandre020285/Api-MovieLib',
    mainImage: '/Portifolio-2.0/img/projects/movieslib.jpg',
    videoUrl: '/Portifolio-2.0/img/videos/movieslib.mp4',
  },
  {
    id: 6,
    title: 'Avaliando filmes',
    description: 'Sistema de design completo com componentes reutilizáveis e documentação.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Sass/CSS', 'Axios', 'Nodejs'],
    githubUrl: 'https://github.com/alexandre020285/Avaliando-Filmes',
    mainImage: '/Portifolio-2.0/img/projects/avaliando.JPG',
    videoUrl: '/Portifolio-2.0/img/videos/avaliando.mp4',
  },
];

export default function Portfolio() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');
  const [currentVideoTitle, setCurrentVideoTitle] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [clickedProjectId, setClickedProjectId] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const openVideoModal = (videoUrl: string, title: string) => {
    setCurrentVideoUrl(videoUrl);
    setCurrentVideoTitle(title);
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    videoRef.current?.pause();
    videoRef.current && (videoRef.current.currentTime = 0);
    setShowVideoModal(false);
    setCurrentVideoUrl('');
    setCurrentVideoTitle('');
  };

  useEffect(() => {
    if (showVideoModal && videoRef.current && currentVideoUrl) {
      videoRef.current.load();
      videoRef.current.play().catch(console.error);
    }
  }, [showVideoModal, currentVideoUrl]);

  const ProjectButtons = ({ project }: { project: Project }) => (
    <>
      {project.videoUrl && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => openVideoModal(project.videoUrl!, project.title)}
          className={styles.overlayButton}
        >
          🎥 Demo
        </motion.button>
      )}
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.overlayButton}
      >
        📚 Código
      </motion.a>
    </>
  );

  return (
    <section id="portfolio" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.title}>Meu Portfólio</h2>
          <p className={styles.subtitle}>
            Projetos mais recentes que desenvolvi ( todos os demais projetos estão disponíveis no meu GitHub )
          </p>
        </motion.div>

        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10 }}
              className={styles.projectCard}
            >
              <div 
                className={styles.projectImageWrapper}
                onClick={() => isMobile && setClickedProjectId(clickedProjectId === project.id ? null : project.id)}
                style={{ cursor: isMobile ? 'pointer' : 'default' }}
              >
                <Image src={project.mainImage} alt={project.title} fill className={styles.projectImage} />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isMobile ? { opacity: clickedProjectId === project.id ? 1 : 0 } : {}}
                  whileHover={isMobile ? {} : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className={styles.projectOverlay}
                />
                {isMobile ? (
                  <div className={styles.mobileButtons}>
                    <ProjectButtons project={project} />
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className={styles.projectOverlay}
                  >
                    <ProjectButtons project={project} />
                  </motion.div>
                )}
              </div>

              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.techTags}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {showVideoModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeVideoModal}
          className={styles.modal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className={styles.modalContent}
          >
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>{currentVideoTitle}</h3>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeVideoModal}
                className={styles.modalClose}
              >
                ×
              </motion.button>
            </div>
            <div className={styles.videoWrapper}>
              <video
                ref={videoRef}
                src={currentVideoUrl}
                controls
                autoPlay
                playsInline
                preload="auto"
                className={styles.video}
              >
                Seu navegador não suporta vídeos.
              </video>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
