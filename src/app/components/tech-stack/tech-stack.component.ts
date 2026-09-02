import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="tech-stack" class="section-wrapper relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- HEADER -->
        <div class="section-header">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/80 border border-violet-500/30 text-violet-400 text-xs font-mono mb-3">
            <span>// TECHNICAL TOOLBELT</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Organized <span class="gradient-text-violet">Tech Stack & Skills</span>
          </h2>
          <p class="mt-4 text-slate-300 text-base">
            Categorized technical stack focused on Python backend engineering, database optimization, and modern web frameworks.
          </p>
        </div>

        <!-- CATEGORIZED SKILLS GRID (EQUAL HEIGHT CARDS) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          
          <div 
            *ngFor="let cat of skillCategories"
            class="glass-card p-6 border border-white/10 hover:border-violet-500/40 transition-all flex flex-col justify-between h-full"
          >
            <div>
              <!-- Category Header -->
              <div class="flex items-center justify-between pb-3.5 border-b border-white/10 mb-4">
                <h3 class="font-heading font-bold text-lg text-white flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-violet-400"></span>
                  {{ cat.title }}
                </h3>
                <span class="text-[11px] font-mono text-slate-400">
                  {{ cat.skills.length }} Skills
                </span>
              </div>

              <!-- Skill Badges -->
              <div class="flex flex-wrap gap-2">
                <div 
                  *ngFor="let skill of cat.skills"
                  class="px-3 py-2 rounded-xl bg-slate-900/90 border border-white/10 hover:border-cyan-500/40 transition-all flex items-center gap-2 text-xs font-mono group"
                >
                  <span class="text-slate-200 group-hover:text-cyan-300 font-medium">
                    {{ skill.name }}
                  </span>
                  <span 
                    *ngIf="skill.tag" 
                    class="text-[10px] px-1.5 py-0.5 rounded bg-violet-950/80 text-violet-300 border border-violet-500/20"
                  >
                    {{ skill.tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  `
})
export class TechStackComponent {
  skillCategories = PORTFOLIO_DATA.skillCategories;
}
