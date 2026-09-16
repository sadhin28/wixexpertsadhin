import { useEffect, useRef } from "react";
import { ArrowUpRight, ExternalLink, Github, Sparkles } from "lucide-react";

const UPWORK_PROFILE_URL =
  "https://www.upwork.com/freelancers/taosifbins?mp_source=share&utm_medium=copy_link&utm_campaign=share_via&utm_content=profile";

const projects = [
  {
    title: "I.C.T. AI Research Support Platform",
    category: "Wix Studio Website",
    description:
      "A responsive Wix Studio website built with Wix CMS and Velo development to organize research resources, improve navigation, and provide a modern AI-powered research support experience.",
    technologies: [
      "Wix Studio",
      "Wix Velo",
      "Wix CMS",
      "JavaScript",
      "Responsive Design",
      "SEO",
    ],
    image:
      "https://i.ibb.co.com/gLdwjb6J/Screenshot-2026-07-31-202351.png",
    live: "https://www.ictcontools.com/",
  },
  {
    title: "Business Tax Resource Hub",
    category: "Business Website",
    description:
      "A professional Wix Studio business website designed with a clear content structure, responsive layouts, intuitive navigation, and CMS-powered resources to make important tax information easier to access.",
    technologies: [
      "Wix Studio",
      "Wix CMS",
      "Responsive Design",
      "UI Design",
      "SEO",
    ],
    image:
      "https://i.ibb.co.com/Z6yHKvH1/Screenshot-2026-07-31-212415.png",
    live: "https://www.taxtoolkit.info/home",
  },
  {
    title: "CAMY's Caribbean Mart & Eatery",
    category: "Wix E-commerce Website",
    description:
      "A responsive Wix e-commerce website for a Caribbean food and grocery business, focused on product presentation, customer experience, mobile usability, and an easy-to-navigate online shopping experience.",
    technologies: [
      "Wix Studio",
      "Wix E-commerce",
      "Wix CMS",
      "Responsive Design",
      "SEO",
    ],
    image:
      "https://i.ibb.co.com/gMS17yCZ/Screenshot-2026-07-31-220154.png",
    live: "https://www.camyscaribbeanmart.com/",
  },
  {
    title: "Nado Embroidery",
    category: "Wix Business Website",
    description:
      "A clean and responsive Wix Studio business website created to showcase embroidery services, products, and brand information with a professional layout optimized for desktop, tablet, and mobile users.",
    technologies: [
      "Wix Studio",
      "Wix CMS",
      "Responsive Design",
      "UI Design",
      "SEO",
    ],
    image:
      "https://i.ibb.co.com/cKF4F1PM/Screenshot-2026-07-31-221201.png",
    live: "https://www.nadoembroidery.com/",
  },
  {
    title: "TXT Group Corporate Website",
    category: "Corporate Wix Website",
    description:
      "A modern corporate website developed with Wix Studio, featuring structured content, responsive layouts, professional UI/UX, and an optimized user experience across desktop, tablet, and mobile devices.",
    technologies: [
      "Wix Studio",
      "Wix CMS",
      "Responsive Design",
      "UI/UX",
      "SEO",
    ],
    image:
      "https://i.ibb.co.com/2YknFS0M/Screenshot-2026-07-31-222135.png",
    live: "https://www.txt-group.com/",
  },
  {
    title: "JO'S Coffee Home",
    category: "Coffee Business Website",
    description:
      "A modern Wix Studio website for a coffee business, designed around strong visual presentation, responsive layouts, intuitive navigation, and a smooth customer experience on all devices.",
    technologies: [
      "Wix Studio",
      "Wix CMS",
      "Responsive Design",
      "UI Design",
      "SEO",
    ],
    image:
      "https://i.ibb.co.com/mr34CXns/Screenshot-2026-07-31-222826.png",
    live: "https://www.joscoffeehome.com/",
  },
];

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const items = section.querySelectorAll(".project-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("project-show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      aria-labelledby="projects-heading"
      className="relative overflow-hidden bg-white py-12 transition-colors duration-500 dark:bg-slate-950 sm:py-16 lg:py-20"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-500/10"
      />

      {/* Background Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
      >
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(100,116,139,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(100,116,139,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="project-reveal mx-auto mb-10 max-w-3xl translate-y-8 text-center opacity-0 transition-all duration-700 sm:mb-14 lg:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
            <Sparkles
              aria-hidden="true"
              className="h-4 w-4 text-blue-500"
            />
            Featured Wix Projects
          </div>

          <h2
            id="projects-heading"
            className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl"
          >
            Wix Website Projects &{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Custom Solutions
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
            Explore selected Wix Studio projects featuring responsive website
            design, Wix CMS development, Velo functionality, e-commerce
            solutions, custom automation, and SEO-friendly website
            optimization.
          </p>
        </header>

        {/* Projects Grid */}
        <div
          className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8"
          aria-label="Featured Wix website projects"
        >
          {projects.map((project, index) => (
            <article
              key={project.title}
              aria-labelledby={`project-title-${index}`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
              className="project-reveal group relative translate-y-10 overflow-hidden rounded-2xl border border-slate-200 bg-white opacity-0 shadow-sm transition-all duration-700 hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/10 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500/50"
            >
              {/* Animated Top Line */}
              <div
                aria-hidden="true"
                className="absolute left-0 right-0 top-0 z-20 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-transform duration-500 group-hover:scale-x-100"
              />

              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={project.image}
                  alt={`${project.title} - Wix Studio website project by Taosif Bin Sadhin`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Image Overlay */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90"
                />

                {/* Category */}
                <div className="absolute left-4 top-4">
                  <span className="rounded-full border border-white/20 bg-slate-950/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* View Live Hover Button */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View live ${project.title} website`}
                  title={`View ${project.title} live website`}
                  className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 opacity-0 shadow-xl transition-all duration-300 group-hover:opacity-100 hover:scale-105"
                >
                  View Live
                  <ExternalLink
                    aria-hidden="true"
                    className="h-4 w-4"
                  />
                </a>
              </div>

              {/* Project Content */}
              <div className="p-5 sm:p-6">
                <h3
                  id={`project-title-${index}`}
                  className="flex items-start justify-between gap-3 text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400"
                >
                  <span>{project.title}</span>

                  <ArrowUpRight
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <ul
                  aria-label={`Technologies used for ${project.title}`}
                  className="mt-5 flex flex-wrap gap-2"
                >
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600 transition-colors duration-300 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:group-hover:border-blue-500/30 dark:group-hover:bg-blue-500/10 dark:group-hover:text-blue-400"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                {/* Project Actions */}
                <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title} live website`}
                    title={`Visit ${project.title} live website`}
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
                  >
                    <ExternalLink
                      aria-hidden="true"
                      className="h-4 w-4"
                    />
                    View Live
                  </a>

                  <a
                    href={UPWORK_PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Hire Taosif Bin Sadhin for a Wix project`}
                    title="Hire Taosif Bin Sadhin on Upwork"
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20 dark:bg-white dark:text-slate-900 dark:hover:bg-blue-500 dark:hover:text-white"
                  >
                    Hire Me
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-4 w-4"
                    />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* GitHub Button */}
        <div className="project-reveal mt-10 translate-y-8 text-center opacity-0 transition-all duration-700 sm:mt-12 lg:mt-14">
          <a
            href="https://github.com/sadhin28"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View more web development projects by Taosif Bin Sadhin on GitHub"
            title="View more projects on GitHub"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-900 hover:bg-slate-900 hover:text-white hover:shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-white dark:hover:bg-white dark:hover:text-slate-900"
          >
            <Github aria-hidden="true" className="h-5 w-5" />
            View More Projects
          </a>
        </div>

        {/* Upwork CTA */}
        <aside
          aria-labelledby="projects-cta-heading"
          className="project-reveal relative mt-12 translate-y-8 overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6 opacity-0 transition-all duration-700 dark:border-blue-500/20 dark:from-blue-500/10 dark:via-slate-900 dark:to-purple-500/10 sm:mt-16 sm:p-10 lg:mt-20"
        >
          {/* CTA Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl"
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <div
              aria-hidden="true"
              className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/20"
            >
              <Sparkles className="h-6 w-6" />
            </div>

            <h3
              id="projects-cta-heading"
              className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl"
            >
              Need a Wix Website or Custom Solution?
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
              I can help you design, rebuild, develop, or optimize a
              professional Wix Studio website with responsive design, CMS,
              Velo functionality, automation, and SEO-focused improvements
              aligned with your business goals.
            </p>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={UPWORK_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hire Taosif Bin Sadhin on Upwork"
                title="Hire Taosif Bin Sadhin on Upwork"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-blue-500/25 dark:bg-white dark:text-slate-900 dark:hover:bg-blue-500 dark:hover:text-white"
              >
                Hire Me on Upwork
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="#contact"
                aria-label="Discuss your Wix website project with Taosif Bin Sadhin"
                title="Discuss your Wix project"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-500/40 dark:hover:text-blue-400"
              >
                Let's Discuss Your Project
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-500 dark:text-slate-500">
              Wix Studio • Wix Harmony • Wix Velo • Wix CMS • Automation •
              Responsive Design • SEO
            </p>
          </div>
        </aside>
      </div>

      {/* Animation CSS */}
      <style>{`
        .project-show {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        @media (prefers-reduced-motion: reduce) {
          .project-reveal {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }

          .project-reveal *,
          .project-reveal::before,
          .project-reveal::after {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;