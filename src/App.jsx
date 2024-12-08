import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Componets/Login/Login";
import Cadastro from "./Componets/Cadastro/Cadastro"; // Importando o componente Cadastro
import "./App.css"; // Importando o arquivo CSS
import ForgotPassword from "./Componets/ForgotPassword/ForgotPassword";

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
