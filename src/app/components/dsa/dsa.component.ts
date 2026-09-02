import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-dsa',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="dsa" class="section-wrapper relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- HEADER -->
        <div class="section-header">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/80 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3">
            <span>// PROBLEM SOLVING & LEETCODE</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Data Structures & <span class="gradient-text-violet">Algorithms</span>
          </h2>
          <p class="mt-4 text-slate-300 text-base">
            Active problem solver with 200+ LeetCode problems solved across core algorithmic domains.
          </p>
        </div>

        <!-- MAIN DSA HIGHLIGHT CARD (CLEAN & CENTERED) -->
        <div class="glass-card p-8 sm:p-12 border border-amber-500/30 mb-12 relative overflow-hidden text-center max-w-4xl mx-auto">
          
          <!-- Background Glow -->
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div class="relative z-10 flex flex-col items-center space-y-6">
            
            <div class="w-36 h-36 rounded-full border-4 border-amber-500/40 flex flex-col items-center justify-center bg-amber-500/5 shadow-2xl shadow-amber-500/20">
              <span class="text-4xl sm:text-5xl font-extrabold font-heading text-amber-400">200+</span>
              <span class="text-xs font-mono text-slate-300 uppercase tracking-widest mt-1">Problems Solved</span>
            </div>

            <div class="max-w-xl">
              <h3 class="text-2xl font-bold font-heading text-white mb-2">LeetCode Profile &#64;44_mayank</h3>
              <p class="text-slate-300 text-sm leading-relaxed">
                Demonstrated algorithmic problem solving across Arrays, Strings, Two Pointers, Trees, Dynamic Programming, Heap/Queue, and SQL query optimizations.
              </p>
            </div>

            <!-- Topic Pills -->
            <div class="flex flex-wrap justify-center gap-2 max-w-2xl">
              <span class="px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-white/10 text-xs font-mono text-slate-300">
                Arrays & Hashing
              </span>
              <span class="px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-white/10 text-xs font-mono text-slate-300">
                Two Pointers & Sliding Window
              </span>
              <span class="px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-white/10 text-xs font-mono text-slate-300">
                Trees & BST
              </span>
              <span class="px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-white/10 text-xs font-mono text-slate-300">
                Dynamic Programming
              </span>
              <span class="px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-white/10 text-xs font-mono text-slate-300">
                Stack, Queue & Heap
              </span>
              <span class="px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-white/10 text-xs font-mono text-slate-300">
                SQL & Database Queries
              </span>
            </div>

            <div class="pt-2">
              <a 
                [href]="dsa.leetcodeProfile"
                target="_blank"
                rel="noopener"
                class="px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-bold text-sm font-mono transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 hover:scale-105"
              >
                <span>View Official LeetCode Profile &#64;44_mayank</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            </div>

          </div>

        </div>

        <!-- ACHIEVEMENTS CARDS -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          <div class="glass-card p-6 border border-emerald-500/20 flex flex-col justify-between h-full">
            <div>
              <div class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xl mb-4">
                🚀
              </div>
              <h3 class="text-lg font-bold font-heading text-white mb-2">Infosys Production Speedboost</h3>
              <p class="text-xs text-slate-300 leading-relaxed">
                Optimized complex enterprise SQL queries, reducing production job runtime from 50–70 minutes down to 30–45 minutes (~35-40% execution speedup).
              </p>
            </div>
          </div>

          <div class="glass-card p-6 border border-cyan-500/20 flex flex-col justify-between h-full">
            <div>
              <div class="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-xl mb-4">
                🌐
              </div>
              <h3 class="text-lg font-bold font-heading text-white mb-2">Distributed Systems Playground</h3>
              <p class="text-xs text-slate-300 leading-relaxed">
                Architected NodeLabCanvas, an interactive SVG drag-and-drop simulation engine built with Django Channels & Angular RxJS for real-time WebSocket state streaming.
              </p>
            </div>
          </div>

          <div class="glass-card p-6 border border-violet-500/20 flex flex-col justify-between h-full">
            <div>
              <div class="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center text-xl mb-4">
                🧠
              </div>
              <h3 class="text-lg font-bold font-heading text-white mb-2">AI Vector Semantic Search</h3>
              <p class="text-xs text-slate-300 leading-relaxed">
                Engineered 384-dimensional vector embeddings in PostgreSQL using Sentence-Transformers (all-MiniLM-L6-v2) for sub-millisecond semantic social search in ConnectNest.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  `
})
export class DsaComponent {
  dsa = PORTFOLIO_DATA.dsaStats;
}
