import { Heart, Linkedin, Mail } from "lucide-react";
import { BsGithub } from "react-icons/bs";
import logo from "../assets/isnexwebsolutionlogo.png";
const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gray-500/10 text-gray-400">
            <div className="max-w-7xl mx-auto  lg:px-1 px-4 py-10">
                <div className="grid  md:grid-cols-3 md:gap-20 gap-6 ">
                    {/* Brand */}
                  
                     <a href="#home" className="flex-shrink-0">
                                <h className="text-2xl font-bold text-blue-500">TAOSIF BIN SADHIN</h><br/><br/>
                                {/* <img src={logo} alt="Logo" className="h-12 w-auto" /><br></br> */}
                                <p className="text-muted-foreground ">
                                  Wix, Velo and CMS Developer crafting beautiful and functional web experiences.
                               </p>
                    </a>  

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <nav className="flex flex-col space-y-2">
                            {['About', 'Projects', 'Contact'].map((link) => (
                                <button
                                    key={link}
                                    onClick={() => {
                                        const element = document.getElementById(link.toLowerCase());
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                    className="text-muted-foreground hover:text-blue-500 hover:text-foreground transition-colors text-left"
                                >
                                    {link}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Connect */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Connect</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com/sadhin28"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-card hover:border-blue-500 rounded-lg transition-all duration-300 hover:scale-110 border border-border hover:border-primary"
                            >
                                <BsGithub className="h-5 w-5 hover:text-blue-500" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/taosif-bin-sadhin-527899368?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-card hover:border-blue-500 rounded-lg transition-all duration-300 hover:scale-110 border border-border hover:border-primary"
                            >
                                <Linkedin className="h-5 w-5 hover:text-blue-500" />
                            </a>
                            <a
                                target="_blank"
                                title="Email"
                                value="sadhincse@gmail.com"
                                href="mailto:sadhincse@gmail.com"
                                className="p-2 bg-card hover:border-blue-500 rounded-lg transition-all duration-300 hover:scale-110 border border-border hover:border-primary"
                            >
                                <Mail className="h-5 w-5 hover:text-blue-500" />
                            </a>
                        </div>
                       
                    </div>
                </div>
                {/* Copyright */}
                <div className="mt-12 pt-8 text-center border-t border-border">
                  
                        <p className="text-muted-foreground text-sm">
                           <span className="text-blue-500"> ©</span> {currentYear} Taosif <span className="text-blue-500">Bin</span> Sadhin. All rights reserved.
                        </p>
                        
                   
                </div>
            </div>
        </footer>
    );
};

export default Footer;