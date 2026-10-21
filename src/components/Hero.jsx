import React from 'react';
import { Link } from 'react-router-dom';
import screenshotSummarist from "../assets/Summarist.png";
import screenshotSkinstric from "../assets/Skinstric.png";
import screenshotXClone from "../assets/Xclone.png";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-6 pb-2">
      {/* Top Grid */}
      <div className="grid lg:grid-cols-12 gap-8 items-center mb-6">
        
        {/* Left Intro Column */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mb-3">
            Hi, I'm <span className="text-lime-400">Fabrizio Terribile</span>.<br />
            Front-End Developer.
          </h1>

          <p className="text-sm md:text-base text-zinc-400 max-w-xl mb-6 leading-relaxed">
            I build fast, responsive, and accessible web applications using <strong className="text-zinc-200">React</strong>, <strong className="text-zinc-200">JavaScript</strong>, and modern CSS frameworks.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link 
              to="/projects" 
              className="bg-lime-400 hover:bg-lime-300 text-zinc-950 font-semibold px-5 py-2.5 text-sm rounded-xl transition-all"
            >
              View All Projects
            </Link>
            <a 
              href="https://github.com/fab785" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-zinc-900 hover:bg-zinc-800 text-white font-medium px-5 py-2.5 text-sm rounded-xl border border-zinc-800 transition-all"
            >
              GitHub Profile
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white font-medium text-sm px-3 py-2.5 transition-colors"
            >
              View Resume ↗
            </a>
          </div>
        </div>

        {/* Right Side: Featured Card (Summarist - Top) */}
        <div className="lg:col-span-5 w-full">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all shadow-xl group">
            <div className="bg-zinc-950 px-3 py-2 flex items-center gap-2 border-b border-zinc-800">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
              </div>
              <div className="text-[10px] text-zinc-500 font-mono mx-auto bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800/50">
                summarist-beryl.vercel.app
              </div>
            </div>
            
            <div className="overflow-hidden bg-zinc-950 h-40 relative">
              <img 
                src={screenshotSummarist} 
                alt="Summarist Clone" 
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-4">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-base font-bold text-white">Summarist Clone</h3>
                <span className="text-[10px] font-mono text-lime-400 bg-lime-400/10 border border-lime-400/20 px-2 py-0.5 rounded">Featured</span>
              </div>
              <p className="text-zinc-400 text-xs mb-3">
                Audiobook app built with React & Firebase during my Frontend Simplified internship.
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-zinc-800 text-xs">
                <span className="text-zinc-500 font-mono text-[11px]">React • Firebase • Tailwind</span>
                <a href="https://summarist-beryl.vercel.app/#/" target="_blank" rel="noopener noreferrer" className="text-lime-400 font-semibold hover:underline">
                  Live App ↗
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom 2 Project Cards Row */}
      <div className="pt-4 border-t border-zinc-800/60">
        <h2 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
          <span>Featured Projects</span>
          <span className="text-[11px] font-normal text-zinc-500 font-mono">(Direct Work Samples)</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Bottom Card 1: X-Clone */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-all group p-3 flex gap-3 items-center">
            <div className="w-20 h-14 bg-zinc-950 rounded-lg overflow-hidden flex-shrink-0 border border-zinc-800">
              <img src={screenshotXClone} alt="X-Clone" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform" />
            </div>
            <div className="flex-grow">
              <h4 className="text-sm font-bold text-white">X-Clone</h4>
              <p className="text-[11px] text-zinc-400 mb-1">Social media feed application built with modern web tools.</p>
              <a href="https://github.com/fab785" target="_blank" rel="noopener noreferrer" className="text-[11px] text-lime-400 font-medium hover:underline">
                Open Live Demo ↗
              </a>
            </div>
          </div>

          {/* Bottom Card 2: Skinstric */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-all group p-3 flex gap-3 items-center">
            <div className="w-20 h-14 bg-zinc-950 rounded-lg overflow-hidden flex-shrink-0 border border-zinc-800">
              <img src={screenshotSkinstric} alt="Skinstric" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform" />
            </div>
            <div className="flex-grow">
              <h4 className="text-sm font-bold text-white">Skinstric</h4>
              <p className="text-[11px] text-zinc-400 mb-1">AI-driven skincare diagnostic app with demographic & facial analysis.</p>
              <a href="https://fab785.github.io/skinstric/" target="_blank" rel="noopener noreferrer" className="text-[11px] text-lime-400 font-medium hover:underline">
                Open Live Demo ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}





























