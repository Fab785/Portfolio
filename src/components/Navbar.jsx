import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import profileImg from "../assets/Fab.jpg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setScrolled(false);
      } else if (currentScrollY > prevScrollY.current) {
        setScrolled(true);
      } else if (currentScrollY < prevScrollY.current) {
        setScrolled(false);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    prevScrollY.current = window.scrollY;
    setScrolled(window.scrollY > 0);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrolled) setMenuOpen(false);
  }, [scrolled]);

  const menuLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "/projects" },
  ];

  const mobileLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "/projects" },
    { label: "Blogs", href: "#blogs" },
  ];

  return (
    <>
      {/* Large Screen Navbar */}
      <div
        className={`hidden sm:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled ? "w-[260px]" : "w-[507.95px]"
        } ${scrolled ? "scale-90" : "scale-100"}`}
        style={{ height: "56px" }}
      >
        <div className="flex items-center justify-between w-full h-full px-2 bg-black/90 backdrop-blur-md rounded-full border border-neutral-800 shadow-md">
          <img
            src={profileImg}
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />

          {!scrolled ? (
            <div className="flex items-center gap-[16px] ml-[48px] mr-[24px]">
              {menuLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  to={href}
                  className="relative cursor-pointer overflow-hidden"
                  style={{ width: `${label === "Projects" ? 59.86 : label === "Home" ? 44.56 : 44.09}px`, height: "24px" }}
                >
                  <div
                    className="transition-transform duration-300 ease-in-out will-change-transform"
                    style={{ height: "48px" }}
                  >
                    <span className="block text-white text-base font-light leading-[24px] h-6">
                      {label}
                    </span>
                    <span className="block text-[#B9F43F] text-base font-light leading-[24px] h-6">
                      {label}
                    </span>
                  </div>

                  <style jsx>{`
                    a:hover > div {
                      transform: translateY(-24px);
                    }
                  `}</style>
                </Link>
              ))}
            </div>
          ) : (
            <div className="ml-auto mr-auto" />
          )}

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
            <div className="flex items-center gap-2 text-white text-base mr-3 ml-8">
              <span>Available for work</span>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Small Screen Navbar */}
      <nav className="sm:hidden fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[260px] transition-all duration-500">
        <div
          className={`overflow-hidden border border-neutral-800 shadow-md transition-[padding,max-height,background-color,backdrop-filter] duration-500 ease-in-out ${
            menuOpen
              ? "bg-black/50 backdrop-blur-xl py-6 max-h-[480px] rounded-3xl"
              : "bg-black/90 backdrop-blur-md h-14 rounded-full"
          }`}
        >
          {/* Top Row */}
          <div className="flex items-center justify-between px-4 h-14">
            <div className="flex items-center">
              <img
                src={profileImg}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>

            {!menuOpen && (
              <div className="flex items-center gap-2 text-white text-sm font-medium select-none">
                <span>Available for work</span>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
              </div>
            )}

            {/* Toggle Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="relative w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute left-0 top-1/2 w-6 h-0.5 bg-black transform transition-all duration-300 ${
                    menuOpen ? "rotate-45 -translate-y-1/2" : "-translate-y-2"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 w-6 h-0.5 bg-black transform transition-all duration-300 ${
                    menuOpen ? "-rotate-45 -translate-y-1/2" : "translate-y-2"
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Expanding menu content */}
          <div
            className={`flex flex-col items-center space-y-5 mt-6 transition-opacity duration-500 ${
              menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {mobileLinks.map(({ label, href }) => (
              <Link
                key={label}
                to={href}
                onClick={() => setMenuOpen(false)}
                className="text-white font-normal text-lg hover:text-lime-400 transition"
              >
                {label}
              </Link>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="inline-block bg-lime-400 text-black font-semibold rounded-full px-6 py-2 text-lg hover:bg-lime-500 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}






































