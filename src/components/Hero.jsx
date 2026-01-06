import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Code,
  Server,
  Palette,
} from "lucide-react";
import img from "../assets/Images/profile.jpg";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skills = [
    "React",
    "Next.js",
    "Django",
    "TypeScript",
    "Python",
    "Tailwind CSS",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div
          className="absolute w-64 h-64 bg-blue-500/5 rounded-full blur-2xl transition-all duration-300 ease-out"
          style={{
            left: `${mousePosition.x * 0.03}px`,
            top: `${mousePosition.y * 0.03}px`,
          }}
        ></div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute top-20 left-10 animate-float-slow">
        <Code className="w-8 h-8 text-primary-400/30" />
      </div>
      <div className="absolute top-1/3 right-20 animate-float">
        <Server className="w-8 h-8 text-purple-400/30" />
      </div>
      <div className="absolute bottom-1/4 left-20 animate-float-slower">
        <Palette className="w-8 h-8 text-blue-400/30" />
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Enhanced */}
          <div className="relative animate-fade-in">
            {/* Welcome Badge */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full shadow-lg">
                <Sparkles className="w-4 h-4 text-white mr-2" />
                <span className="text-white font-semibold">
                  Full Stack Developer
                </span>
              </div>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Available for work
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Crafting Digital{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                  Experiences
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-primary-400/30 to-purple-400/30 rounded-full"></div>
              </span>
            </h1>

            {/* Name Highlight */}
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-700 dark:text-gray-300">
                Hi, I'm{" "}
                <span className="relative">
                  <span className="text-primary-600 dark:text-primary-400">
                    Sohaib Bhatti
                  </span>
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-transparent rounded-full"></span>
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-xl leading-relaxed">
              With{" "}
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                4+ years
              </span>{" "}
              of expertise, I transform ideas into scalable web applications
              using modern technologies. Passionate about creating intuitive,
              performant, and visually stunning software solutions.
            </p>

            {/* Tech Stack Badges */}
            <div className="mb-10">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg text-gray-700 dark:text-gray-300 font-medium border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 hover:-translate-y-1 flex items-center"
              >
                <span>Let's Build Together</span>
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </a>
              <a
                href="#projects"
                className="px-8 py-4 border-2 border-primary-600/30 dark:border-primary-400/30 text-primary-600 dark:text-primary-400 rounded-full font-semibold hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:border-primary-600 dark:hover:border-primary-400 transition-all duration-300"
              >
                Explore My Work
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-8">
              <div className="flex space-x-6">
                {[
                  {
                    Icon: Github,
                    href: "https://github.com/sohaib078/",
                    label: "GitHub",
                  },
                  {
                    Icon: Linkedin,
                    href: "https://www.linkedin.com/in/sohaib-bhatti-b9ab31192/",
                    label: "LinkedIn",
                  },
                  {
                    Icon: Mail,
                    href: "mailto:bhattisohaib11@gmail.com",
                    label: "Email",
                  },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-gray-600 dark:text-gray-400 whitespace-nowrap">
                      {label}
                    </span>
                  </a>
                ))}
              </div>
              <div className="h-8 w-px bg-gray-300 dark:bg-gray-700"></div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Based in Pakistan
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                  Open to remote opportunities
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Enhanced Profile */}
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>

            {/* Main Image Container */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
              {/* Outer Ring Animation */}
              <div className="absolute -inset-4">
                <div className="absolute inset-0 rounded-full border-2 border-primary-400/20 animate-spin-slow"></div>
                <div className="absolute inset-2 rounded-full border-2 border-primary-300/20 animate-spin-slow-reverse"></div>
              </div>

              {/* Profile Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white/30 dark:border-gray-800/30 shadow-2xl group">
                <img
                  src={img}
                  alt="Sohaib Bhatti - Full Stack Developer"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-6 right-0 bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-3 rounded-full shadow-xl transform hover:scale-105 transition-transform duration-300">
                <p className="text-white font-bold flex items-center">
                  <span className="inline-flex w-2 h-2 bg-green-300 rounded-full mr-3 animate-pulse"></span>
                  <span className="text-lg">4+ Years</span>
                  <span className="ml-2 text-sm opacity-90">Expertise</span>
                </p>
              </div>

              {/* Projects Badge */}
              <div className="absolute -top-6 left-8 bg-white dark:bg-gray-800 px-5 py-3 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                <p className="text-gray-800 dark:text-gray-200 font-semibold flex items-center">
                  <Sparkles className="w-4 h-4 text-yellow-500 mr-2" />
                  <span>50+ Projects</span>
                </p>
              </div>

              {/* Tech Stack Orbital */}
              <div className="absolute inset-0 animate-spin-slow">
                {["React", "Next", "Django", "TS"].map((tech, i) => (
                  <div
                    key={tech}
                    className="absolute w-14 h-14 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `${50 + 40 * Math.cos((i * Math.PI) / 2)}%`,
                      top: `${50 + 40 * Math.sin((i * Math.PI) / 2)}%`,
                    }}
                  >
                    <span className="text-xs font-bold text-primary-600 dark:text-primary-400">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Bar */}
            <div className="mt-16 grid grid-cols-3 gap-4">
              {[
                { label: "Projects", value: "50+", desc: "Completed" },
                { label: "Experience", value: "4+", desc: "Years" },
                { label: "Clients", value: "20+", desc: "Satisfied" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                  style={{ animationDelay: `${index * 200 + 500}ms` }}
                >
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-500">
                    {stat.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
