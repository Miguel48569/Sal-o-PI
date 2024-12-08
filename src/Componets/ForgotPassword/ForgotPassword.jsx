import { useState } from "react";
import "./ForgotPassword.css";
import { FaUser } from "react-icons/fa";
import logo from "../../assets/logo-sec.png";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleEmailCharge = (e) => {
    setEmail(e.target.value);
  };

  const handleSubimit = (e) => {
    e.preventDefault();
    alert(`O código de recuperação foi enviado para: ${email}`);
  };

  return (
    <div className="container">
      <div>
        <img src={logo} alt="logo do senac" className="logo-image" />
      </div>
      <form onSubmit={handleSubimit}>
        <label className="label-password">
          <span className="titulo-texto">Esqueceu a senha?</span>
          <br />
          <br />
          Digite seu <span className="email">Email</span> para <br />
          recuperar sua <span className="senha">Senha</span>
          <br /> <br />
          <span className="left-text">Email*</span>
        </label>

        <div className="input-Password">
          <input
            className="input-ForgotPassword"
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={handleEmailCharge}
            required
          />
          <FaUser className="icon" />
        </div>
        <button className="button-ForgotPassword" type="submit">
          Solicitar Código
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
