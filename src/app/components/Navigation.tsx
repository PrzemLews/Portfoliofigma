import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import LogoIcon from "./LogoIcon";
import { cases as caseData } from "../data/cases";

const cases = caseData.map((c) => ({ label: c.title, link: `/projects/${c.slug}` }));

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Me" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const isCasesActive = location.pathname.startsWith("/projects");

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b-4 border-[#374151]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[69px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <LogoIcon className="h-[40px] w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2 items-center">
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

            {/* My Cases dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <div className="flex items-center">
                <Link
                  to="/projects"
                  className="px-4 py-2 font-semibold transition-all text-[#374151] hover:text-[#F09065] text-[18px]"
                >
                  <span className="inline-block">
                    My Cases
                    {isCasesActive && (
                      <span className="block mt-[3px] h-[4px] w-full bg-[#FFC133] -skew-x-12" />
                    )}
                  </span>
                </Link>
                <ChevronDown
                  size={18}
                  className={`transition-transform text-[#374151] ${isDropdownOpen ? "rotate-180" : ""}`}
                />
              </div>

              {isDropdownOpen && (
                <div className="absolute right-0 top-full w-56 bg-white border-4 border-[#374151] shadow-[4px_4px_0px_#374151]">
                  {cases.map((c) => (
                    <Link
                      key={c.label}
                      to={c.link}
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-4 py-3 text-[#374151] font-semibold hover:bg-[#FFC133] transition-colors border-b-2 border-[#374151] last:border-b-0 text-[15px]"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
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
                className="block px-4 py-3 text-[#374151] hover:text-[#F09065] transition-all font-semibold text-[18px]"
              >
                <span className="inline-block">
                  {item.label}
                  {isActive(item.path) && (
                    <span className="block mt-[3px] h-[4px] w-full bg-[#FFC133] -skew-x-12" />
                  )}
                </span>
              </Link>
            ))}
            <div>
              <Link
                to="/projects"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 font-semibold text-[#374151] hover:text-[#F09065] transition-all text-[18px]"
              >
                <span className="inline-block">
                  My Cases
                  {isCasesActive && (
                    <span className="block mt-[3px] h-[4px] w-full bg-[#FFC133] -skew-x-12" />
                  )}
                </span>
              </Link>
              <div>
                {cases.map((c) => (
                  <Link
                    key={c.label}
                    to={c.link}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 pl-8 pr-4 py-2 text-[#374151] hover:text-[#F09065] transition-all text-[15px]"
                  >
                    <span className="w-1.5 h-1.5 bg-[#374151] rounded-full shrink-0" />
                    {c.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
