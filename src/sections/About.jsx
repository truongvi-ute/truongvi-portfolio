import { personalInfo } from "../data/personalInfo";
import { FaFacebook, FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBirthdayCake } from "react-icons/fa";
import heroImage from "../assets/images/hero.png";
import backgroundImage from "../assets/images/background.jpg";

const About = () => {
  const { about, contact } = personalInfo;

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-gray-900 py-20 px-6 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Content Grid - 3 columns: 1 for personal info, 2 for goals */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Personal Info Card - Facebook Style */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-slate-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-2xl">
              {/* Cover Photo */}
              <div className="h-32 relative overflow-hidden">
                <img
                  src={backgroundImage}
                  alt="Cover"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"></div>
              </div>
              
              {/* Profile Content */}
              <div className="relative px-4 pb-4">
                {/* Avatar */}
                <div className="flex justify-center -mt-16 mb-3">
                  <div className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 overflow-hidden bg-white dark:bg-gray-700 shadow-xl">
                    <img
                      src={heroImage}
                      alt={about.fullName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Name */}
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {about.fullName}
                  </h3>
                </div>

                {/* Info Section */}
                <div className="space-y-2 mb-3">
                  {/* Date of Birth */}
                  <InfoItem 
                    icon={<FaBirthdayCake />}
                    label="Date of Birth"
                    value={about.dateOfBirth}
                  />
                </div>

                {/* Contact Section */}
                <div className="pt-3 border-t border-slate-200 dark:border-gray-700 space-y-2 mb-3">
                  <ContactItem 
                    icon={<FaEnvelope />} 
                    value={contact.email}
                    href={`mailto:${contact.email}`}
                  />
                  <ContactItem 
                    icon={<FaPhone />} 
                    value={contact.phone}
                    href={`tel:${contact.phone}`}
                  />
                  <ContactItem 
                    icon={<FaMapMarkerAlt />} 
                    value={contact.address}
                  />
                </div>

                {/* Social Links */}
                <div className="pt-3 border-t border-slate-200 dark:border-gray-700">
                  <div className="flex justify-center gap-3">
                    <a
                      href={contact.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg"
                      title="Facebook"
                    >
                      <FaFacebook className="text-lg" />
                    </a>
                    <a
                      href={contact.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-gray-700 dark:hover:bg-gray-600 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg"
                      title="GitHub"
                    >
                      <FaGithub className="text-lg" />
                    </a>
                    <a
                      href={contact.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-800 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg"
                      title="LinkedIn"
                    >
                      <FaLinkedin className="text-lg" />
                    </a>
                  </div>
                </div>
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

// Helper Component - Info Item (with icon and label)
const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-3 p-2">
    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-orange-900/30 flex items-center justify-center text-blue-600 dark:text-orange-500 flex-shrink-0">
      {icon}
    </div>
    <div className="flex-1">
      <p className="text-xs text-slate-500 dark:text-gray-400">{label}</p>
      <p className="text-sm font-semibold text-slate-900 dark:text-white">{value}</p>
    </div>
  </div>
);

// Helper Component - Contact Item (clickable)
const ContactItem = ({ icon, value, href }) => {
  const content = (
    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700/50 transition-colors duration-300 group">
      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-orange-900/30 flex items-center justify-center text-blue-600 dark:text-orange-500 flex-shrink-0">
        {icon}
      </div>
      <span className="text-sm text-slate-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-orange-500 transition-colors break-all">
        {value}
      </span>
    </div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
};

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
