import React from "react";
import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-lime-400 text-black py-3 px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold">
      {/* Contact Details */}
      <div className="flex items-center gap-6">
        <a 
          href="mailto:fabrizioterribile@gmail.com" 
          className="hover:underline transition-all"
        >
          fabrizioterribile@gmail.com
        </a>
        <span className="text-black/30">|</span>
        <a 
          href="tel:15623885705" 
          className="hover:underline transition-all"
        >
          +1 (562) 388-5705
        </a>
      </div>

      {/* Social & Resume Links */}
      <div className="flex items-center gap-5 text-base">
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:opacity-75 transition-opacity"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/fab785" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:opacity-75 transition-opacity"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:opacity-75 transition-opacity"
          aria-label="Resume"
        >
          <FaFilePdf />
        </a>
      </div>
    </footer>
  );
}

