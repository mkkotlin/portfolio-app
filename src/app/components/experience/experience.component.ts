import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="section-wrapper relative">
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- SECTION HEADER: ABOUT ME -->
        <div class="section-header">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <span>// ABOUT & BACKGROUND</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Engineering High-Performance <span class="gradient-text-cyan">Backend Systems</span>
          </h2>
          <p class="mt-4 text-slate-300 text-base">
            Experienced System Engineer with 2 Years & 6 Months of production experience at Infosys (Oct 2022 – Apr 2025) in SQL query optimization, microservice design, and distributed tools.
          </p>
        </div>

        <!-- ABOUT SUMMARY GRID (EQUAL ROW HEIGHTS) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          
          <!-- Summary Card -->
          <div class="lg:col-span-8 glass-card p-6 sm:p-8 flex flex-col justify-between border border-white/10">
            <div>
              <h3 class="text-xl font-bold font-heading text-white mb-4 flex items-center gap-2.5">
                <span class="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </span>
                Professional Summary
              </h3>
              <p class="text-slate-300 leading-relaxed text-sm sm:text-base">
                {{ summary }}
              </p>
            </div>

            <div class="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div class="p-3.5 rounded-xl bg-slate-900/80 border border-white/5">
                <div class="text-[11px] font-mono text-slate-400">Specialization</div>
                <div class="text-xs font-semibold text-cyan-300 mt-1">Python (FastAPI / Django)</div>
              </div>
              <div class="p-3.5 rounded-xl bg-slate-900/80 border border-white/5">
                <div class="text-[11px] font-mono text-slate-400">Database Tuning</div>
                <div class="text-xs font-semibold text-emerald-300 mt-1">PostgreSQL & Query Boost</div>
              </div>
              <div class="p-3.5 rounded-xl bg-slate-900/80 border border-white/5">
                <div class="text-[11px] font-mono text-slate-400">Architecture</div>
                <div class="text-xs font-semibold text-violet-300 mt-1">REST, WebSockets & Distributed</div>
              </div>
            </div>
          </div>

          <!-- Key Principles Card -->
          <div class="lg:col-span-4 glass-card p-6 sm:p-8 flex flex-col justify-between border border-cyan-500/20">
            <div>
              <h3 class="text-xl font-bold font-heading text-white mb-4 flex items-center gap-2.5">
                <span class="p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </span>
                Engineering Principles
              </h3>
              
              <ul class="space-y-3.5 text-xs sm:text-sm">
                <li class="flex items-start gap-3 text-slate-300">
                  <span class="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                  <span><strong>Zero-Downtime Mentality:</strong> Thorough RCA logging analysis & incident resolution.</span>
                </li>
                <li class="flex items-start gap-3 text-slate-300">
                  <span class="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                  <span><strong>Performance Tuning:</strong> Eliminate ORM N+1 queries & redundant database calls.</span>
                </li>
                <li class="flex items-start gap-3 text-slate-300">
                  <span class="w-5 h-5 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                  <span><strong>Clean API Contracts:</strong> Strict Pydantic models & OpenAPI documentation.</span>
                </li>
              </ul>
            </div>

            <div class="mt-6 pt-4 border-t border-white/10">
              <a 
                href="#projects" 
                class="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 font-semibold text-xs font-mono text-center block transition-all border border-cyan-500/30"
              >
                View System Projects ➔
              </a>
            </div>
          </div>

        </div>

        <!-- SECTION: EXPERIENCE -->
        <div id="experience" class="pt-6">
          
          <div class="section-header">
            <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
              <span>// PROFESSIONAL EXPERIENCE</span>
            </div>
            <h2 class="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
              Work History & <span class="gradient-text-emerald">Key Impact</span>
            </h2>
          </div>

          <!-- EXPERIENCE TIMELINE CARD -->
          <div *ngFor="let exp of experience" class="glass-card p-6 sm:p-10 border border-emerald-500/25 relative overflow-hidden">
            
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
              <div>
                <div class="flex flex-wrap items-center gap-3">
                  <h3 class="text-2xl font-bold font-heading text-white">{{ exp.company }}</h3>
                  <span class="px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-xs font-semibold font-mono">
                    {{ exp.role }}
                  </span>
                </div>
                <div class="mt-1.5 text-xs sm:text-sm text-slate-400 flex items-center gap-2 font-mono">
                  <span>📍 {{ exp.location }}</span>
                  <span>•</span>
                  <span>Oct 2022 – Apr 2025</span>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <div class="px-4 py-2 rounded-xl bg-slate-900/90 border border-emerald-500/30 text-right">
                  <div class="text-[10px] font-mono text-slate-400 uppercase">Duration</div>
                  <div class="text-xs sm:text-sm font-bold font-heading text-emerald-300">{{ exp.durationMonths }}</div>
                </div>
              </div>
            </div>

            <!-- Major Achievement Highlight Banner -->
            <div class="mb-6 p-4 rounded-xl bg-gradient-to-r from-emerald-950/70 via-slate-900 to-cyan-950/70 border border-emerald-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div class="flex items-center gap-3">
                <div class="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0">
                  ⚡
                </div>
                <div>
                  <div class="text-[11px] font-mono text-emerald-400 uppercase font-bold tracking-wider">Production Optimization Highlight</div>
                  <div class="text-xs sm:text-sm font-bold text-white mt-0.5">Reduced SQL validation job execution time from 50–70 mins down to 30–45 mins</div>
                </div>
              </div>

              <span class="px-3.5 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold shrink-0 border border-emerald-500/30">
                ~35-40% Faster
              </span>
            </div>

            <!-- Bullet List -->
            <div class="space-y-3.5 text-slate-300 text-xs sm:text-sm leading-relaxed">
              <h4 class="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">Key Responsibilities & Achievements:</h4>
              
              <div *ngFor="let item of exp.achievements" class="flex items-start gap-3">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
                <p>{{ item }}</p>
              </div>
            </div>

            <!-- Tech Badges -->
            <div class="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
              <span class="text-xs font-mono text-slate-400 mr-2">Technologies Used:</span>
              <span 
                *ngFor="let tech of exp.technologies"
                class="px-3 py-1 rounded-lg bg-slate-900 border border-white/10 text-slate-300 text-xs font-mono hover:border-emerald-500/40 transition-colors"
              >
                {{ tech }}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  `
})
export class ExperienceComponent {
  summary = PORTFOLIO_DATA.aboutSummary;
  experience = PORTFOLIO_DATA.experience;
}
