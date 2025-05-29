
import React from 'react';
import { Facebook } from 'lucide-react';

const QuickLinksSection = () => {
  return (
    <section className="py-8 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Quick Links</h2>
          <div className="flex justify-center">
            <a 
              href="https://www.facebook.com/profile.php?id=100070408316570&mibextid=rS40aB7S9Ucbxw6v"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <Facebook className="h-5 w-5" />
              Follow us on Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickLinksSection;
