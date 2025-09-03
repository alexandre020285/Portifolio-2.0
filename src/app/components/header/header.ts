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
    this.checkNavigationElements();
  }

  checkNavigationElements() {
    const sections = ['home', 'about', 'skills', 'portfolio', 'footer'];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (!element) {
        console.warn(`Seção ${sectionId} não encontrada`);
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
    let element = document.getElementById(sectionId);
    if (!element) {
      element = document.querySelector(`[id="${sectionId}"]`);
    }
    if (!element) {
      element = document.querySelector(`section[id*="${sectionId}"]`);
    }

    if (element) {
      const headerHeight = 70;
      let elementPosition;

      if (sectionId === 'footer') {
        elementPosition = element.offsetTop - headerHeight - 20;
      } else {
        elementPosition = element.offsetTop - headerHeight;
      }

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });

      const nav = document.querySelector('.nav');
      const mobileBtn = document.querySelector('.mobile-menu-btn');
      if (nav?.classList.contains('active')) {
        nav.classList.remove('active');
        mobileBtn?.classList.remove('active');
      }
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }
}
