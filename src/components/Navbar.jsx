import { useState, useEffect } from "react";
import { personalInfo } from "../data/personalInfo";
import ThemeToggle from "./ThemeToggle";
import MenuToggle from "./MenuToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Theo dõi scroll để thay đổi style navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
    { name: "Download CV", href: personalInfo.cta.secondary.link, isDownload: true },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Chiều cao navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-2">
      <div
        className={`max-w-6xl mx-auto transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-xl py-1.5 rounded-2xl"
            : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg py-2 rounded-2xl"
        }`}
      >
        <div className="px-6 flex items-center justify-between gap-8">
          {/* Left: Theme Toggle */}
          <div className="flex-shrink-0">
            <ThemeToggle />
          </div>

          {/* Center: Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => link.isDownload ? null : handleNavClick(e, link.href)}
                  download={link.isDownload ? true : undefined}
                  className="text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-orange-500 font-medium transition-colors relative group whitespace-nowrap"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Right: Spacer for balance (hidden on mobile, visible on desktop) */}
          <div className="hidden lg:block flex-shrink-0 w-16"></div>

          {/* Right: Menu Toggle (mobile only) */}
          <div className="lg:hidden flex-shrink-0">
            <MenuToggle 
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <ul className="border-t border-slate-200 dark:border-gray-700 py-4 px-6 space-y-3 mt-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => link.isDownload ? null : handleNavClick(e, link.href)}
                  download={link.isDownload ? true : undefined}
                  className="block text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-orange-500 font-medium py-2 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
