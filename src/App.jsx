import "./App.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
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
      <section id="About">
        <About />
      </section>

      <section>
        <Parallax type="portfolio" />
      </section>
      <section id="Projects">Project1</section>
      <section>Project2</section>
      <section>Project3</section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
