'use client';

import Link from 'next/link';
import { Poppins } from 'next/font/google';
import { useState } from 'react';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600']
});

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#8B3333]">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img 
                src="/smarak.png" 
                alt="SMÀRÀK Logo" 
                className="h-7 sm:h-8 md:h-10 w-auto"
              />
            </Link>
          </div>

          {/* Right side: Navigation Links and Sign In Button */}
          <div className="flex items-center gap-4 lg:gap-6">
            <div className={`hidden lg:flex items-center space-x-6 xl:space-x-8 ${poppins.className}`}>
              <Link 
                href="/about" 
                className="text-[#F5DEB3] hover:text-white transition-colors font-normal text-sm xl:text-base whitespace-nowrap"
              >
                About Us
              </Link>
              <Link 
                href="/events" 
                className="text-[#F5DEB3] hover:text-white transition-colors font-normal text-sm xl:text-base"
              >
                Events
              </Link>
              <Link 
                href="/gallery" 
                className="text-[#F5DEB3] hover:text-white transition-colors font-normal text-sm xl:text-base"
              >
                Gallery
              </Link>
              <Link 
                href="/teams" 
                className="text-[#F5DEB3] hover:text-white transition-colors font-normal text-sm xl:text-base"
              >
                Teams
              </Link>
              <Link 
                href="/contact" 
                className="text-[#F5DEB3] hover:text-white transition-colors font-normal text-sm xl:text-base whitespace-nowrap"
              >
                Contact Us
              </Link>
            </div>

            <div className={`hidden lg:block ${poppins.className}`}>
              <Link 
                href="/signin"
                className="border-2 border-[#F5DEB3] text-[#F5DEB3] hover:bg-[#F5DEB3] hover:text-[#8B3333] px-5 xl:px-6 py-1.5 xl:py-2 rounded-full transition-all font-normal text-sm xl:text-base"
              >
                Sign in
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#F5DEB3] hover:text-white focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className={`${poppins.className} py-4 space-y-2 border-t border-[#A64848]`}>
            <Link 
              href="/about" 
              className="block text-[#F5DEB3] hover:bg-[#A64848] transition-all duration-200 font-normal py-3 px-4 mx-2 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/events" 
              className="block text-[#F5DEB3] hover:bg-[#A64848] transition-all duration-200 font-normal py-3 px-4 mx-2 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link 
              href="/gallery" 
              className="block text-[#F5DEB3] hover:bg-[#A64848] transition-all duration-200 font-normal py-3 px-4 mx-2 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              href="/teams" 
              className="block text-[#F5DEB3] hover:bg-[#A64848] transition-all duration-200 font-normal py-3 px-4 mx-2 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Teams
            </Link>
            <Link 
              href="/contact" 
              className="block text-[#F5DEB3] hover:bg-[#A64848] transition-all duration-200 font-normal py-3 px-4 mx-2 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <div className="pt-2 px-2">
              <Link 
                href="/signin"
                className="block border-2 border-[#F5DEB3] text-[#F5DEB3] hover:bg-[#F5DEB3] hover:text-[#8B3333] px-6 py-2.5 rounded-full transition-all duration-200 font-normal text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
