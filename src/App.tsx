import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="w-[100%] bg-slate-50 dark:bg-dark-background dark:text-white">
      <Navbar />
      <Intro />
      <Skills />
      <Projects/>
      <About />
      {/* <Contact /> */}
      <footer>
        <p>© 2023 Enzo Trevisan. Todos os direitos reservados.</p>
        <p>
          Desenvolvido com o ❤️ por{" "}
          <span className="primary-color">Enzo Trevisan</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
