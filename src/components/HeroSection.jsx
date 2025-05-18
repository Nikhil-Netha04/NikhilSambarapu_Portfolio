import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.3,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 sm:pt-32 md:pt-28 lg:pt-24">
      {/* Professional background with subtle light colors */}
      <div className="absolute inset-0">
        {/* Base gradient - more subtle and professional */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800"></div>
        
        {/* Subtle background accents */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          {/* Soft glow in the background */}
          <motion.div 
            className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-64 bg-blue-500/10 blur-3xl"
            animate={{
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          
          {/* Light accent at bottom */}
          <motion.div 
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-40 bg-indigo-500/10 blur-3xl"
            animate={{
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </div>
        
        {/* Professional grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMzMzMzIyIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-10"></div>
      </div>

      {/* Main content container - flex layout for left text, right image */}
      <div className="container mx-auto px-6 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-2 md:gap-3 lg:gap-4 xl:gap-4 2xl:gap-4">
          {/* Left side - Text content */}
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="max-w-2xl lg:text-left text-center lg:pr-8"
          >
            {/* Name with highlight */}
            <motion.div
              variants={textVariants}
              custom={1}
              className="inline-block relative"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2">
                Nikhil Sambarapu
              </h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 1.2 }}
                className="h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mt-2"
              />
            </motion.div>
            
            {/* Professional title */}
            <motion.h2
              variants={textVariants}
              custom={2}
              className="text-xl md:text-2xl text-gray-300 mt-6 font-light tracking-wider"
            >
              FULL STACK DEVELOPER
            </motion.h2>
            
            {/* Description */}
            <motion.p
              variants={textVariants}
              custom={3}
              className="text-lg text-gray-400 mt-6 leading-relaxed"
            >
              A Passionate Full Stack Developer with a knack for crafting seamless user experiences and robust backend systems. 
            </motion.p>
            
            {/* Call to action buttons */}
            <motion.div
              variants={textVariants}
              custom={4}
              className="mt-10 flex flex-wrap gap-4 lg:justify-start justify-center"
            >
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transform transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-blue-600/20"
              >
                View Portfolio
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="px-8 py-3 bg-transparent border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 font-medium rounded-md transform transition-all duration-300 hover:-translate-y-1"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>

          {/* Right side - Profile Image with enhanced styling (removed circle bubbles) */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative"
          >
            {/* Decorative elements behind the image */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/20 to-teal-400/20 blur-md transform -rotate-6"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/10 to-cyan-400/10 blur-md transform rotate-12"></div>
            
            {/* Glow effect */}
            <motion.div 
              className="absolute inset-0 rounded-full"
              animate={{ 
                boxShadow: ['0 0 25px rgba(56, 189, 248, 0.4)', '0 0 35px rgba(56, 189, 248, 0.2)', '0 0 25px rgba(56, 189, 248, 0.4)']
              }}
              transition={{ duration: 3, repeat: Infinity }}
            ></motion.div>
            
            {/* Main image container */}
            <div className="relative w-full h-full rounded-full border-4 border-white/10 overflow-hidden shadow-2xl shadow-blue-900/30 transform hover:scale-102 transition-transform duration-500">
              {/* Reflective glass effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-70 z-10"></div>
              
              {/* Profile image */}
              <img
                src="src/assets/1.jpg"
                alt="Nikhil Sambarapu"
                className="w-full h-full object-cover"
              />
              
              {/* Bottom highlight */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blue-500/30 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle floating elements in background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 right-1/6 opacity-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="text-xs text-blue-400 font-mono"
          >
            &lt;/div&gt;
          </motion.div>
        </div>
        
        {/* Subtle tech dots */}
        <div className="absolute top-20 right-20">
          <motion.div 
            className="w-1 h-1 rounded-full bg-blue-400/30"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>
        
        <div className="absolute bottom-20 left-20">
          <motion.div 
            className="w-1 h-1 rounded-full bg-cyan-400/30"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
        <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="group flex flex-col items-center">
          <span className="text-gray-400 text-sm mb-2 opacity-80 group-hover:opacity-100 transition-opacity">Scroll</span>
          <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Link>
      </motion.div>
    </section>
  );
};

export default HeroSection;