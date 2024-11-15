"use client"
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">CleanCo</span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Services</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-primary transition-colors">How it Works</a>
            <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">Pricing</a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a>
            <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#services"
                className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
              >
                Services
              </a>
              <a
                href="#how-it-works"
                className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
              >
                How it Works
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
              >
                Contact
              </a>
              <button className="w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;