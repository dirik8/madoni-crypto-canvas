
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0A0B0F]/90 backdrop-blur-lg border-b border-gray-800" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white">
            Madoni<span className="text-blue-500">chain</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/" className="px-4 py-2 text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors flex items-center">
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 transform translate-y-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-[#1A1D26] border border-gray-800 rounded-lg shadow-xl p-4 min-w-[200px]">
                <Link to="/spot" className="block px-4 py-2 text-gray-300 hover:text-white transition-colors">
                  Spot Trading
                </Link>
                <Link to="/futures" className="block px-4 py-2 text-gray-300 hover:text-white transition-colors">
                  Futures
                </Link>
                <Link to="/copy-trading" className="block px-4 py-2 text-gray-300 hover:text-white transition-colors">
                  Copy Trading
                </Link>
                <Link to="/grid-trading" className="block px-4 py-2 text-gray-300 hover:text-white transition-colors">
                  Grid Trading
                </Link>
              </div>
            </div>
            <Link to="/markets" className="px-4 py-2 text-gray-300 hover:text-white transition-colors">
              Markets
            </Link>
            <Link to="/learn" className="px-4 py-2 text-gray-300 hover:text-white transition-colors">
              Learn
            </Link>
            <Link to="/about" className="px-4 py-2 text-gray-300 hover:text-white transition-colors">
              About
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">
              Login
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Register
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0B0F]/95 backdrop-blur-lg border-b border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="px-4 py-2 text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/spot" className="px-4 py-2 text-gray-300 hover:text-white transition-colors pl-8">
                Spot Trading
              </Link>
              <Link to="/futures" className="px-4 py-2 text-gray-300 hover:text-white transition-colors pl-8">
                Futures
              </Link>
              <Link to="/copy-trading" className="px-4 py-2 text-gray-300 hover:text-white transition-colors pl-8">
                Copy Trading
              </Link>
              <Link to="/grid-trading" className="px-4 py-2 text-gray-300 hover:text-white transition-colors pl-8">
                Grid Trading
              </Link>
              <Link to="/markets" className="px-4 py-2 text-gray-300 hover:text-white transition-colors">
                Markets
              </Link>
              <Link to="/learn" className="px-4 py-2 text-gray-300 hover:text-white transition-colors">
                Learn
              </Link>
              <Link to="/about" className="px-4 py-2 text-gray-300 hover:text-white transition-colors">
                About
              </Link>
            </nav>
            <div className="flex space-x-3 mt-4">
              <Button variant="ghost" className="flex-1 text-gray-300 hover:text-white hover:bg-gray-800">
                Login
              </Button>
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                Register
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
