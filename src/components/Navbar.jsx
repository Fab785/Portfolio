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
    scrolled ? "w-[260px]" : "w-[507.95px]"
  } ${scrolled ? "scale-90" : "scale-100"}`}
  style={{ height: "56px" }}
>
  <div className="flex items-center justify-between w-full h-full px-2 bg-black/90 backdrop-blur-md rounded-full border border-neutral-800 shadow-md">
    {/* Profile Image */}
    <img
      src={profileImg}
      alt="Profile"
      className="w-10 h-10 rounded-full object-cover"
    />

    {/* Center buttons (only visible when not scrolled) */}
    {!scrolled ? (
      <div className="flex items-center gap-[16px] ml-[48px] mr-[24px]">
        {[
          { label: "Home", width: 44.56 },
          { label: "About", width: 44.09 },
          { label: "Projects", width: 59.86 },
        ].map(({ label, width }) => (
          <a
            key={label}
            href={`#${label.toLowerCase()}`}
            className="relative cursor-pointer overflow-hidden"
            style={{ width: `${width}px`, height: "24px" }}
          >
            <div
              className="transition-transform duration-300 ease-in-out will-change-transform"
              style={{ height: "48px" }}
            >
              <span className="block text-white text-base font-light leading-[24px] h-6">
                {label}
              </span>
              <span className="block text-[#A3E635] text-base font-light leading-[24px] h-6">
                {label}
              </span>
            </div>

            <style jsx>{`
              a:hover > div {
                transform: translateY(-24px);
              }
            `}</style>
          </a>
        ))}
      </div>
    ) : (
      <div className="ml-auto mr-auto" />
    )}

    {/* Contact or Available */}
    {!scrolled ? (
      <a
        href="#contact"
        className="relative group flex items-center justify-center rounded-full overflow-hidden text-base"
        style={{
          width: "117.93px",
          height: "40px",
          backgroundColor: "#ffffff",
        }}
      >
        <span className="absolute inset-0 z-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out bg-lime-400" />
        <span className="relative z-10 text-black">Contact</span>
      </a>
    ) : (
      <div className="flex items-center gap-2 text-white text-base mr-3 ml-auto">
        <span>Available for work</span>
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
        </span>
      </div>
    )}
  </div>
</div>

  );
}


























