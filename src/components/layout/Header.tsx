
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-white">
              <Icon name="Gift" className="h-6 w-6 text-white" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-gray-300 text-sm font-medium transition-colors">
              Главная
            </Link>
            <Link to="/cards" className="text-white hover:text-gray-300 text-sm font-medium transition-colors">
              Gift карты
            </Link>
            <Link to="/instructions" className="text-white hover:text-gray-300 text-sm font-medium transition-colors">
              Инструкция
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              className="text-white"
              onClick={toggleMobileMenu}
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-black">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-white hover:text-gray-300 text-sm font-medium px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Главная
              </Link>
              <Link 
                to="/cards" 
                className="text-white hover:text-gray-300 text-sm font-medium px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gift карты
              </Link>
              <Link 
                to="/instructions" 
                className="text-white hover:text-gray-300 text-sm font-medium px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Инструкция
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
