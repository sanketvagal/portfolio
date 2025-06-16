import React from "react";
import { BookOpen, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div
            className="backdrop-blur-xl bg-white/5 rounded-3xl p-8 border border-white/10 
                         hover:bg-white/10 active:bg-white/10 
                         transition-all duration-300"
          >
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
          <div
            className="backdrop-blur-xl bg-white/5 rounded-3xl p-8 border border-white/10 
                         hover:bg-white/10 active:bg-white/10 
                         transition-all duration-300"
          >
            <Award className="w-12 h-12 text-pink-400 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Achievements</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Top 5 Finalist - Atlantic Canadian Programming Contest</li>
              <li>• Published research on AI-based pest detection</li>
              <li>• Multiple hackathon participations with MLH</li>
              <li>• Graduate Teaching Assistant for AI & Security courses</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
