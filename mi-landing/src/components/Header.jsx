import { Link } from 'react-router-dom';

const Header = () => (
  <header className="flex justify-between items-center p-4 bg-white shadow">
    <div className="font-bold text-xl">COMPANY</div>
    <nav className="space-x-4">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
    <div className="text-sm">999-456-009</div>
  </header>
);

export default Header;
