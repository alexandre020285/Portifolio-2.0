import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
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
  showVideoModal: boolean = false;
  currentVideoUrl: string = '';
  currentVideoTitle: string = '';

  projects: Project[] = [
    {
      id: 1,
      title: 'Gerenciador De Contatos',
      description:
        'Sistema completo de gerenciamento de contatos com login, cadastro e interface responsiva para desktop e mobile.',
      technologies: ['Angular', 'TypeScript', 'PostgreSQL', 'Nodejs'],
      githubUrl: 'https://github.com/alexandre020285/GerenciadorDeContatos',
      mainImage: 'img/projects/contatos.jpg',
      videoUrl: 'img/videos/contatos.mp4',
    },
    {
      id: 2,
      title: 'Loja Online ( e-commerce )',
      description:
        'Uma aplicação Full Stack moderna de e-commerce desenvolvida com Next.js, TypeScript e Supabase.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Nodejs'],
      githubUrl: 'https://github.com/alexandre020285/Loja-Online',
      mainImage: 'img/projects/loja.png',
      videoUrl: 'img/videos/loja.mp4',
    },
    {
      id: 3,
      title: 'DevBurguer',
      description:
        'Sistema de pedidos online para pequenas lojas com cardápio, carrinho de compras , Pedidos são enviados via API do WhatsApp ao estabelecimento.',
      technologies: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL'],
      githubUrl: 'https://github.com/alexandre020285/Hamburgueria-whasapp',
      mainImage: 'img/projects/dashboard.jpg',
      videoUrl: 'img/videos/devburguer.mp4',
    },
    {
      id: 4,
      title: 'MoviesLib',
      description: 'Sistema de design completo com componentes reutilizáveis e documentação.',
      technologies: ['React', 'Vite', 'TypeScript', 'Sass/CSS', 'Api-Rest', 'Nodejs'],
      githubUrl: 'https://github.com/alexandre020285/Api-MovieLib',
      mainImage: 'img/projects/movieslib.jpg',
      videoUrl: 'img/videos/movieslib.mp4',
    },
    {
      id: 5,
      title: 'Avaliando filmes',
      description: 'Sistema de design completo com componentes reutilizáveis e documentação.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Sass/CSS', 'Axios', 'Nodejs'],
      githubUrl: 'https://github.com/alexandre020285/Avaliando-Filmes',
      mainImage: 'img/projects/avaliando.JPG',
      videoUrl: 'img/videos/avaliando.mp4',
    },
  ];

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
