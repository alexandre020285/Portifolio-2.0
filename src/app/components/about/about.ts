import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {
  downloadCV() {
    // Implementar download do CV
    console.log('Download CV clicked');
  }

  viewProjects() {
    // Scroll direto para a seção de portfólio
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      const headerHeight = 70;
      const elementPosition = portfolioSection.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  }
}
