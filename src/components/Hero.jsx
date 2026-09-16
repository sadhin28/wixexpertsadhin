import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";
import { GrGithub } from "react-icons/gr";
import { FaWix } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleResume = () => {
    window.open(
      "https://drive.google.com/file/d/12gSCvxHNlnV9TtDrJ3bmap7_QOcsWVbn/view",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const skills = [
    "Wix Studio",
    "Wix Harmony",
    "Wix Velo",
    "Wix CMS",
    "Automation",
    "SEO",
  ];

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="
        relative min-h-screen flex items-center overflow-hidden
        bg-white text-gray-900
        dark:bg-[#05070b] dark:text-white
        transition-colors duration-500
      "
    >
      {/* ================= BACKGROUND ================= */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* Light Mode Blue Glow */}
        <div
          className="
            absolute top-[-180px] left-[-180px]
            w-[420px] h-[420px]
            rounded-full
            bg-blue-500/[0.06]
            dark:bg-blue-600/[0.07]
            blur-[120px]
          "
        />

        {/* Light Mode Cyan Glow */}
        <div
          className="
            absolute bottom-[-180px] right-[-180px]
            w-[420px] h-[420px]
            rounded-full
            bg-cyan-400/[0.05]
            dark:bg-cyan-500/[0.06]
            blur-[120px]
          "
        />

        {/* Subtle Grid */}
        <div
          className="
            absolute inset-0
            opacity-[0.025]
            dark:opacity-[0.018]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div
        className="
          relative z-10 max-w-7xl mx-auto w-full
          px-5 sm:px-6 lg:px-8
          pt-28 pb-16
        "
      >
        <div
          className="
            grid
            lg:grid-cols-[1.1fr_0.9fr]
            gap-12 xl:gap-20
            items-center
          "
        >
          {/* ================= LEFT CONTENT ================= */}
          <div className="text-center lg:text-left">

            {/* Availability */}
            <div className="hero-item hero-delay-1 flex justify-center lg:justify-start mb-6">
              <div
                className="
                  inline-flex items-center gap-2.5
                  px-4 py-2
                  rounded-full
                  border
                  border-gray-200
                  bg-gray-50/80
                  backdrop-blur-md

                  dark:border-white/10
                  dark:bg-white/[0.025]
                "
              >
                <span
                  className="relative flex h-2 w-2"
                  aria-hidden="true"
                >
                  <span
                    className="
                      absolute inline-flex h-full w-full
                      rounded-full
                      bg-green-500
                      dark:bg-green-400
                      opacity-60
                      animate-ping
                    "
                  />

                  <span
                    className="
                      relative inline-flex h-2 w-2
                      rounded-full
                      bg-green-500
                      dark:bg-green-400
                    "
                  />
                </span>

                <span
                  className="
                    text-xs sm:text-sm
                    text-gray-600
                    dark:text-gray-400
                  "
                >
                  Available for new projects
                </span>
              </div>
            </div>

            {/* Name */}
            <div
              className="
                hero-item hero-delay-2
                flex items-center justify-center
                lg:justify-start
                gap-2 mb-5
              "
            >
              <span
                className="
                  h-px w-7
                  bg-blue-500/60
                  hidden sm:block
                "
                aria-hidden="true"
              />

              <p
                className="
                  text-xs sm:text-sm
                  tracking-[0.28em]
                  font-semibold
                  text-blue-600
                  dark:text-blue-400
                "
              >
                TAOSIF BIN SADHIN
              </p>
            </div>

            {/* ================= MAIN SEO HEADING ================= */}
            <h1
              id="hero-heading"
              className="
                hero-item hero-delay-3
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-[64px]
                xl:text-[72px]
                font-bold
                leading-[1.06]
                tracking-tight
                text-gray-950
                dark:text-white
              "
            >
              Wix Expert, Wix Studio
              <br />

              <span
                className="
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500
                  dark:from-blue-400
                  dark:to-cyan-400
                "
              >
                & Velo Developer
              </span>
            </h1>

            {/* Supporting Marketing Statement */}
            <p
              className="
                hero-item hero-delay-4
                mt-4
                text-xl sm:text-2xl
                font-semibold
                text-gray-800
                dark:text-gray-200
              "
            >
              I Build Websites That Grow Businesses.
            </p>

            {/* Professional Role */}
            <div
              className="
                hero-item hero-delay-4
                mt-5
                flex items-center justify-center
                lg:justify-start
                gap-2
                text-lg sm:text-xl md:text-2xl
                font-medium
                text-gray-700
                dark:text-gray-300
              "
              aria-label="Professional specialties"
            >
              <FaWix
                className="
                  text-blue-600
                  dark:text-blue-400
                  flex-shrink-0
                "
                aria-hidden="true"
              />

              <TypeAnimation
                sequence={[
                  "Wix Expert",
                  1800,
                  "Wix Studio Developer",
                  1800,
                  "Wix Harmony Expert",
                  1800,
                  "Wix Velo Developer",
                  1800,
                  "CMS & Automation Specialist",
                  1800,
                ]}
                wrapper="span"
                speed={45}
                repeat={Infinity}
              />
            </div>

            {/* Description */}
            <p
              className="
                hero-item hero-delay-5
                mt-6
                max-w-2xl
                mx-auto lg:mx-0
                text-base sm:text-lg
                leading-8
                text-gray-600
                dark:text-gray-400
              "
            >
              I’m Taosif Bin Sadhin, a Wix Expert specializing in Wix Studio,
              Wix Harmony, Velo, CMS development, custom automation and
              responsive website design. I build SEO-friendly Wix websites
              designed to create a strong online presence and help businesses
              grow.
            </p>

            {/* Skills */}
            <ul
              aria-label="Wix development skills"
              className="
                hero-item hero-delay-6
                flex flex-wrap
                justify-center lg:justify-start
                gap-2 mt-6
                list-none
                p-0
                m-0
              "
            >
              {skills.map((skill, index) => (
                <li
                  key={skill}
                  className="
                    skill-item
                    px-3.5 py-1.5
                    rounded-full
                    text-xs sm:text-sm
                    font-medium

                    text-gray-700
                    border border-gray-200
                    bg-gray-50

                    hover:text-blue-600
                    hover:border-blue-300
                    hover:bg-blue-50

                    dark:text-gray-300
                    dark:border-white/10
                    dark:bg-white/[0.025]
                    dark:hover:text-blue-400
                    dark:hover:border-blue-500/30
                    dark:hover:bg-blue-500/5

                    transition-all duration-300
                  "
                  style={{
                    animationDelay: `${index * 80}ms`,
                  }}
                >
                  {skill}
                </li>
              ))}
            </ul>

            {/* ================= CTA BUTTONS ================= */}
            <div
              className="
                hero-item hero-delay-7
                flex flex-col sm:flex-row
                justify-center lg:justify-start
                gap-3.5 mt-8
              "
            >
              {/* Projects */}
              <button
                type="button"
                onClick={() => scrollToSection("projects")}
                aria-label="View Wix and web development projects"
                className="
                  group
                  inline-flex items-center justify-center gap-2
                  px-7 py-3.5
                  rounded-xl

                  bg-blue-600
                  hover:bg-blue-700
                  dark:bg-blue-600
                  dark:hover:bg-blue-500

                  text-white
                  font-semibold

                  shadow-lg
                  shadow-blue-600/15
                  hover:shadow-blue-600/25

                  hover:-translate-y-0.5
                  transition-all duration-300
                "
              >
                View My Projects

                <ArrowRight
                  className="
                    w-5 h-5
                    group-hover:translate-x-1
                    transition-transform duration-300
                  "
                  aria-hidden="true"
                />
              </button>

              {/* Resume */}
              <button
                type="button"
                onClick={handleResume}
                aria-label="Open Taosif Bin Sadhin resume"
                className="
                  inline-flex items-center justify-center gap-2
                  px-7 py-3.5
                  rounded-xl

                  border border-gray-200
                  bg-gray-50
                  text-gray-800

                  hover:bg-gray-100
                  hover:border-gray-300

                  dark:border-white/10
                  dark:bg-white/[0.025]
                  dark:text-gray-200
                  dark:hover:bg-white/[0.06]
                  dark:hover:border-white/20

                  font-semibold
                  hover:-translate-y-0.5
                  transition-all duration-300
                "
              >
                Download Resume
              </button>
            </div>

            {/* ================= SOCIAL LINKS ================= */}
            <nav
              aria-label="Social media profiles"
              className="
                hero-item hero-delay-8
                flex justify-center lg:justify-start
                items-center gap-3 mt-8
              "
            >
              {/* GitHub */}
              <a
                href="https://github.com/sadhin28"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Taosif Bin Sadhin on GitHub"
                title="GitHub - Taosif Bin Sadhin"
                className="social-icon"
              >
                <GrGithub
                  className="w-5 h-5"
                  aria-hidden="true"
                />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/taosif-bin-sadhin-527899368"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Taosif Bin Sadhin on LinkedIn"
                title="LinkedIn - Taosif Bin Sadhin"
                className="social-icon"
              >
                <Linkedin
                  className="w-5 h-5"
                  aria-hidden="true"
                />
              </a>

              {/* Contact */}
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                aria-label="Go to contact section"
                title="Contact Taosif Bin Sadhin"
                className="social-icon"
              >
                <Mail
                  className="w-5 h-5"
                  aria-hidden="true"
                />
              </button>
            </nav>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="relative flex justify-center lg:justify-end hero-image">

            <div
              className="
                relative
                w-[280px] h-[280px]
                sm:w-[340px] sm:h-[340px]
                md:w-[390px] md:h-[390px]
              "
            >
              {/* Soft Glow */}
              <div
                className="
                  absolute inset-10
                  rounded-full
                  bg-blue-500/10
                  dark:bg-blue-500/15
                  blur-[70px]
                  animate-pulse
                "
                aria-hidden="true"
              />

              {/* Outer Ring */}
              <div
                className="
                  absolute inset-0
                  rounded-full
                  border
                  border-blue-500/15
                  dark:border-blue-500/15
                "
                aria-hidden="true"
              />

              {/* Small Decorative Ring */}
              <div
                className="
                  absolute inset-5
                  rounded-full
                  border border-dashed
                  border-cyan-500/20
                  dark:border-cyan-400/15
                  animate-[spin_30s_linear_infinite]
                "
                aria-hidden="true"
              />

              {/* Image Container */}
              <div
                className="
                  absolute inset-10
                  rounded-full
                  overflow-hidden

                  border border-blue-500/25
                  dark:border-blue-500/30

                  bg-gray-100
                  dark:bg-gray-900

                  shadow-[0_0_50px_rgba(37,99,235,0.10)]
                  dark:shadow-[0_0_60px_rgba(37,99,235,0.18)]
                "
              >
                <img
                  src="/profile.png"
                  alt="Taosif Bin Sadhin, Wix Expert and Wix Studio Developer"
                  width="390"
                  height="390"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="
                    w-full h-full
                    object-cover
                    scale-[1.02]
                    hover:scale-105
                    transition-transform duration-700
                  "
                />
              </div>

              {/* Wix Expert Badge */}
              <div
                className="
                  absolute
                  top-4
                  right-[-5px]
                  sm:right-[-18px]
                "
              >
                <div
                  className="
                    flex items-center gap-3
                    px-4 py-3
                    rounded-xl

                    border border-gray-200
                    bg-white/90

                    dark:border-white/10
                    dark:bg-gray-900/90

                    backdrop-blur-xl
                    shadow-xl

                    animate-[float_5s_ease-in-out_infinite]
                  "
                >
                  <div
                    className="
                      w-10 h-10
                      rounded-lg
                      flex items-center justify-center
                      bg-blue-500/10
                    "
                    aria-hidden="true"
                  >
                    <FaWix
                      className="
                        text-blue-600
                        dark:text-blue-400
                        text-xl
                      "
                    />
                  </div>

                  <div>
                    <p
                      className="
                        text-[10px]
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                    >
                      Specialist
                    </p>

                    <p
                      className="
                        text-sm
                        font-semibold
                        text-gray-900
                        dark:text-white
                      "
                    >
                      Wix Expert
                    </p>
                  </div>
                </div>
              </div>

              {/* Project Badge */}
              <div
                className="
                  absolute
                  bottom-5
                  left-[-5px]
                  sm:left-[-22px]
                "
              >
                <div
                  className="
                    flex items-center gap-3
                    px-4 py-3
                    rounded-xl

                    border border-gray-200
                    bg-white/90

                    dark:border-white/10
                    dark:bg-gray-900/90

                    backdrop-blur-xl
                    shadow-xl

                    animate-[float_6s_ease-in-out_infinite]
                  "
                >
                  <div
                    className="
                      w-10 h-10
                      rounded-lg
                      flex items-center justify-center
                      bg-blue-500/10
                    "
                    aria-hidden="true"
                  >
                    <Sparkles
                      className="
                        w-5 h-5
                        text-blue-600
                        dark:text-blue-400
                      "
                    />
                  </div>

                  <div>
                    <p
                      className="
                        text-lg
                        font-bold
                        text-gray-900
                        dark:text-white
                      "
                    >
                      100+
                    </p>

                    <p
                      className="
                        text-[10px]
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                    >
                      Live Projects
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Check */}
              <div
                className="
                  absolute
                  top-1/2
                  right-[-12px]
                  sm:right-[-20px]
                "
                aria-hidden="true"
              >
                <div
                  className="
                    flex items-center justify-center
                    w-8 h-8
                    rounded-full

                    bg-white
                    border border-gray-200

                    dark:bg-gray-900
                    dark:border-white/10

                    shadow-lg
                  "
                >
                  <CheckCircle2
                    className="
                      w-4 h-4
                      text-blue-600
                      dark:text-blue-400
                    "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SCROLL INDICATOR ================= */}
        <div className="flex justify-center mt-12 lg:mt-8">
          <button
            type="button"
            onClick={() => scrollToSection("about")}
            aria-label="Scroll to About section"
            className="
              group
              flex flex-col
              items-center
              gap-2

              text-gray-400
              hover:text-blue-600

              dark:text-gray-600
              dark:hover:text-blue-400

              transition-colors
            "
          >
            <span
              className="
                text-[9px]
                tracking-[0.3em]
                uppercase
              "
            >
              Explore
            </span>

            <ArrowDown
              className="
                w-4 h-4
                group-hover:translate-y-1
                transition-transform duration-300
              "
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      {/* ================= ANIMATIONS ================= */}
      <style>{`

        /* Entrance Animation */
        .hero-item {
          opacity: 0;
          transform: translateY(22px);
          animation: heroFadeUp 0.7s ease forwards;
        }

        .hero-delay-1 {
          animation-delay: 0.1s;
        }

        .hero-delay-2 {
          animation-delay: 0.2s;
        }

        .hero-delay-3 {
          animation-delay: 0.3s;
        }

        .hero-delay-4 {
          animation-delay: 0.4s;
        }

        .hero-delay-5 {
          animation-delay: 0.5s;
        }

        .hero-delay-6 {
          animation-delay: 0.6s;
        }

        .hero-delay-7 {
          animation-delay: 0.7s;
        }

        .hero-delay-8 {
          animation-delay: 0.8s;
        }

        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Profile Entrance */
        .hero-image {
          opacity: 0;
          transform: translateX(30px);
          animation: imageReveal 1s ease 0.45s forwards;
        }

        @keyframes imageReveal {
          from {
            opacity: 0;
            transform: translateX(30px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Skill Animation */
        .skill-item {
          opacity: 0;
          animation: skillReveal 0.5s ease forwards;
        }

        @keyframes skillReveal {
          from {
            opacity: 0;
            transform: translateY(8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Floating Animation */
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        /* Social Buttons */
        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 42px;
          height: 42px;

          border-radius: 12px;

          border: 1px solid rgb(229 231 235);
          background: rgb(249 250 251);

          color: rgb(107 114 128);

          transition: all 0.3s ease;
        }

        .social-icon:hover {
          color: rgb(37 99 235);
          border-color: rgba(59,130,246,0.35);
          background: rgba(59,130,246,0.06);
          transform: translateY(-3px);
        }

        /* Dark Mode Social Buttons */
        .dark .social-icon {
          border-color: rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.025);
          color: rgb(156,163,175);
        }

        .dark .social-icon:hover {
          color: rgb(96,165,250);
          border-color: rgba(59,130,246,0.35);
          background: rgba(59,130,246,0.06);
        }

        /* Tablet / Mobile Profile Animation */
        @media (max-width: 1023px) {
          .hero-image {
            transform: translateY(25px);
          }

          @keyframes imageReveal {
            from {
              opacity: 0;
              transform: translateY(25px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }

        /* Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          .hero-item,
          .hero-image,
          .skill-item {
            opacity: 1;
            transform: none;
            animation: none;
          }
        }

      `}</style>
    </section>
  );
};

export default Hero;

