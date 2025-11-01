import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-slate-800">
                Swastik <span className="text-blue-600">Steel Works</span>
              </h1>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                About Us
              </button>
              <button onClick={() => scrollToSection('products')} className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Products
              </button>
              <button onClick={() => scrollToSection('industries')} className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Industries
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Gallery
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                Contact Us
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <button onClick={() => scrollToSection('home')} className="text-slate-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left">
              About Us
            </button>
            <button onClick={() => scrollToSection('products')} className="text-slate-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left">
              Products
            </button>
            <button onClick={() => scrollToSection('industries')} className="text-slate-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left">
              Industries
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-slate-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-slate-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left">
              Gallery
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-white block px-3 py-2 text-base font-medium w-full text-left rounded-md">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
