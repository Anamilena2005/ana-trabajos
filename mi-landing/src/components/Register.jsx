const Register = () => (
    <form className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <input className="w-full mb-2 p-2 border" type="text" placeholder="Username" />
      <input className="w-full mb-2 p-2 border" type="email" placeholder="Email" />
      <input className="w-full mb-2 p-2 border" type="password" placeholder="Password" />
      <input className="w-full mb-4 p-2 border" type="password" placeholder="Confirm Password" />
      <button className="bg-green-500 text-white px-4 py-2 rounded">Register</button>
    </form>
  );
  
  export default Register;
  