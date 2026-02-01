import "./App.css";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Projects } from "./Projects";
import { Intro } from "./Intro";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Projects />
      </main>
    </>
  );
}

export default App;
