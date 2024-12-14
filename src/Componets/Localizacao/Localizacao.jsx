import "./Localizacao.css";
import localizacaoImg from "../../assets/foto-localização.png";

const Localizacao = () => {
  return (
    <div className="localizacao-container">
      <h1 className="localizacao-titulo">LOCALIZAÇÃO</h1>
      <div className="localizacao-conteudo">
        <div className="localizacao-endereco">
          <p>
            Endereço: R. do Pombal, 57 - Santo Amaro, Recife - PE, 50100-170
          </p>
        </div>
        <img
          src={localizacaoImg}
          alt="Localização"
          className="imagem-localizacao"
        />
      </div>
    </div>
  );
};

export default Localizacao;
