import { Routes } from '@angular/router';
import { AppComponent } from './app';
import { AboutComponent } from './components/about/about';
import { SkillsComponent } from './components/skills/skills';
import { PortfolioComponent } from './components/portfolio/portfolio';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
  { path: 'about', component: AppComponent },
  { path: 'skills', component: AppComponent },
  { path: 'portfolio', component: AppComponent },

  { path: '**', redirectTo: '/home' },
];
