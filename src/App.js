import { Routes, Route, useLocation } from "react-router-dom";
import Intro from "./components/Intro";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import { AnimatePresence } from "framer-motion";
import ErrorPage from "./components/ErrorPage";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Intro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
