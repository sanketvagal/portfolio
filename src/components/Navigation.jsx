import React from "react";

const Navigation = ({ activeSection }) => {
  return (
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
  );
};

export default Navigation;
