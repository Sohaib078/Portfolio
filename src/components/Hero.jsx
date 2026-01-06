import React from "react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import img from "../assets/Images/profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full font-medium mb-6">
              Full Stack Developer
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm{" "}
              <span className="text-primary-600 dark:text-primary-400">
                Sohaib Bhatti
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              4+ years of experience building scalable web applications with
              React, Next.js, and Django. Passionate about creating beautiful,
              functional software.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#contact" className="btn-primary flex items-center">
                Get In Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#projects" className="btn-secondary">
                View Projects
              </a>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com/sohaib078/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/sohaib-bhatti-b9ab31192/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:bhattisohaib11@gmail.com"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative animate-slide-up">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full blur-3xl opacity-20"></div>
              {/* Main Profile Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white/20 dark:border-gray-800/30 shadow-2xl">
                <img
                  src={img}
                  alt="Sohaib Bhatti - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Experience Badge */}
              <div className="absolute -bottom-4 right-6 md:right-10 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg">
                <p className="text-gray-800 dark:text-gray-200 font-semibold flex items-center">
                  <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  4+ Years Experience
                </p>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-400/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
