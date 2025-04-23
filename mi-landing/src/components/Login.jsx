import React from 'react';
import './Login.css';

const Login = () => (
  <section className="login-section">
    <form className="login-form">
      <h2 className="login-title">Iniciar Sesión</h2>
      <input className="login-input" type="text" placeholder="Usuario" />
      <input className="login-input" type="password" placeholder="Contraseña" />
      <button className="login-button">Entrar</button>
    </form>
  </section>
);

export default Login;

  