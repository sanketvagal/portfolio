"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
  Code,
  Database,
  Globe,
  Cpu,
  Award,
  BookOpen,
  Briefcase,
} from "lucide-react";

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const projects = [
    {
      title: "React Projects Collection",
      description:
        "Series of hands-on projects including markdown-based notes app, interactive meme generator, and Tenzies game, demonstrating proficiency in React components and state management",
      tech: ["HTML", "React", "JavaScript", "CSS", "Vite"],
      period: "Jul 2023 – Aug 2023",
      gradient: "from-blue-400 to-cyan-400",
    },
    {
      title: "Toxicity Prediction Challenge II",
      description:
        "Implemented a LightGBM-based machine learning model with 82.28% F1 score to predict chemical toxicity for drug discovery and safety assessment",
      tech: ["Python", "scikit-learn", "RDKit", "LightGBM", "Docker"],
      period: "Jan 2023 – Apr 2023",
      gradient: "from-yellow-400 to-orange-400",
    },
    {
      title: "E-Commerce Database System",
      description:
        "Developed an E-commerce application comparing SQL and NoSQL Databases through requirement gathering, schema design, and data ingestion",
      tech: ["MySQL", "MongoDB", "MongoDB Compass"],
      period: "Sep 2022 – Dec 2022",
      gradient: "from-green-400 to-emerald-400",
    },
    {
      title: "Travel & Entertainment Search",
      description:
        "Responsive web application serving as a guide to nearby places with detailed information, pictures, map navigation, reviews, and social media integration",
      tech: [
        "HTML",
        "CSS",
        "PHP",
        "JavaScript",
        "Bootstrap",
        "Google Places API",
        "Twitter API",
      ],
      period: "Jan 2019 – Mar 2019",
      gradient: "from-purple-400 to-pink-400",
    },
    {
      title: "React Fitbit Dashboard",
      description:
        "Interactive dashboard visualizing activity metrics with real-time health insights using Fitbit API",
      tech: ["JavaScript", "React", "OAuth2 PKCE", "Chart.js"],
      period: "May 2024 – Aug 2024",
      gradient: "from-blue-400 to-cyan-400",
    },
    {
      title: "Custom Android ROM Development",
      description:
        "Custom ROM based on AOSP to revive outdated smartphones with system optimizations",
      tech: ["AOSP", "Android SDK", "Linux", "Kernel Modifications"],
      period: "Jan 2024 – Mar 2024",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Room Type Image Classification",
      description:
        "Deep learning model achieving 84.7% accuracy on ResNet50V2 for room image classification",
      tech: ["Python", "Keras", "TensorFlow", "Transfer Learning"],
      period: "Jan 2023 – Apr 2023",
      gradient: "from-orange-400 to-red-400",
    },
    {
      title: "Farmatron - AI Pest Detection Drone",
      description:
        "AI-powered plant disease detection with 83% precision, deployed on Raspberry Pi with web interface",
      tech: ["Python", "TensorFlow", "Django", "Raspberry Pi"],
      period: "Jul 2019 – Mar 2020",
      gradient: "from-orange-400 to-red-400",
    },
  ];

  const skills = {
    Languages: ["Python", "Java", "JavaScript", "Kotlin", "C", "C++"],
    "Web Tech": [
      "HTML",
      "CSS",
      "React",
      "Django",
      "Flask",
      "Node.js",
      "REST API",
    ],
    "ML/AI": [
      "TensorFlow",
      "Keras",
      "scikit-learn",
      "NumPy",
      "Pandas",
      "OpenCV",
    ],
    Tools: [
      "Git",
      "Docker",
      "GitHub Actions",
      "Jupyter",
      "Tableau",
      "Android SDK",
    ],
  };

  const experience = [
    {
      title: "Graduate Teaching Assistant - Artificial Intelligence",
      company: "St. Francis Xavier University",
      period: "Jan 2024 – Apr 2024",
      highlights: [
        "Automated grading with Python scripts, reducing time by 40%",
        "Analyzed student performance data using Pandas and Matplotlib",
        "Collaborated with Department Chair to enhance course delivery",
      ],
    },
    {
      title: "Graduate Teaching Assistant - Computer & Network Security",
      company: "St. Francis Xavier University",
      period: "Sep 2023 – Dec 2023",
      highlights: [
        "Created Tableau visualizations for student performance analysis",
        "Implemented automated grading system, reducing time by 30%",
        "Supported 40+ students with comprehensive feedback",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-900/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              SV
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                "home",
                "about",
                "experience",
                "skills",
                "projects",
                "contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`capitalize transition-colors ${
                    activeSection === item
                      ? "text-purple-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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
            Master's in Applied Computer Science @ St. Francis Xavier
            University, Canada
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

      {/* About Section */}
      <section id="about" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <BookOpen className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Education</h3>
              <div className="space-y-2">
                <p className="text-lg font-medium">
                  Master of Applied Computer Science
                </p>
                <p className="text-gray-400">
                  St. Francis Xavier University, Canada
                </p>
                <p className="text-purple-400">GPA: 87.80/100</p>
                <p className="text-sm text-gray-500">Sep 2022 – May 2024</p>
              </div>
            </div>
            <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Award className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Achievements</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  • Top 5 Finalist - Atlantic Canadian Programming Contest
                </li>
                <li>• Published research on AI-based pest detection</li>
                <li>• Multiple hackathon participations with MLH</li>
                <li>• Graduate Teaching Assistant for AI & Security courses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/5 rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                    <p className="text-purple-400">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 text-sm">{exp.period}</span>
                </div>
                <ul className="space-y-2 text-gray-300">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i}>• {highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="backdrop-blur-xl bg-white/5 rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-purple-400">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group backdrop-blur-xl bg-white/5 rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.05]"
              >
                <div
                  className={`h-2 w-full bg-gradient-to-r ${project.gradient} rounded-full mb-6 opacity-80`}
                ></div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>
                <p className="text-xs text-gray-500 mb-4">{project.period}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/10 rounded-lg text-xs border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
    </div>
  );
};

export default Portfolio;
