import { personalInfo } from "../data/personalInfo";

const About = () => {
  const { about } = personalInfo;

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-gray-900 py-20 px-6 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Content Grid - 3 columns: 1 for personal info, 2 for goals */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Personal Info - Takes 1 column */}
          <div className="lg:col-span-1 flex items-center">
            {/* Basic Info Card */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:scale-[1.05] hover:border-blue-400 dark:hover:border-orange-400 cursor-pointer w-full">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-orange-500 mb-6">
                {about.fullName}
              </h3>
              <div className="space-y-4">
                <InfoRow label="Date of Birth" value={about.dateOfBirth} />
                <InfoRow label="Duration" value={about.education.timeline} />
                <InfoRow label="GPA" value={about.education.gpa} />
                <InfoRow label="Credits" value={about.education.credits} />
              </div>
            </div>
          </div>

          {/* Goals - Takes 2 columns */}
          <div className="lg:col-span-2">
            {/* Title */}
            <h3 className="text-2xl font-bold text-blue-600 dark:text-orange-500 mb-6 text-center">
              Goals
            </h3>
            
            {/* Timeline Container */}
            <div className="relative">
              {/* Center Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-300 dark:bg-orange-300"></div>
              
              <div className="space-y-0">
                {/* Short Term - Left */}
                <TimelineGoalItem
                  title="Short-term"
                  items={about.goals.shortTerm}
                  position="left"
                />
                
                {/* Mid Term - Right */}
                <TimelineGoalItem
                  title="Mid-term"
                  items={about.goals.midTerm}
                  position="right"
                />
                
                {/* Long Term - Left */}
                <TimelineGoalItem
                  title="Long-term"
                  items={about.goals.longTerm}
                  position="left"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper Component - Info Row
const InfoRow = ({ label, value }) => (
  <div className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-gray-700 last:border-0">
    <span className="text-slate-600 dark:text-gray-400 font-medium">{label}:</span>
    <span className="text-slate-900 dark:text-white font-semibold">{value}</span>
  </div>
);

// Helper Component - Timeline Goal Item
const TimelineGoalItem = ({ title, items, position }) => {
  const isLeft = position === "left";
  
  return (
    <div className={`relative flex ${isLeft ? 'justify-start' : 'justify-end'} group`}>
      {/* Content Box */}
      <div className={`w-[45%] ${isLeft ? 'pr-8' : 'pl-8'}`}>
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-4 border border-slate-200 dark:border-gray-700 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.05] hover:border-blue-400 dark:hover:border-orange-400 cursor-pointer">
          <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3 text-center">{title}</h4>
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed flex items-start gap-2">
                <span className="text-blue-600 dark:text-orange-500 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Center Dot */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 dark:bg-orange-500 rounded-full border-4 border-white dark:border-gray-800 z-10 transition-all duration-300 group-hover:scale-150 group-hover:shadow-lg"></div>
    </div>
  );
};

export default About;
