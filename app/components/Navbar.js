'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 sm:h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/images/logo.png" 
                alt="Lucknow Infra Vision Logo"
                width={40}
                height={40}
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                priority
              />
              <span className="text-lg sm:text-xl font-semibold text-[#902C2E]">
                Lucknow Infra Vision
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link href="/" className="text-gray-600 hover:text-rose-500 font-medium transition-colors text-sm lg:text-base">
              Home
            </Link>
            <Link href="/properties" className="text-gray-600 hover:text-rose-500 font-medium transition-colors text-sm lg:text-base">
              Properties
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-rose-500 font-medium transition-colors text-sm lg:text-base">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-rose-500 font-medium transition-colors text-sm lg:text-base">
              Contact
            </Link>
            {/* Social Media Icons for Desktop */}
            <div className="flex items-center space-x-3">
              <a href="https://www.facebook.com/share/18XMwz1MBC/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-rose-500 transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="https://x.com/Lucknow_infra?t=YOjlkwLHLrQ-OY7_xva0tA&s=08" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-rose-500 transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/share/18XMwz1MBC/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-rose-500 transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-rose-500 focus:outline-none"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!mobileMenuOpen ? (
                <svg className="block h-5 w-5 sm:h-6 sm:w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-5 w-5 sm:h-6 sm:w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
            <Link href="/" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-rose-500 hover:bg-gray-50">
              Home
            </Link>
            <Link href="/properties" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-rose-500 hover:bg-gray-50">
              Properties
            </Link>
            <Link href="/about" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-rose-500 hover:bg-gray-50">
              About
            </Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-rose-500 hover:bg-gray-50">
              Contact
            </Link>
            {/* Social Media Icons for Mobile */}
            <div className="flex items-center space-x-4 px-3 py-2">
              <a href="https://www.facebook.com/share/18XMwz1MBC/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-rose-500 transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="https://x.com/Lucknow_infra?t=YOjlkwLHLrQ-OY7_xva0tA&s=08" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-rose-500 transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/share/18XMwz1MBC/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-rose-500 transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 