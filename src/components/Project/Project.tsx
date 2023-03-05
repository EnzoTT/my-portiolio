import Card from "../Card/Card";
import Animation from "../Animation/Animation";
import Tag from "../Tag/Tag";
import "./Project.css";
import Link from "../Link/Link";
import { ProjectProps } from "../../utils/interfaces";

function Project(props: ProjectProps) {
  const { tags, card, links } = props;
  console.log(tags, card, links);
  return (
    <div className="project">
      <Animation>
        <Card imgUrl={card.imgUrl} title={card.title} description={card.description} />
        <p className="comments">// Stack utilizada</p>
        <div className="tag-container">
          {tags.map((tag: any, index:any) => (
            <Tag key={index} text={tag}></Tag>
          ))}
        </div>
        <p className="comments">// Veja a aplicação</p>
        <div className="link-container">
          {links.map((link: any, index:any) => (
            <Link key={index} link={link.link} isGit={link.isGit} />
          ))}
        </div>
      </Animation>
    </div>
  );
}

export default Project;
