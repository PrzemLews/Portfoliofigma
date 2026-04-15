import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import LogoIcon from "./LogoIcon";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "My Cases" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b-4 border-[#374151]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[69px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <LogoIcon className="h-[40px] w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="px-4 py-2 font-semibold transition-all text-[#374151] hover:text-[#F09065] text-[18px]"
              >
                <span className="inline-block">
                  {item.label}
                  {isActive(item.path) && (
                    <span className="block mt-[3px] h-[4px] w-full bg-[#FFC133] -skew-x-12" />
                  )}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#374151] hover:text-[#FFC133] border-2 border-[#374151]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t-2 border-[#374151]">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 border-2 border-[#374151] mb-2 transition-all ${
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