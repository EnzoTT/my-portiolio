import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { LinkProps } from "../../utils/interfaces";

import './Link.css'

function Link(props: LinkProps) {
  return (
    <a className="link" href={props.link} target="_blank">
      {props.isGit ? (
        <>
        Veja o código <FontAwesomeIcon icon={faGithub} className="ml-1" size="lg"/>
        </>
      ) : (
        <>
        Acesse o site <FontAwesomeIcon icon={faLink} className="ml-1" size="lg"/>
        </>
      )}
    </a>
  );
}

export default Link;
