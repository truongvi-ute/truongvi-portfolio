# 🌟 Trường Vĩ Portfolio

A modern, responsive personal portfolio website showcasing my skills, projects, and certifications as a Full-stack Developer.

![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.19-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

## 🎯 About This Project

This portfolio website is built with modern web technologies to create a fast, responsive, and visually appealing showcase of my professional journey. It features smooth animations, dark mode support, and a clean, minimalist design.

## ✨ Key Features

### 🎨 Design & UI
- **Dark/Light Mode**: Seamless theme switching with animated toggle
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Glass Morphism**: Modern UI with backdrop blur effects
- **Smooth Animations**: Typing effects, hover animations, and scroll-based interactions
- **Inverted Color Scheme**: Blue/Orange theme that inverts between light and dark modes

### 📱 Sections

#### Hero Section
- Dynamic typing animation displaying multiple titles
- Out-of-bounds profile image effect with 3D hover animation
- Clean introduction with GPA and school information

#### About Section
- Facebook-style profile card with cover photo
- Personal information and contact details
- Career goals timeline (Short-term, Mid-term, Long-term)
- Social media links (Facebook, GitHub, LinkedIn)

#### Skills Section
- Circular progress indicators for each skill
- Categorized by: Languages, Frontend, Backend, Database, Tools, Other
- Official brand colors for technology icons
- 20+ technical skills displayed

#### Projects Section
- Timeline-based layout with vertical line and dots
- Project cards with technology badges
- Key features and highlights
- Links to GitHub repositories (Backend & Frontend)

#### Certifications Section
- Interactive carousel with manual navigation
- 7 certifications including TOEIC, AWS Academy, and Educative
- Circular icons overlapping card tops
- Links to verify credentials

### � Technical Features
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Smooth Navigation**: Auto-updating URL hash based on scroll position
- **CV Download**: Direct download functionality for resume
- **Intersection Observer**: Smart section tracking for active navigation

## 🛠️ Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 3
- **Icons**: React Icons
- **Animations**: Lottie React
- **Carousel**: Swiper
- **Language**: JavaScript (ES6+)

## 🚀 Getting Started

### Prerequisites
- Node.js >= 16.x
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/truongvi-ute/truongvi-portfolio.git

# Navigate to project directory
cd truongvi-portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Visit `http://localhost:5173` to view the portfolio.

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

### Lint Code

```bash
# Run ESLint
npm run lint
```

## 📁 Project Structure

```
truongvi-portfolio/
├── public/
│   └── favicon.png
├── src/
│   ├── assets/
│   │   ├── animations/          # Lottie animation files
│   │   ├── cv/                  # CV PDF file
│   │   └── images/              # Images (hero, background, logo)
│   ├── components/
│   │   ├── MenuToggle.jsx       # Mobile menu toggle with animation
│   │   ├── Navbar.jsx           # Navigation bar with scroll tracking
│   │   └── ThemeToggle.jsx      # Dark/light mode toggle
│   ├── data/
│   │   └── personalInfo.js      # Centralized personal data
│   ├── sections/
│   │   ├── About.jsx            # About section
│   │   ├── Certifications.jsx   # Certifications carousel
│   │   ├── Hero.jsx             # Hero section with typing animation
│   │   ├── Projects.jsx         # Projects timeline
│   │   └── Skills.jsx           # Skills with progress circles
│   ├── App.jsx                  # Main app component
│   ├── index.css                # Global styles and animations
│   └── main.jsx                 # App entry point
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## 🎨 Color Scheme

The portfolio uses a unique inverted color scheme:

### Light Mode
- **Primary Accent**: Blue (#3b82f6)
- **Title Accent**: Orange (#f97316) - inverted
- **Background**: Slate 50
- **Text**: Slate gray

### Dark Mode
- **Primary Accent**: Orange (#f97316)
- **Title Accent**: Blue (#3b82f6) - inverted
- **Background**: Gray 900
- **Text**: Light gray

## 🎯 Customization

To customize this portfolio for your own use:

1. **Update Personal Information**: Edit `src/data/personalInfo.js`
2. **Replace Images**: Update files in `src/assets/images/`
3. **Update CV**: Replace PDF in `src/assets/cv/`
4. **Modify Colors**: Adjust Tailwind config in `tailwind.config.js`

## 📊 Performance

- **Build Size**: ~13.7 MB (including high-quality images)
- **Load Time**: Fast (Vite optimized)
- **Lighthouse Score**: Expected 90+ on all metrics

## 🌐 Deployment

This project can be deployed to any static hosting service:

### Vercel
```bash
vercel deploy
```

### Netlify
1. Build: `npm run build`
2. Publish directory: `dist`

### GitHub Pages
```bash
npm run deploy
```

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Nguyễn Đoàn Trường Vĩ**

- 🎓 Student at HCMUTE (Ho Chi Minh City University of Technology and Education)
- 💼 Aspiring Full-stack Developer
- 📧 Email: nguyendoantruongvi11@gmail.com
- 🔗 GitHub: [@truongvi-ute](https://github.com/truongvi-ute)
- 💼 LinkedIn: [truongvi-ute](https://linkedin.com/in/truongvi-ute)
- 📘 Facebook: [Nguyễn Đoàn Trường Vĩ](https://www.facebook.com/nguyen.oan.truong.vi)

## 🙏 Acknowledgments

- [Lottie Files](https://lottiefiles.com/) - Animation assets
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Vite](https://vitejs.dev/) - Build tool
- [React](https://react.dev/) - UI library
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [Swiper](https://swiperjs.com/) - Carousel library

---

⭐ If you find this project useful, please consider giving it a star!
