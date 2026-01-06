import React, { useEffect, useRef } from "react";
import {
  Code,
  Smartphone,
  Server,
  Palette,
  Database,
  Cpu,
  Zap,
  GitBranch,
  Cloud,
  Terminal,
  Layers,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js", level: 95, projects: 25, color: "bg-blue-500" },
        {
          name: "Next.js",
          level: 90,
          projects: 18,
          color: "bg-gray-900 dark:bg-white",
        },
        { name: "TypeScript", level: 85, projects: 20, color: "bg-blue-600" },
        { name: "JavaScript", level: 95, projects: 30, color: "bg-yellow-500" },
        { name: "Tailwind CSS", level: 95, projects: 28, color: "bg-teal-500" },
      ],
    },
    {
      title: "Backend & DevOps",
      icon: <Server className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        {
          name: "Python/Django",
          level: 90,
          projects: 22,
          color: "bg-green-600",
        },
        { name: "Node.js", level: 85, projects: 15, color: "bg-green-500" },
        { name: "PostgreSQL", level: 88, projects: 18, color: "bg-blue-400" },
        { name: "Docker", level: 85, projects: 12, color: "bg-blue-600" },
        { name: "AWS", level: 80, projects: 10, color: "bg-orange-500" },
      ],
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "React Native", level: 88, projects: 8, color: "bg-blue-400" },
        { name: "Expo", level: 85, projects: 7, color: "bg-gray-800" },
        { name: "iOS/Android", level: 80, projects: 6, color: "bg-green-500" },
        {
          name: "Mobile UI/UX",
          level: 85,
          projects: 9,
          color: "bg-purple-500",
        },
      ],
    },
    {
      title: "Tools & Workflow",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      skills: [
        {
          name: "Git/GitHub",
          level: 95,
          projects: 40,
          color: "bg-gray-800 dark:bg-gray-700",
        },
        { name: "CI/CD", level: 85, projects: 12, color: "bg-blue-500" },
        { name: "Redis", level: 80, projects: 10, color: "bg-red-600" },
        {
          name: "Agile/Scrum",
          level: 90,
          projects: 25,
          color: "bg-purple-600",
        },
      ],
    },
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillBars = sectionRef.current?.querySelectorAll(".skill-bar");
    skillBars?.forEach((bar) => observer.observe(bar));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 dark:via-gray-900/50 to-transparent"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-20 right-20 animate-float">
        <Zap className="w-8 h-8 text-yellow-400/30" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float-slower">
        <GitBranch className="w-8 h-8 text-green-400/30" />
      </div>
      <div className="absolute top-1/2 left-1/4 animate-float-slow">
        <Cloud className="w-8 h-8 text-blue-400/30" />
      </div>

      <div ref={sectionRef} className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/10 to-purple-500/10 border border-primary-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary-500 mr-2" />
            <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
              Technical Expertise
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Skills &{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                Technologies
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-primary-400/30 to-purple-400/30 rounded-full"></span>
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            With{" "}
            <span className="font-semibold text-primary-600 dark:text-primary-400">
              4+ years
            </span>{" "}
            of hands-on experience, I've mastered a comprehensive tech stack
            that enables me to build{" "}
            <span className="font-semibold">
              scalable, performant, and beautiful
            </span>{" "}
            applications from concept to deployment.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            {
              label: "Total Projects",
              value: "50+",
              icon: <Layers className="w-5 h-5" />,
            },
            {
              label: "Years Experience",
              value: "4+",
              icon: <TrendingUp className="w-5 h-5" />,
            },
            {
              label: "Technologies",
              value: "25+",
              icon: <Code className="w-5 h-5" />,
            },
            {
              label: "Satisfied Clients",
              value: "100%",
              icon: <Sparkles className="w-5 h-5" />,
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="relative group p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="group relative">
              {/* Card */}
              <div className="relative h-full p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-br from-transparent via-gray-200/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-full h-full rounded-3xl bg-gradient-to-br from-gray-50 dark:from-gray-900 to-white dark:to-gray-800"></div>
                </div>

                {/* Category Header */}
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} shadow-lg mr-4`}
                    >
                      <div className="text-white">{category.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="skill-bar opacity-0 transform translate-y-4"
                        style={{
                          animationDelay: `${
                            categoryIndex * 200 + skillIndex * 100
                          }ms`,
                          animationFillMode: "forwards",
                        }}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center">
                            <div
                              className={`w-3 h-3 rounded-full ${skill.color} mr-3 shadow-sm`}
                            ></div>
                            <span className="font-semibold text-gray-800 dark:text-gray-200">
                              {skill.name}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                              {skill.projects} projects
                            </span>
                            <span className="text-lg font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                              {skill.level}%
                            </span>
                          </div>
                        </div>

                        {/* Progress Bar Container */}
                        <div className="relative">
                          <div className="h-3 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div
                              className={`skill-progress h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                              style={{ width: "0%" }}
                              data-width={skill.level}
                            ></div>
                          </div>

                          {/* Animated Glow Effect */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 p-8 bg-gradient-to-r from-primary-500/10 to-purple-500/10 rounded-3xl border border-primary-500/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Continuous Learning & Growth
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I believe in staying at the forefront of technology. Currently
                exploring AI/ML integration, Web3 development, and advanced
                cloud architectures to deliver cutting-edge solutions.
              </p>
              <div className="flex items-center gap-4">
                <Terminal className="w-5 h-5 text-primary-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Always learning, always building
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {["Performance", "Scalability", "Security"].map(
                (focus, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl text-center border border-gray-200 dark:border-gray-700"
                  >
                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                      {index + 1}
                    </div>
                    <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      {focus}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
