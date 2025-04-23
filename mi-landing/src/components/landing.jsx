import React from "react";
import "./Landing.css";

const Landing = () => {
  return (
    <section className="landing-section">
      <div className="landing-content">
        <h1>Bienvenido a mi página</h1>
        <p>Explora nuestras ventajas y regístrate para saber más.</p>
        <button>Comenzar</button>
      </div>
      <div className="landing-image">
        <img src="/imagenes/landing-img.png" alt="Landing Visual" />
      </div>
    </section>
  );
};

export default Landing;