import "./Horario.css";
import horarioImg from "../../assets/foto-horarios.png";

const Horario = () => {
  return (
    <div className="horario-container">
      <div className="horario-conteudo">
        <div className="horario-texto">
          <h1 className="horario-titulo">
            <span className="horario-icon">🕒</span> HORÁRIOS
          </h1>
          <p>Segunda a sexta-feira, das 8h às 18h, sábados, das 9h às 15h.</p>
          <p>
            <strong>Contatos:</strong> (81) 3413.6688 / 6647
          </p>
        </div>
        <img src={horarioImg} alt="Atendimento" className="horario-imagem" />
      </div>
    </div>
  );
};

export default Horario;
