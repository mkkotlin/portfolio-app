import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="contact" class="section-wrapper relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- HEADER -->
        <div class="section-header">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <span>// LET'S CONNECT</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Get In <span class="gradient-text-cyan">Touch</span>
          </h2>
          <p class="mt-4 text-slate-300 text-base">
            Interested in discussing Python backend engineering, distributed system design, or full-stack opportunities? Feel free to reach out directly!
          </p>
        </div>

        <!-- 4 CLEAN CONTACT CARDS GRID -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-16">
          
          <!-- Direct Email Card -->
          <div class="glass-card p-6 border border-cyan-500/20 hover:border-cyan-500/50 flex flex-col justify-between h-full group">
            <div>
              <div class="p-3.5 rounded-2xl bg-cyan-500/10 text-cyan-400 w-12 h-12 flex items-center justify-center mb-4">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 012-2V7a2 2 0 01-2-2H5a2 2 0 01-2 2v10a2 2 0 012 2z"/>
                </svg>
              </div>
              <div class="text-xs font-mono text-slate-400 uppercase tracking-wider">Direct Email</div>
              <div class="text-sm font-bold text-white mt-1 break-all">{{ info.email }}</div>
            </div>

            <div class="pt-4 mt-4 border-t border-white/10">
              <button 
                (click)="copyEmail()"
                class="w-full py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 text-xs font-mono border border-cyan-500/30 transition-all flex items-center justify-center gap-1.5"
              >
                <span>{{ copied ? 'Copied to Clipboard! ✓' : 'Copy Email Address' }}</span>
              </button>
            </div>
          </div>

          <!-- LeetCode Card -->
          <div class="glass-card p-6 border border-white/10 hover:border-amber-500/50 flex flex-col justify-between h-full group">
            <div>
              <div class="p-3.5 rounded-2xl bg-amber-500/10 text-amber-400 w-12 h-12 flex items-center justify-center mb-4">
                <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.178 1.823.645l2.697 2.607c.523.504 1.347.504 1.87 0s.523-1.326 0-1.83l-2.697-2.607C14.07 5.093 12.44 4.5 10.706 4.5s-3.364.593-4.57 1.777L1.817 10.657C.61 11.864 0 13.488 0 15.222s.61 3.358 1.817 4.565l4.319 4.363c1.206 1.184 2.836 1.777 4.57 1.777s3.364-.593 4.57-1.777l2.697-2.607c.523-.504.523-1.326 0-1.83s-1.347-.504-1.871 0zM22.817 10.657l-3.21-3.24c-.523-.504-1.347-.504-1.87 0s-.523 1.326 0 1.83l3.21 3.24c.467.467.702 1.15.702 1.863s-.235 1.357-.702 1.824l-3.21 3.24c-.523.504-.523 1.326 0 1.83s1.347.504 1.87 0l3.21-3.24c1.206-1.207 1.817-2.831 1.817-4.565s-.611-3.358-1.817-4.565z"/>
                </svg>
              </div>
              <div class="text-xs font-mono text-slate-400 uppercase tracking-wider">LeetCode</div>
              <div class="text-sm font-bold text-white mt-1">&#64;44_mayank</div>
            </div>

            <div class="pt-4 mt-4 border-t border-white/10">
              <a 
                [href]="info.leetcode" 
                target="_blank" 
                rel="noopener"
                class="w-full py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 hover:text-amber-200 text-xs font-mono border border-amber-500/30 transition-all flex items-center justify-center gap-1.5"
              >
                <span>View LeetCode 200+</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- GitHub Card -->
          <div class="glass-card p-6 border border-white/10 hover:border-violet-500/50 flex flex-col justify-between h-full group">
            <div>
              <div class="p-3.5 rounded-2xl bg-violet-500/10 text-violet-400 w-12 h-12 flex items-center justify-center mb-4">
                <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </div>
              <div class="text-xs font-mono text-slate-400 uppercase tracking-wider">GitHub</div>
              <div class="text-sm font-bold text-white mt-1">&#64;mkkotlin</div>
            </div>

            <div class="pt-4 mt-4 border-t border-white/10">
              <a 
                [href]="info.github" 
                target="_blank" 
                rel="noopener"
                class="w-full py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-violet-300 hover:text-violet-200 text-xs font-mono border border-violet-500/30 transition-all flex items-center justify-center gap-1.5"
              >
                <span>Visit GitHub Profile</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- LinkedIn Card -->
          <div class="glass-card p-6 border border-white/10 hover:border-blue-500/50 flex flex-col justify-between h-full group">
            <div>
              <div class="p-3.5 rounded-2xl bg-blue-500/10 text-blue-400 w-12 h-12 flex items-center justify-center mb-4">
                <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <div class="text-xs font-mono text-slate-400 uppercase tracking-wider">LinkedIn</div>
              <div class="text-sm font-bold text-white mt-1">in/mayank20py</div>
            </div>

            <div class="pt-4 mt-4 border-t border-white/10">
              <a 
                [href]="info.linkedin" 
                target="_blank" 
                rel="noopener"
                class="w-full py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-blue-300 hover:text-blue-200 text-xs font-mono border border-blue-500/30 transition-all flex items-center justify-center gap-1.5"
              >
                <span>Connect on LinkedIn</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        <!-- FOOTER -->
        <div class="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © 2026 Mayank Kumar. Built with <span class="text-cyan-400">Angular 19</span> & <span class="text-violet-400">TypeScript</span>.
          </div>

          <div class="flex items-center gap-4">
            <a href="#hero" class="hover:text-cyan-400 transition-colors">Back to Top ↑</a>
          </div>
        </div>

      </div>
    </section>
  `
})
export class ContactComponent {
  info = PORTFOLIO_DATA.personalInfo;
  copied = false;

  copyEmail() {
    navigator.clipboard.writeText(this.info.email);
    this.copied = true;
    setTimeout(() => this.copied = false, 2500);
  }
}
