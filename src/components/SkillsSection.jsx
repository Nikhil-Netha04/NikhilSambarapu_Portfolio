// src/components/SkillsSection.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaPython, FaServer } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiC } from 'react-icons/si';
import { TbBrandCpp } from 'react-icons/tb';
import { BiMobile } from 'react-icons/bi';

const SkillCircle = ({ skills, title, gradientColors, delay = 0 }) => {
  const [hovered, setHovered] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Function to calculate position on a circle
  const getPositionOnCircle = (index, total, radius) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2; // Start from top
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return { x, y };
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: 0.1
      }
    }
  };

  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.6
      }
    }
  };

  // Increased sizes for more attractive appearance
  const circleSize = 300; // Increased from 240 - Size of the main circle
  const skillCircleSize = 80; // Increased from 60 - Size of each skill circle
  const radius = circleSize / 2 - skillCircleSize / 2 - 15; // Radius for placing skill icons

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="flex flex-col items-center justify-center py-10 px-4"
    >
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6, delay }}
        className="text-3xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500"
      >
        {title}
      </motion.h3>

      <div className="relative" style={{ width: `${circleSize + 150}px`, height: `${circleSize + 150}px` }}>
        {/* Background circle with gradient */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.8, delay: delay + 0.2 }}
          className="absolute rounded-full opacity-20"
          style={{ 
            background: `radial-gradient(circle, ${gradientColors.join(', ')})`,
            width: `${circleSize}px`,
            height: `${circleSize}px`,
            left: '75px',
            top: '75px'
          }}
        />

        {/* Skills positioned in a circle */}
        {skills.map((skill, index) => {
          const position = getPositionOnCircle(index, skills.length, radius);
          const posX = position.x + (circleSize/2) + 75 - (skillCircleSize/2);
          const posY = position.y + (circleSize/2) + 75 - (skillCircleSize/2);
          const isHovered = hovered === skill.name;

          return (
            <motion.div
              key={skill.name}
              variants={circleVariants}
              className="absolute flex flex-col items-center cursor-pointer"
              style={{
                left: `${posX}px`,
                top: `${posY}px`,
                width: `${skillCircleSize}px`,
              }}
              onMouseEnter={() => setHovered(skill.name)}
              onMouseLeave={() => setHovered(null)}
              whileHover={{ 
                scale: 1.15, 
                zIndex: 10,
                transition: { duration: 0.2 }
              }}
            >
              {/* Skill name - positioned above the icon */}
              <motion.div 
                className="text-center text-sm font-medium px-2 py-1 rounded bg-slate-800/80 text-white whitespace-nowrap mb-3"
                animate={{
                  scale: isHovered ? 1.1 : 1,
                  color: isHovered ? skill.textColor || 'white' : 'white'
                }}
              >
                {skill.name}
              </motion.div>
              
              {/* Skill icon circle - larger and more prominent */}
              <motion.div 
                className="flex items-center justify-center w-full h-16 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 shadow-lg border border-slate-600 text-3xl"
                animate={{
                  boxShadow: isHovered 
                    ? `0 0 20px ${skill.glowColor || 'rgba(45, 212, 191, 0.7)'}`
                    : '0 4px 8px -1px rgba(0, 0, 0, 0.2)'
                }}
              >
                {skill.icon}
              </motion.div>
            </motion.div>
          );
        })}

        {/* Center hub - larger and more prominent */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : { scale: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: delay + 0.1,
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          className="absolute flex items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-blue-600 shadow-lg"
          style={{ 
            width: "110px",
            height: "110px",
            left: `${circleSize/2 - 55 + 75}px`, 
            top: `${circleSize/2 - 55 + 75}px`,
            boxShadow: "0 0 30px rgba(45, 212, 191, 0.7)"
          }}
        >
          <div className="text-white text-4xl">
            {title === "Frontend Development" ? <FaReact /> : 
             title === "Backend Development" ? <FaNodeJs /> : 
             title === "Programming Languages" ? <SiC /> : <FaGitAlt />}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const frontendSkills = [
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" />, glowColor: 'rgba(234, 88, 12, 0.7)', textColor: '#f97316' },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" />, glowColor: 'rgba(59, 130, 246, 0.7)', textColor: '#3b82f6' },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" />, glowColor: 'rgba(250, 204, 21, 0.7)', textColor: '#facc15' },
    { name: 'React', icon: <FaReact className="text-blue-400" />, glowColor: 'rgba(96, 165, 250, 0.7)', textColor: '#60a5fa' },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-teal-400" />, glowColor: 'rgba(45, 212, 191, 0.7)', textColor: '#2dd4bf' },
  ];

  const backendSkills = [
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, glowColor: 'rgba(34, 197, 94, 0.7)', textColor: '#22c55e' },
    { name: 'Express', icon: <SiExpress className="text-white" />, glowColor: 'rgba(255, 255, 255, 0.7)', textColor: '#ffffff' },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-400" />, glowColor: 'rgba(74, 222, 128, 0.7)', textColor: '#4ade80' },
    { name: 'SQL', icon: <SiMysql className="text-blue-400" />, glowColor: 'rgba(96, 165, 250, 0.7)', textColor: '#60a5fa' },
    { name: 'APIs', icon: <FaServer className="text-purple-400" />, glowColor: 'rgba(192, 132, 252, 0.7)', textColor: '#c084fc' },
  ];

  const programmingSkills = [
    { name: 'C', icon: <SiC className="text-blue-500" />, glowColor: 'rgba(59, 130, 246, 0.7)', textColor: '#3b82f6' },
    { name: 'C++', icon: <TbBrandCpp className="text-blue-600" />, glowColor: 'rgba(37, 99, 235, 0.7)', textColor: '#2563eb' },
    { name: 'Python', icon: <FaPython className="text-yellow-500" />, glowColor: 'rgba(234, 179, 8, 0.7)', textColor: '#eab308' },
  ];

  const VersionControl= [
    { name: 'Git/GitHub', icon: <FaGitAlt className="text-orange-500" />, glowColor: 'rgba(234, 88, 12, 0.7)', textColor: '#f97316' },
   
  ];

  // Animation variants for the section title
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={titleVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-2">My Skills</h2>
          <motion.div 
            className="w-32 h-2 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: "8rem" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Explore my technical expertise across different domains of software development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 justify-items-center mb-16">
          <SkillCircle 
            skills={frontendSkills} 
            title="Frontend Development" 
            gradientColors={["rgba(56, 189, 248, 0.8)", "rgba(6, 182, 212, 0.2)"]}
            delay={0.2}
          />
          
          <SkillCircle 
            skills={backendSkills} 
            title="Backend Development" 
            gradientColors={["rgba(52, 211, 153, 0.8)", "rgba(16, 185, 129, 0.2)"]}
            delay={0.4}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 justify-items-center">
          <SkillCircle 
            skills={programmingSkills} 
            title="Programming Languages" 
            gradientColors={["rgba(99, 102, 241, 0.8)", "rgba(79, 70, 229, 0.2)"]}
            delay={0.6}
          />
          
          <SkillCircle 
            skills={VersionControl} 
            title="Version Control" 
            gradientColors={["rgba(251, 113, 133, 0.8)", "rgba(244, 63, 94, 0.2)"]}
            delay={0.8}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;