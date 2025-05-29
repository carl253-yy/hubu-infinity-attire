
import React from 'react';
import { Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-kenyan-brown text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">ROYAL SCRUBS</h3>
            <p className="text-kenyan-sand">Quality Medical Apparel for Healthcare Professionals</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-kenyan-sand">Follow us:</span>
            <a
              href="https://www.facebook.com/profile.php?id=100070408316570&mibextid=rS40aB7S9Ucbxw6v"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
          
          <div className="text-center text-sm text-kenyan-sand">
            <p>&copy; 2024 Royal Scrubs. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
