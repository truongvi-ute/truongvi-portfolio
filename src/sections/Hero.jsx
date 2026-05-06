import { personalInfo } from "../data/personalInfo";
import profileImg from "../assets/hero.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-32 md:pt-20 px-6 overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* CỘT 1: GIỚI THIỆU NGẮN GỌN */}
        <div className="order-2 md:order-1 text-center md:text-left">
          {/* Title với hiệu ứng typing - NGƯỢC LẠI */}
          <div className="mb-6 flex items-center justify-center md:justify-start">
            <span className="text-slate-500 dark:text-gray-400 font-mono text-xl md:text-2xl font-semibold">
              &lt;
            </span>
            <span className="text-orange-500 dark:text-blue-600 font-mono text-xl md:text-2xl font-semibold typing-text">
              {personalInfo.title}
            </span>
            <span className="text-slate-500 dark:text-gray-400 font-mono text-xl md:text-2xl font-semibold">
              /&gt;
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight transition-colors duration-300">
            <span className="text-blue-600 dark:text-orange-500">
              {personalInfo.name}
            </span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-gray-300 mb-8 max-w-lg leading-relaxed transition-colors duration-300">
            {personalInfo.tagline}
          </p>
        </div>

        {/* CỘT 2: ẢNH CHÂN DUNG - OUT OF BOUNDS EFFECT */}
        <div className="order-1 md:order-2 flex justify-center items-center">
          <div className="relative group w-56 h-56 md:w-72 md:h-72">
            {/* Khung nền trang trí - Layer 1 */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-orange-500 dark:to-orange-600 rounded-[2rem] transform rotate-3 transition-all duration-500 group-hover:rotate-6 group-hover:scale-105 shadow-2xl"></div>

            {/* Khung chứa với border - Layer 2 - Màu viền cùng với title (ngược lại) */}
            <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-[2rem] border-4 border-orange-500 dark:border-blue-600 shadow-2xl transform transition-all duration-500 group-hover:scale-105 overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-gray-700 dark:to-gray-800"></div>
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
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-400 dark:bg-orange-400 rounded-full opacity-20 blur-2xl animate-pulse"></div>
            <div
              className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-400 dark:bg-orange-400 rounded-full opacity-20 blur-2xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute -top-8 -right-8 w-20 h-20 bg-purple-400 dark:bg-orange-300 rounded-full opacity-15 blur-xl animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
