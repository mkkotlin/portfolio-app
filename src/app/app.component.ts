import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { ConceptsComponent } from './components/concepts/concepts.component';
import { DsaComponent } from './components/dsa/dsa.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ContactComponent } from './components/contact/contact.component';
import { ResumeModalComponent } from './components/resume-modal/resume-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    ExperienceComponent,
    ProjectsComponent,
    TechStackComponent,
    ConceptsComponent,
    DsaComponent,
    TimelineComponent,
    ContactComponent,
    ResumeModalComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mayank Kumar Portfolio';
  isResumeModalOpen = false;

  openResumeModal() {
    this.isResumeModalOpen = true;
  }

  closeResumeModal() {
    this.isResumeModalOpen = false;
  }
}

