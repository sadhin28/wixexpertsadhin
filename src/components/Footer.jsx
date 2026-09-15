import { ArrowUpRight, Linkedin, Mail, Heart } from "lucide-react";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    const quickLinks = [
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        { name: "Projects", id: "projects" },
        { name: "Contact", id: "contact" },
    ];

    return (
        <footer className="border-t border-gray-200 bg-white text-gray-600 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950 dark:text-gray-400">

            {/* Main Footer */}
            <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-14 lg:px-8">

                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">

                    {/* Brand */}
                    <div>
                        <button
                            onClick={scrollToTop}
                            className="group text-left"
                            aria-label="Back to home"
                        >
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-blue-500 dark:text-white">
                                TAOSIF BIN{" "}
                                <span className="text-blue-500">SADHIN</span>
                            </h2>
                        </button>

                        <p className="mt-4 max-w-sm text-sm leading-6 text-gray-500 dark:text-gray-400">
                            Wix Studio, Velo & CMS Developer crafting modern,
                            responsive, and conversion-focused websites that
                            help businesses grow online.
                        </p>

                        {/* Availability */}
                        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-medium dark:border-slate-800 dark:bg-slate-900">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60"></span>
                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
                            </span>

                            <span className="text-gray-600 dark:text-gray-300">
                                Available for new projects
                            </span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
                            Quick Links
                        </h3>

                        <nav className="mt-5 flex flex-col items-start gap-3">
                            {quickLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className="text-sm text-gray-500 transition-all duration-200 hover:translate-x-1 hover:text-blue-500 dark:text-gray-400"
                                >
                                    {link.name}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
                            Let's Connect
                        </h3>

                        <p className="mt-4 max-w-xs text-sm leading-6 text-gray-500 dark:text-gray-400">
                            Have a Wix project, redesign, or custom Velo
                            functionality in mind? Let’s build something
                            great together.
                        </p>

                        {/* Social Icons */}
                        <div className="mt-5 flex items-center gap-3">

                            {/* GitHub */}
                            <a
                                href="https://github.com/sadhin28"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="group flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-gray-600 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-500 dark:border-slate-800 dark:bg-slate-900 dark:text-gray-400"
                            >
                                <BsGithub className="h-5 w-5" />
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/in/taosif-bin-sadhin-527899368/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="group flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-gray-600 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-500 dark:border-slate-800 dark:bg-slate-900 dark:text-gray-400"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>

                            {/* Email */}
                            <a
                                href="mailto:taosifsadhin113@gmail.com"
                                aria-label="Email"
                                className="group flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-gray-600 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-500 dark:border-slate-800 dark:bg-slate-900 dark:text-gray-400"
                            >
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>

                        {/* Upwork CTA */}
                        <a
                            href="https://www.upwork.com/freelancers/taosifbins?mp_source=share&utm_medium=copy_link&utm_campaign=share_via&utm_content=profile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-500 transition-all duration-300 hover:gap-3"
                        >
                            Hire me on Upwork
                            <ArrowUpRight className="h-4 w-4" />
                        </a>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-10 flex flex-col gap-4 border-t border-gray-200 pt-6 dark:border-slate-800 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">

                    <p className="text-center text-xs text-gray-500 dark:text-gray-500 sm:text-left">
                        © {currentYear}{" "}
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                            Taosif Bin Sadhin
                        </span>
                        . All rights reserved.
                    </p>

                    <p className="flex items-center justify-center gap-1 text-xs text-gray-500 dark:text-gray-500">
                        Wix Expert
                        <Heart className="h-3.5 w-3.5 fill-current text-red-500" />
                        Wix Studio, Velo & CMS Developer
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="text-xs font-medium text-gray-500 transition-colors hover:text-blue-500"
                    >
                        Back to top ↑
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;