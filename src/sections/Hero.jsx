import { personalInfo } from "../data/personalInfo";
import { useState, useEffect } from "react";
import BadgeScene from "../components/BadgeScene";

const Hero = () => {
  const titles = personalInfo.title;
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    let timeout;

    if (!isDeleting && displayedText === currentTitle) {
      // Đã gõ xong, dừng 2 giây rồi bắt đầu xóa
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText === "") {
      // Đã xóa xong, chuyển sang title tiếp theo
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    } else if (!isDeleting) {
      // Đang gõ - tăng tốc độ để mượt hơn
      timeout = setTimeout(() => {
        setDisplayedText(currentTitle.substring(0, displayedText.length + 1));
      }, 80); // Giảm từ 100ms xuống 80ms
    } else {
      // Đang xóa - nhanh hơn
      timeout = setTimeout(() => {
        setDisplayedText(currentTitle.substring(0, displayedText.length - 1));
      }, 40); // Giảm từ 50ms xuống 40ms
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTitleIndex, titles]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-slate-50 dark:bg-gray-900 pt-32 md:pt-20 px-6 overflow-hidden transition-colors duration-300"
    >
      {/* 3D BADGE - Full hero overlay, đè lên tất cả, không bị clip khi swing */}
      <BadgeScene className="absolute inset-0 z-20 w-full h-full" />

      {/* Text content - visible xuyên qua canvas trong suốt */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="text-center md:text-left max-w-xl">
          {/* Title với hiệu ứng typing */}
          <div className="mb-6 flex items-center justify-center md:justify-start">
            <span className="font-mono text-xl md:text-2xl font-semibold">
              <span className="text-slate-500 dark:text-gray-400">&lt;</span>
              <span className="text-orange-500 dark:text-blue-600">{displayedText}</span>
              <span className="text-orange-500 dark:text-blue-600 cursor-blink">|</span>
              <span className="text-slate-500 dark:text-gray-400">/&gt;</span>
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight transition-colors duration-300">
            <span className="text-blue-600 dark:text-orange-500">
              {personalInfo.name}
            </span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-gray-300 mb-4 max-w-lg leading-relaxed transition-colors duration-300">
            {personalInfo.about.education.school}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
