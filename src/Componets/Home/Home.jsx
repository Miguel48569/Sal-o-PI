import "./Home.css";
import logoHome from "../../assets/logo-home.png";
import backHome from "../../assets/foto-home.png";

const Home = () => {
  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${backHome})` }}
    >
      {/* Navbar */}
      <header className="navbar">
        <nav className="nav-links">
          <a href="#inicio">INÍCIO</a>
          <a href="#sobre">SOBRE</a>
          <a href="#horarios">HORÁRIOS</a>
          <a href="#localizacao">LOCALIZAÇÃO</a>
        </nav>
        <button className="schedule-button">AGENDAR HORÁRIO</button>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="text-overlay">
          <img src={logoHome} alt="logo do home" className="logo-home" />
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
