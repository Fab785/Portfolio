import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FolderCode, User, Home } from "lucide-react";
import profileImg from "../assets/Fab.jpg";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/", icon: <Home className="w-4 h-4" /> },
    { label: "Projects", path: "/projects", icon: <FolderCode className="w-4 h-4" /> },
    { label: "About", path: "/my-story", icon: <User className="w-4 h-4" /> },
  ];

  return (
    <aside className="fixed top-8 left-6 z-50 flex flex-col items-start">
      <div className="bg-zinc-900/90 backdrop-blur-md border border-zinc-800 p-2 rounded-2xl shadow-2xl flex flex-col items-center gap-3">
        <Link to="/" className="flex items-center">
          <img
            src={profileImg}
            alt="Fabrizio"
            className="w-7 h-7 rounded-full object-cover border border-zinc-700"
          />
        </Link>

        <div className="w-5 h-[1px] bg-zinc-800" />

        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`p-2 rounded-xl text-xs font-medium transition-all flex items-center justify-center ${
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