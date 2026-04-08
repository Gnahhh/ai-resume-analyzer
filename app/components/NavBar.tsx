import react from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="navbar">
      <Link to="/">
        <p className="text-2xl font-bold text-gradient">Welcome</p>
      </Link>
      <Link to="upload" className="primary-button w-fit">
        Upload Resume
      </Link>
    </div>
  );
}
