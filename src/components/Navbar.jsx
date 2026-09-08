import { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import profileImg from "../assets/Fab.jpg";

export default function Navbar({ openContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const prevScrollY = useRef(0);

  const location = useLocation();
  const navigate = useNavigate();

  // Shrink-on-scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) setScrolled(false);
      else if (currentScrollY > prevScrollY.current) setScrolled(true);
      else if (currentScrollY < prevScrollY.current) setScrolled(false);

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
    { label: "Home", to: "/" },
    { label: "About", to: "/my-story" },
    { label: "Projects", to: "/projects" },
  ];

  const mobileLinks = menuLinks;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      scrollToTop();
    } else {
      navigate("/");
    }
    setMenuOpen(false);
  };

  const widthFor = (label) =>
    label === "Projects" ? 59.86 : label === "Home" ? 44.56 : 44.09;

  return (
    <>
      {/* LARGE NAVBAR */}
      <div
        className={`hidden sm:flex fixed top-6 left-1/2 -translate-x-1/2 z-[200] transition-all duration-500 ${
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
              {menuLinks.map(({ label, to }) =>
                label === "Home" ? (
                  <button
                    key={label}
                    onClick={handleHomeClick}
                    className="relative group cursor-pointer overflow-hidden"
                    style={{ width: widthFor(label), height: "24px" }}
                  >
                    <div
                      className="transition-transform duration-300 ease-in-out group-hover:-translate-y-6"
                      style={{ height: "48px" }}
                    >
                      <span className="block text-white text-base font-light leading-[24px] h-6">
                        {label}
                      </span>
                      <span className="block text-[#B9F43F] text-base font-light leading-[24px] h-6">
                        {label}
                      </span>
                    </div>
                  </button>
                ) : (
                  <Link
                    key={label}
                    to={to}
                    className="relative group cursor-pointer overflow-hidden"
                    style={{ width: widthFor(label), height: "24px" }}
                  >
                    <div
                      className="transition-transform duration-300 ease-in-out group-hover:-translate-y-6"
                      style={{ height: "48px" }}
                    >
                      <span className="block text-white text-base font-light leading-[24px] h-6">
                        {label}
                      </span>
                      <span className="block text-[#B9F43F] text-base font-light leading-[24px] h-6">
                        {label}
                      </span>
                    </div>
                  </Link>
                )
              )}
            </div>
          ) : (
            <div className="ml-auto mr-auto" />
          )}

          {!scrolled ? (
            <button
              onClick={openContact}   // ✅ FIXED
              className="relative group flex items-center justify-center rounded-full overflow-hidden text-base"
              style={{
                width: "117.93px",
                height: "40px",
                backgroundColor: "#ffffff",
              }}
            >
              <span className="absolute inset-0 z-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out bg-lime-400" />
              <span className="relative z-10 text-black">Contact</span>
            </button>
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

      {/* MOBILE NAVBAR */}
      <nav className="sm:hidden fixed top-6 left-1/2 -translate-x-1/2 z-[200] w-[260px] transition-all duration-500">
        <div
          className={`overflow-hidden border border-neutral-800 shadow-md ${
            menuOpen
              ? "bg-black/50 backdrop-blur-xl py-6 rounded-3xl"
              : "bg-black/90 backdrop-blur-md h-14 rounded-full"
          }`}
        >
          <div className="flex items-center justify-between px-4 h-14">
            <img
              src={profileImg}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />

            {!menuOpen && (
              <div className="flex items-center gap-2 text-white text-sm">
                <span>Available for work</span>
              </div>
            )}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center"
            >
              ☰
            </button>
          </div>

          <div
            className={`flex flex-col items-center space-y-5 mt-6 transition-opacity duration-500 ${
              menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {mobileLinks.map(({ label, to }) =>
              label === "Home" ? (
                <button
                  key={label}
                  onClick={handleHomeClick}
                  className="text-white text-lg"
                >
                  {label}
                </button>
              ) : (
                <Link
                  key={label}
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-lg"
                >
                  {label}
                </Link>
              )
            )}

            <button
              onClick={() => {
                openContact();   // ✅ FIXED
                setMenuOpen(false);
              }}
              className="bg-lime-400 text-black font-semibold rounded-full px-6 py-2"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}















































