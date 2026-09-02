import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="hero" class="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
      
      <!-- Background Ambient Glow Effects -->
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div class="absolute top-1/3 right-10 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          <!-- LEFT HERO COLUMN: TEXT & CTAS -->
          <div class="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            
            <!-- Availability Badge -->
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-mono shadow-inner">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Available for Backend Roles • {{ info.location }}</span>
            </div>

            <!-- Main Heading -->
            <div class="space-y-2">
              <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight">
                Hi, I'm <span class="gradient-text-cyan">{{ info.name }}</span>
              </h1>
              
              <!-- Smooth 3-Second Role Rotator -->
              <div class="h-8 sm:h-10 flex items-center justify-center lg:justify-start gap-1">
                <span 
                  class="gradient-text-violet font-mono font-bold text-base sm:text-2xl inline-block transition-all duration-300 ease-in-out transform"
                  [ngClass]="{
                    'opacity-0 translate-y-2 scale-95': isFading,
                    'opacity-100 translate-y-0 scale-100': !isFading
                  }"
                >
                  {{ currentRole }}
                </span>
                <span class="animate-pulse text-cyan-400 font-mono font-bold text-base sm:text-2xl">|</span>
              </div>
            </div>

            <!-- Tagline -->
            <p class="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {{ info.tagline }} Ex-Infosys System Engineer (2 Years 6 Months) with a proven track record of optimizing production query runtimes by ~35-40% and building interactive distributed system simulation engines.
            </p>

            <!-- Action CTAs -->
            <div class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3">
              <a 
                href="#projects" 
                class="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
              >
                <span>Explore Featured Work</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </a>

              <button 
                (click)="onOpenResume()"
                class="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-cyan-300 font-semibold text-sm border border-cyan-500/30 transition-all flex items-center justify-center gap-2 hover:border-cyan-400 shadow-md"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                View / Download Resume
              </button>
            </div>

            <!-- Social Media Quick Links -->
            <div class="pt-4 flex items-center justify-center lg:justify-start gap-4 text-xs font-mono text-slate-400">
              <span class="text-slate-500">Connect:</span>

              <a [href]="info.github" target="_blank" class="hover:text-cyan-400 transition-colors flex items-center gap-1">
                <span>GitHub</span>
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>

              <a [href]="info.leetcode" target="_blank" class="hover:text-amber-400 transition-colors flex items-center gap-1">
                <span>LeetCode</span>
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>

              <a [href]="info.linkedin" target="_blank" class="hover:text-blue-400 transition-colors flex items-center gap-1">
                <span>LinkedIn</span>
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            </div>

          </div>

          <!-- RIGHT HERO COLUMN: CODE WINDOW MOCKUP -->
          <div class="lg:col-span-5">
            <div class="glass-card rounded-2xl border border-white/10 shadow-2xl overflow-hidden group hover:border-cyan-500/30 transition-all">
              
              <!-- Code Header Bar -->
              <div class="px-4 py-3 bg-slate-900/90 border-b border-white/10 flex items-center justify-between">
                <div class="flex items-center gap-1.5">
                  <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div class="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div class="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                
                <div class="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
                  <span>backend_engine.py</span>
                </div>

                <div class="text-[10px] font-mono text-slate-500">
                  FastAPI / Python
                </div>
              </div>

              <!-- Code Content View (Scrollable on Mobile) -->
              <div class="p-4 sm:p-5 font-mono text-xs leading-relaxed overflow-x-auto bg-[#070b15]/95 text-slate-300">
                <div class="text-slate-500">// Mayank Backend API Engine</div>
                <div><span class="text-violet-400">from</span> fastapi <span class="text-violet-400">import</span> FastAPI, Depends</div>
                <div><span class="text-violet-400">from</span> sqlalchemy.ext.asyncio <span class="text-violet-400">import</span> AsyncSession</div>
                <div class="mt-2">app = <span class="text-cyan-400">FastAPI</span>(title=<span class="text-emerald-300">"MayankBackendEngine"</span>)</div>
                <div class="mt-2 text-cyan-400">&#64;app.get(<span class="text-emerald-300">"/api/v1/metrics/optimize"</span>)</div>
                <div><span class="text-violet-400">async def</span> <span class="text-amber-300">query_booster</span>(session: AsyncSession):</div>
                <div class="pl-4 text-slate-500">// Reduced job runtime 70m -> 35m at Infosys</div>
                <div class="pl-4">result = <span class="text-violet-400">await</span> session.execute(</div>
                <div class="pl-8 text-emerald-300">"SELECT * FROM production_jobs WHERE status='OPTIMIZED'"</div>
                <div class="pl-4">)</div>
                <div class="pl-4"><span class="text-violet-400">return</span> &#123;<span class="text-emerald-300">"speedup"</span>: <span class="text-amber-300">"35-40%"</span>, <span class="text-emerald-300">"status"</span>: <span class="text-emerald-300">"SUCCESS"</span>&#125;</div>
              </div>

              <!-- Code Footer Metric Bar -->
              <div class="px-4 py-2.5 bg-slate-900/80 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                <span class="text-emerald-400 flex items-center gap-1.5">
                  <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  200+ LeetCode Solved
                </span>

                <span class="text-slate-400">
                  PostgreSQL / Redis
                </span>
              </div>

            </div>
          </div>

        </div>

        <!-- STATS HIGHLIGHT GRID -->
        <div class="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          
          <div class="glass-card p-4 sm:p-5 border border-white/10 text-center flex flex-col justify-center">
            <div class="text-2xl sm:text-3xl font-extrabold font-heading text-cyan-400">2 Yrs 6 Mos</div>
            <div class="text-[11px] sm:text-xs font-mono text-slate-400 mt-1">Enterprise Experience</div>
          </div>

          <div class="glass-card p-4 sm:p-5 border border-white/10 text-center flex flex-col justify-center">
            <div class="text-2xl sm:text-3xl font-extrabold font-heading text-emerald-400">35-40%</div>
            <div class="text-[11px] sm:text-xs font-mono text-slate-400 mt-1">Query Job Speedup</div>
          </div>

          <div class="glass-card p-4 sm:p-5 border border-white/10 text-center flex flex-col justify-center">
            <div class="text-2xl sm:text-3xl font-extrabold font-heading text-amber-400">200+</div>
            <div class="text-[11px] sm:text-xs font-mono text-slate-400 mt-1">LeetCode Solved</div>
          </div>

          <div class="glass-card p-4 sm:p-5 border border-white/10 text-center flex flex-col justify-center">
            <div class="text-2xl sm:text-3xl font-extrabold font-heading text-violet-400">8.39</div>
            <div class="text-[11px] sm:text-xs font-mono text-slate-400 mt-1">B.Tech CSE CGPA</div>
          </div>

        </div>

      </div>
    </section>
  `
})
export class HeroComponent implements OnInit, OnDestroy {
  @Output() openResume = new EventEmitter<void>();

  info = PORTFOLIO_DATA.personalInfo;
  
  roles = [
    'Python Backend Developer',
    'FastAPI & Django Specialist',
    'Distributed System Designer',
    'High-Throughput API Architect'
  ];

  currentRoleIndex = 0;
  currentRole = this.roles[0];
  isFading = false;
  private timer: any;

  ngOnInit() {
    this.timer = setInterval(() => {
      this.isFading = true;
      setTimeout(() => {
        this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
        this.currentRole = this.roles[this.currentRoleIndex];
        this.isFading = false;
      }, 300);
    }, 3000);
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  onOpenResume() {
    this.openResume.emit();
  }
}
