import { useEffect, useRef } from "react";
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

const About = () => {
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
      { threshold: 0.12 },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
      number: "100+",
      label: "Live Projects",
    },
    {
      number: "4+",
      label: "Years Experience",
    },
    {
      number: "24/7",
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

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-labelledby="about-heading"
      className="
        relative
        py-20
        sm:py-20
        lg:py-24
        px-4 sm:px-6 lg:px-8
        overflow-hidden

        bg-white
        text-gray-900

        dark:bg-[#05070b]
        dark:text-white

        transition-colors duration-500
      "
    >
      {/* ================= BACKGROUND EFFECTS ================= */}

      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* Blue Glow */}
        <div
          className="
            absolute
            top-20
            left-[-150px]
            w-[350px]
            h-[350px]
            rounded-full
            blur-[120px]
            animate-pulse

            bg-blue-500/[0.06]
            dark:bg-blue-600/10
          "
        />

        {/* Cyan Glow */}
        <div
          className="
            absolute
            bottom-20
            right-[-150px]
            w-[350px]
            h-[350px]
            rounded-full
            blur-[120px]
            animate-pulse

            bg-cyan-400/[0.05]
            dark:bg-cyan-500/10
          "
          style={{
            animationDelay: "1.5s",
          }}
        />

        {/* Subtle Grid */}
        <div
          className="
            absolute inset-0
            opacity-[0.018]
            dark:opacity-[0.025]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}

        <header className="text-center mb-20 reveal">

          {/* Section Label */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              mb-6
              rounded-full

              border
              border-blue-500/20
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
                font-medium
                tracking-wide
                text-blue-600
                dark:text-blue-400
              "
            >
              About Taosif Bin Sadhin
            </span>
          </div>

          {/* Main SEO Heading */}

          <h2
            id="about-heading"
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              xl:text-6xl

              font-bold
              mb-6
              leading-tight

              text-gray-950
              dark:text-white
            "
          >
            Wix Expert &{" "}
            <span
              className="
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-blue-600
                via-cyan-500
                to-blue-600

                dark:from-blue-400
                dark:via-cyan-400
                dark:to-blue-500
              "
            >
              Wix Studio Developer
            </span>
          </h2>

          {/* Intro */}

          <p
            className="
              text-base
              sm:text-lg
              max-w-3xl
              mx-auto
              leading-relaxed

              text-gray-600
              dark:text-gray-400
            "
          >
            I’m{" "}
            <span
              className="
                font-semibold
                text-gray-900
                dark:text-white
              "
            >
              Taosif Bin Sadhin
            </span>
            , a Wix Expert specializing in Wix Studio, Wix Harmony, Wix Velo,
            Wix CMS, custom automation, API integration, and SEO-focused
            website development. I create responsive Wix websites that help
            businesses build a professional online presence and achieve their
            digital goals.
          </p>
        </header>

        {/* ================= MAIN CONTENT ================= */}

        <div
          className="
            grid
            lg:grid-cols-2
            gap-14
            xl:gap-20
            items-center
          "
        >

          {/* ================= LEFT CONTENT ================= */}

          <article className="reveal reveal-left space-y-7">

            {/* Journey Heading */}

            <div>
              <div className="flex items-center gap-3 mb-5">

                <div
                  className="
                    p-3
                    rounded-xl

                    bg-blue-500/10
                    border border-blue-500/20
                  "
                  aria-hidden="true"
                >
                  <User2Icon
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
                    My Journey
                  </p>

                  <h3
                    className="
                      text-2xl
                      sm:text-3xl
                      font-bold
                      mt-1

                      text-gray-950
                      dark:text-white
                    "
                  >
                    Building Websites That Work
                  </h3>
                </div>

              </div>
            </div>

            {/* Paragraph 1 */}

            <p
              className="
                text-justify
                leading-8

                text-gray-600
                dark:text-gray-400
              "
            >
              I’m a professional Web Developer and Wix Expert focused on
              creating modern, responsive, high-performance, and SEO-friendly
              websites. I specialize in{" "}
              <span
                className="
                  font-medium
                  text-blue-600
                  dark:text-blue-400
                "
              >
                Wix Studio, Wix Harmony, and Wix Velo
              </span>
              , helping businesses transform their ideas into professional
              and functional digital experiences.
            </p>

            {/* Paragraph 2 */}

            <p
              className="
                text-justify
                leading-8

                text-gray-600
                dark:text-gray-400
              "
            >
              With{" "}
              <span
                className="
                  font-semibold
                  text-gray-900
                  dark:text-white
                "
              >
                100+ live projects
              </span>{" "}
              delivered, I work on custom Wix development, Wix CMS
              architecture, dynamic pages, Velo custom functions, API
              integrations, webhooks, automation, e-commerce, memberships,
              gated content, and role-based dashboards.
            </p>

            {/* Paragraph 3 */}

            <p
              className="
                text-justify
                leading-8

                text-gray-600
                dark:text-gray-400
              "
            >
              My goal is simple:{" "}
              <span
                className="
                  font-semibold
                  text-gray-900
                  dark:text-white
                "
              >
                create websites that look great, work smoothly, and support
                real business goals.
              </span>{" "}
              I combine frontend design, Wix development, SEO, performance
              optimization, and custom functionality to build scalable
              solutions tailored to each client’s needs.
            </p>

            {/* ================= SERVICES / SKILLS ================= */}

            <ul
              aria-label="Wix development services"
              className="
                grid
                sm:grid-cols-2
                gap-3
                pt-2
                list-none
                p-0
                m-0
              "
            >
              {services.map((item) => (
                <li
                  key={item}
                  className="
                    flex
                    items-center
                    gap-2
                    text-sm

                    text-gray-600
                    dark:text-gray-300

                    group
                  "
                >
                  <CheckCircle2
                    className="
                      w-4 h-4
                      text-blue-600
                      dark:text-blue-400

                      group-hover:scale-125
                      transition-transform
                      duration-300
                    "
                    aria-hidden="true"
                  />

                  <span
                    className="
                      group-hover:text-blue-600
                      dark:group-hover:text-white

                      transition-colors
                    "
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* ================= TECHNOLOGIES ================= */}

            <div
              className="
                flex
                flex-wrap
                gap-2
                pt-4
              "
              aria-label="Technologies and skills"
            >
              {technologies.map((tech, index) => (
                <span
                  key={tech}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                  className="
                    skill-badge

                    px-4
                    py-2
                    rounded-full

                    text-xs
                    sm:text-sm
                    font-medium

                    border
                    border-blue-500/20

                    bg-blue-500/5

                    text-blue-600

                    hover:bg-blue-500/10
                    hover:border-blue-400/50
                    hover:text-blue-700
                    hover:-translate-y-1

                    dark:text-blue-300
                    dark:hover:bg-blue-500/15
                    dark:hover:text-white

                    transition-all
                    duration-300

                    cursor-default
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>

          {/* ================= RIGHT CONTENT ================= */}

          <div className="reveal reveal-right">

            {/* Highlights */}

            <div
              className="
                grid
                sm:grid-cols-2
                gap-5
              "
            >
              {highlights.map((item, index) => (
                <article
                  key={item.title}
                  style={{
                    animationDelay: `${index * 150}ms`,
                  }}
                  className="
                    group
                    relative

                    p-6
                    rounded-2xl

                    border
                    border-gray-200
                    bg-gray-50/80

                    dark:border-white/10
                    dark:bg-white/[0.025]

                    backdrop-blur-xl

                    overflow-hidden

                    hover:border-blue-500/40
                    hover:-translate-y-2

                    transition-all
                    duration-500
                  "
                >
                  {/* Hover Glow */}

                  <div
                    className="
                      absolute
                      inset-0
                      opacity-0
                      group-hover:opacity-100

                      transition-opacity
                      duration-500

                      bg-gradient-to-br
                      from-blue-500/[0.06]
                      via-transparent
                      to-cyan-500/[0.04]

                      dark:from-blue-500/[0.08]
                      dark:to-cyan-500/[0.05]
                    "
                    aria-hidden="true"
                  />

                  {/* Top Line */}

                  <div
                    className="
                      absolute
                      top-0
                      left-0

                      w-0
                      h-[2px]

                      bg-gradient-to-r
                      from-blue-500
                      to-cyan-400

                      group-hover:w-full

                      transition-all
                      duration-700
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
                        mb-5
                      "
                    >
                      <div
                        className="
                          w-14
                          h-14

                          flex
                          items-center
                          justify-center

                          rounded-xl

                          bg-blue-500/10
                          border border-blue-500/20

                          text-blue-600
                          dark:text-blue-400

                          group-hover:scale-110
                          group-hover:rotate-3

                          transition-all
                          duration-500
                        "
                        aria-hidden="true"
                      >
                        {item.icon}
                      </div>

                      <ArrowUpRight
                        className="
                          w-5 h-5

                          text-gray-400
                          dark:text-gray-600

                          group-hover:text-blue-600
                          dark:group-hover:text-blue-400

                          group-hover:translate-x-1
                          group-hover:-translate-y-1

                          transition-all
                          duration-300
                        "
                        aria-hidden="true"
                      />
                    </div>

                    {/* Service Title */}

                    <h4
                      className="
                        text-lg
                        font-semibold
                        mb-3

                        text-gray-900
                        dark:text-white

                        group-hover:text-blue-600
                        dark:group-hover:text-blue-400

                        transition-colors
                        duration-300
                      "
                    >
                      {item.title}
                    </h4>

                    {/* Service Description */}

                    <p
                      className="
                        text-sm
                        leading-7

                        text-gray-500
                        dark:text-gray-500

                        group-hover:text-gray-600
                        dark:group-hover:text-gray-400

                        transition-colors
                        duration-300
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* ================= STATS ================= */}

            <div
              className="
                grid
                grid-cols-3
                gap-3
                mt-6
              "
              aria-label="Professional statistics"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="
                    text-center

                    p-5
                    rounded-2xl

                    border
                    border-gray-200
                    bg-gray-50/70

                    dark:border-white/10
                    dark:bg-white/[0.02]

                    hover:bg-blue-500/[0.05]
                    hover:border-blue-500/30

                    transition-all
                    duration-300

                    group
                  "
                >
                  <div
                    className="
                      text-2xl
                      sm:text-3xl
                      font-bold

                      text-gray-900
                      dark:text-white

                      group-hover:text-blue-600
                      dark:group-hover:text-blue-400

                      transition-colors
                    "
                  >
                    {stat.number}
                  </div>

                  <div
                    className="
                      text-[10px]
                      sm:text-xs

                      text-gray-500

                      mt-2

                      uppercase
                      tracking-wider
                    "
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* ================= CTA CARD ================= */}

            <aside
              className="
                relative
                mt-6
                p-6
                rounded-2xl

                border
                border-blue-500/20

                bg-gradient-to-r
                from-blue-500/[0.06]
                to-transparent

                dark:from-blue-500/[0.08]

                overflow-hidden
              "
              aria-label="Wix project call to action"
            >
              {/* Glow */}

              <div
                className="
                  absolute
                  right-[-30px]
                  top-[-30px]

                  w-24
                  h-24

                  bg-blue-500/10

                  rounded-full
                  blur-2xl
                "
                aria-hidden="true"
              />

              <div
                className="
                  relative
                  flex
                  flex-col
                  sm:flex-row
                  sm:items-center
                  justify-between
                  gap-5
                "
              >
                {/* CTA Content */}

                <div
                  className="
                    flex
                    items-start
                    gap-4
                  "
                >
                  <div
                    className="
                      p-3
                      rounded-xl
                      bg-blue-500/10
                    "
                    aria-hidden="true"
                  >
                    <Zap
                      className="
                        w-6 h-6
                        text-blue-600
                        dark:text-blue-400
                      "
                    />
                  </div>

                  <div>
                    <h4
                      className="
                        font-semibold
                        mb-1

                        text-gray-900
                        dark:text-white
                      "
                    >
                      Have a Wix project in mind?
                    </h4>

                    <p
                      className="
                        text-sm
                        text-gray-500
                      "
                    >
                      Let’s turn your idea into a fast, responsive, and
                      business-focused website.
                    </p>
                  </div>
                </div>

                {/* CTA Button */}

                <a
                  href="#contact"
                  aria-label="Contact Taosif Bin Sadhin about your Wix project"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2

                    px-5
                    py-3
                    rounded-xl

                    bg-blue-600
                    hover:bg-blue-700

                    dark:bg-blue-500
                    dark:hover:bg-blue-400

                    text-white
                    text-sm
                    font-semibold

                    hover:shadow-lg
                    hover:shadow-blue-500/20

                    transition-all
                    duration-300

                    whitespace-nowrap
                  "
                >
                  Let's Talk
                  <ArrowUpRight
                    className="w-4 h-4"
                    aria-hidden="true"
                  />
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
          }
        }
      `}</style>
    </section>
  );
};

export default About;