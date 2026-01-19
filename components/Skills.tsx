'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Skills.module.css';

interface Skill {
  name: string;
  icon: string;
  level: number;
}

const frontendSkills: Skill[] = [
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', level: 95 },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', level: 90 },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 90 },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', level: 85 },
  { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', level: 90 },
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', level: 80 },
  { name: 'Jest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg', level: 65 },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 90 },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', level: 90 },
  { name: 'Elixir', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original.svg', level: 55 },
];

const backendSkills: Skill[] = [
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', level: 80 },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', level: 75 },
  { name: 'NestJS', icon: 'https://nestjs.com/img/logo-small.svg', level: 80 },
  { name: 'JWT / OAuth', icon: 'https://jwt.io/img/pic_logo.svg', level: 80 },
  { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg', level: 75 },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', level: 80 },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', level: 75 },
];

const toolsSkills: Skill[] = [
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', level: 80 },
  { name: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', level: 70 },
  { name: 'Prisma ORM', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg', level: 70 },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', level: 65 },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', level: 75 },
];

const SkillCategory = ({ title, skills, delay }: { title: string; skills: Skill[]; delay: number }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay }} className={styles.skillCategory}>
      <h3 className={styles.categoryTitle}>{title}</h3>
      <div className={styles.skillsList}>
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay + index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className={styles.skillItem}
          >
            <div className={styles.skillHeader}>
              <div className={styles.skillIcon}>
                <Image src={skill.icon} alt={skill.name} fill />
              </div>
              <div className={styles.skillInfo}>
                <h4 className={styles.skillName}>{skill.name}</h4>
                <div className={styles.skillLevel}>
                  <div className={styles.progressBar}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: delay + index * 0.1, ease: 'easeOut' }}
                      className={styles.progress}
                    />
                  </div>
                  <span className={styles.levelText}>{skill.level}%</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.backgroundWrapper}>
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} className={styles.animatedBg} />
      </div>

      <div className={styles.container}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className={styles.header}>
          <h2 className={styles.title}>Minhas Habilidades</h2>
          <p className={styles.subtitle}>Tecnologias e ferramentas que utilizo no desenvolvimento e nas quais busco evoluir cada vez mais.</p>
        </motion.div>

        <div className={styles.skillsGrid}>
          <SkillCategory title="Frontend" skills={frontendSkills} delay={0.1} />
          <SkillCategory title="Backend" skills={backendSkills} delay={0.2} />
          <SkillCategory title="Ferramentas" skills={toolsSkills} delay={0.3} />
        </div>
      </div>
    </section>
  );
}
