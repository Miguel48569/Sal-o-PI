import { useRef } from "react";
import "./CodePassword.css";
import logo from "../../assets/logo-sec.png";
import { useNavigate } from "react-router-dom";

const CodePassword = () => {
  const inputsRef = useRef([]);
  const navigate = useNavigate();

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    // Verifica se é um número
    if (/^\d$/.test(value)) {
      // Avança para o próximo input
      if (inputsRef.current[index + 1]) {
        inputsRef.current[index + 1].focus();
      }
    } else {
      e.target.value = "";
    }
  };

  const handleKeyDown = (e, index) => {
    if (
      e.key === "Backspace" &&
      !e.target.value &&
      inputsRef.current[index - 1]
    ) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleAdvance = () => {
    const code = inputsRef.current.map((input) => input.value).join("");
    if (code.length === 6) {
      navigate("/NewPassword");
    } else {
      alert("Por favor, preencha todos os campos do código!");
    }
  };

  return (
    <div className="container-code-password">
      <div>
        <img src={logo} alt="logo do senac" className="logo-image" />
      </div>
      <h2>Digite o código enviado</h2>
      <p>
        <strong>No </strong> <span className="email-highlight">e-mail</span>
      </p>
      <div className="input-container">
        {[...Array(6)].map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            className="code-input"
            ref={(el) => (inputsRef.current[index] = el)}
            onChange={(e) => handleInputChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      </div>
      <button className="verify-button" onClick={handleAdvance}>
        Avançar
      </button>
      <br />
      <button className="resend-button">Reenviar Código</button>
    </div>
  );
};

export default CodePassword;
