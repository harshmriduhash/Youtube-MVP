'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, Bell, User, Mic } from 'lucide-react';
import SearchAutocomplete from './SearchAutocomplete';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-youtube-dark text-white px-4 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left side - Logo and Menu */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-youtube-gray rounded-full transition-colors"
          >
            <Menu size={20} />
          </button>
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-youtube-red rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">Y</span>
            </div>
            <span className="text-xl font-bold hidden sm:block">YouTube 2.0</span>
          </Link>
        </div>

        {/* Center - Search Bar with Autocomplete */}
        <SearchAutocomplete />

        {/* Right side - User actions */}
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-youtube-gray rounded-full transition-colors">
            <Mic size={20} />
          </button>
          <button className="p-2 hover:bg-youtube-gray rounded-full transition-colors">
            <Bell size={20} />
          </button>
          <Link href="/profile" className="p-2 hover:bg-youtube-gray rounded-full transition-colors">
            <User size={20} />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-youtube-dark border-t border-youtube-gray">
          <div className="px-4 py-2 space-y-2">
            <Link href="/" className="block py-2 hover:bg-youtube-gray rounded px-2">
              Home
            </Link>
            <Link href="/trending" className="block py-2 hover:bg-youtube-gray rounded px-2">
              Trending
            </Link>
            <Link href="/subscriptions" className="block py-2 hover:bg-youtube-gray rounded px-2">
              Subscriptions
            </Link>
            <Link href="/profile" className="block py-2 hover:bg-youtube-gray rounded px-2">
              Profile
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
