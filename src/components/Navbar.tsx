
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary text-primary-foreground py-4 sticky top-0 z-10 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            Данте
          </Link>
          <div className="flex space-x-6">
            <Link to="/" className="hover:text-purple-200 transition-colors">
              Главная
            </Link>
            <a href="#biography" className="hover:text-purple-200 transition-colors">
              Биография
            </a>
            <a href="#inferno" className="hover:text-purple-200 transition-colors">
              Ад
            </a>
            <a href="#purgatory" className="hover:text-purple-200 transition-colors">
              Чистилище
            </a>
            <a href="#paradise" className="hover:text-purple-200 transition-colors">
              Рай
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
