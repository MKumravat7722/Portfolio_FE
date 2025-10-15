import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Services";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App bg-gray-900 scroll-smooth">
      <Navbar/>
      <Home />
      <About />
      <Hero/>
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer /> 
    </div>
  );
}

export default App;