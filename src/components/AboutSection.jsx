// src/components/AboutSection.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';

const AboutSection = () => {
  const [rotation, setRotation] = useState(0);

  const socialLinks = {
    github: "https://github.com/nikhil-netha04",
    linkedin: "https://www.linkedin.com/in/nikhil-sambarapu-1699582b7/",
    resumeURL: "/Nikhil_ResumeFS.pdf"   // file in public folder
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500">
            About Me
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
        </div>

        {/* Description */}
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-lg md:text-xl leading-loose text-gray-300">
          <p>
            Hello! I'm <span className="text-teal-400 font-bold">Nikhil</span>, a passionate Software Developer & AI enthusiast dedicated to crafting innovative solutions that make a real impact.
          </p>

          <p>
            With expertise in <span className="text-teal-300 font-semibold">modern web technologies</span> and a <span className="text-blue-300 font-semibold">strong foundation in Full-stack Web development and data structures & algorithms</span>, I specialize in building scalable applications and efficient systems. I'm familiar with <span className="text-purple-300 font-semibold">AI tools and basic machine learning concepts</span>.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">

            {/* GitHub */}
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(45, 212, 191, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-lg bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg font-semibold 
                         flex items-center gap-2 shadow-lg shadow-teal-500/20 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484..."></path>
              </svg>
              GitHub
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(37, 99, 235, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold 
                         flex items-center gap-2 shadow-lg shadow-blue-500/20 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569..."></path>
              </svg>
              LinkedIn
            </motion.a>

            {/* Resume Download */}
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(168, 85, 247, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              href={socialLinks.resumeURL}
              download="Nikhil_ResumeFS.pdf"
              className="px-6 py-3 text-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg font-semibold 
                         flex items-center gap-2 shadow-lg shadow-purple-500/20 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2..."></path>
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
