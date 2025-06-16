import React from "react";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <div className="text-center z-10 max-w-4xl mx-auto">
        <div className="mb-8 relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-3xl opacity-50"></div>
          <h1 className="relative text-5xl sm:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Sanket Vagal
            </span>
          </h1>
        </div>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8">
          Full Stack Developer & Machine Learning Engineer
        </p>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Master's in Applied Computer Science @ St. Francis Xavier University,
          Canada
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full font-semibold hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};

export default HeroSection;
