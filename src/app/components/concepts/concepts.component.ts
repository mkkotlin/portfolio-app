import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-concepts',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="concepts" class="section-wrapper relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- HEADER -->
        <div class="section-header">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <span>// ARCHITECTURE & FUNDAMENTALS</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            What I Know: <span class="gradient-text-cyan">Core Concepts</span>
          </h2>
          <p class="mt-4 text-slate-300 text-base">
            Visual breakdown of foundational engineering practices, system design concepts, and database principles applied across my work.
          </p>
        </div>

        <!-- CONCEPTS GRID (EQUAL HEIGHT CARDS) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          
          <div 
            *ngFor="let item of concepts"
            class="glass-card p-6 border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between h-full group"
          >
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="px-2.5 py-1 rounded-md bg-cyan-950 text-cyan-400 border border-cyan-500/30 text-[11px] font-mono">
                  {{ item.category }}
                </span>
                <span class="text-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity">
                  💡
                </span>
              </div>

              <h3 class="text-xl font-bold font-heading text-white group-hover:text-cyan-300 transition-colors mb-2">
                {{ item.title }}
              </h3>

              <p class="text-slate-300 text-xs leading-relaxed mb-4">
                {{ item.description }}
              </p>
            </div>

            <div class="space-y-1.5 pt-3.5 border-t border-white/10">
              <div *ngFor="let point of item.keyPoints" class="flex items-center gap-2 text-[11px] font-mono text-slate-300">
                <span class="text-cyan-400">✓</span>
                <span>{{ point }}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  `
})
export class ConceptsComponent {
  concepts = PORTFOLIO_DATA.concepts;
}
