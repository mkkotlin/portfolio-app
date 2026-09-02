import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="timeline" class="section-wrapper relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- HEADER -->
        <div class="section-header">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <span>// CAREER ROADMAP & EDUCATION</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Journey & <span class="gradient-text-cyan">Career Timeline</span>
          </h2>
          <p class="mt-4 text-slate-300 text-base">
            From B.Tech CSE graduation to enterprise engineering at Infosys and building high-performance backend tools.
          </p>
        </div>

        <!-- HORIZONTAL TIMELINE STEP BADGES (DESKTOP) -->
        <div class="hidden md:flex items-center justify-between gap-4 mb-16 px-8 py-6 glass-card border border-cyan-500/20">
          
          <div class="flex items-center gap-3">
            <span class="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold font-mono text-sm border border-cyan-500/30">
              2018
            </span>
            <div>
              <div class="text-xs font-bold text-white">B.Tech CSE</div>
              <div class="text-[10px] text-cyan-400 font-mono">CGPA 8.39 / 10</div>
            </div>
          </div>

          <div class="h-[2px] flex-1 bg-gradient-to-r from-cyan-500/40 to-emerald-500/40"></div>

          <div class="flex items-center gap-3">
            <span class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold font-mono text-sm border border-emerald-500/30">
              2022
            </span>
            <div>
              <div class="text-xs font-bold text-white">Infosys System Engineer</div>
              <div class="text-[10px] text-emerald-400 font-mono">Bhubaneswar (2 Yrs 6 Mos)</div>
            </div>
          </div>

          <div class="h-[2px] flex-1 bg-gradient-to-r from-emerald-500/40 to-violet-500/40"></div>

          <div class="flex items-center gap-3">
            <span class="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center font-bold font-mono text-sm border border-violet-500/30">
              2025
            </span>
            <div>
              <div class="text-xs font-bold text-white">Advanced System Projects</div>
              <div class="text-[10px] text-violet-400 font-mono">NodeLabCanvas & APIs</div>
            </div>
          </div>

          <div class="h-[2px] flex-1 bg-gradient-to-r from-violet-500/40 to-amber-500/40"></div>

          <div class="flex items-center gap-3">
            <span class="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold font-mono text-sm border border-amber-500/30">
              2026
            </span>
            <div>
              <div class="text-xs font-bold text-white">Backend Engineer</div>
              <div class="text-[10px] text-amber-400 font-mono">Senior Roles</div>
            </div>
          </div>

        </div>

        <!-- DETAILED TIMELINE CARDS LIST -->
        <div class="space-y-6 max-w-4xl mx-auto">
          
          <div 
            *ngFor="let item of timeline"
            class="glass-card p-6 sm:p-7 border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col md:flex-row gap-6 items-start"
          >
            <!-- Year Pill -->
            <div class="px-4 py-2 rounded-xl bg-slate-900 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold shrink-0">
              {{ item.year }}
            </div>

            <!-- Main Content -->
            <div class="flex-1">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <h3 class="text-xl font-bold font-heading text-white">{{ item.title }}</h3>
                <span class="text-xs font-mono text-slate-400">{{ item.organization }}</span>
              </div>
              
              <p class="text-slate-300 text-xs sm:text-sm leading-relaxed mt-2">
                {{ item.description }}
              </p>
            </div>
          </div>

        </div>

        <!-- EDUCATION SPECIAL CARD -->
        <div class="mt-12 max-w-4xl mx-auto glass-card p-6 border border-cyan-500/25 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-4">
            <div class="p-3.5 rounded-2xl bg-cyan-500/10 text-cyan-400 text-xl shrink-0">
              🎓
            </div>
            <div>
              <h3 class="text-lg font-bold font-heading text-white">{{ education.degree }}</h3>
              <p class="text-xs text-slate-400 mt-0.5">First Class Distinction • CGPA: <strong class="text-cyan-300">{{ education.cgpa }}</strong></p>
            </div>
          </div>

          <div class="px-4 py-2 rounded-xl bg-cyan-950 text-cyan-300 border border-cyan-500/30 font-mono text-xs font-bold shrink-0">
            2018 – 2022
          </div>
        </div>

      </div>
    </section>
  `
})
export class TimelineComponent {
  timeline = PORTFOLIO_DATA.timeline;
  education = PORTFOLIO_DATA.education;
}
