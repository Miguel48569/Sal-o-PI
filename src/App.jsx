import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Componets/Login/Login";
import Cadastro from "./Componets/Cadastro/Cadastro"; // Importando o componente Cadastro
import "./App.css"; // Importando o arquivo CSS
import ForgotPassword from "./Componets/ForgotPassword/ForgotPassword";
import CodePassword from "./Componets/CodePassword/CodePassword";
import NewPassword from "./Componets/NewPassword/NewPassword";
import Home from "./Componets/Home/Home";
import Sobre from "./Componets/Sobre/Sobre";
import Localizacao from "./Componets/Localizacao/Localizacao";
import Horario from "./Componets/Horario/Horario";

function App() {
  return (
    <div className="App">
      {" "}
      {/* Aplica a classe App no contêiner principal */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />{" "}
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/CodePassword" element={<CodePassword />} />
          <Route path="/NewPassword" element={<NewPassword />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Sobre" element={<Sobre />} />
          <Route path="/Localizacao" element={<Localizacao />} />
          <Route path="/Horario" element={<Horario />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
