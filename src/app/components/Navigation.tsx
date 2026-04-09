import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b-4 border-[#374151]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#FFC133] border-4 border-[#374151] flex items-center justify-center">
              <span className="text-[#374151] text-xl font-bold">A</span>
            </div>
            <span className="text-2xl font-bold text-[#374151]">
              Alexandra <span className="text-[#FFC133]">Kim</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-5 py-2 border-3 border-[#374151] transition-all ${
                  isActive(item.path)
                    ? "bg-[#FFC133] text-[#374151] translate-y-[-2px]"
                    : "bg-white text-[#374151] hover:bg-[#FFF8F0] hover:translate-y-[-2px]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#374151] hover:text-[#FFC133] border-3 border-[#374151]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t-3 border-[#374151]">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 border-3 border-[#374151] mb-2 transition-all ${
                  isActive(item.path)
                    ? "bg-[#FFC133] text-[#374151]"
                    : "bg-white text-[#374151] hover:bg-[#FFF8F0]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}