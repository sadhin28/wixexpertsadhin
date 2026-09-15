import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import ReactiveButton from "reactive-button";
import { BsGithub, BsTwitter } from "react-icons/bs";
import {
    ArrowUpRight,
    CheckCircle2,
    Linkedin,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    Send,
} from "lucide-react";
import { toast } from "react-toastify";

const ContactForm = () => {
    const sectionRef = useRef(null);

    const [formData, setFormData] = useState({
        from_name: "",
        from_email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    // =========================
    // Scroll Animation
    // =========================
    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const elements = section.querySelectorAll(".contact-reveal");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("contact-show");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    // =========================
    // Input Change
    // =========================
    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    // =========================
    // Send Email
    // =========================
    const sendEmail = (e) => {
        e.preventDefault();

        const serviceID = "service_tz3y1xz";
        const templateID = "template_ab2fx8u";
        const userID = "55nir0XRjUEFpKhy3";

        emailjs.send(serviceID, templateID, formData, userID).then(
            () => {
                toast.success("Message sent successfully!");
                setStatus("Message sent successfully!");

                setFormData({
                    from_name: "",
                    from_email: "",
                    subject: "",
                    message: "",
                });
            },
            () => {
                toast.error("Failed to send message, please try again.");
                setStatus("Failed to send message, please try again.");
            }
        );
    };

    // =========================
    // Contact Information
    // =========================
    const contactInfo = [
        {
            icon: <Mail className="h-5 w-5" />,
            title: "Email",
            value: "taosifsadhin113@gmail.com",
            href: "mailto:taosifsadhin113@gmail.com",
        },
        {
            icon: <Phone className="h-5 w-5" />,
            title: "Phone",
            value: "01707986054",
            href: "tel:+8801707986054",
        },
        {
            icon: <MapPin className="h-5 w-5" />,
            title: "Location",
            value: "Dhaka, Bangladesh",
            href: "https://maps.app.goo.gl/Ro6DrNdwAF8BuVTf8",
        },
    ];

    // =========================
    // Social Links
    // =========================
    const socialLinks = [
        {
            icon: <BsGithub className="h-5 w-5" />,
            href: "https://github.com/sadhin28",
            label: "GitHub",
        },
        {
            icon: <Linkedin className="h-5 w-5" />,
            href: "https://www.linkedin.com/in/taosif-bin-sadhin-527899368/",
            label: "LinkedIn",
        },
        {
            icon: <BsTwitter className="h-5 w-5" />,
            href: "https://x.com/sadhincse",
            label: "Twitter",
        },
    ];

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="bg-white py-12 transition-colors duration-300 dark:bg-slate-950 sm:py-16 lg:py-20"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

                {/* =========================
                    Header
                ========================= */}
                <div className="contact-reveal mx-auto mb-10 max-w-2xl text-center opacity-0 translate-y-5 transition-all duration-700 sm:mb-14">
                    <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400 sm:text-sm">
                        <MessageCircle className="h-4 w-4" />
                        Get In Touch
                    </span>

                    <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
                        Let's Work{" "}
                        <span className="text-blue-600 dark:text-blue-400">
                            Together
                        </span>
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400 sm:text-base">
                        Have a Wix website project or need help with your
                        existing website? Send me a message and let's discuss
                        your project.
                    </p>
                </div>

                {/* =========================
                    Main Contact Area
                ========================= */}
                <div className="grid gap-6 lg:grid-cols-5 lg:gap-8">

                    {/* =========================
                        Contact Information
                    ========================= */}
                    <div className="contact-reveal opacity-0 -translate-x-5 transition-all duration-700 lg:col-span-2">

                        <div className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900 sm:p-6">

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                Contact Information
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                                I'm available for Wix Studio, Wix Velo,
                                website redesign, CMS, automation, and SEO
                                projects.
                            </p>

                            {/* Contact Items */}
                            <div className="mt-6 space-y-3">
                                {contactInfo.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        target={
                                            item.title === "Location"
                                                ? "_blank"
                                                : undefined
                                        }
                                        rel={
                                            item.title === "Location"
                                                ? "noopener noreferrer"
                                                : undefined
                                        }
                                        className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3.5 transition-all duration-300 hover:border-blue-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-950 dark:hover:border-blue-500/40"
                                    >
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-transform duration-300 group-hover:scale-105 dark:bg-blue-500/10 dark:text-blue-400">
                                            {item.icon}
                                        </div>

                                        <div className="min-w-0">
                                            <p className="text-xs text-slate-500 dark:text-slate-500">
                                                {item.title}
                                            </p>

                                            <p className="mt-0.5 truncate text-sm font-semibold text-slate-800 dark:text-slate-200">
                                                {item.value}
                                            </p>
                                        </div>

                                        <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-slate-400 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-500 group-hover:opacity-100" />
                                    </a>
                                ))}
                            </div>

                            {/* Divider */}
                            <div className="my-6 border-t border-slate-200 dark:border-slate-800" />

                            {/* Social */}
                            <div>
                                <p className="mb-3 text-sm font-semibold text-slate-900 dark:text-white">
                                    Follow Me
                                </p>

                                <div className="flex gap-2.5">
                                    {socialLinks.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={link.label}
                                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
                                        >
                                            {link.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Availability */}
                            <div className="mt-6 flex items-center gap-2 rounded-xl bg-green-50 px-3 py-2.5 dark:bg-green-500/10">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                                </span>

                                <span className="text-xs font-medium text-green-700 dark:text-green-400">
                                    Available for new projects
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* =========================
                        Contact Form
                    ========================= */}
                    <div className="contact-reveal opacity-0 translate-x-5 transition-all duration-700 lg:col-span-3">

                        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6 lg:p-8">

                            <div className="mb-6 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                                    <Send className="h-5 w-5" />
                                </div>

                                <div>
                                    <h3 className="font-bold text-slate-900  dark:text-white">
                                        Send Me a Message
                                    </h3>

                                    <p className="text-xs text-slate-500 dark:text-slate-500">
                                        Tell me about your project
                                    </p>
                                </div>
                            </div>

                            <form
                                onSubmit={sendEmail}
                                className="space-y-4"
                            >

                                {/* Name + Email */}
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                                    <div>
                                        <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                                            Name
                                        </label>

                                        <input
                                            type="text"
                                            name="from_name"
                                            value={formData.from_name}
                                            onChange={handleChange}
                                            placeholder="Your name"
                                            required
                                            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-600"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                                            Email
                                        </label>

                                        <input
                                            type="email"
                                            name="from_email"
                                            value={formData.from_email}
                                            onChange={handleChange}
                                            placeholder="you@example.com"
                                            required
                                            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-600"
                                        />
                                    </div>

                                </div>

                                {/* Subject */}
                                <div>
                                    <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                                        Subject
                                    </label>

                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Project discussion"
                                        required
                                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-600"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                                        Project Details
                                    </label>

                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell me about your project..."
                                        required
                                        rows="6"
                                        className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm leading-6 text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-600"
                                    />
                                </div>

                                {/* Status */}
                                {status && (
                                    <div
                                        className={`flex items-center gap-2 rounded-lg border px-3 py-2.5 text-sm ${
                                            status.includes("success")
                                                ? "border-green-200 bg-green-50 text-green-600 dark:border-green-500/20 dark:bg-green-500/10 dark:text-green-400"
                                                : "border-red-200 bg-red-50 text-red-600 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400"
                                        }`}
                                    >
                                        {status.includes("success") && (
                                            <CheckCircle2 className="h-4 w-4" />
                                        )}

                                        {status}
                                    </div>
                                )}

                                {/* Button */}
                                <div className="pt-1">
                                    <ReactiveButton
                                        outline
                                        className="!h-12 !w-full !rounded-lg !border-blue-500 !bg-blue-600 text-white  transition-all duration-300 hover:!bg-blue-700"
                                        type="submit"
                                        color="blue"
                                        idleText="Send Message"
                                        size="large"
                                    />
                                </div>

                                <p className="text-center text-xs text-slate-500 dark:text-slate-500">
                                    I'll get back to you as soon as possible.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>

                {/* =========================
                    Upwork CTA
                ========================= */}
                <div className="contact-reveal mt-6 opacity-0 translate-y-5 transition-all duration-700 sm:mt-8">
                    <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-blue-100 bg-blue-50 p-5 text-center dark:border-blue-500/20 dark:bg-blue-500/5 sm:flex-row sm:p-6 sm:text-left">

                        <div>
                            <h3 className="font-bold text-slate-900 dark:text-white">
                                Prefer Upwork?
                            </h3>

                            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                                You can also hire me directly through my Upwork
                                profile.
                            </p>
                        </div>

                        <a
                            href="https://www.upwork.com/freelancers/taosifbins?mp_source=share&utm_medium=copy_link&utm_campaign=share_via&utm_content=profile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20"
                        >
                            Hire Me on Upwork
                            <ArrowUpRight className="h-4 w-4" />
                        </a>
                    </div>
                </div>

            </div>

            {/* =========================
                Animation CSS
            ========================= */}
            <style>{`
                .contact-show {
                    opacity: 1 !important;
                    transform: translate(0, 0) !important;
                }

                @media (prefers-reduced-motion: reduce) {
                    .contact-reveal {
                        opacity: 1 !important;
                        transform: none !important;
                        transition: none !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default ContactForm;

