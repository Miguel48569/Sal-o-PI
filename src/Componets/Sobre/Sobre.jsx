import "./Sobre.css";
import imageSobre from "../../assets/foto-sobre.png";

const Sobre = () => {
  return (
    <div className="sobre-container">
      <div className="texto-sobre">
        <h2>
          <span className="titulo-sobre">SOBRE</span>
        </h2>
        <p>
          <strong>O Senac</strong> dispõe de uma unidade especializada em
          serviços na área de beleza, estética e bem-estar para atender ao
          público em geral. O Salão Empresa Pedagógica conta com uma estrutura
          moderna e profissionais altamente qualificados, para proporcionar os
          cuidados que você precisa.
        </p>
        <p>
          São oferecidos serviços de manicure, pedicure, cortes masculinos e
          femininos, mechas e cuidados com todos os tipos de cabelo, design de
          sobrancelha, depilação, massagem, podologia, entre outros.
        </p>
      </div>
      <div className="imagens-sobre">
        <img
          src={imageSobre}
          alt="Profissional cortando cabelo"
          className="imagem-sobre"
        />
      </div>
    </div>
  );
};

export default Sobre;
