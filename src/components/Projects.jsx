import React, { useState } from "react";
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Building,
  Server,
  Palette,
  ShoppingCart,
  Users,
  Briefcase,
  Monitor,
  Heart,
  Code,
  Database,
  Zap,
  Sparkles,
  Eye,
  Target,
  TrendingUp,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";

// Import your images
import img1 from "../assets/Images/jobsshopper.png";
import img2 from "../assets/Images/7kingscode.png";
import img3 from "../assets/Images/Alltechsystem.png";
import img4 from "../assets/Images/7kp.png";
import img5 from "../assets/Images/7kingsmarketing.png";
import img6 from "../assets/Images/cavayelo.png";
import img7 from "../assets/Images/obrajinc.png";
import img8 from "../assets/Images/samsaramedspa.png";
import img9 from "../assets/Images/Marketingsolutions.png";
import img10 from "../assets/Images/onestepsol.png";

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      title: "One Step Solutions",
      description:
        "Comprehensive business solutions platform with real-time analytics and customer management system.",
      technologies: [
        "React",
        "Next.js",
        "Django",
        "PostgreSQL",
        "AWS",
        "Redis",
      ],
      category: "Business Platform",
      github: "#",
      live: "https://onestepsol.com",
      icon: <Building className="w-6 h-6" />,
      image: img10,
      status: "Live",
      // color: "from-blue-500 to-cyan-500",
      complexity: "Advanced",
    },
    {
      title: "Obraj - Real Estate",
      description:
        "Modern real estate platform with virtual tours and AI-powered property recommendations.",
      technologies: [
        "React",
        "Next.js",
        "Django REST",
        "PostgreSQL",
        "Map APIs",
        "AWS",
      ],
      category: "Real Estate",
      github: "#",
      live: "https://www.obraj.com",
      icon: <Building className="w-6 h-6" />,
      image: img7,
      status: "Live",
      // color: "from-purple-500 to-pink-500",
      complexity: "Advanced",
    },
    {
      title: "7Kings Code",
      description:
        "Technology solutions company website with modern design principles and smooth animations.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Django",
        "PostgreSQL",
      ],
      category: "Tech Services",
      github: "#",
      live: "https://7kingscode.com",
      icon: <Code className="w-6 h-6" />,
      image: img2,
      status: "Live",
      // color: "from-red-500 to-orange-500",
      complexity: "Medium",
    },
    {
      title: "All Tech System",
      description:
        "IT solutions provider platform with service catalog, support ticket system, and knowledge base.",
      technologies: ["React", "Django", "PostgreSQL", "Docker"],
      category: "IT Services",
      github: "#",
      live: "http://alltechsystem.com",
      icon: <Server className="w-6 h-6" />,
      image: img3,
      status: "Live",
      // color: "from-green-500 to-teal-500",
      complexity: "Medium",
    },
    {
      title: "7KP Property Management",
      description:
        "Comprehensive property management platform for UAE market with multi-language support.",
      technologies: ["React.js", "Django", "PostgreSQL", "AWS"],
      category: "Property Management",
      github: "#",
      live: "https://7kp.ae",
      icon: <Building className="w-6 h-6" />,
      image: img4,
      status: "Live",
      // color: "from-yellow-500 to-amber-500",
      complexity: "Advanced",
    },
    {
      title: "Samsara Med Spa",
      description:
        "Medical spa website with appointment booking, service catalog, and client management system.",
      technologies: [
        "React",
        "Django",
        "Calendar API",
        "PostgreSQL",
        "Stripe",
        "AWS",
      ],
      category: "Healthcare",
      github: "#",
      live: "https://samsaramedspa.com",
      icon: <Heart className="w-6 h-6" />,
      image: img8,
      status: "Live",
      // color: "from-pink-500 to-rose-500",
      complexity: "Medium",
    },
    {
      title: "7Kings Marketing",
      description:
        "Digital marketing agency platform with analytics and lead generation tools.",
      technologies: ["Next.js", "Django", "Analytics API", "Redis"],
      category: "Marketing",
      github: "#",
      live: "https://7kingsmarketing.com",
      icon: <Users className="w-6 h-6" />,
      image: img5,
      status: "Live",
      // color: "from-orange-500 to-red-500",
      complexity: "Medium",
    },
    {
      title: "Jobs Shopper",
      description:
        "Job portal with intelligent matching algorithm and application tracking system.",
      technologies: [
        "React",
        "Django",
        "PostgreSQL",
        "Redis",
        "AI Matching",
        "AWS",
      ],
      category: "Job Portal",
      github: "#",
      live: "https://jobsshopper.com",
      icon: <Briefcase className="w-6 h-6" />,
      image: img1,
      status: "Live",
      // color: "from-green-500 to-emerald-500",
      complexity: "Advanced",
    },
    {
      title: "Marketing Solutions",
      description:
        "Marketing tools and analytics platform with campaign management and ROI analysis.",
      technologies: [
        "Next.js",
        "Django",
        "Analytics API",
        "PostgreSQL",
        "Redis",
        "AWS",
      ],
      category: "Marketing Tools",
      github: "#",
      live: "https://marketingsolutions.7kingscode.com",
      icon: <Monitor className="w-6 h-6" />,
      image: img9,
      status: "Live",
      // color: "from-purple-500 to-indigo-500",
      complexity: "Advanced",
    },
    {
      title: "Cavayelo",
      description:
        "E-commerce platform with secure payment integration and customer management system.",
      technologies: [
        "Next.js",
        "Django",
        "SQLite",
        "Redis",
        "Payment Gateway",
        "AWS",
      ],
      category: "E-commerce",
      github: "#",
      live: "https://www.cavayelousa.com/",
      icon: <ShoppingCart className="w-6 h-6" />,
      image: img6,
      status: "Live",
      // color: "from-cyan-500 to-blue-500",
      complexity: "Medium",
    },
  ];

  const stats = [
    { icon: Target, label: "Live Projects", value: projects.length },
    { icon: TrendingUp, label: "Performance Gain", value: "40%" },
    { icon: Layers, label: "Technologies", value: "15+" },
    { icon: Zap, label: "Years Experience", value: "4+" },
  ];

  const slidesPerView = 3;
  const totalSlides = Math.ceil(projects.length / slidesPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentProjects = () => {
    const start = currentSlide * slidesPerView;
    return projects.slice(start, start + slidesPerView);
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="p-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Featured{" "}
              <span className="text-primary-600 dark:text-primary-400">
                Projects
              </span>
            </h2>
          </motion.div>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Showcasing{" "}
            <span className="font-bold text-primary-600 dark:text-primary-400">
              {projects.length} live projects
            </span>{" "}
            built with modern technologies and 4+ years of expertise
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <stat.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="hidden lg:flex absolute -left-14 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 border border-gray-200 dark:border-gray-700"
            aria-label="Previous projects"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>

          <button
            onClick={nextSlide}
            className="hidden lg:flex absolute -right-14 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 border border-gray-200 dark:border-gray-700"
            aria-label="Next projects"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>

          {/* Projects Grid */}
          <div className="relative overflow-hidden">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {getCurrentProjects().map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700">
                    {/* Image Container */}
                    <div className="relative h-56 overflow-hidden">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}
                      />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                          {project.icon}
                        </div>
                        <span className="px-3 py-1 bg-black/40 backdrop-blur-sm text-white rounded-full text-sm font-medium">
                          {project.category}
                        </span>
                      </div>

                      {/* Status Badge */}
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/20 backdrop-blur-sm rounded-full">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          <span className="text-green-300 text-sm font-medium">
                            {project.status}
                          </span>
                        </div>
                      </div>

                      {/* Complexity Badge */}
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1.5 bg-black/40 backdrop-blur-sm text-white rounded-full text-sm font-medium">
                          {project.complexity} Level
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies
                            .slice(0, 4)
                            .map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          {project.technologies.length > 4 && (
                            <span className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400 rounded-lg text-sm font-medium">
                              +{project.technologies.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Action Button */}
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium hover:from-primary-600 hover:to-primary-700 hover:shadow-lg transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visit Website
                        <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-12 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-8 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-primary-600 dark:bg-primary-400 w-12"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex lg:hidden justify-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              aria-label="Previous projects"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              aria-label="Next projects"
            >
              <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
              Let's transform your vision into a powerful digital solution with
              modern technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold hover:from-primary-600 hover:to-primary-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                Start a Project Together
                <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
              <a
                href="#"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-bold hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
              >
                <Eye className="w-5 h-5" />
                View All Projects
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
