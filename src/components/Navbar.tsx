
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0F172A] border-b border-blue-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-lg font-medium text-blue-300">
              Gabriel Silva Santana
            </a>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#projetos" className="text-sm text-blue-200 hover:text-blue-400 transition-colors">
              Projetos
            </a>
            <a href="#sobre" className="text-sm text-blue-200 hover:text-blue-400 transition-colors">
              Sobre
            </a>
            <a href="#contato" className="text-sm text-blue-200 hover:text-blue-400 transition-colors">
              Contato
            </a>
            <Button className="bg-blue-600 hover:bg-blue-700 text-sm font-normal">
              Currículo
            </Button>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="text-blue-300 hover:bg-blue-900/50">
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F172A] border-b border-blue-900/30">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#projetos"
              className="block px-3 py-2 text-sm text-blue-200 hover:text-blue-400 hover:bg-blue-900/30 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projetos
            </a>
            <a
              href="#sobre"
              className="block px-3 py-2 text-sm text-blue-200 hover:text-blue-400 hover:bg-blue-900/30 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre
            </a>
            <a
              href="#contato"
              className="block px-3 py-2 text-sm text-blue-200 hover:text-blue-400 hover:bg-blue-900/30 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </a>
            <div className="px-3 py-2">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-sm">
                Currículo
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
