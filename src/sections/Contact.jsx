import { personalInfo } from "../data/personalInfo";
import { FaFacebook, FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import heroImage from "../assets/images/hero.png";
import backgroundImage from "../assets/images/background.jpg";

const Contact = () => {
  const { contact, about } = personalInfo;

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-gray-900 py-10 px-6 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Facebook Style Profile */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-slate-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-2xl">
              {/* Cover Photo */}
              <div className="h-48 relative overflow-hidden">
                <img
                  src={backgroundImage}
                  alt="Cover"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"></div>
              </div>
              
              {/* Profile Info */}
              <div className="relative px-6 pb-6">
                {/* Avatar */}
                <div className="flex justify-center -mt-20 mb-4">
                  <div className="relative">
                    <div className="w-40 h-40 rounded-full border-4 border-white dark:border-gray-800 overflow-hidden bg-white dark:bg-gray-700 shadow-xl">
                      <img
                        src={heroImage}
                        alt={about.fullName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Name and Title */}
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    {about.fullName}
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-gray-400">
                    {personalInfo.title}
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-3 mb-6">
                  {/* Email */}
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700/50 transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-orange-900/30 flex items-center justify-center text-blue-600 dark:text-orange-500 flex-shrink-0">
                      <FaEnvelope />
                    </div>
                    <span className="text-slate-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-orange-500 transition-colors">
                      {contact.email}
                    </span>
                  </a>

                  {/* Phone */}
                  <a
                    href={`tel:${contact.phone}`}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700/50 transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-orange-900/30 flex items-center justify-center text-blue-600 dark:text-orange-500 flex-shrink-0">
                      <FaPhone />
                    </div>
                    <span className="text-slate-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-orange-500 transition-colors">
                      {contact.phone}
                    </span>
                  </a>

                  {/* Address */}
                  <div className="flex items-center gap-3 p-3 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-orange-900/30 flex items-center justify-center text-blue-600 dark:text-orange-500 flex-shrink-0">
                      <FaMapMarkerAlt />
                    </div>
                    <span className="text-slate-700 dark:text-gray-300">
                      {contact.address}
                    </span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-slate-200 dark:border-gray-700">
                  <div className="flex justify-center gap-4">
                    {/* Facebook */}
                    <a
                      href={contact.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg"
                    >
                      <FaFacebook className="text-xl" />
                    </a>

                    {/* GitHub */}
                    <a
                      href={contact.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-gray-700 dark:hover:bg-gray-600 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg"
                    >
                      <FaGithub className="text-xl" />
                    </a>

                    {/* LinkedIn */}
                    <a
                      href={contact.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-blue-700 hover:bg-blue-800 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg"
                    >
                      <FaLinkedin className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl">
            <div className="aspect-square w-full">
              <iframe
                src={contact.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
