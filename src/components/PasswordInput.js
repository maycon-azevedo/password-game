import React from "react";
import './PasswordInput.css';

const PasswordInput = ({ password, onPasswordChange }) => {
  return (
    <div className="input-container">
      <textarea
        className="password-input"
        value={password}
        onChange={(e) => onPasswordChange(e.target.value)}
        placeholder="Digite sua senha"
        rows="1"
      />
    </div>
  );
};

export default PasswordInput;
