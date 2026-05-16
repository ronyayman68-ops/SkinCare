import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Shop from "./components/Shop";
import Ingredients from "./components/Ingredients";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-[#FFF8F2] via-[#FDF2F8] to-[#EEF2FF]">
      <Navbar />
      <Hero />
      <Shop />
      <Ingredients />
      <About />
      <Reviews />
      <Contact />
    </div>
  );
}

export default App;
