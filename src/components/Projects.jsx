import React, { useState } from "react";
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Building,
  Server,
  Palette,
  ShoppingCart,
  Car,
  Users,
  Briefcase,
  ShoppingBag,
  Monitor,
  Globe,
  Heart,
  Code,
  Database,
  Activity,
  ShoppingBag as Bag,
  Building2,
  Stethoscope,
  Cpu,
  Smartphone,
  Folder,
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
        "A comprehensive business solutions platform offering integrated services across multiple domains with real-time analytics and customer management system.",
      technologies: ["React", "Next.js", "Django", "PostgreSQL", "AWS"],
      category: "Business Platform",
      github: "#",
      live: "https://onestepsol.com",
      icon: <Building2 className="w-6 h-6" />,
      image: img10,
      status: "Live",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Obraj - Real Estate",
      description:
        "Modern real estate platform with property listings, virtual tours, and AI-powered property recommendations. Features advanced search filters and booking system.",
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
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "7Kings Code",
      description:
        "Technology solutions company website showcasing services, portfolio, and client case studies. Built with modern design principles and smooth animations.",
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
      color: "from-red-500 to-orange-500",
    },
    {
      title: "All Tech System",
      description:
        "IT solutions provider platform with service catalog, support ticket system, and knowledge base. Features real-time chat support and progress tracking.",
      technologies: ["React", "Django", "PostgreSQL", "Docker"],
      category: "IT Services",
      github: "#",
      live: "http://alltechsystem.com",
      icon: <Server className="w-6 h-6" />,
      image: img3,
      status: "Live",
      color: "from-green-500 to-teal-500",
    },
    {
      title: "7KP Property Management System",
      description:
        "A comprehensive property management and real estate platform for the UAE market, featuring multi-language support, secure payment integration, and advanced analytics dashboards for property owners and agencies.",
      technologies: ["React.js", "Django", "PostgreSQL", "AWS"],
      category: "Real Estate / Property Management",
      github: "#",
      live: "https://7kp.ae",
      icon: <Building className="w-6 h-6" />,
      image: img4,
      status: "Live",
      color: "from-yellow-500 to-amber-500",
    },
    {
      title: "Samsara Med Spa",
      description:
        "Medical spa website with appointment booking, service catalog, and client management system. Features online consultations and treatment tracking.",
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
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "7Kings Marketing",
      description:
        "Digital marketing agency platform showcasing services, case studies, and client testimonials. Integrated with marketing analytics and lead generation tools.",
      technologies: ["Next.js", "Django", "Analytics API", "Redis"],
      category: "Marketing",
      github: "#",
      live: "https://7kingsmarketing.com",
      icon: <Users className="w-6 h-6" />,
      image: img5,
      status: "Live",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Jobs Shopper",
      description:
        "Job portal with intelligent matching algorithm, resume parsing, and application tracking system. Features employer dashboard and candidate management.",
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
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Marketing Solutions",
      description:
        "Marketing tools and analytics platform with campaign management, lead tracking, and ROI analysis. Integrated with multiple advertising platforms.",
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
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "Cavayelo",
      description:
        "E-commerce platform offering a wide range of products with secure payment integration and customer management system.",
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
      color: "from-cyan-500 to-blue-500",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(projects.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.ceil(projects.length / 3)) %
        Math.ceil(projects.length / 3)
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Get projects for current slide (3 per slide)
  const slideProjects = projects.slice(currentSlide * 3, currentSlide * 3 + 3);

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-semibold mb-4">
            Real-World Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Professional{" "}
            <span className="text-primary-600 dark:text-primary-400">
              Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing{" "}
            <span className="font-semibold">
              {projects.length} live projects
            </span>{" "}
            across diverse industries, built with modern technologies and 4+
            years of expertise
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Live Projects", value: projects.length },
            { label: "Technologies", value: "15+" },
            { label: "Years Exp", value: "4+" },
            { label: "Industries", value: "8+" },
          ].map((stat, index) => (
            <div key={index} className="card text-center p-6">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Projects Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="hidden lg:flex absolute -left-14 top-1/2 transform -translate-y-1/2 z-10 p-4 rounded-full bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 border border-gray-200 dark:border-gray-700"
            aria-label="Previous projects"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>

          <button
            onClick={nextSlide}
            className="hidden lg:flex absolute -right-14 top-1/2 transform -translate-y-1/2 z-10 p-4 rounded-full bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 border border-gray-200 dark:border-gray-700"
            aria-label="Next projects"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>

          {/* Mobile Navigation */}
          <div className="flex lg:hidden justify-center space-x-4 mb-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label="Previous projects"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label="Next projects"
            >
              <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
          </div>

          {/* Projects Grid */}
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {slideProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700"
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === "Live"
                        ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                        : "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Project Header with Image */}
                <div
                  className={`h-48 relative overflow-hidden bg-gradient-to-br ${project.color}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute top-4 left-4 p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                    {project.icon}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-black/40 backdrop-blur-sm text-white rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
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
                            className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400 rounded-lg text-xs font-medium">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-4 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-medium transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg group/btn"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Website
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-10 space-x-2">
            {Array.from({ length: Math.ceil(projects.length / 3) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-8 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-primary-600 dark:bg-primary-400 w-12"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              )
            )}
          </div>
        </div>

        {/* View More Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Interested in seeing more projects or discussing your
              requirements?
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold hover:from-primary-600 hover:to-primary-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <span>Start a Project Together</span>
              <ExternalLink className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
