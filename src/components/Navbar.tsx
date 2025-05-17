
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { Input } from '@/components/ui/input';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const { cartCount } = useCart();
  const { isAuthenticated, user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setSearchTerm('');
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-kenyan-brown">HUBU SCRUBS</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-kenyan-brown font-medium">
              Home
            </Link>
            <Link to="/products" className="text-foreground hover:text-kenyan-brown font-medium">
              Shop All
            </Link>
            <div className="group relative inline-block">
              <span className="text-foreground hover:text-kenyan-brown font-medium cursor-pointer">
                Categories
              </span>
              <div className="absolute hidden group-hover:block bg-background shadow-lg rounded-md p-4 w-48 z-50">
                <Link to="/products" className="block py-2 text-foreground hover:text-kenyan-red">
                  Shop All
                </Link>
                <Link to="/category/scrubs" className="block py-2 text-foreground hover:text-kenyan-red">
                  Scrubs
                </Link>
                <Link to="/category/coats" className="block py-2 text-foreground hover:text-kenyan-red">
                  Lab Coats
                </Link>
                <Link to="/category/tops" className="block py-2 text-foreground hover:text-kenyan-red">
                  Medical Tops
                </Link>
                <Link to="/category/uniforms" className="block py-2 text-foreground hover:text-kenyan-red">
                  Uniforms
                </Link>
                <Link to="/category/sets" className="block py-2 text-foreground hover:text-kenyan-red">
                  Sets
                </Link>
                <Link to="/category/shirts" className="block py-2 text-foreground hover:text-kenyan-red">
                  Shirts
                </Link>
              </div>
            </div>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <div className="hidden md:block">
              <form onSubmit={handleSearch} className="flex">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-40 pl-8 h-9"
                  />
                  <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
                <Button type="submit" variant="ghost" size="icon" className="ml-1">
                  <Search className="h-5 w-5" />
                </Button>
              </form>
            </div>

            <ThemeToggle />

            <div className="hidden md:block">
              {isAuthenticated ? (
                <div className="relative group">
                  <Button variant="ghost" size="icon" className="relative" aria-label="User account">
                    <User className="h-5 w-5" />
                  </Button>
                  <div className="absolute right-0 hidden group-hover:block bg-background shadow-lg rounded-md p-4 w-48 z-50">
                    <div className="px-2 py-2 text-sm font-medium text-muted-foreground">
                      Hello, {user?.name || user?.email}
                    </div>
                    <Link to="/profile" className="block w-full text-left px-2 py-2 text-sm text-foreground hover:text-kenyan-red">
                      My Profile
                    </Link>
                    <Link to="/orders" className="block w-full text-left px-2 py-2 text-sm text-foreground hover:text-kenyan-red">
                      My Orders
                    </Link>
                    <button
                      onClick={logout}
                      className="w-full text-left px-2 py-2 text-sm text-foreground hover:text-kenyan-red"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <Link to="/login">
                  <Button variant="ghost" size="sm">
                    Login
                  </Button>
                </Link>
              )}
            </div>

            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative" aria-label="Shopping cart">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-kenyan-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background px-4 py-4 shadow-lg">
          <form onSubmit={handleSearch} className="mb-4">
            <div className="flex">
              <div className="relative flex-grow">
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
              <Button type="submit" size="sm" className="ml-1">Search</Button>
            </div>
          </form>
          
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/"
              className="text-foreground hover:text-kenyan-brown font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products"
              className="text-foreground hover:text-kenyan-brown font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop All
            </Link>
            
            <div className="border-t border-border pt-3 pb-1">
              <p className="text-sm text-muted-foreground">Categories</p>
            </div>
            
            <Link 
              to="/category/scrubs"
              className="pl-3 text-foreground hover:text-kenyan-brown"
              onClick={() => setIsMenuOpen(false)}
            >
              Scrubs
            </Link>
            <Link 
              to="/category/coats"
              className="pl-3 text-foreground hover:text-kenyan-brown"
              onClick={() => setIsMenuOpen(false)}
            >
              Lab Coats
            </Link>
            <Link 
              to="/category/tops"
              className="pl-3 text-foreground hover:text-kenyan-brown"
              onClick={() => setIsMenuOpen(false)}
            >
              Medical Tops
            </Link>
            <Link 
              to="/category/uniforms"
              className="pl-3 text-foreground hover:text-kenyan-brown"
              onClick={() => setIsMenuOpen(false)}
            >
              Uniforms
            </Link>
            <Link 
              to="/category/sets"
              className="pl-3 text-foreground hover:text-kenyan-brown"
              onClick={() => setIsMenuOpen(false)}
            >
              Sets
            </Link>
            <Link 
              to="/category/shirts"
              className="pl-3 text-foreground hover:text-kenyan-brown"
              onClick={() => setIsMenuOpen(false)}
            >
              Shirts
            </Link>
            
            <div className="border-t border-border pt-2">
              {isAuthenticated ? (
                <>
                  <p className="text-sm text-muted-foreground mb-2">Account</p>
                  <Link 
                    to="/profile"
                    className="block py-2 text-foreground hover:text-kenyan-brown"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    My Profile
                  </Link>
                  <Link 
                    to="/orders"
                    className="block py-2 text-foreground hover:text-kenyan-brown"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    My Orders
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="block py-2 text-foreground hover:text-kenyan-brown"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link 
                  to="/login"
                  className="block py-2 text-foreground hover:text-kenyan-brown"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login / Register
                </Link>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
