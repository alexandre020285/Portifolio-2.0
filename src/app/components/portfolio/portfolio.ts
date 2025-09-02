import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class PortfolioComponent {
  activeFilter: string = 'all';

  projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description:
        'Plataforma completa de e-commerce com carrinho de compras, pagamentos e painel administrativo.',
      category: 'web',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'App de Delivery',
      description:
        'Aplicativo mobile para delivery de comida com geolocalização e pagamento in-app.',
      category: 'mobile',
      technologies: ['React Native', 'Firebase', 'Google Maps'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Dashboard Analytics',
      description:
        'Dashboard interativo para análise de dados com gráficos e relatórios em tempo real.',
      category: 'web',
      technologies: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'UI/UX Design System',
      description: 'Sistema de design completo com componentes reutilizáveis e documentação.',
      category: 'design',
      technologies: ['Figma', 'Storybook', 'CSS'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  get filteredProjects(): Project[] {
    if (this.activeFilter === 'all') {
      return this.projects;
    }
    return this.projects.filter((project) => project.category === this.activeFilter);
  }

  filterProjects(category: string) {
    this.activeFilter = category;
  }
}
