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

  function toggle() {
    setIsChanging(true);
    setTimeout(() => {
      setIsChanging(false);
    }, 400);
  }

  return (
    <>
      <Navbar toggle={toggle} />
      <main>
        <Hero isChanging={isChanging} />
        <Intro />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
