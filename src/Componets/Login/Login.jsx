import { useState } from "react";
import logo from "../../assets/logo-sec.png";
import { FaUser, FaLock } from "react-icons/fa";
import "./Login.css";
import { Link } from "react-router-dom"; // Importando o Link para navegação

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Dados de Login:", { username, password });
  };

  return (
    <div className="container">
      <div>
        <img src={logo} alt="logo do senac" className="logo-image" />
      </div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-field">
          <input
            type="text"
            placeholder="E-mail"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>

        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembre de mim
          </label>
          <Link to="/ForgotPassword" className="esqueciSenha">
            Esqueci minha Senha
          </Link>
        </div>

        <button>Entrar</button>

        <div className="signup-link">
          <p>
            Não tem conta?{" "}
            {/* Aqui o Link do React Router para redirecionar para a página de Cadastro */}
            <Link to="/cadastro">Cadastre-se</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
