'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm border-b border-gray-800">
      <div className="w-[70%] mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
         
          <Image
            src="/image/logo.png"
            alt="Grupo Empresarial J4 Logo"
            width={150}
            height={100}
            className="rounded-lg"
          />

        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="#inicio" className="text-white hover:text-gray-300 transition-colors">
            Inicio
          </Link>
          <Link href="#servicios" className="text-white hover:text-gray-300 transition-colors">
            Servicios
          </Link>
          <Link href="#contacto" className="text-white hover:text-gray-300 transition-colors">
            Contacto
          </Link>
        </nav>
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Centered */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex flex-col items-center space-y-4">
              <Link
                href="#inicio"
                className="text-white hover:text-gray-300 transition-colors py-2 text-center w-full"
                onClick={closeMenu}
              >
                Inicio
              </Link>
              <Link
                href="#servicios"
                className="text-white hover:text-gray-300 transition-colors py-2 text-center w-full"
                onClick={closeMenu}
              >
                Servicios
              </Link>
              <Link
                href="#contacto"
                className="text-white hover:text-gray-300 transition-colors py-2 text-center w-full"
                onClick={closeMenu}
              >
                Contacto
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}