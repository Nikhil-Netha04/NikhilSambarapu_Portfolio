// src/components/AboutSection.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';

const AboutSection = () => {
  const [rotation, setRotation] = useState(0);

  // Replace these URLs with your actual social media and resume links
  const socialLinks = {
    github: "https://github.com/nikhil-netha04",
    linkedin: "https://www.linkedin.com/in/nikhil-sambarapu-1699582b7/",
    resumeURL: "/Nikhil_ResumeFS.pdf" 
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500">
            About Me
          </h2>
          <div
            className="w-32 h-2 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 mx-auto mb-6 rounded-full"
          ></div>
        </div>

        {/* Text Section */}
        <div
          className="w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-lg md:text-xl leading-loose text-gray-300"
        >
          <p>
            Hello! I'm <span className="text-teal-400 font-bold">Nikhil</span>, a passionate Software Developer &  AI enthusiast dedicated to crafting innovative solutions that make a real impact.
          </p>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 justify-center gap-y-3 gap-x-6 max-w-2xl mx-auto"
          >
            
          </div>

           <p>
            With expertise in <span className="text-teal-300 font-semibold">modern web technologies</span> and a <span className="text-blue-300 font-semibold">strong foundation in Full-stack Web development and data structures & algorithms</span>, I specialize in building scalable applications and efficient systems. My approach combines technical excellence with creative problem-solving, enabling me to deliver solutions that are both innovative and practical. I'm familiar with <span className="text-purple-300 font-semibold">AI tools and basic machine learning concepts</span>, and passionate about leveraging cutting-edge technologies to solve complex challenges and create meaningful impact.
          </p>

          {/* Social Links and Resume Button */}
          <div
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            {/* GitHub Link */}
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(45, 212, 191, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-lg bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg shadow-teal-500/20"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </motion.a>
            
            {/* LinkedIn Link */}
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(37, 99, 235, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-500/20"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(168, 85, 247, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              href={socialLinks.resumeURL}
              download="public/Nikhil_ResumeFS.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg shadow-purple-500/20"
            > 
              <svg 
                className="w-5 h-5" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
              Resume
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
