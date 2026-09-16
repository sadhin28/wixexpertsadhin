import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Sun,
  Moon,
  ArrowRight,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  /* ================= THEME ================= */

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isDark;

    setIsDark(nextTheme);

    if (nextTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  /* ================= SCROLL ================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 120;

      navLinks.forEach((link) => {
        const section = document.getElementById(
          link.name.toLowerCase()
        );

        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom =
            sectionTop + section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionBottom
          ) {
            setActiveSection(link.name.toLowerCase());
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= MOBILE BODY LOCK ================= */

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* ================= ESCAPE KEY ================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, []);

  /* ================= NAVIGATION ================= */

  const handleNavigation = (id) => {
    setIsOpen(false);

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <nav
        className={`
          fixed top-0 left-0 w-full z-50
          transition-all duration-500
          ${
            scrolled
              ? "py-2"
              : "py-3"
          }
        `}
      >
        <div
          className={`
            max-w-7xl mx-auto
            mx-3 sm:mx-4 lg:mx-auto
            px-4 sm:px-6 lg:px-6
            rounded-2xl
            border
            backdrop-blur-xl
            transition-all duration-500
            ${
              isDark
                ? "bg-gray-950/70 border-white/10"
                : "bg-white/80 border-gray-200 shadow-sm"
            }
          `}
        >
          <div className="h-16 flex items-center justify-between">

            {/* ================= LOGO ================= */}

            <button
              onClick={() => handleNavigation("home")}
              className="group flex items-center gap-3"
            >
              {/* Logo Mark */}

              <div
                className="
                  relative w-10 h-10
                  rounded-xl
                  flex items-center justify-center
                  bg-gradient-to-br from-blue-500 to-cyan-400
                  shadow-lg shadow-blue-500/20
                  group-hover:scale-105
                  transition-transform duration-300
                "
              >
                <span className="text-white font-bold text-sm">
                  WIX
                </span>
              </div>

              {/* Name */}

              <div className="hidden sm:block text-left">
                <p
                  className={`
                    text-sm font-bold tracking-wide
                    transition-colors
                    ${
                      isDark
                        ? "text-white"
                        : "text-gray-900"
                    }
                  `}
                >
                  TAOSIF BIN SADHIN
                </p>

                <p className="text-[10px] text-blue-500 tracking-wider">
                  WIX EXPERT
                </p>
              </div>
            </button>

            {/* ================= DESKTOP MENU ================= */}

            <div className="hidden md:flex items-center gap-1">

              {navLinks.map((link) => {
                const isActive =
                  activeSection ===
                  link.name.toLowerCase();

                return (
                  <button
                    key={link.href}
                    onClick={() =>
                      handleNavigation(
                        link.name.toLowerCase()
                      )
                    }
                    className={`
                      relative px-4 py-2.5
                      rounded-lg
                      text-sm font-medium
                      transition-all duration-300
                      ${
                        isActive
                          ? "text-blue-400 bg-blue-500/10"
                          : isDark
                          ? "text-gray-400 hover:text-white hover:bg-white/5"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                      }
                    `}
                  >
                    {link.name}

                    {/* Active Line */}

                    {isActive && (
                      <span
                        className="
                          absolute
                          left-1/2
                          -bottom-[1px]
                          -translate-x-1/2
                          w-5
                          h-[2px]
                          rounded-full
                          bg-blue-400
                        "
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* ================= RIGHT SIDE ================= */}

            <div className="flex items-center gap-2">

              {/* Theme Toggle */}

              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className={`
                  relative
                  w-10 h-10
                  rounded-xl
                  border
                  flex items-center justify-center
                  transition-all duration-300
                  ${
                    isDark
                      ? "border-white/10 bg-white/[0.03] hover:bg-white/[0.08]"
                      : "border-gray-200 bg-gray-50 hover:bg-gray-100"
                  }
                `}
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-blue-500" />
                )}
              </button>

              {/* Desktop Contact Button */}

              <button
                onClick={() =>
                  handleNavigation("contact")
                }
                className="
                  hidden md:inline-flex
                  items-center gap-2
                  px-4 py-2.5
                  rounded-xl
                  bg-blue-600
                  hover:bg-blue-500
                  text-white
                  text-sm font-semibold
                  transition-all duration-300
                  hover:-translate-y-0.5
                  shadow-lg shadow-blue-600/15
                "
              >
                Let's Talk

                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Mobile Menu */}

              <button
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
                className={`
                  md:hidden
                  w-10 h-10
                  rounded-xl
                  border
                  flex items-center justify-center
                  transition-all duration-300
                  ${
                    isDark
                      ? "border-white/10 bg-white/[0.03]"
                      : "border-gray-200 bg-gray-50"
                  }
                `}
              >
                <Menu
                  className={`w-5 h-5 ${
                    isDark
                      ? "text-white"
                      : "text-gray-800"
                  }`}
                />
              </button>

            </div>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE OVERLAY ================= */}

      <div
        onClick={() => setIsOpen(false)}
        className={`
          fixed inset-0 z-[60]
          bg-black/50 backdrop-blur-sm
          transition-all duration-300
          md:hidden
          ${
            isOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      />

      {/* ================= MOBILE SIDEBAR ================= */}

      <aside
        className={`
          fixed
          top-0 right-0
          h-full
          w-[290px]
          sm:w-[340px]
          z-[70]
          md:hidden
          border-l
          backdrop-blur-2xl
          transition-transform duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            isDark
              ? "bg-gray-950/95 border-white/10"
              : "bg-white/95 border-gray-200"
          }
          ${
            isOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >

        {/* Sidebar Header */}

        <div className="flex items-center justify-between p-5 border-b border-white/10">

          <div>
            <p
              className={`
                font-bold
                ${
                  isDark
                    ? "text-white"
                    : "text-gray-900"
                }
              `}
            >
              TAOSIF BIN SADHIN
            </p>

            <p className="text-xs text-blue-500 mt-1">
              Wix Expert & Web Developer
            </p>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className={`
              w-10 h-10
              rounded-xl
              flex items-center justify-center
              border
              transition-all duration-300
              ${
                isDark
                  ? "border-white/10 bg-white/[0.03] hover:bg-white/10"
                  : "border-gray-200 bg-gray-50 hover:bg-gray-100"
              }
            `}
          >
            <X
              className={`w-5 h-5 ${
                isDark
                  ? "text-gray-300"
                  : "text-gray-700"
              }`}
            />
          </button>

        </div>

        {/* Navigation */}

        <div className="p-5 space-y-2">

          {navLinks.map((link, index) => {
            const isActive =
              activeSection ===
              link.name.toLowerCase();

            return (
              <button
                key={link.href}
                onClick={() =>
                  handleNavigation(
                    link.name.toLowerCase()
                  )
                }
                style={{
                  transitionDelay: isOpen
                    ? `${index * 50}ms`
                    : "0ms",
                }}
                className={`
                  w-full
                  flex items-center justify-between
                  px-4 py-3.5
                  rounded-xl
                  text-left
                  font-medium
                  transition-all duration-300
                  ${
                    isActive
                      ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                      : isDark
                      ? "text-gray-400 hover:text-white hover:bg-white/[0.05]"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }
                `}
              >
                <span>{link.name}</span>

                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                )}
              </button>
            );
          })}

        </div>

        {/* Sidebar Bottom */}

        <div className="absolute bottom-0 left-0 right-0 p-5">

          <div
            className={`
              p-5 rounded-2xl
              border
              ${
                isDark
                  ? "border-white/10 bg-white/[0.025]"
                  : "border-gray-200 bg-gray-50"
              }
            `}
          >

            <p
              className={`text-sm font-semibold ${
                isDark
                  ? "text-white"
                  : "text-gray-900"
              }`}
            >
              Have a project?
            </p>

            <p className="text-xs text-gray-500 mt-1 mb-4">
              Let's build something great together.
            </p>

            <button
              onClick={() =>
                handleNavigation("contact")
              }
              className="
                w-full
                flex items-center
                justify-center gap-2
                px-4 py-3
                rounded-xl
                bg-blue-600
                hover:bg-blue-500
                text-white
                text-sm font-semibold
                transition-all duration-300
              "
            >
              Let's Talk
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>
      </aside>
    </>
  );
};

export default Navbar;