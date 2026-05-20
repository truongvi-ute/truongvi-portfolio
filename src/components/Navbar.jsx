import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import MenuToggle from "./MenuToggle";
import cvFile from "../assets/cv/Nguyen-Doan-Truong-Vi-Intern.pdf";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Theo dõi scroll để thay đổi style navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theo dõi section nào đang hiển thị và cập nhật URL
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("id");
            setActiveSection(sectionId);
            // Cập nhật URL mà không reload trang
            window.history.replaceState(null, '', `#${sectionId}`);
          }
        });
      },
      {
        threshold: [0, 0.1, 0.2, 0.3], // Multiple thresholds để linh hoạt hơn
        rootMargin: "-100px 0px -50% 0px" // Offset cho navbar
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Download CV", href: cvFile, isDownload: true },
  ];

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
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
        
        // Update URL hash
        window.history.pushState(null, '', href);
      }
    } else {
      // For download links, don't prevent default
      setIsMobileMenuOpen(false);
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
            {navLinks.map((link) => {
              const isActive = link.href === `#${activeSection}`;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => link.isDownload ? null : handleNavClick(e, link.href)}
                    download={link.isDownload ? "Nguyen-Doan-Truong-Vi-Intern.pdf" : undefined}
                    target={link.isDownload ? "_blank" : undefined}
                    rel={link.isDownload ? "noopener noreferrer" : undefined}
                    className={`font-medium transition-colors whitespace-nowrap ${
                      isActive
                        ? "text-blue-600 dark:text-orange-500"
                        : "text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-orange-500"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
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
            {navLinks.map((link) => {
              const isActive = link.href === `#${activeSection}`;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => link.isDownload ? null : handleNavClick(e, link.href)}
                    download={link.isDownload ? "Nguyen-Doan-Truong-Vi-Intern.pdf" : undefined}
                    target={link.isDownload ? "_blank" : undefined}
                    rel={link.isDownload ? "noopener noreferrer" : undefined}
                    className={`block font-medium py-2 transition-colors ${
                      isActive
                        ? "text-blue-600 dark:text-orange-500"
                        : "text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-orange-500"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
