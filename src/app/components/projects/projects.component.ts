import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_DATA, Project } from '../../data/portfolio-data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="section-wrapper relative">
      
      <!-- Background Glow -->
      <div class="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- SECTION HEADER -->
        <div class="section-header">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <span>// FEATURED ENGINEERING WORK</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Projects & <span class="gradient-text-cyan">System Architecture</span>
          </h2>
          <p class="mt-4 text-slate-300 text-base">
            Focusing on concrete backend engineering, real-time WebSockets, offline-first resilience, AI semantic search, and distributed system simulations.
          </p>
        </div>

        <!-- SPECIAL EMBEDDED WIDGET: NODELABCANVAS INTERACTIVE SIMULATION DEMO -->
        <div class="mb-16 glass-card p-4 sm:p-8 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
          
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6 pb-6 border-b border-white/10 mb-6">
            <div>
              <div class="flex flex-wrap items-center gap-2 sm:gap-3">
                <span class="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-[11px] sm:text-xs font-mono font-bold animate-pulse">
                  ⚡ LIVE INTERACTIVE SIMULATOR
                </span>
                <span class="text-xs font-mono text-slate-400">NodeLabCanvas Engine Demo</span>
              </div>
              <h3 class="text-xl sm:text-2xl font-bold font-heading text-white mt-2">
                Distributed System Request Routing Simulator
              </h3>
              <p class="text-xs text-slate-300 mt-1 max-w-2xl">
                Test request dispatching across Load Balancer, Cache, API Gateways, and Asynchronous Worker Pools built with Django & Angular RxJS concepts.
              </p>
            </div>

            <!-- Simulator Controls -->
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div class="flex items-center justify-between gap-2 bg-slate-900 px-3.5 py-2 rounded-xl border border-white/10 text-xs">
                <span class="text-slate-400 font-mono">Strategy:</span>
                <select 
                  [value]="simStrategy" 
                  (change)="onStrategyChange($event)"
                  class="bg-transparent text-cyan-300 font-semibold focus:outline-none cursor-pointer text-right sm:text-left"
                >
                  <option value="Round-Robin" class="bg-slate-900 text-slate-200">Round Robin</option>
                  <option value="Least-Latency" class="bg-slate-900 text-slate-200">Least Latency</option>
                  <option value="Cache-First" class="bg-slate-900 text-slate-200">Cache First (Redis)</option>
                </select>
              </div>

              <button 
                (click)="dispatchSimRequest()"
                [disabled]="simulating"
                class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 text-slate-950 font-bold text-xs font-mono transition-all shadow-md shadow-cyan-500/20 flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
              >
                <svg class="w-4 h-4" [ngClass]="{'animate-spin': simulating}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                {{ simulating ? 'Processing...' : 'Dispatch Request' }}
              </button>
            </div>
          </div>

          <!-- Simulation Flow Diagram Nodes (Responsive 2 to 5 columns) -->
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 my-6 relative">
            
            <div 
              class="p-3.5 sm:p-4 rounded-xl border text-center transition-all duration-300 flex flex-col items-center justify-center gap-1.5"
              [ngClass]="{
                'bg-cyan-950/80 border-cyan-400 text-cyan-200 shadow-lg shadow-cyan-500/30 scale-105 node-pulse': activeNode === 'client',
                'bg-slate-900/80 border-white/10 text-slate-300': activeNode !== 'client'
              }"
            >
              <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold text-base sm:text-lg">
                💻
              </div>
              <div class="font-heading font-bold text-xs sm:text-sm leading-tight">Client Browser</div>
              <div class="text-[9px] sm:text-[10px] font-mono text-slate-400">POST /order</div>
            </div>

            <div 
              class="p-3.5 sm:p-4 rounded-xl border text-center transition-all duration-300 flex flex-col items-center justify-center gap-1.5"
              [ngClass]="{
                'bg-cyan-950/80 border-cyan-400 text-cyan-200 shadow-lg shadow-cyan-500/30 scale-105 node-pulse': activeNode === 'lb',
                'bg-slate-900/80 border-white/10 text-slate-300': activeNode !== 'lb'
              }"
            >
              <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-400 font-bold text-base sm:text-lg">
                🔀
              </div>
              <div class="font-heading font-bold text-xs sm:text-sm leading-tight">Load Balancer</div>
              <div class="text-[9px] sm:text-[10px] font-mono text-slate-400 truncate max-w-full px-1">{{ simStrategy }}</div>
            </div>

            <div 
              class="p-3.5 sm:p-4 rounded-xl border text-center transition-all duration-300 flex flex-col items-center justify-center gap-1.5"
              [ngClass]="{
                'bg-cyan-950/80 border-cyan-400 text-cyan-200 shadow-lg shadow-cyan-500/30 scale-105 node-pulse': activeNode === 'api',
                'bg-slate-900/80 border-white/10 text-slate-300': activeNode !== 'api'
              }"
            >
              <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-base sm:text-lg">
                ⚙️
              </div>
              <div class="font-heading font-bold text-xs sm:text-sm leading-tight">Django Gateway</div>
              <div class="text-[9px] sm:text-[10px] font-mono text-slate-400">Auth & Pydantic</div>
            </div>

            <div 
              class="p-3.5 sm:p-4 rounded-xl border text-center transition-all duration-300 flex flex-col items-center justify-center gap-1.5"
              [ngClass]="{
                'bg-cyan-950/80 border-cyan-400 text-cyan-200 shadow-lg shadow-cyan-500/30 scale-105 node-pulse': activeNode === 'cache',
                'bg-slate-900/80 border-white/10 text-slate-300': activeNode !== 'cache'
              }"
            >
              <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 font-bold text-base sm:text-lg">
                ⚡
              </div>
              <div class="font-heading font-bold text-xs sm:text-sm leading-tight">Redis & Queue</div>
              <div class="text-[9px] sm:text-[10px] font-mono text-slate-400">Channels Layer</div>
            </div>

            <div 
              class="col-span-2 sm:col-span-1 p-3.5 sm:p-4 rounded-xl border text-center transition-all duration-300 flex flex-col items-center justify-center gap-1.5"
              [ngClass]="{
                'bg-cyan-950/80 border-cyan-400 text-cyan-200 shadow-lg shadow-cyan-500/30 scale-105 node-pulse': activeNode === 'db',
                'bg-slate-900/80 border-white/10 text-slate-300': activeNode !== 'db'
              }"
            >
              <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold text-base sm:text-lg">
                🗄️
              </div>
              <div class="font-heading font-bold text-xs sm:text-sm leading-tight">PostgreSQL DB</div>
              <div class="text-[9px] sm:text-[10px] font-mono text-slate-400">Atomic Commit</div>
            </div>

          </div>

          <!-- Simulation Console -->
          <div class="bg-[#060a14] rounded-xl p-3 sm:p-4 border border-white/10 font-mono text-[11px] sm:text-xs text-slate-300 max-h-32 sm:max-h-36 overflow-y-auto">
            <div class="text-slate-500 mb-1.5 flex items-center justify-between text-[10px] sm:text-xs">
              <span>SIMULATION LOG CONSOLE</span>
              <span class="text-cyan-400 font-bold">Processed: {{ totalSimCount }}</span>
            </div>
            <div *ngFor="let log of simLogs" class="py-0.5 border-b border-white/5 text-cyan-300 truncate">
              {{ log }}
            </div>
          </div>

        </div>

        <!-- CATEGORY FILTERS -->
        <div class="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-10 px-2">
          <button 
            *ngFor="let cat of categories"
            (click)="selectedCategory = cat"
            class="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[11px] sm:text-xs font-semibold font-mono transition-all"
            [ngClass]="{
              'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-md shadow-cyan-500/10': selectedCategory === cat,
              'bg-slate-900/80 text-slate-400 border border-white/10 hover:text-white hover:bg-slate-800': selectedCategory !== cat
            }"
          >
            {{ cat }}
          </button>
        </div>

        <!-- PROJECTS GRID -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          <div 
            *ngFor="let project of filteredProjects" 
            class="glass-card p-5 sm:p-8 flex flex-col justify-between group border border-white/10 hover:border-cyan-500/40 relative overflow-hidden h-full"
          >
            <!-- Top Content Section -->
            <div class="flex-1 flex flex-col justify-between">
              <div>
                <!-- Category & Featured Badges -->
                <div class="flex items-center justify-between gap-2 mb-3">
                  <span class="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-500/30 text-[10px] sm:text-xs font-mono">
                    {{ project.category }}
                  </span>

                  <span *ngIf="project.featured" class="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 text-[10px] sm:text-[11px] font-semibold flex items-center gap-1">
                    ⭐ Featured
                  </span>
                </div>

                <!-- Title & Subtitle -->
                <h3 class="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-cyan-300 transition-colors">
                  {{ project.title }}
                </h3>
                <div class="text-xs font-mono text-cyan-400/90 mt-1 mb-3">
                  {{ project.subtitle }}
                </div>

                <!-- Description -->
                <p class="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {{ project.description }}
                </p>

                <!-- Highlights List -->
                <div class="space-y-2 mb-5">
                  <div *ngFor="let h of project.highlights" class="flex items-start gap-2 text-xs text-slate-300">
                    <span class="text-cyan-400 font-bold shrink-0">▹</span>
                    <span>{{ h }}</span>
                  </div>
                </div>
              </div>

              <!-- Tech Stack Pills -->
              <div class="mb-5 pt-4 border-t border-white/10">
                <div class="flex flex-wrap gap-1.5">
                  <span 
                    *ngFor="let tech of project.techStack" 
                    class="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-slate-900 border border-white/10 text-[10px] sm:text-[11px] font-mono text-slate-300"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Footer: Buttons Row Always Glued To Bottom -->
            <div class="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
              <a 
                *ngIf="project.githubUrl"
                [href]="project.githubUrl" 
                target="_blank" 
                rel="noopener"
                class="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/40 text-slate-200 hover:text-cyan-300 text-xs font-mono font-medium transition-all flex items-center gap-1.5"
              >
                <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </a>

              <a 
                *ngIf="project.liveDemoUrl"
                [href]="project.liveDemoUrl" 
                target="_blank" 
                rel="noopener"
                class="px-3 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-xs font-mono transition-all flex items-center gap-1 shadow-sm"
              >
                Live Demo
              </a>

              <a 
                *ngIf="project.apiDocsUrl"
                [href]="project.apiDocsUrl" 
                target="_blank" 
                rel="noopener"
                class="px-3 py-2 rounded-xl bg-slate-900 border border-violet-500/40 text-violet-300 text-xs font-mono font-medium hover:bg-slate-800 transition-all flex items-center gap-1"
              >
                Swagger Docs
              </a>

              <button 
                (click)="openModal(project)"
                class="ml-auto px-3 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium border border-white/10 transition-all"
              >
                Details 🔍
              </button>
            </div>

          </div>

        </div>

      </div>

      <!-- PROJECT DETAILS MODAL (MOBILE TOUCH READY) -->
      <div 
        *ngIf="selectedModalProject"
        class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fade-in"
      >
        <div class="glass-card max-w-3xl w-full p-5 sm:p-8 max-h-[92vh] overflow-y-auto border border-cyan-500/40 shadow-2xl animate-scale-up relative">
          
          <!-- Close Button -->
          <button 
            (click)="closeModal()"
            class="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white border border-white/10"
            aria-label="Close modal"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          <!-- Modal Header -->
          <div class="mb-5 pr-8">
            <span class="px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-500/30 text-[11px] font-mono">
              {{ selectedModalProject.category }}
            </span>
            <h3 class="text-2xl sm:text-3xl font-extrabold font-heading text-white mt-2">
              {{ selectedModalProject.title }}
            </h3>
            <p class="text-xs sm:text-sm font-mono text-cyan-300 mt-1">
              {{ selectedModalProject.subtitle }}
            </p>
          </div>

          <!-- Modal Description -->
          <div class="space-y-3 text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
            <h4 class="text-[11px] font-mono uppercase tracking-wider text-slate-400">Architectural Overview</h4>
            <p>{{ selectedModalProject.description }}</p>
          </div>

          <!-- System Flow Diagram Box -->
          <div *ngIf="selectedModalProject.systemFlow" class="mb-5 p-3.5 sm:p-4 rounded-xl bg-[#060a14] border border-cyan-500/20">
            <h4 class="text-[11px] font-mono text-cyan-400 uppercase tracking-wider mb-2.5">System Execution Flow</h4>
            <div class="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <ng-container *ngFor="let node of selectedModalProject.systemFlow.nodes; let last = last">
                <span class="px-2.5 py-1 rounded-lg bg-slate-900 border border-cyan-500/30 text-[11px] font-mono text-cyan-200">
                  {{ node }}
                </span>
                <span *ngIf="!last" class="text-slate-500 font-bold text-xs">➔</span>
              </ng-container>
            </div>
            <p class="text-[11px] text-slate-400 mt-2.5 italic">{{ selectedModalProject.systemFlow.description }}</p>
          </div>

          <!-- Key Technical Accomplishments -->
          <div class="mb-5">
            <h4 class="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2.5">Key Technical Implementation Details</h4>
            <ul class="space-y-2 text-xs sm:text-sm text-slate-300">
              <li *ngFor="let h of selectedModalProject.highlights" class="flex items-start gap-2">
                <span class="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                <span>{{ h }}</span>
              </li>
            </ul>
          </div>

          <!-- Tech Badges -->
          <div class="mb-6 pt-4 border-t border-white/10">
            <h4 class="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2.5">Tech Stack Used</h4>
            <div class="flex flex-wrap gap-1.5">
              <span *ngFor="let tech of selectedModalProject.techStack" class="px-2.5 py-1 rounded-lg bg-slate-900 border border-white/10 text-xs font-mono text-slate-200">
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Action Footer -->
          <div class="flex flex-wrap items-center justify-end gap-2.5 pt-4 border-t border-white/10">
            <a 
              *ngIf="selectedModalProject.githubUrl"
              [href]="selectedModalProject.githubUrl" 
              target="_blank" 
              rel="noopener"
              class="px-4 py-2 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-500/40 text-slate-200 text-xs font-mono font-medium flex items-center gap-1.5"
            >
              GitHub Code
            </a>

            <a 
              *ngIf="selectedModalProject.liveDemoUrl"
              [href]="selectedModalProject.liveDemoUrl" 
              target="_blank" 
              rel="noopener"
              class="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-bold text-xs font-mono"
            >
              Open Live App
            </a>
          </div>

        </div>
      </div>

    </section>
  `
})
export class ProjectsComponent {
  projects = PORTFOLIO_DATA.projects;
  categories = ['All', 'Distributed Systems', 'Backend APIs', 'Real-Time / WebSockets', 'AI & Search', 'Offline-First'];
  selectedCategory = 'All';
  selectedModalProject: Project | null = null;

  // Simulator State
  simStrategy = 'Round-Robin';
  simulating = false;
  activeNode: 'client' | 'lb' | 'api' | 'cache' | 'db' | null = null;
  totalSimCount = 0;
  simLogs: string[] = [
    '[00:00:01] NodeLabCanvas Simulator initialized.',
    '[00:00:02] Connected to WebSocket channel group: "system_sim_room".',
    '[00:00:03] Ready for request dispatching.'
  ];

  get filteredProjects(): Project[] {
    if (this.selectedCategory === 'All') return this.projects;
    return this.projects.filter(p => p.category === this.selectedCategory);
  }

  onStrategyChange(event: Event) {
    const val = (event.target as HTMLSelectElement).value;
    this.simStrategy = val;
    this.addLog(`Strategy changed to: ${val}`);
  }

  dispatchSimRequest() {
    if (this.simulating) return;
    this.simulating = true;
    this.totalSimCount++;

    const reqId = Math.floor(1000 + Math.random() * 9000);
    this.addLog(`[Req #${reqId}] Client dispatched POST /api/v1/order payload.`);
    this.activeNode = 'client';

    setTimeout(() => {
      this.activeNode = 'lb';
      this.addLog(`[Req #${reqId}] Load Balancer applied [${this.simStrategy}] -> Gateway-02.`);
    }, 400);

    setTimeout(() => {
      this.activeNode = 'api';
      this.addLog(`[Req #${reqId}] Django API Gateway authenticated JWT & validated JSON model.`);
    }, 800);

    setTimeout(() => {
      this.activeNode = 'cache';
      if (this.simStrategy === 'Cache-First') {
        this.addLog(`[Req #${reqId}] Redis Cache HIT! Response generated in 2ms.`);
      } else {
        this.addLog(`[Req #${reqId}] Channels Layer published event to Redis worker queue.`);
      }
    }, 1200);

    setTimeout(() => {
      this.activeNode = 'db';
      this.addLog(`[Req #${reqId}] PostgreSQL executed select_related transaction (Latency: 14ms).`);
    }, 1600);

    setTimeout(() => {
      this.activeNode = null;
      this.simulating = false;
      this.addLog(`[Req #${reqId}] SUCCESS 200 OK returned to Client Browser.`);
    }, 2000);
  }

  private addLog(msg: string) {
    const time = new Date().toLocaleTimeString();
    this.simLogs.unshift(`[${time}] ${msg}`);
    if (this.simLogs.length > 10) {
      this.simLogs.pop();
    }
  }

  openModal(p: Project) {
    this.selectedModalProject = p;
  }

  closeModal() {
    this.selectedModalProject = null;
  }
}
