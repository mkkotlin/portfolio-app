import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header 
      class="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      [ngClass]="{
        'bg-[#070a13]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-xl shadow-black/50': isScrolled || mobileMenuOpen,
        'bg-transparent py-4 sm:py-5': !isScrolled && !mobileMenuOpen
      }"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        <!-- Logo / Name Brand -->
        <a href="#hero" class="flex items-center gap-2.5 sm:gap-3 group">
          <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-violet-600 p-[1px] shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform shrink-0">
            <div class="w-full h-full bg-[#0d1322] rounded-[11px] flex items-center justify-center font-heading font-extrabold text-cyan-400 text-base sm:text-lg">
              MK
            </div>
          </div>
          <div>
            <span class="font-heading font-bold text-white tracking-tight text-base sm:text-lg group-hover:text-cyan-400 transition-colors block leading-tight">
              Mayank Kumar
            </span>
            <span class="block text-[10px] sm:text-[11px] font-mono text-cyan-400/90 uppercase tracking-wider -mt-0.5">
              Python Backend Dev
            </span>
          </div>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="hidden lg:flex items-center gap-1 bg-slate-900/70 backdrop-blur-lg border border-white/10 px-4 py-1.5 rounded-full shadow-inner">
          <a 
            *ngFor="let item of navItems" 
            [href]="item.href" 
            (click)="setActive(item.id)"
            class="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200"
            [ngClass]="{
              'bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm shadow-cyan-500/10': activeSection === item.id,
              'text-slate-300 hover:text-white hover:bg-white/5': activeSection !== item.id
            }"
          >
            {{ item.label }}
          </a>
        </nav>

        <!-- Desktop Action CTAs -->
        <div class="hidden lg:flex items-center gap-3">
          <button 
            (click)="onOpenResume()"
            class="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs transition-all shadow-md shadow-cyan-500/20 flex items-center gap-2 hover:scale-105 active:scale-95"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            Resume CV
          </button>
          
          <a 
            href="#contact" 
            (click)="setActive('contact')"
            class="px-4 py-2 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 font-semibold text-xs border border-emerald-500/40 hover:border-emerald-400 transition-all flex items-center gap-1.5 shadow-sm shadow-emerald-900/30 hover:scale-105 active:scale-95"
          >
            <svg class="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <span>📞 Call / Contact</span>
          </a>
        </div>

        <!-- Mobile Header Bar Triggers -->
        <div class="flex items-center gap-2 lg:hidden">
          <a 
            href="#contact" 
            (click)="setActive('contact')"
            class="px-2.5 py-1.5 rounded-lg bg-emerald-950/90 text-emerald-300 font-bold text-xs border border-emerald-500/40 flex items-center gap-1 shadow-sm"
          >
            <span>📞 Call</span>
          </a>

          <button 
            (click)="onOpenResume()"
            class="px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs flex items-center gap-1 shadow-sm"
          >
            Resume
          </button>

          <button 
            (click)="toggleMobileMenu()"
            class="p-2 rounded-xl bg-slate-800/90 border border-white/10 text-slate-200 hover:text-cyan-400 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <svg *ngIf="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg *ngIf="mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

      </div>

      <!-- Mobile Navigation Drawer -->
      <div 
        *ngIf="mobileMenuOpen"
        class="lg:hidden px-4 pt-3 pb-6 bg-[#070a13]/98 backdrop-blur-2xl border-b border-white/10 animate-fade-in shadow-2xl flex flex-col gap-1.5 mt-2"
      >
        <a 
          *ngFor="let item of navItems" 
          [href]="item.href"
          (click)="mobileMenuOpen = false; setActive(item.id)"
          class="px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between"
          [ngClass]="{
            'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30': activeSection === item.id,
            'text-slate-300 hover:bg-white/5 active:bg-white/10': activeSection !== item.id
          }"
        >
          <span>{{ item.label }}</span>
          <span class="text-xs text-slate-500 font-mono">➔</span>
        </a>

        <div class="pt-3 border-t border-white/10 mt-2 flex flex-col gap-2">
          <a 
            href="#contact"
            (click)="mobileMenuOpen = false; setActive('contact')"
            class="w-full py-3 rounded-xl bg-emerald-950/90 text-emerald-300 border border-emerald-500/40 font-bold text-sm text-center flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30"
          >
            <span>📞 Call / Contact Phone</span>
          </a>

          <button 
            (click)="onOpenResume(); mobileMenuOpen = false"
            class="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm text-center flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            View / Download Resume CV
          </button>
        </div>
      </div>
    </header>
  `
})
export class NavbarComponent {
  @Output() openResume = new EventEmitter<void>();

  isScrolled = false;
  mobileMenuOpen = false;
  activeSection = 'hero';

  navItems = [
    { id: 'hero', label: 'Home', href: '#hero' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'projects', label: 'Projects ⭐', href: '#projects' },
    { id: 'tech-stack', label: 'Tech Stack', href: '#tech-stack' },
    { id: 'dsa', label: 'DSA & LeetCode', href: '#dsa' },
    { id: 'concepts', label: 'Core Concepts', href: '#concepts' },
    { id: 'timeline', label: 'Timeline', href: '#timeline' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 40;
  }

  setActive(id: string) {
    this.activeSection = id;
  }

  onOpenResume() {
    this.openResume.emit();
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
