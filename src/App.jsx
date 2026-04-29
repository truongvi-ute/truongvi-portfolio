import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <Hero />
        {/* Các section khác sẽ thêm vào sau */}
      </main>
    </div>
  );
}

export default App;
