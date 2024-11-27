import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Componets/Login/Login";
import Cadastro from "./Componets/Cadastro/Cadastro"; // Importando o componente Cadastro
import "./App.css"; // Importando o arquivo CSS

function App() {
  return (
    <div className="App">
      {" "}
      {/* Aplica a classe App no contêiner principal */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />{" "}
          {/* Definindo a rota para Cadastro */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
