import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import "./index.css";

export default function App() {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "fr" || saved === "en") return saved;
    return navigator.language?.slice(0, 2) === "en" ? "en" : "fr";
  });
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const [modal, setModal] = useState(null); // project index or null

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  const toggleTheme = () => setTheme(t => t === "dark" ? "light" : "dark");
  const toggleLang  = () => setLang(l => l === "fr" ? "en" : "fr");

  return (
    <>
      <Nav lang={lang} theme={theme} onToggleTheme={toggleTheme} onToggleLang={toggleLang} />
      <Hero lang={lang} />
      <Stats lang={lang} />
      <Skills lang={lang} />
      <Projects lang={lang} onOpenModal={setModal} />
      <About lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
      {modal !== null && <Modal lang={lang} index={modal} onClose={() => setModal(null)} />}
    </>
  );
}
