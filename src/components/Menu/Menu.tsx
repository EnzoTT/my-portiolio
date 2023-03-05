import { useState } from "react";
import "./Menu.css";
import ThemeButton from "../../components/ThemeButton/ThemeButton";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="section-menu desktop">
        <a href="#skills" className="menu-link  primary-color">
          //Habilidades
        </a>
        <a href="#projects" className="menu-link primary-color">
          //Projetos
        </a>
        <a href="#about" className="menu-link  primary-color">
          //Sobre mim
        </a>
        {/* <a href="#contact" className="menu-link  primary-color">
          //Contato
        </a> */}
      </div>
      <div className="section-menu mobile">
        <button className="menu-link primary-color" onClick={handleMenu}>
          //Menu
        </button>
      </div>

      {isOpen && (
        <div className="menu">
          <button className="menu-link " onClick={handleMenu}>
            //Fechar
          </button>
          <div className="options">
            <a href="#projects" className="menu-link" onClick={handleMenu}>
              //Projetos
            </a>
            <a href="#skills" className="menu-link" onClick={handleMenu}>
              //Habilidades
            </a>
            <a href="#about" className="menu-link" onClick={handleMenu}>
              //Sobre mim
            </a>
            {/* <a href="#contact" className="menu-link" onClick={handleMenu}>
              //Contato
            </a> */}
            <ThemeButton />
          </div>
        </div>
      )}
    </>
  );
}

export default Menu;
