import React, { useState } from 'react';
import { initialPortfolioData } from './data/portfolioData';

export default function App() {
  const [data, setData] = useState(initialPortfolioData);
  const [theme, setTheme] = useState('dark');
  const [activeFilter, setActiveFilter] = useState('All');
  const [showReportModal, setShowReportModal] = useState(false);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#0a0d14] text-slate-100' : 'bg-slate-50 text-slate-900'} antialiased`}>
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-opacity-80 border-b border-slate-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center font-bold text-white">
            {data.personal.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <div className="font-bold text-base">{data.personal.name}</div>
            <div className="text-xs text-slate-400 font-mono">ID: {data.personal.enrollmentNo}</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="hover:text-indigo-400">About</a>
          <a href="#skills" className="hover:text-indigo-400">Tech Stack</a>
          <a href="#projects" className="hover:text-indigo-400">Projects</a>
          <a href="#ai-tools" className="hover:text-indigo-400">AI Tools</a>
          <a href="#profiles" className="hover:text-indigo-400">Profiles</a>
          <a href="#contact" className="hover:text-indigo-400">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => setShowReportModal(true)}
            className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-500 shadow transition-all"
          >
            🎓 Course PDF Report
          </button>
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg border border-slate-700 text-xs"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-20">
        
        {/* Hero */}
        <section className="text-center py-12 space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
            🟢 Ready for Evaluation & Deployment
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight">
            Hi, I'm <span className="text-indigo-400">{data.personal.name}</span>
          </h1>
          <p className="text-2xl text-slate-300 font-medium">{data.personal.title}</p>
          <p className="max-w-2xl mx-auto text-slate-400">{data.personal.bio}</p>

          <div className="flex justify-center gap-4 pt-4">
            <a href={data.socialLinks.linkedin} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 text-xs font-semibold">
              LinkedIn
            </a>
            <a href={data.socialLinks.github} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold">
              GitHub
            </a>
            <a href={data.socialLinks.leetcode} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-amber-600/20 text-amber-400 border border-amber-500/30 text-xs font-semibold">
              LeetCode
            </a>
            <a href={data.socialLinks.behance} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-sky-600/20 text-sky-400 border border-sky-500/30 text-xs font-semibold">
              Behance
            </a>
          </div>
        </section>

        {/* Tech Stack */}
        <section id="skills" className="space-y-6">
          <h2 className="text-3xl font-bold text-center">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {data.techCategories.map(cat => (
              <div key={cat.category} className="p-6 rounded-2xl bg-[#111622] border border-slate-800 space-y-3">
                <h3 className="font-bold text-indigo-400">{cat.category}</h3>
                <p className="text-xs text-slate-400">{cat.description}</p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cat.skills.map(s => (
                    <span key={s.name} className="text-xs bg-slate-800 px-2 py-1 rounded text-slate-300">
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI Tools */}
        <section id="ai-tools" className="space-y-6">
          <h2 className="text-3xl font-bold text-center">AI Tools Utilized</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.aiToolsBreakdown.map(tool => (
              <div key={tool.tool} className="p-6 rounded-2xl bg-[#111622] border border-slate-800 space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-indigo-300">{tool.tool}</h3>
                  <span className="text-xs font-mono bg-indigo-500/10 text-indigo-400 px-2.5 py-1 rounded-full border border-indigo-500/20">{tool.badge}</span>
                </div>
                <p className="text-sm text-slate-300">{tool.description}</p>
                <ul className="text-xs text-slate-400 space-y-1 list-disc pl-4">
                  {tool.benefits.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
