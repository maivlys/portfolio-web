import "./App.css";
import "./global.css";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Projects } from "./Projects";
import { Intro } from "./Intro";
import { Footer } from "./Footer";
import { Contact } from "./Contact";
import { useState } from "react";

function App() {
  const [isChanging, setIsChanging] = useState(false);

  function affectGradient() {
    setIsChanging(true);
    setTimeout(() => {
      setIsChanging(false);
    }, 400);
  }

  return (
    <>
      <Navbar affectGradient={affectGradient} />
      <main>
        <Hero isChanging={isChanging} />
        <Intro />
        <Projects id="projects" />
        <Contact id="contact" />
      </main>
      <Footer />
    </>
  );
}

export default App;
