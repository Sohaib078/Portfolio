import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "7 Kings Code LLC",
      position: "Senior Full Stack Developer",
      period: "2023 - Present",
      location: "Lahore, Pakistan",
      description:
        "Lead development of multiple web applications using React, Next.js, and Django. Improved application performance by 40%.",
      technologies: ["React.js", "React Native", "Next.js", "Django", "PostgreSQL", "AWS"],
    },
    {
      company: "One Step Sol",
      position: "Full Stack Developer",
      period: "2020 - 2022",
      location: "Lahore, Pakistan",
      description:
        "Developed and maintained e-commerce platforms and Web applications. Implemented RESTful APIs and real-time features.",
      technologies: ["React.js", "Django REST", "PostgreSQL", "Docker"],
    },
    {
      company: "Obraj Inc",
      position: "Junior Developer",
      period: "2019 - 2020",
      location: "Lahore, Pakistan",
      description:
        "Built responsive web applications and contributed to agile development processes. Gained expertise in modern web technologies.",
      technologies: ["React", "Python", "Tailwind CSS", "Git"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            4 years of delivering high-quality software solutions across various
            industries
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 to-primary-600"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:pr-8 md:pl-0 md:text-right" : "md:pl-8"
                }`}
              >
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div className="card relative group">
                    {/* Timeline dot */}
                    <div className="absolute -left-8 md:left-auto md:-right-8 top-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-gray-900"></div>

                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4 mb-4">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white text-start">
                        {exp.position}
                      </h3>

                      <span
                        className="inline-flex items-start px-4 py-1 rounded-full 
    bg-primary-100 dark:bg-primary-900/30 
    text-primary-600 dark:text-primary-400 
    text-sm font-medium w-fit"
                      >
                        {exp.period}
                      </span>
                    </div>

                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                      <Briefcase className="w-4 h-4 mr-2" />
                      <span className="font-medium mr-4">{exp.company}</span>
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
