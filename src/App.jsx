import "./App.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";

function App() {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section>
        <Parallax type="about" />
      </section>
      <section id="About">About</section>
      <section id="Services">Services</section>
      <section>
        <Parallax type="portfolio" />
      </section>
      <section id="Projects">Project1</section>
      <section>Project2</section>
      <section>Project3</section>
      <section id="Contact">Contact</section>
    </div>
  );
}

export default App;
