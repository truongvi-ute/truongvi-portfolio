// Thông tin cá nhân
export const personalInfo = {
  name: "Trường Vĩ",
  title: "Software Engineer",

  // About Me Section - Thông tin chi tiết
  about: {
    fullName: "Nguyễn Đoàn Trường Vĩ",
    dateOfBirth: "11/07/2005",
    goals: {
      shortTerm: ["Graduate with honors","Participate in scientific research", "Join internship programs"],
      midTerm: ["Become a Full-stack Developer"],
      longTerm: ["DevOps Engineer"]
    },
    education: {
      school: "Đại học Công nghệ Kỹ thuật TP.HCM - HCMUTE",
      timeline: "2023 - 2027",
      gpa: "3.59 / 4.0",
      credits: "102 / 150"
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


  // Call to action buttons
  cta: {
    primary: {
      text: "View Projects",
      link: "#projects",
    },
    secondary: {
      text: "Download CV",
      link: "/cv/Nguyen_Doan_Truong_Vi_CV.pdf",
    },
  },

  // Social links
  social: {
    github: "https://github.com/truongvi",
    linkedin: "https://linkedin.com/in/truongvi",
    email: "truongvi@example.com",
    phone: "+84 xxx xxx xxx",
  },

  // Ảnh profile
  images: {
    avatar: "/src/assets/avatar.png",
    hero: "/src/assets/hero.jpg",
  },
};
