import Project from "../Project/Project";
import { ProjectProps } from "../../utils/interfaces";

const test:ProjectProps = {
  tags: ["REACTJS", "HTML", "CSS", "TYPESCRIPT", "CLEAN CODE"],
  card: {
    imgUrl: "/assets/images/portifolio-light.PNG",
    title: "Portifólio",
    description:
      "Um projeto implementado do zero utilizando ReactJS e Typescript",
  },
  links: [
    {
      isGit: true,
      link: "https://github.com/EnzoTT/portifolio-reactjs",
    },
  ],
};

function Projects() {
  return (
    <section id="projects" className="container">
      <h2 className="code">{"<Projetos>"}</h2>
      <div className="wrapper-inner">
          <Project tags={test.tags} card={test.card} links={test.links}/>
      </div>
      <h2 className="code">{"</Projetos>"}</h2>
    </section>
  );
}

export default Projects;
