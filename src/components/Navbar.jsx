import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FolderCode, User, Home } from "lucide-react";
import profileImg from "../assets/Fab.jpg";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/", icon: <Home className="w-5 h-5 md:w-4 md:h-4" /> },
    { label: "Projects", path: "/projects", icon: <FolderCode className="w-5 h-5 md:w-4 md:h-4" /> },
    { label: "About", path: "/my-story", icon: <User className="w-5 h-5 md:w-4 md:h-4" /> },
  ];

  return (
    <aside className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-xs md:translate-x-0 md:top-8 md:left-6 md:bottom-auto md:w-auto">
      <div className="bg-zinc-900/90 backdrop-blur-md border border-zinc-800 p-2 rounded-2xl shadow-2xl flex flex-row md:flex-col items-center justify-around md:justify-start gap-2 md:gap-3">
        {/* Profile Image - Hidden on mobile bottom bar, visible on desktop */}
        <Link to="/" className="hidden md:flex items-center">
          <img
            src={profileImg}
            alt="Fabrizio"
            className="w-7 h-7 rounded-full object-cover border border-zinc-700"
          />
        </Link>

        {/* Divider Line - Hidden on mobile */}
        <div className="hidden md:block w-5 h-[1px] bg-zinc-800" />

        {/* Navigation Links */}
        <nav className="flex flex-row md:flex-col justify-around w-full md:w-auto gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`p-2.5 md:p-2 rounded-xl text-xs font-medium transition-all flex items-center justify-center ${
                  isActive
                    ? "bg-zinc-800 text-lime-400 font-semibold border border-zinc-700/60"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800/40"
                }`}
                title={item.label}
              >
                {item.icon}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}