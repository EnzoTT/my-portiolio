import Animation from "../Animation/Animation";

function About() {
  return (
    <section id="about" className="container">
      <h2 className="code">{"<Sobre mim>"}</h2>

      <div className="wrapper-inner">
        <Animation>
          <p>
            Sou um Desenvolvedor de Software com 4 anos de experiência. Estou
            atualmente cursando Sistemas de Informação na UTFPR, sou estudioso
            do desenvolvimento de aplicações com qualidade de código e sou
            fluente em inglês. Atualmente estou estudando tópicos avançados do
            Javascript e qualidade de código.
          </p>
          <p className="comments">
            // Continue lendo para saber mais da minha experiência profissional
            ⬇️
          </p>
        </Animation>
        <Animation>
          <h3>0. Universidade Técnológica Federal do Paraná</h3>
          <h5 className="primary-color">Bolsista</h5>
          <h6>2019 - 2020</h6>
          <p>
            Fui bolsista no grupo PET-CoCE, um programa de educação tutorial
            multidisciplinar da universidade. Nele tive a oportunidade de atuar
            em diferentes áreas da tecnologia, fui professor de robótica
            utilizando o microcontrolador Arduino e também ministrei aulas de
            Linux para alunos universitários.
          </p>
          <p className="comments">// Ensinar é um ótimo método de aprender</p>
        </Animation>
        <Animation>
          <h3>1. Alexandria Solar</h3>
          <h5 className="primary-color">Estagiário</h5>
          <h6>2020 - 2021</h6>
          <p>
            Fui responsável pela implementação e manutenção dos sistemas
            internos e externos da empresa, a stack do projeto era
            ReactJS/NodeJS, também utilizavamos a biblioteca Styled Components.
            Tive evolução na soft skill de comunicação efeciente, pois o projeto
            demandava implementação simultânea do front-End e do back-End.
          </p>
        </Animation>
        <Animation>
          <h3>2. Objective Solutions (Remessa Online)</h3>
          <h5 className="primary-color">Desenvolvedor de Software Júnior</h5>
          <h6>2021 - 2022</h6>
          <p>
            Fui desenvolvedor front-end na plataforma de transferência
            internacional PJ da Remessa Online. O projeto foi estruturado
            utilizando testes automatizados e código limpo com a stack NextJS e
            NodeJS, além disso utilizavamos Jenkins e AWS para monitoramento de
            logs e deploy. Trabalhei com especificações e refinamento de
            requisitos, projetando e desenvolvendo soluções.
          </p>
        </Animation>
        <Animation>
          <h3>3. Objective Solutions (Clever Devices)</h3>
          <h5 className="primary-color">Desenvolvedor de Software Pleno</h5>
          <h6>2022 - Agora</h6>
          <p>
            Atualmente sou desenvolvedor front-end na Clever Devices, o projeto é
            internacional e demanda comunicação em inglês com o cliente, ele é
            estruturado utilizando a stack .Net e AngularJS. Utilizamos a
            metodologia ágil SCRUM e o Jira para controle de processos, temos
            refinamentos de requisitos e aplicamos testes de qualidade no
            produto.
          </p>
        </Animation>
      </div>
      <h2 className="code">{"</Sobre mim>"}</h2>
    </section>
  );
}

export default About;
