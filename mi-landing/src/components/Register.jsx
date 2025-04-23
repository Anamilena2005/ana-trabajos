import React from 'react';
import './Register.css';

const Register = () => {
  return (
    <section className="register-section">
      <form className="register-form">
        <h2 className="register-title">Registrarse</h2>
        <input className="register-input" type="text" placeholder="Nombre de usuario" />
        <input className="register-input" type="email" placeholder="Correo electrónico" />
        <input className="register-input" type="password" placeholder="Contraseña" />
        <button className="register-button">Crear cuenta</button>
      </form>
    </section>
  );
};

export default Register;
