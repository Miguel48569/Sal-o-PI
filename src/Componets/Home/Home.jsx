import "./Home.css";
import backHome from "../../assets/foto-home.png";
import logoSenac from "../../assets/logo-home.png"; // Certifique-se de ter a imagem no diretório correto
import "bootstrap/dist/css/bootstrap.min.css";

import {
  FaHome,
  FaInfoCircle,
  FaClock,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";

const Home = () => {
  // Função para lidar com o clique no botão de agendar horário
  const handleAgendarHorario = () => {
    alert("Botão 'Agendar Horário' clicado!");
  };

  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${backHome})` }}
    >
      {/* Navbar */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-custom">
          <div className="container-fluid">
            {/* Logo ou Home */}
            <a className="navbar-brand" href="#inicio">
              <FaHome className="me-2" /> Home
            </a>

            {/* Botão de responsividade */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Links da Navbar */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto nav-links">
                <li className="nav-item">
                  <a className="nav-link" href="#inicio">
                    <FaHome className="me-2" />
                    Início
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#sobre">
                    <FaInfoCircle className="me-2" />
                    Sobre
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#horarios">
                    <FaClock className="me-2" />
                    Horários
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#localizacao">
                    <FaMapMarkerAlt className="me-2" />
                    Localização
                  </a>
                </li>
              </ul>
            </div>

            {/* Botão Agendar Horário com Ícone */}
            <button
              className="schedule-button d-none d-lg-block"
              onClick={handleAgendarHorario}
            >
              <FaCalendarAlt className="me-3" />
              Agendar Horário
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="logo-container">
          {/* Logo do Senac */}
          <img src={logoSenac} alt="Logo Senac" className="logo-senac" />
        </div>

        <div className="text-overlay">
          <h1>
            MAIS QUE UM <span>CORTE</span>
          </h1>
          <p>Beleza, estética e bem-estar em um só lugar</p>
        </div>
      </main>
    </div>
  );
};

export default Home;
