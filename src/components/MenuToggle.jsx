import { useRef, useEffect } from "react";
import Lottie from "lottie-react";
import menuAnimation from "../assets/animations/menu.json";

const MenuToggle = ({ isOpen, onClick }) => {
  const lottieRef = useRef();

  // Cập nhật animation khi isOpen thay đổi
  useEffect(() => {
    if (lottieRef.current) {
      if (isOpen) {
        // Menu mở → Phát animation hamburger → X (frame 0 → 37)
        lottieRef.current.setDirection(1);
        lottieRef.current.play();
      } else {
        // Menu đóng → Phát animation ngược X → hamburger (frame 37 → 0)
        lottieRef.current.setDirection(-1);
        lottieRef.current.play();
      }
    }
  }, [isOpen]);

  return (
    <button
      onClick={onClick}
      className="lg:hidden p-2 transition-colors group"
      aria-label="Toggle menu"
    >
      <div className="w-6 h-6 menu-icon-light">
        <Lottie
          lottieRef={lottieRef}
          animationData={menuAnimation}
          loop={false}
          autoplay={false}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </button>
  );
};

export default MenuToggle;
