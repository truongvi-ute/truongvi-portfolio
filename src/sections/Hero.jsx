import { personalInfo } from "../data/personalInfo";
import profileImg from "../assets/hero.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-32 md:pt-20 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* CỘT 1: GIỚI THIỆU NGẮN GỌN */}
        <div className="order-2 md:order-1 text-center md:text-left">
          {/* Title với hiệu ứng typing */}
          <div className="mb-6 flex items-center justify-center md:justify-start">
            <span className="text-slate-500 font-mono text-xl md:text-2xl font-semibold">&lt;</span>
            <span className="text-orange-500 font-mono text-xl md:text-2xl font-semibold typing-text">
              {personalInfo.title}
            </span>
            <span className="text-slate-500 font-mono text-xl md:text-2xl font-semibold">/&gt;</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
            <span className="text-blue-600">{personalInfo.name}</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
            {personalInfo.tagline}
          </p>
        </div>

        {/* CỘT 2: ẢNH CHÂN DUNG - OUT OF BOUNDS EFFECT */}
        <div className="order-1 md:order-2 flex justify-center items-center">
          <div className="relative group w-56 h-56 md:w-72 md:h-72">
            {/* Khung nền trang trí - Layer 1 - Màu Cam */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-[2rem] transform rotate-3 transition-all duration-500 group-hover:rotate-6 group-hover:scale-105 shadow-2xl"></div>

            {/* Khung chứa với border - Layer 2 */}
            <div className="absolute inset-0 bg-white rounded-[2rem] border-4 border-white shadow-2xl transform transition-all duration-500 group-hover:scale-105 overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200"></div>
            </div>

            {/* Ảnh chính - OUT OF BOUNDS - Layer 3 */}
            <div className="absolute inset-0 flex items-end justify-center overflow-visible">
              <img
                src={profileImg}
                alt={personalInfo.fullName}
                className="relative h-[150%] w-auto object-cover object-top transform transition-all duration-700 ease-out group-hover:scale-110 group-hover:translate-y-[-12px] z-10 rounded-[2rem]"
                style={{
                  filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.4))",
                }}
              />
            </div>

            {/* Floating decoration elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-400 rounded-full opacity-20 blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-400 rounded-full opacity-20 blur-2xl animate-pulse" style={{ animationDelay: "1s" }}></div>
            <div className="absolute -top-8 -right-8 w-20 h-20 bg-orange-300 rounded-full opacity-15 blur-xl animate-pulse" style={{ animationDelay: "0.5s" }}></div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-slate-400">
          <span className="text-xs mb-2">Cuộn xuống</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
