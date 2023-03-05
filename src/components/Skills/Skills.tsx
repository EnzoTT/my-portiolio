import Animation from "../Animation/Animation";

function Skills() {
  return (
    <section id="skills" className="container justify-between">
      <h2 className="code">{"<Habilidades>"}</h2>
      <Animation>
        <div className="wrapper-inner">
          <p className="comments">
            // Algumas das minhas ferramentas favoritas do momento:
          </p>

          <div className="skills">
            <div>
              <h5 className="primary-color mb-5">Front-End</h5>
              <h6>HTML</h6>
              <h6>SCSS/SASS</h6>
              <h6>CSS</h6>
              <h6>ReactJS</h6>
              <h6>NextJS</h6>
              <h6>Angular</h6>
            </div>

            <div>
              <h5 className="primary-color mb-5">Back-End</h5>
              <h6>NodeJS</h6>
              <h6>NestJS</h6>
              <h6>PostgreSQL</h6>
            </div>

            <div>
              <h5 className="primary-color mb-5">Outras</h5>
              <h6>Typescript</h6>
              <h6>Linux</h6>
              <h6>SCRUM</h6>
              <h6>Kanban</h6>
              <h6>Docker</h6>
              <h6>C++</h6>
              <h6>Código limpo</h6>
              <h6>Testes de software</h6>
            </div>
          </div>
        </div>
      </Animation>
      <h2 className="code">{"</Habilidades>"}</h2>
    </section>
  );
}

export default Skills;
