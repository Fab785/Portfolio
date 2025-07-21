import { useEffect, useState } from "react";
import profileImg from "../assets/Fab.jpg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled ? "scale-95" : "scale-100"
      }`}
      style={{ width: "507.95px", height: "56px" }}
    >
      <div className="flex items-center justify-between w-full h-full px-2 bg-black/90 backdrop-blur-md rounded-full border border-neutral-800 shadow-md">
        {/* Left: Profile Image */}
        <img
          src={profileImg}
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />

        {/* Center: Buttons */}
        {!scrolled ? (
  <div className="flex items-center gap-[16px] ml-[48px] mr-[24px]">
    <a
      href="#home"
      className="text-white text-base font-light hover:underline"
      style={{ width: "44.56px", height: "24px" }}
    >
      Home
    </a>
    <a
      href="#about"
      className="text-white text-base font-light hover:underline"
      style={{ width: "44.09px", height: "24px" }}
    >
      About
    </a>
    <a
      href="#projects"
      className="text-white text-base font-light hover:underline"
      style={{ width: "59.86px", height: "24px" }}
    >
      Projects
    </a>
  </div>
) : (
  <div className="ml-auto mr-auto"></div>
)}





        {/* Right: Contact OR Available */}
        {!scrolled ? (
          <a
            href="#contact"
            className="flex items-center justify-center bg-white text-black text-sm rounded-full transition hover:bg-gray-200"
            style={{
              width: "117.93px",
              height: "40px",
            }}
          >
            Contact
          </a>
        ) : (
          <div className="flex items-center gap-2 text-white text-sm mr-3 ml-auto">
            <span>Available for work</span>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}




















