import React, { useState, useEffect } from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
  ChevronRight,
  ExternalLink,
  Sparkles,
  Award,
  TrendingUp,
  Users,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
} from "lucide-react";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const experiences = [
    {
      company: "7 Kings Code LLC",
      position: "Senior Full Stack Developer",
      period: "2023 - Present",
      location: "Lahore, Pakistan",
      description:
        "Lead development of multiple web applications using React, Next.js, and Django. Improved application performance by 40% through advanced optimization techniques.",
      achievements: [
        "Architected and led development of 3+ major web applications",
        "Reduced page load time by 40% through optimization",
        "Mentored 3 junior developers",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
      ],
      technologies: [
        "React.js",
        "Next.js",
        "Django",
        "PostgreSQL",
        "AWS",
        "TypeScript",
        "GraphQL",
        "AI Integration"
      ],
      color: "from-primary-500 to-purple-600",
    },
    {
      company: "One Step Sol",
      position: "Full Stack Developer",
      period: "2020 - 2022",
      location: "Lahore, Pakistan",
      description:
        "Developed and maintained scalable e-commerce platforms and enterprise applications. Implemented RESTful APIs and real-time features.",
      achievements: [
        "Built 2 high-traffic e-commerce platforms",
        "Implemented real-time inventory management",
        "Reduced API response time by 35%",
        "Integrated multiple payment gateways",
      ],
      technologies: [
        "React.js",
        "Django REST",
        "PostgreSQL",
        "Docker",
        "Redis",
        "WebSocket",
      ],
      color: "from-blue-500 to-cyan-600",
    },
    {
      company: "Obraj Inc",
      position: "Junior Developer",
      period: "2019 - 2020",
      location: "Lahore, Pakistan",
      description:
        "Built responsive web applications and contributed to agile development processes. Gained expertise in modern web technologies.",
      achievements: [
        "Developed 5+ client projects",
        "Contributed to team codebase with 200+ commits",
        "Implemented responsive mobile-first designs",
        "Participated in Agile/Scrum cycles",
      ],
      technologies: [
        "React",
        "Python",
        "Tailwind CSS",
        "Git",
        "Figma",
        "REST APIs",
      ],
      color: "from-emerald-500 to-green-600",
    },
  ];

  const stats = [
    {
      icon: Award,
      value: "4+",
      label: "Years Experience",
      subtext: "Full Stack",
    },
    {
      icon: TrendingUp,
      value: "40%",
      label: "Performance",
      subtext: "Average Improvement",
    },
    {
      icon: Users,
      value: "12+",
      label: "Projects",
      subtext: "Successfully Delivered",
    },
  ];

  const nextExperience = () => {
    setActiveIndex((prev) => (prev + 1) % experiences.length);
  };

  const prevExperience = () => {
    setActiveIndex(
      (prev) => (prev - 1 + experiences.length) % experiences.length
    );
  };

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-primary-500 to-purple-600 rounded-2xl">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              Professional Journey
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Transforming ideas into exceptional digital experiences with modern
            technologies
          </p>
        </div>

        {/* Experience Navigation (Desktop) */}
        <div className="hidden lg:flex justify-center mb-12 space-x-4">
          {experiences.map((exp, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeIndex === index
                  ? `bg-gradient-to-r ${exp.color} text-white shadow-lg scale-105`
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Main Experience Row */}
        <div className="relative">
          {/* Navigation Arrows */}
          <div className="hidden lg:flex absolute left-0 right-0 top-1/2 -translate-y-1/2 z-10 justify-between px-4">
            <button
              onClick={prevExperience}
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </button>
            <button
              onClick={nextExperience}
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300"
            >
              <ChevronRightIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </button>
          </div>

          {/* Experience Cards Row */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-6">
            {/* Left Stats Panel */}
            <div className="lg:w-1/4">
              <div className="sticky top-24">
                <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-xl">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    Career Highlights
                  </h3>
                  <div className="space-y-4">
                    {stats.map((stat, index) => (
                      <div
                        key={index}
                        className="flex items-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="p-3 bg-gradient-to-r from-primary-500 to-purple-600 rounded-xl mr-4">
                          <stat.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gray-900 dark:text-white">
                            {stat.value}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {stat.label}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-500">
                            {stat.subtext}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Experience Indicators */}
                  <div className="mt-8">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Experience Timeline
                      </span>
                      <span className="text-sm text-primary-600 dark:text-primary-400">
                        {activeIndex + 1}/{experiences.length}
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      {experiences.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveIndex(index)}
                          className={`flex-1 h-2 rounded-full transition-all duration-300 ${
                            activeIndex === index
                              ? `bg-gradient-to-r ${experiences[index].color}`
                              : "bg-gray-200 dark:bg-gray-700"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Experience Card */}
            <div className="lg:w-3/4">
              <div className="relative group">
                {/* Glow Background */}
                <div
                  className={`absolute -inset-4 bg-gradient-to-r ${experiences[activeIndex].color} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-500`}
                ></div>

                <div className="relative bg-white dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-2xl">
                  {/* Company Header */}
                  <div
                    className={`bg-gradient-to-r ${experiences[activeIndex].color} p-8`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <Briefcase className="w-6 h-6 text-white/90" />
                          <span className="text-white/90 text-sm font-medium">
                            {experiences[activeIndex].company}
                          </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                          {experiences[activeIndex].position}
                        </h3>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="flex items-center gap-2 text-white/90">
                            <Calendar className="w-5 h-5" />
                            <span className="font-semibold">
                              {experiences[activeIndex].period}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-white/80 mt-1">
                            <MapPin className="w-5 h-5" />
                            <span>{experiences[activeIndex].location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Left Column - Description & Achievements */}
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            Role Overview
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {experiences[activeIndex].description}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            Key Achievements
                          </h4>
                          <ul className="space-y-3">
                            {experiences[activeIndex].achievements.map(
                              (achievement, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-3"
                                >
                                  <div className="p-1 bg-gradient-to-r from-primary-500 to-purple-600 rounded-lg mt-1">
                                    <ChevronRight className="w-4 h-4 text-white" />
                                  </div>
                                  <span className="text-gray-700 dark:text-gray-300">
                                    {achievement}
                                  </span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>

                      {/* Right Column - Technologies */}
                      <div>
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-3">
                            {experiences[activeIndex].technologies.map(
                              (tech, idx) => (
                                <span
                                  key={idx}
                                  className={`px-4 py-2 rounded-xl font-medium text-white bg-gradient-to-r ${experiences[activeIndex].color} shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300`}
                                >
                                  {tech}
                                </span>
                              )
                            )}
                          </div>
                        </div>

                        {/* Mobile Navigation (only show on mobile) */}
                        <div className="lg:hidden mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                          <div className="flex justify-between items-center">
                            <button
                              onClick={prevExperience}
                              disabled={activeIndex === 0}
                              className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center gap-2 disabled:opacity-50"
                            >
                              <ChevronLeft className="w-4 h-4" />
                              Previous
                            </button>
                            <button
                              onClick={nextExperience}
                              disabled={activeIndex === experiences.length - 1}
                              className="px-4 py-2 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-lg flex items-center gap-2 disabled:opacity-50"
                            >
                              Next
                              <ChevronRightIcon className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Company Selector */}
          <div className="lg:hidden mt-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeIndex === index
                      ? `bg-gradient-to-r ${exp.color} text-white shadow-lg`
                      : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {exp.company}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Indicator (Mobile) */}
        <div className="lg:hidden mt-8 flex justify-center items-center gap-4">
          <button
            onClick={prevExperience}
            disabled={activeIndex === 0}
            className="p-2 disabled:opacity-50"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
          <div className="flex gap-2">
            {experiences.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? `bg-gradient-to-r ${experiences[index].color} w-8`
                    : "bg-gray-300 dark:bg-gray-700"
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextExperience}
            disabled={activeIndex === experiences.length - 1}
            className="p-2 disabled:opacity-50"
          >
            <ChevronRightIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
