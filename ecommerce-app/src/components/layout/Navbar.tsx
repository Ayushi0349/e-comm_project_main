import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

interface NavbarProps {
  cartCount?: number;
  cartTotal?: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount = 0, cartTotal = 0 }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = ['HOME', 'BAGS', 'SNEAKERS', 'BELT', 'CONTACT'];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className=" mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/ecommlogo.png" alt="Logo" className="h-8 w-auto" />
          </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block ml-10 ">
              <div className="flex items-center space-x-20">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-gray-700 hover:text-primary transition-colors text-sm font-medium"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <button className="relative p-2" aria-label="Shopping cart">
              <ShoppingCart size={24} className="text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-hot text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            
            {/* Cart Total */}
            <div className="hidden sm:block text-sm">
              <div className="text-gray-500">Items: ${cartTotal.toFixed(2)}</div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="py-2 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              <div className="px-3 py-2 text-sm text-gray-500 border-t">
                Items: ${cartTotal.toFixed(2)}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;