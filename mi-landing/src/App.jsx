import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';

const Header = () => (
  <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 shadow-md">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">✨ Mi Landing React</h1>
      <nav className="space-x-6">
        <Link to="/" className="hover:underline">Inicio</Link>
        <Link to="/login" className="hover:underline">Iniciar Sesión</Link>
        <Link to="/register" className="hover:underline">Registrarse</Link>
      </nav>
    </div>
  </header>
);

const Landing = () => (
  <section className="text-center py-20 px-4 bg-gradient-to-br from-white to-blue-100 min-h-screen">
    <h2 className="text-5xl font-extrabold text-gray-800">¡Bienvenido a tu nueva página!</h2>
    <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">Diseñada con ❤️ .</p>
    <div className="mt-8">
      <Link to="/register" className="bg-purple-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-purple-700 transition">Comenzar ahora</Link>
    </div>
  </section>
);

const Login = () => (
  <section className="flex items-center justify-center min-h-screen bg-gray-50">
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
      <form className="space-y-4">
        <input className="w-full p-3 border rounded" type="text" placeholder="Usuario" />
        <input className="w-full p-3 border rounded" type="password" placeholder="Contraseña" />
        <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">Entrar</button>
      </form>
    </div>
  </section>
);

const Register = () => (
  <section className="flex items-center justify-center min-h-screen bg-gradient-to-bl from-blue-100 to-purple-100">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-purple-700">Crear una Cuenta</h2>
      <form className="space-y-4">
        <input className="w-full p-3 border rounded" type="text" placeholder="Nombre de usuario" />
        <input className="w-full p-3 border rounded" type="email" placeholder="Correo electrónico" />
        <input className="w-full p-3 border rounded" type="password" placeholder="Contraseña" />
        <button className="w-full bg-purple-600 text-white py-3 rounded hover:bg-purple-700 transition">Registrarse</button>
      </form>
    </div>
  </section>
);

const App = () => (
  <Router>
    <div className="font-sans">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  </Router>
);

export default App;
