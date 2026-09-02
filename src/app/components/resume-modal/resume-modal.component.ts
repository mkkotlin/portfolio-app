import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-resume-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      *ngIf="isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fade-in"
    >
      <div class="glass-card max-w-4xl w-full p-4 sm:p-8 max-h-[92vh] overflow-y-auto border border-cyan-500/40 shadow-2xl animate-scale-up relative text-slate-100">
        
        <!-- Header bar with buttons -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10 mb-6">
          <div class="flex items-center gap-3">
            <div class="p-2.5 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-slate-950 font-bold shrink-0">
              📄
            </div>
            <div>
              <h2 class="text-xl sm:text-2xl font-extrabold font-heading text-white">Mayank Kumar — Resume CV</h2>
              <p class="text-xs font-mono text-cyan-400">Python Backend Developer | Ex-Infosys System Engineer</p>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-2 justify-end">
            <a 
              [href]="data.personalInfo.resumePdfUrl"
              download="Mayank_Kumar_Resume.pdf"
              class="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-xs font-mono transition-all flex items-center gap-1.5 shadow-md"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Download PDF File
            </a>

            <button 
              (click)="printResume()"
              class="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-cyan-500/30 text-cyan-300 font-bold text-xs font-mono transition-all flex items-center gap-1.5"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
              </svg>
              Print
            </button>

            <button 
              (click)="onClose()"
              class="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white border border-white/10"
              aria-label="Close Resume Modal"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Printable Resume Content Area -->
        <div id="printable-resume" class="space-y-6 sm:space-y-8 bg-[#090d16] p-4 sm:p-8 rounded-2xl border border-white/5 font-sans">
          
          <!-- RESUME HEADER -->
          <div class="border-b border-white/10 pb-6">
            <h1 class="text-2xl sm:text-3xl font-extrabold text-white font-heading">Mayank Kumar</h1>
            <p class="text-xs sm:text-sm font-semibold text-cyan-400 font-mono mt-1">Python Backend Developer</p>
            <div class="flex flex-wrap gap-3 sm:gap-4 text-xs font-mono text-slate-300 mt-3">
              <span>📍 Bengaluru / India 🇮🇳</span>
              <span>•</span>
              <span>📧 mkkotlin&#64;gmail.com</span>
              <span>•</span>
              <a href="https://github.com/mkkotlin" target="_blank" class="text-cyan-400 hover:underline">github.com/mkkotlin</a>
              <span>•</span>
              <a href="https://linkedin.com/in/mayank20py" target="_blank" class="text-blue-400 hover:underline">linkedin.com/in/mayank20py</a>
              <span>•</span>
              <a href="https://leetcode.com/u/44_mayank/" target="_blank" class="text-amber-400 hover:underline">leetcode.com/u/44_mayank/ (200+ Solved)</a>
            </div>
          </div>

          <!-- SUMMARY -->
          <div>
            <h3 class="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold mb-2">Professional Summary</h3>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {{ data.aboutSummary }}
            </p>
          </div>

          <!-- EXPERIENCE -->
          <div>
            <h3 class="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold mb-4">Work Experience</h3>
            <div *ngFor="let exp of data.experience" class="space-y-3">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h4 class="text-base font-bold text-white">{{ exp.company }} — <span class="text-emerald-300">{{ exp.role }}</span></h4>
                  <p class="text-xs font-mono text-slate-400">{{ exp.location }}</p>
                </div>
                <div class="text-xs font-mono text-emerald-400">{{ exp.period }} (2 Years 6 Months)</div>
              </div>

              <ul class="space-y-1.5 text-xs text-slate-300">
                <li *ngFor="let a of exp.achievements" class="flex items-start gap-2">
                  <span class="text-emerald-400 font-bold shrink-0">•</span>
                  <span>{{ a }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- FEATURED PROJECTS -->
          <div>
            <h3 class="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold mb-4">Key System Projects</h3>
            <div class="space-y-4">
              <div *ngFor="let p of data.projects" class="p-3.5 rounded-xl bg-slate-900/60 border border-white/5">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 class="text-sm font-bold text-white">{{ p.title }} — <span class="text-cyan-300 font-normal">{{ p.subtitle }}</span></h4>
                  <div class="text-[11px] font-mono text-slate-400">{{ p.techStack.slice(0, 4).join(', ') }}</div>
                </div>
                <p class="text-xs text-slate-300 mt-1">{{ p.description }}</p>
              </div>
            </div>
          </div>

          <!-- SKILLS -->
          <div>
            <h3 class="text-xs font-mono text-violet-400 uppercase tracking-widest font-bold mb-3">Technical Skills</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div *ngFor="let cat of data.skillCategories" class="p-3 rounded-xl bg-slate-900/60 border border-white/5">
                <div class="font-bold text-slate-200 mb-1 font-mono text-[11px]">{{ cat.title }}:</div>
                <div class="text-slate-400 leading-relaxed">
                  {{ getSkillNames(cat.skills) }}
                </div>
              </div>
            </div>
          </div>

          <!-- EDUCATION -->
          <div>
            <h3 class="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold mb-2">Education</h3>
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
              <div>
                <span class="font-bold text-white">{{ data.education.degree }}</span>
                <span class="text-slate-400"> (CGPA: {{ data.education.cgpa }})</span>
              </div>
              <div class="font-mono text-amber-400">{{ data.education.duration }}</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  `
})
export class ResumeModalComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  data = PORTFOLIO_DATA;

  onClose() {
    this.close.emit();
  }

  getSkillNames(skills: { name: string }[]): string {
    return skills.map(s => s.name).join(', ');
  }

  printResume() {
    const printElem = document.getElementById('printable-resume');
    if (!printElem) return;

    const iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';

    document.body.appendChild(iframe);

    const doc = iframe.contentWindow?.document;
    if (!doc) return;

    doc.open();
    doc.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Mayank Kumar - Resume CV</title>
          <style>
            @page { size: A4; margin: 12mm 15mm; }
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
              color: #0f172a;
              background: #ffffff;
              line-height: 1.4;
              margin: 0;
              padding: 0;
            }
            h1 { font-size: 22px; font-weight: 800; margin: 0 0 2px 0; color: #0f172a; }
            h3 { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #0284c7; margin: 14px 0 6px 0; font-weight: 700; border-bottom: 1px solid #cbd5e1; padding-bottom: 3px; }
            h4 { font-size: 13px; font-weight: 700; color: #0f172a; margin: 0; }
            p, li { font-size: 11px; color: #334155; margin: 2px 0; }
            ul { padding-left: 14px; margin: 4px 0; }
            a { color: #0284c7; text-decoration: none; }
            .border-b { border-bottom: 1px solid #e2e8f0; }
            .grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; }
            .space-y-4 > * + * { margin-top: 8px; }
            .space-y-6 > * + * { margin-top: 12px; }
            .space-y-3 > * + * { margin-top: 6px; }
            .p-3\.5, .p-3 { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 8px 10px; }
            .flex { display: flex; }
            .flex-col { flex-direction: column; }
            .flex-wrap { flex-wrap: wrap; }
            .justify-between { justify-content: space-between; }
            .items-center { align-items: center; }
            .gap-1 { gap: 4px; }
            .gap-3 { gap: 12px; }
            .text-xs { font-size: 11px; }
            .text-sm { font-size: 12px; }
            .text-cyan-400, .text-cyan-300, .text-emerald-400, .text-emerald-300, .text-violet-400, .text-amber-400 { color: #0284c7 !important; }
            .text-slate-300, .text-slate-400 { color: #475569 !important; }
            .text-white { color: #0f172a !important; }
            .bg-slate-900\/60, .bg-\[\#090d16\] { background: #f8fafc !important; }
          </style>
        </head>
        <body>
          ${printElem.innerHTML}
        </body>
      </html>
    `);
    doc.close();

    setTimeout(() => {
      iframe.contentWindow?.focus();
      iframe.contentWindow?.print();
      setTimeout(() => {
        if (document.body.contains(iframe)) {
          document.body.removeChild(iframe);
        }
      }, 1000);
    }, 300);
  }
}
