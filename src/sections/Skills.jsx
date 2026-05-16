import { personalInfo } from "../data/personalInfo";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

const Skills = () => {
  const { skills } = personalInfo;

  const skillCategories = [
    { title: "Programming Languages", items: skills.languages },
    { title: "Frontend", items: skills.frontend },
    { title: "Backend", items: skills.backend },
    { title: "Database", items: skills.database },
    { title: "Tools & Technologies", items: skills.tools },
    { title: "Other", items: skills.other },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-gray-900 py-10 px-6 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Skills without card wrapper */}
        <div className="space-y-6">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Category Title */}
              <h3 className="text-xl font-bold text-blue-600 dark:text-orange-500 mb-3">
                {category.title}
              </h3>
              
              {/* Skills Grid for this category */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {category.items.map((skill, skillIndex) => (
                  <SkillItem key={skillIndex} skill={skill} />
                ))}
              </div>
              
              {/* Divider (except for last category) */}
              {categoryIndex < skillCategories.length - 1 && (
                <div className="mt-6 border-b border-slate-300 dark:border-gray-700"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Get Icon Component from string name
const getIconComponent = (iconName) => {
  const Icon = FaIcons[iconName] || SiIcons[iconName];
  return Icon || FaIcons.FaCode; // Fallback icon
};

// Skill Item with Circular Progress
const SkillItem = ({ skill }) => {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (skill.level / 100) * circumference;
  const IconComponent = getIconComponent(skill.icon);

  return (
    <div className="flex flex-col items-center gap-2 group">
      {/* Circular Progress */}
      <div className="relative w-20 h-20 flex-shrink-0">
        <svg className="transform -rotate-90 w-20 h-20">
          {/* Background Circle */}
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke="currentColor"
            strokeWidth="6"
            fill="none"
            className="text-slate-200 dark:text-gray-700"
          />
          {/* Progress Circle */}
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke="currentColor"
            strokeWidth="6"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="text-blue-600 dark:text-orange-500 transition-all duration-500"
            strokeLinecap="round"
          />
        </svg>
        {/* Icon in Center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <IconComponent 
            className="text-3xl group-hover:scale-125 transition-transform duration-300" 
            style={{ color: skill.color }}
          />
        </div>
      </div>

      {/* Skill Name and Level */}
      <div className="text-center">
        <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
          {skill.name}
        </h4>
      </div>
    </div>
  );
};

export default Skills;
