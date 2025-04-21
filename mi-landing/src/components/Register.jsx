import React from 'react';

const Register = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Registro</h2>
      <input
        className="w-full mb-4 p-2 border border-gray-300 rounded"
        type="text"
        placeholder="Username"
      />
      <input
        className="w-full mb-4 p-2 border border-gray-300 rounded"
        type="email"
        placeholder="Email"
      />
      <input
        className="w-full mb-4 p-2 border border-gray-300 rounded"
        type="password"
        placeholder="Password"
      />
      <input
        className="w-full mb-6 p-2 border border-gray-300 rounded"
        type="password"
        placeholder="Confirm Password"
      />
      <button
        className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        type="submit"
      >
        Register
      </button>
    </form>
  </div>
);

export default Register;
