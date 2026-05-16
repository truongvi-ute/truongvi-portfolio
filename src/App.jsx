import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        {/* Các section khác sẽ thêm vào sau */}
      </main>
    </div>
  );
}

export default App;
