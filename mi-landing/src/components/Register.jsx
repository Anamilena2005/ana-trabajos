import React from 'react';
<h2 className="text-red-500 text-2xl">Esto es rojo si Tailwind funciona</h2>
const Register = () => {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form>
        <input
          className="w-full mb-2 p-2 border"
          type="text"
          placeholder="Username"
        />
        <input
          className="w-full mb-2 p-2 border"
          type="email"
          placeholder="Email"
        />
        <input
          className="w-full mb-2 p-2 border"
          type="password"
          placeholder="Password"
        />
        <button className="w-full bg-blue-500 text-white p-2 mt-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;