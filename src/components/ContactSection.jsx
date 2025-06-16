import React from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          I'm always interested in new opportunities and collaborations
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:sanketdvagal@gmail.com"
            className="flex items-center gap-2 px-6 py-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            Email
          </a>
          <a
            href="tel:+19023187530"
            className="flex items-center gap-2 px-6 py-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            Phone
          </a>
          <a
            href="https://linkedin.com/in/sanketvagal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
          <a
            href="https://github.com/sanketvagal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
