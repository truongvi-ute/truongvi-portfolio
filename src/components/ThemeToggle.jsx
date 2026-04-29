import { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";
import themeAnimation from "../assets/animations/theme-toggle.json";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const lottieRef = useRef();

  // Load dark mode từ localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add("dark");
      // Set animation to dark mode frame
      if (lottieRef.current) {
        lottieRef.current.goToAndStop(115, true);
      }
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());

    if (newMode) {
      document.documentElement.classList.add("dark");
      // Play light to dark animation (frame 0 to 115)
      if (lottieRef.current) {
        lottieRef.current.playSegments([0, 115], true);
      }
    } else {
      document.documentElement.classList.remove("dark");
      // Play dark to light animation (frame 300 to 385)
      if (lottieRef.current) {
        lottieRef.current.playSegments([300, 385], true);
      }
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="transition-all hover:scale-110 active:scale-95 overflow-hidden"
      aria-label="Toggle dark mode"
      style={{ background: "transparent", border: "none", padding: 0 }}
    >
      <div className="w-16 h-10 overflow-hidden flex items-center justify-center">
        <Lottie
          lottieRef={lottieRef}
          animationData={themeAnimation}
          loop={false}
          autoplay={false}
          style={{ width: "100%", height: "150%" }}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
