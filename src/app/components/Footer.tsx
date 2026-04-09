import { Link } from "react-router";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#374151] text-white py-12 mt-20 border-t-8 border-[#FFC133]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-[#FFC133] border-4 border-white flex items-center justify-center">
                <span className="text-[#374151] text-xl font-bold">A</span>
              </div>
              <span className="text-xl font-bold">
                Alexandra <span className="text-[#FFC133]">Kim</span>
              </span>
            </div>
            <p className="text-gray-300">
              UX Designer passionate about creating meaningful digital experiences
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 border-b-4 border-[#FFC133] inline-block pb-1">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#FFC133] transition-colors inline-block hover:translate-x-1">
                  → Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#FFC133] transition-colors inline-block hover:translate-x-1">
                  → About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-[#FFC133] transition-colors inline-block hover:translate-x-1">
                  → Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#FFC133] transition-colors inline-block hover:translate-x-1">
                  → Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold mb-4 border-b-4 border-[#FFC133] inline-block pb-1">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="mailto:alex@example.com"
                className="p-2 bg-[#FFC133] hover:bg-[#FF8A5B] border-4 border-white transition-all hover:translate-y-[-4px]"
                aria-label="Email"
              >
                <Mail size={20} className="text-[#374151]" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#FFC133] hover:bg-[#FF8A5B] border-4 border-white transition-all hover:translate-y-[-4px]"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-[#374151]" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#FFC133] hover:bg-[#FF8A5B] border-4 border-white transition-all hover:translate-y-[-4px]"
                aria-label="GitHub"
              >
                <Github size={20} className="text-[#374151]" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#FFC133] hover:bg-[#FF8A5B] border-4 border-white transition-all hover:translate-y-[-4px]"
                aria-label="Twitter"
              >
                <Twitter size={20} className="text-[#374151]" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t-4 border-[#FFC133] mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2026 Alexandra Kim. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}