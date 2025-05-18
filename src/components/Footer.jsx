import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = {
    github: "https://github.com/nikhil-netha04",
    linkedin: "https://www.linkedin.com/in/nikhil-sambarapu-1699582b7/",
    facebook: "https://www.facebook.com/share/1A9pZTp1AZ/"
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-slate-900 border-t border-slate-800"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <Link to="home" smooth={true} duration={500} className="cursor-pointer">
              <span className="text-3xl font-extrabold text-teal-400 tracking-wider">Nikhil Sambarapu</span>
            </Link>
            <p className="text-gray-400 mt-2 text-lg">Crafting innovative digital solutions with passion & precision</p>
          </div>

          <div className="flex flex-wrap justify-center space-x-6 md:space-x-8 mb-6 md:mb-0 text-lg">
            {['home', 'about', 'skills', 'projects', 'contact'].map(section => (
              <Link
                key={section}
                to={section}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-300 hover:text-teal-400 transition-transform transform hover:scale-105 cursor-pointer capitalize"
              >
                {section}
              </Link>
            ))}
          </div>

          <div className="flex space-x-4">
  {Object.entries(socialLinks).map(([key, url]) => (
    <motion.a
      key={key}
      whileHover={{ scale: 1.1, y: -3 }}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${key} profile`}
      className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-teal-500 transition-colors duration-300"
    >
      {key === 'github' && <i className="fab fa-github text-xl"></i>}
      {key === 'linkedin' && <i className="fab fa-linkedin-in text-xl"></i>}
      {key === 'facebook' && <i className="fab fa-facebook-f text-xl"></i>}
    </motion.a>
  ))}
</div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Your Portfolio. All rights reserved.
          </p>

          <div className="flex space-x-6 text-base">
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-transform hover:scale-105">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-transform hover:scale-105">
              Terms of Service
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 text-center text-gray-400 text-sm"
        >
          Made with <span className="text-red-500 text-xl">♥</span> by <span className="text-teal-400 font-semibold">Nikhil</span>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
