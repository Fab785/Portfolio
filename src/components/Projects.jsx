import React from 'react';
import screenshot4 from "../assets/Skinstric.png";
import screenshot7 from "../assets/Summarist.png";

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 border-b border-zinc-800 pb-4">
        Featured Work
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Project Card 1: Summarist Clone */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-all duration-300 group flex flex-col">
          <div className="bg-zinc-950 px-4 py-3 flex items-center gap-2 border-b border-zinc-800">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="text-xs text-zinc-500 font-mono mx-auto bg-zinc-900 px-3 py-1 rounded-md border border-zinc-800/50">
              summarist-beryl.vercel.app
            </div>
          </div>
          <div className="overflow-hidden bg-zinc-950 h-48 md:h-64 relative">
            <img 
              src={screenshot7} 
              alt="Summarist Clone" 
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-white mb-2">Summarist Clone</h3>
            <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
              Responsive audiobook platform built with React & Firebase. Features authentication, dynamic routing, and audio playback.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-zinc-800 text-lime-400 text-xs px-2.5 py-1 rounded-md font-mono">React</span>
              <span className="bg-zinc-800 text-lime-400 text-xs px-2.5 py-1 rounded-md font-mono">JavaScript</span>
              <span className="bg-zinc-800 text-lime-400 text-xs px-2.5 py-1 rounded-md font-mono">Firebase</span>
            </div>
            <div className="flex items-center gap-4 pt-4 border-t border-zinc-800 mt-auto">
              <a href="https://summarist-beryl.vercel.app/#/" target="_blank" rel="noopener noreferrer" className="text-sm text-lime-400 hover:underline font-medium">
                Live Demo ↗
              </a>
              <a href="https://github.com/fab785" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-white font-medium">
                Source Code ↗
              </a>
            </div>
          </div>
        </div>

        {/* Project Card 2: Skinstric */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-all duration-300 group flex flex-col">
          <div className="bg-zinc-950 px-4 py-3 flex items-center gap-2 border-b border-zinc-800">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="text-xs text-zinc-500 font-mono mx-auto bg-zinc-900 px-3 py-1 rounded-md border border-zinc-800/50">
              fab785.github.io/skinstric
            </div>
          </div>
          <div className="overflow-hidden bg-zinc-950 h-48 md:h-64 relative">
            <img 
              src={screenshot4} 
              alt="Skinstric Project" 
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-white mb-2">Skinstric</h3>
            <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
              A clean skincare brand web app. Built with Next.js for high performance and Tailwind CSS for modern responsive styling.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-zinc-800 text-lime-400 text-xs px-2.5 py-1 rounded-md font-mono">React</span>
              <span className="bg-zinc-800 text-lime-400 text-xs px-2.5 py-1 rounded-md font-mono">Next.js</span>
              <span className="bg-zinc-800 text-lime-400 text-xs px-2.5 py-1 rounded-md font-mono">Tailwind</span>
            </div>
            <div className="flex items-center gap-4 pt-4 border-t border-zinc-800 mt-auto">
              <a href="https://fab785.github.io/skinstric/" target="_blank" rel="noopener noreferrer" className="text-sm text-lime-400 hover:underline font-medium">
                Live Demo ↗
              </a>
              <a href="https://github.com/fab785" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-white font-medium">
                Source Code ↗
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}