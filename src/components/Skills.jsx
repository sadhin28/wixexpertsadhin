import { useEffect, useRef } from "react";
import {
  Globe,
  StoreIcon,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Code2,
  Zap,
} from "lucide-react";
import { CgWebsite } from "react-icons/cg";
import { FaSearchengin, FaWix } from "react-icons/fa";
import { FaPersonDotsFromLine } from "react-icons/fa6";

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll(".reveal");

    if (!elements) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <CgWebsite className="h-8 w-8" />,
      title: "Wix Studio & Wix Harmony Development",
      description:
        "Modern, responsive Wix Studio and Wix Harmony websites with custom sections, animations, CMS integration, clean layouts, and business-focused functionality.",
      tags: ["Wix Studio", "Wix Harmony", "Responsive"],
    },
    {
      icon: <FaWix className="h-8 w-8" />,
      title: "Wix Velo & Custom Automation",
      description:
        "Custom Wix Velo development including dynamic pages, custom functions, API integrations, webhooks, and automated workflows for complex business requirements.",
      tags: ["Wix Velo", "API", "Automation"],
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Business Website Development",
      description:
        "Professional Wix websites built around your brand, target audience, and business goals to improve credibility, user experience, and online opportunities.",
      tags: ["Business", "UI/UX", "SEO"],
    },
    {
      icon: <FaPersonDotsFromLine className="h-8 w-8" />,
      title: "Portfolio Website Design",
      description:
        "Professional portfolio websites that showcase your work, experience, skills, and services with a responsive design focused on attracting potential clients.",
      tags: ["Portfolio", "Personal Brand", "Responsive"],
    },
    {
      icon: <StoreIcon className="h-8 w-8" />,
      title: "Wix E-commerce & Membership",
      description:
        "Wix e-commerce stores, memberships, gated content, booking systems, pricing plans, and custom customer experiences tailored to your business needs.",
      tags: ["E-commerce", "Membership", "Booking"],
    },
    {
      icon: <FaSearchengin className="h-8 w-8" />,
      title: "SEO & Website Performance",
      description:
        "SEO-focused website optimization including metadata, mobile responsiveness, technical improvements, page structure, usability, and performance optimization.",
      tags: ["SEO", "Performance", "Mobile"],
    },
  ];

  const technologies = [
    "Wix",
    "Wix Classic",
    "Wix Studio",
    "Wix Harmony",
    "Wix Velo",
    "Wix CMS",
    "Automation",
    "API Integration",
    "SEO",
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
    "Git",
    "GitHub",
    "VS Code",
    "Postman",
    "Figma",
  ];

  const approachPoints = [
    "Clean & Modern UI",
    "Responsive Development",
    "Custom Wix Functionality",
    "SEO Ready Structure",
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      aria-labelledby="services-heading"
      className="
        relative
        py-12 sm:py-20 lg:py-24
        px-4 sm:px-6 lg:px-8
        overflow-hidden
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
        {/* Blue Glow */}

        <div
          className="
            absolute top-20 left-[-180px]
            w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]
            rounded-full
            bg-blue-500/[0.05]
            dark:bg-blue-600/10
            blur-[110px] sm:blur-[130px]
            animate-pulse
          "
        />

        {/* Cyan Glow */}

        <div
          className="
            absolute bottom-10 right-[-180px]
            w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]
            rounded-full
            bg-cyan-400/[0.04]
            dark:bg-cyan-500/10
            blur-[110px] sm:blur-[130px]
            animate-pulse
          "
          style={{ animationDelay: "1.5s" }}
        />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.018] dark:opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* ================= SECTION HEADER ================= */}

        <header className="text-center mb-12 sm:mb-16 lg:mb-20 reveal">

          {/* Badge */}

          <div
            className="
              inline-flex items-center gap-2
              px-4 py-2 mb-5 sm:mb-6
              rounded-full
              border border-blue-500/20
              bg-blue-500/5
              backdrop-blur-md
            "
          >
            <Sparkles
              className="
                w-4 h-4
                text-blue-600
                dark:text-blue-400
                animate-pulse
              "
              aria-hidden="true"
            />

            <span
              className="
                text-sm
                text-blue-600
                dark:text-blue-400
                font-medium
                tracking-wide
              "
            >
              Wix Development Services
            </span>
          </div>

          {/* Main Heading */}

          <h2
            id="services-heading"
            className="
              text-3xl sm:text-4xl lg:text-5xl xl:text-6xl
              font-bold
              mb-5 sm:mb-6
              leading-tight
              text-gray-950 dark:text-white
            "
          >
            Wix Website Design &{" "}
            <span
              className="
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-blue-600 via-cyan-500 to-blue-600
                dark:from-blue-400 dark:via-cyan-400 dark:to-blue-500
              "
            >
              Development Services
            </span>
          </h2>

          {/* SEO Intro */}

          <p
            className="
              text-gray-600
              dark:text-gray-400
              text-base sm:text-lg
              max-w-3xl
              mx-auto
              leading-relaxed
            "
          >
            I provide professional Wix website design and development services
            including Wix Studio, Wix Harmony, Wix Velo, Wix CMS, custom
            automation, e-commerce, memberships, and SEO-focused website
            optimization — all designed around real business goals.
          </p>
        </header>

        {/* ================= SERVICE CARDS ================= */}

        <div
          className="
            grid
            sm:grid-cols-2
            lg:grid-cols-3
            gap-5 sm:gap-6 lg:gap-7
          "
          aria-label="Wix website development services"
        >
          {services.map((item, index) => (
            <article
              key={item.title}
              style={{
                transitionDelay: `${index * 80}ms`,
              }}
              className="reveal group relative"
            >
              {/* Animated Border Glow */}

              <div
                className="
                  absolute -inset-[1px]
                  rounded-2xl
                  bg-gradient-to-r
                  from-blue-500/0 via-blue-500/30 to-cyan-400/0
                  opacity-0
                  group-hover:opacity-100
                  blur-sm
                  transition-all duration-500
                "
                aria-hidden="true"
              />

              <div
                className="
                  relative h-full
                  p-5 sm:p-7
                  rounded-2xl
                  border border-gray-200
                  bg-gray-50/80
                  dark:border-white/10
                  dark:bg-white/[0.025]
                  backdrop-blur-xl
                  overflow-hidden
                  hover:-translate-y-2
                  hover:border-blue-500/40
                  transition-all duration-500
                "
              >
                {/* Top Animated Line */}

                <div
                  className="
                    absolute top-0 left-0
                    h-[2px] w-0
                    bg-gradient-to-r
                    from-blue-500 to-cyan-400
                    group-hover:w-full
                    transition-all duration-700
                  "
                  aria-hidden="true"
                />

                {/* Background Glow */}

                <div
                  className="
                    absolute -right-16 -top-16
                    w-32 h-32
                    rounded-full
                    bg-blue-500/[0.04]
                    dark:bg-blue-500/5
                    blur-3xl
                    group-hover:bg-blue-500/10
                    dark:group-hover:bg-blue-500/15
                    transition-all duration-500
                  "
                  aria-hidden="true"
                />

                <div className="relative">

                  {/* Icon + Arrow */}

                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      mb-5 sm:mb-6
                    "
                  >
                    <div
                      className="
                        w-12 h-12 sm:w-14 sm:h-14
                        flex items-center justify-center
                        rounded-xl
                        bg-blue-500/10
                        border border-blue-500/20
                        text-blue-600 dark:text-blue-400
                        group-hover:bg-blue-500/15
                        group-hover:border-blue-400/40
                        group-hover:scale-110
                        group-hover:rotate-3
                        transition-all duration-500
                      "
                      aria-hidden="true"
                    >
                      {item.icon}
                    </div>

                    <ArrowUpRight
                      className="
                        w-5 h-5
                        text-gray-400 dark:text-gray-600
                        group-hover:text-blue-600
                        dark:group-hover:text-blue-400
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                        transition-all duration-300
                      "
                      aria-hidden="true"
                    />
                  </div>

                  {/* Service Title */}

                  <h3
                    className="
                      text-xl font-semibold
                      mb-3
                      text-gray-900 dark:text-white
                      group-hover:text-blue-600
                      dark:group-hover:text-blue-400
                      transition-colors duration-300
                    "
                  >
                    {item.title}
                  </h3>

                  {/* Service Description */}

                  <p
                    className="
                      text-gray-500
                      dark:text-gray-500
                      text-sm
                      leading-7
                      mb-5 sm:mb-6
                      group-hover:text-gray-600
                      dark:group-hover:text-gray-400
                      transition-colors duration-300
                    "
                  >
                    {item.description}
                  </p>

                  {/* Service Tags */}

                  <ul
                    className="flex flex-wrap gap-2 list-none p-0 m-0"
                    aria-label={`${item.title} skills`}
                  >
                    {item.tags.map((tag) => (
                      <li
                        key={tag}
                        className="
                          px-2.5 py-1
                          rounded-md
                          text-[11px]
                          font-medium
                          text-blue-600 dark:text-blue-300
                          bg-blue-500/5
                          border border-blue-500/10
                          group-hover:border-blue-500/20
                          transition-colors
                        "
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ================= DEVELOPMENT APPROACH ================= */}

        <section
          className="mt-12 sm:mt-16 lg:mt-20 reveal"
          aria-labelledby="approach-heading"
        >
          <div
            className="
              relative
              rounded-3xl
              border border-gray-200
              bg-gray-50/80
              dark:border-white/10
              dark:bg-white/[0.02]
              backdrop-blur-xl
              p-6 sm:p-10
              overflow-hidden
            "
          >
            {/* Background Glow */}

            <div
              className="
                absolute left-1/2 top-[-100px]
                -translate-x-1/2
                w-[350px] sm:w-[400px]
                h-[180px] sm:h-[200px]
                rounded-full
                bg-blue-500/[0.06]
                dark:bg-blue-500/10
                blur-[100px]
              "
              aria-hidden="true"
            />

            <div
              className="
                relative
                grid
                lg:grid-cols-[1fr_auto]
                gap-7 sm:gap-10
                items-center
              "
            >

              {/* Approach Content */}

              <div>
                <div className="flex items-center gap-3 mb-4">

                  <div
                    className="
                      p-3
                      rounded-xl
                      bg-blue-500/10
                      border border-blue-500/20
                    "
                    aria-hidden="true"
                  >
                    <Code2
                      className="
                        w-6 h-6
                        text-blue-600
                        dark:text-blue-400
                      "
                    />
                  </div>

                  <div>
                    <p
                      className="
                        text-xs
                        uppercase
                        tracking-[0.2em]
                        text-blue-600
                        dark:text-blue-400
                      "
                    >
                      My Approach
                    </p>

                    <h3
                      id="approach-heading"
                      className="
                        text-2xl sm:text-3xl
                        font-bold
                        mt-1
                        text-gray-950
                        dark:text-white
                      "
                    >
                      Design + Development + Growth
                    </h3>
                  </div>

                </div>

                <p
                  className="
                    text-gray-600
                    dark:text-gray-500
                    leading-7
                    max-w-3xl
                  "
                >
                  I don’t just build websites that look good. I focus on
                  creating scalable Wix websites with a smooth user experience,
                  responsive design, custom functionality, SEO-friendly
                  structure, and easy-to-manage content that supports long-term
                  business goals.
                </p>
              </div>

              {/* Approach Features */}

              <ul
                className="
                  flex flex-wrap
                  lg:flex-col
                  gap-3
                  list-none
                  p-0
                  m-0
                "
                aria-label="Development approach features"
              >
                {approachPoints.map((item) => (
                  <li
                    key={item}
                    className="
                      flex
                      items-center
                      gap-2
                      text-sm
                      text-gray-600
                      dark:text-gray-300
                    "
                  >
                    <CheckCircle2
                      className="
                        w-4 h-4
                        text-blue-600
                        dark:text-blue-400
                      "
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </section>

        {/* ================= TECHNOLOGIES ================= */}

        <section
          className="mt-12 sm:mt-16 lg:mt-20 text-center reveal"
          aria-labelledby="technologies-heading"
        >
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-5">

            <Zap
              className="
                w-5 h-5
                text-blue-600
                dark:text-blue-400
              "
              aria-hidden="true"
            />

            <h3
              id="technologies-heading"
              className="
                text-2xl sm:text-3xl
                font-bold
                text-gray-950
                dark:text-white
              "
            >
              Technologies & Tools I Work With
            </h3>

          </div>

          <p
            className="
              text-gray-500
              max-w-2xl
              mx-auto
              mb-7 sm:mb-9
              text-sm sm:text-base
            "
          >
            I use Wix development tools and modern web technologies to build
            flexible, scalable, responsive, and high-performance digital
            experiences.
          </p>

          <ul
            className="
              flex
              flex-wrap
              justify-center
              gap-2.5 sm:gap-3
              max-w-5xl
              mx-auto
              list-none
              p-0
              m-0
            "
            aria-label="Technologies and development tools"
          >
            {technologies.map((tech, index) => (
              <li
                key={tech}
                style={{
                  animationDelay: `${index * 70}ms`,
                }}
                className="
                  tech-badge
                  px-3.5 sm:px-4
                  py-2 sm:py-2.5
                  rounded-xl
                  text-xs sm:text-sm
                  font-medium
                  text-blue-600 dark:text-blue-300
                  bg-gray-50
                  dark:bg-white/[0.025]
                  border border-gray-200
                  dark:border-white/10
                  hover:bg-blue-500/10
                  hover:border-blue-500/40
                  hover:text-blue-700
                  dark:hover:text-white
                  hover:-translate-y-1
                  hover:shadow-lg
                  hover:shadow-blue-500/10
                  transition-all duration-300
                  cursor-default
                "
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>

        {/* ================= BOTTOM CTA ================= */}

        <div className="mt-10 sm:mt-12 lg:mt-16 text-center reveal">

          <aside
            className="
              inline-flex
              flex-col sm:flex-row
              items-center
              gap-3 sm:gap-4
              px-5 sm:px-6
              py-3.5 sm:py-4
              rounded-2xl
              border border-blue-500/20
              bg-blue-500/[0.04]
            "
            aria-label="Start a Wix project"
          >

            <div
              className="
                flex
                items-center
                gap-2
                text-gray-600
                dark:text-gray-300
                text-sm
              "
            >
              <span
                className="
                  w-2 h-2
                  rounded-full
                  bg-green-400
                  animate-pulse
                "
                aria-hidden="true"
              />

              Ready to build your next Wix project?
            </div>

            <a
              href="#contact"
              aria-label="Contact Taosif Bin Sadhin about a Wix project"
              className="
                inline-flex
                items-center
                gap-2
                px-5 py-2.5
                rounded-xl
                bg-blue-600
                dark:bg-blue-500
                text-white
                text-sm font-semibold
                hover:bg-blue-700
                dark:hover:bg-blue-400
                hover:shadow-lg
                hover:shadow-blue-500/20
                transition-all duration-300
              "
            >
              Let's Work Together

              <ArrowUpRight
                className="w-4 h-4"
                aria-hidden="true"
              />
            </a>

          </aside>
        </div>
      </div>

      {/* ================= ANIMATIONS ================= */}

      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(35px);
          transition:
            opacity 0.8s ease,
            transform 0.8s ease;
        }

        .reveal.show {
          opacity: 1;
          transform: translateY(0);
        }

        .tech-badge {
          opacity: 0;
          animation: techAppear 0.6s ease forwards;
        }

        @keyframes techAppear {
          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal,
          .tech-badge {
            opacity: 1;
            transform: none;
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;