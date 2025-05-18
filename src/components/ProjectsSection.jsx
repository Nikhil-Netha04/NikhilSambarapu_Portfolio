// src/components/ProjectsSection.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon - make sure to install react-icons

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: index * 0.15,
        ease: "easeOut"
      }
    }
  };

  // Content animation variants
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2 + (index * 0.15)
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="flex flex-col h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-teal-500/10 transform hover:scale-[1.02] transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container with animated overlay on hover */}
      <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-60 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={isHovered ? { scale: 1.08 } : { scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: isHovered ? 0.7 : 0.5 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      
      {/* Content container */}
      <motion.div 
        className="flex flex-col flex-grow p-4 sm:p-5 md:p-6 bg-gradient-to-b from-slate-800 to-slate-900 relative z-10"
        variants={contentVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h3 
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 tracking-tight"
        >
          {project.title}
        </motion.h3>
        
        {/* Technologies */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4"
        >
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/30"
            >
              {tech}
            </span>
          ))}
        </motion.div>
        
        {/* Description */}
        <motion.p 
          variants={itemVariants}
          className="text-gray-300 mb-4 sm:mb-6 text-xs sm:text-sm flex-grow"
        >
          {project.description}
        </motion.p>
        
        {/* Source Code button - more compact and elegant */}
        <motion.a
          variants={itemVariants}
          whileHover={{ 
            scale: 1.05,
            backgroundColor: "rgba(13, 148, 136, 0.9)" // teal-600 with opacity
          }}
          whileTap={{ scale: 0.95 }}
          href={project.sourceCode}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-teal-600/80 text-white rounded-lg font-medium transition-colors duration-300 text-xs sm:text-sm max-w-[90%] sm:max-w-xs mx-auto"
        >
          <FaGithub className="text-base sm:text-lg" />
          <span>View Code</span>
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Section title animation
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const projects = [
    {
      id: 1,
      title: 'SecureAuthenticationPRO',
      description: 'A full-stack authentication system built with MERN stack, offering robust security through JWT and HTTP-only cookie sessions. Features Bcrypt password hashing, email verification, and a responsive React frontend with protected routes.',
      image: 'src/assets/p1.png',
      technologies: ['MERN', 'Express', 'React', 'Node.js'],
      sourceCode: 'https://github.com/Nikhil-Netha04/SecureAuthPro',
    },
    {
      id: 2,
      title: 'Be Active Buddy',
      description: 'Comprehensive fitness app offering personalized workout plans and exercise suggestions, designed for cross-device functionality with smooth animations and intuitive UI.',
      image: 'src/assets/p2.png',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
      sourceCode: 'https://github.com/Nikhil-Netha04/BeFit-Buddy',
    },
    {
      id: 3,
      title: 'Brain Tumour Detection',
      description: 'Advanced ML system for automated segmentation of brain tumors from multimodal MR images, crucial for analysis and monitoring of disease progression with high accuracy.',
      image: 'src/assets/p3.jpeg',
      technologies: ['TensorFlow', 'Keras', 'OpenCV', 'NumPy', 'Matplotlib'],
      sourceCode: 'https://github.com/Nikhil-Netha04/BrainTumourImageSegmentation',
    },
    {
      id: 4,
      title: 'Plagiarism Checker',
      description: 'Intelligent plagiarism detection system powered by Long Short-Term Memory (LSTM) neural network architecture for accurate content similarity analysis.',
      image: 'src/assets/p4.png',
      technologies: ['TensorFlow', 'Keras', 'Pickle', 'NumPy', 'Matplotlib'],
      sourceCode: 'https://github.com/Nikhil-Netha04/Plagiarism_checker-using-LSTM-MODEL',
    },
    {
      id: 5,
      title: 'Responsive Chatbot',
      description: 'Interactive and intelligent chatbot interface built with modern web technologies and integrated with the powerful GEMINI API for natural conversations.',
      image: 'src/assets/p5.png',
      technologies: ['HTML', 'CSS', 'Javascript', 'GEMINI API'],
      sourceCode: 'https://github.com/Nikhil-Netha04/chat-bot',
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-slate-900">
      <div className="container mx-auto px-3 sm:px-4">
        <motion.div
          ref={ref}
          variants={titleVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <motion.div variants={titleVariants}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">My Projects</h2>
            <motion.div 
              className="w-16 sm:w-20 h-1 bg-teal-400 mx-auto mb-4 sm:mb-6"
              initial={{ width: 0 }}
              animate={inView ? { width: "5rem" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.div>
          </motion.div>
          <motion.p 
            variants={titleVariants} 
            className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-base md:text-lg px-2"
          >
            Explore my portfolio of projects, each crafted with attention to detail and modern technologies.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;