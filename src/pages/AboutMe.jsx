import React from "react";
import { Link } from "react-router-dom";
import { User, Code2, GraduationCap, ArrowLeft } from "lucide-react";
import profileImg from "../assets/Fab.jpg";

export default function AboutMe() {
  return (
    <section className="w-full min-h-screen bg-zinc-950 text-white flex flex-col justify-center items-center px-6 md:px-12 py-24 relative overflow-y-auto">
      <div className="max-w-5xl w-full">
        {/* Header & Back Link */}
        <div className="flex items-center justify-between mb-8 border-b border-zinc-800 pb-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              About <span className="text-lime-400">Me</span>
            </h1>
            <p className="text-zinc-400 text-sm md:text-base mt-1">
              Frontend developer, continuous learner, and problem solver.
            </p>
          </div>
          <Link
            to="/"
            className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 px-4 py-2 rounded-xl text-xs font-semibold transition-all"
          >
            <ArrowLeft className="w-4 h-4 text-lime-400" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Photo & Quick Info Card */}
          <div className="md:col-span-4 bg-zinc-900 border border-zinc-800 rounded-2xl p-5 flex flex-col items-center text-center">
            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800 mb-4">
              <img
                src={profileImg}
                alt="Fabrizio Terribile"
                className="w-full h-full object-cover object-[65%_center]"
              />
            </div>
            <h3 className="text-lg font-bold text-white">Fabrizio Terribile</h3>
            <p className="text-xs font-mono text-lime-400 mb-3">Front-End Developer</p>
            <div className="w-full pt-3 border-t border-zinc-800 text-left text-xs text-zinc-400 space-y-1.5 font-mono">
              <div className="flex justify-between">
                <span>Location:</span>
                <span className="text-white">Remote / US</span>
              </div>
              <div className="flex justify-between">
                <span>Focus:</span>
                <span className="text-white">React & Tailwind</span>
              </div>
            </div>
          </div>

          {/* Right Column: Structured Modular Cards */}
          <div className="md:col-span-8 flex flex-col gap-4">
            
            {/* Card 1: Background & Journey */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <div className="flex items-center gap-2.5 mb-3">
                <GraduationCap className="w-5 h-5 text-lime-400" />
                <h4 className="text-base font-bold text-white">The Journey</h4>
              </div>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                I began my formal web development journey at Frontend Simplified, completing an intensive program and gaining hands-on internship experience building production-ready applications. I am deeply committed to writing clean, scalable code.
              </p>
            </div>

            {/* Card 2: Philosophy & Approach */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <div className="flex items-center gap-2.5 mb-3">
                <Code2 className="w-5 h-5 text-lime-400" />
                <h4 className="text-base font-bold text-white">Development Approach</h4>
              </div>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                I specialize in turning complex design concepts into fast, responsive, and accessible user interfaces. Whether it's state management in React, responsive layouts with Tailwind CSS, or integrating dynamic APIs, my focus is always on user experience and code quality.
              </p>
            </div>

            {/* Card 3: Looking Ahead */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <div className="flex items-center gap-2.5 mb-3">
                <User className="w-5 h-5 text-lime-400" />
                <h4 className="text-base font-bold text-white">Looking Ahead</h4>
              </div>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                I'm actively seeking junior front-end developer roles where I can collaborate with talented engineering teams, contribute to high-impact products, and continue growing as a software professional.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}