import Typewriter from "react-ts-typewriter";
import './Intro.css'

function Intro() {
  return (
    <section id="intro" className="container justify-center show">
      <div className="banner">
        <h1>
          Olá, meu nome é <span className="primary-color">Enzo Trevisan.</span>
          👋 <br />
          Sou Desenvolvedor{" "}
          <Typewriter
            text={[
              "Front-End",
              "ReactJS",
              "NextJS",
              "Angular",
              "Javascript",
              "Typescript",
            ]}
            loop
            speed={80}
            delay={900}
            cursor={false}
          />
        </h1>
        <a
          className="primary-button mt-6"
          href="assets/pdf/curriculo-enzo-trevisan-topanotti.pdf"
          download
        >
          Baixar CV
        </a>
      </div>
    </section>
  );
}

export default Intro;
