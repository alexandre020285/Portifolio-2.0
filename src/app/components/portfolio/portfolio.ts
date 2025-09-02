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
  mainImage: string;
  videoUrl?: string; // URL do vídeo de demonstração (opcional)
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
  showVideoModal: boolean = false;
  currentVideoUrl: string = '';
  currentVideoTitle: string = '';

  projects: Project[] = [
    {
      id: 1,
      title: 'Gerenciador De Contatos',
      description:
        'Sistema completo de gerenciamento de contatos com login, cadastro e interface responsiva para desktop e mobile.',
      category: 'web',
      technologies: ['Next.js', 'TypeScript', 'React', 'PostgreSQL', 'NestJS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/alexandre020285/GerenciadorDeContatos',
      mainImage: 'img/projects/contatos.jpg',
      videoUrl: 'img/videos/contatos.mp4', // Vídeo de demonstração
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
      mainImage: 'img/projects/delivery.jpg',
      videoUrl: 'videos/delivery-demo.mp4', // Vídeo de demonstração
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
      mainImage: 'img/projects/dashboard.jpg',
    },
    {
      id: 4,
      title: 'UI/UX Design System',
      description: 'Sistema de design completo com componentes reutilizáveis e documentação.',
      category: 'design',
      technologies: ['Figma', 'Storybook', 'CSS'],
      liveUrl: '#',
      githubUrl: '#',
      mainImage: 'img/projects/design-system.jpg',
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

  openVideoModal(videoUrl: string, title: string) {
    this.currentVideoUrl = videoUrl;
    this.currentVideoTitle = title;
    this.showVideoModal = true;
  }

  closeVideoModal() {
    this.showVideoModal = false;
    this.currentVideoUrl = '';
    this.currentVideoTitle = '';
  }
}
