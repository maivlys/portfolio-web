import "./App.css";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Projects } from "./Projects";
import { Intro } from "./Intro";
import { Footer } from "./Footer";
import { Contact } from "./Contact";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
