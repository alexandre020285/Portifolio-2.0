import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent implements OnInit {
  ngOnInit() {
    // Verificar se todos os elementos de navegação estão presentes
    this.checkNavigationElements();
  }

  checkNavigationElements() {
    const sections = ['home', 'about', 'skills', 'portfolio'];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        console.log(`✅ Seção ${sectionId} encontrada:`, element);
      } else {
        console.warn(`⚠️ Seção ${sectionId} NÃO encontrada`);
      }
    });
  }

  toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    const mobileBtn = document.querySelector('.mobile-menu-btn');

    nav?.classList.toggle('active');
    mobileBtn?.classList.toggle('active');
  }

  scrollToSection(sectionId: string) {
    console.log('🚀 Navegando para:', sectionId);

    // Primeiro, tenta encontrar o elemento pelo ID
    let element = document.getElementById(sectionId);

    // Se não encontrar, tenta buscar por seletor CSS
    if (!element) {
      element = document.querySelector(`[id="${sectionId}"]`);
    }

    // Se ainda não encontrar, tenta buscar por nome da seção
    if (!element) {
      element = document.querySelector(`section[id*="${sectionId}"]`);
    }

    if (element) {
      console.log('✅ Elemento encontrado:', element);

      // Calcula a posição considerando o header fixo
      const headerHeight = 70; // altura do header fixo
      const elementPosition = element.offsetTop - headerHeight;

      // Scroll suave para a posição
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });

      // Fecha o menu mobile se estiver aberto
      const nav = document.querySelector('.nav');
      const mobileBtn = document.querySelector('.mobile-menu-btn');
      if (nav?.classList.contains('active')) {
        nav.classList.remove('active');
        mobileBtn?.classList.remove('active');
      }
    } else {
      console.error('❌ Elemento não encontrado:', sectionId);

      // Fallback: scroll para o topo
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }
}
