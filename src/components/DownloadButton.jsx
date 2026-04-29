import { personalInfo } from "../data/personalInfo";
import downloadIcon from "../assets/download.png";

const DownloadButton = () => {
  return (
    <a
      href={personalInfo.cta.secondary.link}
      download
      className="flex items-center gap-2 px-4 py-1 bg-blue-600 dark:bg-orange-500 rounded-full transition-all hover:scale-105 hover:bg-blue-700 dark:hover:bg-orange-600 active:scale-95 shadow-md hover:shadow-lg"
      aria-label="Download CV"
      title="Download CV"
    >
      <img 
        src={downloadIcon} 
        alt="Download" 
        className="w-4 h-4 brightness-0 invert"
      />
      <span className="text-white font-semibold text-sm">CV</span>
    </a>
  );
};

export default DownloadButton;
