import "./Card.css";
import { CardProps } from "../../utils/interfaces";

function Card({ imgUrl, title, description }: CardProps) {
  return (
    <div className="card">
      <div
        className="bg-animation"
        style={{
          background: `url(${imgUrl}) center`,
          backgroundSize: "cover",
        }}
      />
      <div className="overlay">
        <div className="text">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
