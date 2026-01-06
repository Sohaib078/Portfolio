import React from "react";
import { Code, Smartphone, Server, Palette, Database, Cpu } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "Java Script", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 95 },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="w-8 h-8" />,
      skills: [
        { name: "Python/Django", level: 90 },
        { name: "REST APIs", level: 88 },
        { name: "PostgreSQL", level: 85 },
        { name: "Redis", level: 75 },
        { name: "Docker", level: 80 },
      ],
    },
    {
      title: "Mobile",
      icon: <Smartphone className="w-8 h-8" />,
      skills: [
        { name: "React Native", level: 85 },
        { name: "Expo", level: 80 },
        { name: "iOS/Android", level: 75 },
        { name: "Mobile UI/UX", level: 80 },
      ],
    },
    {
      title: "Tools & Others",
      icon: <Cpu className="w-8 h-8" />,
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "CI/CD", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Agile/Scrum", level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle text-center justify-center items-center">
            With 4 years of professional experience, I've mastered a diverse set
            of technologies across the full stack development spectrum.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card group hover:border-primary-500 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="animate-fade-in"
                    style={{ animationDelay: `${skillIndex * 100}ms` }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-primary-600 dark:text-primary-400 font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
