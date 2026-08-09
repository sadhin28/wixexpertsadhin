import { Code, ExternalLink } from 'lucide-react';
import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaBuyNLarge, FaBuysellads } from 'react-icons/fa';
import { GiBuyCard } from 'react-icons/gi';
import { SiFiverr } from 'react-icons/si';
import ReactiveButton from 'reactive-button';

const Projects = () => {
    const projects = [
  {
   
    title: "I.C.T. AI Research Support Platform",
    description: "I.C.T. is a modern Wix Studio website with a responsive design, clear navigation, and AI-powered research support. It helps sponsors easily connect with and support incarcerated individuals.",
    technologies: [
      "Wix Studio",
      "Velo by Wix",
      "JavaScript",
      "CMS",
      "Responsive Design",
      "SEO Optimization",
    ],
    buyNowUrl: "https://www.fiverr.com/s/BRqEGAl",
    liveUrl: "https://www.ictcontools.com/",
    image: "https://i.ibb.co.com/gLdwjb6J/Screenshot-2026-07-31-202351.png",
  },

  {
    title: "Business Tax Resource Hub",
    description:
      "A professional Wix website providing essential tax checklists, worksheets, and calculators to help businesses stay organized, maximize deductions, and simplify tax preparation with an intuitive and user-friendly experience.",
    technologies: [
      "Wix Studio",
      "Velo by Wix",
      "JavaScript",
      "CMS",
      "Responsive Design",
      "SEO Optimization",
    ],
    buyNowUrl: "https://www.fiverr.com/s/BRqEGAl",
    liveUrl: "https://www.taxtoolkit.info/home",
    image: "https://i.ibb.co.com/Z6yHKvH1/Screenshot-2026-07-31-212415.png",
  },

  {
    title: "CAMY's Caribbean Mart & Eatery",
    description:
      "A vibrant Wix website for a Caribbean grocery store and restaurant, featuring authentic Jamaican cuisine, island-inspired branding, responsive design, and an easy-to-navigate experience for customers.",
    technologies: [
      "Wix Studio",
      "Velo by Wix",
      "JavaScript",
      "CMS",
      "Responsive Design",
      "SEO Optimization",
    ],
    buyNowUrl: "https://www.fiverr.com/s/BRqEGAl",
    liveUrl: "https://www.camyscaribbeanmart.com/",
    image: "https://i.ibb.co.com/gMS17yCZ/Screenshot-2026-07-31-220154.png",
  },

  {
    title: "Nado Embroidery",
    description:
      "A professional Wix website for a custom embroidery business, showcasing premium embroidered apparel and promotional products with a clean, responsive design that highlights quality craftsmanship and personalized service.",
    technologies: [
      "Wix Studio",
      "Velo by Wix",
      "JavaScript",
      "CMS",
      "Responsive Design",
      "SEO Optimization",
    ],
    buyNowUrl: "https://www.fiverr.com/s/BRqEGAl",
    liveUrl: "https://www.nadoembroidery.com/",
    image: "https://i.ibb.co.com/cKF4F1PM/Screenshot-2026-07-31-221201.png",
  },

  {
    title: "TXT Group",
    description:
      "A professional Wix website for a global stainless steel and nickel alloy trading company, featuring a modern, responsive design that highlights industry expertise, international operations, and trusted supply chain solutions.",
    technologies: [
      "Wix Studio",
      "Velo by Wix",
      "JavaScript",
      "CMS",
      "Responsive Design",
      "SEO Optimization",
    ],
    buyNowUrl: "https://www.fiverr.com/s/BRqEGAl",
    liveUrl: "https://www.txt-group.com/",
    image: "https://i.ibb.co.com/2YknFS0M/Screenshot-2026-07-31-222135.png",
  },

  {
    title: "JO'S Coffee Home",
    description:
      "A warm and inviting Wix website for a specialty coffee brand, featuring handcrafted coffee products, responsive design, and a visually engaging experience that reflects the rich flavors and passion behind every cup.",
    technologies: [
      "Wix Studio",
      "Velo by Wix",
      "JavaScript",
      "CMS",
      "Responsive Design",
      "SEO Optimization",
    ],
    buyNowUrl: "https://www.fiverr.com/s/BRqEGAl",
    liveUrl: "https://www.joscoffeehome.com/",
    image: "https://i.ibb.co.com/mr34CXns/Screenshot-2026-07-31-222826.png",
  },
];
    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto ">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up">
                        Featured <span className="text-blue-500">Projects</span>
                    </h2>
                    <p className="text-xl text-gray-400 text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
                        A showcase of my Wix Studio, Wix Classic, and Velo by Wix projects, featuring custom Velo development, CMS integrations, and advanced automation solutions.
                    </p>
                </div>

                <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        
                        <div
                            key={index}
                            className="flex flex-col group bg-gray-500/10 overflow-hidden border border-border hover:border-blue-500 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl animate-fade-in-up rounded-lg"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Project Image/Gradient */}

                            <div className={`flex-grow relative overflow-hidden`}>

                                <div className="inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300">
                                    <img src={project.image} className='' alt="" />
                                </div>

                            </div>

                            {/* Project Content */}
                            <div className="px-6 py-6 space-y-4">
                                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3 pt-4 flex-wrap">
                                    {/* <ReactiveButton outline
                                        className='rounded'
                                        color="blue"
                                        idleText={
                                            <a className='flex items-center' href={project.buyNowUrl} target="_blank" rel="noopener noreferrer">
                                                <SiFiverr className="mr-1 h-4 w-4" />
                                                Buy Now
                                            </a>
                                        }
                                        size="lerge"
                                    /> */}
                                    <ReactiveButton
                                        className='rounded'
                                        color="blue"
                                        idleText={
                                            <a className='flex items-center' href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="mr-2 h-4 w-4" />
                                                Live Demo
                                            </a>
                                        }
                                        size="lerge"
                                    />

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* More Projects CTA */}
                <div className="text-center  mt-12 animate-fade-in-up animate-delay-800">
                    <ReactiveButton outline
                        className='rounded'
                        color="blue"
                        idleText={<a className='flex p-1 items-center' href="https://github.com/sadhin28" target="_blank" rel="noopener noreferrer">
                            <BsGithub className="mr-2 h-5 w-5" />
                            View All Projects on GitHub
                        </a>}
                        size="lerge"
                    />

                </div>
            </div>
        </section>
    );
};

export default Projects;