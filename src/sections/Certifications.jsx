import { personalInfo } from "../data/personalInfo";
import * as FaIcons from "react-icons/fa";
import { FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Certifications = () => {
  const { certifications } = personalInfo;

  return (
    <section
      id="certifications"
      className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-gray-900 py-10 px-6 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Grid Layout: 10 columns total */}
        <div className="grid grid-cols-10 gap-4 items-center">
          {/* Previous Button - 1 column */}
          <div className="col-span-1 flex justify-center">
            <button
              className="cert-prev w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-2 border-blue-600 dark:border-orange-500 flex items-center justify-center text-blue-600 dark:text-orange-500 hover:bg-blue-600 dark:hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg hover:scale-110"
            >
              <FaChevronLeft className="text-xl" />
            </button>
          </div>

          {/* Center Content Area - 8 columns */}
          <div className="col-span-8 relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-blue-300 dark:bg-orange-300 transform -translate-y-1/2 z-0"></div>

            {/* Swiper Carousel */}
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              navigation={{
                prevEl: '.cert-prev',
                nextEl: '.cert-next',
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="py-16"
            >
              {certifications.map((cert) => (
                <SwiperSlide key={cert.id}>
                  <CertificationItem cert={cert} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Next Button - 1 column */}
          <div className="col-span-1 flex justify-center">
            <button
              className="cert-next w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-2 border-blue-600 dark:border-orange-500 flex items-center justify-center text-blue-600 dark:text-orange-500 hover:bg-blue-600 dark:hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg hover:scale-110"
            >
              <FaChevronRight className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Get Icon Component from string name
const getIconComponent = (iconName) => {
  const Icon = FaIcons[iconName];
  return Icon || FaIcons.FaAward;
};

// Certification Item Component - With circular icon overlay
const CertificationItem = ({ cert }) => {
  const IconComponent = getIconComponent(cert.icon);

  return (
    <div className="flex flex-col items-center h-full pt-8">
      {/* Content Card with fixed height */}
      <div className="w-full max-w-xs mx-auto">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl pt-12 pb-4 px-4 shadow-xl border border-slate-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] hover:border-blue-400 dark:hover:border-orange-400 relative h-full flex flex-col">
          
          {/* Circular Icon - Overlapping top */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-800 border-4 border-blue-600 dark:border-orange-500 flex items-center justify-center shadow-xl">
              <IconComponent 
                className="text-3xl" 
                style={{ color: cert.iconColor }}
              />
            </div>
          </div>

          {/* Date Badge */}
          <div className="inline-block px-2 py-1 bg-blue-100 dark:bg-orange-900/30 text-blue-700 dark:text-orange-400 rounded-full text-xs font-semibold mb-2 self-start">
            {cert.date}
          </div>

          {/* Certificate Name - Fixed height */}
          <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 line-clamp-2 h-12">
            {cert.name}
          </h3>

          {/* Issuer */}
          <p className="text-xs text-blue-600 dark:text-orange-500 font-semibold mb-2">
            {cert.issuer}
          </p>

          {/* Score */}
          {cert.score ? (
            <div className="mb-2 h-6">
              <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded text-xs font-bold">
                {cert.score}
              </span>
            </div>
          ) : (
            <div className="mb-2 h-6"></div>
          )}

          {/* Description - Fixed height */}
          <p className="text-xs text-slate-600 dark:text-gray-300 mb-3 line-clamp-2 h-8 flex-grow">
            {cert.description}
          </p>

          {/* Action Button */}
          {cert.type === "link" && cert.credentialUrl && (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-3 py-2 bg-blue-600 dark:bg-orange-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-orange-600 transition-colors duration-300 text-xs font-medium mt-auto"
            >
              <span>Verify</span>
              <FaExternalLinkAlt className="text-xs" />
            </a>
          )}

          {cert.type === "image" && (
            <button className="flex items-center justify-center gap-2 w-full px-3 py-2 bg-slate-900 dark:bg-gray-700 text-white rounded-lg hover:bg-slate-800 dark:hover:bg-gray-600 transition-colors duration-300 text-xs font-medium mt-auto">
              View Certificate
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
