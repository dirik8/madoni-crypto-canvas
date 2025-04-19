
import { Link } from "react-router-dom";
import { Twitter, Facebook, Instagram, Linkedin, Github, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0B0F] border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-lg rounded-xl p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to start trading?</h3>
              <p className="text-gray-300 mb-0 md:mb-6">
                Join over 2 million traders worldwide on Madonichain Exchange
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-end">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                Create Account
              </button>
              <button className="px-6 py-3 bg-transparent border border-gray-600 hover:border-gray-400 text-white rounded-lg font-medium transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
        
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo and social links */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <h2 className="text-2xl font-bold">Madoni<span className="text-blue-500">chain</span></h2>
            </Link>
            <p className="text-gray-400 mb-6 max-w-xs">
              The next generation digital asset exchange with professional trading features and secure custody.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Products</h3>
            <ul className="space-y-3">
              <li><Link to="/spot" className="text-gray-400 hover:text-white transition-colors">Spot Trading</Link></li>
              <li><Link to="/futures" className="text-gray-400 hover:text-white transition-colors">Futures</Link></li>
              <li><Link to="/copy-trading" className="text-gray-400 hover:text-white transition-colors">Copy Trading</Link></li>
              <li><Link to="/grid-trading" className="text-gray-400 hover:text-white transition-colors">Grid Trading</Link></li>
              <li><Link to="/learn" className="text-gray-400 hover:text-white transition-colors">Learn</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/press" className="text-gray-400 hover:text-white transition-colors">Press</Link></li>
              <li><Link to="/security" className="text-gray-400 hover:text-white transition-colors">Security</Link></li>
              <li><Link to="/community" className="text-gray-400 hover:text-white transition-colors">Community</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Support</h3>
            <ul className="space-y-3">
              <li><Link to="/help-center" className="text-gray-400 hover:text-white transition-colors">Help Center</Link></li>
              <li><Link to="/fees" className="text-gray-400 hover:text-white transition-colors">Fees</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/api-docs" className="text-gray-400 hover:text-white transition-colors">API Documentation</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Madonichain Exchange. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            <Link to="/terms" className="text-gray-500 text-sm hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="text-gray-500 text-sm hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/cookies" className="text-gray-500 text-sm hover:text-white transition-colors">Cookie Policy</Link>
            <Link to="/disclaimer" className="text-gray-500 text-sm hover:text-white transition-colors">Risk Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
