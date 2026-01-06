import React from "react";
import { Heart, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Portfolio</h3>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a
               href="https://github.com/sohaib078/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
             href="https://www.linkedin.com/in/sohaib-bhatti-b9ab31192/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            {/* <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a> */}
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            © {currentYear} All Rights {" "}
            {/* <Heart className="w-4 h-4 mx-2 text-red-500 fill-current" /> */}
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
