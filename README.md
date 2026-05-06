# 🌟 Trường Vĩ Portfolio

Portfolio cá nhân của Nguyễn Đoàn Trường Vĩ - Full-stack Developer đam mê xây dựng ứng dụng web và di động.

![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.19-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## ✨ Tính năng

- 🎨 **Dark/Light Mode** - Chuyển đổi theme mượt mà với Lottie animation
- 📱 **Responsive Design** - Tối ưu cho mọi kích thước màn hình
- ⚡ **Performance** - Xây dựng với Vite để tốc độ tải nhanh
- 🎭 **Animations** - Hiệu ứng typing animation và Lottie animations
- 🎯 **Modern UI** - Glass morphism navbar với floating design
- 🖼️ **Out of Bounds Effect** - Avatar với hiệu ứng 3D độc đáo

## 🛠️ Công nghệ sử dụng

- **Frontend Framework:** React 19
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS 3
- **Animations:** Lottie React
- **Deployment:** GitHub Pages

## 🚀 Cài đặt và Chạy

### Yêu cầu

- Node.js >= 16.x
- npm hoặc yarn

### Cài đặt

```bash
# Clone repository
git clone https://github.com/yourusername/truongvi-portfolio.git

# Di chuyển vào thư mục dự án
cd truongvi-portfolio

# Cài đặt dependencies
npm install
```

### Chạy Development Server

```bash
npm run dev
```

Mở trình duyệt và truy cập `http://localhost:5173`

### Build cho Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Deploy lên GitHub Pages

```bash
npm run deploy
```

## 📁 Cấu trúc thư mục

```
truongvi-portfolio/
├── public/
│   └── favicon.png          # Favicon của website
├── src/
│   ├── assets/
│   │   ├── animations/      # Lottie animation files
│   │   │   ├── menu.json
│   │   │   └── theme-toggle.json
│   │   ├── hero.png         # Ảnh avatar
│   │   └── logo.png         # Logo
│   ├── components/
│   │   ├── MenuToggle.jsx   # Component menu toggle với animation
│   │   ├── Navbar.jsx       # Navigation bar component
│   │   └── ThemeToggle.jsx  # Dark/Light mode toggle
│   ├── data/
│   │   └── personalInfo.js  # Thông tin cá nhân tập trung
│   ├── sections/
│   │   └── Hero.jsx         # Hero section với typing animation
│   ├── App.jsx              # Main App component
│   ├── index.css            # Global styles và Tailwind directives
│   └── main.jsx             # Entry point
├── index.html
├── package.json
├── tailwind.config.js       # Tailwind configuration
├── vite.config.js           # Vite configuration
└── README.md
```

## 🎨 Tùy chỉnh

### Thay đổi thông tin cá nhân

Chỉnh sửa file `src/data/personalInfo.js`:

```javascript
export const personalInfo = {
  name: "Tên của bạn",
  fullName: "Họ và tên đầy đủ",
  title: "Chức danh",
  tagline: "Mô tả ngắn về bạn",
  // ...
};
```

### Thay đổi màu sắc

Chỉnh sửa `tailwind.config.js` để thay đổi color scheme:

```javascript
theme: {
  extend: {
    colors: {
      // Thêm màu tùy chỉnh của bạn
    }
  }
}
```

### Thêm sections mới

Tạo component mới trong `src/sections/` và import vào `App.jsx`:

```javascript
import NewSection from "./sections/NewSection";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <NewSection />
    </div>
  );
}
```

## 🎯 Color Scheme

### Light Mode
- **Primary:** Blue (#3b82f6)
- **Background:** White/Blue gradient
- **Text:** Slate gray
- **Title (inverted):** Orange (#f97316)

### Dark Mode
- **Primary:** Orange (#f97316)
- **Background:** Gray/Black gradient
- **Text:** Light gray
- **Title (inverted):** Blue (#3b82f6)

## 📝 Scripts

| Command | Mô tả |
|---------|-------|
| `npm run dev` | Chạy development server |
| `npm run build` | Build cho production |
| `npm run preview` | Preview production build |
| `npm run lint` | Chạy ESLint |
| `npm run deploy` | Deploy lên GitHub Pages |

## 🌐 Deployment

Website được deploy tự động lên GitHub Pages khi chạy:

```bash
npm run deploy
```

Truy cập tại: `https://yourusername.github.io/truongvi-portfolio/`

## 📄 License

MIT License - Xem file [LICENSE](LICENSE) để biết thêm chi tiết.

## 👤 Tác giả

**Nguyễn Đoàn Trường Vĩ**

- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- [Lottie Files](https://lottiefiles.com/) - Animation assets
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Vite](https://vitejs.dev/) - Build tool
- [React](https://react.dev/) - UI library

---

⭐ Nếu bạn thấy project này hữu ích, hãy cho một star nhé!
