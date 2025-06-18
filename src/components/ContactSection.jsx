import React from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 px-2 sm:px-0 max-w-2xl mx-auto leading-relaxed">
          I'm always interested in new opportunities and collaborations
        </p>

        {/* Mobile-first grid layout that adapts to larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center gap-3 sm:gap-4 max-w-2xl mx-auto lg:max-w-none">
          <a
            href="mailto:sanketdvagal@gmail.com"
            className="flex items-center justify-center gap-3 px-6 py-4 sm:py-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full 
                     hover:bg-white/20 active:bg-white/20 
                     transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]
                     text-base sm:text-sm font-medium min-h-[52px] sm:min-h-[44px]
                     shadow-lg hover:shadow-xl"
          >
            <Mail className="w-5 h-5 flex-shrink-0" />
            <span className="truncate">Email</span>
          </a>

          <a
            href="tel:+19023187530"
            className="flex items-center justify-center gap-3 px-6 py-4 sm:py-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full 
                     hover:bg-white/20 active:bg-white/20 
                     transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]
                     text-base sm:text-sm font-medium min-h-[52px] sm:min-h-[44px]
                     shadow-lg hover:shadow-xl"
          >
            <Phone className="w-5 h-5 flex-shrink-0" />
            <span className="truncate">Phone</span>
          </a>

          <a
            href="https://linkedin.com/in/sanketvagal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-4 sm:py-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full 
                     hover:bg-white/20 active:bg-white/20 
                     transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]
                     text-base sm:text-sm font-medium min-h-[52px] sm:min-h-[44px]
                     shadow-lg hover:shadow-xl"
          >
            <Linkedin className="w-5 h-5 flex-shrink-0" />
            <span className="truncate">LinkedIn</span>
          </a>

          <a
            href="https://github.com/sanketvagal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-4 sm:py-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full 
                     hover:bg-white/20 active:bg-white/20 
                     transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]
                     text-base sm:text-sm font-medium min-h-[52px] sm:min-h-[44px]
                     shadow-lg hover:shadow-xl"
          >
            <Github className="w-5 h-5 flex-shrink-0" />
            <span className="truncate">GitHub</span>
          </a>
        </div>

        {/* Additional mobile-friendly spacing */}
        <div className="mt-8 sm:mt-12">
          <p className="text-sm text-gray-400 px-4 sm:px-0">
            Feel free to reach out through any of these channels
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
