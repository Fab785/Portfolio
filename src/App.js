import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import AllProjects from "./pages/AllProjects.jsx";
import AboutMe from "./pages/AboutMe.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
    </>
  );
}

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="h-screen w-full bg-zinc-950 text-white flex flex-col justify-between overflow-hidden">
      <Navbar />
      <ScrollToTop />

      <main className="flex-grow flex flex-col justify-center">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/all-projects" element={<AllProjects />} />
          <Route path="/my-story" element={<AboutMe />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </div>
  );
}