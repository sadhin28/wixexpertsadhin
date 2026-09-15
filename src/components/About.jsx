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
      title: "Wix Studio & Harmony",
      description:
        "Modern, responsive Wix Studio and Wix Harmony websites with clean UI, scalable structure, and business-focused functionality.",
    },
    {
      icon: <FaWix className="h-8 w-8" />,
      title: "Wix Velo & Automation",
      description:
        "Custom Velo development, dynamic pages, API integrations, webhooks, custom functions, and automated workflows.",
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "CMS & Dynamic Systems",
      description:
        "Advanced CMS architecture, dynamic pages, filtering, collections, dashboards, memberships, and role-based systems.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "SEO & Performance",
      description:
        "Fast, mobile-friendly and SEO-focused websites designed to improve usability, search visibility, and business growth.",
    },
  ];

  const technologies = [
    "Wix",
    "Wix Studio",
    "Wix Harmony",
    "Wix Velo",
    "CMS",
    "Automation",
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

  return (
    <section
      ref={sectionRef}
      id="about"
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
      <div className="absolute inset-0 pointer-events-none">
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
        <div className="text-center mb-20 reveal">
          {/* Label */}
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
              About Me
            </span>
          </div>

          {/* Heading */}
          <h2
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
              Web Developer
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
            CMS, automation, custom functionality, and SEO-focused websites that
            help businesses grow online.
          </p>
        </div>

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
          {/* ================= LEFT ================= */}
          <div className="reveal reveal-left space-y-7">
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
              , helping businesses turn their ideas into professional digital
              experiences.
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
              delivered, I work with custom Wix development, CMS architecture,
              dynamic pages, Velo custom functions, API integrations, webhooks,
              automation, e-commerce, memberships, gated content, and role-based
              dashboards.
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
                create websites that look great, work smoothly, and support real
                business goals.
              </span>{" "}
              I combine frontend design, backend functionality, SEO, and
              performance optimization to build scalable solutions tailored to
              each client.
            </p>

            {/* ================= CHECK LIST ================= */}
            <div
              className="
                grid
                sm:grid-cols-2
                gap-3
                pt-2
              "
            >
              {[
                "Responsive Design",
                "Custom Velo Development",
                "CMS & Dynamic Pages",
                "SEO & Performance",
                "API & Webhook Integration",
                "Business-Focused Solutions",
              ].map((item, index) => (
                <div
                  key={index}
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
                </div>
              ))}
            </div>

            {/* ================= TECHNOLOGIES ================= */}
            <div
              className="
                flex
                flex-wrap
                gap-2
                pt-4
              "
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
          </div>

          {/* ================= RIGHT ================= */}
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
                <div
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
                      />
                    </div>

                    {/* Title */}
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

                    {/* Description */}
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
                </div>
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
            <div
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
                      Let’s turn your idea into a powerful website.
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="#contact"
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
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
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
