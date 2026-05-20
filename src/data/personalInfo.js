// Thông tin cá nhân
export const personalInfo = {
  name: "Trường Vĩ",
  title: ["GPA: 3.63/ 4.0", "HCMUTE", "Software Engineer"],

  // About Me Section - Thông tin chi tiết
  about: {
    fullName: "Nguyễn Đoàn Trường Vĩ",
    dateOfBirth: "11/07/2005",
    goals: {
      shortTerm: ["Graduate with honors","Participate in scientific research", "Join internship programs"],
      midTerm: ["Become a Full-stack Developer"],
      longTerm: ["Become a DevOps Engineer"]
    },
    education: {
      school: "Đại học Công nghệ Kỹ thuật TP.HCM - HCMUTE",
      timeline: "2023 - 2027",
      gpa: "3.63 / 4.0",
      credits: "116 / 150"
    },
  },

  // Skills Section
  skills: {
    languages: [
      { name: "Java", level: 80, icon: "FaJava", color: "#007396" },
      { name: "JavaScript", level: 60, icon: "SiJavascript", color: "#F7DF1E" },
      { name: "Python", level: 60, icon: "FaPython", color: "#3776AB" },
      { name: "C++", level: 60, icon: "SiCplusplus", color: "#00599C" },
      { name: "SQL", level: 80, icon: "SiMysql", color: "#4479A1" }
    ],
    frontend: [
      { name: "React", level: 70, icon: "FaReact", color: "#61DAFB" },
      { name: "HTML/CSS", level: 80, icon: "FaHtml5", color: "#E34F26" },
    ],
    backend: [
      { name: "Spring Boot", level: 75, icon: "SiSpring", color: "#6DB33F" },
      { name: "REST API", level: 80, icon: "SiPostman", color: "#FF6C37" }
    ],
    database: [
      { name: "PostgreSQL", level: 75, icon: "SiPostgresql", color: "#4169E1" },
    ],
    tools: [
      { name: "Git", level: 80, icon: "FaGitAlt", color: "#F05032" },
      { name: "Docker", level: 60, icon: "FaDocker", color: "#2496ED" },
      { name: "VS Code", level: 85, icon: "SiVisualstudiocode", color: "#007ACC" },
      { name: "IntelliJ IDEA", level: 75, icon: "SiIntellijidea", color: "#000000" },
      { name: "Postman", level: 60, icon: "SiPostman", color: "#FF6C37" }
    ],
    other: [
      { name: "Agile/Scrum", level: 20, icon: "SiJira", color: "#0052CC" },
      { name: "OOP", level: 90, icon: "FaCode", color: "#5C2D91" },
      { name: "Data Structures", level: 75, icon: "SiDatadog", color: "#632CA6" },
      { name: "Algorithms", level: 70, icon: "FaProjectDiagram", color: "#FF6B6B" }
    ]
  },

  // Projects Section
  projects: [
    {
      id: 1,
      name: "MAPIC - Social Network Mobile App",
      period: "02 - 04/2026",
      description: "A full-stack social network mobile application built with React Native for frontend and Spring Boot for backend. Features include user authentication, real-time messaging, location-based services, and social interactions.",
      technologies: ["React Native", "Spring Boot", "REST API", "JWT", "Redis"],
      techIcons: ["FaReact", "SiSpring", "SiPostman", "FaKey", "SiRedis"],
      techColors: ["#61DAFB", "#6DB33F", "#FF6C37", "#FFD700", "#DC382D"],
      links: {
        githubBackend: "https://github.com/truongvi-ute/mapic_api.git",
        githubFrontend: "https://github.com/truongvi-ute/mapic_app.git"
      },
      highlights: [
        "Mobile app built with React Native for cross-platform compatibility",
        "Backend API with Spring Boot, REST API, JWT authentication",
        "Redis integration for caching and performance optimization",
        "Full-stack development as part of a 2-member team"
      ]
    }
  ],

  // Certifications Section
  certifications: [
    {
      id: 1,
      name: "TOEIC Certificate",
      issuer: "ETS",
      date: "2024",
      score: "675/990",
      type: "image",
      icon: "FaLanguage",
      iconColor: "#4CAF50",
      image: "/src/assets/certifications/toeic.jpg",
      description: "English proficiency test"
    },
    {
      id: 2,
      name: "Learn Object-Oriented Programming in Java",
      issuer: "Educative",
      date: "May 2026",
      type: "link",
      icon: "FaJava",
      iconColor: "#007396",
      credentialUrl: "https://www.educative.io/verify-certificate/EJ786P5F7C",
      description: "OOP fundamentals in Java"
    },
    {
      id: 3,
      name: "AWS Academy Graduate - Microservices and CI/CD Pipeline Builder",
      issuer: "Amazon Web Services Training and Certification",
      date: "Nov 2025",
      type: "link",
      icon: "FaAws",
      iconColor: "#FF9900",
      credentialUrl: "https://www.credly.com/users/nguyen-doan-truong-vi/badges",
      description: "Microservices architecture and CI/CD pipelines"
    },
    {
      id: 4,
      name: "AWS Academy Graduate - Cloud Data Pipeline Builder",
      issuer: "Amazon Web Services Training and Certification",
      date: "Nov 2025",
      type: "link",
      icon: "FaAws",
      iconColor: "#FF9900",
      credentialUrl: "https://www.credly.com/users/nguyen-doan-truong-vi/badges",
      description: "Building and managing cloud data pipelines"
    },
    {
      id: 5,
      name: "AWS Academy Graduate - Cloud Web Application Builder",
      issuer: "Amazon Web Services Training and Certification",
      date: "Nov 2025",
      type: "link",
      icon: "FaAws",
      iconColor: "#FF9900",
      credentialUrl: "https://www.credly.com/users/nguyen-doan-truong-vi/badges",
      description: "Building scalable web applications on AWS"
    },
    {
      id: 6,
      name: "AWS Academy Graduate - Cloud Developing",
      issuer: "Amazon Web Services Training and Certification",
      date: "Oct 2025",
      type: "link",
      icon: "FaAws",
      iconColor: "#FF9900",
      credentialUrl: "https://www.credly.com/users/nguyen-doan-truong-vi/badges",
      description: "Cloud application development on AWS"
    },
    {
      id: 7,
      name: "AWS Academy Graduate - Cloud Foundations",
      issuer: "Amazon Web Services Training and Certification",
      date: "Oct 2025",
      type: "link",
      icon: "FaAws",
      iconColor: "#FF9900",
      credentialUrl: "https://www.credly.com/users/nguyen-doan-truong-vi/badges",
      description: "Cloud computing fundamentals"
    }
  ],

  // Call to action buttons
  cta: {
    primary: {
      text: "View Projects",
      link: "#projects",
    },
    secondary: {
      text: "Download CV",
      link: "/cv/Nguyen-Doan-Truong-Vi-Intern.pdf",
    },
  },

  // Contact Info
  contact: {
    email: "nguyendoantruongvi11@gmail.com",
    phone: "+84 886 456 740",
    address: "Ho Chi Minh City, Vietnam",
    social: {
      facebook: "https://www.facebook.com/nguyen.oan.truong.vi?locale=vi_VN",
      github: "https://github.com/truongvi-ute",
      linkedin: "https://linkedin.com/in/truongvi-ute"
    }
  },
};
