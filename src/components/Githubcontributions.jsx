import { useEffect, useRef, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { Github, CalendarDays, ArrowRight } from "lucide-react";

const GitHubContributions = () => {
    const currentYear = new Date().getFullYear();

    const [year, setYear] = useState(currentYear);
    const [blockSize, setBlockSize] = useState(15);
    const [fontSize, setFontSize] = useState(14);
    const [blockMargin, setBlockMargin] = useState(4);

    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    // Responsive GitHub calendar
    useEffect(() => {
        const updateSizes = () => {
            const width = window.innerWidth;

            if (width < 480) {
                setBlockSize(8);
                setBlockMargin(2);
                setFontSize(9);
            } else if (width < 640) {
                setBlockSize(9);
                setBlockMargin(2);
                setFontSize(10);
            } else if (width < 1024) {
                setBlockSize(11);
                setBlockMargin(3);
                setFontSize(12);
            } else {
                setBlockSize(13);
                setBlockMargin(4);
                setFontSize(14);
            }
        };

        updateSizes();

        window.addEventListener("resize", updateSizes);

        return () => {
            window.removeEventListener("resize", updateSizes);
        };
    }, []);

    // Scroll reveal animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.15,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Current + previous year
    const years = [];

    for (let y = currentYear; y >= currentYear - 1; y--) {
        years.push(y);
    }

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-white py-12 transition-colors duration-300 dark:bg-slate-950 sm:py-16 lg:py-20"
        >
            {/* Background Decoration */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-20 h-48 w-48 -translate-x-1/2 rounded-full bg-blue-500/5 blur-3xl dark:bg-blue-500/10" />

                <div
                    className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div
                    className={`mx-auto max-w-2xl text-center transition-all duration-1000 ${
                        isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                    }`}
                >
                    {/* Small Badge */}
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
                        <Github className="h-3.5 w-3.5" />
                        GitHub Activity
                    </div>

                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl dark:text-white">
                        My GitHub{" "}
                        <span className="text-blue-500">
                            Contributions
                        </span>
                    </h2>

                    <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-500 sm:text-base dark:text-gray-400">
                        A look at my coding activity, consistency, and
                        contributions on GitHub.
                    </p>
                </div>

                {/* Main Content */}
                <div
                    className={`mx-auto mt-8 max-w-6xl transition-all delay-200 duration-1000 sm:mt-10 lg:mt-12 ${
                        isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-10 opacity-0"
                    }`}
                >
                    <div className="grid gap-5 lg:grid-cols-[180px_1fr] lg:items-stretch">

                        {/* Year Selector */}
                        <div className="flex flex-col justify-center rounded-2xl border border-gray-200 bg-gray-50 p-5 text-left shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-blue-500/40">

                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
                                <CalendarDays className="h-5 w-5" />
                            </div>

                            <label
                                htmlFor="year-select"
                                className="mb-2 text-sm font-semibold text-gray-800 dark:text-gray-200"
                            >
                                Select Year
                            </label>

                            <select
                                id="year-select"
                                value={year}
                                onChange={(e) =>
                                    setYear(parseInt(e.target.value))
                                }
                                className="w-full cursor-pointer rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm font-medium text-gray-700 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-gray-200"
                            >
                                {years.map((y) => (
                                    <option key={y} value={y}>
                                        {y}
                                    </option>
                                ))}
                            </select>

                            <p className="mt-3 text-xs leading-5 text-gray-500 dark:text-gray-500">
                                View your GitHub contribution activity by
                                year.
                            </p>
                        </div>

                        {/* GitHub Calendar */}
                        <div className="group relative min-w-0 overflow-hidden rounded-2xl border border-gray-200 bg-white p-3 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-blue-500/40 sm:p-5">

                            {/* Top Animated Line */}
                            <div className="absolute left-0 right-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 transition-transform duration-700 group-hover:scale-x-100" />

                            {/* Calendar Header */}
                            <div className="mb-4 flex items-center justify-between px-1">

                                <div>
                                    <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                                        Contribution Activity
                                    </h3>

                                    <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-500">
                                        {year}
                                    </p>
                                </div>

                                <a
                                    href="https://github.com/sadhin28"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/link inline-flex items-center gap-1 text-xs font-medium text-blue-500 transition-all duration-300 hover:text-blue-600"
                                >
                                    GitHub
                                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                                </a>
                            </div>

                            {/* Scrollable Calendar */}
                            <div
                                className="w-full overflow-x-auto overflow-y-hidden pb-2"
                                style={{
                                    WebkitOverflowScrolling: "touch",
                                    scrollbarWidth: "thin",
                                }}
                            >
                                <div className="flex min-w-max justify-center">
                                    <GitHubCalendar
                                        username="sadhin28"
                                        blockSize={blockSize}
                                        blockMargin={blockMargin}
                                        fontSize={fontSize}
                                        year={year}
                                    />
                                </div>
                            </div>

                            {/* Mobile Hint */}
                            <div className="mt-2 text-center text-[10px] text-gray-400 sm:hidden">
                                ← Swipe to view full calendar →
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div
                    className={`mt-8 flex justify-center transition-all delay-500 duration-1000 sm:mt-10 ${
                        isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-6 opacity-0"
                    }`}
                >
                    <a
                        href="https://github.com/sadhin28"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-500 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:text-gray-300"
                    >
                        <Github className="h-4 w-4" />
                        View My GitHub
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                </div>
            </div>

            {/* Reduced Motion */}
            <style>{`
                @media (prefers-reduced-motion: reduce) {
                    * {
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                        transition-duration: 0.01ms !important;
                        scroll-behavior: auto !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default GitHubContributions;