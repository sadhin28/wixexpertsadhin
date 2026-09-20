import { useEffect, useRef, useState } from "react";
import {
  Globe,
  User2Icon,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Zap,
  Sparkles,
} from "lucide-react";
import { CgWebsite } from "react-icons/cg";
import { FaWix } from "react-icons/fa";

/* ================= ANIMATED COUNTER ================= */

const AnimatedStat = ({ target, suffix, active }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) {
      setCount(0);
      return;
    }

    let startTime = null;
    let frameId;
    const duration = 1800;

    const animate = (timestamp) => {
      if (startTime === null) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      const eased = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(eased * target));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [active, target]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

/* ================= ABOUT COMPONENT ================= */

const About = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);

  const [statsVisible, setStatsVisible] = useState(false);

  /* Reveal animation */
  useEffect(() => {
    const elements =
      sectionRef.current?.querySelectorAll(".reveal");

    if (!elements?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  /* Stats scroll observer */
  useEffect(() => {
    const section = statsRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setStatsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  /* ================= DATA ================= */

  const highlights = [
    {
      icon: <CgWebsite className="h-8 w-8" />,
      title: "Wix Studio & Wix Harmony Development",
      description:
        "Modern, responsive Wix Studio and Wix Harmony websites with clean UI, scalable structure, and business-focused functionality designed for a strong online presence.",
    },
    {
      icon: <FaWix className="h-8 w-8" />,
      title: "Wix Velo & Custom Automation",
      description:
        "Custom Wix Velo development, API integrations, webhooks, custom functions, and automated workflows that extend Wix websites beyond standard features.",
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Wix CMS & Dynamic Websites",
      description:
        "Advanced Wix CMS architecture, dynamic pages, collections, filtering, dashboards, memberships, gated content, and role-based website functionality.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "SEO & Website Performance",
      description:
        "Mobile-friendly, fast, and SEO-focused websites with optimized structure, content, usability, and performance to support better search visibility.",
    },
  ];

  const technologies = [
    "Wix",
    "Wix Studio",
    "Wix Harmony",
    "Wix Velo",
    "Wix CMS",
    "Custom Automation",
    "API Integration",
    "SEO",
    "MERN Stack",
  ];

  const stats = [
    {
      target: 100,
      suffix: "+",
      label: "Live Projects",
    },
    {
      target: 4,
      suffix: "+",
      label: "Years Experience",
    },
    {
      target: 24,
      suffix: "/7",
      label: "Client Support",
    },
  ];

  const services = [
    "Responsive Wix Website Design",
    "Custom Wix Velo Development",
    "Wix CMS & Dynamic Pages",
    "SEO & Website Performance",
    "API & Webhook Integration",
    "Business-Focused Wix Solutions",
  ];

  /* ================= JSX ================= */

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-white px-4 py-20 text-gray-900 transition-colors duration-500 dark:bg-[#05070b] dark:text-white sm:px-6 lg:px-8 lg:py-24"
    >
      {/* ================= BACKGROUND EFFECTS ================= */}

      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute left-[-150px] top-20 h-[350px] w-[350px] animate-pulse rounded-full bg-blue-500/[0.06] blur-[120px] dark:bg-blue-600/10" />

        <div
          className="absolute bottom-20 right-[-150px] h-[350px] w-[350px] animate-pulse rounded-full bg-cyan-400/[0.05] blur-[120px] dark:bg-cyan-500/10"
          style={{ animationDelay: "1.5s" }}
        />

        <div
          className="absolute inset-0 opacity-[0.018] dark:opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <header className="reveal mb-20 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 backdrop-blur-md">
            <Sparkles className="h-4 w-4 animate-pulse text-blue-600 dark:text-blue-400" />

            <span className="text-sm font-medium tracking-wide text-blue-600 dark:text-blue-400">
              About Taosif Bin Sadhin
            </span>
          </div>

          <h2
            id="about-heading"
            className="mb-6 text-3xl font-bold leading-tight text-gray-950 dark:text-white sm:text-4xl lg:text-5xl xl:text-6xl"
          >
            Wix Expert &{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-cyan-400 dark:to-blue-500">
              Wix Studio Developer
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg">
            I’m{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              Taosif Bin Sadhin
            </span>
            , a Wix Expert specializing in Wix Studio, Wix Harmony,
            Wix Velo, Wix CMS, custom automation, API integration,
            and SEO-focused website development. I create responsive
            Wix websites that help businesses build a professional
            online presence and achieve their digital goals.
          </p>
        </header>

        {/* ================= MAIN CONTENT ================= */}

        <div className="grid items-center gap-14 lg:grid-cols-2 xl:gap-20">

          {/* ================= LEFT CONTENT ================= */}

          <article className="reveal reveal-left space-y-7">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-3">
                <User2Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                  My Journey
                </p>

                <h3 className="mt-1 text-2xl font-bold text-gray-950 dark:text-white sm:text-3xl">
                  Building Websites That Work
                </h3>
              </div>
            </div>

            <p className="text-justify leading-8 text-gray-600 dark:text-gray-400">
              I’m a professional Web Developer and Wix Expert focused
              on creating modern, responsive, high-performance, and
              SEO-friendly websites. I specialize in{" "}
              <span className="font-medium text-blue-600 dark:text-blue-400">
                Wix Studio, Wix Harmony, and Wix Velo
              </span>
              , helping businesses transform their ideas into
              professional and functional digital experiences.
            </p>

            <p className="text-justify leading-8 text-gray-600 dark:text-gray-400">
              With{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                100+ live projects
              </span>{" "}
              delivered, I work on custom Wix development, Wix CMS
              architecture, dynamic pages, Velo custom functions,
              API integrations, webhooks, automation, e-commerce,
              memberships, gated content, and role-based dashboards.
            </p>

            <p className="text-justify leading-8 text-gray-600 dark:text-gray-400">
              My goal is simple:{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                create websites that look great, work smoothly,
                and support real business goals.
              </span>{" "}
              I combine frontend design, Wix development, SEO,
              performance optimization, and custom functionality
              to build scalable solutions tailored to each client’s needs.
            </p>

            {/* SERVICES */}

            <ul
              aria-label="Wix development services"
              className="grid list-none gap-3 p-0 sm:grid-cols-2"
            >
              {services.map((item) => (
                <li
                  key={item}
                  className="group flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600 transition-transform duration-300 group-hover:scale-125 dark:text-blue-400" />

                  <span className="transition-colors group-hover:text-blue-600 dark:group-hover:text-white">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* TECHNOLOGIES */}

            <div
              aria-label="Technologies and skills"
              className="flex flex-wrap gap-2 pt-4"
            >
              {technologies.map((tech, index) => (
                <span
                  key={tech}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                  className="skill-badge cursor-default rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-xs font-medium text-blue-600 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-700 dark:text-blue-300 dark:hover:bg-blue-500/15 dark:hover:text-white sm:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>

          {/* ================= RIGHT CONTENT ================= */}

          <div className="reveal reveal-right">

            {/* HIGHLIGHTS */}

            <div className="grid gap-5 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <article
                  key={item.title}
                  style={{
                    animationDelay: `${index * 150}ms`,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50/80 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40 dark:border-white/10 dark:bg-white/[0.025]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.06] via-transparent to-cyan-500/[0.04] opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-blue-500/[0.08] dark:to-cyan-500/[0.05]" />

                  <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-700 group-hover:w-full" />

                  <div className="relative">
                    <div className="mb-5 flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-600 transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 dark:text-blue-400">
                        {item.icon}
                      </div>

                      <ArrowUpRight className="h-5 w-5 text-gray-400 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-blue-600 dark:text-gray-600 dark:group-hover:text-blue-400" />
                    </div>

                    <h4 className="mb-3 text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                      {item.title}
                    </h4>

                    <p className="text-sm leading-7 text-gray-500 transition-colors duration-300 group-hover:text-gray-600 dark:group-hover:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* ================= ANIMATED STATS ================= */}

            <div
              ref={statsRef}
              aria-label="Professional statistics"
              className="mt-6 grid grid-cols-3 gap-3"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="group rounded-2xl border border-gray-200 bg-gray-50/70 p-3 text-center transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/[0.05] dark:border-white/10 dark:bg-white/[0.02] sm:p-5"
                >
                  <div
                    className="text-2xl font-bold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 sm:text-3xl"
                    aria-label={`${stat.target}${stat.suffix} ${stat.label}`}
                  >
                    <AnimatedStat
                      target={stat.target}
                      suffix={stat.suffix}
                      active={statsVisible}
                    />
                  </div>

                  <div className="mt-2 text-[10px] uppercase tracking-wider text-gray-500 sm:text-xs">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* ================= CTA CARD ================= */}

            <aside
              aria-label="Wix project call to action"
              className="relative mt-6 overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-r from-blue-500/[0.06] to-transparent p-6 dark:from-blue-500/[0.08]"
            >
              <div className="absolute right-[-30px] top-[-30px] h-24 w-24 rounded-full bg-blue-500/10 blur-2xl" />

              <div className="relative flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-blue-500/10 p-3">
                    <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>

                  <div>
                    <h4 className="mb-1 font-semibold text-gray-900 dark:text-white">
                      Have a Wix project in mind?
                    </h4>

                    <p className="text-sm text-gray-500">
                      Let’s turn your idea into a fast, responsive,
                      and business-focused website.
                    </p>
                  </div>
                </div>

                <a
                  href="#contact"
                  aria-label="Contact Taosif Bin Sadhin about your Wix project"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 dark:bg-blue-500 dark:hover:bg-blue-400"
                >
                  Let's Talk
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* ================= ANIMATION CSS ================= */}

      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(35px);
          transition:
            opacity 0.8s ease,
            transform 0.8s ease;
        }

        .reveal-left {
          transform: translateX(-45px);
        }

        .reveal-right {
          transform: translateX(45px);
        }

        .reveal.show {
          opacity: 1;
          transform: translate(0);
        }

        .skill-badge {
          animation: badgeAppear 0.6s ease forwards;
          opacity: 0;
        }

        @keyframes badgeAppear {
          from {
            opacity: 0;
            transform: translateY(10px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal,
          .skill-badge {
            opacity: 1;
            transform: none;
            animation: none;
            transition: none;
          }
        }
      `}</style>
    </section>
  );
};

export default About;